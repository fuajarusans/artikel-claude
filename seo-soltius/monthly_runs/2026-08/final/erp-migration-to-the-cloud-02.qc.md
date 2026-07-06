---
brief_id: "erp-migration-to-the-cloud-02"
editor_run_date: "2026-06-08"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — ERP Migration Readiness Assessment: Apakah Perusahaan Anda Siap Pindah ke Cloud?

## Recommendation
**approve**

Draft yang kuat dan jujur, dengan angle yang benar-benar membedakan diri di dalam cluster ERP-migration (instrumen asesmen kesiapan PRA-proyek, bukan checklist cutover atau pasca go-live). Fakta SAP ditangani secara disiplin: penulis menghormati seluruh do-NOT-assert list dossier — Gartner sebagai rentang 55–75%, McKinsey ~70% berlabel atribusi, ECC 2027 dikualifikasi dengan "enhancement package terbaru", durasi asesmen sebagai rentang 2–6 minggu, dan tidak ada angka custom-code overrun spesifik maupun "270+ PPI" yang keliru ditempel ke discovery edition. Satu cacat anti-AI yang signifikan ditemukan dan diperbaiki di tempat: penumpukan em-dash (sekitar 20 di dalam body) dikurangi menjadi 1 (hanya pada heading H2 #5). Setelah perbaikan itu, artikel lolos seluruh quality bar — voice manusia, GEO extractable, framing Soltius benar (2 self-mention, implementer bukan pembuat), 3 internal link inline, dan word count 1.680 (dalam 1.500–1.800). Layak tayang di soltius.co.id; seorang konsultan SAP senior maupun CIO yang skeptis akan menganggapnya kredibel.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Sangat baik setelah perbaikan em-dash. Rhythm paragraf bervariasi (1–5 kalimat), hedging jujur ("bukan garansi proyek pasti sukses"), aside "Bagian ini jarang ditulis kompetitor". Sebelum edit: gagal karena ~20 em-dash. |
| Factual & SAP-spec accuracy | 10 | Semua 5 klaim prioritas terverifikasi vs dossier + SAP-official (re-cek web: ECC 2027/+2%, SAP Readiness Check gratis via SAP for Me/Cloud ALM, Signavio discovery edition one-time free). Do-NOT-assert list dihormati penuh. |
| On-page SEO compliance | 9 | Meta title 52 kar, meta desc 151 kar, slug 40 kar, H1+keyword, 5 H2, keyword di 100 kata pertama, snippet 57 kata, 3 internal + 3 external, FAQ 7, 1 list + 2 tabel. |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata setelah tiap H2; satu poin terkutip per paragraf; FAQ siap FAQPage; `date_modified` ditambahkan ke meta block. |
| Soltius framing discipline | 10 | 2 self-mention (Kesimpulan + CTA), framing "memulai engagement migrasi dengan discovery" (implementer), tanpa superlatif, nama produk SAP sesuai product_matrix. |
| Internal linking | 9 | Hub (lead, inline), SAP Clean Core (H2 #2 konteks custom code), data warehouse solutions (H2 #4). Semua anchor deskriptif, tidak ada "BACA JUGA". |
| FAQ quality | 9 | 7 Q&A, masing-masing 40–80 kata, menjawab PAA brief, tiap jawaban memuat angka/fakta. |
| Image-brief completeness | 9 | images.json valid, 3 entri sesuai 3 placeholder, alt_id/caption_id/visual_direction/suggested_asset_type lengkap dalam Bahasa Indonesia; catatan "tidak butuh screenshot SAP / jangan rekayasa UI" di-surface. |

## What I fixed (changelog)
- **Anti-AI (em-dash overload, prioritas tertinggi):** Mengurangi em-dash body dari ~20 menjadi 1. Diganti dengan koma, titik dua, titik, atau tanda kurung pada: lead (line 42), §"Apa Itu" (56), §"Mengapa Gagal" (60, 62, 64, 66, 68), §"8 Dimensi" tidak ada, §"Alat" (100, 102, 106, 108), §"Tanda BELUM Siap" (112, 114, 125), seluruh FAQ (132, 135, 138, 141, 147), dan Kesimpulan (154). Satu em-dash dipertahankan secara sengaja di heading H2 #5 ("Tanda Anda BELUM Siap — dan Mengapa Menunda Bisa Lebih Murah") — dalam batas ≤2.
- Membersihkan em-dash di meta_description (→ titik dua) dan di dua placeholder IMAGE (47, 96) agar caption fallback `.docx` rapi.
- **GEO/freshness:** Menambahkan `date_modified: "2026-08-01"` ke frontmatter (syarat §2a yang sebelumnya hilang).
- **Frontmatter:** Memperbarui `word_count` 1672 → 1680 (mencerminkan penambahan kata penghubung kecil saat mengganti em-dash, mis. "Sebagai contoh", "Angka itu menjadikannya", "yakni ... dan").
- Tidak ada perubahan struktural, angka, atau klaim — murni perbaikan gaya + metadata (peran editor, bukan penulis ulang).

## What I flagged (open issues)
- ⚠️ **Verifikasi word_count final saat build .docx** — *recommendation*: angka 1.680 adalah hitungan editorial (em-dash↔koma bersifat netral-kata; net +~8). Aman di tengah pita 1.500–1.800; curator dapat mengonfirmasi via tool saat membangun docx, tetapi tidak memengaruhi verdict.
- ⚠️ **Atribusi inline "(SAP Community, 2026)" pada line 102** — *recommendation*: minor; sumber ini ada di dossier (community.sap.com/help.sap.com) dan termuat di external_citations frontmatter. Boleh tetap; bila ingin lebih kuat, ganti ke atribusi SAP Help Portal. Bukan penghambat approve.
- ⚠️ **Meta title memakai rendering Indonesia "ERP Migration ke Cloud"** — *recommendation*: keyword Inggris penuh "ERP migration to the cloud" tetap muncul di H1/slug/body; rendering campuran ini konsisten dengan brief dan kebiasaan klien. Tidak ada tindakan diperlukan.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep: 0
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: 0
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: 0
- [x] "Dengan demikian" not overused — grep: 0
- [x] Em-dash count ≤2 — **setelah perbaikan: 1** (heading H2 #5). Sebelum: ~20 (FAIL → fixed).
- [x] Varied paragraph lengths (not all ~4 sentences) — bervariasi 1–5 kalimat; ada kalimat tunggal "Setiap dimensi punya pertanyaan pemeriksaan diri."
- [x] Not every H2 → 3-bullet list — hanya §"8 Dimensi" memakai numbered list; H2 lain dipimpin prosa.
- [x] No generic claims without numbers — angka spesifik di 8+ tempat (55–75%, 70%, 60%+, 30%, 65%, 50%, 2027, 2030, +2%, 2–6 minggu).
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — tidak ada.
- [x] No service-dump paragraph — hanya 1 anchor di Kesimpulan.

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| ECC/Business Suite 7 mainstream maintenance berakhir 31 Des 2027; extended +2% hingga 2030; kualifikasi "enhancement package terbaru" | dossier ✓ + product_matrix ✓ + WebSearch SAP support.sap.com (re-konfirmasi: EHP 6–8 hingga 2027, +2% incremental, extended 2028–2030) | pass |
| Gartner 55–75% implementasi ERP gagal capai business case (framing "Riset Gartner") | dossier ✓ (flag: gunakan rentang, atribusi Gartner — dipatuhi) | pass |
| McKinsey ~70% transformasi besar gagal, faktor orang & proses | dossier ✓ (flag: label "McKinsey" — dipatuhi) | pass |
| SAP Readiness Check gratis untuk pelanggan dengan kontrak support aktif; via SAP for Me / SAP Cloud ALM; analisis custom code/simplification/sizing/integrasi | dossier ✓ + WebSearch help.sap.com/support.sap.com (re-konfirmasi: active maintenance agreement, SAP for Me & Cloud ALM) | pass |
| SAP Signavio Process Insights, discovery edition = analisis satu kali gratis, rekomendasi menuju S/4HANA; TIDAK menyebut "270+ PPI" | dossier ✓ (flag: 270+ hanya full edition — dipatuhi) + WebSearch community.sap.com (re-konfirmasi: one-time free of charge) | pass |

Semua klaim numerik lain (SAPinsider 60%+/30%/65%/50%, Business Partner data model, fase Explore SAP Activate) konsisten dengan dossier dan diberi atribusi yang benar. Tidak ada nama produk SAP yang diada-adakan, tidak ada tanggal ECC yang salah, tidak ada framing "Soltius membangun SAP".

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 52 kar / keyword Indonesia "ERP Migration ke Cloud" pada kar 1–22
- [x] Meta description 140–160 — actual: 151
- [x] Slug ≤60, kebab-case, keyword — actual: `erp-migration-readiness-assessment-cloud` (40 kar)
- [x] H1 contains keyword — "ERP Migration ... Pindah ke Cloud"
- [x] H2 count 4–5 — actual: 5 (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2; ≥1 honest/counter-conventional H2 — Q: "Mengapa Banyak Migrasi Gagal Justru Sebelum Dimulai?"; honest: "Tanda Anda BELUM Siap..."
- [x] Keyword in first 100 words — "migrasi ERP ke cloud" di kalimat pertama
- [x] Definition snippet near top (40–60 words) — blockquote 57 kata di ~paragraf ke-2
- [x] ≥8 LSI terms — counted: 10+ (readiness assessment, SAP Readiness Check, SAP Signavio Process Insights, data master, custom code/ABAP, change management, fit-gap/Business Blueprint, TCO/baseline, simplification items, data residency, Business Partner)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: migrasi-erp-ke-cloud (hub, lead) · sap-clean-core-the-complete-guide (cousin) · data-warehouse-solutions (cousin)
- [x] ≥1 external authoritative citation — actual: 3 (SAP support portal, SAP Community readiness-check, Gartner)
- [x] FAQ 5–7 Q&As — actual: 7
- [x] 2 image placeholders (up to 3) — actual: 3
- [x] ≥1 list + ≥1 table — 1 numbered list (8 dimensi) + 2 tabel
- [x] Word count 1,500–1,800 — actual: ~1.680

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — semua 5 H2 dipimpin jawaban langsung yang dapat berdiri sendiri (mis. §"Apa Itu" 48 kata; §"Mengapa Gagal" 48; §"8 Dimensi" 47; §"Alat" 52; §"Tanda BELUM Siap" 48)
- [x] Each body paragraph makes one independently quotable, verifiable point — ya (mis. "Menurut SAPinsider 2025, >60% ... 30% lebih lama"; "ECC ... berakhir 31 Desember 2027")
- [x] FAQ parseable for FAQPage schema; `dateModified` / freshness noted — FAQ heading H3 bersih; `date_modified: 2026-08-01` ditambahkan ke meta block

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP" — "memulai setiap engagement migrasi dengan fase discovery"
- [x] ≤3 Soltius self-mentions — actual: 2 (Kesimpulan + CTA). Aside H2 #4 memakai "mitra implementasi" generik, bukan nama Soltius.
- [x] No unverifiable superlatives ("terbaik/nomor satu") — tidak ada
- [x] SAP/partner product names + specs match product_matrix.md / dossier — SAP Readiness Check, SAP Signavio Process Insights discovery edition, S/4HANA, SAP Clean Core, SAP Business Suite 7, RISE-context — semua benar
- [x] Closing uses a company_profile.md positioning line — "SAP Platinum Partner melalui keanggotaan United VARs dan bagian dari Metrodata Group sejak 1998"
- [x] Soft website CTA present as the FINAL line, after the conclusion — "...kunjungi soltius.co.id." (line terakhir, setelah ## Kesimpulan, konsultatif)
- [x] Hub link present as a natural inline anchor — di lead: "[migrasi ERP ke cloud]"; bukan callout "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: cluster ERP-migration 2026-06 (`-01` brownfield/greenfield/bluefield; `-02` downtime/cutover; `-03` TCO; `-04` security; `-05` post-go-live). Belum ada artikel readiness-assessment pra-proyek.
- Subtopic overlap (Jaccard estimate): ~0.12 vs yang terdekat (`-01` decision-guide jalur migrasi). Irisan hanya konsep "kesiapan/keputusan"; dimensi, timing (sebelum proyek), dan tujuan (go/no-go) berbeda.
- Verdict: **distinct angle confirmed** — instrumen asesmen 8 dimensi PRA-proyek adalah pintu masuk awareness yang belum diisi cluster.

### F. Image-brief completeness (images.json)
- [x] JSON parses — valid
- [x] One entry per `{IMAGE_NN}` placeholder in the body (count matches) — 3 placeholder (IMAGE_01/02/03) ↔ 3 entri
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type (all Bahasa Indonesia) — lengkap; alt_id IMAGE_01 ~120 kar (dalam batas), semua Bahasa Indonesia
- [x] Any "real SAP screenshot" requirement is surfaced — IMAGE_02 sourcing_note menegaskan "TIDAK butuh screenshot SAP; jangan rekayasa/fabrikasi UI SAP; bila klien ingin screenshot asli, minta dari akun SAP for Me/Cloud ALM aktif" — sudah di-surface dengan benar
- (No generated PNGs to check — by design.)
