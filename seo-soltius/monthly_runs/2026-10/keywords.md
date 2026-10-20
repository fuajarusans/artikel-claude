# SOLTIUS — Keyword input for 2026-10 (upload "October 2026")
# Source: Google Sheet, baris "Bulan Upload = October 2026" (No.21-23,25; No.24 dilewati).
#   https://docs.google.com/spreadsheets/d/1T92m-oavg9WDoOL0xZecuPmI1vKm7hcNyXPvKvrEGXQ/edit
# Rules: MONTHLY. TANPA image/{IMAGE_NN}/images.json. Word count DIABAIKAN (info saja, tidak gating).
# 4 keyword x 5 = 20 artikel.
#
# DEDUP KRITIS — keempatnya keyword berulang & sangat jenuh. Baca history (2026-06, 2026-08 committed)
#   DAN batch belum-commit: monthly_runs/{2026-06,2026-07-2,2026-08,2026-08-2,2026-09}/final/<slug>-*.id.md.
#   Angle baru wajib unik vs SEMUA (angle_hash unik; Jaccard <0.4). Bila <5 angle segar, buat seadanya + TANDAI.
#
# CATATAN WMS: hub Oktober GANTI ke /manfaat-dan-modul-warehouse-management-system (bukan /konsep-... lama).
#   Artikel WMS Oktober tautkan ke hub baru ini sebagai primary internal link.

month: "2026-10"
seo_report: "none"

keywords:
  - keyword: "warehouse management system"
    landing_page: "https://www.soltius.co.id/id/blog/manfaat-dan-modul-warehouse-management-system"
    articles: 5
    priority: "grow"
    notes: "SAP EWM/WMS. HUB BARU (manfaat-dan-modul-...). Jenuh (~18 artikel lintas batch termasuk 2026-09). Cari 5 angle baru; tandai bila kurang."

  - keyword: "Low Code Platform"
    landing_page: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    articles: 5
    priority: "grow"
    sap_focus: "SAP Build (Build Apps, Build Process Automation), SAP BTP; kaitkan ke Clean Core extensibility"
    notes: "Prior: 2026-06 (5) + 2026-09 (3) = 8. Ruang angle relatif lebih lega dari BI/SCC."

  - keyword: "Business Intelligence"
    landing_page: "https://www.soltius.co.id/id/blog/business-intelligence"
    articles: 5
    priority: "rescue"
    notes: "SAP Analytics Cloud. SANGAT jenuh (~21 artikel lintas batch). Harapkan kemungkinan shortfall; jangan paksa duplikat."

  - keyword: "SAP Clean Core"
    landing_page: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    articles: 5
    priority: "whitespace"
    notes: "English URL. PALING jenuh (~24 artikel termasuk top-up 2026-09). Harapkan kemungkinan shortfall; jangan paksa duplikat."
