# SOLTIUS — Keyword input for 2026-07-2 ("Juli 2")
# Source: Google Sheet (Content plan), baris "Bulan Upload = Juli 2026".
#   https://docs.google.com/spreadsheets/d/1T92m-oavg9WDoOL0xZecuPmI1vKm7hcNyXPvKvrEGXQ/edit
# Rules: MONTHLY (bukan conditional). Panjang 1.500–1.800 kata. TANPA image/{IMAGE_NN}/images.json
#   (image-planner sudah dihapus dari pipeline, 2026-07-07).
# 5 keyword = 23 artikel.
#
# CATATAN DEDUP (penting): kelima keyword ini SUDAH punya banyak artikel di history
#   (2026-06 dan 2026-08). Strategist WAJIB baca articles_history/ dan hasilkan angle BARU
#   (angle_hash unik + subtopic Jaccard <0.4 vs semua artikel lama). Jangan ulang angle
#   yang sudah ada.
# soltius_anchor di sheet = homepage (default soft-CTA), jadi anchor layanan per-keyword
#   dikosongkan — strategist/researcher yang menentukan.

month: "2026-07-2"
seo_report: "none"

keywords:
  - keyword: "warehouse management system"
    landing_page: "https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu"
    articles: 5
    priority: "grow"
    notes: "Map ke SAP EWM/WMS — researcher konfirmasi. Dedup wajib vs 4 artikel WMS di 2026-08 (pakai angle baru)."

  - keyword: "Data Warehouse Solutions"
    landing_page: "https://www.soltius.co.id/id/blog/data-warehouse-solutions"
    articles: 5
    notes: "SAP Datasphere / BW/4HANA. Sudah ada 5 artikel (2026-06) + 5 (2026-08) — butuh 5 angle betul-betul baru."

  - keyword: "Business Intelligence"
    landing_page: "https://www.soltius.co.id/id/blog/business-intelligence"
    articles: 5
    priority: "rescue"
    notes: "SAP Analytics Cloud. Sudah ada 5 (2026-06) + 5 (2026-08) — angle baru. Prioritas rescue (pernah anjlok #10->#100)."

  - keyword: "ERP migration to the cloud"
    landing_page: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    articles: 3
    priority: "defend"
    notes: "RISE with SAP / S/4HANA Cloud. Sudah ada 5 (2026-06) + 3 (2026-08) — angle baru. Prioritas defend (#1)."

  - keyword: "SAP Clean Core"
    landing_page: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    articles: 5
    priority: "whitespace"
    notes: "English URL (no /id/). Sudah ada 5 (2026-06) + 4 (2026-08) + pilot 2026-07 — dedup ketat, 5 angle baru."
