---
brief_id: "inventory-turnover-c01"
validator_run_date: "2026-07-18"
verdict: "pass"
ai_score: 0.08
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-08 (style_addendum.md overrides applied — band 800–1000, FAQ 2–3, 2 internal links, no image placeholders/no images.json, ≤2 Soltius mentions, definition-once)"
---

# Quality Validator Report — Inventory Turnover Ratio: Rumus dan Cara Meningkatkannya

## Verdict: **pass**

The article clears both automated QC gates and every full-scope check that survives the batch overrides. The AI-detector heuristic scores **0.08** (pass; revise ≥0.30) with only two low-severity flags, both explained by the article's dense single-topic subject matter rather than AI patterning; paragraph burstiness CV is 0.399 — above the 0.30 hard-AI-tell floor — and sentence burstiness is a very human 0.728. Plagiarism web lookups on the distinctive passages returned **no verbatim ≥20-word matches** on any non-Soltius site. All six inline calculations re-verify exactly, both cited standards (IAS 2, PSAK 202) are confirmed against primary sources, EYD and structure are intact, and the batch overrides (word band, FAQ count, 2 internal links, no-image design) are satisfied. This concurs with the editor's `approve`. Nothing requires revision. Curator may commit.

## AI Detector (heuristic v2.0)
- Score: **0.08** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.399** (target ≥0.45; hard-AI-tell floor <0.30 — comfortably clear)
- Sentence burstiness (CV): **0.728** (strong human-like variation; short punch lines mixed with compound sentences)
- Top-30 vocab share: **0.362** (target <0.30)
- Flags (2, both low):
  - [low] `paragraph-low-variance`: paragraph word-count CV=0.399 (<0.45). Not blocking — CV is well above the 0.30 strong-tell threshold, and the residual comes from deliberately terse lever/caveat lines ("Urutannya menentukan hasil.", "Rasio tinggi pun tidak otomatis sehat.") sitting beside longer explanatory paragraphs. Accepted.
  - [low] `vocab-repetition`: top-30 words = 36.2% (>30%). Expected artifact of a tightly-scoped ratio article where the domain terms *persediaan / rasio / stok / HPP / turnover* necessarily recur; not filler repetition. Accepted.
- Body em-dash count in prose: **0** (the one `—` in the file is inside a frontmatter `external_citations.context` field, which the scanner strips; not reader-visible body prose).
- No AI-tell openers present: `Selain itu` / `Penting untuk dicatat` / `Sebagai kesimpulan` / era-filler = 0; no `BACA JUGA` callout.
- Script-reported word_count 1036 is the known table-pipe inflation artifact (two tables), not a body-length signal — see word-count note below.

## Plagiarism (web lookup of distinctive passages)
8 candidate passages extracted; the most distinctive (highest-entropy) ones were WebSearch-checked with quoted queries. All clean.

- Passage (lead opener) "Manajer gudang melaporkan stok aman…" — **clean**. No verbatim source; competing ID inventory-turnover articles (hashmicro, lalamove, paper.id, sapx.id, online-pajak) share the topic, none the phrasing.
- Passage (worked example) "Persediaan rata-ratanya Rp 1,5 miliar, sehingga rasionya 9 ÷ 1,5 = 6,0 kali setahun." — **clean**. No match; the numeric example is original.
- Passage (thesis) "Pembilang rasio ini adalah harga pokok penjualan, bukan penjualan." — **clean**. The COGS-as-numerator concept is standard finance, but the exact wording appears nowhere; concept-level overlap only (ignored per agent rules on well-known definitions).
- Passage (SAP IBP) "…SAP memosisikannya untuk *multi-echelon inventory optimization* dan penempatan stok terhadap *forecast error* serta ketidakpastian pasokan." — **clean / intentional**. Matches SAP-official phrasing (learning.sap.com, sap.com IBP-for-inventory) by design; vendor-attributed, not plagiarism.
- Passage (Soltius credential + soft CTA) — **intentional self-reference**, excluded per agent rules (soltius.co.id / brand lines are not plagiarism).
- Aggregate score: **0.00** (no exact match ≥20 words on any non-Soltius URL; no partial near-matches).

## Fact / math / regulation re-verification (full-scope, override does not waive)
| Claim | Re-check | Verdict |
|---|---|---|
| Persediaan rata-rata = (1,2 + 1,8) ÷ 2 = 1,5 | recomputed = 1.5 | ✅ exact |
| Turnover = 9 ÷ 1,5 = 6,0 | recomputed = 6.0 | ✅ exact |
| DSI = 365 ÷ 6,0 ≈ 61 | recomputed = 60.83 → 61 | ✅ exact |
| Penjualan @margin 30% = 9 ÷ 0,7 = 12,86 | recomputed = 12.857 → 12.86 | ✅ exact |
| Penjualan-basis turnover = 12,86 ÷ 1,5 = 8,6 | recomputed = 8.571 → 8.6 | ✅ exact |
| Distorsi 1,43 = 1 ÷ (1 − 0,30); 8,6 ÷ 6,0 | recomputed 1.4286 / 1.4333 → 1.43 | ✅ exact (identity holds) |
| Grosir 1,15 vs manufaktur 1,47 ≈ 28% | (1.47−1.15)/1.15 = 27.83% → ~28% | ✅ exact |
| IAS 2: measured at lower of cost and net realisable value | IFRS Foundation IAS 2 measurement principle | ✅ correct |
| PSAK 202 "Persediaan", padanan Indonesia IAS 2, efektif 1 Jan 2024 | IAI: PSAK 14 renumbered to PSAK 202, disahkan 12 Des 2022, efektif 1 Jan 2024; PSAK 2xx series maps to IAS standards | ✅ correct (expired "PSAK 14" number correctly dropped) |
| SAP IBP: multi-echelon inventory optimization / forecast error / supply uncertainty | SAP-official (learning.sap.com, sap.com IBP-for-inventory) confirms language; framed as SAP's positioning | ✅ correct, vendor-attributed |

## EYD & structure integrity
- **EYD**: clean. Foreign terms italicized on use (*cost of goods sold*, *days sales of inventory*, *multi-echelon inventory optimization*, *forecast error*, *slow moving*, *dead stock*, *bundling*, *clearance*, *stockout*, *cash-to-cash cycle time*). Comma decimal separator used correctly (6,0 / 1,28); Rupiah formatting consistent (Rp 9 miliar). No sub-baku fragments (the editor's one fix — "Nilainya terletak pada satu hal." — is in place).
- **Structure**: frontmatter YAML → H1 → lead (no roadmap para) → definition snippet blockquote ("Ringkasnya:", the only definition) → 3 content H2 (#1 Rumus [prose + 2 tables + 2 standalone formula lines], #2 "Berapa … yang Bagus?" [question-format], #3 Cara Meningkatkan [numbered list]) → FAQ (3 Q&A) → Kesimpulan → soft `soltius.co.id` CTA as the final line. Both tables well-formed. Intact.

## Batch-2026-08 overrides (recorded per style_addendum.md §7 — not failures)
| Check | Script default | Override (addendum) | Actual | Disposition |
|---|---|---|---|---|
| Body word band | 1,500–1,800 (implicit) | **800–1000** | editor 979; validator reader-visible 992; tool 1036 (table inflation) | **compliant** (N/A vs script default) |
| FAQ count | 5–8 | **2–3** | 3 | **compliant** |
| Internal links | 3 | **2** (1 hub + 1 cousin) | 2 (KPI-supply-chain hub in lead + laporan-keuangan cousin in H2 #1) | **compliant** |
| Image placeholders / brief | ≥1 `{IMAGE_NN}` + images.json | **0 by design; validation N/A** | 0 placeholders, no images.json | **N/A (skipped by design)** |
| Soltius self-mentions | ≤3 | **≤2** | 2 (positioning line + soft CTA; the 2 blog URLs are internal links, not brand mentions) | **compliant** |
| Definition repetition | — | **definition once (snippet only)** | snippet only; no definitional H2 restating it | **compliant** |

### Word-count note
The pipeline heuristic in `tools/quality-check.ps1` splits on raw whitespace **without** stripping markdown table pipes/markers, inflating table-heavy articles. This article has two tables, so the tool reports **1036**. A markdown-aware recount (strip pipes/markers, resolve links to anchor text) yields **992 reader-visible words** (927 prose + 65 table), consistent with the editor's 979 and inside the 800–1000 band. The tool's 1036 is a known batch artifact, not a band overage — recorded as **N/A against the script's implicit long-form default**, compliant against the addendum band.

## Non-blocking notes (carried from editor, no action required for this verdict)
- ℹ️ **Live-data freshness (Census MTIS)** — the article pins the U.S. Census inventory/sales ratios to "Mei 2026" + "rilis 16 Juli 2026 (CB26-114)". The release cadence checks out (Mar-2026 data released 14 May, Apr on 17 Jun, so May-2026 data ~mid-July). The exact May-2026 figures are too recent (2 days old) to confirm against the search index, but nothing contradicts them, they are internally consistent with the known ISRATIO ballpark, and the claim is bounded honestly (labeled *inventory/sales ratio, not inventory turnover*; *US aggregate*; *directional, not a target*). Non-blocking — matches the editor's F3. If re-touched on/after the next MTIS release, optionally refresh.
- ℹ️ **"SKU" not expanded on first use** — one occurrence ("SKU mati"), a domain term of art for this audience; expanding it spends words against a thin ceiling. Non-blocking (editor concurred).

## Loop status
Revision loop **0**. No revision triggered — the article passes on first validation.

## Report back
- **Verdict: pass** (AI pass 0.08 + plagiarism pass 0.00 → worst = pass; concurs with editor `approve`).
- AI score 0.08 / plagiarism 0.00 / loop 0.
- Recommendation: **curator-ready.** (Per assignment: this batch stops after the verdict for user review — do NOT run curator / do NOT commit to articles_history.)
