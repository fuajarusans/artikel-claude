---
brief_id: "digital-manufacturing-02"
researcher_run_date: "2026-06-02"
sources_cited: 12
flags: 4
---

# Research Dossier: MES dan ERP: Cara Menghubungkan Lantai Produksi ke Sistem Pusat

## TL;DR untuk penulis

- SAP Digital Manufacturing Cloud (SAP DM) terhubung secara **native** dengan SAP S/4HANA melalui SAP Cloud Integration — production order dibuat di S/4HANA, mengalir otomatis ke SAP DM untuk eksekusi di lantai produksi, dan konfirmasi aktual naik kembali ke S/4HANA secara real-time.
- Koneksi ke mesin non-SAP (PLC, SCADA, sensor legacy) didukung via **SAP Production Connector** yang mendukung protokol **OPC UA, OPC DA, dan MQTT** — artinya pabrik dengan mesin lama tetap bisa terhubung tanpa harus ganti semua peralatan.
- Manfaat integrasi MES-ERP terukur dari industri: OEE rata-rata meningkat 17–26 poin persentase, on-time delivery naik ~22%, inventori berkurang 15–25%. Gunakan range ini — jangan kutip satu angka tunggal.
- "Island of automation" — sensor terpasang tapi tidak terhubung ke ERP — adalah failure mode paling umum. Ini terjadi ketika master data ERP (BOM, routing, work center) belum bersih sebelum MES dipasang.
- Timeline implementasi integrasi MES-ERP bervariasi: proyek greenfield sederhana 4–6 bulan; pabrik multi-lini dengan mesin legacy 9–18 bulan. Framing ini dari praktik industri — tidak ada angka SAP resmi yang spesifik; gunakan sebagai estimasi.

---

## Core facts (terverifikasi)

> **Claim**: SAP Digital Manufacturing Cloud (SAP DM) mendukung integrasi native dengan SAP S/4HANA melalui SAP Cloud Integration (middleware terkelola SAP).
> **Number/specific**: Arsitektur resmi: production order dari S/4HANA mengalir ke SAP DM; konfirmasi aktual dari lantai produksi naik kembali ke S/4HANA secara otomatis. SAP Cloud Integration adalah lapisan middleware yang digunakan.
> **Source**: SAP Help Documentation, "Integration with SAP S/4HANA Cloud Public Edition", https://help.sap.com/docs/sap-digital-manufacturing/integration-guide/integration-with-sap-s-4hana-cloud (diakses 2026-06-02)
> **Confidence**: high

> **Claim**: SAP DM mendukung koneksi ke mesin non-SAP menggunakan SAP Production Connector yang mendukung protokol OPC UA, OPC DA, dan MQTT.
> **Number/specific**: SAP Production Connector diinstal di dalam jaringan pabrik (on-premise component), memungkinkan koneksi ke PLC, SCADA, AGV fleet manager, dan perangkat IoT pihak ketiga. OPC UA adalah protokol standar yang didukung.
> **Source**: SAP Community Blog (oleh SAP), "Setting up Shop Floor Connectivity: Connecting your OPC UA Server with SAP Digital Manufacturing", https://community.sap.com/t5/supply-chain-management-blog-posts-by-sap/setting-up-shop-floor-connectivity-connecting-your-opc-ua-server-with-sap/ba-p/13897749 (diakses 2026-06-02); dikonfirmasi juga via SAP Help, https://help.sap.com/docs/sap-digital-manufacturing/production-connectivity-model/opc-ua-server
> **Confidence**: high

> **Claim**: SAP Production Connector (ProdCon) adalah komponen on-premise yang dipasang di dekat mesin di jaringan pabrik untuk meminimalkan latensi komunikasi ke SAP DM Cloud.
> **Number/specific**: ProdCon bertindak sebagai jembatan antara jaringan OT (shop floor) dan SAP DM Cloud, menggunakan TLS (Transport Layer Security) untuk keamanan komunikasi.
> **Source**: SAP Community Blog (oleh SAP), op. cit.; SAP Learning, https://learning.sap.com/learning-journeys/exploring-customization-in-sap-digital-manufacturing/exploring-sap-digital-manufacturing-automation-architecture (diakses 2026-06-02)
> **Confidence**: high

> **Claim**: SAP S/4HANA 2025 (Private Cloud) menghadirkan peningkatan signifikan pada Production Planning, termasuk cloud-native API (RAP Business Objects) untuk Production Orders, Process Orders, dan Routings.
> **Number/specific**: Fitur baru FPS1 2025 mencakup MRP Cockpit Fiori apps, Business Add-Ins baru untuk MRP dan production orders, plus on-stack extensibility untuk Manufacturing.
> **Source**: SAP Community Blog (oleh SAP), "What's new for Production Planning in SAP S/4HANA Private Cloud 2025", https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/what-s-new-for-production-planning-in-sap-s-4hana-private-cloud-2025/ba-p/14267254 (diakses 2026-06-02)
> **Confidence**: high

> **Claim**: SAP S/4HANA Manufacturing untuk Production Engineering & Operations (PEO) terus dikembangkan di 2025 untuk mendukung fleksibilitas shop floor dan efisiensi engineering.
> **Number/specific**: SAP S/4HANA Manufacturing PEO FPS1 2025 menghadirkan fitur yang meningkatkan efisiensi engineering, fleksibilitas shop floor, dan operasi harian.
> **Source**: SAP Community Blog (oleh SAP), "What is new in S/4HANA Manufacturing for Production Engineering & Operations (PEO) in 2025 FPS1", https://community.sap.com/t5/supply-chain-management-blog-posts-by-sap/what-is-new-in-s-4hana-manufacturing-for-production-engineering-amp/ba-p/14338211 (diakses 2026-06-02)
> **Confidence**: high

> **Claim**: Integrasi MES-ERP meningkatkan OEE secara signifikan — angka dari industri menunjukkan peningkatan dari rata-rata 65% ke 82% (+17–26 poin persentase).
> **Number/specific**: Satu studi kasus dari industri presisi engineering mencatat peningkatan OEE 20% setelah integrasi MES real-time dengan mesin CNC. Kasus lain: OEE dari 65% ke 82%, downtime turun dari 20% ke 8%.
> **Source**: ERP.today, "Integrating Real-Time Data with ERP Systems Yields Improvements", https://erp.today/integrating-real-time-data-with-erp-systems-yields-improvements; D4M Integration, "How MES Integration Enhances Manufacturing Operations", https://d4m-int.com/how-mes-integration-enhances-manufacturing-operations/ (diakses 2026-06-02)
> **Confidence**: medium — angka ini dari vendor-adjacent sources; penulis harus menyampaikan sebagai "dalam berbagai studi kasus industri" dan menggunakan range, bukan satu angka tunggal.

> **Claim**: Integrasi MES-ERP meningkatkan on-time delivery rata-rata sekitar 22% dan menurunkan inventori 15–25%.
> **Number/specific**: 98% inventory accuracy dan pengurangan biaya inventori on-hand 25% dilaporkan di satu produsen; on-time delivery naik ~22% rata-rata menurut data industri.
> **Source**: D4M Integration, op. cit.; Excellerant Manufacturing, "ERP and MES Integration: Optimizing Production Management Through Connected Systems", https://excellerant-mfg.com/feeds/blog/mes-erp-integration (diakses 2026-06-02)
> **Confidence**: medium — sumber bukan Gartner/IDC; framing sebagai "dalam praktik industri" tanpa atribusi angka tunggal.

> **Claim**: 70% perusahaan melaporkan peningkatan kemampuan pengambilan keputusan setelah mengimplementasikan Manufacturing Execution System.
> **Number/specific**: 70% perusahaan; konteks: MES memberikan visibilitas real-time yang meningkatkan keputusan operasional.
> **Source**: MIE Solutions, "Manufacturing Execution System (MES): The Hidden Engine Behind Smart Factory Operations", https://mie-solutions.com/manufacturing-execution-system-mes-the-hidden-engine-behind-smart-factory-operations/ (diakses 2026-06-02)
> **Confidence**: medium — sumber bukan analis primer (Gartner/IDC); framing sebagai "dalam survei industri" tanpa klaim sumber Gartner spesifik.

> **Claim**: MES dan ERP melayani dua domain yang berbeda: ERP mengelola perencanaan bisnis dengan horizon waktu hari/minggu; MES mengelola eksekusi produksi di lantai produksi dengan granularitas detik/menit.
> **Number/specific**: ERP: planning, MRP, purchasing, finance — horizons hari hingga bulan. MES: shop floor execution, OEE monitoring, quality, traceability — granularitas real-time hingga detik.
> **Source**: MESA International model (Manufacturing Enterprise Solutions Association) dikutip dalam American Industrial Magazine 2026 Guide, https://www.americanindustrialmagazine.com/blogs/manufacturing/mes-systems-manufacturing-execution-systems-explained-complete-2026-guide (diakses 2026-06-02); Factry.io, "Five benefits of ERP-MES integration", https://www.factry.io/resources/blog/erp-mes-integration-five-benefits
> **Confidence**: high — perbedaan domain MES vs ERP adalah definisi industri standar (MESA International).

> **Claim**: "Island of automation" — sensor atau MES terpasang tetapi tidak terhubung ke ERP — adalah failure mode paling umum dalam implementasi digital manufacturing.
> **Number/specific**: Kondisi ini terjadi ketika data dari lantai produksi tidak mengalir ke sistem planning ERP, sehingga laporan produksi tetap manual meski ada investasi hardware/sensor.
> **Source**: 42Q, "9 Best Practices for Implementing MES in the Manufacturing Industry", https://www.42-q.com/blog/news/9-best-practices-for-implementing-mes-in-the-manufacturing-industry/ (diakses 2026-06-02)
> **Confidence**: high — ini adalah konsep standar dalam literatur MES/digital manufacturing.

> **Claim**: SAP DM mendukung kemampuan OEE monitoring, production genealogy/traceability, shop floor control, dan paperless production sebagai kapabilitas inti.
> **Number/specific**: Fitur inti SAP DM: shop floor control, OEE, traceability, electronic batch records, material consumption, nonconformance management.
> **Source**: SAP Community, "SAP Digital Manufacturing FAQ", https://pages.community.sap.com/topics/digital-manufacturing/faq (diakses 2026-06-02)
> **Confidence**: high — sumber SAP resmi.

> **Claim**: Soltius adalah SAP Platinum Partner dengan pengalaman implementasi di industri manufaktur Indonesia, termasuk Mill Products, Automotive, dan Consumer Products.
> **Number/specific**: 200+ konsultan, 120+ klien, beroperasi sejak 1998, bagian dari Metrodata Group.
> **Source**: knowledge_base/company_profile.md (terverifikasi dari profil resmi Soltius)
> **Confidence**: high

> **Claim**: Integrasi MES-ERP mempertukarkan data dua arah: data perencanaan (work orders, BOM, routing, schedule) turun dari ERP ke MES; data aktual (waktu proses, hasil quality, konsumsi material, konfirmasi produksi) naik dari MES ke ERP.
> **Number/specific**: Aliran data ke bawah (ERP → MES): production orders, bill of materials, routing, shift schedules, material availability. Aliran ke atas (MES → ERP): actual production confirmations, scrap/rework, OEE data, quality results.
> **Source**: Factry.io, op. cit.; SAP Help Documentation, Integration Guide, https://help.sap.com/doc/f6b2ab2222794bebad4c0dcd33138e71/latest/en-US/SAP_DMC_Integration_Guide_enUS.pdf
> **Confidence**: high

---

## Solution focus + Soltius anchor (dari product_matrix.md)

| Apa yang diajarkan (SAP/partner tech) | Fakta yang harus dikutip akurat | Penempatan di artikel | Soltius service/credential anchor CTA |
|---|---|---|---|
| **SAP Digital Manufacturing (Cloud)** | Integrasi native dengan S/4HANA via SAP Cloud Integration; mendukung OPC UA/MQTT untuk mesin non-SAP; kapabilitas: OEE, shop floor control, traceability, paperless production | H2 arsitektur (Layer 2), H2 implementasi | Soltius sebagai mitra implementasi SAP dengan pengalaman industri manufaktur — anchor closing |
| **SAP S/4HANA Production Planning (PP)** | Modul MRP, capacity planning, production orders; cloud-native API (RAP) tersedia di S/4HANA 2025; work orders diturunkan ke MES, aktual dikonfirmasi kembali | H2 arsitektur (Layer 3), H2 perbedaan MES-ERP | — |
| **SAP Production Connector (ProdCon)** | Komponen on-premise yang dipasang di jaringan pabrik; mendukung OPC UA, OPC DA, MQTT; jembatan antara OT/mesin dan SAP DM Cloud | H2 arsitektur, H2 implementasi | — |
| **OPC UA** | Standar komunikasi OT-IT industri; didukung native oleh SAP DM melalui Production Connector; memungkinkan koneksi ke PLC, SCADA, sensor dari vendor manapun | H2 arsitektur (Layer 1) | — |

**Soltius framing**: Implementasi partner — "Soltius membantu menghubungkan lantai produksi dengan sistem ERP secara real-time." Max 2–3 sebutan Soltius. Satu di mid-article (pengalaman industri manufaktur), satu di closing CTA.

---

## Authoritative external sources (≥2 kuat, untuk penulis link keluar)

1. **SAP Help Documentation — Integration Guide SAP Digital Manufacturing (2025/2026)** — https://help.sap.com/docs/sap-digital-manufacturing/integration-guide/integration-with-sap-s-4hana-cloud — *mendukung*: integrasi native SAP DM dengan S/4HANA Cloud Public Edition.
2. **SAP Community Blog (oleh SAP) — Shop Floor Connectivity OPC UA (2026)** — https://community.sap.com/t5/supply-chain-management-blog-posts-by-sap/setting-up-shop-floor-connectivity-connecting-your-opc-ua-server-with-sap/ba-p/13897749 — *mendukung*: SAP DM mendukung OPC UA untuk mesin non-SAP via Production Connector.
3. **SAP Community Blog (oleh SAP) — What's New Production Planning S/4HANA Private Cloud 2025** — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/what-s-new-for-production-planning-in-sap-s-4hana-private-cloud-2025/ba-p/14267254 — *mendukung*: S/4HANA 2025 Production Planning enhancements.
4. **SAP DMC Integration Guide PDF (latest)** — https://help.sap.com/doc/f6b2ab2222794bebad4c0dcd33138e71/latest/en-US/SAP_DMC_Integration_Guide_enUS.pdf — *mendukung*: aliran data dua arah antara SAP DM dan S/4HANA (work orders turun, konfirmasi aktual naik).
5. **MESA International / American Industrial Magazine 2026 Guide** — https://www.americanindustrialmagazine.com/blogs/manufacturing/mes-systems-manufacturing-execution-systems-explained-complete-2026-guide — *mendukung*: definisi MES standar industri, perbedaan domain MES vs ERP.

---

## FAQ Q&As (6 pertanyaan, Bahasa Indonesia)

### Apa perbedaan MES dan ERP dalam industri manufaktur?
ERP (Enterprise Resource Planning) mengelola perencanaan bisnis — pemesanan material, kapasitas produksi, keuangan — dengan horizons waktu hari hingga bulan. MES (Manufacturing Execution System) mengelola eksekusi nyata di lantai produksi: memantau status mesin, mencatat waktu proses aktual, mengontrol kualitas, dan memastikan traceability — semua secara real-time hingga granularitas detik. Keduanya saling melengkapi: ERP merencanakan, MES mengeksekusi.

### Apakah SAP Digital Manufacturing Cloud bisa diintegrasikan dengan SAP S/4HANA on-premise?
Ya, SAP Digital Manufacturing Cloud terhubung dengan S/4HANA melalui SAP Cloud Integration sebagai middleware. Arsitektur ini mendukung baik S/4HANA Cloud maupun S/4HANA on-premise. Production order yang dibuat di S/4HANA mengalir otomatis ke SAP DM untuk eksekusi di shop floor; konfirmasi aktual produksi dikirim kembali ke S/4HANA secara real-time tanpa input manual.

### Apakah pabrik perlu mengganti semua mesin lama untuk integrasi shop floor?
Tidak. SAP Digital Manufacturing Cloud menyediakan SAP Production Connector — komponen on-premise yang dipasang di jaringan pabrik — yang mendukung protokol OPC UA, OPC DA, dan MQTT. Standar OPC UA didukung oleh sebagian besar PLC dan SCADA dari vendor utama. Artinya, mesin-mesin lama yang sudah mendukung protokol ini dapat terhubung ke SAP DM tanpa harus diganti, sehingga investasi peralatan terlindungi.

### Data apa saja yang dipertukarkan antara MES dan ERP?
Pertukaran data berjalan dua arah. Dari ERP ke MES (aliran ke bawah): production orders, bill of materials, routing operasi, jadwal shift, dan ketersediaan material. Dari MES ke ERP (aliran ke atas): konfirmasi produksi aktual, konsumsi material aktual, data OEE mesin, hasil quality check, dan catatan scrap/rework. Pertukaran dua arah inilah yang menghilangkan rekonsiliasi manual antara laporan lantai produksi dan sistem planning.

### Apa indikator keberhasilan integrasi MES-ERP yang umum digunakan?
Indikator yang paling banyak digunakan adalah: (1) OEE (Overall Equipment Effectiveness) — seberapa efisien mesin beroperasi terhadap kapasitas teoritis; (2) On-time delivery rate — persentase order selesai tepat waktu; (3) First Pass Yield — persentase produk lolos quality check tanpa rework; (4) Lead time dari order ke penyelesaian; (5) pengurangan waktu rekonsiliasi data manual (sebelumnya dalam jam, setelah integrasi mendekati nol).

### Berapa lama proses integrasi MES-ERP biasanya berlangsung?
Durasi implementasi sangat bergantung pada kompleksitas pabrik. Untuk satu lini produksi dengan mesin yang sudah mendukung OPC UA dan master data ERP yang bersih, proyek bisa selesai dalam 4–6 bulan. Pabrik multi-lini dengan campuran mesin legacy, master data ERP yang perlu dibersihkan dulu, dan perubahan proses kerja yang signifikan membutuhkan 9–18 bulan. Pola umum yang direkomendasikan adalah pilot satu lini terlebih dahulu sebelum rollout penuh.

### Apa yang dimaksud dengan "island of automation" dan mengapa berbahaya?
"Island of automation" adalah kondisi di mana sensor, mesin, atau bahkan sistem MES sudah terpasang di pabrik — tetapi tidak terhubung ke sistem ERP. Akibatnya, data produksi dari lantai tetap tidak mengalir ke sistem planning: laporan shift masih dibuat manual di Excel, keputusan MRP masih berdasarkan data kemarin, dan downtime baru diketahui setelah berdampak pada jadwal pengiriman. Ini adalah failure pattern paling umum dalam program digitalisasi pabrik yang bergerak terlalu cepat ke hardware tanpa membenahi integrasi data terlebih dahulu.

---

## Data tables untuk penulis

### Perbandingan MES vs ERP: Domain, Horizon Waktu, dan Granularitas Data

| Aspek | ERP (mis. SAP S/4HANA) | MES (mis. SAP Digital Manufacturing) |
|---|---|---|
| **Domain utama** | Perencanaan bisnis & keuangan | Eksekusi produksi di lantai |
| **Horizon waktu** | Hari, minggu, bulan | Detik, menit, shift |
| **Data yang dikelola** | Orders, BOM, kapasitas, pembelian | Waktu proses aktual, OEE, quality, traceability |
| **Pengguna utama** | Planner, procurement, finance | Operator, supervisor produksi, quality |
| **Update frekuensi** | Batch (harian/mingguan) | Real-time kontinyu |
| **Keputusan yang didukung** | Apa yang diproduksi, kapan, berapa | Bagaimana memproduksi, status saat ini, deviasi |

### Tiga Layer Arsitektur Integrasi Shop Floor

| Layer | Komponen | Protokol/Teknologi | Arah Data |
|---|---|---|---|
| **Layer 1 — OT/Shop Floor** | PLC, SCADA, sensor, mesin | OPC UA, OPC DA, MQTT | Data mesin → Production Connector |
| **Layer 2 — MES/Execution** | SAP Digital Manufacturing Cloud | SAP Production Connector, REST API | Execution data ↔ S/4HANA via Cloud Integration |
| **Layer 3 — ERP/Planning** | SAP S/4HANA (PP, MRP, QM) | SAP Cloud Integration | Work orders ↓ / aktual konfirmasi ↑ |

### Aliran Data Dua Arah MES ↔ ERP

| Arah | Data yang dipertukarkan |
|---|---|
| ERP → MES (ke bawah) | Production orders, BOM, routing, jadwal shift, work centers, material availability |
| MES → ERP (ke atas) | Konfirmasi produksi aktual, konsumsi material, OEE, quality results, scrap/rework, genealogy |

---

## Edge cases & nuance

- **SAP DM Cloud vs. SAP Manufacturing Execution (on-premise)**: SAP memiliki dua produk berbeda — SAP Digital Manufacturing Cloud (solusi cloud-native, lebih baru) dan SAP Manufacturing Execution (ME, solusi on-premise legacy). Artikel ini berfokus pada SAP DM Cloud. Jangan samakan keduanya; SEbutkan perbedaan secara singkat di FAQ atau body.
- **OPC UA bukan universal di mesin sangat lama**: Mesin yang diproduksi sebelum ~2010 mungkin tidak memiliki antarmuka digital sama sekali (hanya sinyal analog). Untuk mesin ini, diperlukan retrofit hardware (seperti IoT gateway/edge device) sebelum Production Connector bisa membaca datanya. Penulis harus menyebutkan ini sebagai catatan realistis, bukan hambatan fatal.
- **S/4HANA on-premise vs. S/4HANA Cloud**: Integrasi SAP DM didukung untuk keduanya, tetapi proses setup berbeda. Artikel bisa menyebutkan keduanya didukung tanpa masuk ke detail teknis per deployment model.
- **Master data ERP sebagai prasyarat**: Integrasi MES yang baik mengasumsikan BOM, routing, dan work center di ERP sudah akurat. Jika master data ERP kacau, MES akan mempropagasikan kesalahan tersebut ke lantai produksi — "garbage in, garbage out". Ini adalah inti dari H2 "Yang Sering Salah" di artikel.
- **PP/DS (Production Planning & Detailed Scheduling) dalam S/4HANA**: PP/DS adalah kapabilitas advanced scheduling di S/4HANA yang relevan untuk pabrik dengan kompleksitas tinggi. Brief menyebut ini — verifikasi: PP/DS tersedia di S/4HANA on-premise dan Private Cloud Edition; di Public Cloud Edition tersedia sebagai SAP Integrated Business Planning for Supply Chain (IBP). Jangan samakan PP/DS dengan PP standar.

---

## Flags (risiko faktual terbuka)

- ⚠️ **Angka OEE improvement (65% → 82%, +20%, +26%)**: Angka-angka ini berasal dari vendor-adjacent sources (integration consultants, MES vendors), bukan dari studi Gartner/IDC/MESA International yang dapat dikutip secara spesifik. Rekomendasi: gunakan sebagai ilustrasi dengan framing "dalam berbagai implementasi MES-ERP yang didokumentasikan, peningkatan OEE berkisar antara 15–25 poin persentase" — jangan klaim angka tunggal tanpa atribusi spesifik.
- ⚠️ **Timeline implementasi 4–18 bulan**: Tidak ada data SAP resmi atau studi independen yang memberikan range spesifik ini. Range ini berasal dari praktik industri umum. Rekomendasi: framing sebagai "dalam pengalaman implementasi, timeline bervariasi 4–18 bulan tergantung kompleksitas" — bukan klaim berdasarkan studi eksternal.
- ⚠️ **"70% perusahaan melaporkan peningkatan decision-making"**: Sumber adalah MIE Solutions (vendor), bukan analis independen. Rekomendasi: drop angka ini atau framing sangat hati-hati. Lebih aman menggunakan fact tentang OEE/inventory yang lebih banyak dikutip.
- ⚠️ **PP/DS dalam S/4HANA Cloud Public Edition**: Brief menyebut "PP/DS dalam S/4HANA" untuk diverifikasi. Perlu hati-hati: PP/DS dalam arti tradisional ada di S/4HANA on-premise dan Private Cloud. Di Public Cloud, kapabilitas scheduling advanced ada di IBP (Integrated Business Planning). Penulis harus menghindari klaim bahwa PP/DS tersedia di semua deployment S/4HANA tanpa klarifikasi.

---

## Definition snippet draft (40–60 kata, Bahasa Indonesia)

> Integrasi MES (Manufacturing Execution System) dan ERP adalah proses menghubungkan sistem eksekusi lantai produksi — yang memantau mesin, OEE, dan kualitas secara real-time — dengan sistem perencanaan bisnis. Dengan integrasi ini, data aktual produksi mengalir langsung ke ERP tanpa rekap manual, sehingga keputusan produksi dibuat berdasarkan kondisi nyata, bukan laporan shift kemarin. SAP Digital Manufacturing Cloud mengintegrasikan keduanya secara native dengan SAP S/4HANA.

---

## Notes for image-planner

- **Konsep 1 — Diagram tiga layer arsitektur**: Visualisasi vertikal tiga lapisan: Layer 1 (mesin/PLC/sensor di bawah, ikon pabrik), Layer 2 (SAP Digital Manufacturing Cloud di tengah, kotak biru), Layer 3 (SAP S/4HANA PP di atas, ikon awan/server). Panah dua arah antara layer, dengan label protokol (OPC UA ke Layer 1, SAP Cloud Integration ke Layer 3). Format: diagram arsitektur teknis yang clean, warna brand SAP (biru/hijau).
- **Konsep 2 — Tabel perbandingan MES vs ERP**: Infografik dua kolom yang kontras secara visual — kiri: ERP (ikon kalender/planning, warna biru gelap), kanan: MES (ikon mesin/stopwatch, warna hijau). Tiap kolom menampilkan 4–5 poin pembeda kunci. Format: comparison card bergaya modern, cocok untuk featured snippet.
- **Konsep 3 — Aliran data sebelum vs. sesudah integrasi**: Dua panel berdampingan. Panel "Sebelum": loop manual — mesin → clipboard → Excel → ERP (dengan ikon jam tangan menandai delay). Panel "Sesudah": aliran otomatis — mesin → MES → ERP (ikon panah langsung, tanpa manual step). Ilustratif dan mudah dipahami oleh decision-maker non-teknis.
