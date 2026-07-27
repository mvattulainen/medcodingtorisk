---
title: "Complaint 001 — Mask Leak and Eye Irritation"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-dry-eye-symptoms
  - medical-eye-irritation
  - technical-mask-fit
  - technical-mask-leak
complaint_id: "CPAP-001"
device_family: "CPAP"
synthetic: true
coding_status: "reviewed-demo"
icd11_release: "2026-01"
imdrf_release: "2026"
snomed_ct_used: false
primary_risk_item: "RISK-CPAP-006"
risk_link_status: "proposed"
risk_review_status: "not-reviewed"
quartz-properties: false
---

# Complaint 001 — Mask Leak and Eye Irritation

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> The user reported that air began leaking from the upper edge of the full-face mask during the night and blowing toward both eyes. On waking, the eyes were red, dry, and burning. The user did not report loss of vision or seek emergency care. The mask cushion was about six months old, and tightening the headgear reduced but did not eliminate the leak. CPAP therapy continued throughout the night.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 4 |
| Accepted codes | 3 |
| Candidate codes | 1 |
| SNOMED CT fallback | No |
| Proposed risk links | 2 |
| Primary risk-link confidence | 0.94 · Strong |
| Risk-control review cues | 2 |
| Human-review flags | 1 |

## Complaint-to-risk chain

<div class="trace-chain">
<a class="trace-node matched" href="#evidence-spans"><b>mask gas or air leak</b><span>Matched device evidence</span></a>
<a class="trace-node matched" href="#risk-management-linkage"><b>Leak is directed upward from the mask</b><span>Matched sequence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-006"><b>User eyes are exposed to continuous airflow during therapy</b><span>Matched hazardous situation</span></a>
<a class="trace-node matched" href="#accepted-coded-terms"><b>eye irritation and dry-eye symptoms</b><span>Matched health evidence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-006"><b>RISK-CPAP-006</b><span>0.94 · Strong risk link</span></a>
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “air began leaking from the upper edge of the full-face mask” | device_problem | present | mask gas or air leak | IMDRF A |
| “eyes were red, dry, and burning” | clinical_sign_or_symptom | present | eye irritation and dry-eye symptoms | WHO ICD-11 / IMDRF E |
| “did not report loss of vision” | clinical_sign_or_symptom | negated | loss of vision | WHO ICD-11 / IMDRF E |
| “mask cushion was about six months old” | device_component | present | aged mask cushion | IMDRF G |

## Accepted coded terms

### Gas/Air Leak

- **Evidence:** “air began leaking from the upper edge of the full-face mask”
- **Terminology:** IMDRF AET, Annex A
- **Code:** `A050402`
- **Preferred title:** Gas/Air Leak
- **Confidence:** <span class="confidence strong">0.96 · Strong terminology match</span>
- **Why selected:** The narrative explicitly describes unintended air leakage from the mask.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Eye Irritation

- **Evidence:** “eyes were red, dry, and burning”
- **Terminology:** IMDRF AET, Annex E
- **Code:** `E0845`
- **Preferred title:** Eye Irritation
- **Confidence:** <span class="confidence strong">0.94 · Strong terminology match</span>
- **Why selected:** Eye irritation directly represents the combined redness and burning; ICD-11 search results were not defensible.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Mask

- **Evidence:** “mask cushion was about six months old”
- **Terminology:** IMDRF AET, Annex G
- **Code:** `G04086`
- **Preferred title:** Mask
- **Confidence:** <span class="confidence good">0.88 · Good terminology match</span>
- **Why selected:** The official Mask component is the closest selectable component term.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending


## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
| “eyes were red, dry, and burning” | Dry Eye(s) | IMDRF AET E | `E0815` | 0.78 · Plausible | Dry eye is explicitly described but covers only part of the evidence span. |

> [!question] Human selection may be required
> Candidate terms remain unaccepted until a qualified reviewer confirms that the available evidence supports them.

## Uncoded or ambiguous statements

- **“did not report loss of vision”** — Negated statements are displayed but cannot receive an accepted clinical code.

## Follow-up questions

1. Did the eye symptoms require medical treatment?
2. Was the mask cushion replaced or refitted?
3. Was leak performance checked after replacement?

## Tags

### Medical

<span class="tag-medical">medical-dry-eye-symptoms</span> <span class="tag-medical">medical-eye-irritation</span>

### Technical

<span class="tag-technical">technical-mask-fit</span> <span class="tag-technical">technical-mask-leak</span>

## Regulatory review cues

- Patient effect present
- Existing risk-chain match proposed
- Exposure denominator unavailable
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-006 — Air Leak Directed Toward Eyes](../risk-management.md#risk-cpap-006)
- **Classification:** `consistent-with-known-risk`
- **Link confidence:** <span class="confidence strong">0.94 · Strong risk link</span>
- **Evidence used:** “air began leaking from the upper edge of the full-face mask”; “eyes were red, dry, and burning”; “mask cushion was about six months old”
- **Matched chain:** device-problem → component → sequence-of-events → hazardous-situation → harm → risk-control
- **Unmatched or uncertain elements:** The exact seal degradation mechanism was not established.
- **Why linked:** Mask air leak directed toward the eyes and explicit ocular symptoms align with the anticipated chain.
- **Review status:** `not-reviewed`
- **Risk-file version:** 1.0; source hash `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Secondary risk candidates

- [RISK-CPAP-003](../risk-management.md#risk-cpap-003) — `insufficient-information`; 0.62 · Weak. A leak could reduce effective pressure, but that part of the sequence is not supported here.

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
| [RC-CPAP-006-01](../risk-management.md#risk-cpap-006) | protective-measure | Mask seal and cushion design | The cushion age makes replacement guidance relevant, but adherence and effectiveness are not established. |
| [RC-CPAP-006-02](../risk-management.md#risk-cpap-006) | information-for-safety | Fit, leak-response, and cushion-replacement instructions | The cushion age makes replacement guidance relevant, but adherence and effectiveness are not established. |

> [!question] Human risk-management review
> These are review cues only. The system does not claim that a control failed, determine whether residual risk changed, or modify the synthetic risk register.

### Risk-file comparison

| Question | Result |
|---|---|
| Observed harm anticipated in risk file? | Yes — matched health-effect evidence |
| Device problem anticipated? | Yes — matched device-problem evidence |
| New sequence suggested? | No clear new sequence |
| Possible control concern? | Review requested; not concluded |
| Automatic risk-file change | Prohibited |

## Provenance

| Item | Value |
|---|---|
| Complaint source | Synthetic seed CPAP-001 |
| Deterministic build timestamp | 2026-07-27T00:00:00.000Z |
| Coding pipeline version | 1.1.0 |
| WHO ICD-11 release | 2026-01 |
| IMDRF release | 2026 |
| Terminology manifest hash | `sha256:dc657c76eac9dd9d8ff3c57a5351f69bb84221b2529acc5402930f17925281f5` |
| Risk register hash | `sha256:91c080f7321d18ef9cc33b2d2e49fee88b433a51b614735f8be020c062e5b808` |
| SNOMED CT edition | Not used |
| Human reviewer | Not reviewed |

## Sources

- [WHO ICD-11](https://icd.who.int/)
- [WHO ICD API documentation](https://icd.who.int/docs/icd-api/)
- [IMDRF Adverse Event Terminology](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- [SNOMED International Browser](https://browser.ihtsdotools.org/)
- [Synthetic risk register](../risk-management.md#risk-cpap-006)

## Related complaints

- [CPAP-002 — Nasal Bridge Pressure Injury](02-nasal-bridge-pressure-injury.md) — shared `technical-mask-fit`
- [CPAP-003 — Mask Contact Dermatitis](03-mask-contact-dermatitis.md) — shared `technical-mask-fit`
- [CPAP-004 — Dry Mouth and Sore Throat](04-dry-mouth-and-throat.md) — shared `technical-mask-fit`
