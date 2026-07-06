---
brief_id: "cng-indonesia-05"
editor_run_date: "2026-06-09"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — CNG & Transisi Energi Indonesia: Peran Gas Bumi Menuju Energi Bersih

## Recommendation
**approve**

Draf ini sudah sangat dekat dengan kondisi siap-kirim dan, setelah polish ringan, lolos seluruh quality bar. Yang membuatnya kuat: setiap angka kebijakan tersumber ke ESDM/RUEN/Permen ESDM 35/2021, sisi kritis (metana GWP20 82,5x, *carbon lock-in*) diatribusikan ke IEA dan "analis energi" — bukan ke ESDM — persis sesuai disiplin yang diminta, dan angka CNG-3kg rumah tangga yang belum terverifikasi ("30–40% lebih murah", "emisi -20–25%") sama sekali tidak muncul di tubuh artikel. Framing PGN Gagas tepat (distributor CNG, bukan produsen; ≤3 self-mention; tanpa superlatif). Anti-AI bersih. Saya menerapkan dua perbaikan di tempat — menambah satu FAQ bernilai tinggi yang sebelumnya hilang dari draf (target bauran 2030/2050) dan menghapus seluruh em-dash dari prosa tubuh — keduanya memperkuat, bukan mengubah, sudut artikel. Tidak ada isu yang memerlukan penulisan ulang. Open flag tersisa hanya satu hal kosmetik di luar tubuh artikel (panjang alt-text IMAGE_01).

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Pembuka berbasis pain ("ruang rapat kebijakan... satu pertanyaan kerap membingungkan"), ritme paragraf bervariasi, aside jujur ("Yang sering disalahpahami", "paling sering luput"). Tanpa cliché AI. |
| Factual & energi-gas / CNG accuracy | 10 | Semua angka cocok dengan dossier; IEA 35% / GWP20 82,5x diverifikasi ulang ke iea.org; angka CNG-3kg terlarang absen; framing "jembatan, bukan solusi akhir" konsisten. |
| On-page SEO compliance | 9 | Meta title 54, meta desc ~144, slug 38; 5 H2 tubuh (question + honest hadir); 3 internal link distinct; ESDM + IEA dikutip; tabel + list + FAQ ada. |
| GEO extractability (§2a) | 9 | Definition snippet 40–60 kata di awal; jawaban langsung setelah tiap H2 utama; satu poin terkutip per paragraf; FAQ siap-FAQPage; `date_modified` ada di meta. |
| PGN Gagas framing discipline | 10 | Distributor/penyalur CNG; 1 aside mid-artikel + 1 positioning line + 1 CTA = ≤3; tanpa superlatif; positioning line dari company_profile.md. |
| Internal linking | 10 | Hub `/perusahaan-cng-indonesia/` inline di lead; cousin `/perusahaan-lng-indonesia/` + `/gaslink/` kontekstual; semua anchor deskriptif; tanpa "BACA JUGA". |
| FAQ quality | 9 | 6 Q&A (naik dari 5), tiap jawaban 40–80 kata mandiri dengan ≥1 fakta tersumber; mencakup PAA inti (apa itu, mengapa jembatan, bersih?, target bauran, risiko, pasca-2060). |
| Image-brief completeness | 8 | 3 entri cocok 3 placeholder; alt_id/caption_id/visual_direction/suggested_asset_type semua Bahasa Indonesia; sourcing_note "buat dari nol, tak perlu foto asli Gagas". Catatan: alt_id IMAGE_01 ~129 char (sedikit di atas pedoman 125). |

## What I fixed (changelog)
- **FAQ 5 → 6**: menambahkan kembali Q&A bernilai tinggi yang hilang dari draf — "Apa target bauran energi gas bumi Indonesia pada 2030 dan 2050?" (24% bauran 2050 / minyak 20% / EBT 31% / 12 BSCFD 2030 / Permen ESDM 35/2021). Bersumber langsung dari dossier; bukan fakta baru karangan. Ini PAA inti dan unit ekstraksi GEO yang kuat.
- **Em-dash prosa tubuh 2 → 0**: mengganti em-dash di §1 ("...35% lebih rendah dari batu bara — keunggulan nyata..." → "..., sebuah keunggulan nyata, tetapi bukan nol.") dan di §5 ("...jembatan berbatas waktu — risiko yang diakui..." → "...jembatan berbatas waktu, risiko yang diakui...").
- **Em-dash di placeholder {IMAGE_01/02/03}**: mengubah em-dash pemisah di dalam tiga brief gambar menjadi koma/tanda kurung, agar fallback caption di .docx juga bebas em-dash. Konsep & teks visual tidak berubah.
- **Frontmatter `word_count` 1577 → 1517**: disesuaikan dengan basis count_words.py (draf 1457) + penambahan satu FAQ (~60 kata). Masih ≤1600.

## What I flagged (open issues)
- ⚠️ **alt_id IMAGE_01 ~129 karakter** (sedikit di atas pedoman alt-text ≤125) — *rekomendasi*: tim desain/image-planner memangkas, mis. "Infografis empat peran gas bumi dalam transisi energi: substitusi, backup EBT, transportasi, ketahanan energi" (~108 char). Non-blocking; di luar tubuh artikel sehingga tidak saya ubah (bukan kepemilikan editor).
- ⚠️ **IMAGE_02 memuat angka g CO2/kWh (~490 / ~820 / ~650–700)** yang per dossier FLAG 1 berstatus medium-confidence (PDF primer ESDM belum di-fetch). *Status*: sudah dimitigasi dengan benar — angka ini hanya di placeholder gambar (bukan prosa), images.json sudah memberi tanda bintang + "estimasi" + atribusi "data IEA/ESDM". Tubuh artikel bijak hanya memakai angka IEA "~35%" yang tersumber langsung. Tidak ada tindakan diperlukan; dicatat agar tim desain mempertahankan disclaimer di visual.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep bersih
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — tidak ada sama sekali
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep bersih
- [x] "Dengan demikian" not overused — tidak muncul
- [x] Em-dash count ≤2 — **0** di prosa tubuh setelah fix (juga 0 di placeholder)
- [x] Varied paragraph lengths — campuran 1-kalimat ("Intinya: jembatan, bukan tujuan akhir.") hingga 4–5 kalimat
- [x] Not every H2 → 3-bullet list — H2 #1/#3/#4 dibuka prosa; #2 numbered list; #5 prosa + bullet; satu tabel
- [x] No generic claims without numbers — angka tersumber di 6+ titik (24%, 12 BSCFD, 15,75%, 23%, 82,5x, 401 juta ton, >60%, >75%)
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — grep bersih
- [x] No service-dump paragraph — satu anchor (Gaslink) di satu kalimat saja

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Gas ~35% lebih rendah emisi *lifecycle* dari batu bara (IEA, 2025) | dossier ✓ + WebSearch iea.org (Global Methane Tracker 2025 Key Findings: "about 35% fewer emissions than coal; >95% of 2024 gas lower than coal") | pass |
| Metana GWP20 82,5x CO2 (20 tahun); IEA "lebih rendah kecuali emisi metana sangat tinggi" | dossier ✓ + WebSearch iea.org (GWP20 = 82.5×; GWP100 = 30×; quote terverifikasi) | pass |
| Gas ~24% bauran 2050; 12 BSCFD 2030; NZE 2060 | dossier ✓ (RUEN/Ditjen Migas; Permen ESDM 35/2021; ESDM "Masa Transisi Energi") — disajikan sebagai target kebijakan, bukan ramalan | pass |
| ">75% konsumsi LPG nasional dari impor"; program CNG-3kg = inisiatif pemerintah | dossier FLAG 3 (rekomendasi pakai ">75%") ✓; FLAG 2 (atribusi "laporan media Mei 2026 mengutip ESDM") ✓ — angka "30–40% murah / emisi -20–25%" **tidak** dipakai | pass |
| *Carbon lock-in* = "risiko yang diakui para analis energi, bukan posisi resmi pemerintah" | dossier FLAG 6 (jangan atribusi lock-in ke ESDM) ✓ — diatribusikan ke analis energi/IEA | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: ~54 char / "CNG" di posisi 1
- [x] Meta description 140–160 — actual: ~144
- [x] Slug ≤60, kebab-case, keyword — actual: `cng-transisi-energi-indonesia-gas-bumi` (38)
- [x] H1 contains keyword — "CNG & Transisi Energi Indonesia..."
- [x] H2 count 4–5 — actual: 5 H2 tubuh (+FAQ +Kesimpulan)
- [x] ≥1 question-format H2 (#3 "Ke Mana Arah Bauran...2060?"); ≥1 honest/counter-conventional H2 (#5 "Sisi Lain: Mengapa Gas Bukan Solusi Akhir")
- [x] Keyword in first 100 words — "CNG (Compressed Natural Gas)" + anchor "CNG di Indonesia" di lead
- [x] Definition snippet near top (40–60 words) — blockquote "Secara singkat" (~55 kata)
- [x] ≥8 LSI terms — energi transisi, bridge fuel, bauran energi nasional, RUEN, NZE 2060, EBT, baseload backup, dekarbonisasi, ketahanan energi, metana/GWP, CCS (>8)
- [x] 3 internal links (1 hub + 2 cousins) — `/perusahaan-cng-indonesia/` (lead) + `/perusahaan-lng-indonesia/` + `/gaslink/`
- [x] ≥1 external authoritative citation — ESDM (inline, beberapa) + IEA (inline) = 2 entitas
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 3 (IMAGE_01/02/03)
- [x] ≥1 list + ≥1 table — numbered list (4 peran) + bullet list (3 risiko) + 1 tabel kebijakan→lapangan
- [x] Word count 1,200–1,600 — actual: ~1.517 (est.; basis count_words.py 1457 + FAQ baru)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — #1 definisi, #3 angka bauran, #4 "narasi makro menjadi konkret", #5 "gas bukan tujuan akhir + 3 alasan"; #2 lead-in singkat lalu numbered list (format cocok untuk enumerasi "empat peran")
- [x] Each body paragraph makes one independently quotable, verifiable point — klaim + fakta tersumber per paragraf
- [x] FAQ parseable for FAQPage schema; `date_modified` / freshness in meta block — `date_modified: "2026-06-09"` ada

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas framed as gas-energy provider/distributor (menyalurkan/memasok) — "contoh realisasi transisi di lokasi tanpa pipa"; tidak ada klaim produksi/hulu
- [x] ≤3 PGN Gagas self-mentions — actual: 2 nama-mention ("PGN Gagas" di aside H2 #4 + Kesimpulan) + 1 CTA URL gagas.co.id = dalam budget ≤3
- [x] No unverifiable superlatives ("terbaik/nomor satu") — grep bersih
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier — Gaslink (industri/komersial via GTM) konsisten; LNG hanya dirujuk sebagai wujud gas, bukan klaim "perusahaan LNG"
- [x] Closing uses a company_profile.md positioning line — "memposisikan gas bumi sebagai energi transisi yang lebih bersih dan hemat... memperkaya bauran energi nasional" (line 93 profil)
- [x] Soft website CTA present as the FINAL line, after the conclusion — "...kunjungi gagas.co.id dan mulai konsultasinya." (baris terakhir, konsultatif)
- [x] Hub link as natural inline anchor in lead — [CNG di Indonesia] di paragraf pembuka; bukan callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — `articles_history/index.json` tidak memuat artikel cluster "CNG Indonesia"/"Perusahaan CNG Indonesia"; entri yang ada hanya cluster Gaslink (3) & Gasku (3)
- Subtopic overlap (Jaccard estimate): ~0.08 (per brief, vs cng-03 yang belum di-commit; irisan tipis "emisi/energi bersih")
- Verdict: **distinct angle confirmed** — ini satu-satunya artikel bersudut makro-kebijakan/transisi energi (bauran, NZE 2060, sisi kritis), berbeda altitude dari produk/operasional Gaslink & Gasku

### F. Image-brief completeness (images.json)
- [x] JSON parses — valid
- [x] One entry per `{IMAGE_NN}` placeholder — 3 placeholder (IMAGE_01/02/03) cocok 3 entri
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type (all Bahasa Indonesia) — terpenuhi; **kecuali** alt_id IMAGE_01 ~129 char (lihat open issue — non-blocking)
- [x] Any "real photo/site asset" requirement surfaced — sourcing_note tiap entri menegaskan "infografis/diagram orisinal, buat dari nol", "tidak memerlukan foto asli Gagas", "jangan rekayasa logo/fasilitas Gagas"
- (No generated PNGs to check — images are produced by the client's design team from this brief.)

---

## The shipping question
Jika artikel ini tayang di gagas.co.id besok dan dibaca praktisi energi senior sekaligus pembeli industri yang skeptis: ya, WEBARQ Promote layak bangga. Artikel ini justru menonjol karena memuat sisi kritis (metana, lock-in, "lebih rendah ≠ bersih") yang absen di SERP kompetitor, dengan setiap angka tersumber dan setiap klaim kebijakan diatribusikan tepat. **Approve.**
