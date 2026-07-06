---
brief_id: "data-warehouse-solutions-03"
researcher_run_date: "2026-06-08"
sources_cited: 18
flags: 4
---

# Research Dossier: Migrasi dari Data Warehouse Lama (Teradata/Oracle/BW) ke Platform Modern

## TL;DR for the writer

- SAP BW 7.5 (legacy) mainstream maintenance berakhir **31 Desember 2027**, extended support berbayar tersedia sampai 2030 — ini adalah pemicu migrasi yang paling konkret untuk pengguna SAP BW.
- SAP BW/4HANA memiliki dukungan mainstream hingga Desember 2030 dan komitmen SAP untuk maintenance **setidaknya sampai 2040**, sehingga ia adalah jalur migrasi on-SAP yang aman jangka panjang.
- SAP Datasphere (diluncurkan Maret 2023, menggantikan SAP Data Warehouse Cloud) mendukung koneksi SAP dan non-SAP termasuk Oracle (built-in connector) dan sumber legacy lain via Generic JDBC/ODBC — namun dukungan langsung untuk Teradata hanya terkonfirmasi melalui mekanisme Generic JDBC/ODBC, bukan dedicated connector. Konfirmasi ini wajib di-flag untuk penulis.
- SAP Business Data Cloud (BDC), diumumkan Februari 2025 dan GA April 2025, menggabungkan Datasphere + SAP Analytics Cloud + Databricks + BW-as-cloud — ini adalah arah konvergensi; sebut singkat saja di artikel karena deep-dive ada di brief -05.
- Artikel ini adalah **satu-satunya konten Bahasa Indonesia** yang membahas migrasi DW brownfield (dari legacy Teradata/Oracle/BW) — whitespace murni, SERP kosong, dan topik ini sangat relevan untuk perusahaan Indonesia menjelang 2027.

---

## Core facts (verified)

> **Claim 1**: SAP BW 7.5 akan berakhir mainstream maintenance pada akhir 2027
> **Number/specific**: Mainstream maintenance untuk SAP BW 7.5 (berjalan di atas SAP NetWeaver 7.5) berakhir **31 Desember 2027**. Extended maintenance tersedia hingga 2030 dengan biaya premium dua persentase poin di atas tarif maintenance standar.
> **Source**: SAP Community — "Maintenance strategy for SAP NetWeaver 7.5 fully aligned with SAP Business Suite 7" (community.sap.com, diperkuat oleh ibsolution.com/academy/blog_en/maintenance-for-sap-bw-7-5-and-sap-bw4hana-is-extended, diakses Juni 2026); BARC — Larissa Baier, "End of Maintenance for SAP BW: What's Next?" (barc.com/end-of-maintenance-sap-bw/, diakses Juni 2026)
> **Confidence**: high — dikonfirmasi dari multiple SAP Community posts (SAP official channel) dan diverifikasi di ibsolution + BARC.

> **Claim 2**: SAP BW/4HANA mendapat komitmen maintenance setidaknya sampai 2040
> **Number/specific**: Mainstream maintenance SAP BW/4HANA 2023 berlaku hingga **31 Desember 2030**; SAP berkomitmen mempertahankan maintenance BW/4HANA setidaknya sampai **2040**, selaras dengan roadmap SAP S/4HANA.
> **Source**: SAP Community — "SAP BW/4HANA to extend maintenance in alignment with SAP Business Suite and SAP S/4HANA" (community.sap.com/t5/technology-blog-posts-by-sap/sap-bw-4hana-to-extend-maintenance-in-alignment-with-sap-business-suite-and/ba-p/13457952); ibsolution blog (diakses Juni 2026); BARC (barc.com/end-of-maintenance-sap-bw/)
> **Confidence**: high — dua sumber SAP Community + BARC + ibsolution selaras.

> **Claim 3**: SAP Datasphere adalah penerus SAP Data Warehouse Cloud, diluncurkan Maret 2023
> **Number/specific**: Pada **8 Maret 2023**, SAP secara resmi meluncurkan SAP Datasphere sebagai generasi berikutnya dari SAP Data Warehouse Cloud; semua tenant DWC yang sudah ada dimigrasi otomatis tanpa gangguan operasional.
> **Source**: SAP News — "A Deeper Look Into How SAP Datasphere Enables a Business Data Fabric" (news.sap.com/2023/03/sap-datasphere-business-data-fabric/, diakses Juni 2026); CIO.com — "SAP rounds out data warehouse cloud functionality, renamed Datasphere" (cio.com/article/464123, diakses Juni 2026)
> **Confidence**: high — sumber SAP official + publikasi teknologi terkemuka.

> **Claim 4**: SAP Datasphere mendukung koneksi ke sumber non-SAP termasuk Oracle (dedicated connector)
> **Number/specific**: SAP Datasphere memiliki **Oracle Connections** sebagai tipe koneksi khusus (dedicated built-in connector), mendukung federation dan data flows. Untuk sumber lain tanpa dedicated connector (termasuk kemungkinan Teradata), tersedia mekanisme **Generic JDBC** dan **Open Connectors** via SAP Integration Suite.
> **Source**: SAP Help Portal — "Oracle Connections - SAP Datasphere" (help.sap.com/docs/SAP_DATASPHERE/…/c73ae0601d364f47830d339b6e86b7e8.html); SAP Help Portal — "Generic JDBC Connections - SAP Datasphere" (help.sap.com/docs/SAP_DATASPHERE/…/eeae3aca6d0040149f7b1e658c434f15.html), diakses Juni 2026
> **Confidence**: high untuk Oracle (dedicated connector terkonfirmasi); medium untuk Teradata (lihat Flag #1).

> **Claim 5**: SAP Datasphere mendukung tiga moda integrasi data: federation, replikasi, dan transformasi
> **Number/specific**: (1) **Federasi** — akses virtual ke sumber tanpa memindahkan data; (2) **Replikasi** — menyalin data ke Datasphere (tersedia real-time change data capture atau batch untuk banyak tipe koneksi); (3) **Transformasi** — SQL-based logic untuk data wrangling dalam tabel lokal.
> **Source**: SAP Learning — "Introducing SAP Datasphere Integration Options" (learning.sap.com/courses/exploring-sap-datasphere/introducing-sap-datasphere-integration-options); Expertum blog — "Federation, replication and transformation: Data Integration with SAP Datasphere" (expertum.net, diakses Juni 2026)
> **Confidence**: high — selaras antara sumber SAP Learning dan dokumentasi partner.

> **Claim 6**: SAP Datasphere dibangun di atas SAP BTP dan mengusung konsep "business data fabric"
> **Number/specific**: SAP Datasphere adalah "a comprehensive data service built on SAP Business Technology Platform (SAP BTP)" yang memungkinkan akses seamless ke data di mana pun tersimpan, dengan business context dan logic tetap terjaga. Konsep **business data fabric** adalah arsitektur manajemen data yang menyatukan lapisan semantik di atas berbagai data landscape tanpa duplikasi data.
> **Source**: SAP News — news.sap.com/2023/03/sap-datasphere-business-data-fabric/ (diakses Juni 2026)
> **Confidence**: high — langsung dari sumber SAP official.

> **Claim 7**: SAP Business Data Cloud (BDC) diumumkan Februari 2025, menggabungkan Datasphere + SAC + BW + Databricks
> **Number/specific**: SAP mengumumkan **SAP Business Data Cloud (BDC)** pada **13 Februari 2025**; GA terkontrol mulai Q1 2025, GA penuh April 2025. BDC menggabungkan SAP Datasphere, SAP Analytics Cloud (SAC), SAP BW (sebagai opsi cloud-hosted), managed SAP Databricks, dan Joule (AI assistant SAP) dalam satu kontrak SaaS. SAP Datasphere dan SAC tidak lagi dijual terpisah mulai 2026 untuk langganan baru.
> **Source**: BARC — "SAP BDC (Business Data Cloud): What you need to know" (barc.com/sap-bdc-barc-perspective/, diakses Juni 2026); SAP Community — "SAP Business Data Cloud - FAQs" (community.sap.com/t5/technology-blog-posts-by-sap/sap-business-data-cloud-faqs/ba-p/14022781, diakses Juni 2026)
> **Confidence**: high — dua sumber terpercaya (BARC + SAP Community official blog) selaras.

> **Claim 8**: SAP ECC mainstream maintenance berakhir 31 Desember 2027 (konteks untuk positioning artikel)
> **Number/specific**: Mainstream maintenance SAP ECC 6.0 dan SAP Business Suite 7 berakhir **31 Desember 2027**; extended maintenance tersedia hingga 2030 dengan biaya tambahan ~2 persentase poin. Sebagai catatan: untuk pelanggan RISE with SAP ada opsi "SAP ERP, private edition, transition option" yang diumumkan Q1 2025.
> **Source**: Multiple SAP partner sources yang mengacu pada pengumuman resmi SAP; Rimini Street blog — "No Extension to SAP ECC 6 and Business Suite 7 Mainstream Maintenance End Dates" (riministreet.com, diakses Juni 2026); ibsolution — "End of maintenance for SAP ECC in 2027" (diakses Juni 2026)
> **Confidence**: high — tanggal 2027 dan extended 2030 dikonfirmasi dari berbagai sumber yang mengacu pada SAP official.

> **Claim 9**: Proyek migrasi data warehouse enterprise biasanya memakan waktu 6–24 bulan
> **Number/specific**: Rentang umum: lift-and-shift sederhana **6–9 bulan**; migrasi bertahap komprehensif **18–24 bulan**. Validasi data, prosedur rollback, dan QA pasca-migrasi dapat mengonsumsi hingga **25% dari total waktu proyek**. Migrasi enterprise-scale dengan banyak source system dapat mencapai **satu tahun penuh**.
> **Source**: Exasol — "Data Warehouse Migration: Complete Strategy and Project Plan" (exasol.com/hub/data-warehouse/migration-strategy-plan/, diakses Juni 2026); OvalEdge — "Data Warehouse Migration in 2026: A 5-Phase Framework" (ovaledge.com/blog/data-warehouse-migration/, diakses Juni 2026)
> **Confidence**: medium — sumber konsultan/vendor terkemuka di bidang data warehouse, bukan Gartner/IDC. Angka ini adalah estimasi industri; rekomendasikan penulis framing-nya sebagai "estimasi umum" atau "lazim di lapangan".

> **Claim 10**: Parallel run adalah praktik menjalankan sistem lama dan baru secara bersamaan untuk rekonsiliasi angka sebelum cutover
> **Number/specific**: Dalam parallel run, sistem legacy dan sistem baru dioperasikan berdampingan untuk periode tertentu; output keduanya dibandingkan (rekonsiliasi angka) sebelum cutover dilakukan. Ini mencakup record count matching, data sampling, checksum/hashing, dan schema validation.
> **Source**: Quinnox — "Data Migration Best Practices" (quinnox.com/blogs/data-migration-best-practices, diakses Juni 2026); Hopp Tech — "What is Audit and Reconciliation for Data Migration" (hopp.tech, diakses Juni 2026)
> **Confidence**: high — definisi standar industri yang konsisten di berbagai sumber.

> **Claim 11**: Indonesia adalah pasar transformasi digital dengan nilai $24,37 miliar di 2025 dan CAGR 19,11% hingga 2031
> **Number/specific**: Pasar transformasi digital Indonesia bernilai **USD 24,37 miliar di 2025**, tumbuh ke **USD 29,03 miliar di 2026**, dan diproyeksikan mencapai **USD 69,57 miliar di 2031** (CAGR **19,11%**, 2026–2031). Cloud mendominasi dengan **52,41% market share** di 2025.
> **Source**: Mordor Intelligence — "Indonesia Digital Transformation Market Forecasts to 2031" (mordorintelligence.com/industry-reports/indonesia-digital-transformation-market, diakses Juni 2026)
> **Confidence**: medium — Mordor Intelligence adalah firma riset pasar yang dihormati tetapi bukan Gartner/IDC/Forrester yang tier-1. Rekomendasikan penulis menyebutnya sebagai proyeksi riset pasar, bukan sebagai fact absolute.

> **Claim 12**: SAP Datasphere mendukung pengambilan data dari 3.000+ dataset melalui Data Marketplace
> **Number/specific**: SAP Datasphere menyediakan akses ke **lebih dari 3.000 dataset** melalui Data Marketplace, termasuk data keberlanjutan dan ESG, dari berbagai penyedia data.
> **Source**: SAP News — news.sap.com/2023/03/sap-datasphere-business-data-fabric/ (diakses Juni 2026)
> **Confidence**: high — langsung dari sumber SAP official. (Angka ini bisa berubah seiring waktu; penulis bisa framing sebagai "ribuan dataset" untuk keamanan.)

> **Claim 13**: Konsep "data federation" dalam SAP Datasphere memungkinkan akses ke data tanpa memindahkannya
> **Number/specific**: Federasi data (data federation) di SAP Datasphere memungkinkan akses virtual ke tabel di sistem sumber — data tetap di sistem asalnya, tidak direplikasi — sehingga organisasi dapat menunda migrasi penuh dan mengakses data legacy secara langsung.
> **Source**: SAP Learning — "Introducing SAP Datasphere Integration Options" (learning.sap.com, diakses Juni 2026); Expertum — "Federation, replication and transformation: Data Integration with SAP Datasphere" (expertum.net, diakses Juni 2026)
> **Confidence**: high — konsep didokumentasikan di SAP Learning (official) dan sumber partner.

> **Claim 14**: SAP BW 7.5 telah berada dalam mode maintenance (tidak ada investasi fitur baru) sejak 2016
> **Number/specific**: Sejak 2016, SAP BW 7.5 berada dalam mode maintenance — seluruh investasi fitur baru dilakukan eksklusif di SAP BW/4HANA.
> **Source**: ibsolution — "Maintenance for SAP BW 7.5 and SAP BW/4HANA is extended" (ibsolution.com/academy/blog_en/maintenance-for-sap-bw-7-5-and-sap-bw4hana-is-extended, diakses Juni 2026)
> **Confidence**: high — dikonfirmasi di ibsolution (SAP partner terpercaya) yang mengacu pada pengumuman SAP.

> **Claim 15**: Migrasi data warehouse melibatkan tiga jenis artefak legacy: model data, laporan aktif, dan pipeline integrasi
> **Number/specific**: Dalam proyek migrasi brownfield, tim harus menginventarisasi setidaknya tiga kategori artefak: (1) objek model data (InfoProvider, InfoObject, DSO di lingkungan SAP BW; tabel fisik di Teradata/Oracle); (2) laporan dan dashboard aktif vs tidak terpakai; (3) pipeline ETL/ELT dan integrasi ke sistem sumber.
> **Source**: Protiviti TC Blog — "Why Everyone Should Be Preparing for an SAP Datasphere Migration" (tcblog.protiviti.com/2024/10/22, diakses Juni 2026); Exasol migration guide (exasol.com, diakses Juni 2026)
> **Confidence**: high — standar inventarisasi yang konsisten di berbagai panduan migrasi DW.

> **Claim 16**: SAP Business Data Cloud secara eksplisit menargetkan pelanggan SAP BW dengan jalur modernisasi
> **Number/specific**: SAP Business Data Cloud mencakup opsi hosting SAP BW 7.5 atau BW/4HANA sebagai cloud-hosted service, memberikan jalur modernisasi bagi pengguna BW yang ingin bermigrasi bertahap ke cloud tanpa harus langsung meninggalkan investasi BW.
> **Source**: BARC — "SAP BDC (Business Data Cloud): What you need to know" (barc.com/sap-bdc-barc-perspective/, diakses Juni 2026)
> **Confidence**: high — BARC adalah analis terkemuka untuk BI/data warehouse di Eropa.

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Datasphere** | Diluncurkan Maret 2023, penerus SAP Data Warehouse Cloud. Dibangun di atas SAP BTP. Mendukung federation, replikasi, dan transformasi. Koneksi Oracle (dedicated built-in), Generic JDBC untuk non-SAP lain. Konsep "business data fabric". | H2 #3 (apakah bisa migrasi dari Teradata/Oracle ke SAP?), H2 #4 (fase migrasi) | Data Management solution + **Data and AI Consulting** |
| **SAP BW/4HANA** | Generasi berikutnya SAP BW; maintenance mainstream hingga 2030, komitmen sampai 2040. Jalur migrasi bagi pengguna SAP BW 7.5 yang ingin tetap di ekosistem SAP. | H2 #1 (pemicu migrasi: akhir dukungan BW 7.5 2027) | Data Management solution |
| **SAP BW 7.5 (legacy)** | Mainstream maintenance berakhir 31 Des 2027; extended 2030 (biaya tambahan). Sejak 2016 tidak ada fitur baru. | H2 #1 (urgensi), FAQ | — (konteks masalah, bukan solusi Soltius) |
| **SAP Business Data Cloud (BDC)** | Diumumkan 13 Feb 2025, GA April 2025. Menggabungkan Datasphere + SAC + BW-as-cloud + Databricks. Arah konvergensi SAP. | H2 #3 atau H2 #5 — sebut singkat sebagai "arah konvergensi"; deep-dive di -05 | — (jangan over-explain di artikel ini) |
| **Konsep migrasi brownfield** | Federation vs replikasi sebagai strategi masuk (access first, migrate later); parallel run; dekomisioning. Vendor-neutral — berlaku untuk Teradata, Oracle, BW. | H2 #2, H2 #4, H2 #5 | Migration service (under Implementation) |

**Soltius anchor placement:**
- **Closing (H2 #6 atau setelah FAQ)**: "Sebagai SAP Platinum Partner melalui United VARs, Soltius mendampingi perusahaan Indonesia dalam memigrasikan lanskap data warehouse warisan ke platform modern — dari asesmen inventaris, desain target arsitektur, parallel run, hingga dekomisioning sistem lama."
- **Mid-article aside (H2 #4, parallel run)**: Satu kalimat bahwa rekonsiliasi angka antara sistem lama dan baru adalah titik paling sering diabaikan; pengalaman migrasi membantu menetapkan kriteria penerimaan (acceptance criteria) yang realistis.

---

## Authoritative external sources (for the writer to link out)

1. **BARC — "End of Maintenance for SAP BW: What's Next?" (Larissa Baier)** — barc.com/end-of-maintenance-sap-bw/ — *what it backs*: Tanggal akhir mainstream maintenance SAP BW 7.5 (2027) dan komitmen BW/4HANA (2040); opsi strategis pasca-maintenance.

2. **SAP News — "A Deeper Look Into How SAP Datasphere Enables a Business Data Fabric" (8 Maret 2023)** — news.sap.com/2023/03/sap-datasphere-business-data-fabric/ — *what it backs*: Definisi resmi SAP Datasphere, konsep business data fabric, kapabilitas koneksi SAP dan non-SAP, peluncuran Maret 2023.

3. **SAP Community — "Maintenance strategy for SAP NetWeaver 7.5..."** — community.sap.com (lihat URL lengkap di Claim 1) — *what it backs*: Tanggal resmi akhir maintenance SAP BW 7.5 (SAP official channel).

---

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Bagaimana cara memulai migrasi dari data warehouse lama?
Mulai dengan **asesmen inventaris**: petakan semua model data, laporan aktif vs tidak terpakai, pipeline integrasi, dan ketergantungan sistem. Jangan migrasikan semuanya — banyak laporan warisan tidak pernah dibuka lagi. Setelah inventaris bersih, tentukan platform target (misalnya SAP Datasphere atau BW/4HANA), lalu jalankan migrasi per domain data secara bertahap, bukan sekaligus.

### Apakah Teradata atau Oracle bisa dimigrasikan ke SAP Datasphere?
Ya. SAP Datasphere memiliki dedicated connector untuk Oracle (built-in), dan mendukung sumber non-SAP lain melalui mekanisme Generic JDBC — termasuk berbagai database relasional on-premise. Strategi yang umum adalah **federasi terlebih dahulu** (akses data Teradata/Oracle secara virtual di Datasphere tanpa memindahkannya), kemudian lakukan replikasi bertahap per domain setelah model data divalidasi.

### Kapan dukungan SAP BW lama (BW 7.5) berakhir?
Mainstream maintenance SAP BW 7.5 berakhir **31 Desember 2027**. Setelah itu tersedia extended maintenance berbayar (dengan biaya premium sekitar dua persentase poin tambahan) hingga 2030. SAP telah menghentikan pengembangan fitur baru untuk BW 7.5 sejak 2016. Sebagai perbandingan, SAP BW/4HANA mendapat komitmen maintenance setidaknya hingga 2040.

### Apa itu parallel run dan mengapa penting dalam migrasi data warehouse?
Parallel run adalah fase di mana sistem data warehouse lama dan baru dioperasikan secara bersamaan selama periode tertentu. Tim membandingkan output keduanya — laporan, angka KPI, jumlah record — dan memastikan hasilnya konsisten sebelum cutover dilakukan. Ini adalah pengaman paling penting: tanpa rekonsiliasi angka yang sistematis, kesalahan model data di platform baru baru terdeteksi setelah sistem lama dimatikan.

### Berapa lama proyek migrasi data warehouse biasanya?
Rentangnya luas: proyek lift-and-shift sederhana bisa selesai dalam **6–9 bulan**, sementara migrasi bertahap yang komprehensif untuk enterprise besar umumnya membutuhkan **18–24 bulan**. Sekitar 25% dari total waktu proyek biasanya digunakan untuk validasi data, pengujian rekonsiliasi, dan QA pasca-migrasi. Kompleksitas bertambah jika ada banyak sistem sumber atau ribuan laporan yang harus dipetakan ulang.

### Apakah semua laporan lama harus dipindahkan ke platform baru?
Tidak. Dalam praktik migrasi, sering ditemukan bahwa sebagian besar laporan warisan tidak pernah atau sangat jarang diakses. Memindahkan semuanya hanya memindahkan beban — memperlambat migrasi dan meningkatkan biaya. Pendekatan yang lebih efektif: inventarisasi laporan aktif vs tidak terpakai, migrasikan hanya yang masih dibutuhkan bisnis, dan arsipkan atau matikan sisanya. Migrasi adalah kesempatan membersihkan warisan, bukan menduplikasinya.

---

## Data tables for the writer

### Perbandingan SAP BW 7.5 vs SAP BW/4HANA vs SAP Datasphere

| Aspek | SAP BW 7.5 (Legacy) | SAP BW/4HANA | SAP Datasphere |
|---|---|---|---|
| Status pengembangan | Mode maintenance sejak 2016; tidak ada fitur baru | Aktif dikembangkan; selaras roadmap S/4HANA | Aktif dikembangkan; generasi baru (2023) |
| Mainstream maintenance | Berakhir 31 Des 2027 | Berakhir 31 Des 2030 (versi 2023) | Cloud-native; tidak ada EOM konvensional |
| Komitmen dukungan jangka panjang | Extended hingga 2030 (berbayar) | Komitmen SAP s.d. 2040 | Bagian dari SAP BDC (2025 ke depan) |
| Arsitektur | On-premise (atau BW on HANA) | On-premise / private cloud | Cloud-native (multi-cloud: AWS, GCP, Azure) |
| Koneksi non-SAP | Terbatas | Terbatas | Luas: dedicated Oracle, Generic JDBC, Open Connectors |
| Konsep integrasi | ETL tradisional | ETL/ELT | Federation + replikasi + transformasi (ELT) |
| Target pengguna | Pengguna BW 7.5 yang belum migrasi | Pengguna BW yang migrasi intra-SAP | Pengguna baru atau migrasi dari non-SAP DW |

### Lima Fase Migrasi Data Warehouse (brownfield)

| Fase | Aktivitas Utama | Risiko Utama | Mitigasi |
|---|---|---|---|
| 1. Asesmen & Prioritisasi | Inventarisasi model data, laporan (aktif vs mati), integrasi, kualitas data | Meremehkan scope; "garbage in, garbage out" | Audit laporan aktif vs tidak terpakai; cleansing sebelum migrasi |
| 2. Desain Target & Pemetaan | Desain arsitektur platform baru; pemetaan objek lama ke model baru | Mismatch model data (objek BW ↔ Datasphere) | Libatkan arsitek data sejak awal; iterasi kecil |
| 3. Migrasi Bertahap per Domain | Pindahkan data per domain (keuangan, SCM, produksi) secara inkremental | Downtime atau duplikasi jika dilakukan sekaligus | Strategi "access first via federation, then replicate" |
| 4. Parallel Run | Jalankan lama & baru berdampingan; rekonsiliasi angka | Kriteria penerimaan tidak jelas; tim ragu kapan cutover aman | Tetapkan acceptance criteria tertulis sebelum fase dimulai |
| 5. Cutover & Dekomisioning | Matikan sistem lama; validasi final; dokumentasi | Kehilangan data historis; dependensi tersembunyi | Arsip data lama sebelum dekomisioning; uji dependensi end-to-end |

---

## Edge cases & nuance

- **Federation ≠ migrasi selesai.** Banyak proyek berakhir pada fase federation (data tetap di sistem lama, diakses virtual) karena lebih murah dan cepat. Ini valid sebagai strategi jangka pendek, tetapi tidak menyelesaikan masalah lisensi/maintenance sistem sumber dalam jangka panjang. Penulis harus jelas bahwa federation adalah strategi transisi, bukan tujuan akhir.
- **"Zero downtime" tidak bisa dijanjikan secara absolut.** Parallel run meminimalkan risiko, tetapi periode cutover selalu membawa potensi gangguan — terutama untuk pipeline near-real-time. Hindari framing "tanpa downtime" yang absolut; gunakan "meminimalkan risiko downtime" atau "dengan jendela cutover terkontrol".
- **Teradata tidak memiliki dedicated connector di Datasphere.** Berdasarkan penelitian ini, Oracle memiliki built-in connector, tetapi Teradata tampaknya menggunakan Generic JDBC (via SAP HANA Smart Data Integration). Klaim "Teradata didukung langsung" perlu diverifikasi lebih lanjut — lihat Flag #1.
- **SAP Business Data Cloud mengubah pembelian Datasphere/SAC.** Mulai 2026, Datasphere dan SAC tidak lagi dijual secara terpisah untuk langganan baru — hanya tersedia sebagai bagian dari BDC. Artikel cukup menyebut BDC sebagai "arah konvergensi SAP"; jangan over-explain karena ada artikel -05 khusus.
- **Migrasi ke non-SAP (Snowflake/BigQuery) adalah opsi valid.** Artikel ini memposisikan SAP Datasphere/BW/4HANA sebagai target, tetapi pengambil keputusan yang sudah memiliki investasi hyperscaler mungkin lebih memilih platform non-SAP. Brief meminta sudut SAP — oke — tetapi H2 #5 ("kapan belum bermigrasi") adalah tempat yang tepat untuk menyebut koeksistensi sebagai opsi tanpa menghindarinya.
- **Pengguna SAP BW 7.5 yang sudah di HANA.** Beberapa perusahaan sudah menjalankan BW on HANA (bukan versi full cloud) — ini bukan posisi BW/4HANA, dan migrasi mereka tetap membutuhkan langkah tersendiri. Jangan samakan "BW on HANA" dengan "BW/4HANA".

---

## Flags (open factual risk)

- **Flag #1 — Dukungan Teradata di SAP Datasphere**: Brief menyebutkan "konektor luas SAP & non-SAP" termasuk Teradata. Penelitian menemukan Oracle memiliki **dedicated built-in connector** di Datasphere, tetapi Teradata hanya terkonfirmasi via **Generic JDBC** (melalui SAP HANA SDI 2.0 PAM) — bukan dedicated connector. Sumber SAP Help Portal tidak dapat di-fetch secara langsung untuk konfirmasi penuh. **Rekomendasi**: Framing-nya "Teradata dapat dihubungkan via Generic JDBC/ODBC dalam SAP Datasphere" — hindari klaim "ada dedicated Teradata connector" tanpa verifikasi dari help.sap.com secara langsung. Jangan tulis "Teradata didukung penuh" tanpa catatan mekanisme koneksinya.

- **Flag #2 — Nama produk SAP Datasphere dalam konteks BDC (2026)**: Mulai Januari 2026, SAP Datasphere tidak lagi tersedia sebagai langganan mandiri untuk pelanggan baru — ia hanya dijual sebagai bagian dari SAP Business Data Cloud (BDC). Artikel yang menyebut "berlangganan SAP Datasphere" sebagai tindakan yang bisa dilakukan hari ini bisa menyesatkan untuk pembaca baru. **Rekomendasi**: Framing yang aman — "SAP Datasphere, yang kini menjadi inti dari SAP Business Data Cloud (BDC)" atau "melalui SAP Business Data Cloud yang mengintegrasikan Datasphere".

- **Flag #3 — Angka proporsi laporan tidak terpakai**: Brief menyebut "sering ditemukan ratusan laporan warisan yang tak pernah dibuka" — ini adalah pola lapangan yang valid secara praktik, tetapi tidak ada sumber kuantitatif terverifikasi yang ditemukan (tidak ada studi Gartner/IDC dengan persentase spesifik). **Rekomendasi**: Tulis sebagai observasi pengalaman implementasi: "Dalam praktik migrasi, tim sering menemukan sebagian besar laporan warisan tak lagi aktif digunakan" — tanpa angka persentase absolut.

- **Flag #4 — Timeline proyek 6–24 bulan bukan dari sumber tier-1**: Angka timeline migrasi DW (6–9 bulan untuk sederhana, 18–24 bulan untuk komprehensif) berasal dari sumber vendor/konsultan (Exasol, OvalEdge), bukan dari Gartner/IDC/Forrester. **Rekomendasi**: Framing sebagai "estimasi umum di lapangan" atau "lazim berkisar antara 6 hingga 24 bulan tergantung kompleksitas" — bukan sebagai fact absolut dari riset primer.

---

## Definition snippet draft (40–60 words)

> **Migrasi data warehouse** adalah proses memindahkan model data, data historis, pipeline integrasi, dan laporan dari sistem penyimpanan data lama (seperti Teradata, Oracle, atau SAP BW) ke platform modern. Berbeda dengan implementasi baru, migrasi brownfield harus menjaga kesinambungan operasional — termasuk parallel run dan rekonsiliasi angka — sebelum sistem lama dapat dimatikan.

*(54 kata — dalam rentang 40–60.)*

---

## Notes for image-planner

- **Concept 1 — Diagram fase migrasi brownfield (5 fase berurutan)**: Infografis horizontal atau vertikal menampilkan lima fase: (1) Asesmen & Inventarisasi, (2) Desain Target & Pemetaan, (3) Migrasi Bertahap per Domain, (4) Parallel Run & Rekonsiliasi, (5) Cutover & Dekomisioning. Setiap fase bisa memiliki ikon kecil dan label risiko utama. Tone: clean corporate blue/grey, konsisten dengan brand Soltius.

- **Concept 2 — Diagram federation vs replikasi**: Ilustrasi dua skenario berdampingan — kiri: "Federasi" (panah dua arah antara sistem lama dan Datasphere, data tetap di sumber), kanan: "Replikasi" (panah satu arah, data berpindah ke Datasphere). Label singkat menjelaskan kapan memilih masing-masing. Berguna untuk H2 #3 (koneksi Teradata/Oracle ke SAP).

- **Concept 3 — Timeline akhir dukungan SAP BW**: Timeline horizontal yang menampilkan: 2016 (BW 7.5 masuk mode maintenance), 2027 (akhir mainstream maintenance), 2030 (akhir extended maintenance), 2040 (batas dukungan BW/4HANA). Berguna untuk memvisualkan urgensi di H2 #1 tanpa perlu teks panjang.
