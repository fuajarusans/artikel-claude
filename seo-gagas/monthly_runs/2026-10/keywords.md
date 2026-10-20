# PGN Gagas — Keyword input (OKTOBER 2026)
# Source: Google Sheet https://docs.google.com/spreadsheets/d/15Psibq57EthsSGsjxziYgFNGz45ba05zkxZXOV8EaEY (rows "October2026")
# 5 keywords, 15 articles total (3 each). SAME keyword set as 2026-07 / 2026-07-2 / 2026-08 / 2026-09 (5th round).
#
# ⚠️ HEAVY DEDUP MANDATE — highest yet: 75 prior angles are already committed in articles_history/index.json for
#    these keywords (gasku 12, gaslink 12, cng-indonesia 15, perusahaan-cng-indonesia 18, perusahaan-lng-indonesia 18).
#    Each strategist MUST generate 3 NEW angles distinct from ALL of them (angle_hash unique + subtopic Jaccard <= 0.4).
#    Read articles_history/index.json (filter keyword_slug) AND the per-keyword "Notes for future strategist runs"
#    in articles_history/by_keyword/<slug>/*.md before deciding — those notes explicitly list the uncovered whitespace
#    that Sep/Aug strategists left for future runs. Mine those notes first; they are the richest source of fresh angles.
#    NOTE: cng-indonesia also has a held (revise, NOT committed) Aug article on "kualitas gas / Wobbe / nilai kalor"
#    (monthly_runs/2026-08/final/cng-indonesia-03) — treat that CNG angle as TAKEN too; do not repeat it.
#    (Sep LNG-17 covered "Wobbe index & kompatibilitas peralatan" for LNG — that LNG angle is committed/taken as well.)
#  - CNG cannibalization: "CNG Indonesia" (INFORMASIONAL) and "Perusahaan CNG Indonesia" (KOMERSIAL) share ONE hub
#    (perusahaan-cng-indonesia) -> one CNG cluster; dedup across BOTH intents.
#  - LNG framing: Gagas core is CNG; operates an LNG Hub & distributes LNG beyond-pipeline (hilir). Frame as
#    menyalurkan/melayani, NOT producer/liquefaction/FSRU, NEVER "pionir/pemimpin pasar". Researcher verifies.
#  - Fresh facts to verify (Sep-2026 SERP): Gaslink >600 pelanggan & ~11 BBTUD (Jun 2026); distribusi gas 2025
#    ~4.656.449 MMBTU; 14 SPBG di 7 provinsi; kerja sama Bio Farma (Jul 2026, klaim efisiensi ~40%). Researcher
#    must re-verify each before use; do not state as fact without an authoritative/company source.

month: "2026-10"
seo_report: "none"

keywords:
  - keyword: "Gasku"
    landing_page: "https://gagas.co.id/gasku/"
    articles: 3
    notes: "Produk BBG/CNG transportasi via SPBG; konversi BBM->BBG. Angle BARU vs 12 angle Gasku terdahulu. Mine gasku by_keyword 'Notes for future' — e.g. tabung CNG type-1..4 baja vs komposit (bobot/biaya), retrofit kendaraan niaga berat/DDF, keselamatan kerja & liability pengemudi profesional, skema pembiayaan kit."

  - keyword: "Gaslink"
    landing_page: "https://gagas.co.id/gaslink/"
    articles: 3
    notes: "Produk CNG industri/komersial via GTM; beyond-pipeline (hotel, RM, RS, laundry). Angle BARU vs 12 angle Gaslink terdahulu. Mine gaslink by_keyword 'Notes for future' for uncovered per-sektor/operasional angles."

  - keyword: "CNG Indonesia"
    landing_page: "https://gagas.co.id/perusahaan-cng-indonesia/"
    articles: 3
    priority: "whitespace"
    notes: "INTENT LOCKED = INFORMASIONAL/edukasi. SAME hub as 'Perusahaan CNG Indonesia' -> one CNG cluster; dedup across both + vs 15 committed + the held 'kualitas gas/Wobbe' angle. Mine cng-indonesia by_keyword 'Notes for future'."

  - keyword: "Perusahaan CNG Indonesia"
    landing_page: "https://gagas.co.id/perusahaan-cng-indonesia/"
    articles: 3
    priority: "whitespace"
    notes: "INTENT LOCKED = KOMERSIAL/penyedia. SAME hub as 'CNG Indonesia'; dedup vs that set + vs 18 angle Perusahaan-CNG terdahulu. Mine perusahaan-cng-indonesia by_keyword 'Notes for future' (procurement/SLA/kontrak angles)."

  - keyword: "Perusahaan LNG Indonesia"
    landing_page: "https://gagas.co.id/perusahaan-lng-indonesia/"
    articles: 3
    priority: "new"
    notes: "LNG (bukan CNG). Framing guard: Gagas operates LNG Hub & distributes beyond-pipeline, bukan produsen/FSRU, NEVER 'pionir/pemimpin pasar'. Angle BARU vs 18 angle Perusahaan-LNG terdahulu. Mine perusahaan-lng-indonesia by_keyword 'Notes for future' (BOG management, reliquefaction, mini-LNG, cold-chain, operator training, dsb.)."
