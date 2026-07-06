---
brief_id: "data-warehouse-solutions-02"
validator_run_date: "2026-06-08"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Real-Time vs Batch Data Warehouse: Kapan Anda Perlu Data Seketika

## Verdict: **pass**

The article cleared both gates with strong margins. The heuristic AI detector returned a score of 0.04 (threshold: revise >= 0.30), with a single low-severity flag on paragraph burstiness CV (0.375 vs target >= 0.45 — but well above the hard floor of 0.30; the compression is attributable to two comparison tables and the FAQ block expanding the paragraph count with short entries, not to symmetric AI prose). All 8 distinctive passages returned zero verbatim or near-verbatim matches on public non-Soltius web pages; one SAP technical passage (CDC/ODP/S/4HANA 1909 FPS01) matched SAP official documentation, which is an intentional cited source, not plagiarism. Plagiarism score: 0.00. The article is curator-ready.

---

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise >= 0.30, reject >= 0.50)
- Paragraph burstiness (CV): **0.375** (target >= 0.45; hard floor >= 0.30 — above floor, informational only)
- Sentence burstiness: **0.701** (strong; well above threshold)
- Top-30 vocab share: **0.323** (healthy; no vocabulary concentration risk)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.375 (target >=0.45)

**Validator note on the single flag:** The paragraph burstiness is below the ideal 0.45 target but comfortably above the hard-reject floor of 0.30. Manual inspection confirms this is a measurement artefact of table-heavy articles: the two comparison tables (batch vs real-time trade-off table; decision table) and the six-question FAQ block inflate the paragraph count with short entries, while the prose paragraphs themselves vary from 1 sentence (the soft CTA line) to 5–6 sentences. The pattern does not match AI-flattened prose. The editor also verified the anti-AI checklist independently (em-dash count reduced to 0, paragraph variation confirmed). No revision triggered by this flag.

---

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked via WebSearch (quoted exact-phrase queries).

- Passage 1: "Bagaimana Data Warehouse Modern Menggabungkan Keduanya — Pilihan batch versus real-time bukan keputusan tunggal untuk seluruh perusahaan." — clean (search returned general DW and hybrid-ingestion articles in Indonesian; no phrase match)
- Passage 2: "Real-Time vs Batch Data Warehouse: Kapan Anda Perlu Data Seketika — Ada dua kekecewaan yang sama mahalnya." — clean (no phrase match; searches returned unrelated batch/stream articles)
- Passage 3: "Replication Flow mendukung tiga jenis muatan (Initial Only, Delta Only, serta Initial & Delta); dengan opsi delta berbasis CDC, ia menghasilkan sinkronisasi near-real-time." — clean (no Indonesian source matched; SAP documentation results returned English-only technical pages on CDC/delta loading — not a match for the Indonesian phrasing)
- Passage 4: "Batch, Micro-Batch, dan Streaming: Tiga Cara Data Masuk ke Warehouse — Ada tiga pola dasar memasukkan data ke warehouse, dibedakan oleh latensi." — clean (results returned English data-ingestion overview articles; no Indonesian phrase match)
- Passage 5: "Manusia, periodik | Sistem otomatis (mesin fraud, pemicu restock) | Seberapa sering data sumber berubah?" — clean (table-row fragments; no match on any public page)
- Passage 6: "CDC sering menarik perubahan (delta) dari S/4HANA melalui CDS views dengan kerangka ODP (Operational Data Provisioning), yang tersedia mulai S/4HANA 1909 FPS01 (on-premise) dan S/4HANA Cloud 1905." — SAP-official technical match (SAP Community blog post and SAP Learning confirm the S/4HANA 1909 FPS01 / Cloud 1905 CDC availability date). This is an intentional factual citation from a cited source (sap.com help portal listed in external_citations frontmatter). NOT scored as plagiarism per the Soltius/SAP-official exemption rule.
- Passage 7: "Lebih dari 1 jam | Kurang dari 15 menit | Apa konsekuensi data terlambat 1 jam?" — clean (decision-table row fragment; no match on any public page)
- Passage 8: "SAP Datasphere (nama produk sejak Maret 2023, menggantikan SAP Data Warehouse Cloud) adalah contoh arsitektur hibrida semacam ini." — clean (SAP official and community sources confirm the March 8, 2023 rename, but no source contains this exact Indonesian sentence; the phrasing is original)

**Aggregate plagiarism score: 0.00**
- Exact matches on non-Soltius, non-cited public pages: 0 (0 × 0.05 = 0.00)
- Partial near-matches (>70% word-order overlap): 0 (0 × 0.02 = 0.00)
- Exempted (SAP-official cited source): 1 (passage 6)

Verdict (plagiarism): **pass** (score 0.00 < threshold 0.10; no verbatim hit >= 20 words on a non-Soltius non-cited site)

---

## Loop status

This is revision loop **0**. Verdict is `pass` — no writer revision loop triggered. Article is curator-ready.
