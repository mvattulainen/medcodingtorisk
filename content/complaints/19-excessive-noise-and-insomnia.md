---
title: "Complaint 019 — Excessive Noise and Insomnia"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-daytime-somnolence
  - medical-insomnia
  - medical-sleep-disruption
  - technical-noise
complaint_id: "CPAP-019"
device_family: "CPAP"
synthetic: true
coding_status: "reviewed-demo"
icd11_release: "2026-01"
imdrf_release: "2026"
snomed_ct_used: false
primary_risk_item: "RISK-CPAP-009"
risk_link_status: "proposed"
risk_review_status: "not-reviewed"
quartz-properties: false
---

# Complaint 019 — Excessive Noise and Insomnia

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> The user reported a new high-pitched noise from the CPAP motor that became louder when inhaling. The noise repeatedly woke the user and resulted in difficulty returning to sleep. The user felt tired the next day but reported no breathing difficulty or other physical symptoms. Therapy appeared to continue, and the displayed pressure remained within the prescribed range.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 4 |
| Accepted codes | 3 |
| Candidate codes | 1 |
| SNOMED CT fallback | No |
| Proposed risk links | 1 |
| Primary risk-link confidence | 0.91 · Strong |
| Risk-control review cues | 1 |
| Human-review flags | 1 |

## Complaint-to-risk chain

<div class="trace-chain">
<a class="trace-node matched" href="#evidence-spans"><b>audible noise</b><span>Matched device evidence</span></a>
<a class="trace-node matched" href="#risk-management-linkage"><b>User experiences distress or repeated awakening</b><span>Matched sequence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-009"><b>User is unable to tolerate or sleep with the therapy interface</b><span>Matched hazardous situation</span></a>
<a class="trace-node matched" href="#accepted-coded-terms"><b>sleep disturbance</b><span>Matched health evidence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-009"><b>RISK-CPAP-009</b><span>0.91 · Strong risk link</span></a>
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “new high-pitched noise from the CPAP motor” | device_problem | present | audible noise | IMDRF A |
| “repeatedly woke the user” | clinical_sign_or_symptom | present | sleep disturbance | WHO ICD-11 / IMDRF E |
| “difficulty returning to sleep” | clinical_sign_or_symptom | present | insomnia symptom | WHO ICD-11 / IMDRF E |
| “felt tired the next day” | clinical_sign_or_symptom | present | fatigue | WHO ICD-11 / IMDRF E |

## Accepted coded terms

### Noise, Audible

- **Evidence:** “new high-pitched noise from the CPAP motor”
- **Terminology:** IMDRF AET, Annex A
- **Code:** `A0508`
- **Preferred title:** Noise, Audible
- **Confidence:** <span class="confidence strong">0.95 · Strong terminology match</span>
- **Why selected:** Noise, Audible directly represents the stated new device noise.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Sleep disturbance, not elsewhere classified

- **Evidence:** “repeatedly woke the user”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `MG41`
- **Preferred title:** Sleep disturbance, not elsewhere classified
- **Confidence:** <span class="confidence strong">0.92 · Strong terminology match</span>
- **Why selected:** The symptom code represents repeated waking without asserting an insomnia disorder.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/1207299072)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Fatigue

- **Evidence:** “felt tired the next day”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `MG22`
- **Preferred title:** Fatigue
- **Confidence:** <span class="confidence good">0.86 · Good terminology match</span>
- **Why selected:** Fatigue conservatively represents next-day tiredness.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/1109546957)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending


## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
| “difficulty returning to sleep” | Insomnia disorders, unspecified | WHO ICD-11 MMS | `7A0Z` | 0.70 · Plausible | An insomnia disorder requires more duration and impairment evidence than the complaint supplies. |

> [!question] Human selection may be required
> Candidate terms remain unaccepted until a qualified reviewer confirms that the available evidence supports them.

## Uncoded or ambiguous statements

- **“difficulty returning to sleep”** — No insomnia disorder is accepted.

## Follow-up questions

1. Was the noise reproduced during device inspection?
2. Was motor operating time or service history available?
3. Did sleep disruption recur on subsequent nights?

## Tags

### Medical

<span class="tag-medical">medical-daytime-somnolence</span> <span class="tag-medical">medical-insomnia</span> <span class="tag-medical">medical-sleep-disruption</span>

### Technical

<span class="tag-technical">technical-noise</span>

## Regulatory review cues

- Patient effect present
- Therapy continued
- Important information missing
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-009 — Psychological Distress or Sleep Disturbance](../risk-management.md#risk-cpap-009)
- **Classification:** `consistent-with-known-risk`
- **Link confidence:** <span class="confidence strong">0.91 · Strong risk link</span>
- **Evidence used:** “new high-pitched noise from the CPAP motor”; “repeatedly woke the user”; “difficulty returning to sleep”; “felt tired the next day”
- **Matched chain:** device-problem → sequence-of-events → hazardous-situation → harm → risk-control
- **Unmatched or uncertain elements:** The source and measured level of the noise are unknown.
- **Why linked:** Unexpected device noise repeatedly disrupted sleep and caused next-day tiredness.
- **Review status:** `not-reviewed`
- **Risk-file version:** 1.0; source hash `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Secondary risk candidates

- No secondary risk candidate above the publication threshold.

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
| [RC-CPAP-009-03](../risk-management.md#risk-cpap-009) | inherent-safety | Acoustic output limits | Noise-design limits are relevant, but no acoustic measurement or inspection exists. |

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
| Complaint source | Synthetic seed CPAP-019 |
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
- [Synthetic risk register](../risk-management.md#risk-cpap-009)

## Related complaints

- [CPAP-009 — Claustrophobia and Panic Symptoms](09-mask-claustrophobia-and-panic.md) — shared primary risk `RISK-CPAP-009`
- [CPAP-012 — Tubing Disconnection and Therapy Interruption](12-tubing-disconnection-therapy-interruption.md) — shared `medical-daytime-somnolence`, `medical-sleep-disruption`
- [CPAP-007 — Low Pressure, Morning Headache, and Sleepiness](07-low-pressure-morning-headache.md) — shared `medical-daytime-somnolence`
