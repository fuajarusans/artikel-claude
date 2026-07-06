---
brief_id: "cng-indonesia-03"
editor_run_date: "2026-06-09"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Manfaat CNG untuk Industri & Lingkungan: Efisiensi dan Emisi Lebih Rendah

## Recommendation
**approve**

The draft arrived in strong shape: it respected every dossier flag (the writer correctly used industri ~40% instead of the brief's unverified 30,83%, attributed "68%" to Gagas/KADIN with the independent 30–50% range alongside it, labeled the 75–94% NOx figure as VEHICLE data, and cited RS Hasan Sadikin — not RS Kariadi). All EIA CO2 figures are exact (52,91 / 62,88 / 74,14 kg/MMBTU). The fixes I applied were editorial, not structural: one GEO gap (no standalone extractable answer after the "Manfaat Operasional" H2), one PGN Gagas self-mention over the ≤3 budget, two minor first-person-plural voice slips in the body, and a meta-description em-dash. None required writer/strategist rework. The piece teaches the topic vendor-neutrally, hedges honestly, carries the required honest-section + manfaat table, and lands the conclusion + soft CTA correctly. It is shippable.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No banned openers/transitions; varied paragraph + sentence lengths; honest hedges ("patokan lapangan, bukan jaminan"). Fixed 2 mild first-person-plural slips. |
| Factual & energi-gas / CNG accuracy | 10 | All PROTECT figures exact and correctly attributed; every dossier flag honored. |
| On-page SEO compliance | 9 | Meta/slug/H1/keyword placement all pass; 3 distinct internal links; 1 strong EIA + 1 ESDM citation; FAQ 6; table + 2 lists present. |
| GEO extractability (§2a) | 9 | 40–60-word answer now after every major H2 (added one to "Manfaat Operasional"); one quotable point per paragraph; FAQPage-ready; dateModified present. |
| PGN Gagas framing discipline | 9 | Distributor framing throughout ("menyalurkan", "diantar sebagai CNG"); trimmed to 3 self-mentions; no superlatives. |
| Internal linking | 9 | Hub inline in lead; Gaslink cousin mid-body; LNG cousin in conclusion — 3 distinct URLs, descriptive anchors, no BACA JUGA. |
| FAQ quality | 9 | 6 self-contained Q&As, each 40–80 words with a sourced number. |
| Image-brief completeness | 9 | 2 entries match 2 placeholders; alt/caption/visual-direction/asset-type all in Bahasa Indonesia; data-accuracy sourcing notes present. |

## What I fixed (changelog)
- **GEO §2a — added a 40–55-word direct answer after the "Manfaat Operasional" H2.** It previously jumped straight from an 11-word lead-in into a numbered list, leaving no standalone extractable passage. Rewrote the lead-in to state all three operational benefits in prose, then kept the list as elaboration. (Net +~30 words; final still ≤1600.)
- **PGN Gagas mention discipline — reduced self-mentions from 4 to 3.** Rephrased the FAQ aside "CNG kemasan silinder dari PGN Gagas (2021)" → "CNG kemasan silinder yang hadir sejak 2021" (keeps the useful fact, drops the surplus brand mention). Remaining 3: mid-body Gaslink aside, FAQ RSHS case, conclusion positioning line.
- **Voice — removed 2 first-person-plural slips in the body** ("Kami memetakan" → "Pembahasan memetakan" in the lead; "kita pisahkan" → "dipisahkan" in §1). Body now stays impersonal per style_guide §3, matching the gaslink-01 benchmark; "kami/PGN Gagas first person" reserved for the close.
- **Meta description — converted the em-dash to a comma** ("...lebih rendah dari solar — plus..." → "..., plus...") so the rendered meta tag carries no stylistic AI tell. Length 154 chars (within 140–160).
- **Conclusion — merged a redundant trailing sentence** into the positioning line (removed the duplicate "profil konsumsi dan peralatan" echo with the CTA), tightening the close.
- **Precision nit** — "menopang beban energi serius" → "menopang beban energi industri" (more concrete, on-topic).

## What I flagged (open issues)
- ⚠️ **Word count is an estimate (set to 1588), not a fresh script run.** Bash/Python was unavailable in this session, so I could not re-run `tools/count_words.py`. The baseline was a verified 1559; my net edits add ~+30 words (one GEO lead-in expansion minus a conclusion trim), landing ~1588 and comfortably under the 1,600 ceiling. *Recommendation*: the validator's `quality-check.ps1` will produce the authoritative count; if it lands >1600 (unexpected), trim the operational lead-in by one clause.
- ⚠️ **"68%" and the RSHS Rp 3 miliar figure are single-source / interested-party claims (dossier Claims 11–12, FLAG 2).** Both are correctly framed in-text (attributed to Gagas/KADIN and "menurut PGN Gagas", with the 30–50% independent range as counterweight), so this is not a defect — just a standing note that these are not independently audited numbers. No action needed.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers (grep: none)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (grep: none)
- [x] No "Penting untuk dicatat / dipahami bahwa" (grep: none)
- [x] "Dengan demikian" not overused (grep: none)
- [x] Em-dash count ≤2 in published body prose — actual: 2 (lines for "cara distribusinya" and "biaya distribusi"); the 75–94% / 30–50% are en-dash number ranges; IMAGE-placeholder em-dashes are stripped at render
- [x] Varied paragraph lengths (1-sentence "Hasilnya:" lines mixed with 4–5-sentence blocks)
- [x] Not every H2 → 3-bullet list (mix of prose, numbered list, bullet list, table)
- [x] No generic claims without numbers (EIA figures, 40%/1.473 BBTUD, 30–50%, 75–94% all sourced)
- [x] No stacked hype adjectives (no canggih/powerful/seamless/terdepan)
- [x] No service-dump paragraph

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Gas alam 52,91 vs solar 74,14 vs LPG 62,88 kg CO2/MMBTU (~29% / ~16% lebih rendah) | dossier Claim 1–2 ✓ + EIA URL ✓ | pass |
| Sektor industri = konsumen gas domestik terbesar, ~40% / 1.473 BBTUD (2024) — NOT 30,83% | dossier Claim 9 ✓ (FLAG 1 honored) + ESDM 2024 URL ✓ | pass |
| "Hemat hingga 68% vs solar" attributed to Gagas/KADIN; independent range 30–50% kept | dossier Claim 12 / FLAG 2 ✓ — framed, not universal | pass |
| NOx 75–94% labeled as VEHICLE (CNG vs diesel, ICCT 2021), not industrial stationary | dossier Claim 4 / FLAG 3 ✓ — explicitly caveated in §3 | pass |
| RS Hasan Sadikin Bandung, ~Rp 3 miliar/tahun, beralih dari solar ke Gaslink (Agustus 2025) | dossier Claim 11 ✓ (RS Hasan Sadikin, not RS Kariadi) | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 48 chars; "Manfaat CNG untuk Industri" leads (keyword "CNG" in first 12 chars)
- [x] Meta description 140–160 — actual: 154
- [x] Slug ≤60, kebab-case, keyword — actual: `manfaat-cng-untuk-industri-dan-lingkungan` (41 chars, contains "cng")
- [x] H1 contains keyword (CNG)
- [x] H2 count 4–5 — actual: 5 (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 ("Seberapa Besar CNG Menurunkan Emisi...") ; ≥1 honest/counter-conventional H2 ("Kapan CNG BELUM...")
- [x] Keyword in first 100 words (lead + definition snippet)
- [x] Definition snippet near top (40–60 words) — "Secara singkat" blockquote, ~58 words
- [x] ≥8 LSI terms — counted ~12: nilai kalori/calorific value, Wobbe Index, CO2, NOx, partikulat/PM, boiler, oven/furnace, genset, retrofit burner, fouling, jejak karbon, HSD/solar
- [x] 3 internal links (1 hub + 2 cousins) — destinations: /perusahaan-cng-indonesia/ (hub, lead), /gaslink/ (cousin, §2), /perusahaan-lng-indonesia/ (cousin, conclusion)
- [x] ≥1 external authoritative citation — actual: 2 (EIA + Kementerian ESDM); IEA, ICCT, US EPA, Cummins also attributed in-text
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 2
- [x] ≥1 list + ≥1 table — 1 numbered + 2 bulleted lists + 1 comparison table
- [x] Word count 1,200–1,600 — actual: ~1588 (estimate; see open flag)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all 5 H2s; **added** to "Manfaat Operasional" (was the only gap)
- [x] Each body paragraph makes one independently quotable, verifiable point (EIA selisih, 40% domestik, 75–94% vehicle caveat, etc.)
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-06-09` present in the meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy distributor ("menyalurkan CNG", "gas bumi diantar sebagai CNG") — never "memproduksi"
- [x] ≤3 PGN Gagas self-mentions — actual: 3 (mid-body Gaslink aside, FAQ RSHS, conclusion) + gagas.co.id CTA
- [x] No unverifiable superlatives (no terbaik/terbesar/nomor satu)
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier (Gaslink, GTM, CNG cylinder 2021)
- [x] Closing uses a company_profile positioning line ("anak usaha PGN di bawah Subholding Gas Pertamina")
- [x] Soft website CTA present as the FINAL line, after the conclusion (visit gagas.co.id; consultative tone)
- [x] Hub link present as a natural inline anchor in the lead ("manfaat CNG di Indonesia") — not a BACA JUGA callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: none in the CNG cluster yet; nearest cross-cluster neighbors are gaslink-03 (industri cocok + onboarding) and gaslink-02 (biaya/payback).
- Subtopic overlap (Jaccard estimate): ~0.15–0.18 vs gaslink-03. This article teaches the *mechanism* of CNG benefits (efisiensi/emisi + "kapan belum cocok" as concept) and deliberately omits cost/payback math (gaslink-02) and subscription/onboarding steps (gaslink-03).
- Verdict: distinct angle confirmed.

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per `{IMAGE_NN}` placeholder in the body — 2 entries (IMAGE_01, IMAGE_02) match 2 body placeholders
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type, all Bahasa Indonesia (alt_id IMAGE_01 = 99 chars; IMAGE_02 = 104 chars)
- [x] Any "real photo/site asset" requirement surfaced — both sourcing_notes confirm new vector/infographic assets, no PGN Gagas facility photo required; both flag that EIA figures must stay exact
- (No generated PNGs to check — images are produced by the client's design team from this brief.)
