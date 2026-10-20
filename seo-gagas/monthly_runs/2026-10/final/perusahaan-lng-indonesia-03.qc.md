---
brief_id: "perusahaan-lng-indonesia-03"
editor_run_date: "2026-09-28"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Menjaga Keandalan Pasokan LNG: Strategi Kelangsungan (BCP) untuk Pabrik

## Recommendation
**approve**

Draft yang matang dan patuh brief: kerangka BCP tingkat keputusan, bukan glosarium atau troubleshooting, sesuai angle. Semua pagar pengaman kritis LNG dihormati — tidak ada angka "JKM puncak US$22,3" (dijauhi sesuai flag), relaksasi take-or-pay dilabeli sebagai preseden 2020 (bukan klaim 2026), holding days eksplisit "ilustrasi", tidak ada framing produsen/likuifaksi/FSRU, dan PT PGN LNG Indonesia tidak tertukar dengan PT Gagas Energi Indonesia. Framing PGN Gagas benar (menyalurkan beyond-pipeline + mengoperasikan LNG Hub, 2 mention, tanpa superlatif). Anti-AI bersih (em-dash 0; AI detector 0,04). Kekurangan on-page yang saya temukan — tidak ada tautan eksternal aktif di body dan FAQ di batas bawah — sudah saya perbaiki in-place (3 tautan otoritatif ditambahkan; FAQ 5 → 7). Tidak ada isu yang butuh writer/strategist re-spin. Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dash, ritme paragraf bervariasi, hook konkret, hedging jujur; tidak ada opener AI, "Selain itu", atau "Dengan demikian". AI detector 0,04. |
| Factual & energi-gas / CNG accuracy | 9 | 5+ klaim (JKM, Hormuz, US$13/MMBTU, HGBT, TOP 2020, force majeure) cocok dossier; semua flag dossier dihormati. |
| On-page SEO compliance | 9 | Meta/slug/H2/kw/definisi lengkap; tautan eksternal & FAQ diperbaiki. H1 pakai sinonim "LNG", bukan keyword persis (minor). |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata di bawah tiap H2; definisi snippet; FAQ FAQPage-ready; `date_modified` ditambahkan. |
| PGN Gagas framing discipline | 10 | Penyalur beyond-pipeline + operator LNG Hub; 2 mention; tanpa superlatif; entitas tidak tertukar. |
| Internal linking | 10 | Hub di lead + 2 cousin (CNG, Gaslink), inline natural, tanpa "BACA JUGA". |
| FAQ quality | 9 | 7 Q&A, 40–80 kata, tiap jawaban memuat angka/fakta, mirror PAA. |
| Originality (plagiarism + AI-detector) | 9 | AI 0,04; burstiness CV 0,359 (di atas ambang editor 0,30); plagiarisme heuristik-only, tidak ada indikasi lift verbatim non-Gagas. |

## What I fixed (changelog)
- **Tautan eksternal otoritatif (was 0 in body → 3).** Body semula hanya berisi atribusi teks tanpa hyperlink. Menautkan "IEA, *Gas Market Report* Q3-2026" → URL IEA; "Kementerian ESDM, 29 Juni 2026" → URL ESDM (patokan LNG); "skema Harga Gas Bumi Tertentu (HGBT)" → URL ESDM HGBT. Semua sudah ada di `external_citations` frontmatter dan diverifikasi dossier.
- **Atribusi sumber JKM di body.** "indeks JKM naik ~111% sepanjang 2026" di §Risiko kini diberi "(menurut detikFinance)" agar konsisten dengan disiplin sitasi (sebelumnya hanya diatribusikan di FAQ).
- **FAQ 5 → 7.** Menambahkan dua Q&A dari set drafted dossier: "Perlukah menyiapkan bahan bakar cadangan selain LNG?" dan "Berapa lama stok gas cadangan yang ideal untuk pabrik?" (keduanya PAA di brief; masing-masing 40–80 kata, memuat hedge "ilustrasi/tidak ada angka baku"). Tidak menambah fakta baru — murni konten dossier.
- **`date_modified: "2026-10-01"` ditambahkan** ke meta block (sinyal freshness GEO §2a).
- **`word_count` 1470 → 1560** menyesuaikan penambahan FAQ (dalam band 1.200–1.600).

## What I flagged (open issues)
- ⚠️ **H1 tidak memuat keyword persis "Perusahaan LNG Indonesia"** (memakai sinonim "LNG"/"Pasokan LNG"). *Recommendation*: dapat diterima per seo_playbook ("keyword atau sinonim jelas"); keyword persis tetap hadir di meta title (posisi 1), lead (100 kata pertama), dan Kesimpulan. Tidak diubah agar H1 tetap sesuai angle; biarkan apa adanya.
- ⚠️ **Plagiarisme diverifikasi heuristik-only (tanpa WebSearch run ini).** *Recommendation*: passage distinctive semuanya prosa asli/heading artikel; string angka berulang (US$13/MMBTU, tanggal) menelusuri ke sumber tersitasi (ESDM/IEA) sesuai desain, bukan lift 20+ kata dari halaman non-Gagas. Bila diinginkan, jalankan pass plagiarisme live sebelum publish. Tidak memblokir approve.
- ⚠️ **Placeholder `{IMAGE_01/02}` tidak punya field alt-text eksplisit.** *Recommendation*: konsep Bahasa Indonesia sudah cukup deskriptif untuk dipakai sebagai alt oleh tim desain/CMS; minor.
- ⚠️ **Word count metode script = 1630** (mencakup teks konsep gambar + sel tabel). Prosa reader-facing ~1.560, dalam band. Tidak ada padding.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 kemunculan
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0
- [x] Em-dash count ≤2 — **0** (penulis pakai koma/en-dash untuk rentang saja)
- [x] Varied paragraph lengths (burstiness CV 0,359; campuran kalimat 1–6)
- [x] Not every H2 → 3-bullet list (mix prosa + numbered 5 tuas + tabel + bullet)
- [x] No generic claims without numbers — 6+ angka tersumber
- [x] No stacked hype adjectives
- [x] No service-dump paragraph

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| JKM naik ~111% sepanjang 2026 | dossier ✓ (detikFinance, 24 Jun 2026) | pass |
| Selat Hormuz akhir Feb 2026 → ~20% pasokan LNG global terganggu; Qatar+UEA -35 bcm YoY | dossier ✓ (IEA Gas Market Report Q3-2026) | pass |
| Spot LNG Asia +45% → US$17,5/MMBtu Q2 2026 | dossier ✓ (IEA) | pass |
| Patokan LNG industri US$13/MMBTU s/d 31 Des 2026 (turun dari US$20–23) | dossier ✓ (ESDM, 29 Jun 2026) | pass |
| HGBT US$6,5–7/MMBTU, 253 pengguna, 7 sektor | dossier ✓ (ESDM / Kepmen 76.K/2025) | pass |
| TOP relaxation dilabeli preseden 2020 (serapan ~79% target), SKK Migas | dossier ✓ (Kontan, Jun 2020) — flag dihormati | pass |
| Force majeure = Pasal 1244–1245 KUH Perdata | dossier ✓ (Hukumonline) | pass |

Catatan: semua flag dossier terpenuhi — tidak ada "$22,3 puncak", tidak ada klaim relaksasi TOP 2026, holding days = "ilustrasi", tidak ada klaim penghematan 10–25% LNG Hub, kapasitas Bandung tidak dipakai/di-ekstrapolasi, PGN Gagas ≠ PT PGN LNG Indonesia.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — 48 chars; "Perusahaan LNG Indonesia" pada char 1–24
- [x] Meta description 140–160 — 156 chars
- [x] Slug ≤60, kebab-case, keyword — `perusahaan-lng-indonesia-keandalan-pasokan-bcp` (46)
- [~] H1 contains keyword — sinonim "LNG"/"Pasokan LNG" (bukan frasa persis); keyword persis di meta/lead/kesimpulan (flagged, acceptable)
- [x] H2 count 4–5 (body) — 5 body H2 + FAQ + Kesimpulan = 7 total (dalam band playbook 4–7)
- [x] ≥1 question-format H2 (#2, #4); ≥1 honest/counter-conventional H2 (#5 Over-Engineering)
- [x] Keyword in first 100 words — anchor "perusahaan LNG di Indonesia" di lead
- [x] Definition snippet near top (blockquote "Secara singkat", ~55 kata)
- [x] ≥8 LSI terms — 14+ (BCP, keandalan pasokan, dual sourcing, safety stock, JKM, force majeure, single-point-of-failure, take-or-pay, HGBT, indeksasi, boil-off, dst.)
- [x] 3 internal links (1 hub + 2 cousins) — hub `perusahaan-lng-indonesia/`, cousin `perusahaan-cng-indonesia/` + `gaslink/`
- [x] ≥1 external authoritative citation — **3 aktif** (IEA + ESDM x2), setelah fix
- [x] FAQ 5–7 Q&As — **7** (setelah fix)
- [x] 2 image placeholders — {IMAGE_01}, {IMAGE_02}
- [x] ≥1 list + ≥1 table — 1 tabel risiko×dampak×mitigasi, 1 bullet, 1 numbered (5 tuas)
- [x] Word count 1,200–1,600 — ~1.560 prosa (dalam band)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (H2 #1–#5 semua diawali jawaban ringkas ekstraktif)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-10-01` di meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed sebagai penyalur gas-energi beyond-pipeline + operator LNG Hub — bukan produsen/likuifaksi/FSRU
- [x] ≤3 PGN Gagas self-mentions — **2** (aside §3 + Kesimpulan) + 1 CTA website
- [x] No unverifiable superlatives — tidak ada "terbaik/pemimpin/pionir/terbesar"; eksplisit "salah satu opsi... bukan jaminan bebas risiko"
- [x] Product names + specs match product_matrix/dossier (Gaslink, LNG Hub, CNG via GTM)
- [x] Closing uses company_profile positioning line (anak usaha PGN / Subholding Gas Pertamina)
- [x] Soft website CTA sebagai FINAL line setelah Kesimpulan ("kunjungi gagas.co.id")
- [x] Hub link sebagai natural inline anchor di lead — bukan callout "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `perusahaan-lng-indonesia-kontrak-harga` (glossary take-or-pay/offtake/indeksasi); juga `kendala-pasokan-lng-cara-mengatasi` (troubleshooting insiden) & `memilih-penyedia-lng-indonesia-kriteria` (evaluasi vendor).
- Subtopic overlap (Jaccard estimate): ~0,18 vs kontrak-harga (irisan hanya take-or-pay & force majeure — di sini dipakai sebagai tuas mitigasi, bukan didefinisikan), ~0,10 vs kendala-pasokan. Di bawah 0,4 terhadap semua.
- Verdict: **distinct angle confirmed** — artikel ini beroperasi di altitude strategi/portofolio BCP (risk register, dual-source, moda cadangan CNG, safety-stock policy, over-engineering), bukan definisi/troubleshooting/pemilihan vendor.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `perusahaan-lng-indonesia-03.id.quality-input.json` written
- [x] AI-detector score < 0.30 — **0.04** (verdict: pass; 1 low flag: paragraph-low-variance CV=0,359 vs target script 0,45)
- [x] Paragraph burstiness CV ≥ 0.30 — **0,359** (di atas ambang editor 0,30; hanya low-severity flag script, tidak menuntut aksi)
- [~] Plagiarism: **heuristic-only (no WebSearch this run)** — 8 candidate passages diekstrak; semua adalah prosa asli/heading artikel (mis. hook "yang hilang bukan cuma harga gasnya", parafrase AGA/IEA). String angka berulang menelusuri ke sumber otoritatif tersitasi (ESDM/IEA), bukan lift verbatim ≥20 kata dari halaman non-Gagas. Plagiarism score heuristik: **0,05**. Degraded mode dicatat; tidak memblokir approve.

## The shipping question
Bila tayang di gagas.co.id besok dan dibaca praktisi energi senior + pembeli industri skeptis: ya — WEBARQ Promote layak bangga. Artikel jujur (bagian "over-engineering"), tersumber (ESDM/IEA/detikFinance/Kontan), tidak overselling PGN Gagas, dan tidak mencampur entitas LNG. Approve.
