---
brief_id: "erp-migration-to-the-cloud-01"
researcher_run_date: "2026-06-02"
sources_cited: 14
flags: 4
---

# Research Dossier: Brownfield, Greenfield, atau Bluefield? Panduan Memilih Jalur Migrasi ERP ke Cloud

## TL;DR for the writer

- **Tiga jalur migrasi, bukan satu ukuran untuk semua.** Brownfield (system conversion) mempertahankan konfigurasi + data; greenfield (new implementation) membangun dari nol; bluefield/Selective Data Transition (SDT) memilih secara selektif data dan proses mana yang dibawa — istilah SAP resmi adalah "Selective Data Transition", sedangkan "BLUEFIELD®" adalah trademark terdaftar milik SNP Group.
- **ECC mainstream maintenance berakhir 31 Desember 2027** (untuk EHP 6–8); extended support hingga 31 Desember 2030 dengan premi +2 percentage point per tahun di atas biaya maintenance standar. Ini adalah tekanan waktu nyata — proyek 12–18 bulan berarti keputusan jalur migrasi harus diambil **sekarang**.
- **Bluefield/SDT adalah pendekatan mayoritas** per ISG 2026: ~48% perusahaan memilih SDT, brownfield 34%, greenfield 18%. Fakta ini counter-intuitive karena banyak artikel Indonesia masih menyederhanakan pilihan ke brownfield vs greenfield saja.
- **60% proyek SAP S/4HANA melebihi anggaran atau jadwal** terlepas dari pendekatan yang dipilih (ISG 2026) — ini adalah fakta yang harus disertakan secara jujur untuk meningkatkan kredibilitas E-E-A-T.
- **RISE with SAP mendukung semua tiga pendekatan** pada private edition; GROW with SAP adalah jalur greenfield untuk public edition (standarisasi proses, kustomisasi minimal).

---

## Core facts (verified)

> **Claim**: SAP akan menghentikan mainstream maintenance untuk SAP ECC (Business Suite 7)
> **Number/specific**: Mainstream maintenance berakhir 31 Desember 2027 (untuk Enhancement Package 6–8); untuk EHP 0–5, mainstream support berakhir 31 Desember 2025
> **Source**: SAP Support Portal — "Maintenance Timelines for SAP ERP 6.0" (https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html), diakses 2026-06-02
> **Confidence**: high

> **Claim**: Extended maintenance SAP ECC tersedia setelah 2027
> **Number/specific**: Extended support tersedia 2028–2030 (berakhir 31 Desember 2030) bagi pelanggan yang memilih opt-in; setelah 2030 hanya "customer-specific maintenance" tanpa komitmen fitur/keamanan standar
> **Source**: SAP Support Portal (sama di atas), diakses 2026-06-02
> **Confidence**: high

> **Claim**: Extended maintenance SAP ECC membawa biaya tambahan
> **Number/specific**: Premi +2 percentage point di atas tarif maintenance basis untuk semua layanan support dalam lingkup SAP Business Suite 7
> **Source**: SAP Support Portal — "Innovation Commitment for SAP S/4HANA until 2040" (https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html), diakses 2026-06-02
> **Confidence**: high

> **Claim**: SAP S/4HANA akan didukung hingga 2040
> **Number/specific**: SAP berkomitmen mendukung SAP S/4HANA hingga tahun 2040 — masa dukungan 25+ tahun dari rilis awal
> **Source**: SAP Support Portal — "Innovation Commitment for SAP S/4HANA until 2040" (URL sama), diakses 2026-06-02
> **Confidence**: high

> **Claim**: "Brownfield" dalam konteks SAP adalah konversi sistem secara langsung (system conversion)
> **Number/specific**: Brownfield = system conversion — sistem ECC dikonversi ke S/4HANA di tempat, mempertahankan semua data historis, konfigurasi, dan kustomisasi; disebut juga "lift and convert". Downtime tipikal: beberapa hari hingga beberapa minggu tergantung volume data.
> **Source**: SAP Community — "System Conversion to SAP S/4HANA" (https://community.sap.com/t5/technology-blog-posts-by-sap/system-conversion-to-sap-s-4hana/ba-p/14322484); SNP Group blog (https://www.snpgroup.com/en/resources/blog/greenfield-brownfield-bluefield/), diakses 2026-06-02
> **Confidence**: high

> **Claim**: "Greenfield" dalam konteks SAP adalah implementasi baru dari nol (new implementation)
> **Number/specific**: Greenfield = new implementation — SAP S/4HANA diimplementasikan dari awal, proses bisnis didesain ulang menggunakan SAP Best Practices, tidak ada data lama yang dimigrasikan secara otomatis (hanya data master/opening balances yang dipilih); biasanya menggunakan GROW with SAP untuk public edition atau RISE with SAP private edition.
> **Source**: SNP Group blog (URL sama di atas); SAPInsider (https://sapinsider.org/map/is-bluefield-the-goldilocks-of-s-4hana-implementation-strategies-snp-says-it-depends/), diakses 2026-06-02
> **Confidence**: high

> **Claim**: "Bluefield" / Selective Data Transition adalah pendekatan hybrid yang memilih data dan proses secara selektif
> **Number/specific**: Selective Data Transition (SDT) — istilah resmi SAP — memungkinkan migrasi selektif: hanya data, proses, dan kustomisasi yang relevan yang dibawa ke S/4HANA baru; sistem lama bisa tetap berjalan selama cutover (mengurangi risiko downtime). "BLUEFIELD®" adalah trademark terdaftar SNP Group yang dipopulerkan sejak akhir 2010-an melalui platform CrystalBridge.
> **Source**: SNP Group blog (URL di atas); IgniteSAP (https://ignitesap.com/brownfield-greenfield-and-bluefield-sap-programs/); SAPInsider (URL di atas), diakses 2026-06-02
> **Confidence**: high

> **Claim**: BLUEFIELD® adalah trademark SNP Group, bukan istilah resmi SAP
> **Number/specific**: BLUEFIELD® adalah trademark terdaftar SNP Group (diciptakan akhir 2010-an). SAP menggunakan istilah resmi "Selective Data Transition" (SDT) dalam dokumentasi resminya. Keduanya merujuk pada konsep yang sama tetapi berasal dari entitas berbeda.
> **Source**: SNP Group blog (https://www.snpgroup.com/en/resources/blog/greenfield-brownfield-bluefield/); SAPInsider (URL di atas), diakses 2026-06-02
> **Confidence**: high

> **Claim**: Distribusi adopsi pendekatan migrasi SAP S/4HANA secara global
> **Number/specific**: ISG 2026 research: Selective Data Transition/bluefield ~48%, brownfield (system conversion) 34%, greenfield (new implementation) 18%
> **Source**: ISG 2026 research, dikutip dalam SoftwareSeni blog (https://www.softwareseni.com/brownfield-greenfield-or-bluefield-choosing-the-right-sap-migration-path-with-the-data/) dan intelliswat.com; diakses 2026-06-02
> **Confidence**: medium — angka berasal dari ISG 2026 research yang dikutip oleh sumber ketiga (bukan langsung dari laporan ISG); writer harus menyebut sumber sebagai "penelitian ISG 2026 yang dikutip SAPInsider/SoftwareSeni" bukan "ISG secara langsung"

> **Claim**: 60% proyek SAP S/4HANA melebihi anggaran atau jadwal
> **Number/specific**: ISG 2026: 60% proyek migrasi SAP melebihi anggaran atau waktu, terlepas dari pendekatan yang dipilih
> **Source**: ISG 2026 research, dikutip dalam intelliswat.com (https://intelliswat.com/sap-s-4hana-cloud-migration-trends-bluefield-vs-greenfield-in-2026/), diakses 2026-06-02 (dari brief strategist)
> **Confidence**: medium — sama dengan catatan di atas; angka dikutip secara tidak langsung

> **Claim**: Estimasi durasi proyek untuk masing-masing pendekatan
> **Number/specific**: LeverX estimates untuk single-country standard deployment: brownfield 6–10 bulan; bluefield/SDT 9–18 bulan; greenfield 12–18 bulan
> **Source**: Dikutip dalam ringkasan web search dari IgniteSAP/SAPInsider/SoftwareSeni (2026-06-02); tidak langsung dari LeverX
> **Confidence**: medium — kisaran ini konsisten dengan pengalaman industri yang umumnya dilaporkan, namun tidak dari sumber primer LeverX langsung

> **Claim**: RISE with SAP mendukung ketiga pendekatan migrasi pada private edition
> **Number/specific**: RISE with SAP (untuk enterprise) mendukung brownfield, greenfield, dan bluefield/SDT melalui private edition. GROW with SAP (untuk mid-market) adalah jalur greenfield ke public edition — standarisasi penuh, kustomisasi minimal.
> **Source**: SAP product pages (sap.com/products/erp/rise.html dan sap.com/products/erp/grow.html); SNP Group blog, diakses 2026-06-02
> **Confidence**: high

> **Claim**: Near-Zero Downtime (NZDT) adalah teknik delta migration yang menjaga sistem sumber tetap aktif selama konversi
> **Number/specific**: NZDT memungkinkan downtime cutover dipersingkat menjadi beberapa jam (bukan hari/minggu) dengan menjalankan konversi di background sementara sistem lama tetap beroperasi; teknik ini relevan khususnya untuk brownfield pada sistem mission-critical
> **Source**: SAP Community blog "System Conversion to SAP S/4HANA" (https://community.sap.com/t5/technology-blog-posts-by-sap/system-conversion-to-sap-s-4hana/ba-p/14322484), diakses 2026-06-02
> **Confidence**: high — konsep NZDT terdokumentasi dalam SAP Community; durasi spesifik "beberapa jam" adalah kisaran umum, bukan jaminan SAP

> **Claim**: Garuda Indonesia migrasi ke SAP Cloud ERP Private (RISE with SAP) pada 2026
> **Number/specific**: Garuda Indonesia mengimplementasikan SAP Cloud ERP Private Edition melalui RISE with SAP pada 2026
> **Source**: Sindonews/Babelinsight (dikutip dalam brief strategist, 2026-06-02); tidak dapat diverifikasi langsung dalam sesi ini
> **Confidence**: low — lihat flags

> **Claim**: Biaya extended maintenance ECC dalam konteks total
> **Number/specific**: +2% per tahun untuk 3 tahun extended maintenance (2028–2030) = total premium +6% di atas baseline; ditambah biaya opportunity (proyek yang lebih mahal jika ditunda). Beberapa sumber menyebut total premium efektif +9–12% ketika dihitung kumulatif terhadap biaya support total selama periode tersebut.
> **Source**: SAP Support Portal (konfirmasi +2%/tahun); kalkulasi 9–12% dari crowe.com/id yang dikutip brief strategist — tidak diverifikasi langsung
> **Confidence**: medium — +2%/tahun dari SAP resmi adalah high confidence; kalkulasi "+9–12% total" perlu atribusi ke sumber spesifik (Crowe) jika digunakan

---

## Solution focus + Soltius anchor (from product_matrix.md)

| Apa yang diajarkan (SAP/partner tech) | Fakta yang harus dinyatakan secara akurat | Di mana dalam artikel | Soltius service/kredensial untuk CTA |
|---|---|---|---|
| SAP ECC (Business Suite 7) | Mainstream maintenance berakhir 31 Des 2027 (EHP 6–8); extended hingga 31 Des 2030 (+2%/tahun) | H2 "SAP ECC 2027" (H2 ke-5) | — (konteks, bukan Soltius anchor) |
| SAP S/4HANA Cloud – Private Edition | Target migrasi brownfield & bluefield via RISE with SAP; mendukung kustomisasi bawaan; on-premise-to-cloud | H2 ke-1 (definisi) + H2 ke-3 (perbandingan) | — |
| SAP S/4HANA Cloud – Public Edition | Target greenfield via GROW with SAP; standarisasi penuh, kustomisasi sangat terbatas | H2 ke-1 (definisi) + H2 ke-3 (perbandingan) | — |
| RISE with SAP | Bundel cloud transformasi SAP; mendukung semua tiga pendekatan pada private edition; termasuk S/4HANA Cloud, SAP BTP, infrastruktur | H2 ke-2 (kerangka keputusan) + H2 ke-5 | — |
| GROW with SAP | Paket cloud SAP untuk greenfield mid-market ke public edition; kustomisasi minimal | H2 ke-1 + catatan H2 ke-3 | — |
| Selective Data Transition / BLUEFIELD® | Istilah SAP resmi = SDT; BLUEFIELD® = trademark SNP Group; pendekatan hybrid selektif | H2 ke-1 (definisi) + H2 ke-3 + H2 ke-4 | — |
| Near-Zero Downtime (NZDT) | Teknik konversi brownfield yang menjaga sistem live; downtime cutover dipersingkat | H2 ke-3 (risiko/kelebihan brownfield) | — |
| **Soltius Migration service + Best RISE/Cloud Partner** | SAP Platinum Partner; Best RISE Partner & Best Cloud Partner (2021); Migration service; 200+ konsultan; sejak 1998 | **Closing paragraph** (CTA utama) + satu aside di H2 ke-5 (ECC 2027) |  Migration service + "Best RISE Partner dan Best Cloud Partner" |

> Reminder: Soltius **mengimplementasikan/memigrasikan/mendukung** — tidak membangun SAP. Maks 2–3 penyebutan Soltius. Satu aside di H2 "SAP ECC 2027" (tanpa nama Soltius secara eksplisit — "mitra berpengalaman" cukup); closing CTA menyebut Soltius secara eksplisit.

---

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Support Portal — Maintenance Strategy for SAP Business Suite 7 / S/4HANA (2026)** — https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html — *what it backs*: tanggal pasti end-of-mainstream (2027) dan end-of-extended (2030), premi +2%/tahun, komitmen S/4HANA hingga 2040.

2. **SNP Group Blog — "Greenfield, Brownfield, and BLUEFIELD: The different approaches to SAP S/4HANA migration"** — https://www.snpgroup.com/en/resources/blog/greenfield-brownfield-bluefield/ — *what it backs*: definisi teknis ketiga pendekatan, status trademark BLUEFIELD®, perbedaan SDT vs brownfield konvensional.

3. **SAPInsider — "Is Bluefield the Goldilocks of S/4HANA implementation strategies?" (2025/2026)** — https://sapinsider.org/map/is-bluefield-the-goldilocks-of-s-4hana-implementation-strategies-snp-says-it-depends/ — *what it backs*: distribusi adopsi bluefield/SDT vs brownfield vs greenfield secara industri; diskusi kapan bluefield bukan pilihan terbaik.

4. **SAP Community — "System Conversion to SAP S/4HANA"** — https://community.sap.com/t5/technology-blog-posts-by-sap/system-conversion-to-sap-s-4hana/ba-p/14322484 — *what it backs*: teknis brownfield/system conversion termasuk Near-Zero Downtime (NZDT).

5. **SAP Community — "Maintenance Timelines for SAP ERP 6.0"** — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/maintenance-timelines-for-sap-erp-6-0/ba-p/13524564 — *what it backs*: timeline detail per enhancement package level.

---

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa perbedaan brownfield, greenfield, dan bluefield dalam migrasi SAP?
Brownfield (atau *system conversion*) mengonversi sistem SAP ECC yang ada secara langsung ke S/4HANA — semua data historis dan konfigurasi dipertahankan. Greenfield (*new implementation*) membangun S/4HANA dari nol dengan proses bisnis yang distandarkan ulang. Bluefield atau *Selective Data Transition* (SDT) adalah pendekatan hybrid: hanya data, proses, dan kustomisasi yang masih relevan yang dipindahkan ke sistem baru — memberikan fleksibilitas antara kecepatan brownfield dan kebersihan greenfield.

### Pendekatan migrasi mana yang paling banyak dipakai saat ini?
Berdasarkan penelitian ISG 2026, Selective Data Transition (bluefield) menjadi pendekatan terpopuler dengan sekitar 48% proyek SAP S/4HANA global. Brownfield dipilih oleh sekitar 34% perusahaan, sementara greenfield sekitar 18%. Tren ini mencerminkan kenyataan bahwa sebagian besar perusahaan memiliki data transaksi berharga yang sayang untuk dibuang, namun tetap ingin memanfaatkan peluang harmonisasi proses.

### Apakah brownfield bisa mempertahankan semua kustomisasi ECC?
Brownfield mempertahankan semua konfigurasi dan data, termasuk kustomisasi — tetapi ini sekaligus risikonya. Kode ABAP kustom yang berjalan di ECC tidak selalu kompatibel dengan S/4HANA; perlu dilakukan *custom code analysis* sebelum konversi. Kustomisasi yang bergantung pada tabel atau fungsi yang dihapus di S/4HANA harus diremediasi. SAP menyediakan alat seperti *Simplification Item Check* dan *Custom Code Migration App* untuk memetakan gap ini sebelum proyek dimulai.

### Berapa lama proses greenfield dibanding brownfield?
Untuk deployment satu negara dengan skala standar, brownfield umumnya memakan waktu **6–10 bulan**, greenfield **12–18 bulan**, dan bluefield/SDT berada di tengah, sekitar **9–18 bulan** tergantung volume data dan kompleksitas seleksi. Greenfield lebih panjang karena mencakup redesain proses bisnis dari awal. Perbedaan ini harus dipertimbangkan bersama tenggat SAP ECC 2027 — proyek 12–18 bulan berarti perencanaan harus dimulai segera jika ingin selesai sebelum mainstream support berakhir.

### Apa itu Selective Data Transition dan bedanya dengan BLUEFIELD®?
*Selective Data Transition* (SDT) adalah istilah resmi SAP untuk pendekatan migrasi hybrid yang memindahkan hanya subset data dan proses yang dipilih dari ECC ke S/4HANA. BLUEFIELD® adalah merek dagang terdaftar milik SNP Group — perusahaan spesialis migrasi SAP asal Jerman — yang mempopulerkan konsep ini melalui platform CrystalBridge-nya sejak akhir 2010-an. Secara teknis keduanya merujuk konsep yang sama; dalam artikel dan diskusi bisnis, kedua istilah sering digunakan bergantian, namun jika merujuk ke implementasi teknis SNP, gunakan BLUEFIELD®.

### Apakah harus memilih satu pendekatan saja, atau bisa kombinasi (hybrid)?
Dalam praktik, banyak perusahaan besar menggunakan kombinasi: misalnya, entitas bisnis tertentu (anak perusahaan baru atau divisi dengan proses lebih standar) dimigrasi greenfield, sementara inti bisnis lama dimigrasi brownfield atau bluefield. Pendekatan ini membutuhkan governance yang lebih ketat dan biasanya lebih mahal, namun memungkinkan prioritisasi berdasarkan risiko dan kesiapan. Penting: kombinasi pendekatan ini perlu direncanakan sejak fase *ERP Strategy* — bukan sebagai keputusan ad-hoc di tengah proyek.

### Kapan waktu terbaik untuk memulai perencanaan migrasi ERP ke cloud?
Segera — terutama bagi pengguna SAP ECC Enhancement Package 6–8. Mainstream maintenance berakhir 31 Desember 2027, dan proyek migrasi end-to-end rata-rata membutuhkan 12–18 bulan. Artinya, perusahaan yang belum memulai *assessment* dan pemilihan jalur migrasi pada pertengahan 2026 berisiko tidak selesai sebelum 2027, dan harus membayar extended maintenance (+2%/tahun) sambil menyelesaikan transisi. Memulai lebih awal juga memberi ruang untuk pilot, remediasi kode kustom, dan change management yang memadai.

---

## Data tables for the writer

### Tabel 1: Perbandingan Tiga Pendekatan Migrasi SAP S/4HANA

| Aspek | Brownfield (System Conversion) | Greenfield (New Implementation) | Bluefield / SDT (Selective Data Transition) |
|---|---|---|---|
| **Apa yang dibawa** | Semua data + konfigurasi + kustomisasi | Hanya data master + saldo awal (pilihan) | Data & proses yang dipilih secara selektif |
| **Apa yang dibangun ulang** | Kode kustom yang tidak kompatibel diremediasi | Semua proses bisnis didesain ulang | Proses yang tidak relevan dihilangkan; proses baru bisa ditambahkan |
| **Downtime tipikal** | Beberapa hari – beberapa minggu (NZDT bisa mempersingkat) | Cutover lebih terencana (sistem baru); bisa paralel run | Variabel; bisa lebih singkat karena sistem lama tetap berjalan |
| **Durasi proyek** | 6–10 bulan | 12–18 bulan | 9–18 bulan |
| **Kompleksitas teknis** | Tinggi (custom code analysis wajib) | Sedang (proses redesign kompleks secara bisnis) | Tinggi (seleksi data membutuhkan governance ketat) |
| **Biaya relatif** | Lebih rendah di awal | Lebih tinggi (redesain, training ulang) | Sedang–tinggi (tools SDT + seleksi) |
| **Risiko bisnis** | Membawa "technical debt" ECC jika tidak diremediasi | Disruption bisnis besar selama implementasi | Risiko sedang jika seleksi tidak terencana |
| **Cocok untuk** | Sistem ECC dengan kustomisasi tinggi + data historis wajib | Perusahaan yang ingin "clean slate", proses sangat berubah | Sistem >10 tahun dengan data berharga tapi proses perlu diharmonisasi |
| **Jalur SAP** | RISE with SAP (Private Edition) | RISE with SAP (Private) atau GROW with SAP (Public) | RISE with SAP (Private Edition) via tools SDT |
| **Adopsi global (ISG 2026)** | ~34% | ~18% | ~48% |

### Tabel 2: Matriks Keputusan Jalur Migrasi (4 Variabel)

| Kondisi Bisnis | Jika kondisi ini... | Pertimbangkan... |
|---|---|---|
| **Level kustomisasi ECC** | Sangat tinggi (>30% proses dikustomisasi) | Brownfield (pertahankan) atau Bluefield (seleksi kustom bernilai) |
| | Rendah–sedang (proses standar SAP sudah cukup) | Greenfield (mulai bersih) |
| **Usia & volume data** | Data transaksi >10 tahun, audit trail wajib | Brownfield atau Bluefield (jaga data historis) |
| | Perusahaan baru / divisi baru / data tidak kritikal | Greenfield |
| **Toleransi downtime** | Sistem 24/7, zero-tolerance downtime | Brownfield + NZDT atau Bluefield (sistem lama tetap berjalan) |
| | Bisa downtime terencana beberapa minggu | Semua opsi tersedia |
| **Anggaran & timeline** | Anggaran terbatas, ingin selesai cepat (<12 bulan) | Brownfield (jika data bersih) |
| | Ingin transformasi proses besar, anggaran memadai | Greenfield |
| | Ingin selektivitas + modernisasi, timeline fleksibel | Bluefield/SDT |

### Tabel 3: Timeline Tenggat SAP ECC

| Tanggal | Event |
|---|---|
| 31 Desember 2025 | Mainstream maintenance berakhir untuk EHP 0–5 |
| 31 Desember 2027 | Mainstream maintenance berakhir untuk EHP 6–8 (mayoritas instalasi) |
| 1 Januari 2028 | Extended maintenance mulai (+2% premi/tahun) — opt-in |
| 31 Desember 2030 | Extended maintenance berakhir |
| Setelah 2030 | Hanya "customer-specific maintenance" (tidak ada SLA standar) |
| Hingga 2040 | SAP S/4HANA: komitmen penuh mainstream support |

---

## Edge cases & nuance

- **"Bluefield selalu lebih baik" adalah mitos.** Jika volume data kecil, proses bisnis sudah sangat standar, atau anggaran sangat terbatas, biaya tambahan tools SDT (CrystalBridge/SAP tooling) bisa tidak sepadan. Greenfield menjadi lebih efisien ketika tidak ada data historis yang benar-benar "wajib" dibawa.
- **Brownfield bukan "pilihan mudah".** Custom code analysis bisa mengungkap ratusan hingga ribuan ABAP programs yang perlu diremediasi. Tanpa remediasi yang tepat, brownfield justru membawa technical debt ECC ke dalam S/4HANA — mengalahkan tujuan migrasi.
- **GROW with SAP hanya untuk greenfield ke public edition.** Jika perusahaan memilih GROW with SAP, mereka harus menerima standarisasi proses penuh — hampir tidak ada kustomisasi. Ini cocok untuk mid-market atau divisi baru, bukan untuk enterprise dengan proses sangat spesifik-industri.
- **Hybrid bisa berakhir menjadi "yang terburuk dari dua dunia"** jika tidak dikelola dengan governance yang ketat: kompleksitas brownfield + biaya greenfield.
- **ISG 2026: 60% proyek over-budget.** Ini bukan argumen untuk menghindari migrasi, melainkan argumen untuk memilih mitra berpengalaman dan melakukan due diligence fase assessment sebelum komit ke pendekatan tertentu.
- **Garuda Indonesia sebagai kasus**: perlu diverifikasi apakah pendekatan migrasi yang dipakai adalah brownfield/private edition — brief menyebutkan "RISE with SAP" tetapi tidak spesifik approach-nya. Jangan klaim brownfield jika sumber tidak menyebutkannya secara eksplisit.
- **NZDT bukan jaminan zero downtime.** Near-Zero Downtime mengurangi window downtime secara signifikan, tetapi cutover window tetap ada (biasanya beberapa jam). Penyebutan harus hati-hati: "meminimalkan downtime" bukan "tanpa downtime".

---

## Flags (open factual risk)

- ⚠️ **Garuda Indonesia case study**: Brief menyebut "Garuda Indonesia migrasi ke SAP Cloud ERP Private (RISE with SAP) 2026" dengan sumber Sindonews/Babelinsight. Tidak dapat diverifikasi langsung dalam sesi ini. Pendekatan migrasi yang dipakai (brownfield/greenfield/bluefield) tidak disebutkan dalam brief. **Rekomendasi**: writer menyebut kasus Garuda hanya sebagai contoh adopsi RISE with SAP di Indonesia (tanpa mengklaim pendekatan teknis spesifik), dan atribusi ke sumber Sindonews/Babelinsight. Jika tidak bisa dikonfirmasi, drop ke catatan kaki atau ganti dengan kasus yang lebih terverifikasi.

- ⚠️ **Angka adopsi ISG 2026 (48%/34%/18%) dan 60% over-budget**: Dikutip secara tidak langsung melalui sumber ketiga (SoftwareSeni, intelliswat.com) — bukan langsung dari laporan ISG. **Rekomendasi**: writer atribusi sebagai "berdasarkan penelitian ISG yang dikutip dalam [sumber]" dan tidak mempresentasikan sebagai data ISG langsung. Jika tersedia laporan ISG resmi, ganti dengan kutipan langsung.

- ⚠️ **Kalkulasi "+9–12% total premium" extended maintenance**: Angka ini dari crowe.com/id yang dikutip dalam brief strategist — tidak diverifikasi langsung. SAP resmi hanya menyebut "+2 percentage point per tahun". Kalkulasi 9–12% total mungkin memperhitungkan faktor lain (compound atau baseline yang berbeda). **Rekomendasi**: writer hanya mengkutip "+2%/tahun" dari SAP resmi; jika ingin menyebut "total hingga +9–12%", atribusi ke Crowe Indonesia secara eksplisit.

- ⚠️ **Durasi proyek (brownfield 6–10 bln, greenfield 12–18 bln, bluefield 9–18 bln)**: Kisaran ini umum di industri dan dikutip dari LeverX/SAPInsider via ringkasan pencarian — bukan dari sumber primer. **Rekomendasi**: writer menggunakan kisaran ini dengan framing "umumnya berkisar" atau "berdasarkan pengalaman industri" tanpa mengklaim angka pasti. Soltius (dari perspektif pengalaman lapangan) bisa dipersonalisasi sebagai framing alternatif.

---

## Definition snippet draft (40–60 words, Bahasa Indonesia)

> Migrasi ERP ke cloud mengacu pada proses memindahkan sistem ERP on-premises — seperti SAP ECC — ke platform cloud, umumnya melalui tiga pendekatan: *brownfield* (konversi langsung yang mempertahankan data dan konfigurasi), *greenfield* (implementasi baru dari nol), atau *Selective Data Transition* / bluefield (migrasi selektif yang menggabungkan kelebihan keduanya). Mainstream maintenance SAP ECC berakhir 31 Desember 2027.

*(55 kata — dalam rentang target)*

---

## Notes for image-planner

- **Concept 1 — Diagram proses tiga jalur migrasi (flowchart)**: Tiga "jalur" paralel dari sumber yang sama (kotak "SAP ECC On-Premises") menuju ke tujuan yang sama ("SAP S/4HANA Cloud"), dengan label di setiap jalur (brownfield/greenfield/bluefield) dan ikon yang membedakan apa yang "dibawa" vs "dibangun ulang". Bisa berupa infografis horizontal atau vertikal.

- **Concept 2 — Matriks keputusan visual**: Tabel 2×4 atau radar chart yang menggambarkan empat variabel keputusan (level kustomisasi, volume data, toleransi downtime, anggaran) dengan warna berbeda untuk masing-masing pendekatan — membantu pembaca "melihat" posisi bisnis mereka di matriks.

- **Concept 3 — Timeline tenggat SAP ECC**: Garis waktu horizontal dari 2025 hingga 2040, dengan marker merah di 2027 (end mainstream) dan 2030 (end extended), zona oranye untuk extended maintenance, dan zona hijau untuk S/4HANA support. Visualisasi "jam yang berdetak" untuk urgensi bisnis.
