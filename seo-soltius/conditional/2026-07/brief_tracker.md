# Conditional Article Briefs — SOLTIUS — batch 2026-07 (ad-hoc)
# Source: Content Brief Tracker (Google Sheet, tab gid=1558504144). 14 articles, 1 per topic.
# Mode: /single-article (given-angle). Voice/KB = same as monthly; FORMAT = ringkas (lihat style_addendum.md di folder ini).
# Decisions (user, 2026-07-06):
#   - Word count 800–1000 kata (kolom sheet) — HANYA batch conditional Juli; style guide utama tidak berubah.
#   - TANPA image placeholder ({IMAGE_NN} dihapus dari alur) → stage image-planner DILEWATI; tidak ada images.json.
#   - FAQ diminimalkan (2–3 Q&A); prosa dipadatkan, on-point, tidak bertele-tele.
#   - Pilot 1 artikel dulu (saas-paas-iaas-c01), review user, baru scale ke 13 sisanya.
#   - Baris 4 (strategi SCM) = REWRITE, pertahankan URL lama.
#   - Landing pages ditentukan kami (kolom sheet kosong); funnel-to product = CTA anchor (lanjutan keputusan 2026-06).

articles:
  - id: saas-paas-iaas-c01
    row: 1
    title: "SaaS vs PaaS vs IaaS: Perbedaan dan Contoh Penerapannya"
    keyword: "saas paas iaas"
    supporting: "perbedaan saas paas iaas"
    cta_anchor: "SAP BTP / Cloud"
    type: new
    status: PILOT
    notes: "Tabel + contoh; jembatan ke cluster IaaS. Dedup: DIFFERENTIATE vs iaas-untuk-sap-c01 (2026-06, IaaS untuk hosting SAP) — fokus perbandingan 3 model layanan cloud, bukan hosting SAP."

  - id: neraca-saldo-c01
    row: 2
    title: "Neraca Saldo: Pengertian, Fungsi, dan Contoh Penyusunannya"
    keyword: "neraca saldo"
    supporting: "cara membuat neraca saldo"
    cta_anchor: "SAP S/4HANA Finance"
    type: new
    notes: "Contoh perhitungan; link ke jurnal umum & buku besar (topic cluster). (Sheet: kolom keyword utama berisi 2 keyword sekaligus — dipisah di sini.)"

  - id: sap-b1-vs-accurate-c01
    row: 3
    title: "SAP Business One vs Accurate vs Zahir: ERP Terbaik untuk Bisnis Berkembang"
    keyword: "sap business one vs accurate"
    supporting: "erp terbaik untuk ukm"
    cta_anchor: "SAP Business One"
    type: new
    notes: "Cluster diminta. Comparison bervolume tinggi vs kompetitor lokal. Dedup: DIFFERENTIATE vs sap-business-one-01 (2026-05, '7 Tanda Butuh SAP B1') — angle komparasi produk, bukan diagnostik kebutuhan. Hati-hati framing kompetitor lokal: faktual, tanpa menjelekkan."

  - id: strategi-scm-c01
    row: 4
    title: "5 Strategi Supply Chain Management yang Optimal (Update 2026)"
    keyword: "strategi supply chain management"
    supporting: "strategi rantai pasok"
    cta_anchor: "SAP IBP"
    type: REWRITE
    url: "https://www.soltius.co.id/id/blog/5-strategi-supply-chain-management-yang-optimal"
    notes: "Refresh halaman existing. PERTAHANKAN URL/slug. WebFetch halaman lama dulu sebagai basis; restrukturisasi + update 2026."

  - id: employee-retention-c01
    row: 5
    title: "Apa Itu Employee Retention dan Strategi Mempertahankan Karyawan"
    keyword: "employee retention"
    supporting: "strategi retensi karyawan"
    cta_anchor: "SAP SuccessFactors"
    type: new
    notes: "Link ke turnover & engagement. Dedup: DIFFERENTIATE vs turnover-karyawan-c01 (2026-06) — fokus strategi retensi proaktif, bukan menghitung/mengurangi turnover; link ke artikel turnover sebagai sibling."

  - id: safety-stock-c01
    row: 6
    title: "Safety Stock: Pengertian, Rumus, dan Cara Menentukannya"
    keyword: "safety stock"
    supporting: "rumus safety stock"
    cta_anchor: "SAP IBP"
    type: new
    notes: "Rumus + contoh; FAQ."

  - id: sap-ecc-2027-c01
    row: 7
    title: "SAP ECC End of Life 2027: Dampak dan Opsi Migrasi Anda"
    keyword: "sap ecc 2027"
    supporting: "akhir dukungan sap ecc"
    cta_anchor: "RISE with SAP"
    type: new
    notes: "Trend urgensi; link ke cluster RISE & IaaS. Verifikasi tanggal maintenance ECC (2027/extended 2030) dari SAP resmi."

  - id: bill-of-materials-c01
    row: 8
    title: "Bill of Materials (BOM): Pengertian, Jenis, dan Contohnya"
    keyword: "bill of material"
    supporting: "apa itu bom produksi"
    cta_anchor: "SAP S/4HANA Manufacturing"
    type: new
    notes: "Contoh struktur BOM bertingkat (pakai tabel/list, bukan gambar — batch ini tanpa image placeholder)."

  - id: sap-s4hana-c01
    row: 9
    title: "SAP S/4HANA: Fitur Unggulan dan Bedanya dengan ERP Lain"
    keyword: "sap s4hana"
    supporting: "keunggulan sap s4hana"
    cta_anchor: "SAP S/4HANA"
    type: new
    notes: "Pillar produk; link ke modul SAP. Dedup vs cara-kerja-sistem-sap-c01 (2026-06) — fokus fitur & diferensiasi S/4HANA, bukan cara kerja SAP umum."

  - id: implementasi-erp-c01
    row: 10
    title: "Tahapan Implementasi ERP yang Wajib Diketahui Perusahaan"
    keyword: "implementasi erp"
    supporting: "tahapan implementasi erp"
    cta_anchor: "SAP Activate"
    type: new
    notes: "Link ke metodologi SAP Activate."

  - id: sap-pp-c01
    row: 11
    title: "SAP PP (Production Planning): Fungsi dan Penerapannya di Manufaktur"
    keyword: "sap pp"
    supporting: "modul sap pp"
    cta_anchor: "SAP PP/DS"
    type: new
    notes: "Jembatan ke cluster Manufaktur. Dedup vs mrp-c01 (2026-06) — fokus modul SAP PP, bukan konsep MRP; link ke artikel MRP sebagai sibling."

  - id: etl-c01
    row: 12
    title: "Apa Itu ETL (Extract, Transform, Load) dalam Pengolahan Data"
    keyword: "etl adalah"
    supporting: "proses etl"
    cta_anchor: "SAP Datasphere"
    type: new
    notes: "Alur pipeline dijelaskan via list/tabel bertahap (bukan diagram gambar); FAQ. Dedup vs data-lake-vs-data-warehouse-c01 (2026-06) — beda topik, tetap cek."

  - id: timeline-migrasi-rise-c01
    row: 13
    title: "Estimasi Timeline Migrasi RISE with SAP: Dari Assessment hingga Go-Live"
    keyword: "timeline migrasi rise with sap"
    supporting: "lama migrasi sap ke cloud"
    cta_anchor: "RISE with SAP / SAP Cloud ERP Private"
    type: new
    notes: "Fase + durasi; tie ke deadline ECC 2027. Dedup: DIFFERENTIATE vs checklist-migrasi-rise-c01 (2026-06, checklist kesiapan) — fokus timeline/durasi per fase, bukan checklist item."

  - id: ai-supply-chain-c01
    row: 14
    title: "AI dalam Supply Chain: Use Case dan Manfaatnya"
    keyword: "ai supply chain"
    supporting: "ai dalam rantai pasok"
    cta_anchor: "SAP IBP"
    type: new
    notes: "Demand sensing, optimasi rute; link ke IBP. Dedup vs ai-untuk-finance-c01 (2026-06) — domain beda (SCM vs finance), pastikan use case tidak tumpang tindih."
