---
brief_id: "gasku-02"
editor_run_date: "2026-06-09"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Konversi BBM ke BBG: Estimasi Penghematan & Cara Mulai untuk Armada

## Recommendation
**approve**

This is a strong, decision-useful draft that handles the hardest part of a cost/payback article correctly: every penghematan and payback figure is attributed, dated, and explicitly labeled *ilustrasi/contoh, bukan jaminan* with assumptions stated, and the two converter-kit disclaimers ("kisaran pasar umum, bukan tarif resmi PGN Gagas" + "bukan kalkulasi resmi Gagas") are intact. All dossier PROTECT items are honored — power drop is 10–20% (the brief's "9%" never made it in), the 143rb kit/372 bengkel target is framed as a 2012 plan vs the verified ~187 CSR units, garansi is "berpotensi batal," and BBM prices are dated (per Juni 2026). Framing is clean: PGN Gagas is the BBG distributor/penyalur (anak usaha PGN), not the program owner and not a converter-kit seller; self-mentions are within budget. My edits were length-neutral-to-small and improved GEO extractability (40–60-word answers after the two thinnest H2s), trimmed an over-length meta description to spec, and removed minor redundancy. No factual claim required reversion; nothing needs writer or strategist rework.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Varied paragraph lengths, honest hedging, no banned openers, no "Selain itu" stacking, em-dash body count = 2 (at ceiling, acceptable). Reads like a practitioner leveling with a skeptical buyer. |
| Factual & energi-gas / CNG accuracy | 9 | 5/5 spot-checked claims pass vs dossier + product_matrix. All numbers attributed + dated. Illustrative labels intact throughout. |
| On-page SEO compliance | 9 | All meta/heading/keyword/link/FAQ checks pass after meta-description trim (163 → 153 chars). |
| GEO extractability (§2a) | 9 | Definition snippet + a 40–60-word direct answer now sits after each of the 5 H2s; one quotable point per paragraph; FAQ FAQPage-ready; dateModified present. |
| PGN Gagas framing discipline | 9 | Distributor/penyalur framing correct; ≤3 promotional self-mentions; no brand superlatives; product names/specs match product_matrix + dossier. |
| Internal linking | 10 | Exactly 3 distinct inline anchors: /gasku/ (hub, in lead) + /gaslink/ + /perusahaan-cng-indonesia/. No "BACA JUGA". |
| FAQ quality | 9 | 6 Q&As, each 40–80 words, self-contained, ≥1 dated number each, drawn from PAA. |
| Image-brief completeness | 10 | 3 entries, one per {IMAGE_NN}; alt_id/caption_id/visual_direction/suggested_asset_type all present in Bahasa Indonesia; cost-number illustrative guardrail explicitly enforced in JSON + in-image labels. |

## What I fixed (changelog)
- **Meta description trimmed 163 → 153 chars** (was over the 140–160 / 150–160 GEO band). Removed "yang" + changed "Pakai Gasku" → "Gasku"; kept keyword-first + all value props.
- **GEO §2a — H2 #4 ("6 Langkah") opening answer expanded from ~25 to ~45 words**: the opener now previews the six steps in one extractable sentence (HowTo summary) before the numbered list, landing it in the 40–60-word band.
- **GEO §2a — H2 #5 ("Program Pemerintah") opening answer expanded from ~31 to ~46 words**: folded the honest thesis ("angka penghematan headline mengasumsikan pemakaian tinggi dan akses SPBG mudah") into the post-heading answer so it is quotable standalone.
- **Removed the now-duplicated thesis sentence** at the start of the "sisi jujurnya" paragraph and tightened its lead-in ("Sebelum memutuskan, masukkan tiga biaya ini ke dalam kalkulasi:") — offsets the additions above.
- **Trimmed two minor redundancies** to keep length in check: dropped the echo sentence "Yang pasti hanyalah selisih per liter" (§ Penghematan) and reworded "sepanjang umur kendaraan" → "selama armada beroperasi."
- **Frontmatter word_count updated 1557 → 1572** to reflect the net change.

## What I flagged (open issues)
- ⚠️ **Bengkel Keliling BBG status (dossier Flag 6)** — the draft wisely does NOT assert Bengkel Keliling is present-tense active (it only cites the verified 187-unit CSR figure), so no fix was needed. *Recommendation*: at publish time, if the design/CMS team wants to add a Bengkel Keliling mention, confirm it is still operating after Feb 2026 via gagas.co.id first.
- ⚠️ **"kandidat terbaik" (H2 #1)** — this is a use-case judgment (which fleet profile is the best candidate), not a brand superlative, so it is within blacklist rules. *Recommendation*: leave as-is; flagging only for transparency.
- ⚠️ **Word count is a careful estimate (~1572)** — count_words.py could not be run in this editor session (no Python/Bash). *Recommendation*: the validator should run `tools/count_words.py` to confirm; it is comfortably within 1,200–1,600 and below the 1,600 cap regardless.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep clean
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep found zero "Selain itu"
- [x] No "Penting untuk dicatat / dipahami bahwa" — none
- [x] "Dengan demikian" not overused — none present
- [x] Em-dash count ≤2 — body prose = 2 (definition snippet pair on line 42); {IMAGE_NN} brief text excluded (design-only, not published prose)
- [x] Varied paragraph lengths — 1-, 2-, 3-, and 5-sentence paragraphs mixed deliberately
- [x] Not every H2 → 3-bullet list — H2 mix is prose + table + numbered HowTo + bulleted caveats
- [x] No generic claims without numbers — claims carry Rp figures, %, dates, counts
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — none
- [x] No service-dump paragraph — single anchor (Gasku) at close; cousins are contextual

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Gasku Rp 4.500/LSP, Pertalite Rp 10.000, selisih Rp 5.500/LSP (per Juni 2026) | dossier Claim 1 & 2 (gagas.co.id; Bisnis.com Jun 2026) ✓ | pass |
| 20 L × Rp 5.500 × 26 = Rp 2,86 juta/bln; payback ~10 bln @ Rp 25jt komposit, 15 L/hari (CNBC Mar 2024) | dossier Claim 5 + Tabel 1 (verbatim CNBC "kembali ... 10 bulan") ✓ | pass |
| Converter kit Rp 14–25 juta = kisaran pasar, BUKAN tarif PGN Gagas | dossier Claim 6 + product_matrix framing rule ✓ (disclaimer present in body + table note) | pass |
| Tenaga turun ~10–20% (NOT 9%) | dossier Claim 13 + Flag 5 ✓ (brief's "9%" correctly excluded) | pass |
| 143rb kit/372 bengkel = target 2012 (not realisasi); ~187 unit CSR 2023–2025 (Antara Jul 2025) | dossier Claim 9, Claim 10, Flag 2 ✓ | pass |
| Bonus: 14 SPBG/7 provinsi, ~2.200 kendaraan/hari (CNBC Nov 2025); "19 titik" avoided | dossier Claim 7 + Flag 3 ✓ | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 52 chars / "Konversi BBM ke BBG" at pos 1–19
- [x] Meta description 140–160 — actual: 153 (after fix; was 163)
- [x] Slug ≤60, kebab-case, keyword — actual: `konversi-bbm-ke-bbg-penghematan-armada` (38 chars)
- [x] H1 contains keyword — "Konversi BBM ke BBG..." (+ Gasku in lead)
- [x] H2 count 4–5 — actual: 5 body H2 + FAQ + Kesimpulan
- [x] ≥1 question-format H2 (H2 #1, #2, #3 are questions); ≥1 honest/counter-conventional H2 (H2 #5 "...Hitung Total Biayanya dengan Jujur")
- [x] Keyword in first 100 words — "Konversi BBM ke BBG" + Gasku in lead sentence 1–2
- [x] Definition snippet near top (40–60 words) — blockquote "Secara singkat" ~52 words
- [x] ≥8 LSI terms — counted ~12: konversi BBM ke BBG, BBG, CNG, Converter Kit/C-Kit, LSP, SPBG, bi-fuel, payback, PM 39/2012, Perpres 64/2012, RON, ATPM
- [x] 3 internal links (1 hub + 2 cousins) — /gasku/ (hub, lead), /gaslink/, /perusahaan-cng-indonesia/
- [x] ≥1 external authoritative citation — actual: 2 (Kemenhub/dephub.go.id + CNBC Indonesia); Kemenhub satisfies the gov-source requirement
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 3 ({IMAGE_01–03})
- [x] ≥1 list + ≥1 table — numbered HowTo + bulleted caveats + payback table
- [x] Word count 1,200–1,600 — actual: ~1,572 (estimate; validator to confirm via count_words.py)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — H2 #1 ~50w, #2 ~55w, #3 ~50w, #4 ~45w (fixed), #5 ~46w (fixed)
- [x] Each body paragraph makes one independently quotable, verifiable point — claims are one-per-sentence with inline attribution
- [x] FAQ parseable for FAQPage schema; `dateModified` (2026-06-09) present in meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas framed as gas-energy provider/distributor (memudahkan konversi, menyalurkan via SPBG), NOT producer and NOT program owner ("program yang dipimpin pemerintah dan didukung PGN, bukan milik satu perusahaan")
- [x] ≤3 PGN Gagas self-mentions — promotional mentions = 2 (Kesimpulan positioning line + soft CTA); plus the Gasku hub anchor in the lead. The two "bukan tarif/kalkulasi resmi Gagas" instances are required disclaimers (de-claiming, not promoting).
- [x] No unverifiable superlatives ("terbaik/nomor satu") for the brand — "kandidat terbaik" describes a fleet use-case, not Gagas
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier — Gasku, SPBG, Converter Kit, LSP, bi-fuel all consistent
- [x] Closing uses a company_profile.md positioning line — "Sebagai anak usaha PGN yang merupakan bagian dari Subholding Gas Pertamina..."
- [x] Soft website CTA present as the FINAL line, after the conclusion — "...kunjungi gagas.co.id dan mulai konsultasinya." (consultative, not "beli sekarang")
- [x] Hub link present as a natural inline anchor (in the lead) — [Gasku](https://gagas.co.id/gasku/), descriptive; no "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: none committed (gasku-01 sibling "belum terbit"; only gaslink-01 is in history, different keyword/cluster)
- Subtopic overlap (Jaccard estimate): <0.15 vs gaslink-01 (shared = generic CNG/SPBG context only; core subtopics — payback math, converter-kit cost, conversion HowTo, govt program — are distinct)
- Verdict: distinct angle confirmed

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per {IMAGE_NN: ...} placeholder in the body — 3 placeholders, 3 entries (IMAGE_01/02/03), markers match
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type — all present, all Bahasa Indonesia
- [x] Cost-number guardrail surfaced — top-level `cost_number_guardrail` + per-image `sourcing_note` require "Ilustrasi" labels and forbid presenting Rp 14–25 juta as official Gagas tariff; in-image text strings include the illustrative/assumption labels
- [x] Real-photo requirement surfaced — IMAGE_03 note: if a real SPBG photo is added, request an authentic PGN Gagas asset; do not fabricate Gagas/PGN branding
- (No generated PNGs to check — by design.)
