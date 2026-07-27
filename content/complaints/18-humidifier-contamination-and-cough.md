---
title: "Complaint 018 — Humidifier Contamination and Cough"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-cough
  - technical-contamination
  - technical-humidifier
complaint_id: "CPAP-018"
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

# Complaint 018 — Humidifier Contamination and Cough

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> The user noticed dark material inside a humidifier chamber that had not been cleaned for several weeks. The user also reported a new cough occurring mainly during CPAP use. No laboratory testing was performed, and the material was not confirmed to be mold or another organism. There was no fever, pneumonia diagnosis, or hospitalization. The chamber was replaced and the device was cleaned.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 4 |
| Accepted codes | 2 |
| Candidate codes | 1 |
| SNOMED CT fallback | No |
| Proposed risk links | 1 |
| Primary risk-link confidence | 0.91 · Strong |
| Risk-control review cues | 2 |
| Human-review flags | 2 |

## Complaint-to-risk chain

<div class="trace-chain">
<a class="trace-node matched" href="#evidence-spans"><b>device contamination with material</b><span>Matched device evidence</span></a>
<a class="trace-node matched" href="#risk-management-linkage"><b>Airflow carries moisture or material toward the interface</b><span>Matched sequence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-007"><b>User breathes through an air path containing condensed water or uncharacterised material</b><span>Matched hazardous situation</span></a>
<a class="trace-node matched" href="#accepted-coded-terms"><b>cough</b><span>Matched health evidence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-007"><b>RISK-CPAP-007</b><span>0.91 · Strong risk link</span></a>
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “dark material inside a humidifier chamber” | device_problem | present | device contamination with material | IMDRF A |
| “new cough occurring mainly during CPAP use” | clinical_sign_or_symptom | present | cough | WHO ICD-11 / IMDRF E |
| “material was not confirmed to be mold or another organism” | investigation_statement | negated | microbial contamination unconfirmed | IMDRF AET |
| “no fever, pneumonia diagnosis, or hospitalization” | clinical_condition | negated | fever pneumonia hospitalization | WHO ICD-11 / IMDRF E |

## Accepted coded terms

### Device Contamination with Chemical or Other Material

- **Evidence:** “dark material inside a humidifier chamber”
- **Terminology:** IMDRF AET, Annex A
- **Code:** `A180104`
- **Preferred title:** Device Contamination with Chemical or Other Material
- **Confidence:** <span class="confidence good">0.88 · Good terminology match</span>
- **Why selected:** Visible material supports chemical or other material contamination without identifying an organism.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Cough

- **Evidence:** “new cough occurring mainly during CPAP use”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `MD12`
- **Preferred title:** Cough
- **Confidence:** <span class="confidence strong">0.96 · Strong terminology match</span>
- **Why selected:** Cough is explicit; temporal association is preserved without causality.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/2027526159)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending


## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
| “material was not confirmed to be mold or another organism” | Microbial Contamination of Device | IMDRF AET A | `A180105` | 0.51 · Weak | Microbial contamination is possible but explicitly unconfirmed. |

> [!question] Human selection may be required
> Candidate terms remain unaccepted until a qualified reviewer confirms that the available evidence supports them.

## Uncoded or ambiguous statements

- **“material was not confirmed to be mold or another organism”** — No mold, fungal infection, or organism is coded.
- **“no fever, pneumonia diagnosis, or hospitalization”** — The listed conditions and impact are explicitly negated.

## Follow-up questions

1. Was the chamber material tested or photographed?
2. What cleaning and water-use practices were followed?
3. Did the cough resolve after chamber replacement?

## Tags

### Medical

<span class="tag-medical">medical-cough</span>

### Technical

<span class="tag-technical">technical-contamination</span> <span class="tag-technical">technical-humidifier</span>

## Regulatory review cues

- Patient effect present
- Possible risk-control concern
- No infection diagnosis
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-007 — Contaminated or Condensed Air-Path Exposure](../risk-management.md#risk-cpap-007)
- **Classification:** `possible-risk-control-concern`
- **Link confidence:** <span class="confidence strong">0.91 · Strong risk link</span>
- **Evidence used:** “dark material inside a humidifier chamber”; “new cough occurring mainly during CPAP use”; “material was not confirmed to be mold or another organism”; “no fever, pneumonia diagnosis, or hospitalization”
- **Matched chain:** device-problem → component → sequence-of-events → hazardous-situation → harm → risk-control
- **Unmatched or uncertain elements:** Material identity and causal relation to cough are unconfirmed.
- **Why linked:** Visible air-path contamination and cough during use align with the anticipated exposure chain.
- **Review status:** `not-reviewed`
- **Risk-file version:** 1.0; source hash `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Secondary risk candidates

- No secondary risk candidate above the publication threshold.

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
| [RC-CPAP-007-01](../risk-management.md#risk-cpap-007) | information-for-safety | Cleaning, water-use, and drying instructions | The chamber had not been cleaned for several weeks; adequacy and understanding of instructions require review. |
| [RC-CPAP-007-04](../risk-management.md#risk-cpap-007) | information-for-safety | Chamber inspection and replacement guidance | The chamber had not been cleaned for several weeks; adequacy and understanding of instructions require review. |

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
| Complaint source | Synthetic seed CPAP-018 |
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

- [CPAP-010 — Rainout and Coughing Event](10-rainout-coughing-event.md) — shared primary risk `RISK-CPAP-007`
- [CPAP-004 — Dry Mouth and Sore Throat](04-dry-mouth-and-throat.md) — shared `technical-humidifier`
- [CPAP-005 — Nasal Dryness and Epistaxis](05-nasal-dryness-and-epistaxis.md) — shared `technical-humidifier`
