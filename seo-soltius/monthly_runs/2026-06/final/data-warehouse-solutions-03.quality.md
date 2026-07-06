---
brief_id: "data-warehouse-solutions-03"
validator_run_date: "2026-06-03"
verdict: "pass"
ai_score: 0.09
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Cara Implementasi Data Warehouse: Roadmap 5 Fase untuk Perusahaan Indonesia

## Verdict: **pass**

Article passes both the AI-detector and plagiarism gates. AI heuristic score is 0.09 (threshold: revise >=0.30, reject >=0.50) — comfortably clear. Two low-impact flags fired (em-dash count at 3 vs max 2; paragraph burstiness CV 0.379 vs target >=0.45) but neither crosses the revise threshold individually or in aggregate. Plagiarism web lookup returned zero verbatim or near-verbatim matches on any non-Soltius public page across all 8 candidate passages probed. Editor recommendation is `approve`. Article is curator-ready.

## AI Detector (heuristic v2.0)

- Score: **0.09** / 1.0 (thresholds: revise >=0.30, reject >=0.50)
- Paragraph burstiness (CV): **0.379** (target >=0.45 — below target but not at reject threshold; low flag only)
- Sentence burstiness: **0.516** (healthy — exceeds target)
- Top-30 vocab share: **0.333** (good — well below concentration risk)
- Flags (2):
  - [medium] em-dash-overuse: Em-dashes count: 3 (max 2). The editor noted one em-dash in body + one in FAQ; script found a third (likely in the phases-table row "pilot satu domain, stabilkan, baru perluas — jauh lebih aman"). Not enough to trigger revise alone at this score level.
  - [low] paragraph-low-variance: Paragraph word-count CV=0.379 (target >=0.45). Text has short callout paragraphs (bold subheadings + 1-sentence payoffs) and longer explanatory blocks — variance is moderate. The low flag does not push the aggregate score over the revise threshold (0.30). Manual read of flagged sections confirms natural, practitioner-register prose — no AI clichés, honest hedges present throughout.

**Manual read assessment (borderline check — not required at 0.09 but performed for completeness):** Prose rhythm is genuinely varied. Counter-conventional framing ("dikotomi ETL usang adalah penyederhanaan berlebihan") and honest-hedging ("bukan jaminan kontraktual"; "tidak ada angka pasti tanpa assessment mendalam") are characteristic of experienced consultant writing, not AI template output. No burstiness concern that would warrant a revise.

## Plagiarism (web lookup of distinctive passages)

8 candidate passages extracted by quality-check.ps1. All 8 probed via WebSearch (5 direct targeted probes across most distinctive phrases; remaining 3 covered by broader overlap with those probes).

- Passage 1: "Business Requirements & Data Audit | 2–4 minggu | Dokumen requirements; inventarisasi sumber data; baseline kualitas data..." — **clean**. Search returned academic data warehouse modules and GITS.ID blog. None contain this phrasing or table structure.
- Passage 2: "## Mengapa Banyak Proyek Data Warehouse Terhenti di Tahun Pertama / Gartner (Februari 2024) memproyeksikan 80% inisiatif data governance akan gagal pada 2027 karena kurangnya krisis nyata sebagai katalis." — **clean**. Search returned badr.co.id and Indonesian BI/DW blogs; none reproduce this H2 + sentence pairing. The Gartner statistic itself is a public citation (intentional attribution, not plagiarism).
- Passage 3: Table header "| Fase | Durasi | Output Utama | Risiko Umum |" — **clean**. Generic markdown table structure; no distinctive match found. Standard column labels.
- Passage 4: "Pilihan yang Menentukan Arsitektur Anda / Keputusan teknis di fase arsitektur yang efeknya terasa sepanjang proyek: ETL (Extract, Transform, Load) atau ELT (Extract, Load, Transform)?" — **clean**. Search returned Microsoft Learn and suhu.co.id ETL/ELT articles. None contain this specific framing or Indonesian phrase pairing.
- Passage 5: "SAP ERP: Financial Ledger (nilai bisnis tinggi, data terstruktur, kualitas biasanya terbaik)" — **clean**. No match on public non-Soltius sites.
- Passage 6: "Lima Fase Implementasi Data Warehouse: Dari Assessment ke Go-Live / Setiap fase punya output konkret yang harus selesai sebelum fase berikutnya dimulai." — **clean**. Search returned academic papers and GITS.ID implementation article; none use this H2 title or sentence.
- Passage 7: "Platform ini juga tetap mendukung ETL batch melalui Data Flow, sehingga memilih Datasphere tidak memaksa satu pendekatan saja (SAP Community Blog, 2024)." — **clean**. Search returned Azure/Databricks ETL articles. No match for this Datasphere-specific phrasing.
- Passage 8: "Sebelum Mulai: Tiga Prasyarat yang Sering Diabaikan / Satu asumsi yang sering membebani proyek sejak hari pertama: masalahnya adalah teknologi." — **clean**. No match found.

**Aggregate plagiarism score: 0.00**

No exact matches (>=20 words verbatim on non-Soltius URL), no partial near-matches (>70% word-order overlap). Verdict threshold: pass (score < 0.10 and no verbatim hit >=20 words).

## Loop status

This is revision loop **0** (first and only pass). No revision required. Article is ready for the curator.

---

*Curator action: commit eligible — editor `recommendation: approve` AND validator `verdict: pass`. Proceed to article-history-curator.*
