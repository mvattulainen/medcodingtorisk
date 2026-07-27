---
title: "Complaint 008 — High Pressure and Chest Discomfort"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-chest-discomfort
  - technical-pressure-setting
  - technical-pressure-too-high
  - review-medical
complaint_id: "CPAP-008"
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

# Complaint 008 — High Pressure and Chest Discomfort

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> After a settings change, the patient reported that the airflow felt excessively forceful and caused pressure-like discomfort in the chest while awake. The discomfort stopped after removing the mask. The patient denied crushing chest pain, fainting, or persistent shortness of breath and did not seek emergency care. The displayed pressure was higher than the previous prescription, but the prescription record had not yet been checked.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 4 |
| Accepted codes | 2 |
| Candidate codes | 1 |
| SNOMED CT fallback | No |
| Proposed risk links | 1 |
| Primary risk-link confidence | 0.90 · Strong |
| Risk-control review cues | 2 |
| Human-review flags | 2 |

## Complaint-to-risk chain

<div class="trace-chain">
<a class="trace-node matched" href="#evidence-spans"><b>Initiating event</b><span>Matched device evidence</span></a>
<a class="trace-node matched" href="#risk-management-linkage"><b>User is exposed to excessive positive airway pressure</b><span>Matched sequence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-002"><b>User receives excessive PAP while wearing the interface</b><span>Matched hazardous situation</span></a>
<a class="trace-node matched" href="#accepted-coded-terms"><b>chest discomfort</b><span>Matched health evidence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-002"><b>RISK-CPAP-002</b><span>0.90 · Strong risk link</span></a>
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “airflow felt excessively forceful” | device_setting | present | increase in pressure | IMDRF AET |
| “pressure-like discomfort in the chest” | clinical_sign_or_symptom | present | chest discomfort | WHO ICD-11 / IMDRF E |
| “denied crushing chest pain, fainting, or persistent shortness of breath” | clinical_sign_or_symptom | negated | crushing chest pain syncope persistent dyspnoea | WHO ICD-11 / IMDRF E |
| “prescription record had not yet been checked” | investigation_statement | negated | prescription comparison unavailable | IMDRF AET |

## Accepted coded terms

### Increase in Pressure

- **Evidence:** “airflow felt excessively forceful”
- **Terminology:** IMDRF AET, Annex A
- **Code:** `A141102`
- **Preferred title:** Increase in Pressure
- **Confidence:** <span class="confidence strong">0.91 · Strong terminology match</span>
- **Why selected:** Excessively forceful airflow and a higher display support increased pressure, not yet an incorrect-setting conclusion.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Symptom or complaint of the chest

- **Evidence:** “pressure-like discomfort in the chest”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `ME86.3`
- **Preferred title:** Symptom or complaint of the chest
- **Confidence:** <span class="confidence strong">0.90 · Strong terminology match</span>
- **Why selected:** A symptom or complaint of the chest avoids overinterpreting the symptom as cardiac pain.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/756584914)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending


## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
| “pressure-like discomfort in the chest” | Chest pain, unspecified | WHO ICD-11 MMS | `MD30.Z` | 0.66 · Plausible | Chest pain is less faithful because the narrative says discomfort and explicitly denies crushing pain. |

> [!question] Human selection may be required
> Candidate terms remain unaccepted until a qualified reviewer confirms that the available evidence supports them.

## Uncoded or ambiguous statements

- **“denied crushing chest pain, fainting, or persistent shortness of breath”** — The potentially serious symptoms are explicitly negated.
- **“prescription record had not yet been checked”** — The record cannot establish an incorrect setting.

## Follow-up questions

1. What pressure was prescribed and what pressure was displayed?
2. Was urgent clinical assessment offered for the chest symptom?
3. Did the symptom recur after settings were verified?

## Tags

### Medical

<span class="tag-medical">medical-chest-discomfort</span>

### Technical

<span class="tag-technical">technical-pressure-setting</span> <span class="tag-technical">technical-pressure-too-high</span>

## Regulatory review cues

- Potentially serious symptom mentioned
- Human medical review recommended
- No reportability conclusion
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-002 — Excessive Delivered Pressure](../risk-management.md#risk-cpap-002)
- **Classification:** `consistent-with-known-risk`
- **Link confidence:** <span class="confidence strong">0.90 · Strong risk link</span>
- **Evidence used:** “airflow felt excessively forceful”; “pressure-like discomfort in the chest”; “prescription record had not yet been checked”
- **Matched chain:** device-problem → sequence-of-events → hazardous-situation → harm → risk-control
- **Unmatched or uncertain elements:** The prescription has not been verified; excessive delivered pressure is not confirmed.
- **Why linked:** The pressure change and chest discomfort match the anticipated chain, subject to prescription verification.
- **Review status:** `not-reviewed`
- **Risk-file version:** 1.0; source hash `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Secondary risk candidates

- No secondary risk candidate above the publication threshold.

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
| [RC-CPAP-002-01](../risk-management.md#risk-cpap-002) | inherent-safety | Pressure output limits and independent monitoring | Configuration validation is relevant because the displayed pressure differed from the remembered prescription. |
| [RC-CPAP-002-02](../risk-management.md#risk-cpap-002) | protective-measure | Configuration validation and out-of-range handling | Configuration validation is relevant because the displayed pressure differed from the remembered prescription. |

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
| Complaint source | Synthetic seed CPAP-008 |
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
- [Synthetic risk register](../risk-management.md#risk-cpap-002)

## Related complaints

- [CPAP-006 — Aerophagia and Abdominal Bloating](06-aerophagia-and-bloating.md) — shared primary risk `RISK-CPAP-002`
- [CPAP-016 — Pressure Change After Software Update](16-pressure-change-after-software-update.md) — shared `technical-pressure-setting`
