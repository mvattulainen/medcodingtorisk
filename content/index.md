---
title: "CPAP Complaint Coder and Risk Linker"
description: "Evidence-grounded coding and bidirectional risk traceability across 20 synthetic CPAP complaints."
date: 2026-07-27
draft: false
tags:
  - cpap
  - complaint-coding
  - risk-management
  - synthetic-data
quartz-properties: false
---

# CPAP Complaint Coder and Risk Linker

<div class="demo-hero">
<div>
<strong>From exact complaint evidence to terminology and risk-chain review.</strong>
<p>This static demonstration separates clinical effects from device problems, preserves uncertainty, and links every synthetic complaint to a versioned ISO 14971-style risk record.</p>
</div>
<div><strong>Human decisions stay human.</strong><p>No diagnosis, causality, reportability, occurrence, severity, acceptability, or benefit-risk decision is automated.</p></div>
</div>

> [!warning] Demonstration only
> All 20 records are synthetic. The terminology and risk links are review aids, not clinical or regulatory conclusions.

## Summary

<div class="metric-grid">
<div class="metric"><strong>20</strong><span>synthetic complaints</span></div>
<div class="metric"><strong>16</strong><span>with accepted ICD-11 code</span></div>
<div class="metric"><strong>20</strong><span>with accepted IMDRF code</span></div>
<div class="metric"><strong>4</strong><span>with SNOMED human-review task</span></div>
<div class="metric"><strong>56</strong><span>accepted terminology codes</span></div>
<div class="metric"><strong>13</strong><span>published alternatives</span></div>
<div class="metric"><strong>2</strong><span>possible control-concern cases</span></div>
<div class="metric"><strong>1</strong><span>possible coverage-gap cases</span></div>
</div>

Most frequent medical tag: `medical-cough` (3). Most frequent technical tag: `technical-therapy-interruption` (6). Most frequently linked item: [RISK-CPAP-003](risk-management.md#risk-cpap-003) (7 proposed links).

Counts are descriptive case observations. They are not rates, probabilities, signal determinations, or coding-accuracy measures.

## Complaint register

| ID | Complaint | Main medical tags | Main technical tags | Primary risk item | Risk-link status |
|---|---|---|---|---|---|
| CPAP-001 | [Mask Leak and Eye Irritation](complaints/01-mask-leak-eye-irritation.md) | `dry-eye-symptoms`, `eye-irritation` | `mask-fit`, `mask-leak` | [RISK-CPAP-006](risk-management.md#risk-cpap-006) | Proposed · 0.94 |
| CPAP-002 | [Nasal Bridge Pressure Injury](complaints/02-nasal-bridge-pressure-injury.md) | `pressure-injury`, `skin-irritation` | `headgear`, `mask-fit` | [RISK-CPAP-005](risk-management.md#risk-cpap-005) | Proposed · 0.91 |
| CPAP-003 | [Mask Contact Dermatitis](complaints/03-mask-contact-dermatitis.md) | `skin-irritation` | `headgear`, `mask-fit` | [RISK-CPAP-005](risk-management.md#risk-cpap-005) | Proposed · 0.87 |
| CPAP-004 | [Dry Mouth and Sore Throat](complaints/04-dry-mouth-and-throat.md) | `dry-mouth`, `sore-throat` | `humidifier`, `mask-fit` | [RISK-CPAP-003](risk-management.md#risk-cpap-003) | Proposed · 0.84 |
| CPAP-005 | [Nasal Dryness and Epistaxis](complaints/05-nasal-dryness-and-epistaxis.md) | `epistaxis`, `nasal-dryness` | `humidifier`, `water-leak` | [RISK-CPAP-003](risk-management.md#risk-cpap-003) | Proposed · 0.80 |
| CPAP-006 | [Aerophagia and Abdominal Bloating](complaints/06-aerophagia-and-bloating.md) | `abdominal-bloating` | `pressure-setting`, `pressure-too-high` | [RISK-CPAP-002](risk-management.md#risk-cpap-002) | Proposed · 0.89 |
| CPAP-007 | [Low Pressure, Morning Headache, and Sleepiness](complaints/07-low-pressure-morning-headache.md) | `daytime-somnolence`, `headache` | `pressure-too-low` | [RISK-CPAP-003](risk-management.md#risk-cpap-003) | Proposed · 0.91 |
| CPAP-008 | [High Pressure and Chest Discomfort](complaints/08-high-pressure-chest-discomfort.md) | `chest-discomfort` | `pressure-setting`, `pressure-too-high` | [RISK-CPAP-002](risk-management.md#risk-cpap-002) | Proposed · 0.90 |
| CPAP-009 | [Claustrophobia and Panic Symptoms](complaints/09-mask-claustrophobia-and-panic.md) | `anxiety`, `panic` | `mask-fit` | [RISK-CPAP-009](risk-management.md#risk-cpap-009) | Proposed · 0.90 |
| CPAP-010 | [Rainout and Coughing Event](complaints/10-rainout-coughing-event.md) | `choking-sensation`, `cough` | `condensation`, `humidifier` | [RISK-CPAP-007](risk-management.md#risk-cpap-007) | Proposed · 0.93 |
| CPAP-011 | [Hot Water Spill and Minor Burn](complaints/11-humidifier-hot-water-burn.md) | `burn`, `skin-irritation` | `humidifier`, `water-leak` | [RISK-CPAP-004](risk-management.md#risk-cpap-004) | Proposed · 0.94 |
| CPAP-012 | [Tubing Disconnection and Therapy Interruption](complaints/12-tubing-disconnection-therapy-interruption.md) | `daytime-somnolence`, `sleep-disruption` | `therapy-interruption`, `tubing-disconnection` | [RISK-CPAP-001](risk-management.md#risk-cpap-001) | Proposed · 0.96 |
| CPAP-013 | [Power Loss and Shortness of Breath](complaints/13-power-loss-shortness-of-breath.md) | `shortness-of-breath` | `power-loss`, `therapy-interruption` | [RISK-CPAP-001](risk-management.md#risk-cpap-001) | Proposed · 0.93 |
| CPAP-014 | [Unexpected Device Restart](complaints/14-unexpected-device-restart.md) | `no-injury-reported` | `device-restart`, `therapy-interruption` | [RISK-CPAP-010](risk-management.md#risk-cpap-010) | Proposed · 0.88 |
| CPAP-015 | [Inaudible Alarm](complaints/15-inaudible-alarm.md) | `headache` | `alarm-inaudible`, `therapy-interruption` | [RISK-CPAP-008](risk-management.md#risk-cpap-008) | Proposed · 0.93 |
| CPAP-016 | [Pressure Change After Software Update](complaints/16-pressure-change-after-software-update.md) | `shortness-of-breath` | `firmware-update`, `pressure-setting` | [RISK-CPAP-010](risk-management.md#risk-cpap-010) | Proposed · 0.83 |
| CPAP-017 | [Blocked Filter and Respiratory Irritation](complaints/17-blocked-filter-respiratory-irritation.md) | `cough`, `respiratory-irritation` | `filter-blockage` | [RISK-CPAP-003](risk-management.md#risk-cpap-003) | Proposed · 0.90 |
| CPAP-018 | [Humidifier Contamination and Cough](complaints/18-humidifier-contamination-and-cough.md) | `cough` | `contamination`, `humidifier` | [RISK-CPAP-007](risk-management.md#risk-cpap-007) | Proposed · 0.91 |
| CPAP-019 | [Excessive Noise and Insomnia](complaints/19-excessive-noise-and-insomnia.md) | `daytime-somnolence`, `insomnia` | `noise` | [RISK-CPAP-009](risk-management.md#risk-cpap-009) | Proposed · 0.91 |
| CPAP-020 | [Headgear Strap Break With No Injury](complaints/20-headgear-strap-break-no-injury.md) | `no-injury-reported` | `headgear`, `strap-break` | [RISK-CPAP-001](risk-management.md#risk-cpap-001) | Proposed · 0.91 |

## Medical tags

| Tag | Complaint instances | Complaint pages |
|---|---:|---|
| `medical-abdominal-bloating` | 1 | [CPAP-006](complaints/06-aerophagia-and-bloating.md) |
| `medical-anxiety` | 1 | [CPAP-009](complaints/09-mask-claustrophobia-and-panic.md) |
| `medical-burn` | 1 | [CPAP-011](complaints/11-humidifier-hot-water-burn.md) |
| `medical-chest-discomfort` | 1 | [CPAP-008](complaints/08-high-pressure-chest-discomfort.md) |
| `medical-choking-sensation` | 1 | [CPAP-010](complaints/10-rainout-coughing-event.md) |
| `medical-cough` | 3 | [CPAP-010](complaints/10-rainout-coughing-event.md), [CPAP-017](complaints/17-blocked-filter-respiratory-irritation.md), [CPAP-018](complaints/18-humidifier-contamination-and-cough.md) |
| `medical-daytime-somnolence` | 3 | [CPAP-007](complaints/07-low-pressure-morning-headache.md), [CPAP-012](complaints/12-tubing-disconnection-therapy-interruption.md), [CPAP-019](complaints/19-excessive-noise-and-insomnia.md) |
| `medical-dry-eye-symptoms` | 1 | [CPAP-001](complaints/01-mask-leak-eye-irritation.md) |
| `medical-dry-mouth` | 1 | [CPAP-004](complaints/04-dry-mouth-and-throat.md) |
| `medical-epistaxis` | 1 | [CPAP-005](complaints/05-nasal-dryness-and-epistaxis.md) |
| `medical-eye-irritation` | 1 | [CPAP-001](complaints/01-mask-leak-eye-irritation.md) |
| `medical-headache` | 2 | [CPAP-007](complaints/07-low-pressure-morning-headache.md), [CPAP-015](complaints/15-inaudible-alarm.md) |
| `medical-insomnia` | 1 | [CPAP-019](complaints/19-excessive-noise-and-insomnia.md) |
| `medical-nasal-dryness` | 1 | [CPAP-005](complaints/05-nasal-dryness-and-epistaxis.md) |
| `medical-no-injury-reported` | 2 | [CPAP-014](complaints/14-unexpected-device-restart.md), [CPAP-020](complaints/20-headgear-strap-break-no-injury.md) |
| `medical-panic` | 1 | [CPAP-009](complaints/09-mask-claustrophobia-and-panic.md) |
| `medical-pressure-injury` | 1 | [CPAP-002](complaints/02-nasal-bridge-pressure-injury.md) |
| `medical-respiratory-irritation` | 1 | [CPAP-017](complaints/17-blocked-filter-respiratory-irritation.md) |
| `medical-shortness-of-breath` | 2 | [CPAP-013](complaints/13-power-loss-shortness-of-breath.md), [CPAP-016](complaints/16-pressure-change-after-software-update.md) |
| `medical-skin-irritation` | 3 | [CPAP-002](complaints/02-nasal-bridge-pressure-injury.md), [CPAP-003](complaints/03-mask-contact-dermatitis.md), [CPAP-011](complaints/11-humidifier-hot-water-burn.md) |
| `medical-sleep-disruption` | 2 | [CPAP-012](complaints/12-tubing-disconnection-therapy-interruption.md), [CPAP-019](complaints/19-excessive-noise-and-insomnia.md) |
| `medical-sore-throat` | 1 | [CPAP-004](complaints/04-dry-mouth-and-throat.md) |

## Technical tags

| Tag | Complaint instances | Complaint pages |
|---|---:|---|
| `technical-alarm-inaudible` | 1 | [CPAP-015](complaints/15-inaudible-alarm.md) |
| `technical-condensation` | 1 | [CPAP-010](complaints/10-rainout-coughing-event.md) |
| `technical-contamination` | 1 | [CPAP-018](complaints/18-humidifier-contamination-and-cough.md) |
| `technical-device-restart` | 1 | [CPAP-014](complaints/14-unexpected-device-restart.md) |
| `technical-filter-blockage` | 1 | [CPAP-017](complaints/17-blocked-filter-respiratory-irritation.md) |
| `technical-firmware-update` | 1 | [CPAP-016](complaints/16-pressure-change-after-software-update.md) |
| `technical-headgear` | 3 | [CPAP-002](complaints/02-nasal-bridge-pressure-injury.md), [CPAP-003](complaints/03-mask-contact-dermatitis.md), [CPAP-020](complaints/20-headgear-strap-break-no-injury.md) |
| `technical-humidifier` | 5 | [CPAP-004](complaints/04-dry-mouth-and-throat.md), [CPAP-005](complaints/05-nasal-dryness-and-epistaxis.md), [CPAP-010](complaints/10-rainout-coughing-event.md), [CPAP-011](complaints/11-humidifier-hot-water-burn.md), [CPAP-018](complaints/18-humidifier-contamination-and-cough.md) |
| `technical-mask-fit` | 5 | [CPAP-001](complaints/01-mask-leak-eye-irritation.md), [CPAP-002](complaints/02-nasal-bridge-pressure-injury.md), [CPAP-003](complaints/03-mask-contact-dermatitis.md), [CPAP-004](complaints/04-dry-mouth-and-throat.md), [CPAP-009](complaints/09-mask-claustrophobia-and-panic.md) |
| `technical-mask-leak` | 1 | [CPAP-001](complaints/01-mask-leak-eye-irritation.md) |
| `technical-noise` | 1 | [CPAP-019](complaints/19-excessive-noise-and-insomnia.md) |
| `technical-power-loss` | 1 | [CPAP-013](complaints/13-power-loss-shortness-of-breath.md) |
| `technical-pressure-setting` | 3 | [CPAP-006](complaints/06-aerophagia-and-bloating.md), [CPAP-008](complaints/08-high-pressure-chest-discomfort.md), [CPAP-016](complaints/16-pressure-change-after-software-update.md) |
| `technical-pressure-too-high` | 2 | [CPAP-006](complaints/06-aerophagia-and-bloating.md), [CPAP-008](complaints/08-high-pressure-chest-discomfort.md) |
| `technical-pressure-too-low` | 1 | [CPAP-007](complaints/07-low-pressure-morning-headache.md) |
| `technical-strap-break` | 1 | [CPAP-020](complaints/20-headgear-strap-break-no-injury.md) |
| `technical-therapy-interruption` | 6 | [CPAP-012](complaints/12-tubing-disconnection-therapy-interruption.md), [CPAP-013](complaints/13-power-loss-shortness-of-breath.md), [CPAP-014](complaints/14-unexpected-device-restart.md), [CPAP-015](complaints/15-inaudible-alarm.md), [CPAP-016](complaints/16-pressure-change-after-software-update.md), [CPAP-020](complaints/20-headgear-strap-break-no-injury.md) |
| `technical-tubing` | 1 | [CPAP-010](complaints/10-rainout-coughing-event.md) |
| `technical-tubing-disconnection` | 2 | [CPAP-012](complaints/12-tubing-disconnection-therapy-interruption.md), [CPAP-015](complaints/15-inaudible-alarm.md) |
| `technical-water-leak` | 2 | [CPAP-005](complaints/05-nasal-dryness-and-epistaxis.md), [CPAP-011](complaints/11-humidifier-hot-water-burn.md) |

## Risk-item observations

| Risk item | Theme | Linked complaint records |
|---|---|---:|
| [RISK-CPAP-001](risk-management.md#risk-cpap-001) | Loss or Interruption of Therapy | 5 |
| [RISK-CPAP-002](risk-management.md#risk-cpap-002) | Excessive Delivered Pressure | 3 |
| [RISK-CPAP-003](risk-management.md#risk-cpap-003) | Insufficient Effective Pressure or Flow | 7 |
| [RISK-CPAP-004](risk-management.md#risk-cpap-004) | Thermal or Hot-Water Exposure | 1 |
| [RISK-CPAP-005](risk-management.md#risk-cpap-005) | Mask or Headgear Contact Injury | 3 |
| [RISK-CPAP-006](risk-management.md#risk-cpap-006) | Air Leak Directed Toward Eyes | 1 |
| [RISK-CPAP-007](risk-management.md#risk-cpap-007) | Contaminated or Condensed Air-Path Exposure | 3 |
| [RISK-CPAP-008](risk-management.md#risk-cpap-008) | Alarm or Notification Not Perceived | 1 |
| [RISK-CPAP-009](risk-management.md#risk-cpap-009) | Psychological Distress or Sleep Disturbance | 2 |
| [RISK-CPAP-010](risk-management.md#risk-cpap-010) | Software, Configuration, or Restart Anomaly | 2 |

## Confidence distribution

Terminology and risk-link confidence are deterministic ranking scores shown separately.

| Band | Terminology results | Risk links |
|---|---:|---:|
| strong | 41 | 14 |
| good | 15 | 7 |
| plausible | 10 | 2 |
| weak | 3 | 5 |

Unresolved evidence mentions: 23. Complaints with no risk link: 0. Exposure denominator: unavailable.

## Review queues

- [SNOMED CT human-review queue](../review/snomed-review-queue.md) — no SNOMED concept is accepted automatically.
- [Risk-management human-review queue](../review/risk-review-queue.md) — proposed links, control cues, variations, and coverage gaps.
- [Bidirectional synthetic risk register](risk-management.md) — reverse links and risk-control context.

## Terminology sources

<div class="source-grid">
<div class="source-card"><strong>WHO ICD-11 MMS</strong><p>Release 2026-01; primary clinical classifier. Authenticated calls occur only at build time and official results are cached.</p><a href="https://icd.who.int/">Open WHO ICD-11</a></div>
<div class="source-card"><strong>IMDRF AET</strong><p>Release 2026; local pinned Annexes A–G for device problems, effects, impact, and components.</p><a href="https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes">Open IMDRF release</a></div>
<div class="source-card"><strong>SNOMED CT</strong><p>Selective human-reviewed web fallback. No API scraping and no unlicensed terminology bundle.</p><a href="https://browser.ihtsdotools.org/">Open SNOMED Browser</a></div>
</div>

## Method and provenance

The generator preserves exact source offsets, assertion state, query text, official release metadata, source URL, confidence rationale, risk-chain matches, unmatched elements, and non-conclusive control cues. See the [project README](https://github.com/mvattulainen/medcodingtorisk#readme) for build and validation details.

| Build item | Value |
|---|---|
| Deterministic timestamp | 2026-07-27T00:00:00.000Z |
| Pipeline | 1.1.0 |
| Terminology manifest | `sha256:dc657c76eac9dd9d8ff3c57a5351f69bb84221b2529acc5402930f17925281f5` |
| Risk register | `sha256:91c080f7321d18ef9cc33b2d2e49fee88b433a51b614735f8be020c062e5b808` |
| WHO API | v2; MMS 2026-01; English |
| IMDRF AET | 2026; source `sha256:e3476b9d588a705569c5c4d4e22faf573b6ad834537645a89a469743456cfe9d` |
