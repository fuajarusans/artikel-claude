---
brief_id: "gaslink-02"
researcher_run_date: "2026-09-28"
sources_cited: 19
flags: 9
---

# Research Dossier: Gaslink untuk Listrik Pabrik: Genset Gas vs Diesel (Captive Power)

## TL;DR for the writer

- **Framing wajib (non-negotiable)**: Gaslink **memasok gas bumi** yang dapat menjadi bahan bakar genset **milik pelanggan** — Gaslink tidak menjual listrik, tidak mengoperasikan genset, dan bukan produsen gas. Fetch langsung halaman `gagas.co.id/gaslink` (28 Sep 2026) **tidak** menyebut "genset", "pembangkit", atau "captive power" sama sekali — jadi bingkai aplikasi ini sebagai *"dimungkinkan secara teknis, konsultasikan kelayakan pasokan"*, bukan layanan yang sudah dipasarkan resmi.
- **Jangan pernah sebut PT Widar Mandripa Nusantara (WMN)** — anak usaha lain PT Gagas Energi Indonesia yang justru benar-benar bergerak di penyediaan energi termal & **listrik** berbasis gas bumi. Ini entitas berbeda dari Gaslink, tidak ada di `company_profile.md`, dan menyebutnya akan mengaburkan framing "Gaslink = pemasok gas, bukan produsen listrik." Lihat Flag #5.
- Semua angka biaya (Rp/kWh) dan emisi (kg CO2/kWh listrik) di dossier ini adalah **rentang dengan asumsi eksplisit** (harga gas, efisiensi mesin, beban/jam operasi) — sajikan sebagai contoh perhitungan bertahap, jangan sebagai angka tunggal pasti.
- HGBT itu nyata dan berlaku (USD 6,5–7/MMBTU untuk 7 sektor industri terpilih; skema terpisah ~US$6–7/MMBTU untuk pembangkit listrik "bagi kepentingan umum" via PLN/IPP) — tapi **tidak terbukti mencakup** captive power industri yang disuplai CNG *beyond-pipeline*. Sebut sebagai konteks kebijakan saja (lihat Flag #1).
- Data teknis terkuat yang bisa dipakai langsung: efisiensi listrik gas engine umumnya **~35–45%** (contoh unit industri populer sampai 45,8%), diesel genset umumnya **~30–40%** operasi riil (puncak ~40–46%); PLTMG nasional mencakup **27 unit, ~2.269 MW** (ESDM, Jan 2024) — bukti gas-to-power lazim di Indonesia, **bukan** klaim proyek Gagas.

## Core facts (verified)

> **Claim**: *Captive power* adalah kondisi perusahaan mengelola dan menyediakan sendiri sumber pasokan listriknya, di luar jaringan PLN maupun pemegang izin usaha penyediaan tenaga listrik untuk kepentingan umum (IUPTLS).
> **Number/specific**: Definisi resmi dipakai Direktorat Jenderal Ketenagalistrikan ESDM dalam konteks dorongan penurunan emisi pembangkit privat, dipublikasikan 28 Maret 2023.
> **Source**: Kementerian ESDM — "Pemerintah Dorong Penurunan Emisi Pembangkit Milik Privat (Captive Power)", https://www.esdm.go.id/en/berita-unit/directorate-general-of-electricity/pemerintah-dorong-penurunan-emisi-pembangkit-milik-privat-captive-power, diakses 28 Sep 2026.
> **Confidence**: high

> **Claim**: Di Indonesia, pembangkit *captive* banyak dipakai industri padat energi (mis. smelter nikel, aluminium, baja) dan pabrik di lokasi tanpa jaringan PLN yang andal.
> **Number/specific**: Karakterisasi umum sektor; tidak ada angka kapasitas nasional presisi yang bisa diverifikasi langsung pada run ini (lihat Flag #6 soal klaim ~161 TWh 2025).
> **Source**: Listrik Indonesia — "Mengenal Istilah Captive Power Plant (CPP)", https://listrikindonesia.com/detail/15764/mengenal-istilah-captive-power-plant-cpp; dikuatkan kerangka umum ESDM di atas.
> **Confidence**: medium (media energi sekunder, bukan rilis pemerintah/BPS langsung)

> **Claim**: Pembangkit *captive* di Indonesia saat ini/ke depan diproyeksikan masih didominasi bahan bakar fosil dalam skala besar, dan pemerintah — lewat kerja sama Just Energy Transition Partnership (JETP) — mendorong penggantinya ke energi terbarukan, **bukan** secara spesifik ke gas bumi.
> **Number/specific**: Target JETP terkait disebut menyasar penurunan ~290 juta ton CO2 hingga 2030 (dalam konteks pembangkit secara umum, bukan khusus captive gas).
> **Source**: Kementerian ESDM, artikel yang sama di atas (28 Maret 2023).
> **Confidence**: high (untuk arah kebijakan); target 290 juta ton adalah target JETP nasional yang lebih luas — jangan menyempitkannya sebagai target captive-power saja.

> **Claim**: Genset gas (*gas engine*) adalah mesin pembakaran-dalam yang membakar gas bumi (bukan solar) untuk memutar generator, dengan penyalaan busi (*spark-ignited*) pada mesin gas khusus (*dedicated*) atau dibantu sedikit solar sebagai pemicu pada mesin *dual-fuel*.
> **Number/specific**: Definisi teknis umum; efisiensi listrik gas engine modern umumnya berkisar **~35–45%** — contoh konkret: satu lini mesin gas industri populer (kelas 3,5 MW) mencantumkan efisiensi listrik hingga **45,8%**, dengan efisiensi total *combined heat and power* (CHP) hingga **95%** bila panas buangnya dimanfaatkan.
> **Source**: Spesifikasi produk OEM mesin gas (fetch langsung halaman spesifikasi produk, 28 Sep 2026) — **JANGAN sebut merek di artikel** (brief: vendor-neutral); POWER Magazine — "Benefits of Reciprocating Engines in Power Generation", 1 Sep 2020, https://www.powermag.com/benefits-of-reciprocating-engines-in-power-generation/ (heat rate silang-cek di bawah).
> **Confidence**: high untuk angka OEM spesifik (sumber primer produsen); medium-high untuk generalisasi "35–45% umum industri" (triangulasi beberapa sumber sekunder yang konsisten)

> **Claim**: *Heat rate* pembangkit mesin gas reciprocating modern kelas menengah berada di kisaran **8.000–8.400 Btu/kWh** (basis HHV) — sekitar 10% lebih baik dari turbin gas aeroderivative canggih pada metrik yang sama.
> **Number/specific**: 8.000–8.400 Btu/kWh (HHV); unit tipikal 1–20 MW per unit; contoh pembangkit reciprocating besar: fasilitas Quisqueya, 24 unit mesin totalnya 430 MW.
> **Source**: POWER Magazine, 1 Sep 2020, https://www.powermag.com/benefits-of-reciprocating-engines-in-power-generation/.
> **Confidence**: high (publikasi energi tepercaya, angka teknis spesifik dengan tanggal jelas)

> **Claim**: Genset diesel umumnya beroperasi pada efisiensi termal **~30–40% pada kondisi riil**, dengan puncak efisiensi **~40–46%** untuk unit industri besar pada beban optimal (sekitar 80% kapasitas).
> **Number/specific**: Rentang 30–46% tergantung ukuran unit, beban, dan kondisi perawatan.
> **Source**: Triangulasi beberapa referensi teknis genset (mis. Depco, Linquip, Diesel Generator Tech) — bukan satu tabel spesifikasi tunggal yang berhasil diekstrak penuh pada run ini.
> **Confidence**: medium (konsisten lintas beberapa sumber sekunder, tapi bukan hasil fetch tabel spesifikasi primer tunggal — lihat Flag #9)

> **Claim**: Unit genset/mesin gas untuk pembangkit umumnya berkisar dari ratusan kW hingga puluhan MW per unit; rata-rata armada mesin reciprocating gas-fired di AS sekitar 4 MW (2018), dengan unit-unit lebih baru mencapai 16–19 MW.
> **Number/specific**: Rata-rata 4 MW (data per November 2018); unit besar 16–19 MW; sebagai pembanding, turbin gas rata-rata 56 MW dan pembangkit siklus-gabungan rata-rata 166 MW.
> **Source**: U.S. Energy Information Administration (EIA) — "Natural gas-fired reciprocating engines are being deployed more to balance renewables", 19 Feb 2019, https://www.eia.gov/todayinenergy/detail.php?id=37972.
> **Confidence**: high (lembaga statistik energi pemerintah AS, data bertanggal jelas) — **catatan**: data AS, dipakai sebagai konteks kisaran teknis global, bukan data Indonesia.

> **Claim**: Program gasifikasi pembangkit listrik Indonesia menargetkan **27 unit PLTMG** (Pembangkit Listrik Tenaga Mesin Gas) dengan total kapasitas **~2.269 MW** — terdiri dari 25 unit eksisting (999 MW), 1 unit dalam konstruksi (120 MW), dan 1 klaster Huadi tahap perencanaan (1.150 MW), dikelompokkan dalam 5 klaster regional (Kalimantan, Sulawesi-Maluku-Huadi, Nusa Tenggara, Papua Utara, Papua Selatan).
> **Number/specific**: 27 unit / ~2.269 MW total; periode implementasi Des 2024–akhir 2026; tujuan: kurangi impor BBM, dampak ekonomi lokal, komitmen Paris Agreement, target bauran energi nasional.
> **Source**: Kementerian ESDM — "Ini Progres Program Gasifikasi Pembangkit Listrik", 25 Jan 2024, https://esdm.go.id/id/media-center/arsip-berita/ini-progres-program-gasifikasi-pembangkit-listrik.
> **Confidence**: high

> **Claim**: Contoh PLTMG skala menengah-besar yang sudah beroperasi di Indonesia: PLTMG Jayapura (50 MW) dan PLTMG Nabire (20 MW), diresmikan pada era Menteri ESDM Ignasius Jonan (2016–2019) — bukti gas engine lazim dipakai untuk pembangkitan listrik skala signifikan di Indonesia.
> **Number/specific**: Jayapura 50 MW; Nabire 20 MW. (Contoh lain yang muncul di arsip ESDM tapi *belum* diverifikasi langsung pada run ini: "PLTMG Bintan ~9 MW" — hanya judul artikel, isi belum di-fetch; jangan pakai angka ini sebelum verifikasi ulang.)
> **Source**: Kementerian ESDM — galeri foto peresmian, https://www.esdm.go.id/id/media-center/galeri-foto/peresmian-pembangkit-listrik-tenaga-mesin-gas-pltmg-nabire-20-mw-dan-pltmg-jayapura-50-mw.
> **Confidence**: medium-high (MW terkonfirmasi dari sumber resmi; tahun persis event tidak eksplisit pada halaman yang berhasil di-fetch — lihat Flag #7)

> **Claim**: *Methane number* adalah ukuran ketahanan gas bumi terhadap knocking (detonasi dini) saat dibakar dalam mesin gas — analog dengan angka oktan pada mesin bensin. Skalanya 0–100: metana murni = 100 (ketahanan knock tertinggi), hidrogen murni = 0.
> **Number/specific**: Ambang minimum bervariasi per produsen mesin: contoh acuan industri menyebut minimum 65 untuk sebagian model mesin gas menengah, 75 untuk model lain; regulator California (CARB) mensyaratkan minimum 80 untuk CNG; asosiasi produsen mesin Eropa (Euromot) merekomendasikan tidak di bawah 80.
> **Source**: Referensi teknis distributor/OEM mesin gas (fetch langsung, 28 Sep 2026); silang-cek angka regulasi CNG California — CARB "Appendix D: Methane Number and Fuel Composition".
> **Confidence**: high (definisi & skala 0–100 konsisten di seluruh sumber teknis yang diperiksa; ambang minimum per-merek bervariasi — sajikan sebagai rentang, bukan satu angka tunggal, dan tanpa menyebut merek mesin)

> **Claim**: Pada genset *dual-fuel* hasil retrofit (mesin diesel yang dimodifikasi), tingkat substitusi gas terhadap solar sangat bergantung pada beban mesin: mendekati 0% saat idle/beban sangat rendah, naik ke kisaran **60–80%** pada beban tinggi; sejumlah kit retrofit dipasarkan dengan klaim substitusi hingga ~70%. Arsitektur mesin diesel dasarnya umumnya dipertahankan — sebagian kecil solar tetap disuntikkan sebagai pemicu bakar (*pilot injection*).
> **Number/specific**: Rentang substitusi ~30–70% pada beban sedang, hingga 60–80%+ pada beban tinggi, tergantung kualitas gas, beban, kondisi mesin, suhu udara-masuk, dan ketinggian lokasi.
> **Source**: Dokumen teknis retrofit dual-fuel & materi vendor kit dual-fuel (terkumpul via riset teknis; dokumen PDF utuh gagal diekstrak penuh pada run ini — lihat Flag #9 untuk catatan konfirmasi lanjutan).
> **Confidence**: medium (konsisten di ≥2 sumber independen, tapi berbasis materi vendor/teknis sekunder, bukan standar/regulator)

> **Claim**: Kandungan karbon per satuan energi bahan bakar: solar (*diesel/gas oil*) ≈ **74.100 kg CO2/TJ** (≈267 gram CO2/kWh energi bahan bakar); gas bumi ≈ **56.100 kg CO2/TJ** (≈201 gram CO2/kWh energi bahan bakar) — gas bumi sekitar **seperempat (±25%) lebih rendah** dari solar per satuan energi bahan bakar yang sama.
> **Number/specific**: 74.100 vs 56.100 kg CO2/TJ (basis energi bahan bakar, bukan listrik yang dihasilkan).
> **Source**: IPCC 2006 Guidelines for National Greenhouse Gas Inventories, Vol. 2 Ch. 2 (Stationary Combustion), https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf — nilai silang-cek independen (kalkulasi per-kWh yang hampir identik, 266,5 vs 200,8 g/kWh) di Volker Quaschning (HTW Berlin), https://www.volker-quaschning.de/datserv/CO2-spez/index_e.php.
> **Confidence**: high (nilai standar IPCC yang divalidasi silang lewat sumber akademik independen; ekstraksi tabel PDF IPCC langsung tidak sepenuhnya berhasil pada run ini, tapi dua jalur pencarian independen + validasi-silang matematis konvergen ke angka yang sama)

> **Claim**: Setelah memperhitungkan efisiensi mesin, genset gas biasanya melepas CO2 lebih sedikit per kWh listrik dibanding genset diesel — indikasi **~0,45–0,6 kg CO2/kWh** (gas, dengan asumsi efisiensi 35–45%) berbanding **~0,6–0,8 kg CO2/kWh** (diesel, dengan asumsi efisiensi 30–43%) — selisih kira-kira **25–40%**, TERGANTUNG PENUH pada efisiensi & beban aktual unit yang dibandingkan.
> **Number/specific**: Ini adalah **angka turunan** (fuel emission factor ÷ asumsi efisiensi mesin elektrik), bukan pengukuran tunggal resmi. Rumus: kg CO2/kWh-listrik = (kg CO2/kWh-bahan bakar) ÷ (efisiensi listrik mesin).
> **Source**: Kalkulasi dossier ini, berbasis IPCC (fact di atas) + rentang efisiensi mesin (fakta-fakta di atas). Selaras secara independen dengan rentang umum "~0,6–0,8 kg CO2/kWh" untuk genset diesel yang beredar di literatur teknis karbon-footprint genset.
> **Confidence**: medium (metodologi transparan & masukan berbasis sumber tinggi-kepercayaan, tapi hasil akhirnya adalah estimasi bertingkat — **wajib disajikan sebagai contoh perhitungan dengan asumsi terlihat**, bukan persentase tunggal berdiri sendiri — lihat Flag #3)

> **Claim**: Biaya listrik dari genset diesel di lokasi terpencil/tanpa jaringan PLN yang andal di Indonesia dilaporkan berada di kisaran **IDR 4.500–9.000+ per kWh** dalam materi industri yang beredar.
> **Number/specific**: IDR 4.500–9.000+/kWh; tidak disertai rincian metodologi (komponen bahan bakar, transportasi, perawatan) pada sumber yang ditemukan.
> **Source**: Materi vendor BESS (bukan rilis resmi ESDM/BPS/PLN) — protk.co.id, "BESS vs Genset Diesel", https://protk.co.id/id/artikel/bess-indonesia-genset-diesel/.
> **Confidence**: medium — **sumber vendor komersial, bukan statistik resmi**; sajikan eksplisit sebagai "kisaran lapangan yang beredar di industri," bukan rata-rata nasional resmi (lihat Flag #2). *(Brief secara eksplisit mengarahkan pemakaian rentang ini dengan hedging — bukan temuan baru dossier ini.)*

> **Claim**: Pemerintah menetapkan Harga Gas Bumi Tertentu (HGBT) bagi 7 sektor industri terpilih (pupuk, petrokimia, oleokimia, baja, keramik, kaca, sarung tangan karet; ±253 pengguna gas) — skema terbaru berlaku efektif 26 Februari 2025: **USD 7/MMBTU** untuk pemakaian sebagai bahan bakar, **USD 6,5/MMBTU** untuk pemakaian sebagai bahan baku (skema sebelumnya berkisar USD 6,75–7,75/MMBTU).
> **Number/specific**: USD 6,5–7/MMBTU (skema baru, per 26 Feb 2025) vs USD 6,75–7,75/MMBTU (skema lama).
> **Source**: Kementerian ESDM — "Skema Baru HGBT: Perkuat Daya Saing Industri dan Efisiensi Anggaran Negara", dipublikasikan 28 Feb 2025, https://www.esdm.go.id/id/media-center/arsip-berita/skema-baru-hgbt-perkuat-daya-saing-industri-dan-efisiensi-anggaran-negara.
> **Confidence**: high — **tapi ini kebijakan untuk 7 sektor industri manufaktur via pipa gas, BUKAN untuk captive power/CNG beyond-pipeline** (lihat Flag #1).

> **Claim**: Ada skema HGBT terpisah khusus sektor **ketenagalistrikan untuk kepentingan umum** (bukan untuk 7 industri di atas): Kepmen ESDM No. 77.K/MG.01/MEM.M/2025 (ditandatangani 26 Feb 2025) mengatur pengguna & harga gas bumi tertentu di bidang penyediaan tenaga listrik; regulasi pendahulunya (Permen ESDM No. 10/2020, mengubah Permen ESDM No. 45/2017) menetapkan harga gas di *plant gate* pembangkit paling tinggi **USD 6/MMBTU** untuk PLN dan pengembang pembangkit (BUPTL/PPL) yang membeli gas via pipa.
> **Number/specific**: USD 6/MMBTU plant-gate (Permen 10/2020, berlaku sejak Apr 2020) — skema 2025 dilaporkan pers menyebut kisaran ~USD 7/MMBTU untuk update terbaru (Agustus 2025).
> **Source**: migas.esdm.go.id — "Harga Gas Untuk Pembangkit Listrik Ditetapkan US$ 6 per MMBTU", https://migas.esdm.go.id/post/read/harga-gas-untuk-pembangkit-listrik-ditetapkan-us-6-per-mmbtu, 28 Apr 2020; dan esdm.go.id skema-baru-HGBT di atas.
> **Confidence**: high untuk keberadaan & mekanisme kebijakan; **medium untuk angka pasti terkini** (dua figur USD 6 vs USD 7/MMBTU muncul di titik waktu berbeda — kemungkinan revisi, belum dikonfirmasi lebih lanjut) — dan **skema ini menyasar PLN/IPP ("kepentingan umum"), bukan captive power industri swasta via CNG** (Flag #1).

> **Claim**: Halaman resmi `gagas.co.id/gaslink` (per fetch langsung, 28 Sep 2026) mencantumkan sektor target: manufaktur (termasuk "pabrik manufaktur berskala besar"), fasilitas kesehatan/rumah sakit, Horeka (hotel, restoran, kafe termasuk *kitchen* hotel butik), pusat perbelanjaan/ritel, *laundry* komersial, dan UMKM/IKM — halaman ini **tidak menyebut** kata "genset", "pembangkit listrik", atau "captive power" di manapun.
> **Number/specific**: 0 kemunculan istilah genset/pembangkit/captive power pada konten halaman yang diperiksa.
> **Source**: Fetch langsung https://www.gagas.co.id/gaslink, 28 Sep 2026.
> **Confidence**: high (verifikasi langsung halaman resmi klien, bukan snippet mesin pencari)

> **Claim**: Secara historis, pemberitaan media bisnis menyebut armada "Gaslink Truck" (GTM di atas truk) PGN Gagas — 32 unit diluncurkan, diberitakan 16 Nov 2018 — melayani pelanggan lintas sektor "komersial, industri, dan pembangkit listrik" di 3 wilayah operasi (a.l. Jakarta–Bekasi–Bogor–Bandung–Lampung; Jawa Timur–Semarang–Yogyakarta; Pekanbaru–Batam), menjangkau 70+ pelanggan saat itu.
> **Number/specific**: 32 unit truk; 70+ pelanggan (per 2018); 3 wilayah operasi regional.
> **Source**: Kontan — "Dorong Energi Ramah Lingkungan, PGN Luncurkan 32 Unit Gaslink Truck", 16 Nov 2018, https://industri.kontan.co.id/news/dorong-energi-ramah-lingkungan-pgn-luncurkan-32-unit-gaslink-truck.
> **Confidence**: medium — **berita 2018, bukan klaim terkini**; sebutan "sektor pembangkit listrik" di sana kemungkinan mengacu pada pelanggan genset/pembangkit yang membeli CNG sebagai bahan bakar (mendukung premis artikel), TAPI tidak bisa dipakai sebagai klaim status layanan Gaslink saat ini (lihat Flag #4).

## Solution focus + PGN Gagas anchor (from product_matrix.md)

| What to teach (gas-bumi/CNG tech) | Facts to state accurately | Where in article | PGN Gagas service/credential to anchor CTA |
|---|---|---|---|
| Definisi *captive power* & *gas engine*/genset gas | Definisi ESDM captive power (Mar 2023); genset gas = mesin pembakaran-dalam berbahan bakar gas, efisiensi listrik umumnya 35–45% | H2 #1 (definisi) | — (vendor-neutral, belum ada mention Gagas) |
| Perbandingan genset gas vs diesel (biaya indikatif, emisi, perawatan, kebisingan, keandalan) | Diesel remote ~IDR 4.500–9.000+/kWh (vendor field range, hedge); emisi bahan bakar gas ~56.100 vs diesel ~74.100 kg CO2/TJ (IPCC); heat rate gas 8.000–8.400 Btu/kWh (Powermag) | H2 #2 (question-format) | — |
| *Methane number*, sizing, dual-fuel vs dedicated gas engine | Skala methane number 0–100; ambang OEM umum 65–80+; substitusi dual-fuel 60–80% pada beban tinggi, mendekati 0% saat idle | H2 #3 (practical) | — |
| Rantai CNG *beyond-pipeline*: Mother Station → GTM → PRS → gas engine | GTM = modul tabung gas bertekanan di atas truk (Kontan 2018); rantai umum sesuai `company_profile.md` | H2 #4 (practical/bridge) | **Gaslink** — 1 mid-article aside: PGN Gagas (anak usaha PGN, Subholding Gas Pertamina) menyalurkan gas bumi ke lokasi *beyond-pipeline*; kesesuaian untuk captive power dinilai per kasus |
| Kapan genset gas BELUM masuk akal | Captive power Indonesia saat ini didominasi bahan bakar fosil skala besar & didorong pemerintah (JETP) ke energi terbarukan — bukan promosi gas; beban kecil/fluktuatif/cadangan sesekali lebih cocok diesel atau BESS/PV | H2 #5 (honest/counter-conventional) | — |
| Closing CTA | Gaslink sebagai pemasok CNG *beyond-pipeline* via GTM; ajakan konsultasi kelayakan pasokan untuk genset gas — **bukan** janji sistem pembangkitan | Closing (setelah Kesimpulan) | **Gaslink** (self-mention utama, 2 dari 2–3 maksimum) |

**Reminder**: PGN Gagas **menyalurkan/memasok/mengangkut** gas bumi (CNG) — ia adalah mitra distribusi & solusi energi, bukan produsen gas di hulu, bukan produsen/penjual listrik, bukan operator genset. Total self-mention di draf final: maksimal 2–3 (aside H2#4 + closing CTA).

## Authoritative external sources (for the writer to link out)

1. **Kementerian ESDM — Ditjen Ketenagalistrikan (28 Mar 2023)** — https://www.esdm.go.id/en/berita-unit/directorate-general-of-electricity/pemerintah-dorong-penurunan-emisi-pembangkit-milik-privat-captive-power — *backs*: definisi resmi *captive power* + arah kebijakan dekarbonisasinya.
2. **Kementerian ESDM (25 Jan 2024)** — https://esdm.go.id/id/media-center/arsip-berita/ini-progres-program-gasifikasi-pembangkit-listrik — *backs*: skala PLTMG nasional (27 unit, ~2.269 MW) sebagai bukti gas-to-power lazim di Indonesia.
3. **Kementerian ESDM (28 Feb 2025)** — https://www.esdm.go.id/id/media-center/arsip-berita/skema-baru-hgbt-perkuat-daya-saing-industri-dan-efisiensi-anggaran-negara — *backs*: konteks kebijakan HGBT terbaru (angka & sektor cakupan).
4. **Ditjen Migas ESDM (28 Apr 2020)** — https://migas.esdm.go.id/post/read/harga-gas-untuk-pembangkit-listrik-ditetapkan-us-6-per-mmbtu — *backs*: dasar hukum & angka awal harga gas untuk pembangkit listrik (plant-gate).
5. **IPCC 2006 Guidelines, Vol. 2 Ch. 2 (Stationary Combustion)** — https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf — *backs*: faktor emisi CO2 default bahan bakar solar vs gas bumi.
6. **U.S. EIA (19 Feb 2019)** — https://www.eia.gov/todayinenergy/detail.php?id=37972 — *backs*: kisaran kapasitas tipikal unit mesin gas reciprocating untuk pembangkitan.
7. **POWER Magazine (1 Sep 2020)** — https://www.powermag.com/benefits-of-reciprocating-engines-in-power-generation/ — *backs*: heat rate & keunggulan efisiensi mesin gas reciprocating, termasuk potensi CHP.

Prioritas kutipan untuk artikel: gunakan **#1 dan #2 (ESDM)** sebagai 1–2 tautan keluar utama (sesuai aturan `product_matrix.md`, ≥1–2 sumber otoritatif eksternal); #5–#7 bisa dipakai sebagai rujukan angka tanpa harus jadi tautan utama.

*Sumber sekunder/teknis (dipakai dengan hedge, bukan otoritas utama — lihat flags terkait)*: Clarke Energy (metana number, teknis OEM-adjacent), protk.co.id & baraputra.co.id (kisaran biaya/efisiensi lapangan, vendor), Kontan.co.id 2018 (historis GTM/Gaslink truck), Volker Quaschning/HTW Berlin (validasi-silang faktor emisi CO2).

## FAQ Q&As (Bahasa Indonesia)

### Bisakah gas bumi (CNG) dipakai untuk genset pembangkit listrik?
Ya. Gas bumi dapat dibakar dalam mesin gas (*gas engine*) yang secara prinsip serupa dengan genset diesel, tetapi menyalakan campuran udara-gas dengan busi, bukan kompresi solar. Efisiensi listrik gas engine modern umumnya 35–45%, tergantung merek dan skala unit. Syaratnya, pasokan gas harus tersedia stabil di lokasi — melalui pipa, atau di daerah tanpa pipa, lewat CNG *beyond-pipeline* seperti yang disalurkan Gaslink.

### Genset gas atau diesel yang lebih hemat untuk pabrik?
Tergantung profil beban dan harga bahan bakar setempat — tidak ada jawaban tunggal. Diesel genset di lokasi terpencil bisa mencapai kisaran biaya listrik IDR 4.500–9.000+/kWh menurut catatan lapangan industri, sementara biaya gas bergantung pada harga gas per MMBTU, efisiensi mesin, dan jam operasi. Pabrik dengan beban dasar besar dan jam nyala panjang umumnya lebih diuntungkan tren efisiensi gas; kebutuhan cadangan sesekali biasanya tetap lebih murah dengan diesel.

### Berapa kisaran biaya listrik per kWh genset gas dibanding diesel?
Data lapangan yang beredar menyebut biaya listrik diesel di lokasi terpencil IDR 4.500–9.000+/kWh; angka pasti untuk gas tidak bisa digeneralisasi karena bergantung pada tiga variabel: harga gas (USD/MMBTU), efisiensi listrik mesin (umumnya 35–45% untuk gas engine), dan faktor beban/jam operasi. Perbandingan yang jujur selalu memakai total biaya kepemilikan (bahan bakar + perawatan + keandalan pasokan), bukan hanya harga bahan bakar per unit energi.

### Apakah genset diesel bisa dikonversi jadi berbahan bakar gas (dual-fuel)?
Bisa, lewat retrofit dual-fuel: sebagian kecil solar tetap disuntikkan sebagai pemicu bakar (*pilot injection*), sementara gas menggantikan sisanya. Tingkat substitusi bervariasi menurut beban mesin — mendekati 0% saat idle, naik ke kisaran 60–80% pada beban tinggi menurut literatur teknis retrofit. Alternatifnya adalah *dedicated gas engine* yang dirancang murni untuk gas sejak awal, umumnya lebih andal untuk operasi jangka panjang skala penuh.

### Apa itu captive power dan siapa yang cocok memakainya?
Menurut Kementerian ESDM, *captive power* adalah kondisi perusahaan mengelola dan menyediakan sendiri sumber pasokan listriknya, di luar jaringan PLN. Di Indonesia, captive power banyak dipakai industri padat energi seperti smelter nikel, aluminium, dan baja, serta pabrik di lokasi dengan jaringan PLN yang belum andal atau mahal. Perusahaan dengan beban listrik besar dan konsisten adalah kandidat paling relevan untuk mengevaluasi captive power berbahan bakar gas.

### Bagaimana pasokan gas bisa sampai ke genset di lokasi pabrik yang jauh dari pipa?
Melalui rantai CNG *beyond-pipeline*: gas bumi dikompresi di Mother Station, diangkut memakai Gas Transportation Module (GTM) — modul tabung bertekanan di atas truk — ke lokasi pelanggan, lalu diturunkan tekanannya sebelum masuk ke mesin gas. Gaslink dari PGN Gagas memasok CNG lewat rantai ini ke pelanggan industri dan komersial di luar jangkauan pipa gas; kesesuaiannya untuk kebutuhan genset dinilai per kasus lewat konsultasi.

### Apakah listrik dari genset gas lebih rendah emisinya dibanding diesel?
Secara kandungan energi bahan bakar, gas bumi melepas sekitar 56.100 kg CO2 per TJ, lebih rendah dari solar yang sekitar 74.100 kg CO2 per TJ (IPCC) — selisih sekitar seperempatnya. Setelah memperhitungkan efisiensi mesin, genset gas biasanya menghasilkan CO2 per kWh listrik lebih rendah daripada genset diesel, meski besarnya bergantung pada efisiensi aktual, beban, dan perawatan masing-masing unit — bukan angka tunggal yang berlaku universal untuk semua kasus.

## Data tables for the writer

### Genset Gas (Gas Engine) vs Genset Diesel — untuk captive power pabrik

| Aspek | Genset Gas (Gas Engine) | Genset Diesel |
|---|---|---|
| Bahan bakar & pasokan | Gas bumi/CNG; perlu pasokan stabil — via pipa, atau CNG *beyond-pipeline* (mis. Gaslink) untuk lokasi tanpa pipa | Solar; tersedia luas lewat SPBU/pengiriman tangki, tapi harga & pasokan bisa fluktuatif di lokasi terpencil |
| Efisiensi listrik | Umumnya ~35–45% (unit modern kelas atas bisa mendekati 46%) | Umumnya ~30–40% pada operasi riil; puncak ~40–46% pada unit industri besar di beban optimal |
| Indikasi biaya listrik/kWh | Bergantung harga gas (USD/MMBTU), efisiensi mesin, dan jam operasi — tak bisa digeneralisasi ke satu angka | Kisaran lapangan lokasi terpencil: ~IDR 4.500–9.000+/kWh (sumber vendor, bukan data resmi) |
| Emisi CO2 (basis energi bahan bakar) | ~56.100 kg CO2/TJ bahan bakar (IPCC) | ~74.100 kg CO2/TJ bahan bakar (IPCC) — ~25% lebih tinggi dari gas |
| Kebisingan | Umumnya relatif lebih halus pada beban stabil (spark-ignited); tetap bervariasi per model & instalasi | Cenderung lebih bising dan bergetar, khas mesin kompresi-tinggi |
| Perawatan | Interval servis berpotensi lebih jarang bila gas berkualitas baik (methane number tinggi); jaringan teknisi/spare part gas engine belum semerata diesel di semua daerah Indonesia | Ekosistem servis & suku cadang paling luas tersedia di Indonesia |
| Keandalan pasokan bahan bakar | Bergantung kontinuitas pasokan gas/CNG dari penyedia — perlu kepastian jadwal & volume pengiriman | Diesel bisa distok di tangki lokasi — fleksibel untuk kebutuhan cadangan jangka pendek |
| Paling cocok untuk | Beban dasar (*baseload*) besar & konsisten, jam nyala panjang, lokasi terjangkau pasokan CNG | Cadangan (*backup*) sesekali, beban kecil/fluktuatif, atau lokasi belum terjangkau gas |

*Catatan: baris biaya & emisi adalah rentang indikatif dengan asumsi tercantum — bukan janji angka pasti untuk semua lokasi/unit.*

### Dedicated Gas Engine vs Dual-Fuel (retrofit diesel→gas)

| Aspek | Dedicated Gas Engine | Dual-Fuel (retrofit) |
|---|---|---|
| Desain | Dirancang khusus untuk gas sejak awal (*spark-ignited*) | Mesin diesel eksisting dimodifikasi; solar tetap jadi pemicu bakar (*pilot injection*) |
| Substitusi gas | Bisa mendekati 100% gas | Bervariasi menurut beban — mendekati 0% saat idle, naik ke ~60–80% pada beban tinggi |
| Investasi awal | Umumnya lebih tinggi (unit baru) | Lebih rendah — memanfaatkan genset diesel yang sudah dimiliki |
| Paling cocok untuk | Captive power baru (*greenfield*) dengan beban gas dominan & konsisten | Pemilik genset diesel eksisting yang ingin menekan konsumsi solar bertahap tanpa mengganti unit |
| Ketergantungan pasokan gas | Tinggi — gas jadi satu-satunya bahan bakar utama | Lebih fleksibel — bisa kembali ke 100% solar bila pasokan gas terganggu |

## Edge cases & nuance

- **Captive power Indonesia mayoritas masih batu bara** (terutama smelter), bukan gas — jangan menyiratkan gas sebagai bahan bakar captive power yang dominan/arus utama; posisikan sebagai satu opsi yang lebih bersih dari diesel, di antara beberapa opsi lain (termasuk batu bara di ujung yang kurang bersih, dan renewable/BESS di ujung yang lebih bersih).
- **Dorongan kebijakan pemerintah untuk captive power justru mengarah ke energi terbarukan (JETP), bukan promosi gas bumi** — jadi framing paling jujur: gas bumi adalah *jembatan transisi* yang lebih bersih dari diesel/batu bara, bukan solusi dekarbonisasi akhir. Ini pas untuk H2 #5 ("kapan genset gas BELUM masuk akal") — kalau prioritas pembaca adalah dekarbonisasi maksimal atau ada insentif kuat untuk renewable/BESS, itu perlu disebut jujur sebagai alternatif.
- **Efisiensi mesin yang lebih tinggi tidak otomatis berarti listrik lebih murah.** Bila harga gas per MMBTU tinggi atau pasokan CNG tidak stabil di lokasi tertentu, total biaya kepemilikan bisa saja tidak kalah — bahkan lebih mahal — dibanding diesel. Sebaliknya, untuk beban kecil/fluktuatif, genset diesel cadangan atau opsi dual-fuel parsial umumnya lebih ekonomis daripada investasi *dedicated gas engine* baru.
- **Dual-fuel bukan "otomatis hemat gas maksimal".** Pada beban rendah, substitusi gas turun signifikan (mendekati 0% saat idle) — penghematan riil sangat bergantung pada pola operasi pabrik (jam nyala & profil beban), bukan asumsi substitusi konstan sepanjang waktu operasi.
- **Kualitas gas (methane number) bisa bervariasi menurut sumber/lapangan gas** — kesesuaian mesin gas idealnya dicek per lokasi/pasokan aktual, bukan diasumsikan seragam secara nasional.
- **"Sektor pembangkit listrik" yang pernah disebut media (Kontan, 2018) kemungkinan besar berarti Gaslink menjual CNG kepada pelanggan yang mengoperasikan genset/pembangkitnya sendiri** — ini justru konsisten dengan premis artikel (gas bisa jadi bahan bakar genset), tapi tetap harus dibingkai sebagai preseden historis/kemungkinan aplikasi, bukan sebagai layanan resmi yang aktif dipasarkan Gaslink hari ini (halaman produk 2026 tidak menyebutnya).

## Flags (open factual risk)

- ⚠️ **Flag #1 — Kelayakan HGBT untuk captive power via CNG belum terkonfirmasi.** Kepmen ESDM 77.K/2025 & Permen ESDM 10/2020 mengatur harga gas bagi PLN/IPP (pembangkit "bagi kepentingan umum") lewat pipa; skema HGBT 7-industri (USD 6,5–7/MMBTU) juga untuk pengguna industri tertentu via pipa. **Tidak ada** skema yang eksplisit disebut mencakup pelanggan captive power yang membeli CNG *beyond-pipeline* dari Gaslink. → Rekomendasi: sebut HGBT sebagai konteks kebijakan harga gas nasional saja; jangan menyiratkan pelanggan Gaslink otomatis mendapat harga HGBT untuk genset-nya.
- ⚠️ **Flag #2 — Angka biaya diesel IDR 4.500–9.000+/kWh berasal dari artikel vendor BESS** (protk.co.id), bukan data resmi ESDM/BPS/PLN, tanpa metodologi tertulis & tanggal publikasi yang jelas. → Rekomendasi: gunakan sebagai "kisaran lapangan yang beredar di industri," bukan rata-rata nasional resmi; jangan mengklaimnya sebagai statistik pemerintah.
- ⚠️ **Flag #3 — Perbandingan emisi CO2 gas vs diesel per kWh listrik dalam dossier ini adalah angka turunan** (faktor emisi bahan bakar IPCC dibagi asumsi efisiensi mesin), bukan satu angka resmi "gas X% lebih rendah dari diesel." → Rekomendasi: sajikan sebagai contoh perhitungan bertahap dengan asumsi terlihat (harga/efisiensi dicantumkan), bukan persentase tunggal berdiri sendiri.
- ⚠️ **Flag #4 — Belum ada konfirmasi bahwa Gaslink secara resmi memasarkan CNG untuk aplikasi genset/captive power.** Halaman gagas.co.id/gaslink (fetch langsung 2026) hanya menyebut manufaktur, RS, Horeka, ritel, laundry, UMKM/IKM — tanpa kata genset/pembangkit/captive power. Satu artikel pers 2018 (Kontan) pernah menyinggung "sektor pembangkit listrik" sebagai segmen yang dilalui rute distribusi Gaslink truck kala itu. → Rekomendasi: bingkai sebagai "aplikasi yang dimungkinkan secara teknis, konsultasikan kelayakan pasokan ke Gaslink" — persis arahan brief — jangan klaim ini sudah jadi layanan resmi yang dipasarkan aktif.
- ⚠️ **Flag #5 (PENTING) — PT Gagas Energi Indonesia memiliki anak usaha PT Widar Mandripa Nusantara (WMN, berdiri 2015)** yang benar bergerak di penyediaan energi termal & **listrik** berbasis gas bumi — bisnis yang secara substansi berbeda dari distribusi CNG Gaslink. Ditemukan lewat situs WMN, tesis UGM soal kerangka *corporate parenting* GEI–WMN, dan akun X resmi @PGNGagas (2018). **WMN tidak tercantum di `company_profile.md`.** → Rekomendasi: **jangan sebut atau singgung WMN sama sekali** di artikel ini — mencampurnya akan bertentangan langsung dengan framing guard "Gaslink memasok gas, bukan produsen listrik." Bila ada minat mengeksplorasi sudut "grup Gagas juga punya unit pembangkitan," itu topik artikel terpisah yang perlu riset & persetujuan tersendiri.
- ⚠️ **Flag #6 — Klaim "captive power Indonesia >161 TWh pada 2025"** (muncul lewat ringkasan mesin pencari atas lembar fakta IESR) **tidak bisa diverifikasi langsung** — fetch halaman iesr.or.id diblokir (403 Forbidden) pada run ini. → Rekomendasi: jangan pakai angka ini sebagai fakta terverifikasi tanpa pengecekan ulang lewat sumber lain.
- ⚠️ **Flag #7 — Tahun persis peresmian PLTMG Nabire (20 MW) & Jayapura (50 MW) tidak eksplisit** pada halaman galeri foto ESDM yang berhasil di-fetch (hanya tanggal "20/12" tanpa tahun; berdasar tokoh yang hadir kemungkinan besar era 2016–2019). → Rekomendasi: sebut tanpa tahun presisi, atau cek ulang sebelum menulisnya sebagai fakta bertanggal.
- ⚠️ **Flag #8 — Spesifikasi teknis presisi GTM** (tekanan kerja, kapasitas per modul/trailer, jumlah tabung) **tidak tersedia** di `company_profile.md` maupun sumber yang berhasil diverifikasi run ini (dua dokumen PDF teknis yang dicoba gagal diekstrak penuh). → Rekomendasi: jangan mengarang angka tekanan/kapasitas GTM; jelaskan secara konseptual saja (modul tabung bertekanan di atas truk, dari Mother Station ke lokasi pelanggan).
- ⚠️ **Flag #9 — Rentang efisiensi genset diesel (30–40% operasi riil, puncak 40–46%) dan sebagian angka dual-fuel (60–80% substitusi)** berasal dari triangulasi beberapa sumber teknis sekunder (situs produsen/distributor genset, materi vendor retrofit) yang terkumpul via pencarian, bukan satu lembar spesifikasi/standar tunggal yang berhasil di-fetch utuh. Angka-angka ini konsisten lintas sumber independen (confidence medium), tapi bukan dari satu otoritas tunggal. → Rekomendasi: tulis sebagai rentang umum industri ("umumnya", "kisaran"), bukan janji performa merek/unit tertentu — sejalan dengan aturan vendor-neutral brief.

## Definition snippet draft (40–60 words)

> *Captive power* adalah pembangkit listrik yang dibangun dan dioperasikan sendiri oleh perusahaan untuk memenuhi kebutuhan listriknya, tanpa terhubung ke jaringan PLN — definisi yang dipakai Kementerian ESDM. Genset gas (*gas engine*) adalah mesin pembakaran-dalam yang memakai gas bumi, bukan solar, sebagai bahan bakar untuk memutar generator; efisiensi listriknya umumnya berkisar 35–45%.

## Notes for visuals (feed the writer's {IMAGE_NN} placeholders)

- **Konsep 1 — Diagram alur pasokan**: infografis linear "Mother Station (kompresi CNG) → Gas Transportation Module/truk modul tabung → Pressure Reduction Station di lokasi pelanggan → gas engine/genset → listrik ke pabrik." Gaya ikonik-teknis, palet warna korporat PGN Gagas (biru/hijau), teks Bahasa Indonesia singkat di tiap tahap.
- **Konsep 2 — Kartu perbandingan gas vs diesel**: dua kartu berdampingan (hijau muda untuk gas, abu-abu untuk diesel) merangkum 4–5 baris kunci dari tabel perbandingan (efisiensi, indikasi biaya, emisi, kesesuaian beban) — cocok untuk *featured snippet*/tabel yang mudah di-screenshot dan dibagikan di chat internal pembaca B2B.
- **Konsep 3 — Grafik beban vs substitusi gas (dual-fuel)**: kurva sederhana sumbu-X "persentase beban mesin (idle → 100%)" vs sumbu-Y "persentase substitusi gas (0% → 60–80%)", dengan anotasi "substitusi naik seiring beban." Membantu pembaca memahami kenapa dual-fuel bukan "hemat gas otomatis."
