---
brief_id: "studi-kasus-proyek-infrastruktur-di-indonesia-02"
editor_run_date: "2026-08-12"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.08
---

# Editor QC Report — Studi Kasus Proyek Infrastruktur di Indonesia: Empat Sektor, Empat Cara Uang Kembali

## Recommendation
**approve**

Draf ini masuk dalam kondisi yang jauh lebih baik daripada rata-rata: seluruh angka yang dikunci orkestrator sudah dipakai persis (Rp 9,37 T / Rp 12,93 T / Rp 9,02 T untuk Tol KLBM, tipping fee 30/70 dengan label "kesepakatan 2019", PSEL Legok Nangka dua-versi tahun + skala), angka terlarang "Rp 12,22 T" dan "49%" tidak muncul di mana pun termasuk blok FAQ, dan status RS Pendidikan Unpad/Udayana ditulis sebagai rekomendasi kajian dengan kombinasi AP + *user payment* dibatasi eksplisit ke kasus Unpad. Perbaikan yang saya lakukan bersifat higienis, bukan struktural: melengkapi tiga angka yang belum berlabel "indikatif"/tahun (VGF SPAM Umbulan, lahan LMAN, nilai PSEL), menaikkan atribusi konflik tenor konsesi 40 vs 50 tahun menjadi eksplisit "belum terselesaikan" beserta portal asalnya, menghapus presisi palsu pada anekdot pembuka dan pada kalimat "empat dari lima pertanyaan", serta menambahkan bingkai ATO pada penyebutan CP3P tanpa menambah *self-mention*. Skor AI-detector 0,04 (jauh di bawah ambang 0,30) dan seluruh pemeriksaan GEO §2a lolos hitung nyata. Satu catatan kejujuran: verifikasi plagiarisme berbasis WebSearch tidak dapat dijalankan karena kuota pencarian sesi ini habis sebelum Step 9 — penilaian plagiarisme dilakukan manual atas 8 kandidat dan tidak menemukan risiko nyata, tetapi saya menandainya sebagai *open flag*, bukan menyembunyikannya.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dash, tanpa pembuka klise, tanpa "Selain itu"/"Penting untuk dicatat", CV panjang paragraf 0,42–0,45. Register instruktur, bukan brosur/siaran pers. |
| Factual & KPBU/PPP & sertifikasi accuracy | 9 | Semua angka kunci cocok dengan dosir + daftar kunci orkestrator. Tiga label indikatif/tahun ditambahkan oleh editor. |
| On-page SEO compliance | 9 | Meta title 55, meta desc 155, slug 54, 18 istilah LSI, 3 internal + 3 eksternal. |
| GEO extractability (§2a) | 10 | Definition snippet 49 kata; jawaban 44–50 kata setelah kelima H2 utama (dihitung); `date_modified` ditambahkan. |
| IIGF Institute framing discipline | 9 | 3 *self-mention* (batas maksimal), bingkai unit manajemen pengetahuan PT PII, kepemilikan CP3P dikembalikan penuh ke APMG + bingkai ATO ditambahkan. |
| Internal linking | 10 | Tepat 3, semuanya inline, hub di lead, tanpa "BACA JUGA", tanpa `ptpii.co.id`/`gagas.co.id`. |
| FAQ quality | 8 | 6 Q&A, masing-masing 40–50 kata dan mandiri. Brief meminta 8; 6 tetap di dalam rentang playbook 5–8. |
| Originality (plagiarism + AI-detector) | 8 | AI-detector 0,04 (pass). Plagiarisme dinilai manual — verifikasi web tidak dapat dijalankan (kuota sesi habis). |

## What I fixed (changelog)
- **Label indikatif + tahun (Pagar wajib #4)** — `VGF SPAM Umbulan Rp 818 miliar (indikatif)` → `(indikatif, 2021)` di tabel **dan** di FAQ #5; `lahan via LMAN (indikatif ±Rp 1,1 triliun)` → `+ (2026)`; `±Rp 4–4,2 triliun` dan `±Rp 7,2 triliun / USD 400 juta` → keduanya diberi label `(indikatif)` / `(indikatif, 2026)`.
- **Konflik tenor konsesi Tol KLBM** — dari "berbeda antar portal pemerintah: 40 tahun versus 50 tahun" menjadi atribusi eksplisit per portal (`40 tahun menurut Kementerian Keuangan, 50 tahun menurut Kementerian PU`) + kalimat "Selisih itu belum terselesaikan, jadi jangan kutip salah satunya sebagai angka tunggal". Sekarang benar-benar disajikan sebagai perbedaan yang belum terselesaikan, bukan implisit.
- **Kejelasan label indikatif pada tiga angka Tol KLBM** — ditambahkan kalimat "Ketiganya indikatif per publikasi 2026" agar label tidak menggantung hanya pada angka terakhir.
- **Presisi palsu pada anekdot pembuka** — "Sebuah tim penyiapan proyek di pemerintah provinsi **pernah** menyalin…" (terbaca sebagai peristiwa nyata yang tak bersumber) → "**Pola yang sering ditemui** di ruang penyiapan proyek: sebuah tim di pemerintah provinsi menyalin…". Frasa ini juga ada di daftar "phrases that work" style_guide §3.
- **Presisi palsu #2** — "Empat dari lima pertanyaan itu dijawab pada tahap penyiapan" → "Kelima pertanyaan itu…" (angka "empat dari lima" tidak punya dasar dan kelimanya memang dijawab di tahap penyiapan).
- **Klaim keberatan daerah diberi atribusi** — "Sejumlah daerah sempat berkeberatan atas besarannya." → "**Pemberitaan daerah mencatat** sejumlah kabupaten/kota sempat menyuarakan keberatan atas besaran itu." (dosir menandai poin ini sebagai konteks pemberitaan yang tidak diverifikasi mendalam).
- **Bingkai ATO pada CP3P** — ditambahkan "…sementara pelatihannya diselenggarakan lembaga yang terakreditasi APMG sebagai *Accredited Training Organization* (ATO)". Dirumuskan tanpa menyebut nama klien sehingga **tidak menambah** *self-mention*, sekaligus menutup celah tafsir dari tautan `institute.iigf.co.id` pada anchor "jalur sertifikasi KPBU".
- **Entity clarity (GEO §2a)** — ekspansi akronim pada penggunaan pertama: `PJPK (Penanggung Jawab Proyek Kerja Sama)`, `SPAM, Sistem Penyediaan Air Minum`, `LMAN (*Lembaga Manajemen Aset Negara*)`, `dukungan kelayakan (*viability gap fund*/VGF…)`.
- **Presisi panjang tol** — "±38 km" → "±38,2 km" (angka Kemenkeu; dosir mencatat rentang 38,2–38,4 km antar portal).
- **Catatan basis data** — "Halaman resminya belum diperbarui." → "Halaman proyek di kedua portal pemerintah belum diperbarui, jadi bandingkan tanggal aksesnya sebelum memakai angka mana pun." (lebih *decision-useful*, dan menjelaskan portal mana).
- **Frontmatter** — `date_modified: "2026-08-12"` ditambahkan (freshness §2a); `word_count` 1467 → **1543**.

## What I flagged (open issues)
- ⚠️ **Verifikasi plagiarisme berbasis WebSearch tidak dapat dijalankan** — kuota WebSearch sesi ini (200/200) habis sebelum Step 9, sehingga 8 kandidat dari `quality-check.ps1` dinilai manual, bukan diuji verbatim ke web. *Rekomendasi*: sebelum publikasi, jalankan sekali *spot-check* verbatim untuk kandidat #2 ("Pada PSEL Legok Nangka besarannya Rp 386.000 per ton…") dan #8 (definisi PJPK). Keduanya adalah restatement definisi/angka publik, jadi risikonya rendah, tetapi belum diuji langsung.
- ⚠️ **Kronologi subsidi *tipping fee* dihentikan pada kesepakatan 2019** (sesuai instruksi kunci bulan ini). Dosir Flag #6 mencatat ada laporan revisi porsi provinsi pada 2025 yang belum terverifikasi utuh. *Rekomendasi*: jika di kemudian hari revisi itu terkonfirmasi ke sumber primer, artikel ini perlu penyegaran satu kalimat — bukan perbaikan sekarang.
- ⚠️ **FAQ 6 dari 8 pertanyaan PAA brief.** Dua PAA yang tidak diangkat ("Apa itu *availability payment* dalam proyek KPBU?" dan "Mengapa penyediaan infrastruktur tidak sepenuhnya diserahkan kepada swasta?") sudah tercakup substansinya di H2 #1/#5, dan menambahnya akan mendorong panjang mendekati batas atas band. *Rekomendasi*: biarkan; bila strategist ingin menangkap kedua PAA itu, jadikan aset artikel lain.
- ⚠️ **Tumpang tindih contoh (bukan sudut) dengan artikel 04.** PSEL Legok Nangka dan SPAM Semarang Barat dipakai di kedua artikel. Lensanya berbeda (di sini: mekanisme pembayaran; di 04: kesiapan fiskal/kelembagaan daerah), jadi bukan kanibalisasi. *Rekomendasi*: strategist bulan depan sebaiknya merotasi contoh proyek agar klaster tidak terasa berputar pada dua proyek yang sama.
- ⚠️ **Panjang 1.543 kata** — di dalam band 1.200–1.600 tetapi di paruh atas. *Rekomendasi*: tidak ada aksi; hanya jangan menambah materi lagi pada artikel ini.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hit
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 hit di seluruh artikel
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hit
- [x] "Dengan demikian" not overused — 0 hit
- [x] Em-dash count ≤2 — **0**
- [x] Varied paragraph lengths — CV 0,451 (prosa) / 0,422 (skrip); panjang paragraf 14–95 kata
- [x] Not every H2 → 3-bullet list — H2 #1 bullet, #2 tabel, #3 prosa penuh, #4 numbered, #5 prosa penuh
- [x] No generic claims without numbers — 79 token angka; 6+ angka bertahun terpenuhi
- [x] No stacked hype adjectives — 0 hit ("terbaik/terdepan/komprehensif/canggih")
- [x] No service-dump paragraph — satu anchor tunggal (JIPM) di penutup
- [x] Register check — bukan brosur, bukan siaran pers ("Dalam rangka"/"Sebagai wujud" 0 hit)

### B. Factual & KPBU/PPP & sertifikasi spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Tol KLBM: indikasi nilai konstruksi ±Rp 9,37 T dan indikasi nilai investasi ±Rp 12,93 T sebagai dua baris terpisah di simpulkpbu.pu.go.id; capex ±Rp 9,02 T di kpbu.kemenkeu.go.id; ketiganya indikatif 2026 | dossier ✓ (Core facts §Sektor 1) + daftar angka terkunci orkestrator ✓; "Rp 12,22 T" **tidak muncul** (0 hit) | **pass** |
| Masa konsesi Tol KLBM 40 tahun (Kemenkeu) vs 50 tahun (Kementerian PU), belum terselesaikan | dossier ✓ (Flag #1, confidence low untuk angka tunggal) — artikel kini menolak memilih salah satu dan menyebut sumber masing-masing | **pass** (diperkuat editor) |
| PSEL Legok Nangka: baseline ±Rp 4–4,2 T (rencana 2024; 1.836–2.000 ton/hari; 15 MW) vs ±Rp 7,2 T / USD 400 juta (*groundbreaking* 29 Juli 2026; 2.131 ton/hari; 40,79 MW); VGF indikatif ±Rp 1,34 T (2026) | dossier ✓ (Sektor 3 + Tabel referensi riset) + daftar terkunci ✓; perbedaan dijelaskan sebagai tahun + skala, bukan kontradiksi | **pass** |
| Tipping fee Legok Nangka Rp 386.000/ton (kesepakatan 2019, indikatif); provinsi 30% = Rp 115.800, kabupaten/kota 70% = Rp 270.200 | daftar terkunci orkestrator ✓; **angka 49% / Rp 189.140 / Rp 196.860 = 0 hit di body maupun FAQ** | **pass** |
| RS Pendidikan Unpad & RSPTN Udayana berstatus rekomendasi kajian (belum bertransaksi); kombinasi AP + pembayaran pasien hanya eksplisit untuk Unpad | dossier ✓ (Sektor 4 + Flag #8); tabel menulis "Status: rekomendasi kajian, belum bertransaksi" dan "(eksplisit untuk Unpad)"; paragraf pengiring menegaskan "masih berstatus usulan, bukan transaksi yang sudah berjalan" | **pass** |
| Dasar hukum: AP = PMK 260/PMK.08/2016 (berlaku 2026); dukungan kelayakan = PMK 223/2012 jo. PMK 170/2018, ambang investasi Rp 100 miliar; penjaminan = Perpres 78/2010 | dossier ✓ (Definisi & dasar hukum, confidence high, sumber kpbu.kemenkeu.go.id) — nomor + tahun + status lengkap | **pass** |
| CP3P dimiliki dan dianugerahkan APMG International; pelatihan diselenggarakan lembaga terakreditasi APMG (ATO) | product_matrix.md ✓ (Universal rules) + company_profile.md Rule 4 ✓; **MIF/AfDB 0 hit**; tidak ada klaim kepemilikan oleh klien | **pass** |
| Rincian pendanaan tiga arah SPAM Semarang Barat (480/400/500 miliar) | dossier Flag #4 — hanya agregat terkonfirmasi. **Tidak muncul di artikel** (0 hit) | **pass (dihindari dengan benar)** |
| Klaim "8→5 kajian" (Permen PPN 7/2023) | dossier Flag #5 confidence medium. **Tidak muncul di artikel** (0 hit) | **pass (dihindari dengan benar)** |
| SPAM Umbulan Rp 4,51 T | dossier menandai *fetch* sumber gagal. **Tidak muncul** (0 hit); hanya VGF Rp 818 miliar yang confidence high, kini berlabel (indikatif, 2021) | **pass (dihindari dengan benar)** |
| Klaim keanggotaan Kantor Bersama KPBU | **0 hit** — artikel tidak menyinggung sama sekali | **pass** |
| Nama individu | **0 hit** — seluruh atribusi institusional (Pemerintah Provinsi Jawa Barat, PDAM Tirta Moedal, BPJT, Kementerian Keuangan, Kementerian PU) | **pass** |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **55 chars** / keyword mulai pada posisi 0
- [x] Meta description 140–160 — actual: **155 chars**
- [x] Slug ≤60, kebab-case, keyword — actual: `studi-kasus-proyek-infrastruktur-di-indonesia-4-sektor` (**54**)
- [x] H1 contains keyword — "Studi Kasus Proyek Infrastruktur di Indonesia: Empat Sektor, Empat Cara Uang Kembali"
- [x] H2 count 4–7 — actual: **7** (5 badan + FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (**2**: "Apa yang Sebenarnya Membedakan…", "Mengapa Proyek Persampahan Lebih Sulit Dibiayai…"); ≥1 honest/counter-conventional H2 (**1**: "*Availability Payment* Bukan Jalan Pintas: Ia Memindahkan Risiko, Bukan Menghapusnya")
- [x] Keyword in first 100 words — ya (anchor hub di kalimat terakhir lead)
- [x] Definition snippet near top (40–60 words) — blockquote "Ringkasnya", **49 kata**
- [x] ≥8 LSI terms — counted: **18** (mekanisme pengembalian investasi, availability payment, user pay, tipping fee, jalan tol, SPAM, PSEL, dukungan kelayakan, viability gap fund, penjaminan infrastruktur, badan usaha pelaksana, PJPK, offtake, capex, PPP, KPBU, Perpres, PMK)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: `/e-library/lainnya/77/studi-kasus-kpbu-…` (lead), `/capacity-building` (H2 #4), `https://institute.iigf.co.id/` (H2 #5). Semua inline, tanpa callout.
- [x] ≥1 external authoritative citation — actual: **3** (kpbu.kemenkeu.go.id, simpulkpbu.pu.go.id, ppp.worldbank.org)
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] ≥1 list + ≥1 table — 1 bullet list, 1 numbered list, 1 tabel perbandingan 4 sektor × 6 kolom
- [x] Word count inside band (1.200–1.600) — actual: **1.543** (`tools/count_words.py`)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — dihitung: **48 / 47 / 50 / 44 / 50 kata** untuk H2 #1–#5. Tidak ada yang di luar rentang.
- [x] Each body paragraph makes one independently quotable, verifiable point — tiap paragraf badan membawa satu klaim + angka/sumbernya; paragraf peringatan angka investasi sengaja membawa satu tema (ambiguitas cakupan) dengan atribusi portal
- [x] FAQ parseable for FAQPage schema (`## FAQ` → `### <pertanyaan>` → jawaban paragraf tunggal); `date_modified: "2026-08-12"` ditambahkan ke meta block
- [x] Format cocok dengan tipe pertanyaan — tabel untuk perbandingan lintas sektor, numbered list untuk pertanyaan penyaring, paragraf definisi untuk "apa itu"

### D. IIGF Institute framing discipline (product_matrix.md + style_guide §11)
- [x] IIGF Institute framed as PT PII's knowledge-management unit — "unit manajemen pengetahuan KPBU milik PT PII" (badan) dan "selaku unit manajemen pengetahuan PT PII" (penutup). Tidak ada klaim universitas / entitas hukum mandiri / pemilik CP3P.
- [x] ≤3 IIGF Institute self-mentions — actual: **3** (e-library di H2 #2 · positioning line di Kesimpulan · CTA `institute.iigf.co.id`). Tepat di batas; penambahan bingkai ATO sengaja dirumuskan tanpa nama klien agar tidak menjadi yang keempat.
- [x] No unverifiable superlatives — 0 hit
- [x] Programme names match product_matrix.md / dossier — anchor tunggal **Riset & jurnal JIPM**, nama jurnal lengkap + sifat *peer-review double-blind*, tanpa klaim indeksasi
- [x] Closing uses a company_profile.md positioning line — parafrase "Melalui tiga pilar — edukasi, riset, dan advokasi kebijakan…"
- [x] Soft website CTA present as the FINAL line, after the conclusion — "Kompendium studi kasus dan terbitan riset KPBU dapat Anda telusuri lebih jauh di institute.iigf.co.id." (konsultatif, bukan "daftar sekarang")
- [x] Hub link present as a natural inline anchor in the lead, descriptive anchor text — bukan "BACA JUGA" (0 hit)
- [x] Isolation rule — `ptpii.co.id` dan `gagas.co.id`: **0 hit**. PT PII hanya muncul sebagai penyebutan faktual induk.
- [x] IIGF disambiguation — konteks "KPBU"/"PT PII"/"infrastruktur" selalu berdampingan dengan "IIGF Institute"

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — `articles_history/index.json` masih `"articles": []` (bulan pertama untuk klaster ini).
- Pembanding intra-batch (01 / 03 / 04): 01 = kerangka tujuh elemen + SPAM Umbulan; 03 = pola proyek tersendat di tahap penyiapan; 04 = kesiapan pemerintah daerah (PJU/SPAM/persampahan). Artikel ini = sumbu mekanisme pengembalian investasi lintas sektor.
- Subtopic overlap (Jaccard estimate): **≈0,15** terhadap 04 (persinggungan pada contoh proyek, bukan pada subtopik analitis); ≈0,05 terhadap 01; ≈0,00 terhadap 03.
- Verdict: **distinct angle confirmed**. Catatan non-blocking: PSEL Legok Nangka dan SPAM Semarang Barat muncul di 02 dan 04 — rotasi contoh disarankan untuk bulan berikutnya.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `studi-kasus-proyek-infrastruktur-di-indonesia-02.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict skrip: pass). Satu flag `low`: `paragraph-low-variance` CV=0,422 terhadap target internal skrip 0,45 — **di atas ambang QC kita (≥0,30)**, jadi tidak ditindaklanjuti; sentence burstiness 0,962 dan vocab-concentration top-30 0,285 keduanya sehat.
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.422** (skrip) / 0.451 (prosa saja)
- [ ] Plagiarism: distinctive passages web-checked — **DEGRADED MODE.** Kuota WebSearch sesi habis (200/200) sebelum Step 9, sehingga 8 kandidat tidak dapat diuji verbatim ke web. Penilaian manual: kandidat #3, #6, #7 adalah kalimat/H2 orisinal (sebagian ditulis ulang oleh editor pada sesi ini); #4, #5, #8 adalah restatement kutipan peraturan/definisi baku sepanjang <20 kata (masuk pengecualian "well-known definitions"); #1 dan #2 adalah angka publik yang dibungkus label indikatif khas artikel ini. Tidak ditemukan indikasi lifting paragraf. **plagiarism_score heuristik: 0.08 (rendah, belum diuji web).**

### G. Final polish
- [x] Transisi antar-H2 mulus; tidak ada H2 yang langsung menjatuhkan bullet tanpa prosa pengantar
- [x] Jawaban FAQ 40–50 kata, mandiri, masing-masing membawa satu angka/dasar hukum bertahun
- [x] `## Kesimpulan` berdiri sebagai H2 tersendiri, terpisah dari FAQ, tidak menggantung di bawahnya
- [x] Penutup tidak dibuka "Sebagai kesimpulan"; memakai *callback* ke pain di lead ("Kembali ke tim provinsi di awal tadi") — konsistensi *callback* diperiksa ulang setelah lead disunting
- [x] CTA konsultatif, bukan "beli/daftar sekarang"; berada di baris terakhir setelah Kesimpulan
- [x] Frontmatter lengkap; `word_count` disinkronkan ke 1.543

## The shipping question
Jika artikel ini tayang besok di institute.iigf.co.id, praktisi KPBU senior akan menemukan tiga hal yang jarang ada di SERP ini: tabel pembanding lintas sektor pada sumbu pembiayaan, penjelasan jujur bahwa angka "nilai investasi" mencampur dua cakupan berbeda, dan penolakan eksplisit untuk memilih satu angka tenor konsesi ketika dua portal pemerintah tidak sepakat. Calon peserta sertifikasi yang skeptis tidak akan menemukan satu pun kalimat jualan sebelum baris terakhir. WEBARQ Promote layak menandatangani ini.
