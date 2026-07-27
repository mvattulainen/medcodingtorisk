---
title: "Complaint 003 — Mask Contact Dermatitis"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-skin-irritation
  - technical-headgear
  - technical-mask-fit
  - review-snomed-fallback
complaint_id: "CPAP-003"
device_family: "CPAP"
synthetic: true
coding_status: "reviewed-demo"
icd11_release: "2026-01"
imdrf_release: "2026"
snomed_ct_used: false
primary_risk_item: "RISK-CPAP-005"
risk_link_status: "proposed"
risk_review_status: "not-reviewed"
quartz-properties: false
---

# Complaint 003 — Mask Contact Dermatitis

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> The user developed an itchy red rash in the exact outline of the silicone mask cushion after approximately one week of use. The rash improved on nights when the device was not used and returned when the same mask was worn again. A pharmacist suggested a possible contact reaction, but no physician diagnosis or allergy testing was performed. The device delivered therapy normally.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 3 |
| Accepted codes | 2 |
| Candidate codes | 1 |
| SNOMED CT fallback | Human review queued |
| Proposed risk links | 1 |
| Primary risk-link confidence | 0.87 · Good |
| Risk-control review cues | 2 |
| Human-review flags | 1 |

## Complaint-to-risk chain

<div class="trace-chain">
<a class="trace-node uncertain" href="#evidence-spans"><b>Initiating event</b><span>Partly stated</span></a>
<a class="trace-node matched" href="#risk-management-linkage"><b>Local pressure, friction, or material exposure persists</b><span>Matched sequence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-005"><b>Facial skin is exposed to sustained contact during therapy</b><span>Matched hazardous situation</span></a>
<a class="trace-node matched" href="#accepted-coded-terms"><b>rash at mask contact area</b><span>Matched health evidence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-005"><b>RISK-CPAP-005</b><span>0.87 · Good risk link</span></a>
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “itchy red rash in the exact outline of the silicone mask cushion” | clinical_sign_or_symptom | present | rash at mask contact area | WHO ICD-11 / IMDRF E |
| “possible contact reaction” | clinical_condition | suspected | possible contact dermatitis | WHO ICD-11 / IMDRF E |
| “silicone mask cushion” | device_component | present | mask | IMDRF G |

## Accepted coded terms

### Rash, unspecified

- **Evidence:** “itchy red rash in the exact outline of the silicone mask cushion”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `ME66.6Z`
- **Preferred title:** Rash, unspecified
- **Confidence:** <span class="confidence strong">0.90 · Strong terminology match</span>
- **Why selected:** Rash is explicit; the unspecified rash code avoids asserting a cause.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/1672472938/unspecified)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Mask

- **Evidence:** “silicone mask cushion”
- **Terminology:** IMDRF AET, Annex G
- **Code:** `G04086`
- **Preferred title:** Mask
- **Confidence:** <span class="confidence strong">0.92 · Strong terminology match</span>
- **Why selected:** The mask is the explicitly stated contact component.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending


## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
| “possible contact reaction” | Contact Dermatitis | IMDRF AET E | `E172003` | 0.70 · Plausible | The term is clinically plausible but remains suspected without physician diagnosis or testing. |

> [!question] Human selection may be required
> Candidate terms remain unaccepted until a qualified reviewer confirms that the available evidence supports them.

## Uncoded or ambiguous statements

- **“possible contact reaction”** — Human selection required: contact dermatitis is suggested, not diagnosed.

## Follow-up questions

1. Did a clinician assess the rash?
2. Were cleaning products or mask liners changed?
3. Did symptoms recur with a different mask material?

## Tags

### Medical

<span class="tag-medical">medical-skin-irritation</span>

### Technical

<span class="tag-technical">technical-headgear</span> <span class="tag-technical">technical-mask-fit</span>

## Regulatory review cues

- Patient effect present
- Possible variation of known sequence
- Human medical review recommended
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-005 — Mask or Headgear Contact Injury](../risk-management.md#risk-cpap-005)
- **Classification:** `variation-of-known-sequence`
- **Link confidence:** <span class="confidence good">0.87 · Good risk link</span>
- **Evidence used:** “itchy red rash in the exact outline of the silicone mask cushion”; “possible contact reaction”; “silicone mask cushion”
- **Matched chain:** component → sequence-of-events → hazardous-situation → harm
- **Unmatched or uncertain elements:** A material-specific reaction has not been confirmed.
- **Why linked:** The location and recurrence support mask-contact skin irritation while causation remains unconfirmed.
- **Review status:** `not-reviewed`
- **Risk-file version:** 1.0; source hash `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Secondary risk candidates

- No secondary risk candidate above the publication threshold.

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
| [RC-CPAP-005-01](../risk-management.md#risk-cpap-005) | inherent-safety | Biocompatible patient-contact materials and pressure-distributing cushion design | Material selection and cleaning information are relevant; the complaint cannot establish their effectiveness. |
| [RC-CPAP-005-03](../risk-management.md#risk-cpap-005) | information-for-safety | Cleaning, skin-monitoring, and alternate-interface guidance | Material selection and cleaning information are relevant; the complaint cannot establish their effectiveness. |

> [!question] Human risk-management review
> These are review cues only. The system does not claim that a control failed, determine whether residual risk changed, or modify the synthetic risk register.

### Risk-file comparison

| Question | Result |
|---|---|
| Observed harm anticipated in risk file? | Yes — matched health-effect evidence |
| Device problem anticipated? | Not fully matched |
| New sequence suggested? | Possible — human review requested |
| Possible control concern? | Review requested; not concluded |
| Automatic risk-file change | Prohibited |

## Provenance

| Item | Value |
|---|---|
| Complaint source | Synthetic seed CPAP-003 |
| Deterministic build timestamp | 2026-07-27T00:00:00.000Z |
| Coding pipeline version | 1.1.0 |
| WHO ICD-11 release | 2026-01 |
| IMDRF release | 2026 |
| Terminology manifest hash | `sha256:dc657c76eac9dd9d8ff3c57a5351f69bb84221b2529acc5402930f17925281f5` |
| Risk register hash | `sha256:91c080f7321d18ef9cc33b2d2e49fee88b433a51b614735f8be020c062e5b808` |
| SNOMED CT edition | Unresolved human-review task; no concept selected |
| Human reviewer | Not reviewed |

## Sources

- [WHO ICD-11](https://icd.who.int/)
- [WHO ICD API documentation](https://icd.who.int/docs/icd-api/)
- [IMDRF Adverse Event Terminology](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- [SNOMED International Browser](https://browser.ihtsdotools.org/)
- [Synthetic risk register](../risk-management.md#risk-cpap-005)

## Related complaints

- [CPAP-002 — Nasal Bridge Pressure Injury](02-nasal-bridge-pressure-injury.md) — shared primary risk `RISK-CPAP-005`
- [CPAP-001 — Mask Leak and Eye Irritation](01-mask-leak-eye-irritation.md) — shared `technical-mask-fit`
- [CPAP-004 — Dry Mouth and Sore Throat](04-dry-mouth-and-throat.md) — shared `technical-mask-fit`
