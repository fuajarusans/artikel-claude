---
brief_id: "sap-build-apps-c01"
editor_run_date: "2026-09-01"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-09 (style_addendum.md overrides applied — band 800–1000 kata via cleaned-prose count tools/count_words.py, FAQ 2–3, internal links TEPAT 2, NO image placeholders, definisi hanya di snippet, maks 2 self-mention Soltius, lead ≤80 & kesimpulan ≤80, primary keyword di penutup/CTA)"
---

# Editor QC Report — SAP Build Apps: Membuat Aplikasi Bisnis dengan Pendekatan Low-Code

## Recommendation
**approve**

Artikel padat, akurat, dan jujur soal status produk — persis nilai inti yang diminta brief untuk keyword ini. Semua fakta load-bearing cocok dengan dossier: deprekasi standalone **23 Maret 2026**, akses/SLA/maintenance **hingga akhir kontrak** (tanpa menyebut "aplikasi dimatikan 30 September 2026" — flag dossier dipatuhi), konversi **.mtar → React/SAPUI5** dirumuskan "berbantuan/best-effort/bukan satu klik", BTP→BAIP di-hedge ke **"pertengahan 2026"** (pilihan aman sesuai rekomendasi dossier), akuisisi AppGyver **2021**, dan **GigaOm (Maret 2025) 3x/59%** diatribusi eksplisit + kini di-hyperlink. Boundary dedup terjaga: tidak ada definisi low-code umum, tidak ada bedah menyeluruh BTP/BAIP, tidak ada tur deskriptif suite tanpa lensa keputusan (semua itu milik hub + `low-code-platform-02`). Framing Soltius benar (implementator/pendamping ekstensi di atas SAP Build, bukan pembuat SAP Build/BTP/BAIP); tepat 2 self-mention; tepat 2 internal link; 2 sitasi eksternal; 0 image placeholder; em-dash 0. Definisi muncul sekali (snippet). Satu perbaikan in-place (hyperlink GigaOm). Aman untuk pass ke validator dan commit.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Lead buka pada pain konkret (antrean backlog IT, bukan pembuka klise); ritme paragraf bervariasi 1–4 kalimat (opener pendek "Konteksnya lebih luas." memecah ritme); em-dash 0; tanpa adjektiva hype bertumpuk. |
| Factual & SAP-spec accuracy | 10 | Seluruh angka/tanggal cocok dossier; semua flag citation dipatuhi (30 Sep dilewati, .mtar berhati-hati, GigaOm diatribusi, BAIP di-hedge). Nihil fabrikasi tanggal/nomor KBA/harga/kapabilitas. |
| On-page SEO compliance (batch band) | 9 | meta_title 46, meta_description 160 (band 140–160), slug 47; keyword `sap build apps` di H1/lead(100 kata pertama)/Kesimpulan/CTA; word count 887 (band 800–1000, target 900). |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata poin-baru setelah tiap H2 (alur 6 langkah / tiga kapabilitas & kapan pakai / status deprekasi + path forward); tabel keputusan extractable baris-per-baris; FAQ FAQPage-ready. |
| Soltius framing discipline | 10 | Implementator/pendamping SAP ("mendampingi pemilihan dan pembangunan ekstensi low-code SAP Build di atas BTP sambil menjaga clean core"), bukan builds/owns; 1 positioning line + 1 soft CTA (2 self-mention); tanpa superlatif. |
| Internal linking | 9 | Tepat 2 — hub up-link `low-code-and-no-code-platforms` (anchor "platform low-code dan no-code", lead) + cousin `sap-clean-core-the-complete-guide` (anchor "prinsip clean core", H2 #2 pasca-tabel). Inline natural, tanpa "BACA JUGA". |
| FAQ quality | 9 | 3 Q&A dari PAA; jawaban 47/38/33 kata (band 30–60) & tiap jawaban memuat angka/fakta (23 Mar 2026, akhir kontrak, GigaOm 3x/59%). |

## What I fixed (changelog)
- **FAQ Q3 — GigaOm di-hyperlink** ke `news.sap.com/2025/03/sap-build-gigaom-study-greater-speed-development/`. Sebelumnya angka 3x/59% hanya diatribusi tekstual "GigaOm (Maret 2025)" padahal URL sudah dideklarasikan di `external_citations` frontmatter. Meng-hyperlink menyelaraskan body dengan citation yang dideklarasikan dan menjadikan angka vendor-commissioned itu verifiable (GEO citation-ready), sekaligus membawa sitasi eksternal inline menjadi **2** (band addendum 1–2). Anchor text tidak berubah → word count tetap 887 (cleaned-prose).
- Tidak ada perbaikan lain yang diperlukan: draft writer sudah mematuhi seluruh override batch (band kata, FAQ 2–3, 0 image placeholder, definisi sekali, 2 self-mention, lead/kesimpulan ≤80, keyword di penutup/CTA) dan disiplin sitasi §10.

## What I flagged (open issues)
- ⚠️ **Sensitivitas waktu tinggi.** Seluruh nilai artikel bergantung pada status produk (deprekasi Maret 2026, unified SAP Build, BTP→BAIP). `dateModified`/`publish_month: 2026-09` harus akurat saat publish, dan artikel perlu refresh bila SAP mengubah timeline. Tidak memblokir approve; catatan maintenance untuk CMS/curator.
- ⚠️ **Tanggal BTP→BAIP di-hedge "pertengahan 2026".** Dossier memverifikasi 30 Juni 2026 (confidence high), tetapi sebagian sumber membingkai rename pada level competency/PartnerEdge; writer memilih rumusan lebih longgar sesuai rekomendasi dossier ("bila ragu presisi, 'pertengahan 2026' aman"). Dipertahankan sebagai pilihan editorial yang jujur — bukan cacat. Bila publish ingin presisi, "30 Juni 2026" tetap dossier-verified dan boleh dipakai.
- ⚠️ **KBA 3731153 sengaja tidak dikutip** (isi penuh butuh login; tak bisa diverifikasi). Benar untuk tidak menyebut detail spesifiknya. Tidak ada tindakan.
- ⚠️ **CTA anchor "SAP Build/BTP" tanpa halaman hub khusus.** soltius.co.id belum punya hub "SAP Build"/"BTP"; funnel diarahkan ke hub low-code + guide clean core + CTA konsultatif (sesuai catatan strategist). Total internal link tetap 2. Bila kelak ada halaman SAP Build/BTP, tambahkan tautan silang (catatan untuk curator/CMS).

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] Tanpa "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" — lead buka pada pain konkret (permintaan aplikasi menumpuk di antrean tim IT).
- [x] Tanpa "Selain itu" pembuka ≥2 paragraf beruntun (0 kemunculan).
- [x] Tanpa "Penting untuk dicatat/dipahami" (0).
- [x] "Dengan demikian" tidak dipakai (0).
- [x] Em-dash = **0** (≤2). Pemisah dipakai koma/titik/titik dua/titik koma/tanda kurung.
- [x] Panjang paragraf bervariasi (1–4 kalimat) — opener pendek "Konteksnya lebih luas." memecah ritme H2 #3.
- [x] Tidak setiap H2 → list 3-butir (H2 #1 = prosa + numbered list 6 langkah; H2 #2 = prosa + tabel; H2 #3 = prosa murni bertingkat).
- [x] Tanpa klaim generik tanpa angka (≥9 angka spesifik inline — lihat C).
- [x] Tanpa adjektiva hype bertumpuk (canggih/powerful/seamless/terdepan/revolusioner) — 0.
- [x] Tanpa service-dump Soltius (nama Soltius hanya sekali, di Kesimpulan).

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| SAP Build Apps di-deprecate sebagai produk standalone pada 23 Maret 2026; kapabilitas kini lewat SAP Build | dossier Core fact #1 ✓ (SAP Community + help.sap.com path-forward) | pass |
| Pelanggan existing tetap akses penuh + SLA + maintenance **hingga akhir kontrak** (tanpa "dimatikan 30 Sep 2026") | dossier Core fact #2 + Flag 30-Sep ✓ (dilewati dengan benar) | pass |
| Aplikasi lama tidak auto-migrate; konversi berbantuan .mtar → React/SAPUI5, best-effort, bukan satu klik | dossier Core fact #4 + Flag .mtar ✓ (rumusan hati-hati dipatuhi) | pass |
| AppGyver diakuisisi SAP 2021 | dossier Core fact (AppGyver 2021) ✓ | pass |
| BTP → SAP Business AI Platform (BAIP) "pertengahan 2026", konsolidasi ke AI-first (bukan rename) | dossier Core fact #6 ✓ (hedge "pertengahan 2026" direstui dossier) | pass |
| GigaOm (Maret 2025): SAP Build ~3x lebih cepat, 59% lebih hemat effort vs custom | dossier Core fact (GigaOm) + Flag atribusi ✓ (diatribusi + hyperlink) | pass |
| Tiga kapabilitas SAP Build (app builder / Process Automation / Work Zone) + Build Code | dossier tabel keputusan + product_matrix row 1 ✓ | pass |
- Soltius = implementator/pendamping ekstensi di atas SAP Build (framing ✓ vs blacklist product_matrix). Boundary dedup dipatuhi: tanpa definisi low-code umum, tanpa bedah menyeluruh BTP/BAIP, tanpa tur deskriptif suite tanpa lensa keputusan.

### C. On-page SEO checklist (batch overrides)
- [x] Meta title **46** char (≤60); keyword "SAP Build Apps" di 14 char pertama.
- [x] Meta description **160** char (140–160); keyword `sap build apps` + value props (6 langkah, Process Automation vs Work Zone, status 2026).
- [x] Slug **47** char (≤60), kebab-case, memuat "sap-build-apps".
- [x] H1 memuat keyword ("SAP Build Apps: Membuat Aplikasi Bisnis dengan Pendekatan Low-Code").
- [x] H2 konten body = **3** (band batch 3–4) + `## FAQ` + `## Kesimpulan`. ≥1 question-format: H2 #2 & #3 ✓. ≥1 praktis/terstruktur: H2 #1 (numbered 6 langkah) + H2 #2 (tabel) ✓.
- [x] Keyword `sap build apps` di 100 kata pertama (lead) + penutup (Kesimpulan) + CTA (baris terakhir).
- [x] Definition snippet "Ringkasnya:" **≈44 kata** (40–60), blockquote setelah lead, di ~150 kata pertama.
- [x] LSI/entity ≥8: SAP Build, AppGyver, visual app builder, drag-and-drop, low-code/no-code, SAP Build Process Automation, SAP Build Work Zone, SAP Build Code, SAP Business AI Platform (BAIP), SAP BTP, clean core, side-by-side extensibility, SAP S/4HANA, SuccessFactors, OData, REST API, RPA, shadow IT.
- [x] Internal link **= 2** (band batch) — hub `low-code-and-no-code-platforms` (anchor "platform low-code dan no-code", lead) + cousin `sap-clean-core-the-complete-guide` (anchor "prinsip clean core", H2 #2 pasca-tabel). Inline natural, tanpa "BACA JUGA".
- [x] Sitasi eksternal otoritatif **= 2** (band 1–2) — help.sap.com path-forward (H2 #3, wajib) + news.sap.com GigaOm (FAQ Q3).
- [x] FAQ **= 3** (band batch 2–3); jawaban 47/38/33 kata + 1 angka/fakta tiap jawaban.
- [x] ≥1 tabel (keputusan 3 kapabilitas) + ≥1 list (numbered 6 langkah ber-lead-in bold). Angka spesifik inline ≥9: 23 Maret 2026, 2021, pertengahan 2026, 6 langkah, 2 jalur integrasi (OData/REST), 3 target deploy (web/iOS/Android), 3 kapabilitas, GigaOm 3x, 59%, sejak 1998.
- [x] Word count **887** (band batch 800–1000; target 900) via `tools/count_words.py` cleaned-prose. Hitungan whitespace mentah over-count pipa tabel/URL — TIDAK dipakai untuk memvonis >1000.
- [N/A] Image validation — batch tanpa image placeholder; 0 `{IMAGE_NN}` (by design).

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata segera setelah TIAP H2, berisi poin BARU (bukan parafrase snippet): H2#1 (≈49 kata) = alur 6 langkah yang tak berubah pasca-Maret 2026; H2#2 (≈53 kata) = tiga kapabilitas & pilih berdasar hasil; H2#3 (≈49 kata) = deprekasi 23 Mar 2026 tanpa dampak mendadak + path forward unified SAP Build.
- [x] Satu paragraf = satu poin quotable & verifiable; tabel keputusan extractable baris-per-baris untuk AI Overview.
- [x] FAQ parseable untuk FAQPage schema; `publish_month` mutakhir (2026-09) di meta block.
- [x] **Cek repetisi definisi:** definisi SAP Build Apps hanya di snippet "Ringkasnya:". Jawaban langsung tiap H2 memakai sudut baru masing-masing. H2 #3 menyebut asal-usul AppGyver + akuisisi 2021 = info BARU (sejarah), bukan menyatakan ulang snippet. Tidak ada H2 definitional "Apa Itu…" yang mengulang definisi.

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius = implementator/pendamping SAP ("mendampingi pemilihan dan pembangunan ekstensi low-code SAP Build di atas BTP sambil menjaga clean core"), **bukan** builds/makes/owns SAP Build/BTP/BAIP.
- [x] Self-mention = **2** (1 positioning line Kesimpulan + 1 soft CTA "kunjungi soltius.co.id" baris terakhir). Body tanpa nama Soltius. (Domain soltius.co.id pada 2 tautan internal = internal link, bukan brand self-mention.)
- [x] Tanpa superlatif ("terbaik/nomor satu"). Kredensial = SAP Platinum Partner via United VARs + heritage sejak 1998 sebagai satu framing (tidak menumpuk award).
- [x] Nama produk SAP penuh saat pertama (SAP Build Apps, SAP Build, SAP Build Process Automation, SAP Build Work Zone, SAP Build Code, SAP Business AI Platform (BAIP)); akronim BAIP di-expand sekali.
- [x] Kesimpulan memakai positioning line company_profile.md; CTA konsultatif ("Untuk mendiskusikan cara membangun aplikasi bisnis low-code…"), bukan "beli sekarang".
- [x] Hub sebagai anchor inline natural ("platform low-code dan no-code") di lead, bukan callout "BACA JUGA".

### E. Anti-cannibalization spot check
- Closest prior: **`low-code-platform-02`** (2026-06) — "SAP Build di SAP BTP: Platform Low-Code" — level-suite/deskriptif untuk eksekutif, **ditulis pra-deprekasi Maret 2026**. Artikel ini = level komponen + how-to + status: langkah membangun aplikasi (numbered), keputusan Apps vs Process Automation vs Work Zone (tabel "kapan pakai mana"), dan status akurat 2026 (deprekasi + path forward) yang secara faktual tidak mungkin ada di artikel Juni.
- Subtopic overlap (Jaccard, dari brief): **≈ 0.13–0.20** (< 0.4). Nol irisan dengan conditional 2026-06/07/08. angle_hash `sha1:11a8f5129f5f` baru.
- Verdict: **distinct angle confirmed** — perbedaan kategoris (freshness deprekasi Maret 2026), bukan duplikat.

## Batch-2026-09 overrides applied (ringkasan)
- Band kata **800–1000** (bukan 1.500–1.800) via cleaned-prose `tools/count_words.py` → **887** ✓.
- **FAQ 3** (bukan 5–8) ✓.
- **Internal link TEPAT 2** (bukan 3) ✓.
- **Image placeholder N/A** — 0 `{IMAGE_NN}` by design (skip image validation) ✓.
- **Definisi hanya di snippet** — body/H2 tidak mengulang ✓.
- **Maks 2 self-mention Soltius** ✓; **lead ≤80** (≈67) & **kesimpulan ≤80** (≈59) ✓; **soft CTA soltius.co.id = baris terakhir** ✓; **primary keyword di penutup/CTA** ✓.
- Berlaku penuh: anti-AI §5, EYD, disiplin sitasi §10, framing Soltius §11 — semua pass.
