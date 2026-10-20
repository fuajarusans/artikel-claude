---
brief_id: "warehouse-management-system-05"
researcher_run_date: "2026-07-07"
sources_cited: 16
flags: 6
---

# Research Dossier: Warehouse Management System untuk E-Commerce dan Omnichannel: Satu Stok, Banyak Kanal

## TL;DR for the writer

- **Inti artikel**: omnichannel fulfillment gagal bukan karena "belum terintegrasi ke Shopee/Tokopedia", tapi karena stok masih tersilo per kanal. Kapabilitas WMS enterprise yang menjawab ini: **single stock pool / inventory visibility, wave picking, ship-from-store & BOPIS, dan returns management** — bukan sekadar konektor marketplace.
- **Contoh enterprise = SAP**: fulfillment omnichannel dalam ekosistem SAP dibagi ke dua lapisan yang berbeda. **SAP Extended Warehouse Management (EWM)** menangani eksekusi gudang (wave management, picking, returns via Advanced Return Management, RF/RFID). **SAP Customer Activity Repository (CAR)** dengan kapabilitas **Omnichannel Article Availability and Sourcing (OAA)** menangani visibilitas stok real-time lintas kanal dan sourcing pesanan (termasuk skenario *click-and-collect* dan *click-and-ship* / ship-from-store). Ini DUA produk berbeda — jangan campur.
- **Batas klaim (penting)**: integrasi marketplace lokal (Shopee/Tokopedia/JNE) BUKAN fitur SAP bawaan — itu lewat integration layer/middleware (mis. SAP Integration Suite / SAP Commerce / konektor pihak ketiga). Jelaskan konsep secara vendor-neutral; SAP hanya sebagai contoh enterprise.
- **Angka yang kuat & belum dipakai artikel WMS lain**: BPS mencatat 4,4 juta usaha e-commerce di Indonesia pada 2024 (+15,3% yoy); IHL Group memperkirakan *inventory distortion* (out-of-stock + overstock) menelan sekitar USD 1,7–1,8 triliun/tahun secara global, dengan out-of-stock ~USD 1,2 triliun. Hindari angka Databoks +17% dan RFID Auburn (dipakai artikel 2026-08).
- **Soltius anchor (closing)**: SAP Platinum Partner via United VARs + pengalaman implementasi Retail/Consumer Products/Wholesale Distribution; framing "menjaga satu kebenaran stok real-time", bukan menjual produk.

## Core facts (verified)

> **Claim**: SAP Extended Warehouse Management (EWM) adalah solusi target (target architecture) untuk manajemen gudang di dalam SAP S/4HANA.
> **Number/specific**: SAP menyatakan "SAP EWM is now the target architecture within SAP S/4HANA in terms of a warehouse management solution"; inovasi & fitur baru hanya datang di EWM (bukan Stock Room Management).
> **Source**: SAP Learning — "Differentiating the SAP Solutions for Warehouse Management" / SAP Community "LE-WM is Ending" (learning.sap.com; community.sap.com), diakses 2026-07-07
> **Confidence**: high

> **Claim**: Manajemen gudang legasi SAP (LE-WM) berakhir masa pakainya; pelanggan didorong ke EWM (atau Stock Room Management untuk proses dasar).
> **Number/specific**: Setelah 31 Desember 2025, LE-WM tidak lagi didukung di bawah compatibility scope S/4HANA; mulai 1 Januari 2026 tidak ada dukungan teknis/maintenance lanjutan. Stock Room Management (diperkenalkan di S/4HANA 1909) hanya mencakup proses elementer dan tidak akan ditingkatkan.
> **Source**: SAP Community — "LE-WM is Ending: Understanding Stock Room Management vs EWM" (community.sap.com/t5/supply-chain-management-q-a/.../14214387), diakses 2026-07-07
> **Confidence**: high (blog/community SAP; naming & tanggal konsisten dengan multiple sumber SAP)

> **Claim**: SAP EWM mendukung Wave Management untuk menggabungkan dan menjadwalkan picking beberapa pesanan sekaligus.
> **Number/specific**: "A wave is created by combining warehouse request items from one or different warehouse requests"; sistem dapat mengelompokkan Outbound Delivery Orders menjadi wave berdasarkan kriteria seperti shipping time, route, atau customer untuk picking terkonsolidasi.
> **Source**: SAP Community "SAP EWM: Wave Management (Configuration & Execution)"; SAP Learning "Demonstrating Wave Management" (community.sap.com; learning.sap.com), diakses 2026-07-07
> **Confidence**: high

> **Claim**: SAP EWM menciptakan picking warehouse task dan menentukan source bin berdasarkan strategi stock removal (mis. FIFO/LIFO).
> **Number/specific**: "The system creates picking warehouse tasks for the wave and determines the source bins based on stock removal strategies like FIFO (First-In, First-Out) or LIFO."
> **Source**: SAP Community — Outbound process with SAP EWM (POSC, WOCR & Wave Management), diakses 2026-07-07
> **Confidence**: high

> **Claim**: Untuk retur pelanggan, SAP EWM (embedded di S/4HANA) memetakan proses lewat Advanced Return Management (ARM).
> **Number/specific**: "From S/4HANA 1709 Embedded EWM, all customer return processes must be mapped through Advanced Return Management (ARM)" — mencakup proses reverse logistics yang kompleks dengan minimal touch.
> **Source**: SAP Community — "Advanced Return Management Integration with SAP S/4HANA Embedded EWM 2020" (community.sap.com/.../13494619), diakses 2026-07-07
> **Confidence**: high

> **Claim**: SAP EWM terintegrasi dengan perangkat mobile/RF, RFID scanner, dan teknologi gudang otomatis.
> **Number/specific**: "SAP EWM offers integration to mobile devices and RFID scanners as well as to automated warehouse technologies like conveyors, picking systems and automated storage and retrieval systems."
> **Source**: SAP Community — "LE-WM is Ending / Stock Room Management vs EWM", diakses 2026-07-07
> **Confidence**: high

> **Claim**: SAP EWM tersedia dalam dua opsi deployment: Embedded EWM dan Decentralized EWM.
> **Number/specific**: Embedded EWM (dua versi lisensi: Basic & Advanced) cocok untuk gudang kecil–menengah; Decentralized EWM (instance terpisah) direkomendasikan untuk gudang throughput tinggi dan otomasi tinggi, dengan skalabilitas & kemandirian upgrade terbaik.
> **Source**: SAP Community — "SAP EWM Deployment Options – embedded vs decentral" (community.sap.com/.../13593281), diakses 2026-07-07
> **Confidence**: high

> **Claim**: SAP Customer Activity Repository (CAR) menyediakan visibilitas inventori real-time dan orkestrasi order omnichannel.
> **Number/specific**: SAP: "Power your planning applications and orchestrate omnichannel order management with a real-time view of customer activity"; memberi "real-time inventory visibility and on-shelf availability" serta "actionable business insight on inventory across multiple fulfillment locations".
> **Source**: SAP — Customer Activity Repository product page (sap.com/products/crm/customer-activity-repository.html), diakses 2026-07-07
> **Confidence**: high

> **Claim**: Kapabilitas Omnichannel Article Availability and Sourcing (OAA) di SAP CAR menyediakan info ketersediaan & sourcing lintas kanal.
> **Number/specific**: "OAA provides retail-specific availability information and sourcing information to your customers across all sales and communication channels" (POS, online, mobile, call center).
> **Source**: SAP Help Portal — Omnichannel Article Availability and Sourcing (help.sap.com/docs/CARAB/.../d8222dc5a636481b880ad1e4ce01d17b.html), diakses 2026-07-07
> **Confidence**: high

> **Claim**: OAA mendukung skenario click-and-collect (BOPIS) dan click-and-ship, dengan sourcing dari DC, vendor, atau toko fisik (ship-from-store).
> **Number/specific**: SAP: "In a click-and-ship scenario, customers order online and get their purchases delivered, while in a click-and-collect scenario, they order online and pick their purchases up in a store." "Sources can be all the DCs, vendors, or brick-and-mortar stores from which the articles can be delivered."
> **Source**: SAP Help Portal — OAA / Click-and-Collect & Click-and-Ship Scenario (help.sap.com/docs/CARAB), diakses 2026-07-07
> **Confidence**: high

> **Claim**: Perhitungan ketersediaan untuk artikel di toko pada OAA memakai stok fisik toko lewat kapabilitas Inventory Visibility di SAP CAR.
> **Number/specific**: "Availability calculation for store articles only takes into account physical stock in the stores (no projected stock) and is carried out via the Inventory Visibility capabilities of SAP Customer Activity Repository."
> **Source**: SAP Help Portal — Omnichannel Article Availability and Sourcing, diakses 2026-07-07
> **Confidence**: high

> **Claim**: Arsitektur OAA berbasis integrasi beberapa aplikasi SAP — bukan modul tunggal.
> **Number/specific**: "Based on the integration of: SAP S/4HANA or SAP Retail, SAP Customer Activity Repository, SAP Commerce, and SAP Commerce, integration package for SAP for Retail."
> **Source**: SAP Help Portal — OAA, diakses 2026-07-07
> **Confidence**: high

> **Claim**: Jumlah usaha e-commerce di Indonesia tumbuh signifikan pada 2024.
> **Number/specific**: BPS mencatat 4,4 juta usaha e-commerce pada 2024, naik 15,3% dibanding 2023. Mayoritas pelaku PMSE melakukan pengiriman langsung penjual ke pembeli (48,03%); 99,08% transaksi menjangkau area pengiriman dalam negeri.
> **Source**: BPS — Statistik E-Commerce 2024 (bps.go.id, publikasi 28 Nov 2025), via ringkasan pencarian; diakses 2026-07-07
> **Confidence**: high (sumber resmi BPS) — writer sebaiknya mengutip "BPS, Statistik E-Commerce 2024"

> **Claim**: Nilai transaksi e-commerce Indonesia (data Bank Indonesia) terus tumbuh.
> **Number/specific**: BI: nilai transaksi e-commerce mencapai Rp487,01 triliun pada 2024 (naik ~7,3% dari Rp453,75 triliun pada 2023), dengan proyeksi menuju ~Rp503 triliun pada 2025.
> **Source**: Bank Indonesia via Kontan / GoodStats / Kabar Bursa (nasional.kontan.co.id; data.goodstats.id), diakses 2026-07-07
> **Confidence**: medium (angka BI dikutip lewat media; writer sebaiknya menyebut "data Bank Indonesia" dan tahun; jangan mencampur dengan angka BPS Rp1.288,93 triliun yang memakai definisi/cakupan berbeda)

> **Claim**: Ketidakakuratan stok (inventory distortion) menimbulkan kerugian besar bagi ritel global.
> **Number/specific**: IHL Group memperkirakan inventory distortion (out-of-stock + overstock) sekitar USD 1,7–1,8 triliun/tahun secara global; out-of-stock menyumbang ~USD 1,2 triliun (studi 2023: total ~USD 1,77T; studi 2025: ~USD 1,73T), setara ~6,5% penjualan ritel global.
> **Source**: IHL Group (ihlservices.com) via Chain Store Age / Retail Dive / EIN Presswire, diakses 2026-07-07
> **Confidence**: medium (estimasi analis; writer sebaiknya memframekan sebagai "estimasi IHL Group" dan menyebut rentang, bukan angka mutlak tunggal)

> **Claim**: Sourcing OAA mencari sumber terbaik lintas lokasi untuk setiap artikel dalam keranjang online.
> **Number/specific**: "Sourcing tries to find the best sources for all articles that an online store customer wants to order"; eksekusi pencarian sumber optimal berjalan di background untuk skenario delivery yang dipilih.
> **Source**: SAP Help Portal — OAA / Click-and-Ship & Click-and-Collect scenarios, diakses 2026-07-07
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md + brief map)

> Catatan: "warehouse management system" adalah keyword bulanan (bukan salah satu dari 6 hub di product_matrix.md), jadi mapping berasal dari brief + riset. Universal rules tetap berlaku: Soltius **mengimplementasi/mengintegrasi/mendukung**, bukan membuat; maksimal 2–3 self-mention; tanpa superlatif.

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP EWM** (eksekusi gudang) | Wave management (multi-order picking); strategi picking & source bin (FIFO/LIFO); Advanced Return Management untuk retur; integrasi RF/mobile/RFID; embedded vs decentralized; target WM architecture di S/4HANA | H2 #3 (picking) & H2 #4 (returns) | Implementation (SAP EWM dalam S/4HANA Retail) + pengalaman Retail/Consumer Products/Wholesale Distribution |
| **SAP CAR + OAA** (visibilitas & sourcing lintas kanal) | Real-time inventory visibility; OAA menyediakan availability & sourcing lintas kanal; click-and-collect (BOPIS) & click-and-ship; sourcing dari DC/vendor/toko (ship-from-store); availability toko pakai stok fisik via Inventory Visibility | H2 #2 (single stock pool) & H2 #4 (BOPIS/ship-from-store) | (konsep — vendor-neutral; Soltius sebagai implementer S/4HANA Retail) |
| **Integration layer** (marketplace) | Integrasi Shopee/Tokopedia BUKAN fitur SAP bawaan — lewat SAP Integration Suite / SAP Commerce / konektor pihak ketiga/middleware | H2 #5 (WMS enterprise vs aplikasi integrasi) | — |
| **Soltius closing anchor** | SAP Platinum Partner via United VARs; sejak 1998, Metrodata Group; end-to-end (strategi→implementasi→AMS) | Closing CTA | "Sebagai SAP Platinum Partner melalui United VARs..." + industri Retail/Distribusi |

Reminder: Soltius **implements/migrates/supports** — tidak membangun SAP EWM/CAR. Maks 2–3 Soltius self-mention (idealnya 1 aside mid-article + 1 closing).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Help Portal — Omnichannel Article Availability and Sourcing (OAA), SAP Customer Activity Repository** — https://help.sap.com/docs/CARAB/e95c8443f589486bbfec99331049704a/d8222dc5a636481b880ad1e4ce01d17b.html — *what it backs*: click-and-collect (BOPIS) & click-and-ship, sourcing dari DC/vendor/toko (ship-from-store), availability real-time via Inventory Visibility. (Akses 2026-07-07.)
2. **BPS — Statistik E-Commerce 2024** — https://www.bps.go.id/id/publication/2025/11/28/647323224ecc656c2933571b/statistik-e-commerce-2024.html — *what it backs*: 4,4 juta usaha e-commerce (+15,3%), pola pengiriman & cakupan domestik; konteks pasar Indonesia yang otoritatif dan BELUM dipakai artikel WMS sebelumnya. (Publikasi 28 Nov 2025.)
3. *(Cadangan)* **SAP — Extended Warehouse Management product/features** — https://www.sap.com/products/scm/extended-warehouse-management/features.html — *what it backs*: fitur EWM (wave, picking, returns, integrasi TM). (Halaman mengembalikan 403 saat fetch otomatis; konten diverifikasi via SAP Learning/Community — writer boleh menautkan halaman produk resmi sebagai rujukan.)
4. *(Konteks industri)* **IHL Group — inventory distortion** — https://www.ihlservices.com/ — *what it backs*: skala kerugian out-of-stock/overstock global (framekan sebagai estimasi analis).

Priority: SAP official (help.sap.com) > BPS (pemerintah RI) > IHL Group (analis industri).

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu omnichannel fulfillment?
Omnichannel fulfillment adalah pemenuhan pesanan yang memperlakukan seluruh kanal penjualan — toko fisik, situs sendiri, dan marketplace — sebagai satu jaringan stok tunggal, sehingga pesanan dari kanal mana pun bisa dilayani dari sumber persediaan mana pun (gudang, distribution center, atau toko). Tujuannya satu janji ketersediaan dan pengiriman yang konsisten lintas kanal, bukan stok yang terpisah-pisah per kanal.

### Apa itu single stock pool?
Single stock pool adalah konsep menyatukan seluruh persediaan lintas kanal ke dalam satu sumber kebenaran stok real-time, alih-alih mengalokasikan kuota terpisah untuk tiap kanal. Dengan visibilitas terpusat, satu unit stok bisa dialokasikan ke pesanan mana pun secara dinamis. Ini mencegah oversell (stok "habis" di sistem padahal masih ada) dan stockout semu yang lazim terjadi saat stok tersilo antar-marketplace.

### Apa itu ship-from-store dan BOPIS?
Ship-from-store adalah strategi mengirim pesanan online langsung dari stok toko fisik terdekat, bukan hanya dari gudang pusat — memperpendek jarak dan mempercepat pengiriman. BOPIS (Buy Online, Pick-up In Store) adalah membeli online lalu mengambil di toko. Dalam ekosistem SAP, keduanya didukung SAP Customer Activity Repository lewat skenario click-and-ship dan click-and-collect, dengan ketersediaan toko dihitung dari stok fisik toko.

### Apa itu wave picking?
Wave picking adalah metode menggabungkan banyak pesanan menjadi satu "gelombang" (wave) picking yang dijadwalkan bersama, sehingga picker mengambil beberapa pesanan sekaligus dalam satu putaran gudang. Ini krusial untuk e-commerce yang berciri order kecil tapi sangat banyak. Di SAP EWM, wave dibentuk dari gabungan item warehouse request dan dapat dikelompokkan berdasarkan kriteria seperti waktu pengiriman, rute, atau pelanggan.

### Bagaimana WMS terhubung ke marketplace seperti Shopee dan Tokopedia?
WMS enterprise umumnya tidak terhubung langsung ke marketplace lokal secara bawaan. Koneksi ke Shopee, Tokopedia, atau kurir dilakukan lewat integration layer/middleware — misalnya SAP Integration Suite, SAP Commerce, atau konektor pihak ketiga — yang menyalurkan pesanan dan sinkronisasi stok ke sistem inti. Jadi fokus WMS adalah eksekusi gudang dan kebenaran stok; integrasi kanal ditangani lapisan integrasi terpisah.

### Bagaimana WMS menangani retur e-commerce?
Retur adalah kapabilitas omnichannel yang menentukan margin karena e-commerce berciri tingkat retur tinggi. WMS enterprise memproses retur dari penerimaan, inspeksi, hingga keputusan restock, refurbish, atau scrap. Di SAP, retur pelanggan pada Embedded EWM (sejak S/4HANA 1709) dipetakan lewat Advanced Return Management (ARM) untuk menangani proses reverse logistics kompleks dengan langkah seminimal mungkin.

### Apakah UKM e-commerce butuh WMS enterprise?
Belum tentu. Untuk volume awal, kombinasi konektor marketplace dan modul inventory pada sistem yang lebih ringan biasanya sudah cukup. WMS enterprise seperti SAP EWM mulai relevan saat skala meningkat: banyak lokasi/toko sebagai sumber pengiriman, kebutuhan ship-from-store/BOPIS, volume order kecil-banyak yang menuntut wave picking, atau kompleksitas retur tinggi. Over-invest terlalu dini justru menambah biaya tanpa manfaat sepadan.

## Data tables for the writer

### Tantangan omnichannel → kapabilitas WMS (untuk H2 #2)
| Tantangan omnichannel | Gejala di lapangan | Kapabilitas WMS yang menjawab |
|---|---|---|
| Stok tersilo per kanal | Oversell / stockout semu antar-marketplace | Single stock pool + inventory visibility real-time |
| Order kecil tapi sangat banyak | Picking lambat, biaya per order tinggi | Wave / batch / cluster picking, zone picking |
| Janji pengiriman cepat | Gudang pusat terlalu jauh dari pembeli | Ship-from-store (sourcing dari toko terdekat) |
| Pembeli ingin ambil di toko | Tidak ada opsi pickup | BOPIS / click-and-collect |
| Tingkat retur tinggi | Barang retur menumpuk, margin tergerus | Returns management (ARM): inspeksi, restock, refurbish |
| Akurasi order rendah | Salah kirim → retur & kehilangan pelanggan | Barcode/RFID + system-guided picking |

### Dua lapisan berbeda di ekosistem SAP (agar writer tidak mencampur)
| Lapisan | Produk SAP | Fungsi utama |
|---|---|---|
| Eksekusi gudang | SAP Extended Warehouse Management (EWM) | Wave management, picking, putaway, returns (ARM), RF/RFID |
| Visibilitas & sourcing lintas kanal | SAP Customer Activity Repository (CAR) + OAA | Real-time inventory visibility, sourcing pesanan, click-and-collect/click-and-ship |
| Integrasi kanal/marketplace | SAP Integration Suite / SAP Commerce / konektor pihak ketiga | Menyambungkan marketplace & kurir (bukan fitur WMS bawaan) |

## Edge cases & nuance

- **EWM ≠ CAR.** Kesalahan umum: menyebut "SAP EWM melakukan BOPIS/ship-from-store". Yang benar: BOPIS/ship-from-store diorkestrasi di lapisan CAR/OAA (sourcing & availability lintas kanal); EWM mengeksekusi picking/pengiriman fisik di gudang/toko. Writer harus menjaga pemisahan ini.
- **"Single stock pool" adalah konsep, bukan nama produk SAP.** Di SAP, kebenaran stok real-time lintas kanal dicapai lewat Inventory Visibility di CAR + fondasi S/4HANA. Jangan menuliskannya seolah fitur bernama "Single Stock Pool" milik SAP.
- **BOPIS memakai stok fisik, bukan proyeksi.** OAA menghitung availability toko hanya dari physical stock (bukan projected stock) — nuansa penting: janji "ada di toko" harus berbasis stok nyata agar tidak gagal saat pickup.
- **Wave picking bukan satu-satunya.** Batch, zone, dan cluster picking adalah varian; e-commerce order kecil-banyak sering pakai kombinasi. Jangan mengklaim satu metode "paling benar".
- **Angka BPS vs BI berbeda definisi.** BPS Statistik E-Commerce 2024 (nilai Rp1.288,93 triliun, cakupan survei usaha) berbeda metodologi dari transaksi e-commerce Bank Indonesia (Rp487 triliun, berbasis sistem pembayaran). Jangan menyandingkan keduanya seolah setara — pilih satu dan sebut sumbernya.
- **"Kapan BELUM perlu" (H2 #5).** Ini justru pembeda artikel dari brosur vendor. Untuk UKM/volume awal, WMS enterprise bisa over-invest; framekan jujur.

## Flags (open factual risk)

- ⚠️ **Angka Bank Indonesia (Rp487 triliun 2024) dikutip lewat media (Kontan/GoodStats), bukan rilis BI langsung** → recommendation: sebut "data Bank Indonesia" + tahun; jika ragu, gunakan angka BPS yang punya publikasi resmi. Jangan gabungkan angka BPS dan BI dalam satu kalimat perbandingan.
- ⚠️ **Angka IHL Group (USD ~1,7–1,8 triliun inventory distortion)** adalah estimasi analis dan bervariasi antar-tahun studi (2023 ~USD 1,77T; 2025 ~USD 1,73T) → recommendation: framekan sebagai "estimasi IHL Group" dengan rentang, bukan angka mutlak. Hindari mengklaim sebagai fakta pasti.
- ⚠️ **Statistik akurasi inventori 58%/65% dan "69% pembeli beralih ke kompetitor"** berasal dari agregator komersial (Opensend/RELEX/Ignitiv), bukan sumber otoritatif → recommendation: JANGAN dipakai sebagai fakta bernomor; boleh sebagai narasi umum tanpa angka, atau cari sumber Gartner/McKinsey bila ingin angka.
- ⚠️ **Penamaan versi/tanggal LE-WM end-of-life dan detail Stock Room Management** bersumber dari SAP Community (bukan halaman maintenance resmi yang bisa difetch) → recommendation: aman untuk menyebut "LE-WM dihentikan dan EWM adalah arah ke depan SAP" secara umum; hindari mengklaim tanggal spesifik (31 Des 2025) tanpa merujuk SAP secara eksplisit.
- ⚠️ **Halaman sap.com features EWM & BPS mengembalikan HTTP 403 saat WebFetch** — konten diverifikasi via SAP Learning/Community & ringkasan pencarian resmi → recommendation: writer boleh menautkan URL resmi sebagai rujukan pembaca, tetapi fakta spesifik sudah didukung sumber SAP lain di dosier ini.
- ⚠️ **JANGAN klaim integrasi Shopee/Tokopedia/JNE sebagai fitur SAP bawaan** → recommendation: selalu jelaskan lewat integration layer/middleware (SAP Integration Suite / SAP Commerce / konektor pihak ketiga). Ini instruksi eksplisit brief.

## Definition snippet draft (40–60 words)

> **Omnichannel fulfillment** adalah pemenuhan pesanan yang memperlakukan seluruh kanal — toko fisik, situs sendiri, dan marketplace — sebagai satu jaringan stok tunggal, sehingga pesanan dari kanal mana pun bisa dilayani dari sumber persediaan mana pun. Warehouse Management System menjadi enabler-nya lewat single stock pool, wave picking, ship-from-store/BOPIS, dan returns management. (55 kata)
