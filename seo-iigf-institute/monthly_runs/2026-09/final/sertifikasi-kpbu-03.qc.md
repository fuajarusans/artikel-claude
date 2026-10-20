---
brief_id: "sertifikasi-kpbu-03"
editor_run_date: "2026-09-22"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.02
---

# Editor QC Report — Sertifikasi KPBU: Cara Belajar dan Pola Soal Ujian CP3P

## Recommendation
**approve**

Draf ini masuk dalam kondisi jauh lebih baik dari rata-rata: seluruh kata terlarang bulan ini nihil sejak pemeriksaan pertama (**"esai" 0 · "open-book" 0 · em-dash 0 · MIF 0 · tanpa tahun pada "versi 2" · tanpa nomor bab Execution tunggal · tanpa tarif ujian ulang berdiskon · tanpa nama individu**), daftar enam MDB terverifikasi kata per kata termasuk AfDB, dan seluruh klaim format ujian tertelusur ke APMG langsung. Saya menemukan satu cacat faktual sungguhan — **lead memuat negasi mutlak** "APMG International tidak menerbitkan contoh soal resmi untuk level mana pun", padahal dosir secara eksplisit membatasi klaim itu pada laman FAQ dan sertifikasi yang diperiksa — dan itu sudah saya perbaiki di tempat. Sisanya penyuntingan mutu: penutup draf hampir sama arsitekturnya dengan penutup `-02` bulan ini dan baris CTA hampir sama dengan `-01`, keduanya sudah dibedakan; paragraf peta bab di H2 #1 saya padatkan agar tidak lagi terbaca sebagai katalog level (pagar anti-kanibalisasi Agustus `-03`), yang sekaligus membebaskan 22 kata; tiga jawaban FAQ di bawah 40 kata saya naikkan dengan fakta bersumber, bukan tambalan. Hasil akhir **1.557 kata** (plafon 1.600, sisa 43), `ai_score` 0,04, dan tiga kueri plagiarisme nihil temuan. Satu hal dicatat terus terang: kuota tiga kueri habis untuk tiga kandidat berisiko tertinggi, sehingga lima kandidat lain tidak diperiksa ke web — leg itu **partial/degraded**, bukan tuntas.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | CV panjang paragraf 0,61; ritme 1–5 kalimat; nol em-dash; nol pembuka klise. Register instruktur betulan ("silabus tersembunyi", "gagal secara teknis, bukan sekadar secara etika"), bukan katalog kursus |
| Factual & KPBU/PPP & sertifikasi accuracy | 9 | Seluruh format ujian/cakupan bab dari APMG langsung; satu negasi mutlak di lead ditemukan dan dikoreksi; klaim bahasa (*medium confidence*) berpagar dua kali |
| On-page SEO compliance | 9 | Meta title 53, meta description 155, slug 44, 5 H2 badan, 3 internal, 2 eksternal APMG, 6 FAQ, 1 tabel + 2 jenis daftar, 1.557 kata |
| GEO extractability (§2a) | 9 | Lima jawaban langsung pasca-H2: 48/47/47/48/52 kata; FAQ 40–44 kata; `date_modified` ditambahkan |
| IIGF Institute framing discipline | 10 | 2 self-mention; APMG pemilik/penguji/penganugerah dinyatakan eksplisit; "ATO APMG" tepat; tanpa superlatif; konteks KPBU/PT PII menempel |
| Internal linking | 10 | Tepat 3, inline, destinasi sesuai brief; tanpa "BACA JUGA"; `gagas.co.id`/`ptpii.co.id` nihil |
| FAQ quality | 9 | 6 Q&A; semua 40–44 kata setelah perbaikan; tiap jawaban memuat angka bersumber + tahun |
| Originality (plagiarism + AI-detector) | 9 | `ai_score` 0,04 (*pass*); *paragraph burstiness* 0,53; 3 kandidat dicek — nihil kecocokan verbatim. Dikurangi karena 5 kandidat tidak dicek (kuota) |

## What I fixed (changelog)

1. **[FAKTUAL — prioritas tertinggi] Negasi mutlak di lead dibatasi cakupannya.** "…dan APMG International tidak menerbitkan contoh soal resmi untuk level mana pun" → "…dan contoh soal resmi **tidak tercantum pada laman FAQ maupun sertifikasi APMG International** untuk level mana pun". Dosir mewajibkan perumusan berbasis laman yang diperiksa, bukan negasi atas seluruh situs. Badan artikel (H2 #3) dan FAQ #1 sudah benar sejak draf; hanya lead yang menyimpang.
2. **Paragraf peta bab H2 #1 dipadatkan dan dibingkai ulang sebagai peta belajar** (72 → 50 kata). Versi draf membacakan Bab per level berikut deskripsinya satu per satu — persis subtopik milik Agustus `-03` ("Peta bab PPP Guide yang diuji di setiap level"). Sekarang: "Peta belajarnya karena itu bukan seluruh dokumen. Foundation bertumpu pada Bab 1; Preparation pada Bab 2 sampai Bab 5; Execution mulai Bab 5, tetapi batas akhirnya bergantung versi ujian…". Seluruh fakta wajib bertahan (termasuk 5–8 v1 / 5–7 v2 sebagai perbedaan versi); deskripsi fungsional Bab 7–8 yang redundan dengan tabel dihapus. Hemat 22 kata.
3. **Penutup direstrukturisasi untuk menghapus kemiripan tekstual dengan `-02` September.** Draf: "IIGF Institute, unit manajemen pengetahuan PT Penjaminan Infrastruktur Indonesia (Persero) di bidang KPBU, adalah *Accredited Training Organization* APMG pertama di Indonesia yang…, sementara APMG International tetap pihak yang memiliki, menguji, dan menganugerahkan kredensialnya." — arsitektur dan sebagian besar diksinya nyaris identik dengan penutup `-02`. Sekarang kepemilikan APMG dipindah ke depan sebagai kalimat sendiri dan *positioning line* dibuka dengan "Sebagai unit manajemen pengetahuan…". Akurasi framing tetap utuh; hemat 2 kata.
4. **Baris CTA terakhir dibedakan dari `-01`.** "Gambaran program pelatihan serta koleksi publikasi KPBU dapat Anda telusuri **lebih jauh di** institute.iigf.co.id." terlalu dekat dengan CTA `-01` ("Ikhtisar program pelatihan dan kajian KPBU dapat Anda telusuri lebih jauh di…"). Sekarang: "Untuk membandingkan keduanya, materi pembelajaran dan program pelatihan KPBU dapat ditelusuri di institute.iigf.co.id." — menyambung langsung ke kalimat penutup tentang jalur mandiri vs kelas terstruktur, tetap lembut.
5. **Klaim biaya ujian ulang diberi atribusi.** "…tidak ditemukan tarif pengulangan yang lebih murah" → "…tidak ada tarif pengulangan berdiskon yang dipublikasikan **(FAQ APMG International, penelusuran 2026)**". Klaim ini pagar penting bulan ini (tarif ujian ulang berdiskon = dilarang) dan kini tertelusur, bukan menggantung.
6. **Kalimat bahasa di H2 #5 dipresisikan.** "…dan pilihan bahasa lain justru paling sempit di dua level Practitioner" → "…**sementara opsi bahasa lain hanya tersedia pada sebagian ujian** dan paling sempit di dua level Practitioner." Blok ini adalah jawaban terekstraksi 40–60 kata; tanpa klausa itu, mesin AI bisa mengutipnya sebagai "hanya Bahasa Inggris yang tersedia", yang tidak benar untuk ujian versi 1. Blok tetap di 52 kata.
7. **Tiga jawaban FAQ di bawah ambang 40 kata dinaikkan dengan fakta, bukan tambalan**: FAQ #2 37→42 (+"Materinya Bab 1 PPP Guide."), FAQ #4 36→42 (+"Unduhan itu berlaku untuk ketiga level."), FAQ #6 39→44 (+"Pastikan langsung ke APMG sebelum mendaftar." — sekaligus memperkuat pagar kedua klaim bahasa).
8. **Anchor hub di-lowercase**: "[Sertifikasi KPBU]" → "[sertifikasi KPBU]" di lead, dan `internal_links.anchor` di frontmatter disinkronkan. Kapitalisasi judul membuat frasa pencarian generik terbaca seperti nama kredensial — persis yang dilarang pemeriksaan #4. Selaras juga dengan anchor Agustus `-03` dan `capacity-building-01`.
9. **Nada lead dinetralkan**: "Artikel ini membahas yang sebenarnya berguna" → "Artikel ini membahas tiga hal yang lebih berguna" (klaimnya jadi terukur, dan tiga itemnya memang ada).
10. **Frontmatter**: `date_modified: "2026-09-22"` ditambahkan (§2a *freshness*, menyamakan konvensi dengan final September lain); `word_count` 1548 → **1557**.

## What I flagged (open issues)

- ⚠️ **Leg plagiarisme partial (kuota).** Anggaran tiga kueri habis untuk tiga kandidat berisiko tertinggi (kalimat orisinal Perpres 38/2015 vs PPP Guide; kalimat angka Foundation; daftar enam MDB). Lima kandidat lain — termasuk *lead*, *definition snippet*, dan kalimat temuan bank soal — **tidak diperiksa ke web**. Ketiganya yang dicek nihil kecocokan, dan `ai_score` 0,04 menunjukkan teks tidak tersalin dari pola manapun, jadi risiko sisa saya nilai rendah. *Rekomendasi*: bila kuota tersedia di sesi mendatang, cek kandidat [6] (lead), [7] (snippet), [8] (temuan bank soal) dari `sertifikasi-kpbu-03.id.quality-input.json`.
- ⚠️ **Klaim bahasa ujian tetap *medium confidence*.** Berasal dari satu pengambilan otomatis laman FAQ APMG (2026-09-21). Artikel sudah berpagar dua kali dan **tidak memuat tabel bahasa per level** (diverifikasi: satu-satunya tabel di artikel adalah tabel format soal). *Rekomendasi*: verifikasi manual daftar bahasa sebelum topik ini dikembangkan menjadi artikel tersendiri; jangan pernah dinaikkan menjadi tabel per sel tanpa pengecekan baris demi baris.
- ⚠️ **"ATO APMG pertama di Indonesia" tanpa tautan sumber inline.** `product_matrix.md` mengizinkan klaim ini "with a source"; sumbernya ada di `company_profile.md` (fakta pra-disetujui, 2019) dan dosir (`ppp-certification.com/training-providers`, 2026-08-12), tetapi tidak dikutip inline di artikel. Konsisten dengan `-01`/`-02`/`-04` bulan ini. *Rekomendasi*: keputusan tingkat pipeline, bukan cacat artikel — bila klien ingin lebih aman, tambahkan tautan direktori ATO APMG pada semua artikel klaster sekaligus.
- ⚠️ **Kemiripan fakta gratis-berbayar dengan FAQ `-02`.** FAQ kami "Apakah ada kursus gratis untuk persiapan CP3P?" dan FAQ `-02` "Apakah ada materi belajar CP3P yang gratis?" menyampaikan fakta APMG yang sama. Runtun identik terpanjang 7 kata ("kursus daring gratis untuk Preparation maupun Execution") — jauh di bawah ambang 20 kata, dan keduanya parafrase dari satu kalimat verbatim APMG yang tidak bisa diubah tanpa mengorbankan akurasi. Pembingkaiannya berbeda (kami: sumber belajar; `-02`: beban anggaran). Tidak saya ubah. *Rekomendasi*: biarkan; strategis cukup mencatat agar Oktober tidak menambah artikel ketiga dengan fakta yang sama.
- ⚠️ **`vocab-repetition` 35,3%** (ambang skrip <30%, severity *low*). Artikel bertopik sempit tentang satu dokumen dan tiga ujian memang memusatkan kosakata pada "ujian/soal/Bab/level/PPP Guide/APMG". Burstiness paragraf 0,53 dan kalimat 0,87 menunjukkan variasi struktural sehat, jadi ini bukan tanda mesin. Tidak diintervensi — mengencerkannya justru akan menambah kata pada margin 43.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] Tanpa pembuka "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" — nihil (0 kemunculan)
- [x] Tanpa "Selain itu" membuka ≥2 paragraf berurutan — "Selain itu" nihil total (0)
- [x] Tanpa "Penting untuk dicatat / dipahami bahwa" — nihil (0)
- [x] "Dengan demikian" tidak berlebihan — nihil (0)
- [x] Em-dash ≤2 — **0** (U+2014); satu en-dash hanya di dalam sel tabel ("Bab 2–5")
- [x] Panjang paragraf bervariasi — 1–5 kalimat; CV bobot kata **0,606**; ada tiga paragraf satu kalimat ("Dua pola belajar yang berlawanan, dari satu dokumen yang sama.")
- [x] Tidak setiap H2 → daftar 3 butir — H2 #1 prosa, #2 prosa+tabel, #3 prosa+3 butir, #4 daftar bernomor 6 butir, #5 prosa
- [x] Tanpa klaim generik tanpa angka — 50/40 menit/4 soal/20 poin/2,5 jam/50%/±0,8/±37,5/8 bab/6 MDB
- [x] Tanpa tumpukan adjektiva hype — nihil "terbaik/terlengkap/canggih/terdepan"
- [x] Tanpa paragraf *service-dump* — hanya satu anchor program (Sertifikasi CP3P) di penutup
- [x] Register brosur & siaran pers — nihil "Segera daftar", "Jangan lewatkan", "Dalam rangka", "Sebagai wujud komitmen"
- [x] Tanpa janji kelulusan — nihil "menjamin kelulusan/pasti lulus"

### B. Factual & KPBU/PPP & sertifikasi spot-check

| Claim | Source check | Verdict |
|---|---|---|
| Foundation = *simple multiple choice*, 50 soal / 40 menit, lulus 50% (25 dari 50 poin) | dossier ✓ verbatim APMG FAQ (`ppp-certification.com/faqs`, 2026-09-21; konsisten 2026-08-12 & 2026-09-17) | **pass** |
| Preparation & Execution = *complex multiple choice*, 4 soal @20 poin, 2,5 jam, lulus 50% (40 dari 80 poin) — **tanpa kata "esai" di mana pun, termasuk dalam negasi** | dossier ✓ verbatim, dicek dua kali independen; verifikasi mandiri saya: "esai" **0 kemunculan** di seluruh berkas | **pass** |
| Cakupan Execution bergantung versi (Bab 5–8 v1 / Bab 5–7 v2), **tanpa tahun untuk "versi terbaru (v2)"** dan tanpa satu angka final | dossier ✓ verbatim `ppp-certification.com/certification`; pemeriksaan saya: tidak ada tahun melekat pada "v2"; kalimatnya eksplisit "bergantung versi ujian" | **pass** |
| Pengembang kerangka: AfDB, ADB, EBRD, IDB, IsDB, World Bank Group + dukungan pendanaan PPIAF | dossier ✓ verbatim halaman produk APMG + `company_profile.md` Rule 6; verifikasi kata per kata: keenam hadir, **MIF 0 kemunculan**, **AfDB hadir** | **pass** |
| Contoh soal / bank soal / ujian simulasi resmi tidak tersedia — dibingkai sebagai **tidak tercantum pada laman FAQ & sertifikasi APMG** | dossier ✓ (*high* untuk cakupan laman yang diperiksa, bukan negasi mutlak). Draf **gagal di lead** (negasi mutlak) → **dikoreksi di tempat**; H2 #3 dan FAQ #1 sudah benar | **fail → fixed** |
| Bahasa Inggris satu-satunya yang dijamin di semua level/versi; Bahasa Indonesia tidak terdaftar | dossier ✓ (*high* untuk pola, *medium* untuk rincian per sel). Dua pagar terpasang ("Berdasarkan penelusuran daftar bahasa pada laman FAQ APMG (2026)" + "berasal dari satu kali penelusuran dan dapat berubah"); tanpa tabel bahasa | **pass** |
| Mengulang ujian = biaya ujian penuh lagi tiap percobaan; tanpa tarif berdiskon | Instruksi wajib bulan ini + riset terverifikasi `-02`; atribusi "(FAQ APMG International, penelusuran 2026)" **ditambahkan**. Tanpa angka rupiah, jadi tanpa risiko label indikatif | **pass** |

Pemeriksaan tambahan wajib bulan ini:
- **Pemeriksaan 2 (kepemilikan CP3P)**: penutup menyatakan "Kredensialnya sendiri milik APMG International, yang memiliki, menguji, dan menganugerahkannya." Badan artikel menambah pemisahan peran: "pelatihan diselenggarakan organisasi berstatus ATO…, sedangkan ujian didaftarkan tersendiri lewat portal kandidat APMG." **Tidak ada satu pun rumusan yang menyiratkan sebaliknya.** ✓
- **Pemeriksaan 3 (urutan Preparation/Execution)**: artikel **tidak membuat klaim urutan atau prasyarat apa pun** — jadi tidak ada kontradiksi terhadap aturan "tidak berurutan wajib", dan pagar anti-kanibalisasi (materi milik Agustus `-03`) justru terjaga karena topiknya nihil. ✓
- **Pemeriksaan 4 ("Sertifikasi KPBU" frasa generik)**: selalu berpasangan dengan kualifikasi — "jalur sertifikasi KPBU berstandar internasional", "sertifikasi KPBU jalur internasional", "sertifikasi KPBU jalur CP3P". Anchor sudah di-lowercase agar tidak terbaca sebagai nama kredensial. ✓
- **Pemeriksaan 6 (Kantor Bersama KPBU)**: frasa tidak muncul sama sekali di artikel — tidak ada risiko "anggota". ✓
- **Pemeriksaan 7 (biaya & jadwal)**: nol angka rupiah, nol tanggal batch/jadwal kelas dari `institute.iigf.co.id`. ✓
- **Pemeriksaan 8**: nama individu **0**; tidak merendahkan penyelenggara lain (berkas beredar dibahas netral: "bukan terbitan APMG, akurasinya tidak dapat dijamin"); self-mention **2**; anchor "Sertifikasi CP3P" **1×, di penutup**. ✓
- **Pemeriksaan 12**: jumlah kajian pra-studi kelayakan tidak disebut. ✓
- **Bank soal / contoh soal buatan sendiri**: nihil. Artikel hanya membahas pola dan cara belajar; tidak ada contoh butir soal, tidak ada tautan ke berkas manapun. ✓

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword di 30 karakter pertama) — **53** karakter, keyword di **posisi 0**
- [x] Meta description 140–160 — **155**
- [x] Slug ≤60, kebab-case, keyword — **44** (`sertifikasi-kpbu-cara-belajar-pola-soal-cp3p`)
- [x] H1 memuat keyword — "Sertifikasi KPBU: Cara Belajar dan Pola Soal Ujian CP3P"
- [x] Jumlah H2 4–7 (playbook §3) — **5 H2 badan** + FAQ + Kesimpulan
- [x] ≥1 H2 format pertanyaan (#1, #3); ≥1 H2 jujur/kontra-konvensional (#5 hambatan bahasa)
- [x] Keyword dalam 100 kata pertama — ~kata 38; juga di paragraf terakhir Kesimpulan
- [x] *Definition snippet* dekat atas — blockquote "Ringkasnya", **51 kata**, dalam ~150 kata pertama
- [x] ≥8 LSI — **12+** terhitung: ujian CP3P · CP3P Foundation · pola soal · *complex multiple choice* · *simple multiple choice* · ambang kelulusan · PPP Guide · unduhan gratis · kursus daring Foundation · APMG International · manajemen waktu · ATO · glosarium · Perpres 38/2015 · Permen PPN 7/2023 · portal kandidat
- [x] 3 internal link (1 hub + 2 cousin) — `institute.iigf.co.id/` (lead, inline) · `/capacity-building` (H2 #5) · `/e-library/lainnya/77/...` (langkah 4). Tanpa "BACA JUGA"; `ptpii.co.id`/`gagas.co.id` **nihil**
- [x] ≥1 sitasi eksternal otoritatif — **2, keduanya APMG**: `ppp-certification.com/certification` (H2 #1) + `ppp-certification.com/faqs` (H2 #3). Tanpa tautan ke penyelenggara pesaing
- [x] FAQ 5–7 Q&A — **6**
- [x] ≥1 daftar + ≥1 tabel — 1 tabel 6 kolom, 1 daftar bernomor (6), 1 daftar butir (3)
- [x] Jumlah kata dalam band brief (1.200–1.600) — **1.557** (`tools/count_words.py`), sisa 43 kata dari plafon

*Catatan angka: `quality-check.ps1` melaporkan 1.601 kata karena tokenizer-nya berbeda (tidak menormalkan sintaks tautan/tabel seperti `count_words.py`). Gerbang kanonik pipeline adalah `count_words.py` = **1.557**.*

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata tepat setelah setiap H2 utama — dihitung ulang sendiri, bukan mengandalkan laporan penulis: **48 · 47 · 47 · 48 · 52**. (Penulis melaporkan 44/47/47/48/47; hitungan saya berbeda di H2 #1 dan #5 — #5 memang naik ke 52 karena perbaikan presisi klausa bahasa. Kelimanya tetap di dalam band.)
- [x] Tiap paragraf badan membawa satu poin mandiri yang bisa dikutip dan diverifikasi — mis. "Kurang dari satu menit per soal di Foundation berarti tidak ada waktu menimbang"; "Kesenjangannya berbanding terbalik dengan tingkat kesulitan"; catatan sumber di bawah tabel memisahkan kalkulasi dari pernyataan APMG
- [x] FAQ dapat diurai untuk skema FAQPage (`### pertanyaan` + satu blok jawaban, 40–44 kata); `date_modified: "2026-09-22"` ditambahkan ke blok meta

### D. IIGF Institute framing discipline (product_matrix.md + style_guide §11)
- [x] IIGF Institute = unit manajemen pengetahuan PT PII + ATO APMG — **bukan** pemilik/penganugerah CP3P, bukan universitas, bukan entitas hukum mandiri
- [x] ≤3 self-mention — **2**: "IIGF Institute" 1× (penutup) + CTA "institute.iigf.co.id" 1×. Penyebutan "IIGF" langsung diikuti "unit manajemen pengetahuan PT Penjaminan Infrastruktur Indonesia (Persero) **di bidang KPBU**" → disambiguasi dari International Institute of Green Finance terpenuhi
- [x] Tanpa superlatif tak terverifikasi — "ATO APMG pertama di Indonesia" adalah klaim faktual yang diizinkan (lihat flag sumber inline)
- [x] Nama program sesuai `product_matrix.md` / dosir — "Sertifikasi CP3P", "Capacity Building pembiayaan kreatif"; tepat **satu** anchor program
- [x] Penutup memakai *positioning line* `company_profile.md` — "Sebagai unit manajemen pengetahuan PT Penjaminan Infrastruktur Indonesia (Persero) di bidang KPBU…" (varian baris 1, direstrukturisasi agar tidak menduplikasi `-02`)
- [x] CTA situs lembut sebagai **baris terakhir**, setelah `## Kesimpulan` — "Untuk membandingkan keduanya, materi pembelajaran dan program pelatihan KPBU dapat ditelusuri di institute.iigf.co.id." Tanpa "daftar sekarang"
- [x] Tautan hub sebagai **anchor inline alami di lead** — "dua dari tiga ujian pada jalur [sertifikasi KPBU](https://institute.iigf.co.id/) berstandar internasional"

### E. Anti-cannibalization spot check

- **Artikel sekeyword terdekat**: `sertifikasi-kpbu-alur-tiga-level-cp3p` (2026-08, `alur-menempuh-cp3p-tiga-level`, *how-to*) — pasangan paling berisiko di seluruh batch, sesuai peringatan brief.
- **Jaccard token yang dilaporkan strategis**: 0,00 — **saya tidak memakainya**; angka nol di mana-mana memang tidak menangkap tumpang tindih semantik. Saya bandingkan subtopik-demi-subtopik terhadap catatan Agustus di `articles_history/`.
- **Pengukuran manual**: dari 12 subtopik artikel ini, **4 menyentuh wilayah Agustus** — peta bab per level, angka format ujian, bahasa sebagai atribut ujian, dan kemungkinan mengulang ujian. Keempatnya masuk **sebagai bahan**, bukan sebagai pelajaran: Agustus mengajarkan *struktur dan alurnya*, artikel ini memakai angka yang sama untuk menurunkan *cara belajar* (aritmetika waktu per soal → dua pola belajar berlawanan; ketiadaan contoh soal resmi → rencana belajar enam langkah; bahasa → latihan kecepatan baca). **Estimasi tumpang tindih semantik ~0,30** — di bawah ambang 0,4.
- **Pagar mengikat brief, diverifikasi satu per satu**: (a) tidak ada H2 yang menjelaskan struktur tiga level ✓ — level hanya muncul sebagai kolom tabel + satu baris peta belajar yang **sudah saya padatkan lagi** untuk memperbesar jarak; (b) prasyarat/urutan **tidak diklaim sama sekali** ✓; (c) alur administratif tidak ada, kecuali satu kalimat pemisahan peran ATO vs portal ujian ✓; (d) biaya bukan materi — nol angka rupiah, hanya risiko ujian ulang ✓; (e) tanpa isi/tautan bank soal ✓.
- **Bukti pendukung**: catatan "Notes for future strategist runs" Agustus `-03` sendiri menyisakan wilayah ini — *"coaching untuk persiapan ujian, strategi belajar PPP Guide, sumber belajar mandiri vs pelatihan formal"*. Artikel ini menempati ruang yang memang dicadangkan.
- **Kemiripan tekstual terhadap 3 artikel September sekeyword** (`-01` peran/level, `-02` biaya, `-04` masa berlaku): H2 nol tumpang tindih. Dua kemiripan nyata ditemukan dan **dua-duanya sudah diperbaiki** — arsitektur penutup vs `-02`, dan baris CTA vs `-01`. Satu sisa dicatat, tidak diubah: fakta "materi gratis" beririsan dengan FAQ `-02`, runtun identik terpanjang 7 kata (ambang 20).
- **Verdict**: **distinct angle confirmed.**

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Skrip dijalankan pada final; `sertifikasi-kpbu-03.id.quality-input.json` tertulis
- [x] Skor AI-detector <0,30 — **0,04** (*verdict: pass*), jauh di bawah ambang revisi
- [x] *Paragraph burstiness* CV ≥0,30 — **0,533** (*sentence burstiness* 0,867; pengukuran independen saya atas bobot kata paragraf: 0,606)
- [~] Plagiarisme: **3 dari 8** kandidat dicek ke web (kuota); **nihil kecocokan verbatim ≥20 kata** pada halaman non-IIGF-Institute → `plagiarism_score` **0,02**
  - `"Istilah dalam PPP Guide tidak selalu berpadanan satu lawan satu dengan istilah regulasi KPBU Indonesia…"` → nihil kecocokan; hasil hanya materi umum KPBU/PPP (DJKN Kemenkeu, `kpbu.kemenkeu.go.id`, JIPM). Kalimat paling khas di artikel ini terbukti orisinal.
  - `"50 soal pilihan ganda sederhana dalam 40 menit" + "ambang kelulusan 50 persen" + CP3P` → nihil; hasil seluruhnya dokumen penilaian pendidikan Indonesia yang tidak berkaitan. Tidak ada blog penyelenggara yang memakai rumusan ini.
  - `"dikembangkan enam bank pembangunan multilateral" + AfDB ADB EBRD IDB IsDB WBG PPIAF` → nihil dalam Bahasa Indonesia; hasil hanya laporan MDB berbahasa Inggris. Fakta berasal dari APMG (sumber yang dikutip), jadi kecocokan di sana pun akan diabaikan.
  - **Tidak dicek (kuota habis)**: [2] *positioning line* (boilerplate klien — kecocokan pada `institute.iigf.co.id` dan artikel sekeyword memang diharapkan dan diabaikan; kemiripan internal terhadap `-02` sudah saya tangani langsung dengan restrukturisasi), [5] *aside* ATO vs portal ujian, [6] lead, [7] *definition snippet*, [8] kalimat temuan bank soal.
- **Mode**: skrip berjalan normal (bukan *degraded*); **leg pencarian web partial** karena batas anggaran tiga kueri yang ditetapkan untuk sesi ini, dicatat terbuka di atas.

## The shipping question

Jika artikel ini tayang besok di institute.iigf.co.id, praktisi KPBU senior akan menemukan sesuatu yang benar-benar tidak ada di SERP berbahasa Indonesia: tabel yang menyandingkan bentuk soal, jumlah, durasi, dan ambang lulus ketiga level dengan istilah resmi APMG, lalu menurunkan aritmetika waktunya menjadi dua pola belajar yang berlawanan. Calon peserta yang skeptis — yang datang mencari "cp3p foundation exam questions pdf" — mendapat jawaban jujur bahwa yang dicarinya tidak tercantum di laman resmi APMG, plus dua sumber gratis yang memang ada dan satu peringatan bahasa yang tidak akan diberikan penjual kursi kelas. Tidak ada janji kelulusan, tidak ada angka tanpa tahun, tidak ada satu pun rumusan yang mengaburkan bahwa APMG-lah pemilik kredensialnya. **WEBARQ Promote bisa berdiri di belakang artikel ini.**
