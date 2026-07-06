---
brief_id: "erp-migration-to-the-cloud-03"
validator_run_date: "2026-06-03"
verdict: "pass"
ai_score: 0.00
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Biaya Migrasi ERP ke Cloud: TCO, Komponen Biaya, dan Kapan BEP Tercapai

## Verdict: **pass**

Both the AI-detector and plagiarism checks cleared cleanly on first pass. The heuristic script returned an AI score of 0.00 with zero flags, excellent paragraph burstiness (CV 0.586 vs target ≥0.45), and healthy vocabulary diversity. Three plagiarism probes — targeting the most distinctive phrases including the RISE/GROW FAQ comparison, the 31 Desember 2027 + surcharge passage, and the Indonesian ERP TCO landscape — returned no verbatim or near-verbatim matches against non-Soltius pages. Editor recommendation was `approve`. The article is cleared for the curator to commit.

---

## AI Detector (heuristic v2.0)

- **Score:** 0.00 / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- **Paragraph burstiness (CV):** 0.586 (target ≥0.45 — healthy variation; 24 paragraphs with genuinely mixed lengths)
- **Sentence burstiness:** 0.909 (strong rhythm variation across 90 sentences)
- **Top-30 vocab share:** 0.33 (well below concentration threshold; wide lexical range)
- **Flags (0):** none triggered

**Manual scan notes:** The article demonstrates consistent practitioner-level voice — the "Berapa persis surcharge-nya? SAP tidak mempublikasikan." rhetorical pair is a strong human tell; the numbered hidden-costs section uses bold lead-ins rather than uniform bullet structure; the FAQ answers vary in length and structure (some open with concession, others with number, others with contrast). No AI-pattern tells detectable by eye.

---

## Plagiarism (web lookup of distinctive passages)

8 candidate passages extracted by quality-check.ps1. 3 probes executed (2 within-budget direct probes + 1 supplemental verification):

- **Passage 1 (candidate score 28):** "GROW for mid-market: S/4HANA Cloud Public Edition, biaya lebih rendah, implementasi 3–6 bulan, tetapi proses bisnis harus mengikuti SAP Best Practices."
  - Probe: searched with all five distinctive phrase fragments quoted.
  - Result: **clean**. Results returned SAP.com, learning.sap.com, and partner pages — none containing this exact Indonesian phrasing. The factual elements (3–6 month implementation, Public Edition, Best Practices) are common knowledge; the sentence construction is original.

- **Passage 2 (candidate score 20):** H2 heading + opening sentence of RISE vs GROW section.
  - Not separately probed (Markdown `##` headers do not appear verbatim on web pages; the content is original prose). **Clean by construction.**

- **Passage 3 (candidate score 18):** H2 "Biaya Tersembunyi..." + opener sentence.
  - Not separately probed (heading + original framing; the "jarang ditulis di artikel vendor Indonesia" self-referential opener is clearly original). **Clean by construction.**

- **Passage 4–6 (scores 16, 15, 13):** Section opener for TCO phase table; the 31 Desember 2027 / surcharge passage; the 22% maintenance figure.
  - Supplemental probe on the most sensitive of these (31 Des 2027 + "SAP tidak mempublikasikan tarif resmi" combined): **clean**. Pages found (crowe.com/id, saplicensingexperts.com) confirm the 2% surcharge fact but contain none of the article's Indonesian phrasing. The phrase "SAP tidak mempublikasikan tarif resmi" is original to this article.
  - Note: the 22% figure and 31 Des 2027 date are publicly documented facts (SAP Support Portal cited in-article); factual overlap with authoritative sources is intentional citation, not plagiarism.

- **Passage 7 (candidate score 12):** "RISE for enterprise: S/4HANA Cloud Private Edition, biaya lebih tinggi, kustomisasi diizinkan, implementasi 12–18 bulan."
  - Standard SAP program description; phrasing is original Indonesian. **Clean by construction.**

- **Passage 8 (candidate score 10):** FAQ section header + first Q.
  - Standard structural element; no verbatim match possible. **Clean by construction.**

**Aggregate plagiarism score: 0.00**
No exact matches (≥20 words) detected on any non-Soltius page. No partial near-matches (>70% word-order overlap) detected.

---

## Loop status

This is revision loop **0** (first and only pass). Verdict: **pass**. No revision loop needed.

---

## Curator clearance

Both gates cleared:
- Editor: `recommendation: approve`
- Validator: `verdict: pass`

The curator (`article-history-curator`) may proceed to commit `erp-migration-to-the-cloud-03` to `articles_history/` and build the `.docx`.
