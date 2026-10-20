---
brief_id: "gaslink-03"
editor_run_date: "2026-09-21"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.02
---

# Editor QC Report — Konversi Boiler & Oven ke Gaslink: Panduan Retrofit per Industri

## Recommendation
**approve**

This is a curator-ready draft. The engineering angle is genuinely differentiated (per-sector retrofit mechanics — burner, AFR, temperature control — versus the cluster's existing onboarding/definition articles), every number traces to the dossier with correct attribution, and all of the brief's critical hedges are honored verbatim in spirit: PGN Gagas is framed strictly as a gas-energy distributor (menyalurkan/mendistribusikan via Gaslink/GTM/PRS, never a producer or burner installer); no invented Rupiah CAPEX; the one savings figure (Ebara ~Rp1,29 juta/jam) is labeled as a 2013 single-unit case study; the 40% figure is attributed as a PGN claim, not an independent audit; clean-steam 121°C is framed as international/GMP reference pending CPOB validation; and pricing/HGBT is correctly kept out of scope (allocated to gaslink-02). Originality scan is clean (AI 0.04, no verbatim plagiarism). I applied two light polish edits in-place; nothing needs writer or strategist rework.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete pain-hook lead, varied rhythm, honest caveats; only a low-severity paragraph-variance nudge remains (CV 0.371, above the 0.30 tell threshold). |
| Factual & energi-gas / CNG accuracy | 9 | 5+ claims spot-checked vs dossier + web; AFR, calorific value, kiln/clean-steam temps, Ebara figures, ESDM 35%/40% all verified. |
| On-page SEO compliance | 9 | Meta title 44, meta desc 156, slug 37, 3 internal + 3 external links, table + 2 lists, 3 images, 6-Q FAQ. |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after every H2; one quotable point per paragraph; FAQPage-ready. |
| PGN Gagas framing discipline | 10 | Distributor framing exact; 2 self-mentions; no superlatives; burner-tuning explicitly delegated to vendor/certified technician. |
| Internal linking | 9 | Hub (Gaslink) inline in lead; 2 cousins (perusahaan-cng-indonesia, gasku) in-context; no BACA JUGA. |
| FAQ quality | 9 | 6 self-contained 40–70-word answers mirroring PAA; each carries a fact. |
| Originality (plagiarism + AI-detector) | 10 | AI 0.04 (pass); no non-Gagas verbatim ≥20 words across 4 web-checked distinctive passages. |

## What I fixed (changelog)
- Split the H2#4 supply paragraph into two and sharpened the framing boundary: added a short standalone paragraph making explicit that burner selection/tuning "bukan urusan penyalur gas" and stays with the equipment vendor/certified technician — reinforces the critical Gagas-is-distributor-not-installer hedge and improves paragraph burstiness (CV 0.345 → 0.371).
- Added the JDIH Kemnaker authoritative link to the "Permenaker No. 4 Tahun 2025" mention (already listed in frontmatter external_citations; now live inline as a 3rd outbound authority).
- Updated frontmatter `word_count` 1544 → 1550 to reflect the polished body.

## What I flagged (open issues)
- ⚠️ Paragraph-length variance is acceptable but on the low side (CV 0.371 vs the ≥0.45 human ideal). It clears the AI-tell threshold (0.30) comfortably and is partly an artifact of the mandated 40–60-word GEO answers under each H2 — no action required, noted for transparency.
- ⚠️ Permen ESDM No. 18/2018 is cited with its number but framed softly ("sejalan dengan regulasi ESDM tentang keselamatan instalasi migas"). Dossier confidence is medium-high (full text not directly retrievable). Framing is honest and safe as-is; if legal-grade precision is ever needed, verify the number against migas.esdm.go.id before quoting definitively.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — lead opens on concrete cost pain
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 instances
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 instances
- [x] "Dengan demikian" not overused — 0 instances
- [x] Em-dash count ≤2 — 1 in published body (H2#5 heading); scanner-reported total 2 includes 1 in non-published frontmatter
- [x] Varied paragraph lengths — mix of ~13-word to ~70-word paragraphs; CV 0.371
- [x] Not every H2 → 3-bullet list — mix of prose, bullets, numbered steps, and a table
- [x] No generic claims without numbers — 12+ specific figures inline
- [x] No stacked hype adjectives — none (canggih/powerful/seamless/terdepan absent)
- [x] No service-dump paragraph — single anchor at close

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| AFR stoikiometrik gas ≈1:9,5 volume vs bensin 14,7:1 massa | dossier ✓ (EngineeringToolbox); web confirms 14,7:1 gasoline basis | pass |
| Calorific value 35,6 MJ/m³ (rentang 34–52) | dossier ✓ (IEA); web confirms IEA 35,6 MJ/m³ standard | pass |
| Kiln keramik zona firing 1.200–1.400°C | dossier ✓ (medium confidence, multi-source technical) | pass |
| Ebara HKL 1800 KA: 260,79 kg solar/jam → 21 m³ gas/jam, ~Rp1,29 juta/jam, 2013, single unit | dossier ✓ + ROTASI/Undip URL (web-confirmed); labeled as 2013 single-case | pass |
| PT KIA gas ~35% ongkos produksi + PGN klaim hingga 40% | dossier ✓ (Kementerian ESDM, Mei 2018); framed as ceramics, attributed as PGN claim | pass |
| Clean steam ~121°C / 15 psig | dossier ✓ (international GMP reference); framed as pending CPOB validation | pass |

Critical-hedge audit (task brief): PGN Gagas = menyalurkan/mendistribusikan (not producer) ✓; no invented Rupiah CAPEX ✓; no zero-CAPEX/sewa/financing model asserted (correctly absent) ✓; HGBT/pricing kept out of scope (correctly absent, no figures) ✓; "hemat 40%" attributed as PGN claim ✓; PRS/GTM named as mechanism only, no spec figures claimed as official PGN Gagas specs ✓.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 44/keyword "Gaslink" at char ~20
- [x] Meta description 140–160 — actual: 156
- [x] Slug ≤60, kebab-case, keyword — actual: gaslink-konversi-boiler-oven-retrofit (37)
- [x] H1 contains keyword — "…ke Gaslink…"
- [x] H2 count 4–5 — actual: 5 content H2 (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#2, also #1); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — Gaslink in lead
- [x] Definition snippet near top — "Ringkas:" blockquote (~50 words)
- [x] ≥8 LSI terms — counted: 13 (retrofit burner, air-fuel ratio, calorific value, excess air, kiln/tunnel oven, clean steam, dual-fuel, commissioning, thermal oil heater, GTM, PRS, CNG industri, konversi boiler solar ke gas)
- [x] 3 internal links (1 hub + 2 cousins) — gaslink/ (hub), perusahaan-cng-indonesia/, gasku/
- [x] ≥1 external authoritative citation — actual: 3 (ESDM, ROTASI/Undip, JDIH Kemnaker)
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 3
- [x] ≥1 list + ≥1 table — bullet list + numbered list + 1 table
- [x] Word count 1,200–1,600 — actual: ~1,596 (scanner)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all 5 body H2s
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; freshness — publish_month 2026-09 in meta block (recommend CMS set dateModified on publish)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/distributor (menyalurkan CNG via GTM/PRS + komisioning sisi pasokan), NOT producer/installer
- [x] ≤3 PGN Gagas self-mentions — actual: 2
- [x] No unverifiable superlatives — none
- [x] Energi-gas / CNG names + specs match product_matrix.md / dossier — Gaslink, GTM, PRS, CNG consistent
- [x] Closing uses a company_profile.md positioning line — "anak usaha PGN … Subholding Gas Pertamina …"
- [x] Soft website CTA present as FINAL line — "…mulai diskusi dan asesmennya di gagas.co.id."
- [x] Hub link natural inline anchor in lead — [Gaslink] woven into the lead; no BACA JUGA callout

### E. Anti-cannibalization spot check
- Closest prior articles for this keyword: `apa-itu-gaslink-gas-bumi-tanpa-pipa` (gaslink-01, definition), `industri-cocok-pakai-gaslink-cara-penerapan` (gaslink-03 old, onboarding), `gaslink-vs-lpg-vs-solar-biaya-efisiensi` (gaslink-02, cost)
- Subtopic overlap (Jaccard estimate): ~0.05 — this article covers burner retrofit mechanics, AFR, per-sector combustion (tekstil/keramik/F&B/farmasi), commissioning; none covered by siblings. Cost/CAPEX and pricing deliberately deferred to gaslink-01/02.
- Verdict: distinct angle confirmed (angle_hash sha1:02bba4f04f66)

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran on the saved final; `gaslink-03.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: 0.04 (verdict pass; only flag: low-severity paragraph-low-variance)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: 0.371 (sentence burstiness 0.73; top-30 vocab share 0.312)
- [x] Plagiarism: 4 distinctive passages web-checked (AFR 1:9,5; calorific value 35,6 MJ/m³; clean-steam 121°C; Ebara 260,79 kg → 21 m³) — no non-Gagas verbatim hit ≥20 words; Ebara figures trace to the cited ROTASI/Undip source; plagiarism score: 0.02
