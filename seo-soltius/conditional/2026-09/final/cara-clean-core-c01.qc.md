---
brief_id: "cara-clean-core-c01"
editor_run_date: "2026-09-01"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-09 (style_addendum.md overrides applied — 800–1000 kata via cleaned-prose count tools/count_words.py, FAQ 2–3, internal links exactly 2, NO image placeholders (N/A), definisi hanya di snippet, maks 2 self-mention Soltius)"
---

# Editor QC Report — Cara Menerapkan SAP Clean Core: Langkah Praktis untuk Migrasi

## Recommendation
**approve**

Artikel on-point, akurat, dan patuh penuh pada batch overrides 2026-09. Ini HOW-TO payung yang benar-benar berbeda dari sibling deep-dive: menyusun lima langkah (fit-to-standard → audit → tetapkan target → pilih ekstensi → tata kelola) sebagai satu urutan yang dijalankan bersama migrasi S/4HANA, dengan tabel tahapan quotable dan nama tool SAP resmi. Semua angka & spesifikasi SAP diverifikasi ulang terhadap dossier (Claim 1–11): model levels A–D (Agustus 2025, menggantikan tiga-tier), tiga tool audit resmi, ECC mainstream 31 Desember 2027 / extended 2030 @ surcharge 2 poin persen, Public Edition clean core *by design* vs Private lebih fleksibel. Seluruh flag researcher dihormati: "40–60%" (bukan 60% absolut); durasi ~3–4 minggu & 6–18 bulan **diomit** (tak ada sumber SAP resmi); empat kategori dilabeli "keputusan praktis" bukan output app; klaim penghematan AMS 25–35% tidak ada. Framing Soltius benar (implements/mengeksekusi, bukan builds), maks 2 self-mention. Satu kelemahan editorial nyata — ketiga jawaban FAQ semula mengulang kalimat body nyaris verbatim (tiga tool, empat kategori/40–60%, public vs private) — sudah diperbaiki in-place dengan menulis ulang ketiganya agar berbeda fraseologi tanpa mengubah fakta. Tidak ada isu yang menuntut rework writer/strategist. Aman ke validator.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tanpa pembuka klise; lead buka pada pain konkret (paham konsep tapi bingung urutan + puluhan objek Z + tenggat ECC); ritme paragraf bervariasi (1–4 kalimat, ada paragraf 1 kalimat); em-dash **0** (≤2); tanpa adjektiva hype; tanpa service-dump. |
| Factual & SAP-spec accuracy | 10 | Levels A–D, nama+fungsi tool, ECC 2027/2030 @ 2 poin persen, Public/Private semuanya cocok dossier Claim 1–11; durasi berisiko diomit; 40–60% di-hedge; nol fabrikasi. |
| On-page SEO compliance (batch band) | 9 | Meta title 55, meta_description 160 (puncak sweet-spot 150–160), slug 54; keyword di H1/lead/kesimpulan/CTA; word count **991** (band 800–1000). |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata poin-baru setelah tiap H2; tabel tahapan + list levels A–D extractable baris-per-baris; FAQ kini terdiferensiasi & FAQPage-ready; definisi hanya di snippet. |
| Soltius framing discipline | 10 | Implementator/pendamping SAP; 1 positioning line + 1 soft CTA (2 self-mention); satu kredensial (SAP Platinum via United VARs, sejak 1998); tanpa superlatif. |
| Internal linking | 10 | **Tepat 2** — hub `sap-clean-core-the-complete-guide` (lead) + cousin `migrasi-erp-ke-cloud` (H2 #1), inline natural, tanpa "BACA JUGA". |
| FAQ quality | 9 | 3 Q&A dari PAA; tiap jawaban 44–45 kata & memuat 1 fakta/angka; ditulis ulang editor agar tidak menduplikasi body verbatim. |

## What I fixed (changelog)
- **FAQ #1 (kustomisasi harus dihapus?) ditulis ulang** untuk menghapus pengulangan nyaris-verbatim daftar "empat kategori" milik H2 #2. Fakta wajib (40–60%, di-hedge sebagai "temuan industri") dipertahankan; fokus digeser ke "hentikan yang mati, pindahkan yang sah keluar dari inti" tanpa me-list ulang keempat kategori. (42 → 45 kata.)
- **FAQ #2 (tool apa) ditulis ulang** agar tidak menyalin kalimat tiga-tool H2 #2. Verba divariasikan ("menilai kesiapan konversi", "memilah", "memvalidasi" — vs body "memetakan dampak simplifikasi", "memisahkan", "memeriksa"); fakta "tiga alat resmi berurutan" tetap. (44 → 45 kata.)
- **FAQ #3 (wajib untuk semua deployment?) ditulis ulang** agar berbeda dari H2 #4 par.2; ditambah nuansa bersumber dari dossier Claim 10 ("update otomatis", "classic extensibility masih tersedia"); *by design* di-italik. Fakta "Public Edition = clean core by design" tetap. (44 → 44 kata.)
- **Metafora Inggris tak-glos "Runway-nya menua" → "Waktu yang tersisa kian menyempit."** (style_guide §3: istilah Inggris di-glos/diitalik pada pemakaian pertama; "runway" metaforis tanpa glos berisiko tak terbaca oleh audiens SAP ID). Ritme paragraf pendek tetap terjaga.
- **Frontmatter `word_count` diperbarui 984 → 991** agar cocok hitungan cleaned-prose final (`tools/count_words.py`) setelah rewrite FAQ.

## What I flagged (open issues)
- ⚠️ **Meta description = 160 karakter** — persis di puncak sweet-spot 150–160 (dan batas atas band 140–160), jadi **compliant**. Dibiarkan apa adanya untuk mempertahankan keyword-first + "S/4HANA" + "BTP" + empat value prop (audit custom code, extensibility in-app vs side-by-side, tetapkan target, tata kelola). Catatan publish: bila rendering SERP lebar, kata terakhir ("kelola") berpotensi terpotong; boleh dipangkas opsional ke ~155 (mis. buang "S/4HANA") tanpa memblokir approve.
- ⚠️ **FAQ secara inheren tetap memperkuat fakta body** (tiga tool, public vs private) — wajar untuk HOW-TO padat ~900 kata yang FAQ-nya menarik dari PAA yang sama dengan H2. Duplikasi verbatim sudah dihilangkan; penguatan semantik dipertahankan (menguntungkan ekstraksi FAQPage). Tidak memblokir.
- ℹ️ **URL internal tidak di-fetch ulang run ini** (tanpa akses live-fetch). Hub `sap-clean-core-the-complete-guide` + cousin `migrasi-erp-ke-cloud` diverifikasi live saat riset (2026-08-31). Validator/publish sebaiknya konfirmasi 200 OK sebelum commit.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] Tanpa "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" — lead buka pada pain konkret (0 kemunculan cliché).
- [x] Tanpa "Selain itu" pembuka ≥2 paragraf beruntun (0).
- [x] Tanpa "Penting untuk dicatat/dipahami/diingat" (0).
- [x] "Dengan demikian" / "Sebagai kesimpulan" tidak dipakai (0); Kesimpulan buka dengan callback ke urutan langkah, bukan "Sebagai kesimpulan".
- [x] Em-dash = **0** (≤2). Pemisah memakai koma & titik dua.
- [x] Panjang paragraf bervariasi (1–4 kalimat; ada paragraf 1 kalimat "Waktu yang tersisa kian menyempit.") — bukan blok simetris.
- [x] Tidak setiap H2 → list 3-butir: H2 #1 tabel, #2 prosa, #3 prosa+bullet levels A–D, #4 prosa.
- [x] Tanpa klaim generik tanpa angka (≥8 angka spesifik inline).
- [x] Tanpa adjektiva hype bertumpuk (canggih/powerful/seamless/terdepan).
- [x] Tanpa service-dump Soltius (satu anchor di Kesimpulan).

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Model levels A–D (Agustus 2025) menggantikan tiga-tier lama | dossier Claim 1 + SAP News Center (2025-08) ✓ | pass |
| Level A (released API, on-stack ABAP Cloud/side-by-side BTP) … Level D (bukan clean core, risiko tertinggi, blok via ATC) | dossier Claim 2–3 ✓ (definisi cocok) | pass |
| Tiga tool audit: SAP Readiness Check → Custom Code Migration app (used/unused dari data pemakaian, deletion transport) → ABAP Test Cockpit (ATC) | dossier Claim 5–7 + help.sap.com Custom Code Migration Guide ✓ | pass |
| ~40–60% custom code legacy tak terpakai (di-hedge "temuan industri", bukan angka SAP resmi) | dossier Claim 8 + Flags ✓ (bukan 60% absolut) | pass |
| ECC mainstream 31 Des 2027 / extended 2030 @ surcharge 2 poin persen; Public Edition clean core by design vs Private fleksibel | dossier Claim 9–10 ✓ | pass |
- Empat kategori (dihentikan/rewrite BTP/migrate ABAP Cloud/retain) disajikan sebagai **"kategori keputusan praktis"** — sesuai Flag (bukan label output resmi app). Durasi ~3–4 minggu & 6–18 bulan **diomit** (Flag: tak ada sumber SAP resmi). Klaim penghematan AMS 25–35% **tidak ada** (Flag: dilarang). Boundary dedup dipatuhi: tanpa tabel Keep/Eliminate/Rebuild (`-02`), tanpa kerangka 5-dimensi (`-03`), tanpa deep-dive SAP Build/Integration Suite (`-04`), governance 1 kalimat (monthly 2026-07).

### C. On-page SEO checklist (batch overrides)
- [x] Meta title **55** char (≤60); keyword "Cara Menerapkan SAP Clean Core" di 30 char pertama.
- [x] Meta description **160** char (140–160; puncak sweet-spot 150–160) — lihat flag.
- [x] Slug **54** char (≤60), kebab-case, keyword-led.
- [x] H1 memuat keyword ("Cara Menerapkan SAP Clean Core").
- [x] H2 body = **4** (band 3–4) + `## FAQ` + `## Kesimpulan` struktural. Question-format: #1, #3, #4 (3) ✓. Praktis/terstruktur: #1 tabel tahapan + #2 langkah audit ✓.
- [x] Primary keyword "cara menerapkan clean core" di lead (100 kata pertama) + Kesimpulan + CTA.
- [x] Definition snippet "Ringkasnya:" **51** kata, tepat setelah lead (~150 kata pertama).
- [x] LSI/entity ≥8: SAP Clean Core, fit-to-standard, custom code, SAP Readiness Check, SAP Custom Code Migration app, ABAP Test Cockpit (ATC), in-app/key-user extensibility, side-by-side extensibility, SAP BTP, ABAP Cloud, released API, levels A–D, S/4HANA Cloud Public/Private, SAP ECC, deletion transport (≥15).
- [x] Internal link **= 2** (band batch) — hub (lead) + cousin (H2 #1).
- [x] Sitasi eksternal otoritatif **= 2** inline — SAP News Center A–D (H2 #3) + SAP Custom Code Migration Guide (H2 #2).
- [x] FAQ **= 3** (band batch 2–3); tiap jawaban 44–45 kata + 1 fakta/angka.
- [x] ≥1 tabel (tahapan H2 #1) + ≥1 list (levels A–D H2 #3). Angka spesifik di ≥8 tempat (5 langkah, 40–60%, 4 kategori, 4 level A–D, Agustus 2025, 31 Des 2027, 2 poin persen, 2030).
- [x] Word count **991** (band batch 800–1000; target 900) via cleaned-prose `tools/count_words.py`.
- [N/A] Validasi image — batch tanpa image placeholder; **0** `{IMAGE_NN}` (by design; skip per addendum §7).

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata poin-BARU setelah tiap H2: H2 #1 = urutan 5 langkah paralel migrasi + timing cutover/go-live (45 kata); H2 #2 = 3 tool + 40–60% + deletion transport; H2 #3 = aturan in-app vs side-by-side + levels A–D; H2 #4 = ambang bertahap + Public vs Private.
- [x] Satu paragraf = satu poin quotable & verifiable; tiap baris tabel & tiap level A–D extractable.
- [x] FAQ parseable FAQPage; frontmatter `publish_month` 2026-09 mutakhir (model A–D baru Agustus 2025 → freshness relevan).
- [x] **Cek repetisi definisi:** definisi ("SAP Clean Core adalah prinsip menjaga inti…") **hanya** di snippet "Ringkasnya:". Tidak ada H2 definitional "Apa itu clean core". Jawaban langsung H2 memakai sudut baru masing-masing. Overlap ringan snippet↔jawaban H2 #1 (daftar langkah aplikasi) bersifat strategis (snippet = bait "apa itu"; H2 #1 = bait "langkah" + timing + tabel) — bukan pengulangan definisi.

### D. Soltius framing discipline
- [x] Soltius = implementator/pendamping ("mengeksekusi migrasi S/4HANA dan menerapkan prinsip clean core"), **bukan** builds/owns.
- [x] Self-mention = **2** (1 positioning line Kesimpulan + 1 soft CTA baris terakhir). Body tanpa nama Soltius (suara praktisi "proyek yang tersendat hampir selalu tersendat di audit yang ditunda" — tanpa brand). 2 tautan ke domain soltius.co.id = internal link, bukan brand self-mention.
- [x] Tanpa superlatif ("terbaik/nomor satu"); satu kredensial (SAP Platinum via United VARs, sejak 1998) — tidak ditumpuk.
- [x] Nama produk SAP + spec sesuai dossier/product_matrix (SAP BTP, ABAP Cloud, S/4HANA, AMS).
- [x] Kesimpulan memakai positioning line company_profile; CTA konsultatif ("mendiskusikan… kunjungi soltius.co.id", bukan "beli sekarang").
- [x] Hub sebagai anchor inline natural ("panduan lengkap SAP Clean Core") di lead, bukan callout "BACA JUGA".

### E. Anti-cannibalization spot check
- Closest prior (klaster `sap-clean-core`): `remediasi-custom-code-sap-clean-core` (2026-06).
- Subtopic overlap (Jaccard, dari brief): **≈ 0.29** (< 0.4); vs `side-by-side-extensibility` ≈ 0.18; vs `maturity-assessment` ≈ 0.14. angle_hash `sha1:8eff1aae04fc` tidak berbenturan.
- Verdict: **distinct angle confirmed** — HOW-TO payung (orkestrasi 5 langkah berurutan untuk konteks migrasi) vs sibling yang masing-masing deep-dive satu workstream. Boundary ditegakkan (remediasi = 1 langkah; extensibility = aturan + levels A–D; scorecard = output; governance = 1 kalimat).

## Shipping question
Jika tayang di soltius.co.id besok dan dibaca konsultan SAP senior + CIO skeptis: urutan langkah jernih, tool resmi bernama benar, angka jujur (durasi diomit alih-alih dikarang, % di-hedge), tanpa oversell — WEBARQ Promote pantas membanggakannya. **approve.**
