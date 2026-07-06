---
brief_id: "erp-migration-to-the-cloud-01"
validator_run_date: "2026-06-03"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Brownfield, Greenfield, atau Bluefield? Panduan Memilih Jalur Migrasi ERP ke Cloud

## Verdict: **pass**

The article passes both the AI-detector heuristic (score 0.04, well below the 0.30 revise threshold) and the plagiarism web lookup (0 exact or near-verbatim matches on non-Soltius public pages). The editor's `recommendation: approve` is confirmed. Paragraph burstiness CV is 0.453, above the 0.45 minimum, indicating genuine writing rhythm variation. The one low-severity AI flag (vocab-repetition at 35.5% vs the 30% target) is within acceptable range given the technical SAP domain — domain-specific terms such as "migrasi", "brownfield", "greenfield", "bluefield", "SAP", and "ECC" necessarily recur in a comparison guide of this type and do not indicate AI generation. The curator may commit this article.

---

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.453** (target ≥0.45) — PASS
- Sentence burstiness: **0.815** — PASS (high variation in sentence length; good human-writing signal)
- Top-30 vocab share: **0.355** (target <0.30) — low-severity flag; domain-inherent, not an AI tell
- Flags (1):
  - [low] vocab-repetition: Top 30 words = 35.5% of body (target <30%) — domain-specific SAP terminology drives this; not a genuine AI signal for technical B2B content

**Manual review note:** I reviewed the flagged sections against `style_guide.md` §5 manually. No stacked AI openers, no "Di era digital / Seiring perkembangan teknologi", no "Penting untuk dicatat", no repetitive em-dash patterns (editor confirmed 33 → 1), no homogeneous paragraph structure. Sentence burstiness of 0.815 is exceptional. The article reads as a practitioner decision-guide, not a generated listicle. No further action required.

---

## Plagiarism (web lookup of distinctive passages)

2 candidate passages checked (highest-scoring candidates, scores 36 and 28 from the heuristic):

- Passage 1 (score 36): "Per SAP Support Portal, mainstream maintenance untuk SAP ECC (Enhancement Package 6–8, mayoritas instalasi) berakhir 31 Desember 2027." — WebSearch returned no verbatim Indonesian-language match on non-Soltius pages. Multiple English-language sources confirm the underlying SAP fact; the Indonesian phrasing is original. **Clean.**
- Passage 2 (score 28): "Untuk deployment satu negara standar: brownfield 6–10 bulan, greenfield 12–18 bulan, bluefield/SDT 9–18 bulan." — WebSearch returned SoftwareSeni (English), LeverX, IgniteSAP, and SNP Group blog posts covering similar estimates in English. No verbatim Indonesian phrasing match found on any non-Soltius page. Duration estimates are correctly framed as "kisaran industri umum, bukan angka pasti." **Clean.**
- Remaining 6 candidates (scores 23 and below): Not queried (at most 2 probes per protocol). All remaining candidates are either Indonesian-original phrasing, hedged industry-standard claims, or direct SAP product definitions correctly attributed. No elevated risk identified.

Aggregate plagiarism score: **0.00**

---

## Loop status

This is revision loop **0** (first and only validation pass). Verdict is `pass`; no writer loop triggered.

---

## Curator instruction

Article `monthly_runs/2026-06/final/erp-migration-to-the-cloud-01.id.md` is **curator-ready**. Editor `recommendation: approve` + Validator `verdict: pass` gate is satisfied. Proceed to commit to `articles_history/` and generate `.docx`.
