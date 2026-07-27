import assert from "node:assert/strict"
import test from "node:test"
import { records } from "./helpers"

test("control cues remain non-conclusive", () => {
  const forbidden = /\b(control failed|control effective|risk unacceptable|risk acceptable)\b/i
  for (const record of records) {
    for (const link of record.riskLinks) {
      for (const cue of link.controlReviewCues) {
        assert.doesNotMatch(cue.rationale, forbidden)
      }
    }
  }
})

test("no automated risk decision fields are emitted on links", () => {
  for (const link of records.flatMap((record) => record.riskLinks)) {
    assert.ok(!("severityCategory" in link))
    assert.ok(!("occurrenceCategory" in link))
    assert.ok(!("residualRiskStatus" in link))
    assert.ok(!("benefitRiskConclusion" in link))
  }
})
