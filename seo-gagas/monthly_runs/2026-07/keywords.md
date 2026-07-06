# PGN Gagas — Keyword input (converted from Google Sheet)
# 5 keywords, 21 articles total.
#
# ⚠️ CONFIRM BEFORE RUNNING:
#  (a) MONTH — sheet's note column said "2025-07"; assumed typo → set to 2026-07. Change if wrong.
#  (b) CNG cannibalization — "CNG Indonesia" and "Perusahaan CNG Indonesia" point to the SAME
#      landing page (perusahaan-cng-indonesia) and have near-identical intent. As written that's
#      10 articles to one hub → high cannibalization risk. Options: merge into ONE keyword (e.g.
#      5-8 articles), OR split intent clearly (informational "apa itu CNG" vs commercial
#      "perusahaan/penyedia CNG"). Strategist will dedup across BOTH, but confirm the split.
#  (c) LNG positioning — Gagas's core is CNG; it operates an LNG Hub but verify whether it should
#      be framed as an "LNG company" before writing 5 "Perusahaan LNG Indonesia" articles.
#  (d) Gagas_anchor column held the gagas.co.id homepage (default CTA target) → per-keyword
#      service anchor left for the strategist to derive.

month: "2026-07"
seo_report: "none"

keywords:
  - keyword: "Gasku"
    landing_page: "https://gagas.co.id/gasku/"
    articles: 3
    notes: "Produk BBG/CNG transportasi (kendaraan) via jaringan SPBG; konversi BBM->BBG. Branded product keyword."

  - keyword: "Gaslink"
    landing_page: "https://gagas.co.id/gaslink/"
    articles: 3
    notes: "Produk CNG industri/komersial via Gas Transportation Module (GTM); pelanggan beyond-pipeline (hotel, RM, RS, laundry). Branded product keyword."

  - keyword: "CNG Indonesia"
    landing_page: "https://gagas.co.id/perusahaan-cng-indonesia/"
    articles: 5
    priority: "whitespace"
    notes: "INTENT LOCKED = INFORMASIONAL/edukasi (apa itu CNG, manfaat, cara kerja, beyond-pipeline, transisi energi). SAME hub as 'Perusahaan CNG Indonesia' -> one CNG cluster; dedup across both. Approved angles: monthly_runs/2026-07/TOPIC_PLAN.md."

  - keyword: "Perusahaan CNG Indonesia"
    landing_page: "https://gagas.co.id/perusahaan-cng-indonesia/"
    articles: 5
    priority: "whitespace"
    notes: "INTENT LOCKED = KOMERSIAL/penyedia (memilih penyedia CNG, layanan, industri dilayani, keamanan pasokan). SAME hub as 'CNG Indonesia'; dedup vs that set. Approved angles: monthly_runs/2026-07/TOPIC_PLAN.md."

  - keyword: "Perusahaan LNG Indonesia"
    landing_page: "https://gagas.co.id/perusahaan-lng-indonesia/"
    articles: 5
    priority: "new"
    notes: "LNG (bukan CNG). Verifikasi posisi Gagas di LNG (punya LNG Hub) sebelum membingkai sebagai 'perusahaan LNG'. Researcher konfirmasi."
