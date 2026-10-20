---
brief_id: "gaslink-02"
editor_run_date: "2026-09-21"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Lindungi Anggaran dari Harga Solar: Gaslink, Kontrak, dan Kepastian Harga

## Recommendation
**approve**

Draf ini sudah kuat sejak masuk: rangka risiko-harga (volatilitas solar → kontrak gas → struktur perjanjian) matang, suara praktisi terasa, dan — yang paling penting untuk artikel ini — ketujuh hedge kritis dipertahankan dengan disiplin. Gagas dibingkai sebagai *penyalur/distributor* CNG beyond-pipeline (bukan produsen), CAPEX tidak dikuantifikasi dalam Rupiah, HGBT ditempatkan murni sebagai konteks kebijakan dengan separator eksplisit bahwa pelanggan Gaslink di luar pipa tidak ada dalam daftar 253 pengguna, klaim "hemat hingga 30%" diatribusikan sebagai klaim first-party yang belum diaudit, dan term kontrak (formula/tenor/take-or-pay) diajarkan sebagai praktik umum industri, bukan spesifikasi Gaslink. Perbaikan yang saya lakukan bersifat minor dan in-place (meta description yang sedikit overclaim, penambahan tautan otoritatif nyata, satu FAQ, freshness). Skor originalitas bersih (AI 0.04; tanpa verbatim non-Gagas ≥20 kata). Layak tayang di gagas.co.id.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dash, ritme paragraf bervariasi (CV 0.355), aside "ini sering disalahpahami", tanpa pola AI |
| Factual & energi-gas / CNG accuracy | 9 | 5+ klaim dicek ke dossier; angka HGBT/solar/PJBG akurat & teratribusi |
| On-page SEO compliance | 9 | Semua item checklist lolos; 2 tautan eksternal otoritatif kini hidup |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata di bawah tiap H2; 1 poin kutipan/paragraf; dateModified ditambah |
| PGN Gagas framing discipline | 10 | Framing penyalur tepat; 2 self-mention + CTA; tanpa superlatif; separator HGBT kuat |
| Internal linking | 9 | Hub inline di lead + 2 cousin (Gasku, perusahaan CNG) dengan anchor deskriptif |
| FAQ quality | 9 | 6 Q&A, 40–80 kata, dossier-sourced, FAQPage-ready |
| Originality (plagiarism + AI-detector) | 10 | AI 0.04; tanpa hit verbatim non-Gagas |

## What I fixed (changelog)
- **Meta description** — mengganti "Gaslink membantu industri **mengunci** biaya energi" (overclaim ringan vs hedge tanpa-harga-tetap) menjadi "Gaslink dan gas bumi terkontrak membuat biaya energi **lebih terprediksi**…" (157 chars, tetap di band 140–160, keyword di awal).
- **Tautan eksternal otoritatif** — mengubah atribusi teks "(Kementerian ESDM, Februari 2025)" menjadi hyperlink nyata ke halaman ESDM HGBT (checklist mensyaratkan ≥1 tautan eksternal; draf sebelumnya hanya punya teks).
- **Tautan eksternal kedua** — ReforMiner Institute pada klaim debat manfaat Rp247 T vs beban Rp70 T kini menjadi hyperlink (memenuhi rentang 1–2 tautan otoritatif).
- **Em-dash** — menghapus satu-satunya em-dash di lead ("berita — itu" → "berita, melainkan"); em-dash total kini 0.
- **FAQ** — menambah pertanyaan ke-6 "Berapa lama tenor kontrak gas bumi industri di Indonesia?" (rentang 2–11 tahun, dossier-sourced) untuk memenuhi target 5–6 brief & memperkuat GEO.
- **Alt-text IMAGE_02** — menambah alt-text Bahasa Indonesia deskriptif (aksesibilitas/SEO).
- **Frontmatter** — menambah `date_modified: "2026-09-21"` (GEO §2a freshness) dan memperbarui `word_count` ke 1585.

## What I flagged (open issues)
- ⚠️ **Harga solar April 2026 punya angka lanjutan yang lebih tinggi** — verifikasi web memunculkan cetak Rp30.550/liter (pertengahan–akhir April 2026) di atas Rp28.150 yang dipakai artikel. Artikel sudah membingkai solar sebagai *tren/rentang* bertanggal dengan atribusi (solarindustri.com/Kontan) sesuai instruksi dossier, jadi tidak salah — namun *recommendation*: pada refresh berikutnya perbarui rentang atas ke "±Rp28–30 ribu" agar tetap current. Tidak menghambat approve.
- ℹ️ **Paragraph CV 0.355** — di bawah target longgar skrip (0.45) tetapi di atas ambang editor (≥0.30). Ritme sehat; tidak perlu tindakan.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (0 kemunculan)
- [x] No "Penting untuk dicatat / dipahami bahwa" (0)
- [x] "Dengan demikian" not overused (0)
- [x] Em-dash count ≤2 — actual: 0
- [x] Varied paragraph lengths (1-kalimat vs 4–6-kalimat; CV 0.355)
- [x] Not every H2 → 3-bullet list (mix prosa, tabel, numbered, bullet)
- [x] No generic claims without numbers (Rp/USD/%/tahun tersebar)
- [x] No stacked hype adjectives (canggih/powerful/terdepan) — none
- [x] No service-dump paragraph (1 aside + closing saja)

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| HGBT USD 7 (bahan bakar) / USD 6,5 (bahan baku) per MMBTU, Kepmen ESDM 76.K/2025, 7 sektor, 253 pengguna | dossier ✓ (high; cross-check CNBC) + ESDM URL | pass |
| Solar B40 Rp21.400 (Okt 2025) → Rp28.150 (Apr 2026) → Rp18.200 (Agu 2026) → ~Rp19.000 (Sep 2026) | dossier ✓ (medium; solarindustri.com/Kontan) — diatribusikan; WebSearch mengonfirmasi tren | pass (framed as range) |
| Dexlite Rp13.500/liter per 1 Jan 2026 (retail SPBU, dipisah dari bulk B40) | dossier ✓ (high; Kompas) — dipisah eksplisit | pass |
| ReforMiner: manfaat Rp247 triliun (2020–2023) vs beban ~Rp70 triliun | dossier ✓ (medium) — disajikan dua sisi + link | pass |
| Take-or-pay & tenor PJBG 2–11 tahun (praktik umum, bukan term Gaslink) | dossier ✓ (medium; SKK Migas) — dibingkai generik | pass |
| "Hemat hingga 30%" Gaslink | dossier ✓ (medium; first-party) — diatribusikan "belum diaudit independen" | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 45 chars / "Gaslink" pos 0
- [x] Meta description 140–160 — actual: 157
- [x] Slug ≤60, kebab-case, keyword — actual: `gaslink-kepastian-harga-vs-volatilitas-solar` (44)
- [x] H1 contains keyword ("Gaslink")
- [x] H2 count 4–5 konten — actual: 5 konten (+ FAQ + Kesimpulan = 7 total, dalam batas 4–7)
- [x] ≥1 question-format H2 (#1, #2); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words (lead)
- [x] Definition snippet near top (blockquote "Secara singkat", ~55 kata)
- [x] ≥8 LSI terms — counted: 12+ (volatilitas solar, HGBT, PJBG, take-or-pay, tenor, formula harga, lindung nilai, GTM, smart meter, MMBTU, MOPS, biodiesel B40)
- [x] 3 internal links — destinations: gaslink (hub, lead), perusahaan-cng-indonesia (cousin), gasku (cousin)
- [x] ≥1 external authoritative citation — actual: 2 (ESDM, ReforMiner)
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders — actual: 2 (IMAGE_01, IMAGE_02) dengan alt-text
- [x] ≥1 list + ≥1 table — 1 numbered + 1 bullet + 1 tabel
- [x] Word count 1,200–1,600 — actual: 1585 (readable)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (kelima H2 punya jawaban langsung)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-09-21` di meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Gagas dibingkai penyalur/distributor gas ("menyalurkan", "menagih berdasarkan pemakaian") — BUKAN produsen
- [x] ≤3 PGN Gagas self-mentions — actual: 2 "PGN Gagas" (aside H2#4 + Kesimpulan) + CTA website
- [x] No unverifiable superlatives (terbaik/nomor satu) — none
- [x] Nama & spesifikasi produk cocok product_matrix (Gaslink = CNG industri via GTM, beyond-pipeline)
- [x] Closing memakai positioning line company_profile ("anak usaha PGN … Subholding Gas Pertamina … menyalurkan gas bumi …")
- [x] Soft website CTA sebagai baris TERAKHIR setelah Kesimpulan (undang kunjungan gagas.co.id; konsultatif)
- [x] Hub link sebagai anchor inline natural di lead ("[Gaslink]"), bukan callout BACA JUGA

### E. Anti-cannibalization spot check
- Closest prior article: `2026-07-gaslink-02` ("Gaslink vs LPG vs Solar: Perbandingan Biaya & Efisiensi") — perbandingan biaya sesaat/payback.
- Subtopic overlap (Jaccard estimate): ~0.05 (token-level ~0.00 per brief; hanya konsep "biaya" beririsan tipis). Tema baru: volatilitas, HGBT, struktur kontrak, take-or-pay, manajemen risiko.
- Verdict: **distinct angle confirmed** (angle_hash sha1:c8d6b47bb6df; risiko-harga sepanjang waktu vs biaya titik-waktu).

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `gaslink-02.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict pass)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.355** (1 flag low-severity: target skrip 0.45, ambang editor 0.30 terpenuhi)
- [x] Plagiarism: 8 kandidat diekstrak; pasase distinctive dicek web (angka solar B40; kalimat "Kepastian biaya punya nilai finansial") — tanpa verbatim non-Gagas ≥20 kata; angka solar terkonfirmasi lintas Kontan/ifakta (sintesis orisinal). Plagiarism score: **0.05**
