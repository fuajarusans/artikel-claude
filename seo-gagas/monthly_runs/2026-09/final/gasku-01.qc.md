---
brief_id: "gasku-01"
editor_run_date: "2026-09-21"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Garansi & Asuransi Mobil BBG (Gasku): Yang Wajib Dicek Sebelum Konversi

## Recommendation
**approve**

Artikel ini decision-useful, jujur, dan bebas dari AI tells. Ia menyatukan dua sudut administratif (garansi pabrikan + asuransi PSAKBI) yang tidak dijawab tuntas oleh tiga kompetitor teratas — persis celah yang ditarget brief — dengan struktur ekstraktabel (jawaban 40–60 kata di bawah tiap H2, tabel komponen, langkah bernomor, FAQ 6 butir). Semua hedge kritis dihormati: PGN Gagas diframekan sebagai penyalur BBG lewat SPBG (bukan produsen gas, bukan pihak yang mensertifikasi bengkel), tidak ada angka Rupiah converter kit yang dikarang, PSAKBI Pasal 8 diatribusikan ke AAUI (bukan kutipan verbatim), kebijakan garansi tidak dikaitkan ke merek ATPM tertentu, dan tidak ada superlatif. Skor AI-detector 0,04 dan tidak ada jiplakan verbatim non-Gagas. Dua penghalusan kecil diterapkan in-place; tidak ada isu terbuka yang menghalangi commit.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Nol AI-opener; ritme paragraf bervariasi; satu duplikasi "Kabar baiknya" diperbaiki. Para-burstiness CV 0,362 (di atas ambang tell 0,30; di bawah ideal 0,45). |
| Factual & energi-gas / CNG accuracy | 9 | 5/5 spot-check lolos vs dossier; harga Rp 4.500/LSP, PSAKBI 7 hari, UU 22/2009 Pasal 52/277 (Rp 24 juta), Permenperin 70/2012 semuanya akurat & teratribusi. |
| On-page SEO compliance | 9 | Meta title 50, desc 155, slug 47; 3 internal + 2 external link; tabel + 2 list; FAQ 6; word count dalam rentang. |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata di bawah tiap H2 utama; definition snippet; FAQ FAQPage-ready; `date_modified` ditambahkan. |
| PGN Gagas framing discipline | 10 | Penyalur BBG via SPBG (bukan produsen, bukan sertifikator bengkel); 2 self-mention + CTA; tanpa superlatif; positioning line di penutup. |
| Internal linking | 9 | Hub `Gasku` di lead; cousin CNG + Gaslink inline natural; tanpa "BACA JUGA". |
| FAQ quality | 9 | 6 Q&A selaras PAA brief; tiap jawaban ~45–60 kata, mandiri, memuat satu angka/fakta. |
| Originality (plagiarism + AI-detector) | 9 | AI 0,04; nol verbatim ≥20 kata non-Gagas; klausul PSAKBI adalah parafrase teks-standar teratribusi. |

## What I fixed (changelog)
- Menghilangkan duplikasi opener "Kabar baiknya," (muncul di §"Apa yang Sebenarnya Terjadi" dan §"Yang Jarang Dibahas") — pembuka H2 #5 diubah menjadi "Untungnya, ..." agar tidak terbaca berulang.
- Menambahkan `date_modified: "2026-09-21"` ke meta block untuk sinyal freshness/GEO (§2a).
- Menyelaraskan `word_count` frontmatter (1424 → 1423) mengikuti hasil edit.
- (Terverifikasi dari partial final sebelumnya, dipertahankan) dua tautan eksternal otoritatif inline: Permenperin 70/2012 → peraturan.go.id; PM 39/2012 → jdih.kemenhub.go.id.

## What I flagged (open issues)
- ⚠️ Para-burstiness CV 0,362 — di atas ambang AI-tell (0,30) namun di bawah target ideal 0,45. *Recommendation*: bukan penghalang commit; jika ada revisi berikutnya, pecah 1–2 paragraf 3-kalimat menjadi 1-kalimat untuk menaikkan variasi. Tidak diubah sekarang karena ritme sudah lolos ambang dan pemecahan lebih jauh berisiko memotong argumen legal yang perlu utuh.
- ⚠️ "SNI ISO 7407:2009" & rincian PM 39/2012 bersumber sekunder (dossier confidence medium). Sudah diframekan hati-hati ("standar seperti ...", "bengkel bersertifikat dengan teknisi kompeten") — tidak ada klaim angka teknisi literal. Aman ditayangkan.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (nol kemunculan)
- [x] No "Penting untuk dicatat / dipahami bahwa"
- [x] "Dengan demikian" not overused (nol)
- [x] Em-dash count ≤2 (nol em-dash prosa; hanya di frontmatter YAML & 1 sel tabel "—" sebagai penanda N/A)
- [x] Varied paragraph lengths (1–6 kalimat; CV 0,362)
- [x] Not every H2 → 3-bullet list (campuran prosa, tabel, list bernomor, list butir)
- [x] No generic claims without numbers (Rp 4.500/LSP, 7 hari, Rp 24 juta, SNI ISO 7407:2009, dst.)
- [x] No stacked hype adjectives
- [x] No service-dump paragraph (satu anchor Gasku + satu cousin Gaslink kontekstual)

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Gasku Rp 4.500/LSP, stabil sejak IIMS Feb 2024 → 2025 | dossier ✓ (Kompas/Detik, high) | pass |
| PSAKBI Pasal 8: lapor perubahan risiko ≤7 hari kalender; penanggung boleh lanjut/naik/hentikan premi | dossier ✓ + WebSearch (klausul standar AAUI, dikonfirmasi lintas sumber) | pass |
| UU 22/2009 Pasal 52 (uji tipe ulang) + Pasal 277 (denda ≤Rp 24 juta) | dossier ✓ (high) | pass |
| Permenperin 70/M-IND/PER/7/2012 wajibkan converter kit/tangki CNG ber-SNI/ISO | dossier ✓ + peraturan.go.id | pass |
| Sistem Gasku bi-fuel/reversibel via switch BBM–BBG | dossier ✓ (gagas.co.id + CNBC, high) | pass |
| (Framing) PGN Gagas menyalurkan BBG via SPBG, bukan produsen/sertifikator bengkel | dossier flag #7 + company_profile ✓ | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 50 / "Gasku" pada posisi 0
- [x] Meta description 140–160 — actual: 155
- [x] Slug ≤60, kebab-case, keyword — actual: `gasku-garansi-asuransi-mobil-bbg-pasca-konversi` (47)
- [x] H1 contains keyword ("Gasku")
- [x] H2 count 4–5 konten — actual: 5 (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#2, #4); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words (kata ke-3)
- [x] Definition snippet near top (blockquote "Ringkas:", ~55 kata)
- [x] ≥8 LSI terms — counted: 17 (converter kit, ECU bi-fuel, PSAKBI Pasal 8, ATPM, SPBG, CNG, BBG, uji tipe ulang, endorsement polis, Permenperin 70/2012, SNI ISO 7407:2009, PM 39/2012, UU 22/2009, garansi powertrain, dll.)
- [x] 3 internal links — destinations: gasku/ (hub, lead), perusahaan-cng-indonesia/, gaslink/
- [x] ≥1 external authoritative citation — actual: 2 inline (peraturan.go.id, jdih.kemenhub.go.id) + Toyota-Astra/AAUI di frontmatter
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 3 (IMAGE_01/02/03, tiap-tiap dengan alt Bahasa Indonesia)
- [x] ≥1 list + ≥1 table — actual: 1 tabel komponen + 1 list bernomor (5 langkah) + 1 list butir (3 skenario)
- [x] Word count 1,200–1,600 — actual: ~1.423 (frontmatter) / 1.467 (scanner, inklusif heading+tabel)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (H2 #1 ~48, #2 ~55, #3 ~44, #4 ~52, #5 ~55)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `date_modified` (2026-09-21) ditambahkan ke meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas = penyalur/pelayan BBG lewat SPBG (menyalurkan/menyediakan), BUKAN produsen gas & BUKAN sertifikator bengkel (sertifikasi = wewenang Kemenhub, teratribusi ke PM 39/2012)
- [x] ≤3 PGN Gagas self-mentions — actual: 2 ("PGN Gagas" di aside H2 #5 + Kesimpulan) + CTA gagas.co.id
- [x] No unverifiable superlatives ("terbaik/nomor satu/termurah") — nol
- [x] Energi-gas / CNG product names + specs match dossier/product_matrix (Gasku transportasi; Gaslink industri/komersial; SPBG; Rp 4.500/LSP; bi-fuel)
- [x] Closing uses a company_profile positioning line ("Lewat Gasku ... dan Gaslink ..., PGN Gagas menyalurkan energi gas bumi ... beyond pipeline")
- [x] Soft website CTA sebagai baris FINAL setelah Kesimpulan (undang kunjungan gagas.co.id; konsultatif, bukan "beli sekarang")
- [x] Hub link natural inline di lead (anchor "Gasku"), bukan callout "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `kapan-kendaraan-belum-cocok-pakai-bbg-gasku` (2026-07-gasku-03)
- Subtopic overlap (Jaccard estimate): ~0,15 (hanya konsep "garansi" & "SPBG" beririsan; PSAKBI, klaim asuransi, garansi powertrain per-OEM, endorsement polis, reversibilitas seluruhnya baru)
- Verdict: distinct angle confirmed — artikel ini fokus mekanisme garansi + asuransi pasca-konversi (administratif/legal), bukan kriteria go/no-go teknis.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `gasku-01.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: 0.04 (verdict pass; satu flag low: paragraph-low-variance CV 0,362)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: 0,362 (sentence CV 0,675; top-30 vocab share 0,309)
- [x] Plagiarism: 8 passage distinctif dicek; tidak ada verbatim ≥20 kata non-Gagas
  - Klausul PSAKBI Pasal 8 → parafrase teks-standar polis (well-known legal clause, teratribusi AAUI) — bukan lift verbatim.
  - "garansi & asuransi bisa dijaga bersamaan lewat lima langkah" → nol verbatim match.
  - "tidak ada satu pun ATPM ... membatalkan seluruh garansi" → nol verbatim match (justru angle kebalikan dari kompetitor).
  - Sisanya berupa nomor/judul regulasi (fakta hukum) & heading — bukan objek plagiarisme.
  - plagiarism score: 0.05

## The shipping question
Jika tayang di gagas.co.id besok dan dibaca praktisi energi/gas senior sekaligus pembeli industri yang skeptis: ya, WEBARQ Promote bisa bangga — artikel menjawab ketakutan administratif nyata dengan hedging jujur, dasar hukum tepat, dan tanpa over-claim vendor. **Approve.**
