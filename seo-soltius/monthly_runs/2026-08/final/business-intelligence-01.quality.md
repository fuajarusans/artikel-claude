---
brief_id: "business-intelligence-01"
validator_run_date: "2026-06-08"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Business Intelligence untuk CFO: Dari Laporan Bulanan ke Keputusan Real-Time

## Verdict: **pass**

Both gates clear. The heuristic AI detector returns a score of 0.04 — well below the 0.30 revise threshold — with a single low-severity flag for paragraph burstiness (CV 0.341 vs target 0.45); sentence burstiness (0.783) and vocabulary concentration (top-30 share 0.293) are both healthy counters that keep the aggregate score low. The paragraph-variance flag does not reach the 0.30 floor that would trigger a forced revise. Plagiarism lookup across all 8 distinctive passages found zero verbatim or near-verbatim matches on any non-Soltius public page; hits on SAP Help Portal, SAP News Center, and McKinsey/CFO Dive are all cited sources or SAP-official documentation, treated as intentional technical attribution, not plagiarism. Article is curator-ready.

---

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise >=0.30, reject >=0.50)
- Paragraph burstiness (CV): **0.341** (target >=0.45) — marginal; offset by strong sentence burstiness
- Sentence burstiness: **0.783** — well above threshold; varied rhythm
- Top-30 vocab share: **0.293** — healthy; no vocabulary concentration signal
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.341 (target >=0.45)

**Manual review of flag:** The paragraph CV shortfall is borderline. On re-read, the article mixes 1-sentence paragraphs (the blockquote definition snippet, individual bullet-list items), medium 3-sentence blocks, and longer 5-sentence analytical paragraphs. The mix is real and visible; the CV calculation is depressed partly by the FAQ block's Q&A pairs, which are structurally short-by-design. The editor's changelog confirms deliberate paragraph-length variation was enforced (em-dash purge, 1-sentence honest-hedging lines). Given the strong sentence burstiness (0.783) and the overall AI score (0.04), this flag does not override the pass.

---

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked.

- Passage 1: "SAP Analytics Cloud mendukung *live connectivity* ke SAP S/4HANA (edisi On-Premise maupun Cloud) melalui CDS *views* (*Core Data Services*), sehingga dashboard membaca data transaksi terkini tanpa rekap manual." — search returned SAP Help Portal and SAP Community posts describing the same technical capability; no match for the article's specific Indonesian phrasing. Hits are on SAP-official sources (cited, intentional technical attribution). **Clean.**

- Passage 2: "SAP diakui sebagai Leader dalam Gartner Magic Quadrant for Financial Planning Software pada 2024 dan kembali pada 2025 (SAP News Center)." — search returned news.sap.com and Gartner pages (both cited). No verbatim Indonesian phrase match on any non-Soltius third-party site. This is a factual attribution statement; phrasing is original to the article. **Clean.**

- Passage 3 & 4 (near-duplicate): "SAP Analytics Cloud menyediakan *add-in for Microsoft Excel* yang menghubungkan Excel ke model SAC, data live SAP Datasphere, dan CDS *views* dari SAP S/4HANA Cloud." — search returned SAP Help Portal documentation and SAP Community blog posts describing the same product capability. The article's Indonesian construction ("menyediakan ... yang menghubungkan") does not appear verbatim anywhere. SAP Help Portal hits are SAP-official sources the article cites; counted as intentional. **Clean.**

- Passage 5: "Survei McKinsey (Juli 2024) menunjukkan meski 98% CFO telah berinvestasi dalam otomasi, interpretasi konteks bisnis dan keputusan strategis tetap membutuhkan penilaian manusia." — no verbatim or near-verbatim Indonesian phrase found anywhere. The statistic traces to the cited CFO Dive/McKinsey source; the phrasing is the article's own synthesis. **Clean.**

- Passage 6: "BI yang baik tidak menyuruh tim finance membuang Excel; ia memberi Excel satu sumber angka yang tepercaya." — no match on any page. Original framing not found elsewhere. **Clean.**

- Passage 7: "Survei McKinsey Global CFO (Juli 2024) menemukan bahwa meski 98% CFO telah berinvestasi dalam alat otomasi, 41% di antaranya baru mengotomasi seperempat proses keuangan mereka atau kurang." — McKinsey/CFO Dive are the cited sources; the article's Indonesian phrasing was not found verbatim on any non-Soltius page. **Clean.**

- Passage 8: "Bila 'margin' berarti hal berbeda bagi finance dan sales, mempercepat tampilannya tidak menyelesaikan perselisihan, justru memperkerasnya." — no match on any page. Original insight/framing. **Clean.**

**Aggregate plagiarism score: 0.00**
(0 exact matches × 0.05 + 0 partial near-matches × 0.02 = 0.00)
Threshold: pass < 0.10.

---

## Loop status

This is revision loop **0**. Verdict is pass — no revision loop needed. Article is curator-ready.
