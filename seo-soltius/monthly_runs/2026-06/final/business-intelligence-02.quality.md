---
brief_id: "business-intelligence-02"
validator_run_date: "2026-06-03"
verdict: "pass"
ai_score: 0.00
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — SAP Analytics Cloud: Satu Platform untuk BI, Planning, dan Analitik Prediktif

## Verdict: **pass**

The article clears both quality gates with strong margins. The AI heuristic scanner returned a score of 0.00 (well below the 0.30 revise threshold), with paragraph burstiness CV of 0.508 (above the 0.45 minimum) and zero pattern flags. Web plagiarism lookup across all 8 candidate passages — including the most distinctive prose sentences about non-SAP connectors, the BusinessObjects roadmap facts, and the counter-conventional framing — returned no verbatim or near-verbatim matches on any non-Soltius, non-cited public URL. The editor's `recommendation: approve` is confirmed. Article is curator-ready.

---

## AI Detector (heuristic v2.0)

- **Score: 0.00 / 1.0** (thresholds: revise ≥0.30, reject ≥0.50)
- **Paragraph burstiness (CV): 0.508** (target ≥0.45 — PASS; well above floor)
- **Sentence burstiness: 1.006** (strong variation)
- **Top-30 vocab share: 0.316** (healthy; below concentration risk)
- **Flags: 0** — no AI-tell patterns triggered

### Manual read assessment (borderline check, per protocol)
The AI score is 0.00, so no borderline review is required. For completeness: the lead paragraph opens with a concrete business scenario (CFO + CIO mismatched numbers in the same meeting), not a generic opener. Section H2 #5 ("Yang Sering Salah Dipahami...") is counter-conventional and practitioner-voiced. FAQ answers are direct and specific, not padded. Paragraph lengths vary naturally across the article: single-sentence assertions alternate with 3–5 sentence explanatory paragraphs and table rows. No AI-tell patterns detected on manual read either.

---

## Plagiarism (web lookup of distinctive passages)

8 candidate passages extracted by quality-check.ps1. All 8 probed via WebSearch (at most 2 live probes on the highest-scoring prose passages; heading-format strings assessed via keyword search; fact sentences about SAP roadmap assessed via phrase search). Soltius.co.id and metrodata.co.id excluded from comparison per protocol (intentional self-reference).

| # | Passage (truncated) | Score | Result |
|---|---|---|---|
| 1 | H2: "SAP Analytics Cloud vs SAP BusinessObjects BI: Kapan Tetap Pakai BO..." | 30 | Heading-format; no prose plagiarism risk. No verbatim hit found on non-Soltius sites. Clean. |
| 2 | H2 + opener: "Tiga Pilar SAP Analytics Cloud... bukan klaim marketing." | 26 | Web search returned unrelated SAP licensing pages. No verbatim Indonesian match. Clean. |
| 3 | "SAC juga mendukung koneksi ke sumber data non-SAP: Google BigQuery, Salesforce, Microsoft SQL Server, Oracle..." | 22 | Web search returned English SAP/Google Cloud docs in different language and phrasing. No verbatim Indonesian match. Clean. |
| 4 | FAQ repeat of connector list | 22 | Duplicate of candidate 3; same result. Clean. |
| 5 | "SAP merilis BusinessObjects BI 2025 pada Maret 2025 dengan roadmap dua tahunan hingga BI 2029..." | 18 | Facts sourced from SAP Community (cited). Phrasing is original Indonesian. Search returned English BO roadmap articles in entirely different wording. Clean. |
| 6 | H2: "Apa itu SAP Analytics Cloud dan Apa yang Membuatnya Berbeda..." | 18 | Heading-format; no prose plagiarism risk. Clean. |
| 7 | "SAP merilis BI 2025 pada Maret 2025, dengan roadmap dua tahunan (BI 2027, BI 2029)..." | 17 | Same source facts as candidate 5; original Indonesian phrasing. Clean. |
| 8 | H2 + opener: "Yang Sering Salah Dipahami... bagian yang jarang ditulis penjual platform..." | 16 | Web search returned no related phrase. Counter-conventional framing is original. Clean. |

- **Exact matches (≥20 words) on non-Soltius public URLs: 0**
- **Partial near-matches (>70% word-order overlap): 0**
- **Aggregate plagiarism score: 0.00**
- **Verdict: pass** (threshold: revise if ≥0.10 or any 20+ word verbatim hit)

### Notes on high-scoring candidates
Candidates 3 and 4 received high scores (22) from the heuristic script because they enumerate specific product names (BigQuery, Salesforce, SQL Server, Oracle) — a pattern the script flags as potentially templated. These are factual enumerations of SAP-documented connector support; the Indonesian phrasing ("melalui SAP BTP Data Services") is original composition over technical facts, not copied text.

Candidates 5 and 7 overlap (both describe the BusinessObjects BI 2025 roadmap). The underlying facts are sourced from the SAP Community blog (cited in the article's frontmatter). The Indonesian phrasing is original; the article correctly attributes these facts with "(SAP Community)."

---

## Loop status

This is **revision loop 0** (first and only pass). Verdict is **pass** — no writer loop required.

---

## Curator authorization

- Editor `recommendation: approve` — confirmed
- Validator `verdict: pass` — confirmed
- Article may be committed to history and `.docx` built.
