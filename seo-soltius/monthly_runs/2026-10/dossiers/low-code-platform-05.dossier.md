---
brief_id: "low-code-platform-05"
researcher_run_date: "2026-10-07"
sources_cited: 11
flags: 6
---

# Research Dossier: Saat Aplikasi Low-Code Berkembang Liar: Tata Kelola Siklus Hidup (ALM)

## TL;DR for the writer

- Angle inti: **application sprawl** (portofolio aplikasi low-code yang tak terkelola) dan obatnya, **ALM (Application Lifecycle Management)** — disiplin mengelola aplikasi dari ide hingga pensiun. Konsep sprawl/ALM boleh dijelaskan **vendor-neutral**; klaim fitur SAP spesifik **wajib** bersumber (dossier ini menyediakannya).
- SAP sudah punya mekanisme ALM nyata untuk low-code: environment dipisah lewat **subaccount** (Dev/Test/Prod) di **SAP BTP**; perpindahan antar-environment pakai layanan resmi **SAP Cloud Transport Management (SAP CTM)**; **SAP Build Apps** punya fitur **project versioning** (released versions) yang ditransport antar-subaccount; **SAP Build Process Automation** juga mendukung transport konten antar-tenant. Semua ini terverifikasi — gunakan nama fitur persis seperti di bawah, jangan mengarang.
- Angka adopsi yang kuat & bisa dikutip: Gartner — **70% aplikasi baru akan memakai low-code/no-code pada 2025** (naik dari <25% di 2020); dan **pada 2026, ≥80% pengguna tool low-code berasal dari luar IT formal** (naik dari 60% di 2021). Keduanya menjelaskan *mengapa* volume aplikasi meledak → sprawl.
- Pesan "jujur" (H2 #5): tata kelola berlebihan membunuh kecepatan — justru alasan low-code dipakai. Gunakan framing **tiering berbasis risiko** dan **Center of Excellence (CoE)** sebagai "jaringan ikat" tata kelola (Forrester/industri).
- Soltius anchor (closing, 1 mention utama + maks 1 aside): **Application Management Services (AMS)** — Soltius *mendampingi/mengelola* siklus hidup aplikasi SAP Build pasca go-live, **bukan membangun** SAP Build. Kredibilitas: Certified AMC & AMS Partner (PCoE Indonesia), SAP Platinum Partner, Metrodata Group sejak 1998.

## Core facts (verified)

> **Claim**: Gartner memproyeksikan mayoritas aplikasi baru akan dibangun dengan low-code/no-code.
> **Number/specific**: 70% aplikasi baru yang dikembangkan organisasi akan memakai teknologi low-code atau no-code pada **2025**, naik dari kurang dari 25% pada 2020.
> **Source**: Gartner (press release 2021, dikutip luas), via ringkasan ToolJet/Quixy — 2026-10-07.
> **Confidence**: high untuk angka & tren; medium untuk **tahun** — beberapa sumber sekunder menyatakan ulang sebagai "2026". Writer: pakai "pada 2025" (angka asli Gartner) atau bingkai sebagai tren menuju pertengahan dekade; lihat Flag.

> **Claim**: Basis pengguna tool low-code makin didominasi non-IT.
> **Number/specific**: Pada 2026, developer di luar departemen IT formal akan mencakup **setidaknya 80%** basis pengguna tool low-code, naik dari 60% pada 2021.
> **Source**: Gartner, dikutip via Workplace Intelligence / Kissflow — 2026-10-07.
> **Confidence**: high.

> **Claim**: "Business technologist" (karyawan non-IT yang membuat kapabilitas teknologi) sudah umum.
> **Number/specific**: Gartner — **41%** karyawan dapat dikategorikan sebagai business technologist (bervariasi per industri; dari survei ~12.000 karyawan).
> **Source**: Gartner, dikutip via Jitterbit/Kissflow — 2026-10-07.
> **Confidence**: medium-high (statistik Gartner nyata; dikutip lewat sumber sekunder, bukan URL primer Gartner).

> **Claim**: Jumlah citizen developer aktif jauh melampaui developer profesional di enterprise besar.
> **Number/specific**: Gartner — citizen developer aktif akan **≥4x** jumlah developer profesional di enterprise besar.
> **Source**: Gartner, dikutip via ringkasan industri (ToolJet) — 2026-10-07.
> **Confidence**: medium (dikutip lewat sekunder).

> **Claim**: Lembaga analis menegaskan sprawl tumbuh lebih cepat daripada tata kelola.
> **Number/specific**: Forrester (AppGen & Low-Code Platforms Landscape) — application sprawl tumbuh lebih cepat daripada governance, integrasi, dan pengawasan lifecycle; kesenjangan itu menumpuk risiko dan technical debt seiring adopsi meluas.
> **Source**: Forrester AppGen & Low-Code Platforms Landscape, diparafrasekan via Synoptek/Betsol — 2026-10-07.
> **Confidence**: medium (framing analis valid; teks persis via sumber sekunder — writer sebaiknya atribusikan "menurut analis seperti Forrester" tanpa mengutip kalimat verbatim).

> **Claim**: Pasar low-code tumbuh pesat.
> **Number/specific**: Forrester memproyeksikan pasar low-code global ~**USD 50 miliar pada 2028**, tumbuh ~33% per tahun.
> **Source**: Forrester, diparafrasekan via Synoptek — 2026-10-07.
> **Confidence**: medium (angka pasar sering berbeda antar laporan; bingkai sebagai "menurut Forrester, ~USD 50 miliar pada 2028" bukan angka mutlak).

> **Claim**: SAP menyediakan layanan transport terpusat & resmi untuk memindahkan aplikasi antar-environment di cloud.
> **Number/specific**: **SAP Cloud Transport Management (SAP CTM)** — layanan terpusat di SAP BTP untuk mentransport deliverable antar-subaccount (Development → Test → Production), dengan audit trail menyeluruh dan pemisahan tugas (separation of concerns) antara development dan operations; tidak memerlukan sistem ABAP.
> **Source**: SAP Community / SAP Help (Software Logistics for SAP BTP; "Streamlining Application Transport with SAP Cloud Transport Management on BTP") — 2026-10-07.
> **Confidence**: high.

> **Claim**: SAP Build Apps punya mekanisme versioning dan transport resmi antar-environment.
> **Number/specific**: SAP Build Apps memperkenalkan **project versioning** untuk proyek Web & Mobile — memungkinkan **released versions** ditransport antar-subaccount, mengisolasi development, testing, dan deployment produktif pada landscape masing-masing. Proyek SAP Build Apps didukung sebagai **MTA content type** di environment Cloud Foundry via **Content Agent Service** (ekspor & impor).
> **Source**: SAP Community ("Transporting content in SAP Build Apps — SAP Cloud Transport Management integration") — 2026-10-07.
> **Confidence**: high untuk keberadaan fitur; medium untuk detail mekanis (writer cukup sebut "project versioning" dan "released versions ditransport antar-subaccount" tanpa merinci langkah teknis).

> **Claim**: SAP Build Process Automation juga mendukung transport konten antar-environment.
> **Number/specific**: SAP Build Process Automation menyediakan proses transport untuk memindahkan konten/process antar-tenant (dev, test, prod) secara terkontrol.
> **Source**: SAP Community ("Transporting content in SAP Build Process Automation", 2023) — 2026-10-07.
> **Confidence**: high.

> **Claim**: Di SAP BTP, batas environment direpresentasikan oleh subaccount, dengan pola landscape linear.
> **Number/specific**: Setup umum memakai **tiga subaccount (Dev/Test/Prod)**; di UI SAP CTM dibuat **tiga transport node** dihubungkan **dua transport route** (Dev→Test, Test→Prod) — landscape linear tiga-node. Arsitektur yang direkomendasikan dapat menambah satu **subaccount Central** sebagai hub administrasi transport.
> **Source**: SAP learning.sap.com (Exploring DevOps with SAP BTP) + SAP Community — 2026-10-07.
> **Confidence**: high.

> **Claim**: SAP BTP memiliki kapabilitas software lifecycle management untuk environment pengembangan.
> **Number/specific**: SAP BTP ABAP Environment menyediakan **Lifecycle Management / Software Lifecycle Management**; SAP BTP memakai dua landscape komplementer — development landscape (prinsip Continuous Integration) dan delivery landscape (aturan transport ketat: policy, jadwal, role).
> **Source**: SAP Community ("SAP BTP Platform ABAP Environment - Lifecycle Management"; "Software Lifecycle Management for SAP BTP ABAP Environment") + SAP Support (sl-for-sap-btp) — 2026-10-07.
> **Confidence**: high.

> **Claim**: Adopsi low-code di enterprise sudah multi-platform, memperbesar kebutuhan tata kelola portofolio.
> **Number/specific**: 48% organisasi memiliki Center of Excellence (CoE) low-code khusus; 84% enterprise besar menjalankan ≥3 platform low-code berbeda (OutSystems).
> **Source**: OutSystems, dikutip via Betsol/Synoptek — 2026-10-07.
> **Confidence**: medium (sumber vendor; bingkai sebagai "menurut survei industri").

> **Claim**: Disiplin ALM yang rapi menopang prinsip Clean Core SAP.
> **Number/specific**: Clean Core = menjaga core S/4HANA tetap standar/upgrade-safe dengan memindahkan ekstensi ke **side-by-side extensions di SAP BTP**; lifecycle (environment terpisah + transport terkontrol) memastikan ekstensi low-code tetap upgrade-safe saat sistem sumber di-upgrade.
> **Source**: `knowledge_base/product_matrix.md` (Clean Core row) + konsep BTP extensibility SAP — 2026-10-07.
> **Confidence**: high untuk prinsip (vendor-neutral + product_matrix); writer tak perlu angka.

### Soltius facts (verified-by-default dari knowledge_base — boleh dinyatakan langsung)

> **Claim**: Soltius menyediakan Application Management Services (AMS) dan berstatus partner AMS resmi SAP.
> **Number/specific**: Certified **AMC & AMS Partner** — Partner Center of Expertise (PCoE) di Indonesia; AMS ada di lini layanan "Supports".
> **Source**: `knowledge_base/company_profile.md` — verified.
> **Confidence**: high.

> **Claim**: Soltius adalah mitra implementasi SAP, bukan pembuat software.
> **Number/specific**: SAP Platinum Certified Channel Partner & VAR (tier tertinggi) via United VARs; anak perusahaan PT Metrodata Electronics Tbk (99,9%, sejak 2008); berdiri 1998; 200+ konsultan; 120+ klien.
> **Source**: `knowledge_base/company_profile.md` — verified.
> **Confidence**: high.

> **Claim**: Soltius menangani ranah low-code/BTP sebagai engagement, bukan produk sendiri.
> **Number/specific**: Solusi **Digital Platform** (extensibility / low-code / integration platform engagements) + layanan Implementation & AMS.
> **Source**: `knowledge_base/company_profile.md` + `product_matrix.md` (Low-Code row) — verified.
> **Confidence**: high.

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Konsep **environment** (subaccount Dev/Test/Prod) di **SAP BTP** | Environment dipisah per subaccount; pola landscape linear tiga-node | H2 #3 (tabel fase) & #4 | — |
| **SAP Cloud Transport Management (SAP CTM)** | Layanan transport terpusat antar-subaccount; audit trail; separation of concerns; tanpa sistem ABAP | H2 #3 / #4 | — |
| **SAP Build Apps project versioning** + **SAP Build Process Automation transport** | Released versions ditransport antar-subaccount (Web/Mobile); process transport antar-tenant | H2 #4 (versioning) | — |
| **SAP Build Lobby** (entry point governance) + role/admin di BTP | Lobby = pusat kelola proyek Build; akses dikontrol via role collection BTP (⚠️ lihat flag soal penamaan fitur governance) | H2 #4 (katalog/kepemilikan) | — |
| **Center of Excellence (CoE)** | Model organisasi tata kelola; "jaringan ikat" kebijakan | H2 #4 & #5 | Aside opsional 1 kalimat |
| **Clean Core** tie-in | ALM rapi menjaga ekstensi BTP upgrade-safe | H2 #3/#4 singgung + internal link | — |
| **Soltius Application Management Services (AMS)** | Soltius *mendampingi/mengelola* lifecycle aplikasi SAP Build pasca go-live | **Closing** | **AMS + ERP Strategy; Certified AMS Partner (PCoE), SAP Platinum Partner, Metrodata Group** |

Reminder: Soltius **implements/migrates/supports** teknologi ini — **tidak membangun** SAP Build/BTP. Maks **2–3** self-mention Soltius (idealnya 1 closing + maks 1 aside CoE).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Community — "Transporting content in SAP Build Apps (SAP Cloud Transport Management integration)"** (SAP, 2026-10-07) — https://community.sap.com/t5/application-development-and-automation-blog-posts/transporting-content-in-sap-build-apps-sap-cloud-transport-management/ba-p/13737478 — *what it backs*: SAP Build Apps **project versioning** + released versions ditransport antar-subaccount via SAP CTM. (Catatan: halaman balas HTTP 403 ke WebFetch otomatis; isinya terkonfirmasi lewat ringkasan WebSearch SAP Community. Writer: tautkan, tapi jangan kutip verbatim.)
2. **SAP Learning — "Exploring DevOps with SAP BTP" / SAP Support Software Logistics for SAP BTP** (SAP) — https://learning.sap.com/courses/exploring-devops-with-sap-btp + https://support.sap.com/en/tools/software-logistics-tools/sl-for-sap-btp.html — *what it backs*: SAP CTM, landscape Dev/Test/Prod tiga-node, separation of concerns.
3. **Gartner (low-code forecast, via ringkasan industri)** — *what it backs*: 70% aplikasi baru low-code (2025); ≥80% pengguna low-code dari luar IT (2026). Writer sebaiknya cari URL press-release Gartner primer bila ingin menautkan langsung (lihat Flag).
4. **Forrester — AppGen & Low-Code Platforms Landscape** (lanskap analis) — *what it backs*: sprawl tumbuh lebih cepat dari governance; kebutuhan CoE & lifecycle oversight.

Prioritas: SAP official > Gartner/Forrester/IDC > Kemenkominfo/BPS.

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu application sprawl pada low-code?
Application sprawl adalah kondisi ketika organisasi memiliki terlalu banyak aplikasi tak terkelola — tanpa pemilik, versi, atau rencana pensiun yang jelas. Low-code mempercepatnya karena aplikasi mudah dibuat siapa saja. Akibatnya portofolio membengkak, risiko dan technical debt menumpuk, dan tim IT kehilangan jejak mana aplikasi yang masih dipakai, siapa pemiliknya, dan mana yang menyimpan data sensitif.

### Apa itu ALM (Application Lifecycle Management) untuk low-code?
ALM adalah disiplin mengelola aplikasi di seluruh siklus hidupnya: ide → bangun → uji → rilis ke produksi → pelihara → pensiun. Pada low-code, ALM menambahkan pengelolaan kecepatan rilis dan peran citizen developer. Tujuannya menjaga agar setiap aplikasi punya environment yang benar, versi yang terlacak, pemilik yang jelas, dan jalur pensiun — sehingga portofolio tetap terkendali, bukan tumbuh liar.

### Mengapa aplikasi low-code butuh environment dev/test/prod yang terpisah?
Memisahkan environment development, test, dan produksi mencegah perubahan setengah jadi merusak aplikasi yang dipakai pengguna. Di SAP BTP, pemisahan ini diwujudkan lewat subaccount berbeda, dan perpindahan antar-environment dilakukan terkontrol memakai SAP Cloud Transport Management — lengkap dengan audit trail dan pemisahan tugas antara tim pembangun dan operasional. Tanpa pemisahan ini, uji coba dan produksi bercampur dan berisiko.

### Bagaimana cara memensiunkan (dekomisioning) aplikasi low-code yang tak terpakai?
Mulailah dengan katalog aplikasi: identifikasi aplikasi dengan pemakaian nol atau pemilik yang hilang. Tetapkan aturan pensiun — misalnya aplikasi tanpa aktivitas dalam periode tertentu masuk daftar tinjau. Sebelum menonaktifkan, arsipkan datanya, beri tahu pengguna tersisa, cabut akses, lalu hapus dari environment produksi. Pensiun yang terencana mengurangi permukaan risiko dan beban pemeliharaan, serta membersihkan sprawl.

### Siapa yang bertanggung jawab atas aplikasi low-code di perusahaan?
Setiap aplikasi sebaiknya punya pemilik (owner) bisnis yang jelas dan tercatat di katalog aplikasi — orang atau unit yang bertanggung jawab atas relevansi, data, dan keputusan pensiunnya. IT dan Center of Excellence menetapkan guardrail (environment, hak akses, standar), sementara pemilik menjaga aplikasinya tetap berguna. Tanpa kepemilikan yang jelas, aplikasi menjadi "yatim" dan menjadi sumber utama sprawl.

### Apa itu Center of Excellence (CoE) low-code?
CoE low-code adalah tim lintas-fungsi yang menjadi pusat tata kelola: menetapkan standar, guardrail, template yang bisa dipakai ulang, dan kurasi platform. Ia menghubungkan IT dengan citizen developer agar kecepatan tetap tinggi tanpa kehilangan kontrol. Survei industri menunjukkan sekitar 48% organisasi sudah memiliki CoE low-code khusus — tanda bahwa tata kelola terstruktur menjadi praktik arus utama, bukan kemewahan.

### Apakah SAP Build/BTP menyediakan kontrol ALM bawaan?
Ya. SAP BTP memisahkan environment lewat subaccount (Dev/Test/Prod), dan SAP Cloud Transport Management (SAP CTM) memindahkan aplikasi antar-environment secara terkontrol dengan audit trail. SAP Build Apps memiliki fitur project versioning yang memungkinkan released version ditransport antar-subaccount, sementara SAP Build Process Automation mendukung transport konten antar-tenant. Jadi disiplin ALM dapat ditegakkan dengan kapabilitas resmi, bukan sekadar prosedur manual.

## Data tables for the writer

### H2 #3 — Lima fase siklus hidup aplikasi low-code & kontrol kunci (draft; writer refine)
| Fase | Apa yang terjadi | Kontrol kunci | Padanan di SAP BTP / Build |
|---|---|---|---|
| 1. Rancang | Ide & kebutuhan divalidasi; tentukan pemilik | Intake/triase; tetapkan owner & tingkat risiko | Masuk via SAP Build Lobby; katalog proyek |
| 2. Bangun (Dev) | Aplikasi dibangun di environment development | Isolasi dari produksi; standar & template | Subaccount Dev; SAP Build Apps/Process Automation |
| 3. Uji (Test) | Validasi fungsional & data sebelum rilis | Gerbang kualitas; data uji non-produksi | Subaccount Test; transport via SAP CTM (Dev→Test) |
| 4. Rilis (Prod) | Aplikasi dirilis ke pengguna | Transport terkontrol; audit trail; separation of concerns | Subaccount Prod; released version via SAP CTM (Test→Prod) |
| 5. Pelihara & versioning | Perbaikan, upgrade sumber, pelacakan versi | Versioning & rollback; pantau pemakaian | Project versioning SAP Build Apps; Lifecycle Mgmt BTP |
| 6. Pensiun | Aplikasi tak terpakai dinonaktifkan | Aturan pensiun; arsip data; cabut akses | Hapus dari subaccount produksi |

> Catatan: brief menyebut "Lima Fase" tapi mendaftar enam langkah (rancang→pensiun). Writer: boleh gabung "rancang" ke dalam "bangun" agar jadi lima, atau ubah judul H2 menjadi jumlah yang sesuai tabel. Konsisten.

### Kebebasan vs. kontrol (tiering berbasis risiko) — untuk H2 #5
| Tier aplikasi | Contoh | Tingkat tata kelola |
|---|---|---|
| Rendah risiko / personal-produktivitas | Pelacak tugas tim kecil, tanpa data sensitif | Ringan: self-service, guardrail minimal |
| Menengah / lintas-tim | Approval workflow antar-departemen | Sedang: review desain, environment Test wajib |
| Tinggi / data sensitif atau kritikal | Aplikasi menyentuh data keuangan/pelanggan/ERP | Ketat: transport terkontrol, owner wajib, audit |

## Edge cases & nuance

- **Sprawl ≠ selalu buruk.** Sejumlah aplikasi "sekali pakai" memang sehat; masalahnya adalah *tak terkelola* (tanpa owner/versi/pensiun), bukan sekadar *banyak*. Jangan menakut-nakuti volume.
- **Tata kelola ≠ birokrasi.** Pesan jujur H2 #5: jika tiap aplikasi butuh komite & tiket, kecepatan — alasan utama low-code — hilang. Solusinya **tiering berbasis risiko**, bukan satu proses berat untuk semua.
- **Environment di low-code bisa berbeda dari ABAP klasik.** Di cloud, batas environment adalah **subaccount**, bukan sistem/klien ABAP tradisional. Jangan samakan mentah-mentah dengan transport ABAP on-prem (STMS/TR) — konteksnya SAP CTM & MTA.
- **Versioning Build Apps spesifik ke tipe proyek** (Web & Mobile). Jangan generalisasi bahwa semua konten SAP Build punya mekanisme versioning yang identik — Build Process Automation punya alur transport-nya sendiri.
- **Citizen developer ≠ bebas tanpa IT.** ALM justru memberi mereka environment & guardrail agar aman — framing pemberdayaan, bukan pembatasan.
- **CoE bisa internal atau didampingi mitra.** Aside opsional soal peran mitra (Soltius AMS) harus satu kalimat, tidak menjual.

## Flags (open factual risk)

- ⚠️ **Angka Gartner "70% pada 2026" (dari brief/E-E-A-T notes).** Angka primer Gartner adalah **"70% aplikasi baru pada 2025"** (naik dari <25% di 2020). Sumber sekunder sering menyatakan ulang sebagai 2026. → Rekomendasi: tulis "pada 2025" dengan atribusi "menurut Gartner", atau bingkai sebagai tren; **jangan** kutip "~70–75% pada 2026" sebagai angka Gartner pasti.
- ⚠️ **"16,2 juta citizen developer global 2026" (dari brief).** TIDAK dapat diverifikasi di sumber manapun run ini. → Rekomendasi: **jangan dipakai**. Ganti dengan angka terverifikasi: Gartner "≥80% pengguna tool low-code dari luar IT pada 2026 (naik dari 60% di 2021)" atau "41% karyawan adalah business technologist".
- ⚠️ **Nama fitur governance SAP Build "lobby".** SAP Build Lobby nyata sebagai entry point/manajemen proyek, tetapi penamaan kontrol governance spesifik (admin/role) berevolusi. → Rekomendasi: sebut "SAP Build Lobby sebagai pusat kelola proyek" dan "akses dikontrol lewat role di SAP BTP" secara umum; jangan mengarang nama fitur/lobby-policy yang presisi.
- ⚠️ **Katalog/registry aplikasi resmi SAP.** Tidak ditemukan nama produk "katalog aplikasi" resmi tunggal di SAP Build run ini (manajemen proyek ada di Lobby; governance akun di BTP). → Rekomendasi: jelaskan "katalog aplikasi + pemilik" sebagai **praktik ALM vendor-neutral**, bukan fitur SAP bernama resmi.
- ⚠️ **Angka pasar Forrester (~USD 50 miliar 2028) & statistik OutSystems/CoE (48%, 84%, ≥3 platform).** Berasal dari parafrase/sumber sekunder, bukan URL primer. → Rekomendasi: atribusikan ("menurut Forrester…", "survei industri menunjukkan…") dan hindari menyajikannya sebagai angka mutlak; opsional, bukan wajib.
- ⚠️ **Detail mekanis transport (MTA content type, Content Agent Service, subaccount Central).** Benar tetapi terlalu teknis untuk audiens governance lead. → Rekomendasi: cukup sampaikan "released version ditransport antar-subaccount Dev→Test→Prod via SAP Cloud Transport Management dengan audit trail"; simpan detail MTA untuk tidak membebani artikel.

## Definition snippet draft (54 words)

> **Application sprawl** adalah kondisi ketika organisasi memiliki terlalu banyak aplikasi tak terkelola — tanpa pemilik, versi, atau rencana pensiun yang jelas. Platform **low-code** mempercepatnya karena aplikasi mudah dibuat siapa saja. Obatnya adalah **ALM (Application Lifecycle Management)**: disiplin mengelola setiap aplikasi dari pembuatan hingga dekomisioning agar portofolio tetap terkendali, aman, dan upgrade-safe.
