import { createHash } from "node:crypto"
import type { ConfidenceBand } from "./types"

export const BUILD_TIMESTAMP = "2026-07-27T00:00:00.000Z"
export const PIPELINE_VERSION = "1.1.0"
export const IMDRF_SOURCE_URL =
  "https://www.imdrf.org/sites/default/files/2026-03/annexa-g-consolidated2026-revised_0.JSON"
export const IMDRF_RELEASE_PAGE =
  "https://www.imdrf.org/documents/terminologies-categorized-adverse-event-reporting-aer-terms-terminology-and-codes"
export const WHO_RELEASE = "2026-01"
export const WHO_API_VERSION = "v2"

export function sha256(value: string | Buffer): string {
  return `sha256:${createHash("sha256").update(value).digest("hex")}`
}

export function stableJson(value: unknown): string {
  return `${JSON.stringify(value, null, 2)}\n`
}

export function confidenceBand(score: number): ConfidenceBand {
  if (score >= 0.9) return "strong"
  if (score >= 0.8) return "good"
  if (score >= 0.65) return "plausible"
  return "weak"
}

export function confidenceLabel(score: number): string {
  return {
    strong: "Strong",
    good: "Good",
    plausible: "Plausible",
    weak: "Weak",
  }[confidenceBand(score)]
}

export function escapeTable(value: string): string {
  return value.replaceAll("|", "\\|").replaceAll("\n", " ")
}

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}
