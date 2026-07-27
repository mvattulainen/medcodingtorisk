import assert from "node:assert/strict"
import test from "node:test"
import { confidenceBand } from "../scripts/lib"
import { records } from "./helpers"

test("confidence bands follow the deterministic thresholds", () => {
  assert.equal(confidenceBand(0.99), "strong")
  assert.equal(confidenceBand(0.9), "strong")
  assert.equal(confidenceBand(0.89), "good")
  assert.equal(confidenceBand(0.8), "good")
  assert.equal(confidenceBand(0.79), "plausible")
  assert.equal(confidenceBand(0.65), "plausible")
  assert.equal(confidenceBand(0.64), "weak")
})

test("terminology and risk confidence remain separate", () => {
  for (const record of records) {
    for (const mention of record.evidence) {
      for (const candidate of [
        ...(mention.acceptedCode ? [mention.acceptedCode] : []),
        ...mention.candidates,
      ]) {
        assert.equal(candidate.confidenceBand, confidenceBand(candidate.confidence))
      }
    }
    for (const link of record.riskLinks) {
      assert.equal(link.confidenceBand, confidenceBand(link.confidence))
      assert.ok(!("clinicalRisk" in link))
    }
  }
})
