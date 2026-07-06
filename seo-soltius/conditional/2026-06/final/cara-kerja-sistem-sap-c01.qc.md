---
brief_id: "cara-kerja-sistem-sap-c01"
editor_run_date: "2026-06-17"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Cara Kerja Sistem SAP dan Fungsinya untuk Perusahaan (Update 2026)

## Recommendation
**approve**

Draft yang sangat kuat dan praktis siap tayang. Penulis menghormati seluruh do-NOT-assert flag dossier (menghapus klaim "105.000+ karyawan", menghindari angka "64 modul" dengan frasa "puluhan modul", tidak menyebut nama fitur AI yang berubah-ubah seperti Joule, dan tidak mengarang durasi/biaya implementasi). Lima fakta yang di-spot-check semuanya cocok dengan dossier dan situs resmi SAP. Anti-AI scan bersih (tanpa opener generik, tanpa "Selain itu" beruntun, em-dash hanya muncul di dalam placeholder gambar — nol di prosa tubuh). GEO §2a terpenuhi penuh: setiap H2 utama dibuka jawaban langsung yang dapat dikutip, ditambah definition snippet 40–60 kata di awal. Framing Soltius benar (implementasi/dukungan, bukan "membuat"), satu sebutan, dengan positioning line dari company_profile dan soft CTA sebagai baris terakhir. Slug dikonfirmasi sama persis dengan `keep_slug` — ini rewrite halaman live, bukan URL baru. Saya menerapkan dua perbaikan kecil di tempat (satu kalimat janggal, satu alt-text yang melebihi 125 karakter) dan tidak menemukan masalah yang menuntut rework penulis/strategist.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Ritme paragraf bervariasi (1–6 kalimat), aside praktisi "dalam praktik implementasi…", hedging jujur soal AI & durasi. Nol AI tell. |
| Factual & SAP-spec accuracy | 10 | 5/5 klaim spot-check pass; semua flag dossier dihormati; nama produk & tanggal SAP akurat. |
| On-page SEO compliance | 9 | Meta title 52, meta desc ~151, slug 52, keyword di 100 kata pertama & penutup, 6 H2, 2 tabel, list bernomor + bullet. |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata setelah tiap H2; satu poin terkutip per paragraf; FAQ FAQPage-ready; freshness "Update 2026" di judul + lead. |
| Soltius framing discipline | 10 | 1 sebutan; "mengimplementasikan dan mendukung", bukan "membuat"; tanpa superlatif; positioning line akurat. |
| Internal linking | 8 | 3 tautan inline natural; tidak ada "BACA JUGA"; benar menghindari halaman near-duplicate yang dilarang brief. |
| FAQ quality | 9 | 7 Q&A, semuanya 40–80 kata, self-contained, mirror PAA. |
| Image-brief completeness | 9 | JSON valid; 2 entri cocok 2 placeholder; alt/caption/visual_direction/asset_type lengkap dalam Bahasa Indonesia; sourcing-note ada. |

## What I fixed (changelog)
- **Memperbaiki kalimat janggal di §"SAP vs ERP vs Software Akuntansi"** (penutup): "...kebutuhannya sudah bergeser dari akuntansi yang lebih besar menuju sistem terintegrasi..." → "...kebutuhannya sudah melampaui sekadar akuntansi dan bergeser menuju sistem terintegrasi seperti ERP." (frasa lama tidak parse secara logis).
- **Memangkas alt_id IMAGE_01 di images.json** dari ~134 → ~123 karakter agar di bawah batas 125, sekaligus menempatkan keyword "cara kerja sistem SAP" di depan: "Diagram cara kerja sistem SAP: pesanan penjualan mengalir dari modul SD ke MM, PP, dan FI/CO lewat satu basis data SAP HANA".
- **Memperbarui frontmatter `word_count`** 1879 → 1878 (mengikuti edit –1 kata).

## What I flagged (open issues)
- ⚠️ **Konsolidasi/redirect halaman near-duplicate (untuk SEO-ops, bukan untuk artikel ini)** — brief mencatat Soltius punya halaman serupa `…/blog/Bagaimana-Cara-Kerja-Sistem-SAP`. Rewrite ini sudah benar tidak menaut ke sana, tetapi tim SEO-ops sebaiknya mempertimbangkan menjadikan URL ini kanonik untuk intent "cara kerja sistem SAP" dan me-redirect halaman duplikat agar tidak saling memakan. *Rekomendasi*: serahkan ke WEBARQ SEO-ops; di luar lingkup penyuntingan artikel.
- ⚠️ **Sumber dossier confidence "medium" yang TIDAK dipakai** (37% adopsi S/4HANA, ~30.000 pelanggan ECC, angka pasar cloud Indonesia) — penulis bijak tidak memasukkannya ke artikel top-of-funnel ini. Tidak ada tindakan; dicatat sebagai konfirmasi bahwa klaim berisiko tidak diteruskan.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep: nihil
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: nihil
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: nihil
- [x] "Dengan demikian" not overused — grep: nihil
- [x] Em-dash count ≤2 — hanya 2 di seluruh file, keduanya di dalam deskripsi `{IMAGE_NN}` (bukan prosa tayang); efektif 0 di tubuh
- [x] Varied paragraph lengths (not all ~4 sentences) — campuran 1–6 kalimat; lead 3 kalimat, aside 1 kalimat
- [x] Not every H2 → 3-bullet list — 2 tabel, 1 list bernomor (5 item), 1 bullet list (4 item), sisanya prosa
- [x] No generic claims without numbers — angka spesifik di >6 tempat (1972, 1 April 1972, 440.000, 2 Feb 2015, 65.000, 31 Des 2027, 5 modul)
- [x] No stacked hype adjectives — tidak ada "canggih/powerful/seamless/terdepan"
- [x] No service-dump paragraph — hanya 1 anchor Soltius di penutup

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| SAP berdiri 1 April 1972, 5 mantan karyawan IBM, Walldorf | dossier Claim 2 ✓ + sap.com/about | pass |
| Kepanjangan "Systems Applications and Products in Data Processing" (versi plural) | dossier Claim 1 / Flag 2 ✓ (gunakan versi plural) | pass |
| SAP S/4HANA diluncurkan 2 Februari 2015, di atas SAP HANA in-memory (OLTP+OLAP) | dossier Claim 4 & 5 ✓ | pass |
| SAP Business One dipakai >65.000 UKM global | dossier Claim 12 ✓ | pass |
| SAP ECC mainstream maintenance berakhir 31 Desember 2027 | dossier edge case + product_matrix ✓ | pass |
| (do-NOT-assert) "105.000+ karyawan" | dossier Flag 1 — **dihapus penulis** ✓ | pass (correctly omitted) |
| (do-NOT-assert) "64 modul" | dossier Flag 4 — penulis pakai "puluhan modul" ✓ | pass (correctly hedged) |
| (do-NOT-assert) nama fitur AI (Joule) | dossier Flag 3 — penulis generik "AI & ML bawaan, namanya terus berkembang" ✓ | pass (correctly generic) |
| (do-NOT-assert) durasi/biaya implementasi | dossier Flag 5 — penulis kualitatif "beberapa bulan hingga >setahun" ✓ | pass (correctly hedged) |

Tidak diperlukan WebSearch tambahan — semua klaim inti tertelusur ke dossier high-confidence + situs resmi SAP yang dikutip inline.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **52 chars**, "Cara Kerja Sistem SAP" di pos 1–21
- [x] Meta description 140–160 — actual: **~151 chars** (sweet spot GEO 150–160)
- [x] Slug ≤60, kebab-case, keyword — actual: `cara-kerja-sistem-sap-dan-fungsinya-untuk-perusahaan` (**52 chars**); cocok `keep_slug` brief (REWRITE, bukan slug baru) ✓
- [x] H1 contains keyword — "Cara Kerja Sistem SAP..."
- [x] H2 count 4–5 — actual: **6 H2 tubuh** (dalam rentang 4–7 §3); + FAQ + Kesimpulan
- [x] ≥1 question-format H2; ≥1 honest/counter-conventional H2 — question: "Bagaimana Cara Kerja…", "Apa Fungsi…"; honest: "Apakah Setiap Perusahaan Cocok… (Kapan SAP Belum Tepat)"
- [x] Keyword in first 100 words — ada di kalimat ke-2 lead (bold)
- [x] Definition snippet near top (40–60 words) — blockquote "Secara singkat:" ~49 kata
- [x] ≥8 LSI terms — counted: **10** (frontmatter secondary_keywords semuanya hadir di tubuh: ERP terintegrasi, single source of truth, SAP HANA in-memory, modul MM/SD/PP/FI/CO, embedded analytics, RBAC, OLTP/OLAP, alur data, perbedaan SAP & ERP)
- [x] 3 internal links — destinations: `mengenal-sistem-sap-dan-manfaatnya` (definisi, di §Apa Itu), `8-modul-sap-indonesia-yang-paling-banyak-digunakan` (§Modul), `migrasi-erp-ke-cloud` (cousin hub, §Kapan SAP Belum Tepat). Semua inline natural, NO "BACA JUGA". *Catatan*: artikel ini adalah halaman yang di-rewrite (tidak punya hub kata kunci terpisah di peta 6-hub), jadi 3 tautan diarahkan ke halaman Soltius relevan + 1 cousin hub bernilai konversi (ERP-migration) — sesuai arahan brief.
- [x] ≥1 external authoritative citation — actual: **2** (sap.com/about/what-is-sap.html; sap.com/products/erp/what-is-sap-erp.html), keduanya SAP official, inline
- [x] FAQ 5–7 Q&As — actual: **7**
- [x] 2 image placeholders (up to 3) — actual: **2** (IMAGE_01, IMAGE_02)
- [x] ≥1 list + ≥1 table — 1 list bernomor + 1 bullet list + **2 tabel**
- [x] Word count 1,500–1,800 — actual: **1.878** — *dalam band yang diterima* untuk artikel "magnet" top-funnel format-dense (kebijakan user 2026-06-17: terima hingga ~2.100; flag hanya jika <1.300 atau >2.200). Tidak di-bounce.

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — terverifikasi di keenam H2 (tiap H2 dibuka kalimat jawaban langsung, mis. "Cara kerja sistem SAP bertumpu pada satu prinsip:…", "Fungsi utama sistem SAP adalah…", "Tidak setiap perusahaan otomatis butuh SAP…")
- [x] Each body paragraph makes one independently quotable, verifiable point — ya; klaim + fakta bersumber per paragraf
- [x] FAQ parseable for FAQPage schema; `dateModified` / freshness noted — FAQ H3 bersih untuk FAQPage; sinyal freshness "Update 2026" di judul & lead; publish_month 2026-06 di meta block

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP" — "mengimplementasikan dan mendukung SAP S/4HANA"
- [x] ≤3 Soltius self-mentions — actual: **1** sebutan "Soltius" (penutup) + 1 referensi situs "soltius.co.id" (CTA); aside mid-artikel pakai "dalam praktik implementasi di lapangan" tanpa menyebut nama — jauh di bawah batas
- [x] No unverifiable superlatives — tidak ada "terbaik/nomor satu"
- [x] SAP/partner product names + specs match product_matrix.md / dossier — S/4HANA, SAP HANA, SAP Business One, MM/SD/PP/FI/CO semua akurat
- [x] Closing uses a company_profile.md positioning line — "Sebagai SAP Platinum Partner melalui keanggotaan United VARs dan bagian dari Metrodata Group sejak 1998…"
- [x] Soft website CTA present as the FINAL line — "…kunjungi soltius.co.id." (baris terakhir, terpisah dari Kesimpulan, tone konsultatif)
- [x] Hub link present as natural inline anchor — tautan diletakkan inline (mis. `mengenal sistem SAP dan manfaatnya` di lead-bagian §Apa Itu), bukan callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **tidak ada** padanan definisional "cara kerja / modul / fungsi SAP" di 51 artifak history. Tetangga terdekat secara bentuk: `low-code-platform-01` ("Apa Itu dan Bagaimana Cara Kerjanya" — tetapi tentang low-code platform, bukan SAP-the-ERP); `warehouse-management-system-01` (menyentuh "single source of truth" tetapi fokus WMS).
- Subtopic overlap (Jaccard estimate): **< 0.1** — subtopik inti (kepanjangan SAP, modul MM/SD/PP/FI/CO, alur data antar-departemen, fungsi operasional) tidak muncul sebagai subtopics di artikel mana pun yang sudah di-commit.
- Verdict: **distinct angle confirmed** — whitespace top-of-funnel + rewrite halaman live. DEDUP-flag brief (DISTINCT, angle_hash sha1:9f1c0b7a4d62 tidak bertabrakan) terkonfirmasi tetap valid. Risiko kanibalisasi internal-history: nihil. (Catatan halaman near-duplicate di situs live = urusan SEO-ops, lihat flag di atas.)

### F. Image-brief completeness (images.json)
- [x] JSON parses — valid
- [x] One entry per `{IMAGE_NN}` placeholder (count matches) — 2 placeholder di tubuh ↔ 2 entri JSON (IMAGE_01, IMAGE_02)
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type (all Bahasa Indonesia) — lengkap; alt_id IMAGE_01 dipangkas ke ~123 chars (semula ~134), alt_id IMAGE_02 ~118 chars
- [x] Any "real SAP screenshot" requirement surfaced — sourcing_note kedua entri menyatakan diagram konseptual, **tidak** perlu screenshot SAP asli (tim desain membuat dari awal)
- (No generated PNGs to check — by design.)
