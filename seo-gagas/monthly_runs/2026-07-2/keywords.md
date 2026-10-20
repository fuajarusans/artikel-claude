# PGN Gagas — Keyword input (Juli PART 2 — batch 2026-07-2)
# Source: Google Sheet https://docs.google.com/spreadsheets/d/15Psibq57EthsSGsjxziYgFNGz45ba05zkxZXOV8EaEY
# 5 keywords, 21 articles total. SAME keyword set as part 1 (monthly_runs/2026-07).
#
# ⚠️ DEDUP MANDATE: the 21 part-1 angles are already committed in articles_history/index.json
#    (all month "2026-07"). The strategist MUST generate NEW angles that do not duplicate part 1
#    (angle_hash + subtopic Jaccard <= 0.4), for the SAME keywords/hubs. See also
#    monthly_runs/2026-07/TOPIC_PLAN.md for the part-1 angle map.
#  - CNG cannibalization: "CNG Indonesia" (INFORMASIONAL/edukasi) and "Perusahaan CNG Indonesia"
#    (KOMERSIAL/penyedia) share ONE hub (perusahaan-cng-indonesia) -> one CNG cluster; dedup across BOTH.
#  - LNG positioning: Gagas core is CNG; it operates an LNG Hub. Researcher verifies framing before
#    writing "Perusahaan LNG Indonesia" articles.

month: "2026-07-2"
seo_report: "none"

keywords:
  - keyword: "Gasku"
    landing_page: "https://gagas.co.id/gasku/"
    articles: 3
    notes: "Produk BBG/CNG transportasi (kendaraan) via jaringan SPBG; konversi BBM->BBG. Branded product keyword. Angle BARU vs part 1."

  - keyword: "Gaslink"
    landing_page: "https://gagas.co.id/gaslink/"
    articles: 3
    notes: "Produk CNG industri/komersial via Gas Transportation Module (GTM); pelanggan beyond-pipeline (hotel, RM, RS, laundry). Branded product keyword. Angle BARU vs part 1."

  - keyword: "CNG Indonesia"
    landing_page: "https://gagas.co.id/perusahaan-cng-indonesia/"
    articles: 5
    priority: "whitespace"
    notes: "INTENT LOCKED = INFORMASIONAL/edukasi. SAME hub as 'Perusahaan CNG Indonesia' -> one CNG cluster; dedup across both + vs part 1."

  - keyword: "Perusahaan CNG Indonesia"
    landing_page: "https://gagas.co.id/perusahaan-cng-indonesia/"
    articles: 5
    priority: "whitespace"
    notes: "INTENT LOCKED = KOMERSIAL/penyedia. SAME hub as 'CNG Indonesia'; dedup vs that set + vs part 1."

  - keyword: "Perusahaan LNG Indonesia"
    landing_page: "https://gagas.co.id/perusahaan-lng-indonesia/"
    articles: 5
    priority: "new"
    notes: "LNG (bukan CNG). Verifikasi posisi Gagas di LNG (LNG Hub) sebelum membingkai sebagai 'perusahaan LNG'. Angle BARU vs part 1."
