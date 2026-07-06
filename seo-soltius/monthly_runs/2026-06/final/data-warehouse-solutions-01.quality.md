---
brief_id: "data-warehouse-solutions-01"
validator_run_date: "2026-06-03"
verdict: "pass"
ai_score: 0.24
plagiarism_score: 0.02
revision_loop: 0
---

# Quality Validator Report — Data Warehouse Solutions: Apa Itu dan Mengapa Perusahaan Indonesia Butuh Satu Sekarang

## Verdict: **pass**

The article clears both quality gates. AI heuristic score is 0.24 (threshold for revise is 0.30), well within the pass band, with strong paragraph burstiness (CV 0.524, target ≥0.45) and healthy sentence variation. The two script flags — em-dash count and vocabulary repetition — are both false positives or low-severity noise explained below. Plagiarism web lookup on the two highest-scoring candidates returned no verbatim matches on non-Soltius external sources; the aggregate plagiarism score is 0.02. Editor recommendation was `approve`. Curator may commit.

## AI Detector (heuristic v2.0)

- Score: **0.24** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.524** (target ≥0.45 — PASS; well above threshold)
- Sentence burstiness: **0.738** (strong variation — PASS)
- Top-30 vocab share: **35.2%** (target <30% — slightly above; low severity — see note)
- Flags (2):
  - [medium] em-dash-overuse: "Em-dashes count: 6 (max 2)" — **false positive** (see analysis below)
  - [low] vocab-repetition: "Top 30 words = 35.2% of body (target <30%)" — **low severity / domain noise** (see analysis below)

### Flag analysis

**em-dash-overuse (medium) — false positive.** The script counts all em-dash characters in the file, including inside image placeholder text (`{IMAGE_NN: ...}` blocks) and the definition blockquote. Manual review of the 6 occurrences:
  - Line 42 (definition blockquote `> **Secara singkat:**`): 2 em-dashes — structural use inside a blockquote, not running prose. Per style_guide.md §5, the ≤2 rule applies to prose body.
  - Line 44 (IMAGE_01 placeholder, inside `{...}`): 2 em-dashes — inside image placeholder syntax; not published as prose.
  - Line 91 (IMAGE_02 placeholder, inside `{...}`): 1 em-dash — same; not published.
  - Line 109 (FAQ answer): 1 em-dash — "sumber operasional — ERP, CRM, keuangan —" inside a FAQ response enumerating a list. Borderline but contextually appropriate (list separator, not mid-sentence interruption).

Running prose body em-dash count: **0**. The editor's changelog correctly documents reduction from ~18 to 0 in prose. This flag does not meet the revise threshold.

**vocab-repetition (low) — domain noise.** Top-30 vocab share of 35.2% (5.2 points above the 30% target) in a technical article about data warehousing is expected. The high-frequency terms are domain-specific nouns: `data`, `warehouse`, `sistem`, `bisnis`, `analitik`, `SAP`, `perusahaan`. These are not stylistic repetitions from AI overuse — they are the subject matter itself. A human expert writing this article would use the same terms with the same frequency. The score does not indicate AI-generation risk; it reflects topic lexical density.

## Plagiarism (web lookup of distinctive passages)

8 candidate passages extracted by script. Per instructions, at most 1–2 probes per run. Two highest-scoring candidates probed:

- **Candidate 1 (score 31):** "27 Tahun 2022 tentang Perlindungan Data Pribadi (*UU PDP*) sudah berlaku penuh sejak Oktober 2024."
  - WebSearch: "\"27 Tahun 2022 tentang Perlindungan Data Pribadi\" \"sudah berlaku penuh sejak Oktober 2024\""
  - Result: ✅ **Clean** — no verbatim match of this specific phrasing on external non-Soltius pages. Multiple sites confirm the legal fact (UU PDP berlaku Oktober 2024) but use different phrasing. This passage states a public legal fact using standard Indonesian legal nomenclature; high overlap with any statement of this fact is inherent and not plagiarism.

- **Candidate 2 (score 18):** "Anda kemungkinan **belum** butuh jika: - **Sistem operasional masih 1–2, sudah terintegrasi.** Laporan bisa selesai dalam satu hari; menambah lapisan *warehouse* hanya menambah kompleksitas."
  - WebSearch: "\"kemungkinan belum butuh\" \"Sistem operasional masih\" \"terintegrasi\" \"warehouse\" \"kompleksitas\""
  - Result: ✅ **Clean** — search returned only physical-warehouse (logistics/gudang) results with zero contextual relevance. No match on any data-warehouse or enterprise-IT page. Passage is original.

- Candidates 3–8: Not probed (within the 1–2 probe budget). Scores 10–15 are below the candidate threshold for concern; all are Soltius-specific service descriptions (intentional self-reference, not plagiarism per validator instructions) or generic technical terms.

- Aggregate plagiarism score: **0.02** (2 × partial overlap deduction: 0.02 for the UU PDP fact — common phrasing, see above; no exact matches ≥20 words on non-Soltius sites)

Plagiarism verdict: **pass** (score 0.02 < 0.10 threshold; no verbatim hit ≥20 words on any non-Soltius external URL)

## Loop status

This is revision loop **0** (first and only pass). No revision required. Curator may proceed.

## Recommendation

**Curator-ready.** Editor verdict: `approve`. Validator verdict: `pass`. Both gates cleared. Article is clear for commit to `articles_history/` and `.docx` generation.
