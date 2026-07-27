---
title: "Complaint 015 — Inaudible Alarm"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-headache
  - technical-alarm-inaudible
  - technical-therapy-interruption
  - technical-tubing-disconnection
  - context-therapy-interruption
complaint_id: "CPAP-015"
device_family: "CPAP"
synthetic: true
coding_status: "reviewed-demo"
icd11_release: "2026-01"
imdrf_release: "2026"
snomed_ct_used: false
primary_risk_item: "RISK-CPAP-008"
risk_link_status: "proposed"
risk_review_status: "not-reviewed"
quartz-properties: false
---

# Complaint 015 — Inaudible Alarm

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> The caregiver stated that the mask became disconnected from the tubing, but the expected disconnect alarm was not heard from the next room. The patient continued sleeping and later reported a headache on waking. No oxygen saturation measurement was available, and no medical treatment was sought. The alarm volume setting and whether an alarm icon appeared on the display were not documented.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 4 |
| Accepted codes | 3 |
| Candidate codes | 0 |
| SNOMED CT fallback | No |
| Proposed risk links | 2 |
| Primary risk-link confidence | 0.93 · Strong |
| Risk-control review cues | 3 |
| Human-review flags | 1 |

## Complaint-to-risk chain

<div class="trace-chain">
<a class="trace-node matched" href="#evidence-spans"><b>tubing disconnection</b><span>Matched device evidence</span></a>
<a class="trace-node matched" href="#risk-management-linkage"><b>Audible or visual notification is absent, insufficient, or not perceived</b><span>Matched sequence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-008"><b>Underlying hazardous situation continues without timely user or caregiver response</b><span>Matched hazardous situation</span></a>
<a class="trace-node matched" href="#accepted-coded-terms"><b>headache</b><span>Matched health evidence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-008"><b>RISK-CPAP-008</b><span>0.93 · Strong risk link</span></a>
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “mask became disconnected from the tubing” | device_problem | present | tubing disconnection | IMDRF A |
| “expected disconnect alarm was not heard” | device_problem | present | no audible alarm | IMDRF A |
| “headache on waking” | clinical_sign_or_symptom | present | headache | WHO ICD-11 / IMDRF E |
| “No oxygen saturation measurement was available” | investigation_statement | negated | oxygen saturation unavailable | IMDRF AET |

## Accepted coded terms

### Disconnection

- **Evidence:** “mask became disconnected from the tubing”
- **Terminology:** IMDRF AET, Annex A
- **Code:** `A1203`
- **Preferred title:** Disconnection
- **Confidence:** <span class="confidence strong">0.96 · Strong terminology match</span>
- **Why selected:** The mask and tubing connection separated.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### No Audible Alarm

- **Evidence:** “expected disconnect alarm was not heard”
- **Terminology:** IMDRF AET, Annex A
- **Code:** `A160102`
- **Preferred title:** No Audible Alarm
- **Confidence:** <span class="confidence strong">0.92 · Strong terminology match</span>
- **Why selected:** No audible alarm is the exact official term, while audibility at the device remains to be checked.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Headache, not elsewhere classified

- **Evidence:** “headache on waking”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `MB4D`
- **Preferred title:** Headache, not elsewhere classified
- **Confidence:** <span class="confidence strong">0.93 · Strong terminology match</span>
- **Why selected:** The symptom code avoids inferring hypoxaemia.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/1405405864)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending


## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
| — | No additional candidate above 0.50 | — | — | — | The accepted term had no useful alternative in the pinned search result. |



## Uncoded or ambiguous statements

- **“No oxygen saturation measurement was available”** — Hypoxaemia must not be inferred.

## Follow-up questions

1. Was an alarm generated at the device and what was its volume?
2. Did a visual alarm icon appear?
3. How long was the mask disconnected?

## Tags

### Medical

<span class="tag-medical">medical-headache</span>

### Technical

<span class="tag-technical">technical-alarm-inaudible</span> <span class="tag-technical">technical-therapy-interruption</span> <span class="tag-technical">technical-tubing-disconnection</span>

## Regulatory review cues

- Therapy interrupted
- Possible risk-control concern
- Important information missing
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-008 — Alarm or Notification Not Perceived](../risk-management.md#risk-cpap-008)
- **Classification:** `possible-risk-control-concern`
- **Link confidence:** <span class="confidence strong">0.93 · Strong risk link</span>
- **Evidence used:** “mask became disconnected from the tubing”; “expected disconnect alarm was not heard”; “headache on waking”; “No oxygen saturation measurement was available”
- **Matched chain:** device-problem → sequence-of-events → hazardous-situation → harm → risk-control
- **Unmatched or uncertain elements:** Alarm generation, volume, and visual indication were not tested.
- **Why linked:** A disconnect occurred and the expected audible notification was not perceived, delaying awareness.
- **Review status:** `not-reviewed`
- **Risk-file version:** 1.0; source hash `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Secondary risk candidates

- [RISK-CPAP-001](../risk-management.md#risk-cpap-001) — `consistent-with-known-risk`; 0.84 · Good. The tubing disconnect also represents loss of therapy with morning headache.

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
| [RC-CPAP-008-01](../risk-management.md#risk-cpap-008) | protective-measure | Alarm audibility and priority design | The expected alarm was not perceived; settings and alarm generation require human review. |
| [RC-CPAP-008-02](../risk-management.md#risk-cpap-008) | protective-measure | Complementary visual notification | The expected alarm was not perceived; settings and alarm generation require human review. |
| [RC-CPAP-008-03](../risk-management.md#risk-cpap-008) | information-for-safety | Alarm-volume, placement, and verification instructions | The expected alarm was not perceived; settings and alarm generation require human review. |

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
| Complaint source | Synthetic seed CPAP-015 |
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
- [Synthetic risk register](../risk-management.md#risk-cpap-008)

## Related complaints

- [CPAP-012 — Tubing Disconnection and Therapy Interruption](12-tubing-disconnection-therapy-interruption.md) — shared `technical-therapy-interruption`, `technical-tubing-disconnection`
- [CPAP-007 — Low Pressure, Morning Headache, and Sleepiness](07-low-pressure-morning-headache.md) — shared `medical-headache`
- [CPAP-013 — Power Loss and Shortness of Breath](13-power-loss-shortness-of-breath.md) — shared `technical-therapy-interruption`
