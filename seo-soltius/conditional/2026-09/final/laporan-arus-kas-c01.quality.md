---
brief_id: "laporan-arus-kas-c01"
validator_run_date: "2026-09-01"
verdict: "pass"
ai_score: 0.08
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-09 (style_addendum.md overrides applied — word band 800–1000 via cleaned-prose count, FAQ 2–3, internal links exactly 2, NO image placeholders/no images.json, definisi hanya di snippet, maks 2 self-mention Soltius)"
---

# Quality Validator Report — Laporan Arus Kas: Pengertian, Metode Langsung & Tidak Langsung

## Verdict: **pass**

Artikel lolos kedua gerbang QC validator. AI-detector heuristik memberi skor **0,08** (jauh di bawah ambang revise 0,30) dengan burstiness kalimat **1,241** — sangat kuat, penanda ritme manusiawi, bukan pola AI seragam. Web-lookup pada seluruh passage prosa distinctive tidak menemukan satu pun kecocokan verbatim di situs non-Soltius; topik arus kas ramai dibahas di blog akuntansi Indonesia (Kledo, Accurate, Mekari Jurnal, Gramedia) tetapi frasa artikel ini orisinal. Klaim regulasi PSAK 207 diverifikasi ulang terhadap IAI (URL yang disitasi) dan cocok; klaim kapabilitas SAP S/4HANA Finance (semantic tag → G/L account, dua metode) terverifikasi terhadap SAP Learning/SAP Community; seluruh rantai aritmetika ilustrasi dihitung ulang independen dan konsisten penuh (laba bersih Rp82 juta bahkan rekonsiliasi sempurna lintas kedua metode). EYD/typografi rapi, 0 em-dash. Editor `recommendation: approve` + validator `verdict: pass` → curator-ready. Sesuai instruksi batch, validator TIDAK menjalankan curator dan TIDAK commit ke articles_history — batch berhenti di sini untuk review user.

## AI Detector (heuristic v2.0)
- Score: **0,08 / 1.0** (thresholds: revise ≥0,30, reject ≥0,50) → **pass**
- Sentence burstiness (CV): **1,241** (target ≥0,45) — sangat kuat; variasi panjang kalimat lebar (kalimat pendek "Konsistensi klasifikasi pun dijaga sistem, bukan ingatan orang." bercampur kalimat panjang analitis).
- Paragraph burstiness (CV): **0,339** (target ≥0,45) — di bawah target, **di atas lantai kritis 0,30** (failure-mode validator: tolak jika CV paragraf <0,30). **Acceptable / bukan penalti bermakna.** Nilai rendah ini adalah artefak struktur: artikel memuat **4 tabel** yang menyela prosa, sehingga skrip menghitung sisa paragraf prosa yang panjangnya relatif seragam; digabung dengan burstiness kalimat 1,241 yang sangat tinggi, teks tidak berbaca AI. Flag hanya menambah porsi kecil ke skor total 0,08.
- Top-30 vocab share: **0,392** (target <30%). **Acceptable.** Artikel akuntansi terfokus ~989 kata yang porosnya "kas", "arus", "laba", "metode", "operasi", "langsung" secara alami mengulang istilah inti; bukan pengenceran AI-style. Kontribusi ke skor kecil, tidak mendekati ambang revise.
- Anti-AI manual re-check (di luar skrip): `Selain itu` opener beruntun = 0, `Penting untuk dicatat/dipahami` = 0, `Dengan demikian` = 0, opener klise `di era digital / seiring perkembangan / tidak dapat dipungkiri` = 0. **Em-dash (U+2014) = 0** (≤2). En-dash (U+2013) = 0. Angka negatif tabel memakai notasi kurung akuntansi standar `(40.000.000)` — typografi benar, bukan hyphen/minus salah tempat. Ritme paragraf bervariasi 1–4 kalimat. Tanpa adjektiva hype bertumpuk, tanpa service-dump.

## Plagiarism (web lookup of distinctive passages)
Skrip mengekstrak 8 kandidat. Passage yang murni tabel, self-citation Soltius/SAP, dan rumus standar diabaikan sesuai aturan skoring ("ignore common/standard phrasings, self-reference, cited-source URLs"). Seluruh passage prosa distinctive dicek via quoted WebSearch:

- ✅ Lead: "Laba di laporan tercatat naik, tetapi saldo rekening perusahaan justru makin seret" — **clean.** Tema "untung tapi kas seret" ramai (datapost, balancioindo, founderplus, ilmukeuangan) tetapi tanpa kecocokan verbatim; frasa & urutan kata berbeda.
- ✅ "Di sistem ERP, laporan arus kas tidak disusun ulang manual tiap bulan" — **clean.** Hasil hanya artikel bertema ERP+arus kas (Erzap, Jurnal.id, Kledo, Accurate); tidak ada verbatim.
- ✅ "melihat kedua metode berujung pada angka sama dari data yang sama" — **clean.** Hasil = artikel data-analysis generik, tidak relevan; tanpa verbatim.
- ✅ "Membacanya berdampingan dengan laba rugi mencegah salah baca 'untung tapi kas seret'" — **clean.** Hasil = panduan baca laporan keuangan (Kledo, Accurate, reku); tanpa verbatim.
- ⚪ "Standarnya kini bernomor PSAK 207 ... disahkan 12 Desember 2022 dan berlaku efektif 1 Januari 2024" — **diabaikan sebagai fakta regulasi standar** (inherently high-overlap; nama+tanggal standar). Bukan hit plagiarisme; lihat verifikasi faktual di bawah. Hit yang muncul = IAI (sumber yang memang disitasi) + sekunder.
- ⚪ Self-citation Soltius ("Sebagai SAP Platinum Partner melalui United VARs ... sejak 1998") + kutipan SAP Learning + baris tabel Pendanaan + rumus `arus kas = operasi + investasi + pendanaan` — **diabaikan** (self-reference / cited-source / tabel / rumus standar).
- **Aggregate plagiarism score: 0,00** (< 0,10 pass; tidak ada verbatim hit ≥20 kata di situs non-Soltius, tidak ada partial near-match >70% word-order).

## Fact / regulation / product-capability re-verification (override: re-verify formula math + cited regulation + product-capability claims)

**1. Aritmetika ilustrasi — dihitung ulang independen, seluruhnya benar & internally consistent:**
- Metode tidak langsung (operasi): 82 + 30 − 40 − 25 + 18 = **65.000.000** ✓
- Metode langsung (operasi): 810 − 517 − 190 − 15 − 23 = **65.000.000** ✓
  - sub: kas dari pelanggan 850 − 40 = 810 ✓; kas ke pemasok 510 + 25 − 18 = 517 ✓; kas beban ops 220 − 30 = 190 ✓
- **Rekonsiliasi silang (uji ekstra):** laba bersih dari data metode langsung = 850 − 510 − 220 − 15 − 23 = **82.000.000**, identik dengan titik awal metode tidak langsung. Ilustrasi konsisten penuh, bukan angka tempelan. ✓
- Laporan lengkap: 65 − 100 + 40 = **5.000.000** kenaikan bersih kas; pendanaan 60 − 20 = 40 ✓; kas 50 + 5 = **55.000.000** kas akhir ✓
- Klaim "laba Rp82 juta hanya menyisakan tambahan kas Rp5 juta" — konsisten dengan angka di atas ✓

**2. Klaim regulasi PSAK 207 — VERIFIED (bukan pasal karangan):** WebSearch mengonfirmasi PSAK 207 Laporan Arus Kas = penomoran ulang dari PSAK 2, **disahkan 12 Desember 2022, efektif 1 Januari 2024** — cocok dengan sumber yang disitasi artikel (IAI web.iaiglobal.or.id/PSAK-Umum/8) dan diperkuat sumber sekunder (dwimartani, accountingmadeeasy, training-grc). Artikel tidak mengarang nomor pasal; klaim "standar menganjurkan metode langsung" ditulis sebagai anjuran umum tanpa mengutip nomor paragraf (aman, sesuai catatan editor — asalnya IAS 7 par. 19).

**3. Klaim kapabilitas SAP S/4HANA Finance — VERIFIED (bukan fabrikasi):** WebSearch mengonfirmasi aplikasi Cash Flow Statement S/4HANA bersumber dari **semantic tag yang dialokasikan ke G/L account** (via Financial Statement Version), persis klaim artikel; mendukung metode langsung & tidak langsung. URL SAP Learning yang disitasi valid & ada. Tidak ada T-code/condition type/versi karangan. (Catatan non-blocking: SAP kini memperkenalkan pendekatan "Reporting Rules" sebagai penerus semantic tag untuk IFRS 18 — artikel tidak mengklaim semantic tag sebagai satu-satunya/terbaru metode, jadi tetap akurat terhadap dokumentasi yang disitasi.)

## Structure & EYD integrity (all apply in full)
- Frontmatter YAML lengkap; H1 ber-keyword; lead 1 paragraf ≤80 kata (pain konkret "laba naik tapi saldo seret" + keyword); snippet "Ringkasnya:" (blockquote, ~56 kata) — **definisi muncul sekali saja**, tidak ada H2 "Apa itu..." yang mengulang. ✓
- Body **4 H2 konten** (band 3–4) + `## FAQ` + `## Kesimpulan`. ≥1 H2 question-format: H2#2 "Apa Bedanya Metode Langsung dan Tidak Langsung?" ✓. ≥1 H2 praktis/terstruktur: H2#1 (tabel tiga aktivitas), H2#3 (3 tabel ilustrasi angka). Total 4 tabel. ✓
- Jawaban langsung 40–60 kata memuat poin BARU tiap H2 (bukan parafrase snippet). ✓
- FAQ = **3** Q&A (band 2–3); tiap jawaban memuat angka/fakta (anjuran metode langsung; Rp82jt→Rp65jt; setara kas ≤3 bulan). ✓
- Kesimpulan ≤80 kata + 1 positioning line Soltius; soft CTA soltius.co.id sebagai baris terakhir terpisah. ✓
- **Self-mention Soltius = 2** (positioning "Soltius mengimplementasikan dan mendampingi..." + CTA soltius.co.id); framing implementer/pendamping, bukan "builds SAP". ✓
- EYD/typografi: Rp82.000.000 (titik ribuan), notasi kurung akuntansi untuk negatif, italic istilah asing (*cash flow statement*, *direct method*, *semantic tag*, *G/L account*), akronim di-expand sekali. Bersih.

## Batch override log (addendum §7 — recorded as N/A/compliant, not failed)
- **Word band 800–1000: COMPLIANT.** Skrip mentah menghitung **1115 token** (termasuk sel 4 tabel, token angka Rp, heading) — sesuai override, angka mentah skrip **TIDAK dibaca sebagai >1000 fail**. Hitungan cleaned-prose diverifikasi ulang independen via `tools/count_words.py` atas file final = **989** (cocok dengan laporan editor), di dalam band. **N/A→compliant.**
- **FAQ 2–3: COMPLIANT** (3 Q&A).
- **Internal links = 2: COMPLIANT** (hub `macam-macam-laporan-keuangan` di H2#1 + cousin `laporan-laba-rugi-komponen-jenis-cara-membaca` di H2#3), inline natural, bukan callout "BACA JUGA".
- **Sitasi eksternal = 2: COMPLIANT** (IAI PSAK 207 + SAP Learning).
- **Image checks: N/A by design** — 0 `{IMAGE_NN}` + tidak ada images.json; stage image di-skip untuk batch ini. Tidak di-flag.

## Loop status
Revision loop **0** (first pass). Tidak ada revisi diperlukan; tidak melooping writer.

## Handoff
- Curator-ready: editor `recommendation: approve` + validator `verdict: pass`.
- Sesuai instruksi batch, validator **tidak** menjalankan curator dan **tidak** commit ke articles_history — batch berhenti di sini untuk review user.
