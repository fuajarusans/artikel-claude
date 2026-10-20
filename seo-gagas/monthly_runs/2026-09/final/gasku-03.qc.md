---
brief_id: "gasku-03"
editor_run_date: "2026-09-21"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Converter Kit BBG untuk Gasku: Venturi vs Sequential & Cara Memilih

## Recommendation
**approve**

The draft is curator-ready. It teaches the topic vendor-neutrally, honors every hedge flagged by the researcher, and passes the anti-AI, on-page SEO, GEO, framing, and originality gates. All Rupiah figures are labeled as a 2024–2026 market range (not a Gagas tariff), the SNI 7407/7408 directional split is attributed to Permenperin 70/2012 (as the dossier requires), the oktan claim uses the first-party >120 RON (not the erroneous "320" from press), PM 39/2012 technician detail is hedged with "antara lain", and the 3.444-unit ESDM figure is framed as historical context — matching the dossier exactly. PGN Gagas is framed as *menyalurkan/melayani* BBG via SPBG and certified workshops (not a producer), with only 2 self-mentions and no superlatives. My fixes were enhancements only (GEO freshness field, two authoritative outbound links, a sixth FAQ to match the brief target). AI-detector 0.04 and no non-Gagas verbatim hit. Nothing needs writer/strategist rework.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete pain hook, varied 1–6 sentence rhythm, "yang sering disalahpahami" asides, honest hedging; zero AI-opener tells |
| Factual & energi-gas / CNG accuracy | 9 | Every claim dossier-sourced; all 5 hedge flags honored precisely |
| On-page SEO compliance | 9 | Title 46, desc 156, slug 45; 5 body H2s incl. question + counter-conventional; 3 internal + 2 external links |
| GEO extractability (§2a) | 9 | 40–60-word answer after each H2; one quotable point/paragraph; 6-Q FAQ FAQPage-ready; date_modified added |
| PGN Gagas framing discipline | 10 | "Menyalurkan…via SPBG/bengkel bersertifikat", not produsen; 2 mentions; positioning line + soft CTA |
| Internal linking | 9 | Hub (Gasku) in lead; cousins Gaslink + CNG placed in-context |
| FAQ quality | 9 | 6 self-contained Q&As, 40–80 words each, one number/fact per answer |
| Originality (plagiarism + AI-detector) | 10 | AI 0.04; no verbatim ≥20 words on any non-Gagas page |

## What I fixed (changelog)
- Added `date_modified: "2026-09-21"` to the meta block (GEO §2a freshness signal; was absent).
- Converted the inline attribution "(Kementerian Perindustrian, 2012)" into an authoritative outbound link to kemenperin.go.id/artikel/4130 (satisfies ≥1 external link as a real anchor).
- Linked "PM 39 Tahun 2012 Kemenhub" to peraturan.bpk.go.id/Details/147046 (second authoritative outbound link).
- Added a sixth FAQ — "Apa saja isi satu paket converter kit BBG?" (framed via Permenperin 70/2012) — to hit the brief's 6-question target and cover the captured PAA; was 5.
- Updated frontmatter `word_count` 1474 → 1536 to reflect the added FAQ.

## What I flagged (open issues)
- ⚠️ SNI 7407-2009 vs 7408-2009 directional assignment is medium-confidence (one public scan shows a reversed title). The article already hedges correctly via "Berdasarkan Permenperin 70/2012…". *Recommendation*: keep the Permenperin attribution intact at publish; do not tighten into a standalone absolute claim.
- ⚠️ Burstiness CV = 0.416 — above the editor's 0.30 tell threshold but below the scanner's softer 0.45 target (low-severity flag only). *Recommendation*: no action needed; rhythm is genuinely varied.
- ⚠️ Rp13–25 juta range and PM 39 technician specifics are period/attribution-sensitive. Already labeled "rentang pasar 2024–2026" and hedged "antara lain". *Recommendation*: refresh the price range on any future update.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — none present
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — zero occurrences
- [x] No "Penting untuk dicatat / dipahami bahwa" — none
- [x] "Dengan demikian" not overused — zero occurrences
- [x] Em-dash count ≤2 — 0 in body prose (the 3 em-dashes are inside {IMAGE_NN} design-brief placeholders, not published body)
- [x] Varied paragraph lengths — 1–6 sentences, deliberately mixed
- [x] Not every H2 → 3-bullet list — bullets (H2#1), table (H2#2), prose (H2#3), numbered list (H2#4), prose (H2#5)
- [x] No generic claims without numbers — 200 bar, >120 RON, 90–95 RON, Rp13–25 juta, 3.444 unit, Tipe 1–4
- [x] No stacked hype adjectives — none
- [x] No service-dump paragraph — single anchor at H2#4 + closing only

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Converter kit components defined by Pasal 1 Permenperin 70/2012 | dossier ✓ / kemenperin.go.id/artikel/4130 | pass |
| ISO 11439 tabung CNG, tekanan acuan 200 bar, Tipe 1–4 | dossier ✓ / iso.org/standard/44755.html | pass |
| Oktan CNG >120 RON vs bensin 90–95 RON (NOT "320") | dossier ✓ (first-party gagas.co.id) + flag honored | pass |
| PM 39/2012: bengkel & teknisi bersertifikat Ditjen Hubdat | dossier ✓ / peraturan.bpk.go.id/Details/147046 — hedged "antara lain" | pass |
| Harga kit Rp13–25 juta = rentang pasar 2024–2026, bukan tarif Gagas | dossier ✓ (CNBC/IDN Times) + labeled market range | pass |
| Program ESDM 3.444 unit s.d. akhir 2013 (historical) | dossier ✓ (migas.esdm.go.id) + framed "konteks historis" | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — 46 chars; "Gasku" at char ~19
- [x] Meta description 140–160 — 156 chars
- [x] Slug ≤60, kebab-case, keyword — `gasku-converter-kit-bbg-venturi-vs-sequential` (45)
- [x] H1 contains keyword — "…untuk Gasku…"
- [x] H2 count 4–5 — 5 body H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (H2#3) ; ≥1 honest/counter-conventional H2 (H2#5)
- [x] Keyword in first 100 words — "Gasku" in lead sentence 3
- [x] Definition snippet near top — 40–60-word "Ringkasnya" blockquote
- [x] ≥8 LSI terms — converter kit, venturi/mixer, sequential injection, ECU, reducer/vaporizer, SNI 7407/7408, ISO 11439, Permenperin 70/2012, PM 39/2012, tabung seamless, ECE R110, SPBG, CNG (13+)
- [x] 3 internal links — gagas.co.id/gasku/ (hub, lead) + gaslink/ + perusahaan-cng-indonesia/
- [x] ≥1 external authoritative citation — 2 inline (kemenperin.go.id, peraturan.bpk.go.id) + iso.org in meta
- [x] FAQ 5–7 Q&As — 6
- [x] 2 image placeholders (up to 3) — 3 (IMAGE_01–03), each with alt-text
- [x] ≥1 list + ≥1 table — bullet + numbered + comparison table
- [x] Word count 1,200–1,600 — ~1,536

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (verified H2#1–#5)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-09-21` present in the meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider — "menyalurkan gas bumi lewat Gasku", "diakses lewat jaringan SPBG & mitra bengkel bersertifikat"; NOT producer, NOT kit manufacturer
- [x] ≤3 PGN Gagas self-mentions — 2 (H2#4 aside + Kesimpulan)
- [x] No unverifiable superlatives — "Kit Termurah…" is a cautionary idiom about the cheapest option, not a Gagas superiority claim
- [x] Energi-gas / CNG product names + specs match dossier — Gasku, SPBG, CNG, GTM/Gaslink all correct
- [x] Closing uses a company_profile.md positioning line — "anak usaha PGN…bagian dari Subholding Gas Pertamina…menyalurkan"
- [x] Soft website CTA as FINAL line — "…kunjungi gagas.co.id" after the conclusion, consultative tone
- [x] Hub link is a natural inline anchor in the lead — [Gasku](https://gagas.co.id/gasku/); no "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `gasku-matriks-kompatibilitas-kendaraan-bbg` (gasku-07, Aug); this-month siblings gasku-01/02
- Subtopic overlap (Jaccard estimate): ~0.22 (per brief) — prior = vehicle eligibility; this = kit + workshop selection
- Verdict: distinct angle confirmed

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `gasku-03.id.quality-input.json` written
- [x] AI-detector score < 0.30 — 0.04 (verdict: pass)
- [x] Paragraph burstiness CV ≥ 0.30 — 0.416 (one low-severity flag vs soft 0.45 target; acceptable)
- [x] Plagiarism: distinctive passages web-checked (editorial "harga termurah…keputusan paling mahal" framing; venturi/sequential mechanism); regulatory sentences echo official Permenperin/PM 39 text (cited-authority exception); no non-Gagas verbatim ≥20 words — plagiarism score 0.05
