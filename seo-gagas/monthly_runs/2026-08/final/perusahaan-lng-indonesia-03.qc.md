---
brief_id: "perusahaan-lng-indonesia-03"
editor_run_date: "2026-08-11"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.03
---

# Editor QC Report — Kontrak dan Harga LNG di Indonesia: Take-or-Pay hingga Indeksasi

## Recommendation
**approve**

Draft yang matang dan curator-ready. Artikel mengajarkan mekanika kontrak & harga LNG secara vendor-neutral dari kacamata pembeli industri, dengan seluruh hedge kritis dipegang teguh: ambang take-or-pay 70–95% konsisten dibingkai sebagai **praktik industri global, bukan patokan regulasi Indonesia** (empat kali, tanpa slip); harga LNG non-HGBT US$13/MMBTU (29 Juni 2026) disajikan sebagai **konteks pasar bertanggal yang kondisional**, eksplisit **tidak dikonflasikan** dengan segmen LNG Hub skala kecil PGN Gagas maupun "harga nasional"; dan PGN Gagas dibingkai sebagai **penyalur gas bumi/pengelola LNG Hub dalam ekosistem PGN**, bukan "perusahaan LNG" penuh, tanpa "pionir/pemimpin pasar" atau superlatif apa pun. Fakta ESDM (HGBT US$7/6,5, Kepmen 76.K/2025; ICP = Dated Brent + Alpha; JKM = S&P Global Platts sejak 2009) cocok dengan dosir. Anti-AI bersih (ai_score 0.04, sentence-burstiness 0.951), tanpa jejak plagiarisme verbatim. Satu perbaikan kecil diterapkan langsung (ekspansi akronim DCQ). Word count 1.559 (dalam band). Layak tayang di gagas.co.id.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Lead dari pain konkret; ritme paragraf 8–91 kata; sentence-burstiness 0.951. Hanya 1 flag low (para-CV 0.375, di atas ambang tell 0.30). |
| Factual & energi-gas / CNG accuracy | 9 | Semua angka dosir-sourced; hedge ToP/US$13 dipegang; tak ada spec/produk/tanggal karangan. |
| On-page SEO compliance | 9 | Meta title 45 (keyword di depan), desc 160, slug 38; H1 pakai sinonim keyword + keyword persis di 100 kata pertama & paragraf terakhir. |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata setelah tiap H2; satu klaim quotable/paragraf; FAQ FAQPage-ready. |
| PGN Gagas framing discipline | 10 | Penyalur/pengelola LNG Hub, bukan produsen/"perusahaan LNG"; tanpa superlatif; ≤3 self-mention; no US$13 conflation. |
| Internal linking | 10 | 3 tautan: hub di lead + 2 cousin (CNG, Gaslink) kontekstual inline, tanpa "BACA JUGA". |
| FAQ quality | 8 | 5 Q&A solid, self-contained, tiap jawaban ~55–75 kata dengan angka. Di batas bawah 5–7 (headroom kata terbatas → dipertahankan 5). |
| Originality (plagiarism + AI-detector) | 9 | ai 0.04 (pass); tak ada verbatim ≥20 kata di halaman non-Gagas. |

## What I fixed (changelog)
- Mengekspansi akronim yang belum di-gloss: `Volume (ACQ dan DCQ)` → menambahkan `(*Annual Contract Quantity*)` dan `(*Daily Contract Quantity*)` pada butir daftar komponen kontrak (H2 #1), menutup satu-satunya gap glossing (§3 style guide) — DCQ sebelumnya dipakai 3× tanpa kepanjangan.
- Memperbarui frontmatter `word_count` 1553 → 1559 mengikuti penambahan gloss.
- Menyalin draft ke `final/` dan menjalankan `quality-check.ps1` atas file final.

## What I flagged (open issues)
- ⚠️ FAQ berjumlah 5 (batas bawah band 5–7). *Rekomendasi*: dapat diperkaya menjadi 6 (mis. "Apa itu make-up rights?" atau "Apa itu minimum offtake dan ACQ/DCQ?") pada refresh berikutnya bila ada headroom kata; saat ini dipertahankan 5 demi patuh batas ≤1.600 kata.
- ⚠️ `dateModified` eksplisit belum ada di meta block; kesegaran diwakili `publish_month: "2026-08"`. *Rekomendasi*: CMS mengisi `dateModified` saat publish untuk prioritas sitasi GEO.
- ⚠️ (Konteks, bukan cacat draft) Durasi kebijakan harga LNG US$13 tak dipatok tanggal berakhir — artikel benar hanya menyebut "efektif 29 Juni 2026" tanpa klaim tanggal berakhir. Pertahankan pada refresh.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — lead buka dari pain konkret
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — tidak ada sama sekali
- [x] No "Penting untuk dicatat / dipahami bahwa" — tidak ada
- [x] "Dengan demikian" not overused — tidak ada
- [x] Em-dash count ≤2 — tepat 2 (dalam batas)
- [x] Varied paragraph lengths — 8, 20, 33 … 82, 89, 91 kata (CV 0.375)
- [x] Not every H2 → 3-bullet list — campur prosa, numbered list, 2 tabel, bullet
- [x] No generic claims without numbers — angka spesifik di 6+ tempat (US$6,5/7/9,6/13, 253 pengguna, 70–95%, 2009)
- [x] No stacked hype adjectives — tidak ada
- [x] No service-dump paragraph — hanya 1 anchor Gaslink + 1 positioning line

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| HGBT US$7 (bahan bakar) / US$6,5 (bahan baku), 7 sektor, 253 pengguna, Kepmen 76.K/2025 | dossier ✓ + ESDM/ANTARA/Sinpo (web) ✓ | pass |
| LNG non-HGBT US$13/MMBTU efektif 29 Jun 2026 (Jabar/Banten/DKI), PLTU dikecualikan, turun dari ~US$20–23 | dossier ✓ (ESDM/CNBC/Kontan) | pass |
| ICP = Dated Brent + Alpha, ditetapkan bulanan Kementerian ESDM | dossier ✓ (ESDM) | pass |
| JKM = acuan spot LNG Asia, S&P Global Platts sejak Feb 2009 | dossier ✓ + S&P (web) ✓ | pass |
| Ambang ToP 70–95% ACQ = praktik industri LNG global, bukan patokan regulasi Indonesia | dossier ✓ (flag di-hedge eksplisit di artikel) | pass |
| PGN Gagas = anak usaha PGN, penyalur/pengelola LNG Hub (bukan produsen/FSRU) | company_profile ✓ + dossier ✓ | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — 45 chars, keyword di posisi 0
- [x] Meta description 140–160 — 160 chars
- [x] Slug ≤60, kebab-case, keyword — `perusahaan-lng-indonesia-kontrak-harga` (38)
- [x] H1 contains keyword/synonym — "Kontrak dan Harga LNG di Indonesia…" (LNG + Indonesia); keyword persis di lead
- [x] H2 count 4–5 — 5 body H2 (Komponen, Take-or-Pay, Harga, HGBT, Jebakan)
- [x] ≥1 question-format H2 (#2, #3); ≥1 honest/counter-conventional H2 (#5 Jebakan)
- [x] Keyword in first 100 words — "perusahaan LNG Indonesia" (lead)
- [x] Definition snippet near top (40–60 words) — blockquote "Ringkas:" ~55 kata
- [x] ≥8 LSI terms — PJBG/SPA, ToP, ACQ, DCQ, make-up rights, indeksasi, ICP, Brent, JCC, JKM, HGBT, BOG, DES, FOB, slope, plant gate, MMBTU (17+)
- [x] 3 internal links (1 hub + 2 cousins) — hub perusahaan-lng-indonesia (lead), perusahaan-cng-indonesia, gaslink
- [x] ≥1 external authoritative citation — 3 (ESDM ×2, S&P Global)
- [x] FAQ 5–7 Q&As — 5 (batas bawah; lihat flag)
- [x] 2 image placeholders (up to 3) — 3 ({IMAGE_01/02/03}) dengan alt-text
- [x] ≥1 list + ≥1 table — numbered list + bullet list + 2 tabel
- [x] Word count 1,200–1,600 — 1.559

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — verifikasi tiap H2 (Komponen ~50; Take-or-Pay ~50; Harga ~48; HGBT ~52; Jebakan ~48)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; freshness via `publish_month` (dateModified → CMS)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas framed as gas-energy provider/pengelola LNG Hub (menyalurkan/mengelola), BUKAN produsen/"perusahaan LNG" penuh
- [x] ≤3 PGN Gagas self-mentions — 2 prosa (aside Gaslink + positioning line "PGN Gagas") + CTA gagas.co.id
- [x] No unverifiable superlatives — grep bersih (tak ada terbaik/nomor satu/terbesar/pionir/pemimpin pasar)
- [x] Energi-gas / LNG names + specs match product_matrix.md / dossier — Gaslink, LNG Hub, CNG konsisten
- [x] Closing uses company_profile.md positioning line — "anak usaha PGN dalam Subholding Gas Pertamina … menyalurkan gas bumi … lewat solusi CNG dan pengelolaan LNG Hub"
- [x] Soft website CTA present as FINAL line — "…jelajahi pilihan solusinya di gagas.co.id." (konsultatif, bukan "beli sekarang")
- [x] Hub link present as natural inline anchor in lead — "[penyedia LNG di Indonesia]" (bukan "BACA JUGA")
- [x] No US$13 conflation — line 80 eksplisit memisahkan segmen LNG skala besar vs beyond-pipeline kecil; tabel diberi catatan "jangan digeneralisasi"

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `memilih-penyedia-solusi-lng-indonesia-kriteria` (2026-07-05) — menilai *siapa* penyedianya; artikel ini membedah *syarat komersial di dalam kontrak*.
- Subtopic overlap (Jaccard estimate): ~0.1 (hanya "SLA/transparansi" bersinggungan; ToP/ACQ/DCQ/indeksasi/make-up/HGBT/BOG seluruhnya baru). 10 artikel LNG terdahulu (apa-itu-LNG, LNG Hub, LNG-vs-CNG industri, rantai pasok, memilih penyedia, pembangkit, marine bunkering, keekonomian vs solar, keselamatan kriogenik, transisi energi) tak menyentuh mekanika kontrak/harga.
- Verdict: distinct angle confirmed.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `perusahaan-lng-indonesia-03.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: 0.04 (verdict pass); 1 flag low (paragraph-low-variance CV 0.375)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: 0.375 (sentence-burstiness 0.951; top30 vocab 0.294)
- [x] Plagiarism: 8 distinctive passages web-checked; no non-Gagas verbatim hit ≥20 words — plagiarism score: 0.03
  - Cek indeksasi slope/JCC/Brent, daftar 7 sektor HGBT+253 pengguna, ambang ToP 70–95%, definisi PJBG=SPA: hanya tumpang-tindih **fakta/daftar resmi ESDM** dan **padanan istilah industri baku** (kategori well-known, diabaikan); frasa prosa artikel adalah konstruksi asli penulis, tanpa lift verbatim.
