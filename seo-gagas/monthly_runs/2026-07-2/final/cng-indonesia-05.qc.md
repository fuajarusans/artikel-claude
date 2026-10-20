---
brief_id: "cng-indonesia-05"
editor_run_date: "2026-07-08"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.03
---

# Editor QC Report — Sejarah CNG di Indonesia: Naik-Turun BBG (1985–2026)

## Recommendation
**approve**

Draf ini kuat: sudut sejarah 1985–2026 yang jujur dan bernuansa, sepenuhnya berbeda dari part-1 `cng-transisi-energi-indonesia` (forward-looking, NZE 2060) — tidak ada risiko kanibalisasi. Semua tanggal historis kritis benar dan sudah di-hedge sesuai dossier (Langit Biru 1996 dengan pemicu UNEP 1992; 1986 target 20% taksi, bukan 1987; TransJakarta Koridor II "~2006"; Mother Station Medan "2025–2026"; klaim hemat 30–40% diberi atribusi "estimasi pemerintah"). Dua isu editorial diperbaiki in-place: (1) em-dash di prosa dipangkas dari 6 menjadi 1 (batas ≤2), dan (2) panjang artikel dari 1663 kata (over 1600) ditulis-ulang ketat menjadi 1487 kata (dalam target 1450–1560) tanpa menghapus satu pun must-keep. Originalitas lolos: AI-detector 0.04 (jauh di bawah 0.30), tidak ada verbatim non-Gagas ≥20 kata. Layak tayang di gagas.co.id apa adanya.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Suara historian-praktisi; hedging jujur; ritme paragraf bervariasi. Em-dash dipangkas ke 1. |
| Factual & energi-gas / CNG accuracy | 10 | 5 klaim diverifikasi (WebSearch + dossier). Semua tanggal koreksi sejarah benar & di-hedge. |
| On-page SEO compliance | 9 | Meta title 49, meta desc 155, slug 36; 3 internal + 2 eksternal; keyword di 100 kata pertama. |
| GEO extractability (§2a) | 9 | Definition snippet 40–60 kata; jawaban langsung setelah tiap H2; tabel kronologi mudah diekstrak. |
| PGN Gagas framing discipline | 9 | Distributor/pembangun infrastruktur CNG beyond-pipeline; 2 self-mention promosi; tanpa superlatif. |
| Internal linking | 9 | Hub inline di lead + 2 cousin (Gasku, Gaslink) di badan, anchor deskriptif, tanpa "BACA JUGA". |
| FAQ quality | 9 | 6 Q&A dari PAA, tiap jawaban 40–80 kata, memuat angka spesifik. |
| Originality (plagiarism + AI-detector) | 10 | AI 0.04; tidak ada verbatim non-Gagas; fakta bersumber, frasa orisinal. |

## What I fixed (changelog)
- **Panjang**: menulis-ulang ketat dari **1663 → 1487 kata** (di bawah 1600, dalam target 1450–1560). Pemangkasan pada lead, paragraf ke-2 H2 #1, elaborasi H2 #4, dan Kesimpulan — tanpa menghapus tanggal/fakta/link/tabel/FAQ/{IMAGE_NN}.
- **Em-dash**: dikurangi dari **6 → 1** di prosa terbit (batas ≤2). Mengubah "—" menjadi tanda titik-koma/koma pada: aside PGN Gagas (H2 #4), kalimat "estimasi pemerintah" (H2 #5), kalimat Langit Biru (H2 #2), FAQ *beyond pipeline*, dan Kesimpulan. Menyisakan 1 em-dash disengaja pada kalimat "Jayanti Baruna".
- **Meta description**: em-dash diganti titik ("...Tabung Merah Putih 2026. Kenapa...") — 155 karakter, dalam 140–160.
- **Tabel kronologi**: em-dash pemisah pada baris ~1992 ("...(UNEP) — pemicu...") diganti titik-koma agar konsisten dengan aturan gaya.
- **Image concept**: pemisah "—" dalam konsep {IMAGE_01/02/03} diganti titik dua agar tidak terhitung sebagai em-dash tell (placeholder tetap utuh).
- **Micro-tightening**: "memberi pembaca konteks... membuat Anda menilai" → "membantu Anda menilai"; "Perlu diluruskan: eksperimen..." → "Eksperimen..." (menghapus filler); "Gelombang sekarang berfondasi lebih kokoh; ia belum kebal" → "..., namun belum kebal".

## What I flagged (open issues)
- ⚠️ Burstiness paragraf CV = **0.343** — di atas ambang tell editor (≥0.30) tetapi di bawah target ketat script (≥0.45), memicu satu flag *low-severity*. *Rekomendasi*: tidak memblokir; suara sudah manusiawi dan AI-score 0.04. Jika ingin dipertajam pada refresh berikutnya, tambahkan 1–2 kalimat sangat pendek (5–8 kata) di H2 #3/#5.
- ⚠️ Hitungan kata versi script (1738) berbeda dari kata terbit (1487) karena tokenizer script menghitung blok konsep {IMAGE_NN}, sel tabel, dan URL. *Rekomendasi*: gunakan 1487 (frontmatter) sebagai angka kanonik; sudah dalam target.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — lead membuka pada pain konkret (Tabung Merah Putih 2026)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — tidak ada
- [x] No "Penting untuk dicatat / dipahami bahwa" — tidak ada
- [x] "Dengan demikian" not overused — tidak muncul
- [x] Em-dash count ≤2 — **1** di prosa terbit (dari 6 sebelum edit)
- [x] Varied paragraph lengths — campuran 1–5 kalimat
- [x] Not every H2 → 3-bullet list — mayoritas prosa + 2 tabel; tidak ada H2 bullet-only
- [x] No generic claims without numbers — angka spesifik di 8+ tempat (1985, 1986, 20%, 1996, 250/420, Rp 50 miliar, 23,38 MMSCF, 160.000, 30–40%)
- [x] No stacked hype adjectives — tidak ada
- [x] No service-dump paragraph — anchor tunggal (beyond-pipeline/Mother Station) di penutup

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Program Langit Biru diluncurkan 1996 (Kepmen LH No. 15/1996); 1992 = pemicu peringkat UNEP | dossier ✓ + WebSearch (komara/weebly Kepmen LH 15/1996, dephub.go.id, ppkl.menlhk.go.id) | pass |
| 1986 inisiatif nasional target 20% armada taksi (bukan mandat 1987) | dossier ✓ (IESR) + WebSearch (IESR-corroborated: "1986 pemerintah mewajibkan… minimal 20%") | pass |
| Mother Station Medan: konstruksi mulai Juni 2025, seremoni Sep 2025, kapasitas hingga 1 MMSCFD, beyond-pipeline; operasi hedged 2025–2026 | dossier ✓ + WebSearch (gagas.co.id, liputan6, investor.id "PGN Operasikan MS CNG Medan") | pass |
| PLN Batam 2013 CNG gantikan solar, hemat ~Rp 50 miliar/tahun | dossier ✓ (Kementerian ESDM) | pass |
| Tabung Merah Putih 2026: uji coba pertengahan 2026, ~160.000 sambungan, klaim hemat 30–40% (estimasi pemerintah) | dossier ✓ + WebSearch (Kontan, Tirto, Fajar, Bloomberg Technoz Juli 2026) — atribusi "pemerintah mengklaim" benar | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 49 / "CNG" pos 9
- [x] Meta description 140–160 — actual: 155
- [x] Slug ≤60, kebab-case, keyword — actual: `sejarah-cng-indonesia-naik-turun-bbg` (36)
- [x] H1 contains keyword — "Sejarah CNG di Indonesia…" (54)
- [x] H2 count 4–5 — actual: 5 badan (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#3 "Kenapa Program BBG Lama Selalu Tersendat?"); ≥1 honest/counter-conventional (#5 "Apa yang Masih Bisa Menggagalkan CNG?")
- [x] Keyword in first 100 words — "**CNG di Indonesia**" di lead
- [x] Definition snippet near top (40–60 words) — blok "Secara singkat" (≈58 kata)
- [x] ≥8 LSI terms — counted: 10+ (sejarah BBG, konversi BBM ke BBG, Langit Biru, SPBG, TransJakarta BBG, Tabung Merah Putih, beyond pipeline, Mother Station, GTM, MMSCF)
- [x] 3 internal links (1 hub + 2 cousins) — perusahaan-cng-indonesia (hub, lead), gasku, gaslink
- [x] ≥1 external authoritative citation — actual: 2 inline (IESR, Kementerian ESDM) + ANTARA, Bloomberg Technoz
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 3
- [x] ≥1 list + ≥1 table — 2 tabel (kronologi + perbandingan era); list terwujud sebagai tabel/urutan bernomor dalam konsep visual — tabel memenuhi syarat format-mix untuk artikel naratif-sejarah
- [x] Word count 1,200–1,600 — actual: **1487**

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (H2 #1 "bermula pada pertengahan 1980-an…"; #2 kalimat pembuka tabel; #3 "Akar masalahnya konsisten…"; #4 "Perbedaan terbesar…"; #5 "Secara teknologi risikonya…")
- [x] Each body paragraph makes one independently quotable, verifiable point (tanggal + aktor + sumber per klaim)
- [x] FAQ parseable for FAQPage schema; freshness `publish_month: 2026-07-2` di meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas dibingkai sebagai distributor/pembangun infrastruktur CNG beyond-pipeline yang *menghadirkan/menyalurkan* gas bumi — bukan produsen; tidak ada klaim "memproduksi gas"
- [x] ≤3 PGN Gagas self-mentions — actual: 2 promosi (aside H2 #4 + Kesimpulan) + 1 entri faktual di tabel kronologi = dalam batas
- [x] No unverifiable superlatives — tidak ada "terbaik/terbesar/nomor satu"
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier (Gasku transport, Gaslink industri, Mother Station, GTM, 1 MMSCFD)
- [x] Closing uses a company_profile.md positioning line ("anak usaha PGN… bagian dari Subholding Gas Pertamina")
- [x] Soft website CTA present as the FINAL line ("…jelajahi selengkapnya di gagas.co.id.")
- [x] Hub link present as natural inline anchor in lead ("[CNG di Indonesia]") — bukan callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `cng-indonesia-05` part-1 (`cng-transisi-energi-indonesia`, angle_hash sha1:6edda8f46c23) — forward-looking (NZE 2060, bauran energi)
- Subtopic overlap (Jaccard estimate): ~0.10 (hanya "beyond pipeline" & "transisi energi" beririsan tipis)
- Verdict: **distinct angle confirmed** — piece ini backward-looking (sejarah 1985–2026, pola kegagalan/kebangkitan); subtopik historis (Blue Bird, TransJakarta, Langit Biru, kegagalan SPBG) tidak ada di part-1

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran clean (exit 0); `cng-indonesia-05.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict pass)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.343** (sentence burstiness 0.77; top30 vocab share 0.242 — sehat)
- [x] Plagiarism: distinctive passages web-checked; no non-Gagas verbatim hit ≥20 words — plagiarism score: **0.03**
  - 4 passage distinktif dicek WebSearch (500-bus TransJakarta; Tabung Merah Putih fiskal; Blue Bird 1985; aforisme Kesimpulan) → tidak ada verbatim ≥20 kata; fakta bersumber pada ANTARA/IESR/Kumparan yang dikutip, frasa orisinal. 2 kandidat lain adalah artefak sel-tabel/heading, bukan prosa.
