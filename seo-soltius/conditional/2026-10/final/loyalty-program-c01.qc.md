---
brief_id: "loyalty-program-c01"
editor_run_date: "2026-10-08"
batch: "conditional-2026-10"
recommendation: "approve"
overall_score: 9
word_count: 1172
---

# Editor QC Report — Apa Itu Loyalty Program dan Strateginya untuk Retensi Pelanggan

## Recommendation
**approve**

Draft masuk sudah sangat patuh pada `style_addendum.md` 2026-10, dan keenam FLAG faktual dossier sudah ditangani persis sesuai rekomendasi: (#1) tidak menyebut "SAP Loyalty Management" sebagai produk — memakai SAP Emarsys Customer Engagement + SAP Customer Data Cloud/Platform; (#2) angka 5 kali dan 60-70%/5-20% berlabel "estimasi industri" + hedge rentang 5-25 kali; (#3) HBR 1990 +25-85% dengan atribusi tahun + kalimat kritik akademisi; (#4) contoh Indonesia di-refresh ke OVO Points, Shopee+Coins, AlfaGift, Gojek PLUS (2024), Starbucks Rewards, AirAsia rewards (bukan Ponta/BIG/GoRewards yang usang); (#5) mekanik dideskripsikan umum dan Sephora ditandai "(contoh global)"; (#6) kapabilitas SAP disebut umum tanpa janji fitur permanen dan tanpa IDC MarketScape sebagai angka ROI. Definisi muncul hanya sekali di snippet "Ringkasnya:" (~44 kata); body/H2 tidak mengulangnya. Struktur: 4 H2 konten (3 question-format: #1/#3/#4; 1 praktis bertabel: #2) + FAQ 5 Q&A + Kesimpulan. Internal link tepat 2 (hub retail-produk + cousin business-intelligence), sitasi eksternal 2 inline (HBR 1990 + SAP CX), 0 image placeholder, em-dash 0 di body, 2 self-mention Soltius (implementator/pendamping, bukan pembuat). Dua perbaikan in-place dilakukan — keduanya memperkuat kualitas tanpa menyentuh angle/struktur atau band GEO 40-60: (1) FAQ #2 diberi atribusi sumber + angka pertumbuhan pada statistik pasar; (2) FAQ #1 dipadatkan untuk menghapus redundansi dengan catatan tabel H2 #2 dan memecah keseragaman panjang jawaban FAQ. Word count final 1.172 (konvensi cleaned-prose `tools/count_words.py`; band batch 1000-1200, target ~1100 — PASS), AI-detector `quality-check.ps1` = 0,04 (pass), paragraph CV 0,329 -> 0,339 (di atas lantai gate 0,30). Tiga catatan terbuka adalah pertanyaan user yang diteruskan (hub internal, framing SAP CX, nasib angka ekonomi retensi) — dijawab dengan default non-interaktif dan perlu konfirmasi user sebelum publikasi, tetapi tidak memblokir approve.

## Quality scores
| Dimension | Score (1-10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tanpa pembuka klise, 0 "Selain itu"/"Dengan demikian"/"Penting untuk dicatat", em-dash = 0 di body, tanpa adjektiva hype. Ritme bervariasi (CV paragraf 0,339; gate >=0,30). AI-detector heuristik 0,04 -> pass. |
| Factual & SAP-spec accuracy | 9 | 6 FLAG dossier ditangani tepat; tidak ada nama/spesifikasi SAP dikarang (no "SAP Loyalty Management"); angka ekonomi retensi di-hedge + atribusi; contoh ID yang stale sudah di-refresh. |
| On-page SEO compliance | 9 | meta_title 47 char (keyword depan), meta_description 158 char, slug keyword-led 42 char, H1 + first-100-words memuat keyword, 4 H2 konten (3 question-format), 1 tabel + 1 numbered list. |
| GEO extractability (§2a) | 9 | Jawaban langsung 40-60 kata setelah tiap H2 konten (46/41/44/46 kata); snippet ~44 kata (definisi SEKALI); satu poin terkutip per paragraf; FAQ 5 Q&A siap FAQPage; freshness `publish_month`/`dateModified` ada. |
| Soltius framing discipline | 9 | 2 self-mention (positioning line Kesimpulan + soft CTA baris terakhir); "mendampingi/menjalankan di atas" SAP CX, bukan "membuat"; tanpa superlatif. |
| Internal linking | 8 | Tepat 2 (hub retail-produk inline di langkah 4 + cousin business-intelligence inline di langkah 2); tanpa link ketiga; tanpa "BACA JUGA". Skor <9 karena pilihan hub masih menunggu keputusan user (lihat flag). |
| FAQ quality | 9 | 5 Q&A; jawaban 34/57/40/42/41 kata (band 30-60, kini bervariasi); tiap jawaban memuat >=1 fakta/angka; dari PAA; tidak mengulang definisi snippet. |

## What I fixed (changelog)
- **FAQ #2 ("Apa contoh loyalty program di Indonesia?"): atribusi + angka pertumbuhan.** Statistik pasar "US$1,03 miliar pada 2025" sebelumnya tanpa sumber inline; diubah menjadi "satu laporan riset pasar (ResearchAndMarkets, September 2025) memproyeksikan ... sekitar US$1,03 miliar pada 2025, tumbuh kira-kira 18,3% per tahun." Alasan: memperkuat E-E-A-T (sumber + tahun) dan honesty (firma riset komersial diatribusikan, bukan disajikan sebagai fakta mutlak); sekaligus menaikkan jawaban dari 43 -> 57 kata (masih dalam band 30-60) untuk memecah keseragaman panjang FAQ.
- **FAQ #1 ("Apa saja jenis ... paling umum?"): dipadatkan 40 -> 34 kata.** "Pilihan sebaiknya mengikuti frekuensi pembelian dan margin bisnis, bukan sekadar meniru program yang sedang populer." -> "Pilih sesuai frekuensi pembelian dan margin." Menghapus redundansi "bukan tren" yang sudah dinyatakan di catatan tabel H2 #2; menambah nuansa "bukan besarnya reward". Efek: panjang jawaban FAQ kini 34/57/40/42/41 (sebelumnya 40/43/40/42/41 — nyaris seragam), menaikkan paragraph-burstiness CV 0,329 -> 0,339 (menjauh dari lantai gate 0,30) tanpa mengubah substansi.
- **Frontmatter `word_count` 1164 -> 1172** (hasil `tools/count_words.py` setelah edit; band 1000-1200).

## What I flagged (open issues)
- WARNING **Keputusan user #1 — HUB internal link** (user eksplisit minta ditanyai): soltius.co.id **tidak punya halaman khusus CX/CRM/loyalty** (dikonfirmasi lintas brief batch ini via `solutions-by-products/`). Hub DEFAULT yang dipakai = halaman **Solusi Retail** (`/id/solutions-by-products/retail-produk`), ditautkan sebagai "solusi pengalaman pelanggan ritel" dengan jujur (BUKAN diklaim sebagai halaman program loyalitas SAP CX). URL di-WebFetch resolve 200 (tema omnichannel customer experience/personalisasi/iVend terkonfirmasi). *Mohon konfirmasi*: (a) hub ini oke, ATAU (b) ada URL halaman solusi/CX Soltius lain yang lebih tepat. Jika (b), cukup ganti 1 tautan di langkah 4. Tidak memblokir approve.
- WARNING **Keputusan user #2 — FRAMING SAP CX** (user minta diarahkan): DEFAULT yang dipakai = framing seimbang — SAP Emarsys Customer Engagement sebagai mesin kampanye/loyalitas + SAP Customer Data Cloud/Platform sebagai lapisan data terpadu, disebut umum tanpa janji fitur permanen (sesuai FLAG #6). *Mohon konfirmasi*: pertahankan framing seimbang ini, ATAU tonjolkan Emarsys sebagai mesin loyalitas (tier/status, dua jenis poin, referral, win-back, dasbor revenue impact — semua SAP-official). Jika ingin ditonjolkan, perlu penulisan ulang ringan langkah 4 (berpotensi menambah kata — jaga band 1000-1200). Tidak memblokir approve.
- WARNING **Keputusan user #3 — STATISTIK EKONOMI RETENSI** (user minta ditanyai): sumber primer angka HBR 1990 (+5% retensi -> +25-85% profit) dan rule of thumb akuisisi ~5x lemah/diperdebatkan. DEFAULT yang dipakai = dipertahankan DENGAN hedging + atribusi + 1 kalimat kritik akademisi (persis rekomendasi dossier FLAG #2/#3). *Mohon konfirmasi*: OK dipertahankan dengan hedging, ATAU dihilangkan sama sekali. Jika dihilangkan, H2 #1 perlu sudut ekonomi alternatif (mis. CLV + biaya akuisisi bersifat kualitatif) — perubahan struktural ringan, sebaiknya kembali ke writer. Tidak memblokir approve.
- WARNING **Paragraph CV 0,339 < 0,45 ideal** — `quality-check.ps1` menandai `paragraph-low-variance` severity **low** (bukan blocker; ambang gate 0,30 terlampaui). Wajar untuk explainer B2B padat dengan 4 jawaban langsung 40-60 kata wajib + 5 jawaban FAQ 30-60 kata yang secara struktural mengelompok di sekitar rerata. Menaikkan ke 0,45 akan memaksa padding/pemotongan yang justru melanggar on-point + band 1000-1200. *Rekomendasi*: biarkan.
- WARNING **Angka 60-70% vs 5-20% (H2 #1) berlabel-estimasi tanpa nama sumber inline.** Body menandainya "kerap diperkirakan" + "estimasi industri, bukan angka mutlak" — memenuhi `style_guide.md` §10(b) (range/rule-of-thumb berlabel). Dossier menyebut atribusi opsional ke *Marketing Metrics*/Invesp. *Rekomendasi*: opsional — boleh ditambah atribusi ringan bila user mau; tidak wajib, tidak memblokir.
- WARNING **Plagiarism belum final** — `quality-check.ps1` mengekstrak 8 passage kandidat untuk pemeriksaan web; verifikasi akhir adalah tugas `seo-quality-validator` (WebSearch). Frasa tampak orisinal (sudut ekonomi retensi jujur, tabel jenis->kapan cocok, bagian "kapan merugikan"), risiko rendah, tetapi verdict plagiarisme menunggu validator.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] Tanpa pembuka klise ("Di era digital / Seiring perkembangan / Tidak dapat dipungkiri") — 0 kecocokan
- [x] Tanpa "Selain itu" pembuka >=2 paragraf berurutan — 0
- [x] Tanpa "Penting untuk dicatat/dipahami/diingat" — 0
- [x] "Dengan demikian" tidak dipakai — 0
- [x] Em-dash (U+2014) = 0 di body — batas <=2 terpenuhi (field metadata frontmatter juga 0)
- [x] Panjang paragraf bervariasi — CV 0,339 (gate >=0,30); paragraf prosa 6-68 kata; lead 67, Kesimpulan 68, jawaban langsung + FAQ 34-57
- [x] Tidak tiap H2 -> 3 bullet — campuran prosa, 1 tabel (H2 #2), 1 numbered list 5 langkah (H2 #3)
- [x] Tanpa klaim generik tanpa angka — >=5 angka spesifik inline (lihat C)
- [x] Tanpa adjektiva hype (canggih/powerful/seamless/terdepan/revolusioner) — 0
- [x] Tanpa service-dump Soltius

### B. Factual & SAP-spec spot-check (vs dossier + product_matrix)
| Claim | Source check | Verdict |
|---|---|---|
| Akuisisi ~5 kali biaya retensi; rentang 5-25 kali "estimasi industri", asal diperdebatkan | dossier core fact + FLAG #2 (hedge + label) ✓ | pass |
| HBR 1990 (Reichheld & Sasser, Sept 1990): retensi +5% -> profit ~25-85%, "sering dikutip" + 1 kalimat kritik akademisi | dossier core fact + FLAG #3; URL hbr.org resolve OK ✓ | pass |
| Jual ke pelanggan lama ~60-70% vs prospek ~5-20%, "estimasi industri" | dossier + FLAG #2 (label estimasi) ✓ | pass |
| Portofolio SAP CX: SAP Customer Data Cloud + SAP Customer Data Platform (profil terpadu), SAP Emarsys Customer Engagement (kampanye & loyalitas) — nama penuh, kapabilitas umum; TIDAK memakai "SAP Loyalty Management" | dossier (SAP Learning/sap.com) + FLAG #1 & #6 ✓ | pass |
| Contoh ID: OVO Points, Shopee+Coins, AlfaGift, Gojek PLUS (2024), Starbucks Rewards, AirAsia rewards; Sephora "(contoh global)" | dossier + FLAG #4 & #5 (stale Ponta/BIG/GoRewards dihindari) ✓ | pass |
| Pasar loyalitas ID ~US$1,03 miliar 2025 (+18,3%/thn), atribusi ResearchAndMarkets Sept 2025 | dossier (konteks pasar) ✓ (ditambah atribusi oleh editor) | pass |
| Soltius = SAP Platinum Partner via United VARs, Metrodata Group sejak 1998, "mendampingi" | product_matrix + company credentials ✓ (bukan "membuat") | pass |

### C. On-page SEO checklist (seo_playbook §3 + batch override)
- [x] Meta title 47 char (keyword "Loyalty Program" di awal) — <=60 ✓
- [x] Meta description 158 char — band 140-160 ✓
- [x] Slug `loyalty-program-strategi-retensi-pelanggan` (keyword-led, 42 char) — <=60 ✓
- [x] H1 memuat primary keyword ("Loyalty Program" di 24 char pertama)
- [x] H2 konten = 4 (band batch 3-4/5); 3 question-format (#1/#3/#4); >=1 praktis/terstruktur (tabel jenis H2 #2 + numbered list 5 langkah H2 #3)
- [x] Keyword di 100 kata pertama (lead) + paragraf akhir (Kesimpulan/CTA)
- [x] Definition snippet ~44 kata (SEKALI; "loyalty program ... adalah" muncul 1x; tidak diulang di body/H2/FAQ)
- [x] LSI/semantic >=8 (program loyalitas pelanggan, retensi pelanggan, CLV, churn, repeat purchase, point-based, tier-based, paid, cashback, coalition, segmentasi, personalisasi, SAP CX, SAP Emarsys Customer Engagement, SAP Customer Data Cloud, SAP Customer Data Platform) — ~16
- [x] Internal link = 2 (override batch: 1 hub retail-produk + 1 cousin business-intelligence) — tanpa link ketiga, tanpa BACA JUGA
- [x] Sitasi eksternal otoritatif = 2 inline (HBR 1990 + SAP CX sap.com/products/crm)
- [x] FAQ = 5 Q&A (band batch 3-5)
- [x] >=1 list + >=1 tabel (1 numbered 5-langkah list + 1 tabel jenis 5 baris)
- [x] Word count = 1.172 (band batch 1000-1200; cleaned-prose `count_words.py`; raw `quality-check.ps1` 1.216 TIDAK dipakai untuk memvonis >1200 per style_addendum §1/§7)
- [N/A] Image placeholder — override batch: 0 placeholder (TIDAK di-flag)

### C2. GEO extractability (seo_playbook §2a)
- [x] Jawaban langsung 40-60 kata tepat setelah tiap H2 konten: 46 / 41 / 44 / 46 kata (poin baru milik tiap H2, bukan ulangan snippet)
- [x] Tiap paragraf tubuh = satu poin yang bisa dikutip & diverifikasi (tiap baris tabel quotable; tiap angka = 1 klaim berlabel)
- [x] FAQ parseable untuk FAQPage; freshness ditandai `publish_month: 2026-10` + `dateModified: 2026-10-08` di meta block

### D. Soltius framing discipline (product_matrix + style_guide §11)
- [x] Soltius = implementator/pendamping ("mendampingi ... menjalankan program loyalitas berbasis data di atas SAP Customer Experience"), BUKAN "membuat SAP"
- [x] Self-mention = 2 (<=3; batch maks 2): positioning line di Kesimpulan + soft CTA baris terakhir
- [x] Tanpa superlatif tak terverifikasi ("terbaik/nomor satu")
- [x] Nama/spesifikasi SAP cocok dengan dossier (SAP Customer Experience, SAP Emarsys Customer Engagement, SAP Customer Data Cloud, SAP Customer Data Platform) — tanpa modul/versi karangan
- [x] Penutup memakai positioning line kredensial (SAP Platinum Partner via United VARs, Metrodata Group sejak 1998)
- [x] Soft website CTA soltius.co.id = baris terakhir, setelah Kesimpulan, nada konsultatif; anchor funnel "SAP Customer Experience (CX)" (per cta_anchor brief)
- [x] Hub link = anchor inline natural ("solusi pengalaman pelanggan ritel") di langkah 4, bukan BACA JUGA; diklaim jujur (bukan halaman loyalty SAP CX)

### E. Anti-cannibalization spot check
- Closest prior article untuk keyword "loyalty program": **none yet** — `articles_history/index.json` memuat 51 artikel di 7 klaster (Business Intelligence, Data Warehouse Solutions, ERP migration to the cloud, Low-Code Platform, SAP Clean Core, digital manufacturing, warehouse management system); TIDAK ada klaster loyalty/CX/CRM/retensi-pelanggan/customer
- Tetangga tematik terdekat (bukan di history/belum live): `omnichannel-retail-c01` (2026-06, sisi back-office omnichannel) — brief ini sisi pelanggan/marketing; omnichannel brief SECARA EKSPLISIT menahan topik loyalty/CX untuk artikel lain
- Subtopic overlap (Jaccard estimate): ~0,12 (< 0,4) — sesuai dedup strategist; tidak ada tabrakan angle_hash
- Verdict: **distinct angle confirmed**

## The shipping question
Jika artikel ini tayang di soltius.co.id besok dan dibaca konsultan SAP senior + CIO skeptis — sudut ekonomi retensi yang jujur (angka berlabel sumber/estimasi + kritik akademisi yang jarang ditulis kompetitor), tabel "jenis -> kapan cocok" yang aktual (contoh ID yang masih berjalan, Sephora ditandai global), bagian "kapan loyalty program malah merugikan", nama produk SAP CX yang akurat tanpa mengarang "SAP Loyalty Management", dan framing Soltius sebagai implementator tanpa overselling — WEBARQ Promote akan bangga. Syarat praktis: tiga keputusan user (hub internal, framing SAP CX, nasib angka ekonomi retensi) perlu dikonfirmasi sebelum publikasi (dijalankan dengan default non-interaktif), dan verdict plagiarisme menunggu validator. **Ya -> approve.**
