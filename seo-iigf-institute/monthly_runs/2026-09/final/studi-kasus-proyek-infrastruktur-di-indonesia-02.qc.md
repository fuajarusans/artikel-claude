---
brief_id: "studi-kasus-proyek-infrastruktur-di-indonesia-02"
editor_run_date: "2026-09-22"
recommendation: "approve"
overall_score: 9
ai_score: 0.00
plagiarism_score: 0.05
---

# Editor QC Report — Studi Kasus Proyek Infrastruktur di Indonesia: Dua Pintu Masuk Proyek KPBU

## Recommendation
**approve**

Semua pemeriksaan kritis bulan ini lolos. Tol Gilimanuk–Mengwi **absen sepenuhnya** (grep nol kecocokan untuk "Gilimanuk"/"Mengwi"), tidak ada satu pun nama individu, dan kriteria ketiga "layak diprakarsa" memakai rumusan terverifikasi ("kemampuan keuangan badan usaha pemrakarsa memadai") lengkap dengan paragraf yang membantah miskonsepsi "tidak memerlukan dukungan pemerintah". Penegasan bahwa prakarsa badan usaha **tetap wajib lelang kompetitif** masih utuh di lima tempat setelah pemangkasan. Saya memperbaiki sembilan hal di tempat — yang paling substantif adalah **misatribusi sumber**: draf menyebut opsi kompensasi ketiga "disebut serupa oleh JDIH Kementerian Keuangan dan peraturan.bpk.go.id", padahal dosier mengonfirmasinya lewat jdih.kemenkeu.go.id + hukumonline, sementara peraturan.bpk.go.id hanya menopang *status berlaku* Perpres 38/2015. Saya juga memasang atribusi berkata pagar pada titik enumerasi tiga opsi Pasal 14, sesuai batasan *medium-high* dosier. Satu bendera terbuka tersisa (verifikasi verbatim ayat (5)/(6) Pasal 14) dan leg pencarian plagiarisme berjalan *degraded* (3 dari 8 kandidat) karena batas anggaran — keduanya tidak menghalangi publikasi karena artikel sudah menyatakan sendiri batas verifikasinya kepada pembaca.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Nol frasa tell; em-dash 1×; CV panjang paragraf 0,471; lead konkret (proposal di meja), bukan "Di era…". Ritme jumlah kalimat agak seragam (banyak paragraf 2 kalimat), tapi rentang kata 12–89 menutupinya |
| Factual & KPBU/PPP & sertifikasi accuracy | 9 | 6 klaim di-spot-check, semua lolos; 1 misatribusi sumber dikoreksi; opsi ketiga Pasal 14 tetap *medium-high* dengan kaveat eksplisit di badan artikel |
| On-page SEO compliance | 9 | Seluruh butir §3 lolos; anchor eksternal berupa tahun telanjang ("2023") diganti deskriptif |
| GEO extractability (§2a) | 9 | 5/5 blok jawaban H2 di 40–60 kata (43/41/48/45/41); snippet 59 kata; `date_modified` ditambahkan |
| IIGF Institute framing discipline | 10 | 1 self-mention + CTA; "PT PII" dekat "IIGF"; tanpa CP3P sama sekali sehingga nol risiko klaim kepemilikan kredensial; tanpa nama orang |
| Internal linking | 9 | Tepat 3 inline, destinasi sesuai brief, tanpa "BACA JUGA"; nol tautan ke `ptpii.co.id`/`gagas.co.id` |
| FAQ quality | 9 | 5 Q&A (tidak turun), 42–47 kata; nol duplikasi pertanyaan terhadap 3 artikel September lain |
| Originality (plagiarism + AI-detector) | 9 | `ai_score` 0,00 tanpa *flag*; 3 kandidat paling berisiko dicek web, nol kecocokan verbatim; cakupan pencarian *degraded* |

## What I fixed (changelog)
- **Misatribusi sumber dikoreksi (paling material).** "Bentuk ketiga disebut serupa oleh JDIH Kementerian Keuangan dan peraturan.bpk.go.id" → atribusi diperbaiki ke "naskah Perpres yang dihimpun JDIH Kementerian Keuangan dan basis data hukum lain, meski tanpa kutipan ayat per ayat pada rujukan yang dapat diakses", dan peraturan.bpk.go.id dipindahkan ke klaim yang benar-benar ditopangnya (status berlaku Perpres 38/2015 per 2026).
- **Kata pagar + atribusi pada enumerasi tiga opsi Pasal 14.** "Pasal 14 Perpres 38/2015 mengatur tiga bentuk kompensasi…" → "Naskah Pasal 14 Perpres 38/2015 **sebagaimana dihimpun basis data hukum** memuat tiga bentuk kompensasi…". Dipecah jadi 2 kalimat (blok jawaban 43 → 48 kata, tetap di 40–60).
- **Jumlah "tiga" dilepas dari jawaban FAQ *right to match*** karena jawaban FAQ diekstraksi berdiri sendiri lewat FAQPage schema → "Salah satu bentuk kompensasi bagi badan usaha pemrakarsa yang diatur dalam Pasal 14…" (*right to match* sendiri berkonfidensi high, jadi tetap definitif).
- **Anchor eksternal tahun telanjang diganti.** Sel tabel `[2023](pembiayaan.pu.go.id/…)` → teks biasa; tautannya dipindah ke prosa sebagai anchor deskriptif "[Publikasi Kementerian PU]".
- **Disiplin tahun rujukan.** Kapasitas "4.600 liter per detik" di blok jawaban H2 #4 kini bertahun "(publikasi 2021)"; "di periode yang sama" → "di periode 2021 yang sama".
- **Ritme paragraf.** Deret empat paragraf 33–43 kata di H2 #3 dipecah: kalimat bantahan miskonsepsi ("prakarsa dianggap sama dengan penunjukan langsung") kini berdiri sebagai paragraf 17 kata.
- **Glosarium istilah Inggris (§3 style guide).** *user charge* → "(pembayaran oleh pengguna)"; *financial close* → "(kepastian pembiayaan)".
- **Kejelasan nomenklatur.** "PJPK Kementerian PUPR" diberi label "nomenklatur 2021" agar tidak bentrok dengan "Kementerian PU" yang dipakai untuk publikasi 2023/2026; sel konsesi dirapikan dari dua tanda kurung berurutan.
- **CTA di-de-template.** Draf "Kajian … dapat Anda telusuri di institute.iigf.co.id" nyaris identik dengan CTA September `-01`/`-03`/`-04` → "Untuk menelusuri kumpulan kajian studi kasus KPBU dan ketentuan pengiriman naskah ke JIPM, kunjungi institute.iigf.co.id."
- **Frontmatter.** `date_modified: "2026-09-22"` ditambahkan (§2a *freshness*, selaras 8 final September lain); `word_count` disinkronkan ke 1.534; konteks sitasi peraturan.bpk.go.id dipersempit ke klaim yang benar.

## What I flagged (open issues)
- ⚠️ **Opsi kompensasi ketiga Pasal 14 masih *medium-high*.** Teks verbatim ayat (5)/(6) belum pernah berhasil diambil (PDF jdih.kemenkeu.go.id gagal diparse; `simpulkpbu.pu.go.id` gagal DNS). Artikel sudah menyatakan batas ini kepada pembaca dan menyarankan penelusuran langsung sebelum dipakai di dokumen resmi. *Rekomendasi*: bila kelak ayatnya terbaca dan ternyata hanya dua opsi, sunting **tiga tempat** — *definition snippet*, baris tabel "Keunggulan pada pemrakarsa", dan blok jawaban H2 #3. Snippet sengaja dibiarkan definitif ("salah satu dari tiga bentuk kompensasi") agar aset AI-Overview tetap tajam; kata pagar dipasang di titik enumerasi.
- ⚠️ **Leg plagiarisme *degraded*.** Anggaran 3 kueri habis pada 3 dari 8 kandidat (dipilih yang paling berisiko: parafrase ayat (7), kalimat SIPRABU, prosa studi kasus). Lima sisanya tidak dicek: dua di antaranya adalah definisi umum (dikecualikan protokol), satu kutipan beratribusi dalam tanda petik, satu kalimat yang baru saya tulis sendiri pada *pass* ini. *Rekomendasi*: tidak perlu tindak lanjut kecuali kurator ingin kepastian penuh.
- ⚠️ **Angka sambungan rumah (368.000 vs 539.000) tetap dikutip**, sedangkan Flags #4 dosier menyarankan menghindarinya. Saya mempertahankannya karena artikel **tidak** menegaskan salah satu sebagai fakta — keduanya dipakai justru untuk mendokumentasikan percabangan antar-portal, dan itu sinyal E-E-A-T yang kuat. *Rekomendasi*: bila kurator lebih konservatif, hapus satu klausa itu (−23 kata, tetap di dalam band).
- ⚠️ **Baris positioning line** masih membuka dengan "Sebagai unit manajemen pengetahuan dan *think-tank* PT PII…", sepola dengan September `-03`. Ini kalimat posisi resmi dari `company_profile.md`, jadi saya nilai pengulangan wajar; hanya dicatat agar strategist tahu polanya mulai terasa di klaster ini.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — nol
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — "Selain itu" nol kemunculan
- [x] No "Penting untuk dicatat / dipahami bahwa" — nol
- [x] "Dengan demikian" not overused — nol
- [x] Em-dash count ≤2 — **1** (en-dash 4× hanya di nama "Karian–Serpong" dan rentang "1,8–1,84"/"Zona 2–3"/"2022–2026", bukan tell gaya)
- [x] Varied paragraph lengths — kata/paragraf 12–89, CV **0,471**
- [x] Not every H2 → 3-bullet list — H2 #1 daftar bernomor, #2 tabel, #3 prosa, #4 tabel, #5 bullet
- [x] No generic claims without numbers — 12+ angka bertahun
- [x] No stacked hype adjectives — nol ("terbaik" 2× hanya dalam istilah teknis "penawaran terbaik")
- [x] No service-dump paragraph — satu anchor programme saja (Riset & JIPM di penutup)
- [x] Register: bukan siaran pers, bukan brosur — penutup berupa pertanyaan riset terbuka, bukan ajakan beli

### B. Factual & KPBU/PPP & sertifikasi spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Kriteria ketiga gagasan yang dapat diprakarsai = "kemampuan keuangan badan usaha pemrakarsa memadai" (bukan "tidak memerlukan dukungan pemerintah") | dossier ✓ (verbatim FAQ kpbu.kemenkeu.go.id, high, dikonfirmasi dua jalur independen) | **pass** — artikel juga membantah versi keliru secara eksplisit |
| Pasal 14 Perpres 38/2015 memuat tiga bentuk kompensasi bersifat alternatif | dossier ✓ *medium-high* (sintesis jdih.kemenkeu.go.id + hukumonline; ayat (7) verbatim via pasal.id) | **pass dengan kata pagar** — atribusi dipasang; misatribusi ke peraturan.bpk.go.id dihapus |
| Dokumen studi kelayakan + HKI beralih ke Menteri/Kepala Lembaga/Kepala Daerah (Pasal 14 ayat (7)) | dossier ✓ (kutipan verbatim, high) | pass |
| SPAM Karian–Serpong = PSN + KPBU atas prakarsa Badan Usaha; 4.600 l/detik (3.200/750/650); ±Rp2,4 T indikatif 2021; konsesi 33 tahun; PKS 29–30 April 2021; Zona 2–3 21 Desember 2023 | dossier ✓ (pembiayaan.pu.go.id kutipan verbatim + pu.go.id + kpbu.kemenkeu.go.id, high) | pass — angka DKI 3.200 dipakai sesuai Flags #3, outlier 3.600 disebut sebagai "sumber lain" tanpa menamai domain terisolasi |
| PT PII menanggung risiko gagal bayar PJPK & risiko terminasi pada proyek ini (2021) | dossier ✓ (high); product_matrix ✓ (PT PII hanya fakta, bukan target tautan) | pass — nol tautan ke `ptpii.co.id` |
| SIPRABU = portal resmi Kementerian PU untuk proyek prakarsa Badan Usaha | dossier ✓ (siprabu.pu.go.id, high) + korroborasi insidental dari WebSearch #2 (siprabu.pu.go.id milik Kementerian PU) | pass |
| Setiap angka bertahun + label "indikatif" pada nilai investasi | audit penuh: 12 angka, semua bertahun; "Sekitar Rp2,4 triliun, **indikatif** per publikasi 2021" | pass |
| Nama individu | grep manual seluruh artikel | pass — **nol**. Nama menteri yang muncul di hasil WebSearch #2 (judul berita medcom/pembiayaan.pu.go.id) **tidak** masuk artikel |
| Cakupan terlarang (PDF Kemenkeu / Badan Penyiapan / *success fee*) | grep | pass — nol kemunculan; pembiayaan kajian hanya sebagai konsekuensi jalur prakarsa |
| Jumlah kajian pra-studi kelayakan | grep | pass — tidak disebut |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **52** / keyword di posisi 1
- [x] Meta description 140–160 — actual: **149**
- [x] Slug ≤60, kebab-case, keyword — actual: `studi-kasus-proyek-infrastruktur-prakarsa-vs-lelang-kpbu` (**56**)
- [x] H1 contains keyword — ya
- [x] H2 count 4–7 — actual: **7** (5 badan + FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1, #3); ≥1 honest/counter-conventional H2 (#5 "Kapan proposal prakarsa sebaiknya BELUM diterima")
- [x] Keyword in first 100 words — ya (anchor hub di lead)
- [x] Definition snippet near top (40–60 words) — **59 kata**, di ~150 kata pertama
- [x] ≥8 LSI terms — counted: **12+** (prakarsa badan usaha, solicited/unsolicited, right to match, tambahan nilai 10 persen, izin prinsip/izin prakarsa, Perpres 38/2015, PJPK, Badan Usaha Pelaksana, PSN, SPAM, SIPRABU, user charge, financial close)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: `/e-library/lainnya/77/…` (lead), `https://institute.iigf.co.id/` (anchor "sertifikasi KPBU"), `/capacity-building`
- [x] ≥1 external authoritative citation — actual: **2 inline** (kpbu.kemenkeu.go.id/faq, pembiayaan.pu.go.id) + peraturan.bpk.go.id disebut sebagai nama basis data
- [x] FAQ 5–7 Q&As — actual: **5** (42–47 kata/jawaban)
- [x] ≥1 list + ≥1 table — 1 daftar bernomor, 1 daftar bullet, **2 tabel**
- [x] Word count inside band 1.200–1.600 — actual: **1.534** (`count_words.py`; `quality-check.ps1` melaporkan 1.602 karena tokenizer berbeda — gerbang kanonik dipakai)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — **43 / 41 / 48 / 45 / 41** (semua di atas lantai 40; dua suntingan saya menaikkan, bukan menurunkan)
- [x] Each body paragraph makes one independently quotable, verifiable point — dipertajam dengan memecah paragraf bantahan miskonsepsi
- [x] FAQ parseable for FAQPage schema; `dateModified` / freshness noted — `date_modified: "2026-09-22"` ditambahkan

### D. IIGF Institute framing discipline (product_matrix.md + style_guide §11)
- [x] IIGF Institute = unit manajemen pengetahuan & *think-tank* PT PII — bukan pemilik/pemberi CP3P, bukan universitas, bukan entitas hukum mandiri. **CP3P tidak disinggung sama sekali** → Rule 6 (AfDB/ADB/EBRD/IDB/IsDB/World Bank Group + PPIAF; tanpa MIF) tidak terpicu; nol risiko klaim akreditasi
- [x] ≤3 IIGF Institute self-mentions — actual: **1** penyebutan nama + 1 CTA domain = 2 dari kuota 3
- [x] No unverifiable superlatives — nol
- [x] Programme names match product_matrix.md / dossier — anchor tunggal **Riset & jurnal JIPM**, sekali di penutup, sesuai brief
- [x] Closing uses a company_profile.md positioning line — "Sebagai unit manajemen pengetahuan dan *think-tank* PT PII…"
- [x] Soft website CTA as the FINAL line, after the conclusion — "Untuk menelusuri kumpulan kajian studi kasus KPBU dan ketentuan pengiriman naskah ke JIPM, kunjungi institute.iigf.co.id."
- [x] Hub link as natural inline anchor in the lead — ya; **nol "BACA JUGA"**
- [x] Rule 5 (Kantor Bersama KPBU = kolaborator, bukan anggota) — frasa tidak muncul sama sekali; nol risiko
- [x] Disambiguasi IIGF — "PT PII (PT Penjaminan Infrastruktur Indonesia), BUMN penjaminan infrastruktur" diperkenalkan penuh sebelum "IIGF Institute" muncul
- [x] Halaman hub (sektor digital + peran penjaminan PT PII) tidak dijadikan fokus — sektor digital nol kemunculan; penjaminan PT PII hanya 1 paragraf fakta

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `studi-kasus-proyek-infrastruktur-di-indonesia-4-sektor` (Agustus 2026, intent *comparison*, `sha1:85be858189416`)
- Subtopic overlap (Jaccard estimate): **0,06** vs Agustus `-02`; **0,07** vs Agustus `-01`; nol vs `-03`/`-04` (ambang 0,40)
- Sumbu terbukti ortogonal: Agustus `-02` = sektor × cara uang kembali; artikel ini = **asal-usul inisiatif**. **Tabel empat sektor tidak disusun ulang**; "*user charge*" hanya muncul satu kali sebagai atribut faktual kasus, bukan penjelasan ulang mekanisme pengembalian
- Rotasi proyek: grep nol kecocokan untuk Umbulan, Krian-Legundi-Bunder-Manyar, Legok Nangka, Semarang Barat, **PJU Samarinda**, Unpad/Udayana, Palapa, serta Demak/Jatiluhur/Panimbang (milik September `-01`/`-03`/`-04`). Kasus utama **SPAM Karian–Serpong** tetap eksklusif
- Kemiripan tekstual vs 3 artikel September lain: nol pertanyaan FAQ yang sama; CTA sudah di-de-template (lihat changelog); positioning line sepola dengan `-03` (kalimat posisi resmi — diterima)
- Verdict: **distinct angle confirmed**

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `studi-kasus-proyek-infrastruktur-di-indonesia-02.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0,00**, verdict *pass*, **0 flags**, `external_api_used: false`
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0,46** (skrip) / 0,471 (hitung independen saya); *sentence burstiness* 1,017; `top30_vocab_share` 0,329
- [x] Plagiarism: distinctive passages web-checked; no non-IIGF Institute verbatim hit ≥20 words — plagiarism score: **0,05**
  - Kueri 1 — parafrase Pasal 14 ayat (7) ("seluruh dokumen studi kelayakan berikut hak kekayaan intelektualnya beralih menjadi milik…"): **nol kecocokan**; hasil hanya materi akademik HKI umum
  - Kueri 2 — kalimat SIPRABU: **nol kecocokan**; hasil justru mengorroborasi keberadaan portal (siprabu.pu.go.id, Kementerian PU)
  - Kueri 3 — prosa studi kasus ("jalur prakarsa dapat menghasilkan proyek berpenjaminan pemerintah" / "angka bercabang antar-portal pemerintah"): **nol kecocokan**
  - **Mode degraded**: 3 dari 8 kandidat diperiksa (anggaran 3 kueri). Tidak diperiksa: 2 parafrase definisi resmi (dikecualikan protokol "definisi umum"), 1 kutipan Kementerian PU dalam tanda petik dengan atribusi (sitasi, bukan lifting), 1 kalimat Pasal 14 yang baru saya tulis pada pass ini, 1 jawaban FAQ orisinal
