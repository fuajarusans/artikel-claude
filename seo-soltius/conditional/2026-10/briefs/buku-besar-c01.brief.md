---
keyword: "buku besar"
keyword_slug: "buku-besar"
landing_page: "none (top-funnel accounting magnet — tidak ada hub SAP sendiri; hub konseptual = siklus akuntansi; funnel ke SAP S/4HANA Finance)"
month: "2026-10"
brief_id: "buku-besar-c01"
angle: "buku-besar-posting-klasifikasi-akun-peran-siklus-akuntansi"
angle_hash: "sha1:cfc431e8bbe1"
search_intent: "informational"
target_word_count: 1100
strategist_run_date: "2026-10-08"
mode: "conditional-given-angle"
supporting_keyword: "general ledger adalah"
cta_anchor: "SAP S/4HANA Finance (Universal Journal) → modul keuangan SAP FICO"
dedup_result: "distinct"
---

# Apa Itu Buku Besar (General Ledger) dan Perannya dalam Akuntansi

<!-- Working title GIVEN by user (row 8, tab Oktober 2026) — dipakai apa adanya. H1 = title. Primary keyword "Buku Besar" + padanan Inggris "General Ledger" (supporting keyword "general ledger adalah") di karakter awal. 61 char — jika editor perlu, boleh dipangkas jadi "Apa Itu Buku Besar (General Ledger) dalam Akuntansi" (52 char) tanpa mengubah substansi. -->

## Hook hypothesis

Staf keuangan dan pemilik bisnis yang sudah disiplin mencatat jurnal sering tersendat di langkah berikutnya: bagaimana mengetahui berapa saldo kas, piutang, atau beban gaji saat ini jika semua transaksi masih berurut tanggal di satu daftar panjang? Buku besar menjawab itu — ia mengambil catatan kronologis dari jurnal dan menggolongkannya kembali per akun sehingga saldo tiap pos bisa dibaca. SERP Bahasa Indonesia untuk "buku besar" dikuasai vendor software akuntansi UMKM (Mekari/Jurnal.id, Accurate, Majoo, Kledo) dan media edukasi yang berhenti di "pengertian + bentuk + contoh" — tanpa menjelaskan jujur **mengapa** penggolongan per akun ini krusial, **kapan** posting manual mulai rawan, dan bagaimana ERP modern mengubah konsep buku besar sepenuhnya. Angle ini menutup gap itu: menempatkan buku besar sebagai tahap di siklus akuntansi (antara penjurnalan dan neraca saldo), menjelaskan bentuk dan cara posting secara konkret, lalu menunjukkan bahwa di **SAP S/4HANA Finance** buku besar dan buku besar pembantu melebur ke dalam **Universal Journal** (satu tabel) — bukan lagi banyak buku yang harus direkonsiliasi. Soltius kredibel di sini sebagai mitra implementasi SAP S/4HANA Finance yang memindahkan pembukuan dari spreadsheet manual ke satu sumber kebenaran finansial, bukan sebagai "guru akuntansi".

## Primary keyword

`buku besar`

## Supporting / secondary keyword

`general ledger adalah` (ditangkap lewat snippet + H2 #1 perbedaan — JANGAN buat H2 definisi terpisah yang mengulang snippet)

## Secondary / LSI keywords (8–12)

- general ledger adalah
- buku besar akuntansi
- fungsi buku besar
- bentuk buku besar (T, skontro, staffel)
- cara posting jurnal ke buku besar
- posting (akuntansi)
- akun / kode akun (chart of accounts / bagan akun)
- buku besar pembantu (subsidiary ledger)
- jurnal umum
- neraca saldo (trial balance)
- siklus akuntansi
- SAP S/4HANA Finance / Universal Journal

## Search intent & SERP feature targets

- **Stage**: awareness (top-funnel; pelajar, staf admin/keuangan baru, pemilik UMKM naik kelas) → bridge ke consideration enterprise
- **Format**: definitional explainer + tabel bentuk buku besar + langkah posting bernomor
- **Surface targets**:
  - [x] AI Overview (Google SGE) / AI-engine citation (Perplexity, ChatGPT) — definisi 40–60 kata + tabel row-by-row + jawaban langsung per H2 sangat *extractable*
  - [x] Featured Snippet (definisi paragraf + tabel bentuk + langkah posting bernomor)
  - [x] People Also Ask

## SERP landscape (live scrape today)

> **Catatan metode:** WebFetch ke `google.com/search?...&hl=id&gl=id` **tidak diandalkan** (konsisten diblokir anti-bot sejak run 2026-06). SERP landscape disusun dari **WebSearch** (kueri ID) + pemeriksaan sumber. Tandai sebagai sinyal, bukan scrape SERP penuh. Ahrefs **n/a** (tidak terhubung) → volume/KD = n/a; andalkan intent + PAA.

**Pola SERP Bahasa Indonesia (dari WebSearch, Okt 2026):**
1. `accurate.id/akuntansi/bentuk-buku-besar/` & seri Accurate ("pengertian-buku-besar-adalah", "jenis-jenis-buku-besar", "akun-t") — pengertian + fungsi + bentuk (T/skontro/staffel) + jenis + contoh; sangat lengkap, corong software Accurate.
2. `jurnal.id/id/blog/pengertian-general-ledger/`, `.../contoh-buku-besar/`, `.../cara-posting-jurnal-umum-ke-buku-besar/` — definisi general ledger + contoh + cara posting; konten pilar Mekari Jurnal.
3. `majoo.id`, `deepublishstore.com`, `kitalulus.com` + modul **Kemdikbud** (`lmsspada.kemdikbud.go.id`) — edukasi generik: pengertian, bentuk, contoh (banyak hanya gambar); modul kampus kredibel untuk sitasi bentuk 4 kolom.

**Gaps to exploit** (yang top SERP TIDAK kerjakan dengan baik):
- **Perbedaan jurnal vs buku besar yang tajam**: banyak artikel menjelaskan keduanya terpisah; sedikit yang menegaskan intinya — jurnal = kronologis (urut waktu), buku besar = **penggolongan per akun**. Ini jawaban "general ledger adalah" yang paling bersih untuk dikutip AI.
- **Jembatan ke skala enterprise**: kompetitor adalah vendor akuntansi UMKM; tak satu pun menjelaskan jujur bahwa di ERP modern buku besar dan buku besar pembantu **melebur** ke satu tabel (Universal Journal) tanpa rekonsiliasi terpisah — whitespace alami Soltius/S/4HANA Finance.
- **Buku besar pembantu (subsidiary ledger)** jarang dijelaskan jelas sebagai rincian di bawah akun kontrol (piutang/utang/persediaan) — bahan FAQ + E-E-A-T.
- **Extractability/GEO**: banyak pesaing bertele-tele dan menaruh contoh sebagai gambar; kita menang dengan jawaban 40–60 kata di bawah tiap H2 + tabel bentuk yang bersih (AI tidak bisa membaca gambar contoh mereka).

**People Also Ask / pertanyaan nyata (dari WebSearch — ≥5 captured):**
1. Apa yang dimaksud dengan buku besar (general ledger)?
2. Apa saja fungsi buku besar?
3. Apa saja bentuk buku besar? (T, skontro, staffel 3 kolom / 4 kolom)
4. Bagaimana cara posting dari jurnal umum ke buku besar?
5. Apa bedanya jurnal umum dan buku besar?
6. Apa itu buku besar pembantu (subsidiary ledger)?
7. Apa hubungan buku besar dengan neraca saldo?
8. Apa itu chart of accounts / bagan akun?

## Distinct angle vs. history

- **Closest prior in cluster akuntansi**: `jurnal-umum-c01` (conditional 2026-06, tahap pencatatan awal) dan `neraca-saldo-c01` (conditional 2026-07, tahap verifikasi). Terdekat berikutnya: `laporan-laba-rugi-c01` (2026-08), `ap-ar-c01` (2026-08, utang/piutang), `laporan-arus-kas-c01` (2026-09), `cara-menghitung-hpp-c01` (2026-06). Catatan: `cost-center-profit-center-c01` (sibling batch 2026-10, row 13) = Controlling (CO), bukan FI/GL — tegas berbeda.
- **How this brief differs**: buku besar adalah **tahap di ANTARA** jurnal umum dan neraca saldo — justru tahap yang **secara eksplisit disisakan** di "Notes for future strategist runs" milik `jurnal-umum-c01` ("Buku besar (general ledger): pengertian & cara posting") dan `neraca-saldo-c01` ("Buku besar... tahap antara jurnal umum dan neraca saldo; kandidat artikel sendiri"). Fokus unik: **penggolongan transaksi per akun** (bukan pencatatan kronologis seperti jurnal umum; bukan rekap saldo untuk cek keseimbangan seperti neraca saldo), bentuk buku besar (T/skontro/staffel), proses **posting**, dan buku besar pembantu. **Boundary tegas untuk writer**: JANGAN mengulang cara membuat jurnal umum / tabel saldo normal 5 kategori / jurnal umum vs khusus (milik `jurnal-umum-c01`); JANGAN mengulang jenis neraca saldo / 4 jenis kesalahan yang lolos / heuristik dibagi 9 (milik `neraca-saldo-c01`) — cukup 1 kalimat konteks "saldo buku besar lalu dirangkum ke neraca saldo".
- **Subtopic overlap (Jaccard) dengan prior terdekat**: subtopik bersama dengan `jurnal-umum-c01` = {konteks siklus akuntansi, debit-kredit, jembatan Universal Journal/S/4HANA Finance} ≈ 3 dari union ~14 → **Jaccard ≈ 0,21 (< 0,4 ✓)**. Vs `neraca-saldo-c01` ≈ 0,20 (bersama: siklus akuntansi, Universal Journal, hub siklus akuntansi). angle_hash `sha1:cfc431e8bbe1` tidak bertabrakan dengan riwayat (51 history + conditional Jun–Sep + sibling batch Okt). **Hasil dedup: distinct — bukan duplikat.**

## Article skeleton — H2s the writer should expand

> Target 3–5 H2. **DILARANG** H2 definisi yang mengulang snippet. ≥1 H2 question-format; ≥1 H2 praktis/terstruktur (tabel + langkah). Jawaban langsung 40–60 kata tepat setelah tiap H2 (poin baru, bukan definisi snippet), lalu elaborasi. Lead ≤80 kata → definition snippet blockquote → body → FAQ → Kesimpulan ≤80 kata → soft CTA baris terakhir.

1. **H2 (question-format — supporting keyword "general ledger adalah")**: *"Apa Bedanya Buku Besar dan Jurnal Umum?"* — *covers*: jawaban langsung 40–60 kata dengan poin inti (BUKAN definisi ulang): **jurnal** mencatat transaksi secara **kronologis** (urut waktu) saat pertama terjadi; **buku besar (general ledger)** menggolongkan ulang catatan itu **per akun** dan menghitung saldonya. Satu kalimat posisi di siklus akuntansi: jurnal → posting → buku besar → neraca saldo. Tegaskan: isi buku besar berasal dari jurnal umum dan jurnal khusus. **JANGAN ajarkan cara membuat jurnal** — itu milik artikel jurnal umum; di sini cukup kontras konsep. Tautkan hub [siklus akuntansi] inline di sini atau di lead. Angka: 2 tahap, 1 arah posting.
2. **H2 (praktis/terstruktur — TABEL)**: *"Apa Saja Bentuk Buku Besar?"* — *covers*: jawaban langsung 40–60 kata lalu **tabel 3 bentuk**: (kolom: Bentuk | Susunan | Kolom saldo | Cocok untuk). **Bentuk T** (debit kiri, kredit kanan; paling sederhana; saldo dihitung di akhir; dipakai untuk analisis/edukasi); **Skontro** (dua kolom horizontal: debit vs kredit, tiap sisi ada tanggal/keterangan/ref/nominal); **Staffel** (menurun; **3 kolom** = saldo tunggal, **4 kolom** = saldo rangkap debit & kredit sehingga saldo berjalan terlihat tiap transaksi). Info BARU (bukan ulangan snippet). Angka: 3 bentuk, staffel 3 vs 4 kolom. **Catatan akurasi untuk writer**: sumber berbeda pendapat apakah skontro punya kolom saldo berjalan — kolom saldo berjalan paling konsisten di staffel; tulis hati-hati, jangan over-claim.
3. **H2 (praktis — LANGKAH/posting, HowTo-parseable)**: *"Bagaimana Cara Posting dari Jurnal ke Buku Besar?"* — *covers*: jawaban langsung 40–60 kata (posting = memindahkan nilai dari jurnal ke akun buku besar yang sesuai; dilakukan setelah penjurnalan). Lalu **langkah bernomor**: (1) siapkan akun buku besar sesuai **bagan akun/chart of accounts**; (2) pindahkan **tanggal** dari jurnal; (3) isi **keterangan** = nama akun; (4) isi **referensi** (mis. **JU 01** = jurnal umum halaman 1) — dan beri nomor akun balik di kolom ref jurnal (posting reference / cross-reference); (5) salin nilai ke sisi **debit/kredit** yang sama dengan posisinya di jurnal; (6) hitung **saldo** (selisih debit − kredit). Hedging jujur singkat (1–2 kalimat, bukan H2 terpisah): posting manual cukup untuk volume kecil; saat transaksi membengkak/multi-entitas, posting manual lambat dan rawan salah akun — titik perusahaan beralih ke sistem akuntansi/ERP. Angka: 6 langkah, contoh ref JU 01.
4. **H2 (jembatan enterprise — funnel SAP, boleh question-format)**: *"Bagaimana Buku Besar Bekerja di ERP Modern?"* — *covers*: jawaban langsung 40–60 kata: di ERP, buku besar jadi modul GL otomatis — posting terjadi real-time saat transaksi di-input, saldo selalu mutakhir. Elaborasi dengan sudut **khas GL** (bukan ulangan jurnal/neraca): di **SAP S/4HANA Finance**, buku besar (FI-GL) dan buku besar pembantu (piutang/utang/aset/material) yang dulu tersimpan di banyak tabel terpisah kini **melebur ke satu tabel — Universal Journal (table ACDOCA)** yang memuat **350+ field** untuk akuntansi keuangan sekaligus controlling (CO); karena GL dan subledger berada di satu sumber, **rekonsiliasi antar-buku** yang dulu rutin tiap akhir periode sebagian besar hilang (mis. Asset Accounting otomatis selaras dengan GL). Posisikan sebagai "general ledger yang disatukan", bukan sekadar "satu tabel". Tautkan cousin [modul keuangan SAP FICO] inline di sini. **Hedge forward-looking**: penamaan/field count/nama tabel per rilis bisa berubah — writer rujuk SAP Help Portal, jangan klaim versi/field spesifik tanpa sumber. Angka: 350+ field, 1 tabel. TANPA menyebut Soltius di body.

(FAQ di bawah. Honest/counter-conventional = lipat ke H2 #3 sebagai 1–2 kalimat hedging agar tetap ≤1200 kata — TIDAK perlu H2 honest tersendiri.)

## FAQ — questions to answer (3–5; jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka)

> Ambil dari PAA. **JANGAN** buat FAQ yang mengulang definisi snippet kata per kata; beri sudut/fakta baru. Parseable untuk FAQPage schema.

1. **"Apa bedanya buku besar dan buku besar pembantu?"** — buku besar (umum) memuat akun ringkasan seperti Piutang Usaha; **buku besar pembantu** (*subsidiary ledger*) merinci akun itu per entitas, mis. piutang per pelanggan. Total seluruh buku besar pembantu harus sama dengan saldo akun kontrolnya di buku besar umum. Umum dipakai untuk piutang, utang, dan persediaan.
2. **"Apa itu posting dalam akuntansi?"** — posting adalah proses memindahkan nilai debit dan kredit dari jurnal ke akun buku besar yang sesuai, lalu menghitung saldonya. Posting dilakukan **setelah** penjurnalan dan **sebelum** penyusunan neraca saldo; di kolom referensi dicatat asal jurnal (mis. JU 01).
3. **"Apa hubungan buku besar dengan neraca saldo?"** — saldo akhir setiap akun di buku besar dikumpulkan menjadi **neraca saldo** (*trial balance*) untuk mengecek apakah total debit sama dengan total kredit sebelum laporan keuangan disusun. Buku besar adalah sumber datanya; neraca saldo adalah ringkasan verifikasinya.
4. **"Apa itu chart of accounts (bagan akun)?"** — daftar terstruktur seluruh akun berikut kodenya yang dipakai perusahaan, umumnya dikelompokkan jadi 5 kategori: aset, liabilitas, ekuitas, pendapatan, dan beban. Bagan akun menjadi kerangka buku besar — tiap akun di dalamnya memiliki satu "halaman" buku besar.
5. **(Opsional ke-5)** **"Apakah buku besar masih relevan di era software akuntansi?"** — ya. Konsepnya tidak hilang, hanya otomatis. Di ERP seperti SAP S/4HANA Finance, seluruh entri masuk ke **Universal Journal** (satu tabel, ACDOCA), sehingga buku besar dan buku besar pembantu tidak lagi dikelola sebagai buku-buku terpisah yang harus direkonsiliasi manual.

## SAP / partner tech to teach (vendor-neutral di body; keyword tidak ada di product_matrix.md → framing universal berlaku)

> Topik ini **tidak ada** di `product_matrix.md` (bukan salah satu dari 6 keyword bulanan). Pemetaan SAP/anchor diturunkan dari instruksi tugas (CTA = SAP S/4HANA Finance) + riset. **Aturan universal tetap berlaku**: Soltius *mengimplementasikan/mendukung/memigrasikan*, bukan "membuat" SAP; maks 2 self-mention; tanpa superlatif.

Konsep yang boleh diajarkan body (akurat, vendor-neutral; SAP hanya muncul di H2 #4 + Kesimpulan/CTA):
- **Buku besar / general ledger** sebagai tahap penggolongan per akun: fungsi, 3 bentuk (T/skontro/staffel 3–4 kolom), proses posting, buku besar pembantu, bagan akun.
- **SAP S/4HANA Finance** dengan **Universal Journal** — buku besar (FI-GL) dan buku besar pembantu melebur ke satu tabel (**ACDOCA**, 350+ field) sebagai *single source of truth* finansial; GL dan Controlling (CO) berbagi akun yang sama; rekonsiliasi antar-buku sebagian besar hilang (mis. Asset Accounting selaras otomatis dengan GL). Framing: buku besar yang **disatukan dan real-time**.

**Facts the writer/researcher MUST verify (jangan diklaim tanpa konfirmasi):**
- **Universal Journal / table ACDOCA** sebagai tabel tunggal yang menyatukan GL + subledger + CO, klaim "350+ field", dan hilangnya rekonsiliasi GL↔subledger (mis. Asset Accounting) — konfirmasi via **SAP Help Portal** (halaman "Universal Journal", `help.sap.com`). Nama tabel/jumlah field bisa berbeda antar-rilis → hedge; jika ragu, sebut "satu tabel jurnal universal" tanpa angka field spesifik.
- **Prinsip akuntansi dasar**: 3 bentuk buku besar (T, skontro, staffel 3-kolom/4-kolom saldo rangkap), definisi posting, buku besar pembantu/subsidiary ledger, bagan akun 5 kategori — konfirmasi via sumber edukasi reputable (modul **Kemdikbud**, AccountingTools/Investopedia untuk "general ledger"); konsisten dengan praktik PSAK/SAK. **Perbedaan sumber** soal kolom saldo skontro vs staffel → tulis hati-hati.
- Jika menampilkan contoh angka buku besar (opsional, akun Kas bentuk T atau staffel 4 kolom): pastikan saldo = total debit − total kredit konsisten; JANGAN menyalin tabel kompetitor.

## Soltius anchor (BATCH OVERRIDE: maks 2 self-mention — di Kesimpulan + CTA baris terakhir)

- **1 positioning line di `## Kesimpulan`**: Soltius — **SAP Platinum Partner melalui United VARs**, bagian dari Metrodata Group sejak 1998 — mendampingi perusahaan memindahkan pembukuan dari proses manual ke **SAP S/4HANA Finance**, dari implementasi hingga dukungan pasca go-live. (Framing: implements/migrates/supports, NEVER builds/owns; tanpa superlatif.)
- **1 soft website CTA** (baris terakhir, terpisah): ajakan konsultasi / kunjungi soltius.co.id — anchor funnel: **SAP S/4HANA Finance** (per tracker).
- **TANPA aside Soltius di tengah body** (style_addendum §6). Penyebutan SAP S/4HANA Finance/Universal Journal di H2 #4 = teaching, bukan self-mention Soltius.

## Internal links to place (BATCH OVERRIDE: TEPAT 2 — 1 hub + 1 cousin, inline natural, tanpa "BACA JUGA")

> Landing page kosong di sheet → hub dipilih strategist (keputusan standing). Kedua URL **dikonfirmasi live via WebFetch, 2026-10-08** — penulis tetap cek 200/OK saat menulis.

- **Hub (halaman soltius.co.id paling relevan)**: `https://www.soltius.co.id/id/blog/apa-itu-siklus-akuntansi-dan-manfaatnya` — anchor natural: `siklus akuntansi` — **why**: halaman ini secara eksplisit menyebut "posting jurnal ke buku besar" sebagai salah satu tahap siklus akuntansi; ia parent konseptual cluster akuntansi Soltius dan **hub yang sama** dengan `jurnal-umum-c01` & `neraca-saldo-c01` — memperkuat cluster akuntansi → S/4HANA Finance. *Placement*: inline di lead atau H2 #1.
- **Cousin (funnel ke SAP — CTA anchor)**: `https://www.soltius.co.id/id/blog/sistem-sap-fico-dan-modulnya-yang-banyak-digunakan-perusahaan-besar` — anchor natural: `modul keuangan SAP (FICO)` — **why**: halaman ini menjelaskan FI general ledger (mencatat seluruh transaksi dalam chart of accounts) + CO; jembatan alami dari buku besar manual ke **SAP S/4HANA Finance (FI-GL/Universal Journal)**; ditempatkan inline di H2 #4, memperkuat CTA anchor. (Cousin cluster akuntansi yang sama dipakai sibling jurnal-umum & neraca-saldo — konsisten; cross-link map product_matrix hanya memetakan 6 hub monthly, tidak memuat topik magnet akuntansi.)

> Hanya 2 link. JANGAN tambah link ketiga. TANPA "BACA JUGA" — inline kontekstual saja. (Jika sibling `jurnal-umum-c01`/`neraca-saldo-c01` sudah live sebagai URL publik saat penulisan, editor BOLEH mengganti SALAH SATU anchor tahap menjadi tautan sibling, tetapi total tetap 2 dan hub siklus akuntansi diprioritaskan.)

## External citations (1–2 otoritatif, inline)

1. **SAP (resmi)** — SAP Help Portal halaman "Universal Journal" (`help.sap.com`) untuk klaim H2 #4 (ACDOCA menyatukan GL + subledger + CO, rekonsiliasi hilang). Prioritas utama. Alternatif pendukung teknis: SAP Learning (`learning.sap.com`, "General Ledger Integration").
2. **Sumber edukasi akuntansi otoritatif** — modul **Kemdikbud** (`lmsspada.kemdikbud.go.id`) untuk bentuk buku besar 4 kolom, ATAU **Investopedia/AccountingTools** untuk padanan "general ledger" & subsidiary ledger. Pilih 1 yang URL-nya stabil.

> Hindari outbound ke kompetitor vendor software akuntansi (Mekari/Accurate/Kledo) dan integrator SAP lain. Prioritas: SAP official + sumber edukasi netral.

## E-E-A-T signals to embed

- **Angka spesifik inline (≥5)**: 3 bentuk buku besar; staffel **3 kolom** (saldo tunggal) vs **4 kolom** (saldo rangkap); **6 langkah** posting; bagan akun **5 kategori** (aset/liabilitas/ekuitas/pendapatan/beban); Universal Journal = **1 tabel** (**350+ field**); contoh ref **JU 01**. Pastikan tidak mengarang; angka SAP diberi sumber + hedge.
- **Praktik lapangan (tanpa menyebut Soltius di body)**: "dalam praktik implementasi, saldo buku besar yang tidak cocok dengan buku besar pembantu biasanya gejala posting manual yang tersebar di banyak spreadsheet, bukan sekadar salah ketik" — framing pengalaman, jujur, tanpa angka klien.
- **Sumber otoritatif**: SAP official (Universal Journal) + sumber edukasi (Kemdikbud/Investopedia). Keduanya diatribusi.

## AI Overview & GEO optimization

- **Definition snippet (40–60 kata, WAJIB, SEKALI — blockquote "Ringkasnya:")**: arah — *"Ringkasnya: buku besar (general ledger) adalah kumpulan seluruh akun perusahaan tempat transaksi dari jurnal digolongkan kembali per akun lalu dihitung saldonya. Buku besar merupakan tahap siklus akuntansi setelah penjurnalan dan menjadi sumber data penyusunan neraca saldo serta laporan keuangan."* (Writer boleh perhalus; JANGAN diulang di body/H2/FAQ.)
- **Question-first + extractable**: tiap H2 dijawab langsung 40–60 kata (poin baru) sebelum elaborasi.
- **Entity jelas** (nama penuh di sebutan pertama, akronim di-expand sekali): buku besar (general ledger), jurnal umum, buku besar pembantu (subsidiary ledger), bagan akun (chart of accounts), neraca saldo (trial balance), siklus akuntansi, SAP S/4HANA Finance, Universal Journal (table ACDOCA), Financial Accounting (FI), Controlling (CO).
- **Format match**: tabel untuk 3 bentuk buku besar (elemen terstruktur utama); daftar bernomor untuk 6 langkah posting (HowTo-parseable); FAQ parseable FAQPage schema. Jangan paksa elemen tambahan bila melampaui 1200 kata.
- **Freshness**: set `dateModified` akurat saat publish.

## Data captured this run

- **Source(s)**: WebSearch (Google ID, 2026-10-08) — peta pesaing "buku besar"/"general ledger adalah"/"cara posting jurnal ke buku besar", PAA turunan (Accurate, Jurnal.id/Mekari, Majoo, Deepublish, Kitalulus, modul Kemdikbud); WebSearch verifikasi SAP (Universal Journal/ACDOCA 350+ field, FI-GL/subledger, CO integrasi — SAP-PRESS, espresso-tutorials, SAP Learning); WebFetch konfirmasi 2 halaman internal Soltius (siklus akuntansi + SAP FICO) **live & relevan**. WebFetch SERP Google diasumsikan terblokir (SOP CLAUDE.md §11).
- **Apr 2026 rank** (report): n/a — keyword di luar 6 keyword yang dilacak `seo_report_apr2026.md`.
- **Volume / KD / trend**: n/a (Ahrefs not connected). Sinyal kualitatif: SERP padat vendor software akuntansi besar + media edukasi + modul kampus → volume top-funnel tinggi, nilai komersial jelas; konten generik → beatable dengan kontras jurnal-vs-GL yang tajam + jembatan enterprise + GEO.
- **SERP features present**: PAA hampir pasti aktif; Featured Snippet (definisi/bentuk) sangat mungkin; AI Overview mungkin untuk "buku besar adalah"/"general ledger adalah". (Tak terverifikasi langsung — scrape terblokir.)
- **cache_source**: tidak ada (mode conditional/given-angle; tidak memakai per-keyword research cache monthly).

## Notes for SME researcher

Verifikasi: (1) **SAP Universal Journal / tabel ACDOCA** — penyatuan GL + subledger + CO dalam satu tabel, klaim "350+ field", dan hilangnya rekonsiliasi GL↔subledger (Asset Accounting otomatis selaras) via SAP Help Portal; hedge angka/nama per rilis, turunkan jadi "satu tabel jurnal universal" bila ragu. (2) **Prinsip akuntansi**: 3 bentuk buku besar (T/skontro/staffel 3–4 kolom), definisi posting + kolom referensi (JU 01), buku besar pembantu (subsidiary ledger) & akun kontrol, bagan akun 5 kategori — rujuk modul Kemdikbud/AccountingTools/Investopedia; konsisten PSAK. (3) Perbedaan antar-sumber soal kolom saldo skontro vs staffel — catat, tulis hati-hati. (4) Contoh angka buku besar (jika dipakai) harus konsisten (saldo = debit − kredit). **JANGAN menumpuk materi jurnal umum / neraca saldo** (sudah dimiliki sibling) — konteks tahap tetangga cukup 1 kalimat. **JANGAN mengarang angka klien Soltius.** Dossier ringkas — target artikel ~1100 kata.

## Notes for future strategist runs

Artikel ini SENGAJA TIDAK mencakup (disisakan untuk sibling cluster akuntansi berikutnya):
- **Jurnal penyesuaian + neraca lajur (worksheet 10 kolom)** — tahap setelah neraca saldo.
- **Siklus akuntansi lengkap end-to-end (9 tahap)** — artikel ini hanya menyentuh buku besar sebagai 1 tahap; siklus penuh bisa jadi magnet tersendiri (hub Soltius sudah ada).
- **Buku besar pembantu (subsidiary ledger) mendalam** — di sini hanya di level FAQ; bisa jadi artikel sendiri (piutang/utang/persediaan).
- **SAP S/4HANA Finance / Universal Journal sebagai artikel decision-stage** — corong lanjutan untuk pembaca yang siap pindah dari manual ke ERP (mid/bottom-funnel).
- **Controlling (CO) — cost center vs profit center** sudah diambil `cost-center-profit-center-c01` (batch 2026-10, row 13); jangan tumpang tindih.

## Format overrides (batch 2026-10)

Berlaku untuk artikel ini (override `style_guide.md`; sumber: `conditional/2026-10/style_addendum.md`):

- **Panjang body 1000–1200 kata, target ~1100** (frontmatter `target_word_count: 1100`). <1000 = terlalu tipis; >1200 = pangkas. Hitung via konvensi *cleaned-prose* (`tools/count_words.py`) — jangan vonis dari hitung mentah.
- **ZERO image placeholder** — DILARANG `{IMAGE_NN}`; tidak ada `images.json` / image-planner. Konsep alur (jurnal → posting → buku besar → neraca saldo) disampaikan via prosa 1 kalimat + tabel bentuk, bukan diagram.
- **Definisi HANYA SEKALI** — di definition snippet ("Ringkasnya:" 40–60 kata, blockquote setelah lead). Body/H2/FAQ DILARANG mengulang definisi snippet; H2 definisi "Apa itu buku besar" dihapus (digantikan H2 #1 perbedaan yang berisi info baru).
- **3–5 H2**: 4 H2 — ≥1 question-format (H2 #1; H2 #4 boleh question), ≥1 praktis/terstruktur dengan tabel + langkah (H2 #2 tabel bentuk, H2 #3 langkah posting). Jawaban langsung 40–60 kata setelah tiap H2 (poin baru), ≥5 angka spesifik inline. Honest hedging dilipat ke H2 #3 (1–2 kalimat), bukan H2 tersendiri.
- **FAQ 3–5 Q&A**, jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka.
- **Internal link TEPAT 2**: 1 hub (`.../blog/apa-itu-siklus-akuntansi-dan-manfaatnya`) + 1 cousin (`.../blog/sistem-sap-fico-dan-modulnya-yang-banyak-digunakan-perusahaan-besar`). TANPA link ketiga, TANPA "BACA JUGA".
- **Sitasi eksternal otoritatif 1–2** inline (SAP official + sumber edukasi diprioritaskan).
- **Soltius maks 2 self-mention**: 1 positioning line di `## Kesimpulan` + 1 soft website CTA (soltius.co.id) sebagai **baris terakhir**. Soltius = implementator/pendamping SAP (bukan pembuat). CTA anchor = SAP S/4HANA Finance → modul keuangan SAP FICO.
- **Anti-AI (style_guide §5)**: variasikan panjang paragraf (burstiness CV ≥0,30), tanpa pembuka klise ("Di era digital…"), em-dash ≤2, jangan tiap H2 → 3 bullet, tanpa adjektiva hype. EYD. JANGAN mengarang angka/tanggal/spesifikasi SAP; hal forward-looking (nama tabel/field count Universal Journal per rilis) di-hedge.
- **Meta block lengkap** (saran — editor finalisasi):
  - `meta_title`: "Buku Besar (General Ledger): Pengertian & Fungsi" (49 char, keyword "Buku Besar" di depan)
  - `meta_description`: "Buku besar (general ledger) menggolongkan transaksi dari jurnal ke tiap akun lalu menghitung saldonya. Pahami fungsi, bentuk, cara posting, dan perannya." (154 char)
  - `slug`: "buku-besar-general-ledger" (keyword-led, 25 char ≤60)
  - `secondary_keywords`: ["general ledger adalah","buku besar akuntansi","fungsi buku besar","bentuk buku besar","cara posting jurnal ke buku besar","buku besar pembantu","chart of accounts","SAP S/4HANA Finance"]
  - `publish_month`: "2026-10"
