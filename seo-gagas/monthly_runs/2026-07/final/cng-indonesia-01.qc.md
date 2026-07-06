---
brief_id: "cng-indonesia-01"
editor_run_date: "2026-06-09"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Apa Itu CNG (Compressed Natural Gas) dan Cara Kerjanya

## Recommendation
**approve**

Draft yang kuat dan layak terbit. Anti-AI scan bersih (tidak ada opener terlarang, tidak ada rentetan "Selain itu", tidak ada "Penting untuk dicatat"). Lima jawaban GEO 40–60 kata terpasang persis setelah tiap H2 — writer menangkap lever §2a dengan baik. Semua fakta energi-gas terlacak ke dossier ber-sumber ESDM, dan seluruh item PROTECT dipatuhi: auto-ignition tetap kualitatif (tanpa angka), tidak ada hitungan SPBG/MRU Gagas, klaim "68% hemat vs solar" diomit, program CNG-3kg dibingkai sebagai program konsumen ESDM yang "sedang disiapkan" dan terpisah dari pemakaian industri, serta PLN Batam dilabeli historis 2013–2016. Framing korporat benar (distributor CNG / anak usaha PGN, tanpa superlatif, ≤3 self-mention). Dua perbaikan in-place bersifat net-negatif: konsistensi "200–250 bar" di H2 #1 dan pengurangan em-dash prosa dari 3 menjadi 1. Tidak ada isu yang menuntut rework writer/strategist.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Ritme paragraf bervariasi (1–6 kalimat); aside jujur "CNG itu yang buat ganti gas melon, kan?"; tanpa hype adjective. |
| Factual & energi-gas / CNG accuracy | 10 | 5+ klaim dicek vs dossier ESDM; semua pass. Tidak ada spec/nama produk yang dikarang. |
| On-page SEO compliance | 9 | Meta title 50 char, meta desc 158, slug 44 char, 3 internal link, ≥1 ESDM, FAQ 6, tabel + list ada. |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata setelah tiap H2 (51/48/49/46/40); definition snippet 54 kata; FAQ FAQPage-ready; dateModified ada. |
| PGN Gagas framing discipline | 9 | "mengompresi dan menyalurkan" — distributor, bukan produsen; 2 mention "PGN Gagas" + CTA; tanpa superlatif. |
| Internal linking | 9 | 3 URL distinct, anchor deskriptif, hub di lead — semua inline natural, tanpa "BACA JUGA". |
| FAQ quality | 8 | 6 Q&A, tiap jawaban 40–80 kata, mandiri, ber-angka. Mirror PAA. (2 PAA tersisa diserap body H2 #5 + tabel.) |
| Image-brief completeness | 9 | 3 entry = 3 placeholder; alt_id ≤125; semua field Bahasa Indonesia; batas foto fasilitas Gagas disurfacing. |

## What I fixed (changelog)
- **Konsistensi tekanan di H2 #1** — "dikompresi hingga sekitar 250 bar" → "dikompresi hingga 200–250 bar" agar definisi entitas inti selaras dengan definition snippet, FAQ, tabel, dan rentang dossier (Ditjen Migas ESDM). Net −1 kata.
- **Pengurangan em-dash prosa (3 → 1)** — langkah 1 daftar bernomor: "lapangan gas — sumber yang sama" → "lapangan gas, sumber yang sama"; langkah 2: "hidrokarbon berat — batasnya ketat" → "hidrokarbon berat; batasnya ketat". Em-dash di prosa kini tinggal 1 (kalimat caveat historis PLN Batam, baris 74) — di bawah batas ≤2. (3 em-dash lain ada di dalam placeholder {IMAGE_NN}, tidak dihitung sebagai prosa & sengaja dipertahankan utuh.)
- **Frontmatter word_count** disesuaikan 1559 → 1557 (estimasi konservatif setelah dua edit net-negatif; tetap dalam 1.200–1.600).

## What I flagged (open issues)
- ⚠️ **Em-dash baris 74 (1 buah, prosa)** dipertahankan secara sengaja — *recommendation*: biarkan. Em-dash ini mengapit caveat penting ("angka historis 2013–2016 ... bukan patokan biaya hari ini") yang justru memperkuat kejujuran E-E-A-T; menghapusnya akan menumpulkan caveat. Masih dalam batas ≤2.
- ⚠️ **Estimasi word_count** — *recommendation*: user re-verifikasi dengan count_words.py. Edit bersifat net-negatif (−1 sampai −2 kata dari 1559), jadi hampir pasti ≤1600; tetapi angka pasti diputuskan oleh skrip, bukan estimasi editor.
- ⚠️ **FAQ 6 vs skeleton brief 8** — *recommendation*: tidak perlu diubah. Dua pertanyaan tersisa ("Apakah CNG sama dengan BBG?" dan "CNG digunakan untuk apa saja?") sudah terjawab di body (BBG dijelaskan di H2 #1/snippet; pemanfaatan di H2 #5 + tabel). 6 Q&A memenuhi band 5–7 dan menghindari pengulangan. Menambah kembali ke 8 berisiko padding/duplikasi.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep bersih
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — tidak ada satu pun
- [x] No "Penting untuk dicatat / dipahami bahwa" — tidak ada
- [x] "Dengan demikian" not overused — tidak muncul
- [x] Em-dash count ≤2 — prosa = 1 (baris 74); 3 lain di dalam placeholder {IMAGE_NN} (bukan prosa terbit)
- [x] Varied paragraph lengths — campuran 1-kalimat ("Yang sudah berjalan justru di dua segmen lain.") sampai 5-kalimat
- [x] Not every H2 → 3-bullet list — H2 #3 numbered 7-langkah, H2 #4 tabel, H2 #5 prosa+bullet, lainnya prosa
- [x] No generic claims without numbers — 200–250 bar, 1/250, 90–95%, 80–84%, -163°C, 1/600, 0,16%, 23 mmscf, 2013/2016
- [x] No stacked hype adjectives — tidak ada canggih/powerful/terdepan
- [x] No service-dump paragraph — anchor tunggal (Gaslink) di body; Gasku+Gaslink hanya di Kesimpulan

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| CNG dikompresi 200–250 bar, volume ~1/250, komponen metana CH4 | dossier Claim 1+2 (Ditjen Migas ESDM) ✓ | pass |
| ~80–84% kebutuhan LPG nasional diimpor (CNBC, Mei 2026) | dossier Claim 6 (CNBC 7 Mei 2026) ✓ | pass |
| LNG didinginkan ~-163°C, volume menyusut ~1/600 | dossier Claim 5 (Ditjen Migas ESDM) ✓ | pass |
| PLN Batam pakai CNG sejak 2013; Gresik→Lombok 23 mmscf mulai 2016; Rp 50 miliar/tahun (historis) | dossier Claim 9 (Kementerian ESDM) ✓ — dilabeli "historis 2013–2016" sesuai PROTECT | pass |
| BBG transportasi ~0,16% konsumsi gas domestik (ESDM 2023) | dossier Claim 11 + edge case (5,86/3.745 BBTUD) ✓ | pass |
| Titik penyalaan metana "jauh lebih tinggi dari bensin" (tanpa angka) | dossier Flag 3 — disajikan kualitatif, atribusi "standar teknis internasional" ✓ sesuai PROTECT | pass |

Tidak ada WebSearch diperlukan: setiap klaim numerik terlacak ke dossier yang bersumber ESDM resmi; angka berisiko (auto-ignition, 68%) sudah ditangani sesuai instruksi PROTECT.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — "Apa Itu CNG? Pengertian & Cara Kerja Gas Terkompresi" = 50 char; "CNG" di char 9
- [x] Meta description 140–160 — 158 char
- [x] Slug ≤60, kebab-case, keyword — "apa-itu-cng-compressed-natural-gas-cara-kerja" = 44 char ✓
- [x] H1 contains keyword — "Apa Itu CNG (Compressed Natural Gas) dan Cara Kerjanya"
- [x] H2 count 4–5 — 5 body H2 (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#3 "Bagaimana Cara Kerja CNG...") ; ≥1 honest/counter-conventional (#5 "CNG Bukan Cuma 'Pengganti LPG 3 Kg'")
- [x] Keyword in first 100 words — "Compressed Natural Gas" di kalimat ke-2 lead (juga anchor hub)
- [x] Definition snippet near top (40–60 words) — blockquote 54 kata di ~120 kata pertama
- [x] ≥8 LSI terms — metana/CH4, BBG, beyond pipeline, Mother Station, Pressure Reduction Station, virtual pipeline, LNG, LPG, propana/butana, kaskade, SPBG, 200–250 bar (12+)
- [x] 3 internal links (1 hub + 2 cousins) — /perusahaan-cng-indonesia/ (lead) + /perusahaan-lng-indonesia/ + /gaslink/
- [x] ≥1 external authoritative citation — Ditjen Migas ESDM (×3 inline) + Kementerian ESDM + CNBC + Kompas
- [x] FAQ 5–7 Q&As — 6
- [x] 2 image placeholders (up to 3) — 3
- [x] ≥1 list + ≥1 table — numbered list (7-langkah) + bullet list (segmen) + tabel (CNG vs gas pipa vs LPG)
- [x] Word count 1,200–1,600 — ~1.557 (estimasi; user re-verifikasi)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — H2#1: 51 kata, H2#2: ~48, H2#3: ~49, H2#4: ~46, H2#5: ~40. Semua dalam band.
- [x] Each body paragraph makes one independently quotable, verifiable point — tiap paragraf = 1 klaim + fakta ber-sumber
- [x] FAQ parseable for FAQPage schema; `dateModified` / freshness noted — date_modified: 2026-06-09 di meta block; FAQ H3 bersih

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas framed as gas-energy provider/distributor — "mengompresi dan menyalurkan gas bumi" (bukan memproduksi)
- [x] ≤3 PGN Gagas self-mentions — 2× "PGN Gagas" (H2 #1 aside + Kesimpulan) + 1 soft CTA gagas.co.id = 3
- [x] No unverifiable superlatives — grep "terbaik/nomor satu/terbesar/satu-satunya" bersih
- [x] Energi-gas / CNG product names + specs match — Gasku (transportasi) & Gaslink (industri/komersial) sesuai product_matrix; tanpa spec/kapasitas/SPBG-MRU yang dikarang
- [x] Closing uses a company_profile positioning line — "anak usaha PGN ... bagian Subholding Gas Pertamina"
- [x] Soft website CTA present as FINAL line — "...kunjungi gagas.co.id dan mulai konsultasinya." (konsultatif, bukan "beli sekarang")
- [x] Hub link as natural inline anchor in lead — "[Compressed Natural Gas](...)", bukan callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none** untuk "CNG Indonesia" (artikel pertama cluster). Tetangga lintas-cluster: gaslink-01 ("Apa Itu Gaslink").
- Subtopic overlap (Jaccard estimate): ~0.10 vs gaslink-01 — gaslink-01 berpusat GTM/Cylinder/Pressure Reduction Station/aplikasi produk; artikel ini di kimia-fisika kompresi & definisi entitas vendor-neutral.
- 6 artikel committed di index.json semuanya hub Gaslink/Gasku — tidak ada yang berbagi hub /perusahaan-cng-indonesia/ sebagai primary.
- Verdict: **distinct angle confirmed** — cornerstone definitional CNG, tidak tumpang tindih.

### F. Image-brief completeness (images.json)
- [x] JSON parses — terbaca bersih, well-formed
- [x] One entry per `{IMAGE_NN}` placeholder — 3 entry (IMAGE_01/02/03) = 3 placeholder di body (baris 44, 76, 106)
- [x] Each entry has alt_id (≤125) + caption_id + visual_direction + suggested_asset_type, semua Bahasa Indonesia — alt_id 102/110/100 char
- [x] "Real photo/site asset" requirement surfaced — tiap sourcing_note menegaskan "tidak memerlukan foto fasilitas Gagas" + larangan eksplisit pakai foto Mother Station/SPBG Gagas yang belum diverifikasi
- (Tidak ada PNG untuk dicek — sesuai desain; tim desain klien yang mengeksekusi.)

## The shipping question
Jika tayang di gagas.co.id besok dan dibaca praktisi energi senior + pembeli industri skeptis: definisinya akurat dan ber-sumber ESDM, perbedaan CNG/gas-pipa/LPG/LNG jernih, rantai 7-langkah konkret, dan bagian "meluruskan salah kaprah" menambah kepercayaan tanpa overselling. WEBARQ Promote layak bangga. **Approve.**
