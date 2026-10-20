---
title: "SAP Clean Core Center of Excellence: Cara Membangun Tim Internalnya"
meta_title: "SAP Clean Core CoE: Cara Membangun Tim Internal"
meta_description: "Cara membangun Clean Core Center of Excellence (CoE) SAP: empat peran tim, model in-house vs hybrid vs outsourced, dan roadmap dari nol ke operasional."
slug: "cara-membangun-sap-clean-core-center-of-excellence"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "Center of Excellence (CoE) SAP"
  - "tim internal SAP"
  - "model in-house vs hybrid vs outsourced"
  - "power user / key user"
  - "kepemilikan clean core"
  - "Application Management Services (AMS)"
  - "clean core governance"
  - "SAP S/4HANA"
  - "SAP BTP"
  - "extensibility level A-D"
  - "roadmap CoE"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "business intelligence"
external_citations:
  - url: "https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/"
    context: "Model clean core extensibility Level A-D yang SAP formalkan 12 Agustus 2025 sebagai dasar keputusan yang dimiliki CoE"
  - url: "https://sapinsider.org/topic/sap-center-excellence/sap-coe-team-structure/"
    context: "Struktur empat kategori tim CoE (leadership, core, extended, project) sebagai praktik industri"
brief_id: "sap-clean-core-04"
target_word_count: 1650
publish_month: "2026-07"
word_count: 1733
---

# SAP Clean Core Center of Excellence: Cara Membangun Tim Internalnya

Beberapa bulan setelah go-live S/4HANA, sebuah pola diam-diam muncul: setiap permintaan kecil dari lini bisnis (satu field tambahan, satu laporan baru) harus mengantre sebagai proyek ke partner eksternal. Disiplin *clean core* yang susah payah dibangun saat proyek pun mulai luntur karena tak ada yang menjaganya sehari-hari. Yang hilang bukan teknologi, melainkan kepemilikan internal. Artikel ini bukan ulasan konsep, melainkan panduan membangun timnya: struktur peran, pilihan model in-house vs hybrid, dan langkah dari nol ke operasional. Prinsip [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide) hanya bertahan jika ada tim yang memilikinya.

> **Secara singkat:** Clean Core Center of Excellence (CoE) adalah tim internal yang memiliki dan menjaga disiplin clean core SAP sehari-hari — memutuskan level *extensibility* yang diizinkan, mengelola pengecualian, dan menjaga proses tetap *fit-to-standard* — sehingga inti SAP S/4HANA tetap standar dan mudah di-upgrade, tanpa perusahaan bergantung penuh pada konsultan eksternal.

## Apa itu Clean Core Center of Excellence dan mengapa perusahaan membutuhkannya?

CoE clean core adalah tim internal terpusat yang memegang hak keputusan, best practice, dan alur persetujuan seputar inti SAP. Misinya spesifik: menjaga S/4HANA tetap standar dan upgrade-safe hari demi hari, bukan hanya saat proyek berlangsung, dengan memutuskan kustomisasi mana yang boleh dan mana yang ditolak.

Bedakan dua hal yang sering tertukar. *Governance* adalah aturan mainnya: kebijakan, kontrol, proses anti-drift. CoE adalah siapa yang memainkannya. Tanpa pemilik yang jelas, aturan sebagus apa pun akan mengendur; kustomisasi diselesaikan diam-diam demi kecepatan, dan tiga tahun kemudian inti yang tadinya bersih kembali penuh modifikasi.

Satu klarifikasi supaya tidak salah kaprah. SAP punya konsep formal *Customer Center of Expertise* (Customer COE), yaitu program akreditasi resmi dengan dua tingkat kematangan, Primary dan Advanced (SAP Support Portal). Itu berbeda dari "CoE clean core" yang dibahas di sini, yang lebih merupakan cara mengorganisasi orang di sekitar satu misi. Keduanya sah, tetapi SAP tidak mewajibkan struktur tim tertentu.

## Empat peran inti dalam CoE clean core

Menurut praktik industri yang dikodifikasi SAPinsider, struktur tim CoE SAP umumnya terbagi empat kategori: *leadership* (arah dan akuntabilitas), *core team* (operasi harian dan enhancement kecil), *extended team* (ahli materi per area fungsi), dan *project team* temporer. Ini kerangka yang umum dipakai, bukan mandat resmi tunggal dari SAP.

Yang membuat CoE ini berbeda dari CoE SAP generik adalah misinya: tiap peran diikat ke tugas menjaga inti tetap bersih, bukan sekadar menjalankan sistem.

- **Leadership / steering** — menetapkan arah strategis, memegang akuntabilitas lifecycle, dan menegakkan standar. Merekalah yang menetapkan kebijakan clean core dan menyetujui pengecualian berisiko tinggi.
- **Core team** — jantung operasional. Menangani enhancement kecil, mendefinisikan metodologi, dan yang terpenting, memutuskan level *extensibility* yang diizinkan untuk tiap kebutuhan (Level A hingga D).
- **Extended team** — para *subject matter expert* (SME) per area fungsi seperti finance atau logistik, yang memvalidasi apakah sebuah kebutuhan benar-benar menuntut kustomisasi atau bisa diselesaikan secara *fit-to-standard*.
- **Project team** — dibentuk sementara untuk proyek spesifik (project manager, arsitek, analis), lalu dibubarkan. Tugasnya mendesain solusi sesuai pagar clean core yang sudah ditetapkan.

Untuk misi menjaga inti bersih, *core team*-lah yang bekerja paling keras. Merekalah gerbang harian yang memutuskan satu permintaan kustomisasi diselesaikan di Level A yang bersih atau, jika terpaksa, di level lebih berisiko dengan catatan sadar.

## Haruskah CoE dibangun in-house, hybrid, atau di-outsource?

Tidak ada jawaban tunggal, tetapi untuk mayoritas perusahaan Indonesia, model hybrid paling masuk akal. In-house murni memberi kontrol penuh tetapi menuntut talenta ABAP Cloud dan SAP BTP yang mahal dan langka. Outsourced penuh cepat tetapi menimbulkan ketergantungan. Hybrid menahan pengambil keputusan di internal dan menyewa keahlian teknis dari partner.

Kelangkaan talenta itu terukur. Kemenkominfo memproyeksikan Indonesia membutuhkan sekitar 9 juta talenta digital hingga 2030, sementara pasokan pendidikan formal jauh di bawah kebutuhan. Angka itu makro, bukan khusus SAP, tetapi di tengah kesenjangan sebesar itu, spesialis seperti ABAP Cloud dan SAP BTP termasuk yang paling sulit direkrut. Inilah alasan model hybrid, dengan inti pengambil keputusan internal ditopang partner *Application Management Services* (AMS), menjadi yang paling lazim di Indonesia.

| Aspek | In-house penuh | Hybrid (inti internal + partner AMS) | Outsourced penuh |
|---|---|---|---|
| Kontrol keputusan clean core | Penuh, di internal | Keputusan di internal; eksekusi teknis dibagi | Bergantung pada partner |
| Kebutuhan talenta langka (ABAP Cloud/BTP) | Tinggi — harus direkrut/dilatih sendiri | Sedang — inti kecil internal, skala dari partner | Rendah di sisi internal |
| Kecepatan mulai | Lambat (rekrut & upskill) | Cepat-menengah | Cepat |
| Risiko ketergantungan | Rendah | Terkendali | Tinggi |
| Kecocokan untuk Indonesia | Perusahaan besar dengan tim SAP matang | Paling lazim | UKM/awal, sementara |

Kriteria memilihnya sederhana: seberapa matang tim SAP internal Anda, dan seberapa kritis kecepatan keputusan. Semakin strategis SAP bagi bisnis, semakin penting hak keputusan berada di dalam, apa pun model eksekusinya.

## Roadmap membangun CoE clean core: dari nol ke operasional

Membangun CoE bukan soal merekrut banyak orang, melainkan menegakkan kepemilikan keputusan secara bertahap. Lima langkah berikut membawa tim dari mandat kosong ke ritme operasi harian yang menjaga inti tetap bersih.

1. **Amankan mandat dan sponsor eksekutif.** Tanpa dukungan level direksi, CoE kalah dari tekanan "yang penting cepat". Sponsor inilah yang memberi wewenang untuk menolak permintaan kustomisasi.
2. **Definisikan peran dan hak keputusan.** Tetapkan secara eksplisit siapa yang menyetujui permintaan *extensibility*, memvalidasi *fit-to-standard*, dan mengesahkan pengecualian. Ambiguitas di sini adalah penyebab utama drift.
3. **Staffing dan upskilling.** Bangun keahlian inti: ABAP Cloud (model pengembangan clean-core-compliant), SAP BTP untuk *side-by-side extension*, dan pola pikir *fit-to-standard*. Sisanya andalkan partner.
4. **Pilih alat dan KPI yang dimonitor.** Tentukan apa yang diukur — jumlah objek non-standar, rasio pengecualian, kesehatan inti — supaya disiplin clean core terlihat dalam angka.
5. **Tetapkan ritme operasi.** Kadens rutin untuk meninjau permintaan, menyetujui level, dan mengevaluasi pengecualian. Di sinilah CoE berhenti menjadi struktur di atas kertas.

Inti dari langkah 2 adalah tabel keputusan yang jelas: peta peran, tanggung jawab, dan keputusan yang dimilikinya.

| Peran / tim | Tanggung jawab | Contoh keputusan yang dimiliki |
|---|---|---|
| Leadership / steering | Arah strategis, akuntabilitas lifecycle, penegakan standar | Menetapkan kebijakan clean core; approve exemption berisiko tinggi |
| Core team | Operasi harian, enhancement kecil, metodologi | Approve/tolak permintaan extensibility; tentukan Level A/B/C/D |
| Extended team | Ahli materi (SME) per area fungsi | Validasi kebutuhan fungsional vs standar (fit-to-standard) |
| Project team (temporer) | Eksekusi proyek spesifik | Desain solusi proyek sesuai pagar clean core |

Keputusan level yang dimiliki *core team* bukan tebakan. SAP memformalkan model *extensibility* empat tingkat (Level A–D) pada 12 Agustus 2025 sebagai "shared vocabulary" untuk keputusan investasi (SAP News Center). Level A paling bersih: *extension* memakai API stabil rilis publik dan ABAP Cloud, aman saat upgrade. Level D, seperti modifikasi langsung objek SAP, tidak direkomendasikan karena technical debt tertinggi. Tugas CoE adalah membuat setiap pilihan level menjadi sadar dan terdokumentasi. Menjaga inti bersih inilah yang membuat hasil investasi [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud) tetap bernilai jangka panjang.

## Kapan Anda BELUM perlu CoE penuh — dan cara memulai kecil

Tidak setiap perusahaan butuh CoE berlapis empat tim. Untuk UKM atau organisasi dengan lanskap SAP sederhana, struktur formal justru bisa menjadi birokrasi yang memperlambat keputusan. Mulailah kecil: satu *process owner* yang memegang keputusan clean core, ditopang partner AMS untuk eksekusi teknis.

Yang menentukan bukan besarnya tim, melainkan kepemilikan keputusan yang jelas. Tidak ada standar SAP soal jumlah orang minimal; angka apa pun hanyalah rule-of-thumb. Satu orang dengan wewenang tegas, yang menyetujui permintaan *extensibility* dan menjaga inti tetap bersih, jauh lebih berharga daripada komite besar tanpa mandat.

Ada risiko di kedua ujung. Terlalu ramping, disiplin clean core mengendur karena tak ada yang menjaganya. Terlalu berat, CoE menjadi penghambat yang membuat lini bisnis mencari jalan pintas di luar sistem. Kalibrasinya kembali ke satu pertanyaan: seberapa besar dan kompleks lanskap SAP Anda, dan seberapa cepat keputusan harus diambil. Prinsip yang sama menjaga kualitas data dan proses standar yang menopang [business intelligence](https://www.soltius.co.id/id/blog/business-intelligence) tetap dapat diandalkan.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu SAP Center of Excellence (CoE)?

SAP Center of Excellence (CoE) adalah tim internal terpusat yang memegang best practice, hak keputusan, dan alur persetujuan seputar sistem SAP. Dalam konteks clean core, CoE menjaga inti S/4HANA tetap standar dan mudah di-upgrade dengan memutuskan level extensibility yang diizinkan, mengelola pengecualian, dan menjaga proses tetap fit-to-standard sehari-hari, bukan hanya saat proyek berlangsung.

### Siapa saja anggota tim CoE clean core?

Praktik industri (mis. SAPinsider) membagi CoE menjadi empat lapis: leadership/steering (arah, akuntabilitas, standar), core team (operasi harian, enhancement kecil, keputusan level extensibility), extended team (ahli materi per area fungsi), dan project team temporer (project manager, arsitek, analis untuk proyek tertentu). Untuk misi clean core, core team-lah yang menjaga disiplin harian menjaga inti tetap bersih.

### Apakah CoE harus in-house atau boleh hybrid?

Boleh hybrid, dan di Indonesia model hybrid justru paling lazim. In-house memberi kontrol penuh tetapi menuntut talenta ABAP Cloud dan SAP BTP yang masih langka; Kemenkominfo memproyeksikan kebutuhan sekitar 9 juta talenta digital hingga 2030 yang belum terpenuhi. Model hybrid mempertahankan pengambil keputusan di internal, lalu memakai partner Application Management Services (AMS) untuk skala dan keahlian teknis.

### Berapa orang minimal untuk memulai CoE clean core?

Tidak ada angka baku dari SAP; jumlahnya bergantung skala dan kompleksitas SAP Anda. Sebagai rule-of-thumb lapangan, perusahaan kecil bisa mulai sangat ramping dengan satu process owner yang memegang keputusan clean core, didukung partner AMS untuk eksekusi teknis. Yang penting bukan besarnya tim, melainkan adanya kepemilikan keputusan yang jelas.

### Apa peran CoE dalam menjaga clean core?

CoE adalah pemilik disiplin clean core sehari-hari. Perannya: memutuskan level extensibility yang diizinkan untuk tiap kebutuhan (mengacu model Level A–D yang SAP formalkan Agustus 2025), menyetujui atau menolak permintaan kustomisasi, mengelola pengecualian, dan menjaga proses tetap fit-to-standard. Dengan begitu inti S/4HANA tetap mudah di-upgrade dan tidak terjebak technical debt seperti pada Level D yang tidak direkomendasikan.

### Apa bedanya CoE dan tim IT biasa?

Tim IT biasa umumnya berorientasi menjalankan sistem dan menutup tiket. CoE clean core berorientasi governance dan nilai jangka panjang: ia memegang hak keputusan strategis soal level extensibility apa yang boleh, kustomisasi mana yang ditolak demi menjaga inti bersih, dan bagaimana proses tetap fit-to-standard. CoE menjembatani IT dan lini bisnis, menetapkan decision rights dan alur persetujuan, bukan sekadar menjaga sistem tetap menyala.

## Kesimpulan

Disiplin clean core tidak bertahan karena dokumen kebijakan, melainkan karena ada tim yang memilikinya setiap hari. Mulailah dari yang paling menentukan: kepemilikan keputusan yang jelas soal siapa yang menyetujui *extensibility* dan siapa yang menjaga inti tetap standar, lalu kembangkan strukturnya sesuai skala, dari satu *process owner* hingga CoE empat lapis. Bagi banyak perusahaan Indonesia, model hybrid menjaga hak keputusan tetap di internal sambil menutup celah keahlian dari luar. Sebagai SAP Platinum Partner melalui United VARs, Soltius mendukung inti internal klien lewat Application Management Services (AMS) pasca go-live untuk memperkuat CoE Anda, bukan menggantikannya.

Untuk mendiskusikan kesiapan tim clean core dan model CoE yang pas bagi perusahaan Anda, kunjungi soltius.co.id.
