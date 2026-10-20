---
brief_id: "cng-indonesia-03"
researcher_run_date: "2026-08-11"
sources_cited: 11
flags: 9
---

# Research Dossier: Kualitas Gas CNG — Nilai Kalor, Wobbe Index, dan Spesifikasinya

## TL;DR for the writer

- The article's core teachable entities — **nilai kalor (calorific value)** and **Wobbe index** — have solid, citable international definitions (ISO 13686, ISO 6976, ISO 15971) plus a general-physics formula (WI = nilai kalor ÷ akar berat jenis). Use these for the definition snippet and H2 #2; do not invent Indonesia-specific numeric thresholds for either.
- **Major correction to the brief's assumption**: SNI **8219:2017 is NOT a gas-bumi/CNG standard** — it specifies **Dimethyl Ether (DME)** fuel. Do not cite it for CNG quality. This is an easy mistake because the number sits near 8414 in BSN's catalog.
- **Freshness catch**: SNI **8414:2017 (gas bumi via pipa untuk industri/pembangkit/rumah tangga) has been superseded by SNI 8414:2025**, established by BSN on 12 March 2025. If the article cites a pipeline-gas SNI, cite **8414:2025** as current, mentioning 2017 only as prior edition.
- **No confirmed, finalized SNI number exists specifically for CNG gas-quality-for-vehicles** (as opposed to pipeline gas or converter-kit hardware). The closest traceable document is a 2015 Lemigas (ESDM) journal study proposing RSNI revisions to CNG's water-content/particulate limits — treat as "kajian yang masih berkembang," not a settled regulation.
- **SNI 7407:2009 is a hardware standard** (CNG converter-kit/conversion equipment for vehicles), not a gas-quality/composition spec — keep it out of the "gas quality" narrative; it belongs to the tabung/hardware article (cng-07).
- Do **not** quote exact numeric limits (ppm H2S, mg/Nm³ air, MJ/Nm³ nilai kalor range) from SNI 8414:2025 — the full parameter tables sit behind BSN's paid document portal and were not independently verified in this run. Write the "why it's limited / what happens if exceeded" logic instead of fabricated numbers.

## Core facts (verified)

> **Claim**: CNG (Compressed Natural Gas) adalah gas bumi yang dipampatkan pada tekanan tinggi (hingga sekitar 250 bar) sehingga volumenya menyusut menjadi sekitar 1/250 dari volume pada kondisi standar.
> **Number/specific**: Tekanan kompresi ±250 bar; volume ~1/250 dari volume standar.
> **Source**: Ditjen Migas Kementerian ESDM, "Mengenal Jenis-jenis Gas Bumi," migas.esdm.go.id/post/Mengenal-Jenis-jenis-Gas-Bumi (dipublikasikan 12 Januari 2011, diakses 11 Agustus 2026)
> **Confidence**: high

> **Claim**: Gas pipa (gas bumi yang dialirkan langsung ke pelanggan) didefinisikan sebagai gas bumi yang disalurkan dari lapangan gas **setelah proses pemurnian**.
> **Number/specific**: Definisi eksplisit mencantumkan tahap "pemurnian" sebelum penyaluran.
> **Source**: Ditjen Migas Kementerian ESDM, "Mengenal Jenis-jenis Gas Bumi," migas.esdm.go.id/post/Mengenal-Jenis-jenis-Gas-Bumi (2011, diakses 11 Agustus 2026)
> **Confidence**: high

> **Claim**: LNG adalah gas metana yang dicairkan pada tekanan atmosferik dan suhu -163°C, dengan komposisi metana (CH4) sekitar 90%.
> **Number/specific**: 90% CH4; suhu cair -163°C.
> **Source**: Ditjen Migas Kementerian ESDM, "Mengenal Jenis-jenis Gas Bumi," migas.esdm.go.id/post/Mengenal-Jenis-jenis-Gas-Bumi (2011, diakses 11 Agustus 2026)
> **Confidence**: high (untuk LNG spesifik; JANGAN digeneralisasi sebagai angka komposisi metana CNG — lihat flags)

> **Claim**: Standar nasional aktif untuk spesifikasi gas bumi via pipa (industri, pembangkit listrik, rumah tangga) adalah SNI 8414:2025, hasil revisi dari SNI 8414:2017.
> **Number/specific**: SNI 8414:2025, ditetapkan BSN 12 Maret 2025 (SK Penetapan 73/KEP/BSN/3/2025); ICS 75.160.30 (Bahan bakar gas); status "Berlaku."
> **Source**: Badan Standardisasi Nasional (BSN), katalog Pesta Online, pesta.bsn.go.id/produk/detail/84142025-sni8414:2025 (diakses 11 Agustus 2026)
> **Confidence**: high

> **Claim**: SNI 8414 (edisi 2017 maupun 2025) berjudul "Spesifikasi bahan bakar gas bumi melalui pipa gas untuk industri, pembangkit listrik dan rumah tangga" — bukan standar khusus CNG untuk kendaraan.
> **Number/specific**: Judul & ruang lingkup persis seperti di atas.
> **Source**: BSN, pesta.bsn.go.id/produk/detail/84142025-sni8414:2025 dan cross-check salinan SNI 8414:2017 (diakses 11 Agustus 2026)
> **Confidence**: high

> **Claim**: SNI 8219:2017 BUKAN standar gas bumi atau CNG — judulnya adalah "Standar dan mutu (spesifikasi) bahan bakar gas jenis Dimetil Eter (DME) khusus rumah tangga, komersial, dan industri."
> **Number/specific**: Ditetapkan 7 Agustus 2017; ICS 75.160.30; 11 halaman.
> **Source**: BSN, pesta.bsn.go.id/produk/detail/11059-sni82192017 (diakses 11 Agustus 2026)
> **Confidence**: high

> **Claim**: SNI 7407:2009 mengatur peralatan konversi bahan bakar gas bumi bertekanan (CNG) pada kendaraan bermotor — yaitu perangkat keras (converter kit), bukan parameter mutu/komposisi gasnya.
> **Number/specific**: Judul: "Peralatan Konversi Bahan Bakar Gas Bumi Bertekanan (Compressed Natural Gas/CNG) pada Kendaraan Bermotor."
> **Source**: Katalog BSN (via pencarian pesta.bsn.go.id) dan salinan dokumen publik (diakses 11 Agustus 2026)
> **Confidence**: medium (judul & cakupan konsisten di dua sumber independen, tetapi halaman detail resmi BSN untuk nomor ini tidak berhasil di-fetch langsung — rekomendasikan penulis mengonfirmasi via pesta.bsn.go.id sebelum mengutip nomor SK penetapan)

> **Claim**: Sebuah kajian resmi Lemigas (lembaga litbang di bawah ESDM) tahun 2015 membahas usulan revisi Rancangan SNI (RSNI) untuk batas kadar air dan partikulat dalam spesifikasi CNG untuk kendaraan bermotor.
> **Number/specific**: "Kajian Pendukung Revisi Kadar Air dan Partikulat dalam Spesifikasi Compressed Natural Gas (CNG) untuk Kendaraan Bermotor," penulis Lisna Rosmayati, Yayun Andriani, Nata Pringgasta; dimuat di Lembaran Publikasi Minyak dan Gas Bumi (LPMGB), Vol. 49 No. 3 (2015); kata kunci: RSNI, spesifikasi, CNG.
> **Source**: Jurnal Lemigas ESDM, journal.lemigas.esdm.go.id/index.php/LPMGB/article/view/1201 (diakses 11 Agustus 2026)
> **Confidence**: high (untuk keberadaan & metadata kajian); **medium** untuk detail angka di dalamnya — lihat flags

> **Claim**: Wobbe index adalah indikator kesetaraan energi/interchangeability bahan bakar gas, dihitung sebagai nilai kalor (calorific value) dibagi akar kuadrat berat jenis (specific gravity) gas terhadap udara — WI = V_C / √(G_S).
> **Number/specific**: Formula WI = V_C/√(G_S); dua gas dengan WI sama akan menghasilkan energi panas yang setara saat melewati lubang burner berukuran sama.
> **Source**: "Wobbe Index," Wikipedia (ringkasan konsep teknik umum, dikonfirmasi silang dengan deskripsi ISO 13686 di bawah), en.wikipedia.org/wiki/Wobbe_index (diakses 11 Agustus 2026)
> **Confidence**: high (untuk definisi & formula umum — ini konsep fisika/teknik universal, bukan angka regulasi Indonesia)

> **Claim**: Standar internasional ISO 13686 "Natural gas — Quality designation" menetapkan parameter yang dipakai untuk mendeskripsikan gas bumi yang telah diproses, termasuk nilai kalor, Wobbe index, faktor kompresi, densitas relatif, dan titik embun (dew point).
> **Number/specific**: ISO 13686:2013 (edisi terbaru terdaftar; edisi sebelumnya 1998).
> **Source**: International Organization for Standardization, iso.org/standard/53058.html (diakses 11 Agustus 2026)
> **Confidence**: high

> **Claim**: ISO 6976 adalah standar perhitungan nilai kalor, densitas, densitas relatif, dan Wobbe index dari komposisi gas bumi; ISO 15971 adalah standar pengukuran nilai kalor dan Wobbe index.
> **Number/specific**: ISO 6976 (calculation), ISO 15971:2008 (measurement).
> **Source**: International Organization for Standardization, iso.org/obp/ui/en/#!iso:std:44867:en (ISO 15971) dan referensi silang ISO 13686 (diakses 11 Agustus 2026)
> **Confidence**: high

> **Claim**: Peraturan Menteri ESDM No. 25 Tahun 2017 tentang Percepatan Pemanfaatan Bahan Bakar Gas untuk Transportasi Jalan mengatur penyediaan & penyaluran BBG (dalam bentuk CNG) untuk kendaraan bermotor secara bertahap di wilayah yang ditetapkan Menteri ESDM.
> **Number/specific**: Ditandatangani Menteri ESDM Ignasius Jonan, 29 Maret 2017.
> **Source**: Kementerian ESDM / JDIH ESDM & BPH Migas, bphmigas.go.id/peraturan-menteri-esdm-nomor-25-tahun-2017-tentang-percepatan-pemanfaatan-bahan-bakar-gas-untuk-transportasi-jalan/ ; jdih.esdm.go.id (diakses 11 Agustus 2026)
> **Confidence**: high (untuk keberadaan & tanggal regulasi; ini konteks kebijakan, bukan spesifikasi mutu gas)

> **Claim**: Keputusan Menteri ESDM No. 47.K/HK.04/MEM.M/2021 menetapkan roadmap pemanfaatan bahan bakar gas untuk transportasi darat 2020–2024 dan menugaskan penyediaan/penyaluran BBG kepada PT Pertamina (Persero) dan PT Perusahaan Gas Negara Tbk.
> **Number/specific**: Nomor Kepmen 47.K/HK.04/MEM.M/2021; periode roadmap 2020–2024.
> **Source**: Ringkasan regulasi ESDM (WebSearch hasil resmi ESDM), dikonfirmasi via cross-reference migas.esdm.go.id (diakses 11 Agustus 2026)
> **Confidence**: medium (isi regulasi belum di-fetch penuh dari dokumen PDF asli; nomor & substansi konsisten dari ringkasan pencarian, rekomendasikan verifikasi PDF asli bila dikutip presisi)

> **Claim**: PGN Gagas memegang sertifikasi ISO 9001:2015 (Quality Management System), ISO 45001:2018 (K3), dan ISO 37001:2016 (Anti-Penyuapan), seluruhnya diperbarui pada 2025.
> **Number/specific**: ISO 9001:2015, ISO 45001:2018, ISO 37001:2016 — masing-masing berlaku 2025.
> **Source**: `knowledge_base/company_profile.md` (profil perusahaan PGN Gagas, sumber internal terverifikasi)
> **Confidence**: high (fakta PGN Gagas — pre-approved)

> **Claim**: PGN Gagas menyalurkan CNG untuk segmen industri & komersial melalui Gaslink (via Gas Transportation Module/GTM) dan untuk transportasi melalui Gasku (jaringan SPBG) — posisinya sebagai anak usaha PGN/Subholding Gas Pertamina, bukan produsen gas bumi dari hulu.
> **Number/specific**: Dua merek layanan: Gasku (transportasi), Gaslink (industri/komersial).
> **Source**: `knowledge_base/company_profile.md` (diverifikasi)
> **Confidence**: high (fakta PGN Gagas — pre-approved)

## Solution focus + PGN Gagas anchor (from product_matrix.md)

| What to teach (gas-bumi/CNG tech) | Facts to state accurately | Where in article | PGN Gagas service/credential to anchor CTA |
|---|---|---|---|
| Parameter mutu gas (nilai kalor, Wobbe index, batas pengotor) dan konsep interchangeability | Nilai kalor & Wobbe index adalah konsep teknik universal (ISO 13686/6976/15971); gas harus melalui pemurnian ke spesifikasi komersial sebelum disalurkan (definisi ESDM "gas pipa"); JANGAN kutip angka batas SNI persis | H2 #1–#3, definisi snippet | Aside 1-kalimat di H2 #4: penyaluran gas oleh distributor didahului pemurnian ke spesifikasi komersial — konteks, bukan promosi |
| Lanskap standar mutu gas Indonesia (SNI 8414:2025, koreksi SNI 8219:2017, RSNI CNG kendaraan) | SNI 8414:2025 aktif (BSN, 12 Maret 2025) untuk gas pipa; SNI 8219:2017 = DME (bukan CNG); RSNI CNG kendaraan masih tahap kajian (Lemigas 2015) | H2 #5 (honest/counter-conventional) | — (edukasi murni, tanpa mention Gagas) |
| Dampak mutu gas pada performa & keawetan peralatan (burner, boiler, mesin CNG) | Wobbe di luar rentang desain → nyala tidak stabil/boros; air/H2S → korosi; CO2 tinggi → nilai kalor turun | H2 #4 | — |
| Distributor CNG yang menjaga konsistensi mutu pasokan | PGN Gagas bersertifikat ISO 9001:2015 (QMS); menyalurkan CNG via Gaslink (industri/komersial, lewat GTM) dan Gasku (transportasi, lewat SPBG) — bukan produsen hulu | Closing CTA | **Gaslink + Gasku sebagai contoh aplikasi; ISO 9001:2015 sebagai kredensial mutu** |

Reminder: PGN Gagas **menyalurkan/mengangkut/memasok/mendistribusikan** gas bumi (CNG) — ia bukan produsen gas di hulu maupun laboratorium yang menetapkan SNI. Framing yang aman: "sebagai distributor bersertifikasi ISO 9001:2015, konsistensi mutu pasokan menjadi bagian dari sistem manajemen mutu PGN Gagas" — hindari klaim spesifik seperti "kami menjamin nilai kalor X" atau "kami memurnikan gas sendiri" tanpa dasar di company_profile.md. Max 2–3 self-mentions (disarankan: 1 aside di H2 #4 + closing CTA).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Ditjen Migas Kementerian ESDM — "Mengenal Jenis-jenis Gas Bumi"** (2011) — https://migas.esdm.go.id/post/Mengenal-Jenis-jenis-Gas-Bumi — *backs*: definisi resmi gas pipa/CNG/LNG/LPG, konsep pemurnian sebelum penyaluran.
2. **Badan Standardisasi Nasional (BSN) — Katalog SNI 8414:2025** — https://pesta.bsn.go.id/produk/detail/84142025-sni8414:2025 — *backs*: standar aktif spesifikasi gas bumi via pipa untuk industri/pembangkit/rumah tangga (revisi SNI 8414:2017, ditetapkan 12 Maret 2025).
3. **BSN — Katalog SNI 8219:2017** — https://pesta.bsn.go.id/produk/detail/11059-sni82192017 — *backs*: koreksi penting — nomor ini adalah standar DME, bukan gas bumi/CNG.
4. **Jurnal Lemigas ESDM (LPMGB) — Kajian Revisi Kadar Air & Partikulat CNG** — https://journal.lemigas.esdm.go.id/index.php/LPMGB/article/view/1201 — *backs*: keberadaan jalur kajian/RSNI khusus untuk spesifikasi CNG kendaraan bermotor, terpisah dari standar gas pipa.
5. **ISO — ISO 13686:2013 "Natural gas — Quality designation"** — https://www.iso.org/standard/53058.html — *backs*: daftar parameter mutu gas bumi standar internasional (nilai kalor, Wobbe index, densitas relatif, dew point).

Priority order used: ESDM/BSN/Lemigas (Indonesian government/official) di atas ISO (referensi teknis internasional) — konsisten dengan `product_matrix.md` & `seo_playbook.md`.

## FAQ Q&As (drafted, Bahasa Indonesia)

### Apa itu nilai kalor gas dan satuannya?
Nilai kalor (calorific value) adalah jumlah energi panas yang dilepaskan saat sejumlah gas dibakar sempurna, biasanya dinyatakan dalam satuan seperti MJ/m³, kcal/Nm³, atau BTU/scf. Dalam niaga gas bumi di Indonesia, nilai kalor juga jadi dasar satuan MMBTU (Million British Thermal Unit) yang dipakai untuk menghitung volume energi — bukan sekadar volume fisik gas yang dikirim ke pelanggan.

### Apa itu Wobbe index?
Wobbe index adalah indikator kesetaraan energi gas, dihitung dari nilai kalor dibagi akar kuadrat berat jenis (specific gravity) gas terhadap udara. Standar internasional ISO 13686 mencantumkannya sebagai salah satu parameter wajib untuk mendeskripsikan gas bumi yang telah diproses. Dua gas dengan Wobbe index setara akan menghasilkan panas yang hampir sama saat melewati lubang burner berukuran sama.

### Kenapa kandungan air, H2S, dan CO2 dalam gas CNG harus dibatasi?
Air memicu korosi dan berisiko membentuk hidrat/es saat gas mengalami perubahan tekanan-suhu; H2S bersifat korosif sekaligus berbahaya bagi keselamatan kerja; sedangkan CO2 tidak ikut terbakar sehingga mengencerkan nilai kalor per volume gas. Karena itu, gas bumi dimurnikan ke spesifikasi komersial — definisi resmi Ditjen Migas ESDM bahkan mensyaratkan "pemurnian" sebelum gas disalurkan ke pelanggan.

### Apa standar mutu gas bumi/CNG di Indonesia?
Standar aktif untuk gas bumi via pipa (industri, pembangkit listrik, rumah tangga) adalah SNI 8414:2025 terbitan Badan Standardisasi Nasional, revisi dari SNI 8414:2017. Untuk CNG kendaraan bermotor secara spesifik, literatur ESDM (Lemigas) menunjukkan adanya kajian/RSNI terpisah soal batas kadar air dan partikulat yang masih terus dikembangkan — bukan satu angka baku tunggal yang final.

### Apakah spesifikasi CNG untuk kendaraan sama dengan industri?
Tidak sepenuhnya sama jalurnya. Gas bumi via pipa untuk industri, pembangkit, dan rumah tangga mengacu ke SNI 8414:2025, sementara spesifikasi CNG untuk kendaraan bermotor — termasuk batas kadar air dan partikulat — dibahas lewat jalur kajian/RSNI tersendiri, karena kondisi operasinya (tekanan tinggi ratusan bar, suhu, komponen mesin) berbeda dari pemakaian gas industri biasa.

### Apakah tekanan gas yang tinggi menunjukkan kualitas gas yang bagus?
Tidak. Tekanan — misalnya kompresi CNG hingga sekitar 250 bar — berkaitan dengan cara gas disimpan dan diangkut agar volumenya ringkas, bukan indikator mutu kimianya. Kualitas gas ditentukan oleh komposisi molekul, nilai kalor, Wobbe index, dan batas kandungan pengotor; gas bertekanan tinggi sekalipun tetap harus memenuhi spesifikasi komersial agar layak dipakai.

### Bagaimana cara mengetahui gas yang diterima sudah memenuhi spesifikasi?
Pelanggan industri/komersial berhak meminta sertifikat analisis gas (certificate of analysis) dari penyalurnya, yang biasanya mencantumkan komposisi dan hasil uji laboratorium. Sebagai distributor CNG bersertifikat ISO 9001:2015, PGN Gagas menjadikan konsistensi mutu pasokan bagian dari sistem manajemen mutu layanan Gaslink dan Gasku — bukan sekadar klaim tanpa dasar.

### Apa dampak mutu gas yang tidak stabil pada peralatan seperti boiler atau mesin?
Nilai kalor atau Wobbe index yang berfluktuasi di luar rentang desain peralatan bisa membuat nyala api tidak stabil, pembakaran tidak sempurna, atau konsumsi bahan bakar jadi boros — karena sistem kontrol proses pada boiler, oven, genset, maupun mesin CNG dikalibrasi untuk rentang mutu gas tertentu. Kandungan air atau H2S berlebih juga mempercepat korosi komponen dan memperpendek umur alat.

## Data tables for the writer

### Parameter mutu gas CNG: kenapa dibatasi & dampaknya
| Parameter | Kenapa dibatasi | Dampak bila melebihi batas |
|---|---|---|
| Kandungan air (moisture) | Memicu korosi & berisiko membentuk hidrat/es saat tekanan-suhu berubah (relevan untuk gas terkompresi) | Korosi pipa/tabung, penyumbatan valve/regulator |
| H2S (hidrogen sulfida) | Korosif terhadap logam & beracun bagi pekerja | Percepatan korosi, risiko K3, bau menyengat |
| CO2 (karbon dioksida) | Tidak ikut terbakar, mengencerkan energi gas per volume | Nilai kalor per volume turun, efisiensi pembakaran berkurang |
| Hidrokarbon berat (C3+) | Berpotensi mengembun (dew point) pada suhu/tekanan tertentu — salah satu parameter dalam ISO 13686 | Kondensat mengganggu aliran, endapan pada peralatan |
| Partikulat/debu | Mengotori filter & komponen presisi (mesin, regulator) | Penyumbatan filter/injektor, keausan komponen |

*Catatan: tabel ini menjelaskan logika teknis "kenapa" & "dampak", bukan angka batas resmi — jangan isi kolom dengan nilai numerik spesifik (ppm/mg/Nm³) kecuali penulis mengakses dokumen SNI resmi.*

### Standar & regulasi terkait — dan yang BUKAN untuk CNG
| Dokumen | Cakupan | Status | Catatan penting |
|---|---|---|---|
| SNI 8414:2025 (revisi SNI 8414:2017) | Spesifikasi gas bumi via pipa untuk industri, pembangkit listrik, rumah tangga | Berlaku (BSN, 12 Maret 2025) | **Bukan** standar khusus CNG kendaraan |
| SNI 7407:2009 | Peralatan konversi BBG/CNG (converter kit) pada kendaraan bermotor | Berlaku | Standar **hardware**, bukan mutu/komposisi gas |
| SNI 8219:2017 | Spesifikasi bahan bakar gas Dimethyl Ether (DME) | Berlaku | **Bukan** gas bumi/CNG — jangan dikutip untuk CNG |
| Kajian RSNI CNG kendaraan (Lemigas, LPMGB Vol.49 No.3/2015) | Usulan revisi batas kadar air & partikulat CNG kendaraan bermotor | Kajian/RSNI, status final belum terkonfirmasi | Rujukan akademik ESDM, bukan angka regulasi yang pasti berlaku sekarang |
| Permen ESDM No. 25/2017 | Percepatan pemanfaatan BBG untuk transportasi jalan (roadmap wilayah) | Berlaku | Regulasi kebijakan/roadmap, bukan spesifikasi teknis gas |

### Nilai kalor vs Wobbe index
| Aspek | Nilai kalor (calorific value) | Wobbe index |
|---|---|---|
| Mengukur apa | Energi panas per volume/massa gas | Kesetaraan energi yang dihantarkan lewat lubang burner tetap |
| Formula/dasar | Diukur langsung (kalorimetri) atau dihitung dari komposisi (ISO 6976) | Nilai kalor ÷ akar kuadrat berat jenis (specific gravity) |
| Satuan umum | MJ/m³, kcal/Nm³, BTU/scf, MMBTU (niaga) | MJ/m³ atau BTU/scf |
| Kegunaan utama | Dasar perhitungan energi & harga gas | Menentukan interchangeability — bisakah gas "menggantikan" gas lain tanpa setel ulang burner |
| Standar acuan | ISO 6976, ISO 15971 | ISO 13686, ISO 6976, ISO 15971 |

## Edge cases & nuance

- **SNI 8219:2017 sering disalahartikan sebagai standar CNG/gas bumi karena nomornya berdekatan dengan 8414 — padahal itu standar DME.** Ini adalah kesalahan riil yang brief awal berpotensi jatuh ke dalamnya; penulis harus eksplisit menghindarinya.
- **SNI 8414 punya dua edisi aktif dalam peredaran informasi (2017 dan 2025)** — 2025 adalah revisi yang berlaku; artikel yang menyebut "SNI 8414:2017" tanpa catatan revisi berisiko terlihat usang di 2026.
- **Higher Heating Value (HHV/gross) vs Lower Heating Value (LHV/net)**: nilai kalor punya dua konvensi umum; Wobbe index bisa dihitung dari salah satunya tergantung standar yang dipakai. Membandingkan angka nilai kalor dari basis HHV dan LHV tanpa menyamakan konvensi adalah kesalahan umum — penting disebut sebagai caveat teknis, bukan detail angka.
- **"Tekanan tinggi = kualitas bagus" adalah miskonsepsi umum** — tekanan/kompresi soal penyimpanan & pengangkutan (CNG dikompresi ±250 bar menurut definisi Ditjen Migas), sedangkan mutu adalah soal komposisi kimia & kemurnian gas.
- **Spesifikasi gas bumi via pipa (SNI 8414) dan spesifikasi CNG kendaraan bermotor kemungkinan besar berjalan di jalur dokumen yang berbeda** karena kondisi operasi berbeda (tekanan tinggi & siklus kompresi/dekompresi di kendaraan berisiko memicu masalah kadar air yang tidak sama dengan gas pipa bertekanan rendah) — didukung oleh fokus kajian Lemigas pada kondisi spesifik CNG kendaraan. Namun perbandingan parameter demi parameter antara kedua jalur tidak berhasil diverifikasi secara rinci dalam riset ini.
- **Komposisi metana gas bumi Indonesia bukan angka tunggal tetap** — bervariasi menurut lapangan/sumber produksi; hanya LNG yang secara eksplisit disebut ESDM dengan angka ~90% CH4 dalam sumber yang diverifikasi run ini.

## Flags (open factual risk)

- ⚠️ **SNI 8219:2017 bukan standar gas bumi/CNG** — itu standar Dimethyl Ether (DME). Brief mengasumsikan relevansinya untuk dikonfirmasi; hasil konfirmasi: TIDAK relevan. Jangan dikutip sebagai bagian dari standar mutu CNG.
- ⚠️ **SNI 8414:2017 sudah digantikan SNI 8414:2025** (ditetapkan BSN 12 Maret 2025). Jika artikel menyebut standar gas pipa, gunakan edisi 2025 sebagai rujukan aktif; sebut 2017 hanya untuk konteks historis/revisi.
- ⚠️ **Nilai batas numerik persis di dalam SNI 8414:2025** (rentang nilai kalor, Wobbe index, ppm H2S, mg/Nm³ air, dsb.) **tidak berhasil diverifikasi** dari teks lengkap — dokumen berbayar di portal BSN, hanya metadata/judul/ruang lingkup yang bisa diakses gratis. Rekomendasi: tulis kualitatif ("SNI menetapkan batas maksimum untuk...") tanpa angka pasti, atau arahkan pembaca untuk merujuk dokumen resmi BSN.
- ⚠️ **Tidak ditemukan nomor SNI final yang secara khusus mengatur mutu/komposisi gas (bukan hardware) untuk CNG kendaraan bermotor.** Sumber terdekat adalah kajian RSNI Lemigas 2015 (Jurnal LPMGB Vol.49 No.3) — statusnya kajian/usulan revisi, bukan konfirmasi bahwa sudah menjadi SNI resmi yang mengikat saat ini (usia kajian >10 tahun tanpa konfirmasi tindak lanjut dalam riset ini). Framing sebagai "sedang berkembang," jangan diklaim final.
- ⚠️ **Angka spesifik dari kajian Lemigas 2015** (kadar air eksisting 3 Lb/MMSCF vs usulan 7,19 Lb/MMSCF; filter 25 μm; metode ASTM D 7650; titik embun 11,4°C pada 260 bar) diambil dari ringkasan abstrak, bukan pembacaan penuh dokumen PDF (upaya ekstraksi PDF langsung gagal karena format). Jika dipakai, **atribusikan eksplisit ke "kajian Lemigas 2015 (Jurnal LPMGB Vol.49 No.3)"** dan jangan sajikan sebagai spesifikasi resmi yang berlaku sekarang — lebih aman disebut sebagai contoh isu teknis yang dikaji, tanpa mengutip angka presisi di badan artikel utama.
- ⚠️ **Rentang Wobbe index 40–60 MJ/m³ dan toleransi variasi ~5%** adalah angka rujukan teknik internasional umum (dari sumber ensiklopedis, bukan SNI Indonesia) — gunakan hanya sebagai konteks edukasi umum tentang cara kerja Wobbe index, jangan diklaim sebagai ambang resmi yang berlaku di Indonesia.
- ⚠️ **Komposisi metana CNG/gas bumi Indonesia** (brief cng-01 sebelumnya memakai kisaran ~90–95%) tidak ditemukan sumber ESDM baru yang mengonfirmasi angka itu secara spesifik untuk CNG dalam run riset ini (hanya LNG yang eksplisit disebut ~90% CH4 oleh ESDM). Jika artikel ini menyinggung komposisi metana, gunakan bahasa kualitatif ("didominasi metana, dengan proporsi bervariasi menurut sumber gas") alih-alih angka tunggal pasti, atau tautkan ke pembahasan cng-01 tanpa mengulang klaim numerik.
- ⚠️ **SNI 7407:2009** — judul & cakupan (peralatan konversi/converter kit) konsisten dari dua sumber independen non-BSN-langsung, tetapi halaman detail resmi BSN untuk nomor ini tidak berhasil di-fetch dalam run ini. Confidence medium; jangan kutip nomor SK penetapan tanpa verifikasi tambahan.
- ⚠️ **Apakah spesifikasi CNG kendaraan berbeda secara parameter-demi-parameter dari gas industri** — dikonfirmasi bahwa keduanya berjalan di **jalur dokumen standar yang terpisah** (SNI 8414 vs kajian RSNI CNG kendaraan), tetapi perbandingan rinci angka per parameter TIDAK dapat dipastikan dari riset ini. Jangan membuat klaim komparatif spesifik (mis. "batas H2S kendaraan X kali lebih ketat") — cukup nyatakan bahwa keduanya diatur terpisah karena kondisi operasi berbeda.

## Definition snippet draft (40–60 words)

> Kualitas gas CNG adalah tingkat kesesuaian gas bumi terkompresi terhadap parameter mutu tertentu — terutama nilai kalor (calorific value), Wobbe index, dan batas kandungan pengotor seperti air, CO2, dan H2S — yang menentukan seberapa stabil energi yang dihasilkan saat gas dibakar di burner, boiler, atau mesin kendaraan. Parameter ini diatur lewat standar seperti SNI 8414:2025 dan rujukan internasional ISO 13686.

(56 kata)

## Notes for visuals (feed the writer's {IMAGE_NN} placeholders)

- **Konsep 1 — Diagram alur "dari sumur ke tangki CNG"**: sumur gas → pemurnian ke spesifikasi komersial (ikon filter/tetes air/molekul H2S-CO2 tersaring) → Mother Station (kompresi ±250 bar) → GTM/tabung → pelanggan (Gaslink/Gasku). Beri label singkat di titik "pemurnian" untuk menegaskan bahwa mutu ditentukan sebelum kompresi, bukan sesudahnya. Teks Bahasa Indonesia pada setiap tahap.
- **Konsep 2 — Infografis "Nilai Kalor vs Wobbe Index"**: dua kartu berdampingan dengan ilustrasi nyala api burner — satu stabil (Wobbe sesuai rentang), satu tidak stabil/bergejolak (Wobbe di luar rentang) — plus formula sederhana WI = nilai kalor ÷ √(berat jenis) ditulis ringkas di bawah kartu.
- **Konsep 3 — Kartu perbandingan "Standar mana untuk apa"**: 4 kartu kecil bertuliskan SNI 8414:2025 (gas pipa), SNI 7407:2009 (hardware/converter kit), SNI 8219:2017 (DME — bukan CNG, beri tanda silang/warning), dan "Kajian RSNI CNG Kendaraan" (Lemigas — status berkembang, beri tanda "in progress"). Membantu pembaca teknis tidak salah kutip nomor standar.
