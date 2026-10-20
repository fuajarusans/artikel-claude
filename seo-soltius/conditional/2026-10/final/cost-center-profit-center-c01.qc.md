---
brief_id: "cost-center-profit-center-c01"
editor_run_date: "2026-10-08"
batch: "conditional-2026-10"
recommendation: "approve"
overall_score: 9
word_count: 1122
---

# Editor QC Report — Cost Center dan Profit Center: Perbedaan dan Fungsinya

## Recommendation
**approve**

Draft masuk sudah sangat patuh pada `style_addendum.md` 2026-10: seluruh gate batch terpenuhi dan fact-check terhadap dossier bersih (lima flag faktual dossier sudah di-hedge persis sesuai rekomendasi). Satu perbaikan substantif dilakukan in-place — koreksi faktual, bukan perubahan angle/struktur: positioning line Soltius di `## Kesimpulan` menulis "bagian dari Metrodata Group **sejak 1998**", padahal `company_profile.md` menyatakan Soltius **didirikan 1998** dan **diakuisisi Metrodata 2008** (baris 50–51); "sejak 1998" keliru menempel pada keanggotaan Metrodata. Diselaraskan ke frasa approved `company_profile.md` baris 139: "**berpengalaman sejak 1998 dan bagian dari Metrodata Group**". Ini error yang sama yang dikoreksi editor pada sibling `buku-besar-c01` — konsisten diterapkan. Semua angka SAP di-hedge benar: controlling area A000 & "satu tabel jurnal universal" dilabeli "materi berbasis rilis S/4HANA 2023 untuk edisi public cloud; private/on-prem bisa berbeda"; contoh alokasi IT Rp600 juta → 50/30/20% = Rp300/180/120 juta dilabeli "ilustrasi, bukan data perusahaan nyata" (aritmetika benar: 50+30+20 = 100; 300+180+120 = 600). Tidak ada T-code KS01, literal "ACDOCA", istilah "allocation cycle", maupun statistik "sap fico +46%" di body. Word count final **1.122** (cleaned-prose `tools/count_words.py`, band 1000–1200, target 1100), 0 em-dash, 0 image placeholder, CV panjang-paragraf **0,392** (> gate 0,30), internal link tepat 2, sitasi eksternal 2, Soltius 2 self-mention. Artikel siap lanjut ke seo-quality-validator. **Tiga keputusan user tetap terbuka** (hub FICO vs halaman solusi resmi; status cousin `buku-besar-general-ledger` yang masih 404; finalisasi meta block) — dirinci di flag; ketiganya bukan blocker publikasi.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tanpa pembuka klise, 0 em-dash, 0 "Selain itu"/"Dengan demikian"/"Penting untuk dicatat"/"Sebagai kesimpulan", tanpa adjektiva hype. Ritme bervariasi (CV paragraf 0,392; paragraf 1–5 kalimat, panjang 17–90 kata). Tidak "tiap H2 → 3 bullet" (prosa + 1 tabel + 1 bulleted list). |
| Factual & SAP-spec accuracy | 9 | 5 flag dossier di-hedge tepat; contoh alokasi berlabel ilustrasi + aritmetika diverifikasi; A000/jurnal universal di-hedge ke edisi/rilis; tanpa T-code/literal tabel/"allocation cycle". Positioning Soltius dikoreksi (founded 1998 ≠ Metrodata sejak 1998). Tidak ada spesifikasi SAP dikarang. |
| On-page SEO compliance | 9 | meta_title 49 char (keyword "Cost Center dan Profit Center" di depan), meta_description 158 char, slug keyword-led 46 char, H1 + first-100-words + paragraf terakhir memuat keyword, 4 H2 konten (3 question-format) + 1 tabel 5-baris + 1 bulleted list. ≥10 LSI term. |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata setelah tiap H2 (≈49/52/50/51 kata, poin baru bukan ulangan snippet); satu poin terkutip per paragraf; tabel perbedaan extractable baris-per-baris; FAQ 4 Q&A siap FAQPage; definition snippet 44 kata; freshness `publish_month: 2026-10`. |
| Soltius framing discipline | 9 | 2 self-mention (positioning line Kesimpulan + soft CTA baris terakhir); "mengimplementasikan dan mendampingi ... dari implementasi hingga dukungan pasca go-live", bukan "membuat"; tanpa superlatif; SAP FICO/CO di H2 #4 = teaching, bukan self-mention. |
| Internal linking | 9 | Tepat 2: hub "SAP FICO" inline di H2 #4 + cousin "siklus akuntansi" (fallback) inline di H2 #2; tanpa link ketiga; tanpa "BACA JUGA". Status cousin buku-besar (404) ditangani via fallback — lihat flag (b). |
| FAQ quality | 9 | 4 Q&A; jawaban 30–60 kata; tiap jawaban memuat 1 fakta/angka (biaya aktual vs anggaran; 4 jenis pusat; ROI; prinsip controllability); dari PAA; FAQ #1 "Apa itu cost center?" menangkap supporting keyword lewat sudut tolok-ukur + contoh (bukan parroting snippet). |

## What I fixed (changelog)
- **Koreksi faktual — positioning line Soltius** (`## Kesimpulan`): "SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group **sejak 1998**" → "SAP Platinum Partner melalui United VARs, **berpengalaman sejak 1998 dan bagian dari Metrodata Group**". Alasan: `company_profile.md` baris 50–51 — Soltius didirikan 1998, diakuisisi Metrodata 2008; frasa lama secara harfiah menyatakan keanggotaan Metrodata sejak 1998 (salah). Frasa baru = positioning line approved `company_profile.md` baris 139. Framing implements/supports tetap utuh; jumlah self-mention tetap 2.
- **Frontmatter `word_count` 1121 → 1122** (hasil `tools/count_words.py` setelah edit; +1 kata "berpengalaman"). Masih dalam band 1000–1200, target 1100.

## What I flagged (open issues)
- ⚠️ **(a) Keputusan user — HUB FICO vs halaman solusi resmi**: Soltius belum punya landing khusus Controlling/cost-center; kolom `landing_page` di Google Sheet tab Oktober KOSONG untuk topik ini. Artikel memakai blog "SAP FICO" (`/id/blog/sistem-sap-fico-dan-modulnya-yang-banyak-digunakan-perusahaan-besar`) sebagai hub + funnel CTA (halaman ini eksplisit menyebut "pusat biaya, pusat laba" di modul CO; terverifikasi live run ini). *Rekomendasi*: teruskan ke user — bila ada halaman solusi FICO/Finance resmi yang lebih disukai sebagai hub/funnel, sesuaikan 1 tautan (H2 #4) + CTA sebelum publikasi; total tetap 2. Bukan blocker.
- ⚠️ **(b) Keputusan user — cousin `buku-besar-general-ledger` masih 404**: cousin yang disarankan brief (`/id/blog/buku-besar-general-ledger`, sibling `buku-besar-c01`) dikonfirmasi **HTTP 404** hari ini (belum live). Terpasang fallback **`/id/blog/apa-itu-siklus-akuntansi-dan-manfaatnya`** (✅ 200 OK, anchor "siklus akuntansi" di H2 #2). *Rekomendasi*: konfirmasi apakah halaman buku-besar akan live saat publish; jika ya, editor/validator boleh menukar anchor ke "buku besar / general ledger" (total tetap 2, hub FICO tetap wajib); jika tidak, fallback tetap dipakai. Bukan blocker.
- ⚠️ **(c) Keputusan user — finalisasi meta block**: meta_title (49 char), meta_description (158 char), slug (46 char) saran brief dipertahankan; semua lolos gate §7 (title ≤60 keyword depan, desc 140–160, slug ≤60 keyword-led). Catatan presisi: meta_description memuat entity "cost center" + "profit center" terpisah, bukan frase persis "cost center dan profit center" (frase persis sudah ada di meta_title & H1). *Rekomendasi*: konfirmasi ke user apakah meta block saran sudah final atau perlu disesuaikan. Bukan blocker.
- ⚠️ **"Laba vs target" sebagai dasar penilaian profit center** (flag dossier): konvensi managerial accounting baku, TETAPI bukan kutipan verbatim AccountingTools (halaman itu hanya eksplisit soal cost center "rated on costs"). Di body dinyatakan sebagai praktik umum (tidak diatribusikan sebagai kutipan langsung AccountingTools) — penanganan benar, dibiarkan.
- ⚠️ **Plagiarism/AI-detector belum final**: verdict akhir = tugas seo-quality-validator (`tools/quality-check.ps1` + WebSearch). Frasa inti orisinal (kerangka 4 pusat pertanggungjawaban + prinsip controllability + alur alokasi berangka + aside praktik lapangan harga transfer), risiko rendah.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] Tanpa pembuka klise ("Di era digital / Seiring perkembangan / Tidak dapat dipungkiri") — 0 kecocokan
- [x] Tanpa "Selain itu" pembuka ≥2 paragraf berurutan — 0
- [x] Tanpa "Penting untuk dicatat/dipahami/diingat" — 0
- [x] "Dengan demikian" tidak dipakai — 0; "Sebagai kesimpulan" tidak dipakai sebagai pembuka Kesimpulan — 0
- [x] Em-dash (U+2014) = 0 (batas ≤2)
- [x] Panjang paragraf bervariasi — CV 0,392 (gate ≥0,30); paragraf 17–90 kata, 1–5 kalimat
- [x] Tidak tiap H2 → 3 bullet — campuran prosa + 1 tabel (5 baris) + 1 bulleted list (4 item)
- [x] Tanpa klaim generik tanpa angka — ≥10 angka spesifik inline
- [x] Tanpa adjektiva hype (canggih/powerful/seamless/terdepan) — 0
- [x] Tanpa service-dump Soltius

### B. Factual & SAP-spec spot-check (vs dossier + product_matrix + company_profile)
| Claim | Source check | Verdict |
|---|---|---|
| Cost center bertanggung jawab hanya atas biaya (minimize costs); profit center atas pendapatan+biaya (maximize profits) | AccountingTools (dossier, verbatim) — disitasi inline H2 #1 | pass |
| Cost center & profit center = 2 dari 4 pusat pertanggungjawaban; prinsip controllability | Lumen Learning + AccountingTools (dossier) | pass |
| Contoh alokasi IT Rp600 jt → 50/30/20% = Rp300/180/120 jt | Ilustrasi berlabel; aritmetika diverifikasi (100%; 600) | pass |
| Controlling area A000 + satu tabel jurnal universal (FI+CO) | SAP Learning (dossier, SAP resmi) — di-hedge ke S/4HANA 2023 public cloud; tanpa T-code/literal ACDOCA | pass |
| Soltius: SAP Platinum via United VARs, berpengalaman sejak 1998, bagian Metrodata Group, implements/supports | company_profile.md baris 35/40/50–51/139 — **dikoreksi** (sejak 1998 dilepas dari keanggotaan Metrodata) | pass (after fix) |

### C. On-page SEO checklist (seo_playbook.md §3 + addendum §7)
- [x] Meta title ≤60 (keyword 30 char pertama) — 49 char, "Cost Center dan Profit Center" di depan
- [x] Meta description 140–160 — 158 char
- [x] Slug ≤60, kebab-case, keyword-led — `cost-center-dan-profit-center-perbedaan-fungsi` (46 char)
- [x] H1 memuat keyword — "Cost Center dan Profit Center: Perbedaan dan Fungsinya"
- [x] H2 konten 4 (band batch 3–5); ≥1 question-format — 3 question-format (#1, #3, #4); ≥1 praktis/tabel — #1 tabel 5-baris, #3 contoh berangka
- [x] Keyword di 100 kata pertama (lead) + paragraf terakhir (CTA)
- [x] Definition snippet 40–60 kata dekat atas — 44 kata (blockquote "Ringkasnya:")
- [x] ≥8 LSI term — cost/profit center, pusat biaya/laba, pusat pertanggungjawaban, responsibility/revenue/investment center, akuntansi pertanggungjawaban, controllability, alokasi biaya, anggaran vs target, SAP Controlling (CO), SAP FICO, standard hierarchy, controlling area, activity type (>12)
- [x] Internal link **tepat 2** (batch override) — hub SAP FICO (H2 #4) + cousin siklus akuntansi (H2 #2)
- [x] Sitasi eksternal 1–2 — 2 (AccountingTools H2 #1 + SAP Learning H2 #4)
- [x] FAQ **3–5** (batch override) — 4 Q&A
- [x] ≥1 list + ≥1 tabel — 1 bulleted list + 1 tabel
- [x] Word count band batch **1000–1200** — 1.122
- [N/A] Image brief/placeholder — batch override: 0 placeholder (tidak di-flag)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata segera setelah tiap H2 (≈49/52/50/51 kata), poin baru bukan parafrase snippet
- [x] Tiap paragraf satu poin quotable & verifiable; tabel perbedaan extractable baris-per-baris
- [x] FAQ parseable untuk FAQPage; `publish_month: 2026-10` (freshness) di meta block
- [x] Definisi **SEKALI** — hanya di snippet "Ringkasnya:"; body/H2 tidak mengulang; FAQ #1 menangkap supporting keyword lewat sudut tolok-ukur + contoh (bukan restatement snippet)

### D. Soltius framing discipline (product_matrix.md + style_guide §11 + addendum §6)
- [x] Soltius = implementer/pendamping, BUKAN "membuat SAP"
- [x] Self-mention = 2 (positioning line Kesimpulan + soft website CTA baris terakhir); tanpa aside di tengah body
- [x] Tanpa superlatif ("terbaik/nomor satu")
- [x] Nama produk SAP + spec sesuai dossier/product_matrix; kredensial sesuai company_profile (dikoreksi)
- [x] Kesimpulan memakai positioning line company_profile; CTA konsultatif (bukan "beli sekarang")
- [x] Soft website CTA (soltius.co.id) = baris terakhir, terpisah dari Kesimpulan; anchor funnel SAP FICO (Controlling)
- [x] Hub = anchor inline natural ("SAP FICO"), bukan "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior: sibling `buku-besar-c01` (batch 2026-10) — sisi **FI** (pencatatan/pelaporan per akun); artikel ini sisi **CO** (tanggung jawab biaya vs laba per unit)
- Subtopic overlap (Jaccard, dari brief): ≈ 0,06 (< 0,4)
- angle_hash `sha1:3d75564950beb91a4e32d59ab9119bf937808d26` tidak berbenturan dengan entri `articles_history/` maupun sibling batch
- Verdict: **distinct angle confirmed** — boundary dedup dipatuhi (tidak mengajarkan posting/bentuk buku besar/Universal Journal sebagai topik utama; "laba" = tolok ukur tanggung jawab unit, bukan pembacaan laporan laba rugi)
