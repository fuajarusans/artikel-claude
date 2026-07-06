---
brief_id: "sap-clean-core-03"
validator_run_date: "2026-06-03"
verdict: "pass"
ai_score: 0.15
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Seberapa "Bersih" Core SAP Anda? Kerangka Penilaian Clean Core Maturity

## Verdict: **pass**

The article clears both quality gates. The heuristic AI detector returned a score of 0.15 (threshold for revise: 0.30) — well within the pass zone. Paragraph burstiness CV = 0.518, comfortably above the 0.45 floor that guards against uniform, AI-typical rhythm. The single script flag for em-dash-overuse is a false positive: the tool counted 5 em-dashes across all contexts (frontmatter meta-description, image placeholder labels, table header cells, and one explicitly-retained citation em-dash in prose); actual prose em-dash count = 1, which the editor logged as acceptable and retained intentionally. Plagiarism web lookup across all 8 candidate passages returned zero exact or near-exact matches on any non-Soltius public page. All fact-bearing phrases that echo SAP official sources (Clean Core Extensibility KPIs, Level A–D definitions, ECC 2027/2030/2033 timeline) trace back to cited or citeable SAP/Forrester sources and are appropriately framed as paraphrases of those sources — not verbatim lifts. The article is curator-ready.

## AI Detector (heuristic v2.0)

- Score: **0.15** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.518** (target ≥0.45 — PASS)
- Sentence burstiness: **1.455** (healthy variance — PASS)
- Top-30 vocab share: **0.343** (below the concentration warning level — PASS)
- Flags (1):
  - [medium / FALSE POSITIVE] em-dash-overuse: "Em-dashes count: 5 (max 2)"
    - Breakdown of the 5 em-dashes the script found:
      1. Line 4 — frontmatter `meta_description` field: `maturity — 5 dimensi` (not prose)
      2. Line 44 — `{IMAGE_01: ...}` placeholder concept text: `clean core — setiap` (not prose)
      3. Line 60 — table header cells: `Level 1 — Awal`, `Level 2 — Berkembang`, etc. (not prose)
      4. Line 68 — citation attribution line: `risiko upgrade tertinggi) — SAP Community Blog, 2025` (editor retained; acceptable citation dash)
      5. Line 80 — `{IMAGE_02: ...}` placeholder concept text: `self-assessment — Langkah 1` (not prose)
    - Actual prose em-dash count: **1** (the citation line, explicitly retained by editor per QC log)
    - Conclusion: flag does not represent an AI-tell in prose; no deduction applied to AI score.
- Overall AI verdict: **pass**

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked via WebSearch (2 search rounds × 4 parallel probes):

- ✅ Passage 1: "Langkah 1: Kumpulkan data input. Jalankan SAP Readiness Check (gratis, via SAP Launchpad) untuk Extensibility." — no verbatim Indonesian-language match found on any public page. SAP Help Portal and generic SAP Readiness Check docs surface in English; the Indonesian framing is original.
- ✅ Passage 2: "Lima dimensi: (1) Extensibility, (2) Integrations, (3) Processes, (4) Data, (5) Operations." — the 5-dimension enumeration is well-known SAP framework content; the exact Indonesian phrasing is not found verbatim anywhere. Inherently high-overlap generic fact — excluded per scoring rules.
- ✅ Passage 3: "Level A (ABAP Cloud/released APIs, sepenuhnya upgrade-safe), Level B (documented APIs, umumnya stabil), Level C (internal objects, diterima sementara), Level D (modifikasi langsung, risiko upgrade tertinggi)." — English-language pages describe A–D levels but no Indonesian verbatim match found. Original paraphrase of SAP Community Blog cited source.
- ✅ Passage 4: "Extended support tersedia hingga 31 Desember 2030 (dengan tambahan biaya sekitar 2%)." — search returns only unrelated Microsoft Windows ESU content; no SAP-specific Indonesian page with this phrasing found. Clean.
- ✅ Passage 5: "Clean Core Extensibility KPIs tersedia langsung di RISE Dashboard tanpa perlu menjalankan Readiness Check manual." — SAP Community Blog confirms the factual claim; Indonesian phrasing is original. Source is intentionally cited (not plagiarism).
- ✅ Passage 6: "SAP Readiness Check (via SAP Launchpad) menganalisis kode kustom dan mengidentifikasi incompatible objects." — SAP Help Portal and English docs confirm the function; Indonesian phrasing is original. Clean.
- ✅ Passage 7: "Opsi transisi hingga 2033 tersedia, tapi hanya untuk pelanggan yang berkomitmen ke RISE with SAP dengan database HANA, dan pembeliannya baru tersedia mulai 2028 (Forrester, Januari 2025)." — Forrester blog post confirmed as cited source; the Indonesian phrasing is an original paraphrase with the citation inline. Not plagiarism.
- ✅ Passage 8: "Langkah 3: Baca pola, bukan rata-rata. Skor agregat kurang berguna tanpa konteks." — no match found anywhere. Original advisory framing. Clean.

- **Aggregate plagiarism score: 0.00** (threshold pass: <0.10; threshold revise: 0.10–0.25; threshold reject: ≥0.25)
- **Plagiarism verdict: pass**

## Loop status

This is revision loop **0** (first and only pass). No revision triggered. Article proceeds to curator.

## Recommendation

**Curator-ready.** Both gates pass: editor `recommendation: approve` + validator `verdict: pass`. The article may be committed to `articles_history/` and `.docx` generated.
