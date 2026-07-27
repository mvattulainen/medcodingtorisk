---
title: "Complaint 005 — Nasal Dryness and Epistaxis"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-epistaxis
  - medical-nasal-dryness
  - technical-humidifier
  - technical-water-leak
complaint_id: "CPAP-005"
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

# Complaint 005 — Nasal Dryness and Epistaxis

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> The user reported marked nasal dryness after several nights of CPAP and noticed a small amount of blood when blowing the nose in the morning. The bleeding stopped without treatment and did not recur later in the day. The humidifier chamber was empty by morning even though it had been filled to the indicated line. No dizziness, fainting, or heavy bleeding was reported.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 4 |
| Accepted codes | 2 |
| Candidate codes | 1 |
| SNOMED CT fallback | No |
| Proposed risk links | 1 |
| Primary risk-link confidence | 0.80 · Good |
| Risk-control review cues | 1 |
| Human-review flags | 2 |

## Complaint-to-risk chain

<div class="trace-chain">
<a class="trace-node uncertain" href="#evidence-spans"><b>unexpected humidifier water depletion</b><span>Partly stated</span></a>
<a class="trace-node matched" href="#risk-management-linkage"><b>Therapeutic pressure or flow at the interface is insufficient</b><span>Matched sequence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-003"><b>User receives insufficient effective PAP during sleep</b><span>Matched hazardous situation</span></a>
<a class="trace-node matched" href="#accepted-coded-terms"><b>nasal dryness</b><span>Matched health evidence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-003"><b>RISK-CPAP-003</b><span>0.80 · Good risk link</span></a>
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “marked nasal dryness” | clinical_sign_or_symptom | present | nasal dryness | WHO ICD-11 / IMDRF E |
| “small amount of blood when blowing the nose” | clinical_sign_or_symptom | present | epistaxis | WHO ICD-11 / IMDRF E |
| “humidifier chamber was empty by morning” | device_problem | present | unexpected humidifier water depletion | IMDRF A |
| “No dizziness, fainting, or heavy bleeding” | clinical_sign_or_symptom | negated | dizziness syncope heavy bleeding | WHO ICD-11 / IMDRF E |

## Accepted coded terms

### Nasal Dryness

- **Evidence:** “marked nasal dryness”
- **Terminology:** IMDRF AET, Annex E
- **Code:** `E0761`
- **Preferred title:** Nasal Dryness
- **Confidence:** <span class="confidence strong">0.92 · Strong terminology match</span>
- **Why selected:** IMDRF provides an exact nasal-dryness term; ICD search did not return a defensible result.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Epistaxis

- **Evidence:** “small amount of blood when blowing the nose”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `MD20`
- **Preferred title:** Epistaxis
- **Confidence:** <span class="confidence strong">0.95 · Strong terminology match</span>
- **Why selected:** Epistaxis directly represents the stated minor nosebleed.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/608337668)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending


## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
| “humidifier chamber was empty by morning” | Fluid/Blood Leak | IMDRF AET A | `A050401` | 0.68 · Plausible | A fluid leak is possible, but the complaint does not establish where the water went. |

> [!question] Human selection may be required
> Candidate terms remain unaccepted until a qualified reviewer confirms that the available evidence supports them.

## Uncoded or ambiguous statements

- **“humidifier chamber was empty by morning”** — No defensible device-problem code selected because evaporation and leakage remain unresolved.
- **“No dizziness, fainting, or heavy bleeding”** — The listed effects are explicitly negated.

## Follow-up questions

1. Was water found outside the chamber or tubing?
2. What humidifier setting and room conditions were present?
3. Did epistaxis recur after humidification changes?

## Tags

### Medical

<span class="tag-medical">medical-epistaxis</span> <span class="tag-medical">medical-nasal-dryness</span>

### Technical

<span class="tag-technical">technical-humidifier</span> <span class="tag-technical">technical-water-leak</span>

## Regulatory review cues

- Patient effect present
- Possible variation of known sequence
- Important information missing
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-003 — Insufficient Effective Pressure or Flow](../risk-management.md#risk-cpap-003)
- **Classification:** `variation-of-known-sequence`
- **Link confidence:** <span class="confidence good">0.80 · Good risk link</span>
- **Evidence used:** “marked nasal dryness”; “small amount of blood when blowing the nose”; “humidifier chamber was empty by morning”
- **Matched chain:** sequence-of-events → hazardous-situation → harm
- **Unmatched or uncertain elements:** The reason for water depletion and the delivered humidity are unknown.
- **Why linked:** Nasal dryness and epistaxis align with inadequate humidification, while the initiating event remains uncertain.
- **Review status:** `not-reviewed`
- **Risk-file version:** 1.0; source hash `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Secondary risk candidates

- No secondary risk candidate above the publication threshold.

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
| [RC-CPAP-003-03](../risk-management.md#risk-cpap-003) | information-for-safety | Humidification and interface-fit guidance | Unexpected chamber depletion may represent a variation requiring review; no leak mechanism is established. |

> [!question] Human risk-management review
> These are review cues only. The system does not claim that a control failed, determine whether residual risk changed, or modify the synthetic risk register.

### Risk-file comparison

| Question | Result |
|---|---|
| Observed harm anticipated in risk file? | Yes — matched health-effect evidence |
| Device problem anticipated? | Not fully matched |
| New sequence suggested? | Possible — human review requested |
| Possible control concern? | Review requested; not concluded |
| Automatic risk-file change | Prohibited |

## Provenance

| Item | Value |
|---|---|
| Complaint source | Synthetic seed CPAP-005 |
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

- [CPAP-004 — Dry Mouth and Sore Throat](04-dry-mouth-and-throat.md) — shared primary risk `RISK-CPAP-003`
- [CPAP-007 — Low Pressure, Morning Headache, and Sleepiness](07-low-pressure-morning-headache.md) — shared primary risk `RISK-CPAP-003`
- [CPAP-017 — Blocked Filter and Respiratory Irritation](17-blocked-filter-respiratory-irritation.md) — shared primary risk `RISK-CPAP-003`
