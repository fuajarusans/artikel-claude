# PGN Gagas — Keyword input (SEPTEMBER 2026)
# Source: Google Sheet https://docs.google.com/spreadsheets/d/15Psibq57EthsSGsjxziYgFNGz45ba05zkxZXOV8EaEY (rows "September2026")
# 5 keywords, 15 articles total (3 each). SAME keyword set as 2026-07 / 2026-07-2 / 2026-08 (4th round).
#
# ⚠️ HEAVY DEDUP MANDATE: 60 prior angles are already committed in articles_history/index.json for these
#    keywords (gasku 9, gaslink 9, cng-indonesia 12, perusahaan-cng-indonesia 15, perusahaan-lng-indonesia 15).
#    Each strategist MUST generate 3 NEW angles distinct from ALL of them (angle_hash unique + Jaccard <= 0.4).
#    Read articles_history/index.json (filter keyword_slug) AND the per-keyword "Notes for future strategist runs"
#    in articles_history/by_keyword/<slug>/*.md before deciding — those notes list the uncovered whitespace.
#    NOTE: cng-indonesia also has a held (revise, not committed) Aug article on "kualitas gas / Wobbe / nilai kalor"
#    (monthly_runs/2026-08/final/cng-indonesia-03) — treat that angle as TAKEN too; do not repeat it.
#  - CNG cannibalization: "CNG Indonesia" (INFORMASIONAL) and "Perusahaan CNG Indonesia" (KOMERSIAL) share ONE hub
#    (perusahaan-cng-indonesia) -> one CNG cluster; dedup across BOTH intents.
#  - LNG framing: Gagas core is CNG; operates an LNG Hub & distributes LNG beyond-pipeline (hilir). Frame as
#    menyalurkan/melayani, NOT producer/liquefaction/FSRU, NEVER "pionir/pemimpin pasar". Researcher verifies.

month: "2026-09"
seo_report: "none"

keywords:
  - keyword: "Gasku"
    landing_page: "https://gagas.co.id/gasku/"
    articles: 3
    notes: "Produk BBG/CNG transportasi via SPBG; konversi BBM->BBG. Angle BARU vs 9 angle Gasku terdahulu."

  - keyword: "Gaslink"
    landing_page: "https://gagas.co.id/gaslink/"
    articles: 3
    notes: "Produk CNG industri/komersial via GTM; beyond-pipeline (hotel, RM, RS, laundry). Angle BARU vs 9 angle Gaslink terdahulu."

  - keyword: "CNG Indonesia"
    landing_page: "https://gagas.co.id/perusahaan-cng-indonesia/"
    articles: 3
    priority: "whitespace"
    notes: "INTENT LOCKED = INFORMASIONAL/edukasi. SAME hub as 'Perusahaan CNG Indonesia' -> one CNG cluster; dedup across both + vs 12 committed + the held 'kualitas gas/Wobbe' angle."

  - keyword: "Perusahaan CNG Indonesia"
    landing_page: "https://gagas.co.id/perusahaan-cng-indonesia/"
    articles: 3
    priority: "whitespace"
    notes: "INTENT LOCKED = KOMERSIAL/penyedia. SAME hub as 'CNG Indonesia'; dedup vs that set + vs 15 angle Perusahaan-CNG terdahulu."

  - keyword: "Perusahaan LNG Indonesia"
    landing_page: "https://gagas.co.id/perusahaan-lng-indonesia/"
    articles: 3
    priority: "new"
    notes: "LNG (bukan CNG). Framing guard: Gagas operates LNG Hub & distributes beyond-pipeline, bukan produsen/FSRU, NEVER 'pionir/pemimpin pasar'. Angle BARU vs 15 angle Perusahaan-LNG terdahulu."
