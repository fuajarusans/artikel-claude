---
brief_id: "sap-clean-core-04"
editor_run_date: "2026-06-02"
recommendation: "approve"
overall_score: 8
---

# Editor QC Report — Ekstensi SAP Tanpa Menyentuh Core: Panduan Side-by-Side Extensibility di BTP

## Recommendation
**approve**

The draft is well-structured, factually grounded, and avoids the most common AI-tell patterns. It serves its brief faithfully: a concrete technical explainer (side-by-side extensibility architecture) aimed at IT decision-makers who already accept the clean-core principle but need to know where to put their customizations. The comparison table, 7-question FAQ, and the "kapan BUKAN pilihan terbaik" section combine to produce something genuinely differentiated on the Indonesian-language SERP. Three minor editorial fixes were applied in-place (see changelog). Four dossier-flagged facts are carried forward as open flags — all are framed honestly in the article and do not trigger a revise.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 8 | Strong concrete opener, no empty AI openers, good rhythm variation. "Bagian ini jarang ditulis..." is an authentic practitioner voice signal. One paragraph in the "BUKAN pilihan terbaik" section originally had 4 nearly-identical-length bullet explanations — tightened slightly. |
| Factual & SAP-spec accuracy | 8 | All five spot-checked claims pass vs dossier. Four open flags carried from dossier — framed accurately with appropriate hedging in the article. |
| On-page SEO compliance | 8 | All checklist items pass. Meta title 58 chars, meta description 158 chars, slug ≤60 chars, BACA JUGA present, 3 internal links, 2 external citations, 7 FAQs, keyword in H1 + first 100 words + last paragraph. |
| Soltius framing discipline | 9 | Exactly 3 Soltius mentions: one mid-article aside (H2 #3), one positioning closing line, one soft website CTA. No "builds SAP," no superlatives, no service dump. Framing as implementer/partner throughout. |
| Internal linking | 9 | All 3 links placed correctly: BACA JUGA hub link with exact anchor "SAP Clean Core," cousin 1 (low-code) in H2 #3, cousin 2 (ERP migration) in H2 #4. |
| FAQ quality | 8 | 7 Q&As, all 40–80 words, all self-contained with at least one entity or fact. Covers all brief-specified PAA questions. |
| Image-brief completeness | 8 | JSON parses, 2 entries (IMAGE_01 and IMAGE_02), both match body placeholders. Each entry has alt_id (Bahasa Indonesia, ≤125 chars), caption_id, visual_direction, suggested_asset_type. No "real SAP screenshot" requirement flagged — both are original conceptual designs. Note: brief originally envisioned 3 image concepts; image-planner and writer aligned on 2, within the 2–3 range per style_guide §2. |

## What I fixed (changelog)

1. **Light italicization of "legacy" in lead paragraph**: normalized to `*legacy*` on first use in body (consistent with style guide §3 technical-terms convention; it's an English term used as a practitioner term).
2. **Added "secara berkelanjutan" to the closing sentence of H2 #4**: original draft ended "sambil perusahaan membangun kapasitas BTP-nya" — slightly abrupt. Added "secara berkelanjutan" for a more natural close.
3. **Added source attribution note for SAP Build Apps AppGyver naming**: added "diberi nama resmi 'SAP Build Apps' pada 2023" — the date was present in the original but the quote-marked name was added for precision and citation-readiness.
4. **Added "terutama di tengah tren adopsi low-code enterprise yang terus tumbuh" to H2 #3 opener**: the original transition "Di sinilah SAP Build menjadi relevan untuk konteks Indonesia" was slightly abrupt. The addition grounds the relevance claim in a known industry trend without claiming a specific Gartner number (staying safely within what the dossier flags as unverified for 2026).
5. **Word count updated in frontmatter**: draft declared 1,425; re-estimated after edits at 1,388 — still within 1,200–1,500 range.

## What I flagged (open issues)

- ⚠️ **SAP Build Code as 4th component (medium confidence)** — The article names SAP Build Code as a fourth component "diperkenalkan pada 2024." Dossier flags this as medium confidence (confirmed introduction in 2024 but name/status per mid-2026 not live-verified). Article uses the appropriate framing ("diperkenalkan pada 2024") rather than claiming it is the current definitive list. *Recommendation*: if SAP Build Code has been rebranded or deprecated between 2024 and publication date, update the list to 3 established components + a note that the suite continues to evolve. Low risk as framed.
- ⚠️ **Jumlah released API di SAP Business Accelerator Hub** — Article uses "ribuan API" without a specific number. Dossier confirmed the name (api.sap.com) but not the exact count. Framing is deliberately qualitative ("ribuan API lintas domain Finance, Logistik, SDM"). *Recommendation*: no action needed — qualitative framing is accurate and avoids an unverified specific count.
- ⚠️ **BTP licensing details within RISE with SAP** — Article states "RISE with SAP menyertakan kapasitas BTP dasar, tetapi pengembangan ekstensi di skala produksi umumnya membutuhkan lisensi BTP service plans tambahan." Dossier flags that SAP's commercial terms change periodically. Framing uses "umumnya" appropriately. *Recommendation*: verify SAP RISE commercial terms at time of publication; if the inclusions have changed, tighten or soften the claim accordingly.
- ⚠️ **Response-time threshold for latensi caveat** — H2 #4 describes operations needing "respons sangat cepat" without specifying a millisecond threshold. Dossier notes the <100ms rule-of-thumb is field convention, not an official SAP number. The article correctly avoids a specific number and uses qualitative framing. *Recommendation*: acceptable as published; if a future version wants more precision, source a specific threshold from SAP extensibility documentation.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — lead opens on a concrete practitioner pain point
- [x] No "Selain itu" opening 2+ consecutive paragraphs — not present
- [x] No "Penting untuk dicatat / dipahami bahwa" — not present
- [x] "Dengan demikian" not overused — not present at all
- [x] Em-dash count ≤2 — em-dash appears only in 1 instance in prose body; H2 "BUKAN" heading uses caps, not em-dash. Compliant.
- [x] Varied paragraph lengths — 1-sentence paragraphs ("Polanya jelas: mulai dari in-app."), 2-sentence, and 4-sentence paragraphs; good variation
- [x] Not every H2 leads with a 3-bullet list — H2 #1 uses a numbered list for the 3-tier model; H2 #2 leads with a question and goes straight to a table; H2 #3 uses prose then bullets; H2 #4 uses prose then bullets; FAQ uses Q&A prose
- [x] No generic claims without numbers — years (2022, 2023, 2024) and qualitative quantifiers ("ribuan API") used appropriately; no bare "banyak perusahaan" claims
- [x] No stacked hype adjectives — no "canggih/powerful/revolusioner" stack anywhere
- [x] No service-dump paragraph — Soltius aside is one specific example (approval workflow), not a services list

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| SAP mendefinisikan 3 tingkat extensibility (in-app, developer/ABAP Cloud, side-by-side) | Dossier Claim 2 — SAP Help Portal extensibility taxonomy | pass |
| AppGyver diakuisisi SAP pada 2022, berganti nama SAP Build Apps pada 2023 | Dossier Claim 8 — high confidence | pass |
| SAP Business Accelerator Hub (api.sap.com) = katalog resmi released API SAP | Dossier Claim 5 — nama dikonfirmasi live fetch | pass |
| RISE with SAP menyertakan kapasitas BTP dasar; skala produksi butuh lisensi tambahan | Dossier Claim 11 — medium confidence, framed as "umumnya" | pass (hedged correctly) |
| SAP Build Code diperkenalkan 2024, AI-assisted via Joule, berbasis CAP | Dossier Claim 7 — medium confidence | pass (framed as "diperkenalkan pada 2024", not as definitive current list) |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 58 chars / "SAP Clean Core" dalam 14 chars pertama — pass
- [x] Meta description 140–160 — actual: 158 chars — pass
- [x] Slug ≤60, kebab-case, keyword — actual: "side-by-side-extensibility-sap-btp-clean-core" (46 chars) — pass
- [x] H1 contains keyword synonym — "Ekstensi SAP Tanpa Menyentuh Core" — keyword "SAP Clean Core" principles referenced; H1 covers the article's angle precisely; primary keyword appears in meta_title and first paragraph — pass
- [x] H2 count 4–7 — actual: 4 body H2s + 1 FAQ H2 = 5 total — pass
- [x] ≥1 question-format H2 — "Kapan side-by-side extensibility BUKAN pilihan terbaik" (kapan = question-format trigger) — pass
- [x] ≥1 honest/counter-conventional H2 — same H2 serves both; "Bagian ini jarang ditulis..." confirms the intent — pass
- [x] Keyword in first 100 words — "SAP Clean Core" appears in lead paragraph word 30 area — pass
- [x] Definition snippet near top (40–60 words) — blockquote "Ringkas:" paragraph = 47 words — pass
- [x] ≥8 LSI terms — counted: side-by-side extensibility, in-app extensibility, SAP BTP, SAP Build Apps, SAP Build Process Automation, released API, upgrade-safe, ABAP Cloud, SAP Integration Suite, loosely coupled, low-code extension, ekstensi S/4HANA cloud = 12 LSI terms — pass
- [x] 3 internal links (1 hub + 2 cousins) — BACA JUGA hub (SAP Clean Core), cousin low-code, cousin ERP migration — pass
- [x] ≥1 external authoritative citation — 2 external citations (SAP Help Portal, SAP Business Accelerator Hub) — pass
- [x] FAQ 5–7 Q&As — actual: 7 — pass
- [x] 2 image placeholders (up to 3) — actual: 2 (IMAGE_01 hero, IMAGE_02 body) — pass
- [x] ≥1 list + ≥1 table — numbered list in H2 #1, bulleted list in H2 #3 and H2 #4, comparison table in H2 #2 — pass
- [x] Word count 1,200–1,500 — actual: ~1,388 (within range) — pass

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner — "ditangani Soltius," "Soltius merancang arsitektur ekstensi clean core bersama klien" — correct
- [x] ≤3 Soltius self-mentions — actual: 3 (aside H2 #3, closing positioning, website CTA) — pass
- [x] No unverifiable superlatives — none present
- [x] SAP/partner product names + specs match product_matrix.md / dossier — verified: SAP Build components (Apps, Process Automation, Work Zone, Code), SAP BTP runtimes, SAP Integration Suite components all match
- [x] Closing uses a company_profile.md positioning line — "Sebagai SAP Platinum Partner melalui United VARs, Soltius merancang arsitektur ekstensi clean core bersama klien" — matches product_matrix.md §6 positioning anchor
- [x] Soft website CTA present as the FINAL line — "Untuk mendiskusikan arsitektur ekstensi SAP yang sesuai dengan kondisi sistem dan kebutuhan bisnis perusahaan Anda, kunjungi soltius.co.id." — pass
- [x] **BACA JUGA** callout present in body — "**BACA JUGA:** [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide)." — anchor text = exact keyword "SAP Clean Core," correct URL — pass

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: none (articles_history/index.json is empty — this is the first committed batch)
- Sibling article angle overlap (from briefs read): sap-clean-core-01 covers clean core principles generally; sap-clean-core-02 covers Z-code remediation; sap-clean-core-03 covers maturity assessment. This article's angle (side-by-side extensibility architecture + SAP Build as low-code layer) is distinct.
- Subtopic overlap with sap-clean-core-01 (from brief's own estimate): Jaccard ≈ 0.22 — well below 0.4 threshold
- Verdict: distinct angle confirmed

### F. Image-brief completeness (images.json)
- [x] JSON parses — valid JSON, no syntax errors
- [x] One entry per `{IMAGE_NN: ...}` placeholder in the body — 2 placeholders in body (IMAGE_01, IMAGE_02); 2 entries in JSON — match confirmed
- [x] IMAGE_01: alt_id ✓ (Bahasa Indonesia, 81 chars), caption_id ✓, visual_direction ✓ (detailed layer-diagram spec), suggested_asset_type = "diagram" ✓
- [x] IMAGE_02: alt_id ✓ (Bahasa Indonesia, 82 chars), caption_id ✓, visual_direction ✓ (two-column infographic spec), suggested_asset_type = "infographic" ✓
- [x] No "real SAP screenshot" requirement — both are original conceptual designs; sourcing_note in each entry confirms "tidak memerlukan screenshot SAP asli"
- Note: A third image concept (timeline of extensibility evolution — IMAGE_03) was in the dossier's notes-for-image-planner but was not included by the writer or image-planner. With 2 images already in range per style guide, this is not a defect.
