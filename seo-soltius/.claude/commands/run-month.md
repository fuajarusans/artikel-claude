---
description: Run the full monthly SOLTIUS SEO article batch (keywords defined per month in keywords.md) end-to-end.
argument-hint: <YYYY-MM> [keyword-slug ...]
---

# /run-month — SOLTIUS monthly orchestrator

You are the orchestrator for the SOLTIUS monthly SEO pipeline. Read `CLAUDE.md` first, then run the batch for month **$1**.

Optional: if extra arguments after the month are given, treat them as a subset of keyword slugs to run (otherwise run all keywords in `keywords.md`). Arguments received: `$ARGUMENTS`

## The month's keywords (from `keywords.md` — fully replaces any prior set)

The keyword set is **read from `monthly_runs/$1/keywords.md`** (the user copies `monthly_runs/_keywords.template.md` and fills it). There is **no fixed keyword list** — whatever is in that file IS the month's set (any number of keywords, each with its own article count). For each keyword take `keyword`, `landing_page`, `articles` (default 5), and the optional `priority` / `sap_focus` / `soltius_anchor` / `notes`. Derive `slug` as kebab-case of the keyword.

## Pre-flight
1. **Read the month's keyword set: `monthly_runs/$1/keywords.md`.** REQUIRED — this is the single source of truth for which keywords to produce, and it fully replaces any prior month. If the file is missing, STOP and tell the user to create it from `monthly_runs/_keywords.template.md`. Parse each keyword's `keyword` / `landing_page` / `articles` / optional `priority` / `sap_focus` / `soltius_anchor` / `notes`, plus the month-level `seo_report` if given.
2. Read `CLAUDE.md`, `articles_history/index.json`, and the `seo_report` named in `keywords.md` if any (else rely on live SERP via the strategist).
3. Ensure `monthly_runs/$1/{research,briefs,dossiers,drafts,final}` exist (create if missing).
4. Confirm `$1` matches `YYYY-MM`. If a batch for this month already has briefs, ask whether to resume or overwrite before proceeding.

## Stage 1 — Strategy (one strategist per keyword, in parallel)
Dispatch `seo-keyword-strategist` once per keyword in `keywords.md` (concurrently — independent). Pass each run its `keyword` + `landing_page` + `articles` count + optional fields, AND the **full month keyword list** (so it can pick 2 cousin hubs from within this month's set). Each writes its `articles` briefs to `monthly_runs/$1/briefs/<slug>-01..NN.brief.md` + a research cache at `monthly_runs/$1/research/<slug>.research.json`. Wait for all briefs.

## Stage 2 — Research (up to 30 parallel)
For every brief, dispatch `enterprise-it-sme-researcher` → `monthly_runs/$1/dossiers/<brief-id>.dossier.md`. Each waits only on its own brief. Respect the concurrency cap (batch ~6–10 at a time if needed). Wait for all dossiers.

## Stage 3 — Writing (up to 30 parallel)
For every dossier, dispatch `seo-article-writer-id` → `monthly_runs/$1/drafts/<brief-id>.id.md`. Wait for all drafts.

## Stage 4 — Editing (up to 30 parallel)
For every draft, dispatch `seo-editor` → polished `monthly_runs/$1/final/<brief-id>.id.md` + `<brief-id>.qc.md` (binding `recommendation`). Wait for all.

## Stage 5 — Quality validation (up to 30 parallel, with revise loops)
For every editor final, dispatch `seo-quality-validator` → `<brief-id>.quality.md` (`verdict`). On `revise`, the validator loops `seo-article-writer-id` on the flagged passages then re-validates (max 2 loops). Wait for all verdicts to settle.

## Stage 6 — Curation (1 run)
Dispatch `article-history-curator` for month `$1`. It commits ONLY articles with editor `recommendation: approve` AND validator `verdict: pass` — appending to `articles_history/index.json`, writing per-keyword records, and generating `.id.docx`. Everything else stays in `final/` for manual handling.

## Dependencies & parallelization
- The 6 strategist runs are independent → fire together.
- Researcher/writer/editor/validator are per-article independent → fire concurrently within each stage, respecting the subagent concurrency cap.
- Respect cross-stage dependencies: researcher needs its brief; writer needs its dossier; editor needs the draft; validator needs the editor's final; curator needs all validators.
- If a stage partially fails, continue the others and collect failures; never let one article block the batch.

## Final report
Summarize: briefs · dossiers · drafts · editor verdicts (approve/revise/reject counts) · validator verdicts (pass/revise/reject counts) · committed-to-history count · `.docx` generated · and a list of any articles left in `final/` for manual review with the reason (which gate they missed). Point the user to `monthly_runs/$1/final/`.

## Notes
- Ahrefs MCP / GSC is optional and currently not connected — the strategist degrades to WebSearch/WebFetch + `_extracted/seo_report_apr2026.md`. If the user has connected Ahrefs, the strategist uses it automatically.
- For a brand-new keyword or a style check, prefer the **pilot** flow in `CLAUDE.md` §7 (one article end-to-end, user reviews) before a full 30-article run.
