# Daftar Keyword Bulanan — IIGF Institute — 2026-09

**Sumber brief:** Google Sheet "Brief artikel claude IIGF" (tab `Draft Artikel`, baris ber-`Bulan` = September 2026) —
https://docs.google.com/spreadsheets/d/1KAgSySU3oRILz8PVjUQSS9uBebcrYHq2Y116VhotscE/edit

Total: **12 artikel** (3 keyword × 4 artikel).

> ⚠️ **Ketiga keyword identik dengan Agustus 2026.** Pekerjaan utama bulan ini adalah **dedup**: 12 artikel Agustus sudah ada di `articles_history/index.json`. Setiap konsep September wajib punya `angle_hash` berbeda dan tumpang tindih subtopik rendah terhadap keduabelasnya.

```yaml
month: "2026-09"
seo_report: "none"

keywords:
  - keyword: "Capacity Building pembiayaan kreatif"
    landing_page: "https://institute.iigf.co.id/capacity-building"
    articles: 4
    length: "1200-1600"
    priority: "grow"
    topic_focus: "Lanjutan klaster Agustus. Celah yang sengaja disisakan: desain kurikulum capacity building internal instansi; kaderisasi lintas pergantian kepala daerah; anatomi dokumen pra-studi kelayakan; KPBU Syariah & sukuk daerah sebagai jalur tersendiri; anatomi biaya dan durasi penyiapan proyek; manajemen kontrak pasca-financial close; peran UNIID/JPII dalam pendampingan daerah."
    client_anchor: "PPP capacity building"
    notes: "Audiens ASN/PJPK dan tim penyiapan proyek. Edukasi dulu, CTA di penutup. Hindari register brosur pelatihan. Satu artikel boleh memakai anchor Jejaring UNIID/JPII bila memang membahas pendampingan kampus — deviasi semacam itu harus ditulis eksplisit di brief."

  - keyword: "Studi kasus proyek infrastruktur di Indonesia"
    landing_page: "https://institute.iigf.co.id/e-library/lainnya/77/studi-kasus-kpbu-untuk-penguatan-infrastruktur-digital-dan-informasi"
    articles: 4
    length: "1200-1600"
    priority: "grow"
    topic_focus: "Lanjutan klaster Agustus. Celah yang disisakan: value for money (kualitatif vs kuantitatif, public sector comparator); peran penjaminan pemerintah dibedah dari satu kasus tunggal; timeline gagasan-ke-operasi; sektor persampahan/PSEL secara khusus; KPBU sektor sosial (RS pendidikan & infrastruktur perguruan tinggi); risiko permintaan jalan tol; unsolicited vs solicited; badan penyiapan & fasilitas penyiapan proyek (PDF); risiko pembebasan lahan; SPAM regional lintas kabupaten."
    client_anchor: "Riset & jurnal JIPM"
    notes: "WAJIB merotasi contoh proyek. Agustus sudah memakai: SPAM Umbulan, Tol Krian-Legundi-Bunder-Manyar, PSEL Legok Nangka, SPAM Semarang Barat, PJU Samarinda, RS Pendidikan Unpad/Udayana, Palapa Ring. Studi kasus wajib bersumber primer. Tanpa nama individu. Nada tidak menghakimi. HINDARI topik sengketa hukum/Tol MBZ — butuh penilaian kehati-hatian hukum yang belum dilakukan."

  - keyword: "Sertifikasi KPBU"
    landing_page: "https://institute.iigf.co.id/"
    articles: 4
    length: "1200-1600"
    priority: "grow"
    topic_focus: "Lanjutan klaster Agustus. Celah yang disisakan: pemetaan jalur/level berdasarkan peran pekerjaan (PJPK/ASN vs konsultan vs badan usaha vs akademisi); penganggaran instansi untuk sertifikasi (siklus RKA, pengiriman bertahap); perbandingan biaya total kepemilikan kedua jalur; mekanisme perpanjangan & masa berlaku kredensial; strategi persiapan ujian dan pola soal; retensi pengetahuan setelah peserta kembali ke unitnya; penilaian kesiapan simpul KPBU daerah."
    client_anchor: "Sertifikasi CP3P"
    notes: "'Sertifikasi KPBU' = frasa pencarian generik, bukan nama kredensial. Cakupan CP3P wajib bersumber APMG. APMG pemilik & pemberi kredensial; IIGF Institute = ATO penyelenggara pelatihan. Biaya wajib indikatif + tahun. Pembedahan isi tiap bab PPP Guide secara rinci masih tersedia sebagai angle."
```

---

### Peta internal link (sama seperti Agustus — tiap artikel: hub sendiri + 2 cousin)

| Artikel dari keyword | Hub sendiri (di lead) | Cousin 1 | Cousin 2 |
|---|---|---|---|
| Capacity Building pembiayaan kreatif | `/capacity-building` | Studi kasus proyek infrastruktur | Sertifikasi KPBU |
| Studi kasus proyek infrastruktur di Indonesia | `/e-library/lainnya/77/...` | Capacity Building pembiayaan kreatif | Sertifikasi KPBU |
| Sertifikasi KPBU | `https://institute.iigf.co.id/` | Capacity Building pembiayaan kreatif | Studi kasus proyek infrastruktur |

Hanya `institute.iigf.co.id` (plus `jipm.iigf.co.id` / `uniid.or.id` bila relevan). Kolom `Gagas_anchor` di sheet adalah sisa template klien lain — diabaikan. **Tanpa tautan ke `gagas.co.id` maupun `ptpii.co.id`.**

---

### Koreksi knowledge base yang berlaku bulan ini

- **Rule 5 — Kantor Bersama KPBU**: kolaborator, **bukan anggota**. Daftar resmi = 7 K/L tanpa PT PII. ⏳ Masih menunggu konfirmasi klien; sampai itu, hanya rumusan "berkolaborasi dalam ekosistem" yang boleh.
- **Rule 6 — pengembang CP3P**: **AfDB, ADB, EBRD, IDB, IsDB, World Bank Group**, *part-funded* **PPIAF**. Tanpa MIF (istilah lawas 2016; menjadi IDB Lab sejak 2018). **AfDB wajib ada** — menghapusnya menghasilkan daftar yang tidak cocok dengan sumber APMG mana pun. *(Catatan: batch Agustus memakai daftar tanpa AfDB — keputusan orkestrator yang kemudian dikoreksi KB. Tiga artikel Agustus terdampak; lihat laporan akhir.)*

### Anggaran WebSearch (pelajaran dari Agustus)

Batch 12 artikel menghabiskan kuota 200 pencarian sebelum tahap editor, sehingga cek plagiarisme berjalan heuristik saja. Bulan ini: strategist ≤12 pencarian/keyword, peneliti ≤6 pencarian/artikel (utamakan WebFetch ke domain primer + dosir Agustus yang sudah terverifikasi), editor ≤3 kueri plagiarisme/artikel.
