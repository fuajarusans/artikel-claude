---
brief_id: "data-warehouse-solutions-01"
validator_run_date: "2026-06-08"
verdict: "pass"
ai_score: 0.24
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Berapa Biaya Data Warehouse? Rincian TCO dan Komponen untuk Perusahaan

## Verdict: **pass**

The article clears both gates cleanly. AI heuristic score is 0.24, well below the 0.30 revise threshold. The script's medium-severity em-dash flag is a false positive: manual review confirms only 1 em-dash in flowing prose (the retained lead signature), with the remaining 8 living exclusively inside table cells and image-placeholder descriptions — structured markup the style guide explicitly exempts from the ≤2 prose cap. Paragraph burstiness (CV 0.391) sits below the 0.45 target but comfortably above the 0.30 hard floor, and sentence burstiness (0.701) and low vocabulary concentration (top-30 share: 0.322) confirm the article reads as varied human prose. On plagiarism, all 8 distinctive passages returned zero verbatim or near-verbatim matches on any non-Soltius public page. The article is curator-ready.

## AI Detector (heuristic v2.0)

- Score: **0.24** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.391** (target ≥0.45; hard floor ≥0.30 — above floor)
- Sentence burstiness: **0.701** (strong — well above target)
- Top-30 vocab share: **0.322** (no concentration concern)
- Flags (2):
  - [medium] em-dash-overuse: "Em-dashes count: 9 (max 2)" — **RESOLVED / FALSE POSITIVE on structured markup**. Manual recount: 1 em-dash in body prose (lead paragraph, retained as "signature lead" per editor changelog); 7 em-dashes in comparison table cells (lines 60–64, 76, 79); 2 em-dashes inside {IMAGE_NN} placeholder descriptions (lines 48, 86). Style guide §5 cap applies to flowing prose only; table-cell and placeholder dashes are formatting elements. Prose em-dash count = 1, within limit.
  - [low] paragraph-low-variance: "Paragraph word-count CV=0.391 (target ≥0.45)" — noted but not blocking. The article demonstrates clear length variation: a 4-sentence lead, a 3-sentence blockquote, 1-sentence standalone paragraphs ("Satu pos teknis…"), a 5-item numbered list, two comparison tables, and a 6-Q&A FAQ block. Sentence burstiness at 0.701 and overall AI score at 0.24 confirm the variance is genuine. Above the 0.30 hard floor; no revise warranted.

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked via WebSearch (exact-phrase queries from quality-input JSON).

- Passage 1: "Cloud menang di tahun-1 karena tanpa CapEx; perbandingan TCO 3–5 tahun-lah yang menunjukkan gambaran sebenarnya…" — clean. Search returned general cloud-vs-on-premise articles with thematic overlap only; no phrase match.
- Passage 2: "Integrasi & ETL | Konektor ke sumber (ERP, CRM, IoT, flat file); pipeline data; middleware | Sulit — kompleksitas…" (table cell) — clean. No page reproduces this exact table structure.
- Passage 3: "Sejak April 2024, entri minimumnya turun drastis dari 4.300 CU menjadi 1.532 CU per bulan, menurunkan ambang masuk bagi…" — clean. Query returned unrelated date-calculator and economic-data pages; no source publishes this specific CU-minimum claim in this phrasing.
- Passage 4: "Migrasi Data Historis | Ekstraksi, pembersihan, transformasi, validasi data lama | Sulit — kualitas data lama sering…" (table cell) — clean. Generic data-migration concept pages returned; no phrase match.
- Passage 5: "Platform / Lisensi / Kapasitas | Langganan cloud atau lisensi on-prem; Capacity Unit (CU) untuk SAP Datasphere/HANA Cl…" (table cell) — clean. SAP Datasphere licensing pages returned discuss CU in English; no Indonesian phrase match.
- Passage 6: "Kelimanya: (1) platform, lisensi, atau kapasitas; (2) integrasi dan ETL dari sistem sumber; (3) migrasi data historis;…" — clean. ETL/migration concept pages returned; no phrase match.
- Passage 7: "Talenta / SDM | Data engineer, DBA, data analyst; pelatihan pengguna bisnis | Sedang — pasar talenta data mahal dan…" (table cell) — clean. Indonesian talent-training pages returned; no structural match.
- Passage 8: "Jika workload turun, konsumsi bisa dikurangi; SAP HANA Cloud bahkan memungkinkan instance dimatikan sehingga biaya compute berhenti…" — clean. SAP HANA Cloud pages discuss cost management generically in English; no Indonesian phrase match.

Aggregate plagiarism score: **0.00**

No exact match (≥20 words verbatim) found on any non-Soltius public page. No partial near-match (>70% word-order overlap) found. All web results show thematic or topical proximity only, consistent with common B2B IT subject matter, not lifted phrasing.

## Loop status

This is revision loop 0. Verdict is pass — no writer revision required.
