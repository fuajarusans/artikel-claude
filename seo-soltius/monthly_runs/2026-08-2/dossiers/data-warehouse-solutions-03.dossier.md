---
brief_id: "data-warehouse-solutions-03"
researcher_run_date: "2026-08-11"
sources_cited: 9
flags: 6
---

# Research Dossier: Kualitas Data Warehouse: Cara Menilai dan Membersihkan Data

## TL;DR for the writer

- **Warehouse menyatukan, bukan membersihkan.** Data warehouse mengintegrasikan sumber-sumber, tetapi kalau input-nya kotor, output-nya tetap kotor — *garbage in, garbage out*. Kualitas data adalah disiplin tersendiri (menilai + memperbaiki *isi* data), berbeda dari observability (mengawasi keandalan pipeline) dan MDM (tata kelola master data).
- **Kerangka enam dimensi** kualitas data (akurasi, kelengkapan, konsistensi, ketepatan waktu, validitas, keunikan) berasal dari DAMA dan dikutip luas. Aman dipakai sebagai tulang punggung artikel — tapi sebutkan bahwa ada kerangka lebih luas (DAMA 2020 memperluas ke 65 dimensi/sub-dimensi).
- **Biaya bad data WAJIB bersumber.** Dua angka yang boleh dipakai, dengan atribusi + tahun: Gartner ~USD 12,9 juta/tahun rata-rata per organisasi (2020), dan IBM ~USD 3,1 triliun/tahun bagi ekonomi AS (2016, angka lama—beri kualifikasi). Plus prinsip biaya **1-10-100** (Labovitz & Chang, 1992) sebagai kerangka intuitif.
- **Alur assessment→remediasi**: data profiling (memahami) → definisi aturan validasi → cleansing/standardisasi/matching (memperbaiki) → scorecard & monitoring berkelanjutan. Untuk ilustrasi tooling SAP: **Information Steward** (profiling, scorecard, monitoring, metadata — sisi analis bisnis) dan **Data Services** (cleanse/match/standardize — sisi developer IT); keduanya komplementer, aturannya bisa dipakai ulang di **MDG**.
- **Soltius anchor** (closing, ≤3 self-mention): **Data and AI Consulting** — Soltius *mengimplementasikan* tooling & merancang tata kelola untuk menilai/membersihkan data; jangan bilang Soltius "membuat" tools SAP.

## Core facts (verified)

> **Claim**: Ada enam dimensi kualitas data inti yang diakui luas sebagai standar de facto.
> **Number/specific**: Akurasi, kelengkapan (completeness), konsistensi, ketepatan waktu (timeliness), validitas, dan keunikan (uniqueness) — kerangka yang paling banyak dipakai dan didukung DAMA-DMBOK.
> **Source**: Dataversity, "Data Quality Dimensions" — https://www.dataversity.net/articles/data-quality-dimensions/ (diakses 2026-08-11); DAMA UK "Six Primary Dimensions for Data Quality Assessment".
> **Confidence**: high

> **Claim**: Akurasi mengukur seberapa baik data merepresentasikan objek/kejadian dunia nyata.
> **Number/specific**: Diverifikasi dengan membandingkan terhadap sumber yang diketahui benar (mis. dokumen resmi, referensi pihak ketiga).
> **Source**: Dataversity, ibid. (2026-08-11)
> **Confidence**: high

> **Claim**: Kelengkapan mengukur apakah semua record/nilai yang diwajibkan ada — bukan mengukur akurasi.
> **Number/specific**: Dinyatakan sebagai persentase, mis. "97% lengkap" bila 3 dari 100 record kehilangan field wajib.
> **Source**: Dataversity, ibid. (2026-08-11)
> **Confidence**: high

> **Claim**: Konsistensi menilai apakah data dari berbagai sumber selaras tanpa saling bertentangan; validitas menilai kepatuhan pada aturan bisnis/format yang telah didefinisikan; keunikan memastikan tidak ada duplikat.
> **Number/specific**: Validitas = "conforms to pre-defined business rules"; keunikan = "no record exists more than once within a database"; ketepatan waktu = waktu kedatangan aktual data diukur terhadap waktu yang diharapkan.
> **Source**: Dataversity, ibid. (2026-08-11)
> **Confidence**: high

> **Claim**: DAMA memperluas daftar dimensi kualitas data jauh melampaui enam inti.
> **Number/specific**: Pada 2020, DAMA menyusun daftar 65 dimensi & sub-dimensi kualitas data — namun enam inti tetap yang paling umum dipakai.
> **Source**: Dataversity, ibid. (2026-08-11)
> **Confidence**: high

> **Claim**: Data profiling adalah proses sistematis memeriksa & menganalisis dataset untuk memahami struktur, isi, kualitas, dan relasinya.
> **Number/specific**: Menghasilkan statistik seperti nilai min/maks, mean, frekuensi, pola berulang, null value, tipe data, dan anomali; umumnya tiga tahap: structure discovery, content discovery, relationship discovery. Ini proses *upstream* sebelum data dipakai di analitik hilir.
> **Source**: TechTarget "What is Data Profiling" — https://www.techtarget.com/searchdatamanagement/definition/data-profiling; IBM "What is Data Profiling" — https://www.ibm.com/think/topics/data-profiling (2026-08-11)
> **Confidence**: high

> **Claim**: Poor data quality menimbulkan biaya finansial signifikan bagi organisasi.
> **Number/specific**: Rata-rata USD 12,9 juta per tahun per organisasi menurut Gartner (riset 2020). Basisnya: survei ~154 reference customer dari 16 vendor data-quality (organisasi besar yang sudah membeli tooling DQ) yang diminta mengestimasi biaya poor data quality.
> **Source**: Gartner, dikutip luas (2020) — lihat gartner.com/en/data-analytics/topics/data-quality (2026-08-11)
> **Confidence**: high (angka), medium (generalisasi — lihat Flags)

> **Claim**: Poor data quality diperkirakan menggerus ekonomi AS triliunan dolar per tahun.
> **Number/specific**: ~USD 3,1 triliun per tahun bagi ekonomi AS — estimasi IBM yang dipopulerkan Thomas C. Redman di Harvard Business Review (2016). Angka lama; metodologinya pernah dipertanyakan.
> **Source**: IBM / T.C. Redman, HBR (2016), dikutip di ibm.com/think/insights/cost-of-poor-data-quality (2026-08-11)
> **Confidence**: medium (lihat Flags — beri atribusi + tahun, jangan disajikan sebagai fakta terkini)

> **Claim**: Biaya menangani cacat data naik secara eksponensial makin lama dibiarkan — prinsip "1-10-100".
> **Number/specific**: ~USD 1 untuk mencegah di sumber, ~USD 10 untuk memperbaiki setelah masuk proses, ~USD 100 bila dibiarkan gagal sampai ke pelanggan. Diperkenalkan George Labovitz & Yu Sang Chang (1992, "Making Quality Work"). Angka bersifat ilustratif/simbolik.
> **Source**: Labovitz & Chang (1992), dirangkum a.l. Matillion & DataNinjaGo (2026-08-11)
> **Confidence**: high (asal-usul & konsep), medium (angka bersifat simbolik, bukan pengukuran empiris)

> **Claim**: SAP Information Steward adalah tool untuk *menilai & memonitor* kualitas data, bukan warehouse.
> **Number/specific**: Fungsinya: discover, assess, define, monitor, dan improve kualitas data lewat data profiling, aturan validasi, metadata management (Metapedia), data lineage, serta dashboard & scorecard yang berulang untuk memonitor skor kualitas berdasarkan aturan yang ada. Ditujukan untuk data steward/analis bisnis.
> **Source**: SAP, "Data Stewardship & Integrity | SAP Information Steward" — sap.com/products/data-cloud/data-profiling-steward.html; SAP Community (2026-08-11)
> **Confidence**: high

> **Claim**: SAP Data Services adalah tool untuk *membersihkan & mencocokkan* data (dan integrasi/ETL), bukan warehouse.
> **Number/specific**: Melakukan transform, cleanse, match, dan consolidate. Transform kunci: **Data Cleanse** (parsing + standardisasi), **Address Cleanse**, **Match** (mengurangi duplikat & menemukan relasi antar-record), dan **GeoCoder** (enrichment). Ditujukan untuk developer/IT dalam satu antarmuka integrasi + kualitas data.
> **Source**: SAP, "Capabilities and Features | SAP Data Services" — sap.com/products/technology-platform/data-services; SAP Community (2026-08-11)
> **Confidence**: high

> **Claim**: Information Steward dan Data Services saling melengkapi, dengan pembagian peran yang jelas.
> **Number/specific**: Alur yang direkomendasikan: Information Steward dipakai untuk *inspect* data & membangun aturan validasi; Data Services dipakai untuk *cleanse* data. Aturan validasi dari Information Steward dapat dipakai ulang di Data Services dan di SAP Master Data Governance (MDG). Information Steward = antarmuka bisnis; Data Services = antarmuka teknis IT.
> **Source**: SAP Help Portal, "How Data Services and Information Steward complement each other"; SAP Community (2026-08-11)
> **Confidence**: high

> **Claim**: SAP Master Data Governance (MDG) adalah lapisan tata kelola, bukan tool profiling/cleansing.
> **Number/specific**: MDG mengonsolidasikan & menciptakan master data enterprise, mendefinisikan workflow pengelolaan data, dan menegakkan kualitas master data — melengkapi profiling (Information Steward) & cleansing (Data Services).
> **Source**: SAP Community / perbandingan produk SAP (2026-08-11)
> **Confidence**: high

> **Claim**: Kualitas data adalah proses berkelanjutan, bukan proyek sekali jalan.
> **Number/specific**: Standar praktik DQ menekankan monitoring berulang (scorecard) alih-alih pembersihan satu kali; Information Steward secara eksplisit menyediakan "recurring scorecards for continuous monitoring."
> **Source**: SAP Information Steward product page / SAP Community (2026-08-11)
> **Confidence**: high

> **Claim**: Akar masalah ketidakcocokan angka antar-departemen umumnya ada di master data yang tidak seragam.
> **Number/specific**: Framing pengalaman implementasi (bukan klaim numerik). Konsisten dengan posisi MDG/master data sebagai fondasi; hindari angka spesifik tanpa sumber.
> **Source**: Soltius field framing (brief) + posisi MDG (SAP); tanpa klaim numerik.
> **Confidence**: medium (framing pengalaman, bukan statistik — sajikan sebagai observasi lapangan)

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Vendor-neutral: enam dimensi DQ, data profiling, aturan validasi, cleansing/standardisasi, scorecard/monitoring | Enam dimensi = akurasi, kelengkapan, konsistensi, ketepatan waktu, validitas, keunikan (DAMA). Profiling = memahami; cleansing = memperbaiki | Body H2 #2, #3, #4 | — (edukasi dulu, vendor-neutral) |
| **SAP Information Steward** | Profiling, scorecard, monitoring, aturan validasi, metadata — sisi analis bisnis. Bukan warehouse. | H2 #4 (assessment→remediasi) | Data and AI Consulting |
| **SAP Data Services** | Cleanse/parsing, standardisasi, Match (dedup), Address Cleanse, GeoCoder — sisi developer IT. Bukan warehouse. | H2 #4 | Data and AI Consulting |
| **SAP Master Data Governance (MDG)** | Lapisan tata kelola master data; aturan validasi bisa dipakai ulang di sini. Arahkan pendalaman ke artikel MDM sibling (-04). | Aside mid-article / closing | Data and AI Consulting |

Reminder: Soltius **mengimplementasikan/merancang/mendukung** tooling ini — bukan membuatnya. Maks 2–3 self-mention Soltius (idealnya 1 closing + 1 aside opsional).

**Anchor phrasing (closing)**: "Melalui layanan **Data and AI Consulting**, Soltius membantu perusahaan menilai dan membersihkan data — dari profiling, penyusunan aturan validasi, hingga cleansing dan tata kelola berkelanjutan — sebagai mitra implementasi tooling SAP seperti Information Steward dan Data Services." (Kredibilitas: SAP Platinum Partner via United VARs / bagian Metrodata Group sejak 1998 — pilih satu, jangan menumpuk.)

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Dataversity — "Data Quality Dimensions"** — https://www.dataversity.net/articles/data-quality-dimensions/ — *what it backs*: definisi enam dimensi inti kualitas data (selaras DAMA-DMBOK). Sumber industri data-management yang diakui.
2. **Gartner — "Data Quality: Why It Matters and How to Achieve It"** — https://www.gartner.com/en/data-analytics/topics/data-quality — *what it backs*: biaya poor data quality rata-rata USD 12,9 juta/tahun per organisasi (2020).
3. **SAP — "Data Stewardship & Integrity | SAP Information Steward"** — sap.com/products/data-cloud/data-profiling-steward.html — *what it backs*: kapabilitas profiling, scorecard, metadata, monitoring Information Steward.
4. **SAP — "SAP Data Services / Capabilities and Features"** — sap.com/products/technology-platform/data-services — *what it backs*: cleanse, match, standardize, enrich (Data Cleanse/Match/Address Cleanse/GeoCoder).
5. **IBM — "What is Data Profiling"** — https://www.ibm.com/think/topics/data-profiling — *what it backs*: definisi & tahapan data profiling.

Priority terpenuhi: SAP official (3, 4) + Gartner (2) + IBM/Dataversity (industri). Writer sebaiknya tautkan minimal 2: satu Gartner/DAMA (angka & dimensi) + satu SAP (tooling).

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apa saja dimensi kualitas data?
Enam dimensi inti yang paling banyak dipakai (kerangka DAMA) adalah akurasi (sesuai dunia nyata), kelengkapan (tidak ada nilai wajib yang kosong), konsistensi (tidak saling bertentangan antar-sumber), ketepatan waktu (data tersedia saat dibutuhkan), validitas (mematuhi aturan/format bisnis), dan keunikan (tidak ada duplikat). Ada kerangka lebih luas — DAMA bahkan memperluasnya menjadi puluhan dimensi pada 2020 — tetapi enam ini cukup untuk mayoritas kebutuhan penilaian.

### Bagaimana cara menilai kualitas data sebelum masuk data warehouse?
Mulai dengan data profiling: analisis sistematis atas struktur, isi, dan relasi data untuk mengungkap null rate, distribusi nilai, pola/format tak wajar, dan duplikasi. Tetapkan aturan validasi per dimensi, lalu ukur dengan scorecard dan ambang (threshold) yang disepakati. Fokuskan penilaian pada domain data kritikal (pelanggan, vendor, produk) yang menggerakkan keputusan, bukan seluruh tabel sekaligus.

### Apa itu data profiling?
Data profiling adalah proses memeriksa dan menganalisis dataset untuk memahami struktur, kualitas isi, dan relasinya. Tool profiling menghasilkan statistik seperti nilai min/maks, frekuensi, pola berulang, tipe data, dan jumlah nilai kosong (null). Umumnya mencakup tiga tahap: structure discovery (format/keseragaman), content discovery (nilai bermasalah/kosong), dan relationship discovery (keterkaitan antar-sumber). Ini langkah upstream sebelum data dipercaya untuk analitik.

### Apa perbedaan data cleansing dan data validation?
Validation memeriksa apakah data mematuhi aturan yang sudah didefinisikan (mis. format NPWP benar, kode wilayah valid) dan menandai yang melanggar — tanpa mengubah data. Cleansing bertindak lebih jauh: parsing, standardisasi (format, singkatan, kapitalisasi), koreksi, dan matching untuk menghapus duplikat. Singkatnya, validation mendeteksi, cleansing memperbaiki. Keduanya saling melengkapi dalam satu alur assessment→remediasi.

### Berapa besar kerugian akibat data berkualitas buruk?
Gartner (2020) memperkirakan poor data quality merugikan organisasi rata-rata USD 12,9 juta per tahun — angka dari survei perusahaan besar yang sudah memakai tooling DQ, jadi bukan patokan universal untuk semua ukuran bisnis. Prinsip "1-10-100" (Labovitz & Chang, 1992) menggambarkan polanya: sekitar USD 1 untuk mencegah cacat di sumber, USD 10 untuk memperbaikinya di dalam proses, dan USD 100 bila dibiarkan sampai merugikan pelanggan.

### Siapa yang bertanggung jawab atas kualitas data?
Kualitas data adalah tanggung jawab bersama, bukan hanya tim IT. Pemilik proses bisnis (pemilik data/data owner) menetapkan aturan dan standar; data steward memantau serta menegakkannya; IT menyediakan tooling dan pipeline. Model tata kelola seperti SAP Master Data Governance memformalkan pembagian peran dan workflow-nya. Tanpa kepemilikan bisnis yang jelas, tooling secanggih apa pun tidak akan menutup akar masalah di master data.

## Data tables for the writer

### Enam dimensi kualitas data (dengan contoh Indonesia)
| Dimensi | Pertanyaan yang dijawab | Contoh masalah nyata |
|---|---|---|
| Akurasi | Apakah data sesuai kenyataan? | Alamat pelanggan sudah pindah tapi belum diperbarui |
| Kelengkapan | Apakah ada nilai wajib yang kosong? | Kolom NPWP atau nomor telepon vendor kosong |
| Konsistensi | Apakah antar-sumber saling cocok? | Nama pelanggan berbeda di CRM vs ERP |
| Ketepatan waktu | Apakah data tersedia saat dibutuhkan? | Data penjualan baru masuk H+3 |
| Validitas | Apakah sesuai aturan/format? | NPWP kurang digit; tanggal 31-02 |
| Keunikan | Apakah bebas duplikat? | "PT Maju Jaya" & "Maju Jaya PT" sebagai dua vendor |

### SAP Information Steward vs SAP Data Services (peran, jangan tertukar)
| Aspek | SAP Information Steward | SAP Data Services |
|---|---|---|
| Fungsi utama | Menilai & memonitor (profiling, scorecard, monitoring) | Memperbaiki & mengintegrasikan (cleanse, match, ETL) |
| Pengguna utama | Data steward / analis bisnis | Developer / tim IT |
| Kapabilitas kunci | Data profiling, aturan validasi, metadata (Metapedia), data lineage, scorecard berulang | Data Cleanse (parsing/standardisasi), Match (dedup), Address Cleanse, GeoCoder (enrichment) |
| Peran dalam alur | "Understand & define" — inspect data, susun aturan | "Fix & move" — eksekusi cleansing, pindahkan data |
| Bukan | Bukan data warehouse | Bukan data warehouse |

*(Aturan validasi dari Information Steward dapat dipakai ulang di Data Services dan MDG.)*

### Assessment → Remediasi (alur ringkas)
| Tahap | Aktivitas | Output |
|---|---|---|
| 1. Profiling | Analisis struktur/isi/relasi; ukur null, pola, duplikat | Peta masalah + baseline |
| 2. Aturan validasi | Definisikan aturan per dimensi + threshold | Rule set + scorecard awal |
| 3. Cleansing | Parsing, standardisasi, koreksi, matching/dedup | Data yang diperbaiki |
| 4. Monitoring | Scorecard berulang, tata kelola/kepemilikan | Kualitas terjaga sebagai proses |

## Edge cases & nuance

- **Warehouse ≠ pembersih data.** Kesalahpahaman umum: "nanti kalau sudah masuk warehouse/BI, angkanya jadi rapi." Warehouse mengintegrasikan & menyatukan; ia tidak menilai kebenaran isi. Tanpa DQ, warehouse hanya memusatkan data kotor menjadi satu tempat yang tampak otoritatif — justru berbahaya.
- **DQ ≠ observability ≠ MDM.** Observability (artikel sibling 07-2-04) mengawasi keandalan *pipeline* (freshness, volume, schema drift). DQ menilai *kebenaran isi* data. MDM/MDG (sibling -04) mengelola *master data* & golden record. Ketiganya saling melengkapi, bukan pengganti.
- **Jangan kejar 100% bersih.** Ada diminishing returns; membersihkan data yang tidak dipakai untuk keputusan adalah pemborosan. Prioritaskan domain kritikal (pelanggan, vendor, produk, keuangan). Tetapkan "good enough" per konteks penggunaan.
- **Akar masalah biasanya di master data & di titik input.** Prinsip 1-10-100: mencegah di sumber (validasi saat entry, tata kelola master data) jauh lebih murah daripada membersihkan berulang di hilir.
- **Tooling saja tidak cukup.** Tanpa kepemilikan bisnis (data owner/steward) dan aturan yang disepakati, tool profiling/cleansing hanya menunda masalah. DQ adalah kombinasi orang + proses + tool.

## Flags (open factual risk)

- ⚠️ **Gartner USD 12,9 juta/tahun**: angka ini rata-rata dari ~154 reference customer *perusahaan besar yang sudah membeli tooling DQ* (survei 2020) — bukan patokan universal untuk UKM. → Rekomendasi: sajikan dengan atribusi "Gartner (2020)" dan konteks "rata-rata organisasi (besar)", jangan generalisasi ke semua bisnis.
- ⚠️ **IBM USD 3,1 triliun/tahun**: estimasi 2016 (Redman/HBR), metodologinya pernah dipertanyakan dan angkanya sudah lama. → Rekomendasi: opsional; bila dipakai, wajib beri tahun + atribusi ("estimasi IBM, 2016") dan jangan sajikan sebagai data terkini. Aman untuk mengganti dengan angka Gartner yang lebih defensible.
- ⚠️ **Prinsip 1-10-100**: angka $1/$10/$100 bersifat simbolik/ilustratif (Labovitz & Chang, 1992), bukan hasil pengukuran empiris universal. → Rekomendasi: sajikan sebagai "prinsip/aturan praktis", bukan statistik.
- ⚠️ **Jumlah dimensi kualitas data**: banyak kerangka (6, 7, 10, bahkan 65 versi DAMA 2020). → Rekomendasi (sesuai brief): pilih enam inti sebagai fokus dan sebutkan eksplisit bahwa ada kerangka lebih luas — jangan klaim "hanya ada enam".
- ⚠️ **Penamaan/posisi produk SAP**: Information Steward & Data Services adalah tool klasik EIM/BusinessObjects (matang, banyak deployment on-prem). SAP juga punya kapabilitas DQ yang lebih baru/cloud (mis. SAP HANA smart data quality, kapabilitas dalam Datasphere). → Rekomendasi: sebut Information Steward & Data Services sebagai *ilustrasi tooling SAP untuk profiling/cleansing*, jangan mengklaim keduanya adalah satu-satunya atau pendekatan cloud terbaru. Hindari menyatakan versi/edisi spesifik tanpa sumber SAP terbaru.
- ⚠️ **Framing "master data selalu jadi akar masalah"**: benar sebagai observasi lapangan, tapi bukan klaim numerik. → Rekomendasi: sajikan sebagai pengalaman implementasi ("di lapangan, ... hampir selalu berujung ke master data yang tidak seragam"), tanpa persentase.

## Definition snippet draft (50 words)

> **Kualitas data** adalah ukuran sejauh mana data akurat, lengkap, konsisten, tepat waktu, valid, dan unik sehingga layak dipercaya untuk pengambilan keputusan. Data warehouse hanya menyatukan data dari banyak sumber; ia tidak otomatis memperbaiki isinya — prinsip *garbage in, garbage out* tetap berlaku, sehingga kualitas data harus dinilai dan dibersihkan secara terpisah.
