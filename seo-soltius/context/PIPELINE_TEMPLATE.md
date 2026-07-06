# Multi-Agent SEO Content Pipeline — Reusable Template

A complete, portable pipeline for producing bilingual SEO articles at scale using Claude Code's sub-agent system. Built originally for an aquaculture client at WEBARQ Promote, but **the architecture is industry-agnostic** — fork it for any client by swapping out the knowledge base files and keyword map.

> **What you get:** 7 specialized AI agents, fully autonomous monthly batch, ~60 articles/month (configurable), built-in anti-AI-tell guardrails, generated images via FLUX, .docx output with embedded images, queryable article history that prevents angle cannibalization across months.

---

## Table of contents

1. [TL;DR + costs](#1-tldr--costs)
2. [Quick start — clone for a new client](#2-quick-start--clone-for-a-new-client)
3. [The 7 agents](#3-the-7-agents)
4. [Monthly workflow](#4-monthly-workflow)
5. [Folder structure](#5-folder-structure)
6. [Knowledge base files](#6-knowledge-base-files)
7. [Agent definitions in detail](#7-agent-definitions-in-detail)
8. [External integrations](#8-external-integrations)
9. [Helper scripts](#9-helper-scripts)
10. [Customizing for a new client](#10-customizing-for-a-new-client)
11. [Cost projections](#11-cost-projections)
12. [Guardrails (non-negotiable)](#12-guardrails-non-negotiable)
13. [Three optimizations baked in](#13-three-optimizations-baked-in)
14. [Phase 2 — deferred](#14-phase-2--deferred)
15. [Appendix — example invocations](#15-appendix--example-invocations)

---

## 1. TL;DR + costs

| | |
|---|---|
| **Agents** | 7 specialized sub-agents (Claude Code `.claude/agents/*.md`) |
| **Output** | Markdown + Word .docx (with embedded images) |
| **Languages** | Bahasa Indonesia + English (adapted, not literal-translated) — configurable |
| **Scale** | 6 keywords × 5 articles × 2 languages = 60 deliverables / month (configurable) |
| **Image gen** | BFL FLUX (default, ~$2.70/mo for 90 images) · OpenAI gpt-image-1 (fallback) |
| **Research data** | Ahrefs MCP (includes GSC integration) + live SERP scraping |
| **Approval** | Fully autonomous — editor's `recommendation` field gates which articles commit to history |
| **Tech stack** | Claude Code · PowerShell · Pandoc 3.9.0.2 · BFL FLUX API · OpenAI API · Ahrefs MCP |

### Per-article + per-month cost

| Item | Per article | Per month (30 articles) |
|---|---|---|
| Image generation (1 hero FLUX 1.1 pro + 2 in-body FLUX dev) | ~$0.09 | **~$2.70** |
| Wall-clock (with parallel image gen) | ~25 min | ~12 hours total (with parallelization) |
| Ahrefs MCP calls (with research cache) | n/a | 6 keyword pulls (vs 30 without cache) |
| Manual review burden | 0 (autonomous) | Review final/ at your pace |

---

## 2. Quick start — clone for a new client

### Prerequisites (one-time, your machine)

| Tool | Why | Notes |
|---|---|---|
| **Claude Code** | Runs the agent system | https://claude.com/claude-code |
| **PowerShell 5.1+** | Helper scripts | Pre-installed on Windows; on macOS/Linux install PowerShell Core |
| **Pandoc** | md→docx conversion | Portable copy lives in `tools/pandoc/`; project provides it |

### API keys you'll need

| Service | Used for | Where to get | Cost |
|---|---|---|---|
| **Ahrefs MCP** | Keyword research, SERP, GSC integration | Ahrefs subscription with MCP enabled | Existing subscription |
| **BFL FLUX** | Image generation (default) | https://api.bfl.ai/ | Pay-per-image (~$0.025/img) |

### Steps to clone for a new client

```
1. Copy the entire project folder to <new-client-folder>/
2. Wipe the client-specific files:
   • Delete monthly_runs/2026-05/ (old run artifacts)
   • Reset articles_history/index.json to {"schema_version":"1.0","last_updated":null,"articles":[]}
   • Delete articles_history/by_keyword/<old-slugs>/
3. Customize knowledge_base/ for the new client:
   • company_profile.md  — new client facts, products, positioning
   • product_matrix.md   — new product → topic mapping
   • style_guide.md      — keep most; adjust tone if niche differs
   • seo_playbook.md     — keep as-is (SEO rules are universal)
4. Update CLAUDE.md keyword map:
   • Replace the 6 keyword rows with new keywords + landing pages
   • Note any keywords that share landing pages (diverge angles)
5. Update .env with the new client's API keys (if separate)
6. Create new article_history/by_keyword/<keyword-slug>/ folders
7. Run the 1-article pilot on the new client's primary keyword
8. Iterate on knowledge_base files based on pilot output quality
9. When pilot quality is good → invoke /run-month for full batch
```

The 7 agents themselves (`.claude/agents/*.md`), all helper scripts (`tools/*.ps1`), and the architecture (folder layout, file conventions) **do not change between clients** — they reference the knowledge base instead of hardcoding client info.

---

## 3. The 7 agents

| # | Agent name | Model | Role | Fires |
|---|---|---|---|---|
| 1 | `seo-keyword-strategist` | opus | Generates 5 deduped article concepts per keyword | 6× per month (one per keyword) |
| 2 | `aquaculture-sme-researcher` | sonnet | Fact-rich dossier per concept | 30× per month |
| 3 | `seo-article-writer-id` | opus | Bahasa Indonesia draft (1,800–2,500 words) | 30× per month |
| 4 | `seo-article-writer-en` | opus | English draft (1,500–2,200 words, adapted) | 30× per month |
| 5 | `aquaculture-image-generator` | sonnet | 3 PNGs per article via FLUX | 30× per month |
| 6 | `seo-editor` | opus | AI-tell scan, fact check, SEO checklist, polish | 30× per month |
| 7 | `article-history-curator` | haiku | Commits approved articles + builds .docx | 1× per month |

> **Renaming**: agent #2 and #5 use "aquaculture" in their name because this template was built for an aquaculture client. For a different niche, you can either keep the name (it's just a string) or rename — e.g., `<niche>-sme-researcher`, `<niche>-image-generator`. If you rename, update the `name:` frontmatter in the .md file AND any references in CLAUDE.md.

---

## 4. Monthly workflow

```
                     ┌─────────────────────────┐
                     │ User: "/run-month YYYY-MM" │
                     └────────────┬────────────┘
                                  │
                ┌─────────────────▼─────────────────┐
                │  seo-keyword-strategist (×6)      │  → 30 briefs
                │  (per-keyword research cached so  │
                │   the 5 sibling briefs reuse it)  │
                └─────────────────┬─────────────────┘
                                  │
                ┌─────────────────▼─────────────────┐
                │  <niche>-sme-researcher (×30)     │  → 30 dossiers
                └─────────────────┬─────────────────┘
                                  │
              ┌───────────────────┴───────────────────┐
              ▼                                       ▼
  ┌─────────────────────┐                 ┌─────────────────────┐
  │ writer-id (×30)     │                 │ writer-en (×30)     │  → 60 drafts
  └─────────┬───────────┘                 └─────────┬───────────┘
            │                                       │
            └───────────────────┬───────────────────┘
                                ▼
                ┌───────────────────────────────────┐
                │ <niche>-image-generator (×30)     │  → 30 image plans
                │ (each runs 3 images in parallel)  │     + ~90 PNGs
                └───────────────┬───────────────────┘
                                ▼
                ┌───────────────────────────────────┐
                │  seo-editor (×30, both langs)     │  → 60 finals + 30 QC reports
                └───────────────┬───────────────────┘
                                ▼
                ┌───────────────────────────────────┐
                │  article-history-curator (×1)     │  → history + .docx pair
                │  Filter: editor recommendation    │     (revise/reject stay in final/
                │  must be 'approve' to commit      │      for manual handling)
                └───────────────────────────────────┘
```

### Stage timings (measured from pilot)

| Stage | Per invocation | Total (30 articles, parallel) |
|---|---|---|
| Strategist | ~7 min | ~7 min (6 parallel) |
| Researcher | ~6 min | ~6 min (30 parallel) |
| Writer ID + EN | ~8 min each | ~8 min (60 parallel) |
| Image gen | ~25 sec (3 parallel via FLUX) | ~25 sec × 30 ≈ 12 min (depends on concurrency cap) |
| Editor | ~10 min | ~10 min (30 parallel) |
| Curator | ~3 min total | 3 min |
| **Total wall-clock** | — | **~45 min** end-to-end if everything truly parallelizes |

---

## 5. Folder structure

```
<project-root>/
├── CLAUDE.md                              ← orchestration brain (auto-loaded each session)
├── .env                                   ← API keys (gitignored)
├── .env.example                           ← template for new contributors
├── .gitignore                             ← keeps .env, generated PNGs, pandoc binary out of git
├── .claude/
│   ├── agents/                            ← 7 agent system prompts
│   │   ├── seo-keyword-strategist.md
│   │   ├── <niche>-sme-researcher.md
│   │   ├── seo-article-writer-id.md
│   │   ├── seo-article-writer-en.md
│   │   ├── <niche>-image-generator.md
│   │   ├── seo-editor.md
│   │   └── article-history-curator.md
│   └── commands/                          ← slash commands
│       └── run-month.md                   ← (to be built — task #12)
├── context/                               ← original source PDFs / DOCXs from the client
│   ├── <client> Company Profile.pdf
│   ├── <client> Sample Article.docx
│   └── <client> Monthly Report Template.pdf
├── _extracted/                            ← plain-text extracts of context (for agent reads)
├── knowledge_base/                        ← agents reference these files
│   ├── company_profile.md                 ← client facts, products, positioning
│   ├── style_guide.md                     ← article anatomy + anti-AI rules
│   ├── product_matrix.md                  ← topic → product mapping
│   └── seo_playbook.md                    ← 2026 algorithm + AI Overview rules
├── articles_history/
│   ├── index.json                         ← master log (queryable; angle hashes prevent dups)
│   ├── README.md                          ← schema reference
│   └── by_keyword/<keyword-slug>/         ← per-article records
│       └── <article-slug>.md
├── monthly_runs/<YYYY-MM>/
│   ├── research/<keyword-slug>.research.json  ← per-keyword research cache
│   ├── briefs/<keyword-slug>-NN.brief.md      ← strategist output
│   ├── dossiers/<keyword-slug>-NN.dossier.md  ← researcher output
│   ├── drafts/<keyword-slug>-NN.{id,en}.md    ← writer output (pre-edit)
│   └── final/                                 ← editor output + images + .docx
│       ├── <brief-id>.{id,en}.md              ← polished markdown
│       ├── <brief-id>.{id,en}.docx            ← .docx with embedded images
│       ├── <brief-id>.qc.md                   ← editor QC report (binding recommendation)
│       ├── <brief-id>.images.json             ← image plan + generation status
│       ├── <brief-id>.manifest.json           ← batch helper input
│       ├── <brief-id>.manifest.results.json   ← batch helper output (per-image status)
│       ├── <brief-id>-01.png                  ← image NN matches {IMAGE_NN: ...} placeholder
│       ├── <brief-id>-02.png                  ← same set is shared between .id.docx and .en.docx
│       └── <brief-id>-03.png
├── tools/                                 ← helper scripts
│   ├── md-to-docx.ps1                     ← pandoc wrapper, auto-embeds images
│   ├── generate-image-flux.ps1            ← BFL FLUX single-image helper (default)
│   ├── generate-image.ps1                 ← OpenAI gpt-image-1 helper (fallback)
│   ├── generate-images-batch.ps1          ← parallel batch (3 concurrent)
│   ├── reference.docx                     ← pandoc styling template (copy of client's sample article)
│   └── pandoc/                            ← portable pandoc install (gitignored)
└── docs/                                  ← human documentation (architecture HTML, this template)
    ├── architecture/                      ← internal architecture doc
    ├── architecture-portfolio/            ← anonymized portfolio variant
    └── PIPELINE_TEMPLATE.md               ← this file
```

### Naming conventions

| Item | Format | Example |
|---|---|---|
| Keyword slug | kebab-case, ≤30 chars | `pakan-ikan-nila` |
| Brief ID | `<keyword-slug>-NN` (NN = 01..05) | `pakan-ikan-nila-01` |
| Article slug (for CMS) | kebab-case, ≤60 chars | `cara-menghitung-pakan-ikan-nila-1000-ekor` |
| Image files | `<brief-id>-NN.png` matching `{IMAGE_NN: ...}` markers | `pakan-ikan-nila-01-01.png` |
| Languages | `id` / `en` suffix | `<brief-id>.id.md`, `<brief-id>.en.md` |

---

## 6. Knowledge base files

These four files are the **single source of truth** the agents reference. They're the most client-specific part of the system — change these to retarget the pipeline.

### `knowledge_base/company_profile.md`

Contains:
- Legal name, founding year, parent company
- Operational scale (facilities, locations, capacity)
- R&D / innovation arms
- Product lineup with **verified specs** (no agent invents these — researcher pulls from this file verbatim)
- Certifications + awards
- Sustainability programs
- Pre-approved positioning lines writers can use in closings (writers paraphrase, but the lines define the tone)
- Customer profile + channels

**Rule for writers:** any STP-specific fact in a draft must trace back to this file, or be flagged by the researcher with an external source URL. Drafts citing claims not in this file fail editor QC.

### `knowledge_base/style_guide.md`

Contains:
- Article anatomy template (lead → context → 4–7 H2s → FAQ → closing CTA)
- Length targets per language
- Mandatory format mix per article (at least 1 numbered list, 1 bullet list, 1 table, 6+ specific numbers)
- Bahasa Indonesia tone rules
- English tone rules (international trade-publication voice)
- **§5 — Anti-AI patterns to AVOID** (the strictest section; editor enforces this ruthlessly)
- Meta block YAML format
- FAQ block format (for FAQPage schema)
- Internal/external link discipline
- Citation style
- Product mention discipline

Most of this section is universal across niches — only the niche-specific examples need updating.

### `knowledge_base/product_matrix.md`

Contains:
- Mapping of topic / phase / species → which client product to mention
- Exact product specs (researcher copies verbatim; editor verifies)
- Anchor phrasing direction (1 example per product showing how to introduce it naturally)
- Service / program mentions (for non-product credibility lifts)
- Blacklist (things NOT to claim — e.g., unverifiable superlatives)

This is the most client-specific file. Rewrite entirely for a new client.

### `knowledge_base/seo_playbook.md`

Contains:
- Google 2026 ranking signals (HCU, E-E-A-T, SpamBrain)
- AI Overview / SGE optimization rules
- On-page SEO checklist (meta lengths, H-hierarchy, LSI density, FAQ block, internal/external link counts)
- Structured data targets (Article, FAQPage, HowTo schemas)
- Topical authority via clusters
- Bahasa Indonesia search nuances (or adapt for other locales)
- Featured snippet + PAA optimization
- SERP feature targets

This file is **mostly universal** — keep it across clients unless the locale changes (e.g., a non-Indonesian client would need adjusted search-behavior notes).

---

## 7. Agent definitions in detail

Each agent's full system prompt lives at `.claude/agents/<name>.md` with this YAML frontmatter:

```yaml
---
name: <agent-name>
description: <one-line trigger description>
tools: Read, Write, Edit, ...    # optional; if omitted, inherits all parent tools
model: opus | sonnet | haiku     # optional; if omitted, inherits parent model
---

# Agent body — the system prompt
...
```

### Agent 1 · `seo-keyword-strategist`

**Model:** opus (judgment-heavy — angle selection)

**Tools:** Read, Write, Edit, Grep, Glob, WebFetch, WebSearch, Bash, plus inherited Ahrefs MCP tools (`keywords-explorer-*`, `serp-overview`, `site-explorer-*`, `rank-tracker-*`, `gsc-*`)

**Mission:** Given one keyword + the current month, produce 5 article concept briefs that:
1. Cover distinct search intents (informational / how-to / comparison / troubleshooting / decision)
2. Don't overlap with anything in `articles_history/` (semantic check, not just title match)
3. Are optimized for AI Overview / SGE (entity-clear, FAQ-rich, definition-snippet-ready)
4. Build topical authority around the keyword's landing page

**Reads:** `CLAUDE.md`, `knowledge_base/*.md`, `articles_history/index.json`, per-keyword history records, landing page (WebFetch), Ahrefs data (keyword volume, KD, related terms, SERP top 10), Google Search Console data (top queries, page performance), People Also Ask scrape.

**Writes:** 5 brief files at `monthly_runs/<YYYY-MM>/briefs/<keyword-slug>-NN.brief.md`, plus a research cache at `monthly_runs/<YYYY-MM>/research/<keyword-slug>.research.json` (shared across sibling briefs to avoid re-pulling).

**Brief template includes:** working title (ID + EN), hook hypothesis, primary + secondary keywords, search intent, SERP landscape, distinct-angle-vs-history justification, article skeleton (H2s), product anchors, internal links, E-E-A-T signals, AI Overview entity list, captured external data, notes for SME researcher.

### Agent 2 · `<niche>-sme-researcher` (e.g., `aquaculture-sme-researcher`)

**Model:** sonnet (structured fact-gathering)

**Tools:** Read, Write, Edit, WebFetch, WebSearch

**Mission:** Turn a brief into a fact-rich dossier — verified numbers, authoritative citations, product mapping, FAQ drafts.

**Source priority** (configurable per niche):
1. Government / regulatory bodies (e.g., KKP for Indonesian aquaculture)
2. International standards bodies (e.g., FAO)
3. Statistics agencies (e.g., BPS)
4. Peer-reviewed journals (niche-specific)
5. Industry alliances (e.g., Global Aquaculture Alliance, SEAFDEC)
6. Trade publications

For a new niche, update the agent file's "Priority sources" section.

**Writes:** dossier at `monthly_runs/<YYYY-MM>/dossiers/<brief-id>.dossier.md` containing: TL;DR, 12+ verified claims with sources, product anchors with exact specs, 2+ authoritative external sources, 5–8 FAQ Q&As, technical data tables, edge cases, **flags** (uncertainties), definition snippet draft, image concepts.

### Agent 3 · `seo-article-writer-id`

**Model:** opus (Bahasa Indonesia voice + anti-AI rhythm needs strongest model)

**Tools:** Read, Write, Edit

**Mission:** Produce a 1,800–2,500-word Bahasa Indonesia article that mirrors the client's benchmark sample article. Passes the "could a senior journalist have written this?" test.

**Reads:** brief, dossier, style guide, product matrix, benchmark sample article (extracted plain text).

**Writes:** `monthly_runs/<YYYY-MM>/drafts/<brief-id>.id.md` with full YAML frontmatter (title, meta_title ≤60 chars, meta_description 140–160 chars, slug, primary_keyword, secondary_keywords, internal_links 3, external_citations 1–2, word_count, brief_id, publish_month).

**Quality bar:** 8+ specific numbers embedded, varied paragraph length (1–6 sentences), at least 1 numbered list + 1 bullet list + 1 table, 3 internal links (1 primary + 2 cousins), FAQ block 5–8 Q&As, definition snippet near top, max 3 product mentions, 3 `{IMAGE_NN: caption}` placeholders.

### Agent 4 · `seo-article-writer-en`

**Model:** opus (English trade-publication voice + adaptation)

**Tools:** Read, Write, Edit

**Mission:** English version of the article. **Adapted, not literal-translated** — international trade-publication audience. Preserves product names, place names, scientific names, and positioning lines verbatim.

**Reads:** brief, dossier, ID draft (if it exists at start), style guide, product matrix.

**Writes:** `monthly_runs/<YYYY-MM>/drafts/<brief-id>.en.md`, 1,500–2,200 words. Mirrors ID's structure with adaptations: drops Indonesia-only regional context where international readers won't connect, uses English numerics (period decimal, comma thousands), points internal links to `/en/...` paths.

### Agent 5 · `<niche>-image-generator` (e.g., `aquaculture-image-generator`)

**Model:** sonnet (prompt design — structured, not creative writing)

**Tools:** Read, Write, Edit, Bash, Glob

**Mission:** Design image prompts for each `{IMAGE_NN: ...}` placeholder, then generate the actual PNGs via FLUX (default) or OpenAI (fallback) in parallel.

**Reads:** ID + EN drafts, dossier (for image concept hints), `tools/generate-image-flux.ps1` (the generator helper).

**Writes:** image plan JSON at `monthly_runs/<YYYY-MM>/final/<brief-id>.images.json`, manifest at `<brief-id>.manifest.json`, and the actual PNGs at `<brief-id>-NN.png` (NN matches the `{IMAGE_NN: ...}` placeholder).

**Process:**
1. Read drafts, extract all `{IMAGE_NN: ...}` placeholders (positions should match between ID and EN)
2. For each, design a precise prompt + alt-text (ID + EN) + caption (ID + EN) + size + quality
3. Build manifest JSON
4. Call `tools/generate-images-batch.ps1` (one Bash call) which spawns N parallel `Start-Job` processes
5. Read results JSON; update image plan with generation status, bytes, errors

**Quality → model auto-mapping** in the FLUX helper:
- `quality: high` → `flux-pro-1.1` (~$0.04/image)
- `quality: medium` / `low` → `flux-dev` (~$0.025/image)

Same image set is shared between `.id.docx` and `.en.docx` (visual content is language-independent; only alt-text + caption differ).

### Agent 6 · `seo-editor`

**Model:** opus (quality gate — AI-tell detection is judgment-heavy)

**Tools:** Read, Write, Edit, WebSearch, Grep

**Mission:** Apply fixes in-place; produce polished final + QC report with binding recommendation.

**Reads:** brief, dossier, both drafts, image plan, knowledge_base/* (especially style_guide §5 anti-AI rules).

**Writes:**
- Polished `monthly_runs/<YYYY-MM>/final/<brief-id>.id.md` + `.en.md`
- QC report at `<brief-id>.qc.md` with: anti-AI scan results, factual spot-check, on-page SEO checklist, product mention discipline check, ID↔EN parity check, image plan validation, anti-cannibalization spot check, and **`recommendation: approve | revise | reject`** (binding — the curator filters on this).

**Process:** anti-AI scan (apply Edit directly) → factual spot-check → on-page SEO checklist → product specs verification → ID↔EN parity → image plan alignment → final polish → write outputs.

### Agent 7 · `article-history-curator`

**Model:** haiku (mechanical — JSON manipulation, file ops)

**Tools:** Read, Write, Edit, Bash

**Mission:** Commit `approve` articles to history; skip `revise`/`reject`. Build .docx pair via `tools/md-to-docx.ps1`.

**Reads:** all QC reports in `monthly_runs/<YYYY-MM>/final/`, final markdowns (for frontmatter), `articles_history/index.json` schema.

**Writes:**
- Appends entries to `articles_history/index.json` (preserves array order, updates `last_updated`)
- Per-article records under `articles_history/by_keyword/<keyword-slug>/<slug>.md`
- Calls `tools/md-to-docx.ps1` to produce `<brief-id>.id.docx` and `<brief-id>.en.docx` (auto-embeds images)

**Critical guardrail:** never overrides editor's recommendation. `revise` and `reject` articles stay in `final/` for manual handling — the user picks them up later.

**Angle hash formula** (for future-dedup):
```
sha1(<keyword-slug> + "|" + <angle> + "|" + sorted(subtopics).join(","))
```
First 12 hex chars are stored as `sha1:<12 chars>`. The strategist's history-check uses this hash to detect duplicates.

---

## 8. External integrations

### Ahrefs MCP (includes Google Search Console)

The Ahrefs MCP server exposes both Ahrefs tools (`keywords-explorer-*`, `serp-overview`, `site-explorer-*`, `rank-tracker-*`) AND Google Search Console tools (`gsc-keywords`, `gsc-pages`, `gsc-performance-history`, etc.) from a single connector.

**Used by:** strategist agent only.

**Setup:** connect the Ahrefs MCP to your Claude Code session per Ahrefs' docs. The agent inherits the MCP tools when invoked.

**Important:** the GSC tools require the target domain to be registered as a project in the Ahrefs account. **Add the client's domain as an Ahrefs project before running the full monthly batch**, otherwise `gsc-*` tools return empty and the strategist loses the GSC-driven gap analysis.

### BFL FLUX (default image generator)

**Endpoint:** `https://api.bfl.ai/v1/flux-<model>` (note: `api.bfl.ai`, NOT `api.us1.bfl.ai` — regional subdomains are not reachable).

**Auth:** `x-key: <BFL_API_KEY>` header.

**Workflow:** async — POST returns a task ID + polling URL, GET polls until `status: Ready`, download pre-signed image URL from `result.sample`.

**Models:**
- `flux-dev` (~$0.025/image) — sweet spot for in-body images
- `flux-pro-1.1` (~$0.04/image) — hero shots
- `flux-pro-1.1-ultra` (~$0.06/image) — high-resolution variant (overkill for SEO articles)

**Resolution:** width × height must be multiples of 32; max ~2 MP for `dev`, ~4 MP for `pro` variants. `1536×1024` (1.57 MP) works for all models.

**Key in `.env`:** `BFL_API_KEY=bfl_...`

### OpenAI gpt-image-1 (fallback image generator)

**Endpoint:** `https://api.openai.com/v1/images/generations`

**Auth:** `Authorization: Bearer <key>` header.

**Workflow:** synchronous — single POST returns base64-encoded image in response body.

**Sizes:** `1024x1024`, `1024x1536`, `1536x1024`, `auto`.

**Qualities:** `low` (~$0.011), `medium` (~$0.06), `high` (~$0.25 for 1536×1024).

**When to use** (instead of FLUX):
- FLUX rejected a prompt on safety filter (FLUX and OpenAI calibrate differently)
- Need legible text inside the image (OpenAI is significantly better at this)

**Key in `.env`:** `OpenAI_API_Key=sk-...`

### Pandoc 3.9.0.2 (portable)

`tools/pandoc/` contains a portable Windows install (no system PATH pollution). The md→docx wrapper finds the executable automatically.

For macOS/Linux clones: `brew install pandoc` or your distro's package manager, then update `tools/md-to-docx.ps1` to point at the system pandoc.

---

## 9. Helper scripts

### `tools/md-to-docx.ps1`

Converts markdown → docx with embedded images and a styled metadata header.

**Usage:**
```powershell
powershell.exe -ExecutionPolicy Bypass -File "tools/md-to-docx.ps1" -InputPath "monthly_runs/2026-05/final/pakan-ikan-nila-01.id.md"
```

**Behavior:**
- Reads input markdown + YAML frontmatter
- Strips frontmatter and renders as a YAML code block at the top of the docx (visible to reviewers)
- Scans body for `{IMAGE_NN: caption}` placeholders
- Looks in the same folder for files named `<brief-id>-NN.png|jpg|jpeg|webp`
- Found → embeds via markdown image syntax → pandoc inlines binary
- Not found → italic caption fallback `[Image NN: caption]`
- Runs pandoc with `tools/reference.docx` as the styling template
- Returns `STATUS=ok PATH=... BYTES=... IMAGES_EMBEDDED=N IMAGES_MISSING=M`

### `tools/generate-image-flux.ps1` (default image generator)

Single-image helper for BFL FLUX. Drop-in compatible with `generate-image.ps1` signature.

**Usage:**
```powershell
powershell.exe -ExecutionPolicy Bypass -File "tools/generate-image-flux.ps1" `
  -Prompt "<full prompt>" `
  -OutputPath "monthly_runs/2026-05/final/<brief-id>-01.png" `
  -Size 1536x1024 `
  -Quality medium      # auto-maps to flux-dev
```

**Parameters:**
- `-Prompt` (required) — the full generation prompt
- `-OutputPath` (required) — where to save the PNG
- `-Size` — `1024x1024` | `1024x1536` | `1536x1024` | `1024x768` | `1216x832` | `auto`
- `-Model` — `dev` | `pro` | `pro-1.1` | `pro-1.1-ultra` | `auto` (default: auto-maps from `-Quality`)
- `-Quality` — `low` | `medium` | `high` (OpenAI-style hint; auto-routes to model)
- `-Format` — `png` | `jpeg`
- `-SafetyTolerance` — `0` (strict) to `6` (lenient); default `2`
- `-MaxPollSeconds` — async poll timeout; default `120`

**Returns:** `STATUS=ok PATH=... BYTES=...`

### `tools/generate-image.ps1` (OpenAI fallback)

Same signature as the FLUX helper but calls OpenAI gpt-image-1. Used as fallback.

### `tools/generate-images-batch.ps1` (parallel batch)

Spawns `Start-Job` processes (default 3 concurrent) to generate multiple images in parallel.

**Usage:**
```powershell
powershell.exe -ExecutionPolicy Bypass -File "tools/generate-images-batch.ps1" `
  -ManifestPath "monthly_runs/2026-05/final/<brief-id>.manifest.json"
```

**Manifest JSON shape** (array of image entries):
```json
[
  {
    "prompt": "<full prompt>",
    "output_path": "<absolute path to .png>",
    "size": "1536x1024",
    "quality": "high",
    "format": "png",
    "background": "auto"
  }
]
```

**Parameters:**
- `-ManifestPath` (required) — path to the JSON manifest
- `-ResultsPath` — where to write the results file (default: alongside the manifest with `.results.json` suffix)
- `-MaxConcurrency` — max concurrent jobs (default 3)
- `-Generator` — `flux` (default) | `openai` (fallback)

**Returns:** writes a results JSON with per-image status + bytes + error, and prints `STATUS=ok TOTAL=N SUCCESS=M FAILED=K ELAPSED_SEC=S`.

---

## 10. Customizing for a new client

### Step-by-step rewrite checklist

| File / area | What to change | Effort |
|---|---|---|
| `knowledge_base/company_profile.md` | Complete rewrite — all client facts | High |
| `knowledge_base/product_matrix.md` | Complete rewrite — new product → topic mapping | High |
| `knowledge_base/style_guide.md` | Minor — adjust niche-specific examples in §5 anti-AI patterns and §11 product mention discipline | Low |
| `knowledge_base/seo_playbook.md` | None unless target locale differs (currently optimized for Indonesia) | None |
| `CLAUDE.md` | Update §2 Keyword↔Landing-page map (the 6 rows), §1 client name, §9 knowledge_base references if filenames change | Medium |
| `.claude/agents/*.md` | Optional — rename `aquaculture-*` agents to `<niche>-*` if you want; update `description:` line; otherwise no changes | Low |
| `.env` | New API keys if you're using separate accounts (BFL, OpenAI, Ahrefs) | Low |
| `articles_history/index.json` | Reset to `{"schema_version":"1.0","last_updated":null,"articles":[]}` | Trivial |
| `articles_history/by_keyword/` | Delete old keyword folders; create new ones | Trivial |
| `tools/reference.docx` | Replace with the new client's sample article (for docx styling parity) | Low |
| `monthly_runs/` | Delete old run artifacts | Trivial |
| `context/` | Replace with new client's company profile PDF + sample article DOCX + (optional) monthly report template | Low |
| `_extracted/` | Re-run text extraction on the new context files | Low |

### Things you almost never change

- The 7 agent system prompts (only renames + description tweaks)
- The folder structure
- File naming conventions
- The 4 helper scripts in `tools/`
- The pipeline flow / orchestration logic
- The guardrails

### Configuring scale

The default is **6 keywords × 5 articles × 2 languages = 60 articles/month**. To change:

- **More/fewer keywords:** edit CLAUDE.md §2 keyword map; add/remove `articles_history/by_keyword/<slug>/` folders. Agent prompts reference "the 6 keywords" — update to "the N keywords" if you change count.
- **More/fewer articles per keyword:** edit the strategist's mission ("produce 5 article concept briefs") to N.
- **Single-language clients:** remove the EN writer agent (or just don't invoke it). Update CLAUDE.md and the editor's parity-check section.
- **More languages:** clone `seo-article-writer-en.md` to `seo-article-writer-<lang>.md` and customize tone rules. Update editor parity check to handle N languages.

---

## 11. Cost projections

### Image generation (varies most with config)

**FLUX strategy (recommended default):**
- 30 hero × flux-pro-1.1 ($0.04) = $1.20
- 60 in-body × flux-dev ($0.025) = $1.50
- **Total: $2.70 / month**

**All FLUX dev (cheapest, slightly lower hero quality):**
- 90 × flux-dev ($0.025) = **$2.25 / month**

**OpenAI strategy (slower + more expensive, kept as fallback):**
- 30 hero × gpt-image-1 high ($0.25) = $7.50
- 60 in-body × gpt-image-1 medium ($0.06) = $3.60
- **Total: $11.10 / month**

### Ahrefs MCP calls

With shared research cache (built-in): **6 keyword research pulls per month** (not 30). Cost depends on your Ahrefs subscription — typically negligible per-call.

### Anthropic API (Claude)

Highly dependent on:
- Token usage per agent invocation (article length, tool calls, retries)
- Model tiering (opus/sonnet/haiku — already optimized in the agent files)
- Your Anthropic subscription / billing

Model tiering saves ~30–40% vs all-opus. Beyond that, costs scale with article length and the number of MCP/Web tool calls per agent.

### Pandoc + helper scripts

Free.

---

## 12. Guardrails (non-negotiable)

These six rules are encoded in the agent prompts and the knowledge base. They protect quality at scale.

1. **History check before strategy** — strategist MUST read `articles_history/index.json` and per-keyword records before proposing concepts. Angle hashes make dedup unambiguous.
2. **Accuracy over invention** — no agent invents client product names, specs, certifications, or facilities. Researcher verifies or flags. Editor verifies product specs match `product_matrix.md` verbatim.
3. **No AI tells** — writer + editor enforce `style_guide.md` §5: no symmetric paragraph blocks, no cliché transition repetition, no em-dash abuse, no bullet-only sections, no generic claims without numbers.
4. **Editor verdict is binding** — curator commits only articles with `recommendation: approve`; `revise`/`reject` stay in `final/` for manual handling.
5. **External authority required** — every article cites ≥2 authoritative sources (regulator, international body, peer-reviewed journal). Researcher captures them; writer embeds inline; editor verifies presence.
6. **Bilingual parity** — EN version covers the same key claims as ID, adapted (not literally translated). Editor's parity check catches divergences.

---

## 13. Three optimizations baked in

After the pilot, three optimizations were applied to make the monthly batch faster + cheaper without sacrificing quality:

### Optimization 1 — Model tiering per agent

Each agent declares the cheapest model that can do its job via `model:` frontmatter:

| Tier | Model | Agents |
|---|---|---|
| Judgment-heavy | opus | strategist, writer-id, writer-en, editor |
| Structured-fact | sonnet | researcher, image-generator |
| Mechanical | haiku | curator |

**Saves ~30–40% on model cost vs all-opus.**

### Optimization 2 — Shared keyword research cache

Strategist's external data pull (Ahrefs + SERP + GSC) happens **once per keyword per month**, not per brief. Cache file at `monthly_runs/<YYYY-MM>/research/<keyword-slug>.research.json`.

**Eliminates 24 of 30 redundant MCP-call sets per month.**

### Optimization 3 — Parallel image generation

`tools/generate-images-batch.ps1` spawns `Start-Job` processes (3 concurrent default), each invoking the FLUX helper. Per-image failures are isolated.

**~3.5 min saved per article × 30 = ~1.7 hours per month.**

---

## 14. Phase 2 — deferred

Not built yet — to be added after the article pipeline runs stably across 2+ months:

### `seo-analytics-reporter` agent

Pulls GA4 + GSC + rank tracker data, produces the monthly client report. Same MCP connector as the strategist (Ahrefs MCP already carries GSC), so connector reuse is straightforward.

**Build trigger:** after Phase 1 stable + user signals ready.

### `seo-dashboard-builder` agent

Looker Studio (or similar) live dashboard embed. Real-time keyword rank, traffic, conversion tracking instead of monthly PDFs.

**Build trigger:** after the reporter agent works for 1+ month.

### `/run-month` orchestrator slash command

The full monthly batch trigger. Fans out the 6 strategist runs → 30 researchers → 30+30 writers → 30 image-generators → 30 editors → 1 curator. Logs to `monthly_runs/<YYYY-MM>/logs/`.

**Status:** still pending in the original project (task #12).

---

## 15. Appendix — example invocations

### Invoke a single agent manually (for testing)

```
Agent({
  subagent_type: "seo-keyword-strategist",
  prompt: "Generate 1 article concept brief for keyword 'Pakan Ikan Nila' (landing page /id/news/pakan-ikan-nila) for month 2026-05. Brief ID: pakan-ikan-nila-01. Save to monthly_runs/2026-05/briefs/pakan-ikan-nila-01.brief.md."
})
```

### Generate a single image

```bash
powershell.exe -ExecutionPolicy Bypass -File "tools/generate-image-flux.ps1" \
  -Prompt "Macro photo of vannamei shrimp post-larvae in clear hatchery tank, professional aquaculture trade publication style, no text, no watermarks" \
  -OutputPath "monthly_runs/2026-05/final/pakan-ikan-nila-01-01.png" \
  -Size 1536x1024 \
  -Quality medium
```

### Generate 3 images in parallel from a manifest

```bash
powershell.exe -ExecutionPolicy Bypass -File "tools/generate-images-batch.ps1" \
  -ManifestPath "monthly_runs/2026-05/final/pakan-ikan-nila-01.manifest.json"
```

(Default: `-Generator flux`. Add `-Generator openai` to use the gpt-image-1 fallback.)

### Convert markdown to docx (auto-embeds images)

```bash
powershell.exe -ExecutionPolicy Bypass -File "tools/md-to-docx.ps1" \
  -InputPath "monthly_runs/2026-05/final/pakan-ikan-nila-01.id.md"
```

### Build the .env file (template)

```
# Black Forest Labs FLUX API — DEFAULT image generator
BFL_API_KEY=bfl_...

# OpenAI API — FALLBACK image generator
OpenAI_API_Key=sk-...

# (Ahrefs MCP credentials are configured via Claude Code's MCP settings, not .env)
```

---

## Final notes

This pipeline took ~16 task units to build end-to-end (from initial design → pilot → optimizations). Forking for a new client should take **1–2 days** including:

- ~2 hours to rewrite `knowledge_base/company_profile.md` + `product_matrix.md`
- ~1 hour to update CLAUDE.md keyword map + agent description tweaks
- ~30 minutes to swap reference docx + .env keys
- ~2 hours to run a 1-article pilot and tune knowledge_base based on output
- The rest of the day to QA the first full monthly batch

The architecture, agent system prompts, helper scripts, and folder structure are **stable and niche-agnostic**. You're customizing the knowledge base + keyword map, not the engine.

**Original built by:** WEBARQ Promote · 2026 · for STP Aquaculture (aquaculture niche)
