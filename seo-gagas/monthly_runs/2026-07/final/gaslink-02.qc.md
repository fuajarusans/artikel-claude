---
brief_id: "gaslink-02"
editor_run_date: "2026-06-09"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Gaslink vs LPG vs Solar: Perbandingan Biaya & Efisiensi Industri

## Recommendation
**approve**

This draft arrived unusually clean and ships with only light editing. It nails the hardest part of this brief — the factual minefield — by teaching the per-MMBTU comparison *method* while refusing to attach a single invented Rupiah/USD figure to Gaslink itself. Every dossier PROTECT constraint is honored: no invented Gaslink price, no payback-in-years, no PRS-cost-Rupiah, no combustion-efficiency percentage, no solar-Rp/MMBTU-as-fact; the HGBT-is-only-7-sectors caveat is stated explicitly and correctly excludes hotels/restoran/laundry; JJ Laundry Batam and RS Kariadi are absent; Hotel Dharmawangsa appears only as an unnamed "contoh perhotelan 2017" with a dated/ilustratif hedge. Framing is correct throughout (PGN Gagas *menyalurkan*, anak usaha PGN/Subholding Gas Pertamina, never producer), self-mentions stay at 3, and there are zero superlatives. Anti-AI is strong (zero banned openers, one body em-dash now removed, varied rhythm). The five priority facts all trace cleanly to the dossier (EIA emissions, HGBT Kepmen, calorific values, USD/MMBTU ranges, 4.067.002 MMBTU capaian). Fixes applied were cosmetic: meta-description trimmed from 163 to 155 chars, the lone body em-dash converted to a clean sentence break, `date_modified` added for GEO freshness, and one borderline image alt_id trimmed to spec. Distinct from sibling gaslink-01 (comparison vs definitional; Jaccard ~0.11).

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero banned openers; one body em-dash (now removed → 0); deliberately varied paragraph/sentence rhythm; honest-hedging voice ("acuan lapangan, bukan janji"). |
| Factual & energi-gas / CNG accuracy | 10 | All 5 spot-checked facts match dossier; every number sourced + dated + framed as range; PROTECT list fully respected. |
| On-page SEO compliance | 9 | Meta title 49 chars (keyword first); meta desc trimmed to 155; slug 39 chars; 5 body H2s; 6-Q FAQ; comparison table + nilai-kalori table + numbered list all present. |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after each of the 5 H2s; one quotable point per paragraph; FAQ FAQPage-ready; `date_modified` added. |
| PGN Gagas framing discipline | 10 | Provider/distributor framing only; 3 self-mentions (snippet + conclusion + CTA); no superlatives; correct anak-usaha-PGN positioning line. |
| Internal linking | 10 | Exactly 3 distinct: /gaslink/ (lead) + /gasku/ (body) + /perusahaan-cng-indonesia/ (conclusion); all natural inline anchors, no callouts. |
| FAQ quality | 9 | 6 Q&As, each 40–80 words, self-contained, each carries a sourced number; mirrors brief PAA. |
| Image-brief completeness | 9 | JSON parses; 3 entries match 3 placeholders; all BI; one alt_id was 127 chars → trimmed to 122. |

## What I fixed (changelog)
- **Meta description: 163 → 155 chars.** Was 3 over the 160 ceiling. Rewrote "cara membandingkan" → "bandingkan" and reordered to land in the 150–160 sweet spot; keyword "Gaslink vs LPG vs solar" still leads, all value props (per-MMBTU, efisiensi & emisi, payback, "kapan belum tentu lebih murah") preserved.
- **Removed the single body em-dash** (line: HGBT caveat, "tidak termasuk — jadi..."). Rewrote as two clean sentences ("...tidak termasuk. Jadi jangan asumsikan...") plus a small clarity tweak ("yang merupakan pelanggan tipikal Gaslink"). Body is now 100% em-dash-free. Length-neutral.
- **Added `date_modified: "2026-06-09"` to frontmatter** — GEO §2a freshness signal; the draft was missing it (gaslink-01 has it). Frontmatter-only; no body impact.
- **Image alt_id (IMAGE_02): 127 → 122 chars.** Dropped redundant "untuk" to bring it under the 125-char limit; meaning intact.
- (No structural, factual, or framing changes were needed — the draft was already compliant.)

## What I flagged (open issues)
- ⚠️ **Word count re-verification needed (tool).** Draft was tool-verified at 1554 words. My edits are net ~+2 words (the HGBT sentence smoothing added "yang merupakan"); all other edits were length-neutral or in frontmatter/JSON. Estimated final ~1,556 words — comfortably in the 1,200–1,600 band. *Recommendation*: orchestrator re-runs `tools/count_words.py` to confirm; no risk of breaching 1,600.
- ⚠️ **Calorific-value source is a Vietnam industry table (dataenergy.com.vn) + laskarteknik.co.id**, not a top-tier Indonesian authority. The dossier flagged this (Flag 5) and the writer correctly hedged with ranges ("~9.000–11.000 kkal/Sm³", "angka aktual ditagihkan per MMBTU dalam kontrak"). This is acceptable for a normalization *concept* table, but the source tier is the weakest citation in the piece. *Recommendation*: no change required now; if a Kementerian ESDM / SNI calorific reference surfaces in a future refresh, swap it in.
- ⚠️ **"~30% efisiensi" appears in both the H2 #5 closing paragraph and FAQ #1** (Ditjen Migas roadmap, 2026). Not a duplication problem (different contexts), but it is the same stat twice. *Recommendation*: acceptable as-is; both instances are correctly attributed and the roadmap is explicitly labeled a 2026 projection.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — grep: 0 matches
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: 0 matches
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: 0 matches
- [x] "Dengan demikian" not overused — grep: 0 matches
- [x] Em-dash count ≤2 — body had 1 (now 0 after fix); IMAGE-placeholder em-dashes are design-brief text, not published prose
- [x] Varied paragraph lengths — deliberate 1–6 sentence variation; lead is long, several mid-body paras are 2–3 sentences
- [x] Not every H2 → 3-bullet list — H2 #1/#2 lead with prose + tables; #3 numbered list; #4/#5 prose + bullets
- [x] No generic claims without numbers — every claim carries a figure or an explicit "no official number" caveat
- [x] No stacked hype adjectives — none ("terbesar" on line 105 = "pengungkit terbesar" re: volume, not a company superlative)
- [x] No service-dump paragraph — single Gaslink anchor in conclusion only

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Emisi CO₂/MMBTU: gas ~52,91 / LPG ~62,88 / solar ~74,14; gas ~29% < solar, 16% < LPG | dossier Claim 11 ✓ (US EIA, Sep 2024, high confidence) | pass |
| HGBT USD 7/MMBTU, Kepmen ESDM No. 76.K/2025 (Feb 2025), 7 sektor; hotels/laundry excluded | dossier Claims 5 & 16 ✓ (ESDM, high); PROTECT caveat present | pass |
| LPG ~USD 22/MMBTU + CNG tabung ~USD 10–15/MMBTU, labeled "rentang referensi bertahun, bukan harga Gaslink" | dossier Claims 6 & 7 ✓ (proyeksi 2026 / data 2021), correctly framed | pass |
| Nilai kalori: solar ~9.150 kkal/L, LPG ~11.823 kkal/kg, CNG ~9.000–11.000 kkal/Sm³ | dossier Claims 1–3 + Table 1 ✓; CNG given as range per Flag 5 | pass |
| Gaslink: 4.067.002 MMBTU / 600+ pelanggan sepanjang 2025 (per Sep 2025) | dossier Claim 12 ✓ (kumparan/ANTARA/Katadata, high confidence) | pass |

No WebSearch required — all five are primary-source-verified in the dossier (EIA, Kementerian ESDM, Ditjen Migas). PROTECT list cross-checked by grep: no Kariadi / JJ Laundry / Batam / Rp 16 juta / Rp 3 miliar / payback-in-years / efficiency-% — all 0 matches.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 49 chars / "Gaslink" at position 0
- [x] Meta description 140–160 — actual: 155 (was 163; fixed)
- [x] Slug ≤60, kebab-case, keyword — actual: `gaslink-vs-lpg-vs-solar-biaya-efisiensi` (39)
- [x] H1 contains keyword — "Gaslink vs LPG vs Solar..."
- [x] H2 count 4–5 — actual: 5 body H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#3) + ≥1 honest/counter-conventional H2 (#5) — both present
- [x] Keyword in first 100 words — "Gaslink (CNG)" in lead
- [x] Definition snippet near top (40–60 words) — blockquote at line 44, ~55 words
- [x] ≥8 LSI terms — counted 68 total occurrences across the term set; >12 distinct terms (nilai kalori, MMBTU, smart metering, payback period, retrofit burner, PRS, GTM, emisi CO₂, capex, TCO, etc.)
- [x] 3 internal links (1 hub + 2 cousins) — /gaslink/ (lead) + /gasku/ (body) + /perusahaan-cng-indonesia/ (conclusion); all distinct
- [x] ≥1 external authoritative citation — actual: 3 (EIA, ESDM HGBT, Ditjen Migas roadmap)
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 3
- [x] ≥1 list + ≥1 table — numbered list (5 steps) + 2 bullet lists + 2 tables (nilai kalori + comparison)
- [x] Word count 1,200–1,600 — actual: ~1,556 (tool re-verify recommended)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified all 5 (H2 #1 ~52w, #2 ~48w, #3 ~46w, #4 ~44w, #5 ~42w)
- [x] Each body paragraph makes one independently quotable, verifiable point — confirmed (one claim + sourced fact per para)
- [x] FAQ parseable for FAQPage schema; freshness noted — 6 clean Q/A pairs; `date_modified: 2026-06-09` added to meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/distributor (menyalurkan/memasok/melayani), NOT producer — confirmed (conclusion: "menyalurkan gas bumi...lewat solusi CNG seperti Gaslink")
- [x] ≤3 PGN Gagas self-mentions — actual: 3 (definition snippet, conclusion positioning line, CTA "gagas.co.id"). Optional mid-article aside was NOT used — keeps count lean.
- [x] No unverifiable superlatives — none
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier — Gaslink, GTM, PRS, smart metering all consistent
- [x] Closing uses a company_profile / positioning line — "Sebagai anak usaha PGN dari Subholding Gas Pertamina, PGN Gagas menyalurkan..."
- [x] Soft website CTA as FINAL line, after conclusion — "...kunjungi gagas.co.id dan mulai konsultasinya." (consultative, not "beli sekarang")
- [x] Hub link as natural inline anchor in the lead — `[Gaslink](https://gagas.co.id/gaslink/)`, not a callout

### E. Anti-cannibalization spot check
- Closest prior article: `gaslink-01` (apa-itu-gaslink-gas-bumi-tanpa-pipa) — informational/definitional, committed
- Subtopic overlap (Jaccard estimate): ~0.11 (only "CNG untuk industri" + "smart metering" intersect; all cost/efficiency/payback subtopics are net-new)
- Verdict: **distinct angle confirmed** — gaslink-02 is comparison/decision (per-MMBTU method, payback, threshold) vs gaslink-01's definitional/beyond-pipeline framing; angle_hash differs; no shared table (gaslink-01 = moda pasok; gaslink-02 = lintas bahan bakar)

### F. Image-brief completeness (gaslink-02.images.json)
- [x] JSON parses
- [x] One entry per `{IMAGE_NN}` placeholder — 3 entries (IMAGE_01/02/03) match 3 body placeholders; all `placeholder_kept_in_body: true` and present in the saved final
- [x] Each entry has alt_id (≤125) + caption_id + visual_direction + suggested_asset_type, all Bahasa Indonesia — confirmed; IMAGE_02 alt_id was 127 → trimmed to 122
- [x] "Real photo/site asset" requirement surfaced — all three explicitly marked "infografik/diagram orisinal tim desain — tidak memerlukan foto fasilitas"; sourcing notes correctly forbid Gaslink pricing/GTM-capacity/payback numbers in-image
- (No generated PNGs — by design.)

## The shipping question
If this appeared on gagas.co.id tomorrow and a skeptical industrial procurement buyer (and a senior gas practitioner) read it, WEBARQ Promote would be proud of it. It teaches a genuinely useful method (normalize to MMBTU, then weigh efficiency/emissions/payback), tells the buyer honestly when gas is NOT cheaper, and never overclaims on Gaslink's behalf. Approve.
