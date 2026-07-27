---
title: "Complaint 020 — Headgear Strap Break With No Injury"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-no-injury-reported
  - technical-headgear
  - technical-strap-break
  - technical-therapy-interruption
  - context-therapy-interruption
complaint_id: "CPAP-020"
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

# Complaint 020 — Headgear Strap Break With No Injury

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> While the patient was putting on the mask, one of the headgear straps tore near the attachment point. The mask could not be secured and CPAP therapy was not started that night. The patient explicitly reported no facial injury, pain, or other symptoms. The headgear had been used daily for approximately one year and showed visible wear.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 4 |
| Accepted codes | 4 |
| Candidate codes | 0 |
| SNOMED CT fallback | No |
| Proposed risk links | 2 |
| Primary risk-link confidence | 0.91 · Strong |
| Risk-control review cues | 2 |
| Human-review flags | 0 |

## Complaint-to-risk chain

<div class="trace-chain">
<a class="trace-node matched" href="#evidence-spans"><b>material split cut or torn</b><span>Matched device evidence</span></a>
<a class="trace-node matched" href="#risk-management-linkage"><b>Airflow is absent or therapy cannot be started</b><span>Matched sequence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-001"><b>User reliant on PAP is asleep or attempting sleep without intended therapy</b><span>Matched hazardous situation</span></a>
<a class="trace-node uncertain" href="#accepted-coded-terms"><b>No injury reported</b><span>No matched harm</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-001"><b>RISK-CPAP-001</b><span>0.91 · Strong risk link</span></a>
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “headgear straps tore near the attachment point” | device_problem | present | material split cut or torn | IMDRF A |
| “mask could not be secured” | device_component | present | mask retention component unavailable | IMDRF G |
| “therapy was not started that night” | health_impact | present | therapy aborted | IMDRF F |
| “no facial injury, pain, or other symptoms” | no_harm_statement | present | no health consequences | IMDRF F |

## Accepted coded terms

### Material Split, Cut or Torn

- **Evidence:** “headgear straps tore near the attachment point”
- **Terminology:** IMDRF AET, Annex A
- **Code:** `A0414`
- **Preferred title:** Material Split, Cut or Torn
- **Confidence:** <span class="confidence strong">0.96 · Strong terminology match</span>
- **Why selected:** Material Split, Cut or Torn directly represents the strap tear.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Mask

- **Evidence:** “mask could not be secured”
- **Terminology:** IMDRF AET, Annex G
- **Code:** `G04086`
- **Preferred title:** Mask
- **Confidence:** <span class="confidence good">0.82 · Good terminology match</span>
- **Why selected:** Mask is the closest official component; the terminology has no CPAP headgear term.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Canceled/Aborted Treatment/Therapy

- **Evidence:** “therapy was not started that night”
- **Terminology:** IMDRF AET, Annex F
- **Code:** `F31`
- **Preferred title:** Canceled/Aborted Treatment/Therapy
- **Confidence:** <span class="confidence strong">0.94 · Strong terminology match</span>
- **Why selected:** The scheduled therapy session was aborted.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### No Health Consequences or Impact

- **Evidence:** “no facial injury, pain, or other symptoms”
- **Terminology:** IMDRF AET, Annex F
- **Code:** `F26`
- **Preferred title:** No Health Consequences or Impact
- **Confidence:** <span class="confidence strong">0.97 · Strong terminology match</span>
- **Why selected:** The complaint explicitly reports no injury or symptoms.
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

1. Was the strap material or attachment point inspected?
2. Had replacement intervals or wear checks been followed?
3. Was an alternative interface available that night?

## Tags

### Medical

<span class="tag-medical">medical-no-injury-reported</span>

### Technical

<span class="tag-technical">technical-headgear</span> <span class="tag-technical">technical-strap-break</span> <span class="tag-technical">technical-therapy-interruption</span>

## Regulatory review cues

- Device problem without reported injury
- Therapy interrupted
- Maintenance relevance review
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-001 — Loss or Interruption of Therapy](../risk-management.md#risk-cpap-001)
- **Classification:** `consistent-with-known-risk`
- **Link confidence:** <span class="confidence strong">0.91 · Strong risk link</span>
- **Evidence used:** “headgear straps tore near the attachment point”; “mask could not be secured”; “therapy was not started that night”; “no facial injury, pain, or other symptoms”
- **Matched chain:** device-problem → component → sequence-of-events → hazardous-situation → risk-control
- **Unmatched or uncertain elements:** No injury occurred and no therapy-related symptom was reported.
- **Why linked:** A retention component broke and prevented therapy from starting, matching loss of therapy.
- **Review status:** `not-reviewed`
- **Risk-file version:** 1.0; source hash `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Secondary risk candidates

- [RISK-CPAP-005](../risk-management.md#risk-cpap-005) — `insufficient-information`; 0.55 · Weak. The component overlaps with the contact-injury item, but the hazardous situation and harm do not.

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
| [RC-CPAP-001-01](../risk-management.md#risk-cpap-001) | inherent-safety | Connection and retention features resist unintended separation | Visible wear makes inspection and replacement guidance relevant; no conclusion about compliance is made. |
| [RC-CPAP-001-04](../risk-management.md#risk-cpap-001) | information-for-safety | Instructions for connections, wear checks, recovery, and backup-power planning | Visible wear makes inspection and replacement guidance relevant; no conclusion about compliance is made. |

> [!question] Human risk-management review
> These are review cues only. The system does not claim that a control failed, determine whether residual risk changed, or modify the synthetic risk register.

### Risk-file comparison

| Question | Result |
|---|---|
| Observed harm anticipated in risk file? | Not established or no harm reported |
| Device problem anticipated? | Yes — matched device-problem evidence |
| New sequence suggested? | No clear new sequence |
| Possible control concern? | Review requested; not concluded |
| Automatic risk-file change | Prohibited |

## Provenance

| Item | Value |
|---|---|
| Complaint source | Synthetic seed CPAP-020 |
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
- [CPAP-013 — Power Loss and Shortness of Breath](13-power-loss-shortness-of-breath.md) — shared primary risk `RISK-CPAP-001`
- [CPAP-014 — Unexpected Device Restart](14-unexpected-device-restart.md) — shared `medical-no-injury-reported`, `technical-therapy-interruption`
