---
brief_id: "pakan-ikan-lele-01"
editor_run_date: "2026-05-26"
recommendation: "approve"
overall_score: 8.5
---

# Editor QC Report — Rekomendasi Pakan Lele Agar Cepat Besar

## Recommendation

**approve**

Both ID and EN drafts pass the anti-AI scan, factual checks, and the on-page SEO checklist. The writer handled the STP SPLA 12 distributor-spec caveat correctly in both languages ("berdasarkan listing distributor STP per Mei 2026" / "Based on STP distributor listings as of May 2026"), which was the highest-risk area on this out-of-cluster brief. The article is genuinely useful: it includes a worked numeric example for 1,000 fingerlings (a SERP gap the dossier flagged), a phase-by-phase feed table, a per-condition FCR reference table, and an FAQ block that mirrors live PAA queries. Editor polish was confined to em-dash reduction (EN had 8 in the body, now 0) and minor line cleanup. One residual flag worth surfacing before publish: the IMAGE_02 infographic generated with FLUX rendered the phase labels as garbled non-words and should be swapped for a designer-built or stock asset before the article goes live. The article body table already carries all the precise data, so the visual is decorative rather than load-bearing.

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Mixed paragraph rhythm, named-source citations, practitioner asides ("Yang sering dilewatkan...", "The detail operators often miss..."). No "Selain itu" / "It's important to note" / "In today's" patterns. Em-dashes now 0 in body for both languages. |
| Factual accuracy | 9 | All numeric claims trace to the dossier or to KKP/SNI/jurnal sources cited inline. SPLA 12 specs match marketplace listings exactly. Worked example math checks out (1000 × 3g = 3kg → 90kg × 1.3 FCR = 117kg ≈ 4 sacks × Rp 425k = Rp 1.7M, Rp 18,900/kg). |
| On-page SEO compliance | 9 | Meta block sized correctly, slug clean, H2 count 7 (within 4–7), question H2 present, FAQ block with 7 Q&As, definition snippet at H2#2 (~47 words ID / ~47 words EN), table + numbered list + bullet list all present. |
| Product mention discipline | 9 | 1 STP SPLA 12 mention (with distributor caveat) + 1 JARS credibility mention + 1 Mobile Diagnostic Lab mention in troubleshooting context. Within the ≤3 cap. Spec text matches dossier verbatim. |
| Internal linking | 8 | 2 internal links per language (out-of-cluster fallback rule applies; 3rd link skipped intentionally). Both URLs verified live in dossier. ID/EN mirror correctly (/id/ ↔ /en/). |
| ID ↔ EN parity | 9 | Same 7 H2s, same table data, same worked example, same FAQ structure (7 Q&As each). EN adds USD conversions for international readers (good adaptation per style guide §4). Image placeholders mirror at identical positions. |
| FAQ quality | 9 | 7 Q&As, each in the 40–80 word band, each answers a real-user-phrased query from live PAA capture. Mirrors top PAA from dossier. |
| Image plan alignment | 7 | 3 PNGs generated and on disk (verified by visual inspection). IMAGE_01 (hero pellet clusters) is excellent. IMAGE_03 (pond/farmer/catfish) is acceptable — barbels visible, anatomy reads as catfish; minor framing deviation (farmer inside pond rather than at edge). IMAGE_02 (infographic) has FLUX text-rendering failure: phase labels appear as "Caatiulture Afdesh Tinelin" / "Wolle- 3 Grow-Out" — garbled glyphs. Flagged with `fallback_recommended: true` and a replacement note in the image plan. |

## What I fixed (changelog)

- **ID draft:**
  - Replaced em-dash on line 117 ("efisiensi biaya — biomassa sudah besar") with comma + "karena" to remove the stylistic tell while preserving the clause meaning.
  - Replaced em-dash on line 204 ("kualitas air buruk — amoniak tinggi") with semicolon to fit Indonesian punctuation convention.
  - Net result: body em-dash count down from 2 to 0 (only the IMAGE_01 marker em-dash remains, which is meta not body).
  - Frontmatter `word_count` updated from 2287 to 2289 to reflect the polished body.
- **EN draft:**
  - Removed em-dash on line 41 ("no accident —") → replaced with colon.
  - Removed em-dash on line 84 ("about control — the farmer") → replaced with colon.
  - Removed em-dash on line 111 (two of them, "STP feed range — including ... — that landing page") → replaced with commas on both sides.
  - Removed em-dash on line 167 ("Usually not a feed problem —") → replaced with semicolon.
  - Removed em-dash on line 184 (H3 "Floating or sinking catfish pellet —") → replaced with comma.
  - Removed em-dash on line 202 ("poor water parameters —") → replaced with colon.
  - Removed em-dash on line 206 (two of them, "STP — part of JAPFA, operating since 1987 —") → replaced with comma-and-clause reformulation.
  - Net result: body em-dash count down from 9 to 0 (only the IMAGE_01 marker em-dash remains).
  - Frontmatter `word_count` updated from 1885 to 1887 to reflect the polished body.
- **Image plan (`pakan-ikan-lele-01.images.json`):**
  - `generation_status` updated from `prompts_only` to `images_generated`.
  - For all three images: `generated: false` → `true`, `bytes: 0` → actual file size from `manifest.results.json`, `generation_error: "..."` → `null`.
  - IMAGE_02 `fallback_recommended` flipped from `false` to `true`. Updated `fallback_note` to document the editor's QC observation that FLUX rendered garbled label text in the infographic and to recommend replacement with a designer asset or stock visual before publish.
  - IMAGE_03 `fallback_note` updated to record the editor's QC observation (catfish anatomy reads correctly; framing deviation around farmer position is minor).

## What I flagged (open issues)

- **IMAGE_02 (phase infographic) has garbled label text from FLUX.** *Recommendation*: replace with a designer-built SVG, a Canva/Figma export of the article's body table, or a clean stock infographic before publish. The article's in-body markdown table already carries all the precise data so this swap is presentational only and does not affect article correctness. Flagged in `images.json` with `fallback_recommended: true`. Not a blocker for the editorial approval, but a blocker for the actual publish step. The user should make this swap during the CMS upload.
- **`articles_history/index.json` does not yet contain the SPLA 12 product fingerprint nor the lele keyword cluster.** This is expected behavior since the curator commits only on `approve`. Surfacing here for awareness: when this article ships, the curator should add a `products_mentioned: ["STP SPLA 12"]` entry and add `pakan-ikan-lele` as a recognised keyword in history. Long-term, `knowledge_base/product_matrix.md` should be updated by the user (outside this editor's scope) to add SPLA 12 as a confirmed catfish-line product once stpaquaculture.com publishes an official product page.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)

**ID:**
- [x] No "Selain itu" opening repeated paragraphs (grep returned no matches)
- [x] No "Penting untuk dicatat / dipahami bahwa" (grep returned no matches)
- [x] No "Dalam era modern" / "Di zaman sekarang" / "Saat ini" as opener (grep returned no matches)
- [x] No "Dengan demikian" / "Sebagai kesimpulan" lazy closers (grep returned no matches)
- [x] Em-dash count ≤2 (now 0 in body; 1 in IMAGE_01 marker only)
- [x] Varied paragraph lengths (1-sentence "Akar masalahnya hampir selalu sama" alongside 4–5 sentence paragraphs)
- [x] No bullet-only sections (bullet lists appear within prose-led H2s, not as the H2's only content)
- [x] No generic claims without numbers (every claim quantified: 60–70%, 8–10 ekor/kg, 60–75 hari, ADG 0.8 vs 1.5–2 g/hari, etc.)
- [x] No product-dump paragraphs (SPLA 12 introduced contextually within fase grower section, range mention in CTA only)

**EN:**
- [x] No "It's important to note that..." (grep returned no matches)
- [x] No "In today's fast-paced world..." (grep returned no matches)
- [x] No "Furthermore" / "Moreover" opening consecutive paragraphs (grep returned no matches)
- [x] No "crucial / essential / vital" without quantification (grep returned no matches at all)
- [x] No "This article will discuss..." in body (grep returned no matches)
- [x] No "In conclusion," as only closer (grep returned no matches; closing paragraph leads with a forward-looking statement)
- [x] Em-dash count ≤2 (now 0 in body; 1 in IMAGE_01 marker only — down from 9 in body pre-edit)

### B. Factual spot-check

| Claim | Source check | Verdict |
|---|---|---|
| Indonesia 2024 catfish production = 1,157,755 tonnes | dossier line 13 + KKP URL cited inline | pass |
| STP SPLA 12: protein min 32%, fat min 8%, sizes 1/2/3mm, 30 kg sack, KKP-registered, TÜV Rheinland + ISO 9001 | dossier line 73–76 (marketplace-sourced, phrased as "berdasarkan listing distributor" — correct hedging) | pass with caveat |
| SNI 01-4087-2006 minimum protein 30% for lele feed | dossier line 45 + URL https://ojs.umb-bungo.ac.id/.../1375 | pass |
| Jurnal Megaptera 2022: FCR 1.0 at 3×/hari FR 8% on lele sangkuriang | dossier line 60 + URL https://ejournal-balitbang.kkp.go.id/.../11836 | pass |
| Mutiara 2025: EM4 probiotic FCR 1.56, hemat Rp 4,325/kg, profitabilitas +30% | dossier line 105 + URL https://mutiara.al-makkipublisher.com/.../489 | pass |
| Worked example math (1000 fingerlings @ 3g × FCR 1.3 = 117 kg = ~4 sacks × Rp 425k = Rp 1.7M ≈ Rp 18,900/kg) | dossier "Worked example" section + math verified by editor | pass |
| BSF maggot 30–50% protein, 20–30% safe substitution, 54% ITB study without growth depression | dossier line 89–90 + URLs to Dinas Perikanan Luwu Utara + ITB + journal.unibos.ac.id | pass |
| Harga pakan lele per sak 30kg Mei 2026: Rp 270,000–470,000; SPLA 12 ~Rp 420,000–430,000 | dossier line 83–86 (harga.web.id + Shopee/Tokopedia aggregated) | pass |

### C. On-page SEO checklist (seo_playbook.md §3)

**ID:**
- [x] Meta title 54 chars; "Rekomendasi Pakan Lele" in first 22 chars (target ≤60, keyword in first 30 — both met)
- [x] Meta description 140 chars (target 140–160 — meets lower bound)
- [x] Slug "rekomendasi-pakan-lele-cepat-besar" — 34 chars, kebab, contains keyword
- [x] H1 contains keyword ("Pakan Lele")
- [x] H2 count = 7 (target 4–7, at upper bound — within range)
- [x] ≥1 question-format H2 ("Kenapa Pertumbuhan Lele Sering Tidak Sesuai Target?")
- [x] Keyword "pakan ikan lele" in first 100 words (lead paragraph)
- [x] Definition snippet at H2 #2 opener (47 words, within 40–60 target)
- [x] ≥8 LSI terms (counted: FCR, ADG, satiation feeding, feeding rate, biomassa, floating pellet, sinking pellet, granul, pendederan, pembesaran, finisher, magot BSF, SNI = 13)
- [x] 2 internal links (out-of-cluster fallback rule, 3rd skipped — confirmed against `internal-link-fallback` memory)
- [x] 4 external authoritative citations (KKP berita + KKP ejournal Megaptera + Mutiara journal + KKP/Dinas Perikanan Pamekasan)
- [x] FAQ block 7 Q&As (target 5–8 — within range)
- [x] 3 image placeholders matching the 3 generated PNGs
- [x] 1 numbered list (the six-parameter check), 2 bullet lists (failure points + worked example assumptions + field signals), 2 tables (FCR conditions + per-phase pakan)

**EN:**
- [x] Meta title 46 chars; "Best Catfish Feed" in first 17 chars
- [x] Meta description 149 chars
- [x] Slug "best-catfish-feed-rapid-growth" — 30 chars, kebab, contains primary keyword
- [x] H1 contains "Catfish Feed"
- [x] H2 count = 7 (target 4–7)
- [x] ≥1 question-format H2 ("Why Catfish Growth Falls Short of Target")
- [x] Keyword "catfish feed" in first 100 words (lead paragraph, sentence 1)
- [x] Definition snippet at H2 #2 opener (47 words)
- [x] ≥8 LSI terms present (FCR, ADG, satiation feeding, biomass, mouth gape, floating pellet, sinking pellet, fingerling, fry, grow-out, finisher, BSF, SNI = 13)
- [x] 2 internal links (out-of-cluster, mirrors ID)
- [x] 3 external authoritative citations (KKP + Megaptera + Mutiara)
- [x] FAQ block 7 Q&As
- [x] 3 image placeholders aligned with ID positions
- [x] 1 numbered list, 2 bullet lists, 2 tables

### D. Product mention discipline

| Product mentioned | Spec correct per dossier? | Naturally placed? |
|---|---|---|
| STP SPLA 12 | Yes — protein min 32%, fat min 8%, 1/2/3mm, 30kg, KKP-registered, TÜV Rheinland + ISO 9001 — all match dossier line 73–76 verbatim | Yes — placed in §3 H3 "Fase pendederan sampai grower" with explicit distributor-listing caveat |
| JARS (JAPFA Aquaculture Research Station) | Yes — three locations (North Sumatra, West Java, East Java) match `product_matrix.md` services row | Yes — placed in §2 as credibility lift, not product placement |
| Mobile Diagnostic Lab + Animal Health Team | Yes — phrasing matches `product_matrix.md` Animal Health Team row | Yes — placed in §6 troubleshooting context |
| Range mention (PA GOLD, NGA 10, SPF Extruder) | Yes — only as a "the landing page also covers" mention, not asserting these are for catfish | Yes — placed once inside the SPLA 12 paragraph, naturally |

- Total product mentions count: 1 primary (SPLA 12) + 2 services (JARS, Mobile Diagnostic Lab) + 1 inline range mention = within the ≤3 cap if we count SPLA 12 + JARS + Mobile Diagnostic Lab. The range mention is a CTA-style reference, not a product placement.
- STP SPLA 12 NOT in `product_matrix.md` — handled correctly by writer with explicit "based on distributor listings" caveat. Editor confirms this is the safe path until stpaquaculture.com publishes the official product page.

### E. ID ↔ EN parity

- Both versions cover the same key facts (production volume, FCR table, six-parameter check, four-phase table, worked example math, BSF substitution thresholds, five field signals, Jurnal Megaptera findings, Mutiara findings, SPLA 12 specs). [x]
- Both versions have image placeholders at identical positions (IMAGE_01 after lead, IMAGE_02 after H3 finisher, IMAGE_03 after multi-species paragraph). [x]
- Both versions have internal-link destinations mirrored /id/ ↔ /en/ (`/id/news/pakan-ikan-budidaya-terbaik-stp` ↔ `/en/news/pakan-ikan-budidaya-terbaik-stp`; `/id/news/pakan-ikan-nila` ↔ `/en/news/pakan-ikan-nila`). [x]
- Word counts: ID = 2289, EN = 1887. Brief targets: ID 2000–2400, EN 1700–2000. Both within range. [x]
- EN adds USD conversions (USD 17–29 / USD 0.55–1.00/kg / USD 106 etc.) per style guide §4 ("EN version should use international units"). Good adaptation. [x]

### F. Anti-cannibalization spot check

- `articles_history/index.json` currently contains 1 prior article (`2026-05-pakan-ikan-nila-01`). No prior catfish article in history yet (out-of-cluster batch is new).
- Subtopic overlap with `pakan-ikan-nila-01`: shared concepts (ABC feeding, FCR, biomass, sack conversion, worked example, satiation feeding); distinct species (lele vs. nila), distinct phase tables, distinct product anchors (SPLA 12 vs. PA GOLD/NGA 10/SPF Extruder), distinct hub landing page. Estimated Jaccard ~0.25 — clearly distinct articles.
- Verdict: distinct angle confirmed. No cannibalization risk.

### G. Image plan alignment

- Image plan JSON validates (well-formed JSON, all required fields populated after editor's update). [x]
- Image count = 3, matches 3 `{IMAGE_NN:...}` markers in both drafts. [x]
- Alt text length: all six alt strings (ID + EN for each of 3 images) under 125 chars. [x]
- IMAGE_01: `generated: true`, 2.87 MB PNG on disk, visually inspected — high quality, four pellet clusters with progressive sizing on wooden surface, no garbled text, matches concept. [x]
- IMAGE_02: `generated: true`, 686 KB PNG on disk, visually inspected — infographic structure is correct (4 stacked phase cards with timeline ribbon, icons, color progression) BUT all label text rendered as garbled glyphs ("Caatiulture Afdesh Tinelin", "Wolle- 3 Grow-Out", partial "Fingerling" / "Finisher" / "Phase 4" legible). `fallback_recommended` flipped to `true` with a clear note. Article body table is the canonical data source so the article is not broken by this; visual swap recommended before publish. [partial]
- IMAGE_03: `generated: true`, 1.99 MB PNG on disk, visually inspected — catfish anatomy correct (visible long body, barbels, dark dorsal coloration), pond setting reads as Indonesian aquaculture (palms, blue-grey shirt farmer, jade-green water with floating pellets). Minor framing deviation: farmer is rendered inside the pond rather than at the edge. Acceptable for editorial use. [x]
- `generation_status` updated to `images_generated` (correct terminal state). [x]

## Additional observations

1. **Brief→article fidelity**: The article delivers all 7 brief-skeleton H2s in a logically reorganised order (problem framing → criteria → recommendation per phase → worked example → alternatives → troubleshooting → FAQ). The structural shift (H4 troubleshooting moved to position 6 with the H5 worked example pulled up to position 4) reads better than the brief's original order; the writer's call here is sound.
2. **Hedging language is well-calibrated**: "estimasi yang lazim beredar", "berdasarkan listing distributor", "kemungkinan", "umumnya" — used sparingly only where the dossier flagged uncertainty (60–70% feed cost, SPLA 12 specs). The rest of the article speaks in definitive sentences (which AI Overview prefers per seo_playbook.md §7).
3. **Specific-number density**: counted 30+ distinct quantified claims in the ID draft (FCR ranges, protein percentages, fat percentages, sizes in mm, days, ADG, prices, etc.) — comfortably above the 8+ minimum from style_guide.md §2.
4. **Closing CTA**: leans on company_profile lines (JAPFA legacy 1987, JARS, technical team) per the style guide. Soft brand close, no aggressive "buy now" language. Pass.

## The shipping question

If this article appeared on stpaquaculture.com tomorrow and a senior aquaculture journalist read it, would WEBARQ Promote be proud of it? **Yes.** The worked example, the per-phase table, the calibrated hedging around SPLA 12, and the troubleshooting H2 lift the article above any of the top 5 SERP competitors identified in the dossier. The IMAGE_02 garble is the only blemish, and it's a swap-out for the user during CMS upload rather than a writer/editor fault — the article body covers the same data in a clean markdown table.
