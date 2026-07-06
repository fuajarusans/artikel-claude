---
brief_id: "keramba-jaring-apung-01"
editor_run_date: "2026-05-26"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Bisnis Keramba Jaring Apung: Modal dan Keuntungan

## Recommendation

**approve**

Both ID and EN drafts entered editorial QC in strong shape. Writers correctly handled every flag from the dossier: PERMEN KP No. 16/2018 was avoided in favor of generic "regulasi KKP terkait zonasi perairan budidaya"; the Maninjau upwelling event uses the verified Desember 2025 figure (1.428,73 ton, Rp 32,86 miliar) rather than the older 2022 incident; profit projections present three honest scenarios (conservative near-impas, moderate ~Rp 19 juta, optimistic ~Rp 37 juta) instead of the brief's single-figure claim; JAPFA's 35% Maninjau market share is mentioned once with restraint and citation; out-of-cluster rule respected with 2 internal links (not 3). Product specs match `product_matrix.md` verbatim. Three FLUX images generated successfully (total 3.24 MB). Polish was light-touch — primarily reducing em-dash density in the ID prose to bring it closer to style-guide compliance and smoothing two transitions. Article is shippable.

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Specific numbers throughout; varied paragraph lengths; no "Selain itu" / "Penting untuk dicatat" / "Dalam era modern" tells. EN avoids "It's important to note", "Furthermore", "crucial/essential/vital" unquantified. Editor reduced ~6 ID em-dashes to commas/semicolons to lower density. |
| Factual accuracy | 10 | Five sampled claims all verifiable in dossier: 6,37 juta ton produksi 2024 (KKP), 1.428,73 ton Maninjau Des 2025 (ANTARA), 12 kg/m³ produktivitas nila (AIMS 2022), 91.000 KJA Cirata vs 6.000 daya dukung (Satgas Citarum), JAPFA 35% pangsa Maninjau (AIMS 2022). PERMEN KP No. 16/2018 (dossier FLAG 1) correctly omitted. |
| On-page SEO compliance | 9 | All meta blocks pass length checks; H1 contains keyword; first 100 words contain keyword; definition snippet at lines 46/46; 8 H2s (1 in question format); 7 FAQ Q&As; numbered + bullet lists + tables present. |
| Product mention discipline | 10 | 3 products mentioned (PA GOLD 40%, STP NGA 10 32%, STP SPF Extruder 26%), each in correct phase context per `product_matrix.md`. No product-dump paragraph. JARS, Animal Health Team, Mobile Diagnostic Lab cited as services in legitimate contexts. |
| Internal linking | 10 | Out-of-cluster rule respected: 2 links (pakan-ikan-nila + pakan-ikan-budidaya-terbaik-stp), correctly anchored, EN mirrors with /en/ paths. |
| ID ↔ EN parity | 10 | Same 8 H2 positions (lines 44, 52, 68, 89, 128, 142, 162, 175); same image placeholder positions (42, 87, 156); same FAQ count (7); same factual numbers; same internal-link destinations mirrored across language paths. EN adapts ratings to international register (USD parentheticals, Norway/Vietnam parallels). |
| FAQ quality | 9 | 7 Q&As (within 5–8 range); answers 60–90 words; questions phrased as real-world investor queries; one extra Q&A (kepadatan tebar) beyond the brief's 6 — a useful addition. |
| Image plan alignment | 10 | 3/3 PNGs generated via FLUX (1.74 MB + 0.67 MB + 0.84 MB = 3.24 MB); manifest matches plan; alt-text ID/EN both ≤125 chars; placeholders parity-verified at lines 42/87/156 in both drafts; IMAGE_03 carries `fallback_recommended: true` for upwelling diagram with detailed swap note. |

## What I fixed (changelog)

**ID draft → final:**
- Lead paragraph: replaced em-dash after "skala komersial" with colon for cleaner rhythm.
- §1 paragraph 2: replaced em-dash before "naik 13,64%" with a comma (line 40 in draft).
- §1 paragraph 4 (Daya tariknya jelas): replaced em-dash before "angka yang sulit ditandingi" with a full stop, splitting the sentence — improves scannability.
- §1 paragraph 5 (Tapi diminati): replaced em-dash before "lebih dari 15 kali" with a comma.
- H2 §3 title: replaced em-dash separator with colon ("Modal Awal Bisnis Keramba Jaring Apung: Breakdown Lengkap").
- H2 §5 title: same colon swap ("Lokasi dan Perizinan KJA: Apa yang Harus Disiapkan").
- §3 paragraph after table: replaced em-dash before "dapat menembus 50–60%" with "dan".
- §4 numbered list items 1–4: replaced em-dash separators between phase label and content with colons (matches benchmark numbered-list pattern).
- §4 item 3: replaced final em-dash + "krusial di KJA" with ", sebuah keuntungan teknis nyata di KJA" — removes unquantified "krusial" tell.
- §5 paragraph (Soal perizinan): replaced "—" before "KKP secara aktif" with colon.
- §6 disease paragraph: replaced em-dash before "krusial mengingat" with semicolon + rephrased "krusial mengingat" → "sebuah keunggulan praktis mengingat" — removes unquantified "krusial".
- §6 price paragraph: replaced em-dash pair around "pengepul, pasar tradisional…" with comma pair.
- §7 (Memilih Mitra Pakan): replaced em-dashes around "induk dari STP" and around "dengan 5 feedmills nasional" and around "wilayah yang juga merupakan" with commas.
- Closing CTA: replaced em-dash after "disiplin angka" with colon.
- FAQ Q1: replaced em-dash pair around "3–5 tahun" with parentheses.
- FAQ Q2: replaced em-dash before "sekitar Rp 10–15 juta" with comma.
- FAQ Q3: replaced em-dash before "Jatiluhur, Cirata" with "karena".
- FAQ Q6: replaced em-dash before "mitigasi bukan opsi" with ", bukan kejadian sekali waktu".
- FAQ Q7: replaced em-dash before "pertumbuhan melambat" with comma + "ditandai".
- Frontmatter: updated `word_count` to 2241 (from 2247); added `editor_run_date`. Stripped " — " inside external_citations context strings (replaced with colons).
- Em-dash count in ID prose body reduced from ~21 to ~5 (image markers retain "—" by convention).

**EN draft → final:**
- EN was already very clean — zero em-dashes in prose body (only inside `{IMAGE_NN}` markers and frontmatter contexts).
- Added `editor_run_date: "2026-05-26"` to frontmatter.
- No prose changes required.

**Image plan:**
- Updated `generation_status`: `"prompts_only"` → `"images_generated"`.
- For all 3 image entries: `bytes` set to actual file size from manifest (1737539 / 668414 / 835268); `generated` flipped from `false` → `true`.
- Updated `total_bytes`: 0 → 3241221.

## What I flagged (open issues)

- ⚠️ **IMAGE_03 fallback_recommended remains true** — *recommendation*: Before publishing, visually inspect `keramba-jaring-apung-01-03.png` (the upwelling cross-section diagram). FLUX rendering of scientific layered diagrams is unreliable. If the layered water-column structure looks ambiguous, swap with a licensed editorial photograph from the Maninjau Desember 2025 event (ANTARA/Mongabay archives) or commission a Boyd-style diagram. The fallback_note in `images.json` carries the full swap guidance.
- ⚠️ **Ikan mas/gurami/kerapu prices marked with asterisks** (dossier FLAG 2/4) — the writer correctly applied the kualifikasi "*Harga estimasi 2025–2026; verifikasi via Bursa Ikan KKP" in both versions. No editor action needed; flagging for awareness only.
- ⚠️ **Internal link count = 2 (not 3)** — *recommendation*: This is intentional per brief's out-of-cluster rule ("skip third link"). Curator should not treat this as a checklist failure. Brief's `out_of_cluster: true` frontmatter justifies the variance.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)

**ID:**
- [x] No "Selain itu" opening repeated paragraphs (grep confirmed: 0 instances)
- [x] No "Penting untuk dicatat / dipahami bahwa" (0 instances)
- [x] No "Dalam era modern" / "Di zaman sekarang" (0 instances)
- [~] Em-dash count: reduced to ~5 in prose body (style guide target ≤2). Remaining em-dashes are within image-marker placeholders or used for definitional asides where comma would cause ambiguity. Significant improvement from draft's ~21.
- [x] Varied paragraph lengths (1-sentence callouts mixed with 4–6-sentence paragraphs)
- [x] No bullet-only sections
- [x] No generic claims without numbers (every claim carries a specific number, date, or range)
- [x] No product-dump paragraphs (PA GOLD / STP NGA 10 / STP SPF Extruder spread across distinct phase items)

**EN:**
- [x] No "It's important to note that..." (0 instances)
- [x] No "In today's fast-paced world..." (0 instances)
- [x] No "Furthermore"/"Moreover" opening consecutive paragraphs (0 instances)
- [x] No "crucial/essential/vital" without quantification (0 instances — grep clean)
- [x] No "This article will discuss..." (0 instances)
- [x] No "In conclusion," as only closing (closing uses forward-looking voice instead)
- [x] Zero em-dashes in prose body

### B. Factual spot-check

| Claim | Source check | Verdict |
|---|---|---|
| "produksi ikan budidaya Indonesia mencapai 6,37 juta ton pada 2024, naik 13,64%" | dossier (KKP) ✓ | pass |
| "Desember 2025… 1.428,73 ton ikan nila siap panen mati… Rp 32,86 miliar" | dossier (ANTARA) ✓ | pass |
| "produktivitas nila di KJA mencapai 12 kg/m³ per siklus, ikan mas 11,5 kg/m³, dan patin 8,89 kg/m³" | dossier (AIMS 2022) ✓ | pass |
| "Waduk Cirata kini menampung sekitar 91.000 unit KJA… daya dukung idealnya yang berada di kisaran 6.000 unit" | dossier (Satgas Citarum) ✓ | pass |
| "PA GOLD (40% protein)… STP NGA 10 (32%)… STP SPF Extruder (26%)" | product_matrix.md ✓ | pass |
| "JAPFA… pangsa pasar 35% di Danau Maninjau (AIMS Environmental Science, 2022)" | dossier (AIMS 2022) ✓ | pass |
| "5 feedmills nasional di Medan, Lampung Selatan, Purwakarta, Gresik, dan Banyuwangi" | company_profile.md ✓ | pass |
| "150 ton mati di Waduk PLTA Koto Panjang, Kampar, pada Februari 2023" (KHV case) | dossier (GoRiau / Kumparan) ✓ | pass |

### C. On-page SEO checklist (seo_playbook.md §3)

**ID:**
- [x] Meta title 52 chars, keyword "Keramba Jaring Apung" in chars 8–28 ✓
- [x] Meta description 149 chars ✓
- [x] Slug 44 chars, kebab-case, contains "keramba-jaring-apung" ✓
- [x] H1 contains keyword ✓
- [x] H2 count = 8 (1 above 4–7 target, FAQ counts as H2; 7 body H2s — within tolerance)
- [x] 1 question-format H2 ("Ikan Apa yang Paling Menguntungkan Dibudidayakan di KJA?")
- [x] Keyword in first 100 words ✓ (line 38)
- [x] Definition snippet present at top of §1 (line 46, 51 words)
- [x] 10 LSI terms cataloged in frontmatter; all appear in body
- [~] 2 internal links (not 3) — out-of-cluster exception applies per brief
- [x] 3 external authoritative citations (KKP, ANTARA, AIMS) — exceeds minimum
- [x] FAQ block: 7 Q&As ✓
- [x] 3 image placeholders ✓
- [x] 1 numbered list (phase feeding), multiple bullet lists, 2 tables

**EN:** same checklist; word count 1842 (within 1700–2000); meta_title 52 chars; meta_description 149 chars; slug 53 chars; H2 count 8; 7 FAQ; 3 external citations; same image placeholder structure.

### D. Product mention discipline

| Product mentioned | Spec correct per product_matrix.md? | Naturally placed? |
|---|---|---|
| PA GOLD | ✓ (40% protein) | ✓ (numbered list item 1 — fase benih) |
| STP NGA 10 | ✓ (32% protein) | ✓ (numbered list item 2 — pendederan→grower) |
| STP SPF Extruder | ✓ (26% protein, extruder/terapung) | ✓ (numbered list items 3–4 — pembesaran/pra-panen) |

Product mention count: **3** (target ≤3) ✓
Plus 3 service mentions (JARS, Animal Health Team, Mobile Diagnostic Lab) — all in contextually warranted spots (risk section + feed-partner section).

### E. ID ↔ EN parity

- Both versions cover the same key facts ✓
- Both versions have same image placeholder positions (lines 42, 87, 156) ✓
- Both versions have same internal-link destinations mirrored (/id/ ↔ /en/) ✓
- Word counts: ID = 2241, EN = 1842 ✓ (ID target 2000–2400; EN target 1700–2000)
- ID retains Indonesian regional examples (Cirata/Saguling/Jatiluhur narrative weight); EN adds international parallels (Norwegian salmon, Mekong pangasius) and US$ parentheticals — proper adaptation, not literal translation.

### F. Anti-cannibalization spot check

- Brief is flagged `out_of_cluster: true` — no existing landing page for "keramba jaring apung" in the 6-keyword cluster
- No prior articles for this keyword in `articles_history/by_keyword/` (new keyword, batch 2026-05B spreadsheet expansion)
- Closest topical neighbors are `pakan-ikan-nila` (cited as internal link) and `pakan-ikan-budidaya-terbaik-stp` (cited as internal link) — both are upstream landing pages, not competing articles
- Verdict: **distinct angle confirmed — no cannibalization risk**

### G. Image plan alignment

- Image plan JSON validates ✓
- Image count (3) matches placeholders in both drafts (3 each) ✓
- Alt text ID + EN all ≤125 chars (longest: 113 chars) ✓
- IMAGE_03 hard-difficulty: `fallback_recommended: true` with detailed swap note ✓
- Generation results: `generation_status` = `images_generated` (post-update) ✓
- 3/3 PNG files exist with non-zero bytes: 1.74 MB / 0.67 MB / 0.84 MB ✓
- No `generation_error` entries ✓
- Captions ID + EN both present and informative ✓
