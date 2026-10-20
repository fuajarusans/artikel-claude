---
brief_id: "bill-of-materials-c01"
editor_run_date: "2026-07-06"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-07 — style_addendum.md overrides applied (word band 800–1000; FAQ 2–3; internal link 2; image placeholder 0 by design; Soltius max 2; lead & kesimpulan ≤80 kata; definisi hanya di snippet)"
---

# Editor QC Report — Bill of Materials (BOM): Pengertian, Jenis, dan Contohnya

## Recommendation
**approve**

Draft masuk sudah kuat: struktur mengikuti addendum batch, definisi hanya muncul sekali di snippet, dua tabel menggantikan kebutuhan visual, boundary dedup vs `mrp-c01`/`sap-pp-c01` dijaga, dan sitasi memakai sumber terverifikasi (ASCM edisi ke-18 + learning.sap.com). Perbaikan editor bersifat presisi-fakta dan EYD, bukan struktural: satu kalimat ASCM yang bisa disalahbaca (enam format seolah DI LUAR empat jenis), satu over-claim propagasi revisi di S/4HANA, satu superlatif tak terverifikasi ("paling umum"), satu kalimat tanpa kopula, dan satu LSI yang belum verbatim di body. Semua angka lolos cek terhadap dossier. Siap kirim ke validator.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | quality-check.ps1 AI score 0.04 (pass); em-dash 0; paragraf 1–3 kalimat bervariasi; tanpa klise pembuka |
| Factual & SAP-spec accuracy | 9 | Semua klaim tertelusur ke dossier; 2 presisi-fakta diperbaiki in-place (lihat changelog) |
| On-page SEO compliance | 9 | Meta title 57; meta desc 151; slug 41; keyword di H1/lead/snippet; band kata terpenuhi |
| GEO extractability (§2a) | 9 | Jawaban langsung 50/49/45 kata setelah tiap H2, semua poin BARU (bukan parafrase snippet); 1 poin quotable per paragraf |
| Soltius framing discipline | 10 | Tepat 2 mention (positioning line + soft CTA); "mengimplementasikan dan mendampingi"; tanpa superlatif |
| Internal linking | 9 | Tepat 2 (hub + cousin), inline natural, 200/OK per researcher 2026-07-06 |
| FAQ quality | 9 | 3 Q&A (42/41/44 kata), tiap jawaban memuat fakta/angka, FAQPage-parseable |
| Image-brief completeness | N/A | Batch tanpa image placeholder — by design, bukan isu (style_addendum §3/§7) |

## What I fixed (changelog — 6 edits in-place)
- **Presisi fakta (H2 #1):** "Di luar empat jenis itu, kamus ASCM … mendaftar enam format tampilan…" → "Empat jenis itu bukan daftar lengkap: kamus ASCM … mendaftar enam format tampilan bill of material; dua di antaranya single-level dan indented, sisanya varian kebutuhan khusus…". Kalimat lama menyiratkan 6 format berada DI LUAR 4 jenis; faktanya single-level dan indented termasuk dalam 6 format ASCM (dossier Claim 2).
- **Over-claim dilunakkan (H2 #3):** "satu pembaruan revisi langsung terbaca keempat proses di atas" → "satu struktur itulah yang menjadi acuan bersama keempat proses di atas" — klaim propagasi-instan tidak ada di Claims 7–8; versi baru persis sebatas fakta terverifikasi (BOM header+item; dipakai 4 proses).
- **Superlatif tak terverifikasi (H2 #1):** aside praktisi "temuan paling umum" → "temuan yang sering muncul" (dossier menulis "temuan umum"; "paling" tidak bisa dibuktikan).
- **EYD (H2 #2):** "Tabel berikut ilustrasi BOM kursi kantor…" → "Tabel berikut adalah ilustrasi BOM kursi kantor…" (kopula hilang; label "ilustrasi" tetap eksplisit).
- **LSI (lead):** "daftar material" → "daftar kebutuhan material" — secondary keyword kini hadir verbatim di body (sebelumnya hanya di frontmatter); lead tetap 58 kata (≤80).
- **Frontmatter:** `word_count` 885 → 898 (kalibrasi metode writer setelah +13 kata edit; metode token validator: 985 — dua-duanya di band 800–1000).

## What I flagged (open issues)
- ⚠️ Flag low `vocab-repetition` 35,9% (target <30%) dari quality-check.ps1 — *recommendation*: terima apa adanya. Artikel terminologi-padat 900 kata; entity BOM/produk/komponen sengaja TIDAK dirotasi sinonim demi entity-clarity GEO (addendum §5). Severity low, AI score keseluruhan 0.04 (pass). Catatan yang sama sudah diantisipasi writer.
- ⚠️ Opsi tukar cousin WMS → sibling `mrp-c01` (diizinkan brief) TIDAK dieksekusi — tidak ada bukti live URL sibling tersedia; cousin WMS terverifikasi 200/OK (researcher, 2026-07-06) dipertahankan. Total internal link tetap 2.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5 — berlaku penuh)
- [x] Tanpa pembuka "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" (grep: 0)
- [x] Tanpa "Selain itu" pembuka paragraf (grep: 0)
- [x] Tanpa "Penting untuk dicatat/dipahami" (grep: 0)
- [x] "Dengan demikian" tidak dipakai (grep: 0)
- [x] Em-dash: **0** (≤2)
- [x] Panjang paragraf bervariasi 1–3 kalimat (paragraph CV lolos tool; ada paragraf 1-kalimat disengaja)
- [x] Tidak ada H2 yang jatuh ke bullet-dump; mix prosa + 2 tabel
- [x] Klaim didukung angka (Level 0/1/2; 0,8 m²; 5 roda; 4 baut; 100→500/400/80; 6 format; edisi ke-18; 4 proses; 8 baris; base quantity 1 unit — >4 angka inline, memenuhi addendum §4)
- [x] Tanpa adjektiva hype ("secanggih apa pun" dipakai dalam konteks hedging negatif — bukan pujian vendor)
- [x] Tanpa service-dump
- quality-check.ps1: **AI score 0.04 — pass** (threshold revise 0.30)

### B. Factual & SAP-spec spot-check (7 klaim)
| Claim | Source check | Verdict |
|---|---|---|
| ASCM Supply Chain Dictionary **edisi ke-18** (bukan ke-19) mendaftar **6 format tampilan** BOM | dossier Claims 1–2 (PDF resmi learn.ascm.org, akses 2026-07-06) ✓ | pass (frasa diperbaiki agar 6 format mencakup single-level & indented) |
| BOM dibaca **4 proses inti**: MRP, produksi, pengadaan, product costing | dossier Claim 8; SAP Learning ✓ | pass |
| Struktur SAP S/4HANA: **BOM header (base quantity) + BOM item** | dossier Claim 7; SAP Learning ✓ | pass (klaim propagasi-instan dilunakkan) |
| MRP **meng-explode** BOM → identitas & kuantitas komponen per level | dossier Claims 5, 9 (ASCM + SAP Learning) ✓ | pass (explode saja — netting/lotting/MPS tidak disentuh, sesuai boundary) |
| Aritmetika ilustrasi: 100 kursi → **500 roda kastor, 400 baut M8, 80 m² kain** | dossier Claim 11 (100×5=500; 100×4=400; 100×0,8=80) ✓; tabel berlabel "ilustrasi" ✓ | pass |
| MBOM memuat **kemasan & urutan perakitan** | dossier Claim 10 (PTC/Arena) — ditulis sebagai praktik industri TANPA sitasi inline, tidak diatribusikan ke ASCM/SAP ✓ | pass |
| Soltius: SAP Platinum Partner via United VARs; industri Automotive/Consumer Products/Mill Products; **mengimplementasikan & mendampingi** | dossier Claim 12; company_profile.md; product_matrix.md blacklist ✓ | pass |

Catatan sitasi: kedua sitasi inline memakai URL terverifikasi (ascm.org + learning.sap.com); help.sap.com yang gagal diverifikasi researcher TIDAK dipakai ✓. Faktoid "5.406 istilah" (confidence medium) tetap tidak dipakai ✓. Tidak ada angka "X% kesalahan produksi" karangan ✓.

### C. On-page SEO checklist (seo_playbook §3 + BATCH OVERRIDES style_addendum §7)
- [x] Meta title ≤60 (keyword di 30 pertama) — actual: **57**, keyword mulai char 1
- [x] Meta description 140–160 — actual: **151**
- [x] Slug ≤60, kebab-case, keyword — actual: `bill-of-materials-pengertian-jenis-contoh` (**41**)
- [x] H1 memuat keyword
- [x] H2 body 3–4 (OVERRIDE, bukan 4–5) — actual: **3** (+ FAQ + Kesimpulan)
- [x] ≥1 H2 question-format — actual: **2** ("Apa Saja Jenis…?", "Mengapa BOM Menentukan…?"); H2 honest diganti hedging 2 paragraf di H2 #3 (sesuai addendum §2)
- [x] Keyword di 100 kata pertama (lead, kalimat ke-2)
- [x] Definition snippet 40–60 kata — actual: **45** ("Ringkasnya:") — **satu-satunya definisi**; tidak ada H2 "Apa itu"; jawaban langsung tiap H2 berisi poin baru (cek repetisi definisi: LOLOS)
- [x] LSI ≥8 — counted: **13** (bill of materials; BOM produksi; daftar kebutuhan material; single-level BOM; multi-level/indented BOM; EBOM; MBOM; sub-assembly/rakitan antara; kode item; base quantity; master data produksi; MRP; struktur bertingkat)
- [x] Internal link **TEPAT 2** (OVERRIDE, bukan 3) — hub `digital-manufaktur-sistem` (inline di lead) + cousin `konsep-warehouse-management-system-yang-wajib-anda-tahu` (H2 #3); keduanya 200/OK (researcher 2026-07-06)
- [x] Sitasi eksternal otoritatif 1–2 — actual: **2** (ASCM Dictionary; SAP Learning)
- [x] FAQ **2–3** Q&A (OVERRIDE, bukan 5–7) — actual: **3**, jawaban 42/41/44 kata, tiap jawaban 1 fakta/angka
- [x] Image placeholder: **0 — by design (N/A, bukan isu)**; konsep visual disampaikan via 2 tabel
- [x] ≥1 elemen terstruktur — actual: **2 tabel** (jenis BOM; struktur bertingkat Level–Kode–Komponen–Qty–Satuan)
- [x] Word count **800–1000** (OVERRIDE) — actual: **898** (clean, kalibrasi metode writer) / **985** (token whitespace, metode validator) — keduanya di band; target ~900 tercapai
- [x] Lead ≤80 kata tanpa paragraf roadmap — actual: **58**
- [x] Kesimpulan ≤80 kata — actual: **65**

### C2. GEO extractability (seo_playbook §2a)
- [x] Jawaban langsung 40–60 kata segera setelah tiap H2 — actual: **50 / 49 / 45** kata; masing-masing poin BARU milik H2 itu (dua sumbu jenis; cara baca level + base quantity; BOM dibaca 4 proses) — bukan parafrase snippet
- [x] Satu paragraf = satu poin quotable & verifiable (termasuk paragraf 1-kalimat)
- [x] FAQ parseable untuk FAQPage schema; freshness: `publish_month: 2026-07` di meta block
- [x] Entity jelas: semua akronim di-expand sekali (BOM, EBOM, MBOM, MRP, ERP, ASCM); nama produk penuh "SAP S/4HANA Manufacturing"

### D. Soltius framing discipline (product_matrix.md + style_guide §11 + addendum §6)
- [x] Soltius = implementator/pendamping ("mengimplementasikan dan mendampingi") — TIDAK PERNAH "membuat"
- [x] Self-mention **max 2** (OVERRIDE) — actual: **2** (positioning line Kesimpulan + soft CTA); tanpa aside Soltius di body
- [x] Tanpa superlatif tak terverifikasi (satu "paling umum" pada aside praktisi diperbaiki)
- [x] Nama produk/kredensial cocok dossier + company_profile (Platinum via United VARs; Automotive/Consumer Products/Mill Products)
- [x] Kesimpulan memuat positioning line company_profile
- [x] Soft CTA soltius.co.id = **baris paling akhir**, konsultatif, terpisah dari paragraf Kesimpulan
- [x] Hub link = anchor inline natural di lead ("sistem manufaktur digital") — bukan "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior article: `mrp-c01` (conditional 2026-06) — Jaccard ≈ **0.14** (< 0.4, per brief; dedup DISTINCT)
- Boundary check on final text: relasi BOM→MRP hanya *explode* (tanpa netting/lotting/offsetting, MPS, Inventory Status File, MRP II, MRP Live — milik `mrp-c01`) ✓; tanpa routing/work center/production order (milik `sap-pp-c01`) ✓; costing hanya disebut sebagai fungsi ✓; industri proses (formula/resep) tidak dimuat ✓
- Verdict: **distinct angle confirmed**

### F. Image-brief completeness
- **N/A — batch conditional 2026-07 tanpa image placeholder & tanpa images.json (style_addendum §3/§7).** Grep `{IMAGE_`: 0 kejadian ✓. Tidak diflag sebagai isu.

## Shipping question
Konsultan SAP senior dan CIO skeptis akan menemukan: definisi selaras kamus ASCM, dua sumbu jenis yang decision-oriented, satu tabel BOM bertingkat yang bisa langsung ditiru dengan aritmetika benar, relasi MRP yang presisi tanpa melebar, dan framing Soltius yang jujur. **Approve.**
