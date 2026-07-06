---
brief_id: "gasku-01"
validator_run_date: "2026-06-09"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Apa Itu Gasku: BBG untuk Kendaraan & Cara Kerja SPBG

## Verdict: **pass**

Both quality gates clear. The AI-detector heuristic returns a score of 0.04 with a single low-severity flag (paragraph CV 0.396, just below the 0.45 target but above the 0.30 critical floor). The statistical tell is minor and does not approach the 0.30 revise threshold; reviewed against the flagged sections, the paragraph variance is explained by the FAQ block (which structurally produces shorter, uniform-length paragraphs in any article) and is offset by exceptional sentence burstiness (0.684) and healthy vocabulary spread. Plagiarism web lookup found zero verbatim or near-verbatim matches on any non-Gagas public URL across all eight candidate passages. The article is cleared for curator commit.

---

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise ≥ 0.30, reject ≥ 0.50)
- Paragraph burstiness (CV): **0.396** (target ≥ 0.45 — below target, low-severity only; above the 0.30 critical floor)
- Sentence burstiness: **0.684** (healthy natural variation in sentence length)
- Top-30 vocab share: **0.314** (below concentration risk zone)
- Flags: **1**
  - [low] paragraph-low-variance: Paragraph word-count CV=0.396 (target ≥ 0.45)

The sole flag is low-severity and does not pull the score toward the 0.30 revise threshold. Manual review of the flagged metric confirms the depressed CV is driven structurally, not by uniformly AI-generated prose rhythm: the FAQ block (six Q&A pairs, each constrained by the 40–80-word format) compresses variance in the lower tail, while the body mixes single-sentence punchy paragraphs ("Tidak.", "Langkah terakhir yang paling menenangkan."), a seven-step numbered list, a comparison table, three-to-five-sentence technical paragraphs, and a myth-busting block with bold lead-ins — the kind of deliberate structural variation that human writers produce. The sentence burstiness score of 0.684 independently confirms natural rhythm. The vocabulary concentration (0.314) is low, indicating lexical variety throughout. No action required on this flag.

---

## Plagiarism (web lookup of 8 distinctive passages)

Aggregate plagiarism score: **0.00**

Each passage was searched with a quoted query via WebSearch. Scoring rules applied: exact match on a non-Gagas public URL ≥ 20 words = +0.05; partial near-match (>70% word-order overlap) on non-Gagas URL = +0.02; generic/definitional shared terminology, hits on gagas.co.id, or hits on the article's own cited authoritative sources = 0.

| # | Passage (truncated) | Result | Classification |
|---|---|---|---|
| 1 | "Harga Gasku Rp4.500/LSP dikutip dari gagas.co.id (Juni 2026), sedangkan Pertamax Rp12.750/liter mengacu data per Desember 2025..." | Multiple outlets cite Rp4.500/LSP as factual price data; no page reproduces this specific attributed comparative sentence | Clean |
| 2 | "Per November 2025, PGN mengoperasikan 14 SPBG di 7 provinsi yang melayani sekitar 2.200 kendaraan per hari (CNBC Indonesia, November 2025)..." | CNBC Indonesia (cnbcindonesia.com/news/20251106160934) is the source being cited; article paraphrases and attributes correctly — intentional citation, not plagiarism | Clean (cited source) |
| 3 | "LSP (*Liter Setara Premium*) adalah satuannya: 1 LSP setara konsumsi 1 liter bensin Premium, sehingga harga BBG bisa dibandingkan langsung dengan bensin." | Concept appears in metrologitegal.wordpress.com, kumparan.com, others; no verbatim sentence match; LSP definition is common domain | Clean (unavoidable shared definitional fact) |
| 4 | "Gasku adalah layanan Bahan Bakar Gas (BBG) berbasis CNG dari PGN Gagas untuk transportasi: gas bumi dikompresi hingga ~200 bar dan dijual Rp4.500/LSP..." | Only gagas.co.id returned (own-brand source, excluded per rules); no non-Gagas page carries this sentence | Clean |
| 5 | "Sebagai anak usaha PGN, PGN Gagas menyalurkan BBG transportasi lewat jaringan SPBG sendiri melalui layanan Gasku." | gagas.co.id/perkembangan-tahun-ke-tahun-id returned; own-brand source excluded; no verbatim match on non-Gagas URL | Clean |
| 6 | "Bagaimana Cara Kerja Gasku, dari Pipa Gas hingga Tangki Kendaraan Anda?" (H2 heading) | No external match; gagas.co.id/gasku returned as closest but does not carry this heading; original phrasing | Clean |
| 7 | "CNG mengisi tabung berstandar internasional (ISO 11439 / ECE R110) di kendaraan." | solarindustri.com and jurnal.unismabekasi.ac.id discuss ISO 11439/ECE R110 standards in general; no verbatim sentence match; standard/regulatory nomenclature is inherently shared | Clean (unavoidable shared technical/regulatory fact) |
| 8 | "Gas dipampatkan dari tekanan pipa hingga sekitar 200 bar, tekanan kerja CNG kendaraan." | Multiple sources (gagas.co.id, wikipedia, ESDM migas, CNBC Indonesia) reference 200 bar as CNG operating pressure; no verbatim sentence match; standard CNG specification | Clean (unavoidable shared technical fact) |

Passages 3, 7, and 8 warranted a secondary look because the underlying technical facts (LSP definition, ISO standards, 200 bar operating pressure) are inherently shared across the CNG industry. In each case the article's sentence construction is its own — none reproduce a source's specific phrasing — and none constitute copying. Passage 2 references the CNBC Indonesia article that is explicitly cited in the frontmatter and named inline; this is intentional attribution, not plagiarism.

---

## Loop status

This is revision loop 0. Verdict: **pass**. No revision required.

---

## Editor QC cross-check

Editor recommendation was `approve` (9/10). No inherited reject or revise to resolve. Validator concurs with the editor's assessment. The one open watch-item flagged by the editor (PGN Gagas self-mention count) was reviewed: the FAQ attributions are factual and unavoidable, not promotional, and do not affect the quality gate. Article is curator-ready.
