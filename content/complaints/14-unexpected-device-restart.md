---
title: "Complaint 014 — Unexpected Device Restart"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-no-injury-reported
  - technical-device-restart
  - technical-therapy-interruption
  - context-therapy-interruption
complaint_id: "CPAP-014"
device_family: "CPAP"
synthetic: true
coding_status: "reviewed-demo"
icd11_release: "2026-01"
imdrf_release: "2026"
snomed_ct_used: false
primary_risk_item: "RISK-CPAP-010"
risk_link_status: "proposed"
risk_review_status: "not-reviewed"
quartz-properties: false
---

# Complaint 014 — Unexpected Device Restart

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> The user reported that the CPAP machine restarted twice during one night without a household power outage. Each restart stopped airflow for less than one minute. The user woke once but reported no shortness of breath, injury, or need for medical care. The display showed a startup screen and then resumed the prescribed therapy. The device software version was not recorded in the complaint.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 4 |
| Accepted codes | 3 |
| Candidate codes | 0 |
| SNOMED CT fallback | No |
| Proposed risk links | 2 |
| Primary risk-link confidence | 0.88 · Good |
| Risk-control review cues | 2 |
| Human-review flags | 1 |

## Complaint-to-risk chain

<div class="trace-chain">
<a class="trace-node matched" href="#evidence-spans"><b>unexpected shutdown and restart</b><span>Matched device evidence</span></a>
<a class="trace-node matched" href="#risk-management-linkage"><b>Device restarts or therapy behavior differs from the intended configuration</b><span>Matched sequence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-010"><b>User receives interrupted or potentially incorrect therapy following software/configuration behavior</b><span>Matched hazardous situation</span></a>
<a class="trace-node uncertain" href="#accepted-coded-terms"><b>No injury reported</b><span>No matched harm</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-010"><b>RISK-CPAP-010</b><span>0.88 · Good risk link</span></a>
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “CPAP machine restarted twice” | device_problem | present | unexpected shutdown and restart | IMDRF A |
| “stopped airflow for less than one minute” | health_impact | present | brief therapy interruption | IMDRF F |
| “no shortness of breath, injury, or need for medical care” | no_harm_statement | present | no health consequences | IMDRF F |
| “software version was not recorded” | investigation_statement | negated | software version missing | IMDRF AET |

## Accepted coded terms

### Unexpected Shutdown

- **Evidence:** “CPAP machine restarted twice”
- **Terminology:** IMDRF AET, Annex A
- **Code:** `A0719`
- **Preferred title:** Unexpected Shutdown
- **Confidence:** <span class="confidence strong">0.92 · Strong terminology match</span>
- **Why selected:** The device unexpectedly stopped and restarted during therapy.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Canceled/Aborted Treatment/Therapy

- **Evidence:** “stopped airflow for less than one minute”
- **Terminology:** IMDRF AET, Annex F
- **Code:** `F31`
- **Preferred title:** Canceled/Aborted Treatment/Therapy
- **Confidence:** <span class="confidence good">0.86 · Good terminology match</span>
- **Why selected:** Treatment was briefly interrupted by each restart.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### No Health Consequences or Impact

- **Evidence:** “no shortness of breath, injury, or need for medical care”
- **Terminology:** IMDRF AET, Annex F
- **Code:** `F26`
- **Preferred title:** No Health Consequences or Impact
- **Confidence:** <span class="confidence strong">0.96 · Strong terminology match</span>
- **Why selected:** The complaint explicitly reports no symptom, injury, or medical intervention.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending


## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
| — | No additional candidate above 0.50 | — | — | — | The accepted term had no useful alternative in the pinned search result. |



## Uncoded or ambiguous statements

- **“software version was not recorded”** — Software involvement remains unresolved.

## Follow-up questions

1. What software version and device log entries were present?
2. Was the device connected to stable mains power?
3. Did the restart recur on later nights?

## Tags

### Medical

<span class="tag-medical">medical-no-injury-reported</span>

### Technical

<span class="tag-technical">technical-device-restart</span> <span class="tag-technical">technical-therapy-interruption</span>

## Regulatory review cues

- Device problem without reported injury
- Therapy interrupted
- Important information missing
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-010 — Software, Configuration, or Restart Anomaly](../risk-management.md#risk-cpap-010)
- **Classification:** `variation-of-known-sequence`
- **Link confidence:** <span class="confidence good">0.88 · Good risk link</span>
- **Evidence used:** “CPAP machine restarted twice”; “stopped airflow for less than one minute”; “software version was not recorded”
- **Matched chain:** device-problem → sequence-of-events → hazardous-situation → risk-control
- **Unmatched or uncertain elements:** No software version, logs, or root-cause evidence are available.
- **Why linked:** Unexpected restart behavior aligns with the anomaly risk chain without proving a software cause.
- **Review status:** `not-reviewed`
- **Risk-file version:** 1.0; source hash `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Secondary risk candidates

- [RISK-CPAP-001](../risk-management.md#risk-cpap-001) — `consistent-with-known-risk`; 0.76 · Plausible. Each restart briefly interrupted airflow and therefore also maps to loss of therapy.

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
| [RC-CPAP-010-01](../risk-management.md#risk-cpap-010) | inherent-safety | Software lifecycle controls and update validation | Recovery controls are relevant because the device resumed therapy, but the initiating anomaly is unknown. |
| [RC-CPAP-010-03](../risk-management.md#risk-cpap-010) | protective-measure | Safe recovery and rollback behavior | Recovery controls are relevant because the device resumed therapy, but the initiating anomaly is unknown. |

> [!question] Human risk-management review
> These are review cues only. The system does not claim that a control failed, determine whether residual risk changed, or modify the synthetic risk register.

### Risk-file comparison

| Question | Result |
|---|---|
| Observed harm anticipated in risk file? | Not established or no harm reported |
| Device problem anticipated? | Yes — matched device-problem evidence |
| New sequence suggested? | Possible — human review requested |
| Possible control concern? | Review requested; not concluded |
| Automatic risk-file change | Prohibited |

## Provenance

| Item | Value |
|---|---|
| Complaint source | Synthetic seed CPAP-014 |
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
- [Synthetic risk register](../risk-management.md#risk-cpap-010)

## Related complaints

- [CPAP-016 — Pressure Change After Software Update](16-pressure-change-after-software-update.md) — shared primary risk `RISK-CPAP-010`
- [CPAP-020 — Headgear Strap Break With No Injury](20-headgear-strap-break-no-injury.md) — shared `medical-no-injury-reported`, `technical-therapy-interruption`
- [CPAP-012 — Tubing Disconnection and Therapy Interruption](12-tubing-disconnection-therapy-interruption.md) — shared `technical-therapy-interruption`
