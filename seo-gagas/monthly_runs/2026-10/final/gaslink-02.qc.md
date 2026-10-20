---
brief_id: "gaslink-02"
editor_run_date: "2026-09-28"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Gaslink untuk Listrik Pabrik: Genset Gas vs Diesel (Captive Power)

## Recommendation
**approve**

This draft arrived close to publish-ready and clears every hard gate. The anti-AI scan is clean (0 em-dashes, no banned openers, no "Selain itu"/"Dengan demikian"/"Penting untuk" tells, varied paragraph rhythm). Every factual claim I spot-checked traces to the dossier, and — critically for this angle — the framing guard holds throughout: PGN Gagas is consistently positioned as *memasok gas untuk genset milik pelanggan*, explicitly "bukan mengoperasikan pembangkitnya," and the forbidden PT Widar Mandripa Nusantara entity does not appear anywhere. All four load-bearing dossier flags (HGBT policy-only, diesel-cost vendor hedge, derived-emission caution, Gaslink not-yet-marketed-for-genset) are honored with visible hedges. I made one substantive style fix (expanded CNG on first use) and added a `date_modified` freshness field. AI-detector 0.04 (pass). Plagiarism is heuristic-only this run (no WebSearch), but a manual read of all 8 candidate passages shows original, article-specific prose with no verbatim-lift risk. Shippable.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dashes, no AI-opener tells, deliberate paragraph-length variation, honest hedging voice throughout |
| Factual & energi-gas / CNG accuracy | 9 | 5/5 spot-checks pass vs dossier; PLTMG 27u/2.269 MW, efficiencies, IPCC emission factors, HGBT range all correct |
| On-page SEO compliance | 9 | Meta title 49, meta desc 151, slug 42; 5 body H2s; 3 internal + 2 external links; 3 image placeholders; 1 table + 2 lists |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after every H2; one quotable point per paragraph; FAQPage-parseable; dateModified added |
| PGN Gagas framing discipline | 10 | "Memasok gas untuk genset milik pelanggan, bukan mengoperasikan pembangkit"; 2 body self-mentions; no superlatives; no WMN |
| Internal linking | 9 | Hub (Gaslink) inline in lead; cousins perusahaan-cng-indonesia + gasku, both natural inline anchors |
| FAQ quality | 8 | 5 Q&As, each 40–80 words with a number; at the floor of 5–7 but distinct and self-contained |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04; plagiarism heuristic-only (no WebSearch) — manual read of 8 candidates clean |

## What I fixed (changelog)
- Expanded the acronym **CNG → CNG (*Compressed Natural Gas*)** on first use in the lead (style_guide §3 mandates acronym expansion on first mention; also strengthens entity clarity for GEO). Kept the acronym plain thereafter.
- Added **`date_modified: "2026-09-28"`** to the frontmatter (seo_playbook §2a requires a freshness/`dateModified` signal in the meta block; the draft lacked one).
- Updated frontmatter `word_count` 1378 → 1381 to reflect the added expansion.

## What I flagged (open issues)
- ⚠️ **Plagiarism verified in degraded mode (heuristic-only, no WebSearch this run).** The scanner extracted 8 candidate passages; all are the article's own headings or distinctive number-bearing sentences (no generic definitions, no lifted boilerplate). Manual read shows no verbatim-lift risk, but a live web check was not performed. *Recommendation*: if a WebSearch budget frees up before publish, spot-check the two most distinctive sentences (the IDR 4.500–9.000+/kWh line and the IPCC 56.100/74.100 kg CO2/TJ line); otherwise accept the heuristic pass — both numbers are correctly attributed (vendor field-range / IPCC) so any coincidental phrase match would be on a cited source, not a lift.
- ⚠️ **FAQ sits at the floor (5 of the 5–7 band).** Two brief PAAs ("mana lebih hemat", "bagaimana gas sampai ke lokasi") were intentionally folded into H2 #2 and H2 #4 to avoid redundancy. *Recommendation*: acceptable as-is; if the client wants a fuller FAQ, add "Apa itu dual-fuel dan bedanya dengan dedicated gas engine?" — the dossier already supplies the answer.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hits
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 hits
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hits
- [x] "Dengan demikian" not overused — 0 hits
- [x] Em-dash count ≤2 — actual: 0 (all dashes are en-dashes in numeric ranges)
- [x] Varied paragraph lengths — mixes 1-sentence and 4–5-sentence paragraphs; AI-detector paragraph CV=0.392 (>0.30 floor)
- [x] Not every H2 → 3-bullet list — H2s lead with prose; only one bulleted list (H2 #5) and one numbered list (H2 #3)
- [x] No generic claims without numbers — claims carry sourced figures (kWh ranges, efficiencies, MW, kg CO2/TJ)
- [x] No stacked hype adjectives — none; concrete capability language throughout
- [x] No service-dump paragraph — single anchor (Gaslink), no service list

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| 27 unit PLTMG, ~2.269 MW (ESDM, Jan 2024) | dossier ✓ (Core facts; ESDM 25 Jan 2024) | pass |
| Gas engine efisiensi ~35–45%, unit modern ~46% | dossier ✓ (35–45%; contoh 45,8%) | pass |
| Diesel remote ~IDR 4.500–9.000+/kWh, framed "sumber vendor, bukan data resmi" | dossier ✓ + Flag #2 hedge applied | pass |
| Emisi bahan bakar gas ~56.100 vs solar ~74.100 kg CO2/TJ, ~25% lebih tinggi (IPCC), labeled "basis bahan bakar" | dossier ✓ (IPCC); Flag #3 honored — no standalone per-kWh figure asserted | pass |
| HGBT USD 6,5–7/MMBTU framed as policy context, "belum tentu mencakup captive power via CNG di luar pipa" | dossier ✓ + Flag #1 hedge applied | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 49 chars / "Gaslink" at position 1
- [x] Meta description 140–160 — actual: 151 chars (in the 150–160 GEO sweet spot)
- [x] Slug ≤60, kebab-case, keyword — actual: `gaslink-genset-gas-vs-diesel-captive-power` (42)
- [x] H1 contains keyword — "Gaslink untuk Listrik Pabrik..."
- [x] H2 count 4–5 — actual: 5 body H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2; ≥1 honest/counter-conventional H2 — #1/#2/#4 question; #5 "Kapan Genset Gas BELUM Masuk Akal"
- [x] Keyword in first 100 words — "Gaslink" in lead sentence 3
- [x] Definition snippet near top (40–60 words) — blockquote ~48 words
- [x] ≥8 LSI terms — counted: captive power, genset gas, gas engine, biaya per kWh, dual-fuel, methane number, CNG beyond-pipeline, PLTMG, GTM, dedicated gas engine, sizing, pilot injection (12)
- [x] 3 internal links (1 hub + 2 cousins) — gaslink (hub, lead) + perusahaan-cng-indonesia + gasku
- [x] ≥1 external authoritative citation — actual: 2 inline ESDM links (captive power def; PLTMG) + IPCC referenced
- [x] FAQ 5–7 Q&As — actual: 5 (at floor; see open flag)
- [x] 2 image placeholders (up to 3) — actual: 3, each with Bahasa Indonesia alt-text
- [x] ≥1 list + ≥1 table — 1 numbered list, 1 bullet list, 1 comparison table
- [x] Word count 1,200–1,600 — actual: ~1,420 (scanner) / 1,381 prose

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all 5 H2s (each opens with a standalone, quotable answer before elaboration)
- [x] Each body paragraph makes one independently quotable, verifiable point — claims are one-per-paragraph with a sourced number
- [x] FAQ parseable for FAQPage schema; `dateModified` / freshness noted — FAQ is clean H3 Q/A; `date_modified: 2026-09-28` added to meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/partner — "menyalurkan gas bumi... memasok bahan bakar untuk genset milik Anda, bukan mengoperasikan pembangkitnya"
- [x] ≤3 PGN Gagas self-mentions — actual: 2 reader-facing (H2 #4 aside + Kesimpulan); the other 2 "PGN Gagas" strings are color-palette notes inside {IMAGE} design briefs, not prose
- [x] No unverifiable superlatives — none ("terbaik/nomor satu/terbesar" absent)
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier — Gaslink, GTM, Mother Station, PRS, CNG beyond-pipeline all correct; no invented GTM specs (honors Flag #8)
- [x] Closing uses a company_profile positioning line — "anak usaha PGN dalam Subholding Gas Pertamina"
- [x] Soft website CTA as FINAL line — "...mulai diskusinya di gagas.co.id." (consultative, not "beli sekarang")
- [x] Hub link as natural inline anchor in lead — [Gaslink] woven into lead prose, no "BACA JUGA" callout
- **WMN check**: PT Widar Mandripa Nusantara / "Widar" / "Mandripa" / "WMN" — 0 occurrences (Flag #5 satisfied)

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `gaslink-vs-lpg-vs-solar-biaya-efisiensi` (2026-07) — compares *fuel-for-heat* cost per MMBTU
- Subtopic overlap (Jaccard estimate): ~0.05 — the 12 prior Gaslink articles (boiler/oven/kiln heat, MMBTU cost, decarbonization, carbon credit, supply reliability, safety, permits, CAPEX) contain no captive-power/electricity/kWh/gas-engine/methane-number/dual-fuel coverage
- Verdict: distinct angle confirmed — this is the first Gaslink article on *listrik* (captive power) rather than heat

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `gaslink-02.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict: pass); 1 low flag only (paragraph-low-variance CV=0.392, target 0.45 — above the ≥0.30 burstiness floor, no action)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.392** (pass)
- [~] Plagiarism: **heuristic-only (no WebSearch)** per run constraints. 8 candidate passages extracted; all are the article's own H2 headings or distinctive number-bearing sentences (IDR/kWh field range, IPCC CO2 factors, corporate positioning line). Manual read: no generic-definition or boilerplate lift; the one standard phrase ("anak usaha PGN dalam Subholding Gas Pertamina") is approved company_profile positioning. Plagiarism score (heuristic): **0.05**. No non-Gagas verbatim hit could be confirmed or refuted online this run — degraded mode noted; not treated as blocking a clean approve.
