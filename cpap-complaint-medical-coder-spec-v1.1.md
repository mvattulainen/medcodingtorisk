---
title: "English CPAP Complaint Medical Coder and Risk Linker — Product and Implementation Specification"
description: "Implementation-ready specification for a Quartz-published demo that codes 20 synthetic CPAP complaints and links them bidirectionally to a simulated ISO 14971-style risk-management file."
date: 2026-07-27
draft: false
tags:
  - specification
  - medical-device
  - complaint-coding
  - cpap
  - icd-11
  - imdrf
  - snomed-ct
  - quartz
quartz-properties: false
---

# English CPAP Complaint Medical Coder and Risk Linker

**Specification version:** 1.1  
**Status:** Ready for implementation by a coding agent  
**Primary device:** Continuous positive airway pressure (CPAP) machine and accessories  
**Publication target:** GitHub Pages generated with Quartz  
**Demo data:** Fully synthetic; no real patient, customer, or complaint data

> [!warning] Demonstration only
> This project is a terminology-assisted regulatory demonstration. It does not diagnose patients, determine causality, make reportability decisions, or replace qualified medical, clinical, quality, or regulatory review.

## 1. Executive summary

Build a static, auditable demo that transforms 20 English-language synthetic CPAP complaints into structured coded records and then links those records to a simulated manufacturer risk-management file.

The **primary demo feature** is the complaint-to-risk feedback loop. A reviewer must be able to follow this bidirectional chain:

```text
Complaint evidence
  → ICD-11 / IMDRF / reviewed SNOMED CT coding
  → candidate or confirmed risk-file item
  → hazard or source of harm
  → foreseeable sequence of events
  → hazardous situation
  → anticipated harm
  → implemented risk controls
  → post-market review cue and human disposition
```

Each complaint page must contain:

1. One simulated complaint narrative.
2. Extracted medical and technical evidence spans.
3. Accepted coded terms and alternative term candidates.
4. A coding confidence score and concise confidence rationale for every accepted code and candidate.
5. Separate medical and technical tags.
6. One or more proposed links to risk-file items, each with evidence, linkage confidence, rationale, and review status.
7. A comparison between observed complaint concepts and the risk file's anticipated device problems, hazardous situations, and harms.
8. Relevant risk controls and a non-conclusive control-effectiveness review cue.
9. Direct links to official terminology sources and internal risk-file anchors.
10. A visible synthetic-data and human-review disclaimer.

The generator must publish:

- **20 complaint pages**.
- **One aggregate index page** with tag counts and links.
- **One risk-management page** containing the simulated CPAP risk register, complaint counts per risk item, coded observations, risk-control review cues, and reverse links to all contributing complaints.

The application must use:

- **WHO ICD-11** as the primary coding system for diseases, disorders, injuries, signs, symptoms, and other health conditions.
- **A local, pinned copy of IMDRF Adverse Event Terminology** for device problems, components, health effects, health impacts, and—where supplied investigation evidence supports it—investigation terminology.
- **SNOMED CT web search as a selective, human-reviewed fallback** when ICD-11 is insufficiently precise for a clinically meaningful concept.
- **A local synthetic risk register** whose identifiers, risk chains, controls, and review states are versioned in Git.

The generated Quartz site is a read-only evidence and demonstration layer. Coding, terminology resolution, and risk-link proposals occur before publication. The system may recommend review but must never automatically alter risk acceptability, severity, probability, residual risk, benefit-risk conclusions, or regulatory reportability.

---

## 2. Main demo concepts

### 2.1 Bidirectional complaint-to-risk traceability

This is the central product demonstration.

Every complaint must show which risk-file item it may inform and why. Every risk-file item must show the complaints that contribute post-market evidence to it. Links are based on exact coded evidence, not merely shared keywords.

The linkage panel must answer:

- Which technical problem or event sequence was observed?
- Which clinical sign, symptom, condition, or harm was observed?
- Which existing risk item best represents that combination?
- Is the complaint consistent with a known risk, a variation of a known sequence, a potentially new harm, or a possible risk-file coverage gap?
- Which risk controls are relevant?
- Does the complaint suggest that a control may not have operated as intended, was not used, was not understood, or cannot be assessed from the available information?
- What review decision is required from the risk-management owner?

The system must preserve a distinction between:

- **Terminology coding confidence** — confidence that a phrase maps to a terminology concept.
- **Risk-link confidence** — confidence that coded complaint evidence belongs to a particular risk-file item.
- **Risk-management decision** — a qualified human decision that the demo must not automate.

### 2.2 Evidence-grounded complaint coding

Every code must be traceable to an exact phrase in the complaint. The page highlights:

- Source phrase
- Normalized phrase
- Assertion status
- Selected terminology
- Accepted code or candidate code
- Confidence
- Reason for selection
- Official source link

The demo must visibly distinguish **what the complainant stated** from **what the coding system inferred**.

### 2.3 Clinical and device terminology separation

One narrative may yield multiple semantic layers:

- Clinical symptom or condition → ICD-11, with occasional SNOMED CT fallback
- Device problem → IMDRF Annex A
- Health effect → IMDRF Annex E
- Health impact → IMDRF Annex F
- Device component → IMDRF Annex G
- Investigation type/finding/conclusion → IMDRF Annexes B–D only when the complaint or supplied investigation text supports them

Do not force a device malfunction into ICD-11. Do not use a clinical terminology as a substitute for the IMDRF device-event hierarchy.

### 2.4 Risk-chain matching rather than flat tagging

The risk linker must compare structured complaint evidence with a local risk chain containing:

- Hazard or source of harm
- Foreseeable sequence of events
- Hazardous situation
- Harm
- Risk-control identifiers

A complaint may match only part of a risk chain. The output must identify matched, unmatched, and conflicting elements. For example, a mask leak and eye irritation may match an anticipated leak-to-ocular-exposure sequence, while an unexpected new component failure mode may be marked as a variation requiring review.

### 2.5 Candidate transparency and abstention

Show one accepted terminology code or risk link only when the evidence is sufficiently specific. Otherwise show ranked candidates and the status **Human selection required**.

The attractive demo interaction is not “AI knows the answer.” It is:

> “The system found the relevant evidence, searched the right terminology, linked it to the most defensible risk-file candidates, explained the ranking, and abstained when the record was insufficient.”

### 2.6 Risk-control feedback

For every linked risk item, show the controls represented in the synthetic risk file and classify the complaint evidence as one of:

- Control appears relevant; effectiveness cannot be assessed
- Control may not have operated as intended
- Control may not have been used or maintained as instructed
- Complaint suggests foreseeable misuse or usability concern
- Complaint contains no evidence about the control
- Potentially new failure sequence not covered by listed controls

These are review cues, not conclusions. The demo must not claim that a control failed or that residual risk is unacceptable.

### 2.7 Terminology and risk-file provenance

Every terminology result displays:

- Terminology
- Code/concept identifier
- Preferred title
- Release or edition
- Source link
- Retrieval timestamp or build timestamp
- Selection status: accepted, candidate, rejected, or unresolved
- Selection actor: rule, model suggestion, or human reviewer

Every risk link displays:

- Risk item ID and version
- Risk-register source file and hash
- Matched risk-chain elements
- Linkage confidence and rationale
- Review state and reviewer
- Links in both directions

### 2.8 Cross-complaint risk review

The risk-management page demonstrates post-market review concepts:

- Complaint count per risk item
- Device-problem and harm combinations per risk item
- Risk items with repeated complaints
- Risk items with complaints suggesting a control-effectiveness concern
- Complaints that do not fit any existing risk item
- Possible new sequences of events or harms
- Severity-escalation cues without automated severity reassignment
- Denominator unavailable warnings where frequency cannot be assessed

This is descriptive decision support only. It must not label a regulatory signal, recalculate probability, or declare risk acceptability.

### 2.9 Static, reviewable Git history

All generated pages and local risk-file records are committed as Markdown or JSON. A reviewer can inspect:

- Narrative changes
- Code changes
- Risk-link changes
- Confidence changes
- Risk-control review-cue changes
- Terminology-release changes
- Tag and risk-item count changes

This makes the demo attractive for regulated teams because every published result is diffable.

---

## 3. Product goals

1. Demonstrate safe and transparent AI-assisted coding of medical-device complaints.
2. Demonstrate correct terminology routing between ICD-11, IMDRF, and SNOMED CT.
3. Produce attractive, navigable Quartz pages with no runtime dependency on protected credentials.
4. Show evidence, uncertainty, and alternatives rather than an opaque final code.
5. Create a reusable architecture that can later support other device families.
6. Provide deterministic build outputs suitable for Git review.
7. Make the distinction between clinical coding and technical complaint coding obvious to regulatory users.
8. Demonstrate bidirectional traceability between complaint evidence and the risk-management file.
9. Identify possible risk-file coverage gaps and control-effectiveness review cues without making autonomous risk decisions.
10. Make complaint-driven risk review navigable at both case level and aggregate risk-item level.

## 4. Non-goals

The first version must not:

- Determine whether an event is reportable.
- Determine seriousness, causality, expectedness, or device contribution.
- Diagnose a medical condition not explicitly stated.
- Generate or submit FDA MDR, EU MIR, FSCA, PSUR, or other regulatory reports.
- Use real complaint, patient, or customer data.
- Scrape the SNOMED International Browser.
- Expose WHO API client secrets in browser-side JavaScript or the generated site.
- Automatically accept a SNOMED CT concept without human verification.
- Claim that confidence values are clinically calibrated probabilities.
- Translate multilingual complaints; this specification is English-only.
- Infer investigation conclusions from complaint text alone.
- Automatically create, edit, approve, close, or retire a risk-file item.
- Automatically change severity, probability of occurrence, risk acceptability, residual risk, or benefit-risk conclusions.
- Treat complaint counts as occurrence rates without an appropriate exposure denominator.
- Claim that a complaint proves causality or proves that a risk control failed.
- Use the synthetic risk register as a substitute for a manufacturer's actual risk-management file.

---

## 5. Intended users

### 5.1 Regulatory affairs reviewer

Needs to understand why a code was proposed and whether the evidence supports it.

### 5.2 Complaint-handling specialist

Needs fast separation of patient effects, device problems, and missing information.

### 5.3 Medical safety reviewer

Needs clinically coherent candidates, assertion status, and clear abstention.

### 5.4 Quality, PMS, or risk-management specialist

Needs aggregate tags, links back to individual complaint records, proposed risk-file links, control-effectiveness review cues, and evidence of possible coverage gaps.

### 5.5 AI or data governance reviewer

Needs deterministic processing, provenance, version control, and evaluation results.

---

## 6. Required output

The generator must create **22 publishable Markdown pages**:

```text
content/
├── index.md
├── risk-management.md
└── complaints/
    ├── 01-mask-leak-eye-irritation.md
    ├── 02-nasal-bridge-pressure-injury.md
    ├── 03-mask-contact-dermatitis.md
    ├── 04-dry-mouth-and-throat.md
    ├── 05-nasal-dryness-and-epistaxis.md
    ├── 06-aerophagia-and-bloating.md
    ├── 07-low-pressure-morning-headache.md
    ├── 08-high-pressure-chest-discomfort.md
    ├── 09-mask-claustrophobia-and-panic.md
    ├── 10-rainout-coughing-event.md
    ├── 11-humidifier-hot-water-burn.md
    ├── 12-tubing-disconnection-therapy-interruption.md
    ├── 13-power-loss-shortness-of-breath.md
    ├── 14-unexpected-device-restart.md
    ├── 15-inaudible-alarm.md
    ├── 16-pressure-change-after-software-update.md
    ├── 17-blocked-filter-respiratory-irritation.md
    ├── 18-humidifier-contamination-and-cough.md
    ├── 19-excessive-noise-and-insomnia.md
    └── 20-headgear-strap-break-no-injury.md
```

Support files may be generated outside `content/`, for example:

```text
data/
├── complaints.seed.json
├── coding-results.json
├── risk-links.json
├── terminology-manifest.json
├── risk-management/
│   └── cpap-risk-register.json
└── imdrf/
    └── 2026/
        ├── annex-a.json
        ├── annex-b.json
        ├── annex-c.json
        ├── annex-d.json
        ├── annex-e.json
        ├── annex-f.json
        └── annex-g.json

scripts/
├── import-imdrf.ts
├── code-complaints.ts
├── render-markdown.ts
├── link-risk-items.ts
├── build-tag-index.ts
├── build-risk-page.ts
└── validate-output.ts
```

---

## 7. Terminology policy

## 7.1 WHO ICD-11: primary clinical classifier

Use WHO ICD-11 for:

- Diseases and disorders
- Signs and symptoms
- Injuries
- Clinical conditions
- Relevant external-cause concepts where supported and useful
- Other health states represented in ICD-11 MMS

### Required integration behavior

- Use the official WHO ICD API.
- Use API major version header `API-Version: v2`.
- Use English content.
- Pin an ICD-11 release in configuration for reproducible builds.
- Use the MMS linearization when a publishable ICD-11 code is required.
- Preserve the WHO entity URI and, where available, foundation URI.
- Store the exact search query used.
- Store the top candidate results before local ranking.
- Cache API responses for deterministic rebuilds and rate-limit protection.
- Keep OAuth client credentials in server-side or build-time environment variables.
- Do not make authenticated WHO API calls from the public Quartz site.

### Suggested environment variables

```bash
WHO_ICD_CLIENT_ID=
WHO_ICD_CLIENT_SECRET=
WHO_ICD_API_BASE=https://id.who.int
WHO_ICD_API_VERSION=v2
WHO_ICD_RELEASE=
WHO_ICD_LINEARIZATION=mms
WHO_ICD_LANGUAGE=en
```

### Accepted-code policy

An ICD-11 code may be accepted automatically only when all are true:

1. The source phrase is explicit and non-negated.
2. The candidate is semantically compatible with the entire sentence.
3. No more specific contradictory candidate is present.
4. The final confidence is at least `0.80`.
5. The code exists in the pinned ICD-11 release.
6. The result has an official URI.

Otherwise, publish ranked candidates and mark the term for human review.

## 7.2 Local IMDRF terminology: device and event layer

Use the official IMDRF Adverse Event Terminology release pinned in the terminology manifest. For this specification, the preferred baseline is the **2026 release**.

### Annex routing

| Annex | Use |
|---|---|
| A | Medical device problem |
| B | Type of investigation |
| C | Investigation finding |
| D | Investigation conclusion |
| E | Clinical signs, symptoms, or conditions |
| F | Health impact |
| G | Medical device component |

For complaint-only cases, the typical output will use Annexes A, E, F, and G. Do not create B, C, or D codes unless corresponding investigation evidence exists.

### Local import requirements

The import script must:

1. Load only files downloaded from the official IMDRF source.
2. Record source URL, release, download timestamp, and SHA-256 checksum.
3. Normalize field names without changing official terms or definitions.
4. Preserve code, term, definition, annex, hierarchy level, and parent code.
5. Reject duplicate codes.
6. Reject orphaned child records unless the official source itself contains the exception and it is documented.
7. Build a read-only local search index.
8. Never invent, repair, or autocomplete an IMDRF code.
9. Fail the build if an output code is absent from the pinned local release.

### Suggested local record

```json
{
  "terminology": "IMDRF AET",
  "release": "2026",
  "annex": "A",
  "code": "OFFICIAL_CODE_FROM_SOURCE",
  "term": "Official preferred term",
  "definition": "Official definition",
  "parentCode": "OFFICIAL_PARENT_OR_NULL",
  "level": 2,
  "status": "active",
  "sourceUrl": "https://www.imdrf.org/...",
  "sourceChecksum": "sha256:..."
}
```

## 7.3 SNOMED CT: selective human-reviewed fallback

Use SNOMED CT only when the clinical meaning is materially more precise than an available ICD-11 representation, for example:

- A specific clinical finding not adequately represented by an ICD-11 code
- A body-site-specific finding
- A procedure or intervention that is useful to preserve
- A morphology or clinical context needed for the demo
- A reviewer explicitly requests a SNOMED concept

### Important operating rule

The SNOMED International Browser is a reference browser. The first version must not scrape it or rely on its REST APIs as a production integration.

Instead, the pipeline must:

1. Generate a proposed English search phrase.
2. Create a visible “Open SNOMED CT Browser search” review link or instruction.
3. Require a human reviewer to select and record the concept.
4. Store the concept identifier, fully specified name, preferred term, edition, effective date, and browser URL.
5. Mark the result `human_verified: true`.
6. Publish an unresolved fallback when no human selection has been made.

### Fallback trigger

Create a SNOMED review task when at least one condition is true:

- Best ICD-11 confidence is below `0.75`.
- ICD-11 is too broad for a clinically important finding.
- The extracted term is a clinical finding, anatomy, or procedure rather than a disease-classification concept.
- Two ICD-11 candidates remain materially ambiguous.
- A medical reviewer manually requests more granularity.

SNOMED CT must not be used merely to make the page look more sophisticated.

---

## 8. Coding workflow

```text
Synthetic complaint
      │
      ▼
Sentence and evidence-span extraction
      │
      ├── clinical phrases
      ├── device problems
      ├── device components
      ├── health impacts
      ├── interventions
      ├── negated statements
      └── uncertainty/missing information
      │
      ▼
Assertion and context classification
      │
      ├── present
      ├── absent/negated
      ├── suspected
      ├── historical
      ├── conditional
      └── unclear
      │
      ▼
Terminology routing
      │
      ├── WHO ICD-11
      ├── local IMDRF A/E/F/G
      └── SNOMED CT review fallback
      │
      ▼
Candidate ranking and confidence calculation
      │
      ▼
Acceptance or abstention
      │
      ▼
Medical and technical tags
      │
      ▼
Markdown rendering
      │
      ▼
Aggregate tag index and validation
```

## 8.1 Evidence extraction requirements

For each extracted mention, store:

- Exact source text
- Character start and end offsets
- Sentence
- Normalized query phrase
- Entity type
- Assertion status
- Temporality
- Experiencer
- Whether the mention is complainant-stated or pipeline-inferred
- Missing-context flags

### Required entity types

```text
clinical_condition
clinical_sign_or_symptom
injury
health_impact
intervention
device_problem
device_component
device_setting
environmental_factor
use_error_or_use_context
no_harm_statement
investigation_statement
```

### Assertion statuses

```text
present
negated
suspected
historical
resolved
conditional
unclear
```

Negated concepts must be displayed in the evidence section but must not generate accepted medical-condition tags or accepted clinical codes.

## 8.2 No unsupported diagnosis

Example:

> “The user reported a red mark on the nasal bridge.”

Allowed:

- Pressure-related skin injury candidates
- Skin redness or lesion candidates
- A low-confidence dermatitis candidate if explicitly labeled as an alternative

Not allowed:

- Automatically asserting “pressure ulcer” without supporting description of tissue injury or a clinician diagnosis

## 8.3 Missing-information prompts

Each complaint page should show up to three useful follow-up questions. Examples:

- Was medical treatment required?
- Did therapy stop completely or only intermittently?
- Was the prescribed pressure different from the displayed pressure?
- Was the patient hospitalized?
- Was the mask or tubing replaced?
- Is there a device serial number, software version, or lot number?

These questions are not sent anywhere; they are a static demonstration of complaint-enrichment logic.

---

## 9. Confidence model

Confidence is a deterministic **ranking score**, not a probability of clinical correctness.

### 9.1 Score components

| Component | Range | Description |
|---|---:|---|
| Lexical match | 0.00–0.25 | Match between source/normalized phrase and terminology title/synonyms |
| Context match | 0.00–0.25 | Compatibility with sentence and complaint context |
| Entity-type fit | 0.00–0.15 | Correct terminology and semantic category |
| Assertion clarity | 0.00–0.15 | Present and explicit scores higher than suspected or unclear |
| Specificity fit | 0.00–0.10 | Neither materially too broad nor unsupportedly specific |
| Device relevance | 0.00–0.05 | Appropriate relation to CPAP complaint |
| Source quality | 0.00–0.05 | Official, versioned terminology result with complete metadata |

Maximum displayed score: `0.99`.

### 9.2 Confidence bands

| Score | Label | Default action |
|---:|---|---|
| 0.90–0.99 | Strong match | Accept when no conflict exists |
| 0.80–0.89 | Good match | Accept with review badge |
| 0.65–0.79 | Plausible candidate | Do not auto-accept |
| 0.50–0.64 | Weak candidate | Display only when useful |
| Below 0.50 | Suppressed | Keep in debug output only |

### 9.3 Additional penalties

Apply explicit penalties:

- `-0.20` for suspected or hedged clinical meaning
- `-0.30` for negated terms; never accept
- `-0.15` when an important anatomical qualifier is missing
- `-0.15` when the candidate is broader than the complaint
- `-0.25` when the candidate introduces a diagnosis not stated
- `-0.10` when the terminology release metadata is incomplete

### 9.4 Candidate count

For each extracted mention:

- Publish at most one accepted code.
- Publish up to three alternatives.
- Publish no candidate below `0.50`.
- Explain in one sentence why the accepted candidate outranked alternatives.
- Where no candidate is adequate, state `No defensible code selected`.

---

## 10. Tag model

Tags are human-readable analytic labels, not substitutes for official codes.

### 10.1 Tag namespaces

Use lower-case kebab-case labels:

```text
medical-*
technical-*
context-*
review-*
```

Examples:

```text
medical-eye-irritation
medical-dry-mouth
medical-pressure-injury
technical-mask-leak
technical-humidifier
technical-pressure-setting
context-therapy-interruption
review-snomed-fallback
```

### 10.2 Tagging rules

- A medical tag requires explicit, non-negated complaint evidence or an accepted clinical code.
- A technical tag requires explicit device evidence.
- Candidate-only diagnoses must not become tags.
- `medical-no-injury-reported` may be used only when the complaint explicitly states no injury or symptoms.
- Tags must remain stable across terminology-release updates when the underlying complaint meaning has not changed.
- Tag counts represent the number of distinct complaint pages containing the tag, not the number of mentions.
- The aggregate page must link each tag to all pages containing it.

### 10.3 Recommended medical tag vocabulary

```text
medical-abdominal-bloating
medical-anxiety
medical-burn
medical-chest-discomfort
medical-choking-sensation
medical-cough
medical-daytime-somnolence
medical-dry-eye-symptoms
medical-dry-mouth
medical-epistaxis
medical-eye-irritation
medical-facial-pain
medical-headache
medical-insomnia
medical-nasal-congestion
medical-nasal-dryness
medical-no-injury-reported
medical-panic
medical-pressure-injury
medical-respiratory-irritation
medical-shortness-of-breath
medical-skin-irritation
medical-sleep-disruption
medical-sore-throat
```

### 10.4 Recommended technical tag vocabulary

```text
technical-alarm
technical-alarm-inaudible
technical-condensation
technical-contamination
technical-device-restart
technical-filter-blockage
technical-firmware-update
technical-headgear
technical-humidifier
technical-humidifier-overheating
technical-mask-fit
technical-mask-leak
technical-noise
technical-power-loss
technical-pressure-setting
technical-pressure-too-high
technical-pressure-too-low
technical-strap-break
technical-therapy-interruption
technical-tubing
technical-tubing-disconnection
technical-water-leak
```


---

## 11. Risk-management linkage model

### 11.1 Regulatory design intent

The demo must model production and post-production feedback into risk management. ISO 14971:2019 describes a lifecycle risk-management process that includes monitoring the effectiveness of risk controls, and EU MDR post-market surveillance requirements connect complaint analysis and market experience to continuous reassessment of benefit-risk and risk management.

The implementation must remain conservative: it surfaces structured evidence and review cues but leaves all risk-management decisions to a qualified human.

### 11.2 Local synthetic risk register

Create a versioned file at:

```text
data/risk-management/cpap-risk-register.json
```

The file is synthetic and must be clearly labelled as a demo artifact. It must not reproduce a real manufacturer's proprietary risk file.

Each risk item must contain:

```ts
interface RiskItem {
  id: string;                         // e.g. RISK-CPAP-006
  version: string;                    // e.g. 1.0
  title: string;
  status: "active" | "under-review" | "retired";
  deviceFamily: "CPAP";
  hazardOrSourceOfHarm: string;
  foreseeableSequenceOfEvents: string[];
  hazardousSituation: string;
  anticipatedHarms: RiskTermReference[];
  anticipatedDeviceProblems: RiskTermReference[];
  relatedComponents: RiskTermReference[];
  riskControls: RiskControl[];
  severityCategory?: string;          // copied from local risk file; never inferred
  occurrenceCategory?: string;        // copied from local risk file; never recalculated
  residualRiskStatus?: string;        // copied from local risk file; never altered
  ownerRole: string;
  sourceFile: string;
  sourceHash: string;
  lastApprovedAt: string;
}

interface RiskTermReference {
  terminology: "WHO ICD-11 MMS" | "IMDRF AET" | "SNOMED CT" | "local";
  code?: string;
  label: string;
  annex?: "A" | "E" | "F" | "G";
}

interface RiskControl {
  id: string;                         // e.g. RC-CPAP-006-01
  type: "inherent-safety" | "protective-measure" | "information-for-safety";
  description: string;
  verificationReference?: string;
}
```

### 11.3 Required CPAP demo risk items

The synthetic risk register must contain at least these ten items. The exact terminology codes are resolved during implementation and must not be invented in the seed specification.

| Risk ID | Risk theme | Example sequence and hazardous situation | Representative anticipated harms | Representative controls |
|---|---|---|---|---|
| `RISK-CPAP-001` | Loss or interruption of therapy | Power loss, tubing disconnection, restart, or broken retention component causes absent PAP while the user relies on therapy | dyspnoea, sleep disruption, morning headache, recurrence of sleep-apnoea symptoms | connection retention, power-loss behaviour, alarms, instructions, recovery design |
| `RISK-CPAP-002` | Excessive delivered pressure | Incorrect setting or software/configuration change produces pressure above the intended level | chest discomfort, aerophagia, intolerance, potential pressure-related injury | pressure limits, configuration validation, change controls, clinician setup controls |
| `RISK-CPAP-003` | Insufficient effective pressure or flow | Leak, obstruction, blocked filter, or low setting reduces effective therapy | dry mouth, nasal symptoms, headache, sleepiness, respiratory discomfort | leak detection, filter maintenance instructions, pressure monitoring, mask-fit guidance |
| `RISK-CPAP-004` | Thermal or hot-water exposure | Heated humidifier, hot reservoir water, or spill exposes the user to heat | burn or pain | temperature limits, spill resistance, warning labels, cool-down instructions |
| `RISK-CPAP-005` | Mask or headgear contact injury | Sustained pressure, friction, material contact, or overtightening affects skin | pressure injury, abrasion, dermatitis, pain | material selection, fit design, sizing, cleaning and adjustment instructions |
| `RISK-CPAP-006` | Air leak directed toward eyes | Mask seal failure directs airflow to ocular surface | eye irritation, dryness, redness, burning | seal design, fit guidance, cushion replacement instructions |
| `RISK-CPAP-007` | Contaminated or condensed air-path exposure | Contaminated water chamber, blocked/dirty filter, or condensation enters the breathing circuit | cough, airway irritation, possible infection concern | cleaning instructions, replaceable filters, water-management design, materials and drainage |
| `RISK-CPAP-008` | Alarm or notification not perceived | Alarm is inaudible or unavailable during loss of therapy or fault | delayed awareness and prolonged exposure to the underlying hazardous situation | alarm audibility, visual notification, alarm verification, instructions |
| `RISK-CPAP-009` | Psychological distress or sleep disturbance | Mask enclosure, unexpected noise, or therapy discomfort causes distress or prevents sleep | panic symptoms, anxiety, insomnia, therapy intolerance | gradual acclimatisation guidance, mask options, noise limits, user information |
| `RISK-CPAP-010` | Software/configuration or restart anomaly | Update or software fault changes pressure behaviour or causes unexpected restart | therapy interruption, incorrect pressure, user distress | software lifecycle controls, update validation, rollback/recovery, configuration integrity |

### 11.4 Complaint-to-risk linking workflow

For each complaint:

1. Extract and code clinical and technical evidence.
2. Build a normalized observation set from accepted codes and high-confidence candidates.
3. Retrieve risk items using IMDRF device problem, component, health effect, medical tags, and technical tags.
4. Compare the complaint against each candidate risk chain.
5. Score the match separately for:
   - device problem or initiating event;
   - component;
   - sequence of events;
   - hazardous situation;
   - observed harm or health effect;
   - relevant risk control.
6. Produce up to three candidate risk links.
7. Accept one primary link only when the evidence supports the chain and the score meets the configured threshold.
8. Mark all links as proposals until reviewed by a risk-management owner.
9. Generate a reverse link from the risk-management page to the complaint.

### 11.5 Risk-link classifications

Each proposed link must use one classification:

- `consistent-with-known-risk`
- `variation-of-known-sequence`
- `possible-new-device-problem`
- `possible-new-hazardous-situation`
- `possible-new-harm`
- `possible-risk-control-concern`
- `possible-risk-file-coverage-gap`
- `insufficient-information`
- `no-link-found`

The classification is a review aid, not a regulatory or risk-acceptability conclusion.

### 11.6 Risk-link confidence

Risk-link confidence must be distinct from terminology confidence.

Recommended deterministic components:

| Component | Maximum contribution |
|---|---:|
| Accepted IMDRF device-problem match | 0.25 |
| Component match | 0.10 |
| Sequence-of-events semantic match | 0.20 |
| Hazardous-situation match | 0.15 |
| Observed harm/health-effect match | 0.20 |
| Relevant control evidence | 0.05 |
| Context and temporal consistency | 0.05 |

Apply penalties for:

- candidate-only terminology evidence;
- negated or historical observations;
- missing sequence information;
- multiple equally plausible risk items;
- a harm not represented in the candidate risk item;
- conflict between complaint facts and risk-file assumptions.

Suggested bands:

- `0.85–0.99`: strong proposed link
- `0.70–0.84`: good proposed link
- `0.55–0.69`: plausible candidate
- `<0.55`: weak; do not accept automatically

### 11.7 Human risk-review disposition

Each complaint's risk panel must provide a review state:

- `not-reviewed`
- `link-confirmed`
- `link-changed`
- `new-risk-review-opened`
- `risk-control-review-opened`
- `insufficient-information`
- `no-risk-file-change-needed`

Only a human reviewer may set a state other than `not-reviewed` in production-like workflows. The synthetic demo may prepopulate clearly labelled example dispositions for a small number of cases to demonstrate the UI.

### 11.8 Risk-control effectiveness cues

The system may create one or more non-conclusive cues:

- Control is relevant, but the complaint does not establish whether it was effective.
- Maintenance or replacement instruction may not have been followed.
- Alarm/protective measure may not have been perceived.
- Device behaviour may be inconsistent with the intended control.
- User-interface or information-for-safety control may not have been understood.
- Complaint may represent a sequence not covered by current controls.
- No control-related evidence is present.

Do not generate “control failed,” “control effective,” or “risk unacceptable” as autonomous outputs.

### 11.9 Frequency and severity handling

Complaint counts are observations, not probability estimates.

The risk-management page must display:

- number of linked complaint records;
- number of records by review classification;
- observed coded harms and device problems;
- whether an exposure denominator is available;
- whether the highest observed harm appears outside the anticipated harm list.

The demo must not:

- convert counts into occurrence categories without exposure data and an approved method;
- change severity based on one complaint;
- combine coding confidence with risk magnitude;
- present a risk matrix score generated by the AI.

### 11.10 Expected demo mapping

Use the following as deterministic seed expectations for testing. A coding agent may add secondary links but must preserve the primary mapping unless the risk register or complaint seed is explicitly revised.

| Complaint | Primary risk item | Optional secondary risk item |
|---|---|---|
| CPAP-001 | `RISK-CPAP-006` | `RISK-CPAP-003` |
| CPAP-002 | `RISK-CPAP-005` | — |
| CPAP-003 | `RISK-CPAP-005` | — |
| CPAP-004 | `RISK-CPAP-003` | — |
| CPAP-005 | `RISK-CPAP-003` | — |
| CPAP-006 | `RISK-CPAP-002` | — |
| CPAP-007 | `RISK-CPAP-003` | — |
| CPAP-008 | `RISK-CPAP-002` | — |
| CPAP-009 | `RISK-CPAP-009` | — |
| CPAP-010 | `RISK-CPAP-007` | `RISK-CPAP-003` |
| CPAP-011 | `RISK-CPAP-004` | — |
| CPAP-012 | `RISK-CPAP-001` | — |
| CPAP-013 | `RISK-CPAP-001` | — |
| CPAP-014 | `RISK-CPAP-010` | `RISK-CPAP-001` |
| CPAP-015 | `RISK-CPAP-008` | `RISK-CPAP-001` |
| CPAP-016 | `RISK-CPAP-010` | `RISK-CPAP-002`, `RISK-CPAP-003` |
| CPAP-017 | `RISK-CPAP-003` | `RISK-CPAP-007` |
| CPAP-018 | `RISK-CPAP-007` | — |
| CPAP-019 | `RISK-CPAP-009` | — |
| CPAP-020 | `RISK-CPAP-001` | `RISK-CPAP-005` |

### 11.11 Risk-management page specification

Create `content/risk-management.md` with:

1. Synthetic-risk-file warning.
2. Risk-register version and source hash.
3. Summary metrics.
4. A table of all risk items and linked complaint counts.
5. A section for each risk item with a stable anchor.
6. Risk chain, anticipated harms, device problems, components, and controls.
7. Linked complaint observations with direct page links.
8. New-risk, control-concern, and coverage-gap review queues.
9. Denominator and automation limitations.

Required summary table:

```markdown
| Risk item | Linked complaints | Observed device problems | Observed medical effects | Review cues |
|---|---:|---|---|---|
| [RISK-CPAP-006](#risk-cpap-006) | 1 | mask leak | eye irritation, dry eye symptoms | Control relevance review |
```

Required risk-item section:

```markdown
## RISK-CPAP-006 — Air leak directed toward eyes

### Risk-file chain

| Element | Risk-file statement |
|---|---|
| Hazard/source of harm | Pressurised airflow directed outside the intended breathing path |
| Sequence of events | Mask seal degrades → leak directed upward → ocular surface exposed |
| Hazardous situation | User's eyes are exposed to continuous airflow during sleep |
| Anticipated harms | Eye irritation, dryness, redness, burning |

### Risk controls

| Control ID | Type | Description | Complaint review cue |
|---|---|---|---|
| RC-CPAP-006-01 | Protective measure | Mask seal and cushion design | Effectiveness cannot be determined from complaint alone |
| RC-CPAP-006-02 | Information for safety | Fit and cushion-replacement instructions | Complaint notes a six-month-old cushion; maintenance relevance review |

### Linked complaints

- [CPAP-001 — Mask leak and eye irritation](complaints/01-mask-leak-eye-irritation.md)

### Review status

> [!question] Human risk-management review
> Complaint is consistent with a known risk. Review whether cushion replacement guidance and field occurrence data warrant action. No automatic risk-file change is proposed.
```

---

## 12. Complaint page specification

Each complaint page must use this order.

## 12.1 Frontmatter

```yaml
---
title: "Complaint 01 — Mask Leak and Eye Irritation"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-eye-irritation
  - technical-mask-leak
complaint_id: "CPAP-001"
device_family: "CPAP"
synthetic: true
coding_status: "reviewed-demo"
icd11_release: "PINNED_RELEASE"
imdrf_release: "2026"
snomed_ct_used: false
primary_risk_item: "RISK-CPAP-006"
risk_link_status: "proposed"
risk_review_status: "not-reviewed"
quartz-properties: false
---
```

## 12.2 Body template

```markdown
# Complaint 01 — Mask Leak and Eye Irritation

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding suggestions require qualified human review.

## Complaint

> Full complaint narrative.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 4 |
| Accepted codes | 3 |
| Candidate codes | 4 |
| SNOMED CT fallback | No |
| Proposed risk links | 2 |
| Primary risk-link confidence | 0.92 · Strong |
| Risk-control review cues | 1 |
| Human-review flags | 2 |

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “eyes were red and burning” | clinical_sign_or_symptom | present | eye irritation | ICD-11 / IMDRF E |
| “air was blowing upward” | device_problem | present | mask leak toward eyes | IMDRF A |

## Accepted coded terms

### Eye irritation

- **Evidence:** “eyes were red and burning”
- **Terminology:** WHO ICD-11
- **Code:** `...`
- **Preferred title:** ...
- **Confidence:** `0.91` — Strong match
- **Why selected:** ...
- **Assertion:** Present
- **Source:** [Open official WHO record](...)
- **Release:** ...

### Mask leak

- **Evidence:** “air was blowing upward around the mask”
- **Terminology:** IMDRF AET, Annex A
- **Code:** `...`
- **Preferred term:** ...
- **Confidence:** `0.94` — Strong match
- **Why selected:** ...
- **Source:** [Open official IMDRF terminology source](...)
- **Release:** 2026

## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
| “eyes were red” | ... | ... | ... | 0.71 | Too broad / less complete |

## Uncoded or ambiguous statements

- “The user slept badly” — may represent sleep disruption, but duration and severity are insufficient for a more specific diagnosis.

## Follow-up questions

1. Did the eye symptoms require medical treatment?
2. Was the mask replaced or refitted?
3. Did the leak stop CPAP therapy or only reduce comfort?

## Tags

### Medical

- `medical-eye-irritation`
- `medical-dry-eye-symptoms`
- `medical-sleep-disruption`

### Technical

- `technical-mask-leak`
- `technical-mask-fit`

## Regulatory review cues

- Potential patient effect is present.
- Device problem and clinical effect are separately coded.
- No reportability or causality conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-006 — Air leak directed toward eyes](../risk-management.md#risk-cpap-006)
- **Classification:** `consistent-with-known-risk`
- **Link confidence:** `0.92` — Strong proposed link
- **Evidence used:** “air began leaking ... toward both eyes”; “eyes were red, dry, and burning”
- **Matched chain:** mask seal leak → ocular airflow exposure → eye irritation/dryness
- **Unmatched or uncertain elements:** complaint does not establish the exact seal failure mechanism
- **Why linked:** accepted IMDRF device-problem evidence and clinical coding align with the anticipated risk chain
- **Review status:** `not-reviewed`

### Risk-control review

| Control | Complaint evidence | Review cue |
|---|---|---|
| Mask seal/cushion design | Leak persisted after headgear adjustment | Effectiveness cannot be determined from complaint alone |
| Cushion replacement information | Cushion was approximately six months old | Maintenance and replacement-instruction relevance review |

### Risk-file comparison

| Question | Result |
|---|---|
| Observed harm anticipated in risk file? | Yes — eye irritation/dryness candidate |
| Device problem anticipated? | Yes — mask seal leak |
| New sequence suggested? | No clear new sequence |
| Possible control concern? | Review requested; not concluded |
| Automatic risk-file change | Prohibited |

## Provenance

| Item | Value |
|---|---|
| Complaint source | Synthetic seed CPAP-001 |
| Build timestamp | ... |
| Coding pipeline version | ... |
| WHO ICD-11 release | ... |
| IMDRF release | 2026 |
| SNOMED CT edition | Not used |
| Human reviewer | Demo reviewer / not reviewed |

## Sources

- [WHO ICD-11](https://icd.who.int/)
- [IMDRF Adverse Event Terminology](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
```

### 12.3 Visual requirements

Use Quartz-compatible Markdown and callouts. Optional custom CSS may provide:

- Confidence badges
- Medical versus technical tag styling
- Evidence-highlight styling
- “Accepted,” “candidate,” and “unresolved” states
- Compact source cards
- Responsive tables
- A visible synthetic-data banner
- A prominent complaint-to-risk chain panel
- Bidirectional risk-item links
- Distinct badges for terminology confidence and risk-link confidence
- Risk-control review callouts

Do not use color alone to communicate status. Include text labels and icons or borders.

---

## 13. Aggregate index page specification

`content/index.md` is the project home page and tag index.

It must contain:

1. Demo purpose and disclaimer.
2. Summary metrics.
3. Linked list/table of 20 complaints.
4. Medical tag counts.
5. Technical tag counts.
6. Risk-item complaint counts and links to `risk-management.md`.
7. Risk-link and risk-review-state counts.
8. Complaints with possible risk-file coverage gaps or control concerns.
9. Terminology source register.
10. Methodology links or embedded short methodology.
11. Build metadata.

### 13.1 Complaint table

```markdown
| ID | Complaint | Main medical tags | Main technical tags | Primary risk item | Risk-link status |
|---|---|---|---|---|---|
| CPAP-001 | [[complaints/01-mask-leak-eye-irritation\|Mask leak and eye irritation]] | eye irritation | mask leak | [RISK-CPAP-006](risk-management.md#risk-cpap-006) | Proposed |
```

### 13.2 Tag-count table

```markdown
## Medical tags

| Tag | Complaint instances | Complaint pages |
|---|---:|---|
| `medical-cough` | 2 | [[complaints/10-rainout-coughing-event\|CPAP-010]], [[complaints/18-humidifier-contamination-and-cough\|CPAP-018]] |
```

Count one instance per complaint page, even if the phrase occurs more than once.

### 13.3 Source register

```markdown
## Terminology sources

| Terminology | Release/edition | Use in demo | Official source |
|---|---|---|---|
| WHO ICD-11 MMS | Pinned at build time | Primary clinical classification | [WHO ICD-11](https://icd.who.int/) |
| IMDRF AET | 2026 | Device problem, health effect, impact, component | [IMDRF terminology release](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes) |
| SNOMED CT | Edition recorded per selected concept | Human-reviewed fallback | [SNOMED International Browser](https://browser.ihtsdotools.org/) |
```

### 13.4 Summary metrics

At minimum:

- Total complaints: 20
- Complaints with at least one accepted ICD-11 code
- Complaints with at least one accepted IMDRF code
- Complaints requiring SNOMED CT review
- Total accepted codes
- Total candidates
- Total unresolved mentions
- High/good/plausible candidate distribution
- Medical tag count
- Technical tag count
- Complaints linked to each risk item
- Strong/good/plausible/weak risk-link distribution
- Possible control-concern count
- Possible coverage-gap count
- Risk items with repeated complaint observations
- Complaints with no risk link

Do not present these metrics as coding accuracy unless a gold-standard evaluation has been completed.

---

## 14. Structured data contract

The Markdown generator must consume a structured intermediate representation.

```ts
type Assertion =
  | "present"
  | "negated"
  | "suspected"
  | "historical"
  | "resolved"
  | "conditional"
  | "unclear";

type TerminologyName =
  | "WHO ICD-11 MMS"
  | "IMDRF AET"
  | "SNOMED CT";

interface ComplaintRecord {
  id: string;
  slug: string;
  title: string;
  deviceFamily: "CPAP";
  synthetic: true;
  narrative: string;
  generatedFromSeed: string;
  evidence: EvidenceMention[];
  followUpQuestions: string[];
  medicalTags: string[];
  technicalTags: string[];
  contextTags: string[];
  reviewTags: string[];
  riskLinks: RiskLink[];
  primaryRiskItemId: string | null;
  provenance: Provenance;
}

interface EvidenceMention {
  id: string;
  sourceText: string;
  sentence: string;
  start: number;
  end: number;
  normalizedText: string;
  entityType: string;
  assertion: Assertion;
  temporality: "current" | "historical" | "unknown";
  experiencer: "patient" | "user" | "caregiver" | "unknown";
  statedOrInferred: "stated" | "inferred";
  routingDecision: RoutingDecision;
  acceptedCode: CodeCandidate | null;
  candidates: CodeCandidate[];
  unresolvedReason?: string;
}

interface RoutingDecision {
  primaryTerminology: TerminologyName;
  rationale: string;
  snomedFallbackRequired: boolean;
}

interface CodeCandidate {
  terminology: TerminologyName;
  code: string;
  preferredTitle: string;
  annex?: "A" | "B" | "C" | "D" | "E" | "F" | "G";
  releaseOrEdition: string;
  sourceUrl: string;
  confidence: number;
  confidenceBand:
    | "strong"
    | "good"
    | "plausible"
    | "weak";
  rationale: string;
  status: "accepted" | "candidate" | "rejected" | "unresolved";
  humanVerified: boolean;
  queryUsed: string;
  sourceRecordHash?: string;
}

interface RiskLink {
  riskItemId: string;
  riskItemVersion: string;
  status: "proposed" | "confirmed" | "rejected" | "unresolved";
  classification:
    | "consistent-with-known-risk"
    | "variation-of-known-sequence"
    | "possible-new-device-problem"
    | "possible-new-hazardous-situation"
    | "possible-new-harm"
    | "possible-risk-control-concern"
    | "possible-risk-file-coverage-gap"
    | "insufficient-information"
    | "no-link-found";
  confidence: number;
  confidenceBand: "strong" | "good" | "plausible" | "weak";
  rationale: string;
  evidenceMentionIds: string[];
  matchedElements: RiskChainMatch[];
  unmatchedElements: string[];
  relevantControlIds: string[];
  controlReviewCues: ControlReviewCue[];
  reviewDisposition: RiskReviewDisposition;
  humanVerified: boolean;
}

interface RiskChainMatch {
  element:
    | "device-problem"
    | "component"
    | "sequence-of-events"
    | "hazardous-situation"
    | "harm"
    | "risk-control";
  complaintEvidence: string;
  riskFileText: string;
  matchScore: number;
}

interface ControlReviewCue {
  controlId: string;
  cue:
    | "relevant-effectiveness-unknown"
    | "may-not-have-operated-as-intended"
    | "may-not-have-been-used-or-maintained"
    | "possible-usability-or-information-concern"
    | "sequence-not-covered"
    | "no-control-evidence";
  rationale: string;
}

type RiskReviewDisposition =
  | "not-reviewed"
  | "link-confirmed"
  | "link-changed"
  | "new-risk-review-opened"
  | "risk-control-review-opened"
  | "insufficient-information"
  | "no-risk-file-change-needed";

interface Provenance {
  generatedAt: string;
  pipelineVersion: string;
  promptVersion: string;
  modelName: string;
  terminologyManifestHash: string;
  riskRegisterHash: string;
  reviewer: string | null;
  reviewTimestamp: string | null;
}
```

---

## 15. Twenty required synthetic complaints

The following narratives are deterministic demo seeds. The coding agent may make minor grammatical edits but must preserve the clinical and technical facts, ambiguity, and negation patterns.

## CPAP-001 — Mask leak and eye irritation

> The user reported that air began leaking from the upper edge of the full-face mask during the night and blowing toward both eyes. On waking, the eyes were red, dry, and burning. The user did not report loss of vision or seek emergency care. The mask cushion was about six months old, and tightening the headgear reduced but did not eliminate the leak. CPAP therapy continued throughout the night.

**Primary demo concepts:** eye irritation, dry-eye symptoms, mask leak, worn mask cushion, no vision loss, therapy continued.  
**Expected routes:** ICD-11 clinical candidates; IMDRF Annex A/E/G; no SNOMED fallback unless an eye-finding concept is materially more precise.  
**Suggested tags:** `medical-eye-irritation`, `medical-dry-eye-symptoms`, `technical-mask-leak`, `technical-mask-fit`.

## CPAP-002 — Nasal bridge pressure injury

> After using a newly fitted nasal mask for three nights, the patient developed a painful red area on the bridge of the nose. The next morning there was a small area of broken skin but no bleeding or drainage. The patient stopped using the mask and contacted the sleep clinic. A different mask was provided. No infection was diagnosed, and no antibiotics were given.

**Primary demo concepts:** painful skin lesion, broken skin, pressure-related injury candidate, explicit negation of infection, mask fit.  
**Expected routes:** ICD-11 injury/skin candidates; IMDRF Annex E/F/G; SNOMED fallback may be appropriate for a precise pressure-related skin finding.  
**Suggested tags:** `medical-pressure-injury`, `medical-skin-irritation`, `technical-mask-fit`, `technical-headgear`, `review-snomed-fallback`.

## CPAP-003 — Mask contact dermatitis

> The user developed an itchy red rash in the exact outline of the silicone mask cushion after approximately one week of use. The rash improved on nights when the device was not used and returned when the same mask was worn again. A pharmacist suggested a possible contact reaction, but no physician diagnosis or allergy testing was performed. The device delivered therapy normally.

**Primary demo concepts:** itchy rash, possible contact dermatitis, recurrence with exposure, no confirmed diagnosis, normal device operation.  
**Expected routes:** ICD-11 symptom/dermatitis candidates with `suspected` assertion; IMDRF Annex E/G; likely no accepted dermatitis diagnosis without human review.  
**Suggested tags:** `medical-skin-irritation`, `technical-mask-fit`, `technical-headgear`.

## CPAP-004 — Dry mouth and sore throat

> The patient reported waking with severe dry mouth and a sore throat after starting CPAP. The humidifier was set to level two, and the water chamber still contained water in the morning. The patient believed the mouth opened during sleep while using a nasal mask. There was no fever, cough, or difficulty swallowing. Increasing humidification improved the symptoms but did not fully resolve them.

**Primary demo concepts:** dry mouth, sore throat, mouth leak/use context, humidifier setting, negated fever and cough.  
**Expected routes:** ICD-11 clinical candidates; IMDRF Annex E; technical tags for humidifier and mask/use context.  
**Suggested tags:** `medical-dry-mouth`, `medical-sore-throat`, `technical-humidifier`, `technical-mask-fit`.

## CPAP-005 — Nasal dryness and epistaxis

> The user reported marked nasal dryness after several nights of CPAP and noticed a small amount of blood when blowing the nose in the morning. The bleeding stopped without treatment and did not recur later in the day. The humidifier chamber was empty by morning even though it had been filled to the indicated line. No dizziness, fainting, or heavy bleeding was reported.

**Primary demo concepts:** nasal dryness, minor nosebleed, humidifier water depletion, negated severe effects.  
**Expected routes:** ICD-11 clinical candidates; IMDRF Annex A/E/F and humidifier component.  
**Suggested tags:** `medical-nasal-dryness`, `medical-epistaxis`, `technical-humidifier`, `technical-water-leak`.

## CPAP-006 — Aerophagia and abdominal bloating

> The patient reported swallowing air during CPAP use and waking with abdominal bloating and frequent belching. The symptoms began after the prescribed pressure was increased at the clinic. There was no vomiting, severe abdominal pain, or emergency treatment. The patient temporarily reduced use because of discomfort and asked whether the pressure could be reviewed.

**Primary demo concepts:** aerophagia wording, abdominal bloating, belching, pressure increase, reduced adherence, negated severe symptoms.  
**Expected routes:** ICD-11 gastrointestinal symptom candidates; IMDRF Annex E/F and pressure-setting technical coding; SNOMED fallback may help represent aerophagia if ICD-11 is too broad.  
**Suggested tags:** `medical-abdominal-bloating`, `technical-pressure-setting`, `technical-pressure-too-high`, `review-snomed-fallback`.

## CPAP-007 — Low pressure, morning headache, and sleepiness

> The user stated that the CPAP display showed lower pressure than usual for two nights. During those nights the partner observed loud snoring, and the user woke with a morning headache and pronounced daytime sleepiness. The tubing appeared connected and the mask did not feel loose. No chest pain, shortness of breath, or loss of consciousness occurred. The device had not yet been inspected.

**Primary demo concepts:** morning headache, daytime somnolence, suspected insufficient therapy, low displayed pressure, no inspection conclusion.  
**Expected routes:** ICD-11 symptom candidates; IMDRF Annex A/E/F; do not diagnose recurrent sleep apnea or assign an investigation conclusion.  
**Suggested tags:** `medical-headache`, `medical-daytime-somnolence`, `technical-pressure-too-low`, `context-therapy-interruption`.

## CPAP-008 — High pressure and chest discomfort

> After a settings change, the patient reported that the airflow felt excessively forceful and caused pressure-like discomfort in the chest while awake. The discomfort stopped after removing the mask. The patient denied crushing chest pain, fainting, or persistent shortness of breath and did not seek emergency care. The displayed pressure was higher than the previous prescription, but the prescription record had not yet been checked.

**Primary demo concepts:** chest discomfort, excessive airflow, higher displayed pressure, symptom resolves when mask removed, uncertainty about prescription.  
**Expected routes:** ICD-11 symptom candidates; IMDRF Annex A/E/F; strong review warning because chest symptoms should not be overinterpreted or minimized.  
**Suggested tags:** `medical-chest-discomfort`, `technical-pressure-setting`, `technical-pressure-too-high`.

## CPAP-009 — Claustrophobia and panic symptoms

> The first time the patient used the full-face mask at home, the patient felt trapped, became very anxious, and removed the mask within several minutes. The patient described rapid breathing and a sensation of panic but did not lose consciousness or require medical care. The CPAP machine and mask were reported to function normally. The patient asked for a smaller interface and additional acclimatization support.

**Primary demo concepts:** anxiety, panic sensation, rapid breathing, intolerance/use context, normally functioning device.  
**Expected routes:** ICD-11 symptom candidates with caution against diagnosing panic disorder; IMDRF Annex E/F; potentially no Annex A device problem.  
**Suggested tags:** `medical-anxiety`, `medical-panic`, `technical-mask-fit`, `context-therapy-interruption`.

## CPAP-010 — Rainout and coughing event

> During the night, condensed water collected in the CPAP tubing and reached the mask. The patient awoke coughing and briefly felt as if water had entered the mouth. The patient removed the mask, sat up, and recovered within a few minutes. There was no vomiting, loss of consciousness, or medical treatment. The bedroom was cool, and the heated tube function had been turned off.

**Primary demo concepts:** coughing, brief choking sensation, tubing condensation, water reaching mask, environmental factor, no lasting harm.  
**Expected routes:** ICD-11 symptom candidates; IMDRF Annex A/E/F/G; avoid coding aspiration unless explicitly diagnosed.  
**Suggested tags:** `medical-cough`, `medical-choking-sensation`, `technical-condensation`, `technical-tubing`, `technical-humidifier`.

## CPAP-011 — Hot water spill and minor burn

> When the patient removed the humidifier chamber shortly after use, hot water leaked from the chamber and spilled onto the hand. The patient reported redness and burning pain lasting about one hour. The skin did not blister, and no medical treatment was obtained. Inspection by the user showed that the chamber lid did not appear fully closed, but the cause of the leak was not confirmed.

**Primary demo concepts:** minor thermal injury, hand redness and pain, hot water leak, humidifier chamber/lid, uncertain cause.  
**Expected routes:** ICD-11 injury candidates; IMDRF Annex A/E/F/G; no investigation conclusion.  
**Suggested tags:** `medical-burn`, `medical-skin-irritation`, `technical-humidifier`, `technical-water-leak`.

## CPAP-012 — Tubing disconnection and therapy interruption

> The patient woke during the night and found that the air tubing had disconnected from the device outlet. The machine continued running, but no airflow was reaching the mask. The patient reported poor sleep and increased daytime tiredness the next day. There was no fall, injury, or emergency care. The connector was reattached and appeared loose when gently pulled.

**Primary demo concepts:** tubing disconnection, complete therapy interruption, sleep disruption, daytime tiredness, explicit no injury.  
**Expected routes:** ICD-11 symptom candidates; IMDRF Annex A/E/F/G.  
**Suggested tags:** `medical-daytime-somnolence`, `medical-sleep-disruption`, `technical-tubing-disconnection`, `technical-therapy-interruption`.

## CPAP-013 — Power loss and shortness of breath

> A brief household power interruption stopped the CPAP machine during sleep. The patient awoke feeling short of breath and removed the mask. Breathing returned to the usual baseline after sitting upright, and no medical care was sought. The device restarted normally when power returned. The complaint did not indicate an internal device fault or a backup battery.

**Primary demo concepts:** transient shortness of breath, external power interruption, therapy interruption, normal restart, no internal-fault claim.  
**Expected routes:** ICD-11 symptom candidates; IMDRF Annex E/F; technical context tag for power loss, with careful handling of whether an Annex A malfunction is appropriate.  
**Suggested tags:** `medical-shortness-of-breath`, `technical-power-loss`, `technical-therapy-interruption`.

## CPAP-014 — Unexpected device restart

> The user reported that the CPAP machine restarted twice during one night without a household power outage. Each restart stopped airflow for less than one minute. The user woke once but reported no shortness of breath, injury, or need for medical care. The display showed a startup screen and then resumed the prescribed therapy. The device software version was not recorded in the complaint.

**Primary demo concepts:** unexpected restart, brief therapy interruption, explicit no symptoms or injury, missing software version.  
**Expected routes:** IMDRF Annex A/F; likely no accepted clinical ICD-11 code; demonstrate a technical complaint with a no-harm statement.  
**Suggested tags:** `medical-no-injury-reported`, `technical-device-restart`, `technical-therapy-interruption`.

## CPAP-015 — Inaudible alarm

> The caregiver stated that the mask became disconnected from the tubing, but the expected disconnect alarm was not heard from the next room. The patient continued sleeping and later reported a headache on waking. No oxygen saturation measurement was available, and no medical treatment was sought. The alarm volume setting and whether an alarm icon appeared on the display were not documented.

**Primary demo concepts:** inaudible or absent alarm, tubing disconnection, morning headache, missing device settings and objective data.  
**Expected routes:** ICD-11 symptom candidates; IMDRF Annex A/E/F/G; do not infer hypoxemia.  
**Suggested tags:** `medical-headache`, `technical-alarm-inaudible`, `technical-tubing-disconnection`, `technical-therapy-interruption`.

## CPAP-016 — Pressure change after software update

> Following a software update, the user stated that the machine felt different and displayed a pressure range that did not match the range remembered from the prior week. The user experienced difficulty exhaling and stopped therapy after approximately twenty minutes. There was no chest pain, fainting, or medical treatment. The clinic prescription and pre-update settings were not available for comparison.

**Primary demo concepts:** software update, suspected settings change, difficulty exhaling, therapy stopped, lack of reference settings.  
**Expected routes:** ICD-11 symptom candidate if defensible; IMDRF Annex A/E/F; no conclusion that software caused the change.  
**Suggested tags:** `technical-firmware-update`, `technical-pressure-setting`, `technical-therapy-interruption`, `medical-shortness-of-breath`.

## CPAP-017 — Blocked filter and respiratory irritation

> The patient reported an unusual dusty smell from the CPAP and developed throat irritation and coughing during use. On inspection, the disposable air filter was dark and visibly clogged. Symptoms improved after stopping the device and replacing the filter. The patient had no fever, wheezing, or medical evaluation. The device had been used longer than the recommended filter-replacement interval.

**Primary demo concepts:** throat irritation, cough, odor, clogged filter, maintenance interval, symptom improvement after replacement, negated fever/wheezing.  
**Expected routes:** ICD-11 clinical candidates; IMDRF Annex A/E/F/G; distinguish maintenance context from confirmed device defect.  
**Suggested tags:** `medical-respiratory-irritation`, `medical-cough`, `technical-filter-blockage`.

## CPAP-018 — Humidifier contamination and cough

> The user noticed dark material inside a humidifier chamber that had not been cleaned for several weeks. The user also reported a new cough occurring mainly during CPAP use. No laboratory testing was performed, and the material was not confirmed to be mold or another organism. There was no fever, pneumonia diagnosis, or hospitalization. The chamber was replaced and the device was cleaned.

**Primary demo concepts:** cough, visible contamination, unconfirmed mold, humidifier chamber, explicit negation of pneumonia and hospitalization.  
**Expected routes:** ICD-11 cough candidate; IMDRF Annex A/E/F/G; never code fungal infection or pneumonia.  
**Suggested tags:** `medical-cough`, `technical-contamination`, `technical-humidifier`.

## CPAP-019 — Excessive noise and insomnia

> The user reported a new high-pitched noise from the CPAP motor that became louder when inhaling. The noise repeatedly woke the user and resulted in difficulty returning to sleep. The user felt tired the next day but reported no breathing difficulty or other physical symptoms. Therapy appeared to continue, and the displayed pressure remained within the prescribed range.

**Primary demo concepts:** excessive noise, sleep disruption, insomnia symptoms, tiredness, therapy continued, normal displayed pressure.  
**Expected routes:** ICD-11 sleep symptom candidates; IMDRF Annex A/E/F/G as appropriate.  
**Suggested tags:** `medical-insomnia`, `medical-sleep-disruption`, `medical-daytime-somnolence`, `technical-noise`.

## CPAP-020 — Headgear strap break with no injury

> While the patient was putting on the mask, one of the headgear straps tore near the attachment point. The mask could not be secured and CPAP therapy was not started that night. The patient explicitly reported no facial injury, pain, or other symptoms. The headgear had been used daily for approximately one year and showed visible wear.

**Primary demo concepts:** strap break, worn component, therapy not started, explicit no injury.  
**Expected routes:** IMDRF Annex A/F/G; no accepted ICD-11 clinical code.  
**Suggested tags:** `medical-no-injury-reported`, `technical-strap-break`, `technical-headgear`, `technical-therapy-interruption`.

---

## 16. Attractive Quartz presentation features

## 16.1 Complaint-to-risk chain visualization

This must be the most prominent visual element after the complaint narrative.

Use a responsive sequence such as:

```text
Mask leak [IMDRF A]
  → airflow toward eyes
  → ocular exposure [risk hazardous situation]
  → eye irritation [ICD-11 / IMDRF E]
  → RISK-CPAP-006
  → controls: seal design + replacement instructions
```

Requirements:

- Every node links to the supporting evidence or risk-file section.
- Matched elements are labelled “matched”; inferred or absent elements are labelled “uncertain” or “not stated.”
- Coding confidence and risk-link confidence are shown separately.
- The visualization remains understandable as plain text when CSS is unavailable.

## 16.2 Bidirectional risk register

Each complaint links to its primary and secondary risk candidates. Each risk item lists and links all contributing complaints.

The risk page should make these review queues immediately visible:

- Possible new risk or coverage gap
- Possible risk-control concern
- Variation of known sequence
- Insufficient information
- Repeated observations under the same risk item

## 16.3 Homepage metrics

Use compact cards for:

- 20 synthetic complaints
- Percentage with clinical codes
- Percentage with device-problem codes
- Number requiring human terminology selection
- Number requiring human risk-link review
- Most frequent medical tag
- Most frequent technical tag
- Most frequently linked risk item
- Possible control-concern count
- Possible coverage-gap count

## 16.4 Confidence visualization

Use text and a small badge:

- `0.94 · Strong terminology match`
- `0.84 · Good terminology match`
- `0.92 · Strong risk link`
- `0.68 · Plausible risk candidate`

Do not render coding confidence as a clinical risk score or combine it with risk severity.

## 16.5 Evidence-to-code-to-risk traceability

Use blockquotes or highlighted spans so a reviewer can visually connect:

```text
“air began leaking ... toward both eyes”
      ├── IMDRF device problem candidate
      ├── medical eye-irritation evidence
      └── RISK-CPAP-006 chain match
```

## 16.6 Risk-control review panel

Show risk controls beside the relevant complaint evidence, including:

- Control ID and type
- Risk-file wording
- Complaint evidence relevant to the control
- Non-conclusive review cue
- Human disposition

The panel must never autonomously say “control failed.”

## 16.7 Alternatives and abstention

Make unresolved records visually valuable:

> [!question] Human selection required
> ICD-11 provides two plausible symptom categories, and two risk items match different parts of the sequence. The complaint lacks the detail needed to select safely.

## 16.8 Terminology-source and risk-source buttons

Each accepted code and candidate should have an “Open official source” link. Each risk link should have an “Open risk item” link and show the risk-register version/hash.

## 16.9 Related complaints

At the bottom of each page, link up to three related complaints based on shared risk items first, then shared tags:

```markdown
## Related complaints

- [[10-rainout-coughing-event|Rainout and coughing event]] — shared risk `RISK-CPAP-007`
- [[18-humidifier-contamination-and-cough|Humidifier contamination and cough]] — shared risk `RISK-CPAP-007`
```

## 16.10 Regulatory and risk-review cues

Display non-conclusive cues:

- Patient effect present
- Therapy interrupted
- Medical treatment mentioned
- Potentially serious symptom mentioned
- Device problem without reported injury
- Important information missing
- Human medical review recommended
- Existing risk-chain match proposed
- Possible variation of known sequence
- Possible risk-control concern
- Possible risk-file coverage gap
- Exposure denominator unavailable

Never display “reportable,” “not reportable,” “risk acceptable,” or “risk unacceptable.”

## 16.11 Diff-friendly generation

Sort:

- Evidence mentions by source offset
- Accepted codes by evidence order
- Candidates by descending score, then code
- Risk links by descending score, then risk item ID
- Risk-chain matches in chain order
- Controls by control ID
- Tags alphabetically
- Source records by terminology

Avoid timestamps in page bodies when deterministic diffs are important; place volatile timestamps in a separate build manifest or allow a `DETERMINISTIC_BUILD=true` mode.

---

## 17. Source-link rules

### WHO ICD-11

Prefer the official entity or linearization URI returned by the API. Also provide a general WHO ICD-11 source link in the page’s source section.

### IMDRF

Link to the official IMDRF terminology release page and record:

- Release number
- Annex
- Code
- Local file checksum

If an official stable browser link for an individual code is available, include it as an additional link.

### SNOMED CT

Record the exact browser page or search result URL used by the human reviewer, plus:

- Concept identifier
- Fully specified name
- Preferred term
- Edition
- Effective date
- Reviewer
- Verification date

### Link integrity

The validator must:

- Reject missing source URLs for accepted codes.
- Check internal Markdown links.
- Optionally perform external HEAD/GET link checks in CI with retry and allowlist logic.
- Avoid failing a production build solely because an official external site temporarily rejects automated link checking; report this separately.

---

## 18. Architecture

## 18.1 Build-time components

### A. Synthetic complaint loader

Loads the 20 fixed complaint seeds and validates IDs, slugs, and synthetic markers.

### B. Evidence extractor

Produces structured mentions and context. It may use an LLM, deterministic rules, or both.

The extractor prompt must explicitly require:

- Exact evidence spans
- No unsupported diagnoses
- Negation and uncertainty
- Separate device and patient concepts
- JSON schema compliance
- No terminology codes at this stage

### C. Terminology router

Chooses ICD-11, IMDRF annex, or SNOMED review based on entity type and context.

### D. WHO ICD client

Handles:

- OAuth token acquisition
- API-Version header
- Pinned release
- English search
- MMS selection
- Response caching
- Retries and rate limits
- Stable source URI capture

### E. IMDRF local search service

Supports:

```ts
searchImdrf(query, annex, limit)
lookupImdrf(code, release)
childrenOf(code)
validateImdrfCode(code, release)
```

Search may combine:

- Exact normalized term match
- Token overlap
- Synonym/alias table maintained separately from official terminology
- Conservative fuzzy matching
- Hierarchy-aware reranking

Aliases must never overwrite or be presented as official IMDRF terms.

### F. SNOMED review queue generator

Generates a Markdown or JSON review queue with:

- Complaint ID
- Source phrase
- Proposed search phrase
- Reason ICD-11 was insufficient
- Link to official browser
- Empty fields for concept selection

### G. Confidence engine

Calculates deterministic score components and records the breakdown for debugging.

### H. Markdown renderer

Renders the required page template without executing untrusted HTML from complaint text.

### I. Risk-register loader

Loads and validates the synthetic CPAP risk register, control IDs, terminology references, version, and source hash.

### J. Risk-linker

Retrieves candidate risk items and produces transparent chain-level match scores, classifications, control-review cues, and abstention states. It must not update the risk register.

### K. Tag aggregator

Counts distinct complaint pages per tag and creates linked tag tables.

### L. Risk-page builder

Creates `content/risk-management.md`, reverse complaint links, risk-item counts, review queues, and risk-file provenance.

### M. Validator

Runs schema, terminology, page-content, and link checks.

## 18.2 Static publication boundary

The Quartz site must contain:

- Markdown
- Static assets
- Optional safe CSS
- Generated links and metadata
- The synthetic risk-management page and bidirectional complaint links

It must not contain:

- WHO client secret
- OAuth access token
- Private complaint data
- Model API key
- Unlicensed bulk SNOMED CT content
- A real manufacturer's proprietary risk file
- An API that automatically modifies approved risk records
- A public endpoint that proxies terminology credentials

---

## 19. Suggested repository layout

```text
.
├── content/
│   ├── index.md
│   ├── risk-management.md
│   └── complaints/
├── data/
│   ├── complaints.seed.json
│   ├── coding-results.json
│   ├── risk-links.json
│   ├── terminology-manifest.json
│   ├── risk-management/
│   │   └── cpap-risk-register.json
│   └── imdrf/2026/
├── review/
│   ├── snomed-review-queue.md
│   └── risk-review-queue.md
├── scripts/
│   ├── import-imdrf.ts
│   ├── extract-evidence.ts
│   ├── query-icd11.ts
│   ├── search-imdrf.ts
│   ├── rank-candidates.ts
│   ├── load-risk-register.ts
│   ├── link-risk-items.ts
│   ├── render-markdown.ts
│   ├── build-tag-index.ts
│   ├── build-risk-page.ts
│   └── validate-output.ts
├── tests/
│   ├── fixtures/
│   ├── terminology.test.ts
│   ├── confidence.test.ts
│   ├── risk-linking.test.ts
│   ├── risk-control-cues.test.ts
│   ├── markdown.test.ts
│   └── tag-counts.test.ts
├── quartz.config.ts
├── quartz.layout.ts
├── package.json
└── README.md
```

---

## 20. Configuration file

Suggested `demo.config.json`:

```json
{
  "deviceFamily": "CPAP",
  "language": "en",
  "complaintCount": 20,
  "terminologies": {
    "icd11": {
      "enabled": true,
      "linearization": "mms",
      "release": "PIN_REQUIRED",
      "language": "en",
      "minimumAcceptedConfidence": 0.8
    },
    "imdrf": {
      "enabled": true,
      "release": "2026",
      "annexes": ["A", "B", "C", "D", "E", "F", "G"]
    },
    "snomedCt": {
      "enabled": true,
      "mode": "human-reviewed-web-fallback",
      "automaticApiAccess": false
    }
  },
  "riskManagement": {
    "enabled": true,
    "registerPath": "data/risk-management/cpap-risk-register.json",
    "minimumAcceptedLinkConfidence": 0.85,
    "maximumCandidates": 3,
    "automaticRiskFileUpdates": false,
    "requireHumanReview": true,
    "requireExposureDenominatorForOccurrenceAssessment": true
  },
  "rendering": {
    "target": "quartz",
    "contentDirectory": "content",
    "deterministicBuild": true,
    "includeRelatedComplaints": true,
    "includeRiskManagementPage": true,
    "relatedComplaintPriority": "shared-risk-item"
  }
}
```

---

## 21. Failure and fallback behavior

| Failure | Required behavior |
|---|---|
| WHO authentication fails | Use valid cache if available; otherwise publish unresolved ICD task, never fabricate a code |
| WHO search returns no result | Publish `No defensible ICD-11 candidate`; consider SNOMED review |
| IMDRF source missing | Fail the build |
| IMDRF code not in pinned release | Fail the build |
| SNOMED review incomplete | Publish unresolved fallback with no concept ID |
| Evidence extractor returns invalid JSON | Retry once with schema repair; then fail that complaint and report |
| Negated term receives accepted code | Fail validation |
| Tag count differs from page scan | Fail validation |
| Risk register missing or invalid | Fail the build |
| Risk link references unknown risk/control ID | Fail validation |
| No defensible risk link | Publish `no-link-found` or unresolved candidates; never invent a risk item |
| Risk-linker proposes automatic severity/probability change | Fail validation |
| Complaint count is presented as occurrence probability without denominator | Fail validation |
| Reverse complaint/risk link missing | Fail validation |
| External source temporarily unavailable | Preserve source URL and report link-check warning |
| One complaint contains real-looking identifiers | Fail privacy validation |

---

## 22. Validation rules

The CI validator must prove:

### Output completeness

- Exactly 20 complaint pages exist.
- Exactly one `content/index.md` exists.
- Exactly one `content/risk-management.md` exists.
- Complaint IDs CPAP-001 through CPAP-020 are unique and complete.
- Every complaint page contains all required headings.
- Every page states that the complaint is synthetic.

### Coding integrity

- Every accepted ICD-11 code validates against the pinned WHO response cache.
- Every accepted IMDRF code exists in the pinned local release.
- Every accepted SNOMED CT code has `humanVerified: true`.
- Every accepted code has evidence, confidence, rationale, release, and source URL.
- Negated conditions are never accepted or medically tagged.
- Candidate confidence values are within `0.00–0.99`.
- Candidate lists contain no duplicate code within one evidence mention.

### Risk-link integrity

- Every complaint has at least one risk-link candidate or an explicit `no-link-found` result.
- Every accepted risk link references an existing risk item and version.
- Every control review cue references a control belonging to the linked risk item.
- Every risk link names the evidence mentions used in matching.
- Terminology confidence and risk-link confidence are stored separately.
- Risk links are bidirectional: complaint → risk item and risk item → complaint.
- The expected seed mapping in Section 11.10 passes for all 20 complaints.
- No generated output changes severity, occurrence, acceptability, residual-risk, or benefit-risk fields.
- Counts are never labelled as probability or frequency without an approved denominator.
- Possible new harm or coverage-gap classifications create a human review queue.

### Tag integrity

- All tags use lower-case kebab-case.
- Medical and technical tags are separately displayed.
- Aggregate counts equal a fresh scan of complaint frontmatter/body data.
- Risk-item complaint counts equal a fresh scan of structured risk links.
- Every index link resolves to an existing complaint page.
- Candidate-only concepts do not become medical tags.

### Quartz compatibility

- Markdown parses as GitHub-Flavored Markdown.
- YAML frontmatter parses.
- Wikilinks or standard Markdown links resolve under Quartz.
- `npx quartz build` succeeds.
- No raw complaint content is interpreted as executable HTML.

### Privacy and safety

- All records contain `synthetic: true`.
- No names, addresses, phone numbers, emails, medical-record numbers, serial numbers, or real dates of birth.
- No reportability, causality, or diagnosis claims are generated.
- No production secrets appear in `content/` or Git history.
- The risk register is marked synthetic and contains no proprietary manufacturer information.

---

## 23. Acceptance criteria

The implementation is accepted when:

1. A clean checkout can generate all 22 Markdown pages with one documented command.
2. The 20 complaint narratives match the required seeds.
3. Each complaint page contains evidence spans, accepted codes or explicit abstention, candidates, confidence, medical tags, technical tags, and a risk-management linkage panel.
4. ICD-11 codes are backed by cached official WHO API results.
5. IMDRF codes are validated against the local pinned official release.
6. SNOMED CT is used only through a documented human-reviewed fallback.
7. Each complaint has a primary risk link or an explicit defensible abstention.
8. Each risk link identifies supporting evidence, matched chain elements, unmatched elements, confidence, classification, controls, and review state.
9. `risk-management.md` lists all ten required CPAP risk items and reverse-links every contributing complaint.
10. The index page reports correct per-tag and per-risk-item complaint counts with links.
11. Quartz builds successfully and the GitHub Pages output is navigable.
12. A reviewer can trace every accepted code to source text and an official terminology source.
13. A reviewer can trace every accepted risk link from complaint evidence to risk chain and relevant controls.
14. At least three cases demonstrate terminology abstention, risk-link ambiguity, or unresolved information.
15. At least two cases demonstrate explicit negation handling.
16. At least two cases demonstrate no-harm technical complaints.
17. At least one case demonstrates a SNOMED CT fallback.
18. At least two cases demonstrate a possible risk-control review cue.
19. At least one case demonstrates a variation-of-known-sequence or possible coverage-gap review.
20. No page presents a reportability, causality, risk-acceptability, severity-change, occurrence-change, or benefit-risk conclusion.

---

## 24. Evaluation plan

Create a small gold-standard review file completed by a qualified reviewer:

```json
{
  "complaintId": "CPAP-001",
  "mentionId": "M1",
  "goldEntityType": "clinical_sign_or_symptom",
  "goldAssertion": "present",
  "acceptableCodes": ["..."],
  "unacceptableCodes": ["..."],
  "reviewerComment": "..."
}
```

Measure separately:

- Evidence-span precision and recall
- Assertion accuracy
- Terminology-routing accuracy
- Accepted-code precision
- Candidate recall at top 3
- Unsupported-diagnosis rate
- IMDRF annex-selection accuracy
- Tag accuracy
- Risk-item retrieval recall at top 3
- Primary risk-link accuracy
- Risk-chain element match accuracy
- Risk-link classification accuracy
- Risk-control cue precision
- Coverage-gap cue precision
- Bidirectional-link completeness
- Abstention appropriateness

Do not combine these into one opaque “AI accuracy” number.

---

## 25. Implementation sequence

### Phase 1 — Static corpus, risk register, and rendering

- Add the 20 complaint seeds.
- Add the ten synthetic CPAP risk items and controls.
- Implement schemas.
- Render uncoded complaint pages, index, and risk-management page.
- Configure Quartz.
- Validate internal and bidirectional links.

### Phase 2 — Local IMDRF terminology

- Download official pinned files.
- Create manifest and checksums.
- Implement import, search, and validation.
- Code technical device concepts.

### Phase 3 — WHO ICD-11

- Add backend/build-time OAuth client.
- Pin release.
- Cache search results.
- Add clinical candidate ranking and source links.

### Phase 4 — Evidence extraction and terminology confidence

- Add structured extractor.
- Add assertion handling.
- Add deterministic coding-confidence breakdown.
- Add abstention.

### Phase 5 — Risk linking and control review cues

- Implement risk-item retrieval.
- Implement chain-element matching and independent risk-link confidence.
- Add expected seed mappings.
- Generate control-review cues and risk-review queue.
- Render bidirectional complaint/risk links.
- Prohibit autonomous changes to risk-file decision fields.

### Phase 6 — SNOMED CT review fallback

- Generate review queue.
- Add reviewer-selected concept fields.
- Render verified concepts and unresolved tasks.

### Phase 7 — Polish and evaluation

- Add complaint-to-risk chain visualization.
- Add confidence badges and callouts.
- Add related complaint links prioritizing shared risk items.
- Add gold-standard fixtures.
- Add CI and GitHub Pages deployment.

---

## 26. Official source register

The coding agent should verify current documentation before implementation and pin exact releases in `terminology-manifest.json`.

- [WHO ICD API documentation](https://icd.who.int/docs/icd-api/)
- [WHO ICD API version 2 overview](https://icd.who.int/docs/icd-api/APIDoc-Version2/)
- [WHO Embedded Coding Tool documentation](https://icd.who.int/docs/icd-api/icd11ect-1.7/EmbeddedCodingTool/)
- [WHO ICD-11 licensing information](https://icd.who.int/docs/icd-api/license/)
- [IMDRF Adverse Event Terminology release page](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- [IMDRF Adverse Event Terminology working group](https://www.imdrf.org/working-groups/adverse-event-terminology)
- [SNOMED CT Browser guide](https://docs.snomed.org/snomed-ct-user-guides/snomed-ct-browser-guide)
- [SNOMED International Browser](https://browser.ihtsdotools.org/)
- [ISO 14971:2019 — Medical devices — Application of risk management to medical devices](https://www.iso.org/standard/72704.html)
- [ISO/TR 24971:2020 — Guidance on the application of ISO 14971](https://www.iso.org/standard/74437.html)
- [EU Medical Device Regulation (EU) 2017/745](https://eur-lex.europa.eu/eli/reg/2017/745/oj)
- [MDCG 2025-10 — Guidance on post-market surveillance](https://health.ec.europa.eu/latest-updates/mdcg-2025-10-guidance-post-market-surveillance-medical-devices-and-vitro-diagnostic-medical-devices-2025-12-19_en)
- [Quartz authoring documentation](https://quartz.jzhao.xyz/getting-started/authoring-content)
- [Quartz frontmatter documentation](https://quartz.jzhao.xyz/plugins/frontmatter)

---

## 27. Final coding-agent instruction

Implement the specification conservatively.

When information is absent, publish uncertainty.  
When a terminology result is ambiguous, rank candidates.  
When no code is defensible, abstain.  
When a device problem and a clinical effect coexist, code them separately.  
When SNOMED CT is needed, require human verification.  
When coded complaint evidence matches a risk chain, show the match and its limits.  
When no risk item fits, create a review cue instead of inventing a risk record.  
Never change severity, probability, acceptability, residual risk, or benefit-risk conclusions automatically.  
Never invent a terminology code, medical diagnosis, investigation result, risk-file fact, or regulatory conclusion.
