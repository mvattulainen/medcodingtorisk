import assert from "node:assert/strict"
import test from "node:test"
import { records, riskById } from "./helpers"

const expected = [
  "RISK-CPAP-006",
  "RISK-CPAP-005",
  "RISK-CPAP-005",
  "RISK-CPAP-003",
  "RISK-CPAP-003",
  "RISK-CPAP-002",
  "RISK-CPAP-003",
  "RISK-CPAP-002",
  "RISK-CPAP-009",
  "RISK-CPAP-007",
  "RISK-CPAP-004",
  "RISK-CPAP-001",
  "RISK-CPAP-001",
  "RISK-CPAP-010",
  "RISK-CPAP-008",
  "RISK-CPAP-010",
  "RISK-CPAP-003",
  "RISK-CPAP-007",
  "RISK-CPAP-009",
  "RISK-CPAP-001",
]

test("all twenty deterministic primary risk mappings are preserved", () => {
  assert.deepEqual(
    records.map((record) => record.primaryRiskItemId),
    expected,
  )
})

test("risk links reference valid evidence, items, versions, and controls", () => {
  for (const record of records) {
    const evidenceIds = new Set(record.evidence.map((mention) => mention.id))
    for (const link of record.riskLinks) {
      const risk = riskById.get(link.riskItemId)
      assert.ok(risk)
      assert.equal(link.riskItemVersion, risk.version)
      assert.ok(link.evidenceMentionIds.length > 0)
      assert.ok(link.evidenceMentionIds.every((id) => evidenceIds.has(id)))
      assert.ok(
        link.controlReviewCues.every((cue) =>
          risk.riskControls.some((control) => control.id === cue.controlId),
        ),
      )
      assert.equal(link.reviewDisposition, "not-reviewed")
      assert.equal(link.humanVerified, false)
    }
  }
})

test("ambiguity, control concerns, and a coverage gap are demonstrated", () => {
  const links = records.flatMap((record) => record.riskLinks)
  assert.ok(links.some((link) => link.classification === "variation-of-known-sequence"))
  assert.ok(links.filter((link) => link.classification === "possible-risk-control-concern").length >= 2)
  assert.ok(links.some((link) => link.classification === "possible-risk-file-coverage-gap"))
  assert.ok(links.some((link) => link.confidence < 0.7))
})
