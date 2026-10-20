---
title: "Tata Kelola SAP Clean Core: Cara Stay Clean Pasca Go-Live"
meta_title: "Tata Kelola SAP Clean Core: Panduan Stay Clean"
meta_description: "Panduan tata kelola SAP Clean Core untuk stay clean pasca go-live: gerbang persetujuan, guardrail ABAP Cloud, quality gate ATC, dan register kode kustom."
slug: "tata-kelola-sap-clean-core-stay-clean"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "get clean stay clean"
  - "tata kelola clean core"
  - "governance kustomisasi SAP"
  - "approval workflow kustomisasi"
  - "custom code register"
  - "guardrail ABAP Cloud"
  - "released API"
  - "quality gate ABAP Test Cockpit"
  - "kebijakan ekstensibilitas"
  - "review board kustomisasi"
  - "fit-to-standard"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu"
    anchor: "warehouse management system"
external_citations:
  - url: "https://www.sap.com/resources/what-is-a-clean-core"
    context: "'Get clean, stay clean' sebagai terminologi resmi SAP; side-by-side extensibility di BTP; manfaat menyerap update dengan cepat"
  - url: "https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/"
    context: "ABAP Cloud sebagai lingkungan pengembangan default clean core; ATC sebagai alat tata kelola tingkat kode; model klasifikasi Level A-D"
brief_id: "sap-clean-core-05"
target_word_count: 1650
publish_month: "2026-08-2"
word_count: 2262
---

# Tata Kelola SAP Clean Core: Cara Stay Clean Pasca Go-Live

Banyak perusahaan menghabiskan berbulan-bulan dan anggaran besar untuk "membersihkan" sistem SAP mereka: meremediasi Z-code, menstandarkan proses, memindahkan kustomisasi lama ke ekstensi modern. Lalu enam bulan setelah *go-live* (sistem resmi aktif), permintaan kustomisasi mengalir lagi tanpa saringan, dan core yang susah payah dibersihkan perlahan kembali kotor. Inilah celah yang paling jarang dibahas dalam program [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide): bukan cara membersihkan yang lama, melainkan cara menjaganya tetap bersih. Artikel ini bukan pengantar konsep, melainkan panduan operasional membangun tata kelola *stay clean*: gerbang persetujuan, guardrail teknis, dan register kode kustom yang mencegah utang teknis menumpuk lagi.

> **Secara singkat:** Tata kelola clean core adalah kerangka kebijakan dan mekanisme persetujuan yang menjaga core SAP S/4HANA tetap standar dan *upgrade-safe* (aman saat di-upgrade) setelah go-live. Ia menetapkan siapa yang boleh menyetujui kustomisasi dan dengan kriteria apa, lalu menegakkannya lewat guardrail teknis seperti ABAP Cloud dan quality gate ABAP Test Cockpit, mewujudkan prinsip resmi SAP "get clean, stay clean".

Yang akan kita bahas berurutan: siapa yang berwenang menyetujui kustomisasi, bagaimana kebijakan diterjemahkan menjadi guardrail teknis yang nyata, seperti apa alur permintaan dari intake hingga keputusan, dan kapan tata kelola justru berubah menjadi birokrasi yang merugikan.

## Apa itu tata kelola "stay clean" dan mengapa "get clean" saja tidak cukup?

*Get clean* adalah kerja remediasi sekali besar untuk mencapai core standar; *stay clean* adalah disiplin berkelanjutan yang menjaganya. SAP mendefinisikan strategi clean core sebagai gabungan keduanya. Tanpa tata kelola yang menjaga tahap kedua, kustomisasi baru mengalir kembali tanpa saringan dan core perlahan kotor lagi dalam hitungan bulan.

"Get clean, stay clean" bukan jargon integrator, melainkan cara SAP sendiri merumuskan strategi clean core. SAP mendeskripsikannya sebagai keseluruhan aktivitas untuk mencapai core yang bersih sekaligus mempertahankannya seiring ekstensi, integrasi, dan data baru terus ditambahkan (SAP, "What is a clean core?"). Prinsip intinya sederhana: jaga core ERP sedekat mungkin dengan standar bawaan, dan bangun setiap modifikasi di luar core memakai solusi ekstensibilitas resmi.

Alasan bisnisnya konkret. Core yang bersih memungkinkan perusahaan menyerap update, patch keamanan, dan pembaruan kepatuhan regulasi dengan cepat tanpa takut merusak kustomisasi. Core yang penuh modifikasi melakukan sebaliknya: tiap upgrade berubah menjadi proyek berisiko, mahal, dan lambat.

Di sinilah "get clean" saja tidak cukup. Remediasi hanya membereskan masa lalu. Jika tidak ada mekanisme yang menyaring permintaan baru, tekanan bisnis akan mengembalikan kebiasaan lama: kustomisasi cepat langsung di core karena dianggap "lebih praktis". Enam bulan kemudian, daftar objek kustom kembali membengkak dan janji sistem yang mudah di-upgrade menguap.

Urgensinya juga terikat kalender. Mainstream maintenance SAP ECC berakhir 31 Desember 2027, dengan extended maintenance opsional hingga 2030 (dengan premi tambahan di atas biaya dasar). Banyak perusahaan memakai tenggat resmi SAP saat ini sebagai momentum pindah ke S/4HANA, dan sebagian besar investasi migrasi itu akan sia-sia bila core kembali kotor tak lama setelah go-live. Menjaga hasil bersih dari sebuah proyek [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud) justru adalah pekerjaan tata kelola, bukan pekerjaan teknis semata.

## Siapa yang menyetujui permintaan kustomisasi SAP?

Keputusan kustomisasi tidak boleh berada di tangan satu developer. Praktik yang dianjurkan adalah *review board* (dewan peninjau) lintas fungsi berisi pemilik proses bisnis, arsitek SAP, dan perwakilan IT yang menilai setiap permintaan dengan kriteria seragam. Banyak integrator menyarankan menyaringnya lewat gerbang tiga pertanyaan sebelum satu baris kode pun ditulis.

Ketika keputusan kustomisasi diserahkan ke satu orang, biasanya developer yang sedang mengerjakan tiket, insentifnya adalah menyelesaikan permintaan secepat mungkin, bukan menjaga kebersihan core. Itulah kenapa tata kelola menempatkan keputusan pada review board: forum kecil yang menimbang tiap kebutuhan dengan ukuran yang sama untuk semua orang, sehingga "mendesak menurut siapa" tidak lagi menjadi penentu.

Salah satu kerangka yang banyak dipakai kalangan integrator SAP adalah menyaring tiap permintaan lewat tiga pertanyaan berurutan. Perlu ditegaskan, formulasi ini adalah praktik yang dianjurkan, bukan aturan formal SAP; SAP menyediakan prinsip dan tooling-nya, sedangkan urutan tiga pertanyaan ini adalah cara sejumlah integrator mengoperasionalkannya:

1. **Bisa dipenuhi lewat konfigurasi standar SAP?** Jika ya, kebutuhan diselesaikan tanpa kode sama sekali. Sebagian besar permintaan yang terasa "butuh kustomisasi" sebenarnya berhenti di sini begitu ditelusuri.
2. **Jika tidak, bisa lewat ekstensi SAP BTP?** Kebutuhan yang lebih kompleks dibangun sebagai *side-by-side extensibility* (ekstensi yang berjalan terpisah dari core di SAP Business Technology Platform), sehingga logika bisnis khusus tetap ada tanpa menyentuh inti ERP.
3. **Jika tetap tidak, apakah benar-benar wajib atau sekadar preferensi?** Pertanyaan terakhir ini yang paling sering diabaikan, padahal paling menentukan. Banyak permintaan gugur di sini karena ternyata hanya kebiasaan lama, bukan kebutuhan bisnis nyata.

Gerbang ini kerap disebut "governance dengan gigi" karena hasilnya mengikat: preferensi ditolak, dan hanya kebutuhan yang benar-benar tidak terpenuhi konfigurasi maupun ekstensi standar yang lolos ke pengembangan.

## Dari kebijakan ke guardrail teknis: cara memaksa clean core secara nyata

Kebijakan yang hanya tertulis di dokumen akan diabaikan saat tenggat mendesak. Tata kelola clean core menjadi nyata ketika didukung tiga guardrail teknis: model pengembangan ABAP Cloud yang hanya mengizinkan *released public API*, *quality gate* (gerbang pemeriksaan kualitas) ABAP Test Cockpit di dalam pipeline, dan register objek kustom sebagai satu sumber kebenaran. Yang membuat kebijakan bertahan adalah guardrail yang membuat pelanggaran sulit dilakukan, bukan sekadar dilarang di atas kertas.

**ABAP Cloud** adalah fondasinya. Ini model pengembangan yang hanya mengizinkan penggunaan *released public API*, yaitu antarmuka yang secara resmi dirilis SAP dengan kontrak stabilitas, sehingga kode kustom tidak pernah menyentuh objek internal core. SAP menetapkannya sebagai lingkungan pengembangan default untuk clean core (SAP News, Agustus 2025). Konsekuensinya penting: ekstensi yang dibangun dengan cara ini tetap aman saat SAP merilis update, baik ekstensi itu berjalan di dalam sistem (*on-stack*) maupun terpisah di SAP BTP (*side-by-side*). Disiplin yang sama menjaga modul dengan permintaan kustomisasi paling padat, seperti area gudang dan logistik pada [warehouse management system](https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu), tetap standar sehingga upgrade berikutnya tidak mematahkan operasi gudang.

Untuk memberi kosakata bersama soal "seberapa bersih" sebuah objek, SAP memperkenalkan model klasifikasi empat tingkat (Level A–D, pembaruan Agustus 2025) yang menggantikan model tiga-tingkat lama:

| Level | Deskripsi singkat | Status clean core |
|---|---|---|
| **A** | ABAP Cloud / SAP Build (BTP), hanya released public API dengan stability contract | Paling bersih (acuan emas) |
| **B** | Memenuhi kriteria A, ditambah pemakaian classic API SAP yang terdokumentasi dan umumnya upgrade-stable | Patuh (compliant) |
| **C** | Memakai objek internal SAP yang tidak memenuhi syarat B | Bermasalah, perlu remediasi |
| **D** | Modifikasi core atau objek dan teknologi yang tidak direkomendasikan | Bukan clean core |

Dua alat menegakkan klasifikasi ini di lapangan:

- **ABAP Test Cockpit (ATC)** sebagai quality gate. SAP menyebut ATC sebagai alat kunci untuk tata kelola di tingkat kode. Tersedia check variant khusus, `ABAP_CLEAN_CORE_READINESS`, dan pemeriksaan "Usage of Released APIs" yang mendeteksi apakah kode memakai API resmi atau menyentuh objek internal. Menjadikan ATC sebagai gerbang wajib di pipeline memastikan kode yang gagal tidak pernah masuk produksi.
- **Register atau inventaris kode kustom** sebagai satu sumber kebenaran. Secara teknis ia dibangun dari SAP Custom Code Migration app, bukan dari daftar manual di spreadsheet yang cepat usang. Satu catatan penting: "register kode kustom" adalah konsep tata kelola, bukan nama satu produk SAP; realisasinya memadukan Custom Code Migration app, inventaris kode kustom, dan analisis ATC.

## Alur permintaan kustomisasi: dari request ke keputusan

Alur permintaan kustomisasi yang sehat bergerak dari intake, melewati gerbang tiga pertanyaan, menuju keputusan (konfigurasi standar, ekstensi BTP, atau tolak), lalu masuk ke guardrail teknis dan quality gate sebelum objek dicatat di register dan ditinjau berkala. Setiap langkah punya penanggung jawab yang jelas, dan setiap keputusan meninggalkan jejak.

Menyatukan kebijakan dan guardrail, berikut kerangka delapan langkah dari permintaan masuk hingga tinjauan berkala:

| Langkah | Aktivitas | Siapa yang memutuskan | Output / dokumentasi |
|---|---|---|---|
| 1. Intake | Permintaan diajukan dengan justifikasi bisnis | Pemilik proses bisnis (pengaju) | Tiket permintaan tercatat |
| 2. Gerbang Q1 | Bisa dipenuhi lewat konfigurasi standar? | Konsultan fungsional / arsitek | Jika ya, konfigurasi, selesai |
| 3. Gerbang Q2 | Jika tidak: bisa lewat ekstensi SAP BTP / key-user? | Arsitek SAP / review board | Jika ya, ekstensi side-by-side atau in-app |
| 4. Gerbang Q3 | Jika tidak: benar-benar wajib atau sekadar preferensi? | Review board (bisnis + IT) | Tolak preferensi; setujui yang wajib |
| 5. Guardrail teknis | Kode dikembangkan dengan ABAP Cloud (released API) | Developer | Ekstensi Level A/B |
| 6. Quality gate | ATC check (`ABAP_CLEAN_CORE_READINESS`, Usage of Released APIs) | Otomatis di pipeline | Lolos ke produksi; gagal, perbaiki |
| 7. Registrasi | Objek dicatat di register / inventaris kode kustom | AMS / tim tata kelola | Register diperbarui |
| 8. Tinjauan berkala | Review inventaris; retirement objek tak terpakai | Review board | Backlog remediasi |

Langkah 2 sampai 4 (gerbang tiga pertanyaan) adalah praktik yang dianjurkan integrator, bukan prosedur resmi SAP. Sementara langkah 5 dan 6, guardrail ABAP Cloud dan quality gate ATC, bersandar pada kapabilitas SAP yang terverifikasi. Yang membuat alur ini bekerja bukan kerumitannya, melainkan konsistensinya: setiap permintaan lewat pintu yang sama, dan tidak ada jalur belakang yang melewati register.

## Kapan governance clean core berubah jadi birokrasi yang merugikan

Tata kelola yang terlalu ketat bisa berbalik merugikan. Ketika gerbang persetujuan berubah menjadi komite yang rapat berminggu-minggu, tim bisnis akan mencari jalan pintas di luar sistem (*shadow IT*), persis yang ingin dicegah clean core. Solusinya bukan menghapus gerbang, melainkan menyediakan jalur pengecualian yang terdokumentasi dan bertenggat.

Bagian ini jarang ditulis, padahal penting. Tata kelola punya sisi gelap yang kerap disebut "governance theater": proses persetujuan yang terlihat rapi di atas kertas tetapi sebenarnya hanya memperlambat bisnis tanpa benar-benar menjaga kualitas. Dalam praktik, proyek paling sering gagal "stay clean" bukan karena kekurangan teknologi, melainkan karena tidak ada orang yang cukup berwenang untuk berkata "tidak" pada permintaan yang sekadar preferensi.

Jalur pengecualian yang terkontrol adalah jawabannya. Permintaan mendesak boleh melewati jalur cepat dengan tiga syarat: utang teknis yang ditimbulkannya dicatat di register, diberi tenggat remediasi yang jelas, dan ditinjau di siklus berikutnya. Tanpa "escape hatch" resmi, tekanan bisnis akan menciptakan pintu belakang yang jauh lebih berbahaya, yaitu kustomisasi yang tidak pernah tercatat di mana pun.

Ukuran keberhasilan tata kelola yang sehat bukan berapa banyak permintaan yang ditolak, melainkan seberapa cepat dan konsisten keputusan diambil. Gerbang yang baik adalah saringan cepat, bukan komite yang menunda. Governance yang terlalu kaku sama merusaknya dengan tidak ada governance sama sekali: yang pertama mendorong shadow IT, yang kedua membiarkan core kotor.

Satu nuansa penting bagi pengguna on-premise dan Private Edition (RISE): karena classic ABAP masih terbuka secara teknis, clean core di sana lebih bergantung pada disiplin tata kelola ketimbang paksaan sistem, kebalikan dari Public Edition yang menegakkannya lewat sistem. Di lingkungan yang tidak memaksa itulah governance formal paling menentukan.

## FAQ (Pertanyaan yang Sering Diajukan)

### Bagaimana cara menjaga core SAP tetap bersih setelah go-live (stay clean)?

"Stay clean" ditegakkan lewat tata kelola, bukan sekali bersih-bersih. Kuncinya: gerbang persetujuan untuk setiap permintaan kustomisasi, guardrail ABAP Cloud yang hanya mengizinkan released public API, quality gate ABAP Test Cockpit sebelum kode masuk produksi, dan register kode kustom sebagai satu sumber kebenaran. SAP sendiri mendefinisikan strategi clean core sebagai aktivitas "get clean" dan "stay clean".

### Siapa yang seharusnya menyetujui permintaan kustomisasi SAP?

Keputusan tidak boleh berada di tangan satu developer. Praktik yang dianjurkan adalah review board gabungan pemilik proses bisnis, arsitek SAP, dan IT yang menilai tiap permintaan dengan kriteria seragam. Banyak integrator menyarankan gerbang tiga pertanyaan: bisa lewat konfigurasi standar? bisa lewat ekstensi SAP BTP? benar-benar wajib atau sekadar preferensi? Ini anjuran tata kelola, bukan aturan formal SAP.

### Apa itu custom code register (inventaris kode kustom)?

Register kode kustom adalah daftar terpusat seluruh objek kustom di sistem SAP: pemilik, alasan bisnis, level clean core (A–D), dan status. Ia menjadi satu sumber kebenaran untuk tinjauan berkala, keputusan retirement, dan audit. Secara teknis, inventaris ini dibangun dari SAP Custom Code Migration app dan analisis ABAP Test Cockpit, bukan dari daftar manual yang cepat usang.

### Apa bedanya "get clean" dan "stay clean"?

Keduanya adalah dua bagian dari satu strategi resmi SAP. "Get clean" adalah kerja remediasi sekali besar: mengidentifikasi dan membersihkan kustomisasi lama (Z-code), lalu memindahkannya ke ekstensi modern. "Stay clean" adalah disiplin berkelanjutan yang mencegah core kotor lagi: gerbang persetujuan, guardrail ABAP Cloud, dan quality gate untuk setiap kustomisasi baru. Banyak proyek berhasil "get clean" lalu gagal "stay clean".

### Bagaimana ABAP Cloud membantu menjaga clean core?

ABAP Cloud adalah model pengembangan yang hanya mengizinkan penggunaan released public API dan objek yang dirilis resmi SAP, dengan release contract yang menjamin upgrade-safety. Karena kode kustom tidak boleh menyentuh objek internal core, ekstensi tetap aman saat SAP merilis update. SAP menetapkannya sebagai lingkungan pengembangan default untuk clean core, dan ATC memverifikasi kepatuhannya secara otomatis.

### Apakah tata kelola clean core juga perlu untuk SAP on-premise?

Prinsipnya ya, tetapi cara penegakannya berbeda. Di S/4HANA Cloud Public Edition, sistem praktis memaksa clean core tanpa classic ABAP atau modifikasi core. Di Private Edition (RISE) dan on-premise, classic ABAP masih mungkin secara teknis, sehingga clean core lebih bergantung pada disiplin tata kelola, yaitu kebijakan, gerbang persetujuan, dan check ATC, ketimbang paksaan sistem. Justru di sinilah governance formal paling menentukan.

### Bagaimana menangani permintaan kustomisasi mendesak tanpa merusak clean core?

Sediakan jalur pengecualian yang terkontrol, bukan pintu belakang. Permintaan mendesak boleh melewati jalur cepat dengan syarat: utang teknis dicatat di register, diberi tenggat remediasi, dan ditinjau di siklus berikutnya. Tanpa jalur pengecualian resmi, tekanan bisnis akan mendorong shadow IT, persis yang ingin dicegah clean core. Tata kelola yang baik menyeimbangkan kecepatan dan kebersihan.

## Kesimpulan

Investasi terbesar dalam program clean core sering kali bukan remediasi awal, melainkan disiplin yang menjaganya bertahan. Perbedaan antara perusahaan yang tetap siap di-upgrade dan yang kembali terjebak utang teknis jarang terletak pada tool yang dipakai, melainkan pada apakah ada tata kelola nyata yang dijalankan konsisten: siapa yang menyetujui, dengan kriteria apa, dan bagaimana jejaknya dicatat. Sebagai SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group sejak 1998, Soltius mendampingi perusahaan merancang alur persetujuan dan guardrail clean core, lalu menegakkannya lewat Application Management Services pasca go-live.

Untuk menilai kesiapan tata kelola clean core di lingkungan SAP Anda dan merancang gerbang persetujuan yang benar-benar dijalankan, jelajahi solusinya di soltius.co.id.
