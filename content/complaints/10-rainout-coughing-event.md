---
title: "Complaint 010 — Rainout and Coughing Event"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-choking-sensation
  - medical-cough
  - technical-condensation
  - technical-humidifier
  - technical-tubing
complaint_id: "CPAP-010"
device_family: "CPAP"
synthetic: true
coding_status: "reviewed-demo"
icd11_release: "2026-01"
imdrf_release: "2026"
snomed_ct_used: false
primary_risk_item: "RISK-CPAP-007"
risk_link_status: "proposed"
risk_review_status: "not-reviewed"
quartz-properties: false
---

# Complaint 010 — Rainout and Coughing Event

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> During the night, condensed water collected in the CPAP tubing and reached the mask. The patient awoke coughing and briefly felt as if water had entered the mouth. The patient removed the mask, sat up, and recovered within a few minutes. There was no vomiting, loss of consciousness, or medical treatment. The bedroom was cool, and the heated tube function had been turned off.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 4 |
| Accepted codes | 3 |
| Candidate codes | 1 |
| SNOMED CT fallback | No |
| Proposed risk links | 2 |
| Primary risk-link confidence | 0.93 · Strong |
| Risk-control review cues | 2 |
| Human-review flags | 1 |

## Complaint-to-risk chain

<div class="trace-chain">
<a class="trace-node matched" href="#evidence-spans"><b>moisture or humidity problem in breathing circuit</b><span>Matched device evidence</span></a>
<a class="trace-node matched" href="#risk-management-linkage"><b>Airflow carries moisture or material toward the interface</b><span>Matched sequence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-007"><b>User breathes through an air path containing condensed water or uncharacterised material</b><span>Matched hazardous situation</span></a>
<a class="trace-node matched" href="#accepted-coded-terms"><b>cough</b><span>Matched health evidence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-007"><b>RISK-CPAP-007</b><span>0.93 · Strong risk link</span></a>
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “condensed water collected in the CPAP tubing and reached the mask” | device_problem | present | moisture or humidity problem in breathing circuit | IMDRF A |
| “awoke coughing” | clinical_sign_or_symptom | present | cough | WHO ICD-11 / IMDRF E |
| “felt as if water had entered the mouth” | clinical_sign_or_symptom | suspected | brief choking sensation | WHO ICD-11 / IMDRF E |
| “heated tube function had been turned off” | use_error_or_use_context | present | heated tubing disabled | IMDRF AET |

## Accepted coded terms

### Moisture or Humidity Problem

- **Evidence:** “condensed water collected in the CPAP tubing and reached the mask”
- **Terminology:** IMDRF AET, Annex A
- **Code:** `A1905`
- **Preferred title:** Moisture or Humidity Problem
- **Confidence:** <span class="confidence strong">0.94 · Strong terminology match</span>
- **Why selected:** The complaint explicitly describes condensed moisture in the air path.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Cough

- **Evidence:** “awoke coughing”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `MD12`
- **Preferred title:** Cough
- **Confidence:** <span class="confidence strong">0.96 · Strong terminology match</span>
- **Why selected:** The ICD-11 symptom code directly matches the stated cough.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/2027526159)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Hose

- **Evidence:** “heated tube function had been turned off”
- **Terminology:** IMDRF AET, Annex G
- **Code:** `G04069`
- **Preferred title:** Hose
- **Confidence:** <span class="confidence good">0.82 · Good terminology match</span>
- **Why selected:** Hose is the closest official component term for the CPAP tubing.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending


## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
| “felt as if water had entered the mouth” | Choking | IMDRF AET E | `E0710` | 0.69 · Plausible | Choking is plausible, but the wording is subjective and brief; aspiration is not stated. |

> [!question] Human selection may be required
> Candidate terms remain unaccepted until a qualified reviewer confirms that the available evidence supports them.

## Uncoded or ambiguous statements

- **“felt as if water had entered the mouth”** — No aspiration or inhalation injury is selected.

## Follow-up questions

1. How much water reached the mask?
2. Were heated-tube and humidifier settings reviewed?
3. Did cough or breathing symptoms persist after the event?

## Tags

### Medical

<span class="tag-medical">medical-choking-sensation</span> <span class="tag-medical">medical-cough</span>

### Technical

<span class="tag-technical">technical-condensation</span> <span class="tag-technical">technical-humidifier</span> <span class="tag-technical">technical-tubing</span>

## Regulatory review cues

- Patient effect present
- Existing risk-chain match proposed
- No aspiration diagnosis
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-007 — Contaminated or Condensed Air-Path Exposure](../risk-management.md#risk-cpap-007)
- **Classification:** `consistent-with-known-risk`
- **Link confidence:** <span class="confidence strong">0.93 · Strong risk link</span>
- **Evidence used:** “condensed water collected in the CPAP tubing and reached the mask”; “awoke coughing”; “felt as if water had entered the mouth”; “heated tube function had been turned off”
- **Matched chain:** device-problem → component → sequence-of-events → hazardous-situation → harm → risk-control
- **Unmatched or uncertain elements:** No aspiration, infection, or lasting respiratory harm was established.
- **Why linked:** Condensation entered the patient circuit and was followed by cough, matching the anticipated chain.
- **Review status:** `not-reviewed`
- **Risk-file version:** 1.0; source hash `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Secondary risk candidates

- [RISK-CPAP-003](../risk-management.md#risk-cpap-003) — `insufficient-information`; 0.58 · Weak. Water in the circuit could affect flow, but no such effect was observed.

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
| [RC-CPAP-007-01](../risk-management.md#risk-cpap-007) | information-for-safety | Cleaning, water-use, and drying instructions | Water-management settings and room conditions make use information relevant. |
| [RC-CPAP-007-02](../risk-management.md#risk-cpap-007) | inherent-safety | Water-management, drainage, and heated-tube design | Water-management settings and room conditions make use information relevant. |

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
| Complaint source | Synthetic seed CPAP-010 |
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
- [Synthetic risk register](../risk-management.md#risk-cpap-007)

## Related complaints

- [CPAP-018 — Humidifier Contamination and Cough](18-humidifier-contamination-and-cough.md) — shared primary risk `RISK-CPAP-007`
- [CPAP-004 — Dry Mouth and Sore Throat](04-dry-mouth-and-throat.md) — shared `technical-humidifier`
- [CPAP-005 — Nasal Dryness and Epistaxis](05-nasal-dryness-and-epistaxis.md) — shared `technical-humidifier`
