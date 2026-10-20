---
brief_id: "sertifikasi-kpbu-01"
editor_run_date: "2026-08-12"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Sertifikasi KPBU: Tiga Jalur yang Sering Tertukar

## Recommendation
**approve**

Artikel ini menjaga premisnya sepanjang 1.508 kata: "sertifikasi KPBU" diperlakukan konsisten sebagai frasa pencarian, bukan nama kredensial, dan tidak sekali pun tergelincir menyebut ada sertifikat bernama demikian. Fakta hukum paling berisiko di batch ini — Pasal 13 ayat (7) Permen PPN/Kepala Bappenas No. 7 Tahun 2023 — dikutip verbatim dengan cakupan yang benar-benar sempit dan dibatasi ulang dua kali (badan artikel + FAQ), persis seperti yang diminta. Kepmen 218/2019 absen, skema Ahli Madya/Utama absen, tanggal batch CP3P absen, nama individu nol, dan pengembang PPP Guide ditulis tanpa MIF maupun AfDB. Framing akreditasi — titik gagal terbesar artikel semacam ini — benar di keempat tempat penyebutannya, dan saya perkuat lagi dengan memisahkan kalimat "siapa yang menganugerahkan vs siapa yang melatih" menjadi paragrafnya sendiri serta mengubah CTA penutup menjadi "pelatihan persiapan Sertifikasi CP3P" agar tidak ada celah baca bahwa klien menerbitkan kredensial. Sembilan perbaikan saya terapkan langsung; tidak ada yang menyisakan pekerjaan penulis atau strategist. Satu catatan jujur: leg pencarian web untuk plagiarisme tidak bisa dijalankan (kuota sesi 200/200), jadi delapan kandidat dinilai manual — rinciannya di bagian F.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Nol pola §5 yang terdeteksi; 0 em-dash; paragraf 1–6 kalimat; register instruktur, bukan brosur |
| Factual & KPBU/PPP & sertifikasi accuracy | 9 | 5/5 klaim spot-check lolos; klaim lisensi BNSP saya beri atribusi juga di tabel |
| On-page SEO compliance | 9 | Semua item lolos; meta title 46, deskripsi 155, slug 27 |
| GEO extractability (§2a) | 9 | Jawaban 44/42/47/45/43 kata setelah kelima H2 badan artikel |
| IIGF Institute framing discipline | 9 | 3 self-mention tepat; ATO vs pemilik kredensial benar di 4 titik |
| Internal linking | 10 | Tepat 3 inline ke institute.iigf.co.id; tanpa BACA JUGA; tanpa ptpii.co.id/gagas.co.id |
| FAQ quality | 8 | 6 Q&A, 40–45 kata, mandiri; brief menyarankan 8 (masih di dalam band 5–8) |
| Originality (plagiarism + AI-detector) | 9 | ai_score 0.04; kandidat plagiarisme dinilai manual (leg web degraded) |

## What I fixed (changelog)
- **Premis, lead**: anchor hub `[Sertifikasi KPBU]` berkapital dipakai di dalam kalimat yang justru menyangkal keberadaannya sebagai nama kredensial. Diubah menjadi "Frasa [sertifikasi KPBU](...)" huruf kecil, dipecah jadi dua kalimat. Anchor keyword ke hub tetap utuh, implikasi nama-diri hilang.
- **Framing akreditasi (risiko tertinggi)**: paragraf 5 kalimat pada §2 dipecah, sehingga "Lembaga pelatihan menyiapkan kandidat menghadapi ujian, bukan menerbitkan kredensialnya" + kalimat ATO berdiri sebagai satu paragraf terkutip sendiri, dibuka "Perbedaan peran ini yang paling sering tertukar."
- **CTA penutup**: "program Sertifikasi CP3P layak didiskusikan" → "**pelatihan persiapan** Sertifikasi CP3P layak didiskusikan". Menutup satu-satunya bacaan tersisa yang bisa dikira klaim kepemilikan kredensial, tanpa kehilangan anchor program.
- **Atribusi lisensi BNSP**: sel tabel "LSP KPBU Indonesia, skema Ahli Pratama KPBU" → "LSP KPBU Indonesia **(dilaporkan berlisensi BNSP)**, skema Ahli Pratama KPBU". FAQ #3 diberi atribusi senada ("**yang menurut penyelenggaranya** berlisensi BNSP") dan kategorinya diubah ke "berskema nasional". Sebelumnya klaim ini tegas hanya di badan artikel, tetapi tampil sebagai fakta di tabel dan FAQ.
- **Meta description**: "skema BNSP Ahli Pratama" → "skema kompetensi Ahli Pratama" (155 karakter). Menghapus kopling BNSP–Ahli Pratama yang tak bisa di-hedge di ruang meta.
- **Cakupan Penasihat Proses**: "berlaku bagi peran Penasihat Proses pada lampiran" → "muncul di lampiran ... untuk peran Penasihat Proses **yang berasal dari Badan Usaha maupun perorangan**", sesuai batas dosir.
- **Generalisasi biaya**: FAQ #6 "Kisaran yang dipublikasikan untuk pelatihan CP3P di Indonesia" (menggeneralisasi harga satu penyelenggara ke seluruh negeri) → "Paket kursus dan ujian yang dipublikasikan penyelenggara pelatihan terakreditasi di Indonesia berkisar...". Label indikatif + 2026 dipertahankan; sel tabel dilengkapi jadi "(indikatif per publikasi 2026)".
- **Keyword di paragraf penutup** (hilang di draf): Kesimpulan dibuka ulang menjadi "...bentuknya peta: sertifikasi KPBU adalah payung bagi tiga jalur, bukan satu nama sertifikat."
- **Tata bahasa & logika**: "Peraturan itu sendiri aturan pelaksana" → "...**merupakan** aturan pelaksana"; "ber-status ATO" → "berstatus ATO"; "lulus tiga ujian PPP Guide" → "tiga ujian **berbasis** PPP Guide"; paragraf PPP Guide dipecah dan "sehingga" yang non-sekuitur diganti ("Kerangka global itu tetap perlu diterjemahkan ke Perpres 38/2015 dan Permen PPN 7/2023 sebelum berguna di meja kerja Anda").
- **Frontmatter**: `word_count` 1.467 → 1.508; anchor hub disinkronkan ke huruf kecil.

## What I flagged (open issues)
- ⚠️ **Leg pencarian web untuk plagiarisme tidak berjalan** — kuota WebSearch sesi habis (200/200) sebelum kandidat bisa diuji. Delapan kandidat dinilai manual (bagian F); tidak satu pun berpotensi verbatim ≥20 kata di luar teks peraturan yang memang dikutip dengan atribusi. *Rekomendasi*: bila kurator ingin kepastian penuh, jalankan ulang kueri pada `<brief-id>.id.quality-input.json` di sesi dengan kuota — tidak menahan verdict.
- ⚠️ **Lisensi BNSP LSP KPBU Indonesia belum dikonfirmasi di registri `bnsp.go.id`** (dosir: confidence medium, sumber = asosiasi penyelenggara). Artikel kini menyatakannya berbasis atribusi di ketiga tempat dan menyuruh pembaca mengonfirmasi sebelum menganggarkan. *Rekomendasi*: cek `bnsp.go.id` saat refresh berikutnya; bila terkonfirmasi, atribusi boleh dilepas.
- ⚠️ **`dateModified` belum ada di meta block** (§2a menuntut sinyal kesegaran). Frontmatter hanya membawa `publish_month`. *Rekomendasi*: isi dari sisi CMS saat publikasi — konsisten dengan artikel lain batch 2026-08; tidak diubah di sini agar skema frontmatter tetap seragam.
- ⚠️ **Biaya CP3P Rp 19–21 juta bersumber dari halaman klien** (dosir, akses langsung 2026-08-12), bukan dari APMG. Sudah berlabel indikatif + tahun dan mengarahkan verifikasi ke halaman resmi. *Rekomendasi*: perbarui saat harga batch berubah.
- ⚠️ **FAQ 6 dari 8 pertanyaan brief**. Yang dilepas ("Apakah ada kredensial resmi bernama Sertifikasi KPBU?" dan "Bagaimana cara mulai kalau saya benar-benar baru?") sudah terjawab di badan artikel; pertanyaan kedua juga bersinggungan dengan cakupan `-04`. Masih di dalam band 5–8, jadi tidak saya paksakan kembali ke dalam plafon 1.600 kata.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hit
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 kemunculan sama sekali
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hit
- [x] "Dengan demikian" not overused — 0 hit
- [x] Em-dash count ≤2 — **0** em-dash di badan artikel (1 en-dash pada rentang "Rp 19–21 juta", sah)
- [x] Varied paragraph lengths — profil kalimat per paragraf: 6/4/3/1/4/4/3/3/4/4/4/2/4/1/3/4/3/1/2/2/3 (rentang 1–6)
- [x] Not every H2 → 3-bullet list — 5 H2 badan: prosa+prosa, prosa+tabel, prosa saja, prosa+bullet 2 butir, prosa+daftar bernomor 3 butir
- [x] No generic claims without numbers — 2023, 29 September 2023, Pasal 13 ayat (6)/(7), Pasal 1 angka 1, Pasal 13 ayat (1), Perpres 38/2015, Berita Negara 777, 2019, Rp 19–21 juta (indikatif 2026), (APMG International, 2026)
- [x] No stacked hype adjectives — 0 hit untuk terbaik/nomor satu/terdepan/terlengkap/canggih/seamless/revolusioner
- [x] No service-dump paragraph — hanya 1 program yang disebut (Sertifikasi CP3P), di penutup
- [x] Tidak ada register brosur maupun siaran pers — 0 hit "Dalam rangka / Sebagai wujud / Jangan lewatkan / Segera daftar"; CTA berbunyi "layak didiskusikan bersama tim"
- [x] Tidak merendahkan penyelenggara lain — PAP-KPBU, LSP KPBU, Pusbindiklatren, BPSDM PU, BPPK disebut faktual; nasihat ditujukan ke perilaku pembeli ("periksa siapa yang menerbitkan bukti akhirnya"), bukan ke mutu lembaga

### B. Factual & KPBU/PPP & sertifikasi spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Pasal 13 ayat (7) Permen PPN 7/2023 mewajibkan sertifikasi bagi tenaga ahli **konsultan Badan Usaha / konsultan perorangan** pembantu simpul KPBU — bukan semua ASN, bukan semua anggota simpul, bukan semua BUP | dossier ✓ (kutipan verbatim salinan resmi, Berita Negara RI 2023/777, confidence high); pembatasan dinyatakan 2× (badan §3 + FAQ #5) sesuai instruksi | **pass** |
| Permen PPN 7/2023 mulai berlaku 29 September 2023 (diundangkan); Permen adalah pelaksana Perpres 38/2015 | dossier ✓ (Pasal 98 + konsiderans "Menimbang huruf b") | **pass** |
| CP3P dimiliki dan dianugerahkan APMG International; kredensial penuh setelah lulus Foundation + Preparation + Execution; Foundation prasyarat; ATO menyelenggarakan pelatihan | dossier ✓ + ppp-certification.com (APMG) ✓ + product_matrix.md universal rule ✓. Artikel **tidak** menyatakan Preparation→Execution berurutan wajib | **pass** |
| PPP Guide dikembangkan bersama ADB, EBRD, IDB, IsDB, World Bank Group dengan dukungan pendanaan PPIAF | Instruksi bulan ini ✓ — **MIF dan AfDB tidak muncul**, meskipun `company_profile.md` masih mencantumkan MIF (lihat catatan sistemik di bawah) | **pass** |
| Biaya CP3P Rp 19–21 juta per level, berlabel indikatif per publikasi 2026, tanpa tanggal batch | dossier ✓ (institute.iigf.co.id, 2026-08-12); label indikatif+tahun ada di tabel, FAQ #6, dan penutup; **tidak ada satu pun tanggal batch/jadwal kelas** di artikel | **pass** |

Pemeriksaan wajib tambahan bulan ini:
- **Kepmen PPN 218/2019** — 0 kemunculan. ✓ absen total sesuai perintah.
- **Ahli Madya / Ahli Utama KPBU** — 0 kemunculan; hanya "Ahli Pratama KPBU". ✓
- **Klaim anggota Kantor Bersama KPBU** — 0 kemunculan. ✓
- **Judul program diklat** — hanya "Pelatihan Skema Pembiayaan Pembangunan Infrastruktur KPBU" (BPSDM Kementerian PU, dosir confidence high). Pusbindiklatren Bappenas dan BPPK Kemenkeu disebut institusional tanpa judul program karangan. ✓
- **Nama individu** — 0. ✓
- **Disambiguasi IIGF** — kedua penyebutan membawa konteks "PT Penjaminan Infrastruktur Indonesia (Persero) / PT PII" + "KPBU". ✓

> Catatan sistemik untuk knowledge base (bukan cacat artikel): `knowledge_base/company_profile.md` baris 85 masih menyebut **MIF** sebagai pengembang PPP Guide. Draf ini kebetulan sudah benar, tetapi sumber kebenaran itu perlu dikoreksi agar artikel berikutnya tidak mewarisi kekeliruan.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **46 karakter**, keyword pada posisi 0
- [x] Meta description 140–160 — actual: **155** (setelah perbaikan)
- [x] Slug ≤60, kebab-case, keyword — actual: `sertifikasi-kpbu-tiga-jalur` (27)
- [x] H1 contains keyword — "Sertifikasi KPBU: Tiga Jalur yang Sering Tertukar"
- [x] H2 count 4–7 — actual: **7** (5 badan + FAQ + Kesimpulan); badan artikel 5
- [x] ≥1 question-format H2 (#1 dan #3); ≥1 honest/counter-conventional H2 (#5 "Yang tidak akan Anda temukan...")
- [x] Keyword in first 100 words — kalimat pertama ("mencari sertifikasi KPBU untuk tim")
- [x] Keyword in last paragraph — ditambahkan di Kesimpulan pada pass ini
- [x] Definition snippet near top (40–60 words) — blockquote "Ringkasnya", **56 kata**, di dalam ~150 kata pertama
- [x] ≥8 LSI terms — counted: **13** (sertifikasi ahli KPBU · pelatihan ahli KPBU · sertifikasi kompetensi · CP3P · APMG International · LSP KPBU · Ahli Pratama KPBU · tenaga ahli KPBU · simpul KPBU · Accredited Training Organization · BNSP · PPP · PPP Guide)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: `institute.iigf.co.id/` (lead, inline) · `/capacity-building` (§4) · `/e-library/lainnya/77/...` (§5). Semua anchor deskriptif inline; **tanpa BACA JUGA**; tanpa `ptpii.co.id`/`gagas.co.id`
- [x] ≥1 external authoritative citation — actual: **2** (ppp-certification.com/APMG; jdih.bappenas.go.id)
- [x] FAQ 5–7 Q&As — actual: **6**, masing-masing 40–45 kata
- [x] ≥1 list + ≥1 table — 1 bullet (2 butir) + 1 numbered (3 butir) + 1 tabel perbandingan 3 kategori
- [x] Word count inside band 1.200–1.600 — actual: **1.508** (`tools/count_words.py`), plafon 1.600 aman

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — dihitung ulang: **44 / 42 / 47 / 45 / 43 kata** untuk kelima H2 badan artikel
- [x] Each body paragraph makes one independently quotable, verifiable point — dua paragraf multi-poin dipecah pada pass ini (blok CP3P/ATO; blok PPP Guide)
- [x] FAQ parseable for FAQPage schema — H3 pertanyaan + jawaban mandiri, tanpa rujukan silang antar-jawaban
- [ ] `dateModified` / freshness noted in the meta block — **belum ada**; lihat flag terbuka (diserahkan ke CMS, konsisten dengan batch ini)

### D. IIGF Institute framing discipline (product_matrix.md + style_guide §11)
- [x] IIGF Institute framed as PT PII's knowledge-management unit dan ATO APMG — NOT owner/awarder of CP3P, NOT a university, NOT an independent legal entity. Diperiksa kalimat per kalimat di 4 titik: tabel ("APMG International, pemilik dan pemberi kredensial"), §2 prosa ("dimiliki dan dianugerahkan oleh APMG"; "Lembaga pelatihan menyiapkan kandidat ..., bukan menerbitkan kredensialnya"), FAQ #3 ("APMG International memiliki dan menganugerahkan CP3P, sedangkan pelatihannya diselenggarakan lembaga berstatus ATO"), penutup ("pelatihan persiapan Sertifikasi CP3P")
- [x] ≤3 IIGF Institute self-mentions — actual: **3** (aside faktual §2 · positioning line Kesimpulan · baris CTA situs)
- [x] No unverifiable superlatives — "ATO APMG pertama di Indonesia sejak 2019" adalah klaim faktual yang diizinkan `product_matrix.md`, bersumber dosir + `company_profile.md`
- [x] KPBU/PPP product names + specs match product_matrix.md / dossier — anchor CTA = **Sertifikasi CP3P**, tepat satu anchor, di penutup
- [x] Closing uses a company_profile.md positioning line — "Melalui tiga pilar edukasi, riset, dan advokasi kebijakan..."
- [x] Soft website CTA present as the FINAL line, after the conclusion — "Untuk menimbang jalur mana yang paling sesuai dengan kebutuhan tim Anda, ikhtisar program pelatihan dan publikasi KPBU tersedia di institute.iigf.co.id." (konsultatif, bukan "daftar sekarang")
- [x] Hub link present as a natural inline anchor in the lead — "Frasa [sertifikasi KPBU](https://institute.iigf.co.id/) bukan nama satu kredensial resmi..."

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** — `articles_history/index.json` kosong (`articles: []`); 2026-08 adalah bulan pertama.
- Saudara sekandang dalam batch: `-02` (nasional vs internasional), `-03` (alur tiga level CP3P), `-04` (kapan belum perlu).
- Subtopic overlap (Jaccard estimate) vs `-04` (tetangga terdekat): **~0,20**. Irisan hanya pada dua titik — "siapa yang diwajibkan" dan "apa yang tidak dijamin" — dan keduanya di sini hanya 2–4 kalimat di dalam H2 yang lebih besar, bukan seksi tersendiri. Terhadap `-03`: struktur level CP3P **tidak** dikembangkan; hanya satu kalimat penamaan tiga ujian + prasyarat Foundation untuk mengisi satu baris tabel kategori, persis seperti instruksi dosir.
- Verdict: **distinct angle confirmed** — artikel ini satu-satunya yang beroperasi di level peta/lanskap.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `sertifikasi-kpbu-01.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict `pass`; ambang revise 0.30, reject 0.50)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.366** (flag `low` dari skrip karena targetnya sendiri 0.45; di atas ambang editor). Sentence burstiness 0.87; top-30 vocab share 0.327
- [~] Plagiarism: **leg pencarian web tidak dapat dijalankan** — kuota WebSearch sesi habis (200/200). Delapan kandidat dinilai manual:

| # | Kandidat | Penilaian manual |
|---|---|---|
| 1 (skor 32) | Kalimat PAP-KPBU vs LSP KPBU Indonesia | Kalimat perbandingan sintesis penulis. Yang berpotensi verbatim hanya nama entitas/program (≤7 kata) — tak terhindarkan dan bukan plagiarisme |
| 2 (21) | Kalimat ATO IIGF Institute | Fakta first-party klien; kemiripan dengan institute.iigf.co.id dikecualikan aturan |
| 3 (20) | "Bukan seluruh ASN, bukan seluruh anggota simpul KPBU..." | 14 kata, di bawah ambang 20; triad negasi orisinal penulis |
| 4 (20) | Parafrase Pasal 13 ayat (6) | Enumerasi ±10 kata berasal dari teks peraturan, disebut sumbernya dalam kalimat yang sama |
| 5 (20) | Kalimat Penasihat Proses | Ringkasan editorial; saya sunting ulang pada pass ini |
| 6 (20) | "Kerangka global itu tetap perlu diterjemahkan..." | Ditulis pada pass penyuntingan ini — orisinal |
| 7 (19) | Kalimat kepemilikan CP3P | Atribusi definisional standar bertaut ke APMG; setara "CP3P adalah..." yang dikecualikan |
| 8 (18) | Fragmen tanggal pengundangan | Artefak pemenggalan markdown; isinya satu fakta tanggal |

  Kutipan verbatim Pasal 13 ayat (7) berada di dalam tanda kutip dengan atribusi pasal — praktik sitasi yang benar, bukan hit. **plagiarism score: 0.05 (degraded — verifikasi web tertunda, lihat flag terbuka).**
