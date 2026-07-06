---
brief_id: "perusahaan-cng-indonesia-01"
editor_run_date: "2026-06-09"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Cara Memilih Perusahaan CNG di Indonesia: 7 Kriteria Wajib

## Recommendation
**approve**

Draf ini adalah panduan pembeli vendor-neutral yang matang dan disiplin secara faktual — tepat sasaran dengan intent komersial/decision brief, dan menutup celah SERP yang jelas (tidak ada top-3 kompetitor yang menyusun kriteria dari sudut pandang pembeli). Semua item PROTECT lolos tanpa pelanggaran: tidak ada nama kompetitor, tidak ada "terbesar"/ranking pasar, ISO 9001/45001/37001 (2025) dibingkai sebagai SATU contoh penyedia, SNI CNG tidak diklaim berlaku, tidak ada harga Rp/MMBTU spesifik, dan ISO 11439/ECE R110 dibedakan dengan benar sebagai standar KENDARAAN (diverifikasi ulang ke ISO.org). Anti-AI scan bersih; framing PGN Gagas tepat (distributor/penyalur, 2 self-mention + CTA, tanpa superlatif); GEO extractability terpenuhi (jawaban 40–60 kata di bawah tiap H2). Hanya dua sentuhan editor: satu perbaikan tata bahasa kalimat menggantung dan pemangkasan alt-text IMAGE_01 ke ≤125 karakter. Layak tayang.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tanpa AI-opener, tanpa "Selain itu" beruntun, ritme paragraf bervariasi (1–5 kalimat), em-dash prosa praktis nol. Aside "ada satu rujukan yang sering disalahpahami" terasa khas praktisi. |
| Factual & energi-gas / CNG accuracy | 9 | 5 klaim diperiksa silang ke dossier + 1 verifikasi web (ISO 11439). Semua angka tersumber/berlabel estimasi. Tidak ada spec/tanggal/nama produk yang dikarang. |
| On-page SEO compliance | 9 | Meta title 48 kar (keyword di posisi 0), meta desc 149 kar, slug 37 kar; 3 internal link + 2 sitasi ESDM; FAQ 5; tabel + list + numbered ada. |
| GEO extractability (§2a) | 9 | Definition snippet 54 kata di atas; jawaban langsung 40–60 kata di bawah tiap H2; satu klaim quotable per paragraf; FAQ siap FAQPage; dateModified ada. |
| PGN Gagas framing discipline | 9 | "Penyalur, bukan produsen" eksplisit; 2 self-mention + CTA web (≤3); "satu contoh penyedia"; tanpa superlatif; positioning line di Kesimpulan. |
| Internal linking | 9 | Hub di lead (inline), 2 cousin (Gaslink di Kesimpulan, LNG di H2 perbandingan) — tepat di titik topik menyambung; tanpa "BACA JUGA". |
| FAQ quality | 8 | 5 Q&A (floor §8 = 5; cocok dengan benchmark gaslink-01). Jawaban 50–70 kata, tiap jawaban bawa satu fakta. Brief membidik 6; lihat open flag (keputusan disiplin panjang). |
| Image-brief completeness | 9 | JSON parse OK; 3 entri untuk 3 placeholder; alt/caption/visual_direction/asset_type lengkap dalam Bahasa Indonesia; alt IMAGE_01 dipangkas ke ≤125. |

## What I fixed (changelog)
- **Tata bahasa — kalimat menggantung (badan H2 #3, verifikasi keandalan):** "Yang tidak siap menjawab dengan janji umum tanpa angka." (fragmen tanpa predikat utuh) → "Yang tidak siap **biasanya menjawab** dengan janji umum tanpa angka." (net +1 kata; total 1.556, ≤1.600).
- **Image brief — IMAGE_01 alt_id dipangkas dari ~126 → ~117 karakter** (≤125): "Diagram alur distribusi CNG beyond pipeline: dari sumur gas lewat Mother Station dan GTM hingga ke pabrik, hotel, dan rumah sakit" → "Diagram alur distribusi CNG beyond pipeline: sumur gas, Mother Station, GTM, hingga ke pabrik, hotel, dan rumah sakit" (semua entitas kunci dipertahankan).
- Tidak ada perubahan struktur/angle (tidak diperlukan) dan placeholder `{IMAGE_NN}` dipertahankan utuh.

## What I flagged (open issues)
- ⚠️ **FAQ berjumlah 5, sementara brief membidik 6** — *recommendation*: ini keputusan disiplin panjang yang disengaja (instruksi length-neutral/net-negative, draf sudah 1.555/1.556). Lima FAQ memenuhi floor style_guide §8 (5–7) dan setara benchmark gaslink-01 (5). PAA "Bagaimana penyedia menjamin pasokan stabil?" sudah dijawab tuntas di badan H2 #3, jadi tidak ada celah PAA. Jika nanti panjang dilonggarkan, FAQ ke-6 yang siap pakai sudah ada di dossier ("Apakah ada risiko pasokan CNG tiba-tiba terhenti…"). Tidak menahan approve.
- ⚠️ **Verifikasi mekanisme cek izin online oleh pembeli (Dossier Flag 6)** — *recommendation*: draf sudah memilih framing aman ("minta salinan dokumen izin beserta nomor registrasinya") dan tidak menjanjikan portal cek-publik di perizinan.esdm.go.id. Sesuai rekomendasi dossier. Tidak ada aksi lanjutan.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep: 0
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: 0 di awal paragraf
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: 0
- [x] "Dengan demikian" not overused — grep: 0
- [x] Em-dash count ≤2 — prosa badan praktis nol; em-dash hanya di 1 blockquote definisi + dalam placeholder `{IMAGE_NN}` (bukan prosa terbit). Patuh.
- [x] Varied paragraph lengths (not all ~4 sentences) — campuran 2–5 kalimat; ada paragraf pendek penutup ("Jawaban yang kabur adalah sinyal peringatan.")
- [x] Not every H2 → 3-bullet list — H2 #1, #3, #4 dibuka prosa; hanya #5 pakai bullet; ada 2 tabel.
- [x] No generic claims without numbers — angka spesifik: 7 kriteria, 200–400 bar (konteks), 20 tabung 50 kg, 30–40%, 10–30%, Permen 32/2021, 12 bulan, dst.
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — grep: 0
- [x] No service-dump paragraph — Gaslink disebut sekali (anchor cousin), tanpa daftar layanan beruntun.

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Niaga & pengangkutan CNG wajib Izin Usaha dari Menteri ESDM (badan ilegal tanpa pijakan hukum) | dossier Claim 1 & 2 ✓ (Permen ESDM hilir migas, Ditjen Migas) | pass |
| ISO 11439 & ECE R110 = standar silinder KENDARAAN, bukan distribusi industri | dossier edge-case (l.208) ✓ + WebSearch ISO.org: ISO 11439 = "on-board storage of natural gas as a fuel for automotive vehicles" ✓ | pass |
| Inspeksi teknis instalasi CNG wajib per Permen ESDM No. 32 Tahun 2021 | dossier Claim 4 ✓ (Ditjen Migas sosialisasi) | pass |
| Penghematan 30–40% = konteks LPG 3 kg subsidi rumah tangga; industri 10–30% (estimasi) | dossier Claim 13 + Flag 1 ✓ — framing draf sesuai persis | pass |
| PGN tandatangan amandemen PJBG dengan pemasok hulu di IPA Convex 2026 (Kompas, Mei 2026) | dossier Claim 17 ✓ — atribusi ke "PGN" (induk), bukan PGN Gagas; benar | pass |
| PGN Gagas ISO 9001/45001/37001 (2025), 45001 mencakup distribusi CNG | dossier Claim 10 + company_profile.md ✓ | pass |

PROTECT-spesifik: tidak ada "terbesar"/ranking (grep 0); tidak ada nama kompetitor; SNI CNG tidak muncul (tidak diklaim berlaku — aman per Flag 2); tidak ada harga Rp/MMBTU spesifik (MMBTU hanya muncul sebagai *pertanyaan skema harga* ke vendor — Flag 4 aman).

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 48 kar / keyword "Perusahaan CNG Indonesia" di posisi 0–24
- [x] Meta description 140–160 — actual: 149 kar
- [x] Slug ≤60, kebab-case, keyword — actual: `cara-memilih-perusahaan-cng-indonesia` (37 kar)
- [x] H1 contains keyword — "Cara Memilih Perusahaan CNG di Indonesia: 7 Kriteria Wajib"
- [x] H2 count 4–5 — actual: 5 H2 badan + FAQ + Kesimpulan
- [x] ≥1 question-format H2 (#3, #4) ; ≥1 honest/counter-conventional H2 (#5 "Kapan Anda BELUM Perlu…")
- [x] Keyword in first 100 words — muncul di kalimat ke-4 lead (anchor hub)
- [x] Definition snippet near top (40–60 words) — blockquote "Secara singkat" = 54 kata
- [x] ≥8 LSI terms — counted: 16 (CNG, beyond pipeline, GTM, Mother Station, PRS, izin niaga gas bumi, ISO 45001, ISO 9001, Permen ESDM 32/2021, PJBG, keandalan pasok, virtual pipeline, MMBTU, HORECA, force majeure, LNG)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: /perusahaan-cng-indonesia/ (lead) · /gaslink/ (Kesimpulan) · /perusahaan-lng-indonesia/ (H2 perbandingan)
- [x] ≥1 external authoritative citation — actual: 2 (keduanya Ditjen Migas/ESDM — memenuhi syarat ESDM/standards)
- [x] FAQ 5–7 Q&As — actual: 5 (lihat open flag)
- [x] 2 image placeholders (up to 3) — actual: 3
- [x] ≥1 list + ≥1 table — bullet list (H2 #5) + numbered/criteria + 2 tabel (7 kriteria; moda pasok)
- [x] Word count 1,200–1,600 — actual: 1.556

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — H2 #1 (l.50), #2 (l.56), #3 (l.78 ≈48 kata), #4 (l.86), #5 (l.99) semuanya membuka dengan jawaban ringkas sebelum elaborasi
- [x] Each body paragraph makes one independently quotable, verifiable point — mis. "perusahaan CNG berperan sebagai penyalur, bukan produsen gas dari sumur"; "ISO 11439 dan ECE R110 mengatur silinder kendaraan, bukan distribusi industri"
- [x] FAQ parseable for FAQPage schema; `dateModified` / freshness noted — date_modified: 2026-06-09 di meta block; FAQ format H3 + jawaban (parseable)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas framed as gas-energy provider/distributor (menyalurkan/memasok), NOT producing — "perusahaan CNG berperan sebagai penyalur, bukan produsen gas dari sumur"
- [x] ≤3 PGN Gagas self-mentions — actual: 2 ("PGN Gagas" di kriteria #4 aside + di Kesimpulan) + CTA web gagas.co.id. (Sebutan "PGN" l.80 adalah induk ekosistem sebagai ilustrasi skala vendor-neutral — tidak dihitung sebagai self-mention Gagas.)
- [x] No unverifiable superlatives ("terbaik/nomor satu/terbesar") — grep: 0
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier — Gaslink (industri/komersial), GTM, Mother Station, PRS, ISO trio — semua cocok
- [x] Closing uses a company_profile.md positioning line — "Sebagai anak usaha PGN, bagian dari Subholding Gas Pertamina…"
- [x] Soft website CTA present as FINAL line, after conclusion — "Untuk menilai kesesuaian pasokan gas… kunjungi gagas.co.id dan mulai konsultasinya." (konsultatif, bukan "beli sekarang")
- [x] Hub link present as natural inline anchor (lead), descriptive anchor text — NOT a "BACA JUGA" callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — artikel pertama untuk slug `perusahaan-cng-indonesia`. Tetangga tema terdekat di history: `gaslink-03` (how-to penerapan produk) & `gaslink-02` (perbandingan biaya).
- Subtopic overlap (Jaccard estimate): ~0,08 vs gaslink-03 (hanya beririsan tipis di "kesiapan/cakupan lokasi"); angle ini = kerangka EVALUASI VENDOR lintas-penyedia, bukan onboarding/produk tunggal.
- Verdict: **distinct angle confirmed** — vendor-neutral selection framework tidak diduplikasi cluster mana pun.

### F. Image-brief completeness (images.json)
- [x] JSON parses — valid
- [x] One entry per `{IMAGE_NN}` placeholder — 3 placeholder (IMAGE_01/02/03) ↔ 3 entri; cocok
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type — semua Bahasa Indonesia; IMAGE_01 alt dipangkas ke ~117 kar (sebelumnya ~126)
- [x] "Real photo/site asset" requirement surfaced — ketiganya diagram/infografik orisinal; sourcing_note menegaskan TIDAK perlu foto fasilitas nyata & WAJIB vendor-neutral (tanpa logo/nama merek) — sesuai PROTECT
- (Tidak ada PNG untuk diperiksa — by design; tim desain klien yang eksekusi.)
