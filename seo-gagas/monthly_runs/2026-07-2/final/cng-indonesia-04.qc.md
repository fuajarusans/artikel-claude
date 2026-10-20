---
brief_id: "cng-indonesia-04"
editor_run_date: "2026-07-08"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — CNG vs Listrik (EV): Dua Jalur Energi Bersih, Mana Cocok?

## Recommendation
**approve**

This is a genuinely strong, decision-useful comparison that occupies the SERP gap the brief identified — no Indonesian article was practically answering "CNG atau elektrifikasi, untuk kebutuhan saya, sekarang?" and this one does it with balance. The anti-AI scan is essentially clean (zero banned openers, zero em-dashes, AI-detector 0.04), every numeric claim traces to the dossier (RUPTL 306→511 TWh, bauran 54,4/22,2/23,0%, SPKLU 4.655/3.007, IEA ~200°C/75%), and all the fabricated-fact landmines were correctly avoided (no 500-SPBG target, no 1–5 juta konversi figures, no invented CNG-vs-EV g/km delta). Neutrality toward EV is maintained: SPKLU growth is called "momentum yang sah dan tak perlu dikecilkan," the honest H2 #5 concedes when electrification wins, and the emissions nuance is anchored on the 2025 coal-majority grid rather than a manufactured comparison. I fixed the one genuine on-page gap in-place (the two authoritative citations existed only in frontmatter, not as body hyperlinks) and softened one "terbaik" tell. Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero AI openers, 0 em-dashes, varied rhythm, honest hedges intact. AI-detector 0.04. |
| Factual & energi-gas / CNG accuracy | 9 | All 6 spot-checked numbers dossier-verified; dated/uncertain figures correctly framed as ranges/historical. |
| On-page SEO compliance | 9 | Meta/slug/H2/keyword all pass; fixed missing body external links. |
| GEO extractability (§2a) | 9 | 40–60-word answer after each major H2 (54/47/51/51/42); one quotable point per paragraph. |
| PGN Gagas framing discipline | 9 | 3 mentions, all provider/distributor framing; no superlatives, no "memproduksi." |
| Internal linking | 10 | Hub in lead + 2 cousins (Gasku, Gaslink), all natural inline anchors. |
| FAQ quality | 8 | 5 Q&As, answers 44–55 words, each carries a number. At the 5-minimum (brief suggested 6–7). |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04; no non-Gagas verbatim ≥20 words; number-echoes trace to cited ESDM/PLN/IEA. |

## What I fixed (changelog)
- Added the ESDM RUPTL 2025–2034 citation as an inline body hyperlink on the "(Kementerian ESDM, Juni 2025)" attribution in the grid section — it existed only in frontmatter `external_citations` before, so the on-page "≥1 external authoritative link" requirement was technically failing in the body.
- Added the IEA commentary citation as an inline body hyperlink on "Menurut analisis IEA" in H2 #3 (process heat) — same reason.
- Softened "Langkah awal **terbaik**" → "Langkah awal yang paling masuk akal" in the conclusion to remove a stray superlative tell (not a PGN Gagas brag, but avoided on principle).
- Updated frontmatter `word_count` 1496 → 1502 to match the polished body (anchor text counted, URLs excluded).

## What I flagged (open issues)
- ⚠️ **Slug / history-id collision** — `articles_history/index.json` already has a `2026-07-cng-indonesia-04` entry, but it's a *different* article (angle "cng-beyond-pipeline-daerah-tanpa-pipa", slug `cng-beyond-pipeline-gas-bumi-tanpa-pipa`). This batch's article is the "CNG vs listrik/EV" angle (slug `cng-vs-listrik-ev-mana-cocok`). Content does NOT overlap, so no cannibalization — but the curator should assign this a non-colliding history `id` (e.g. suffix the batch, `2026-07-2-cng-indonesia-04`) rather than overwrite the part-1 entry. *Recommendation*: curator dedups the id on commit.
- ⚠️ **FAQ at the 5-minimum** — brief targeted 6–7; draft ships 5 (all high quality). Passes the ≥5 floor, so not blocking. *Recommendation*: optional — the curator/writer could add "Apakah CNG lebih murah dari kendaraan listrik?" and "Apakah biaya konversi CNG mahal?" from the dossier's ready FAQ bank if they want to hit the brief's 6–7. Not required for approval.
- ⚠️ **PLN SPKLU citation link (Feb 2026)** — dossier flagged that the primary `web.pln.co.id` page failed to fetch during research (transient DNS). My plagiarism WebSearch confirmed the live PLN press release + multiple secondary outlets corroborate 4.655/3.007 and 44%, so the figure is safe; the article attributes it inline to "PLN" without a hyperlink, which is fine. No action needed.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep clean
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 occurrences
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 occurrences
- [x] "Dengan demikian" not overused — 0 occurrences
- [x] Em-dash count ≤2 — actual: **0**
- [x] Varied paragraph lengths — mix of 1-sentence ("Ini momentum yang sah dan tak perlu dikecilkan.") and 4–5-sentence blocks; burstiness CV 0.361
- [x] Not every H2 → 3-bullet list — 2 prose H2s lead with prose; only H2 #5 uses a numbered list, plus 2 tables
- [x] No generic claims without numbers — 6+ specific numbers present
- [x] No stacked hype adjectives — none (one "terbaik" fixed)
- [x] No service-dump paragraph — single anchor per mention

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Kebutuhan listrik 306 TWh (2024) → 511 TWh (2034), +205 TWh | dossier ✓ (ESDM RUPTL 2025–2034, high conf) | pass |
| Bauran pembangkit 2025: batubara 54,4%, gas 22,2%, EBT 23,0% | dossier ✓ (ESDM, high conf) | pass |
| SPKLU 4.655 unit/3.007 lokasi 2025, dari 3.223/2.192 (2024), ~44% | dossier ✓ + WebSearch (PLN/wartaekonomi/tempo) corroborated | pass |
| Gas 9,2 GW dari 27,9 GW tambahan kapasitas tahap I (2025–2029) | dossier ✓ (ESDM, high conf) | pass |
| IEA ~200°C ambang / ~75% panas industri kurang-intensif dielektrifikasi | dossier ✓ (IEA commentary, high conf) | pass |
| Converter kit Rp 13–36 juta (framed as 2023/historical) | dossier ✓ (flagged low-med; draft hedges correctly as illustrasi historis) | pass |

No fabricated numbers detected. Draft correctly OMITS the flagged non-authoritative figures (500 SPBG 2026; 1 juta/5 juta konversi targets) and asserts NO specific CNG-vs-EV g/km delta.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **50 chars**, "CNG" leads
- [x] Meta description 140–160 — actual: **143**
- [x] Slug ≤60, kebab-case, keyword — actual: `cng-vs-listrik-ev-mana-cocok` (28)
- [x] H1 contains keyword — "CNG vs Listrik (EV)..."
- [x] H2 count 4–5 — actual: **5** body H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#3) ; ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — yes (lead)
- [x] Definition snippet near top (40–60 words) — blockquote ~55 words
- [x] ≥8 LSI terms — CNG vs listrik, CNG vs EV, kendaraan listrik, elektrifikasi industri, panas proses, SPBG vs SPKLU, biaya konversi CNG, fuel switching, transisi energi, baseload/grid (10+)
- [x] 3 internal links (1 hub + 2 cousins) — hub `perusahaan-cng-indonesia` (lead), `gasku` (H2 #2), `gaslink` (H2 #3)
- [x] ≥1 external authoritative citation — actual: **2** (ESDM RUPTL + IEA) — *fixed to inline body links this pass*
- [~] FAQ 5–7 Q&As — actual: **5** (at floor; brief suggested 6–7 — flagged, non-blocking)
- [x] 2 image placeholders (up to 3) — actual: **3**
- [x] ≥1 list + ≥1 table — 1 numbered list + 2 tables
- [x] Word count 1,200–1,600 — actual: **1502** (body)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — #1:54, #2:47, #3:51, #4:51, #5:42
- [x] Each body paragraph makes one independently quotable, verifiable point — yes (one claim + one sourced fact each)
- [x] FAQ parseable for FAQPage schema; freshness in meta — FAQ clean H3 format; `publish_month: 2026-07-2` present (CMS sets dateModified)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas framed as gas-energy provider/partner (menyalurkan/melayani/memposisikan) — never "memproduksi"
- [x] ≤3 PGN Gagas self-mentions — actual: **3** (SPBG aside H2 #2; termal aside H2 #3; positioning line in Kesimpulan)
- [x] No unverifiable superlatives — none (one stray "terbaik" fixed)
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier — Gasku (transport), Gaslink (industri) used correctly; no invented specs
- [x] Closing uses a company_profile.md positioning line — "anak usaha PGN... energi transisi komplementer"
- [x] Soft website CTA present as the FINAL line — "...jelajahi pilihan solusinya di gagas.co.id." (soft, consultative)
- [x] Hub link present as natural inline anchor in lead — "[CNG di Indonesia](...)" — not a BACA JUGA callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword (cluster `cng-indonesia`): part-1 `cng-vs-lng-vs-lpg-apa-bedanya` (CNG vs sibling gases) and `cng-transisi-energi-indonesia` (macro/NZE role).
- Subtopic overlap (Jaccard estimate): **~0.12** — this article's axis is CNG vs *electrification* (fuel switching vs electrification), a fully distinct comparison. No EV/SPKLU/process-heat-vs-electricity subtopic exists in the prior cluster.
- Verdict: **distinct angle confirmed**. (See flagged history-id collision — content is distinct; only the numeric id string clashes.)

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran clean; `cng-indonesia-04.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict pass)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.361** (single low-severity flag vs the script's aspirational 0.45 target; clears the 0.30 editorial floor)
- [x] Plagiarism: distinctive passages web-checked; no non-Gagas verbatim hit ≥20 words — plagiarism score **0.05**
  - "CNG dan listrik bukan dua tim yang harus dimenangkan..." → no match (a football-analogy energy article exists but shares no verbatim string)
  - "memindahkan aplikasi termal ke gas dapat meredam sebagian tekanan pada grid" → zero matches (original)
  - SPKLU 4.655/3.007 sentence → facts corroborated by PLN/wartaekonomi/tempo; our phrasing not reproduced verbatim (shared-data exemption)
  - Boiler/furnace "energi termal yang padat dan kontinu" sentence → zero verbatim match
