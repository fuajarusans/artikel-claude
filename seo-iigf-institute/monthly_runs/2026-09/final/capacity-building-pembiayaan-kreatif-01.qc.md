---
brief_id: "capacity-building-pembiayaan-kreatif-01"
editor_run_date: "2026-09-22"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Capacity Building KPBU: Agar Kapasitas Tak Ikut Mutasi

## Recommendation
**approve**

Draf ini masuk ke meja editor dalam kondisi yang tidak biasa: penulis sudah mematuhi seluruh pemeriksaan wajib bulan ini tanpa satu pun *hard fail*. Nama proyek (RSUD Krian Sidoarjo, RS Kanker Dharmais) yang diizinkan dosir tetapi **ditolak orkestrator** tidak muncul sama sekali — penulis memakai rumusan kategori status resmi Kemenkeu secara beratribusi, persis seperti yang diminta. Tidak ada klaim keanggotaan Kantor Bersama KPBU, tidak ada MIF, tidak ada daftar pengembang CP3P yang timpang, APMG tetap ditempatkan sebagai pemilik dan pemberi kredensial, tidak ada angka rupiah RPJMN, tidak ada tanggal batch kelas, tidak ada nama individu, dan kutipan kontinuitas Kemenkeu ditulis sebagai parafrase beratribusi (tanpa tanda kutip) sesuai status *medium-high*-nya. Yang saya kerjakan adalah lapisan berikutnya: satu angka yang dilonggarkan penulis ("50-an aktivitas" untuk data "50+"), satu superlatif yang sekaligus melebihkan daya aturan ("jangkar terkuat bagi komitmen lintas periode" — hasil pencarian justru menunjukkan aturan tahun jamak secara default *membatasi* komitmen sampai akhir masa jabatan), satu *aside* IIGF Institute yang framing-nya rawan ("milik PT PII" → "unit ... di PT PII"), pelabelan tahun pada jumlah 7 K/L, satu FAQ yang hilang dari enam yang diminta brief, dan `date_modified` yang belum ada di frontmatter. Skor AI-detector 0,04 dengan nol pola terdeteksi; tiga kueri plagiarisme paling berisiko tidak menemukan kecocokan verbatim. Satu catatan yang saya biarkan terbuka dan tidak bisa saya tutup sendiri: kalimat kontinuitas Kemenkeu (dosir Flag #1) tetap tidak berhasil direproduksi dari halaman sumbernya — mitigasinya (parafrase beratribusi) sudah benar, tetapi verifikasi manual sebelum tayang masih dianjurkan.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | AI-detector 0,04 · nol frasa terlarang · *aside* praktisi yang tidak bisa dihasilkan mesin ("Ada satu tes sederhana sebelum menambah kuota pelatihan: apakah lulusan angkatan sebelumnya masih berada di unit yang sama") · nol register brosur/siaran pers |
| Factual & KPBU/PPP & sertifikasi accuracy | 9 | Semua angka berlabel tahun · 2 koreksi presisi diterapkan · 1 flag *medium-high* tetap terbuka (di luar kendali editor) |
| On-page SEO compliance | 9 | Seluruh checklist lolos; H1 hanya memuat "Capacity Building" (desain brief), frasa penuh ada di lead + meta description |
| GEO extractability (§2a) | 10 | Jawaban 42/48/43/46/45 kata setelah kelima H2 utama (dihitung ulang, bukan dipercaya) · snippet 43 kata di ~120 kata pertama · `date_modified` ditambahkan |
| IIGF Institute framing discipline | 10 | 3 self-mention (batas atas) · APMG pemilik & pemberi CP3P · tanpa klaim keanggotaan · tanpa superlatif · tanpa nama individu |
| Internal linking | 10 | Tepat 3, inline, hanya `institute.iigf.co.id`, sesuai peta cousin September |
| FAQ quality | 9 | 6 Q&A (naik dari 5) · 42–55 kata · masing-masing mandiri dan memuat satu angka bertahun |
| Originality (plagiarism + AI-detector) | 9 | AI 0,04 · 3/3 kueri bernilai tertinggi bersih · 5 kandidat sisa tidak dicek (batas kuota) — semuanya parafrase teks regulasi |

## What I fixed (changelog)
- **Presisi angka Bank Dunia** — "lewat 50-an aktivitas di 39 negara" → "lewat **lebih dari 50** aktivitas di 39 negara". Sumber dosir berbunyi "50+"; "50-an" berarti *sekitar* 50 dan melemahkan angka ke arah yang salah.
- **Superlatif + klaim hukum yang melebihi sumber** — "aturan keuangan daerah yang menjadi **jangkar terkuat** bagi komitmen lintas periode" → "aturan keuangan daerah yang memformalkan komitmen fiskal lintas tahun anggaran, **meski bukan jaminan otomatis untuk lintas periode jabatan**". Kueri plagiarisme #1 justru memunculkan kaidah sebaliknya (jangka waktu kontrak tahun jamak secara umum tidak melampaui akhir masa jabatan kepala daerah, kecuali disepakati untuk periode berikutnya) — konsisten dengan dosir, tidak konsisten dengan kata "terkuat". Sekaligus menghapus satu superlatif tak terverifikasi.
- **Framing IIGF Institute** — "IIGF Institute, unit manajemen pengetahuan KPBU **milik** PT Penjaminan Infrastruktur Indonesia (Persero)" → "**unit manajemen pengetahuan KPBU di** PT Penjaminan Infrastruktur Indonesia (Persero)". "Milik" bisa terbaca sebagai entitas terpisah yang dimiliki; `company_profile.md` menegaskan IIGF Institute adalah unit kerja *di dalam* PT PII, bukan entitas hukum tersendiri. Pembuka "Kebetulan," juga dibuang (transisi lemah, terdengar menghindar).
- **Label tahun pada jumlah 7 K/L** — "forum koordinasi tujuh kementerian dan lembaga di tingkat nasional" → "+ **(daftar resmi Kemenkeu, per 2026)**". Angka keanggotaan adalah angka; aturan "angka telanjang = fail" berlaku juga di sini.
- **FAQ ke-6 ditambahkan** — "Apakah pelatihan KPBU perlu diulang setiap ada mutasi pegawai?" (55 kata, memuat angka 70+ institusi bertahun 2023). Brief meminta 6 pertanyaan; draf hanya memuat 5. Ini justru pertanyaan dengan intent tertinggi untuk pembaca sasaran (pejabat yang menandatangani anggaran pelatihan) dan versi PAA dari tesis utama artikel.
- **`date_modified: "2026-09-22"` ditambahkan ke frontmatter** — persyaratan kesegaran GEO §2a; format mengikuti final Agustus yang sudah disetujui.
- **Frame observasional pada klaim tanpa sumber** — "Tiga hal ini paling sering hilang tanpa tercatat" → "**Dalam praktik penyiapan proyek,** tiga hal berikut paling sering hilang tanpa tercatat". Klaim frekuensi kini jelas berstatus pengamatan praktik, bukan statistik.
- **Netralitas nada** — "Portal resmi KPBU Kementerian Keuangan **mengakui** jarak ini" → "**menyinggung** jarak ini secara eksplisit". "Mengakui" menyiratkan pengakuan kesalahan; syarat bulan ini adalah nada tidak menghakimi instansi.
- **Tata bahasa & keterbacaan** — "pembedaan ... ini kerangka analitis" → "ini **merupakan** kerangka analitis ... bukan definisi **baku** dalam satu pasal"; kalimat Pasal 44 sepanjang 43 kata dipecah menjadi dua; "berjalan indikatif 15–30 tahun" → "berjalan 15–30 tahun secara indikatif"; "Retensi pengetahuan **sendiri** adalah bidang kerja **tersendiri**" → repetisi dibuang.
- **Ritme paragraf** — paragraf UU Kearsipan (86 kata) dipecah dua; kalimat "Itu bukan kelemahan sertifikasi, itu memang cakupannya." dijadikan paragraf sendiri (7 kata) sebagai pemutus ritme dan kalimat kutipan mandiri.
- **`word_count` frontmatter disinkronkan** 1.498 → **1.587** (dihitung ulang dengan `tools/count_words.py`).

## What I flagged (open issues)
- ⚠️ **Kalimat kontinuitas Kemenkeu tetap belum terverifikasi ulang secara langsung** (dosir Flag #1). Kueri plagiarisme #1 saya — pencarian frasa persis kalimat sumber — tidak memunculkan halaman mana pun yang memuatnya, jadi saya tidak bisa naikkan status dari *medium-high*. — *recommendation*: artikel sudah memakai mitigasi yang benar (parafrase beratribusi, bukan kutipan langsung, plus "diakses 2026"), sehingga aman tayang apa adanya. Bila ada kesempatan, buka `kpbu.kemenkeu.go.id/read/77-224/...` secara manual sebelum publikasi; bila paragraf itu ternyata sudah hilang dari halaman, ganti atribusi menjadi "portal KPBU Kemenkeu, tercatat pada penelusuran 2026".
- ⚠️ **PP No. 12/2019 + Permendagri No. 77/2020 masih berstatus *medium* di dosir** (belum di-*fetch* ke teks pasal primer). Artikel menyebutnya tanpa nomor pasal dan kini dengan kualifikasi tambahan, jadi tidak ada klaim yang melampaui bukti. — *recommendation*: peneliti mem-*fetch* teks primer sebelum klaim ini dipakai lebih tegas di artikel lain; jangan pernah menambahkan nomor pasal tanpa itu.
- ⚠️ **Temuan sampingan yang berpotensi memperkuat artikel, tetapi TIDAK saya masukkan**: leg plagiarisme memunculkan **Permen PPN/Bappenas No. 7 Tahun 2023**, yang disebut menggabungkan tim KPBU dan tim pengendali ke dalam Simpul KPBU dengan tujuan eksplisit "meminimalkan kesenjangan informasi dan menjaga kesinambungan koordinasi" lintas tahap. Bila benar, ini korroborasi regulatif hampir langsung untuk argumen inti artikel ini ("Simpul KPBU sebagai pemegang memori") — yang kini masih ditulis jujur sebagai argumen strategis, bukan bunyi pasal. Fakta ini **tidak ada di dosir**, jadi saya tidak menambahkannya (editor tidak menambah fakta). — *recommendation*: peneliti memverifikasi Permen PPN/Bappenas 7/2023 ke sumber primer; ini bahan kuat untuk artikel kelembagaan Simpul KPBU yang sudah ditahan strategist untuk Oktober, dan bisa dipakai memperkuat artikel ini pada siklus penyegaran.
- ⚠️ **Margin plafon tinggal 13 kata** (1.587 dari 1.600). — *recommendation*: setiap penambahan pada artikel ini wajib didahului pemangkasan; jangan tambahkan apa pun tanpa menghitung ulang.
- ℹ️ **Vignette pembuka adalah skenario komposit**, bukan kasus terdokumentasi (lima orang, delapan belas bulan). Saya memeriksa apakah ini perlu ditandai sebagai ilustrasi dan memutuskan tidak: brief merancangnya sebagai *hook hypothesis*, tidak ada angka yang diklaim sebagai data, dan final Agustus yang sudah disetujui memakai pola pembuka yang sama. Dicatat agar keputusan ini terlihat, bukan terlewat.
- ℹ️ **`ahlikpbuindonesia.or.id` memuat salah rujuk "Perpres 38/2019"** untuk Pasal 44 (muncul di kueri #3). Artikel ini benar: **Perpres No. 38 Tahun 2015**, status "Berlaku" per 2026. Dicatat sebagai peringatan untuk riset berikutnya — halaman itu dipakai dosir sebagai salah satu sumber silang.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 kemunculan
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — "Selain itu" **0 kemunculan** di seluruh artikel
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0 kemunculan
- [x] Em-dash count ≤2 — **tepat 2** (batas atas; en-dash pada rentang angka tidak dihitung)
- [x] Varied paragraph lengths — 22 paragraf prosa, panjang 7–78 kata, CV 0,449
- [x] Not every H2 → 3-bullet list — 1 daftar berpoin (3 butir), 1 daftar bernomor (7 butir), 2 tabel, sisanya prosa
- [x] No generic claims without numbers — klaim frekuensi satu-satunya kini berframe "Dalam praktik penyiapan proyek"
- [x] No stacked hype adjectives — 0 ("terbaik/terlengkap/terdepan/canggih/komprehensif" nol); satu "terkuat" dihapus editor
- [x] No service-dump paragraph — satu anchor program saja (`PPP capacity building`), di penutup
- [x] Register check — tanpa register brosur pelatihan ("segera daftar", "jangan lewatkan": 0) dan tanpa register siaran pers ("dalam rangka", "sebagai wujud": 0). Dua *failure mode* klien ini bersih.

### B. Factual & KPBU/PPP & sertifikasi spot-check
| Claim | Source check | Verdict |
|---|---|---|
| "Fasilitas Penyiapan Proyek ... untuk setidaknya 20 proyek KPBU **hingga 2020**" | dossier ✓ (WebFetch langsung `kpbu.kemenkeu.go.id/read/20-233/...`, 2026-09-17) — label tahun wajib dan ada | pass |
| "Perjanjian KPBU berjalan **15–30 tahun secara indikatif** (rujukan 2026)" | dossier ✓ — disajikan sebagai rentang indikatif, dan FAQ jujur menyebut "sumber resmi menyebut rentang yang sedikit berbeda antar halaman" | pass |
| "**Pasal 44 Perpres No. 38 Tahun 2015**, berstatus berlaku per 2026" | dossier ✓ (peraturan.bpk.go.id + peraturan.go.id) · WebSearch: satu sumber pihak ketiga salah tulis "Perpres 38/2019" — **tidak ikut tertular** ke artikel | pass |
| Bank Dunia/PPIAF: "**lebih dari 380** pejabat di **lebih dari 70** institusi, **lebih dari 50** aktivitas di **39 negara**, sejak 2018 (dilaporkan 2023)" | dossier ✓ + tautan keluar ke worldbank.org — **"50-an" dikoreksi editor menjadi "lebih dari 50"** agar sama dengan "50+" di sumber | pass (setelah koreksi) |
| "kontrak jangka panjang ... umumnya melewati masa jabatan seorang kepala daerah" (portal KPBU Kemenkeu, diakses 2026) | dossier ⚠️ *medium-high* · WebSearch frasa persis: **tidak ada halaman yang memuatnya** → status tidak bisa dinaikkan. Ditulis sebagai **parafrase beratribusi tanpa tanda kutip**, sesuai perintah bulan ini | pass (mitigasi benar, flag tetap) |
| "kontrak mengikat PJPK sebagai **jabatan**, bukan pribadinya" | dossier ✓ · WebSearch #2 memunculkan rumusan sekeluarga Kemenkeu: "wewenang PJPK melekat pada jabatan, sehingga pada saat terjadi pertukaran pejabat, kewenangan dimaksud tetap melekat pada jabatan" — **konfirmasi independen** | pass (naik ke high) |
| "Kantor Bersama KPBU, forum koordinasi **tujuh** kementerian dan lembaga (daftar resmi Kemenkeu, per 2026)" | product_matrix ✓ + `company_profile.md` Rule 5 ✓ — deskripsi netral, **tanpa klaim keanggotaan PT PII/IIGF Institute** dalam bentuk apa pun; label tahun ditambahkan editor | pass |
| "Kredensial CP3P **dimiliki dan dianugerahkan APMG International**" | `company_profile.md` Rule 4 ✓ — tanpa daftar pengembang (jadi tidak ada risiko MIF/AfDB), tanpa implikasi IIGF Institute sebagai pemberi kredensial | pass |

**Pemeriksaan wajib bulan ini — hasil:** Rule 5 ✓ · Rule 6 ✓ (daftar tidak disebut, jadi tidak ada MIF dan tidak ada AfDB yang hilang) · APMG pemilik/penguji/pemberi ✓ · angka rupiah RPJMN 2025–2029 **0 kemunculan** ✓ · tanggal batch/jadwal kelas **0** ✓ · nama individu **0** ✓ · nama proyek dalam kaitan penghentian **0** (RSUD/Krian/Dharmais: nol kemunculan) ✓ · jumlah kajian pra-studi kelayakan **tidak disebut** ✓ · UU 43/2009 + PP 28/2012 dan PP 12/2019 + Permendagri 77/2020 dijelaskan eksplisit sebagai hukum administrasi umum yang diterapkan secara analogi ("Dua mekanisme berikutnya meminjam aturan administrasi umum, bukan aturan KPBU"; "Tidak ada pasal di sana yang menyebut KPBU") ✓ · nada tidak menghakimi ✓ ("Rumusan itu tidak menunjuk siapa pun bersalah").

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **54 char / posisi 0**
- [x] Meta description 140–160 — actual: **153 char**, memuat frasa kunci penuh
- [x] Slug ≤60, kebab-case, keyword — actual: `capacity-building-pembiayaan-kreatif-retensi-kapasitas` (**54 char**)
- [x] H1 contains keyword — memuat "Capacity Building KPBU"; frasa penuh "capacity building pembiayaan kreatif" ada di lead (anchor hub) dan meta description, sesuai desain brief
- [x] H2 count 4–5 — actual: **5 H2 isi** + FAQ + Kesimpulan (7 total, dalam band 4–7 playbook)
- [x] ≥1 question-format H2 ("Mengapa proyek KPBU daerah kehilangan momentum setelah pejabat berganti?"); ≥1 honest/counter-conventional ("Yang tidak bisa diselesaikan oleh pelatihan")
- [x] Keyword in first 100 words — frasa kunci penuh pada ~kata 60
- [x] Definition snippet near top — **43 kata**, blockquote "Ringkasnya:", di ~120 kata pertama
- [x] ≥8 LSI terms — counted: **12** (kapasitas kelembagaan KPBU · Simpul KPBU · PJPK · mutasi pegawai · pergantian kepala daerah · manajemen pengetahuan · kaderisasi berlapis · dokumentasi proyek KPBU · persetujuan DPRD · pembiayaan kreatif infrastruktur daerah · Fasilitas Penyiapan Proyek/PDF · dukungan politik)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: `/capacity-building` (lead, inline) · `/e-library/lainnya/77/studi-kasus-...` (H2 #2) · `https://institute.iigf.co.id/` (H2 #4). **Hanya `institute.iigf.co.id`; `gagas.co.id` dan `ptpii.co.id` nol kemunculan.**
- [x] ≥1 external authoritative citation — actual: **2** (kpbu.kemenkeu.go.id, worldbank.org) + Perpres 38/2015 via BPK dikutip di teks dan dicatat di frontmatter
- [x] FAQ 5–7 Q&As — actual: **6** (dari 5; ditambah editor)
- [x] ≥1 list + ≥1 table — 1 daftar berpoin, 1 daftar bernomor 7 butir, **2 tabel**
- [x] Word count inside band — actual: **1.587** (band 1.200–1.600)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — **dihitung ulang manual, bukan dipercaya dari laporan agen trim**: **42 / 48 / 43 / 46 / 45 kata**. Kelimanya di dalam band. (Laporan agen trim 42/47/43/47/45 sedikit berbeda; angka di atas adalah hitungan saya atas file final.)
- [x] Each body paragraph makes one independently quotable, verifiable point — satu paragraf sengaja dipecah editor menjadi kalimat mandiri 7 kata untuk keperluan ini
- [x] FAQ parseable for FAQPage schema (`## FAQ` → `###` pertanyaan → paragraf jawaban, 6 blok konsisten); **`date_modified: "2026-09-22"` ditambahkan** ke meta block
- [x] Definition snippet 43 kata di ~120 kata pertama; tabel siap diekstrak baris demi baris

### D. IIGF Institute framing discipline (product_matrix.md + style_guide §11)
- [x] IIGF Institute framed as PT PII's knowledge-management unit dan bukan pemilik/pemberi CP3P, bukan universitas, bukan entitas hukum independen — frasa "unit manajemen pengetahuan KPBU **di** PT Penjaminan Infrastruktur Indonesia (Persero)" (diperbaiki editor dari "milik")
- [x] ≤3 IIGF Institute self-mentions — actual: **3** ("IIGF Institute" 2× + domain `institute.iigf.co.id` 1× pada CTA). Tepat di batas.
- [x] No unverifiable superlatives — 1 ("terkuat") dihapus editor; sisa 0
- [x] KPBU/PPP product names match product_matrix/dossier — anchor `PPP capacity building`, **satu kali, di penutup**, sesuai `client_anchor` bulan ini; tanpa deviasi anchor
- [x] Closing uses a company_profile.md positioning line — "memperkuat kapasitas SDM dan basis pengetahuan KPBU di Indonesia lewat edukasi, riset, dan advokasi kebijakan" (parafrase baris pra-disetujui, tidak ditumpuk)
- [x] Soft website CTA as the FINAL line, after the conclusion — "Ikhtisar program peningkatan kapasitas dan publikasi KPBU dapat Anda telusuri di institute.iigf.co.id." Konsultatif, bukan "daftar sekarang"; CTA tetap umum karena isi halaman `/capacity-building` sebagian di balik login (flag dosir)
- [x] Hub link as a natural inline anchor in the lead — ya, di dalam kalimat ("anggaran [capacity building pembiayaan kreatif] sudah terpakai"). **"BACA JUGA" nol kemunculan.**
- [x] Disambiguasi IIGF — konteks "KPBU" + "PT Penjaminan Infrastruktur Indonesia (Persero)" menempel pada kemunculan pertama; penutup memuat "KPBU di Indonesia"

### E. Anti-cannibalization spot check
Diperiksa terhadap **4 artikel Agustus** untuk keyword yang sama (semuanya `editor-approved` di `articles_history/index.json`) **dan 3 artikel September** dalam keyword yang sama.

| Pembanding | Sumbu artikel itu | Irisan | Jaccard (estimasi) |
|---|---|---|---|
| Agustus **-01** Fondasi Kapasitas PJPK | definisi payung, UU HKPD, empat kelompok instrumen, peta pelaku | Simpul KPBU muncul di -01 sebagai *entri peta aktor*; di sini sebagai *mekanisme penyimpan memori* | **0,12** |
| Agustus **-02** Memilih Instrumen | tujuh instrumen + kriteria pemilihan | nol pembahasan instrumen di artikel ini | **0,04** |
| Agustus **-03** Kompetensi Tim per Tahap (*pasangan paling berisiko*) | kompetensi per tahap siklus; tiga jalur membangun kompetensi | **Diperiksa khusus: tidak ada pemetaan ulang kompetensi per tahap, dan tidak ada pembahasan pelatihan formal vs OJT vs konsultasi.** Artikel ini menerima kompetensi sudah terbangun lalu bertanya apa yang terjadi setelahnya | **0,10** |
| Agustus **-04** 6 Celah Kapasitas (*pagar keras*) | enam sebab proyek mandek + daftar periksa diagnostik | **Tidak ada daftar sebab kegagalan dalam bentuk apa pun.** Halaman `pelaksanaan-fasilitas` dipakai kedua artikel, tetapi di sini **hanya** untuk dua rumusan kontinuitas (persetujuan DPRD; perubahan komitmen PJPK) + jumlah 20 proyek — bukan untuk lahan. Daftar periksa di sini tentang **serah-terima**, bukan kelayakan | **0,12** |
| September **-02 / -03 / -04** | anatomi pra-studi kelayakan · biaya & durasi penyiapan · KPBU syariah & sukuk | nol irisan dengan sumbu retensi/pergantian orang | **≈0,05** |

- Closest prior article for this keyword: `capacity-building-kpbu-kompetensi-tim-pjpk` (Agustus -03)
- Subtopic overlap (Jaccard estimate): **0,12 (tertinggi)** — jauh di bawah ambang 0,4
- Verdict: **distinct angle confirmed.** Kedua pagar keras bulan ini (tanpa peta kompetensi per tahap; tanpa enam celah kapasitas) dipatuhi.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `capacity-building-pembiayaan-kreatif-01.id.quality-input.json` written (dijalankan atas file **final**, bukan draf)
- [x] AI-detector score < 0.30 — actual: **0,04** · verdict `pass` · 1 flag *low* saja
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0,449** (sentence burstiness 0,717 · top-30 vocab share 0,302)
- [x] Plagiarism: distinctive passages web-checked; no non-IIGF Institute verbatim hit ≥20 words — plagiarism score: **0,05**

**Catatan jujur atas flag low-severity:** skrip menandai `paragraph-low-variance` karena CV 0,449 berada 0,001 di bawah target internalnya sendiri (0,45). Ambang yang mengikat saya adalah **≥0,30**, jadi ini bukan temuan substantif — saya sengaja **tidak** mengejarnya, karena satu-satunya cara menaikkannya adalah memanjangkan atau memendekkan paragraf tanpa alasan editorial, yang justru merusak ritme yang sudah baik. Dicatat agar terlihat, bukan disembunyikan.

**Leg pencarian plagiarisme — cakupan dan keterbatasan (degraded, disengaja):** anggaran bulan ini **3 kueri**, dan ketiganya terpakai. Skrip mengekstrak **8** kandidat; saya memilih 3 yang paling berisiko dan paling bernilai ganda, lalu meninggalkan 5 sisanya tanpa pemeriksaan web.

| # | Yang dicek | Hasil |
|---|---|---|
| 1 | Frasa persis kalimat kontinuitas Kemenkeu (pasase dengan overlap verbatim tertinggi terhadap sumber) | **Tidak ada kecocokan verbatim** di halaman mana pun. Bonus: memunculkan kaidah tahun jamak yang memicu koreksi "jangkar terkuat" |
| 2 | *Definition snippet* (pasase paling terlihat, paling rawan diangkat dari sumber lain) | **Tidak ada kecocokan verbatim.** Bonus: konfirmasi independen klaim "wewenang PJPK melekat pada jabatan" |
| 3 | Framing khas artikel: "Simpul KPBU sebagai **pemegang memori**" | **Tidak ada kecocokan verbatim** — koinase ini orisinal; memperkuat klaim celah SERP strategist. Bonus: memunculkan Permen PPN/Bappenas 7/2023 (lihat flag) |

5 kandidat yang **tidak** dicek web seluruhnya berupa parafrase teks regulasi (definisi PJPK, rumusan Pasal 44, baris tabel siklus jabatan) — yaitu kategori yang memang dikecualikan sebagai definisi umum, sehingga risiko residualnya rendah. Itulah dasar `plagiarism_score: 0,05` alih-alih 0,00: nol temuan pada pasase berisiko tinggi, dengan cakupan 3 dari 8.
