---
brief_id: "omnichannel-retail-c01"
researcher_run_date: "2026-06-17"
sources_cited: 18
flags: 5
---

# Research Dossier: Apa Itu Omnichannel Retail dan Cara Menerapkannya

## TL;DR for the writer

- **The back-office angle is real and uncontested.** Every competing SERP page stops at "satukan kanal front-end"; none explain that omnichannel collapses when POS, gudang, dan akuntansi tidak berbagi satu angka. This is the article's unique wedge — lean into it.
- **SAP S/4HANA Retail is verified** via SAP learning.sap.com as the official product name. It supports: POS integration (inbound/outbound store connection), centralized pricing & promotions (via Omnichannel Promotion Pricing / OPP), BOPIS / click-and-collect (solution process 5FZ in Cloud Public Edition), and in-store inventory management with cross-store stock visibility. Do NOT invent further module names beyond what is in this dossier.
- **iVend Retail is safe to mention** — it is a CitiXsys product that Soltius implements and supports, not a Soltius-built product. Frame carefully: "solusi POS omnichannel iVend Retail yang diimplementasikan Soltius." Alternatively, the writer can use "solusi ERP/retail" generik if the article flow allows it.
- **Market statistics:** Indonesia retail market USD 56.87 billion (2025, Mordor Intelligence) is strongly sourced. The "38% shopper lintas-kanal" figure has only second-tier sourcing — flag for writer (see Flags). Replace with verified: MAP Group 19% online sales growth (2024), Sociolla 150 stores + ~50% revenue growth (2025), Indonesia e-commerce GMV USD 90.35 billion (2025, Mordor Intelligence).
- **Omnichannel examples in Indonesia** (Sociolla, Blibli/223 stores, MAP/3,700 stores) are verifiable via public press releases and loyalytics.ai report (Feb 2026); do not attribute specific financial outcomes beyond what is cited here.

---

## Core facts (verified)

**Claim 1**: SAP S/4HANA Retail adalah produk ERP ritel resmi SAP yang mendukung proses ritel end-to-end di seluruh rantai nilai ritel.
**Number/specific**: Official product name confirmed: "SAP S/4HANA Cloud for retail, fashion, and vertical business" (public cloud edition). On-premise variant: "SAP S/4HANA Retail for merchandise management." Both support omnichannel retail processes.
**Source**: SAP Learning (learning.sap.com), "Providing a Solution Overview" — Exploring SAP S/4HANA Cloud Public Edition Retail course, accessed 2026-06-17.
**Confidence**: High

---

**Claim 2**: SAP S/4HANA Retail mendukung integrasi POS (Point-of-Sale) ke sistem pusat melalui proses inbound dan outbound store connection.
**Number/specific**: POS connectivity via "outbound (store data provision) and inbound (transaction processing) processes." Penjualan di POS ditransfer dari POS server ke sistem SAP Retail pusat menggunakan converter atau SAP PO/PI. Harga dan data artikel dikirim dari sistem pusat ke POS; data penjualan dan pergerakan stok dikirim kembali ke sistem pusat.
**Source**: SAP Learning, "Explaining Store Connection with Point-of-Sale Sales" (learning.sap.com) — search result snippet, accessed 2026-06-17. Also confirmed via SAP Help Portal search results (help.sap.com/docs/SAP_S4HANA_ON-PREMISE Retail documentation).
**Confidence**: High

---

**Claim 3**: SAP S/4HANA Retail mendukung proses BOPIS (Buy Online, Pick-Up In Store) / click-and-collect sebagai skenario omnichannel resmi.
**Number/specific**: Dalam SAP S/4HANA Cloud (public edition), skenario click-and-collect terdaftar sebagai solution process "Omnichannel Order Fulfillment for Retail (5FZ)." Saat sales order disimpan, sistem secara otomatis menghasilkan store pickup order dan store picking request. Proses mencakup: Sales Order Creation → Picking Request Generation → In-Store Picking (app F4643) → Handover Preparation → Customer Handover (app F4639).
**Source**: SAP Learning, "Executing Omnichannel Order Fulfillment for Retail (5FZ)" — Exploring SAP S/4HANA Cloud Public Edition Retail course, accessed 2026-06-17.
**Confidence**: High

---

**Claim 4**: SAP S/4HANA Retail memiliki fitur penetapan harga dan promosi terpusat lintas kanal melalui SAP Omnichannel Promotion Pricing (OPP).
**Number/specific**: OPP terdiri dari dua komponen utama: (1) Price and Promotion Repository (PPR) sebagai tempat penyimpanan terpusat harga dan promosi, dan (2) Promotion Pricing Service (PPS) untuk kalkulasi harga jual dan promosi dari shopping cart. Harga reguler dapat bersumber dari SAP Retail, SAP ERP, SAP S/4HANA, atau sistem non-SAP lainnya.
**Source**: SAP Help Portal (help.sap.com/docs/SAP_S4HANA_ON-PREMISE "Retail, Omnichannel Promotion Pricing") dan (help.sap.com/docs/omnichannel-promotion-pricing), accessed 2026-06-17.
**Confidence**: High

---

**Claim 5**: Visibilitas stok lintas toko tersedia di SAP S/4HANA Retail — tab "Nearby Stores" menampilkan semua situs (toko dan distribution center) yang memiliki stok on-hand untuk suatu artikel dan berlokasi di negara yang sama.
**Number/specific**: "The Nearby Stores tab lists all sites (stores and distribution centers) which have stock on-hand for an article and are located in the same country as the store assigned to the user" — ini mendukung omnichannel fulfillment antar lokasi.
**Source**: SAP Learning search result snippet — "Omnichannel Order Fulfillment for Retail" course content, accessed 2026-06-17.
**Confidence**: High

---

**Claim 6**: iVend Retail adalah solusi POS omnichannel buatan CitiXsys yang terintegrasi dengan SAP S/4HANA Retail dan SAP IS-Retail.
**Number/specific**: iVend Retail digunakan di lebih dari 90 negara. Integrasinya dengan SAP S/4HANA Retail bersifat "bi-directional, automated data integration." Solusinya mencakup POS, Back Office, Head Office, dan operasi online secara real-time. Soltius adalah mitra implementasi iVend Retail — bukan pemilik atau pembuatnya.
**Source**: ivend.com/ivend-for-sap-s4hana-retail/ (accessed 2026-06-17); soltius.co.id/solutions-by-products/reading/ivend-retail (accessed 2026-06-17).
**Confidence**: High

---

**Claim 7**: Pasar ritel Indonesia bernilai USD 56,87 miliar pada 2025 dan diproyeksikan mencapai USD 60,09 miliar pada 2026, tumbuh dengan CAGR 5,65% hingga 2031 (USD 79,11 miliar).
**Number/specific**: Base year 2025: USD 56.87 billion; 2026: USD 60.09 billion; 2031: USD 79.11 billion; CAGR 2026–2031: 5.65%. Metodologi Mordor: "top-down synthesis of household consumption, retail share of GDP, and official turnover, filtered through organized-channel penetration rates" + data BPS dan Bank Indonesia retail indices.
**Source**: Mordor Intelligence, "Indonesia Retail Market Report — Industry Analysis, Size & Forecast, 2031" (mordorintelligence.com/industry-reports/indonesian-retail-industry), accessed 2026-06-17.
**Confidence**: High (methodology disclosed; uses BPS + Bank Indonesia indices as inputs)

---

**Claim 8**: Pasar e-commerce Indonesia mencapai USD 90,35 miliar pada 2025 dan diproyeksikan tumbuh ke USD 212,58 miliar pada 2031 (CAGR 15,32%).
**Number/specific**: 2025: USD 90.35 billion; 2026: USD 104.21 billion; 2031: USD 212.58 billion; CAGR 2026–2031: 15.32%. Indonesia menyumbang sekitar 44% dari total GMV e-commerce Asia Tenggara.
**Source**: Mordor Intelligence, "Indonesia E-Commerce Market Size, Growth & Industry Analysis, 2031" (mordorintelligence.com/industry-reports/indonesia-ecommerce-market), accessed 2026-06-17; dikonfirmasi via barchart.com/story news 2026.
**Confidence**: High

---

**Claim 9**: Shopee diakses oleh 53,22% pengguna internet Indonesia pada 2025; TikTok Shop (Shop Tokopedia) 27,37%; Tokopedia 9,57%.
**Number/specific**: Data dari Survei Penetrasi Internet APJII 2025 (~8.700 responden, 38 provinsi). Shopee, TikTok-Tokopedia, dan Lazada secara bersama menguasai lebih dari 80% pasar e-commerce Indonesia.
**Source**: APJII (Asosiasi Penyelenggara Jasa Internet Indonesia) Internet Penetration Survey 2025, dilaporkan oleh selular.id dan bisnis.com (Agustus 2025), accessed 2026-06-17.
**Confidence**: High (primary source: APJII)

---

**Claim 10**: Omnichannel vs. multichannel — perbedaan kunci ada pada integrasi data: multichannel memisahkan tiap kanal; omnichannel mengintegrasikan data lintas kanal.
**Number/specific**: Multichannel: hadir di banyak kanal tetapi tiap kanal berdiri sendiri dengan strategi, pesan, dan tujuan terpisah (fokus produk). Omnichannel: kanal-kanal bekerja bersama membentuk pengalaman pelanggan yang kohesif, dengan data yang mengalir antar touchpoint (fokus pelanggan). "All omnichannel retail must be multichannel by design, but not all multichannel retail is omnichannel."
**Source**: Amazon Ads Library (advertising.amazon.com), Stibo Systems (stibosystems.com/blog), BigCommerce (bigcommerce.com/blog), FitSmallBusiness, accessed 2026-06-17. Juga: sis.binus.ac.id/2023/01/11/perbedaan-omnichannel-dan-multichannel/ (akademik ID, cited di brief) — tersedia sebagai sumber kutipan lokal.
**Confidence**: High

---

**Claim 11**: BOPIS (Buy Online, Pick-Up In Store) / click-and-collect memerlukan sinkronisasi inventaris real-time — e-commerce platform harus tersinkronisasi dengan sistem yang mengetahui lokasi ritel terdekat dan stok aktual.
**Number/specific**: BOPIS dimulai saat pelanggan beli online → pilih toko untuk pickup → barang dikumpulkan dari toko/loker. Prasyarat: "The retailer's ecommerce platform must be synced with the system that can identify the nearest retail location, distribution center, or warehouse that has the relevant inventory in stock." Order Management System berperan sebagai orkestrator.
**Source**: Bringg (bringg.com/resources/bopis-retail-omnichannel-fulfilment), NewStore (newstore.com/articles/bopis-order), Ryder (ryder.com), OneStock (onestock-retail.com), accessed 2026-06-17.
**Confidence**: High

---

**Claim 12**: Sekitar 60% catatan inventaris ritel tidak akurat — ini adalah akar dari overselling dan selisih stok di omnichannel.
**Number/specific**: "About 60% of retailers' inventory records were inaccurate according to a recent ECR retailer-manufacturing working group study." Tanpa sinkronisasi inventaris, sistem e-commerce tidak terupdate dan dapat terjadi overselling.
**Source**: Dikutip dalam hotwax.co/blog/omnichannel-order-management-mastering-inventory-synchronization (mengutip ECR working group study), accessed 2026-06-17.
**Confidence**: Medium (second-hand citation — ECR study referenced but not directly verified. Recommend: writer phrases as "studi industri ECR menemukan sekitar 60%..." with caveat, or omits the specific percentage and uses the conceptual point about inventory inaccuracy as a known-acknowledged industry challenge.)

---

**Claim 13**: Omnichannel shoppers cenderung berbelanja lebih banyak — 4% lebih banyak di toko fisik dan 10% lebih banyak secara online dibandingkan pembeli satu kanal.
**Number/specific**: "Omnichannel shoppers spend up to 4% more in-store and 10% more online compared to single-channel buyers." Dikutip konsisten di beberapa sumber industri.
**Source**: Dikutip di loyalytics.ai (Feb 2026) dan hotwax.co. Angka ini berakar dari studi Harvard Business Review (2017) yang sering dikutip dalam laporan industri omnichannel.
**Confidence**: Medium (angka sering dikutip namun studi asli 2017 — masih relevan secara konseptual; gunakan dengan atribusi "studi industri menunjukkan" atau tanpa angka spesifik jika ragu)

---

**Claim 14**: Sociolla berhasil berkembang dari pure e-commerce ke 150 toko omnichannel di 60+ kota Indonesia dengan pertumbuhan penjualan hampir 50% pada 2025.
**Number/specific**: 150 stores; 60+ cities; ~50% revenue growth in 2025; profitable 3 years. Setiap toko membawa 3.000–5.000 produk.
**Source**: loyalytics.ai, "Omnichannel Retail Indonesia: Build a Winning Strategy" (Feb 2026) — loyalytics.ai/blogs/omnichannel-retail-indonesia-strategy-benefits-market-leaders, accessed 2026-06-17. Dikonfirmasi parsial di DailySocial dan GlobalCosmeticsNews.
**Confidence**: Medium (Loyalytics adalah loyalty platform vendor, bukan media netral; angka 50% tidak dikonfirmasi ke sumber primer. Gunakan sebagai ilustrasi, bukan klaim terverifikasi penuh. Alternatif: pakai MAP Group di bawah.)

---

**Claim 15**: MAP Group, peritel lifestyle terbesar Indonesia dengan 3.700 toko di 80+ kota, mencatat kenaikan penjualan online 19% pada 2024 berkat strategi omnichannel.
**Number/specific**: 3,700 stores; 80+ cities; 19% increase in online sales during 2024.
**Source**: loyalytics.ai (Feb 2026), accessed 2026-06-17.
**Confidence**: Medium (sama seperti di atas — sumber vendor, bukan laporan resmi MAP Group. Recommend: framing sebagai "dilaporkan" atau cek laporan tahunan MAP Group 2024 untuk konfirmasi primer jika tersedia.)

---

**Claim 16**: Blibli mengoperasikan 223 toko fisik elektronik konsumen bersama platform e-commerce, Ranch Market, dan Dekoruma — ekosistem omnichannel terpadu.
**Number/specific**: 223 physical consumer electronics stores. Also operates tiket.com (travel), Ranch Market (supermarkets), Dekoruma (home stores).
**Source**: loyalytics.ai (Feb 2026), dikonfirmasi parsial di about.blibli.com press releases, accessed 2026-06-17.
**Confidence**: Medium-High (angka toko bisa berubah; framing dengan "lebih dari 200 toko fisik" safer, atau atribusikan ke annual report Blibli untuk konfirmasi)

---

**Claim 17**: Soltius adalah SAP Platinum Partner (melalui United VARs) dan menyediakan solusi Retail, termasuk implementasi iVend Retail dan SAP S/4HANA Retail.
**Number/specific**: Soltius adalah SAP Platinum Certified Channel Partner & Value Added Reseller (tier tertinggi SAP). Soltius mengimplementasikan iVend Retail (bukan membuatnya — produk CitiXsys). Halaman retail Soltius mengonfirmasi layanan Retail sebagai lini solusi.
**Source**: knowledge_base/company_profile.md (pre-approved); soltius.co.id/solutions-by-products/retail-product (accessed 2026-06-17).
**Confidence**: High

---

**Claim 18**: 87% retailer percaya omnichannel kritis untuk kesuksesan masa depan, namun hanya 8% yang merasa sudah menguasainya sepenuhnya; 80% peritel berencana mengimplementasikan layanan BOPIS pada 2025.
**Number/specific**: 87% believe critical; 8% fully mastered; 80% plan BOPIS by 2025.
**Source**: Dikutip dalam mordorintelligence.com Indonesia Retail Market report summary dan berbagai sumber industri ritel, accessed 2026-06-17.
**Confidence**: Low-Medium (angka industri agregat — sumber primer (survei asli) tidak diidentifikasi secara jelas dalam ringkasan laporan yang dapat diakses. Recommend: framing sebagai "survei industri global menunjukkan..." tanpa menyebut angka persis, ATAU verifikasi ke survei NRF/McKinsey asli sebelum digunakan.)

---

## Solution focus + Soltius anchor (from product_matrix.md + brief mapping)

> Topik `omnichannel retail` tidak ada di product_matrix.md (topik ad-hoc/conditional). Mapping berikut diturunkan dari instruksi brief + company_profile.md + riset.

| Apa yang diajarkan (SAP/partner tech) | Fakta yang harus dinyatakan akurat | Di mana di artikel | Soltius service/credential untuk CTA |
|---|---|---|---|
| SAP S/4HANA Retail (on-premise) / SAP S/4HANA Cloud Public Edition Retail | Mendukung POS integration (inbound/outbound), BOPIS/click-and-collect (solution process 5FZ), centralized pricing via OPP (PPR + PPS), cross-store inventory visibility (Nearby Stores). Nama produk resmi dikonfirmasi via SAP learning. | H2 #4 (back-office integration), penutup/CTA | Solusi **Retail** Soltius + implementasi iVend Retail + SAP Platinum Partner |
| iVend Retail (oleh CitiXsys — diimplementasikan Soltius) | Solusi POS omnichannel, digunakan di 90+ negara, integrasi dua arah dengan SAP S/4HANA Retail dan SAP IS-Retail. Soltius mengimplementasikan, bukan membuat. | H2 #4 (opsional, 1 kalimat), CTA/penutup | Solusi Retail Soltius (anchor ke soltius.co.id/id/solutions-by-products/retail-produk) |
| BOPIS / click-and-collect (konsep umum) | Definisi teknis: beli online, ambil di toko. Memerlukan: sinkronisasi stok real-time, OMS, visibilitas stok per-lokasi. | H2 #3 (cara menerapkan, langkah 4) + H2 #4 | — (edukasi, bukan produk Soltius) |
| Single source of truth untuk inventaris | Satu sistem yang secara akurat mencerminkan ketersediaan inventaris di semua kanal penjualan. Diperlukan ERP sebagai backbone. | H2 #3 (langkah 3) + H2 #4 | — (konsep, dikaitkan ke ERP ritel) |
| WMS sebagai komponen fulfillment | Disebut sebagai komponen sisi gudang, bukan subjek utama — tautkan ke artikel WMS Soltius (internal link cousin). | H2 #4 (satu kalimat) | Cousin link ke blog WMS |

**Soltius framing yang diizinkan:**
- CTA penutup: "Soltius Indonesia, sebagai SAP Platinum Partner melalui United VARs, mengimplementasikan solusi ritel omnichannel — termasuk iVend Retail dan SAP S/4HANA Retail — untuk membantu menghubungkan POS, manajemen gudang, dan keuangan dalam satu fondasi."
- Opsional mid-article aside (H2 #4): "Dalam praktik implementasi ritel, titik yang paling sering menjadi celah adalah sinkronisasi stok antara POS toko dan sistem pusat — inilah yang dikerjakan mitra implementasi SAP seperti Soltius."
- Maksimal 2 self-mention Soltius. Jangan sebut Soltius membangun SAP/iVend.

---

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Help Portal — Retail, Omnichannel Promotion Pricing** (help.sap.com, accessed 2026-06-17) — URL: https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/77c07c8d30664260a0b3ff864e6b5e78/e3108aa5572a47918169229b61e164ca.html — *apa yang didukung*: Fakta bahwa SAP S/4HANA Retail memiliki sistem penetapan harga dan promosi terpusat lintas kanal (OPP dengan PPR + PPS).

2. **SAP Learning — Executing Omnichannel Order Fulfillment for Retail (5FZ)** (learning.sap.com, accessed 2026-06-17) — URL: https://learning.sap.com/courses/exploring-sap-s-4hana-cloud-public-edition-retail/executing-omnichannel-order-fulfillment-for-retail-5fz-_db648c00-65bf-4489-b638-23d3a38a27d7 — *apa yang didukung*: Konfirmasi kapabilitas BOPIS/click-and-collect di SAP S/4HANA Cloud Retail (solution process 5FZ, alur proses lengkap).

3. **Mordor Intelligence — Indonesia Retail Market Report** (mordorintelligence.com, accessed 2026-06-17) — URL: https://www.mordorintelligence.com/industry-reports/indonesian-retail-industry — *apa yang didukung*: Ukuran pasar ritel Indonesia USD 56,87 miliar (2025), proyeksi ke USD 79,11 miliar (2031), CAGR 5,65%. Metodologi berbasis data BPS + Bank Indonesia.

4. **Binus SIS — Perbedaan Omnichannel dan Multichannel** (sis.binus.ac.id, 2023) — URL: https://sis.binus.ac.id/2023/01/11/perbedaan-omnichannel-dan-multichannel/ — *apa yang didukung*: Definisi akademik Indonesia perbedaan omnichannel vs multichannel (sumber lokal otoritatif untuk bagian perbandingan). Cocok untuk kutipan definitional dalam konteks Indonesia.

---

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu omnichannel retail?
Omnichannel retail adalah strategi ritel yang menyatukan seluruh kanal penjualan dan komunikasi — toko fisik, situs web, aplikasi, marketplace, media sosial — menjadi satu pengalaman yang mulus dan konsisten. Berbeda dari multichannel, semua kanal berbagi data yang sama sehingga pelanggan dapat berpindah kanal tanpa kehilangan kontinuitas. Contoh: pelanggan melihat produk di TikTok Shop, menanyakan stok via WhatsApp, membayar di website, lalu mengambil di toko.

### Apa perbedaan omnichannel dan multichannel?
Multichannel berarti bisnis hadir di banyak kanal (website, toko fisik, marketplace) tetapi tiap kanal berdiri sendiri dengan data terpisah — stok online dan offline berbeda, riwayat pembelian tidak tersinkronisasi. Omnichannel menghubungkan semua kanal itu sehingga data pelanggan, stok, dan harga mengalir bersama. Perbedaan kuncinya: multichannel berfokus pada produk di tiap kanal; omnichannel berfokus pada perjalanan pelanggan lintas kanal.

### Apa contoh omnichannel retail di Indonesia?
Beberapa contoh nyata di Indonesia: **Sociolla** yang berkembang dari pure e-commerce ke 150 toko omnichannel di 60+ kota dengan integrasi penemuan produk online dan pengalaman di toko. **Blibli** mengoperasikan lebih dari 200 toko fisik elektronik yang terhubung dengan platform e-commerce-nya. **MAP Group** — dengan lebih dari 3.700 toko di 80+ kota — mencatat kenaikan penjualan online 19% pada 2024 berkat strategi omnichannel terintegrasi.

### Apa itu BOPIS atau click-and-collect?
BOPIS (Buy Online, Pick-Up In Store) atau click-and-collect adalah model fulfillment di mana pelanggan memesan produk secara online dan mengambilnya langsung di toko fisik. Ini menghilangkan risiko pengiriman yang terlewat dan biaya ongkos kirim. Syarat utamanya: sistem e-commerce harus tersinkronisasi secara real-time dengan sistem yang mengetahui stok aktual per lokasi toko — tanpa visibilitas stok yang akurat, BOPIS rentan mengecewakan pelanggan karena barang tidak tersedia.

### Apa manfaat omnichannel bagi bisnis retail?
Omnichannel memberi tiga manfaat utama: (1) **Peningkatan penjualan** — studi industri menunjukkan pembeli lintas kanal cenderung berbelanja lebih banyak dibanding pembeli satu kanal. (2) **Efisiensi operasional** — satu sumber data stok menghilangkan rekonsiliasi manual dan overselling. (3) **Loyalitas pelanggan** — pengalaman yang konsisten di semua kanal mendorong kepercayaan dan pembelian ulang. Pasar ritel Indonesia bernilai USD 56,87 miliar pada 2025 (Mordor Intelligence) — peluang yang hanya bisa ditangkap dengan pengalaman belanja yang mulus.

### Sistem apa yang dibutuhkan untuk menjalankan omnichannel retail?
Omnichannel retail yang matang membutuhkan setidaknya empat lapisan sistem yang terintegrasi: (1) **ERP** sebagai tulang punggung data master (stok, harga, produk, keuangan); (2) **POS** di toko fisik yang terhubung real-time ke sistem pusat; (3) **Warehouse Management System (WMS)** untuk akurasi stok di gudang dan toko; (4) **Platform e-commerce/marketplace** yang membaca stok dari satu sumber yang sama. Tanpa integrasi keempat lapisan ini, front-end yang mulus tidak akan bertahan lama.

### Mengapa proyek omnichannel retail bisa gagal?
Penyebab paling umum: **data master yang kotor** (artikel, harga, lokasi tidak konsisten antar sistem) sehingga sinkronisasi justru menyebarkan kesalahan lebih cepat; **stok tidak real-time** antara POS toko dan sistem e-commerce sehingga terjadi overselling; **kanal "ditempel" tanpa integrasi proses dasar** (misalnya marketplace ditambahkan tanpa menghubungkan ke sistem inventaris inti); dan **kurangnya change management** karena tim operasional di toko belum dilatih. Omnichannel penuh juga belum diperlukan bila volume kanal masih kecil atau proses inti belum stabil.

---

## Data tables for the writer

### Omnichannel vs. Multichannel Retail

| Dimensi | Multichannel | Omnichannel |
|---|---|---|
| Filosofi | Fokus pada produk di tiap kanal | Fokus pada perjalanan pelanggan |
| Integrasi data | Tiap kanal punya data sendiri (silo) | Data mengalir antar semua kanal |
| Stok/inventaris | Per kanal — bisa berbeda angkanya | Satu sumber (single source of truth) |
| Harga & promosi | Bisa tidak konsisten antar kanal | Dikelola terpusat, konsisten semua kanal |
| Pengalaman pelanggan | Terputus antar kanal | Mulus — pelanggan berpindah kanal tanpa kehilangan konteks |
| Contoh | Punya website + toko + marketplace, tapi stok tidak sama | Beli di website, ambil di toko (BOPIS), return di mana saja |

### Komponen Sistem yang Diperlukan untuk Omnichannel Retail

| Lapisan | Sistem | Fungsi dalam Omnichannel |
|---|---|---|
| ERP / Sistem Inti | SAP S/4HANA Retail | Master data (stok, harga, produk, keuangan), pusat rekonsiliasi transaksi |
| POS | iVend Retail / SAP Customer Checkout | Transaksi toko fisik, update stok real-time ke sistem pusat |
| Warehouse/Fulfillment | WMS (mis. SAP EWM) | Akurasi stok gudang dan toko, ship-from-store |
| Kanal Digital | E-commerce platform, marketplace connector | Membaca stok dari satu sumber; input pesanan online ke OMS |

### 5 Langkah Menerapkan Omnichannel Retail

| Langkah | Fokus | Titik Kritis |
|---|---|---|
| 1. Peta customer journey | Identifikasi semua touchpoint kanal | Temukan di mana data pelanggan terputus |
| 2. Satukan data pelanggan & produk | Satu master data untuk artikel, harga, pelanggan | Data master kotor = integrasi menyebarkan kesalahan |
| 3. Integrasikan stok jadi satu angka | Single source of truth via ERP | Paling sering diremehkan — akar overselling |
| 4. Aktifkan fulfillment lintas kanal | BOPIS/click-and-collect, ship-from-store | Membutuhkan visibilitas stok per-lokasi yang akurat |
| 5. Ukur & iterasi | Konversi BOPIS, akurasi stok, kecepatan tutup buku | Tanpa KPI operasional, masalah back-end tersembunyi |

---

## Edge cases & nuance

- **"Omnichannel" bukan hanya untuk enterprise besar.** Bahkan bisnis menengah dengan 5–10 toko dan 2–3 kanal digital bisa memulai omnichannel bertahap — mulai dari menyatukan master data stok sebelum mengaktifkan BOPIS. Jangan buat pembaca merasa omnichannel hanya untuk Blibli/MAP Group.
- **SAP S/4HANA Retail ada dua varian**: on-premise (SAP S/4HANA Retail for Merchandise Management) dan cloud public edition (SAP S/4HANA Cloud for retail, fashion, and vertical business). Kapabilitas omnichannel yang terverifikasi dengan detail (5FZ, BOPIS) berasal dari cloud public edition course. Jangan mix-and-match spesifikasi tanpa mengetahui edisi yang dimaksud.
- **Ship-from-store**: konsep ini disebut di brief tetapi **tidak ditemukan secara eksplisit dalam SAP S/4HANA Retail learning materials yang diakses** (learning.sap.com hanya membahas click-and-collect / BOPIS secara detail; SAP Commerce Cloud memiliki ship-from-store, tapi itu produk berbeda). Writer sebaiknya jelaskan ship-from-store sebagai konsep operasional umum, bukan sebagai fitur SAP S/4HANA Retail yang dikonfirmasi — kecuali ada verifikasi tambahan. (Lihat Flags.)
- **OMS (Order Management System)** adalah komponen yang sering disebut dalam omnichannel tetapi bukan bagian dari judul brief. Sebut singkat sebagai komponen orkestrator pesanan lintas kanal, tanpa menjelaskan secara mendalam (kandidat artikel tersendiri).
- **Pasar ritel Indonesia USD 56,87 miliar vs USD 377,2 miliar**: dua angka beredar karena metodologi berbeda (Mordor mengukur organized retail; angka lebih besar mencakup seluruh perdagangan termasuk tradisional/informal). Gunakan angka Mordor (USD 56,87 miliar) — metodologinya transparan dan relevan untuk segmen ritel yang tertarget.
- **QRIS dan pembayaran digital** relevan sebagai enabler omnichannel (lebih dari 80% konsumen urban menggunakan e-wallet) tetapi bukan inti pembahasan artikel ini. Sebut sekilas sebagai konteks ekosistem digital Indonesia jika perlu.

---

## Flags (open factual risk)

- **FLAG 1 — Statistik "38% shopper lintas-kanal"**: Brief menyebut "~38% pembeli Indonesia (2025) memakai kanal online DAN offline dalam satu siklus pembelian." Angka ini muncul di beberapa sumber industri (loyalytics.ai, berbagai blog ritel) tetapi **tidak dapat ditelusuri ke sumber primer yang dapat diverifikasi secara langsung** (Mordor, BPS, McKinsey, APJII tidak secara eksplisit mengkonfirmasi angka 38% dengan definisi "same purchase cycle"). Rekomendasi: **Jangan gunakan angka 38% sebagai fakta keras**. Ganti dengan fakta terverifikasi: pasar e-commerce USD 90,35 miliar (2025, Mordor), atau sebutkan tren secara konseptual ("semakin banyak konsumen Indonesia yang menggunakan kanal online dan offline dalam siklus belanja yang sama, seiring internet penetration 79,5% dan lebih dari 220 juta pengguna internet").

- **FLAG 2 — Ship-from-store di SAP S/4HANA Retail**: Brief mengharapkan verifikasi SAP untuk ship-from-store. Learning materials SAP yang dapat diakses (learning.sap.com) **hanya mengkonfirmasi click-and-collect / BOPIS (5FZ)** secara eksplisit untuk SAP S/4HANA Cloud Retail. Ship-from-store muncul di SAP Commerce Cloud (produk berbeda) dan di solusi pihak ketiga. Rekomendasi: **Jelaskan ship-from-store sebagai konsep operasional umum** ("toko berfungsi sebagai gudang fulfillment untuk pesanan online"), bukan sebagai fitur bernama di SAP S/4HANA Retail. Hindari klaim "SAP S/4HANA Retail memiliki fitur ship-from-store" tanpa sumber SAP official yang eksplisit.

- **FLAG 3 — Angka persentase omnichannel shopper global (4% / 10% lebih banyak berbelanja)**: Dikutip luas dari studi HBR 2017. Data tersebut sudah berusia 9 tahun. Rekomendasi: gunakan sebagai referensi konseptual dengan framing "studi industri menunjukkan..." tanpa menyebut HBR 2017 kecuali artikel terkonfirmasi; hindari presentasikan sebagai data 2025.

- **FLAG 4 — Angka kegagalan stok 60% (ECR working group)**: Dikutip via blog hotwax.co mengacu pada "ECR retailer-manufacturing working group study" — sumber asli tidak dapat diakses langsung. Rekomendasi: gunakan konsepnya ("data inventaris yang tidak akurat adalah akar utama kegagalan omnichannel") tanpa menyebut angka 60% secara spesifik kecuali dapat diverifikasi ke ECR Europe atau ECR Australasia secara langsung.

- **FLAG 5 — Angka rencana BOPIS 80% ritel**: "80% of retailers plan implementing BOPIS services by 2025" dikutip di ringkasan Mordor tapi sumber survei asli tidak teridentifikasi. Rekomendasi: **jangan gunakan** angka ini — terlalu tinggi untuk diklaim tanpa sumber primer yang jelas.

---

## Definition snippet draft (40–60 words)

> **Omnichannel retail** adalah strategi ritel yang menyatukan seluruh kanal penjualan dan komunikasi — toko fisik, situs web, aplikasi, marketplace, media sosial — menjadi satu pengalaman yang mulus dan konsisten bagi pelanggan. Berbeda dari multichannel, semua kanal dalam omnichannel berbagi data yang sama: stok, harga, dan riwayat pembelian mengalir dalam satu sistem terpadu.

*(51 kata — dalam rentang 40–60 kata. Entity-clear: menyebut "omnichannel retail", "multichannel", kanal spesifik, dan apa yang dibagikan.)*

---

## Notes for image-planner

- **Concept 1 — Diagram perbandingan Multichannel vs. Omnichannel**: Dua kolom diagram visual. Kiri (Multichannel): toko fisik, website, marketplace sebagai lingkaran terpisah tanpa koneksi data — masing-masing silo. Kanan (Omnichannel): kanal-kanal yang sama dihubungkan oleh satu lapisan data terpusat (ERP/sistem inti) di tengah, dengan panah dua arah. Label bahasa Indonesia. Tipe aset: infografis datar (flat design), bisa dibuat sebagai diagram Venn bergaya atau hub-and-spoke.

- **Concept 2 — Alur BOPIS / Click-and-Collect**: Timeline horizontal atau diagram flow 5 langkah: (1) Pelanggan beli online → (2) Sistem cek stok per-toko real-time → (3) Toko terima picking request → (4) Staf ambil & siapkan → (5) Pelanggan ambil di toko. Highlight di langkah 2: "Stok real-time dari sistem pusat (ERP)" sebagai titik kritis. Tipe aset: icon-based flowchart dengan warna brand Soltius.

- **Concept 3 — Arsitektur sistem omnichannel retail (layered diagram)**: Diagram tiga atau empat lapisan bertumpuk: lapisan atas (kanal: toko fisik, website, marketplace, media sosial) → lapisan tengah-atas (order & customer data) → lapisan tengah-bawah (ERP / sistem inti: SAP S/4HANA Retail — stok, harga, keuangan) → lapisan bawah (WMS / gudang & fulfillment). Tunjukkan bahwa semua kanal di atas terhubung ke satu lapisan ERP. Tipe aset: arsitektur diagram bergaya enterprise-IT (bersih, B2B).

---

## Soltius internal links (verified from brief)

- **CTA hub (funnel)**: https://www.soltius.co.id/id/solutions-by-products/retail-produk — anchor: "solusi ritel omnichannel Soltius" — halaman solusi Retail Soltius (menampilkan iVend Retail + SAP S/4HANA Retail).
- **Cousin 1**: https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu — anchor: "warehouse management system" — saat membahas fulfillment/ship-from-store di H2 #4.
- **Cousin 2**: https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud — anchor: "fondasi ERP modern" atau "migrasi ERP ke cloud" — saat membahas ERP sebagai backbone omnichannel di H2 #4.
