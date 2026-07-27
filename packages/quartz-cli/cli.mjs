#!/usr/bin/env node
import { fileURLToPath } from "node:url"

process.chdir(fileURLToPath(new URL("../../", import.meta.url)))
await import("../../quartz/bootstrap-cli.mjs")
