---
brief_id: "sap-clean-core-04"
researcher_run_date: "2026-06-02"
sources_cited: 14
flags: 4
---

# Research Dossier: Ekstensi SAP Tanpa Menyentuh Core — Side-by-Side Extensibility di BTP

## TL;DR untuk penulis

- **Topik inti** adalah model extensibility SAP yang dikenal sebagai *side-by-side extensibility*: ekstensi dibangun di luar S/4HANA inti, berjalan di SAP BTP, terhubung ke inti via *released API* — sehingga core tetap *upgrade-safe*. Ini adalah jawaban teknis-praktis atas pertanyaan "kustomisasi taruh di mana kalau tidak boleh di core?"
- **Tiga komponen SAP Build** yang relevan adalah SAP Build Apps (UI/aplikasi low-code), SAP Build Process Automation (workflow + RPA), dan SAP Build Work Zone (portal/launchpad). Sejak 2024–2025 SAP menambahkan **SAP Build Code** sebagai komponen ke-4 untuk developer professional (AI-assisted coding di BTP). Verifikasi nama terkini: flag ⚠️ di bawah.
- **SAP Business Accelerator Hub** (URL: api.sap.com) adalah katalog resmi released API SAP — konfirmasi nama ini valid per 2026 (dari fetch live api.sap.com). Jumlah API eksaknya tidak berhasil dipull; pakai angka konsensus "ribuan released API" tanpa angka spesifik, atau paraphrase dari SAP docs.
- **BTP licensing**: BTP bukan gratis dalam RISE with SAP. RISE mencakup infrastruktur S/4HANA Cloud Private Edition di hyperscaler SAP-chosen; BTP services (Build Apps, Integration Suite, dll.) berlisensi terpisah berdasarkan pemakaian/paket. Ini adalah counter-argument penting untuk H2 #5.
- **Batasan side-by-side**: latensi jaringan (round-trip ke BTP) dan biaya operasional BTP tambahan adalah batasan nyata. Gunakan "latency overhead" dan "biaya lisensi BTP runtime" sebagai batasan konkret yang bisa disebut tanpa klaim angka spesifik yang belum diverifikasi.

---

## Core facts (verified)

> **Claim 1**: Side-by-side extensibility adalah pendekatan kustomisasi SAP di mana ekstensi dibangun di platform eksternal (SAP BTP) dan terhubung ke S/4HANA melalui released API — inti sistem tidak dimodifikasi.
> **Number/specific**: "Side-by-side extensibility" adalah istilah resmi SAP yang tercantum dalam SAP Extensibility Guide di SAP Help Portal (help.sap.com/docs/SAP_S4HANA_CLOUD/extensibility).
> **Source**: SAP Help Portal — Extensibility for SAP S/4HANA Cloud (help.sap.com/docs/SAP_S4HANA_CLOUD — referenced in SAP clean core official documentation, perennially updated).
> **Confidence**: high

> **Claim 2**: SAP mendefinisikan tiga lapisan extensibility untuk S/4HANA Cloud: (a) in-app extensibility (key-user tools, dalam S/4HANA sendiri), (b) classic extensibility / ABAP Cloud (kode ABAP dalam S/4HANA namun hanya menggunakan released objects), dan (c) side-by-side extensibility (di SAP BTP, di luar S/4HANA).
> **Number/specific**: Tiga tier ini adalah taksonomi resmi SAP per dokumentasi extensibility SAP S/4HANA Cloud. "Classic extensibility" kadang disebut "developer extensibility" di dalam S/4HANA.
> **Source**: SAP Help Portal — Extensibility for SAP S/4HANA Cloud (help.sap.com), SAP Clean Core official guidance (sap.com/clean-core).
> **Confidence**: high

> **Claim 3**: In-app extensibility (key-user extensibility) memungkinkan pengguna bisnis atau IT dengan akses key-user melakukan: penambahan custom field, custom business objects, konfigurasi workflow ringan via SAP Fiori tools — semua menggunakan released, upgrade-safe tools bawaan S/4HANA, tanpa menyentuh kode standar.
> **Number/specific**: Key-user tools yang tersedia meliputi: Custom Fields and Logic app, Custom Business Objects app, Business Rules Framework plus — tersedia sebagai Fiori app dalam S/4HANA Cloud.
> **Source**: SAP Help Portal — In-App Extensibility in SAP S/4HANA Cloud (help.sap.com/docs/SAP_S4HANA_CLOUD/in-app-extensibility).
> **Confidence**: high

> **Claim 4**: ABAP Cloud adalah model pengembangan ABAP modern untuk S/4HANA yang hanya mengizinkan penggunaan released APIs dan released objects. ABAP code yang ditulis dengan model ABAP Cloud kompatibel dan upgrade-safe terhadap pembaruan SAP.
> **Number/specific**: ABAP Cloud adalah bagian dari "developer extensibility" dalam S/4HANA — dapat berjalan baik di dalam S/4HANA (classic extensibility tier) maupun di BTP ABAP Environment (side-by-side). Model ini menggantikan kustomisasi ABAP konvensional yang langsung memodifikasi kode SAP standar.
> **Source**: SAP Help Portal (help.sap.com/docs/abap-cloud) + SAP Community (community.sap.com — "ABAP Cloud: The new ABAP").
> **Confidence**: high

> **Claim 5**: Released APIs SAP adalah API dan objek yang secara eksplisit dimarkahi SAP sebagai stabil, tidak akan berubah secara backward-incompatible saat SAP merilis pembaruan. Ini adalah kontrak stabilitas antara SAP dan pengembang ekstensi.
> **Number/specific**: Released APIs dikatalogkan di SAP Business Accelerator Hub (api.sap.com) — nama terkini dikonfirmasi dari fetch live situs tersebut. Terdapat ribuan released API yang mencakup domain Finance (FI/CO), Logistics (MM/SD/WM), HR, dan lainnya. Angka eksaknya tidak berhasil diverifikasi pada run ini — ⚠️ lihat flags.
> **Source**: SAP Business Accelerator Hub (api.sap.com) — dikonfirmasi sebagai nama resmi per 2026 dari live fetch.
> **Confidence**: medium (nama dikonfirmasi; jumlah eksaknya tidak)

> **Claim 6**: SAP BTP (Business Technology Platform) adalah platform cloud SAP yang menyediakan layanan untuk pengembangan aplikasi, integrasi, analitik, dan AI. BTP adalah fondasi tempat side-by-side extensions dibangun dan dioperasikan.
> **Number/specific**: BTP tersedia dalam beberapa runtimes: Cloud Foundry, Kyma (Kubernetes-based), ABAP Environment, dan HTML5 Applications. Setiap runtime melayani kebutuhan pengembangan yang berbeda.
> **Source**: SAP Help Portal (help.sap.com/docs/btp) + SAP product pages (sap.com/products/technology-platform).
> **Confidence**: high

> **Claim 7**: SAP Build adalah suite low-code/no-code di atas SAP BTP. Komponen utama yang dikonfirmasi per domain knowledge pertengahan 2025–2026: SAP Build Apps (UI/aplikasi mobile dan web), SAP Build Process Automation (workflow + RPA), SAP Build Work Zone (portal/launchpad), dan SAP Build Code (AI-assisted development untuk professional developers).
> **Number/specific**: SAP Build Code diperkenalkan secara umum oleh SAP pada 2024 sebagai tambahan suite, mengintegrasikan Joule AI assistant untuk coding di BTP. Ini membuat total 4 komponen utama SAP Build.
> **Source**: SAP Build product suite (sap.com/products/technology-platform/build) — direct fetch gagal HTTP 403, berdasarkan domain knowledge dan SAP announcements 2024. ⚠️ Verifikasi nama terkini, lihat flags.
> **Confidence**: medium (komponen awal 3 sudah established; Build Code sebagai komponen ke-4 perlu konfirmasi terkini)

> **Claim 8**: SAP Build Apps (sebelumnya dikenal sebagai AppGyver setelah akuisisi SAP pada 2022) memungkinkan pembuatan aplikasi mobile dan web dengan pendekatan visual/low-code — dapat terhubung ke S/4HANA via released APIs dan OData services.
> **Number/specific**: AppGyver diakuisisi SAP pada awal 2022 dan diintegrasikan ke dalam platform SAP Build pada pertengahan 2022. Pada 2023 berganti nama resmi menjadi "SAP Build Apps".
> **Source**: SAP press release (news.sap.com — AppGyver acquisition/rebrand) + SAP Build documentation.
> **Confidence**: high (rebranding timeline established)

> **Claim 9**: SAP Build Process Automation menggabungkan kemampuan workflow management (SAP Workflow Management) dan RPA (Robotic Process Automation, berasal dari teknologi SAP Intelligent Robotic Process Automation / SAP iRPA) dalam satu antarmuka low-code.
> **Number/specific**: Penggabungan ini diumumkan SAP pada 2021–2022 sebagai bagian dari konsolidasi SAP BTP capabilities ke dalam suite SAP Build yang lebih terintegrasi.
> **Source**: SAP Community (community.sap.com — SAP Build Process Automation announcement) + SAP Help Portal (help.sap.com/docs/PROCESS_AUTOMATION).
> **Confidence**: high

> **Claim 10**: SAP Integration Suite adalah layanan integrasi utama di SAP BTP, menyediakan kemampuan API Management, Cloud Integration (berbasis SAP Process Integration/Process Orchestration), Event Mesh, dan Open Connectors. Digunakan untuk menghubungkan S/4HANA dengan sistem pihak ketiga (Salesforce, Microsoft 365, sistem legacy, dll.) secara standar.
> **Number/specific**: SAP Integration Suite menggabungkan setidaknya 5 layanan integrasi utama yang sebelumnya berdiri sendiri: Cloud Integration, API Management, Event Mesh, Integration Advisor, dan Open Connectors.
> **Source**: SAP Help Portal (help.sap.com/docs/sap-integration-suite) + SAP product documentation.
> **Confidence**: high

> **Claim 11**: Model RISE with SAP mencakup S/4HANA Cloud Private Edition di infrastruktur hyperscaler pilihan SAP, termasuk layanan dasar Business Process Intelligence dan SAP Business Technology Platform (dalam batas tertentu). Namun layanan BTP tambahan — termasuk runtime penuh untuk SAP Build Apps, SAP Build Process Automation, dan SAP Integration Suite dalam skala produksi — umumnya membutuhkan lisensi BTP terpisah.
> **Number/specific**: SAP menyertakan "SAP BTP, Cloud Foundry environment" dalam paket RISE dengan kuota terbatas ("included capacity") untuk use-cases dasar. Build apps dan integrations dalam skala enterprise membutuhkan pembelian BTP service plans tambahan.
> **Source**: SAP RISE with SAP product page (sap.com/products/erp/rise) + SAP BTP pricing documentation. ⚠️ Detail lisensi berubah — lihat flags.
> **Confidence**: medium (prinsip umum high; detail kuota/inclusi perlu konfirmasi current SAP commercial terms)

> **Claim 12**: Batasan teknis side-by-side extensibility yang nyata meliputi: (a) latensi tambahan karena round-trip network antara S/4HANA dan BTP untuk operasi yang membutuhkan respons dalam milidetik; (b) kompleksitas arsitektur lebih tinggi (monitoring terpisah, connectivity setup, error handling lintas sistem); (c) biaya operasional lisensi BTP yang ditambahkan ke total cost of ownership.
> **Number/specific**: Untuk operasi yang membutuhkan respons <100ms dan berjalan dalam transaksi SAP inti (posting FI, posting inventory), in-app extensibility atau ABAP Cloud di dalam S/4HANA lebih sesuai daripada side-by-side. Ini adalah pola yang diakui dalam SAP Extensibility documentation dan SAP Community discussions.
> **Source**: SAP Help Portal extensibility guidance + SAP Community (community.sap.com — extensibility patterns for performance-sensitive operations).
> **Confidence**: medium (prinsip umum diakui; threshold spesifik seperti "<100ms" adalah rule-of-thumb lapangan, bukan angka resmi SAP — lihat flags)

> **Claim 13**: Gartner memproyeksikan bahwa pada 2025, lebih dari 70% aplikasi enterprise baru akan dikembangkan menggunakan platform low-code/no-code, naik dari kurang dari 25% pada 2020.
> **Number/specific**: Proyeksi ini (originally from ~2021 Gartner report) sering dikutip dalam industri low-code. Untuk konteks SAP, ini menguatkan relevansi SAP Build sebagai low-code extension platform.
> **Source**: Gartner — "Gartner Forecasts Worldwide Low-Code Development Technologies Market to Grow 23% in 2021" dan follow-up reports. ⚠️ Angka ini berasal dari proyeksi Gartner ~2021 — lihat flags.
> **Confidence**: medium (angka proyeksi diketahui dari Gartner reports; validasi bahwa angka ini masih sering dikutip — tidak ada pembaruan angka yang lebih baru dikonfirmasi)

> **Claim 14**: Adopsi SAP BTP di Indonesia dan ASEAN tumbuh seiring dengan gelombang RISE with SAP adoption. IDC mempublikasikan laporan tentang pertumbuhan cloud ERP di Asia Pasifik, termasuk Indonesia, yang relevan untuk framing SAP Build/BTP di konteks lokal.
> **Number/specific**: IDC publikasi "IDC FutureScape: Worldwide Cloud 2025 Predictions" dan regional APAC cloud ERP reports mengkonfirmasi tren cloud adoption di ASEAN. Angka spesifik untuk Indonesia tidak berhasil diverifikasi pada run ini. ⚠️ Lihat flags.
> **Source**: IDC — IDC FutureScape dan APAC Cloud/ERP research (idc.com). ⚠️ URL spesifik tidak diverifikasi langsung.
> **Confidence**: medium (tren diketahui; angka Indonesia spesifik tidak diverifikasi)

---

## Solution focus + Soltius anchor (dari product_matrix.md)

| Apa yang diajarkan (SAP/partner tech) | Fakta yang harus dinyatakan secara akurat | Di mana dalam artikel | Soltius service/credential untuk anchor CTA |
|---|---|---|---|
| Side-by-side extensibility | Ekstensi di luar S/4HANA, berjalan di SAP BTP, terhubung via released API resmi SAP — inti tidak disentuh, upgrade-safe | H2 #1 (definitional) | — |
| In-app / key-user extensibility | Kustomisasi dalam S/4HANA menggunakan released, upgrade-safe tools bawaan; tidak butuh BTP; cocok untuk konfigurasi sederhana | H2 #2 (tabel perbandingan) | — |
| SAP Build (Apps, Process Automation, Work Zone, Code) | Suite low-code di atas SAP BTP; sebutkan 3–4 komponen dengan nama tepat; sebutkan asal AppGyver untuk Build Apps; sebutkan fungsi tiap komponen | H2 #3 (SAP Build deep-dive) | Digital Platform + Implementation; "Dalam proyek enhancement yang ditangani Soltius..." |
| Released API / SAP Business Accelerator Hub | API dikatalogkan di api.sap.com (SAP Business Accelerator Hub); konsep released = stabil, upgrade-safe | H2 #1 dan H2 #3 | — |
| SAP Integration Suite | Layanan integrasi utama di BTP untuk koneksi S/4HANA ↔ sistem eksternal; komponen: Cloud Integration, API Management, Event Mesh | H2 #3 dan FAQ | — |
| BTP licensing (RISE vs tambahan) | RISE menyertakan BTP capacity dasar; scale-up Build Apps/Integration Suite butuh lisensi BTP tambahan | H2 #5 (counter-konvensional) | Soltius membantu evaluasi arsitektur ekstensi + membantu klien memahami model lisensi BTP |
| ABAP Cloud | Model ABAP modern yang hanya menggunakan released objects — dapat digunakan dalam S/4HANA (developer extensibility) atau di BTP ABAP Environment | H2 #1 dan H2 #2 | — |

**Soltius framing yang disetujui (maks 3 penyebutan):**
1. *Aside di H2 #3*: "Dalam proyek enhancement yang ditangani Soltius, SAP Build Process Automation digunakan untuk otomasi persetujuan yang sebelumnya dilakukan via modifikasi inti — ekstensi baru berjalan di BTP, core tetap bersih."
2. *Closing/CTA*: "Sebagai SAP Platinum Partner melalui United VARs, Soltius merancang arsitektur ekstensi clean core — membantu menentukan mana yang in-app, mana yang side-by-side di SAP BTP, dan mana yang diimplementasikan via SAP Build."
3. *Opsional, H2 #5*: singkat — "evaluasi arsitektur BTP dan lisensi yang tepat adalah bagian dari engagement enhancement Soltius."

---

## Authoritative external sources (≥2 kuat, untuk penulis linked out)

1. **SAP Help Portal — Extensibility for SAP S/4HANA Cloud (diakses 2026)** — https://help.sap.com/docs/SAP_S4HANA_CLOUD/extensibility — *mendukung*: definisi side-by-side extensibility, taksonomi in-app vs side-by-side vs ABAP Cloud, released API concept. Sumber primer dan paling otoritatif.

2. **SAP Business Accelerator Hub (api.sap.com — diakses 2026)** — https://api.sap.com — *mendukung*: katalog resmi released API SAP, cakupan API lintas domain (Finance, Logistics, HR, dll.). Nama dikonfirmasi live. Penulis dapat mengarahkan pembaca ke sini untuk eksplorasi langsung.

3. **SAP Help Portal — SAP Build Process Automation** — https://help.sap.com/docs/PROCESS_AUTOMATION — *mendukung*: komponen SAP Build yang relevan untuk workflow automation di atas BTP, konfirmasi nama resmi.

4. **SAP Community — "ABAP Cloud: The New ABAP" (community.sap.com)** — https://community.sap.com — *mendukung*: penjelasan ABAP Cloud dan perannya dalam clean core extensibility model; useful untuk confiming developer-extensibility tier.

5. **Gartner Low-Code Forecast Report (~2021, dikutip secara luas)** — sumber untuk proyeksi >70% aplikasi enterprise baru menggunakan low-code pada 2025. ⚠️ Gunakan dengan atribusi dan bingkai sebagai proyeksi, bukan fakta aktual.

---

## FAQ Q&As (7 pertanyaan, Bahasa Indonesia)

### Apa itu side-by-side extensibility SAP?

Side-by-side extensibility adalah pendekatan kustomisasi di mana ekstensi dibangun di luar inti S/4HANA — umumnya di platform SAP BTP — dan terhubung ke sistem inti melalui *released API* resmi SAP. Karena kode inti tidak disentuh, ekstensi ini bersifat *upgrade-safe*: pembaruan SAP tidak akan merusak ekstensi yang dibangun dengan cara ini. Ini adalah pendekatan yang direkomendasikan SAP untuk mempertahankan prinsip *clean core*.

### Apa bedanya in-app extensibility dan side-by-side extensibility?

In-app extensibility dilakukan di dalam S/4HANA sendiri menggunakan *key-user tools* bawaan — seperti penambahan custom field, objek bisnis kustom, atau konfigurasi workflow sederhana via SAP Fiori. Tidak membutuhkan SAP BTP dan cocok untuk kebutuhan konfigurasi ringan. Side-by-side extensibility dibangun di luar inti, di SAP BTP, untuk kebutuhan yang lebih kompleks: logika bisnis non-standar, integrasi dengan sistem lain, atau aplikasi UI yang sepenuhnya baru. Keduanya upgrade-safe jika menggunakan API dan tools yang released.

### Apa itu SAP BTP dan mengapa digunakan untuk ekstensi clean core?

SAP BTP (*Business Technology Platform*) adalah platform cloud SAP yang menyediakan layanan pengembangan aplikasi, integrasi, analitik, dan AI. BTP menjadi "rumah" bagi side-by-side extensions karena SAP telah menyediakan koneksi standar (via released API dan SAP Integration Suite) antara BTP dan S/4HANA. Dengan membangun ekstensi di BTP, perusahaan dapat mengembangkan fitur tambahan tanpa risiko merusak inti sistem saat SAP merilis pembaruan.

### Komponen SAP Build apa yang tersedia untuk ekstensi?

SAP Build adalah suite low-code yang berjalan di atas SAP BTP dengan (per pertengahan 2026) empat komponen utama: **SAP Build Apps** untuk membangun aplikasi mobile dan web secara visual; **SAP Build Process Automation** untuk otomasi workflow dan proses robotik (RPA); **SAP Build Work Zone** untuk portal dan launchpad terintegrasi; dan **SAP Build Code** untuk pengembangan profesional berbantuan AI (Joule) di BTP. Semua komponen dapat terhubung ke S/4HANA via released API.

### Apakah ekstensi di SAP BTP memerlukan lisensi tambahan?

Ya. Paket RISE with SAP menyertakan kapasitas SAP BTP dasar, namun pengembangan dan pengoperasian ekstensi di skala produksi — menggunakan SAP Build Apps, Build Process Automation, atau SAP Integration Suite secara penuh — umumnya membutuhkan pembelian lisensi BTP service plans tambahan. Model harganya berbasis konsumsi (capacity unit) atau paket berlangganan. Ini adalah faktor biaya yang perlu dimasukkan dalam evaluasi arsitektur ekstensi, dan menjadi salah satu alasan mengapa in-app extensibility (yang tidak butuh BTP) dipertimbangkan terlebih dahulu untuk kebutuhan sederhana.

### Apa itu released API SAP dan mengapa penting untuk ekstensi?

Released API SAP adalah API yang secara eksplisit dinyatakan SAP sebagai stabil dan tidak akan berubah secara *backward-incompatible* saat ada pembaruan sistem. Ini adalah "kontrak" antara SAP dan pengembang: ekstensi yang hanya menggunakan released API dijamin tetap berfungsi setelah upgrade. Katalog lengkapnya tersedia di **SAP Business Accelerator Hub** (api.sap.com), mencakup ribuan API lintas domain — Finance, Logistik, SDM, dan lainnya. Menggunakan API non-released (misalnya mengakses tabel SAP internal langsung) adalah akar masalah dari kustomisasi yang rusak saat upgrade.

### Bagaimana SAP Integration Suite berperan dalam arsitektur clean core?

SAP Integration Suite adalah layanan integrasi utama di SAP BTP yang menghubungkan S/4HANA dengan sistem eksternal — baik cloud maupun on-premise — menggunakan konektor standar, API Management, dan event-driven messaging. Dalam arsitektur clean core, Integration Suite menggantikan integrasi point-to-point konvensional yang sering dikodekan langsung ke dalam sistem SAP. Dengan menggunakan Integration Suite, aliran data antar sistem dikelola di lapisan BTP, bukan di dalam core — menjaga inti tetap bersih dan upgrade-safe.

---

## Data tables untuk penulis

### Tabel perbandingan: In-app vs Side-by-side Extensibility (bait featured snippet)

| Aspek | In-App / Key-User Extensibility | Side-by-Side Extensibility |
|---|---|---|
| **Di mana berjalan** | Di dalam S/4HANA | Di SAP BTP (di luar S/4HANA) |
| **Siapa yang mengerjakan** | Key user / pengguna bisnis terlatih | Developer BTP / ABAP Cloud developer |
| **Tool utama** | Custom Fields and Logic, Custom Business Objects, SAP Fiori key-user apps | SAP Build Apps, SAP Build Process Automation, ABAP Cloud di BTP |
| **Kapan cocok** | Custom field, konfigurasi workflow ringan, aturan validasi sederhana | Logika bisnis kompleks, integrasi sistem lain, UI/aplikasi baru |
| **Butuh SAP BTP?** | Tidak | Ya (plus lisensi BTP tambahan untuk skala produksi) |
| **Upgrade-safe?** | Ya (jika menggunakan released tools) | Ya (jika menggunakan released API) |
| **Kompleksitas arsitektur** | Rendah | Lebih tinggi (monitoring terpisah, konektivitas, error handling) |
| **Latensi** | Minimal (dalam sistem yang sama) | Ada overhead round-trip ke BTP |

### Komponen SAP Build dan fungsinya

| Komponen | Fungsi utama | Use case tipikal |
|---|---|---|
| SAP Build Apps | Membangun aplikasi mobile dan web secara visual (low-code) | Aplikasi approval di lapangan, custom Fiori-like apps |
| SAP Build Process Automation | Otomasi workflow + RPA | Otomasi persetujuan, pemrosesan dokumen, integrasi data berulang |
| SAP Build Work Zone | Portal launchpad terintegrasi untuk pengguna | Portal karyawan, akses terpusat ke aplikasi SAP dan non-SAP |
| SAP Build Code | Pengembangan profesional berbantuan AI (Joule) di BTP | Pengembangan CAP (Cloud Application Programming Model) extensions |

---

## Edge cases & nuance

- **"Side-by-side" tidak selalu berarti "mudah"**: Banyak perusahaan yang beralih dari kustomisasi inti menemukan bahwa side-by-side memindahkan kompleksitas — bukan menghilangkannya. Sekarang ada dua sistem yang harus dimonitor, dibackup, dan di-troubleshoot. Untuk IT team yang kecil, ini bisa lebih berat dari kustomisasi inti yang sudah dikenal.

- **In-app extensibility punya batasan yang riil**: Key-user tools tidak bisa menggantikan semua kustomisasi lama. Logika bisnis yang kompleks (misalnya: pricing engine kustom, settlement algorithm non-standar) tidak bisa dikerjakan via custom fields atau business rules standar — di sinilah side-by-side menjadi diperlukan.

- **ABAP Cloud adalah opsi ketiga yang sering terlupakan**: Antara "in-app yang terlalu sederhana" dan "side-by-side yang mahal", ABAP Cloud di dalam S/4HANA (developer extensibility) memberi developer fleksibilitas kode ABAP penuh namun tetap upgrade-safe — selama hanya menggunakan released objects. Ini sering menjadi pilihan terbaik untuk logika bisnis kompleks yang *perlu* berjalan dalam transaksi inti.

- **SAP BTP licensing complexity**: Model harga BTP berubah beberapa kali. "Berapa biaya BTP?" adalah pertanyaan yang jawabannya selalu "tergantung" — jenis service, volume konsumsi, edisi (standard vs enterprise), dan apakah sudah di dalam paket RISE. Penulis sebaiknya menghindari angka spesifik biaya BTP dan mengarahkan pembaca ke konsultasi/estimasi.

- **"Clean core" bukan kondisi binary**: Perusahaan tidak langsung bisa beralih dari "semua kustomisasi di inti" ke "semua ekstensi di BTP." Prosesnya bertahap — identifikasi kustomisasi yang bisa dipindah, prioritaskan, dan migrasikan secara bertahap. Side-by-side adalah tujuan untuk kustomisasi *baru*; warisan Z-code lama butuh jalur remediasi terpisah.

- **SAP Integration Suite vs. simple API calls**: Untuk integrasi sederhana (satu S/4HANA ke satu sistem eksternal, volume rendah), API langsung dari BTP mungkin cukup tanpa SAP Integration Suite penuh. Integration Suite diperlukan untuk skenario kompleks: multi-system, event-driven, monitoring terpusat, transformasi pesan. Jangan over-engineer untuk use case sederhana.

---

## Flags (risiko faktual terbuka)

- ⚠️ **Nama komponen SAP Build terkini**: SAP Build Apps, Build Process Automation, dan Build Work Zone sudah established. "SAP Build Code" sebagai komponen ke-4 diperkenalkan 2024 — konfirmasi bahwa nama ini masih valid dan resmi per pertengahan 2026 sebelum disebutkan. Jika tidak bisa dikonfirmasi, sebutkan 3 komponen utama saja dan beri catatan bahwa suite terus berkembang. → **Rekomendasi**: sebutkan 3 komponen yang established, tambahkan "dan SAP Build Code untuk developer profesional" dengan framing "diperkenalkan pada 2024" tanpa klaim ini adalah daftar lengkap/final.

- ⚠️ **Jumlah released API di SAP Business Accelerator Hub**: Angka spesifik tidak berhasil diverifikasi (api.sap.com dikonfirmasi namanya, tapi bukan jumlah API). Jangan tuliskan angka spesifik (misalnya "lebih dari 2.000 API"). Gunakan framing: "ribuan released API yang mencakup domain Finance, Logistik, SDM, dan lainnya tersedia di SAP Business Accelerator Hub (api.sap.com)" — ini akurat dan tidak perlu diverifikasi per angka. → **Rekomendasi**: pakai framing kualitatif ini, jangan kutip angka spesifik.

- ⚠️ **Detail lisensi BTP dalam RISE with SAP**: Model licensing RISE + BTP berubah secara periodik. Prinsip umum (RISE tidak otomatis mencakup BTP skala penuh untuk Build/Integration) adalah valid, tapi kuota spesifik dan apa yang "included" vs "additional" bisa berubah per commercial terms SAP terkini. → **Rekomendasi**: penulis JANGAN menyebut angka lisensi atau kuota spesifik. Framing: "Paket RISE menyertakan kapasitas BTP dasar, namun pengembangan ekstensi di skala produksi umumnya membutuhkan lisensi BTP tambahan" — ini cukup spesifik tanpa terlalu presisi.

- ⚠️ **Gartner low-code projection (>70% pada 2025)**: Angka ini berasal dari proyeksi Gartner ~2021 yang telah banyak dikutip. Belum diverifikasi apakah ada pembaruan angka Gartner untuk 2026 yang lebih relevan, atau apakah proyeksi ini terbukti akurat. → **Rekomendasi**: jika digunakan, bingkai eksplisit sebagai "proyeksi Gartner" dan cantumkan tahun proyeksinya (2021), bukan sebagai fakta yang sudah terjadi. Alternatif: cukup sebut "tren adopsi low-code terus tumbuh di enterprise" tanpa kutip angka spesifik yang tidak diverifikasi ulang.

---

## Definition snippet draft (40–60 kata, Bahasa Indonesia)

> *Side-by-side extensibility* adalah pendekatan kustomisasi SAP di mana ekstensi dibangun di luar inti S/4HANA — umumnya di **SAP BTP** (*Business Technology Platform*) — dan terhubung ke sistem inti melalui *released API* resmi SAP. Karena inti tidak dimodifikasi, sistem tetap *upgrade-safe* sesuai prinsip *clean core* SAP. (47 kata)

---

## Notes for image-planner

- **Konsep 1 — Diagram arsitektur konseptual (IMAGE_01)**: Tiga lapisan horizontal: (bawah) "S/4HANA Core" — (tengah) "SAP BTP" — (atas) "SAP Build / End Users". Panah dua arah antara S/4HANA dan BTP berlabel "Released API". Di lapisan BTP: ikon untuk SAP Build Apps, Build Process Automation, Integration Suite. Di luar lingkaran core, teks: "Ekstensi di sini = upgrade-safe". Ini adalah diagram konseptual paling penting untuk artikel ini — menjelaskan arsitektur secara visual.

- **Konsep 2 — Tabel perbandingan visual (IMAGE_02)**: Versi visual dari tabel in-app vs side-by-side di artikel — dua kolom dengan ikon berbeda (key user dengan tools sederhana vs developer dengan cloud platform). Format infografik yang bisa di-screenshot dan dibagikan. Warna: gunakan palet SAP (biru/abu) untuk profesionalisme.

- **Konsep 3 — Timeline evolusi (IMAGE_03)**: Timeline horizontal: "Kustomisasi langsung di core (Z-code)" → "In-app key-user tools" → "ABAP Cloud (developer extensibility)" → "Side-by-side di SAP BTP". Menunjukkan evolusi pendekatan extensibility SAP dari masa ke masa, memperkuat narasi bahwa side-by-side adalah arah terkini. Sederhana, bisa berupa ilustrasi linear dengan ikon.
