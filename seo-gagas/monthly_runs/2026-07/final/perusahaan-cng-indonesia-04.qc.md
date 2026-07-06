---
brief_id: "perusahaan-cng-indonesia-04"
editor_run_date: "2026-06-09"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Keamanan & Keandalan Pasokan CNG: Yang Wajib Dijamin Penyedia

## Recommendation
**approve**

Draf masuk dalam kondisi kuat dan, yang terpenting, melewati satu-satunya jebakan paling berbahaya di brief ini dengan benar: **ISO 11439 / ECE R110 / SNI 7407 secara eksplisit dan konsisten dilabeli sebagai standar tabung/komponen KENDARAAN — bukan yang dituntut pembeli distribusi industri dari operasi penyedia.** Standar operasi distribusi (ISO 45001 + Permen ESDM 32/2021 + Kepmen ESDM 176.K/2024 SMKM) dipisahkan dengan tegas di prosa, tabel, FAQ, dan brief gambar. Semua fakta fisika CNG, kutipan Dirjen Migas (konteks rumah tangga + caveat instalasi), status "dibangun 2025" Mother Station Medan/LNG Hub Bandung, dan ketiadaan nomor SKKNI spesifik cocok dengan dossier dan flag-nya. Framing PGN Gagas benar (distributor/penyedia, bukan produsen), tepat di batas 3 self-mention, tanpa superlatif. Perbaikan yang saya terapkan bersifat minor dan editorial (satu jawaban GEO yang sedikit pendek, satu kalimat berbelit, sepasang em-dash di kesimpulan), tidak ada yang menyentuh struktur atau fakta. Panjang akhir ~1.579 kata, di bawah plafon 1.600. Layak tayang.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tidak ada opener AI, tidak ada "Selain itu" beruntun, ritme paragraf bervariasi, em-dash prosa = 0 setelah edit. |
| Factual & energi-gas / CNG accuracy | 10 | 5/5 klaim spot-check lolos vs dossier; fisika CNG, regulasi, dan angka operasional akurat dengan atribusi. |
| On-page SEO compliance | 9 | Meta title 46 char (kw di depan), meta desc 158 char, 3 internal link, 3 sitasi eksternal, FAQ 6, tabel+list ada. |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata setelah tiap H2 (H2 #5 saya rapikan agar masuk band); satu poin kutip per paragraf. |
| PGN Gagas framing discipline | 9 | Distributor/penyedia, bukan produsen; 3 self-mention (di plafon); tanpa superlatif; positioning line di penutup. |
| Internal linking | 10 | Hub + 2 cousin, semua anchor inline natural, destinasi persis sesuai brief; tidak ada BACA JUGA. |
| FAQ quality | 9 | 6 Q&A, semua 40–80 kata, mirror PAA, tiap jawaban memuat satu angka/fakta. |
| Image-brief completeness | 9 | 3 entri images.json valid, lengkap (alt/caption/visual/asset type, Bahasa Indonesia), 1:1 dengan placeholder. |

## What I fixed (changelog)
- **Kesimpulan (em-dash → koma):** "Kembali ke ketakutan di awal — produksi... lokasi — keduanya" diubah menjadi pemisah koma. Menurunkan em-dash prosa dari 2 → 0 dan menyelaraskan dengan gaya kesimpulan benchmark `gaslink-01` (yang memakai titik dua, bukan em-dash callback).
- **H2 #5 opener (GEO):** jawaban pembuka semula ~37 kata (di bawah band 40–60). Diperluas menjadi ~45 kata ("...dan di situlah pembeli kerap tertipu" + "Empat hal berikut paling sering menyembunyikan celah, dan patut Anda dalami...") agar dapat dikutip berdiri sendiri.
- **Item 4 daftar klaim (kalimat berbelit):** "menyembunyikan tidak adanya pemantauan" → "menyembunyikan absennya pemantauan" — merapikan konstruksi yang janggal tanpa menambah kata.
- **Sitasi inline (line 56):** "(UNECE, R110)" → "(UNECE, UN R110)" — konsisten dengan penyebutan standar dan kurang abrupt di tengah kalimat.
- **Frontmatter `word_count`:** 1559 → 1579 (mencerminkan baseline terverifikasi count_words.py 1572 + net edit ~+7 kata).
- Net perubahan kata: ~+7 (length-neutral; tetap di bawah plafon 1.600).

## What I flagged (open issues)
- ⚠️ **Self-mention PGN Gagas tepat di batas (3/3).** Tiga sebutan: contoh ISO 45001 (H2 #2), pembangunan Mother Station/LNG Hub (H2 #3), dan positioning di Kesimpulan. Masih sesuai aturan (≤3), tetapi tidak ada ruang menambah sebutan keempat. *Rekomendasi*: jika di masa depan ada penyuntingan, jangan menambah nama "PGN Gagas" baru — gunakan deskripsi generik penyedia.
- ⚠️ **Angka operasional & status infrastruktur bergantung waktu (Flag 3 & 4 dossier).** "99,9%", Mother Station Medan (1 MMSCFD), LNG Hub Bandung (0,5 MMSCFD) diframe "dibangun 2025" dan "sebagai gambaran" — sudah benar dan tidak diklaim sebagai status real-time/operasional penuh. *Rekomendasi*: pertahankan framing ini; jika artikel di-refresh dan ingin mengklaim status operasional, verifikasi dulu ke rilis terbaru/gagas.co.id.
- ⚠️ **Em-dash tersisa hanya di dalam `{IMAGE_NN}` (brief desain), bukan prosa.** Sengaja dipertahankan karena placeholder tidak boleh diubah dan teks itu instruksi untuk tim desain, bukan badan artikel. Bukan pelanggaran §5.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — grep: 0 hits
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: 0 hits
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: 0 hits
- [x] "Dengan demikian" not overused — grep: 0 hits
- [x] Em-dash count ≤2 — prosa = 0 (2 sisa hanya di brief gambar {IMAGE_NN})
- [x] Varied paragraph lengths (1–6 kalimat; lead panjang, aside pendek, daftar dengan lead-in tebal)
- [x] Not every H2 → 3-bullet list (H2 #1, #2, #4 dibuka prosa; #3 daftar 5 butir; #5 daftar bernomor 4)
- [x] No generic claims without numbers (angka tersebar: 0,55 / 1,55 / 537–540°C / 5–15% / 99,9% / 1 & 0,5 MMSCFD)
- [x] No stacked hype adjectives (tidak ada canggih/powerful/terdepan/seamless)
- [x] No service-dump paragraph (hanya 1 anchor Gaslink mid-body + positioning Kesimpulan)

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| ISO 11439 / ECE R110 / SNI 7407 = standar tabung/komponen KENDARAAN, bukan distribusi | dossier ✓ (Catatan penting writer, 3×) + product_matrix vehicle vs ops | pass — dilabeli benar di prosa & tabel |
| Standar operasi distribusi = ISO 45001 + Permen ESDM 32/2021 + Kepmen ESDM 176.K/2024 (SMKM, berlaku 25 Jan 2025) | dossier ✓ (Permen 32/2021; Kepmen 176.K/2024 berlaku 25 Jan 2025) | pass |
| Metana ~0,55 (naik), propana ~1,55 (mengendap); autoignition ~537–540°C; flammability 5–15% | dossier ✓ Tabel 2 + Flag 5 (gunakan 537–540°C dengan atribusi) | pass |
| Dirjen Migas Laode Sulaeman: risiko CNG lebih rendah, konteks konversi LPG rumah tangga + caveat instalasi benar (CNBC, 19 Mei 2026) | dossier ✓ + edge case "konteks rumah tangga, jaga sebagai referensi" | pass — diframe rumah tangga + caveat |
| Mother Station Medan (1 MMSCFD) & LNG Hub Bandung (0,5 MMSCFD) "dibangun 2025"; keandalan PGN 99,9% | dossier ✓ + Flag 4 (jangan klaim operasional penuh) | pass — "membangun ... pada 2025", tidak diklaim operasional |
| (bonus) Tidak ada nomor SKKNI spesifik diklaim | dossier Flag 2 + edge case | pass — "sesuai ketentuan K3 migas Kemnaker" tanpa nomor |

WebSearch tidak diperlukan: semua klaim tertelusur ke dossier (sumber primer ESDM/CNBC/ISO sudah diverifikasi researcher pada 9 Juni 2026).

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 46 char / "Perusahaan CNG Indonesia" pada posisi 0
- [x] Meta description 140–160 — actual: 158 char
- [x] Slug ≤60, kebab-case, keyword — actual: `keamanan-keandalan-pasokan-cng` (30 char; varian keyword "CNG")
- [x] H1 contains keyword/sinonim — "Keamanan & Keandalan Pasokan CNG..." (entitas CNG; keyword penuh di meta/lead)
- [x] H2 count 4–5 — actual: 5 (di luar FAQ & Kesimpulan)
- [x] ≥1 question-format H2 (#3 "Bagaimana...", #4 "Apakah CNG Lebih Aman...") ; ≥1 honest/counter-conventional (#5 "Klaim... Tanyakan Lebih Dalam")
- [x] Keyword in first 100 words — "perusahaan CNG Indonesia" di kalimat ke-2 lead (anchor hub)
- [x] Definition snippet near top (40–60 words) — blockquote "Secara singkat" ~52 kata
- [x] ≥8 LSI terms — counted: 12+ (security of supply, ISO 45001, Permen ESDM 32/2021, SMKM, ISO 11439, ECE R110, SNI 7407, GTM, Mother Station, PRS, telemetri/smart meter, SLA, autoignition, flammability)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: `/perusahaan-cng-indonesia/` (hub, lead), `/gaslink/` (cousin), `/perusahaan-lng-indonesia/` (cousin)
- [x] ≥1 external authoritative citation — actual: 3 (Kementerian ESDM/Permen 32/2021, CNBC/Dirjen Migas, UNECE UN R110)
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 3
- [x] ≥1 list + ≥1 table — 1 bullet list (H2 #3) + 1 numbered list (H2 #5) + 2 tabel (standar; CNG vs LPG)
- [x] Word count 1,200–1,600 — actual: ~1.579 (baseline count_words.py 1572 + net edit ~+7)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — H2 #1 ~55, #2 ~52, #3 ~50, #4 ~58, #5 ~45 (diperbaiki dari ~37)
- [x] Each body paragraph makes one independently quotable, verifiable point — ya; klaim + fakta tersumber per paragraf
- [x] FAQ parseable for FAQPage schema; `dateModified` noted — FAQ H3 bersih; `date_modified: 2026-06-09` di meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas diframe sebagai penyedia/distributor (memegang sertifikasi, membangun infrastruktur, bagian ekosistem PGN) — bukan produsen gas
- [x] ≤3 PGN Gagas self-mentions — actual: 3 (H2 #2 ISO 45001; H2 #3 Mother Station/LNG Hub; Kesimpulan positioning) — di batas
- [x] No unverifiable superlatives ("terbaik/nomor satu") — grep: 0
- [x] Energi-gas / CNG product names + specs match dossier/product_matrix (Gaslink, GTM, Mother Station, ISO 45001 2025, MMSCFD) ✓
- [x] Closing uses a company_profile.md positioning line (anak usaha PGN / Subholding Gas Pertamina + ISO 45001 + Safety/ONE)
- [x] Soft website CTA = FINAL line, after Kesimpulan ("...kunjungi gagas.co.id dan mulai konsultasinya.") — konsultatif, bukan "beli sekarang"
- [x] Hub link = natural inline anchor di lead ("perusahaan CNG Indonesia") — bukan BACA JUGA

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** untuk cluster `perusahaan-cng-indonesia` (history hanya berisi cluster Gaslink & Gasku per 2026-07).
- Subtopic overlap (Jaccard estimate): ~0,15 vs tetangga tema `gaslink-01`/`gasku-01`/`gasku-03` (irisan hanya kata kunci "keselamatan CNG"; konteks berbeda: jaminan penyedia B2B vs penjelasan produk/keselamatan kendaraan).
- Verdict: **distinct angle confirmed** — lensa komersial/trust (jaminan keselamatan + keandalan pasok yang dapat diverifikasi pembeli), tidak tumpang tindih.

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per `{IMAGE_NN}` placeholder — 3 placeholder (01/02/03) ↔ 3 entri, marker cocok
- [x] Each entry has alt_id (≤125 char) + caption_id + visual_direction + suggested_asset_type — semua ada, Bahasa Indonesia
  - IMAGE_01 alt_id ~118 char ✓; IMAGE_02 alt_id ~110 char ✓; IMAGE_03 alt_id ~108 char ✓
- [x] "Real photo/site asset" requirement surfaced — ketiganya orisinal desain (infografik/diagram); IMAGE_03 opsional stock photo blur vendor-neutral. Tidak ada foto fasilitas PGN Gagas diperlukan.
- IMAGE_02 (diagram pemisah standar ops vs kendaraan) memperkuat proteksi kritis secara visual — selaras dengan badan artikel.
- (No generated PNGs to check — by design.)
