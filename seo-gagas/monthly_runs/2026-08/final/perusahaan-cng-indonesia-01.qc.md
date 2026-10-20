---
brief_id: "perusahaan-cng-indonesia-01"
editor_run_date: "2026-08-11"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Pengadaan CNG untuk Dapur MBG & Instansi: Memilih Perusahaan CNG di Indonesia

## Recommendation
**approve**

Artikel ini siap dikomit. Sudut pengadaan sektor publik (SPPG/MBG, e-Katalog LKPP, jalur pengadaan) benar-benar baru terhadap cluster `perusahaan-cng-indonesia` dan menjawab intent decision dengan jujur. Yang terpenting untuk run ini: semua hedge kritis yang diminta **bertahan** meski writer mati saat final polish — tidak ada kutipan Perpres 26/2026 (dan draft malah membingkai "penunjukan langsung" dengan benar sebagai tunduk pada kriteria umum pengadaan, bukan aturan energi tersendiri), kasus Rembang 25–30% diatribusikan tegas ke PT Rembang Migas Energi (BUMD) "bukan PGN Gagas", larangan LPG 3 kg dibingkai sebagai pernyataan Kepala BGN (27 Juli 2026) tanpa nomor regulasi karangan, harga Rp10.000/m³ diomit, dan skema "CNG Merah Putih" 3 kg tidak dikonflasikan sama sekali. Fakta angka Boyolali/Batam cocok dengan dossier dan terkonfirmasi WebSearch langsung. AI-detector 0.04 dan tidak ada verbatim non-Gagas ≥20 kata. Saya menerapkan tiga polish in-place (2 tautan eksternal otoritatif, satu kalimat Rembang dirapikan agar hedge makin jelas, word_count diperbarui) — tidak ada isu yang tersisa untuk writer/strategist.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | AI score 0.04; sentuhan manusia nyata ("Ini sering disalahpahami", "Buktinya sudah ada di lapangan", "Sanksinya tidak main-main"). Satu flag low-variance paragraf (CV 0.353) — di atas floor 0.30, dibiarkan. |
| Factual & energi-gas / CNG accuracy | 10 | 6 klaim di-spot-check vs dossier + WebSearch langsung; semua pass. Semua hedge kritis bertahan. |
| On-page SEO compliance | 9 | Meta title 51, desc 158, slug 44, 5 H2 isi, 6 FAQ, tabel+2 list, 3 internal + 2 eksternal. Freshness lewat `publish_month`; tidak ada field `dateModified` terpisah (CMS-level). |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata tepat setelah tiap H2; poin quotable per paragraf; FAQ FAQPage-ready; tabel jalur mudah diekstrak baris-per-baris. |
| PGN Gagas framing discipline | 10 | Framing penyedia/distributor CNG beyond-pipeline; 3 sebutan (satu di antaranya disambiguasi Rembang); tanpa superlatif; positioning line di Kesimpulan. |
| Internal linking | 10 | Hub di lead + 2 cousin (Gaslink, LNG) sebagai anchor inline natural; tanpa "BACA JUGA". |
| FAQ quality | 9 | 6 Q&A, 40–80 kata, hedging jujur pada angka penghematan, atribusi Rembang benar. |
| Originality (plagiarism + AI-detector) | 10 | AI 0.04; tidak ada verbatim non-Gagas ≥20 kata dari 4 passage paling distinctive yang dicek. |

## What I fixed (changelog)
- Menambah tautan eksternal otoritatif ke **CNN Indonesia** pada atribusi larangan BGN (sebelumnya hanya teks) — memenuhi §9 external-link + memperkuat E-E-A-T pada premis inti artikel.
- Menambah tautan eksternal otoritatif ke **JDIH LKPP (Perpres 46/2025)** pada penyebutan ambang Rp200 juta — sumber pemerintah, mendukung kerangka pengadaan.
- Merapikan kalimat Rembang: "PT Rembang Migas Energi (RME), BUMD Kabupaten Rembang dan bukan PGN Gagas, mengklaim..." → "...adalah PT Rembang Migas Energi (RME), sebuah BUMD Kabupaten Rembang **(bukan PGN Gagas)**, yang mengklaim..." — grammar lebih rapi, hedge atribusi makin eksplisit (tidak menambah em-dash).
- Memperbarui frontmatter `word_count` 1435 → **1437** sesuai hitung ulang atas final.

## What I flagged (open issues)
- ⚠️ **`dateModified` tidak eksplisit di meta block** (hanya `publish_month: 2026-08`) — *recommendation*: cukup untuk sinyal freshness saat ini; CMS sebaiknya mengisi `dateModified` saat publish. Konsisten dengan artikel cluster sebelumnya; bukan blocker.
- ⚠️ **Flag low-variance paragraf (CV 0.353, target skrip ≥0.45)** — *recommendation*: dibiarkan. CV di atas floor tell editor (0.30) dan AI-detector 0.04; memaksa variasi lebih jauh berisiko merusak struktur padat B2B tanpa manfaat orisinalitas nyata.
- ⚠️ **Status pendaftaran penyedia di e-Katalog** — draft sudah membingkai dengan benar ("kategori CNG tersedia, tetapi tidak semua penyedia terdaftar; cek langsung di portal LKPP"). Tidak ada klaim "PGN Gagas terdaftar di e-Katalog" — sesuai flag dossier. Tidak perlu tindakan.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — lead membuka pada pain konkret (larangan BGN)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 kemunculan
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 kemunculan
- [x] "Dengan demikian" not overused — 0 kemunculan
- [x] Em-dash count ≤2 — **1 em-dash di badan prosa** (definition snippet); 2 lainnya hanya separator dalam caption `{IMAGE_NN}` (design-brief, bukan prosa)
- [x] Varied paragraph lengths — campuran 1–2 kalimat (jawaban pasca-H2) dan 4–5 kalimat (lead, body)
- [x] Not every H2 → 3-bullet list — hanya H2 #3 memakai bullet; sisanya prosa/numbered/tabel
- [x] No generic claims without numbers — angka spesifik di 6+ tempat (2.000–3.000 m³, 6.000 porsi, 34 sekolah, 10 dapur, Rp200 juta, 15–30%, 25–30%)
- [x] No stacked hype adjectives — tidak ada "canggih/powerful/terdepan"
- [x] No service-dump paragraph — hanya anchor Gaslink + LNG kontekstual; Kesimpulan satu positioning line

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Boyolali 2.000–3.000 m³/bln, 6.000 porsi/hari, 34 sekolah, sejak Feb 2025 (PGN Gagas) | dossier ✓ (investortrust.id) | pass |
| Batam 10 dapur SPPG, 800–1.000 m³/bln, per Okt 2025 (PGN Gagas) | dossier ✓ (Antara News) | pass |
| Rembang hemat 25–30% oleh **PT RME (BUMD), bukan PGN Gagas** | dossier ✓ + WebSearch (rembangkab.go.id, beritajateng, times.co.id) | pass |
| Larangan LPG 3 kg/Minyakita/beras SPHP oleh Kepala BGN, 27 Juli 2026 | dossier ✓ + WebSearch (CNN, Kompas, detik) — pernyataan konpers, tanpa nomor regulasi | pass |
| Ambang Rp200 juta Pengadaan Langsung (Perpres 46/2025); e-Katalog v6 wajib 1 Jan 2025 | dossier ✓ (JDIH LKPP) | pass |
| Izin Usaha Niaga Gas Bumi (niaga CNG/LNG/LPG/BBG), Permen ESDM 52/2018; PT/BUMN/BUMD + NIB + Sertifikat Standar | dossier ✓ + WebSearch (perizinanmigas.esdm.go.id, Ditjen Migas) | pass |

Catatan hedge (semua bertahan): **Perpres 26/2026 tidak dikutip** (dossier flag: out of scope) dan draft membingkai penunjukan langsung dengan benar; **Rembang ≠ PGN Gagas**; **larangan BGN = pernyataan Kepala BGN tanpa nomor regulasi**; **Rp10.000/m³ diomit**; **CNG Merah Putih 3 kg tidak dikonflasi**.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — **51 chars**, "Perusahaan CNG Indonesia" di pos 1
- [x] Meta description 140–160 — **158 chars**
- [x] Slug ≤60, kebab-case, keyword — **44 chars**, `perusahaan-cng-indonesia-pengadaan-dapur-mbg`
- [x] H1 contains keyword — "…Memilih Perusahaan CNG di Indonesia"
- [x] H2 count 4–5 — **5 H2 isi** (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (2×) ; ≥1 honest/counter-conventional H2 ("Kapan CNG BELUM Cocok…")
- [x] Keyword in first 100 words — anchor "perusahaan CNG di Indonesia" di lead
- [x] Definition snippet near top (40–60 words) — blockquote "Secara singkat:" ~55 kata
- [x] ≥8 LSI terms — counted: **14** (SPPG, MBG, BGN, e-Katalog LKPP, penunjukan langsung, Pengadaan Langsung, Izin Usaha Niaga, GTM, PRS, Mother Station, beyond pipeline, pengganti LPG subsidi, penyedia berizin, Gaslink)
- [x] 3 internal links (1 hub + 2 cousins) — perusahaan-cng-indonesia (hub, lead), gaslink, perusahaan-lng-indonesia
- [x] ≥1 external authoritative citation — **2** (CNN Indonesia, JDIH LKPP) hyperlink inline + migas ESDM di frontmatter
- [x] FAQ 5–7 Q&As — **6**
- [x] 2 image placeholders — **2** (`{IMAGE_01}`, `{IMAGE_02}`), keduanya beralt-text
- [x] ≥1 list + ≥1 table — numbered (5) + bullet (4) + 1 tabel jalur pengadaan
- [x] Word count 1,200–1,600 — **1,437**

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — dicek per H2 (Kenapa/Tiga Jalur/Siapa/Langkah)
- [x] Each body paragraph makes one independently quotable, verifiable point — mis. baris Boyolali/Batam, ambang Rp200 juta, syarat izin
- [x] FAQ parseable for FAQPage schema; freshness noted — `publish_month: 2026-08` (dateModified diisi CMS saat publish)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider/distributor (menyalurkan/memasok CNG beyond-pipeline), bukan produsen
- [x] ≤3 PGN Gagas self-mentions — **3** (bukti lapangan Boyolali/Batam; disambiguasi Rembang "bukan PGN Gagas"; positioning line Kesimpulan)
- [x] No unverifiable superlatives — tidak ada "terbaik/nomor satu"
- [x] Product names + specs match product_matrix / dossier — Gaslink, GTM, Mother Station, PRS akurat; ISO 45001/37001 sesuai profil
- [x] Closing uses a company_profile.md positioning line — parafrase line #1 (anak usaha PGN / Subholding Gas Pertamina)
- [x] Soft website CTA as FINAL line — "…kunjungi gagas.co.id." setelah Kesimpulan, tone konsultatif
- [x] Hub link as natural inline anchor in lead — "perusahaan CNG di Indonesia", bukan callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `cng-hotel-rumah-sakit-restoran-pengganti-lpg` (perusahaan-cng-indonesia-10, HORECA swasta) + `perusahaan-cng-indonesia-industri-cara-berlangganan` (onboarding-03)
- Subtopik prior (cluster 2026-07/07-2): memilih penyedia (7 kriteria), scope layanan, industri+onboarding, keamanan/keandalan, kesalahan umum, TCO, model harga/kontrak, HORECA ganti LPG — **tidak satu pun** menyentuh pengadaan sektor publik (e-Katalog LKPP, SPPG/MBG, jalur pengadaan pemerintah)
- Subtopic overlap (Jaccard estimate): **~0.2** (irisan hanya tema "ganti LPG → CNG")
- Verdict: **distinct angle confirmed** — pembeli (sektor publik), aturan main (Perpres/LKPP), dan dokumen berbeda dari artikel komersial swasta

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran clean (exit 0); `perusahaan-cng-indonesia-01.id.quality-input.json` written
- [x] AI-detector score **0.04** (< 0.30) — pass; 1 flag low-severity (paragraph-low-variance)
- [x] Paragraph burstiness CV **0.353** ≥ 0.30 floor (sentence burstiness 0.536; top30 vocab share 0.32)
- [x] Plagiarism: 4 passage paling distinctive di-WebSearch (Rembang/Batam savings, larangan BGN, Izin Usaha Niaga, NIB/Sertifikat Standar) — **tidak ada verbatim non-Gagas ≥20 kata**; overlap hanya pada named-entity + fakta regulasi (tidak dapat dihak-ciptakan) dan definisi umum "CNG adalah…". Plagiarism score: **0.05**
