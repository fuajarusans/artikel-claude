# SOLTIUS — Keyword input for 2026-08-2 (upload "Agustus 2026")
# Source: Google Sheet, baris "Bulan Upload = Agustus 2026".
#   https://docs.google.com/spreadsheets/d/1T92m-oavg9WDoOL0xZecuPmI1vKm7hcNyXPvKvrEGXQ/edit
# Rules: MONTHLY. TANPA image/{IMAGE_NN}/images.json. Word count DIABAIKAN (tidak jadi patokan/gating).
# 5 keyword x 5 = 25 artikel.
#
# DEDUP KRITIS: kelima keyword ini sudah digarap 3x sebelumnya:
#   - monthly_runs/2026-06/final/  (committed ke history)
#   - monthly_runs/2026-08/final/  (committed ke history)
#   - monthly_runs/2026-07-2/final/ (BELUM di-commit ke history — strategist WAJIB baca file ini juga)
# Setiap angle Agustus HARUS unik vs SEMUA di atas (angle_hash unik; subtopic Jaccard <0.4).
# Bila 5 angle baru yang kuat tidak tersedia untuk satu keyword, strategist buat sebanyak yang
# benar-benar distinct dan TANDAI slot yang kurang — jangan memaksakan near-duplicate.

month: "2026-08-2"
seo_report: "none"

keywords:
  - keyword: "warehouse management system"
    landing_page: "https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu"
    articles: 5
    priority: "grow"
    notes: "SAP EWM/WMS. Paling sedikit jenuh (baru di 2026-08 + 2026-07-2). Angle baru: mis. cycle counting, labor management, slotting, yard, returns, integrasi TMS."

  - keyword: "Data Warehouse Solutions"
    landing_page: "https://www.soltius.co.id/id/blog/data-warehouse-solutions"
    articles: 5
    priority: "grow"
    notes: "SAP Datasphere/BW4HANA. SANGAT jenuh (2026-06+2026-08+2026-07-2 ~15 artikel). Butuh angle betul-betul baru; tandai bila kurang."

  - keyword: "Business Intelligence"
    landing_page: "https://www.soltius.co.id/id/blog/business-intelligence"
    articles: 5
    priority: "rescue"
    notes: "SAP Analytics Cloud. SANGAT jenuh (~15 artikel). Angle baru; tandai bila kurang."

  - keyword: "ERP migration to the cloud"
    landing_page: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    articles: 5
    priority: "defend"
    notes: "RISE with SAP/S4HANA. Jenuh (~11 artikel). Angle baru; tandai bila kurang."

  - keyword: "SAP Clean Core"
    landing_page: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    articles: 5
    priority: "whitespace"
    notes: "English URL. SANGAT jenuh (~15 artikel + pilot). Angle baru; tandai bila kurang."
