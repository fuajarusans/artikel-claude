---
brief_id: "low-code-platform-02"
validator_run_date: "2026-06-03"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — SAP Build di SAP BTP: Platform Low-Code yang Dirancang untuk Ekosistem ERP

## Verdict: **pass**

The article passes both quality gates cleanly. AI heuristic score is 0.04 — well below the revise threshold of 0.30 — with only one low-severity flag (paragraph length variance CV slightly below target at 0.408, but above the 0.30 hard floor at which approval is prohibited). Plagiarism web lookup across all 8 candidate passages returned zero exact matches and zero partial near-matches on non-Soltius public pages. The GigaOm 3x/59% statistics appear in English on SAP News / GigaOm portals as expected (cited sources), but the article's Indonesian phrasing is original. The editor's `recommendation: approve` is upheld. Curator may commit.

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.408** (target ≥0.45; hard floor ≥0.30 — above floor, one low-severity flag)
- Sentence burstiness: **1.011** (well-varied; no concern)
- Top-30 vocab share: **0.322** (within human range; no concern)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.408 (target ≥0.45) — The three data tables and the FAQ block pull average paragraph length up, compressing variance across prose paragraphs. This is a structural characteristic of comparison + FAQ articles and does not indicate AI generation. Sentence burstiness (1.011) and vocab concentration (0.322) are both healthy. No action required.

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked via WebSearch (1 probe per candidate). All checked against non-Soltius public pages.

- ✅ Passage 1: "Tiga Komponen SAP Build: Fungsi, Target Pengguna, dan Use Case di Indonesia..." — clean. Results returned generic SAP/use-case-diagram content in Indonesian; no match to this article's phrasing.
- ✅ Passage 2: "Menurut studi GigaOm Benchmark (Maret 2025), SAP Build menghasilkan pengiriman proyek 3x lebih cepat..." — clean. The 3x/59% statistics exist in English on news.sap.com and gigaom.com (both are cited sources). The Indonesian phrasing is an original rendering; no verbatim match found.
- ✅ Passage 3: "Apa Itu SAP Build dan Mengapa Ia Berbeda dari Low-Code Platform Biasa?" — clean. English-language articles from SAP Press, Jade Global, and Crave Infotech cover the same concept but in English; no Indonesian verbatim match.
- ✅ Passage 4: "Bagaimana SAP Build Bekerja di Atas SAP BTP untuk Integrasi S/4HANA?" — clean. Results are SAP developer documentation and NTT Data blog posts in English; no Indonesian verbatim match.
- ✅ Passage 5: "FAQ (Pertanyaan yang Sering Diajukan) — Apa itu SAP Build dan apa hubungannya dengan SAP BTP?" — clean. Results include Indotelko SAP Build coverage and IBM/Microsoft SAP FAQs but no match to this article's FAQ structure or phrasing.
- ✅ Passage 6: "SAP Build Process Automation fokus pada otomasi alur kerja: menggantikan proses manual, mengintegrasikan persetujuan multi-sistem, dan mengotomasi pengisian data berulang (RPA)." — clean. Results returned generic BPA/workflow automation content in Indonesian; no verbatim match.
- ✅ Passage 7: "Studi GigaOm (Maret 2025) mencatat pengiriman proyek 3x lebih cepat dibanding pengembangan kustom tradisional." — clean. The Indonesian phrasing is not found verbatim; the underlying fact is correctly cited. Note: the GigaOm stat appears in two slightly different phrasings within the same article (once in the body, once in the FAQ) — this is internal repetition, not external plagiarism.
- ✅ Passage 8: "Secara singkat: SAP Build adalah suite low-code dan no-code resmi dari SAP yang berjalan di atas SAP BTP (Business Technology Platform)." — clean. English-language sources (SAP official, GeeksForGeeks, IBS Solution, Jade Global) describe SAP Build in similar terms in English; the Indonesian blockquote is an original formulation.

**Aggregate plagiarism score: 0.00** (no exact matches, no partial near-matches on non-Soltius pages)

## Loop status

This is revision loop **0** (first and only pass). Verdict is `pass` — no revision loop triggered.

---

*Curator may commit this article to articles_history/. Status: approve (editor) + pass (validator).*
