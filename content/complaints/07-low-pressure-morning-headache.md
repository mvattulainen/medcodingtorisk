---
title: "Complaint 007 — Low Pressure, Morning Headache, and Sleepiness"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-daytime-somnolence
  - medical-headache
  - technical-pressure-too-low
  - context-therapy-interruption
complaint_id: "CPAP-007"
device_family: "CPAP"
synthetic: true
coding_status: "reviewed-demo"
icd11_release: "2026-01"
imdrf_release: "2026"
snomed_ct_used: false
primary_risk_item: "RISK-CPAP-003"
risk_link_status: "proposed"
risk_review_status: "not-reviewed"
quartz-properties: false
---

# Complaint 007 — Low Pressure, Morning Headache, and Sleepiness

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> The user stated that the CPAP display showed lower pressure than usual for two nights. During those nights the partner observed loud snoring, and the user woke with a morning headache and pronounced daytime sleepiness. The tubing appeared connected and the mask did not feel loose. No chest pain, shortness of breath, or loss of consciousness occurred. The device had not yet been inspected.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 4 |
| Accepted codes | 3 |
| Candidate codes | 0 |
| SNOMED CT fallback | No |
| Proposed risk links | 1 |
| Primary risk-link confidence | 0.91 · Strong |
| Risk-control review cues | 2 |
| Human-review flags | 1 |

## Complaint-to-risk chain

<div class="trace-chain">
<a class="trace-node matched" href="#evidence-spans"><b>Initiating event</b><span>Matched device evidence</span></a>
<a class="trace-node matched" href="#risk-management-linkage"><b>Therapeutic pressure or flow at the interface is insufficient</b><span>Matched sequence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-003"><b>User receives insufficient effective PAP during sleep</b><span>Matched hazardous situation</span></a>
<a class="trace-node matched" href="#accepted-coded-terms"><b>headache</b><span>Matched health evidence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-003"><b>RISK-CPAP-003</b><span>0.91 · Strong risk link</span></a>
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “display showed lower pressure than usual” | device_setting | present | decrease in pressure | IMDRF AET |
| “morning headache” | clinical_sign_or_symptom | present | headache | WHO ICD-11 / IMDRF E |
| “pronounced daytime sleepiness” | clinical_sign_or_symptom | present | daytime somnolence | WHO ICD-11 / IMDRF E |
| “device had not yet been inspected” | investigation_statement | negated | no device inspection | IMDRF AET |

## Accepted coded terms

### Decrease in Pressure

- **Evidence:** “display showed lower pressure than usual”
- **Terminology:** IMDRF AET, Annex A
- **Code:** `A141101`
- **Preferred title:** Decrease in Pressure
- **Confidence:** <span class="confidence good">0.88 · Good terminology match</span>
- **Why selected:** The display explicitly showed lower pressure; the cause remains uninvestigated.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Headache, not elsewhere classified

- **Evidence:** “morning headache”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `MB4D`
- **Preferred title:** Headache, not elsewhere classified
- **Confidence:** <span class="confidence strong">0.94 · Strong terminology match</span>
- **Why selected:** The symptom code preserves the stated headache without diagnosing recurrent sleep apnoea.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/1405405864)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Sleepiness/Drowsiness/Somnolence

- **Evidence:** “pronounced daytime sleepiness”
- **Terminology:** IMDRF AET, Annex E
- **Code:** `E0209`
- **Preferred title:** Sleepiness/Drowsiness/Somnolence
- **Confidence:** <span class="confidence strong">0.93 · Strong terminology match</span>
- **Why selected:** IMDRF provides an exact somnolence term; the ICD search result was not defensible.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending


## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
| — | No additional candidate above 0.50 | — | — | — | The accepted term had no useful alternative in the pinned search result. |



## Uncoded or ambiguous statements

- **“device had not yet been inspected”** — No investigation code or conclusion may be generated.

## Follow-up questions

1. What pressure was displayed and what pressure was prescribed?
2. Were leak or event data available from the device?
3. What did device inspection find?

## Tags

### Medical

<span class="tag-medical">medical-daytime-somnolence</span> <span class="tag-medical">medical-headache</span>

### Technical

<span class="tag-technical">technical-pressure-too-low</span>

## Regulatory review cues

- Patient effect present
- Important information missing
- Human medical review recommended
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-003 — Insufficient Effective Pressure or Flow](../risk-management.md#risk-cpap-003)
- **Classification:** `consistent-with-known-risk`
- **Link confidence:** <span class="confidence strong">0.91 · Strong risk link</span>
- **Evidence used:** “display showed lower pressure than usual”; “morning headache”; “pronounced daytime sleepiness”
- **Matched chain:** device-problem → sequence-of-events → hazardous-situation → harm → risk-control
- **Unmatched or uncertain elements:** No inspection conclusion or prescribed-pressure comparison is available.
- **Why linked:** Lower displayed pressure, snoring, headache, and sleepiness align with insufficient effective therapy.
- **Review status:** `not-reviewed`
- **Risk-file version:** 1.0; source hash `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Secondary risk candidates

- No secondary risk candidate above the publication threshold.

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
| [RC-CPAP-003-01](../risk-management.md#risk-cpap-003) | protective-measure | Pressure and flow monitoring | Displayed low pressure makes monitoring controls relevant, but operation has not been verified. |
| [RC-CPAP-003-02](../risk-management.md#risk-cpap-003) | protective-measure | Leak detection and mask-fit support | Displayed low pressure makes monitoring controls relevant, but operation has not been verified. |

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
| Complaint source | Synthetic seed CPAP-007 |
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
- [Synthetic risk register](../risk-management.md#risk-cpap-003)

## Related complaints

- [CPAP-004 — Dry Mouth and Sore Throat](04-dry-mouth-and-throat.md) — shared primary risk `RISK-CPAP-003`
- [CPAP-005 — Nasal Dryness and Epistaxis](05-nasal-dryness-and-epistaxis.md) — shared primary risk `RISK-CPAP-003`
- [CPAP-017 — Blocked Filter and Respiratory Irritation](17-blocked-filter-respiratory-irritation.md) — shared primary risk `RISK-CPAP-003`
