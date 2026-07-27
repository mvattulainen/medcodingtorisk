export type Assertion =
  | "present"
  | "negated"
  | "suspected"
  | "historical"
  | "resolved"
  | "conditional"
  | "unclear"

export type EntityType =
  | "clinical_condition"
  | "clinical_sign_or_symptom"
  | "injury"
  | "health_impact"
  | "intervention"
  | "device_problem"
  | "device_component"
  | "device_setting"
  | "environmental_factor"
  | "use_error_or_use_context"
  | "no_harm_statement"
  | "investigation_statement"

export type TerminologyName = "WHO ICD-11 MMS" | "IMDRF AET" | "SNOMED CT"
export type ConfidenceBand = "strong" | "good" | "plausible" | "weak"

export interface CodeSeed {
  terminology: Exclude<TerminologyName, "SNOMED CT">
  code: string
  confidence: number
  query?: string
  rationale: string
}

export interface EvidenceSeed {
  sourceText: string
  normalizedText: string
  entityType: EntityType
  assertion: Assertion
  temporality?: "current" | "historical" | "unknown"
  experiencer?: "patient" | "user" | "caregiver" | "unknown"
  statedOrInferred?: "stated" | "inferred"
  route: TerminologyName
  routeRationale: string
  accepted?: CodeSeed
  candidates?: CodeSeed[]
  snomedFallbackRequired?: boolean
  unresolvedReason?: string
  missingContextFlags?: string[]
}

export type RiskClassification =
  | "consistent-with-known-risk"
  | "variation-of-known-sequence"
  | "possible-new-device-problem"
  | "possible-new-hazardous-situation"
  | "possible-new-harm"
  | "possible-risk-control-concern"
  | "possible-risk-file-coverage-gap"
  | "insufficient-information"
  | "no-link-found"

export type ControlCue =
  | "relevant-effectiveness-unknown"
  | "may-not-have-operated-as-intended"
  | "may-not-have-been-used-or-maintained"
  | "possible-usability-or-information-concern"
  | "sequence-not-covered"
  | "no-control-evidence"

export interface RiskLinkSeed {
  riskItemId: string
  confidence: number
  classification: RiskClassification
  evidenceIndexes: number[]
  matchedElements: Array<
    "device-problem" | "component" | "sequence-of-events" | "hazardous-situation" | "harm" | "risk-control"
  >
  unmatchedElements: string[]
  relevantControlIds: string[]
  cue: ControlCue
  cueRationale: string
  rationale: string
}

export interface ComplaintSeed {
  id: string
  slug: string
  title: string
  narrative: string
  evidence: EvidenceSeed[]
  followUpQuestions: string[]
  medicalTags: string[]
  technicalTags: string[]
  contextTags: string[]
  reviewTags: string[]
  riskLinks: RiskLinkSeed[]
  regulatoryCues: string[]
}

export interface RiskTermReference {
  terminology: "WHO ICD-11 MMS" | "IMDRF AET" | "SNOMED CT" | "local"
  code?: string
  label: string
  annex?: "A" | "E" | "F" | "G"
}

export interface RiskControl {
  id: string
  type: "inherent-safety" | "protective-measure" | "information-for-safety"
  description: string
  verificationReference?: string
}

export interface RiskItemSeed {
  id: string
  version: string
  title: string
  status: "active" | "under-review" | "retired"
  deviceFamily: "CPAP"
  hazardOrSourceOfHarm: string
  foreseeableSequenceOfEvents: string[]
  hazardousSituation: string
  anticipatedHarms: RiskTermReference[]
  anticipatedDeviceProblems: RiskTermReference[]
  relatedComponents: RiskTermReference[]
  riskControls: RiskControl[]
  severityCategory?: string
  occurrenceCategory?: string
  residualRiskStatus?: string
  ownerRole: string
  lastApprovedAt: string
}

export interface CodeCandidate {
  terminology: TerminologyName
  code: string
  preferredTitle: string
  annex?: "A" | "B" | "C" | "D" | "E" | "F" | "G"
  releaseOrEdition: string
  sourceUrl: string
  confidence: number
  confidenceBand: ConfidenceBand
  rationale: string
  status: "accepted" | "candidate" | "rejected" | "unresolved"
  humanVerified: boolean
  queryUsed: string
  sourceRecordHash?: string
}

export interface EvidenceMention {
  id: string
  sourceText: string
  sentence: string
  start: number
  end: number
  normalizedText: string
  entityType: EntityType
  assertion: Assertion
  temporality: "current" | "historical" | "unknown"
  experiencer: "patient" | "user" | "caregiver" | "unknown"
  statedOrInferred: "stated" | "inferred"
  missingContextFlags: string[]
  routingDecision: {
    primaryTerminology: TerminologyName
    rationale: string
    snomedFallbackRequired: boolean
  }
  acceptedCode: CodeCandidate | null
  candidates: CodeCandidate[]
  unresolvedReason?: string
}

export interface RiskChainMatch {
  element:
    | "device-problem"
    | "component"
    | "sequence-of-events"
    | "hazardous-situation"
    | "harm"
    | "risk-control"
  complaintEvidence: string
  riskFileText: string
  matchScore: number
}

export interface RiskLink {
  riskItemId: string
  riskItemVersion: string
  status: "proposed" | "confirmed" | "rejected" | "unresolved"
  classification: RiskClassification
  confidence: number
  confidenceBand: ConfidenceBand
  rationale: string
  evidenceMentionIds: string[]
  matchedElements: RiskChainMatch[]
  unmatchedElements: string[]
  relevantControlIds: string[]
  controlReviewCues: Array<{
    controlId: string
    cue: ControlCue
    rationale: string
  }>
  reviewDisposition:
    | "not-reviewed"
    | "link-confirmed"
    | "link-changed"
    | "new-risk-review-opened"
    | "risk-control-review-opened"
    | "insufficient-information"
    | "no-risk-file-change-needed"
  humanVerified: boolean
}

export interface ComplaintRecord {
  id: string
  slug: string
  title: string
  deviceFamily: "CPAP"
  synthetic: true
  narrative: string
  generatedFromSeed: string
  evidence: EvidenceMention[]
  followUpQuestions: string[]
  medicalTags: string[]
  technicalTags: string[]
  contextTags: string[]
  reviewTags: string[]
  riskLinks: RiskLink[]
  primaryRiskItemId: string | null
  regulatoryCues: string[]
  provenance: {
    generatedAt: string
    pipelineVersion: string
    promptVersion: string
    modelName: string
    terminologyManifestHash: string
    riskRegisterHash: string
    reviewer: string | null
    reviewTimestamp: string | null
  }
}
