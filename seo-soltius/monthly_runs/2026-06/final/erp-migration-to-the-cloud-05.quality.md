---
brief_id: "erp-migration-to-the-cloud-05"
validator_run_date: "2026-06-03"
verdict: "pass"
ai_score: 0.00
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Setelah Go-Live ERP Cloud: Tantangan yang Jarang Diceritakan (dan Cara Mengatasinya)

## Verdict: **pass**

Both the AI-detector heuristic and plagiarism web lookup return clean results. The AI score is 0.00 — the lowest possible — with paragraph burstiness at 0.545 (well above the 0.45 hard floor) and zero flags triggered across all anti-AI pattern checks. Four web searches across the eight plagiarism candidate passages found no verbatim or near-verbatim matches on non-Soltius public pages. The SAP BTP Integration Suite sentence uses standard product terminology that appears in SAP official documentation (not plagiarism). The three-phase timeline passage (hypercare / stabilisasi / steady state) matches industry-standard ERP lifecycle terminology used globally, but the specific Indonesian phrasing is original to this article. This article is curator-ready.

---

## AI Detector (heuristic v2.0)

- **Score**: 0.00 / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- **Paragraph burstiness (CV)**: 0.545 (target ≥0.45 — PASS)
- **Sentence burstiness**: 0.686
- **Top-30 vocab share**: 0.327
- **Flags (0)**: none triggered
- **External API**: not used (heuristic mode)

The article shows strong natural language variation. Paragraph lengths range from single-sentence hooks to multi-sentence analytical blocks. Sentence structure is varied throughout — mix of short declarative statements, conditional constructions, and longer explanatory sentences. No AI-tell patterns identified by the script or on manual review of the flagged sections.

---

## Plagiarism (web lookup of distinctive passages)

8 candidate passages were extracted by the heuristic script. 4 web searches were conducted covering all 8 candidates (highest-scored candidates prioritised, with combined queries covering lower-scored ones).

| # | Candidate passage | Score | Lookup result |
|---|---|---|---|
| 1 | "Fase transisi terbagi tiga: hypercare (4–8 minggu), stabilisasi (bulan 2–6), dan steady state (bulan 6+)." | 25 | Clean — phase names are industry-standard ERP terms; specific Indonesian phrasing not found on any public page |
| 2 | "Tanda-Tanda Proyek ERP Cloud Anda Perlu Intervensi Segera..." | 18 | Clean — no matching title or passage found |
| 3 | Soltius business-intelligence internal-link sentence | 18 | Clean — contains soltius.co.id URL; not applicable as plagiarism target |
| 4 | "Change Management: Faktor yang Paling Sering Diabaikan..." | 18 | Clean — no matching phrasing found |
| 5 | "Mengapa Go-Live Bukan Akhir Perjalanan Migrasi ERP ke Cloud..." | 16 | Clean — no matching phrasing found |
| 6 | "SAP BTP Integration Suite (*Business Technology Platform*) adalah platform yang dirancang untuk menghubungkan SAP..." | 14 | Clean — standard product description language from SAP official docs; no verbatim match on third-party pages |
| 7 | ">20% pengguna masih menggunakan spreadsheet..." | 10 | Clean — no matching phrasing found |
| 8 | FAQ header passage | 10 | Clean — structural/generic header text |

- Exact matches on non-Soltius URLs: **0**
- Partial near-matches (>70% word-order overlap): **0**
- Hits on soltius.co.id / cited sources (intentional): N/A — no hits at all
- **Aggregate plagiarism score: 0.00**

Verdict threshold: pass if score < 0.10 AND no verbatim hit ≥20 words — **PASS**.

---

## Loop status

This is revision loop **0** (first and only pass). No revision required.

---

## Recommendation

**Curator-ready.** The article passes both quality gates cleanly. AI score 0.00 with strong burstiness metrics; plagiarism score 0.00 with zero web matches. Editor recommendation is `approve`. Curator may commit.
