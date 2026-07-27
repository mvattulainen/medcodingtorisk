---
title: "Complaint 016 — Pressure Change After Software Update"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-shortness-of-breath
  - technical-firmware-update
  - technical-pressure-setting
  - technical-therapy-interruption
  - context-therapy-interruption
  - review-snomed-fallback
complaint_id: "CPAP-016"
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

# Complaint 016 — Pressure Change After Software Update

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> Following a software update, the user stated that the machine felt different and displayed a pressure range that did not match the range remembered from the prior week. The user experienced difficulty exhaling and stopped therapy after approximately twenty minutes. There was no chest pain, fainting, or medical treatment. The clinic prescription and pre-update settings were not available for comparison.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 4 |
| Accepted codes | 2 |
| Candidate codes | 4 |
| SNOMED CT fallback | Human review queued |
| Proposed risk links | 3 |
| Primary risk-link confidence | 0.83 · Good |
| Risk-control review cues | 3 |
| Human-review flags | 2 |

## Complaint-to-risk chain

<div class="trace-chain">
<a class="trace-node matched" href="#evidence-spans"><b>application program version or upgrade</b><span>Matched device evidence</span></a>
<a class="trace-node matched" href="#risk-management-linkage"><b>Device restarts or therapy behavior differs from the intended configuration</b><span>Matched sequence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-010"><b>User receives interrupted or potentially incorrect therapy following software/configuration behavior</b><span>Matched hazardous situation</span></a>
<a class="trace-node matched" href="#accepted-coded-terms"><b>difficulty exhaling</b><span>Matched health evidence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-010"><b>RISK-CPAP-010</b><span>0.83 · Good risk link</span></a>
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “Following a software update” | device_problem | present | application program version or upgrade | IMDRF A |
| “displayed a pressure range that did not match the range remembered” | device_setting | suspected | suspected pressure setting change | IMDRF AET |
| “difficulty exhaling” | clinical_sign_or_symptom | present | difficulty exhaling | WHO ICD-11 / IMDRF E |
| “stopped therapy after approximately twenty minutes” | health_impact | present | therapy discontinued | IMDRF F |

## Accepted coded terms

### Application Program Version or Upgrade Problem

- **Evidence:** “Following a software update”
- **Terminology:** IMDRF AET, Annex A
- **Code:** `A110206`
- **Preferred title:** Application Program Version or Upgrade Problem
- **Confidence:** <span class="confidence good">0.82 · Good terminology match</span>
- **Why selected:** An update occurred; the code identifies the software-upgrade context without asserting causality.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Canceled/Aborted Treatment/Therapy

- **Evidence:** “stopped therapy after approximately twenty minutes”
- **Terminology:** IMDRF AET, Annex F
- **Code:** `F31`
- **Preferred title:** Canceled/Aborted Treatment/Therapy
- **Confidence:** <span class="confidence strong">0.90 · Strong terminology match</span>
- **Why selected:** The treatment session was aborted.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending


## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
| “displayed a pressure range that did not match the range remembered” | Use of Incorrect Control/Treatment Settings | IMDRF AET A | `A2302` | 0.67 · Plausible | Incorrect settings are plausible, but neither prescription nor prior settings are available. |
| “displayed a pressure range that did not match the range remembered” | Increase in Pressure | IMDRF AET A | `A141102` | 0.60 · Weak | An increase is possible, but direction is not stated. |
| “displayed a pressure range that did not match the range remembered” | Decrease in Pressure | IMDRF AET A | `A141101` | 0.58 · Weak | A decrease is possible, but direction is not stated. |
| “difficulty exhaling” | Dyspnoea | WHO ICD-11 MMS | `MD11.5` | 0.65 · Plausible | Dyspnoea is plausible but broader than the specific expiratory difficulty. |

> [!question] Human selection may be required
> Candidate terms remain unaccepted until a qualified reviewer confirms that the available evidence supports them.

## Uncoded or ambiguous statements

- **“displayed a pressure range that did not match the range remembered”** — Human selection required: the pressure difference and its direction are unverified.
- **“difficulty exhaling”** — No defensible ICD-11 code selected; a human-reviewed SNOMED search is queued.

## Follow-up questions

1. What were the pre-update, post-update, and prescribed settings?
2. What software version and update package were installed?
3. Did the expiratory difficulty recur after configuration review?

## Tags

### Medical

<span class="tag-medical">medical-shortness-of-breath</span>

### Technical

<span class="tag-technical">technical-firmware-update</span> <span class="tag-technical">technical-pressure-setting</span> <span class="tag-technical">technical-therapy-interruption</span>

## Regulatory review cues

- Therapy interrupted
- Possible variation of known sequence
- Possible risk-file coverage gap
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-010 — Software, Configuration, or Restart Anomaly](../risk-management.md#risk-cpap-010)
- **Classification:** `variation-of-known-sequence`
- **Link confidence:** <span class="confidence good">0.83 · Good risk link</span>
- **Evidence used:** “Following a software update”; “displayed a pressure range that did not match the range remembered”; “difficulty exhaling”; “stopped therapy after approximately twenty minutes”
- **Matched chain:** device-problem → sequence-of-events → hazardous-situation → harm → risk-control
- **Unmatched or uncertain elements:** Causality, setting direction, and prescription comparison are unavailable.
- **Why linked:** A perceived pressure-range change after an update and aborted therapy fit a software/configuration review scenario.
- **Review status:** `not-reviewed`
- **Risk-file version:** 1.0; source hash `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Secondary risk candidates

- [RISK-CPAP-002](../risk-management.md#risk-cpap-002) — `possible-risk-file-coverage-gap`; 0.61 · Weak. Part of the complaint could fit excessive pressure, but the current evidence cannot distinguish high from low pressure.
- [RISK-CPAP-003](../risk-management.md#risk-cpap-003) — `insufficient-information`; 0.59 · Weak. Insufficient pressure remains an alternative only because the direction of change is unknown.

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
| [RC-CPAP-010-01](../risk-management.md#risk-cpap-010) | inherent-safety | Software lifecycle controls and update validation | Update validation and configuration integrity are relevant, but no software defect is established. |
| [RC-CPAP-010-02](../risk-management.md#risk-cpap-010) | protective-measure | Configuration integrity checks | Update validation and configuration integrity are relevant, but no software defect is established. |
| [RC-CPAP-010-04](../risk-management.md#risk-cpap-010) | information-for-safety | Update, verification, and support instructions | Update validation and configuration integrity are relevant, but no software defect is established. |

> [!question] Human risk-management review
> These are review cues only. The system does not claim that a control failed, determine whether residual risk changed, or modify the synthetic risk register.

### Risk-file comparison

| Question | Result |
|---|---|
| Observed harm anticipated in risk file? | Yes — matched health-effect evidence |
| Device problem anticipated? | Yes — matched device-problem evidence |
| New sequence suggested? | Possible — human review requested |
| Possible control concern? | Review requested; not concluded |
| Automatic risk-file change | Prohibited |

## Provenance

| Item | Value |
|---|---|
| Complaint source | Synthetic seed CPAP-016 |
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
- [Synthetic risk register](../risk-management.md#risk-cpap-010)

## Related complaints

- [CPAP-014 — Unexpected Device Restart](14-unexpected-device-restart.md) — shared primary risk `RISK-CPAP-010`
- [CPAP-013 — Power Loss and Shortness of Breath](13-power-loss-shortness-of-breath.md) — shared `medical-shortness-of-breath`, `technical-therapy-interruption`
- [CPAP-006 — Aerophagia and Abdominal Bloating](06-aerophagia-and-bloating.md) — shared `technical-pressure-setting`
