---
brief_id: "business-intelligence-05"
validator_run_date: "2026-06-08"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — ROI Business Intelligence: Cara Menyusun dan Mengukur Nilai Investasinya

## Verdict: **pass**

Both gates cleared cleanly. The AI heuristic score is 0.04 — well below the 0.30 revise threshold — with one low-severity structural flag (paragraph word-count CV = 0.327) that does not trigger a revise and is likely inflated by the script counting YAML frontmatter blocks and image-placeholder lines as paragraphs. Sentence burstiness is healthy at 1.017 and top-30 vocabulary share at 0.296 confirms genuine lexical diversity. Plagiarism: all 8 distinctive passages returned zero exact or near-exact matches on any non-Soltius public URL; aggregate plagiarism score is 0.00. The article is curator-ready.

## AI Detector (heuristic v2.0)
- Score: **0.04** / 1.0 (thresholds: revise >=0.30, reject >=0.50)
- Paragraph burstiness (CV): **0.327** (target >=0.45 — low-severity flag; see note below)
- Sentence burstiness: **1.017** (strong — well above minimum)
- Top-30 vocab share: **0.296** (healthy lexical diversity)
- Word count (script): 2,165 (frontmatter estimate 1,668; difference attributable to script counting YAML + image-placeholder text)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.327 (target >=0.45)

**Note on the CV flag:** The editor's QC report independently verified paragraph rhythm as "campuran 1–6 kalimat; tidak monoton." The script's lower CV reading is consistent with it treating YAML frontmatter fields and 3 image-placeholder lines as short uniform paragraphs alongside the prose body, pulling the variance down without reflecting actual prose structure. Sentence burstiness at 1.017 and the editor's manual check both confirm genuine rhythm variation. This flag does not warrant a revise under the workflow rules (score 0.04 is not borderline and the flag is explicitly low-severity).

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked. 0 exact matches. 0 partial near-matches. Aggregate score: **0.00**.

- Passage 1: "Menurut survei Gartner terhadap 782 pemimpin Infrastructure & Operations (November–Desember 2025), hanya 28% proyek AI yang berhasil penuh dan memenuhi ekspektasi ROI..." — Search returned the Gartner source URL (the article's own citation) and Indonesian secondary coverage; no site carries this exact Indonesian-language rendering. **Clean.**
- Passage 2: "ROI (%) = ((Total Manfaat − Total Biaya) / Total Biaya) × 100, dengan Payback Period (tahun) = Total Biaya ÷ Manfaat Tahunan." — Results show generic Indonesian finance/accounting pages with standard ROI formulas but none with this exact Indonesian-language composite sentence. Standard mathematical formula; not plagiarism-flaggable. **Clean.**
- Passage 3: "ROI BI dihitung dengan rumus standar: ROI (%) = ((Total Manfaat − Total Biaya) / Total Biaya) × 100." — No public site found carrying this exact sentence. **Clean.**
- Passage 4: "Data prasyarat paling keras datang dari Gartner: hingga 2026, organisasi diprediksi menghentikan 60% proyek AI yang tidak didukung data siap-AI (survei 248 pemimpin manajemen data, Q3 2024)." — Indonesian secondary articles reference the Gartner 60% prediction but none carry this exact phrasing or the "248 pemimpin" detail. Original Indonesian rendering of the cited Gartner source. **Clean.**
- Passage 5: "Sebagai rujukan rentang yang lebih tinggi, studi kasus individual dari lembaga seperti Nucleus Research mencatat ROI 218%–645% dengan payback 1,9–5,5 bulan pada deployment analytics tertentu." — Nucleus Research site confirms ROI ranges in this band for individual analytics deployments (e.g., 482%, 427%, 645%), but no site carries this exact Indonesian synthesis sentence. **Clean.**
- Passage 6: "Survei industri yang diagregasi melaporkan rata-rata sekitar 127% dalam 3 tahun, sementara studi kasus individual Nucleus Research mencatat rentang 218%–645% pada deployment spesifik." — No match; search returned unrelated BPS industrial surveys. Original synthesis. **Clean.**
- Passage 7: "ROI Business Intelligence sangat bervariasi tergantung kematangan data, ruang lingkup, dan tingkat adopsi pengguna." — No exact match on any public site. **Clean.**
- Passage 8: "Estimasi total biaya tiga tahun (TCO). Gunakan keenam komponen di tabel sebelumnya, termasuk tenaga kerja dan AMS, bukan hanya lisensi tahun pertama." — No match; results returned general TCO pages, none with this passage. **Clean.**

## Loop status

This is revision loop 0. Verdict is pass — no loop required. Article is ready for curator commit.
