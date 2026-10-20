---
brief_id: "pkwt-pkwtt-c01"
validator_run_date: "2026-07-17"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-08 (style_addendum.md §7 overrides applied — band 800–1000, FAQ 2–3, internal links 2, image checks N/A by design)"
---

# Quality Validator Report — PKWT vs PKWTT: Perbedaan, Aturan, dan Implikasinya bagi Perusahaan

## Verdict: **pass**

The article clears both automated gates. The AI-detector heuristic scores **0.04** (pass; revise ≥0.30, reject ≥0.50) with healthy burstiness — paragraph-length CV **0.471** sits above the 0.45 human target and well clear of the 0.30 AI-tell floor, and sentence-length CV is **1.241**. Plagiarism web lookups on the distinctive passages returned **no verbatim lift** from any non-Soltius source: the only high-overlap fragments are statutory phrasing (cited to its pasal) and the Soltius self-reference (hits soltius.co.id only). All load-bearing regulation numbers and the compensation formula were re-verified against authoritative sources and are correct. Editor recommendation (approve) is concurred. Curator may commit — subject to the batch's manual-review hold noted in the assignment.

## AI Detector (heuristic v2.0)
- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.471** (target ≥0.45 — healthy, not uniform)
- Sentence burstiness (CV): **1.241** (strong length variety)
- Top-30 vocab share: **0.401**
- Flags (1):
  - [low] `vocab-repetition`: top-30 words = 40.1% of body (target <30%). **Not counted as an AI tell.** Inherent to a single-topic regulatory article — PKWT, PKWTT, Pasal, tahun, bulan, upah, kerja, hukum necessarily recur. Contributes only +0.04 to the score. Consistent with the editor's read.

### Manual anti-AI read (style_guide §5 — applies in full per addendum §7)
- Lead opens on a concrete scenario (a staff member extended three times for routine work), not a cliché opener. No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri."
- No "Selain itu" paragraph chains; no "Penting untuk dicatat/dipahami"; no "Dengan demikian" overuse; no "Sebagai kesimpulan."
- Em-dash in body = **1** (in the snippet). The 2 additional U+2014 in the file are inside the frontmatter `external_citations` context and are correctly excluded by the scanner — body count is compliant (≤2).
- Varied rhythm (1-sentence example, 6-row table, 4- and 2-bullet lists, 2–3-sentence prose). Honest hedging present ("Uraian ini informasi umum, bukan nasihat hukum").
- Verdict: reads human. Pass.

## Plagiarism (web lookup of distinctive passages)
8 candidate passages extracted by the script; distinctive prose and self-reference passages searched. Aggregate score: **0.00** (no exact or partial near-match on a non-Soltius URL).

- ✅ "Bila tetap disyaratkan, klausul masa percobaan itu batal demi hukum dan masa kerjanya tetap dihitung…" — **clean.** No verbatim non-Soltius match. The overlap "batal demi hukum dan masa kerja tetap dihitung" is the statutory norm (Pasal 58 UU 13/2003 as amended), cited to its pasal — treated as legal quotation, not plagiarism (per agent failure-mode exception for well-known/standard legal phrasing).
- ✅ "Sebagai SAP Platinum Partner melalui United VARs, Soltius mengimplementasikan dan mendampingi solusi Human Capital Management SAP…" — **intentional self-reference.** Search returns only soltius.co.id / SWA business-update pages; no non-Soltius lift. Not plagiarism per Step 3 ignore-rule.
- ✅ "Uang kompensasinya punya empat titik" — **clean.** Original framing; no match.
- ✅ Regulatory-reference sentences (UU 13/2003 + UU 6/2023 + PP 35/2021 framing; "Keduanya diatur UU Nomor 13 Tahun 2003 …") — **clean.** Standard legal citation strings, inherently shared, no distinctive verbatim block lifted.
- No passage has a 20+ word verbatim hit on a non-Soltius site. Plagiarism verdict: **pass**.

## Fact / formula re-verification (assignment requirement)
All cited regulation numbers and the formula math were re-checked against authoritative sources (BPK, hukumonline, Kemnaker/JDIH):

| Claim | Cited as | Verified |
|---|---|---|
| PKWT berdasarkan jangka waktu paling lama 5 tahun, keseluruhan termasuk perpanjangan | PP Pasal 8 | ✅ correct (qualifier "berdasarkan jangka waktu" correctly applied) |
| Perjanjian kerja harian: <21 hari/bulan; ≥21 hari selama 3 bulan berturut-turut → demi hukum PKWTT | PP Pasal 10 ayat 3–4 | ✅ correct |
| Masa percobaan pada PKWT batal demi hukum | PP Pasal 12 | ✅ correct |
| Pencatatan PKWT: 3 hari kerja daring / 7 hari kerja tertulis di dinas kab/kota | PP Pasal 14 | ✅ correct |
| Uang kompensasi: 12 bln = 1 bln upah; else (masa kerja ÷ 12) × 1 bln upah; dasar = upah pokok + tunjangan tetap | PP Pasal 15–16 | ✅ correct |
| PKWT wajib tertulis, bahasa Indonesia, huruf latin | UU Pasal 57 | ✅ correct |
| PKWT untuk pekerjaan tetap → demi hukum PKWTT | UU Pasal 59 | ✅ correct |
| **Formula example:** masa kerja 8 bulan → (8 ÷ 12) × 1 bln = ~0,67 bln upah | Pasal 16 ayat 1 | ✅ **math correct** (8/12 = 0.6667 ≈ 0,67) |

No fabricated pasal, durasi, or nominal detected. The "berdasarkan jangka waktu" scope on the 5-year cap (dossier Flag #1) is correctly preserved in the table, H2 #2, and FAQ #2.

## Structure & EYD integrity
- Prose word count (markdown-stripped, independent recount): **982 words** (editor field 986) — both inside the batch band. See override note below re: script's 1033.
- Body H2 = **4** (+ FAQ + Kesimpulan); ≥1 question-format H2 (#1, #3); ≥1 structured H2 (table + rumus/list). Compliant.
- FAQ = **3** Q&A. Internal inline links = **exactly 2** (HCM hub + SuccessFactors cousin). Image placeholders = **0**.
- Definition appears **once** (the "Ringkasnya:" snippet); no H2 or direct answer restates it — addendum §7 definition-repetition check passes.
- Snippet, table rows, required Soltius framing/CTA lines, and citations intact. EYD: clean; formal register, no typos or malformed punctuation observed.

## Batch-2026-08 overrides applied (recorded as N/A vs. script defaults, not failures)
- **Word band:** script default 1,500–1,800 → **N/A**; addendum band **800–1000** enforced → 982/986 **COMPLIANT**.
- **Script `word_count: 1033`:** known artifact — the whitespace splitter counts ~40 table-pipe tokens (mandatory 6-row comparison table) + heading markers as "words." Authoritative prose count is 982–986, in band. Not read as prose length.
- **FAQ:** default 5–8 → **N/A**; addendum **2–3** enforced → 3 **COMPLIANT**.
- **Internal links:** default 3 → **N/A**; addendum **2** enforced → 2 **COMPLIANT**.
- **Image checks:** **N/A by design** — 0 `{IMAGE_NN}`, no `images.json` for this batch; not flagged.
- **vocab-repetition flag:** recorded but **not scored as an AI tell** (legal register), per §7.
- All other checks (anti-AI §5, EYD, plagiarism/similarity, structure integrity, formula/regulation re-verification, Soltius framing, meta block) applied **in full**.

## Loop status
Revision loop **0** (first pass). No revision required.

## Report to orchestrator
Verdict **pass** · AI score **0.04** · plagiarism score **0.00** · loop 0 · recommendation: **curator-ready** (editor approve + validator pass). Per assignment, the batch halts here for user review; do NOT run the curator or commit to articles_history.
