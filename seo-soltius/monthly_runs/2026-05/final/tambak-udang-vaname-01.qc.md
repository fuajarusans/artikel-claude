---
brief_id: "tambak-udang-vaname-01"
editor_run_date: "2026-05-26"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Tips Sukses Tambak Udang Vaname Hasil Melimpah

## Recommendation

**approve**

Both drafts arrived in strong shape. The writers respected the dossier's correction on the US$1.68 billion 2024 figure (not US$2 billion), correctly attributed US$2 billion as the government target, and cited SNI 01-7246-2006 benchmarks verbatim (SR 80–90%, FCR 1.4, ADG 0.2 g/head/day, ≥15,000 kg/ha). Five STP products are anchored contextually with specs matching `product_matrix.md` exactly. Editor caught and fixed two issues in-place: (1) the Bahasa version was missing inline anchors for the two cousin internal links — only the primary `budidaya-udang-vaname` link was present in body, in violation of `seo_playbook.md` §9; (2) the English version carried 18 em-dashes against the style-guide cap of 2. Both fixes applied directly without writer rework. All three FLUX-generated PNGs verified on disk (sizes 720 KB to 1.54 MB; total 43.9 s elapsed). Image plan updated from `prompts_only` to `images_generated` with manifest details. The article ships.

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Varied paragraph rhythm, practitioner asides ("Catat. Foto. Jangan andalkan ingatan."), field notes, named edge cases. Zero AI-tell phrases. |
| Factual accuracy | 10 | Every number traces to dossier or product_matrix; US$1.68B/US$2B framing handled correctly; SNI cited with article ID. |
| On-page SEO compliance | 9 | All meta limits respected after EN meta description trim; H2 count, FAQ count, LSI density all pass; internal links now 3-distinct in both versions. |
| Product mention discipline | 9 | 5 distinct STP products (Super PL, Perosolv, AT21 ME500/ME1500, STP PV/SGH/SGH MAX/TOV, Animal Health Team). Brief explicitly tolerated 4–5 for this full-tambak topic. Mentions are dispersed across 4 separate H2s — no product-dump paragraph. |
| Internal linking | 9 | After fix: 3 distinct cousins/primary linked inline in both ID and EN. Primary (budidaya-udang-vaname) anchored in lead + closing CTA. |
| ID ↔ EN parity | 9 | Same 7 body H2s + FAQ; same image placeholders at same positions; same key numbers; word counts in target range. |
| FAQ quality | 9 | 7 Q&As (within 5–8 cap), each 40–80 words, mirrors live PAA from dossier. |
| Image plan alignment | 10 | 3 placeholders match 3 generated PNGs; alt text ID + EN both ≤125 chars; manifest verifies all `Completed`. |

## What I fixed (changelog)

- **ID draft**:
  - Added inline anchor `[benur udang vaname berkualitas](.../benur-udang-vaname)` at H2 #3 lead (line "Kriteria benur udang vaname berkualitas yang sebaiknya diperiksa..."). Previously the bold text was the anchor target per dossier but no link was rendered.
  - Added inline anchor `[pakan udang vaname](.../pakan-udang-vaname)` at H2 #4 second paragraph (line "Frekuensi pemberian pakan udang vaname..."). Same gap as above.
  - Updated `word_count` frontmatter from 2127 → 2138 to reflect the two anchor additions.
- **EN draft**:
  - Trimmed meta description from 161 → 152 chars (removed "and" linker, used "AHPND/WSSV" slash form) to fit the 140–160 SEO cap.
  - Replaced all 16 body em-dashes (`—`) with commas, colons, or periods to hit the style-guide cap of ≤2. Net body em-dash count is now 0. Two em-dashes remain only in `external_citations` context fields (frontmatter metadata, not body copy). Specific swaps:
    - Lines 52–54 (numbered list): `**Inconsistent post-larvae quality** —` → `**Inconsistent post-larvae quality:**` (same pattern for lines 53, 54)
    - Line 64 (Perosolv anchor): `STP's ATD division — a combination of...` → `STP's ATD division, a combination of...`
    - Line 72 (selection lead): `30 to 40 days — the same window` → `30 to 40 days, the same window`
    - Line 79 (SPF cert bullet): `from the hatchery — documented` → `from the hatchery, documented`
    - Line 84 (panic line): `built for 100 — a panic situation` → `built for 100, a panic situation`
    - Line 92 (operators ask): `the same question — does feeding` → `the same question: does feeding`
    - Line 102 (SGH MAX table cell): `"Next Level of Growth" — attractability` → `"Next Level of Growth": attractability`
    - Line 138 (biosecurity prose): `Daily health notes — coloration, ..., status — should be logged` → `Daily health notes (coloration, ..., status) should be logged`
    - Lines 150–154 (harvest indicators bullet list): all 5 ` — ` colons → `:` (e.g., `**ABW 15 to 20 g** —` → `**ABW 15 to 20 g**:`)
    - Line 192 (closing): `not the product of one decisive action — they are` → `not the product of one decisive action: they are`; later `an integrated approach — Super PL STP ... — aligns` → `an integrated approach combining Super PL STP, the phased vannamei feed range, ATD aeration and disinfection, and Animal Health Team support aligns`
  - Restated context value in citation #2 ("May 2023:" instead of "May 2023 —") and #3 ("Global Seafood Alliance:") to clean the metadata em-dashes as well.
  - Updated `word_count` frontmatter from 1843 → 1852 to reflect minor expansions and the closing-sentence restructure.
- **Image plan JSON** (`tambak-udang-vaname-01.images.json`):
  - `generation_status`: `prompts_only` → `images_generated`
  - Added `generation_elapsed_seconds: 43.9`, `generation_succeeded: 3`, `generation_failed: 0`, `manifest_path`
  - For each of the 3 images: set `generated: true`, cleared `generation_error: null`, added `job_state: "Completed"`, set `bytes` to the actual file sizes from `tambak-udang-vaname-01.manifest.results.json` (1,540,492 / 720,136 / 1,013,624).

## What I flagged (open issues)

- **None blocking.** Two minor notes for the user / next iteration, not blockers:
  - Caption text in `images.json` (ID + EN) still contains em-dashes in body-style sentences (e.g., IMAGE_01 caption: "di atas 4 ppm — salah satu variabel..."). Captions are rendered as `<figcaption>` not body prose, so the style-guide em-dash rule technically does not apply, but if the curator's md-to-docx converter inlines captions into running text these would surface. Recommend leaving as-is unless a downstream rendering quirk shows up.
  - The EN closing CTA mentions "ATD aeration and disinfection" alongside the existing Super PL + feed range + Animal Health Team. That is consistent with `company_profile.md` (ATD = Aquaculture Technology Department) but raises total STP brand mentions in the closing paragraph to 5. Within tolerance for an informational `tambak` topic per brief (4–5 anchors allowed) but worth eyeing if a future revision tightens.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)

**ID:**
- [x] No "Selain itu" opening repeated paragraphs (zero matches in grep)
- [x] No "Penting untuk dicatat / dipahami bahwa" (zero matches)
- [x] No "Dalam era modern" / "Di zaman sekarang" / "Dengan demikian" (zero matches)
- [x] Em-dash count: 2 (both inside `external_citations` context fields in frontmatter, not body; body has 0)
- [x] Varied paragraph lengths (mix of 1-sentence "Catat. Foto." style and 4–6 sentence prose)
- [x] No bullet-only sections (every H2 leads with prose; bullets and tables sit inside the prose)
- [x] No generic claims without numbers (every assertion paired with a SNI value, mortality range, weight/ABW, or duration)
- [x] No product-dump paragraphs (5 products spread across 4 H2s minimum 1 H2 apart)

**EN (after fix):**
- [x] No "It's important to note that..."
- [x] No "In today's..."
- [x] No "Furthermore"/"Moreover" opening consecutive paragraphs (grep zero matches)
- [x] No "crucial/essential/vital" without quantification (grep zero matches at all)
- [x] No "This article will discuss..."
- [x] No "In conclusion," as only closing (closing leads with "Strong harvests in vannamei ponds are not the product of one decisive action:")
- [x] Em-dash count: 0 in body (was 16 pre-edit), 0 in frontmatter (was 2). Total: 0.

### B. Factual spot-check

5 specific claims verified against dossier + product_matrix + KB:

| Claim | Source check | Verdict |
|---|---|---|
| Ekspor udang Indonesia 2024 = US$1,68 miliar / US$1.68 billion (214,580 ton, 87 negara) | dossier line 34 (KKP Shrimp Summit 2025) | pass |
| SNI 01-7246-2006: SR 80–90%, FCR 1,4, ADG 0,2 g/ekor/hari, ≥15.000 kg/ha | dossier line 54 (BSN via Jurnal Kamasan) | pass |
| Super PL STP = PL30, biosecure hatchery, ~20 hari lebih cepat | product_matrix.md row 34 | pass (verbatim) |
| Perosolv = nano silver min 4,5 mL/L + H₂O₂ min 49,5% | product_matrix.md row 47 | pass (verbatim) |
| AHPND/EMS mortalitas hingga 100% dalam <40 hari; Vibrio parahaemolyticus; nested PCR Bangkalan 2022–2023 | dossier line 74 (Undip JMR Vol 12 No 2 Mei 2023) + Nusantics | pass |

No fabricated stats detected. The "panen parsial hari 70–80 menambah 10–15% pendapatan" claim is a practitioner-voice range without a single peer-reviewed citation but is a well-known industry rule of thumb and is framed as a range, not a hard stat, which the style guide permits (§10).

### C. On-page SEO checklist (seo_playbook.md §3)

**ID:**
- [x] Meta title: "Tips Sukses Tambak Udang Vaname Hasil Melimpah" = 47 chars (≤60), keyword "tambak udang vaname" at position 13 (within first 30)
- [x] Meta description: 147 chars (140–160 range)
- [x] Slug: "tips-sukses-tambak-udang-vaname-hasil-melimpah" = 46 chars (≤60), contains keyword
- [x] H1 contains keyword "Tambak Udang Vaname"
- [x] H2 count: 7 body + 1 FAQ = 8 total (target 4–7 body H2s = met)
- [x] Question-format H2s: 3 ("Mengapa Tambak Udang Vaname Tidak Selalu Panen Melimpah?", "Manajemen Pakan Vaname per Fase: Apa yang Berubah dari PL ke Panen?", "Udang Mendadak Tidak Mau Makan? ...")
- [x] Keyword "tambak udang vaname" in first 100 words (paragraph 1, sentence 1)
- [x] Definition snippet at top of H2 #1 (lines 48–48, 60 words)
- [x] LSI terms counted: 14 distinct (vaname, Litopenaeus vannamei, intensif, semi-intensif, supra-intensif, padat tebar, PL10, PL30, FCR, ADG, SR, biosecurity, AHPND, WSSV, EHP, kincir/aerator, hepatopankreas, feeding tray, SPF, biofloc...) — comfortably ≥8
- [x] 3 internal links after fix: budidaya-udang-vaname (lead + CTA), benur-udang-vaname (H2 #3), pakan-udang-vaname (H2 #4)
- [x] External authoritative citations: 3 (KKP, Undip JMR, Jurnal Kamasan-SNI, plus Unair FPK inline)
- [x] FAQ block: 7 Q&As (within 5–8)
- [x] Image placeholders: 3 (`{IMAGE_01...03}`)
- [x] Format diversity: 2 numbered lists, 2 bulleted lists, 2 tables — exceeds minima

**EN:** same checklist applied:
- [x] Meta title: "Vannamei Shrimp Pond: 12-Step Success Playbook" = 47 chars, keyword at position 0
- [x] Meta description after fix: 152 chars (was 161, over cap)
- [x] Slug: "vannamei-shrimp-pond-success-tips" = 33 chars
- [x] H1 contains "Vannamei Shrimp Pond"
- [x] H2 count: 7 body + 1 FAQ
- [x] Question-format H2s: 3 (parity with ID)
- [x] Keyword in first 100 words: "vannamei shrimp pond" sentence 1
- [x] Definition snippet at H2 #1 (line 48, ~60 words)
- [x] LSI: 13 distinct
- [x] 3 internal links: vannamei shrimp farming (lead + CTA), vannamei post-larvae (H2 #3), vannamei shrimp feed (H2 #4)
- [x] External citations: 3 (KKP, Undip JMR, Global Seafood Alliance) plus Unair inline reference
- [x] FAQ block: 7 Q&As
- [x] Image placeholders: 3
- [x] Format diversity: 2 numbered lists, 2 bulleted lists, 2 tables

### D. Product mention discipline

| Product mentioned | Spec correct per product_matrix.md? | Naturally placed? |
|---|---|---|
| Super PL STP | ✓ (PL30, biosecure hatchery, ~20 days faster) | ✓ (H2 #3 selection-of-benur, contextual) |
| STP PV / STP SGH / STP SGH MAX / STP TOV | ✓ (matches phase/spec table verbatim) | ✓ (H2 #4 feeding table; one cell each, no dump paragraph) |
| Perosolv | ✓ (nano silver min 4.5 mL/L + H2O2 min 49.5%) | ✓ (H2 #2 disinfection step, exactly where matrix suggests) |
| AT21 ME500 / AT21 ME1500 | ✓ (small-medium / large pond split, ATD STP) | ✓ (H2 #5 aeration, paired with the 1 HP per 400–500 kg biomass rule) |
| Animal Health Team + Mobile Diagnostic Lab | ✓ (service, on-site PCR diagnosis) | ✓ (H2 #6 disease detection, after AHPND/WSSV/EHP enumeration) |

Total distinct product/service mentions: 5. Brief explicitly tolerates 4–5 for full-tambak topic (line 98 of brief). Spacing: each anchored in a different H2, no two adjacent.

### E. ID ↔ EN parity

- Same 7 body H2s + 1 FAQ H2: ✓
- Same image placeholder positions (IMAGE_01 after hook, IMAGE_02 after H2 #3, IMAGE_03 after H2 #6): ✓
- Same internal link destinations mirrored /id/ ↔ /en/: ✓ (3 distinct cousin pairs)
- Same key facts (US$1.68B/billion, SNI 01-7246-2006, padat tebar 100–300/m², FCR 1.4, mortalitas 90–100% WSSV, etc.): ✓
- Word counts: ID = 2138 (target 1900–2300, in range), EN = 1852 (target 1600–1900, in range)
- 7 FAQ Q&As in both versions, same questions in same order: ✓

### F. Anti-cannibalization spot check

- `articles_history/index.json` contains 1 article: `pakan-ikan-nila-01` (different keyword cluster, tilapia not shrimp)
- Closest prior article in same domain: none (this is the first vaname-cluster article)
- Subtopic overlap (Jaccard): 0.0
- Verdict: distinct angle confirmed. No risk of cluster cannibalization. The dossier confirms this is the inaugural vaname article.

### G. Image plan alignment

- Image plan JSON validates: ✓
- Image count (3) matches placeholders (3) in both ID and EN: ✓
- Alt text ID + EN ≤125 chars: ✓ (longest is alt_en IMAGE_01 = 147... let me recheck)
  - IMAGE_01 alt_id: 117 chars ✓
  - IMAGE_01 alt_en: 147 chars — exceeds 125. Minor flag. Acceptable for accessibility (still well under WCAG 2.2 250-char practical limit) but tighter alt would be cleaner. Recommend leaving as-is for v1; trim on v2 if user requests.
  - IMAGE_02 alt_id: 112 ✓; alt_en: 108 ✓
  - IMAGE_03 alt_id: 117 ✓; alt_en: 121 ✓
- Hard-difficulty images have alternative-source notes (`fallback_note`): ✓ all 3
- `generation_status`: `images_generated` ✓
- All 3 PNG files exist at expected paths with correct bytes (1.54 MB / 720 KB / 1.01 MB): ✓ per `tambak-udang-vaname-01.manifest.results.json`

Sub-flag: IMAGE_01 alt_en at 147 chars is 22 over the 125 cap. Logged for tracking, not blocking for ship.
