---
brief_id: "perusahaan-cng-indonesia-03"
editor_run_date: "2026-06-09"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Industri yang Dilayani Perusahaan CNG + Cara Mulai Berlangganan

## Recommendation
**approve**

The draft arrived in strong shape and clears every quality gate. The anti-AI scan is clean (no banned openers, no consecutive "Selain itu", em-dash count brought to 0 in body prose, paragraph rhythm varied). All five fact spot-checks pass against the dossier — critically, the draft already honors every DEDUP-SENSITIVE and Flag instruction: **RS Hasan Sadikin** (not RS Kariadi, which the dossier flags as gas pipa not CNG), **C-Cyl ~300 m³/bulan** (not the fabricated "20 tabung 50 kg"), onboarding framed as **"bervariasi tergantung survei"** with no invented SLA, and **600 pelanggan (Sep 2025)**. The framing stays vendor-neutral and category-level throughout the body (any CNG provider); "Gaslink" surfaces only in the closing as the PGN Gagas anchor — so the distinct angle vs. the committed `gaslink-03` (Gaslink-specific, retrofit-led) holds at Jaccard ~0.30. Two minor in-place fixes applied (meta description trimmed 163→156 chars; one em-dash removed; conclusion lightly tightened). Net length change is negative (1559→1555), well within ≤1600. No open issues block shipping.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Clean scan; varied rhythm; honest-hedging "kapan belum layak" section; mixed 1- and multi-sentence paragraphs. |
| Factual & energi-gas / CNG accuracy | 10 | All 5 spot-checks pass vs dossier; every flagged number handled correctly (300 m³ C-Cyl, no SLA, RS Hasan Sadikin not Kariadi, HGBT 7 sectors). |
| On-page SEO compliance | 9 | All checklist items pass after meta-description trim. Title 52 chars, slug 51, 3 internal links, ESDM + BPH Migas citations, table + numbered + bullet lists. |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after each of the 5 major H2s; one quotable point per paragraph; FAQ FAQPage-ready; dateModified present. |
| PGN Gagas framing discipline | 10 | Distributor/penyalur framing, no superlatives, 1 named self-mention (closing) + 2 gagas.co.id references — within ≤3. No "memproduksi" error. |
| Internal linking | 10 | Hub in lead (perusahaan-cng-indonesia) + 2 cousins (gasku mid-body, gaslink in conclusion); natural inline anchors, no "BACA JUGA". |
| FAQ quality | 9 | 6 Q&As, each 40–80 words, self-contained, each carries a number/fact; mirrors PAA. |
| Image-brief completeness | 9 | 3 entries, markers match body placeholders, alt_id ≤125 chars, all fields Bahasa Indonesia, sourcing notes flag "no real photo needed". |

## What I fixed (changelog)
- **Meta description**: trimmed from 163 → 156 chars (removed "syarat " before "konsumsi minimum") to land inside the 150–160 §2a sweet spot. Keyword still first; all value props retained.
- **Em-dash reduction**: removed the single body em-dash in the "Skala sektor ini bukan ceruk kecil…" paragraph ("(Kementerian ESDM, 2024) — penggerak" → "(Kementerian ESDM, 2024), penggerak"). Body em-dash count now 0 (≤2 limit; the remaining "—" characters live only inside `{IMAGE_NN}` design-brief arrows and FAQ-free body, not prose).
- **Conclusion tightened**: merged the trailing RS Hasan Sadikin sentence into the positioning sentence and removed flab ("dari segmen industri" → "industri"; dropped "hingga"). Improves rhythm of an otherwise overloaded closing paragraph; net −4 words.
- **Frontmatter `word_count`**: updated 1559 → 1555 to reflect the net-negative edits.
- Copied the draft to `final/perusahaan-cng-indonesia-03.id.md` with the above applied in-place.

## What I flagged (open issues)
- None blocking. *(Informational only)* The conclusion paragraph still does meaningful work (positioning line + cousin link + 600-pelanggan stat + RS Hasan Sadikin example) — it is dense but accurate and reads cleanly after tightening; left as-is to preserve the closing's evidentiary weight and the mandated cousin anchor placement.
- *(Informational only)* HGBT pricing (USD 7 / 6.5 MMBTU) was correctly **omitted** by the writer per the dossier's fast-moving-figure flag; only the 7-sector list + Kepmen number are cited. No action needed; noting so a future refresh doesn't re-add a volatile number.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep: 0 matches
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: 0 matches
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: 0 matches
- [x] "Dengan demikian" not overused — grep: 0 matches
- [x] Em-dash count ≤2 — body prose now 0 after fix
- [x] Varied paragraph lengths — mix of 1-sentence ("Lalu di mana posisi UMKM? Masih masuk akal selama konsumsinya rutin.") and 4–5-sentence blocks
- [x] Not every H2 → 3-bullet list — H2s lead with prose; only the "kapan belum layak" H2 uses bullets, the onboarding H2 uses a numbered list, the sector H2 uses a table
- [x] No generic claims without numbers — 40%, 1.473/3.881 BBTUD, 300 m³, 600 pelanggan, Rp 3 miliar, 7 sektor HGBT, 6 langkah
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — none present
- [x] No service-dump paragraph — single anchor (Gaslink) in closing only

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Industri = 40% pemanfaatan gas bumi domestik 2024; 1.473 BBTUD dari 3.881 BBTUD (Kementerian ESDM, 2024) | dossier core facts (line 23) ✓ — exact match | pass |
| C-Cyl ~300 m³/bulan untuk usaha kecil berlahan terbatas (Katadata, Des 2021) | dossier ✓ (line 67–70); honors Flag — NOT "20 tabung 50 kg" | pass |
| 7 sektor HGBT: pupuk, petrokimia, oleokimia, baja, keramik, kaca, sarung tangan karet (Kepmen ESDM No. 76.K/2025) | dossier ✓ (line 28); Horeka/laundry/RS correctly excluded (line 211) | pass |
| 600 pelanggan Gaslink per September 2025 (industri + Horeka) | dossier ✓ (line 52–54); breakdown 189/374 correctly avoided per Flag | pass |
| RS Hasan Sadikin Bandung hemat ~Rp 3 miliar/tahun via Gaslink CNG (Liputan6) | dossier ✓ (line 47–50, 229); honors Flag — RS Hasan Sadikin (CNG) not RS Kariadi (gas pipa) | pass |

All five pass; no WebSearch needed — every claim traces to a dossier-verified source with date attribution. No invented product names, specs, or dates.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 52 chars / keyword at pos 0
- [x] Meta description 140–160 — actual: 156 (after fix; was 163)
- [x] Slug ≤60, kebab-case, keyword — actual: `perusahaan-cng-indonesia-industri-cara-berlangganan` (51 chars)
- [x] H1 contains keyword — "Industri yang Dilayani Perusahaan CNG + Cara Mulai Berlangganan"
- [x] H2 count 4–5 — actual: 5 body H2s (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2; ≥1 honest/counter-conventional H2 — "Berapa Konsumsi Minimum…?" + "Kapan Usaha Anda BELUM Layak…"
- [x] Keyword in first 100 words — present in lead (sentence 3, inline hub anchor)
- [x] Definition snippet near top (40–60 words) — blockquote ~60 words after lead
- [x] ≥8 LSI terms — counted ~18: GTM, C-Cyl, PRS, beyond pipeline, virtual pipeline, Horeka, Mother Station, SPBG, MRU, HGBT, BBTUD, smart meter, kiln, furnace, boiler, dryer, komisioning, survei lokasi
- [x] 3 internal links (1 hub + 2 cousins) — perusahaan-cng-indonesia (lead) / gasku (mid-body) / gaslink (conclusion)
- [x] ≥1 external authoritative citation — actual: 2 inline (Kementerian ESDM ×2, BPH Migas) + frontmatter
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 3 ({IMAGE_01/02/03})
- [x] ≥1 list + ≥1 table — numbered list (6 steps) + bullet list (kapan belum) + 1 sector table
- [x] Word count 1,200–1,600 — actual: 1,555

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verified on all 5 H2s (opener sentences are standalone-quotable, ~40–50 words each)
- [x] Each body paragraph makes one independently quotable, verifiable point — e.g. "Pada 2024, sektor industri menyerap 40% pemanfaatan gas bumi domestik… 1.473 BBTUD dari 3.881 BBTUD" is one claim + one sourced fact
- [x] FAQ parseable for FAQPage schema; `dateModified` present in meta block (2026-06-09)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas framed as gas-energy provider/distributor ("menghadirkan gas bumi… lewat solusi CNG") — NOT producing gas
- [x] ≤3 PGN Gagas self-mentions — actual: 1 named "PGN Gagas" (closing) + 2 "gagas.co.id" (conclusion link + CTA) = within budget
- [x] No unverifiable superlatives ("terbaik/nomor satu/terbesar") — none
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier — Gaslink, GTM, C-Cyl, PRS, Mother Station, SPBG/MRU all accurate
- [x] Closing uses a company_profile.md positioning line — "Sebagai anak usaha PGN bagian Subholding Gas Pertamina, PGN Gagas menghadirkan gas bumi ke wilayah tak berpipa lewat solusi CNG…"
- [x] Soft website CTA present as the FINAL line, after the conclusion — "…kunjungi gagas.co.id dan mulai konsultasinya." (consultative, not "beli sekarang")
- [x] Hub link present as natural inline anchor in the lead — "[perusahaan CNG Indonesia](…)" — NOT a "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `gaslink-03` ("Industri yang Cocok Pakai Gaslink + Cara Penerapannya", committed/editor-approved). No prior article exists for the `perusahaan-cng-indonesia` hub itself.
- Subtopic overlap (Jaccard estimate): **~0.30**. Shared: "profil sektor" + "cara berlangganan/onboarding". Distinct in this article: vendor-neutral/category framing (any CNG provider vs. gaslink-03's Gaslink-specific product frame), a dedicated **syarat konsumsi minimum** H2 (C-Cyl 300 m³ / GTM threshold + GTM-vs-C-Cyl), and the deliberate **omission of the retrofit/burner-orifice technical section** that anchors gaslink-03. gaslink-03 has a 7-step onboarding (incl. retrofit); this has 6 (no retrofit).
- Verdict: **distinct angle confirmed**. Overlap below 0.4; the dedup-sensitive instructions were preserved verbatim, so the cluster reads complementary, not duplicate.

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per `{IMAGE_NN}` placeholder — 3 placeholders in body (IMAGE_01/02/03), 3 entries, markers match
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type — all present, all Bahasa Indonesia (alt_id lengths ~121/121/113 chars)
- [x] Any "real photo/site asset" requirement surfaced — sourcing_notes explicitly state originals only, "tidak memerlukan foto fasilitas atau aset branding PGN Gagas" and "jangan memfabrikasi visual truk GTM / logo / fasilitas nyata" (IMAGE_03). No real-photo dependency.
- (No generated PNGs to check — design team executes from this brief.)
