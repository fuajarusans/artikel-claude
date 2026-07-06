---
brief_id: "erp-migration-to-the-cloud-01"
validator_run_date: "2026-06-08"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — RISE with SAP vs GROW with SAP: Mana Jalur Migrasi ERP ke Cloud yang Tepat?

## Verdict: **pass**

Both gates cleared. The heuristic AI detector returned a score of 0.04 (threshold for revise is 0.30), with only a single low-severity flag on paragraph word-count variance (CV 0.316 vs target 0.45) that does not breach the 0.30 hard floor and is offset by strong sentence burstiness (0.789). All 8 plagiarism-candidate passages were searched and returned clean: no verbatim or near-verbatim matches on any non-Soltius public page. The article is curator-ready.

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise >=0.30, reject >=0.50)
- Paragraph burstiness (CV): **0.316** (target >=0.45 — below target but above the 0.30 hard floor; see note)
- Sentence burstiness: **0.789** (healthy; strong cross-sentence length variation)
- Top-30 vocab share: **0.331** (healthy; no vocabulary-concentration concern)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.316 (target >=0.45)

**Note on the paragraph-variance flag:** CV=0.316 sits between the 0.30 hard floor (below which approving is a protocol violation) and the 0.45 target. The editor's changelog confirms paragraph rhythm was manually varied (1–6 sentence blocks observed across the draft), and the sentence burstiness metric of 0.789 is strong. The word-count CV is depressed partly by the two comparison tables and the FAQ block, which contribute short paragraphs that compress the distribution. No AI-pattern strings (cliche openers, "Selain itu" stacking, em-dash excess, generic claims) fired. At 0.04 overall, this does not trigger a revise.

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked via WebSearch with exact-phrase queries.

- Passage 1: "Berdasarkan SAP Support Portal, mainstream maintenance untuk SAP ECC (Business Suite 7 dengan Enhancement Package 6, 7, atau 8) berakhir 31 Desember 2027." — clean. General English-language articles about ECC 2027 deadline found; no Indonesian-language verbatim match on any public non-Soltius page.
- Passage 2: "Mainstream maintenance SAP ECC (Business Suite 7 dengan Enhancement Package 6, 7, atau 8) berakhir 31 Desember 2027." (FAQ variant) — clean. Same underlying public fact; no Indonesian verbatim match found.
- Passage 3: "Kapan RISE atau GROW BELUM Tentu Jalur Termudah Anda — Tidak setiap perusahaan yang merasa 'harus pindah ke cloud' otomatis cocok dengan RISE atau GROW." — clean. No matching content found; generic cloud migration results in Indonesian returned no overlap.
- Passage 4: "Dalam praktik nyata, program SAP GROW Fast menargetkan gelombang pertama sekitar 12 minggu, dan umumnya mendekati 16 minggu bila kesiapan pelanggan diperhitungkan." — clean. SAP GROW Fast documentation confirms the 12-week first-wave timeline in English; no Indonesian-language verbatim match.
- Passage 5: "Ya, RISE umumnya menyertakan kredit SAP Business Technology Platform (BTP) dan starter pack SAP Signavio untuk transformasi proses bisnis, terutama di tier Premium/SAP Cloud ERP Private." — clean. English RISE bundle documentation found at multiple partner sites; no Indonesian verbatim match.
- Passage 6: "RISE vs GROW: Perbandingan Berdampingan — Perbedaan terbesar bukan soal merek, melainkan arsitektur dan kebebasan kustomisasi." — clean. No matching content found on any public page.
- Passage 7: "RISE with SAP vs GROW with SAP: Mana Jalur Migrasi ERP ke Cloud yang Tepat?" — clean. English RISE vs GROW comparison articles found (leverx.com, arvato-systems.com, nbs-us.com, vasscompany.com); no Indonesian verbatim match on any non-Soltius page. The title is a natural Indonesian question formulation around a common comparison topic.
- Passage 8: "RISE umumnya menyertakan kredit SAP Business Technology Platform (BTP), yaitu platform untuk integrasi dan ekstensi, plus starter pack SAP Signavio untuk analisis proses bisnis, dan SAP Business Network." — clean. English sources confirm BTP + Signavio bundling; no Indonesian verbatim match.

**Aggregate plagiarism score: 0.00**

No exact matches (>=20 words verbatim on a non-Soltius URL). No partial near-matches (>70% word-order overlap). Common-knowledge phrasings (SAP ECC maintenance dates, RISE/GROW bundle descriptions) are inherently high-overlap topics but the Indonesian formulations are original to this article.

## Loop status

This is revision loop 0. Verdict is pass — no revision loop required. Article is curator-ready.
