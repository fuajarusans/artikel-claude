---
brief_id: "timeline-migrasi-rise-c01"
validator_run_date: "2026-07-06"
verdict: "pass"
ai_score: 0.15
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-07 — style_addendum.md §7 overrides applied (word band 800–1000, FAQ 2–3, internal link 2, zero image placeholder by design)"
---

# Quality Validator Report — Estimasi Timeline Migrasi RISE with SAP: Dari Assessment hingga Go-Live

## Verdict: **pass**

Editor merekomendasikan approve; validasi independen mengonfirmasi. AI detector heuristik memberi skor 0.15 (verdict pass, jauh di bawah ambang revise 0.30) dengan satu flag paragraph-uniformity yang setelah adjudikasi manual terbukti artefak metode pengukuran, bukan tell AI (lihat di bawah). Delapan passage plagiarisme paling distingtif dicek via WebSearch ber-kutip: seluruhnya bersih — nol verbatim match di situs non-Soltius, skor agregat 0.00. Overrides batch conditional 2026-07 dicatat N/A/compliant sesuai instruksi. Tidak ada yang menghalangi publikasi; artikel curator-ready (batch berhenti di sini untuk review user sesuai instruksi run).

## AI Detector (heuristic v2.0)

- Score: **0.15** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → verdict skrip: **pass**
- Paragraph burstiness (CV, metode skrip): **0.279** (target ≥0.45; floor 0.30) — **diadjudikasi manual, lihat di bawah**
- Sentence burstiness: **0.904** versi skrip; **0.412** versi fair (prosa murni tanpa baris tabel/heading, di atas ambang flag 0.35) — rentang kalimat 4–33 kata, ritme manusiawi
- Top-30 vocab share: **0.343** (di bawah ambang flag 0.35 — tidak terpicu)
- Word count skrip (termasuk heading/tabel): 1012 | paragraf prosa: 17 | kalimat: 48
- Em-dash: **1** (maks 2 — aman)
- Lexical AI-tells (Selain itu berantai, Penting untuk dicatat, filler era, Dengan demikian, Sebagai kesimpulan, Menariknya): **0 hit** — nol flag leksikal
- Flags (1):
  - [high] paragraph-uniformity: "Paragraph word-count CV=0.279 (target >=0.45; <0.30 is strong AI tell)" — **DITERIMA SEBAGAI ARTEFAK PENGUKURAN, TIDAK MENGHALANGI PASS** (adjudikasi di bawah)

### Adjudikasi manual flag paragraph-uniformity (wajib per role guardrail: tidak boleh approve CV<0.30 tanpa re-analisis)

Saya mereplikasi perhitungan skrip dan menghitung ulang dengan metode alternatif:

| Metode perhitungan | n unit | CV |
|---|---|---|
| Skrip (prosa saja, tabel & heading dibuang, filter ≥5 kata) | 17 | 0.279 |
| Blok ritme (tabel 6 fase × 4 kolom = 131 kata dihitung sebagai unit ritme) | 18 | **0.447** |

Temuan:

1. **Artefak metode pengukuran.** Filter skrip membuang justru perangkat ritme utama artikel — tabel 6 fase (131 kata) yang memecah body H2 #2. Dengan tabel dihitung sebagai unit ritme, CV = 0.447, praktis di target 0.45 dan jauh di atas floor 0.30. Pola identik dengan tiga sibling batch yang sudah diadjudikasi pass: implementasi-erp-c01 (0.299), sap-s4hana-c01 (0.298), strategi-scm-c01 (0.288).
2. **Definisi tell §5 tidak terpenuhi.** Style guide §5 mendefinisikan tell sebagai "symmetric paragraph lengths (all ~4 sentences)". Artikel memuat paragraf 1 kalimat (paragraf empat-faktor, 25 kata), paragraf CTA 18 kata, pembuka kalimat 4 kata ("Di lapangan, rentangnya lebar."), campuran paragraf 1–3 kalimat, rentang prosa 18–70 kata + tabel — variasi struktural ADA.
3. **Sumber keseragaman = spesifikasi batch, bukan mesin.** Band 40–70 kata per paragraf adalah konsekuensi struktural style_addendum §5 (jawaban langsung 40–60 kata per H2, FAQ 30–60 kata, snippet 40–60 kata, lead/kesimpulan ≤80 kata) pada artikel 966 kata. Melempar revise untuk "memperbaiki" CV akan memaksa writer melanggar band addendum itu sendiri.
4. **Semua sinyal statistik lain human:** sentence burstiness 0.904 (skrip) / 0.412 (prosa murni), nol lexical tell, vocab share di bawah ambang, em-dash 1.

Keputusan: flag **diterima sebagai artefak terdokumentasi, tidak menghalangi pass**. Bukan waiver diam-diam — dicatat untuk reviewer. Catatan kalibrasi: CV skrip 0.279 adalah yang terendah di batch (sebelumnya 0.288); jika artikel berikutnya turun lagi, pertimbangkan penyesuaian filter skrip (tabel sebagai unit ritme) daripada adjudikasi per artikel.

## Plagiarism (web lookup 8 passage distingtif, quoted WebSearch)

- 8 candidate passages checked — **8 clean, 0 hit, 0 partial**
- ✅ Passage 1 (H2 #2 + kalimat fase): "Keenam fase berjalan berurutan: Discover, Prepare, Explore, Realize, Deploy..." — clean; hasil hanya overlap topik nama fase SAP Activate (istilah standar industri, inherently high-overlap), tidak ada match frasa Indonesia
- ✅ Passage 2 (snippet): "Estimasi resmi SAP: konversi brownfield 12–15 bulan, bluefield 12–18 bulan, greenfield 15–21 bulan..." — clean; tidak ada situs yang memuat frasa ini; sumber lain memakai angka berbeda (mis. LeverX 6–10/12–18 bulan)
- ✅ Passage 3 (Tigaraksa): "PT Tigaraksa Satria Tbk memulai Project SUNRISE pada 8 Juli 2024 dan go-live pada 6 Januari 2025..." — clean; fakta terkonfirmasi publik (Liputan6, Kontan, soltius.co.id — self-reference intentional, diabaikan per aturan), TANPA lift frasa: kalimat artikel orisinal
- ✅ Passage 4 (deadline ECC): "Masa mainstream maintenance SAP Business Suite 7, termasuk SAP ECC, berakhir 31 Desember 2027" — clean; fakta publik luas, tidak ada match frasa Indonesia verbatim
- ✅ Passage 5 (Bertrandt): "Bertrandt AG, perusahaan jasa engineering asal Jerman, go-live SAP S/4HANA Cloud Private Edition..." — clean; satu-satunya sumber relevan = case study resmi SAP (sap.com/documents, Mei 2025) yang memang dikutip artikel, berbahasa Inggris — bukan plagiarisme
- ✅ Passage 6 (FAQ #1): "Menurut SAP S/4HANA Transformation Pocket Guide (SAP, 2024), durasi end-to-end indikatif adalah..." — clean; frasa Indonesia tidak ditemukan; Pocket Guide (community.sap.com) = sumber yang disitasi
- ✅ Passage 7 (lead): "Proyek sudah disetujui, anggaran dikunci, lalu direksi bertanya: kapan go-live?" — clean; tidak ada match verbatim, hanya kemiripan topik manajemen proyek ERP
- ✅ Passage 8 (hitung mundur): "kick-off paling lambat jatuh antara akhir September dan akhir Desember 2026" — clean; nol match (hasil pencarian tidak relevan sama sekali)
- Aggregate score: **0.00** → plagiarism verdict: **pass** (tidak ada passage dengan verbatim hit ≥20 kata di situs non-Soltius)

## Batch-2026-07 overrides (dicatat N/A / compliant per instruksi run — BUKAN kegagalan)

| Check skrip/role default | Status |
|---|---|
| Word band 1.500–1.800 | **N/A — override 800–1000**: compliant (966 metode pipeline; angka skrip 1012 termasuk heading/tabel) |
| FAQ 5–8 | **N/A — override 2–3**: compliant (3 Q&A, jawaban 40/45/40 kata) |
| Internal link 3 | **N/A — override 2**: compliant (1 hub + 1 cousin) |
| Image placeholder + images.json | **N/A — zero by design**: compliant (0 `{IMAGE_NN}` diverifikasi; tidak ada images.json; BUKAN isu) |

## EYD & integritas struktur (cek penuh)

- Struktur utuh: frontmatter lengkap (meta 56/157 chars, `date_modified` ada), H1 tunggal, 3 body H2 (2 question-format) + FAQ (3 H3) + Kesimpulan, snippet blockquote 40–60 kata, tabel 6 baris × 4 sel utuh, 2 internal link live-verified, 2 sitasi eksternal ber-link, CTA soltius.co.id = baris terakhir ✓
- EYD: "praproyek" sudah dibetulkan editor ✓; tidak ada kesalahan EYD blocking
- ℹ️ Non-blocking (kosmetik, tidak menghalangi pass): (a) "pasca go-live" (baris tabel Run + secondary keyword) — bentuk terikat *pasca-* + istilah asing berhyphen idealnya "pasca-go-live"; konsisten dengan pemakaian korpus batch, biarkan untuk keseragaman atau seragamkan saat refresh; (b) "volume custom code" (H2 #3) tidak diitalikkan padahal "*custom code*" di H2 #1 italik — inkonsistensi italik minor

## Loop status

Revision loop **0**. Verdict pass pada pemeriksaan pertama — tidak ada loop writer.

## Rekomendasi

**Curator-ready** (editor approve + validator pass). Sesuai instruksi run batch conditional 2026-07: curator TIDAK dijalankan — artikel berhenti di `final/` untuk review user.
