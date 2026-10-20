---
brief_id: "implementasi-erp-c01"
validator_run_date: "2026-07-06"
verdict: "pass"
ai_score: 0.21
ai_score_script: 0.15
plagiarism_score: 0.02
revision_loop: 0
batch: "conditional-2026-07 — style_addendum.md §7 overrides applied (word band 800–1000, FAQ 2–3, internal link 2, image checks N/A by design)"
---

# Quality Validator Report — Tahapan Implementasi ERP yang Wajib Diketahui Perusahaan

## Verdict: **pass**

Editor recommendation `approve` diwarisi dan dikonfirmasi. AI-detector heuristik v2.0 memberi skor skrip 0.15 dengan nol pola AI-tell leksikal; saya menambahkan satu flag sentence-uniformity secara manual (+0.06, luput dari skrip karena inputnya terpolusi baris tabel) sehingga skor adjudikasi menjadi **0.21 — tetap di bawah ambang revise 0.30**. Flag paragraph-uniformity borderline (CV=0.299, floor 0.30) diadjudikasi manual sesuai guardrail role dan preseden batch: CV level blok 0.557 (di atas target 0.45), penyebab keseragaman adalah band kata wajib style addendum, dan re-read manual mengonfirmasi ritme manusiawi. Sembilan passage distingtif dicek via quoted WebSearch: nol verbatim ≥20 kata; satu konvergensi frasa 8 kata pada statistik Gartner ber-atribusi dihitung konservatif sebagai partial near-match → skor plagiarisme **0.02** (pass <0.10). EYD dan integritas struktur bersih. Artikel siap untuk review user; curator TIDAK dijalankan sesuai instruksi batch.

## AI Detector (heuristic v2.0)

- Score skrip: **0.15** / 1.0 → verdict skrip: **pass** (thresholds: revise ≥0.30, reject ≥0.50)
- Score adjudikasi validator: **0.21** (skrip 0.15 + flag sentence-uniformity manual +0.06, lihat catatan 2) — tetap **pass**
- Paragraph burstiness (CV, metode skrip): **0.299** (target ≥0.45; floor 0.30) — diadjudikasi manual, lihat di bawah
- Sentence burstiness: 0.364 versi skrip; **0.325** versi fair (prosa murni tanpa baris tabel/heading) — di bawah target 0.35, flag medium ditambahkan manual
- Top-30 vocab share: **0.332** (di bawah ambang flag 0.35)
- Pattern flags AI-tell leksikal (frasa terlarang §5): **0** — nol "Selain itu" pembuka, nol "Penting untuk dicatat", nol filler era, nol "Dengan demikian"/"Sebagai kesimpulan", em-dash **1** (maks 2)
- Flags skrip (1):
  - [high] paragraph-uniformity: "Paragraph word-count CV=0.299 (target >=0.45; <0.30 is strong AI tell)"
- Flags ditambahkan validator (1):
  - [medium] sentence-uniformity (manual): CV prosa murni 0.325 < 0.35 — skrip tidak menangkapnya karena perhitungan kalimatnya menyertakan baris tabel dan heading yang menaikkan varian semu

### Adjudikasi manual flag paragraph-uniformity (borderline 0.001 di bawah floor 0.30)

Sesuai guardrail role ("jangan approve CV <0.30 tanpa re-analisis") saya mereplikasi perhitungan skrip dan menghitung ulang dengan metode blok:

| Metode perhitungan | n unit | CV |
|---|---|---|
| Skrip default (18 paragraf prosa; tabel & heading dibuang) | 18 | 0.299 |
| Level blok: 18 paragraf prosa + tabel 6 baris sebagai 1 unit ritme (150 kata) | 19 | **0.557** |

Temuan adjudikasi:

1. **Artefak metode pengukuran.** Filter skrip membuang justru perangkat ritme utama artikel — tabel 6 tahap × 4 kolom (150 kata) yang memecah body H2 #1. Dengan tabel dihitung sebagai unit ritme, CV = 0.557, di atas target 0.45.
2. **Sumber keseragaman = spesifikasi batch, bukan mesin.** 10 dari 18 paragraf prosa berada dalam band kata yang DIWAJIBKAN style_addendum (snippet 40–60, direct answer 40–60 per H2, FAQ 30–60, lead & kesimpulan ≤80) — menghasilkan klaster 40–62 kata by design pada artikel 940 kata. Melempar revise untuk "memperbaiki" CV akan memaksa writer melanggar band addendum itu sendiri. Preseden batch konsisten: strategi-scm-c01 (CV 0.288) dan sap-s4hana-c01 (CV 0.298) keduanya pass dengan adjudikasi serupa.
3. **Re-read manual seluruh artikel (style_guide §5).** Definisi tell = "symmetric paragraph lengths (all ~4 sentences)"; artikel memuat paragraf 1–3 kalimat, one-liner pengantar tabel (18 kata), kalimat 4 kata ("Proyeksi Gartner menambah konteks."), rentang kalimat 4–37 kata, tabel 6 baris — variasi struktural ADA, tidak ada tell simetri.
4. **Catatan jujur (pembeda dari sibling):** sentence burstiness artikel ini (0.325 fair / 0.364 skrip) adalah yang terendah di batch (sibling 0.567–1.644). Karena itu flag sentence-uniformity medium saya tambahkan manual (+0.06) dan skor adjudikasi dinaikkan ke 0.21 — bukan di-waive. Skor tetap di bawah 0.30; sinyal lain (nol tell leksikal, vocab share normal, CV blok 0.557) tidak mendukung revise. Jika artikel ini direvisi di kemudian hari, variasi panjang kalimat pada paragraf elaborasi (bukan paragraf ber-band) adalah area peningkatan pertama.

Keputusan: flag paragraph-uniformity **diterima sebagai borderline-justified dengan bukti, tidak menghalangi pass**; flag sentence-uniformity **diterima dan dihitung ke skor**. Bukan waiver diam-diam — didokumentasikan untuk reviewer.

## Plagiarism (web lookup of distinctive passages)

Kandidat skrip sebagian besar artefak markdown (baris tabel dan heading yang digabung splitter kalimat), sehingga sesuai intent role saya memilih sendiri 9 passage prosa paling distingtif dan menjalankan quoted WebSearch:

- ✅ Passage 1 (lead): "Mandat proyek sudah turun dari direksi, anggaran disetujui, tetapi tim belum punya peta proses" — **clean**; nol verbatim, hasil hanya artikel manajemen proyek generik
- ✅ Passage 2 (direct answer H2 #1): "Enam tahapan implementasi ERP berjalan berurutan: perencanaan dan penemuan kebutuhan, persiapan proyek..." — **clean**; kompetitor lokal (sumihai, mtmsolusindo, scaleocean, hashmicro) menulis topik sama dengan enumerasi tahapan BERBEDA; formulasi + pemetaan ke SAP Activate tidak ditemukan verbatim
- ✅ Passage 3 (aside praktisi): "Di lapangan, tahap yang paling sering molor justru bukan konfigurasi, melainkan pembersihan dan migrasi data" — **clean**; nol verbatim
- ✅ Passage 4 (definisi SAP Activate): "SAP Activate adalah metodologi implementasi resmi SAP untuk SAP S/4HANA dan solusi cloud-nya, sekaligus penerus metodologi ASAP..." — **clean**; kategori deskripsi produk standar (inherently high-overlap, ignorable by rule); semua sumber yang muncul berbahasa Inggris, nol verbatim Indonesia
- ✅ Passage 5 (statistik Panorama): "Median timeline proyek adalah 9 bulan..." — **clean**; nol verbatim; angka bersumber & disitasi inline
- ⚠️ Passage 6 (statistik Gartner): "lebih dari 70% inisiatif ERP yang baru diimplementasikan" — **partial near-match 8 kata** pada paper akademik (Kohesi: Jurnal Multidisiplin Saintek via ResearchGate) yang mengutip prediksi Gartner yang sama; kalimat lengkap artikel BERBEDA (framing "tidak sepenuhnya memenuhi *business case*" + parenthetical sendiri). Konvergensi frasa wajar untuk terjemahan Indonesia standar atas statistik ber-atribusi (Gartner disebut by-name di teks) — arguably ignorable by rule, tetapi dihitung konservatif: **+0.02**
- ✅ Passage 7 (formulasi orisinal): "proyek meleset di area yang paling jarang diinvestasikan" — **clean**; nol verbatim
- ✅ Passage 8 (fit-to-standard): "proses bisnis dicocokkan ke praktik terbaik bawaan sistem, bukan sistem yang dikustomisasi mengikuti proses lama" — **clean**; mesin pencari eksplisit tidak menemukan frasa yang sama
- ✅ Passage 9 (positioning line Soltius): "Sebagai SAP Platinum Partner melalui keanggotaan United VARs dan berpengalaman sejak 1998..." — **clean by rule**; hit hanya soltius.co.id, united-vars.com, LinkedIn resmi = self-reference disengaja dari company_profile pre-approved (diabaikan sesuai aturan scoring)

- Exact match non-Soltius (≥20 kata verbatim): **0** × (+0.05) · Partial near-match non-Soltius: **1** × (+0.02)
- **Aggregate score: 0.02** → pass (ambang: pass <0.10; tidak ada passage dengan verbatim hit ≥20 kata)

## EYD & structure integrity (spot-scan penuh berlaku)

- EYD: `pascaimplementasi` serangkai ✓ (perbaikan editor); `sekadar` ✓; `praktik` ✓; `risiko` ✓; preposisi `di` vs prefiks `di-` konsisten benar ✓; bentuk terikat + `-nya` pada istilah asing benar ("solusi cloud-nya") ✓; istilah asing konsisten italic (*fit-to-standard*, *cutover*, *hypercare*, *build*, *backlog*, *business case*) ✓.
- Catatan minor non-blocking: (1) "pasca go-live" mengikuti konvensi korpus batch/final terdahulu — keputusan konvensi terdokumentasi di QC editor, bukan error; (2) "3 pilar" (PUEBI ideal: "tiga pilar") dibiarkan sebagai konvensi angka-inline GEO batch ini (kebutuhan ≥4 angka spesifik inline).
- Struktur: frontmatter YAML valid; H1 tunggal; 3 body H2 (2 question-format) + FAQ + Kesimpulan; blockquote snippet "Ringkasnya:" tunggal 52 kata (band 40–60); tabel 6 baris × 4 kolom well-formed; FAQ 3 Q&A; 2 internal link (hub + cousin) + 2 sitasi eksternal ber-link + 1 atribusi Gartner by-name; soft CTA soltius.co.id = baris terakhir ✓; em-dash 1 ✓; zero `{IMAGE_NN}` ✓.

## Overrides batch conditional 2026-07 (dicatat N/A / compliant, BUKAN fail)

| Check script/playbook default | Status per addendum §7 |
|---|---|
| Word band 1.500–1.800 | **N/A — override 800–1000**: compliant (940 markdown-stripped / 986 raw-token skrip; keduanya dalam band; editor melaporkan 940) |
| FAQ 5–8 | **N/A — override 2–3**: compliant (3 Q&A, jawaban 43/40/45 kata) |
| Internal link 3 | **N/A — override 2**: compliant (tepat 2: 1 hub migrasi-erp-ke-cloud + 1 cousin cara-kerja-sistem-sap) |
| Image placeholder + images.json | **N/A — by design**: 0 `{IMAGE_NN}`, tanpa images.json — compliant, bukan isu |

Semua cek lain (AI-tell §5, plagiarisme via quoted WebSearch, EYD, integritas struktur) diterapkan penuh — hasil di atas.

## Loop status

Revision loop **0** (first pass). Tidak ada loop writer yang diperlukan.

## Handoff

Verdict **pass** + editor **approve** → normalnya curator-ready. Sesuai instruksi batch conditional 2026-07: **curator TIDAK dijalankan, tidak ada commit ke articles_history** — artikel berhenti di `final/` untuk review user.

Raw script output: `conditional/2026-07/final/implementasi-erp-c01.id.quality-input.json`
