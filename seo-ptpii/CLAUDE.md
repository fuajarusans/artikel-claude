# PT PII — Monthly SEO Article Pipeline

Operations manual for the agent system that produces SEO articles for **PT Penjaminan Infrastruktur Indonesia (Persero) / PT PII** (BUMN penjaminan infrastruktur di bawah Kementerian Keuangan; Special Mission Vehicle dan Badan Usaha Penjaminan Infrastruktur), client of **WEBARQ Promote**.

> This file auto-loads into every Claude Code session in this directory. Read it first, then dispatch agents.
> Forked from `seo-template` (slim 5-agent engine, as used by `seo-gagas`) and fully retargeted to PT PII's infrastructure-guarantee / KPBU niche. The engine (agent prompts, helper scripts, folder layout) is reused; the knowledge base, keyword model, and niche are PT PII-specific.

---

## 1. Project at a glance

| Field | Value |
|---|---|
| Client | PT Penjaminan Infrastruktur Indonesia (Persero) — PT PII (https://www.ptpii.co.id/) |
| Who they are | BUMN (Persero) penjaminan infrastruktur; Special Mission Vehicle Kementerian Keuangan; Badan Usaha Penjaminan Infrastruktur (BUPI); berdiri 30 Desember 2009; dikenal internasional sebagai Indonesia Infrastructure Guarantee Fund (IIGF) |
| Agency | WEBARQ Promote |
| Monthly volume | **Variable per month** — keyword set defined in `monthly_runs/<YYYY-MM>/keywords.md` (fully replaces prior months; no defaults). |
| Language | **Per keyword.** Default Bahasa Indonesia (`language: id`). Set `language: en` on a keyword in `keywords.md` and that keyword's articles are written in English by `seo-article-writer-en`. |
| Output formats | `.md` (canonical) + `.docx` (review-ready, via pandoc) |
| Images | **None.** No images, no `{IMAGE_NN}` placeholders, no `images.json`, no image-planner stage. Visual texture comes from tables and lists. |
| Approval model | Autonomous with review — curator commits only articles with editor `recommendation: approve`; everything else stays in `final/` for manual handling. |
| Audience | Pejabat PJPK & tim penyiapan proyek; investor dan sponsor proyek; *lender* dan analis kredit; konsultan transaksi; akademisi; jurnalis ekonomi; pembaca umum yang melek kebijakan. |
| Working directory | `D:\Users\seo\Documents\fajar-artikel\artikel-claude\seo-ptpii` |

---

## 2. Keyword model (per-month input)

Keywords are defined per month in `monthly_runs/<YYYY-MM>/keywords.md` (copy `monthly_runs/_keywords.template.md`). That file **fully replaces** the set each month — there is no fixed keyword list. `run-month` reads it, auto-derives slugs, and builds the cousin-link map from that month's set.

Each row: `keyword`, `landing_page`, `articles`, plus optional `priority` / `language` / `length` / `topic_focus` / `client_anchor` / `notes`.

- **`language`** — `id` (default) or `en`. Routes the keyword to the ID or EN writer.
- **`length`** — target word band for that keyword, e.g. `1500-1800`. **Default when omitted: 1.500–1.800 (aim ~1.650).**

For a recurring keyword, cousin pairings may reuse `knowledge_base/product_matrix.md`; for a fresh monthly set, the strategist derives cousins from that month's `keywords.md` list (the 2 most related hubs).

---

## 3. Agent roster

| # | Agent | Model | Role | When to invoke |
|---|---|---|---|---|
| 1 | `seo-keyword-strategist` | **opus** | Senior SEO Strategist — N deduped concepts per keyword. Caches per-keyword research at `research/<slug>.research.json`. Uses WebSearch/WebFetch + live SERP (Ahrefs MCP optional — see §8). | Start of each month |
| 2 | `infra-finance-sme-researcher` | **sonnet** | Domain Researcher — fact-rich dossier per concept (KPBU/PPP, penjaminan, project finance, regulasi). Sources: Kemenkeu/DJPPR/DJKN, regulasi primer (JDIH), Bappenas, World Bank/PPIAF/ADB/MIGA, Fitch, BPS. | After strategist |
| 3 | `seo-article-writer-id` | **opus** | Bahasa Indonesia Copywriter — full draft. Default writer. | After researcher, when `language: id` |
| 3b | `seo-article-writer-en` | **opus** | English Copywriter — same structure and rules, international-institutional register. | After researcher, when `language: en` |
| 4 | `seo-editor` | **opus** | Editorial QC + originality gate — anti-AI scan, fact/regulation check, on-page SEO checklist, **plagiarism + AI-detector scan** (`tools/quality-check.ps1` + WebSearch), polish; binding `recommendation` = the single commit gate. | After writer |
| 5 | `article-history-curator` | **haiku** | Knowledge-base Librarian — commits articles where editor `recommendation: approve`; builds `.docx`. Skips the rest. | Auto after editor |

Each agent's full system prompt is in `.claude/agents/<agent-name>.md`. Invoke with the **Agent tool** using `subagent_type` = the agent file name (no `.md`).

> **Niche-named agent:** the researcher (`infra-finance-sme-researcher`) carries PT PII's infrastructure-finance / KPBU domain expertise. The writers/strategist/editor reference the client's knowledge base and priorities.

**Parallelization rule:** the strategist runs (one per keyword) are independent — fire concurrently. Per-article researcher/writer/editor runs are independent — also concurrent. Respect dependencies: researcher waits for its brief, writer for its dossier, editor for the draft, curator for all editors' qc reports.

---

## 4. Knowledge base — read before acting

| File | Purpose |
|---|---|
| `knowledge_base/company_profile.md` | PT PII facts, legal basis, products, portfolio, credentials, positioning lines, **blacklist** |
| `knowledge_base/product_matrix.md` | Keyword → KPBU/penjaminan topic to teach + the 4 CTA anchors; cross-link map; framing rules |
| `knowledge_base/style_guide.md` | Article anatomy, ID + EN tone, anti-AI patterns, benchmark status |
| `knowledge_base/seo_playbook.md` | 2026 algorithm + AI-Overview/GEO rules; on-page checklist; **§2a GEO field guide** |

---

## 5. Locked decisions (do not re-litigate without the user)

Agreed with the user on **2026-08-11** during onboarding:

- **Engine**: slim 5-agent pipeline (no image-planner, validator folded into the editor). Same as `seo-gagas`.
- **Language**: per keyword. Bahasa Indonesia is the default; the user sets `language: en` in the brief when an English article is wanted. Both writers exist in this folder.
- **Length**: per keyword via the `length` field in `keywords.md`. **Default 1.500–1.800 kata (aim ~1.650)** when the brief does not specify.
- **Images**: none at all — no images, no placeholders, no image brief.
- **Client isolation**: **full isolation** from the `seo-iigf-institute` folder. This folder links only to `ptpii.co.id`; `institute.iigf.co.id` is never an internal-link target. No shared history, no cross-folder cousin links.
- **Time-sensitive data**: figures (portfolio counts, guarantee values, financial results, ratings, fees) **may** be cited but **must carry a reference year** and be researcher-verified against an official source. **Names of Direksi/Komisaris are blacklisted** — leadership changes date the article, and the Direktur Utama seat has been held on an acting (Plt) basis.
- **Benchmark**: none supplied. The first pilot article the user approves becomes the locked benchmark; record its path in `style_guide.md`.
- **Voice**: human, expert, honest-hedging, decision-useful. The specific risk for this client is **press-release register** — see `style_guide.md` §5.
- **Framing**: PT PII issues and structures government guarantees and supports project preparation. Never a lender, investor, contractor, operator, or regulator. Not under the Danantara holding. Max 2–3 self-mentions.
- **Internal links**: 3 per article as natural inline anchors (hub in the lead + 2 cousins from the month's set). No "BACA JUGA" callouts.
- **Structure / GEO (§2a)**: definition snippet near the top; a **40–60-word direct answer right after each `## H2`**; FAQ block; a `## Kesimpulan` section; then a **soft website CTA to ptpii.co.id as the final line**.
- **Quality gate**: plagiarism + AI-detector scan runs inside the editor's pass (mandatory before commit). The editor fixes what it can in-place and issues a single binding `recommendation`; the curator commits only `approve`. No separate validator agent, no revise-loop.

---

## 6. Run a month

Fill `monthly_runs/<YYYY-MM>/keywords.md` (copy `monthly_runs/_keywords.template.md`), then `/run-month <YYYY-MM>`.

```
User: /run-month <YYYY-MM>
→ N parallel strategist runs (one per keyword)    → briefs
→ parallel researchers                            → dossiers
→ parallel writers (id or en per keyword)         → drafts
→ length gate: count_words.py + trim agents       → drafts inside their band
→ editors (QC + plagiarism/AI scan, fix in-place) → finals + QC reports (approve|revise|reject)
→ curator commits (approve)                       → history + .docx
→ report: N committed + M flagged for manual review
```

**Pilot first (strongly recommended — there is no benchmark yet):** run ONE article end-to-end (strategist → researcher → writer → editor), stop, show the user the final `.md` + `.docx`, iterate on prompts / knowledge base, then scale to the full month and lock the benchmark.

---

## 7. Guardrails (non-negotiable)

1. **History check before strategy** — the strategist MUST read `articles_history/` and dedupe by angle_hash + subtopic overlap before proposing concepts.
2. **Accuracy over invention** — never invent project names, values, regulation numbers, ratings, or claim histories. The researcher verifies or flags; the editor checks against `knowledge_base/`.
3. **Reference year on every figure** — a bare number is an editor fail.
4. **No named officials** — hard blacklist; the editor strikes any that slip through.
5. **PT PII framing** — guarantee provider (BUPI) under the Ministry of Finance; ≤3 self-mentions; no unverifiable superlatives; never under Danantara.
6. **Regulation discipline** — cite a Perpres/PMK only by number and year, and only after confirming it is still in force.
7. **No AI tells** — writer + editor enforce `style_guide.md` §5, with press-release register treated as a failure mode.
8. **Editor verdict binding** — the curator commits only `approve`; `revise`/`reject` stay in `final/` for manual handling.
9. **External authority** — every article cites ≥1–2 authoritative sources.
10. **Folder isolation** — no internal links to `institute.iigf.co.id`, no shared history with that folder.

---

## 8. External integrations

| Integration | Status | Notes |
|---|---|---|
| **Ahrefs MCP + GSC** | ⚠️ Not connected | The strategist degrades gracefully to WebSearch/WebFetch (live SERP + PAA) + any `seo_report` named in `keywords.md`. If the user connects Ahrefs later, the strategist uses it automatically. |
| Live SERP | ✅ via WebFetch/WebSearch | Strategist scrapes top results + People Also Ask (Google ID). |
| Image generation | ❌ Removed | No images anywhere in this pipeline. |
| Plagiarism + AI detection | ✅ Heuristic via `tools/quality-check.ps1` | The editor runs it per article. Plug-in slots for paid APIs via `PLAGIARISM_API_KEY` / `AI_DETECTOR_API_KEY`. |
| md → .docx | ✅ `tools/md-to-docx.ps1` (portable pandoc in `tools/pandoc/`) | Reference template `tools/reference.docx`. Text-only. |
| CMS upload | Out of scope | Manual paste. |

> **⚠️ WebSearch budget is per-session and shared by every subagent (~200 calls).** A full 15-article month exhausts it during Stage 2 if unmanaged, which silently degrades the editor's plagiarism leg to heuristic-only (observed 2026-08-12: all 15 editors had zero web verification). The orchestrator MUST allocate the budget explicitly when dispatching:
>
> | Stage | Cap per agent | Batch total (15 articles) |
> |---|---|---|
> | Strategist | ≤ 12 WebSearch | ~60 |
> | Researcher | ≤ 6 WebSearch | ~90 |
> | Editor | ≤ 3 WebSearch | ~45 |
>
> Researchers and strategists should prefer **WebFetch against known-good primary URLs** (JDIH, `kpbu.kemenkeu.go.id`, `peraturan.go.id`, `ptpii.co.id`, Bappenas) over open WebSearch — it is both cheaper and more authoritative. If budget still runs out, the editor must say so plainly and never claim a lookup it could not perform; the per-article `.quality-input.json` preserves the queries for a later session.

---

## 9. When something feels off

- **Strategist output repetitive** → confirm it read `articles_history/index.json`; check the angle_hash dedup ran.
- **Drafts read like a press release** → re-read `style_guide.md` §3 and §5; that is this client's signature failure mode.
- **Figures without years** → tighten the researcher's "reference year" rule; the editor must bounce them.
- **A regulation looks wrong** → check the dossier's source; regulations get superseded.
- **A name slipped in** → the blacklist lives in `company_profile.md`; the editor strikes it.
- **Internal links wrong** → check `product_matrix.md` cross-link map; confirm nothing points at `institute.iigf.co.id`.
- **Curator over-eager** → confirm the approve-only gate in `.claude/agents/article-history-curator.md`.

Fix systemic issues by editing the relevant `.claude/agents/*.md` or `knowledge_base/*.md` — those are the source of truth each subagent receives.
