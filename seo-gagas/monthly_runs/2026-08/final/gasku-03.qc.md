---
brief_id: "gasku-03"
editor_run_date: "2026-08-11"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.03
---

# Editor QC Report — TCO 5 Tahun Kendaraan BBG (Gasku): Bukan Sekadar Balik Modal

## Recommendation
**approve**

This is a curator-ready draft that needed only one micro-fix. It clears every hard gate: the anti-AI scan is clean (0 em-dashes, 0 "Selain itu"/"Dengan demikian"/"Penting untuk", varied rhythm, honest-hedging voice), all energi-gas/CNG facts trace to the dossier, and the two riskiest facts are handled exactly as required — the tabung-retest interval carries the mandated verbatim hedge (in both the body and the FAQ), and every unsourced cost (uji ulang tabung, servis kit, nilai residual) stays strictly qualitative with no invented Rupiah. The current fuel-price claims (Pertamax Rp 12.300→16.250 on 10 Jun 2026, down to Rp 15.950 per 1 Aug 2026; Pertalite flat Rp 10.000) were independently confirmed via WebSearch across multiple outlets. The AI-detector score is 0.04 and no distinctive passage matched a non-Gagas page verbatim. PGN Gagas is framed correctly as a downstream distributor ("Gasku adalah bahan bakarnya, bukan penjual converter kit"), with 2 explicit self-mentions plus one mid-article pricing aside — within budget. Word count 1554, inside the band.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No AI openers; concrete pain hook; varied paragraph/sentence length; practitioner asides ("jarang ditulis kompetitor"). AI-detector 0.04. |
| Factual & energi-gas / CNG accuracy | 9 | 5+ claims spot-checked; fuel prices independently web-verified; hedges held; no invented figures. |
| On-page SEO compliance | 9 | Meta title 50, desc 149, slug 31; 5 content H2s (question + honest); 3 internal + 2 external links; 2 tables, 2 lists, 2 images. |
| GEO extractability (§2a) | 9 | 40–60-word answer after every H2; definition snippet near top; one quotable point per paragraph; FAQ FAQPage-ready. |
| PGN Gagas framing discipline | 9 | Provider/distributor framing intact; fuel-vs-kit separator; positioning line from profile; no superlatives; ≤3 mentions. |
| Internal linking | 9 | Hub (Gasku) in lead; 2 cousins (perusahaan-cng-indonesia, gaslink) woven inline, no "BACA JUGA". |
| FAQ quality | 8 | 5 self-contained 40–80-word Q&As mirroring PAA; at the minimum count (brief targeted 7) — kept 5 to respect the ≤1600 band. |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04; no verbatim ≥20-word non-Gagas lift; burstiness CV 0.37 (>0.30 floor). |

## What I fixed (changelog)
- Expanded the acronym "ATPM" on first use → "ATPM (Agen Pemegang Merek)" in the H2 #5 lead answer (style_guide §3: acronyms expand on first use). Left the second occurrence (FAQ) as "ATPM" since it is now introduced. Net +3 words.
- Updated frontmatter `word_count` 1551 → 1554 to reflect the canonical count (tools/count_words.py) after the edit.
- No other content changes were warranted — the draft was already compliant; over-editing a clean draft would have risked introducing error.

## What I flagged (open issues)
- ⚠️ FAQ count is 5 (playbook allows 5–7; brief targeted 7). *Recommendation:* acceptable as-is; expanding to 6–7 from the dossier's drafted set would push past the ≤1600 ceiling, so 5 is the correct trade-off. No action needed for commit.
- ⚠️ Minor terminology nuance: the article labels Pertalite "bersubsidi," while some 2026 reporting frames it as under a "kompensasi" (not "subsidi") scheme. *Recommendation:* keep — the dossier uses "bersubsidi," it is the mainstream framing, and the load-bearing point (flat Rp 10.000, government-supported, stable TCO anchor) is accurate.
- ⚠️ TCO table net-savings are illustrative and (per the dossier) computed on assumptions that round slightly differently from the "26 hari operasi/bulan" disclaimer line. *Recommendation:* no change — figures are dossier-sourced and explicitly labeled "ilustrasi, bukan proyeksi resmi"; editors do not recompute/introduce numbers.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — lead opens on a concrete pain ("Balik modal 10 bulan")
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0
- [x] Em-dash count ≤2 — 0 em-dashes (en-dashes used only in numeric ranges)
- [x] Varied paragraph lengths — mixes 1-sentence lines with 4–6-sentence blocks; burstiness CV 0.37
- [x] Not every H2 → 3-bullet list — mix of prose, one bullet list, one numbered list, two tables
- [x] No generic claims without numbers — specific Rupiah/dates/percentages throughout
- [x] No stacked hype adjectives — none
- [x] No service-dump paragraph — single positioning line in the conclusion

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Gasku Rp 4.500/LSP (harga saat ini) | dossier ✓ (first-party gagas.co.id; consistent with approved gasku-01/02) | pass |
| Pertamax Rp 12.300→16.250 (10 Jun 2026) → Rp 15.950 (1 Agu 2026); Pertalite flat Rp 10.000 | dossier ✓ + WebSearch (Kompas Otomotif, Money Kompas, Detik, RM.id, Antara — multiple outlets) | pass |
| Selisih Gasku vs Pertalite Rp 5.500/LSP (~55%) | dossier ✓; arithmetic sound | pass |
| Tabung CNG = bejana tekanan (Permenaker 37/2016), riksa-uji Ahli K3, interval ~5 th (hedged) | dossier ✓; verbatim hedge held; not tightened to a legal certainty | pass |
| LEMIGAS menyediakan pengujian tabung tanpa harga publik | dossier ✓ + WebSearch corroborated ("biaya dikirim langsung ke pemohon") | pass |
| NGV2 masa pakai tabung 15–20 th | dossier ✓; framed as international benchmark, "bukan aturan generik Indonesia" | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 50 chars / "Gasku" at ~char 19
- [x] Meta description 140–160 — actual: 149
- [x] Slug ≤60, kebab-case, keyword — actual: gasku-tco-5-tahun-kendaraan-bbg (31)
- [x] H1 contains keyword — "...(Gasku): Bukan Sekadar Balik Modal"
- [x] H2 count 4–5 — actual: 5 content H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 ("Setelah Balik Modal, Biaya Apa Lagi yang Muncul?"; "Kapan TCO BBG Berhenti Menarik?"); ≥1 honest/counter-conventional H2 ("Nilai Jual Kembali & Risiko yang Tidak Masuk Kalkulator Hemat")
- [x] Keyword in first 100 words — yes (lead)
- [x] Definition snippet near top (40–60 words) — blockquote "Ringkasnya:" ~52 words
- [x] ≥8 LSI terms — counted 12+ (TCO, converter kit, uji ulang tabung CNG, uji hidrostatik, LSP, SPBG, nilai jual kembali, Permenaker 37/2016, ISO 11439, bejana tekanan, Pertalite, Pertamax, payback, sensitivitas harga BBM)
- [x] 3 internal links (1 hub + 2 cousins) — gagas.co.id/gasku (hub, lead); /perusahaan-cng-indonesia; /gaslink
- [x] ≥1 external authoritative citation — 2 inline (Permenaker/JDIH Kemnaker; Kompas Otomotif Agu 2026); LEMIGAS ESDM referenced in prose + frontmatter
- [x] FAQ 5–7 Q&As — actual: 5
- [x] 2 image placeholders — {IMAGE_01} iceberg, {IMAGE_02} price-sensitivity line chart
- [x] ≥1 list + ≥1 table — 1 bullet list, 1 numbered list, 2 tables
- [x] Word count 1,200–1,600 — actual: 1554 (canonical)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all 5 H2s (~45–50 words each)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; publish_month 2026-08 in meta (freshness note: fuel prices dated to 1 Agu 2026 — current)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/distributor (supplies/distributes/supports) — "penopang bisnis hilir PGN", "memperluas manfaat gas bumi lewat jaringan SPBG dan moda transportasi CNG"; NOT a producer
- [x] ≤3 PGN Gagas self-mentions — 2 explicit "PGN Gagas" + 1 mid-article Gasku pricing aside
- [x] No unverifiable superlatives — none
- [x] Product names + specs match product_matrix.md / dossier — Gasku Rp 4.500/LSP; kit Rp 14–25 juta labeled market range; SPBG referenced with no invented count
- [x] Closing uses a company_profile.md positioning line — "Sebagai penopang bisnis hilir PGN...Subholding Gas Pertamina..." (Integrity value)
- [x] Soft website CTA present as the FINAL line — "...mulai diskusi Anda di gagas.co.id." (consultative, not "beli sekarang")
- [x] Hub link is a natural inline anchor in the lead ([Gasku]) — no "BACA JUGA"
- [x] Framing separator present — "Gasku adalah bahan bakarnya, bukan penjual converter kit"

### E. Anti-cannibalization spot check
- Closest prior articles (Gasku cluster): `2026-07-gasku-02` (konversi-bbm-ke-bbg-penghematan-armada — month-1 payback); `2026-07-2-gasku-04` (perawatan/uji tabung — how-to procedure); `2026-07-gasku-03` (kapan belum cocok — decision).
- Subtopic overlap (Jaccard estimate): ~0.25 — this article models the 3–5-year lifecycle *after* payback (uji tabung as a cost line, not a how-to; residual value; sensitivity), distinct from gasku-02's breakeven and gasku-04's maintenance procedure.
- Verdict: distinct angle confirmed.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `gasku-03.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: 0.04 (verdict pass; only a "low" paragraph-variance flag)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: 0.37 (sentence burstiness 0.67; top-30 vocab share 0.289)
- [x] Plagiarism: 8 candidates web-checked; no non-Gagas verbatim hit ≥20 words. Distinctive prose passages (Pertamax price line, Pertalite anchor line, converter-kit components, LEMIGAS) returned only general public-fact reporting, not phrasing lifts; heading-based candidates are the article's own unique H2s. Plagiarism score: 0.03.
