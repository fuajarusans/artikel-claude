---
brief_id: "gasku-01"
editor_run_date: "2026-06-09"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Apa Itu Gasku: BBG untuk Kendaraan & Cara Kerja SPBG

## Recommendation
**approve**

This is a clean, benchmark-calibrated cornerstone explainer. The anti-AI scan passes outright (no banned openers, one body em-dash, no "Selain itu" runs, deliberately varied paragraph rhythm). Every protected dossier fact is preserved exactly as flagged: "14 SPBG di 7 provinsi (Nov 2025)" with no fabricated province list and no "19 titik", Gasku specs attributed to gagas.co.id with the June 2026 access date, the autoignition pairing kept with `~` hedging, and the BBM→BBG conversion framed as a government-led program (PM 39/2012) rather than a Gagas program — no 2012 targets cited as current. PGN Gagas is framed correctly throughout as a distributor/penyalur (anak usaha PGN), never a producer, with no superlatives. GEO extractability holds: every major H2 leads with a standalone, quotable answer. Fixes applied were minor and net-neutral on length (meta description nudged into the 140–160 band; the thin counter-conventional H2 opener firmed up for GEO; two flabby phrases tightened to offset). The article would stand up to a skeptical fleet owner and a gas practitioner. Ship it.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Clean scan; varied rhythm; "yang paling menenangkan", "menang telak", "beda zat, beda tabung" read human. |
| Factual & energi-gas / CNG accuracy | 9 | All 5 spot-checked claims verified; protected facts intact with attribution + dates. |
| On-page SEO compliance | 9 | All checklist items pass; meta description fixed into band. |
| GEO extractability (§2a) | 9 | 40–60-word answer after each H2; one quotable point per paragraph; FAQPage-ready. |
| PGN Gagas framing discipline | 9 | Distributor framing correct; no superlatives; positioning line + soft CTA present. |
| Internal linking | 10 | 3 distinct inline anchors (/gasku/ lead, /perusahaan-cng-indonesia/, /gaslink/); no BACA JUGA. |
| FAQ quality | 9 | 6 Q&As, each 40–80 words, self-contained, with a number/fact. |
| Image-brief completeness | 9 | JSON parses; 3 entries match 3 placeholders; full Bahasa Indonesia metadata; real-photo note surfaced. |

## What I fixed (changelog)
- Extended meta description from 137 → ~148 chars ("cara kerja Bi-Fuel & SPBG" → "cara kerja sistem Bi-Fuel & jaringan SPBG") to land inside the 140–160 band (was just under the floor).
- Firmed the counter-conventional H2 opener ("Hal yang Sering Disalahpahami...") from ~30 words to ~38 words so it works as a standalone 40–60-word GEO answer naming all three myths plus the "diluruskan dengan fakta teknis" payoff — the only major H2 whose opener was below the GEO floor.
- Tightened two phrases to keep the edit net-neutral on length: "ilustrasi per periodenya, bukan janji yang berlaku selamanya" → "ilustrasi per periode, bukan harga tetap"; "dari rute harian" → "dari rute Anda".
- Updated frontmatter `word_count` 1557 → 1561 to reflect the net change honestly.

## What I flagged (open issues)
- ⚠️ Brand self-mentions: "PGN Gagas" / "PT Gagas Energi Indonesia" appears 5× total (definition snippet, mid-article aside, 2 FAQ answers, conclusion). The two *promotional* placements (definition aside + closing) are within the ≤3 budget; the FAQ instances are unavoidable factual attributions ("dioperasikan PGN Gagas") and mirror the approved gaslink-01 benchmark. *Recommendation*: leave as-is — trimming the FAQ attributions would make the answers vaguer for no editorial gain. Watch-item only, not a blocker.
- ⚠️ Kemenhub citation is named in body (Permenhub No. PM 39/2012) but only hyperlinked in the frontmatter `external_citations`, not as an inline anchor; ESDM is the one inline-attributed external source. *Recommendation*: acceptable (matches benchmark; ESDM inline attribution satisfies the ≥1 external-citation rule), but if the CMS supports it, the design/SEO team may hyperlink "Peraturan Menteri Perhubungan No. PM 39/2012" to dephub.go.id on publish.
- ⚠️ Autoignition point values (~540°C / ~360°C): cross-references vary (CNG 540–600°C; bensin 315–440°C). The `~` prefix correctly signals approximation and the pairing sits within cited ranges; no change needed. Surfaced for transparency.
- ⚠️ Comparison-table prices (Pertamax Rp12.750, Des 2025) are dated and dynamic. *Recommendation*: editorial team should re-verify BBM prices immediately before publish, per dossier FLAG #5 — the article already frames them as "ilustrasi per periode" with dates, so it is safe to ship as-is.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep clean
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — zero occurrences
- [x] No "Penting untuk dicatat / dipahami bahwa" — zero
- [x] "Dengan demikian" not overused — zero
- [x] Em-dash count ≤2 — 1 in body prose (definition snippet, line 41); the 2 others are inside `{IMAGE_NN}` design briefs, not published prose
- [x] Varied paragraph lengths — mixes 1-sentence ("Langkah terakhir yang paling menenangkan.", "Tidak.") with 4–6-sentence blocks
- [x] Not every H2 → 3-bullet list — H2 #1 prose, #2 glossary bullets, #3 numbered steps, #4 table, #5 bolded myth-busters
- [x] No generic claims without numbers — RON >120, ~200 bar, Rp4.500/LSP, 25–35%, 540/360°C, 14 SPBG/7 prov, 2.200/hari, 68,2% all present
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — none
- [x] No service-dump paragraph — single Gasku anchor; no Gaslink/CNG/LNG dump

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Gasku Rp4.500/LSP (gagas.co.id, Juni 2026) | dossier Claim 2 ✓ (attributed + dated, as flagged) | pass |
| RON >120 vs Pertamax 92 | dossier Claim 3 ✓; product_matrix ✓ | pass |
| 14 SPBG di 7 provinsi, ~2.200 kendaraan/hari (CNBC, 6 Nov 2025) | dossier Claim 7 ✓ (2 independent sources); no province list fabricated; no "19 titik" | pass |
| Autoignition CNG ~540°C vs bensin ~360°C | dossier Claim 9 ✓ + WebSearch (McKenzie, Automotive Fleet, PCNGI, IspatGuru) — directional claim robust; `~` hedge appropriate | pass |
| Pemanfaatan domestik gas bumi 68,2% (2023), transportasi porsi kecil | dossier Claims 13–14 ✓ (Kementerian ESDM, Jan 2024) | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 50 chars / "Gasku" at char 9
- [x] Meta description 140–160 — actual: ~148 (fixed from 137)
- [x] Slug ≤60, kebab-case, keyword — actual: `apa-itu-gasku-bbg-kendaraan-cara-kerja-spbg` (43 chars)
- [x] H1 contains keyword — "Apa Itu Gasku: BBG untuk Kendaraan & Cara Kerja SPBG"
- [x] H2 count 4–5 — actual: 5 (excl. FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#3) ; ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — "Gasku" in sentence 2 of lead (line 39) + definition snippet
- [x] Definition snippet near top (40–60 words) — blockquote line 41, ~52 words
- [x] ≥8 LSI terms — counted: 12+ (BBG, CNG, SPBG, LSP, Converter Kit, Bi-Fuel, RON, autoignition, ISO 11439, ECE R110, Mother/cascade, metana, BBM, Pertamax/Pertalite)
- [x] 3 internal links (1 hub + 2 cousins) — /gasku/ (lead), /gaslink/ (H2 #5), /perusahaan-cng-indonesia/ (H2 #2)
- [x] ≥1 external authoritative citation — Kementerian ESDM (inline, line 95) + Permenhub PM 39/2012 named; frontmatter lists ESDM + dephub
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 3
- [x] ≥1 list + ≥1 table — numbered list (7-step flow) + bullet glossary + 1 comparison table
- [x] Word count 1,200–1,600 — actual: ~1,561

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — H2 #1 ~50w, #2 ~37w, #3 ~48w, #4 ~44w, #5 ~38w (firmed); all standalone-quotable
- [x] Each body paragraph makes one independently quotable, verifiable point — yes; one claim + sourced fact per paragraph
- [x] FAQ parseable for FAQPage schema; `dateModified` present — `date_modified: 2026-06-09` in meta block; 6 clean Q/A pairs

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy distributor/penyalur ("menyalurkan BBG transportasi", "anak usaha PGN") — NOT producer
- [~] ≤3 PGN Gagas self-mentions — 2 promotional (definition aside + closing) within budget; +3 unavoidable factual FAQ/snippet attributions (matches benchmark) — see flag
- [x] No unverifiable superlatives ("terbaik/nomor satu") — none
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier — Gasku, BBG, CNG, SPBG, LSP, Bi-Fuel, Converter Kit all correct
- [x] Closing uses a company_profile.md positioning line — "Sebagai anak usaha PGN, PGN Gagas menyalurkan BBG transportasi lewat jaringan SPBG sendiri"
- [x] Soft website CTA present as the FINAL line, after the conclusion — line 133, "...kunjungi gagas.co.id" (consultative, not "beli sekarang")
- [x] Hub link present as natural inline anchor in lead — "[Gasku](https://gagas.co.id/gasku/)" in opening; not a BACA JUGA callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: none (gasku-01 is the first Gasku article; index.json holds only gaslink-01, different keyword)
- Subtopic overlap (Jaccard estimate): ~0.1 vs gaslink-01 (only "CNG" + "keselamatan CNG" intersect; transport/SPBG/Bi-Fuel context vs industrial/GTM/beyond-pipeline context)
- Verdict: distinct angle confirmed — transportation cornerstone, no overlap risk

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per `{IMAGE_NN}` placeholder — 3 placeholders (IMAGE_01/02/03 in body) ↔ 3 entries; count matches
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type — all present, all Bahasa Indonesia (alt_ids: 76 / 92 / 108 chars)
- [x] Any "real photo/site asset" requirement is surfaced — IMAGE_01 sourcing_note requests an authentic SPBG PGN Gagas photo and warns against faking Gasku branding on third-party facilities
- (No generated PNGs to check — by design.)
