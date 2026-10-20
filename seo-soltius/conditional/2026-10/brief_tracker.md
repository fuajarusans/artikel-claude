# Conditional Article Briefs — SOLTIUS — batch 2026-10 (ad-hoc)
# Source: Content Brief Tracker (Google Sheet, tab "Oktober 2026"). 14 artikel, 1 per topik.
# Mode: /single-article (given-angle). Voice/KB = monthly; FORMAT = ringkas on-point (lihat style_addendum.md: 1000–1200 kata, FAQ 3–5, definisi sekali, TANPA image placeholder, soft CTA).
#
# Keputusan user (2026-10-08):
#   - Word count 1000–1200 kata (target ~1100) — khusus batch ini.
#   - Gaya ringkas on-point konsisten batch Juli–September (bukan monthly penuh).
#   - Landing page kolom sheet KOSONG → hub ditentukan kami.
#   - Funnel-to product = CTA anchor. Output .docx + ringkasan.
#   - Row 4 (HCM) = REWRITE, pertahankan URL, optimasi title+meta untuk naikkan CTR.
#
# PERMUKAAN DEDUP (WAJIB dicek strategist — riwayat belum lengkap; curator conditional belum jalan):
#   1. articles_history/index.json + by_keyword/ (keyword monthly).
#   2. conditional/2026-06, 2026-07, 2026-08, 2026-09 — masing-masing 14 artikel, BELUM di-commit. Baca brief_tracker + final/ yang relevan dengan topikmu.
#   3. monthly_runs/* bila relevan.

articles:
  - id: master-data-management-c01
    row: 1
    title: "Master Data Management (MDM): Pengertian dan Pentingnya"
    keyword: "master data management"
    supporting: "apa itu mdm"
    cta_anchor: "SAP MDG (Master Data Governance)"
    type: new
    notes: "Single source of truth; funnel ke MDG."
    dedup: "Cek vs data cluster (data-lake-vs-data-warehouse 2026-06, etl 2026-07, olap-oltp 2026-08). Fokus MDM: tata kelola master data + SSOT + SAP MDG; bukan ETL/arsitektur penyimpanan."
  - id: ai-customer-service-c01
    row: 2
    title: "AI untuk Customer Service: Dari Chatbot hingga Analitik Sentimen"
    keyword: "ai customer service"
    supporting: "chatbot ai layanan pelanggan"
    cta_anchor: "SAP Business AI"
    type: new
    notes: "Use case; FAQ."
    dedup: "DIFFERENTIATE vs ai-untuk-finance-c01 (2026-06) & ai-supply-chain-c01 (2026-07) — domain CS/pelanggan, bukan finance/SCM. Use case: chatbot, deflection, analitik sentimen; funnel SAP Business AI."
  - id: employee-central-c01
    row: 3
    title: "Employee Central SAP SuccessFactors: Fungsi dan Keunggulannya"
    keyword: "employee central"
    supporting: "sap successfactors employee central"
    cta_anchor: "SAP SuccessFactors"
    type: new
    notes: "Modul inti SF; link ke struktur organisasi."
    dedup: "DIFFERENTIATE vs sap-successfactors-modul-c01 (2026-06, peta modul) & successfactors-vs-hris-c01 (2026-08, komparasi). Fokus modul Employee Central spesifik (core HR, data karyawan, struktur organisasi), bukan peta semua modul / komparasi vendor."
  - id: human-capital-management-c01
    row: 4
    title: "Apa Itu Human Capital Management (HCM)? Panduan Lengkap"
    keyword: "human capital management"
    supporting: "human capital adalah"
    cta_anchor: "SAP SuccessFactors"
    type: REWRITE
    url: "https://www.soltius.co.id/id/blog/Apa-yang-Dimaksud-Human-Capital-Management"
    notes: "Impresi 22.223, CTR rendah → OPTIMALKAN meta_title + meta_description agar lebih menarik (angka/benefit/kejelasan) untuk menaikkan CTR. PERTAHANKAN URL. WebFetch halaman lama dulu sebagai basis."
    dedup: "Rewrite halaman sendiri — bukan duplikat. Beda dari Employee Central (row 3, modul) & KPI (row 9): HCM = konsep payung manajemen SDM end-to-end."
  - id: loyalty-program-c01
    row: 5
    title: "Apa Itu Loyalty Program dan Strateginya untuk Retensi Pelanggan"
    keyword: "loyalty program"
    supporting: "program loyalitas pelanggan"
    cta_anchor: "SAP Customer Experience (CX)"
    type: new
    notes: "Use case retail; funnel ke CX."
    dedup: "Topik baru (CX/retail). Cek ringan vs omnichannel-retail-c01 (2026-06) — fokus program loyalitas & retensi, bukan integrasi omnichannel."
  - id: disaster-recovery-c01
    row: 6
    title: "Disaster Recovery: Pengertian, RPO & RTO, dan Pentingnya bagi Bisnis"
    keyword: "disaster recovery"
    supporting: "rpo dan rto"
    cta_anchor: "SAP on Cloud (hosting/IaaS)"
    type: new
    notes: "Konsep BCP; funnel ke IaaS/hosting."
    dedup: "Cek vs iaas-untuk-sap-c01 (2026-06) & sap-hyperscaler-c01 (2026-08) — fokus DR/BCP (RPO, RTO, strategi backup/failover), bukan 'apa itu IaaS' atau komparasi hyperscaler."
  - id: ifrs-s1-s2-c01
    row: 7
    title: "IFRS S1 & S2: Standar Baru Pelaporan Keberlanjutan dan Dampaknya"
    keyword: "ifrs s1 s2"
    supporting: "standar pelaporan keberlanjutan"
    cta_anchor: "SAP Sustainability"
    type: new
    notes: "Adopsi 2026–2028; forward-looking → hedge timeline/adopsi."
    dedup: "DIFFERENTIATE vs esg-c01 (2026-06) & laporan-keberlanjutan POJK51 (2026-08, regulasi OJK Indonesia). Fokus standar GLOBAL IFRS S1/S2 (ISSB) + dampak ke pelaporan; verifikasi status adopsi, hedge sebagai forward-looking."
  - id: buku-besar-c01
    row: 8
    title: "Apa Itu Buku Besar (General Ledger) dan Perannya dalam Akuntansi"
    keyword: "buku besar"
    supporting: "general ledger adalah"
    cta_anchor: "SAP S/4HANA Finance"
    type: new
    notes: "Link ke Universal Journal S/4HANA sebagai GL modern."
    dedup: "Cluster akuntansi: jurnal-umum (2026-06), neraca-saldo (2026-07), laporan-laba-rugi & ap-ar (2026-08). Fokus buku besar/GL (posting dari jurnal, klasifikasi akun) + Universal Journal S/4HANA; jangan mengulang jurnal umum/neraca; posisikan sebagai tahap di siklus akuntansi."
  - id: kpi-karyawan-c01
    row: 9
    title: "KPI Karyawan: Pengertian, Contoh, dan Cara Menyusunnya"
    keyword: "kpi karyawan"
    supporting: "contoh kpi karyawan"
    cta_anchor: "SAP SuccessFactors (Performance & Goals)"
    type: new
    notes: "Contoh per divisi; link ke Performance & Goals SF."
    dedup: "Cluster HR. Beda dari Employee Central (row 3, core HR) & HCM (row 4, konsep payung): fokus KPI/metrik kinerja + contoh per divisi + cara menyusun (SMART), funnel ke SF Performance & Goals."
  - id: fifo-lifo-fefo-c01
    row: 10
    title: "FIFO, LIFO, dan FEFO: Perbedaan Metode Manajemen Stok"
    keyword: "fifo lifo fefo"
    supporting: "perbedaan fifo dan lifo"
    cta_anchor: "SAP EWM (Extended Warehouse Management)"
    type: new
    notes: "Tabel + kapan dipakai; link ke WMS."
    dedup: "Cluster persediaan/gudang: safety-stock (2026-07), reorder-point & inventory-turnover (2026-08), wms-konsep (2026-08). Fokus metode rotasi stok FIFO/LIFO/FEFO (tabel + kapan dipakai) + SAP EWM; bukan rumus buffer/ROP atau konsep WMS umum."
  - id: sap-btp-c01
    row: 11
    title: "SAP BTP untuk Pemula: Fungsi dan Use Case Business Technology Platform"
    keyword: "sap btp adalah"
    supporting: "business technology platform"
    cta_anchor: "SAP BTP"
    type: new
    notes: "Link ke API & integrasi."
    dedup: "DIFFERENTIATE vs low-code-platform cluster (history, termasuk low-code-platform-02 'SAP Build di BTP') & saas-paas-iaas-c01 (2026-07). Fokus OVERVIEW SAP BTP untuk pemula: 4 pilar (app dev, integrasi, data & analytics, AI) + use case; bukan khusus low-code/SAP Build."
  - id: kaizen-c01
    row: 12
    title: "Apa Itu Kaizen dan Penerapannya untuk Efisiensi Produksi"
    keyword: "kaizen"
    supporting: "metode kaizen"
    cta_anchor: "SAP Digital Manufacturing"
    type: new
    notes: "Konsep continuous improvement."
    dedup: "Cluster manufaktur: mrp (2026-06), bom & sap-pp (2026-08). Fokus Kaizen (continuous improvement, PDCA, 5S, gemba) + penerapan efisiensi produksi; funnel SAP Digital Manufacturing."
  - id: cost-center-profit-center-c01
    row: 13
    title: "Cost Center dan Profit Center: Perbedaan dan Fungsinya"
    keyword: "cost center dan profit center"
    supporting: "apa itu cost center"
    cta_anchor: "SAP FICO (Controlling)"
    type: new
    notes: "Riding 'sap fico' +46%. Link ke SAP FICO cluster."
    dedup: "Cluster akuntansi/controlling. Beda dari buku besar (row 8, FI/GL): fokus Controlling (CO) — cost center vs profit center, tanggung jawab biaya vs laba, alokasi; funnel SAP FICO."
  - id: demand-forecasting-c01
    row: 14
    title: "Demand Forecasting: Metode dan Pentingnya bagi Perencanaan Bisnis"
    keyword: "demand forecasting"
    supporting: "peramalan permintaan"
    cta_anchor: "SAP IBP"
    type: new
    notes: "Metode + AI forecasting; link ke IBP."
    dedup: "Cluster SCM/planning: safety-stock (2026-07), reorder-point & inventory-turnover (2026-08), ai-supply-chain (2026-07). Fokus metode demand forecasting (kualitatif/kuantitatif, time-series, AI/demand sensing) + funnel SAP IBP; jangan mengulang buffer/ROP atau use-case AI SCM umum."
