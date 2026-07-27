import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { resolve } from "node:path"
import { records } from "./helpers"

const imdrf = ["a", "b", "c", "d", "e", "f", "g"].flatMap(
  (annex) =>
    JSON.parse(readFileSync(resolve(`data/imdrf/2026/annex-${annex}.json`), "utf8")) as Array<{
      code: string
      term: string
      selectable: boolean
    }>,
)
const imdrfByCode = new Map(imdrf.map((record) => [record.code, record]))
const who = JSON.parse(
  readFileSync(resolve("data/icd11-cache/2026-01/index.json"), "utf8"),
) as Array<{ query: string; candidates: Array<{ theCode: string }> }>
const whoByQuery = new Map(
  who.map((entry) => [entry.query, new Set(entry.candidates.map((candidate) => candidate.theCode))]),
)

test("the official IMDRF release imports as unique local codes", () => {
  assert.equal(imdrf.length, 1938)
  assert.equal(new Set(imdrf.map((record) => record.code)).size, imdrf.length)
  assert.equal(imdrfByCode.get("A050402")?.term, "Gas/Air Leak")
  assert.equal(imdrfByCode.get("E0845")?.term, "Eye Irritation")
  assert.equal(imdrfByCode.get("G04071")?.term, "Humidifier")
})

test("every accepted terminology code is backed by its pinned source", () => {
  for (const record of records) {
    for (const mention of record.evidence) {
      const accepted = mention.acceptedCode
      if (!accepted) continue
      if (accepted.terminology === "IMDRF AET") {
        assert.equal(imdrfByCode.get(accepted.code)?.selectable, true, `${mention.id}: ${accepted.code}`)
      } else if (accepted.terminology === "WHO ICD-11 MMS") {
        assert.equal(
          whoByQuery.get(accepted.queryUsed)?.has(accepted.code),
          true,
          `${mention.id}: ${accepted.code}`,
        )
        assert.ok(accepted.confidence >= 0.8)
      } else {
        assert.equal(accepted.humanVerified, true)
      }
    }
  }
})

test("negated evidence never receives an accepted code", () => {
  const negated = records.flatMap((record) => record.evidence).filter((mention) => mention.assertion === "negated")
  assert.ok(negated.length >= 2)
  for (const mention of negated) assert.equal(mention.acceptedCode, null, mention.id)
})
