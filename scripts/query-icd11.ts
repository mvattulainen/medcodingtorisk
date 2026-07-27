import { createHash } from "node:crypto"
import { existsSync, readFileSync, writeFileSync } from "node:fs"
import { mkdir } from "node:fs/promises"
import { resolve } from "node:path"
import { BUILD_TIMESTAMP, WHO_API_VERSION, WHO_RELEASE, slugify, stableJson } from "./lib"

const defaultQueries = [
  "eye irritation",
  "dry eye",
  "skin lesion",
  "open wound of nose",
  "skin rash",
  "dry mouth",
  "sore throat",
  "nasal dryness",
  "epistaxis",
  "abdominal bloating",
  "aerophagia",
  "headache",
  "daytime sleepiness",
  "chest discomfort",
  "anxiety",
  "panic symptoms",
  "cough",
  "choking sensation",
  "burn of hand",
  "sleep disturbance",
  "shortness of breath",
  "difficulty exhaling",
  "throat irritation",
  "insomnia",
  "fatigue",
  "skin redness",
  "belching",
]

function loadCredentials(): { clientId: string; clientSecret: string } {
  if (process.env.WHO_ICD_CLIENT_ID && process.env.WHO_ICD_CLIENT_SECRET) {
    return {
      clientId: process.env.WHO_ICD_CLIENT_ID,
      clientSecret: process.env.WHO_ICD_CLIENT_SECRET,
    }
  }

  const credentialPath = resolve(process.env.WHO_CREDENTIALS_FILE ?? "credentials/credentials.txt")
  if (!existsSync(credentialPath)) {
    throw new Error(
      "WHO credentials not found. Set WHO_ICD_CLIENT_ID and WHO_ICD_CLIENT_SECRET, or WHO_CREDENTIALS_FILE.",
    )
  }

  const lines = readFileSync(credentialPath, "utf8").split(/\r?\n/)
  if (lines.length < 5 || !lines[1]?.trim() || !lines[4]?.trim()) {
    throw new Error("The local credential file format is incomplete")
  }
  return { clientId: lines[1].trim(), clientSecret: lines[4].trim() }
}

const { clientId, clientSecret } = loadCredentials()
const tokenResponse = await fetch("https://icdaccessmanagement.who.int/connect/token", {
  method: "POST",
  headers: {
    Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: new URLSearchParams({ grant_type: "client_credentials", scope: "icdapi_access" }),
})

if (!tokenResponse.ok) {
  throw new Error(`WHO authentication failed with HTTP ${tokenResponse.status}`)
}
const tokenBody = (await tokenResponse.json()) as { access_token?: string }
if (!tokenBody.access_token) throw new Error("WHO authentication response did not contain an access token")

const outputDirectory = resolve(`data/icd11-cache/${WHO_RELEASE}`)
await mkdir(outputDirectory, { recursive: true })
const index = []

for (const query of defaultQueries) {
  const url = new URL(`https://id.who.int/icd/release/11/${WHO_RELEASE}/mms/search`)
  url.searchParams.set("q", query)
  url.searchParams.set("useFlexisearch", "true")
  url.searchParams.set("flatResults", "true")
  url.searchParams.set("highlightingEnabled", "false")
  url.searchParams.set("medicalCodingMode", "true")

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${tokenBody.access_token}`,
      Accept: "application/json",
      "Accept-Language": "en",
      "API-Version": WHO_API_VERSION,
    },
  })
  if (!response.ok) throw new Error(`WHO search failed for "${query}" with HTTP ${response.status}`)

  const body = (await response.json()) as {
    destinationEntities?: Array<{
      id: string
      title: string
      theCode: string
      foundationUri?: string
      score?: number
    }>
  }
  const cacheRecord = {
    query,
    requestUrl: url.toString(),
    retrievedAt: BUILD_TIMESTAMP,
    apiVersion: WHO_API_VERSION,
    release: WHO_RELEASE,
    linearization: "mms",
    response: body,
  }
  const serialized = stableJson(cacheRecord)
  const cacheFile = `data/icd11-cache/${WHO_RELEASE}/${slugify(query)}.json`
  writeFileSync(resolve(cacheFile), serialized)
  index.push({
    query,
    cacheFile,
    responseHash: `sha256:${createHash("sha256").update(serialized).digest("hex")}`,
    candidates: (body.destinationEntities ?? []).slice(0, 10),
  })
  console.log(`Cached WHO ICD-11 search: ${query} (${(body.destinationEntities ?? []).length} results)`)
}

writeFileSync(resolve(outputDirectory, "index.json"), stableJson(index))
console.log(`WHO ICD-11 cache complete: ${index.length} queries, release ${WHO_RELEASE}`)
