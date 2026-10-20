---
brief_id: "perusahaan-lng-indonesia-01"
editor_run_date: "2026-07-08"
recommendation: "approve"
overall_score: 9
ai_score: 0.00
plagiarism_score: 0.05
---

# Editor QC Report — LNG untuk Pembangkit Listrik: Gasifikasi Kelistrikan di Daerah Terpencil

## Recommendation
**approve**

Curator-ready. The one substantive anti-AI issue (6 em-dashes in prose, above the ≤2 style-guide cap) was fixed in-place, dropping the prose count to 1. Every hard factual guardrail this article is at risk on holds: the ESDM 47-lokasi/282,93-BBTUD and 68%-domestik figures are labeled "per data ESDM 2023" (not conflated with the 2020–21 52/32-lokasi vintage, which the draft explicitly separates); the BPP evidence uses only the PLTG Sambera 38%/~Rp 70 miliar case scoped to one plant (no Rp 621,70/kWh, no national generalization); Nusantara Regas / FSRU Lampung / "30 kargo 2026" are absent, so no PT PGN LNG Indonesia activity is misattributed to Gagas; Gagas is framed strictly as a beyond-pipeline hilir distributor operating an LNG Hub — no "pionir/pemimpin pasar," no producer/liquefaction/FSRU claim; ISO 45001 (CNG-scoped) is not invoked as LNG competency. GEO extractability is strong (every H2 opens with a 40–60-word answer). AI-detector 0.00, paragraph burstiness 0.455, no verbatim ≥20-word non-Gagas lift. Word count 1587, inside band and ≤1600.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Varied rhythm (burstiness 0.455); honest hedging throughout; em-dash overuse fixed |
| Factual & energi-gas / CNG accuracy | 10 | All figures dossier/ESDM-sourced; vintage separation and case-scoping exact; no overclaim |
| On-page SEO compliance | 9 | Meta 54/153 chars, slug 43; keyword exact-match carried by lead anchor rather than H1 (angle-specific title) |
| GEO extractability (§2a) | 10 | 40–60-word answer after each of 5 H2s (48/47/49/47/41); one quotable point per paragraph |
| PGN Gagas framing discipline | 10 | 2 self-mentions; hilir/LNG-Hub framing; positioning line + soft CTA; no superlatives |
| Internal linking | 10 | 3 natural inline anchors (hub in lead + 2 cousins); no BACA JUGA |
| FAQ quality | 9 | 6 self-contained Q&As, 40–80 words each, FAQPage-parseable |
| Originality (plagiarism + AI-detector) | 10 | AI 0.00; only shared-fact/standard-definition echoes, no prose lift |

## What I fixed (changelog)
- Reduced em-dashes in body prose from 6 to 1 (style_guide §5 cap is ~2). Converted:
  - Definition snippet: "*virtual pipeline* — kapal atau ISO tank — lalu" → "*virtual pipeline* (kapal atau ISO tank), lalu"
  - H2 #1 body: "ke gas bumi — dipasok lewat pipa" → "ke gas bumi: dipasok lewat pipa"
  - H2 #4 body: "Rp 1.721/kWh — sekitar 38%" → "Rp 1.721/kWh, sekitar 38%"
  - FAQ #1: "282,93 BBTUD — 24 sudah beroperasi" → "282,93 BBTUD: 24 sudah beroperasi"
  - Kept the single lead em-dash ("satu program dan satu moda — gasifikasi kelistrikan dengan LNG") as the one permitted stylistic dash. (Em-dashes inside the two {IMAGE_NN} design-brief captions were left untouched — they are caption/design text, not published body prose.)
- Updated frontmatter `word_count` 1562 → 1587 (clean prose count excluding {IMAGE_NN} placeholders; script reports 1588).

## What I flagged (open issues)
- ⚠️ Meta title / H1 lead with the article's angle ("LNG untuk Pembangkit: Gasifikasi Kelistrikan Terpencil") rather than the exact primary-keyword phrase "Perusahaan LNG Indonesia." *Recommendation*: acceptable and intentional — this is an angle-specific supporting article; the exact phrase is carried by the natural inline hub anchor "perusahaan LNG di Indonesia" in the first paragraph and by the frontmatter. Forcing the exact phrase into a ≤60-char title would either overflow or read unnatural. No change needed; noted for curator visibility.
- ⚠️ BPP raw ESDM figure is Rp 2.780,86 → Rp 1.721,17/kWh; the article uses the dossier's rounded Rp 2.780,6 → Rp 1.721. *Recommendation*: harmless rounding, matches the dossier; the ~38% / ~Rp 70 miliar framing scoped to one plant is correct. Leave as-is.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — none (grep clean)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — none present
- [x] No "Penting untuk dicatat / dipahami bahwa" — none
- [x] "Dengan demikian" not overused — absent
- [x] Em-dash count ≤2 — prose count now 1 (was 6; fixed)
- [x] Varied paragraph lengths — burstiness CV 0.455 (script)
- [x] Not every H2 → 3-bullet list — 2 of 5 H2s are prose-led; mix of prose/numbered list/table/bullets
- [x] No generic claims without numbers — 6+ inline data points, all sourced
- [x] No stacked hype adjectives — none (honest, concrete voice)
- [x] No service-dump paragraph — single relevant anchor (LNG Hub / Gaslink) in the close

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Program gasifikasi 47 lokasi / 282,93 BBTUD (24/3/20), labeled "per data ESDM 2023" | dossier ✓ + migas.esdm.go.id (WebSearch confirmed exact figures + Kepmen 249.K/2022) | pass |
| ~68% pemanfaatan gas domestik, labeled "per data ESDM 2023" / "arah kebijakan" | dossier ✓ + ESDM article title | pass |
| PLTG Sambera BPP Rp 2.780,6 → Rp 1.721/kWh (~38%), ~Rp 70 miliar/th, scoped one plant | dossier ✓ + migas.esdm.go.id / Liputan6 (WebSearch confirmed; Rp 621,70 correctly absent) | pass |
| Proyeksi PLN 1.748 → 2.490 BBTUD, kargo 103 → 214 (2026–2034), attributed PLN EPI/ANTARA | dossier ✓ (ANTARA 11 Mei 2026, corroborated 6 outlets) | pass |
| 2020 (52 lokasi PLN) & 2021 (32 lokasi/5 klaster PGN) kept SEPARATE from 47-lokasi 2023 | dossier ✓ (explicit "vintage berbeda; jangan disamakan") — guardrail satisfied | pass |
| Framing: Nusantara Regas / FSRU Lampung / "30 kargo 2026" NOT attributed to Gagas | dossier framing guard ✓ — figures absent from article entirely | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword-entity "LNG" in first 30) — actual: 54 chars / "LNG" at pos 1
- [x] Meta description 140–160 — actual: 153 chars
- [x] Slug ≤60, kebab-case, keyword-led — actual: `lng-untuk-pembangkit-gasifikasi-kelistrikan` (43)
- [x] H1 contains keyword entity (LNG + pembangkit) — yes
- [x] H2 count 4–5 — actual: 5 body H2s (+FAQ +Kesimpulan)
- [x] ≥1 question-format H2 (#1–#4); ≥1 honest/counter-conventional H2 (#5) — yes
- [x] Keyword/entity in first 100 words — "LNG" + hub anchor "perusahaan LNG di Indonesia" in lead
- [x] Definition snippet near top (40–60 words) — blockquote, 55 words
- [x] ≥8 LSI terms — counted 12+ (gasifikasi kelistrikan, PLTMG, PLTDG, PLTG, HSD, virtual pipeline, ISO tank, mini regasification, BBTUD, FSRU, hub-and-spoke, dual-fuel, mini LNG)
- [x] 3 internal links (1 hub + 2 cousins) — perusahaan-lng-indonesia (lead), perusahaan-cng-indonesia (H2#4), gaslink (close)
- [x] ≥1 external authoritative citation — 2 (migas.esdm.go.id; antaranews.com/PLN EPI)
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — 3 {IMAGE_NN}
- [x] ≥1 list + ≥1 table — numbered 5-step list, bullet list, comparison table
- [x] Word count 1,200–1,600 — actual: 1587

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — H2#1–#5: 48/47/49/47/41 words
- [x] Each body paragraph makes one independently quotable, verifiable point — yes; inline attributions
- [x] FAQ parseable for FAQPage schema; freshness noted — figures date-stamped ("per data ESDM 2023", "11 Mei 2026"); dateModified handled by CMS/meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/partner (menyalurkan/menghadirkan/melayani; operates LNG Hub) — NOT producer/liquefier/FSRU operator
- [x] ≤3 PGN Gagas self-mentions — actual: 2 (mid-article aside line 64 + closing line 134)
- [x] No unverifiable superlatives — none; "pionir/pemimpin pasar" correctly avoided
- [x] Product names + specs match product_matrix.md / dossier — LNG Hub, Gaslink, beyond-pipeline all accurate
- [x] Closing uses a company_profile.md positioning line — "anak usaha PGN … bagian Subholding Gas Pertamina … beyond pipeline"
- [x] Soft website CTA present as FINAL line — "…kunjungi gagas.co.id." (consultative, after Kesimpulan)
- [x] Hub link is natural inline anchor in the lead — "perusahaan LNG di Indonesia"; no BACA JUGA

### E. Anti-cannibalization spot check
- Closest prior articles (keyword_slug `perusahaan-lng-indonesia`, part-1): `rantai-pasok-lng-likuifaksi-pengguna-akhir`, `lng-beyond-pipeline-konsep-lng-hub`, `lng-untuk-industri-kapan-lebih-cocok-dari-cng`
- Subtopic overlap (Jaccard estimate): ~0.15 — this article's core subtopics (gasifikasi kelistrikan, PLTMG/PLTDG, konversi HSD, ESDM program numbers, mini regasification for power plants) are net-new; part-1 treats "pembangkit" only as one generic end-node
- Verdict: distinct angle confirmed (angle_hash sha1:cbf664fcb57f unique)

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran clean (exit 0); `perusahaan-lng-indonesia-01.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: 0.00 (verdict pass, 0 flags, external_api_used: false)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: 0.455 (sentence burstiness 0.521; top-30 vocab share 0.308)
- [x] Plagiarism: 8 candidates web-checked (top 4 distinctive + Sambera case). All matches are on shared sourced facts (ESDM 47-lokasi program, PLTG Sambera BPP, PLTMG dual-fuel definition) or standard industry definitions (LNG -162°C/1÷600) — no non-Gagas verbatim ≥20-word prose lift. plagiarism score: 0.05
