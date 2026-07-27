import { readFileSync, writeFileSync } from "node:fs"
import { mkdir } from "node:fs/promises"
import { resolve } from "node:path"
import { BUILD_TIMESTAMP, IMDRF_RELEASE_PAGE, IMDRF_SOURCE_URL, sha256, stableJson } from "./lib"

interface OfficialRecord {
  code: string
  term: string
  definition: string
  "non-IMDRF code": string
  status: string
  "status description": string
  "primary category": string
  "secondary category": string
  codehierarchy: string
}

interface LocalRecord {
  terminology: "IMDRF AET"
  release: "2026"
  annex: string
  code: string
  term: string
  definition: string
  parentCode: string | null
  level: number
  status: "active" | "retired" | "not-selectable"
  selectable: boolean
  hierarchy: string[]
  hierarchyAliases: string[][]
  primaryCategories: string[]
  secondaryCategories: string[]
  nonImdrfMappings: string[]
  sourceUrl: string
  sourceChecksum: string
  sourceRecordHash: string
  statusDescription: string
}

const root = resolve(process.cwd())
const sourcePath = resolve(root, "data/imdrf/2026/official-annex-a-g-consolidated.json")
const raw = readFileSync(sourcePath)
const sourceChecksum = sha256(raw)
const official = JSON.parse(raw.toString("utf8")) as OfficialRecord[]

if (!Array.isArray(official) || official.length < 1000) {
  throw new Error("IMDRF source is missing or unexpectedly small")
}

const merged = new Map<
  string,
  OfficialRecord & {
    primary: Set<string>
    secondary: Set<string>
    mappings: Set<string>
    hierarchies: Set<string>
  }
>()
const duplicateExceptions: Array<{ code: string; reason: string }> = []

for (const record of official) {
  record.code = record.code.trim()
  record.term = record.term.trim()
  record.definition = record.definition.trim()
  record.codehierarchy = record.codehierarchy
    .split("|")
    .map((part) => part.trim())
    .join("|")
  if (!/^[A-G][0-9]*$/.test(record.code) || !record.term || !record.codehierarchy) {
    throw new Error(`Invalid official IMDRF record: ${JSON.stringify(record)}`)
  }
  const existing = merged.get(record.code)
  if (!existing) {
    merged.set(record.code, {
      ...record,
      primary: new Set(record["primary category"] ? [record["primary category"]] : []),
      secondary: new Set(record["secondary category"] ? [record["secondary category"]] : []),
      mappings: new Set(record["non-IMDRF code"] ? [record["non-IMDRF code"]] : []),
      hierarchies: new Set([record.codehierarchy]),
    })
    continue
  }
  const sameTerm =
    existing.term.toLowerCase().replace(/\s+/g, "") === record.term.toLowerCase().replace(/\s+/g, "")
  const sameDefinition =
    existing.definition.toLowerCase().replace(/\s+/g, " ").trim() ===
    record.definition.toLowerCase().replace(/\s+/g, " ").trim()
  if (!sameTerm || !sameDefinition) {
    throw new Error(`Conflicting duplicate code in official IMDRF source: ${record.code}`)
  }
  if (record["primary category"]) existing.primary.add(record["primary category"])
  if (record["secondary category"]) existing.secondary.add(record["secondary category"])
  if (record["non-IMDRF code"]) existing.mappings.add(record["non-IMDRF code"])
  existing.hierarchies.add(record.codehierarchy)
  duplicateExceptions.push({
    code: record.code,
    reason:
      "Official Annex E JSON repeats an identical code/term/definition under multiple category or hierarchy paths; categories and alternate paths were preserved.",
  })
}

const codes = new Set(merged.keys())
const localRecords: LocalRecord[] = [...merged.values()]
  .map((record) => {
    const hierarchyPaths = [...record.hierarchies].map((path) => path.split("|"))
    const hierarchy = hierarchyPaths[0]
    const parentCode = hierarchy.length > 1 ? hierarchy.at(-2)! : null
    if (parentCode && !codes.has(parentCode)) {
      throw new Error(`Orphaned IMDRF record ${record.code}: missing ${parentCode}`)
    }
    const lowerStatus = record.status.toLowerCase()
    const status: LocalRecord["status"] = lowerStatus.includes("retired")
      ? "retired"
      : lowerStatus.includes("not selectable")
        ? "not-selectable"
        : "active"
    const normalizedBase = {
      terminology: "IMDRF AET" as const,
      release: "2026" as const,
      annex: record.code[0],
      code: record.code,
      term: record.term,
      definition: record.definition,
      parentCode,
      level: hierarchy.length - 1,
      status,
      selectable: status === "active",
      hierarchy,
      hierarchyAliases: hierarchyPaths.slice(1),
      primaryCategories: [...record.primary].sort(),
      secondaryCategories: [...record.secondary].sort(),
      nonImdrfMappings: [...record.mappings].sort(),
      sourceUrl: IMDRF_SOURCE_URL,
      sourceChecksum,
      statusDescription: record["status description"],
    }
    return { ...normalizedBase, sourceRecordHash: sha256(stableJson(normalizedBase)) }
  })
  .sort((a, b) => a.code.localeCompare(b.code))

await mkdir(resolve(root, "data/imdrf/2026"), { recursive: true })
for (const annex of ["A", "B", "C", "D", "E", "F", "G"]) {
  const records = localRecords.filter((record) => record.annex === annex)
  writeFileSync(resolve(root, `data/imdrf/2026/annex-${annex.toLowerCase()}.json`), stableJson(records))
}

const importManifest = {
  terminology: "IMDRF AET",
  release: "2026",
  officialPublicationDate: "2026-03-23",
  importedAt: BUILD_TIMESTAMP,
  sourceUrl: IMDRF_SOURCE_URL,
  releasePage: IMDRF_RELEASE_PAGE,
  sourceChecksum,
  officialRecordCount: official.length,
  normalizedRecordCount: localRecords.length,
  duplicateExceptionCount: duplicateExceptions.length,
  duplicatePolicy:
    "Only byte-equivalent code/term/definition/hierarchy duplicates in the official source are merged; conflicting duplicates fail the import.",
  duplicateExceptions: [...new Map(duplicateExceptions.map((item) => [item.code, item])).values()],
}
writeFileSync(resolve(root, "data/imdrf/2026/import-manifest.json"), stableJson(importManifest))

console.log(
  `IMDRF 2026 imported: ${official.length} official rows → ${localRecords.length} unique records (${duplicateExceptions.length} repeated rows merged)`,
)
