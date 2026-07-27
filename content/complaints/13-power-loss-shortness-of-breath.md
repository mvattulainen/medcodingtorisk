---
title: "Complaint 013 — Power Loss and Shortness of Breath"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-shortness-of-breath
  - technical-power-loss
  - technical-therapy-interruption
  - context-therapy-interruption
complaint_id: "CPAP-013"
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

# Complaint 013 — Power Loss and Shortness of Breath

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> A brief household power interruption stopped the CPAP machine during sleep. The patient awoke feeling short of breath and removed the mask. Breathing returned to the usual baseline after sitting upright, and no medical care was sought. The device restarted normally when power returned. The complaint did not indicate an internal device fault or a backup battery.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 4 |
| Accepted codes | 2 |
| Candidate codes | 0 |
| SNOMED CT fallback | No |
| Proposed risk links | 1 |
| Primary risk-link confidence | 0.93 · Strong |
| Risk-control review cues | 2 |
| Human-review flags | 2 |

## Complaint-to-risk chain

<div class="trace-chain">
<a class="trace-node matched" href="#evidence-spans"><b>internal device fault</b><span>Matched device evidence</span></a>
<a class="trace-node matched" href="#risk-management-linkage"><b>Airflow is absent or therapy cannot be started</b><span>Matched sequence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-001"><b>User reliant on PAP is asleep or attempting sleep without intended therapy</b><span>Matched hazardous situation</span></a>
<a class="trace-node matched" href="#accepted-coded-terms"><b>dyspnoea</b><span>Matched health evidence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-001"><b>RISK-CPAP-001</b><span>0.93 · Strong risk link</span></a>
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “household power interruption stopped the CPAP machine” | environmental_factor | present | external complete loss of power | IMDRF AET |
| “feeling short of breath” | clinical_sign_or_symptom | present | dyspnoea | WHO ICD-11 / IMDRF E |
| “device restarted normally when power returned” | investigation_statement | present | normal restart after power restoration | IMDRF AET |
| “did not indicate an internal device fault” | device_problem | negated | internal device fault | IMDRF A |

## Accepted coded terms

### Complete Loss of Power

- **Evidence:** “household power interruption stopped the CPAP machine”
- **Terminology:** IMDRF AET, Annex A
- **Code:** `A070801`
- **Preferred title:** Complete Loss of Power
- **Confidence:** <span class="confidence good">0.86 · Good terminology match</span>
- **Why selected:** Complete loss of device power occurred, with external household origin preserved in context.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Dyspnoea

- **Evidence:** “feeling short of breath”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `MD11.5`
- **Preferred title:** Dyspnoea
- **Confidence:** <span class="confidence strong">0.95 · Strong terminology match</span>
- **Why selected:** Dyspnoea directly represents the explicit symptom.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/960305085)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending


## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
| — | No additional candidate above 0.50 | — | — | — | The accepted term had no useful alternative in the pinned search result. |



## Uncoded or ambiguous statements

- **“device restarted normally when power returned”** — No restart malfunction is coded.
- **“did not indicate an internal device fault”** — An internal fault is explicitly not indicated.

## Follow-up questions

1. Was any power-loss alarm or notification available?
2. How long did the household interruption last?
3. Was backup power prescribed or discussed?

## Tags

### Medical

<span class="tag-medical">medical-shortness-of-breath</span>

### Technical

<span class="tag-technical">technical-power-loss</span> <span class="tag-technical">technical-therapy-interruption</span>

## Regulatory review cues

- Therapy interrupted
- Patient effect present
- No internal device fault established
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-001 — Loss or Interruption of Therapy](../risk-management.md#risk-cpap-001)
- **Classification:** `consistent-with-known-risk`
- **Link confidence:** <span class="confidence strong">0.93 · Strong risk link</span>
- **Evidence used:** “household power interruption stopped the CPAP machine”; “feeling short of breath”; “device restarted normally when power returned”; “did not indicate an internal device fault”
- **Matched chain:** device-problem → sequence-of-events → hazardous-situation → harm → risk-control
- **Unmatched or uncertain elements:** The availability or expectation of backup power is not documented.
- **Why linked:** External power loss interrupted therapy and was followed by transient dyspnoea.
- **Review status:** `not-reviewed`
- **Risk-file version:** 1.0; source hash `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Secondary risk candidates

- No secondary risk candidate above the publication threshold.

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
| [RC-CPAP-001-02](../risk-management.md#risk-cpap-001) | protective-measure | Defined power-loss and automatic-recovery behavior | Power-loss behavior and backup-power information are relevant; the device restarted normally. |
| [RC-CPAP-001-04](../risk-management.md#risk-cpap-001) | information-for-safety | Instructions for connections, wear checks, recovery, and backup-power planning | Power-loss behavior and backup-power information are relevant; the device restarted normally. |

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
| Complaint source | Synthetic seed CPAP-013 |
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

- [CPAP-012 — Tubing Disconnection and Therapy Interruption](12-tubing-disconnection-therapy-interruption.md) — shared primary risk `RISK-CPAP-001`
- [CPAP-020 — Headgear Strap Break With No Injury](20-headgear-strap-break-no-injury.md) — shared primary risk `RISK-CPAP-001`
- [CPAP-016 — Pressure Change After Software Update](16-pressure-change-after-software-update.md) — shared `medical-shortness-of-breath`, `technical-therapy-interruption`
