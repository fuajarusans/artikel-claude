---
brief_id: "demand-forecasting-c01"
editor_run_date: "2026-10-08"
batch: "conditional-2026-10"
recommendation: "approve"
overall_score: 9
word_count: 1197
---

# Editor QC Report — Demand Forecasting: Metode dan Pentingnya bagi Perencanaan Bisnis

## Recommendation
**approve**

Draft masuk sudah sangat patuh pada `style_addendum.md` 2026-10; seluruh gate batch terukur lolos dan fact-check terhadap dossier bersih. Lima caveat faktual dossier dipatuhi persis: (1) URL SAP Learning 404 di brief (`mastering-sap-ibp-for-demand/managing-demand-sensing`) TIDAK dipakai — diganti URL SAP terverifikasi `discovering-ai-in-sap-integrated-business-planning/...forecasting-algorithms-1`; (2) nama algoritma demand sensing spesifik (gradient boosting/multi-linear regression) TIDAK disebut — ditulis "machine learning / pattern recognition", horizon "empat sampai delapan minggu" (verbatim SAP); (3) McKinsey 20–50% di-DROP demi disiplin tepat 2 sitasi (Gartner + SAP), sesuai arahan "Gartner+SAP sudah cukup"; (4) MAPE bands di-frame "rule of thumb yang lazim... bukan standar mutlak, dan bergeser antar industri"; (5) Gartner 70%/2030 di-frame sebagai prediksi ("meski menyebut adopsi saat ini masih terbatas"). Larangan kanibalisasi dipatuhi: tanpa keempat use case AI SCM (`ai-supply-chain-c01`) dan tanpa 6 poin AI halaman lama Soltius (segmentasi/dynamic pricing/rekomendasi beli); safety stock/ROP hanya 1 frasa "pengguna hilir" tanpa rumus; S&OP 1 klausa. Dua perbaikan polish dilakukan in-place — keduanya pemecahan paragraf untuk ekstraktabilitas GEO + burstiness, BUKAN perubahan angle/fakta/angka: satu paragraf H2-4 sepanjang 80 kata yang menumpuk tiga poin (intro platform + daftar kapabilitas SAP + sitasi) dipecah menjadi dua blok terkutip, dan kalimat MAD/MSE dipromosikan menjadi paragraf pendek berdiri sendiri di H2-3. Word count final 1.197 (cleaned-prose `tools/count_words.py`, band 1000–1200, target 1100; tidak berubah oleh pemecahan paragraf). AI-detector `quality-check.ps1` = 0,04 (pass; ambang revise 0,30, reject 0,50); CV panjang-paragraf 0,321 (> gate 0,30). Anti-AI bersih (em-dash 0, nol pembuka klise, nol "Selain itu"/"Dengan demikian"/"Penting untuk dicatat"). Framing Soltius akurat (didirikan 1998, SAP Platinum via United VARs, "mengimplementasikan dan mendampingi… bukan membuat perangkat lunaknya"). Artikel siap lanjut ke seo-quality-validator. Empat hal terbuka di level user/validator (hitung mentah vs cleaned; pilihan hub/cousin; verifikasi ulang live URL; plagiarism WebSearch final), semuanya non-blocker.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Lead membuka pada pain konkret (overstock yang mengubur modal / stockout saat pelanggan siap beli), bukan klise. Em-dash = 0 (batas ≤2); nol "Selain itu"/"Dengan demikian"/"Penting untuk dicatat". Ritme bervariasi (CV 0,321; paragraf 4–69 kata). AI-detector heuristik 0,04 → pass. Campuran numbered list + tabel + contoh berhitung + prosa → tidak "tiap H2 → 3 bullet". |
| Factual & SAP-spec accuracy | 9 | 5 caveat dossier semuanya dipatuhi (lihat Recommendation + spot-check). Tidak ada spesifikasi/modul/algoritma SAP dikarang; contoh moving average (115 unit) ditandai "contoh, bukan data nyata"; Gartner 70%/2030 sebagai prediksi; MAPE bands sebagai rule of thumb. Positioning Soltius akurat (1998 = tahun berdiri, bukan keanggotaan Metrodata). |
| On-page SEO compliance | 9 | meta_title 53 char (keyword "Demand Forecasting" di depan), meta_description 154 char (band 140–160), slug keyword-led 40 char, H1 memuat keyword, first-100-words + baris terakhir memuat keyword. 4 H2 konten (3 question-format: H2-1/3/4); 1 numbered list (5 langkah) + 1 tabel (taksonomi metode). |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata setelah tiap H2 (47/45/42/54 kata, poin baru bukan ulangan snippet); satu poin terkutip per paragraf (diperkuat oleh dua pemecahan paragraf run ini); tabel metode extractable baris-per-baris; FAQ 4 Q&A siap FAQPage; definition snippet 47 kata; freshness `publish_month: 2026-10`. |
| Soltius framing discipline | 9 | 2 self-mention (positioning line Kesimpulan + soft CTA baris terakhir); dibingkai "mengimplementasikan dan mendampingi… bukan membuat perangkat lunaknya"; tanpa superlatif. SAP IBP/SAP IBP for Demand di body = teaching vendor-neutral, bukan self-mention. CTA anchor "SAP IBP (SAP Integrated Business Planning) → SAP IBP for Demand" hadir. |
| Internal linking | 9 | Tepat 2 (hub "manajemen rantai pasok (supply chain management)" inline di H2-1 + cousin "SAP Integrated Business Planning (SAP IBP)" inline di H2-4); tanpa link ketiga; tanpa "BACA JUGA"; halaman AI lama Soltius tidak ditautkan (default cousin IBP dipertahankan, sesuai brief). |
| FAQ quality | 9 | 4 Q&A (band 3–5); jawaban 49/42/43/49 kata (band 30–60); tiap jawaban memuat fakta/angka (kualitatif vs kuantitatif + time series/kausal; forecasting input vs planning keputusan; MAPE <10/10–20/20–50/>50 + MAD/MSE; demand sensing 4–8 minggu); dari PAA; tidak mengulang definisi snippet kata per kata. |

## What I fixed (changelog)
- **Pemecahan paragraf H2-4 (ekstraktabilitas GEO)**: satu paragraf 80 kata yang menumpuk tiga poin berbeda (metode dijalankan di platform perencanaan + intro SAP IBP; lalu daftar kapabilitas SAP IBP for Demand + sitasi SAP Learning) dipecah menjadi DUA paragraf terfokus (39 kata intro platform; 41 kata kapabilitas+sitasi). Tidak ada kata, fakta, angka, tautan, atau sitasi yang dibuang — hanya satu baris kosong disisipkan. Alasan: AI engine mengutip per-paragraf; paragraf 80 kata yang membawa tiga klaim menurunkan citation-readiness. Ini perbaikan GEO (§2a "satu poin quotable per paragraf"), bukan perubahan angle/struktur.
- **Promosi kalimat MAD/MSE menjadi paragraf pendek (H2-3)**: kalimat "MAD (*Mean Absolute Deviation*) dan MSE (*Mean Squared Error*) adalah dua ukuran error alternatif." dipisah dari paragraf MAPE sepanjang 66 kata menjadi paragraf berdiri sendiri (14 kata). Efek ganda: (a) mengembalikan margin burstiness yang sedikit tergerus akibat pemecahan H2-4 (CV 0,339 → 0,302 → 0,321, tetap > gate 0,30); (b) menjadikan "ukuran error alternatif" poin terkutip tersendiri. Tidak ada kata dibuang.
- **Frontmatter `word_count`**: tetap 1.197 (kedua pemecahan paragraf tidak menambah/mengurangi kata; `tools/count_words.py` = 1.197 pada file final).

## What I flagged (open issues)
- ⚠️ **Hitung mentah quality-check.ps1 = 1230 vs cleaned-prose = 1197.** Tokenizer mentah `quality-check.ps1` menghitung sel tabel/markdown/URL secara berbeda. Angka yang MENGIKAT adalah cleaned-prose `tools/count_words.py` = **1.197** (addendum §1 eksplisit: "jangan pakai hitung mentah untuk memvonis >1200"). **Bukan pelanggaran band** — artikel tetap 1000–1200. Catatan: cleaned 1.197 berada 3 kata dari plafon 1200; sengaja TIDAK dipangkas ke ~1100 karena band mengizinkan sampai 1200 dan artikel sudah padat on-point (memangkas substansi akan membuang hedge/angka/fakta bersumber). *Rekomendasi*: validator pakai 1.197, abaikan 1230 mentah (preseden sama di `kaizen-c01`/`buku-besar-c01`).
- ⚠️ **CV paragraf 0,321 < 0,45 ideal** — `quality-check.ps1` menandai `paragraph-low-variance` severity **low** (gate 0,30 terlampaui, margin ~0,02). Wajar untuk explainer B2B padat ber-tabel pada band 1000–1200; menaikkan ke 0,45 memaksa padding yang melanggar on-point. *Rekomendasi*: biarkan (konsisten dengan `kaizen-c01` 0,403 yang disetujui apa adanya).
- ⚠️ **Keputusan user — HUB & COUSIN** (landing kosong di Sheet → dipilih strategist): hub = `/id/blog/apa-itu-supply-chain-management` (anchor "manajemen rantai pasok (supply chain management)", di H2-1); cousin = `/blog/how-sap-ibp-supports-the-sales-operations-planning-s-op-process` (anchor "SAP Integrated Business Planning (SAP IBP)", di H2-4, URL Inggris tanpa `/id/` sesuai brief). Opsi brief: halaman AI lama Soltius boleh menggantikan cousin sebagai down-link sibling — **default cousin IBP dipertahankan** (memperkuat CTA anchor di titik paling relevan; total tetap 2). *Rekomendasi*: bila user mengganti, sesuaikan tautan sebelum publikasi; total tetap 2.
- ⚠️ **Verifikasi live URL belum di-refetch run ini.** Brief + dossier mengonfirmasi kedua URL internal live 2026-10-08 (hub tidak membahas forecasting → nol kanibalisasi; cousin = halaman S&OP SAP IBP). Eksternal Gartner PR (2025-09-16) + SAP Learning `discovering-ai...forecasting-algorithms-1` terverifikasi loads di dossier (URL brief `mastering-sap-ibp-for-demand/...` 404 sudah dihindari). *Rekomendasi*: validator boleh refetch 4 URL sebagai sanity check; bukan blocker.
- ⚠️ **McKinsey 20–50% sengaja DI-DROP.** Dossier menandainya terverifikasi primer tetapi "forecasting errors" umum (bukan MAPE), berusia beberapa tahun, dan halaman lain menyebut 30–50%. Sesuai disiplin "tepat 2 sitasi wajib (Gartner + SAP)", figur ini tidak dipakai agar tidak menambah sitasi ke-3 yang perlu hedge berat. *Rekomendasi*: biarkan di-drop; bila user ingin sitasi ke-3, tambahkan dengan atribusi "menurut McKinsey, AI dapat memangkas kesalahan peramalan 20–50%" (BUKAN "MAPE 20–50%").
- ⚠️ **Plagiarism belum final** — `quality-check.ps1` mengekstrak 8 passage kandidat untuk web-lookup; verdict akhir = tugas seo-quality-validator (WebSearch). Passage berisiko rendah: bands MAPE (fakta publik Lewis 1982), kalimat demand sensing, dan definisi MAD/MSE adalah pernyataan faktual standar; frasa inti orisinal (overstock "mengubur modal"/stockout "mematikan penjualan"; "akurasi tinggi pun tak bernilai bila angkanya tidak dipakai"). Risiko rendah.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] Tanpa pembuka klise ("Di era digital / Seiring perkembangan / Tidak dapat dipungkiri") — 0 kecocokan (lead = narasi pabrik consumer goods konkret)
- [x] Tanpa "Selain itu" pembuka ≥2 paragraf berurutan — 0
- [x] Tanpa "Penting untuk dicatat/dipahami" — 0
- [x] "Dengan demikian" tidak dipakai — 0
- [x] Em-dash (U+2014) = 0 (batas ≤2); en-dash (U+2013) = 6, semuanya rentang numerik (10–20%, 20–50%) atau label tabel ("Kuantitatif – time series/kausal") — bukan AI-tell gaya
- [x] Panjang paragraf bervariasi — CV 0,321 (gate ≥0,30); paragraf 4–69 kata
- [x] Tidak tiap H2 → 3 bullet — numbered list (5 langkah pemilihan) + tabel (taksonomi metode) + contoh berhitung + prosa
- [x] Tanpa klaim generik tanpa angka — 36 token angka inline (lihat E-E-A-T)
- [x] Tanpa adjektiva hype bertumpuk (canggih/powerful/seamless/terdepan) — "secanggih apa pun" = konsesif/meredam hype, bukan brochure
- [x] Tanpa service-dump Soltius

### B. Factual & SAP-spec spot-check (vs dossier + product_matrix)
| Claim | Source check | Verdict |
|---|---|---|
| Gartner: **70%** organisasi besar adopsi AI-based supply chain forecasting pada **2030** (PR 16 Sep 2025), di-frame prediksi "adopsi saat ini masih terbatas" | dossier core fact (judul+tanggal+angka verbatim) + flag framing prediksi ✓ | pass |
| SAP IBP for Demand pakai ML untuk klasifikasi pola, deteksi/koreksi outlier, pilih algoritma best-fit, + demand sensing *pattern recognition* **4–8 minggu** | dossier (SAP Learning verbatim); nama algoritma spesifik (gradient boosting) sengaja TIDAK disebut per flag ✓ | pass |
| MAPE bands **<10 / 10–20 / 20–50 / >50** = "rule of thumb lazim, bukan standar mutlak, bergeser antar industri" | dossier flag (Lewis 1982, rule of thumb) → di-frame tepat ✓ | pass |
| Contoh moving average 4 periode (100,120,110,130) → **115 unit**, ditandai "contoh, bukan data nyata" | dossier (ilustrasi, tandai) ✓ | pass |
| Soltius = SAP Platinum via United VARs, **didirikan 1998**, "mengimplementasikan dan mendampingi… bukan membuat" | company_profile + product_matrix (implements-not-builds) ✓ | pass |

### C. On-page SEO checklist (seo_playbook §3 + batch override)
- [x] Meta title 53 char (keyword "Demand Forecasting" di karakter awal) — ≤60 ✓
- [x] Meta description 154 char — band 140–160 ✓
- [x] Slug `demand-forecasting-metode-dan-pentingnya` (keyword-led, 40 char) — ≤60 ✓
- [x] H1 memuat primary keyword "Demand Forecasting" (judul GIVEN user, row 14 tab Oktober)
- [x] Keyword "demand forecasting" di 100 kata pertama (lead) + baris terakhir (soft CTA)
- [x] H2 konten = 4 (band 3–5); 3 question-format (H2-1/3/4); ≥1 praktis/terstruktur (H2-2 tabel taksonomi + H2-3 numbered 5 langkah + contoh berhitung + boks MAPE)
- [x] Definition snippet 47 kata (SEKALI; tidak diulang di body/H2/FAQ — H2-1 ke "pentingnya", H2-2 ke taksonomi metode)
- [x] LSI/semantic ≥8 (peramalan permintaan, metode kualitatif, metode kuantitatif, time series/deret waktu, moving average, exponential smoothing, metode kausal/regresi, MAPE/MAD/MSE, demand planning, demand sensing, machine learning, SAP IBP for Demand, Heizer & Render, point-of-sale)
- [x] Internal link = 2 (override batch: 1 hub di H2-1 + 1 cousin di H2-4, inline) — tanpa link ketiga, tanpa BACA JUGA
- [x] Sitasi eksternal otoritatif = 2 inline (Gartner di H2-4 + SAP Learning di H2-4); McKinsey sengaja di-drop (lihat flag)
- [x] FAQ = 4 Q&A (band 3–5)
- [x] ≥1 list + ≥1 tabel (1 numbered list 5 langkah + 1 tabel taksonomi 3 baris)
- [x] Word count = 1.197 (band batch 1000–1200; target 1100; cleaned-prose deterministik — lihat flag soal 1230 mentah)
- [N/A] Image placeholder — override batch: 0 placeholder (grep {IMAGE = 0; tidak di-flag)

### C2. GEO extractability (seo_playbook §2a)
- [x] Jawaban langsung 40–60 kata tepat setelah tiap H2 utama: 47 / 45 / 42 / 54 kata (poin baru, bukan ulangan snippet)
- [x] Tiap paragraf tubuh = satu poin yang bisa dikutip & diverifikasi (diperkuat run ini: paragraf 80 kata H2-4 dipecah dua; MAD/MSE jadi paragraf tersendiri; tabel metode row-by-row; langkah bernomor quotable)
- [x] FAQ parseable untuk FAQPage (4 Q&A, jawaban 42–49 kata); freshness ditandai `publish_month: 2026-10` di meta block

### D. Soltius framing discipline (product_matrix + style_guide §11)
- [x] Soltius = implementator/pendamping ("mengimplementasikan dan mendampingi… bukan membuat perangkat lunaknya"), BUKAN pembuat SAP
- [x] Self-mention = 2 (≤2 batch): positioning line di Kesimpulan + soft CTA baris terakhir (URL soltius.co.id di tautan internal tidak dihitung sebagai self-mention)
- [x] Tanpa superlatif tak terverifikasi ("terbaik/nomor satu")
- [x] Nama/spesifikasi SAP cocok dengan product_matrix/dossier (SAP IBP, SAP IBP for Demand; demand sensing *pattern recognition* 4–8 minggu); tanpa modul/algoritma dikarang; Joule/SAP Business AI & modul IBP lain tidak dibawa
- [x] Penutup memakai positioning line company_profile (SAP Platinum via United VARs, berpengalaman sejak 1998) — akurat; "berpengalaman sejak 1998" TIDAK keliru menempel ke keanggotaan Metrodata
- [x] Soft website CTA soltius.co.id = baris terakhir, setelah Kesimpulan, nada konsultatif ("Untuk mendiskusikan… kunjungi soltius.co.id"); CTA anchor SAP IBP/SAP IBP for Demand hadir
- [x] Hub link = anchor inline natural di H2-1 ("manajemen rantai pasok (supply chain management)"), bukan BACA JUGA; cousin inline di H2-4 ("SAP Integrated Business Planning (SAP IBP)")

### E. Anti-cannibalization spot check (kritis — dua halaman Soltius menyasar "demand forecasting")
- [x] TANPA keempat use case AI SCM (optimasi rute, deteksi risiko, optimasi persediaan sebagai use case) — milik `ai-supply-chain-c01`; AI dibatasi pada perannya DALAM peramalan
- [x] TANPA 6 poin AI halaman lama Soltius (segmentasi pelanggan, dynamic pricing, rekomendasi pembelian) — grep = 0; H2-4 fokus demand sensing + best-fit ML + SAP IBP
- [x] Rumus safety stock/ROP/EOQ TIDAK diturunkan — hanya 1 frasa "alat persediaan di hilir seperti safety stock dan reorder point" (pengguna hilir), tanpa rumus
- [x] Kerangka 5 strategi SCM/KPI (milik `strategi-scm-c01`) tidak dibawa; S&OP disinggung ≤1 klausa (konteks platform IBP)
- Subtopic overlap (Jaccard estimate per brief): ≈ 0,15 vs `ai-supply-chain-c01`; ≈ 0,12 vs halaman AI lama Soltius (live, non-history); ≈ 0,05–0,06 vs `safety-stock`/`eoq`/`strategi-scm`. angle_hash `sha1:3b30ad48c6d8` tidak bertabrakan dengan riwayat maupun batch conditional 2026-06/07/08/09.
- Verdict: **distinct angle confirmed** (< 0,4). Taksonomi metode (kualitatif/kuantitatif → time series/kausal) + pemilihan + MAPE = wilayah net-new.

## The shipping question
Jika artikel ini tayang di soltius.co.id besok dan dibaca demand planner/ops lead + konsultan SAP senior skeptis — tabel taksonomi metode row-by-row, lima langkah memilih yang bernomor, contoh moving average 115 unit yang jujur ditandai ilustrasi dan diakui "lamban menangkap tren", boks MAPE yang jujur (patokan praktis, bukan standar mutlak), funnel SAP IBP for Demand yang vendor-neutral dengan hedge "AI tidak menyulap data buruk", dan positioning Soltius yang akurat tanpa overselling — WEBARQ Promote akan bangga. **Ya → approve.**
