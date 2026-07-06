---
brief_id: "gaslink-01"
validator_run_date: "2026-06-09"
verdict: "pass"
ai_score: 0.00
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Apa Itu Gaslink: Gas Bumi untuk Bisnis di Luar Jaringan Pipa

## Verdict: **pass**

Both the AI-detector heuristic and the full plagiarism web-lookup return clean. The heuristic scanner fired zero pattern flags, and all three statistical measures (paragraph burstiness CV 0.613, sentence burstiness 0.904, top-30 vocabulary share 0.308) sit in healthy ranges. Eight candidate passages were checked against external web content; none produced a verbatim or near-duplicate match on any non-Gagas URL. The article is cleared for curator commit.

---

## AI Detector (heuristic v2.0)

- Score: **0.00** / 1.0 (thresholds: revise ≥ 0.30, reject ≥ 0.50)
- Paragraph burstiness (CV): **0.613** (target ≥ 0.45 — well above threshold)
- Sentence burstiness: **0.904** (strong natural variation in sentence length)
- Top-30 vocab share: **0.308** (below concentration danger zone)
- Flags: **0**

No AI-pattern flags fired. The high sentence-burstiness reading (0.904) reflects the article's deliberate mix of one-sentence punchy paragraphs ("Relevansinya besar untuk Indonesia."), multi-clause technical descriptions, a six-step numbered list, and a comparison table — all of which break the uniform-length rhythm that AI detectors penalise. The "Bagian ini jarang ditulis kompetitor..." practitioner aside also contributes to natural cadence. The paragraph CV of 0.613 is comfortably above the 0.45 floor that would trigger a borderline review.

---

## Plagiarism (web lookup of 8 distinctive passages)

Aggregate plagiarism score: **0.00**

Each passage was searched with a quoted query via WebSearch. Scoring: exact match on a non-Gagas URL ≥ 20 words = +0.05; partial near-match (> 70% word-order overlap) on non-Gagas URL = +0.02; generic/definitional shared terminology = 0.

| # | Passage (truncated) | Search result | Classification |
|---|---|---|---|
| 1 | "*Beyond pipeline* berarti melayani pelanggan di luar jangkauan jaringan pipa gas..." | Multiple industry news URLs (suarabanyuurip, detik, CNBC, antara) discuss the concept but no page contains this sentence verbatim | Clean |
| 2 | "Gas alam dari jaringan transmisi nasional masuk ke stasiun pengisian bernama Mother Station, atau SPBG..." | General Mother Station descriptions found (rajawalichaktiutama.com, ESDM PDF); no verbatim sentence match | Clean |
| 3 | "Gaslink tidak cocok untuk semua orang, dan mengatakannya lebih jujur daripada mendorong semua bisnis beralih." | Zero external match; unique editorial framing | Clean |
| 4 | "Bagaimana Cara Kerja Gaslink, dari Mother Station hingga ke Burner Pabrik Anda?" (H2 heading) | Only gagas.co.id returned; no non-Gagas page carries this heading | Clean (Gagas self-reference excluded per rules) |
| 5 | "...penghematan CNG dibanding LPG nonsubsidi sempat disebut mencapai 20–50% di perhotelan, dan satu laundry di Batam menghemat sekitar Rp 16 juta/bulan." | merdeka.com (2016) and another merdeka.com article contain the underlying reported data (Rp 56 juta → Rp 40 juta = Rp 16 juta saving; hotel "50 persen"). However: (a) the article's sentence is a paraphrase, not a verbatim lift; (b) it carries an explicit "contoh lapangan 2017" label and hedge ("Angka ini bukan jaminan"); (c) the figure is a standard widely-reported industry statistic used as an illustrative example. No word-order near-match above 70% threshold. | Clean (hedged cited statistic, not copied prose) |
| 6 | "gas dikompresi hingga sekitar 200–250 bar, memampatkan volumenya menjadi sekitar 1/250 kondisi normal" | 200–250 bar and 1/250 figures appear across multiple sources (kontainerindonesia.co.id, pgnlng.co.id, ESDM). Standard CNG technical specification; the article's sentence construction is its own. | Clean (unavoidable shared technical fact) |
| 7 | "Langkah paling bijak bukan langsung beralih, melainkan menilai dulu apakah skala dan lokasi usaha cocok..." | Zero match; unique editorial conclusion framing | Clean |
| 8 | "GTM dihubungkan ke Pressure Reduction Station, yang menurunkan tekanan ke level kerja yang aman bagi peralatan pelanggan." | General PRS descriptions found (nisregulator.com, cng.co.id); no verbatim sentence match; the article's phrasing is its own construction | Clean |

Passages 5 and 6 required a secondary look. Passage 5 references data that is traceable to merdeka.com reporting from 2016–2017, but the article already discloses this with a year label and uncertainty hedge — it is using a public figure as an illustrative reference, not lifting prose. Passage 6 involves CNG's standard technical parameters (200–250 bar, 1/250 volume ratio) which are inherently shared across the industry and cannot constitute plagiarism.

---

## Loop status

This is revision loop 0. Verdict: **pass**. No revision required.

---

## Editor QC cross-check

Editor recommendation was `approve` (9/10). No inherited issues to resolve. Validator concurs.
