---
title: "Risiko Low-Code Platform yang Jarang Dibahas: Keamanan Data, Shadow IT, dan Vendor Lock-In"
meta_title: "Low-Code Platform: Risiko Keamanan & Shadow IT Enterprise"
meta_description: "Risiko low-code platform yang sering diabaikan CIO: shadow IT, vendor lock-in, celah data, dan technical debt. Lengkap dengan checklist keamanan dan UU PDP."
slug: "risiko-low-code-platform-keamanan-shadow-it-vendor-lock-in"
language: "id"
primary_keyword: "Low-Code Platform"
secondary_keywords:
  - "risiko low-code platform"
  - "keamanan data low-code"
  - "shadow IT low-code"
  - "vendor lock-in low-code"
  - "governance low-code enterprise"
  - "low-code platform aman"
  - "compliance data perusahaan"
  - "low-code security risk"
  - "SAP Build keamanan"
  - "tata kelola citizen developer"
  - "low-code tantangan"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms"
    anchor: "Low-Code Platform"
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
external_citations:
  - url: "https://www.isaca.org/resources/news-and-trends/newsletters/atisaca/2025/volume-19/from-shadow-it-to-shadow-ai-navigating-the-new-frontier-of-enterprise-risk"
    context: "Shadow IT dan Shadow AI sebagai risiko enterprise terbesar 2025 menurut ISACA"
  - url: "https://www.ibm.com/reports/data-breach"
    context: "IBM Cost of Data Breach Report 2024: rata-rata biaya pelanggaran data $4,88 juta global"
  - url: "https://jdih.komdigi.go.id/produk_hukum/view/id/832/t/undangundang+nomor+27+tahun+2022"
    context: "UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi, sanksi 2% pendapatan tahunan"
brief_id: "low-code-platform-04"
target_word_count: 1350
publish_month: "2026-06"
word_count: 1354
---

# Risiko Low-Code Platform yang Jarang Dibahas: Keamanan Data, Shadow IT, dan Vendor Lock-In

CIO yang skeptis terhadap *low-code platform* punya alasan yang valid. Bukan karena teknologinya buruk, melainkan karena mayoritas artikel tentang topik ini berhenti di slide promosi vendor: cepat, mudah, hemat biaya. Yang jarang ditulis adalah bagian setelahnya: bagaimana program *citizen developer* yang tidak dikelola dengan benar bisa berubah menjadi sumber kebocoran data, aplikasi yang tidak bisa diaudit, atau ketergantungan vendor yang mahal untuk dilepas.

Artikel ini bukan anti-*low-code*. Platform ini nyata manfaatnya. Tapi manfaat itu hanya dapat dipetik jika risiko utamanya diidentifikasi sejak awal, bukan setelah insiden pertama terjadi.

> **Secara singkat:** *Low-code platform* di enterprise membawa empat risiko utama yang sering diabaikan: *shadow IT* (aplikasi tanpa pengawasan IT), *vendor lock-in* (ketergantungan pada ekosistem satu vendor), celah keamanan data akibat akses *citizen developer* yang tidak terkontrol, dan *technical debt* tersembunyi dari aplikasi yang tidak terdokumentasi. Mengelola keempat risiko ini membutuhkan framework *governance* yang dirancang sebelum deployment, terutama dengan UU PDP Indonesia berlaku penuh sejak Oktober 2024.

Melalui artikel ini, kita akan membedah keempat risiko tersebut, melihat cara mitigasinya, dan membahas checklist keamanan yang perlu diperiksa sebelum *deploy*.

{IMAGE_01: Matriks risiko 4 baris × 4 kolom (Risiko | Dampak Potensial | Tanda Peringatan | Mitigasi), format tabel infografik korporat biru-putih, header bold, baris bergantian putih dan biru muda, teks Bahasa Indonesia, gaya minimal profesional, ukuran landscape}

## Mengapa Risiko Low-Code Platform Sering Diabaikan — dan Mengapa Itu Berbahaya

Adopsi *low-code platform* di perusahaan biasanya dimulai dengan niat baik: membantu tim bisnis membangun aplikasi internal tanpa harus antre panjang di backlog IT. Masalahnya, ketika program ini tumbuh tanpa kerangka yang jelas, IT sering kali baru menyadari seberapa luas dampaknya setelah masalah muncul.

ISACA mendokumentasikan fenomena ini dalam laporan 2025 mereka, "From Shadow IT to Shadow AI," yang mengklasifikasikan *low-code* tanpa *governance* sebagai bentuk modern *shadow IT*: aplikasi yang berjalan di lingkungan perusahaan tapi di luar kendali, audit, dan perlindungan IT. Ini bukan teori; ini pola yang terdokumentasi dalam survei tata kelola IT global.

Satu angka yang sulit diabaikan: IBM Cost of Data Breach Report 2024 melaporkan rata-rata biaya pelanggaran data sebesar **$4,88 juta per insiden** secara global, naik 10% dari tahun sebelumnya. Biaya itu mencakup deteksi, notifikasi, respons, dan dampak bisnis jangka pendek, belum termasuk reputasi. Jika aplikasi *low-code* internal yang dibangun tanpa kontrol akses yang tepat menjadi pintu masuk, organisasi menanggung beban itu sendirian.

**BACA JUGA:** [Low-Code Platform](https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms).

## Empat Risiko Utama Low-Code Platform di Enterprise: Matriks dan Mitigasi

Berikut empat kategori risiko yang paling sering muncul dalam implementasi *low-code* di lingkungan enterprise:

| Risiko | Dampak Potensial | Tanda Peringatan | Mitigasi |
|---|---|---|---|
| **Shadow IT** | Data tidak terproteksi; aplikasi tanpa backup; celah compliance | Tim bisnis membuat aplikasi sendiri tanpa notifikasi IT | Governed low-code platform dengan approval workflow; federated governance |
| **Vendor Lock-In** | Sulit migrasi; biaya tinggi jika vendor naikkan harga atau hentikan support | Logic bisnis seluruhnya dalam format proprietary; tidak ada export standar | Evaluasi portabilitas data dan logic sebelum kontrak; pilih platform berbasis open standards |
| **Data Security Gap** | Akses tidak sah ke data sensitif; pelanggaran UU PDP (sanksi hingga 2% pendapatan) | Citizen developer dapat akses tabel database produksi langsung; tidak ada role separation | Role-based access control; data classification; audit log aktif |
| **Technical Debt Tersembunyi** | Aplikasi tidak terawat; tidak bisa diaudit; kerentanan tidak tertangani | Aplikasi "orphan" tanpa pemilik jelas; tidak ada dokumentasi versi | App lifecycle management; mandatory documentation; periodic audit inventory |

Keempat risiko ini bukan hipotesis. Panorama Consulting dan ISACA mendokumentasikan fenomena aplikasi *orphan* (aplikasi yang dibangun oleh karyawan yang sudah pindah divisi atau resign) sebagai salah satu titik lemah governance IT yang paling sulit dilacak.

## Bagaimana Shadow IT Terjadi Lewat Low-Code — dan Cara Mencegahnya?

Mekanismenya sederhana. Tim bisnis butuh aplikasi untuk mengotomasi laporan mingguan atau melacak approval internal. Mereka mengajukan ke IT, tapi backlog IT panjang. Dalam hitungan minggu, mereka sudah menemukan *low-code platform* gratis dengan akun Google, membangun sendiri, dan mulai memakai. IT tidak tahu aplikasi itu ada, dan data pelanggan atau karyawan sudah mengalir keluar dari perimeter keamanan perusahaan. Bukan karena niat buruk, melainkan karena kebutuhan bisnis nyata tidak terpenuhi.

Solusinya bukan melarang *low-code*; larangan itu tidak akan efektif. Solusinya adalah apa yang ISACA sebut sebagai **federated governance model**: IT menetapkan *guardrails* dan standar (platform yang disetujui, standar keamanan, proses approval), sementara tim bisnis bebas membangun dalam batas tersebut. Ini adalah *citizen development* yang terstruktur, berlawanan dengan *shadow IT*.

Dari sisi teknis, platform seperti **SAP Build** di atas **SAP Business Technology Platform (BTP)** mendukung model ini secara native: *Role Collections* untuk mengontrol siapa bisa membangun dan mengakses apa, *approval workflow* di Build Process Automation yang mengharuskan aplikasi baru melalui review IT sebelum masuk produksi, dan Audit Log Service dengan retensi default 90 hari yang dapat diintegrasikan ke sistem SIEM eksternal.

Pendekatan ini juga relevan bagi perusahaan yang sudah menerapkan prinsip [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide). Dalam pendekatan clean core, ekstensi dibangun di sisi platform (BTP) dan bukan di inti S/4HANA, sehingga risiko teknis tersentralisasi dan lebih mudah diaudit.

## Vendor Lock-In pada Low-Code: Kekhawatiran yang Valid dan Cara Mengevaluasinya

*Vendor lock-in* sering dijadikan alasan menghindari *low-code* sepenuhnya. Tapi ini sering salah bingkai.

Bukan semua lock-in itu buruk. Untuk perusahaan yang sudah beroperasi di ekosistem SAP, memilih SAP Build di BTP memiliki *switching cost*, tapi cost itu diimbangi oleh integrasi native dengan S/4HANA, konsistensi data governance, dan satu vendor untuk dukungan. Yang berbahaya bukan lock-in itu sendiri, melainkan ketika keputusan dibuat tanpa evaluasi yang sadar.

Sebelum menandatangani kontrak dengan platform *low-code* manapun, tiga pertanyaan ini perlu dijawab:

1. **Portabilitas data**: Apakah data dapat diekspor dalam format standar (CSV, JSON, atau API terbuka), atau terkunci dalam format proprietary?
2. **Portabilitas logic**: Apakah workflow dan business rules dapat dimigrasi ke platform lain, atau harus dibangun ulang dari nol?
3. **Exit cost**: Berapa estimasi biaya waktu dan uang jika harus pindah platform dalam 3–5 tahun ke depan?

Untuk SAP Build di BTP secara spesifik: data ownership tetap di tenant customer, bukan di infrastruktur SAP secara umum. BTP tersedia di beberapa region Asia Pacific; untuk kebutuhan data residency terkait UU PDP Indonesia, perusahaan perlu mengkonfirmasi langsung dengan SAP atau mitra implementasi mengenai ketersediaan di region yang tepat.

Pertanyaan soal *vendor lock-in* juga muncul dalam konteks perencanaan [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud). Perusahaan yang sedang bermigrasi perlu memastikan platform *low-code* yang dipilih selaras dengan arsitektur cloud ERP mereka, agar governance pasca-migrasi tidak menjadi sumber masalah baru.

## Checklist Keamanan Sebelum Deploy Low-Code Platform di Perusahaan

{IMAGE_02: Checklist 8 poin vertikal dengan ikon centang (✓) di setiap baris, layout dua kolom, warna biru-putih korporat, setiap poin bernomor dengan label bold, header "Checklist Keamanan Low-Code Platform Enterprise", teks Bahasa Indonesia, gaya minimal profesional}

Delapan item minimum yang sebaiknya diperiksa sebelum *deployment*:

1. **Role-Based Access Control (RBAC)**: siapa boleh membangun, siapa boleh mengakses data apa
2. **Data classification**: data mana yang sensitif; siapa level aksesnya
3. **Audit trail**: log aktivitas yang cukup untuk investigasi insiden; terintegrasi ke SIEM
4. **Approval workflow**: IT mereview setiap aplikasi sebelum masuk produksi
5. **Backup dan disaster recovery**: aplikasi *low-code* operasional harus tercakup dalam DR plan enterprise
6. **Compliance mapping UU PDP**: UU No. 27 Tahun 2022 berlaku penuh sejak Oktober 2024; sanksi hingga **2% pendapatan tahunan**; setiap aplikasi yang menyentuh data pribadi karyawan atau pelanggan wajib comply. Assessment kesiapan ini dapat dilakukan bersama mitra implementasi SAP yang berpengalaman.
7. **Exit strategy**: dokumentasikan portabilitas data dan logic; estimasi *switching cost* sejak awal
8. **Incident response plan**: prosedur jika aplikasi *low-code* terlibat insiden keamanan

---

## FAQ (Pertanyaan yang Sering Diajukan)

### Apakah low-code platform aman untuk data sensitif perusahaan?

Keamanan bergantung pada bagaimana platform dikelola, bukan semata fitur bawaannya. SAP Build di BTP menyediakan RBAC, audit logging dengan retensi 90 hari, dan enkripsi data. Tapi tanpa framework governance yang jelas tentang siapa boleh akses apa dan aplikasi mana yang boleh dibangun, platform terbaik sekalipun bisa menjadi titik lemah.

### Apa perbedaan shadow IT dan citizen development yang terstruktur?

*Shadow IT* terjadi ketika tim bisnis membuat aplikasi tanpa sepengetahuan IT. *Citizen development* terstruktur adalah kebalikannya: tim bisnis membangun dalam batas yang ditetapkan IT, menggunakan platform yang disetujui, mengikuti standar keamanan, dan melewati proses approval. ISACA (2025) mendokumentasikan *shadow IT* sebagai risiko governance terbesar saat ini; *citizen development* yang dikelola justru menjadi solusinya.

### Bagaimana mencegah vendor lock-in saat memilih low-code platform?

Tiga pertanyaan kunci sebelum kontrak: (1) Apakah data dapat diekspor dalam format standar? (2) Apakah logic *workflow* bisa dimigrasi? (3) Berapa estimasi biaya pindah platform dalam 3–5 tahun? Untuk ekosistem SAP, SAP Build di BTP memiliki *switching cost*, tapi integrasi native dengan S/4HANA seringkali mengimbanginya jika dievaluasi secara sadar.

### Apakah SAP Build aman untuk data enterprise?

Ya, jika dikonfigurasi dengan benar. SAP BTP menyertakan *Role Collections* untuk RBAC, Audit Log Service dengan retensi 90 hari dan integrasi ke SIEM, *approval workflow* di Build Process Automation, serta SAP Key Management Service (diluncurkan Q4 2025) untuk kontrol enkripsi di sisi customer. Data ownership tetap di tenant customer.

### Apa regulasi Indonesia yang relevan untuk keamanan data di low-code platform?

UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP), berlaku penuh sejak Oktober 2024. Setiap aplikasi *low-code* yang memproses data pribadi (nama, nomor identifikasi, data keuangan, data kesehatan) wajib comply. Pelanggaran dikenai sanksi administratif hingga 2% dari pendapatan tahunan, plus potensi sanksi pidana untuk pelanggaran serius.

### Bagaimana cara mengaudit aplikasi yang dibangun dengan low-code?

Empat dimensi: (1) Inventarisasi semua aplikasi, siapa yang membuat, data apa yang diakses; (2) Access review, siapa punya akses ke aplikasi dan data terkait; (3) Audit trail, apakah platform mencatat log yang cukup untuk investigasi; (4) Lifecycle review, adakah aplikasi *orphan* tanpa pemilik aktif yang perlu dinonaktifkan. SAP BTP Audit Log Service menyediakan dasar teknisnya.

### Kapan harus melibatkan tim keamanan IT sebelum deploy low-code platform?

Sejak pemilihan platform, sebelum aplikasi apapun dibuat. Tim keamanan perlu terlibat dalam evaluasi fitur security (RBAC, audit log, data residency), *mapping* compliance UU PDP, perancangan governance model, dan penyusunan *incident response plan*. Keterlibatan setelah deployment jauh lebih mahal, baik dari segi waktu remediasi maupun risiko yang sudah terekspos.

---

Risiko *low-code platform* bukan alasan untuk menghindarinya, melainkan alasan untuk mendekatinya dengan persiapan yang tepat. Organisasi yang berhasil dengan program *citizen developer* bukan yang paling berani memulai, tapi yang paling disiplin membangun governance-nya.

Sebagai SAP Platinum Partner, Soltius Indonesia tidak hanya membantu perusahaan mengimplementasikan SAP Build di atas SAP BTP, tetapi juga merancang framework governance yang memastikan program *citizen developer* berjalan secara aman dan patuh, jauh sebelum masalah pertama sempat muncul.

Untuk mendiskusikan kesiapan *governance* dan keamanan *low-code platform* di perusahaan Anda, kunjungi soltius.co.id.
