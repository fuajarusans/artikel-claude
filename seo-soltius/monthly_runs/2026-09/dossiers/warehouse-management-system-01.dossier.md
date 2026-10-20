---
brief_id: "warehouse-management-system-01"
researcher_run_date: "2026-09-17"
sources_cited: 7
flags: 6
---

# Research Dossier: WMS untuk 3PL — Kelola Banyak Klien, Billing per Aktivitas, dan SLA dalam Satu Sistem

## TL;DR for the writer

- **Kabar baik untuk klaim inti brief**: SAP secara resmi memiliki fungsi **Warehouse Billing** yang *native* di EWM (S/4HANA) — jadi penagihan berbasis aktivitas gudang **tidak selalu butuh kustom/BRIM**. Nyatakan billing sebagai kapabilitas standar EWM, bukan sesuatu yang "hanya bisa lewat komponen tambahan". (Tetapi ada nuansa dependensi — lihat Flags.)
- **Segregasi multi-klien di EWM memakai konsep kepemilikan stok**: field *owner* dan *party entitled to dispose* memisahkan stok milik banyak klien dalam satu gudang/plant. Ini yang membuat "satu gudang, banyak perusahaan, stok tidak tercampur" bisa dilakukan tanpa membuat gudang fisik terpisah.
- **VAS (kitting, labelling, packing, assembly) adalah fitur standar EWM** — tersedia di proses *goods receipt* maupun *goods issue*, dan setiap VAS order bisa jadi baris berbiaya untuk billing.
- **Kredibilitas SAP kuat & terkini**: SAP dinobatkan **Leader di 2026 Gartner Magic Quadrant for Warehouse Management Systems** (news.sap.com, 4 Mei 2026). EWM mendukung lingkungan SAP ERP, S/4HANA, maupun non-SAP.
- **Angka pasar Indonesia yang bisa dikutip**: BPS mencatat **15.848 usaha pergudangan, ekspedisi, dan kurir** di Indonesia (Statistik Pergudangan, Ekspedisi, dan Kurir 2024).
- **Framing Soltius**: implements/migrates SAP EWM — jangan tulis "membuat". Anchor closing = Implementation + Migration (SAP EWM) sebagai **SAP Platinum Partner via United VARs**.

---

## Core facts (verified)

> **Claim**: SAP Extended Warehouse Management (EWM) mendukung skenario Logistics Service Provider (LSP)/3PL — satu operator gudang melayani banyak klien.
> **Number/specific**: Skenario LSP/3PL dibahas resmi dalam blog SAP (enterprise-resource-planning blog posts by SAP) dan berulang di SAP Community; LSP = shipper meng-outsource logistik ke pihak ketiga.
> **Source**: SAP Community — "Third Party Logistics (3PL) with S/4HANA and EWM" + "Need to understand if EWM can be used in case of 3PL scenarios" (community.sap.com), diakses 2026-09-17
> **Confidence**: high

> **Claim**: EWM memisahkan stok milik banyak klien di satu gudang lewat konsep kepemilikan stok (owner concept).
> **Number/specific**: Field *owner* dan *party entitled to dispose* pada stok EWM memungkinkan satu plant/gudang berbagi lokasi fisik namun kepemilikan stok tetap terpisah per klien; onboarding tenant baru + transparansi stok/keuangan per tenant adalah kebutuhan inti skenario LSP.
> **Source**: SAP Community (supply-chain-management Q&A + LSP Industry blog), community.sap.com, diakses 2026-09-17
> **Confidence**: high (konsep owner/party adalah bagian standar model stok EWM)

> **Claim**: EWM punya fungsi Warehouse Billing yang native untuk menagih layanan gudang secara berkala.
> **Number/specific**: Warehouse Billing mencatat kuantitas layanan gudang yang dipakai untuk dua skenario — (a) menjual layanan gudang ke pelanggan dan menagihnya periodik, (b) membeli layanan gudang dari penyedia eksternal dan membayarnya periodik. Komponennya: Snapshot management, Warehouse Billing Measurement Request Management, Warehouse Billing Measurement Management.
> **Source**: SAP Help Portal — "Warehouse Billing" (help.sap.com, S/4HANA on-premise EWM docs), diakses 2026-09-17
> **Confidence**: high

> **Claim**: Value-Added Services (VAS) adalah fitur standar EWM.
> **Number/specific**: VAS order dipakai untuk aktivitas bernilai tambah di gudang — assembly, packing, labeling, kitting — dan berlaku pada proses goods receipt maupun goods issue.
> **Source**: SAP Help Portal — "Value-Added Services (VAS)" (help.sap.com) + SAP Community VAS in EWM, diakses 2026-09-17
> **Confidence**: high

> **Claim**: SAP dinobatkan sebagai Leader dalam Gartner Magic Quadrant for Warehouse Management Systems 2026.
> **Number/specific**: Pengumuman resmi SAP tertanggal 4 Mei 2026; EWM dinilai untuk skala, integrasi, dan eksekusi di lingkungan gudang kompleks; mendukung SAP ERP, S/4HANA, dan lingkungan non-SAP.
> **Source**: SAP News — "SAP Recognized as a Leader in the 2026 Gartner Magic Quadrant for Warehouse Management Systems" (news.sap.com/2026/05/...), 2026-05-04
> **Confidence**: high untuk status Leader 2026; ⚠️ jumlah "berturut-turut" tidak pasti — lihat Flags

> **Claim**: Sektor pergudangan/ekspedisi/kurir Indonesia berskala besar dan tumbuh.
> **Number/specific**: 15.848 usaha pergudangan, ekspedisi, dan kurir di Indonesia; mayoritas usaha ekspedisi & kurir beromzet < Rp 2 miliar/tahun; hanya 1,69% beromzet > Rp 50 miliar.
> **Source**: BPS — Statistik Pergudangan, Ekspedisi, dan Kurir 2024 (bps.go.id), diakses 2026-09-17
> **Confidence**: medium-high (angka dari ringkasan publikasi BPS; writer sebut sebagai data BPS 2024)

> **Claim**: EWM tersedia dalam mode embedded (di dalam S/4HANA) dan decentralized (sistem terpisah).
> **Number/specific**: Embedded EWM berjalan di dalam stack S/4HANA; decentralized/standalone EWM dipakai untuk operasi gudang bervolume tinggi/independen — relevan bagi operator 3PL yang gudangnya harus tetap jalan lepas dari siklus ERP klien.
> **Source**: SAP product knowledge (EWM deployment models); konsisten dengan news.sap.com yang menyebut EWM mendukung SAP/non-SAP
> **Confidence**: medium-high (fakta produk EWM yang mapan; jika writer ingin menegaskan, tautkan ke help.sap.com EWM)

> **Claim**: Untuk skenario di mana eksekusi gudang di-outsource ke WMS eksternal, SAP menyediakan 3PL integration.
> **Number/specific**: SAP dipakai untuk purchasing/sales/fulfillment termasuk invoicing, sementara eksekusi & transport gudang di-outsource; komunikasi via antarmuka B2B (mis. IDoc/EDI).
> **Source**: SAP Community — "Third Party Logistics Integration (3PL)" (enterprise-resource-planning blog by SAP) + SAP-PRESS blog, diakses 2026-09-17
> **Confidence**: high

> **Claim**: ASN (Advanced Shipping Notification) adalah bagian standar proses inbound EWM.
> **Number/specific**: ASN memberi tahu gudang tentang kedatangan barang sebelum tiba, mendukung appointment/dock scheduling dan perencanaan putaway — kritis untuk gudang multi-klien bervolume tinggi.
> **Source**: SAP EWM inbound documentation (help.sap.com), konsep mapan; dikonfirmasi lewat SAP Community 3PL/EWM diskusi
> **Confidence**: high

> **Claim**: Billing gudang manual memakan waktu dan rawan kebocoran pendapatan pada operator multi-klien.
> **Number/specific**: SAP Community secara eksplisit menyatakan billing 3PL "becomes a challenging process, as manually tracking transactions and compiling them into invoices can take days" — motivasi utama billing engine otomatis.
> **Source**: SAP Community (SCM blog posts — warehouse billing / VAS), diakses 2026-09-17
> **Confidence**: high (klaim kualitatif, bukan angka)

> **Claim**: Model bisnis 3PL/LSP berbeda dari perusahaan yang mengelola gudang sendiri — kebutuhannya adalah onboarding tenant, transparansi per tenant, dan efisiensi per proses.
> **Number/specific**: Kebutuhan industri LSP menurut SAP: easy onboarding of new tenants, transparency in stock & financial reporting for every tenant, efficiency with per-tenant process adoption.
> **Source**: SAP Community — Logistics Service Provider (LSP) Industry blog, diakses 2026-09-17
> **Confidence**: high

> **Claim**: Warehouse Billing EWM bekerja bersama pengukuran layanan dan (dalam dokumentasi SAP) perjanjian di Transportation Management.
> **Number/specific**: SAP Help menyebut kuantitas layanan gudang dicatat "for services agreed upon in an agreement in Transportation Management" lalu ditagih periodik — artinya billing memakai measurement service + agreement, bukan sekadar rekap manual.
> **Source**: SAP Help Portal — Warehouse Billing (help.sap.com), diakses 2026-09-17
> **Confidence**: high untuk keberadaan fitur; ⚠️ nuansa dependensi — lihat Flags

> **Claim**: Basis tarif activity-based billing gudang (praktik industri 3PL).
> **Number/specific**: Umumnya empat basis: (1) *storage* — per posisi pallet/volume/hari, (2) *handling/transaksi* — per baris inbound/outbound, (3) *labor* — per jam kerja, (4) *VAS* — per kitting/labelling/repacking. WMS mencatat tiap aktivitas berbiaya lalu mengagregasinya jadi invoice.
> **Source**: Praktik industri 3PL (bukan angka dari satu sumber tunggal); dipetakan ke fitur EWM (Warehouse Billing measurement + VAS orders)
> **Confidence**: medium (framing praktik umum; angka tarif WAJIB dilabeli ilustrasi)

---

## Solution focus + Soltius anchor (from brief + product_matrix.md rules)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Extended Warehouse Management (EWM)** untuk skenario LSP/3PL | Owner/party concept memisahkan stok multi-klien; VAS native (kitting/labelling); embedded vs decentralized deployment | H2 #1–#2 (definisi + segregasi) | — |
| **Warehouse Billing (native EWM)** | Mencatat kuantitas layanan gudang → invoice periodik; measurement request/management + snapshot | H2 #3 (activity-based billing) | — |
| **Kapabilitas "WMS layak-3PL"** (multi-client, billing engine, portal, SLA/KPI, ASN, VAS) — vendor-neutral | Petakan tiap kapabilitas → fitur EWM; kolom "kenapa modul bawaan ERP gagal" | H2 #4 (tabel) | — |
| **Soltius: Implementation + Migration (SAP EWM)** | Merancang skenario LSP/3PL di EWM (party/owner, billing, VAS) & menghubungkannya ke ERP; **SAP Platinum Partner via United VARs**; pengalaman lintas industri distribusi/logistik | closing (CTA) + 1 aside mid-artikel (desain party/owner sejak awal menentukan otomatisasi billing & SLA) | **Implementation + Migration + SAP Platinum Partner via United VARs** |

Reminder: Soltius **mengimplementasikan/memigrasikan/mendukung** SAP EWM — **bukan membuatnya**. Maks 2–3 self-mention (1 aside + closing + soft CTA website).

### Catatan pemetaan untuk cousin links (dari brief)
- **Cousin 1 — `sistem-manajemen-vendor`** (anchor: *sistem manajemen vendor*): 3PL adalah vendor logistik yang dikelola pihak shipper. Pemetaan SAP untuk topik vendor management: **SAP Ariba** (source-to-pay / supplier & procurement management) dan **SAP Fieldglass** (external workforce & services procurement / VMS untuk tenaga kerja & jasa kontingen). Untuk konteks 3PL, jembatannya = tata kelola vendor/penyedia layanan (sisi Ariba). *Confirmed mapping* (Ariba/Fieldglass) — writer cukup pakai anchor natural, tak perlu mengajarkan produk vendor-management di artikel ini.
- **Cousin 2 — `business-intelligence`** (anchor: *business intelligence*): portal klien, SLA, dan billing berbasis aktivitas semuanya bergantung pada pelaporan/dashboard → jembatan alami ke BI (**SAP Analytics Cloud**). *Confirmed mapping.*
- (Untuk batch: **Low-Code Platform → SAP Build (Build Apps / Build Process Automation / Build Work Zone) di atas SAP BTP** — mapping confirmed, tetapi BUKAN cousin di brief ini; jangan dipaksakan masuk.)

---

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP News, 4 Mei 2026** — https://news.sap.com/2026/05/sap-leader-2026-gartner-magic-quadrant-warehouse-management-systems/ — *what it backs*: SAP EWM Leader di 2026 Gartner Magic Quadrant for Warehouse Management Systems; dukungan lingkungan SAP/S/4HANA/non-SAP. (Sumber otoritas tertinggi untuk kredibilitas EWM.)
2. **BPS — Statistik Pergudangan, Ekspedisi, dan Kurir 2024** — https://www.bps.go.id/id/publication/2025/02/11/ccdd2be371e2d7b2a325b8ab/statistik-pergudangan--ekspedisi--dan-kurir-2024.html — *what it backs*: 15.848 usaha pergudangan/ekspedisi/kurir di Indonesia; struktur omzet sektor (konteks pasar 3PL Indonesia).
3. **SAP Help Portal — Warehouse Billing (EWM)** — help.sap.com (S/4HANA on-premise EWM) — *what it backs*: billing layanan gudang native di EWM (measurement request/management, snapshot).
4. **SAP Help Portal — Value-Added Services (VAS) in EWM** — help.sap.com — *what it backs*: kitting/labelling/packing/assembly sebagai fitur standar EWM (GR & GI).

Prioritas link-out untuk writer: pakai **#1 (SAP News, Gartner)** dan **#2 (BPS)** sebagai 1–2 tautan otoritatif wajib. #3/#4 opsional bila writer ingin menautkan klaim teknis EWM langsung ke SAP Help.

---

## FAQ Q&As (7 drafted, Bahasa Indonesia — 40–80 kata, siap dipoles)

### Apa itu 3PL WMS?
3PL WMS adalah *warehouse management system* yang dirancang untuk operator logistik pihak ketiga (*third-party logistics*) — satu gudang yang melayani banyak perusahaan klien sekaligus. Bedanya dengan WMS biasa: sistem ini memisahkan stok, operasi, dan penagihan per klien dalam satu fasilitas, lengkap dengan *activity-based billing* dan pembuktian SLA. Di SAP, skenario ini didukung SAP Extended Warehouse Management (EWM).

### Bagaimana WMS memisahkan stok antar klien dalam satu gudang?
WMS layak-3PL memakai konsep kepemilikan stok. Di SAP EWM, field *owner* dan *party entitled to dispose* menandai setiap unit stok sebagai milik klien tertentu, sehingga satu gudang fisik bisa menyimpan barang banyak perusahaan tanpa tercampur. Pemisahan diperkuat zona/bin khusus, aturan alokasi terpisah, dan visibilitas laporan yang dibatasi per klien — bukan sekadar folder berbeda di spreadsheet.

### Apa saja komponen yang bisa ditagih dalam activity-based billing gudang?
Umumnya empat basis tarif: penyimpanan (*storage*, per posisi pallet/volume per hari), penanganan (*handling*, per transaksi inbound/outbound), jam kerja (*labor*), dan layanan bernilai tambah (VAS seperti *kitting* dan *labelling*). WMS mencatat setiap aktivitas berbiaya secara otomatis lalu mengagregasinya menjadi invoice periodik. SAP EWM menyediakan fungsi Warehouse Billing untuk merekam dan menagih layanan ini.

### Apa bedanya 3PL WMS dengan modul gudang di ERP?
Modul gudang bawaan ERP dirancang untuk satu perusahaan mengelola stok miliknya sendiri. WMS layak-3PL menambahkan hal yang tidak dimiliki modul generik: segregasi stok multi-klien, mesin penagihan berbasis aktivitas, portal & laporan per klien, serta pengukuran SLA per kontrak. Tanpa kapabilitas ini, operator 3PL biasanya menambal dengan spreadsheet dan rekap manual — sumber kebocoran pendapatan dan sengketa data.

### Bagaimana WMS membantu membuktikan pencapaian SLA ke klien?
WMS mencatat *timestamp* setiap langkah — kapan barang diterima, di-*putaway*, dipetik, dan dikirim — lalu menghitung metrik seperti *order accuracy*, *on-time dispatch*, dan *inventory accuracy* per klien. Data ini menjadi bukti objektif pemenuhan SLA, menggantikan klaim lisan. Penting dicatat: WMS tidak menggantikan kontrak/SOP SLA; ia membuktikannya dengan data yang bisa diaudit.

### Apakah SAP EWM mendukung skenario 3PL/LSP?
Ya. SAP EWM mendukung skenario Logistics Service Provider (LSP)/3PL: konsep kepemilikan stok memisahkan barang antar klien, VAS menangani kitting/labelling, dan fungsi Warehouse Billing menagih layanan gudang secara periodik. SAP juga dinobatkan sebagai Leader dalam Gartner Magic Quadrant for Warehouse Management Systems 2026. EWM tersedia sebagai embedded (di S/4HANA) maupun decentralized.

### Berapa lama implementasi WMS untuk operator 3PL?
Durasi bergantung pada jumlah klien, kompleksitas billing, dan integrasi ERP/carrier — jadi tidak ada angka pasti. Yang menentukan bukan sekadar instalasi, melainkan desain awal konsep party/owner, struktur tarif, dan aturan SLA per klien. Rancangan yang benar sejak fase blueprint menentukan apakah billing dan pelaporan SLA bisa berjalan otomatis atau kembali bergantung pada rekap manual. (Hindari menyebut angka minggu/bulan tanpa sumber.)

---

## Data tables for the writer

### Tabel 1 — WMS generik (modul gudang ERP) vs WMS layak-3PL

| Kapabilitas | Modul gudang ERP generik | WMS layak-3PL (mis. SAP EWM skenario LSP) | Kenapa modul bawaan sering gagal untuk 3PL |
|---|---|---|---|
| Segregasi stok multi-klien | Terbatas (satu entitas/plant) | Owner/party concept per unit stok | Tidak dirancang untuk memisahkan kepemilikan banyak perusahaan |
| Activity-based billing | Tidak ada / manual | Warehouse Billing native (measurement + invoice periodik) | Tak ada mesin yang merekam tiap aktivitas berbiaya |
| Portal & laporan per klien | Tidak ada | Visibilitas dibatasi & laporan per tenant | Laporan bercampur, sulit dipisah per klien |
| SLA/KPI per klien | Manual/terbatas | Metrik ter-*timestamp* per kontrak | Tidak melacak KPI per pihak |
| VAS (kitting, labelling) | Minim | VAS order (GR & GI) | Aktivitas bernilai tambah tak tertagih |
| ASN & appointment scheduling | Dasar | Inbound ASN + dock/appointment | Kurang untuk volume multi-klien |
| Integrasi carrier/marketplace | Terbatas | Terintegrasi (via TM/B2B) | Butuh sambungan banyak pihak |

### Tabel 2 — Ilustrasi struktur activity-based billing (ANGKA HANYA ILUSTRASI, BUKAN PATOKAN HARGA)

| Basis tarif | Contoh satuan penagihan | Dicatat oleh WMS lewat |
|---|---|---|
| Storage | per posisi pallet / m³ per hari | snapshot stok periodik |
| Handling inbound | per baris/transaksi penerimaan | dokumen goods receipt |
| Handling outbound | per baris/transaksi pengiriman | dokumen goods issue / picking |
| Labor | per jam kerja aktivitas | pencatatan aktivitas/resource |
| VAS | per unit kitting/labelling | VAS order |

> Writer WAJIB melabeli Tabel 2 sebagai "ilustrasi struktur, bukan acuan harga". Jangan mencantumkan nominal Rupiah.

---

## Edge cases & nuance

- **Warehouse Billing native ≠ "otomatis tanpa desain".** Fitur ada, tetapi butuh konfigurasi measurement service, agreement, dan (dalam dokumentasi SAP) kaitan ke Transportation Management. Untuk model penagihan sangat kompleks/convergent (mis. banyak tarif berlapis, rating dinamis), sebagian implementasi memakai SAP BRIM/Convergent Charging — tetapi untuk mayoritas kasus 3PL, Warehouse Billing native sudah relevan. Jangan overclaim "sekali klik".
- **Owner concept butuh master data disiplin.** SAP Community menegaskan business partner & material antar klien tidak boleh bertabrakan (perlu BP ID mapping/BAdI di CIF pada arsitektur tertentu). Pesan untuk pembaca: pemisahan multi-klien adalah soal desain data, bukan sekadar "aktifkan fitur".
- **WMS membuktikan SLA, bukan menciptakan SLA.** Kontrak & SOP tetap sumber kebenaran; WMS menyediakan datanya. Ini sudut jujur yang membedakan artikel dari kompetitor.
- **Kapan BELUM perlu WMS 3PL penuh**: 1–2 klien, volume rendah, kontrak jangka pendek. Membeli billing engine kompleks yang tak terpakai = salah investasi. Jalur bertahap (mulai dari segregasi + pelaporan dasar) sering lebih tepat.
- **Embedded vs decentralized EWM**: operator 3PL bervolume tinggi kadang memilih decentralized EWM agar operasi gudang tak terhenti saat ERP klien/di-*downtime*; embedded lebih sederhana untuk yang sudah di S/4HANA.

## Flags (open factual risk)

- ⚠️ **Jumlah "berturut-turut" Leader Gartner**: sumber 2025 menyebut "12th consecutive" dan hasil fetch artikel 2026 juga menyebut "12th consecutive time" — kemungkinan salah satu keliru/terkonflasi. → **Rekomendasi**: writer cukup nyatakan "**Leader dalam Gartner Magic Quadrant for Warehouse Management Systems 2026**" (news.sap.com, Mei 2026). Jika ingin menyebut streak, atribusikan hati-hati ("selama bertahun-tahun berturut-turut") tanpa mengunci angka pasti.
- ⚠️ **Warehouse Billing scope**: fitur native ADA (help.sap.com), tetapi dokumentasi mengaitkannya dengan measurement service & agreement (TM). → **Rekomendasi**: sebut "fungsi Warehouse Billing di SAP EWM" sebagai kapabilitas standar untuk merekam & menagih layanan gudang; hindari klaim bahwa SEMUA model tarif kompleks otomatis tanpa komponen tambahan (BRIM bisa diperlukan untuk convergent charging).
- ⚠️ **Akurasi inventaris 99% vs ~95% manual**: ini *rule-of-thumb* industri, bukan hasil satu studi otoritatif tunggal. → **Rekomendasi**: sajikan sebagai "patokan praktis di lapangan / benchmark industri", bukan angka bersumber SAP/Gartner. Label sebagai perkiraan.
- ⚠️ **Angka tarif billing**: setiap nominal WAJIB dilabeli "ilustrasi, bukan patokan harga". Jangan cantumkan Rupiah spesifik.
- ⚠️ **Angka BPS 15.848**: berasal dari ringkasan publikasi BPS (bukan pembacaan langsung tabel penuh). → **Rekomendasi**: kutip sebagai "menurut BPS (Statistik Pergudangan, Ekspedisi, dan Kurir 2024)"; aman sebagai indikator skala sektor. Jika writer ingin presisi mutlak, tautkan halaman BPS.
- ⚠️ **Durasi implementasi**: tidak ada sumber otoritatif untuk "X minggu/bulan". → **Rekomendasi**: jangan sebut angka durasi; framing = "bergantung pada jumlah klien, kompleksitas billing, dan integrasi".

## Definition snippet draft (48 kata)

> **WMS untuk 3PL** adalah sistem manajemen gudang yang dirancang untuk operator logistik pihak ketiga — satu fasilitas yang melayani banyak perusahaan klien sekaligus. Sistem ini memisahkan stok, operasi, dan penagihan setiap klien dalam satu gudang, dilengkapi *activity-based billing* dan pembuktian SLA berbasis data. Di ekosistem SAP, skenario ini didukung SAP Extended Warehouse Management (EWM).
