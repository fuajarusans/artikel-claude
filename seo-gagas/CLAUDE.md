# PT Gagas Energi Indonesia (PGN Gagas) — Monthly SEO Article Pipeline

Operations manual for the agent system that produces **Bahasa Indonesia** SEO articles for **PT Gagas Energi Indonesia (PGN Gagas)** (anak usaha PT Perusahaan Gas Negara Tbk / bagian Subholding Gas Pertamina; distributor Compressed Natural Gas (CNG) beyond-pipeline), client of **WEBARQ Promote**.

> This file auto-loads into every Claude Code session in this directory. Read it first, then dispatch agents.
> Forked from `seo-template` and fully retargeted to PGN Gagas's clean-energy / natural-gas (CNG) niche. The engine (agent prompts, helper scripts, folder layout) is reused; the knowledge base, keyword model, and niche are Gagas-specific.

---

## 1. Project at a glance
| Field | Value |
|---|---|
| Client | PT Gagas Energi Indonesia (PGN Gagas) (https://gagas.co.id/) |
| Who they are | Anak usaha PT Perusahaan Gas Negara Tbk (PGN), bagian Subholding Gas Pertamina; berdiri 2011; distribusi Compressed Natural Gas (CNG) *beyond-pipeline*; produk utama **Gasku** (CNG transportasi) & **Gaslink** (CNG industri/komersial) |
| Agency | WEBARQ Promote |
| Monthly volume | **Variable per month** — keyword set defined in `monthly_runs/<YYYY-MM>/keywords.md` (fully replaces prior months; no defaults). |
| Language | **Bahasa Indonesia only** |
| Output formats | `.md` (canonical) + `.docx` (review-ready, via pandoc) |
| Images | **Brief-only — no AI generation.** Writers mark `{IMAGE_NN: concept}` placeholders; the image-planner produces an alt-text/caption/visual-direction brief for the client's design team to execute. |
| Approval model | Autonomous with review — curator commits only editor `approve` AND validator `pass`; rest stays in `final/` for manual handling. |
| Audience | Pembuat keputusan industri & komersial yang butuh energi gas di luar jaringan pipa (pabrik, hotel, RS, F&B, laundry); pemilik armada/transportasi (konversi BBM→BBG); UMKM; + audiens umum yang tertarik energi bersih. |
| Working directory | `C:\Users\Fajar Santoso\Documents\artikel-claude\seo-gagas` |

---

## 2. Keyword model (per-month input)
Keywords are defined per month in `monthly_runs/<YYYY-MM>/keywords.md` (copy `monthly_runs/_keywords.template.md`). That file **fully replaces** the set each month — there is no fixed keyword list. `run-month` reads it, auto-derives slugs, and builds the cousin-link map from that month's set.

> Fill a `keywords.md` for the first month before running. Each row: `keyword`, `landing_page`, `articles`, + optional `priority` / `gas_focus` (the CNG/energi-gas angle to teach) / `anchor` / `notes`.

For a recurring keyword, cousin pairings may reuse `knowledge_base/product_matrix.md`; for a fresh monthly set, the strategist derives cousins from that month's `keywords.md` list (the 2 most related hubs).

---

## 3. Agent roster
| # | Agent | Model | Role | When to invoke |
|---|---|---|---|---|
| 1 | `seo-keyword-strategist` | **opus** | Senior SEO Strategist — N deduped concepts per keyword. Caches per-keyword research at `research/<slug>.research.json`. Uses WebSearch/WebFetch + live SERP (Ahrefs MCP optional — see §11). | Start of each month |
| 2 | `energy-sme-researcher` | **sonnet** | Domain Researcher — fact-rich dossier per concept (gas bumi / CNG / energi). Sources: ESDM/Kementerian ESDM, PGN/Pertamina, SKK Migas, BPS, IEA/IRENA, jurnal energi. | After strategist |
| 3 | `seo-article-writer-id` | **opus** | Bahasa Indonesia Copywriter — full draft. | After researcher |
| 4 | `energy-image-planner` | **sonnet** | Visual Brief Producer — turns `{IMAGE_NN}` placeholders into an alt-text/caption/visual-direction brief (`images.json`). **No image generation.** | After writer |
| 5 | `seo-editor` | **opus** | Editorial QC — anti-AI scan, fact-check, on-page SEO checklist, polish; binding `recommendation`. | After writer + image-planner |
| 6 | `seo-quality-validator` | **sonnet** | Plagiarism + AI Detector — runs `tools/quality-check.ps1`; `verdict: pass/revise/reject`; loops back to writer on `revise` (max 2). | After editor |
| 7 | `article-history-curator` | **haiku** | Knowledge-base Librarian — commits articles where editor `approve` AND validator `pass`; builds `.docx`. Skips the rest. | Auto after validator |

Each agent's full system prompt is in `.claude/agents/<agent-name>.md`. Invoke with the **Agent tool** using `subagent_type` = the agent file name (no `.md`).

> **Niche-named agents:** the researcher (`energy-sme-researcher`) and image-planner (`energy-image-planner`) carry Gagas's clean-energy / natural-gas domain expertise. The writer/strategist/editor reference the client's benchmarks + priorities.

**Parallelization rule:** the strategist runs (one per keyword) are independent — fire concurrently. Per-article researcher/writer/image-planner/editor/validator runs are independent — also concurrent. Respect dependencies: researcher waits for its brief, writer for its dossier, image-planner + editor for the draft, validator for the editor's final, curator for all validators.

---

## 4. Knowledge base — read before acting
| File | Purpose |
|---|---|
| `knowledge_base/company_profile.md` | PGN Gagas facts, credentials, services (Gasku/Gaslink), positioning, blacklist |
| `knowledge_base/product_matrix.md` | Keyword → CNG/energi-gas topic to teach + PGN Gagas service/credibility anchor; cross-link map; framing rules |
| `knowledge_base/style_guide.md` | Article anatomy, clean-energy/B2B tone, anti-AI patterns, image-placeholder rules, benchmarks |
| `knowledge_base/seo_playbook.md` | 2026 algorithm + AI-Overview/GEO rules; on-page checklist; **§2a GEO (Generative Engine Optimization) field guide** |

---

## 5. Locked decisions (do not re-litigate without the user)
- **Language**: Bahasa Indonesia only. No English version.
- **Length**: **1.200–1.600 kata/artikel** (audiens energi lebih luas & ringkas). *Dapat disesuaikan per kebutuhan keyword/bulan.*
- **Images**: brief-only — no AI generation. Writer marks `{IMAGE_NN: concept}`; `energy-image-planner` produces a design brief (`images.json`) with alt-text + caption + visual direction + suggested asset type. The design team executes. The `.docx` shows an italic caption fallback where no image file exists.
- **Voice**: human, expert, honest-hedging, decision-useful. No AI tells (`style_guide.md` §5). Benchmarks = `knowledge_base/style_guide.md` (anatomy + voice examples).
- **Internal links**: natural inline anchors woven into prose (hub in lead + cousins from the month's set). **No "BACA JUGA" callouts or link blocks.**
- **Structure / GEO (§2a)**: definition snippet near the top; a **40–60-word direct answer right after each `## H2`** (GEO-citable); FAQ block; a `## Kesimpulan` section; then a **soft website CTA to gagas.co.id as the final line** (distinct from the conclusion paragraph).
- **Gagas framing**: penyedia solusi energi gas bumi / distributor CNG beyond-pipeline — *menyalurkan, memasok, mengonversi, melayani* gas bumi; bukan produsen gas. Max 2–3 self-mentions/article; no unverifiable superlatives.
- **Quality gate**: plagiarism + AI-detector pass mandatory before commit; `revise` loops to writer up to 2×; curator commits only `approve` + `pass`.

---

## 6. Run a month
Fill `monthly_runs/<YYYY-MM>/keywords.md` (copy `monthly_runs/_keywords.template.md`), then `/run-month <YYYY-MM>`.

```
User: /run-month <YYYY-MM>
→ N parallel strategist runs (one per keyword)  → briefs
→ parallel researchers                          → dossiers
→ parallel writers                              → ID drafts
→ image-planners                                → image briefs (images.json)
→ editors                                       → finals + QC reports (approve|revise|reject)
→ quality-validators                            → verdicts (pass|revise|reject); loop-back on revise (max 2)
→ curator commits (approve + pass)              → history + .docx
→ report: N committed + M flagged for manual review
```

**Pilot first (recommended for a new keyword):** run ONE article end-to-end (strategist → researcher → writer → image-planner → editor → validator), stop, show the user the final `.md` + `.docx`, iterate on prompts / knowledge base, then scale to the full month.
