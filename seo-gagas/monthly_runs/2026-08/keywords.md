# PGN Gagas — Keyword input (AGUSTUS 2026)
# Source: Google Sheet https://docs.google.com/spreadsheets/d/15Psibq57EthsSGsjxziYgFNGz45ba05zkxZXOV8EaEY (rows "Agustus 2026")
# 5 keywords, 19 articles total. SAME keyword set as Juli part-1 (2026-07) and part-2 (2026-07-2).
#
# ⚠️ HEAVY DEDUP MANDATE: 42 prior angles are already committed in articles_history/index.json for these
#    keywords (gasku 6, gaslink 6, cng-indonesia 10, perusahaan-cng-indonesia 10, perusahaan-lng-indonesia 10).
#    The strategist MUST generate NEW angles distinct from ALL of them (angle_hash unique + subtopic Jaccard <= 0.4).
#    Read articles_history/index.json (filter keyword_slug) AND the per-keyword "Notes for future strategist runs"
#    in articles_history/by_keyword/<slug>/*.md before deciding — those notes list uncovered whitespace.
#  - CNG cannibalization: "CNG Indonesia" (INFORMASIONAL) and "Perusahaan CNG Indonesia" (KOMERSIAL) share ONE hub
#    (perusahaan-cng-indonesia) -> one CNG cluster; dedup across BOTH intents.
#  - LNG framing: Gagas core is CNG; operates an LNG Hub & distributes LNG beyond-pipeline (hilir). Frame as
#    menyalurkan/melayani, NOT producer/liquefaction/FSRU, NEVER "pionir/pemimpin pasar". Researcher verifies.

month: "2026-08"
seo_report: "none"

keywords:
  - keyword: "Gasku"
    landing_page: "https://gagas.co.id/gasku/"
    articles: 3
    notes: "Produk BBG/CNG transportasi via SPBG; konversi BBM->BBG. Angle BARU vs 6 angle Gasku terdahulu (part-1+part-2)."

  - keyword: "Gaslink"
    landing_page: "https://gagas.co.id/gaslink/"
    articles: 3
    notes: "Produk CNG industri/komersial via GTM; beyond-pipeline (hotel, RM, RS, laundry). Angle BARU vs 6 angle Gaslink terdahulu."

  - keyword: "CNG Indonesia"
    landing_page: "https://gagas.co.id/perusahaan-cng-indonesia/"
    articles: 3
    priority: "whitespace"
    notes: "INTENT LOCKED = INFORMASIONAL/edukasi. SAME hub as 'Perusahaan CNG Indonesia' -> one CNG cluster; dedup across both + vs 10 angle CNG-Indonesia terdahulu."

  - keyword: "Perusahaan CNG Indonesia"
    landing_page: "https://gagas.co.id/perusahaan-cng-indonesia/"
    articles: 5
    priority: "whitespace"
    notes: "INTENT LOCKED = KOMERSIAL/penyedia. SAME hub as 'CNG Indonesia'; dedup vs that set + vs 10 angle Perusahaan-CNG terdahulu."

  - keyword: "Perusahaan LNG Indonesia"
    landing_page: "https://gagas.co.id/perusahaan-lng-indonesia/"
    articles: 5
    priority: "new"
    notes: "LNG (bukan CNG). Framing guard: Gagas operates LNG Hub & distributes beyond-pipeline, bukan produsen/FSRU. Angle BARU vs 10 angle Perusahaan-LNG terdahulu."
