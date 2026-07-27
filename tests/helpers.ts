import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import type { ComplaintRecord, RiskItemSeed } from "../scripts/types"

export const records = JSON.parse(
  readFileSync(resolve("data/complaints.records.json"), "utf8"),
) as ComplaintRecord[]

export const riskRegister = JSON.parse(
  readFileSync(resolve("data/risk-management/cpap-risk-register.json"), "utf8"),
) as Array<RiskItemSeed & { sourceFile: string; sourceHash: string }>

export const riskById = new Map(riskRegister.map((item) => [item.id, item]))
