---
brief_id: "sertifikasi-kpbu-04"
editor_run_date: "2026-08-12"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.06
---

# Editor QC Report — Kapan Sertifikasi KPBU Belum Jadi Prioritas Anda

## Recommendation

**approve**

Draf ini masuk dengan fondasi yang sudah kuat: nol em-dash, nol pembuka AI, nada dua arah yang terjaga (tidak merendahkan penyelenggara lain, tidak menakut-nakuti, tidak menjanjikan hasil karier), dan seluruh angka sudah bertahun. Perbaikan terbesar yang saya lakukan bukan soal gaya melainkan soal **duplikasi internal klaster** yang lolos dari penulis: jawaban FAQ "Apakah sertifikasi KPBU wajib?" nyaris identik **34 kata beruntun** dengan FAQ `sertifikasi-kpbu-01`, dan kalimat positioning penutup ("Melalui tiga pilar edukasi, riset, dan advokasi kebijakan…") **identik** dengan penutup `-01`. Dua artikel satu klaster yang tayang bulan yang sama dengan paragraf penutup yang sama adalah *duplicate content* yang merugikan keduanya. Keduanya sudah saya tulis ulang di tempat. Saya juga menutup satu celah akurasi yang diminta orkestrator: draf sempat condong ke "sebagian besar pembaca kemungkinan belum terkena kewajiban apa pun" — generalisasi ke arah "tidak ada yang wajib" — dan sekarang cakupan Pasal 13 ayat (7) dinyatakan **dua arah** secara eksplisit. Deviasi anchor **E-Learning Center** saya perlakukan sebagai keputusan yang sudah disetujui dan tidak memengaruhi verdict; secara editorial deviasi itu memang benar, karena menutup argumen "mungkin belum saatnya" dengan ajakan bersertifikasi akan meruntuhkan premisnya sendiri. Panjang akhir 1.475 kata, di dalam band 1.200–1.600.

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dash, 0 pembuka AI, 0 "Selain itu" beruntun. Paragraf 1 kalimat ada tiga ("Ini sering disalahpahami…", "Kelimanya berpola sama…", "Daftar itu bukan alasan…"). Register instruktur, bukan brosur. |
| Factual & KPBU/PPP & sertifikasi accuracy | 9 | 5 klaim diuji, 5 lulus. Semua angka bertahun; biaya berlabel indikatif + arahan halaman resmi. Sisa risiko hanya pada *confidence medium* biaya CP3P yang memang sudah ter-hedge. |
| On-page SEO compliance | 9 | Semua item lulus. Meta description dinaikkan 146 → 155 karakter (sweet spot §2a) sekaligus disamakan dengan isi (tabel, bukan "checklist"). |
| GEO extractability (§2a) | 9 | Kelima H2 badan artikel punya jawaban langsung 46/53/46/48/43 kata — dihitung ulang, semua di dalam 40–60. `date_modified` ditambahkan. |
| IIGF Institute framing discipline | 9 | Tepat 3 self-mention. APMG dinyatakan pemilik & penerbit kredensial, dan sekarang eksplisit dibedakan dari lembaga penyelenggara pelatihan. Nol nama individu, nol superlatif, nol klaim Kantor Bersama. |
| Internal linking | 9 | Tepat 3, inline, tanpa "BACA JUGA". Hub di lead, cousin 1 di titik argumen terkuat, cousin 2 di H2 penutup badan. Nol tautan ke `ptpii.co.id`/`gagas.co.id`. |
| FAQ quality | 9 | 6 Q&A, seluruhnya 45–55 kata. Satu pertanyaan ditukar untuk menghapus tumpang tindih dengan `-01` sekaligus memperkuat sudut artikel. |
| Originality (plagiarism + AI-detector) | 8 | AI 0.04 (lulus telak). Duplikasi internal klaster ditemukan & dihapus. Skor tidak 9 karena **leg pencarian web tidak tersedia** (kuota 200/200) — verifikasi eksternal terbatas pada korpus lokal. |

## What I fixed (changelog)

1. **Duplikasi internal ~34 kata dengan `sertifikasi-kpbu-01`** — jawaban FAQ "Apakah sertifikasi KPBU wajib?" ditulis ulang total ("Tergantung peran Anda…"). Sebelumnya berbagi kalimat pembuka dan seluruh klausa cakupan pasal secara verbatim dengan FAQ "Apakah ASN wajib memiliki sertifikasi KPBU?" di `-01`.
2. **Kalimat positioning penutup identik dengan `-01`** — "Melalui tiga pilar edukasi, riset, dan advokasi kebijakan… memperkuat kapasitas SDM dan basis pengetahuan KPBU di Indonesia" (25 kata, sama persis) diganti dengan positioning line lain dari `company_profile.md`: "menjembatani praktik penjaminan infrastruktur dengan dunia akademik dan pembuat kebijakan". `-02` dan `-03` memakai varian ATO, jadi kini keempat penutup berbeda.
3. **Akurasi dua arah cakupan Pasal 13 ayat (7)** — "Konsekuensinya jelas: sebagian besar pembaca kemungkinan belum terkena kewajiban apa pun" (condong ke "tidak ada yang wajib") diganti "Konsekuensinya berjalan dua arah", lalu dijabarkan: tenaga ahli di konsultan pendamping **terkena langsung**, ASN di dalam simpul KPBU **tidak**. Sesuai koreksi orkestrator.
4. **Frasa aposisi yang menyempitkan definisi regulasi** — "konsultan perorangan, yakni pihak yang membantu simpul KPBU" → "…, ketika keduanya membantu simpul KPBU". Versi lama seolah mendefinisikan konsultan sebagai satu-satunya pihak pembantu simpul KPBU, padahal ayat sebelumnya menyebut empat kategori.
5. **Pemisahan pemilik vs penyelenggara dipertegas** — "sesuai ketentuan APMG International selaku pemilik dan pemberi kredensial" → "yang menerbitkan kredensialnya adalah APMG International selaku pemilik program, **bukan lembaga yang menyelenggarakan pelatihannya**". Memenuhi pemeriksaan wajib #1 secara eksplisit, tanpa menambah self-mention.
6. **FAQ ditukar** — "Apa bedanya sertifikat pelatihan dan sertifikasi kompetensi?" (dimiliki `-01` sebagai H2 penuh **dan** FAQ) diganti "Apakah sertifikasi menjamin proyek KPBU saya berhasil?" — unik di klaster, sejalan dengan sudut jujur artikel, dan ada di daftar PAA brief.
7. **Ekspansi akronim CP3P dipindah ke penyebutan pertama** — masuk ke definition snippet (58 kata, masih di dalam 40–60), dihapus dari paragraf ketiga tempat sebelumnya berada.
8. **Sitasi dirapikan** — "(diakses 2026)" → "(APMG International, 2026)" sesuai pola atribusi `style_guide.md` §4.
9. **Label biaya dipertegas** — "Berdasarkan publikasi 2026, kisarannya…" → "…, **indikatif per publikasi 2026**", frasa persis yang diwajibkan dosir, ditempatkan bersebelahan dengan angkanya.
10. **Inferensi Bank Dunia diperketat** — "Yang paling terasa dampaknya adalah kesiapan institusi" → "Yang **diukur di situ** adalah kekuatan kerangka kelembagaan". Versi lama menyatakan kesimpulan turunan seolah temuan langsung.
11. **Gema kalimat retoris dengan `-01` dihapus** — "Bacalah cakupan itu perlahan, karena di sinilah…" beresonansi dengan "Cakupannya perlu dibaca pelan, karena di sinilah…" milik `-01`; paragraf ditulis ulang. Definisi simpul KPBU juga direstrukturisasi agar tidak menggemakan `-01`.
12. **Jawaban langsung H2 #4 dinaikkan 40 → 48 kata** — sebelumnya persis di ambang bawah GEO tanpa margin.
13. **Satu paragraf pendek ditambahkan** sesudah daftar "yang tidak dijamin": "Daftar itu bukan alasan untuk tidak bersertifikasi. Ia hanya menandai batas klaim yang wajar." Menjaga keseimbangan nada (pemeriksaan #5) sekaligus menaikkan burstiness CV 0,340 → 0,369.
14. **Paragraf pembeda sertifikat/sertifikasi ditulis ulang** dengan kosakata berbeda dari `-01` dan diberi konsekuensi anggaran — sesuai sudut artikel.
15. **Meta description** 146 → 155 karakter; "Checklist kondisi" → "Tabel kondisi kapan sebaiknya ditunda" (badan artikel menyajikan tabel, bukan checklist bernomor).
16. **Frontmatter** — `date_modified: "2026-08-12"` ditambahkan (freshness §2a, sesuai konvensi final bulan ini); `word_count` disinkronkan 1.394 → **1.475**.

## What I flagged (open issues)

- ⚠️ **Konflik tanggal pengundangan Permen PPN 7/2023 di dalam satu batch** — `-01` dan `-02` menulis **29 September 2023**; dosir `-04` menulis **29 Oktober 2023**. Artikel ini **tidak menyebut tanggal itu sama sekali**, jadi `-04` aman. *Rekomendasi*: rekonsiliasi satu tanggal untuk seluruh batch sebelum `-01`/`-02` tayang — ini di luar kewenangan saya sebagai editor `-04`.
- ⚠️ **Biaya CP3P *confidence medium*** — peneliti mem-fetch ulang kedua halaman sumber pada 2026-08-12 dan **tidak menemukan angka biaya**. Label "indikatif per publikasi 2026" + arahan ke halaman resmi sudah terpasang sesuai aturan. *Rekomendasi*: verifikasi manual ke halaman resmi sebelum publikasi; bila angka berubah, cukup ganti nominalnya, kalimatnya sudah tahan-waktu.
- ⚠️ **Leg pencarian web plagiarisme degraded** — kuota WebSearch sesi ini habis (200/200). Skor plagiarisme 0,06 bersandar pada pemeriksaan *shingle* 12-kata terhadap korpus lokal (12 berkas: seluruh draf & final bulan ini, dosir, brief, cache riset, knowledge base), bukan pada penelusuran web. *Rekomendasi*: bila ada keraguan, jalankan ulang 8 kueri di `sertifikasi-kpbu-04.id.quality-input.json` saat kuota pulih.
- ⚠️ **Deviasi dari kerangka brief (bukan kesalahan)** — brief mewajibkan H2 "Checklist kesiapan sebelum menganggarkan sertifikasi" berupa daftar bernomor. Penulis menggantinya dengan H2 "Siapa yang sebenarnya diwajibkan…" dan memindahkan fungsi checklist ke tabel keputusan 5 baris. Setelah koreksi orkestrator soal Pasal 13 ayat (7), substitusi ini justru lebih bernilai. Tidak saya kembalikan (perubahan struktural = wilayah `revise`), tapi dicatat agar strategist tahu.
- ℹ️ **Tumpang tindih konsep tipis dengan `-02`** — kesalahan #4 ("kredensial internasional tidak menggantikan regulasi nasional") adalah H2 penuh di `-02`, di sini hanya satu butir daftar. Perbedaan kedalaman cukup jauh; tidak perlu tindakan.
- ℹ️ **FAQ "Berapa biaya sertifikasi CP3P?" muncul di keempat artikel klaster.** Redaksi jawaban `-04` sudah berbeda dari ketiganya (diverifikasi: nol tumpang tindih 12-kata). Dipertahankan karena artikel ini adalah artikel keputusan anggaran — pertanyaan biaya *load-bearing* di sini.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)

- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep: 0
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: 0 kemunculan di awal paragraf
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: 0
- [x] "Dengan demikian" not overused — grep: 0
- [x] Em-dash count ≤2 — **aktual: 0**
- [x] Varied paragraph lengths — 4 / 8 / 12 / 14 / 19 / 36–56 / 75 / 82 kata; CV paragraf prosa 0,39
- [x] Not every H2 → 3-bullet list — H2 #1 prosa murni; #2 prosa murni; #3 prosa + tabel; #4 prosa + daftar bernomor; #5 prosa + daftar butir
- [x] No generic claims without numbers — 14+ angka bertahun (USD 488 juta, 1990–2022, 5%, sepertiga, Rp 19/21 juta, 2026, 5 kajian, 12 bulan, 36/23 menit, Pasal 13 ayat 7, BN 777, Perpres 38/2015)
- [x] No stacked hype adjectives — grep "terbaik/terdepan/terlengkap/canggih/komprehensif/revolusioner": 0
- [x] No service-dump paragraph — satu anchor (E-Learning Center), muncul sekali, di penutup
- [x] Register brosur & siaran pers — grep "segera daftar / jangan lewatkan / dalam rangka / sebagai wujud / percayakan / hubungi kami": 0
- [x] **Nada dua arah (pemeriksaan #5)** — daftar kesalahan dibuka dengan "Kesalahan tersering **bukan memilih penyelenggara yang keliru**, melainkan salah membaca kebutuhan sendiri"; nol sindiran ke penyelenggara mana pun; nol janji hasil karier (justru dibantah eksplisit); nol nada menakut-nakuti — dan sekarang ada penyeimbang "Daftar itu bukan alasan untuk tidak bersertifikasi"

### B. Factual & KPBU/PPP & sertifikasi spot-check

| Claim | Source check | Verdict |
|---|---|---|
| Pasal 13 ayat (7) Permen PPN/Kepala Bappenas No. 7/2023 (BN RI 2023 No. 777) mewajibkan sertifikasi ahli KPBU bagi tenaga ahli konsultan Badan Usaha/perorangan yang membantu simpul KPBU, "diakui secara nasional dan/atau internasional" | Koreksi orkestrator (salinan resmi bernaskah lengkap diperoleh peneliti `-01`, dikonfirmasi verbatim) + kutipan sejalan di draf `-01` dan `-02` | **pass** — dikutip dengan cakupan sempit dan dua arah, tanpa generalisasi |
| Kredensial CP3P penuh baru setelah lulus ketiga ujian; lulus Foundation hanya "CP3P Foundation"; APMG International pemilik & penerbit | dossier ✓ (ppp-certification.com/faqs, *confidence high*) + `company_profile.md` Rule 4 + `product_matrix.md` universal rule | **pass** — dan dipertegas "bukan lembaga yang menyelenggarakan pelatihannya" |
| Biaya CP3P Rp 19.000.000 (Foundation) / Rp 21.000.000 (Preparation, Execution), **indikatif per publikasi 2026** + arahan halaman resmi | dossier ✓ (*confidence medium*, flag wajib label) + `company_profile.md` tabel level | **pass** — label wajib terpasang persis; angka tidak ditulis sebagai kepastian |
| Bank Dunia (2024): negara yang memperkuat kerangka kelembagaan PPP 1990–2022 membukukan kenaikan investasi rata-rata **USD 488 juta/tahun**; **5%** ekonomi mewajibkan *market sounding*; **sepertiga** menstandardisasi dokumen transaksi | dossier ✓ (*confidence high*, dibaca langsung dari blogs.worldbank.org, bukan cuplikan) + tautan keluar terpasang | **pass** — dibingkai "data lintas negara", sesuai catatan dosir bahwa ini bukan data Indonesia |
| Permen PPN 7/2023 menyederhanakan kajian tahap penyiapan menjadi **5** (strategis, ekonomi, komersial, finansial, manajemen); Perpres 38/2015 **masih berstatus berlaku per 2026** | dossier ✓ (*confidence high*; status Perpres dari portal resmi peraturan.go.id, 5 kajian lintas ≥2 sumber) | **pass** |
| Kursus daring gratis: "Konsep Dasar Skema Kerjasama Pemerintah dan Badan Usaha dan Implementasinya di Indonesia" (36 menit) + kursus manajemen risiko proyek KPBU (23 menit), level pemula per publikasi 2026 | dossier ✓ (*confidence high*, fetch langsung berhasil 2026-08-12, judul persis) | **pass** — **"Value for Money Course" tidak muncul** (grep: 0) |

**Larangan bulan ini — hasil sweep:**

| Larangan | Hasil |
|---|---|
| Nama kursus "Value for Money Course" | ✅ tidak ada |
| Nomor bab persis level Execution | ✅ tidak ada — bab CP3P tidak dibahas sama sekali (milik `-03`) |
| Daftar lembaga pengembang CP3P (MIF/AfDB) | ✅ tidak dirinci sama sekali |
| Tanggal batch / jadwal kelas | ✅ tidak ada |
| Biaya tanpa "indikatif" + tahun | ✅ label terpasang + arahan verifikasi |
| Klaim anggota Kantor Bersama KPBU | ✅ grep: 0 |
| Nama individu | ✅ grep: 0 |
| "Sertifikasi KPBU" diperlakukan sebagai nama kredensial resmi | ✅ definition snippet menyebutnya "istilah umum untuk beberapa jalur pengakuan" |

### C. On-page SEO checklist (seo_playbook.md §3)

- [x] Meta title ≤60 (keyword first 30) — aktual: **49 char**, keyword di posisi **0–16**
- [x] Meta description 140–160 — aktual: **155** (naik dari 146; sweet spot §2a 150–160)
- [x] Slug ≤60, kebab-case, keyword — aktual: `sertifikasi-kpbu-kapan-belum-jadi-prioritas` (**43 char**)
- [x] H1 contains keyword — "Kapan **Sertifikasi KPBU** Belum Jadi Prioritas Anda"
- [x] H2 count 4–7 — aktual: **5 H2 badan** + FAQ + Kesimpulan
- [x] ≥1 question-format H2 (**3**: "Apa yang sebenarnya dibuktikan…", "Siapa yang sebenarnya diwajibkan…", "Kapan… belum jadi prioritas?"); ≥1 honest/counter-conventional H2 ("Yang tidak dijamin oleh sertifikasi apa pun")
- [x] Keyword in first 100 words — kata ke-62, sekaligus anchor hub
- [x] Definition snippet near top — blockquote "Ringkasnya", **58 kata** (40–60), di ~130 kata pertama
- [x] ≥8 LSI terms — **counted: 17** (sertifikasi ahli KPBU, pelatihan, CP3P, APMG International, sertifikasi kompetensi, tenaga ahli, penyiapan proyek, PJPK, simpul KPBU, *value for money*, Kerja Sama Pemerintah dengan Badan Usaha, *public-private partnership*, Perpres 38/2015, Permen PPN, *financial close*, *market sounding*, kajian)
- [x] 3 internal links (1 hub + 2 cousins) — `institute.iigf.co.id/` (lead, anchor "sertifikasi KPBU") · `/capacity-building` (anchor "capacity building pembiayaan kreatif") · `/e-library/lainnya/77/…` (anchor "studi kasus proyek infrastruktur di Indonesia"). **Tepat 3.** Nol `ptpii.co.id`, nol `gagas.co.id`, nol "BACA JUGA"
- [x] ≥1 external authoritative citation — aktual: **2** (APMG/ppp-certification.com; World Bank Blogs)
- [x] FAQ 5–7 Q&As — aktual: **6**, masing-masing 45–55 kata
- [x] ≥1 list + ≥1 table — daftar bernomor (5 kesalahan) + daftar butir (4 hal yang tidak dijamin) + tabel keputusan 5 baris
- [x] Word count inside band 1.200–1.600 — aktual: **1.475** (`tools/count_words.py`), frontmatter tersinkron

### C2. GEO extractability (seo_playbook.md §2a)

- [x] Jawaban langsung 40–60 kata sesudah **setiap** H2 badan — dihitung ulang satu per satu:

| H2 | Kata |
|---|---|
| Apa yang sebenarnya dibuktikan sebuah sertifikasi KPBU? | **46** |
| Siapa yang sebenarnya diwajibkan memiliki sertifikasi ahli KPBU? | **53** |
| Kapan sertifikasi KPBU belum jadi prioritas? | **46** |
| Lima kesalahan yang berulang saat memilih program | **48** (dari 40) |
| Yang tidak dijamin oleh sertifikasi apa pun | **43** |

- [x] Tiap paragraf badan memuat satu poin yang bisa dikutip berdiri sendiri dan diverifikasi — tiap paragraf membawa satu klaim + satu fakta bersumber (pasal, angka Bank Dunia, jumlah kajian, biaya berlabel)
- [x] FAQ parseable untuk FAQPage schema — `### <pertanyaan>` + satu paragraf jawaban, konsisten, tanpa markup bersarang
- [x] `dateModified` / freshness ada di meta block — **`date_modified: "2026-08-12"` ditambahkan editor**

### D. IIGF Institute framing discipline

- [x] IIGF Institute dibingkai sebagai unit manajemen pengetahuan PT PII — "Sebagai unit manajemen pengetahuan PT Penjaminan Infrastruktur Indonesia (Persero), IIGF Institute menjembatani praktik penjaminan infrastruktur dengan dunia akademik dan pembuat kebijakan". Bukan universitas, bukan entitas hukum berdiri sendiri, bukan pemilik CP3P
- [x] **APMG pemilik & pemberi kredensial CP3P** — dinyatakan dua kali dan sekarang dipertegas dengan pembeda "bukan lembaga yang menyelenggarakan pelatihannya". Nol implikasi sebaliknya
- [x] ≤3 IIGF Institute self-mentions — **aktual: tepat 3** → (1) FAQ "Apa yang bisa dipelajari lebih dulu tanpa biaya besar?"; (2) paragraf `## Kesimpulan` (memuat anchor **E-Learning Center**); (3) baris CTA `institute.iigf.co.id`. Anchor hub di lead memakai anchor text "sertifikasi KPBU", bukan nama merek, sehingga tidak menambah hitungan
- [x] Anchor **E-Learning Center** muncul **tepat sekali**, di penutup, sesuai deviasi yang disetujui
- [x] No unverifiable superlatives — grep "terbaik/nomor satu/satu-satunya/paling unggul": 0. Semua kemunculan "dijamin" adalah negasi
- [x] Nol nama individu; nol klaim anggota Kantor Bersama KPBU
- [x] Nama program cocok dengan `product_matrix.md` / dosir — "E-Learning Center", "capacity building"
- [x] Closing memakai positioning line dari `company_profile.md` — baris "menjembatani praktik penjaminan infrastruktur…" (diganti editor agar tidak identik dengan `-01`)
- [x] Soft website CTA sebagai **baris terakhir**, sesudah `## Kesimpulan` — "Kalau langkah Anda tahun ini adalah membaca dulu, materi pengantar KPBU dan kajian terkaitnya terbuka untuk umum di institute.iigf.co.id." Konsultatif, bukan "daftar sekarang", dan redaksinya berbeda dari ketiga saudaranya
- [x] Hub link sebagai anchor inline natural di lead, deskriptif — bukan callout
- [x] Disambiguasi IIGF — konteks "PT Penjaminan Infrastruktur Indonesia (Persero)" dan "KPBU" menempel pada penyebutan merek

### E. Anti-cannibalization spot check

- **Closest prior article for this keyword**: **none yet** — `articles_history/index.json` masih `"articles": []` (belum ada artikel yang di-commit untuk keyword ini).
- **Saudara sebatch** (belum ter-commit, jadi bukan riwayat resmi tetapi diperiksa): `-01` peta tiga kategori · `-02` nasional vs internasional · `-03` alur tiga level CP3P.
- **Subtopic overlap (Jaccard estimate)**: `-01` ≈ **0,22** · `-02` ≈ **0,20** · `-03` ≈ **0,12**. Semua jauh di bawah ambang 0,4.
- **Batas milik `-03` dihormati** — cakupan level CP3P tidak dibedah: nol nomor bab, nol tabel level, nol urutan ujian. CP3P hanya disinggung sebagai contoh jalur berjenjang.
- **Verdict**: **distinct angle confirmed.** Namun pemeriksaan *shingle* menemukan **dua duplikasi tekstual nyata** yang tidak terlihat dari perbandingan H2 saja — jawaban FAQ 34 kata dan kalimat positioning 25 kata, keduanya dengan `-01`. **Sudah diperbaiki di tempat.** Satu FAQ juga ditukar karena pertanyaannya identik dengan FAQ `-01` yang bahkan punya H2 sendiri di sana.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)

- [x] Script ran; `sertifikasi-kpbu-04.id.quality-input.json` ditulis (dijalankan **2×**: baseline + setelah penyuntingan)
- [x] AI-detector score **< 0.30** — **aktual: 0,04** (`verdict: pass`; ambang revise 0,30, reject 0,50). Tidak berubah antara baseline dan final
- [x] Paragraph burstiness CV ≥ 0.30 — **aktual: 0,369** (naik dari 0,340 setelah penambahan paragraf pendek). Satu flag *low severity* `paragraph-low-variance` karena target internal skrip 0,45; ini konsekuensi struktural dari aturan GEO §2a yang memaksa setiap paragraf pembuka H2 ke rentang 40–60 kata. Burstiness kalimat **0,762** dan *top-30 vocab share* **0,297** keduanya sehat
- [x] Plagiarism — **plagiarism score: 0,06**

**Metode (degraded — dicatat terus terang):** kuota WebSearch sesi ini **habis (200/200)**, dikonfirmasi dengan satu percobaan panggilan. Delapan kandidat *distinctive passage* tetap diekstrak skrip lengkap dengan kuerinya dan tersimpan di file JSON untuk dijalankan ulang nanti. Sebagai pengganti, saya menjalankan **pemeriksaan tumpang tindih *shingle* 12 kata** terhadap seluruh korpus lokal (12 berkas: semua draf & final 2026-08, dosir, brief, cache riset, `knowledge_base/`). Hasil sesudah penyuntingan:

| Sumber | Rentetan terpanjang | Penilaian |
|---|---|---|
| `sertifikasi-kpbu-02.id.md` | **13 kata** — "simpul KPBU memiliki sertifikasi ahli KPBU yang diakui secara nasional dan/atau internasional" | **Bukan pelanggaran.** Kutipan langsung teks Pasal 13 ayat (7); tidak terhindarkan dan wajib akurat. Di bawah ambang 20 kata |
| `company_profile.md` | **12 kata** — "IIGF Institute menjembatani praktik penjaminan infrastruktur dengan dunia akademik dan pembuat kebijakan" | **Bukan pelanggaran.** Positioning line *pre-approved* dari knowledge base klien sendiri; dikecualikan aturan |
| `sertifikasi-kpbu-01.id.md` | **0** | Sebelum penyuntingan: **34 kata** (FAQ) dan **25 kata** (positioning). Keduanya sudah dihapus |
| `-03`, dosir, brief, cache riset | **0** | Bersih |

Penilaian manual atas kedelapan kandidat: seluruhnya berasal dari (a) angka yang bersumber dosir dan dirangkai ulang penulis, (b) sumber berbahasa Inggris (World Bank, APMG) yang dialihbahasakan sendiri, atau (c) teks regulasi yang memang dikutip. Nol indikasi angkat verbatim. Skor 0,06 — sedikit di atas nol semata-mata karena leg web tidak dapat dijalankan, bukan karena ada temuan.

---

## The shipping question

Kalau artikel ini tayang besok di institute.iigf.co.id dan dibaca praktisi KPBU senior serta calon peserta CP3P yang skeptis: **ya.** Praktisi senior akan menemukan cakupan Pasal 13 ayat (7) dikutip dengan benar dan sempit, dua arah, tidak digeneralisasi ke mana pun; ia juga akan melihat pembeda pemilik kredensial versus penyelenggara pelatihan dinyatakan tanpa ambiguitas. Calon peserta skeptis akan menemukan hal yang justru jarang ia dapatkan dari halaman penyedia pelatihan mana pun: tabel yang berani menempatkan dirinya di baris "belum", biaya yang disebut apa adanya lengkap dengan peringatan untuk mengecek ulang, dan satu daftar tegas tentang apa yang tidak dijamin sebuah kredensial — diseimbangkan dengan pengingat bahwa daftar itu bukan alasan untuk tidak bersertifikasi. Tidak ada satu pun kalimat yang merendahkan penyelenggara lain, dan promosi baru muncul di paragraf terakhir sesudah pembaca dibekali cara mengambil keputusannya sendiri. WEBARQ Promote bisa menaruh nama di bawah ini.
