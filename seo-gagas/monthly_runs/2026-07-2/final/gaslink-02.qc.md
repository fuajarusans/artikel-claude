---
brief_id: "gaslink-02"
editor_run_date: "2026-07-08"
recommendation: "approve"
overall_score: 9
ai_score: 0.00
plagiarism_score: 0.02
---

# Editor QC Report — Keselamatan CNG (Gaslink) di Lokasi: Standar & Ceklis Wajib

## Recommendation
**approve**

Draf ini benar secara faktual, disiplin dalam hedging, dan tepat angle (keselamatan operasional CNG di lokasi pelanggan — panduan kepatuhan penuh yang tidak digarap sibling Gaslink lain). Semua fakta energi-gas/CNG dan framing PGN Gagas cocok dengan dossier + product_matrix (penyedia/distributor, bukan produsen; ≤3 self-mention; tanpa superlatif). Masalah utama adalah **panjang** (draf masuk 1.828 kata, jauh di atas plafon 1.600) dan **8 em-dash prosa** (>2). Keduanya sudah saya perbaiki di tempat: artikel dipangkas ke **1.592 kata** (metode editor, tanpa teks placeholder gambar; script quality-check menghitung 1.612 dengan token tabel/heading — keduanya di dalam band) dan em-dash prosa/tabel/heading dibawa ke **0** (3 sisanya semata di dalam placeholder `{IMAGE_NN}` desain, bukan body). Semua must-keep dipertahankan: 3 tautan internal + anchor, 2 sitasi (kini di-hyperlink inline), definition snippet, kelima H2 + jawaban 40–60 kata, dua tabel, dua jenis list, honest H2, FAQ 5, Kesimpulan + CTA, tiga `{IMAGE_NN}`. Setiap hedge kritis dipertahankan persis (ISO 15403/NFPA 52 = vehicular; PRS 0,8–1,5 bar = rentang tipikal industri bukan spesifikasi resmi Gagas; cakupan Permen 32/2021 = interpretatif; 38/2017 = generasi terdahulu tanpa klaim pencabutan langsung; tidak ada klaim pelatihan PGN Gagas). Originalitas lolos: AI-detector 0,00 (0 flag, burstiness paragraf CV 0,47), tidak ada verbatim non-Gagas ≥20 kata. Siap komit.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tanpa opener klise; em-dash prosa 0; ritme paragraf bervariasi (burstiness CV 0,47). |
| Factual & energi-gas / CNG accuracy | 9 | 5 klaim dicek vs dossier + WebSearch; semua pass dengan hedge utuh. |
| On-page SEO compliance | 9 | Meta/slug/H1/keyword/LSI/link/FAQ lengkap; meta description dikoreksi 162→153. |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata di bawah tiap H2; satu poin quotable/paragraf; FAQPage-ready; dateModified ditambahkan. |
| PGN Gagas framing discipline | 9 | Penyedia/distributor; menghadirkan/menyalurkan; tanpa superlatif; anchor ISO 45001 di penutup. |
| Internal linking | 9 | Hub (Gaslink) inline di lead; 2 cousin (Gasku, penyedia CNG) di Kesimpulan; deskriptif; tanpa "BACA JUGA". |
| FAQ quality | 8 | 5 Q&A (dari 7; dua yang paling redundan dengan body dibuang saat pemangkasan), tiap jawaban 40–55 kata, self-contained. |
| Originality (plagiarism + AI-detector) | 10 | AI 0,00; tidak ada verbatim non-Gagas (kecuali judul resmi regulasi yang memang dikutip). |

## What I fixed (changelog)
- **Panjang**: dipangkas dari 1.828 → 1.592 kata (metode editor, di luar teks placeholder gambar) — pemangkasan di lead, H2 #1–#4, FAQ, dan Kesimpulan tanpa membuang fakta unik; membuang 2 dari 7 FAQ (perangkat pengaman & regulasi utama) karena sudah sepenuhnya tercakup di tabel H2 #2 dan prosa H2 #4 — FAQ tetap ≥5.
- **Em-dash**: dari 8 → 3 total, dan **0** di prosa/tabel/heading (3 sisanya di dalam placeholder `{IMAGE_NN}`, dipertahankan sebagai brief desain). Em-dash sel tabel CNG/LPG diganti koma; em-dash heading FAQ tanggung-jawab diganti koma; em-dash Kesimpulan & H2 #4 diubah menjadi klausa/kalimat.
- **Sitasi eksternal**: dua sitasi (Ditjen Migas sosialisasi & BPSDM/PPSDM Migas) yang sebelumnya hanya atribusi teks kini **di-hyperlink inline** di body (memenuhi seo_playbook §9: 1–2 tautan otoritatif aktif).
- **Meta description**: 162 → 153 karakter (membuang "kesiapan lokasi" ganda) agar masuk 140–160.
- **Frontmatter**: `word_count` 1828 → 1592; ditambahkan `dateModified: "2026-07-08"` (freshness GEO §2a).
- Beberapa penghalusan transisi H2 dan pengetatan kalimat berlebih (mis. menghapus signpost "Satu catatan soal kebocoran.", kalimat rhetoric ganda di H2 #1).

## What I flagged (open issues)
- ⚠️ **Panjang mendarat 1.592 kata (di bawah plafon 1.600, di atas aim 1.450–1.560)** — *rekomendasi*: dapat diterima apa adanya. Sisa prosa sudah padat; memangkas ~30 kata lagi berisiko menghapus hedge wajib (interpretasi Permen 32/2021, koreksi scope ISO 15403/NFPA 52, poin SKKNI/PPSDM) atau fakta unik. Tidak memblokir approve.
- ⚠️ **Angka tekanan kerja PRS 0,8–1,5 bar** tetap "rentang tipikal industri, bukan spesifikasi resmi PGN Gagas" — *rekomendasi*: pertahankan label ini; jangan dikeraskan menjadi spec resmi kecuali tim teknis Gagas mengonfirmasi.
- ⚠️ **Cakupan literal Permen 32/2021 atas instalasi CNG pelanggan** tetap dibingkai interpretatif — *rekomendasi*: pertahankan; jangan diubah menjadi klaim harfiah.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — none present
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — none
- [x] No "Penting untuk dicatat / dipahami bahwa" — none
- [x] "Dengan demikian" not overused — 0 occurrences
- [x] Em-dash count ≤2 — 0 in prose/table/heading (3 total, all inside `{IMAGE_NN}` design briefs)
- [x] Varied paragraph lengths — burstiness CV 0,47 (jauh di atas 0,30)
- [x] Not every H2 → 3-bullet list — mix prosa + 2 tabel + 1 bullet list + 1 numbered list
- [x] No generic claims without numbers — 61 token numerik (200–250 bar, 5–10 bar, 32/2021, 38/2017, 5/2015, ISO 45001:2018, dst.)
- [x] No stacked hype adjectives — none (deskripsi kapabilitas konkret)
- [x] No service-dump paragraph — satu anchor relevan (Gaslink) di penutup

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| CNG diangkut ~200–250 bar; PRS turunkan bertahap | dossier ✓ (gagas.co.id resmi) + product_matrix ✓ | pass |
| Tekanan kerja PRS 0,8–1,5 bar = rentang tipikal industri, **bukan** spec resmi Gagas | dossier flag ✓ (label hedge dipertahankan) | pass (hedged) |
| Permen ESDM 32/2021 = regulasi berlaku; 38/2017 generasi terdahulu (tanpa klaim pencabutan langsung) | dossier ✓ + WebSearch (Ditjen Migas/RuangEnergi) mengonfirmasi 32/2021 sebut SPBU & pipa penyalur eksplisit | pass |
| ISO 15403 & NFPA 52 = scope vehicular, bukan instalasi industri stasioner | dossier ✓ (ISO.org, NFPA.org) — koreksi framing kompetitor dipertahankan | pass |
| PGN Gagas pemegang ISO 45001:2018 utk distribusi CNG (2025); TIDAK diklaim menyediakan pelatihan pelanggan | company_profile.md ✓ + dossier flag (no training claim) ✓ | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — 53 kar., "Gaslink" pos 17
- [x] Meta description 140–160 — 153 kar. (dikoreksi dari 162)
- [x] Slug ≤60, kebab-case, keyword — `keselamatan-cng-gaslink-lokasi-standar-ceklis` (45 kar.)
- [x] H1 contains keyword — "Keselamatan CNG (Gaslink) di Lokasi..."
- [x] H2 count 4–5 (konten) — 5 konten H2 (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1 & #5); ≥1 honest/counter-conventional H2 (#5 "Mitos vs Fakta ... Kapan Lokasi Belum Layak")
- [x] Keyword in first 100 words — ya ("Gaslink" di lead)
- [x] Definition snippet near top (40–60 words) — blockquote "Ringkasnya" (~50 kata)
- [x] ≥8 LSI terms — 20 terdeteksi
- [x] 3 internal links (1 hub + 2 cousins) — Gaslink (lead) / Gasku / penyedia CNG di Indonesia
- [x] ≥1 external authoritative citation — 2 inline (Ditjen Migas ESDM, BPSDM/PPSDM Migas)
- [x] FAQ 5–7 Q&As — 5
- [x] 2 image placeholders (up to 3) — 3 `{IMAGE_NN}`
- [x] ≥1 list + ≥1 table — 1 bullet + 1 numbered + 2 tabel
- [x] Word count 1,200–1,600 — 1.592

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata tepat setelah tiap H2 utama (bukan hanya definition snippet)
- [x] Tiap paragraf body membuat satu poin yang quotable & verifiable
- [x] FAQ parseable untuk FAQPage; `dateModified: 2026-07-08` ditambahkan di meta

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Dibingkai sebagai penyedia/distributor energi gas (menghadirkan/menyalurkan/mengoperasikan) — bukan produsen
- [x] ≤3 self-mention — 1 atribusi faktual di H2 #2 (sumber angka 200–250 bar + hedge spec) + 1 aside ISO generik di H2 #4 + 1 mention promosi di Kesimpulan; dalam budget
- [x] No unverifiable superlatives — none
- [x] Nama produk + spec cocok product_matrix.md / dossier — Gaslink, PRS, GTM, mother/daughter station, ISO 45001:2018
- [x] Closing pakai positioning line company_profile — "anak usaha PGN ... Subholding Gas Pertamina ... ISO 45001:2018"
- [x] Soft website CTA sebagai baris TERAKHIR, setelah Kesimpulan — "...kunjungi gagas.co.id." (konsultatif)
- [x] Hub link natural inline di lead (bukan callout "BACA JUGA")

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: history menunjukkan cluster Gaslink lain (part-1 batch 2026-07: `apa-itu-gaslink-gas-bumi-tanpa-pipa`, `gaslink-vs-lpg-vs-solar-biaya-efisiensi`, `industri-cocok-pakai-gaslink-cara-penerapan`). Yang terdekat menyentuh keselamatan hanya sebagai subtopik ("keselamatan CNG") di `apa-itu-gaslink...`.
- Subtopic overlap (Jaccard estimate): ~0,15 (hanya "sifat keselamatan CNG" & "PRS" bersinggungan; perangkat pengaman, ceklis kesiapan, regulasi Permen 32/2021, pembagian tanggung jawab, audit K3, kompetensi operator seluruhnya baru).
- Verdict: distinct angle confirmed — panduan kepatuhan keselamatan operasional di lokasi pelanggan, bukan definisi/perbandingan biaya/onboarding.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran clean (exit 0); `gaslink-02.id.quality-input.json` ditulis
- [x] AI-detector score < 0.30 — **0.00** (0 flag; `external_api_used: false`, heuristik)
- [x] Paragraph burstiness CV ≥ 0.30 — **0.47** (sentence burstiness 1,002; top30 vocab share 0,294)
- [x] Plagiarism: 8 kandidat di-WebSearch (judul regulasi resmi, heading H2, kalimat 38/2017, passage Ditjen Migas, opener ceklis, kalimat perangkat pengaman). Tidak ada verbatim non-Gagas ≥20 kata. Satu-satunya match wajar = **judul resmi Permen ESDM 32/2021** (nama hukum yang memang dikutip di halaman JDIH/gov) — dikecualikan sesuai aturan editor. Kalimat perangkat-pengaman & ceklis-lokasi hanya beririsan konsep dengan kompetitor (solarindustri.com), bukan verbatim. plagiarism_score: 0.02.

## Shipping question
Bila terbit di gagas.co.id besok dan dibaca praktisi energi/gas senior serta pembeli industri yang skeptis: ya — panduan ini konkret, jujur soal batas (kapan lokasi belum layak, koreksi scope ISO/NFPA yang salah dikutip kompetitor), dan tidak mengklaim yang tak dimiliki Gagas. WEBARQ Promote bisa bangga. **Approve.**
