---
brief_id: "perusahaan-cng-indonesia-05"
validator_run_date: "2026-06-09"
verdict: "pass"
ai_score: 0.0
plagiarism_score: 0.0
revision_loop: 0
---

# Quality Validator Report — 7 Kesalahan Umum Saat Memilih Perusahaan CNG (dan Cara Menghindarinya)

## Verdict: **pass**

Artikel lolos kedua gate secara bersih. Skor AI heuristik 0.00/1.00 — nol flag, burstiness paragraf 0.488 (jauh di atas ambang batas reject 0.30), dan distribusi kalimat bervariasi kuat. Semua 8 kandidat plagiarisme dicek via WebSearch; tidak ditemukan satu pun kecocokan kata demi kata maupun near-match (>70% word-order overlap) pada halaman publik non-Gagas. Terminologi regulatif (IUN, Hak Khusus BPH Migas, Permen ESDM 4/2018, ISO 45001:2018) adalah domain-standard dalam konteks gas bumi Indonesia dan tidak dihitung sebagai plagiarisme. Artikel ini siap untuk kurasi.

## AI Detector (heuristic v2.0)

- Score: **0.00** / 1.0 (threshold: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.488** (target ≥0.45 — tercapai)
- Sentence burstiness: **0.52** (kuat)
- Top-30 vocab share: **0.267** (sehat — konsentrasi rendah)
- Flags: **0**

Tidak ada pattern AI yang terpicu. Metrik burstiness berada di level yang mengindikasikan variasi ritme autentik: campuran paragraf 1-kalimat dan 4–5-kalimat terdeteksi bersih. Tidak ada "Dengan demikian", "Penting untuk dicatat", "Di era digital", atau "Selain itu" pembuka berulang. Concentrasi kosakata rendah (0.267) konsisten dengan penulisan human dengan register teknis-B2B yang beragam. Verifikasi manual terhadap bagian bertanda tabel (7 kesalahan), daftar bernomor (kesalahan sisi pembeli), dan FAQ mengonfirmasi tidak ada blok simetris AI-style — setiap elemen memiliki panjang dan struktur kalimat yang bervariasi.

## Plagiarism (web lookup of distinctive passages)

8 kandidat passages dicek via WebSearch (quoted exact-phrase + combinatorial search). Semua bersih.

- Passage 1: "Minta salinan Izin Usaha Niaga (IUN) Minyak dan Gas Bumi dari Kementerian ESDM, dan untuk penyedia jaringan distribusi pipa, tanyakan juga Hak Khusus BPH Migas." — **clean**. Hasil pencarian mengembalikan halaman regulatif ESDM/BPH Migas resmi; tidak ada halaman non-Gagas yang memuat kalimat ini secara utuh. Framing "satu permintaan sederhana" dan urutan instruksi spesifik ke pembeli adalah orisinal artikel ini.

- Passage 2: "7 Kesalahan Umum Saat Memilih Perusahaan CNG / Salah memilih penyedia CNG jarang terasa di hari penandatanganan kontrak." — **clean**. Hasil pencarian mengembalikan artikel "7 kesalahan memilih IT outsourcing / jasa logistik / kontraktor bangunan" (template generik berbeda topik); tidak ada artikel CNG dengan kalimat ini. Lead sentence dinyatakan unik.

- Passage 3: "Minta bukti ISO 45001:2018 dan kepatuhan inspeksi berkala; tanyakan tim K3-nya." — **clean**. Hasil pencarian mengembalikan halaman sertifikasi ISO 45001 generik (Sucofindo, Mutu Certification, dll.); tidak ada yang memuat kalimat imperatif spesifik ini dalam konteks pemilihan penyedia CNG.

- Passage 4: "Sertifikat ISO 45001:2018 (Sistem Manajemen K3); minta salinan yang masih berlaku." — **clean**. Halaman sertifikasi ISO 45001 yang ditemukan membahas proses sertifikasi dari sisi provider, bukan dari sisi buyer checklist seperti artikel ini. Tidak ada kecocokan.

- Passage 5: "Mengabaikan dukungan teknis purnajual | Gangguan di luar jam kerja tak tertangani; biaya perbaikan dibebankan tanpa dasar yang jelas." — **clean**. Hasil pencarian mengembalikan artikel purnajual umum (elektronik, konstruksi, retail); tidak ada yang memuat kombinasi spesifik "gangguan di luar jam kerja" + "dibebankan tanpa dasar" dalam konteks CNG.

- Passage 6: "Tidak memverifikasi legalitas izin niaga | Pasokan bisa terhenti sewaktu-waktu bila izin bermasalah, dan perlindungan hukum pembeli lemah." — **clean**. Frasa "pasokan bisa terhenti sewaktu-waktu" + "perlindungan hukum pembeli lemah" dalam satu kalimat CNG tidak ditemukan di manapun. Hasil pencarian mengembalikan artikel izin usaha generik dan hukum properti.

- Passage 7: "4/2018, IUN dapat berlaku hingga 20 tahun dan diajukan melalui portal perizinan.esdm.go.id (Kementerian ESDM, 2018)." — **clean**. Tidak ada halaman publik yang memuat frasa "IUN dapat berlaku hingga 20 tahun" bersama "perizinan.esdm.go.id". Klaim ini tersumber dari dossier (Permen 4/2018) dan sudah dihedge dengan "dapat" di artikel; tidak ada copying dari sumber lain.

- Passage 8: "Verifikasi legalitas dimulai dengan satu permintaan sederhana: salinan Izin Usaha Niaga (IUN) Minyak dan Gas Bumi yang diterbitkan Kementerian ESDM." — **clean**. Hasil pencarian mengembalikan halaman ESDM/BKPM resmi tentang prosedur IUN; tidak ada artikel vendor/blog yang memuat kalimat pembuka ini secara verbatim.

**Aggregate plagiarism score: 0.00** (threshold: revise ≥0.10, reject ≥0.25)

Catatan metodologi: terminologi standar industri yang muncul di banyak sumber (IUN, Hak Khusus BPH Migas, ISO 45001:2018, Permen ESDM) dikecualikan dari hitungan plagiarisme sesuai protokol validator — istilah-istilah ini inherently high-overlap dan merupakan terminologi regulatif baku, bukan copying.

## Loop status

Ini adalah revision loop 0 (first pass). Verdict: **pass** — tidak ada loop diperlukan.

## Recommendation

**Curator-ready.** Editor approve (9/10) + Validator pass. Artikel dapat di-commit ke history dan di-build ke .docx.
