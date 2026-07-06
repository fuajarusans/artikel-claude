---
brief_id: "digital-manufacturing-01"
validator_run_date: "2026-06-03"
verdict: "pass"
ai_score: 0.08
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Digital Manufacturing: Fondasi Pabrik Cerdas di Era Industry 4.0

## Verdict: **pass**

The article clears both QC gates. The AI heuristic score is 0.08 — well below the 0.30 revise threshold — with only two low-severity flags that do not approach rejection territory. All 8 plagiarism candidates returned clean on web lookup: no verbatim matches of 20+ words on any non-Soltius URL, and attributed factual passages (Kemenperin National Lighthouse data, OEE benchmark, ISA-95 hierarchy) appear only on official/authoritative sources as intentional citations. The editor's `recommendation: approve` is confirmed. The article is curator-ready.

---

## AI Detector (heuristic v2.0)

- **Score:** 0.08 / 1.0 (thresholds: revise ≥ 0.30, reject ≥ 0.50) → **pass**
- **Paragraph burstiness (CV):** 0.421 (target ≥ 0.45) — slightly below target, but well above the 0.30 floor that triggers concern; the article's mixture of short lead paragraphs, blockquote, tables, numbered lists, and FAQ expands structural variety in ways the word-count CV metric does not fully capture
- **Sentence burstiness:** 0.68 (healthy — above 0.50 baseline)
- **Top-30 vocab share:** 0.37 (target < 0.30) — slight elevation; driven by mandatory technical terms repeated for SEO consistency ("digital manufacturing", "produksi", "lantai produksi", "data") that cannot be synonymized without degrading keyword density and entity clarity
- **Flags (2):**
  - [low] paragraph-low-variance: Paragraph word-count CV = 0.421 (target ≥ 0.45) — tables and list items contribute short "paragraphs" that suppress CV; not a genuine AI tell at this article's structure
  - [low] vocab-repetition: Top 30 words = 37% of body (target < 30%) — technical vocabulary lock-in; expected for a definitional B2B article on a narrow topic

**Manual cross-check of flagged sections:** Both flags are structural/statistical artifacts of the article's intentional design (tables, lists, technical vocabulary density), not AI-generation tells. No AI-opener patterns, no hedge-stacking, no "Selain itu" chaining, no hype-adjective sequences detected on manual review. Editor's Voice score of 9/10 is credible.

---

## Plagiarism (web lookup of distinctive passages)

8 candidate passages searched. All clean.

- ✅ **Passage 1** (MES/Execution Layer table row — "MES, MOM | Mengelola eksekusi lantai produksi: urutan kerja, OEE, quality | ISA-95 Level 2–3; SAP Digital Manufacturing"): No verbatim match on any public URL. Table structure with ISA-95 layer + SAP platform labels in Bahasa Indonesia is article-original.
- ✅ **Passage 2** ("Berdasarkan data National Lighthouse program, pabrik yang mencapai level Industry 4.0 mencatat produktivitas naik hingga 101%, speed-to-market 2–600x..."): Kemenperin/WEF data found on official Indonesian government and news sources (kemenperin.go.id, liputan6.com), but this specific Indonesian phrasing is not reproduced verbatim. Passage is an original rewording of attributed facts — not plagiarism.
- ✅ **Passage 3** (Sensor/IIoT Layer table row — "Sensor, PLC, SCADA, RFID | Mengumpulkan data mesin & proses real-time | ISA-95 Level 0–1"): No verbatim match. Table cell phrasing article-original.
- ✅ **Passage 4** (ERP/Planning Layer table row — "ERP Production Planning | Perencanaan kapasitas, jadwal, kebutuhan bahan | ISA-95 Level 4; SAP S/4HANA PP/PP-DS"): No verbatim match. Clean.
- ✅ **Passage 5** (Table header row — "Lapisan | Komponen | Fungsi | Standar / Platform Referensi"): Generic markdown table syntax; not a plagiarism risk.
- ✅ **Passage 6** ("Standar ISA-95 mendefinisikan hierarki fungsi manufaktur dari Level 0 (sensor/perangkat) hingga Level 4 (ERP/perencanaan bisnis)"): ISA-95 hierarchy is public-domain knowledge; this specific Indonesian-language sentence does not appear verbatim anywhere. Clean.
- ✅ **Passage 7** ("Di Indonesia, Making Indonesia 4.0 (Kemenperin, April 2018) menjadi panduan nasional di 5 sektor industri prioritas"): Well-documented fact; official sources (setneg.go.id, antaranews.com, tempo.co) confirm the facts but none reproduce this exact sentence. Clean.
- ✅ **Passage 8** ("OEE (*Overall Equipment Effectiveness*) mengukur seberapa efektif sebuah lini produksi digunakan: OEE = *Availability* × *Performance* × *Quality*"): OEE formula is standard industry knowledge; no verbatim match of this Indonesian-language rendering found. Clean.

**Aggregate plagiarism score: 0.00** (thresholds: revise ≥ 0.10, reject ≥ 0.25)

---

## Loop status

This is revision loop **0** (first pass). Verdict is **pass** — no revision loop triggered.

---

## Curator instruction

Article `monthly_runs/2026-06/final/digital-manufacturing-01.id.md` is **curator-ready**. Editor `recommendation: approve` + validator `verdict: pass`. Proceed to commit to `articles_history/` and generate `.docx`.
