---
description: Produce ONE conditional/ad-hoc SOLTIUS article from a user-given topic (angle specified by the user, e.g. from a topics Google Sheet), end-to-end.
argument-hint: <YYYY-MM> [sheet-url | "row N" | inline topic]
---

# /single-article — SOLTIUS conditional (ad-hoc) single article

Produce **ONE** article for a **user-specified topic + angle/title** (NOT strategist-generated). Same Soltius voice, knowledge base, quality gates, and output as the monthly batch — the only difference is the **creation strategy**: the angle is GIVEN by the user, dedup-checked, then taken through the full chain. **One article per topic.**

Read `CLAUDE.md` first. Month = `$1`. Remaining args = the topic source.

## Inputs
- **Topics source** (one of):
  - A **Google Sheet link** → fetch as CSV: `https://docs.google.com/spreadsheets/d/<ID>/export?format=csv`, parse rows. Expected columns (adapt to what's there): **title/angle** (REQUIRED — the user-given angle), `keyword` (optional), `landing_page` (optional, if it maps to a hub), `notes` (optional).
  - Or a **single inline topic** the user types.
- **Which to make:** if the user names a specific row/topic, make just that one. If they say "all", iterate the sheet making **1 article per row** (respect the concurrency cap). Default: list the sheet's topics and ask which to make.

## Folder & id
- Working files → `conditional/$1/{briefs,dossiers,drafts,final}` (create if missing). Kept **separate** from `monthly_runs/`.
- `brief_id` = `<slug>-c<NN>` where `<slug>` = kebab-case of the keyword (or the topic if no keyword); `c` marks conditional; NN increments per topic. Avoids collision with monthly `<slug>-NN`.

## Flow (per topic — 1 article each)
1. **Stage 1 — Brief (conditional / given-angle mode):** dispatch `seo-keyword-strategist` in **Conditional mode** (see its agent file). It uses the user's GIVEN title/angle (does not invent it), **dedup-checks vs `articles_history/`** (if duplicate → STOP & flag the user), researches live SERP + PAA, picks cousins, and writes ONE brief to `conditional/$1/briefs/<id>.brief.md`.
2. **Stage 2 — Researcher** → `conditional/$1/dossiers/<id>.dossier.md`.
3. **Stage 3 — Writer** (`seo-article-writer-id`) → `conditional/$1/drafts/<id>.id.md` (Soltius voice, current length band, GEO §2a, `## Kesimpulan`, natural inline links, soft CTA).
4. **Stage 4 — Editor** → polished `conditional/$1/final/<id>.id.md` + `<id>.qc.md` (binding `recommendation`).
5. **Stage 5 — Validator** → `conditional/$1/final/<id>.quality.md` (`verdict`).
6. **Stage 6 — Curator** → commit to `articles_history` ONLY if editor `approve` AND validator `pass`; add the index entry with **`"type": "conditional"`** (id = `$1-<id>`); build the `.docx`. If a gate fails, leave it in `conditional/$1/final/` for manual review.

## Rules
- **Dedup is mandatory** — a conditional article must be distinct from everything already in `articles_history/` (the strategist enforces this; flag and pause on a near-duplicate).
- Topics may be **within the 6 hubs or new** (mixed). If a relevant hub exists, link to it (natural inline, in the lead); if not, use 2 related cousins + external citations only, and note the missing hub.
- Everything else (length, GEO §2a, anti-AI §5, Soltius framing ≤3 mentions, FAQ, soft website CTA) = identical to the monthly pipeline.

## Report back
Per article: topic/angle, brief-id, editor recommendation, validator verdict, committed? (+ reason if not), `.docx` path. Point the user to `conditional/$1/final/`.
