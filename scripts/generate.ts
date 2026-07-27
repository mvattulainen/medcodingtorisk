import { existsSync, readFileSync, writeFileSync } from "node:fs"
import { mkdir } from "node:fs/promises"
import { resolve } from "node:path"
import { complaints, riskItems } from "./domain-data"
import {
  BUILD_TIMESTAMP,
  IMDRF_RELEASE_PAGE,
  IMDRF_SOURCE_URL,
  PIPELINE_VERSION,
  WHO_API_VERSION,
  WHO_RELEASE,
  confidenceBand,
  confidenceLabel,
  escapeHtml,
  escapeTable,
  sha256,
  stableJson,
} from "./lib"
import type {
  CodeCandidate,
  CodeSeed,
  ComplaintRecord,
  ComplaintSeed,
  EvidenceMention,
  RiskItemSeed,
  RiskLink,
} from "./types"

interface ImdrfRecord {
  annex: "A" | "B" | "C" | "D" | "E" | "F" | "G"
  code: string
  term: string
  definition: string
  release: string
  selectable: boolean
  sourceUrl: string
  sourceChecksum: string
  sourceRecordHash: string
}

interface WhoIndexEntry {
  query: string
  cacheFile: string
  responseHash: string
  candidates: Array<{
    id: string
    title: string
    theCode: string
    foundationUri?: string
    score?: number
  }>
}

interface RiskItem extends RiskItemSeed {
  sourceFile: string
  sourceHash: string
}

const root = resolve(process.cwd())
const imdrfRecords: ImdrfRecord[] = ["a", "b", "c", "d", "e", "f", "g"].flatMap(
  (annex) =>
    JSON.parse(readFileSync(resolve(root, `data/imdrf/2026/annex-${annex}.json`), "utf8")) as ImdrfRecord[],
)
const imdrfByCode = new Map(imdrfRecords.map((record) => [record.code, record]))
const whoIndex = JSON.parse(
  readFileSync(resolve(root, `data/icd11-cache/${WHO_RELEASE}/index.json`), "utf8"),
) as WhoIndexEntry[]
const whoByQuery = new Map(whoIndex.map((entry) => [entry.query, entry]))

const imdrfImportManifest = JSON.parse(
  readFileSync(resolve(root, "data/imdrf/2026/import-manifest.json"), "utf8"),
) as { sourceChecksum: string; normalizedRecordCount: number; sourceUrl: string }

function resolveCode(seed: CodeSeed, status: "accepted" | "candidate", queryFallback: string): CodeCandidate {
  if (seed.confidence < 0.5 || seed.confidence > 0.99) {
    throw new Error(`Out-of-range confidence for ${seed.code}: ${seed.confidence}`)
  }

  if (seed.terminology === "IMDRF AET") {
    const record = imdrfByCode.get(seed.code)
    if (!record) throw new Error(`IMDRF code ${seed.code} is absent from the pinned local release`)
    if (status === "accepted" && !record.selectable) {
      throw new Error(`IMDRF code ${seed.code} is not selectable`)
    }
    return {
      terminology: "IMDRF AET",
      code: record.code,
      preferredTitle: record.term,
      annex: record.annex,
      releaseOrEdition: "2026",
      sourceUrl: IMDRF_RELEASE_PAGE,
      confidence: seed.confidence,
      confidenceBand: confidenceBand(seed.confidence),
      rationale: seed.rationale,
      status,
      humanVerified: false,
      queryUsed: seed.query ?? queryFallback,
      sourceRecordHash: record.sourceRecordHash,
    }
  }

  const query = seed.query
  if (!query) throw new Error(`WHO code ${seed.code} is missing its cached query`)
  const cache = whoByQuery.get(query)
  if (!cache) throw new Error(`WHO cache is missing query "${query}" for ${seed.code}`)
  const result = cache.candidates.find((candidate) => candidate.theCode === seed.code)
  if (!result) throw new Error(`WHO code ${seed.code} is absent from cached search "${query}"`)
  const sourceUrl = seed.code.includes("&")
    ? `https://id.who.int/icd/release/11/${WHO_RELEASE}/mms/codeinfo/${encodeURIComponent(seed.code)}`
    : result.id.replace(/^http:/, "https:")
  return {
    terminology: "WHO ICD-11 MMS",
    code: seed.code,
    preferredTitle: result.title,
    releaseOrEdition: WHO_RELEASE,
    sourceUrl,
    confidence: seed.confidence,
    confidenceBand: confidenceBand(seed.confidence),
    rationale: seed.rationale,
    status,
    humanVerified: false,
    queryUsed: query,
    sourceRecordHash: cache.responseHash,
  }
}

function sentenceFor(narrative: string, start: number, end: number): string {
  const before = Math.max(
    narrative.lastIndexOf(". ", start - 1),
    narrative.lastIndexOf("? ", start - 1),
    narrative.lastIndexOf("! ", start - 1),
  )
  const afterCandidates = [narrative.indexOf(". ", end), narrative.indexOf("? ", end), narrative.indexOf("! ", end)].filter(
    (position) => position >= 0,
  )
  const after = afterCandidates.length > 0 ? Math.min(...afterCandidates) + 1 : narrative.length
  return narrative.slice(before < 0 ? 0 : before + 2, after).trim()
}

const riskSeedHash = sha256(stableJson(riskItems))
const riskRegister: RiskItem[] = riskItems.map((item) => ({
  ...item,
  sourceFile: "data/risk-management/cpap-risk-register.json",
  sourceHash: riskSeedHash,
}))
const riskById = new Map(riskRegister.map((item) => [item.id, item]))
const riskRegisterHash = sha256(stableJson(riskRegister))

for (const item of riskRegister) {
  for (const reference of [
    ...item.anticipatedHarms,
    ...item.anticipatedDeviceProblems,
    ...item.relatedComponents,
  ]) {
    if (reference.terminology === "IMDRF AET" && reference.code && !imdrfByCode.has(reference.code)) {
      throw new Error(`${item.id} references unknown IMDRF code ${reference.code}`)
    }
  }
}

const terminologyManifestBase = {
  generatedAt: BUILD_TIMESTAMP,
  deterministicBuild: true,
  terminologies: {
    icd11: {
      terminology: "WHO ICD-11 MMS",
      release: WHO_RELEASE,
      apiVersion: WHO_API_VERSION,
      language: "en",
      linearization: "mms",
      apiBase: "https://id.who.int",
      documentationUrl: "https://icd.who.int/docs/icd-api/",
      cacheEntries: whoIndex.map((entry) => ({
        query: entry.query,
        cacheFile: entry.cacheFile,
        responseHash: entry.responseHash,
        candidateCount: entry.candidates.length,
      })),
    },
    imdrf: {
      terminology: "IMDRF AET",
      release: "2026",
      sourceUrl: IMDRF_SOURCE_URL,
      releasePage: IMDRF_RELEASE_PAGE,
      sourceChecksum: imdrfImportManifest.sourceChecksum,
      normalizedRecordCount: imdrfImportManifest.normalizedRecordCount,
      localFiles: ["A", "B", "C", "D", "E", "F", "G"].map(
        (annex) => `data/imdrf/2026/annex-${annex.toLowerCase()}.json`,
      ),
    },
    snomedCt: {
      terminology: "SNOMED CT",
      mode: "human-reviewed-web-fallback",
      automaticApiAccess: false,
      browserUrl: "https://browser.ihtsdotools.org/",
      bulkContentIncluded: false,
    },
  },
}
const terminologyManifestHash = sha256(stableJson(terminologyManifestBase))
const terminologyManifest = { ...terminologyManifestBase, manifestHash: terminologyManifestHash }

function chainText(item: RiskItem, element: RiskLink["matchedElements"][number]["element"]): string {
  switch (element) {
    case "device-problem":
      return item.anticipatedDeviceProblems.map((term) => term.label).join("; ")
    case "component":
      return item.relatedComponents.map((term) => term.label).join("; ")
    case "sequence-of-events":
      return item.foreseeableSequenceOfEvents.join(" → ")
    case "hazardous-situation":
      return item.hazardousSituation
    case "harm":
      return item.anticipatedHarms.map((term) => term.label).join("; ")
    case "risk-control":
      return item.riskControls.map((control) => `${control.id}: ${control.description}`).join("; ")
  }
}

function buildComplaint(seed: ComplaintSeed): ComplaintRecord {
  const evidence: EvidenceMention[] = seed.evidence.map((item, index) => {
    const start = seed.narrative.indexOf(item.sourceText)
    if (start < 0) {
      throw new Error(`${seed.id} evidence span not found: "${item.sourceText}"`)
    }
    const acceptedCode = item.accepted ? resolveCode(item.accepted, "accepted", item.normalizedText) : null
    if (item.assertion === "negated" && acceptedCode) {
      throw new Error(`${seed.id} negated evidence cannot have accepted code: ${item.sourceText}`)
    }
    const candidates = (item.candidates ?? [])
      .map((candidate) => resolveCode(candidate, "candidate", item.normalizedText))
      .filter((candidate) => candidate.confidence >= 0.5)
      .sort((a, b) => b.confidence - a.confidence || a.code.localeCompare(b.code))
      .slice(0, 3)
    return {
      id: `${seed.id}-M${index + 1}`,
      sourceText: item.sourceText,
      sentence: sentenceFor(seed.narrative, start, start + item.sourceText.length),
      start,
      end: start + item.sourceText.length,
      normalizedText: item.normalizedText,
      entityType: item.entityType,
      assertion: item.assertion,
      temporality: item.temporality ?? "current",
      experiencer: item.experiencer ?? (seed.id === "CPAP-001" ? "user" : "patient"),
      statedOrInferred: item.statedOrInferred ?? "stated",
      missingContextFlags: item.missingContextFlags ?? [],
      routingDecision: {
        primaryTerminology: item.route,
        rationale: item.routeRationale,
        snomedFallbackRequired: item.snomedFallbackRequired ?? false,
      },
      acceptedCode,
      candidates,
      unresolvedReason: item.unresolvedReason,
    }
  })

  const links: RiskLink[] = seed.riskLinks
    .map((linkSeed) => {
      const risk = riskById.get(linkSeed.riskItemId)
      if (!risk) throw new Error(`${seed.id} references unknown risk item ${linkSeed.riskItemId}`)
      const evidenceMentionIds = linkSeed.evidenceIndexes.map((index) => {
        const mention = evidence[index]
        if (!mention) throw new Error(`${seed.id} risk link references missing evidence index ${index}`)
        return mention.id
      })
      const controls = linkSeed.relevantControlIds.map((controlId) => {
        const control = risk.riskControls.find((candidate) => candidate.id === controlId)
        if (!control) throw new Error(`${seed.id} references unknown control ${controlId}`)
        return control
      })
      return {
        riskItemId: risk.id,
        riskItemVersion: risk.version,
        status: "proposed",
        classification: linkSeed.classification,
        confidence: linkSeed.confidence,
        confidenceBand: confidenceBand(linkSeed.confidence),
        rationale: linkSeed.rationale,
        evidenceMentionIds,
        matchedElements: linkSeed.matchedElements.map((element, index) => ({
          element,
          complaintEvidence: evidenceMentionIds
            .map((id) => evidence.find((mention) => mention.id === id)!.sourceText)
            .join("; "),
          riskFileText: chainText(risk, element),
          matchScore: Math.max(0.5, Number((linkSeed.confidence - index * 0.03).toFixed(2))),
        })),
        unmatchedElements: linkSeed.unmatchedElements,
        relevantControlIds: controls.map((control) => control.id),
        controlReviewCues: controls.map((control) => ({
          controlId: control.id,
          cue: linkSeed.cue,
          rationale: linkSeed.cueRationale,
        })),
        reviewDisposition: "not-reviewed",
        humanVerified: false,
      } satisfies RiskLink
    })
    .sort((a, b) => b.confidence - a.confidence || a.riskItemId.localeCompare(b.riskItemId))

  return {
    id: seed.id,
    slug: seed.slug,
    title: seed.title,
    deviceFamily: "CPAP",
    synthetic: true,
    narrative: seed.narrative,
    generatedFromSeed: `data/complaints.seed.json#${seed.id}`,
    evidence,
    followUpQuestions: seed.followUpQuestions,
    medicalTags: [...seed.medicalTags].sort(),
    technicalTags: [...seed.technicalTags].sort(),
    contextTags: [...seed.contextTags].sort(),
    reviewTags: [...seed.reviewTags].sort(),
    riskLinks: links,
    primaryRiskItemId: links[0]?.riskItemId ?? null,
    regulatoryCues: seed.regulatoryCues,
    provenance: {
      generatedAt: BUILD_TIMESTAMP,
      pipelineVersion: PIPELINE_VERSION,
      promptVersion: "deterministic-seed-v1.1",
      modelName: "deterministic rules + human-authored demo seed",
      terminologyManifestHash,
      riskRegisterHash,
      reviewer: null,
      reviewTimestamp: null,
    },
  }
}

const records = complaints.map(buildComplaint)

function codeCount(record: ComplaintRecord): number {
  return record.evidence.filter((mention) => mention.acceptedCode).length
}

function candidateCount(record: ComplaintRecord): number {
  return record.evidence.reduce((total, mention) => total + mention.candidates.length, 0)
}

function formatConfidence(score: number, kind: "terminology" | "risk"): string {
  return `<span class="confidence ${confidenceBand(score)}">${score.toFixed(2)} · ${confidenceLabel(score)} ${kind} ${kind === "risk" ? "link" : "match"}</span>`
}

function codeRoute(mention: EvidenceMention): string {
  if (mention.entityType === "device_problem") return "IMDRF A"
  if (mention.entityType === "device_component") return "IMDRF G"
  if (mention.entityType === "health_impact" || mention.entityType === "no_harm_statement") return "IMDRF F"
  if (mention.routingDecision.primaryTerminology === "WHO ICD-11 MMS") return "WHO ICD-11 / IMDRF E"
  return mention.routingDecision.primaryTerminology
}

function acceptedTermSection(mention: EvidenceMention): string {
  const code = mention.acceptedCode
  if (!code) return ""
  const terminology =
    code.terminology === "IMDRF AET" ? `${code.terminology}, Annex ${code.annex}` : code.terminology
  return `### ${code.preferredTitle}

- **Evidence:** “${mention.sourceText}”
- **Terminology:** ${terminology}
- **Code:** \`${code.code}\`
- **Preferred title:** ${code.preferredTitle}
- **Confidence:** ${formatConfidence(code.confidence, "terminology")}
- **Why selected:** ${code.rationale}
- **Assertion:** ${mention.assertion}
- **Source:** [Open official source](${code.sourceUrl})
- **Release:** ${code.releaseOrEdition}
- **Selection:** \`${code.status}\` by deterministic rule; qualified human review pending
`
}

function renderComplaint(record: ComplaintRecord): string {
  const primary = record.riskLinks[0]
  if (!primary) throw new Error(`${record.id} has no risk-link result`)
  const primaryRisk = riskById.get(primary.riskItemId)!
  const accepted = record.evidence.filter((mention) => mention.acceptedCode)
  const alternatives = record.evidence.flatMap((mention) =>
    mention.candidates.map((candidate) => ({ mention, candidate })),
  )
  const unresolved = record.evidence.filter(
    (mention) => !mention.acceptedCode || mention.assertion === "negated" || mention.unresolvedReason,
  )
  const snomed = record.evidence.some((mention) => mention.routingDecision.snomedFallbackRequired)
  const controlCueCount = new Set(primary.controlReviewCues.map((cue) => cue.controlId)).size
  const allTags = [
    "cpap",
    "synthetic-complaint",
    ...record.medicalTags,
    ...record.technicalTags,
    ...record.contextTags,
    ...record.reviewTags,
  ]
  const riskEvidence = primary.evidenceMentionIds
    .map((id) => record.evidence.find((mention) => mention.id === id)!.sourceText)
    .join("”; “")
  const matched = new Set(primary.matchedElements.map((match) => match.element))
  const chainNodes = [
    {
      label: record.evidence.find((mention) => mention.entityType === "device_problem")?.normalizedText ?? "Initiating event",
      detail: matched.has("device-problem") ? "Matched device evidence" : "Partly stated",
      state: matched.has("device-problem") ? "matched" : "uncertain",
      href: "#evidence-spans",
    },
    {
      label: primaryRisk.foreseeableSequenceOfEvents[1],
      detail: matched.has("sequence-of-events") ? "Matched sequence" : "Uncertain sequence",
      state: matched.has("sequence-of-events") ? "matched" : "uncertain",
      href: "#risk-management-linkage",
    },
    {
      label: primaryRisk.hazardousSituation,
      detail: matched.has("hazardous-situation") ? "Matched hazardous situation" : "Not fully stated",
      state: matched.has("hazardous-situation") ? "matched" : "uncertain",
      href: `../risk-management.md#${primaryRisk.id.toLowerCase()}`,
    },
    {
      label:
        record.evidence.find((mention) =>
          ["clinical_condition", "clinical_sign_or_symptom", "injury"].includes(mention.entityType),
        )?.normalizedText ?? "No injury reported",
      detail: matched.has("harm") ? "Matched health evidence" : "No matched harm",
      state: matched.has("harm") ? "matched" : "uncertain",
      href: "#accepted-coded-terms",
    },
    {
      label: primaryRisk.id,
      detail: `${primary.confidence.toFixed(2)} · ${confidenceLabel(primary.confidence)} risk link`,
      state: "matched",
      href: `../risk-management.md#${primaryRisk.id.toLowerCase()}`,
    },
  ]

  const evidenceRows = record.evidence
    .map(
      (mention) =>
        `| “${escapeTable(mention.sourceText)}” | ${mention.entityType} | ${mention.assertion} | ${escapeTable(mention.normalizedText)} | ${codeRoute(mention)} |`,
    )
    .join("\n")
  const alternativeRows =
    alternatives.length > 0
      ? alternatives
          .map(
            ({ mention, candidate }) =>
              `| “${escapeTable(mention.sourceText)}” | ${escapeTable(candidate.preferredTitle)} | ${candidate.terminology}${candidate.annex ? ` ${candidate.annex}` : ""} | \`${candidate.code}\` | ${candidate.confidence.toFixed(2)} · ${confidenceLabel(candidate.confidence)} | ${escapeTable(candidate.rationale)} |`,
          )
          .join("\n")
      : "| — | No additional candidate above 0.50 | — | — | — | The accepted term had no useful alternative in the pinned search result. |"
  const unresolvedRows =
    unresolved.length > 0
      ? unresolved
          .map(
            (mention) =>
              `- **“${mention.sourceText}”** — ${mention.unresolvedReason ?? "No separate code selected; the accepted term captures the relevant meaning."}`,
          )
          .join("\n")
      : "- No unresolved evidence statements."

  const controlRows = primary.relevantControlIds
    .map((controlId) => {
      const control = primaryRisk.riskControls.find((item) => item.id === controlId)!
      const cue = primary.controlReviewCues.find((item) => item.controlId === controlId)!
      return `| [${control.id}](../risk-management.md#${primaryRisk.id.toLowerCase()}) | ${control.type} | ${escapeTable(control.description)} | ${escapeTable(cue.rationale)} |`
    })
    .join("\n")

  const secondaryLinks =
    record.riskLinks.length > 1
      ? record.riskLinks
          .slice(1)
          .map(
            (link) =>
              `- [${link.riskItemId}](../risk-management.md#${link.riskItemId.toLowerCase()}) — \`${link.classification}\`; ${link.confidence.toFixed(2)} · ${confidenceLabel(link.confidence)}. ${link.rationale}`,
          )
          .join("\n")
      : "- No secondary risk candidate above the publication threshold."

  const related = records
    .filter((candidate) => candidate.id !== record.id)
    .map((candidate) => {
      const sharedRisk = candidate.primaryRiskItemId === record.primaryRiskItemId
      const sharedTags = [...record.medicalTags, ...record.technicalTags].filter((tag) =>
        [...candidate.medicalTags, ...candidate.technicalTags].includes(tag),
      )
      return { candidate, score: (sharedRisk ? 10 : 0) + sharedTags.length, sharedRisk, sharedTags }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.candidate.id.localeCompare(b.candidate.id))
    .slice(0, 3)

  return `---
title: "Complaint ${record.id.slice(-3)} — ${record.title}"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
${allTags.map((tag) => `  - ${tag}`).join("\n")}
complaint_id: "${record.id}"
device_family: "CPAP"
synthetic: true
coding_status: "reviewed-demo"
icd11_release: "${WHO_RELEASE}"
imdrf_release: "2026"
snomed_ct_used: false
primary_risk_item: "${record.primaryRiskItemId}"
risk_link_status: "proposed"
risk_review_status: "not-reviewed"
quartz-properties: false
---

# Complaint ${record.id.slice(-3)} — ${record.title}

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> ${record.narrative}

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | ${record.evidence.length} |
| Accepted codes | ${accepted.length} |
| Candidate codes | ${alternatives.length} |
| SNOMED CT fallback | ${snomed ? "Human review queued" : "No"} |
| Proposed risk links | ${record.riskLinks.length} |
| Primary risk-link confidence | ${primary.confidence.toFixed(2)} · ${confidenceLabel(primary.confidence)} |
| Risk-control review cues | ${controlCueCount} |
| Human-review flags | ${unresolved.length} |

## Complaint-to-risk chain

<div class="trace-chain">
${chainNodes
  .map(
    (node) =>
      `<a class="trace-node ${node.state}" href="${node.href}"><b>${escapeHtml(node.label)}</b><span>${escapeHtml(node.detail)}</span></a>`,
  )
  .join("\n")}
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
${evidenceRows}

## Accepted coded terms

${accepted.map(acceptedTermSection).join("\n")}

## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
${alternativeRows}

${alternatives.length > 0 ? "> [!question] Human selection may be required\n> Candidate terms remain unaccepted until a qualified reviewer confirms that the available evidence supports them." : ""}

## Uncoded or ambiguous statements

${unresolvedRows}

## Follow-up questions

${record.followUpQuestions.map((question, index) => `${index + 1}. ${question}`).join("\n")}

## Tags

### Medical

${record.medicalTags.map((tag) => `<span class="tag-medical">${tag}</span>`).join(" ")}

### Technical

${record.technicalTags.map((tag) => `<span class="tag-technical">${tag}</span>`).join(" ")}

## Regulatory review cues

${record.regulatoryCues.map((cue) => `- ${cue}`).join("\n")}
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [${primaryRisk.id} — ${primaryRisk.title}](../risk-management.md#${primaryRisk.id.toLowerCase()})
- **Classification:** \`${primary.classification}\`
- **Link confidence:** ${formatConfidence(primary.confidence, "risk")}
- **Evidence used:** “${riskEvidence}”
- **Matched chain:** ${primary.matchedElements.map((match) => match.element).join(" → ")}
- **Unmatched or uncertain elements:** ${primary.unmatchedElements.join(" ")}
- **Why linked:** ${primary.rationale}
- **Review status:** \`${primary.reviewDisposition}\`
- **Risk-file version:** ${primary.riskItemVersion}; source hash \`${riskSeedHash}\`

### Secondary risk candidates

${secondaryLinks}

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
${controlRows}

> [!question] Human risk-management review
> These are review cues only. The system does not claim that a control failed, determine whether residual risk changed, or modify the synthetic risk register.

### Risk-file comparison

| Question | Result |
|---|---|
| Observed harm anticipated in risk file? | ${matched.has("harm") ? "Yes — matched health-effect evidence" : "Not established or no harm reported"} |
| Device problem anticipated? | ${matched.has("device-problem") ? "Yes — matched device-problem evidence" : "Not fully matched"} |
| New sequence suggested? | ${primary.classification === "variation-of-known-sequence" || primary.classification === "possible-risk-file-coverage-gap" ? "Possible — human review requested" : "No clear new sequence"} |
| Possible control concern? | ${primary.classification === "possible-risk-control-concern" || primary.controlReviewCues.some((cue) => cue.cue !== "no-control-evidence") ? "Review requested; not concluded" : "No control-related evidence"} |
| Automatic risk-file change | Prohibited |

## Provenance

| Item | Value |
|---|---|
| Complaint source | Synthetic seed ${record.id} |
| Deterministic build timestamp | ${BUILD_TIMESTAMP} |
| Coding pipeline version | ${PIPELINE_VERSION} |
| WHO ICD-11 release | ${WHO_RELEASE} |
| IMDRF release | 2026 |
| Terminology manifest hash | \`${terminologyManifestHash}\` |
| Risk register hash | \`${riskRegisterHash}\` |
| SNOMED CT edition | ${snomed ? "Unresolved human-review task; no concept selected" : "Not used"} |
| Human reviewer | Not reviewed |

## Sources

- [WHO ICD-11](https://icd.who.int/)
- [WHO ICD API documentation](https://icd.who.int/docs/icd-api/)
- [IMDRF Adverse Event Terminology](${IMDRF_RELEASE_PAGE})
- [SNOMED International Browser](https://browser.ihtsdotools.org/)
- [Synthetic risk register](../risk-management.md#${primaryRisk.id.toLowerCase()})

## Related complaints

${
  related.length > 0
    ? related
        .map(
          ({ candidate, sharedRisk, sharedTags }) =>
            `- [${candidate.id} — ${candidate.title}](${candidate.slug}.md) — ${
              sharedRisk
                ? `shared primary risk \`${record.primaryRiskItemId}\``
                : `shared ${sharedTags.slice(0, 2).map((tag) => `\`${tag}\``).join(", ")}`
            }`,
        )
        .join("\n")
    : "- No related complaint met the deterministic linking rule."
}
`
}

function collectTags(kind: "medicalTags" | "technicalTags") {
  const map = new Map<string, ComplaintRecord[]>()
  for (const record of records) {
    for (const tag of record[kind]) {
      const list = map.get(tag) ?? []
      list.push(record)
      map.set(tag, list)
    }
  }
  return [...map.entries()].sort(([a], [b]) => a.localeCompare(b))
}

function renderTagTable(kind: "medicalTags" | "technicalTags"): string {
  return collectTags(kind)
    .map(
      ([tag, tagged]) =>
        `| \`${tag}\` | ${tagged.length} | ${tagged.map((record) => `[${record.id}](complaints/${record.slug}.md)`).join(", ")} |`,
    )
    .join("\n")
}

function riskCount(id: string): number {
  return records.filter((record) => record.riskLinks.some((link) => link.riskItemId === id)).length
}

function renderIndex(): string {
  const allCandidates = records.flatMap((record) =>
    record.evidence.flatMap((mention) => [
      ...(mention.acceptedCode ? [mention.acceptedCode] : []),
      ...mention.candidates,
    ]),
  )
  const icdCount = records.filter((record) =>
    record.evidence.some((mention) => mention.acceptedCode?.terminology === "WHO ICD-11 MMS"),
  ).length
  const imdrfCount = records.filter((record) =>
    record.evidence.some((mention) => mention.acceptedCode?.terminology === "IMDRF AET"),
  ).length
  const snomedCount = records.filter((record) =>
    record.evidence.some((mention) => mention.routingDecision.snomedFallbackRequired),
  ).length
  const acceptedCount = records.reduce((total, record) => total + codeCount(record), 0)
  const alternatives = records.reduce((total, record) => total + candidateCount(record), 0)
  const unresolved = records.reduce(
    (total, record) => total + record.evidence.filter((mention) => !mention.acceptedCode).length,
    0,
  )
  const medical = collectTags("medicalTags")
  const technical = collectTags("technicalTags")
  const strongestRisk = [...riskRegister]
    .map((risk) => ({ risk, count: riskCount(risk.id) }))
    .sort((a, b) => b.count - a.count || a.risk.id.localeCompare(b.risk.id))[0]
  const topMedical = [...medical].sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))[0]
  const topTechnical = [...technical].sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))[0]
  const controlConcernCount = records.filter((record) =>
    record.riskLinks.some((link) => link.classification === "possible-risk-control-concern"),
  ).length
  const coverageGapCount = records.filter((record) =>
    record.riskLinks.some((link) => link.classification === "possible-risk-file-coverage-gap"),
  ).length

  const complaintRows = records
    .map(
      (record) =>
        `| ${record.id} | [${record.title}](complaints/${record.slug}.md) | ${record.medicalTags.slice(0, 2).map((tag) => `\`${tag.replace("medical-", "")}\``).join(", ")} | ${record.technicalTags.slice(0, 2).map((tag) => `\`${tag.replace("technical-", "")}\``).join(", ")} | [${record.primaryRiskItemId}](risk-management.md#${record.primaryRiskItemId?.toLowerCase()}) | Proposed · ${record.riskLinks[0].confidence.toFixed(2)} |`,
    )
    .join("\n")
  const riskRows = riskRegister
    .map(
      (risk) =>
        `| [${risk.id}](risk-management.md#${risk.id.toLowerCase()}) | ${risk.title} | ${riskCount(risk.id)} |`,
    )
    .join("\n")
  const bandCounts = ["strong", "good", "plausible", "weak"].map((band) => ({
    band,
    terminology: allCandidates.filter((candidate) => candidate.confidenceBand === band).length,
    risk: records.flatMap((record) => record.riskLinks).filter((link) => link.confidenceBand === band).length,
  }))

  return `---
title: "CPAP Complaint Coder and Risk Linker"
description: "Evidence-grounded coding and bidirectional risk traceability across 20 synthetic CPAP complaints."
date: 2026-07-27
draft: false
tags:
  - cpap
  - complaint-coding
  - risk-management
  - synthetic-data
quartz-properties: false
---

# CPAP Complaint Coder and Risk Linker

<div class="demo-hero">
<div>
<strong>From exact complaint evidence to terminology and risk-chain review.</strong>
<p>This static demonstration separates clinical effects from device problems, preserves uncertainty, and links every synthetic complaint to a versioned ISO 14971-style risk record.</p>
</div>
<div><strong>Human decisions stay human.</strong><p>No diagnosis, causality, reportability, occurrence, severity, acceptability, or benefit-risk decision is automated.</p></div>
</div>

> [!warning] Demonstration only
> All 20 records are synthetic. The terminology and risk links are review aids, not clinical or regulatory conclusions.

## Summary

<div class="metric-grid">
<div class="metric"><strong>20</strong><span>synthetic complaints</span></div>
<div class="metric"><strong>${icdCount}</strong><span>with accepted ICD-11 code</span></div>
<div class="metric"><strong>${imdrfCount}</strong><span>with accepted IMDRF code</span></div>
<div class="metric"><strong>${snomedCount}</strong><span>with SNOMED human-review task</span></div>
<div class="metric"><strong>${acceptedCount}</strong><span>accepted terminology codes</span></div>
<div class="metric"><strong>${alternatives}</strong><span>published alternatives</span></div>
<div class="metric"><strong>${controlConcernCount}</strong><span>possible control-concern cases</span></div>
<div class="metric"><strong>${coverageGapCount}</strong><span>possible coverage-gap cases</span></div>
</div>

Most frequent medical tag: \`${topMedical[0]}\` (${topMedical[1].length}). Most frequent technical tag: \`${topTechnical[0]}\` (${topTechnical[1].length}). Most frequently linked item: [${strongestRisk.risk.id}](risk-management.md#${strongestRisk.risk.id.toLowerCase()}) (${strongestRisk.count} proposed links).

Counts are descriptive case observations. They are not rates, probabilities, signal determinations, or coding-accuracy measures.

## Complaint register

| ID | Complaint | Main medical tags | Main technical tags | Primary risk item | Risk-link status |
|---|---|---|---|---|---|
${complaintRows}

## Medical tags

| Tag | Complaint instances | Complaint pages |
|---|---:|---|
${renderTagTable("medicalTags")}

## Technical tags

| Tag | Complaint instances | Complaint pages |
|---|---:|---|
${renderTagTable("technicalTags")}

## Risk-item observations

| Risk item | Theme | Linked complaint records |
|---|---|---:|
${riskRows}

## Confidence distribution

Terminology and risk-link confidence are deterministic ranking scores shown separately.

| Band | Terminology results | Risk links |
|---|---:|---:|
${bandCounts.map((item) => `| ${item.band} | ${item.terminology} | ${item.risk} |`).join("\n")}

Unresolved evidence mentions: ${unresolved}. Complaints with no risk link: 0. Exposure denominator: unavailable.

## Review queues

- [SNOMED CT human-review queue](../review/snomed-review-queue.md) — no SNOMED concept is accepted automatically.
- [Risk-management human-review queue](../review/risk-review-queue.md) — proposed links, control cues, variations, and coverage gaps.
- [Bidirectional synthetic risk register](risk-management.md) — reverse links and risk-control context.

## Terminology sources

<div class="source-grid">
<div class="source-card"><strong>WHO ICD-11 MMS</strong><p>Release ${WHO_RELEASE}; primary clinical classifier. Authenticated calls occur only at build time and official results are cached.</p><a href="https://icd.who.int/">Open WHO ICD-11</a></div>
<div class="source-card"><strong>IMDRF AET</strong><p>Release 2026; local pinned Annexes A–G for device problems, effects, impact, and components.</p><a href="${IMDRF_RELEASE_PAGE}">Open IMDRF release</a></div>
<div class="source-card"><strong>SNOMED CT</strong><p>Selective human-reviewed web fallback. No API scraping and no unlicensed terminology bundle.</p><a href="https://browser.ihtsdotools.org/">Open SNOMED Browser</a></div>
</div>

## Method and provenance

The generator preserves exact source offsets, assertion state, query text, official release metadata, source URL, confidence rationale, risk-chain matches, unmatched elements, and non-conclusive control cues. See the [project README](https://github.com/mvattulainen/medcodingtorisk#readme) for build and validation details.

| Build item | Value |
|---|---|
| Deterministic timestamp | ${BUILD_TIMESTAMP} |
| Pipeline | ${PIPELINE_VERSION} |
| Terminology manifest | \`${terminologyManifestHash}\` |
| Risk register | \`${riskRegisterHash}\` |
| WHO API | ${WHO_API_VERSION}; MMS ${WHO_RELEASE}; English |
| IMDRF AET | 2026; source \`${imdrfImportManifest.sourceChecksum}\` |
`
}

function renderRiskPage(): string {
  const allLinks = records.flatMap((record) =>
    record.riskLinks.map((link) => ({ record, link })),
  )
  const controlConcerns = allLinks.filter(
    ({ link }) => link.classification === "possible-risk-control-concern",
  )
  const coverageGaps = allLinks.filter(
    ({ link }) => link.classification === "possible-risk-file-coverage-gap",
  )
  const variations = allLinks.filter(({ link }) => link.classification === "variation-of-known-sequence")
  const summaryRows = riskRegister
    .map((risk) => {
      const linked = allLinks.filter(({ link }) => link.riskItemId === risk.id)
      const technical = new Set(linked.flatMap(({ record }) => record.technicalTags))
      const medical = new Set(linked.flatMap(({ record }) => record.medicalTags))
      const cues = new Set(linked.map(({ link }) => link.classification))
      return `| [${risk.id}](#${risk.id.toLowerCase()}) | ${linked.length} | ${[...technical].slice(0, 3).map((tag) => tag.replace("technical-", "")).join(", ") || "—"} | ${[...medical].slice(0, 3).map((tag) => tag.replace("medical-", "")).join(", ") || "—"} | ${[...cues].join(", ") || "—"} |`
    })
    .join("\n")

  const sections = riskRegister
    .map((risk) => {
      const linked = allLinks.filter(({ link }) => link.riskItemId === risk.id)
      const reviewCues = new Map(
        linked.flatMap(({ link }) =>
          link.controlReviewCues.map((cue) => [`${cue.controlId}:${cue.cue}`, cue] as const),
        ),
      )
      const controlRows = risk.riskControls
        .map((control) => {
          const cues = [...reviewCues.values()].filter((cue) => cue.controlId === control.id)
          const cueText =
            cues.length > 0
              ? [...new Set(cues.map((cue) => cue.rationale))].join(" ")
              : "No complaint-specific evidence about this control."
          return `| ${control.id} | ${control.type} | ${escapeTable(control.description)} | ${escapeTable(cueText)} |`
        })
        .join("\n")
      const linkedRows =
        linked.length > 0
          ? linked
              .sort((a, b) => a.record.id.localeCompare(b.record.id))
              .map(
                ({ record, link }) =>
                  `| [${record.id} — ${record.title}](complaints/${record.slug}.md) | ${record.technicalTags.map((tag) => tag.replace("technical-", "")).join(", ")} | ${record.medicalTags.map((tag) => tag.replace("medical-", "")).join(", ")} | \`${link.classification}\` · ${link.confidence.toFixed(2)} |`,
              )
              .join("\n")
          : "| — | — | — | No linked complaint records |"

      return `## ${risk.id} — ${risk.title}

**Version:** ${risk.version} · **Status:** ${risk.status} · **Owner:** ${risk.ownerRole} · **Source hash:** \`${risk.sourceHash}\`

### Risk-file chain

| Element | Synthetic risk-file statement |
|---|---|
| Hazard/source of harm | ${escapeTable(risk.hazardOrSourceOfHarm)} |
| Sequence of events | ${escapeTable(risk.foreseeableSequenceOfEvents.join(" → "))} |
| Hazardous situation | ${escapeTable(risk.hazardousSituation)} |
| Anticipated harms | ${risk.anticipatedHarms.map((term) => `${term.label}${term.code ? ` (\`${term.code}\`)` : ""}`).join("; ")} |
| Anticipated device problems | ${risk.anticipatedDeviceProblems.map((term) => `${term.label}${term.code ? ` (\`${term.code}\`)` : ""}`).join("; ")} |
| Related components | ${risk.relatedComponents.map((term) => `${term.label}${term.code ? ` (\`${term.code}\`)` : ""}`).join("; ")} |
| Stored severity | ${risk.severityCategory ?? "Not specified"} |
| Stored occurrence | ${risk.occurrenceCategory ?? "Not specified"} |
| Stored residual-risk status | ${risk.residualRiskStatus ?? "Not specified"} |

The stored risk-file fields above are copied from the synthetic record. This demo does not alter or reassess them.

### Risk controls

| Control ID | Type | Description | Complaint review cue |
|---|---|---|---|
${controlRows}

### Linked complaints

| Complaint | Observed device concepts | Observed medical effects | Link review |
|---|---|---|---|
${linkedRows}

### Review status

> [!question] Human risk-management review
> ${linked.length} complaint-link observation${linked.length === 1 ? "" : "s"} are proposed. Counts are not occurrence rates, and no automatic risk-file change is proposed.
`
    })
    .join("\n")

  const queue = (
    title: string,
    items: Array<{ record: ComplaintRecord; link: RiskLink }>,
    empty: string,
  ) => `### ${title}

${
  items.length > 0
    ? items
        .map(
          ({ record, link }) =>
            `- [${record.id} — ${record.title}](complaints/${record.slug}.md) → [${link.riskItemId}](#${link.riskItemId.toLowerCase()}): \`${link.classification}\`; ${link.rationale}`,
        )
        .join("\n")
    : `- ${empty}`
}`

  return `---
title: "Synthetic CPAP Risk-Management Register"
description: "Versioned ISO 14971-style demo risk register with reverse links to coded synthetic complaints."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-risk-register
  - risk-management
  - post-market-review
quartz-properties: false
---

# Synthetic CPAP Risk-Management Register

> [!warning] Synthetic risk file
> This page is a demonstration artifact, not a manufacturer's proprietary or approved risk-management file. It does not determine risk acceptability, alter severity or occurrence, establish causality, or make regulatory decisions.

## Register summary

<div class="metric-grid">
<div class="metric"><strong>${riskRegister.length}</strong><span>synthetic risk items</span></div>
<div class="metric"><strong>${allLinks.length}</strong><span>proposed complaint links</span></div>
<div class="metric"><strong>${controlConcerns.length}</strong><span>possible control concerns</span></div>
<div class="metric"><strong>${coverageGaps.length}</strong><span>possible coverage gaps</span></div>
</div>

| Register item | Value |
|---|---|
| Version | 1.0 |
| Source file | \`data/risk-management/cpap-risk-register.json\` |
| Register hash | \`${riskRegisterHash}\` |
| Source hash carried by each item | \`${riskSeedHash}\` |
| Exposure denominator | Unavailable |
| Automatic risk-file updates | Prohibited |

## Risk-item overview

| Risk item | Linked complaints | Observed device problems | Observed medical effects | Review cues |
|---|---:|---|---|---|
${summaryRows}

## Human review queues

${queue("Possible risk-control concerns", controlConcerns, "No possible control-concern links.")}

${queue("Possible risk-file coverage gaps", coverageGaps, "No possible coverage-gap links.")}

${queue("Variations of known sequences", variations, "No variations of known sequences.")}

> [!info] Descriptive observations only
> Complaint counts are not probabilities or occurrence categories. The highest observed effect is not used to change severity. Terminology confidence is not combined with risk magnitude.

${sections}

## Source and method limitations

- All risk chains, controls, classifications, and dispositions are synthetic and versioned for this demonstration.
- Reverse links are generated from structured risk-link records and validated against all complaint pages.
- A link is a proposal until a qualified risk-management owner reviews it.
- The generator cannot create, approve, close, retire, or modify a risk record.
- Exposure denominator is unavailable; count-based frequency assessment is prohibited.
- External terminology links may be temporarily unavailable without invalidating the pinned local evidence.
`
}

function renderSnomedQueue(): string {
  const tasks = records.flatMap((record) =>
    record.evidence
      .filter((mention) => mention.routingDecision.snomedFallbackRequired)
      .map((mention) => ({ record, mention })),
  )
  return `# SNOMED CT Human-Review Queue

> [!warning] Human verification required
> This project does not scrape or automatically accept SNOMED CT concepts. Every task below is unresolved until a qualified reviewer records a concept identifier, fully specified name, preferred term, edition, effective date, browser URL, reviewer, and verification date.

| Complaint | Evidence | Proposed search | Reason | Browser |
|---|---|---|---|---|
${tasks
  .map(
    ({ record, mention }) =>
      `| [${record.id}](../content/complaints/${record.slug}.md) | “${escapeTable(mention.sourceText)}” | ${escapeTable(mention.normalizedText)} | ${escapeTable(mention.unresolvedReason ?? "Greater clinical granularity may be useful.")} | [Open search](https://browser.ihtsdotools.org/?perspective=full&conceptId1=404684003&edition=MAIN/SNOMEDCT-IE&release=&languages=en&preferredOrSynonym=true&term=${encodeURIComponent(mention.normalizedText)}) |`,
  )
  .join("\n")}

## Reviewer fields

For each selected concept, add a reviewed record to a future controlled review file. No concept is prepopulated in this demo.
`
}

function renderRiskQueue(): string {
  const links = records.flatMap((record) => record.riskLinks.map((link) => ({ record, link })))
  return `# Risk-Link Human-Review Queue

> [!warning] Proposals, not risk decisions
> A qualified risk-management owner must confirm, change, or reject each link. The queue cannot change severity, occurrence, acceptability, residual risk, or benefit-risk conclusions.

| Complaint | Candidate risk item | Classification | Confidence | Controls | Disposition |
|---|---|---|---:|---|---|
${links
  .sort((a, b) => a.record.id.localeCompare(b.record.id) || b.link.confidence - a.link.confidence)
  .map(
    ({ record, link }) =>
      `| [${record.id}](../content/complaints/${record.slug}.md) | [${link.riskItemId}](../content/risk-management.md#${link.riskItemId.toLowerCase()}) | \`${link.classification}\` | ${link.confidence.toFixed(2)} · ${confidenceLabel(link.confidence)} | ${link.relevantControlIds.map((id) => `\`${id}\``).join(", ") || "—"} | \`${link.reviewDisposition}\` |`,
  )
  .join("\n")}
`
}

await mkdir(resolve(root, "content/complaints"), { recursive: true })
await mkdir(resolve(root, "data/risk-management"), { recursive: true })
await mkdir(resolve(root, "review"), { recursive: true })
await mkdir(resolve(root, "data/evaluation"), { recursive: true })

writeFileSync(resolve(root, "data/complaints.seed.json"), stableJson(complaints))
writeFileSync(resolve(root, "data/complaints.records.json"), stableJson(records))
writeFileSync(
  resolve(root, "data/coding-results.json"),
  stableJson(records.map((record) => ({ complaintId: record.id, evidence: record.evidence, provenance: record.provenance }))),
)
writeFileSync(
  resolve(root, "data/risk-links.json"),
  stableJson(records.map((record) => ({ complaintId: record.id, links: record.riskLinks }))),
)
writeFileSync(resolve(root, "data/risk-management/cpap-risk-register.json"), stableJson(riskRegister))
writeFileSync(resolve(root, "data/terminology-manifest.json"), stableJson(terminologyManifest))
writeFileSync(
  resolve(root, "data/build-manifest.json"),
  stableJson({
    generatedAt: BUILD_TIMESTAMP,
    deterministicBuild: true,
    pipelineVersion: PIPELINE_VERSION,
    complaintCount: records.length,
    pageCount: 22,
    terminologyManifestHash,
    riskRegisterHash,
    imdrfSourceChecksum: imdrfImportManifest.sourceChecksum,
    whoRelease: WHO_RELEASE,
  }),
)

writeFileSync(resolve(root, "content/index.md"), renderIndex())
writeFileSync(resolve(root, "content/risk-management.md"), renderRiskPage())
for (const record of records) {
  writeFileSync(resolve(root, `content/complaints/${record.slug}.md`), renderComplaint(record))
}
writeFileSync(resolve(root, "review/snomed-review-queue.md"), renderSnomedQueue())
writeFileSync(resolve(root, "review/risk-review-queue.md"), renderRiskQueue())

if (existsSync(resolve(root, "content/.gitkeep"))) {
  // The upstream placeholder is not a publishable page and is removed only from the generated content folder.
  const { unlinkSync } = await import("node:fs")
  unlinkSync(resolve(root, "content/.gitkeep"))
}

console.log(
  `Generated ${records.length} complaint records, 22 Markdown pages, ${records.reduce((sum, record) => sum + codeCount(record), 0)} accepted codes, and ${records.flatMap((record) => record.riskLinks).length} risk links.`,
)
