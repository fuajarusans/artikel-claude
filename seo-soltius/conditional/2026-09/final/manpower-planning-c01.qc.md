---
brief_id: "manpower-planning-c01"
editor_run_date: "2026-09-01"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-09 (style_addendum.md overrides applied — band 800–1000, FAQ 2–3, 2 internal link, NO image placeholder, definisi hanya sekali di snippet, maks 2 mention Soltius)"
---

# Editor QC Report — Apa Itu Manpower Planning dan Cara Menyusunnya

## Recommendation
**approve**

Draft masuk dalam kondisi sangat baik: seluruh guardrail batch conditional-2026-09 terpenuhi, semua angka terlacak ke dossier dengan framing yang tepat (khususnya "15% CHRO melaporkan organisasinya", bukan "15% organisasi"), Soltius diposisikan sebagai implementator/pendamping SAP (bukan pembuat), dan struktur GEO (snippet definisi sekali, jawaban langsung tiap H2, tabel 4 langkah ekstraktabel) rapi. Dua perbaikan minor diterapkan langsung di final: (1) jawaban langsung H2 #2 dinaikkan dari 37 → 45 kata agar memenuhi lantai 40–60 kata GEO; (2) jawaban langsung H2 #1 ditulis ulang untuk menghapus pengulangan nyaris-verbatim frasa "bergantian antara kelebihan staf… kekurangan orang di posisi kritis" yang sudah ada di lead (kini muncul sekali saja, di lead). Tidak ada isu yang menuntut rework penulis/strategist. Layak tayang.

## Batch-2026-09 overrides applied
- Band word count yang dipakai: **800–1000** (bukan 1.500–1.800), via CLEANED-PROSE `tools/count_words.py`.
- FAQ **2–3** (bukan 5–8) — artikel punya 3.
- Internal link **tepat 2** (bukan 3).
- **Image placeholder: N/A** — tidak divalidasi, tidak ada `{IMAGE_NN}` (dikonfirmasi 0).
- **Definisi hanya sekali** (di snippet) — dicek eksplisit; tak ada H2/paragraf yang mengulang.
- **Maks 2 mention Soltius**, lead ≤80 kata tanpa roadmap, Kesimpulan ≤80 kata, CTA soltius.co.id = baris terakhir, primary keyword di penutup/CTA.
- Semua cek lain (anti-AI §5, EYD, sitasi §10, framing Soltius §11, meta block §7, GEO §2a) berlaku penuh.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Ritme bervariasi (paragraf 1–5 kalimat), tanpa pembuka klise, 0 em-dash, honest hedging ("forecast bukan ramalan pasti"), sentuhan praktisi tanpa nama Soltius. Echo lead↔H2#1 sudah dihapus. |
| Factual & SAP-spec accuracy | 10 | 5 klaim dicek vs dossier — semua pass; framing angka Gartner tepat; kapabilitas SAP disebut sebagai kemampuan, bukan janji hasil; tak ada nama fitur karangan. |
| On-page SEO compliance | 9 | meta_title 46, meta_desc 150, slug 31, keyword di H1/first-100/penutup/CTA; 3 body H2 (2 question-format + 1 tabel). |
| GEO extractability (§2a) | 9 | Snippet 47 kata; jawaban langsung tiap H2 kini 50/45/45 kata; tabel 4 langkah + rumus `gap = demand − supply` siap dikutip baris-per-baris; FAQ FAQPage-ready. |
| Soltius framing discipline | 10 | 2 self-mention (positioning line + CTA); implements/mendampingi, NEVER builds; tanpa superlatif. |
| Internal linking | 10 | Tepat 2: hub success-factors (H2 #3) + cousin talent-acquisition (H2 #1), inline natural, tanpa "BACA JUGA". |
| FAQ quality | 9 | 3 Q&A dari PAA; 37/44/41 kata (dalam 30–60); tiap jawaban memuat fakta/angka (horizon 1–5 th; 3 metode + rumus gap; ~15% CHRO). |

## What I fixed (changelog)
- **H2 #2 jawaban langsung: 37 → 45 kata.** Ditambah kalimat substantif "Titik awalnya selalu rencana bisnis ke depan, bukan jumlah karyawan tahun berjalan" agar memenuhi lantai 40–60 kata GEO (§2a) tanpa menjadi filler kosong; sekaligus menegaskan poin baru (starting point = rencana bisnis).
- **H2 #1 jawaban langsung ditulis ulang** untuk menghapus pengulangan nyaris-verbatim dari lead ("perusahaan bergantian antara kelebihan staf… kekurangan orang di posisi kritis"). Versi baru memimpin dengan distingsi reaktif→proaktif dan konsekuensi biaya/produktivitas; kata "bergantian" kini hanya muncul sekali (di lead). Panjang 49 → 50 kata (tetap 40–60).
- **EYD minor:** "entah ekspansi, proyek baru, maupun efisiensi" (kombinasi "entah…maupun" tidak baku) → "seperti ekspansi, proyek baru, atau efisiensi" (dalam rewrite H2 #1).
- **Frontmatter `word_count`: 839 → 848** menyesuaikan hitungan CLEANED-PROSE final setelah dua edit di atas.

## What I flagged (open issues)
- Tidak ada isu yang memblokir. Catatan non-blocking untuk validator: dua karakter `−` (U+2212) di rumus `gap = demand − supply` adalah tanda minus, **bukan em-dash** — jangan salah hitung sebagai em-dash (em-dash aktual = 0).
- Catatan non-blocking: label fitur "Strategic Workforce Planning" bersumber dari halaman produk Soltius (aman sebagai kapabilitas); nama modul resmi SAP saat ini umumnya "SAP SuccessFactors Workforce Planning / People Analytics". Anchor sudah aman memakai "SAP SuccessFactors (Strategic Workforce Planning)" sesuai penamaan halaman Soltius — tidak ada nama fitur karangan. Sesuai flag dossier.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] Tanpa pembuka "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri"
- [x] Tanpa "Selain itu" membuka ≥2 paragraf berturut (0 kemunculan)
- [x] Tanpa "Penting untuk dicatat/dipahami"
- [x] "Dengan demikian" tidak dipakai (0)
- [x] Em-dash ≤2 — aktual: **0**
- [x] Panjang paragraf bervariasi (1–5 kalimat)
- [x] Tidak setiap H2 → 3-bullet list (memakai tabel + prosa)
- [x] Tanpa klaim generik tanpa angka
- [x] Tanpa adjektiva hype menumpuk ("canggih/powerful/terdepan" — 0). "terbaik" hanya di "tidak ada satu metode **terbaik** untuk semua organisasi" = honest hedging, bukan superlatif Soltius.
- [x] Tanpa paragraf service-dump

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| "hanya ~15% CHRO melaporkan organisasinya menjalankan SWP; ~29% percaya diri" | dossier ✓ (Gartner), framing CHRO tepat | pass |
| "63% pemberi kerja: kesenjangan keterampilan penghalang terbesar transformasi hingga 2030" | dossier ✓ (WEF Future of Jobs 2025); 1 statistik skills-gap saja | pass |
| "gap = demand − supply" + alur demand→supply→gap→aksi | dossier ✓ (SAP Best Practices via SAPinsider) | pass |
| "SAP SuccessFactors memodelkan: headcount, data rekrutmen, turnover, usia pensiun, biaya" (5 variabel) | dossier ✓ (halaman produk Soltius, terverifikasi) — disebut sebagai kapabilitas | pass |
| Soltius "SAP Platinum Partner via United VARs, sejak 1998, mengimplementasikan/mendampingi HCM SAP" | dossier ✓ + product_matrix (implements-not-builds) | pass |

Tanpa nama produk/edisi SAP karangan; tanpa tanggal ECC; tanpa framing "Soltius membangun SAP".

### C. On-page SEO checklist (seo_playbook §3, disesuaikan override)
- [x] Meta title ≤60 (keyword di 30 pertama) — aktual: **46**, "manpower planning" kar. 9–25
- [x] Meta description 140–160 — aktual: **150**
- [x] Slug ≤60, kebab-case, keyword — aktual: **manpower-planning-cara-menyusun (31)**
- [x] H1 memuat keyword
- [x] H2 body **3** (override 3–4) — 2 question-format + 1 praktis/tabel
- [x] ≥1 question-format H2 (H2 #1 & #3); honest hedging di H2 #2/#3 (pengganti H2 counter-conventional per addendum §2)
- [x] Keyword di 100 kata pertama
- [x] Definition snippet dekat atas (47 kata) — **satu-satunya definisi**
- [x] LSI terms ≥8 — terhitung: perencanaan tenaga kerja, demand/supply forecasting, gap analysis, strategic workforce planning, headcount, people analytics, HCM, succession planning, skills gap, talent acquisition, turnover (11+)
- [x] Internal link **tepat 2** (override) — success-factors (hub) + talent-acquisition (cousin)
- [x] Sitasi eksternal otoritatif — aktual: **2** (WEF hyperlink + Gartner atribusi inline)
- [x] FAQ **2–3** (override) — aktual: **3**
- [x] ≥1 tabel (tabel 4 langkah); tanpa image placeholder (by design)
- [x] Word count **800–1000** (override) — aktual CLEANED-PROSE: **848**

### C2. GEO extractability (seo_playbook §2a)
- [x] Jawaban langsung 40–60 kata segera setelah tiap H2 utama — 50 / 45 / 45 kata (semua diperbaiki agar ≥40)
- [x] Tiap paragraf = satu poin quotable & verifiable
- [x] FAQ parseable untuk FAQPage; `publish_month`/tanggal editor di meta menandai freshness
- [x] Jawaban langsung TIDAK mengulang isi definition snippet — masing-masing poin baru (business case+angka; alur 4 langkah; peran sistem HR)

### D. Soltius framing discipline (product_matrix + style_guide §11)
- [x] Soltius = implementator/pendamping, BUKAN "membangun SAP"
- [x] Self-mention ≤2 (override) — aktual: **2** (positioning line di Kesimpulan + CTA soltius.co.id). Sebutan "SAP SuccessFactors" di H2 #3 = teaching vendor-neutral, bukan self-mention.
- [x] Tanpa superlatif tak terverifikasi
- [x] Nama produk SAP sesuai dossier/halaman Soltius
- [x] Kesimpulan memakai positioning line company_profile (SAP Platinum via United VARs, sejak 1998)
- [x] Soft CTA soltius.co.id = baris terakhir, terpisah dari Kesimpulan, konsultatif (bukan "beli sekarang")
- [x] Hub link = anchor inline natural (H2 #3), bukan callout "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior in cluster: `talent-acquisition-c01` (conditional 2026-09) — batas topik timbal balik dihormati (manpower planning = hulu perencanaan; TA = hilir eksekusi; rekrutmen hanya muncul sebagai 1 opsi rencana aksi + 1 klausa pembeda + cousin link).
- Tidak membedah rumus turnover (milik turnover-karyawan-c01), strategi retensi (employee-retention-c01), atau peta modul SuccessFactors (sap-successfactors-modul-c01) — hanya disebut sebagai istilah/kapabilitas tunggal.
- Subtopic overlap (Jaccard estimate): ~0.10 vs talent-acquisition — **< 0.4**
- Verdict: **distinct angle confirmed**

## The shipping question
Jika artikel ini tayang di soltius.co.id besok dan dibaca konsultan SAP senior + CIO skeptis: alurnya runtut (demand→supply→gap→aksi), angkanya bersumber dan diframe jujur, tabelnya siap dikutip AI Overview, dan Soltius muncul sebagai pendamping yang membantu dulu baru mengajak. **Ya — WEBARQ Promote layak bangga. approve.**
