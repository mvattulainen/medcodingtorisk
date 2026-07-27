---
title: "Synthetic CPAP Risk-Management Register"
description: "Versioned ISO 14971-style demo risk register with reverse links to coded synthetic complaints."
date: 2026-07-27
draft: false
tags:
  - cpap
  - synthetic-risk-register
  - risk-management
  - post-market-review
quartz-properties: false
---

# Synthetic CPAP Risk-Management Register

> [!warning] Synthetic risk file
> This page is a demonstration artifact, not a manufacturer's proprietary or approved risk-management file. It does not determine risk acceptability, alter severity or occurrence, establish causality, or make regulatory decisions.

## Register summary

<div class="metric-grid">
<div class="metric"><strong>10</strong><span>synthetic risk items</span></div>
<div class="metric"><strong>28</strong><span>proposed complaint links</span></div>
<div class="metric"><strong>2</strong><span>possible control concerns</span></div>
<div class="metric"><strong>1</strong><span>possible coverage gaps</span></div>
</div>

| Register item | Value |
|---|---|
| Version | 1.0 |
| Source file | `data/risk-management/cpap-risk-register.json` |
| Register hash | `sha256:91c080f7321d18ef9cc33b2d2e49fee88b433a51b614735f8be020c062e5b808` |
| Source hash carried by each item | `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7` |
| Exposure denominator | Unavailable |
| Automatic risk-file updates | Prohibited |

## Risk-item overview

| Risk item | Linked complaints | Observed device problems | Observed medical effects | Review cues |
|---|---:|---|---|---|
| [RISK-CPAP-001](#risk-cpap-001) | 5 | therapy-interruption, tubing-disconnection, power-loss | daytime-somnolence, sleep-disruption, shortness-of-breath | consistent-with-known-risk |
| [RISK-CPAP-002](#risk-cpap-002) | 3 | pressure-setting, pressure-too-high, firmware-update | abdominal-bloating, chest-discomfort, shortness-of-breath | consistent-with-known-risk, possible-risk-file-coverage-gap |
| [RISK-CPAP-003](#risk-cpap-003) | 7 | mask-fit, mask-leak, humidifier | dry-eye-symptoms, eye-irritation, dry-mouth | insufficient-information, consistent-with-known-risk, variation-of-known-sequence |
| [RISK-CPAP-004](#risk-cpap-004) | 1 | humidifier, water-leak | burn, skin-irritation | consistent-with-known-risk |
| [RISK-CPAP-005](#risk-cpap-005) | 3 | headgear, mask-fit, strap-break | pressure-injury, skin-irritation, no-injury-reported | consistent-with-known-risk, variation-of-known-sequence, insufficient-information |
| [RISK-CPAP-006](#risk-cpap-006) | 1 | mask-fit, mask-leak | dry-eye-symptoms, eye-irritation | consistent-with-known-risk |
| [RISK-CPAP-007](#risk-cpap-007) | 3 | condensation, humidifier, tubing | choking-sensation, cough, respiratory-irritation | consistent-with-known-risk, possible-risk-control-concern |
| [RISK-CPAP-008](#risk-cpap-008) | 1 | alarm-inaudible, therapy-interruption, tubing-disconnection | headache | possible-risk-control-concern |
| [RISK-CPAP-009](#risk-cpap-009) | 2 | mask-fit, noise | anxiety, panic, daytime-somnolence | consistent-with-known-risk |
| [RISK-CPAP-010](#risk-cpap-010) | 2 | device-restart, therapy-interruption, firmware-update | no-injury-reported, shortness-of-breath | variation-of-known-sequence |

## Human review queues

### Possible risk-control concerns

- [CPAP-015 — Inaudible Alarm](complaints/15-inaudible-alarm.md) → [RISK-CPAP-008](#risk-cpap-008): `possible-risk-control-concern`; A disconnect occurred and the expected audible notification was not perceived, delaying awareness.
- [CPAP-018 — Humidifier Contamination and Cough](complaints/18-humidifier-contamination-and-cough.md) → [RISK-CPAP-007](#risk-cpap-007): `possible-risk-control-concern`; Visible air-path contamination and cough during use align with the anticipated exposure chain.

### Possible risk-file coverage gaps

- [CPAP-016 — Pressure Change After Software Update](complaints/16-pressure-change-after-software-update.md) → [RISK-CPAP-002](#risk-cpap-002): `possible-risk-file-coverage-gap`; Part of the complaint could fit excessive pressure, but the current evidence cannot distinguish high from low pressure.

### Variations of known sequences

- [CPAP-003 — Mask Contact Dermatitis](complaints/03-mask-contact-dermatitis.md) → [RISK-CPAP-005](#risk-cpap-005): `variation-of-known-sequence`; The location and recurrence support mask-contact skin irritation while causation remains unconfirmed.
- [CPAP-005 — Nasal Dryness and Epistaxis](complaints/05-nasal-dryness-and-epistaxis.md) → [RISK-CPAP-003](#risk-cpap-003): `variation-of-known-sequence`; Nasal dryness and epistaxis align with inadequate humidification, while the initiating event remains uncertain.
- [CPAP-014 — Unexpected Device Restart](complaints/14-unexpected-device-restart.md) → [RISK-CPAP-010](#risk-cpap-010): `variation-of-known-sequence`; Unexpected restart behavior aligns with the anomaly risk chain without proving a software cause.
- [CPAP-016 — Pressure Change After Software Update](complaints/16-pressure-change-after-software-update.md) → [RISK-CPAP-010](#risk-cpap-010): `variation-of-known-sequence`; A perceived pressure-range change after an update and aborted therapy fit a software/configuration review scenario.

> [!info] Descriptive observations only
> Complaint counts are not probabilities or occurrence categories. The highest observed effect is not used to change severity. Terminology confidence is not combined with risk magnitude.

## RISK-CPAP-001 — Loss or Interruption of Therapy

**Version:** 1.0 · **Status:** active · **Owner:** Risk Management Owner · **Source hash:** `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Risk-file chain

| Element | Synthetic risk-file statement |
|---|---|
| Hazard/source of harm | Loss of intended positive airway pressure while the user relies on therapy during sleep |
| Sequence of events | Power, tubing, software recovery, or retention component is interrupted → Airflow is absent or therapy cannot be started → The user remains without intended PAP therapy until recovery or awareness |
| Hazardous situation | User reliant on PAP is asleep or attempting sleep without intended therapy |
| Anticipated harms | Dyspnea (`E0717`); Sleep Dysfunction (`E0130`); Headache (`E0116`); Recurrence of sleep-apnoea symptoms |
| Anticipated device problems | Disconnection (`A1203`); Complete Loss of Power (`A070801`); Unexpected Shutdown (`A0719`); Material Split, Cut or Torn (`A0414`) |
| Related components | Hose (`G04069`); Mask (`G04086`) |
| Stored severity | Synthetic S2 |
| Stored occurrence | Synthetic P2 — not recalculated |
| Stored residual-risk status | Synthetic accepted — not reassessed by this demo |

The stored risk-file fields above are copied from the synthetic record. This demo does not alter or reassess them.

### Risk controls

| Control ID | Type | Description | Complaint review cue |
|---|---|---|---|
| RC-CPAP-001-01 | inherent-safety | Connection and retention features resist unintended separation | Connector retention is directly relevant because the reattached connector appeared loose. Connection retention and notification controls are relevant. Visible wear makes inspection and replacement guidance relevant; no conclusion about compliance is made. |
| RC-CPAP-001-02 | protective-measure | Defined power-loss and automatic-recovery behavior | Recovery behavior is relevant; clinical effectiveness cannot be assessed from a no-harm case. |
| RC-CPAP-001-03 | protective-measure | Therapy interruption and disconnect notification | Connector retention is directly relevant because the reattached connector appeared loose. Connection retention and notification controls are relevant. |
| RC-CPAP-001-04 | information-for-safety | Instructions for connections, wear checks, recovery, and backup-power planning | Power-loss behavior and backup-power information are relevant; the device restarted normally. Visible wear makes inspection and replacement guidance relevant; no conclusion about compliance is made. |

### Linked complaints

| Complaint | Observed device concepts | Observed medical effects | Link review |
|---|---|---|---|
| [CPAP-012 — Tubing Disconnection and Therapy Interruption](complaints/12-tubing-disconnection-therapy-interruption.md) | therapy-interruption, tubing-disconnection | daytime-somnolence, sleep-disruption | `consistent-with-known-risk` · 0.96 |
| [CPAP-013 — Power Loss and Shortness of Breath](complaints/13-power-loss-shortness-of-breath.md) | power-loss, therapy-interruption | shortness-of-breath | `consistent-with-known-risk` · 0.93 |
| [CPAP-014 — Unexpected Device Restart](complaints/14-unexpected-device-restart.md) | device-restart, therapy-interruption | no-injury-reported | `consistent-with-known-risk` · 0.76 |
| [CPAP-015 — Inaudible Alarm](complaints/15-inaudible-alarm.md) | alarm-inaudible, therapy-interruption, tubing-disconnection | headache | `consistent-with-known-risk` · 0.84 |
| [CPAP-020 — Headgear Strap Break With No Injury](complaints/20-headgear-strap-break-no-injury.md) | headgear, strap-break, therapy-interruption | no-injury-reported | `consistent-with-known-risk` · 0.91 |

### Review status

> [!question] Human risk-management review
> 5 complaint-link observations are proposed. Counts are not occurrence rates, and no automatic risk-file change is proposed.

## RISK-CPAP-002 — Excessive Delivered Pressure

**Version:** 1.0 · **Status:** active · **Owner:** Risk Management Owner · **Source hash:** `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Risk-file chain

| Element | Synthetic risk-file statement |
|---|---|
| Hazard/source of harm | Pressurised airflow delivered above the intended therapeutic level |
| Sequence of events | Setting or configuration produces pressure above the intended level → User is exposed to excessive positive airway pressure → User experiences intolerance or pressure-related symptoms |
| Hazardous situation | User receives excessive PAP while wearing the interface |
| Anticipated harms | Chest Pain (`E233001`); Abdominal Distention (`E1001`); Discomfort (`E2311`); Potential pressure-related injury |
| Anticipated device problems | Increase in Pressure (`A141102`); Use of Incorrect Control/Treatment Settings (`A2302`) |
| Related components | Mask (`G04086`) |
| Stored severity | Synthetic S3 |
| Stored occurrence | Synthetic P1 — not recalculated |
| Stored residual-risk status | Synthetic accepted — not reassessed by this demo |

The stored risk-file fields above are copied from the synthetic record. This demo does not alter or reassess them.

### Risk controls

| Control ID | Type | Description | Complaint review cue |
|---|---|---|---|
| RC-CPAP-002-01 | inherent-safety | Pressure output limits and independent monitoring | Pressure-setting controls are relevant, but the complaint records a clinician-directed increase rather than a confirmed malfunction. Configuration validation is relevant because the displayed pressure differed from the remembered prescription. |
| RC-CPAP-002-02 | protective-measure | Configuration validation and out-of-range handling | Configuration validation is relevant because the displayed pressure differed from the remembered prescription. The remembered range mismatch may warrant review of how undirected configuration anomalies are represented. |
| RC-CPAP-002-03 | information-for-safety | Clinician-only setup and pressure review instructions | Pressure-setting controls are relevant, but the complaint records a clinician-directed increase rather than a confirmed malfunction. |

### Linked complaints

| Complaint | Observed device concepts | Observed medical effects | Link review |
|---|---|---|---|
| [CPAP-006 — Aerophagia and Abdominal Bloating](complaints/06-aerophagia-and-bloating.md) | pressure-setting, pressure-too-high | abdominal-bloating | `consistent-with-known-risk` · 0.89 |
| [CPAP-008 — High Pressure and Chest Discomfort](complaints/08-high-pressure-chest-discomfort.md) | pressure-setting, pressure-too-high | chest-discomfort | `consistent-with-known-risk` · 0.90 |
| [CPAP-016 — Pressure Change After Software Update](complaints/16-pressure-change-after-software-update.md) | firmware-update, pressure-setting, therapy-interruption | shortness-of-breath | `possible-risk-file-coverage-gap` · 0.61 |

### Review status

> [!question] Human risk-management review
> 3 complaint-link observations are proposed. Counts are not occurrence rates, and no automatic risk-file change is proposed.

## RISK-CPAP-003 — Insufficient Effective Pressure or Flow

**Version:** 1.0 · **Status:** active · **Owner:** Risk Management Owner · **Source hash:** `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Risk-file chain

| Element | Synthetic risk-file statement |
|---|---|
| Hazard/source of harm | Delivered flow or effective airway pressure is below the intended therapeutic level |
| Sequence of events | Leak, obstruction, maintenance condition, or setting reduces effective therapy → Therapeutic pressure or flow at the interface is insufficient → Sleep-disordered breathing symptoms or mucosal discomfort recur |
| Hazardous situation | User receives insufficient effective PAP during sleep |
| Anticipated harms | Dry Mouth (`E102801`); Nasal Dryness (`E0761`); Headache (`E0116`); Sleepiness/Drowsiness/Somnolence (`E0209`); Upper Respiratory Tract Irritation (`E0754`) |
| Anticipated device problems | Decrease in Pressure (`A141101`); Obstruction of Flow (`A1409`); Gas/Air Leak (`A050402`) |
| Related components | Filter (`G04054`); Hose (`G04069`); Mask (`G04086`) |
| Stored severity | Synthetic S2 |
| Stored occurrence | Synthetic P2 — not recalculated |
| Stored residual-risk status | Synthetic accepted — not reassessed by this demo |

The stored risk-file fields above are copied from the synthetic record. This demo does not alter or reassess them.

### Risk controls

| Control ID | Type | Description | Complaint review cue |
|---|---|---|---|
| RC-CPAP-003-01 | protective-measure | Pressure and flow monitoring | Displayed low pressure makes monitoring controls relevant, but operation has not been verified. Monitoring evidence is unavailable. The stated replacement interval was exceeded; this does not establish adequacy of the instructions. |
| RC-CPAP-003-02 | protective-measure | Leak detection and mask-fit support | No information establishes whether leak detection or pressure monitoring responded. Mask-fit and humidification guidance are relevant; their effectiveness cannot be determined. Displayed low pressure makes monitoring controls relevant, but operation has not been verified. |
| RC-CPAP-003-03 | information-for-safety | Humidification and interface-fit guidance | Mask-fit and humidification guidance are relevant; their effectiveness cannot be determined. Unexpected chamber depletion may represent a variation requiring review; no leak mechanism is established. |
| RC-CPAP-003-04 | information-for-safety | Filter inspection and replacement instructions | The stated replacement interval was exceeded; this does not establish adequacy of the instructions. |

### Linked complaints

| Complaint | Observed device concepts | Observed medical effects | Link review |
|---|---|---|---|
| [CPAP-001 — Mask Leak and Eye Irritation](complaints/01-mask-leak-eye-irritation.md) | mask-fit, mask-leak | dry-eye-symptoms, eye-irritation | `insufficient-information` · 0.62 |
| [CPAP-004 — Dry Mouth and Sore Throat](complaints/04-dry-mouth-and-throat.md) | humidifier, mask-fit | dry-mouth, sore-throat | `consistent-with-known-risk` · 0.84 |
| [CPAP-005 — Nasal Dryness and Epistaxis](complaints/05-nasal-dryness-and-epistaxis.md) | humidifier, water-leak | epistaxis, nasal-dryness | `variation-of-known-sequence` · 0.80 |
| [CPAP-007 — Low Pressure, Morning Headache, and Sleepiness](complaints/07-low-pressure-morning-headache.md) | pressure-too-low | daytime-somnolence, headache | `consistent-with-known-risk` · 0.91 |
| [CPAP-010 — Rainout and Coughing Event](complaints/10-rainout-coughing-event.md) | condensation, humidifier, tubing | choking-sensation, cough | `insufficient-information` · 0.58 |
| [CPAP-016 — Pressure Change After Software Update](complaints/16-pressure-change-after-software-update.md) | firmware-update, pressure-setting, therapy-interruption | shortness-of-breath | `insufficient-information` · 0.59 |
| [CPAP-017 — Blocked Filter and Respiratory Irritation](complaints/17-blocked-filter-respiratory-irritation.md) | filter-blockage | cough, respiratory-irritation | `consistent-with-known-risk` · 0.90 |

### Review status

> [!question] Human risk-management review
> 7 complaint-link observations are proposed. Counts are not occurrence rates, and no automatic risk-file change is proposed.

## RISK-CPAP-004 — Thermal or Hot-Water Exposure

**Version:** 1.0 · **Status:** active · **Owner:** Risk Management Owner · **Source hash:** `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Risk-file chain

| Element | Synthetic risk-file statement |
|---|---|
| Hazard/source of harm | Thermal energy or heated water from the humidifier |
| Sequence of events | Heated water remains in or escapes the chamber → Water contacts the user during handling → Skin is exposed to a harmful temperature |
| Hazardous situation | User skin contacts heated chamber water |
| Anticipated harms | Burn(s) (`E1704`); Discomfort (`E2311`) |
| Anticipated device problems | Fluid/Blood Leak (`A050401`); Overheating of Device (`A1005`) |
| Related components | Humidifier (`G04071`) |
| Stored severity | Synthetic S2 |
| Stored occurrence | Synthetic P1 — not recalculated |
| Stored residual-risk status | Synthetic accepted — not reassessed by this demo |

The stored risk-file fields above are copied from the synthetic record. This demo does not alter or reassess them.

### Risk controls

| Control ID | Type | Description | Complaint review cue |
|---|---|---|---|
| RC-CPAP-004-01 | inherent-safety | Humidifier temperature limits | Closure design and handling instructions are relevant, but the complaint cannot establish misuse or control failure. |
| RC-CPAP-004-02 | protective-measure | Chamber closure and spill-resistance design | Closure design and handling instructions are relevant, but the complaint cannot establish misuse or control failure. |
| RC-CPAP-004-03 | information-for-safety | Cool-down, filling, closure, and handling instructions | Closure design and handling instructions are relevant, but the complaint cannot establish misuse or control failure. |

### Linked complaints

| Complaint | Observed device concepts | Observed medical effects | Link review |
|---|---|---|---|
| [CPAP-011 — Hot Water Spill and Minor Burn](complaints/11-humidifier-hot-water-burn.md) | humidifier, water-leak | burn, skin-irritation | `consistent-with-known-risk` · 0.94 |

### Review status

> [!question] Human risk-management review
> 1 complaint-link observation are proposed. Counts are not occurrence rates, and no automatic risk-file change is proposed.

## RISK-CPAP-005 — Mask or Headgear Contact Injury

**Version:** 1.0 · **Status:** active · **Owner:** Risk Management Owner · **Source hash:** `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Risk-file chain

| Element | Synthetic risk-file statement |
|---|---|
| Hazard/source of harm | Sustained pressure, friction, or material contact at the mask interface |
| Sequence of events | Mask or headgear is fitted, tightened, or worn against skin → Local pressure, friction, or material exposure persists → Skin integrity or comfort is affected |
| Hazardous situation | Facial skin is exposed to sustained contact during therapy |
| Anticipated harms | Localized Skin Lesion (`E1710`); Contact Dermatitis (`E172003`); Skin Inflammation/ Irritation (`E1720`); Discomfort (`E2311`) |
| Anticipated device problems | Inadequacy of Device Shape and/or Size (`A010103`) |
| Related components | Mask (`G04086`) |
| Stored severity | Synthetic S2 |
| Stored occurrence | Synthetic P2 — not recalculated |
| Stored residual-risk status | Synthetic accepted — not reassessed by this demo |

The stored risk-file fields above are copied from the synthetic record. This demo does not alter or reassess them.

### Risk controls

| Control ID | Type | Description | Complaint review cue |
|---|---|---|---|
| RC-CPAP-005-01 | inherent-safety | Biocompatible patient-contact materials and pressure-distributing cushion design | A newly fitted mask and early contact injury make fitting and adjustment controls relevant. Material selection and cleaning information are relevant; the complaint cannot establish their effectiveness. |
| RC-CPAP-005-02 | information-for-safety | Sizing, fitting, adjustment, and wear-inspection instructions | A newly fitted mask and early contact injury make fitting and adjustment controls relevant. The headgear is shared, but the contact-injury chain is not present. |
| RC-CPAP-005-03 | information-for-safety | Cleaning, skin-monitoring, and alternate-interface guidance | Material selection and cleaning information are relevant; the complaint cannot establish their effectiveness. |

### Linked complaints

| Complaint | Observed device concepts | Observed medical effects | Link review |
|---|---|---|---|
| [CPAP-002 — Nasal Bridge Pressure Injury](complaints/02-nasal-bridge-pressure-injury.md) | headgear, mask-fit | pressure-injury, skin-irritation | `consistent-with-known-risk` · 0.91 |
| [CPAP-003 — Mask Contact Dermatitis](complaints/03-mask-contact-dermatitis.md) | headgear, mask-fit | skin-irritation | `variation-of-known-sequence` · 0.87 |
| [CPAP-020 — Headgear Strap Break With No Injury](complaints/20-headgear-strap-break-no-injury.md) | headgear, strap-break, therapy-interruption | no-injury-reported | `insufficient-information` · 0.55 |

### Review status

> [!question] Human risk-management review
> 3 complaint-link observations are proposed. Counts are not occurrence rates, and no automatic risk-file change is proposed.

## RISK-CPAP-006 — Air Leak Directed Toward Eyes

**Version:** 1.0 · **Status:** active · **Owner:** Risk Management Owner · **Source hash:** `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Risk-file chain

| Element | Synthetic risk-file statement |
|---|---|
| Hazard/source of harm | Pressurised airflow directed outside the intended breathing path |
| Sequence of events | Mask seal degrades or fit is incomplete → Leak is directed upward from the mask → Ocular surface is exposed during sleep |
| Hazardous situation | User eyes are exposed to continuous airflow during therapy |
| Anticipated harms | Eye Irritation (`E0845`); Dry Eye(s) (`E0815`) |
| Anticipated device problems | Gas/Air Leak (`A050402`) |
| Related components | Mask (`G04086`) |
| Stored severity | Synthetic S1 |
| Stored occurrence | Synthetic P2 — not recalculated |
| Stored residual-risk status | Synthetic accepted — not reassessed by this demo |

The stored risk-file fields above are copied from the synthetic record. This demo does not alter or reassess them.

### Risk controls

| Control ID | Type | Description | Complaint review cue |
|---|---|---|---|
| RC-CPAP-006-01 | protective-measure | Mask seal and cushion design | The cushion age makes replacement guidance relevant, but adherence and effectiveness are not established. |
| RC-CPAP-006-02 | information-for-safety | Fit, leak-response, and cushion-replacement instructions | The cushion age makes replacement guidance relevant, but adherence and effectiveness are not established. |

### Linked complaints

| Complaint | Observed device concepts | Observed medical effects | Link review |
|---|---|---|---|
| [CPAP-001 — Mask Leak and Eye Irritation](complaints/01-mask-leak-eye-irritation.md) | mask-fit, mask-leak | dry-eye-symptoms, eye-irritation | `consistent-with-known-risk` · 0.94 |

### Review status

> [!question] Human risk-management review
> 1 complaint-link observation are proposed. Counts are not occurrence rates, and no automatic risk-file change is proposed.

## RISK-CPAP-007 — Contaminated or Condensed Air-Path Exposure

**Version:** 1.0 · **Status:** active · **Owner:** Risk Management Owner · **Source hash:** `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Risk-file chain

| Element | Synthetic risk-file statement |
|---|---|
| Hazard/source of harm | Foreign material, contamination, or condensed water in the patient air path |
| Sequence of events | Water management, cleaning, or filter condition allows material into the breathing circuit → Airflow carries moisture or material toward the interface → User is exposed through the respiratory tract |
| Hazardous situation | User breathes through an air path containing condensed water or uncharacterised material |
| Anticipated harms | Cough (`E0712`); Upper Respiratory Tract Irritation (`E0754`); Possible infection concern — not inferred from complaint count |
| Anticipated device problems | Contamination (`A1801`); Moisture or Humidity Problem (`A1905`); Obstruction of Flow (`A1409`) |
| Related components | Humidifier (`G04071`); Filter (`G04054`); Hose (`G04069`) |
| Stored severity | Synthetic S2 |
| Stored occurrence | Synthetic P2 — not recalculated |
| Stored residual-risk status | Synthetic accepted — not reassessed by this demo |

The stored risk-file fields above are copied from the synthetic record. This demo does not alter or reassess them.

### Risk controls

| Control ID | Type | Description | Complaint review cue |
|---|---|---|---|
| RC-CPAP-007-01 | information-for-safety | Cleaning, water-use, and drying instructions | Water-management settings and room conditions make use information relevant. The chamber had not been cleaned for several weeks; adequacy and understanding of instructions require review. |
| RC-CPAP-007-02 | inherent-safety | Water-management, drainage, and heated-tube design | Water-management settings and room conditions make use information relevant. |
| RC-CPAP-007-03 | protective-measure | Replaceable inlet filtration | Filter replacement instructions are relevant to air-path exposure. |
| RC-CPAP-007-04 | information-for-safety | Chamber inspection and replacement guidance | The chamber had not been cleaned for several weeks; adequacy and understanding of instructions require review. |

### Linked complaints

| Complaint | Observed device concepts | Observed medical effects | Link review |
|---|---|---|---|
| [CPAP-010 — Rainout and Coughing Event](complaints/10-rainout-coughing-event.md) | condensation, humidifier, tubing | choking-sensation, cough | `consistent-with-known-risk` · 0.93 |
| [CPAP-017 — Blocked Filter and Respiratory Irritation](complaints/17-blocked-filter-respiratory-irritation.md) | filter-blockage | cough, respiratory-irritation | `consistent-with-known-risk` · 0.78 |
| [CPAP-018 — Humidifier Contamination and Cough](complaints/18-humidifier-contamination-and-cough.md) | contamination, humidifier | cough | `possible-risk-control-concern` · 0.91 |

### Review status

> [!question] Human risk-management review
> 3 complaint-link observations are proposed. Counts are not occurrence rates, and no automatic risk-file change is proposed.

## RISK-CPAP-008 — Alarm or Notification Not Perceived

**Version:** 1.0 · **Status:** active · **Owner:** Risk Management Owner · **Source hash:** `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Risk-file chain

| Element | Synthetic risk-file statement |
|---|---|
| Hazard/source of harm | Loss of timely awareness of therapy interruption or device fault |
| Sequence of events | An underlying disconnect or fault occurs → Audible or visual notification is absent, insufficient, or not perceived → User or caregiver awareness is delayed |
| Hazardous situation | Underlying hazardous situation continues without timely user or caregiver response |
| Anticipated harms | Headache (`E0116`); Sleep Dysfunction (`E0130`); Prolonged exposure to the underlying hazardous situation |
| Anticipated device problems | No Audible Alarm (`A160102`); Low Audible Alarm (`A160103`) |
| Related components | Alarm system; Hose (`G04069`) |
| Stored severity | Synthetic S3 |
| Stored occurrence | Synthetic P1 — not recalculated |
| Stored residual-risk status | Synthetic accepted — not reassessed by this demo |

The stored risk-file fields above are copied from the synthetic record. This demo does not alter or reassess them.

### Risk controls

| Control ID | Type | Description | Complaint review cue |
|---|---|---|---|
| RC-CPAP-008-01 | protective-measure | Alarm audibility and priority design | The expected alarm was not perceived; settings and alarm generation require human review. |
| RC-CPAP-008-02 | protective-measure | Complementary visual notification | The expected alarm was not perceived; settings and alarm generation require human review. |
| RC-CPAP-008-03 | information-for-safety | Alarm-volume, placement, and verification instructions | The expected alarm was not perceived; settings and alarm generation require human review. |

### Linked complaints

| Complaint | Observed device concepts | Observed medical effects | Link review |
|---|---|---|---|
| [CPAP-015 — Inaudible Alarm](complaints/15-inaudible-alarm.md) | alarm-inaudible, therapy-interruption, tubing-disconnection | headache | `possible-risk-control-concern` · 0.93 |

### Review status

> [!question] Human risk-management review
> 1 complaint-link observation are proposed. Counts are not occurrence rates, and no automatic risk-file change is proposed.

## RISK-CPAP-009 — Psychological Distress or Sleep Disturbance

**Version:** 1.0 · **Status:** active · **Owner:** Risk Management Owner · **Source hash:** `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Risk-file chain

| Element | Synthetic risk-file statement |
|---|---|
| Hazard/source of harm | Mask enclosure, unexpected noise, or therapy discomfort |
| Sequence of events | Interface enclosure or device noise is experienced → User experiences distress or repeated awakening → Therapy is removed, aborted, or poorly tolerated |
| Hazardous situation | User is unable to tolerate or sleep with the therapy interface |
| Anticipated harms | Anxiety (`E020201`); Sleep Dysfunction (`E0130`); Sleepiness/Drowsiness/Somnolence (`E0209`); Panic symptoms |
| Anticipated device problems | Noise, Audible (`A0508`) |
| Related components | Mask (`G04086`); Blower/motor |
| Stored severity | Synthetic S2 |
| Stored occurrence | Synthetic P2 — not recalculated |
| Stored residual-risk status | Synthetic accepted — not reassessed by this demo |

The stored risk-file fields above are copied from the synthetic record. This demo does not alter or reassess them.

### Risk controls

| Control ID | Type | Description | Complaint review cue |
|---|---|---|---|
| RC-CPAP-009-01 | information-for-safety | Gradual acclimatisation and intolerance guidance | Mask options and acclimatization information are directly relevant to the stated intolerance. |
| RC-CPAP-009-02 | protective-measure | Alternative interface sizes and styles | Mask options and acclimatization information are directly relevant to the stated intolerance. |
| RC-CPAP-009-03 | inherent-safety | Acoustic output limits | Noise-design limits are relevant, but no acoustic measurement or inspection exists. |

### Linked complaints

| Complaint | Observed device concepts | Observed medical effects | Link review |
|---|---|---|---|
| [CPAP-009 — Claustrophobia and Panic Symptoms](complaints/09-mask-claustrophobia-and-panic.md) | mask-fit | anxiety, panic | `consistent-with-known-risk` · 0.90 |
| [CPAP-019 — Excessive Noise and Insomnia](complaints/19-excessive-noise-and-insomnia.md) | noise | daytime-somnolence, insomnia, sleep-disruption | `consistent-with-known-risk` · 0.91 |

### Review status

> [!question] Human risk-management review
> 2 complaint-link observations are proposed. Counts are not occurrence rates, and no automatic risk-file change is proposed.

## RISK-CPAP-010 — Software, Configuration, or Restart Anomaly

**Version:** 1.0 · **Status:** active · **Owner:** Risk Management Owner · **Source hash:** `sha256:61e96841755399b799040a880f920f9d1f147a9fe26fb720896548835faddcd7`

### Risk-file chain

| Element | Synthetic risk-file statement |
|---|---|
| Hazard/source of harm | Software or configuration behavior that interrupts or changes therapy |
| Sequence of events | Update, software fault, or configuration anomaly occurs → Device restarts or therapy behavior differs from the intended configuration → Pressure delivery is interrupted or not understood by the user |
| Hazardous situation | User receives interrupted or potentially incorrect therapy following software/configuration behavior |
| Anticipated harms | Discomfort (`E2311`); Anxiety (`E020201`); Therapy interruption |
| Anticipated device problems | Application Program Version or Upgrade Problem (`A110206`); Inappropriate or Unexpected Reset (`A160503`); Unexpected Shutdown (`A0719`) |
| Related components | Software; Configuration data |
| Stored severity | Synthetic S3 |
| Stored occurrence | Synthetic P1 — not recalculated |
| Stored residual-risk status | Synthetic accepted — not reassessed by this demo |

The stored risk-file fields above are copied from the synthetic record. This demo does not alter or reassess them.

### Risk controls

| Control ID | Type | Description | Complaint review cue |
|---|---|---|---|
| RC-CPAP-010-01 | inherent-safety | Software lifecycle controls and update validation | Update validation and configuration integrity are relevant, but no software defect is established. |
| RC-CPAP-010-02 | protective-measure | Configuration integrity checks | Update validation and configuration integrity are relevant, but no software defect is established. |
| RC-CPAP-010-03 | protective-measure | Safe recovery and rollback behavior | Recovery controls are relevant because the device resumed therapy, but the initiating anomaly is unknown. |
| RC-CPAP-010-04 | information-for-safety | Update, verification, and support instructions | Update validation and configuration integrity are relevant, but no software defect is established. |

### Linked complaints

| Complaint | Observed device concepts | Observed medical effects | Link review |
|---|---|---|---|
| [CPAP-014 — Unexpected Device Restart](complaints/14-unexpected-device-restart.md) | device-restart, therapy-interruption | no-injury-reported | `variation-of-known-sequence` · 0.88 |
| [CPAP-016 — Pressure Change After Software Update](complaints/16-pressure-change-after-software-update.md) | firmware-update, pressure-setting, therapy-interruption | shortness-of-breath | `variation-of-known-sequence` · 0.83 |

### Review status

> [!question] Human risk-management review
> 2 complaint-link observations are proposed. Counts are not occurrence rates, and no automatic risk-file change is proposed.


## Source and method limitations

- All risk chains, controls, classifications, and dispositions are synthetic and versioned for this demonstration.
- Reverse links are generated from structured risk-link records and validated against all complaint pages.
- A link is a proposal until a qualified risk-management owner reviews it.
- The generator cannot create, approve, close, retire, or modify a risk record.
- Exposure denominator is unavailable; count-based frequency assessment is prohibited.
- External terminology links may be temporarily unavailable without invalidating the pinned local evidence.
