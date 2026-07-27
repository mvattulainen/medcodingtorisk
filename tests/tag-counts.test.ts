import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { resolve } from "node:path"
import { records } from "./helpers"

test("aggregate tag counts equal a fresh distinct-page scan", () => {
  const index = readFileSync(resolve("content/index.md"), "utf8")
  for (const field of ["medicalTags", "technicalTags"] as const) {
    const counts = new Map<string, number>()
    for (const record of records) {
      for (const tag of new Set(record[field])) counts.set(tag, (counts.get(tag) ?? 0) + 1)
    }
    for (const [tag, count] of counts) {
      assert.ok(index.includes(`| \`${tag}\` | ${count} |`), `${tag} should equal ${count}`)
    }
  }
})
