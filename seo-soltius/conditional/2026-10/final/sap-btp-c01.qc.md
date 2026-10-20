---
brief_id: "sap-btp-c01"
editor_run_date: "2026-10-08"
batch: "conditional-2026-10"
recommendation: "approve"
overall_score: 9
word_count: 1022
---

# Editor QC Report — SAP BTP untuk Pemula: Fungsi dan Use Case Business Technology Platform

## Recommendation
**approve**

Draft masuk sudah sangat patuh pada style_addendum 2026-10, dan fact-check terhadap dossier bersih: kelima caveat dossier dipatuhi persis (pilar 4-vs-5 di-hedge, hyperscaler "antara lain", 27.000+ pelanggan diatribusi Oktober 2024, angka produktivitas GigaOm SAP Build tidak dipakai, trial/free tier dari SAP Help). Dua perbaikan wajib dilakukan in-place. Pertama, `meta_description` draft 166 karakter melewati band 140–160 (gagal on-page §3) dan dipangkas ke 159 karakter tanpa kehilangan keyword "SAP BTP adalah" di depan maupun supporting "Business Technology Platform". Kedua, dan yang paling penting, draft memicu flag anti-AI **high-severity**: paragraph word-count CV = 0,286, di bawah lantai 0,30 yang diminta style_addendum §5. Penyebabnya blok FAQ berisi lima jawaban yang nyaris seragam (~43 kata) plus kluster paragraf tubuh yang terlalu rata di 40–48 kata. Saya menaikkan variasi ritme tanpa padding: memecah dua kalimat-punch menjadi paragraf berdiri sendiri dan memvariasikan panjang lima jawaban FAQ (33–46 kata). Hasilnya CV naik ke 0,426 (jauh di atas gate, mendekati target ideal 0,45) dan skor AI-detector `quality-check.ps1` turun dari 0,15 ke 0,04 (pass). Word count cleaned-prose (tools/count_words.py) = 1.022, tetap dalam band 1000–1200. Tidak ada perubahan angle atau struktur. Artikel siap lanjut ke seo-quality-validator. Catatan: dua keputusan user (hub & cousin) masih terbuka dan diteruskan via orchestrator; keduanya tidak memengaruhi isi, tetapi bila user mengubah pilihan, dua tautan internal perlu disesuaikan sebelum publikasi.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tanpa pembuka klise, 0 em-dash, 0 "Selain itu"/"Dengan demikian"/"Penting untuk dicatat", ritme bervariasi (CV paragraf 0,426; paragraf 5–73 kata). AI-detector heuristik 0,04 → pass. |
| Factual & SAP-spec accuracy | 9 | 5 flag dossier semuanya di-hedge/diatribusi tepat; tidak ada spesifikasi/nama produk SAP yang dikarang; angka GigaOm SAP Build dihindari sesuai rekomendasi dossier. |
| On-page SEO compliance | 9 | meta_title 49 char (keyword depan), meta_description 159 char (setelah dipangkas dari 166), slug 36 char keyword-led, H1 + 100 kata pertama + penutup memuat keyword, 3 H2 konten + FAQ, 1 tabel. |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata setelah tiap H2 (43/47/45 kata), membawa poin baru, bukan ulangan snippet; satu poin terkutip per paragraf; tabel 4 pilar ekstraktabel baris-per-baris; FAQ 5 Q&A siap FAQPage; snippet 48 kata. |
| Soltius framing discipline | 9 | 2 self-mention (positioning line Kesimpulan + soft CTA baris terakhir); "mengimplementasikan/mengintegrasikan di atas SAP BTP", bukan "membuat"; tanpa superlatif. |
| Internal linking | 9 | Tepat 2 (hub low-code/no-code inline di lead + cousin SAP Clean Core di H2-2 use case ekstensi); tanpa link ketiga; tanpa "BACA JUGA"; CTA soltius.co.id = teks biasa, bukan tautan. |
| FAQ quality | 9 | 5 Q&A; jawaban 33–46 kata; tiap jawaban memuat 1 fakta/angka; diambil dari PAA brief; tidak mengulang snippet kata-per-kata. |

## What I fixed (changelog)
- **meta_description 166 → 159 char** (patuh band 140–160, on-page §3). "…menganalisis aplikasi bisnis. Pahami 4 pilar Business Technology Platform & use case-nya." → "…menganalisis aplikasi. Pahami 4 pilar Business Technology Platform & use case-nya." Keyword "SAP BTP adalah" tetap di depan; supporting "Business Technology Platform" dipertahankan utuh.
- **Pecah 2 kalimat-punch menjadi paragraf berdiri sendiri** untuk menaikkan burstiness: "Jumlah pilar bukan angka baku." (dari awal paragraf hedge pilar) dan "BTP adalah sarana, bukan tujuan." (dari akhir paragraf "kapan belum perlu"). Keduanya adalah punch retoris yang wajar, bukan telegram; tidak ada kata yang dibuang, hanya pemisahan.
- **Variasikan panjang 5 jawaban FAQ** dari kluster ~43 kata yang seragam menjadi 33/46/39/43/33 kata. Dua pemangkasan redundan: Q1 membuang atribusi "Wikipedia dan" (cukup TechTarget) agar tidak menumpuk sumber sekunder; Q5 membuang kalimat model komersial yang sudah dinyatakan di H2-3 (pay-as-you-go/kredit prabayar/langganan) agar tidak duplikatif. Tidak ada fakta/angka yang hilang.
- **Efek terukur**: paragraph CV 0,286 → 0,426 (lantai gate 0,30 kini terlampaui aman); AI-detector score 0,15 → 0,04 (pass).
- **Frontmatter `word_count` 1039 → 1022** (hasil `tools/count_words.py` setelah pemangkasan meta/FAQ).

## What I flagged (open issues)
- ⚠️ **Keputusan user — HUB** (user eksplisit minta ditanyai): hub internal dipakai halaman low-code/no-code (`/id/blog/low-code-and-no-code-platforms`), bukan clean core, karena kolom landing page di Google Sheet (tab Oktober, row 11) kosong → hub ditentukan strategist. Halaman low-code **tidak** menyebut "SAP BTP" eksplisit tetapi adalah hub cluster Digital Platform + membahas API/integrasi (match note sheet), jadi melengkapi, bukan menduplikasi. *Rekomendasi*: teruskan ke user; bila diganti, sesuaikan tautan di lead sebelum publikasi.
- ⚠️ **Keputusan user — COUSIN / halaman setengah jadi**: cousin dipakai SAP Clean Core (`/blog/sap-clean-core-the-complete-guide`, URL English tanpa `/id/` sesuai product_matrix §6). Saat di-scrape, FAQ halaman itu masih memuat placeholder draft "[NEEDS VALID DATA...]". *Rekomendasi*: curator/CMS memastikan halaman cousin sudah final SEBELUM artikel ini publikasi agar tautan tidak mengarah ke halaman setengah jadi. Isi artikel ini tidak terpengaruh; total internal link tetap 2.
- ⚠️ **CV paragraf 0,426 < 0,45 ideal** — `quality-check.ps1` menandai `paragraph-low-variance` severity **low** (bukan blocker; gate 0,30 terlampaui jauh). Wajar untuk explainer B2B padat ber-FAQ. *Rekomendasi*: biarkan; menaikkan ke 0,45 akan memaksa padding yang melanggar prinsip on-point + band 1000–1200.
- ⚠️ **Plagiarism belum final** — `quality-check.ps1` mengekstrak 8 passage kandidat untuk pemeriksaan web; verifikasi akhir adalah tugas seo-quality-validator (WebSearch). Frasa tampak orisinal (peta pilar→masalah, pola use case, disambiguasi BTP vs S/4HANA vs SAP Build), risiko rendah, tetapi verdict plagiarisme menunggu validator.
- ℹ️ **TechTarget disebut tanpa tautan** di FAQ Q1 ("TechTarget pun mengklasifikasikannya…"). Disengaja: hanya 2 sitasi eksternal ditautkan (SAP official + SAP Learning) sesuai gate "1–2"; TechTarget sebagai atribusi pendukung, bukan tautan ketiga. Tidak perlu diperbaiki.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] Tanpa pembuka klise ("Di era digital / Seiring perkembangan / Tidak dapat dipungkiri") — 0 kecocokan
- [x] Tanpa "Selain itu" pembuka ≥2 paragraf berurutan — 0
- [x] Tanpa "Penting untuk dicatat/dipahami" — 0
- [x] "Dengan demikian" tidak dipakai — 0
- [x] Em-dash (U+2014) = 0 (batas ≤2)
- [x] Panjang paragraf bervariasi — **CV 0,426 (gate ≥0,30; sebelum edit 0,286 = FAIL, sudah diperbaiki)**; paragraf 5–73 kata
- [x] Tidak tiap H2 → 3 bullet — campuran prosa, 1 tabel, 1 bullet list
- [x] Tanpa klaim generik tanpa angka — ≥8 angka spesifik inline
- [x] Tanpa adjektiva hype (canggih/powerful/seamless/terdepan) — 0
- [x] Tanpa service-dump Soltius

### B. Factual & SAP-spec spot-check (vs dossier + product_matrix)
| Claim | Source check | Verdict |
|---|---|---|
| 4 pilar + hedge "Jumlah pilar bukan angka baku… Angka empat di sini adalah kerangka, bukan patokan mutlak" (sebagian materi pisahkan Platform Foundation → 5) | dossier flag pilar 4-vs-5 (hedge wajib) ✓ | pass |
| Nama lama SAP Cloud Platform, dipensiunkan 18 Januari 2021; sebelum 2017 SAP HANA Cloud Platform | dossier core fact (Wikipedia, tanggal spesifik) ✓ | pass |
| Hyperscaler "antara lain AWS, Microsoft Azure, dan Google Cloud" (tidak tertutup) | dossier flag hyperscaler (hedge "antara lain") ✓ | pass |
| ">27.000 pelanggan" diatribusi "menurut pernyataan SAP (Oktober 2024)… point-in-time" | dossier flag angka marketing point-in-time ✓ | pass |
| Trial 90 hari tanpa data pembayaran; akun inaktif 30 hari berisiko dihapus; free tier tanpa batas waktu (butuh data pembayaran untuk verifikasi); 3 model berbayar | dossier (SAP Help Portal) ✓ | pass |
| Side-by-side extensibility: ekstensi di BTP terhubung ke S/4HANA via API resmi, menjaga core aman di-upgrade (prinsip clean core) | dossier (news.sap.com + SAP Learning) ✓ | pass |
| Produk per pilar: SAP Build, SAP Integration Suite, SAP HANA Cloud/Datasphere/SAP Analytics Cloud, SAP Business AI/Joule | dossier (SAP + SAP Learning, penamaan terkini) ✓ | pass |
| Soltius = SAP Platinum Partner via United VARs, sejak 1998; "mengimplementasikan/mengintegrasikan di atas SAP BTP" | product_matrix + company_profile ✓ (bukan "membuat") | pass |

### C. On-page SEO checklist (seo_playbook §3 + batch override)
- [x] Meta title 49 char (keyword di 14 char pertama) — ≤60 ✓
- [x] Meta description 159 char — band 140–160 ✓ (dipangkas dari 166)
- [x] Slug `sap-btp-adalah-fungsi-pilar-use-case` (keyword-led, 36 char) — ≤60 ✓
- [x] H1 memuat entitas keyword "SAP BTP" + "Business Technology Platform"
- [x] H2 konten = 3 (band 3–5); ≥1 question-format (#2 & #3); ≥1 praktis/terstruktur (H2-1 + tabel 4 pilar)
- [x] Keyword "SAP BTP adalah" di 100 kata pertama (lead) + "SAP BTP" di paragraf terakhir
- [x] Definition snippet 48 kata (SEKALI; tidak diulang di body/H2/FAQ)
- [x] LSI/semantic ≥8 (business technology platform, PaaS, SAP Cloud Platform, SAP Build, SAP Integration Suite, SAP HANA Cloud, SAP Datasphere, SAP Analytics Cloud, SAP Business AI/Joule, side-by-side extensibility, S/4HANA, API, free tier, trial)
- [x] Internal link = 2 (override batch: 1 hub low-code + 1 cousin clean core) — tanpa link ketiga, tanpa BACA JUGA
- [x] Sitasi eksternal otoritatif = 2 inline (sap.com/technology-platform + learning.sap.com), keduanya di H2-1
- [x] FAQ = 5 Q&A (band 3–5)
- [x] ≥1 list + ≥1 tabel (1 bullet list use case + 1 tabel 4 pilar)
- [x] Word count = 1.022 cleaned-prose (band batch 1000–1200; target 1100)
- [N/A] Image placeholder — override: 0 placeholder (tidak di-flag)

### C2. GEO extractability (seo_playbook §2a)
- [x] Jawaban langsung 40–60 kata tepat setelah tiap H2 utama: 43 / 47 / 45 kata (poin baru per H2, bukan ulangan snippet)
- [x] Tiap paragraf tubuh = satu poin yang bisa dikutip & diverifikasi
- [x] Tabel 4 pilar ekstraktabel baris-per-baris untuk AI Overview
- [x] FAQ parseable untuk FAQPage; freshness ditandai `publish_month: 2026-10` di meta block

### D. Soltius framing discipline (product_matrix + style_guide §11)
- [x] Soltius = implementator/pendamping di atas SAP BTP, BUKAN "membuat/memiliki BTP"
- [x] Self-mention = 2 (≤2 addendum §6): positioning line Kesimpulan + soft CTA baris terakhir; tanpa aside Soltius di tengah body
- [x] Tanpa superlatif tak terverifikasi ("terbaik/nomor satu")
- [x] Nama/spesifikasi SAP cocok dengan product_matrix/dossier
- [x] Penutup memakai positioning line (SAP Platinum Partner via United VARs sejak 1998, Digital Platform)
- [x] Soft website CTA soltius.co.id = baris terakhir, setelah Kesimpulan, nada konsultatif (bukan "beli sekarang")
- [x] Hub link = anchor inline natural di lead ("platform low-code dan no-code"), bukan BACA JUGA

### E. Anti-cannibalization spot check
- Closest prior article untuk keyword ini: **`side-by-side-extensibility-sap-btp-clean-core`** (history, clean core) — hanya memakai satu irisan BTP (ekstensi side-by-side), bukan overview platform
- Subtopic overlap (Jaccard estimate per strategist): ≈ **0,12** vs side-by-side clean core; 0,10 vs `sap-build-apps-c01`; 0,08 vs `low-code-platform-02`; 0,07 vs `saas-paas-iaas-c01` — semua < 0,4
- angle_hash `sha1:e57bdd58544d` (baru); role = OVERVIEW/pemula 4-pilar
- Verdict: **distinct angle confirmed** — semua pembanding memakai satu irisan BTP untuk cluster lain; tidak ada overview 4-pilar untuk pemula

## The shipping question
Jika artikel ini tayang di soltius.co.id besok dan dibaca konsultan SAP senior + CIO skeptis — peta pilar→produk→masalah yang ekstraktabel, angka berlabel sumber dan tahun, hedge jujur (jumlah pilar bergantung versi materi, "BTP tanpa use case = langganan menganggur"), serta framing Soltius sebagai implementator di atas platform (bukan pembuat BTP) — WEBARQ Promote akan bangga. **Ya → approve.**
