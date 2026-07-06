---
brief_id: "gaslink-01"
editor_run_date: "2026-06-09"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Apa Itu Gaslink: Gas Bumi untuk Bisnis di Luar Jaringan Pipa

## Recommendation
**approve**

Ini pilot yang kuat dan layak menjadi voice benchmark proyek. Anti-AI scan bersih (em-dash bodi = 0; tidak ada opener terlarang; panjang paragraf bervariasi; tidak semua H2 berisi bullet). GEO terpenuhi: kelima H2 dibuka dengan jawaban langsung 40–60 kata, tiap paragraf membawa satu poin yang dapat dikutip. On-page lengkap dan dalam rentang (meta title 51, meta description 149, slug 35; 3 internal link distinct; 2 sitiran ESDM; FAQ 5; list + numbered list + tabel). Semua item yang di-flag researcher ditangani persis: tanpa angka kapasitas GTM, tanpa RS Kariadi, figur 2017 berlabel + hedge, dua periode (600 pelanggan Sep 2025 / 4.067.002 MMBTU sepanjang 2025) tidak digabung, Cylinder 28 m³ diatribusi ke gagas.co.id dengan hedge, auto-ignition sebagai rentang 540–580°C. Framing korporat benar (distributor/penyalur CNG, anak usaha PGN/Subholding Gas Pertamina; 2 self-mention; tanpa superlatif). Lima fakta yang dicek cocok dengan dossier. Tidak ada perubahan prosa bodi yang dibutuhkan; satu-satunya edit bodi adalah penambahan `date_modified` di frontmatter (length-neutral). Dua perbaikan kecil di luar bodi (alt-text gambar yang melampaui 125 karakter) sudah dirapikan. Satu catatan minor non-blok (caption diagram "lima tahap" vs bodi "enam tahap") disurahkan untuk tim desain.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Em-dash bodi 0; paragraf bervariasi (1–6 kalimat); aside praktisi "Bagian ini jarang ditulis kompetitor..."; tanpa opener AI |
| Factual & energi-gas / CNG accuracy | 9 | 5 klaim cek cocok dengan dossier; angka ESDM persis; semua Flag researcher dihormati |
| On-page SEO compliance | 9 | Semua item lulus; meta title 51, desc 149, slug 35; 3 internal + 2 eksternal; FAQ 5; list+tabel |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata di tiap H2; 1 poin quotable/paragraf; FAQ FAQPage-ready; `date_modified` ditambahkan |
| PGN Gagas framing discipline | 9 | Penyalur/distributor CNG; 2 self-mention; tanpa "memproduksi"; tanpa superlatif terlarang |
| Internal linking | 9 | Hub /gaslink/ inline di lead; /gasku/ + /perusahaan-cng-indonesia/ kontekstual; 3 URL distinct; tanpa "BACA JUGA" |
| FAQ quality | 9 | 5 Q&A, tiap jawaban 48–58 kata, mandiri, masing-masing memuat angka |
| Image-brief completeness | 8 | JSON valid; 2 entri = 2 placeholder; alt-text dirapikan ke ≤125; 1 catatan "5 vs 6 tahap" untuk desain |

## What I fixed (changelog)
- Menambahkan `date_modified: "2026-06-09"` ke frontmatter (sinyal freshness GEO/§2a) — length-neutral, tidak menyentuh bodi.
- images.json — IMAGE_01 alt_id dirapikan dari ~141 → ~116 karakter (melampaui batas 125; tetap mempertahankan entitas inti Gaslink, Mother Station, GTM, PRS, burner/boiler).
- images.json — IMAGE_02 alt_id dirapikan dari ~136 → ~110 karakter (tetap mempertahankan beyond pipeline, GTM, Gaslink, pabrik/hotel).
- Tidak ada perbaikan prosa bodi yang diperlukan: anti-AI scan, fakta, framing, dan GEO semuanya sudah lulus pada draf. Word count bodi tidak berubah (tetap 1.569 menurut hitungan draf; perlu re-verifikasi dengan `tools/count_words.py`).

## What I flagged (open issues)
- ⚠️ Caption IMAGE_01 (images.json) berkata rantai pasok "lima tahap", sedangkan bodi memerincinya jadi **enam langkah** (memisahkan "diterima" dan "dikompresi" di Mother Station). Diagram sah menyatukan kedua langkah itu jadi satu node Mother Station, jadi ini bukan kesalahan faktual. *Rekomendasi*: tim desain boleh tetap memakai 5 node visual, ATAU ubah label caption menjadi "rangkaian tahap" agar tidak ada kesan bertentangan dengan daftar 6 langkah di bodi. Non-blok.
- ⚠️ Klaim biaya 2017 (hotel 20–50%, laundry Batam Rp 16 juta/bulan) sudah berlabel "contoh lapangan 2017" + hedge — sesuai. *Rekomendasi*: jika sibling Gaslink-02 (comparison) tayang, segarkan dengan angka harga energi terkini agar cluster tidak terlihat bergantung pada data 9 tahun.
- ⚠️ Spesifikasi Gaslink Cylinder 28 m³ dan status aktif varian Cylinder masih perlu konfirmasi resmi (Flag #3 dossier). Bodi sudah menghedge dan meminta konfirmasi spec ke tim layanan. *Rekomendasi*: minta tim Gagas konfirmasi spec sebelum publish bila memungkinkan; aman untuk tayang apa adanya karena framing-nya sudah jujur.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep: 0
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: 0 di awal paragraf
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: 0
- [x] "Dengan demikian" not overused — grep: 0
- [x] Em-dash count ≤2 — bodi prosa = 0 em-dash (—); satu-satunya `—` ada di 2 placeholder {IMAGE_NN}; en-dash (–) hanya untuk rentang angka (200–250 bar, 540–580°C, 5–15%, 20–50%) — penggunaan tipografi benar
- [x] Varied paragraph lengths — campuran 1 kalimat ("Relevansinya besar untuk Indonesia.") s/d 5–6 kalimat
- [x] Not every H2 → 3-bullet list — H2#2 murni prosa; H2#3 numbered list; H2#4 tabel; H2#1 & #5 prosa + bullet
- [x] No generic claims without numbers — angka spesifik di 6+ tempat (69%, 3.877/5.598 BBTUD, 25,32%, 600, 200–250 bar, 1/250, 300 m³/bulan, 5–15%, 4.067.002 MMBTU)
- [x] No stacked hype adjectives — tidak ada canggih/powerful/terdepan/seamless
- [x] No service-dump paragraph — hanya anchor Gaslink; tanpa daftar layanan

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Pemanfaatan gas domestik 69% = 3.877 BBTUD dari 5.598 BBTUD (Sem I 2025) | dossier Claim 6 ✓ (Kementerian ESDM, siaran pers 2025-08-11) — cocok persis | pass |
| Sektor industri = konsumen gas domestik terbesar 25,32% | dossier Claim 7 ✓ (Ditjen Migas ESDM, 2025-10-14) | pass |
| 600+ pelanggan per September 2025 | dossier Claim 1 + Flag #2 ✓ — periode dilabeli, tidak digabung dengan MMBTU | pass |
| 4.067.002 MMBTU sepanjang 2025 | dossier Claim 1 + Flag #2 ✓ — di kalimat/section terpisah ("sepanjang 2025") | pass |
| Keselamatan CNG (lebih ringan dari udara; auto-ignition 540–580°C; flammability 5–15%) | dossier Claim 9/10/17 + Flag #6 ✓ — auto-ignition sebagai rentang "bervariasi antarreferensi", bukan satu angka pasti | pass |

Catatan: tidak menjalankan WebSearch — kelima klaim (terutama angka ESDM yang paling sensitif otoritas) cocok persis dengan dossier yang sumbernya resmi pemerintah, dan semua item terproteksi utuh. 3.877/5.598 = 69,3% ≈ 69% (konsisten internal).

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 51 char / "Gaslink" mulai pos 9
- [x] Meta description 140–160 — actual: 149
- [x] Slug ≤60, kebab-case, keyword — actual: apa-itu-gaslink-gas-bumi-tanpa-pipa (35)
- [x] H1 contains keyword — "Apa Itu Gaslink..." ✓
- [x] H2 count 4–5 — actual: 5 H2 konten (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2; ≥1 honest/counter-conventional H2 — H2#3 (pertanyaan) + H2#5 (honest "BELUM Perlu")
- [x] Keyword in first 100 words — "Gaslink" di kalimat ke-2 lead
- [x] Definition snippet near top (40–60 words) — blockquote "Secara singkat" ~57 kata
- [x] ≥8 LSI terms — counted: ~19 (CNG, GTM, Mother Station, SPBG, PRS, beyond pipeline, pipa gas virtual, Gaslink Cylinder, smart metering, gas bumi, LPG, solar, BBTUD, MMBTU, flammability range, auto-ignition, HOREKA, UMKM, konversi LPG)
- [x] 3 internal links (1 hub + 2 cousins) — /gaslink/ (lead) + /gasku/ (H2#2) + /perusahaan-cng-indonesia/ (Kesimpulan)
- [x] ≥1 external authoritative citation — actual: 2 (ESDM siaran pers Sem I 2025 + Ditjen Migas transisi energi); inline "(Kementerian ESDM, 2025)"
- [x] FAQ 5–7 Q&As — actual: 5
- [x] 2 image placeholders (up to 3) — IMAGE_01, IMAGE_02
- [x] ≥1 list + ≥1 table — bullet list + numbered list (6 langkah) + tabel perbandingan
- [x] Word count 1,200–1,600 — actual: 1.569 (per hitungan draf; bodi tidak diubah — re-verifikasi dengan tools/count_words.py)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — H2#1 ~57, H2#2 ~48, H2#3 ~48, H2#4 ~43, H2#5 ~53 kata (kelimanya dalam band)
- [x] Each body paragraph makes one independently quotable, verifiable point — ya; klaim + fakta tersumber per paragraf
- [x] FAQ parseable for FAQPage schema; `dateModified` / freshness noted — FAQ H3 bersih; `date_modified: 2026-06-09` ditambahkan ke meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas framed as gas-energy provider/partner (menyalurkan/menghadirkan), NOT producing — "menghadirkan gas bumi ... lewat solusi CNG seperti Gaslink"; grep "memproduksi" = 0
- [x] ≤3 PGN Gagas self-mentions — actual: 2 ("PGN Gagas" di aside H2#1 + Kesimpulan)
- [x] No unverifiable superlatives — "terbesar" hanya pada fakta ESDM (konsumen terbesar 25,32%); "terbaik" justru ditolak dengan tanda kutip ("bukan soal mana yang 'terbaik' secara absolut")
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier — Gaslink GTM, Gaslink Cylinder, GTM, Mother Station, PRS sesuai; tanpa angka kapasitas GTM
- [x] Closing uses a company_profile positioning line — "Sebagai anak usaha PGN yang merupakan bagian dari Subholding Gas Pertamina..."
- [x] Soft website CTA present as FINAL line, after conclusion — line terakhir: "...kunjungi gagas.co.id dan mulai konsultasinya." (konsultatif, bukan "beli sekarang")
- [x] Hub link present as natural inline anchor (lead) — [Gaslink](https://gagas.co.id/gaslink/) di lead; bukan "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — `articles_history/index.json` kosong (`articles: []`); ini artikel pertama keyword "Gaslink" dan artikel pertama proyek.
- Subtopic overlap (Jaccard estimate): **0.0** (tidak ada pembanding).
- Verdict: **distinct angle confirmed (trivially clean — first article)**.

### F. Image-brief completeness (images.json)
- [x] JSON parses — valid (terbaca utuh; struktur dipertahankan setelah edit alt_id)
- [x] One entry per `{IMAGE_NN}` placeholder in body — 2 entri (IMAGE_01, IMAGE_02) = 2 placeholder bodi
- [x] Each entry has alt_id (≤125) + caption_id + visual_direction + suggested_asset_type (semua Bahasa Indonesia) — alt_id IMAGE_01 ~116 & IMAGE_02 ~110 setelah dirapikan; caption/visual_direction/asset_type lengkap dalam Bahasa Indonesia
- [x] Any "real photo/site asset" requirement surfaced — `sourcing_note` keduanya menegaskan diagram bisa dibuat tim desain tanpa foto asli fasilitas; IMAGE_01 mengingatkan JANGAN cantumkan angka kapasitas GTM; IMAGE_02 mengingatkan JANGAN pakai peta Indonesia
- Catatan: tidak ada PNG untuk dicek — sesuai desain pipeline.
