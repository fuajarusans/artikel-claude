---
brief_id: "business-intelligence-04"
validator_run_date: "2026-06-08"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Cara Mendesain Dashboard BI yang Benar-Benar Dipakai (Bukan Diabaikan)

## Verdict: **pass**

Both gates cleared cleanly. The AI heuristic score is 0.04 (threshold revise >=0.30), reflecting a genuinely human-sounding draft: healthy sentence burstiness (0.669), well-distributed vocabulary (top-30 share 0.304), and one low-severity paragraph-variance flag that sits above the hard-fail floor (CV 0.354 vs. 0.30 floor). All 8 plagiarism candidates returned clean on web lookup — no verbatim or near-verbatim matches on any non-Soltius public page. The article is curator-ready.

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise >=0.30, reject >=0.50)
- Paragraph burstiness (CV): **0.354** (target >=0.45; hard-fail floor 0.30 — above floor, flag logged)
- Sentence burstiness: **0.669** (healthy)
- Top-30 vocab share: **0.304** (healthy)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.354 (target >=0.45) — below the ideal but above the 0.30 hard-fail threshold; article has 26 paragraphs with mix of 1-sentence beats and multi-sentence blocks; score of 0.04 confirms this is a mild structural note, not a statistical AI tell.

Manual review of the low-flag: The editor's changelog confirms deliberate paragraph-length variation was applied (1-sentence beats mixed with 4-6 sentence blocks per style_guide.md §2). The low CV likely reflects the FAQ section contributing many short, similarly-sized Q&A blocks, which is expected for this format. No AI-cliché patterns (em-dash overuse fixed by editor; no "Di era digital", "Dengan demikian" repeats, "Sebagai kesimpulan", stacked hype adjectives, or service-dump). Flag does not warrant revise given the overall score of 0.04 and confirmed manual structure review.

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked via WebSearch.

- Passage 1: "Berdasarkan prinsip beban kognitif (merujuk riset George Miller, otak optimal pada 7±2 item), dashboard eksekutif sebaiknya menampilkan 3-5 KPI utama..." — clean. Search returned Indonesian psychology articles about Miller's Law (psikohub.com, slideshare) and UX articles (sis.binus.ac.id) — none containing this phrasing.
- Passage 2: "Sebagai panduan awal, tampilkan 5-7 KPI per layar untuk dashboard eksekutif (idealnya 3-5 KPI tingkat tinggi) dan 7-9 untuk dashboard operasional yang dipantau harian." — clean. Results (gadjian.com, fanruan.com, hadirr.com) discuss KPI dashboard concepts with different wording; no verbatim overlap.
- Passage 3: "Ada banyak pilihan, mulai dari Microsoft Power BI, Tableau, dan Looker, hingga SAP Analytics Cloud yang umum di lingkungan enterprise berbasis SAP." — clean. Results (8thinktank.com, alldataint.com, dqlab.id) enumerate similar tools but with distinct phrasing; no sentence match.
- Passage 4: "Efek 3D, bayangan, dan dekorasi adalah apa yang Edward Tufte sebut chartjunk dalam The Visual Display of Quantitative Information (1983)." — clean. All Tufte/chartjunk results are in English (thecommspot.com, chartbuddy.io, Wikipedia); the Indonesian rendering is original.
- Passage 5: "Lima Prinsip Menyusun Hierarki Visual Dashboard — Hierarki visual adalah cara desain mengarahkan mata pengguna ke informasi terpenting lebih dulu, lewat posisi, ukuran, dan kontras." — clean. Results (ematicsolutions.com, kelas.work, glints.com, bimashabartum.co.id) discuss visual hierarchy with different phrasing and contexts; no sentence match.
- Passage 6: "Mengapa Dashboard Bagus Pun Sering Diabaikan — Desain yang baik perlu, tetapi tidak cukup." — clean. Results (sis.binus.ac.id, artavista.id, badr.co.id) address related themes; sis.binus.ac.id has a topically adjacent dashboard-bias piece but no phrase overlap with this article.
- Passage 7: "KPI yang konsisten lintas divisi menuntut satu sumber data ter-governance, yang dibangun lewat fondasi seperti Data Warehouse Solutions, bukan tambal-sulam ekspor." — clean. Results (sd.itera.ac.id, lawencon.com, dama.or.id) discuss data governance broadly; no verbatim match.
- Passage 8: "Dasarnya adalah riset psikologi kognitif George Miller (1956) yang menemukan memori kerja manusia menangani sekitar 7±2 item sekaligus." — clean. Results (delphipages.live, id.scribd.com, dosenpsikologi.com) discuss Miller in Indonesian but with different sentence constructions; no verbatim match.

Aggregate plagiarism score: **0.00** (pass threshold: <0.10, no 20-word verbatim hits)

## Loop status

This is revision loop 0. Verdict is `pass` — no revision loop needed. Article is curator-ready.
