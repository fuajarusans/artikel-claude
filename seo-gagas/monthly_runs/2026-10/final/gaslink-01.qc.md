---
brief_id: "gaslink-01"
editor_run_date: "2026-09-28"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Monitoring Konsumsi Gaslink: Dari Baca Meter hingga Efisiensi

## Recommendation
**approve**

The draft arrived unusually clean and ships with only light polish. It nails the brief's post-conversion angle (reading meter data → verifying MMBTU billing → SFC/baseline → anomaly detection), which is genuinely distinct from the CAPEX (gaslink-10) and boiler-retrofit (gaslink-12) siblings. Every critical hedge is honored: PGN Gagas is framed strictly as menyalurkan/menagih gas via Gaslink/GTM (never a producer); "hemat hingga 30%" and "bayar sesuai pemakaian aktual" are explicitly labeled klaim penyedia; metering accuracy is given as generic ISO 17089 / OIML R137 ranges (0,5–1,5), never as official Gaslink specs; no fabricated Rupiah (only the correctly-scoped HGBT US$6/MMBTU, expressly stated NOT to represent Gaslink CNG tariff); and no real-time dashboard/API is promised for the GTM segment. All five spot-checked facts trace to the dossier. AI-detector score is 0.04 and no plagiarism concern is evident from the heuristic pass. I fixed three minor items in-place; none required writer/strategist rework.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero em-dashes, no AI openers, honest hedging throughout; only a mild paragraph-uniformity flag (CV 0.352) |
| Factual & energi-gas / CNG accuracy | 10 | All 5 spot-checks pass vs dossier; hedges honored precisely |
| On-page SEO compliance | 9 | Meta/slug/H2/links/word-count all within spec |
| GEO extractability (§2a) | 9 | 40–60-word answer after every H2; one quotable point per paragraph; date_modified added |
| PGN Gagas framing discipline | 10 | Provider/distributor framing correct; all claims attributed; 2 self-mentions + CTA |
| Internal linking | 9 | 1 hub (lead) + 2 cousins, all natural inline anchors |
| FAQ quality | 9 | Raised 5→7 Q&As; each 40–80 words, self-contained |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04; plagiarism heuristic-only (no WebSearch) — no verbatim risk detected |

## What I fixed (changelog)
- Expanded the acronym on first use in the lead: "layanan CNG (*Compressed Natural Gas*) industri lain" (was bare "CNG") — entity clarity for GEO.
- Added 2 FAQ entries (5 → 7) using the dossier's pre-verified, hedge-labeled drafts: "Apa bedanya volume (m³) dan energi (MMBTU) di tagihan gas?" and "Kenapa konsumsi gas bisa naik padahal produksi tetap?" — both rewritten em-dash-free to hold the ≤2 em-dash rule (article stays at 0). Improves PAA/FAQPage coverage.
- Added `date_modified: "2026-09-28"` to the meta block (GEO freshness signal per seo_playbook §2a) and set final `word_count: 1562` from the scanner's tokenizer.

## What I flagged (open issues)
- ⚠️ Paragraph word-count variance CV = 0.352 — *below the script's 0.45 target but above the editor's ≥0.30 bar*. AI-detector score (0.04) and sentence burstiness (0.673) are both strong, so this is a non-blocking observation, not a fix. *Recommendation*: on any future refresh, split one body paragraph into a one-liner to lift variance; not worth disturbing clean prose now.
- ⚠️ One external citation (environment-indonesia.com) is a compliance-consultant blog, not a primary regulator — *recommendation*: acceptable as-is because the primary ESDM (Ditjen Migas) link and the ESDM-sourced RuangEnergi link are both present and carry the load; the blog only backs the Permen ESDM 8/2025 threshold, which is corroborated across the dossier.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — lead opens on a concrete pain
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — none present
- [x] No "Penting untuk dicatat / dipahami bahwa" — none
- [x] "Dengan demikian" not overused — absent
- [x] Em-dash count ≤2 — actual: 0
- [x] Varied paragraph lengths — mixes 1-sentence list items with 5–6-sentence prose; lead is long, snippet is a blockquote
- [x] Not every H2 → 3-bullet list — prose, table, numbered list, and bullet list are distributed across H2s
- [x] No generic claims without numbers — 10+ specific figures (30%, 10,42 juta SBM, 1,73%, US$6/MMBTU, 4.000 TOE, 15°C, 1 atm, 0,5–1,5, 3 tahun, 24 jam)
- [x] No stacked hype adjectives — "canggih" appears only in the counter-conventional H2 ("BELUM Perlu Sistem Monitoring Canggih"), used critically
- [x] No service-dump paragraph — closing names Gaslink (anchor) + Gasku (mandated cousin link) only

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Manajemen energi 2023: 410 entitas, hemat 10,42 juta SBM (~1,73%) | dossier ✓ (RuangEnergi mengutip Kementerian ESDM, 9 Feb 2024) | pass |
| HGBT US$6/MMBTU untuk 7 sektor industri; bukan tarif Gaslink CNG | dossier ✓ + product_matrix (explicitly hedged as HGBT-only) | pass |
| Kondisi referensi 15°C & 1 atm (ISO 13443); konversi via nilai kalor (ISO 6976) | dossier ✓ (ISO 13443:1996, ISO 6976:2016) | pass |
| Permen ESDM 8/2025: industri ≥4.000 TOE/tahun, tindak lanjut audit 3 tahun | dossier ✓ | pass |
| Kelas akurasi meter 0,5–1,5 (ISO 17089 / OIML R137), generic | dossier ✓ (framed as industry range, not Gaslink spec) | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 55 chars / "Gaslink" at char 20–27
- [x] Meta description 140–160 — actual: 158
- [x] Slug ≤60, kebab-case, keyword — actual: `monitoring-konsumsi-gaslink` (27)
- [x] H1 contains keyword — "...Gaslink..."
- [x] H2 count 4–5 body — actual: 5 body H2 (+ FAQ + Kesimpulan = 7 total, within 4–7)
- [x] ≥1 question-format H2 (#2); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — "Gaslink" in lead
- [x] Definition snippet near top — 49-word "Ringkasnya" blockquote
- [x] ≥8 LSI terms — counted: 15+ (smart meter, MMBTU, nilai kalor, SFC, EMS, baseline, air-fuel ratio, GTM, telemetri, audit energi, ISO 50006/6976/13443/17089, TOE)
- [x] 3 internal links — gaslink.co.id/gaslink (lead), /perusahaan-cng-indonesia (H2#2), /gasku (Kesimpulan)
- [x] ≥1 external authoritative citation — actual: 3 (ESDM Ditjen Migas, RuangEnergi/ESDM, environment-indonesia)
- [x] FAQ 5–7 Q&As — actual: 7
- [x] 2 image placeholders — {IMAGE_01}, {IMAGE_02}, both with alt text
- [x] ≥1 list + ≥1 table — numbered list (H2#4), bullet list (H2#5), table (H2#3)
- [x] Word count 1,200–1,600 — actual: 1562

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified for all 5 body H2s (42/46/42/48/52 words)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-09-28` present in meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider — "menagih Gaslink", "menyalurkan gas bumi"; never a producer
- [x] ≤3 PGN Gagas self-mentions — actual: 2 named ("PGN Gagas") + 1 gagas.co.id CTA
- [x] No unverifiable superlatives — none
- [x] Product names + specs match product_matrix.md / dossier — Gaslink (CNG industri/komersial via GTM) correct
- [x] Closing uses a company_profile.md positioning line — "anak usaha PGN dalam Subholding Gas Pertamina, menyalurkan gas bumi..."
- [x] Soft website CTA present as FINAL line — "...kunjungi gagas.co.id dan mulai konsultasi."
- [x] Hub link as natural inline anchor in the lead — "[Gaslink](https://gagas.co.id/gaslink/)" — not a BACA JUGA callout

### E. Anti-cannibalization spot check
- Closest prior articles: `biaya-beralih-ke-gaslink-capex-konversi` (gaslink-10, decision — meter as CAPEX component) and `gaslink-konversi-boiler-oven-retrofit` (gaslink-12, how-to — air-fuel ratio at commissioning).
- Subtopic overlap (Jaccard estimate): ~0.05 — only "meter" and "air-fuel ratio" touch tangentially; MMBTU verification, SFC, baseline, anomaly detection, EMS, audit thresholds are all new.
- Verdict: distinct angle confirmed (operational post-conversion monitoring, not installation/commissioning). angle_hash sha1:878a51d8f839 unique.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `gaslink-01.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: 0.04 (verdict: pass)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: 0.352 (sentence burstiness 0.673; top30 vocab share 0.295)
- [~] Plagiarism: **heuristic-only (no WebSearch — per task constraint)**. 8 candidate passages extracted; reviewed manually: all are either (a) the article's own paraphrased statistics carrying inline citations to the very sources they'd match (ruangenergi/ESDM, environment-indonesia, ESDM Ditjen Migas — allowed), (b) well-known definitions ("MMBTU adalah…", "meter mengukur volume…"), or (c) unique H2 headings. No non-Gagas verbatim ≥20-word lift is evident. plagiarism_score: 0.05 (heuristic estimate; not web-verified).
