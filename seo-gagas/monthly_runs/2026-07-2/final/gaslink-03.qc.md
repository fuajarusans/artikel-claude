---
brief_id: "gaslink-03"
editor_run_date: "2026-07-08"
recommendation: "approve"
overall_score: 9
ai_score: 0.08
plagiarism_score: 0.03
---

# Editor QC Report — Gaslink & Dekarbonisasi: Turunkan Emisi Scope 1 Industri

## Recommendation
**approve**

Artikel ini memenuhi seluruh bar kualitas: suara manusia yang jujur-terhedge (bagian "Batas Kejujuran" dan klarifikasi pajak karbon adalah pembeda E-E-A-T yang jarang ada di konten vendor), akurasi faktual penuh terhadap dosir, struktur GEO yang kuat (jawaban 40–45 kata di bawah tiap H2), dan originalitas bersih (AI-detector 0,08; nol kecocokan verbatim non-Gagas). Masalah utama pada draf adalah **panjang: 1695 kata, di atas plafon 1600**. Saya rapatkan ke **1579 kata** (di dalam band 1.200–1.600) sambil mempertahankan setiap must-keep: 3 tautan internal, kutipan EIA/ESDM/IEA, definition snippet, kelima H2 + jawaban 40–60 kata, tiga tabel, numbered list, H2 jujur, FAQ (dipangkas dari 8 ke 7, masih di sweet spot 5–7), Kesimpulan + CTA soft, dan ketiga {IMAGE_NN}. Yang paling kritis: semua hedge yang rawan salah kaprah dipertahankan persis — pajak karbon **belum berlaku** (ditunda dua kali, sasaran awal PLTU batu bara), angka emisi industri **kontestasi** (Kemenperin 238,1 Mt vs IESR >400 Mt, dua-duanya diatribusikan), dan "gas menurunkan emisi tapi bukan net zero". Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Nol AI-opener, nol "Selain itu"/"Dengan demikian"/"Penting untuk dicatat", 0 em-dash di prosa; paragraf & kalimat bervariasi; hedge lapangan yang otentik. |
| Factual & energi-gas / CNG accuracy | 10 | 5/5 klaim cocok dosir; hedge kritis (pajak karbon, angka kontestasi, metana/GWP) dipertahankan persis; WebSearch mengkorroborasi setiap fakta kebijakan. |
| On-page SEO compliance | 9 | Meta title 47, desc 142, slug 44, keyword di semua slot; 5 H2 body; snippet definisi; 3 link internal; FAQ 7; 3 gambar; tabel+list. |
| GEO extractability (§2a) | 9 | Jawaban 41–45 kata langsung di bawah tiap H2 body; satu poin quotable per paragraf; FAQ FAQPage-ready. |
| PGN Gagas framing discipline | 9 | Penyedia/distributor gas bumi ("memposisikan/menyalurkan"), bukan produsen; ≤3 self-mention; tanpa superlatif; positioning line + CTA soft ke gagas.co.id. |
| Internal linking | 9 | Hub `Gaslink` sebagai anchor inline di lead; cousin `gasku` + `perusahaan-cng-indonesia` natural di Kesimpulan. Tanpa "BACA JUGA". |
| FAQ quality | 9 | 7 Q&A, tiap jawaban 40–57 kata, self-contained, mencerminkan PAA; satu FAQ redundan (cara hitung jejak karbon) dibuang saat pemangkasan. |
| Originality (plagiarism + AI-detector) | 10 | AI 0,08 (pass); 4 pasase paling distinctive di-WebSearch, nol verbatim ≥20 kata non-Gagas. |

## What I fixed (changelog)
- **LENGTH (utama): 1695 → 1579 kata.** Pemangkasan menyeluruh tanpa menghapus must-keep: merapatkan kalimat flabby di lead, kelima H2, dan Kesimpulan (120 → 103 kata); menghapus **satu FAQ redundan** ("Bagaimana cara menghitung jejak karbon dari bahan bakar industri?" — duplikat H2 #3), sehingga FAQ jadi 7 (tetap di sweet spot 5–7); memangkas kalimat sumber yang dobel dengan caption tabel; mengetatkan step numbered-list. Semua jawaban GEO tetap 41–45 kata (≥40).
- Frontmatter: `word_count` 1695 → 1579; `target_word_count` 1400 → 1550 (menyelaraskan dengan brief).
- Tidak mengubah angka, atribusi, atau hedge apa pun — semua fakta dosir dipertahankan verbatim.

## What I flagged (open issues)
- ⚠️ **Angka IESR >400 Mt CO2e (2022) belum diverifikasi langsung dari halaman IESR** (dosir flag: WebFetch iesr.or.id 403 saat riset). Di artikel sudah di-frame dengan hedge tepat ("kajian IESR **memperkirakan** angkanya melampaui 400 juta ton") dan disandingkan dengan angka resmi Kemenperin 238,1 Mt — *rekomendasi*: aman untuk publish; bila ingin presisi maksimal, tim dapat verifikasi ulang ke IESR sebelum go-live. Tidak memblokir approve karena sudah diatribusi + di-hedge.
- ⚠️ **Kutipan otoritatif eksternal ada di frontmatter `external_citations`, bukan sebagai hyperlink inline di prosa** (atribusi tekstual inline sudah ada: "US EIA", "Kementerian ESDM, Desember 2023", "Menurut IEA", "GHG Protocol (WRI dan WBCSD)"). Konsisten dengan sibling gaslink-01/02 & konvensi pipeline (CMS memakai field frontmatter). *Rekomendasi*: tidak ada aksi; sudah memenuhi E-E-A-T.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — nihil
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — nihil (hanya "Selain untuk"? tidak; tidak ada "Selain itu")
- [x] No "Penting untuk dicatat / dipahami bahwa" — nihil
- [x] "Dengan demikian" not overused — nihil
- [x] Em-dash count ≤2 — **0 di prosa** (5 total, semua di {IMAGE_NN} design-brief + 1 sel tabel "— (baseline)"; bukan tell prosa)
- [x] Varied paragraph lengths — 1-kalimat s/d 5-kalimat bercampur; CV burstiness 0,442
- [x] Not every H2 → 3-bullet list — H2 memimpin dengan prosa; hanya H2 #3 pakai numbered list, plus tabel di #2/#5
- [x] No generic claims without numbers — angka spesifik di 6+ tempat (52,91/62,88/74,14; 28,6%/15,9%; 32%/912 Mt; 358 Mt; Rp30/kg; 238,1 Mt; 400 Mt; 35%)
- [x] No stacked hype adjectives — tidak ada "canggih/powerful/seamless/terdepan"
- [x] No service-dump paragraph — hanya satu anchor Gaslink di Kesimpulan

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Faktor emisi 52,91 / 62,88 / 74,14 kg CO2/MMBtu (EIA, data 2022) | dossier ✓ (ln 21–33) + product_matrix ✓ | pass |
| Pengurangan ~28,6% vs solar, ~15,9% vs LPG (perhitungan berbasis EIA) | dossier ✓ (ln 36–44) | pass |
| E-NDC 29%→32% / 835→912 Mt CO2 (2030); sektor energi 358 Mt (ESDM, Des 2023) | dossier ✓ (ln 51–59) + WebSearch ESDM | pass |
| Pajak karbon Rp30/kg CO2e **belum berlaku**, ditunda 2×, awal PLTU batu bara | dossier ✓ (ln 71–79) + WebSearch (merdeka/pajak.go.id konfirmasi ditunda 2×, PLTU-only) | pass |
| Emisi GRK industri: Kemenperin 238,1 Mt vs IESR >400 Mt (2022), atribusi ganda | dossier ✓ (ln 91–99, 180) | pass |

Catatan: hedge "gas turunkan emisi tapi bukan net zero", metana/GWP 20-th (IEA), dan "SIH tidak mewajibkan gas bumi" juga diverifikasi akurat vs dosir (ln 101–104, 86–89). Framing PGN Gagas benar (penyedia/distributor, bukan produsen).

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **47**/keyword "Gaslink" di pos 0
- [x] Meta description 140–160 — actual: **142**
- [x] Slug ≤60, kebab-case, keyword — actual: `gaslink-dekarbonisasi-emisi-scope-1-industri` (44)
- [x] H1 contains keyword — "Gaslink & Dekarbonisasi..."
- [x] H2 count 4–5 — actual: **5 body H2** (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1, #4) ; ≥1 honest/counter-conventional H2 (#5 "Batas Kejujuran")
- [x] Keyword in first 100 words — "Gaslink" di kalimat ke-3 lead (anchor)
- [x] Definition snippet near top (40–60 words) — blockquote "Ringkasnya" (60 kata)
- [x] ≥8 LSI terms — counted: **15+** (dekarbonisasi, Scope 1, fuel switching, faktor emisi, NZE, E-NDC, NEK, pajak karbon, SIH, ESG, metana, bridge fuel, GHG Protocol, CNG, MMBtu…)
- [x] 3 internal links (1 hub + 2 cousins) — hub `gaslink` (lead), `gasku`, `perusahaan-cng-indonesia`
- [x] ≥1 external authoritative citation — actual: **3** (EIA, ESDM, IEA; atribusi inline + frontmatter)
- [x] FAQ 5–7 Q&As — actual: **7**
- [x] 2 image placeholders (up to 3) — actual: **3** ({IMAGE_01/02/03})
- [x] ≥1 list + ≥1 table — 1 numbered list + 3 tabel
- [x] Word count 1,200–1,600 — actual: **1579**

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — 45/41/42/42/41 kata (semua ≥40)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; freshness — `publish_month: 2026-07` di meta block; angka bertanggal (EIA 2022/Sep 2024, ESDM Des 2023, IEA 2025)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed sebagai penyedia/mitra energi gas ("memposisikan gas bumi sebagai energi transisi", "layanan Gaslink diposisikan mendukung...") — NOT produsen
- [x] ≤3 self-mentions — actual: **2 momen** (anchor `Gaslink` di lead + klaster Kesimpulan "PGN Gagas" + "layanan Gaslink")
- [x] No unverifiable superlatives ("terbaik/nomor satu") — nihil
- [x] Energi-gas / CNG names + specs match product_matrix / dossier — CNG, Gaslink, faktor emisi EIA semua akurat
- [x] Closing uses a company_profile.md positioning line — parafrase baris "energi transisi yang lebih bersih dan hemat…memperkaya bauran energi nasional"
- [x] Soft website CTA as FINAL line — "…kunjungi gagas.co.id." (baris terakhir, setelah Kesimpulan, konsultatif)
- [x] Hub link natural inline anchor (lead), descriptive — [Gaslink] di lead; bukan "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior articles (keyword_slug=gaslink): gaslink-01 (apa itu / informational), gaslink-02 (vs LPG vs solar / biaya-efisiensi / comparison), gaslink-03 lama (industri cocok / how-to).
- Subtopic overlap (Jaccard estimate): **~0.18** — bersinggungan hanya pada entitas "faktor emisi CO2" & "solar/LPG vs gas" (gaslink-02 memakainya untuk BIAYA; artikel ini untuk DEKARBONISASI/ESG). Subtopik NDC/NZE, NEK, pajak karbon, Scope 1/2/3, SIH, pelaporan emisi seluruhnya baru.
- Verdict: **distinct angle confirmed** (angle `dekarbonisasi-esg-fuel-switching-gas-bumi`, hash sha1:9cdbc3157a74, unik vs history). Catatan: `id` history 2026-07-gaslink-03 lama berbeda artikel (batch bulan sebelumnya) — bukan konflik konten.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran clean; `gaslink-03.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.08** (verdict: pass). 2 flag [low]: paragraph-CV 0,442 (target ≥0,45; praktis di target) & vocab-repetition 37,3% (didorong domain: "emisi/gas bumi/Scope/karbon" wajib berulang — bukan AI tell).
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.442** (sentence burstiness 0,569) — jauh di atas 0,30
- [x] Plagiarism: 4 pasase paling distinctive di-WebSearch (EIA figures, H2 dekarbonisasi, hedge pajak karbon, SIH) — **nol kecocokan verbatim ≥20 kata di halaman non-Gagas**; hasil web justru mengkorroborasi fakta. plagiarism score: **0.03**
