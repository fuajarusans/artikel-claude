---
brief_id: "data-warehouse-solutions-01"
editor_run_date: "2026-06-08"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Berapa Biaya Data Warehouse? Rincian TCO dan Komponen untuk Perusahaan

## Recommendation
**approve**

This is a strong, decision-useful article that fills a genuine SERP whitespace (no Indonesian-language piece breaks down data warehouse TCO by component). It hits the brief's intent exactly: five cost components, OpEx/CapEx economics, hidden costs, a 5-step budgeting framework, and an honest "when it's not worth it yet" section. Every flagged factual risk from the dossier is honored: no per-CU price is quoted, the USD talent/TCO figures are explicitly labelled as illustrative ERP/composite data (not SAP or Soltius), and SAP BW/4HANA (2040) is kept cleanly distinct from SAP BW 7.5 (2027/2030). The single dominant issue at intake was em-dash overuse — the strongest AI tell per style_guide §5, with ~17 em-dashes in body prose. I reduced prose em-dashes to one (the signature lead), converting the rest to commas, colons, semicolons, or parentheses, and fixed two small grammar slips along the way. Soltius framing is clean (2 mentions, implementer not builder, no superlatives), internal links are natural inline anchors matching the cousin map, GEO extractability is solid (40–60-word answer after every H2), and the structure (Kesimpulan + soft website CTA as final line) is correct. The only open items are minor and non-blocking: two alt_ids in images.json run ~15–25 chars over the 125-char guideline, and the final word_count is an editor estimate that the curator's tooling should confirm. Shippable.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Honest hedging, varied rhythm, practitioner asides ("di lapangan", "jarang ditulis kompetitor"). Em-dash overuse fixed. |
| Factual & SAP-spec accuracy | 10 | All 5 spot-checked claims verified vs dossier; every do-NOT-assert item honored; illustrative figures clearly labelled. |
| On-page SEO compliance | 9 | Meta/slug/H2/keyword/links/FAQ all pass. Added missing `date_modified` for freshness. |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after each of 5 H2s; one quotable point per paragraph; FAQ FAQPage-ready. |
| Soltius framing discipline | 10 | 2 mentions, both closing; "merancang/membantu" not "builds"; no superlatives; Data and AI Consulting anchor. |
| Internal linking | 10 | 3 inline anchors (hub in lead + 2 cousins), no BACA JUGA, matches product_matrix cousin map (DW → BI + ERP migration). |
| FAQ quality | 9 | 6 Q&As mirroring PAA; each 40–80 words, self-contained, one number each. |
| Image-brief completeness | 8 | 3 entries match 3 placeholders; all fields in ID; no SAP screenshot needed. Two alt_ids slightly over 125 chars (flagged). |

## What I fixed (changelog)
- Reduced body-prose em-dashes from ~17 to 1 (style_guide §5 caps at ~2). Converted pairs to parentheses or commas in: definition snippet, §1 paragraphs (lines on internal-cost factors and the talent figure), §2 (CapEx components, Datasphere CU sentence, HANA Cloud stop/start, BDC sentence), §3 (egress, talent bullet), §4 (source inventory step, TCO illustration), §5 (embedded-analytics aside, 100 TB sentence), all five FAQ answers, and the conclusion. Table-cell dashes and `{IMAGE_NN}` placeholder dashes left intact (formatting/design, not flowing prose).
- Fixed grammar: "Saat instance dimatikan, biaya compute berhenti meski storage tetap ditagih — berguna..." → split into two sentences ("...tetap ditagih. Ini berguna...").
- Fixed grammar: "Bagi pengguna Datasphere yang ada tidak ada perubahan wajib segera" → "Bagi pengguna Datasphere yang ada, tidak ada perubahan wajib segera;".
- Added `date_modified: "2026-06-08"` to the meta block (GEO §2a freshness requirement was missing).
- Updated frontmatter `word_count` from 1648 to 1657 (estimated post-edit; net +~9 words from em-dash-to-phrase swaps).

## What I flagged (open issues)
- ⚠️ **alt_id length in images.json** — IMAGE_02 (~149 chars) and IMAGE_03 (~142 chars) exceed the ≤125-char alt-text guideline; IMAGE_01 (~121) is fine. *Recommendation*: the image-planner trims both to ≤125, e.g. IMAGE_02 → "Diagram perbandingan cloud data warehouse (OpEx) vs on-premise (CapEx): provisioning, skalabilitas, dan biaya tersembunyi"; IMAGE_03 → "Diagram alur lima langkah menyusun anggaran data warehouse, dari inventarisasi sumber hingga cadangan kontingensi". Non-blocking — alt text is accurate and descriptive as-is.
- ⚠️ **word_count is an editor estimate** — Bash/word-count tooling was unavailable in this session, so 1657 is a hand-tallied figure (well inside 1,500–1,800). *Recommendation*: the curator confirms the exact count when building the .docx.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 occurrences
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 occurrences
- [x] "Dengan demikian" not overused — 0 occurrences
- [x] Em-dash count ≤2 — body prose now 1 (was ~17); fixed
- [x] Varied paragraph lengths — yes (1-sentence "Satu pos teknis..." through 5–6-sentence blocks)
- [x] Not every H2 → 3-bullet list — mix of prose, 2 tables, 1 numbered list, 2 bulleted lists
- [x] No generic claims without numbers — numbers throughout (CU, 2040/2027, 100 TB, 10 TB, 18–22%, 15–20%, 0,09/GB, 12–24 mo, 2–4 yr)
- [x] No stacked hype adjectives — none (no canggih/powerful/seamless/terdepan)
- [x] No service-dump paragraph — single Data and AI Consulting anchor in closing

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| SAP Datasphere replaced SAP Data Warehouse Cloud, Maret 2023 | dossier Claim 1 (news.sap.com) ✓ | pass |
| Datasphere minimum entry 4.300 CU → 1.532 CU/bulan sejak April 2024 | dossier Claim 3 (SAP Community, high) ✓ | pass |
| SAP BW/4HANA maintenance hingga akhir 2040; BW 7.5 berakhir 2027 (extended 2030) | dossier Claims 7 & 8 ✓ (kept distinct, honoring Flag 4) | pass |
| SAP Business Data Cloud diluncurkan Februari 2025; tidak ada perubahan wajib bagi pengguna Datasphere | dossier Claim 6 ✓ (framed as "arah terbaru", honoring Flag 5) | pass |
| AWS egress ~USD 0,09/GB untuk 10 TB pertama; egress ~15–20% belanja cloud | dossier Claim 10 (TechTarget) ✓, labelled "ilustrasi, bukan tarif SAP" | pass |
| (do-NOT-assert) no per-CU price quoted | dossier Flag 1 ✓ — article states SAP tidak mempublikasikan harga per-CU | pass |
| (do-NOT-assert) USD 268k talent + USD 350k–1,138k 5-yr TCO labelled illustrative ERP/composite | dossier Claims 13 & 15, Flag 2 ✓ — "bukan data SAP atau kuotasi Soltius" | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 49 chars; "Data Warehouse" within first 20
- [x] Meta description 140–160 — actual: 146
- [x] Slug ≤60, kebab-case, keyword — actual: `biaya-data-warehouse-tco-komponen` (33)
- [x] H1 contains keyword — "Data Warehouse" + "Biaya Data Warehouse" present
- [x] H2 count 4–5 — actual: 5 (plus FAQ + Kesimpulan)
- [x] ≥1 question-format H2; ≥1 honest/counter-conventional H2 — Q: "Biaya Apa yang Paling Sering Terlewat...?" / "Kapan...Belum Sepadan...?"; honest: "Kapan...Belum Sepadan..."
- [x] Keyword in first 100 words — "Data Warehouse Solutions" (bold) in lead
- [x] Definition snippet near top (40–60 words) — blockquote TCO definition, ~58 words
- [x] ≥8 LSI terms — counted: 12 (biaya data warehouse, TCO, cloud vs on-premise, OpEx/CapEx, consumption-based pricing, Capacity Unit, SAP Datasphere, SAP HANA Cloud, SAP BW/4HANA, egress, ETL, break-even)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: data-warehouse-solutions (hub, lead), business-intelligence (§5), migrasi-erp-ke-cloud (§5)
- [x] ≥1 external authoritative citation — actual: 2 (TechTarget, SAP News) in frontmatter + inline attributions
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 3
- [x] ≥1 list + ≥1 table — 2 tables, 1 numbered list, 2 bulleted lists
- [x] Word count 1,500–1,800 — actual: ~1,657 (editor estimate)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — all 5 H2s open with a self-contained answer (§1 ~55w, §2 ~50w, §3 ~50w, §4 ~48w, §5 ~50w)
- [x] Each body paragraph makes one independently quotable, verifiable point — yes (one claim + sourced fact per paragraph)
- [x] FAQ parseable for FAQPage schema; `dateModified` / freshness noted — FAQ clean ### Q / answer format; `date_modified: 2026-06-08` added to meta block

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP" — "merancang arsitektur"/"membantu perusahaan", correct
- [x] ≤3 Soltius self-mentions — actual: 2 (both in conclusion/CTA). Mid-article aside in §4 says "pengalaman implementasi lintas industri" without naming Soltius
- [x] No unverifiable superlatives — none
- [x] SAP/partner product names + specs match product_matrix.md / dossier — SAP Datasphere, SAP HANA Cloud, SAP BW/4HANA, SAP Business Data Cloud all correct
- [x] Closing uses a company_profile.md positioning line — Data and AI Consulting anchor (matches profile + product_matrix DW row)
- [x] Soft website CTA present as FINAL line — "...kunjungi soltius.co.id." after Kesimpulan, consultative tone
- [x] Hub link present as natural inline anchor in the lead — "[solusi data warehouse]" woven into the opening; no BACA JUGA

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `data-warehouse-solutions-04` (Datasphere vs BW/4HANA — product choice) and `erp-migration-to-the-cloud-03` (ERP TCO — different object)
- Subtopic overlap (Jaccard estimate): ~0.12 (only "SAP Datasphere" overlaps; the entire cost framework is new). No DW sibling covers TCO/cost structure.
- Verdict: distinct angle confirmed

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per `{IMAGE_NN}` placeholder — 3 placeholders (01/02/03) = 3 entries, markers match
- [~] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type (all Bahasa Indonesia) — all fields present and in ID; **alt_id length exceeds 125 for IMAGE_02 (~149) and IMAGE_03 (~142)** (flagged above); IMAGE_01 (~121) OK
- [x] Any "real SAP screenshot" requirement surfaced — all three sourcing_notes state "Tidak memerlukan screenshot SAP" (conceptual diagrams/infographic); none required
- (No generated PNGs to check — images are produced by the client's design team from this brief.)
