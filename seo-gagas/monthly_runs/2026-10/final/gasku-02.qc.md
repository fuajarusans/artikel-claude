---
brief_id: "gasku-02"
editor_run_date: "2026-09-28"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Truk & Bus Diesel Pakai Gasku? Menimbang Retrofit Dual-Fuel (DDF)

## Recommendation
**approve**

Draft yang matang dan disiplin. Semua fakta berisiko tinggi ditangani persis sesuai hedge dossier: rasio substitusi solar-gas disajikan sebagai rentang (30–90% akademik; ~45:55 uji domestik), klaim hemat "hingga 30%" dan emisi "15–20% vs 40%" dibingkai sebagai klaim bersumber (bukan jaminan), dan target nasional "1.000 truk/bus" serta "89/200/300 mobil tangki" diatribusikan eksplisit ke PGN (induk) dan Pertamina Patra Niaga — bukan PGN Gagas. Framing Gagas konsisten sebagai penyalur BBG/CNG sisi pasokan lewat SPBG/MRU, bukan produsen atau pemasang converter kit. Tidak ada angka Rupiah/spesifikasi yang dikarang. Anti-AI scan bersih (skor detektor 0,04), on-page + GEO lolos. Dua perbaikan minor diterapkan in-place (menautkan 2 sumber otoritatif; menghaluskan Anglicisme "figur"). Layak tayang di gagas.co.id untuk dibaca operator armada maupun pembeli industri yang skeptis.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tidak ada opener AI, tidak ada em-dash, ritme paragraf & kalimat bervariasi (sentence burstiness 0,714). |
| Factual & energi-gas / CNG accuracy | 10 | 7 klaim dicek vs dossier + product_matrix; semua lolos, semua hedge dihormati. |
| On-page SEO compliance | 9 | Meta title 47, meta desc 153, slug 31; keyword di posisi wajib; 3 internal + 2 eksternal (ditautkan saat QC). |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata langsung di bawah tiap H2; satu poin quotable per paragraf; FAQ FAQPage-ready. |
| PGN Gagas framing discipline | 10 | 2 self-mention + CTA situs; penyalur/penyedia sisi pasokan, no superlatif, no klaim produsen. |
| Internal linking | 9 | Hub (Gasku) di lead + 2 cousin (CNG, Gaslink) inline natural; tanpa "BACA JUGA". |
| FAQ quality | 9 | 6 Q&A, tiap jawaban 40–80 kata, mengandung angka/fakta, cocok skema. |
| Originality (plagiarism + AI-detector) | 9 | AI 0,04 (pass); kandidat plagiarisme hanya definisi umum/fakta regulasi/data dossier. |

## What I fixed (changelog)
- Menautkan 2 sumber otoritatif yang sebelumnya hanya disebut inline tanpa hyperlink (memenuhi seo_playbook §3 "1–2 external authoritative links"): "Ditjen Migas ESDM" → rilis peresmian DDF migas.esdm.go.id; "(Antara, 30 Januari 2023)" → antaranews.com. Keduanya sudah tercantum di `external_citations` frontmatter.
- Menghaluskan Anglicisme "figur maksimum" → "angka maksimum dari klaim program, bukan patokan tetap per unit" (§3 tone) di H2 #2 dan FAQ #3.
- Memperbarui `word_count` frontmatter 1449 → 1498 (hitungan `quality-check.ps1` setelah edit).

## What I flagged (open issues)
- ⚠️ Plagiarism dicek **heuristik-only (tanpa WebSearch)** sesuai instruksi run. Skor 0,05 berbasis sifat kandidat (definisi umum + fakta regulasi + data dossier), bukan verifikasi SERP verbatim — *rekomendasi*: bila kuota WebSearch tersedia, lakukan cek verbatim atas 3 kandidat teknis (rasio 30–90%, uji "engkel" 45:55, Permenhub 39/2012) untuk kepastian penuh; risiko dinilai rendah.
- ⚠️ `dateModified` tidak ada di meta block (skema §7 memang tidak mendefinisikannya; kesegaran diwakili `publish_month: 2026-10`) — *rekomendasi*: CMS mengisi `dateModified` saat publish untuk prioritas sitasi GEO.
- ⚠️ Fakta uji domestik "45% solar : 55% gas" muncul di H2 #2 dan FAQ #2 (pengulangan internal wajar untuk FAQ, bukan plagiarisme) — biarkan; hanya catatan.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs
- [x] No "Penting untuk dicatat / dipahami bahwa"
- [x] "Dengan demikian" not overused (0 kemunculan)
- [x] Em-dash count ≤2 (0 em-dash "—"; rentang memakai en-dash yang sah)
- [x] Varied paragraph lengths (1–6 kalimat; sentence burstiness 0,714)
- [x] Not every H2 → 3-bullet list (campuran prosa, tabel, numbered, bullet)
- [x] No generic claims without numbers
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan)
- [x] No service-dump paragraph

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Peresmian DDF mobil tangki Pertamina 27 Des 2022, hemat "hingga 30%" | dossier ✓ (Core facts) + product_matrix (Gasku) | pass |
| Rasio substitusi 30–90% (akademik), ~10% di putaran rendah, ~45:55 uji domestik | dossier ✓ (disajikan sebagai rentang, sesuai flag) | pass |
| Emisi DDF 15–20% (Antara) vs "40%" = perbandingan umum gas vs BBM (Katadata) | dossier ✓ (flag emisi dihormati) | pass |
| Target 1.000 truk/bus (PGN induk) + 89/200/300 mobil tangki (Pertamina Patra Niaga) | dossier ✓ + flag atribusi — **tidak** diklaim sebagai Gagas | pass |
| Tekanan CNG "200–250 bar" sebagai rentang | dossier ✓ (flag 200 vs 250 bar dihormati) | pass |
| Legalitas: Permenhub PM 39/2012 (berlaku) + Permenperin 70/2012 + SNI | dossier ✓ | pass |
| Gagas = penyalur BBG via SPBG/MRU, bukan pemasang kit/produsen | product_matrix ✓ + dossier (edge cases) | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 47/pos 1
- [x] Meta description 140–160 — actual: 153
- [x] Slug ≤60, kebab-case, keyword — actual: gasku-truk-diesel-dual-fuel-ddf (31)
- [x] H1 contains keyword (Gasku)
- [x] H2 count 4–5 — actual: 5 konten (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#2, #4); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words (Gasku, kalimat ke-5 lead)
- [x] Definition snippet near top (blockquote "Ringkas:", ~55 kata)
- [x] ≥8 LSI terms — counted: 13 (DDF, rasio substitusi, converter kit, tabung kaskade, MRU, CNG, BBG niaga, SPBG, compression-ignition, spark-ignition, payload, duty-cycle, kalibrasi)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: gasku (lead), perusahaan-cng-indonesia (H2#1), gaslink (H2#3)
- [x] ≥1 external authoritative citation — actual: 2 (migas.esdm, antaranews) ditautkan saat QC
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 2 ({IMAGE_01}, {IMAGE_02}) dengan alt-text
- [x] ≥1 list + ≥1 table — numbered (tahapan) + bullet (H2#5) + tabel (kriteria)
- [x] Word count 1,200–1,600 — actual: 1498

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (semua 5 H2 dibuka dengan jawaban langsung sebelum elaborasi)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; freshness via `publish_month` (dateModified = tugas CMS, di-flag)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas framed as gas-energy provider/partner (menyalurkan/menyediakan sisi pasokan), NOT producing/installing kit
- [x] ≤3 PGN Gagas self-mentions — actual: 2 ("PGN Gagas" di H2#3 aside + Kesimpulan) + CTA situs gagas.co.id
- [x] No unverifiable superlatives (tidak ada "terbaik/nomor satu")
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier (Gasku, SPBG, MRU, CNG, DDF)
- [x] Closing uses a company_profile.md positioning line ("anak usaha PGN, bagian dari Subholding Gas Pertamina")
- [x] Soft website CTA present as FINAL line, after conclusion ("mulai diskusinya di gagas.co.id" — konsultatif, bukan "beli sekarang")
- [x] Hub link present as natural inline anchor in lead ([Gasku]), descriptive — bukan "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `gasku-matriks-kompatibilitas-kendaraan-bbg` (2026-08-gasku-07) — DDF hanya 1 dari 10 subtopik (baris matriks kompatibilitas semua kendaraan).
- Subtopic overlap (Jaccard estimate): ~0,2 (irisan: DDF, CNG, SPBG, converter-kit-SNI sebagai konteks). Fokus baru artikel ini — rasio substitusi, tabung kaskade & payload, kriteria kelayakan armada berat, "kapan DDF belum masuk akal" — seluruhnya tak dibahas gasku-07.
- Verdict: distinct angle confirmed (via index.json + by_keyword; tanpa web sesuai instruksi).

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `gasku-02.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: 0.04 (verdict pass)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: 0.431 (lolos ambang editor 0,30; flag "low" hanya karena target stretch skrip 0,45; sentence burstiness 0,714; top30 vocab share 0,29)
- [x] Plagiarism: **heuristic-only (no WebSearch per instruksi run).** 8 kandidat diekstrak — semuanya definisi umum ("DDF adalah…"), fakta regulasi (Permenhub 39/2012), atau data teknis dossier (rasio 30–90%, uji "engkel" 45:55, sertifikasi lintas-K/L). Tidak ada prosa distingtif yang mengindikasikan lift verbatim dari halaman non-Gagas. plagiarism score (heuristik): 0.05.
