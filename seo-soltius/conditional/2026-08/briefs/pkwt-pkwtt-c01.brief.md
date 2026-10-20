---
keyword: "pkwt dan pkwtt"
keyword_slug: "pkwt-dan-pkwtt"
landing_page: ""
month: "2026-08"
brief_id: "pkwt-pkwtt-c01"
angle: "pkwt-vs-pkwtt-perbedaan-aturan-implikasi-perusahaan"
angle_hash: "sha1:ed6442324024"
search_intent: "comparison"
target_word_count: 900
strategist_run_date: "2026-07-17"
mode: "conditional-given-angle"
batch: "conditional-2026-08 (style_addendum.md WAJIB — 800–1000 kata, tanpa image placeholder, FAQ 2–3, 2 internal link)"
dedup_result: "DISTINCT — Jaccard tertinggi ~0.05 vs turnover-karyawan-c01 (2026-06) & employee-retention-c01 (2026-07), keduanya < 0.4; angle_hash sha1:ed6442324024 tidak berbenturan dengan 170 hash yang diperiksa"
---

# PKWT vs PKWTT: Perbedaan, Aturan, dan Implikasinya bagi Perusahaan

> Working Title diberikan user — substansi dipertahankan apa adanya. Hanya catatan teknis: H1 versi lengkap = 66 karakter (di atas band 50–60), jadi **meta title dipendekkan** agar primary keyword `pkwt dan pkwtt` masuk 14 karakter pertama. Penulis TIDAK mengubah angle.
>
> **H1 (artikel):** PKWT vs PKWTT: Perbedaan, Aturan, dan Implikasinya bagi Perusahaan
> **Meta title (≤60):** PKWT dan PKWTT: Perbedaan, Aturan, dan Implikasinya *(51 char)*
> **Meta description (140–160):** PKWT dan PKWTT berbeda pada jangka waktu, masa percobaan, dan uang kompensasi. Pahami aturan PP 35/2021, batas 5 tahun, dan kapan PKWT berubah jadi PKWTT. *(154 char)*
> **Slug (≤60):** pkwt-dan-pkwtt-perbedaan-aturan-implikasinya *(44 char)*
>
> **Catatan keyword**: H1 memakai "PKWT vs PKWTT" (framing komparasi, sesuai judul user). Frasa persis `PKWT dan PKWTT` WAJIB muncul di **100 kata pertama** (lead), meta title, meta description, slug, dan paragraf terakhir.

## Hook hypothesis

HR dan pemilik perusahaan bertemu masalah yang sama: seorang staf sudah diperpanjang kontraknya tiga kali untuk pekerjaan yang jelas-jelas rutin, dan tidak ada yang tahu persis apakah statusnya masih PKWT. Risikonya tidak simetris — kesalahan menempatkan status kontrak tidak berhenti di teguran, melainkan berubah **demi hukum** menjadi status pekerja tetap, dengan konsekuensi biaya yang berbeda sama sekali.

SERP Bahasa Indonesia untuk topik ini padat (Talenta, Jobstreet, Hukumonline, BPJS Ketenagakerjaan, KantorKu, Hadirr, DSLA, Privy) tetapi punya dua kelemahan yang bisa dieksploitasi. **Pertama, akurasinya rapuh**: sebagian besar masih menuliskan skema lama pra-Cipta Kerja (2 tahun + perpanjangan 1 tahun, pembaruan setelah jeda 30 hari) — bahkan halaman **BPJS Ketenagakerjaan sendiri masih menulis "maksimal 3 tahun"** (diverifikasi via WebFetch run ini, 2026-07-17), padahal PP 35/2021 Pasal 8 menetapkan paling lama 5 tahun. **Kedua, sudut pandangnya keliru untuk judul kita**: hampir semua ditulis untuk *pekerja* ("pekerja wajib tahu"), bukan untuk perusahaan yang harus menanggung konsekuensinya. Judul yang diberikan user justru meminta "Implikasinya bagi Perusahaan" — ruang yang praktis kosong.

Soltius kredibel di titik ini bukan sebagai penasihat hukum, melainkan sebagai mitra implementasi SAP yang menata **data induk kepegawaian** — status kontrak, tanggal berakhir, dan riwayat masa kerja — tepat di lapisan tempat kepatuhan PKWT gagal dalam praktik: bukan karena aturannya tidak diketahui, tetapi karena tenggatnya tidak terlacak.

## Primary keyword

`pkwt dan pkwtt`

Supporting keyword (given): `perbedaan pkwt dan pkwtt`

(Pola pencari Indonesia: akronim regulasi + penjelasan Bahasa Indonesia; intent komparatif bercampur definisional. Artikel ini melengkapi cluster HR: `sap-successfactors-modul-c01` memegang peta modul, `turnover-karyawan-c01` memegang rumus turnover, `employee-retention-c01` memegang strategi retensi — **dasar hukum status kontrak belum dimiliki siapa pun**.)

## Secondary / LSI keywords (8–12)

- perjanjian kerja waktu tertentu (PKWT)
- perjanjian kerja waktu tidak tertentu (PKWTT)
- karyawan kontrak vs karyawan tetap
- UU Cipta Kerja / UU Nomor 6 Tahun 2023
- PP Nomor 35 Tahun 2021
- UU Nomor 13 Tahun 2003 tentang Ketenagakerjaan
- uang kompensasi PKWT
- uang pesangon & uang penghargaan masa kerja (UPMK)
- masa percobaan kerja (probation)
- pencatatan PKWT
- perpanjangan kontrak kerja
- demi hukum menjadi PKWTT
- Human Capital Management (HCM) / SAP SuccessFactors

## Search intent & SERP feature targets

- **Stage**: awareness → consideration (definisional-komparatif; pembaca = HR lead / pemilik usaha / manajer operasional yang menyusun kontrak)
- **Format**: definition snippet + **tabel perbandingan dimensi** + rumus uang kompensasi + daftar pemicu konversi
- **Surface targets**:
  - [x] AI Overview (Google SGE) / AI-engine citation (Perplexity, ChatGPT) — definisi 40–60 kata + tabel + angka pasal yang quotable
  - [x] Featured Snippet (definisi + tabel perbandingan)
  - [x] People Also Ask

## SERP landscape (live scrape today)

> **Catatan metode:** WebFetch ke `google.com/search?q=pkwt+dan+pkwtt&hl=id&gl=id` **terblokir** (Google mengembalikan halaman error/consent, bukan SERP) — konsisten dengan seluruh run conditional 2026-06 dan 2026-07. Degradasi anggun ke **WebSearch** (2026-07-17, 4 kueri Bahasa Indonesia) + WebFetch langsung ke 2 halaman pesaing teratas, sesuai SOP `CLAUDE.md` §11. Volume/KD: `n/a (Ahrefs not connected)`.

**Top competing pages (WebSearch, kueri Bahasa Indonesia):**
1. `https://www.talenta.co/blog/perbedaan-dari-karyawan-pkwt-dan-pkwtt-adalah/` — Mekari Talenta — *angle*: pembanding 5 dimensi (durasi, bentuk, pencatatan, probation, pengakhiran) + konversi + skema kompensasi; funnel software HR. **Paling lengkap di SERP**. Diverifikasi via WebFetch: menyebut 5 tahun ✓ dan rumus kompensasi ✓, tetapi **tanpa tabel perbandingan** (naratif/list), **tanpa tenggat pencatatan 3/7 hari kerja**, **tanpa aturan PKWT harian 21 hari**.
2. `https://www.bpjsketenagakerjaan.go.id/artikel/18294/artikel-apa-bedanya-pkwt-dan-pkwtt` — BPJS Ketenagakerjaan — *angle*: 5 perbedaan untuk pekerja + JKP. Otoritas domain sangat tinggi. Diverifikasi via WebFetch: **masih menulis durasi PKWT "maksimal 3 tahun"** (skema pra-Cipta Kerja), **tidak menyebut batas 5 tahun**, dan **tidak menyebut nomor pasal**.
3. `https://www.hukumonline.com/berita/a/pekerja-wajib-tahu-perbedaan-pkwt-dan-pkwtt-lt633d69d5af385/` — Hukumonline — *angle*: "Pekerja wajib tahu" — lensa pekerja, otoritas hukum kuat, tetapi framing bukan sisi perusahaan.
4. `https://id.jobstreet.com/id/career-advice/article/pkwt-adalah-bedanya-dengan-pkwtt` — Jobstreet — *angle*: career advice untuk kandidat; definisi + beda; nol implikasi korporat.
5. `https://kantorku.id/blog/perbedaan-pkwt-dan-pkwtt/` — KantorKu — *angle*: "6 perbedaan dari segi hak, probation, hingga masa kerja"; listicle ringan.
6. `https://www.hadirr.com/blog/perbedaan-pkwt-dan-pkwtt/` & `https://privy.id/blog/perbedaan-pkwt-dan-pkwtt/` — Hadirr / Privy — *angle*: beda + cara membuat kontrak; funnel aplikasi absensi & tanda tangan digital.
7. `https://www.dslalawfirm.com/perbedaan-pkwt-dan-pkwtt/` & `https://mmp.law/perbedaan-pkwt-dan-pkwtt/` — firma hukum — *angle*: uraian yuridis pasal demi pasal; akurat tetapi kering dan tidak operasional.

**Gaps to exploit** (yang TIDAK dicakup baik oleh top hasil):
- **Akurasi terhadap aturan yang berlaku.** Skema lama (2 + 1 tahun, pembaruan setelah jeda 30 hari) masih beredar luas — bahkan halaman pemerintah menulis "maksimal 3 tahun". Kita menyebut **PP 35/2021 Pasal 8: paling lama 5 tahun termasuk perpanjangan**, dan menyatakan secara eksplisit bahwa PP 35/2021 **tidak lagi mengatur pembaruan maupun masa jeda 30 hari** (pernyataan negatif yang dapat diverifikasi dari teks PP; lihat catatan verifikasi).
- **Tidak ada tabel.** Pesaing terkuat pun menyajikan perbandingan sebagai prosa/list. Tabel dimensi × PKWT × PKWTT adalah pembeda GEO paling murah sekaligus paling mudah dikutip AI engine.
- **Tenggat pencatatan PKWT tidak pernah dibahas.** PP 35/2021 Pasal 14: **3 hari kerja secara daring**, atau **7 hari kerja secara tertulis** di dinas kabupaten/kota bila kanal daring belum tersedia. Ini kewajiban perusahaan yang nyaris absen dari SERP dan langsung relevan dengan judul "Implikasinya bagi Perusahaan".
- **Aturan PKWT harian (21 hari) tidak pernah dibahas.** PP 35/2021 Pasal 10: perjanjian kerja harian berlaku bila pekerja bekerja **kurang dari 21 hari dalam 1 bulan**; bila **21 hari atau lebih selama 3 bulan berturut-turut atau lebih**, hubungan kerja **demi hukum berubah menjadi PKWTT**. Angka paling konkret di seluruh topik, dan hampir tidak ada yang menulisnya.
- **Sudut pandang perusahaan kosong.** SERP menulis untuk pekerja. Judul user meminta implikasi bagi perusahaan: konversi demi hukum, akrual kompensasi yang berjalan per perpanjangan, dan beban administrasi tanggal.
- **Tidak ada kejujuran batas.** Tidak ada yang bilang bahwa artikel semacam ini adalah informasi umum dan kasus konkret bergantung pada fakta lapangan.

**People Also Ask / kueri turunan** (dari WebSearch ID — mewakili PAA; SERP scrape terblokir):
1. Apa perbedaan PKWT dan PKWTT?
2. Berapa lama maksimal kontrak PKWT?
3. Apakah karyawan PKWT dapat pesangon?
4. Apakah PKWT bisa berubah menjadi PKWTT?
5. Apakah PKWT boleh ada masa percobaan (probation)?
6. Berapa besaran uang kompensasi PKWT dan bagaimana menghitungnya?
7. Apakah PKWT wajib dibuat tertulis?
8. Apa itu PKWTT dan apa bedanya dengan karyawan tetap?

## Distinct angle vs. history

- **Closest prior article in this cluster**: `employee-retention-c01` (conditional 2026-07, "Apa Itu Employee Retention dan Strategi Mempertahankan Karyawan") dan `turnover-karyawan-c01` (conditional 2026-06) — dua target dedup yang ditunjuk tracker. Tetangga berikutnya: `sap-successfactors-modul-c01` (2026-06, peta modul) dan `successfactors-vs-hris-c01` (row 9, batch ini).
- **How this brief differs**: ketiga artikel HR yang ada adalah **artikel manajemen talenta** — H2 mereka: definisi turnover, jenis voluntary/involuntary, penyebab, rumus turnover rate, benchmark, cara mengurangi (2026-06); mengapa retensi menentukan biaya, 5 strategi retensi, cara mengukur retensi, people analytics (2026-07). Brief ini bukan artikel manajemen sama sekali, melainkan **artikel regulasi/kepatuhan**: status hukum hubungan kerja, batas jangka waktu, dan skema uang yang diwajibkan aturan. Sesuai instruksi dedup tracker: *"jangan melebar ke strategi retensi."* **Boundary tegas untuk writer**: DILARANG membahas penyebab turnover, cara mengurangi turnover, rumus turnover rate, benchmark turnover, strategi retensi, engagement, atau people analytics (milik `turnover-karyawan-c01` & `employee-retention-c01`); DILARANG membedah modul SuccessFactors satu per satu (milik `sap-successfactors-modul-c01`); DILARANG membandingkan SuccessFactors dengan HRIS lokal atau vendor mana pun (milik `successfactors-vs-hris-c01`, row 9 batch ini). Irisan satu-satunya adalah **SAP SuccessFactors sebagai anchor CTA** — di sini ia muncul hanya sebagai tempat status kontrak & tanggal berakhir hidup sebagai data induk, bukan sebagai alat retensi.
- **Subtopic overlap (Jaccard) with closest prior**: subtopik brief ini = {definisi PKWT & PKWTT, dasar hukum UU 13/2003 + UU 6/2023 + PP 35/2021, jenis & sifat pekerjaan PKWT, jangka waktu 5 tahun & perpanjangan, masa percobaan PKWT vs PKWTT, bentuk perjanjian tertulis/lisan, pencatatan PKWT ke Kemnaker, uang kompensasi PKWT & rumusnya, pesangon PKWTT, konversi demi hukum, PKWT harian 21 hari, implikasi administratif HR} (12) vs subtopik `employee-retention-c01` = {definisi retention, biaya & kinerja, 5 strategi retensi, cara mengukur retention rate, people analytics, retensi proaktif, retention vs turnover, retention rate ideal, SAP SuccessFactors} (9). Irisan efektif = {SAP SuccessFactors sebagai sistem HR} ≈ 1 dari union ~20 → **Jaccard ≈ 0.05 (< 0.4 ✓)**.
- **Cek permukaan dedup lain**: vs `turnover-karyawan-c01` (2026-06) ≈ **0.05** — artikel itu memuat rumus turnover dan strategi, tidak menyentuh dasar hukum kontrak; irisan hanya {SAP SuccessFactors}. Vs `sap-successfactors-modul-c01` (2026-06) ≈ **0.06** — peta modul produk, bukan regulasi. Vs `successfactors-vs-hris-c01` (row 9, batch ini) ≈ **0.08** — komparasi produk/vendor; brief ini komparasi **status hukum kontrak**, tanpa menyebut vendor pembanding sama sekali. Vs cluster `articles_history/` (51 entri: business-intelligence, data-warehouse-solutions, digital-manufacturing, erp-migration-to-the-cloud, low-code-platform, sap-clean-core, warehouse-management-system) ≈ **0.00** — tidak ada satupun artikel HR/ketenagakerjaan di history (diverifikasi via grep: nol kemunculan "pkwt", "ketenagakerjaan", "successfactors", "turnover"). Vs `monthly_runs/2026-08/final/` (21 artikel BI/DW/ERP/Clean Core/WMS) ≈ **0.00**. **angle_hash `sha1:ed6442324024` tidak berbenturan** dengan 170 hash yang diperiksa di `articles_history/` + `conditional/2026-06` + `conditional/2026-07` + `conditional/2026-08` + `monthly_runs/`. **Hasil dedup: DISTINCT — aman ditulis.**

## Article skeleton — H2s the writer should expand (BATCH OVERRIDE: 3–4 H2 SAJA)

> Lead ≤80 kata (pain konkret + frasa persis `PKWT dan PKWTT` + janji artikel, TANPA roadmap) → definition snippet blockquote "Ringkasnya:" 40–60 kata → body 4 H2 ramping → FAQ 2–3 → Kesimpulan ≤80 kata → soft CTA baris terakhir. **DILARANG H2 definitional "Apa Itu PKWT dan PKWTT?"** — janji "Perbedaan" di judul ditunaikan oleh snippet + tabel H2 #1; tidak ada info baru (asal istilah/standar) yang cukup membenarkan H2 definitional tersendiri. Kepanjangan akronim masuk ke snippet, dasar hukum masuk ke jawaban langsung H2 #1.
>
> **Budget kata (panduan, total ≈ 925):** lead 75 · snippet 50 · H2#1 165 (termasuk tabel) · H2#2 175 · H2#3 155 · H2#4 95 · FAQ 3×45 = 135 · Kesimpulan 75 · CTA 20. **Tabel ikut dihitung** — jangan menambah elemen sampai melewati 1000 kata.

1. **H2 (question-format + TABEL — CORE, supporting keyword `perbedaan pkwt dan pkwtt`)**: "Apa Perbedaan PKWT dan PKWTT Menurut Aturan yang Berlaku?" — *covers*: jawaban langsung 40–60 kata berisi poin BARU (bukan parafrase snippet): **perbedaannya bukan sekadar "kontrak vs tetap", melainkan satu paket kewajiban yang berbeda** — bentuk perjanjian, boleh-tidaknya masa percobaan, kewajiban pencatatan, dan skema uang di akhir hubungan kerja. Sebut kerangka hukumnya sekali di sini: **UU Nomor 13 Tahun 2003 tentang Ketenagakerjaan**, sebagaimana diubah melalui **UU Nomor 6 Tahun 2023 (Cipta Kerja)**, dengan aturan pelaksana **PP Nomor 35 Tahun 2021**. Lalu **satu tabel** — inilah elemen terstruktur wajib batch ini:

   | Dimensi | PKWT | PKWTT |
   |---|---|---|
   | Jangka waktu | Paling lama 5 tahun termasuk perpanjangan (PP 35/2021 Pasal 8) | Tanpa batas waktu |
   | Dasar pekerjaan | Hanya pekerjaan tertentu; tidak boleh untuk pekerjaan yang bersifat tetap (Pasal 59 UU) | Termasuk pekerjaan yang bersifat tetap |
   | Bentuk perjanjian | Wajib tertulis, bahasa Indonesia dan huruf latin (Pasal 57 UU) | Boleh tertulis atau lisan; bila lisan, pengusaha wajib membuat surat pengangkatan (Pasal 63 UU 13/2003) |
   | Masa percobaan | Tidak dapat disyaratkan; bila disyaratkan, batal demi hukum dan masa kerja tetap dihitung (Pasal 58 UU / Pasal 12 PP) | Boleh, paling lama 3 bulan, dengan upah tidak di bawah upah minimum (Pasal 60 UU 13/2003) |
   | Pencatatan | Wajib dicatatkan: 3 hari kerja daring, atau 7 hari kerja tertulis di dinas kab/kota (Pasal 14 PP) | Tidak diatur kewajiban pencatatan serupa dalam PP 35/2021 |
   | Uang di akhir hubungan kerja | Uang kompensasi (Pasal 61A UU / Pasal 15–16 PP) | Uang pesangon, UPMK, dan uang penggantian hak bila terjadi PHK (Pasal 40 PP) |

   *Catatan writer*: tabel di atas adalah **rangka**, bukan teks final — rapikan bahasanya, jangan menambah baris sampai melewati budget kata. Setiap sel angka/pasal WAJIB sesuai daftar verifikasi di bawah. TANPA mengulang definisi snippet.

2. **H2 (praktis/rumus + angka)**: "Aturan Jangka Waktu dan Uang Kompensasi PKWT" — *covers*: jawaban langsung 40–60 kata dengan poin BARU: **batas 5 tahun itu berlaku untuk keseluruhan PKWT beserta perpanjangannya, bukan per kontrak** — jadi tiga kontrak satu tahun yang berturut-turut memakai kuota yang sama (PP 35/2021 Pasal 8 ayat 2). Lalu:
   - **Koreksi informasi usang (pembeda utama, 1–2 kalimat)**: skema lama yang masih banyak beredar — 2 tahun + perpanjangan 1 tahun + pembaruan setelah jeda 30 hari — berasal dari rezim sebelum UU Cipta Kerja. **PP 35/2021 tidak lagi mengatur pembaruan maupun masa jeda 30 hari**; yang diatur hanya perpanjangan dengan pagu total 5 tahun. (Pernyataan negatif — WAJIB dicek researcher terhadap teks PP; lihat catatan verifikasi. **JANGAN** menyimpulkan lebih jauh dari itu.)
   - **Rumus uang kompensasi (list ber-lead-in bold, ini pengganti kebutuhan visual)**: **Siapa yang berhak** — pekerja PKWT dengan masa kerja paling sedikit **1 bulan** secara terus menerus (Pasal 15 ayat 3); **Kapan dibayar** — pada saat berakhirnya PKWT, dan bila diperpanjang, dihitung per periode (Pasal 15 ayat 2 & 4); **Besarannya** — PKWT 12 bulan terus menerus = **1 bulan upah**; kurang dari atau lebih dari 12 bulan = proporsional, dengan perhitungan **(masa kerja ÷ 12) × 1 bulan upah** (Pasal 16 ayat 1); **Dasar upahnya** — upah pokok ditambah tunjangan tetap (Pasal 16 ayat 2).
   - **Contoh hitung (ilustrasi, TANPA angka rupiah karangan)**: PKWT dengan masa kerja 8 bulan → (8 ÷ 12) × 1 bulan upah ≈ **0,67 bulan upah**. Cukup dinyatakan sebagai proporsi upah — **JANGAN mengarang nominal gaji atau UMR**.
   - *Boleh disebut ringkas bila muat*: besaran untuk usaha mikro dan kecil diberikan berdasarkan kesepakatan (Pasal 16 ayat 6); uang kompensasi tidak berlaku bagi tenaga kerja asing berstatus PKWT (Pasal 15 ayat 5). Pilih maksimal SATU agar tidak melewati budget.

3. **H2 (question-format — inti "implikasi bagi perusahaan")**: "Kapan PKWT Berubah Menjadi PKWTT?" — *covers*: jawaban langsung 40–60 kata dengan poin BARU dan paling berdampak: **konversi terjadi *demi hukum* — otomatis, tanpa perlu persetujuan atau penetapan perusahaan** — sehingga status pekerja bisa sudah berubah jauh sebelum ada yang menyadarinya. Lalu **list pemicu** (lead-in bold, semua terverifikasi):
   - **Pekerjaannya bersifat tetap** — PKWT hanya boleh untuk pekerjaan tertentu; PKWT yang tidak memenuhi ketentuan jenis/sifat pekerjaan, termasuk yang diadakan untuk pekerjaan bersifat tetap, **demi hukum menjadi PKWTT** (Pasal 59 ayat 2 & 3 UU; PP 35/2021 Pasal 4 ayat 2).
   - **Perjanjian kerja harian yang melewati ambang** — perjanjian kerja harian mensyaratkan pekerja bekerja **kurang dari 21 hari dalam 1 bulan**; bila pekerja bekerja **21 hari atau lebih selama 3 bulan berturut-turut atau lebih**, perjanjian harian itu tidak berlaku dan hubungan kerja **demi hukum berubah menjadi PKWTT** (PP 35/2021 Pasal 10 ayat 3 & 4).
   - **Masa percobaan yang tetap dicantumkan** — klausul itu **batal demi hukum** dan masa kerja tetap dihitung (Pasal 58 UU / Pasal 12 PP). Ini tidak mengubah status, tetapi menambah masa kerja yang diperhitungkan.
   - **Honest hedging (1–2 kalimat, pengganti H2 honest sesuai addendum §2)**: uraian ini adalah **informasi umum, bukan nasihat hukum**. Penerapannya pada kasus konkret bergantung pada fakta lapangan dan, bila diperselisihkan, pada penilaian lembaga yang berwenang — perusahaan yang ragu sebaiknya memeriksakan kontraknya. **Kalimat framing ini WAJIB ada** (instruksi tracker) dan paling pas di sini.

4. **H2 (pendek — implikasi administratif + funnel)**: "Implikasi Administratif: Kepatuhan PKWT Adalah Soal Tanggal" — *covers*: jawaban langsung 40–60 kata dengan poin BARU: sebagian besar aturan di atas berujung pada tenggat dan jejak dokumen, bukan pada tafsir hukum — **pencatatan 3 hari kerja sejak penandatanganan**, tanggal berakhir tiap kontrak, dan akrual uang kompensasi yang berjalan per periode perpanjangan. Pada 20 karyawan hal ini muat di spreadsheet; pada ratusan karyawan dengan tanggal mulai yang berbeda-beda, yang gagal bukan pemahaman aturannya melainkan pelacakannya. Lalu 1 paragraf *vendor-teach* netral: sistem **Human Capital Management (HCM)** menyimpan status kontrak, tanggal mulai, dan tanggal berakhir sebagai bagian dari data induk karyawan — di **SAP SuccessFactors**, data kepegawaian inti dikelola terpusat di cloud sehingga tenggat kontrak tidak bergantung pada ingatan seseorang. (1–2 kalimat saja soal SAP. **TANPA menyebut Soltius di body**; **JANGAN** mengklaim SuccessFactors otomatis menghitung uang kompensasi Indonesia atau otomatis melapor ke Kemnaker — tidak terverifikasi; **JANGAN** membedah modul; **JANGAN** membandingkan dengan vendor lain.)

5. **FAQ (2–3 Q&A, jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka)** — ambil dari PAA:
   - **"Apakah karyawan PKWT dapat pesangon?"** — Tidak. Yang diwajibkan bagi PKWT adalah **uang kompensasi**, bukan pesangon. Besarannya: PKWT 12 bulan terus menerus = 1 bulan upah, selebihnya proporsional (PP 35/2021 Pasal 16). Hak ini berlaku bagi pekerja dengan masa kerja paling sedikit 1 bulan.
   - **"Berapa lama maksimal kontrak PKWT?"** — Paling lama **5 tahun**, dan angka itu berlaku untuk keseluruhan PKWT **beserta perpanjangannya**, bukan per kontrak (PP 35/2021 Pasal 8). Skema lama 2 tahun + perpanjangan 1 tahun berasal dari aturan sebelum UU Cipta Kerja.
   - **"Apakah PKWT boleh menerapkan masa percobaan?"** — Tidak. Bila tetap disyaratkan, masa percobaan itu **batal demi hukum** dan masa kerjanya tetap dihitung (Pasal 58 UU / Pasal 12 PP 35/2021). Masa percobaan paling lama **3 bulan** hanya berlaku untuk PKWTT.
6. **## Kesimpulan** — ≤80 kata: perbedaan PKWT dan PKWTT bukan soal label, melainkan paket kewajiban yang melekat pada tiap status — dan konversi demi hukum tidak menunggu persetujuan siapa pun. Yang menentukan kepatuhan di lapangan adalah kedisiplinan pada tanggal dan dokumen. 1 positioning line Soltius (lihat anchor). CTA konsultatif.
7. **Soft website CTA (baris terakhir, terpisah)** — ajakan halus mengunjungi soltius.co.id; anchor produk: **SAP SuccessFactors** (per tracker).

(≥1 question-format: H2 #1 & #3 ✓; ≥1 praktis/terstruktur dengan tabel/rumus: H2 #1 tabel perbandingan + H2 #2 rumus & list kompensasi ✓; H2 honest DIGANTI honest-hedging di H2 #3 — sesuai style_addendum §2, sekaligus memenuhi instruksi framing "bukan nasihat hukum" dari tracker; ≥4 angka spesifik inline: 5 tahun, 3 bulan masa percobaan, 1 bulan masa kerja minimal, 12 bulan = 1 bulan upah, 3/7 hari kerja pencatatan, 21 hari & 3 bulan berturut-turut, ilustrasi 8 ÷ 12 ≈ 0,67 bulan upah ✓. **DILARANG menulis {IMAGE_NN} dalam bentuk apa pun** — tabel perbandingan + list rumus menggantikan seluruh kebutuhan visual.)

## SAP / partner tech to teach (keyword tidak ada di `product_matrix.md` — framing universal tetap berlaku)

> `pkwt dan pkwtt` topik regulasi baru/ad-hoc. Mapping diturunkan dari tracker (CTA anchor: **SAP SuccessFactors**) + `company_profile.md` (Soltius punya solusi **Human Capital Management System**) + riset run ini. Aturan universal `product_matrix.md` berlaku penuh: **implements-not-builds**, ≤2 self-mention (override addendum §6), tanpa superlatif, tanpa spec karangan.

Konsep yang dijelaskan akurat & vendor-neutral:
- **PKWT (perjanjian kerja waktu tertentu)** dan **PKWTT (perjanjian kerja waktu tidak tertentu)** — dua bentuk perjanjian kerja menurut UU Ketenagakerjaan; akronim di-expand **sekali** di snippet.
- **Kerangka regulasi**: UU Nomor 13 Tahun 2003 tentang Ketenagakerjaan → diubah melalui UU Nomor 6 Tahun 2023 (Cipta Kerja) → aturan pelaksana PP Nomor 35 Tahun 2021. Sebut rantai ini **sekali** (H2 #1); jangan mengulang di tiap H2.
- **Human Capital Management (HCM)** dan **SAP SuccessFactors** — disebut RINGKAS di H2 #4 (1–2 kalimat) sebagai tempat status kontrak & tanggal hidup sebagai data induk karyawan. Framing netral, **bukan** bedah modul dan **bukan** komparasi vendor.

**Fakta yang WAJIB diverifikasi researcher (jangan diklaim tanpa sumber; SEMUA angka pasal di bawah SUDAH diverifikasi run ini dari salinan resmi JDIH Kemnaker — researcher mengonfirmasi ulang, JANGAN menambah pasal baru dari blog):**

| Klaim | Pasal | Status verifikasi run ini (2026-07-17) |
|---|---|---|
| PKWT paling lama 5 tahun; keseluruhan + perpanjangan tidak lebih dari 5 tahun | PP 35/2021 **Pasal 8 ayat (1) & (2)** | ✅ Terverifikasi dari salinan PDF resmi JDIH Kemnaker (teks diekstrak) |
| PKWT didasarkan atas jangka waktu atau selesainya pekerjaan tertentu; tidak dapat diadakan untuk pekerjaan bersifat tetap | PP 35/2021 **Pasal 4 ayat (1) & (2)** | ✅ Terverifikasi |
| PKWT tidak dapat mensyaratkan masa percobaan; bila disyaratkan → batal demi hukum, masa kerja tetap dihitung | PP 35/2021 **Pasal 12**; UU 13/2003 **Pasal 58** (versi ubahan UU 6/2023) | ✅ Terverifikasi di kedua sumber |
| PKWT wajib dicatatkan secara daring paling lama **3 hari kerja** sejak penandatanganan; bila kanal daring belum tersedia → tertulis di dinas kab/kota paling lama **7 hari kerja** | PP 35/2021 **Pasal 14 ayat (1) & (2)** | ✅ Terverifikasi |
| Uang kompensasi wajib; diberikan saat berakhirnya PKWT; berhak bila masa kerja paling sedikit **1 bulan** terus menerus; per periode bila diperpanjang | PP 35/2021 **Pasal 15 ayat (1)–(4)**; UU **Pasal 61A** | ✅ Terverifikasi |
| Besaran: 12 bulan terus menerus = 1 bulan upah; <12 dan >12 bulan proporsional **(masa kerja ÷ 12) × 1 bulan upah**; dasar = upah pokok + tunjangan tetap | PP 35/2021 **Pasal 16 ayat (1) & (2)** | ✅ Terverifikasi |
| Perjanjian kerja harian: pekerja bekerja **<21 hari dalam 1 bulan**; bila **≥21 hari selama 3 bulan berturut-turut atau lebih** → demi hukum menjadi PKWTT | PP 35/2021 **Pasal 10 ayat (3) & (4)** | ✅ Terverifikasi |
| PKWT dibuat **tertulis**, bahasa Indonesia dan huruf latin | UU 13/2003 **Pasal 57 ayat (1)** (versi ubahan UU 6/2023) | ✅ Terverifikasi |
| PKWT yang tidak memenuhi ketentuan jenis/sifat pekerjaan atau diadakan untuk pekerjaan bersifat tetap → **demi hukum menjadi PKWTT** | UU 13/2003 **Pasal 59 ayat (1)–(3)** (versi ubahan UU 6/2023) | ✅ Terverifikasi |
| PKWTT boleh mensyaratkan masa percobaan **paling lama 3 bulan**; upah tidak boleh di bawah upah minimum | UU 13/2003 **Pasal 60 ayat (1) & (2)** — **tidak diubah** oleh UU 6/2023 | ✅ Terverifikasi (daftar pasal yang diubah UU 6/2023 melompat 58 → 59 → 61) |
| PKWTT lisan → pengusaha wajib membuat **surat pengangkatan** | UU 13/2003 **Pasal 63** | ✅ Terverifikasi |
| Pesangon PKWTT saat PHK (uang pesangon + UPMK + uang penggantian hak) | PP 35/2021 **Pasal 40** | ✅ Terverifikasi (tabel besaran per masa kerja ada di Pasal 40 ayat 2) — **sebut sebagai kategori saja; JANGAN memuat tabel besaran pesangon** (di luar cakupan, boros kata) |

**Klaim yang perlu kehati-hatian ekstra:**
- **"PP 35/2021 tidak lagi mengatur pembaruan PKWT maupun masa jeda 30 hari"** — pernyataan **negatif**. Run ini memeriksa Pasal 4–17 PP 35/2021: tidak ditemukan ketentuan pembaruan (*pembaruan*) maupun jeda 30 hari; yang ada hanya perpanjangan (Pasal 8). Researcher WAJIB mengonfirmasi ulang pada teks utuh. Tulis persis sebatas itu — **JANGAN** melompat ke kesimpulan seperti "pembaruan kini dilarang" atau "kontrak boleh diulang tanpa jeda".
- **UU 13/2003 Pasal 57 versi ubahan hanya memuat 2 ayat** (tertulis+bahasa Indonesia+huruf latin; dan aturan tafsir bila dwibahasa). Ketentuan lama "PKWT yang dibuat tidak tertulis dinyatakan sebagai PKWTT" **tidak lagi berada di Pasal 57**. Karena ini bernuansa yuridis, **artikel cukup menyatakan kewajiban tertulisnya (Pasal 57) dan menempatkan konversi demi hukum pada Pasal 59 ayat (3)** — JANGAN menulis "PKWT lisan otomatis jadi PKWTT" (tidak terverifikasi pada teks pasal yang berlaku) dan JANGAN pula menulis "PKWT lisan kini sah".
- **JANGAN mengarang nominal rupiah, UMR/upah minimum daerah, denda, atau sanksi** — tidak ada satupun angka rupiah yang diverifikasi run ini. Contoh hitung kompensasi dinyatakan sebagai **proporsi upah** (0,67 bulan upah), bukan rupiah.
- **JANGAN mengutip Kepmenakertrans 100/2004** (dipakai sebagian pesaing) tanpa memverifikasi status keberlakuannya pasca PP 35/2021 — bila ragu, hilangkan.
- **JANGAN mengklaim fitur SAP SuccessFactors** yang tidak diverifikasi (mis. otomatis menghitung uang kompensasi sesuai PP 35/2021, atau otomatis mengirim pencatatan ke Kemnaker).
- **Framing wajib**: informasi umum, **bukan nasihat hukum** (instruksi tracker).

## Soltius anchor (BATCH OVERRIDE: maks 2 self-mention)

- **1 positioning line di Kesimpulan**: Soltius — SAP Platinum Partner melalui United VARs, berpengalaman sejak 1998 — **mengimplementasikan dan mendampingi** solusi Human Capital Management SAP seperti SAP SuccessFactors, termasuk penataan data induk kepegawaian. (Framing: implements/migrates/supports, **NEVER builds/owns**; tanpa superlatif; pilih SATU kredensial, jangan menumpuk. **JANGAN** memposisikan Soltius sebagai penasihat hukum/kepatuhan ketenagakerjaan — Soltius mendampingi sistemnya, bukan menafsirkan aturannya.)
- **1 soft website CTA** (baris terakhir): ajakan konsultasi/mengunjungi soltius.co.id — anchor funnel: **SAP SuccessFactors** (per tracker).
- **TANPA aside Soltius di tengah body** (style_addendum §6). Sentuhan praktisi di body boleh TANPA nama Soltius (mis. "di lapangan, kontrak yang bermasalah hampir selalu ketahuan belakangan — saat seseorang membuka kembali berkasnya karena ada perselisihan").

## Internal links to place (BATCH OVERRIDE: 2 SAJA — 1 hub + 1 cousin, inline natural, tanpa "BACA JUGA")

> `landing_page` kosong di sheet → hub dipilih strategist (keputusan standing sejak Juni). Tidak ada blog-hub soltius.co.id untuk topik ketenagakerjaan — link mengarah ke halaman solusi/produk yang sudah live. Kedua URL **diverifikasi resolve/200 OK via WebFetch run ini (2026-07-17)**. Penulis tetap cek ulang saat menulis.

- **Hub (halaman soltius.co.id paling relevan)**: `https://www.soltius.co.id/solutions-by-products/human-capital-management-system` — anchor natural: "solusi Human Capital Management" / "sistem Human Capital Management" — *why*: hub solusi HR Soltius (payung SuccessFactors) dan halaman paling dekat dengan topik administrasi kepegawaian; muara alami pembaca yang selesai membaca kewajiban PKWT dan bertanya "sistem apa yang melacak semua tanggal ini". Tempatkan inline di H2 #4 atau Kesimpulan. Preseden: hub yang sama dipakai `turnover-karyawan-c01` (2026-06) dan `employee-retention-c01` (2026-07), keduanya lolos QC.
- **Cousin**: `https://www.soltius.co.id/solutions-by-products/reading/success-factors` — anchor natural: "SAP SuccessFactors" — *why*: saat body pertama kali menyebut SAP SuccessFactors sebagai contoh sistem HCM tempat data induk kepegawaian dikelola (H2 #4), tautkan nama produk ke halaman produknya; memperkuat CTA anchor per tracker. Preseden: pola yang sama di artikel turnover 2026-06 dan retention 2026-07.
- *Catatan sibling*: `turnover-karyawan-c01` (2026-06) dan `employee-retention-c01` (2026-07) **belum live** (artikel conditional belum di-publish; URL blog turnover mengembalikan HTTP 500 pada pengecekan 2026-07-06). **Jika** salah satunya sudah live saat penulisan/editing, editor boleh mengganti SATU dari dua link di atas (prioritas: ganti cousin) — total link tetap TEPAT 2. **Jangan** menambah link ketiga.

(2 tautan, keduanya existing & natural inline. Tidak ada own-hub blog karena topik baru — dicatat sesuai mode conditional.)

## E-E-A-T signals to embed

- **Angka/fakta spesifik** (≥4 angka inline per addendum §4, semua terverifikasi — lihat tabel verifikasi): **5 tahun** batas PKWT termasuk perpanjangan; **3 bulan** masa percobaan maksimal PKWTT; **1 bulan** masa kerja minimal untuk berhak atas uang kompensasi; **12 bulan = 1 bulan upah**, selebihnya **(masa kerja ÷ 12) × 1 bulan upah**; **3 hari kerja** (daring) / **7 hari kerja** (tertulis) tenggat pencatatan; **21 hari dalam 1 bulan** & **3 bulan berturut-turut** ambang perjanjian kerja harian; ilustrasi **8 ÷ 12 ≈ 0,67 bulan upah**. JANGAN menambah angka apa pun yang tidak ada di tabel verifikasi.
- **Authoritative sources to cite (≥2 — sitasi final 1–2 inline di artikel; keduanya sumber RESMI pemerintah, bukan blog vendor):**
  1. **JDIH Kementerian Ketenagakerjaan — PP Nomor 35 Tahun 2021** (salinan resmi) — `https://jdih.kemnaker.go.id/asset/data_puu/PP352021.pdf` — **sudah diverifikasi run ini (unduh + ekstraksi teks berhasil)**; sumber untuk Pasal 4, 8, 10, 12, 14, 15, 16, 40. **Sitasi utama** — pakai di H2 #2 (kompensasi) atau H2 #1 (tabel).
  2. **JDIH Kementerian Ketenagakerjaan — UU Nomor 6 Tahun 2023 (kluster ketenagakerjaan)** — `https://jdih.kemnaker.go.id/asset/data_puu/2023UU06_Naker.pdf` — **sudah diverifikasi run ini (unduh + ekstraksi teks berhasil)**; sumber untuk Pasal 56, 57, 58, 59, 61, 61A versi ubahan. Halaman katalognya: `https://jdih.kemnaker.go.id/peraturan/detail/2302/undang-undang-nomor-6-tahun-2023`. Pakai di H2 #1 atau #3. *Catatan teknis: PDF ~11 MB — WebFetch gagal karena batas ukuran; unduh langsung berhasil.*
  3. (Cadangan) **JDIH Kemnaker — UU Nomor 13 Tahun 2003** — `https://jdih.kemnaker.go.id/asset/data_puu/peraturan_file_13.pdf` — **diverifikasi run ini**; sumber untuk Pasal 60 (masa percobaan PKWTT 3 bulan) dan Pasal 63 (surat pengangkatan) yang **tidak diubah** UU 6/2023.
  4. (Cadangan) **peraturan.bpk.go.id** — `https://peraturan.bpk.go.id/Details/246523/uu-no-6-tahun-2023`. *Catatan: unduhan PDF langsung dari BPK mengembalikan **HTTP 403** saat WebFetch — pakai JDIH Kemnaker sebagai sumber utama.*
  - **JANGAN** menjadikan blog vendor HR (Talenta, Gadjian, Hadirr, Privy, KantorKu, Dealls) sebagai sitasi — mereka pesaing SERP kita dan beberapa memuat aturan usang. **JANGAN** pula menyitir halaman BPJS Ketenagakerjaan untuk durasi PKWT (masih menulis "maksimal 3 tahun", pra-Cipta Kerja).
- **First-party Soltius angle**: pengalaman implementasi solusi Human Capital Management SAP dan penataan data induk kepegawaian (HCM termasuk lini solusi Soltius per `company_profile.md`) — dipakai di positioning line Kesimpulan. Tanpa nama klien atau angka proyek karangan.

## AI Overview & GEO optimization (seo_playbook §2a, dipadatkan per addendum §5)

- **Definition snippet blockquote** setelah lead — "Ringkasnya:" 40–60 kata, arah: *"Ringkasnya: PKWT (perjanjian kerja waktu tertentu) adalah kontrak kerja yang dibatasi jangka waktu atau selesainya suatu pekerjaan tertentu, sedangkan PKWTT (perjanjian kerja waktu tidak tertentu) adalah hubungan kerja tanpa batas waktu — status yang umum disebut karyawan tetap. Keduanya diatur UU Ketenagakerjaan beserta perubahannya dan PP Nomor 35 Tahun 2021."* (writer boleh poles, jaga 40–60 kata; akronim di-expand **di sini saja**. **INI satu-satunya definisi** — body dilarang menyatakannya ulang dengan kata lain, termasuk di jawaban langsung tiap H2.)
- **Jawaban langsung 40–60 kata segera setelah TIAP H2** berisi poin baru milik H2 itu (perbedaan = paket kewajiban, bukan sekadar durasi; batas 5 tahun berlaku kumulatif, bukan per kontrak; konversi terjadi demi hukum tanpa persetujuan; kepatuhan berujung pada tenggat & dokumen), **BUKAN** parafrase snippet.
- **Satu paragraf = satu poin quotable & verifiable.** Setiap klaim regulatif menyebut pasalnya — inilah yang membuat halaman ini layak dikutip AI engine di atas blog yang menulis "menurut undang-undang" tanpa nomor.
- **Entity list** (nama penuh saat sebutan pertama, akronim di-expand sekali): PKWT (perjanjian kerja waktu tertentu), PKWTT (perjanjian kerja waktu tidak tertentu), UU Nomor 13 Tahun 2003 tentang Ketenagakerjaan, UU Nomor 6 Tahun 2023 (Cipta Kerja), PP Nomor 35 Tahun 2021, Kementerian Ketenagakerjaan (Kemnaker), uang kompensasi, uang pesangon, uang penghargaan masa kerja (UPMK), masa percobaan kerja, Human Capital Management (HCM), SAP SuccessFactors.
- **Format match**: tabel untuk perbandingan dimensi (H2 #1); rumus + list ber-lead-in-bold untuk kompensasi (H2 #2); list pemicu untuk konversi (H2 #3); prosa untuk implikasi administratif (H2 #4). Tabel diutamakan — jangan paksa elemen berlebih hingga melampaui 1000 kata.
- **FAQ**: 2–3 Q&A, parseable FAQPage schema; `dateModified` akurat di meta block (topik regulasi — kesegaran tanggal penting karena aturan pernah berubah).

## Data captured this run

- **Source(s)**: WebSearch (Google ID, 2026-07-17, 4 kueri) — peta pesaing "pkwt dan pkwtt", PAA turunan, aturan durasi & kompensasi. WebFetch/unduh langsung: `jdih.kemnaker.go.id/asset/data_puu/PP352021.pdf` (✅ 200, teks diekstrak — Pasal 4, 5, 8, 10, 11, 12, 13, 14, 15, 16, 17, 40 dibaca verbatim), `jdih.kemnaker.go.id/asset/data_puu/2023UU06_Naker.pdf` (✅ unduh 11 MB, teks diekstrak — Pasal 56, 57, 58, 59, 61, 61A versi ubahan dibaca verbatim), `jdih.kemnaker.go.id/asset/data_puu/peraturan_file_13.pdf` (✅ 200, Pasal 60 & 63 dibaca verbatim), `talenta.co` (✅ 200, profil angle pesaing terkuat), `bpjsketenagakerjaan.go.id` (✅ 200, terbukti memuat durasi usang "3 tahun"), `soltius.co.id/solutions-by-products/human-capital-management-system` (✅ 200), `soltius.co.id/solutions-by-products/reading/success-factors` (✅ 200), `peraturan.bpk.go.id` PDF (❌ 403), `halohubungankerja.kemnaker.go.id` (❌ DNS tidak resolve). WebFetch SERP Google **terblokir** — fallback WebSearch sesuai SOP `CLAUDE.md` §11.
- **Apr 2026 rank** (from report): `n/a` — keyword di luar 6 keyword `seo_report_apr2026.md` (topik conditional/ad-hoc baru).
- **Volume / KD / trend**: `n/a (Ahrefs not connected)`. Sinyal kualitatif: SERP ID sangat padat (Talenta, BPJS Ketenagakerjaan, Hukumonline, Jobstreet, KantorKu, Hadirr, Privy, DSLA, MMP Law, Binus, Disnakertrans NTB, jurnal akademik) → sesuai catatan sheet "topik regulasi ketenagakerjaan bervolume tinggi"; **beatable** karena akurasi pesaing rapuh (aturan pra-Cipta Kerja masih beredar, termasuk di halaman pemerintah), tidak ada tabel, dan sudut pandang perusahaan kosong.
- **SERP features present**: explainer komparatif mendominasi; PAA + AI Overview sangat mungkin aktif untuk kueri regulasi ini (tidak terkonfirmasi langsung — scrape terblokir).
- **cache_source**: `n/a` — mode conditional `/single-article`; riset ditangkap inline di brief ini (tanpa cache per-keyword bulanan).

## Notes for SME researcher

- **Dossier RINGKAS saja** — artikel target 900 kata, 4 H2 ramping. Jangan kirim material untuk 1.650 kata.
- **Seluruh angka pasal di tabel verifikasi sudah dibaca verbatim dari salinan resmi JDIH Kemnaker run ini.** Tugas Anda: **konfirmasi ulang, bukan menambah**. Sumber wajib = `jdih.kemnaker.go.id` (PP352021.pdf, 2023UU06_Naker.pdf, peraturan_file_13.pdf) atau `peraturan.bpk.go.id`. **JANGAN** memakai blog vendor HR sebagai dasar pasal — beberapa memuat aturan usang.
- **Prioritas verifikasi ulang** (urut): (1) PP 35/2021 Pasal 8 — batas 5 tahun kumulatif; (2) Pasal 15–16 — syarat masa kerja 1 bulan + rumus (masa kerja ÷ 12) × 1 bulan upah + dasar upah pokok & tunjangan tetap; (3) Pasal 14 — tenggat 3 hari kerja daring / 7 hari kerja tertulis; (4) Pasal 10 ayat (3) & (4) — ambang 21 hari & 3 bulan berturut-turut; (5) UU Pasal 59 ayat (3) — konversi demi hukum; (6) UU 13/2003 Pasal 60 — masa percobaan PKWTT 3 bulan, pastikan **tidak** diubah UU 6/2023.
- **Pernyataan negatif yang perlu kehati-hatian**: "PP 35/2021 tidak lagi mengatur pembaruan PKWT maupun masa jeda 30 hari". Periksa teks utuh PP. Bila Anda menemukan ketentuan yang membantahnya, **kabari editor** — kalimat itu harus dicabut. Jangan melebarkan menjadi kesimpulan hukum.
- **Nuansa Pasal 57**: versi ubahan hanya 2 ayat (kewajiban tertulis + aturan tafsir dwibahasa). Jangan menulis "PKWT lisan otomatis menjadi PKWTT" (klausul lama, tidak ada di teks yang berlaku) dan jangan pula menulis "PKWT lisan kini sah". Cukup: kewajiban tertulis ada di Pasal 57; konversi demi hukum diatur Pasal 59 ayat (3).
- **JANGAN sediakan**: nominal rupiah, upah minimum daerah, besaran denda/sanksi administratif, atau tabel besaran pesangon per masa kerja (Pasal 40 ayat 2) — semuanya di luar cakupan 900 kata dan berisiko.
- **JANGAN mengklaim fitur SAP SuccessFactors** di luar yang dinyatakan halaman resmi SAP/Soltius. Aman: SuccessFactors adalah solusi HCM berbasis cloud tempat data kepegawaian inti dikelola terpusat. **Tidak aman**: klaim otomatisasi kompensasi PP 35/2021 atau pelaporan otomatis ke Kemnaker.
- **Boundary dedup**: JANGAN menyediakan material tentang penyebab/rumus/benchmark turnover (milik `turnover-karyawan-c01` 2026-06); JANGAN material strategi retensi, engagement, atau people analytics (milik `employee-retention-c01` 2026-07); JANGAN bedah modul SuccessFactors (milik `sap-successfactors-modul-c01` 2026-06); JANGAN komparasi SuccessFactors vs HRIS lokal/vendor mana pun (milik `successfactors-vs-hris-c01`, row 9 batch ini).
- **Framing wajib**: informasi umum, **bukan nasihat hukum** — kalimat ini harus ada di artikel (instruksi tracker). Soltius adalah pendamping sistem HR, bukan penasihat hukum ketenagakerjaan.
- Cek 2 URL internal (`solutions-by-products/human-capital-management-system` + `solutions-by-products/reading/success-factors`) tetap 200/OK saat penulisan.

## Notes for future strategist runs

Artikel ini SENGAJA TIDAK mencakup (untuk menghindari kanibalisasi + disisakan untuk artikel lain):
- **Cara menghitung pesangon PKWTT** (tabel besaran per masa kerja PP 35/2021 Pasal 40, UPMK, uang penggantian hak, pengali per alasan PHK) — materi tebal, layak artikel *how-to* tersendiri di cluster HR.
- **Alih daya / outsourcing** (PP 35/2021 BAB III, Pasal 18 dst.) — kandidat artikel regulasi terpisah; sering dicari bersama PKWT.
- **Prosedur PHK dan perselisihan hubungan industrial** (perundingan bipartit, mediasi, PHI) — cluster regulasi tersendiri.
- **Jaminan Kehilangan Pekerjaan (JKP) & BPJS Ketenagakerjaan untuk PKWT/PKWTT** — disinggung pesaing (BPJS), sengaja ditahan sebagai artikel sendiri.
- **Waktu kerja & waktu istirahat / lembur** (PP 35/2021 BAB IV) — kandidat artikel operasional HR.
- **Cara mencatatkan PKWT lewat kanal daring Kemnaker (langkah demi langkah)** — brief ini hanya menyebut tenggatnya; prosedurnya layak artikel *how-to* dengan riset kanal tersendiri.
- **Kontrak kerja untuk tenaga kerja asing (TKA)** — hanya disinggung maksimal 1 frasa (pengecualian uang kompensasi, Pasal 15 ayat 5).

## Format overrides (batch conditional 2026-08)

Restating dari `conditional/2026-08/style_addendum.md` — **MENGIKAT** untuk researcher, writer, editor, validator:

- **Panjang: 800–1000 kata (target ~900)** — hitungan body H1 s/d CTA, di luar frontmatter; `target_word_count: 900` di frontmatter, isi `word_count` aktual setelah menulis. <800 terlalu tipis; >1000 gagal (pangkas dengan membuang kalimat pengantar/transisi kosong dan contoh redundan, BUKAN memampatkan semua kalimat jadi telegram — ritme tetap bervariasi, paragraf 1–4 kalimat). **Tabel perbandingan ikut dihitung** — jaga barisnya tetap 6.
- **TANPA image placeholder** — dilarang menulis `{IMAGE_NN}` dalam bentuk apa pun; stage image-planner DILEWATI; tidak ada `images.json`. Konsep visual (perbandingan PKWT vs PKWTT, rumus kompensasi, pemicu konversi) disampaikan lewat **tabel/list**.
- **FAQ: 2–3 Q&A** (bukan 5–8); jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka; ambil dari PAA di atas.
- **Internal link: TEPAT 2** — 1 hub (`solutions-by-products/human-capital-management-system`) + 1 cousin (`solutions-by-products/reading/success-factors`), inline natural, tanpa "BACA JUGA". Sitasi eksternal otoritatif 1–2 inline (JDIH Kemnaker: PP 35/2021 + UU 6/2023).
- **Definisi HANYA SEKALI** — di definition snippet "Ringkasnya:" (40–60 kata) setelah lead, tempat akronim PKWT/PKWTT di-expand. Body/H2 **DILARANG** mengulang definisi snippet dengan kata lain, termasuk di jawaban langsung 40–60 kata setelah tiap H2. **Tidak ada H2 definitional "Apa Itu PKWT dan PKWTT?"** — tidak ada info baru yang membenarkannya; dasar hukum masuk ke jawaban langsung H2 #1.
- **Prosa padat on-point** — tanpa paragraf roadmap, tanpa transisi kosong, tanpa pembuka klise; em-dash ≤2; tanpa adjektiva hype (anti-AI `style_guide.md` §5 berlaku penuh). EYD berlaku penuh.
- **Lead ≤80 kata** (pain konkret + frasa persis `PKWT dan PKWTT` + janji artikel).
- **Kesimpulan ≤80 kata** + 1 positioning line Soltius; **soft website CTA (soltius.co.id) = baris paling akhir**, terpisah dari Kesimpulan. **Maks 2 mention Soltius total.**
- **3–4 H2** (≥1 question-format: #1 & #3; ≥1 praktis/terstruktur dengan tabel/rumus: #1 & #2); **≥4 angka spesifik inline**; jawaban langsung 40–60 kata setelah tiap H2 berisi poin BARU milik H2 itu.
- **Framing Soltius** (`style_guide.md` §11): implementator/pendamping SAP — **implements, migrates, supports — NEVER builds/owns**; dan **bukan** penasihat hukum. Disiplin sitasi §10: **JANGAN mengarang nomor pasal, durasi, nominal rupiah, denda, atau harga** — seluruh angka regulatif terbatas pada tabel verifikasi di brief ini. Artikel wajib memuat framing **informasi umum, bukan nasihat hukum**.
