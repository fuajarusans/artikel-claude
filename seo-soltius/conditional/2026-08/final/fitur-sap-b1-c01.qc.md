---
brief_id: "fitur-sap-b1-c01"
editor_run_date: "2026-07-17"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-08 (style_addendum.md overrides applied — 800–1000 kata, tanpa image placeholder, FAQ 2–3, 2 internal link, definisi hanya sekali, maks 2 mention Soltius)"
---

# Editor QC Report — Fitur SAP Business One yang Wajib Diketahui Bisnis Mid-Market

## Recommendation
**approve**

Draft masuk dalam kondisi sangat bersih dan patuh penuh terhadap seluruh batch override 2026-08 sekaligus 11 flag dossier. Fact-check terhadap dossier + `product_matrix.md` lolos tanpa temuan: tidak ada angka jumlah modul, tidak ada harga, tidak ada "18 pengguna", tidak ada "GROW with SAP", lokalisasi memakai angka SAP terbaru (50/28, bukan 42/27), ejaan modul resmi dipertahankan (`Sales – A/R`, `Purchasing – A/P`), dan License Guide diatribusikan tanpa stempel 2026. Definisi hanya muncul sekali (di snippet); jawaban langsung tiap H2 berisi poin baru, bukan parafrase snippet. Framing Soltius benar (implementator/pendamping, bukan pembuat), tepat 2 mention. Satu polish EYD minor diterapkan (kalimat label kolom tabel yang kehilangan kopula). Tidak ada isu yang menuntut writer/strategist re-spin.

## Batch-2026-08 overrides applied (bukan default agent/style_guide)
- Word band yang dicek **800–1000** (bukan 1.500–1.800). Final: **978** — patuh.
- FAQ yang dicek **2–3** (bukan 5–8). Final: **3** — patuh.
- Internal link **tepat 2** (1 hub + 1 cousin), bukan 3.
- Image placeholder: **N/A by design** — validasi gambar dilewati; nol `{IMAGE_NN}` dikonfirmasi.
- Definisi **hanya sekali** (snippet) — cek repetisi definisi dijalankan penuh.
- Maks **2** mention Soltius; lead ≤80 kata tanpa roadmap; Kesimpulan ≤80 kata; soft CTA soltius.co.id = baris terakhir.
- Sitasi eksternal inline **1–2** (final: 2).

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Pembuka pain konkret; ritme paragraf bervariasi (1–5 kalimat); em-dash 0; tanpa klise AI; bentuk H2 berbeda-beda (tabel / 4-bullet lead-in / 3-bullet ringkas). |
| Factual & SAP-spec accuracy | 10 | Semua angka cocok verbatim dengan dossier (SAP News 15 Des 2025). Nama modul cocok SAP Help Portal. Nol klaim tak bersumber; nol angka karangan. |
| On-page SEO compliance | 9 | Meta title 58, meta desc 149, slug 33 — semua dalam band. Keyword di title/meta/slug/H1/100 kata pertama/paragraf akhir. |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata setelah tiap H2 (55/44/42); snippet 47 kata; tabel extractable baris-per-baris; FAQPage-ready. |
| Soltius framing discipline | 10 | Implementator/pendamping; tepat 2 mention; tanpa superlatif; positioning line di Kesimpulan; tanpa aside di body. |
| Internal linking | 10 | Tepat 2: hub `software-erp-sap-business-one` (anchor "SAP Business One", di lead) + cousin `pengertian-sap-business-one-dan-kegunaannya`. `3-fitur-utama` sengaja TIDAK ditautkan (FLAG KANIBALISASI dihormati). |
| FAQ quality | 9 | 3 Q&A dari PAA; jawaban 43/40/55 kata; tiap jawaban memuat fakta/angka; FAQ#3 memakai framing aman Flag #3. |

## What I fixed (changelog)
- **EYD/readability** (H2 #1, paragraf pengantar tabel): "Kolom ketiga **penilaian** dari praktik implementasi, bukan pernyataan SAP." → "Kolom ketiga **berisi** penilaian dari praktik implementasi, bukan pernyataan SAP." Menambah kopula agar kalimat body lengkap (sebelumnya terbaca seperti caption/fragmen). Label eksplisit Flag #8 tetap terjaga.
- **Frontmatter**: `word_count` diperbarui 977 → 978 mengikuti penambahan satu kata di atas.

Tidak ada perubahan substantif lain: draft sudah patuh. Menghindari over-edit sesuai mandat editor (draft yang sudah baik tidak "dipoles berlebihan").

## What I flagged (open issues)
- ⚠️ **Word count 978 (target ~900, band 800–1000).** Patuh penuh — tidak wajib dipangkas (aturan batch: >1000 = gagal; 978 < 1000). Jika SEO-ops ingin lebih dekat ke target 900, ruang pangkas aman yang sudah dipetakan: lebur kalimat pembuka "Bobot fitur itu terlihat dari skalanya" (H2 #2), padatkan sel kolom 3 tabel. **Sengaja tidak dieksekusi** agar ritme dan mention modul-sisa (syarat brief) tetap utuh. Bukan penghalang approve.
- ⚠️ **`dateModified` eksplisit tidak ada di frontmatter** — freshness disampaikan lewat `publish_month: 2026-08` (konsisten dengan template §7 style_guide & final batch lain). CMS mengisi `dateModified` saat publish. Bukan isu konten.
- ℹ️ **Judgment call writer dihormati**: klaim License Guide di FAQ #3 ditulis sebagai atribusi teks (tanpa hyperlink) dan TIDAK dimasukkan ke `external_citations`, agar sitasi otoritatif inline tetap tepat 2 (SAP News + Modules Tab) sesuai addendum §4. Editor setuju — tidak menambah entri ketiga. Jejak URL License Guide tersedia di dossier bila SEO-ops menghendaki.
- ℹ️ **Rekomendasi di luar scope artikel** (dari brief, untuk SEO-ops): pertimbangkan menjadikan artikel ini kanonik untuk "fitur sap business one" — 301 atau tautkan-naik halaman tipis `3-fitur-utama-...` (1.517 impresi / 18 klik, April 2026). Bukan tindakan editor.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5) — PASS
- [x] Tanpa pembuka klise ("Di era digital / Seiring perkembangan / Tidak dapat dipungkiri") — lead buka dengan pain konkret (stok tak cocok, jurnal via rekap Excel).
- [x] Tanpa "Selain itu" beruntun — tidak ada sama sekali.
- [x] Tanpa "Penting untuk dicatat/dipahami".
- [x] "Dengan demikian" tidak dipakai.
- [x] Em-dash body = **0** (dikonfirmasi programatik). En-dash (5) hanya di nama resmi `Sales – A/R` / `Purchasing – A/P` — dipertahankan sengaja.
- [x] Panjang paragraf bervariasi (1–5 kalimat); kalimat pendek ("Bukan jumlah modulnya.", "Petunjuk kecil, tapi konsisten.") dicampur dengan kalimat sedang.
- [x] Bukan pola "tiap H2 = 3 bullet": H2 #1 = tabel + prosa; H2 #2 = 4 bullet lead-in bold + paragraf angka; H2 #3 = 3 bullet ringkas + hedging.
- [x] Tanpa klaim generik tanpa angka.
- [x] Tanpa adjektiva hype (canggih/powerful/seamless/terdepan).
- [x] Tanpa service-dump Soltius.
- [x] 1 sentuhan praktisi tanpa menyebut Soltius (modul yang dinyalakan lebih dulu = yang menutup kebocoran termahal, stok tak cocok).

### B. Factual & SAP-spec spot-check (vs dossier + product_matrix)
| Claim | Source check | Verdict |
|---|---|---|
| 83.000+ pelanggan, 1,2 juta pengguna, 170+ negara (Des 2025) | dossier Claim 1 (SAP News 15 Des 2025) ✓ | pass |
| 850 partner, 500+ ekstensi; 50 lokalisasi, 28 bahasa | dossier Claim 2 & 3 ✓ (bukan 42/27 usang — Flag #5) | pass |
| Model *named user*: kendali penuh / hanya-baca / tidak akses; "Professional dan tiga varian Limited" | dossier Claim 10 & 11 ✓; cakupan tiap Limited tidak dirinci (Flag #10) | pass |
| "single solution" + "batas historis antaraplikasi tidak ada" | dossier Claim 8 (To Go 9.2) ✓; dipakai sebagai prinsip arsitektur, tanpa stempel 2026 | pass |
| Pelanggan tumbuh 3 → 250 karyawan tanpa ganti platform; segmen "small businesses and the lower midmarket" | dossier Claim 5 & 6 ✓; framing dua sisi dipertahankan (tidak dipelintir negatif) | pass |
| Nama & ejaan 8 modul di tabel | dossier Claim 7 (SAP Help Portal Modules Tab) ✓ | pass |
| Jumlah modul / harga / "18 pengguna" / "GROW with SAP jalur resmi" | **tidak ada** di artikel (Flag #1, #6, #2, #4) ✓ | pass |
| Soltius "beberapa kali menerima SAP Business One Partner of the Year" | `company_profile.md` (2024 & 2023; 2021) ✓; tanpa presisi tahun berlebih | pass |

### C. On-page SEO checklist (batch-adjusted)
- [x] Meta title **58** ≤60; keyword "Fitur SAP Business One" di posisi 0 (dalam 30 char pertama).
- [x] Meta description **149** (band 140–160); keyword + 3 value-prop spesifik.
- [x] Slug `fitur-sap-business-one-mid-market` = **33** ≤60, kebab-case, keyword-led.
- [x] H1 memuat keyword.
- [x] H2 body = **3** (batch override 3–4); ≥1 question-format (H2 #2 & #3); ≥1 praktis/tabel (H2 #1); 1 honest/counter-conventional (H2 #3).
- [x] Keyword di 100 kata pertama & paragraf akhir (Kesimpulan + CTA).
- [x] Definition snippet 40–60 kata (**47**) tepat setelah lead.
- [x] LSI ≥8: modul SAP Business One, MRP, BOM, persediaan multi-gudang, drill-down, Sales – A/R, lisensi Professional/Limited, SAP HANA (implisit), multi-mata uang/multi-entitas, lower midmarket.
- [x] Internal link **tepat 2** (override): hub + cousin. `3-fitur-utama` tidak ditautkan.
- [x] Sitasi eksternal inline **2**: SAP News + SAP Help Portal Modules Tab.
- [x] FAQ **3** (override 2–3).
- [x] ≥1 tabel (8 baris). List: 4-bullet (H2 #2) + 3-bullet (H2 #3).
- [x] Angka spesifik inline ≥4 — terpenuhi berlimpah: 83.000 · 1,2 juta · 170 · 850 · 500 · 50 · 28 · 250 · 3 (karyawan) · "dua–tiga modul".
- [x] Word count **978** (band 800–1000).
- [N/A] Image placeholder — dilewati by design (batch 2026-08).

### C2. GEO extractability (§2a) — PASS
- [x] Jawaban langsung 40–60 kata segera setelah tiap H2: H2 #1 = 55, H2 #2 = 44, H2 #3 = 42 — semua poin BARU, bukan parafrase snippet.
- [x] Satu paragraf = satu poin quotable & verifiable; tabel extractable baris-per-baris (target kueri "apa saja modul SAP Business One").
- [x] FAQ parseable untuk FAQPage schema; freshness lewat `publish_month` di meta block.

### C3. Cek repetisi definisi (override) — PASS
- [x] Definisi B1 hanya di snippet "Ringkasnya:". Body/H2 tidak menyatakannya ulang dengan kata lain. Jawaban langsung H2 #1 membahas arsitektur single-solution + model beli-lisensi (poin baru Claim 8), bukan definisi. FAQ #3 menambah tiga tingkat akses (Claim 10) — informasi baru, bukan pengulangan snippet.

### D. Soltius framing discipline — PASS
- [x] Soltius = implementator/pendamping ("mendampingi… mengimplementasikannya, dan menopang sistem setelah go-live") — NEVER "membuat/memiliki".
- [x] Mention Soltius = **2** (positioning line Kesimpulan + soft CTA baris terakhir). "Soltius" teks = 1; "soltius.co.id" = 1.
- [x] Tanpa superlatif "terbaik/nomor satu"; award ditulis "beberapa kali menerima" tanpa presisi tahun berlebih.
- [x] Positioning line dari `company_profile.md`.
- [x] Soft website CTA (soltius.co.id) = baris paling akhir, terpisah dari Kesimpulan, tone konsultatif.
- [x] Hub link sebagai anchor inline natural di lead (bukan callout "BACA JUGA").
- [x] Tanpa aside Soltius di tengah body (netralitas peta fitur terjaga).

### E. Anti-cannibalization spot check
- Artikel prior terdekat: `sap-b1-vs-accurate-c01` (2026-07, Jaccard ~0.12) & `sap-business-one-01` (2026-05, ~0.06). Semua < 0.4.
- Verdict: **distinct angle confirmed** — masuk lewat "peta modul B1 + relevansi per proses mid-market", bukan komparasi vendor lokal (2026-07) maupun format diagnostik (2026-05).
- Catatan kanibalisasi internal (halaman live `3-fitur-utama-...`) ditangani dengan TIDAK menautkannya; rekomendasi 301/tautkan-naik diteruskan ke SEO-ops (di luar scope editor).

## The shipping question
Jika artikel ini tayang di soltius.co.id besok dan dibaca konsultan SAP senior sekaligus CIO skeptis: peta modul dengan ejaan resmi, angka bersumber SAP, kejujuran segmen "lower midmarket", dan detail lisensi tiga-tingkat-akses yang tidak dimiliki satu pun pesaing SERP membuatnya kredibel dan berguna. WEBARQ Promote bisa bangga. **Approve.**
