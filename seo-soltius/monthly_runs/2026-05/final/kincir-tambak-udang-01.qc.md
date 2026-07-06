---
brief_id: "kincir-tambak-udang-01"
editor_run_date: "2026-05-26"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Fungsi & Manfaat Kincir Air di Tambak Udang

## Recommendation

**approve**

This is one of the stronger drafts in the batch. The article correctly cites the 1 HP per 500 kg biomass rule (Boyd 2021 + KKP BPBAP Situbondo SOP) — not the outdated "per 1 ton" rule of thumb. DO ≥4 ppm dawn (Permen KP No. 75/2016) is cited verbatim in both versions. The AT21 ME500/ME1500 product mentions correctly distinguish HIGH-confidence positioning ("energy-saving aerator for small-medium / medium-large ponds" from product_matrix.md) from MEDIUM-confidence numerical specs (watts, L/min) which are explicitly flagged as "indikatif" / "indicative" with a recommendation to confirm with the STP technical team — exactly the right discipline given Flag 1 in the dossier. Internal linking is complete (3 in-cluster links per draft, mirrored ID/EN). The image plan parity is intact and all 3 FLUX-generated PNGs landed at expected sizes (2.0 MB / 870 KB / 599 KB). One small AI tell was fixed: the ID version had "Listrik adalah elephant in the room" — code-switching English idiom mid-Bahasa paragraph, replaced with idiomatic Indonesian phrasing. The EN equivalent ("elephant in the pond") was likewise replaced with a more neutral framing for consistency. Both diagram/infographic images (IMAGE_02 and IMAGE_03) retain `fallback_recommended: true` flags — surfaced below for the user to QC visually before publish; if AI output is poor, vector replacements should be commissioned via Canva/Figma/Illustrator.

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Strong practitioner voice; "Mari bicara angka", "Inilah fungsi yang sering luput dari pemula", "tightly coupled" all read like a journalist, not an LLM. One code-switching idiom in ID fixed. |
| Factual accuracy | 9 | All key technical claims dossier-sourced. The 1 HP per 500 kg rule is correctly cited from both Boyd 2021 JWAS and KKP BPBAP Situbondo. AT21 specs correctly flagged as indicative third-party data. |
| On-page SEO compliance | 9 | Meta title, meta description, slug, H1, H2 structure, FAQ count, internal/external links all pass. Definition snippet at top of H2 #1 (57 words — in 40-60 range). Keyword in first 100 words of both drafts. |
| Product mention discipline | 10 | AT21 ME500 + AT21 ME1500 + ATD all named correctly per product_matrix.md; concentrated in H2 #6; max 3 anchors hit; closing CTA references "total solution aquaculture company since 1987" positioning from company_profile.md. |
| Internal linking | 10 | 3 in-cluster links each draft (budidaya-udang-vaname primary; pakan-udang-vaname + benur-udang-vaname cousins); mirrored /id/ ↔ /en/. Anchor text matches brief direction. |
| ID ↔ EN parity | 9 | Same H2 count, same facts coverage, same image placeholders, mirrored link destinations. Word counts: ID 1985 (target 1800-2100, in range), EN 1720 (target 1500-1800, in range). Both within style guide acceptable ranges. |
| FAQ quality | 9 | 7 Q&As per draft (within 5-8 range). Each answer 40-100 words. Questions mirror real Google PAA patterns ("Berapa watt...", "Apakah kincir bisa..."). One bonus question on dawn DO drop strengthens the AI Overview surface. |
| Image plan alignment | 8 | Plan validates, parity ok, all 3 PNGs generated (2.0 MB / 870 KB / 599 KB). IMAGE_02 and IMAGE_03 retain fallback_recommended flags — user should visually QC before publish given FLUX limitations on schematic/text-heavy outputs. |

## What I fixed (changelog)

- **ID draft → final**: Replaced "Listrik adalah elephant in the room." (English idiom code-switched into Bahasa Indonesia, AI-tell) with "Listrik adalah variabel biaya yang paling sering diabaikan di awal perencanaan tambak." in the H2 #6 opener.
- **EN draft → final**: Mirrored the polish — replaced "Electricity is the elephant in the pond." with "Electricity is the cost variable most often underplanned." for tone consistency with the ID version.
- **ID frontmatter**: Updated `word_count` from 1980 → 1985 to reflect polished version.
- **H2 #3 dash trimming (ID + EN)**: Replaced em-dash in "Manfaat Operasional — Apa yang Hilang..." H2 with colon ("Manfaat Operasional: Apa yang Hilang...") to reduce em-dash count below the ≤2 style-guide ceiling (also applied to EN equivalent). Lead paragraph em-dash retained as the single permitted body usage.
- **Image plan JSON**: Updated `generation_status` from `prompts_only` → `images_generated`. Updated each image record: `generated: false` → `true`, `bytes: 0` → actual byte size from manifest.results.json (2,047,841 / 870,410 / 598,979). Preserved `fallback_recommended: true` flags on IMAGE_02 and IMAGE_03 with their original fallback notes.

## What I flagged (open issues)

- ⚠️ **IMAGE_02 (diagram) and IMAGE_03 (infographic) — visual QC needed before publish**. Both are flagged `fallback_recommended: true` because FLUX (and AI image models generally) struggle with schematic accuracy and text-bearing layouts. *Recommendation*: open both PNGs and verify (a) IMAGE_02 has clearly recognizable circular arrows converging on a central point, and (b) IMAGE_03 shows three distinct pond-size scenarios with readable layout. If either fails the eye test, commission a vector replacement in Canva/Figma/Illustrator using the dossier's table data and the existing captions. Stock photo is not appropriate for these data-driven visuals.
- ⚠️ **AT21 ME500/ME1500 numerical specs are indicative (third-party WWF database, not STP spec sheet)**. The drafts handle this correctly with explicit "angka indikatif / indicative" framing and the recommendation to confirm with STP technical team. *Recommendation*: before final publish, the user (or STP team) should validate the 500–2,200 watt range and 6,000 / 12,000 L/min output figures with the official STP product datasheet. If the figures change, both drafts need a one-line numeric update in H2 #6.
- ⚠️ **H2 count is 7 body H2s + 1 FAQ H2 = 8 total** — slightly above the seo_playbook's 4-7 ideal range, but this is a comprehensive technical explainer with explicit brief-driven sections (functions, benefits, formula, placement, efficiency, maintenance, FAQ). Trimming would lose content the brief asked for. Approved as-is.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)

**ID:**
- [x] No "Selain itu" opening repeated paragraphs (grep: 0 matches)
- [x] No "Penting untuk dicatat / dipahami bahwa" (grep: 0 matches)
- [x] No "Dalam era modern" / "Di zaman sekarang" (grep: 0 matches)
- [x] Em-dash count ≤2 (body em-dashes: 1 lead + 1 H2 → fixed H2 to colon → 1 em-dash in body)
- [x] Varied paragraph lengths (1-sentence "Mari bicara angka." through 5-sentence analytical paragraphs)
- [x] No bullet-only sections (each H2 leads with prose, then bullets/numbered lists where they help)
- [x] No generic claims without numbers (every claim anchored to a number: 15%, 1 HP/500 kg, ≥4 ppm, FCR 1.36, 20-30 HP/ha, etc.)
- [x] No product-dump paragraphs (AT21 mentions concentrated in H2 #6 as brief specified)

**EN:**
- [x] No "It's important to note that..." (grep: 0 matches)
- [x] No "In today's fast-paced world..." (grep: 0 matches)
- [x] No "Furthermore"/"Moreover" opening consecutive paragraphs (grep: 0 matches)
- [x] No "crucial/essential/vital" without quantification (grep: 0 matches)
- [x] No "This article will discuss..." (grep: 0 matches)
- [x] No "In conclusion," as only closing (grep: 0 matches; closing is forward-looking practitioner statement)

### B. Factual spot-check

5 specific claims verified against dossier and product_matrix.md:

| Claim | Source check | Verdict |
|---|---|---|
| "1 HP kincir per 500 kg biomassa udang puncak" | Dossier Core Facts §3 — Boyd 2021 JWAS + KKP BPBAP Situbondo SOP (HIGH confidence, two independent sources) | pass |
| "DO ≥4 ppm pagi hari" (Permen KP No. 75/2016) | Dossier Core Facts §5 — confirmed via KKP ejournal salamata | pass |
| "FCR 1.36 di kepadatan 1.000 ekor/m², 1.40 di 750" | Dossier Core Facts — Syah et al. KKP Media Akuakultur | pass |
| "AT21 ME500: kolam kecil-menengah; ME1500: medium-large" | product_matrix.md (HIGH confidence: positioning); dossier Flag 1 (MEDIUM confidence: 500-2,200 W, 6,000/12,000 L/min — correctly flagged as indikatif in draft) | pass |
| "Konsumsi listrik 2 HP: 0,97–1,07 kW low-load / 1,5–1,9 kW full-load" | Dossier Core Facts — Wafi et al. UNDIP measured 0.97-1.07 kW; 1.5-1.9 kW range correctly phrased per Flag 3 | pass |

All 5 claims verified. No fabricated numbers detected.

### C. On-page SEO checklist (seo_playbook.md §3)

**ID:**
- [x] Meta title ≤60 chars, keyword in first 30 (actual: 47 chars / position 0 — "Kincir Tambak Udang:" leads)
- [x] Meta description 140–160 chars (actual: ~140 chars, includes keyword + 4 value props)
- [x] Slug ≤60 chars, kebab-case, contains keyword (actual: "kincir-tambak-udang", 19 chars)
- [x] H1 contains keyword ("Fungsi & Manfaat Kincir Air di Tambak Udang" — keyword variant)
- [x] H2 count 4–7 (actual: 7 body H2s + 1 FAQ H2; body count in range)
- [x] ≥1 question-format H2 (3 question-format H2s: "Apa Itu...", "Apa yang Hilang...", "Berapa Banyak...", "Apa Pilihan Modern...")
- [x] Keyword in first 100 words ("Kincir tambak udang adalah peralatan paling sederhana..." — first sentence)
- [x] Definition snippet present near top (line 50, 57 words — within 40-60 range)
- [x] ≥8 LSI terms (counted: 10+ — paddlewheel aerator, DO, central drain, biomassa, HP, padat tebar, dawn DO drop, SAE, ATD, AT21, blind feeding, etc.)
- [x] 3 internal links (1 primary budidaya-udang-vaname + 2 cousins: pakan-udang-vaname, benur-udang-vaname)
- [x] ≥1 external authoritative citation (actual: 4 — Boyd JWAS, Permen KP, FAO Penaeid, Wafi UNDIP)
- [x] FAQ block 5–8 Q&As (actual: 7)
- [x] ≥3 image placeholders (3: IMAGE_01 hero, IMAGE_02 diagram, IMAGE_03 infographic)
- [x] ≥1 numbered list, ≥1 bullet list, ≥1 table (numbered: worked example steps 1-6; bullets: aerator comparison + criteria + troubleshooting; table: sizing scenarios + comparison)

**EN:**
- [x] Meta title ≤60 chars (actual: 54 chars — "Paddlewheel Aerator Shrimp Pond: Functions & HP Sizing")
- [x] Meta description 140–160 chars (actual: ~149 chars)
- [x] Slug ≤60 chars (actual: "paddlewheel-aerator-shrimp-pond", 31 chars)
- [x] H1 contains keyword
- [x] H2 count 4–7 (7 body + 1 FAQ)
- [x] ≥1 question-format H2 (3: "What Is...", "What Goes Wrong...", "How Many...", "Why does pond DO crash...")
- [x] Keyword "paddlewheel aerator shrimp pond" in first 100 words (sentence 1)
- [x] Definition snippet present (line 50, 56 words)
- [x] ≥8 LSI terms (10+ verified)
- [x] 3 internal links (mirrored /en/ destinations)
- [x] ≥1 external authoritative citation (4 — same set as ID)
- [x] FAQ block 5–8 Q&As (7)
- [x] ≥3 image placeholders (3, mirrored)
- [x] Numbered list + bullet list + table all present

### D. Product mention discipline

| Product mentioned | Spec correct per product_matrix.md? | Naturally placed? |
|---|---|---|
| AT21 ME500 | ✓ ("energy-saving aerator for small-medium ponds" — matches matrix); ✓ specs flagged as indicative | ✓ Placed in H2 #6 efficiency section as brief specified |
| AT21 ME1500 | ✓ ("higher capacity for medium-large ponds" — matches matrix); ✓ specs flagged as indicative | ✓ Same section as ME500 |
| ATD (Aquaculture Technology Development) | ✓ ("West Java; develops on-farm technologies" — matches company_profile.md) | ✓ Contextual R&D framing |

- Product mention count: 3 (target ≤3 — at ceiling, but brief explicitly anchored all 3 to H2 #6; topic invites it because the article is about aerators)

### E. ID ↔ EN parity

- Both versions cover the same key facts? ✓ (1 HP per 500 kg rule, DO ≥4 ppm, FCR data, AT21 specs, energy consumption)
- Both versions have same image placeholder positions? ✓ (IMAGE_01 lead, IMAGE_02 after H2 #4, IMAGE_03 after H2 #6 AT21 mentions)
- Both versions have same internal-link destinations (mirrored /id/ ↔ /en/)? ✓ (3 mirrored pairs)
- Word counts: ID = 1985, EN = 1720 (target ID 1800–2100 ✓ / EN 1500–1800 ✓; also within quality-bar ID 1800-2500 / EN 1500-2200)

### F. Anti-cannibalization spot check

- Articles history index has only 1 prior article (`pakan-ikan-nila-01`) — a tilapia-feed-planning piece. Zero subtopic overlap with this paddlewheel aerator article.
- This article is keyword `kincir tambak udang` (new keyword for the cluster), linking up to primary hub `budidaya-udang-vaname`. No competing article exists yet in the `budidaya-udang-vaname` cluster.
- Verdict: distinct angle confirmed — no cannibalization risk.

### G. Image plan alignment

- Image plan JSON validates ✓
- Image count matches placeholders ✓ (3 = 3 ID = 3 EN)
- Alt text ≤125 chars (ID + EN) ✓ (longest is IMAGE_02 alt_id at 113 chars)
- Hard-difficulty images have alternative-source suggestions ✓ (IMAGE_02 and IMAGE_03 both have detailed fallback_note with Adobe Stock / Canva / Figma alternative paths)
- Generation results: `generation_status: images_generated` ✓ (updated from `prompts_only`); all 3 PNGs landed at expected output paths (2.0 MB / 870 KB / 599 KB per manifest.results.json)
- IMAGE_02 + IMAGE_03 fallback flags retained — user should visually QC before publish per the fallback_note recommendations.
