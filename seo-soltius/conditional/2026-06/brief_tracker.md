# Conditional Article Briefs — SOLTIUS — batch 2026-06 (ad-hoc)
# Source: Content Brief Tracker (Google Sheet). 14 articles, 1 per topic.
# Mode: /single-article (given-angle). Voice/KB/quality = same as monthly. Dedup + commit to history (type: conditional).
# Decisions (user, 2026-06-09): landing pages determined by us; funnel-to product = CTA anchor; no priority order; differentiate flagged dedup angles; rewrites keep their URL.

articles:
  - id: jurnal-umum-c01
    title: "Apa Itu Jurnal Umum? Pengertian, Fungsi, dan Cara Membuatnya"
    keyword: "jurnal umum"
    supporting: "contoh jurnal umum"
    cta_anchor: "SAP S/4HANA Finance"
    type: new
    notes: "Top-funnel high-volume; sertakan tabel contoh jurnal + FAQ. Internal link: pillar akuntansi/SAP-finance (strategist pilih dari soltius.co.id)."

  - id: turnover-karyawan-c01
    title: "Turnover Karyawan: Penyebab, Cara Menghitung, dan Cara Menguranginya"
    keyword: "turnover karyawan"
    supporting: "cara menghitung turnover karyawan"
    cta_anchor: "SAP SuccessFactors"
    type: new
    notes: "Rumus turnover + strategi; cluster talent/HR."

  - id: checklist-migrasi-rise-c01
    title: "Checklist Kesiapan Migrasi RISE with SAP: 10 Hal yang Harus Disiapkan"
    keyword: "checklist migrasi rise with sap"
    supporting: "kesiapan migrasi rise sap"
    cta_anchor: "RISE with SAP / SAP Cloud ERP Private"
    type: new
    dedup: "DIFFERENTIATE vs erp-migration-to-the-cloud-02 (2026-08 readiness assessment): angle = checklist taktis 10 item siap-pakai, bukan kerangka asesmen luas."

  - id: cara-kerja-sistem-sap-c01
    title: "Cara Kerja Sistem SAP dan Fungsinya untuk Perusahaan (Update 2026)"
    keyword: "cara kerja sistem sap"
    supporting: "fungsi sap untuk perusahaan"
    cta_anchor: "SAP S/4HANA"
    type: REWRITE
    url: "https://www.soltius.co.id/id/blog/cara-kerja-sistem-sap-dan-fungsinya-untuk-perusahaan"
    notes: "Refresh halaman existing (turun -21,9%). PERTAHANKAN URL. Restrukturisasi AEO: jawaban ringkas di awal + FAQ + diagram. WebFetch halaman lama dulu sebagai basis."

  - id: lead-time-c01
    title: "Apa Itu Lead Time dalam Supply Chain dan Cara Menghitungnya"
    keyword: "lead time"
    supporting: "cara menghitung lead time"
    cta_anchor: "SAP IBP"
    type: new

  - id: mrp-c01
    title: "Apa Itu MRP (Material Requirements Planning) dan Cara Kerjanya"
    keyword: "mrp adalah"
    supporting: "material requirement planning"
    cta_anchor: "SAP S/4HANA Manufacturing"
    type: new

  - id: esg-c01
    title: "Apa Itu ESG dan Mengapa Penting bagi Perusahaan Indonesia"
    keyword: "esg adalah"
    supporting: "environmental social governance"
    cta_anchor: "SAP Sustainability"
    type: new
    notes: "Pillar ESG; momentum musim laporan Q1 2027."

  - id: cloud-erp-vs-on-premise-c01
    title: "Cloud ERP vs On-Premise ERP: Perbedaan dan Cara Memilihnya"
    keyword: "cloud erp vs on premise"
    supporting: "perbedaan cloud dan on premise erp"
    cta_anchor: "RISE with SAP"
    type: new

  - id: iaas-untuk-sap-c01
    title: "Apa Itu IaaS dan Mengapa Enterprise Memilihnya untuk Hosting SAP"
    keyword: "iaas untuk sap"
    supporting: "hosting sap di cloud"
    cta_anchor: "SAP on AWS/Azure/GCP"
    type: new

  - id: data-lake-vs-data-warehouse-c01
    title: "Data Lake vs Data Warehouse: Perbedaan dan Kapan Menggunakannya"
    keyword: "data lake vs data warehouse"
    supporting: "perbedaan data lake dan data warehouse"
    cta_anchor: "SAP Datasphere"
    type: new
    dedup: "DIFFERENTIATE vs data-warehouse-solutions-02 (2026-06 'DW vs Data Lake vs Lakehouse'): fokus murni 2 arsitektur (Data Lake vs DW, kapan pakai), bukan 3-way lakehouse."

  - id: cara-menghitung-hpp-c01
    title: "Cara Menghitung Harga Pokok Produksi (HPP) + Contoh untuk Manufaktur"
    keyword: "cara menghitung hpp"
    supporting: "rumus harga pokok produksi"
    cta_anchor: "SAP S/4HANA Finance"
    type: REWRITE
    url: "https://www.soltius.co.id/id/blog/Menghitung-Harga-Pokok-Produksi-Untuk-Perusahaan-Manufaktur"
    notes: "Refresh (turun -22,1%). PERTAHANKAN URL. Tambah kalkulator/contoh + FAQ. WebFetch halaman lama dulu sebagai basis."

  - id: ai-untuk-finance-c01
    title: "AI untuk Finance: Penerapan dan Manfaatnya bagi Departemen Keuangan"
    keyword: "ai untuk keuangan"
    supporting: "ai dalam akuntansi"
    cta_anchor: "SAP Business AI"
    type: new
    notes: "Use case spesifik (bukan AI generik)."

  - id: sap-successfactors-modul-c01
    title: "Apa Itu SAP SuccessFactors: Modul-Modul dan Manfaatnya untuk HR"
    keyword: "sap successfactors"
    supporting: "modul sap successfactors"
    cta_anchor: "SAP SuccessFactors"
    type: new
    notes: "Fokus modul (beda dari halaman 'mengenal' April 2026 existing)."

  - id: omnichannel-retail-c01
    title: "Apa Itu Omnichannel Retail dan Cara Menerapkannya"
    keyword: "omnichannel retail"
    supporting: "strategi omnichannel"
    cta_anchor: "SAP S/4HANA Retail"
    type: new
    notes: "Integrasi POS-gudang-akuntansi."
