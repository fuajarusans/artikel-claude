---
brief_id: "gaslink-01"
editor_run_date: "2026-08-11"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.03
---

# Editor QC Report — Gaslink dan Kredit Karbon: Ubah Pengurangan Emisi Jadi Aset

## Recommendation
**approve**

This is one of the strongest drafts in the batch. Every load-bearing hedge the brief and dossier demanded is present and correctly framed: fuel-switching to gas usually FAILS the additionality test (because gas is already cheaper), the 5 authorised Jan-2025 projects are explicitly labelled utility-scale (PLTGU/PLTM) rather than mid-size factories, the SRN-PPI methodology gap for industrial CNG fuel-switching is hedged (not asserted), PTBAE-PU (mandatory, power sector) is kept distinct from SPE-GRK (voluntary, project-based), the IDXCarbon market data is timestamped "per Februari 2026" with an oversupply caveat, and there is no rupiah MRV cost invented (only the verified PNBP Rp3.000/dokumen, with no Rp5jt/21jt conflation). PGN Gagas is framed strictly as a gas distributor / fuel-switching instrument, explicitly NOT a carbon-credit issuer. Anti-AI scan is clean (0 em-dashes, 0 filler openers), originality clears comfortably (AI 0.04; no non-Gagas verbatim ≥20 words), and the on-page checklist passes. The only substantive editor fix was adding the two missing external authoritative hyperlinks (EIA + IDXCarbon), which the draft carried as text attributions only. Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dashes, 0 AI-tell openers; sentence CV 0.649, paragraph CV 0.411; concrete pain hook; honest paradox framing |
| Factual & energi-gas / CNG accuracy | 10 | All 7+ checked claims match dossier; every critical hedge held; EIA factors correct |
| On-page SEO compliance | 9 | Meta/slug/H2/FAQ/keyword all in-band; 2 external hyperlinks added in-place to close the one gap |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after each H2; one quotable point per paragraph; FAQPage-ready |
| PGN Gagas framing discipline | 10 | Provider/distributor framing; ≤3 mentions; no superlatives; explicit "bukan penerbit kredit" hedge |
| Internal linking | 10 | Hub (Gaslink) in lead + 2 cousins, natural inline anchors, no BACA JUGA |
| FAQ quality | 9 | 6 Q&As, 40–80 words each, self-contained, PAA-aligned |
| Originality (plagiarism + AI-detector) | 10 | AI 0.04 (pass); no verbatim ≥20-word non-Gagas hit |

## What I fixed (changelog)
- Added external authoritative hyperlink on the EIA emission-factor attribution in H2#1 → `https://www.eia.gov/environment/emissions/co2_vol_mass.php` (draft had a text attribution only; checklist requires 1–2 external links).
- Added external authoritative hyperlink on "Bursa Karbon Indonesia (IDXCarbon)" in H2#2 → `https://idxcarbon.co.id/id/product-spe-grk`.
- No other edits required. Draft arrived with 0 em-dashes, 0 AI-tell openers, correct framing, and all hedges intact — nothing to strip or rewrite.

## What I flagged (open issues)
- ⚠️ Freshness: market data is correctly timestamped in-body ("per Februari 2026" + "periksa data terkini di idxcarbon.co.id"), but the meta block carries `publish_month` only, no explicit `dateModified`. *Recommendation*: CMS should stamp `dateModified` at publish and schedule a refresh of the IDXCarbon figures each quarter (fast-moving numbers). Non-blocking.
- ⚠️ Both cousin links resolve to the same hub (`perusahaan-cng-indonesia`) with different anchors/placements, per the brief's own allowance. *Recommendation*: acceptable as-is; if a distinct sibling ever exists, swap cousin-2 to a different destination. Non-blocking.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — 0 found
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 found
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 found
- [x] "Dengan demikian" not overused — 0 found
- [x] Em-dash count ≤2 — actual: 0
- [x] Varied paragraph lengths — paragraph CV 0.411, sentence CV 0.649 (mix of 1-sentence and 5–6-sentence paras)
- [x] Not every H2 → 3-bullet list — mix: prose+image (#1), numbered list (#2), 4-bullet (#3), table (#4), 2-bullet (#5)
- [x] No generic claims without numbers — claims carry EIA figures, dates, Rp values, tonnages
- [x] No stacked hype adjectives — none
- [x] No service-dump paragraph — single anchor at close

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Gas 52,91 / LPG 62,88 / solar 74,14 kg CO2/MMBtu | dossier ✓ (EIA) + WebSearch corroborated | pass |
| IDXCarbon aktif 26 September 2023, dioperasikan BEI, diawasi OJK | dossier ✓ + WebSearch | pass |
| 5 proyek, 1,78 juta tCO2e (20 Jan 2025), PLTGU Priok Blok 4 / PLTM Gunung Wugul = utility-scale | dossier ✓ + WebSearch (763.653 tCO2e Priok; PLTM Wugul) | pass |
| Per Feb 2026: 153 pengguna, Rp91,87 miliar, oversupply | dossier ✓ + WebSearch (Warta Ekonomi/OJK) | pass |
| PNBP Rp3.000/dokumen; DRAM ≤1 bln, LCAM ≤6 bln; no total-cost rupiah invented | dossier ✓ (no Rp5jt/21jt conflation) | pass |
| PTBAE-PU (wajib, pembangkit) ≠ SPE-GRK (sukarela, proyek) | dossier ✓ + product framing | pass |
| Perpres 98/2021, Permen LHK 21/2022, POJK 14/2023 | dossier ✓ | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 43 chars / "Gaslink" at pos 0
- [x] Meta description 140–160 — actual: 154
- [x] Slug ≤60, kebab-case, keyword — actual: `gaslink-kredit-karbon-spe-grk` (29)
- [x] H1 contains keyword — "Gaslink dan Kredit Karbon..."
- [x] H2 count 4–5 — actual: 5 body H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#2, #3); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — "Gaslink" in lead
- [x] Definition snippet near top (40–60 words) — ~55-word "Ringkasnya" blockquote
- [x] ≥8 LSI terms — counted: 12 (kredit karbon, SPE-GRK, IDXCarbon, additionality, MRV, SRN PPI, NEK, baseline, fuel switching, perdagangan karbon, PTBAE-PU, CNG)
- [x] 3 internal links (1 hub + 2 cousins) — Gaslink (lead) + CNG di Indonesia (H2#1) + penyedia CNG (H2#4)
- [x] ≥1 external authoritative citation — actual: 2 after fix (EIA, IDXCarbon)
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders — actual: 2 ({IMAGE_01}, {IMAGE_02})
- [x] ≥1 list + ≥1 table — numbered + 2 bullet lists + 1 comparison table
- [x] Word count 1,200–1,600 — actual: ~1,551 (reader-visible ~1,538; script prose-token 1,583)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all 5 H2s (~42–50 words each)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; freshness noted in-body ("per Februari 2026"); `dateModified` recommended at CMS (see flag)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy distributor / fuel-switching instrument, NOT a carbon-credit issuer — explicit: "instrumen fuel switching... bukan penerbit kreditnya" and "penerbitan kredit tetap di luar kendali penyedia gas"
- [x] ≤3 self-mentions — actual: mid-article aside (H2#4 smart metering) + closing positioning line + soft CTA = within budget
- [x] No unverifiable superlatives — none
- [x] Energi-gas / CNG names + specs match product_matrix / dossier — Gaslink = CNG industri/komersial; smart-metering claim matches company_profile
- [x] Closing uses a company_profile positioning line — "anak usaha PGN... bagian dari Subholding Gas Pertamina"
- [x] Soft website CTA is the FINAL line, after Kesimpulan — "...kunjungi gagas.co.id." (consultative, not "beli sekarang")
- [x] Hub link is a natural inline anchor in the lead — [Gaslink](https://gagas.co.id/gaslink/); no BACA JUGA callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `2026-07-2-gaslink-06` — "Gaslink & Dekarbonisasi: Turunkan Emisi Scope 1 Industri" (angle_hash sha1:9cdbc3157a74)
- Subtopic overlap (Jaccard estimate): ~0.11 — shared only "fuel switching" + EIA emission factors; SPE-GRK / IDXCarbon / MRV / SRN PPI / additionality-as-gatekeeper / market mechanics are entirely new
- Verdict: distinct angle confirmed — gaslink-06 = *lowering & reporting* Scope 1 emissions (ESG); this = *monetising* the reduction as a traded asset. No cannibalization risk against gaslink-01/02/03 either.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `gaslink-01.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: 0.04 (verdict: pass); only flag is low-severity paragraph-low-variance (CV 0.411, above the 0.30 strong-tell threshold)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: 0.411 (sentence CV 0.649; top-30 vocab share 0.293)
- [x] Plagiarism: distinctive passages web-checked; no non-Gagas verbatim hit ≥20 words — plagiarism score: 0.03
  - Market data (153 pengguna / Rp91,87 M): facts match Warta Ekonomi/OJK; draft phrasing is original — shared span is numeric facts only.
  - Project names (PLTGU Priok Blok 4 / PLTM Gunung Wugul): facts corroborated; "pembangkit skala besar... bukan pabrik menengah" is the writer's own framing.
  - SPE-GRK definition + additionality: overlaps limited to proper institutional names (SRN PPI), standard term expansion (MRV = Pengukuran, Pelaporan, Verifikasi), and well-known-definition territory sourced to the cited authority (IDXCarbon) — ignorable per policy. No contiguous ≥20-word lift.
