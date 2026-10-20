---
brief_id: "capacity-building-pembiayaan-kreatif-03"
editor_run_date: "2026-09-22"
recommendation: "approve"
overall_score: 9
ai_score: 0.00
plagiarism_score: 0.00
---

# Editor QC Report — Berapa Lama dan Berapa Biaya Menyiapkan Proyek KPBU?

## Recommendation
**approve**

Draf ini masuk dalam kondisi baik dan keluar dalam kondisi siap tayang. Satu cacat wajib-perbaiki yang dilaporkan orkestrator memang ada — klaim jumlah kajian Pra-Studi Kelayakan ("lima kajian") di butir 1 daftar komponen biaya — dan sudah saya hapus beserta daftar nama rumpunnya, diganti pembahasan fungsi plus arahan verifikasi ke JDIH Bappenas. Penghapusan itu sekaligus menutup satu-satunya titik tumpang tindih nyata dengan September `-02`, yang memang memiliki topik anatomi dokumen. Semua pagar angka lain sudah benar sejak draf: PMK 180/PMK.08/2020 dipakai sebagai dasar hukum PDF yang berlaku dan PMK 73/2018 hanya disebut sebagai yang dicabut; nomor PMK VGF sengaja tidak dipatok dan hanya ambang Rp 100 miliar dengan tahun akses yang dipakai; 36 bulan Balikpapan diberi label eksplisit "satu contoh proyek, bukan patokan nasional"; *success fee* 25 persen beratribusi ke asosiasi praktisi, berlabel indikatif, bertahun, dan disertai catatan perlu verifikasi ke regulasi primer. Perbaikan saya yang lain bersifat kepatuhan dan kerapian: dua sitasi otoritatif kini benar-benar tertaut inline (sebelumnya hanya atribusi dalam tanda kurung, tanpa satu pun tautan keluar di badan artikel), `date_modified` ditambahkan untuk kesegaran GEO, meta description diberi tahun rujukan pada angka durasinya, satu kuantifikasi tak bersumber ("Sejumlah PJPK memulai...") diturunkan menjadi kemungkinan kombinasi jalur sesuai dosir, dan kalimat penutup dipecah agar frasa Rule 5 "berkolaborasi dalam ekosistem" melekat pada IIGF Institute, bukan pada nama program. Skor AI-detector 0,00 dengan *burstiness* paragraf 0,505 dan nol *flag*; tiga kueri plagiarisme tidak menemukan kutipan verbatim di luar sumber yang memang disitasi. Seorang praktisi KPBU senior akan menemukan artikel ini jujur soal apa yang tidak diketahui — termasuk bahwa tidak ada nominal rupiah publik dan tidak ada rata-rata durasi nasional — dan itu justru kekuatannya.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Nol em-dash, nol pembuka klise, CV panjang paragraf 0,505 (8–93 kata). Deklaratif pendek ("Ini miskonsepsi yang paling mahal.", "Nomor lama masih banyak beredar.") mengimbangi kalimat panjang. Bebas register brosur dan siaran pers. |
| Factual & KPBU/PPP & sertifikasi accuracy | 8 | 20 penanda tahun/indikatif untuk angka. Satu klaim tak terverifikasi (jumlah kajian) dihapus editor. Sisa risiko terbuka hanya *success fee* 25 persen yang bersumber sekunder — sudah beratribusi transparan di badan, tabel, dan FAQ. |
| On-page SEO compliance | 9 | Semua item §3 lolos. Dua kekurangan diperbaiki: tautan eksternal inline (sebelumnya nol) dan `date_modified`. |
| GEO extractability (§2a) | 9 | Kelima jawaban pasca-H2 di rentang 43–48 kata; *definition snippet* 49 kata; keenam jawaban FAQ 41–50 kata setelah perbaikan. |
| IIGF Institute framing discipline | 9 | Satu penyebutan nama eksplisit + CTA lembut. Konteks PT PII/KPBU menempel. Rule 5 benar dan kini melekat gramatikal ke lembaga. Tanpa klaim kepemilikan CP3P, tanpa superlatif, tanpa nama individu. |
| Internal linking | 10 | Tepat 3 tautan inline, semuanya `institute.iigf.co.id`, tanpa "BACA JUGA", tanpa `ptpii.co.id`/`gagas.co.id`. |
| FAQ quality | 8 | 6 Q&A (brief meminta 7; "Apa itu *financial close*?" tidak dimuat, tetapi istilahnya didefinisikan inline di H2 #3). Semua jawaban kini di band 40–80 kata. |
| Originality (plagiarism + AI-detector) | 9 | `ai_score` 0,00, nol *flag*. Tiga kueri web tidak menemukan *verbatim* ≥20 kata di luar sumber tersitasi. Lima kandidat sisa tidak diuji karena batas kuota (didokumentasikan). |

## What I fixed (changelog)
- **[WAJIB] Menghapus klaim jumlah kajian Pra-Studi Kelayakan.** Butir 1 semula: "Sejak Permen PPN/Kepala Bappenas No. 7 Tahun 2023, Pra-Studi Kelayakan disederhanakan menjadi **lima kajian**: strategis, ekonomi, komersial, finansial, dan manajemen." Diganti menjadi pembahasan fungsi tanpa angka dan tanpa daftar rumpun, dengan atribusi "menurut ulasan praktisi" dan arahan verifikasi ke salinan resmi di JDIH Bappenas. Ini satu-satunya kemunculan angka jumlah kajian di seluruh artikel (badan, tabel, FAQ, judul, dan meta description sudah disisir dan bersih).
- Menambahkan **2 tautan eksternal otoritatif inline** ke badan artikel, memakai URL yang sudah ada di `external_citations` (tidak menambah fakta baru): `kpbu.kemenkeu.go.id/read/73-220/...` pada klaim durasi, dan `kpbu.kemenkeu.go.id/read/1094-1255/...` pada paragraf nomor PMK. Draf sebelumnya nol tautan keluar di badan — menyimpang dari pola Agustus yang sudah disetujui.
- Menambahkan `date_modified: "2026-09-22"` ke frontmatter (kesegaran GEO §2a; konvensi ini dipakai final Agustus, hilang di draf ini).
- Meta description: menambahkan tahun rujukan pada angka durasi — "durasi penyiapan proyek KPBU 6 bulan hingga 2 tahun **(Kemenkeu, akses 2026)**" (159 karakter, sebelumnya 152 dengan angka telanjang "minimal 6 bulan").
- Menurunkan kuantifikasi tak bersumber: "**Sejumlah PJPK** memulai kajian awal dengan APBD, lalu mengajukan fasilitas..." → "**Kombinasi dimungkinkan**: kajian awal dibiayai APBD, lalu fasilitas diajukan untuk kajian akhir dan pendampingan transaksi." Dosir hanya mendukung kemungkinan kombinasi, bukan jumlah kasus teramati.
- Sel tabel *success fee*: "maksimum indikatif 25 persen (per publikasi 2023)" → "**(sumber sekunder, publikasi 2023)**", agar baris tabel yang diekstraksi AI tetap membawa status sumbernya.
- Sel tabel PDF: "Pendampingan berjalan hingga *financial close*" → "Pendampingan **dirancang** berjalan hingga *financial close*", menutup celah yang bisa terbaca sebagai janji hasil.
- Kesimpulan: memecah kalimat panjang agar "berkolaborasi dalam ekosistem Kantor Bersama KPBU" melekat pada IIGF Institute/programnya, bukan menggantung sebagai keterangan nama program (Rule 5 tetap benar secara faktual di draf, tetapi rawan salah baca).
- FAQ #2: menambahkan satu kalimat ("Ketiga jalur itu tidak saling eksklusif dan bisa dikombinasikan dalam satu proyek.") — mengangkat jawaban dari 38 ke 45 kata, masuk band 40–80, dan menambah satu poin yang didukung dosir.
- `word_count` disinkronkan 1.518 → **1.550** (`tools/count_words.py`).

## What I flagged (open issues)
- ⚠️ ***Success fee* maksimum 25 persen tetap bersumber sekunder** (asosiasi praktisi KPBU, publikasi 2023, merujuk Permen PPN/Bappenas No. 2 Tahun 2020 via catatan kaki). Pencarian web saya mengonfirmasi angka itu memang ada di halaman asosiasi tersebut, tetapi teks peraturan primer tetap belum dibaca langsung. Artikel sudah menyatakan ini terbuka ("perlu diverifikasi ke regulasi primer sebelum dipakai dalam negosiasi"). — *rekomendasi*: verifikasi manual ke salinan Permen PPN 2/2020 sebelum tayang bila memungkinkan; bila gagal, wording saat ini sudah aman untuk tayang apa adanya.
- ⚠️ **FAQ 6 dari 7 yang diminta brief.** "Apa itu *financial close*?" tidak menjadi entri FAQ; istilahnya didefinisikan inline pada H2 #3 dan muncul di empat jawaban FAQ lain. Jumlah 6 lolos band playbook (5–8). — *rekomendasi*: terima sebagai deviasi sadar; menambah entri ke-7 akan menempatkan panjang artikel ~1.610 kata, di luar band.
- ⚠️ **Leg plagiarisme degraded.** Kuota 3 kueri terpakai penuh untuk tiga pasase berisiko tertinggi (porsi utang 70–80 persen, *success fee* 25 persen, 36 bulan Balikpapan). Lima kandidat sisa tidak diuji: dua di antaranya kutipan nomor peraturan, satu judul H2 FAQ, satu penamaan program klien, satu duplikat varian FAQ dari pasase yang sudah diuji — semuanya berisiko plagiarisme rendah secara struktural. — *rekomendasi*: tidak menghalangi rilis; catat sebagai cakupan tidak penuh.
- ⚠️ **Sumber World Bank IEG tanpa tahun** pada paragraf *upstream deal gap*. Ini sesuai instruksi dosir (edisi laporan tidak dapat dipastikan tunggal; kutip institusinya saja) dan klaimnya kualitatif, bukan angka — jadi bukan pelanggaran pagar angka. — *rekomendasi*: biarkan; jangan tambahkan tahun tanpa verifikasi ulang.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hit
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 paragraf dibuka "Selain itu"
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hit
- [x] "Dengan demikian" not overused — 0 hit
- [x] Em-dash count ≤2 — **0**
- [x] Varied paragraph lengths — 21 paragraf prosa, 8–93 kata, CV 0,505
- [x] Not every H2 → 3-bullet list — kelima H2 badan dibuka prosa; satu diikuti daftar bernomor, satu tabel, satu daftar poin, dua prosa penuh
- [x] No generic claims without numbers — 20 penanda tahun/indikatif; klaim tanpa angka (tidak ada nominal rupiah publik) justru dinyatakan eksplisit sebagai ketiadaan data
- [x] No stacked hype adjectives — 0 hit (canggih/terdepan/komprehensif/revolusioner)
- [x] No service-dump paragraph — satu anchor program tunggal di penutup
- [x] Bebas register brosur ("segera daftar") dan siaran pers ("dalam rangka", "sebagai wujud komitmen") — 0 hit

### B. Factual & KPBU/PPP & sertifikasi spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Durasi penyiapan minimal 6 bulan hingga 2 tahun, berlabel "akses 2026", disertai catatan bukan rata-rata resmi | dossier ✓ (kutipan verbatim halaman penuh `kpbu.kemenkeu.go.id/read/73-220/...`; halaman tanpa tahun terbit, karena itu tahun akses yang dipakai) | **pass** |
| Dasar hukum PDF = PMK 180/PMK.08/2020, berlaku 23 November 2020, mencabut PMK 73/PMK.08/2018 | dossier ✓ (konfirmasi silang `kpbu.kemenkeu.go.id` + `peraturan.bpk.go.id`); WebSearch memunculkan halaman resmi "Perbedaan dan Pokok Penyempurnaan PMK Fasilitas PDF" yang konsisten | **pass** — koreksi orkestrator terverifikasi benar di draf |
| *Success fee* maksimum indikatif 25 persen, beratribusi asosiasi praktisi yang merujuk Permen PPN/Bappenas No. 2 Tahun 2020, publikasi 2023 | dossier ✓ (confidence medium, sumber sekunder); WebSearch ✓ angka ada di `ahlikpbuindonesia.or.id` | **pass dengan flag** — atribusi + tahun + kata pagar + arahan verifikasi primer semuanya terpasang |
| Pendampingan PDF 36 bulan (TPAS Balikpapan, *kick-off* Oktober 2023) sebagai **satu contoh proyek, bukan patokan nasional** | dossier ✓; WebSearch ✓ konfirmasi independen di `kpbu.kemenkeu.go.id/berita/read/1622/...` (36 bulan sesuai Kesepakatan Induk, *kick-off* 9 Oktober 2023, cakupan penyiapan **dan** pendampingan transaksi) | **pass** — label wajib ada, dan hedge "cakupannya bisa meliputi penyiapan sekaligus transaksi" terbukti akurat |
| Ambang investasi VGF paling sedikit Rp 100 miliar (akses 2026), **tanpa** mematok nomor PMK VGF | dossier ✓ (`kpbu.kemenkeu.go.id` halaman Dukungan Kelayakan) | **pass** — keputusan tidak mematok nomor PMK VGF dipertahankan sesuai instruksi |
| Porsi utang 70–80 persen pada pembiayaan **konstruksi** (akses 2026), dipakai sebagai kontras satu kalimat | dossier ✓ (confidence high, kutipan verbatim halaman penuh) | **pass** |
| ~~Pra-Studi Kelayakan terdiri atas lima kajian~~ | dossier memuat klaim ini (reuse riset Agustus, confidence high untuk isi), **tetapi larangan jumlah kajian berlaku untuk seluruh batch September** karena naskah primer gagal dikonfirmasi peneliti `-02` | **FAIL → dihapus editor**; diganti pembahasan fungsi + arahan JDIH Bappenas |

Catatan pagar tambahan yang diperiksa dan lolos: tidak ada angka rupiah RPJMN 2025–2029; tidak ada tanggal *batch* `institute.iigf.co.id`; tidak ada janji hasil (artikel eksplisit menyatakan "pengajuan tidak otomatis disetujui" dan proyek berisiko "bisa tak menemukan pendamping"); tidak ada nama individu; daftar pengembang CP3P tidak dimunculkan sama sekali sehingga Rule 6 (AfDB/ADB/EBRD/IDB/IsDB/World Bank Group + PPIAF, tanpa MIF) tidak terpicu — sesuai laporan penulis.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **57**/posisi **0**
- [x] Meta description 140–160 — actual: **159** (setelah penambahan tahun rujukan; sebelumnya 152)
- [x] Slug ≤60, kebab-case, keyword — actual: `capacity-building-pembiayaan-kreatif-biaya-durasi-kpbu` (**54**)
- [x] H1 contains keyword — H1 pertanyaan; kata kunci utuh hadir di lead (kata ke-50) dan meta
- [x] H2 count 4–5 — actual: **5 H2 badan** + FAQ + Kesimpulan (7 total, band playbook 4–7)
- [x] ≥1 question-format H2 ("Berapa lama tahap penyiapan proyek KPBU?", "Apa saja yang sebenarnya dibayar...") ; ≥1 honest/counter-conventional H2 ("Yang jarang dibahas: biaya penyiapan bisa tidak kembali")
- [x] Keyword in first 100 words — kata ke-50
- [x] Definition snippet near top (40–60 words) — **49 kata**, blockquote "Ringkasnya"
- [x] ≥8 LSI terms — counted: **18/18** term daftar periksa hadir
- [x] 3 internal links (1 hub + 2 cousins) — destinations: `/capacity-building` (lead, inline), `/e-library/lainnya/77/studi-kasus-...` (H2 #3), `https://institute.iigf.co.id/` (H2 #5). Tanpa "BACA JUGA"; tanpa `ptpii.co.id`/`gagas.co.id`
- [x] ≥1 external authoritative citation — actual: **2 tautan inline** (keduanya `kpbu.kemenkeu.go.id`) + 1 sitasi frontmatter tambahan; sebelum perbaikan **0** tautan di badan
- [x] FAQ 5–7 Q&As — actual: **6**
- [x] ≥1 list + ≥1 table — 1 daftar bernomor (4 butir), 1 daftar poin (5 butir), 1 tabel (5 kolom × 3 baris)
- [x] Word count inside band 1.200–1.600 — actual: **1.550** (`tools/count_words.py`)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — terukur: **48 · 45 · 48 · 44 · 43** kata
- [x] Each body paragraph makes one independently quotable, verifiable point — satu klaim + satu sumber per paragraf; tabel dirancang terekstraksi baris per baris
- [x] FAQ parseable for FAQPage schema (`## FAQ` → `### pertanyaan` → jawaban paragraf tunggal, 41–50 kata); `date_modified: "2026-09-22"` ditambahkan ke meta block

### D. IIGF Institute framing discipline (product_matrix.md + style_guide §11)
- [x] IIGF Institute dibingkai sebagai unit manajemen pengetahuan & *think-tank* PT PII — bukan pemilik/pemberi kredensial CP3P, bukan universitas, bukan entitas hukum berdiri sendiri. Artikel juga tidak menyiratkan IIGF Institute mengelola PDF, VGF, atau penunjukan Badan Penyiapan
- [x] ≤3 IIGF Institute self-mentions — actual: **2** penyebutan promosional (nama lembaga di Kesimpulan + baris CTA), ditambah 3 tautan internal kontekstual yang diwajibkan aturan penautan
- [x] No unverifiable superlatives — 0 hit
- [x] KPBU/PPP product names match — "Capacity Building KPBU Pembiayaan Kreatif untuk Infrastruktur" sesuai dosir/`product_matrix.md`; anchor tunggal **PPP capacity building**, sekali di penutup
- [x] Closing uses a company_profile.md positioning line — parafrase baris "tiga pilar edukasi, riset, dan advokasi kebijakan" + status unit manajemen pengetahuan PT PII
- [x] Soft website CTA present as the FINAL line, after the conclusion — "Ragam program pelatihan dan kajian KPBU yang relevan dengan topik ini dapat Anda telusuri di institute.iigf.co.id." (konsultatif, bukan "beli/daftar sekarang")
- [x] Hub link present as a natural inline anchor in the lead — "Materi [capacity building pembiayaan kreatif](https://institute.iigf.co.id/capacity-building) menempatkan keduanya sebagai keputusan anggaran"
- [x] Rule 5 — "berkolaborasi dalam ekosistem Kantor Bersama KPBU"; tanpa kata "anggota"; 7 K/L tidak diklaim mencakup PT PII
- [x] Konteks "infrastruktur/KPBU/PPP/PT PII" menempel pada satu-satunya kemunculan "IIGF" (disambiguasi terhadap International Institute of Green Finance terjaga)

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `capacity-building-pembiayaan-kreatif-proyek-kpbu-mandek` (Agustus `-04`, "6 Celah Kapasitas")
- Subtopik Agustus `-04` diverifikasi langsung dari final: penyiapan kurang kredibel · kelayakan finansial marginal · ruang fiskal APBD · status lahan · komitmen lintas periode · tidak ada penantang internal. **Tidak satu pun dari keenamnya disebut atau disusun ulang di artikel ini.** Tidak ada daftar berjumlah enam. Persinggungan hanya pada dua kata kunci ("lahan", "kapasitas fiskal"), dan keduanya dibingkai berbeda: lahan sebagai pelebar durasi dan penentu daya tarik komersial, bukan sebab kegagalan; kapasitas fiskal terhadap risiko *sunk cost* penyiapan, bukan terhadap komitmen pembayaran jangka panjang 20–30 tahun seperti Agustus `-04`
- Cek silang September `-02` ("Anatomi Dokumen Pra-Studi Kelayakan"): `-02` memiliki H2 "Kajian apa saja yang harus ada di dalam dokumen pra-studi kelayakan?" berikut tabel rumpun kajiannya. Butir daftar di draf `-03` semula menduplikasi daftar rumpun itu — **dihapus editor**, sehingga `-03` kini hanya membahas kajian sebagai *pos biaya*, bukan sebagai isi dokumen
- Cek Agustus `-01` (APBD sebagai dana **proyek**) vs artikel ini (APBD sebagai dana **penyiapan**): pembedaan dinyatakan eksplisit lewat paragraf "Perlu dibedakan antara biaya penyiapan dan biaya konstruksi"
- Subtopic overlap (Jaccard estimate): **0,15** vs Agustus `-04`; **≈0,10** vs September `-02` setelah perbaikan
- Verdict: **distinct angle confirmed** — artikel ini menjawab "berapa ongkos, berapa lama, dari kantong siapa" sebelum proyek mulai, bukan otopsi proyek yang mandek

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `capacity-building-pembiayaan-kreatif-03.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.00** (`verdict: pass`, **0 flags**, tanpa API eksternal)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.505** (burstiness kalimat 0.902; konsentrasi kosakata top-30 0.332)
- [x] Plagiarism: distinctive passages web-checked; no non-IIGF-Institute verbatim hit ≥20 words — plagiarism score: **0.00**
  - Kueri 1 — porsi utang 70–80 persen: memunculkan `kpbu.kemenkeu.go.id` halaman "Siapa yang Membiayai Proyek pada Skema KPBU?", yaitu sumber yang **memang disitasi** artikel. Rumusan artikel adalah parafrase (sumber: "proporsi utang yang mendominasi, antara 70 hingga 80% dari biaya proyek"); tidak ada rentetan ≥20 kata identik. **Bukan hit.**
  - Kueri 2 — *success fee* 25 persen: memunculkan `ahlikpbuindonesia.or.id`, sumber sekunder yang **sudah diatribusi eksplisit** di artikel. Kalimat artikel disusun ulang dengan atribusi. **Bukan hit** — sekaligus mengonfirmasi angkanya ada di sumber.
  - Kueri 3 — 36 bulan Balikpapan: memunculkan berita resmi `kpbu.kemenkeu.go.id/berita/read/1622/...`. Kalimat artikel milik sendiri dan diberi label "satu contoh proyek". **Bukan hit** — sekaligus mengonfirmasi ulang fakta dan cakupannya.
  - **Cakupan tidak penuh (degraded):** kuota 3 kueri habis. Lima kandidat sisa tidak diuji — dua kutipan nomor peraturan (PMK 180/2020 & 73/2018), satu judul H2 FAQ, satu penamaan program klien, satu duplikat varian FAQ dari pasase yang sudah diuji. Semuanya berisiko struktural rendah; dicatat terus terang di sini, bukan diklaim bersih.
