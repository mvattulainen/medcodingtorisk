# CPAP Complaint Coder and Risk Linker

A static, auditable demonstration that transforms 20 synthetic English CPAP complaints into evidence-grounded terminology records and links them bidirectionally to a simulated ISO 14971-style risk register.

The published site is a review aid. It does not diagnose, determine causality or reportability, calculate occurrence, change severity or risk acceptability, or replace qualified medical, quality, regulatory, or risk-management review.

## What the demo contains

- Exactly 20 deterministic synthetic complaint pages.
- Exact evidence spans with offsets, assertion state, routing, accepted codes, alternatives, confidence, and provenance.
- WHO ICD-11 MMS `2026-01` clinical results cached from the official authenticated API.
- The official IMDRF AET `2026` Annexes A–G pinned locally with source checksums.
- Selective SNOMED CT human-review tasks; no scraping and no automatic concept acceptance.
- Ten synthetic CPAP risk items with chain-level matches, controls, review cues, and reverse complaint links.
- Aggregate tag counts, risk-item counts, terminology sources, review queues, and deterministic build metadata.
- Quartz static publication and GitHub Pages deployment.

## Quick start

Requirements: Node.js 22 or newer and npm 10.9 or newer.

```bash
npm ci
npm run build
```

The production site is written to `public/`. For a local preview:

```bash
npm run serve
```

The site build does not need WHO credentials because all selected WHO search responses are pinned in `data/icd11-cache/2026-01/`.

## Refreshing terminology

To refresh the authenticated WHO cache, supply build-time environment variables and run:

```bash
npm run query:icd11
```

Required variables are shown in `.env.example`. A local `credentials/` directory may also be used by the development script. It is excluded by `.gitignore`; never commit it, tokens, or environment files.

To re-import the pinned official IMDRF JSON:

```bash
npm run import:imdrf
```

The import rejects malformed records, conflicting duplicates, unknown parents, and missing source data. The official 2026 Annex E file cross-lists some identical codes; those documented repeats are merged while all category and hierarchy paths are preserved.

## Deterministic pipeline

```text
20 fixed complaint seeds
  → exact evidence spans and assertion handling
  → WHO ICD-11 / local IMDRF routing
  → acceptance, alternatives, and abstention
  → separate medical and technical tags
  → transparent risk-chain matching
  → complaint, index, risk, and review pages
  → domain validator
  → Quartz static build
```

Run the pipeline independently:

```bash
npm run build:content
npm test
npm run check
npx quartz build
```

`npm run validate` verifies page completeness, exact source offsets, pinned-code integrity, expected primary risk mappings, control references, reverse links, aggregate tag counts, internal links, safety wording, and absence of protected credential values.

## Main files

| Path | Purpose |
|---|---|
| `content/` | 22 generated Quartz pages |
| `data/complaints.records.json` | Structured complaint intermediate representation |
| `data/coding-results.json` | Evidence, terminology candidates, and provenance |
| `data/risk-links.json` | Proposed risk links and chain matches |
| `data/risk-management/cpap-risk-register.json` | Synthetic versioned risk register |
| `data/terminology-manifest.json` | Pinned source releases, URLs, hashes, and caches |
| `review/` | SNOMED CT and risk-management human-review queues |
| `scripts/` | Import, querying, deterministic generation, and validation |
| `tests/` | Terminology, confidence, linking, control, Markdown, and tag tests |

## Official sources

- [WHO ICD API documentation](https://icd.who.int/docs/icd-api/)
- [WHO ICD-11 supported releases](https://icd.who.int/docs/icd-api/SupportedClassifications/)
- [IMDRF adverse-event terminology](https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes)
- [SNOMED International Browser](https://browser.ihtsdotools.org/)
- [Quartz documentation](https://quartz.jzhao.xyz/)

## Data and security boundary

All complaint and risk data are synthetic. The public output contains Markdown, static assets, source links, and generated metadata only. WHO client credentials, OAuth tokens, real complaint data, unlicensed bulk SNOMED CT content, and proprietary manufacturer risk records are prohibited from the site and repository.

The project is based on [Quartz](https://github.com/jackyzha0/quartz), licensed under the MIT License.
