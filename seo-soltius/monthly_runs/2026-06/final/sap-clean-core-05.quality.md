---
brief_id: "sap-clean-core-05"
validator_run_date: "2026-06-03"
verdict: "pass"
ai_score: 0.23
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Clean Core SAP: Bagaimana Dampaknya pada Pilihan Brownfield vs Greenfield?

## Verdict: **pass**

The article cleared both checks. AI heuristic score is 0.23 — well below the 0.30 revise threshold — with strong sentence burstiness (1.029) and paragraph length variety. The script's medium-severity em-dash flag is a confirmed false positive: all 5 em-dashes in the document appear in non-prose structural elements (definition blockquote × 2, IMAGE placeholder text × 2, decision table cell headers × 1); prose body paragraphs contain zero em-dashes, consistent with the editor's correction log. Plagiarism lookup across all 8 candidate passages returned zero exact or partial matches on non-Soltius, non-cited external URLs. Article is curator-ready.

## AI Detector (heuristic v2.0)

- Score: **0.23** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.449** (target ≥0.45 — marginally below by 0.001; sentence burstiness at 1.029 compensates strongly)
- Sentence burstiness: **1.029**
- Top-30 vocab share: **0.368** (target <0.30 — above threshold, flagged low-severity)
- Flags (3):
  - [medium — FALSE POSITIVE] `em-dash-overuse`: Script counted 5 em-dashes total. Manual verification confirms all 5 are in non-prose structural elements — 2 inside the definition blockquote (functionally necessary per editor changelog item #1), 2 inside IMAGE placeholder text (lines 46 and 85), 1 inside decision table column-1 cell headers (line 66–68). Zero em-dashes appear in prose body paragraphs. Flag does not indicate AI-content risk.
  - [low] `paragraph-low-variance`: CV = 0.449, target ≥0.45. Margin is 0.001 — negligible. Article has 1-sentence, 2-sentence, 4-sentence, and 5-sentence paragraphs. Sentence burstiness of 1.029 confirms genuine length variation at sentence level.
  - [low] `vocab-repetition`: Top-30 words = 36.8% of body (target <30%). Acceptable for a highly technical niche article where domain terms (brownfield, greenfield, S/4HANA, clean core, kode Z, SAP, migrasi) must repeat for keyword targeting and reader comprehension. No banned filler terms detected.

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked via WebSearch:

- ✅ Passage 1: "SAP Business Suite 7 dan SAP ECC EhP 6–8 mengakhiri mainstream maintenance pada 31 Desember 2027" — phrasing unique to this article; search returned English-language SAP official and partner pages only; no Indonesian verbatim match.
- ✅ Passage 2: "Fungsionalitas yang masih dibutuhkan harus dibangun ulang menggunakan standar modern: key-user extensibility (konfigurasi tanpa kode), SAP Build, atau ABAP Cloud via SAP BTP" — phrasing unique; search returned general Indonesian SAP/ABAP intro articles with no overlap.
- ✅ Passage 3: "SAP mensyaratkan compatibility check via SAP Readiness Check dan Custom Code Migration Worklist untuk mengidentifikasi objek mana yang perlu diadaptasi ke standar ABAP Cloud" — phrasing unique; SAP Community/Help Portal sources found in English only; no Indonesian verbatim match.
- ✅ Passage 4: "Brownfield (system conversion) adalah konversi teknis sistem ECC yang ada ke S/4HANA menggunakan SAP Software Update Manager (SUM) dengan opsi Database Migration Option (DMO)" — concept is publicly known but phrasing in Indonesian is original; English SAP technical sources found; no Indonesian verbatim match.
- ✅ Passage 5: "GROW with SAP diposisikan untuk perusahaan midsize atau unit bisnis baru yang ingin implementasi greenfield cepat di S/4HANA Cloud Public Edition, dengan fit-to-standard yang ketat" — phrasing original; SAP official and partner content found in English only; no Indonesian verbatim match.
- ✅ Passage 6: "brownfield biasanya membutuhkan 9–18 bulan tergantung jumlah kode Z yang harus diremediasi; greenfield dengan re-desain proses bisnis cenderung 12–24 bulan" — search returned Think Tank Solusindo (8thinktank.com) Indonesian article about brownfield/greenfield/bluefield; manual fetch confirmed that article uses only qualitative language ("lebih panjang", "lebih singkat") with no numeric figures; these duration estimates are original to this article and correctly labelled as field estimates, not SAP/Gartner data.
- ✅ Passage 7: "Apa risiko utama migrasi brownfield jika core sudah sangat banyak kustomisasi" — standard FAQ question phrasing; no verbatim match found on any external Indonesian page.
- ✅ Passage 8: "Selective Data Transition (SDT), sering disebut 'bluefield' di komunitas SAP (meski istilah resmi SAP adalah Selective Data Transition), adalah pendekatan hibrida" — phrasing original; search confirmed the factual accuracy (SAP official term is SDT; "Bluefield" is SNP Group trademark; community-level synonym); no Indonesian page with verbatim match.

Aggregate plagiarism score: **0.00** (threshold revise ≥0.10)

## Loop status

This is revision loop **0**. First pass — no revision triggered. Article is curator-ready.
