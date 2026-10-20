---
brief_id: "implementasi-erp-c01"
editor_run_date: "2026-07-06"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-07 — style_addendum.md overrides applied (word band 800–1000, FAQ 2–3, internal link 2, ZERO image placeholder, Soltius max 2, lead/kesimpulan ≤80 kata, definisi hanya di snippet)"
---

# Editor QC Report — Tahapan Implementasi ERP yang Wajib Diketahui Perusahaan

## Recommendation
**approve**

Draft masuk sangat bersih dan patuh penuh pada override batch conditional 2026-07. Semua angka terlacak ke dossier dengan framing yang benar — termasuk dua caveat paling sensitif: Panorama dipakai versi **The 2026 ERP Report** (median 9 bulan, 170 responden; BUKAN "9 dari 15 bulan" versi 2025 yang gagal verifikasi primer) dan Gartner dijaga sebagai "tidak sepenuhnya memenuhi *business case* awalnya hingga 2027" (bukan "gagal total"), disebut by-name tanpa hyperlink agar sitasi eksternal ber-link tetap tepat 2. Struktur GEO lengkap (direct answer 45/48/44 kata per H2, semuanya poin BARU milik H2-nya), zero AI-tell, zero `{IMAGE_NN}`, em-dash 1. Saya menerapkan 4 perbaikan minor in-place (freshness metadata, 1 hedge akurasi, 1 gramatika, 1 EYD) — word count naik 937 → 940, tetap dalam band. Tidak ada isu terbuka yang menghalangi publikasi.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero pola terlarang; ritme bervariasi (one-liner "Tabel berikut...", paragraf 1–3 kalimat); sentuhan praktisi "Di lapangan, tahap yang paling sering molor justru bukan konfigurasi, melainkan pembersihan dan migrasi data" tanpa menyebut Soltius |
| Factual & SAP-spec accuracy | 10 | 5/5 klaim spot-check lolos vs dossier; semua 6 flag dossier dipatuhi (lihat B) |
| On-page SEO compliance | 9 | Semua item checklist (nilai override batch) terpenuhi; meta 56/152/24 chars |
| GEO extractability (§2a) | 9 | Direct answer 45/48/44 kata, tiap H2 poin baru; tabel 6 tahap extractable baris-per-baris; `date_modified` ditambahkan editor |
| Soltius framing discipline | 10 | 2 mention persis (positioning line + CTA); "mendampingi... menjalankan implementasi" — implementator/pendamping, bukan pembuat; tanpa superlatif |
| Internal linking | 10 | Tepat 2: hub migrasi-erp-ke-cloud (anchor natural di lead) + cousin cara-kerja-sistem-sap (elaborasi fit-to-standard H2 #1); keduanya diverifikasi live oleh strategist 2026-07-06; tanpa "BACA JUGA" |
| FAQ quality | 9 | 3 Q&A persis dari PAA, jawaban 43/40/45 kata (band 30–60), tiap jawaban 1 fakta/angka (6 tahapan+6 fase / 9 bulan+170 responden / >70% 2027) |
| Image-brief completeness | N/A | Batch override: zero placeholder by design — BUKAN isu; tidak ada images.json untuk batch ini |

## What I fixed (changelog — 4 edits in-place)
- **Freshness metadata (GEO §2a)**: menambahkan `date_modified: "2026-07-06"` ke frontmatter — konsisten dengan konvensi final batch ini (mis. `strategi-scm-c01`); draft belum memuatnya.
- **Hedge akurasi (H2 #3, paragraf Gartner)**: "sistemnya berjalan, tetapi..." → "**umumnya** sistem **tetap** berjalan, tetapi..." — klaim blanket "sistemnya berjalan" tidak didukung sumber (riset yang sama menyebut sebagian kecil gagal katastrofik); di-hedge sebagai generalisasi berlabel sesuai style_guide §4/§10. Framing verbatim Gartner tidak tersentuh.
- **Gramatika (H2 #3)**: "hanya dilaporkan kurang dari seperempat responden" → "hanya dilaporkan **oleh** kurang dari seperempat responden".
- **EYD (snippet)**: "pasca-implementasi" → "**pascaimplementasi**" (bentuk terikat *pasca-* + kata serapan Indonesia ditulis serangkai; preseden batch: fix "multi-produk"→"multiproduk" di strategi-scm-c01). "Pasca go-live" (diikuti istilah asing ber-tanda-hubung) DIBIARKAN mengikuti konvensi seluruh korpus batch/final terdahulu — mengubah hanya artikel ini justru menciptakan inkonsistensi lintas batch; dicatat sebagai keputusan konvensi, bukan error.
- Frontmatter `word_count` diperbarui 936 → **940** (metode markdown-stripped, konsisten dengan pengukuran editor).

## What I flagged (open issues)
- (tidak ada isu yang menghalangi) ℹ️ Catatan non-blocking: halaman Gartner & sap.com menolak fetch bot (403) pada run researcher — kutipan Gartner diverifikasi via korroborasi sekunder (Computer Weekly) per dossier, confidence high; framing verbatim dijaga dan tanpa hyperlink. Tidak perlu tindakan.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5) — PASS
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hit (scan)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 hit
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hit
- [x] "Dengan demikian" not overused — 0 hit
- [x] Em-dash count ≤2 — actual: **1** (di snippet verbatim researcher)
- [x] Varied paragraph lengths — lead 3 kalimat; one-liner pengantar tabel; elaborasi 2–3 kalimat; paragraf Gartner dibuka kalimat 4-kata
- [x] Not every H2 → 3-bullet list — H2 #1 prose+tabel; H2 #2 & #3 prose murni
- [x] No generic claims without numbers — 9 angka inline: 6 tahapan, 6 fase, 3 pilar, 9 bulan, 170 responden, >seperempat (budget), hampir seperempat (jadwal), >70%, 2027, 1998
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — 0 hit
- [x] No service-dump paragraph — positioning line tunggal, 1 anchor layanan (SAP Activate)
- [x] Kesimpulan tidak dibuka "Sebagai kesimpulan" — dibuka callback ke tiga bekal

### B. Factual & SAP-spec spot-check — 5/5 PASS
| Claim | Source check | Verdict |
|---|---|---|
| 6 fase SAP Activate: Discover, Prepare, Explore, Realize, Deploy, Run — H2 #2 + kolom tabel H2 #1, link SAP Learning inline | Dossier Claim 1 ✓ (learning.sap.com, diakses 2026-07-06) | pass |
| SAP Activate = penerus metodologi ASAP dan SAP Launch, TANPA tahun | Dossier Claim 6 ✓ (kutipan persis SAP); Flag #3 dipatuhi (tahun 2015 tidak ditulis) | pass |
| 3 pilar: SAP Best Practices / "perangkat implementasi dan konfigurasi terpandu (*tools*)" / metodologi modular-agile | Dossier Claim 7 ✓; Flag #2 dipatuhi ("guided configuration" TIDAK diklaim sebagai nama resmi tunggal) | pass |
| Median timeline 9 bulan, 170 responden; >seperempat over budget; hampir seperempat over schedule karena isu organisasi; fokus intens OCM < seperempat responden — H2 #3 + FAQ, link Panorama inline | Dossier Claims 9–11 ✓ — **The 2026 ERP Report** (diverifikasi dari PDF primer); Flag #1 dipatuhi (versi 2025 "9 dari 15 bulan" TIDAK dipakai) | pass |
| Gartner: >70% inisiatif ERP baru diproyeksikan tidak sepenuhnya memenuhi *business case* awalnya hingga 2027 — H2 #3 + FAQ #3, by-name tanpa link | Dossier Claim 12 ✓ — framing verbatim dijaga, BUKAN "gagal total" (kalimat berikutnya justru menegaskan ini); Flag #4 dipatuhi | pass |

Caveat dossier lain yang diverifikasi patuh: fit-to-standard/UAT/cutover/hypercare masing-masing 1 frasa sesuai istilah kunci dossier ✓; fase digambarkan tidak waterfall kaku (Realize agile-iteratif) ✓; tanpa durasi per fase RISE / per ukuran perusahaan / biaya $ (Flag #5–6) ✓; biaya tidak disebut sama sekali (brief mengizinkan maks 1 kalimat — nol juga patuh) ✓; partner & pemilihan partner masing-masing 1 kalimat ✓; Soltius = "mendampingi", bukan builds (product_matrix blacklist) ✓.

### C. On-page SEO checklist (seo_playbook §3 + NILAI OVERRIDE batch 2026-07) — PASS
- [x] Meta title ≤60 (keyword first 30) — actual: **56 chars**, "Implementasi ERP" mulai karakter ke-9
- [x] Meta description 140–160 — actual: **152 chars**
- [x] Slug ≤60, kebab-case, keyword — actual: `tahapan-implementasi-erp` (**24 chars**, sesuai saran brief)
- [x] H1 contains keyword ✓ (= working title user, dipertahankan apa adanya)
- [x] H2 count (override: 3–4 body H2) — actual: **3** body H2 + FAQ + Kesimpulan
- [x] ≥1 question-format H2 — actual: **2** ("Apa Itu Metodologi SAP Activate...?", "Berapa Lama...Mengapa Banyak yang Meleset?"); H2 #3 sekaligus memuat honest hedging (angka kegagalan) per addendum §2
- [x] ≥1 H2 praktis/terstruktur dengan tabel — H2 #1: tabel 6 tahap × (Tahap|Fase SAP Activate|Aktivitas kunci|Output), integritas kolom diverifikasi
- [x] Keyword in first 100 words ✓ (lead) + last paragraph ✓ (baris CTA)
- [x] Definition snippet — blockquote "Ringkasnya:" **50 kata** (band 40–60), ERP di-expand di sini
- [x] **CEK REPETISI DEFINISI (override)**: definisi HANYA di snippet; tanpa H2 "Apa itu implementasi ERP"; H2 #2 definitional-diperbolehkan karena 100% info baru (entitas SAP Activate, penerus ASAP/SAP Launch, 3 pilar) sesuai izin eksplisit brief; tidak ada paragraf yang menyatakan ulang snippet ✓
- [x] LSI terms ≥8 — counted: 12 (tahapan implementasi ERP, metodologi SAP Activate, fit-to-standard, migrasi data, UAT, go-live, cutover, hypercare, change management/manajemen perubahan, fase Discover–Run, durasi implementasi ERP, partner implementasi)
- [x] Internal links (override: TEPAT 2 = 1 hub + 1 cousin) — actual: **2** — hub `migrasi-erp-ke-cloud` (anchor "migrasi ERP ke cloud", inline di lead) + cousin `cara-kerja-sistem-sap-dan-fungsinya-untuk-perusahaan` (anchor "cara kerja sistem SAP", H2 #1); tanpa "BACA JUGA"
- [x] External authoritative citations (1–2 inline) — actual: **2 ber-link** (SAP Learning di pengantar tabel; Panorama di H2 #3) + 1 atribusi by-name tanpa link (Gartner) — dalam cap
- [x] FAQ (override: 2–3 Q&A, jawaban 30–60 kata + 1 fakta/angka) — actual: **3** Q&A dari PAA brief, 43/40/45 kata
- [x] Image placeholders (override: ZERO by design) — actual: **0** `{IMAGE_NN}` ✓ (konsep urutan fase disampaikan via tabel; validasi image-brief N/A — bukan isu)
- [x] ≥1 elemen terstruktur — 1 tabel 6 baris (tabel diutamakan per addendum §4; list tambahan tidak dipaksakan)
- [x] Word count (override: 800–1000, target ~900) — actual: **940** (markdown-stripped) / 986 (raw token) — keduanya dalam band; frontmatter `word_count: 940` akurat
- [x] ≥4 angka spesifik inline — actual: **9**

### C2. GEO extractability (seo_playbook §2a, dipadatkan per addendum §5) — PASS
- [x] Direct 40–60-word answer setelah tiap H2 — actual: **45 / 48 / 44 kata**; masing-masing poin BARU milik H2-nya (urutan nama 6 tahap / entitas SAP Activate + penerus ASAP / angka 9 bulan + penyebab meleset) — bukan pengulangan snippet
- [x] Satu paragraf = satu poin quotable & verifiable — tabel extractable baris-per-baris; paragraf istilah (UAT/cutover/hypercare) self-contained
- [x] Entity clarity — ERP (*Enterprise Resource Planning*) di snippet; SAP Activate, ASAP, SAP Launch, SAP S/4HANA, SAP Best Practices, UAT (*user acceptance testing*), *cutover*, *hypercare*, Panorama Consulting, Gartner — nama penuh di sebutan pertama
- [x] FAQ parseable untuk FAQPage schema (3 H3 + jawaban self-contained)
- [x] Freshness — `date_modified: "2026-07-06"` di frontmatter (ditambahkan editor) ✓

### D. Soltius framing discipline (product_matrix.md + style_guide §11 + override maks 2) — PASS
- [x] Soltius = implementator/pendamping ("Soltius mendampingi perusahaan menjalankan implementasi ERP dengan metodologi SAP Activate, dari perencanaan hingga dukungan pasca go-live") — NEVER "builds" ✓
- [x] Self-mentions (override: maks 2) — actual: **2** (1 positioning line di Kesimpulan + 1 soft CTA soltius.co.id); tanpa aside di body ✓
- [x] No unverifiable superlatives — 0 (kredensial: SAP Platinum Partner melalui United VARs + sejak 1998 = pre-approved company_profile)
- [x] SAP product names/specs match dossier ✓ (lihat B)
- [x] Kesimpulan ≤80 kata di bawah `## Kesimpulan` — actual: **62 kata**, dengan positioning line + CTA konsultatif ("mulailah dari penilaian kesiapan") ✓
- [x] Soft CTA soltius.co.id = baris PALING akhir, terpisah dari Kesimpulan, anchor produk SAP Activate (per tracker), konsultatif ✓
- [x] Hub link = anchor inline natural di lead ✓
- [x] Lead ≤80 kata tanpa paragraf roadmap — actual: **62 kata**, pain konkret (mandat turun, tim tanpa peta proses) + keyword + janji artikel ✓

### E. Anti-cannibalization spot check — PASS
- Closest prior: `memilih-partner-implementasi-sap-migrasi-erp-cloud` (erp-migration-to-the-cloud-03, 2026-08) — subjeknya PEMILIHAN partner; artikel ini menjadikan proses/tahapannya sendiri sebagai subjek, pemilihan partner dibatasi **1 kalimat** ✓. Jaccard per brief ≈ 0.15 (< 0.4).
- Spot-check editor terhadap boundary lain: TANPA durasi per fase RISE (milik `timeline-migrasi-rise-c01`), TANPA brownfield/greenfield/5R/downtime teknis, TANPA cloud vs on-premise, hypercare hanya 1 baris tabel + 1 frasa istilah, fase Discover ringkas — semua batas dedup brief dipatuhi.
- Verdict: **distinct angle confirmed**.

### F. Image-brief completeness — **N/A per batch override**
- Batch conditional 2026-07: ZERO image placeholder by design; stage image-planner dilewati; tidak ada `images.json`. Diverifikasi: **0** `{IMAGE_NN}` di final. Bukan isu.

## Batch-2026-07 overrides applied (ringkasan)
Word band 800–1000 ✓ (940) · FAQ 2–3 ✓ (3, jawaban 30–60 kata + 1 fakta) · internal link tepat 2 ✓ (1 hub + 1 cousin) · zero image placeholder ✓ (validasi N/A) · Soltius maks 2 ✓ · lead ≤80 tanpa roadmap ✓ (62) · kesimpulan ≤80 + positioning ✓ (62) · CTA soltius.co.id baris akhir ✓ · definisi hanya di snippet ✓ (H2 SAP Activate = 100% info baru, diizinkan brief) · 3 body H2 (2 question-format, 1 praktis+tabel, honest hedging inline) ✓ · ≥4 angka inline ✓ (9) · direct answer 40–60 kata/H2 dengan poin baru ✓ · sitasi eksternal ber-link 1–2 ✓ (2 + Gartner by-name).

## The shipping question
Konsultan SAP senior dan CIO skeptis akan menemukan: 6 fase Activate dari sumber primer SAP, tabel pemetaan yang tidak ada di satu pun kompetitor lokal peringkat atas, angka durasi/kegagalan 2026 dengan framing jujur ("bukan gagal total"), dan pengakuan bahwa yang paling sering molor adalah pembersihan data, bukan konfigurasi. Ship it. → **approve**
