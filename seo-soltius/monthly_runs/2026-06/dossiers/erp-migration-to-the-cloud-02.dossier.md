---
brief_id: "erp-migration-to-the-cloud-02"
researcher_run_date: "2026-06-02"
sources_cited: 14
flags: 4
---

# Research Dossier: Migrasi ERP ke Cloud Tanpa Ganggu Operasional: Strategi Minimasi Downtime

## TL;DR for the writer

- Downtime dalam migrasi ERP ke cloud adalah risiko nyata, tetapi dapat diminimalkan secara signifikan dengan pendekatan teknis yang tepat — terutama Near-Zero Downtime (nZDM/NZDT) dan Downtime-Optimized Conversion dari SAP, yang memungkinkan sistem sumber tetap berjalan selama sebagian besar proses migrasi.
- SAP ECC mainstream maintenance berakhir 31 Desember 2027 (EHP 6/7/8); extended support berbayar tersedia hingga 2030 — ini konteks pemicu yang kuat mengapa perusahaan harus merencanakan migrasi sekarang, bukan menunda.
- NZDT adalah layanan SAP berbasis proyek (melibatkan SAP Global Delivery), bukan alat yang bisa dijalankan sendiri oleh pelanggan — hanya tersedia untuk jumlah pelanggan terbatas. Yang lebih umum digunakan adalah "Downtime-Optimized Conversion (doC)" via SUM 2.0 SP18+ yang bisa dieksekusi mitra implementasi.
- Downtime "tersembunyi" pasca go-live (sistem menyala tapi pengguna tidak produktif) seringkali lebih mahal dari downtime teknis — penting untuk dibedakan di artikel ini sebagai sudut pandang yang belum dibahas kompetitor.
- Soltius diposisikan sebagai mitra implementasi yang mengeksekusi migrasi (Best RISE & Best Cloud Partner); penekanan pada pengalaman dry-run cutover dan hypercare sebagai pembeda layanan, bukan klaim teknis spesifik yang belum terverifikasi.

---

## Core facts (verified)

> **Claim**: SAP ECC (SAP Business Suite 7 / SAP ERP 6.0) akan berhenti mendapat mainstream maintenance
> **Number/specific**: Mainstream maintenance untuk SAP ERP 6.0 dengan Enhancement Package 6, 7, dan 8 berakhir 31 Desember 2027; extended support berbayar tersedia 2028–2030 (tambahan biaya ~2% maintenance fee)
> **Source**: SAP Support Portal — Maintenance Strategy page: https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html (diakses 2026-06-02)
> **Confidence**: high

> **Claim**: Versi SAP ERP 6.0 tanpa Enhancement Package atau dengan EHP 1–5 sudah berakhir maintenance lebih awal
> **Number/specific**: Mainstream maintenance untuk SAP ERP 6.0 tanpa EHP dan EHP 1–5 berakhir 31 Desember 2025
> **Source**: SAP Community blog "Maintenance Timelines for SAP ERP 6.0": https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/maintenance-timelines-for-sap-erp-6-0/ba-p/13524564 (diakses 2026-06-02)
> **Confidence**: high

> **Claim**: SAP memiliki metodologi Near-Zero Downtime untuk konversi ke S/4HANA
> **Number/specific**: SAP menyebut ini "Near Zero downtime Technology (nZDT)" — sebuah layanan proyek SAP, bukan alat mandiri; dibedakan dari "Downtime-Optimized Conversion (doC)" yang merupakan opsi standar via Software Update Manager (SUM) 2.0 SP18+
> **Source**: SAP Support Portal — Downtime-Optimized Conversion Approach: https://support.sap.com/en/tools/software-logistics-tools/software-update-manager/downtime-optimized-conversion-approach.html (diakses 2026-06-02); SAP Community NZDT case study: https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/nzdt-downtime-approach-for-sap-s-4hana-conversion-customer-case/ba-p/13437686
> **Confidence**: high — namun penting: NZDT adalah layanan terbatas SAP (SAP Global Delivery terlibat), bukan yang semua mitra bisa tawarkan secara mandiri. Artikel harus menyebut "Downtime-Optimized Conversion" atau "NZDT methodology" tanpa mengklaim semua mitra dapat mengeksekusinya mandiri.

> **Claim**: Mekanisme teknis NZDT menggunakan database trigger untuk mencatat perubahan pengguna selama migrasi
> **Number/specific**: Selama NZDT, sistem kloning PRD dibuat; konversi dilakukan di kloning sementara pengguna tetap aktif di PRD; database triggers merekam semua perubahan pengguna yang lalu direplikasi ke kloning; switch akhir (cutover final) membutuhkan hanya downtime singkat
> **Source**: SAP Community blog — NZDT case study (link di atas); SAP SUM NZDT documentation
> **Confidence**: high

> **Claim**: Downtime-Optimized Conversion (doC) tersedia sebagai opsi standar dalam SUM
> **Number/specific**: Opsi ini tersedia mulai Software Update Manager (SUM) 2.0 SP 18 ke atas; menggunakan metode trigger-based replication; bisa dieksekusi oleh mitra implementasi bersertifikat
> **Source**: SAP Support Portal — Downtime-Optimized Conversion Approach: https://support.sap.com/en/tools/software-logistics-tools/software-update-manager/downtime-optimized-conversion-approach.html
> **Confidence**: high

> **Claim**: SAP S/4HANA memiliki komitmen maintenance jangka panjang
> **Number/specific**: SAP berkomitmen maintenance S/4HANA hingga 2040 — ini yang mendorong perusahaan berpindah dari ECC ke S/4HANA
> **Source**: SAP Support Portal: https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html
> **Confidence**: high

> **Claim**: RISE with SAP adalah bundel migrasi cloud all-in-one dari SAP
> **Number/specific**: RISE with SAP mencakup: SAP S/4HANA Cloud (private or public edition), SAP Business Network Starter Pack, SAP BTP credits, SAP Business Process Intelligence, dan cloud infrastructure yang dikelola SAP; tersedia melalui satu kontrak
> **Source**: SAP.com — RISE with SAP product page; product_matrix.md (SOLTIUS knowledge base)
> **Confidence**: high — namun bundel spesifik bisa berubah; writer tidak perlu mencantumkan detail komponen, cukup "bundel migrasi cloud SAP"

> **Claim**: Migrasi SAP sering mengalami overrun waktu dan biaya
> **Number/specific**: Brief mencatat ISG 2026: 60% proyek migrasi SAP over-budget atau over-time (dikutip intelliswat.com)
> **Source**: ISG dikutip oleh intelliswat.com — sumber sekunder, bukan ISG langsung
> **Confidence**: medium — ISG adalah firma riset kredibel, namun penulis mengambil dari sumber sekunder. Gunakan dengan atribusi: "menurut riset ISG" bukan "menurut data resmi". ⚠️ Lihat Flags #1.

> **Claim**: Sebagian besar perusahaan mengalami masalah integrasi/data pasca migrasi
> **Number/specific**: Brief menyebut 82% SAP users mengalami masalah integrasi/data pasca migrasi (dikutip insightsoftware.com)
> **Source**: insightsoftware.com — sumber sekunder dari vendor software
> **Confidence**: low — insightsoftware adalah vendor software BI yang bisa memiliki bias; tidak dapat mengidentifikasi studi primer di balik angka ini. ⚠️ Lihat Flags #2.

> **Claim**: Phased rollout (wave approach) membantu meminimalkan risiko downtime
> **Number/specific**: Pendekatan phased rollout membagi implementasi per divisi/modul/geografi dalam beberapa gelombang (wave), sehingga tidak semua unit bisnis go-live serentak; tiap wave mempersempit scope downtime
> **Source**: SAP implementation best practices (domain knowledge); dikonfirmasi oleh literatur implementasi SAP (Deloitte, Accenture, SAP Activate methodology)
> **Confidence**: high — ini metodologi standar yang terdokumentasi

> **Claim**: SAP Activate adalah framework resmi SAP untuk implementasi/migrasi
> **Number/specific**: SAP Activate Methodology adalah metodologi implementasi resmi SAP yang mencakup fase Discover, Prepare, Explore, Realize, Deploy, Run; digunakan untuk semua implementasi S/4HANA termasuk via RISE
> **Source**: SAP Activate Road Map / SAP Learning Hub
> **Confidence**: high

> **Claim**: Cutover planning adalah fase kritis dalam migrasi ERP
> **Number/specific**: Dalam SAP Activate, fase Deploy mencakup cutover planning: mock cutover (dry-run), transport requests, data migration final, dan hypercare planning; cutover biasanya dilakukan pada akhir pekan atau periode low-season bisnis
> **Source**: SAP Activate methodology documentation; SAP Community: https://community.sap.com/t5/technology-blog-posts-by-sap/system-conversion-to-sap-s-4hana-downtime-reduction-with-technical-options/ba-p/14343806
> **Confidence**: high

> **Claim**: Hypercare period adalah standar dalam proyek implementasi SAP
> **Number/specific**: Hypercare adalah fase pasca go-live di mana tim implementasi bersiaga penuh; praktik industri umumnya 4–8 minggu; SAP Activate memasukkan "Run" phase yang mencakup hypercare support
> **Source**: SAP Activate methodology; praktik lapangan konsultan SAP besar (Deloitte, Accenture, Soltius)
> **Confidence**: medium — rentang 4–8 minggu adalah praktik industri umum, bukan angka resmi SAP yang ditetapkan secara formal. ⚠️ Lihat Flags #3.

> **Claim**: RISE with SAP tersedia dalam dua edisi S/4HANA Cloud
> **Number/specific**: SAP S/4HANA Cloud tersedia dalam Private Edition (cocok enterprise besar, dengan lebih banyak kustomisasi) dan Public Edition (standar, multi-tenant, update otomatis); cutover planning lebih kompleks untuk Private Edition
> **Source**: SAP.com — RISE with SAP; product_matrix.md SOLTIUS
> **Confidence**: high

> **Claim**: Soltius diakui sebagai Best RISE dan Best Cloud Partner oleh SAP
> **Number/specific**: 2021 — Best Cloud / Best RISE / Best Cloud Renewal Partner (SEA); juga multiple cloud partner awards 2014–2019
> **Source**: company_profile.md (SOLTIUS knowledge base — verified)
> **Confidence**: high

---

## Solution focus + Soltius anchor (from product_matrix.md)

| Yang diajarkan (SAP/partner tech) | Fakta yang perlu akurat | Di mana dalam artikel | Layanan/kredensi Soltius |
|---|---|---|---|
| **Downtime-Optimized Conversion (doC) / NZDT metodologi** | doC via SUM 2.0 SP18+; NZDT adalah layanan SAP Global Delivery terbatas; keduanya menggunakan trigger-based replication | H2 #2 (strategi minimasi downtime) | Migration service + "mitra implementasi berpengalaman" |
| **RISE with SAP** | Bundel all-in-one SAP untuk cloud migration; mencakup S/4HANA Cloud (private/public); untuk enterprise yang ingin simplifikasi kontrak | H2 #2 (migrasi data selektif) dan H2 closing | Best RISE & Best Cloud Partner (award 2021 SEA) |
| **SAP S/4HANA Cloud Private Edition** | Untuk enterprise besar; cutover lebih kompleks; lebih banyak kustomisasi diizinkan dibanding Public | H2 #3 (berapa lama jendela cutover) | Migration service |
| **SAP Activate Methodology** | Framework resmi SAP; fase Deploy mencakup mock cutover, final data migration, hypercare | H2 #5 (checklist cutover) | Soltius mengikuti SAP Activate sebagai mitra bersertifikat |
| **Hypercare period** | 4–8 minggu post go-live (praktik industri); Soltius menyediakan AMS pasca go-live | H2 #5 (checklist) dan CTA | Application Management Services (AMS) |

**Reminder**: Soltius mengimplementasikan/memigrasikan/mendukung teknologi ini — tidak membangunnya. Maks 2–3 penyebutan Soltius. Satu yang direkomendasikan di penutup CTA, satu di H2 checklist cutover.

---

## Authoritative external sources (≥2 strong, untuk writer link-out)

1. **SAP Support Portal — Downtime-Optimized Conversion Approach** — https://support.sap.com/en/tools/software-logistics-tools/software-update-manager/downtime-optimized-conversion-approach.html — *mendukung*: penjelasan teknis doC/NZDT yang bisa dieksekusi mitra; SAP official, authority tertinggi.

2. **SAP Community — System Conversion to SAP S/4HANA: Downtime Reduction with Technical Options** — https://community.sap.com/t5/technology-blog-posts-by-sap/system-conversion-to-sap-s-4hana-downtime-reduction-with-technical-options/ba-p/14343806 — *mendukung*: opsi teknis pengurangan downtime (SUM NZDT, database migration options); ditulis oleh SAP, bernilai sebagai link ke SAP Community.

3. **SAP Support Portal — Maintenance Strategy S/4HANA & Business Suite 7** — https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html — *mendukung*: ECC mainstream maintenance berakhir 2027, extended hingga 2030, S/4HANA dijamin hingga 2040.

4. **SAP Community — NZDT Case Study** — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/nzdt-downtime-approach-for-sap-s-4hana-conversion-customer-case/ba-p/13437686 — *mendukung*: mekanisme NZDT secara end-to-end (clone, trigger, switch); contoh kasus nyata.

---

## FAQ Q&As (7 draft, Bahasa Indonesia)

### Apa itu downtime dalam migrasi ERP ke cloud?
Downtime dalam migrasi ERP adalah periode saat sistem lama dimatikan atau dibatasi aksesnya untuk dipindahkan ke lingkungan cloud baru. Selama jendela ini, pengguna tidak dapat memproses transaksi — faktur tertahan, pesanan tidak bisa diinput, laporan tidak bisa dijalankan. Panjang downtime bergantung pada volume data, jumlah modul, dan metode migrasi yang dipilih.

### Apakah bisa migrasi ERP tanpa mematikan sistem sama sekali?
Tidak sepenuhnya, tapi bisa mendekati nol. Metode Downtime-Optimized Conversion (doC) SAP memungkinkan sebagian besar pekerjaan migrasi dilakukan saat sistem sumber masih berjalan — menggunakan replikasi berbasis database trigger. Cutover final (switch ke sistem baru) tetap membutuhkan jendela downtime singkat, namun jauh lebih pendek dibanding metode konvensional: dari hitungan hari menjadi hitungan jam.

### Apa itu Near-Zero Downtime (NZDT) dalam konteks migrasi SAP?
Near-Zero Downtime (nZDT) adalah pendekatan SAP yang meminimalkan gangguan operasional saat konversi ke S/4HANA. Secara teknis, sistem kloning dibuat dari sistem produksi; konversi dijalankan di kloning sementara pengguna terus bekerja di sistem asli; database trigger merekam semua perubahan; saat konversi kloning selesai, terjadi switch singkat ke sistem baru. NZDT formal melibatkan SAP Global Delivery dan tersedia untuk kasus tertentu; versi yang lebih umum tersedia adalah Downtime-Optimized Conversion via SUM 2.0 SP18+.

### Berapa lama jendela cutover yang wajar untuk perusahaan menengah?
Untuk perusahaan menengah (data ERP moderat, 5–10 modul aktif, sedikit kustomisasi), jendela cutover konvensional biasanya 48–72 jam — umumnya dijadwalkan mulai Jumat malam hingga Senin pagi. Dengan pendekatan Downtime-Optimized Conversion, jendela ini bisa dipangkas signifikan karena pekerjaan berat sudah selesai sebelum cutover dimulai. Perusahaan besar dengan data kompleks dan banyak kustomisasi mungkin membutuhkan hingga 1–2 pekan meski menggunakan metode NZDT.

### Bagaimana memilih waktu terbaik untuk go-live ERP?
Pilih periode saat volume transaksi paling rendah — akhir bulan atau awal bulan biasanya bukan saat terbaik (tutup buku). Akhir pekan panjang atau libur nasional ideal untuk memaksimalkan jendela cutover tanpa mengorbankan hari kerja. Hindari periode puncak bisnis seperti tutup tahun buku, musim penjualan tinggi, atau saat audit berlangsung. Perusahaan manufaktur sebaiknya menghindari periode produksi penuh atau pengiriman batch besar.

### Apa yang harus disiapkan dalam 30 hari sebelum go-live SAP?
Tiga puluh hari sebelum go-live adalah periode kritis: data cleansing harus sudah selesai (data kotor di sistem baru lebih berbahaya dari data kotor di sistem lama), mock cutover (dry-run) pertama harus sudah dilakukan untuk mengukur durasi aktual, User Acceptance Testing (UAT) harus tuntas dan sign-off dari semua departemen kunci, pelatihan pengguna akhir harus selesai, dan rencana rollback harus teruji — bukan hanya ada di dokumen.

### Apa yang dilakukan jika go-live harus di-rollback?
Rollback adalah skenario yang harus direncanakan sebelum go-live, bukan saat krisis. Dalam perencanaan cutover yang baik, tim menetapkan "go/no-go decision point" — biasanya 12–24 jam setelah go-live. Jika pada titik itu ditemukan masalah kritis yang tidak bisa diselesaikan dalam waktu singkat, sistem dikembalikan ke kondisi sebelum cutover menggunakan backup yang disiapkan. Ini alasan kenapa backup lengkap sistem lama harus ada dan sudah diuji sebelum cutover dimulai.

---

## Data tables for the writer

### Perbandingan Metode Migrasi berdasarkan Dampak Downtime

| Metode | Downtime Tipikal | Cocok untuk | Catatan penting |
|---|---|---|---|
| Konvensional (Big Bang) | 72 jam – 2 pekan | Perusahaan kecil, data minimal | Semua sekaligus; risiko tinggi tapi lebih sederhana |
| Phased Rollout (Wave) | Per wave: 24–48 jam | Enterprise besar, multi-negara | Risiko terdistribusi; gelombang pertama jadi uji coba |
| Downtime-Optimized Conversion (doC) | Jauh lebih pendek dari konvensional | Enterprise menengah-besar | Membutuhkan SUM 2.0 SP18+; mitra bersertifikat |
| NZDT (SAP Global Delivery) | Hitungan jam untuk cutover final | Enterprise besar, sistem kritis | Layanan SAP terbatas; perlu keterlibatan SAP GD |

### Checklist Cutover 8 Poin (draft untuk writer)

| # | Item | Status idealnya 7 hari sebelum go-live |
|---|---|---|
| 1 | Data cleansing selesai & diverifikasi | ✅ Tidak ada data duplikat/kotor yang belum diresol |
| 2 | UAT sign-off semua departemen kunci | ✅ Dokumen sign-off dari Finance, Ops, Logistik |
| 3 | Mock cutover (dry-run) ≥ 2 kali | ✅ Durasi aktual tercatat; isu dry-run sudah diresol |
| 4 | Rollback plan teruji | ✅ Backup sistem lama terkonfirmasi; prosedur rollback dilatih |
| 5 | Pelatihan user akhir selesai | ✅ Semua user kunci sudah pelatihan; materi tersedia |
| 6 | Komunikasi ke seluruh divisi | ✅ Email/pengumuman jadwal downtime terkirim |
| 7 | Monitoring dashboard aktif | ✅ Tim IT siap pantau sistem baru secara real-time |
| 8 | Tim hypercare on-call 24 jam | ✅ Vendor/mitra implementasi on-standby minggu pertama |

---

## Edge cases & nuance

- **NZDT bukan opsi mandiri untuk semua perusahaan**: NZDT formal dari SAP melibatkan SAP Global Delivery dan hanya tersedia untuk kasus tertentu. Yang lebih umum dipakai mitra implementasi adalah Downtime-Optimized Conversion (doC) via SUM. Artikel tidak boleh menjanjikan "zero downtime" — frasa yang lebih tepat adalah "downtime minimal" atau "downtime yang jauh lebih singkat".

- **Perbedaan downtime teknis vs. downtime efektif**: Sistem bisa "menyala" pada hari go-live, tapi jika data tidak bersih, laporan salah, atau pengguna belum terlatih, bisnis mengalami downtime efektif yang bisa berlangsung beberapa minggu. Ini "biaya tersembunyi" yang tidak dibahas dalam panduan teknis NZDT.

- **Cutover window yang "realistis" sangat bergantung konteks**: Angka 48–72 jam untuk perusahaan menengah adalah perkiraan industri, bukan jaminan. Mock cutover (dry-run) adalah satu-satunya cara mengetahui angka aktual untuk setiap proyek.

- **SAP ERP 6.0 versi lama sudah lebih urgent**: Perusahaan yang masih di ERP 6.0 tanpa EHP atau EHP 1–5 sudah kehilangan mainstream maintenance per 31 Desember 2025 — lebih mendesak dari yang menggunakan EHP 6/7/8 (deadline 2027).

- **RISE with SAP vs. kontrak tradisional**: RISE menawarkan simplifikasi kontrak (satu vendor, satu invoice), tapi tidak selalu berarti cutover lebih mudah — kompleksitas teknis tetap bergantung pada kondisi sistem asal.

- **Data volume adalah faktor utama**: Perusahaan distribusi/manufaktur sering memiliki puluhan juta baris transaksi historis. Strategi "migrasi data selektif" (hanya data aktif; arsip historis dimigrasi terpisah setelah go-live) adalah cara praktis mempersempit jendela cutover yang jarang dibahas dalam panduan umum.

---

## Flags (open factual risk)

- ⚠️ **Flag #1 — Angka ISG 2026 (60% proyek over budget/time)**: Brief menyebut ini dikutip dari intelliswat.com (bukan dari ISG langsung). Tidak dapat mengonfirmasi laporan ISG spesifik ini. **Rekomendasi**: gunakan dengan atribusi eksplisit "menurut firma riset ISG (dikutip dalam laporan industri 2026)" atau pertimbangkan untuk diganti dengan data yang lebih mudah dilacak. Jangan sebut sebagai "data resmi ISG" tanpa tautan ke laporan asli.

- ⚠️ **Flag #2 — Angka insightsoftware.com (82% SAP users masalah integrasi)**: Sumber adalah vendor software BI — potensi bias tinggi. Tidak dapat mengidentifikasi studi primer. **Rekomendasi**: turunkan ke "banyak perusahaan" atau gunakan alternatif seperti phrasing "dalam pengalaman implementasi umum" — hindari angka spesifik tanpa sumber primer yang dapat diverifikasi. Jika dipaksa pakai, atribusikan: "menurut survei insightsoftware" bukan "data industri".

- ⚠️ **Flag #3 — Hypercare period 4–8 minggu**: Ini adalah praktik industri umum, bukan angka yang ditetapkan secara resmi oleh SAP dalam dokumentasi publik. **Rekomendasi**: frasekan sebagai "umumnya 4–8 minggu dalam praktik implementasi SAP" bukan sebagai standar SAP resmi.

- ⚠️ **Flag #4 — Klaim "Alfrecell 12 minggu tanpa gangguan operasional"**: Brief menyebut kasus ini (dikutip birchmangroup.com) — tidak dapat memverifikasi dari sumber primer. Birchmangroup adalah firma konsultan SAP, bukan sumber independen. **Rekomendasi**: jangan gunakan klaim spesifik ini tanpa akses ke sumber aslinya. Ganti dengan phrasing umum tentang timeline migrasi tanpa mengaitkan dengan nama perusahaan spesifik.

---

## Definition snippet draft (40–60 words)

> *Downtime migrasi ERP ke cloud* adalah jeda operasional yang terjadi saat sistem ERP lama dipindahkan ke lingkungan cloud baru dan pengguna belum dapat mengakses sistem baru. Durasinya dapat dipangkas dengan metode Downtime-Optimized Conversion (doC) SAP — migrasi data besar dilakukan saat sistem masih aktif, sehingga cutover final hanya membutuhkan jeda singkat.

---

## Notes for image-planner

- **Concept 1 — Diagram proses NZDT / Downtime-Optimized Conversion**: Timeline horizontal yang menunjukkan tiga fase — (a) sistem lama aktif + pekerjaan migrasi berjalan paralel di background, (b) trigger recording perubahan pengguna, (c) cutover singkat + switch ke sistem baru. Visualisasi ini menjelaskan konsep yang sulit dipahami dari teks saja.

- **Concept 2 — Infografis perbandingan metode cutover**: Tabel visual empat metode (Big Bang, Phased, doC, NZDT) dengan ikon jam untuk menunjukkan perbandingan downtime — dari paling lama ke paling singkat. Tambahkan kolom "cocok untuk" dengan ikon perusahaan kecil/menengah/besar.

- **Concept 3 — Checklist visual cutover 30 hari**: Kalender atau timeline mundur 30 hari sebelum go-live dengan checkpoint visual (D-30: mock cutover, D-14: UAT sign-off, D-7: dry-run kedua, D-1: backup konfirmasi, D-day: go-live). Tipe aset: infografis checklist bergaya modern; cocok untuk LinkedIn / embed artikel.
