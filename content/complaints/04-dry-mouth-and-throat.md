---
title: "Complaint 004 — Dry Mouth and Sore Throat"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-dry-mouth
  - medical-sore-throat
  - technical-humidifier
  - technical-mask-fit
complaint_id: "CPAP-004"
device_family: "CPAP"
synthetic: true
coding_status: "reviewed-demo"
icd11_release: "2026-01"
imdrf_release: "2026"
snomed_ct_used: false
primary_risk_item: "RISK-CPAP-003"
risk_link_status: "proposed"
risk_review_status: "not-reviewed"
quartz-properties: false
---

# Complaint 004 — Dry Mouth and Sore Throat

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> The patient reported waking with severe dry mouth and a sore throat after starting CPAP. The humidifier was set to level two, and the water chamber still contained water in the morning. The patient believed the mouth opened during sleep while using a nasal mask. There was no fever, cough, or difficulty swallowing. Increasing humidification improved the symptoms but did not fully resolve them.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 4 |
| Accepted codes | 3 |
| Candidate codes | 0 |
| SNOMED CT fallback | No |
| Proposed risk links | 1 |
| Primary risk-link confidence | 0.84 · Good |
| Risk-control review cues | 2 |
| Human-review flags | 1 |

## Complaint-to-risk chain

<div class="trace-chain">
<a class="trace-node uncertain" href="#evidence-spans"><b>Initiating event</b><span>Partly stated</span></a>
<a class="trace-node matched" href="#risk-management-linkage"><b>Therapeutic pressure or flow at the interface is insufficient</b><span>Matched sequence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-003"><b>User receives insufficient effective PAP during sleep</b><span>Matched hazardous situation</span></a>
<a class="trace-node matched" href="#accepted-coded-terms"><b>dry mouth</b><span>Matched health evidence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-003"><b>RISK-CPAP-003</b><span>0.84 · Good risk link</span></a>
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “severe dry mouth” | clinical_sign_or_symptom | present | dry mouth | WHO ICD-11 / IMDRF E |
| “sore throat” | clinical_sign_or_symptom | present | pain in throat | WHO ICD-11 / IMDRF E |
| “humidifier was set to level two” | device_setting | present | humidifier setting | IMDRF AET |
| “no fever, cough, or difficulty swallowing” | clinical_sign_or_symptom | negated | fever cough dysphagia | WHO ICD-11 / IMDRF E |

## Accepted coded terms

### Xerostomia

- **Evidence:** “severe dry mouth”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `DA02.1`
- **Preferred title:** Xerostomia
- **Confidence:** <span class="confidence strong">0.95 · Strong terminology match</span>
- **Why selected:** Xerostomia is the direct ICD-11 title for explicitly reported dry mouth.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/1810717437)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Pain in throat

- **Evidence:** “sore throat”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `MD36.0`
- **Preferred title:** Pain in throat
- **Confidence:** <span class="confidence strong">0.93 · Strong terminology match</span>
- **Why selected:** Pain in throat directly represents the stated symptom without inferring pharyngitis.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/633724732)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Humidifier

- **Evidence:** “humidifier was set to level two”
- **Terminology:** IMDRF AET, Annex G
- **Code:** `G04071`
- **Preferred title:** Humidifier
- **Confidence:** <span class="confidence strong">0.90 · Strong terminology match</span>
- **Why selected:** The humidifier is explicitly identified; no device malfunction is asserted.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending


## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
| — | No additional candidate above 0.50 | — | — | — | The accepted term had no useful alternative in the pinned search result. |



## Uncoded or ambiguous statements

- **“no fever, cough, or difficulty swallowing”** — The listed symptoms are negated and cannot generate accepted codes or medical tags.

## Follow-up questions

1. Was mouth leak observed or measured?
2. Was a chin strap or full-face interface tried?
3. Did symptoms persist after humidifier adjustment?

## Tags

### Medical

<span class="tag-medical">medical-dry-mouth</span> <span class="tag-medical">medical-sore-throat</span>

### Technical

<span class="tag-technical">technical-humidifier</span> <span class="tag-technical">technical-mask-fit</span>

## Regulatory review cues

- Patient effect present
- Important information missing
- Exposure denominator unavailable
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-003 — Insufficient Effective Pressure or Flow](../risk-management.md#risk-cpap-003)
- **Classification:** `consistent-with-known-risk`
- **Link confidence:** <span class="confidence good">0.84 · Good risk link</span>
- **Evidence used:** “severe dry mouth”; “sore throat”; “humidifier was set to level two”
- **Matched chain:** sequence-of-events → hazardous-situation → harm → risk-control
- **Unmatched or uncertain elements:** No measured pressure or leak data are available.
- **Why linked:** Dry mouth and throat symptoms in a suspected mouth-leak context are consistent with insufficient effective therapy.
- **Review status:** `not-reviewed`
- **Risk-file version:** 1.0; source hash `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Secondary risk candidates

- No secondary risk candidate above the publication threshold.

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
| [RC-CPAP-003-02](../risk-management.md#risk-cpap-003) | protective-measure | Leak detection and mask-fit support | Mask-fit and humidification guidance are relevant; their effectiveness cannot be determined. |
| [RC-CPAP-003-03](../risk-management.md#risk-cpap-003) | information-for-safety | Humidification and interface-fit guidance | Mask-fit and humidification guidance are relevant; their effectiveness cannot be determined. |

> [!question] Human risk-management review
> These are review cues only. The system does not claim that a control failed, determine whether residual risk changed, or modify the synthetic risk register.

### Risk-file comparison

| Question | Result |
|---|---|
| Observed harm anticipated in risk file? | Yes — matched health-effect evidence |
| Device problem anticipated? | Not fully matched |
| New sequence suggested? | No clear new sequence |
| Possible control concern? | Review requested; not concluded |
| Automatic risk-file change | Prohibited |

## Provenance

| Item | Value |
|---|---|
| Complaint source | Synthetic seed CPAP-004 |
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
- [Synthetic risk register](../risk-management.md#risk-cpap-003)

## Related complaints

- [CPAP-005 — Nasal Dryness and Epistaxis](05-nasal-dryness-and-epistaxis.md) — shared primary risk `RISK-CPAP-003`
- [CPAP-007 — Low Pressure, Morning Headache, and Sleepiness](07-low-pressure-morning-headache.md) — shared primary risk `RISK-CPAP-003`
- [CPAP-017 — Blocked Filter and Respiratory Irritation](17-blocked-filter-respiratory-irritation.md) — shared primary risk `RISK-CPAP-003`
