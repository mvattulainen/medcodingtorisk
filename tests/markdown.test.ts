import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import test from "node:test"
import { resolve } from "node:path"
import { records } from "./helpers"

const headings = [
  "## Evidence spans",
  "## Accepted coded terms",
  "## Alternative candidates",
  "## Risk-management linkage",
  "### Risk-control review",
  "## Provenance",
  "## Related complaints",
]

test("exactly twenty complete complaint pages are generated", () => {
  assert.equal(records.length, 20)
  for (const record of records) {
    const file = resolve(`content/complaints/${record.slug}.md`)
    assert.equal(existsSync(file), true)
    const page = readFileSync(file, "utf8")
    assert.match(page, /synthetic: true/)
    assert.match(page, /Synthetic demonstration record/)
    for (const heading of headings) assert.ok(page.includes(heading), `${record.id}: ${heading}`)
    assert.doesNotMatch(page, /<script\b/i)
  }
})

test("risk page contains every item and every reverse complaint link", () => {
  const riskPage = readFileSync(resolve("content/risk-management.md"), "utf8")
  for (const record of records) {
    for (const link of record.riskLinks) {
      assert.ok(riskPage.includes(`## ${link.riskItemId} —`))
      assert.ok(riskPage.includes(`complaints/${record.slug}.md`))
    }
  }
})
