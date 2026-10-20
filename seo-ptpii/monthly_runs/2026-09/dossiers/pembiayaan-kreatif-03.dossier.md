---
brief_id: "pembiayaan-kreatif-03"
researcher_run_date: "2026-09-21"
sources_cited: 16
flags: 10
---

# Research Dossier: Pembiayaan Kreatif per Sektor — Instrumen Mana yang Cocok

## TL;DR for the writer

- **Semua tujuh sektor kandidat yang diminta brief dikonfirmasi sebagai kewenangan daerah** — air minum/SPAM, air limbah, dan jalan kabupaten/kota (ketiganya di bawah bidang **Pekerjaan Umum dan Penataan Ruang**, urusan wajib pelayanan dasar), persampahan (bidang **Lingkungan Hidup**, wajib non-pelayanan dasar), rumah sakit daerah (bidang **Kesehatan**, wajib pelayanan dasar), penerangan jalan umum/APJ (kewenangan kabupaten/kota — dikonfirmasi via Perda, lihat Core Fact #6), dan pasar (bidang **Perdagangan** — tapi ini **urusan pilihan**, bukan wajib). Dasar: **UU No. 23 Tahun 2014** tentang Pemerintahan Daerah, Pasal 12 (dikonfirmasi 2026-09-21).
- **Klaim tarif air minum di bawah pemulihan biaya — bersumber dan lebih parah dari dugaan brief**: data resmi Kementerian PU (dipublikasikan **13 Maret 2025**) mencatat dari **394 BUMD Air Minum** nasional (258 berkinerja sehat, 96 kurang sehat, 40 sakit), **hanya 19 yang memenuhi kriteria kerja sama dengan swasta** — karena syaratnya bukan cuma "sehat" tapi juga tarif *full cost recovery* (FCR) tiga tahun berturut-turut. Artinya **kurang dari 5% BUMD Air Minum nasional** yang tarifnya realistis untuk KPBU *user charge* murni. Data pendukung tahun 2023 (BPPSPAM, dikutip tidak langsung): 147 dari 389 BUMDAM (37,8%) sudah FCR, 242 (62,2%) belum.
- **Jalan daerah non-tol adalah kasus "boleh secara hukum, jarang secara praktik" yang paling jelas**: Perpres No. 38 Tahun 2015 Pasal 5 ayat (2) huruf b menyebut "infrastruktur jalan" secara umum tanpa memisahkan tol/non-tol — tetapi tanpa mekanisme tarif (jalan kabupaten/kota lazimnya tidak ditol), KPBU jalan pada praktiknya nyaris selalu berupa jalan tol. Jalan daerah biasa realistisnya tetap memakai pengadaan konvensional + pinjaman daerah.
- **Persampahan tidak menghilangkan beban APBD, hanya memindahkan bentuknya**: contoh TPPAS Regional Legok Nangka — *tipping fee* Rp 386.000/ton disepakati **Oktober 2019** (30% disubsidi Pemprov Jawa Barat, 70% ditanggung enam kabupaten/kota peserta dari APBD masing-masing), tetapi proyek **belum beroperasi per 28 Juni 2024** (nilai investasi sekitar Rp 4 triliun, target rampung 2028–2029) — jeda hampir lima tahun antara kesepakatan pembayaran dan konstruksi berjalan.
- **⚠️ Penting — instruksi tugas mengoreksi brief**: brief dan cache riset bulan ini mencantumkan angka Kabupaten Madiun "7.459 titik PJU sepanjang 299,7 km jalan" (DJPK, 26 Mei 2026) dan dossier bulan ini untuk `pembiayaan-kreatif-01` sudah memakainya. **Dossier ini SENGAJA TIDAK memakai angka tersebut** karena instruksi tugas eksplisit menyatakan angka itu tidak dapat diverifikasi terhadap `company_profile.md` (yang hanya mencantumkan status proyek, tanggal, dan "sekitar Rp 100 miliar" — tanpa jumlah titik atau panjang jalan). Tulis Kabupaten Madiun hanya dengan fakta yang ada di `company_profile.md`. Lihat Flags.
- WebSearch calls used this run: **6/6** (tepat pada batas anggaran). Selebihnya WebFetch ke sumber primer (tidak dibatasi) — termasuk dua percobaan PDF yang gagal di-parse langsung dan satu Perda yang berhasil dibaca.

## Core facts (verified)

### 1. Klasifikasi urusan pemerintahan konkuren — dasar hukum pembagi kewenangan daerah
> **Claim**: UU No. 23 Tahun 2014 tentang Pemerintahan Daerah membagi urusan pemerintahan konkuren menjadi tiga kelompok besar, yang menentukan sektor mana yang benar-benar kewenangan daerah.
> **Number/specific**: Pasal 12 ayat (1) — **Urusan Pemerintahan Wajib yang berkaitan dengan Pelayanan Dasar**: pendidikan, kesehatan, **pekerjaan umum dan penataan ruang**, perumahan rakyat dan kawasan permukiman, ketenteraman-ketertiban umum dan pelindungan masyarakat, serta sosial. Ayat (2) — **Urusan Pemerintahan Wajib yang tidak berkaitan dengan Pelayanan Dasar**: 18 bidang termasuk **lingkungan hidup** dan perhubungan. Ayat (3) — **Urusan Pemerintahan Pilihan**: kelautan-perikanan, pariwisata, pertanian, kehutanan, energi dan sumber daya mineral, **perdagangan**, perindustrian, transmigrasi.
> **Source**: pasal.id/peraturan/uu/uu-no-23-tahun-2014/pasal-12 (ekstraksi pihak ketiga atas teks UU, diakses 2026-09-21)
> **Confidence**: high — struktur tiga kelompok ini konsisten dengan kerangka UU 23/2014 yang dikenal luas dalam literatur pemerintahan daerah.
> **Status**: [CONFIRMED] (dengan catatan sumber pihak ketiga; PDF resmi UU 23/2014 tidak berhasil di-OCR dalam sesi ini — lihat Flags)

### 2. Air minum (SPAM) dan air limbah — wajib pelayanan dasar, bidang Pekerjaan Umum
> **Claim**: SPAM dan pengelolaan air limbah adalah urusan wajib pelayanan dasar di bawah bidang Pekerjaan Umum dan Penataan Ruang, sehingga tunduk pada Standar Pelayanan Minimal (SPM) yang ditetapkan Pemerintah Pusat.
> **Number/specific**: Pasal 12 ayat (1) huruf c menempatkan "pekerjaan umum dan penataan ruang" sebagai urusan wajib pelayanan dasar. Perpres No. 38 Tahun 2015 Pasal 5 ayat (2) memisahkan air limbah menjadi dua kategori sektor KPBU tersendiri: huruf e "infrastruktur sistem pengelolaan air limbah **terpusat**" dan huruf f "…air limbah **setempat**" — keduanya berbeda dari huruf d "infrastruktur air minum".
> **Source**: pasal.id/peraturan/uu/uu-no-23-tahun-2014/pasal-12 dan pasal.id/peraturan/perpres/perpres-no-38-tahun-2015/pasal-5 (diakses 2026-09-21)
> **Confidence**: high untuk klasifikasi wajib-dasar; medium-high untuk rincian huruf Pasal 5 (ekstraksi pihak ketiga).
> **Status**: [CONFIRMED]

### 3. Persampahan — wajib non-pelayanan dasar, bidang Lingkungan Hidup
> **Claim**: Persampahan bukan bagian dari "enam urusan wajib pelayanan dasar", melainkan urusan wajib di luar pelayanan dasar di bawah bidang Lingkungan Hidup.
> **Number/specific**: Pasal 12 ayat (2) mencantumkan "lingkungan hidup" sebagai salah satu dari 18 bidang wajib non-pelayanan-dasar. Perpres No. 38 Tahun 2015 Pasal 5 ayat (2) huruf g menamainya sebagai "infrastruktur sistem pengelolaan persampahan" — kategori sektor KPBU tersendiri.
> **Source**: pasal.id/peraturan/uu/uu-no-23-tahun-2014/pasal-12 dan pasal.id/peraturan/perpres/perpres-no-38-tahun-2015/pasal-5 (diakses 2026-09-21)
> **Confidence**: high
> **Status**: [CONFIRMED]
> **Nuansa untuk penulis**: karena bukan pelayanan dasar dengan SPM seketat kesehatan/air minum, ambang "kewajiban layanan minimum" persampahan secara politik lebih longgar — salah satu alasan negosiasi tipping fee antardaerah bisa berlarut-larut (lihat Core Fact #11).

### 4. Jalan — wajib pelayanan dasar, dengan pembagian berjenjang pusat/provinsi/kabupaten-kota
> **Claim**: Jalan termasuk urusan wajib pelayanan dasar di bawah Pekerjaan Umum dan Penataan Ruang, dengan kewenangan dibagi menurut status jalan (nasional/tol, provinsi, kabupaten/kota).
> **Number/specific**: Sama seperti Core Fact #2, "pekerjaan umum dan penataan ruang" adalah urusan wajib pelayanan dasar (Pasal 12 ayat 1 huruf c). Pembagian konkuren jalan mengikuti pola umum status jalan: jalan kabupaten/kota adalah kewenangan pemerintah kabupaten/kota, jalan provinsi kewenangan provinsi, jalan nasional dan jalan tol kewenangan pusat.
> **Source**: pasal.id/peraturan/uu/uu-no-23-tahun-2014/pasal-12 (diakses 2026-09-21); pembagian berjenjang jalan menurut status adalah kerangka umum pengelolaan jalan di Indonesia, bukan kutipan pasal tunggal.
> **Confidence**: high untuk kategori bidang; medium-high untuk pembagian berjenjang (kerangka umum, bukan kutipan pasal spesifik dalam sesi ini)
> **Status**: [CONFIRMED]

### 5. Perpres No. 38 Tahun 2015 Pasal 5 — daftar 19 sektor infrastruktur KPBU (payung hukum utama)
> **Claim**: Perpres No. 38 Tahun 2015 tentang KPBU dalam Penyediaan Infrastruktur mencantumkan daftar sektor yang jauh lebih luas daripada daftar praktis di portal Kemenkeu, dan tidak memisahkan jalan tol/non-tol.
> **Number/specific**: Pasal 5 ayat (2) — 19 kategori: a. transportasi; b. **jalan** (tanpa pemisahan tol/non-tol dalam teks); c. sumber daya air dan irigasi; d. air minum; e. air limbah terpusat; f. air limbah setempat; g. persampahan; h. telekomunikasi dan informatika; i. ketenagalistrikan; j. minyak dan gas bumi dan energi terbarukan; k. konservasi energi; l. fasilitas perkotaan; m. fasilitas pendidikan; n. sarana-prasarana olahraga dan kesenian; o. kawasan; p. pariwisata; q. kesehatan; r. lembaga pemasyarakatan; s. perumahan rakyat.
> **Source**: pasal.id/peraturan/perpres/perpres-no-38-tahun-2015/pasal-5 (diakses 2026-09-21); status Perpres 38/2015 "Berlaku" dikonfirmasi `knowledge_base/company_profile.md`
> **Confidence**: high untuk daftar itu sendiri (konsisten dengan kerangka Perpres 38/2015 yang dikenal luas); medium untuk memastikan tidak ada frasa "jalan tol dan jalan non tol" tersembunyi di ayat/penjelasan lain yang tidak terekstraksi sesi ini.
> **Status**: [CONFIRMED] (dengan catatan sumber pihak ektiga; PDF resmi tidak diverifikasi ulang kata-per-kata)
> **Implikasi penting untuk H2 #4/#5**: karena Pasal 5 tidak memisahkan jalan tol/non-tol, "infrastruktur jalan" **secara hukum** mencakup jalan kabupaten/kota. Namun daftar praktis di halaman persyaratan proyek Kemenkeu (Core Fact #7) justru mencontohkan "Jalan Tol" — bukan "jalan" secara umum. Kesenjangan ini adalah bukti bahwa kelayakan hukum ≠ kelaziman praktik (lihat Edge Cases).

### 6. Penerangan Jalan Umum — kewenangan kabupaten/kota, dikonfirmasi via regulasi daerah dan preseden praktik
> **Claim**: Penerangan Jalan Umum (PJU) adalah urusan/kewenangan pemerintah kabupaten/kota, meski tidak muncul sebagai kategori tersendiri dalam daftar 19 sektor Pasal 5 Perpres 38/2015.
> **Number/specific**: Peraturan Daerah Kota Malang No. 11 Tahun 2015 tentang Penerangan Jalan mengutip UU No. 23 Tahun 2014 sebagai dasar hukum dan memposisikan penerangan jalan umum sebagai urusan pemerintahan yang menjadi kewenangan pemerintah daerah kabupaten/kota. Dua proyek KPBU APJ yang dijamin PT PII — Kabupaten Madiun dan Kabupaten Lombok Barat (lihat Core Fact #12–13) — sama-sama distrukturkan dengan pemerintah **kabupaten** sebagai pihak yang menandatangani perjanjian kerja sama, memperkuat pola ini secara praktik.
> **Source**: jatim.bpk.go.id — Salinan Perda Kota Malang No. 11 Tahun 2015 tentang Penerangan Jalan (diakses 2026-09-21); `knowledge_base/company_profile.md` untuk preseden Madiun/Lombok Barat
> **Confidence**: medium-high untuk status kewenangan kabupaten/kota itu sendiri (dikuatkan dua jalur independen — regulasi daerah + preseden praktik); **medium/rendah untuk bidang urusan spesifiknya** — ringkasan Perda menyebut "bidang pekerjaan umum", sementara pencarian lain mengasosiasikan PJU dengan sub-urusan ketenagalistrikan (bidang Energi dan Sumber Daya Mineral, yang justru "urusan pilihan" bukan "wajib") — dua sumber tidak sepenuhnya konvergen soal bidang persisnya, kemungkinan karena PJU memang tidak disebut eksplisit sebagai kategori sendiri di UU 23/2014 maupun Perpres 38/2015 (kemungkinan besar masuk kategori "infrastruktur fasilitas perkotaan", Pasal 5 huruf l — **ini inferensi, bukan kutipan langsung**).
> **Status**: [FLAGGED] untuk bidang spesifik — **rekomendasi**: tulis "PJU adalah kewenangan kabupaten/kota" tanpa mematok nama bidang urusan yang presisi, kecuali diverifikasi lebih lanjut.

### 7. Tiga mekanisme pengembalian investasi KPBU dan ketiadaan ambang nilai minimal formal
> **Claim**: Portal resmi KPBU Kemenkeu menyebut tiga bentuk pengembalian investasi dan kriteria Value for Money, tetapi tidak mencantumkan ambang nilai minimal proyek untuk KPBU skala kecil/daerah.
> **Number/specific**: Tiga mekanisme: **Pembayaran Ketersediaan Layanan** (Availability Payment), **Pembayaran Pengguna Layanan** (user charge/tarif), dan **Pengembalian Investasi dalam Bentuk Lainnya**. Kriteria pemakaian KPBU: "Skema KPBU sebaiknya digunakan jika KPBU memberikan suatu nilai (*value for money*) yang lebih baik dari skema pengadaan konvensional." **Tidak ditemukan** ambang nilai investasi minimal atau ketentuan skala proyek pada halaman ini.
> **Source**: kpbu.kemenkeu.go.id/read/16-13/pjpk/persyaratan-proyek (WebFetch langsung, diakses 2026-09-21)
> **Confidence**: high — dikonfirmasi ganda: riset strategist bulan ini (2026-09-17) dan WebFetch independen dossier ini (2026-09-21) sama-sama tidak menemukan ambang nilai apa pun di halaman resmi ini.
> **Status**: [CONFIRMED] — **penting untuk H2 #2/FAQ**: karena tidak ada ambang formal, "KPBU skala kecil" adalah pertimbangan ekonomis (biaya penyiapan transaksi vs manfaat), bukan aturan tertulis. Sajikan sebagai *rule of thumb* berlabel jelas, sesuai instruksi brief — jangan mengarang angka rupiah.

### 8. Kinerja dan tarif BUMD Air Minum nasional — data Maret 2025 (sumber utama untuk klaim SPAM)
> **Claim**: Mayoritas BUMD Air Minum di Indonesia belum memenuhi syarat tarif yang layak untuk kerja sama dengan swasta.
> **Number/specific**: Per publikasi Kementerian PU **13 Maret 2025**: dari **394 BUMD Air Minum** nasional, **258 berkinerja sehat**, 96 kurang sehat, dan 40 sakit. Kerja sama dengan swasta mensyaratkan BUMD berkinerja sehat **dan** menerapkan tarif *full cost recovery* (FCR) selama **tiga tahun berturut-turut** — dari 258 BUMD sehat, **hanya 19 yang memenuhi kriteria ini** (≈ 4,8% dari total 394, atau ≈ 7,4% dari yang sehat).
> **Source**: pu.go.id/berita/kementerian-pu-dorong-pemda-kerja-sama-dengan-swasta-untuk-percepat-akses-air-bersih (WebFetch langsung, dipublikasikan 13 Maret 2025, diakses 2026-09-21)
> **Confidence**: high — sumber primer Kementerian PU, tanggal publikasi jelas, angka dikutip langsung dari halaman resmi.
> **Status**: [CONFIRMED] — **ini angka andalan artikel untuk baris SPAM di matriks H2 #2**. Selalu cantumkan "per Maret 2025".

### 9. Tarif Full Cost Recovery — data pembanding tahun 2023 (BPPSPAM)
> **Claim**: Data tahun sebelumnya (2023) menunjukkan pola serupa: mayoritas BUMD Air Minum belum FCR.
> **Number/specific**: Hingga 2023, penerapan tarif FCR baru mencapai **147 dari 389 BUMDAM (37,8%)**; sisanya **242 (62,2%)** masih menjual air di bawah Biaya Pokok Pelayanan (BPP)/non-FCR.
> **Source**: ringkasan hasil pencarian yang mengutip data BPPSPAM 2023 (diakses 2026-09-21) — **tidak berhasil di-WebFetch langsung ke laporan asal** dalam sesi ini (bukan kutipan primer, melainkan sintesis mesin pencari).
> **Confidence**: medium — konsisten arah dan besaran dengan Core Fact #8 (data 2025), tapi sumber asalnya tidak terverifikasi langsung.
> **Status**: [FLAGGED] — boleh dipakai sebagai titik data pembanding berlabel tahun eksplisit ("hingga 2023"), tapi jangan jadikan angka andalan tunggal; utamakan Core Fact #8 (2025, terverifikasi langsung) sebagai rujukan utama.

### 10. Regulasi konsolidasi Dukungan Kelayakan (VGF), Availability Payment, dan Penjaminan Infrastruktur
> **Claim**: Satu PMK tunggal saat ini mengatur ketiga instrumen dukungan pemerintah yang relevan untuk proyek daerah — penjaminan, VGF, dan AP.
> **Number/specific**: **PMK No. 68 Tahun 2024** — *Dukungan Pemerintah untuk Pembiayaan Infrastruktur melalui Skema KPBU dan/atau Skema Pembiayaan Lainnya* — ditetapkan 24 September 2024, **berlaku 18 Oktober 2024**, mengonsolidasikan Penjaminan Infrastruktur, Dukungan Kelayakan (VGF), Availability Payment, dan Fasilitas Penyiapan Proyek (PDF/Pra-PDF) ke dalam satu peraturan, menggantikan rantai PMK lama (PMK 260/2010 jo. 8/2016, dan rantai VGF/AP/fasilitas penyiapan 2012–2020).
> **Source**: `knowledge_base/company_profile.md` (status diverifikasi 2026-08-12); dikonfirmasi ulang oleh dua dossier bulan ini (`pembiayaan-kreatif-01`, `-02`, 2026-09-17)
> **Confidence**: high (sumber internal pre-approved, dikuatkan berulang)
> **Status**: [CONFIRMED] — **catatan teknis**: PDF resmi PMK 68/2024 di JDIH adalah hasil pindai tanpa lapisan teks (tidak bisa di-OCR) — dossier ini tidak mengutip nomor pasal spesifik dari PMK tersebut untuk menghindari kutipan yang tidak dapat diverifikasi kata-per-kata. Jangan mengklaim nomor pasal spesifik PMK 68/2024 tanpa verifikasi tambahan.

### 11. TPPAS Regional Legok Nangka — struktur tipping fee persampahan regional
> **Claim**: Skema pembayaran KPBU persampahan regional Jawa Barat menunjukkan bahwa "pembiayaan kreatif" untuk sektor ini tetap bersandar pada APBD peserta, bukan menghilangkannya.
> **Number/specific**: Tipping fee (biaya layanan pengolahan sampah) disepakati sebesar **Rp 386.000 per ton** pada **Oktober 2019** oleh enam kabupaten/kota peserta (Kota Bandung, Kabupaten Bandung, Kabupaten Garut, Kabupaten Sumedang, Kabupaten Bandung Barat, Kota Cimahi). Pemerintah **Provinsi Jawa Barat mensubsidi 30%** (Rp 115.800/ton); **70% sisanya (Rp 270.200/ton) ditanggung pemerintah kabupaten/kota peserta** dari APBD masing-masing.
> **Source**: jabar.antaranews.com/berita/114658/akhirnya-tipping-fee-tppas-regional-legok-nangka-disepakati (WebFetch langsung, dipublikasikan 9 Oktober 2019, diakses 2026-09-21)
> **Confidence**: high untuk angka dan tanggal kesepakatan; **tidak diverifikasi apakah tarif ini masih berlaku tanpa perubahan hingga 2026** (lihat Flags — kemungkinan sudah dieskalasi/dinegosiasi ulang mengingat jeda panjang sebelum konstruksi, Core Fact #12).
> **Status**: [CONFIRMED] untuk kesepakatan 2019; [FLAGGED] untuk keberlakuannya saat ini.
> **Catatan penting**: sumber menyebutkan kesepakatan ini dicapai dalam pertemuan pemerintah provinsi dengan enam kepala daerah — **jangan menyebut nama pejabat siapa pun**; tulis institusional ("Pemerintah Provinsi Jawa Barat dan enam kabupaten/kota peserta").

### 12. TPPAS Regional Legok Nangka — status proyek dan nilai investasi terkini yang teridentifikasi
> **Claim**: Meski tipping fee sudah disepakati sejak 2019, proyek belum beroperasi hingga pertengahan 2024 — ilustrasi jeda panjang antara kesepakatan pembayaran dan realisasi konstruksi pada sektor persampahan.
> **Number/specific**: Artikel bertanggal **28 Juni 2024** menyebut nilai investasi TPPAS Regional Legok Nangka sekitar **Rp 4 triliun**, kapasitas 2.000 ton sampah/hari menghasilkan 40 megawatt listrik, dengan pembangunan fisik "akan segera dimulai" menyusul penandatanganan kerja sama antara Pemerintah Provinsi Jawa Barat dan konsorsium asal Jepang — **target rampung 2028–2029**. Tidak ada indikasi proyek sudah beroperasi komersial pada tanggal artikel tersebut.
> **Source**: detik.com/jabar/berita/d-7413355/legok-nangka-tempat-pengolahan-sampah-bernilai-rp-4-triliun (WebFetch langsung, dipublikasikan 28 Juni 2024, diakses 2026-09-21)
> **Confidence**: medium-high — sumber media ekonomi/berita kredibel tunggal untuk titik data ini; tidak ada sumber kedua yang mengonfirmasi independen dalam sesi ini, dan tidak ditemukan pembaruan status yang lebih baru dari Juni 2024 dalam anggaran riset yang tersedia.
> **Status**: [CONFIRMED] dengan pembatasan waktu eksplisit ("per Juni 2024") — **jangan menyatakan proyek ini sudah beroperasi** tanpa sumber yang lebih baru. Artikel PT PII tidak disebutkan dalam sumber ini — **jangan mengklaim status penjaminan PT PII atas fase Legok Nangka yang dilaporkan tahun 2024 ini**; gunakan hanya status portofolio yang sudah tertulis di `company_profile.md` (lihat Core Fact #14).

### 13. KPBU Penerangan Jalan Umum Kabupaten Madiun — fakta yang disetujui untuk dossier ini
> **Claim**: Kabupaten Madiun adalah proyek KPBU APJ pertama di Indonesia dan dijamin PT PII.
> **Number/specific**: Proyek KPBU Penerangan Jalan Umum (APJ) Kabupaten Madiun, Jawa Timur — **proyek KPBU APJ pertama di Indonesia**. PT PII menandatangani Perjanjian Penjaminan dan Perjanjian Regres (siaran pers PT PII, **20 September 2022**). Beroperasi komersial **18 Juli 2023**. Nilai investasi berbeda antarsumber — tulis **"sekitar Rp 100 miliar"** atau hilangkan angkanya sama sekali.
> **Source**: `knowledge_base/company_profile.md` (siaran pers PT PII, diverifikasi 2026-08-12)
> **Confidence**: high untuk fakta yang dicantumkan di sini.
> **Status**: [CONFIRMED] — **dengan pembatasan tegas**: dossier ini **TIDAK** memakai angka "7.459 titik PJU sepanjang 299,7 km jalan" yang muncul di brief dan cache riset (bersumber DJPK, 26 Mei 2026), karena instruksi tugas eksplisit menyebut angka ini tidak dapat diverifikasi terhadap `company_profile.md`. **Jangan tambahkan angka titik lampu atau panjang jalan untuk Kabupaten Madiun** — lihat Flags untuk penjelasan lengkap.

### 14. KPBU Penerangan Jalan Umum Kabupaten Lombok Barat dan status PSEL Legok Nangka dalam portofolio PT PII
> **Claim**: PT PII menjamin sedikitnya dua proyek KPBU APJ berskala kabupaten dan satu proyek KPBU persampahan.
> **Number/specific**: **KPBU Penerangan Jalan Umum Kabupaten Lombok Barat**, Nusa Tenggara Barat — Perjanjian Penjaminan dan Perjanjian Regres ditandatangani **12 Oktober 2023** (sumber: portal KPBU Kemenkeu). **PSEL/TPPAS Regional Legok Nangka**, Jawa Barat, tercatat sebagai **satu-satunya proyek KPBU sektor persampahan yang dijamin PT PII** dalam daftar portofolio unggulan resmi — tanpa tanggal penandatanganan atau nilai penjaminan spesifik yang tercantum dalam sumber pre-approved.
> **Source**: `knowledge_base/company_profile.md` (tabel "Portofolio proyek unggulan")
> **Confidence**: high untuk status keberadaan dalam portofolio; **tidak ada tanggal/nilai penjaminan spesifik untuk Legok Nangka pada sumber pre-approved** — jangan mengarang detail penjaminan yang tidak tercantum.
> **Status**: [CONFIRMED] (sumber internal pre-approved)

### 15. Skala portofolio PT PII secara keseluruhan (konteks penutup)
> **Claim**: Skala penjaminan kumulatif PT PII sebagai konteks kredibilitas menutup artikel.
> **Number/specific**: **61 proyek** (38 KPBU + 23 non-KPBU) dengan total **nilai proyek** yang dijamin **> Rp 732 triliun** dan total **nilai penjaminan** (bukan nilai proyek) **Rp 113 triliun**, **per Juni 2026**. Dua angka ini berbeda makna dan tidak boleh dipertukarkan.
> **Source**: `knowledge_base/company_profile.md` / instruksi tugas eksplisit
> **Confidence**: high (sumber pre-approved)
> **Status**: [CONFIRMED] — selalu cantumkan "per Juni 2026" dan jangan mencampur nilai proyek dengan nilai penjaminan.

### 16. Batas pinjaman daerah — konteks untuk opsi "pengadaan konvensional + pinjaman daerah" pada proyek berskala kecil
> **Claim**: Ketika sebuah proyek daerah (mis. jalan kabupaten biasa) tidak layak KPBU, opsi pinjaman daerah tunduk pada dua ambang kuantitatif yang berlaku saat ini.
> **Number/specific**: **PP No. 1 Tahun 2024** (berlaku 2 Januari 2024, mencabut PP No. 56/2018), Pasal 40: sisa Pembiayaan Utang Daerah ditambah pinjaman baru **≤ 75%** dari penerimaan umum APBD tahun sebelumnya, dan **DSCR ≥ 2,5**.
> **Source**: dossier `pembiayaan-kreatif-02` bulan ini (2026-09-17), yang mengutip pasal.id/peraturan/pp/pp-no-1-tahun-2024/pasal-40 dan mengonfirmasi silang peraturan.go.id/peraturan.bpk.go.id
> **Confidence**: high (diverifikasi dossier sejawat bulan ini dari sumber primer)
> **Status**: [CONFIRMED] — dipakai di sini hanya sebagai **konteks singkat** untuk opsi non-KPBU pada sektor kecil (mis. jalan daerah); **jangan membangun ulang** tabel ambang utang daerah secara lengkap — itu wilayah `pembiayaan-kreatif-02`.

## Topic focus + PT PII anchor (from product_matrix.md)

| What to teach (KPBU / penjaminan / project finance) | Facts to state accurately | Where in article | PT PII product to anchor the CTA |
|---|---|---|---|
| Variabel tunggal penentu instrumen: apakah proyek punya arus kas pengguna, dan apakah tarifnya menutup biaya secara politis layak | Tiga hasil: tarif menutup penuh → *user charge*; menutup sebagian → KPBU + Dukungan Kelayakan (VGF, PMK 68/2024); tidak ada arus kas pengguna → Availability Payment dari APBD | H2 #1 (jawaban langsung 40–60 kata) | — (murni edukasi) |
| Matriks sektor × instrumen untuk lima sektor kewenangan daerah | Air minum (mayoritas belum FCR — hanya 19/394 BUMD memenuhi syarat swasta, per Maret 2025), persampahan (tipping fee tetap dari APBD), PJU (Availability Payment murni — preseden Madiun & Lombok Barat), jalan daerah (tanpa tarif, defaultnya pengadaan konvensional), pasar (retribusi/sewa kios — kerja sama pemanfaatan aset sering lebih pas daripada KPBU penuh) | H2 #2 (tabel utama — aset GEO) | — (murni edukasi) |
| Penerangan jalan umum sebagai pintu masuk paling realistis untuk kabupaten | KPBU APJ Kabupaten Madiun — proyek APJ pertama Indonesia, Perjanjian Penjaminan & Regres PT PII 20 September 2022, beroperasi 18 Juli 2023, "sekitar Rp 100 miliar" (TANPA angka titik/km); pola berulang di Kabupaten Lombok Barat (12 Oktober 2023) | H2 #3 | *Aside* 1 kalimat: PT PII menjamin melalui Perjanjian Penjaminan dan Perjanjian Regres — sebagai fakta portofolio, bukan klaim keberhasilan proyek |
| Sektor yang sering salah pasang instrumen | SPAM: tarif jarang menutup biaya penuh; Persampahan: tipping fee tetap dari APBD peserta (Legok Nangka: 70% ditanggung 6 kab/kota, disepakati 2019, belum beroperasi per Juni 2024) | H2 #4 | — |
| Sektor yang sebaiknya tetap APBD | Jalan daerah non-tol tanpa tarif; proyek terlalu kecil untuk menjustifikasi biaya transaksi KPBU (tidak ada ambang formal — ini pertimbangan ekonomis); layanan yang politically infeasible ditagihkan | H2 #5 | — |
| Penutup — pembiayaan kreatif sebagai payung besar termasuk KPBU daerah | Portofolio PT PII: 61 proyek (38 KPBU + 23 non-KPBU), nilai proyek > Rp 732 triliun, nilai penjaminan Rp 113 triliun, **per Juni 2026** | `## Kesimpulan` + CTA | **Pembiayaan Kreatif** |

Reminder: PT PII **menjamin · menerbitkan penjaminan pemerintah · menstrukturkan penjaminan · mendampingi penyiapan transaksi**. PT PII **bukan** pemberi pinjaman, investor, kontraktor, operator, atau regulator — **PT SMI dan PT IIF menyalurkan pembiayaan, PT PII tidak**. PT PII **tidak mengelola/mencairkan Dukungan Kelayakan (VGF)** — itu kewenangan Kementerian Keuangan — dan **tidak membayar Availability Payment** — itu kewajiban PJPK/pemda. PT PII **tidak berada di bawah Danantara**. Maksimal 2–3 self-mention (penutup + satu *aside* di H2 #3). Jangan pernah menjanjikan kepastian pendanaan, dan jangan pernah menyiratkan klaim penjaminan pernah dibayarkan.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **pasal.id — ekstraksi UU No. 23 Tahun 2014 Pasal 12** (diakses 2026-09-21) — *backs*: klasifikasi tiga kelompok urusan pemerintahan konkuren (wajib-dasar, wajib-non-dasar, pilihan) yang menjadi dasar penentuan sektor kewenangan daerah.
2. **Kementerian Pekerjaan Umum — pu.go.id** (dipublikasikan 13 Maret 2025, diakses 2026-09-21) — *backs*: data kinerja 394 BUMD Air Minum nasional dan hanya 19 yang memenuhi syarat kerja sama swasta — bukti utama klaim tarif SPAM di bawah pemulihan biaya.
3. **pasal.id — ekstraksi Perpres No. 38 Tahun 2015 Pasal 5** (diakses 2026-09-21) — *backs*: daftar 19 sektor infrastruktur KPBU, termasuk pemisahan air limbah terpusat/setempat dan tidak adanya pemisahan jalan tol/non-tol.
4. **Kementerian Keuangan — kpbu.kemenkeu.go.id/read/16-13/pjpk/persyaratan-proyek** (WebFetch langsung, diakses 2026-09-21) — *backs*: tiga mekanisme pengembalian investasi KPBU, kriteria Value for Money, dan ketiadaan ambang nilai minimal formal.
5. **JDIH BPK Jawa Timur — Perda Kota Malang No. 11 Tahun 2015 tentang Penerangan Jalan** (diakses 2026-09-21) — *backs*: status Penerangan Jalan Umum sebagai kewenangan kabupaten/kota, berdasar UU No. 23 Tahun 2014.
6. **ANTARA Jawa Barat** (dipublikasikan 9 Oktober 2019, diakses 2026-09-21) dan **detik.com Jabar** (dipublikasikan 28 Juni 2024, diakses 2026-09-21) — *backs*: struktur tipping fee TPPAS Regional Legok Nangka dan jeda panjang antara kesepakatan pembayaran dengan realisasi konstruksi.

Prioritas terpenuhi: regulasi primer (via ekstraksi pasal.id, dengan catatan sumber pihak ketiga) > Kemenkeu/PU resmi > JDIH daerah > media ekonomi kredibel (dengan tanggal jelas).

## FAQ Q&As (8 drafted, Bahasa Indonesia)

### Sektor apa saja yang bisa dibiayai lewat KPBU daerah?
Perpres No. 38 Tahun 2015 mencantumkan 19 kategori infrastruktur yang layak KPBU, tetapi yang benar-benar kewenangan pemerintah daerah — mengikuti pembagian urusan pemerintahan dalam UU No. 23 Tahun 2014 — terbatas pada beberapa sektor: air minum, air limbah, persampahan, jalan kabupaten/kota, penerangan jalan umum, pasar, dan fasilitas kesehatan/sosial skala daerah. Sektor seperti jalan tol dan ketenagalistrikan besar tetap kewenangan pusat.

### Apa bedanya user charge dan Availability Payment?
User charge adalah skema pengembalian investasi lewat tarif yang dibayar langsung pengguna layanan, seperti tarif air minum. Availability Payment adalah pembayaran berkala dari pemerintah (APBD untuk proyek daerah) kepada badan usaha atas tersedianya layanan infrastruktur sesuai kualitas yang disepakati — dipakai ketika layanan tidak bisa atau tidak layak ditagihkan langsung ke warga, seperti penerangan jalan umum.

### Instrumen apa yang cocok untuk proyek air minum daerah?
Bergantung pada tarif BUMD Air Minum setempat. Data Kementerian PU per Maret 2025 menunjukkan dari 394 BUMD Air Minum nasional, hanya 19 yang tarifnya sudah mencapai *full cost recovery* tiga tahun berturut-turut — syarat untuk KPBU *user charge* murni. Mayoritas lain butuh KPBU dengan Dukungan Kelayakan (VGF) yang menambal kekurangan tarif, atau tetap mengandalkan hibah/pinjaman daerah untuk perluasan jaringan dasar.

### Mengapa banyak proyek persampahan daerah sulit dibiayai?
Karena pembayarannya bertumpu pada tipping fee yang justru dianggarkan dari APBD pemerintah daerah peserta, bukan langsung dari warga — sehingga "pembiayaan kreatif" di sektor ini mengubah bentuk beban fiskal, bukan menghapusnya. Contoh TPPAS Regional Legok Nangka: tipping fee disepakati sejak Oktober 2019, tapi proyek belum beroperasi per Juni 2024 karena kompleksitas koordinasi antardaerah peserta dan negosiasi pembiayaan.

### Apakah proyek penerangan jalan umum bisa memakai KPBU?
Bisa, dan sudah terbukti berjalan di skala kabupaten dengan skema Availability Payment — karena warga tidak bisa ditagih langsung untuk menyalakan lampu jalan. KPBU Penerangan Jalan Umum Kabupaten Madiun (Jawa Timur), proyek APJ pertama di Indonesia, dijamin PT PII melalui Perjanjian Penjaminan dan Perjanjian Regres yang ditandatangani 20 September 2022 dan beroperasi komersial 18 Juli 2023; pola serupa berulang di Kabupaten Lombok Barat pada Oktober 2023.

### Berapa skala proyek minimal agar KPBU daerah masuk akal?
Tidak ada ambang nilai investasi minimal yang diatur secara formal oleh Kementerian Keuangan untuk proyek KPBU. Batasan praktisnya adalah pertimbangan biaya-manfaat: biaya penyiapan transaksi KPBU (studi kelayakan, dokumen lelang, pendampingan) relatif tetap besarnya, sehingga proyek yang terlalu kecil sering kali lebih murah dan lebih cepat dikerjakan lewat pengadaan konvensional dibanding memaksakan struktur KPBU penuh.

### Apakah kerja sama pemanfaatan aset termasuk pembiayaan kreatif?
Ya. Direktorat Jenderal Perimbangan Keuangan mendaftarkan kerja sama pemanfaatan aset sebagai salah satu instrumen pembiayaan kreatif daerah, di luar KPBU formal. Skema ini sering lebih relevan untuk merevitalisasi aset yang sudah ada — misalnya pasar tradisional — karena prosesnya biasanya lebih ringkas dibanding KPBU penuh dan tetap memanfaatkan arus kas pengguna yang sudah berjalan, seperti retribusi atau sewa kios.

### Kapan sebaiknya proyek tetap dibiayai APBD saja?
Ketika proyeknya terlalu kecil sehingga biaya penyiapan KPBU tidak sepadan dengan manfaatnya, ketika layanannya secara politik tidak mungkin ditagihkan ke warga, atau ketika daerah belum punya rekam jejak pengelolaan aset yang memadai untuk meyakinkan mitra badan usaha. Memilih APBD dalam kondisi ini bukan kegagalan — memaksakan KPBU pada proyek yang tidak cocok itulah yang berisiko gagal di tengah jalan.

## Data tables for the writer

### Tabel utama — Instrumen mana untuk sektor apa (aset GEO H2 #2)

| Sektor (kewenangan daerah) | Sumber arus kas | Skema pengembalian yang lazim | Instrumen yang cocok | Catatan |
|---|---|---|---|---|
| Air minum / SPAM | Tarif pelanggan BUMD Air Minum | User charge (jika tarif FCR) atau campuran | KPBU *user charge* murni **hanya** untuk BUMD berkinerja sehat + tarif FCR 3 tahun (19 dari 394 secara nasional, Maret 2025); mayoritas butuh KPBU + Dukungan Kelayakan (VGF) atau tetap hibah/pinjaman daerah | Tarif politik sensitif — menaikkan tarif ke level FCR sering tidak populer |
| Persampahan (PSEL/TPPAS regional) | Tipping fee dari pemda peserta, sebagian disubsidi provinsi | Pembayaran layanan jangka panjang berbasis kontrak, dianggarkan dari APBD | KPBU regional dengan tipping fee sebagai motor pembayaran | Legok Nangka: 70% tipping fee ditanggung 6 kab/kota dari APBD, disepakati 2019, belum beroperasi per Juni 2024 |
| Penerangan Jalan Umum (APJ) | Tidak ada tarif pengguna langsung | Availability Payment murni dari APBD | KPBU dengan Availability Payment — terbukti di dua kabupaten | Kabupaten Madiun (2022–2023) dan Kabupaten Lombok Barat (2023), keduanya dijamin PT PII |
| Jalan daerah (non-tol) | Umumnya tidak ada (jalan kabupaten/kota lazim tidak ditol) | Availability Payment (jarang, karena biaya transaksi KPBU relatif besar dibanding nilai proyek) atau pengadaan konvensional | Secara hukum boleh KPBU (Perpres 38/2015 tak memisahkan tol/non-tol), tapi praktiknya pengadaan konvensional + pinjaman daerah (ambang 75%/DSCR 2,5, PP No. 1/2024) lebih lazim kecuali proyek dipaketkan besar/regional | Kesenjangan terbesar antara "boleh secara hukum" dan "lazim secara praktik" |
| Pasar dan infrastruktur sosial | Retribusi/sewa kios (pasar); umumnya tidak ada tarif langsung untuk fasilitas sosial dasar | User charge (pasar) atau kerja sama pemanfaatan aset (KSP/BGS) | Kerja sama pemanfaatan aset sering lebih pas untuk revitalisasi pasar berskala kecil-menengah; KPBU penuh dipertimbangkan hanya untuk kawasan pasar/fasilitas berskala besar | Perdagangan (menaungi pasar) adalah urusan **pilihan**, bukan wajib, menurut UU No. 23 Tahun 2014 Pasal 12 ayat (3) |

### Aturan keputusan umum — dari kondisi tarif ke instrumen

| Kondisi arus kas pengguna | Instrumen yang lazim | Contoh sektor |
|---|---|---|
| Tarif menutup penuh biaya operasi + investasi, dan politically feasible | KPBU *user charge* murni | SPAM berkinerja sehat dengan tarif FCR (minoritas kecil secara nasional) |
| Ada tarif/pungutan, tapi tidak menutup penuh biaya | KPBU + Dukungan Kelayakan (VGF, PMK No. 68/2024) | SPAM mayoritas belum FCR |
| Tidak ada tarif pengguna, tapi layanan terukur dan bisa dikontrak | KPBU dengan Availability Payment dari APBD | Penerangan jalan umum |
| Ada "tarif" tapi sumbernya tetap APBD pemda (bukan warga langsung) | KPBU dengan pembayaran layanan jangka panjang berbasis kontrak | Persampahan/PSEL regional |
| Tidak ada tarif, skala kecil, atau biaya transaksi KPBU tidak sepadan | Pengadaan konvensional, bila perlu dengan pinjaman daerah (ambang 75%/DSCR 2,5) | Jalan kabupaten/kota biasa, fasilitas sosial kecil |

## Edge cases & nuance

- **Boleh secara hukum ≠ lazim secara praktik.** Perpres 38/2015 mencakup "infrastruktur jalan" secara umum tanpa memisahkan tol/non-tol, tetapi tanpa mekanisme tarif, jalan kabupaten/kota hampir tidak pernah menjadi KPBU *user charge* murni dalam praktik — ini poin kunci untuk H2 #4/#5, bukan kontradiksi yang perlu disembunyikan.
- **"Pembiayaan kreatif" pada persampahan bukan menghilangkan beban fiskal, hanya mengubah bentuknya.** Tipping fee yang dibayarkan ke badan usaha pelaksana PSEL tetap dianggarkan dari APBD pemda peserta — jadi manfaat utamanya adalah membangun infrastruktur besar tanpa membiayai investasi awal penuh dari APBN/APBD sekaligus, bukan menghindari kewajiban pembayaran jangka panjang.
- **Ketiadaan ambang nilai formal untuk KPBU skala kecil bukan berarti semua ukuran proyek cocok.** Ini murni pertimbangan ekonomis (rasio biaya penyiapan transaksi terhadap manfaat), dan harus disampaikan sebagai *rule of thumb*, bukan aturan hukum — sesuai instruksi tegas brief.
- **"Urusan pilihan" (pasar/Perdagangan) berbeda karakter dari "urusan wajib pelayanan dasar" (air minum/kesehatan).** Karena bukan pelayanan dasar yang wajib disediakan dengan Standar Pelayanan Minimal, proyek pasar punya lebih banyak keleluasaan bentuk kerja sama (termasuk kerja sama pemanfaatan aset yang lebih ringan dari KPBU formal) dibanding sektor pelayanan dasar.
- **Penjaminan pemerintah ≠ subsidi, dan tidak menghilangkan kebutuhan tarif/pembayaran yang layak.** Bahkan pada proyek yang dijamin PT PII (mis. KPBU APJ), pemda tetap wajib membayar Availability Payment sesuai kontrak — penjaminan hanya memagari risiko sisi pemerintah dalam kontrak, bukan menghapus kewajiban pembayaran itu sendiri.
- **Status operasional Legok Nangka per Juni 2024 (belum beroperasi, target 2028–2029) mungkin sudah berubah pada saat artikel terbit.** Dossier ini tidak menemukan sumber yang lebih baru dalam anggaran riset yang tersedia — penulis/editor sebaiknya melakukan pengecekan cepat sebelum publikasi jika artikel menyebut tenggat waktu secara spesifik.

## Flags (open factual risk)

- ⚠️ **Angka Kabupaten Madiun "7.459 titik PJU sepanjang 299,7 km jalan" (DJPK, 26 Mei 2026) SENGAJA TIDAK dipakai dalam dossier ini**, meski muncul di brief, di cache riset (`research/pembiayaan-kreatif.research.json`), dan dipakai dengan status CONFIRMED oleh dossier sejawat `pembiayaan-kreatif-01` bulan ini. Instruksi tugas untuk dossier ini eksplisit menyatakan angka tersebut tidak dapat diverifikasi terhadap `knowledge_base/company_profile.md` (yang memang tidak mencantumkan jumlah titik atau panjang jalan untuk proyek ini). → **Rekomendasi**: penulis artikel ini memakai HANYA fakta Madiun yang ada di `company_profile.md` (status proyek pertama, tanggal, "sekitar Rp 100 miliar"). Bila editor ingin menyelaraskan dengan dossier `-01` yang sudah memakai angka DJPK tersebut, itu adalah keputusan editorial di luar wewenang dossier ini — tandai untuk diperiksa saat proses editing lintas-artikel bulan ini.
- ⚠️ **Bidang urusan spesifik untuk Penerangan Jalan Umum** (Pekerjaan Umum vs. Ketenagalistrikan/ESDM) tidak konvergen sempurna antarsumber yang diperiksa (lihat Core Fact #6). → **Rekomendasi**: nyatakan PJU sebagai "kewenangan kabupaten/kota" tanpa mengunci nama bidang urusan yang presisi.
- ⚠️ **Klasifikasi "Perdagangan" (menaungi pasar) sebagai urusan pilihan**: satu fetch (pasal.id, Pasal 12) menyatakan tegas "urusan pilihan"; satu fetch lain (ringkasan Wikisource) sempat keliru menyebutnya "wajib non-dasar" sebelum mengklarifikasi bahwa Lampiran aslinya tidak tersedia di halaman tersebut. Dossier ini mengikuti pasal.id (konsisten dengan struktur Pasal 12 ayat 1–3 yang dikenal luas). → **Rekomendasi**: aman dipakai sebagai "urusan pilihan", tapi beri ruang bagi editor untuk verifikasi tambahan bila ingin presisi mutlak.
- ⚠️ **PDF resmi UU No. 23 Tahun 2014 dan Perpres No. 38 Tahun 2015 tidak berhasil di-parse langsung** dalam sesi ini (dua percobaan WebFetch pada file PDF terenkode/gambar gagal, tersimpan sebagai berkas biner di scratchpad tanpa teks yang bisa diekstraksi). Semua kutipan pasal dalam dossier ini berasal dari ekstraksi pihak ketiga (pasal.id), bukan pembacaan langsung teks resmi kata-per-kata. → **Rekomendasi**: kerangka besar (klasifikasi urusan, daftar 19 sektor) aman dipakai; hindari mengutip ayat/huruf sebagai bunyi pasal verbatim tanpa disclaimer "menurut Pasal [x]" yang longgar.
- ⚠️ **Tarif tipping fee Legok Nangka (Rp 386.000/ton, disepakati Oktober 2019) belum dikonfirmasi masih berlaku tanpa perubahan hingga 2026.** Jeda panjang antara kesepakatan 2019 dan status "belum beroperasi" pada Juni 2024 mengindikasikan kemungkinan negosiasi ulang. → **Rekomendasi**: bila dipakai, cantumkan eksplisit "disepakati 2019" dan hindari menyiratkan ini adalah tarif yang berlaku hari ini.
- ⚠️ **Status operasional TPPAS Regional Legok Nangka per Juni 2024 (belum beroperasi, target 2028–2029) adalah data terbaru yang ditemukan dalam anggaran riset ini** — bukan bukti bahwa tidak ada perkembangan sesudahnya. → **Rekomendasi**: tulis "per Juni 2024" secara eksplisit; jangan menyatakan proyek "sudah beroperasi" atau "masih belum beroperasi hari ini" tanpa pembatasan waktu itu.
- ⚠️ **Tidak ditemukan tanggal penandatanganan perjanjian penjaminan atau nilai penjaminan spesifik PT PII untuk PSEL Legok Nangka** dalam sumber pre-approved maupun riset eksternal sesi ini — hanya status "tercatat dalam portofolio unggulan" yang tersedia. → **Rekomendasi**: jangan mengarang tanggal atau nilai penjaminan untuk proyek ini; sebut sebagai "tercatat dalam portofolio PT PII" saja.
- ⚠️ **Data BPPSPAM 2023 (37,8%/62,2% FCR)** hanya diperoleh lewat sintesis mesin pencari, bukan WebFetch langsung ke laporan asal (percobaan ke domain BPPSPAM/Cipta Karya gagal karena galat DNS/parsing dalam sesi ini). → **Rekomendasi**: gunakan sebagai data pembanding berlabel "hingga 2023", utamakan data pu.go.id 13 Maret 2025 (Core Fact #8) sebagai rujukan utama yang terverifikasi langsung.
- ⚠️ **Nama Gubernur Jawa Barat muncul di salah satu sumber (ANTARA, tipping fee Legok Nangka) sehubungan dengan pertemuan penetapan tipping fee 2019.** Nama tersebut **tidak direproduksi di mana pun dalam dossier ini** dan tidak boleh muncul di artikel — gunakan bingkai institusional ("Pemerintah Provinsi Jawa Barat") saja.
- ⚠️ **Konsorsium swasta yang disebut untuk Legok Nangka** (nama perusahaan Jepang dan mitra lokal, per artikel 28 Juni 2024) adalah detail opsional, bukan fakta inti yang diperlukan artikel — bila dipakai, ini adalah nama badan usaha/korporasi (bukan pejabat), sehingga tidak melanggar larangan penyebutan nama pejabat, tetapi tidak menambah nilai argumen inti artikel (tarif vs instrumen) sehingga boleh diabaikan penulis.
- ⚠️ **Sudut kepemimpinan/personel**: pengingat standar berlaku di seluruh dossier ini — nama pejabat apa pun (bupati, wali kota, gubernur, menteri, Direksi/Komisaris PT PII) harus dihilangkan bila muncul di draf mana pun turunan dossier ini.

## Definition snippet draft (40–60 kata)

> Pembiayaan kreatif dalam konteks infrastruktur daerah adalah kumpulan skema pendanaan proyek pemerintah daerah di luar APBD murni, termasuk KPBU (Kerja Sama Pemerintah dengan Badan Usaha) berskala kecil dan regional. Pilihan instrumennya — user charge, Availability Payment, atau tetap APBD — ditentukan oleh satu variabel: apakah sektor proyek punya arus kas pengguna dan apakah tarifnya menutup biaya.
