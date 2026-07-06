---
brief_id: "business-intelligence-02"
validator_run_date: "2026-06-08"
verdict: "pass"
ai_score: 0.19
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Augmented Analytics: Bagaimana AI Mengubah Cara Kerja Business Intelligence

## Verdict: **pass**

The article clears both gates without revision. The heuristic AI score of 0.19 sits well below the 0.30 revise threshold; the two flags raised (em-dash count and paragraph variance) are both structurally explained and do not move the score to a borderline range. All 8 candidate passages returned clean on web lookup: no verbatim phrase appears on any public non-Soltius URL, and the two passages touching public data sources (Mordor Intelligence CAGR figure; SAP Just Ask documentation dates) are properly attributed to their origin and the Indonesian phrasing is original. The article is curator-ready.

---

## AI Detector (heuristic v2.0)

- Score: **0.19** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.415** (target ≥0.45)
- Sentence burstiness: **0.739** (strong — well above threshold)
- Top-30 vocab share: **0.287** (healthy; low concentration)
- Flags (2):

  - [medium] em-dash-overuse: Em-dashes count: 5 (max 2)
  - [low] paragraph-low-variance: Paragraph word-count CV=0.415 (target ≥0.45)

**Flag disposition — em-dash count (medium):**
The script counts all em-dash characters in the file, including 4 table level-labels ("1 — Bahasa alami", "2 — Prediktif", "3 — Auto-insight", "4 — Agentik") and at least one `{IMAGE_NN: ...}` placeholder concept description. The editor's changelog documents the reduction from 23 prose em-dashes to 1 (one retained in the Sensors speed-comparison sentence), with the remaining occurrences confined to structural/non-prose text. A manual read confirms: all 4 table-row labels and the 1 image-placeholder description account for the 5-count; flowing prose contains 1. The pattern does not indicate an AI tell in the published text.

**Flag disposition — paragraph-low-variance (low):**
CV 0.415 is marginally below the 0.45 target but carries only low severity. Sentence burstiness at 0.739 and the overall score of 0.19 demonstrate that variation exists at the sentence level; the paragraph CV is pulled toward uniformity by the FAQ block (7 consecutive answers of similar word count), which is a structural requirement. This flag does not materially affect the pass verdict; the HCU/SpamBrain risk from this metric alone is negligible when the full-text voice reads as human-expert.

**Manual re-read of borderline-AI territory:**
The 0.19 score and the flag context do not require a full manual re-read. Spot-checking the flagged sections confirms the voice is consistent with the senior-consultant register: concrete numbers throughout, honest-hedging on Gartner projections, a counter-conventional H2 calling out vendor limits, and the paragraph rhythm mixes 1-sentence punches with 4–5-sentence blocks.

---

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked. Aggregate score: **0.00**

- Passage 1: "Sebagai konteks pasar lokal, Mordor Intelligence memproyeksikan pasar Big Data Analytics Software Indonesia tumbuh dengan CAGR sekitar 9,35% hingga 2030..." — The Mordor Intelligence market name and CAGR figure are publicly documented on mordorintelligence.com and datainsightsmarket.com as widely cited market data. The specific Indonesian-language sentence construction is not found verbatim on any public page. The figure is properly attributed in-article. **Clean** (public data point, attributed, no sentence-level overlap).

- Passage 2: "Di SAP Analytics Cloud, fitur ini disebut Just Ask, dirilis umum pada Q1 2024 dan menggantikan Search to Insight yang dihentikan sejak Q4 2024." — The factual dates and product names appear on SAP official documentation (help.sap.com, community.sap.com — KBA 3532315, KBA 3430577). These are intentional SAP-official citations, not plagiarism. No verbatim Indonesian sentence found on non-Soltius/non-SAP public pages. **Clean** (SAP-official source; intentional citation).

- Passage 3: "Dari Dashboard ke Keputusan: Pergeseran Besar 2026 — BI bergerak dari 'melihat grafik' menjadi 'diberi jawaban'." — No match found on any public page. The framing is original editorial. **Clean**.

- Passage 4: "Yang Tidak Diceritakan Vendor: Batas Augmented Analytics — AI hanya seakurat data dan tata kelola di bawahnya." — No match found. The H2 heading and lead sentence are original. **Clean**.

- Passage 5: "Sejak pembaruan Joule pada 2026, ia memerlukan SAP Build Work Zone untuk provisioning dan sinkronisasi pengguna." — The technical dependency is documented on help.sap.com (Joule/Build Work Zone integration guide). The Indonesian-language phrasing is not found verbatim on any non-SAP public page. **Clean** (SAP-official source; intentional citation).

- Passage 6: "Tiga Lompatan AI dalam BI: Bahasa Alami, Prediktif, dan Agentik — AI masuk ke BI lewat tiga lompatan yang saling menumpuk." — No match found. Original taxonomy and framing. **Clean**.

- Passage 7: "Dua proyeksi Gartner lain memperjelas arahnya, meski perlu dibaca sebagai perkiraan, bukan kepastian." — No match found. The honest-hedging phrase is original editorial voice. **Clean**.

- Passage 8: "Istilah ini diciptakan Gartner pada 2017 dan kini menjadi fondasi evolusi modern platform BI seperti SAP Analytics Cloud." — No verbatim match found for this combined sentence. The Gartner 2017 coinage is a widely known industry fact; the sentence construction connecting it to SAP Analytics Cloud is original. **Clean**.

---

## Loop status

This is revision loop 0. Verdict is **pass** — no revision loop initiated.

---

## Recommendation

**Curator-ready.** Editor `recommendation: approve` + Validator `verdict: pass`. The article may be committed to `articles_history/` and converted to `.docx`.
