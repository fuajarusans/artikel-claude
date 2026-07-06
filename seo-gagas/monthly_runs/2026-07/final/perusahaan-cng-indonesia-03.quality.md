---
brief_id: "perusahaan-cng-indonesia-03"
validator_run_date: "2026-06-09"
verdict: "pass"
ai_score: 0.00
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Industri yang Dilayani Perusahaan CNG + Cara Mulai Berlangganan

## Verdict: **pass**

Both gates cleared cleanly. The heuristic AI-detector scored 0.00 (well below the 0.30 revise threshold) with paragraph burstiness at 0.499 — above the 0.45 target — and zero flags fired. All 8 plagiarism candidates were searched verbatim on the open web; every result confirmed either no match at all, or confirmed the article's text is an attributed paraphrase of a cited authoritative source (Kementerian ESDM, BPH Migas). No verbatim phrase appears on any non-Gagas, non-cited-source page. Plagiarism score is 0.00. Article is curator-ready.

---

## AI Detector (heuristic v2.0)

- Score: **0.00** / 1.0 (thresholds: revise >= 0.30, reject >= 0.50)
- Paragraph burstiness (CV): **0.499** (target >= 0.45 — passes)
- Sentence burstiness: **0.924** (strong variance — passes)
- Top-30 vocab share: **0.26** (well below the AI-concentration ceiling)
- Flags: **0**

No anti-AI pattern fired. The editor's anti-AI scan result (voice score 9/10) is consistent with the statistical output. The "Kapan Usaha Anda BELUM Layak" section, the honest-hedging tone on SLA duration, and the mixed paragraph lengths (single-sentence to five-sentence blocks) all contribute to high burstiness and low vocabulary concentration.

---

## Plagiarism (web lookup of 8 distinctive passages)

Aggregate score: **0.00** (threshold: revise >= 0.10)

### Passage 1
Phrase: "Pada 2024, sektor industri menyerap 40% pemanfaatan gas bumi domestik Indonesia, setara 1.473 BBTUD dari total 3.881 BBTUD (Kementerian ESDM, 2024), penggerak permintaan gas terbesar di dalam negeri."

Result: **Clean.** Web search surfaced the primary source (esdm.go.id "Kinerja Sektor ESDM 2024") and Katadata, both of which are the authoritative origin of the underlying data. The article's sentence is the author's own synthesis of statistical data with correct attribution — not a verbatim copy of any third-party article. No match on a non-Gagas, non-cited-source page.

### Passage 2
Phrase: "Dari tujuh sektor penerima Harga Gas Bumi Tertentu (HGBT) pemerintah, yakni pupuk, petrokimia, oleokimia, baja, keramik, kaca, dan sarung tangan karet (Kepmen ESDM No. 76.K/2025)..."

Result: **Clean — standard policy enumeration.** The 7-sector list is a regulatory fact from Kepmen ESDM No. 76.K/2025, widely reported by Tempo, CNBC Indonesia, Antara, and Liputan6. Enumerating a government policy list with its legal citation is inherently high-overlap across all commentary on that policy; this is not plagiarism. The article's full sentence construction does not match any third-party article verbatim.

### Passage 3
Phrase: "Tim engineering mengecek lapangan dan merancang tata letak Pressure Reduction Station (PRS) atau modul silinder sesuai standar keselamatan (HSE)."

Result: **Clean.** Search returned academic papers on PRS maintenance (Jurnal TMIT) and facility-layout methodology. None reproduce this sentence. This is original procedural description of the onboarding survey step.

### Passage 4
Phrase: "Industri yang Dilayani Perusahaan CNG + Cara Mulai Berlangganan / manajer operasional hotel atau pemilik pabrik keramik..."

Result: **Clean.** Results include PT Citra Nusantara Gemilang's corporate profile and generic hospitality industry pages. No result reproduces this article's title or hook combination. PT Citra Nusantara Gemilang is a separate competitor entity (not gagas.co.id); none of their pages contain this phrasing.

### Passage 5
Phrase: "Kapan Usaha Anda BELUM Layak Berlangganan CNG / Penyedia yang jujur akan mengatakan 'belum' alih-alih memaksakan kontrak."

Result: **Clean.** Results were entirely unrelated (government procurement guidelines, business-law Q&A, general business advice). No match whatsoever on any page. This passage is original editorial content.

### Passage 6
Phrase: "Gas dikompresi di Mother Station, lalu diangkut dengan Gas Transport Module (GTM) ke lokasi pelanggan; di sana, Pressure Reduction Station (PRS) menurunkan tekanan ke spesifikasi peralatan."

Result: **Clean — standard CNG infrastructure description.** The process sequence (Mother Station → GTM → customer → PRS pressure reduction) is the canonical description of CNG beyond-pipeline distribution, equivalent to "CNG adalah gas alam yang dikompresi." The Otto Nusantara Energy GTM article and BayoTech pages found do not reproduce this sentence. The specific Indonesian-language sentence construction does not appear on any non-Gagas page.

### Passage 7
Phrase: "Semuanya bergantung pada panas rutin yang dapat dipasok lebih hemat dan pasti lewat distribusi CNG via Gas Transport Module (GTM) atau CNG Silinder."

Result: **Clean.** Results include PT Citra Nusantara Gemilang's technology page and sentralgas.com's GTM page. No result reproduces this sentence. The phrasing is original editorial synthesis.

### Passage 8
Phrase: "BPH Migas menyatakan daerah tanpa jaringan pipa gas perlu didorong memanfaatkan CNG, dengan pemetaan kawasan pengguna gas sesuai sumber pasok terdekat."

Result: **Clean — properly attributed paraphrase of a cited authoritative source.** The BPH Migas press release (bphmigas.go.id, "Pemanfaatan CNG Untuk Industri dan Transportasi Terus Ditingkatkan") and Dunia Energi news coverage confirm this is a correct paraphrase of BPH Migas's stated position, with explicit "(BPH Migas)" attribution in the article. Gagas.co.id is not the source of this statement; the citation is intentional and correct. Not counted as plagiarism per the ignore-rule for cited authoritative sources.

---

## Loop status

This is revision loop **0** (first and only pass). No revision needed.

---

## Notes for curator

- Article is ready for commit.
- Editor verdict: approve (9/10). Validator verdict: pass. Both gates cleared.
- Raw heuristic output: `monthly_runs/2026-07/final/perusahaan-cng-indonesia-03.id.quality-input.json`
