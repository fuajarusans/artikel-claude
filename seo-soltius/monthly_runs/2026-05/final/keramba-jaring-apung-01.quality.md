---
brief_id: "keramba-jaring-apung-01"
validator_run_date: "2026-05-26"
verdict: "pass"
verdict_id: "pass"
verdict_en: "pass"
ai_score_id: 0.00
ai_score_en: 0.00
plagiarism_score_id: 0.00
plagiarism_score_en: 0.00
revision_loop: 0
---

# Quality Validator Report — Bisnis Keramba Jaring Apung: Modal dan Keuntungan

## Verdict: **pass**

Both ID and EN drafts cleared the heuristic AI detector with a perfect 0.00 score (zero pattern flags, healthy paragraph burstiness 0.533/0.563, healthy sentence burstiness 1.223/1.220, top-30 vocab share well below the 0.30 ceiling). All 16 plagiarism candidate passages (8 per language) were lookup-verified via WebSearch; the only verbatim hits surfaced are the **pre-cleared** numerical references explicitly noted by the orchestrator: ANTARA/Detik/CNN Indonesia coverage of the Maninjau December 2025 upwelling event (1.428,73 ton / Rp 32,86 miliar) and the Citarum Harum government statistics on dismantled KJA at Saguling/Jatiluhur. These are factual citations of public-record numbers tied to named, attributed external sources in the article itself, not lifted phrasing. The article is curator-ready.

## AI Detector (heuristic v2.0)

### Indonesian
- Score: **0.00** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness: 0.533 (target ≥0.45) ✓
- Sentence burstiness: 1.223 ✓
- Top-30 vocab share: 0.243 (well below 0.30 ceiling) ✓
- Word count: 2,718 (script tokenization; markdown frontmatter inflates raw vs. article's prose-only 2,241)
- Paragraph count: 38; sentence count: 121
- Flags (0): none triggered

### English
- Score: **0.00** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness: 0.563 (target ≥0.45) ✓
- Sentence burstiness: 1.220 ✓
- Top-30 vocab share: 0.210 (well below 0.30 ceiling) ✓
- Word count: 2,885 (script tokenization)
- Paragraph count: 38; sentence count: 129
- Flags (0): none triggered

The editor's intervention to drop em-dash density in the ID prose body from ~21 to ~5 is reflected in the burstiness profile: paragraph rhythm is varied (1-sentence callouts mixed with 4–6-sentence paragraphs), no opening-word repetition across consecutive paragraphs, no boilerplate connector words.

## Plagiarism (web lookup of distinctive passages)

### Indonesian — 8 candidate passages checked

- ✅ **Passage 1**: "**Fase benih (1–5 g, 2–3 minggu)**: pakan crumble berprotein 40% seperti PA GOLD…" — clean. No verbatim match; results returned generic poultry/aquaculture feed pages with no overlap on phrasing or the specific PA GOLD callout.
- ✅ **Passage 2**: "Untuk skala 4 lubang 4×4×3 m (volume efektif ~48 m³ per kantong), tebar awal 2.000–2.500 ekor per lubang sudah memadai." — clean. No matching source.
- ✅ **Passage 3**: "**Fase pembesaran (30–200 g, 2–3 bulan)**: pakan pellet extruder (terapung) berprotein 26% seperti STP SPF Extruder." — clean. One Facebook group post mentions "STP COMFEED SPF EXTRUDER" as a product reference but contains no overlap on the phase-band phrasing, weight range, or sentence structure.
- ✅ **Passage 4**: "## Studi Kasus: Proyeksi Laba-Rugi KJA Nila 4 Lubang Selama Satu Tahun. Banyak kalkulator bisnis KJA yang beredar memberi angka profit tunggal yang terkesan menggiurkan." — clean. No matching source for the heading or framing sentence.
- ⚪ **Passage 5**: "Kasus Maninjau Desember 2025 (1.428,73 ton, Rp 32,86 miliar)…" — **expected verbatim numerical hit; not plagiarism**. Matches across ANTARA News, Detik Science, CNN Indonesia, BeritaKaltim, Padang Express, Sumbar ANTARA, etc. These are the canonical sources cited by name in the article frontmatter (`external_citations` entry 1). The numerical figures are public-record data, not lifted prose; the article's framing sentence around the figure is its own composition. **Pre-cleared by orchestrator's special-context note.** Score contribution: 0.
- ✅ **Passage 6**: "Berikut tiga skenario yang lebih jujur, dengan asumsi sama: 4 lubang × 2.500 ekor (total 10.000 ekor/siklus)…" — clean. No matching source.
- ✅ **Passage 7**: "**Fase pendederan ke grower (5–30 g, 3–5 minggu)**: pakan pellet kecil berprotein 32% seperti STP NGA 10…" — clean. No matching source.
- ⚪ **Passage 8**: "Pada 2023, 1.710 KJA dibongkar di Saguling dan 2.179 di Jatiluhur; pemerintah masih menargetkan pembongkaran 10.000 KJA tambahan di Jatiluhur." — **expected verbatim numerical hit; not plagiarism**. Matches Citarum Harum official West Java government bulletin (`citarumharum.jabarprov.go.id`). The article is reporting these numbers as public regulatory facts, attributed in context to "Satgas Citarum Harum"; the framing sentence is original composition wrapping a sourced statistic. Comparable to citing a KKP production figure. Score contribution: 0.

**Aggregate ID plagiarism score: 0.00**

### English — 8 candidate passages checked

- ✅ **Passage 1**: "## Worked Example: One-Year Profit Outlook Across Three Scenarios. Most KJA business calculators circulating online produce a single, suspiciously rosy profit figure." — clean. No matching source.
- ✅ **Passage 2**: "Three scenarios below share the same baseline assumptions: four cages × 2,500 fish (10,000 per cycle), survival rate (SR) 80-90%…" — clean. No matching source.
- ✅ **Passage 3**: "**Fry phase (1-5 g, 2-3 weeks)**: crumble feed at 40% protein such as PA GOLD…" — clean. Results returned only generic high-protein crumble feed listings, no phrase overlap.
- ✅ **Passage 4**: "**Nursery to grower (5-30 g, 3-5 weeks)**: small pellets at 32% protein such as STP NGA 10…" — clean. No matching source.
- ⚪ **Passage 5**: "STP operates five feedmills (Medan, South Lampung, Purwakarta, Gresik, Banyuwangi) covering every major KJA region." — partial overlap with an Issuu interview piece featuring PT Suri Tani Pemuka's own President Director (aquafeed.com source, JAPFA-aligned distribution). The feedmill list is corporate self-disclosure documented across STP's own materials (`stpaquaculture.com`, `company_profile.md`); it is the same list of facts STP publishes about itself. Per spec, STP-owned sources are ignored as intentional self-reference, not plagiarism. The article's sentence structure ("covering every major KJA region") is original. Score contribution: 0.
- ✅ **Passage 6**: "**Grow-out (30-200 g, 2-3 months)**: extruded floating pellets at 26% protein such as STP SPF Extruder." — clean. Results returned only generic extruder-machine vendor pages with no phrase overlap.
- ✅ **Passage 7**: "The Lake Maninjau event of December 2025 (1,428.73 tons lost, IDR 32.86 billion in damages) confirms upwelling is recurring rather than freak." — clean. The underlying numerical event is documented across Indonesian-language sources (already addressed in ID Passage 5), but no English-language verbatim phrasing match exists. The article's framing sentence is original composition.
- ✅ **Passage 8**: "Indonesia's version is concentrated in inland reservoirs and deep volcanic lakes: Cirata, Saguling, and Jatiluhur in West Java, plus Lake Toba, Maninjau, and Singkarak in Sumatra." — clean. No verbatim match. The lakes/reservoirs are listed across many geographic sources, but the article's sentence structure (joining the two clusters with "plus") is original.

**Aggregate EN plagiarism score: 0.00**

## Loop status

This is revision loop **0** (first pass). No revision required — verdict is `pass`.

## Recommendation to orchestrator

**Curator-ready.** Both language versions pass cleanly on both AI-detection heuristics (score 0.00 each) and plagiarism web-lookup (score 0.00 each, with the two verbatim numerical hits pre-cleared as expected attribution of public-record figures to named external sources). Editor's `recommendation: approve` (overall 9/10) is upheld and confirmed. Pair verdict: **pass**.
