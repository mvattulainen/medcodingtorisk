---
title: "Complaint 009 — Claustrophobia and Panic Symptoms"
description: "Synthetic CPAP complaint coded with ICD-11 and local IMDRF terminology and linked to a simulated risk file."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-complaint
  - medical-anxiety
  - medical-panic
  - technical-mask-fit
  - context-therapy-interruption
complaint_id: "CPAP-009"
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

# Complaint 009 — Claustrophobia and Panic Symptoms

> [!warning] Synthetic demonstration record
> This complaint was generated for a regulatory AI demonstration. It is not a real patient or customer record. Coding and risk-link suggestions require qualified human review. This page does not diagnose, determine causality, assess reportability, or change a risk file.

## Complaint

> The first time the patient used the full-face mask at home, the patient felt trapped, became very anxious, and removed the mask within several minutes. The patient described rapid breathing and a sensation of panic but did not lose consciousness or require medical care. The CPAP machine and mask were reported to function normally. The patient asked for a smaller interface and additional acclimatization support.

## Coding summary

| Measure | Result |
|---|---:|
| Extracted evidence spans | 4 |
| Accepted codes | 2 |
| Candidate codes | 1 |
| SNOMED CT fallback | No |
| Proposed risk links | 1 |
| Primary risk-link confidence | 0.90 · Strong |
| Risk-control review cues | 2 |
| Human-review flags | 2 |

## Complaint-to-risk chain

<div class="trace-chain">
<a class="trace-node uncertain" href="#evidence-spans"><b>Initiating event</b><span>Partly stated</span></a>
<a class="trace-node matched" href="#risk-management-linkage"><b>User experiences distress or repeated awakening</b><span>Matched sequence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-009"><b>User is unable to tolerate or sleep with the therapy interface</b><span>Matched hazardous situation</span></a>
<a class="trace-node matched" href="#accepted-coded-terms"><b>anxiety during mask use</b><span>Matched health evidence</span></a>
<a class="trace-node matched" href="../risk-management.md#risk-cpap-009"><b>RISK-CPAP-009</b><span>0.90 · Strong risk link</span></a>
</div>

Terminology confidence describes evidence-to-code ranking. Risk-link confidence independently describes the evidence-to-risk-chain match.

## Evidence spans

| Source phrase | Type | Assertion | Normalized phrase | Coding route |
|---|---|---|---|---|
| “felt trapped, became very anxious” | clinical_sign_or_symptom | present | anxiety during mask use | WHO ICD-11 / IMDRF E |
| “sensation of panic” | clinical_sign_or_symptom | present | panic symptoms | WHO ICD-11 / IMDRF E |
| “removed the mask within several minutes” | health_impact | present | therapy discontinued | IMDRF F |
| “machine and mask were reported to function normally” | investigation_statement | present | no device malfunction reported | IMDRF AET |

## Accepted coded terms

### Anxiety

- **Evidence:** “felt trapped, became very anxious”
- **Terminology:** WHO ICD-11 MMS
- **Code:** `MB24.3`
- **Preferred title:** Anxiety
- **Confidence:** <span class="confidence strong">0.92 · Strong terminology match</span>
- **Why selected:** Anxiety is explicit and does not imply an anxiety disorder.
- **Assertion:** present
- **Source:** [Open official source](https://id.who.int/icd/release/11/2026-01/mms/2027043655)
- **Release:** 2026-01
- **Selection:** `accepted` by deterministic rule; qualified human review pending

### Canceled/Aborted Treatment/Therapy

- **Evidence:** “removed the mask within several minutes”
- **Terminology:** IMDRF AET, Annex F
- **Code:** `F31`
- **Preferred title:** Canceled/Aborted Treatment/Therapy
- **Confidence:** <span class="confidence good">0.88 · Good terminology match</span>
- **Why selected:** The patient aborted the treatment session.
- **Assertion:** present
- **Source:** [Open official source](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- **Release:** 2026
- **Selection:** `accepted` by deterministic rule; qualified human review pending


## Alternative candidates

| Evidence | Candidate | Terminology | Code | Confidence | Why not selected |
|---|---|---|---|---:|---|
| “sensation of panic” | Panic attack | WHO ICD-11 MMS | `MB23.H` | 0.72 · Plausible | Panic attack is plausible but the narrative reports a sensation rather than a diagnosed attack. |

> [!question] Human selection may be required
> Candidate terms remain unaccepted until a qualified reviewer confirms that the available evidence supports them.

## Uncoded or ambiguous statements

- **“sensation of panic”** — No panic-disorder or panic-attack diagnosis is selected.
- **“machine and mask were reported to function normally”** — No medical device problem is coded.

## Follow-up questions

1. Had similar panic symptoms occurred outside CPAP use?
2. Was a different mask interface tolerated?
3. Did structured acclimatization allow therapy to continue?

## Tags

### Medical

<span class="tag-medical">medical-anxiety</span> <span class="tag-medical">medical-panic</span>

### Technical

<span class="tag-technical">technical-mask-fit</span>

## Regulatory review cues

- Patient effect present
- Therapy interrupted
- No device malfunction established
- Terminology confidence is not clinical certainty.
- Complaint count is not an occurrence rate; the exposure denominator is unavailable.
- No causality, reportability, severity, probability, acceptability, residual-risk, or benefit-risk conclusion is made.

## Risk-management linkage

### Primary proposed link

- **Risk item:** [RISK-CPAP-009 — Psychological Distress or Sleep Disturbance](../risk-management.md#risk-cpap-009)
- **Classification:** `consistent-with-known-risk`
- **Link confidence:** <span class="confidence strong">0.90 · Strong risk link</span>
- **Evidence used:** “felt trapped, became very anxious”; “sensation of panic”; “removed the mask within several minutes”; “machine and mask were reported to function normally”
- **Matched chain:** component → sequence-of-events → hazardous-situation → harm → risk-control
- **Unmatched or uncertain elements:** The complaint does not establish a device malfunction or a psychiatric diagnosis.
- **Why linked:** Full-face mask enclosure led to anxiety, panic sensation, and aborted therapy as anticipated.
- **Review status:** `not-reviewed`
- **Risk-file version:** 1.0; source hash `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Secondary risk candidates

- No secondary risk candidate above the publication threshold.

### Risk-control review

| Control | Type | Risk-file wording | Non-conclusive review cue |
|---|---|---|---|
| [RC-CPAP-009-01](../risk-management.md#risk-cpap-009) | information-for-safety | Gradual acclimatisation and intolerance guidance | Mask options and acclimatization information are directly relevant to the stated intolerance. |
| [RC-CPAP-009-02](../risk-management.md#risk-cpap-009) | protective-measure | Alternative interface sizes and styles | Mask options and acclimatization information are directly relevant to the stated intolerance. |

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
| Complaint source | Synthetic seed CPAP-009 |
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

- [CPAP-019 — Excessive Noise and Insomnia](19-excessive-noise-and-insomnia.md) — shared primary risk `RISK-CPAP-009`
- [CPAP-001 — Mask Leak and Eye Irritation](01-mask-leak-eye-irritation.md) — shared `technical-mask-fit`
- [CPAP-002 — Nasal Bridge Pressure Injury](02-nasal-bridge-pressure-injury.md) — shared `technical-mask-fit`
