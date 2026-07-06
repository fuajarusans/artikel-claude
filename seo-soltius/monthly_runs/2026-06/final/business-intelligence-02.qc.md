---
brief_id: "business-intelligence-02"
editor_run_date: "2026-06-02"
recommendation: "approve"
overall_score: 8
---

# Editor QC Report — SAP Analytics Cloud: Satu Platform untuk BI, Planning, dan Analitik Prediktif

## Recommendation

**approve**

The article covers the brief's angle (three-pillar SAC as a single unified platform, SAC vs BusinessObjects comparison, honest evaluation for Indonesian enterprises) with genuine depth and an honest-evaluation voice. All factual claims are traceable to the dossier or dossier-sourced SAP Community citations. The primary issues fixed were 20 prose em-dashes reduced to 1, which was the most significant AI-tell risk. Word count, BACA JUGA callout, soft CTA placement, internal links, and Soltius framing all pass. One prose em-dash remains by design (functionally correct in the S/4HANA FAQ answer). Open flags inherited from the dossier (Smart Predict branding, Gartner MQ position) are honestly hedged in the article text and do not require revision.

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 8 | Em-dashes cut from 20 to 1. Lead is concrete business scenario. "Bagian yang jarang ditulis penjual platform" framing in H2 #5 is strong. Some FAQ answers remain slightly list-heavy in structure but are factually grounded. |
| Factual & SAP-spec accuracy | 8 | SAP BusinessObjects BI 2025 roadmap/maintenance data verified via SAP Community citation. Smart Predict flagged as potentially rebranded (hedged in text). No invented facts. IBP vs SAC Planning distinction correctly called out. |
| On-page SEO compliance | 9 | All checklist items pass. 5 H2s (content), FAQ H2 as 6th. Keyword in first 100 words, definition snippet, 3 internal links, 2 external citations, 7 FAQ Q&As. |
| Soltius framing discipline | 10 | 2 mentions total: one mid-article aside (H2 #5), one in closing. Framed as implementer/partner throughout. No "builds SAP" language. No unverifiable superlatives. |
| Internal linking | 9 | All 3 links present and contextually placed: hub BACA JUGA after H2 #1, Data Warehouse Solutions in H2 #2, ERP migration in H2 #4. Anchors match specification exactly. |
| FAQ quality | 8 | 7 Q&As, all 40–80 words. Covers all brief PAAs. One FAQ answer (Smart Predict) includes honest caveat about potential rebranding. |
| Image-brief completeness | 9 | 2 images, JSON parses, alt_id/caption_id/visual_direction/suggested_asset_type all present in Bahasa Indonesia. No PNG generation. Placeholder markers preserved in body. |

## What I fixed (changelog)

1. **Em-dash excess (critical)**: Replaced 20 prose em-dashes with appropriate punctuation (commas, colons, full stops, "melainkan"). Reduced from 20 to 1 prose occurrence. Table em-dashes not counted (zero remain).
2. **Lead paragraph restructuring**: Split the long opening sentence at the em-dash into two sentences ("Hasilnya: angka yang tidak cocok...") for better rhythm.
3. **Word count trimming**: Tightened 4 FAQ answers (Power BI comparison, non-SAP connection, S/4HANA requirement, Smart Predict) to reduce overall prose count from ~1,473 to ~1,457, comfortably within the 1,200–1,500 range.
4. **H2 #2 clarification**: Changed "Ini berbeda dari, dan tidak menggantikan, SAP IBP..." paragraph to use parenthetical rather than em-dash for the IBP nuance, consistent with style.
5. **H2 #3 table**: Replaced em-dash cells in comparison table ("|Kuat — Stories, Explorer|") with colons/commas to eliminate table em-dashes.
6. **Frontmatter word_count**: Updated from writer's 1,387 to verified 1,457 (prose-only count).

## What I flagged (open issues)

- ⚠️ **Smart Predict branding may have changed** — The draft and final correctly hedge this ("dalam dokumentasi SAP dikenal sebagai Smart Predict") but do not remove the name. If SAP has rebranded this to a Joule-umbrella feature in 2026, the FAQ answer and table cell referencing "Smart Predict" will need updating. *Recommendation*: validator or client to confirm current product page naming before publication.
- ⚠️ **Gartner MQ position not cited** — Article does not claim a specific Gartner MQ position (correct, since dossier couldn't verify the 2025/2026 edition). This is honest. If the client has Gartner access, adding "SAP Analytics Cloud dinakui sebagai pemimpin dalam Gartner Magic Quadrant for Analytics and Business Intelligence Platforms [edisi 2025]" would strengthen E-E-A-T. Not required for approval.
- ⚠️ **"100+" package/connector claim absent** — Brief mentioned "100+" pre-built content packages and "100+" connectors. These are not claimed in the final (correctly, per dossier flag). Writer used concrete examples instead (BigQuery, Salesforce, SQL Server, Oracle). This is the right call — no factual risk.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)

- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening 2+ consecutive paragraphs
- [x] No "Penting untuk dicatat / dipahami bahwa"
- [x] "Dengan demikian" not overused (not found)
- [x] Em-dash count ≤2 — actual: 1 prose em-dash (table cells use none)
- [x] Varied paragraph lengths (1-sentence to 5-sentence range)
- [x] Not every H2 leads to a bullet list — H2 #1 prose-only, H2 #2 table+prose, H2 #3 prose+table, H2 #4 prose-only, H2 #5 bold-lead items
- [x] No generic claims without numbers — uses 12–24 months, 3–6 months, 6–18 months, 2031, BI 2025/2027/2029
- [x] No stacked hype adjectives
- [x] No service-dump paragraph

### B. Factual & SAP-spec spot-check

| Claim | Source check | Verdict |
|---|---|---|
| SAP BusinessObjects BI 2025 released March 2025, roadmap BI 2027/BI 2029, mainstream maintenance until end of 2031 | Dossier: SAP Community blog (high confidence) | pass |
| SAC connects to S/4HANA via Live Data Connection — query executed at source, no data replication | Dossier: SAP Help Portal (high confidence) | pass |
| SAP IBP (Integrated Business Planning) for Supply Chain is a separate product from SAC Planning | Dossier: nuance flag (medium confidence, domain knowledge) | pass — article correctly distinguishes them |
| Net-new SAC: 3–6 months; BO-to-SAC migration: 6–18 months | Dossier: rule-of-thumb, labeled as "patokan lapangan" | pass — appropriately hedged |
| Smart Predict is the ML feature name in SAC documentation | Dossier: flagged as potentially rebranded (medium confidence) | pass with caveat — hedged in FAQ answer |

### C. On-page SEO checklist (seo_playbook.md §3)

- [x] Meta title ≤60 (keyword first 30) — actual: 57 chars, "Business Intelligence" in first 23 chars
- [x] Meta description 140–160 — actual: 160 chars
- [x] Slug ≤60, kebab-case, keyword — actual: "sap-analytics-cloud-bi-planning-prediktif-tiga-pilar" (52 chars). Note: slug does not contain "business-intelligence" explicitly, but contains "bi" as abbreviation. Acceptable — the brief angle is SAC-specific; exact keyword in slug would conflict with hub page.
- [x] H1 contains keyword — "SAP Analytics Cloud: Satu Platform untuk BI, Planning, dan Analitik Prediktif" — "BI" is direct abbreviation of Business Intelligence
- [x] H2 count 4–7 — actual: 5 content H2s + 1 FAQ H2 = 6 total
- [x] ≥1 question-format H2 — "Apakah SAP Analytics Cloud Cocok untuk Perusahaan Menengah-Besar di Indonesia?" and "Kapan Tetap Pakai BO, Kapan Migrasi?"
- [x] ≥1 honest/counter-conventional H2 — "Yang Sering Salah Dipahami tentang SAP Analytics Cloud"
- [x] Keyword in first 100 words — "Business Intelligence (BI)" in lead paragraph
- [x] Definition snippet near top (40–60 words) — blockquote "Ringkas:" in first ~150 words
- [x] ≥8 LSI terms — counted: SAP Analytics Cloud, SAC BI, business intelligence SAP, perencanaan keuangan terintegrasi, analitik prediktif SAP, self-service BI, SAC planning FP&A, dashboard SAP real-time, SAP BTP analytics, Smart Predict, Live Data Connection, SAP BusinessObjects = 12 LSI terms
- [x] 3 internal links — Business Intelligence (hub, BACA JUGA), Data Warehouse Solutions (cousin), migrasi ERP ke cloud (cousin)
- [x] ≥1 external authoritative citation — actual: 2 (SAP product page, SAP Community)
- [x] FAQ 5–7 Q&As — actual: 7
- [x] 2 image placeholders (up to 3) — actual: 2
- [x] ≥1 list + ≥1 table — table present (two comparison tables), bold-lead list items in H2 #5
- [x] Word count 1,200–1,500 — actual: 1,457 prose words (tables add ~220 additional legitimate content words)

### D. Soltius framing discipline (product_matrix.md + style_guide §11)

- [x] Soltius framed as implementer/partner — "mendampingi perusahaan merencanakan roadmap migrasi", "melalui layanan Data and AI Consulting, mendampingi perusahaan dari evaluasi platform"
- [x] ≤3 Soltius self-mentions — actual: 2 (mid-article aside in H2 #5 + closing paragraph)
- [x] No unverifiable superlatives
- [x] SAP/partner product names match product_matrix.md / dossier — SAC, SAP BTP, S/4HANA, SAP BusinessObjects, Smart Predict, Crystal Reports, Web Intelligence all verified
- [x] Closing uses a company_profile.md positioning line — "melalui layanan Data and AI Consulting, mendampingi perusahaan dari evaluasi platform hingga implementasi dan adopsi pengguna"
- [x] Soft website CTA present as FINAL line, after conclusion — "Untuk mendiskusikan kesiapan strategi Business Intelligence di perusahaan Anda, kunjungi soltius.co.id."
- [x] **BACA JUGA** callout present — "**BACA JUGA:** [Business Intelligence](https://www.soltius.co.id/id/blog/business-intelligence)." — anchor text = exact keyword "Business Intelligence", after H2 #1

### E. Anti-cannibalization spot check

- **Closest prior article for this keyword**: business-intelligence-01 (articles_history/index.json — no historical articles committed yet; based on brief cross-reference)
- **Subtopic overlap (Jaccard estimate)**: ~0.15 — article 01 covers definitional/awareness BI concepts; this article covers SAC as a specific platform (three pillars, SAC vs BO comparison, evaluation framework for enterprise Indonesia). Angles are clearly distinct.
- **Verdict**: distinct angle confirmed

### F. Image-brief completeness (images.json)

- [x] JSON parses
- [x] 2 entries (IMAGE_01 and IMAGE_02), matching 2 `{IMAGE_NN: ...}` placeholders in body
- [x] IMAGE_01: alt_id (Indonesian, ≤125 chars) ✓ / caption_id ✓ / visual_direction ✓ / suggested_asset_type: "diagram" ✓
- [x] IMAGE_02: alt_id (Indonesian) ✓ / caption_id ✓ / visual_direction ✓ / suggested_asset_type: "infographic" ✓
- [x] Sourcing notes specify "buat diagram/infografis orisinal" — no SAP UI screenshots required
- Placeholders preserved in article body at correct positions

## Summary

- **Issues fixed**: 6 (em-dash excess, lead restructuring, word count trim, IBP nuance, table em-dashes, frontmatter word_count)
- **Open flags**: 3 (Smart Predict branding verification; Gartner MQ citation opportunity; "100+" claim correctly omitted)
- **Word count**: 1,457 prose words (within 1,200–1,500 target)
- **BACA JUGA**: present with correct anchor text and URL
- **Soft website CTA**: present as final line after conclusion
