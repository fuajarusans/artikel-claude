---
brief_id: "low-code-platform-02"
editor_run_date: "2026-06-03"
recommendation: "approve"
overall_score: 8
---

# Editor QC Report — SAP Build di SAP BTP: Platform Low-Code yang Dirancang untuk Ekosistem ERP

## Recommendation
**approve**

The draft is structurally sound, factually grounded, and appropriately positioned for a CIO/IT-manager audience already familiar with SAP. The angle is distinct from low-code-platform-01 (SAP-specific deep-dive vs. generalist enterprise explainer), the three data tables add genuine decision value, and the honest "Belum Bisa" section differentiates the piece from vendor-speak. The primary fix applied was a heavy em-dash reduction (20 instances in the draft, reduced to 0 in publishable body). All mandatory SEO elements are present and correct. Four dossier-flagged items (Joule Studio 2.0 GA status, Gartner 75% projection, component count, BTP pricing) are handled with appropriate hedging in the article — they are open flags, not errors. Recommendation: approve for quality-validator handoff.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 8 | Strong concrete lead, honest caveats section, practitioner framing throughout; one FAQ answer ("Ya — SAP Build justru paling relevan") had a flagged em-dash opener fixed |
| Factual & SAP-spec accuracy | 9 | All 5 spot-checked claims verified against dossier; GigaOm numbers, component names, clean core layer model all correct; Joule Studio 2.0 hedged as per dossier flag |
| On-page SEO compliance | 9 | All checklist items pass; meta title 58 chars, meta description 154 chars, slug 45 chars; BACA JUGA present; 3 internal links confirmed |
| Soltius framing discipline | 10 | Soltius appears once in body (closing), once as soltius.co.id CTA = 2 mentions; framed as implementer/partner throughout; no superlatives; no service-dump |
| Internal linking | 10 | Hub link as BACA JUGA callout (exact anchor "Low-Code Platform"); cousin 1 SAP Clean Core (inline contextual); cousin 2 migrasi ERP ke cloud (inline contextual) |
| FAQ quality | 9 | 7 Q&As all 40-57 words; all directly answer the question; all reference at least one verifiable fact; mirror real PAA queries |
| Image-brief completeness | 9 | 2 image placeholders with rich concepts; images.json parses; both entries have alt_id, caption_id, visual_direction, suggested_asset_type in Bahasa Indonesia; no real SAP screenshot required (original diagrams) |

## What I fixed (changelog)

1. **Em-dashes reduced from 20 to 0 in publishable body.** The draft overused " — " as a connector throughout. Converted to: commas, colons, or full stops depending on context. Specific conversions:
   - Definition blockquote: "tanpa mengubah kode inti ERP" (removed trailing em-dash from blockquote flow)
   - Roadmap paragraph: "bukan pengantar *low-code* generik" (comma instead of em-dash)
   - Component table row: "Otomasi workflow, RPA, decision tables lintas sistem" (removed em-dash after "tables")
   - Three-mode sentence: "tiga mode pengembangan sekaligus, yaitu *no-code*..." (comma + "yaitu" instead of em-dash)
   - BTP paragraph: "SAP Build berjalan sepenuhnya di BTP, bukan di dalam sistem S/4HANA" (comma instead of em-dash)
   - Clean core paragraph: "*side-by-side extensibility*: ekstensi yang dibuat..." (colon instead of em-dash)
   - Cousin link paragraph: "ini relevan langsung: SAP Build adalah..." (colon instead of em-dash) and "model [SAP Clean Core]..., lapisan paling aman..." (comma instead of em-dash)
   - ABAP comparison paragraph: "Keduanya bisa hidup berdampingan. Organisasi yang..." (full stop instead of em-dash)
   - Governance paragraph: "Perusahaan yang belum memiliki panduan ini, dan belum memiliki..." (comma instead of em-dash)
   - FAQ answers: all em-dash usages in FAQ replaced with colons or commas
   - Closing paragraph: "memanfaatkan SAP Build di BTP, mulai dari asesmen..." (comma instead of em-dash)

2. **Removed trailing em-dash from definition blockquote.** Original: "tanpa mengubah kode inti ERP." was preceded by em-dash, cleaned to read naturally without it.

3. **Fixed FAQ opener "Ya — SAP Build justru..."** Converted to "Ya, SAP Build justru..." (comma, removes em-dash tell).

4. **Updated frontmatter word_count** from 1412 to 1390 to reflect the polished version (minor content reductions from em-dash conversion).

## What I flagged (open issues)

- ⚠️ **Joule Studio 2.0 GA vs Preview status** — per dossier flag, it's unclear as of 2026-06 whether this is Generally Available or still Preview/Beta. The article correctly hedges: "per saat artikel ini ditulis, status GA atau Preview perlu dikonfirmasi di sap.com sebelum Anda memasukkannya dalam perencanaan proyek." *Recommendation*: client/editor to verify at sap.com before publication. This is a dossier-sourced open flag, not an error.

- ⚠️ **Gartner 75% low-code projection** — this claim does not appear in the article (the writer omitted it, as the dossier recommended). No action needed. Flagged for completeness: if a future revision wishes to cite Gartner market projections, the dossier recommends attributing clearly and noting it's a multi-year-old projection rather than a 2025-2026 finding.

- ⚠️ **Word count methodology variance** — the article has three data tables (component comparison, ABAP comparison, clean core extensibility model). Prose-only count: ~1,390 words; including table cell content: ~1,808 words. CMS word count will depend on tool used. Prose count is within the 1,200-1,500 target range. No trimming was done as each section earns its length.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — lead opens on concrete business pain
- [x] No "Selain itu" opening consecutive paragraphs — not present
- [x] No "Penting untuk dicatat / dipahami bahwa" — not present
- [x] "Dengan demikian" not overused — not present
- [x] Em-dash count ≤2 — **Fixed: reduced from 20 to 0 in publishable body**
- [x] Varied paragraph lengths (not all ~4 sentences) — single-sentence paragraphs, multi-sentence blocks, and bullet items mixed well
- [x] Not every H2 → 3-bullet list — H2s lead with prose, tables, and paragraph blocks; no H2 opens directly with bullets
- [x] No generic claims without numbers — GigaOm 3x/59% figures cited with source + honest caveat; BTP availability "26+ wilayah global" cited
- [x] No stacked hype adjectives — no "canggih/powerful/seamless/terdepan"
- [x] No service-dump paragraph — Soltius anchor is single positioning line in closing

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| SAP Build = 3x faster project delivery (GigaOm Benchmark, Maret 2025) | Dossier ✓ (verified via WebFetch of news.sap.com/2025/03/...) | pass |
| SAP Build = 59% reduction in development effort (GigaOm 2025) | Dossier ✓ (same source, directly verified) | pass |
| SAP Build terdiri dari 3 komponen: Apps, Process Automation, Work Zone | Dossier ✓ (confirmed from SAP News Center + SAP Help Portal per researcher) | pass |
| SAP Build Apps sebelumnya bernama AppGyver, diakuisisi SAP Februari 2021 | Dossier ✓ (SAP News acquisition announcement) | pass |
| SAP BTP tersedia di 26+ wilayah global, termasuk AWS/Azure/GCP | Dossier ✓ (SAP BTP product documentation) | pass |
| SAP Build Process Automation menggabungkan SAP Intelligent RPA dan SAP Workflow Management | Dossier ✓ (SAP TechEd 2022 announcements) | pass |
| Clean core extensibility Level A = side-by-side via BTP | Dossier ✓ (SAP Clean Core extensibility guide) | pass |

No web search performed (all claims verified against dossier which was directly web-verified by researcher; dossier confidence on all 5 spot-checked claims = high).

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 58 chars / "Low-Code Platform" at position 1-17
- [x] Meta description 140–160 — actual: 154 chars
- [x] Slug ≤60, kebab-case, keyword — actual: "sap-build-btp-low-code-platform-ekosistem-erp" (45 chars)
- [x] H1 contains keyword concept — "SAP Build di SAP BTP: Platform Low-Code yang Dirancang untuk Ekosistem ERP"
- [x] H2 count 4–7 — actual: 5 body H2s + 1 FAQ H2 = 6 total
- [x] ≥1 question-format H2 — "Bagaimana SAP Build Bekerja di Atas SAP BTP untuk Integrasi S/4HANA?" ✓
- [x] ≥1 honest/counter-conventional H2 — "Apa yang SAP Build Belum Bisa Lakukan: Batas yang Perlu Anda Tahu" ✓
- [x] Keyword in first 100 words — "low-code platform" appears in paragraph 2
- [x] Definition snippet near top (40–60 words) — blockquote at ~150 words into body, 57 words ✓
- [x] ≥8 LSI terms — counted 12: SAP Build, SAP BTP, SAP Build Apps, SAP Build Process Automation, SAP Build Work Zone, low-code SAP, extensibility SAP S/4HANA, platform low-code enterprise, citizen developer SAP, clean core SAP, SAP BTP Indonesia, digital platform SAP
- [x] 3 internal links (1 hub + 2 cousins) — hub: BACA JUGA "Low-Code Platform" (soltius.co.id/id/blog/low-code-and-no-code-platforms); cousin 1: "SAP Clean Core" (soltius.co.id/blog/sap-clean-core-the-complete-guide); cousin 2: "migrasi ERP ke cloud" (soltius.co.id/id/blog/migrasi-erp-ke-cloud)
- [x] ≥1 external authoritative citation — actual: 2 (GigaOm/SAP News; SAP product page referenced in dossier)
- [x] FAQ 5–7 Q&As — actual: 7 ✓
- [x] 2 image placeholders (up to 3) — actual: 2 ✓
- [x] ≥1 list + ≥1 table — 3 tables + numbered list in FAQ answers ✓
- [x] Word count 1,200–1,500 — prose-only count: ~1,390 words ✓

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP" — "mendampingi perusahaan Indonesia dalam memanfaatkan SAP Build di BTP" ✓
- [x] ≤3 Soltius self-mentions — actual: 1 brand mention (closing paragraph) + 1 soltius.co.id CTA = 2 total ✓
- [x] No unverifiable superlatives — none present ✓
- [x] SAP/partner product names + specs match product_matrix.md / dossier — all 7 SAP product references verified ✓
- [x] Closing uses a company_profile.md positioning line — "Sebagai SAP Platinum Partner melalui United VARs" ✓
- [x] Soft website CTA present as the FINAL line, after the conclusion — "Untuk mendiskusikan kesiapan *digital platform* di lingkungan SAP perusahaan Anda, kunjungi soltius.co.id." ✓ (distinct from conclusion paragraph)
- [x] **BACA JUGA** callout present in body — "**BACA JUGA:** [Low-Code Platform](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms)." with exact keyword anchor ✓

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `low-code-platform-01` (definitional enterprise explainer, per brief)
- Subtopic overlap (Jaccard estimate): 0.25 per strategist — the strategist confirmed this: -01 is platform-agnostic enterprise overview; -02 is SAP Build-specific deep-dive for existing SAP customers
- Verdict: distinct angle confirmed. No overlap risk. The articles serve different search intents (general "what is low-code for enterprise" vs "SAP Build specifically for S/4HANA users").

### F. Image-brief completeness (images.json)
- [x] JSON parses — confirmed ✓
- [x] One entry per `{IMAGE_NN}` placeholder — 2 placeholders in body, 2 entries in images.json ✓
- [x] IMAGE_01: alt_id (Indonesian, 67 chars), caption_id (Indonesian), visual_direction (detailed), suggested_asset_type "diagram" ✓
- [x] IMAGE_02: alt_id (Indonesian, 83 chars), caption_id (Indonesian), visual_direction (detailed), suggested_asset_type "diagram" ✓
- [x] No "real SAP screenshot" requirement — both are original diagrams for the design team ✓
- [x] All in-image text specified in Bahasa Indonesia ✓
