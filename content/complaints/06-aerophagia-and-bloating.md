---
title: "Complaint 006 — Aerophagia and Abdominal Bloating"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-abdominal-bloating
  - technical-pressure-setting
  - technical-pressure-too-high
  - context-reduced-use
  - review-snomed-fallback
complaint_id: "CPAP-006"
device_family: "CPAP"
synthetic: true
coding_status: "reviewed-demo"
icd11_release: "2026-01"
imdrf_release: "2026"
snomed_ct_used: false
primary_risk_item: "RISK-CPAP-002"
risk_link_status: "proposed"
risk_review_status: "not-reviewed"
quartz-properties: false
---

# Complaint 006 — Aerophagia and Abdominal Bloating

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> The patient reported swallowing air during CPAP use and waking with abdominal bloating and frequent belching. The symptoms began after the prescribed pressure was increased at the clinic. There was no vomiting, severe abdominal pain, or emergency treatment. The patient temporarily reduced use because of discomfort and asked whether the pressure could be reviewed.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 4 |
| Accepted codes | 3 |
| Candidate codes | 1 |
| SNOMED CT fallback | Human review queued |
| Proposed risk links | 1 |
| Primary risk-link confidence | 0.89 · Good |
| Risk-control review cues | 2 |
| Human-review flags | 1 |

## Complaint-to-risk chain

<div class="trace-chain">
<a class="trace-node matched" href="#evidence-spans"><b>Initiating event</b><span>Matched device evidence</span></a>
<a class="trace-node matched" href="#risk-management-linkage"><b>User is exposed to excessive positive airway pressure</b><span>Matched sequence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-002"><b>User receives excessive PAP while wearing the interface</b><span>Matched hazardous situation</span></a>
<a class="trace-node matched" href="#accepted-coded-terms"><b>abdominal distension</b><span>Matched health evidence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-002"><b>RISK-CPAP-002</b><span>0.89 · Good risk link</span></a>
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “abdominal bloating” | clinical_sign_or_symptom | present | abdominal distension | WHO ICD-11 / IMDRF E |
| “frequent belching” | clinical_sign_or_symptom | present | belching | WHO ICD-11 / IMDRF E |
| “prescribed pressure was increased” | device_setting | present | increased pressure setting | IMDRF AET |
| “no vomiting, severe abdominal pain, or emergency treatment” | clinical_sign_or_symptom | negated | vomiting severe abdominal pain emergency treatment | WHO ICD-11 / IMDRF E |

## Accepted coded terms

### Abdominal distension

- **Evidence:** “abdominal bloating”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `ME01`
- **Preferred title:** Abdominal distension
- **Confidence:** <span class="confidence strong">0.94 · Strong terminology match</span>
- **Why selected:** Abdominal distension directly represents bloating without asserting a disorder.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/898362405)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Belching

- **Evidence:** “frequent belching”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `MD91`
- **Preferred title:** Belching
- **Confidence:** <span class="confidence strong">0.93 · Strong terminology match</span>
- **Why selected:** The ICD-11 symptom code directly matches the stated belching.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/1093292760)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Increase in Pressure

- **Evidence:** “prescribed pressure was increased”
- **Terminology:** IMDRF AET, Annex A
- **Code:** `A141102`
- **Preferred title:** Increase in Pressure
- **Confidence:** <span class="confidence good">0.87 · Good terminology match</span>
- **Why selected:** An increase in pressure is explicit, although the complaint does not establish an incorrect setting.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending


## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
| “frequent belching” | Functional belching disorders | WHO ICD-11 MMS | `DD90.5` | 0.68 · Plausible | A functional belching disorder would introduce a diagnosis not established by the complaint. |

> [!question] Human selection may be required
> Candidate terms remain unaccepted until a qualified reviewer confirms that the available evidence supports them.

## Uncoded or ambiguous statements

- **“no vomiting, severe abdominal pain, or emergency treatment”** — The listed severe effects and treatment are negated.

## Follow-up questions

1. What were the previous and new prescribed pressure settings?
2. Did symptoms recur at the prior setting?
3. Did a clinician assess the abdominal symptoms?

## Tags

### Medical

<span class="tag-medical">medical-abdominal-bloating</span>

### Technical

<span class="tag-technical">technical-pressure-setting</span> <span class="tag-technical">technical-pressure-too-high</span>

## Regulatory review cues

- Patient effect present
- Therapy use reduced
- Human medical review recommended
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-002 — Excessive Delivered Pressure](../risk-management.md#risk-cpap-002)
- **Classification:** `consistent-with-known-risk`
- **Link confidence:** <span class="confidence good">0.89 · Good risk link</span>
- **Evidence used:** “abdominal bloating”; “frequent belching”; “prescribed pressure was increased”
- **Matched chain:** device-problem → sequence-of-events → hazardous-situation → harm → risk-control
- **Unmatched or uncertain elements:** The record does not establish that delivered pressure exceeded the prescription.
- **Why linked:** Symptoms began after a stated pressure increase and match anticipated pressure-intolerance effects.
- **Review status:** `not-reviewed`
- **Risk-file version:** 1.0; source hash `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Secondary risk candidates

- No secondary risk candidate above the publication threshold.

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
| [RC-CPAP-002-01](../risk-management.md#risk-cpap-002) | inherent-safety | Pressure output limits and independent monitoring | Pressure-setting controls are relevant, but the complaint records a clinician-directed increase rather than a confirmed malfunction. |
| [RC-CPAP-002-03](../risk-management.md#risk-cpap-002) | information-for-safety | Clinician-only setup and pressure review instructions | Pressure-setting controls are relevant, but the complaint records a clinician-directed increase rather than a confirmed malfunction. |

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
| Complaint source | Synthetic seed CPAP-006 |
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
- [Synthetic risk register](../risk-management.md#risk-cpap-002)

## Related complaints

- [CPAP-008 — High Pressure and Chest Discomfort](08-high-pressure-chest-discomfort.md) — shared primary risk `RISK-CPAP-002`
- [CPAP-016 — Pressure Change After Software Update](16-pressure-change-after-software-update.md) — shared `technical-pressure-setting`
