---
brief_id: "sap-clean-core-03"
researcher_run_date: "2026-06-08"
sources_cited: 18
flags: 5
---

# Research Dossier: Clean Core untuk Pengguna Bisnis: Kustomisasi SAP Tanpa Coding lewat Key-User Extensibility

## TL;DR for the writer

- Key-user (in-app) extensibility adalah jalur resmi SAP yang memungkinkan pengguna bisnis — bukan developer — menambah custom field, mengatur ulang layar Fiori, dan menambah logika sederhana melalui aplikasi **Custom Fields and Logic** (disingkat CFL), semuanya tanpa satu baris kode dan tetap clean-core-safe.
- SAP menegaskan bahwa cakupan custom field key-user **lebih luas** daripada cakupan custom field developer extensibility, karena developer extensibility hanya mendukung aplikasi berbasis RAP (ABAP RESTful Application Programming Model). Ini adalah klaim pembeda yang kuat — **gunakan dengan atribusi ke SAP Community/SAP Learning**.
- In-app extensibility upgrade-safe karena menggunakan objek dan mekanisme yang telah di-*release* oleh SAP (kontrak C0 untuk CDS view yang boleh diperpanjang key user); perubahan key-user tidak menyentuh kode inti SAP sehingga tidak putus saat upgrade.
- Perubahan key-user dipindahkan antar sistem (development → test → production) melalui mekanisme transport berbasis software collection yang dikelola lewat aplikasi Fiori "Export/Import Software Collections" — istilah "adaptation transport" yang dipakai brief merujuk pada mekanisme ini.
- Soltius relevan sebagai SAP Platinum Partner yang **mendampingi** perusahaan menyiapkan key user dan tata kelola extensibility saat implementasi S/4HANA — framing: Implementation + Change Management, bukan "membangun" SAP.

---

## Core facts (verified)

> **Claim 1**: Key-user in-app extensibility adalah satu dari tiga pilar extensibility dalam strategi clean core SAP S/4HANA.
> **Number/specific**: Tiga pilar tersebut adalah: (1) Key User Extensibility, (2) Developer Extensibility (ABAP Cloud / RAP), (3) Side-by-Side Extensibility (SAP BTP). SAP memperbarui model ini menjadi "clean core level concept" dengan empat tingkat kepatuhan A–D pada 2025.
> **Source**: SAP Learning — "Explaining the Extensibility Possibilities, Depending on the SAP S/4HANA Version", https://learning.sap.com/courses/expanding-sap-s-4hana-using-key-user-side-by-side-extensibility/explaining-the-extensibility-possibilities-depending-on-the-sap-s-4hana-version (diakses 2026-06-08); SAP News Center — "How to Extend SAP S/4HANA Cloud the Right Way", https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ (Agustus 2025)
> **Confidence**: high

> **Claim 2**: Alat-alat key-user in-app extensibility adalah SAP Fiori apps berbasis web, tersedia di semua opsi deployment SAP S/4HANA (Public Edition, Private Edition, dan on-premise), dan konsisten dengan pendekatan clean core.
> **Number/specific**: "Everything that is possible in SAP S/4HANA Public edition is also possible for both SAP S/4HANA Private edition and SAP S/4HANA on-premise." Pada SAP S/4HANA 2022, Embedded Steampunk (yang mendukung developer extensibility ABAP Cloud) juga tersedia di private edition dan on-premise.
> **Source**: SAP Learning — "Explaining the Extensibility Possibilities, Depending on the SAP S/4HANA Version", https://learning.sap.com/courses/expanding-sap-s-4hana-using-key-user-side-by-side-extensibility/explaining-the-extensibility-possibilities-depending-on-the-sap-s-4hana-version (diakses 2026-06-08)
> **Confidence**: high

> **Claim 3**: Key-user extensibility ditujukan kepada "administrator dan spesialis fungsional yang memiliki pengetahuan mendalam tentang produk atau line-of-business, tetapi tidak memiliki keahlian teknis coding."
> **Number/specific**: Kutipan langsung dari SAP Learning — "administrators and functional specialists who possess deep product or line-of-business knowledge but do not have technical coding expertise."
> **Source**: SAP Learning — "Introducing the Key-User In-App Extensibility Tools", https://learning.sap.com/courses/implementing-sap-s-4hana-cloud-public-edition/introducing-the-key-user-in-app-extensibility-tools (diakses 2026-06-08)
> **Confidence**: high

> **Claim 4**: Nama aplikasi untuk key-user extensibility utama adalah **"Custom Fields and Logic"** (CFL). Aplikasi ini memiliki tiga fungsi utama: (1) Custom Fields, (2) Data Source Extension, dan (3) Custom Logic.
> **Number/specific**: Custom Fields: membuat field ke tabel/CDS view dan menambahkannya ke aplikasi. Data Source Extension: menambah field dari data source ke aplikasi. Custom Logic: menambahkan logika (validasi, substitusi, determinasi) melalui ABAP web editor terbatas.
> **Source**: SAP Learning — "Using Custom Fields and Logic", https://learning.sap.com/courses/expanding-sap-s-4hana-using-key-user-side-by-side-extensibility/using-custom-fields-and-logic_c3abf136-f83f-475d-95e0-2d21d699d890 (diakses 2026-06-08)
> **Confidence**: high

> **Claim 5**: Yang dapat dilakukan key user tanpa coding: (a) mengatur ulang/menyembunyikan/menampilkan field di Fiori via UI Adaptation (drag & drop dalam mode Adapt UI), (b) membuat custom field baru dan menambahkannya ke UI, laporan, template email, template formulir, dan skenario bisnis, (c) menambahkan logika sederhana (validasi, kalkulasi, substitusi) via Custom Logic/BAdI yang di-release, (d) membuat custom business object lengkap dengan tabel database, UI, dan API sederhana.
> **Number/specific**: Fiori app "Adapt UI" menggunakan SAPUI5 flexibility — key user mengaktifkan mode adaptasi dan mengubah UI secara intuitif dengan WYSIWYG tanpa kode sumber. Custom field dapat diaktifkan untuk pencarian free-text.
> **Source**: SAP Learning — "Adapting SAP Fiori UIs at Runtime", https://learning.sap.com/courses/expanding-sap-s-4hana-using-key-user-side-by-side-extensibility/adapting-sap-fiori-uis-at-runtime_c583c4ef-276b-4ddf-b11a-5aeebf62b6c2 (diakses 2026-06-08); SAP Learning — "Introducing the Key-User In-App Extensibility Tools", https://learning.sap.com/courses/implementing-sap-s-4hana-cloud-public-edition/introducing-the-key-user-in-app-extensibility-tools (diakses 2026-06-08)
> **Confidence**: high

> **Claim 6**: Cakupan custom field **key-user extensibility lebih luas** daripada cakupan custom field developer extensibility. Developer extensibility custom field hanya didukung untuk aplikasi berbasis RAP, tidak mendukung UI SAP GUI, dan tidak mendukung SOAP API.
> **Number/specific**: "The scope of the SAP standard applications enabled for key user custom fields is much broader than the scope of those enabled for developer extensibility custom fields." SAP merekomendasikan menggunakan Custom Fields app (key-user tool) sebagai opsi yang disukai untuk membuat custom field.
> **Source**: SAP Community — search result summary dari "Custom Fields in S/4HANA: Key User versus Developer Extensibility", https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/custom-fields-in-s-4hana-key-user-versus-developer-extensibility/ba-p/13557355 (artikel by SAP; akses langsung 403 — data diverifikasi via search result excerpt, 2026-06-08)
> **Confidence**: medium — Klaim ini dikonfirmasi oleh search result snippet SAP Community; artikel asli tidak dapat di-fetch (403). Writer wajib menyatakan "menurut SAP" dan tidak mengklaim angka spesifik. Lihat juga Flag #1.

> **Claim 7**: In-app extensibility upgrade-safe karena menggunakan **release contract C0** — CDS view yang memiliki kontrak C0 dapat diperpanjang secara aman menggunakan aplikasi Custom Fields. Field yang dibuat dengan namespace yang tepat (prefix ZZ atau namespace pelanggan) terlindungi dari konflik dengan field standar SAP di masa depan.
> **Number/specific**: "Custom fields created this way can still be 100% upgrade-stable, as they're protected with the C0-contract release for key users." Rekomendasi SAP: gunakan prefix ZZ pada nama field untuk menghindari tabrakan dengan field standar di versi mendatang.
> **Source**: SAP Community — "Key User Custom Fields in S/4HANA Cloud Private Edition and On-Premise: Dos and Don'ts", https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/key-user-custom-fields-in-s-4hana-cloud-private-edition-and-on-premise-dos/ba-p/14026871 (data diambil via search result excerpt; akses langsung 403, 2026-06-08); SAP Community — "Understanding Release Contracts (C0–C3) in S/4HANA Repository Objects", https://community.sap.com/t5/technology-blog-posts-by-members/understanding-release-contracts-c0-c3-in-s-4hana-repository-objects/ba-p/14223288
> **Confidence**: high — informasi konsisten di beberapa sumber SAP Community

> **Claim 8**: Perubahan key-user dipindahkan antar sistem (development → test → production) melalui mekanisme **Export/Import Software Collections** yang dikelola lewat SAP Fiori apps. Dependency antar ekstensi dicek otomatis saat ekspor; versi yang lebih baru tidak bisa "menyalip" versi yang lebih lama untuk menjaga konsistensi produksi.
> **Number/specific**: Dalam 3-system landscape: ekstensi dibuat di development, diekspor ke test untuk integrasi testing, lalu di-release ke produksi via aplikasi "Import Collection". Aplikasi pendukung: Configure Software Packages (F1590), Register Extensions for Transport (F1589), Extensibility Inventory (F2587).
> **Source**: SAP Community — "Transport Management in SAP S/4HANA Cloud Public Edition 3-System Landscape", https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/transport-management-in-sap-s-4hana-cloud-public-edition-3-system-landscape/ba-p/13625058; SAP Learning — "Transporting Extensions", https://learning.sap.com/courses/expanding-sap-s-4hana-using-key-user-side-by-side-extensibility/transporting-extensions_a2719341-2280-4c2a-a4b4-a5691820d52c (diakses 2026-06-08)
> **Confidence**: high

> **Claim 9**: Alat khusus untuk tata kelola: **Extensibility Cockpit** membantu mengidentifikasi konteks bisnis yang tersedia untuk ekstensi dan melacak kapasitas penggunaan; **Extensibility Inventory** melacak siapa yang terakhir memodifikasi ekstensi dan memantau status ekspor/impornya.
> **Number/specific**: Extensibility Inventory adalah "master library of all extensions made within the extensibility framework" — memungkinkan melihat asosiasi dan dependensi antar ekstensi.
> **Source**: SAP Learning — "Introducing the Key-User In-App Extensibility Tools", https://learning.sap.com/courses/implementing-sap-s-4hana-cloud-public-edition/introducing-the-key-user-in-app-extensibility-tools (diakses 2026-06-08)
> **Confidence**: high

> **Claim 10**: Custom Logic via key-user extensibility menggunakan **ABAP for Key Users** — editor web terbatas yang hanya mendukung: select dari CDS view yang di-release, validasi, substitusi, determinasi; dan tidak mengizinkan operasi database create/update/delete langsung, dynamic programming, atau code generation.
> **Number/specific**: "Restricted ABAP prohibits any database operation except selects from released views, along with tweaking new tasks, dynamic programming, code generation, and obsolete ABAP statements."
> **Source**: SAP Learning — "Using Custom Fields and Logic", https://learning.sap.com/courses/expanding-sap-s-4hana-using-key-user-side-by-side-extensibility/using-custom-fields-and-logic_c3abf136-f83f-475d-95e0-2d21d699d890 (diakses 2026-06-08); Community search results — "Custom Logic using Key User Extensibility in SAP S/4 HANA Public Cloud", https://community.sap.com/t5/technology-blog-posts-by-members/custom-logic-using-key-user-extensibility-in-sap-s-4-hana-public-cloud/ba-p/14368169
> **Confidence**: high

> **Claim 11**: BAdI (Business Add-In) tersedia di kedua jalur — key-user extensibility dan developer extensibility. BAdI yang di-release dapat diimplementasikan key user melalui aplikasi Custom Logic di dalam CFL, tanpa memerlukan akses ABAP development environment penuh.
> **Number/specific**: "BAdI can be used in both Key User and Developer Extensibility as both states of BAdI are in released state." Key user mengimplementasikan BAdI melalui aplikasi "Custom Logic" di SAP Fiori launchpad.
> **Source**: SAP Community — "Custom Logic, BAdI Enhancement Implementation - On Stack Extensibility", https://community.sap.com/t5/technology-blog-posts-by-members/custom-logic-badi-enhancement-implementation-on-stack-extensibility/ba-p/14274084 (diakses 2026-06-08)
> **Confidence**: high

> **Claim 12**: SAP S/4HANA menyediakan alat **Custom Business Objects** yang memungkinkan key user membuat business object baru lengkap dengan tabel database, UI (aplikasi Fiori), dan API (create/read/update/delete) tanpa coding mendalam — melampaui sekadar menambah field ke objek yang sudah ada.
> **Number/specific**: "When a business object doesn't exist for customer requirements, the Custom Business Objects app can be used to create a custom business object, which can be used to generate database tables, services (APIs), UIs, and applications."
> **Source**: SAP Learning — "Using Key-User In-App Extensibility to Create a Custom Business Object", https://learning.sap.com/learning-journeys/managing-sap-s-4hana-cloud-public-edition-projects/using-key-user-in-app-extensibility-to-create-a-custom-business-object (diakses 2026-06-08)
> **Confidence**: high

> **Claim 13**: SAP memperkenalkan model kematangan clean core dengan empat level kepatuhan (A–D) pada tahun 2025, menggantikan model tiga-pilar asli. Level A = ekstensi sepenuhnya menggunakan antarmuka SAP yang di-release; Level D = ekstensi non-recommended yang menciptakan technical debt signifikan.
> **Number/specific**: Level A (tertinggi): compliant, hanya menggunakan antarmuka publik yang di-release. Level B: compliant, menggunakan classic API dengan antarmuka terdokumentasi. Level C: sebagian compliant, mengakses objek internal SAP untuk skenario legacy. Level D (terendah): tidak direkomendasikan.
> **Source**: SAP News Center — "How to Extend SAP S/4HANA Cloud the Right Way | Clean Core", https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ (Agustus 2025, diakses 2026-06-08)
> **Confidence**: high

> **Claim 14**: Fit-to-standard adalah prinsip panduan implementasi SAP S/4HANA Cloud: gunakan proses standar SAP semaksimal mungkin, lakukan ekstensi hanya ketika ada nilai bisnis yang jelas. Metodologi SAP Activate mewajibkan Fit-to-Standard workshops untuk memvalidasi proses dan mengidentifikasi gap.
> **Number/specific**: Riset menunjukkan 73% proyek S/4HANA "big winner" mengadopsi Fit-to-Standard workshops untuk memvalidasi proses dan mendorong adopsi pengguna.
> **Source**: SAP Learning — "Conducting Fit-to-Standard Workshops", https://learning.sap.com/courses/implementing-sap-s-4hana-cloud-public-edition/conducting-fit-to-standard-workshops (diakses 2026-06-08); NTT Data Solutions — "Using Fit-to-Standard Workshops in an SAP S/4HANA Cloud Implementation", https://nttdata-solutions.com/id-en/blog/using-fit-to-standard-workshops-in-an-sap-s-4hana-cloud-implementation/
> **Confidence**: medium — Angka 73% berasal dari NTT Data (bukan SAP resmi). Gunakan sebagai konteks ilustratif dengan atribusi, bukan sebagai fakta SAP.

> **Claim 15**: Batas utama key-user extensibility: tidak cocok untuk (a) logika bisnis yang kompleks yang memerlukan akses database luas, (b) integrasi lintas sistem, (c) pembuatan aplikasi Fiori penuh yang kompleks. Untuk kebutuhan tersebut, diperlukan developer extensibility (ABAP Cloud/RAP) atau side-by-side di SAP BTP.
> **Number/specific**: "Key user extensibility should be chosen for extensions by single business experts, while developer extensibility should be chosen for extensions requiring professional ABAP development." Juga: "Objects in the key user layer cannot be released for developer extensibility, with the exception of custom fields."
> **Source**: SAP Community search results — "Layering of Key User Extensibility and Developer Extensibility", https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/layering-of-key-user-extensibility-and-developer-extensibility/ba-p/13577852 (akses langsung 403; data dari search excerpt); SAP Learning — "Explaining Key User Extensibility", https://learning.sap.com/courses/practicing-clean-core-extensibility-for-sap-s-4hana-cloud/explaining-key-user-extensibility_c7f6cbcb-ed54-4f1d-8e76-4a6e311e3cfa
> **Confidence**: high

> **Claim 16**: Soltius Indonesia adalah SAP Platinum Certified Channel Partner & Value Added Reseller, anggota United VARs (45 VAR terkemuka, 90+ negara, 10.000 konsultan SAP bersertifikat, melayani 8.000+ pelanggan di seluruh dunia), dan telah menjadi kontributor pendapatan terbesar bagi SAP Indonesia sejak 2015.
> **Number/specific**: 200+ konsultan profesional, 120+ klien, didirikan 1998, anak perusahaan Metrodata Group (diperoleh 2008).
> **Source**: `knowledge_base/company_profile.md` (verified pre-approved facts)
> **Confidence**: high

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **Key-user (in-app) extensibility** | SAP Fiori-based tools (Custom Fields and Logic, UI Adaptation, Custom Business Objects) available di semua deployment options S/4HANA; target: pengguna bisnis tanpa keahlian coding | H2 #1 (definitional), H2 #2 (capabilities list) | — |
| **Custom Fields and Logic (CFL) app** | Tiga fungsi: Custom Fields, Data Source Extension, Custom Logic via restricted ABAP; nama app dikonfirmasi aktif per 2026 | H2 #2 body | — |
| **BAdI (Business Add-In)** | Tersedia di key-user dan developer extensibility; key user mengimplementasikan via Custom Logic app | H2 #2 body | — |
| **UI Adaptation (SAPUI5 flexibility)** | WYSIWYG drag-and-drop di Fiori launchpad; tidak memerlukan kode; hanya untuk app yang mendukung SAPUI5 flexibility | H2 #2 body | — |
| **Key-user vs developer vs side-by-side — tabel tiga jalur** | Key user: cakupan lebih luas, semua deployment, tanpa coding; Developer (ABAP Cloud/RAP): hanya RAP-based apps, butuh ABAP expertise; Side-by-side (BTP): terpisah dari core, integrasi via API | H2 #3 (tabel) | — |
| **Adaptation transport (Export/Import Software Collections)** | Mekanisme Fiori-based untuk memindahkan perubahan key-user antar sistem; dependency dicek otomatis | H2 #4 (upgrade safety) | — |
| **Batas key-user extensibility** | Tidak cocok untuk logika kompleks, integrasi cross-system, atau aplikasi penuh; escalate ke developer extensibility/BTP | H2 #5 (jujur/counter) | — |
| **Soltius: Implementation + Change Management** | SAP Platinum Partner mendampingi perusahaan menyiapkan key user dan tata kelola extensibility saat implementasi S/4HANA; implementasi dan dukungan, bukan "membangun" SAP | Closing CTA (1 paragraph) + 1 mid-article aside | Implementation + Change Management; SAP Platinum Partner via United VARs |

Reminder: Soltius **mendampingi/mengimplementasikan/mendukung** — tidak membangun SAP. Maksimal 2–3 penyebutan Soltius di seluruh artikel.

---

## Authoritative external sources (untuk writer link-out)

1. **SAP Learning — "Introducing the Key-User In-App Extensibility Tools" (2024, diakses 2026-06-08)** — https://learning.sap.com/courses/implementing-sap-s-4hana-cloud-public-edition/introducing-the-key-user-in-app-extensibility-tools — *Backs*: definisi key-user extensibility; kemampuan key user tanpa coding; alat Extensibility Cockpit dan Inventory.

2. **SAP Community — "Key User Custom Fields in S/4HANA Cloud Private Edition and On-Premise: Dos and Don'ts" (by SAP, diakses 2026-06-08)** — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/key-user-custom-fields-in-s-4hana-cloud-private-edition-and-on-premise-dos/ba-p/14026871 — *Backs*: upgrade-safety custom field key-user; kontrak C0; rekomendasi namespace ZZ.

3. **SAP News Center — "How to Extend SAP S/4HANA Cloud the Right Way | Clean Core" (Agustus 2025)** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *Backs*: model kematangan clean core level A–D (2025); dua strategi ekstensi (BTP-first dan on-stack ABAP Cloud).

4. **SAP Learning — "Explaining the Extensibility Possibilities, Depending on the SAP S/4HANA Version" (diakses 2026-06-08)** — https://learning.sap.com/courses/expanding-sap-s-4hana-using-key-user-side-by-side-extensibility/explaining-the-extensibility-possibilities-depending-on-the-sap-s-4hana-version — *Backs*: ketersediaan in-app extensibility di semua edition (public/private/on-premise).

---

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu key-user (in-app) extensibility di SAP S/4HANA?

Key-user (in-app) extensibility adalah kemampuan pengguna bisnis menyesuaikan SAP S/4HANA langsung dari dalam sistem — menambah custom field, mengatur ulang layar Fiori, dan menambahkan logika sederhana — tanpa menulis kode. Semua alat berbasis SAP Fiori app dan tersedia di seluruh deployment (Cloud Public Edition, Private Edition, maupun on-premise), sehingga konsisten dengan prinsip clean core dan aman saat upgrade.

### Apa saja yang bisa dilakukan key user tanpa coding?

Dengan alat key-user SAP, pengguna bisnis dapat: (1) menambah custom field ke tabel atau layar Fiori, (2) mengatur ulang dan menyembunyikan field di UI melalui mode Adapt UI (drag & drop), (3) menambahkan logika validasi dan kalkulasi sederhana via Custom Logic, (4) membuat template email/formulir kustom, dan (5) membangun custom business object lengkap dengan tabel dan API. Semua dilakukan lewat browser tanpa keahlian ABAP.

### Apa bedanya in-app extensibility dan side-by-side extensibility?

In-app extensibility berjalan di dalam sistem SAP S/4HANA — key user menambah field atau logika tanpa coding, langsung lewat Fiori. Side-by-side extensibility membangun aplikasi terpisah di SAP Business Technology Platform (BTP) yang terhubung ke S/4HANA via API — cocok untuk skenario yang memerlukan fleksibilitas penuh, integrasi multi-sistem, atau aplikasi yang kompleks. Keduanya clean-core-safe dan saling melengkapi.

### Bisakah pengguna bisnis membuat custom field tanpa bantuan IT?

Ya. SAP menyediakan aplikasi **Custom Fields and Logic** (CFL) di Fiori launchpad yang memungkinkan key user — tanpa keahlian coding — membuat custom field baru, menambahkannya ke UI, laporan, dan template. Cakupan custom field key-user bahkan lebih luas daripada developer extensibility, yang terbatas pada aplikasi berbasis RAP. Untuk nama field, SAP merekomendasikan prefix ZZ agar tidak berbenturan dengan field standar SAP di versi mendatang.

### Apakah kustomisasi key-user aman saat SAP melakukan upgrade?

Ya, selama menggunakan alat dan mekanisme yang telah di-*release* oleh SAP. In-app extensibility menggunakan kontrak rilis C0 — yang menjamin CDS view atau field kustom dapat diperpanjang secara aman tanpa putus saat upgrade. Perubahan key-user tidak menyentuh kode inti SAP, sehingga upgrade sistem bisa berjalan tanpa harus mengerjakan ulang kustomisasi.

### Apa itu BAdI, dan bisakah key user menggunakannya?

BAdI (Business Add-In) adalah titik perluasan logika yang disediakan SAP — semacam "kait" di dalam proses standar tempat logika kustom bisa ditambahkan. Key user dapat mengimplementasikan BAdI yang di-*release* melalui aplikasi Custom Logic di Fiori, menggunakan editor ABAP web terbatas yang hanya mengizinkan operasi aman (validasi, substitusi, kalkulasi) tanpa akses database langsung. BAdI yang sama juga tersedia bagi developer ABAP Cloud untuk implementasi yang lebih kompleks.

### Kapan key-user extensibility TIDAK cukup dan harus diserahkan ke developer?

Key-user tools memiliki batas desain: logika yang memerlukan akses data luas di luar CDS view yang di-release, integrasi lintas sistem yang kompleks, atau pembuatan aplikasi Fiori yang sophisticated memerlukan developer extensibility (ABAP Cloud/RAP) atau side-by-side di SAP BTP. Memaksakan kebutuhan kompleks ke alat key-user menghasilkan logika yang sulit dipelihara. Threshold praktis: jika kebutuhan melampaui validasi, kalkulasi, atau tampilan field, libatkan tim developer.

---

## Data tables for the writer

### Tabel tiga jalur extensibility SAP S/4HANA (clean-core-safe)

| Aspek | Key-User (In-App) | Developer Extensibility | Side-by-Side (SAP BTP) |
|---|---|---|---|
| **Siapa yang melakukan** | Pengguna bisnis / key user | Developer ABAP (ABAP Cloud) | Tim developer / arsitek BTP |
| **Butuh coding?** | Tidak (restricted ABAP web untuk logika sederhana) | Ya (ABAP Cloud / RAP) | Ya (multi-bahasa; SAP Build dapat mengurangi) |
| **Contoh kebutuhan** | Tambah field nomor kontrak di layar PO; validasi otomatis nilai harga; atur ulang kolom laporan | Custom report kompleks; wrapper API; extend RAP business object | Aplikasi mobile terpisah; integrasi ERP-CRM; proses persetujuan multi-sistem |
| **Cakupan custom field** | Luas — sebagian besar app S/4HANA yang extensible | Terbatas — hanya app berbasis RAP; tidak mendukung SAP GUI / SOAP | N/A (standalone app) |
| **Clean-core?** | Ya (C0 contract, released mechanisms) | Ya (ABAP Cloud, released APIs only) | Ya (loosely coupled via API/event) |
| **Transport/deploy** | Export/Import Software Collections (Fiori apps) | ABAP transport (gCTS/atREL) | BTP deployment pipeline |
| **Upgrade impact** | Nol — tidak menyentuh kode inti | Minimal — hanya menggunakan released APIs | Nol — decoupled dari core |

### Kemampuan key-user per alat

| Alat SAP Fiori | Yang Bisa Dilakukan | Yang Tidak Bisa Dilakukan |
|---|---|---|
| Custom Fields and Logic (CFL) | Tambah custom field; data source extension; logika sederhana via ABAP web editor | Operasi DB langsung (INSERT/UPDATE/DELETE); dynamic programming |
| UI Adaptation (Adapt UI) | Pindah/sembunyikan/tampilkan field; set default view; rename elemen | Ubah logika aplikasi; tambah field baru (perlu CFL dulu) |
| Custom Business Objects | Buat entitas data baru + tabel + UI + API sederhana | Logika kompleks atau integrasi lintas sistem |
| Extensibility Cockpit | Temukan konteks bisnis yang tersedia; rencanakan ekstensi | — |
| Extensibility Inventory | Audit perubahan (siapa, kapan); pantau status transport | — |

---

## Edge cases & nuance

- **Tidak semua Fiori app mendukung key-user adaptation.** Dukungan UI Adaptation bergantung pada apakah app menggunakan kontrol yang kompatibel dengan SAPUI5 flexibility dan memiliki stable ID. Writer harus menyebut bahwa tidak semua app bisa, bukan "semua layar Fiori bisa diubah".

- **BAdI di key-user extensibility ≠ semua BAdI.** Hanya BAdI yang secara eksplisit di-*release* oleh SAP yang dapat diimplementasikan key user. BAdI lama (classic/kernel BAdI yang tidak di-release) memerlukan developer. Writer jangan overpromise.

- **"Custom Fields and Logic" vs "Custom Logic" vs "Adapt UI" — ini adalah fitur/app terpisah** yang semuanya merupakan bagian dari ekosistem key-user extensibility, bukan satu alat tunggal. CFL = app untuk field + logika. Adapt UI = mode di dalam app Fiori untuk atur ulang UI. Writer harus membedakan agar tidak membingungkan pembaca.

- **On-premise S/4HANA menyediakan opsi LEBIH (bukan kurang)** daripada cloud editions: semua alat key-user tersedia, plus classic ABAP development. Namun SAP merekomendasikan "clean core policy" bahkan di on-premise untuk mengurangi kompleksitas upgrade. Writer bisa menyebut ini tapi jangan terlalu dalam — topik artikel adalah key-user, bukan on-premise governance.

- **Level A–D baru (2025) vs tiga pilar lama** — model maturity baru tidak menggantikan tiga pilar secara konseptual; ia menambahkan framework kepatuhan di atasnya. Untuk artikel ini, tiga pilar tetap menjadi kerangka utama yang lebih mudah dipahami pengguna bisnis; A–D bisa disebut sebagai catatan singkat atau bahkan dihilangkan untuk menjaga fokus audiens non-teknis.

- **Klaim "73% big winner mengadopsi fit-to-standard workshops"** berasal dari NTT Data Solutions, bukan SAP resmi. Gunakan hanya jika atribusinya jelas; jangan sajikan sebagai "data SAP".

---

## Flags (open factual risk)

- **Flag #1 — Klaim "scope key-user custom field lebih luas dari developer extensibility"**: Dikonfirmasi via search result excerpt dari SAP Community artikel by SAP (ba-p/13557355), namun akses langsung artikel menghasilkan 403. Confidence: medium-high. Rekomendasi: nyatakan "menurut SAP" dengan link ke artikel tersebut; jika artikel tetap tidak bisa diakses, anchor pada SAP Learning yang juga menyebut bahwa developer extensibility custom field "only supported for RAP-based applications." Jangan sajikan sebagai angka/persentase.

- **Flag #2 — Istilah "adaptation transport"**: Brief menggunakan istilah ini, namun dalam dokumentasi SAP yang terverifikasi, mekanisme pastinya disebut "Export/Import Software Collections" atau "software collection transport" (dikelola via ATO — Adaptation Transport Organizer, per beberapa komunitas lama). Istilah "adaptation transport" masih digunakan di beberapa konteks lama untuk on-premise. Untuk S/4HANA Cloud, gunakan "export/import software collections" atau "transport key-user extensions" dan hindari "adaptation transport" sebagai nama fitur tunggal — bisa membingungkan pembaca yang mencarinya di sistem.

- **Flag #3 — Nama aplikasi "Custom Fields and Logic" (CFL)**: Dikonfirmasi sebagai nama resmi per SAP Learning (diakses 2026-06-08). Namun SAP sering merevisi nama app. Selalu sertakan catatan akses tanggal jika dikutip; jika CMS Soltius mempublikasikan artikel jauh di masa depan, editor perlu memverifikasi ulang nama app ini.

- **Flag #4 — Angka "73% big winner projects adopt Fit-to-Standard workshops"**: Sumber NTT Data Solutions (bukan SAP resmi). Dapat digunakan sebagai ilustrasi dengan atribusi eksplisit ke NTT Data, namun bukan sebagai "fakta SAP" atau "temuan industri." Jika article tone menghindari angka non-SAP-official, drop angka ini.

- **Flag #5 — Ketersediaan Custom Logic/BAdI key-user di on-premise S/4HANA (vs cloud)**: Tersedia di S/4HANA Cloud (public dan private) — dikonfirmasi. Untuk on-premise, tersedia tetapi memerlukan aktivasi dan konfigurasi tambahan (SAP Note 2283716 dan 2807979 untuk on-premise). Writer yang menyebut on-premise harus menambahkan caveat "dengan konfigurasi yang tepat" atau membatasi klaim ke cloud editions.

---

## Definition snippet draft (40–60 words)

> **Key-user (in-app) extensibility** adalah kemampuan pengguna bisnis menyesuaikan SAP S/4HANA langsung dari dalam sistem — menambah custom field, mengatur ulang layar Fiori, dan menambahkan logika sederhana via aplikasi Custom Fields and Logic — tanpa satu baris kode dan tanpa mengotori kode inti, sehingga tetap aman saat upgrade sistem.

*(Jumlah kata: 51 — dalam rentang 40–60. Writer dapat memperhalus phrasing.)*

---

## Notes for image-planner

- **Concept 1 — Tabel tiga jalur extensibility (infografis perbandingan)**: Visualisasi tabel tiga kolom (Key-User / Developer / Side-by-Side) dengan ikon peran (pengguna bisnis vs developer vs arsitek), indikator "butuh coding?" (centang/silang), dan contoh use case singkat. Formatnya harus screenshot-friendly karena segmen ini sering dibagikan ke kolega. Suggested asset type: tabel infografis dengan warna brand SAP (biru/abu) dan ikon peran. Alt-text (Bahasa Indonesia): "Perbandingan tiga jalur extensibility SAP S/4HANA: key-user, developer, dan side-by-side."

- **Concept 2 — Diagram alur ekstensi key-user (proses visual)**: Diagram sederhana yang menggambarkan alur kerja key user: (1) Buka Fiori launchpad → (2) Pilih app yang extensible → (3) Gunakan Custom Fields and Logic atau Adapt UI → (4) Test di development tenant → (5) Export ke production. Cocok untuk mengilustrasikan kemudahan dan keteraturan proses tanpa intimidasi teknis. Suggested asset type: flowchart horizontal dengan 5 langkah dan ikon SAP Fiori. Alt-text: "Alur kerja key-user extensibility di SAP S/4HANA: dari kebutuhan bisnis ke deployment produksi."

- **Concept 3 — Diagram "batas key-user vs eskalasi ke developer"**: Visual dua zona: zona hijau (yang bisa dilakukan key user: tambah field, atur UI, logika sederhana) dan zona kuning/merah (yang perlu developer: logika kompleks, integrasi, aplikasi baru). Dengan panah "eskalasi" yang menunjukkan ke developer extensibility atau BTP. Membantu pembaca mengambil keputusan sendiri. Suggested asset type: diagram zona dua-kolom dengan warna hijau/kuning. Alt-text: "Zona kemampuan key-user extensibility versus kebutuhan yang harus diserahkan ke developer di SAP S/4HANA."
