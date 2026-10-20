# Conditional Article Briefs — SOLTIUS — batch 2026-09 (ad-hoc)
# Source: Content Brief Tracker (Google Sheet, tab "September 2026"). 14 articles, 1 per topic.
# Mode: /single-article (given-angle). Voice/KB = same as monthly; FORMAT = ringkas (lihat style_addendum.md di folder ini).
#
# Keputusan yang berlaku (diwarisi dari batch Juli & Agustus, sudah disetujui user):
#   - Word count 800–1000 kata; TANPA image placeholder; FAQ 2–3; DEFINISI HANYA SEKALI di snippet.
#   - Landing page kolom sheet KOSONG untuk semua baris → hub ditentukan kami.
#   - Funnel-to product = CTA anchor. Output akhir: .docx (tools/md-to-docx.ps1).
#   - Tanpa pilot: format sudah divalidasi (pilot Juli saas-paas-iaas-c01) + 2 batch berjalan.
#   - Row 8 (manpower-planning) kolom Word Count kosong di sheet → pakai band 800–1000 yang sama.
#
# PERMUKAAN DEDUP (WAJIB dicek strategist — riwayat belum lengkap):
#   1. articles_history/index.json (keyword monthly saja).
#   2. conditional/2026-06, 2026-07, 2026-08 (42 artikel) — BELUM di-commit ke history. Baca brief_tracker + final/.
#   3. monthly_runs/* — khususnya BANYAK artikel sap-clean-core (row 3) & low-code-platform (row 11),
#      cloud (row 5), digital-manufacturing/OEE (row 12).

articles:
  - id: agentic-ai-c01
    row: 1
    title: "Apa Itu Agentic AI dan Potensinya untuk Otomasi Bisnis"
    keyword: "agentic ai"
    supporting: "ai agent untuk bisnis"
    cta_anchor: "SAP Business AI (Joule)"
    type: new
    notes: "Tren 2026/2027; funnel ke Joule."
    dedup: "DIFFERENTIATE vs ai-supply-chain-c01 (2026-07) & ai-untuk-finance-c01 (2026-06) — keduanya use-case AI per domain. Artikel ini konsep AGENTIC AI (agen otonom yang bertindak, bukan sekadar generatif) + potensi otomasi lintas fungsi + Joule sebagai contoh. Jangan mengulang use case SCM/finance secara mendalam."

  - id: markup-vs-margin-c01
    row: 2
    title: "Markup vs Margin: Perbedaan dan Cara Menghitung Harga Jual"
    keyword: "markup dan margin"
    supporting: "perbedaan markup dan margin"
    cta_anchor: "SAP S/4HANA Retail"
    type: new
    notes: "Rumus + contoh; link ke laporan laba rugi."
    dedup: "Cluster keuangan. Sibling dari laporan-laba-rugi-c01 (2026-08) — tautkan sebagai cousin. Fokus rumus markup vs margin + contoh hitung + kapan pakai yang mana. Jangan mengulang struktur laporan laba rugi."

  - id: cara-clean-core-c01
    row: 3
    title: "Cara Menerapkan SAP Clean Core: Langkah Praktis untuk Migrasi"
    keyword: "cara menerapkan clean core"
    supporting: "implementasi sap clean core"
    cta_anchor: "SAP Clean Core / BTP"
    type: new
    notes: "Manfaatkan ranking 'SAP Clean Core' #3 dgn long-tail."
    dedup: "PENTING — monthly_runs (2026-06..2026-08) sudah punya BANYAK artikel sap-clean-core (konsep, panduan, keep-the-core-clean, dsb). Baca beberapa final sap-clean-core dulu. RESOLUSI: artikel ini long-tail HOW-TO — LANGKAH PRAKTIS menerapkan clean core saat migrasi (assess custom code, extensibility in-app vs side-by-side via BTP, clean-core scorecard, tahapan). BUKAN 'apa itu clean core' (sudah ada). Tautkan ke hub clean core sebagai internal link. Jangan menduplikasi angle artikel konsep."

  - id: talent-acquisition-c01
    row: 4
    title: "6 Tugas Pokok Talent Acquisition (Update 2026)"
    keyword: "tugas talent acquisition"
    supporting: "talent acquisition adalah"
    cta_anchor: "SAP SuccessFactors (Recruiting)"
    type: REWRITE
    url: "https://www.soltius.co.id/id/blog/read/6-tugas-pokok-talent-acquisition"
    notes: "Turun -14%. PERTAHANKAN URL/slug. WebFetch halaman lama dulu; refresh + internal link ke cluster HR baru; funnel SF Recruiting."
    dedup: "Cluster HR (turnover 2026-06, employee-retention 2026-07, pkwt-pkwtt & successfactors-vs-hris 2026-08). Fokus 6 tugas pokok talent acquisition — jangan melebar ke retensi/turnover/regulasi. Rewrite halaman sendiri; jangan lapor duplicate."

  - id: cloud-deployment-c01
    row: 5
    title: "Public vs Private vs Hybrid Cloud: Perbedaan dan Cara Memilih"
    keyword: "hybrid cloud"
    supporting: "public private hybrid cloud"
    cta_anchor: "RISE with SAP"
    type: new
    notes: "Angle 3-arah (baru vs artikel 2024); funnel ke RISE."
    dedup: "RISIKO — cloud-computing-c01 (2026-08) sudah MENYINGGUNG model deployment public/private/hybrid (sebagai pillar, ringkas). RESOLUSI: artikel ini SPOKE pendalaman — komparasi head-to-head 3 model deployment + kriteria memilih (kedaulatan data, biaya, latency, kontrol) + kaitan ke RISE (private/hybrid). cloud-computing = pillar yang meringkas; ini yang membedah. Tautkan NAIK ke cloud-computing sebagai hub. Beda juga dari saas-paas-iaas (itu MODEL LAYANAN, ini MODEL DEPLOYMENT)."

  - id: laporan-arus-kas-c01
    row: 6
    title: "Laporan Arus Kas: Pengertian, Metode Langsung & Tidak Langsung"
    keyword: "laporan arus kas"
    supporting: "contoh laporan arus kas"
    cta_anchor: "SAP S/4HANA Finance"
    type: new
    notes: "Bandingkan 2 metode; tabel contoh."
    dedup: "Cluster akuntansi (jurnal-umum 2026-06, neraca-saldo 2026-07, laporan-laba-rugi & ap-ar 2026-08). Fokus laporan arus kas: 3 aktivitas (operasi/investasi/pendanaan) + metode langsung vs tidak langsung + contoh. Jangan mengulang laba rugi/neraca; posisikan sebagai laporan keuangan ketiga. Tautkan sibling."

  - id: migrasi-sap-2026-c01
    row: 7
    title: "2027 Sudah Dekat: Mengapa Migrasi SAP Sebaiknya Dimulai 2026"
    keyword: "migrasi sap 2026"
    supporting: "kapan migrasi s4hana"
    cta_anchor: "RISE with SAP"
    type: new
    notes: "Urgensi timeline 18–36 bulan; CTA assessment."
    dedup: "RISIKO — sap-ecc-2027-c01 (2026-07, dampak deadline + peta 4 opsi) & timeline-migrasi-rise-c01 (2026-07, durasi per fase). RESOLUSI: artikel ini argumen TIMING/urgensi — MENGAPA mulai 2026 (runway 18–36 bulan, antrean partner/kapasitas, risiko menunda), bukan 'apa dampak 2027' (sudah ada) atau 'berapa lama tiap fase' (sudah ada). Tautkan keduanya sebagai cousin. Verifikasi tanggal ECC dari SAP resmi."

  - id: manpower-planning-c01
    row: 8
    title: "Apa Itu Manpower Planning dan Cara Menyusunnya"
    keyword: "manpower planning"
    supporting: "perencanaan tenaga kerja"
    cta_anchor: "SAP SuccessFactors"
    type: new
    notes: "Link ke analytics SDM & SF. (Word Count sheet kosong → band 800–1000.)"
    dedup: "Cluster HR. Fokus manpower planning (perencanaan kebutuhan tenaga kerja: forecasting demand/supply, gap analysis, langkah menyusun). Beda dari talent-acquisition (row 4, rekrutmen) & employee-retention (2026-07). Tautkan sibling HR."

  - id: rise-manufaktur-c01
    row: 9
    title: "RISE with SAP untuk Manufaktur: Manfaat dan Pertimbangan Migrasi"
    keyword: "rise with sap manufaktur"
    supporting: "sap cloud erp private manufaktur"
    cta_anchor: "RISE with SAP / SAP Cloud ERP Private"
    type: new
    notes: "Industri-spesifik; use case."
    dedup: "Cluster RISE/migrasi (checklist-migrasi-rise 2026-06, timeline-migrasi-rise 2026-07, migrasi-sap-2026 row 7 batch ini). RESOLUSI: angle INDUSTRI-SPESIFIK — manfaat & pertimbangan RISE khusus manufaktur (integrasi MES/PP, kesiapan shop-floor, keterlambatan produksi saat cutover). Jangan mengulang checklist/timeline umum; jangan tumpang tindih dengan row 7 (itu soal timing). Tautkan sebagai spoke industri."

  - id: eoq-c01
    row: 10
    title: "Economic Order Quantity (EOQ): Pengertian, Rumus, dan Manfaatnya"
    keyword: "economic order quantity"
    supporting: "rumus eoq"
    cta_anchor: "SAP IBP"
    type: new
    notes: "Contoh + kurva EOQ (dijelaskan via teks/tabel, bukan gambar)."
    dedup: "Cluster persediaan (safety-stock 2026-07, reorder-point & inventory-turnover 2026-08). reorder-point-c01 sudah MENYEBUT EOQ sekilas; rumus EOQ penuh belum ditulis. Fokus rumus EOQ + contoh + trade-off biaya pesan vs simpan. ROP & safety stock hanya disinggung sebagai cluster; tautkan reorder-point sebagai cousin."

  - id: sap-build-apps-c01
    row: 11
    title: "SAP Build Apps: Membuat Aplikasi Bisnis dengan Pendekatan Low-Code"
    keyword: "sap build apps"
    supporting: "aplikasi low code sap"
    cta_anchor: "SAP Build / BTP"
    type: new
    notes: "Link ke low-code (rewrite) & BTP."
    dedup: "PENTING — history low-code-platform-02 ('SAP Build di SAP BTP: Platform Low-Code') sudah ada. RESOLUSI: fokus SPESIFIK ke SAP Build Apps (produk visual app-builder): apa itu, cara membangun aplikasi bisnis langkah besar, kapan dipakai vs SAP Build Process Automation. Tautkan NAIK ke hub low-code sebagai cousin. Jangan mengulang pengantar 'low-code platform' umum (sudah ada) maupun bedah SAP BTP menyeluruh."

  - id: lean-manufacturing-c01
    row: 12
    title: "Lean Manufacturing: Prinsip, Manfaat, dan Penerapannya"
    keyword: "lean manufacturing"
    supporting: "prinsip lean manufacturing"
    cta_anchor: "SAP Digital Manufacturing"
    type: new
    notes: "7 waste; link ke kaizen."
    dedup: "Cluster manufaktur (oee-c01 2026-08, cluster digital-manufacturing history, mrp/sap-pp/bom). Fokus prinsip lean (5 prinsip, 7 waste/muda, contoh penerapan). OEE hanya disinggung sebagai metrik pendukung; jangan mengulang rumus OEE. Tautkan OEE sebagai cousin."

  - id: lift-shift-vs-replatform-c01
    row: 13
    title: "Lift & Shift vs Re-Platform: Strategi Migrasi SAP ke IaaS"
    keyword: "lift and shift sap"
    supporting: "strategi migrasi sap ke iaas"
    cta_anchor: "SAP on AWS/Azure/GCP"
    type: new
    notes: "Sheet: 'Belum dibuat (Plan Topik False).'"
    dedup: "Cluster IaaS/migrasi (iaas-untuk-sap 2026-06, sap-hyperscaler 2026-08, saas-paas-iaas 2026-07). RESOLUSI: fokus 2 STRATEGI migrasi ke IaaS — lift & shift (rehost) vs re-platform — trade-off, kapan pilih mana, kaitan ke SAP di hyperscaler. Beda dari sap-hyperscaler (itu komparasi 3 penyedia) & iaas-untuk-sap (apa/mengapa IaaS). Tautkan sap-hyperscaler sebagai cousin."

  - id: tanda-butuh-erp-c01
    row: 14
    title: "10 Tanda Perusahaan Anda Membutuhkan Sistem ERP"
    keyword: "tanda perusahaan butuh erp"
    supporting: "kapan butuh erp"
    cta_anchor: "SAP Business One"
    type: new
    notes: "Listicle; funnel ke konsultasi."
    dedup: "RISIKO — sap-business-one-01 (monthly_runs 2026-05, '7 Tanda Bisnis Anda Sudah Butuh SAP Business One'). RESOLUSI: artikel ini GENERIK ERP (bukan spesifik B1), 10 tanda (bukan 7), sudut pandang lebih luas (semua ukuran/jenis bisnis, gejala lintas fungsi). Boleh menyebut B1 hanya di CTA anchor. Jangan menyalin daftar tanda B1; buat daftar yang berdiri sendiri untuk kebutuhan ERP umum. Cek juga fitur-sap-b1-c01 (2026-08) & cara-kerja-sistem-sap-c01 (2026-06)."
