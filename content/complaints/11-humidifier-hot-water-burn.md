---
title: "Complaint 011 — Hot Water Spill and Minor Burn"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-burn
  - medical-skin-irritation
  - technical-humidifier
  - technical-water-leak
complaint_id: "CPAP-011"
device_family: "CPAP"
synthetic: true
coding_status: "reviewed-demo"
icd11_release: "2026-01"
imdrf_release: "2026"
snomed_ct_used: false
primary_risk_item: "RISK-CPAP-004"
risk_link_status: "proposed"
risk_review_status: "not-reviewed"
quartz-properties: false
---

# Complaint 011 — Hot Water Spill and Minor Burn

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> When the patient removed the humidifier chamber shortly after use, hot water leaked from the chamber and spilled onto the hand. The patient reported redness and burning pain lasting about one hour. The skin did not blister, and no medical treatment was obtained. Inspection by the user showed that the chamber lid did not appear fully closed, but the cause of the leak was not confirmed.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 4 |
| Accepted codes | 3 |
| Candidate codes | 0 |
| SNOMED CT fallback | No |
| Proposed risk links | 1 |
| Primary risk-link confidence | 0.94 · Strong |
| Risk-control review cues | 3 |
| Human-review flags | 1 |

## Complaint-to-risk chain

<div class="trace-chain">
<a class="trace-node matched" href="#evidence-spans"><b>hot water leak from humidifier</b><span>Matched device evidence</span></a>
<a class="trace-node matched" href="#risk-management-linkage"><b>Water contacts the user during handling</b><span>Matched sequence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-004"><b>User skin contacts heated chamber water</b><span>Matched hazardous situation</span></a>
<a class="trace-node matched" href="#accepted-coded-terms"><b>minor burn of hand</b><span>Matched health evidence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-004"><b>RISK-CPAP-004</b><span>0.94 · Strong risk link</span></a>
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “hot water leaked from the chamber and spilled onto the hand” | device_problem | present | hot water leak from humidifier | IMDRF A |
| “redness and burning pain lasting about one hour” | injury | present | minor burn of hand | WHO ICD-11 / IMDRF E |
| “humidifier chamber” | device_component | present | humidifier | IMDRF G |
| “cause of the leak was not confirmed” | investigation_statement | negated | leak cause unconfirmed | IMDRF AET |

## Accepted coded terms

### Fluid/Blood Leak

- **Evidence:** “hot water leaked from the chamber and spilled onto the hand”
- **Terminology:** IMDRF AET, Annex A
- **Code:** `A050401`
- **Preferred title:** Fluid/Blood Leak
- **Confidence:** <span class="confidence strong">0.92 · Strong terminology match</span>
- **Why selected:** A fluid leak is explicit; the initiating mechanism remains unconfirmed.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Burn of wrist or hand, depth of burn unspecified

- **Evidence:** “redness and burning pain lasting about one hour”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `ND95.Z`
- **Preferred title:** Burn of wrist or hand, depth of burn unspecified
- **Confidence:** <span class="confidence strong">0.91 · Strong terminology match</span>
- **Why selected:** The site and thermal injury are explicit while depth remains unspecified.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/428347394/unspecified)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Humidifier

- **Evidence:** “humidifier chamber”
- **Terminology:** IMDRF AET, Annex G
- **Code:** `G04071`
- **Preferred title:** Humidifier
- **Confidence:** <span class="confidence strong">0.94 · Strong terminology match</span>
- **Why selected:** The humidifier chamber is the stated component.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending


## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
| — | No additional candidate above 0.50 | — | — | — | The accepted term had no useful alternative in the pinned search result. |



## Uncoded or ambiguous statements

- **“cause of the leak was not confirmed”** — No investigation conclusion is generated.

## Follow-up questions

1. Was the chamber or lid inspected by the manufacturer?
2. What was the water temperature and fill level?
3. Did any skin change persist beyond one hour?

## Tags

### Medical

<span class="tag-medical">medical-burn</span> <span class="tag-medical">medical-skin-irritation</span>

### Technical

<span class="tag-technical">technical-humidifier</span> <span class="tag-technical">technical-water-leak</span>

## Regulatory review cues

- Patient effect present
- No investigation conclusion
- Existing risk-chain match proposed
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-004 — Thermal or Hot-Water Exposure](../risk-management.md#risk-cpap-004)
- **Classification:** `consistent-with-known-risk`
- **Link confidence:** <span class="confidence strong">0.94 · Strong risk link</span>
- **Evidence used:** “hot water leaked from the chamber and spilled onto the hand”; “redness and burning pain lasting about one hour”; “humidifier chamber”; “cause of the leak was not confirmed”
- **Matched chain:** device-problem → component → sequence-of-events → hazardous-situation → harm → risk-control
- **Unmatched or uncertain elements:** The chamber-lid condition and leak mechanism are not confirmed.
- **Why linked:** Hot water escaped from the humidifier and contacted the hand, producing a minor thermal injury.
- **Review status:** `not-reviewed`
- **Risk-file version:** 1.0; source hash `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Secondary risk candidates

- No secondary risk candidate above the publication threshold.

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
| [RC-CPAP-004-01](../risk-management.md#risk-cpap-004) | inherent-safety | Humidifier temperature limits | Closure design and handling instructions are relevant, but the complaint cannot establish misuse or control failure. |
| [RC-CPAP-004-02](../risk-management.md#risk-cpap-004) | protective-measure | Chamber closure and spill-resistance design | Closure design and handling instructions are relevant, but the complaint cannot establish misuse or control failure. |
| [RC-CPAP-004-03](../risk-management.md#risk-cpap-004) | information-for-safety | Cool-down, filling, closure, and handling instructions | Closure design and handling instructions are relevant, but the complaint cannot establish misuse or control failure. |

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
| Complaint source | Synthetic seed CPAP-011 |
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
- [Synthetic risk register](../risk-management.md#risk-cpap-004)

## Related complaints

- [CPAP-005 — Nasal Dryness and Epistaxis](05-nasal-dryness-and-epistaxis.md) — shared `technical-humidifier`, `technical-water-leak`
- [CPAP-002 — Nasal Bridge Pressure Injury](02-nasal-bridge-pressure-injury.md) — shared `medical-skin-irritation`
- [CPAP-003 — Mask Contact Dermatitis](03-mask-contact-dermatitis.md) — shared `medical-skin-irritation`
