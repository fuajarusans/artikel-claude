---
brief_id: "erp-migration-to-the-cloud-03"
validator_run_date: "2026-06-08"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Cara Memilih Partner Implementasi SAP untuk Migrasi ERP ke Cloud

## Verdict: **pass**

Artikel lolos kedua gate. AI heuristic score 0.04 — jauh di bawah ambang revise 0.30, satu-satunya flag bersifat low-severity (paragraph burstiness CV 0.427, sedikit di bawah target 0.45 tetapi di atas ambang kritis 0.30 dan tidak menyalahi aturan penerimaan). Plagiarism score 0.00: delapan kandidat passage ditelusuri via WebSearch, tidak ada satu pun yang menunjukkan kecocokan verbatim atau near-match signifikan pada halaman non-Soltius publik. Artikel siap untuk curator commit.

---

## AI Detector (heuristic v2.0)

- **Score:** 0.04 / 1.0 (threshold revise >=0.30, reject >=0.50)
- **Paragraph burstiness (CV):** 0.427 (target >=0.45; revise threshold <0.30)
- **Sentence burstiness (CV):** 0.534 (baik — di atas target)
- **Top-30 vocab share:** 0.281 (baik — jauh di bawah konsentrasi tipikal konten AI)
- **Flags (1):**
  - [low] paragraph-low-variance: Paragraph word-count CV=0.427 (target >=0.45)

**Catatan pada flag:** CV paragraf 0.427 adalah borderline-low tetapi tidak menyentuh ambang kritis. Konfirmasi manual menunjukkan artikel memiliki variasi nyata: lead 1 paragraf panjang → blockquote definisi ~56 kata → roadmap 1 kalimat → body H2 yang berisi campuran prose multi-kalimat, numbered list 7 item, tabel kriteria, tabel model biaya, dan bullet red flags. FAQ 7 Q&A dengan panjang jawaban bervariasi. Variasi struktural ini menjelaskan kenapa sentence burstiness (0.534) dan vocab concentration (0.281) baik; CV paragraf sedikit rendah kemungkinan karena proporsi FAQ yang besar (7 item, masing-masing ~50–70 kata). Tidak ada ground untuk menolak atau revisi atas dasar ini — flag ditutup sebagai informasional.

---

## Plagiarism (web lookup of distinctive passages)

**8 kandidat passage diperiksa**

1. **Passage 1** — tabel criteria "| # | Kriteria | Yang perlu dicek | ... | 1 | Status & tier kemitraan SAP | Platinum vs Gold; punya designasi RISE Validated Partner?"
   Hasil: tidak ada kecocokan pada halaman publik non-Soltius. Struktur tabel generik, konten spesifik artikel ini. **Bersih.**

2. **Passage 2** — "Kualitas mitra diakui luas sebagai faktor penentu terbesar keberhasilan proyek SAP: menurut laporan Panorama Consulting (2024), 67% implementasi ERP gagal memenuhi target waktu atau anggaran awal."
   Hasil: tidak ada halaman lain yang memuat frasa Indonesia ini secara verbatim. Statistik Panorama Consulting adalah data sekunder yang diatribusikan dengan benar. **Bersih.**

3. **Passage 3** — "United VARs, aliansi SAP Platinum Partner global untuk mid-market, kini beranggotakan 70+ mitra di 100+ negara dengan lebih dari 10.000 implementasi sukses (United VARs, 2026)."
   Hasil: angka-angka ini dikonfirmasi di united-vars.com (sumber resmi yang dikutip). Framing Indonesia tidak muncul di halaman lain. Ini adalah penggunaan sumber yang dikutip dengan atribusi — bukan plagiarisme. **Bersih (kutipan beratribusi).**

4. **Passage 4** — judul H1 + kalimat pembuka lead ("Keputusan untuk migrasi ERP ke cloud sudah Anda ambil, jalurnya pun sudah dipilih.")
   Hasil: tidak ada halaman publik yang memuat frasa ini. Angle dan phrasing orisinal. **Bersih.**

5. **Passage 5** — baris tabel "| 4 | Metodologi (SAP Activate) | 6 fase + quality gates diterapkan konsisten?"
   Hasil: tidak ada kecocokan verbatim. Konten spesifik artikel ini. **Bersih.**

6. **Passage 6** — "## Model Kerja Sama dan Struktur Biaya yang Perlu Dipahami Dua model kontrak dominan dalam proyek SAP adalah fixed-price dan time-and-material (T&M), masing-masing dengan profil risiko berbeda."
   Hasil: tidak ada kecocokan pada sumber Indonesia atau internasional. **Bersih.**

7. **Passage 7** — "SAP Activate adalah metodologi implementasi resmi SAP dengan enam fase (Discover, Prepare, Explore, Realize, Deploy, dan Run) berbasis pendekatan Agile."
   Hasil: frasa Indonesia ini tidak muncul verbatim di halaman publik non-Soltius. SAP Activate adalah metodologi publik dan fase-fasenya diketahui umum, tetapi penyebutan ini merupakan definisi singkat dengan framing sendiri, bukan salinan. **Bersih (deskripsi metodologi publik, bukan salinan verbatim).**

8. **Passage 8** — "## Tanda Bahaya: Kapan Sebaiknya Anda Berjalan Pergi Beberapa sinyal sebaiknya langsung menghentikan negosiasi."
   Hasil: tidak ada kecocokan. Heading dan framing ini orisinal. **Bersih.**

**Aggregate plagiarism score: 0.00**
(0 exact match; 0 partial near-match >=70% word-order overlap pada halaman non-Soltius)

---

## Loop status

Ini adalah revision loop 0 (first pass). Verdict: **pass** — tidak ada revision instructions yang diperlukan. Artikel siap untuk curator commit.
