---
brief_id: "laporan-laba-rugi-c01"
validator_run_date: "2026-07-18"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-08 (style_addendum.md overrides applied — band 800–1000, FAQ 2–3, 2 internal links, no image placeholders/no images.json = compliant by design)"
---

# Quality Validator Report — Laporan Laba Rugi: Komponen, Jenis, dan Cara Membacanya

## Verdict: **pass**

The article clears both automated gates and every applicable batch-2026-08 check. The heuristic AI-detector scores **0.04** (pass; revise ≥0.30) with a single LOW-severity flag (top-30 vocab share 0.389) that is inherent to a dense single-topic explainer where "laporan / laba / rugi / margin / beban / pendapatan" necessarily recur. Paragraph burstiness (CV **0.472**) clears the ≥0.45 human-writing target outright — no uniformity flag fired — and sentence burstiness (**0.889**) is strongly varied. Web lookup of eight distinctive passages returned **zero verbatim matches** on any non-Soltius page; the only overlaps are concept-level standard accounting knowledge (the gross-profit formula, the textbook definition of vertical/common-size analysis, the accrual-vs-cash principle), which the scoring rules explicitly ignore and which the article states in original phrasing. Arithmetic re-verified end to end, PSAK/SAP claims are scoped to the cited authorities, EYD is clean, and structure is intact. Editor recommendation was `approve`; I concur. Curator may commit.

## Batch overrides applied (recorded per assignment)
| Check | Script default | Override | Result |
|---|---|---|---|
| Body word band | 1,500–1,800 | 800–1000 (target ~900) | **compliant** — 996 (markdown-aware `count_words.py`); tool's naive **1070** is the known pipe/URL inflation artifact, recorded N/A |
| FAQ count | 5–8 | 2–3 | **compliant** — 3 Q&A (43 / 43 / 51 words) |
| Internal links | 3 | 2 (1 hub + 1 cousin) | **compliant** — macam-macam-laporan-keuangan hub (H2 #1) + siklus-akuntansi cousin (lead) |
| Image placeholders | validate `{IMAGE_NN}` + images.json | 0 by design; no images.json | **N/A by design** — 0 placeholders present; image checks skipped |
| Soltius mentions | ≤3 | ≤2 | **compliant** — 2 (positioning line + CTA) |
| Definition repetition | — | once, snippet only | **compliant** — no H2 restates the snippet |

All other checks applied in full (below).

## AI Detector (heuristic v2.0)
- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.472** (target ≥0.45 — clears it; no uniformity flag)
- Sentence burstiness (CV): **0.889** (strong, varied rhythm)
- Top-30 vocab share: **0.389** (above the 0.35 flag line → the lone low flag)
- Flags (1):
  - [low] vocab-repetition: "Top 30 words = 38.9% of body (target <30%)"
- Manual re-read confirms the script: 0 banned openers ("Di era digital / Seiring / Tidak dapat dipungkiri"), 0 consecutive "Selain itu", 0 "Penting untuk dicatat", 0 "Dengan demikian", **0 em-dashes**, no all-bullet H2 (3 tables + 1 margin bullet list + prose), no hype adjective stacks. Several genuine 1-sentence paragraphs ("Keduanya konvensi penyajian…", "Konsekuensinya…", "Angka margin itu baru bermakna…") drive the healthy burstiness. The lone vocab-repetition flag is topic-inherent for a ~900-word income-statement explainer; reducing it would mean stripping the very entities the piece must name repeatedly. Accepted; no action.

## Plagiarism (web lookup of distinctive passages)
8 distinctive passages web-searched (quoted):
- ✅ "Laporannya selesai, angkanya cocok, tetapi tidak ada yang bisa menjawab pertanyaan direktur…" (lead) — no match; returns unrelated interview-tips pages.
- ✅ "Komponennya tidak berdiri sebagai daftar beban yang datar" — no match (search returns structural-engineering PDFs on the homonym "beban").
- ✅ "membaca laporan laba rugi bukan melihat angka terbawah… analisis vertikal" — no verbatim match; the *concept* of vertical/common-size analysis is standard (jurnal.id, PPM School, Accurate define it), explicitly ignored per rules; our phrasing is original.
- ✅ "Bedanya bukan isi, melainkan berapa kali laba dihitung" — no verbatim match; the layered-profit idea is standard, stated here in original wording.
- ✅ "Pendapatan Rp850.000.000 − HPP Rp510.000.000 = Laba Kotor Rp340.000.000…" — no match to the article's 5-line chain; the gross-profit formula and 40% margin are universal arithmetic (ignored per rules); the specific illustration is invented and labeled.
- ✅ "Margin kotor stabil, margin operasi turun → beban operasional yang menggerus" (diagnostic rule) — no match; this layer-by-layer reading rule is the article's original differentiator, absent from the SERP.
- ✅ "laporan laba rugi tidak disusun ulang tiap akhir bulan… Financial Statement Version" — no match; FSV facts trace to the cited SAP Learning page, phrased originally.
- ✅ "Penjualan kredit yang belum tertagih tetap menambah laba, sementara penyusutan mengurangi laba tanpa mengeluarkan kas" — no verbatim match; the accrual-vs-cash principle is standard (ignored per rules), stated in the article's own words.
- **Aggregate plagiarism score: 0.00** — no exact match ≥20 words, no partial near-match on any non-Soltius URL. Cited IAI/SAP-official and soltius.co.id self-reference (the PSAK-date sentence and the SAP Platinum credential line) are intentional and excluded per SOP.

## Fact / math / citation re-verification
- **Illustration chain**: 850 − 510 = **340**; 340 − 220 = **120**; 120 − 15 = **105**; 105 − 23 = **82** (Rp juta) — arithmetic correct, no error.
- **Margins**: 340/850 = **40,0%**; 120/850 = 14,12% → **14,1%**; 82/850 = 9,65% → **9,6%** — all correct at one decimal. Labeled "angka rekaan," no real company named.
- **Tax**: shown only as nominal Rp23.000.000 — **no rate/percentage stated** (23M ≠ 22% of 105M; brief/dossier Flag F2 honored). **OK.**
- **PSAK 201**: "penomoran ulang dari PSAK 1 disahkan 12 Desember 2022, berlaku efektif 1 Januari 2024" — matches dossier Claim 1 (IAI verbatim). "Salah satu komponen laporan keuangan lengkap" stated with **no number** (Flag F1). Single/multiple step framed as "konvensi penyajian, bukan format yang diwajibkan standar" (Flag F3). Accrual written as "prinsip akuntansi standar," no PSAK paragraph cited (Flag F5). **All OK.**
- **FSV / SAP**: "sebanyak versi yang dibutuhkan… otoritas pajak, pengguna internal, pengguna eksternal… dihitung otomatis oleh laporan yang sama" — scoped to SAP Learning (dossier Claims 4–6); no Universal Journal/ACDOCA, no transaction code, no module (Flag F6). SAP Learning pages are JS-rendered (WebFetch returns title-only), so live body re-fetch is unreliable; relying on the dossier's same-day full-body capture, consistent with batch practice. **No overclaim found.**

## Structure integrity
- H1 present; 4 content H2 (#2 & #3 question-format, #1/#2/#3 practical/structured) — no definitional "Apa itu laporan laba rugi" H2 that would restate the snippet.
- Definition snippet blockquote "Ringkasnya:" defines the entity once (50 words); primary keyword "laporan laba rugi" appears in the first 100 words and in the closing.
- FAQ: 3 Q&A. Kesimpulan under its own H2. Soft CTA (soltius.co.id) as the final, separate line.
- 2 internal links (both inline, no "BACA JUGA"), 2 external citations (IAI + SAP Learning), 3 tables + 1 bullet list.
- EYD clean; the editor's light edits (CALK completeness, PSAK de-dup, two tightenings, FSV mapping phrase) are present. Dedup boundary respected: no jurnal umum / neraca saldo teaching, HPP kept to one line, no AP/AR, no ACDOCA; ERP lens = Financial Statement Version.

## Loop status
Revision loop 0. No revision required.

## Recommendation to orchestrator
**Curator-ready.** AI 0.04, plagiarism 0.00, all applicable batch checks compliant, image checks N/A by design. Overall verdict (worst of AI-pass and plagiarism-pass) = **pass**. Per the assignment, the batch stops here for user review — do NOT run the curator or commit to articles_history.
