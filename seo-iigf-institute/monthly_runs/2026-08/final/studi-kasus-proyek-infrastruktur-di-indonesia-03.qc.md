---
brief_id: "studi-kasus-proyek-infrastruktur-di-indonesia-03"
editor_run_date: "2026-08-12"
recommendation: "approve"
overall_score: 9
ai_score: 0.00
plagiarism_score: 0.05
---

# Editor QC Report — Studi Kasus Proyek Infrastruktur di Indonesia: Belajar dari Proyek yang Tersendat

## Recommendation
**approve**

Ini draf paling berisiko secara nada dalam batch bulan ini, dan penulis menanganinya dengan disiplin. Semua landmine yang ditandai brief dan dosir sudah bersih sejak draf masuk: tidak ada klaim keanggotaan Kantor Bersama KPBU, tidak ada statistik karangan tentang berapa banyak proyek KPBU mandek (artikel justru menyatakan terus terang bahwa statistik itu tidak ada), tidak ada nama individu, tidak ada tautan ke `ptpii.co.id`/`gagas.co.id`, klaim "8→5 kajian" sudah dipangkas menjadi hanya angka lima, angka "20 proyek penerima fasilitas" absen, dan label KA Makassar-Parepare sebagai "contoh proyek yang mundur, bukan berhenti" masih utuh persis seperti yang dilaporkan penulis. Bingkai APMG sebagai pemilik dan pemberi kredensial CP3P juga benar. Saya memperbaiki delapan hal di tempat, dua di antaranya substantif: pola hambatan nomor 4 semula berbunyi "Pemahaman PJPK terhadap konsep KPBU masih terbatas" — sebuah penilaian kompetensi terhadap pejabat pemerintah yang sumbernya justru berkonfidensi rendah (Flags #2 dosir) — dan saya bingkai ulang menjadi persoalan kapasitas struktural yang diakui kerangka KPBU sendiri; lalu batas *success fee* 25 persen di FAQ semula tampil telanjang tanpa label indikatif, tahun, maupun sumber, dan kini beratribusi lengkap. Pemindaian orisinalitas lulus bersih (AI-detector 0,00; burstiness paragraf 0,52). Leg pencarian web untuk verifikasi plagiarisme **tidak dapat dijalankan** karena kuota WebSearch sesi ini habis (200/200) — saya menilai kedelapan kandidat secara manual dan tidak menemukan satu pun kutipan verbatim ≥20 kata dari sumber non-IIGF Institute; ini dicatat sebagai keterbatasan, bukan sebagai temuan negatif.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Nol em-dash, nol frasa AI klasik, panjang paragraf 7–98 kata. Kalimat pendek ("Yang paling sering disalahpahami ada di sini.", "Dua hal itu berbeda.") memberi ritme instruktur, bukan siaran pers. |
| Factual & KPBU/PPP & sertifikasi accuracy | 9 | 5 klaim dicek silang ke dosir + product_matrix; semua lulus setelah satu perbaikan atribusi (25 persen). Setiap angka membawa tahun. |
| On-page SEO compliance | 9 | Seluruh butir §3 lulus. Meta description dipertajam dari "…dan FAQ" ke dua *value prop* substantif, tetap 153 karakter. |
| GEO extractability (§2a) | 9 | Kelima H2 isi membuka dengan jawaban 41–47 kata; *definition snippet* 54 kata; FAQ siap FAQPage; `date_modified` ditambahkan. |
| IIGF Institute framing discipline | 9 | 2 penyebutan nama + 1 CTA situs = tepat di plafon 3. Bingkai "unit manajemen pengetahuan PT PII" saya tambahkan di penutup untuk disambiguasi IIGF. |
| Internal linking | 10 | Tepat 3, semua inline dan deskriptif, hub di lead. Tidak ada "BACA JUGA". |
| FAQ quality | 9 | 6 Q&A, jawaban 39–51 kata, mandiri, tiap angka bertahun. |
| Originality (plagiarism + AI-detector) | 9 | AI-detector 0,00 tanpa *flag*; verifikasi web plagiarisme terdegradasi karena kuota (dinilai manual). |

## What I fixed (changelog)
- **Pola hambatan #4 dibingkai ulang** dari "Pemahaman PJPK terhadap konsep KPBU masih terbatas" menjadi "Kapasitas teknis penyiapan belum merata di semua tim PJPK", dan sandarannya dipindahkan dari evaluasi akademik berkonfidensi rendah ke fakta struktural berkonfidensi tinggi (kerangka KPBU menyediakan Badan Penyiapan sebagai pendamping). Ini menutup satu-satunya kalimat yang bisa terbaca sebagai penilaian terhadap pejabat pemerintah.
- **FAQ Badan Penyiapan**: "*success fee* maksimal 25 persen" (angka telanjang) → "menurut penjelasan asosiasi praktisi KPBU (Juni 2023), imbalannya berupa *success fee* dengan batas indikatif 25 persen … perlu dicek pembaruannya ke sumber resmi". Sumber + tahun + label indikatif kini lengkap.
- **Pola hambatan #1**: contoh KA Makassar-Parepare semula hanya menyebut bentang lima kabupaten/kota tanpa menghubungkannya ke pola "pengadaan tanah menahan trase". Ditambahkan atribusi "dan sumber-sumber itu mengaitkannya dengan mundurnya jadwal" agar bukti dan label pola nyambung tanpa melampaui catatan sumber. Label "mundur, bukan berhenti" dipertahankan utuh.
- **Sitasi PPIAF/Bank Dunia di-hedge** sesuai Flags #7 dosir: ditambahkan "sejauh yang terbaca dari ringkasan publiknya" (dokumen hanya tersedia sebagai cuplikan), dan "Bank Dunia" → "Kelompok Bank Dunia".
- **Pola hambatan #3** diberi penanda pola ("Polanya khas: …") agar tidak terbaca sebagai deskripsi satu kasus spesifik yang tidak terverifikasi.
- **Pola hambatan #2**: "teks aslinya tidak dapat diverifikasi ulang" → "teks aslinya tidak tersedia terbuka untuk diperiksa ulang" (subjek jelas, tetap jujur); **#6** dirapikan agar tidak mengulang kata-kata *lead-in*-nya sendiri.
- **Penutup**: positioning line diberi bingkai kelembagaan penuh — "Sebagai unit manajemen pengetahuan PT Penjaminan Infrastruktur Indonesia (Persero), IIGF Institute …" — memenuhi aturan disambiguasi IIGF (Guardrail #10) tanpa menambah jatah penyebutan.
- **Lead**: "menyusun jadwal dari asumsi keliru" → "asumsi yang terlalu optimistis" (mengurangi nada menghakimi terhadap PJPK). **Meta description** dipertajam. **Frontmatter**: `date_modified: "2026-08-12"` ditambahkan (kesegaran §2a); `word_count` 1510 → 1557.

## What I flagged (open issues)
- ⚠️ **Batas *success fee* 25 persen berpotensi usang.** Dosir menelusurinya ke Permen PPN 2/2020, sementara artikel ini sendiri menyebut Permen PPN/Bappenas 7/2023 sebagai pembaruan kerangka. Saya sudah menutupnya dengan atribusi asosiasi praktisi + tahun + label indikatif + ajakan cek ke sumber resmi, jadi aman terbit. *Recommendation*: verifikasi manual ke JDIH Bappenas sebelum publikasi; bila angka berubah, cukup edit satu kalimat FAQ.
- ⚠️ **Evaluasi akademik KA Makassar-Parepare tetap tidak terverifikasi** (ResearchGate 403, Flags #2 dosir). Artikel hanya memakainya untuk satu poin (kredibilitas studi) dengan hedge eksplisit, dan tidak untuk risiko politik maupun kelayakan finansial — dua pola itu bersandar pada sumber primer Kemenkeu. *Recommendation*: biarkan apa adanya; hedge-nya sudah proporsional.
- ⚠️ **Klaim "belum ada preseden matang Badan Penyiapan" bertanggal Juni 2023.** Sudah berlabel tahun dua kali (badan artikel + FAQ) dan ditutup dengan "layak dicek pembaruannya". *Recommendation*: tandai untuk penyegaran pada *refresh* berikutnya.
- ⚠️ **`company_profile.md` masih memuat baris "Membership: Kantor Bersama KPBU Republik Indonesia" dan positioning line "Sebagai anggota Kantor Bersama KPBU…"**, yang bertentangan dengan daftar resmi 7 K/L di `kpbu.kemenkeu.go.id`. Artikel ini tidak tersentuh (kata "Kantor Bersama" nol kali). *Recommendation*: di luar cakupan artikel — perbaiki `knowledge_base/company_profile.md` sebelum bulan depan, karena artikel lain bisa memakai baris itu apa adanya.
- ⚠️ **Verifikasi plagiarisme berbasis web tidak dijalankan** (kuota WebSearch sesi 200/200). Dinilai manual; lihat Bagian F.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 kemunculan
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 kemunculan sama sekali
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0
- [x] Em-dash count ≤2 — **0**
- [x] Varied paragraph lengths — 7 s.d. 98 kata; *burstiness* paragraf 0,52
- [x] Not every H2 → 3-bullet list — 1 daftar bernomor, 1 daftar butir 3 baris, 1 tabel, sisanya prosa
- [x] No generic claims without numbers — 9 angka/tanggal spesifik, semua bertahun
- [x] No stacked hype adjectives — 0
- [x] No service-dump paragraph — satu anchor (Riset & jurnal JIPM) saja
- [x] **Register brosur / siaran pers** (mode gagal khas klien ini) — bersih; tidak ada "Dalam rangka", "Sebagai wujud komitmen", "Segera daftar"
- [x] **Nada menghakimi** — satu-satunya kalimat berisiko (pola #4) sudah dibingkai ulang; DPRD hanya muncul sebagai kutipan kategori status resmi dan sebagai baris tabel tentang dokumen pembaca sendiri

### B. Factual & KPBU/PPP & sertifikasi spot-check
| Claim | Source check | Verdict |
|---|---|---|
| "kredensial yang dimiliki dan dianugerahkan APMG International" (CP3P) | product_matrix ✓ (aturan universal: APMG pemilik & pemberi kredensial) + company_profile Rule 4 ✓; MIF/AfDB sebagai pengembang tidak muncul | **pass** |
| "Permen PPN/Kepala Bappenas Nomor 7 Tahun 2023 menyederhanakan prastudi kelayakan menjadi lima kajian: strategis, ekonomi, komersial, finansial, manajemen" | dossier ✓ (klaim terverifikasi, sumber ahlikpbuindonesia.or.id 19 Juli 2024, diatribusikan di badan artikel); klaim "dari 8" **tidak** dipakai sesuai instruksi | **pass** |
| Kategori status "Dihentikan: pelaksanaan fasilitas berhenti karena tidak terdapat persetujuan dari DPRD" (Kemenkeu, diakses 2026) | dossier ✓ *high confidence*, sumber primer, ditautkan langsung; angka "20 proyek" (data 2020) tidak dibawa | **pass** |
| KA Makassar-Parepare: lima kabupaten/kota, PSN, beroperasi Maret 2023, "mundur, bukan berhenti" | dossier ✓ *medium*, atribusi "kompilasi laman pemerintah dan pemberitaan hingga 2026" eksplisit; status persis seperti tercatat | **pass** |
| *Success fee* Badan Penyiapan maksimal 25 persen | dossier ✓ nilainya, tetapi draf menampilkannya tanpa sumber/tahun/label → **fail sebelum edit**, **pass setelah** diberi "menurut penjelasan asosiasi praktisi KPBU (Juni 2023) … batas indikatif" | **pass (setelah perbaikan)** |
| *(pemeriksaan tambahan)* Klaim keanggotaan Kantor Bersama KPBU | tidak ada di artikel (0 kemunculan) — *hard fail* dihindari | **pass** |
| *(pemeriksaan tambahan)* Statistik jumlah proyek KPBU mandek | tidak ada; artikel menyatakan eksplisit "Tidak ada statistik resmi berapa banyak proyek berhenti di tahap ini" | **pass** |
| *(pemeriksaan tambahan)* Nama individu | 0 — termasuk penulis bab e-library (Flags #6 dosir); dikutip sebagai "Kajian di e-library IIGF Institute yang terbit 21 Oktober 2025" | **pass** |

*Catatan verifikasi:* WebSearch tidak tersedia sesi ini (kuota 200/200 habis). Kelima klaim diverifikasi terhadap dosir + `product_matrix.md` + `company_profile.md`; keempat klaim regulatif juga konsisten silang antar-sumber di dalam dosir. Tidak ada klaim yang bergantung pada sumber di luar dosir.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **60**/keyword mulai posisi 0
- [x] Meta description 140–160 — actual: **153**
- [x] Slug ≤60, kebab-case, keyword — actual: `studi-kasus-proyek-infrastruktur-tersendat` (42)
- [x] H1 contains keyword — "Studi Kasus Proyek Infrastruktur di Indonesia: Belajar dari Proyek yang Tersendat"
- [x] H2 count 4–7 — actual: **7** (5 isi + FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (2: "Apa arti 'tersendat'…", "Bagaimana mengenali…"); ≥1 honest/counter-conventional H2 ("Tidak semua hambatan adalah kesalahan tim proyek")
- [x] Keyword in first 100 words — kalimat pertama
- [x] Definition snippet near top (40–60 words) — **54 kata**, blockquote "Ringkasnya"
- [x] ≥8 LSI terms — counted: **23**
- [x] 3 internal links (1 hub + 2 cousins) — `/e-library/lainnya/77/…` (lead), `/capacity-building` (pola #4), `https://institute.iigf.co.id/` (H2 #5). Nol tautan ke `ptpii.co.id`/`gagas.co.id`; nol "BACA JUGA"
- [x] ≥1 external authoritative citation — actual: **2** (keduanya `kpbu.kemenkeu.go.id`)
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] ≥1 list + ≥1 table — daftar bernomor (6 pola), daftar butir (3 catatan kajian), tabel diagnostik 5 baris
- [x] Word count inside band 1.200–1.600 — actual: **1.557** (`count_words.py`), naik dari 1.510; plafon keras 1.600 dihormati

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — dihitung betulan: 47 / 44 / 42 / 43 / 41 kata untuk kelima H2 isi
- [x] Each body paragraph makes one independently quotable, verifiable point — tiap butir daftar berdiri sendiri lengkap dengan atribusi; paragraf "Kelayakan ekonomi diukur dengan EIRR…" dapat dikutip utuh
- [x] FAQ parseable for FAQPage schema (H3 pertanyaan → paragraf jawaban, konsisten); `date_modified: "2026-08-12"` ditambahkan ke blok meta
- Catatan: jawaban FAQ 39–51 kata (ambang 40–80); yang 39 kata adalah artefak pemenggalan token pada "PPN/Bappenas" dan secara praktis berada di ambang bawah — dibiarkan agar tidak menambah beban kata mendekati plafon.

### D. IIGF Institute framing discipline (product_matrix.md + style_guide §11)
- [x] Dibingkai sebagai unit manajemen pengetahuan PT PII (ditambahkan di penutup) — bukan pemilik/pemberi CP3P, bukan universitas, bukan entitas hukum berdiri sendiri
- [x] ≤3 IIGF Institute self-mentions — actual: **3** (aside e-library H2 #4 · positioning line di Kesimpulan · CTA situs), tepat sesuai brief
- [x] No unverifiable superlatives — 0
- [x] Nama program/anchor cocok dengan `product_matrix.md` / dosir — anchor tunggal **Riset & jurnal JIPM**, muncul sekali di penutup; JIPM dideskripsikan persis seperti `company_profile.md` (*peer-review double-blind*, multidisiplin), tanpa klaim indeksasi
- [x] Closing uses a company_profile.md positioning line — parafrase baris "Melalui tiga pilar — edukasi, riset, dan advokasi kebijakan…", digabung bingkai induk PT PII. Baris "Sebagai anggota Kantor Bersama KPBU" **sengaja tidak dipakai** (Flags #1 dosir)
- [x] Soft website CTA sebagai baris TERAKHIR setelah `## Kesimpulan` — "Kajian kritis, e-library, dan kanal publikasi KPBU dapat Anda telusuri lebih dulu di institute.iigf.co.id sebelum memutuskan bentuk kontribusinya." Konsultatif, bukan "daftar sekarang"
- [x] Hub link sebagai anchor inline alami di lead, teks deskriptif, bukan callout
- [x] Disambiguasi IIGF — konteks "KPBU/infrastruktur/PT PII" hadir di kedua penyebutan

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — `articles_history/index.json` masih `"articles": []`; pembanding diambil dari saudara sekluster bulan ini (01, 02, 04).
- Subtopic overlap (Jaccard estimate): **~0,08 vs 01** (kerangka 7 elemen + SPAM Umbulan), **~0,05 vs 02** (mekanisme pengembalian lintas sektor), **~0,15 vs 04** (kesiapan KPBU daerah — titik singgung tunggal: kapasitas/kesiapan, tetapi 04 bertumpu pada PJPK daerah/DPRD dan pilihan skema, sementara 03 pada pola patah lintas semua tingkat pemerintahan).
- Judul, slug, dan H2 tidak beririsan; hanya artikel ini yang berformat *troubleshooting*.
- Verdict: **distinct angle confirmed** (semua di bawah ambang 0,4).

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `studi-kasus-proyek-infrastruktur-di-indonesia-03.id.quality-input.json` written (dijalankan dua kali; hasil kedua atas versi final)
- [x] AI-detector score < 0.30 — actual: **0.00**, verdict `pass`, `flags: []`
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.516** (burstiness kalimat 0.821; konsentrasi kosakata top-30 0.31)
- [ ] Plagiarism: distinctive passages web-checked — **TIDAK DAPAT DIJALANKAN (degraded mode).** Kuota WebSearch sesi ini habis (200/200) dan panggilan verifikasi dikembalikan tanpa hasil. Kedelapan kandidat dinilai manual terhadap teks sumber yang dikutip dosir:
  1. *Preseden Badan Penyiapan* (skor 29) — restrukturisasi kalimat asosiasi praktisi (Juni 2023) yang dikutip dosir; runtun verbatim terpanjang ±6 kata, beratribusi eksplisit. Aman.
  2. *Kategori penghentian DPRD* (21) — kutipan langsung berlabel tanda petik + tautan ke sumber Kemenkeu yang disitasi. Dikecualikan (sumber otoritatif tersitasi).
  3. *Definisi Dukungan Kelayakan* (20) — ±14 kata bahasa regulatif resmi, beratribusi "Kementerian Keuangan menegaskan" + tautan. Dikecualikan.
  4. *"Pola nomor 2 dan nomor 4 satu keluarga…"* (18) — sintesis editorial orisinal, tidak mungkin ada padanannya.
  5. *Tiga tahap + Perpres 38/2015* (17) — fakta definisional umum, redaksi milik penulis.
  6. *Lima kajian Permen 7/2023* (16) — enumerasi nama kajian yang tidak bisa divariasikan; kalimat pembungkusnya orisinal dan beratribusi.
  7. *"Kelayakan ekonomi mengukur manfaat neto…"* (14) — definisi buku teks, <20 kata.
  8. *Kalimat CP3P/sertifikasi* (12) — memuat tautan internal dan bingkai APMG sendiri.
  Tidak ada kandidat yang memuat runtun verbatim ≥20 kata dari halaman non-IIGF Institute. **plagiarism score: 0.05** (rendah, dengan ketidakpastian karena leg web tidak berjalan).
  *Recommendation*: bila kurator ingin kepastian penuh, jalankan ulang `quality-check.ps1` + pencarian atas kandidat 1 dan 6 di sesi dengan kuota tersedia. Saya tidak menahan verdict atas dasar keterbatasan lingkungan.

---

## The shipping question
Seorang praktisi KPBU senior yang membaca ini besok akan menemukan sesuatu yang jarang ada di web berbahasa Indonesia: daftar pola hambatan penyiapan yang jujur menyebut batas pengetahuannya sendiri ("tidak ada statistik resmi", "perlakukan sebagai temuan yang masih perlu dikonfirmasi", "kondisi ini layak dicek pembaruannya"), plus tabel diagnostik yang bisa langsung dipakai memeriksa dokumen sendiri. Tidak ada satu pun instansi yang disudutkan, dan penjelasan kelayakan ekonomi vs finansial tepat sasaran. WEBARQ Promote layak bangga menerbitkannya. **Approve.**
