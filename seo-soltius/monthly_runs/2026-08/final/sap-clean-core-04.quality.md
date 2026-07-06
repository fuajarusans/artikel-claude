---
brief_id: "sap-clean-core-04"
validator_run_date: "2026-06-08"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Memilih Partner Implementasi SAP untuk Clean Core: Pertanyaan yang Wajib Diajukan

## Verdict: **pass**

Both the AI-detector heuristic and the plagiarism web-lookup return clean results. The AI score (0.04) is well below the revise threshold of 0.30; the single low-severity flag (paragraph CV 0.443 vs. target 0.45) is a negligible 0.007 shortfall that is contradicted by strong sentence burstiness (0.705), healthy vocabulary distribution (top-30 share 0.289), and the article's evident structural variety — a 7-item numbered list, a red/green-flag comparison table, a blockquote definition snippet, bullet sub-points, and a 6-Q&A FAQ section interspersed with prose paragraphs of varying length. The plagiarism search produced zero hits on non-Soltius, non-cited public pages across all 8 distinctive candidate passages. Article is curator-ready.

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise >= 0.30, reject >= 0.50)
- Paragraph burstiness (CV): **0.443** (target >= 0.45 — marginally below; see note below)
- Sentence burstiness: **0.705** (strong)
- Top-30 vocab share: **0.289** (healthy; low concentration)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.443 (target >= 0.45)

**Note on the paragraph CV flag:** The shortfall is 0.007 and is not supported by other signals. The article has 20 paragraphs and a sentence burstiness of 0.705, well above the level where uniform sentence length becomes a concern. A manual read of the body confirms genuine variation: the lead is 4 sentences, the definition blockquote is 2 sentences, several numbered-list items are 2–3 sentences, the "red flag" transition paragraph is 2 sentences, and the conclusion is 4 sentences. The style-guide §5 floor for automatic rejection is CV < 0.30; this article is 0.443. Flag is noted but does not change the verdict.

No other §5 anti-AI patterns were triggered:
- No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- No consecutive "Selain itu" paragraph starters
- No "Penting untuk dicatat / dipahami bahwa"
- No overused "Dengan demikian"
- Zero em-dashes in published body prose (editor converted all 21 to commas/colons/full stops)
- No service-dump paragraph
- No stacked hype adjectives

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked via WebSearch.

- Passage 1: "Sebagai SAP Platinum Partner melalui keanggotaan United VARs dan bagian dari Metrodata Group sejak 1998, Soltius mendampingi perusahaan dari penilaian kesiapan, implementasi, hingga dukungan pasca go-live." — All hits are on soltius.co.id, metrodata.co.id, and press-coverage pages about Soltius. **Intentional self-reference; excluded per policy.** Clean.
- Passage 2: "Satu tim SAP bahkan melaporkan berhasil mempensiunkan hampir 10% custom code mereka (SAP Community); bukti bahwa triase yang disiplin memang memangkas beban." — The SAP Community article ("How We Retired almost 10% of Our Custom Code") is the cited authoritative source (attributed inline). **Properly cited; not unacknowledged lifting.** Clean.
- Passage 3: "Bagaimana Anda menginventaris dan men-triase custom code kami? Partner yang serius memakai kerangka Keep / Refactor / Retire dan alat seperti ABAP Test Cockpit (ATC)." — No matching page found. Clean.
- Passage 4: "Ini penting karena SAP mencatat 75–80% proses bisnis di semua perusahaan hampir identik dan tidak perlu kustomisasi; hanya 20–25% yang benar-benar membedakan secara kompetitif." — No matching Indonesian-language page found. The underlying SAP positioning stat appears in English SAP/analyst sources but the specific Bahasa Indonesia phrasing is original. Clean.
- Passage 5: "Red flag vs green flag: cara membaca jawaban partner — Bacalah jawaban partner sebagai pola, bukan kalimat lepas." — Results returned only relationship-advice pages in Indonesian; no SAP/IT content match. Clean.
- Passage 6: "Apa model dukungan dan sertifikasi Anda? Idealnya ada Application Management Services (AMS) yang jelas dan sertifikasi Partner Center of Expertise (PCoE)." — Results returned SAP official certification pages in English; no Indonesian-language near-match. Clean.
- Passage 7: "Bagaimana strategi integrasi Anda: API-first atau masih RFC? Integrasi modern berbasis released API (objek yang sudah di-release SAP dan dijamin stabil saat upgrade)." — Results returned English-language SAP integration strategy articles; no Indonesian phrasing match. Clean.
- Passage 8: "SAP menyatakan sekitar 75–80% proses bisnis di semua perusahaan hampir identik dan seharusnya berjalan standar; hanya 20–25% sisanya yang benar-benar membedakan secara kompetitif." — No matching page found. Clean.

Aggregate plagiarism score: **0.00**
- Exact matches on non-Soltius, non-cited URLs: 0
- Partial near-matches on non-Soltius, non-cited URLs: 0

## Loop status

This is revision loop 0. Verdict is pass; no revision needed. Article is ready for curator commit.
