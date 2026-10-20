---
brief_id: "warehouse-management-system-02"
researcher_run_date: "2026-09-17"
sources_cited: 11
flags: 6
---

# Research Dossier: KPI Gudang yang Menggerakkan Keputusan — Dari Data WMS ke Dashboard

## TL;DR for the writer

- **Angle inti**: bukan "daftar KPI sebanyak mungkin" (SERP sudah penuh listicle 30–38 metrik), tetapi **kurasi 6–8 KPI yang menggerakkan keputusan** + jembatan teknis dari data WMS ke lapisan BI/dashboard. Pembeda tegas: **vanity vs actionable metrics**.
- **Peta SAP terverifikasi (aman ditulis)**: sumber data operasional = **SAP Extended Warehouse Management (EWM)** (embedded di S/4HANA); lapisan dashboard = **SAP Analytics Cloud (SAC)**. SAP punya konten siap-pakai **"Warehouse Dashboard for Daily Operation"** (story SAC 3 halaman, KPI inbound & outbound) dan **embedded analytics** berbasis Fiori. Ada juga **SAP Warehouse Insights** sebagai opsi cloud. Semua terkonfirmasi sumber SAP.
- **Benchmark** (pick accuracy 99,9%; dock-to-stock; akurasi inventaris 99%+ vs ~95% manual; on-time shipment 98%+) **punya dukungan sumber industri**, TAPI **dock-to-stock <2 jam kontroversial** — WERC DC Measures (otoritas benchmarking gudang) menaruh best-in-class di bawah ~3,5 jam. Tulis sebagai rentang dengan atribusi, bukan angka mutlak.
- **Jangan mengarang fitur SAC/embedded analytics**. Embedded analytics S/4HANA hebat untuk data transaksional real-time TAPI punya batas: tidak bisa query lintas sistem SAP/non-SAP, tanpa planning engine, tanpa write-back, tanpa data warehouse historis — itu justru alasan naik ke SAC/Datasphere.
- **Soltius anchor (closing)**: **Data and AI Consulting + Analytics (implementasi SAP Analytics Cloud)** — "mengubah data operasional gudang jadi dashboard KPI yang dipakai manajemen". Framing: Soltius **mengimplementasikan/menghubungkan**, bukan membuat SAP. Maks 2–3 sebutan.

---

## Core facts (verified)

> **Claim**: SAP Extended Warehouse Management (EWM) diakui sebagai Leader dalam Gartner Magic Quadrant untuk Warehouse Management Systems.
> **Number/specific**: SAP dinobatkan Leader Gartner Magic Quadrant WMS (diklaim SAP pada 2024 dan kembali 2026).
> **Source**: SAP — news.sap.com, "SAP Named a Leader in the 2026 Gartner Magic Quadrant for WMS" (`https://news.sap.com/2026/05/sap-leader-2026-gartner-magic-quadrant-warehouse-management-systems/`), diakses 2026-09-17.
> **Confidence**: high

> **Claim**: SAP menawarkan beberapa opsi untuk memantau KPI gudang di lingkungan S/4HANA/EWM.
> **Number/specific**: Tiga jalur utama — (1) kapabilitas KPI/monitoring bawaan EWM lewat aplikasi Fiori (mis. Warehouse Management Monitor), (2) **SAP Warehouse Insights** (opsi cloud), dan (3) **SAP Analytics Cloud (SAC)** untuk dashboard KPI yang dapat dikonfigurasi.
> **Source**: SAP Community (Enterprise Architecture KB) — "SAP S/4HANA Extended Warehouse Management KPI Options" (`https://community.sap.com/t5/enterprise-architecture-knowledge-base/sap-s-4-hana-extended-warehouse-management-key-performance-indicator-kpi/ta-p/14022612`), diakses 2026-09-17.
> **Confidence**: high

> **Claim**: SAP menyediakan konten dashboard gudang siap-pakai di SAP Analytics Cloud.
> **Number/specific**: **"Warehouse Dashboard for Daily Operation"** adalah story SAC dengan **3 halaman** untuk menganalisis KPI operasi gudang, mencakup proses **inbound dan outbound**.
> **Source**: SAP Community / SAP Help (embedded analytics S/4HANA + SAC) — hasil pencarian SAP-official, diakses 2026-09-17.
> **Confidence**: high

> **Claim**: SAP Analytics Cloud dapat mengambil data warehouse/EWM secara real-time untuk dashboard.
> **Number/specific**: SAC terhubung ke data EWM/S/4HANA lewat **live connection atau import**, ditopang BI extractors dan API; KPI serta dashboard dapat dikonfigurasi sesuai kebutuhan dan digabung dengan sumber data lain.
> **Source**: SAP Community — "Embedded Analytics: SAP Analytics Cloud in SAP S/4HANA Cloud (Link Collection)" & KB KPI Options (`https://community.sap.com/t5/technology-blog-posts-by-sap/embedded-analytics-sap-analytics-cloud-in-sap-s-4hana-cloud-the-link/ba-p/13448486`), diakses 2026-09-17.
> **Confidence**: high

> **Claim**: Embedded analytics S/4HANA berjalan di atas data transaksional live (tanpa ekstraksi/batch semalam).
> **Number/specific**: Memanfaatkan in-memory SAP HANA; analisis dilakukan langsung pada data operasional yang selalu mutakhir, tanpa menunggu batch run atau impor data.
> **Source**: SAP Community — "SAP S/4HANA Embedded Analytics: An Overview" (`https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-members/sap-s-4hana-embedded-analytics-an-overview/ba-p/13530854`), diakses 2026-09-17.
> **Confidence**: high

> **Claim**: Embedded analytics S/4HANA punya batasan yang membuat organisasi tetap butuh SAC/data warehouse untuk analitik lintas sumber.
> **Number/specific**: Embedded analytics **tidak bisa query data dari sistem SAP lain atau aplikasi non-SAP**, **tanpa planning engine**, **tanpa write-back**, dan **tanpa data warehouse historis** — batas ini yang membuat SAC/Datasphere dibutuhkan untuk konsolidasi & perencanaan.
> **Source**: SAP embedded-analytics guidance (SAP Community / SAPinsider), diakses 2026-09-17.
> **Confidence**: high (framing sebagai "kapan naik ke SAC", bukan kekurangan produk)

> **Claim**: Best-in-class pick accuracy gudang mencapai ~99,9%.
> **Number/specific**: 99,9% pick accuracy dipakai sebagai target best-in-class oleh sumber benchmarking KPI gudang 2026.
> **Source**: Hopstack — "Top 38 Warehouse KPIs & Metrics 2026" (`https://www.hopstack.io/blog/warehouse-metrics-kpis`); Open Sky Group — "Warehouse KPIs 2026" (`https://openskygroup.com/warehouse-kpis/`), diakses 2026-09-17.
> **Confidence**: medium (sumber vendor/konsultansi kredibel, bukan lembaga standar; sajikan sebagai benchmark industri)

> **Claim**: Akurasi inventaris meningkat signifikan dengan WMS dibanding proses manual.
> **Number/specific**: Target 99%+ dengan WMS vs ~95% pada sistem manual.
> **Source**: Hopstack / Open Sky Group (2026), diakses 2026-09-17.
> **Confidence**: medium (benchmark industri; bukan angka lembaga statistik)

> **Claim**: Best-in-class on-time shipment mencapai 98%+.
> **Number/specific**: Kuartil teratas 98%+; median industri ~92–95%.
> **Source**: sumber benchmarking KPI gudang 2026 (Hopstack; Extensiv — "3PL Fulfillment KPIs: Formulas & Benchmarks", `https://www.extensiv.com/blog/3pl-fulfillment-kpis-formulas-benchmarks`), diakses 2026-09-17.
> **Confidence**: medium

> **Claim**: Benchmark dock-to-stock "best-in-class" berbeda antar sumber.
> **Number/specific**: Sebagian sumber vendor menaruh <2 jam; **WERC DC Measures Report 2025** (otoritas benchmarking gudang) menaruh best-in-class **di bawah ~3,5 jam**.
> **Source**: Hopstack (2026) vs WERC DC Measures 2025 (dirujuk via hasil pencarian benchmarking), diakses 2026-09-17.
> **Confidence**: medium (kontras sumber; WAJIB sajikan sebagai rentang dengan atribusi — lihat Flags)

> **Claim**: Sektor pergudangan & logistik Indonesia tumbuh sebagai konteks permintaan analitik gudang.
> **Number/specific**: BPS menerbitkan "Statistik Pergudangan, Ekspedisi, dan Kurir 2024" yang mendokumentasikan skala/pertumbuhan sektor; dorongan e-commerce & distribusi multi-cabang.
> **Source**: BPS — Statistik Pergudangan, Ekspedisi, dan Kurir 2024 (`https://www.bps.go.id/en/publication/2025/02/11/ccdd2be371e2d7b2a325b8ab/statistik-pergudangan--ekspedisi--dan-kurir-2024.html`), diakses 2026-09-17.
> **Confidence**: medium (gunakan sebagai konteks makro, bukan angka spesifik tanpa cek halaman)

> **Claim**: SAP Fieldglass adalah vendor management system untuk tenaga kerja eksternal/jasa; SAP Ariba untuk sourcing & procurement pemasok (relevan untuk internal-link cousin "sistem manajemen vendor").
> **Number/specific**: Fieldglass = VMS berbasis cloud untuk contingent workforce & services procurement; Ariba = sourcing, supplier lifecycle, purchase-to-pay; keduanya sering diintegrasikan.
> **Source**: SAP Help — "SAP Fieldglass and SAP Ariba Integration" (`https://help.sap.com/doc/b9285ee937f949c0a4ef80f41e379b62/cloud/en-US/SAPFieldglassandSAPAribaIntegrationBusinessSynopsis.pdf`), diakses 2026-09-17.
> **Confidence**: high (hanya untuk konteks anchor link cousin; bukan fokus artikel)

**Definisi KPI (baku, untuk tabel & isi):**
- **Dock-to-stock time** — waktu dari barang tiba di dok penerimaan sampai **selesai di-putaway dan tercatat available (siap dialokasikan/dipetik)** di sistem. Kunci: berakhir saat stok *system-available*, bukan sekadar fisik masuk gedung.
- **Order cycle time** — waktu total dari **order diterima** hingga **order dikirim** (warehouse/internal order cycle time); versi end-to-end sampai barang diterima pelanggan.
- **Inventory accuracy** — persentase kecocokan catatan sistem vs hitungan fisik (per lokasi/SKU), umumnya dipantau lewat cycle counting.
- **Pick accuracy** — (total pick − mispick) / total pick × 100, atau order dipetik benar / total order.
- **On-time shipment** — persentase order yang dikirim pada/atau sebelum tanggal kirim terjadwal.
- **Units per labor hour** — unit diproses (terima/petik) per jam kerja.
- **Cost per order** — total biaya operasi gudang / jumlah order pada periode.
- **Space utilization** — persentase kapasitas simpan terpakai (catatan: 100% BUKAN target; ~85% sering disebut sehat untuk kelancaran arus).

---

## Solution focus + Soltius anchor (from product_matrix.md + brief)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP EWM** sebagai sumber data operasional gudang | Embedded di S/4HANA; menghasilkan timestamp transaksi, log aktivitas, titik verifikasi; punya KPI/monitoring bawaan lewat Fiori (Warehouse Management Monitor) | H2 #4 (dari WMS ke dashboard) | — |
| **SAP Analytics Cloud (SAC)** sebagai lapisan BI/dashboard | Story siap-pakai "Warehouse Dashboard for Daily Operation" (3 halaman, inbound+outbound); live/import connection ke S/4HANA; dashboard KPI konfigurable; augmented analytics & planning | H2 #4, closing | **Data and AI Consulting + Analytics (implementasi SAP Analytics Cloud)** |
| **Embedded analytics S/4HANA** sebagai opsi real-time | Real-time atas data transaksional (HANA in-memory); batas: tak lintas sistem/non-SAP, tanpa write-back/planning/DW historis → alasan naik ke SAC | H2 #4 (aside jujur) | — |
| (Konteks cousin link) **SAP Fieldglass** = VMS tenaga kerja eksternal | Hanya untuk anchor internal-link "sistem manajemen vendor"; jangan campur ke fokus KPI gudang | inline saat menyinggung supplier scorecard | — |

Reminder: Soltius **mengimplementasikan/menghubungkan** teknologi ini — **tidak membuatnya**. Maks 2–3 sebutan Soltius; utamakan closing + satu aside mid-article (nilai KPI baru muncul saat data WMS terhubung ke lapisan analitik, bukan berhenti sebagai laporan mentah).

Anchor phrasing (pre-approved, company_profile.md): "Melalui layanan Data and AI Consulting, Soltius membantu perusahaan mengubah data operasional gudang menjadi dashboard KPI yang dipakai manajemen — menghubungkan sumber data seperti SAP EWM ke SAP Analytics Cloud."

---

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Community — SAP S/4HANA Extended Warehouse Management KPI Options (KB)** — `https://community.sap.com/t5/enterprise-architecture-knowledge-base/sap-s-4-hana-extended-warehouse-management-key-performance-indicator-kpi/ta-p/14022612` — *backs*: tiga opsi memantau KPI EWM (Fiori bawaan, SAP Warehouse Insights, SAC); dashboard SAC konfigurable.
2. **SAP news — SAP Leader Gartner Magic Quadrant WMS 2026** — `https://news.sap.com/2026/05/sap-leader-2026-gartner-magic-quadrant-warehouse-management-systems/` — *backs*: kredibilitas SAP EWM sebagai platform gudang kelas enterprise.
3. **Hopstack — Top Warehouse KPIs & Metrics 2026** — `https://www.hopstack.io/blog/warehouse-metrics-kpis` — *backs*: definisi & benchmark pick accuracy, dock-to-stock, akurasi, order cycle time (sajikan sebagai benchmark industri).
4. **BPS — Statistik Pergudangan, Ekspedisi, dan Kurir 2024** — `https://www.bps.go.id/en/publication/2025/02/11/ccdd2be371e2d7b2a325b8ab/statistik-pergudangan--ekspedisi--dan-kurir-2024.html` — *backs*: konteks pertumbuhan sektor pergudangan/logistik Indonesia.

Priority: SAP official > Gartner/IDC/Forrester > BPS/Komdigi > reputable tech press. **Utamakan link keluar ke 2 sumber SAP-official + BPS** untuk E-E-A-T; sumber vendor KPI (Hopstack/Open Sky/Extensiv) boleh dirujuk sebagai "benchmark industri" tapi jangan diperlakukan sebagai otoritas standar.

---

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu KPI gudang?
KPI gudang (warehouse key performance indicator) adalah metrik terukur yang menilai kinerja operasi gudang dari penerimaan hingga pengiriman — misalnya dock-to-stock time, akurasi inventaris, pick accuracy, dan order cycle time. KPI yang berguna bersifat *actionable*: memicu keputusan operasional konkret, bukan sekadar menampilkan volume aktivitas. Data KPI umumnya ditarik otomatis dari transaksi di warehouse management system (WMS).

### Berapa banyak KPI gudang yang idealnya dipantau?
Lebih sedikit tetapi tepat lebih baik daripada puluhan metrik sekaligus. Meski daftar industri menyebut 30–38 metrik, tim operasional yang efektif biasanya fokus pada **6–8 KPI lintas alur** (receiving, picking, shipping, ruang, biaya). Terlalu banyak KPI menimbulkan "kelumpuhan analisis" dan mengaburkan metrik yang benar-benar menggerakkan keputusan mingguan.

### Apa itu dock-to-stock time dan berapa targetnya?
Dock-to-stock time adalah waktu dari barang tiba di dok penerimaan sampai selesai di-putaway dan tercatat *available* di sistem — bukan sekadar masuk gedung. Sebagian sumber vendor menaruh best-in-class di bawah 2 jam, sementara WERC DC Measures 2025 menaruh best-in-class di bawah sekitar 3,5 jam. Perlakukan sebagai rentang, karena target realistis bergantung jenis barang dan tingkat otomasi.

### Berapa target akurasi inventaris dengan WMS?
Benchmark industri menempatkan akurasi inventaris 99% atau lebih dengan WMS, dibanding sekitar 95% pada proses manual berbasis kertas. Akurasi diukur sebagai kecocokan catatan sistem terhadap hitungan fisik per lokasi/SKU, dan dijaga lewat cycle counting. Angka tinggi ini tercapai karena WMS memverifikasi setiap transaksi (scan barcode/RFID) pada titik penerimaan, penyimpanan, dan pengambilan.

### Bagaimana cara menghitung order cycle time?
Order cycle time (versi gudang) dihitung sebagai selisih waktu antara **saat order diterima** dan **saat order dikirim**. Versi end-to-end menghitung sampai barang diterima pelanggan. Rumus praktisnya: rata-rata (timestamp shipped − timestamp order received) untuk seluruh order pada periode. WMS menyediakan timestamp ini otomatis, sehingga metrik dapat dipecah per gelombang, shift, atau tipe order.

### Apa bedanya vanity dan actionable metrics di gudang?
Vanity metrics terlihat mengesankan tetapi tidak mengarahkan tindakan — misalnya "total order diproses" tanpa konteks akurasi atau biaya. Actionable metrics langsung memicu keputusan: pick accuracy yang turun menandakan perlu audit proses; dock-to-stock yang memanjang memicu penyesuaian staf penerimaan. Aturan praktis: jika sebuah angka naik/turun tetapi tak ada yang tahu tindakan apa yang harus diambil, itu kemungkinan vanity.

### Bagaimana menghubungkan data WMS ke dashboard business intelligence?
WMS/SAP EWM menangkap timestamp transaksi, log aktivitas, dan titik verifikasi; lapisan BI seperti SAP Analytics Cloud mengagregasinya menjadi tren, alert, dan dashboard per peran. SAP bahkan menyediakan story siap-pakai "Warehouse Dashboard for Daily Operation" (KPI inbound & outbound). Koneksi bisa live atau import dari S/4HANA. Nilai KPI baru muncul saat data operasional terhubung ke lapisan analitik, bukan berhenti sebagai laporan mentah.

---

## Data tables for the writer (draft — writer refines)

### Tabel KPI: definisi, cara hitung, benchmark, sumber data di WMS

| KPI | Rumus ringkas | Benchmark industri* | Sumber datanya di WMS/EWM |
|---|---|---|---|
| Dock-to-stock time | (waktu stok available) − (waktu tiba di dok) | <2 jam (vendor) s/d <~3,5 jam (WERC 2025) | Timestamp GR & putaway confirmation |
| Inventory accuracy | catatan cocok / total catatan × 100 | 99%+ dgn WMS (vs ~95% manual) | Hasil cycle counting vs stok sistem |
| Pick accuracy | (total pick − mispick) / total pick × 100 | ~99,9% best-in-class | Konfirmasi pick + verifikasi/scan |
| Order cycle time | ø (waktu shipped − waktu order received) | tergantung model (jam–hari) | Timestamp order & shipping |
| On-time shipment | order kirim tepat waktu / total order × 100 | 98%+ best-in-class (median ~92–95%) | Tanggal kirim terjadwal vs aktual |
| Units per labor hour | unit diproses / jam kerja | rentang lebar; tergantung otomasi (lihat Flag) | Log aktivitas & RF/tugas operator |
| Cost per order | total biaya gudang / jumlah order | context-specific | Data biaya + volume order (perlu gabung finance) |
| Space utilization | kapasitas terpakai / kapasitas usable × 100 | ~85% sehat (bukan 100%) | Data bin/slot occupancy |

\*Benchmark = angka industri dari sumber vendor/konsultansi (Hopstack, Open Sky Group, Extensiv) + WERC 2025. Label sebagai *benchmark industri*, bukan janji hasil. Cek Flags untuk yang kontroversial.

### Embedded analytics vs SAP Analytics Cloud (kapan pakai apa)

| Aspek | Embedded analytics S/4HANA | SAP Analytics Cloud (SAC) |
|---|---|---|
| Data | Transaksional live (HANA in-memory), dalam sistem | Live/import; bisa gabung banyak sumber (termasuk non-SAP) |
| Kekuatan | Operasional real-time, langsung di Fiori | Dashboard konfigurable, augmented analytics, planning, predictive |
| Batas | Tak lintas sistem, tanpa write-back/planning/DW historis | Perlu koneksi/pemodelan; lisensi terpisah |
| Cocok untuk | Monitoring harian operator/supervisor | Tren, konsolidasi, dashboard manajemen lintas fungsi |

---

## Edge cases & nuance

- **"Lebih banyak KPI ≠ lebih baik."** Justru celah artikel: SERP penuh listicle 30–38 metrik. Tekankan kurasi + prioritas keputusan.
- **Mengejar satu KPI bisa merusak yang lain**: memaksa throughput naik dapat menurunkan pick accuracy; menekan dock-to-stock ekstrem bisa mengorbankan kualitas putaway. Pantau KPI berpasangan (mis. kecepatan vs akurasi).
- **Dock-to-stock panjang menciptakan "stockout semu"**: barang fisik ada di gedung tetapi belum *system-available*, sehingga tidak bisa dialokasikan ke order — akar masalah yang sering tak terlihat di laporan stok.
- **Space utilization tinggi bukan selalu bagus**: mendekati 100% menghambat arus, replenishment, dan penerimaan; ~85% sering disebut sehat.
- **Embedded analytics ≠ pengganti data warehouse**: bagus untuk operasional real-time, tetapi analitik historis lintas sumber tetap butuh SAC/Datasphere — jangan overclaim.

---

## Flags (open factual risk)

- ⚠️ **Dock-to-stock <2 jam**: kontroversial. Sumber vendor (Hopstack) menaruh <2 jam; WERC DC Measures 2025 menaruh best-in-class di bawah ~3,5 jam. → **Rekomendasi**: tulis sebagai rentang dengan atribusi ("sumber vendor <2 jam; WERC ~<3,5 jam"), jangan angka mutlak.
- ⚠️ **Units per labor hour 30–300**: angka dari brief/cache, **tidak terverifikasi** dari sumber kredibel dalam run ini; rentangnya sangat lebar dan sangat bergantung jenis operasi/otomasi. → **Rekomendasi**: sajikan sebagai ilustrasi "sangat bervariasi menurut otomasi", **jangan** dijadikan benchmark numerik keras.
- ⚠️ **Benchmark 99,9% pick accuracy / 99% inventory / 98% on-time**: bersumber dari vendor/konsultansi (bukan lembaga standar). → **Rekomendasi**: labeli konsisten sebagai "benchmark industri" dan hindari menyiratkan angka resmi/universal.
- ⚠️ **Nama fitur SAC/EWM**: "Warehouse Dashboard for Daily Operation", "SAP Warehouse Insights", "Warehouse Management Monitor" terkonfirmasi via sumber SAP, tetapi nama/scope fitur SAP berubah. → **Rekomendasi**: sebut nama penuh sekali + versi netral ("story/aplikasi SAC untuk KPI gudang"); jangan mengklaim fitur spesifik (mis. angka refresh rate) yang tak diverifikasi.
- ⚠️ **Angka BPS**: publikasi "Statistik Pergudangan, Ekspedisi, dan Kurir 2024" ada, tetapi angka spesifik belum diambil dari halaman dalam run ini. → **Rekomendasi**: gunakan sebagai konteks makro ("sektor pergudangan/logistik Indonesia tumbuh") tanpa mengutip angka presisi kecuali writer memverifikasi halaman.
- ⚠️ **SAP Fieldglass sebagai "vendor management system"**: benar untuk konteks tenaga kerja eksternal/jasa, TAPI cousin link "sistem manajemen vendor" bisa juga condong ke supplier management (Ariba). → **Rekomendasi**: untuk artikel KPI gudang ini, cukup jadikan anchor internal-link tanpa mendalami; jika menyinggung supplier scorecard, framing = "kinerja vendor inbound", bukan produk spesifik.

---

## Definition snippet draft (40–60 words)

> **KPI gudang** (warehouse key performance indicator) adalah metrik terukur yang menilai kinerja operasi gudang — dari penerimaan hingga pengiriman — seperti dock-to-stock time, akurasi inventaris, pick accuracy, dan order cycle time. KPI yang baik bersifat *actionable*: memicu keputusan operasional nyata, bukan sekadar menampilkan volume. Datanya ditarik otomatis dari transaksi di warehouse management system (WMS).
