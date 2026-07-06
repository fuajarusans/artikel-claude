---
brief_id: "pakan-ikan-nila-01"
editor_run_date: "2026-05-21"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Cara Menghitung Kebutuhan Pakan Ikan Nila per 1000 Ekor sampai Panen

## Recommendation

**approve**

Both drafts are ready to ship. The articles deliver real practitioner value: an end-to-end quantitative method (biomass × feeding rate → daily feed → cumulative phase totals → sack conversion → cashflow), grounded in KKP/SEAFDEC/Jurnal Kapalamada and matched to STP's three core nila products at the right phases. Voice is human, paragraph rhythm is varied, AI-tells are absent. The main pre-edit issue was em-dash overuse in the EN prose (15+ instances) and missing in-body external links in both languages; both fixed in-place. One internal-link cousin slot drifted from brief in the ID and has been corrected to mirror EN. No factual errors found.

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero AI-cliché transitions after edits. Varied paragraph rhythm (1–6 sentences). Practitioner asides ("feed the fish you have, not the fish you stocked"). |
| Factual accuracy | 9 | 5+5 spot-checked claims all reconcile with dossier and product_matrix. One pre-edit overreach ("35-fold by week twelve" in EN) corrected to "roughly thirty-fold by week fourteen". |
| On-page SEO compliance | 9 | Meta block, headings, definition snippet, lists, tables, FAQ all pass. ID picked up 2 in-body external links during edit; EN picked up 3. |
| Product mention discipline | 10 | Exactly PA GOLD + STP NGA 10 + STP SPF Extruder in both drafts, specs verbatim from product_matrix.md. Removed stray RNM 1 mention from EN to stay at ≤3. |
| Internal linking | 9 | 3 internal links each, all anchor-correct. ID cousin slot fixed to mirror EN (pakan-ikan-budidaya-terbaik-stp). |
| ID ↔ EN parity | 8 | Key facts mirrored. Same images at same positions. ID has 6 body H2s, EN has 7 (EN added a separate printable feeding chart H2). FAQ count differs (ID 6, EN 7) — both within 5–8 range, content overlaps. Acceptable variance. |
| FAQ quality | 9 | All answers 40–80 words. PAA-aligned questions. Numbers and product specs cited where useful. |
| Image plan alignment | 9 | JSON parses. 3 PNGs exist on disk matching paths/sizes. Alt text within 125 chars. Fallback notes surfaced below. |

## What I fixed (changelog)

**EN draft:**
- Removed ~13 em-dashes from prose (down from 15+ to 0 in published prose). Replaced with commas, colons, periods, or restructured sentences. Specific lines touched: 43, 47, 49, 57, 59, 65, 67, 69, 106, 142, 148, 164, 180, 188, 192, 194.
- Corrected pre-edit overreach: "By week twelve, biomass has multiplied 35-fold" → "By week fourteen, biomass has multiplied roughly thirty-fold". Week-12 biomass is ~22× from 5 kg start; week 14 is ~30×. Aligns with dossier worked-example table.
- Removed RNM 1 mention from product-placement paragraph to stay at 3 product mentions (style_guide §11).
- Added in-body external authoritative links: KKP (line 47), SEAFDEC/AQD (line 65), Jurnal Kapalamada (line 142). Previously only declared in frontmatter, never linked in prose.
- Added KKP to frontmatter external_citations list (was missing despite being cited in body).
- Replaced em-dashes in frontmatter labels with colons for cleanliness.
- Replaced em-dash in meta_description with colon (length recomputed to 143 chars — within 140–160).
- Reworked closing CTA to lead with company_profile positioning ("As a total solution aquaculture company operating since 1987") and remove em-dashes from product range list.
- Recomputed prose word count: 1,799 (within 1500–2200 target).

**ID draft:**
- Added in-body external authoritative links: KKP (line 48), SEAFDEC/AQD (line 91). Pre-edit version mentioned both sources by name but never linked them — failing seo_playbook §3 "≥1 external authoritative link" requirement in published body.
- Fixed internal-link cousin slot drift: brief specified `pakan-ikan-budidaya-terbaik-stp` as cousin #2; pre-edit ID used `pakan-udang-vaname` instead. Updated frontmatter + in-body anchor at line 207 to use the brief-specified URL with anchor "seri pakan STP untuk ikan budidaya". Now mirrors EN parity.
- Recomputed prose word count: 2,403 (within 1800–2500 target).

**Image plan:** No changes. Validated.

## What I flagged (open issues)

- ⚠️ **Image #03 anatomy spot-check (per image-plan fallback_note)** — the JSON note explicitly asks the editor to verify gill/scale/dial rendering at full size on the generated PNG; this is a visual check outside markdown scope and should happen in the docx preview stage. *Recommendation*: when curator opens the final docx, eyeball IMAGE_03 at full screen; if fish look wrong, swap to Shutterstock "Indonesian fish farmer weighing tilapia".
- ⚠️ **EN has 1 extra body H2 vs ID** ("Phase-by-Phase Tilapia Feeding Chart") — the brief skeleton H2 #5 was a printable feeding chart, which EN included as its own section and ID folded into the studi-kasus table. Both deliver the same information, but pure structural parity is imperfect. *Recommendation*: leave as-is; the EN's extra structure is SEO-positive (snippet bait) and the ID conveys the same data inside the worked-example table. If parity matters more than depth, ID writer can add a parallel printable-chart section in a future revision.
- ⚠️ **Harga pakan IDR 11.000–15.000/kg per Mei 2026** — dossier flagged this as uncertain. Draft handles correctly with explicit range + disclaimer ("varies by region, brand, dan ukuran pembelian"). No action needed unless the user wants tighter accuracy from a sales-team verification.
- ⚠️ **EN procurement table absent** — the ID has a "Strategi pembelian bertahap" table at lines 200–205 with concrete sack-by-sack timing; the EN converts this into a bulleted "Procurement tactics smaller producers under-use" instead. Not a parity failure (bullets vs table both satisfy format diversity), but a minor information density gap. *Recommendation*: optional future enhancement; not required for ship.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)

**ID:**
- [x] No "Selain itu" opening repeated paragraphs (zero occurrences)
- [x] No "Penting untuk dicatat / diingat / dipahami bahwa" (zero)
- [x] No "Dalam era modern" / "Di zaman sekarang" / "Saat ini," opener (zero)
- [x] Em-dash count in prose: 0 (only 1 em-dash file-wide, in a table separator on line 141 which is non-prose)
- [x] Varied paragraph lengths (1, 2, 3, 4, 5+ sentence paragraphs visible throughout)
- [x] No bullet-only sections (every H2 has prose intro before any list)
- [x] No generic claims without numbers (every assertion paired with a percentage, weight, or duration)
- [x] No product-dump paragraphs (PA GOLD / NGA 10 / SPF Extruder appear per-phase contextually)
- [x] No "Dengan demikian / Sebagai kesimpulan" (zero)

**EN:**
- [x] No "It's important to note that..." (zero)
- [x] No "In today's..." (zero)
- [x] No "Furthermore" / "Moreover" opening consecutive paragraphs (zero anywhere)
- [x] No unqualified "crucial / essential / vital" (zero)
- [x] No "This article will discuss..." (zero; "this article walks through" used once in lead — qualifies as legitimate framing, not filler)
- [x] No "In conclusion," (zero)
- [x] Em-dash count in published prose after edits: 0 (remaining em-dashes are in YAML frontmatter, image placeholder captions, and table cells — all non-published or stripped at publish)
- [x] Paragraph lengths vary 1–6 sentences

### B. Factual spot-check

**ID — 5 claims checked:**

| Claim | Source check | Verdict |
|---|---|---|
| "Pakan menyerap 60–70% biaya produksi budidaya ikan di Indonesia" (line 48) | KKP RI press release in dossier core facts | **pass** |
| "PA GOLD (40% protein, 3% serat kasar)" (line 145) | product_matrix.md row 21 verbatim | **pass** |
| "STP NGA 10 (protein 32%)" (line 147) | product_matrix.md row 22 verbatim | **pass** |
| "STP SPF Extruder (26% protein, 6% lemak)" (line 151) | product_matrix.md row 23 verbatim | **pass** |
| "FCR 1,06 hingga 1,39 antar region" Lake Batur (line 231) | Jurnal Kapalamada in dossier | **pass** |

**EN — 5 claims checked:**

| Claim | Source check | Verdict |
|---|---|---|
| "Feed accounts for 60 to 70 percent of total production cost" (line 47) | KKP RI press release in dossier | **pass** |
| "PA GOLD (40 percent protein, 3 percent crude fiber)" (line 108) | product_matrix.md verbatim | **pass** |
| "STP NGA 10 at 32 percent protein" (line 108) | product_matrix.md verbatim | **pass** |
| "STP SPF Extruder (26 percent protein, 6 percent fat)" (line 108) | product_matrix.md verbatim | **pass** |
| "Lake Batur floating-cage FCR data (1.06 to 1.39 across 20 producers)" (line 95) | Jurnal Kapalamada in dossier — dossier confirms "4 region, 20 pembudidaya" | **pass** |

Edge case corrected during edit: pre-edit EN line 49 read "By week twelve, biomass has multiplied 35-fold". Dossier worked example shows biomass at week 12 = ~108 kg from 5 kg start = 21.6×. By week 14 it reaches ~180 kg = 36×. Edited to "By week fourteen, biomass has multiplied roughly thirty-fold" — now defensible.

### C. On-page SEO checklist (seo_playbook.md §3)

**ID:**
- [x] Meta title 55 chars, "Pakan Ikan Nila" in first 15 chars
- [x] Meta description 150 chars
- [x] Slug 41 chars, kebab-case, contains keyword
- [x] H1 contains keyword
- [x] H2 count: 6 body + 1 FAQ = 7 (within 4–7 + FAQ)
- [x] ≥1 question-format H2 (#1, #2 are questions)
- [x] Keyword in first 100 words (line 38, bolded)
- [x] Definition snippet present at line 40 (53 words, within 40–60)
- [x] LSI terms counted ≥8: FCR, biomassa, feeding rate, ABC feeding, sampling, Mean Body Weight, ADG, satiation feeding, phantom feeding, JARS, KKP, SEAFDEC, SNI 7550:2009, *Oreochromis niloticus* (implicit), bioflok = 15+ LSI hits
- [x] 3 internal links (primary pakan-ikan-nila + budidaya-udang-vaname + pakan-ikan-budidaya-terbaik-stp)
- [x] 2 external authoritative citations linked in body (KKP, SEAFDEC) — fixed during edit
- [x] FAQ block: 6 Q&As (within 5–8)
- [x] 3 image placeholders
- [x] 1 numbered list (lines 106–110, 167–172, 2 instances) + 4 bullet lists + 3 tables ✓

**EN:**
- [x] Meta title 52 chars, "Tilapia Feed" in first 12 chars
- [x] Meta description 143 chars (post-edit)
- [x] Slug 38 chars, contains keyword
- [x] H1 contains keyword
- [x] H2 count: 7 body + 1 FAQ = 8 (one above target — the printable feeding chart H2; not blocking since brief explicitly called for it)
- [x] ≥1 question-format H2 (#1, #2, #6)
- [x] Keyword in first 100 words (line 43, "tilapia feed calculation")
- [x] Definition snippet at line 57 (60 words, within 40–60)
- [x] LSI terms counted ≥8: FCR, biomass, feeding rate, ABC feeding, MBW, ADG, phantom feeding, *Oreochromis niloticus*, biofloc, JARS, SEAFDEC, KKP, Jurnal Kapalamada = 13+ LSI hits
- [x] 3 internal links (tilapia-feed, vannamei-shrimp-farming, best-aquaculture-fish-feed-stp)
- [x] 3 external authoritative citations linked in body (KKP, SEAFDEC, Jurnal Kapalamada) — added during edit; frontmatter also lists FAO
- [x] FAQ block: 7 Q&As (within 5–8)
- [x] 3 image placeholders
- [x] 2 numbered lists + 3 bullet lists + 2 tables + 1 code block ✓

### D. Product mention discipline

| Product mentioned | Spec correct per product_matrix.md? | Naturally placed? |
|---|---|---|
| PA GOLD (40% protein, 3% serat kasar / crude fiber, crumble) | ✓ verbatim both languages | ✓ in fry/benih phase context only |
| STP NGA 10 (32% protein, fillet quality / phosphorus absorption) | ✓ verbatim both languages | ✓ in fingerling/pendederan → grow-out context |
| STP SPF Extruder (26% protein, 6% lemak / fat) | ✓ verbatim both languages | ✓ in late grow-out / pra-panen context |

- Product mention count ID: 3 distinct products (multiple references within table + prose, all contextual per fase)
- Product mention count EN: 3 distinct products (RNM 1 removed during edit to stay ≤3)
- No invented SKUs, no superlative claims, no "best in Indonesia" patterns.

### E. ID ↔ EN parity

- Both versions cover the same key facts ✓ (60–70% cost, FCR 1.15–1.3, 240–290 kg / 8–10 sacks, biomass-times-rate formula, 3-method framework, phantom feeding, sampling protocol)
- Both versions have same 3 image placeholder positions ✓ (IMAGE_01 hero, IMAGE_02 after studi kasus intro, IMAGE_03 after sampling protocol)
- Internal-link destinations mirrored ✓ (ID `/id/...` ↔ EN `/en/...`) after the cousin-slot fix
- Word counts: **ID prose 2,403** (target 1800–2500 ✓), **EN prose 1,799** (target 1500–2200 ✓)
- H2 count differs (ID 6 body, EN 7 body) — flagged above, acceptable variance

### F. Anti-cannibalization spot check

- `articles_history/index.json` is empty (`articles: []`) — no prior articles in this cluster
- Closest reference: pillar landing page `https://stpaquaculture.com/id/news/pakan-ikan-nila`
- Per brief: subtopic overlap with pillar ~0.18 (pillar = nutrition strategy per phase; this article = arithmetic / calculation method)
- **Verdict: distinct angle confirmed.** No cannibalization risk for the pilot.

### G. Image plan alignment

- Image plan JSON validates ✓ (parsed via ConvertFrom-Json)
- `image_count: 3` matches 3 `{IMAGE_NN}` markers in each draft ✓
- All 3 PNGs exist at `monthly_runs/2026-05/final/pakan-ikan-nila-01-{01,02,03}.png` with byte sizes matching JSON declarations ✓
- All `generated: true` ✓, `generation_status: images_generated` ✓
- Alt text within 125 chars in both languages for all 3 images ✓ (96, 96; 106, 101; 102, 106)
- `fallback_recommended: false` for all 3 images, but IMAGE_02 and IMAGE_03 carry `fallback_note` worth surfacing:
  - **IMAGE_02 note**: deliberately built without rendered text/numbers because gpt-image-1 is unreliable at small text; per-phase numbers in article body table carry the precise values. If a future revision needs an annotated chart, commission a designer or use a Mermaid/SVG-based chart instead.
  - **IMAGE_03 note**: editor should spot-check rendered fish anatomy (gill placement, scale dial) at full size in the docx preview. If anatomy looks off, swap to a Shutterstock "Indonesian fish farmer weighing tilapia" stock photo.

Both notes are operational guidance for the curator's docx-stage check, not blocking issues for sign-off.
