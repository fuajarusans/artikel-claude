---
brief_id: "markup-vs-margin-c01"
editor_run_date: "2026-09-01"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-09 (style_addendum.md overrides applied — 800–1000 kata band via cleaned-prose count, FAQ 2–3, internal links exactly 2, NO image placeholders, definisi hanya di snippet, maks 2 self-mention Soltius)"
---

# Editor QC Report — Markup vs Margin: Perbedaan dan Cara Menghitung Harga Jual

## Recommendation
**approve**

Artikel padat, akurat, dan on-point sesuai batch conditional 2026-09. Semua angka (contoh inti Rp80.000 → Rp120.000 → margin 33,3%, tiap baris tabel konversi 20/25/50/100/150% → 16,7/20/33,3/50/60%, selisih kesalahan 16,7 poin) diverifikasi ulang secara matematis dan benar. Klaim SAP S/4HANA Retail dibatasi persis pada kutipan terverifikasi SAP Learning tanpa condition type/T-code/versi karangan. Framing Soltius benar (implements/supports, bukan builds), maks 2 self-mention. Hanya dua perbaikan in-place yang diperlukan (meta_description over-length + satu anchor hub yang kaku); keduanya sudah difix. Tidak ada isu yang menuntut rework writer/strategist. Aman untuk pass ke validator dan commit.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tanpa pembuka klise; ritme paragraf bervariasi (1–4 kalimat); em-dash tepat 2; tanpa adjektiva hype yang ditumpuk. |
| Factual & SAP-spec accuracy | 10 | Seluruh angka dihitung ulang benar; kutipan SAP Learning cocok persis; nihil fabrikasi spec. |
| On-page SEO compliance (batch band) | 9 | Meta title 51, meta_description 155 (setelah trim), slug 53; keyword di H1/lead/penutup/CTA; word count 947 (band 800–1000). |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata poin-baru setelah tiap H2; tabel contoh + tabel konversi extractable baris-per-baris; FAQPage-ready. |
| Soltius framing discipline | 10 | Implementator/pendamping SAP; 1 positioning line + 1 CTA (2 self-mention); tanpa superlatif; satu kredensial, tidak menumpuk. |
| Internal linking | 9 | Tepat 2 (hub retail + cousin laporan laba rugi), inline natural, tanpa "BACA JUGA". Cousin memakai fallback (sibling 500) — lihat flag. |
| FAQ quality | 9 | 3 Q&A dari PAA; tiap jawaban 40–50 kata & memuat angka. |

## What I fixed (changelog)
- **Meta description dipangkas 163 → 155 karakter** (di luar band 140–160 → kini di sweet spot 150–160). Baru: "Markup dan margin sama-sama mengukur laba tetapi beda basis hitung. Pahami rumus, contoh, konversi, dan kapan memakai keduanya untuk menetapkan harga jual." Keyword tetap di depan; value props (rumus, contoh, konversi, kapan pakai) dipertahankan.
- **H2 #4 — anchor hub dirapikan** dari "…marginnya dapat diaudit, sebagaimana dituntut oleh [solusi retail] berskala besar" (kolokasi kaku "dituntut oleh solusi") menjadi "…marginnya dapat diaudit, seperti yang diandalkan bisnis ritel berskala besar melalui [solusi retail]." Anchor "solusi retail" kini terbaca alami sebagai enabler, bukan pihak yang "menuntut". (+3 kata; total body 944 → 947, tetap di band.)
- **Frontmatter `word_count` diperbarui** 944 → 947 agar cocok dengan hitungan cleaned-prose final (`tools/count_words.py`).

## What I flagged (open issues)
- ⚠️ **Cousin memakai URL FALLBACK, bukan sibling.** Terpasang `blog/macam-macam-laporan-keuangan-dan-pengertiannya` (terverifikasi 200 OK di run riset) karena sibling `blog/laporan-laba-rugi-komponen-jenis-cara-membaca` mengembalikan **HTTP 500** saat riset (2026-08-31). *Rekomendasi saat publish*: bila sibling sudah live (200 OK), boleh ganti URL cousin ke sibling itu — anchor tetap "laporan laba rugi", tetap **TEPAT 2 tautan** (jangan pasang keduanya). Tidak memblokir approve. Tidak diverifikasi ulang live pada run editor ini (tanpa akses fetch URL-status); keputusan swap diserahkan ke tahap publish.
- ⚠️ **Akronim SKU tidak di-expand.** "ribuan SKU" muncul tanpa gloss (*stock keeping unit*). SKU tidak masuk daftar entity wajib-expand di brief (yang wajib: HPP ✓, SAP S/4HANA Retail ✓, cost-plus pricing ✓ — semua sudah di-expand/diitalik). Dibiarkan karena istilah ritel baku & di luar entity list; catatan minor, tidak memblokir.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] Tanpa "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" — lead buka pada pain konkret (staf pricing salah anggap margin 50%).
- [x] Tanpa "Selain itu" pembuka ≥2 paragraf beruntun (0 kemunculan).
- [x] Tanpa "Penting untuk dicatat/dipahami".
- [x] "Dengan demikian" tidak dipakai/tidak berlebihan (0).
- [x] Em-dash = **2** (≤2). Keduanya fungsional (pemisah rumus↔contoh di bullet konversi, baris "Margin = Markup ÷ (1+Markup)" & "Markup = Margin ÷ (1−Margin)").
- [x] Panjang paragraf bervariasi (1–4 kalimat) — bukan blok simetris.
- [x] Tidak setiap H2 → list 3-butir (campur prosa + tabel + bullet ber-lead-in).
- [x] Tanpa klaim generik tanpa angka (≥4 angka spesifik inline terpenuhi).
- [x] Tanpa adjektiva hype bertumpuk (canggih/powerful/seamless/terdepan). "sistem ritel modern" = deskriptif, tidak ditumpuk.
- [x] Tanpa service-dump Soltius.

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| HPP Rp80.000 + markup 50% → harga jual Rp120.000; margin 40.000/120.000 = 33,3% | dihitung ulang ✓ (dossier ✓) | pass |
| Tabel konversi: 20→16,7 · 25→20 · 50→33,3 · 100→50 · 150→60% | dihitung ulang Margin=Markup÷(1+Markup), tiap baris ✓ | pass |
| Selisih kesalahan menyamakan = 16,7 poin (50 − 33,3) | dihitung ulang ✓ | pass |
| SAP S/4HANA Retail: harga jual = harga beli + markup ditentukan; margin kotor & bersih dihitung otomatis | SAP Learning "Executing Retail Pricing" (dossier, kutipan cocok persis) ✓ | pass |
| Markup atas biaya vs margin atas harga jual; markup% ≠ margin% untuk transaksi sama | Shopify "Markup vs. Margin" (dossier) ✓ | pass |
- Tidak ada condition type / T-code / versi SAP / benchmark pasar karangan. Contoh berlabel *ilustrasi*. Boundary dedup dipatuhi (HPP hanya *input*; struktur laporan laba rugi tidak diulang).

### C. On-page SEO checklist (batch overrides)
- [x] Meta title **51** char (≤60); keyword "Markup" di 30 char pertama.
- [x] Meta description **155** char (140–160, sweet spot 150–160) — *setelah fix dari 163*.
- [x] Slug **53** char (≤60), kebab-case, keyword-led.
- [x] H1 memuat keyword (markup, margin).
- [x] H2 body = **4** (band 3–4) + `## FAQ` + `## Kesimpulan` struktural. ≥1 question-format: H2 #2 & #3 ✓. ≥1 praktis/tabel: H2 #1 & #2 ✓.
- [x] Keyword `markup dan margin` di 100 kata pertama (lead) + penutup + CTA.
- [x] Definition snippet "Ringkasnya:" 55 kata, di ~150 kata pertama.
- [x] LSI/entity ≥8: markup, margin, gross margin, HPP, harga jual, cost-plus pricing, konversi markup↔margin, penetapan harga, SAP S/4HANA Retail, laba kotor.
- [x] Internal link **= 2** (band batch) — hub `retail-produk` (anchor "solusi retail") + cousin `macam-macam-laporan-keuangan` (anchor "laporan laba rugi").
- [x] Sitasi eksternal otoritatif **= 2** — Shopify (H2 #1) + SAP Learning (H2 #4).
- [x] FAQ **= 3** (band batch 2–3); tiap jawaban 40–50 kata + 1 angka.
- [x] ≥1 tabel (tabel contoh + tabel konversi) + list. Angka spesifik di ≥4 tempat.
- [x] Word count **947** (band batch 800–1000; target 900) via `tools/count_words.py` cleaned-prose.
- [N/A] Image validation — batch tanpa image placeholder; 0 `{IMAGE_NN}` (by design).

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata segera setelah TIAP H2, berisi poin BARU milik H2 (bukan parafrase snippet): H2#1 = laba rupiah identik/penyebut beda; H2#2 = mekanisme penyebut lebih besar + konversi; H2#3 = harga ke depan vs profitabilitas ke belakang; H2#4 = biaya kesalahan 16,7 poin.
- [x] Satu paragraf = satu poin quotable & verifiable; rumus & tabel extractable baris-per-baris.
- [x] FAQ parseable untuk FAQPage schema; `publish_month`/frontmatter mutakhir (2026-09).
- [x] **Cek repetisi definisi:** definisi lengkap hanya di snippet "Ringkasnya:". Jawaban langsung H2 memakai sudut baru masing-masing — tidak menyatakan ulang definisi. Tidak ada H2 definitional "Apa Itu Markup/Margin?".

### D. Soltius framing discipline
- [x] Soltius = implementator/pendamping SAP ("mengimplementasikan serta mendampingi solusi ritel SAP"), **bukan** builds/owns.
- [x] Self-mention = **2** (1 positioning line Kesimpulan + 1 soft CTA baris terakhir). Body tanpa nama Soltius. (2 tautan internal ke domain soltius.co.id = internal link, bukan brand self-mention.)
- [x] Tanpa superlatif ("terbaik/nomor satu"); satu kredensial (SAP Platinum via United VARs, sejak 1998) — tidak ditumpuk.
- [x] Nama produk SAP (SAP S/4HANA Retail) + spec sesuai dossier/SAP Learning.
- [x] Kesimpulan memakai positioning line company_profile; CTA konsultatif (bukan "beli sekarang").
- [x] Hub sebagai anchor inline natural ("solusi retail"), bukan callout "BACA JUGA".

### E. Anti-cannibalization spot check
- Closest prior: `laporan-laba-rugi-c01` (2026-08). Sudut berbeda tegas: artikel ini = keputusan penetapan harga per produk (markup→harga; margin→laba atas harga), bukan struktur/pembacaan laporan laba rugi.
- Subtopic overlap (Jaccard, dari brief): **≈ 0.06** (< 0.4). Vs `cara-menghitung-hpp-c01` ≈ 0.05 (HPP hanya input di sini). angle_hash tidak berbenturan.
- Verdict: **distinct angle confirmed.**
