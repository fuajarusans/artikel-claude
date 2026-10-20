---
brief_id: "migrasi-sap-2026-c01"
validator_run_date: "2026-09-01"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-09 (style_addendum.md §7 overrides applied — 800–1000 kata cleaned-prose, tanpa image placeholder, FAQ 2–3, internal link = 2, definisi hanya sekali di snippet, maks 2 self-mention Soltius)"
---

# Quality Validator Report — 2027 Sudah Dekat: Mengapa Migrasi SAP Sebaiknya Dimulai 2026

## Verdict: **pass**

Artikel lolos kedua gerbang QC validator. Heuristic AI-detector menilai **0.04/1.0** (jauh di bawah ambang revise 0.30) dengan hanya satu flag low-severity (varians panjang paragraf 0.302 — di atas ambang AI-tell kuat 0.30). Pencarian web berkutip atas 8 passage distingtif tidak menemukan satu pun kecocokan verbatim Bahasa Indonesia di halaman non-Soltius: setiap URL yang muncul adalah sumber otoritatif yang memang dikutip (news.sap.com, CIO.com) atau halaman resmi Soltius/United VARs (referensi diri yang disengaja) — bukan plagiarisme. Seluruh klaim angka & regulasi SAP di-verifikasi ulang live 2026-09-01 terhadap sumber primer dan terkonfirmasi akurat (ECC *mainstream* 31 Des 2027, *extended* 2028–2030 @ +2 poin persen, Compatibility Packs akhir Mei 2026, Gartner 39%/~14.000/~35.000/~17.000, runway 18–36 bulan sebagai rentang terdokumentasi). Semua override batch 2026-09 dipatuhi; semua cek penuh (anti-AI, EYD, struktur, sitasi, framing Soltius) lolos. Tidak ada isu yang menghambat commit. Selaras dengan rekomendasi editor **approve**. **Curator-ready.**

## AI Detector (heuristic v2.0)
- Score: **0.04** / 1.0 — verdict **pass** (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.302** (target ≥0.45; ambang AI-tell kuat <0.30 — sedikit di atasnya, jadi tidak memblokir)
- Sentence burstiness (CV): **0.89** (sangat bervariasi — indikator manusia kuat)
- Top-30 vocab share: **0.313** (di bawah ambang 0.35)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.302 (target ≥0.45)

**Catatan validator (re-read manual atas flag borderline):** paragraph-uniformity 0.302 berada tepat di atas ambang AI-tell kuat 0.30, sehingga per aturan agent (*jangan approve jika CV < 0.30*) tetap boleh lolos — namun karena borderline, saya baca ulang seluruh body. Ritme sengaja dipadatkan sesuai konvensi batch (paragraf 1–4 kalimat pada artikel 859 kata) sehingga varians paragraf memang menyempit, TAPI: (a) burstiness kalimat 0.89 sangat tinggi (percampuran kalimat pendek–sedang jelas), (b) 0 pola AI-tell lain (0 "Selain itu" berturut, 0 "penting untuk dicatat", 0 era-filler, 0 em-dash), dan (c) suara praktisi hadir dan spesifik ("sisa kapasitas, bukan tim inti"; "Itu penyangga, bukan strategi"; "Dari situ, kalender menentukan sisanya"). Konfirmasi: bukan sinyal konten AI. Tidak menuntut revisi.

## Plagiarism (web lookup of distinctive passages)
8 passage distingtif dicek via WebSearch berkutip. Query script yang memuat sintaks tautan markdown diganti fragmen prosa bersih agar lookup bermakna.

- ✅ Lead "Seorang CIO yang menjalankan SAP ECC ... sudah tahu tenggat 2027 itu ada" — clean (hanya artikel ECC-2027 berbahasa Inggris & CIO.com; frasa ID persis tak muncul)
- ✅ "Tenggat hak pakai *SAP Compatibility Packs* untuk S/4HANA *on-premise* berakhir akhir Mei 2026 lewat masa transisi final" — clean (yang muncul hanya news.sap.com yang kita kutip + explainer Inggris; bukan plagiarisme)
- ✅ "per akhir 2024 baru 39% atau sekitar 14.000 dari ~35.000 pelanggan ECC yang telah migrasi ... ~17.000 ... 2027" — clean (sumber teratas CIO.com — sumber yang diatribusikan; frasa ID orisinal)
- ✅ "permintaan konsultan S/4HANA berpengalaman melampaui pasokan ... *day rate* naik 30–50% pada 2026–27" — clean (nihil match; estimasi industri berlabel)
- ✅ "Runway 18–36 bulan dan *mainstream maintenance* yang berakhir 31 Desember 2027 membuat migrasi SAP 2026 ..." (Kesimpulan) — clean (nihil match ID)
- ✅ "Sebagai SAP Platinum Partner melalui United VARs dan berpengalaman sejak 1998, Soltius menjalankan *assessment* ..." — clean (hanya halaman resmi Soltius/United VARs — referensi diri disengaja, bukan plagiarisme)
- ✅ "Alasannya aritmetika waktu: runway 18–36 bulan (diperkirakan) berbenturan dengan berakhirnya *mainstream maintenance* ECC ..." (snippet) — clean (prosa orisinal)
- ✅ "*Extended maintenance* memang tersedia untuk 2028–2030 dengan premi +2 poin persen di atas basis *maintenance*" — clean (nihil match ID; hanya sumber fakta Inggris)
- **Aggregate plagiarism score: 0.00** — tidak ada verbatim hit ≥20 kata di situs non-Soltius; tidak ada partial near-match. Lolos ambang (pass jika <0.10 dan tanpa hit verbatim 20+ kata). Semua kecocokan hanyalah (a) sumber yang diatribusikan (news.sap.com, CIO.com) atau (b) halaman resmi Soltius/United VARs — keduanya di-ignore per aturan agent Step 3.

## Fact re-verification (klaim angka, regulasi & kapabilitas — WAJIB re-cek)
Semua di-WebSearch live 2026-09-01 terhadap sumber primer:

| Klaim di artikel | Sumber primer | Verdict |
|---|---|---|
| ECC *mainstream maintenance* berakhir 31 Des 2027; tanpa perpanjangan | CIO.com + Rimini Street + SAP (CEO C. Klein: "we will not extend") | ✅ akurat |
| *Extended maintenance* 2028–2030 @ +2 poin persen di atas basis *maintenance*, tanpa inovasi baru | saplicensingexperts + all-for-one + sm-c.com.au ("premium of two percent points on the maintenance basis") | ✅ akurat |
| Tenggat hak pakai SAP Compatibility Packs (S/4HANA on-premise) akhir Mei 2026; masa transisi final; SAP Note 2269324 | news.sap.com (Des 2025) + UKISUG + erp.today ("final transition period ... until end of May 2026") | ✅ akurat |
| Gartner: per akhir 2024 baru 39% (~14.000) dari ~35.000 pelanggan ECC migrasi; ~17.000 masih ECC pada 2027 | CIO.com (dikutip persis; Gartner) | ✅ akurat |
| Runway keputusan–stabilisasi 18–36 bulan (envelope: 3–6 + 12–24 + 2–4) | Rentang terdokumentasi ("a typical ECC-to-S/4HANA project runs 18 to 36 months") | ✅ akurat (dilabeli "diperkirakan/envelope"; dibedakan dari durasi proyek 12–24) |
| *Day rate* konsultan S/4HANA +30–50% (2026–27 vs 2024); talenta "beberapa kali lipat" pasokan | Tak ada angka SAP-resmi; berlabel **"estimasi industri"** di artikel | ✅ framing jujur (bukan diklaim angka SAP; "3x" tidak dikunci) |
| Soltius = SAP Platinum Partner via United VARs, berdiri 1998 | company_profile.md + united-vars.com + soltius.co.id ("only SAP Platinum Partner in Indonesia, established 1998") | ✅ akurat |

Tidak ada fabrikasi. Angka pasar (day rate) jujur diberi label "estimasi industri", bukan disajikan sebagai angka SAP. Angka tak terverifikasi "~35% masih planning" (di-flag researcher) tidak muncul — diganti fakta Gartner terverifikasi. Detail/harga paket RISE with SAP tidak diklaim.

## Batch-override compliance (style_addendum.md §7)
| Cek | Nilai batch | Hasil | Status |
|---|---|---|---|
| Word band | 800–1000 (cleaned-prose) | **859** via `tools/count_words.py` (raw script 898 — tetap dalam pita; TIDAK dibaca sebagai >1000 fail) | ✅ compliant |
| FAQ | 2–3 Q&A | 3 Q&A | ✅ compliant |
| Internal link | 2 (1 hub + 1 cousin) | 2 (hub `migrasi-erp-ke-cloud` di lead + cousin `RISE with SAP` di H2 #2) | ✅ compliant |
| Image placeholder / images.json | 0 (dilarang by design) | 0 `{IMAGE_NN}`; tidak ada images.json | ✅ N/A by design — image checks skipped |
| Definisi hanya sekali (snippet) | 1× di snippet | Definisi di "Ringkasnya:"; H2 #1 = *back-calculation* (bahan baru), bukan restatement | ✅ compliant |
| Self-mention Soltius | maks 2 | 2 (positioning line Kesimpulan + soft CTA baris terakhir; body tanpa nama Soltius) | ✅ compliant |
| Sitasi eksternal otoritatif | 1–2 | 2 (news.sap.com H2 #1 + Gartner via CIO.com H2 #2) | ✅ compliant |

## Full-force checks (berlaku penuh — bukan override)
- **Anti-AI (§5):** lolos — 0 opener klise ("Di era digital / Seiring perkembangan / Penting untuk / Dengan demikian / Sebagai kesimpulan"), 0 em-dash, 0 "Selain itu" berturut, ritme kalimat sangat bervariasi (CV 0.89), suara praktisi hadir tanpa nama Soltius di body. Kesimpulan buka dengan callback ("Tenggat 2027 bukan soal panik, melainkan soal kalender"). (Lihat AI Detector.)
- **EYD & konsistensi:** bersih. Istilah asing di-italic konsisten (*mainstream/extended maintenance*, *go-live*, *envelope*, *procurement*, *assessment*, *business case*, *brownfield*/*greenfield*, *hypercare*, *system integrator*, *day rate*, *SAP Readiness Check*, *custom code*); pemisah ribuan gaya Indonesia benar (14.000 / 35.000 / 17.000); akronim di-expand sekali (SAP ECC = SAP ERP Central Component; system integrator = SI); nama produk SAP lengkap di sebutan pertama. Tidak ditemukan error EYD.
- **Struktur:** utuh — frontmatter YAML valid, H1 + snippet blockquote "Ringkasnya:" + 3 H2 body (semua question-format; #2 dengan tabel komparasi 6-baris; #1 dengan list 3-ruas) + `## FAQ` (3 Q&A) + `## Kesimpulan` + soft CTA baris terakhir. Tabel well-formed; honest hedging hadir (*extended maintenance* "penyangga, bukan strategi"; kasus menunda yang masuk akal disebut eksplisit).
- **Framing Soltius:** implementator/pendamping ("menjalankan *assessment* serta mendampingi eksekusi migrasi ke SAP S/4HANA"), **bukan** pembuat; kredensial akurat (SAP Platinum via United VARs, sejak 1998); tanpa superlatif brand ("paling terkendali dan paling murah" = kesimpulan analitis timing, bukan klaim superlatif Soltius).

## What I flagged (advisory — tidak memblokir verdict)
- ℹ️ **Verifikasi 200 OK URL internal saat publish.** Editor mencatat URL internal tidak di-fetch ulang run ini. Hub `migrasi-erp-ke-cloud` = rank #1 (known-good); cousin `RISE-With-SAP-Untuk-ERP-Enterprise` casing tidak lazim. Bukan isu plagiarisme/AI (di luar mandat verdict saya, dan tool live-fetch tidak tersedia di sesi ini) — dibawa maju sebagai cek pra-commit publish. Tidak memblokir **pass**.
- ℹ️ **Overlap angka snippet ↔ jawaban H2 #1** (18–36 bulan + 31 Des 2027): dikonfirmasi **bukan** repetisi definisi — snippet menyatakan tesis (*apa/mengapa*), H2 #1 memakai kedua angka sebagai bahan *back-calculation* baru (batas mulai ≈ pertengahan 2026). Load-bearing untuk aritmetika; desain GEO wajar. Selaras penilaian editor.

## Loop status
Revision loop **0** (first pass). Tidak ada revisi dipicu; tidak ada writer loop.

## The shipping question
Akankah review HCU/SpamBrain menandai ini sebagai konten AI ter-skala? **Tidak** — score 0.04, burstiness kalimat 0.89, tanpa pola AI-tell; paragraph CV 0.302 di atas ambang kritis dan didukung suara praktisi. Akankah Originality.ai memberi >30%? **Kemungkinan tidak** berdasarkan tell statistik. Akankah frasa 20 kata dari paragraf mana pun muncul verbatim di situs non-Soltius? **Tidak** — 8 passage bersih. Semua "tidak" → **pass**.
