---
title: "Complaint 002 — Nasal Bridge Pressure Injury"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-pressure-injury
  - medical-skin-irritation
  - technical-headgear
  - technical-mask-fit
  - context-therapy-interruption
  - review-snomed-fallback
complaint_id: "CPAP-002"
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

# Complaint 002 — Nasal Bridge Pressure Injury

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> After using a newly fitted nasal mask for three nights, the patient developed a painful red area on the bridge of the nose. The next morning there was a small area of broken skin but no bleeding or drainage. The patient stopped using the mask and contacted the sleep clinic. A different mask was provided. No infection was diagnosed, and no antibiotics were given.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 4 |
| Accepted codes | 3 |
| Candidate codes | 0 |
| SNOMED CT fallback | Human review queued |
| Proposed risk links | 1 |
| Primary risk-link confidence | 0.91 · Strong |
| Risk-control review cues | 2 |
| Human-review flags | 1 |

## Complaint-to-risk chain

<div class="trace-chain">
<a class="trace-node uncertain" href="#evidence-spans"><b>Initiating event</b><span>Partly stated</span></a>
<a class="trace-node matched" href="#risk-management-linkage"><b>Local pressure, friction, or material exposure persists</b><span>Matched sequence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-005"><b>Facial skin is exposed to sustained contact during therapy</b><span>Matched hazardous situation</span></a>
<a class="trace-node matched" href="#accepted-coded-terms"><b>painful nasal-bridge skin lesion</b><span>Matched health evidence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-005"><b>RISK-CPAP-005</b><span>0.91 · Strong risk link</span></a>
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “painful red area on the bridge of the nose” | injury | present | painful nasal-bridge skin lesion | WHO ICD-11 / IMDRF E |
| “small area of broken skin” | injury | present | open wound of external skin of nose | WHO ICD-11 / IMDRF E |
| “newly fitted nasal mask” | device_component | present | mask fit | IMDRF G |
| “No infection was diagnosed” | clinical_condition | negated | infection | WHO ICD-11 / IMDRF E |

## Accepted coded terms

### Skin lesion of unspecified nature

- **Evidence:** “painful red area on the bridge of the nose”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `ME60.Z`
- **Preferred title:** Skin lesion of unspecified nature
- **Confidence:** <span class="confidence good">0.84 · Good terminology match</span>
- **Why selected:** The code preserves a nonspecific skin lesion without asserting a pressure ulcer diagnosis.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/402520533/unspecified)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Open wound of external skin of the nose

- **Evidence:** “small area of broken skin”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `NA01.Z&XA04T9`
- **Preferred title:** Open wound of external skin of the nose
- **Confidence:** <span class="confidence good">0.82 · Good terminology match</span>
- **Why selected:** Broken skin at the nasal bridge supports an open-wound candidate while preserving unspecified depth.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/codeinfo/NA01.Z%26XA04T9)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Mask

- **Evidence:** “newly fitted nasal mask”
- **Terminology:** IMDRF AET, Annex G
- **Code:** `G04086`
- **Preferred title:** Mask
- **Confidence:** <span class="confidence strong">0.92 · Strong terminology match</span>
- **Why selected:** The mask is the explicitly stated patient-contact component.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending


## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
| — | No additional candidate above 0.50 | — | — | — | The accepted term had no useful alternative in the pinned search result. |



## Uncoded or ambiguous statements

- **“No infection was diagnosed”** — The complaint explicitly negates infection.

## Follow-up questions

1. What was the measured size and depth of the broken skin?
2. Was a clinician assessment of pressure injury performed?
3. Was the original mask size or fit documented?

## Tags

### Medical

<span class="tag-medical">medical-pressure-injury</span> <span class="tag-medical">medical-skin-irritation</span>

### Technical

<span class="tag-technical">technical-headgear</span> <span class="tag-technical">technical-mask-fit</span>

## Regulatory review cues

- Patient effect present
- Therapy interrupted
- Human medical review recommended
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-005 — Mask or Headgear Contact Injury](../risk-management.md#risk-cpap-005)
- **Classification:** `consistent-with-known-risk`
- **Link confidence:** <span class="confidence strong">0.91 · Strong risk link</span>
- **Evidence used:** “painful red area on the bridge of the nose”; “small area of broken skin”; “newly fitted nasal mask”
- **Matched chain:** component → sequence-of-events → hazardous-situation → harm → risk-control
- **Unmatched or uncertain elements:** The complaint does not establish whether sizing, adjustment, or material caused the lesion.
- **Why linked:** Mask contact followed by a localized painful skin lesion matches the anticipated contact-injury chain.
- **Review status:** `not-reviewed`
- **Risk-file version:** 1.0; source hash `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Secondary risk candidates

- No secondary risk candidate above the publication threshold.

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
| [RC-CPAP-005-01](../risk-management.md#risk-cpap-005) | inherent-safety | Biocompatible patient-contact materials and pressure-distributing cushion design | A newly fitted mask and early contact injury make fitting and adjustment controls relevant. |
| [RC-CPAP-005-02](../risk-management.md#risk-cpap-005) | information-for-safety | Sizing, fitting, adjustment, and wear-inspection instructions | A newly fitted mask and early contact injury make fitting and adjustment controls relevant. |

> [!question] Human risk-management review
> These are review cues only. The system does not claim that a control failed, determine whether residual risk changed, or modify the synthetic risk register.

### Risk-file comparison

| Question | Result |
|---|---|
| Observed harm anticipated in risk file? | Yes — matched health-effect evidence |
| Device problem anticipated? | Not fully matched |
| New sequence suggested? | No clear new sequence |
| Possible control concern? | Review requested; not concluded |
| Automatic risk-file change | Prohibited |

## Provenance

| Item | Value |
|---|---|
| Complaint source | Synthetic seed CPAP-002 |
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

- [CPAP-003 — Mask Contact Dermatitis](03-mask-contact-dermatitis.md) — shared primary risk `RISK-CPAP-005`
- [CPAP-001 — Mask Leak and Eye Irritation](01-mask-leak-eye-irritation.md) — shared `technical-mask-fit`
- [CPAP-004 — Dry Mouth and Sore Throat](04-dry-mouth-and-throat.md) — shared `technical-mask-fit`
