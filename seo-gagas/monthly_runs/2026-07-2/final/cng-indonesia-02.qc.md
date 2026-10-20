---
brief_id: "cng-indonesia-02"
editor_run_date: "2026-07-08"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Keselamatan CNG: Spesifikasi Tabung & Standar Keamanan

## Recommendation
**approve**

Kuat dan curator-ready. Draft masuk dengan fondasi yang sangat baik: setiap hedge faktual sensitif sudah tepat (auto-ignition "sekitar 540°C" dengan variasi 537–600°C; tekanan "sekitar 200 bar sebagai acuan, sebagian hingga 250 bar" — bukan "200–250 bar" sebagai rentang resmi tunggal; SNI 7407 dijelaskan sebagai standar *cara uji* bukan desain tabung; tidak ada interval inspeksi berkala spesifik yang diklaim; Type 1–4 tetap kualitatif tanpa persentase presisi; insiden KNKT Sukabumi 2023 dipakai sebagai jangkar risiko yang jujur). Perbaikan editor terfokus pada GEO extractability (dua H2 pengantar-list yang jawabannya di bawah 40 kata dinaikkan ke band 40–60 kata) dan burstiness paragraf (CV 0.297 → 0.337, flag turun dari high ke low). AI-detector 0.04 dan tidak ada plagiarisme verbatim non-Gagas. Framing PGN Gagas benar (distributor/operator, menyalurkan — bukan produsen; 2 self-mention; tanpa superlatif). Angle berbeda jelas dari cluster part-1 (Jaccard rendah). Word count tepat di 1.600 (ceiling). Layak tayang di gagas.co.id.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Nol AI-tell opener; em-dash 1; variasi paragraf naik (CV 0.337); nada praktisi jujur ("aman bukan berarti tidak mungkin terbakar") |
| Factual & energi-gas / CNG accuracy | 10 | 5/5 spot-check pass; semua hedge sensitif persis sesuai dossier; tidak ada spec/tanggal karangan |
| On-page SEO compliance | 9 | Meta title 47, meta desc 158, slug 42; H2 mix lengkap; 20+ LSI; 3 internal + 3 eksternal; FAQ 6 |
| GEO extractability (§2a) | 9 | Kelima jawaban H2 kini 47–57 kata; satu poin quotable per paragraf; date_modified ditambahkan |
| PGN Gagas framing discipline | 10 | Provider/distributor, "menyalurkan gas bumi lewat solusi CNG"; 2 mention; tanpa superlatif; ISO 45001:2018 sesuai dossier |
| Internal linking | 10 | Hub `perusahaan-cng-indonesia` di lead + cousin `gasku` & `gaslink`; anchor deskriptif; inline (tanpa BACA JUGA) |
| FAQ quality | 9 | 6 Q&A dari PAA, tiap jawaban 40–80 kata, self-contained, FAQPage-ready |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04; tidak ada verbatim ≥20 kata non-Gagas; fakta yang cocok = common-knowledge/berita insiden |

## What I fixed (changelog)
- **GEO §2a — H2 #1 answer 32→48 kata**: pengantar diperkaya dengan tiga sifat fisik bernama (densitas < udara, ~540°C, rentang sempit) agar berdiri sendiri sebagai jawaban 40–60 kata sebelum masuk bullet.
- **GEO §2a — H2 #4 answer 26→49 kata**: pengantar diperluas untuk merangkum keempat lapisan pengaman (solenoid, PRD, stopper, inspeksi) sebagai jawaban quotable sebelum numbered list.
- **Burstiness paragraf CV 0.297→0.337**: memecah kalimat penutup H2 #1 menjadi paragraf 1-kalimat yang tegas ("Klaim yang jujur bukan 'CNG tidak bisa meledak'...") — menaikkan variasi panjang paragraf; flag turun high→low.
- **Frontmatter — menambah `date_modified: "2026-07-08"`**: field freshness/GEO (§2a) yang hilang dari draft; menyamakan dengan konvensi part-1.
- **Trim untuk menjaga ≤1.600 kata**: merapikan lead (hapus "akan ledakan"), paragraf H2 #2 (aplikasi), kalimat konteks "Merah Putih", penutup H2 #5, dan CTA — net article 1.600 kata (dari 1.577 draft + tambahan GEO, diseimbangkan kembali ke ceiling).
- **Update `word_count` 1577→1600**.

## What I flagged (open issues)
- ⚠️ **Paragraf burstiness CV 0.337** — di atas ambang bahaya 0.30 (tidak lagi "strong tell") tapi di bawah ideal 0.45. *Rekomendasi*: dapat diterima untuk artikel B2B teknis padat yang duduk di ceiling kata; bila ada revisi konten mendatang, satu-dua paragraf medium bisa dipecah lagi untuk menaikkan variasi. Bukan blocker.
- ⚠️ **Word count di ceiling (1.600)** — tidak ada ruang tambah kata tanpa trim. *Rekomendasi*: jaga panjang jika ada penyuntingan lanjutan.
- ℹ️ **Fakta insiden Sukabumi**: berita awal menyebut "cylinder valve patah" (dugaan polisi), sementara artikel mengikuti temuan resmi KNKT (korosi internal + kalibrasi manometer kedaluwarsa) — penanganan yang benar (sumber otoritatif > dugaan awal). Tidak perlu tindakan.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — nol
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — nol
- [x] No "Penting untuk dicatat / dipahami bahwa" — nol
- [x] "Dengan demikian" not overused — nol di body
- [x] Em-dash count ≤2 — actual: 1
- [x] Varied paragraph lengths — CV 0.337 (naik dari 0.297 pasca-fix)
- [x] Not every H2 → 3-bullet list — mix prosa/tabel/numbered/bullet
- [x] No generic claims without numbers — angka spesifik di 6+ tempat (0,55–0,80; ~540°C; 5–15%; 200/250 bar; 5–10 bar; 2 tewas/7 luka; Des 2022)
- [x] No stacked hype adjectives — tidak ada
- [x] No service-dump paragraph — 1 anchor closing + 1 aside

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Auto-ignition metana "sekitar 540°C (variasi 537–600°C)" | dossier ✓ (hedge persis) | pass |
| Tekanan "sekitar 200 bar acuan, sebagian hingga 250 bar" (bukan rentang resmi tunggal) | dossier ✓ + ESDM Ditjen Migas | pass |
| SNI 7407:2009 = standar *cara uji* peralatan konversi BBG, bukan desain tabung | dossier ✓ (edge case) | pass |
| Insiden KNKT Sukabumi 2023: 2 tewas/7 luka; korosi internal + kalibrasi kedaluwarsa Des 2022 | dossier ✓ + knkt.go.id + multi-media | pass |
| Interval inspeksi berkala TIDAK diklaim angka spesifik ("dirujuk ke ketentuan resmi") | dossier ✓ (flag dihormati) | pass |
| ISO 11439:2013 → kategori CNG-1 s.d. CNG-4, 200 bar acuan; Type 2/3 hibrida | dossier ✓ + iso.org | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 47 / "Keselamatan CNG" di posisi 0
- [x] Meta description 140–160 — actual: 158
- [x] Slug ≤60, kebab-case, keyword — actual: keselamatan-cng-spesifikasi-tabung-standar (42)
- [x] H1 contains keyword — "Keselamatan CNG" (varian CNG)
- [x] H2 count 4–5 body — actual: 5 (+FAQ +Kesimpulan)
- [x] ≥1 question-format H2 (#1, #3); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — "CNG di Indonesia" + "keselamatan CNG" di lead
- [x] Definition snippet near top (40–60 words) — blockquote "Ringkas:" ~58 kata
- [x] ≥8 LSI terms — counted: 20+ (ISO 11439, Type 1–4, Lemigas, solenoid, PRD, auto-ignition, flammability, burst test, hidrostatik, bejana tekanan, korosi, KNKT, carbon fiber, SNI 7407, Permenaker, densitas, kalibrasi, dll.)
- [x] 3 internal links (1 hub + 2 cousins) — perusahaan-cng-indonesia (hub, lead) / gasku / gaslink
- [x] ≥1 external authoritative citation — actual: 3 (ESDM Ditjen Migas, Lemigas jurnal, KNKT)
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 3
- [x] ≥1 list + ≥1 table — numbered list (fitur), bullet list (sifat fisik), tabel Type 1–4
- [x] Word count 1,200–1,600 — actual: 1,600

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer setelah tiap major H2 — H2 #1: 48, #2: 57, #3: 52, #4: 49, #5: 47 (semua dalam band pasca-fix)
- [x] Tiap paragraf body membuat satu poin quotable & verifiable
- [x] FAQ parseable untuk FAQPage schema; `dateModified`/freshness di meta — ditambahkan (2026-07-08)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas sebagai provider/operator gas-energi (mengoperasikan/menyalurkan) — BUKAN memproduksi
- [x] ≤3 self-mentions — actual: 2 (aside H2 #3 + closing)
- [x] No unverifiable superlatives ("terbaik/nomor satu") — nol
- [x] Nama produk + spec CNG cocok product_matrix.md / dossier (CNG, ISO 45001:2018, K3)
- [x] Closing pakai positioning line company_profile (anak usaha PGN / Subholding Gas Pertamina)
- [x] Soft website CTA sebagai FINAL line setelah conclusion (kunjungi gagas.co.id; tone konsultatif)
- [x] Hub link sebagai natural inline anchor di lead ("CNG di Indonesia") — bukan BACA JUGA

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `apa-itu-cng-compressed-natural-gas-cara-kerja` (part-1 cng-indonesia-01)
- Subtopic overlap (Jaccard estimate): ~0.12 (hanya tekanan 200–250 bar + satu baris FAQ keamanan yang berbagi)
- Verdict: distinct angle confirmed — part-1 mengajarkan "apa/cara kerja CNG"; artikel ini mengajarkan "apakah aman & bagaimana keamanannya dijaga" (tipe tabung, ISO 11439, uji Lemigas, fitur katup, insiden KNKT). Territori keselamatan-teknis sepenuhnya baru.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran clean; `cng-indonesia-02.id.quality-input.json` written (2 kali; final pasca-fix)
- [x] AI-detector score < 0.30 — actual: **0.04** (turun dari 0.15 pasca perbaikan burstiness)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.337** (naik dari 0.297; flag high→low); sentence burstiness 0.757; vocab top30 0.30
- [x] Plagiarism: 8 kandidat distinctive di-web-check; tidak ada verbatim non-Gagas ≥20 kata — plagiarism score: **0.05**
  - Kandidat tekanan 200/250 bar, ISO 11439 CNG-1/CNG-4, auto-ignition 540°C/5–15%, definition snippet: fakta cocok = common-knowledge gas-safety, TIDAK ada frasa persis di halaman lain (quoted-string search nihil).
  - Kandidat insiden Sukabumi 2023: fakta dikorroborasi multi-media & KNKT, tapi kalimat kita orisinal (bukan lifted passage).
  - Verdict: PASS — abaikan hit pada fakta well-known & berita publik sesuai aturan.
