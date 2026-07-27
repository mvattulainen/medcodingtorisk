---
title: "Complaint 017 — Blocked Filter and Respiratory Irritation"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-cough
  - medical-respiratory-irritation
  - technical-filter-blockage
complaint_id: "CPAP-017"
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

# Complaint 017 — Blocked Filter and Respiratory Irritation

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> The patient reported an unusual dusty smell from the CPAP and developed throat irritation and coughing during use. On inspection, the disposable air filter was dark and visibly clogged. Symptoms improved after stopping the device and replacing the filter. The patient had no fever, wheezing, or medical evaluation. The device had been used longer than the recommended filter-replacement interval.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 4 |
| Accepted codes | 4 |
| Candidate codes | 0 |
| SNOMED CT fallback | No |
| Proposed risk links | 2 |
| Primary risk-link confidence | 0.90 · Strong |
| Risk-control review cues | 2 |
| Human-review flags | 0 |

## Complaint-to-risk chain

<div class="trace-chain">
<a class="trace-node matched" href="#evidence-spans"><b>obstruction of flow at filter</b><span>Matched device evidence</span></a>
<a class="trace-node matched" href="#risk-management-linkage"><b>Therapeutic pressure or flow at the interface is insufficient</b><span>Matched sequence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-003"><b>User receives insufficient effective PAP during sleep</b><span>Matched hazardous situation</span></a>
<a class="trace-node matched" href="#accepted-coded-terms"><b>upper respiratory tract irritation</b><span>Matched health evidence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-003"><b>RISK-CPAP-003</b><span>0.90 · Strong risk link</span></a>
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “throat irritation” | clinical_sign_or_symptom | present | upper respiratory tract irritation | WHO ICD-11 / IMDRF E |
| “coughing during use” | clinical_sign_or_symptom | present | cough | WHO ICD-11 / IMDRF E |
| “air filter was dark and visibly clogged” | device_problem | present | obstruction of flow at filter | IMDRF A |
| “used longer than the recommended filter-replacement interval” | use_error_or_use_context | present | filter maintenance interval exceeded | IMDRF AET |

## Accepted coded terms

### Upper Respiratory Tract Irritation

- **Evidence:** “throat irritation”
- **Terminology:** IMDRF AET, Annex E
- **Code:** `E0754`
- **Preferred title:** Upper Respiratory Tract Irritation
- **Confidence:** <span class="confidence strong">0.91 · Strong terminology match</span>
- **Why selected:** The exact IMDRF health-effect term is used because ICD search was not defensible.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Cough

- **Evidence:** “coughing during use”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `MD12`
- **Preferred title:** Cough
- **Confidence:** <span class="confidence strong">0.95 · Strong terminology match</span>
- **Why selected:** Cough is explicit and temporally linked to use without assigning a diagnosis.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/2027526159)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Obstruction of Flow

- **Evidence:** “air filter was dark and visibly clogged”
- **Terminology:** IMDRF AET, Annex A
- **Code:** `A1409`
- **Preferred title:** Obstruction of Flow
- **Confidence:** <span class="confidence strong">0.90 · Strong terminology match</span>
- **Why selected:** A visibly clogged filter supports obstruction of flow without asserting the degree.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Filter

- **Evidence:** “used longer than the recommended filter-replacement interval”
- **Terminology:** IMDRF AET, Annex G
- **Code:** `G04054`
- **Preferred title:** Filter
- **Confidence:** <span class="confidence strong">0.94 · Strong terminology match</span>
- **Why selected:** Filter is the exact official component term.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending


## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
| — | No additional candidate above 0.50 | — | — | — | The accepted term had no useful alternative in the pinned search result. |



## Uncoded or ambiguous statements

- No unresolved evidence statements.

## Follow-up questions

1. How long had the filter been in service?
2. Were flow or pressure performance data available?
3. Did symptoms recur after filter replacement?

## Tags

### Medical

<span class="tag-medical">medical-cough</span> <span class="tag-medical">medical-respiratory-irritation</span>

### Technical

<span class="tag-technical">technical-filter-blockage</span>

## Regulatory review cues

- Patient effect present
- Maintenance context present
- No device-defect conclusion
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-003 — Insufficient Effective Pressure or Flow](../risk-management.md#risk-cpap-003)
- **Classification:** `consistent-with-known-risk`
- **Link confidence:** <span class="confidence strong">0.90 · Strong risk link</span>
- **Evidence used:** “throat irritation”; “coughing during use”; “air filter was dark and visibly clogged”; “used longer than the recommended filter-replacement interval”
- **Matched chain:** device-problem → component → sequence-of-events → hazardous-situation → harm → risk-control
- **Unmatched or uncertain elements:** Actual delivered flow or pressure was not measured.
- **Why linked:** A clogged filter and respiratory symptoms align with obstruction and insufficient effective flow.
- **Review status:** `not-reviewed`
- **Risk-file version:** 1.0; source hash `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Secondary risk candidates

- [RISK-CPAP-007](../risk-management.md#risk-cpap-007) — `consistent-with-known-risk`; 0.78 · Plausible. A dirty filter and dusty odor also fit the contaminated air-path risk chain.

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
| [RC-CPAP-003-01](../risk-management.md#risk-cpap-003) | protective-measure | Pressure and flow monitoring | The stated replacement interval was exceeded; this does not establish adequacy of the instructions. |
| [RC-CPAP-003-04](../risk-management.md#risk-cpap-003) | information-for-safety | Filter inspection and replacement instructions | The stated replacement interval was exceeded; this does not establish adequacy of the instructions. |

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
| Complaint source | Synthetic seed CPAP-017 |
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
- [CPAP-007 — Low Pressure, Morning Headache, and Sleepiness](07-low-pressure-morning-headache.md) — shared primary risk `RISK-CPAP-003`
