---
brief_id: "warehouse-management-system-04"
validator_run_date: "2026-06-08"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — WMS Cloud vs On-Premise: Cara Memilih dan Mengintegrasikan dengan ERP

## Verdict: **pass**

Artikel lolos kedua gate tanpa reservasi. AI-detector heuristic memberi skor 0.04 (jauh di bawah ambang revise 0.30) dengan satu flag ringan pada paragraph burstiness CV=0.311 — di atas lantai 0.30 yang menjadi syarat keras, dan konsisten dengan sentence burstiness 0.75 yang sehat serta top-30 vocab share 0.298. Delapan passage kandidat plagiarisme ditelusuri via WebSearch; tidak ada satu pun yang menemukan padanan verbatim atau near-verbatim (>70% word-order overlap) di halaman publik non-Soltius. Artikel ini siap untuk kurator.

---

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.311** (target ≥0.45; lantai keras: ≥0.30 — terpenuhi)
- Sentence burstiness: **0.75** (sehat)
- Top-30 vocab share: **0.298** (di bawah ambang risiko)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.311 (target ≥0.45). Skor keseluruhan 0.04 dan sentence burstiness 0.75 mengindikasikan variasi level kalimat yang kuat; FAQ block berkontribusi pada kompresi CV paragraph. Tidak memicu revisi (CV > 0.30, AI score << 0.30).

**Catatan pembacaan manual flag CV:** Re-read artikel dilakukan sesuai protokol borderline. Variasi paragraph body terlihat jelas: "Tidak selalu cloud yang menang." (1 kalimat), "Bagian ini jarang ditulis kompetitor, padahal justru di sinilah kejujuran membangun kepercayaan." diikuti blok 3–4 kalimat, tabel trade-off, dan bullet list 2-tier. FAQ section memiliki paragraph dengan panjang seragam (karakteristik format Q&A, bukan AI tell). Pola paragraph body tidak menunjukkan keseragaman yang mencurigakan. Flag ini tidak mengubah verdict.

---

## Plagiarism (web lookup 8 kandidat passage)

8 candidate passages diperiksa. Tidak ada exact match maupun partial near-match (>70% word-order overlap) di halaman publik non-Soltius.

- Passage 1: "Studi Auburn University RFID Lab dan GS1 US (2018) menemukan akurasi inventori naik dari rata-rata 63% ke 95% setelah implementasi RFID, dengan konteks industri ritel." — **clean**. WebSearch mengembalikan sumber asli berbahasa Inggris (prnewswire.com/Auburn GS1 US) yang memang dikutip artikel secara eksplisit; frasa Indonesia adalah terjemahan/atribusi penulis sendiri, bukan salinan dari halaman publik lain. Dikategorikan sebagai kutipan sah (intentional citation dari sumber yang tercantum di frontmatter).
- Passage 2: "## Peran Barcode, RFID, dan Perangkat Mobile dalam Eksekusi Gudang / Integrasi sebersih apa pun tidak berarti jika data salah ditangkap di sumbernya." — **clean**. Hasil mengembalikan artikel generik RFID/barcode Indonesia (tudi.id, scaleocean.com, prieds.com); tidak ada padanan frasa.
- Passage 3: "WMS Cloud vs On-Premise: Cara Memilih dan Mengintegrasikan dengan ERP / Tim IT Anda sudah sepakat: gudang butuh sistem yang lebih baik daripada spreadsheet dan kartu stok." — **clean**. Hasil mengembalikan artikel perbandingan cloud vs on-premise ERP generik (hashmicro.com, ukirama.com, jmc.co.id); tidak ada padanan frasa.
- Passage 4: "Sebaliknya, embedded EWM berbagi nasib dengan ERP-nya, jika sistem inti down, gudang ikut berhenti." — **clean**. WebSearch mengembalikan soltius.co.id (domain sendiri, dikecualikan) dan artikel downtime generik; tidak ada padanan frasa di situs non-Soltius.
- Passage 5: "## Cloud, On-Premise, atau Embedded di ERP — Apa Pilihan Deployment WMS?" — **clean**. Hasil sepenuhnya berbahasa Inggris (smartb.co, ecisolutions.com, rfgen.com); tidak ada padanan frasa Indonesia.
- Passage 6: "Klaim umum bahwa 'cloud WMS tetap jalan saat internet putus' perlu diperiksa." — **clean**. WebSearch mengembalikan artikel WMS Telkom (konteks Wifi Management System yang berbeda sama sekali, bukan Warehouse Management System); tidak ada padanan frasa.
- Passage 7: "Sebagian besar solusi cloud WMS modern punya kemampuan offline terbatas, operasi kritis tertentu bisa dilanjutkan dan data disinkronkan otomatis saat koneksi pulih." — **clean**. Hasil mengembalikan artikel cloud WMS berbahasa Inggris (autostoresystem.com, logimaxwms.com, cadretech.com); frasa Indonesia adalah original.
- Passage 8: "## Kapan On-Premise Masih Pilihan yang Lebih Tepat / Tidak selalu cloud yang menang." — **clean**. Hasil mengembalikan artikel generik cloud vs on-premise Indonesia (telkom.co.id, linknet.id, jetorbit.com); tidak ada padanan frasa.

**Aggregate score: 0.00**

---

## Loop status

Ini adalah revision loop **0** (first pass). Verdict pass — tidak ada loop yang diperlukan.

---

## Rekomendasi untuk kurator

**Curator-ready.** Editor `recommendation: approve` + Validator `verdict: pass`. Artikel dapat di-commit ke `articles_history/` dan dikonversi ke `.docx`.
