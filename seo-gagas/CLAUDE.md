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
| Images | **Brief-only — no AI generation.** Writers mark `{IMAGE_NN: concept}` placeholders with a rich concept (subject, layout, style, color, Bahasa Indonesia text) that IS the design brief; the `.docx` renders each as an italic caption. The client's design team executes. |
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
| 3 | `seo-article-writer-id` | **opus** | Bahasa Indonesia Copywriter — full draft; marks `{IMAGE_NN}` placeholders (rich concept = the design brief). | After researcher |
| 4 | `seo-editor` | **opus** | Editorial QC + originality gate — anti-AI scan, fact-check, on-page SEO checklist, **plagiarism + AI-detector scan** (`tools/quality-check.ps1` + WebSearch), polish; binding `recommendation` = the single commit gate. | After writer |
| 5 | `article-history-curator` | **haiku** | Knowledge-base Librarian — commits articles where editor `recommendation: approve`; builds `.docx`. Skips the rest. | Auto after editor |

Each agent's full system prompt is in `.claude/agents/<agent-name>.md`. Invoke with the **Agent tool** using `subagent_type` = the agent file name (no `.md`).

> **Niche-named agent:** the researcher (`energy-sme-researcher`) carries Gagas's clean-energy / natural-gas domain expertise. The writer/strategist/editor reference the client's benchmarks + priorities.

**Parallelization rule:** the strategist runs (one per keyword) are independent — fire concurrently. Per-article researcher/writer/editor runs are independent — also concurrent. Respect dependencies: researcher waits for its brief, writer for its dossier, editor for the draft, curator for all editors' qc reports.

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
- **Images**: brief-only — no AI generation. Writer marks `{IMAGE_NN: concept}` with a rich concept (subject, layout, style, color, Bahasa Indonesia text) that IS the design brief; the design team executes. The `.docx` renders each placeholder as an italic caption where no image file exists. (No separate image-planner agent — the writer's concept carries the brief.)
- **Voice**: human, expert, honest-hedging, decision-useful. No AI tells (`style_guide.md` §5). Benchmarks = `knowledge_base/style_guide.md` (anatomy + voice examples).
- **Internal links**: natural inline anchors woven into prose (hub in lead + cousins from the month's set). **No "BACA JUGA" callouts or link blocks.**
- **Structure / GEO (§2a)**: definition snippet near the top; a **40–60-word direct answer right after each `## H2`** (GEO-citable); FAQ block; a `## Kesimpulan` section; then a **soft website CTA to gagas.co.id as the final line** (distinct from the conclusion paragraph).
- **Gagas framing**: penyedia solusi energi gas bumi / distributor CNG beyond-pipeline — *menyalurkan, memasok, mengonversi, melayani* gas bumi; bukan produsen gas. Max 2–3 self-mentions/article; no unverifiable superlatives.
- **Quality gate**: plagiarism + AI-detector scan runs inside the editor's pass (mandatory before commit); the editor fixes what it can in-place and issues a single binding `recommendation`; curator commits only `approve`. No separate validator agent, no revise-loop.

---

## 6. Run a month
Fill `monthly_runs/<YYYY-MM>/keywords.md` (copy `monthly_runs/_keywords.template.md`), then `/run-month <YYYY-MM>`.

```
User: /run-month <YYYY-MM>
→ N parallel strategist runs (one per keyword)   → briefs
→ parallel researchers                           → dossiers
→ parallel writers                               → ID drafts (with {IMAGE_NN} placeholders)
→ editors (QC + plagiarism/AI scan, fix in-place)→ finals + QC reports (approve|revise|reject)
→ curator commits (approve)                      → history + .docx
→ report: N committed + M flagged for manual review
```

**Pilot first (recommended for a new keyword):** run ONE article end-to-end (strategist → researcher → writer → editor), stop, show the user the final `.md` + `.docx`, iterate on prompts / knowledge base, then scale to the full month.
