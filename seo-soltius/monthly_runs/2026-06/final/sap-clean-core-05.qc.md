---
brief_id: "sap-clean-core-05"
editor_run_date: "2026-06-02"
recommendation: "approve"
overall_score: 8
---

# Editor QC Report — Clean Core SAP: Bagaimana Dampaknya pada Pilihan Brownfield vs Greenfield?

## Recommendation
**approve**

The article delivers a genuinely decision-useful comparison for CIOs evaluating migration approach. The angle (clean-core condition as the primary variable in brownfield/greenfield choice) is executed well and fills the gap identified in the brief. After editorial fixes — primarily reducing excessive em-dash use from 15+ occurrences in the draft to prose-level zero (em-dashes now confined to the definition blockquote and table cell headers), differentiating the two near-identical Soltius closing sentences, and tightening three prose transitions — the article meets the quality bar for publishing. All mandatory structural elements are present (BACA JUGA, soft CTA, 2-image placeholders, decision table, question-format and counter-conventional H2s). Open flags from the dossier are either honestly hedged or excluded per instructions. No SAP facts contradict the dossier or product_matrix.md.

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 8 | No banned openers; good paragraph-length variation; honest hedging on duration estimates. Prose em-dashes corrected. H2 #5 counter-conventional section reads like practitioner insight. |
| Factual & SAP-spec accuracy | 9 | ECC maintenance dates (2027/2030), three migration approaches, SUM/DMO tool, SDT nomenclature, RISE vs GROW positioning — all match dossier + product_matrix.md. Duration estimates flagged as lapangan estimates. |
| On-page SEO compliance | 9 | Meta title 59 chars; meta description 149 chars; slug 40 chars; 5 H2s; 14 LSI terms; 3 internal links; 2 external citations; 7 FAQ Q&As; definition snippet in first ~130 words. |
| Soltius framing discipline | 9 | 3 mentions at limit; framing correct (SAP Platinum Partner, implementer/mendampingi, no superlatives); mid-body and conclusion mentions now differentiated. |
| Internal linking | 9 | BACA JUGA present with correct anchor "SAP Clean Core" and URL; cousin links to migrasi-erp-ke-cloud and low-code-platform both in place. |
| FAQ quality | 8 | 7 Q&As; all 40–80 words; all include a specific number or fact; questions match PAA targets from brief. |
| Image-brief completeness | 9 | Both IMAGE_01 and IMAGE_02 have entries in images.json with alt_id, caption_id, visual_direction, suggested_asset_type, all in Bahasa Indonesia. No SAP screenshots required. |

## What I fixed (changelog)

1. **Em-dash reduction** — Draft had 15+ em-dashes in prose paragraphs (major AI tell). Replaced with commas, semicolons, or full stops throughout body paragraphs. Em-dashes now appear only in the definition blockquote (2, functionally necessary) and table row header labels.
2. **SDT paragraph restructured** — Changed "SDT — sering disebut 'bluefield'... — adalah" double-em-dash structure to parenthetical "(meski istilah resmi SAP adalah *Selective Data Transition*)" to eliminate the pair from prose body.
3. **H2 #5 Soltius mention differentiated** — Draft had near-identical Soltius sentences in H2 #5 and the conclusion. H2 #5 sentence shortened to "Sebagai SAP Platinum Partner melalui United VARs, Soltius mendampingi..." (without the "rekam jejak sejak 1998" credential) so the two mentions are clearly distinct.
4. **H2 #3 SDT paragraph tightened** — Replaced awkward triple-sentence "Fleksibel, tapi paling rumit... dan mengapa biaya..." with cleaner two-sentence structure: "Fleksibel, tapi paling rumit dari sisi pemetaan. Itulah mengapa biaya SDT hampir selalu lebih tinggi dari brownfield murni."
5. **H2 #4 em-dash and comma fixes** — "ya — pada hari pertama go-live" corrected to "ya, pada hari pertama go-live"; run-on clause structures with em-dash separators rewritten as separate sentences.
6. **H2 #4 clarity tightened** — Expanded the "pola ini cukup dikenal di komunitas SAP" sentence to clarify how exactly the timeline plays out (three to five years), removing a formerly trailing clause.
7. **RISE vs GROW paragraph** — Removed trailing em-dash in "persyaratan clean core-nya paling tinggi dari semua opsi" clause; replaced with semicolon.
8. **Frontmatter word_count** — Updated from 1,362 to 1,354 to reflect post-edit count.

## What I flagged (open issues)

- ⚠️ **FLAG 1 — Duration estimates not from SAP/Gartner official data** (carried from dossier FLAG 1) — brownfield 9–18 months, greenfield 12–24 months are lapangan estimates, not citable research. The article labels them explicitly as "estimasi dari pola lapangan, bukan data SAP/Gartner resmi" in both the comparison table and FAQ. Honest hedging is sufficient; no correction needed. *Recommendation: leave as-is — hedging is correct and trust-building per style_guide §4.*

- ⚠️ **FLAG 2 — No % adoption data available** (carried from dossier FLAG 2) — Brief requested data on what percentage of companies choose brownfield vs greenfield. No authoritative public data found. Article does not claim any percentage; framing uses "banyak perusahaan existing SAP cenderung memilih brownfield" without a figure. *Recommendation: leave as-is — correct to omit a number that doesn't exist.*

- ⚠️ **FLAG 3 — SAP Business Transformation Center (BTC) omitted** (carried from dossier FLAG 3) — BTC was mentioned in dossier as tooling for SDT but flagged as medium confidence. The article does not reference BTC by name, referring instead to "SAP Readiness Check dan Custom Code Migration Worklist" (verified, high-confidence tools). *Recommendation: no action needed — the omission is correct.*

- ⚠️ **FLAG 4 — ECC EhP version split** — Article correctly uses "SAP Business Suite 7 dan SAP ECC EhP 6–8 mengakhiri mainstream maintenance pada 31 Desember 2027" per dossier FLAG 4 guidance. The article does not mention EhP 0–5 (already past deadline as of 2025). *Recommendation: leave as-is — framing is accurate and appropriate for the article's 2026 context.*

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)

- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — PASS
- [x] No "Selain itu" opening consecutive paragraphs — PASS (no occurrences)
- [x] No "Penting untuk dicatat / dipahami bahwa" — PASS
- [x] "Dengan demikian" not overused — PASS (0 occurrences)
- [x] Em-dash count ≤2 in prose body — PASS (fixed; 2 in blockquote, 0 in prose paragraphs)
- [x] Varied paragraph lengths — PASS (1-sentence, 2-sentence, 4-sentence, 5-sentence paragraphs present)
- [x] Not every H2 → 3-bullet list — PASS (H2 #1: bold-lead prose blocks; H2 #2: table; H2 #3: prose; H2 #4: prose with short/long variation; H2 #5: numbered prose)
- [x] No generic claims without numbers — PASS (9–18 months, 12–24 months, 2027, 2030, +2%, 3–5 years all present)
- [x] No stacked hype adjectives — PASS
- [x] No service-dump paragraph — PASS

### B. Factual & SAP-spec spot-check

| Claim | Source check | Verdict |
|---|---|---|
| "SAP Business Suite 7 dan SAP ECC EhP 6–8 mengakhiri mainstream maintenance pada 31 Desember 2027" | Dossier ✓ (high confidence); SAP Support Portal URL in citations | pass |
| "Extended maintenance tersedia 2028–2030 dengan surcharge +2%" | Dossier ✓ (SAP Support Portal confirmed) | pass |
| "Selective Data Transition (SDT) adalah istilah resmi SAP — bukan 'bluefield'" | Dossier ✓ (SAP Support Portal SDT URL in citations); clarified in body as community term | pass |
| "RISE with SAP = S/4HANA Cloud Private Edition; GROW with SAP = S/4HANA Cloud Public Edition (greenfield only)" | Dossier ✓ (SAP Learning Journey URL cited); "(SAP Learning, 2026)" attribution in article | pass |
| "SAP Readiness Check dan Custom Code Migration Worklist mengidentifikasi objek kode Z" | Dossier ✓ (SAP Community — System Conversion to SAP S/4HANA source) | pass |

All 5 claims verified against dossier and/or product_matrix.md. No SAP product names invented.

### C. On-page SEO checklist (seo_playbook.md §3)

- [x] Meta title ≤60 (keyword first 30) — actual: 59 chars / keyword "SAP Clean Core" at position 1–14
- [x] Meta description 140–160 — actual: 149 chars
- [x] Slug ≤60, kebab-case, keyword — actual: `clean-core-sap-brownfield-vs-greenfield` (40 chars, contains "clean-core")
- [x] H1 contains keyword — "Clean Core SAP" present in H1
- [x] H2 count 4–5 — actual: 5 H2s (+ FAQ heading)
- [x] ≥1 question-format H2 — "Apakah greenfield otomatis menghasilkan core yang lebih bersih dari brownfield?" ✓
- [x] ≥1 honest/counter-conventional H2 — "Kapan brownfield tetap pilihan lebih cerdas meski core 'kotor'?" ✓
- [x] Keyword in first 100 words — "SAP" + "clean core" + "brownfield" + "greenfield" all in lead paragraph
- [x] Definition snippet near top (40–60 words) — blockquote at ~130 words, 53 words ✓
- [x] ≥8 LSI terms — counted: 14 (brownfield SAP S/4HANA, greenfield SAP S/4HANA, selective data transition, RISE with SAP, GROW with SAP, system conversion, fit-to-standard, technical debt, kode Z/custom code, ABAP Cloud, SAP BTP, ECC end-of-maintenance, SUM/DMO, SAP Readiness Check)
- [x] 3 internal links — BACA JUGA (hub SAP Clean Core), migrasi-erp-ke-cloud, low-code-platform ✓
- [x] ≥1 external authoritative citation — 2 SAP Support Portal URLs ✓
- [x] FAQ 5–7 Q&As — actual: 7 ✓
- [x] 2 image placeholders (up to 3) — actual: 2 ✓
- [x] ≥1 list + ≥1 table — numbered list in H2 #5 + decision table in H2 #2 ✓
- [x] Word count 1,200–1,500 — actual: 1,354 ✓

### D. Soltius framing discipline (product_matrix.md + style_guide §11)

- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP" — PASS ("mendampingi perusahaan dalam mengevaluasi")
- [x] ≤3 Soltius self-mentions — actual: 3 (H2 #5 mid-body + conclusion + CTA website)
- [x] No unverifiable superlatives — PASS
- [x] SAP/partner product names + specs match product_matrix.md / dossier — PASS
- [x] Closing uses a company_profile.md positioning line — PASS ("SAP Platinum Partner melalui United VARs dengan rekam jejak sejak 1998")
- [x] Soft website CTA present as the FINAL line, after the conclusion — PASS (line 143: "Untuk mendiskusikan kesiapan migrasi S/4HANA dan kondisi clean core di perusahaan Anda, kunjungi soltius.co.id.")
- [x] BACA JUGA callout present in body — PASS: "**BACA JUGA:** [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide)." placed after H2 #1 definitional section; anchor = exact keyword "SAP Clean Core"; URL = https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide ✓

### E. Anti-cannibalization spot check

- Closest prior articles for this keyword: `sap-clean-core-01` through `sap-clean-core-04` (articles_history/index.json shows 0 committed articles; brief records angles as: 01 definitional, 02 technical/code, 03 maturity scoring, 04 extension architecture)
- Subtopic overlap with sap-clean-core-01 (Jaccard estimate per brief): ≈0.19 — shares S/4HANA Cloud, RISE with SAP, ECC terms, but kerangka is fully different (05 = migration approach comparison; 01 = clean core definition/enablement)
- Overlap with sibling 02 (ABAP/code remediation): low — 05 references kode Z in context of migration decision, not deep ABAP technical remediation process
- Overlap with sibling 03 (maturity scoring): low — 05 uses clean core condition as input variable, not the scoring methodology
- Overlap with sibling 04 (extension architecture): low — 05 references BTP/side-by-side only in passing
- **Verdict: distinct angle confirmed**

### F. Image-brief completeness (images.json)

- [x] JSON parses — PASS (valid JSON confirmed)
- [x] One entry per IMAGE_NN placeholder — 2 placeholders in body (IMAGE_01, IMAGE_02); 2 entries in images.json ✓
- [x] Each entry has alt_id (≤125 chars) — IMAGE_01: 81 chars ✓; IMAGE_02: 82 chars ✓
- [x] Each entry has caption_id — both present in Bahasa Indonesia ✓
- [x] Each entry has visual_direction — both present in Bahasa Indonesia with detailed design specs ✓
- [x] Each entry has suggested_asset_type — IMAGE_01: "diagram"; IMAGE_02: "infographic" ✓
- [x] All text in Bahasa Indonesia — PASS
- [x] No "real SAP screenshot" requirement flagged — PASS (both are original infographics per sourcing_note)
