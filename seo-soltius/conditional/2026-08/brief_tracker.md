# Conditional Article Briefs — SOLTIUS — batch 2026-08 (ad-hoc)
# Source: Content Brief Tracker (Google Sheet, tab "Agustus"). 14 articles, 1 per topic.
# Mode: /single-article (given-angle). Voice/KB = same as monthly; FORMAT = ringkas (lihat style_addendum.md di folder ini).
#
# Keputusan yang berlaku (diwarisi dari batch Juli, sudah disetujui user):
#   - Word count 800–1000 kata (kolom sheet) — hanya batch conditional; style guide utama tidak berubah.
#   - TANPA image placeholder → stage image-planner DILEWATI; tidak ada images.json.
#   - FAQ 2–3 Q&A; prosa padat, on-point.
#   - DEFINISI HANYA SEKALI — di definition snippet; body dilarang mengulangnya.
#   - Landing page kolom sheet KOSONG untuk semua baris → hub ditentukan kami (keputusan berdiri sejak Juni).
#   - Funnel-to product = CTA anchor.
#   - Output akhir: .docx (via tools/md-to-docx.ps1 + reference.docx).
#   - Tanpa pilot: format sudah divalidasi di pilot Juli (saas-paas-iaas-c01).
#
# PERMUKAAN DEDUP (WAJIB dicek strategist — riwayat belum lengkap di index):
#   1. articles_history/index.json (51 entri; hanya keyword monthly: business-intelligence,
#      data-warehouse-solutions, digital-manufacturing, erp-migration-to-the-cloud,
#      low-code-platform, sap-clean-core, warehouse-management-system).
#   2. conditional/2026-06/ (14 artikel) + conditional/2026-07/ (14 artikel) — BELUM di-commit
#      ke articles_history (curator belum jalan). Baca brief_tracker.md + final/ kedua folder.
#   3. monthly_runs/2026-08/final/ (21 artikel: business-intelligence ×5, data-warehouse-solutions ×5,
#      erp-migration-to-the-cloud ×3, sap-clean-core ×4, warehouse-management-system ×4).
#      ← relevan khusus untuk row 4 (WMS) dan row 14 (OLAP/OLTP vs cluster data warehouse).
#
# CATATAN DATA SHEET (kejanggalan yang sudah ditangani):
#   - Row 4 kolom "Produk/Solusi" berisi "warehouse management system" (keyword, bukan produk)
#     → strategist pilih anchor SAP yang tepat (mis. SAP EWM / SAP S/4HANA Supply Chain).
#   - Row 12 kolom "Produk/Solusi" berisi "inventory turnover" (keyword, bukan produk)
#     → strategist pilih anchor SAP yang tepat (mis. SAP IBP / SAP S/4HANA).

articles:
  - id: sku-c01
    row: 1
    title: "SKU (Stock Keeping Unit): Pengertian, Fungsi, dan Cara Membuatnya"
    keyword: "sku adalah"
    supporting: "cara membuat sku"
    cta_anchor: "SAP S/4HANA Retail"
    type: new
    notes: "Contoh penomoran SKU; FAQ."
    dedup: "Cek vs omnichannel-retail-c01 (2026-06). Fokus: konsep SKU + aturan penomoran praktis, bukan strategi omnichannel."

  - id: cloud-computing-c01
    row: 2
    title: "Apa Itu Cloud Computing dan Jenis Layanannya untuk Bisnis"
    keyword: "cloud computing"
    supporting: "jenis layanan cloud"
    cta_anchor: "RISE with SAP"
    type: new
    notes: "Pillar cloud; link ke ERP cloud."
    dedup: "RISIKO TINGGI vs saas-paas-iaas-c01 (2026-07) — 'jenis layanan cloud' = SaaS/PaaS/IaaS. RESOLUSI: artikel ini adalah PILLAR (apa itu cloud computing, karakteristik, model deployment public/private/hybrid, manfaat bisnis). Model layanan cukup DIRINGKAS 1 paragraf/1 baris tabel lalu link turun ke artikel SaaS vs PaaS vs IaaS sebagai spoke pendalaman. DILARANG membedah siapa-mengelola-apa per model (milik artikel Juli). Cek juga cluster erp-migration-to-the-cloud (history)."

  - id: sap-hyperscaler-c01
    row: 3
    title: "SAP di AWS vs Azure vs GCP: Perbandingan untuk Perusahaan Indonesia"
    keyword: "sap di aws azure gcp"
    supporting: "hyperscaler untuk sap"
    cta_anchor: "SAP on AWS/Azure/GCP"
    type: new
    notes: "Format X vs Y; tabel."
    dedup: "DIFFERENTIATE vs iaas-untuk-sap-c01 (2026-06, 'mengapa enterprise memilih IaaS untuk hosting SAP') — artikel ini komparasi head-to-head 3 hyperscaler untuk SAP (sertifikasi SAP, region Indonesia/terdekat, model layanan), BUKAN pembahasan 'apa/mengapa IaaS'. Netral & faktual; hindari klaim performa tak terverifikasi."

  - id: wms-konsep-c01
    row: 4
    title: "Konsep Warehouse Management System yang Wajib Anda Tahu (Update)"
    keyword: "warehouse management system"
    supporting: "konsep wms"
    cta_anchor: "SAP EWM / SAP S/4HANA Supply Chain (strategist tentukan — kolom sheet berisi keyword, bukan produk)"
    type: REWRITE
    url: "https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu"
    notes: "Sheet: 'Pertahankan keyword #1; segarkan + internal link'. PERTAHANKAN URL/slug. WebFetch halaman lama dulu sebagai basis."
    dedup: "PENTING — halaman ini adalah HUB keyword 'warehouse management system' yang sudah ranking; monthly_runs/2026-08/final/ sudah memuat 4 SPOKE (warehouse-management-system-01..04) + history punya entri wms. RESOLUSI: refresh HUB sebagai peta konsep tingkat-hub (definisi, komponen inti, manfaat, kapan butuh WMS); DILARANG menduplikasi angle spoke — baca keempat spoke dulu, lalu (bila relevan) tautkan turun ke 1–2 spoke sebagai internal link. Pertahankan keyword utama & URL."

  - id: laporan-laba-rugi-c01
    row: 5
    title: "Laporan Laba Rugi: Komponen, Jenis, dan Cara Membacanya"
    keyword: "laporan laba rugi"
    supporting: "contoh laporan laba rugi"
    cta_anchor: "SAP S/4HANA Finance"
    type: new
    notes: "Template + interpretasi; CTA ke solusi akuntansi/ERP."
    dedup: "Cluster akuntansi: jurnal-umum-c01 (2026-06) & neraca-saldo-c01 (2026-07) sudah ada. Fokus: komponen & cara MEMBACA laporan laba rugi (single vs multiple step) — jangan mengulang jurnal umum/neraca saldo; posisikan sebagai output akhir siklus akuntansi + link sibling bila relevan."

  - id: pkwt-pkwtt-c01
    row: 6
    title: "PKWT vs PKWTT: Perbedaan, Aturan, dan Implikasinya bagi Perusahaan"
    keyword: "pkwt dan pkwtt"
    supporting: "perbedaan pkwt dan pkwtt"
    cta_anchor: "SAP SuccessFactors"
    type: new
    notes: "Topik regulasi ketenagakerjaan bervolume tinggi."
    dedup: "Topik baru (regulasi). Cek ringan vs turnover-karyawan-c01 (2026-06) & employee-retention-c01 (2026-07) — jangan melebar ke strategi retensi. WAJIB verifikasi dasar hukum dari sumber resmi (UU Ketenagakerjaan/UU Cipta Kerja, PP 35/2021, Kemnaker); jangan mengarang pasal/angka. Ini bukan nasihat hukum — beri framing hati-hati."

  - id: laporan-keberlanjutan-c01
    row: 7
    title: "Apa Itu Laporan Keberlanjutan & Kewajiban POJK 51 bagi Perusahaan"
    keyword: "laporan keberlanjutan"
    supporting: "sustainability report pojk 51"
    cta_anchor: "SAP Sustainability"
    type: new
    notes: "Regulasi OJK; funnel ke SAP Sustainability Control Tower."
    dedup: "DIFFERENTIATE vs esg-c01 (2026-06, 'Apa Itu ESG dan Mengapa Penting') — artikel ini fokus REGULASI: kewajiban POJK 51/POJK.03/2017, siapa wajib lapor, isi & tenggat laporan keberlanjutan. Jangan mengulang penjelasan ESG umum. WAJIB verifikasi nomor & isi POJK dari sumber resmi OJK."

  - id: reorder-point-c01
    row: 8
    title: "Reorder Point (ROP): Rumus dan Contoh Perhitungannya"
    keyword: "reorder point"
    supporting: "rumus reorder point"
    cta_anchor: "SAP IBP"
    type: new
    notes: "Link ke safety stock & EOQ (cluster)."
    dedup: "Sibling dari safety-stock-c01 (2026-07) & lead-time-c01 (2026-06) — keduanya sudah menyebut ROP sekilas, dan rumus ROP BELUM pernah ditulis penuh. Fokus: rumus ROP + contoh perhitungan. Safety stock & lead time hanya VARIABEL rumus (jangan bahas ulang; tautkan ke artikel safety stock sebagai sibling)."

  - id: successfactors-vs-hris-c01
    row: 9
    title: "SAP SuccessFactors vs HRIS Lokal: Mana yang Tepat untuk Perusahaan?"
    keyword: "successfactors vs hris lokal"
    supporting: "sap successfactors vs hris"
    cta_anchor: "SAP SuccessFactors"
    type: new
    notes: "Format X vs Y; tangkap pencari 'HRIS'."
    dedup: "DIFFERENTIATE vs sap-successfactors-modul-c01 (2026-06, peta modul) — artikel ini komparasi/kriteria pemilihan vs HRIS lokal, bukan bedah modul. Framing kompetitor lokal faktual & netral (pola sap-b1-vs-accurate-c01 Juli); jangan mengarang fitur/harga vendor lokal — bila tak terverifikasi, bandingkan pada dimensi umum."

  - id: oee-c01
    row: 10
    title: "Apa Itu OEE (Overall Equipment Effectiveness) dan Cara Menghitungnya"
    keyword: "oee adalah"
    supporting: "cara menghitung oee"
    cta_anchor: "SAP Digital Manufacturing"
    type: new
    notes: "Rumus 3 faktor + contoh."
    dedup: "Cek vs cluster digital-manufacturing (history), mrp-c01 (2026-06), sap-pp-c01 & bill-of-materials-c01 (2026-07). Fokus: rumus OEE (availability × performance × quality) + contoh hitung; jangan melebar ke MRP/modul PP. Sertakan benchmark world-class 85% HANYA bila terverifikasi + beri konteks sumbernya."

  - id: ap-ar-c01
    row: 11
    title: "Account Payable & Account Receivable: Pengertian dan Cara Mengelolanya"
    keyword: "account payable adalah"
    supporting: "perbedaan ap dan ar"
    cta_anchor: "SAP S/4HANA Finance"
    type: new
    notes: "AP/AR + otomasi; FAQ."
    dedup: "Cluster akuntansi (jurnal-umum 2026-06, neraca-saldo 2026-07, laporan-laba-rugi row 5 batch ini). Fokus: beda AP vs AR + cara mengelola (termasuk otomasi). Jangan mengulang siklus akuntansi dasar; jangan tumpang tindih dengan row 5 (laporan laba rugi)."

  - id: inventory-turnover-c01
    row: 12
    title: "Inventory Turnover Ratio: Rumus dan Cara Meningkatkannya"
    keyword: "inventory turnover"
    supporting: "perputaran persediaan"
    cta_anchor: "SAP IBP / SAP S/4HANA (strategist tentukan — kolom sheet berisi keyword, bukan produk)"
    type: new
    notes: "Rumus + benchmark."
    dedup: "Cluster persediaan bersama safety-stock-c01 (2026-07) & reorder-point-c01 (row 8 batch ini). Fokus: rasio perputaran persediaan (rumus, cara baca, cara meningkatkan) — bukan rumus buffer/ROP. Benchmark per industri hanya bila bersumber; beri konteks."

  - id: fitur-sap-b1-c01
    row: 13
    title: "Fitur SAP Business One yang Wajib Diketahui Bisnis Mid-Market"
    keyword: "fitur sap business one"
    supporting: "keunggulan sap business one"
    cta_anchor: "SAP Business One"
    type: new
    notes: "Sheet: 'Beda dari artikel existing; fokus fitur.'"
    dedup: "DIFFERENTIATE vs sap-b1-vs-accurate-c01 (2026-07, komparasi vs kompetitor) DAN sap-business-one-01 (2026-05, '7 Tanda Bisnis Anda Sudah Butuh SAP B1', diagnostik). Fokus: peta FITUR/modul B1 untuk mid-market. Jangan mengulang komparasi vendor maupun daftar 'tanda butuh'."

  - id: olap-oltp-c01
    row: 14
    title: "OLAP vs OLTP: Perbedaan dan Fungsinya dalam Sistem Database"
    keyword: "olap dan oltp"
    supporting: "perbedaan olap dan oltp"
    cta_anchor: "SAP HANA"
    type: new
    notes: "Tabel perbandingan; link ke HANA."
    dedup: "Cek vs etl-c01 (2026-07), data-lake-vs-data-warehouse-c01 (2026-06), dan cluster data-warehouse-solutions (history + monthly_runs/2026-08 ×5). Fokus: OLAP vs OLTP sebagai tipe beban kerja database (+ relevansi HANA yang menyatukan keduanya). Jangan mengulang proses ETL maupun perbandingan arsitektur penyimpanan."
