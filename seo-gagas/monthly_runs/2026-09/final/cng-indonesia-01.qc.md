---
brief_id: "cng-indonesia-01"
editor_run_date: "2026-09-21"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — CNG Indonesia: Jalan Menekan Impor dan Subsidi LPG

## Recommendation
**approve**

Draf ini masuk dalam kondisi kuat dan lolos semua gerbang mutu setelah perbaikan ringan di tempat. Tidak ada AI tell (0 em-dash, tidak ada pembuka klise, tidak ada "Selain itu" beruntun), skor AI-detector 0,04, dan burstiness CV 0,323 (di atas ambang editor 0,30). Seluruh angka fiskal/energi terlacak ke dossier dengan hedge yang benar-benar dipertahankan: dua angka ketergantungan impor (75–80% pernyataan menteri vs 83,97% data resmi) disajikan sebagai tren berlabel tanggal; devisa Rp120–150 triliun diatribusikan eksplisit ke Menteri ESDM; pagu subsidi Rp80,3 triliun dibedakan dari realisasi berjalan Rp118,7 triliun; klaim "hemat 30%" dan status roadmap dilabeli simulasi/tahap kajian; ironi tabung Type-4 masih impor dari China ikut disebut. Framing PGN Gagas tepat (distributor CNG *beyond-pipeline*, bukan produsen, bukan perumus kebijakan; 2 self-mention; tanpa superlatif). Angle fiskal/devisa/substitusi-impor berbeda jelas dari klaster cng-indonesia yang sudah ada. Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dash; tidak ada AI tell; ritme paragraf bervariasi; CV 0,323 |
| Factual & energi-gas / CNG accuracy | 9 | 5/5 klaim uji lolos vs dossier; semua hedge kritis dipertahankan |
| On-page SEO compliance | 9 | Meta/slug/H2/LSI/link semua patuh; 1 tautan eksternal inline (min terpenuhi) |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata setelah tiap H2; satu poin terkutip per paragraf; snippet definisi rapi |
| PGN Gagas framing discipline | 10 | Distributor beyond-pipeline; 2 mention; tanpa superlatif; "bukan merumuskan kebijakan" |
| Internal linking | 10 | Hub di lead + 2 cousin inline; tanpa "BACA JUGA" |
| FAQ quality | 9 | 6 Q&A (tambah 1 ketahanan energi), tiap jawaban 40–80 kata, ber-angka |
| Originality (plagiarism + AI-detector) | 9 | ai=0,04; plagiarism heuristik rendah (tanpa WebSearch — lihat §F) |

## What I fixed (changelog)
- **Akurasi fiskal (lead)**: "membakar puluhan triliun rupiah devisa" → "membakar lebih dari seratus triliun rupiah devisa" — menyelaraskan hook dengan figur Rp120–150 triliun yang diatribusikan di H2 #3 (mencegah understatement yang bisa diketok pembaca skeptis).
- **Glos akronim (style §3)**: menambah "MMSCFD (juta standar kaki kubik per hari)" pada penggunaan pertama di H2 #4.
- **Glos akronim (style §3)**: item daftar #4 di H2 #4 menjadi "BBG (Bahan Bakar Gas) untuk transportasi via Gasku/SPBG".
- **FAQ ditambah 1** (5 → 6): "Bagaimana CNG membantu ketahanan energi nasional?" — menutup PAA inti brief + tema utama artikel (ketahanan energi), memperkuat GEO; jawaban 62 kata, ber-angka, tanpa em-dash.
- **Frontmatter GEO freshness**: menambah `date_modified: "2026-09-21"` (seo_playbook §2a).
- **Frontmatter akurasi**: `word_count` 1356 → 1421 (mencerminkan panjang final sesudah edit).

## What I flagged (open issues)
- ⚠️ **Tautan eksternal in-body tinggal 1** (siaran pers ESDM 27 Apr 2026). Angka subsidi Rp80,3 triliun sudah diatribusikan sebagai teks ke "Nota Keuangan RAPBN 2026 (Kementerian Keuangan)" tetapi tidak di-hyperlink. *Rekomendasi*: opsional inline-kan sumber Kemenkeu/RAPBN untuk citation ke-2; memenuhi minimum ≥1 apa adanya, jadi tidak memblokir.
- ⚠️ **SPBG tidak diekspansikan** pada penggunaan pertama. *Rekomendasi*: istilah sangat lazim di klaster ini; boleh dibiarkan, atau glos "SPBG (Stasiun Pengisian Bahan Bakar Gas)" bila ingin sempurna.
- ⚠️ **word_count adalah perkiraan**: prosa-only ~1363 kata, termasuk sel tabel ~1475; angka frontmatter 1421 berada di antaranya. Semua di dalam pita 1.200–1.600. *Rekomendasi*: tidak perlu tindakan.
- ⚠️ **Plagiarism dinilai heuristik-only** (tanpa WebSearch — anggaran habis; lihat §F). Kandidat tidak menunjukkan lift verbatim non-Gagas ≥20 kata.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (0 kemunculan)
- [x] No "Penting untuk dicatat / dipahami bahwa"
- [x] "Dengan demikian" not overused (0 kemunculan)
- [x] Em-dash count ≤2 — **actual: 0**
- [x] Varied paragraph lengths (campuran 1–5 kalimat; bukan blok simetris)
- [x] Not every H2 → 3-bullet list (1 numbered list, 1 tabel, sisanya prosa)
- [x] No generic claims without numbers (angka spesifik di 15+ titik)
- [x] No stacked hype adjectives (canggih/powerful/terdepan tidak ada)
- [x] No service-dump paragraph (1 anchor Gaslink di aside + 1 di penutup)

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Ketergantungan impor LPG 80,58% (2025) → 83,97% (Jan–Feb 2026); menteri sebut 75–80% | dossier ✓ (ESDM/Investortrust + Liputan6); disajikan berlabel periode | pass |
| Kilang domestik 1,6–1,9 juta ton/th vs konsumsi 8,5–8,9 juta ton/th | dossier ✓ | pass |
| Devisa impor LPG Rp120–150 triliun/th, diatribusikan ke Menteri ESDM Bahlil | dossier ✓ (atribusi eksplisit sesuai flag) | pass |
| Subsidi LPG 3 kg Rp80,3 T (pagu RAPBN 2026, +14,52% dari ~Rp68,7 T 2025); realisasi Rp118,7 T s/d Mar 2026 | dossier ✓ (pagu vs realisasi dibedakan) | pass |
| Surplus gas 1.715 MMSCFD (NGI 2023–2032); "hemat 30%" = simulasi; jargas 4 juta SR ≈ −6,15% impor, hemat ~Rp2,69 T | dossier ✓ (semua dilabeli proyeksi/simulasi) | pass |

Tidak ada nama produk/spesifikasi karangan; tidak ada tanggal regulasi keliru; framing PGN Gagas tidak mengklaim produksi gas atau perumusan kebijakan.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — **actual: 46 char; "CNG Indonesia" pada char 1–13**
- [x] Meta description 140–160 — **actual: 146**
- [x] Slug ≤60, kebab-case, keyword — **actual: cng-indonesia-tekan-impor-subsidi-lpg (37)**
- [x] H1 contains keyword ("CNG Indonesia")
- [x] H2 count 4–5 — **actual: 5 H2 isi** (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#2, #3, #4, #5); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words (kalimat ke-2 lead)
- [x] Definition snippet near top (blockquote ~48 kata)
- [x] ≥8 LSI terms — **counted: ~12** (substitusi impor LPG, subsidi LPG 3 kg, ketahanan energi, kemandirian energi, devisa, gas bumi domestik, roadmap konversi, jargas, Neraca Gas, BBG, Mother Station, MMSCFD)
- [x] 3 internal links (1 hub + 2 cousins) — **destinations: perusahaan-cng-indonesia (hub, lead), perusahaan-lng-indonesia, gaslink**
- [~] ≥1 external authoritative citation — **actual: 1 inline (ESDM) + 1 di meta block (Kemenkeu/Bloombergtechnoz)** — memenuhi minimum; lihat flag
- [x] FAQ 5–7 Q&As — **actual: 6**
- [x] 2 image placeholders (up to 3) — **actual: 3 (IMAGE_01/02/03), tiap ada alt Bahasa Indonesia**
- [x] ≥1 list + ≥1 table — **1 numbered list + 1 tabel neraca**
- [x] Word count 1,200–1,600 — **actual: ~1.363 prosa / ~1.475 termasuk tabel**

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (H2 #1 ~50w, #2 ~48w, #3 ~46w, #4 ~42w, #5 ~40w)
- [x] Each body paragraph makes one independently quotable, verifiable point (satu klaim + fakta bersumber)
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-09-21` ada di meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas dibingkai sebagai penyedia/distributor CNG (menyalurkan/menghadirkan gas bumi), BUKAN produsen; penutup tegas "bukan merumuskan kebijakan"
- [x] ≤3 (di sini ≤2) PGN Gagas self-mentions — **actual: 2** (aside Gaslink di H2 #4 + positioning di Kesimpulan) + CTA gagas.co.id
- [x] No unverifiable superlatives ("terbaik/nomor satu") — tidak ada
- [x] Nama produk + spesifikasi cocok product_matrix.md / dossier (Gaslink via GTM; CNG 200–400 bar; NGI 1.715 MMSCFD)
- [x] Closing memakai baris positioning company_profile.md (anak usaha PGN / Subholding Gas Pertamina, distributor CNG beyond-pipeline)
- [x] Soft website CTA sebagai baris TERAKHIR, setelah Kesimpulan (undang kunjungi gagas.co.id; tone konsultatif, bukan "beli sekarang")
- [x] Hub link sebagai anchor inline alami di lead ("CNG di Indonesia") — bukan callout "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior articles for this keyword: `cng-3kg-tabung-merah-putih-pengganti-lpg` (cng-06, produk 3 kg) dan `cng-transisi-energi-indonesia` (cng-05, sumbu iklim/NZE); klaster cng-indonesia lain (apa itu CNG, CNG vs LNG vs LPG, manfaat, beyond-pipeline, global-vs-Indonesia, kualitas udara) tidak menyentuh sumbu fiskal.
- Subtopic overlap (Jaccard estimate): **~0,15–0,18** — inti subtopik (neraca impor, subsidi APBN, devisa, roadmap konversi) absen di artikel sebelumnya. Angle "kualitas gas / Wobbe / nilai kalor" yang ditahan Agustus TIDAK dipakai (terverifikasi).
- Verdict: **distinct angle confirmed**

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `cng-indonesia-01.id.quality-input.json` written
- [x] AI-detector score < 0.30 — **actual: 0.04** (verdict pass)
- [x] Paragraph burstiness CV ≥ 0.30 — **actual: 0.323** (1 flag [low] paragraph-low-variance; di atas ambang editor 0,30 meski di bawah target ideal skrip 0,45; ai_score total tetap 0,04 → clear)
- [~] Plagiarism: **heuristic-only (no WebSearch — budget exhausted)**, per kebijakan degraded mode. 8 kandidat ditinjau manual: seluruhnya (a) kalimat faktual ber-angka yang disusun ulang dari dossier (mis. ReforMiner 10,98%/2,40%; kilang 1,6–1,9 juta ton; pagu Rp80,3 T), (b) kalimat yang memuat URL ESDM tersitasi (diabaikan per kebijakan), atau (c) heading FAQ boilerplate. Tidak ada lift verbatim non-Gagas ≥20 kata yang terindikasi. **plagiarism_score (heuristik): 0.05**
