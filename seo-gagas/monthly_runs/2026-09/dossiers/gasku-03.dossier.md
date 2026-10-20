---
brief_id: "gasku-03"
researcher_run_date: "2026-09-17"
sources_cited: 14
flags: 5
---

# Research Dossier: Converter Kit BBG untuk Gasku: Venturi vs Sequential & Cara Memilih

## TL;DR for the writer

- **Anatomi kit itu satu paket regulasi, bukan cuma produk**: Permenperin No. 70/M-IND/PER/7/2012 (Pasal 1) mendefinisikan rangkaian converter kit CNG/LGV sebagai pipa penyalur, regulator, mixer/injektor, katup tabung, katup isolasi, non-return fill valve, sambungan pengisian, perangkat cut-off otomatis, indikator tekanan/volume gas, perangkat kontrol elektronik (ECU), dan pengkabelan — pakai daftar ini untuk H2 #1.
- **Dua kelas kit itu nyata secara teknis, bukan sekadar istilah marketing**: venturi/mixer mencampur gas-udara secara mekanis di intake manifold tanpa ECU khusus gas; sequential injection menyuntikkan gas per silinder lewat injektor yang dikontrol ECU gas terpisah — sequential lebih presisi tapi lebih mahal dan lebih menuntut kondisi mesin (umumnya mobil injeksi modern).
- **Ada TIGA lapis standar berbeda yang sering dicampur orang**: SNI (nasional, wajib via Permenperin), standar tabung internasional (ISO 11439), dan regulasi komponen kendaraan UNECE (ECE R110 untuk CNG/LNG — BUKAN ECE R67 yang khusus LPG/LGV). Jangan menyamakan kit CNG dengan kit LGV/LPG — beda regulasi rujukan.
- **Angka SNI 7407 vs 7408 butuh kehati-hatian**: sumber yang paling mendekati teks asli Permenperin 70/2012 menyebut SNI 7407:2009 untuk peralatan konversi (converter kit) dan SNI 7408:2009 untuk cara uji tabung — tapi ada satu dokumen publik (scan Scribd) yang memberi judul terbalik. Confidence: medium — hedge di draft, jangan klaim "pasti" tanpa atribusi ke Permenperin 70/2012.
- **Harga kit Rp13–25 juta adalah rentang pasar 2024–2026 dari media otomotif**, bukan tarif resmi PGN Gagas — variasi utama karena asal kit (China vs Eropa) dan jumlah silinder, bukan cc mesin.
- **PM 39/2012 Kemenhub mensyaratkan sertifikasi bengkel DAN teknisi terpisah** (teknisi perawatan vs teknisi pemasangan, masing-masing min. 2 tahun pengalaman + pelatihan kompetensi + sertifikat terdaftar Ditjen Perhubungan Darat) — ini bahan kuat untuk checklist bengkel di H2 #4.

## Core facts (verified)

> **Claim**: Converter kit BBG adalah rangkaian komponen yang secara resmi terdiri dari pipa penyalur, regulator, mixer atau injektor, katup tabung, katup isolasi, katup pengisian searah (non-return), sambungan pengisian, perangkat pemutus otomatis, indikator tekanan/volume gas, perangkat kontrol elektronik, dan pengkabelan — untuk kendaraan CNG maupun LGV.
> **Number/specific**: Didefinisikan dalam Pasal 1 Permenperin No. 70/M-IND/PER/7/2012, ditetapkan 27 Juli 2012, diundangkan dalam Berita Negara RI No. 761 tanggal 30 Juli 2012.
> **Source**: Kementerian Perindustrian, "Kemenperin Mewajibkan Persyaratan Teknis Rangkaian Komponen Konverter Kit Untuk Kendaraan Bermotor", kemenperin.go.id, diakses 17 September 2026 — https://kemenperin.go.id/artikel/4130
> **Confidence**: high

> **Claim**: Permenperin 70/2012 berlaku untuk kendaraan bermotor berbahan bakar CNG (Compressed Natural Gas) maupun LGV (Liquefied Gas for Vehicle) — dua kategori bahan bakar gas yang diperlakukan sebagai satu payung regulasi wajib, meski merujuk standar teknis berbeda.
> **Number/specific**: Judul resmi: "Pemberlakuan Persyaratan Teknis Rangkaian Komponen Konverter Kit untuk Kendaraan Bermotor Secara Wajib".
> **Source**: Kemenperin, kemenperin.go.id/artikel/4130, diakses 17 September 2026; dikonfirmasi silang di pasal.id/peraturan/permen/permenperin-no-70-m-ind-per-7-2012-tahun-2012, diakses 17 September 2026
> **Confidence**: high

> **Claim**: Status Permenperin No. 70/M-IND/PER/7/2012 per pengecekan terakhir adalah masih berlaku (belum ada catatan pencabutan resmi).
> **Number/specific**: Status field: "Berlaku".
> **Source**: agregator peraturan pasal.id (mengutip status regulasi), diakses 17 September 2026 — https://pasal.id/peraturan/permen/permenperin-no-70-m-ind-per-7-2012-tahun-2012
> **Confidence**: medium (bukan tampilan langsung dari JDIH Kemenperin/BPK yang bisa saya baca penuh — rekomendasikan konfirmasi status terbaru sebelum publikasi jika artikel akan menyatakan "masih berlaku" secara tegas)

> **Claim**: Berdasarkan definisi Pasal 1 Permenperin 70/2012, SNI 7407:2009 mengatur "Peralatan Konversi Bahan Bakar Gas Bumi Bertekanan (CNG) pada Kendaraan Bermotor" (spesifikasi rangkaian converter kit), sementara SNI 7408:2009 mengatur "Cara Uji Tabung Gas Bumi Bertekanan (CNG) untuk Kendaraan Bermotor" (metode uji tabung/tangki).
> **Number/specific**: SNI 7407:2009 = converter kit; SNI 7408:2009 = metode uji tabung.
> **Source**: pasal.id (mengutip teks Pasal 1 Permenperin 70/2012), diakses 17 September 2026 — https://pasal.id/peraturan/permen/permenperin-no-70-m-ind-per-7-2012-tahun-2012
> **Confidence**: medium — **ada satu dokumen publik (scan di Scribd) dengan judul yang tampak terbalik untuk SNI 7407-2009** ("Cara Uji Tabung..."). Karena BSN belum bisa saya akses penuh (akses-sni.bsn.go.id memerlukan login), rekomendasikan penulis memframe ini dengan atribusi eksplisit ke Permenperin 70/2012 ("berdasarkan Permenperin 70/2012, SNI 7407-2009 mengatur peralatan konversi sementara SNI 7408-2009 mengatur metode uji tabung") alih-alih menyatakannya sebagai fakta mutlak berdiri sendiri. Lihat flags.

> **Claim**: Selain SNI 7407:2009 dan SNI 7408:2009, Permenperin 70/2012 juga mewajibkan SNI ISO 15500-5:2009 — syarat mutu dan cara uji katup manual pada tabung bahan bakar bertekanan (CNG).
> **Number/specific**: SNI ISO 15500-5:2009 — katup manual tabung CNG.
> **Source**: pasal.id (mengutip Pasal 1 Permenperin 70/2012), diakses 17 September 2026; dikonfirmasi ringkasan serupa di kemenperin.go.id/artikel/4238, diakses 17 September 2026
> **Confidence**: medium-high

> **Claim**: ISO 11439 adalah standar internasional untuk tabung/silinder ringan yang dapat diisi ulang (refillable), khusus untuk penyimpanan CNG bertekanan tinggi di kendaraan bermotor — mencakup tabung berbahan baja seamless, paduan aluminium seamless, atau material non-metal (komposit), dengan tekanan kerja acuan 200 bar, dan diklasifikasikan sebagai Tipe 1, 2, 3, dan 4.
> **Number/specific**: Tekanan kerja acuan = 200 bar; klasifikasi Tipe 1–4; tidak mencakup tabung stainless steel.
> **Source**: ISO, "ISO 11439:2013 — Gas cylinders — High pressure cylinders for the on-board storage of natural gas as a fuel for automotive vehicles", iso.org/standard/44755.html, diakses 17 September 2026
> **Confidence**: high

> **Claim**: ISO 11439 dirujuk secara eksplisit sebagai salah satu standar internasional yang diakui dalam persyaratan teknis converter kit CNG di bawah Permenperin 70/2012, bersama ISO 15500 series, ISO 14469, dan ECE R110.
> **Number/specific**: Disebut berdampingan dengan "Economic Commission for Europe R110 and/or ISO 15500 series, ISO 11439, ISO 14469" untuk kit konverter bahan bakar CNG.
> **Source**: Kemenperin, kemenperin.go.id/artikel/4238 ("Regulasi Standar Kit Konverter Terbit"), diakses 17 September 2026
> **Confidence**: high

> **Claim**: ECE R110 adalah regulasi UNECE (PBB Eropa) yang mengatur persetujuan tipe komponen spesifik kendaraan bermotor yang menggunakan CNG dan/atau LNG dalam sistem penggeraknya, serta pemasangan komponen tersebut pada kendaraan — awalnya hanya CNG, diperluas mencakup LNG sejak amandemen November 2013.
> **Number/specific**: Regulation No. 110 UNECE; diperluas ke LNG sejak November 2013.
> **Source**: UNECE, "Regulation No. 110 — Addendum 109", unece.org/sites/default/files/2022-07/R110r6e.pdf, diakses 17 September 2026
> **Confidence**: high

> **Claim**: ECE R67 adalah regulasi UNECE yang terpisah dari ECE R110, khusus mengatur komponen peralatan LPG (Liquefied Petroleum Gas) untuk kendaraan kategori M dan N1 — bukan untuk CNG. Ini dasar teknis untuk TIDAK menyamakan kit CNG dengan kit LGV/LPG.
> **Number/specific**: Regulation No. 67; klasifikasi komponen LPG Kelas 1–3A berdasarkan tekanan kerja maksimum.
> **Source**: UNECE, "Agreement Addendum 66: Regulation No. 67", unece.org/fileadmin/DAM/trans/main/wp29/wp29regs/R067r3e.pdf, diakses 17 September 2026
> **Confidence**: high

> **Claim**: Peraturan Menteri Perhubungan (PM) No. 39 Tahun 2012 tentang Penggunaan Bahan Bakar Gas Jenis CNG pada Kendaraan Bermotor mewajibkan bengkel konversi memiliki sertifikat dari Direktur Jenderal Perhubungan Darat, dan mensyaratkan dua jenis teknisi bersertifikat terpisah — teknisi perawatan dan teknisi pemasangan — masing-masing minimal 2 tahun pengalaman di bidang otomotif ditambah pelatihan kompetensi khusus BBG yang terdaftar di Ditjen Perhubungan Darat.
> **Number/specific**: Ditetapkan 25 Juni 2012, mulai berlaku 27 Juni 2012; mencabut KM 64 Tahun 1993.
> **Source**: JDIH Kementerian Perhubungan (metadata regulasi) — jdih.kemenhub.go.id; ringkasan isi dikonfirmasi silang di pasal.id/peraturan/permen/permenhub-no-pm-39-tahun-2012 dan peraturan.bpk.go.id/Details/147046/permenhub-no-39-tahun-2012, semua diakses 17 September 2026
> **Confidence**: medium-high (status "berlaku" konsisten di dua sumber independen; rincian isi Pasal-per-Pasal dikutip dari agregator pasal.id, bukan pembacaan langsung PDF resmi JDIH Kemenhub yang berhasil saya ekstrak teksnya — rekomendasikan verifikasi cepat sebelum menyebut rincian teknisi secara sangat spesifik)

> **Claim**: Gas alam terkompresi (CNG) yang disalurkan PGN Gagas dikompresi hingga tekanan tinggi sekitar 200 bar, dan memiliki nilai oktan lebih dari 120 RON — jauh di atas bensin biasa yang berkisar 90–95 RON.
> **Number/specific**: ~200 bar tekanan kompresi; >120 RON vs 90–95 RON bensin.
> **Source**: PGN Gagas, halaman produk Gasku, gagas.co.id/gasku/, diakses 17 September 2026
> **Confidence**: high (sumber first-party resmi PGN Gagas)

> **Claim**: Oktan yang lebih tinggi pada CNG relevan secara teknis untuk sequential injection karena sistem ini dapat menyetel waktu dan jumlah injeksi gas secara presisi per silinder lewat ECU gas — memaksimalkan potensi pembakaran yang lebih tahan detonasi dari gas beroktan tinggi, dibanding sistem venturi/mixer yang mencampur gas-udara secara mekanis di intake manifold tanpa kendali ECU dedicated per-silinder.
> **Number/specific**: Sequential = injeksi per silinder + ECU gas terpisah; venturi/mixer = pencampuran mekanis, tanpa ECU CNG dedicated.
> **Source**: Ringkasan teknis industri konversi CNG (deskripsi kerja venturi vs sequential), think-gas.com/blogs/sequential-and-conventional-cng-kit-know-the-differences, diakses 17 September 2026 — dipakai sebagai penjelasan cara-kerja umum, BUKAN sumber regulasi Indonesia
> **Confidence**: medium (sumber teknis non-pemerintah, konsisten dengan prinsip kerja converter kit yang juga tersirat dari daftar komponen di Permenperin 70/2012, tapi bukan sumber otoritatif Indonesia — gunakan sebagai penjelasan konsep, bukan klaim regulasi)

> **Claim**: Kisaran harga pasar converter kit BBG di Indonesia (belum termasuk jasa pasang tertentu) sekitar Rp13 juta untuk kit asal China kualitas standar, hingga Rp15–25 juta tergantung tipe/kualitas/jumlah silinder, dengan kit asal Eropa umumnya di kisaran Rp16–18 juta ke atas.
> **Number/specific**: Rp13 juta (entry, China) s.d. Rp25 juta (kualitas/kompleksitas lebih tinggi); paket lengkap mencakup ECU tambahan, injektor, reducer, dan tabung.
> **Source**: CNBC Indonesia, "Pakai Converter Kit, Kendaraan Bisa Konsumsi Bensin dan Gas", 4 Maret 2024, cnbcindonesia.com/news/20240304105142-4-519389; IDN Times, "Mau Irit BBM? Konversi Mobil Bensin ke BBG Mulai dari Rp13 Juta", 5 Mei 2026, idntimes.com — keduanya diakses 17 September 2026
> **Confidence**: medium — ini **rentang pasar dari pemberitaan otomotif**, berubah sewaktu-waktu mengikuti kurs/komponen; **bukan tarif atau rekomendasi harga PGN Gagas** dan harus dilabel eksplisit sebagai estimasi pasar dengan tanggal sumber.

> **Claim**: Instalasi converter kit CNG di ekosistem Gasku wajib dilakukan di bengkel bersertifikat atau mitra teknis resmi, dengan syarat kendaraan bermesin bensin 4 roda (spark ignition) dalam kondisi kelistrikan, pengapian, dan kompresi yang baik, serta memerlukan ruang bagasi/bak untuk tabung CNG. Hasil pemasangan memberi kemampuan bi-fuel (bensin dan gas).
> **Number/specific**: Syarat: mesin bensin 4 roda (spark ignition); bengkel bersertifikat/mitra teknis resmi; kapasitas bagasi untuk tabung.
> **Source**: PGN Gagas, gagas.co.id/gasku/, diakses 17 September 2026
> **Confidence**: high (first-party resmi)

> **Claim**: Riset Badan Riset dan Inovasi Nasional (BRIN) menyatakan penggunaan gas alam sebagai alternatif bensin dapat mengurangi emisi penyebab polusi udara sekitar 20–25% dibanding bensin, karena komposisi CNG didominasi metana (~90%) yang menghasilkan CO2 lebih rendah saat pembakaran.
> **Number/specific**: Reduksi emisi 20–25%; kandungan metana ~90%.
> **Source**: Antara News, "BRIN: Gas alam sebagai alternatif bensin efektif kurangi emisi" (mengutip peneliti BRIN Hari Sumartono), antaranews.com/berita/3147657, diakses 17 September 2026
> **Confidence**: high (sumber pers dengan atribusi nama peneliti jelas; angka emisi konsisten dengan literatur CNG-vs-bensin umum)

> **Claim**: Pemerintah pernah menjalankan program distribusi converter kit gratis untuk angkutan umum dan kendaraan dinas melalui Ditjen Migas ESDM: 500 unit (2011, Jabodetabek & Palembang), 1.000 unit (2012, Jabodetabek, Surabaya, Palembang), dan total kumulatif 3.444 unit converter kit gratis hingga Desember 2013 di Jabodetabek, Sumsel, Surabaya, dan Denpasar.
> **Number/specific**: 500 (2011) → 1.000 (2012) → total 3.444 unit s.d. Des 2013.
> **Source**: Kementerian ESDM, Direktorat Jenderal Minyak dan Gas Bumi, "Diversifikasi BBM ke Bahan Bakar Gas Pada Sektor Transportasi", migas.esdm.go.id, diakses 17 September 2026
> **Confidence**: medium-high (angka historis 2011-2013, berguna sebagai konteks program pemerintah, bukan data terkini — jangan diframe sebagai program yang sedang berjalan saat ini tanpa verifikasi lanjutan)

> **Claim**: PT Gagas Energi Indonesia (PGN Gagas) adalah anak usaha PT Perusahaan Gas Negara Tbk (PGN), bagian dari Subholding Gas Pertamina, berdiri 2011, dan menyalurkan CNG beyond-pipeline melalui dua layanan utama: Gasku (transportasi) dan Gaslink (industri & komersial).
> **Number/specific**: Berdiri 2011; sertifikasi ISO 9001:2015, ISO 45001:2018, ISO 37001:2016 (2025).
> **Source**: knowledge_base/company_profile.md (distilled dari profil resmi PGN Gagas & gagas.co.id) — pre-approved untuk klaim PGN Gagas
> **Confidence**: high (sumber first-party pre-approved)

## Solution focus + PGN Gagas anchor (from product_matrix.md)

| What to teach (gas-bumi/CNG tech) | Facts to state accurately | Where in article | PGN Gagas service/credential to anchor CTA |
|---|---|---|---|
| Anatomi converter kit CNG (reducer/vaporizer, mixer/injektor, ECU, tabung, katup, selector/switch) sesuai definisi resmi Permenperin 70/2012 | Daftar komponen resmi dari Pasal 1 Permenperin 70/2012; tekanan kerja tabung acuan 200 bar (ISO 11439) | H2 #1 (definisi) | Disinggung ringan: Gasku sebagai contoh layanan BBG yang mensyaratkan kit lengkap & bersertifikat |
| Dua kelas sistem kit — venturi/mixer (non-ECU) vs sequential injection (ECU per silinder) — beserta trade-off harga/presisi/kecocokan mesin | Cara kerja teknis (mekanis vs elektronik terkontrol); oktan gas >120 RON relevan untuk potensi sequential | H2 #2 (tabel perbandingan) | Tidak perlu anchor Gagas di sini — tetap vendor-neutral |
| Standar & sertifikasi Indonesia: SNI 7407-2009 (converter kit), SNI 7408-2009 (uji tabung), SNI ISO 15500-5:2009 (katup), Permenperin 70/2012 (payung wajib), + standar internasional ISO 11439 (tabung) & ECE R110 (komponen CNG/LNG, bukan ECE R67/LPG) | Semua diverifikasi ke Kemenperin/UNECE; SNI 7407 vs 7408 dihedge (lihat flags) | H2 #3 (question-format) | Tidak perlu anchor Gagas — bagian edukasi standar murni |
| Sertifikasi bengkel & teknisi (PM 39/2012 Kemenhub): sertifikat bengkel dari Ditjen Hubdat, teknisi perawatan & pemasangan terpisah, masing-masing min. 2 tahun pengalaman + pelatihan kompetensi | Checklist bengkel — bersertifikat, uji tekanan/kebocoran pasca-pasang, dokumentasi | H2 #4 (checklist) | **Anchor utama**: satu kalimat bahwa layanan BBG resmi seperti Gasku diakses lewat jaringan SPBG & mitra bengkel bersertifikat |
| Biaya kit sebagai rentang pasar (Rp13–25 juta, 2024–2026) vs risiko kit murah tanpa sertifikat/garansi | Sumber CNBC Indonesia & IDN Times, dilabel rentang pasar, bukan tarif Gagas | H2 #5 (honest/counter-conventional) | Tidak perlu anchor Gagas — murni edukasi risiko |
| Closing / CTA | Gasku sebagai layanan BBG PGN Gagas yang mensyaratkan pemasangan di bengkel bersertifikat & tabung sesuai standar | Penutup | **Anchor utama & soft CTA** ke gagas.co.id |

Reminder: PGN Gagas **menyalurkan/mengangkut/memasok/mendistribusikan** gas bumi (CNG) — bukan produsen gas bumi di hulu, dan bukan produsen converter kit. Total self-mentions disarankan: 2 (satu di H2 #4, satu di closing) — sesuai batas brief.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Kementerian Perindustrian (kemenperin.go.id), 2012** — https://kemenperin.go.id/artikel/4130 — *apa yang didukung*: definisi resmi komponen converter kit dan kewajiban SNI 7407-2009/7408-2009 di bawah Permenperin 70/2012.
2. **JDIH Kementerian Perhubungan / peraturan.bpk.go.id** — https://peraturan.bpk.go.id/Details/147046/permenhub-no-39-tahun-2012 — *apa yang didukung*: keberadaan dan status PM 39/2012 tentang penggunaan CNG pada kendaraan bermotor (dasar sertifikasi bengkel & teknisi).
3. **ISO (International Organization for Standardization)** — https://www.iso.org/standard/44755.html — *apa yang didukung*: definisi & cakupan ISO 11439 untuk tabung CNG kendaraan (tekanan 200 bar, Tipe 1–4).
4. **UNECE (United Nations Economic Commission for Europe)** — https://unece.org/sites/default/files/2022-07/R110r6e.pdf — *apa yang didukung*: cakupan ECE R110 untuk komponen kendaraan CNG/LNG (dan pembeda dari ECE R67 untuk LPG).
5. **Kementerian ESDM, Ditjen Migas** — https://www.migas.esdm.go.id/post/Diversifikasi-BBM-ke-Bahan-Bakar-Gas-Pada-Sektor-Transportasi — *apa yang didukung*: konteks program pemerintah konversi BBM ke BBG dan data historis distribusi converter kit.

## FAQ Q&As (drafted, Bahasa Indonesia)

### Apa perbedaan converter kit venturi dan sequential injection?
Kit venturi (mixer) mencampur gas dan udara secara mekanis sebelum masuk ke intake manifold, tanpa unit kontrol elektronik (ECU) khusus gas — lebih sederhana dan murah. Kit sequential injection menyuntikkan gas ke tiap silinder secara individual lewat injektor yang diatur ECU gas terpisah, menghasilkan pembakaran lebih presisi, tarikan lebih halus, dan konsumsi gas lebih efisien, dengan harga yang umumnya lebih tinggi.

### Converter kit jenis apa yang cocok untuk mobil injeksi modern?
Mobil dengan sistem injeksi bahan bakar modern (EFI) umumnya lebih cocok dengan sequential injection karena sistem ini bekerja selaras dengan ECU bensin asli mobil, menjaga presisi campuran udara-gas per silinder. Kit venturi lebih lazim dipasang pada mesin karburator atau injeksi generasi awal yang tidak membutuhkan kontrol elektronik serumit itu.

### Apakah converter kit harus ber-SNI?
Ya. Berdasarkan Permenperin No. 70/M-IND/PER/7/2012, rangkaian komponen converter kit untuk kendaraan berbahan bakar CNG maupun LGV wajib memenuhi persyaratan teknis, termasuk SNI 7407-2009, SNI 7408-2009, dan SNI ISO 15500-5:2009, baik untuk produk buatan dalam negeri maupun impor — bukan pilihan opsional.

### Apa saja isi satu paket converter kit BBG?
Berdasarkan definisi resmi di Permenperin 70/2012, satu paket converter kit terdiri dari pipa penyalur gas, regulator/reducer, mixer atau injektor, katup tabung, katup isolasi, katup pengisian searah (non-return), sambungan pengisian, perangkat pemutus otomatis, indikator tekanan/volume gas, unit kontrol elektronik (ECU untuk sistem sequential), tabung penyimpanan, dan pengkabelan.

### Berapa kisaran biaya converter kit mobil?
Berdasarkan pemberitaan otomotif 2024–2026, harga converter kit BBG di pasar Indonesia berkisar dari sekitar Rp13 juta (kit standar asal China) hingga Rp25 juta, tergantung kualitas, negara asal komponen, dan jumlah silinder mesin. Angka ini adalah estimasi pasar umum, bukan tarif resmi dari penyedia BBG tertentu, dan bisa berubah sewaktu-waktu.

### Bagaimana memastikan bengkel konversi BBG bersertifikat?
Berdasarkan PM 39 Tahun 2012 Kementerian Perhubungan, bengkel konversi CNG wajib memegang sertifikat dari Direktur Jenderal Perhubungan Darat, serta mempekerjakan teknisi perawatan dan teknisi pemasangan yang masing-masing bersertifikat kompetensi tersendiri. Calon pengguna sebaiknya meminta bukti sertifikat bengkel dan teknisi sebelum pemasangan, bukan hanya mengandalkan testimoni.

### Apakah tabung CNG untuk converter kit sama dengan tabung LPG rumah tangga?
Tidak sama. Tabung CNG untuk kendaraan dirancang menahan tekanan kerja acuan sekitar 200 bar sesuai standar internasional ISO 11439 (Tipe 1 hingga 4, termasuk konstruksi seamless), jauh di atas tekanan tabung LPG rumah tangga. Komponen kit CNG juga tunduk pada regulasi kendaraan berbeda (ECE R110) dibanding komponen LPG/LGV kendaraan (ECE R67).

## Data tables for the writer

### Venturi (Mixer) vs Sequential Injection

| Aspek | Venturi / Mixer | Sequential Injection |
|---|---|---|
| Cara kerja | Mencampur gas-udara secara mekanis di intake manifold | Menyuntikkan gas ke tiap silinder secara individual via injektor |
| Kebutuhan ECU gas | Umumnya tanpa ECU gas dedicated | Wajib ECU gas terpisah, sinkron dengan ECU bensin |
| Presisi campuran | Lebih rendah, tergantung throttle | Tinggi — disesuaikan per silinder & kondisi mesin |
| Kecocokan mesin | Mesin karburator / injeksi generasi awal | Mesin injeksi (EFI) modern |
| Harga relatif (indikatif) | Cenderung di sisi bawah rentang pasar (≈Rp13–16 juta) | Cenderung di sisi atas rentang pasar (≈Rp18–25 juta) |
| Kehalusan & performa | Berpotensi brebet saat transisi bahan bakar | Transisi lebih halus, performa lebih stabil |

*Catatan: rentang harga indikatif per aspek di atas adalah interpretasi kasar dari rentang pasar umum (Rp13–25 juta) yang dilaporkan media otomotif — bukan daftar harga resmi per tipe kit dari satu sumber tunggal. Sampaikan sebagai estimasi, bukan angka pasti per jenis.*

### Lapisan standar & regulasi converter kit CNG (Indonesia + internasional)

| Standar/Regulasi | Otoritas | Yang diatur | Status (per cek 17 Sep 2026) |
|---|---|---|---|
| Permenperin No. 70/M-IND/PER/7/2012 | Kementerian Perindustrian | Kewajiban persyaratan teknis rangkaian converter kit CNG & LGV | Berlaku |
| SNI 7407:2009 | BSN (via Permenperin 70/2012) | Peralatan konversi BBG (converter kit) — *hedge, lihat flags* | Wajib bagi kit CNG |
| SNI 7408:2009 | BSN (via Permenperin 70/2012) | Cara uji tabung gas bertekanan (CNG) — *hedge, lihat flags* | Wajib bagi kit CNG |
| SNI ISO 15500-5:2009 | BSN (via Permenperin 70/2012) | Syarat mutu & uji katup manual tabung CNG | Wajib bagi kit CNG |
| ISO 11439 | ISO (internasional) | Tabung/silinder CNG kendaraan, tekanan acuan 200 bar, Tipe 1–4 | Dirujuk sebagai standar internasional yang diakui |
| ECE R110 | UNECE | Komponen kendaraan CNG & LNG | Dirujuk sebagai standar internasional yang diakui |
| ECE R67 | UNECE | Komponen kendaraan LPG (bukan CNG) | Rujukan terpisah untuk kit LGV/LPG, bukan untuk kit CNG |
| PM 39 Tahun 2012 (Kemenhub) | Kementerian Perhubungan | Sertifikasi bengkel & teknisi konversi CNG | Berlaku |

## Edge cases & nuance

- **"Ber-SNI" tidak otomatis berarti "terpasang dengan benar"** — kit boleh ber-sertifikat tapi tetap gagal berfungsi baik jika dipasang oleh teknisi tanpa sertifikat kompetensi PM 39/2012, atau tanpa tuning ECU yang tepat. Jangan menyiratkan bahwa sertifikat produk saja cukup — pemasangan dan tuning sama pentingnya.
- **Venturi bukan berarti "buruk" atau usang secara mutlak** — untuk mesin karburator atau kendaraan niaga sederhana, sistem ini masih relevan dan lebih murah; kesalahan umum adalah menganggap sequential selalu lebih baik tanpa mempertimbangkan jenis mesin.
- **Kit murah tidak selalu berarti tidak ber-SNI, dan kit mahal tidak otomatis bersertifikat lengkap** — harga adalah proksi lemah untuk kepatuhan standar; pembaca tetap harus memverifikasi dokumen sertifikat, bukan berasumsi dari harga saja.
- **Perbedaan SNI 7407 vs 7408 sebaiknya diframe via Permenperin 70/2012**, bukan diklaim sebagai fakta berdiri sendiri — ada inkonsistensi penamaan di dokumen publik yang beredar (lihat flags).
- **CNG (kit ini) ≠ LGV/LPG (kit berbeda)** — meski sama-sama di bawah payung Permenperin 70/2012, keduanya merujuk standar SNI dan regulasi UNECE yang berbeda (ECE R110 vs ECE R67). Artikel harus eksplisit menyebut ini agar pembaca tidak salah beli kit LPG untuk mobil yang seharusnya pakai CNG, atau sebaliknya.
- **Status "berlaku" regulasi bisa berubah** — baik Permenperin 70/2012 maupun PM 39/2012 diterbitkan 2012 dan belum terlihat revisi definitif dalam riset ini, tapi regulasi teknis kendaraan cenderung direvisi seiring waktu; jangan menyatakan "masih berlaku hingga kini" sebagai fakta permanen tanpa kualifikasi tanggal cek.

## Flags (open factual risk)

- ⚠️ **SNI 7407-2009 vs SNI 7408-2009 — arah cakupan**: Mayoritas sumber (termasuk kutipan langsung Pasal 1 Permenperin 70/2012 via pasal.id, dan dua sintesis WebSearch independen dari halaman Kemenperin/BSN) menunjukkan SNI 7407:2009 = peralatan konversi/converter kit, dan SNI 7408:2009 = cara uji tabung. Namun satu dokumen publik (scan di Scribd, kemungkinan salah label unggahan) menuliskan judul "Cara Uji Tabung..." untuk SNI 7407-2009. Saya tidak berhasil mengakses database resmi BSN (akses-sni.bsn.go.id memerlukan login) untuk verifikasi definitif satu-ke-satu. → **Rekomendasi**: tulis dengan atribusi eksplisit ("berdasarkan Permenperin 70/2012...") dan/atau frasa "SNI 7407-2009 dan SNI 7408-2009" berdampingan tanpa memilah tugas masing-masing secara sangat spesifik jika ingin bermain aman; jika memilah, sertakan atribusi ke Permenperin 70/2012 seperti di atas.
- ⚠️ **Rincian isi PM 39/2012 (persyaratan bengkel & teknisi)**: Saya mengonfirmasi status "berlaku" dari peraturan.bpk.go.id (sumber semi-resmi/agregator BPK), tapi rincian teknis (daftar peralatan wajib bengkel, jumlah tahun pengalaman teknisi) berasal dari kutipan agregator pasal.id, bukan pembacaan langsung teks PDF resmi JDIH Kemenhub (gagal diekstrak karena format PDF/gambar). → **Rekomendasi**: sampaikan rincian teknisi (2 tahun pengalaman, pelatihan kompetensi, sertifikat Ditjen Hubdat) sebagai gambaran umum yang diatribusikan ke PM 39/2012, hindari menyebutnya sebagai daftar lengkap tanpa kualifikasi "antara lain" / "di antaranya".
- ⚠️ **Harga kit Rp13–25 juta adalah snapshot pemberitaan 2024 & 2026, bukan data PGN Gagas**: variasi harga sangat dipengaruhi kurs komponen impor dan bisa berubah cepat. → **Rekomendasi**: selalu sertakan tahun sumber ("berdasarkan pemberitaan 2024–2026") dan frasa eksplisit "rentang pasar", bukan "harga converter kit Gasku" atau serupa.
- ⚠️ **Nilai oktan gas — ada angka simpang siur di media**: satu artikel pers (Antara News, mengutip peneliti BRIN) menyebut oktan gas alam "bisa mencapai 320 lebih", sementara sumber first-party PGN Gagas (gagas.co.id/gasku) dan mayoritas sumber teknis konsisten menyebut **>120 RON**. Angka 320 secara teknis tidak masuk akal untuk RON bahan bakar otomotif dan kemungkinan salah kutip/salah cetak di artikel pers tersebut. → **Rekomendasi**: gunakan angka **>120 RON** (dikonfirmasi first-party gagas.co.id) dan JANGAN mengutip angka "320" dari Antara News.
- ⚠️ **Program distribusi converter kit gratis ESDM (2011–2013) adalah data historis**, tidak mencerminkan skema atau anggaran program saat ini (2026). → **Rekomendasi**: jika disebut, framing eksplisit sebagai "konteks historis program pemerintah", bukan program yang sedang berjalan dengan skema sama.

## Definition snippet draft (40–60 words)

> Converter kit BBG adalah satu paket komponen — pipa penyalur, regulator/reducer, mixer atau injektor, unit kontrol elektronik (ECU), tabung penyimpanan bertekanan, dan katup pemutus (switch) — yang memungkinkan mesin berbahan bakar bensin memakai Compressed Natural Gas (CNG) sebagai bahan bakar alternatif, sesuai persyaratan teknis wajib Permenperin No. 70/M-IND/PER/7/2012.

## Notes for visuals (feed the writer's {IMAGE_NN} placeholders)

- **Concept 1 — Diagram anatomi converter kit**: Ilustrasi potongan mobil dari samping menunjukkan alur gas dari tabung (bagasi/bak) → regulator/reducer → mixer/injektor → ruang bakar, dengan ECU dan switch/selector di dashboard sebagai callout terpisah. Label Bahasa Indonesia pada tiap komponen (Tabung CNG, Regulator/Reducer, Mixer/Injektor, ECU Gas, Selector Bensin-Gas). Gaya flat-illustration, palet biru-hijau PGN Gagas. Alt-text: "Diagram anatomi converter kit BBG pada kendaraan".
- **Concept 2 — Infografik perbandingan Venturi vs Sequential Injection**: Dua kolom side-by-side dengan ikon alur (mixer mekanis vs injektor + ECU per silinder), disertai badge singkat "Tanpa ECU" vs "Dengan ECU per silinder", dan indikator relatif harga/presisi sebagai skala sederhana (bukan angka presisi). Alt-text: "Infografik perbandingan kit venturi dan sequential injection BBG".
- **Concept 3 — Peta lapisan standar & sertifikasi**: Diagram piramida atau lapisan konsentris menunjukkan hierarki: Permenperin 70/2012 (payung wajib nasional) → SNI 7407-2009 & 7408-2009 & SNI ISO 15500-5:2009 (standar produk) → ISO 11439 & ECE R110 (rujukan internasional) → PM 39/2012 Kemenhub (sertifikasi bengkel/teknisi, lapisan terpisah untuk jasa pemasangan). Gunakan warna berbeda untuk "standar produk kit" vs "sertifikasi bengkel" agar pembaca tidak mencampur keduanya. Alt-text: "Peta standar dan sertifikasi converter kit BBG di Indonesia".
