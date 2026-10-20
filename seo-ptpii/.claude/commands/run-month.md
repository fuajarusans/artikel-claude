---
description: Run the full monthly PT PII SEO article batch (keywords defined per month in keywords.md) end-to-end.
argument-hint: <YYYY-MM> [keyword-slug ...]
---

# /run-month — PT PII monthly orchestrator

You are the orchestrator for the PT PII monthly SEO pipeline. Read `CLAUDE.md` first, then run the batch for month **$1**.

Optional: if extra arguments after the month are given, treat them as a subset of keyword slugs to run (otherwise run all keywords in `keywords.md`). Arguments received: `$ARGUMENTS`

## The month's keywords (from `keywords.md` — fully replaces any prior set)

The keyword set is **read from `monthly_runs/$1/keywords.md`** (the user copies `monthly_runs/_keywords.template.md` and fills it). There is **no fixed keyword list** — whatever is in that file IS the month's set (any number of keywords, each with its own article count). For each keyword take `keyword`, `landing_page`, `articles` (default 5), and the optional `priority` / `language` (id|en, default id) / `length` (word band) / `topic_focus` / `client_anchor` / `notes`. Derive `slug` as kebab-case of the keyword.

## Pre-flight
1. **Read the month's keyword set: `monthly_runs/$1/keywords.md`.** REQUIRED — this is the single source of truth for which keywords to produce, and it fully replaces any prior month. If the file is missing, STOP and tell the user to create it from `monthly_runs/_keywords.template.md`. Parse each keyword's `keyword` / `landing_page` / `articles` / optional `priority` / `language` (id|en, default id) / `length` (word band) / `topic_focus` / `client_anchor` / `notes`, plus the month-level `seo_report` if given.
2. Read `CLAUDE.md`, `articles_history/index.json`, and the `seo_report` named in `keywords.md` if any (else rely on live SERP via the strategist).
3. Ensure `monthly_runs/$1/{research,briefs,dossiers,drafts,final}` exist (create if missing).
4. Confirm `$1` matches `YYYY-MM`. If a batch for this month already has briefs, ask whether to resume or overwrite before proceeding.

## Stage 1 — Strategy (one strategist per keyword, in parallel)
Dispatch `seo-keyword-strategist` once per keyword in `keywords.md` (concurrently — independent). Pass each run its `keyword` + `landing_page` + `articles` count + optional fields, AND the **full month keyword list** (so it can pick 2 cousin hubs from within this month's set). Each writes its `articles` briefs to `monthly_runs/$1/briefs/<slug>-01..NN.brief.md` + a research cache at `monthly_runs/$1/research/<slug>.research.json`. Wait for all briefs.

## Stage 2 — Research (up to 30 parallel)
For every brief, dispatch `infra-finance-sme-researcher` → `monthly_runs/$1/dossiers/<brief-id>.dossier.md`. Each waits only on its own brief. Respect the concurrency cap (batch ~6–10 at a time if needed). Wait for all dossiers.

## Stage 3 — Writing (up to 30 parallel, routed by language)
For every dossier, dispatch the writer that matches that keyword’s `language` field in `keywords.md`:
- `language: id` (default) → `seo-article-writer-id` → `monthly_runs/$1/drafts/<brief-id>.id.md`
- `language: en` → `seo-article-writer-en` → `monthly_runs/$1/drafts/<brief-id>.en.md`

A keyword produces articles in ONE language only — never both. Pass the resolved language to the writer explicitly. Wait for all drafts.

> **Length gate (writers can't self-count — MANDATORY trim stage).** After each draft, verify the real length with `python tools/count_words.py <draft-path>` — do NOT trust the writer's `word_count` estimate. Writers consistently overshoot by ~15–20% because they cannot measure their own output. The target band comes from the brief's `target_word_count`, derived from that keyword's `length` field in `keywords.md` (default **1.500–1.800** when unspecified; hard ceiling 1.800). For every draft outside its band, dispatch a **Bash-capable trim agent** (`general-purpose`) that LOOPS `count_words.py` → Edit → re-count until the tool lands inside the band, preserving all must-keeps (meta, 3 links, citations, definition snippet, all H2s + their 40–60-word GEO answers, tables, lists, honest section, FAQ ≥5, every flagged-fact hedge, Kesimpulan/Conclusion + CTA, ≤3 self-mentions) and syncing frontmatter `word_count`. Run these trim agents in parallel (one per out-of-band draft) BEFORE the editor stage. This trim stage is reliable where the writer is not.

## Stage 4 — Editing + originality QC (up to 30 parallel)
For every draft, dispatch `seo-editor` → polished `monthly_runs/$1/final/<brief-id>.<lang>.md` (`<lang>` = that article’s language) + `<brief-id>.qc.md` (binding `recommendation`). The editor now also runs the plagiarism + AI-detector scan (`tools/quality-check.ps1` + WebSearch) as part of the same pass and fixes what it can in-place, so its `recommendation` is the **single commit gate** — there is no separate validator stage and no revise-loop. Wait for all.

## Stage 5 — Curation (1 run)
Dispatch `article-history-curator` for month `$1`. It commits ONLY articles with editor `recommendation: approve` — appending to `articles_history/index.json`, writing per-keyword records, and generating the `.docx`. Everything else stays in `final/` for manual handling.

## Dependencies & parallelization
- The strategist runs (one per keyword) are independent → fire together.
- Researcher/writer/editor are per-article independent → fire concurrently within each stage, respecting the subagent concurrency cap.
- Respect cross-stage dependencies: researcher needs its brief; writer needs its dossier; editor needs the draft; curator needs all editors' qc reports.
- If a stage partially fails, continue the others and collect failures; never let one article block the batch.

## Final report
Summarize: briefs · dossiers · drafts · editor verdicts (approve/revise/reject counts, with `ai_score`/`plagiarism_score` noted) · committed-to-history count · `.docx` generated · and a list of any articles left in `final/` for manual review with the reason (which editor verdict they got). Point the user to `monthly_runs/$1/final/`.

## Notes
- Ahrefs MCP / GSC is optional and currently not connected — the strategist degrades to WebSearch/WebFetch + the `seo_report` named in `keywords.md` (if any). If the user has connected Ahrefs, the strategist uses it automatically.
- For a brand-new keyword or a style check, prefer the **pilot** flow in `CLAUDE.md` §7 (one article end-to-end, user reviews) before a full 30-article run.
