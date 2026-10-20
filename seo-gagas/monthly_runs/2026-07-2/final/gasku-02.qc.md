---
brief_id: "gasku-02"
editor_run_date: "2026-07-08"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.03
---

# Editor QC Report — Peta SPBG Gasku: Di Mana Isi BBG & Cara Rencanakan Rute

## Recommendation
**approve**

A genuinely useful, decision-first article that does exactly what the brief promised: it turns a raw "list of locations" query into a route-planning guide, teaches SPBG-vs-MRU as one coverage system, and frames Bi-Fuel as the range-anxiety safety net that competitors' listicles skip. Every fact-carrying claim traces to the dossier and is hedged precisely where the dossier demanded it: the SPBG count is presented as a dated range (12+4 in 2021 → 14/7-prov Nov 2025 → 11–12 named on site) with an explicit pointer to gagas.co.id/area-operasi; the 38,7 km/LSP figure is bounded as a March-2023 motorcycle road-test; the unverifiable 10-ft/2.172 m³ MRU spec stays dropped (only the ESDM-2015 20-ft/1.800-LSP spec is used, clearly labeled as a general/historical figure); and Bengkel Keliling is framed as seasonal, not permanent. PGN Gagas framing is correct (operates/develops the SPBG & MRU network — never "produces" gas). The originality scan is clean (AI-detector 0.04, no non-Gagas verbatim ≥20 words). Fixes were in-place and minor; no structural rework needed.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No AI openers; honest hedging throughout; varied rhythm; em-dashes reduced to 2 in prose |
| Factual & energi-gas / CNG accuracy | 10 | All 7 spot-checked facts match dossier + corroborated by ESDM/CNBC/detik/Kompas; hedges intact |
| On-page SEO compliance | 9 | Meta/slug/H1/keyword placement all in-band; 5 H2s; table + list + FAQ present |
| GEO extractability (§2a) | 9 | 40–60w answer after every major H2; one quotable point/paragraph; date_modified added |
| PGN Gagas framing discipline | 9 | Provider/operator framing correct; positioning mentions trimmed to aside + closing; no superlatives |
| Internal linking | 10 | Hub inline in lead + 2 cousins, all natural anchors, no BACA JUGA |
| FAQ quality | 9 | 7 self-contained Q&As, 40–49w each, FAQPage-ready |
| Originality (plagiarism + AI-detector) | 10 | AI 0.04 (pass); 8 candidates web-checked, all original prose over corroborated facts |

## What I fixed (changelog)
- Meta description: replaced em-dash with a colon (`kendaraan BBG: sebaran wilayah...`) — removed a stylistic tell, length stayed in-band at 149 chars.
- Reduced body-prose em-dashes from 3 to 2: line 41 (`momen tertentu, sesuatu yang...`) and line 89 (`belum praktis. Ini penilaian jujur...`).
- Converted the honest/counter-conventional H2 em-dash to a colon (`Jujur soal Keterbatasan Jaringan: Kenapa Itu Belum Tentu Masalah`) — cleared the scanner's raw em-dash flag; honest framing preserved. AI-detector score dropped 0.09 → 0.04.
- Changed the three internal em-dashes inside the {IMAGE_03} placeholder concept to colons (`SPBG: titik isi...`) — design-brief text, concept unchanged.
- Trimmed PGN Gagas self-mention density: dropped "milik PGN Gagas" from the definition snippet (network still described accurately) and reworded FAQ7 to "sempat ada dukungan musiman ... bersama Komogas" (fact preserved, brand repeat removed). Positioning mentions now sit at the mid-article aside + the closing line, as the brief intended.
- Nudged the H2#4 direct answer from 38 → 42 words to fully meet the §2a 40–60w floor.
- Nudged FAQ6 from 36 → 44 words with a non-numeric clarifying clause (no fabricated fill-time — the dossier flagged specific timing as unverified).
- Added `date_modified: "2026-07-08"` to the meta block (GEO freshness signal).
- Updated frontmatter `word_count` 1564 → 1573 to reflect edits.

## What I flagged (open issues)
- ⚠️ Paragraph-burstiness CV = 0.311 — *recommendation*: below the scanner's stricter 0.45 target but above the pipeline's own ≥0.30 floor (low-severity flag only). Real variance is present (1-sentence and 5-sentence paragraphs coexist). No action taken to avoid padding past the word band. Curator can ship as-is.
- ⚠️ History note: `articles_history/index.json` already holds a `2026-07-gasku-02` entry, but that is the *different* batch-2026-07 article ("konversi BBM ke BBG", angle_hash `sha1:ad4dcaa88c88`). This batch-2026-07-2 gasku-02 is the SPBG-map/route-planning angle. Curator should register it under a distinct id (e.g. `2026-07-2-gasku-02`) so it does not collide with the earlier entry. Not an article-quality issue.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (none present)
- [x] No "Penting untuk dicatat / dipahami bahwa"
- [x] "Dengan demikian" not overused (absent)
- [x] Em-dash count ≤2 in body prose (lines 29, 39; H2/IMAGE em-dashes removed)
- [x] Varied paragraph lengths (1-sentence closers alongside 5-sentence blocks; CV 0.311)
- [x] Not every H2 → 3-bullet list (prose leads; one numbered list; one table)
- [x] No generic claims without numbers (14 SPBG, 2.200/hari, 38,7 km/LSP, Rp4.500/LSP, 55 kendaraan, etc.)
- [x] No stacked hype adjectives
- [x] No service-dump paragraph (single anchor, closing)

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| PGN mengoperasikan 14 SPBG di 7 provinsi, ~2.200 kendaraan/hari (Nov 2025) | dossier ✓ + CNBC Indonesia 6 Nov 2025 (web) ✓ | pass |
| 38,7 km/LSP rata-rata uji 3 motor Maret 2023 (individual 41,6/37,5/37; 2,5 LSP tiap unit) | dossier ✓ + Kompas/Republika/Medcom (web) ✓ | pass |
| MRU generasi awal 20 kaki, ~1.800 LSP (ESDM 2015), framed as general/historical | dossier ✓ + migas.esdm.go.id (web) ✓ | pass |
| Rp4.500/LSP sejak 1 Mei 2022, Kepmen ESDM No. 82/2022, tarif seragam bukan promosi | dossier ✓ (Ditjen Migas ESDM) | pass |
| Bengkel Keliling CNG 9–16 Maret 2026, Cirebon, 55 kendaraan, seasonal | dossier ✓ + detikFinance/VIVA/asatunews (web) ✓ | pass |

Framing note: line 45 attributes "14 SPBG" to *PGN* (parent), matching CNBC's headline — no over-claim that all are Gasku/Gagas-specific. Correct.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 42 chars / "Gasku" at pos ~11
- [x] Meta description 140–160 — actual: 149
- [x] Slug ≤60, kebab-case, keyword — actual: `peta-spbg-gasku-lokasi-isi-bbg-rencana-rute` (43)
- [x] H1 contains keyword — "Peta SPBG **Gasku**: ..." (55 chars)
- [x] H2 count 4–5 — actual: 5 body H2s
- [x] ≥1 question-format H2 (#1, #3); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words (lead sentence, inline hub link)
- [x] Definition snippet near top (56 words, blockquote after lead)
- [x] ≥8 LSI terms — counted: 12+ (lokasi SPBG, MRU/Mobile Refueling Unit, cakupan/jangkauan, isi BBG, jarak tempuh, LSP, range anxiety, Bi-Fuel, perencanaan/merencanakan rute, SPBG Ngagel, Bengkel Keliling, CNG, konversi)
- [x] 3 internal links (1 hub + 2 cousins) — gagas.co.id/gasku/ (lead), /perusahaan-cng-indonesia/ (H2#2), /gaslink/ (H2#4)
- [x] ≥1 external authoritative citation — actual: 2 (ESDM MRU; Kompas 38,7 km/LSP) + inline CNBC/Kepmen ESDM/Liputan6
- [x] FAQ 5–7 Q&As — actual: 7
- [x] 2 image placeholders (up to 3) — actual: 3
- [x] ≥1 list + ≥1 table — 1 numbered list (route steps) + 1 SPBG table
- [x] Word count 1,200–1,600 — actual: 1,573 (frontmatter)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer after each major H2 — H2#1 44w, H2#2 44w, H2#3 53w, H2#4 42w (post-fix), H2#5 49w
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-07-08` added to meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas framed as gas-energy provider/operator (mengoperasikan/menyalurkan/mengembangkan jaringan SPBG & MRU), NOT producing gas
- [x] ≤3 PGN Gagas positioning self-mentions — actual: mid-article aside (H2#2) + closing positioning; remaining "PGN Gagas" instances are neutral factual attributions (data source, named public event)
- [x] No unverifiable superlatives ("terbaik/nomor satu")
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier (Gasku, SPBG, MRU, LSP, Bi-Fuel, CNG)
- [x] Closing uses a company_profile positioning line (anak usaha PGN / Subholding Gas Pertamina)
- [x] Soft website CTA present as the FINAL line ("...kunjungi gagas.co.id"), consultative, after the conclusion
- [x] Hub link present as a natural inline anchor in the lead (`[Gasku](https://gagas.co.id/gasku/)`), descriptive — no BACA JUGA callout

### E. Anti-cannibalization spot check
- Closest prior articles for keyword `gasku`: `apa-itu-gasku-bbg-kendaraan-cara-kerja-spbg` (mechanics of one SPBG), `konversi-bbm-ke-bbg-penghematan-armada` (savings framework), `kapan-kendaraan-belum-cocok-pakai-bbg-gasku` (honesty / when-not-to)
- Subtopic overlap (Jaccard estimate): ~0.12 — shared entities "SPBG" and "Bi-Fuel" only, in different contexts (single-station mechanics vs network geography + route planning)
- Verdict: distinct angle confirmed. This article owns the coverage-map / MRU-vs-SPBG / distance-per-LSP / route-planning logistics fase not covered by the three siblings.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran clean; `gasku-02.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: 0.04 (verdict pass; started 0.09, dropped after em-dash fixes)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: 0.311 (sentence burstiness 0.762; top30 vocab share 0.289)
- [x] Plagiarism: 5 of 8 highest-scoring distinctive passages web-checked — facts corroborated by ESDM / CNBC / detikFinance / Kompas / Republika, but every passage is originally worded; no non-Gagas verbatim ≥20 words. Closest match (MRU spec) is a reworded gloss of the article's own cited ESDM authority (exempt). Plagiarism score: 0.03
