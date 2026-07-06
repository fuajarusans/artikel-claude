---
brief_id: "sap-clean-core-02"
editor_run_date: "2026-06-08"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Integrasi Clean Core: Cara Menghubungkan SAP Tanpa Mengotori Core

## Recommendation
**approve**

Artikel ini adalah draft yang kuat: angle integrasi (dimensi clean core yang belum pernah jadi subjek utama di cluster) benar-benar segar, fakta SAP terverifikasi terhadap dossier dengan label temporal yang disiplin (3.800+ paket per 2025, 30+ policy types per SAP Help, 2.700+ API per publikasi 2024), dan penamaan produk terkini ditangani dengan benar (SAP Business Accelerator Hub, SAP Integration Suite advanced event mesh). GEO sangat baik — kelima H2 punya jawaban langsung 40–60 kata, dan struktur tabel/numbered list/bullet/FAQ membuat konten mudah dikutip mesin AI. Framing Soltius tepat (mengintegrasikan, bukan membangun; eksplisit "bukan membangun platformnya"; satu blok mention; tanpa superlatif). Satu-satunya pelanggaran nyata adalah hitungan em-dash (11, jauh di atas batas ≤2 §5) yang sudah saya perbaiki in-place menjadi titik dua/koma/kata penghubung di prosa dan tabel. Sisa em-dash hanya pada satu H2 (konstruksi judul yang wajar) dan dua placeholder gambar yang tidak boleh diubah. Sisanya lolos bersih. Layak tampil di soltius.co.id.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Lead membuka pada pain konkret; ritme paragraf bervariasi; aside praktisi ("Di lapangan, interface RFC lama..."); honest-hedging section #5. Em-dash berlebih sudah diperbaiki. |
| Factual & SAP-spec accuracy | 10 | 5 klaim dicek vs dossier + product_matrix; semua pass; angka berlabel sumber/tanggal; do-NOT-assert list (e-Faktur, 80% Open Connectors) dihormati. |
| On-page SEO compliance | 9 | Meta title 53 char (keyword di depan), meta desc 159 char (dalam band), slug 34 char, H1 + first-100-words keyword, 3 internal + 2 eksternal otoritatif, FAQ 7, tabel+list. |
| GEO extractability (§2a) | 10 | Jawaban 40–60 kata setelah SETIAP H2 (56/52/49/60/52); satu poin quotable per paragraf; FAQ FAQPage-ready; date_modified ditambahkan ke meta. |
| Soltius framing discipline | 10 | 1 blok mention (closing); "mengintegrasikan ... bukan membangun platformnya"; kredensial sesuai company_profile; tanpa superlatif. |
| Internal linking | 10 | Hub inline di lead (anchor "SAP Clean Core"); 2 cousin inline (migrasi ERP, low-code SAP Build) sesuai cross-link map; tanpa "BACA JUGA". |
| FAQ quality | 9 | 7 Q&A memetakan PAA brief; semua 40–80 kata; tiap jawaban memuat angka/fakta. |
| Image-brief completeness | 9 | images.json valid; 3 entri sesuai 3 placeholder; alt_id/caption_id/visual_direction/suggested_asset_type lengkap dalam Bahasa Indonesia; catatan "tidak butuh screenshot SAP" disurfaced. |

## What I fixed (changelog)
- **Em-dash reduction (§5 — pelanggaran utama):** dari 11 menjadi 0 em-dash prosa. Diperbaiki in-place:
  - Lead/definition snippet: "stabil terhadap upgrade — yaitu" → "stabil terhadap upgrade, yaitu" (FAQ #1 yang identik juga sudah tanpa em-dash sejak awal).
  - Body §3: "kontrak stabilitas — SAP menjamin" → dipecah jadi dua kalimat ("kontrak stabilitas. SAP menjamin").
  - Body §3 (IDoc): "di dalam Integration Suite — bukan berarti" → "di dalam Integration Suite. Ini bukan berarti".
  - Tabel pola lama: 5 sel "Tinggi — ..." / "Sangat tinggi — ..." / "Sedang — ..." → "Tinggi: ..." dst. (titik dua); "45 koneksi P2P → 10 koneksi" → "45 koneksi P2P menjadi 10 koneksi".
  - Disisakan: 1 em-dash pada H2 "Kapan integrasi langsung masih masuk akal — dan kapan tidak" (konstruksi judul wajar, mirip benchmark SAP B1) + 2 em-dash dalam placeholder {IMAGE_01}/{IMAGE_02} (tidak boleh diubah/strip; bukan prosa yang dibaca pembaca).
- **Frontmatter:** menambah `date_modified: "2026-08-08"` (kesegaran/`dateModified` — GEO §2a); memperbarui `word_count` 1668 → 1670 (mencerminkan dua kata yang bertambah dari pemecahan kalimat).
- Menyimpan artikel terpoles ke `final/sap-clean-core-02.id.md` (placeholder {IMAGE_NN} dipertahankan utuh).

## What I flagged (open issues)
- ⚠️ **Cluster antarmuka di 5 paragraf 3-kalimat (§50–63)** — *recommendation*: bukan blocker. Ritme keseluruhan tetap lolos (ada paragraf 1 kalimat di §43, paragraf panjang 5 kalimat di lead, numbered list, tabel, bullet, 3 gambar, FAQ). Jika writer merevisi di masa depan, gabungkan 2 paragraf pendek atau tambah 1 kalimat pada salah satunya untuk variasi tambahan.
- ⚠️ **Redundansi ringan definisi SAP** — paragraf pertama H2 #1 memparafrasakan "andal dan siap untuk masa depan", lalu §54 mengutip versi penuh bersumber. *Recommendation*: dibiarkan — ini teknik GEO yang sah (parafrasa quotable di atas, kutipan bersumber di body); memangkasnya akan menjatuhkan jawaban di bawah 40 kata.
- ⚠️ **Penomoran brief_id vs history** — `articles_history/index.json` masih memuat `sap-clean-core-02` (run 2026-06) sebagai artikel "Remediasi Custom Code" yang berbeda. Artikel ini adalah run 2026-08 dengan angle integrasi. *Recommendation*: bukan masalah editor — curator yang mengelola index; pastikan saat commit, entry baru memakai id ber-bulan ("2026-08-sap-clean-core-02") agar tidak bentrok dengan entry 2026-06.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep: 0
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: 0
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: 0
- [x] "Dengan demikian" not overused — grep: 0
- [x] Em-dash count ≤2 (prosa) — **FIXED** dari 11 → 0 prosa (1 di H2, 2 di placeholder yang dilindungi)
- [x] Varied paragraph lengths (1–6 kalimat) — lolos (catatan minor di Flag)
- [x] Not every H2 → 3-bullet list — H2 #1/#2/#3 prosa, #4 numbered, #5 prosa+bullet
- [x] No generic claims without numbers — angka spesifik di 8+ tempat (n(n-1)/2, 45, 190, 3.800+, 30+, 350+, 2.700+, 2–3 tahun)
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — grep: 0
- [x] No service-dump paragraph — hanya 1 blok mention Soltius di closing

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| "3.800+ paket integrasi siap pakai per 2025" (§86) | dossier Claim 9/14 ✓ ("3.800+ pre-packaged", label 2025) | pass |
| "lebih dari 30 tipe kebijakan (policy)" (§90) | dossier Claim 10 / Flag #2 ✓ (gunakan ">30" + atribusi SAP Help) — draft beratribusi tepat | pass |
| "lebih dari 2.700 API berbeda (per publikasi SAP 2024)" (§129) | dossier Claim 8 / Flag #3 ✓ (label "publikasi 2024") | pass |
| n(n-1)/2: 5→10, 10→45, 20→190 (§62) | dossier Claim 13 ✓ | pass |
| "SAP Business Accelerator Hub" + "advanced event mesh" naming (§129, §132) | dossier Claim 7/11 + Flag #1 ✓ (nama resmi terkini, nama penuh disebut) | pass |
| Soltius "mengintegrasikan ... bukan membangun platformnya" (§139) | product_matrix blacklist + company_profile ✓ | pass |
| e-Faktur sebagai ilustrasi konteks tanpa alur teknis (§94) | dossier Flag #4 ✓ (dihormati) | pass |

Tidak ada nama produk SAP yang diinvensi; tidak ada tanggal ECC yang salah; tidak ada "Soltius builds SAP". WebSearch tidak diperlukan — semua klaim tertelusur ke dossier yang sudah bersumber SAP-official/SAP Community.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 53 char / "Clean Core" pos 10
- [x] Meta description 140–160 — actual: 159
- [x] Slug ≤60, kebab-case, keyword — actual: `integrasi-clean-core-sap-api-first` (34)
- [x] H1 contains keyword — "Integrasi Clean Core: ..."
- [x] H2 count 4–5 — actual: 5 (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1, #2) ; ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — "SAP Clean Core" inline di lead
- [x] Definition snippet near top (40–60 words) — blockquote "Secara singkat" (55 kata)
- [x] ≥8 LSI terms — counted: 18+ (Integration Suite, API Management, released API, OData, SOAP, event-driven, advanced event mesh, Business Accelerator Hub, point-to-point, RFC, BAPI, IDoc, hidden coupling, decoupling, Migration Assessment, Open Connectors, BTP, Cloud Integration)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: hub clean-core (lead), migrasi-erp-ke-cloud (§96), low-code-and-no-code-platforms (§112)
- [x] ≥1 external authoritative citation — actual: 3 inline (SAP.com 5 Guiding Principles, SAP Community Modernizing RFC/BAPI, SAP Learning Released APIs) + 2 di frontmatter
- [x] FAQ 5–7 Q&As — actual: 7
- [x] 2 image placeholders (up to 3) — actual: 3
- [x] ≥1 list + ≥1 table — numbered (5 langkah) + bullet (3 kondisi) + 1 tabel
- [x] Word count 1,500–1,800 — actual: ~1,670

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — H2#1: 56, H2#2: 52, H2#3: 49, H2#4: 60, H2#5: 52 (semua dalam rentang)
- [x] Each body paragraph makes one independently quotable, verifiable point — ya (satu klaim + fakta bersumber per paragraf)
- [x] FAQ parseable for FAQPage schema; `dateModified` / freshness noted — FAQ H3 bersih; `date_modified: 2026-08-08` ditambahkan ke meta

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP" — "mengintegrasikan ... bukan membangun platformnya"
- [x] ≤3 Soltius self-mentions — actual: 1 blok (closing); aside mid-artikel §96 tanpa menyebut nama Soltius (E-E-A-T impersonal)
- [x] No unverifiable superlatives ("terbaik/nomor satu") — grep: 0
- [x] SAP/partner product names + specs match product_matrix.md / dossier — ya
- [x] Closing uses a company_profile.md positioning line — "SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group sejak 1998"
- [x] Soft website CTA present as the FINAL line — "...kunjungi soltius.co.id." (§141, baris terakhir, setelah Kesimpulan, konsultatif)
- [x] Hub link present as natural inline anchor (lead) — anchor "SAP Clean Core" di lead, bukan callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `side-by-side-extensibility-sap-btp-clean-core` (2026-06-04)
- Subtopic overlap (Jaccard estimate): ~0.10 (entitas bersama hanya "SAP Integration Suite"; dimensi berbeda: ekstensi vs integrasi)
- Sibling lain (01 definisi, 03 maturity, 05 brownfield/greenfield, 06-custom-code) tidak beririsan dengan dimensi integrasi.
- Verdict: distinct angle confirmed

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per `{IMAGE_NN}` placeholder — 3 entri (IMAGE_01/02/03) cocok dengan 3 placeholder di body
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type — semua ada, Bahasa Indonesia
- [x] Any "real SAP screenshot" requirement surfaced — ketiga sourcing_note menyatakan "tidak ada screenshot SAP yang dibutuhkan; aset orisinal"; IMAGE_03 mengingatkan penamaan "advanced event mesh" konsisten
- (Tidak ada PNG untuk dicek — sesuai desain; tim desain klien mengeksekusi.)
