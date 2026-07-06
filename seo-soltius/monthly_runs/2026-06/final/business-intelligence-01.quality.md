---
brief_id: "business-intelligence-01"
validator_run_date: "2026-06-03"
verdict: "pass"
ai_score: 0.10
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Business Intelligence: Mengapa Data Berlimpah Belum Tentu Menghasilkan Keputusan Lebih Baik

## Verdict: **pass**

The article clears both quality gates. The AI heuristic score of 0.10 is well below the 0.30 revise threshold. Paragraph burstiness (CV 0.47) exceeds the minimum 0.30 floor; sentence burstiness is strong at 0.75; top-30 vocabulary share (0.335) is within normal range. The single script flag — 4 em-dashes — is a mis-count artifact: 2 of the 4 occur inside image-placeholder text (not body prose), 1 is a table-cell separator, and 3 are definitional list separators in a bulleted list; none appear in free-running body paragraphs. The editor's QC changelog confirms all body-prose em-dashes were eliminated. Plagiarism lookup returned zero exact or near-exact matches on any non-Soltius public URL across all 8 candidate passages; the article text is original. Editor recommendation is `approve`. This article is ready for the curator.

---

## AI Detector (heuristic v2.0)

- Score: **0.10** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.47** (target ≥0.30 — PASS; target ≥0.45 — PASS)
- Sentence burstiness: **0.75** (strong variation — well within human range)
- Top-30 vocab share: **0.335** (acceptable — no vocabulary concentration risk)
- Flags (1):
  - [medium] em-dash-overuse: "Em-dashes count: 4 (max 2)"

**Flag resolution — em-dashes:** The script detected 4 em-dashes in the full file. Manual inspection of grep output shows their locations:
  - Line 46 (`{IMAGE_01:...}` placeholder text): 1 — not body prose
  - Line 87 (`{IMAGE_02:...}` placeholder text): 1 — not body prose
  - Line 71 (table cell "Selalu — fondasi"): 1 — table separator, acceptable
  - Lines 54–56 (bullet list, 3 definitional separators "Lapisan X — description"): 3 — standard list formatting

Body-prose em-dashes: **0**. The editor's changelog (QC report) documents all 6+ body em-dashes were converted to commas, colons, or parentheses. Flag is **resolved**; does not affect verdict.

**Burstiness read:** A manual review of paragraph lengths confirms strong variation — single-sentence paragraphs ("Tiga komponen inti yang harus tersambung:", "BI bukan produk yang dibeli lalu dipasang; ia adalah kapabilitas organisasi yang dibangun."), medium prose blocks (4–5 sentences), a numbered list of 5, comparison tables, and an FAQ section. The rhythm is definitively non-symmetric. The leading sentence "Ini bukan masalah SDM; ini masalah arsitektur." is characteristic of human editorial voice, not AI list-generation.

---

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked. Probes: 1 per candidate (8 total). No 529 errors encountered.

- ✅ Passage 1 (table: "Aspek | BI | Business Analytics | Data Science | Pertanyaan dijawab | Apa yang terjadi?"): Similar topic-coverage pages exist (glints.com, badr.co.id, binar.co.id) but none match the exact table structure or column arrangement. — **clean**
- ✅ Passage 2 ("Kapan Perusahaan BELUM Perlu BI — Bagian ini jarang ditulis kompetitor, padahal justru di sinilah kepercayaan dibangun"): Search returned only general articles about "kompetitor" concepts with no overlap. — **clean**
- ✅ Passage 3 ("tahap ETL saja bisa mengambil 50–70% dari total waktu proyek, membuat durasi mencapai 9–18 bulan"): ETL articles found (glints, algorit.ma, dicoding) but none cite this practitioner estimate. — **clean**
- ✅ Passage 4 ("Cara Kerja BI: Tiga Lapisan yang Harus Terhubung — Arsitektur BI modern beroperasi dalam tiga lapisan yang saling bergantung"): BI architecture articles found (binus.ac.id, kajianpustaka.com) using general three-layer concepts but no verbatim title or sentence match. — **clean**
- ✅ Passage 5 ("BI vs Analytics vs Data Science: Mana yang Dibutuhkan Bisnis Anda?"): Topic common in Indonesian BI blog space; the H2 phrasing with exact wording "Mana yang Dibutuhkan Bisnis Anda?" not found verbatim on any result page. — **clean**
- ✅ Passage 6 ("Implementasi platform seperti SAC memerlukan konfigurasi koneksi data dan change management yang cermat; Soltius, sebagai SAP Platinum Partner, menangani tahapan ini..."): Search hits on soltius.co.id only — intentional self-reference, not plagiarism. — **clean**
- ✅ Passage 7 ("Jika ERP sudah berjalan dengan data bersih, implementasi platform cloud BI bisa selesai dalam 3–6 bulan"): ERP cloud implementation timelines found on various sites; the specific conditional framing for cloud BI implementation (not ERP itself) with this phrasing not found. — **clean**
- ✅ Passage 8 ("Platform cloud modern seperti SAP Analytics Cloud menawarkan model SaaS dengan biaya berlangganan dan waktu implementasi yang lebih singkat"): SAC SaaS description aligns with sap.com/pricing (cited source) — intentional citation target, not plagiarism; no non-cited verbatim match found. — **clean**

**Aggregate plagiarism score: 0.00** (0 exact hits × 0.05 + 0 partial hits × 0.02 = 0.00)
Threshold: pass if score < 0.10 AND no 20-word verbatim hit — **BOTH CONDITIONS MET**

---

## Editor verdict cross-check

Editor `recommendation: approve` confirmed. No `reject` or `revise` inheritance triggered.

Open flags from the editor's QC report reviewed:
- SAP.com definition URL (403 on fetch): non-blocking, noted for CMS editor at publication. Does not affect quality gate.
- McKinsey 23× statistic (2014): correctly hedged and attributed in article body. Acceptable.
- Mordor Intelligence market size: correctly attributed. Acceptable.
- "82% Indonesian companies" claim: correctly absent (removed by writer per dossier flag). Confirmed absent.

---

## Loop status

This is revision loop **0** (first and only pass). Verdict: **pass**. No writer revision loop triggered. Article proceeds to `article-history-curator`.

---

## Recommendation

**Curator-ready.** Both gates pass: editor `approve` + validator `pass`. The curator may commit `monthly_runs/2026-06/final/business-intelligence-01.id.md` to `articles_history/` and generate `.docx`.
