---
brief_id: "warehouse-management-system-01"
researcher_run_date: "2026-10-07"
sources_cited: 9
flags: 6
---

# Research Dossier: Strategi Picking Gudang: Wave, Batch, Zone, atau Cluster, Mana yang Tepat?

## TL;DR for the writer

- **Picking adalah aktivitas termahal di gudang karena travel/perjalanan menyita ~50% (hingga 55%) dari total waktu order picking** — ini angka klasik literatur logistik (Tompkins; dikonfirmasi ulang di proceedings Winter Simulation Conference 2017), bukan mitos. Gunakan sebagai pembuka "mengapa metode picking penting", tapi labeli sebagai temuan literatur/acuan praktik, bukan data Indonesia.
- **Ada lima metode inti: discrete/order, batch, zone, cluster, wave — plus waveless/order-streaming sebagai varian modern.** Semuanya nyata dan diakui vendor logistik; tidak ada satu "pemenang" universal, pilihannya bergantung pada profil order (lines/order, SKU/order, volume & pola harian). Tulis sebagai kerangka keputusan, bukan ranking.
- **SAP Extended Warehouse Management (EWM) benar-benar mengeksekusi semua ini**: wave management (lewat *wave template* dengan atribut *release method*: Automatic / Immediate / Manual), penentuan pick path lewat storage-type search sequence, dan interleaving tugas lewat resource/queue management. Ini terverifikasi di help.sap.com & learning.sap.com.
- **Kartu kredibilitas SAP yang paling kuat & terverifikasi: SAP = Leader di 2026 Gartner Magic Quadrant for Warehouse Management Systems (terbit 4 Mei 2026, ke-12 kali berturut-turut).** URL pasti ada di bawah. Pakai sekali saja, jangan diulang.
- **Pick-by-voice & pick-to-light: hati-hati.** Pick-by-voice didukung di EWM (framework speech native + banyak dipakai lewat solusi mitra bersertifikat). Pick-to-light pada dasarnya add-on perangkat keras dari mitra, bukan fungsi native SAP. Frasa harus: "didukung EWM (sebagian via solusi mitra)", bukan "fitur bawaan SAP".

## Core facts (verified)

> **Claim**: Perjalanan (travel) adalah komponen terbesar waktu order picking.
> **Number/specific**: ~50% dari total waktu order picking dihabiskan untuk berjalan; satu rincian klasik membaginya menjadi Travelling 55%, Searching 15%, Extracting 10%, Other 20%.
> **Source**: Proceedings of the 2017 Winter Simulation Conference (informs-sim.org/wsc17papers), merujuk klasifikasi Tompkins et al.; dikonfirmasi silang oleh literatur routing order-picking (sv-jme.eu).
> **Confidence**: high (temuan konsisten lintas literatur logistik; namun ini angka studi/rule-of-thumb internasional, bukan data gudang Indonesia).

> **Claim**: Metode picking inti di gudang.
> **Number/specific**: Lima metode — discrete/order picking, batch picking, zone picking, cluster picking, wave picking — ditambah waveless/order-streaming sebagai varian modern (WMS melepas tugas terus-menerus tanpa membentuk gelombang terjadwal).
> **Source**: leafio.ai, conveyco.com, storefeeder.com (vendor logistik; cukup untuk definisi metode, bukan untuk klaim SAP).
> **Confidence**: high (klasifikasi umum & stabil di industri).

> **Claim**: Tidak ada metode picking "tercepat" universal; pilihan bergantung profil order.
> **Number/specific**: Parameter penentu: jumlah lines per order, jumlah SKU per order, volume order harian, dan pola permintaan (B2C order kecil banyak vs B2B order besar sedikit). Hibrida umum: batched-cluster untuk B2C + timed-wave untuk B2B di gudang yang sama.
> **Source**: conveyco.com, storefeeder.com; selaras dengan prinsip EWM wave/activity area.
> **Confidence**: high.

> **Claim**: SAP EWM menyediakan wave management untuk mengelompokkan & melepas tugas picking.
> **Number/specific**: *Wave* mengelompokkan item warehouse request untuk diproses bersama; *wave template* adalah skema yang mendefinisikan atribut semua wave yang dibentuk darinya dan menjadi basis *automatic wave assignment*.
> **Source**: SAP Help Portal — "Wave Template" & "Automatic Wave Assignment" (help.sap.com); SAP Learning — "Combining Items in Waves" / "Applying Wave Management" (learning.sap.com), diakses 2026-10-07.
> **Confidence**: high.

> **Claim**: Metode pelepasan (release method) wave di SAP EWM.
> **Number/specific**: Atribut *release method* pada wave template punya tiga nilai — **Automatic** (EWM menjalankan job yang melepas wave otomatis pada hari & jam rilis), **Immediate** (wave dilepas begitu dibuat), **Manual** (dilepas kapan saja lewat monitor/wave processing).
> **Source**: SAP Learning — Resource Management in SAP EWM / "Combining Items in Waves"; SAP Help Portal "Wave Template" (help.sap.com), diakses 2026-10-07.
> **Confidence**: high.

> **Claim**: SAP EWM menentukan rute/pick path, bukan picker menebak sendiri.
> **Number/specific**: EWM menyusun urutan pengambilan lewat *storage-type search sequence* dan aturan sorting storage bin (penentuan bin per process/stock type), sehingga tugas disusun untuk meminimalkan tempuh.
> **Source**: learning.sap.com (EWM putaway/picking bin determination); research cache SERP (4flow.com, sap-press.com).
> **Confidence**: medium (konsep terverifikasi; penamaan modul persis bervariasi antar rilis — hindari mengklaim nama transaksi spesifik).

> **Claim**: SAP EWM mendukung task interleaving (menyisipkan tugas putaway di antara tugas picking).
> **Number/specific**: Lewat resource management/RF, sebuah resource menyelesaikan warehouse task dari satu queue lalu tugas berikutnya diambil dari queue lain sesuai urutan queue yang dikonfigurasi — efeknya mengurangi deadhead travel (perjalanan kosong).
> **Source**: SAP community/EWM resource management (groups.community.sap.com); research cache.
> **Confidence**: medium (konsep & mekanisme queue terverifikasi; apakah SAP memakai label persis "task interleaving" sebagai istilah resmi UI kurang pasti — lihat Flags).

> **Claim**: SAP EWM mendukung pick confirmation via RF scanner, pick-by-voice, dan pick-to-light.
> **Number/specific**: RF/scanner adalah mode konfirmasi standar. Pick-by-voice didukung (framework speech di EWM; implementasi umum lewat solusi mitra bersertifikat, mis. Ivanti/Speakeasy terdaftar sebagai partner voice-enablement SAP). Pick-to-light pada dasarnya add-on perangkat keras dari mitra, diintegrasikan ke EWM, bukan fungsi native SAP.
> **Source**: sap.com partner page "Voice-Enabled Material Picking Solution for SAP EWM" (Ivanti Speakeasy); blogs.sap.com "Setting up Pick by Voice in EWM" (2022).
> **Confidence**: medium (lihat Flags — jangan sebut pick-to-light "fitur bawaan SAP").

> **Claim**: SAP EWM menangani seluruh alur outbound termasuk packing, cartonization, dan VAS.
> **Number/specific**: EWM mendukung picking, packing lewat *packaging specifications* (dasar cartonization/pemilihan kemasan), value added services (VAS), Process-Oriented Storage Control (POSC) untuk alur multi-langkah, serta work center (deconsolidation, QI, packing, VAS).
> **Source**: learning.sap.com; sap-press.com; 4flow.com (research cache 2026-10-07).
> **Confidence**: high (relevan sebagai konteks eksekusi; detail cartonization bisa diperdalam di artikel packing sibling).

> **Claim**: SAP diakui sebagai Leader di Gartner Magic Quadrant for Warehouse Management Systems 2026.
> **Number/specific**: Artikel "SAP Recognized as a Leader in the 2026 Gartner® Magic Quadrant™ for Warehouse Management Systems", terbit **4 Mei 2026**; ke-**12 kali berturut-turut** sebagai Leader; EWM melayani pelanggan di **24 industri**, mendukung SAP ERP & S/4HANA serta lingkungan non-SAP.
> **Source**: news.sap.com — https://news.sap.com/?p=242340 (diakses 2026-10-07).
> **Confidence**: high (dikonfirmasi langsung via WebFetch halaman SAP).

> **Claim**: Akurasi picking, bukan hanya kecepatan, adalah tujuan metode picking.
> **Number/specific**: Trade-off inti: metode yang mengelompokkan banyak order (batch/cluster) menaikkan throughput tapi menambah risiko salah sortir ke order yang keliru; mitigasinya adalah konfirmasi per unit (scan/voice/light) dan slotting yang benar.
> **Source**: conveyco.com; prinsip pick confirmation EWM (learning.sap.com).
> **Confidence**: high (prinsip operasional baku).

> **Claim**: Metode picking adalah leverage termurah sebelum otomasi.
> **Number/specific**: Karena travel menyita ~50% waktu, menata metode + slotting dapat memangkas waktu tempuh signifikan (acuan praktik industri 20–40%; optimasi layout bahkan diklaim hingga 50% di beberapa kasus) tanpa belanja robot.
> **Source**: bluelinkerp.com; supplychain247.com; literatur routing (sv-jme.eu).
> **Confidence**: medium (angka pemangkasan adalah rentang acuan/potensi, bukan garansi — labeli sebagai acuan, lihat Flags).

> **Claim**: Konteks pasar Indonesia — permintaan WMS/efisiensi picking naik struktural seiring lonjakan e-commerce.
> **Number/specific**: Harbolnas 2024 (10–16 Des) membukukan transaksi Rp31,2 triliun (+21,4% YoY dari Rp25,7 triliun pada 2023), 98 juta pelanggan, dengan volume order 5–10x hari normal.
> **Source**: Kemendag via Katadata/Antara (Des 2024) (research cache 2026-10-07).
> **Confidence**: medium (angka dari liputan media atas rilis Kemendag; pakai dengan atribusi "menurut Kemendag").

> **Claim**: Soltius kredibel mendampingi konfigurasi strategi picking/wave di SAP EWM.
> **Number/specific**: PT Soltius Indonesia — SAP Platinum Certified Channel Partner & Value Added Reseller, anggota United VARs, berpengalaman sejak 1998, bagian dari Metrodata Group, dengan pengalaman industri distribusi & retail.
> **Source**: knowledge_base/company_profile.md (pre-approved).
> **Confidence**: high.

## Solution focus + Soltius anchor (derived from brief + keywords.md; WMS is a monthly keyword, not in product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Metode picking vendor-netral (discrete/batch/zone/cluster/wave + waveless) | Lima metode + varian modern; tidak ada pemenang universal; pilihan by profil order | H2 #2, #3, #4 | — (body vendor-netral) |
| SAP EWM wave management | Wave template; release method Automatic/Immediate/Manual; automatic wave assignment | H2 #5 | — |
| SAP EWM pick path & task interleaving | Storage-type search sequence; resource/queue management untuk interleaving | H2 #5 | — |
| Pick confirmation (RF / voice / light) | RF native; voice via framework + mitra; light = add-on mitra | H2 #5 | — |
| SAP sebagai Leader Gartner MQ WMS 2026 | 4 Mei 2026, ke-12 berturut-turut, 24 industri | closing (kredibilitas) | Implementation + SAP Platinum Partner via United VARs |

**Soltius anchor (CTA, closing)**: Implementation + **SAP Platinum Partner via United VARs** — "Sebagai SAP Platinum Partner melalui United VARs, Soltius mendampingi perusahaan mengonfigurasi wave management dan strategi picking di SAP EWM lintas industri distribusi dan retail."
**Opsional 1 mid-article aside (H2 #5)**: satu kalimat pengalaman lapangan — "dalam praktik implementasi EWM, aturan pelepasan wave disetel per gelombang kerja (shift) dan cut-off kurir, bukan sekadar default." (bukan iklan).
Reminder: Soltius **mengimplementasikan/mengonfigurasi/mendukung** EWM — tidak membangunnya. Maks 2–3 self-mention. Jangan superlatif ("terbaik/nomor satu").

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP News — "SAP Recognized as a Leader in the 2026 Gartner® Magic Quadrant™ for Warehouse Management Systems" (4 Mei 2026)** — https://news.sap.com/?p=242340 — *what it backs*: SAP EWM sebagai Leader WMS, ke-12 kali, 24 industri. (Authority tertinggi untuk klaim WMS SAP.)
2. **SAP Learning / SAP Help Portal — Wave Management di SAP EWM** — https://learning.sap.com/courses/resource-management-in-sap-ewm/combining-items-in-waves dan https://help.sap.com/doc/b4cecb53ad377114e10000000a174cb4/ (Wave Template) — *what it backs*: wave template, release method, automatic wave assignment.
3. **(Pendukung, non-SAP) Proceedings of the 2017 Winter Simulation Conference** — https://www.informs-sim.org/wsc17papers/includes/files/263.pdf — *what it backs*: travel ~50% dari waktu order picking (acuan literatur, bukan data Indonesia).

Prioritas tautan keluar untuk writer: pakai #1 (SAP official) + #2 (SAP official) sebagai dua sumber otoritatif wajib; #3 sebagai penguat angka travel-time bila dibutuhkan.

## FAQ Q&As (7 drafted, Bahasa Indonesia — reuse PAA brief)

### Apa metode picking tercepat?
Tidak ada satu metode "tercepat" untuk semua gudang. Kecepatan efektif bergantung pada profil order: untuk banyak order kecil B2C, batch atau cluster picking biasanya paling produktif karena satu perjalanan melayani banyak order; untuk order besar B2B dengan banyak baris, zone atau wave picking lebih unggul. Patokannya bukan metode, melainkan kecocokan metode dengan jumlah lines/order dan volume harian Anda.

### Apa itu cluster picking?
Cluster picking adalah metode di mana satu picker mengambil untuk beberapa order sekaligus dalam satu kali jalan, lalu langsung memilahnya ke wadah/tote terpisah per order di trolinya. Berbeda dari batch picking yang menunda pemilahan, cluster memilah saat pengambilan. Metode ini efektif untuk order e-commerce berjumlah baris sedikit tapi bervolume tinggi, karena memangkas perjalanan tanpa langkah sortir terpisah.

### Kapan wave picking tidak cocok?
Wave picking kurang cocok saat order harus keluar secepat mungkin tanpa menunggu gelombang terbentuk — misalnya fulfillment same-day atau order prioritas yang datang sporadis. Membentuk dan menunggu wave menambah latensi. Dalam kondisi ini, waveless picking (order streaming) yang melepas tugas terus-menerus, atau discrete picking untuk order mendesak, lebih tepat daripada menahan order demi efisiensi gelombang.

### Apakah WMS wajib untuk batch picking?
Secara teknis batch picking bisa dijalankan manual, tapi tanpa WMS ia rapuh: pengelompokan order, penentuan rute, dan pemilahan kembali ke order yang benar rawan salah saat volume naik. WMS seperti SAP EWM mengotomatiskan pembentukan batch, menyusun pick path, dan mengikat setiap unit ke order lewat konfirmasi scan/voice — sehingga kecepatan batch tidak dibayar dengan lonjakan error.

### Apa itu waveless picking?
Waveless picking (order streaming) adalah pendekatan di mana WMS melepas tugas picking secara terus-menerus begitu order masuk, tanpa menunggu pembentukan gelombang (wave) terjadwal. Tujuannya menjaga picker selalu sibuk dan memangkas latensi order, cocok untuk operasi e-commerce bervolume tinggi yang butuh fleksibilitas. Ia menukar keteraturan gelombang dengan responsivitas real-time.

### Berapa persen waktu picker habis untuk berjalan?
Menurut literatur logistik klasik, perjalanan (travel) menyita sekitar 50% — bahkan hingga 55% dalam sebagian studi — dari total waktu order picking, sementara sisanya terbagi untuk mencari, mengambil, dan aktivitas lain. Karena perjalanan tidak menambah nilai, inilah target pertama efisiensi: menata metode picking dan slotting sebelum berinvestasi pada otomasi. Angka ini acuan internasional, bukan data khusus Indonesia.

### Apakah SAP EWM mendukung semua metode picking ini?
Ya. SAP Extended Warehouse Management (EWM) mendukung strategi discrete, batch, cluster, zone, dan wave, termasuk wave management lewat wave template dengan metode pelepasan otomatis, langsung, atau manual. EWM juga menyusun pick path, menyisipkan tugas (interleaving) via manajemen resource, dan mengonfirmasi pengambilan lewat RF scanner atau pick-by-voice. SAP dinobatkan Leader di Gartner Magic Quadrant for WMS 2026.

## Data tables for the writer

### Perbandingan metode picking (draft — writer boleh rapikan)
| Metode | Mekanisme inti | Cocok untuk profil order | Trade-off | Kebutuhan sistem |
|---|---|---|---|---|
| Discrete / order | Satu picker menyelesaikan satu order per jalan | Order besar/jarang; gudang kecil | Paling banyak travel per unit; akurasi tinggi | Minimal; bisa manual |
| Batch | Banyak order diambil sekaligus, dipilah belakangan | Banyak order kecil, SKU beririsan | Hemat travel; butuh langkah sortir & rawan salah order | WMS untuk batch & sortir |
| Cluster | Banyak order diambil + dipilah ke tote per order saat jalan | Order e-com baris sedikit, volume tinggi | Hemat travel tanpa sortir terpisah; tote terbatas | WMS + trolley multi-tote |
| Zone | Picker tetap di zona; order berpindah antar zona | SKU banyak, gudang luas | Spesialisasi zona; butuh konsolidasi antar zona | WMS zone + konsolidasi |
| Wave | Order dikelompokkan & dilepas per gelombang terjadwal | Sinkron dengan cut-off kurir/shift | Efisien terjadwal; menambah latensi per order | WMS wave management |
| Waveless (order streaming) | Tugas dilepas terus-menerus tanpa gelombang | E-com volume tinggi, butuh responsif | Picker selalu sibuk; kurang "terjadwal" | WMS dengan order streaming |

### Bagaimana SAP EWM mengeksekusi (draft)
| Kapabilitas EWM | Apa yang dilakukan | Catatan akurasi |
|---|---|---|
| Wave management | Bentuk & lepas wave via wave template | Release method: Automatic / Immediate / Manual |
| Pick path | Urutan ambil via storage-type search sequence / sorting bin | Nama transaksi bervariasi antar rilis — jangan kunci nama persis |
| Task interleaving | Sisipkan putaway di sela picking via queue sequence | "Task interleaving" istilah umum; SAP via resource/queue mgmt |
| Pick confirmation | RF scanner (native), pick-by-voice (framework + mitra), pick-to-light (add-on mitra) | Jangan sebut light "fitur bawaan SAP" |

## Edge cases & nuance

- **"Ganti metode" ≠ "benahi akar masalah".** Jika akurasi jeblok karena master data (dimensi/berat SKU salah) atau slotting buruk, mengganti metode picking justru memperbesar error. Urutan benar: benahi data → slotting → metode → baru otomasi. (Ini inti H2 #6 yang "jujur/counter-conventional".)
- **Hibrida itu normal, bukan kompromi.** Satu gudang lazim memakai batched-cluster untuk kanal B2C dan timed-wave untuk B2B/wholesale secara bersamaan — EWM mendukung ini lewat activity area & wave template berbeda per alur.
- **Kecepatan vs akurasi.** Batch/cluster menaikkan throughput tapi menambah titik salah-sortir; konfirmasi per unit (scan/voice/light) adalah pengaman, bukan opsi.
- **Angka travel-time bersifat literatur internasional.** Jangan sajikan ~50% sebagai fakta gudang Indonesia; frasa "menurut literatur logistik / sebagai acuan praktik".
- **Pick-to-light bukan native SAP.** Ia add-on perangkat keras mitra yang diintegrasikan ke EWM — penting agar writer tidak salah mengklaim.

## Flags (open factual risk)

- ⚠️ **Pick-to-light native vs mitra**: pick-to-light adalah add-on perangkat keras mitra yang diintegrasikan ke EWM, BUKAN fungsi native SAP; pick-by-voice didukung (framework speech) tapi implementasi umum lewat solusi mitra bersertifikat. → **Rekomendasi**: frasa "EWM mendukung konfirmasi via RF, pick-by-voice, dan integrasi pick-to-light (sebagian lewat solusi mitra)", jangan "fitur bawaan SAP".
- ⚠️ **Istilah "task interleaving"**: mekanisme menyisipkan putaway di sela picking terverifikasi (via resource/queue management EWM), tapi apakah "task interleaving" adalah label UI/istilah resmi SAP persis kurang pasti. → **Rekomendasi**: sebut sebagai konsep ("interleaving tugas") lalu jelaskan EWM mewujudkannya lewat manajemen resource/queue; hindari mengutip nama transaksi/field spesifik.
- ⚠️ **Nama persis mekanisme pick path**: konsep storage-type search sequence/sorting bin benar, tapi penamaan & path konfigurasi bervariasi antar rilis EWM (embedded di S/4HANA vs decentralized vs Cloud). → **Rekomendasi**: jelaskan secara fungsional, jangan klaim nama transaksi tunggal.
- ⚠️ **Angka travel ~50–55%**: temuan literatur logistik internasional (Tompkins; WSC 2017), bukan studi gudang Indonesia. → **Rekomendasi**: atribusikan sebagai "literatur logistik/acuan", jangan sajikan sebagai data lokal atau sebagai janji.
- ⚠️ **Pemangkasan travel 20–40% (atau "hingga 50%")**: rentang potensi/acuan praktik industri, bukan garansi hasil. → **Rekomendasi**: labeli "berpotensi/acuan", hindari janji numerik pasti.
- ⚠️ **Angka Harbolnas 2024 (Rp31,2 T, +21,4%, 98 juta pelanggan, 5–10x)**: dari liputan media (Katadata/Antara) atas rilis Kemendag, belum diverifikasi ke sumber primer BPS/Kemendag langsung. → **Rekomendasi**: opsional, atribusikan "menurut Kemendag (via pemberitaan)"; aman sebagai konteks makro, bukan klaim inti.

## Definition snippet draft (40–60 words)

> **Strategi picking** adalah metode mengatur urutan dan pengelompokan pengambilan barang di gudang agar waktu tempuh picker dan tingkat kesalahan seminimal mungkin. Pilihan utamanya — discrete, batch, zone, cluster, dan wave (plus waveless) — dipilih berdasarkan profil order, karena perjalanan picker menyita sekitar separuh total waktu picking menurut literatur logistik.
