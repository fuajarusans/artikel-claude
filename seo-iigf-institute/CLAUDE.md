# IIGF Institute — Monthly SEO Article Pipeline

Operations manual for the agent system that produces **Bahasa Indonesia** SEO articles for **IIGF Institute** (Indonesia Infrastructure Guarantee Fund Institute — unit manajemen pengetahuan & *think-tank* PT Penjaminan Infrastruktur Indonesia (Persero)/PT PII), client of **WEBARQ Promote**.

> This file auto-loads into every Claude Code session in this directory. Read it first, then dispatch agents.
> Forked from `seo-template` (slim 5-agent engine, as used by `seo-gagas`) and fully retargeted to IIGF Institute's KPBU/PPP knowledge, certification, and research niche. The engine (agent prompts, helper scripts, folder layout) is reused; the knowledge base, keyword model, and niche are IIGF Institute-specific.

---

## 1. Project at a glance

| Field | Value |
|---|---|
| Client | IIGF Institute (https://institute.iigf.co.id/) |
| Who they are | Unit manajemen pengetahuan (*knowledge management*) & *think-tank* PT PII; berdiri 2012; visi Center of Excellence KPBU/PPP di Indonesia; ATO APMG pertama di Indonesia untuk sertifikasi CP3P; penerbit jurnal JIPM; fasilitator jejaring kampus UNIID/JPII |
| Agency | WEBARQ Promote |
| Monthly volume | **Variable per month** — keyword set defined in `monthly_runs/<YYYY-MM>/keywords.md` (fully replaces prior months; no defaults). |
| Language | **Bahasa Indonesia only.** No English version. |
| Output formats | `.md` (canonical) + `.docx` (review-ready, via pandoc) |
| Images | **None.** No images, no `{IMAGE_NN}` placeholders, no `images.json`, no image-planner stage. Visual texture comes from tables and lists. |
| Approval model | Autonomous with review — curator commits only articles with editor `recommendation: approve`; everything else stays in `final/` for manual handling. |
| Audience | ASN & pejabat yang menyiapkan proyek KPBU; konsultan transaksi; calon peserta sertifikasi CP3P; akademisi & mahasiswa pascasarjana; pembaca umum yang melek kebijakan infrastruktur. |
| Content goal | **Edukasi dulu, CTA lembut ke program.** Ajarkan topik KPBU/PPP secara netral dan mendalam; program (CP3P, e-learning, riset, jejaring) mendapat CTA di penutup. Menjaga kredibilitas *think-tank* sekaligus menghasilkan lead. |
| Working directory | `D:\Users\seo\Documents\fajar-artikel\artikel-claude\seo-iigf-institute` |

---

## 2. Keyword model (per-month input)

Keywords are defined per month in `monthly_runs/<YYYY-MM>/keywords.md` (copy `monthly_runs/_keywords.template.md`). That file **fully replaces** the set each month — there is no fixed keyword list. `run-month` reads it, auto-derives slugs, and builds the cousin-link map from that month's set.

Each row: `keyword`, `landing_page`, `articles`, plus optional `priority` / `length` / `topic_focus` / `client_anchor` / `notes`.

- **`length`** — target word band for that keyword, e.g. `1200-1600`. **Default when omitted: 1.200–1.600 (aim ~1.400).**

For a recurring keyword, cousin pairings may reuse `knowledge_base/product_matrix.md`; for a fresh monthly set, the strategist derives cousins from that month's `keywords.md` list (the 2 most related hubs).

---

## 3. Agent roster

| # | Agent | Model | Role | When to invoke |
|---|---|---|---|---|
| 1 | `seo-keyword-strategist` | **opus** | Senior SEO Strategist — N deduped concepts per keyword. Caches per-keyword research at `research/<slug>.research.json`. Uses WebSearch/WebFetch + live SERP (Ahrefs MCP optional — see §8). | Start of each month |
| 2 | `ppp-knowledge-sme-researcher` | **sonnet** | Domain Researcher — fact-rich dossier per concept (KPBU/PPP, PPP Guide & CP3P, capacity building, riset). Sources: APMG/ppp-certification.com, World Bank/PPP Knowledge Lab, PPIAF/ADB, Kemenkeu/Bappenas, UNIID, indeks jurnal. | After strategist |
| 3 | `seo-article-writer-id` | **opus** | Bahasa Indonesia Copywriter — full draft. | After researcher |
| 4 | `seo-editor` | **opus** | Editorial QC + originality gate — anti-AI scan, fact/CP3P-scope check, on-page SEO checklist, **plagiarism + AI-detector scan** (`tools/quality-check.ps1` + WebSearch), polish; binding `recommendation` = the single commit gate. | After writer |
| 5 | `article-history-curator` | **haiku** | Knowledge-base Librarian — commits articles where editor `recommendation: approve`; builds `.docx`. Skips the rest. | Auto after editor |

Each agent's full system prompt is in `.claude/agents/<agent-name>.md`. Invoke with the **Agent tool** using `subagent_type` = the agent file name (no `.md`).

> **Niche-named agent:** the researcher (`ppp-knowledge-sme-researcher`) carries the KPBU/PPP-knowledge and certification domain expertise. The writer/strategist/editor reference the client's knowledge base and priorities.

**Parallelization rule:** the strategist runs (one per keyword) are independent — fire concurrently. Per-article researcher/writer/editor runs are independent — also concurrent. Respect dependencies: researcher waits for its brief, writer for its dossier, editor for the draft, curator for all editors' qc reports.

---

## 4. Knowledge base — read before acting

| File | Purpose |
|---|---|
| `knowledge_base/company_profile.md` | IIGF Institute facts, three pillars, CP3P, JIPM, UNIID/JPII, parent relationship, positioning lines, **blacklist** |
| `knowledge_base/product_matrix.md` | Keyword → KPBU/PPP topic to teach + the 5 programme anchors; cross-link map; framing rules |
| `knowledge_base/style_guide.md` | Article anatomy, instructor-not-brochure tone, anti-AI patterns, benchmark status |
| `knowledge_base/seo_playbook.md` | 2026 algorithm + AI-Overview/GEO rules; on-page checklist; **§2a GEO field guide** |

---

## 5. Locked decisions (do not re-litigate without the user)

Agreed with the user on **2026-08-11** during onboarding:

- **Engine**: slim 5-agent pipeline (no image-planner, validator folded into the editor). Same as `seo-gagas`.
- **Language**: Bahasa Indonesia only. No English version.
- **Length**: per keyword via the `length` field in `keywords.md`. **Default 1.200–1.600 kata (aim ~1.400)** when the brief does not specify.
- **Images**: none at all — no images, no placeholders, no image brief.
- **Client isolation**: **full isolation** from the `seo-ptpii` folder. This folder links only to `institute.iigf.co.id` (plus the Institute's own `jipm.iigf.co.id` / `uniid.or.id`); `ptpii.co.id` is never an internal-link target. No shared history, no cross-folder cousin links.
- **Content goal**: educate first, soft CTA to the relevant programme at the close. Never a training pitch in the lead or mid-body.
- **Time-sensitive data**: fees, schedules, and network size **may** be cited but **must carry a reference year and an "indikatif" label**, and be researcher-verified. **Names of individuals are blacklisted.**
- **Accreditation wording**: IIGF Institute is an **Accredited Training Organization (ATO) of APMG International** that delivers CP3P training. **APMG owns and awards the credential.** Any wording implying otherwise is a hard editor fail.
- **Benchmark**: none supplied. The first pilot article the user approves becomes the locked benchmark; record its path in `style_guide.md`.
- **Voice**: human, expert, honest-hedging, decision-useful. The two specific risks for this client are **training-brochure register** and **press-release register** — see `style_guide.md` §5.
- **Framing**: knowledge unit and think-tank of PT PII — not a university, not a degree-granting body, not an independent legal entity. Max 2–3 self-mentions.
- **Internal links**: 3 per article as natural inline anchors (hub in the lead + 2 cousins from the month's set). No "BACA JUGA" callouts.
- **Structure / GEO (§2a)**: definition snippet near the top; a **40–60-word direct answer right after each `## H2`**; FAQ block; a `## Kesimpulan` section; then a **soft website CTA to institute.iigf.co.id as the final line**.
- **Quality gate**: plagiarism + AI-detector scan runs inside the editor's pass (mandatory before commit). The editor fixes what it can in-place and issues a single binding `recommendation`; the curator commits only `approve`. No separate validator agent, no revise-loop.

---

## 6. Run a month

Fill `monthly_runs/<YYYY-MM>/keywords.md` (copy `monthly_runs/_keywords.template.md`), then `/run-month <YYYY-MM>`.

```
User: /run-month <YYYY-MM>
→ N parallel strategist runs (one per keyword)    → briefs
→ parallel researchers                            → dossiers
→ parallel writers                                → ID drafts
→ length gate: count_words.py + trim agents       → drafts inside their band
→ editors (QC + plagiarism/AI scan, fix in-place) → finals + QC reports (approve|revise|reject)
→ curator commits (approve)                       → history + .docx
→ report: N committed + M flagged for manual review
```

**Pilot first (strongly recommended — there is no benchmark yet):** run ONE article end-to-end (strategist → researcher → writer → editor), stop, show the user the final `.md` + `.docx`, iterate on prompts / knowledge base, then scale to the full month and lock the benchmark.

---

## 7. Guardrails (non-negotiable)

1. **History check before strategy** — the strategist MUST read `articles_history/` and dedupe by angle_hash + subtopic overlap before proposing concepts.
2. **Accuracy over invention** — never invent fees, schedules, syllabus scope, membership counts, or indexing status. The researcher verifies or flags; the editor checks against `knowledge_base/`.
3. **CP3P scope traces to APMG** — never to a reseller or a training broker.
4. **Reference year + "indikatif" on every fee/figure** — a bare number is an editor fail.
5. **No named individuals** — hard blacklist; the editor strikes any that slip through.
6. **Accreditation wording** — ATO that delivers training; APMG owns and awards CP3P. Never implied otherwise.
7. **No AI tells** — writer + editor enforce `style_guide.md` §5, with brochure and press-release register treated as failure modes.
8. **Editor verdict binding** — the curator commits only `approve`; `revise`/`reject` stay in `final/` for manual handling.
9. **External authority** — every article cites ≥1–2 authoritative sources.
10. **IIGF disambiguation** — always keep "infrastruktur / KPBU / PPP / PT PII" context near "IIGF" so it is not confused with the International Institute of Green Finance.
11. **Folder isolation** — no internal links to `ptpii.co.id`, no shared history with that folder.

---

## 8. External integrations

| Integration | Status | Notes |
|---|---|---|
| **Ahrefs MCP + GSC** | ⚠️ Not connected | The strategist degrades gracefully to WebSearch/WebFetch (live SERP + PAA) + any `seo_report` named in `keywords.md`. If the user connects Ahrefs later, the strategist uses it automatically. |
| Live SERP | ✅ via WebFetch/WebSearch | Strategist scrapes top results + People Also Ask (Google ID). |
| **Client site fetch** | ⚠️ Partially blocked | `institute.iigf.co.id` blocks part of automated access. The researcher falls back to public snippets, marks confidence medium, and flags the claim for manual verification. |
| Image generation | ❌ Removed | No images anywhere in this pipeline. |
| Plagiarism + AI detection | ✅ Heuristic via `tools/quality-check.ps1` | The editor runs it per article. Plug-in slots for paid APIs via `PLAGIARISM_API_KEY` / `AI_DETECTOR_API_KEY`. |
| md → .docx | ✅ `tools/md-to-docx.ps1` (portable pandoc in `tools/pandoc/`) | Reference template `tools/reference.docx`. Text-only. |
| CMS upload | Out of scope | Manual paste. |

---

## 9. When something feels off

- **Strategist output repetitive** → confirm it read `articles_history/index.json`; check the angle_hash dedup ran.
- **Drafts read like a training brochure** → re-read `style_guide.md` §3 and §5; that is this client's signature failure mode.
- **Fees quoted flatly** → tighten the researcher's "indikatif + tahun" rule; the editor must bounce them.
- **CP3P scope looks wrong** → check the dossier's source; it must be APMG.
- **An accreditation over-claim slipped in** → the wording rule lives in `company_profile.md` Rule 4; the editor corrects in-place.
- **A name slipped in** → the blacklist lives in `company_profile.md`; the editor strikes it.
- **Internal links wrong** → check `product_matrix.md` cross-link map; confirm nothing points at `ptpii.co.id`.
- **Curator over-eager** → confirm the approve-only gate in `.claude/agents/article-history-curator.md`.

Fix systemic issues by editing the relevant `.claude/agents/*.md` or `knowledge_base/*.md` — those are the source of truth each subagent receives.
