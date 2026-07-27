import { existsSync, readFileSync, readdirSync, statSync } from "node:fs"
import { dirname, extname, resolve } from "node:path"
import { complaints } from "./domain-data"
import type { ComplaintRecord, RiskItemSeed } from "./types"

const root = resolve(process.cwd())
const errors: string[] = []
const check = (condition: unknown, message: string) => {
  if (!condition) errors.push(message)
}

const records = JSON.parse(
  readFileSync(resolve(root, "data/complaints.records.json"), "utf8"),
) as ComplaintRecord[]
const riskRegister = JSON.parse(
  readFileSync(resolve(root, "data/risk-management/cpap-risk-register.json"), "utf8"),
) as Array<RiskItemSeed & { sourceFile: string; sourceHash: string }>
const riskById = new Map(riskRegister.map((item) => [item.id, item]))
const whoIndex = JSON.parse(
  readFileSync(resolve(root, "data/icd11-cache/2026-01/index.json"), "utf8"),
) as Array<{ query: string; candidates: Array<{ theCode: string }> }>
const whoCodesByQuery = new Map(
  whoIndex.map((entry) => [entry.query, new Set(entry.candidates.map((candidate) => candidate.theCode))]),
)
const imdrfCodes = new Set(
  ["a", "b", "c", "d", "e", "f", "g"].flatMap((annex) =>
    (
      JSON.parse(
        readFileSync(resolve(root, `data/imdrf/2026/annex-${annex}.json`), "utf8"),
      ) as Array<{ code: string }>
    ).map((record) => record.code),
  ),
)

const complaintDirectory = resolve(root, "content/complaints")
const complaintPages = readdirSync(complaintDirectory).filter((name) => name.endsWith(".md"))
const rootPages = readdirSync(resolve(root, "content")).filter((name) => name.endsWith(".md"))

check(records.length === 20, `Expected 20 complaint records, found ${records.length}`)
check(complaintPages.length === 20, `Expected 20 complaint pages, found ${complaintPages.length}`)
check(rootPages.length === 2, `Expected index.md and risk-management.md only at content root, found ${rootPages.length}`)
check(rootPages.includes("index.md"), "content/index.md is missing")
check(rootPages.includes("risk-management.md"), "content/risk-management.md is missing")

const expectedIds = Array.from({ length: 20 }, (_, index) => `CPAP-${String(index + 1).padStart(3, "0")}`)
check(
  JSON.stringify(records.map((record) => record.id).sort()) === JSON.stringify(expectedIds),
  "Complaint IDs are incomplete, duplicated, or out of range",
)

const requiredHeadings = [
  "## Complaint",
  "## Coding summary",
  "## Complaint-to-risk chain",
  "## Evidence spans",
  "## Accepted coded terms",
  "## Alternative candidates",
  "## Uncoded or ambiguous statements",
  "## Follow-up questions",
  "## Tags",
  "### Medical",
  "### Technical",
  "## Regulatory review cues",
  "## Risk-management linkage",
  "### Primary proposed link",
  "### Risk-control review",
  "### Risk-file comparison",
  "## Provenance",
  "## Sources",
  "## Related complaints",
]

const expectedPrimary = new Map([
  ["CPAP-001", "RISK-CPAP-006"],
  ["CPAP-002", "RISK-CPAP-005"],
  ["CPAP-003", "RISK-CPAP-005"],
  ["CPAP-004", "RISK-CPAP-003"],
  ["CPAP-005", "RISK-CPAP-003"],
  ["CPAP-006", "RISK-CPAP-002"],
  ["CPAP-007", "RISK-CPAP-003"],
  ["CPAP-008", "RISK-CPAP-002"],
  ["CPAP-009", "RISK-CPAP-009"],
  ["CPAP-010", "RISK-CPAP-007"],
  ["CPAP-011", "RISK-CPAP-004"],
  ["CPAP-012", "RISK-CPAP-001"],
  ["CPAP-013", "RISK-CPAP-001"],
  ["CPAP-014", "RISK-CPAP-010"],
  ["CPAP-015", "RISK-CPAP-008"],
  ["CPAP-016", "RISK-CPAP-010"],
  ["CPAP-017", "RISK-CPAP-003"],
  ["CPAP-018", "RISK-CPAP-007"],
  ["CPAP-019", "RISK-CPAP-009"],
  ["CPAP-020", "RISK-CPAP-001"],
])

for (const record of records) {
  const pagePath = resolve(complaintDirectory, `${record.slug}.md`)
  check(existsSync(pagePath), `${record.id} page is missing`)
  if (!existsSync(pagePath)) continue
  const page = readFileSync(pagePath, "utf8")
  check(page.includes("synthetic: true"), `${record.id} frontmatter is not marked synthetic`)
  check(page.includes("Synthetic demonstration record"), `${record.id} lacks its visible synthetic warning`)
  for (const heading of requiredHeadings) {
    check(page.includes(heading), `${record.id} is missing heading "${heading}"`)
  }
  check(
    record.narrative === complaints.find((seed) => seed.id === record.id)?.narrative,
    `${record.id} narrative differs from the deterministic seed`,
  )
  check(record.primaryRiskItemId === expectedPrimary.get(record.id), `${record.id} primary risk mapping is incorrect`)
  check(record.riskLinks.length > 0, `${record.id} has no risk-link candidate or abstention`)
  check(record.followUpQuestions.length <= 3, `${record.id} has more than three follow-up questions`)
  check(
    [...record.medicalTags, ...record.technicalTags, ...record.contextTags, ...record.reviewTags].every((tag) =>
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(tag),
    ),
    `${record.id} contains an invalid tag`,
  )

  for (const mention of record.evidence) {
    check(
      record.narrative.slice(mention.start, mention.end) === mention.sourceText,
      `${mention.id} offsets do not recover the exact source span`,
    )
    check(mention.candidates.length <= 3, `${mention.id} publishes more than three candidates`)
    check(
      new Set(mention.candidates.map((candidate) => `${candidate.terminology}:${candidate.code}`)).size ===
        mention.candidates.length,
      `${mention.id} contains duplicate candidates`,
    )
    check(!(mention.assertion === "negated" && mention.acceptedCode), `${mention.id} accepts a negated concept`)

    for (const candidate of [
      ...(mention.acceptedCode ? [mention.acceptedCode] : []),
      ...mention.candidates,
    ]) {
      check(candidate.confidence >= 0 && candidate.confidence <= 0.99, `${mention.id} has invalid confidence`)
      check(Boolean(candidate.rationale), `${mention.id} candidate ${candidate.code} lacks rationale`)
      check(Boolean(candidate.releaseOrEdition), `${mention.id} candidate ${candidate.code} lacks release`)
      check(/^https:\/\//.test(candidate.sourceUrl), `${mention.id} candidate ${candidate.code} lacks HTTPS source URL`)
      if (candidate.terminology === "WHO ICD-11 MMS") {
        check(
          whoCodesByQuery.get(candidate.queryUsed)?.has(candidate.code),
          `${mention.id} WHO code ${candidate.code} is absent from its pinned cache`,
        )
        if (candidate.status === "accepted") {
          check(candidate.confidence >= 0.8, `${mention.id} accepted WHO code is below 0.80`)
        }
      } else if (candidate.terminology === "IMDRF AET") {
        check(imdrfCodes.has(candidate.code), `${mention.id} IMDRF code ${candidate.code} is absent locally`)
      } else if (candidate.status === "accepted") {
        check(candidate.humanVerified, `${mention.id} accepts an unverified SNOMED CT concept`)
      }
    }
  }

  const evidenceIds = new Set(record.evidence.map((mention) => mention.id))
  for (const link of record.riskLinks) {
    const risk = riskById.get(link.riskItemId)
    check(Boolean(risk), `${record.id} references unknown risk ${link.riskItemId}`)
    if (!risk) continue
    check(link.riskItemVersion === risk.version, `${record.id} risk version mismatch for ${link.riskItemId}`)
    check(link.evidenceMentionIds.length > 0, `${record.id} risk link lacks supporting evidence IDs`)
    check(
      link.evidenceMentionIds.every((id) => evidenceIds.has(id)),
      `${record.id} risk link references unknown evidence`,
    )
    check(link.confidence >= 0 && link.confidence <= 0.99, `${record.id} has invalid risk-link confidence`)
    for (const cue of link.controlReviewCues) {
      check(
        risk.riskControls.some((control) => control.id === cue.controlId),
        `${record.id} cue references a control outside ${link.riskItemId}`,
      )
    }
  }
}

const riskPage = readFileSync(resolve(root, "content/risk-management.md"), "utf8")
for (const risk of riskRegister) check(riskPage.includes(`## ${risk.id} —`), `Risk page lacks section ${risk.id}`)
for (const record of records) {
  for (const link of record.riskLinks) {
    check(
      riskPage.includes(`complaints/${record.slug}.md`),
      `Risk page lacks reverse link for ${record.id} → ${link.riskItemId}`,
    )
  }
}

const indexPage = readFileSync(resolve(root, "content/index.md"), "utf8")
for (const record of records) {
  check(indexPage.includes(`complaints/${record.slug}.md`), `Index lacks link to ${record.id}`)
}

for (const [field, prefix] of [
  ["medicalTags", "medical-"],
  ["technicalTags", "technical-"],
] as const) {
  const counts = new Map<string, number>()
  for (const record of records) {
    for (const tag of new Set(record[field])) counts.set(tag, (counts.get(tag) ?? 0) + 1)
  }
  for (const [tag, count] of counts) {
    check(tag.startsWith(prefix), `${tag} is in the wrong tag namespace`)
    check(indexPage.includes(`| \`${tag}\` | ${count} |`), `Index count for ${tag} is not ${count}`)
  }
}

const markdownFiles = [
  resolve(root, "content/index.md"),
  resolve(root, "content/risk-management.md"),
  ...complaintPages.map((name) => resolve(complaintDirectory, name)),
]
for (const file of markdownFiles) {
  const markdown = readFileSync(file, "utf8")
  check(!/<script\b/i.test(markdown), `${file} contains a script element`)
  check(!/\brisk (?:acceptable|unacceptable)\b/i.test(markdown), `${file} makes a risk-acceptability claim`)
  check(!/\b(?:reportable|not reportable)\b/i.test(markdown), `${file} makes a reportability claim`)
  for (const match of markdown.matchAll(/\]\(([^)\s]+\.md)(?:#[^)]+)?\)/g)) {
    const target = resolve(dirname(file), match[1])
    check(existsSync(target), `${file} has broken internal link ${match[1]}`)
  }
}

const credentialFile = resolve(root, "credentials/credentials.txt")
if (existsSync(credentialFile)) {
  const credentialValues = readFileSync(credentialFile, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length >= 20 && !line.startsWith("https://github.com/"))

  const excludedDirectories = new Set([".git", "credentials", "node_modules", "public", "work", ".npm-cache"])
  const walk = (directory: string): string[] =>
    readdirSync(directory).flatMap((name) => {
      if (excludedDirectories.has(name)) return []
      const path = resolve(directory, name)
      return statSync(path).isDirectory() ? walk(path) : [path]
    })
  for (const file of walk(root)) {
    if ([".png", ".woff2", ".ico"].includes(extname(file))) continue
    const content = readFileSync(file)
    for (const secret of credentialValues) {
      check(!content.includes(Buffer.from(secret)), `A protected credential value appears in ${file}`)
    }
  }
}

check(readFileSync(resolve(root, ".gitignore"), "utf8").includes("credentials/"), ".gitignore does not exclude credentials/")

if (errors.length > 0) {
  console.error(`Validation failed with ${errors.length} error(s):`)
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(
  `Validation passed: 20 complaints, 22 pages, ${records.flatMap((record) => record.evidence).length} exact evidence spans, ${records.flatMap((record) => record.riskLinks).length} bidirectional risk links, and no secret leakage.`,
)
