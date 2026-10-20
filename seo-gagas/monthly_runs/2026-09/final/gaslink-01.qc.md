---
brief_id: "gaslink-01"
editor_run_date: "2026-09-17"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Biaya Beralih ke Gaslink: CAPEX, Retrofit, dan Model Tanpa Modal

## Recommendation
**approve**

Draft masuk sudah kuat dan disiplin pada semua pagar kritis yang ditandai untuk artikel ini. Struktur biaya konversi disajikan **kualitatif tanpa satu pun angka Rupiah CAPEX yang direka** (satu-satunya nominal Rupiah adalah biaya *bahan bakar* dari studi UNDIP yang diatribusikan eksplisit — bukan CAPEX). Model **zero-CAPEX/sewa dibingkai sebagai konsep industri vendor-neutral** dan secara eksplisit dinyatakan "belum dikonfirmasi sebagai skema Gaslink" plus arahan konsultasi skema pembiayaan. **HGBT USD 7/6,5 per MMBTU** ditempatkan sebagai konteks kebijakan dengan kalimat pemisah tegas ("pelanggan CNG beyond-pipeline seperti Gaslink bukan penerima otomatis"), dan klaim **"hemat hingga 30%"** diatribusikan sebagai klaim penyedia, bukan audit independen. Anti-AI bersih (0 em-dash, 0 opener klise, ragam panjang paragraf), semua fakta menelusur ke dosier, HGBT terverifikasi ulang vs ESDM, dan pemindaian originalitas lolos (AI 0,04; tak ada jiplakan verbatim non-Gagas). Editor hanya menerapkan satu perbaikan alur kalimat minor. Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dash, 0 opener klise, 0 "Selain itu"/"Penting untuk", ragam panjang paragraf & kalimat kuat |
| Factual & energi-gas / CNG accuracy | 9 | Semua klaim menelusur ke dosier; HGBT terverifikasi ulang vs ESDM; tak ada spec/nominal yang direka |
| On-page SEO compliance | 9 | Meta title 49 chars, meta desc 158, slug 39; 3 internal + 3 eksternal; keyword placement lengkap |
| GEO extractability (§2a) | 9 | Definition snippet 50 kata; jawaban 45–49 kata di tiap H2; satu poin quotable per paragraf |
| PGN Gagas framing discipline | 9 | Framing "menyalurkan/mendistribusikan"; 1 aside + closing; tanpa superlatif; tanpa klaim produsen |
| Internal linking | 9 | Hub di lead + 2 cousin (perusahaan-cng, gasku); anchor deskriptif; tanpa "BACA JUGA" |
| FAQ quality | 8 | 6 Q&A self-contained; beberapa jawaban 37–39 kata (sedikit di bawah target 40, dibiarkan demi plafon ≤1.600) |
| Originality (plagiarism + AI-detector) | 10 | AI 0,04; tak ada verbatim ≥20 kata di halaman non-Gagas |

## What I fixed (changelog)
- **§3 (PRS/metering):** menghaluskan satu kalimat terpotong — menggabungkan "…agar aman membakar gas. Sementara *turbine meter*…" menjadi satu kalimat mengalir ("…agar aman membakar gas, sementara *turbine meter* atau *smart meter*…"). Net −1 kata; tidak menambah panjang.
- Tidak ada perbaikan substantif lain yang diperlukan: pagar kritis (CAPEX kualitatif, zero-CAPEX bukan-Gaslink, HGBT konteks, klaim 30% first-party) sudah dipegang benar oleh penulis.

## What I flagged (open issues)
- ⚠️ Tiga jawaban FAQ berada di 37–39 kata (target gaya 40–80). *Rekomendasi*: dibiarkan pada run ini — sudah self-contained + memuat fakta, dan menambah kata berisiko mendorong hitungan mendekati plafon 1.600. Bukan penghambat.
- ⚠️ Angka teknis PRS (0,5–4 bar; heater ~50°C; akurasi meter ±1,0%/±0,5%) bersumber vendor teknis + paper akademik (confidence medium di dosier), bukan standar nasional Indonesia. *Rekomendasi*: sudah dibingkai sebagai rentang umum industri — pertahankan framing generik ini; jangan pernah dinaikkan jadi "spesifikasi resmi PGN Gagas".

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — 0 hit
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 hit
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hit
- [x] "Dengan demikian" not overused — 0 hit
- [x] Em-dash count ≤2 — actual: **0** (en-dash hanya di rentang angka)
- [x] Varied paragraph lengths — CV 0,353; campuran paragraf 2–5 kalimat
- [x] Not every H2 → 3-bullet list — campuran prosa, 1 bulleted, 1 numbered, 2 tabel
- [x] No generic claims without numbers — angka spesifik di 6+ tempat
- [x] No stacked hype adjectives — tidak ada canggih/powerful/terdepan
- [x] No service-dump paragraph — hanya 1 anchor Gaslink relevan

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| HGBT USD 7/MMBTU (bahan bakar) & 6,5 (bahan baku), Kepmen ESDM 76.K/2025, 7 sektor | dossier ✓ + WebSearch ESDM (esdm.go.id, Kepmen 76.K/MG.01/MEM.M/2025, 26 Feb 2025, 253 pengguna) ✓ | pass |
| PRS: regulator turunkan tekanan ke ~0,5–4 bar | dossier ✓ (Okay Energy + paper PRS ResearchGate; rentang umum industri) | pass |
| Heater PRS naikkan suhu ~50°C cegah efek Joule-Thomson | dossier ✓ | pass |
| Turbine/smart meter akurasi standar ±1,0% (kustom ±0,5%) | dossier ✓ (meterin.id / kalibrasi vendor) | pass |
| Studi UNDIP: solar Rp1.319.797/jam vs gas Rp27.300/jam (bahan bakar, tanpa CAPEX) | dossier ✓ + WebSearch (ejournal.undip.ac.id, Boiler EBARA HKL 1800 KA) ✓ | pass |

Catatan framing: PGN Gagas dinyatakan **menyalurkan** gas bumi via Gaslink/GTM (bukan memproduksi) — sesuai product_matrix.md. Onboarding 4 tahap sesuai gagas.co.id.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **49** chars, "Gaslink" pada posisi ~18
- [x] Meta description 140–160 — actual: **158**
- [x] Slug ≤60, kebab-case, keyword — actual: `biaya-beralih-ke-gaslink-capex-konversi` (39)
- [x] H1 contains keyword — "Biaya Beralih ke Gaslink…"
- [x] H2 count 4–5 body — actual: **5** body (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#2, #4); ≥1 honest/counter-conventional H2 (#5 "…BELUM Terbayar…")
- [x] Keyword in first 100 words — ya (lead)
- [x] Definition snippet near top (40–60 words) — **50** kata (blockquote)
- [x] ≥8 LSI terms — counted: 15+ (CAPEX, OPEX, PRS, retrofit burner, turbine/smart meter, MMBTU, GTM, HGBT, sizing, filter coalescer, heater, Joule-Thomson, zero-CAPEX, finance/operating lease, amortisasi)
- [x] 3 internal links (1 hub + 2 cousins) — gaslink (lead), perusahaan-cng-indonesia, gasku
- [x] ≥1 external authoritative citation — actual: **3** (ESDM, OJK, Jurnal UNDIP)
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] 2 image placeholders (up to 3) — actual: **3** ({IMAGE_01/02/03}) dengan alt-text
- [x] ≥1 list + ≥1 table — 1 numbered + 1 bulleted + 2 tabel
- [x] Word count 1.200–1.600 — actual: **~1.515** (script tokenizer 1.586, dalam band ≤1.600)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata setelah tiap H2 — 46 / 49 / 45 / 46 / 48 kata
- [x] Tiap paragraf tubuh membawa satu poin quotable & verifiable
- [x] FAQ parseable untuk FAQPage schema; `publish_month` 2026-09 di meta block (freshness)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas sebagai penyedia/distributor gas-energi (menyalurkan/mendistribusikan) — bukan produsen
- [x] ≤3 self-mention — "PGN Gagas" muncul **1×** (Kesimpulan); 1 aside Gaslink di §4 + closing = disiplin
- [x] Tanpa superlatif tak terverifikasi (terbaik/nomor satu) — tidak ada
- [x] Nama produk + spec (Gaslink, GTM, PRS) cocok product_matrix.md / dossier
- [x] Closing memakai positioning line company_profile ("anak usaha PGN… Subholding Gas Pertamina… menyalurkan…")
- [x] Soft website CTA sebagai baris FINAL setelah Kesimpulan (kunjungi gagas.co.id; konsultatif)
- [x] Hub link sebagai anchor inline natural di lead ([Gaslink]) — bukan callout "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior article: `gaslink-vs-lpg-vs-solar-biaya-efisiensi` (2026-07 gaslink-02, comparison — biaya *bahan bakar* per MMBTU & payback dari sisi penghematan). Sekunder: `industri-cocok-pakai-gaslink-cara-penerapan` (gaslink-03, retrofit sebagai item kesiapan).
- Subtopik overlap (Jaccard estimate): ~0,05–0,10 — hanya "payback"/"biaya" beririsan tipis; komponen CAPEX/PRS/metering/model sewa seluruhnya baru.
- Verdict: **distinct angle confirmed** — artikel ini membedah **modal awal (CAPEX)** & model pembiayaan, bukan biaya bahan bakar operasional.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `gaslink-01.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict pass)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.353** (di atas floor editor; script menandai "low" vs target internal 0,45 — non-blocking karena AI score 0,04)
- [x] Plagiarism: 8 kandidat di-web-check; tak ada verbatim non-Gagas ≥20 kata — plagiarism score: **0.05**
  - Kandidat angka UNDIP (Rp1.319.797/jam vs Rp27.300/jam) → cocok di ejournal.undip.ac.id, yaitu **sumber yang justru dikutip in-text** (dikecualikan).
  - Kandidat HGBT (USD 7/6,5) → fakta kebijakan publik yang diberitakan luas + diatribusikan ke ESDM (dikecualikan, seperti definisi umum).
  - Kalimat prosa distinctive ("Memahami fungsi tiap bagian membantu Anda menilai kewajaran sebuah penawaran…") → **tidak ada match** verbatim.
