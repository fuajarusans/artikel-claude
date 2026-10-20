---
brief_id: "cloud-deployment-c01"
editor_run_date: "2026-09-01"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-09 (style_addendum.md overrides applied — band 800–1000 kata via cleaned-prose count tools/count_words.py, FAQ 2–3, internal links TEPAT 2, NO image placeholders, definisi hanya di snippet, maks 2 self-mention Soltius, lead ≤80 & kesimpulan ≤80)"
---

# Editor QC Report — Public vs Private vs Hybrid Cloud: Perbedaan dan Cara Memilih

## Recommendation
**approve**

Artikel padat, akurat, dan on-point sesuai batch conditional 2026-09. Struktur spoke terjaga: komparasi head-to-head tiga model deployment + kerangka memilih 5 kriteria + jembatan RISE, tanpa mendefinisikan ulang "apa itu cloud computing"/5 karakteristik NIST/SaaS-PaaS-IaaS (milik pillar & artikel lain). Semua angka diverifikasi terhadap dossier: NIST SP 800-145 (September 2011, 4 model deployment, 3 model layanan), Flexera 2026 (73% hybrid, ~3 poin YoY, ~14% multicloud-only), UU No. 27 Tahun 2022, Public Edition upgrade dua kali setahun, kredensial Soltius (1998 / Best RISE & Best Cloud Partner 2021). Flags dossier dipatuhi (tanpa harga S/4HANA, tanpa angka cadence Private Edition, tanpa denda 2% UU PDP, tanpa metadata NIST "April 2012"). Framing Soltius benar (implementator/pendamping, bukan pembuat/penyedia cloud); tepat 2 self-mention; tepat 2 internal link; 2 sitasi eksternal; 0 image placeholder; em-dash 0. Hanya satu perbaikan in-place yang diperlukan (FAQ Q3 di bawah band 30 kata) — sudah difix ke 46 kata. Aman untuk pass ke validator dan commit.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tanpa pembuka klise (lead buka pada pain vendor melempar tiga istilah); ritme paragraf bervariasi (1–4 kalimat: "Dua hal sering salah kaprah.", "Dua catatan jujur." sebagai opener pendek); em-dash 0; tanpa adjektiva hype bertumpuk. |
| Factual & SAP-spec accuracy | 10 | Seluruh angka & fakta cocok dengan dossier; semua flag citation dipatuhi; nihil fabrikasi harga/edisi/SLA. |
| On-page SEO compliance (batch band) | 9 | meta_title 47, meta_description 151, slug 50; keyword `hybrid cloud` di H1/lead(100 kata pertama)/Kesimpulan/CTA; word count 905 (band 800–1000, target 900). |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata poin-baru setelah tiap H2 (dimensi / 5 kriteria / konsekuensi sistem inti); tabel head-to-head extractable baris-per-baris; FAQ FAQPage-ready. |
| Soltius framing discipline | 10 | Implementator/pendamping SAP ("mendampingi perpindahan sistem inti ke cloud"); 1 positioning line + 1 soft CTA (2 self-mention); tanpa superlatif; kredensial award + heritage = satu framing (sesuai preseden batch). |
| Internal linking | 9 | Tepat 2 (hub up-link pillar `cloud-computing-pengertian-jenis-layanan` di lead + cousin `migrasi-erp-ke-cloud` di H2 #3), inline natural, tanpa "BACA JUGA". Lihat flag CMS pillar-live. |
| FAQ quality | 9 | 3 Q&A dari PAA; tiap jawaban kini 46/50/46 kata (band 30–60) & memuat angka/fakta (73%+14%, UU 27/2022, NIST SP 800-145). |

## What I fixed (changelog)
- **FAQ Q3 diperluas 28 → 46 kata** agar masuk band 30–60 (addendum §2). Ditambahkan klausa akurat yang memperkuat koreksi miskonsepsi tanpa menambah fakta baru di luar dossier: "…bukan lokasi fisik servernya; private yang dihosting di data center penyedia pun tetap tergolong private selama dipakai eksklusif oleh satu organisasi." (Kata "boleh" → "boleh berada" untuk kelancaran.) Konsisten dengan Claim 2 dossier (single-tenant = kriteria pembeda, bukan lokasi).
- **Frontmatter `word_count` diperbarui 887 → 905** agar cocok dengan hitungan cleaned-prose final (`tools/count_words.py`). `target_word_count: 900` dipertahankan.

## What I flagged (open issues)
- ⚠️ **Hub up-link bergantung pillar sudah live di CMS.** Hub `blog/cloud-computing-pengertian-jenis-layanan` (pillar `cloud-computing-c01`, batch 2026-08) diasumsikan tayang sebelum artikel ini. *Rekomendasi saat publish*: bila pillar belum live, sementara pakai fallback `blog/private-cloud-dan-public-cloud-di-berbagai-sektor-industri` (anchor tetap "jenis layanan cloud" boleh disesuaikan), lalu ganti ke pillar begitu tayang — tetap **TEPAT 2 tautan** (jangan tambah). Tidak memblokir approve; keputusan swap di tahap publish. Tidak diverifikasi ulang live pada run editor ini (tanpa akses fetch URL-status).
- ⚠️ **Angka adopsi Flexera bergantung satu sumber.** 73% hybrid (+~3 poin YoY) & ~14% multicloud-only bersumber tunggal Flexera 2026 (sesuai instruksi dossier: pilih satu, jangan menumpuk/hitung turunan). Bila validator/publish ingin memperkuat, verifikasi angka final dari rilis resmi Flexera; jangan tambah sumber kedua atau derivasi. Tidak memblokir.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] Tanpa "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" — lead buka pada pain konkret (vendor melempar public/private/hybrid tanpa pembeda).
- [x] Tanpa "Selain itu" pembuka ≥2 paragraf beruntun (0 kemunculan).
- [x] Tanpa "Penting untuk dicatat/dipahami" (0).
- [x] "Dengan demikian" tidak dipakai (0).
- [x] Em-dash = **0** (≤2). Pemisah dipakai koma/titik/titik koma/tanda kurung.
- [x] Panjang paragraf bervariasi (1–4 kalimat) — opener pendek "Dua hal sering salah kaprah." & "Dua catatan jujur." memecah ritme.
- [x] Tidak setiap H2 → list 3-butir (H2 #1 = prosa+tabel; H2 #2 = prosa+bullet; H2 #3 = prosa murni).
- [x] Tanpa klaim generik tanpa angka (≥8 angka spesifik inline).
- [x] Tanpa adjektiva hype bertumpuk (canggih/powerful/seamless/terdepan).
- [x] Tanpa service-dump Soltius (nama Soltius hanya di Kesimpulan).

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| NIST SP 800-145 terbit September 2011; 4 model deployment + 3 model layanan | dossier Claim 1 ✓ (bukan metadata PDF "April 2012") | pass |
| Private cloud boleh on/off-premise & dioperasikan pihak ketiga; pembeda = single-tenant | dossier Claim 2 (NIST verbatim) ✓ | pass |
| Hybrid dipakai 73% organisasi (+~3 poin YoY); ~14% murni multicloud | dossier Claim 5 — Flexera 2026 ✓ | pass |
| Hybrid ≠ multicloud (public+private terhubung vs beberapa public cloud) | dossier Claim 6 ✓ | pass |
| RISE → S/4HANA Cloud: Private Edition single-tenant (kontrol jadwal upgrade di pelanggan) / Public Edition multi-tenant SaaS (upgrade otomatis 2×/tahun) | dossier Claim 7 + product_matrix row 5 ✓; cadence Private TANPA angka tahun (flag dipatuhi) | pass |
| UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi sebagai 1 pendorong private/hybrid | dossier Claim 8 ✓; tanpa bedah pasal/denda 2% (flag dipatuhi) | pass |
- Tidak ada harga/diskon S/4HANA Cloud (flag ✓). Tidak ada angka cadence Private Edition (flag ✓). Soltius = implementator, bukan pembuat/penyedia cloud (framing ✓). Boundary dedup dipatuhi: tanpa definisi ulang cloud computing / 5 karakteristik NIST / bedah SaaS-PaaS-IaaS.

### C. On-page SEO checklist (batch overrides)
- [x] Meta title **47** char (≤60); keyword "Hybrid Cloud" di 30 char pertama.
- [x] Meta description **151** char (140–160, sweet spot 150–160); keyword `hybrid cloud` + value props (tabel head-to-head, lima kriteria, RISE with SAP).
- [x] Slug **50** char (≤60), kebab-case, memuat "hybrid cloud".
- [x] H1 memuat keyword (Public vs Private vs Hybrid Cloud).
- [x] H2 konten body = **3** (band batch 3–4) + `## FAQ` + `## Kesimpulan`. ≥1 question-format: H2 #2 & #3 ✓. ≥1 praktis/tabel: H2 #1 ✓.
- [x] Keyword `hybrid cloud`/`public private hybrid cloud` di 100 kata pertama (lead) + penutup + CTA.
- [x] Definition snippet "Ringkasnya:" **43 kata** (40–60), blockquote setelah lead, di ~150 kata pertama.
- [x] LSI/entity ≥8: public/private/hybrid cloud, community cloud, model deployment, NIST SP 800-145, multi-tenant/single-tenant, multicloud, kedaulatan data, UU No. 27 Tahun 2022, SAP S/4HANA Cloud (Private/Public Edition), RISE with SAP, cloud bursting, CapEx/OpEx.
- [x] Internal link **= 2** (band batch) — hub `cloud-computing-pengertian-jenis-layanan` (anchor "jenis layanan cloud", lead) + cousin `migrasi-erp-ke-cloud` (anchor "migrasi ERP ke cloud", H2 #3). Inline natural, tanpa "BACA JUGA".
- [x] Sitasi eksternal otoritatif **= 2** — NIST SP 800-145 (H2 #1) + Flexera 2026 (H2 #2).
- [x] FAQ **= 3** (band batch 2–3); jawaban 46/50/46 kata + 1 angka/fakta tiap jawaban.
- [x] ≥1 tabel (head-to-head 7 dimensi) + ≥1 list (aturan pilih ber-lead-in bold). Angka spesifik di ≥8 tempat.
- [x] Word count **905** (band batch 800–1000; target 900) via `tools/count_words.py` cleaned-prose. Hitungan mentah whitespace over-count pipa tabel/URL — TIDAK dipakai untuk memvonis >1000.
- [N/A] Image validation — batch tanpa image placeholder; 0 `{IMAGE_NN}` (by design).

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata segera setelah TIAP H2, berisi poin BARU milik H2 (bukan parafrase snippet): H2#1 (46 kata) = berbeda pada banyak dimensi sekaligus; H2#2 (43 kata) = per beban kerja + 5 kriteria; H2#3 (44 kata) = konsekuensi sistem inti + pemetaan RISE ke dua edisi.
- [x] Satu paragraf = satu poin quotable & verifiable; tabel head-to-head extractable baris-per-baris untuk AI Overview.
- [x] FAQ parseable untuk FAQPage schema; `publish_month` mutakhir (2026-09) di meta block.
- [x] **Cek repetisi definisi:** definisi tiga model hanya di snippet "Ringkasnya:". Jawaban langsung tiap H2 memakai sudut baru masing-masing; koreksi private≠on-premise + community cloud + hybrid-vs-multicloud = info baru (bukan pengulangan snippet). Tidak ada H2 definitional "Apa Itu…" yang menyatakan ulang snippet.

### D. Soltius framing discipline
- [x] Soltius = implementator/pendamping SAP ("mendampingi perpindahan sistem inti ke cloud lewat RISE with SAP dan layanan Migration"), **bukan** builds/owns/penyedia cloud.
- [x] Self-mention = **2** (1 positioning line Kesimpulan + 1 soft CTA "kunjungi soltius.co.id" baris terakhir). Body tanpa nama Soltius. (Domain soltius.co.id pada 2 tautan internal = internal link, bukan brand self-mention.)
- [x] Tanpa superlatif ("terbaik/nomor satu"). Kredensial = Best RISE & Best Cloud Partner (2021) + heritage sejak 1998 dihitung sebagai satu framing kredibilitas (konsisten preseden batch: award/partner + "sejak 1998" = satu kredensial, tidak ditumpuk; tidak menambah SAP Platinum via United VARs).
- [x] Nama produk SAP penuh saat pertama (SAP S/4HANA Cloud, RISE with SAP); Private/Public Edition dipetakan ke sumbu deployment saja — tidak dibedah tuntas (boundary dossier).
- [x] Kesimpulan memakai positioning line; CTA konsultatif ("Untuk mendiskusikan model deployment…"), bukan "beli sekarang".
- [x] Hub sebagai anchor inline natural ("jenis layanan cloud") di lead, bukan callout "BACA JUGA".

### E. Anti-cannibalization spot check
- Closest prior: **`cloud-computing-c01`** (2026-08) — pillar kluster cloud (977 kata) yang meringkas deployment dalam 1 H2/tabel 6-baris. Artikel ini = **spoke** yang membedah head-to-head penuh + kerangka 5 kriteria + latency/skalabilitas-sebagai-kriteria + multicloud vs hybrid + private-off-premise + pemetaan RISE Private/Public Edition — semua di luar cakupan pillar.
- Subtopic overlap (Jaccard, dari brief): **≈ 0.24** (< 0.4). Pembanding lain: `cloud-erp-vs-on-premise-c01` ≈ 0.16; `saas-paas-iaas-c01` ≈ 0.12 (MODEL LAYANAN, sumbu berbeda); `sap-hyperscaler-c01` ≈ 0.10. angle_hash `sha1:a8375c33f746` tidak berbenturan.
- Verdict: **distinct angle confirmed** (pasangan pillar–spoke, bukan duplikat).
