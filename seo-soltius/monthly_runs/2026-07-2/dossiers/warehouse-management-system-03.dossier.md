---
brief_id: "warehouse-management-system-03"
researcher_run_date: "2026-07-07"
sources_cited: 12
flags: 5
---

# Research Dossier: Otomasi Gudang dan WMS — Peran Robot AMR, Goods-to-Person, dan Material Flow System

## TL;DR for the writer

- **Tesis inti terverifikasi**: otomasi fisik (AMR, AS/RS, conveyor) hanyalah hardware; WMS + **Material Flow System (MFS)** adalah lapisan orkestrasi yang menerjemahkan pesanan menjadi tugas real-time ke mesin. SAP mengonfirmasi MFS memungkinkan EWM berkomunikasi **langsung dengan PLC lewat telegram tanpa unit kontrol gudang (WCU) tambahan** — bukti konkret "WMS sebagai otak".
- **SAP EWM adalah contoh enterprise yang kuat & didukung fakta**: SAP dinobatkan **Leader di Gartner Magic Quadrant WMS selama 11 tahun berturut-turut (2024)** dan **12 kali berturut-turut (2026)** — keduanya dari news.sap.com. Produk yang dinilai = SAP Extended Warehouse Management (EWM). Aman dikutip dengan tahun + tanggal akses.
- **"SAP Warehouse Robotics" masih penamaan aktif** (Administration Guide resmi bertanggal 2024-10-14). Cakupannya: integrasi AMR/robot pihak ketiga yang **vendor-agnostic**, dengan **3 skenario out-of-the-box (cross-docking, put-away, pick-pack-and-pass)**, terintegrasi via OData/WebService/IDoc/MFS. Jangan sebut ia "membuat robot" — ia mengorkestrasi robot pihak ketiga.
- **Definisi teknis aman**: goods-to-person = barang dibawa ke picker (oleh AS/RS tetap atau AMR); AS/RS = sistem tetap, padat, capex tinggi; AMR = mobile, fleksibel, capex rendah, cocok SKU banyak/throughput sedang. **task interleaving** & **labor management** adalah kapabilitas EWM nyata (mengurangi travel time & idle resource).
- **Konteks Indonesia**: BPS mencatat **Transportasi & Pergudangan tumbuh 8,98% (tertinggi) pada triwulan IV-2025**; ekonomi tumbuh 5,11% (2025). Pakai untuk membingkai urgensi efisiensi logistik — JANGAN klaim angka adopsi robot spesifik (tidak ada sumber otoritatif).
- **Jangan mengarang** angka throughput/uptime/ROI robot — tidak ada sumber; semua flag di bawah.

## Core facts (verified)

> **Claim**: Material Flow System (MFS) memungkinkan SAP EWM menghubungkan gudang otomatis langsung tanpa unit kontrol gudang (WCU) tambahan.
> **Number/specific**: MFS memungkinkan EWM berkomunikasi langsung dengan programmable logic controller (PLC) yang mengoperasikan conveyor, AS/RS, crane, dan AGV melalui komunikasi telegram real-time (TCP/IP). Warehouse task dipecah menjadi tugas-tugas kecil yang diteruskan bertahap ke PLC.
> **Source**: SAP Help Portal — "Material Flow System (MFS)", help.sap.com (SAP_EXTENDED_WAREHOUSE_MANAGEMENT) + "Setting Up the Material Flow System", help.sap.com — diakses 2026-07-07
> **Confidence**: high

> **Claim**: MFS mengelola pergerakan fisik, sedangkan EWM menangani fungsi strategis/perencanaan.
> **Number/specific**: "SAP EWM mainly automates the strategic and planning functions... the material flow system (MFS) manages and controls the physical movements." MFS menghilangkan kebutuhan interface ke sistem eksternal karena EWM berkomunikasi langsung ke level kontrol.
> **Source**: SAP Help Portal / SAP Documentation (MFS), help.sap.com — diakses 2026-07-07
> **Confidence**: high

> **Claim**: SAP dinobatkan sebagai Leader di Gartner Magic Quadrant for Warehouse Management Systems selama 11 tahun berturut-turut (2024).
> **Number/specific**: "SAP Named a Leader in the Gartner® Magic Quadrant™ for Warehouse Management Systems for the 11th Consecutive Year" — dipublikasikan 7 Mei 2024. Produk yang dinilai = SAP Extended Warehouse Management (EWM). Posisi berdasarkan Ability to Execute + Completeness of Vision.
> **Source**: news.sap.com/2024/05/sap-a-leader-2024-gartner-magic-quadrant-wms/ — diakses 2026-07-07
> **Confidence**: high

> **Claim**: SAP kembali dinobatkan Leader di Gartner Magic Quadrant WMS pada 2026 (12 kali berturut-turut).
> **Number/specific**: "recognized by Gartner as a Leader for the 12th consecutive time" — dipublikasikan 4 Mei 2026. Menyebut SAP EWM memperluas inovasi dengan "APIs for seamless robotics integration" serta kapabilitas AI (predictive labor demand planning, slotting). Juga menyebut penawaran baru "SAP Logistics Management".
> **Source**: news.sap.com/2026/05/sap-leader-2026-gartner-magic-quadrant-warehouse-management-systems/ — diakses 2026-07-07
> **Confidence**: high

> **Claim**: SAP Warehouse Robotics adalah solusi resmi SAP untuk mengintegrasikan robot pihak ketiga ke EWM, dan masih aktif per 2024–2026.
> **Number/specific**: Administration Guide resmi bertanggal 2024-10-14. Membuat integrasi robot "plug and play"; mendukung hampir semua jenis AMR. Robot dapat diintegrasikan "within minutes" dengan mengunduh application software.
> **Source**: help.sap.com — "Administration Guide for SAP Warehouse Robotics" (PDF, 2024-10-14) + SAP Community (SCM blog by SAP) — diakses 2026-07-07
> **Confidence**: high

> **Claim**: SAP Warehouse Robotics bersifat vendor-agnostic (tanpa vendor lock-in) dan mendukung 3 skenario EWM out-of-the-box.
> **Number/specific**: Skenario out-of-the-box: **Cross-docking, Put-away, dan Pick-pack-and-pass**. Arsitektur "robot-vendor-agnostic", mendukung heterogeneous fleet dari "hundreds of vendors". Mitra robot yang disebut SAP mencakup Locus Robotics, Fetch, Geek+.
> **Source**: SAP Community (Supply Chain Management blog posts by SAP) — "Warehouse Robotics for SAP EWM", "Seamlessly integrate robotics in your warehouse" — diakses 2026-07-07
> **Confidence**: high

> **Claim**: Robot/AMR/AGV terhubung ke EWM melalui beberapa antarmuka standar.
> **Number/specific**: Integrasi via OData APIs, EWM-WCU IDOC, SOAP WebService/RFC; AGV/AMR/robot juga dapat diintegrasikan melalui MFS via TCP/IP dan komunikasi berbasis telegram. Fleet management system menarik open warehouse order/task dari antrian EWM secara berkala.
> **Source**: SAP Community (SCM blogs by SAP) + SAP Business Accelerator Hub (APIs for Warehousing) — diakses 2026-07-07
> **Confidence**: high

> **Claim**: SAP EWM mendukung task interleaving untuk mengurangi travel time dan waktu idle resource.
> **Number/specific**: Setelah putaway, forklift tidak kembali kosong ke area goods receipt — sistem memberi tugas baru (mis. stock removal) di dekatnya, membentuk satu loop perjalanan yang dioptimalkan (Putaway → Picking → Replenishment). Tujuannya meminimalkan idle resource dan travel time.
> **Source**: SAP Community (SCM blog) + help.sap.com "Interleaving Using Radio Frequency" — diakses 2026-07-07
> **Confidence**: high

> **Claim**: Goods-to-person (GTP) adalah model di mana barang dibawa ke picker, kebalikan dari person-to-goods.
> **Number/specific**: GTP: produk dibawa ke operator oleh sistem tetap atau AMR sehingga picker menerima item di pick station tanpa berjalan jauh. Person-to-goods: pekerja berjalan menyusuri lorong mengambil item (picking manual).
> **Source**: inVia Robotics; Precision Warehouse Design (industry references) — diakses 2026-07-07
> **Confidence**: medium (definisi industri konsisten lintas sumber; bukan sumber SAP resmi — aman sebagai definisi umum vendor-neutral)

> **Claim**: AS/RS dan AMR adalah dua pendekatan berbeda untuk otomasi (keduanya bisa mewujudkan goods-to-person).
> **Number/specific**: AS/RS = sistem robotik tetap (fixed), kepadatan penyimpanan tinggi, produktivitas tinggi, namun capex besar & butuh infrastruktur signifikan. AMR = mobile, lebih fleksibel & scalable, capex jauh lebih rendah, memanfaatkan infrastruktur eksisting; cocok untuk SKU banyak/throughput lebih rendah.
> **Source**: PeakLogix "AMR vs AGV vs AS/RS"; inVia Robotics — diakses 2026-07-07
> **Confidence**: medium (referensi industri; konsisten dan sesuai pemahaman umum)

> **Claim**: SAP menghubungkan EWM dengan AI/robotik fisik yang mengeksekusi tugas gudang berdasarkan konteks operasional real-time dari EWM.
> **Number/specific**: Dalam pilot Nov 2025, robot humanoid mengeksekusi tugas gudang "based on real-time operational context from SAP EWM, including delivery data, order priorities, and storage locations". Menegaskan EWM sebagai sumber konteks bisnis bagi robot.
> **Source**: news.sap.com/2025/11/sap-physical-ai-partnerships-new-robotics-pilots/ (5 Nov 2025) — diakses 2026-07-07
> **Confidence**: high (untuk keberadaan pilot & peran EWM; ini pilot, bukan fitur GA — jangan diklaim sebagai kapabilitas standar produksi)

> **Claim**: Sektor pergudangan/logistik Indonesia tumbuh cepat, memberi konteks urgensi efisiensi otomasi.
> **Number/specific**: BPS: Transportasi dan Pergudangan mengalami pertumbuhan tertinggi sebesar 8,98% pada triwulan IV-2025; ekonomi Indonesia 2025 tumbuh 5,11%. Kontribusi e-commerce Indonesia tumbuh menjadi ~USD95 miliar pada 2025.
> **Source**: BPS — "Ekonomi Indonesia Tahun 2025 Tumbuh 5,11 Persen" (5 Feb 2026), bps.go.id — diakses 2026-07-07
> **Confidence**: high (angka GDP & pertumbuhan sektor dari BPS resmi; angka e-commerce USD95bn dari ringkasan sekunder — beri label estimasi/atribusi bila dipakai)

## Solution focus + Soltius anchor (from product_matrix.md + brief)

> Catatan: "warehouse management system" adalah keyword baru (tidak ada di 6-baris product_matrix). Mapping diturunkan dari brief (`sap_focus` = SAP EWM + MFS + Warehouse Robotics; `soltius_anchor` = Implementation + industri manufaktur/distribusi, SAP Platinum Partner via United VARs) + riset. Framing universal (implements-not-builds, ≤3 mention, no superlatives) tetap berlaku.

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Jenis otomasi umum (conveyor, pick/put-to-light, goods-to-person, AMR, AS/RS) — vendor-neutral | Definisi & kapan cocok; GTP membawa barang ke picker; AS/RS tetap vs AMR mobile | H2 #1–#2 (tabel) | — (edukasi netral, belum ada mention) |
| SAP EWM sebagai contoh WMS enterprise | Leader Gartner MQ WMS 11x (2024) & 12x (2026); produk = EWM | H2 #3 | Kredibilitas "SAP Platinum Partner" (aside, jangan overclaim) |
| Material Flow System (MFS) | Komunikasi langsung EWM↔PLC via telegram, tanpa WCU tambahan; kontrol conveyor/AS/RS/crane | H2 #4 | — |
| SAP Warehouse Robotics | Vendor-agnostic; 3 skenario OOTB (cross-docking, put-away, pick-pack-and-pass); integrasi AMR pihak ketiga via OData/IDoc/MFS | H2 #4 | Implementation (menghubungkan lantai gudang ke ERP) |
| task interleaving + labor management + sinkronisasi S/4HANA | Loop perjalanan optimal; kurangi idle/travel time | H2 #3–#4 | — |
| Soltius anchor CTA | Implementasi SAP EWM + MFS/Warehouse Robotics; pengalaman manufaktur/distribusi; SAP Platinum Partner via United VARs | **closing** | **Implementation + SAP Platinum Partner via United VARs** |

Reminder: Soltius **mengimplementasi/mengintegrasi/mendukung** SAP EWM/MFS/Warehouse Robotics — **bukan membuatnya**, dan **bukan pembuat robot/AMR** (itu milik vendor pihak ketiga seperti Locus/Geek+). Maks 2–3 mention Soltius; ideal: 1 aside di H2 #5 + 1 closing.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP News — "SAP Recognized as a Leader in the 2026 Gartner® Magic Quadrant™ for Warehouse Management Systems" (4 Mei 2026)** — https://news.sap.com/2026/05/sap-leader-2026-gartner-magic-quadrant-warehouse-management-systems/ — *what it backs*: SAP Leader WMS 12x berturut-turut; EWM memperluas API integrasi robotik + AI (predictive labor planning, slotting).
2. **SAP News — "SAP Named a Leader in the Gartner® Magic Quadrant™ for WMS for the 11th Consecutive Year" (7 Mei 2024)** — https://news.sap.com/2024/05/sap-a-leader-2024-gartner-magic-quadrant-wms/ — *what it backs*: rekam jejak Leader WMS; produk = SAP EWM.
3. **SAP Help Portal — "Material Flow System (MFS)"** — https://help.sap.com/docs/SAP_EXTENDED_WAREHOUSE_MANAGEMENT/3d97bec9bf1649099384bb8167df3cf2/4dc9cb53ad377114e10000000a174cb4.html — *what it backs*: EWM↔PLC langsung via telegram tanpa WCU; kontrol AS/RS/conveyor/crane.
4. **SAP News — "How SAP Brings Business AI into the Physical World" (5 Nov 2025)** — https://news.sap.com/2025/11/sap-physical-ai-partnerships-new-robotics-pilots/ — *what it backs*: EWM memberi konteks operasional real-time (delivery data, prioritas order, storage location) ke robot.
5. **BPS — "Ekonomi Indonesia Tahun 2025 Tumbuh 5,11 Persen" (5 Feb 2026)** — https://www.bps.go.id/id/pressrelease/2026/02/05/2546/ekonomi-indonesia-tahun-2025-tumbuh-5-11-persen.html — *what it backs*: Transportasi & Pergudangan +8,98% (tertinggi) Q4-2025 → urgensi efisiensi logistik.

Priority terpenuhi: SAP official (utama) > BPS (konteks Indonesia). Sumber industri robotik (inVia, PeakLogix) hanya untuk definisi umum, bukan klaim angka.

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu otomasi gudang?
Otomasi gudang adalah penggunaan teknologi—mulai dari conveyor, pick-to-light, hingga robot AMR dan AS/RS—untuk menjalankan tugas penyimpanan dan pengambilan barang dengan intervensi manual minimal. Namun hardware saja tidak cukup: dibutuhkan lapisan orkestrasi berupa Warehouse Management System (WMS) yang menerjemahkan pesanan menjadi instruksi tugas real-time ke setiap perangkat. Tanpa "otak" WMS, mesin mahal hanya menunggu perintah dan utilisasinya rendah.

### Apa itu AMR dan goods-to-person?
AMR (Autonomous Mobile Robot) adalah robot yang bergerak mandiri di gudang menggunakan sensor dan peta digital, tanpa jalur tetap—lebih fleksibel dan hemat biaya dibanding sistem tetap. Goods-to-person adalah prinsip di mana barang dibawa ke operator di pick station (oleh AMR atau AS/RS), sehingga picker tidak perlu berjalan menyusuri lorong. Ini kebalikan dari person-to-goods (picking manual berjalan), dan memangkas waktu perjalanan yang menjadi biaya terbesar picking konvensional.

### Apakah gudang otomatis wajib pakai WMS?
Secara praktis, ya. Robot dan conveyor adalah perangkat yang mengeksekusi perintah; tanpa WMS yang menugaskan pekerjaan secara real-time, mereka tidak tahu apa yang harus diambil, ke mana, dan dengan prioritas apa. WMS seperti SAP EWM—melalui Material Flow System—berkomunikasi langsung dengan PLC dan robot untuk mengorkestrasi tugas. Inilah alasan investasi hardware sering gagal memberi ROI ketika lapisan orkestrasi diabaikan.

### Apa itu Material Flow System (MFS)?
Material Flow System (MFS) adalah komponen SAP Extended Warehouse Management (EWM) yang mengendalikan pergerakan fisik otomatis. MFS memungkinkan EWM berkomunikasi langsung dengan programmable logic controller (PLC) yang mengoperasikan conveyor, AS/RS, dan crane melalui komunikasi telegram real-time—tanpa memerlukan unit kontrol gudang (warehouse control unit) terpisah. MFS memecah warehouse task menjadi langkah-langkah kecil dan meneruskannya bertahap ke PLC terkait.

### Apa beda AS/RS dan AMR?
AS/RS (Automated Storage and Retrieval System) adalah sistem robotik tetap yang menyimpan dan mengambil barang dengan kepadatan penyimpanan dan produktivitas tinggi, tetapi butuh investasi infrastruktur besar. AMR (Autonomous Mobile Robot) bersifat mobile, lebih fleksibel dan mudah diskalakan, memanfaatkan infrastruktur gudang yang ada dengan capex jauh lebih rendah. AS/RS cocok untuk throughput tinggi dan ruang terbatas; AMR unggul untuk variasi SKU banyak dengan throughput sedang.

### Bagaimana robot gudang terhubung ke ERP?
Robot terhubung ke ERP melalui WMS sebagai perantara. Pada SAP, robot pihak ketiga diintegrasikan lewat SAP Warehouse Robotics dan MFS ke SAP EWM menggunakan antarmuka standar seperti OData API, IDoc, atau komunikasi telegram TCP/IP. EWM lalu tersinkronisasi ke inti ERP (SAP S/4HANA), sehingga status stok, prioritas pesanan, dan lokasi penyimpanan mengalir dua arah antara lantai gudang dan sistem bisnis secara real-time.

### Kapan otomasi gudang belum layak secara ekonomi?
Otomasi belum tentu sepadan untuk gudang bervolume rendah atau berpola sangat variabel, karena capex robot/AS/RS sulit terbayar oleh penghematan tenaga kerja. Urutan yang matang adalah membenahi proses lebih dulu, menstabilkan WMS, lalu menambah otomasi secara bertahap—bukan sebaliknya. Membeli robot sebelum orkestrasi WMS siap berisiko utilisasi rendah dan vendor lock-in hardware, dua sebab umum otomasi gagal memberi ROI.

## Data tables for the writer

### Jenis otomasi gudang & peran WMS
| Jenis otomasi | Fungsi utama | Model | Kapan cocok | Peran WMS/MFS |
|---|---|---|---|---|
| Conveyor / sortation | Memindahkan & menyortir barang antar zona | Fixed | Aliran barang volume tinggi, rute tetap | MFS mengendalikan segmen conveyor via PLC |
| Pick-to-light / put-to-light | Memandu picker dengan indikator cahaya | Person-to-goods (dibantu) | Picking cepat, akurasi tinggi, area padat | WMS memicu & memverifikasi konfirmasi tugas |
| Goods-to-person (AS/RS) | Membawa tote/tray ke pick station | Fixed, kepadatan tinggi | Throughput tinggi, ruang terbatas, capex besar | MFS mengorkestrasi retrieval & antrean |
| AMR | Robot mobile mengangkut/membawa barang | Mobile, fleksibel | SKU banyak, throughput sedang, capex rendah | SAP Warehouse Robotics + EWM menugaskan tugas real-time |
| AS/RS crane (high-rack) | Simpan/ambil di rak tinggi otomatis | Fixed | Penyimpanan padat, palet | MFS pecah task ke PLC bertahap |

### Person-to-goods vs Goods-to-person
| Aspek | Person-to-goods | Goods-to-person |
|---|---|---|
| Pergerakan | Pekerja berjalan ke barang | Barang dibawa ke pekerja |
| Waktu perjalanan | Tinggi (biaya picking terbesar) | Minimal |
| Teknologi | Manual, pick-to-light | AS/RS tetap atau AMR |
| Capex | Rendah | Menengah–tinggi |
| Cocok untuk | Volume/variabilitas rendah | Throughput & akurasi tinggi |

## Edge cases & nuance

- **Otomasi fisik ≠ WMS**: banyak kegagalan proyek berakar pada membeli hardware lebih dulu tanpa lapisan orkestrasi. Tekankan urutan: proses → WMS matang → otomasi bertahap.
- **AS/RS dan AMR keduanya bisa "goods-to-person"** — GTP adalah *prinsip*, bukan satu teknologi. Jangan samakan GTP hanya dengan AMR.
- **"SAP Logistics Management" muncul di rilis MQ 2026** sebagai penawaran baru berdampingan dengan EWM. Jangan mengklaim ia menggantikan EWM; sebut EWM sebagai produk WMS yang dinilai Gartner. Bila ragu, cukup sebut "SAP EWM".
- **Pilot AI/humanoid (Nov 2025) adalah pilot, bukan fitur GA** — bingkai sebagai arah inovasi/proof-of-concept, bukan kapabilitas produksi standar.
- **Angka efisiensi/ROI robot**: tidak ada sumber otoritatif tunggal; hindari persentase spesifik. Jika perlu, gunakan bahasa kualitatif ("mengurangi waktu perjalanan", "meningkatkan utilisasi") tanpa angka mengarang.
- **Soltius bukan pembuat robot**: AMR/AS/RS berasal dari vendor pihak ketiga (Locus, Geek+, dll.). Soltius mengintegrasikan lantai gudang ke ERP via EWM — jaga framing ini.

## Flags (open factual risk)

- ⚠️ **"SAP Warehouse Robotics" penamaan/cakupan**: TERVERIFIKASI aktif (Admin Guide 2024-10-14, blog SAP resmi). Aman disebut, tetapi jelaskan sebagai *solusi integrasi robot pihak ketiga*, bukan produk yang "membuat robot". Rekomendasi: frasa "SAP Warehouse Robotics untuk mengintegrasikan AMR pihak ketiga ke SAP EWM".
- ⚠️ **Jumlah "tahun berturut-turut" Gartner MQ WMS**: 11x pada 2024 dan 12x pada 2026 (news.sap.com). Jika penulis menyebut "2024 & 2026" seperti brief, sebutkan hitungan yang benar per tahun (11 vs 12) atau cukup katakan "berulang kali/berturut-turut sebagai Leader" + tautan. Jangan tulis "11 tahun" untuk 2026. Sertakan tanggal akses 2026-07-07.
- ⚠️ **"SAP Logistics Management" (baru di MQ 2026)**: penamaan portofolio logistik SAP sedang berevolusi. Rekomendasi: fokus pada "SAP EWM" sebagai produk WMS; jangan berspekulasi tentang cakupan/roadmap SAP Logistics Management tanpa sumber lanjutan.
- ⚠️ **Definisi AMR/AS/RS/goods-to-person** bersumber dari referensi industri (inVia, PeakLogix), bukan SAP resmi. Definisinya konsisten dan aman sebagai penjelasan umum vendor-neutral; jangan bebankan atribusi ke SAP. Confidence: medium.
- ⚠️ **Angka throughput/uptime/ROI robot & angka adopsi otomasi Indonesia**: TIDAK ADA sumber otoritatif. Rekomendasi: jangan mencantumkan persentase efisiensi/uptime. Untuk konteks pasar, gunakan angka BPS (Transportasi & Pergudangan +8,98% Q4-2025; GDP 5,11% 2025) yang terverifikasi; angka e-commerce USD95bn beri label estimasi/atribusi sekunder.

## Definition snippet draft (40–60 words)

> Otomasi gudang adalah penggunaan teknologi seperti conveyor, robot AMR, dan AS/RS untuk menjalankan penyimpanan dan pengambilan barang dengan campur tangan manual minimal. Kunci keberhasilannya bukan hardware, melainkan Warehouse Management System (WMS) sebagai lapisan orkestrasi—pada SAP EWM lewat Material Flow System—yang menugaskan pekerjaan ke setiap mesin secara real-time agar otomasi benar-benar produktif.
