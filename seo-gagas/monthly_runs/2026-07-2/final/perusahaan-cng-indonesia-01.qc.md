---
brief_id: "perusahaan-cng-indonesia-01"
editor_run_date: "2026-07-08"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — TCO Beralih ke Penyedia CNG: Hitung Biaya Total, Bukan Harga Gas

## Recommendation
**approve**

The article delivers exactly what the brief specified: an honest TCO worked-framework for choosing a CNG provider, splitting capex from opex, and estimating payback with real 2026 industrial-gas prices — an angle no part-1 cluster article covers (part-1 05 only names "TCO" as one bullet in a mistakes listicle). Every load-bearing hedge is intact and exact: gas prices labeled "per 29 Juni 2026, indikatif"; HGBT US$6,5–7, gas pipa US$9,6, LNG US$13 (manufaktur-only); HSD labeled "periode 1–14 Juni 2026"; the "68%" KADIN/vendor claim paired with the 10–30% (Kontan) and ~40% (ESDM/Liputan6) ranges; retrofit/PRS capex kept qualitative; no "pionir/pemimpin pasar". The anti-AI scan is clean, PGN Gagas framing is correct (distributor/penyalur, not producer; 2 self-mentions), and both key gas-price facts were independently reconfirmed via ESDM/CNBC/Kontan. Originality passes decisively (AI-detector 0.04; no verbatim non-Gagas prose lift). Three small in-place fixes applied (hyperlinked the two authoritative citations that were previously text-only, trimmed one em-dash, added a `date_modified` freshness field). Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Clean scan; varied rhythm; honest hedging; sentence burstiness 0.765. |
| Factual & energi-gas / CNG accuracy | 9 | 5/5 spot-checks pass; LNG US$13 & HGBT US$6,5–7 reconfirmed live vs ESDM/CNBC/Kontan. |
| On-page SEO compliance | 9 | Meta title 53, desc 145, slug 37; keyword placement correct; 3 internal + 2 external links. |
| GEO extractability (§2a) | 9 | 40–60w answer after each H2; one quotable point/paragraph; FAQPage-ready; `date_modified` added. |
| PGN Gagas framing discipline | 10 | 2 self-mentions; provider/distributor framing; no superlatives; positioning line + soft CTA. |
| Internal linking | 9 | Hub in lead, 2 cousins (Gaslink, LNG) placed where topic connects. |
| FAQ quality | 9 | 6 Q&As, each 40–80w, self-contained, each carries a number. |
| Originality (plagiarism + AI-detector) | 9 | ai 0.04, plagiarism ~0.05; overlaps are common public figures, correctly attributed. |

## What I fixed (changelog)
- Hyperlinked the LNG US$13 claim inline to Kontan (was named as plain text "Kontan, 29–30 Juni 2026"), satisfying the ≥1 authoritative outbound link requirement and matching sibling `-02`'s citation style.
- Hyperlinked the HGBT US$6,5–7/MMBTU bullet inline to Kementerian ESDM (skema baru HGBT), giving a second authoritative outbound citation.
- Reduced body em-dash count from 3 → 2: split the Gaslink-scale sentence ("...(Katadata) — indikasi bahwa..." → two sentences).
- Added `date_modified: "2026-07-08"` to the frontmatter for GEO freshness (§2a), matching sibling `-02`.
- Updated frontmatter `word_count` to the accurate final count (1563 per `count_words.py`).

## What I flagged (open issues)
- ⚠️ **Data recency of gas/solar prices** — the HGBT/gas-pipa/LNG figures are labeled "per 29 Juni 2026, indikatif" and HSD "periode 1–14 Juni 2026", which is correct and honest; but these move every ~2 weeks (HSD) or by policy (LNG). *Recommendation*: no action needed for publish; flag for the maintenance workstream to refresh the price block + `date_modified` if the page is still live in Q4 2026. The article already tells the reader to check ESDM/Pertamina Patra Niaga for current figures, so it will not read as stale.
- ⚠️ **`company_profile.md` vs 2025 Gaslink data** — the article cites Gaslink at "600 pelanggan, 10,85 BBTUD per September 2025 (Katadata)", which exceeds the profile's late-2021 snapshot. It is correctly time-stamped and independently sourced, so it is safe to ship. *Recommendation*: separately consider updating `company_profile.md` so the knowledge base and articles stay in sync (not a blocker for this article).

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep clean
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep clean (not used at all)
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep clean
- [x] "Dengan demikian" not overused — not present
- [x] Em-dash count ≤2 — 2 (was 3; reduced in-place)
- [x] Varied paragraph lengths — mixes 2–5 sentence paragraphs with 1-line list lead-ins; sentence CV 0.765
- [x] Not every H2 → 3-bullet list — H2 #1/#3 lead with prose; #2 uses a table; #4 numbered list; #5 bullets
- [x] No generic claims without numbers — 6+ specific figures (US$6,5–7/9,6/13; Rp25.850–26.200; 10–30%; ~40%; 68%; 600 pelanggan/10,85 BBTUD)
- [x] No stacked hype adjectives — grep clean (canggih/powerful/seamless/terdepan absent)
- [x] No service-dump paragraph — single anchored Gaslink mention + closing

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| HGBT US$6,5 (bahan baku) / US$7 (bahan bakar), 7 sektor / 253 pengguna, Kepmen 76.K/2025 | dossier ✓ + ESDM esdm.go.id (reconfirmed live) | pass |
| LNG non-HGBT dipangkas US$20–23 → US$13/MMBTU per 29 Jun 2026, manufaktur only | dossier ✓ + CNBC/detikFinance/Kontan (reconfirmed live) | pass |
| Gas pipa non-HGBT rata-rata ~US$9,6/MMBTU (tetap) | dossier ✓ (Kontan/CNBC cross-confirmed) | pass |
| HSD industri periode 1–14 Jun 2026 Rp25.850 (Area 1) – Rp26.200 (Area 4) | dossier ✓ + aggregator sources (reconfirmed live, values match) | pass |
| Penghematan 10–30% (Kontan) vs ~40% (ESDM/Liputan6) vs "68%" (KADIN/vendor) | dossier ✓ + Liputan6/CNBC/Kompas (reconfirmed live) | pass |
| Retrofit/PRS capex — no authoritative Rupiah figure (qualitative only) | dossier flag ✓ (article gives no Rp figure) | pass |
| PGN Gagas = distributor CNG beyond-pipeline, anak usaha PGN/Subholding Gas Pertamina | product_matrix ✓ + company_profile ✓ | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 53 / "Perusahaan CNG Indonesia" at char 0
- [x] Meta description 140–160 — actual: 145
- [x] Slug ≤60, kebab-case, keyword — actual: `tco-penyedia-perusahaan-cng-indonesia` (37)
- [x] H1 contains keyword — "Penyedia CNG" variant present; primary keyword in meta/lead/H1-context
- [x] H2 count 4–5 — actual: 5 body H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 ("Berapa Lama Payback Beralih ke CNG?"); ≥1 honest/counter H2 ("Kapan TCO Justru Belum Berpihak pada CNG")
- [x] Keyword in first 100 words — "perusahaan CNG Indonesia" inline anchor in sentence 3 of lead
- [x] Definition snippet near top — 40–60w "Ringkas:" blockquote after lead
- [x] ≥8 LSI terms — TCO, capex, opex, MMBTU, HGBT, GTM, PRS, Mother Station, HSD, payback, beyond-pipeline (11)
- [x] 3 internal links — hub `perusahaan-cng-indonesia` (lead) + `gaslink` + `perusahaan-lng-indonesia`
- [x] ≥1 external authoritative citation — actual: 2 inline (ESDM + Kontan) after fix
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 3 ({IMAGE_01/02/03}, all retained)
- [x] ≥1 list + ≥1 table — 1 numbered list + 1 bullet list + 2 tables
- [x] Word count 1,200–1,600 — actual: 1,563 (count_words.py)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — present under all 5 body H2s
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-07-08` present in the meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/distributor ("menyalurkan gas bumi... solusi CNG beyond-pipeline"), NOT producer
- [x] ≤3 self-mentions — actual: 2 ("PGN Gagas") — mid-body Gaslink aside + closing positioning line
- [x] No unverifiable superlatives — no "terbaik/nomor satu/pionir/pemimpin pasar/terbesar"
- [x] Product names + specs match product_matrix/dossier — Gaslink, GTM, Mother Station, PRS all accurate
- [x] Closing uses a company_profile positioning line — "anak usaha PGN / Subholding Gas Pertamina"
- [x] Soft website CTA present as FINAL line, after conclusion — "...kunjungi gagas.co.id." (consultative)
- [x] Hub link is a natural inline anchor in the lead — not a "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `kesalahan-memilih-perusahaan-cng-indonesia` (part-1 05); nearest same-batch sibling: `perusahaan-cng-indonesia-02` (harga/kontrak, minimum offtake).
- Subtopic overlap (Jaccard estimate): ~0.15 vs part-1 05 (only the "TCO" concept is shared; components, 2026 prices, capex/opex, payback all new). vs sibling -02: complementary — -02 covers pricing/contract mechanics (minimum offtake, take-or-pay, formula), this covers TCO cost structure + payback; they share only the 2026 gas-price context as background.
- Verdict: distinct angle confirmed — no re-spin needed.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran clean; `perusahaan-cng-indonesia-01.id.quality-input.json` written (no error)
- [x] AI-detector score < 0.30 — actual: 0.04 (verdict: pass). Only flag: low-severity paragraph-CV 0.396 (above the 0.30 strong-tell floor; the table/list-heavy structure legitimately compresses paragraph length variance). Sentence burstiness 0.765, vocab top-30 share 0.299 — healthy.
- [x] Paragraph burstiness CV — 0.396 (≥0.30 floor met; below script's 0.45 aspirational target, not actionable)
- [x] Plagiarism: 8 distinctive passages web-checked (HSD prices, 2026 gas-price block, lead, Gaslink/Katadata line, savings-range line). No verbatim non-Gagas prose hit ≥20 words. Overlaps are common public figures (industrial-diesel price schedule; HGBT/LNG policy prices; 10–30%/~40% savings) that appear across many outlets and are correctly attributed and hedged — acceptable per §9. Plagiarism score: ~0.05 → pass.
