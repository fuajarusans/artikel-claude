# SOLTIUS — Keyword input for 2026-09 (upload "September 2026")
# Source: Google Sheet, baris "Bulan Upload = September 2026".
#   https://docs.google.com/spreadsheets/d/1T92m-oavg9WDoOL0xZecuPmI1vKm7hcNyXPvKvrEGXQ/edit
# Rules: MONTHLY. TANPA image/{IMAGE_NN}/images.json. Word count DIABAIKAN (info saja, tidak gating).
# 5 keyword x 3 = 15 artikel.
#
# DEDUP: baca articles_history (committed: 2026-06, 2026-08) DAN batch belum-commit
#   (monthly_runs/2026-07-2/final/, monthly_runs/2026-08-2/final/, monthly_runs/2026-06/final/).
#   Angle baru wajib unik vs SEMUA (angle_hash unik; Jaccard <0.4). Bila kurang, tandai.

month: "2026-09"
seo_report: "none"

keywords:
  - keyword: "warehouse management system"
    landing_page: "https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu"
    articles: 3
    priority: "grow"
    notes: "SAP EWM/WMS. Jenuh (2026-08 + 2026-07-2 + 2026-08-2 = ~13 artikel). Cari 3 angle betul-betul baru; tandai bila kurang."

  - keyword: "Low Code Platform"
    landing_page: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    articles: 3
    priority: "grow"
    sap_focus: "SAP Build (Build Apps, Build Process Automation), SAP BTP; kaitkan ke Clean Core (extensibility)"
    notes: "Diaktifkan lagi — prior hanya di 2026-06 (5 artikel). Dedup vs 2026-06/final/low-code-platform-*. Ruang angle masih relatif lega."

  - keyword: "Business Intelligence"
    landing_page: "https://www.soltius.co.id/id/blog/business-intelligence"
    articles: 3
    priority: "rescue"
    notes: "SAP Analytics Cloud. SANGAT jenuh (~18 artikel lintas batch). Cari 3 angle baru; tandai bila kurang."

  - keyword: "Vendor management system"
    landing_page: "https://www.soltius.co.id/id/blog/sistem-manajemen-vendor"
    articles: 3
    priority: "new"
    sap_focus: "SAP Fieldglass (VMS untuk tenaga kerja eksternal/kontingen & services procurement) + SAP Ariba (manajemen supplier & sourcing). Researcher konfirmasi mana yang paling relevan per angle."
    notes: "KEYWORD BARU — belum ada di product_matrix maupun history. Turunkan mapping SAP dari sap_focus + riset. WebFetch landing page dulu untuk lihat cakupan hub. Ruang angle lega."

  - keyword: "SAP Clean Core"
    landing_page: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    articles: 3
    priority: "whitespace"
    notes: "English URL. SANGAT jenuh (~20 artikel + top-up 2026-08-2). Cari 3 angle baru; tandai bila kurang."
