---
brief_id: "gaslink-03"
researcher_run_date: "2026-09-17"
sources_cited: 14
flags: 9
---

# Research Dossier: Konversi Boiler & Oven ke Gaslink: Panduan Retrofit per Industri

## TL;DR for the writer

- The core engineering story is solid and defensible: retrofit = mengganti/menyetel ulang **burner** + **rasio udara-bahan bakar (AFR)** + sistem kontrol keselamatan; **badan boiler/oven/kiln umumnya tetap dipakai**. AFR stoikiometrik gas alam (~1:9,5 volume) is a different number from gasoline's familiar 14.7:1 — do not conflate them.
- The **Ebara HKL 1800 KA (ROTASI/Undip, 2013)** study is real, verified, and gives usable numbers — but it is a **single boiler at PT Indomobil Suzuki International's Tambun I plant**, published in 2013. Every use of its figures (260,79 kg/jam solar, 21 m³/jam gas, ~Rp1,29 juta/jam savings) must be explicitly labeled "contoh dari satu studi kasus," never generalized as a universal retrofit benchmark or current price.
- **The brief's assumed "30–40% biaya produksi tekstil" figure could NOT be verified for textile.** What I found instead: an ESDM-published 2018 case says fuel (gas) is **~35% of production cost for a ceramics manufacturer (PT KIA)** — not textile — while a national BPS-linked figure suggests fuel/lubricants are only ~1.3% of total production cost across large-medium industry on average. Recommend reassigning the 35% figure to the ceramics example (correctly sourced) and dropping any hard percentage for textile.
- Kiln keramik (1.200–1.400°C firing zone) and pharma clean-steam sterilization (~121°C / SIP >120°C) have reasonably solid technical sourcing; textile boiler steam pressure/temperature specifics do not — describe textile qualitatively, don't invent a number.
- Two Indonesian regulations anchor the safety framing cleanly: **Permenaker No. 4 Tahun 2025** (operator pesawat uap bersertifikat) and **Permen ESDM No. 18 Tahun 2018** (pemeriksaan keselamatan instalasi/peralatan migas, tenaga teknik bersertifikat) — use these to back the "retrofit bukan DIY" framing instead of a generic assertion.

## Core facts (verified)

> **Claim**: Inti retrofit peralatan pembakaran dari solar/LPG ke gas bumi adalah mengganti atau menyetel ulang **burner**, menyesuaikan **rasio udara-bahan bakar (air-fuel ratio)**, dan memperbarui sistem kontrol/keselamatan — badan boiler, oven, atau kiln umumnya tetap dipakai.
> **Number/specific**: Prinsip rekayasa pembakaran umum, dikonfirmasi metodologi studi konversi boiler (lihat klaim berikutnya).
> **Source**: Prinsip teknik pembakaran standar; dikonfirmasi silang dengan metodologi Yohana & Askhabulyamin, ROTASI Vol. 14 No. 2 (2013), ejournal.undip.ac.id/index.php/rotasi/article/view/4631
> **Confidence**: high

> **Claim**: Studi akademik ROTASI/Undip tentang konversi boiler Ebara HKL 1800 KA dari solar ke gas adalah studi kasus **satu unit boiler** di **PT Indomobil Suzuki International, pabrik Tambun I**, ditulis oleh Eflita Yohana & Askhabulyamin, dipublikasikan 2013.
> **Number/specific**: ROTASI, Vol. 14, No. 2 (2013)
> **Source**: https://ejournal.undip.ac.id/index.php/rotasi/article/view/4631 (diakses 2026-09-17)
> **Confidence**: high

> **Claim**: Pada studi tersebut, kebutuhan solar 260,79 kg/jam untuk output steam tertentu digantikan oleh gas alam sebesar 21 m³/jam pada boiler yang sama.
> **Number/specific**: 260,79 kg/jam (solar) vs 21 m³/jam (gas)
> **Source**: ROTASI Vol. 14 No. 2 (2013), https://ejournal.undip.ac.id/index.php/rotasi/article/view/4631
> **Confidence**: high — **tetapi harus dilabeli sebagai angka satu unit spesifik, bukan patokan umum** (lihat Flags).

> **Claim**: Biaya bahan bakar per jam pada studi itu: solar Rp1.319.797/jam vs gas Rp27.300/jam, sehingga potensi penghematan sekitar Rp1.292.497/jam (~Rp1,29 juta/jam) untuk unit tersebut pada saat studi dilakukan (2013).
> **Number/specific**: Rp1.319.797/jam (solar) → Rp27.300/jam (gas) → selisih ~Rp1,29 juta/jam
> **Source**: ROTASI Vol. 14 No. 2 (2013), https://ejournal.undip.ac.id/index.php/rotasi/article/view/4631
> **Confidence**: high (angka studi) / **medium untuk relevansi harga saat ini** — harga solar & gas 2013 tidak mencerminkan harga 2026.

> **Claim**: Rasio udara-bahan bakar (air-fuel ratio) stoikiometrik untuk gas alam/metana berbeda dari bensin — sekitar 1:9,5 (volume udara:gas), bukan 14,7:1 (rasio massa yang lazim dikenal untuk bensin).
> **Number/specific**: CH4 + 2(O2 + 3,76 N2) → stoikiometrik ≈ 1 volume gas : 9,52 volume udara
> **Source**: EngineeringToolbox, "Stoichiometric Combustion", https://www.engineeringtoolbox.com/stoichiometric-combustion-d_399.html (diakses 2026-09-17)
> **Confidence**: high (referensi teknik pembakaran standar, dipakai luas di industri)

> **Claim**: Burner industri riil umumnya dioperasikan dengan **excess air 10–20% di atas kebutuhan stoikiometrik** untuk memastikan pembakaran sempurna dan keselamatan operasi.
> **Number/specific**: +10–20% excess air
> **Source**: EngineeringToolbox, https://www.engineeringtoolbox.com/stoichiometric-combustion-d_399.html
> **Confidence**: high

> **Claim**: Nilai kalor (calorific value) standar gas bumi yang dipakai dalam statistik energi berada di kisaran **35,6 MJ/m³**, dengan variasi aktual 34–52 MJ/m³ tergantung komposisi & sumber gas.
> **Number/specific**: 35,6 MJ/m³ (standar); rentang 34–52 MJ/m³
> **Source**: IEA, "Statistik Energi — Manual" (versi Bahasa Indonesia), https://iea.blob.core.windows.net/assets/8f53c80b-b6fe-4500-a62f-a25730201c7e/Manual_STAT_Indonesian_web.pdf (diakses 2026-09-17)
> **Confidence**: high

> **Claim**: Kiln/tunnel oven keramik di Indonesia umumnya beroperasi dengan suhu zona firing (pembakaran puncak) sekitar **1.200–1.400°C**, terbagi dalam tiga zona proses: preheating, firing, dan cooling.
> **Number/specific**: 1.200–1.400°C (firing zone); beberapa tungku downdraft maksimum ~1.300°C
> **Source**: Kajian teknis tungku keramik — Perpustakaan Universitas Gunadarma, https://library.gunadarma.ac.id/repository/proses-kerja-mesin-kiln-dalam-pembakaran-keramik-ssm ; jurnal.wastukancana.ac.id (analisis perpindahan panas tunnel kiln), https://jurnal.wastukancana.ac.id/index.php/teknologika/article/download/259/143/ (diakses 2026-09-17)
> **Confidence**: medium — konsisten di beberapa sumber teknis/akademik, namun bukan satu regulasi tunggal; rentang bisa berbeda per jenis produk keramik.

> **Claim**: Clean steam / pure steam di industri farmasi dipakai untuk sterilisasi peralatan produksi berkontak langsung; standar rujukan internasional menyebut sterilisasi pada suhu sekitar **121°C** (setara 15 psig uap jenuh), dengan proses sterilization-in-place (SIP) pada suhu di atas 120°C (~2 bar).
> **Number/specific**: ~121°C / 15 psig; SIP >120°C, ~2 bar
> **Source**: literatur teknik farmasi internasional (clean/pure steam systems, prinsip sejalan dengan GMP), pdhonline.com/courses/k109/k109content.pdf (diakses 2026-09-17)
> **Confidence**: medium — standar rekayasa umum yang sejalan dengan prinsip GMP internasional, **bukan kutipan regulasi CPOB/BPOM Indonesia yang spesifik**; validasi aktual tetap berbeda per fasilitas.

> **Claim**: Burner **dual-fuel** adalah unit pembakar yang dirancang untuk beroperasi dengan dua jenis bahan bakar (mis. gas bumi dan solar) dan dapat beralih di antara keduanya, umum dipakai di boiler industri Indonesia untuk redundansi pasokan.
> **Number/specific**: konsep dual-fuel burner dengan kapasitas kalori bervariasi (contoh pasar: kisaran ratusan kW hingga beberapa MW)
> **Source**: Referensi teknis vendor boiler Indonesia (mitraboiler.com, "Steam Boiler Lokal Bahan Bakar Dual Fuel"), https://mitraboiler.com/steam-boiler-lokal-bahan-bakar-dual-fuel-gas-dan-solar/ (diakses 2026-09-17)
> **Confidence**: medium — konsep umum diterima di industri; sumber bersifat vendor, gunakan hanya untuk menjelaskan konsep, **jangan mengutip merek/model burner sebagai rekomendasi** (sesuai catatan brief).

> **Claim**: Pada kasus PT Keramika Indonesia Asossiasi Tbk (PT KIA), manajemen menyebut gas bumi sebagai komponen ongkos produksi terbesar, sekitar **35%**, dan PGN mengklaim penggunaan gas bisa menekan biaya produksi hingga **40%** lewat efisiensi konsumsi bahan bakar dibanding bahan bakar sebelumnya.
> **Number/specific**: ~35% (porsi biaya gas); klaim PGN hingga 40% (potensi penghematan)
> **Source**: Kementerian ESDM, "35% Biaya Produksi Untuk Bahan Bakar, Pelaku Industri: Pakai Gas Lebih Hemat", dipublikasikan 8 Mei 2018, https://www.esdm.go.id/id/media-center/arsip-berita/35-biaya-produksi-untuk-bahan-bakar-pelaku-industri-pakai-gas-lebih-hemat (diakses 2026-09-17)
> **Confidence**: high untuk keakuratan kutipan **khusus industri keramik (PT KIA)** — **medium-low bila digeneralisasi ke sektor lain (termasuk tekstil)**; artikel berumur 2018, bukan data terkini nasional.

> **Claim**: Secara nasional, pengeluaran industri besar dan sedang untuk bahan bakar dan pelumas mencapai sekitar **Rp58,7 triliun** pada 2019, setara hanya **~1,3%** dari total biaya produksi — jauh lebih kecil dibanding porsi 35% pada kasus keramik di atas, menunjukkan variasi besar antar sektor/proses.
> **Number/specific**: Rp58,7 triliun; ~1,3% dari total biaya produksi (data 2019, industri besar-sedang nasional)
> **Source**: BPS (dikutip via ringkasan hasil pencarian; upaya fetch langsung ke bps.go.id gagal dengan error 403 pada 2026-09-17) — lihat Flags.
> **Confidence**: medium — arah/skala figur masuk akal dan konsisten dengan pola statistik industri, namun **tidak berhasil diverifikasi langsung dari halaman BPS**; perlakukan sebagai konteks arah, bukan kutipan pasti.

> **Claim**: Gaslink (PGN Gagas) menyalurkan CNG ke pelanggan lewat **Gas Transportation Module (GTM)** yang berfungsi sebagai "pipa virtual" — truk GTM terhubung langsung ke **Pressure Reduction Station (PRS)** permanen yang dipasang di lokasi pelanggan, menjaga aliran gas tanpa perlu pertukaran tabung fisik berulang.
> **Number/specific**: mekanisme GTM → PRS di lokasi pelanggan
> **Source**: gagas.co.id/gaslink (situs resmi PGN Gagas), https://www.gagas.co.id/gaslink (diakses 2026-09-17)
> **Confidence**: high (first-party, situs resmi)

> **Claim**: Segmen pelanggan yang dilayani Gaslink mencakup manufaktur, rumah sakit, hotel & restoran (HOREKA), pusat perbelanjaan, UMKM, laundry, dan kafe.
> **Number/specific**: 7 kategori segmen disebutkan di situs resmi
> **Source**: gagas.co.id/gaslink, https://www.gagas.co.id/gaslink (diakses 2026-09-17)
> **Confidence**: high (first-party); selaras dengan company_profile.md (hotel, rumah makan, rumah sakit, laundry disebut eksplisit).

> **Claim**: Proses onboarding/komisioning Gaslink mencakup empat tahap: menghubungi Pertamina Call Center 135 → verifikasi kebutuhan utilitas pelanggan → survei lokasi untuk penempatan PRS → instalasi infrastruktur dan pengujian sistem sebelum gas mulai dialirkan.
> **Number/specific**: 4 tahap onboarding; nomor kontak 135
> **Source**: gagas.co.id/gaslink, https://www.gagas.co.id/gaslink (diakses 2026-09-17)
> **Confidence**: high (first-party)

> **Claim**: PGN Gagas memegang sertifikasi **ISO 45001:2018** (Sistem Manajemen Keselamatan & Kesehatan Kerja) untuk layanan distribusi CNG, per data 2025.
> **Number/specific**: ISO 45001:2018 (2025)
> **Source**: knowledge_base/company_profile.md (internal, PGN Gagas pre-approved facts)
> **Confidence**: high (pre-approved company fact)

> **Claim**: Operator pesawat uap (boiler) di Indonesia wajib bersertifikat Kemnaker sesuai **Permenaker No. 4 Tahun 2025 tentang Operator Pesawat Uap** (ditetapkan 19 Mei 2025, berlaku 21 Mei 2025), dengan klasifikasi Kelas I (kapasitas >10 ton) dan Kelas II (kapasitas <10 ton).
> **Number/specific**: Permenaker No. 4/2025; berlaku 21 Mei 2025; Kelas I >10 ton, Kelas II <10 ton
> **Source**: JDIH Kemnaker, https://jdih.kemnaker.go.id/peraturan/detail/2684/peraturan-menteri-nomor-4-tahun-2025 ; Peraturan BPK, https://peraturan.bpk.go.id/Details/319729/permenaker-no-4-tahun-2025 (diakses 2026-09-17)
> **Confidence**: high (sumber basis data hukum resmi pemerintah)

> **Claim**: Pemeriksaan keselamatan instalasi dan peralatan pada kegiatan usaha minyak dan gas bumi di Indonesia diatur oleh **Permen ESDM No. 18 Tahun 2018** (merevisi Permen ESDM No. 38 Tahun 2017), yang mensyaratkan tenaga teknik/ahli bersertifikat untuk melakukan inspeksi.
> **Number/specific**: Permen ESDM No. 18 Tahun 2018 (revisi dari No. 38 Tahun 2017)
> **Source**: Ditjen Migas ESDM, https://migas.esdm.go.id/post/permen-esdm-tentang-pemeriksaan-keselamatan-instalasi-dan-peralatan-pada-kegiatan-usaha-minyak-dan-gas-bumi (upaya fetch full-text gagal/error server 2026-09-17; nomor regulasi dikonfirmasi silang lewat cuplikan hasil pencarian dari domain esdm.go.id/migas.esdm.go.id)
> **Confidence**: medium-high — nomor regulasi konsisten di beberapa halaman resmi ESDM, namun teks lengkap belum berhasil diambil langsung; rekomendasikan editor melakukan spot-check sebelum dikutip sebagai rujukan hukum definitif.

## Solution focus + PGN Gagas anchor (from product_matrix.md)

| What to teach (gas-bumi/CNG tech) | Facts to state accurately | Where in article | PGN Gagas service/credential to anchor CTA |
|---|---|---|---|
| Retrofit burner solar→gas: mengganti/menyetel burner, AFR, kontrol keselamatan | Badan boiler/oven umumnya tetap; AFR gas ≈1:9,5 volume (bukan 14,7:1 bensin); excess air 10–20% | H2#1 (definisional) | — (vendor-neutral; tidak perlu anchor Gagas di sini) |
| Peralatan yang bisa dikonversi (boiler, thermal oil heater, oven, kiln, dryer) | Beda kompleksitas: burner tunggal (mudah) vs suhu ekstrem/presisi (kompleks) | H2#2 | Aside singkat: Gaslink memasok CNG stabil untuk beragam peralatan ini |
| Per-industri: tekstil (steam), keramik (kiln 1.200–1.400°C), F&B (oven/steam), farmasi (clean steam ~121°C) | Hedge tekstil (tanpa angka biaya keras); keramik & farmasi punya sumber suhu; jangan generalisasi | H2#3 (tabel) | — |
| Tahapan retrofit: audit → pilih/ganti burner (opsi dual-fuel) → setel AFR & kontrol → uji & commissioning → smart meter | Commissioning gas-supply side = domain Gagas; penyetelan burner = domain vendor peralatan/teknisi bersertifikat | H2#4 | **Gaslink via GTM + PRS**, disebut menangani komisioning sisi pasokan gas |
| Kapan retrofit belum sepadan; kesalahan umum (AFR tak diset ulang, abaikan calorific value) | Peralatan sangat tua → ganti, bukan retrofit; proses suhu ekstrem butuh evaluasi khusus | H2#5 (honest) | — |
| CTA penutup | Gaslink = CNG stabil via GTM ke manufaktur & komersial + komisioning lokasi; anak usaha PGN/Subholding Gas Pertamina | Closing | **Gaslink** (anchor utama, 1–2 self-mention max di closing) |

Reminder: PGN Gagas **menyalurkan/mengangkut/memasok** gas bumi (CNG) via Gaslink/GTM — bukan produsen/perancang peralatan pembakaran. Pemilihan dan penyetelan burner adalah pekerjaan vendor peralatan/teknisi bersertifikat, bukan sesuatu yang Gagas lakukan sendiri. Max 2–3 self-mentions (closing CTA + maksimal satu aside di H2#4, sesuai brief).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Kementerian ESDM (esdm.go.id), 8 Mei 2018** — https://www.esdm.go.id/id/media-center/arsip-berita/35-biaya-produksi-untuk-bahan-bakar-pelaku-industri-pakai-gas-lebih-hemat — *what it backs*: contoh nyata gas bumi sebagai ~35% ongkos produksi di industri **keramik** (PT KIA), dan klaim PGN penghematan biaya hingga 40% lewat efisiensi bahan bakar.
2. **JDIH Kementerian Ketenagakerjaan RI** — https://jdih.kemnaker.go.id/peraturan/detail/2684/peraturan-menteri-nomor-4-tahun-2025 — *what it backs*: kewajiban sertifikasi operator pesawat uap (boiler) sesuai Permenaker No. 4 Tahun 2025 — dasar hukum untuk framing "retrofit bukan DIY."
3. **ROTASI, Jurnal Teknik Mesin Undip, Vol. 14 No. 2 (2013)** — https://ejournal.undip.ac.id/index.php/rotasi/article/view/4631 — *what it backs*: studi kasus teknis konversi solar→gas pada satu unit boiler (konsumsi bahan bakar & estimasi biaya per jam).
4. **IEA — Statistik Energi (Manual, versi Bahasa Indonesia)** — https://iea.blob.core.windows.net/assets/8f53c80b-b6fe-4500-a62f-a25730201c7e/Manual_STAT_Indonesian_web.pdf — *what it backs*: nilai kalor standar gas bumi (35,6 MJ/m³) dan rentang variasinya.
5. **Ditjen Migas ESDM (migas.esdm.go.id)** — https://migas.esdm.go.id/post/permen-esdm-tentang-pemeriksaan-keselamatan-instalasi-dan-peralatan-pada-kegiatan-usaha-minyak-dan-gas-bumi — *what it backs*: kewajiban pemeriksaan keselamatan & tenaga teknik bersertifikat untuk instalasi/peralatan migas (Permen ESDM No. 18/2018).

## FAQ Q&As (5–8 drafted, Bahasa Indonesia)

### Bagaimana cara konversi boiler solar ke gas bumi?
Konversi umumnya dimulai dengan audit konsumsi bahan bakar dan profil beban, lalu mengganti atau menyetel ulang burner agar sesuai karakteristik gas, menyesuaikan rasio udara-bahan bakar dan sistem kontrol keselamatan, kemudian diuji dan melalui proses commissioning sebelum operasi penuh — badan boiler biasanya tetap dipakai. Sebagai gambaran, studi ROTASI Undip (2013) pada satu unit boiler Ebara HKL 1800 KA mencatat kebutuhan 21 m³ gas/jam menggantikan 260,79 kg solar/jam untuk kapasitas steam setara, meski angka ini spesifik untuk unit tersebut.

### Apa itu retrofit burner?
Retrofit burner adalah proses mengganti atau menyetel ulang unit pembakar pada boiler, oven, atau kiln agar dapat bekerja dengan bahan bakar baru, misalnya dari solar/LPG ke gas bumi. Prosesnya mencakup penyesuaian rasio udara-bahan bakar dan sistem kontrol keselamatan, karena karakteristik pembakaran gas alam (rasio udara-bahan bakar stoikiometrik sekitar 1:9,5 volume) berbeda dari bahan bakar cair. Pekerjaan ini umumnya dikerjakan bersama vendor peralatan atau teknisi bersertifikat.

### Apakah kiln keramik dan oven F&B bisa pakai CNG?
Bisa, selama dilakukan retrofit burner dan penyesuaian kontrol yang tepat. Kiln keramik umumnya bekerja pada suhu zona firing 1.200–1.400°C dan menuntut pembakaran sangat konsisten agar mutu produk tidak cacat, sementara oven dan penggorengan F&B beroperasi pada suhu jauh lebih rendah dengan penekanan pada kontrol suhu dan higienitas. Karena tuntutan suhu berbeda, penyetelan burner kiln umumnya lebih kompleks dibanding oven F&B.

### Apakah konversi ke gas mengubah kualitas produk, misalnya pewarnaan tekstil?
Gas bumi memiliki nilai kalor yang relatif stabil — standar internasional sekitar 35,6 MJ/m³ — sehingga secara prinsip mendukung suhu pembakaran lebih konsisten dibanding bahan bakar cair yang kualitasnya bisa bervariasi. Konsistensi ini berpotensi menguntungkan proses sensitif suhu seperti pencelupan tekstil atau pembakaran keramik. Namun dampak nyata pada kualitas produk tetap bergantung pada penyetelan burner dan kontrol proses masing-masing pabrik, bukan otomatis membaik hanya karena ganti bahan bakar.

### Apa itu burner dual-fuel?
Burner dual-fuel adalah unit pembakar yang dirancang untuk beroperasi dengan dua jenis bahan bakar berbeda, misalnya gas bumi dan solar, dan dapat beralih di antara keduanya. Skema ini sering dipakai sebagai jembatan transisi: pabrik tetap bisa beroperasi dengan bahan bakar cadangan bila pasokan gas terganggu, atau selama proses konversi masih berjalan bertahap, sehingga risiko downtime produksi berkurang selama masa peralihan ke gas bumi.

### Peralatan apa saja yang perlu diganti, dan mana yang tetap dipakai?
Yang biasanya diganti atau disetel ulang adalah burner, sistem kontrol rasio udara-bahan bakar, jalur pipa gas menuju burner, dan perangkat keselamatan seperti flame detector dan solenoid valve. Badan boiler, oven, atau kiln — termasuk struktur tekanan dan ruang bakar utamanya — umumnya tetap dipakai selama masih laik pakai. Peralatan yang sudah sangat tua atau mendekati akhir umur teknis lebih baik dievaluasi untuk diganti total ketimbang dipaksakan retrofit.

### Apakah industri farmasi bisa memakai gas bumi untuk clean steam?
Bisa, karena gas bumi menghasilkan pembakaran relatif bersih dan suhu yang konsisten — faktor penting untuk clean steam yang dipakai mensterilkan peralatan produksi farmasi. Standar rujukan internasional untuk sterilisasi uap umumnya berada di kisaran 121°C (setara 15 psig uap jenuh), dengan proses sterilization-in-place di atas 120°C. Meski begitu, spesifikasi clean steam farmasi tetap harus divalidasi sesuai standar CPOB/GMP di fasilitas masing-masing, bukan angka generik.

## Data tables for the writer

### Retrofit per industri: peralatan, kebutuhan panas, catatan teknis

| Industri | Peralatan pembakaran utama | Kebutuhan panas tipikal | Catatan retrofit khusus |
|---|---|---|---|
| Tekstil | Boiler pipa air (steam) untuk pencelupan & finishing | Steam bertekanan untuk proses basah; kebutuhan pastinya bervariasi per mesin — *jangan cantumkan angka tekanan/suhu spesifik tanpa sumber* | Fokus pada stabilitas pasokan steam; retrofit burner boiler steam relatif umum dikerjakan |
| Keramik | Kiln / tunnel oven | Zona firing ~1.200–1.400°C, melalui 3 zona (preheating, firing, cooling) | Kontrol suhu presisi tinggi krusial untuk mutu & rendemen; retrofit burner kiln tergolong lebih kompleks |
| F&B | Oven, penggorengan, unit steam | Suhu rendah-menengah, bervariasi per produk | Higienitas & kontrol suhu jadi prioritas; retrofit relatif sederhana untuk burner tunggal |
| Farmasi | Boiler clean steam (WFI-fed) | Sterilisasi ~121°C (setara 15 psig); SIP >120°C | Wajib validasi ulang sesuai CPOB/GMP; pembakaran bersih krusial untuk higienitas produk |

*Catatan: kolom "kebutuhan panas tipikal" untuk keramik & farmasi bersumber dari literatur teknis (lihat Core facts); untuk tekstil sengaja tidak dicantumkan angka pasti karena belum terverifikasi — lihat Flags.*

### Rasio udara-bahan bakar: gas bumi vs persepsi umum (bensin)

| Aspek | Gas bumi/metana (industri) | Bensin (referensi umum yang sering disalahpahami) |
|---|---|---|
| Rasio stoikiometrik | ≈1:9,5 (volume udara:gas) | 14,7:1 (rasio massa udara:bahan bakar) |
| Implikasi retrofit | AFR & sistem kontrol burner harus disetel ulang khusus untuk gas, bukan disamakan dengan kendaraan berbahan bakar bensin | — |
| Praktik operasi riil | Excess air 10–20% di atas stoikiometrik untuk pembakaran sempurna & keselamatan | — |

## Edge cases & nuance

- **Jangan generalisasi angka Ebara/ROTASI.** Studi itu satu unit boiler, satu pabrik, tahun 2013 — harga solar/gas saat ini berbeda jauh dari 2013; gunakan hanya sebagai ilustrasi metodologi ("contoh dari studi"), bukan janji penghematan.
- **"30–40% biaya produksi tekstil" tidak terverifikasi untuk tekstil.** Angka 35% yang berhasil diverifikasi adalah kasus **keramik** (PT KIA, ESDM 2018), sementara rata-rata nasional porsi bahan bakar terhadap biaya produksi jauh lebih kecil (~1,3%, data BPS 2019, seluruh industri besar-sedang). Variasi ini menegaskan bahwa porsi biaya bahan bakar sangat tergantung proses (mis. pembakaran suhu tinggi vs proses ringan), bukan angka tunggal yang berlaku semua sektor.
- **AFR 14,7:1 adalah untuk bensin, bukan gas bumi.** Kesalahan umum adalah menyamakan rasio udara-bahan bakar kendaraan bensin dengan burner gas industri — keduanya beda basis (massa vs volume) dan beda fluida.
- **Retrofit tidak selalu lebih murah/lebih mudah daripada ganti baru.** Peralatan yang sangat tua atau mendekati akhir umur teknis, atau proses dengan tuntutan suhu ekstrem/presisi sangat tinggi, sering lebih baik dievaluasi untuk penggantian total — bukan dipaksakan retrofit.
- **Pemilihan/penyetelan burner ≠ pekerjaan penyalur gas.** PGN Gagas via Gaslink menyalurkan CNG dan menangani sisi komisioning pasokan gas (GTM–PRS); pemilihan dan penyetelan burner tetap pekerjaan vendor peralatan pembakaran atau teknisi bersertifikat sesuai jenis dan kapasitas peralatan.
- **Retrofit peralatan bertekanan/pembakaran adalah pekerjaan regulasi, bukan DIY** — boiler/pesawat uap tunduk pada Permenaker No. 4/2025 (operator bersertifikat), dan instalasi/peralatan migas tunduk pada Permen ESDM No. 18/2018 (tenaga teknik bersertifikat untuk inspeksi keselamatan).

## Flags (open factual risk)

- ⚠️ **"Biaya bahan bakar 30–40% biaya produksi tekstil"** (asumsi brief): tidak dapat diverifikasi untuk industri tekstil. Yang ditemukan: kasus **keramik** (PT KIA, ESDM 2018) ~35%, dan rata-rata nasional bahan bakar hanya ~1,3% dari biaya produksi (BPS 2019, seluruh industri besar-sedang). → Rekomendasi: pindahkan angka 35% ke contoh keramik dengan atribusi yang benar (ESDM/PT KIA, 2018); untuk tekstil, jangan cantumkan persentase keras — gunakan frasa kualitatif ("pada proses seperti pencelupan & finishing, bahan bakar bisa jadi komponen biaya signifikan, porsinya bervariasi per pabrik") atau rujuk ke gaslink-01/02 untuk sisi biaya.
- ⚠️ **Angka studi Ebara HKL 1800 KA (ROTASI/Undip)**: valid dan terverifikasi langsung dari sumber, tapi merupakan **satu studi kasus tahun 2013 di satu pabrik (PT Indomobil Suzuki International, Tambun I)**. → Rekomendasi: selalu diberi label "contoh dari studi 2013 pada satu unit boiler," jangan disajikan sebagai patokan penghematan universal atau harga terkini.
- ⚠️ **Suhu/tekanan steam tekstil**: tidak ditemukan sumber teknis spesifik dan terverifikasi untuk suhu/tekanan boiler steam tekstil (pencelupan/finishing) di konteks Indonesia. → Rekomendasi: deskripsikan kualitatif saja ("steam bertekanan untuk proses basah"), jangan mengarang angka.
- ⚠️ **"Gaslink melayani 189 pelanggan industri dan 374 pelanggan HOREKA"**: figur ini muncul dalam ringkasan hasil pencarian yang mengklaim berasal dari gagas.co.id, tetapi **tidak dapat dikonfirmasi** lewat fetch langsung ke gagas.co.id/gaslink maupun gagas.co.id/perusahaan-cng-indonesia (kedua halaman tidak menampilkan angka pelanggan agregat saat diambil langsung). → Rekomendasi: **jangan gunakan angka ini** kecuali penulis/editor menemukan dan mengutip halaman sumber persis yang memuatnya.
- ⚠️ **"Potensi hemat hingga 30%"** (klaim marketing di gagas.co.id/gaslink): menyentuh ranah biaya/CAPEX yang sengaja **di luar cakupan artikel ini** (brief mengalokasikan biaya ke gaslink-01/02). → Rekomendasi: jangan diimpor ke artikel ini.
- ⚠️ **Harga gas bumi/HGBT**: figur harga gas industri (mis. HGBT) bersifat volatil dan regulatif, dan eksplisit di luar cakupan artikel ini. Salah satu pencarian menemukan klaim penurunan harga LNG industri "20–23 dolar AS/MMBTU menjadi 13 dolar AS/MMBTU" (Kemenperin, dikutip Kompas, 2 Juli 2026) — **angka ini TIDAK diverifikasi lebih lanjut dan sebaiknya TIDAK dipakai di artikel ini** karena topik harga sudah dialokasikan ke gaslink-02. → Rekomendasi: jika perlu menyebut harga sama sekali, gunakan frasa umum ("harga gas bumi diatur pemerintah dan dapat berbeda per sektor") tanpa angka.
- ⚠️ **Suhu sterilisasi clean steam farmasi (~121°C / SIP >120°C)**: bersumber dari literatur teknik farmasi internasional yang selaras dengan prinsip GMP, **bukan kutipan langsung regulasi CPOB/BPOM Indonesia**. → Rekomendasi: frasakan sebagai "standar rujukan internasional/GMP," dan tambahkan bahwa validasi aktual mengikuti dokumentasi CPOB fasilitas masing-masing — jangan klaim sebagai angka resmi BPOM.
- ⚠️ **Permen ESDM No. 18 Tahun 2018** (pemeriksaan keselamatan instalasi/peralatan migas): nomor regulasi konsisten muncul di beberapa halaman resmi ESDM/migas.esdm.go.id, tetapi **teks lengkap tidak berhasil diambil langsung** (fetch mengembalikan error server). → Rekomendasi: editor melakukan spot-check nomor regulasi sebelum dikutip sebagai rujukan hukum yang pasti; jika ragu, cukup sebut "regulasi ESDM tentang pemeriksaan keselamatan instalasi migas" tanpa memastikan nomornya di teks final.
- ⚠️ **Angka BPS "1,3% dari total biaya produksi"**: fetch langsung ke bps.go.id gagal (error 403); angka diperoleh dari ringkasan hasil pencarian, bukan halaman BPS yang terbaca langsung. → Rekomendasi: gunakan sebagai konteks arah ("porsi bahan bakar secara nasional relatif kecil dibanding sektor energi-intensif tertentu") tanpa mengklaimnya sebagai kutipan BPS yang presisi, atau editor memverifikasi ulang ke bps.go.id sebelum publikasi.

## Definition snippet draft (40–60 words)

> Retrofit burner adalah proses mengganti atau menyetel ulang unit pembakar pada boiler, oven, atau kiln agar dapat beroperasi dengan gas bumi menggantikan solar atau LPG. Prosesnya mencakup penyesuaian rasio udara-bahan bakar dan sistem kontrol keselamatan, karena karakteristik pembakaran gas berbeda dari bahan bakar cair — sementara badan peralatan utama umumnya tetap dipakai.

## Notes for visuals (feed the writer's {IMAGE_NN} placeholders)

- **Concept 1 — Anatomi retrofit burner (before/after)**: Diagram potongan melintang burner solar vs burner gas berdampingan, dengan label komponen yang **diganti** (nozzle/gun, sistem kontrol rasio udara-bahan bakar, flame detector, solenoid valve) di satu sisi dan komponen yang **tetap** (badan boiler, ruang bakar, sistem pipa steam) di sisi lain. Gaya teknis/isometrik, palet biru-oranye (api/gas), teks Bahasa Indonesia pada tiap label. Alt-text: "Diagram komponen burner yang diganti dan tetap saat retrofit boiler ke gas bumi."
- **Concept 2 — Infografis per-industri**: Grid 4 kolom (Tekstil, Keramik, F&B, Farmasi), masing-masing dengan ikon peralatan utama (boiler steam, kiln, oven, unit clean steam), rentang suhu kerja tipikal, dan satu catatan retrofit khusus per sektor — mengikuti tabel di atas. Gaya flat-infographic, warna berbeda per industri, cocok untuk featured-snippet/tabel skimmable. Alt-text: "Perbandingan kebutuhan retrofit peralatan pembakaran di industri tekstil, keramik, F&B, dan farmasi."
- **Concept 3 — Timeline 5 tahap retrofit**: Alur horizontal bernomor: Audit konsumsi & beban → Pilih/ganti burner (opsi dual-fuel) → Setel ulang AFR & kontrol → Uji & commissioning → Pantau via smart meter, dengan aksen ikon truk GTM + PRS PGN Gagas di tahap commissioning untuk menandakan sisi pasokan gas. Gaya proses/HowTo, dapat diparse sebagai langkah terstruktur. Alt-text: "Lima tahap retrofit burner dari audit hingga commissioning pasokan gas bumi."
