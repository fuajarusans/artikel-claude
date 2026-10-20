---
keyword: "cost center dan profit center"
keyword_slug: "cost-center-dan-profit-center"
landing_page: "none (topik Controlling/akuntansi pertanggungjawaban — tidak ada hub SAP khusus; hub paling relevan = halaman blog SAP FICO Soltius; funnel ke SAP FICO/Controlling (CO))"
month: "2026-10"
brief_id: "cost-center-profit-center-c01"
angle: "cost-center-vs-profit-center-perbedaan-fungsi-tanggung-jawab"
angle_hash: "sha1:3d75564950beb91a4e32d59ab9119bf937808d26"
search_intent: "informational"   # definisi + perbedaan/komparatif; "apa itu" + "perbedaan"
target_word_count: 1100
strategist_run_date: "2026-10-08"
mode: "conditional-given-angle"
supporting_keyword: "apa itu cost center"
cta_anchor: "SAP FICO (Controlling)"
dedup_result: "distinct"
---

# Cost Center dan Profit Center: Perbedaan dan Fungsinya

<!-- Working Title GIVEN by user (row 13, tab Oktober 2026) — dipakai apa adanya; hanya diperhalus untuk kejelasan/SEO. H1 = title (54 char). Primary keyword "cost center dan profit center" di karakter awal; supporting "apa itu cost center" ditangkap via snippet + FAQ #1 (JANGAN buat H2 definisi terpisah yang mengulang snippet). -->

## Hook hypothesis

Seorang CFO atau controller yang membagi perusahaan ke dalam divisi sering terbentur pertanyaan praktis: divisi mana yang boleh dinilai dari labanya, dan mana yang cukup dinilai dari seberapa hemat biayanya? Menilai departemen SDM dari "laba" tidak masuk akal — ia tak menjual apa pun; sebaliknya, menilai cabang ritel hanya dari biaya akan menyembunyikan apakah cabang itu benar-benar menghasilkan uang. Di sinilah konsep **cost center** (pusat biaya) dan **profit center** (pusat laba) menjadi penting: keduanya adalah cara membagi tanggung jawab keuangan agar kinerja tiap unit diukur dengan tolok ukur yang adil.

SERP Bahasa Indonesia untuk "cost center dan profit center" / "perbedaan cost center dan profit center" dikuasai blog software akuntansi (Mekari Jurnal.id, Accurate) dan repositori skripsi kampus, dengan pola yang nyaris identik: definisi singkat → tabel perbedaan → contoh. Dua gap konsisten tersisa: (1) hampir tak ada yang menempatkan keduanya dalam kerangka **akuntansi pertanggungjawaban** yang lebih besar — bahwa cost center dan profit center hanyalah dua dari **empat** jenis pusat pertanggungjawaban; dan (2) nyaris tak ada yang menjelaskan jujur bagaimana keduanya dioperasikan di ERP, di mana biaya cost center dialokasikan ke profit center dan laba per segmen dihitung otomatis. Soltius kredibel di titik kedua bukan sebagai pengajar akuntansi, melainkan sebagai mitra implementasi **SAP FICO** yang menata struktur Controlling (CO) agar tanggung jawab biaya dan laba terbaca di satu sistem. Catatan sheet: topik ini "riding" tren kueri "sap fico" (+46% impresi, per GSC note di tracker) — relevansi funnel kuat. CTA tetap soft, setelah Kesimpulan.

## Primary keyword

`cost center dan profit center`

## Supporting / secondary keyword

`apa itu cost center` (ditangkap lewat definition snippet + FAQ #1 — JANGAN buat H2 definisi terpisah yang mengulang snippet)

## Secondary / LSI keywords (8–12)

- apa itu cost center / pusat biaya
- profit center / pusat laba
- perbedaan cost center dan profit center
- pusat pertanggungjawaban (responsibility center)
- akuntansi pertanggungjawaban (responsibility accounting)
- revenue center (pusat pendapatan)
- investment center (pusat investasi)
- alokasi biaya (cost allocation)
- penilaian kinerja divisi (anggaran vs aktual)
- contoh cost center dan profit center
- SAP Controlling (CO)
- SAP FICO

## Search intent & SERP feature targets

- **Stage**: awareness (top-funnel: mahasiswa akuntansi, staf/analis keuangan, controller, manajer divisi) → bridge ke consideration enterprise (bagaimana ini dikelola di sistem)
- **Format**: definisi snippet + **tabel perbedaan** + konteks pusat pertanggungjawaban + alur alokasi + lensa SAP
- **Surface targets**:
  - [x] AI Overview (Google SGE) / AI-engine citation (Perplexity, ChatGPT) — definisi 40–60 kata + tabel row-by-row + jawaban langsung per H2 sangat *extractable*
  - [x] Featured Snippet (definisi paragraf + tabel perbedaan)
  - [x] People Also Ask
  - [ ] Image Pack (skip — B2B finance)

## SERP landscape (live scrape today)

> **Catatan metode:** WebFetch langsung ke `google.com/search?q=...&hl=id&gl=id` **tidak diandalkan** (konsisten diblokir anti-bot/consent sejak run 2026-06 — SOP `CLAUDE.md` §11). SERP landscape disusun dari **WebSearch** (kueri ID + EN, 2026-10-08) + pemeriksaan sumber. Perlakukan sebagai sinyal relevansi, bukan ranking pasti. Ahrefs **n/a (not connected)** → volume/KD = n/a; andalkan intent + PAA.

**Pola SERP Bahasa Indonesia (dari WebSearch, Okt 2026):**
1. `jurnal.id/id/blog/cost-center/` & `jurnal.id/id/blog/profit-center-adalah-sbc/` — Mekari Jurnal — definisi pusat biaya/pusat laba + fungsi + contoh; corong software akuntansi. (Catatan: salah satu halaman ID keliru menyebut cost center "juga disebut pusat pendapatan" — **jangan tiru kesalahan ini**; cost center ≠ revenue center.)
2. `accurate.id/akuntansi/profit-center-dan-cost-center/` — Accurate — "Pengertian dan Perbedaan Profit Center dan Cost Center"; definisi + tabel perbedaan + contoh, corong software Accurate.
3. Repositori kampus (`repositori.uma.ac.id`, `ejurnal.unisri.ac.id`, `dewey.petra.ac.id`, UNESA) + Warta Ekonomi — membahas **akuntansi pertanggungjawaban** & 4 jenis pusat pertanggungjawaban; kredibel untuk sitasi konsep, tetapi akademis/berat dan tidak ramah pembaca bisnis.
4. Sumber EN otoritatif: `accountingtools.com/articles/the-difference-between-cost-center-and-profit-center`, `wallstreetmojo.com`, `efinancemanagement.com`, `gocardless.com` — definisi + objective (minimize cost vs maximize profit) + basis penilaian.

**Gaps to exploit** (yang top SERP TIDAK kerjakan dengan baik):
- **Kerangka pusat pertanggungjawaban absen di hasil ID populer**: blog software berhenti di "cost center vs profit center" tanpa menyebut bahwa keduanya bagian dari **empat** jenis pusat pertanggungjawaban (biaya, pendapatan, laba, investasi). Menempatkannya dalam kerangka ini = konten original (dihargai HCU) + jawaban "apa bedanya profit center dan investment center" yang dicari.
- **"Dasar penilaian kinerja" dangkal**: sedikit yang menegaskan tolok ukur — cost center dinilai dari **biaya aktual vs anggaran**, profit center dari **laba vs target laba**. Ini inti "fungsi" yang diminta judul.
- **Alokasi biaya cost center → profit center tidak dijelaskan**: hampir tak ada yang menunjukkan bagaimana biaya unit pendukung (cost center) akhirnya "menempel" ke unit penghasil laba (profit center). Ini jembatan konsep → operasional.
- **Lensa sistem/ERP absen**: tak satu pun kompetitor ID menjelaskan bahwa di SAP Controlling, cost center disusun dalam *standard hierarchy*, biaya dialokasikan via *allocation cycle*, dan profit center accounting terintegrasi dengan FI/MM/SD — whitespace alami Soltius/SAP FICO + pemikat kutipan AI.
- **Kesalahan klasifikasi (trust-builder)**: menjadikan unit pendukung sebagai profit center "paksa" (dengan harga transfer internal) kerap memicu sengketa antar-divisi — jarang dibahas jujur.

**People Also Ask / pertanyaan nyata (dari WebSearch — ≥5 captured):**
1. Apa itu cost center (pusat biaya)?
2. Apa perbedaan cost center dan profit center?
3. Apa contoh cost center dan profit center?
4. Apa fungsi cost center bagi perusahaan?
5. Apakah satu departemen bisa menjadi cost center sekaligus profit center?
6. Apa bedanya profit center dan investment center?
7. Bagaimana cara menilai kinerja cost center vs profit center?
8. Apa itu akuntansi pertanggungjawaban?

## Distinct angle vs. history

- **Closest prior in cluster akuntansi/controlling**: `buku-besar-c01` (sibling batch 2026-10, row 8) — tetapi itu **Financial Accounting (FI/GL)**: pencatatan & penggolongan transaksi per akun. Artikel ini **Controlling (CO)**: pembagian tanggung jawab biaya vs laba per unit. Tetangga FI lain: `jurnal-umum-c01` (2026-06), `neraca-saldo-c01` (2026-07), `laporan-laba-rugi-c01` & `ap-ar-c01` (2026-08), `laporan-arus-kas-c01` (2026-09) — semuanya FI, bukan CO.
- **How this brief differs**: seluruh cluster akuntansi yang sudah ada bergerak di sisi **FI** (apa yang dicatat dan dilaporkan). Artikel ini satu-satunya yang masuk ke sisi **CO** (siapa yang bertanggung jawab atas angka itu, dan dengan tolok ukur apa). Secara eksplisit, brief `buku-besar-c01` sendiri **menyisakan** topik ini untuk saya: di "Notes for future strategist runs"-nya tertulis *"Controlling (CO) — cost center vs profit center sudah diambil cost-center-profit-center-c01 (batch 2026-10, row 13); jangan tumpang tindih."* **Boundary tegas untuk writer**: JANGAN mengajarkan cara posting ke buku besar / bentuk buku besar / Universal Journal sebagai topik utama (milik `buku-besar-c01`); JANGAN membedah struktur/komponen laporan laba rugi (milik `laporan-laba-rugi-c01`). "Laba" di sini dibahas sebagai **tolok ukur tanggung jawab unit**, bukan sebagai pembacaan laporan keuangan.
- **Subtopic overlap (Jaccard) dengan prior terdekat**: subtopik brief ini = {pusat biaya, pusat laba, tanggung jawab biaya vs pendapatan-biaya, akuntansi pertanggungjawaban/4 jenis pusat, dasar penilaian kinerja, contoh cost/profit center, alokasi biaya cost→profit center, cost/profit center di SAP CO, kapan unit jadi cost vs profit} (9) vs subtopik `buku-besar-c01` = {buku besar/GL, jurnal vs buku besar, bentuk buku besar, posting, buku besar pembantu, bagan akun, neraca saldo, Universal Journal/ACDOCA} (8). Irisan efektif ≈ {konteks akuntansi + jembatan ke SAP S/4HANA Finance/FICO} ≈ 1 dari union ~16 → **Jaccard ≈ 0.06 (< 0.4 ✓)**. Vs `laporan-laba-rugi-c01` ≈ 0.05 (irisan: konsep "laba"). **angle_hash `sha1:3d75564950beb91a4e32d59ab9119bf937808d26` tidak berbenturan** dengan hash mana pun di `articles_history/` (51 artikel; tak ada entri CO/cost-center/profit-center/controlling/FICO — dikonfirmasi grep) + `conditional/2026-06..09` + sibling batch 2026-10. **Hasil dedup: distinct — bukan duplikat, aman ditulis.**

## Article skeleton — H2s the writer should expand

> Target 3–5 H2 (rencana: **4 H2**). **DILARANG** H2 definisi yang mengulang snippet. ≥1 H2 question-format; ≥1 H2 praktis/terstruktur (tabel). Jawaban langsung 40–60 kata tepat setelah tiap H2 (poin BARU milik H2 itu, bukan parafrase snippet), lalu elaborasi. Lead ≤80 kata → definition snippet blockquote → body → FAQ → Kesimpulan ≤80 kata → soft CTA baris terakhir. **Budget kata (panduan, total ≈ 1.100):** lead 78 · snippet 52 · H2#1 300 (termasuk tabel) · H2#2 185 · H2#3 200 · H2#4 190 · FAQ 4×48 ≈ 190 · Kesimpulan 75 · CTA 20.

1. **H2 (question-format + TABEL — CORE, basis diferensiasi):** *"Apa Perbedaan Cost Center dan Profit Center?"* — *covers*: jawaban langsung 40–60 kata berisi poin BARU (bukan definisi ulang): perbedaan inti ada pada **cakupan tanggung jawab** — cost center bertanggung jawab **hanya atas biaya**, profit center atas **pendapatan sekaligus biaya** sehingga labanya bisa dihitung; karena itu tujuannya berbeda (menekan biaya vs memaksimalkan laba) dan tolok ukurnya berbeda. Lalu sajikan **tabel perbedaan** (elemen terstruktur utama; extractable row-by-row) — kolom: **Aspek | Cost Center (Pusat Biaya) | Profit Center (Pusat Laba)**; baris:
   - **Tanggung jawab** → biaya saja | pendapatan **dan** biaya
   - **Tujuan utama** → menekan/mengendalikan biaya | memaksimalkan laba
   - **Kontribusi ke laba** → tidak langsung | langsung
   - **Dasar penilaian kinerja** → biaya aktual vs **anggaran** biaya | laba aktual vs **target laba**
   - **Contoh** → SDM, IT, akuntansi, pemeliharaan | cabang/toko, lini produk, anak usaha
   Tegaskan satu kalimat jujur: cost center **bukan** berarti tidak penting — ia menekan biaya agar profit center bisa menghasilkan lebih. Angka: 2 jenis unit, 5 baris perbandingan, tolok ukur anggaran vs target. (≥1 question-format ✓; ≥1 tabel ✓.)
2. **H2 (konteks/asal — info BARU, BUKAN definisi ulang):** *"Cost Center dan Profit Center dalam Akuntansi Pertanggungjawaban"* — *covers*: jawaban langsung 40–60 kata: keduanya adalah jenis **pusat pertanggungjawaban** (*responsibility center*) dalam **akuntansi pertanggungjawaban** — pendekatan yang membagi organisasi menjadi unit-unit bertanggung jawab, masing-masing dipimpin manajer, agar penyimpangan bisa ditelusuri sampai penanggung jawabnya. Elaborasi dengan info baru yang menambah (bukan mengulang snippet): ada **empat** jenis pusat pertanggungjawaban berdasarkan apa yang dikendalikan manajernya — **pusat biaya** (cost center), **pusat pendapatan** (revenue center), **pusat laba** (profit center), dan **pusat investasi** (investment center, dinilai dari laba dibanding modal yang diinvestasikan/ROI). Tempatkan cost center & profit center sebagai dua di antara empat. Ini menjawab PAA "apa bedanya profit center dan investment center" + "apa itu akuntansi pertanggungjawaban". Sajikan sebagai **list ber-lead-in bold** (4 item) — jangan paksa tabel kedua. Angka: 4 jenis pusat. Sitasi akademik/otoritatif boleh di sini.
3. **H2 (praktis/terstruktur — alur alokasi + hedging jujur):** *"Bagaimana Biaya Cost Center Mengalir ke Profit Center?"* — *covers*: jawaban langsung 40–60 kata: cost center menampung biaya overhead unit pendukung; agar laba profit center mencerminkan biaya penuh, biaya cost center **dialokasikan** ke unit yang memakainya lewat dasar yang wajar (mis. jumlah karyawan, jam mesin, luas ruang). Elaborasi dengan **contoh angka berlabel ilustrasi**: cost center IT berbiaya **Rp600 juta/bulan** dialokasikan ke tiga profit center berdasarkan jumlah pengguna (mis. 50%/30%/20% → Rp300 jt / Rp180 jt / Rp120 jt); setelah alokasi, laba tiap profit center dihitung dari pendapatannya dikurangi biaya langsung **plus** porsi biaya pendukung ini. Lipat **honest hedging** di sini (1–2 kalimat, bukan H2 terpisah): memaksa unit pendukung menjadi profit center dengan harga transfer internal bisa memicu sengketa antar-divisi dan mengaburkan akuntabilitas — klasifikasikan unit sesuai apa yang benar-benar bisa dikendalikan manajernya. Angka: Rp600 jt, 50/30/20%, 3 profit center. (Praktis/terstruktur ✓.)
4. **H2 (jembatan enterprise — funnel SAP FICO/CO, boleh question-format):** *"Bagaimana Cost Center dan Profit Center Dikelola di SAP (Controlling)?"* — *covers*: jawaban langsung 40–60 kata: di SAP, cost center dan profit center adalah objek inti modul **Controlling (CO)** dalam **SAP FICO** — cost center mengumpulkan biaya overhead per unit, profit center menghitung laba per segmen; keduanya diisi master data dan dilaporkan di satu sistem. Elaborasi dengan sudut khas CO (GROUNDED ke SAP Learning): cost center disusun dalam **standard hierarchy** di bawah satu **controlling area** (di SAP S/4HANA Cloud public edition, controlling area **A000** sudah terkonfigurasi); biaya yang belum bisa dibebankan langsung ditampung lebih dulu lalu disebar lewat **allocation cycle**, dan **activity type** memungkinkan satu cost center menagih jasanya ke unit lain secara transparan. Di **SAP S/4HANA**, data akuntansi keuangan (FI) dan manajemen (CO) tersedia **real-time di satu tabel (ACDOCA)**, sehingga biaya cost center dan laba profit center terbaca tanpa rekonsiliasi terpisah. Tautkan **hub [SAP FICO]** inline di sini. **Hedge forward-looking**: konfigurasi/penamaan (mis. controlling area A000, nama tabel) bisa beda antar-edisi/rilis (materi SAP Learning berbasis S/4HANA 2023) — writer rujuk SAP Learning/SAP Help, jangan klaim versi/field spesifik tanpa sumber. Angka: 1 modul CO, controlling area A000, 1 tabel ACDOCA. **TANPA menyebut Soltius di body.**

(FAQ di bawah. Honest/counter-conventional = dilipat ke H2 #3 sebagai 1–2 kalimat agar tetap ≤1200 kata — TIDAK perlu H2 honest tersendiri, sesuai addendum §2.)

## FAQ — questions to answer (3–5; jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka)

> Ambil dari PAA. **JANGAN** mengulang definisi snippet kata per kata; beri sudut/fakta baru. Parseable untuk FAQPage schema. Rencana 4 Q&A (writer boleh +1 jika muat ≤1200 kata).

1. **"Apa itu cost center?"** *(supporting keyword)* — Cost center (pusat biaya) adalah unit organisasi yang bertanggung jawab **hanya atas biaya** yang dikeluarkannya, tanpa menghasilkan pendapatan langsung. Kinerjanya dinilai dari biaya aktual dibanding anggaran. Contoh umum: departemen SDM, IT, akuntansi, dan pemeliharaan.
2. **"Apa contoh profit center?"** — Profit center (pusat laba) adalah unit yang bertanggung jawab atas pendapatan sekaligus biaya, sehingga labanya dapat dihitung. Contohnya cabang/toko ritel, satu lini produk, divisi regional, atau anak perusahaan — unit yang hasilnya ikut menentukan profitabilitas perusahaan secara langsung.
3. **"Apa bedanya profit center dan investment center?"** — Profit center dinilai dari **laba** (pendapatan dikurangi biaya). Investment center (pusat investasi) dinilai lebih jauh: labanya dihubungkan dengan **modal yang diinvestasikan** di unit itu, biasanya lewat ROI. Keduanya termasuk empat jenis pusat pertanggungjawaban.
4. **"Apakah satu departemen bisa menjadi cost center sekaligus profit center?"** — Bergantung pada struktur pertanggungjawaban. Contoh: departemen IT biasanya cost center internal, tetapi bisa diperlakukan sebagai profit center jika menjual jasanya ke pihak luar. Kuncinya: klasifikasikan unit sesuai apa yang benar-benar bisa dikendalikan manajernya.

## SAP / partner tech to teach (keyword tidak ada di `product_matrix.md` → framing universal berlaku)

> Topik ini **tidak ada** di `product_matrix.md` (bukan salah satu 6 keyword bulanan). Pemetaan SAP/anchor diturunkan dari instruksi tugas (CTA anchor: **SAP FICO (Controlling)**) + `company_profile.md` + riset run ini. **Aturan universal tetap berlaku**: Soltius *mengimplementasikan/mendampingi/mendukung* SAP, **bukan "membuat"**; maks 2 self-mention; tanpa superlatif; tanpa spec karangan.

Konsep yang boleh diajarkan body (akurat, vendor-neutral; SAP muncul di H2 #4 + Kesimpulan/CTA):
- **Cost center (pusat biaya)** & **profit center (pusat laba)** sebagai jenis **pusat pertanggungjawaban**; perbedaan tanggung jawab, tujuan, kontribusi ke laba, dan dasar penilaian kinerja; empat jenis pusat pertanggungjawaban (biaya, pendapatan, laba, investasi); alokasi biaya cost center → profit center.
- **SAP Controlling (CO)** di dalam **SAP FICO**: cost center accounting (mengumpulkan overhead per unit), profit center accounting (laba per segmen), **standard hierarchy**, **controlling area** (A000 terkonfigurasi di S/4HANA Cloud public edition), **allocation cycle**, **activity type**; di **SAP S/4HANA** data FI + CO tersedia real-time di **satu tabel (ACDOCA)**. Framing: Controlling yang menata tanggung jawab biaya & laba di satu sistem.

**Facts the writer/researcher MUST verify (jangan diklaim tanpa konfirmasi):**
- **Konsep cost center vs profit center** (tanggung jawab biaya saja vs pendapatan+biaya; objective minimize cost vs maximize profit; cost center tidak hasilkan pendapatan langsung) — konfirmasi via **AccountingTools "The difference between cost center and profit center"** (terverifikasi konten terbaca run ini) + satu sumber akademik ID (repositori kampus/Warta Ekonomi) untuk kerangka 4 pusat pertanggungjawaban. **JANGAN tiru kesalahan sumber ID** yang menyamakan cost center dengan "pusat pendapatan/revenue center" — itu keliru konsep.
- **SAP CO — cost center accounting**: cost center mengumpulkan overhead per area tanggung jawab; standard hierarchy; controlling area (A000 pre-configured di public cloud); allocation cycle; activity type; data real-time di ACDOCA — sumber: **SAP Learning "Overhead Cost Controlling basics" / "Explaining Cost Center Accounting"** (`learning.sap.com`, materi berbasis S/4HANA 2023, konten terbaca run ini). **Hedge**: konfigurasi/penamaan per edisi/rilis bisa beda; jangan sebut T-code/versi spesifik tanpa sumber.
- **SAP CO — profit center accounting**: profit center accounting menghitung laba per segmen; master data profit center; integrasi dengan Financial Accounting (FI), Materials Management (MM), Cost Object Controlling, Sales and Distribution (SD) — sumber: **SAP Learning "Profit Center Accounting in SAP S/4HANA"** (`learning.sap.com/courses/profit-center-accounting-in-sap-s-4hana`, produk: SAP S/4HANA Enterprise Management & S/4HANA Cloud private edition; konten terbaca run ini). Jangan mengarang fitur.
- **Contoh angka alokasi** (IT Rp600 jt → 50/30/20%) = **ilustrasi buatan**, wajib dilabeli; jangan pakai data perusahaan nyata. Pastikan 50%+30%+20% = 100% dan Rp300 jt + Rp180 jt + Rp120 jt = Rp600 jt.
- **Tren "sap fico" +46%**: berasal dari **catatan sheet/GSC di tracker** — atribusikan sebagai sinyal tracker, JANGAN sajikan sebagai statistik SAP resmi. (Opsional dipakai di hook/notes saja, tidak wajib di body.)

## Soltius anchor (BATCH OVERRIDE: maks 2 self-mention — di Kesimpulan + CTA baris terakhir)

- **1 positioning line di `## Kesimpulan`**: Soltius — **SAP Platinum Partner melalui United VARs**, bagian dari Metrodata Group sejak 1998 — **mengimplementasikan dan mendampingi** perusahaan menata modul keuangan dan **Controlling (SAP FICO)** agar tanggung jawab biaya dan laba terbaca rapi di satu sistem, dari implementasi hingga dukungan pasca go-live. (Framing: implements/migrates/supports, **NEVER builds/owns**; tanpa superlatif; pilih SATU kredensial.)
- **1 soft website CTA** (baris terakhir, terpisah): ajakan konsultasi / kunjungi soltius.co.id — anchor funnel: **SAP FICO (Controlling)** (per tracker).
- **TANPA aside Soltius di tengah body** (style_addendum §6). Penyebutan SAP FICO/CO di H2 #4 = teaching, bukan self-mention Soltius. Sentuhan praktisi di body boleh TANPA nama Soltius (mis. "di lapangan, sengketa paling sering muncul ketika unit pendukung dipaksa jadi profit center").

## Internal links to place (BATCH OVERRIDE: TEPAT 2 — 1 hub + 1 cousin, inline natural, tanpa "BACA JUGA")

> `landing_page` kosong di sheet → hub dipilih strategist (keputusan standing sejak Juni). Kedua URL **dikonfirmasi live via WebFetch, 2026-10-08** — penulis tetap cek 200/OK saat menulis. Cross-link map `product_matrix.md` hanya memetakan 6 hub monthly (tidak memuat topik magnet akuntansi/controlling); cousin diambil dari sibling/related page terdekat — konsisten dengan preseden `buku-besar-c01`, `markup-vs-margin-c01`.

- **Hub (halaman soltius.co.id paling relevan + sejalan CTA anchor)**: `https://www.soltius.co.id/id/blog/sistem-sap-fico-dan-modulnya-yang-banyak-digunakan-perusahaan-besar` — anchor natural: `SAP FICO` / `modul Controlling (CO) di SAP FICO` — **why**: halaman ini **secara eksplisit menyebut** "Dalam modul CO terdapat sub modul seperti elemen biaya, **pusat biaya, pusat laba**" dan membedakan fokus CO (perencanaan & pemantauan biaya) dari FI — paling dekat dengan topik ini sekaligus **menjadi funnel CTA anchor SAP FICO (Controlling)**. Terverifikasi live run ini. *Placement*: inline di H2 #4. (Halaman yang sama dipakai `buku-besar-c01` sebagai cousin funnel — tidak ada konflik; peran berbeda.)
- **Cousin (sibling batch akuntansi — FI, pelengkap sisi CO)**: `https://www.soltius.co.id/id/blog/buku-besar-general-ledger` — anchor natural: `buku besar` / `general ledger` — **why**: cost center & profit center mengklasifikasikan ulang **berdasarkan tanggung jawab** transaksi yang sama yang dicatat di buku besar; FI (buku besar) dan CO (cost/profit center) adalah dua sisi SAP FICO. Menautkan sisi CO ke sisi FI memperkuat cluster akuntansi. Slug mengikuti frontmatter sibling `buku-besar-c01` (`buku-besar-general-ledger`). **Fallback (bila sibling belum live saat penulisan)**: `https://www.soltius.co.id/id/blog/apa-itu-siklus-akuntansi-dan-manfaatnya` — anchor natural: `siklus akuntansi` — **terverifikasi 200 OK run ini**; halaman membahas pencatatan transaksi → posting ke buku besar → neraca saldo → laporan, hub konseptual cluster akuntansi (sama dipakai `jurnal-umum`, `neraca-saldo`, `buku-besar`). *Placement*: inline di H2 #2 atau #3. **Pasang salah satu — TEPAT 2 tautan total**; editor pilih URL yang resolve saat publish, hub FICO tetap wajib.

> Hanya 2 link. JANGAN tambah link ketiga. TANPA "BACA JUGA" — inline kontekstual saja.

## External citations (1–2 otoritatif, inline)

1. **SAP (resmi) — SAP Learning**: untuk klaim CO di H2 #4. Pilih yang paling pas:
   - **"Profit Center Accounting in SAP S/4HANA"** — `https://learning.sap.com/courses/profit-center-accounting-in-sap-s-4hana` — SAP official; menyebut profit center master data + integrasi dengan Financial Accounting, Materials Management, Cost Object Controlling, Sales and Distribution; produk SAP S/4HANA Enterprise Management & S/4HANA Cloud private edition. **Konten terbaca run ini.**
   - ATAU **"Overhead Cost Controlling basics" / "Explaining Cost Center Accounting"** (`learning.sap.com/courses/overhead-cost-controlling-basics` / `.../explaining-cost-center-accounting/...`) — SAP official; cost center mengumpulkan overhead per area tanggung jawab, standard hierarchy, controlling area A000 (public cloud), allocation cycle, activity type, data real-time di ACDOCA. **Konten terbaca run ini.** Pakai 1 yang URL-nya stabil saat menulis; keduanya SAP official.
2. **Sumber akuntansi otoritatif (konsep)** — **AccountingTools — "The difference between cost center and profit center"** (`https://accountingtools.com/articles/the-difference-between-cost-center-and-profit-center`) — **konten terbaca run ini**; menegaskan *"the objective of a cost center is to minimize costs, while the objective of a profit center is to maximize profits"* dan *"a cost center is only responsible for its costs, while a profit center is responsible for both its revenues and costs."* Pakai di H2 #1 untuk menegaskan pembedaan tanggung jawab/tujuan. *(Alternatif konsep pusat pertanggungjawaban: sumber akademik ID — repositori kampus/Warta Ekonomi — untuk kerangka 4 jenis; verifikasi URL hidup dahulu.)*

> Hindari outbound ke kompetitor vendor software akuntansi (Mekari/Jurnal.id/Accurate). Prioritas: SAP official + sumber akuntansi netral. Rumus/angka contoh dihitung sendiri (verified), jangan disalin.

## E-E-A-T signals to embed

- **Angka spesifik inline (≥5)**: **2** jenis unit (cost vs profit) & **5** baris tabel perbandingan; **4** jenis pusat pertanggungjawaban; contoh alokasi IT **Rp600 juta** → **50%/30%/20%** (Rp300 jt / Rp180 jt / Rp120 jt) ke **3** profit center; controlling area **A000**; **1** tabel (ACDOCA). Pastikan tidak mengarang; angka SAP diberi sumber + hedge; contoh alokasi dilabeli *ilustrasi*.
- **Praktik lapangan (tanpa menyebut Soltius di body)**: "di lapangan, keluhan paling sering bukan soal definisi, melainkan unit pendukung yang dipaksa jadi profit center lewat harga transfer internal — akuntabilitas jadi kabur dan antar-divisi saling menyalahkan" — framing pengalaman, jujur, tanpa angka klien.
- **Sumber otoritatif**: SAP official (SAP Learning CO) + AccountingTools. Keduanya diatribusi inline.

## AI Overview & GEO optimization (seo_playbook §2a, dipadatkan per addendum §5)

- **Definition snippet (40–60 kata, WAJIB, SEKALI — blockquote "Ringkasnya:")**: arah — *"Ringkasnya: cost center (pusat biaya) adalah unit organisasi yang bertanggung jawab atas biaya yang dikeluarkannya, sedangkan profit center (pusat laba) bertanggung jawab atas pendapatan sekaligus biaya sehingga labanya bisa dihitung. Keduanya adalah jenis pusat pertanggungjawaban yang dipakai untuk menilai kinerja tiap unit secara adil."* (Writer boleh perhalus, jaga 40–60 kata. **INI satu-satunya definisi** — body/H2/FAQ dilarang menyatakannya ulang dengan kata lain, termasuk di jawaban langsung tiap H2.)
- **Jawaban langsung 40–60 kata segera setelah TIAP H2** berisi poin baru milik H2 itu (cakupan tanggung jawab + tolok ukur; kerangka 4 pusat pertanggungjawaban; alur alokasi biaya; objek CO di SAP FICO), **BUKAN** parafrase snippet.
- **Satu paragraf = satu poin quotable & verifiable.** Tabel perbedaan ditulis agar AI bisa mengekstrak baris-per-baris.
- **Entity jelas** (nama penuh di sebutan pertama, akronim di-expand sekali): cost center (pusat biaya), profit center (pusat laba), revenue center (pusat pendapatan), investment center (pusat investasi), pusat pertanggungjawaban (*responsibility center*), akuntansi pertanggungjawaban, SAP FICO, Controlling (CO), Financial Accounting (FI), standard hierarchy, controlling area, allocation cycle, activity type, Universal Journal (table ACDOCA). Hindari T-code/istilah SAP yang tidak ada di sumber terverifikasi.
- **Format match**: tabel untuk perbedaan (H2 #1); list ber-lead-in-bold untuk 4 jenis pusat (H2 #2); prosa + contoh angka untuk alokasi (H2 #3); prosa untuk lensa SAP (H2 #4). Tabel diutamakan — jangan paksa elemen berlebih hingga melampaui 1200 kata.
- **FAQ**: 3–5 Q&A (rencana 4), parseable FAQPage schema; `dateModified` akurat di meta block.

## Data captured this run

- **Source(s)**: WebSearch (Google ID, 2026-10-08, 2 kueri) — peta pesaing "perbedaan cost center dan profit center" / "apa itu cost center pusat biaya pusat laba akuntansi pertanggungjawaban" (Mekari Jurnal.id, Accurate, repositori kampus UMA/UNISRI/Petra/UNESA, Warta Ekonomi; EN: AccountingTools, WallStreetMojo, eFinanceManagement, GoCardless). WebSearch (EN, 2 kueri) — verifikasi SAP CO (cost center accounting, profit center accounting, controlling area A000, allocation cycle, activity type, ACDOCA). **WebFetch terverifikasi run ini (konten terbaca):** `soltius.co.id/id/blog/sistem-sap-fico-dan-modulnya-yang-banyak-digunakan-perusahaan-besar` (✅ hub — menyebut "pusat biaya, pusat laba" di modul CO); `soltius.co.id/id/blog/apa-itu-siklus-akuntansi-dan-manfaatnya` (✅ fallback cousin — accounting cycle, buku besar/jurnal); `accountingtools.com/articles/the-difference-between-cost-center-and-profit-center` (✅ objective minimize vs maximize; tanggung jawab biaya vs pendapatan+biaya); `learning.sap.com/courses/profit-center-accounting-in-sap-s-4hana` (✅ profit center master data + integrasi FI/MM/CO/SD). SAP Learning "Overhead Cost Controlling basics / Explaining Cost Center Accounting" diperiksa via WebSearch (cost center = overhead per area tanggung jawab, standard hierarchy, controlling area A000, allocation cycle, activity type, ACDOCA real-time). WebFetch SERP Google **terblokir** (consent/error) — fallback WebSearch sesuai `CLAUDE.md` §11.
- **Apr 2026 rank** (from report): `n/a` — keyword di luar 6 keyword `seo_report_apr2026.md` (topik conditional/ad-hoc baru).
- **Volume / KD / trend**: `n/a (Ahrefs not connected)`. Sinyal kualitatif: SERP ID padat (Mekari Jurnal.id, Accurate, repositori kampus) → volume definisional/edukasional jelas ada; semua berformat "definisi + tabel + contoh" → beatable dengan kerangka pusat pertanggungjawaban + dasar penilaian kinerja + alur alokasi + lensa SAP CO + GEO. Catatan tracker: kueri "sap fico" +46% impresi (GSC note) → relevansi funnel.
- **SERP features present**: PAA hampir pasti aktif untuk "apa itu / perbedaan"; Featured Snippet (definisi + tabel) sangat mungkin; AI Overview mungkin untuk "cost center adalah" / "perbedaan cost center dan profit center". (Tak terverifikasi langsung — scrape terblokir.)
- **cache_source**: `n/a` — mode conditional `/single-article`; riset ditangkap inline di brief ini (tanpa cache per-keyword bulanan).

## Notes for SME researcher

- **Dossier RINGKAS** — artikel target ~1.100 kata, 4 H2 ramping. Jangan kirim material untuk 1.650 kata.
- **Prioritas #1: akurasi konsep.** Konfirmasi lintas sumber: cost center bertanggung jawab **hanya biaya** (dinilai biaya aktual vs anggaran), profit center atas **pendapatan + biaya** (dinilai laba vs target); objective minimize cost vs maximize profit — **AccountingTools** (terverifikasi) + 1 sumber akademik ID untuk 4 jenis pusat pertanggungjawaban (biaya/pendapatan/laba/investasi). **JANGAN tiru kesalahan sumber ID** yang menyamakan cost center = "pusat pendapatan/revenue center".
- **SAP CO** — pakai sumber terverifikasi: **SAP Learning "Profit Center Accounting in SAP S/4HANA"** (master data + integrasi FI/MM/CO/SD) + **"Overhead Cost Controlling basics / Explaining Cost Center Accounting"** (overhead per area tanggung jawab, standard hierarchy, controlling area A000 di public cloud, allocation cycle, activity type, data real-time ACDOCA). **Hedge** konfigurasi/penamaan per edisi/rilis (materi berbasis S/4HANA 2023); jangan sebut T-code/versi spesifik tanpa sumber.
- **Contoh angka alokasi** (IT Rp600 jt → 50/30/20% = Rp300/180/120 jt) **buatan & berlabel ilustrasi** — verifikasi konsistensi aritmetika; jangan pakai data perusahaan nyata.
- **Boundary dedup**: JANGAN sediakan material cara posting/bentuk buku besar/Universal Journal sebagai topik utama (milik `buku-besar-c01`); JANGAN struktur/komponen laporan laba rugi (milik `laporan-laba-rugi-c01`). "Laba" di sini = tolok ukur tanggung jawab unit, bukan pembacaan laporan.
- Cek 2 URL internal saat menulis: hub `id/blog/sistem-sap-fico-dan-modulnya-yang-banyak-digunakan-perusahaan-besar` (✅ live run ini); cousin `id/blog/buku-besar-general-ledger` (sibling — konfirmasi status; **bila belum live pakai fallback `id/blog/apa-itu-siklus-akuntansi-dan-manfaatnya`**, ✅ 200 OK run ini). Pasang TEPAT 2.
- **JANGAN mengarang** angka/T-code/spesifikasi SAP, pasal, atau angka klien Soltius.

## Notes for future strategist runs

Artikel ini SENGAJA TIDAK mencakup (hindari kanibalisasi + sisakan untuk artikel lain):
- **Investment center & ROI/RI mendalam** (residual income, EVA) — hanya disebut sebagai jenis ke-4 di sini; layak artikel decision-stage tersendiri.
- **Transfer pricing / harga transfer internal** — disentuh 1–2 kalimat sebagai risiko; konsep penuh (metode, pajak) = artikel terpisah.
- **Konfigurasi SAP CO mendalam** (cost center master data step-by-step, allocation cycle setup, profit center derivation) — bottom-funnel/teknis; di sini hanya level konsep.
- **Cost element accounting / internal order / profitability analysis (CO-PA)** — komponen CO lain; disebut ≤1 frasa, bukan dibedah.
- **Struktur/pembacaan laporan laba rugi** — sudah dimiliki `laporan-laba-rugi-c01`; hanya konsep "laba" yang dipinjam.

## Format overrides (batch 2026-10)

Berlaku untuk artikel ini (override `style_guide.md`; sumber: `conditional/2026-10/style_addendum.md`):

- **Panjang body 1000–1200 kata, target ~1100** (frontmatter `target_word_count: 1100`; isi `word_count` aktual setelah menulis). <1000 = terlalu tipis; >1200 = pangkas (buang kalimat pengantar/transisi kosong & contoh redundan, BUKAN memampatkan jadi telegram — ritme tetap bervariasi, paragraf 1–4 kalimat). Hitung via konvensi *cleaned-prose* (`tools/count_words.py`) — jangan vonis dari hitung mentah.
- **ZERO image placeholder** — DILARANG `{IMAGE_NN}` dalam bentuk apa pun; tidak ada `images.json` / image-planner. Konsep alur (biaya cost center → alokasi → laba profit center) disampaikan via prosa + contoh angka + tabel perbedaan, bukan diagram.
- **Definisi HANYA SEKALI** — di definition snippet ("Ringkasnya:" 40–60 kata, blockquote setelah lead). Body/H2/FAQ DILARANG mengulang definisi snippet; tidak ada H2 definisi "Apa itu cost/profit center" (digantikan H2 #1 perbedaan + H2 #2 konteks pusat pertanggungjawaban yang berisi info BARU).
- **3–5 H2**: 4 H2 — ≥1 question-format (H2 #1; H2 #4 boleh question), ≥1 praktis/terstruktur dengan tabel (H2 #1 tabel perbedaan; H2 #3 contoh alokasi berangka). Jawaban langsung 40–60 kata setelah tiap H2 (poin baru), ≥5 angka spesifik inline. Honest hedging dilipat ke H2 #3 (1–2 kalimat), bukan H2 tersendiri.
- **FAQ 3–5 Q&A** (rencana 4), jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka; ambil dari PAA.
- **Internal link TEPAT 2**: 1 hub (`.../blog/sistem-sap-fico-dan-modulnya-yang-banyak-digunakan-perusahaan-besar`) + 1 cousin (`.../blog/buku-besar-general-ledger`, fallback `.../blog/apa-itu-siklus-akuntansi-dan-manfaatnya`). TANPA link ketiga, TANPA "BACA JUGA".
- **Sitasi eksternal otoritatif 1–2** inline (SAP Learning CO + AccountingTools diprioritaskan; keduanya kontennya terbaca run ini).
- **Soltius maks 2 self-mention**: 1 positioning line di `## Kesimpulan` + 1 soft website CTA (soltius.co.id) sebagai **baris terakhir**. Soltius = implementator/pendamping SAP (bukan pembuat). CTA anchor = **SAP FICO (Controlling)**.
- **Anti-AI (style_guide §5)**: variasikan panjang paragraf (burstiness CV ≥0,30), tanpa pembuka klise ("Di era digital…"), em-dash ≤2, jangan tiap H2 → 3 bullet, tanpa adjektiva hype. EYD. JANGAN mengarang angka/T-code/spesifikasi SAP; hal forward-looking (controlling area A000, nama tabel/konfigurasi per rilis — materi SAP Learning berbasis S/4HANA 2023) di-hedge.
- **Meta block lengkap** (saran — editor finalisasi):
  - `meta_title`: "Cost Center dan Profit Center: Perbedaan & Fungsi" (49 char, keyword di depan)
  - `meta_description`: "Cost center bertanggung jawab atas biaya, profit center atas pendapatan dan biaya. Pahami perbedaan, fungsi, contoh, dan penerapannya di SAP Controlling (CO)." (158 char)
  - `slug`: "cost-center-dan-profit-center-perbedaan-fungsi" (keyword-led, 46 char ≤60)
  - `secondary_keywords`: ["apa itu cost center","profit center adalah","perbedaan cost center dan profit center","pusat pertanggungjawaban","akuntansi pertanggungjawaban","contoh cost center dan profit center","SAP Controlling (CO)","SAP FICO"]
  - `publish_month`: "2026-10"
