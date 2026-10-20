---
title: "Tata Kelola Proyek Migrasi ERP ke Cloud dari Sisi Perusahaan"
meta_title: "Migrasi ERP ke Cloud: Tata Kelola Proyek Perusahaan"
meta_description: "Tata kelola proyek migrasi ERP ke cloud dari sisi perusahaan: struktur steering committee, matriks RACI, kontrol scope, dan quality gate SAP Activate."
slug: "tata-kelola-migrasi-erp-ke-cloud"
language: "id"
primary_keyword: "ERP migration to the cloud"
secondary_keywords:
  - "migrasi ERP ke cloud"
  - "tata kelola proyek ERP"
  - "steering committee proyek SAP"
  - "RACI matrix implementasi SAP"
  - "business process owner"
  - "change request management"
  - "scope creep ERP"
  - "quality gate SAP Activate"
  - "fit-to-standard"
  - "PMO proyek migrasi"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/data-warehouse-solutions"
    anchor: "data warehouse solutions"
external_citations:
  - url: "https://www.sap.com/products/erp/activate-methodology.html"
    context: "Enam fase SAP Activate, quality gate, dan fit-to-standard"
  - url: "https://www.gartner.com/en/information-technology/insights/what-it-leaders-must-do-to-avoid-disappointing-erp-initiatives"
    context: ">70% inisiatif ERP gagal memenuhi sasaran bisnis awal hingga 2027"
brief_id: "erp-migration-to-the-cloud-04"
target_word_count: 1650
publish_month: "2026-08-2"
word_count: 2119
---

# Tata Kelola Proyek Migrasi ERP ke Cloud dari Sisi Perusahaan

Banyak perusahaan menandatangani kontrak dengan *system integrator* (SI) ternama, lega karena merasa bagian tersulit sudah beres, lalu terkejut ketika proyek [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud) molor berbulan-bulan. Penyebabnya jarang teknologi. Lebih sering: keputusan yang menggantung, *scope* yang diam-diam melebar, dan kebingungan siapa sebenarnya menyetujui apa. Artikel ini membahas sisi yang paling sering diabaikan pemilik proyek, yaitu tata kelola (*governance*) dari sisi perusahaan sendiri, bukan dari partner. Anda akan mendapatkan kerangka konkret: struktur peran, matriks tanggung jawab, kontrol perubahan, dan titik keputusan yang tak boleh dilewati agar kendali proyek tetap berada di tangan Anda.

> **Ringkas:** Tata kelola proyek migrasi ERP ke cloud adalah kerangka peran, keputusan, dan kontrol dari sisi perusahaan (project sponsor, steering committee, business process owner, PMO, matriks RACI, proses change request, dan quality gate SAP Activate) yang menjaga proyek tetap selaras tujuan bisnis dan memastikan akuntabilitas tidak menggantung meski dikerjakan bersama partner.

Kita akan menelusuri lima hal berikut: mengapa governance sisi perusahaan menentukan hasil, struktur peran yang perlu dibentuk, pembagian tanggung jawab lewat RACI, cara menahan pelebaran scope, dan keputusan bisnis yang tetap menjadi milik Anda.

## Mengapa tata kelola sisi perusahaan menentukan nasib migrasi ERP ke cloud?

Karena mayoritas kegagalan ERP berakar pada tata kelola yang lemah, bukan teknologi yang buruk. Ketika perusahaan, SAP, dan partner sama-sama mengira pihak lain yang bertanggung jawab atas sebuah keputusan, proyek berhenti. Governance sisi perusahaan menutup celah itu dengan menegaskan siapa yang memutuskan, siapa yang mengeksekusi, dan siapa yang menerima hasil.

Angkanya tidak menyenangkan. Gartner memproyeksikan lebih dari 70% inisiatif ERP yang baru diimplementasikan akan gagal memenuhi sasaran bisnis awalnya hingga 2027, dengan manajemen perubahan yang buruk dan ketidakselarasan inisiatif ERP dengan strategi sebagai faktor utama (Gartner). McKinsey, dari studi transformasi lintas industri, menaksir sekitar 70% program transformasi besar tidak mencapai tujuannya, sering karena resistensi karyawan dan kurangnya dukungan manajemen. Dua temuan berbeda, satu benang merah: yang runtuh umumnya bukan sistemnya, melainkan tata kelola dan komitmen manusianya.

Pola yang paling sering muncul di lapangan bukan *bug* atau kapasitas server, melainkan keputusan yang menggantung. Siapa pemilik data pelanggan yang harus dibersihkan? Siapa yang berwenang menyetujui perubahan proses penjualan? Siapa yang menandatangani bahwa sistem layak *go-live*? Ketika jawaban itu kabur, setiap pihak menunggu pihak lain, dan jadwal ikut menunggu. Kekaburan akuntabilitas, bukan kekurangan teknis, adalah pola kegagalan yang berulang.

## Struktur governance: sponsor, steering committee, business process owner, dan PMO

Tata kelola proyek yang sehat berdiri di atas empat lapisan peran dari sisi perusahaan: *project sponsor* eksekutif yang menjaga alasan perubahan, *steering committee* yang memutuskan hal strategis, PMO (*Project Management Office*) yang mengoordinasi keseharian, dan *business process owner* yang memiliki keputusan desain proses. SAP sendiri menganjurkan struktur berlapis semacam ini, bukan sebagai formalitas.

SAP menempatkan governance sebagai bagian metodologi, bukan tambahan opsional. Ia menetapkan peran, tanggung jawab, dan akuntabilitas untuk tim proyek, eksekutif, sampai system integrator sejak awal. Dalam praktik, empat lapisan inilah yang paling menentukan:

- **Project sponsor:** eksekutif senior (CEO, CFO, atau COO) yang membeli *value case* dan cukup dekat dengan program untuk terus mengingatkan tim akan alasan perubahan. Tanpa sponsor yang terlihat sehari-hari, prioritas proyek kalah oleh operasional harian.
- **Steering committee:** sponsor dari sisi perusahaan bersama pimpinan partner/SAP. Badan ini memutuskan hal berdampak luas: anggaran, sumber daya, perubahan besar, dan menjadi level eskalasi terakhir ketika, misalnya, sebuah kustomisasi khusus diminta dan harus ditimbang untung-ruginya.
- **PMO / project manager:** koordinasi harian: jadwal, risiko, dan gerbang change request. Lapisan operasional yang menjaga roda tetap berputar di antara rapat steering.
- **Business process owner (BPO):** pemilik keputusan proses per domain (finance, supply chain, dan seterusnya). Ia menandatangani hasil fit-to-standard dan memimpin *user acceptance testing* (UAT) di areanya.

| Lapisan | Siapa | Mandat utama | Cadence tipikal |
|---|---|---|---|
| Project Sponsor | Eksekutif senior (mis. CEO/CFO/COO) | Menjaga value case, membuka pintu keputusan lintas divisi | Selalu tersedia; hadir di steering |
| Steering Committee | Sponsor perusahaan + pimpinan partner/SAP | Keputusan strategis, anggaran, sumber daya, eskalasi terakhir | Bulanan (rapat ad-hoc bila perlu) |
| PMO / Project Manager | Sisi perusahaan & partner | Koordinasi harian, jadwal, risiko, change request | Mingguan/harian |
| Business Process Owner | Pemilik proses per domain (finance, SCM, dll.) | Keputusan desain proses, sign-off fit-to-standard, UAT | Sepanjang fase Explore–Realize |

Nama badan bisa berbeda antar proyek dan antar edisi (S/4HANA Cloud *public* atau *private*): "operating committee", "project board", atau "PMO" kadang menunjuk lapisan yang mirip. Yang penting fungsinya, bukan labelnya. Hati-hati juga pada ekstrem sebaliknya. Terlalu banyak komite dan lapisan justru memperlambat keputusan. Governance yang baik bersifat proporsional: cukup untuk mencegah keputusan menggantung, tanpa menjadi birokrasi.

## Siapa bertanggung jawab atas apa? RACI antara perusahaan, SAP, dan partner

RACI matrix memetakan, untuk tiap *deliverable*, siapa yang **Responsible** (mengerjakan), **Accountable** (penanggung jawab akhir), **Consulted** (dimintai masukan), dan **Informed** (diberi tahu). Aturan emasnya: hanya satu pihak yang Accountable per deliverable. Di proyek SAP, partner umumnya Responsible mengeksekusi, sementara perusahaan tetap Accountable atas keputusan proses dan penerimaan hasil.

Kekuatan RACI bukan pada dokumennya, melainkan pada disiplin memakainya untuk memaksa keputusan tepat waktu. Matriks yang rapi tapi tak pernah dibuka tidak menghentikan proyek molor. Nilainya muncul saat dipakai untuk bertanya, di tengah kebuntuan, "menurut RACI, siapa yang harus memutuskan ini hari ini?"

Ambil satu contoh yang sering jatuh ke celah: pembersihan dan kepemilikan data. Menentukan siapa *data owner*, standar kualitas data, dan bagaimana data lama dipetakan ke struktur baru adalah *workstream* tersendiri, sama pentingnya dengan merancang [data warehouse solutions](https://www.soltius.co.id/id/blog/data-warehouse-solutions) yang rapi setelah go-live. Partner bisa menyediakan alat dan metode migrasi, tetapi keputusan "data mana yang benar" tetap milik perusahaan.

| Deliverable kunci | Customer | SAP | Partner (SI) |
|---|---|---|---|
| Keputusan & sign-off desain proses (fit-to-standard) | **A** | C | R |
| Konfigurasi & build sistem | C/A (terima) | I | **R** |
| Pembersihan & validasi data | **A** / R | I | C |
| User acceptance testing (UAT) | **A** / R (key user) | I | C |
| Keputusan cutover / go-live | **A** (sponsor/steering) | C | R |
| Change management & adopsi pengguna | **A** | I | C/R |
| Platform teknis (mis. hosting RISE) | I | **A/R** | C |

Tabel di atas hanya ilustrasi generik; RACI riil dinegosiasikan per proyek di dalam kontrak dan *project charter*. Perhatikan kolom Accountable: hampir semua keputusan bisnis dan penerimaan hasil berujung di perusahaan, bukan di partner. Itu bukan kebetulan, melainkan inti dari governance yang benar.

## Menjaga proyek tetap di jalur: change request, fit-to-standard, dan quality gate SAP Activate

Tiga rem menahan *scope creep*, salah satu pembunuh anggaran dan jadwal paling umum di proyek ERP:

1. **Disiplin fit-to-standard:** adopsi proses standar SAP lebih dulu; kustomisasi hanya untuk diferensiasi bisnis yang nyata.
2. **Proses change request formal:** setiap permintaan baru dinilai dampaknya, lalu disetujui atau ditolak steering committee, bukan diselipkan diam-diam.
3. **Quality gate SAP Activate:** checkpoint di akhir tiap fase yang menahan proyek sebelum boleh lanjut.

SAP Activate adalah metodologi implementasi resmi SAP dengan enam fase berurutan: Discover, Prepare, Explore, Realize, Deploy, dan Run (SAP). Di fase Explore, workshop *fit-to-standard* mengonfirmasi kecocokan proses bisnis dengan standar SAP dan menahan kustomisasi liar sebelum masuk ke build. Di ujung tiap fase berdiri *quality gate* (Q-gate), checkpoint terstruktur tempat tim dan ahli SAP mereview apakah *deliverable* fase itu sudah lengkap sesuai standar sebelum proyek melangkah maju.

Disiplin fit-to-standard sekaligus cara paling murah menjaga [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide) sejak fase proyek: makin sedikit kustomisasi liar yang menempel di *core*, makin mudah sistem di-upgrade setelah go-live. Satu koreksi penting, fit-to-standard bukan berarti "haram kustomisasi". Ini soal urutan: standar dulu, kustomisasi hanya untuk diferensiasi bisnis nyata, dan tiap kustomisasi wajib lewat gerbang change request.

Change request adalah gerbang itu. Setiap permintaan baru (modul tambahan, laporan khusus, integrasi dadakan) masuk lewat penilaian dampak biaya, waktu, dan risiko, lalu disetujui atau ditolak steering committee. Yang berbahaya bukan perubahan itu sendiri, melainkan perubahan yang menyelinap tanpa keputusan sadar.

| Fase SAP Activate | Fokus | Kontrol governance |
|---|---|---|
| Discover | Pahami solusi & scope tingkat tinggi | Value case oleh sponsor |
| Prepare | Finalisasi rencana, setup tim & lingkungan | Charter, RACI, kickoff steering |
| Explore | Fit-to-standard workshop, konfirmasi desain | Sign-off BPO; quality gate |
| Realize | Konfigurasi, build, test, validasi | Change request; quality gate |
| Deploy | Cutover ke produksi | Keputusan go-live steering; quality gate |
| Run | Operasikan, dukung, optimalkan | Transisi ke AMS/support |

## Yang jarang diakui: menyewa partner hebat tidak menghapus tanggung jawab Anda

Menyewa system integrator terbaik sekalipun tidak memindahkan akuntabilitas bisnis; ia hanya memindahkan sebagian pekerjaan teknis. Empat hal tetap menjadi milik perusahaan: keputusan proses bisnis, kepemilikan dan kualitas data, penetapan prioritas, dan adopsi pengguna. Partner mengeksekusi dan menasihati, tetapi tidak bisa memutuskan bagaimana perusahaan Anda ingin beroperasi.

Bagian ini jarang ditulis, padahal justru di sinilah banyak proyek tergelincir. Ada kenyamanan keliru dalam berpikir "kami sudah membayar ahlinya, biar mereka yang mengurus." Empat keputusan berikut tidak bisa didelegasikan:

- **Keputusan proses bisnis.** Hanya perusahaan yang tahu bagaimana ia ingin, dan perlu, beroperasi. Partner bisa menawarkan praktik terbaik, tetapi memilihnya adalah hak sekaligus beban Anda.
- **Kepemilikan dan kualitas data.** Data kotor yang dimigrasikan hanya memindahkan kekacauan ke sistem baru. Menentukan mana yang benar butuh orang bisnis, bukan konsultan teknis.
- **Prioritas.** Apa yang harus jalan lebih dulu, mana yang bisa menyusul. Ini keputusan strategi, bukan konfigurasi.
- **Adopsi pengguna.** Sistem terbaik pun gagal bila karyawan kembali "mengakali" alur lewat Excel. Perubahan cara kerja hanya bisa dipimpin dari dalam.

Ironisnya, partner yang benar-benar baik justru mendorong Anda memperkuat governance sendiri, bukan melemahkannya. Sebagai partner yang bekerja di dalam struktur ini, Soltius mendampingi steering committee dan PMO perusahaan tanpa mengambil alih keputusan bisnis yang memang harus tetap berada di tangan Anda.

Beberapa tanda governance sedang lemah dan layak diwaspadai: keputusan penting menunggu berminggu-minggu tanpa pemilik yang jelas; scope bertambah tanpa ada yang ingat kapan menyetujuinya; rapat steering berubah jadi ajang *update* status alih-alih forum keputusan; dan tim teknis partner menganggur menunggu arahan bisnis yang tak kunjung datang. Bila tiga dari empat terasa familiar, akar masalahnya ada di tata kelola, bukan di partner.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu steering committee dalam proyek migrasi ERP?

Steering committee adalah badan pengarah tertinggi proyek, berisi sponsor eksekutif dari sisi perusahaan bersama perwakilan partner atau SAP. Perannya menyetujui tujuan, anggaran, dan sumber daya; memutuskan perubahan berdampak besar; menjaga keselarasan proyek dengan strategi bisnis; dan menjadi level eskalasi terakhir, misalnya ketika sebuah kustomisasi khusus diminta dan harus ditimbang untung-ruginya.

### Apa itu RACI matrix dan bagaimana memakainya di proyek SAP?

RACI matrix memetakan siapa Responsible (mengerjakan), Accountable (satu pihak penanggung jawab akhir), Consulted (dimintai masukan), dan Informed (diberi tahu) untuk tiap deliverable. Di proyek SAP, ia menjernihkan pembagian Customer/SAP/Partner: partner umumnya Responsible mengeksekusi, sementara perusahaan tetap Accountable atas keputusan proses dan penerimaan hasil. Aturan emasnya, hanya satu pihak Accountable per deliverable.

### Siapa saja tim dari sisi perusahaan dalam proyek migrasi ERP?

Minimal empat lapisan: project sponsor (eksekutif senior pemilik value case), steering committee (pengarah dan pengambil keputusan strategis), business process owner (pemilik keputusan proses per domain seperti finance atau supply chain), dan PMO/project manager (koordinasi harian, jadwal, risiko, change request). Ditambah key user untuk pengujian dan data owner untuk menjaga kualitas data migrasi.

### Apa itu quality gate dalam SAP Activate?

Quality gate (Q-gate) adalah titik kontrol resmi di akhir setiap fase SAP Activate. Sebelum proyek boleh lanjut ke fase berikutnya, tim dan ahli SAP mereview apakah deliverable fase itu sudah lengkap sesuai standar dan selaras best practice. Q-gate mencegah proyek melaju dengan pekerjaan setengah matang atau tergelincir ke kompleksitas kustomisasi yang tidak perlu.

### Bagaimana mengendalikan scope creep pada proyek ERP?

Kombinasikan tiga rem: disiplin fit-to-standard (adopsi proses standar SAP dulu, kustomisasi hanya bila ada alasan bisnis kuat); proses change request formal (setiap permintaan baru dinilai dampaknya lalu disetujui atau ditolak steering committee, bukan diselipkan diam-diam); dan quality gate SAP Activate sebagai checkpoint tiap fase. Scope creep adalah salah satu pembunuh anggaran dan timeline paling umum.

### Berapa sering steering committee sebaiknya bertemu?

Tidak ada angka baku dari SAP. Dalam praktik, steering committee umumnya bertemu bulanan untuk meninjau progres, risiko, dan keputusan besar, dengan rapat ad-hoc saat ada eskalasi mendesak. Cadence bisa dirapatkan (misalnya dua mingguan) selama fase intensif seperti Realize dan menjelang cutover. Yang penting keputusan tidak dibiarkan menggantung.

### Apa yang tidak bisa didelegasikan perusahaan ke partner implementasi?

Empat hal inti tetap milik perusahaan: keputusan proses bisnis (bagaimana perusahaan ingin beroperasi), kepemilikan dan kualitas data, prioritas (apa yang penting lebih dulu), dan adopsi pengguna (perubahan cara kerja). Partner hebat mengeksekusi dan menasihati, tetapi menyewa SI tidak memindahkan akuntabilitas bisnis ini; ia hanya memindahkan sebagian pekerjaan teknis.

## Kesimpulan

Memilih system integrator yang tepat memang penting, tetapi itu baru separuh cerita. Separuh lainnya, yang menentukan apakah proyek migrasi ERP ke cloud Anda selesai tepat waktu dan sesuai tujuan, adalah tata kelola dari sisi perusahaan: sponsor yang hadir, steering yang benar-benar memutuskan, RACI yang dijalankan, dan gerbang yang menahan scope. Kerangka itu bukan birokrasi, melainkan cara menjaga kendali tetap di tangan Anda. Sebagai SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group sejak 1998, Soltius mendampingi steering committee dan PMO perusahaan lintas industri, memperkuat tata kelola Anda tanpa menggantikan keputusan bisnis yang tetap menjadi milik perusahaan.

Untuk mendiskusikan kesiapan tata kelola dan peta jalan migrasi ERP ke cloud di perusahaan Anda, jelajahi solusinya di soltius.co.id.
