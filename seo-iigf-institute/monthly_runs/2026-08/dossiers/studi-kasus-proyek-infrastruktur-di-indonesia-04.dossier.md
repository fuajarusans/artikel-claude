---
brief_id: "studi-kasus-proyek-infrastruktur-di-indonesia-04"
researcher_run_date: "2026-08-12"
sources_cited: 26
flags: 10
---

# Research Dossier: Studi Kasus KPBU Daerah — Apa yang Berbeda Ketika PJPK-nya Kepala Daerah

## TL;DR for the writer

- Tiga kasus inti terverifikasi ke sumber primer dengan angka spesifik + tahun: **PJU Kota Samarinda** (cakupan 36%/30%, investasi ±Rp1 triliun, jalur *unsolicited*), **SPAM Semarang Barat** (PJPK = Direktur Utama **PDAM Tirta Moedal** Kota Semarang — ejaan "Tina Moedal" di satu sumber sekunder terkonfirmasi salah ketik), dan **PSEL Legok Nangka** (PJPK Gubernur Jawa Barat; nilai melonjak dari indikasi ±Rp4,20 triliun/2024 menjadi ±Rp7,2 triliun saat *groundbreaking* 29 Juli 2026).
- **Temuan kritis — koreksi terhadap `company_profile.md`**: saya memverifikasi langsung halaman resmi Kemenkeu tentang Kantor Bersama KPBU. Anggotanya **tujuh kementerian/lembaga sesuai brief** (Kemenko Perekonomian, Kemenko Marves, Kemendagri, Kemenkeu, Bappenas selaku sekretariat, Kementerian Investasi/BKPM, LKPP) — **PT PII/IIGF Institute TIDAK termasuk**. Ini bertentangan dengan baris "Membership: Kantor Bersama KPBU Republik Indonesia" di `company_profile.md`. Untuk artikel ini, ikuti pagar brief: jangan klaim keanggotaan; pakai "berkolaborasi dalam ekosistem". Lihat Flags.
- `institute.iigf.co.id` **dapat diakses penuh** pada run ini (homepage, /riset, /capacity-building, dan bab e-library PJU Samarinda semuanya berhasil di-*fetch*) — berbeda dari asumsi standar "situs memblokir akses". Confidence pada klaim first-party karenanya lebih tinggi dari biasanya bulan ini.
- Tipping fee PSEL Legok Nangka Rp386.000/ton terverifikasi kuat (6 sumber media 2019 independen) dengan skema subsidi **30% provinsi / 70% pemda** (kesepakatan 9 Oktober 2019) — **berbeda dari klaim "49%" di cache riset**; rekomendasikan memakai angka 30/70 yang bersumber kuat dan bertahun jelas.
- Web search budget sesi ini habis di pertengahan riset; beberapa klaim sekunder (SPAM Umbulan Rp4,51 T; rincian pendanaan tiga pihak SPAM Semarang Barat) tidak dapat diverifikasi ulang dan tetap ditandai sesuai instruksi brief — jangan dinaikkan jadi fakta pasti.

## Core facts (verified)

### Kerangka & regulasi dasar

> **Claim**: Dasar hukum KPBU nasional yang berlaku juga untuk proyek tingkat daerah
> **Number/specific**: Peraturan Presiden Nomor 38 Tahun 2015 tentang Kerja Sama Pemerintah dengan Badan Usaha dalam Penyediaan Infrastruktur — masih menjadi payung regulasi utama per 2026
> **Source**: Dikonfirmasi silang lintas seluruh halaman kpbu.kemenkeu.go.id yang diakses run ini (definisi dukungan kelayakan, Kantor Bersama KPBU, kisah sukses skema KPBU); tidak di-*fetch* langsung dari JDIH pada run ini
> **Confidence**: medium (fakta yang sangat mapan di ranah KPBU Indonesia, tetapi tidak diverifikasi ulang langsung ke JDIH Bappenas/Setkab pada sesi ini — sarankan penulis melakukan satu pengecekan cepat bila presisi nomor Perpres krusial)

> **Claim**: Definisi resmi dukungan kelayakan (*viability gap fund*/VGF)
> **Number/specific**: "Dukungan Pemerintah dalam bentuk kontribusi fiskal yang bersifat finansial berupa kontribusi atas sebagian biaya konstruksi" untuk proyek yang layak ekonomi namun belum layak finansial. Syarat meliputi: nilai investasi minimal **Rp100 miliar**, prinsip *user-pay*, badan usaha ditetapkan lewat lelang terbuka-kompetitif, ketentuan pengembalian aset, dan prastudi kelayakan komprehensif. PJPK mengajukan ke Menteri Keuangan untuk dievaluasi Komite VGF; pencairan bertahap saat konstruksi atau saat mulai operasi komersial.
> **Source**: kpbu.kemenkeu.go.id, https://kpbu.kemenkeu.go.id/read/1098-1261/pjpk/dukungan-pemerintah/dukungan-kelayakan, diakses 2026-08-12
> **Confidence**: high (sumber primer resmi Kemenkeu)

> **Claim**: Kantor Bersama KPBU — fungsi dan keanggotaan resmi
> **Number/specific**: Forum koordinasi antar-Kementerian/Lembaga untuk sinergi pelaksanaan KPBU. **Tujuh** anggota resmi: Kementerian Koordinator Bidang Perekonomian, Kementerian Koordinator Bidang Kemaritiman dan Investasi, Kementerian Dalam Negeri, Kementerian Keuangan, Kementerian PPN/Bappenas (selaku sekretariat), Kementerian Investasi/BKPM, dan LKPP. Dibentuk melalui nota kesepahaman **18 September 2020** (indikatif — tanggal dari ringkasan pers, bukan dikutip literal di halaman Kemenkeu yang di-*fetch*).
> **Source**: kpbu.kemenkeu.go.id, https://kpbu.kemenkeu.go.id/read/1151-1405/umum/orang-juga-bertanya/apa-itu-kantor-bersama-kpbu, diakses 2026-08-12
> **Confidence**: high untuk daftar 7 anggota (halaman resmi eksplisit); medium untuk tanggal 18 September 2020 (dari ringkasan, bukan kutipan langsung halaman)
> **Flag**: `company_profile.md` mencantumkan IIGF Institute "Membership: Kantor Bersama KPBU Republik Indonesia" — **ini tidak match dengan daftar resmi di atas**. Ikuti pagar wajib brief ini: jangan klaim keanggotaan.
> **✅ RESOLVED 2026-08-12**: `company_profile.md` sudah diperbaiki — baris *Membership* diganti menjadi *Ecosystem role* dan dikunci lewat **Rule 5**. Flag ini disimpan sebagai catatan historis; tidak ada tindakan tersisa untuk run mendatang.

### PJU Kota Samarinda

> **Claim**: Cakupan penerangan jalan umum Kota Samarinda sebelum proyek KPBU
> **Number/specific**: hanya **36% dari kebutuhan di jalan utama** dan **30% di kawasan permukiman**; kebutuhan investasi untuk memenuhi seluruh kebutuhan PJU disebut **hingga Rp1 triliun** — jauh melampaui kapasitas APBD kota
> **Source**: bab e-library IIGF Institute, "Peluang dan Tantangan Pengembangan Proyek Penerangan Jalan Umum (PJU) melalui Skema KPBU: Studi Kasus Proyek PJU Kota Samarinda", https://institute.iigf.co.id/e-library/chapter/69/..., **terbit 31 Agustus 2025**, DOI 10.35166/iigf.9786027222786.12; diverifikasi ulang via WebFetch 2026-08-12 (halaman dapat diakses)
> **Confidence**: high (first-party, tervalidasi DOI, angka konsisten dengan brief)

> **Claim**: Skema dan jadwal pengajuan proyek PJU Kota Samarinda
> **Number/specific**: proyek ditempuh lewat jalur **prakarsa badan usaha (unsolicited)**; dokumen prakarsa diserahkan calon pemrakarsa kepada Wali Kota Samarinda selaku PJPK pada **Kamis, 5 Januari 2023** (indikatif)
> **Source**: diskominfo.samarindakota.go.id & jdih.samarindakota.go.id (portal resmi Pemkot Samarinda), dikonfirmasi silang dengan judul berita kpbu.kemenkeu.go.id/berita/read/1403/konsultasi-publik-proyek-kpbu-pju-tersebar-kota-samarinda; diakses via ringkasan pencarian 2026-08-12 (fetch langsung ke diskominfo mengembalikan HTTP 500 pada run ini)
> **Confidence**: medium-high (dua portal pemerintah independen menyebut tanggal & skema yang sama, tetapi fetch langsung gagal sehingga tidak dapat mengutip teks halaman kata-per-kata)
> **Flag**: nama konsorsium pemrakarsa (dua badan usaha) muncul di sumber. **Rekomendasi kuat: jangan sebutkan nama badan usaha di artikel** — pakai "konsorsium pemrakarsa"/"badan usaha pemrakarsa" saja, sesuai instruksi brief.

> **Claim**: Forum riset infrastruktur yang membahas PJU Samarinda difasilitasi IIGF Institute bersama perguruan tinggi setempat
> **Number/specific**: **Indonesia Infrastructure Roundtable ke-24**, diselenggarakan **9 Maret 2023** di Fakultas Teknik Universitas Mulawarman, Samarinda, membahas "Peluang dan Tantangan Pengembangan Proyek PJU Melalui Skema KPBU". Dihadiri (institusi, tanpa nama individu): IIGF Institute (penyelenggara), Universitas Mulawarman (tuan rumah), Direktorat PPP Bappenas, DJKN Kemenkeu, PT PII, dan perangkat daerah Kota Samarinda.
> **Source**: kpbu.kemenkeu.go.id, https://kpbu.kemenkeu.go.id/berita/read/1530/indonesia-infrastructure-roundtable-ke-24-yang-diinisiasi-oleh-iigf-institute-diadakan-di-fakultas-teknik-universitas-mulawarman-di-samarinda, diakses 2026-08-12
> **Confidence**: high (sumber Kemenkeu, tahun & tanggal eksplisit)

> **Claim**: Status terkini proyek PJU Kota Samarinda pada 2026
> **Number/specific**: **tidak terverifikasi independen pada run ini melampaui Agustus 2025**. Titik data terkonfirmasi terakhir: pengajuan dokumen 5 Januari 2023 dan publikasi studi kasus IIGF Institute 31 Agustus 2025. Tidak ada indikasi proyek sudah beroperasi.
> **Source**: n/a — upaya *fetch* ke diskominfo.samarindakota.go.id untuk update status gagal (HTTP 500); tidak ada halaman proyek terdaftar di kpbu.kemenkeu.go.id/proyek/ untuk PJU Samarinda yang ditemukan pada run ini (berbeda dari SPAM Semarang Barat dan SPAM Umbulan yang punya halaman "proyek/detail")
> **Confidence**: low untuk klaim status apa pun di luar milestone yang sudah terkonfirmasi
> **Flag**: **jangan tulis seolah proyek sudah berjalan/beroperasi.** Tulis sebagai "tahap penyiapan/pengusulan, per data yang tersedia hingga 2025" dan sarankan verifikasi status terbaru sebelum publikasi jika presisi tinggi dibutuhkan.

### SPAM Semarang Barat

> **Claim**: PJPK proyek SPAM Semarang Barat (koreksi ejaan)
> **Number/specific**: **Direktur Utama PDAM Tirta Moedal** (Kota Semarang) — bukan "PDAM Tina Moedal". "Tina Moedal" di satu sumber sekunder terkonfirmasi salah ketik.
> **Source**: kpbu.kemenkeu.go.id, https://kpbu.kemenkeu.go.id/proyek/detail/18-proyek-kpbu-spam-semarang-barat, diakses 2026-08-12
> **Confidence**: high (sumber primer resmi, mengutip jabatan bukan nama individu — aman dari blacklist)

> **Claim**: Spesifikasi teknis dan nilai investasi inti (capex KPBU) SPAM Semarang Barat
> **Number/specific**: kapasitas output **1.000 liter/detik**; nilai investasi tercatat di halaman proyek resmi **Rp417,3 miliar** (indikatif, sesuai publikasi kpbu.kemenkeu.go.id); masa konstruksi 2 tahun, masa konsesi **25 tahun**; penjaminan dari PT PII
> **Source**: kpbu.kemenkeu.go.id, https://kpbu.kemenkeu.go.id/proyek/detail/18-proyek-kpbu-spam-semarang-barat, diakses 2026-08-12
> **Confidence**: high

> **Claim**: Tanggal mulai operasi komersial (COD) SPAM Semarang Barat
> **Number/specific**: **22 Mei 2021**
> **Source**: kpbu.kemenkeu.go.id, https://kpbu.kemenkeu.go.id/proyek/detail/18-proyek-kpbu-spam-semarang-barat, diakses 2026-08-12
> **Confidence**: high

> **Claim**: Nilai total program SPAM Semarang Barat (cakupan lebih luas dari capex inti KPBU)
> **Number/specific**: dilaporkan **Rp1,15–1,4 triliun** tergantung sumber dan tahun pemberitaan — Kompas (Maret 2022) menyebut ±Rp1,4 triliun; Kontan menyebut ±Rp1,15 triliun. Rincian pendanaan tiga pihak (swasta ±Rp480 M / Pemkot+PDAM ±Rp400 M / pusat ±Rp500 M ≈ Rp1,38 T) muncul di beberapa hasil pencarian teragregasi **tanpa URL sumber primer tunggal yang jelas** — **belum terverifikasi**, sesuai instruksi brief.
> **Source**: money.kompas.com/read/2022/03/16 (Rp1,4 T); regional.kontan.co.id "Proyek SPAM Semarang senilai Rp1,15 triliun..." — kedua diakses via ringkasan pencarian 2026-08-12
> **Confidence**: medium (dua media kredibel dengan angka berbeda, tahun berbeda, kemungkinan cakupan akuntansi berbeda dari capex inti Rp417,3 M)
> **Flag**: **beda cakupan** antara capex inti KPBU (Rp417,3 M, sumber primer) dan "total program" (Rp1,15–1,4 T, media). Sajikan keduanya dengan label jelas — jangan mencampur sebagai satu angka. Rincian 480/400/500 miliar **jangan ditulis sebagai fakta pasti**.

> **Claim**: Jumlah pelanggan/sambungan terlayani SPAM Semarang Barat
> **Number/specific**: **kontestasi angka** — satu sumber pencarian 2026 menyebut target 70.000 sambungan/350.000 jiwa; cache riset internal menyebut ±65.000 KK sebagai target dan >40.000 sambungan terealisasi hingga 2025 dengan target 60.000. Angka-angka ini tidak konsisten satu sama lain.
> **Source**: berbagai, termasuk simpulkpbu.pu.go.id/berita/proyek-kpbu-spam-semarang-barat-jadi-contoh-sukses...; tidak di-*fetch* langsung pada run ini
> **Confidence**: low — **jangan kutip angka pelanggan tunggal tanpa hedge.** Sarankan penulis memakai kalimat kualitatif ("puluhan ribu sambungan rumah tangga") atau memilih satu sumber primer dan menyebut sumber+tahunnya eksplisit.

### PSEL Legok Nangka

> **Claim**: PJPK dan badan usaha pelaksana PSEL Legok Nangka
> **Number/specific**: PJPK = **Gubernur Jawa Barat** (jabatan, bukan nama); Badan Usaha Pelaksana = **PT Jabar Environmental Solutions (PT JES)**
> **Source**: simpulkpbu.pu.go.id, https://simpulkpbu.pu.go.id/proyek/psel-regional-legok-nangka-4-6, diakses 2026-08-12; dikonfirmasi silang Antara News (antaranews.com/berita/5672393)
> **Confidence**: high

> **Claim**: Nilai investasi & skala PSEL Legok Nangka — **baseline sebelum groundbreaking**
> **Number/specific**: "Indikasi Nilai Investasi **Rp4,20 triliun**" dengan nilai konstruksi Rp3,19 triliun selama 4 tahun; kapasitas **1.836 ton sampah/hari**, listrik **15 MW**, tarif jual listrik 13,35 sen/kWh; skema BOT, masa konsesi 22 tahun; Financial Close dijadwalkan Jun 2024–Sep 2026; enam wilayah layanan: Kota Bandung, Kab. Bandung, Kota Cimahi, Kab. Bandung Barat, Kab. Garut, Kab. Sumedang
> **Source**: Simpul KPBU Kementerian PU, https://simpulkpbu.pu.go.id/proyek/psel-regional-legok-nangka-4-6, diakses **2026-08-12**
> **Confidence**: high (sumber primer pemerintah), **namun terindikasi belum diperbarui pasca-groundbreaking** — lihat Flag
> **Flag**: Halaman Simpul KPBU PU ini **masih menampilkan skala 1.836 ton/hari & 15 MW**, sementara pemberitaan luas Juli–Agustus 2026 melaporkan skala jauh lebih besar (lihat klaim berikutnya). Ini mengonfirmasi catatan brief: **"Halaman pemerintah belum diperbarui pasca-groundbreaking."** Sajikan kedua angka dengan tahun/konteks eksplisit — jangan menganggap salah satu "salah", keduanya benar untuk masa berlakunya masing-masing.

> **Claim**: Nilai investasi & skala PSEL Legok Nangka — **saat groundbreaking**
> **Number/specific**: **Rp7,2 triliun / USD400 juta**; kapasitas **2.131 ton sampah/hari**; listrik **40,79 MW**; *groundbreaking* **Rabu, 29 Juli 2026**; durasi konstruksi 41 bulan; target mulai operasi **2029**; menyerap ±1.565 tenaga kerja masa konstruksi; proyeksi reduksi emisi hingga 311.874 ton CO2
> **Source**: dikonfirmasi silang **9 media independen**: money.kompas.com (2026-07-29 & 2026-07-31), tempo.co, suara.com, hijau.bisnis.com, bloombergtechnoz.com, harianjogja.com, antaranews.com (×2), jpnn.com, swa.co.id — seluruhnya melaporkan angka yang sama pada Juli–Agustus 2026
> **Confidence**: high (konvergensi luar biasa tinggi lintas 9 sumber media independen atas satu peristiwa spesifik bertanggal)
> **Flag**: cache riset menyebut target operasi "2028" — **ini sudah usang**; angka terbaru dari Simpul KPBU PU (Jan 2026–Des 2029) dan pemberitaan Juli 2026 konsisten menyebut **2029**. Pakai 2029.

> **Claim**: Dukungan kelayakan (VGF) PSEL Legok Nangka
> **Number/specific**: **±Rp1,34 triliun** dari Kementerian Keuangan (Government Support: Project Development Facility + VGF Kemenkeu + sebagian biaya konstruksi dari Kementerian PU, per Simpul KPBU PU)
> **Source**: dikonfirmasi silang simpulkpbu.pu.go.id (kategori dukungan pemerintah) dan ringkasan Antara/PT PII (antaranews.com/berita/5672393), diakses 2026-08-12
> **Confidence**: high (dua sumber independen sepakat pada angka yang sama)

> **Claim**: Tipping fee PSEL Legok Nangka dan skema subsidi provinsi
> **Number/specific**: tipping fee **Rp386.000/ton** disepakati **9 Oktober 2019** oleh Gubernur Jawa Barat (saat itu, jabatan tanpa nama) bersama enam kepala daerah (Kota Bandung, Kab. Bandung, Kab. Garut, Kab. Sumedang, Kab. Bandung Barat, Kota Cimahi). Skema subsidi: **provinsi menanggung 30% (Rp115.800/ton)**, **enam pemda menanggung 70% (Rp270.200/ton)**.
> **Source**: dikonfirmasi silang **6 media regional/nasional 2019**: bandung.bisnis.com, regional.kompas.com, jabar.antaranews.com, m.jpnn.com, jabarnews.com, projabar.com — seluruhnya melaporkan angka Rp386.000 dan skema 30/70 yang sama, tertanggal Oktober 2019
> **Confidence**: high untuk angka Rp386.000/ton dan skema 2019 (konvergensi kuat, tertanggal jelas)
> **Flag**: **bertentangan dengan cache riset internal** yang menyebut subsidi "49%"/"Rp189.140/ton". Verifikasi run ini justru menemukan enam sumber independen bertahun 2019 yang konsisten pada **30%/70%**. Rekomendasi: pakai angka 2019 yang bersumber kuat (30%/70%) dengan label eksplisit "kesepakatan 2019"; JANGAN memakai angka "49%" tanpa verifikasi lebih lanjut ke sumber primer bertahun lebih baru.

> **Claim**: PSEL Legok Nangka adalah proyek KPBU sektor persampahan pertama di Indonesia
> **Number/specific**: disebut sebagai KPBU persampahan (*waste-to-energy*) pertama di Indonesia yang mencapai tahap konstruksi
> **Source**: dilaporkan konsisten di berbagai media Juli 2026 (indowork.id dan lainnya, dikonfirmasi via ringkasan pencarian)
> **Confidence**: medium (klaim "pertama" berulang di banyak sumber sekunder, belum dikonfirmasi frasa identik di halaman pemerintah primer pada run ini)

> **Claim**: Peran PT PII pada PSEL Legok Nangka
> **Number/specific**: PT PII memberikan **penjaminan pemerintah** untuk proyek ini (skema KPBU), disebut mulai berjalan **April 2026** menurut satu ringkasan sumber; fungsi penjaminan dijelaskan sebagai peningkatan kelayakan pembiayaan proyek dan kepercayaan lembaga pembiayaan, sejalan dengan prinsip alokasi risiko KPBU
> **Source**: Antara News, https://www.antaranews.com/berita/5672393/pt-pii-proyek-psel-legok-nangka-kolaborasi-pusat-dan-daerah, diakses 2026-08-12
> **Confidence**: medium (satu sumber media, meski kredibel/wire-service; tanggal "April 2026" untuk penjaminan tidak dikonfirmasi silang)

### SPAM Umbulan (konteks tambahan — bukan bagian dari tabel 3 kasus wajib, tetapi berguna sebagai kontras "PJPK gubernur vs PJPK BUMD")

> **Claim**: PJPK dan spesifikasi teknis SPAM Umbulan
> **Number/specific**: PJPK = **Gubernur Jawa Timur**; kapasitas **4.000 liter/detik**; nilai investasi **Rp2,39 triliun** (dicatat sebagai "Total Investment Value" di halaman proyek resmi); dukungan kelayakan (VGF) **Rp818 miliar**; cakupan **5 kabupaten/kota**; skema DBFOMT dengan transmisi 93 km dari Umbulan (Pasuruan) hingga Gresik; konstruksi 2017–2021 (5 tahun); COD **22 Maret 2021**; masa konsesi 25 tahun 9 bulan sejak COD
> **Source**: kpbu.kemenkeu.go.id, https://kpbu.kemenkeu.go.id/proyek/detail/81-sistem-penyediaan-air-minum-umbulan, diakses 2026-08-12
> **Confidence**: high untuk seluruh angka di atas (sumber primer resmi)

> **Claim**: Klaim nilai total SPAM Umbulan Rp4,51 triliun (mencakup rantai pasok/jaringan distribusi)
> **Number/specific**: **tidak dapat diverifikasi ulang pada run ini** — upaya *fetch* ke ekon.go.id gagal (galat sertifikat SSL). Angka Rp2,39 triliun di atas (dari halaman proyek resmi kpbu.kemenkeu.go.id) adalah **satu-satunya angka investasi yang berhasil dikonfirmasi langsung** pada run ini.
> **Source**: n/a (fetch gagal); klaim asal ada di cache riset yang mengutip ekon.go.id, https://www.ekon.go.id/publikasi/detail/2634/direncanakan-43-tahun-lalu-proyek-kpbu-spam-umbulan-kini-siap-beroperasi
> **Confidence**: low
> **Flag**: **jangan tulis Rp4,51 triliun sebagai fakta pasti.** Jika dipakai, beri hedge eksplisit ("dilaporkan mencakup jaringan distribusi lebih luas, per sumber yang belum terverifikasi ulang") atau gunakan Rp2,39 triliun (sumber primer terkonfirmasi) sebagai angka utama.

### Kelembagaan IIGF Institute (untuk anchor CTA & H2 #4)

> **Claim**: JIPM terbuka bagi kajian kasus daerah dari akademisi maupun praktisi pemda
> **Number/specific**: JIPM adalah jurnal multidisiplin *peer-review double-blind* terbitan IIGF Institute; cetak pertama **Juli 2018**; portal daring jipm.iigf.co.id; lingkup topik mencakup kebijakan publik, tata kota, lingkungan, ekonomi, kebijakan fiskal, pembiayaan kreatif, perpajakan, hukum, teknik, dan sosiologi terkait pembangunan infrastruktur publik Indonesia
> **Source**: institute.iigf.co.id/riset, diakses langsung 2026-08-12 (halaman berhasil di-*fetch* penuh pada run ini); dikonfirmasi juga di `company_profile.md`
> **Confidence**: high (first-party terverifikasi langsung run ini, dan sudah pre-approved di company_profile.md)

> **Claim**: IIGF Institute menyelenggarakan program *capacity building* untuk pemangku kepentingan infrastruktur, relevan untuk kesiapan kelembagaan PJPK daerah
> **Number/specific**: program ditujukan untuk "peningkatan kapasitas pemangku kepentingan infrastruktur" agar mendukung penyediaan infrastruktur lewat skema KPBU (deskripsi umum; halaman tidak secara eksplisit menyebut kolaborasi Kantor Bersama KPBU atau target pemerintah daerah spesifik dalam konten yang berhasil diekstrak)
> **Source**: institute.iigf.co.id/capacity-building, diakses langsung 2026-08-12
> **Confidence**: medium (halaman dapat diakses tetapi konten yang terekstrak terbatas — sebagian berada di balik bagian "Tentang"/"Deskripsi Program"/"Tata Cara Pengajuan" yang tidak sepenuhnya terbaca otomatis)

> **Claim**: Jejaring UNIID/JPII sebagai konteks kolaborasi akademik (hanya bila disinggung, bukan fokus utama)
> **Number/specific**: **33–35 universitas, per publikasi 2026** (rentang, bukan angka tunggal)
> **Source**: `knowledge_base/company_profile.md` (pre-approved); verifikasi eksternal independen pada run ini tidak berhasil menemukan angka spesifik terbaru (pencarian umum tidak relevan)
> **Confidence**: medium (mengandalkan fakta pre-approved company profile; tidak ada re-konfirmasi sumber eksternal segar pada run ini)

### Temuan tantangan tata kelola (atribusi eksplisit — bukan penilaian IIGF Institute)

> **Claim**: Dukungan legislatif dan pemahaman aparatur daerah termasuk DPRD adalah tantangan yang terdokumentasi pada proyek KPBU daerah
> **Number/specific**: kajian menyebut keterlibatan pemerintah daerah dalam proses KPBU nasional relatif terbatas, dengan Kementerian PPN/Bappenas dan Kementerian Keuangan mendominasi hampir seluruh proses; kapasitas lokal yang rendah disebut menghambat *ownership* dan menaikkan risiko kegagalan pelaksanaan. Minimnya pemahaman PJPK terhadap konsep KPBU turut disebut sebagai hambatan umum.
> **Source**: dikutip dari cache riset (data captured 2026-08-12) yang bersumber pada kajian akademik evaluasi KPBU Kereta Api Makassar–Parepare (researchgate.net) dan Perkumpulan Ahli KPBU Indonesia (ahlikpbuindonesia.or.id); **tidak di-*fetch* ulang langsung pada run ini** karena budget pencarian sesi habis
> **Confidence**: medium (sumber kredibel tetapi tidak diverifikasi ulang langsung sesi ini — perlakukan sebagai temuan kajian yang dikutip, bukan diverifikasi baru)
> **Flag wajib**: atribusikan eksplisit ke sumber kajian, **jangan pernah** dibingkai sebagai penilaian IIGF Institute atas pemerintah daerah/DPRD mana pun. Nada membantu, bukan menghakimi (sesuai pagar brief #3).

> **Claim**: Nuansa penyeimbang — DPRD tidak selalu jadi penghambat; ada kasus DPRD mendukung skema KPBU
> **Number/specific**: DPRD Kota Samarinda dilaporkan menilai skema pendanaan KPBU "lebih cocok" untuk kebutuhan PJU kota tersebut, sekitar Desember 2022 (indikatif — hanya judul berita yang terkonfirmasi, isi lengkap tidak dapat diakses)
> **Source**: kaltim.tribunnews.com, https://kaltim.tribunnews.com/2022/12/19/dprd-samarinda-nilai-skema-pendanaan-kpbu-lebih-cocok-untuk-kebutuhan-pju — *fetch* isi artikel gagal (HTTP 403) pada run ini; hanya judul dan tanggal terkonfirmasi
> **Confidence**: low (judul saja, tanpa isi artikel; media regional tunggal)
> **Flag**: pakai secara sangat berhati-hati sebagai nuansa penyeimbang di H2 #5, bukan sebagai bukti utama. Jangan mengutip pernyataan spesifik dari artikel ini karena isinya tidak dapat diverifikasi.

---

## Topic focus + IIGF Institute anchor (from brief mapping — keyword tidak ada di product_matrix.md)

| Apa yang diajarkan (KPBU/PPP daerah) | Fakta yang harus akurat | Di mana dalam artikel | Anchor program IIGF Institute |
|---|---|---|---|
| Definisi KPBU daerah & variasi PJPK (kepala daerah vs direksi BUMD) | PJPK dapat gubernur/bupati/wali kota **atau** direksi BUMD (kasus SPAM Semarang Barat: PDAM Tirta Moedal); dasar hukum Perpres 38/2015; sumber pembayaran umumnya APBD | H2 #1 (definisional) + definition snippet | — (tidak perlu CTA di sini) |
| Tiga wajah KPBU daerah — bukti studi kasus | Tabel PJU Samarinda / SPAM Semarang Barat / PSEL Legok Nangka dengan angka terverifikasi (lihat Core facts) | H2 #2 (tabel wajib) | — |
| Daftar periksa kesiapan pemda (kewenangan, studi pendahuluan, ruang fiskal APBD, dukungan DPRD, tim teknis, jalur VGF, sikap terhadap *unsolicited*) | Kriteria VGF resmi Kemenkeu (nilai investasi min. Rp100 M, dst.); tantangan dukungan legislatif diatribusikan ke kajian | H2 #3 (checklist berpoin) | Cousin link: *capacity building* (kapasitas kelembagaan daerah) |
| Ke mana daerah mencari bantuan — Kantor Bersama KPBU, portal Kemenkeu, Simpul KPBU PU, forum riset bersama kampus daerah | 7 anggota resmi Kantor Bersama KPBU (**tanpa PT PII/IIGF Institute** — koreksi penting); Indonesia Infrastructure Roundtable ke-24 (9 Maret 2023, Univ. Mulawarman Samarinda) | H2 #4 | Mid-article aside: forum riset + jejaring kampus (bukan anchor CTA); cousin link: sertifikasi |
| Kapan daerah BELUM perlu KPBU — kejujuran soal AP/tipping fee tetap membebani APBD, biaya penyiapan tidak proporsional untuk proyek kecil, risiko tanpa dukungan legislatif | Tipping fee PSEL Legok Nangka tetap dibayar APBD 6 pemda (bukan "gratis"); temuan kajian soal kapasitas lokal & DPRD, diatribusikan | H2 #5 (jujur/*counter-conventional*) | — |
| Penutup — studi kasus KPBU daerah sebagai bahan riset yang kurang terdokumentasi | E-library IIGF Institute memuat studi kasus PJU Samarinda (2025); JIPM terbuka bagi kajian kasus daerah dari akademisi/praktisi pemda | `## Kesimpulan` + baris CTA terakhir | **Riset & jurnal JIPM** (anchor tunggal, sesuai `client_anchor`) |

**Pengingat framing**: IIGF Institute adalah unit manajemen pengetahuan & *think-tank* PT PII — bukan entitas hukum mandiri, bukan universitas, dan **bukan anggota terdaftar Kantor Bersama KPBU** (lihat Flag utama). Bila konteks kolaborasi diperlukan, pakai "berkolaborasi dalam ekosistem Kantor Bersama KPBU" — bukan "anggota". Maksimal 2–3 penyebutan IIGF Institute di seluruh artikel, termasuk CTA penutup.

---

## Authoritative external sources (untuk ditautkan penulis)

1. **Kementerian Keuangan RI — Portal KPBU** (kpbu.kemenkeu.go.id), diakses 2026-08-12 — *mem-backup*: definisi dukungan kelayakan/VGF, daftar resmi 7 anggota Kantor Bersama KPBU, data proyek SPAM Semarang Barat & SPAM Umbulan, kisah sukses skema KPBU (Palapa Ring sebagai konteks pembanding)
2. **Simpul KPBU Kementerian PU** (simpulkpbu.pu.go.id), proyek PSEL Regional Legok Nangka, diakses 2026-08-12 — *mem-backup*: nilai investasi baseline Rp4,20 triliun, skala 1.836 ton/hari & 15 MW, jadwal Financial Close & konstruksi
3. **IIGF Institute e-library**, bab 69 "Peluang dan Tantangan Pengembangan Proyek PJU melalui Skema KPBU: Studi Kasus PJU Kota Samarinda", terbit 31 Agustus 2025 (DOI 10.35166/iigf.9786027222786.12) — *mem-backup*: angka cakupan PJU 36%/30% dan kebutuhan investasi ±Rp1 triliun
4. **Media nasional/regional terkonfirmasi silang** (Kompas, Tempo, Bisnis Indonesia, Antara News, JPNN, SWA — 9 sumber independen Juli–Agustus 2026) — *mem-backup*: nilai & skala PSEL Legok Nangka saat *groundbreaking* 29 Juli 2026 (Rp7,2 T/USD400 juta, 2.131 ton/hari, 40,79 MW)
5. **Media regional Jawa Barat 2019** (Bisnis Indonesia, Kompas, Antara Jabar, JPNN — 6 sumber independen) — *mem-backup*: tipping fee Legok Nangka Rp386.000/ton dan skema subsidi 30%/70% (kesepakatan 9 Oktober 2019)

Prioritas sesuai brief: kpbu.kemenkeu.go.id dan simpulkpbu.pu.go.id sebagai sumber pemerintah utama > IIGF Institute e-library sebagai sumber *first-party* tervalidasi DOI > media terkonfirmasi silang (≥3 sumber independen per angka penting).

---

## FAQ Q&As (8 — Bahasa Indonesia)

### Apa itu proyek KPBU daerah?
Proyek KPBU (Kerja Sama Pemerintah dengan Badan Usaha) daerah adalah skema kerja sama pemerintah-swasta yang penanggung jawabnya (PJPK) adalah kepala daerah — gubernur, bupati, atau wali kota — atau direksi BUMD, bukan menteri. Contohnya PJU Kota Samarinda dengan PJPK Wali Kota, dan SPAM Semarang Barat dengan PJPK Direktur Utama PDAM Tirta Moedal Kota Semarang. Dasar hukumnya sama dengan KPBU nasional (Perpres 38/2015), namun sumber pembayarannya umumnya APBD.

### Apa Itu Kepanjangan PJPK dan siapa PJPK di tingkat daerah?
PJPK adalah singkatan dari Penanggung Jawab Proyek Kerja Sama — pihak pemerintah yang menandatangani perjanjian KPBU dengan badan usaha pelaksana. Di tingkat daerah, PJPK dapat berupa gubernur (seperti pada PSEL Legok Nangka dengan PJPK Gubernur Jawa Barat, dan SPAM Umbulan dengan PJPK Gubernur Jawa Timur), bupati/wali kota, atau direksi BUMD seperti PDAM — tergantung kewenangan atas sektor infrastruktur yang bersangkutan.

### Bagaimana skema KPBU diterapkan di daerah?
Penerapannya mengikuti tiga tahap yang sama dengan KPBU nasional — perencanaan, penyiapan, dan transaksi — tetapi dengan ekosistem pendukung yang lebih tipis: tim teknis daerah lebih kecil, opsi pendanaan penyiapan lebih terbatas, dan keputusan penganggaran harus mendapat persetujuan DPRD untuk komitmen lintas tahun anggaran. Literatur kajian KPBU menyebut keterlibatan pemerintah daerah dalam proses KPBU nasional masih relatif terbatas dibanding Kementerian PPN/Bappenas dan Kementerian Keuangan.

### Apa itu proyek prakarsa badan usaha (unsolicited)?
Prakarsa badan usaha (*unsolicited*) adalah jalur KPBU yang inisiatifnya datang dari badan usaha/investor, bukan dari pemerintah — berbeda dari jalur prakarsa pemerintah (*solicited*) yang lazim pada proyek besar nasional. Proyek PJU Kota Samarinda menempuh jalur ini: dokumen prakarsa diserahkan calon pemrakarsa kepada Wali Kota selaku PJPK pada 5 Januari 2023 (indikatif, Pemkot Samarinda/Kemenkeu). Jalur ini lazim dipakai daerah dengan kapasitas tim penyiapan proyek yang terbatas.

### Apa itu dukungan kelayakan dan bagaimana daerah mengajukannya?
Dukungan kelayakan (*viability gap fund*/VGF) adalah kontribusi fiskal pemerintah pusat berupa sebagian biaya konstruksi tunai untuk proyek yang sudah layak ekonomi tetapi belum layak finansial — misalnya karena tarif harus dijaga tetap terjangkau. Syaratnya antara lain nilai investasi minimal Rp100 miliar dan badan usaha ditetapkan lewat lelang terbuka (Kemenkeu, per kpbu.kemenkeu.go.id). PJPK daerah mengajukan permohonan kepada Menteri Keuangan untuk dievaluasi Komite VGF.

### Apa itu Kantor Bersama KPBU?
Kantor Bersama KPBU adalah forum koordinasi lintas kementerian/lembaga untuk mensinergikan pelaksanaan KPBU di Indonesia, dibentuk melalui nota kesepahaman pada 18 September 2020 (indikatif, kpbu.kemenkeu.go.id). Anggota resminya tujuh kementerian/lembaga: Kemenko Perekonomian, Kemenko Marves, Kemendagri, Kemenkeu, Kementerian PPN/Bappenas selaku sekretariat, Kementerian Investasi/BKPM, dan LKPP. Pemerintah daerah dapat memanfaatkan simpul ini serta portal KPBU Kemenkeu dan Simpul KPBU Kementerian PU sebagai rujukan dokumen.

### Apakah KPBU membuat APBD tidak lagi terbebani?
Tidak sepenuhnya. Pada skema *availability payment* atau tipping fee — seperti pada PSEL Legok Nangka, tempat enam kabupaten/kota menanggung sebagian tipping fee Rp386.000/ton (indikatif, kesepakatan 2019) — APBD tetap membayar, hanya kewajibannya terbentang lintas tahun anggaran, bukan dibayar sekaligus di muka sebagai belanja modal. KPBU adalah instrumen penjadwalan ulang beban fiskal dan pembagian risiko, bukan cara menghilangkan kewajiban pembayaran daerah.

### Sektor apa yang paling lazim di-KPBU-kan oleh pemerintah daerah?
Berdasarkan studi kasus yang terdokumentasi, tiga sektor paling umum adalah penerangan jalan umum (PJU) — contoh Kota Samarinda dengan kebutuhan investasi hingga Rp1 triliun (indikatif, e-library IIGF Institute 2025) — air minum regional/SPAM seperti Semarang Barat dan Umbulan, serta pengolahan sampah menjadi energi listrik (PSEL) seperti Legok Nangka di Jawa Barat yang melibatkan enam kabupaten/kota sekaligus. Ketiganya dipilih karena kebutuhan investasinya jauh melampaui kapasitas APBD tunggal.

---

## Data tables for the writer

### Tiga wajah KPBU daerah: PJU, SPAM, dan PSEL (tabel wajib H2 #2)

| Proyek | Tingkat pemerintahan (PJPK) | Sektor | Pembayar | Pelajaran utama |
|---|---|---|---|---|
| PJU Kota Samarinda | Kota — Wali Kota | Penerangan jalan umum | APBD kota (skema *availability payment*, jalur prakarsa badan usaha) | Cakupan PJU baru ±36% jalan utama dan ±30% permukiman; investasi hingga ±Rp1 triliun jauh melampaui APBD kota tunggal, sehingga jalur *unsolicited* dari investor jadi opsi realistis (indikatif, e-library IIGF Institute, terbit 2025) |
| SPAM Semarang Barat | Kota — direksi BUMD (Direktur Utama PDAM Tirta Moedal) | Air minum regional | Campuran: tarif pengguna + APBD kota/PDAM + APBN | PJPK tidak selalu kepala daerah langsung — bisa direksi BUMD; kapasitas 1.000 liter/detik dengan investasi inti ±Rp417,3 miliar (indikatif 2021), beroperasi sejak 22 Mei 2021 |
| PSEL Legok Nangka | Provinsi — Gubernur Jawa Barat | Persampahan menjadi energi listrik | Tipping fee dari provinsi + 6 kabupaten/kota, didukung VGF pusat ±Rp1,34 triliun | PJPK provinsi berarti kewajiban dibagi ke banyak pemda sekaligus; nilai proyek melonjak dari indikasi ±Rp4,20 triliun (2024) menjadi ±Rp7,2 triliun/USD400 juta saat *groundbreaking* 29 Juli 2026 — angka berubah signifikan seiring proyek maju ke konstruksi |

### Ringkasan angka kunci (indikatif — selalu sertakan tahun rujukan saat dikutip)

| Proyek | Nilai investasi | Kapasitas | Status per Agustus 2026 |
|---|---|---|---|
| PJU Kota Samarinda | hingga ±Rp1 triliun (indikatif, 2025) | cakupan 36% jalan utama / 30% permukiman | Dokumen prakarsa diserahkan ke Wali Kota 5 Jan 2023; status pasca-2025 **belum terverifikasi ulang** |
| SPAM Semarang Barat | ±Rp417,3 miliar (capex inti KPBU) vs ±Rp1,15–1,4 triliun (total program, dilaporkan media 2020–2022, cakupan berbeda) | 1.000 liter/detik | Beroperasi sejak 22 Mei 2021 |
| SPAM Umbulan (konteks) | ±Rp2,39 triliun (indikatif, sumber primer kpbu.kemenkeu.go.id); klaim ±Rp4,51 triliun **belum terverifikasi ulang** | 4.000 liter/detik | Beroperasi sejak 22 Maret 2021 |
| PSEL Legok Nangka | ±Rp4,20 triliun (indikasi 2024, Simpul KPBU PU) → ±Rp7,2 triliun/USD400 juta (saat *groundbreaking*, 29 Jul 2026) | 1.836 ton/hari & 15 MW (baseline) → 2.131 ton/hari & 40,79 MW (2026) | *Groundbreaking* 29 Juli 2026; target operasi 2029 |

---

## Daftar periksa kesiapan pemda (bahan untuk H2 #3)

- **Kejelasan kewenangan atas sektor** — pastikan PJPK yang berwenang sudah teridentifikasi: kepala daerah untuk sektor yang menjadi urusan pemerintah provinsi/kabupaten/kota, atau direksi BUMD bila aset/layanannya berada di bawah BUMD (seperti PDAM pada kasus SPAM Semarang Barat).
- **Studi pendahuluan yang menjawab siapa membayar dan berapa lama** — dokumen ini harus memetakan skema pengembalian investasi (tarif pengguna, *availability payment*, atau *tipping fee*) beserta proyeksi durasinya, karena skema itu menentukan beban APBD lintas tahun.
- **Ruang fiskal APBD untuk kewajiban lintas tahun anggaran** — proyeksi APBD ke depan harus dapat menampung kewajiban pembayaran tahunan tanpa mendesak belanja wajib lain; mutlak untuk skema *availability payment*/*tipping fee* seperti pada PSEL Legok Nangka.
- **Dukungan legislatif dan pemahaman DPRD terhadap skema** — kajian menyebut pemahaman yang tidak merata di aparatur daerah termasuk DPRD sebagai salah satu tantangan terbesar KPBU daerah (atribusikan ke sumber kajian, bukan penilaian IIGF Institute); sosialisasi awal ke DPRD dapat mempercepat proses.
- **Kesiapan tim teknis dan pendampingan** — proyek berukuran kecil sering menanggung biaya penyiapan yang secara proporsional lebih berat; pertimbangkan pendampingan dari Kantor Bersama KPBU, portal KPBU Kemenkeu, atau Simpul KPBU Kementerian PU.
- **Jalur pengajuan dukungan kelayakan (VGF) dan penjaminan** — untuk proyek yang layak ekonomi namun belum layak finansial, PJPK dapat mengajukan VGF ke Menteri Keuangan (syarat antara lain nilai investasi minimal Rp100 miliar); penjaminan infrastruktur melalui PT PII dapat meningkatkan *bankability* di mata pemberi pinjaman.
- **Kejelasan sikap terhadap prakarsa badan usaha (*unsolicited*)** — bila ada investor yang mengajukan proposal lebih dulu, seperti pada PJU Kota Samarinda (dokumen diserahkan ke Wali Kota 5 Januari 2023, indikatif), daerah tetap perlu proses evaluasi dan lelang yang kompetitif, bukan penunjukan langsung.

---

## Edge cases & nuance

- **KPBU bukan cara menghilangkan beban APBD** — pada skema *availability payment* atau *tipping fee*, APBD tetap membayar; yang berubah hanya jadwalnya (terbentang lintas tahun, bukan sekaligus di muka sebagai belanja modal). Tipping fee PSEL Legok Nangka adalah contoh konkret: enam pemda tetap menanggung 70% dari Rp386.000/ton (kesepakatan 2019).
- **Proyek kecil menanggung biaya penyiapan yang secara proporsional lebih berat** — nilai proyek daerah biasanya jauh lebih kecil dari proyek nasional, tetapi biaya kajian, studi kelayakan, dan pendampingan transaksi cenderung punya komponen tetap — sehingga rasio biaya penyiapan terhadap nilai proyek bisa jauh lebih tinggi untuk PJU kota dibanding, misalnya, jalan tol nasional.
- **Dua rangkaian angka PSEL Legok Nangka sama-sama benar, hanya beda waktu** — indikasi Rp4,20 triliun/1.836 ton-hari/15 MW (Simpul KPBU PU, kemungkinan mencerminkan data 2024) dan Rp7,2 triliun/2.131 ton-hari/40,79 MW (saat *groundbreaking* 29 Juli 2026) bukan kontradiksi — proyek berkembang skalanya seiring maju ke tahap konstruksi. Selalu sertakan tahun/konteks saat mengutip salah satunya.
- **Dukungan legislatif adalah temuan kajian, bukan tudingan** — ketidaksiapan DPRD/aparatur daerah yang disebut literatur sebagai tantangan harus disampaikan dengan nada membantu ("berikut yang perlu disiapkan"), bukan menghakimi pemda atau DPRD tertentu. Nuansa penyeimbang: DPRD Kota Samarinda dilaporkan (Des 2022, sumber tunggal, hanya judul terkonfirmasi) menilai skema KPBU cocok untuk kebutuhan PJU — menunjukkan dukungan legislatif bukan mustahil, tergantung sosialisasi dan konteks lokal.
- **PJPK tidak selalu berarti kepala daerah secara langsung** — SPAM Semarang Barat menunjukkan PJPK bisa direksi BUMD (PDAM), sementara PSEL Legok Nangka dan SPAM Umbulan menunjukkan PJPK bisa gubernur (tingkat provinsi, bukan hanya kabupaten/kota). "KPBU daerah" mencakup spektrum lebih luas dari sekadar "kepala daerah kabupaten/kota".
- **Bila kebutuhannya sederhana dan dana tersedia, pengadaan biasa bisa lebih cepat dan murah** — KPBU membawa biaya transaksi (penyiapan, due diligence, negosiasi) yang hanya sepadan bila skala proyek dan keterbatasan APBD benar-benar membutuhkan skema pembiayaan alternatif.
- **Kualitas data pemerintah bervariasi menurut kapan halaman terakhir diperbarui** — kasus Legok Nangka membuktikan halaman Simpul KPBU PU bisa tertinggal dari perkembangan lapangan; penulis sebaiknya selalu menyebut sumber + tanggal akses, bukan hanya menyalin angka tanpa konteks waktu.

---

## Flags (open factual risk)

1. ✅ **[RESOLVED 2026-08-12] Keanggotaan Kantor Bersama KPBU** — `company_profile.md` mencantumkan IIGF Institute sebagai anggota, tetapi verifikasi langsung ke halaman resmi Kemenkeu run ini menemukan daftar 7 anggota resmi **tanpa PT PII/IIGF Institute**. → **Untuk artikel ini: ikuti pagar brief, jangan klaim keanggotaan; pakai "berkolaborasi dalam ekosistem Kantor Bersama KPBU".** **Tindak lanjut selesai:** baris *Membership* di `company_profile.md` sudah diganti menjadi *Ecosystem role* dan dikunci lewat **Rule 5** + entri *Blacklist*; status kelembagaan final masih menunggu konfirmasi klien.
2. ⚠️ **Tipping fee PSEL Legok Nangka — subsidi provinsi** — cache riset menyebut 49%/Rp189.140 per ton; verifikasi run ini (6 sumber 2019 independen) menemukan 30%/Rp115.800 per ton. → pakai angka 30%/70% berlabel "kesepakatan 2019"; jangan pakai 49% tanpa verifikasi lanjutan ke sumber primer bertahun lebih baru.
3. ⚠️ **SPAM Umbulan Rp4,51 triliun** — tidak dapat diverifikasi ulang (fetch ekon.go.id gagal karena galat SSL). → gunakan Rp2,39 triliun (sumber primer kpbu.kemenkeu.go.id, terkonfirmasi) sebagai angka utama; jangan tulis Rp4,51 triliun sebagai fakta pasti.
4. ⚠️ **Rincian pendanaan tiga pihak SPAM Semarang Barat (480/400/500 miliar)** — hanya muncul di hasil pencarian teragregasi tanpa URL sumber primer jelas. → hanya agregat (Rp1,15–1,4 triliun, dengan tahun) yang boleh dikutip; jangan tulis rincian tiga pihak sebagai fakta pasti.
5. ⚠️ **Status terkini PJU Kota Samarinda pada 2026** — titik data terkonfirmasi terakhir adalah Agustus 2025 (publikasi e-library) dan Januari 2023 (pengajuan dokumen). Fetch untuk update status ke portal Pemkot Samarinda gagal (HTTP 500). → jangan tulis seolah proyek sudah beroperasi; sarankan penulis/editor melakukan satu verifikasi manual cepat bila artikel butuh klaim status presisi tinggi.
6. ⚠️ **Jumlah pelanggan/sambungan SPAM Semarang Barat** — angka kontestasi (70.000/350.000 jiwa vs ±65.000 KK vs >40.000 sambungan per 2025 dengan target 60.000). → pakai deskripsi kualitatif ("puluhan ribu sambungan") atau pilih satu sumber dengan tahun eksplisit, jangan campur angka dari sumber berbeda.
7. ⚠️ **Nama badan usaha pemrakarsa PJU Samarinda** — dua nama korporasi ditemukan di sumber (bukan nama individu, sehingga bukan pelanggaran blacklist keras), tetapi brief secara eksplisit meminta dihindari. → tulis "konsorsium pemrakarsa" saja.
8. ⚠️ **Nama pejabat pada sumber PSEL Legok Nangka** — sumber groundbreaking menyebut jabatan+nama Wakil Menteri ESDM dan Gubernur Jawa Barat. → **tidak dibawa ke dossier sebagai nama yang dapat dipakai**; gunakan jabatan institusional saja ("Wakil Menteri ESDM", "Gubernur Jawa Barat") sesuai pagar brief #2 (lebih ketat dari blacklist standar company_profile.md yang hanya mencakup personel IIGF Institute/PT PII — brief ini memperluasnya ke SEMUA individu).
9. ⚠️ **DPRD Samarinda mendukung skema KPBU (Des 2022)** — hanya judul berita terkonfirmasi (fetch isi artikel gagal, HTTP 403, sumber tunggal). → pakai sangat hati-hati sebagai nuansa penyeimbang saja, jangan jadi klaim utama, jangan kutip pernyataan spesifik.
10. ⚠️ **Perpres 38/2015 dan kerangka tahapan KPBU (Permen PPN/Bappenas)** — dasar hukum Perpres 38/2015 berkeyakinan medium (fakta domain yang sangat mapan, tetapi tidak di-*fetch* ulang langsung dari JDIH pada run ini). Klaim tambahan soal simplifikasi "8 kajian → 5 kajian" (Permen PPN 2/2020 → 7/2023) dari cache riset **tidak diverifikasi ulang run ini** dan sebaiknya tidak dipakai di artikel ini (lebih relevan untuk brief metodologis lain) kecuali diverifikasi lebih dulu.

---

## Definition snippet draft (40–60 kata)

> Proyek KPBU daerah adalah kerja sama pemerintah dengan badan usaha yang penanggung jawabnya (PJPK) adalah kepala daerah — gubernur, bupati, atau wali kota — atau direksi BUMD, bukan menteri. Sumber pembayarannya umumnya APBD, sehingga kesiapan fiskal lintas tahun anggaran dan dukungan legislatif DPRD menjadi penentu utama keberhasilannya, berbeda dari proyek KPBU nasional.

(52 kata)

---

## Catatan tambahan untuk penulis & editor

- **Reachability check `institute.iigf.co.id` run ini**: **berhasil diakses** — homepage, `/riset`, `/capacity-building`, dan bab e-library chapter 69 (PJU Samarinda) semuanya ter-*fetch* penuh. Ini lebih baik dari asumsi standar "situs memblokir sebagian akses otomatis" di `company_profile.md`/CLAUDE.md §8. Confidence pada klaim first-party di dossier ini karenanya bisa lebih tinggi dari biasanya, tetapi tetap sertakan tanggal akses (2026-08-12) karena sifat situs yang historically tidak konsisten.
- **Web search budget** habis pertengahan sesi riset (200/200 WebSearch pada level sesi, kemungkinan terbagi dengan agent lain yang berjalan paralel bulan ini). Verifikasi setelah titik itu murni memakai WebFetch langsung ke URL yang sudah diketahui dari cache riset — cukup untuk menuntaskan seluruh klaim prioritas brief, tetapi dua item (SPAM Umbulan Rp4,51 T via ekon.go.id, update status PJU Samarinda via diskominfo) gagal karena kendala teknis (SSL/500) bukan karena kehabisan budget pencarian.
- **Perpres 38/2015** dan kerangka pengembalian investasi (*user pay* vs *availability payment*) tidak diulang detail di sini karena sudah menjadi elemen inti brief 01 (metodologi 7 elemen) — dossier ini hanya memuat secukupnya untuk konteks definisional H2 #1.
