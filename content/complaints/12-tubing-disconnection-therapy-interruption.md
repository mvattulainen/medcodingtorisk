---
title: "Complaint 012 — Tubing Disconnection and Therapy Interruption"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-daytime-somnolence
  - medical-sleep-disruption
  - technical-therapy-interruption
  - technical-tubing-disconnection
  - context-therapy-interruption
complaint_id: "CPAP-012"
device_family: "CPAP"
synthetic: true
coding_status: "reviewed-demo"
icd11_release: "2026-01"
imdrf_release: "2026"
snomed_ct_used: false
primary_risk_item: "RISK-CPAP-001"
risk_link_status: "proposed"
risk_review_status: "not-reviewed"
quartz-properties: false
---

# Complaint 012 — Tubing Disconnection and Therapy Interruption

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> The patient woke during the night and found that the air tubing had disconnected from the device outlet. The machine continued running, but no airflow was reaching the mask. The patient reported poor sleep and increased daytime tiredness the next day. There was no fall, injury, or emergency care. The connector was reattached and appeared loose when gently pulled.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 4 |
| Accepted codes | 4 |
| Candidate codes | 0 |
| SNOMED CT fallback | No |
| Proposed risk links | 1 |
| Primary risk-link confidence | 0.96 · Strong |
| Risk-control review cues | 2 |
| Human-review flags | 0 |

## Complaint-to-risk chain

<div class="trace-chain">
<a class="trace-node matched" href="#evidence-spans"><b>tubing disconnection</b><span>Matched device evidence</span></a>
<a class="trace-node matched" href="#risk-management-linkage"><b>Airflow is absent or therapy cannot be started</b><span>Matched sequence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-001"><b>User reliant on PAP is asleep or attempting sleep without intended therapy</b><span>Matched hazardous situation</span></a>
<a class="trace-node matched" href="#accepted-coded-terms"><b>sleep disturbance</b><span>Matched health evidence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-001"><b>RISK-CPAP-001</b><span>0.96 · Strong risk link</span></a>
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “air tubing had disconnected from the device outlet” | device_problem | present | tubing disconnection | IMDRF A |
| “no airflow was reaching the mask” | health_impact | present | complete therapy interruption | IMDRF F |
| “poor sleep” | clinical_sign_or_symptom | present | sleep disturbance | WHO ICD-11 / IMDRF E |
| “increased daytime tiredness” | clinical_sign_or_symptom | present | fatigue | WHO ICD-11 / IMDRF E |

## Accepted coded terms

### Disconnection

- **Evidence:** “air tubing had disconnected from the device outlet”
- **Terminology:** IMDRF AET, Annex A
- **Code:** `A1203`
- **Preferred title:** Disconnection
- **Confidence:** <span class="confidence strong">0.97 · Strong terminology match</span>
- **Why selected:** The tubing connection separated during use.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Canceled/Aborted Treatment/Therapy

- **Evidence:** “no airflow was reaching the mask”
- **Terminology:** IMDRF AET, Annex F
- **Code:** `F31`
- **Preferred title:** Canceled/Aborted Treatment/Therapy
- **Confidence:** <span class="confidence strong">0.90 · Strong terminology match</span>
- **Why selected:** Treatment was effectively aborted while the tubing was disconnected.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Sleep disturbance, not elsewhere classified

- **Evidence:** “poor sleep”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `MG41`
- **Preferred title:** Sleep disturbance, not elsewhere classified
- **Confidence:** <span class="confidence good">0.88 · Good terminology match</span>
- **Why selected:** The symptom is explicit without asserting a sleep disorder.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/1207299072)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Fatigue

- **Evidence:** “increased daytime tiredness”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `MG22`
- **Preferred title:** Fatigue
- **Confidence:** <span class="confidence good">0.85 · Good terminology match</span>
- **Why selected:** Fatigue is a conservative representation of next-day tiredness.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/1109546957)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending


## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
| — | No additional candidate above 0.50 | — | — | — | The accepted term had no useful alternative in the pinned search result. |



## Uncoded or ambiguous statements

- No unresolved evidence statements.

## Follow-up questions

1. Was the connector damaged or out of specification?
2. Was a disconnect alarm generated?
3. How long was therapy interrupted?

## Tags

### Medical

<span class="tag-medical">medical-daytime-somnolence</span> <span class="tag-medical">medical-sleep-disruption</span>

### Technical

<span class="tag-technical">technical-therapy-interruption</span> <span class="tag-technical">technical-tubing-disconnection</span>

## Regulatory review cues

- Therapy interrupted
- Patient effect present
- Possible risk-control concern
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-001 — Loss or Interruption of Therapy](../risk-management.md#risk-cpap-001)
- **Classification:** `consistent-with-known-risk`
- **Link confidence:** <span class="confidence strong">0.96 · Strong risk link</span>
- **Evidence used:** “air tubing had disconnected from the device outlet”; “no airflow was reaching the mask”; “poor sleep”; “increased daytime tiredness”
- **Matched chain:** device-problem → component → sequence-of-events → hazardous-situation → harm → risk-control
- **Unmatched or uncertain elements:** The duration of the interruption and alarm behavior are not documented.
- **Why linked:** Tubing disconnection caused absent airflow and sleep-related effects, matching loss of therapy.
- **Review status:** `not-reviewed`
- **Risk-file version:** 1.0; source hash `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Secondary risk candidates

- No secondary risk candidate above the publication threshold.

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
| [RC-CPAP-001-01](../risk-management.md#risk-cpap-001) | inherent-safety | Connection and retention features resist unintended separation | Connector retention is directly relevant because the reattached connector appeared loose. |
| [RC-CPAP-001-03](../risk-management.md#risk-cpap-001) | protective-measure | Therapy interruption and disconnect notification | Connector retention is directly relevant because the reattached connector appeared loose. |

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
| Complaint source | Synthetic seed CPAP-012 |
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
- [Synthetic risk register](../risk-management.md#risk-cpap-001)

## Related complaints

- [CPAP-013 — Power Loss and Shortness of Breath](13-power-loss-shortness-of-breath.md) — shared primary risk `RISK-CPAP-001`
- [CPAP-020 — Headgear Strap Break With No Injury](20-headgear-strap-break-no-injury.md) — shared primary risk `RISK-CPAP-001`
- [CPAP-015 — Inaudible Alarm](15-inaudible-alarm.md) — shared `technical-therapy-interruption`, `technical-tubing-disconnection`
