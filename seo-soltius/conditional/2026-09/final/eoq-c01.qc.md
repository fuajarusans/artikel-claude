---
brief_id: "eoq-c01"
editor_run_date: "2026-09-01"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-09 (style_addendum.md overrides applied — 800–1000 kata band via cleaned-prose count, FAQ 2–3, internal links exactly 2, NO image placeholders, definisi hanya di snippet, maks 2 self-mention Soltius)"
---

# Editor QC Report — Economic Order Quantity (EOQ): Pengertian, Rumus, dan Manfaatnya

## Recommendation
**approve**

Artikel padat, akurat, dan on-point sesuai batch conditional 2026-09. Seluruh aritmetika inti diverifikasi ulang dan benar: EOQ = √(2×5.000×100.000÷1.000) = √1.000.000 = 1.000 unit; 5×/tahun (≈73 hari); dan tiap sel tabel kurva biaya (Q=500→Rp1.250.000; Q=1.000→Rp1.000.000 dengan biaya pesan=simpan=Rp500.000; Q=2.000→Rp1.250.000). Definisi muncul TEPAT SEKALI di snippet "Ringkasnya:"; tiap jawaban langsung H2 membawa poin baru, bukan parafrase. Klaim SAP dibatasi pada *optimum lot-sizing* umum tanpa kode/nama prosedur karangan; asal usul Harris (1913)/Wilson terkonfirmasi dossier. Framing Soltius benar (implements/supports, bukan builds), 2 self-mention. Satu perubahan mengikat yang saya terapkan: swap tautan cousin reorder-point (HTTP 500 diverifikasi live saat run editor ini) ke fallback WMS yang terbukti 200 OK, anchor "manajemen gudang", sesuai instruksi dossier flag 2. Tidak ada isu yang menuntut rework writer/strategist. Aman untuk pass ke validator dan commit.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tanpa pembuka klise; lead buka pada pain konkret ("sekali pesan, berapa banyak?"); ritme paragraf bervariasi (1–5 kalimat); em-dash = 1 (≤2); tanpa adjektiva hype. |
| Factual & SAP-spec accuracy | 10 | Seluruh angka dihitung ulang benar; klaim SAP S/4HANA optimum lot-sizing UMUM (tanpa T-code/nama prosedur); Harris 1913/Wilson sesuai dossier; nihil fabrikasi. |
| On-page SEO compliance (batch band) | 9 | Meta title 49, meta_description 148, slug 41; keyword di H1/lead/penutup/CTA; word count 942 (band 800–1000). |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata poin-baru setelah tiap H2; rumus 1 baris + list bernomor + tabel U-shape extractable baris-per-baris; FAQPage-ready. |
| Soltius framing discipline | 10 | Implementator/pendamping SAP; 1 positioning line + 1 soft CTA (2 self-mention); tanpa superlatif; satu kredensial (United VARs, sejak 1998), diksi divariasikan dari sibling. |
| Internal linking | 9 | Tepat 2 (hub SCM 200 OK + cousin fallback WMS 200 OK), inline natural, tanpa "BACA JUGA". Cousin di-swap dari sibling 500 — lihat flag. |
| FAQ quality | 9 | 3 Q&A dari PAA; tiap jawaban 40–55 kata & memuat fakta/angka. |

## What I fixed (changelog)
- **Swap tautan cousin (mengikat, dossier flag 2).** Sibling `blog/reorder-point-rumus-contoh-perhitungan` diverifikasi **HTTP 500** via cek status URL pada run editor ini (2026-09-01) — masih belum live (batch conditional 2026-08 belum dipublikasikan). Karena aturan "jangan menautkan URL yang belum resolve saat publish", tautan di-swap ke fallback live **`blog/konsep-warehouse-management-system-yang-wajib-anda-tahu`** (diverifikasi **200 OK**), anchor **"manajemen gudang"** — diperbarui di frontmatter `internal_links` DAN di body H2 #3. Tetap **TEPAT 2 tautan**.
- **Reweave kalimat H2 #3 agar anchor fallback alami.** "reorder point" tetap disebut sebagai konsep pelengkap (plain text, tanpa tautan — konten faktual dipertahankan), lalu ditambahkan satu kalimat penutup: "Ketiganya bekerja di dalam [manajemen gudang](…) yang menjaga tingkat stok tetap terkendali." Konteks (EOQ + safety stock + reorder point di dalam manajemen gudang) akurat dan tidak dipaksakan; tanpa em-dash tambahan.
- **Frontmatter `word_count` diperbarui** 930 → 942 agar cocok dengan hitungan cleaned-prose final (`tools/count_words.py`) setelah reweave.

## What I flagged (open issues)
- ⚠️ **Cousin memakai URL FALLBACK, bukan sibling tracker-designated.** Terpasang fallback WMS (`konsep-warehouse-management-system-…`, 200 OK, terbukti live di `lead-time-c01`/`safety-stock-c01`/`reorder-point-c01`/`sku-c01`) karena sibling reorder-point masih 500. *Rekomendasi saat CMS publish*: bila `blog/reorder-point-rumus-contoh-perhitungan` sudah live (200 OK), boleh ganti kembali URL cousin ke sibling itu **dengan anchor "reorder point"** dan reweave balik kalimat H2 #3 — tetap **TEPAT 2 tautan** (jangan pasang keduanya). Tidak memblokir approve; keputusan final diserahkan ke tahap publish.
- ⚠️ **Sitasi SAP Help = atribusi teks, bukan hyperlink.** "(SAP Help Portal)" di H2 #4 diberi atribusi inline, URL terdokumentasi di frontmatter `external_citations` (halaman JS-rendered per dossier — sengaja tidak dijadikan hyperlink body untuk menghindari risiko tautan yang tak ter-render). CFI menjadi 1 hyperlink eksternal aktif di body; memenuhi kuota 1–2 sitasi otoritatif inline. Catatan minor; tidak memblokir.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] Tanpa "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" — lead buka pada pain konkret (keputusan pengadaan berulang yang jarang dihitung).
- [x] Tanpa "Selain itu" pembuka ≥2 paragraf beruntun (0 kemunculan).
- [x] Tanpa "Penting untuk dicatat/dipahami" (0).
- [x] "Dengan demikian" tidak dipakai (0).
- [x] Em-dash = **1** (≤2) — di snippet "Ringkasnya:" (pemisah klausa penutup).
- [x] Panjang paragraf bervariasi (1–5 kalimat) — lead 5 kalimat, jawaban langsung 3–4, baris rumus 1, prosa H2 #4 pendek. Bukan blok simetris.
- [x] Tidak setiap H2 → list 3-butir: H2#1 list bernomor 5 langkah, H2#2 tabel, H2#3 bullet ber-lead-in 4 butir, H2#4 prosa. Format campur.
- [x] Tanpa klaim generik tanpa angka (≥8 angka spesifik inline).
- [x] Tanpa adjektiva hype bertumpuk (canggih/powerful/seamless/terdepan).
- [x] Tanpa service-dump Soltius (hanya 1 positioning line di Kesimpulan).

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| EOQ = √(2×5.000×100.000÷1.000) = √1.000.000 = 1.000 unit/pesan | dihitung ulang ✓ (dossier ✓) | pass |
| 5.000 ÷ 1.000 = 5×/tahun ≈ tiap 73 hari (365÷5) | dihitung ulang ✓ | pass |
| Tabel U: Q=500→total Rp1.250.000; Q=1.000→Rp1.000.000 (pesan=simpan=Rp500.000); Q=2.000→Rp1.250.000 | dihitung ulang tiap sel (6 kolom × 3 baris) ✓ | pass |
| Model diperkenalkan Ford W. Harris (1913), dianalisis R. H. Wilson (*Wilson formula*) | dossier (Erlenkotter, *Operations Research* 1990) ✓ | pass |
| Di SAP S/4HANA, EOQ = prosedur *optimum lot-sizing* yang meminimalkan gabungan biaya pesan + simpan, butuh kedua biaya di data material | dossier (SAP Help Portal, dinyatakan UMUM tanpa kode prosedur) ✓ | pass |
- Tidak ada nama transaksi / kode prosedur SAP (Groff/part-period balancing/least unit cost) / benchmark pasar karangan. Contoh berlabel *ilustrasi*. Boundary dedup dipatuhi: rumus ROP & safety stock TIDAK diturunkan (hanya disinggung sebagai pelengkap); rasio perputaran tidak dibahas. Angka set brief (D 5.000/S Rp100.000/H Rp1.000/EOQ 1.000) distinct dari set cluster.

### C. On-page SEO checklist (batch overrides)
- [x] Meta title **49** char (≤60); keyword "Economic Order Quantity" di 30 char pertama.
- [x] Meta description **148** char (band 140–160).
- [x] Slug **41** char (≤60), kebab-case, keyword-led.
- [x] H1 memuat keyword (Economic Order Quantity / EOQ).
- [x] H2 body = **4** (band 3–4) + `## FAQ` + `## Kesimpulan` struktural. ≥1 question-format: H2 #2 ("Mengapa EOQ Menghasilkan Total Biaya Terendah?") ✓. ≥1 praktis/terstruktur: H2 #1 (rumus + list) & H2 #2 (tabel) ✓. H2 honest/counter-conventional: H2 #3 (asumsi/keterbatasan) ✓.
- [x] Keyword `economic order quantity` di 100 kata pertama (lead) + penutup (Kesimpulan) + CTA.
- [x] Definition snippet "Ringkasnya:" **47 kata** (band 40–60), tepat setelah lead. SATU-SATUNYA definisi.
- [x] LSI/entity ≥8: economic order quantity (EOQ), rumus EOQ √(2DS/H), biaya pemesanan, biaya penyimpanan, permintaan tahunan, total biaya persediaan, reorder point, safety stock, lot sizing, Harris-Wilson, SAP S/4HANA, SAP IBP.
- [x] Internal link **= 2** (band batch) — hub SCM (anchor "supply chain management", 200 OK) + cousin fallback WMS (anchor "manajemen gudang", 200 OK).
- [x] Sitasi eksternal otoritatif **1–2** — Corporate Finance Institute (hyperlink, H2 #1) + SAP Help Portal (atribusi inline, H2 #4).
- [x] FAQ **= 3** (band batch 2–3); tiap jawaban 40–55 kata + memuat fakta/angka.
- [x] ≥1 elemen terstruktur: tabel total biaya (kurva U) + list bernomor + bullet ber-lead-in. Angka spesifik di ≥8 tempat.
- [N/A] Image validation — batch tanpa image placeholder; **0** `{IMAGE_NN}` (by design). Konsep "kurva EOQ" disampaikan via tabel U-shape.
- [x] Word count **942** (band batch 800–1000; target ~900) via `tools/count_words.py` cleaned-prose.

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata segera setelah TIAP H2, berisi poin BARU milik H2 (bukan parafrase snippet): H2#1 = tiga variabel D/S/H + harga & lead time tak masuk rumus + Harris/Wilson; H2#2 = dua biaya berlawanan arah → titik pertemuan = total minimum = manfaat; H2#3 = asumsi jarang benar utuh → EOQ titik acuan bukan mutlak; H2#4 = EOQ dihitung ulang sistem, bukan sekali di spreadsheet.
- [x] Satu paragraf = satu poin quotable & verifiable; rumus + tabel U-shape extractable baris-per-baris.
- [x] FAQ parseable untuk FAQPage schema; `publish_month` frontmatter mutakhir (2026-09). (Catatan: freshness/`dateModified` diimplementasikan CMS; frontmatter konsisten template §7.)
- [x] **Cek repetisi definisi:** definisi EOQ hanya di snippet "Ringkasnya:". Jawaban langsung tiap H2 memakai sudut baru — tidak menyatakan ulang definisi. Tidak ada H2 definitional "Apa Itu EOQ?"; asal usul Harris/Wilson cukup 1 kalimat di H2 #1.

### D. Soltius framing discipline
- [x] Soltius = implementator/pendamping SAP ("mengimplementasikan dan mendampingi perencanaan rantai pasok SAP seperti SAP IBP"), **bukan** builds/owns.
- [x] Self-mention = **2** (1 positioning line Kesimpulan + 1 soft CTA baris terakhir). Body tanpa nama Soltius. (2 tautan internal ke domain soltius.co.id = internal link, bukan brand self-mention.)
- [x] Tanpa superlatif ("terbaik/nomor satu"); satu kredensial (SAP Platinum via United VARs, sejak 1998) — tidak menumpuk; diksi divariasikan dari `reorder-point-c01`/`safety-stock-c01`.
- [x] Nama produk SAP (SAP S/4HANA, SAP Integrated Business Planning / SAP IBP) di-expand pada sebutan pertama; spec sesuai dossier.
- [x] Kesimpulan memakai positioning line company_profile; CTA konsultatif ("mendiskusikan… kunjungi soltius.co.id", bukan "beli sekarang").
- [x] Hub sebagai anchor inline natural ("supply chain management") di paruh awal H2 #1, bukan callout "BACA JUGA".
- [x] Primary keyword `economic order quantity` muncul di CTA/penutup (seo_playbook par.3).

### E. Anti-cannibalization spot check
- Closest prior: `reorder-point-c01` (conditional 2026-08). Sudut berbeda tegas: artikel ini = **berapa** yang dipesan (rumus EOQ √(2DS/H), trade-off biaya berangka, kurva U, asumsi), sedangkan reorder-point = **kapan** memesan. Rumus EOQ dicadangkan eksplisit untuk artikel ini oleh brief reorder-point.
- Subtopic overlap (Jaccard, dari brief): **≈ 0.08** (< 0.4). Vs `safety-stock-c01` ≈ 0.07, `inventory-turnover-c01` ≈ 0.04, `lead-time-c01` ≈ 0.05. Grep "EOQ"/"economic order" di `articles_history/index.json` = **0 match**. angle_hash `sha1:a42e9abb…` tidak berbenturan.
- Verdict: **distinct angle confirmed.**
