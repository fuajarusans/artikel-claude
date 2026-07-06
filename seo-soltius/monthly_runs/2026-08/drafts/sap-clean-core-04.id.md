---
title: "Memilih Partner SAP Clean Core: 7 Pertanyaan Kunci"
meta_title: "Partner SAP Clean Core: 7 Pertanyaan Kunci"
meta_description: "Panduan memilih partner SAP Clean Core: 7 pertanyaan wajib, tabel red flag vs green flag, arti tier Platinum, dan kapan partner termurah justru salah."
slug: "memilih-partner-sap-clean-core"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "memilih partner implementasi SAP"
  - "system integrator SAP"
  - "partner clean core S/4HANA"
  - "pertanyaan untuk konsultan SAP"
  - "fit-to-standard"
  - "get clean, stay clean"
  - "SAP Platinum Partner"
  - "remediasi custom code"
  - "Application Management Services (AMS)"
  - "evaluasi vendor SAP"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "platform low-code SAP Build"
external_citations:
  - url: "https://www.techtarget.com/searchsap/feature/SAP-clean-core-approach-changes-game-for-SIs"
    context: "Dampak clean core terhadap peran SI; risiko partner berbasis heavy customization yang menciptakan technical debt"
  - url: "https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/"
    context: "Empat level ekstensi (A–D), ABAP Cloud, side-by-side BTP, strategi ekstensi S/4HANA yang clean-core-compliant"
brief_id: "sap-clean-core-04"
target_word_count: 1650
publish_month: "2026-08"
word_count: 1665
date_modified: "2026-06-08"
---

# Memilih Partner Implementasi SAP untuk Clean Core: Pertanyaan yang Wajib Diajukan

Bayangkan tanda tangan kontrak multi-tahun sudah kering, anggaran sudah disetujui dewan, lalu 18 bulan kemudian tim Anda kembali ke titik awal: inti S/4HANA penuh kustomisasi, upgrade tetap mahal, dan "clean core" cuma jadi judul di slide. Keputusan paling menentukan dalam program clean core sering bukan soal teknologi, melainkan siapa yang Anda pilih untuk mengeksekusinya. Seluruh panduan teknis tentang [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide) menjelaskan *apa* dan *bagaimana*; artikel ini menjawab pertanyaan yang justru paling nyata di benak pembeli: *dengan siapa*. Berikut kerangka objektif untuk menilai partner mana pun, bukan iklan satu vendor.

> **Secara singkat:** Dalam program clean core, partner implementasi SAP berperan menjaga inti S/4HANA tetap standar dan mudah di-upgrade. Tugasnya: men-triase *custom code*, mendorong *fit-to-standard*, menyalurkan kustomisasi ke jalur ekstensi yang aman (in-app, ABAP Cloud, atau *side-by-side* via *released API*), dan menegakkan disiplin "stay clean" setelah *go-live*.

Melalui artikel ini, kita akan membahas tujuh pertanyaan yang wajib diajukan ke calon partner, cara membaca jawaban mereka lewat tabel *red flag* vs *green flag*, arti praktis tier dan sertifikasi SAP, serta kapan partner termurah maupun termahal justru menjadi pilihan yang salah.

{IMAGE_01: Ilustrasi konsep "dirty core di cloud" vs "clean core" — dua sistem S/4HANA berdampingan; kiri inti penuh tambalan kustomisasi merah dengan label "kustomisasi menumpuk", kanan inti standar rapi dengan ekstensi terpisah di luar berlabel "SAP BTP / ABAP Cloud", gaya korporat biru-putih, teks Bahasa Indonesia}

## Mengapa pilihan partner menentukan keberhasilan clean core?

Pilihan partner menentukan hasil karena clean core adalah **disiplin**, bukan sekadar proyek satu kali, dan disiplin itu sebagian besar hidup di tangan tim yang mengeksekusinya. Partner yang menyetujui setiap permintaan kustomisasi demi menyenangkan klien akan menghasilkan *dirty core* yang sekarang kebetulan berada di cloud, bukan clean core sejati.

SAP mendefinisikan clean core sebagai sistem yang sedekat mungkin dengan standar dan menjalankan ekstensi serta integrasi yang *cloud-compliant*, mencakup lima dimensi: Processes, Extensibility, Data, Integrations, dan Operations (SAP). Kelima dimensi itu tidak menegakkan diri sendiri; ada metode di baliknya, dan metode itulah yang Anda beli ketika memilih partner.

Inilah yang sering disalahpahami pembeli. TechTarget mencatat bahwa banyak *system integrator* (SI) besar secara historis berperan sebagai "frenemies": memungkinkan implementasi bermasalah karena *heavy customization* memang model bisnis yang menguntungkan mereka, meski menciptakan *technical debt* (utang teknis) yang mahal di kemudian hari. Maka kriteria evaluasi bukan sekadar "bisakah mereka melakukannya", melainkan "apakah mereka berdisiplin menolak ketika seharusnya menolak".

## Tujuh pertanyaan yang wajib diajukan ke calon partner SAP

Ajukan tujuh pertanyaan ini sebelum menandatangani kontrak: cara mereka men-triase *custom code*, kapan mereka menolak kustomisasi, pendekatan ekstensi dan integrasi mereka, mekanisme menjaga "stay clean", model dukungan pasca *go-live*, serta rekam jejak di industri Anda. Jawaban yang spesifik dan bermetode jauh lebih bernilai daripada janji "semua bisa".

1. **Bagaimana Anda menginventaris dan men-triase *custom code* kami?** Partner yang serius memakai kerangka Keep / Refactor / Retire dan alat seperti *ABAP Test Cockpit* (ATC). Setiap objek kustom dikategorikan: dipertahankan, dirancang ulang, atau dipensiunkan. Satu tim SAP bahkan melaporkan berhasil mempensiunkan hampir 10% custom code mereka (SAP Community); bukti bahwa triase yang disiplin memang memangkas beban.
2. **Kapan Anda menolak permintaan kustomisasi?** Ini menguji disiplin *fit-to-standard*. SAP menyatakan sekitar 75–80% proses bisnis di semua perusahaan hampir identik dan seharusnya berjalan standar; hanya 20–25% sisanya yang benar-benar membedakan secara kompetitif. Partner yang tepat bertanya "apakah proses Anda bisa mengadopsi *best practice* SAP?", bukan langsung memodifikasi sistem.
3. **Apa pendekatan ekstensi Anda: in-app, ABAP Cloud, atau *side-by-side* di SAP BTP?** SAP mengelompokkan ekstensi ke dalam empat level (A–D): Level A sepenuhnya *upgrade-safe*, sedangkan Level D (modifikasi inti, akses tabel langsung) tidak direkomendasikan (SAP, Agustus 2025). Partner yang baik menjadikan jalur Level A sebagai default.
4. **Bagaimana strategi integrasi Anda: API-first atau masih RFC?** Integrasi modern berbasis *released API* (objek yang sudah di-*release* SAP dan dijamin stabil saat upgrade). Ketergantungan pada RFC kuno sebagai default adalah sinyal pendekatan lama.
5. **Bagaimana mekanisme menjaga "stay clean" setelah *go-live*?** Tanyakan apakah mereka membangun *Center of Excellence* (CoE) dengan *quarterly health review* dan *extension decision catalogue*. Clean core adalah perjalanan, bukan kondisi sesaat.
6. **Apa model dukungan dan sertifikasi Anda?** Idealnya ada *Application Management Services* (AMS) yang jelas dan sertifikasi *Partner Center of Expertise* (PCoE). Sejak April 2024, SAP bahkan mewajibkan sertifikasi ulang tahunan bagi konsultan partner di peran kunci proyek RISE with SAP (SAP).
7. **Berapa klien di industri kami yang sudah Anda tangani, dan berapa lama Anda mendampingi mereka setelah *go-live*?** Rekam jejak industri spesifik dan durasi pendampingan jauh lebih berarti daripada daftar logo generik.

Tidak semua jawaban harus sempurna. Yang Anda cari adalah pola: partner yang punya *metode* untuk setiap pertanyaan, bukan yang menjawab dengan janji umum.

{IMAGE_02: Diagram tiga jalur ekstensi SAP clean core — inti S/4HANA di tengah; tiga jalur mengelilinginya (In-app/Key User, ABAP Cloud on-stack, Side-by-side SAP BTP) masing-masing berlabel "Level A — upgrade-safe" dengan ikon; semua jalur ditunjukkan tidak menyentuh inti secara langsung; gaya diagram arsitektur minimalis, teks Bahasa Indonesia}

## Red flag vs green flag: cara membaca jawaban partner

Bacalah jawaban partner sebagai pola, bukan kalimat lepas. *Red flag* muncul ketika partner menjanjikan "semua bisa dikustomisasi", tak punya metode triase kode, memakai RFC sebagai default, dan menganggap proyek selesai di *go-live*. *Green flag* adalah kebalikannya: mendorong *fit-to-standard*, punya kerangka ekstensi dan integrasi berbasis standar, serta model dukungan yang jelas.

Tabel berikut bisa Anda bawa langsung ke ruang rapat evaluasi vendor.

| Aspek Evaluasi | Sinyal Bahaya (Red Flag) | Sinyal Baik (Green Flag) |
|---|---|---|
| Kustomisasi | "Semua permintaan bisa kami akomodasi" | Mendorong *fit-to-standard*; minta justifikasi bisnis sebelum kustomisasi |
| Triase custom code | Tak punya metode inventaris kode terstruktur | Kerangka Keep/Refactor/Retire + alat (mis. ABAP Test Cockpit) |
| Pendekatan ekstensi | Modifikasi inti (Level D) sebagai jalur utama | In-app / ABAP Cloud / *side-by-side* BTP (Level A) sebagai default |
| Integrasi | RFC sebagai default; tak menyebut *released API* | API-first; berbasis *released SAP API* dan standar |
| Pasca go-live | "Proyek selesai setelah *go-live*" | Model AMS/PCoE jelas; ada CoE + *quarterly clean core health review* |
| Tier & sertifikasi | Hanya menyebut tier tanpa contoh implementasi | Tier + sertifikasi PCoE + referensi klien di industri relevan |
| Track record | Referensi generik tanpa industri spesifik | Referensi klien sektor serupa + durasi pendampingan pasca *go-live* |

Satu catatan: pendekatan ekstensi sering jadi pembeda paling jujur. Partner yang fasih memakai jalur "bersih", misalnya membangun aplikasi terpisah di atas [platform low-code SAP Build](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms) pada SAP BTP alih-alih mengutak-atik inti, biasanya sudah menginternalisasi disiplin clean core, bukan sekadar menghafal istilahnya.

## Apa arti tier dan sertifikasi partner SAP, dan seberapa penting?

Tier adalah syarat perlu, bukan syarat cukup. **SAP Platinum Partner** adalah level tertinggi di program SAP PartnerEdge dan hanya diberikan *by invitation* kepada partner dengan banyak konsultan bersertifikat, kompetensi solusi berganda, dan komitmen pendapatan besar ke SAP. Tier menandakan kapasitas dan akses; ia tidak otomatis menjamin kecocokan metode dengan kebutuhan clean core Anda.

Secara praktis, tier yang tinggi berarti partner punya kedalaman talenta bersertifikat dan dukungan ekosistem yang lebih luas. Itu relevan karena program clean core menuntut keahlian lintas dimensi, dari remediasi kode hingga arsitektur integrasi. Sebagai konteks, United VARs (aliansi tempat sejumlah partner Platinum bernaung) menyebut jaringannya menghimpun lebih dari 70 partner elite dengan ribuan konsultan bersertifikat di 100+ negara, gambaran skala kolektif ekosistem ini.

Sertifikasi dukungan sama pentingnya. **PCoE (Partner Center of Expertise)** menandakan partner sudah lolos audit ketat (lebih dari 25 dokumen pendukung, infrastruktur *support hotline*, dan staf multiperan) yang menjadi tulang punggung fase "stay clean" pasca *go-live*. Sebagai gambaran konkret, Soltius adalah SAP Platinum Partner melalui keanggotaan United VARs sekaligus *Certified AMC & AMS Partner* (PCoE Indonesia), kombinasi yang relevan justru karena clean core menuntut keduanya: keahlian implementasi dan dukungan berkelanjutan.

Namun jangan berhenti di logo tier. TechTarget mengingatkan bahwa sebagian SI besar justru terbiasa dengan model *heavy customization* yang historis menguntungkan mereka. Tier tinggi pada partner yang belum mengubah model itu tidak menjamin clean core. Cocokkan tier dengan jawaban atas tujuh pertanyaan di atas.

{IMAGE_03: Timeline horizontal dua fase "Get Clean, Stay Clean" — fase kiri "Get Clean" (audit custom code -> triase Keep/Refactor/Retire -> remediasi -> go-live), fase kanan "Stay Clean" (tata kelola CoE -> quarterly review -> extension decision catalogue -> upgrade berkelanjutan), warna progresif abu ke hijau, ikon per tahap, teks Bahasa Indonesia}

## Kapan partner termurah (atau termahal) justru pilihan yang salah

Harga adalah indikator yang menyesatkan jika dipakai sendirian. Partner termurah sering menambal kebutuhan lewat kustomisasi cepat yang justru menambah *technical debt*, sehingga upgrade tetap mahal dan Anda membayar dua kali. Partner termahal atau brand global belum tentu cocok untuk skala menengah atau industri spesifik di Indonesia.

Bagian ini jarang ditulis kompetitor, padahal di sinilah kejujuran membangun kepercayaan. Pertimbangkan tiga jebakan berikut sebelum membandingkan angka penawaran:

- **"Termurah" yang menambal lewat kustomisasi.** Penawaran rendah kerap dicapai dengan menjanjikan jalan pintas: modifikasi inti agar cepat selesai. Biayanya tersembunyi dan baru muncul saat upgrade S/4HANA berikutnya, ketika setiap kustomisasi non-standar harus diuji ulang.
- **"Termahal" yang tidak cocok skala.** Brand besar dengan tarif premium kadang membawa metodologi untuk korporasi global yang terlalu berat untuk perusahaan menengah Indonesia, dengan tim yang berganti-ganti dan minim pemahaman konteks lokal.
- **"Semua bisa di-BTP" yang juga keliru arah.** *Side-by-side* BTP bukan izin bebas membangun segalanya di luar inti. Keputusan tetap harus divalidasi: apakah proses ini benar-benar diferensiasi (20%) atau sebenarnya termasuk 80% proses standar?

Kriteria sesungguhnya adalah kecocokan metode dan rekam jejak di industri yang relevan, bukan angka di baris paling bawah penawaran. Karena keputusan partner clean core hampir selalu menyatu dengan rencana [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud) (banyak pembeli mengevaluasi keduanya dalam satu RFP), bobot evaluasi sebaiknya jatuh pada disiplin jangka panjang, bukan biaya awal.

## FAQ (Pertanyaan yang Sering Diajukan)

### Bagaimana cara memilih partner implementasi SAP untuk program clean core?
Evaluasi minimal tiga aspek: apakah partner punya metode triase *custom code* yang jelas (Keep/Refactor/Retire); apakah mereka aktif mendorong *fit-to-standard* atau justru menyetujui setiap kustomisasi; dan apakah ada model AMS/PCoE pasca *go-live* untuk menjaga "stay clean". Tier Platinum adalah ambang minimum, tetapi disiplin metodologi yang menentukan kualitas hasil.

### Pertanyaan apa yang harus saya ajukan ke calon system integrator SAP?
Tujuh pertanyaan kunci: (1) Bagaimana Anda men-triase *custom code* kami? (2) Kapan Anda menolak kustomisasi? (3) Pendekatan ekstensi Anda: in-app, ABAP Cloud, atau *side-by-side* BTP? (4) Strategi integrasi: API-first atau RFC? (5) Bagaimana mekanisme "stay clean" pasca *go-live*? (6) Apa model AMS dan sertifikasi dukungan Anda? (7) Berapa klien di industri kami yang sudah Anda tangani?

### Apa itu SAP Platinum Partner dan apa artinya bagi saya sebagai pelanggan?
SAP Platinum Partner adalah level tertinggi di program SAP PartnerEdge, diberikan hanya *by invitation* kepada partner dengan banyak konsultan bersertifikat, kompetensi solusi berganda, dan komitmen pendapatan besar ke SAP. Bagi pelanggan, ini berarti akses ke kedalaman keahlian dan dukungan ekosistem yang lebih luas. Meski begitu, tier saja tidak menjamin kecocokan metode atau pengalaman di industri spesifik Anda.

### Apa itu fit-to-standard dalam implementasi SAP, dan mengapa penting untuk clean core?
*Fit-to-standard* adalah pendekatan yang mengutamakan pertanyaan "bagaimana proses bisnis kita bisa mengadopsi *best practice* SAP?", bukan sebaliknya. Ini penting karena SAP mencatat 75–80% proses bisnis di semua perusahaan hampir identik dan tidak perlu kustomisasi; hanya 20–25% yang benar-benar membedakan secara kompetitif. Partner yang serius dengan clean core akan proaktif mendorong *fit-to-standard*, bukan langsung menerima permintaan kode kustom.

### Apa itu "get clean, stay clean" dan apa peran partner di dalamnya?
"Get clean, stay clean" adalah framing resmi SAP untuk dua fase clean core: membersihkan dan memigrasi sistem ke standar, lalu mempertahankan disiplin itu pasca *go-live*. Partner yang baik menyediakan kerangka *Center of Excellence* (CoE) untuk fase kedua, mencakup *quarterly health review*, *extension decision catalogue*, dan panduan ABAP Cloud, agar clean core menjadi tata kelola berkelanjutan, bukan proyek satu kali.

### Apa tanda-tanda partner SAP yang kurang tepat untuk program clean core?
Beberapa sinyal bahaya: menjanjikan "semua kustomisasi bisa dilakukan" tanpa evaluasi *fit-to-standard*; tak punya metode triase kode terstruktur; memakai RFC sebagai default integrasi alih-alih API-first; tak punya rencana konkret "stay clean" pasca *go-live*; dan tidak bisa menunjukkan klien referensi di industri serupa yang berhasil menjaga clean core setelah sistem aktif.

## Kesimpulan

Kembali ke skenario di awal: kontrak yang membengkak dan inti yang kotor 18 bulan kemudian hampir selalu berakar pada pilihan partner, bukan keterbatasan teknologi. Tujuh pertanyaan, tabel *red flag* vs *green flag*, dan kesadaran bahwa tier maupun harga bukan jaminan adalah perangkat untuk menilai partner mana pun secara objektif. Kabar baiknya, kriteria itu bisa diverifikasi sebelum Anda menandatangani apa pun. Sebagai SAP Platinum Partner melalui keanggotaan United VARs dan bagian dari Metrodata Group sejak 1998, Soltius mendampingi perusahaan dari penilaian kesiapan, implementasi, hingga dukungan pasca *go-live*. Kriteria di atas adalah kriteria yang kami pegang, disampaikan jujur sebagai panduan pembeli.

Untuk mendiskusikan kesiapan program clean core dan menilai partner yang tepat bagi perusahaan Anda, kunjungi soltius.co.id.
