---
brief_id: "business-intelligence-01"
editor_run_date: "2026-06-02"
recommendation: "approve"
overall_score: 8
---

# Editor QC Report — Business Intelligence: Mengapa Data Berlimpah Belum Tentu Menghasilkan Keputusan Lebih Baik

## Recommendation
**approve**

The draft delivered a structurally complete, factually sound article that covers all mandatory elements: definition snippet, 5 H2s (all required types present), 7 FAQ items, 3 internal links (BACA JUGA + 2 cousins), 2 external citations, 2 image placeholders, comparison table, numbered list, and a soft website CTA as the final line. The four open flags from the dossier are all handled honestly in the text (McKinsey framing correct, 82% unverified claim absent, estimation labels explicit). After fixing em-dash overuse (6+ reduced to 0 in body prose, relocated in headings), adding the 7th FAQ, and minor comma/punctuation cleanup, the article is ready for the quality validator.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 8 | Good concrete-pain hook; no forbidden openers; varied paragraph length; occasional phrasing ("Ini bukan masalah SDM; ini masalah arsitektur") shows human editorial snap. Minor: some FAQ answers slightly list-y but within bounds. |
| Factual & SAP-spec accuracy | 9 | All 5 spot-checked claims pass against dossier. BusinessObjects BI 2025 Mainstream Maintenance dates correct. McKinsey 23× framing correct (customer analytics, 2014, explicitly labeled). No invented SAP product names. |
| On-page SEO compliance | 8 | All checklist items pass. Meta title 49 chars with keyword in first 30. Meta description 144 chars. Slug 57 chars, keyword-led. 7 FAQ items. 12+ LSI terms. Minor: H2 count is 5 (+ FAQ = 6 total) — within 4–7 range. |
| Soltius framing discipline | 9 | Exactly 3 Soltius mentions (1 mid-article + 1 closing positioning + 1 website CTA). No superlatives. Framed as implementer throughout. Closing positioning line is consulting/service anchor. |
| Internal linking | 10 | All 3 required links present and correctly placed: BACA JUGA after H2 #1 with exact anchor "Business Intelligence"; Data Warehouse Solutions in H2 #2 and H2 #5; migrasi ERP ke cloud in H2 #4 (BELUM section). |
| FAQ quality | 8 | 7 Q&As covering all PAA queries from brief. Answers range 40–80 words. Direct, one-fact-per-answer. Added 7th FAQ (UKM besar) from dossier. |
| Image-brief completeness | 9 | JSON parses; 2 entries matching 2 placeholders in body; each has alt_id, caption_id, visual_direction, suggested_asset_type in Bahasa Indonesia. No "real SAP screenshot" required — both are original diagram/infographic. |

## What I fixed (changelog)

1. **Em-dashes reduced from 6+ to 0 in body prose.** Replaced all body em-dashes with commas, parentheses, colons, or restructured sentences:
   - "spreadsheet finansial — semakin lama" → "spreadsheet finansial, semakin lama" (comma)
   - "— bagian yang jarang ditulis —" → removed double em-dash, rewrote clause
   - "ETL — Extract, Transform, Load —" → "ETL (ETL: *Extract, Transform, Load*)" (colon + parentheses)
   - "ERP, CRM, keuangan, rantai pasokan —" in blockquote → "(ERP, CRM, keuangan, rantai pasokan)" (parentheses)
   - "kaca spion dan speedometer —" → colon replaced with parentheses
   - H2 "Kapan Perusahaan BELUM Perlu BI — dan Apa yang Harus Diselesaikan Dulu" → comma: "Kapan Perusahaan BELUM Perlu BI, dan Apa yang Harus Diselesaikan Dulu"

2. **Added 7th FAQ ("Apakah BI cocok untuk perusahaan menengah?")** sourced from dossier FAQ draft. Removed the Rp 50 miliar threshold (dossier flagged it as unsourced — replaced with qualitative indicator: "3 sistem data atau lebih yang tidak terintegrasi").

3. **"Di sisi lain" / transition cleanup:** Removed the mid-article "bagian yang jarang ditulis" callout from inside the H2 itself (moved that observation inline to blend naturally). This reduced a slight self-congratulatory AI-tell.

4. **Em-dash in comparison table:** Removed the bold "✅ Selalu — fondasi" em-dash from the table cell → "Selalu — fondasi" (acceptable in table context as visual separator, but replaced with plain dash for consistency): "Selalu — fondasi" → "Selalu (fondasi)".

5. **Comma splice repair in closing paragraph:** Removed em-dash from "mengubahnya menjadi insight — dan itulah" → replaced with comma and restructured.

6. **Word count updated in frontmatter:** 1,421 → 1,463 (after adding 7th FAQ item).

## What I flagged (open issues)

- ⚠️ **SAP.com definition URL (403 on fetch)** — The dossier notes that `https://www.sap.com/products/data-cloud/cloud-analytics/what-is-business-intelligence.html` returned 403 when fetched directly. The citation is listed in the frontmatter `external_citations` but there is no inline hyperlink to it in the body text. The definition in the article is attributed simply as "(SAP)" in the blockquote. *Recommendation*: This is an open flag, not an error. The definition framing is consistent with SAP's documented position across other sources. If the URL is live at publication time, the CMS editor should add the hyperlink. This does not block approval.

- ⚠️ **McKinsey 23× statistic (2014 customer analytics)** — Properly hedged and attributed in the article ("Menurut riset McKinsey (2014), perusahaan yang intensif menggunakan *customer analytics*..."). The 12-year age of the study is a mild risk for a live-read reader, but the article does not claim it as recent BI data. *Recommendation*: Accept as-is with the framing that is already in the text. If a more recent citation surfaces during validation, swap it.

- ⚠️ **Mordor Intelligence as primary market-size source** — USD 41.16 billion figure is from Mordor Intelligence (medium confidence per dossier), not Gartner or IDC. The article attributes it correctly ("Mordor Intelligence"). *Recommendation*: Acceptable with attribution. If Gartner or IDC numbers are accessible at publication time, consider replacing for stronger authority signal.

- ⚠️ **"82% Indonesian companies" claim** — Correctly ABSENT from the article. The dossier flagged this as unverifiable; the writer removed it. Confirmed not present.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — PASS. Lead opens on concrete business paradox.
- [x] No "Selain itu" opening 2+ consecutive paragraphs — PASS. No "Selain itu" at paragraph starts at all.
- [x] No "Penting untuk dicatat / dipahami bahwa" — PASS.
- [x] "Dengan demikian" not overused — PASS. Not present.
- [x] Em-dash count ≤2 — FIXED. Reduced from 6+ to 0 in body prose. One em-dash remains in the H2 heading (BELUM Perlu BI) — revised to comma in polished final.
- [x] Varied paragraph lengths — PASS. Mix of 1-sentence, 2-sentence, and 4–5-sentence paragraphs throughout.
- [x] Not every H2 → 3-bullet list — PASS. H2s use: bullet list, comparison table, numbered list, prose table, FAQ. Only 1 of 5 H2s opens with bullets.
- [x] No generic claims without numbers — PASS. All thresholds are concrete (>5 days, 3+ versions, >40%, 3–6 months, 9–18 months, USD 41.16B, 23×, until 2031).
- [x] No stacked hype adjectives — PASS. No "canggih/powerful/revolusioner/terdepan/seamless" present.
- [x] No service-dump paragraph — PASS. Single relevant service mention (Data and AI Consulting) in closing.

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| SAP BusinessObjects BI 2025 Mainstream Maintenance hingga akhir 2031 | Dossier: SAP Community official post (high confidence) | pass |
| SAP Analytics Cloud = SaaS yang menggabungkan BI, Planning, Predictive Analytics | Dossier: SAP Community official (high confidence) | pass |
| S/4HANA embedded analytics berbasis SAP Fiori, tanpa lisensi tambahan untuk KPI operasional | Dossier: SAP Help documentation (medium confidence — URL not fetched directly, but well-established) | pass — framing is conservative ("dapat memanfaatkan embedded analytics berbasis SAP Fiori") |
| McKinsey 2014: 23× lebih mungkin dalam akuisisi pelanggan (customer analytics intensif) | Dossier: McKinsey primary source found, high confidence | pass — properly framed with source and year |
| USD 41,16 miliar pasar BI global 2026 (Mordor Intelligence) | Dossier: Mordor Intelligence, medium confidence, aligned with other sources | pass with attribution |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 49 chars / "Business Intelligence" in position 1
- [x] Meta description 140–160 — actual: 144 chars
- [x] Slug ≤60, kebab-case, keyword — actual: "business-intelligence-data-berlimpah-keputusan-lebih-baik" (57 chars)
- [x] H1 contains keyword — "Business Intelligence: Mengapa Data Berlimpah..."
- [x] H2 count 4–5 content H2s (6 total including FAQ) — actual: 5 content H2s + 1 FAQ
- [x] ≥1 question-format H2 — "Kapan Sebuah Perusahaan Sungguh-sungguh Membutuhkan BI?"
- [x] ≥1 honest/counter-conventional H2 — "Kapan Perusahaan BELUM Perlu BI, dan Apa yang Harus Diselesaikan Dulu"
- [x] Keyword in first 100 words — present in lead paragraph
- [x] Definition snippet near top (40–60 words) — 52 words in blockquote after lead paragraph
- [x] ≥8 LSI terms — counted: 12+ (business intelligence adalah, BI, pengertian business intelligence, dashboard bisnis, KPI monitoring, SAP Analytics Cloud, data warehouse, ETL, single source of truth, data-driven, laporan manajemen otomatis, embedded analytics)
- [x] 3 internal links (1 hub + 2 cousins) — hub: Business Intelligence at soltius.co.id/id/blog/business-intelligence; cousin 1: Data Warehouse Solutions; cousin 2: migrasi ERP ke cloud
- [x] ≥1 external authoritative citation — actual: 2 (SAP official + McKinsey 2014, plus Mordor Intelligence and Gartner MQ referenced in body)
- [x] FAQ 5–7 Q&As — actual: 7
- [x] 2 image placeholders — actual: 2 ({IMAGE_01} and {IMAGE_02})
- [x] ≥1 list + ≥1 table — actual: 1 numbered list (5 tanda), 2 bullet lists, 2 comparison tables (BI vs Analytics; BELUM Perlu BI)
- [x] Word count 1,200–1,500 — actual: 1,463

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP" — PASS. "Soltius, sebagai SAP Platinum Partner, menangani tahapan ini sebagai bagian dari layanan implementasi analytics."
- [x] ≤3 Soltius self-mentions — actual: 3 (mid-article aside in H2 #5; closing positioning in conclusion; soft CTA line)
- [x] No unverifiable superlatives — PASS. No "terbaik/nomor satu/terdepan."
- [x] SAP/partner product names + specs match product_matrix.md / dossier — PASS. SAC, BusinessObjects BI, S/4HANA embedded analytics all correctly named and scoped.
- [x] Closing uses a company_profile.md positioning line — PASS. "Melalui layanan Data and AI Consulting, Soltius membantu perusahaan mengubah data menjadi keputusan bisnis yang lebih cepat dan akurat."
- [x] Soft website CTA present as the FINAL line, after the conclusion — PASS. "Untuk mendiskusikan kesiapan Business Intelligence di perusahaan Anda, kunjungi soltius.co.id."
- [x] **BACA JUGA** callout present — PASS. Format: `**BACA JUGA:** [Business Intelligence](https://www.soltius.co.id/id/blog/business-intelligence).` Placed after H2 #1. Anchor text = exact keyword "Business Intelligence".

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: none — first article in this cluster (articles_history/index.json is empty; history confirms no prior business-intelligence articles)
- Subtopic overlap (Jaccard estimate): 0.0 (no prior articles)
- Verdict: distinct angle confirmed — no cannibalization risk

### F. Image-brief completeness (images.json)
- [x] JSON parses — PASS
- [x] One entry per `{IMAGE_NN: ...}` placeholder — PASS. 2 placeholders in body, 2 entries in JSON (IMAGE_01 and IMAGE_02)
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type (all Bahasa Indonesia) — PASS
  - IMAGE_01: alt_id (80 chars), caption_id, visual_direction (detailed), suggested_asset_type: "diagram"
  - IMAGE_02: alt_id (107 chars), caption_id, visual_direction (detailed), suggested_asset_type: "infographic"
- [x] Any "real SAP screenshot" requirement surfaced — N/A. Both images are original diagram/infographic; sourcing_notes specify design team creates from scratch (Figma/Canva). No SAP screenshot needed.
- [x] placeholder_kept_in_body: true for both entries — confirmed present in polished final

---

**Shipping verdict:** If this appeared on soltius.co.id tomorrow and a senior SAP analytics consultant read it, WEBARQ Promote would be proud. The paradox hook is sharp, the trust-builder section ("BELUM Perlu BI") is genuinely useful and rare in the SERP, the SAP product facts are accurate, and the Soltius closing is calibrated. Open flags are honest hedges, not errors. Sending to quality validator.
