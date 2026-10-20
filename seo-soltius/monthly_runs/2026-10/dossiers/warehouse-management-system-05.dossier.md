---
brief_id: "warehouse-management-system-05"
researcher_run_date: "2026-10-07"
sources_cited: 9
flags: 5
---

# Research Dossier: Packing, Cartonization, dan Value Added Services — Sisi Gudang yang Terlupakan

## TL;DR for the writer

- **Cartonization, VAS, work center, deconsolidation, dan POSC semuanya fitur resmi SAP EWM** — bukan istilah karangan. SAP Learning (learning.sap.com) secara eksplisit mendefinisikan cartonization planning sebagai optimasi pengepakan *shipping handling units* berbasis *product master data*, dan VAS sebagai layanan gudang (assembling, packing, labeling, oiling) yang dikendalikan lewat **VAS order**. Tulis dengan percaya diri, tapi jangan mengarang nama transaksi/konfigurasi.
- **Benang merah teknis**: *packaging specification* adalah fondasinya. Objek data yang sama memberi tahu sistem cara memilih kardus (cartonization) **dan** langkah VAS apa yang harus dilakukan operator. Ini insight yang bagus untuk artikel: satu master data, dua manfaat.
- **Dimensional/volumetric weight adalah angka nyata yang bisa dihitung**: `(P × L × T) / pembagi`. Pembagi bervariasi per ekspedisi (5000 untuk DHL/FedEx/UPS standar cm/kg; 6000 lazim untuk kurir darat/ekonomi termasuk kurir domestik Indonesia seperti J&T). Ekspedisi menagih **yang lebih besar** antara berat aktual vs volumetrik. Labeli pembagi sebagai contoh, bukan konstanta universal.
- **Penghematan ongkos/void-fill harus diframe sebagai estimasi industri**, bukan angka pasti. Jangan tulis "hemat 30%" tanpa sumber; tulis mekanismenya (right-sizing menurunkan berat volumetrik → menurunkan tarif).
- **Soltius = partner implementasi** yang mengonfigurasi packaging spec/VAS/work center EWM; tidak membangun EWM. Maksimal 2–3 self-mention, idealnya di closing. Anchor kredibilitas: SAP Platinum Partner via United VARs + pengalaman industri Retail/Distribusi/Logistik.

## Core facts (verified)

> **Claim**: Cartonization planning adalah fitur SAP EWM untuk mengoptimalkan pengepakan sebelum picking fisik dimulai.
> **Number/specific**: SAP mendefinisikannya sebagai proses untuk "optimize the packing of shipping handling units (HUs) based on information from product master data and outbound delivery orders" — menentukan jumlah, ukuran, dan jenis HU yang optimal.
> **Source**: SAP Learning, "Planning Cartonization" (learning.sap.com, advanced-customizing-in-sap-s-4hana-ewm), diakses 2026-10-07
> **Confidence**: high

> **Claim**: Algoritma cartonization standar SAP memilih kemasan dengan meminimalkan jumlah HU berdasarkan berat, volume, dan (opsional) dimensi.
> **Number/specific**: Algoritma default **SAP1** bekerja dengan "minimizing the number of HUs by checking the weight, the volume and optionally the dimensions"; fitur *dimension check* memeriksa panjang, lebar, dan tinggi item delivery terhadap packaging material.
> **Source**: SAP Learning, "Planning Cartonization" (learning.sap.com), diakses 2026-10-07
> **Confidence**: high

> **Claim**: Packaging specification adalah master data yang mendasari penentuan kemasan di banyak proses EWM, termasuk cartonization.
> **Number/specific**: Packaging specification digunakan untuk automatic packing di inbound delivery, penentuan packaging material untuk Pick HU saat *warehouse order creation*, penentuan material saat outbound delivery, palletization, dan cartonization planning. Strukturnya berjenjang: header → contents → level → element type.
> **Source**: SAP Learning, "Creating Packaging Specifications" (learning.sap.com, basic-customizing-in-sap-s-4hana-ewm); SAP Community, "Packaging Specification in Embedded EWM", diakses 2026-10-07
> **Confidence**: high (konsep & peran); medium untuk detail struktur multi-level (sebagian dari blog SAP Community, bukan dokumentasi inti)

> **Claim**: Value-added services (VAS) di EWM adalah layanan atas produk yang dilakukan di gudang.
> **Number/specific**: SAP menyebut aktivitas VAS mencakup "Assembling products, Packing products, Labeling products, Oiling products" — umumnya sebelum putaway akhir atau goods staging.
> **Source**: SAP Learning, "Applying Value-Added Services" (learning.sap.com, processes-in-sap-s-4hana-ewm), diakses 2026-10-07
> **Confidence**: high

> **Claim**: VAS dikendalikan oleh dokumen VAS order di EWM.
> **Number/specific**: VAS order adalah "the central SAP EWM document that controls the VAS process"; secara teknis berupa *packaging specification with characteristic values*, menautkan delivery item ke *packing instruction*. Berisi order header, daftar aktivitas VAS, items, dan auxiliary products.
> **Source**: SAP Learning, "Applying Value-Added Services"; SAP Community, "Value-Added Services (VAS) in SAP EWM", diakses 2026-10-07
> **Confidence**: high

> **Claim**: Packaging specification "memberi instruksi" ke VAS order mengenai langkah yang harus dikerjakan operator.
> **Number/specific**: SAP: packaging specification "uses packaging specification levels to inform the VAS order regarding VAS activities the warehouse employees need to perform". Ini kaitan langsung master-data → instruksi kerja.
> **Source**: SAP Learning, "Applying Value-Added Services" (learning.sap.com), diakses 2026-10-07
> **Confidence**: high

> **Claim**: VAS dilakukan di *work center* khusus, dan konsumsi material pendukung bisa dicatat di sana.
> **Number/specific**: Aktivitas VAS dikerjakan di work center yang dirancang khusus (VAS work center); konsumsi auxiliary product (packaging material, label, shrink wrap) dapat dicatat saat work center dikonfigurasi dengan storage bin yang ditetapkan.
> **Source**: SAP Learning, "Applying Value-Added Services" / "Setting Up Value-Added Services" (learning.sap.com), diakses 2026-10-07
> **Confidence**: high

> **Claim**: Kitting adalah contoh penerapan VAS di EWM.
> **Number/specific**: SAP: komponen kit "picked and assembled into the finished kits" melalui proses *kit-to-order* atau *kit-to-stock*.
> **Source**: SAP Learning, "Applying Value-Added Services" (learning.sap.com), diakses 2026-10-07
> **Confidence**: high

> **Claim**: Process-Oriented Storage Control (POSC) mengurutkan langkah penanganan multi-step di gudang, termasuk VAS dan deconsolidation.
> **Number/specific**: Langkah inbound POSC mencakup unloading, counting, **deconsolidation**, quality inspection, **value added services (VAS)**, dan putaway — dijalankan sebagai gerakan multi-step yang terarah.
> **Source**: SAP Learning, "Configuring Process-Oriented Storage Control" (learning.sap.com, basic-customizing-in-sap-s-4hana-ewm); SAP Community, "Complex Inbound Process with SAP EWM: POSC, LOSC & Quality Integration", diakses 2026-10-07
> **Confidence**: high

> **Claim**: Deconsolidation work center adalah tempat HU campuran/besar dipecah menjadi HU kecil sebelum putaway — "sisi lain" dari packing di inbound.
> **Number/specific**: Deconsolidation work center adalah tempat mixed/single/large material HU "broken into small HUs before final putaway"; sistem mengarahkan ke sana secara otomatis bila produk punya *activity area* berbeda atau *consolidation group* berbeda.
> **Source**: SAP Community, "SAP EWM - Deconsolidation process" / "Inbound Process-Oriented storage control (POSC) Deconsolidation"; SAP Learning POSC course, diakses 2026-10-07
> **Confidence**: high (konsep & penentuan work center)

> **Claim**: Dimensional/volumetric weight dihitung dari dimensi paket dibagi faktor ekspedisi.
> **Number/specific**: Rumus umum: `Berat Volumetrik = (Panjang × Lebar × Tinggi) ÷ pembagi`. Pembagi lazim: 5000 (cm/kg, standar DHL/FedEx/UPS), 6000 (IATA air freight & umumnya darat/ekonomi), 3000 (express/udara cepat). Contoh: 50×40×30 cm ÷ 6000 = 10 kg volumetrik.
> **Source**: panduan logistik ekspedisi (ringkasan praktik DHL/FedEx/UPS/IATA); DHL Indonesia, "Decoding shipping costs: actual weight vs volumetric weight" (dhl.com/discover/id-id), diakses 2026-10-07
> **Confidence**: high (rumus & mekanisme); medium untuk nilai pembagi (berbeda per ekspedisi & bisa berubah — wajib dilabeli contoh)

> **Claim**: Ekspedisi menagih berdasarkan berat yang lebih besar antara aktual dan volumetrik.
> **Number/specific**: "The shipping cost is determined by the higher value between the actual weight and the volumetric weight." Implikasi: kardus kebesaran membuat perusahaan membayar untuk mengirim udara (void).
> **Source**: panduan logistik ekspedisi; DHL Indonesia (dhl.com/discover/id-id), diakses 2026-10-07
> **Confidence**: high

> **Claim**: Di Indonesia, kurir domestik umumnya memakai pembagi ~6000 dan membandingkan volumetrik vs aktual.
> **Number/specific**: Untuk J&T Express, faktor volumetrik biasanya ~6000 (dapat berubah); kurir membandingkan berat volumetrik dan aktual lalu memakai yang lebih besar.
> **Source**: panduan ekspedisi Indonesia (praktik J&T/JNE); DHL Indonesia (dhl.com/discover/id-id), diakses 2026-10-07
> **Confidence**: medium (pembagi kurir dapat berubah; perlakukan sebagai contoh, bukan tarif resmi terkini)

> **Claim**: Soltius adalah SAP Platinum Partner yang mengimplementasikan (bukan membangun) SAP, dengan pengalaman industri relevan.
> **Number/specific**: SAP Platinum Certified Channel Partner & VAR via United VARs; berdiri 1998; bagian Metrodata Group (sejak 2008); 200+ konsultan, 120+ klien; layanan Implementation (termasuk konfigurasi) di industri Retail, Wholesale Distribution, dan Transportation & Logistics.
> **Source**: `knowledge_base/company_profile.md` + `product_matrix.md` (pre-approved)
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md)

> Catatan: "warehouse management system" adalah **keyword baru** (tidak ada baris di `product_matrix.md`, yang berisi 6 keyword set 2026-06). Pemetaan diturunkan dari brief + `keywords.md` + riset. Aturan universal (blacklist, "implements not builds", ≤3 mention, no superlatives) tetap berlaku.

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP EWM — packaging specification** (fondasi cartonization) | Master data berjenjang (header→contents→level); menentukan material untuk cartonization, auto-packing inbound, pick HU, palletization | H2 #1–#2 | — (edukatif) |
| **Cartonization planning** | Algoritma SAP1 meminimalkan jumlah HU via berat+volume+(opsional dimensi); butuh master data dimensi akurat | H2 #2 | — (edukatif) |
| **VAS (value added services) + VAS order + VAS work center** | Assembling/packing/labeling/kitting; dikendalikan VAS order (= packaging spec + characteristic values); konsumsi auxiliary product dicatat di work center | H2 #3–#4 | aside singkat H2 #4 |
| **Work center & POSC** | POSC mengurutkan langkah (deconsolidation, QI, VAS, putaway); work center khusus packing/VAS/deconsolidation | H2 #4 | — (edukatif) |
| **Deconsolidation (inbound)** | HU campuran dipecah jadi HU kecil sebelum putaway; sisi inbound dari "packing" | H2 #4 | — (edukatif) |
| **Soltius anchor** | Implementation / konfigurasi packaging spec, VAS, work center EWM; SAP Platinum Partner via United VARs; pengalaman Retail/Distribusi/Logistik | **closing CTA** | **Implementation + SAP Platinum Partner (United VARs)** |

Reminder: Soltius **mengimplementasikan/mengonfigurasi/mendukung** EWM — tidak membangunnya. Maks 2–3 self-mention; idealnya 1 aside mid-artikel (H2 #4) + 1 closing CTA.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Learning — "Applying Value-Added Services" (SAP S/4HANA EWM), diakses 2026-10-07** — https://learning.sap.com/courses/processes-in-sap-s-4hana-ewm/applying-value-added-services — *what it backs*: definisi VAS, VAS order sebagai dokumen pengendali, kaitan packaging specification → instruksi kerja, kitting sebagai VAS, VAS work center & konsumsi auxiliary product.
2. **SAP Learning — "Planning Cartonization" (SAP S/4HANA EWM), diakses 2026-10-07** — https://learning.sap.com/courses/advanced-customizing-in-sap-s-4hana-ewm/planning-cartonization — *what it backs*: definisi cartonization planning & algoritma SAP1 (minimalkan HU via berat/volume/dimensi), dimension check.
3. **SAP Learning — "Configuring Process-Oriented Storage Control" (SAP S/4HANA EWM), diakses 2026-10-07** — https://learning.sap.com/courses/basic-customizing-in-sap-s-4hana-ewm/configuring-process-oriented-storage-control — *what it backs*: POSC mengurutkan langkah multi-step (deconsolidation, QI, VAS, putaway).
4. **DHL Indonesia — "Decoding shipping costs: actual weight vs volumetric weight", diakses 2026-10-07** — https://www.dhl.com/discover/id-id/logistics-advice/logistics-insights/decoding-shipping-costs-actual-weight-vs-volumetric-weight — *what it backs*: konsep berat volumetrik vs aktual & implikasi ongkos (sumber ekspedisi, bukan kompetitor integrator; berbahasa Indonesia).

Priority: SAP official (learning.sap.com) sebagai sumber utama; DHL sebagai sumber ekspedisi untuk dimensional weight. **Hindari** menautkan ke SAP Community blog di artikel (dipakai untuk konfirmasi internal saja, bukan citation publik) dan ke halaman marketing kompetitor integrator.

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu value added services (VAS) dalam operasi gudang?
Value added services (VAS) adalah layanan bernilai tambah atas produk yang dikerjakan di dalam gudang sebelum barang dikirim atau disimpan — mulai dari pelabelan, pengepakan khusus, perakitan ringan, hingga kitting. Dalam SAP EWM, VAS dikendalikan oleh dokumen *VAS order* dan dikerjakan di *work center* khusus, sehingga instruksi serta konsumsi material seperti label dan shrink wrap tercatat konsisten, bukan sekadar "pekerjaan tambahan" tanpa jejak.

### Apa itu cartonization dan bagaimana WMS memilih ukuran kardus?
Cartonization adalah proses menentukan kombinasi kemasan paling efisien untuk sebuah pesanan. Di SAP EWM, *cartonization planning* mengoptimalkan pembentukan *handling unit* berdasarkan data master produk (berat, volume, dan opsional dimensi). Algoritma standar SAP (SAP1) berusaha meminimalkan jumlah handling unit dengan memeriksa berat dan volume item terhadap kapasitas packaging material, sehingga sistem menyarankan kardus yang pas sebelum picking fisik dimulai.

### Apa itu dimensional weight atau berat volumetrik?
Berat volumetrik (dimensional weight) adalah berat "setara ruang" yang dipakai ekspedisi untuk paket ringan tapi memakan tempat. Rumus umumnya `(Panjang × Lebar × Tinggi) ÷ pembagi`, dengan pembagi berbeda per ekspedisi (misalnya 5000 atau 6000 untuk satuan cm/kg). Ekspedisi menagih berdasarkan nilai yang lebih besar antara berat aktual dan berat volumetrik — itulah sebabnya kardus kebesaran membuat perusahaan membayar untuk "mengirim udara".

### Apa bedanya kitting dan bundling?
Keduanya menggabungkan beberapa item, tetapi tujuannya berbeda. Kitting merakit beberapa komponen menjadi satu unit fungsional dengan identitas/SKU baru (misalnya paket perlengkapan), sering lewat proses *kit-to-order* atau *kit-to-stock* di EWM. Bundling menggabungkan beberapa produk jadi untuk tujuan promosi atau penjualan (misalnya "beli 2 gratis 1") tanpa selalu membentuk SKU baru permanen. Keduanya dapat dikonfigurasi sebagai aktivitas VAS.

### Bagaimana WMS mengurangi ongkos kirim lewat kemasan?
WMS mengurangi ongkos dengan *right-sizing*: lewat cartonization, sistem menyarankan kardus terkecil yang muat sehingga berat volumetrik — dan tarif ekspedisi yang mengikutinya — ikut turun. Kemasan yang pas juga memangkas kebutuhan *void fill* dan menurunkan risiko kerusakan transit serta retur. Besar penghematan bergantung pada profil produk dan tarif ekspedisi, jadi perlakukan angka penghematan sebagai estimasi, bukan jaminan.

### Apakah SAP EWM mendukung packaging specification dan VAS?
Ya. *Packaging specification* adalah master data resmi SAP EWM yang mendasari penentuan kemasan, termasuk cartonization planning, dan sekaligus memberi instruksi langkah VAS ke *VAS order*. Value added services seperti pelabelan, pengepakan, dan kitting dijalankan di *work center* khusus, dan dapat dirangkai bersama langkah lain (deconsolidation, quality inspection, putaway) melalui *Process-Oriented Storage Control* (POSC).

### Kapan perusahaan perlu pack bench yang terstandar?
Pack bench terstandar paling bernilai saat volume pesanan tinggi, variasi SKU besar, atau banyak permintaan VAS ritel (label GS1, bundling, kitting) yang harus konsisten antar operator. Untuk volume kecil dengan variasi rendah, aturan kardus manual plus SOP sering sudah memadai. Cartonization juga menuntut data master dimensi yang akurat — tanpa itu, sarannya meleset (*garbage in, garbage out*).

## Data tables for the writer

### Tabel 1 — Jenis VAS dan kapan dipicu (untuk H2 #3)
| Jenis VAS | Apa yang dikerjakan | Kapan/kanal dominan | Catatan EWM |
|---|---|---|---|
| Labeling / compliance labeling (GS1) | Tempel label harga/barcode/label ritel | Ritel modern, B2B retail compliance | Instruksi dari packaging spec; cetak di work center |
| Bundling / promo | Gabungkan produk untuk promosi | Marketplace & ritel (kampanye) | Dapat dikonfigurasi sebagai aktivitas VAS |
| Kitting / perakitan ringan | Rakit komponen jadi 1 unit (SKU baru) | B2B, e-commerce (paket) | *kit-to-order* / *kit-to-stock* |
| Gift-wrap / re-pack | Bungkus hadiah / kemas ulang | E-commerce D2C, musiman | Konsumsi consumable dicatat |
| Ticketing / tagging ritel | Pasang hangtag/price ticket | Fashion/ritel | Bagian VAS order |

### Tabel 2 — Outbound packing vs inbound deconsolidation (untuk H2 #4)
| Aspek | Outbound: pack bench | Inbound: deconsolidation |
|---|---|---|
| Arah | Barang keluar | Barang masuk |
| Tujuan | Bentuk shipping HU optimal (cartonization), VAS, verifikasi, cetak dokumen | Pecah HU campuran/besar jadi HU kecil sebelum putaway |
| Pemicu work center | POSC / outbound process | POSC; beda activity area / consolidation group |
| Hasil | Paket siap kirim + label carrier | HU rapi siap putaway ke bin |

### Tabel 3 — Contoh pengaruh ukuran kardus ke berat volumetrik (ilustrasi, label estimasi)
| Skenario | Dimensi kardus | Berat volumetrik (÷6000) | Berat aktual isi | Berat ditagih (lebih besar) |
|---|---|---|---|---|
| Kardus kebesaran | 40×30×30 cm | 6,0 kg | 2,0 kg | **6,0 kg** |
| Kardus right-sized | 25×20×15 cm | 1,25 kg | 2,0 kg | **2,0 kg** |

> Catatan untuk writer: Tabel 3 adalah **ilustrasi mekanisme**, bukan tarif nyata. Jelaskan bahwa pembagi (6000) hanya contoh dan berbeda per ekspedisi.

## Edge cases & nuance

- **Cartonization bukan "selalu lebih baik".** Untuk variasi SKU rendah atau produk yang dimensinya seragam, aturan kardus manual + SOP sering lebih murah daripada memelihara algoritma + master data dimensi. Hindari over-engineering.
- **Garbage in, garbage out.** Cartonization 100% bergantung pada akurasi data dimensi/berat di master data. Data buruk → saran kardus salah → operator abaikan sistem. Ini sering jadi akar kegagalan, bukan algoritmanya.
- **VAS menambah langkah = menambah biaya tenaga.** VAS berlebihan (mis. gift-wrap untuk semua order) memperlambat throughput. VAS harus dipicu per order/kanal, bukan default.
- **Deconsolidation = "packing" terbalik di inbound.** Banyak artikel hanya bicara outbound; menyertakan inbound deconsolidation memberi angle yang lebih lengkap dan jarang dibahas di SERP Indonesia.
- **Pembagi volumetrik bukan konstanta.** 5000, 6000, 3000 dipakai ekspedisi berbeda dan dapat berubah; jangan sajikan satu angka seolah universal.
- **Clean core relevan.** Aturan cartonization/VAS yang sangat spesifik perusahaan sebaiknya di-*extend* (mis. via BTP/SAP Build) tanpa memodifikasi inti EWM, agar sistem tetap mudah di-upgrade — sejalan dengan cousin link #1 (clean core) dan #2 (low-code).

## Flags (open factual risk)

- ⚠️ **Nilai pembagi berat volumetrik (5000/6000/3000)**: bervariasi per ekspedisi dan dapat berubah. → *Rekomendasi*: sajikan rumus `(P×L×T)/pembagi` sebagai konsep, beri contoh angka dengan kata "misalnya", dan sarankan pembaca cek tarif ekspedisinya sendiri. Jangan klaim "kurir X memakai 6000" sebagai fakta tetap.
- ⚠️ **Angka penghematan ongkos/void-fill (mis. "hemat 20–30%")**: tidak ada sumber otoritatif tunggal; sangat tergantung profil produk. → *Rekomendasi*: frame sebagai estimasi industri / mekanisme ("menurunkan berat volumetrik sehingga menekan tarif"), bukan persentase pasti.
- ⚠️ **Detail struktur packaging specification multi-level & nama transaksi**: sebagian konfirmasi berasal dari SAP Community (blog member), bukan dokumentasi inti. → *Rekomendasi*: writer cukup menyebut konsep (header→level→element) tanpa mengklaim langkah konfigurasi/nama transaksi spesifik.
- ⚠️ **"Bedanya kitting vs bundling"**: definisi industri agak cair; SAP secara eksplisit mendefinisikan *kitting* (kit-to-order/kit-to-stock) tetapi "bundling" lebih istilah bisnis/promosi. → *Rekomendasi*: writer boleh membedakan keduanya secara konseptual, tapi jangan mengklaim "bundling" sebagai objek/transaksi EWM bernama resmi.
- ⚠️ **Porsi biaya kardus & consumable terhadap total ongkos fulfillment**: brief menyinggih ini; tidak ditemukan satu angka otoritatif yang bisa dikutip aman. → *Rekomendasi*: hindari angka persentase keras; tulis kualitatif ("kardus dan consumable adalah pos biaya yang sering tak terukur").

## Definition snippet draft (40–60 words)

> **Cartonization** adalah proses menentukan ukuran dan jumlah kemasan paling efisien untuk sebuah pesanan sebelum barang dikemas. Dalam sistem WMS seperti SAP EWM, *cartonization planning* menghitung kombinasi *handling unit* optimal berdasarkan berat, volume, dan dimensi produk dari data master — menekan berat volumetrik, pemborosan *void fill*, dan ongkos kirim.

> **(Alternatif — VAS)** **Value added services (VAS)** gudang adalah langkah bernilai tambah atas produk sebelum dikirim — seperti pelabelan, kitting, bundling, dan pengepakan khusus. Dalam SAP EWM, VAS dikendalikan dokumen *VAS order* dan dikerjakan di *work center* khusus, sehingga instruksi kerja dan konsumsi material tercatat konsisten antar operator.
