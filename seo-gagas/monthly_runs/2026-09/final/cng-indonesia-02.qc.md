---
brief_id: "cng-indonesia-02"
editor_run_date: "2026-09-21"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — CNG vs Pipa Gas: Ekonomi di Balik Infrastruktur Energi

## Recommendation
**approve**

Draft yang matang dan siap kirim. Sudut ekonomi infrastruktur (capex/opex/titik impas) digarap jujur dua arah — termasuk H2 counter-conventional "Kapan Pipa Gas Tetap Lebih Ekonomis" yang jarang ditulis kompetitor. Semua angka energi-gas (22.821 km, Dumai–Sei Mangkei 400 km/Rp6,6 triliun/2027, RIJTDGBN Kepmen 10.K/2023, Cisem II Juni 2026, tekanan 200–250 bar) cocok dengan dossier, dan setiap hedge kritis dari dossier dihormati: angka Dumai diberi catatan "kerap direvisi", RIJTDGBN 2024–2033 disebut "masih sosialisasi", angka "USD 42–65 tabung" TIDAK dipakai, tidak ada angka breakeven-km yang dikarang, dan klaim penghematan HSD first-party tidak diselundupkan sebagai fakta pasar. Framing PGN Gagas benar (distributor/menyalurkan CNG beyond-pipeline, bukan produsen), 2 self-mention saja (sesuai batas ≤2 untuk intent informasional), tanpa superlatif. Anti-AI bersih (AI-detector 0.04), on-page + GEO lengkap. Perbaikan in-place bersifat penguatan, bukan struktural.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Lead pain-hook konkret (manajer pabrik pesisir Sulawesi); ritme bervariasi; AI-detector 0.04. Tidak ada opener/transisi AI. |
| Factual & energi-gas / CNG accuracy | 10 | 5/5 klaim terverifikasi vs dossier + product_matrix; semua hedge dossier dipatuhi. |
| On-page SEO compliance | 9 | Meta title 45, desc 148, slug 37; 5 H2 (question + counter-conventional); 3 internal + 2 eksternal otoritatif. |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata setelah tiap H2; satu poin quotable/paragraf; FAQ FAQPage-ready; dateModified ditambahkan. |
| PGN Gagas framing discipline | 10 | Distributor/menyalurkan CNG; 2 self-mention; positioning line pre-approved; tanpa superlatif. |
| Internal linking | 9 | Hub di lead (inline), 2 cousin (Gaslink, LNG) kontekstual; tanpa "BACA JUGA". |
| FAQ quality | 9 | 6 Q&A (naik dari 5); tiap jawaban 40–80 kata, memuat angka/fakta. |
| Originality (plagiarism + AI-detector) | 9 | AI 0.04; plagiarism heuristik rendah (no WebSearch — budget habis). |

## What I fixed (changelog)
- **Menambah 1 FAQ** — "Apakah virtual pipeline CNG hanya solusi sementara?" (sumber: jawaban ter-draft di dossier), menaikkan FAQ 5 → 6 dan menutup PAA counter-conventional. Ditulis ulang tanpa em-dash agar hitungan em-dash tetap 2.
- **Frontmatter `target_word_count` 1400 → 1550** — menyelaraskan dengan target di brief (draft memakai konstanta template 1400).
- **Frontmatter `word_count` 1435 → 1494** — akurat setelah penambahan FAQ (body ~1.541 kata termasuk heading/tabel; prosa-only 1.331; semua di dalam pita 1.200–1.600).
- **Menambahkan `date_modified: "2026-09-21"`** ke meta block untuk sinyal kesegaran GEO (§2a) yang belum ada di draft.

## What I flagged (open issues)
- ⚠️ Keyword utama "CNG Indonesia" hadir sebagai varian natural ("CNG di Indonesia" di lead + "CNG" di paragraf akhir), bukan frasa persis di 100 kata pertama / paragraf terakhir. *Rekomendasi*: dibiarkan demi kealamian (intent informasional; title + meta sudah eksak). Bukan blocker.
- ⚠️ Burstiness CV = 0,433 — di atas ambang editor (≥0,30) tetapi sedikit di bawah target internal skrip (0,45). *Rekomendasi*: tidak perlu tindakan; variasi paragraf sudah sehat, AI-score 0,04.
- ⚠️ Cek plagiarisme **heuristik-only (no WebSearch — budget exhausted)**, sesuai kebijakan degraded-mode. *Rekomendasi*: bila anggaran pulih, verifikasi cepat 8 kandidat; penilaian heuristik sudah menunjukkan risiko rendah.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — 0 hit
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 hit
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hit
- [x] "Dengan demikian" not overused — 0 hit
- [x] Em-dash count ≤2 — actual: 2
- [x] Varied paragraph lengths (1–6 kalimat, tidak simetris)
- [x] Not every H2 → 3-bullet list — campuran prosa, numbered list, bullet list, tabel
- [x] No generic claims without numbers — 6+ angka spesifik
- [x] No stacked hype adjectives — nihil
- [x] No service-dump paragraph — hanya 1 anchor relevan (Gaslink/GTM)

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Jaringan pipa gas nasional ~22.821 km (naik dari 13.764 km 2018) | dossier ✓ (BPH Migas) | pass |
| Dumai–Sei Mangkei 400 km, Rp6,6 triliun, target 2027 (ESDM Jan 2024) + hedge "kerap direvisi" | dossier ✓ (esdm.go.id) + flag dipatuhi | pass |
| RIJTDGBN 2022–2031 (Kepmen ESDM 10.K/MG.01/MEM.M/2023), 6 wilayah, Barat pipa/Timur LNG; catatan 2024–2033 "sosialisasi" | dossier ✓ (migas.esdm.go.id) + flag dipatuhi | pass |
| Cisem Tahap II beroperasi penuh sejak Juni 2026 | dossier ✓ (6 Juni 2026) | pass |
| CNG dikompresi 200–250 bar; GTM/Mother Station/PRS | dossier ✓ + product_matrix ✓ (first-party gagas.co.id) | pass |
| (Negatif) Tidak memakai "USD 42–65 tabung", tidak mengarang breakeven-km, tidak menyajikan klaim hemat HSD sbg fakta pasar | dossier flags dipatuhi | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — 45 chars, "CNG" di posisi 1
- [x] Meta description 140–160 — 148 chars, memuat "CNG Indonesia" + capex/opex/titik impas
- [x] Slug ≤60, kebab-case, keyword — `cng-vs-pipa-gas-ekonomi-infrastruktur` (37)
- [x] H1 contains keyword — "CNG vs Pipa Gas: ..."
- [x] H2 count 4–5 — 5 (di luar FAQ & Kesimpulan)
- [x] ≥1 question-format H2 (#2,#3,#4); ≥1 honest/counter-conventional H2 (#5)
- [~] Keyword in first 100 words — varian "CNG di Indonesia" + "CNG" (bukan frasa persis; soft-pass)
- [x] Definition snippet near top (40–60 words) — blockquote "Secara singkat"
- [x] ≥8 LSI terms — 12+ (virtual pipeline, capex, opex, GTM, anchor demand, utilisasi, beyond pipeline, titik impas, Mother Station, PRS, RIJTDGBN, LNG)
- [x] 3 internal links (1 hub + 2 cousins) — perusahaan-cng-indonesia (hub, lead) + gaslink + perusahaan-lng-indonesia
- [x] ≥1 external authoritative citation — 2 inline (BPH Migas, migas.esdm) + 1 di frontmatter (esdm.go.id)
- [x] FAQ 5–7 Q&As — 6
- [x] 2 image placeholders — IMAGE_01, IMAGE_02 (dengan alt-text)
- [x] ≥1 list + ≥1 table — numbered + bullet + 1 tabel perbandingan
- [x] Word count 1,200–1,600 — ~1.541 (body), 1.543 (skrip)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban 40–60 kata langsung setelah tiap H2 mayor (#1–#5) — terverifikasi manual
- [x] Tiap paragraf body memuat satu poin quotable + fakta tersumber
- [x] FAQ parseable untuk FAQPage schema; `date_modified: 2026-09-21` ada di meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas = penyedia/distributor gas-energi (menyalurkan/menghadirkan CNG beyond-pipeline), BUKAN produsen
- [x] ≤3 self-mention — actual: 2 ("PGN Gagas": aside H2 #4 + Kesimpulan)
- [x] Tanpa superlatif ("terbaik/nomor satu")
- [x] Nama produk/spek cocok product_matrix.md/dossier (Gaslink, GTM, Mother Station, PRS)
- [x] Closing memakai positioning line company_profile.md (anak usaha PGN / Subholding Gas Pertamina)
- [x] Soft website CTA sebagai baris TERAKHIR setelah Kesimpulan (kunjungi gagas.co.id; konsultatif)
- [x] Hub link sebagai anchor inline natural di lead — bukan callout "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior article: `cng-beyond-pipeline-gas-bumi-tanpa-pipa` (2026-07 cng-indonesia-04) — MEKANIKA distribusi.
- Sibling September: cng-indonesia-01 (substitusi impor/subsidi LPG), cng-indonesia-03 (Bio-CNG terbarukan) — sudut berbeda.
- Subtopic overlap (Jaccard estimate): ~0.20 vs cng-04 (berbagi konsep "virtual/beyond pipeline & geografi kepulauan"; inti capex/opex/breakeven/utilisasi/TCO baru).
- Verdict: **distinct angle confirmed** — artikel ini EKONOMI, bukan mekanika, bukan perbandingan produk. Angle "kualitas gas/Wobbe/nilai kalor" (held Agustus) tidak disentuh.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `cng-indonesia-02.id.quality-input.json` ditulis
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict: pass)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.433** (flag [low] vs target internal skrip 0.45; di atas ambang editor)
- [~] Plagiarism: **heuristik-only (no WebSearch — budget exhausted)**. 8 kandidat ditinjau manual dari output skrip:
  - #1 nama resmi regulasi (judul lengkap RIJTDGBN) → entity name; match hanya di ESDM (diabaikan per kebijakan).
  - #2/#3 fakta Dumai–Sei Mangkei (numerik + atribusi ESDM) → klaim tersumber, prosa asli; #3 pengulangan internal fakta di FAQ (normal).
  - #4 fakta 22.821 km (atribusi BPH Migas) → statistik publik, frasa asli.
  - #5 pembagian Wilayah I–III + Cisem II → sintesis kebijakan, frasa asli.
  - #6 positioning line PGN Gagas → kalimat pre-approved company_profile.md (match hanya di gagas.co.id, diabaikan).
  - #7/#8 pernyataan tekno-ekonomi umum → konsep generik, frasa asli.
  - Tidak ada passage kreatif khas pihak ketiga; `candidate_score` = heuristik panjang passage, bukan skor kemiripan. **plagiarism_score heuristik: 0.05** (risiko rendah). Tidak ada indikasi lift verbatim ≥20 kata dari halaman non-Gagas.
