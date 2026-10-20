---
brief_id: "sertifikasi-kpbu-04"
editor_run_date: "2026-09-22"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Sertifikasi KPBU: Masa Berlaku dan Ilmu yang Menguap

## Recommendation
**approve**

Draf ini masuk dengan disiplin yang jarang: klaim paling sensitif bulan ini — pernyataan APMG tentang resertifikasi — dijaga presisi di tiga kemunculan, frasa "berlaku selamanya" hanya hadir dalam konstruksi penyangkalan (terverifikasi kata per kata, 3×, tidak sekali pun sebagai klaim), Rule 6 lengkap dengan AfDB dan tanpa MIF, Rule 5 aman karena Kantor Bersama KPBU memang tidak disebut sama sekali, dan seluruh larangan batch September (nama proyek yang dihentikan, UU 20/2023 & PP 11/2017, kata "esai", nomor Peraturan Ketua BNSP, tanggal batch kelas, janji karier) absen. Yang saya perbaiki adalah satu pola yang belum tertangkap penulis: tiga kali artikel menyatakan "APMG tidak mencantumkan tanggal kedaluwarsa pada kredensial" — secara efek pembaca itu setara "tanpa masa berlaku", dan tidak ada satu pun kutipan verbatim di dosir yang menopangnya (verbatim dosir hanya menyangkut *kewajiban* resertifikasi, bukan desain sertifikatnya). Ketiganya saya ganti dengan rumusan yang benar-benar bersumber, termasuk judul H2 #2 yang tadinya berbunyi "Kalau tidak kedaluwarsa…" dan akan terekstraksi berdiri sendiri oleh mesin AI sebagai asersi. Deviasi anchor ke *PPP capacity building* saya perlakukan sebagai keputusan editorial yang disetujui dan tidak menurunkan skor. Skor AI-detector 0,04 dan tidak ada temuan verbatim ≥20 kata pada tiga probe plagiarisme yang saya jalankan; leg pencarian memang terbatas (3 kueri sesuai anggaran) dan saya catat terus terang di bagian F.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Nol em-dash, nol pembuka klise, nol "Selain itu"/"Dengan demikian". Panjang paragraf 8–106 kata, CV 0,42. Register instruktur, bukan brosur atau siaran pers. |
| Factual & KPBU/PPP & sertifikasi accuracy | 9 | 5 klaim diuji; 4 lolos apa adanya, 1 (klaim "tanpa tanggal kedaluwarsa") diperketat ke rumusan bersumber. Semua angka bertahun. |
| On-page SEO compliance | 9 | Meta 50/153 karakter, slug 49, keyword di posisi 0 dan di 100 kata pertama, 20 LSI, 3 internal + 3 eksternal. |
| GEO extractability (§2a) | 10 | Jawaban langsung 45/43/40/42/40 kata setelah kelima H2 isi; snippet definisi 59 kata; FAQ siap FAQPage; `date_modified` ditambahkan. |
| IIGF Institute framing discipline | 9 | APMG memiliki–menguji–menganugerahkan, ATO hanya menyelenggarakan — dinyatakan eksplisit. 3 self-mention bernama. Tanpa superlatif, tanpa nama individu. |
| Internal linking | 10 | Tepat 3, inline, tanpa "BACA JUGA", tujuan sesuai brief. Tidak ada `ptpii.co.id` / `gagas.co.id`. |
| FAQ quality | 9 | Tepat 5 Q&A, 47–67 kata, tiap jawaban berdiri sendiri. FAQ #5 di-reangle agar tidak kembar dengan artikel September `-01`. |
| Originality (plagiarism + AI-detector) | 9 | ai_score 0,04; run verbatim lintas-artikel maksimum 8 kata (kutipan regulasi & boilerplate institusional). |

## What I fixed (changelog)
- **Presisi masa berlaku (3 tempat)** — menghapus asersi "APMG tidak mencantumkan tanggal kedaluwarsa pada kredensial" dari H2 #1, FAQ #1, dan FAQ #4. Dosir tidak memuat kutipan verbatim apa pun yang menopang klaim tentang desain sertifikatnya; yang terverifikasi tiga kali hanyalah tidak adanya *kewajiban* resertifikasi. Frasa "tanggal kedaluwarsa" sekarang 0× (sebelumnya 4×).
- **Judul H2 #2** — "Kalau tidak kedaluwarsa, mengapa kredensial bisa kehilangan relevansi?" → "Kalau tidak ada kewajiban resertifikasi, mengapa kredensial bisa kehilangan relevansi?" Judul lama memprasyaratkan "tidak kedaluwarsa" sebagai fakta dan akan terangkat berdiri sendiri oleh AI Overview sebagai asersi.
- **FAQ #4** — sebab-akibat diganti ke klaim yang bersumber: kredensial ikut orangnya "karena kredensial CP3P diberikan kepada kandidat yang lulus ujian, bukan kepada instansi yang membiayainya (APMG International, 2026)", bukan karena ketiadaan tanggal kedaluwarsa.
- **Metafora sertifikat** — "bukan oleh tanggal kedaluwarsa di selembar sertifikat" → "bukan oleh selembar sertifikat yang sudah terbit" (menutup sisa implikasi masa berlaku).
- **Atribusi pengembang PPP Guide** — "PPP Guide sendiri disusun enam bank pembangunan multilateral…" → "Kerangka CP3P beserta PPP Guide yang menjadi acuannya dikembangkan enam bank pembangunan multilateral…". Probe pencarian memunculkan risiko kekeliruan nyata: *PPP Reference Guide* Bank Dunia (Versi 3) disusun gabungan WBG/ADB/EBRD/GI Hub/IADB/IsDB/OECD/UNECE/UNESCAP — dokumen berbeda dari PPP Guide acuan CP3P. Daftar enam MDB kini terikat eksplisit ke kerangka CP3P, sesuai Rule 6. AfDB tetap ada, MIF tetap absen.
- **Kuantifier tanpa sumber** — "Sebagian besar pengakuan kompetensi yang dikenal pembaca Indonesia memang bermasa berlaku" → "Pada skema yang paling dikenal pembaca Indonesia, masa berlaku sertifikat kompetensi memang ditetapkan di muka". Menghapus klaim mayoritas yang tidak diverifikasi; sekaligus memasukkan frasa kunci sekunder "masa berlaku sertifikat kompetensi" yang tadinya tidak muncul utuh. Pagar BNSP tetap satu paragraf, tanpa tabel, tanpa nomor peraturan, tanpa penilaian.
- **"Pola kedua paling sering ditemui"** → "Pola kedua sering ditemui" (menghapus superlatif frekuensi yang tidak terukur).
- **Positioning line penutup** — dirumuskan ulang ("Menjaga ilmu tetap hidup di luar ruang kelas justru inti pekerjaan IIGF Institute: lewat edukasi, riset, dan advokasi kebijakan, unit ini bekerja pada basis pengetahuan KPBU nasional…"). Versi lama memuat run verbatim 11 kata yang identik dengan final September `capacity-building-pembiayaan-kreatif-01` — persis pola yang ditemukan di batch Agustus.
- **Baris CTA** — divariasikan dan diberi keyword primer: "Bila tahap berikutnya adalah menata kapasitas unit alih-alih menambah sertifikasi KPBU, program dan publikasi yang relevan dapat Anda telusuri di institute.iigf.co.id." Versi lama beririsan 10 kata dengan `studi-kasus-proyek-infrastruktur-di-indonesia-03` Agustus.
- **FAQ #5 (simpul KPBU)** — jawaban di-reangle ke sumbu retensi (dokumentasi, catatan keputusan, kaderisasi lapis kedua) alih-alih definisi generik yang nyaris kembar dengan FAQ artikel September `-01`. Dasar hukum Pasal 44 Perpres 38/2015 tetap.
- **Paragraf penutup H2 #5** — dirapikan agar anchor programme tersebut benar ("program *PPP capacity building*") dan anchor tautan `Capacity Building pembiayaan kreatif` tidak lagi terbaca sebagai nama program resmi yang tidak ada di `product_matrix.md`.
- **Variasi pagar tahun** — "(per akses 2026)" 8× → 4×, sisanya menjadi "(APMG International, 2026)". Setiap angka tetap membawa tahun rujukannya.
- **Frontmatter** — `date_modified: "2026-09-22"` ditambahkan (GEO §2a kesegaran, konsisten dengan final September lain); `word_count` disinkronkan ke 1.554.

## What I flagged (open issues)
- ⚠️ **Anggaran self-mention duduk di plafon, dan penghitungannya bertabrakan antar-dokumen.** Dengan hitungan "penyebutan nama" hasilnya tepat 3 (aside H2 #2, positioning line penutup, baris CTA). Dengan hitungan dosir — yang menempatkan tautan hub di lead sebagai penyebutan #1 — hasilnya 4, sebab `style_guide.md` §1 sekaligus mewajibkan positioning line di `## Kesimpulan` **dan** baris CTA. *Rekomendasi*: putuskan di `style_guide.md` §11 apakah tautan hub tanpa nama merek dihitung; tiga elemen yang diwajibkan struktur sudah menghabiskan kuota, sehingga aside faktual "opsional" secara praktis tidak pernah punya ruang. Tidak diturunkan sebagai temuan artikel karena struktur wajib itulah penyebabnya.
- ⚠️ **Praktik masa berlaku BNSP masih *medium-high*** (cuplikan situs, bukan pembacaan satu nomor peraturan). Sudah dipagari "umumnya", satu paragraf, tanpa tabel, tanpa nomor pasal — sesuai batasan bulan ini. *Rekomendasi*: bila keyword ini berulang di Oktober, naikkan ke pembacaan naskah primer atau turunkan menjadi kalimat tanpa angka.
- ⚠️ **Leg pencarian plagiarisme terbatas 3 kueri** (anggaran orkestrator). 3 dari 8 kandidat diuji — dipilih yang paling distingtif; 5 sisanya berisiko rendah (fragmen bermarkup, boilerplate institusional pra-setujui, judul seksi, satu butir daftar). Lihat bagian F.
- ⚠️ **`paragraph-low-variance` (low)** dari skrip: CV 0,42 versus target internal skrip 0,45. Ambang editor (≥0,30) terlewati jauh dan rentang nyata 8–106 kata; tidak saya paksa naik karena satu-satunya cara cepat adalah memecah paragraf `## Kesimpulan`, yang justru akan menghapus pencilan panjang dan menurunkan CV.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 temuan
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 kemunculan di seluruh artikel
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0
- [x] Em-dash count ≤2 — **0**
- [x] Varied paragraph lengths — 24 paragraf: 79/45/32/63/43/54/53/51/40/29/42/32/40/43/8/20/36/51/47/47/67/62/106/21 kata (CV 0,42)
- [x] Not every H2 → 3-bullet list — H2 #1 prosa, #2 prosa, #3 prosa+tabel, #4 prosa+daftar bernomor, #5 prosa+bullet
- [x] No generic claims without numbers — kuantifier tanpa sumber ("Sebagian besar", "paling sering") sudah dicabut
- [x] No stacked hype adjectives — 0 ("terbaik/terlengkap/terdepan" 0×)
- [x] No service-dump paragraph — satu anchor programme saja, di penutup
- [x] Register: bukan brosur ("daftar sekarang/jangan lewatkan" 0×), bukan siaran pers ("dalam rangka/wujud komitmen" 0×)

### B. Factual & KPBU/PPP & sertifikasi spot-check
| Claim | Source check | Verdict |
|---|---|---|
| "Tidak ada kewajiban memperoleh sertifikasi ulang setiap kali PPP Guide diperbarui" (APMG, per akses 2026) | dossier ✓ verbatim *"There is no requirement to get recertified every time the PPP Guide is updated."* — triangulasi 3 akses (2026-08-12 / 09-17 / 09-21) | **pass** |
| "APMG tidak mencantumkan tanggal kedaluwarsa pada kredensial" (3 tempat) | Tidak ada kutipan verbatim penopang di dosir; hanya muncul di tabel turunan peneliti. Secara efek = "tanpa masa berlaku" → melampaui pernyataan APMG | **fail → dikoreksi di tempat** (ketiga kemunculan dihapus/diganti; kini 0×) |
| Cakupan Execution *"Chapters 5-7 (version 2) or Chapters 5-8 (version 1)"* + Foundation Bab 1, Preparation Bab 2–5 | dossier ✓ verbatim `ppp-certification.com/certification`; disajikan bergantung versi di badan artikel **dan** di FAQ #2 | **pass** |
| Pengembang kerangka: AfDB, ADB, EBRD, IDB, IsDB, World Bank Group + PPIAF *part-funder* | product_matrix ✓ / company_profile Rule 6 ✓ — AfDB ada, MIF 0× | **pass** (atribusi diperketat ke "kerangka CP3P beserta PPP Guide" setelah probe web menunjukkan risiko tertukar dengan *PPP Reference Guide* Bank Dunia) |
| Bukti kredensial: sertifikat elektronik ke email terdaftar + *Candidate Portal* + lencana digital | dossier ✓ verbatim, status naik ke *high confidence* pada run 2026-09-21 | **pass** |
| Permen PPN/Bappenas No. 7 Tahun 2023 mencabut dua peraturan pelaksana sebelumnya, berlaku 29 September 2023 | dossier ✓ (Pasal 97–98, BN 2023/777); WebSearch: dikuatkan sumber legal independen, tanggal & pencabutan cocok | **pass** |
| World Bank 2024: kenaikan investasi ±USD 488 juta/tahun, 1990–2022; ~sepertiga ekonomi menstandardisasi dokumen transaksi | dossier ✓ + tautan keluar ke artikel sumber, tahun rujukan tercantum | **pass** |
| Kredensial CP3P penuh = lulus ketiga ujian | dossier ✓; WebSearch menguatkan (halaman klien + ringkasan program APMG) | **pass** |
| BNSP ~3 tahun + RCC/resertifikasi | dossier *medium-high* (cuplikan bnsp.go.id) — dipakai 1 paragraf, dipagari "umumnya", tanpa nomor peraturan, tanpa penilaian | **pass dengan pagar** |
| Simpul KPBU, Pasal 44 Perpres 38/2015 | dossier ✓ status "Berlaku" | **pass** |

Larangan batch September — semuanya **absen** (grep atas final): nama rumah sakit yang dihentikan 0× · "20 Tahun 2023" 0× · "11 Tahun 2017" 0× · "esai" 0× sebagai kata berdiri sendiri (grep naif memberi 3 positif palsu dari "selesai/menyelesaikan/desain" — diuji ulang dengan batas kata; format ujian memang tidak dibahas sama sekali di artikel ini) · "Peraturan Ketua BNSP" 0× · tanggal batch/jadwal kelas 0× · biaya 0× (tidak ada angka rupiah sama sekali, sehingga kewajiban label "indikatif + tahun" tidak terpicu) · janji karier 0× · nada menakut-nakuti tidak ada (pagar eksplisit: "Sertifikasi tetap bernilai; argumennya bukan bahwa ia sia-sia…") · nama individu 0× · jumlah kajian pra-studi kelayakan 0× · merendahkan penyelenggara lain 0× ("Yang berbeda mekanismenya, bukan soal skema mana yang lebih ketat").

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **50** char, keyword di posisi **0**
- [x] Meta description 140–160 — actual: **153**
- [x] Slug ≤60, kebab-case, keyword — actual: `sertifikasi-kpbu-masa-berlaku-retensi-pengetahuan` (**49**)
- [x] H1 contains keyword — "Sertifikasi KPBU: Masa Berlaku dan Ilmu yang Menguap"
- [x] H2 count 4–7 (§3) — actual: **7** (5 H2 isi + FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1, #2); ≥1 honest/counter-conventional H2 (#5 "Yang tidak bisa diperbaiki oleh sertifikasi berikutnya")
- [x] Keyword in first 100 words — ya (kalimat terakhir lead, sekaligus anchor hub)
- [x] Definition snippet near top (40–60 words) — blockquote **59** kata, di ~150 kata pertama
- [x] ≥8 LSI terms — counted: **20** (resertifikasi, kredensial CP3P, PPP Guide, masa berlaku sertifikat kompetensi, retensi/transfer pengetahuan, rotasi jabatan, simpul KPBU, verifikasi kredensial, APMG International, kapasitas tim, ATO/Accredited Training Organization, lencana digital, Candidate Portal, BNSP, RCC, Foundation/Preparation/Execution, pengembangan kompetensi berkelanjutan)
- [x] 3 internal links (1 hub + 2 cousins) — `institute.iigf.co.id/` (lead, anchor "Sertifikasi KPBU") · `/e-library/lainnya/77/…` (H2 #3, anchor "studi kasus proyek infrastruktur di Indonesia") · `/capacity-building` (penutup H2 #5, anchor "Capacity Building pembiayaan kreatif"). Semua inline, tanpa "BACA JUGA". `ptpii.co.id` 0×, `gagas.co.id` 0×
- [x] ≥1 external authoritative citation — actual: **3** (ppp-certification.com/faqs, ppp-certification.com/certification, blogs.worldbank.org)
- [x] FAQ 5–7 Q&As — actual: **5** (tidak turun dari draf)
- [x] ≥1 list + ≥1 table — tabel 3 pola peluruhan (4 kolom) · daftar bernomor 6 langkah · daftar bullet 3 akar
- [x] Word count inside band — **1.554** (`tools/count_words.py`), band 1.200–1.600, sisa margin 46 kata
- [x] Angka spesifik ≥6 tempat, semuanya bertahun — 2026 (APMG), 2019 (ATO), 1990–2022 & USD 488 juta (World Bank 2024), ~3 tahun (BNSP 2026), 29 September 2023 (Permen 7/2023), Pasal 44 Perpres 38/2015, Bab 1 / 2–5 / 5–7 atau 5–8

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — terukur, bukan estimasi: **45 · 43 · 40 · 42 · 40** kata untuk kelima H2 isi (H2 FAQ langsung diikuti H3 Q&A, pola FAQPage yang benar; `## Kesimpulan` memang blok sintesis 106 kata)
- [x] Each body paragraph makes one independently quotable, verifiable point — tiap baris tabel berdiri sendiri sebagai diagnosis lengkap; tiap butir daftar bernomor punya lead-in tebal + satu tindakan
- [x] FAQ parseable for FAQPage schema (H3 pertanyaan → satu paragraf jawaban, 47–67 kata); `date_modified: "2026-09-22"` ditambahkan ke meta block

### D. IIGF Institute framing discipline (product_matrix.md + style_guide §11)
- [x] Framing benar — dinyatakan eksplisit: "APMG International memiliki, menguji, dan menganugerahkan kredensial CP3P, termasuk menetapkan ketentuan masa berlakunya; penyelenggara pelatihan terakreditasi (ATO) hanya menyelenggarakan pelatihannya." IIGF Institute = unit manajemen pengetahuan PT PII, ATO APMG pertama di Indonesia sejak 2019. Bukan universitas, bukan entitas hukum mandiri, bukan pemilik skema
- [x] ≤3 IIGF Institute self-mentions — actual: **3** bernama (aside H2 #2 · positioning line Kesimpulan · baris CTA). Lihat flag soal metode penghitungan
- [x] No unverifiable superlatives — 0; klaim "ATO APMG pertama di Indonesia" bersumber dan diizinkan
- [x] Programme names match product_matrix — anchor CTA **PPP capacity building**, satu kali, di penutup (deviasi dari `client_anchor` default: **disengaja & disetujui**, tidak diperlakukan sebagai error)
- [x] Closing uses a company_profile positioning line — parafrase dari "Melalui tiga pilar — edukasi, riset, dan advokasi kebijakan — …memperkuat…basis pengetahuan KPBU", divariasikan agar tidak kembar dengan artikel September `-01`
- [x] Soft website CTA as the FINAL line, after the conclusion — ya; konsultatif, tanpa "daftar/beli sekarang"
- [x] Hub link as natural inline anchor in the lead — ya
- [x] Disambiguasi IIGF — kedua penyebutan "IIGF" berdampingan dengan konteks KPBU/PT PII/infrastruktur; baris CTA memuat "sertifikasi KPBU"
- [x] Rule 5 (Kantor Bersama KPBU) — **tidak disebut sama sekali** (0×), sesuai laporan penulis; risiko "anggota" tidak terpicu ("anggota" 0×)

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `sertifikasi-kpbu-kapan-belum-jadi-prioritas` (2026-08-04, *decision*, "kapan belum perlu dan kesalahan umum")
- Subtopic overlap (Jaccard estimate): **0.29** (unigram konten, ambang 0,40) — nilai tertinggi di seluruh riwayat. Terhadap keempat artikel Agustus klaster ini: 0.29 / 0.26 / 0.25 / 0.26
- Argumen "kapan belum perlu" **tidak diulang**: tidak ada checklist kesiapan, tidak ada daftar kesalahan memilih program, tidak ada analisis penundaan. Artikel berangkat dari titik setelah kredensial diperoleh; pengait ke batas jaminan sertifikasi dibatasi satu kalimat ("Sertifikasi tetap bernilai; …tidak cukup bekerja sendirian"). Struktur tiga level hanya dipakai sebagai bukti panduan diperbarui, bukan pelajaran struktur (wilayah Agustus `-03`); praktik BNSP satu paragraf tanpa tabel pembanding (wilayah Agustus `-02`); peta tiga kategori "sertifikasi KPBU" satu klausa (wilayah Agustus `-01`)
- **Persinggungan September `capacity-building-pembiayaan-kreatif-01`** (diperiksa khusus, topikal **dan** tekstual): Jaccard **0.23** setelah perbaikan (0.27 sebelum). Pembeda utuh — artikel ini soal kredensial & pengetahuan individu (masa berlaku, resertifikasi, verifikasi kredensial, pembaruan PPP Guide); `-01` soal kapasitas kelembagaan (mutasi pegawai, pergantian kepala daerah, persetujuan DPRD, kearsipan). Angka andalan pun dipisah sesuai instruksi dosir: artikel ini memakai USD 488 juta (World Bank 2024), `-01` memakai 70+ institusi sejak 2018 — tidak bertabrakan
- **Kemiripan tekstual (bukan hanya topik)** — run verbatim terpanjang lintas-artikel setelah perbaikan: **8 kata**, dan seluruhnya boilerplate tak terhindarkan: "Pasal 44 Peraturan Presiden No. 38 Tahun 2015" (kutipan regulasi), "unit manajemen pengetahuan PT Penjaminan Infrastruktur Indonesia (Persero)" (deskriptor institusional pra-setujui), "dapat Anda telusuri di institute.iigf.co.id" (pola CTA yang diwajibkan `style_guide` §11). Dua echo yang saya temukan dan tutup: positioning line 11 kata identik dengan `-01` September, dan baris CTA 10 kata identik dengan `studi-kasus-proyek-infrastruktur-di-indonesia-03` Agustus. FAQ #5 juga di-reangle karena jawabannya nyaris kembar dengan FAQ pembuka `-01` September
- Verdict: **distinct angle confirmed**

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `sertifikasi-kpbu-04.id.quality-input.json` written (dijalankan pada final, dua kali: sebelum dan sesudah perbaikan atribusi)
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict `pass`; ambang revise 0,30 / reject 0,50). *sentence_burstiness* 0,897; *top30_vocab_share* 0,299
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.42** (satu flag *low* karena target internal skrip 0,45 — lihat flag terbuka)
- [x] Plagiarism: no non-IIGF Institute verbatim hit ≥20 words — plagiarism score: **0.05**
  - Probe 1 — "mencabut dua peraturan pelaksana KPBU sebelumnya dan mulai berlaku 29 September 2023": tanpa padanan verbatim. Halaman yang muncul (legal brief, portal JDIH) menyatakan fakta sama dengan rumusan berbeda → sekaligus **menguatkan** tanggal & pencabutan.
  - Probe 2 — "PPP Guide sendiri disusun enam bank pembangunan multilateral": tanpa padanan verbatim, **tetapi memunculkan risiko faktual** (dokumen *PPP Reference Guide* Bank Dunia berbeda pengarang) → kalimat diperketat, lihat changelog.
  - Probe 3 — "Kredensial CP3P penuh baru diberikan kepada kandidat yang lulus ketiga ujian": satu-satunya hasil relevan adalah `institute.iigf.co.id/cp3p/ikhtisar-kursus` (properti klien sendiri → diabaikan sesuai aturan) dan ringkasan program APMG yang menguatkan klaim. Tanpa padanan verbatim non-IIGF.
  - **Degraded, dicatat terus terang**: anggaran 3 kueri terpakai habis, sehingga **3 dari 8** kandidat diuji ke web. Lima sisanya tidak diuji dan dinilai risiko rendah secara manual: dua fragmen bermarkup (tautan/penekanan di tengah kalimat, tidak mungkin cocok verbatim), satu deskriptor institusional pra-setujui, satu judul seksi FAQ, satu butir daftar bernomor hasil rumusan sendiri. Definisi umum ("CP3P adalah…") tidak dihitung sebagai temuan sesuai aturan.
