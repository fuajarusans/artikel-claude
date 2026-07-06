---
brief_id: "business-intelligence-03"
validator_run_date: "2026-06-08"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Business Intelligence vs Excel: Kapan Harus Berhenti Mengandalkan Spreadsheet

## Verdict: **pass**

All checks clear. The heuristic AI detector scores 0.04 — well below the 0.30 revise threshold — with only one borderline low-severity flag (paragraph burstiness CV 0.449 vs target 0.450, a 0.001 margin that sentence burstiness of 0.811 more than compensates for). All 8 distinctive passages extracted for plagiarism lookup returned clean: no verbatim or near-verbatim matches on any non-Soltius public URL. Technical facts about Excel limits and the Panko/EUSpRIG 88% statistic appear widely in their original English-language sources, but the article's Indonesian phrasing is entirely its own construction. Editor recommendation was `approve`; this validator concurs. Article is curator-ready.

## AI Detector (heuristic v2.0)

- Score: 0.04 / 1.0 (thresholds: revise >=0.30, reject >=0.50)
- Paragraph burstiness (CV): 0.449 (target >=0.45 — borderline, 0.001 below threshold; compensated by strong sentence burstiness)
- Sentence burstiness: 0.811 (well above target; strong human-variance signal)
- Top-30 vocab share: 0.314 (healthy; low concentration)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.449 (target >=0.45) — negligibly below threshold; does not trigger revise alone and is offset by sentence-level burstiness of 0.811

Manual review of flagged flag: The 0.001 shortfall is not a meaningful signal. Reading the draft confirms deliberate rhythm variation — the article mixes 1-sentence paragraphs (e.g., "Satu hal yang sering disalahpahami..."), mid-length 3–4 sentence paragraphs, and a 6-sentence paragraph in the FAQ section. No symmetric block pattern is visible. The editor's anti-AI scan (§A) passed all §5 checks. This flag does not warrant revision.

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked.

- Passage 1: "| Dimensi | Microsoft Excel | Platform BI (contoh: SAP Analytics Cloud) |..." (comparison table header) — CLEAN. Sites like 8thinktank.com, edukasidata.com, and powerbi.id carry BI vs Excel comparisons in Indonesian but none match this specific table structure or column headers. No hit.

- Passage 2: "Setiap *worksheet* di Excel versi modern (Microsoft 365, Excel 2021, 2019, 2016) mendukung maksimal 1.048.576 baris dan 16.384 kolom; ini batas keras yang tidak dapat diperluas." — CLEAN. The row/column limits are factual public knowledge (Microsoft Support) and appear on Indonesian educational sites (belajarexcel.id, adh-excel.com), but no source uses this exact Indonesian sentence construction. No verbatim or near-verbatim match.

- Passage 3: "SAP Analytics Cloud, add-in for Microsoft Excel memungkinkan Excel terhubung live ke model SAC, ke SAP Datasphere, dan ke CDS views SAP S/4HANA Cloud" — CLEAN. SAP Help Portal (help.sap.com) and SAP Community posts describe this connectivity in English; the Indonesian rendering is the article's own. No match.

- Passage 4: "Excel vs BI: Perbandingan di Enam Dimensi — Perbedaan keduanya paling jelas terlihat ketika dipetakan per dimensi." — CLEAN. No Indonesian-language source found with this heading or sentence. No match.

- Passage 5: "Business Intelligence vs Excel: Kapan Harus Berhenti Mengandalkan Spreadsheet — Hampir setiap perusahaan menjalankan laporan terpentingnya di Excel." — CLEAN. rynet.com.my has a thematically similar title ("Power BI vs Excel: Kapan Anda Harus Berhenti Menggunakan Spreadsheet...") but distinct wording; no verbatim overlap. No match.

- Passage 6: "BI Tidak Membunuh Excel, dan Kapan Excel Justru Pilihan Tepat — Beralih ke BI bukan berarti membuang Excel." — CLEAN. The complementarity concept is common, but the specific Indonesian phrasing "BI Tidak Membunuh Excel" appears on no indexed non-Soltius page. No match.

- Passage 7: "Studi audit lapangan yang dikompilasi peneliti Raymond Panko (University of Hawaii) dan dirangkum European Spreadsheet Risks Interest Group (EUSpRIG) menemukan bahwa 88% spreadsheet yang diaudit mengandung kesalahan." — CLEAN. The 88% statistic and Panko/EUSpRIG attribution exist on English-language pages (eusprig.org, panko.shidler.hawaii.edu), classified as the original sources the article cites — not plagiarism of another article. The Indonesian rendering is original. No non-Soltius Indonesian-language match.

- Passage 8: "Data mendekati atau melewati batas teknis Excel. Setiap *worksheet* Excel versi modern menampung maksimal 1.048.576 baris dan 16.384 kolom (Microsoft Support)." — CLEAN. The numbers appear widely (kompas.com, blogsmkn1slahung.blogspot.com) but the sentence structure and surrounding context are unique to this article. No verbatim match.

- Aggregate plagiarism score: 0.00

Note on ignored items: the article cites sap.com, help.sap.com, panko.shidler.hawaii.edu, and support.microsoft.com as explicit references. Overlap with those primary sources is intentional citation, not plagiarism, per validator rules.

## Loop status

This is revision loop 0. Verdict is pass — no revision loop triggered. Article is ready for curator commit.
