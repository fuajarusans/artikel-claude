---
brief_id: "cng-indonesia-02"
researcher_run_date: "2026-07-07"
sources_cited: 14
flags: 6
---

# Research Dossier: Keselamatan CNG: Spesifikasi Tabung, Tekanan, dan Standar Keamanannya

## TL;DR for the writer

- CNG aman secara karakteristik fisik: metana lebih ringan dari udara (densitas relatif ~0.55–0.80 vs udara = 1.0), auto-ignition tinggi (~540°C), dan rentang mudah terbakar sempit (~5–15% volume di udara) — ini dikonfirmasi Ditjen Migas ESDM dan sumber teknis independen. Jangan klaim "tidak bisa meledak" — klaim "risiko akumulasi & penyalaan tak disengaja jauh lebih rendah dibanding LPG/BBM" (lebih presisi & defensible).
- Tabung CNG punya 4 tipe (Type 1–4) dengan trade-off bobot vs biaya: Type 1 baja penuh (terberat, termurah) → Type 4 liner polimer + komposit carbon/glass fiber (teringan, ~2–3x harga Type 1). ISO 11439:2013 adalah standar internasional acuan untuk tabung CNG kendaraan (tekanan referensi 200 bar, tapi tekanan kerja lain juga dipakai).
- **Hati-hati pada angka standar SNI**: SNI 7407:2009 adalah standar CARA UJI (metode pengujian) peralatan konversi BBG pada kendaraan bermotor — BUKAN standar desain tabung itu sendiri. Jangan menyamakan SNI 7407 dengan ISO 11439; keduanya melayani fungsi berbeda dan tidak boleh disebut setara/identik tanpa hedging.
- Lemigas (Balai Besar Pengujian Migas ESDM) adalah lembaga uji tabung gas bumi/CNG yang diverifikasi lewat jurnal ilmiah resmi (LEMIGAS-PGN 2015, jurnal LPMGB 2018) dan pemberitaan 2026 tentang uji tabung "Merah Putih" — kredibel dikutip sebagai penguji tekanan (hydrostatic test, burst test) meski detail interval inspeksi berkala tabung CNG spesifik tidak ditemukan dalam sumber yang tersedia (flag).
- Insiden nyata (ledakan truk tabung CNG Sukabumi, Nov 2023, investigasi KNKT) justru **mendukung narasi artikel**: penyebab akar adalah korosi internal akibat kandungan air asam dalam gas + kalibrasi manometer kedaluwarsa (bukan kegagalan desain tabung/teknologi CNG itu sendiri) — bahan kuat untuk H2 #5 "kapan CNG benar-benar berisiko".
- Permenaker No. 37/2016 adalah regulasi K3 nasional yang relevan untuk bejana tekanan (termasuk tabung gas) — tetapi angka interval hydrotest spesifik (mis. "setiap 5 tahun") **belum terverifikasi dari teks resmi peraturan itu sendiri** dalam riset ini; hanya dari sumber sekunder (situs konsultan K3). Hedging wajib.

## Core facts (verified)

> **Claim**: CNG dibuat dengan mengompresi metana hingga tekanan sekitar 200 bar.
> **Number/specific**: ~200 bar (tekanan kompresi acuan)
> **Source**: Direktorat Jenderal Minyak dan Gas Bumi (Ditjen Migas) — Kementerian ESDM, "Diversifikasi BBM ke Bahan Bakar Gas Pada Sektor Transportasi", https://www.migas.esdm.go.id/post/Diversifikasi-BBM-ke-Bahan-Bakar-Gas-Pada-Sektor-Transportasi, diakses 2026-07-07
> **Confidence**: high

> **Claim**: Tekanan kerja tabung CNG untuk kendaraan umumnya berada pada rentang 200–250 bar (setara ~3.000–3.600 psi).
> **Number/specific**: 200–250 bar
> **Source**: Ditjen Migas ESDM (di atas, ~200 bar sebagai titik kompresi acuan) dikombinasikan dengan artikel teknis energi (trenasia.id, "Mengulas Keamanan CNG, Calon Pengganti LPG di Rumahmu", https://www.trenasia.id/amp/mengulas-keamanan-cng-calon-pengganti-lpg-di-rumahmu, 2026, yang menyebut tabung LPG 5–10 bar vs tabung CNG ~150–250 bar)
> **Confidence**: medium — sumber sepakat pada kisaran umum (200 bar sebagai titik acuan, bisa lebih tinggi hingga ~250 bar tergantung desain tabung), tapi angka pasti "200–250" tidak berasal dari satu badan standar tunggal. Gunakan sebagai rentang, jangan sebagai angka presisi tunggal.

> **Claim**: Gas metana/CNG memiliki densitas relatif lebih ringan dari udara sehingga saat bocor akan menguap/naik ke atmosfer, menurunkan risiko akumulasi gas.
> **Number/specific**: Densitas relatif metana/CNG ~0,55–0,80 (udara = 1,0)
> **Source**: Ditjen Migas ESDM, "Diversifikasi BBM ke Bahan Bakar Gas Pada Sektor Transportasi", https://www.migas.esdm.go.id/post/Diversifikasi-BBM-ke-Bahan-Bakar-Gas-Pada-Sektor-Transportasi, diakses 2026-07-07
> **Confidence**: high

> **Claim**: Dirjen Migas menyatakan bahwa saat terjadi kebocoran CNG di ruang terbuka, semburan gas bertekanan tinggi dapat menghalau oksigen di sekitar titik kebocoran sehingga api tidak mudah terbentuk.
> **Number/specific**: Kutipan langsung pejabat (Laode Sulaeman, Direktur Jenderal Migas)
> **Source**: trenasia.id, "Mengulas Keamanan CNG, Calon Pengganti LPG di Rumahmu", https://www.trenasia.id/amp/mengulas-keamanan-cng-calon-pengganti-lpg-di-rumahmu, 2026
> **Confidence**: medium — media sekunder yang mengutip pejabat ESDM; kutipan atribusi jelas tapi bukan siaran pers resmi ESDM langsung. Aman dikutip dengan atribusi nama & jabatan.

> **Claim**: Suhu penyalaan sendiri (auto-ignition temperature) metana/CNG adalah sekitar 540°C.
> **Number/specific**: ~540°C (beberapa sumber teknis internasional mencatat rentang 537–600°C tergantung metode pengukuran)
> **Source**: Sumber teknis energi Indonesia (solarindustri.com, "Gas Metana: Berbahaya atau Bermanfaat?" dan artikel CNG-safety sejenis) dikuatkan oleh referensi ilmiah internasional (ScienceDirect, "The auto-ignition temperature of methane"; EPA HERO database mencatat nilai minimum diterima ~537°C bersifat teoritis, bukan hasil eksperimen tunggal)
> **Confidence**: medium — angka ~540°C konsisten di banyak sumber populer & dipakai luas sebagai rule-of-thumb, namun literatur ilmiah primer (ScienceDirect/EPA) mencatat variasi 537–600°C tergantung metode uji. Tulis sebagai "sekitar 540°C" dengan hedging, jangan sebagai angka presisi mutlak.

> **Claim**: Rentang mudah terbakar (flammability range) metana di udara adalah sekitar 5–15% volume.
> **Number/specific**: LFL ~5% (literatur ilmiah presisi: 4,4%), UFL ~15% (literatur ilmiah presisi: 16,4%)
> **Source**: Konsisten di sumber populer Indonesia (5–15%) dan literatur internasional teknis (LFL 4,4%, UFL 16,4% pada suhu & tekanan ambien — lihat ringkasan flammability limit teknis)
> **Confidence**: high untuk rentang umum "5–15%" sebagai angka bulat yang dipakai luas; nilai presisi ilmiah sedikit berbeda (4,4–16,4%) — boleh pakai "sekitar 5–15%" sebagai simplifikasi yang diterima umum.

> **Claim**: ISO 11439 adalah standar internasional untuk tabung bertekanan tinggi (high-pressure cylinders) yang dipasang di kendaraan untuk penyimpanan CNG sebagai bahan bakar otomotif.
> **Number/specific**: ISO 11439:2013 (revisi dari ISO 11439:2000); menggunakan 200 bar sebagai tekanan kerja acuan (reference working pressure), meski tekanan kerja lain dapat digunakan.
> **Source**: ISO (International Organization for Standardization), "ISO 11439:2013 — Gas cylinders — High pressure cylinders for the on-board storage of natural gas as a fuel for automotive vehicles", https://www.iso.org/standard/44755.html, diakses 2026-07-07
> **Confidence**: high

> **Claim**: ISO 11439 mendefinisikan 4 kategori tabung CNG: CNG-1 (tabung baja tanpa sambungan/seamless steel), CNG-2 (tabung baja seamless dengan liner non-logam sebagian dibungkus komposit), CNG-3 (liner logam dibungkus penuh komposit filamen resin), dan CNG-4 (liner non-logam dibungkus penuh filamen resin).
> **Number/specific**: 4 kategori (CNG-1 s.d. CNG-4, umum disebut Type 1–4)
> **Source**: ISO 11439:2013 (ringkasan scope via ANSI Webstore/ISO), https://www.iso.org/standard/44755.html; dikuatkan oleh jurnal ilmiah domestik (LEMIGAS, "Spesifikasi Teknis Tabung ANG untuk Sektor Rumah Tangga", Lembaran Publikasi Minyak dan Gas Bumi Vol. 52 No. 2, Agustus 2018) yang mengutip ISO/International Standard Organization 2013 sebagai rujukan tekanan tabung CNG 200 bar.
> **Confidence**: high

> **Claim**: Tabung Type 1 (baja penuh) adalah desain CNG tertua dan terberat; Type 4 (liner polimer/HDPE + pembungkus komposit carbon/glass fiber) adalah yang teringan namun berbiaya 2–3x lipat dari Type 1.
> **Number/specific**: Type 3 ~70% lebih ringan dari Type 1, ~50% lebih ringan dari Type 2; Type 4 harga ~2–3x Type 1
> **Source**: Artikel teknis mekanikal Indonesia (mechanicalengboy, "Tipe-Tipe Tabung CNG yang Beredar di Pasaran", 2013) — sumber non-akademik/blog teknik, dipakai untuk angka pembanding bobot & harga
> **Confidence**: low-medium — sumber adalah blog teknik (2013, sudah lama & bukan lembaga resmi), bukan standar atau jurnal. Angka bobot/harga relatif ini masuk akal secara prinsip rekayasa material (semakin tinggi tipe = semakin ringan & mahal) namun persentase presisi (70%, 50%, 2-3x) TIDAK berasal dari sumber otoritatif. **Gunakan sebagai gambaran kualitatif tren, hindari mengutip persentase sebagai fakta pasti** — lihat flags.

> **Claim**: Tabung CNG (Type 4/komposit) yang sedang diuji pemerintah untuk program "Tabung Merah Putih" (pengganti LPG 3 kg) menjalani pengujian keselamatan di fasilitas Lemigas, dengan fokus ketahanan tekanan & keandalan sistem katup.
> **Number/specific**: Uji coba melibatkan belasan (disebutkan "15") unit prototipe tabung yang didatangkan dari China, dimulai Juli 2026, berlangsung 2–3 bulan.
> **Source**: Kontan.co.id, "Jadi Pengganti LPG, Kementerian ESDM Uji Coba Tabung CNG Merah Putih Setara 3 KG", https://industri.kontan.co.id/news/jadi-pengganti-lpg-kementerian-esdm-uji-coba-tabung-cng-merah-putih-setara-3-kg, 2026, dan trenasia.id (ringkasan status uji Juni 2026)
> **Confidence**: medium — ini adalah program yang SEDANG BERJALAN (belum final/komersial) per Juli 2026; angka jumlah prototipe & durasi uji berpotensi berubah. Jangan framing sebagai standar/spesifikasi final — framing sebagai "sedang dalam tahap uji coba pemerintah" saja.

> **Claim**: SNI 7407:2009 adalah standar nasional Indonesia tentang cara uji/persyaratan peralatan konversi bahan bakar gas bumi bertekanan (CNG) pada kendaraan bermotor — mencakup ruang lingkup, istilah, definisi, syarat mutu, pengambilan contoh, cara pengujian, syarat lulus uji, dan penandaan.
> **Number/specific**: SNI 7407:2009
> **Source**: Dokumen SNI 7407:2009 (ringkasan via Scribd, "SNI-7407-2009 - Cara Uji Tabung Gas Bumi Bertekanan (Compressed Natural Gas/CNG) Untuk Kendaraan Bermotor", https://www.scribd.com/doc/228773874/, diakses 2026-07-07) — **rekomendasi: verifikasi ulang teks resmi di sispk.bsn.go.id sebelum publikasi** karena akses langsung BSN gagal pada riset ini (lihat flags).
> **Confidence**: medium — isi & scope konsisten antar sumber sekunder, tapi peneliti tidak berhasil mengakses dokumen resmi BSN/SNI secara langsung (paywall/format PDF terenkripsi). Jangan kutip pasal/nomor klausul spesifik dari SNI 7407 tanpa verifikasi tambahan.

> **Claim**: BSN tidak memiliki SNI khusus untuk tabung CNG yang setara SNI 1452 (tabung baja LPG) — SNI tabung LPG (1452:2007/2011) dan turunannya (SNI 7655:2010 rubber seal, SNI ISO 10691:2010 prosedur pengecekan, SNI ISO 10464:2010 inspeksi berkala) adalah standar KHUSUS UNTUK LPG, bukan CNG.
> **Number/specific**: SNI 1452:2007 (tabung baja LPG), SNI 15-1591-2008 (valve LPG), SNI 7655:2010, SNI ISO 10691:2010, SNI ISO 10464:2010
> **Source**: Badan Standardisasi Nasional (BSN), "Informasi Standar Tabung Gas dan Asesorisnya", https://bsn.go.id/main/berita/berita_det/2160; dan "BSN Tetapkan 3 SNI Baru Terkait Tabung Gas", https://bsn.go.id/main/berita/berita_det/2590/BSN-Tetapkan-3-SNI-Baru-Terkait-Tabung-Gas, diakses 2026-07-07
> **Confidence**: high — **penting untuk artikel**: jangan mencampuradukkan standar tabung LPG dengan tabung CNG; keduanya diatur SNI terpisah dan tidak boleh disamakan.

> **Claim**: Standar pengujian tabung gas bertekanan tinggi seperti CNG di Indonesia, saat merujuk pembanding internasional, menggunakan UN ECE R110 (standar CNG internasional yang mencakup persyaratan tabung DAN komponen/aksesorisnya seperti valve), yang dipandang lebih lengkap dibanding SNI tabung baja LPG (1452:2011).
> **Number/specific**: UN ECE R110 mencakup uji tensile (>41 kg/mm²), uji hidrostatik (tahan 1,5×MAOP/Maximum Allowable Operating Pressure), uji pecah/burst test (2,25×MAOP, tidak pecah pada sambungan), uji radiography, ultrasonic, coating, pressure cycling, ambient temperature cycling, dan bonfire test.
> **Source**: Lusyana (LEMIGAS/Pusat Penelitian dan Pengembangan Teknologi Minyak dan Gas Bumi), "Spesifikasi Teknis Tabung ANG (Adsorbed Natural Gas) untuk Sektor Rumah Tangga", Lembaran Publikasi Minyak dan Gas Bumi (jurnal resmi Lemigas-ESDM, ISSN 2089-3396), Vol. 52, No. 2, Agustus 2018, hlm. 113–120, https://journal.lemigas.esdm.go.id/index.php/LPMGB/article/download/351/211/834
> **Confidence**: high — sumber jurnal peer-reviewed resmi Lemigas-ESDM, sangat kredibel untuk metodologi uji tabung gas bumi bertekanan tinggi di Indonesia.

> **Claim**: Lemigas (bagian Kementerian ESDM) adalah lembaga litbang/pengujian resmi yang melakukan uji tarik (tensile), uji hidrostatik, dan uji pecah (burst test) pada tabung gas bumi bertekanan di Indonesia, bekerja sama dengan PGN dan institusi lain (mis. WIKA) dalam riset tabung.
> **Number/specific**: Kolaborasi LEMIGAS-PGN (2015) dan tim PT PGN & PT WIKA dalam pembuatan purwarupa tabung (disebut dalam ucapan terima kasih jurnal)
> **Source**: Lusyana, LEMIGAS, Lembaran Publikasi Minyak dan Gas Bumi Vol. 52 No. 2, Agustus 2018 (idem di atas)
> **Confidence**: high

> **Claim**: Peraturan Menteri Ketenagakerjaan (Permenaker) No. 37 Tahun 2016 mengatur Keselamatan dan Kesehatan Kerja (K3) untuk Bejana Tekanan dan Tangki Timbun, mendefinisikan bejana tekanan sebagai wadah selain mesin uap yang berisi tekanan dan dipakai menyimpan gas, udara, campuran gas/udara — baik dalam keadaan dikompresikan menjadi cair, dilarutkan, atau dibekukan — sebagai turunan UU No. 1 Tahun 1970 (Keselamatan Kerja).
> **Number/specific**: Permenaker No. 37 Tahun 2016, ditetapkan/berlaku 27 Desember 2016, menggantikan Peraturan Menteri (1982) tentang Bejana Tekan
> **Source**: Kementerian Ketenagakerjaan RI (JDIH Kemnaker), "Peraturan Menteri Ketenagakerjaan Nomor 37 Tahun 2016", https://jdih.kemnaker.go.id/peraturan/detail/1429/peraturan-menteri-nomor-37-tahun-2016; dan Berita Negara Republik Indonesia No.1988, 2016, https://katigaku.top/wp-content/uploads/2018/12/16.-PERMEN-KEMENAKER-Nomor-37-TAHUN-2016-Tahun-2016-KEMENAKER-Nomor-37-TAHUN-2016-Tahun-2016.pdf
> **Confidence**: high untuk keberadaan & cakupan umum regulasi; **medium-low untuk angka interval riksa uji berkala spesifik** (lihat flags — sumber angka "5 tahun" berasal dari situs konsultan K3 pihak ketiga, bukan teks pasal resmi yang berhasil diverifikasi langsung dalam riset ini).

> **Claim**: Insiden ledakan truk pengangkut tabung CNG di Cibadak, Sukabumi–Bogor (27 November 2023) menewaskan 2 orang & melukai 7 orang; investigasi awal KNKT (Komite Nasional Keselamatan Transportasi) menemukan korosi internal tabung (indikasi cairan ~150 ml di dalam tabung, air bersifat asam), korosi eksternal akibat kerusakan lapisan cat, dan sertifikat kalibrasi manometer yang telah kedaluwarsa (berlaku hingga 22 Desember 2022).
> **Number/specific**: 2 tewas, 7 luka; kalibrasi manometer kedaluwarsa Desember 2022; radius potensi kerusakan ledakan disebut mencapai 50 meter
> **Source**: KNKT (Komite Nasional Keselamatan Transportasi), "KNKT Ungkap Temuan Awal dan Rekomendasi Segera Meledaknya Truk Pengangkut Tabung Compressed Natural Gas", https://knkt.go.id/news/read/knkt-ungkap-temuan-awal-dan-rekomendasi-segera-meledaknya-truk-pengangkut-tabung-compressed-natural-gas, diakses 2026-07-07; dikuatkan liputan media (Antara, Detik, Tribun Jabar, November 2023)
> **Confidence**: high — sumber resmi lembaga investigasi kecelakaan transportasi nasional (KNKT), dikuatkan multi-media.

> **Claim**: KNKT merekomendasikan otoritas terkait (Ditjen Perhubungan Darat, Ditjen Migas, Kemenaker, operator/Pertamina Gas) untuk memperkuat pengawasan uji berkala tabung CNG, menyesuaikan protokol dengan iklim tropis Indonesia yang sangat korosif, serta memverifikasi sertifikasi peralatan & pemeliharaan menyeluruh.
> **Number/specific**: 6 temuan awal + rekomendasi ke 4 kelompok otoritas/operator
> **Source**: KNKT, idem di atas
> **Confidence**: high

> **Claim**: PGN Gagas telah mengantongi sertifikasi ISO 9001:2015 (Sistem Manajemen Mutu), ISO 45001:2018 (Sistem Manajemen Keselamatan & Kesehatan Kerja untuk layanan distribusi CNG), dan ISO 37001:2016 (Sistem Manajemen Anti-Penyuapan) — ketiganya per tahun 2025.
> **Number/specific**: ISO 9001:2015, ISO 45001:2018, ISO 37001:2016 (2025)
> **Source**: `knowledge_base/company_profile.md` (profil perusahaan PGN Gagas, diverifikasi internal)
> **Confidence**: high (first-party, pre-approved)

> **Claim**: Setiap implementasi peralatan CNG PGN Gagas dikalibrasi dan dioperasikan mematuhi standar Keselamatan, Kesehatan Kerja, dan Lindung Lingkungan (K3LL) Pertamina; CNG yang bocor terdispersi cepat ke atmosfer karena lebih ringan dari udara, menurunkan risiko akumulasi gas & ledakan di area pabrik.
> **Number/specific**: Klaim kepatuhan K3LL Pertamina (kualitatif, bukan angka)
> **Source**: gagas.co.id, halaman "Perusahaan CNG Indonesia", https://gagas.co.id/perusahaan-cng-indonesia/, diakses 2026-07-07
> **Confidence**: high (first-party, dari landing page resmi klien)

## Solution focus + PGN Gagas anchor (from product_matrix.md)

| What to teach (gas-bumi/CNG tech) | Facts to state accurately | Where in article | PGN Gagas service/credential to anchor CTA |
|---|---|---|---|
| Karakteristik keselamatan fisik CNG (densitas < udara, auto-ignition ~540°C, flammability range ~5–15%) | Densitas relatif 0,55–0,80 (ESDM); auto-ignition "sekitar 540°C" (hedge, variasi 537–600°C di literatur ilmiah); flammability "sekitar 5–15%" (simplifikasi dari 4,4–16,4% ilmiah) | H2 #1 | Tidak perlu anchor Gagas di sini — murni edukasi vendor-netral |
| Tipe tabung CNG (Type 1–4 / ISO 11439 kategori CNG-1 s.d. CNG-4) | Material & trade-off bobot/biaya (kualitatif — hindari persentase presisi dari sumber blog); ISO 11439:2013 sebagai standar internasional acuan (200 bar tekanan referensi) | H2 #2 (tabel) | Tidak perlu anchor Gagas — edukasi standar teknis |
| Standar & pengujian (ISO 11439, SNI 7407, UN ECE R110, uji Lemigas) | SNI 7407:2009 = standar cara uji peralatan konversi BBG kendaraan (bukan standar desain tabung); Lemigas = lembaga uji resmi ESDM (tensile, hidrostatik, burst test); bedakan SNI LPG (1452 dkk.) vs CNG | H2 #3 | Aside singkat: distributor profesional (PGN Gagas) beroperasi dengan tabung/instalasi yang telah melalui standar & uji resmi — bukan instalasi ilegal |
| Fitur keselamatan berlapis (solenoid valve, PRD, stopper, inspeksi berkala) | Prinsip kerja pressure relief valve (membuka otomatis saat overpressure, menutup saat tekanan aman); Permenaker 37/2016 sebagai payung regulasi K3 bejana tekanan (interval spesifik perlu hedging) | H2 #4 (list) | Tidak perlu anchor Gagas — edukasi fitur teknis |
| Kapan CNG berisiko: insiden nyata & akar masalah (bukan kegagalan teknologi) | Insiden truk CNG Sukabumi 2023 (KNKT): akar masalah = korosi internal + kalibrasi kedaluwarsa, BUKAN desain tabung Type 1-4 atau prinsip CNG | H2 #5 | Aside: distributor CNG bersertifikat (ISO 45001:2018) menjalankan inspeksi & kalibrasi terkontrol berbeda dari instalasi tak resmi |
| Closing — kredibilitas keselamatan operasional | ISO 45001:2018 (K3, distribusi CNG, 2025), ISO 9001:2015, budaya ONE (Safety) | Closing/CTA | **PGN Gagas — distributor CNG bersertifikat ISO 45001:2018**, anak usaha PGN/Subholding Gas Pertamina |

Reminder: PGN Gagas **menyalurkan/mengangkut/memasok/mendistribusikan** gas bumi (CNG) — bukan produsen tabung maupun penguji standar. Max 2–3 self-mentions (closing + 1 aside di H2 #3 atau #5, pilih salah satu, jangan keduanya agar tetap ≤3).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Kementerian ESDM — Direktorat Jenderal Minyak dan Gas Bumi (Ditjen Migas)**, "Diversifikasi BBM ke Bahan Bakar Gas Pada Sektor Transportasi" — https://www.migas.esdm.go.id/post/Diversifikasi-BBM-ke-Bahan-Bakar-Gas-Pada-Sektor-Transportasi — *backs*: tekanan CNG ~200 bar, densitas relatif metana 0,55–0,80 vs udara, karakteristik dispersi gas saat bocor, sejarah infrastruktur SPBG/MRU.
2. **Lemigas (Pusat Penelitian dan Pengembangan Teknologi Minyak dan Gas Bumi — ESDM)**, Lusyana, "Spesifikasi Teknis Tabung ANG untuk Sektor Rumah Tangga", Lembaran Publikasi Minyak dan Gas Bumi Vol. 52 No. 2, Agustus 2018 — https://journal.lemigas.esdm.go.id/index.php/LPMGB/article/download/351/211/834 — *backs*: metodologi uji tabung gas bumi bertekanan tinggi (tensile, hidrostatik, burst test), rujukan ISO 11439 & UN ECE R110, peran Lemigas sebagai lembaga uji.
3. **ISO (International Organization for Standardization)**, "ISO 11439:2013 — Gas cylinders — High pressure cylinders for the on-board storage of natural gas as a fuel for automotive vehicles" — https://www.iso.org/standard/44755.html — *backs*: definisi & kategori CNG-1 s.d. CNG-4 (Type 1–4), tekanan kerja acuan 200 bar.
4. **KNKT (Komite Nasional Keselamatan Transportasi)**, "KNKT Ungkap Temuan Awal dan Rekomendasi Segera Meledaknya Truk Pengangkut Tabung Compressed Natural Gas" — https://knkt.go.id/news/read/knkt-ungkap-temuan-awal-dan-rekomendasi-segera-meledaknya-truk-pengangkut-tabung-compressed-natural-gas — *backs*: insiden nyata & akar masalah keselamatan (korosi, kalibrasi kedaluwarsa) — bahan H2 #5.
5. **Badan Standardisasi Nasional (BSN)** — https://bsn.go.id/main/berita/berita_det/2160 dan https://bsn.go.id/main/berita/berita_det/2590/BSN-Tetapkan-3-SNI-Baru-Terkait-Tabung-Gas — *backs*: SNI tabung gas eksisting adalah untuk LPG (1452, 7655, ISO 10691, ISO 10464), bukan CNG — penting untuk membedakan.

Priority order used: ESDM/Ditjen Migas + Lemigas (pemerintah/otoritas migas) > KNKT (lembaga investigasi negara) > ISO (standar internasional) > BSN (standardisasi nasional) > PGN Gagas (first-party).

## FAQ Q&As (5–8 drafted, Bahasa Indonesia)

### Apakah CNG aman dan bisa meledak?
CNG relatif aman dibanding bahan bakar lain karena sifat fisiknya: densitasnya lebih ringan dari udara (sekitar 0,55–0,80 dibanding udara = 1,0) sehingga saat bocor gas akan menguap ke atas, bukan mengendap seperti LPG. Suhu penyalaan sendirinya juga tinggi (sekitar 540°C) dengan rentang mudah terbakar sempit (sekitar 5–15% volume di udara). Risiko ledakan tetap ada jika tabung tidak memenuhi standar, mengalami korosi, atau perawatan diabaikan — bukan karena teknologi CNG itu sendiri.

### Berapa tekanan tabung CNG?
Tabung CNG untuk kendaraan umumnya dirancang menahan tekanan kerja pada kisaran 200–250 bar, jauh lebih tinggi dari tabung LPG rumah tangga (sekitar 5–10 bar). Standar internasional ISO 11439:2013 menggunakan 200 bar sebagai tekanan kerja acuan (reference working pressure), meski desain tabung tertentu bisa memakai tekanan kerja lain sesuai spesifikasi pabrikan dan hasil uji sertifikasi.

### Apa perbedaan tabung CNG Type 1 dan Type 4?
Type 1 adalah tabung baja penuh (seamless steel) — desain tertua, paling berat, dan paling murah. Type 4 memakai liner polimer (biasanya HDPE) yang dibungkus penuh material komposit carbon fiber/glass fiber — jauh lebih ringan namun berbiaya produksi lebih tinggi. ISO 11439 mengklasifikasikan keduanya sebagai kategori CNG-1 dan CNG-4, dengan Type 2 dan Type 3 sebagai desain hibrida di antaranya (liner logam dibungkus komposit sebagian atau penuh).

### Apa saja fitur keselamatan pada kendaraan/instalasi CNG?
Sistem CNG dilengkapi lapisan pengaman berupa katup solenoid (memutus aliran gas otomatis saat mesin mati atau tekanan tidak normal), Pressure Relief Device (PRD) yang melepaskan tekanan berlebih sebelum tabung mencapai titik kritis, serta stopper/regulator yang mengatur aliran gas ke tekanan kerja mesin. Kombinasi fitur ini bekerja bersama proses inspeksi berkala untuk menjaga sistem tetap dalam kondisi aman selama masa pakai tabung.

### Siapa yang menguji dan mensertifikasi tabung CNG di Indonesia?
Lemigas — Pusat Penelitian dan Pengembangan Teknologi Minyak dan Gas Bumi di bawah Kementerian ESDM — adalah salah satu lembaga yang melakukan pengujian teknis tabung gas bumi bertekanan tinggi, termasuk uji tarik (tensile), uji hidrostatik, dan uji pecah (burst test), merujuk pada standar seperti ISO 11439 dan UN ECE R110. Tabung yang beredar juga harus memenuhi persyaratan SNI yang berlaku serta melalui proses sertifikasi sebelum digunakan secara komersial.

### Apakah tabung CNG perlu diinspeksi berkala?
Ya. Sebagai bejana tekanan, tabung CNG termasuk objek yang diatur dalam ketentuan Keselamatan dan Kesehatan Kerja (K3) untuk bejana tekanan di Indonesia (Permenaker No. 37 Tahun 2016), yang mewajibkan pemeriksaan dan pengujian berkala oleh pihak berkompeten. Investigasi kecelakaan nyata menunjukkan kelalaian pada inspeksi dan kalibrasi berkala — bukan desain tabung — sering menjadi akar masalah insiden CNG.

### Apa bedanya standar tabung CNG untuk kendaraan dan operasi distribusi CNG?
Standar tabung kendaraan (seperti ISO 11439) berfokus pada tabung ringan yang terpasang tetap di kendaraan dengan siklus pengisian-pengosongan berulang. Operasi distribusi CNG beyond-pipeline (seperti pengangkutan lewat Gas Transportation Module/GTM) melibatkan skid tabung dalam jumlah besar yang diangkut dengan truk, sehingga faktor tambahan seperti ketahanan korosi selama transportasi, guncangan perjalanan, dan iklim tropis yang korosif menjadi perhatian tersendiri sesuai rekomendasi KNKT pascainvestigasi insiden tabung CNG.

## Data tables for the writer

### Klasifikasi tabung CNG (ISO 11439 / umum disebut Type 1–4)
| Tipe | Material | Karakteristik bobot & biaya | Aplikasi tipikal |
|---|---|---|---|
| Type 1 (CNG-1) | Baja seamless penuh | Paling berat; biaya produksi paling rendah | Aplikasi stasioner/skid distribusi, kendaraan komersial berat |
| Type 2 (CNG-2) | Baja seamless dengan liner non-logam, dibungkus komposit sebagian (badan silinder) | Lebih ringan dari Type 1 | Kendaraan komersial, aplikasi industri |
| Type 3 (CNG-3) | Liner logam dibungkus penuh komposit filamen resin (carbon/glass fiber) | Lebih ringan lagi dari Type 2 | Kendaraan penumpang & komersial ringan |
| Type 4 (CNG-4) | Liner polimer (umumnya HDPE) dibungkus penuh komposit filamen resin | Paling ringan; biaya produksi tertinggi | Kendaraan ringan, aplikasi butuh efisiensi bobot (termasuk uji coba tabung 3 kg "Merah Putih" 2026) |

*Catatan: persentase perbandingan bobot/harga presisi antar tipe tidak dikutip di tabel ini karena sumber yang tersedia (blog teknik 2013) bukan otoritatif — writer boleh gunakan deskripsi kualitatif "semakin tinggi tipe, semakin ringan namun semakin mahal" tanpa angka persentase pasti.*

### CNG vs LPG — profil tekanan & karakteristik keselamatan dasar
| Aspek | CNG | LPG |
|---|---|---|
| Komponen utama | Metana (>90%) | Propana & butana |
| Tekanan kerja tabung | ~200–250 bar | ~5–10 bar |
| Densitas vs udara | Lebih ringan (0,55–0,80) — bocoran naik ke atas | Lebih berat dari udara — bocoran mengendap di lantai/ruang tertutup |
| Auto-ignition | ~540°C | Lebih rendah (propana ~470°C) |
| Standar tabung acuan Indonesia | ISO 11439 (internasional) + SNI 7407:2009 (cara uji peralatan konversi) | SNI 1452 (tabung baja LPG) + turunannya |

## Edge cases & nuance

- **Jangan menyamakan SNI 7407 dengan "standar desain tabung CNG"** — SNI 7407:2009 adalah standar CARA UJI peralatan konversi BBG pada kendaraan bermotor, bukan spesifikasi desain/material tabung itu sendiri. ISO 11439 lebih tepat disebut sebagai rujukan desain/kategori tabung.
- **SNI tabung gas (1452, 7655, ISO 10691, ISO 10464) adalah untuk LPG, bukan CNG** — jangan tulis "tabung CNG diatur SNI 1452" karena itu keliru; itu standar tabung baja LPG.
- **Insiden Sukabumi 2023 bukan bukti "CNG berbahaya secara inheren"** — akar masalah KNKT adalah korosi internal (air asam dalam gas) dan kalibrasi manometer kedaluwarsa, yakni kegagalan pemeliharaan/pengawasan, bukan kegagalan desain tabung Type 1-4 atau prinsip fisika CNG. Framing yang jujur: "risiko muncul saat standar & inspeksi tidak dipatuhi, bukan karena CNG secara inheren tidak aman."
- **Program "Tabung Merah Putih" (CNG 3 kg pengganti LPG rumah tangga) masih dalam tahap uji coba per pertengahan 2026** — jangan tulis seolah sudah menjadi standar final atau sudah komersial. Ini konteks berguna untuk menunjukkan bahwa standar & pengujian tabung terus berkembang, tapi harus di-attribute dengan jelas sebagai "sedang diuji" (Juli 2026, di Lemigas).
- **Perbedaan konteks kendaraan vs distribusi (GTM/PRS)**: standar tabung kendaraan (ISO 11439) untuk tabung tetap terpasang & mengalami siklus isi-ulang; sedangkan operasi distribusi CNG beyond-pipeline (skid/GTM yang diangkut truk) menghadapi tantangan tambahan (guncangan transportasi, korosi iklim tropis) — sesuai temuan KNKT. Jangan generalisasi kedua konteks sebagai identik.
- **Angka auto-ignition & flammability range adalah simplifikasi yang diterima luas**, bukan angka presisi absolut — literatur ilmiah primer mencatat variasi (537–600°C untuk auto-ignition; 4,4–16,4% untuk flammability limit tergantung metode & kondisi uji). Tulis dengan kualifikasi "sekitar" untuk tetap akurat namun tetap citable.

## Flags (open factual risk)

- ⚠️ **Interval inspeksi berkala/hydrotest spesifik untuk tabung CNG** (mis. "setiap 5 tahun"): sumber yang ditemukan untuk angka ini adalah situs konsultan K3 pihak ketiga (binaprima.co.id), BUKAN teks pasal resmi Permenaker No. 37/2016 yang berhasil diverifikasi langsung (akses ke peraturan.bpk.go.id dan jdih.kemnaker.go.id terhambat/tidak dapat di-fetch penuh dalam riset ini). → **Rekomendasi**: jangan sebut angka interval spesifik ("setiap 5 tahun") sebagai fakta pasti dari Permenaker 37/2016 tanpa verifikasi tambahan ke teks resmi peraturan. Aman untuk menyebut *bahwa* Permenaker 37/2016 mewajibkan inspeksi berkala bejana tekanan oleh pihak berkompeten (Ahli K3 bersertifikat) tanpa menyebut angka tahun spesifik, ATAU frasakan sebagai "umumnya diwajibkan secara berkala sesuai ketentuan K3 bejana tekanan" tanpa angka.

- ⚠️ **Persentase perbandingan bobot antar-tipe tabung (Type 1 vs 2 vs 3 vs 4)**: satu-satunya sumber untuk angka "70% lebih ringan", "50% lebih ringan", "harga 2-3x lipat" adalah blog teknik non-akademik tahun 2013 (mechanicalengboy.wordpress.com), bukan jurnal/standar resmi. → **Rekomendasi**: tulis tren kualitatif saja ("semakin tinggi tipe tabung, semakin ringan namun semakin mahal") tanpa mengutip persentase presisi sebagai fakta.

- ⚠️ **Auto-ignition temperature metana "~540°C"**: angka ini konsisten di sumber populer Indonesia namun literatur ilmiah primer internasional (ScienceDirect, EPA HERO) mencatat variasi signifikan (537–600°C) tergantung metode pengukuran, dan mencatat bahwa nilai "537°C" bersifat teoritis bukan hasil eksperimen tunggal yang definitif. → **Rekomendasi**: gunakan hedging "sekitar 540°C" — jangan klaim sebagai angka mutlak/presisi satu digit.

- ⚠️ **SNI 7407:2009 — detail pasal/klausul spesifik**: peneliti tidak berhasil mengakses dokumen resmi lengkap dari sispk.bsn.go.id (sertifikat kedaluwarsa/akses terbatas); ringkasan scope berasal dari sumber sekunder (Scribd upload dokumen). → **Rekomendasi**: tulis scope umum SNI 7407:2009 (cara uji peralatan konversi CNG kendaraan bermotor) tanpa mengutip nomor klausul/pasal spesifik yang tidak terverifikasi langsung.

- ⚠️ **Tekanan kerja tabung CNG "200–250 bar" sebagai rentang presisi**: ESDM secara resmi hanya menyebut "~200 bar" sebagai titik kompresi acuan; angka "250 bar" berasal dari sumber sekunder (artikel energi populer, bukan regulasi/standar tunggal). → **Rekomendasi**: tulis sebagai "sekitar 200 bar, dengan sebagian desain tabung mencapai hingga 250 bar" — jangan klaim "200–250 bar" seolah itu satu rentang resmi dari satu badan standar.

- ⚠️ **Program "Tabung Merah Putih" CNG 3 kg**: ini adalah inisiatif pemerintah yang MASIH DALAM TAHAP UJI COBA per Juli 2026 (bukan produk final/komersial). Angka jumlah prototipe (disebut "15" di satu sumber, "belasan" di sumber lain) dan durasi uji (2-3 bulan) berpotensi berubah cepat. → **Rekomendasi**: jika disinggung (mis. sebagai contoh Type 4 sesuai catatan strategist), framing eksplisit sebagai "sedang diuji pemerintah per pertengahan 2026" — jangan framing sebagai sudah berlaku/tersedia untuk publik.

## Definition snippet draft (40–60 words)

> Keselamatan CNG (Compressed Natural Gas) bergantung pada kombinasi karakteristik fisik gas metana — densitas lebih ringan dari udara, suhu penyalaan sendiri tinggi (sekitar 540°C), dan rentang mudah terbakar sempit (sekitar 5–15%) — dengan standar teknis tabung (seperti ISO 11439), pengujian resmi oleh lembaga seperti Lemigas, serta inspeksi dan sertifikasi berkala sesuai ketentuan K3 bejana tekanan di Indonesia.

## Notes for visuals (feed the writer's {IMAGE_NN} placeholders)

- **Concept 1 — Diagram perbandingan sifat fisik CNG vs LPG vs BBM**: infografis sederhana menunjukkan tiga bahan bakar berdampingan dengan panah/ikon untuk densitas relatif terhadap udara (CNG naik/menguap, LPG turun/mengendap), skala tekanan tabung (bar), dan suhu auto-ignition — cocok untuk H2 #1, alt-text: "Perbandingan karakteristik keselamatan fisik CNG, LPG, dan BBM".
- **Concept 2 — Potongan-melintang (cutaway) tabung CNG Type 1 vs Type 4**: ilustrasi teknis menunjukkan lapisan material (baja solid pada Type 1 vs liner polimer + pembungkus komposit carbon fiber pada Type 4), dengan label bobot relatif & aplikasi tipikal — cocok untuk H2 #2 (tabel tipe tabung), alt-text: "Potongan melintang tabung CNG Type 1 dan Type 4 menunjukkan perbedaan material".
- **Concept 3 — Alur rantai jaminan keselamatan CNG**: diagram proses linear/flowchart dari "Desain sesuai standar (ISO 11439)" → "Uji tekanan di Lemigas (tensile, hidrostatik, burst test)" → "Sertifikasi & penomoran seri" → "Instalasi fitur pengaman (solenoid, PRD)" → "Inspeksi berkala" — cocok untuk H2 #3/#4, alt-text: "Rantai proses jaminan keselamatan tabung CNG dari standar hingga inspeksi berkala".
