---
brief_id: "business-intelligence-03"
editor_run_date: "2026-06-02"
recommendation: "approve"
overall_score: 8
---

# Editor QC Report — Embedded Analytics di SAP S/4HANA: BI Operasional Real-Time Tanpa Lapisan Tambahan

## Recommendation
**approve**

Draft quality is strong: the angle is original (embedded analytics as underused value already in the S/4HANA license), the voice is consultative and human, the structure follows the brief exactly, all three internal links are in place, and the BACA JUGA callout is correctly formatted. The main editorial intervention was aggressive reduction of em-dashes (30 in the raw draft → 2 in body prose), which eliminated the clearest anti-AI signal. All SAP facts check out against the dossier; open flags from the researcher are handled with appropriate hedging. Word count 1,440 is within the 1,200–1,500 target range. Article is shippable.

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 8 | Strong after em-dash reduction; "Bagian ini jarang ditulis" + honest hedging on timeline land well |
| Factual & SAP-spec accuracy | 9 | All 5 spot-checked claims pass; open flags correctly hedged (Finance 350+ framed as "lebih dari 350", timeline as "patokan lapangan") |
| On-page SEO compliance | 9 | All checklist items pass; meta description 158 chars, slug 57 chars, meta title 59 chars |
| Soltius framing discipline | 9 | Exactly 3 mentions; no superlatives; "implements/supports" framing throughout |
| Internal linking | 10 | 3 links in correct positions; BACA JUGA format exact; cousin links contextually placed |
| FAQ quality | 9 | 7 Q&As, all 40–80 words, answers self-contained and specific |
| Image-brief completeness | 9 | 2 entries, both complete with alt_id, caption_id, visual_direction, suggested_asset_type in Bahasa Indonesia |

## What I fixed (changelog)

1. **Em-dash reduction (critical)**: Raw draft had 30 em-dash occurrences in body prose — far exceeding the style guide's ~2 limit. Fixed by replacing em-dashes with commas, colons, or full stops in all prose paragraphs and the FAQ. Final prose count: 2 em-dashes in one H2 heading (structural, used as a paired set-off "Bisa — dan Tidak Bisa —") + 0 in body prose.
2. **Soft CTA em-dash removed**: "mendampingi — kunjungi" replaced with "mendampingi. Kunjungi" to clear the final em-dash from the CTA line.
3. **Meta description trimmed**: 161 chars → 158 chars. Removed redundant word "memberi" → rephrased opener slightly.
4. **Slug trimmed**: 61 chars → 57 chars. Removed "sap-" prefix from slug (kept "s4hana" which still contains the product reference; "Business Intelligence" and "embedded-analytics" remain prominent).
5. **Blockquote definition cleaned**: em-dash after "platform ERP" removed; replaced with comma to keep sentence flow.
6. **H5 "Pertama/Kedua/Ketiga" section em-dashes**: Replaced 3 em-dashes in barrier explanations with colons ("proses transaksi — pembelian berjalan" → "proses transaksi: pembelian berjalan") and commas ("*business users* — bukan hanya super users IT" → "*business users*, bukan hanya super users IT").
7. **H2 "Mengapa..." title**: Removed the em-dash ("Walau Sudah Dibayar" title was already comma-separated — confirmed clean).
8. **word_count frontmatter**: Updated from 1,490 (draft) to 1,440 (final after edits).

## What I flagged (open issues)

- ⚠️ **Angka pasti pre-built Fiori analytical apps** — dossier flags this as medium confidence; draft correctly avoids locking in "1.800+" and uses "lebih dari 350" for Finance, "ribuan" overall. *Status: handled by writer; open flag preserved for transparency. No action needed.*
- ⚠️ **Timeline 4–8 minggu** — dossier flags as medium confidence, no official SAP figure. Draft labels it "patokan lapangan, bukan spesifikasi resmi SAP" in both body and FAQ. *Status: handled correctly; honest hedge is present.*
- ⚠️ **Gartner / analis industri reference** — dossier could not access Gartner MQ directly. The draft makes no Gartner claim, which is correct. *Status: non-issue; draft does not overclaim.*
- ⚠️ **No Indonesia-specific case study** — dossier found no public SAP embedded analytics case study from an Indonesian company. Draft uses generic framing ("dalam proyek enhancement pasca go-live, Soltius kerap menemukan...") which is appropriate. *Status: handled.*

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)

- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — PASS. Lead opens with a concrete business scene (manager calling IT every Monday).
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — PASS. Not used.
- [x] No "Penting untuk dicatat / dipahami bahwa" — PASS. Not found.
- [x] "Dengan demikian" not overused — PASS. Not used.
- [x] Em-dash count ≤2 in body prose — PASS after editing (2 in H2 heading, 0 in paragraphs).
- [x] Varied paragraph lengths — PASS. Mix of 1–4 sentence paragraphs throughout.
- [x] Not every H2 → 3-bullet list — PASS. 5 content H2s; 2 use tables, 2 use numbered lists with prose, 1 uses bold-lead prose paragraphs.
- [x] No generic claims without numbers — PASS. "lebih dari 350 analytical apps", "4–8 minggu", "3–5 KPI prioritas" all grounded.
- [x] No stacked hype adjectives — PASS. No "canggih/powerful/seamless/terdepan".
- [x] No service-dump paragraph — PASS. One mid-article Soltius aside, one closing CTA.

### B. Factual & SAP-spec spot-check

| Claim | Source check | Verdict |
|---|---|---|
| Embedded analytics termasuk lisensi standar S/4HANA, tidak ada biaya tambahan | Dossier: high confidence — SAP Community Knowledge Base, SAP Community Blog | PASS |
| Arsitektur tiga lapis: HANA in-memory → CDS views → Fiori Launchpad | Dossier: high confidence — SAP Help Portal, SAP Learning Journey | PASS |
| Finance: lebih dari 350 analytical apps (framed conservatively) | Dossier: medium confidence (351 found, dynamic); draft uses "lebih dari 350" | PASS (hedged appropriately) |
| 4–8 minggu aktivasi untuk modul prioritas dengan data bersih | Dossier: medium confidence — labeled "patokan lapangan, bukan spesifikasi resmi SAP" | PASS (hedged correctly) |
| SAC sebagai layer komplementer, bukan pengganti embedded analytics | Dossier: high confidence — SAP Community decision-framework article | PASS |

**Note**: The draft's statement that SAP Fiori Apps Reference Library has "ribuan" total apps is well-grounded in the dossier (16,000+ total across all categories; ratusan analytical specifically). No web probe needed — all 5 claims verifiable from dossier.

### C. On-page SEO checklist (seo_playbook.md §3)

- [x] Meta title ≤60 chars, keyword in first 30 — actual: 59 chars / "Business Intelligence" at position 1–21. PASS.
- [x] Meta description 140–160 chars — actual: 158 chars. PASS.
- [x] Slug ≤60, kebab-case, keyword — actual: 57 chars, "embedded-analytics-s4hana-business-intelligence-real-time". PASS.
- [x] H1 contains keyword — "Business Intelligence" present in H1. PASS.
- [x] H2 count 4–7 — actual: 5 content H2s + 1 FAQ H2 = 6. PASS.
- [x] ≥1 question-format H2 — "Apa Itu...", "Apa yang Bisa...", "Bagaimana Cara Memulai..." = 3 question H2s. PASS.
- [x] ≥1 honest/counter-conventional H2 — "Mengapa Embedded Analytics Sering Tidak Dimanfaatkan, Walau Sudah Dibayar". PASS.
- [x] Keyword in first 100 words — "Business Intelligence" appears in lead paragraph. PASS.
- [x] Definition snippet near top (40–60 words) — blockquote in first ~150 words, ~57 words. PASS.
- [x] ≥8 LSI terms — counted: embedded analytics, SAP S/4HANA, SAP Fiori, CDS views, SAP HANA, SAP Analytics Cloud, KPI, real-time analytics, dashboard, laporan real-time ERP, BI operasional, data master, Fiori Launchpad, drill-down = 14 distinct terms. PASS.
- [x] 3 internal links (1 hub + 2 cousins) — hub: Business Intelligence; cousin 1: migrasi ERP ke cloud; cousin 2: Data Warehouse Solutions. PASS.
- [x] BACA JUGA callout in correct format: `**BACA JUGA:** [Business Intelligence](https://www.soltius.co.id/id/blog/business-intelligence).` — placed after first H2. PASS.
- [x] ≥1 external authoritative citation — 2 external citations in frontmatter (SAP Learning, SAP Community); SAP Community referenced inline (FAQ: "SAP Community Knowledge Base, 2024"). PASS.
- [x] FAQ 5–7 Q&As — actual: 7. PASS.
- [x] 2 image placeholders — actual: 2 ({IMAGE_01}, {IMAGE_02}). PASS.
- [x] ≥1 list + ≥1 table — numbered lists (4-step activation, 4-type Fiori tile list) + 2 comparison tables. PASS.
- [x] Word count 1,200–1,500 — actual: ~1,440. PASS.

### D. Soltius framing discipline

- [x] Soltius framed as implementer/partner — "mendampingi", "menemukan tiles", "mengidentifikasi dan mengoptimalkan". PASS. No "builds SAP" framing found.
- [x] ≤3 Soltius self-mentions — actual: 3 (mid-article aside in H2 "Cara Memulai" + closing CTA sentence + website CTA line). PASS.
- [x] No unverifiable superlatives — PASS. No "terbaik/nomor satu" found.
- [x] SAP product names + specs match product_matrix.md / dossier — SAP S/4HANA, SAP Fiori, SAP HANA, CDS views, SAP Analytics Cloud (SAC), SAP Analysis for Microsoft Office all correctly named. PASS.
- [x] Closing uses company_profile.md positioning line — "Sebagai SAP Platinum Partner melalui keanggotaan United VARs, Soltius mendampingi perusahaan..." matches pre-approved framing. PASS.
- [x] Soft website CTA present as FINAL line, after conclusion — "Untuk mengaktifkan potensi penuh analitik di sistem SAP S/4HANA Anda, tim Soltius siap mendampingi. Kunjungi soltius.co.id." is the last line. PASS.
- [x] BACA JUGA callout present with anchor text = exact keyword "Business Intelligence" linking to hub. PASS.

### E. Anti-cannibalization spot check

- **Closest prior articles**: business-intelligence-01 (definitional, general BI concepts); business-intelligence-02 (SAP Analytics Cloud deep-dive). articles_history/index.json is empty (no committed history yet).
- **Angle of this article**: embedded analytics as pre-existing value within S/4HANA license — the "unlock what you've already paid for" angle. Distinctly different from bi-01 (what is BI) and bi-02 (SAP Analytics Cloud platform).
- **Subtopic overlap (Jaccard estimate)**: ~0.2 with bi-01 (shares S/4HANA + BI; different audience/intent); ~0.25 with bi-02 (shares SAC + BI, but bi-02 covers SAC as primary, bi-03 mentions SAC only as contrast). Well below 0.4 threshold.
- **Verdict**: distinct angle confirmed. No cannibalization risk.

### F. Image-brief completeness

- [x] JSON parses — confirmed valid JSON.
- [x] One entry per `{IMAGE_NN}` placeholder — 2 placeholders ({IMAGE_01}, {IMAGE_02}); 2 entries in JSON. PASS.
- [x] IMAGE_01 has: alt_id (Bahasa Indonesia, 85 chars ≤ 125), caption_id (Bahasa Indonesia), visual_direction (detailed flat-design corporate spec), suggested_asset_type ("diagram"). PASS.
- [x] IMAGE_02 has: alt_id (Bahasa Indonesia, 89 chars ≤ 125), caption_id (Bahasa Indonesia), visual_direction (two-column infographic spec, color codes provided), suggested_asset_type ("infographic"). PASS.
- [x] No "real SAP screenshot" requirement — both are original illustrations from designer brief, with explicit notes that no SAP UI needs to be reproduced. PASS.
- Note: image-planner included a third concept note (Fiori Launchpad mockup) in dossier, but only 2 placeholders were placed in the article body. The brief specified up to 3; 2 is within range and appropriate for word count.
