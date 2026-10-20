---
brief_id: "gaslink-01"
researcher_run_date: "2026-09-17"
sources_cited: 13
flags: 7
---

# Research Dossier: Biaya Beralih ke Gaslink: Rincian CAPEX, Retrofit, dan Model Tanpa Modal

## TL;DR for the writer

- Struktur biaya konversi ke gas bumi punya dua lapis yang harus dipisah tegas: **CAPEX** (satu kali — survei, instalasi PRS, retrofit burner, metering) dan **OPEX** (berulang — harga gas per MMBTU, biaya sewa infrastruktur bila ada skema itu). Tidak ada sumber otoritatif publik yang memberi angka Rupiah pasti untuk komponen CAPEX ini di Indonesia — **jangan mengarang nominal, sajikan sebagai "sangat bergantung skala & lokasi, konsultasikan"**.
- **PRS (Pressure Reducing System)** punya tiga komponen inti yang bisa dijelaskan konkret dan tersumber: regulator tekanan (menurunkan tekanan tinggi ke ~0,5–4 bar), filter coalescer (menyaring cairan/kontaminan), dan heater (menaikkan suhu gas ~50°C untuk mencegah efek Joule-Thomson/pembekuan instrumen).
- **Model "tanpa-CAPEX/sewa infrastruktur" adalah pola umum di industri leasing peralatan energi Indonesia** (ditemukan pada vendor gas medis & panel surya lain — bukan Gaslink) dengan ciri khas: tenor 3–5 tahun, deposit jaminan 10–20% yang refundable, aset tetap milik penyedia. **Halaman resmi gagas.co.id/gaslink TIDAK menyebut skema ini sama sekali** — tulis sebagai konsep industri vendor-neutral, JANGAN diklaim sebagai layanan Gaslink yang pasti.
- **HGBT (Harga Gas Bumi Tertentu) USD 7/MMBTU (bahan bakar) & USD 6,5/MMBTU (bahan baku)** dari Kepmen ESDM 76.K/2025 hanya berlaku untuk 7 sektor industri tertentu (pupuk, petrokimia, oleokimia, baja, keramik, kaca, sarung tangan karet) dengan 253 pengguna terdaftar — ini **konteks kebijakan harga gas nasional, bukan tarif Gaslink beyond-pipeline**. Jangan disamakan.
- Klaim "hemat hingga 30%" berasal dari halaman gagas.co.id sendiri (dan diliput media) — bingkai sebagai klaim penyedia, bukan angka independen teraudit. Gunakan studi kasus akademik (UNDIP: solar Rp1,3 juta/jam vs gas Rp27.300/jam) sebagai contoh *cara membaca payback yang jujur* — studi itu **tidak memasukkan biaya CAPEX konversi**, jadi ilustratif untuk peringatan "jangan lihat penghematan tanpa modal awal".

## Core facts (verified)

> **Claim**: Pemerintah menetapkan skema Harga Gas Bumi Tertentu (HGBT) terbaru melalui Kepmen ESDM No. 76.K/MG.01/MEM.M/2025 (perubahan kedua atas Kepmen 91.K/2023).
> **Number/specific**: HGBT dibedakan berdasarkan pemanfaatan — USD 7/MMBTU untuk gas sebagai bahan bakar, USD 6,5/MMBTU untuk gas sebagai bahan baku; ditandatangani Menteri ESDM Bahlil Lahadalia 26 Februari 2025; berlaku untuk 7 sektor industri (pupuk, petrokimia, oleokimia, baja, keramik, kaca, sarung tangan karet) dengan total 253 pengguna gas bumi tertentu.
> **Source**: Kementerian ESDM, "Skema Baru HGBT: Perkuat Daya Saing Industri dan Efisiensi Anggaran Negara", esdm.go.id, diakses 17 September 2026.
> **Confidence**: high

> **Claim**: Kebijakan HGBT ditujukan untuk pengguna gas bumi tertentu yang terdaftar di sektor industri prioritas, bukan tarif retail CNG beyond-pipeline.
> **Number/specific**: Cakupan program HGBT dibatasi pada 7 sektor & 253 pengguna terdaftar (lihat klaim di atas) — tidak menyebut segmen CNG beyond-pipeline (industri/komersial kecil-menengah tanpa jaringan pipa) sebagai penerima otomatis.
> **Source**: Kementerian ESDM, esdm.go.id, sda.
> **Confidence**: high (untuk cakupan program); medium untuk inferensi "tidak otomatis berlaku ke Gaslink" — ini kesimpulan logis dari cakupan program, bukan pernyataan eksplisit ESDM yang menyebut Gaslink.

> **Claim**: Pressure Reducing System (PRS) berfungsi menurunkan tekanan gas terkompresi tinggi ke tekanan kerja yang lebih rendah dan aman untuk peralatan pembakaran.
> **Number/specific**: Regulator tekanan (disebut "jantung" PRS) menurunkan tekanan tinggi ke kisaran 0,5–4 bar dalam sistem reduksi tekanan satu tahap (single-stage).
> **Source**: "CNG Pressure Reducing Device: How It Works & Key Components", Okay Energy (okenergycn.com), diakses 17 September 2026; dikuatkan studi teknis "Pembuatan Compressed Natural Gas (CNG) Pressure Reduction System (PRS) Kapasitas 15 NM3/H", ResearchGate.
> **Confidence**: medium (sumber teknis vendor + paper akademik, bukan standar nasional Indonesia; angka bar adalah rentang umum industri, bukan spesifikasi resmi PGN Gagas)

> **Claim**: PRS memiliki filter coalescer untuk memisahkan cairan dan menyaring kontaminan dari aliran gas sebelum masuk ke peralatan pengguna.
> **Number/specific**: Fungsi filter = memisahkan liquid/kontaminan sebelum tahap reduksi tekanan lanjutan.
> **Source**: Okay Energy (okenergycn.com), "CNG Pressure Reducing Device", diakses 17 September 2026.
> **Confidence**: medium

> **Claim**: PRS memiliki heater untuk menaikkan suhu gas guna mencegah efek Joule-Thomson (pendinginan akibat penurunan tekanan) yang bisa membekukan instrumen/pipa.
> **Number/specific**: Gas dialirkan melalui koil pemanas untuk menaikkan suhu hingga sekitar 50°C.
> **Source**: Okay Energy (okenergycn.com), sda.
> **Confidence**: medium

> **Claim**: Turbine/smart meter dipakai untuk mengukur volume gas secara akurat sebagai dasar penagihan sesuai pemakaian aktual.
> **Number/specific**: Turbine meter memiliki akurasi standar hingga ±1,0% pada rentang utama, dengan opsi kustom hingga ±0,5%; kalibrasi berkala diperlukan karena selisih pengukuran kecil berdampak besar secara finansial pada transaksi berbasis volume.
> **Source**: meterin.id, "TBQM Turbine Gas Flowmeter untuk Pengukuran Volume Gas"; PT Kian Santang Muliatama, "Kenapa Kalibrasi Turbine Meter Itu Wajib?", diakses 17 September 2026.
> **Confidence**: medium (sumber vendor teknis, bukan standar metrologi resmi Indonesia — angka akurasi adalah spesifikasi produk umum, bukan klaim spesifik meter Gaslink)

> **Claim**: Gaslink adalah layanan gas bumi terkompresi (CNG) yang disalurkan lewat Gas Transportation Module (GTM) untuk pelanggan industri, komersial, dan UMKM di luar jangkauan pipa.
> **Number/specific**: GTM digambarkan sebagai infrastruktur untuk pelanggan bervolume besar, beroperasi kontinu layaknya "pipa gas virtual" bagi pabrik, rumah sakit, dan kompleks perbelanjaan.
> **Source**: gagas.co.id/gaslink, diakses 17 September 2026.
> **Confidence**: high (sumber resmi PGN Gagas)

> **Claim**: Proses onboarding Gaslink terdiri dari 4 tahap: kontak (telepon 135/platform digital) → verifikasi kebutuhan volume & spesifikasi alat → survei lokasi untuk penempatan PRS/modul sesuai standar HSE → instalasi infrastruktur & pengujian sistem sebelum gas dialirkan.
> **Number/specific**: 4 tahap eksplisit sebagaimana tercantum di halaman resmi.
> **Source**: gagas.co.id/gaslink, diakses 17 September 2026.
> **Confidence**: high

> **Claim**: PGN Gagas/Gaslink mengklaim penghematan biaya bahan bakar hingga 30% melalui konversi & kalibrasi energi yang tepat.
> **Number/specific**: "hingga 30%" — klaim yang muncul di halaman gagas.co.id/gaslink dan diulang dalam pemberitaan media (mis. CNBC Indonesia, 20 Agustus 2026, "PGN Pastikan Pakai CNG Bisa Lebih Hemat 30% Dibanding LPG").
> **Source**: gagas.co.id/gaslink; CNBC Indonesia, 20 Agustus 2026, diakses 17 September 2026.
> **Confidence**: medium — ini klaim penyedia/perusahaan (bukan studi independen/audit pihak ketiga); harus diatribusikan eksplisit sebagai klaim PGN Gagas, bukan fakta berdiri sendiri.

> **Claim**: Model "zero-CAPEX" / sewa infrastruktur gas adalah pola bisnis yang nyata di pasar instalasi gas Indonesia — dipraktikkan oleh vendor lain di luar Gaslink.
> **Number/specific**: Contoh vendor gas non-Gagas (instalasi gas medis/LPG sentral): skema Infrastructure-as-a-Service dengan tenor kontrak 3–5 tahun, deposit jaminan 10–20% dari nilai proyek (refundable), aset tetap milik penyedia, pelanggan membayar OPEX (gas + biaya infrastruktur teramortisasi).
> **Source**: NodeMedic (nodemedic.com), "Skema Zero CAPEX", diakses 17 September 2026.
> **Confidence**: low-medium — sumber adalah vendor kecil non-Gagas di sektor gas medis/LPG sentral (bukan CNG industri), bukan lembaga otoritatif; gunakan HANYA sebagai ilustrasi pola industri umum, TIDAK sebagai bukti bahwa Gaslink menawarkan skema identik.

> **Claim**: Leasing / sewa guna usaha adalah instrumen pembiayaan yang diakui secara resmi dalam sistem keuangan Indonesia, mencakup finance lease (dengan opsi beli) dan operating lease (tanpa opsi beli).
> **Number/specific**: Definisi & kerangka diatur dan dijelaskan oleh OJK sebagai bagian edukasi keuangan.
> **Source**: OJK, "Sewa Guna Usaha (Leasing)", sikapiuangmu.ojk.go.id, diakses 17 September 2026.
> **Confidence**: high (regulator resmi, meski bukan spesifik sektor gas — menjadi dasar valid untuk konsep "sewa" secara umum, bukan bukti skema Gaslink)

> **Claim**: Studi akademik konversi boiler diesel (HSD) ke gas menunjukkan penurunan biaya operasional bahan bakar yang sangat besar, namun tanpa memperhitungkan biaya CAPEX instalasi konversi.
> **Number/specific**: Boiler EBARA HKL 1800 KA — biaya bahan bakar solar Rp1.319.797/jam vs gas (LNG) Rp27.300/jam; penghematan ~Rp1.292.497/jam pada sisi bahan bakar SAJA (studi tidak membahas biaya instalasi/retrofit).
> **Source**: Jurnal Rotasi, Universitas Diponegoro (ejournal.undip.ac.id), "Perhitungan Efisiensi dan Konversi dari Bahan Bakar Solar ke...", diakses 17 September 2026.
> **Confidence**: medium — studi kasus satu unit boiler, bukan generalisasi industri; berguna sebagai contoh untuk H2 "cara membaca payback dengan jujur", bukan sebagai patokan biaya CAPEX/OPEX Gaslink.

> **Claim**: Pemerintah pernah menetapkan target bauran energi primer nasional untuk tahun 2025 yang menyertakan porsi gas bumi.
> **Number/specific**: Target RUEN: 23% energi baru terbarukan, 25% minyak bumi, 30% batu bara, 22% gas bumi (pada 2025).
> **Source**: migas.esdm.go.id (arsip terkait RUEN), diakses 17 September 2026.
> **Confidence**: medium — ini target perencanaan (Rencana Umum Energi Nasional 2014), BUKAN angka realisasi/capaian terverifikasi terbaru; jangan nyatakan sebagai "tercapai" tanpa data realisasi terbaru.

> **Claim**: Pemerintah menjalankan program konversi bahan bakar minyak (BBM) ke gas dalam skala besar di sektor pembangkit listrik, menunjukkan bahwa konversi BBM→gas adalah agenda nasional yang berjalan, bukan hanya wacana korporat.
> **Number/specific**: Kepmen ESDM No. 249.K/MG.01/MEM.M/2022 tentang penyediaan & pengembangan infrastruktur LNG serta konversi BBM ke LNG untuk penyediaan tenaga listrik — mencakup 47 lokasi gasifikasi pembangkit dengan total kebutuhan volume LNG 282,93 BBTUD.
> **Source**: migas.esdm.go.id, diakses 17 September 2026.
> **Confidence**: high (untuk keberadaan Kepmen & angka program); ini konteks kebijakan makro, bukan referensi biaya CAPEX konversi tingkat pelanggan Gaslink.

> **Claim**: MMBTU (Million British Thermal Unit) dan BBTUD (Billion BTU per Day) adalah satuan standar yang dipakai industri gas untuk menyatakan harga dan volume energi, termasuk untuk keperluan sizing kebutuhan gas pelanggan.
> **Number/specific**: 1 BBTU = 1.000 MMBTU; harga gas industri di Indonesia (termasuk HGBT) lazim dinyatakan dalam USD per MMBTU.
> **Source**: Konvensi satuan industri migas (dikonfirmasi lintas sumber teknis/akademik migas), diakses 17 September 2026.
> **Confidence**: high (satuan standar, bukan klaim yang berubah-ubah)

> **Claim**: PGN (induk usaha PGN Gagas) memiliki rencana belanja modal (CAPEX) korporat sendiri untuk pengembangan infrastruktur gas bumi berskala nasional — ini adalah investasi tingkat korporasi, bukan biaya konversi yang dibayar pelanggan individual Gaslink.
> **Number/specific**: Media melaporkan PGN menyiapkan CAPEX senilai Rp5,5 triliun untuk fokus infrastruktur gas bumi (level korporasi/holding, bukan biaya konversi end-customer).
> **Source**: investortrust.id, "Fokus Infrastruktur Gas Bumi, PGN (PGAS) Siapkan Capex Rp 5,5 Triliun", diakses 17 September 2026.
> **Confidence**: medium — sumber pers bisnis (bukan rilis resmi ESDM/PGN yang di-fetch langsung); gunakan HANYA sebagai catatan edge-case ("jangan campur skala CAPEX korporat dengan CAPEX konversi pelanggan"), jangan sebagai fakta inti artikel.

> **Claim**: PGN Gagas adalah anak usaha PT Perusahaan Gas Negara Tbk (PGN), bagian dari Subholding Gas Pertamina, dan memegang sertifikasi ISO 9001:2015, ISO 45001:2018, serta ISO 37001:2016 (2025).
> **Number/specific**: Sertifikasi tahun 2025; status sebagai anak usaha PGN / Subholding Gas Pertamina.
> **Source**: `knowledge_base/company_profile.md` (PGN Gagas — distilled dari profil perusahaan & gagas.co.id).
> **Confidence**: high (fakta pre-approved klien)

## Solution focus + PGN Gagas anchor (from product_matrix.md)

| What to teach (gas-bumi/CNG tech) | Facts to state accurately | Where in article | PGN Gagas service/credential to anchor CTA |
|---|---|---|---|
| Struktur biaya konversi ke CNG industri: CAPEX (PRS, retrofit burner, metering, sizing) vs OPEX (harga gas/MMBTU) | CAPEX Rupiah = tidak ada angka publik terverifikasi, sajikan kualitatif; PRS = regulator + filter coalescer + heater (+ panel kontrol); turbine/smart meter akurasi umum ±0,5–1,0% | H2 #1–#3 | Alur survei → instalasi → komisioning Gaslink (dari gagas.co.id) sebagai bukti pengalaman menangani sisi teknis di lokasi pelanggan |
| Konsep zero-CAPEX/sewa infrastruktur (vendor-neutral) | Pola industri (tenor 3–5 tahun, deposit refundable 10–20%, aset milik penyedia) ditemukan pada vendor LAIN, bukan dikonfirmasi sebagai layanan Gaslink resmi — HARUS di-hedge | H2 #4 (comparison table) | Tidak diklaim sebagai layanan Gaslink; arahkan ke "konsultasikan skema pembiayaan yang tersedia" |
| Cara membaca payback dengan jujur (CAPEX ÷ penghematan OPEX bulanan) | Studi UNDIP menunjukkan penghematan bahan bakar besar TANPA CAPEX terhitung — contoh peringatan; klaim "hemat hingga 30%" = klaim penyedia (gagas.co.id), bukan angka independen | H2 #5 | — (fokus edukasi, bukan CTA) |
| Konteks kebijakan harga gas (HGBT) | HGBT USD 7/6,5 per MMBTU (Kepmen 76.K/2025) untuk 7 sektor industri terdaftar (253 pengguna) — TIDAK otomatis berlaku ke pelanggan beyond-pipeline Gaslink | Aside singkat di H2 #2 atau #4, sebagai konteks kebijakan | — |
| Penutup / CTA | Gaslink = CNG industri & komersial PGN Gagas via GTM, anak usaha PGN/Subholding Gas Pertamina, ISO 9001/45001/37001 (2025) | Closing CTA | **Gaslink** — max 2–3 self-mentions total |

Reminder: PGN Gagas **menyalurkan/mengangkut/memasok/mendistribusikan** gas bumi (CNG) via GTM — bukan produsen gas di hulu, dan (berdasarkan riset ini) belum terkonfirmasi menawarkan skema sewa/zero-CAPEX. Maks 2–3 self-mentions.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Kementerian ESDM — "Skema Baru HGBT: Perkuat Daya Saing Industri dan Efisiensi Anggaran Negara"** (esdm.go.id, diakses 17 September 2026) — *backs*: angka HGBT USD 7/6,5 per MMBTU (Kepmen 76.K/2025) sebagai konteks kebijakan harga gas industri.
2. **OJK — "Sewa Guna Usaha (Leasing)"** (sikapiuangmu.ojk.go.id, diakses 17 September 2026) — *backs*: definisi & kerangka resmi konsep leasing/sewa (finance lease vs operating lease) yang mendasari penjelasan model "tanpa-CAPEX" secara umum, bukan skema Gaslink spesifik.
3. **Ditjen Migas ESDM — Kepmen No. 249.K/MG.01/MEM.M/2022 & arsip RUEN** (migas.esdm.go.id, diakses 17 September 2026) — *backs*: konteks agenda nasional konversi BBM→gas berskala besar (47 lokasi gasifikasi pembangkit, 282,93 BBTUD) dan target bauran energi historis.
4. **Jurnal Rotasi, Universitas Diponegoro** (ejournal.undip.ac.id, diakses 17 September 2026) — *backs*: contoh studi kasus akademik konversi boiler solar→gas untuk ilustrasi "penghematan operasional besar tanpa CAPEX terhitung" pada H2 pembacaan payback.

## FAQ Q&As (5–8 drafted, Bahasa Indonesia)

### Berapa biaya konversi boiler solar ke gas bumi?
Biayanya sangat bergantung pada skala konsumsi, jenis peralatan pembakaran, tekanan kerja, dan jarak lokasi dari sumber pasokan — belum ada angka baku publik untuk Indonesia. Komponen utamanya adalah instalasi Pressure Reducing System (PRS), retrofit burner, dan metering. Karena bervariasi per kasus, langkah paling akurat adalah survei lokasi dan konsultasi kebutuhan langsung dengan penyedia gas.

### Apakah beralih ke Gaslink butuh investasi besar di awal?
Beralih ke gas bumi via CNG umumnya melibatkan modal awal (CAPEX) untuk instalasi PRS, retrofit burner, dan metering, terpisah dari biaya gas berjalan (OPEX). Gaslink menjalankan proses survei, instalasi, hingga komisioning di lokasi pelanggan sebagai bagian layanan — namun besaran investasi spesifik perlu dikonfirmasi lewat konsultasi karena bergantung pada kebutuhan tiap lokasi.

### Apa itu model tanpa CAPEX / sewa infrastruktur gas?
Model tanpa-CAPEX (sering disebut zero-CAPEX atau Infrastructure-as-a-Service) adalah skema di mana penyedia membangun & memiliki infrastruktur gas, sementara pelanggan membayar biaya berjalan (OPEX) yang sudah mencakup amortisasi infrastruktur — umumnya bertenor 3–5 tahun. Ini pola yang lazim di industri leasing peralatan energi Indonesia; konfirmasi ketersediaan skema ini langsung ke penyedia gas pilihan Anda.

### Berapa lama payback investasi konversi ke gas bumi?
Payback dihitung dari CAPEX (modal instalasi) dibagi penghematan OPEX bulanan (selisih biaya bahan bakar lama dengan gas). Semakin besar konsumsi dan semakin stabil operasi, semakin cepat modal kembali; sebaliknya, konsumsi kecil atau operasi musiman bisa memperlambatnya. Penting menghitung penghematan BERSIH setelah CAPEX, bukan hanya melihat selisih harga bahan bakar per unit energi.

### Apa saja komponen instalasi PRS (Pressure Reducing System)?
PRS umumnya terdiri dari regulator tekanan (menurunkan tekanan tinggi CNG ke level kerja aman, sekitar 0,5–4 bar), filter coalescer (menyaring cairan dan kontaminan), heater (menaikkan suhu gas untuk mencegah efek pembekuan akibat penurunan tekanan mendadak), dan panel kontrol/keselamatan. Kombinasi komponen ini memastikan gas yang masuk ke peralatan pembakaran pelanggan berada pada tekanan dan kondisi yang aman.

### Siapa yang menanggung biaya retrofit — pelanggan atau penyedia?
Tergantung skema komersial yang disepakati: pada model kepemilikan langsung, pelanggan menanggung CAPEX retrofit di depan; pada model sewa/tanpa-CAPEX, penyedia menanggung modal awal dan membebankannya ke tarif OPEX berjalan. Karena skema bisa berbeda antar penyedia dan belum ada satu standar tunggal di industri, pastikan menanyakan secara eksplisit siapa pemilik aset dan siapa penanggung biaya maintenance sebelum menandatangani kontrak.

### Apakah smart meter menambah biaya?
Smart meter atau turbine meter adalah bagian dari infrastruktur pengukuran yang memastikan penagihan sesuai pemakaian aktual, dengan akurasi standar hingga ±1,0% (opsi kustom hingga ±0,5%). Pada layanan CNG industri, biaya metering umumnya sudah menjadi bagian dari paket instalasi/skema komersial yang berlaku, bukan biaya tambahan terpisah yang dibebankan sepihak ke pelanggan — namun tetap konfirmasi rinciannya di kontrak.

## Data tables for the writer

### Komponen CAPEX konversi ke CNG: fungsi & siapa yang lazim menanggung

| Komponen | Fungsi | Sifat biaya | Siapa lazim menanggung (tergantung skema) |
|---|---|---|---|
| Survei lokasi & sizing | Menentukan kebutuhan volume (MMBTU/hari), tekanan kerja, tata letak PRS | Bagian dari proses onboarding, umumnya tanpa biaya terpisah | Penyedia gas (bagian layanan) |
| Instalasi PRS (regulator, filter, heater, panel kontrol) | Menurunkan & menstabilkan tekanan CNG ke level aman peralatan pelanggan | CAPEX satu kali | Bervariasi — pelanggan (model beli-sendiri) atau penyedia (model sewa/zero-CAPEX) |
| Retrofit burner (solar/LPG → gas) | Mengubah unit pembakaran agar kompatibel dengan bahan bakar gas | CAPEX satu kali | Bervariasi — sering pelanggan, kecuali disepakati lain dalam skema komersial |
| Metering (turbine/smart meter) | Mengukur volume gas terpakai untuk dasar penagihan akurat | CAPEX satu kali (atau termasuk sewa) | Bervariasi — umum menjadi bagian paket instalasi penyedia |
| Harga gas berjalan (Rp/MMBTU) | Biaya bahan bakar yang dikonsumsi | OPEX berulang | Selalu pelanggan |
| Biaya infrastruktur teramortisasi (bila model sewa) | Cicilan/amortisasi nilai infrastruktur dalam tarif berjalan | OPEX berulang | Pelanggan (dibayar sebagai bagian tarif, bukan modal di depan) |

### CAPEX sendiri vs model tanpa-CAPEX (sewa infrastruktur) — konsep umum industri

| Aspek | Beli-sendiri (CAPEX di depan) | Model tanpa-CAPEX / sewa infrastruktur |
|---|---|---|
| Modal awal | Besar — mencakup PRS, retrofit, metering | Minim/nihil di muka; masuk ke tarif OPEX berjalan |
| Kepemilikan aset | Milik pelanggan | Umumnya tetap milik penyedia infrastruktur |
| Tanggung jawab maintenance | Pelanggan (kecuali ada kontrak servis terpisah) | Umumnya penyedia (bagian dari skema) |
| Dampak arus kas | Menekan kas/modal kerja di awal | Menjaga likuiditas; biaya jadi predictable per periode |
| Tenor/komitmen | Tidak ada tenor wajib (aset milik sendiri) | Umumnya terikat kontrak 3–5 tahun (pola industri, bukan angka baku Gaslink) |
| Status pada Gaslink | Sesuai proses instalasi resmi (survei → instalasi → komisioning) | **Belum dikonfirmasi sebagai skema resmi Gaslink** — perlu ditanyakan saat konsultasi |

## Edge cases & nuance

- HGBT (USD 7/6,5 per MMBTU, Kepmen 76.K/2025) berlaku untuk 7 sektor industri tertentu dengan 253 pengguna terdaftar yang umumnya merupakan pelanggan gas skala besar via jaringan/wholesale — bukan tarif retail CNG beyond-pipeline seperti Gaslink. Menyamakan keduanya adalah kesalahan framing yang perlu dihindari eksplisit dalam artikel.
- Studi kasus UNDIP (solar Rp1,3 juta/jam vs gas Rp27.300/jam) menunjukkan penghematan operasional dramatis, tapi TIDAK memasukkan biaya CAPEX konversi sama sekali — ini justru contoh sempurna untuk H2 "kapan CAPEX belum terbayar": angka penghematan besar tanpa modal di depan bisa menyesatkan pembaca jika berdiri sendiri.
- Pola "zero-CAPEX" ditemukan pada vendor gas LAIN (instalasi gas medis/LPG sentral) dan sektor panel surya — bukan bukti bahwa Gaslink menawarkan skema identik. Pola industrinya nyata (deposit refundable 10–20%, tenor 3–5 tahun, aset milik provider), tapi penerapannya di Gaslink harus di-hedge sebagai "perlu dikonfirmasi", bukan diasersikan.
- PGN (induk usaha) memiliki CAPEX korporat sendiri (dilaporkan media Rp5,5 triliun untuk infrastruktur gas bumi) — ini investasi tingkat korporasi/holding untuk membangun jaringan nasional, sama sekali berbeda skala dan konteks dari CAPEX konversi yang dibayar pelanggan individual Gaslink. Jangan mencampur dua angka ini dalam artikel.
- Target bauran energi 22% gas bumi pada 2025 adalah target perencanaan (RUEN 2014), bukan capaian aktual terverifikasi terbaru — jika dipakai sebagai konteks makro, harus dilabeli sebagai "target", bukan "pencapaian".
- Klaim "hemat hingga 30%" konsisten muncul di berbagai konteks (restoran, industri, dibanding LPG) tapi selalu bersumber dari PGN/PGN Gagas sendiri atau media yang mengutip pernyataan perusahaan — belum ditemukan studi independen/audit pihak ketiga yang mengonfirmasi angka ini secara umum.

## Flags (open factual risk)

- ⚠️ **Rentang biaya CAPEX riil (Rupiah)** untuk instalasi PRS, retrofit burner, dan metering: tidak ditemukan sumber otoritatif/publik yang memberi angka pasti untuk konteks Indonesia. → Rekomendasi: sajikan kualitatif ("sangat bergantung skala, tekanan kerja, jarak, jenis peralatan — konsultasikan by-case"). JANGAN mengarang nominal Rupiah, bahkan sebagai "estimasi kasar".
- ⚠️ **Model tanpa-CAPEX/sewa infrastruktur untuk Gaslink**: company_profile.md dan halaman resmi gagas.co.id/gaslink (dikonfirmasi via fetch langsung) TIDAK menyebut skema ini sama sekali. → Rekomendasi: tulis sebagai konsep/pola umum industri gas & leasing Indonesia (pakai contoh vendor lain + kerangka OJK), lalu arahkan pembaca untuk "tanyakan skema pembiayaan yang tersedia saat konsultasi" — jangan menyatakan "Gaslink menawarkan sewa tanpa CAPEX" sebagai fakta.
- ⚠️ **Amortisasi sewa 3–5 tahun**: pola ini ditemukan pada vendor lain (gas medis, panel surya), bukan dikonfirmasi spesifik untuk industri CNG/Gaslink Indonesia. → Rekomendasi: frasakan sebagai "pola lazim industri leasing peralatan energi di Indonesia", jangan sebagai angka pasti Gaslink.
- ⚠️ **Klaim "hemat hingga 30%"**: sumber = halaman gagas.co.id sendiri (dikuatkan liputan media, mis. CNBC Indonesia Agustus 2026) — bukan studi independen/audit pihak ketiga. → Rekomendasi: atribusikan eksplisit ("menurut PGN Gagas..." / "klaim penyedia...").
- ⚠️ **HGBT USD 7/6,5 per MMBTU (Kepmen 76.K/2025)** berlaku untuk 7 sektor industri tertentu (253 pengguna terdaftar) — TIDAK otomatis berlaku untuk pelanggan CNG beyond-pipeline Gaslink. → Rekomendasi: sebut sebagai konteks kebijakan harga gas nasional, dengan kalimat eksplisit yang memisahkannya dari tarif Gaslink.
- ⚠️ **Target bauran energi 22% gas bumi (2025, RUEN)**: target perencanaan lama, bukan realisasi terverifikasi terbaru per 2026. → Rekomendasi: jika dipakai, beri label "target RUEN", jangan nyatakan sebagai tercapai.
- ⚠️ **Contoh nominal Rp500 juta (NodeMedic)** adalah ilustrasi dari vendor LAIN (instalasi gas medis di Bandung, bukan CNG/Gaslink). → Rekomendasi: JANGAN pernah dikutip sebagai angka yang relevan dengan Gaslink atau industri CNG.

## Definition snippet draft (40–60 words)

> CAPEX konversi ke Gaslink adalah modal awal satu kali yang dikeluarkan untuk instalasi Pressure Reducing System (PRS), retrofit burner dari solar/LPG ke gas, dan pemasangan meter — terpisah dari OPEX, yaitu biaya gas bumi berjalan yang dibayar sesuai volume pemakaian aktual (MMBTU) setelah instalasi selesai dan gas mulai mengalir.

## Notes for visuals (feed the writer's {IMAGE_NN} placeholders)

- **Concept 1 — Diagram alur biaya (timeline)**: Infografik horizontal dua lapis: lapis atas "CAPEX (satu kali)" berisi ikon survei → PRS → retrofit burner → metering; lapis bawah "OPEX (berulang)" berisi ikon harga gas/MMBTU mengalir seiring waktu; titik temu keduanya ditandai sebagai "titik payback". Gaya flat-infographic, warna biru-hijau PGN Gagas, teks Bahasa Indonesia singkat di tiap ikon.
- **Concept 2 — Tabel perbandingan visual "Beli-Sendiri vs Tanpa-CAPEX"**: Dua kolom berdampingan dengan ikon (gembok/kepemilikan untuk beli-sendiri; kunci sewa/kalender untuk tanpa-CAPEX), menyorot 4 baris: modal awal, kepemilikan aset, tanggung jawab maintenance, dampak arus kas. Sertakan catatan kecil di bawah kolom kanan: "konsep umum industri — konfirmasi ketersediaan skema saat konsultasi".
- **Concept 3 — Anatomi PRS berlabel**: Ilustrasi potongan-melintang unit PRS dengan label komponen (regulator, filter coalescer, heater, panel kontrol, turbine/smart meter), disandingkan dengan alur proses Gaslink "survei → instalasi → komisioning" sebagai strip bawah. Gaya diagram teknis bersih, cocok untuk pembaca procurement/teknik yang ingin memahami apa yang mereka bayar.
