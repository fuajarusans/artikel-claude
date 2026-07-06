# SOLTIUS — Monthly SEO Article Pipeline

Operations manual for the agent system that produces Bahasa Indonesia SEO articles for **PT Soltius Indonesia** (SAP Platinum Partner, Metrodata Group), client of **WEBARQ Promote**.

This file is auto-loaded into every Claude Code session in this directory. Read it first, then dispatch agents.

> This pipeline was forked from an industry-agnostic multi-agent SEO template (originally built for an aquaculture client). It has been retargeted to SOLTIUS's enterprise-IT / SAP niche. The engine (agent prompt structure, helper scripts, folder layout) is reused; the knowledge base, keyword map, and niche are SOLTIUS-specific.

---

## 1. Project at a glance

| Field | Value |
|---|---|
| Client | PT Soltius Indonesia (https://www.soltius.co.id/) |
| Who they are | SAP Platinum Partner & end-to-end IT consultancy; subsidiary of PT Metrodata Electronics Tbk; founded 1998; 200+ consultants, 120+ clients |
| Agency | WEBARQ Promote (PT Web Architect Technology) |
| Monthly volume | **Variable per month** — keyword set defined in `monthly_runs/<YYYY-MM>/keywords.md` (fully replaces prior months; no defaults). Bahasa Indonesia only. Example: 2026-06 ran 6 keywords × 5 = 30. |
| Language | **Bahasa Indonesia only** (no English version). One keyword — SAP Clean Core — has an English landing-page URL, but its article is still written in Indonesian. |
| Output formats | `.md` (canonical) + `.docx` (review-ready, via pandoc) |
| Images | **No AI generation.** Writers mark `{IMAGE_NN: concept}` placeholders; the image-planner produces an alt-text/caption/visual-direction brief for the client's design team to execute. |
| Approval model | **Autonomous with review.** Curator commits to history only when editor `recommendation: approve` AND validator `verdict: pass`. Everything else stays in `final/` for manual handling. User reviews `monthly_runs/<YYYY-MM>/final/` at their pace. |
| Audience | B2B enterprise decision-makers (CIO/IT, CFO/finance, ops/supply-chain, transformation leads); desktop-heavy, work-hours. |
| Working directory | `C:\Users\Fajar Santoso\Documents\artikel-claude\seo-soltius` |

---

## 2. Keyword ↔ Landing-page map (per-month input)

> **Keywords are defined per month** in `monthly_runs/<YYYY-MM>/keywords.md` (copy `monthly_runs/_keywords.template.md`). That file **fully replaces** the set each month — there is no fixed keyword list. `run-month` reads it, auto-derives slugs, and builds the cousin-link map from that month's set.
>
> The table below is the **2026-06 set, kept as a historical reference / worked example** (not a fixed list).

| # | Keyword | Slug | Landing page | Apr 2026 rank | Cluster note |
|---|---|---|---|---|---|
| 1 | Low-Code Platform | `low-code-platform` | `https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms` | #6 | SAP Build / BTP; ties to Clean Core |
| 2 | digital manufacturing | `digital-manufacturing` | `https://www.soltius.co.id/id/blog/digital-manufaktur-sistem` | #7 | SAP Digital Manufacturing / S4 PP |
| 3 | Data Warehouse Solutions | `data-warehouse-solutions` | `https://www.soltius.co.id/id/blog/data-warehouse-solutions` | #48 | SAP Datasphere / BW/4HANA |
| 4 | Business Intelligence | `business-intelligence` | `https://www.soltius.co.id/id/blog/business-intelligence` | #100 ⚠️ | SAP Analytics Cloud; **crashed #10→#100 — rescue** |
| 5 | ERP migration to the cloud | `erp-migration-to-the-cloud` | `https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud` | **#1** 🎉 | RISE with SAP / S/4HANA Cloud; **defend & expand** |
| 6 | SAP Clean Core | `sap-clean-core` | `https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide` | #100 | **English URL** (no `/id/`); biggest whitespace |

> Strategic priorities for the 2026-06 set (from the April 2026 SEO report): **defend** ERP-migration #1, **rescue** Business Intelligence, **capture** SAP Clean Core whitespace. For other months, set each keyword's `priority` in `keywords.md`; the strategist weighs it when choosing angles.

For a recurring keyword, cousin pairings may reuse `knowledge_base/product_matrix.md`; for a fresh monthly set, the strategist derives cousins from that month's `keywords.md` list (the 2 most related hubs).

---

## 3. Agent roster

| # | Agent | Model | Role | When to invoke |
|---|---|---|---|---|
| 1 | `seo-keyword-strategist` | **opus** | Senior SEO Strategist | Start of each month — 5 deduped concepts per keyword. Caches per-keyword research at `research/<slug>.research.json`. Uses WebSearch/WebFetch + the April report (Ahrefs MCP optional — see §11). |
| 2 | `enterprise-it-sme-researcher` | **sonnet** | Domain Researcher | After strategist — fact-rich dossier per concept (SAP/Gartner/IDC/Kemenkominfo/journals) |
| 3 | `seo-article-writer-id` | **opus** | Bahasa Indonesia Copywriter | After researcher — full 1,500–1,800-word ID draft |
| 4 | `enterprise-it-image-planner` | **sonnet** | Visual Brief Producer | After writer — turns `{IMAGE_NN}` placeholders into an alt-text/caption/visual-direction brief (`images.json`). **No image generation.** |
| 5 | `seo-editor` | **opus** | Editorial QC | After writer + image-planner — anti-AI scan, fact-check, on-page SEO checklist, polish; binding `recommendation` |
| 6 | `seo-quality-validator` | **sonnet** | Plagiarism + AI Detector | After editor — runs `tools/quality-check.ps1`; `verdict: pass/revise/reject`; loops back to writer on `revise` (max 2) |
| 7 | `article-history-curator` | **haiku** | Knowledge-base Librarian | Auto after validator — commits articles where editor `approve` AND validator `pass`; builds `.docx`. Skips the rest. |

Each agent's full system prompt is in `.claude/agents/<agent-name>.md`.

> Note: agents #2 and #4 are renamed from the template's `aquaculture-*` to `enterprise-it-*`. The English writer (`seo-article-writer-en`) and the FLUX image-generator are **removed** for this client (ID-only; placeholder-only images).

---

## 4. Monthly pipeline

```
                     ┌─────────────────────────┐
                     │ User: /run-month 2026-06 │
                     └────────────┬────────────┘
                                  │
                ┌─────────────────▼─────────────────┐
                │  seo-keyword-strategist (×N kw)   │  → briefs
                │  (per-keyword research cached)    │
                └─────────────────┬─────────────────┘
                                  │
                ┌─────────────────▼─────────────────┐
                │  enterprise-it-sme-researcher(×30)│  → 30 dossiers
                └─────────────────┬─────────────────┘
                                  │
                ┌─────────────────▼─────────────────┐
                │  seo-article-writer-id (×30)      │  → 30 ID drafts
                └─────────────────┬─────────────────┘
                                  │
                ┌─────────────────▼─────────────────┐
                │  enterprise-it-image-planner(×30) │  → 30 image briefs (images.json)
                │  (alt-text + caption + direction; │     NO PNGs generated
                │   placeholders stay as captions)  │
                └─────────────────┬─────────────────┘
                                  ▼
                ┌───────────────────────────────────┐
                │  seo-editor (×30)                 │  → 30 finals + 30 QC reports
                │  recommendation: approve|revise|reject
                └─────────────────┬─────────────────┘
                                  ▼
                ┌───────────────────────────────────┐
                │  seo-quality-validator (×30)      │  → 30 quality reports
                │  verdict: pass|revise|reject      │     loop-back on revise (max 2)
                └─────────────────┬─────────────────┘
                                  ▼
                ┌───────────────────────────────────┐
                │  article-history-curator (×1)     │  → history + .docx
                │  commits only approve + pass      │     (else stays in final/)
                └───────────────────────────────────┘
```

---

## 5. Folder structure & naming

```
seo-soltius\
├── CLAUDE.md                              ← this file
├── .claude/agents/                        ← 7 agent system prompts
├── .claude/commands/run-month.md          ← monthly orchestrator
├── context/                               ← source PDFs/DOCXs (do not edit)
├── _extracted/                            ← plain-text extracts + report data
│   ├── soltius_sample_article.md          ← benchmark #1 (docx sample)
│   ├── soltius_company_profile_raw.md
│   └── seo_report_apr2026.md              ← keyword data the strategist leans on
├── knowledge_base/                        ← company_profile · product_matrix · style_guide · seo_playbook
├── articles_history/
│   ├── index.json                         ← master log (queryable)
│   ├── README.md                          ← schema reference
│   └── by_keyword/<keyword-slug>/         ← per-article angle records
├── monthly_runs/<YYYY-MM>/
│   ├── research/<keyword-slug>.research.json   ← shared per-keyword research cache
│   ├── briefs/<keyword-slug>-NN.brief.md
│   ├── dossiers/<keyword-slug>-NN.dossier.md
│   ├── drafts/<keyword-slug>-NN.id.md          ← writer output (pre-edit)
│   └── final/                                  ← editor output + image brief + docx
│       ├── <brief-id>.id.md                    ← editor-polished markdown
│       ├── <brief-id>.id.docx                  ← curator output (caption fallback for images)
│       ├── <brief-id>.qc.md                    ← editor QC report (recommendation)
│       ├── <brief-id>.quality.md               ← validator report (verdict)
│       └── <brief-id>.images.json              ← image brief (alt-text/caption/direction)
└── tools/                                      ← md-to-docx, quality-check, pandoc/
```

> The benchmark `monthly_runs/2026-05/` folder is **legacy** (template aquaculture data + one prior Soltius `sap-business-one-01` article kept as a style reference). It is preserved, not part of the live pipeline. Live SOLTIUS runs start at `2026-06`.

### Naming conventions
- **Keyword slugs**: `low-code-platform`, `digital-manufacturing`, `data-warehouse-solutions`, `business-intelligence`, `erp-migration-to-the-cloud`, `sap-clean-core`
- **Brief ID** = `<keyword-slug>-NN` (NN = `01`..`05`)
- **Article slug** (for publication URL): kebab-case Indonesian title, no stop words, ≤60 chars
- **Image placeholders**: `{IMAGE_NN: concept}` in the body; the planner keys its `images.json` entries to NN. No PNG files are produced.

---

## 6. How to invoke agents

Use the **Agent tool** with `subagent_type` = agent file name (no `.md`). Pass a self-contained prompt stating: the input file paths to read, the output file paths to write, the month tag (`YYYY-MM`), and any context the agent can't infer.

**Example — strategist for one keyword:**
> Agent({ subagent_type: "seo-keyword-strategist", prompt: "Generate 5 article concepts for keyword 'ERP migration to the cloud' (slug erp-migration-to-the-cloud, landing page https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud) for month 2026-06. Read history at articles_history/. Write briefs to monthly_runs/2026-06/briefs/erp-migration-to-the-cloud-01.brief.md … -05.brief.md." })

**Parallelization rule:** the 6 strategist runs are independent — fire concurrently. Per-article researcher/writer/image-planner/editor/validator runs are independent — also concurrent. Respect dependencies: researcher waits for its brief, writer for its dossier, image-planner + editor for the draft, validator for the editor's final, curator for all validators.

---

## 7. Monthly run — step-by-step

### Pilot mode (one article — use this first / for a new keyword)
1. `seo-keyword-strategist` for ONE keyword; commit just 1 of the 5 briefs.
2. `enterprise-it-sme-researcher` on that brief.
3. `seo-article-writer-id` on the dossier.
4. `enterprise-it-image-planner` on the draft.
5. `seo-editor` on the draft + image brief.
6. `seo-quality-validator` on the editor's final.
7. Stop. Show the user the final `.md` + `.docx`. Iterate on agent prompts / knowledge base from feedback.
8. Only after pilot approval → curator commits, then scale to the full month.

### Full month
```
User: /run-month 2026-06
→ 6 parallel strategist runs → 30 briefs
→ 30 parallel researchers → 30 dossiers
→ 30 parallel writers → 30 drafts
→ 30 image-planners → 30 image briefs
→ 30 editors → 30 finals + QC reports (approve|revise|reject)
→ 30 quality-validators → verdicts (pass|revise|reject); loop-back to writer on revise (max 2)
→ curator commits (approve + pass) → history + .docx
→ report: N committed + M flagged for manual review
```

---

## 8. Decisions locked in (do not re-litigate without the user)

- **Language**: Bahasa Indonesia only. No English version. (User instruction, 2026-06-02.)
- **Scale**: variable per month — keyword set defined in `monthly_runs/<YYYY-MM>/keywords.md`, which fully replaces prior months (no defaults). (User instruction, 2026-06-08.) 2026-06 example: 6 × 5 = 30.
- **Images**: no AI generation. Writer marks `{IMAGE_NN: concept}`; `enterprise-it-image-planner` produces a design brief (`images.json`) with alt-text + caption + visual direction + suggested asset type. The `.docx` shows an italic caption fallback where no image file exists. (User instruction, 2026-06-02.)
- **Pilot first**: run 1 article end-to-end, user reviews style/quality, then scale. (User instruction.)
- **Pilot keyword**: strategist analyzes SERP + history and recommends. (User instruction.)
- **Approval**: autonomous with review — curator commits only `approve` + `pass`; rest stays in `final/`.
- **Voice**: human, expert, honest-hedging, decision-useful. Benchmarks = `_extracted/soltius_sample_article.md` + `monthly_runs/2026-05/final/sap-business-one-01.id.md`. No AI tells (`style_guide.md` §5).
- **Length**: 1,500–1,800 words/article (~1,650 target) — fits the dense SAP/enterprise-IT niche (the 2026-06 batch ran 1,650–2,250; the 1,200–1,500 band proved too tight in the 2026-07 pilot). (User instruction, 2026-06-02; revised 2026-06-08.)
- **Soft website CTA**: every article ends with a soft CTA inviting a visit to soltius.co.id, placed AFTER the conclusion (distinct from the conclusion paragraph). (User instruction, 2026-06-02.)
- **Soltius framing**: implementation/consulting partner — implements/migrates/supports SAP, never "builds" it. Max 2–3 self-mentions/article.
- **Quality gate**: plagiarism + AI-detector pass mandatory before commit; `revise` loops to writer up to 2×.
- **Model tiering**: opus (strategist, writer, editor); sonnet (researcher, image-planner, validator); haiku (curator).

---

## 9. Knowledge base — read before acting

| File | Purpose |
|---|---|
| `knowledge_base/company_profile.md` | Soltius facts, credentials, services, positioning lines |
| `knowledge_base/product_matrix.md` | Keyword → SAP/partner tech to teach + Soltius service/credibility anchor; cross-link map; blacklist |
| `knowledge_base/style_guide.md` | Article anatomy, B2B-IT tone, anti-AI patterns, image-placeholder rules |
| `knowledge_base/seo_playbook.md` | 2026 algorithm + AI-Overview/AI-engine citation rules; on-page checklist; **§2a GEO (Generative Engine Optimization) field guide** |
| `_extracted/seo_report_apr2026.md` | April 2026 keyword rankings, top queries, AI-search data (strategist's primary data source) |
| `_extracted/Panduan_Artikel_SEO_GEO.md` | Client's SEO+GEO panduan (2026) — source distilled into `seo_playbook.md` §2a |

---

## 10. Guardrails (non-negotiable)

1. **History check before strategy** — strategist MUST read `articles_history/` and dedupe by angle_hash + subtopic Jaccard before proposing concepts.
2. **Accuracy over invention** — never invent SAP product names/specs, ECC dates, client outcomes, or Soltius credentials. Researcher verifies or flags; editor checks against `knowledge_base/`.
3. **No AI tells** — writer + editor enforce `style_guide.md` §5. Drafts that read AI-generated get bounced.
4. **Soltius framing** — partner that implements SAP, not the software maker; ≤3 self-mentions; no unverifiable superlatives.
5. **Editor verdict binding + quality gate** — curator commits only `approve` + `pass`; `revise` loops to writer (max 2); `reject` stays for manual handling.
6. **External authority** — every article cites ≥1–2 authoritative sources (SAP official, Gartner/IDC/Forrester, Kemenkominfo/BPS, peer-reviewed). Researcher captures them.
7. **AI-Overview optimization** — definition snippet in first ~60 words, entity-clear, structured tables/lists, FAQ block. (This is a live traffic channel — Perplexity/ChatGPT already refer traffic.)

---

## 11. External integrations

| Integration | Status | Notes |
|---|---|---|
| **Ahrefs MCP + GSC** | ⚠️ **Not connected** to this session | Strategist degrades gracefully: uses WebSearch/WebFetch (live SERP + PAA) + `_extracted/seo_report_apr2026.md` for ranking/GSC-style data. If the user connects the Ahrefs MCP later, the strategist will use `keywords-explorer-*`, `serp-overview`, `site-explorer-*`, `gsc-*` automatically. |
| Live SERP | ✅ via WebFetch/WebSearch | Strategist scrapes top results + People Also Ask (Google ID). |
| Image generation | ❌ Disabled by decision | Placeholder + caption only. `.env` still holds BFL/OpenAI keys if the user ever re-enables it. |
| Plagiarism + AI detection | ✅ Heuristic via `tools/quality-check.ps1` | Validator runs it per article. Plug-in slots for paid APIs via env vars `PLAGIARISM_API_KEY` / `AI_DETECTOR_API_KEY`. |
| md → .docx | ✅ `tools/md-to-docx.ps1` (pandoc 3.9 portable in `tools/pandoc/`) | Reference template `tools/reference.docx` (Soltius sample for styling parity). Embeds images if present; else italic caption fallback. |
| CMS upload | Out of scope | Manual paste. |

---

## 12. When something feels off

- **Strategist output repetitive** → confirm it read `articles_history/index.json`; check angle_hash dedup ran.
- **Drafts feel AI-generated** → re-read `style_guide.md` §5; tighten the writer prompt; check it loaded both benchmarks.
- **Facts/SAP specs wrong** → check the dossier's sources; tighten researcher verification; editor must cross-check `product_matrix.md`.
- **Soltius oversold / superlatives** → check `product_matrix.md` blacklist + `style_guide.md` §11.
- **Internal links wrong** → check the keyword↔landing map (§2) + `product_matrix.md` cross-link map.
- **Curator over-eager** → confirm the approve+pass gate in `.claude/agents/article-history-curator.md`.

Fix systemic issues by editing the relevant `.claude/agents/*.md` or `knowledge_base/*.md` — those are the source of truth each subagent receives.
