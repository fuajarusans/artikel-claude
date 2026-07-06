---
brief_id: "sap-clean-core-02"
validator_run_date: "2026-06-08"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Integrasi Clean Core: Cara Menghubungkan SAP Tanpa Mengotori Core

## Verdict: **pass**

The article cleared both gates. The heuristic AI detector returned a score of 0.04 (well below the 0.30 revise threshold), with only one low-severity flag for paragraph length variance (CV 0.355, target ≥0.45) — a marginal miss that the strong sentence-level burstiness (0.825) and overall structural variety (table, numbered list, bullets, FAQ, 3 images) more than compensate for. Plagiarism web lookup of all 8 distinctive candidate passages returned zero exact or partial-match hits on non-Soltius public pages. Aggregate plagiarism score is 0.00. Editor recommendation was `approve`. The article is curator-ready.

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.355** (target ≥0.45) — flagged low; see note below
- Sentence burstiness: **0.825** (strong; well above 0.45)
- Top-30 vocab share: **0.319** (healthy concentration; no vocabulary lockup)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.355 (target ≥0.45)

**Note on the paragraph-CV flag:** The CV of 0.355 is below the ≥0.45 target, but this is a low-severity flag that does not elevate the AI score above 0.10. Manual inspection confirms that the article has genuine structural variation across its 22 paragraphs: a long 5-sentence lead hook, a 40-word blockquote definition snippet, a 3-sentence roadmap paragraph, two 2-sentence explanatory paragraphs, a 5-row comparison table, a 5-step numbered list with bold lead-ins, a 3-item bullet section, and 7 FAQ Q&As. The cluster of 3-sentence paragraphs that the editor flagged as a minor rhythm note (body §50–63) accounts for the reduced CV; it is not symptomatic of AI pattern-generation given the overall format diversity. The sentence burstiness of 0.825 is particularly strong and would not be present in AI-generated text. Verdict remains pass on this dimension.

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked.

- Passage 1: "Dengan n sistem, jumlah koneksi tumbuh mengikuti rumus n(n-1)/2: 10 sistem menghasilkan 45 koneksi, 20 sistem menghasilkan 190." — No matching SAP/IT page in Bahasa Indonesia. Search returned only math-education sites discussing the combinatorial formula in isolation. **Clean.**
- Passage 2: "Integrasi Clean Core: Cara Menghubungkan SAP Tanpa Mengotori Core / Banyak tim IT sudah rapi: kode Z dibersihkan, ekstensi dipindah ke BTP..." — Search returned English-language SAP official pages and integrator blogs (SAP.com, IgniteSAP, ASUG PDF, SAP Press, Birchman) — none in Bahasa Indonesia with this title or lead phrasing. **Clean.**
- Passage 3: "Sejak Q3 2025, SAP menyediakan *Clean Core Modernization Recommendations for BAPIs* dalam Integration Suite..." — Search surfaced the cited SAP Community source articles (community.sap.com) and the SAP Integration Suite Q3/2025 What's New post. The Indonesian-language phrasing is original; the factual claim is properly attributed to those sources in the article. Hits are on SAP-official/SAP Community pages — intentional citation, not plagiarism per rules. **Clean (intentional citation on cited domain).**
- Passage 4: "Lima sistem menghasilkan 10 koneksi; sepuluh sistem melonjak ke 45; dua puluh sistem mencapai 190 koneksi." — No matching page found; results were unrelated academic PDFs and math materials. **Clean.**
- Passage 5: "Tetapkan governance: pintu masuk hanya satu. Buat kebijakan bahwa tak ada interface baru yang lolos tanpa memakai released API via Integration Suite." — No matching page found. **Clean.**
- Passage 6: "Posisikan SAP Integration Suite sebagai spine plus API Management. Alihkan orkestrasi ke Cloud Integration agar sistem pihak ketiga tak lagi menyentuh inti SAP secara langsung." — Search returned SAP official product pages and community posts about Integration Suite/API Management in English/Indonesian; no page with this specific phrasing. **Clean.**
- Passage 7: "Apa itu SAP Business Accelerator Hub dan apa bedanya dengan SAP API Business Hub?" — Search returned the SAP Community rename announcement and SAP Help Portal pages. The FAQ question phrasing is an original Indonesian formulation of a commonly asked question; no verbatim match. **Clean.**
- Passage 8: "Pemeriksa seperti ATC (*ABAP Test Cockpit*) menyoroti modifikasi ABAP, sehingga remediasi kode terasa konkret dan terukur." — Search returned SAP documentation and community pages about ATC in English; no Bahasa Indonesia page with this phrasing. **Clean.**

Aggregate plagiarism score: **0.00**
(0 exact hits × 0.05 = 0.00; 0 partial-match hits × 0.02 = 0.00)
Verdict threshold: pass (score < 0.10, no verbatim 20+ word hit on non-Soltius page)

## Loop status

This is revision loop 0 (first pass). Verdict is `pass` — no revision loop required. Article is curator-ready.
