---
brief_id: "perusahaan-lng-indonesia-02"
editor_run_date: "2026-07-08"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.02
---

# Editor QC Report — LNG untuk Kapal: Mengenal LNG Bunkering dan Bahan Bakar Maritim

## Recommendation
**approve**

Draft masuk kuat pada hampir semua dimensi: angle maritim/bunkering unik terhadap seluruh cluster LNG, fakta tersumber rapi dari dossier (IMO 2020, EEDI→EEXI→CII, DNV 641 kapal, ICCT metana slip), dan seluruh guard framing yang paling sensitif sudah dipatuhi penulis — PGN Gagas TIDAK diklaim sebagai operator/penyedia bunkering, Bontang diatribusikan tegas ke PT PGN LNG Indonesia + PT Badak NGL, COD 2026 ditulis sebagai target (bukan kepastian), angka 23% GRK diatribusikan eksplisit ke PGN, rentang emisi diberi label "indikatif", dan metana slip dijaga sebagai caveat (bukan "nol emisi"). Satu-satunya cacat gaya yang serius adalah kepadatan em-dash (27 total, jauh di atas ≤2) — sudah saya bereskan seluruhnya di tempat (kini 0) tanpa mengubah satu pun hedge. AI-detector 0.04 dan tidak ada verbatim non-Gagas ≥20 kata pada empat passage distinctive yang saya cek. Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Bebas opener AI, tanpa "Selain itu"/"Dengan demikian"; em-dash dituntaskan dari 27 → 0. Ritme paragraf & kalimat bervariasi (sentence burstiness 0.82). |
| Factual & energi-gas / CNG accuracy | 10 | 8 klaim di-spot-check vs dossier; semua lulus dengan sumber primer (IMO/DNV/ICCT/Kompas). Tidak ada spec/nama produk fiktif. |
| On-page SEO compliance | 9 | Meta title 47 / desc 156 / slug 39 semuanya di band; 5 H2 konten + FAQ + Kesimpulan; LSI 18+ term. |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata di bawah tiap H2; satu klaim quotable per paragraf; FAQ FAQPage-ready; `date_modified` ditambahkan. |
| PGN Gagas framing discipline | 10 | Framing generik/aspiratif (ekosistem PGN, LNG Hub, distribusi hilir); tanpa klaim bunkering; tanpa "pionir/pemimpin pasar"; ≤3 self-mention. |
| Internal linking | 10 | 3 anchor inline natural: hub di lead + 2 cousin (Gaslink, CNG). Tanpa "BACA JUGA". |
| FAQ quality | 9 | 6 Q&A, masing-masing 40–70 kata, self-contained, mirror PAA brief. |
| Originality (plagiarism + AI-detector) | 10 | AI 0.04; 4 passage distinctive dicek WebSearch, nihil verbatim non-Gagas ≥20 kata. |

## What I fixed (changelog)
- **Em-dash purge (anti-AI, prioritas tertinggi):** menurunkan em-dash prosa/tabel/list/IMAGE dari **27 → 0**, mengganti dengan koma, titik, titik dua, atau kurung — tanpa mengubah makna atau satu pun hedge. Contoh: definition snippet (`— *truck-to-ship*, ... —` → `(...)`); paragraf metana slip (`mengurangi — pada kasus terburuk hampir meniadakan — manfaat` → `mengurangi manfaat ..., dan pada kasus terburuk hampir meniadakannya`); kalimat Bontang, COD 2026, dan 23% GRK (dash → titik/koma dengan hedge tetap utuh); tiga list-gloss EEDI/EEXI/CII (`—` → `:`); tiga caption {IMAGE} (`—` → `:`/`.`); sel tabel tipe bunkering & emisi (`Tinggi — bisa...` → `Tinggi; bisa...`).
- **Tightening ringan (untuk menjaga ≤1.600):** "yang selama ini dipakai" → "yang dipakai"; "Menurut laporan terakhir yang tersedia" → "Menurut laporan terakhir"; "Yang menarik bagi pembaca..." → "Bagi pembaca...".
- **GEO freshness:** menambahkan `date_modified: "2026-07-08"` di frontmatter (§2a).
- **Frontmatter `word_count`** disesuaikan 1575 → 1578 (net dari edit; konvensi pipeline).

## What I flagged (open issues)
- ⚠️ **Word count per tokenizer skrip = 1614** (skrip memecah compound `truck-to-ship`, `VLSFO/MGO`, `20.000–40.000` menjadi beberapa token). Per konvensi whitespace pipeline, body ~1.578 kata dan berada di dalam band 1.200–1.600 — konsisten dengan seluruh 20+ sibling committed (index melaporkan 1.508–1.590 dengan diskrepansi tokenizer yang sama). *Rekomendasi:* tidak perlu tindakan; angka ini artefak tokenizer, bukan overflow riil.
- ⚠️ **Burstiness paragraf CV = 0.334** — di atas floor tell 0.30, di bawah target lunak skrip 0.45 (flag severity `low`). *Rekomendasi:* dapat diterima; artikel sudah mencampur paragraf 1-kalimat (lead honest H2) dengan blok 4–5 kalimat. Bukan tell yang perlu revise.
- ⚠️ **Primary keyword "Perusahaan LNG Indonesia" tidak muncul verbatim** di body — konsisten by design: keyword adalah nama hub, artikel menargetkan sub-intent "LNG bunkering/bahan bakar kapal". Hub tetap ditaut inline di lead dengan anchor "solusi LNG di Indonesia". *Rekomendasi:* biarkan; sesuai strategi cluster (angle_hash unik, hub link hadir).

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (0 kemunculan)
- [x] No "Penting untuk dicatat / dipahami bahwa"
- [x] "Dengan demikian" not overused (0 kemunculan)
- [x] Em-dash count ≤2 — **kini 0** (turun dari 27; fix diterapkan in-place)
- [x] Varied paragraph lengths (sentence burstiness 0.82; paragraf 1–5 kalimat)
- [x] Not every H2 → 3-bullet list (mix prosa + 2 tabel + 1 numbered + 1 bullet)
- [x] No generic claims without numbers (angka spesifik di 6+ tempat)
- [x] No stacked hype adjectives (canggih/powerful/terdepan) — nihil
- [x] No service-dump paragraph (hanya 1 anchor Gagas + 1 aside)

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| IMO 2020: sulfur 3,5% → 0,5% m/m, efektif 1 Jan 2020, MARPOL Annex VI | dossier ✓ (IMO, imo.org, high) | pass |
| SOx pelayaran turun ~70% tahun pertama, diatribusikan ke IMO | dossier ✓ (IMO press briefing) | pass |
| DNV: 641 kapal LNG-fueled beroperasi akhir 2024, ~2× vs 2021 | dossier ✓ (DNV 2025); WebSearch: tak ada verbatim, fakta tren terkonfirmasi | pass |
| Bontang oleh PT PGN LNG Indonesia + PT Badak NGL, FEED selesai, target COD 2026, pra-operasional | dossier ✓ + framing guard; WebSearch (ANTARA/Kompas/PGN LNG) korroborasi | pass |
| 23% reduksi GRK = proyeksi korporat PGN (diatribusikan, bukan studi independen) | dossier ✓ (Kompas, medium — wajib atribusi); draft mengatribusikan eksplisit | pass |
| Emisi LNG marine: SOx ~100%, NOx ~85%, PM >90%, CO2 ~20–30% — dilabeli "indikatif" | dossier ✓ (ICCT/studi, rentang) | pass |
| Metana slip caveat + MOC turunkan 70–80%; BUKAN "nol emisi" | dossier ✓ (ICCT/IOPscience) | pass |
| PGN Gagas ≠ PT PGN LNG Indonesia; Gagas tanpa peran bunkering | dossier ✓ (temuan kunci) + product_matrix.md guard | pass |

Tidak ada WebSearch fakta tambahan yang diperlukan — tiap klaim tertelusur ke dossier yang mengutip sumber primer. WebSearch hanya dijalankan untuk plagiarisme (§F).

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword-lead first 30) — actual: **47** ("LNG Bunkering" di posisi 1)
- [x] Meta description 140–160 — actual: **156**
- [x] Slug ≤60, kebab-case, keyword — actual: **lng-bunkering-bahan-bakar-kapal-maritim (39)**
- [x] H1 contains keyword (LNG + bunkering + maritim)
- [x] H2 count 4–5 — actual: **5** H2 konten (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (Apakah...? / Di Mana...? / Kapan...?); ≥1 honest/counter-conventional H2 ("Kapan LNG BELUM Masuk Akal")
- [x] Keyword ("LNG") in first 100 words (lead)
- [x] Definition snippet near top (blockquote "Secara singkat", ~50 kata)
- [x] ≥8 LSI terms — counted: **18+** (LNG bunkering, IMO 2020, truck/ship/terminal-to-ship, EEDI, EEXI, CII, metana slip, ISO tank, virtual pipeline, scrubber, MARPOL, SOx, NOx, kriogenik, dual-fuel, beyond-pipeline)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: perusahaan-lng-indonesia (hub, lead), gaslink (cousin), perusahaan-cng-indonesia (cousin)
- [x] ≥1 external authoritative citation — actual: **3 inline** (IMO, DNV, ICCT) + 2 di frontmatter
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] 2–3 image placeholders — actual: **3** {IMAGE_01/02/03}
- [x] ≥1 list + ≥1 table — actual: 1 numbered + 1 bullet + 2 tabel
- [x] Word count 1,200–1,600 — actual: **~1.578** (konvensi pipeline; 1614 per tokenizer skrip, lihat flag)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (definisi bunkering; ringkasan 3 tipe; "Untuk emisi konvensional, jawabannya cenderung ya"; jawaban Bontang; "LNG bukan pilihan tepat untuk setiap kapal")
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-07-08` ada di meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas framed sebagai penyedia/distributor gas-energi hilir (menyalurkan/mendukung), BUKAN produsen atau operator bunkering
- [x] ≤3 self-mentions — actual: **2 efektif** (aside Gaslink/ISO tank di §2 + positioning line di Kesimpulan; "PGN Gagas" verbatim muncul 1×)
- [x] No unverifiable superlatives ("terbaik/nomor satu/pionir/pemimpin pasar") — nihil
- [x] Energi-gas / LNG facts + specs match dossier / product_matrix.md (LNG Hub sebagai infrastruktur Gagas; peran Bontang diatribusikan ke entitas lain)
- [x] Closing uses a company positioning line (ekosistem PGN / Subholding Gas Pertamina / LNG Hub / distribusi beyond-pipeline)
- [x] Soft website CTA sebagai baris FINAL, setelah Kesimpulan (kunjungan gagas.co.id; tone konsultatif, bukan "beli sekarang")
- [x] Hub link natural inline anchor di lead ("solusi LNG di Indonesia") — bukan callout "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior articles for keyword "Perusahaan LNG Indonesia": `perusahaan-lng-indonesia-01` (apa itu LNG vs CNG/gas pipa), `lng-beyond-pipeline-konsep-lng-hub`, `rantai-pasok-lng-likuifaksi-pengguna-akhir` (semua pengguna darat)
- Subtopic overlap (Jaccard estimate): **~0.12** — hanya "ISO tank"/"virtual pipeline" muncul sepintas sebagai konteks moda; subjek inti (bunkering maritim, IMO 2020, EEDI/CII, STS/TTS, metana slip, titik Bontang) sepenuhnya baru bagi cluster
- Verdict: **distinct angle confirmed** (angle_hash sha1:bd8354c59b6d unik; tidak ada sibling menyentuh sektor maritim/kapal/bunkering)

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran clean; `perusahaan-lng-indonesia-02.id.quality-input.json` written (2× run)
- [x] AI-detector score **0.04** < 0.30 → pass (sentence burstiness 0.82; top30 vocab share 0.29)
- [x] Paragraph burstiness CV **0.334** ≥ 0.30 floor (di bawah target lunak 0.45; flag `low`, bukan fail)
- [x] Plagiarism: 4 passage distinctive dicek via WebSearch —
  - "menurut DNV, ada 641 kapal berbahan bakar LNG ... akhir 2024" → no verbatim hit; fakta tren terkonfirmasi (Indonesia Shipping Gazette/DNV) tapi kalimat original
  - "Proyek fasilitas LNG bunkering pertama di Indonesia ... Bontang" → no verbatim ≥20 kata; entitas fakta (Bontang/PGN LNG/Badak NGL) korroborasi lintas sumber (ANTARA/Kompas/PGN LNG), bukan lift prosa
  - "titik-titik ini masih tahap perencanaan per laporan 2022–2023, belum berstatus operasional" → no hit
  - "Ada tiga mekanisme utama pengisian LNG ke kapal, dibedakan oleh sumber pasokan dan skala transfernya" → no hit
  - Kandidat lain (H2 headings, gloss EEDI) = heading/fakta generik, bukan prosa distinctive → tidak dihitung hit
  - **plagiarism score: 0.02** (nihil non-Gagas verbatim ≥20 kata)
