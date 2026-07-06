---
brief_id: "jurnal-umum-c01"
validator_run_date: "2026-06-18"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Apa Itu Jurnal Umum? Pengertian, Fungsi, dan Cara Membuatnya

## Verdict: **pass**

Both gates cleared without issue. The heuristic AI score (0.04) sits comfortably below the revise threshold of 0.30; the single low flag (paragraph burstiness CV 0.436 vs 0.45 target) is non-blocking at this overall score. All 8 plagiarism candidate passages were searched verbatim; zero exact matches and zero partial near-matches were found on any non-Soltius public page. Generic accounting definitions (saldo normal, double-entry mechanics, column names) were correctly excluded from scoring per topic-domain instructions. Article is curator-ready.

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.436** (target ≥0.45 — marginally below, non-blocking at score 0.04)
- Sentence burstiness: **1.301** (healthy — well above 0.45 sentence-level target)
- Top-30 vocab share: **0.336** (within normal human range; no vocabulary concentration risk)
- Flags (1):
  - [LOW] paragraph-low-variance: Paragraph word-count CV=0.436 (target >=0.45) — single low flag; overall score 0.04 means no structural AI patterning; non-blocking per validator rules (approve borderline CV only when overall score is also borderline 0.28–0.32; this is 0.04)

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked via WebSearch (quoted exact queries).

- Passage 1: "Standar akuntansi di Indonesia sendiri diatur oleh Ikatan Akuntan Indonesia (IAI) melalui Standar Akuntansi Keuangan (SAK) yang berbasis IFRS dan berlaku konvergen sejak 1 Januari 2015." — Results returned IAI official pages (iaiglobal.or.id), Binus accounting blog, and sw-indonesia.com discussing the same regulatory fact, but no page contains this exact sentence verbatim. Standard regulatory-fact language; excluded from scoring per policy. **Clean.**

- Passage 2: "CV Mitra Konsultan, sebuah perusahaan jasa konsultasi yang baru berdiri, dengan tujuh transaksi pada bulan pertamanya." — No match on any indexed page. Fictional worked-example entity; original. **Clean.**

- Passage 3: "Akun Kas didebit karena aset perusahaan (kas) bertambah; akun Modal dikredit karena ekuitas pemilik bertambah." — Results returned general double-entry explainers (gauthmath, pendidikanakuntansi.feb.ugm.ac.id, ocbc.id, paper.id) describing the same concept; no verbatim sentence match. Standard double-entry explanation; excluded from scoring per policy (well-known definition). **Clean.**

- Passage 4: "Format umum jurnal umum terdiri dari kolom Tanggal, Keterangan/Akun, Nomor Referensi (Ref), Debit, dan Kredit." — Results returned multiple jurnal-umum articles (paper.id, detik, kledo, jurnal.id, ppmschool) listing identical columns; no verbatim sentence match. Column names are standard accounting terminology; excluded from scoring per policy. **Clean.**

- Passage 5: "Kalau sebuah toko mencatat ratusan penjualan tunai per hari, menulisnya satu per satu di jurnal umum jadi melelahkan dan rawan salah." — Results returned jurnal.id, kitalulus, akuntansiubaya.id discussing high-volume journal inefficiency; no verbatim sentence match. The colloquial phrasing ("melelahkan dan rawan salah") is original practitioner voice not found elsewhere. **Clean.**

- Passage 6: "Untuk perusahaan dagang, polanya sama, hanya jenis akunnya bertambah: pembelian barang dagang secara kredit, misalnya, dicatat dengan mendebit Persediaan Barang Dagang dan mengkredit Utang Usaha." — Results returned mekari, pijarbelajar, kledo on the same accounting treatment; no verbatim sentence match. Standard accounting content, no distinctive lift. **Clean.**

- Passage 7: "Pendapatan menambah ekuitas, jadi ikut saldo normal kredit; beban menguranginya, jadi saldo normalnya debit." — Results returned accurate.id, stieykpn.ac.id, ocbc.id, studiobelajar.com on saldo-normal concepts; no verbatim sentence match. Standard saldo-normal explanation; excluded from scoring per policy (well-known definition). **Clean.**

- Passage 8: "Fungsi historis: mencatat transaksi secara berurutan sesuai tanggal kejadian, sehingga kronologi keuangan perusahaan terjaga rapi." — Results returned kompas.com/skola, harmony.co.id, paper.id, baraka.uma.ac.id on fungsi historis; no verbatim sentence match. Common didactic framing in Indonesian accounting curricula; no distinctive verbatim lift. **Clean.**

- Aggregate plagiarism score: **0.00**
  - Exact matches (≥20 words verbatim on non-Soltius page): 0
  - Partial near-matches (>70% word-order overlap): 0
  - Ignored (generic/standard phrasing per policy): passages 1, 3, 4, 7, 8

## Loop status

This is revision loop 0. Verdict is `pass` — no revision loop required.

## Curator action

Article is cleared for commit. Editor verdict: `approve`. Validator verdict: `pass`. Both gates passed on first run. Curator may proceed to commit `jurnal-umum-c01.id.md` to `articles_history/` and produce `.docx`.

Note for curator: the editor flagged that the three internal soltius.co.id accounting-blog URLs (siklus akuntansi, SAP FICO, laporan keuangan) should be confirmed 200/OK before commit, as they fall outside the 6-cluster `product_matrix.md` map and are conditional/ad-hoc topic links.
