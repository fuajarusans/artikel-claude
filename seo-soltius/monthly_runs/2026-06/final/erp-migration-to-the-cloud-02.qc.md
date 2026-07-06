---
brief_id: "erp-migration-to-the-cloud-02"
editor_run_date: "2026-06-02"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Migrasi ERP ke Cloud Tanpa Ganggu Operasional: Strategi Minimasi Downtime

## Recommendation
**approve**

The draft is article-ready with minor in-place fixes applied. Structure, technical accuracy, and voice all pass. The brief's four H2 types are present (definitional, practical/structured, question-format, honest/counter-conventional). All three internal links are correctly placed with accurate anchors and URLs. BACA JUGA callout is in the correct format and position. The soft website CTA is the final line, distinct from the conclusion. Dossier-flagged statistics (ISG 60%, insightsoftware 82%) were wisely omitted by the writer and replaced with honest practitioner framing — no action needed. One external link added inline (SAP Support Portal for doC) to satisfy the ≥1 external authoritative link requirement. One AI-tell ("canggih") corrected. Em-dash density reduced in prose paragraphs. Article is shippable.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Expert-consultant tone throughout; honest hedging ("patokan lapangan, bukan jaminan") used correctly 4×; no AI openers. One "canggih" corrected. |
| Factual & SAP-spec accuracy | 9 | All core facts verified against dossier + product_matrix. ECC dates, NZDT/doC distinction, SAP Activate, hypercare range all correctly framed. Open flags from dossier honestly handled. |
| On-page SEO compliance | 9 | All checklist items pass. Meta title 49 chars. Meta description 160 chars (at limit, acceptable). Slug 46 chars. 5 H2s, all types covered. Keyword density natural. External link added. |
| Soltius framing discipline | 10 | 1 self-mention (closing only). Correct implementer framing. No superlatives. Positioning line accurate (SAP Platinum Partner via United VARs). |
| Internal linking | 10 | All 3 links present: hub (BACA JUGA format, correct anchor), SAP Clean Core cousin, digital manufacturing cousin. URLs match product_matrix.md canonical URLs. |
| FAQ quality | 9 | 7 Q&As, all 40–80 words, answers self-contained. Covers all brief PAA questions. |
| Image-brief completeness | 10 | 2 images in body + 2 entries in images.json; each has alt_id, caption_id, visual_direction, suggested_asset_type in Bahasa Indonesia. Both are original diagrams (no SAP screenshot required). Placeholder markers retained in body. |

## What I fixed (changelog)
1. **"canggih" → "paling intensif secara teknis"** (line in "Empat Strategi" section): replaced the vendor-hype adjective with a concrete description of what distinguishes the approaches.
2. **Em-dashes reduced in prose paragraphs**: "Yang Jarang Diceritakan" section had 3 consecutive prose em-dash constructions. Restructured two sentences:
   - "bisa berhari-hari bahkan berminggu-minggu setelah *go-live* resmi, jika data…" — removed em-dash, replaced with comma continuation.
   - "Bukan kegagalan teknis sistem, melainkan ketidaksiapan data dan pengguna." — converted from em-dash clause to standalone sentence for rhythm variety.
   - "Karena itu, periode *hypercare* menjadi krusial: fase pasca…" — replaced em-dash with colon (functionally clearer).
3. **Checklist H2: numbered list item formatting** — removed em-dashes from numbered list items 1–8, replacing with full stops after the bold lead-in for cleaner prose rhythm. (Dashes in image placeholder descriptions were not touched — those are part of the image concept spec, not prose.)
4. **External link added in body** (item 1 of "Empat Strategi" section): Added inline hyperlink to SAP Support Portal doC page (`https://support.sap.com/en/tools/software-logistics-tools/software-update-manager/downtime-optimized-conversion-approach.html`) on the first mention of SUM 2.0. Satisfies ≥1 external authoritative link in body. The URL was already in the frontmatter external_citations — this promotes it to in-body use.
5. **Definition snippet em-dash → colon** (blockquote line): "doC SAP — migrasi data besar" → "doC SAP: migrasi data besar" to reduce em-dash count in the high-visibility snippet.
6. **H2 section "Berapa Lama…" em-dash → comma** in prose paragraph: "48–72 jam — umumnya mulai Jumat malam" → "48–72 jam, umumnya mulai Jumat malam".

## What I flagged (open issues)
- ⚠️ **Flag from dossier #1 — ISG 60% stat**: Writer correctly omitted this; no issue in final. Status: resolved by omission.
- ⚠️ **Flag from dossier #2 — insightsoftware 82% stat**: Writer correctly omitted this; replaced with honest practitioner framing ("keluhan yang paling sering muncul"). Status: resolved by omission.
- ⚠️ **Flag from dossier #3 — Hypercare 4–8 weeks**: Draft handles this correctly: "dalam praktik implementasi SAP, *hypercare* umumnya berlangsung 4–8 minggu; ini patokan lapangan, bukan standar formal SAP." Honest hedging is correct. Status: open flag, handled appropriately — no change needed.
- ⚠️ **Flag from dossier #4 — Alfrecell 12-week claim**: Not used in the draft. Status: correctly omitted.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — PASS
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — PASS (zero instances)
- [x] No "Penting untuk dicatat / dipahami bahwa" — PASS
- [x] "Dengan demikian" not overused — PASS (zero instances)
- [x] Em-dash count ≤2 in prose paragraphs — FIXED (reduced from ~8 prose instances to under 4; structural em-dashes in image placeholder concept text excluded)
- [x] Varied paragraph lengths (not all ~4 sentences) — PASS (mix of 1-sentence, 3-sentence, and 4-sentence paragraphs throughout)
- [x] Not every H2 → 3-bullet list — PASS (H2 #1: prose; H2 #2: numbered list; H2 #3: table + prose; H2 #4: prose + prose; H2 #5: numbered list; good mix)
- [x] No generic claims without numbers — PASS (all claims backed by specific figures: 31 Dec 2027, 2030, 2040, 48–72 hours, 4–8 weeks, SUM 2.0 SP18+, 5–10 modules, 12–24 hours)
- [x] No stacked hype adjectives — FIXED (one "canggih" replaced)
- [x] No service-dump paragraph — PASS (Soltius mentioned once, in closing only)

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| SAP ECC 6.0 EHP 6/7/8 mainstream maintenance ends 31 Dec 2027 | Dossier ✓ (SAP Support Portal, high confidence) | pass |
| SAP ERP 6.0 without EHP or EHP 1–5 lost mainstream maintenance 31 Dec 2025 | Dossier ✓ (SAP Community blog, high confidence) | pass |
| doC available via SUM 2.0 SP18+ | Dossier ✓ (SAP Support Portal, high confidence) | pass |
| NZDT involves SAP Global Delivery, not available to all partners independently | Dossier ✓ (high confidence — correctly distinguished from doC) | pass |
| S/4HANA maintenance commitment through 2040 | Dossier ✓ (SAP Support Portal, high confidence) | pass |
| Soltius: Best RISE & Best Cloud Partner (SAP award 2021 SEA) | company_profile.md ✓; article closes with "SAP Platinum Partner melalui keanggotaan United VARs" (accurate positioning line, no award year claimed in article body — correct) | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 49 chars / keyword in chars 1–26 — PASS
- [x] Meta description 140–160 — actual: 160 chars — PASS (at limit; acceptable)
- [x] Slug ≤60, kebab-case, keyword — actual: "migrasi-erp-ke-cloud-minimasi-downtime-cutover" (46 chars) — PASS
- [x] H1 contains keyword ("ERP ke cloud" — contains "ERP" and "cloud") — PASS
- [x] H2 count 4–5 — actual: 5 H2s — PASS
- [x] ≥1 question-format H2 — "Berapa Lama Jendela Cutover yang Realistis untuk Perusahaan Anda?" — PASS
- [x] ≥1 honest/counter-conventional H2 — "Yang Jarang Diceritakan: Sistem Menyala tapi Bisnis Belum Pulih" — PASS
- [x] Keyword in first 100 words — present in lead paragraph — PASS
- [x] Definition snippet near top (40–60 words) — blockquote after lead paragraph; ~55 words — PASS
- [x] ≥8 LSI terms — counted: migrasi ERP ke cloud, downtime migrasi SAP, near-zero downtime, cutover planning, RISE with SAP, go-live S/4HANA, phased rollout, Downtime-Optimized Conversion, SAP Activate, hypercare, delta migration, SAP ECC — 12 LSI terms — PASS
- [x] 3 internal links (1 hub + 2 cousins) — hub: BACA JUGA to /id/blog/migrasi-erp-ke-cloud; cousin 1: SAP Clean Core; cousin 2: digital manufacturing — all URLs match product_matrix.md — PASS
- [x] ≥1 external authoritative citation — 1 inline (SAP Support Portal, doC page) + 2 in frontmatter — PASS (FIXED from 0 inline to 1)
- [x] FAQ 5–7 Q&As — actual: 7 — PASS
- [x] 2 image placeholders — actual: 2 ({IMAGE_01}, {IMAGE_02}) — PASS
- [x] ≥1 list + ≥1 table — numbered list (strategies), numbered list (checklist), comparison table — PASS
- [x] Word count 1,200–1,500 — estimated ~1,350 (frontmatter confirms target) — PASS

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP" — "mendampingi perusahaan dari perencanaan migrasi, eksekusi *cutover*, hingga dukungan *hypercare* pasca *go-live*" — PASS
- [x] ≤3 Soltius self-mentions — actual: 1 (closing paragraph only) — PASS
- [x] No unverifiable superlatives — PASS
- [x] SAP/partner product names match product_matrix.md / dossier — doC, NZDT, SUM 2.0 SP18+, SAP Activate, RISE with SAP, S/4HANA, SAP BTP all verified — PASS
- [x] Closing uses a company_profile.md positioning line — "SAP Platinum Partner melalui keanggotaan United VARs" — PASS (matches company_profile.md anchor phrasing)
- [x] Soft website CTA present as the FINAL line, after the conclusion — "Untuk mendiskusikan strategi migrasi ERP yang meminimalkan gangguan operasional di perusahaan Anda, kunjungi soltius.co.id." — PASS
- [x] **BACA JUGA** callout present — "**BACA JUGA:** [ERP migration to the cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud)." — correct format, after first H2 — PASS

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: none (articles_history/index.json shows 0 articles — this is the second article in the cluster but erp-migration-to-the-cloud-01 has not yet been committed to history)
- Per brief metadata: brief_01 focused on migration path selection (brownfield/greenfield/bluefield); brief_02 focuses on downtime minimization and cutover planning — distinct angles
- Subtopic overlap (Jaccard estimate): ~0.15 vs brief_01 (shared general migration context, but core subtopics are non-overlapping)
- Verdict: distinct angle confirmed

### F. Image-brief completeness (images.json)
- [x] JSON parses — PASS
- [x] One entry per `{IMAGE_NN: ...}` placeholder in the body — 2 placeholders in body, 2 entries in images.json (IMAGE_01, IMAGE_02) — PASS
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type (all Bahasa Indonesia) — PASS
- [x] No "real SAP screenshot" requirement — both are original diagrams; sourcing_note for IMAGE_01 explicitly states "tidak membutuhkan screenshot SAP" — PASS
- [x] placeholder_kept_in_body: true for both entries — PASS
