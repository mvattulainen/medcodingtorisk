import { readFileSync } from "node:fs"
import { resolve } from "node:path"

const query = process.argv.slice(2).join(" ").trim().toLowerCase()
if (!query) throw new Error("Usage: npm exec tsx scripts/search-imdrf.ts -- <search terms>")

const queryTokens = new Set(query.split(/\W+/).filter(Boolean))
const records = ["a", "b", "c", "d", "e", "f", "g"].flatMap((annex) =>
  JSON.parse(readFileSync(resolve(`data/imdrf/2026/annex-${annex}.json`), "utf8")),
)

const ranked = records
  .filter((record) => record.selectable)
  .map((record) => {
    const term = record.term.toLowerCase()
    const termTokens = new Set(term.split(/\W+/).filter(Boolean))
    const overlap = [...queryTokens].filter((token) => termTokens.has(token)).length
    const score = term === query ? 1 : term.includes(query) ? 0.9 : overlap / Math.max(queryTokens.size, 1)
    return { score, record }
  })
  .filter((result) => result.score > 0)
  .sort((a, b) => b.score - a.score || a.record.code.localeCompare(b.record.code))
  .slice(0, 10)

for (const { score, record } of ranked) {
  console.log(`${score.toFixed(2)}\t${record.code}\t${record.term}\tAnnex ${record.annex}`)
}
