---
brief_id: "master-data-management-c01"
editor_run_date: "2026-10-08"
batch: "conditional-2026-10"
recommendation: "approve"
overall_score: 9
word_count: 1133
---

# Editor QC Report — Master Data Management (MDM): Pengertian dan Pentingnya

## Recommendation
**approve**

Draft masuk sudah sangat patuh pada style_addendum 2026-10; semua gate batch terpenuhi dan fact-check terhadap dossier bersih (empat flag faktual sudah di-hedge persis sesuai rekomendasi dossier). Dua perbaikan in-place dilakukan: (1) lead dipadatkan dari 82 ke 76 kata agar patuh batas lead ≤80 dan menghilangkan kadens "MDM adalah… / Secara singkat: MDM adalah…" yang berdempet dengan snippet; (2) satu paragraf di H2-3 dipecah menjadi kalimat-pembuka pendek + elaborasi untuk menaikkan variasi ritme. Alasan perbaikan ritme: pada draft, CV panjang-paragraf (metrik yang dihitung `quality-check.ps1`, blockquote ikut dihitung) hanya 0,3005 — lolos ambang 0,30 secara tipis sekali. Setelah edit, CV = 0,355 (aman di atas lantai), word count tetap 1.133 (band 1000–1200), dan AI-detector `quality-check.ps1` = 0,04 (pass). Tidak ada perubahan angle/struktur. Artikel siap lanjut ke seo-quality-validator. Catatan: dua item keputusan user (hub & cousin) masih terbuka — lihat flag; bila user mengganti, dua tautan internal perlu disesuaikan sebelum publikasi.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tanpa pembuka klise, 0 em-dash, 0 "Selain itu"/"Dengan demikian", ritme bervariasi (CV paragraf 0,355; CV kalimat 0,878). AI-detector heuristik 0,04 → pass. |
| Factual & SAP-spec accuracy | 9 | 4 flag dossier semuanya di-hedge tepat; tidak ada spesifikasi SAP yang dikarang; "menurut Gartner" via CIO.com (bukan klaim halaman glossary); hanya 3 domain inti MDG disebut. |
| On-page SEO compliance | 9 | meta_title 50 char (keyword depan), meta_description 147 char, slug keyword-led, H1 + first-100-words memuat keyword, 4 H2 konten (3 question-format), 1 tabel x2 + 1 numbered list. |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata setelah tiap H2 (49/50/43/42 kata); satu poin terkutip per paragraf; FAQ 5 Q&A siap FAQPage; snippet 46 kata. |
| Soltius framing discipline | 9 | 2 self-mention (positioning line Kesimpulan + soft CTA baris terakhir); "mendampingi/implementasi", bukan "membuat"; tanpa superlatif. |
| Internal linking | 9 | Tepat 2 (hub data-management inline di lead + cousin business-intelligence di H2-1); tanpa link ketiga; tanpa "BACA JUGA". |
| FAQ quality | 9 | 5 Q&A; jawaban 35–44 kata; tiap jawaban memuat 1 fakta/angka; diambil dari PAA; tidak mengulang snippet kata-per-kata. |

## What I fixed (changelog)
- **Lead 82 → 76 kata** (patuh batas ≤80 style_addendum §2). Dibuang "yang sama" dan "lalu" (redundan) dan diganti "MDM adalah jalan keluar dari kekacauan itu" → "MDM menjawab kekacauan itu" untuk menghindari kadens "adalah…" berdempet dengan definition snippet. Keyword + tautan hub tetap di lead.
- **Pecah 1 paragraf H2-3** ("Tidak semua perusahaan perlu langsung membangun hub penuh." dijadikan paragraf pembuka pendek, terpisah dari elaborasi "kapan belum perlu"). Menaikkan CV panjang-paragraf dari 0,3005 → 0,355 (menjauh dari lantai 0,30). Tidak ada kata yang ditambah/dikurang — hanya pemisahan paragraf.
- **Frontmatter `word_count` 1139 → 1133** (hasil `tools/count_words.py` setelah lead dipadatkan).
- Normalisasi minor: "Satu catatan agar tidak keliru:" → "Satu catatan agar tidak keliru." (titik, bukan titik dua, agar kalimat berdiri sendiri).

## What I flagged (open issues)
- ⚠️ **Keputusan user — HUB** (user eksplisit minta ditanyai): hub dipakai halaman SOLUSI Data Management (`/id/solutions-by-products/data-management`), bukan blog hub, karena Sheet mengosongkan kolom landing. Alternatif = blog hub Data Warehouse Solutions (`/id/blog/data-warehouse-solutions`). *Rekomendasi*: teruskan ke user; bila diganti, sesuaikan tautan di lead sebelum publikasi.
- ⚠️ **Keputusan user — COUSIN**: cousin dipakai Business Intelligence (`/id/blog/business-intelligence`). Alternatif = Data Warehouse Solutions. *Rekomendasi*: teruskan; bila diganti, sesuaikan tautan di H2-1.
- ⚠️ **CV paragraf 0,355 < 0,45 ideal** — `quality-check.ps1` menandai `paragraph-low-variance` severity **low** (bukan blocker; ambang gate 0,30 terlampaui). Wajar untuk explainer B2B padat dengan dua tabel. *Rekomendasi*: biarkan; menaikkan ke 0,45 akan memaksa padding/pemotongan yang justru melanggar on-point + band 1000–1200.
- ⚠️ **Plagiarism belum final** — `quality-check.ps1` mengekstrak 8 passage kandidat untuk pemeriksaan web; verifikasi akhir adalah tugas seo-quality-validator (WebSearch). Frasa-frasa tampak orisinal (disambiguasi MDM, langkah tata kelola, atribusi Gartner), risiko rendah, tetapi verdict plagiarisme menunggu validator.
- ℹ️ **IBM disebut tanpa tautan** di FAQ golden record ("Menurut IBM, …"). Disengaja: hanya 2 sitasi eksternal ditautkan (Gartner/CIO + SAP Learning) sesuai gate "1–2"; IBM sebagai atribusi pendukung, bukan tautan ketiga. Tidak perlu diperbaiki.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] Tanpa pembuka klise ("Di era digital / Seiring perkembangan / Tidak dapat dipungkiri") — 0 kecocokan
- [x] Tanpa "Selain itu" pembuka ≥2 paragraf berurutan — 0
- [x] Tanpa "Penting untuk dicatat/dipahami" — 0
- [x] "Dengan demikian" tidak dipakai — 0
- [x] Em-dash (U+2014) = 0 (batas ≤2)
- [x] Panjang paragraf bervariasi — CV 0,355 (gate ≥0,30); paragraf 8–76 kata
- [x] Tidak tiap H2 → 3 bullet — campuran prosa, 2 tabel, 1 numbered list
- [x] Tanpa klaim generik tanpa angka — ≥10 angka spesifik inline
- [x] Tanpa adjektiva hype (canggih/powerful/seamless/terdepan) — 0
- [x] Tanpa service-dump Soltius

### B. Factual & SAP-spec spot-check (vs dossier + product_matrix)
| Claim | Source check | Verdict |
|---|---|---|
| Biaya poor data quality ~US$12,9 jt/thn, "estimasi … sekitar 2021 … indikasi, bukan angka pasti" | dossier flag B (hedge wajib) ✓ | pass |
| Definisi/5 sasaran MDM "menurut Gartner" via CIO.com | dossier core fact + flag C (atribusi sekunder) ✓ | pass |
| SAP MDG: *centrally managed* vs *federated*; core/application data owner; S/4HANA 2023+ | dossier (SAP Learning) ✓ | pass |
| Cloud edition sbg core data owner federasi = "masih berkembang menurut peta jalan SAP", verifikasi SAP Help | dossier flag A (roadmap, JANGAN klaim aktif) ✓ | pass |
| 3 domain inti MDG = business partner, material, finance | dossier flag D (hanya 3 inti, tanpa daftar per-edisi) ✓ | pass |
| Soltius = SAP Platinum Partner via United VARs, Metrodata sejak 1998, "mendampingi/implementasi" | product_matrix + company_profile ✓ (bukan "membuat") | pass |

### C. On-page SEO checklist (seo_playbook §3 + batch override)
- [x] Meta title 50 char (keyword di 22 char pertama) — ≤60 ✓
- [x] Meta description 147 char — band 140–160 ✓
- [x] Slug `master-data-management` (keyword-led, 22 char) — ≤60 ✓
- [x] H1 memuat primary keyword
- [x] H2 konten = 4 (band 3–5); ≥1 question-format (3 di antaranya question-format); ≥1 praktis/terstruktur (tabel + langkah)
- [x] Keyword di 100 kata pertama + paragraf terakhir
- [x] Definition snippet 46 kata (SEKALI; tidak diulang di body/H2/FAQ)
- [x] LSI/semantic ≥8 (SSOT, golden record, data governance, data steward, SAP MDG, business partner, material, finance, data transaksi, data referensi, S/4HANA)
- [x] Internal link = 2 (override batch: 1 hub + 1 cousin) — tanpa link ketiga, tanpa BACA JUGA
- [x] Sitasi eksternal otoritatif = 2 inline (CIO/Gartner + SAP Learning)
- [x] FAQ = 5 Q&A (band 3–5)
- [x] ≥1 list + ≥1 tabel (1 numbered list + 2 tabel)
- [x] Word count = 1.133 (band batch 1000–1200; target 1100)
- [N/A] Image placeholder — override: 0 placeholder (tidak di-flag)

### C2. GEO extractability (seo_playbook §2a)
- [x] Jawaban langsung 40–60 kata tepat setelah tiap H2 utama: 49 / 50 / 43 / 42 kata (poin baru, bukan ulangan snippet)
- [x] Tiap paragraf tubuh = satu poin yang bisa dikutip & diverifikasi
- [x] FAQ parseable untuk FAQPage; freshness ditandai `publish_month: 2026-10` di meta block

### D. Soltius framing discipline (product_matrix + style_guide §11)
- [x] Soltius = implementator/pendamping, BUKAN "membuat SAP"
- [x] Self-mention = 2 (≤3): positioning line di Kesimpulan + soft CTA
- [x] Tanpa superlatif tak terverifikasi ("terbaik/nomor satu")
- [x] Nama/spesifikasi SAP cocok dengan product_matrix/dossier
- [x] Penutup memakai positioning line company_profile (Platinum via United VARs, Metrodata 1998)
- [x] Soft website CTA soltius.co.id = baris terakhir, setelah Kesimpulan, nada konsultatif
- [x] Hub link = anchor inline natural di lead ("solusi manajemen data"), bukan BACA JUGA

### E. Anti-cannibalization spot check
- Closest prior article untuk keyword ini: **none yet** (tidak ada artikel MDM di history)
- Tema terdekat: data-warehouse & BI articles — berbagi hanya istilah "single source of truth" dalam konteks arsitektur penyimpanan/BI, bukan tata kelola master data lintas domain
- Subtopic overlap (Jaccard estimate): < 0,15 (sesuai dedup strategist; angle_hash `sha1:3a3315fa3dbc`)
- Verdict: **distinct angle confirmed**

## The shipping question
Jika artikel ini tayang di soltius.co.id besok dan dibaca konsultan SAP senior + CIO skeptis — angka berlabel sumber, caveat jujur ("kapan belum perlu", hedge roadmap cloud edition), tabel komparasi bersih, framing Soltius yang tidak overselling — WEBARQ Promote akan bangga. **Ya → approve.**
