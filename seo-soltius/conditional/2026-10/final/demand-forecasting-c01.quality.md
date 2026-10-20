---
brief_id: "demand-forecasting-c01"
validator_run_date: "2026-10-08"
batch: "conditional-2026-10"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.02
plagiarism_verification: "degraded — manual candidate review only (quoted WebSearch unavailable this turn: shared web-search budget exhausted across parallel validators)"
revision_loop: 0
---

# Quality Validator Report — Demand Forecasting: Metode dan Pentingnya bagi Perencanaan Bisnis

## Verdict: **pass**

Artikel lolos gate kualitas batch conditional-2026-10. AI-detector heuristik bersih (skor 0,04; jauh di bawah ambang revise 0,30) dan guardrail burstiness paragraf terpenuhi (CV 0,321 > gate 0,30, bukan di bawahnya — tidak ada pemecahan paragraf yang diperlukan). Seluruh cek struktural batch (band kata 1000–1200, FAQ 3–5, internal link 2, nol placeholder gambar by design, definisi muncul sekali, framing Soltius implementator-bukan-pembuat, angka bersumber/ditandai ilustrasi) terverifikasi lolos tanpa perubahan. **Satu catatan transparansi penting**: langkah plagiarisme via quoted WebSearch TIDAK dapat dijalankan pada turn ini karena budget web-search bersama (200 panggilan/turn, dibagi semua validator paralel batch ini) sudah habis sebelum giliran artikel ini. Verifikasi plagiarisme karena itu bersifat manual/heuristik, bukan web-confirmed — lihat bagian Plagiarism. Hasil manual: risiko rendah, tidak ada yang memblokir rilis. Rekomendasi belt-and-suspenders: jalankan ulang 8 quoted search di turn lanjutan sebelum publikasi; ini bukan blocker.

## AI Detector (heuristic v2.0)
- Score: **0,04** / 1.0 (ambang: revise ≥0,30, reject ≥0,50) → **pass**
- Paragraph burstiness (CV): **0,321** (guardrail <0,30 = revise; 0,321 di ATAS gate → lolos; ideal ≥0,45)
- Sentence burstiness (CV): **0,782** (sangat sehat — ritme kalimat sangat bervariasi)
- Top-30 vocab share: **0,328** (di bawah ambang 0,35 → tidak memicu flag)
- Paragraph count: 25 · Sentence count: 72
- Flags (1):
  - **[low] paragraph-low-variance**: "Paragraph word-count CV=0.321 (target >=0.45)". Severity low; gate 0,30 terlampaui dengan margin ~0,02. Wajar untuk explainer B2B padat ber-tabel pada band 1000–1200 (menaikkan ke 0,45 memaksa padding yang melanggar aturan on-point addendum §1). Konsisten dengan preseden batch (kaizen-c01, buku-besar-c01 di-approve apa adanya). **Bukan pemicu revise.**

Re-read manual atas bagian ber-flag: lead naratif (pabrik consumer goods) dan penutup konsesif ("AI tidak menyulap data buruk") jelas bersuara manusia; em-dash = 0; nol pembuka klise; nol "Selain itu"/"Dengan demikian"/"Penting untuk dicatat". Tidak ada tell statistik yang mengkhawatirkan.

## Plagiarism (web lookup of distinctive passages) — DEGRADED MODE

**Status**: quoted WebSearch TIDAK berjalan turn ini. Ketiga panggilan awal mengembalikan "web search budget used up (limit 200/turn, dibagi semua agent)". Tidak ada workaround yang diizinkan (dilarang curl/wget/proxy/archive). Penilaian berikut = review manual 8 passage kandidat terhadap aturan scoring agent (abaikan definisi baku istilah terkenal + sitasi yang memang dikutip ke soltius/Gartner/SAP-official).

8 passage kandidat (dari `quality-check.ps1`) dan klasifikasi manual:

| # | Passage (ringkas) | Klasifikasi | Risiko |
|---|---|---|---|
| 1 | MAPE bands "<10% tinggi, 10–20% baik, 20–50% wajar, >50% rendah" | Rule of thumb baku (Lewis 1982) — definisi istilah terkenal, inheren high-overlap; di-frame "bukan standar mutlak" | IGNORE (abaikan per aturan) |
| 2 | Gartner "70% organisasi besar… AI pada 2030" | Sitasi beratribusi ke URL Gartner PR (16 Sep 2025) — kutipan sumber, bukan plagiat | IGNORE (sumber dikutip) |
| 3 | MAPE bands (varian kalimat kedua) | Sama dengan #1 | IGNORE |
| 4 | "SAP IBP… solusi perencanaan rantai pasok berbasis cloud… S&OP" | Mengutip URL cousin soltius.co.id (self-reference) | IGNORE (soltius.co.id) |
| 5 | "Demand sensing merevisi ramalan jangka sangat pendek… order masuk dan data POS" | Pernyataan faktual standar; frasa Indonesia milik penulis | Rendah |
| 6 | "MAD dan MSE adalah dua ukuran error alternatif" | Definisi baku ukuran statistik terkenal | IGNORE |
| 7 | Soft CTA "…kunjungi soltius.co.id" | Self-reference Soltius | IGNORE (soltius.co.id) |
| 8 | "MAPE… rata-rata selisih absolut ramalan terhadap aktual dalam persen" | Definisi baku istilah terkenal | IGNORE (definisi standar) |

- 6 dari 8 kandidat jatuh ke kategori ABAIKAN eksplisit (definisi baku istilah terkenal; atau sitasi yang memang dikutip ke Gartner/soltius.co.id). 2 sisanya (demand sensing, definisi MAPE) adalah pernyataan faktual standar dalam frasa Indonesia penulis sendiri.
- Frasa bersuara orisinal (lead pabrik consumer goods; "overstock yang mengubur modal"; "stockout yang mematikan penjualan"; "akurasi tinggi pun tak bernilai bila angkanya tidak dipakai") TIDAK terekstrak sebagai kandidat (rendah angka/entitas) tetapi jelas net-new — tidak ada indikasi lifting.
- **Estimasi skor plagiarisme manual: ~0,02** (efektif bersih). Tidak ada passage yang tampak sebagai salinan verbatim prosa distinctive dari sumber lain.
- **Caveat mengikat**: estimasi ini TIDAK diverifikasi web turn ini. Tidak ada bukti positif pelanggaran, dan semua kandidat distinctive ada di kategori abaikan — karena itu ketidakpastian bersifat infrastruktural (tak bisa search), bukan sinyal mutu negatif. Verdict pass dipertahankan dengan catatan ini terdokumentasi.

## Re-verification checklist (style_addendum §7 batch overrides)
- [x] **Band kata 1000–1200**: cleaned-prose `tools/count_words.py` = **1197** (dalam band; 3 kata dari plafon — sengaja tidak dipangkas, band mengizinkan sampai 1200). Hitung mentah script = 1230 (tokenizer tabel/URL berbeda; addendum §1 mewajibkan pakai cleaned → abaikan 1230). ✓
- [x] **FAQ 3–5**: 4 Q&A. ✓
- [x] **Internal link = 2**: hub `/id/blog/apa-itu-supply-chain-management` (H2-1) + cousin `/blog/how-sap-ibp-supports-the-sales-operations-planning-s-op-process` (H2-4). Tepat 2 URL unik; tanpa link ketiga. ✓
- [x] **Nol {IMAGE_NN} by design**: grep `{IMAGE` = 0. N/A sebagai isu (override batch). ✓
- [x] **Definisi muncul SEKALI**: hanya di snippet "Ringkasnya:"; H2 tidak mengulang definisi (H2-1 → pentingnya, H2-2 → taksonomi). ✓
- [x] **Framing Soltius**: "mengimplementasikan dan mendampingi… bukan membuat perangkat lunaknya"; 2 self-mention (positioning line Kesimpulan + soft CTA); didirikan 1998, SAP Platinum via United VARs — akurat. ✓
- [x] **Angka tidak dikarang**: contoh moving average 115 unit ditandai "contoh, bukan data nyata"; Gartner 70%/2030 → sitasi; MAPE bands → rule of thumb; demand sensing 4–8 minggu → SAP Learning. ✓
- [N/A] **IFRS di-hedge**: artikel tidak memuat IFRS (grep = 0). Item checklist generik batch; tidak berlaku di artikel ini. ✓
- [N/A] **Tabel HTML valid (bila ada)**: tidak ada tag HTML `<table>/<tr>/<td>` (grep = 0); artikel memakai 1 tabel markdown valid (header + separator + 3 baris data). "Bila ada" → N/A. ✓

## Aggregate
AI verdict = **pass** (0,04). Plagiarism verdict (manual, degraded) = **pass/low-risk** (~0,02, tidak web-confirmed). Overall = worst-of-two = **pass**, dengan caveat verifikasi plagiarisme web tertunda.

## Loop status
Revision loop **0** (first pass). Tidak ada revisi yang dipicu — tidak ada guardrail yang gagal dan tidak ada passage yang perlu ditulis ulang.

## Follow-up (non-blocker)
Untuk menutup caveat degraded-mode, jalankan 8 quoted WebSearch pada passage kandidat di turn lanjutan (ketika budget web tersedia) sebagai konfirmasi akhir sebelum publikasi. Kandidat #5 (demand sensing) dan #8 (definisi MAPE) adalah prioritas; sisanya ada di kategori abaikan (definisi baku / sitasi Gartner / self-reference soltius.co.id) dan tidak perlu diubah apa pun hasilnya.

## Handoff
Verdict **pass** → curator boleh commit (editor `approve` + validator `pass`). **CATATAN**: sesuai instruksi tugas, validator ini TIDAK menjalankan curator dan TIDAK melakukan commit. Keputusan commit diserahkan ke orchestrator/user, dengan caveat plagiarisme web di atas terdokumentasi.
