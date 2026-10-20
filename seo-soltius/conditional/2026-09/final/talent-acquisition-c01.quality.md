---
brief_id: "talent-acquisition-c01"
validator_run_date: "2026-09-01"
verdict: "pass"
ai_score: 0.08
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-09 (style_addendum.md §7 overrides applied — word band 800–1000 cleaned-prose, FAQ 2–3, internal links = 2, zero image placeholder = compliant by design; all other checks in full)"
---

# Quality Validator Report — 6 Tugas Pokok Talent Acquisition (Update 2026)

## Verdict: **pass**

Artikel lolos kedua gate yang menjadi tanggung jawab validator. **AI-detector heuristic v2.0 = 0.08** (jauh di bawah ambang revise 0.30) dengan hanya 2 flag low-severity yang wajar untuk artikel SEO ringkas 800–1000 kata bertopik tunggal. **Plagiarisme = 0.00**: enam passage distinctive di-WebSearch (quoted), tidak ada satu pun kecocokan verbatim di situs non-Soltius — hasil pencarian hanya menampilkan halaman bertopik sama (candidate journey, talent pipeline, sourcing kandidat pasif), bukan frasa yang sama. Klaim kapabilitas SAP SuccessFactors Recruiting **terverifikasi persis** terhadap sumber SAP resmi. Semua override addendum §7 dihormati. Dua catatan advisory non-blocking diserahkan ke publisher/CMS (angka SHRM 44 hari kini menjadi figur rilis 2025; URL sitasi SAP `/features.html` mengembalikan 403) — keduanya tidak menaikkan verdict karena angka SHRM nyata + di-hedge + tanpa tahun-peg, dan klaim SAP tetap akurat lewat sumber SAP resmi lain. Editor merekomendasikan approve; validator **concur → pass**. Curator boleh commit; batch tetap berhenti di sini untuk review user sesuai instruksi.

## AI Detector (heuristic v2.0)
- Score: **0.08** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.395** (target ≥0.45; ambang AI-tell kuat <0.30 — TIDAK terpicu)
- Sentence burstiness (CV): **0.633** (sehat — variasi kalimat kuat)
- Top-30 vocab share: **0.363** (target <0.30)
- Word count (raw script): 858 · (cleaned-prose, editor/frontmatter): **831** — dalam pita 800–1000
- Flags (2, keduanya low):
  - [low] `paragraph-low-variance` — CV=0.395. Di atas ambang AI-tell (0.30); wajar untuk artikel ringkas dengan tabel + daftar bernomor yang memangkas jumlah paragraf prosa. Burstiness kalimat 0.633 mengonfirmasi ritme manusiawi. **Bukan blocker.**
  - [low] `vocab-repetition` — top-30 = 36.3%. Konsekuensi topik tunggal + keyword focus ("talent acquisition", "rekrutmen", "tugas", "kandidat" berulang secara wajar) pada body ~830 kata. Bukan pola AI. **Bukan blocker.**
- Manual anti-AI scan (style_guide §5) — **bersih**: em-dash 0 (colon dipakai); tanpa opener klise (dibuka pada pain konkret "pasang lowongan, tunggu pelamar, isi kursi kosong"); tanpa "Selain itu" beruntun; tanpa "Penting untuk dicatat"; tanpa "Dengan demikian" overuse; tanpa "Sebagai kesimpulan" opener; paragraf bervariasi 1–4 kalimat (mis. "Namun alat hanya mempercepat proses." — kalimat pendek); tidak setiap H2 → 3-bullet (H2#1 tabel, H2#2 daftar bernomor 6, H2#3 prosa); tanpa adjektiva hype bertumpuk; tanpa service-dump.

## Plagiarism (web lookup of distinctive passages)
6 passage distinctive di-WebSearch (quoted). Aggregate score: **0.00**.

- Passage 1 (lead): "memperlakukan talent acquisition persis seperti rekrutmen biasa: pasang lowongan, tunggu pelamar, isi kursi kosong" — **clean** (hanya halaman bertopik "beda TA vs rekrutmen"; tidak ada frasa sama).
- Passage 2: "Keenam tugas berjalan sebagai satu alur hulu ke hilir, dari merencanakan kebutuhan sampai onboarding" — **clean** (tidak ada kecocokan; halaman lama Soltius muncul = self-reference target rewrite, diabaikan sesuai aturan).
- Passage 3: "memelihara pipeline kandidat, termasuk kandidat pasif, lewat networking, komunitas, dan basis data talenta" — **clean** (konsep talent pipeline umum; tidak ada frasa verbatim).
- Passage 4: "bukan sekadar memasang lowongan, melainkan mengelola seluruh perjalanan kandidat" — **clean** (ide candidate journey umum; tidak ada kalimat identik).
- Passage 5 (SHRM): "median time-to-fill untuk posisi non-eksekutif berada di sekitar 44 hari kalender (data AS)" — **clean** sebagai teks (klaim faktual bersumber; lihat verifikasi fakta di bawah).
- Passage 6 (SAP capability): "menggabungkan ATS, CRM, situs karier, sourcing, dan analitik rekrutmen dalam satu produk" — **clean/di-ignore** per aturan (deskripsi produk SAP standar = inherently high-overlap; bukan plagiarisme; akurat, lihat verifikasi).

Tidak ada passage dengan kecocokan verbatim ≥20 kata di situs non-Soltius → **pass** (score < 0.10, tanpa verbatim hit).

## Fact / claim re-verification (addendum §7 — cek berlaku penuh)

| Klaim | Verifikasi | Hasil |
|---|---|---|
| **SAP SuccessFactors Recruiting** = modul dalam suite HCM SAP; menggabungkan ATS + CRM + situs karier + sourcing + analitik dalam satu solusi | SAP Learning "Explaining the Main Pillars of SAP SuccessFactors Recruiting" (learning.sap.com): "combines a powerful applicant tracking system (ATS), job distribution, a responsive career site, candidate relationship management, and line-of-sight analytics into a single solution" | **CONFIRMED** — parafrase artikel setia & akurat |
| **SHRM time-to-fill** non-eksekutif ~44 hari kalender (data AS) | SHRM Recruiting Benchmarking: 44 hari = median rilis **2025**; rilis **2026** = **39 hari** non-eksekutif | **VERIFIED-but-STALE** — angka nyata & bersumber; kini figur tahun sebelumnya (lihat advisory ⚠️) |
| Gaji TA junior Rp5–8jt / senior Rp9–15jt/bln | Diatribusikan ke "berbagai situs karier di Indonesia" + ditandai "indikatif, bukan statistik resmi" | **pass** — bukan klaim statistik resmi; framing jujur (rentang berbeda dari brief tetapi tetap indikatif & berlabel) |
| Soltius: SAP Platinum via United VARs, Metrodata Group sejak 1998; implements/supports HCM SAP | company_profile + product_matrix framing (NEVER builds) | **pass** |

## Advisory notes (non-blocking — untuk publisher/CMS saat tayang)
- ⚠️ **SHRM 44 hari kini figur 2025.** Rilis SHRM 2026 melaporkan median time-to-fill non-eksekutif = **39 hari** (turun dari 44 hari 2025). Artikel menulis "sekitar 44 hari" tanpa tahun-peg (sesuai keputusan brief Flag #1) sehingga tetap jujur dan bersumber — bukan fabrikasi, tidak menaikkan verdict. Namun karena ini REWRITE berlabel "Update 2026", **disarankan** publisher mempertimbangkan memperbarui ke figur SHRM 2026 (39 hari) atau melonggarkan ke "sekitar 6 minggu (SHRM)" agar sinyal kesegaran konsisten. Keputusan konten diserahkan ke user pada review batch.
- ℹ️ **URL sitasi SAP `/features.html`.** `https://www.sap.com/products/hcm/recruiting-software/features.html` mengembalikan 403 (dikonfirmasi editor Flag #3). Kapabilitas tetap terverifikasi via SAP Learning + halaman produk SAP `.../recruiting-software.html`. *Rekomendasi*: publisher ganti deep-link sitasi ke URL SAP yang resolve 200 sebelum tayang. Konten klaim tidak berubah.
- ℹ️ **Cousin link status.** `https://www.soltius.co.id/id/blog/sap-successfactors-vs-hris-lokal` (sibling batch 2026-08) mungkin belum live saat publish. Sudah di-flag editor; publisher cek 200-status, tahan sementara bila belum tayang (total internal tetap 2). Tidak menghambat pass.

## Batch override compliance (addendum §7 — dicatat, bukan di-fail)
- Word band **800–1000**: COMPLIANT via cleaned-prose (831; raw script 858 juga di dalam pita). **N/A untuk "gagal >1000".**
- FAQ **2–3**: 3 Q&A → compliant.
- Internal links **2**: hub + cousin → compliant.
- Image checks: zero `{IMAGE_NN}` + tidak ada images.json → **compliant BY DESIGN** (dilewati, bukan isu).
- Definisi hanya sekali (snippet "Ringkasnya:"), H2 tidak mengulang definisi → compliant.
- Cek penuh lain (anti-AI §5, EYD, sitasi, framing Soltius, struktur, meta block) → **pass**.

## Loop status
Revision loop **0**. Verdict pertama = **pass**; tidak ada loop writer yang diperlukan.

## Report back
- Verdict: **pass**
- AI score: **0.08** (pass) · Plagiarism score: **0.00** (pass) · Overall = worst-of-two = **pass**
- Loop count: 0
- Rekomendasi: **curator-ready** — editor `approve` + validator `pass` terpenuhi. Batch berhenti untuk review user sesuai instruksi (validator TIDAK menjalankan curator, TIDAK commit ke articles_history). Dua advisory konten (SHRM 44→39; URL sitasi SAP) diserahkan ke user/publisher.
