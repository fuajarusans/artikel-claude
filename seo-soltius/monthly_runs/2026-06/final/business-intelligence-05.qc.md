---
brief_id: "business-intelligence-05"
editor_run_date: "2026-06-03"
recommendation: "approve"
overall_score: 8
---

# Editor QC Report — 5 Alasan Proyek Business Intelligence Gagal — dan Cara Mencegahnya

## Recommendation
**approve**

The article is well-structured, factually grounded, and genuinely useful to a CIO or IT lead evaluating a troubled BI project. The writer produced clean, human-sounding prose with a diagnostic angle that the SERP competition does not cover. After the edits applied in this pass, the article passes the anti-AI scan, the on-page SEO checklist, Soltius framing discipline, and image brief validation. Five dossier-flagged facts are handled with appropriate honest hedging throughout. The piece is shippable.

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Lead paragraph opens on a concrete CIO pain; paragraph lengths vary from 13 to 94 words; no AI-tell phrases found. One minor edit: em-dashes reduced from 33 to 0 in body prose. |
| Factual & SAP-spec accuracy | 8 | Core claims match dossier and product_matrix. Gartner figures hedged correctly. Dossier-flagged estimates (adoption rate threshold, MVP timeline) labeled as "patokan lapangan." |
| On-page SEO compliance | 9 | All checklist items pass. External Gartner link added to body. FAQ expanded from 5 to 7 Q&As. |
| Soltius framing discipline | 10 | Soltius mentioned twice (one positioning line in conclusion + soft CTA). Framed as implementer/partner throughout. No superlatives. No service-dump. |
| Internal linking | 10 | BACA JUGA callout correct (anchor = "Business Intelligence", hub URL correct). Both cousin links present with correct anchors. |
| FAQ quality | 9 | 7 Q&As covering all high-intent PAA queries. Each answer 40–80 words, direct, with sourced numbers. |
| Image-brief completeness | 9 | images.json parses; 2 entries matching both {IMAGE_NN} placeholders; all fields populated in Bahasa Indonesia (alt_id, caption_id, visual_direction, suggested_asset_type). No "real SAP screenshot" requirement flagged. |

## What I fixed (changelog)

1. **Em-dashes (CRITICAL):** Draft contained 33 em-dashes throughout body prose. Reduced to 0 in prose (H1 title and {IMAGE_NN} placeholder descriptions are exempt — they are not published article text). Replacements used: commas, colons, semicolons, or sentence breaks depending on context.
2. **Word count:** Draft estimated at ~1,359 (writer-declared); adding 2 FAQ entries brought total to ~1,451 (within 1,200–1,500). Trimmed verbose lead paragraph from 94-word opening sentence cluster by removing one redundant clause. Tightened the SAP Analytics Cloud paragraph.
3. **FAQ: 5 → 7 Q&As:** Added "Apa itu change management dalam konteks Business Intelligence?" and "Bagaimana memastikan kualitas data sebelum membangun BI?" from the dossier-drafted FAQ block. These were in the dossier but omitted by the writer. Both are high PAA-match queries.
4. **External authoritative link added to body:** The draft referenced Gartner in prose but never hyperlinked in the article body (citations were frontmatter-only). Added one Gartner hyperlink (`https://www.gartner.com/en/articles/genai-project-failure`) in H2 "Mengapa Tingkat Kegagalan" paragraph, phrased naturally as "[Gartner mengidentifikasi](url)."
5. **"canggih" removed from H2 "Masalah BI Bukan Soal Tools":** The original phrased it as "platform yang lebih canggih." Replaced with "platform yang lebih baru" to avoid the hype-adj blacklist.
6. **H2 #2 heading changed:** "Tidak ada *business champion* — proyek hanya digerakkan IT" had an em-dash in the H2. Changed to colon format: "Tidak ada *business champion*: proyek hanya digerakkan IT."
7. **Frontmatter word_count updated:** 1,384 → 1,451.
8. **Conclusion em-dash removed:** "bisa diatasi — asalkan" → "bisa diatasi, asalkan" (comma).
9. **CTA final line tightened:** Separated into two clean sentences: "...langkah perbaikannya. Mulai dari soltius.co.id." (originally one run-on sentence with em-dash).

## What I flagged (open issues)

- ⚠️ **Gartner 70–80% figure (dossier flag):** Source is a secondary citation (Gartner via Yellowfinbi/designingforanalytics, not the original Gartner report). The draft hedged correctly with "menurut estimasi Gartner" — this framing is preserved in the final. *Recommendation*: acceptable as-is with current hedging. If client wants a direct Gartner link, the press release URL is in the external_citations frontmatter.
- ⚠️ **Adoption rate >60% and MVP 8–12-week timeline:** Both are practitioner rule-of-thumb, not peer-reviewed research. Both are correctly labeled "patokan lapangan" in the final. *Recommendation*: pass — honest hedging is in place.
- ⚠️ **ROI 112% / payback 1.6 years:** Writer correctly omitted this figure (Market.us source, not primary Gartner/Forrester). Not in the final — no issue.
- ⚠️ **No external link to CIO.com** ("4 reasons most companies fail at BI"): The dossier listed this as an authoritative source, but the writer did not hyperlink it and used Gartner instead. One external link (Gartner) is present. The SEO playbook requires 1–2 external links; one is satisfied. A second CIO.com link could strengthen E-E-A-T, but is not blocking. *Recommendation*: optional for the next revision cycle.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)

- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — PASS
- [x] No "Selain itu" opening 2+ consecutive paragraphs — PASS (0 occurrences)
- [x] No "Penting untuk dicatat / dipahami bahwa" — PASS
- [x] "Dengan demikian" not overused — PASS (0 occurrences)
- [x] Em-dash count ≤2 in article prose — PASS (0 in prose; 3 total including H1 title and image placeholder descriptions, which are exempt)
- [x] Varied paragraph lengths (not all ~4 sentences) — PASS (13 to 94 words/paragraph across 25 prose blocks)
- [x] Not every H2 followed by a 3-bullet list — PASS (H2s mix prose sections, bold-numbered lists, bullet lists, tables, and blockquote)
- [x] No generic claims without numbers — PASS (70–80%, 80%, 60%, 30%, 8–12 weeks, 3–5 KPI, 3 months all present)
- [x] No stacked hype adjectives — PASS after fix (removed "canggih")
- [x] No service-dump paragraph — PASS

### B. Factual & SAP-spec spot-check

| Claim | Source check | Verdict |
|---|---|---|
| 70–80% proyek BI tidak menghasilkan nilai (Gartner) | Dossier: medium confidence, secondary citation; framed as "menurut estimasi Gartner" | pass (hedged) |
| Gartner: 80% D&A governance initiatives akan gagal pada 2027 | Dossier: HIGH confidence, Gartner press release 28 Feb 2024 (URL verified in dossier) | pass |
| SAC menggabungkan BI, augmented analytics, dan planning; integrasi dengan S/4HANA | product_matrix.md + dossier: HIGH confidence (SAP official naming, confirmed 2025–2026) | pass |
| SAP Datasphere = single source of truth layer sebelum SAC | product_matrix.md + dossier: HIGH confidence (SAP Datasphere naming stable since 2023) | pass |
| Migrasi S/4HANA mensyaratkan data migration + data cleansing (Activate methodology) | Dossier: HIGH confidence (SAP Activate standard practice) | pass |

No SAP product names are invented. No ECC dates used (not relevant to this article). Soltius never described as building SAP.

### C. On-page SEO checklist (seo_playbook.md §3)

- [x] Meta title ≤60 chars, keyword in first 30 — actual: 51 chars, "Business Intelligence" at position 1–20 — PASS
- [x] Meta description 140–160 chars — actual: 148 chars — PASS
- [x] Slug ≤60, kebab-case, keyword present — actual: "alasan-proyek-business-intelligence-gagal-dan-cara-mencegah" (59 chars) — PASS
- [x] H1 contains keyword — "5 Alasan Proyek Business Intelligence Gagal..." — PASS
- [x] H2 count 4–7 — actual: 6 (within range) — PASS
- [x] ≥1 question-format H2 — "Bagaimana Mengukur Apakah Proyek BI Sedang di Jalur yang Benar?" — PASS
- [x] ≥1 honest/counter-conventional H2 — "Satu Hal yang Sering Disalahpahami: Masalah BI Bukan Soal Tools" — PASS
- [x] Keyword in first 100 words — PASS ("Business Intelligence" in lead paragraph)
- [x] Definition snippet near top (40–60 words) — blockquote "Ringkas:" = 55 words — PASS
- [x] ≥8 LSI terms — counted: proyek BI gagal, kegagalan implementasi, data quality, change management, business champion, adoption rate, data readiness assessment, SAP Analytics Cloud, single source of truth, SAP Datasphere, scope creep, ROI business intelligence (12 terms) — PASS
- [x] 3 internal links (1 hub + 2 cousins) — hub: soltius.co.id/id/blog/business-intelligence (via BACA JUGA); cousin 1: /id/blog/migrasi-erp-ke-cloud; cousin 2: /id/blog/data-warehouse-solutions — PASS
- [x] ≥1 external authoritative citation — 1 Gartner link in body — PASS
- [x] FAQ 5–7 Q&As — actual: 7 — PASS
- [x] 2 image placeholders — actual: 2 ({IMAGE_01}, {IMAGE_02}) — PASS
- [x] ≥1 list + ≥1 table — numbered list in H2 "5 Penyebab Utama"; comparison table in H2 "BI yang Berhasil vs BI yang Gagal"; bullet list in H2 "Leading Indicators" — PASS
- [x] Word count 1,200–1,500 — estimated: ~1,451 — PASS

### D. Soltius framing discipline (product_matrix.md + style_guide §11)

- [x] Soltius framed as implementer/partner — "Soltius mendampingi perusahaan" — PASS
- [x] ≤3 Soltius self-mentions — actual: 2 (one in conclusion, one in CTA) — PASS
- [x] No unverifiable superlatives — PASS
- [x] SAP/partner product names match product_matrix.md / dossier — SAC, SAP Datasphere, SAP S/4HANA all correct — PASS
- [x] Closing uses a company_profile.md positioning line — "Melalui layanan Data and AI Consulting, Soltius mendampingi perusahaan dari penilaian kesiapan data hingga program adopsi pasca go-live" — PASS
- [x] Soft website CTA present as FINAL line, after conclusion — "Jika proyek Business Intelligence Anda belum memberikan hasil yang diharapkan, tim konsultan Soltius siap membantu melakukan diagnosis dan merancang langkah perbaikannya. Mulai dari soltius.co.id." — PASS
- [x] BACA JUGA callout present — "**BACA JUGA:** [Business Intelligence](https://www.soltius.co.id/id/blog/business-intelligence)." — PASS (anchor = exact keyword "Business Intelligence", correct hub URL)

### E. Anti-cannibalization spot check

- Closest prior article for this keyword: None (articles_history/index.json is empty — no previously committed articles)
- Subtopic overlap (Jaccard estimate): N/A — no history
- Verdict: distinct angle confirmed — this is the only BI article committed; brief confirms low Jaccard (~0.15) vs. other batch articles in this cluster

### F. Image-brief completeness (images.json)

- [x] JSON parses — PASS
- [x] One entry per {IMAGE_NN} placeholder — 2 markers in body ({IMAGE_01}, {IMAGE_02}), 2 entries in JSON — PASS
- [x] Each entry has alt_id (≤125 chars) in Bahasa Indonesia — IMAGE_01: 84 chars; IMAGE_02: 103 chars — PASS
- [x] Each entry has caption_id in Bahasa Indonesia — PASS for both
- [x] Each entry has visual_direction in Bahasa Indonesia — PASS for both (detailed layout specs)
- [x] Each entry has suggested_asset_type — IMAGE_01: "infographic"; IMAGE_02: "diagram" — PASS
- [x] No "real SAP screenshot" requirement flagged — PASS (both are original infographics)
- (No PNGs produced — by design. Design team executes from this brief.)
