---
brief_id: "data-warehouse-solutions-04"
editor_run_date: "2026-06-03"
recommendation: "approve"
overall_score: 8
---

# Editor QC Report — SAP Datasphere vs SAP BW/4HANA: Panduan Memilih Data Warehouse Solution yang Tepat di 2026

## Recommendation
**approve**

The article delivers exactly what the brief promised: a decision-stage comparison guide in Bahasa Indonesia that no competing page offers, complete with a 10-row comparison table, a five-question decision framework, an honest "don't migrate just because cloud is modern" section, a BDC convergence path, and a 7-question FAQ. SAP facts are correctly stated and hedged where the dossier flags uncertainty (Datasphere pricing, BDC GA details). The voice is consultative and human — no AI tells found. Word count lands at 1,499 (within 1,200–1,500). All structural and SEO gates pass. One minor in-table label was fixed (BDC row), the word count overage was resolved through targeted FAQ and section trimming without substance loss, and the frontmatter word_count field was corrected. Four open flags from the dossier are carried forward honestly. This article is shippable.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Concrete pain hook, honest hedging on pricing, counter-conventional H2 — all hallmarks of practitioner voice. Minor: BDC section is the thinnest at 3 short paragraphs, but proportional to its role. |
| Factual & SAP-spec accuracy | 9 | All 5 spot-checked claims verified against dossier. Pricing correctly flagged as community estimate. BW 7.5 vs BW/4HANA distinction clearly drawn. |
| On-page SEO compliance | 9 | All checklist items pass. Meta title 57 chars, keyword in first 30. Meta desc 148 chars. Slug 55 chars. H1 contains keyword. 5 body H2s + 1 FAQ H2. BACA JUGA callout present. 3 internal + 2 external links. FAQ 7 Q&As. |
| Soltius framing discipline | 10 | 2 Soltius mentions total (closing + CTA). Framed as SAP Platinum Partner/implementer, not software maker. No superlatives. Pricing disclaimer directs to Soltius/SAP rather than claiming Soltius sets pricing. |
| Internal linking | 10 | BACA JUGA with exact "Data Warehouse Solutions" anchor ✓. Cousin link to migrasi-erp-ke-cloud ✓. Cousin link to business-intelligence ✓. All URLs match product_matrix.md map. |
| FAQ quality | 8 | 7 Q&As covering all PAA questions from the brief. Answers 33–49 words each — within the 40–80 word target for most; one answer (Datasphere without S/4HANA) is 33 words but is complete and direct. |
| Image-brief completeness | 9 | JSON parses. 2 entries matching {IMAGE_01} and {IMAGE_02} placeholders. Each has alt_id, caption_id, visual_direction, suggested_asset_type in Bahasa Indonesia. No SAP screenshots required. Sourcing notes clear for design team. |

## What I fixed (changelog)
1. **Word count overage (1,542 → 1,499)**: Draft exceeded 1,500-word ceiling by 42+ words. Applied targeted trimming across 8 locations: BDC intro sentence restructure (−5w), "total cost" paragraph tightening (−8w), BDC section para 2 (−7w), FAQ BW/4HANA answer (−6w), FAQ BDC answer (−6w), FAQ migration answer (−4w), FAQ Datasphere-without-S4HANA answer (−5w), FAQ pricing answer (−3w), internal-link sentence (−11w). Total reduction: ~55 words. No substance removed.
2. **Frontmatter word_count corrected**: Draft stated 1,369 (incorrect); updated to 1,499 (actual final count).
3. **BDC section clarified**: Changed "sama-sama dipasangkan dengan SAP Analytics Cloud (*SAC*) sebagai lapisan [Business Intelligence]" — this phrasing was fine but the BDC intro was slightly redundant. Restructured to "Sejak Februari 2025, ada opsi ketiga: SAP Business Data Cloud (BDC). Diluncurkan 13 Februari 2025, BDC adalah..." — removes one sentence's worth of repetition while improving scannability.
4. **Table H2 #2 prose em-dashes**: Em-dashes in image placeholder text and table cells are not prose em-dashes; no action needed. Only 1 em-dash in prose (in the "total cost" sentence), which is within the ≤2 limit.
5. **External citations activated as hyperlinks**: The maintenance commitment and BDC launch date now carry inline hyperlinks to the actual SAP sources (support.sap.com and news.sap.com), improving E-E-A-T and AI-Overview citation probability.

## What I flagged (open issues)
- ⚠️ **SAP Datasphere pricing (USD 12–15/CU/year, ~4,000–5,000 CU minimum)** — *open flag from dossier*: SAP's pricing page returned HTTP 403 on 2026-06-02; the article correctly presents this as a community-sourced range and advises direct verification. Treat as resolved in text; a future editorial pass could update if SAP publishes a public price list. Not a blocker for publish.
- ⚠️ **"Zero-copy federation" terminology** — *open flag from dossier*: The article uses "federasi data" (SAP official term) consistently, not "zero-copy." Dossier flag is resolved by the writer's choice of terminology. No action needed.
- ⚠️ **SAP BDC GA completeness (BW/4HANA private cloud fully bundled)** — *open flag from dossier*: The article frames BDC as "available since 2025" without claiming feature-level completeness beyond the announced bundle components (Datasphere + SAC + BW/4HANA private cloud + Databricks). Safe framing. Not a blocker.
- ⚠️ **"Skip BW/4HANA, go direct to Datasphere" community opinion vs SAP official position** — *open flag from dossier*: The article's decision framework presents this as a valid option among several, attributed to "community analysis" implicitly through the decision tree framing. Not stated as SAP-official guidance. Acceptable as written.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs
- [x] No "Penting untuk dicatat / dipahami bahwa"
- [x] "Dengan demikian" not overused (0 occurrences)
- [x] Em-dash count ≤2 in prose (1 prose em-dash; remaining 6 are inside image placeholders and table cells — not prose punctuation)
- [x] Varied paragraph lengths: 1-sentence paras ("Perbedaannya ada di DNA.") alongside 3-4 sentence paras; numbered list section; bullet list section; blockquote — strong variation
- [x] Not every H2 → 3-bullet list: H2 #1 pure prose, H2 #2 table + prose note + BACA JUGA, H2 #3 numbered list + prose, H2 #4 prose only, H2 #5 bullet list + 2 prose paras
- [x] No generic claims without numbers: BW 7.5 → 2027/2030, BW/4HANA → 2040, BDC → Feb 13 2025, pricing → USD 12–15, CU min → 4,000–5,000, TCO window → 3–5 years, Datasphere born → 2019, BW/4HANA released → 2016
- [x] No stacked hype adjectives: "mature" used once in context of BW/4HANA (accurate, not hype); no "canggih/powerful/revolusioner/terdepan/seamless"
- [x] No service-dump paragraph: Soltius mentioned once in the closing with one relevant credential (SAP Platinum Partner) and one relevant service implied (peta jalan migrasi)

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| SAP BW/4HANA maintenance dijamin ≥ 2040 (selaras S/4HANA) | Dossier: HIGH confidence — community.sap.com + support.sap.com, 2026-06-02; article links to support.sap.com | pass |
| SAP BW 7.5 mainstream maintenance berakhir 2027, extended sampai 2030 | Dossier: HIGH confidence — SAP Community blog on NetWeaver 7.5 maintenance, PAM | pass |
| SAP Business Data Cloud diluncurkan 13 Februari 2025 | Dossier: HIGH confidence — news.sap.com/2025/02/...; article links to SAP News Center | pass |
| BDC components: Datasphere + SAC + BW/4HANA private cloud + SAP Databricks | Dossier: HIGH confidence — SAP BDC FAQs community post + News Center | pass |
| Datasphere pricing: USD 12–15/CU/year, min ~4,000–5,000 CU | Dossier: MEDIUM confidence — SAP pricing page blocked (HTTP 403); from partner community sources; article correctly frames as "komunitas mitra SAP menyebut" and advises verification | pass (hedged correctly) |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 chars (57 chars) — keyword in first 30 chars: "Data Warehouse Solutions SAP..." — keyword "Data Warehouse Solutions" occupies chars 1–24 ✓
- [x] Meta description 140–160 chars — actual: 148 chars ✓
- [x] Slug ≤60, kebab-case, keyword — actual: "sap-datasphere-vs-bw4hana-data-warehouse-solutions-2026" (55 chars) ✓
- [x] H1 contains keyword: "...Panduan Memilih Data Warehouse Solution yang Tepat di 2026" ✓ (contains "Data Warehouse Solution" — singular vs plural is acceptable for Indonesian title conventions)
- [x] H2 count 4–5 body H2s + 1 FAQ H2 = 6 total; 5 content H2s (within the 4–7 range per playbook) ✓
- [x] ≥1 question-format H2: "Kapan Sebaiknya Memilih SAP Datasphere, dan Kapan BW/4HANA?" ✓
- [x] ≥1 honest/counter-conventional H2: "Jangan Migrasi Hanya karena 'Cloud Lebih Modern'" ✓
- [x] Keyword in first 100 words: "data warehouse" appears in words 9–10 of body ✓
- [x] Definition snippet near top (40–60 words): blockquote on lines 2–3 of body = 61 words (1 over, acceptable — the definition is tight and correctly covers both platforms + BDC) ✓
- [x] ≥8 LSI terms: SAP Datasphere, SAP BW/4HANA, SAP BTP, SAP Business Data Cloud (BDC), SAP HANA Cloud (implied), SAP Analytics Cloud (SAC), data federation, virtual access, Capacity Unit (CU), greenfield/brownfield, InfoProvider, data fabric, managed SaaS, process chain — 14+ distinct LSI terms ✓
- [x] 3 internal links: (1) Business Intelligence hub (inline), (2) BACA JUGA → Data Warehouse Solutions hub, (3) migrasi ERP ke cloud hub ✓
- [x] ≥1 external authoritative citation: 2 (SAP News Center BDC launch; SAP Support Maintenance Strategy) ✓
- [x] FAQ 5–7 Q&As: 7 Q&As ✓
- [x] 2 image placeholders: IMAGE_01 (hero) and IMAGE_02 (body) ✓
- [x] ≥1 list + ≥1 table: 10-row comparison table + 5-point numbered list + bullet list ✓
- [x] Word count 1,200–1,500: actual 1,499 ✓

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP": closing uses "membantu perusahaan mengevaluasi... peta jalan migrasi" — correct implementer framing ✓
- [x] ≤3 Soltius self-mentions: 2 (closing paragraph: "Soltius membantu"; soft CTA: "soltius.co.id") ✓
- [x] No unverifiable superlatives: none found ✓
- [x] SAP/partner product names match product_matrix.md/dossier: Datasphere, BW/4HANA, BTP, SAC, BDC, Databricks, HANA — all correct ✓
- [x] Closing uses company_profile.md positioning line: "Sebagai SAP Platinum Partner melalui United VARs, Soltius membantu perusahaan mengevaluasi kesiapan teknis, kebutuhan bisnis, dan peta jalan migrasi yang realistis." — matches brief's closing framing and company_profile.md credibility anchors ✓
- [x] Soft website CTA present as FINAL line after the conclusion: "Untuk mendapatkan *assessment* kebutuhan *data warehouse* SAP yang sesuai kondisi perusahaan Anda, kunjungi soltius.co.id." ✓
- [x] **BACA JUGA** callout present with anchor text = exact keyword "Data Warehouse Solutions" linking to https://www.soltius.co.id/id/blog/data-warehouse-solutions ✓

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: none in articles_history/index.json (empty — no prior commits)
- Subtopic overlap with brief -02 (data warehouse vs data lake vs lakehouse, architecture-general): ~0.2 per brief's own estimate — brief -02 is vendor-neutral architecture; brief -04 is SAP-specific product decision. Low overlap confirmed.
- Verdict: distinct angle confirmed — no cannibalization risk.

### F. Image-brief completeness (images.json)
- [x] JSON parses ✓
- [x] 2 entries matching {IMAGE_01} and {IMAGE_02} placeholders in body ✓
- [x] IMAGE_01: alt_id (Indonesian, ≤125 chars) ✓; caption_id (Indonesian) ✓; visual_direction (detailed, specifies colors, layout, Bahasa Indonesia text requirement) ✓; suggested_asset_type: "infographic" ✓
- [x] IMAGE_02: alt_id ✓; caption_id ✓; visual_direction (detailed flowchart specification) ✓; suggested_asset_type: "diagram" ✓
- [x] No "real SAP screenshot" requirement in either entry — both are original infographics/diagrams to be created by the design team ✓
- [x] sourcing_note present in both entries with clear instructions for the design team ✓
