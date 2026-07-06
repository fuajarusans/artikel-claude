---
brief_id: "perusahaan-lng-indonesia-03"
editor_run_date: "2026-06-09"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — LNG untuk Industri: Kapan Lebih Cocok Daripada CNG?

## Recommendation
**approve**

Artikel ini lulus semua gate dengan margin nyaman dan menangani justru bagian yang paling rawan untuk keyword ini — yaitu posisi LNG PGN Gagas — dengan tepat. Penulis membingkai Gagas sebagai distributor/operator yang "menyalurkan gas bumi beyond-pipeline lewat kedua moda, termasuk melalui pengembangan LNG Hub", bukan sebagai "perusahaan LNG" atau produsen, dan tidak menyamakannya dengan PT PGN LNG Indonesia (yang muncul hanya sebagai sumber kutipan edukasi eksternal). Semua angka sensitif diatribusikan dan dibingkai sebagai rentang/acuan: ~300 km secara eksplisit disebut "acuan praktik industri global, bukan regulasi Indonesia" (diulang tiga kali di tiga lokasi), densitas energi "~2–3×" dengan sumber (bukan "2,4×" tunggal), dan Conrad Bali ~700–800 MMBTU/bulan diatribusikan ke "jaringan Subholding Gas (Universitas Pertamina, 2022)", bukan diklaim sebagai pelanggan Gagas. Tidak ada harga LNG/MMBTU, tidak ada "terbesar/terbaik" tentang Gagas, hanya 1 self-mention eksplisit + CTA (≤3). Scan anti-AI bersih (nol opener/transisi terlarang; nol em-dash di body prosa). Angle technical-decision tegas berbeda dari gaslink-02 (biaya) dan cng-indonesia-02 (tiga jenis gas). Satu perbaikan in-place: memperpanjang jawaban pembuka H2 #3 dari ~32 ke ~45 kata agar memenuhi ambang ekstraksi GEO 40–60 kata. Layak tayang.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Hook pain konkret; ritme paragraf bervariasi (1–6 kalimat); "bukan karena lebih canggih" mendeflasikan hype; nol AI-tell. |
| Factual & energi-gas / CNG accuracy | 9 | 5 klaim diverifikasi (2 via WebSearch); semua selaras dossier + product_matrix; angka sensitif diberi atribusi & rentang. |
| On-page SEO compliance | 9 | Meta title 47 chars, meta desc 158, slug 45, 3 internal links, 2 sitasi otoritatif, FAQ 6, 1 tabel + 2 list. Semua dalam ambang. |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata setelah tiap H2 (H2 #3 diperbaiki). Satu poin quotable per paragraf. FAQ FAQPage-ready; dateModified ada. |
| PGN Gagas framing discipline | 10 | Distributor/"pengembangan LNG Hub" — bukan perusahaan LNG, bukan produsen, tidak dikonflasi dengan PT PGN LNG Indonesia. 1 mention + CTA. |
| Internal linking | 10 | Hub LNG inline di lead; cousin CNG di Kesimpulan; cousin Gaslink mid-body — ketiganya kontekstual, bukan callout "BACA JUGA". |
| FAQ quality | 9 | 6 Q&A, masing-masing 40–80 kata, self-contained, satu angka per jawaban; sengaja menghindari PAA biaya (domain gaslink-02). |
| Image-brief completeness | 9 | JSON valid; 2 entri = 2 placeholder; alt_id/caption_id/visual_direction/asset_type lengkap (Bahasa Indonesia); sourcing_note jelas non-foto. |

## What I fixed (changelog)
- **GEO §2a — H2 #3 ("Tabel Keputusan"):** memperpanjang jawaban pembuka dari ~32 kata (di bawah ambang 40) menjadi ~45 kata, menambahkan kriteria pembanding yang quotable ("densitas energi tinggi" / "modal awal lebih ringan") dan pointer "delapan aspek pembanding" (akurat — tabel berisi 8 baris). Ini satu-satunya gap GEO di draft.
- **Frontmatter `word_count`:** 1554 → 1576 untuk mencerminkan penambahan kecil di atas (net +~22 kata; tetap ≤1600).
- Tidak ada koreksi faktual yang diperlukan — draft sudah benar pada semua titik PROTECT (300 km, Conrad Bali, densitas energi, posisi LNG Gagas).

## What I flagged (open issues)
- ⚠️ **Status operasional LNG Hub Bandung (dossier Flag 1).** Draft secara aman memakai "pengembangan LNG Hub" (bukan "mengoperasikan"), jadi tidak ada klaim yang perlu dikoreksi. *Rekomendasi*: jika tim ingin menyebut status terkini saat tayang, verifikasi dulu ke gagas.co.id; framing saat ini aman tanpa pembaruan.
- ⚠️ **PAA biaya sengaja tidak dijawab di FAQ** ("Mana lebih ekonomis LNG vs CNG?", "Apakah LNG lebih hemat dari solar/LPG?"). *Rekomendasi*: ini keputusan editorial yang benar — perbandingan biaya numerik adalah domain gaslink-02 dan dilarang PROTECT (no LNG price/MMBTU). Dijawab kualitatif di H2 #5 ("LNG selalu lebih hemat" = salah kaprah) tanpa angka. Tidak perlu tindakan; dicatat agar tidak dibaca sebagai kelalaian.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep: 0 hits
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: 0 hits
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: 0 hits
- [x] "Dengan demikian" not overused — grep: 0 hits
- [x] Em-dash count ≤2 — body prosa: 0 em-dash (hanya di dalam dua placeholder {IMAGE_NN}, yaitu brief desain, bukan body)
- [x] Varied paragraph lengths — campuran 1–6 kalimat; H2 #1 punya paragraf 1-kalimat ("bukan karena lebih canggih"); list + prosa berselang
- [x] Not every H2 → 3-bullet list — H2 #2 = numbered; H2 #3 = tabel; H2 #4/#5 = prosa + bullet; H2 #1 = prosa murni
- [x] No generic claims without numbers — 6+ angka konkret (−162 °C, ~1/600, ~1/250, ~2–3×, ~300 km, ~20.000–40.000 L, ~700–800 MMBTU, 24% bauran 2050)
- [x] No stacked hype adjectives — satu-satunya "canggih" dipakai untuk menegasikan hype ("bukan karena lebih canggih")
- [x] No service-dump paragraph — hanya 1 anchor Gagas relevan di Kesimpulan

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| LNG didinginkan −162 °C, volume menyusut ~600× | dossier Klaim 1–2 ✓ + WebSearch (liquefiednaturalgas.org, Shell, Wikipedia) ✓ | pass |
| Densitas energi LNG ~2–3× CNG (bukan "2,4×" tunggal) | dossier Klaim 4 + Flag 3 ✓ + WebSearch (Wikipedia: 22 vs 9 MJ/L ≈ 2,4×) — draft pakai rentang beratribusi | pass |
| ~300 km = acuan praktik industri, BUKAN regulasi Indonesia | dossier Klaim 5 + Flag 2 ✓ + WebSearch (Galileo, CIMC: breakpoint umum ~300 km) — draft bingkai eksplisit "bukan regulasi Indonesia" | pass |
| Conrad Bali ~700–800 MMBTU/bulan via jaringan Subholding Gas | dossier Klaim 12 ✓ (atribusi Universitas Pertamina 2022; bukan diklaim pelanggan Gagas) | pass |
| LNG ISO tank ~20.000–40.000 liter, virtual pipeline | dossier Klaim 6 ✓ + product_matrix (PGN LNG Indonesia sebagai sumber edukasi) | pass |

Tambahan: posisi LNG Gagas ("pengembangan LNG Hub", distributor, tidak dikonflasi dengan PT PGN LNG Indonesia) diverifikasi vs product_matrix.md catatan (ii) + company_profile.md blacklist + dossier GUARDRAIL/Flag 1 — **pass**.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **47 chars**; "LNG untuk Industri" di posisi 1–18
- [x] Meta description 140–160 — actual: **158 chars**
- [x] Slug ≤60, kebab-case, keyword — actual: `lng-untuk-industri-kapan-lebih-cocok-dari-cng` (**45 chars**)
- [x] H1 contains keyword — "LNG untuk Industri..." (varian keyword "Perusahaan LNG Indonesia")
- [x] H2 count 4–5 — actual: **5 body H2** (definisi, pertanyaan, tabel, praktis, jujur) + FAQ + Kesimpulan
- [x] ≥1 question-format H2; ≥1 honest/counter-conventional H2 — H2 #2 (pertanyaan) + H2 #5 ("Kapan LNG BELUM Cocok")
- [x] Keyword in first 100 words — "LNG untuk industri" di kalimat ke-4 lead (anchor hub)
- [x] Definition snippet near top (40–60 words) — blockquote "Secara singkat" ~57 kata
- [x] ≥8 LSI terms — counted: **10+** (densitas energi, tangki kriogenik, vaporizer/regasifikasi, boil-off gas, ISO tank, beyond pipeline, baseline konsumsi, virtual pipeline, MMBTU, SRU, PRS)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: `/perusahaan-lng-indonesia/` (lead), `/gaslink/` (mid-body), `/perusahaan-cng-indonesia/` (Kesimpulan)
- [x] ≥1 external authoritative citation — actual: **2** (Kementerian ESDM/migas.esdm.go.id; PGN LNG Indonesia ISO tank). Inline: Shell Global, MET Group, Universitas Pertamina juga disebut.
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] 2 image placeholders (up to 3) — actual: **2** (IMAGE_01, IMAGE_02), keduanya tetap di body
- [x] ≥1 list + ≥1 table — 1 numbered list (H2 #2) + 2 bullet list (H2 #4, #5) + 1 tabel keputusan
- [x] Word count 1,200–1,600 — actual: **~1.576** (draft asli 1554 + edit GEO)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — H2 #1 ~56, #2 ~50, #3 ~45 (diperbaiki dari ~32), #4 ~44, #5 ~55 — semua dalam band
- [x] Each body paragraph makes one independently quotable, verifiable point — ya; tiap paragraf membawa satu klaim + fakta bersumber
- [x] FAQ parseable for FAQPage schema; dateModified / freshness noted — struktur ### Q → paragraf jawaban; `date_modified: 2026-06-09` di meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/distributor ("menyalurkan...beyond-pipeline lewat kedua moda...pengembangan LNG Hub") — BUKAN "perusahaan LNG", BUKAN produsen, BUKAN dikonflasi dengan PT PGN LNG Indonesia
- [x] ≤3 PGN Gagas self-mentions — actual: **1 eksplisit** ("PGN Gagas" di Kesimpulan) + CTA gagas.co.id; aside mid-body bersifat netral ("penyedia yang menyalurkan baik CNG maupun LNG") tanpa menyebut nama
- [x] No unverifiable superlatives — nol "terbaik/nomor satu/terbesar" tentang Gagas ("terbesar" hanya soal industri sebagai konsumen gas, fakta ESDM bersumber)
- [x] Energi-gas / LNG/CNG names + specs match product_matrix.md / dossier — LNG/CNG, ISO tank, vaporizer/SRU, BOG, PRS, Gaslink, LNG Hub semua konsisten
- [x] Closing uses a company_profile.md positioning line — "anak usaha PGN yang merupakan bagian dari Subholding Gas Pertamina..." (parafrase positioning line resmi)
- [x] Soft website CTA present as the FINAL line — "...kunjungi gagas.co.id dan mulai konsultasinya." (konsultatif, bukan "beli sekarang")
- [x] Hub link present as natural inline anchor — "[LNG untuk industri](...)" di lead; bukan callout

### E. Anti-cannibalization spot check
- Closest prior articles for this/related keyword: **gaslink-02** (`gaslink-vs-lpg-vs-solar-biaya-efisiensi`, comparison) dan **cng-indonesia-02** (`cng-vs-lng-vs-lpg-apa-bedanya`, comparison)
- Subtopic overlap (Jaccard estimate): **~0,1 vs gaslink-02** (artikel ini = keputusan teknis moda LNG vs CNG; gaslink-02 = biaya Gaslink vs LPG/solar, harga/MMBTU/payback — tidak ada angka harga di sini); **~0,25–0,3 vs cng-indonesia-02** (cng-02 = tiga JENIS gas edukasi umum; artikel ini = dua MODA gas yang sama + infrastruktur kriogenik sisi pelanggan, vaporizer/SRU, BOG, tabel keputusan, "kapan BELUM cocok" — semua tidak ada di cng-02)
- Verdict: **distinct angle confirmed** — technical-decision tegas terpisah dari cost (gaslink-02) dan dari three-types education (cng-02). Di bawah ambang 0,4.

### F. Image-brief completeness (images.json)
- [x] JSON parses — valid
- [x] One entry per {IMAGE_NN} placeholder — 2 entri (IMAGE_01, IMAGE_02) = 2 placeholder di body; `placeholder_kept_in_body: true` keduanya
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type — lengkap (alt_id ~107 & ~115 chars; semua Bahasa Indonesia)
- [x] Any "real photo/site asset" requirement surfaced — `sourcing_note` menegaskan "BUKAN foto fasilitas nyata", aset ilustrasi/diagram netral tanpa branding Gagas; tidak ada kebutuhan foto situs
- (Tidak ada PNG untuk dicek — sesuai desain; tim desain klien yang mengeksekusi dari brief ini.)

## The shipping question
Jika tayang di gagas.co.id besok dan dibaca seorang praktisi energi/gas senior serta pembeli industri yang skeptis: kerangka empat-sumbu, tabel delapan-aspek yang screenshot-friendly, bagian jujur "kapan LNG BELUM cocok", dan caveat yang jujur (~300 km bukan regulasi; densitas sebagai rentang; LNG Hub sebagai "pengembangan") akan terbaca kredibel, bukan brosur. WEBARQ Promote bisa bangga. **Approve.**
