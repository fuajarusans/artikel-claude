---
keyword: "fifo lifo fefo"
keyword_slug: "fifo-lifo-fefo"
landing_page: "https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu"
month: "2026-10"
brief_id: "fifo-lifo-fefo-c01"
angle: "fifo-lifo-fefo-perbedaan-metode-rotasi-stok-dan-penilaian-persediaan"
angle_hash: "sha1:de3ddbd703a9"
search_intent: "informational"
target_word_count: 1100
strategist_run_date: "2026-10-08"
mode: "conditional-given-angle"
supporting_keyword: "perbedaan fifo dan lifo"
cta_anchor: "SAP EWM (Extended Warehouse Management) → fungsi stock removal strategy"
dedup_result: "distinct"
---

# FIFO, LIFO, dan FEFO: Perbedaan Metode Manajemen Stok

<!-- Working title GIVEN by user (row 10, tab Oktober 2026) — dipakai apa adanya. H1 = title. Primary keyword "fifo lifo fefo" ada di tiga kata pertama. Judul menjanjikan dua hal: tiga metode (→ snippet + H2-1 tabel) dan "Perbedaan Metode Manajemen Stok" (→ H2-1 tabel + H2-2 kapan dipakai). Supporting keyword "perbedaan fifo dan lifo" mendarat di H2-1 + H2-3 (dimensi akuntansi) + 1 FAQ. -->

## Hook hypothesis

Sebuah batch susu formula yang masuk gudang bulan lalu terjual lebih dulu daripada batch yang hampir kedaluwarsa, lalu dua kardus sisa ditarik dari rak toko karena lewat tanggal — kerugian yang seharusnya tidak perlu terjadi. Pembaca (manajer gudang, staf logistik, pemilik UKM ritel/F&B/farmasi, hingga staf akuntansi persediaan) sering menyamakan FIFO, LIFO, dan FEFO sebagai "yang masuk dulu keluar dulu" versus kebalikannya, tanpa menyadari bahwa istilah yang sama hidup di **dua dunia berbeda**: aturan *rotasi fisik* di gudang dan metode *penilaian biaya persediaan* di akuntansi. SERP Bahasa Indonesia untuk "fifo lifo fefo" dan "perbedaan fifo dan lifo" terbelah tajam antara dua kubu itu — blog logistik (kontainerindonesia, majoo) membahas rotasi gudang, sementara blog keuangan/pajak (OCBC, online-pajak, accurate, jurnal.id) membahas harga pokok penjualan — dan hampir tidak ada satu artikel pun yang **menyatukan keduanya sekaligus meluruskan satu fakta penting: LIFO tidak lagi diperbolehkan untuk penilaian persediaan di Indonesia**. Angle ini menutup gap itu: satu tabel perbedaan yang bersih, panduan "kapan pakai mana", dimensi akuntansi (PSAK + pajak) yang hilang dari artikel logistik, lalu funnel ke cara sistem gudang menegakkan ketiga aturan secara otomatis. Soltius kredibel di sini sebagai mitra implementasi SAP yang **mengimplementasikan dan mendampingi** SAP Extended Warehouse Management (EWM) — bukan pembuat software — dengan status SAP Platinum Partner via United VARs.

## Primary keyword

`fifo lifo fefo`

## Supporting / secondary keyword

`perbedaan fifo dan lifo` (dijawab di H2-1 tabel + H2-3 dimensi akuntansi + 1 FAQ — JANGAN mengulang definition snippet kata per kata)

## Secondary / LSI keywords (8–12)

- FIFO (First In, First Out)
- LIFO (Last In, First Out)
- FEFO (First Expired, First Out)
- metode rotasi stok / perputaran stok
- metode penilaian persediaan (inventory valuation)
- metode penentuan biaya persediaan
- rata-rata tertimbang (weighted average)
- harga pokok penjualan (HPP) / COGS
- tanggal kedaluwarsa / shelf life
- barang perishable (mudah rusak / bertanggal)
- PSAK 14 (kini PSAK 202) / IAS 2
- SAP Extended Warehouse Management (EWM) / stock removal strategy

## Search intent & SERP feature targets

- **Stage**: awareness → consideration (top-funnel; pembaca membangun pemahaman + kriteria memilih metode sebelum menata gudang / memilih sistem / menetapkan kebijakan akuntansi persediaan)
- **Format**: definitional explainer + tabel perbedaan 3 metode + panduan "kapan dipakai" + boks dimensi akuntansi
- **Surface targets**:
  - [x] AI Overview (Google SGE) / AI-engine citation (Perplexity, ChatGPT) — definisi 40–60 kata + tabel perbedaan row-by-row + jawaban langsung per H2 sangat *extractable*
  - [x] Featured Snippet (definisi + tabel FIFO vs LIFO vs FEFO)
  - [x] People Also Ask

## SERP landscape (live scrape today)

> **Catatan metode:** WebFetch langsung ke `google.com/search?...&hl=id&gl=id` **tidak diandalkan** (sering diblokir anti-bot, konsisten dengan catatan batch sebelumnya). SERP landscape disusun dari **WebSearch** (kueri ID + EN) + verifikasi sumber otoritatif. Tandai sebagai sinyal, bukan scrape SERP penuh. Ahrefs **n/a** (tidak terhubung) → volume/KD = n/a; andalkan intent + PAA.

**Pola SERP Bahasa Indonesia (dari WebSearch) — terbelah dua kubu:**
1. **Kubu keuangan/pajak/akuntansi**: OCBC (`ocbc.id/.../fifo-adalah`), online-pajak, accurate.id ("Pengertian Metode LIFO dan Bedanya dengan Metode FIFO"), jurnal.id ("metode penentuan biaya persediaan"), Bank Mega, Telkomsel Enterprise ("Perbedaan FIFO dan LIFO dalam Manajemen Persediaan"). Fokus: FIFO/LIFO sebagai metode penilaian biaya persediaan, pengaruh ke HPP/laba/inflasi. **Kelemahan kolektif**: banyak menyebut LIFO "menguntungkan saat inflasi" tanpa menegaskan bahwa **LIFO sudah dilarang untuk pelaporan keuangan di Indonesia** sejak PSAK 14 revisi 2008.
2. **Kubu logistik/gudang**: kontainerindonesia ("Pahami Metode Average, FIFO, LIFO dan FEFO"), majoo ("Mengenal metode FIFO, LIFO dan Average Dalam Manajemen Stok"). Fokus: rotasi fisik + FEFO untuk barang kedaluwarsa. **Kelemahan**: sering mencampur "Average" (metode akuntansi) ke dalam daftar rotasi fisik tanpa memisahkan dua dimensi.
3. **Sumber otoritatif/ensiklopedis**: Wikipedia "First Expired, First Out"; jurnal akademik ID (repositori UPI, UGM/FEB, UMPO) untuk FEFO apotek/obat dan status LIFO di PSAK.

**Gaps to exploit** (yang tidak dikerjakan dengan baik oleh top SERP):
- **Menyatukan DUA dimensi secara eksplisit**: FIFO/LIFO/FEFO sebagai (a) aturan **rotasi fisik** gudang DAN (b) metode **penilaian biaya persediaan** akuntansi — lalu menegaskan bahwa yang satu soal *barang mana diambil*, yang lain soal *biaya mana dibukukan*. Hampir tak ada artikel ID yang memisahkan ini dengan bersih.
- **Fakta hukum yang hilang**: **LIFO tidak diperbolehkan** untuk penilaian persediaan menurut **PSAK 14** (revisi 2008, berlaku 1 Januari 2009; kini bernomor **PSAK 202**) selaras **IAS 2**, dan untuk pajak dibatasi **Pasal 10 ayat (6) UU No. 36/2008 PPh** (hanya rata-rata atau FIFO). Blog logistik melewatkannya; blog keuangan sering menyebutnya samar.
- **Tabel perbedaan yang menonjolkan "dasar urutan"**: FIFO/LIFO membaca **tanggal masuk**, FEFO membaca **tanggal kedaluwarsa** — kolom yang jarang dipisah tegas.
- **Panduan "kapan pakai mana" per karakteristik produk**, dengan contoh berhitung (bukan sekadar daftar industri).
- **Jembatan ke eksekusi sistem**: bagaimana WMS/SAP EWM menegakkan aturan ini otomatis saat *picking* (stock removal strategy) — tidak dibahas kubu keuangan maupun kebanyakan kubu logistik.

**People Also Ask / pertanyaan nyata (≥5 captured):**
1. Apa itu FIFO, LIFO, dan FEFO?
2. Apa perbedaan FIFO dan LIFO?
3. Apa bedanya FIFO dan FEFO?
4. Apa itu metode FEFO dan untuk industri apa?
5. Apakah metode LIFO masih boleh dipakai di Indonesia / menurut PSAK?
6. Kapan sebaiknya memakai FIFO, LIFO, atau FEFO?
7. Apa itu metode rata-rata (average) dalam persediaan?
8. Bagaimana cara menerapkan FEFO di gudang?

## Distinct angle vs. history

- **Closest prior article in cluster**: `wms-konsep-c01` (2026-08, "Konsep Warehouse Management System yang Wajib Anda Tahu" — HUB WMS). Artikel itu memuat **satu H2** berjudul "FIFO, LIFO, dan FEFO: Aturan Rotasi Stok yang Dijalankan WMS" (~160 kata) dengan tabel 3 aturan. **Inilah titik irisan utama** dan harus ditangani jujur. Artikel lain di cluster persediaan/gudang: `safety-stock-c01` (2026-07, buffer stock), `reorder-point-c01` (2026-08, ROP), `inventory-turnover-c01` (2026-08, rasio perputaran), `eoq-c01` (2026-09, rumus EOQ) — semuanya tentang **rumus buffer/pemesanan**, bukan metode rotasi/penilaian. Grep `fifo|lifo|fefo` di seluruh `articles_history/` + `conditional/` = FIFO/LIFO/FEFO sebagai **topik inti** hanya muncul di `wms-konsep-c01`; artikel HPP (`cara-menghitung-hpp-c01`, 2026-06) **tidak** menyebut FIFO/LIFO sama sekali.
- **How this brief differs** (empat pembeda struktural):
  1. **Peran berbeda — spoke vs hub.** `wms-konsep-c01` adalah **hub WMS** yang menyinggung FIFO/LIFO/FEFO *sekadar* sebagai salah satu dari empat H2 (aturan picking yang ditegakkan WMS, ~160 kata, dangkal **by design**). Artikel ini adalah **spoke terdedikasi** yang seluruh tubuhnya membahas ketiga metode — kedalaman yang hub sengaja hindari.
  2. **Dimensi akuntansi yang ABSEN di seluruh riwayat.** WebFetch hub hari ini (2026-10-08) memastikan: hub **tidak membahas penilaian/penentuan biaya persediaan sama sekali**. Dimensi FIFO/LIFO sebagai **metode penilaian biaya** (pengaruh ke HPP, laba, pajak) + fakta **LIFO dilarang PSAK 14/PSAK 202 & IAS 2** adalah konten **net-new** yang tidak ada di artikel mana pun di repositori.
  3. **Panduan keputusan + contoh berhitung.** Hub hanya menyajikan tabel; artikel ini menambah H2 "kapan pakai mana" per karakteristik produk dengan contoh angka (mis. apotek: batch masuk Februari kedaluwarsa Juni vs batch masuk Januari kedaluwarsa Desember → FEFO mengeluarkan batch Februari dulu).
  4. **Funnel berbeda.** Hub berlabuh ke WMS secara umum; artikel ini funnel spesifik ke **fungsi stock removal strategy SAP EWM** (FIFO, stringent FIFO, LIFO, shelf life expiration date), dengan **hub WMS sebagai own-hub link naik** — ini justru **memperkuat struktur cluster**, bukan mengkanibal.
- **Subtopic overlap (Jaccard) dengan prior terdekat**:

  | Pembanding | Irisan | Jaccard |
  |---|---|---|
  | `wms-konsep-c01` H2 FIFO/LIFO/FEFO | {definisi 3 metode rotasi, tabel kepanjangan} | **≈ 0.13** ✓ |
  | `inventory-turnover-c01` (perputaran) | {entitas "persediaan", singgungan LIFO/IAS 2 di dossier saja} | ≈ 0.05 ✓ |
  | `safety-stock` / `reorder-point` / `eoq` | {entitas "stok/persediaan"} | ≈ 0.04 ✓ |

- **Hasil dedup: DISTINCT — bukan duplikat.** Irisan tertinggi hanya pada **satu subtopik** (tabel definisi 3 metode rotasi) yang di hub berbobot ~160 kata, sementara artikel ini menambah dimensi akuntansi (PSAK/IAS 2/pajak), panduan keputusan + contoh, dan kedalaman SAP EWM — Jaccard tertinggi **≈ 0.13** (< 0.4). angle_hash `sha1:de3ddbd703a9` tidak bertabrakan dengan riwayat. Spoke terdedikasi di bawah hub = struktur cluster yang benar (`seo_playbook.md` §4), bukan kanibalisasi: primary keyword berbeda (hub = "warehouse management system"; artikel ini = "fifo lifo fefo").
- **Catatan anti-kanibalisasi**: tabel rotasi di artikel ini WAJIB diberi kolom **"Dasar urutan"** (tanggal masuk vs tanggal kedaluwarsa) agar tidak sekadar menyalin tabel hub, dan sebagian besar bobot tubuh harus di H2-2 (kapan pakai) + H2-3 (akuntansi) + H2-4 (eksekusi SAP) yang **tidak dimiliki** hub.

## Article skeleton — H2s the writer should expand

> Target **4 H2** (batas addendum 3–5). **DILARANG** H2 definisi yang mengulang snippet. ≥1 H2 question-format (H2-1 & H2-3); ≥1 H2 praktis/terstruktur dengan tabel/angka (H2-1 tabel, H2-2 panduan + contoh). Jawaban langsung 40–60 kata tepat setelah tiap H2 (poin baru, bukan definisi snippet), lalu elaborasi. ≥5 angka spesifik inline.

**Lead (≤80 kata)** — pain konkret (barang kedaluwarsa menumpuk / urutan keluar salah / laba terdistorsi). Sebut `FIFO, LIFO, dan FEFO` di kalimat pertama + singgung `perbedaan FIFO dan LIFO`. **TANPA paragraf roadmap** ("artikel ini akan membahas…" → dilarang). Tanpa internal link di lead (link ditempatkan di H2-4).

**Definition snippet (blockquote "Ringkasnya:", 40–60 kata)** — **satu-satunya tempat definisi muncul.** Arah: FIFO, LIFO, dan FEFO adalah tiga metode rotasi stok yang menentukan **barang mana dikeluarkan lebih dulu** — FIFO mengeluarkan yang paling lama masuk, LIFO yang paling baru masuk, dan FEFO yang paling dekat tanggal kedaluwarsanya. *Jangan ada definisi lain di body/H2/FAQ yang mengulangnya dengan kata lain.*

1. **H2 #1 (question-format + TABEL — elemen terstruktur wajib)** — *"Apa perbedaan FIFO, LIFO, dan FEFO?"*
   *Jawaban langsung 40–60 kata berisi poin BARU* (bukan ulangan snippet): pembeda intinya adalah **dasar urutan** — FIFO dan LIFO sama-sama membaca **tanggal masuk** (hanya arahnya berlawanan), sedangkan FEFO membaca **tanggal kedaluwarsa**. Karena itu FEFO **bukan** sekadar varian FIFO: barang yang masuk lebih dulu belum tentu kedaluwarsa lebih dulu.
   *Lalu TABEL (dirancang agar bisa dikutip baris-per-baris oleh AI Overview):*

   | Metode | Kepanjangan | Dasar urutan | Yang keluar lebih dulu | Cocok untuk |
   |---|---|---|---|---|
   | **FIFO** | First In, First Out | Tanggal masuk (terlama) | Stok paling lama masuk | Barang umum & bertanggal; mencegah stok usang |
   | **LIFO** | Last In, First Out | Tanggal masuk (terbaru) | Stok paling baru masuk | Material bertumpuk non-perishable (mis. bahan bangunan) — *rotasi fisik saja* |
   | **FEFO** | First Expired, First Out | Tanggal kedaluwarsa (terdekat) | Stok paling dekat kedaluwarsa | Farmasi, makanan & minuman, kosmetik, bahan kimia |

   *Setelah tabel — 1 paragraf ~40 kata*: tegaskan FIFO membaca tanggal **terima**, FEFO membaca tanggal **kedaluwarsa batch**; pada produk bertanggal, FIFO murni bisa meloloskan barang yang justru lebih dekat kedaluwarsa. **DILARANG** memasukkan "Average/rata-rata" ke tabel rotasi ini (itu dimensi akuntansi — dibahas terpisah di H2-3). *Word budget ~200 kata (termasuk sel tabel).* Supporting keyword "perbedaan fifo dan lifo" mendarat di sini.

2. **H2 #2 (praktis — panduan keputusan + CONTOH berhitung)** — *"Kapan sebaiknya memakai FIFO, LIFO, atau FEFO?"*
   *Jawaban langsung 40–60 kata berisi poin BARU*: pilih berdasarkan **karakteristik produk**, bukan selera — produk bertanggal kedaluwarsa → **FEFO**; barang tidak mudah rusak yang tersimpan menumpuk/di rak *drive-in* → **LIFO** (rotasi fisik); mayoritas barang umum tanpa tanggal kritis → **FIFO**.
   *Elaborasi* — daftar singkat dengan lead-in bold (bukan 3 bullet seragam) + **1 contoh berhitung**:
   - **FEFO** — contoh apotek: batch A masuk Januari (kedaluwarsa Desember), batch B masuk Februari (kedaluwarsa Juni). FIFO akan mengeluarkan batch A (masuk lebih dulu), padahal **batch B** justru lebih dekat kedaluwarsa — FEFO mengeluarkan B dulu dan menyelamatkan stok dari penghapusan.
   - **FIFO** — barang umum ber-*shelf life* panjang; menekan risiko stok mengendap & usang.
   - **LIFO** — hanya relevan sebagai **pola fisik** untuk material bertumpuk (lumber, bahan bangunan) atau *drive-in racking*; **bukan** untuk pembukuan (lihat H2-3).
   *Sudut jujur (1–2 kalimat, menggantikan H2 counter-conventional opsional)*: tidak ada metode "terbaik" universal — FEFO paling aman untuk barang kedaluwarsa tetapi menuntut **disiplin pencatatan tanggal/batch** yang sering belum ada di gudang manual. *Word budget ~220 kata.*

3. **H2 #3 (question-format — DIMENSI AKUNTANSI, pembeda utama)** — *"FIFO dan LIFO dalam akuntansi: kenapa LIFO dilarang di Indonesia?"*
   > **Wilayah net-new — tidak dimiliki hub maupun artikel mana pun.** Inilah pembeda terkuat dari `wms-konsep-c01`.

   *Jawaban langsung 40–60 kata berisi poin BARU*: di akuntansi, FIFO dan LIFO bukan soal barang fisik melainkan **asumsi arus biaya** — biaya pembelian mana yang dibukukan sebagai **harga pokok penjualan (HPP)**. Pilihan ini memengaruhi laba dan pajak. Di Indonesia, **LIFO tidak diperbolehkan** untuk penilaian persediaan.
   *Elaborasi (~110 kata)*, satu klaim per kalimat (citation-ready):
   - **PSAK 14** (revisi 2008, berlaku **1 Januari 2009**) menghapus LIFO; metode yang diizinkan tinggal **FIFO** dan **rata-rata tertimbang (weighted average)** — selaras **IAS 2** (IFRS). **Verifikasi + hedge**: sejak **1 Januari 2024** PSAK 14 **disebut** bernomor **PSAK 202** (disahkan 12 Desember 2022), substansi sama — *konfirmasi penomoran & tanggal efektif ke naskah resmi IAI sebelum dinyatakan sebagai fakta final; frame sebagai status terkini yang perlu dicek.*
   - Alasan: LIFO dinilai **mendistorsi laporan keuangan** (laba lebih rendah saat inflasi → beban pajak lebih kecil).
   - Pajak: **Pasal 10 ayat (6) UU No. 36/2008** (PPh) hanya mengizinkan penilaian persediaan dengan **rata-rata** atau **FIFO** — *verifikasi bunyi pasal.*
   - Jembatan jujur: jadi "LIFO" yang sah di Indonesia hanyalah **pola rotasi fisik** (H2-2), **bukan** metode pembukuan. *Word budget ~180 kata.*

4. **H2 #4 (praktis + funnel SAP, tempat 2 internal link)** — *"Bagaimana sistem gudang menegakkan FIFO, LIFO, dan FEFO otomatis?"*
   *Jawaban langsung 40–60 kata berisi poin BARU*: rotasi manual bergantung pada ingatan & kedisiplinan operator; **sistem manajemen gudang (WMS)** menegakkan aturan ini otomatis pada tahap *picking* lewat konfigurasi **stock removal strategy**, sehingga urutan pengambilan ditentukan data, bukan tebakan.
   *Elaborasi (~110 kata)*, entity-clear & vendor-neutral:
   - Di lanskap SAP, solusi gudang strategisnya adalah **SAP Extended Warehouse Management (EWM)** — nama penuh sekali, lalu "SAP EWM". Menurut dokumentasi/pelatihan SAP, strategi *stock removal* untuk *goods issue* mencakup **FIFO, stringent FIFO, LIFO, dan shelf life expiration date** (yang mewujudkan logika **FEFO**) — **sitasi #1 inline di sini**.
   - **Own-hub link (naik)**: untuk konteks gudang yang lebih luas, tautkan natural ke [sistem manajemen gudang (WMS)](https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu).
   - **Cousin link**: karena SAP EWM tertanam di SAP S/4HANA, modernisasi gudang menempel pada agenda [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud).
   *Honest hedge wajib (1 kalimat)*: otomasi tidak memperbaiki data induk — tanpa **tanggal kedaluwarsa & nomor batch** yang tercatat rapi, FEFO tidak bisa dijalankan sistem secanggih apa pun. *Word budget ~180 kata.*

(FAQ di bawah. Honest/counter-conventional sudah diselipkan di H2-2 & H2-4 agar total tetap ≤1200 kata.)

## FAQ — questions to answer (3–5; jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka)

> Ambil dari PAA. **JANGAN** mengulang definisi snippet kata per kata; beri sudut/fakta baru.

1. **"Apa bedanya FIFO dan FEFO?"** — FIFO mengeluarkan barang yang **paling lama masuk**; FEFO mengeluarkan barang yang **paling dekat tanggal kedaluwarsanya**, apa pun urutan masuknya. Pada produk bertanggal, batch yang masuk lebih dulu belum tentu kedaluwarsa lebih dulu, jadi FEFO lebih aman untuk mencegah barang basi.
2. **"Apakah metode LIFO masih boleh dipakai di Indonesia?"** — Tidak, untuk penilaian persediaan: PSAK 14 (berlaku sejak 1 Januari 2009, kini PSAK 202) hanya mengizinkan FIFO dan rata-rata tertimbang, selaras IAS 2, dan Pasal 10 ayat (6) UU No. 36/2008 membatasi pajak pada rata-rata atau FIFO. LIFO hanya sah sebagai pola rotasi fisik.
3. **"Industri apa yang paling cocok memakai FEFO?"** — Industri dengan produk bertanggal kedaluwarsa: farmasi, makanan & minuman, kosmetik, dan bahan kimia. Penerapannya menuntut pencatatan tanggal kedaluwarsa untuk seluruh item persediaan; tanpa data batch, FEFO tidak bisa ditegakkan.
4. **"Apa itu metode rata-rata (weighted average) dalam persediaan?"** (opsional, menangkap PAA campuran "average") — metode penilaian yang menghitung biaya persediaan dari **rata-rata tertimbang** seluruh unit tersedia, bukan urutan masuk. Bersama FIFO, inilah satu-satunya dua metode yang diizinkan PSAK untuk pelaporan keuangan.

## SAP / partner tech to teach (vendor-neutral di body)

- **SAP Extended Warehouse Management (EWM)** — nama penuh di sebutan pertama, lalu "SAP EWM"; **CTA anchor**. Teach vendor-neutral: WMS/EWM menegakkan aturan rotasi lewat **stock removal strategy** saat *picking*. Strategi yang didukung (sumber SAP Learning/Help): **FIFO, stringent FIFO, LIFO, shelf life expiration date (= FEFO), partial quantities first, quantity-based, fixed bin**. **Maksimal porsi di H2-4 + closing.**
- **SAP S/4HANA** — platform tempat SAP EWM tertanam; **1 klausa saja** sebagai jembatan ke cousin link migrasi ERP.
- **Facts the writer/researcher must verify**:
  1. **Strategi stock removal SAP EWM** (FIFO, stringent FIFO, LIFO, shelf life expiration date) — konfirmasi dari **SAP Learning "Applying the Stock Removal Strategies" (course Basic Customizing in SAP S/4HANA EWM)** / SAP Help. **Catatan penting**: dokumentasi SAP standar memakai istilah **"shelf life expiration date"**, bukan kata "FEFO" secara harfiah — tulis "mewujudkan logika FEFO", jangan klaim SAP menamainya "FEFO". Hati-hati: banyak kode strategi (F/L/H) berasal dari **classic WM**, bukan EWM — frame sebagai "dalam EWM diatur lewat *stock removal rule/strategy*", jangan menyalin kode WM lama sebagai spesifikasi EWM.
  2. **Status PSAK 14 → PSAK 202** (penomoran efektif 1 Januari 2024, disahkan 12 Desember 2022) dan **LIFO dihapus sejak PSAK 14 revisi 2008 (berlaku 1 Januari 2009)** — **konfirmasi ke naskah/situs resmi IAI (iaiglobal.or.id)**. Sumber yang tersedia adalah jurnal/blog sekunder; hedge dan atribusikan, JANGAN nyatakan nomor pasal/tahun sebagai mutlak tanpa cek.
  3. **Pasal 10 ayat (6) UU No. 36 Tahun 2008 (PPh)** tentang penilaian persediaan (rata-rata atau FIFO) — **verifikasi bunyi pasal** di JDIH/peraturan resmi sebelum dikutip.
  4. **IAS 2** melarang LIFO — konfirmasi via IFRS Foundation (IAS 2). JANGAN mengarang angka selisih HPP/laba/pajak tanpa contoh bersumber; contoh berhitung FEFO apotek boleh ilustratif (tandai sebagai ilustrasi, bukan data klien).

## Soltius anchor (maks 2 self-mention; di Kesimpulan + CTA baris terakhir)

- **Service/credential untuk CTA**: layanan **Implementation** (New Implementation / Migration / Roll Out) untuk **SAP Extended Warehouse Management (EWM)**, didukung status **SAP Platinum Partner via United VARs** dan pengalaman industri **Wholesale Distribution / Consumer Products / Retail / Pharma** (lihat company_profile — pilih SATU, jangan menumpuk). Framing: Soltius **mengimplementasikan, memigrasikan, dan mendukung** SAP EWM — termasuk mengonfigurasi aturan rotasi stok sesuai kebutuhan — **bukan membuat** perangkat lunaknya, dan **bukan** vendor WMS.
- **Placement**: 1 positioning line di `## Kesimpulan` + 1 soft website CTA (soltius.co.id) sebagai **baris terakhir**. TANPA aside Soltius di tengah body.

## Internal links to place (TEPAT 2 — 1 hub/own + 1 cousin)

- **Own-hub (paling relevan — landing page kosong di sheet, DIPILIH strategist)**: `https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu` — anchor natural: `sistem manajemen gudang (WMS)` (atau "warehouse management system"). *Placement*: inline di H2-4 saat membahas eksekusi otomatis rotasi oleh WMS. **Alasan**: FIFO/LIFO/FEFO adalah aturan yang **ditegakkan WMS**; halaman konsep WMS adalah hub topikal terdekat yang sudah live, dan artikel ini menjadi **spoke terdedikasi** di bawahnya (hub dangkal → spoke dalam = struktur cluster benar, bukan kanibalisasi; primary keyword berbeda). **Diverifikasi live, 2026-10-08**: H1 "Konsep Warehouse Management System yang Wajib Anda Tahu", memuat 6 proses inti + FIFO/LIFO/FEFO ringkas + SAP EWM; **tidak** membahas penilaian/akuntansi persediaan → tidak ada tumpang-tindih dengan H2-3 artikel ini.
- **Cousin (dari cluster / cross-link map)**: `https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud` — anchor: `migrasi ERP ke cloud`. **Alasan**: SAP EWM tertanam di SAP S/4HANA, sehingga keputusan modernisasi rotasi gudang menempel pada agenda migrasi ERP ke cloud. **Diverifikasi live, 2026-10-08**: "Panduan Utama Migrasi ERP ke Cloud"; **tidak** menyinggung gudang/FIFO/EWM → nol risiko kanibalisasi. (Hub kluster peringkat #1 April 2026 → menyalurkan ekuitas, prioritas *defend*.)

> Hanya 2 link. JANGAN tambah link ketiga. TANPA "BACA JUGA" — inline kontekstual saja.

## External citations (1–2 otoritatif, inline)

1. **SAP Learning — "Applying the Stock Removal Strategies"** (course *Basic Customizing in SAP S/4HANA EWM*, `learning.sap.com/courses/basic-customizing-in-sap-s-4hana-ewm/applying-the-stock-removal-strategies`) + SAP Help sebagai pendukung. Sumber SAP resmi untuk strategi *stock removal* (FIFO, stringent FIFO, LIFO, shelf life expiration date). Atribusi "menurut dokumentasi SAP". **Wajib, inline di H2-4.**
2. **Standar akuntansi — PSAK 14 / PSAK 202 (IAI) selaras IAS 2 (IFRS Foundation)** untuk status LIFO tidak diperbolehkan. **Verifikasi di iaiglobal.or.id / ifrs.org**; atribusi + tahun; hedge penomoran PSAK 202. Pendukung opsional: **Pasal 10 ayat (6) UU No. 36/2008 (PPh)** untuk sisi pajak (JDIH resmi). **Inline di H2-3.**

> Hindari outbound ke kompetitor penyedia WMS/software akuntansi. Prioritas: SAP resmi (teknis) + IAI/IFRS/UU (standar).

## E-E-A-T signals to embed

- **Angka spesifik inline (≥5 wajib — addendum §4)**: 3 metode rotasi; tabel 5 kolom; contoh FEFO apotek (batch masuk Januari vs Februari; kedaluwarsa Desember vs Juni); PSAK 14 berlaku **1 Januari 2009**; PSAK 202 efektif **1 Januari 2024** (disahkan 12 Desember 2022); Pasal 10 ayat (6) UU No. 36/2008; tahun berdiri Soltius 1998 (Kesimpulan). Kuota aman dari angka struktural + tanggal regulasi bersumber — **tidak perlu mengarang angka pasar**.
- **Praktik lapangan (jujur)**: "di lapangan, kegagalan FEFO hampir selalu bukan soal aturan, melainkan data — tanggal kedaluwarsa & batch yang tidak tercatat saat penerimaan" — framing pengalaman implementasi, tanpa angka klien.
- **Sumber otoritatif**: SAP Learning/Help (stock removal strategy) + PSAK/IAS 2 (status LIFO). Keduanya diatribusi + diberi tahun/penanda standar.

## AI Overview & GEO optimization

- **Definition snippet (40–60 kata, WAJIB, SEKALI — blockquote "Ringkasnya:")**: lihat skeleton. Writer boleh perhalus; **JANGAN diulang** di body/H2/FAQ.
- **Question-first + extractable**: H2-1 & H2-3 berformat pertanyaan; tiap H2 dijawab langsung 40–60 kata (poin baru) sebelum elaborasi.
- **Entity jelas**: FIFO (First In, First Out), LIFO (Last In, First Out), FEFO (First Expired, First Out), rata-rata tertimbang (weighted average), harga pokok penjualan (HPP), PSAK 14/PSAK 202, IAS 2, SAP Extended Warehouse Management (EWM) — nama lengkap/expand akronim di sebutan pertama.
- **Format matching**: perbedaan → **tabel** (H2-1); panduan keputusan → **list dengan lead-in bold + contoh** (H2-2). Jangan paksakan tabel kedua; jangan tiap H2 → 3 bullet seragam.
- **FAQ**: 3–5 Q&A, parseable untuk FAQPage schema.

## Data captured this run

- **Source(s)**: WebSearch (ID+EN) — kubu keuangan (OCBC, online-pajak, accurate.id, jurnal.id, Telkomsel Enterprise, Bank Mega) + kubu logistik (kontainerindonesia, majoo) untuk peta SERP & PAA; Wikipedia "First Expired, First Out" + jurnal akademik ID (UPI, UGM/FEB, UMPO, Binus Accounting) untuk FEFO & status LIFO di PSAK; SAP Learning/Help (stock removal strategies EWM). WebFetch: hub WMS `konsep-warehouse-management-system-yang-wajib-anda-tahu` (live ✓, konfirmasi cakupan & tidak bahas akuntansi) + `migrasi-erp-ke-cloud` (live ✓, tanpa konten gudang).
- **Apr 2026 rank (from report)**: n/a (keyword bukan bagian set monthly 2026-06; tidak di `seo_report_apr2026.md`).
- **Volume / KD / trend**: n/a (Ahrefs not connected). Sinyal intent: definisional + komparatif ("adalah"/"perbedaan"/"bedanya") dominan; SERP ID ramai (blog keuangan + logistik) → volume jelas ada, topik evergreen.
- **SERP features present**: AI Overview likely (kueri definisi/komparasi) + PAA aktif.
- **cache_source**: tidak ada (mode conditional/given-angle; tidak memakai per-keyword research cache monthly).

## Notes for SME researcher

Verifikasi (urut prioritas):
1. **Strategi stock removal SAP EWM** — konfirmasi daftar (FIFO, stringent FIFO, LIFO, shelf life expiration date) dari **SAP Learning "Applying the Stock Removal Strategies"** / SAP Help; sediakan URL untuk sitasi inline. **Jangan** menyalin kode strategi classic WM (F/L/H) seolah spesifikasi EWM; tulis bahwa EWM mengaturnya lewat *stock removal rule/strategy*, dan SAP menyebut FEFO sebagai "shelf life expiration date".
2. **PSAK 14 / PSAK 202** — konfirmasi: LIFO dihapus sejak revisi 2008 (berlaku 1 Januari 2009); metode sah = FIFO + rata-rata tertimbang; penomoran PSAK 202 (efektif 1 Januari 2024, disahkan 12 Desember 2022). **Cek naskah/situs resmi IAI (iaiglobal.or.id)** — sumber saat ini sekunder; atribusi + hedge.
3. **Pasal 10 ayat (6) UU No. 36/2008 (PPh)** — verifikasi bunyi pasal (penilaian persediaan: rata-rata atau mendahulukan yang diperoleh lebih dulu/FIFO) di JDIH resmi.
4. **IAS 2** (IFRS Foundation) melarang LIFO — konfirmasi.
5. **Kepanjangan & logika FIFO/LIFO/FEFO** — pastikan urutan pengambilan benar; pastikan klaim "barang masuk lebih dulu belum tentu kedaluwarsa lebih dulu" akurat. JANGAN mengarang angka selisih HPP/laba/pajak; contoh FEFO apotek tandai sebagai ilustrasi. JANGAN mengumpulkan materi tentang: safety stock/ROP/EOQ, rasio perputaran, 6 proses WMS umum — itu milik artikel lain (risiko memancing writer keluar scope).

## Notes for future strategist runs

Artikel ini TIDAK akan membahas (disisakan untuk sibling): **contoh perhitungan HPP lengkap FIFO vs rata-rata** (kartu persediaan perpetual/periodik — kandidat artikel akuntansi tersendiri, bersanding `cara-menghitung-hpp-c01`); **konfigurasi teknis stock removal strategy SAP EWM langkah demi langkah** (customizing — artikel teknis tersendiri); **cold chain & CDOB farmasi** (sudah dipegang spoke WMS 2026-07-2-02); **cycle counting / akurasi inventaris**. Biarkan sibling mengambil sudut "metode rata-rata tertimbang: rumus + contoh" atau "FEFO di apotek/rumah sakit: kepatuhan & praktik".

## Format overrides (batch 2026-10)

Berlaku untuk artikel ini (override `style_guide.md`; sumber: `conditional/2026-10/style_addendum.md`):

- **Panjang body 1000–1200 kata, target ~1100** (frontmatter `target_word_count: 1100`). <1000 = terlalu tipis; >1200 = pangkas. Hitung via konvensi *cleaned-prose* (`tools/count_words.py`) — jangan vonis dari hitung mentah.
- **ZERO image placeholder** — DILARANG `{IMAGE_NN}`; tidak ada `images.json` / image-planner. Konsep visual (perbedaan 3 metode) disampaikan lewat **tabel** + list bertahap.
- **Definisi HANYA SEKALI** — di definition snippet ("Ringkasnya:" 40–60 kata setelah lead). Body/H2/FAQ DILARANG mengulang definisi snippet; tidak ada H2 "Apa itu FIFO/LIFO/FEFO" (sudah di snippet) — H2-1 langsung ke **perbedaan** (info baru: dasar urutan + tabel).
- **4 H2**: ≥1 question-format (H2-1 & H2-3), ≥1 praktis/terstruktur dengan tabel/angka (H2-1 tabel, H2-2 panduan + contoh). Jawaban langsung 40–60 kata setelah tiap H2 (poin baru), ≥5 angka spesifik inline.
- **FAQ 3–5 Q&A**, jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka.
- **Internal link TEPAT 2**: 1 own-hub (`.../blog/konsep-warehouse-management-system-yang-wajib-anda-tahu`) + 1 cousin (`.../blog/migrasi-erp-ke-cloud`). TANPA link ketiga, TANPA "BACA JUGA".
- **Sitasi eksternal otoritatif 1–2** inline (SAP Learning stock removal strategy + PSAK/IAS 2; UU PPh opsional).
- **Soltius maks 2 self-mention**: 1 positioning line di `## Kesimpulan` + 1 soft website CTA (soltius.co.id) sebagai **baris terakhir**. Soltius = implementator/pendamping SAP (bukan pembuat, bukan vendor WMS). CTA anchor = SAP EWM (Extended Warehouse Management) → fungsi stock removal strategy.
- **Anti-AI (style_guide §5)**: variasikan panjang paragraf (burstiness CV ≥0,30), tanpa pembuka klise ("Di era digital…"), em-dash ≤2, jangan tiap H2 → 3 bullet, tanpa adjektiva hype. EYD ("kedaluwarsa", bukan "kadaluarsa"). JANGAN mengarang angka/tanggal/spesifikasi SAP; hal yang perlu dicek (penomoran PSAK 202, bunyi Pasal 10(6) UU PPh, istilah EWM vs classic WM) di-hedge sampai diverifikasi.
- **Meta block lengkap** (saran — editor finalisasi):
  - `meta_title`: "FIFO, LIFO, FEFO: Perbedaan Metode Manajemen Stok" (49 char, keyword di depan)
  - `meta_description`: "FIFO, LIFO, dan FEFO adalah metode rotasi stok penentu barang mana keluar dulu. Pahami perbedaannya, kapan dipakai, dan kenapa LIFO dilarang di akuntansi." (152 char)
  - `slug`: "fifo-lifo-fefo" (keyword-led, ≤60; varian deskriptif: "fifo-lifo-fefo-perbedaan-metode-manajemen-stok")
  - `secondary_keywords`: ["perbedaan fifo dan lifo","first in first out","last in first out","first expired first out","metode penilaian persediaan","metode rotasi stok","rata-rata tertimbang","harga pokok penjualan","PSAK 14","SAP Extended Warehouse Management (EWM)"]
  - `publish_month`: "2026-10"
