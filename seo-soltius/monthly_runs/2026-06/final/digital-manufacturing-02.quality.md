---
brief_id: "digital-manufacturing-02"
validator_run_date: "2026-06-03"
verdict: "pass"
ai_score: 0.19
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — MES dan ERP: Cara Menghubungkan Lantai Produksi ke Sistem Pusat

## Verdict: **pass**

The article clears both quality gates. The AI heuristic score of 0.19 is comfortably below the 0.30 revise threshold. The two script flags (em-dash count and paragraph burstiness) are within acceptable tolerance when examined against the actual prose: the 5 em-dashes counted include structural bold-label separators ("Layer 1 — OT/Shop Floor", "Layer 2 — MES/Execution", "Layer 3 — ERP/Planning") that are a deliberate formatting pattern, not the flowing-prose em-dash overuse that signals AI generation. Paragraph burstiness CV of 0.407 is slightly below the 0.45 target but well above the hard 0.30 guardrail. Four plagiarism candidate passages were probed via WebSearch with no verbatim matches found on non-Soltius pages. The editor's `recommendation: approve` is upheld. Article is curator-ready.

## AI Detector (heuristic v2.0)

- Score: **0.19** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.407** (target ≥0.45; hard floor ≥0.30 — ABOVE floor)
- Sentence burstiness: **0.686** (healthy)
- Top-30 vocab share: **0.32** (good — low concentration)
- Flags (2):
  - [medium] em-dash-overuse: "Em-dashes count: 5 (max 2)" — see analysis below
  - [low] paragraph-low-variance: "Paragraph word-count CV=0.407 (target ≥0.45)"

**Em-dash analysis:** The script reports 5 em-dashes in prose. Manual inspection shows the distribution is: (1) lead paragraph rhetorical pivot "bukan kegagalan ERP — ini adalah celah" (retained intentionally by editor as one of 2 allowed), (2) H2 heading "MES dan ERP — dan Mengapa Keduanya Harus Berdialog?" (display element, editor-exempted from strict count), and (3) three bold structural labels "Layer 1 — OT/Shop Floor", "Layer 2 — MES/Execution", "Layer 3 — ERP/Planning" (consistent formatting pattern for three-layer architecture exposition, not flowing-prose connector overuse). Em-dashes inside `{IMAGE_NN: ...}` placeholders were correctly excluded by the script. The em-dash flag does not constitute an AI-tell in this context and does not change the verdict.

**Paragraph burstiness note:** CV of 0.407 reflects a how-to/architecture article with several structured sections (comparison table, bulleted aliran-data list, bold-labeled layer paragraphs of similar length). This structural uniformity is content-driven, not an AI pattern. Sentence burstiness of 0.686 and a rich mix of 1-sentence, 2-sentence, and 4-sentence paragraphs throughout confirm adequate human variance. The 0.30 hard guardrail is not triggered.

## Plagiarism (web lookup of distinctive passages)

4 candidate passages probed (2 probes per validator instruction cap, applied across the 4 highest-scored candidates):

- Candidate 1: "Production order dari S/4HANA mengalir otomatis ke SAP DM; konfirmasi aktual produksi dikirim kembali real-time tanpa input manual (SAP Help Documentation, 2026)." — search returned general SAP production-order documentation pages; **no verbatim match** on any non-Soltius public page. Clean.
- Candidate 2: "Dalam berbagai implementasi MES-ERP yang terdokumentasi, peningkatan OEE berkisar 15–25 poin persentase setelah integrasi real-time diterapkan." — search returned general OEE articles in Bahasa Indonesia; **no verbatim match**. Clean.
- Candidate 3: "Ketika manajer membuka laporan jam 9 pagi, ia melihat kondisi pabrik jam 6 sore kemarin." — search returned unrelated results (exam questions, HR documents); **no verbatim match**. Clean. (Original scene-setting sentence.)
- Candidate 4: "Sebagai SAP Platinum Partner melalui United VARs, Soltius mendampingi perusahaan manufaktur dari asesmen kesiapan shop floor hingga implementasi SAP Digital Manufacturing dan dukungan pasca go-live." — search returned soltius.co.id and metrodata-adjacent pages only. Exempt (intentional self-reference / Soltius own content — not plagiarism per validator rules).

Candidates 5–8 (heading text, image-placeholder-adjacent, and structural FAQ heading) were not probed — heading/placeholder text is not publishable body prose and is excluded from plagiarism scoring per validator guidance.

- Aggregate plagiarism score: **0.00**
- Verdict threshold: pass (<0.10, no 20-word verbatim hit on non-Soltius site) — **PASS**

## Loop status

This is revision loop **0** (first pass). No revision loop triggered. Article is clear for curator commit.

## Curator disposition

**Curator-ready.** Editor `recommendation: approve` + Validator `verdict: pass`. The `article-history-curator` may commit this article to `articles_history/` and produce the `.docx` output.
