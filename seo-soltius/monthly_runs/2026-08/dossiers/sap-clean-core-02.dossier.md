---
brief_id: "sap-clean-core-02"
researcher_run_date: "2026-06-08"
sources_cited: 21
flags: 5
---

# Research Dossier: Integrasi Clean Core — Cara Menghubungkan SAP Tanpa Mengotori Core

## TL;DR for the writer

- **Dimensi integrasi** adalah salah satu dari **5 dimensi clean core** SAP (proses, data, ekstensibilitas, integrasi, operasi) — dan sering terlupakan karena tim fokus pada kode kustom sambil membiarkan antarmuka lama RFC/BAPI tetap berjalan.
- **Inti risiko**: RFC dan BAPI menciptakan *hidden coupling* — koneksi langsung ke logika bisnis internal SAP yang patah ketika SAP mengubah struktur internal saat upgrade; ini berbeda dari kode kustom yang diaudit ATC tetapi menghasilkan efek yang sama: antarmuka yang harus ditambal manual setiap upgrade.
- **Pola yang direkomendasikan SAP**: setiap antarmuka baru memakai **released OData atau SOAP API** via **SAP Integration Suite** sebagai spine integrasi; untuk komunikasi asinkron memakai **SAP Integration Suite, advanced event mesh** (nama resmi terkini, menggantikan "SAP Event Mesh" yang sedang dimigrasikan).
- **SAP Business Accelerator Hub** (nama terkini, bukan "SAP API Business Hub") adalah katalog tempat menemukan released API, events, CDS view, dan BAdI — akses via `api.sap.com` atau `hub.sap.com`.
- **Konteks Indonesia**: e-Faktur (DJP), integrasi perbankan, dan sistem logistik pihak ketiga (3PL) adalah titik integrasi lokal yang paling sering dihadapi; pola clean core (released API via Integration Suite) memberikan lapisan stabil di antara SAP dan sistem-sistem lokal ini.

---

## Core facts (verified)

**Claim 1: SAP mendefinisikan clean core memiliki lima dimensi**
> **Number/specific**: Lima dimensi: Process, Data, Extensibility, Integration, dan Operations (Operational Excellence). Dimensi Integration didefinisikan sebagai "a robust, reliable, and future-ready approach to connecting systems built on standardized, secure, and scalable technologies."
> **Source**: SAP official — `https://www.sap.com/documents/2025/12/983d8327-327f-0010-bca6-c68f7e60039b.html` "5 Guiding Principles of Clean Core" (SAP.com, diakses 2026-06-08); dikonfirmasi juga via `https://www.sap.com/products/erp/rise/methodology/clean-core.html`
> **Confidence**: high

**Claim 2: Dimensi integrasi clean core menuntut antarmuka standar berbasis API publik, bukan RFC/BAPI tak ter-release atau panggilan database langsung**
> **Number/specific**: "Clean core demands that all integrations with third-party systems use published SAP APIs — either OData services or event-based integration via SAP Integration Suite. Direct database calls or RFC-based integrations that bypass the API layer create hidden coupling that breaks with schema changes." (SAP Community/SAP-endorsed content)
> **Source**: Community.sap.com — "Modernizing RFC/BAPI-based Integrations for a Clean Core with SAP Integration Suite" (`https://community.sap.com/t5/technology-blog-posts-by-sap/modernizing-rfc-bapi-based-integrations-for-a-clean-core-with-sap/ba-p/14240582`, diakses 2026-06-08). Dikonfirmasi lintas sumber: SAP Learning, SAP RISE/Clean Core page.
> **Confidence**: high

**Claim 3: RFC dan BAPI adalah antarmuka yang paling tertanam dalam bisnis SAP dan menciptakan hidden coupling**
> **Number/specific**: "RFCs and BAPIs stand out as the most functionally embedded interface types, providing direct access to business objects within the SAP ERP core. This tight coupling, while powerful, poses modernization challenges and does not facilitate easy interoperability with external applications." SAP menegaskan: RFC dan IDoc "only recommended if absolutely necessary" untuk integrasi clean-core.
> **Source**: SAP Community (SAP-authored blog) — "Modernizing RFC/BAPI-based Integrations for a Clean Core with SAP Integration Suite" (`https://community.sap.com/t5/technology-blog-posts-by-sap/modernizing-rfc-bapi-based-integrations-for-a-clean-core-with-sap/ba-p/14240582`); SAP Learning — "Exploring How to Make Integrations Clean Core Compliant" (`https://learning.sap.com/courses/managing-clean-core-for-SAP-Cloud-ERP/exploring-how-to-make-landscapes-core-compliant-1`, diakses 2026-06-08)
> **Confidence**: high

**Claim 4: Rekomendasi SAP — setiap antarmuka baru memakai released OData/SOAP API, bukan BAPI/RFC jika sudah ada alternatif yang di-release**
> **Number/specific**: "Every new interface should use released OData or SOAP APIs via SAP Integration Suite rather than BAPI or RFC calls where a released alternative exists." SAP Learning menyatakan: "integrations should be based on standardized OData and SOAP APIs, which allow for communication and data exchange between systems."
> **Source**: SAP Learning — "Exploring How to Make Integrations Clean Core Compliant" (`https://learning.sap.com/courses/managing-clean-core-for-SAP-Cloud-ERP/exploring-how-to-make-landscapes-core-compliant-1`); SAP Learning — "Exploring Released APIs" (`https://learning.sap.com/courses/practicing-clean-core-extensibility-for-sap-s-4hana-cloud/exploring-released-apis_d80ce197-097e-4e7b-8696-b960738089c7`, diakses 2026-06-08)
> **Confidence**: high

**Claim 5: Released API SAP didefinisikan sebagai antarmuka yang dijamin stabil lintas rilis (upgrade-stable)**
> **Number/specific**: "Released APIs are formally sanctioned interfaces published by SAP with explicit stability contracts that guarantee backward compatibility across quarterly releases." SAP menyatakan: "SAP guarantees the stability of these interfaces from release to release so that customers can use them with confidence."
> **Source**: SAP Learning — "Exploring Released APIs" (`https://learning.sap.com/courses/practicing-clean-core-extensibility-for-sap-s-4hana-cloud/exploring-released-apis_d80ce197-097e-4e7b-8696-b960738089c7`); SAP News — "How to Extend SAP S/4HANA Cloud the Right Way" (`https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/`, Agustus 2025)
> **Confidence**: high

**Claim 6: Jenis released API mencakup OData (v2 dan v4) dan SOAP via ABAP RESTful Application Programming Model (RAP)**
> **Number/specific**: "Remote APIs: OData services via the ABAP RESTful Application Programming Model; SOAP services. Both support synchronous and asynchronous communication patterns." SAP S/4HANA mendukung OData V2 dan V4; V4 meningkatkan waktu pemrosesan dan konsumsi sumber daya.
> **Source**: SAP Learning — "Exploring Released APIs" (`https://learning.sap.com/courses/practicing-clean-core-extensibility-for-sap-s-4hana-cloud/exploring-released-apis_d80ce197-097e-4e7b-8696-b960738089c7`); SAP Help — "APIs on SAP Business Accelerator Hub" (`https://help.sap.com/docs/SAP_S4HANA_CLOUD/0f69f8fb28ac4bf48d2b57b9637e81fa/1e60f14bdc224c2c975c8fa8bcfd7f3f.html`, diakses 2026-06-08)
> **Confidence**: high

**Claim 7: SAP Business Accelerator Hub adalah nama resmi terkini (sebelumnya: SAP API Business Hub) — tersedia di api.sap.com dan hub.sap.com**
> **Number/specific**: SAP secara resmi mengganti nama SAP API Business Hub menjadi SAP Business Accelerator Hub. Perubahan nama dilakukan karena platform berkembang melampaui API: kini mencakup Business Processes, CDS views, events, dan konten lainnya. URL lama api.sap.com tetap aktif; hub.sap.com juga tersedia.
> **Source**: SAP Community (SAP-authored) — "SAP API Business Hub is now SAP Business Accelerator Hub" (`https://community.sap.com/t5/technology-blog-posts-by-sap/sap-api-business-hub-is-now-sap-business-accelerator-hub/ba-p/13548604`, 2023); SAP Help — "What is SAP Business Accelerator Hub" (`https://help.sap.com/docs/business-accelerator-hub/sap-business-accelerator-hub/what-is-sap-business-accelerator-hub`, diakses 2026-06-08)
> **Confidence**: high

**Claim 8: SAP Business Accelerator Hub memuat lebih dari 2.700 API (REST, OData V2, OData V4, SOAP) — tempat menemukan released API, events, CDS views, dan BAdI**
> **Number/specific**: "The SAP Business Accelerator Hub contains more than 2,700 different APIs (REST, OData V2, OData V4, and SOAP)." Merupakan repositori pusat untuk menemukan dan menguji semua public SAP APIs, menyediakan metadata, sandbox, dan contoh penggunaan.
> **Source**: SAP Community — "SAP S/4HANA APIs and Where to Find Them" (`https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/sap-s-4hana-apis-and-where-to-find-them/ba-p/13723939`); SAP Learning — "Exploring Released APIs" (dikonfirmasi: Business Accelerator Hub sebagai discovery point) — diakses 2026-06-08
> **Confidence**: medium (angka 2.700+ dari SAP Community 2024; Hub terus bertambah — gunakan "lebih dari 2.700" dengan label "per publikasi SAP Community 2024")

**Claim 9: SAP Integration Suite adalah platform integrasi utama (spine) yang mencakup Cloud Integration, API Management, Event Mesh/Advanced Event Mesh, dan Open Connectors**
> **Number/specific**: SAP Integration Suite mencakup: Cloud Integration (integrasi aplikasi cloud dan on-prem), API Management, Event Mesh, dan Open Connectors (350+ konektor pihak ketiga). Platform ini tersedia di SAP BTP. Per 2025: 3.800+ paket integrasi pre-built, 4.400+ API (OData, SOAP, REST), 600+ business events.
> **Source**: SAP official — `https://www.sap.com/products/technology-platform/integration-suite.html`; SAP Integration Suite Overview & Strategy 2025 (`https://assets.dm.ux.sap.com/sap-user-groups/pdfs/250318_sap_integration_suite_2025.pdf`) — diakses 2026-06-08
> **Confidence**: high (angka per 2025 dari dokumen SAP resmi; label tanggal)

**Claim 10: SAP API Management dalam Integration Suite menyediakan lebih dari 30 jenis kebijakan (policy types) untuk keamanan, manajemen lalu lintas, transformasi pesan, dan governance**
> **Number/specific**: "Over 30 different policy types are available, ranging from traffic management and security policies." API Management memungkinkan pembuatan API proxy, penerapan kebijakan keamanan (OAuth, API key, JWT), rate limiting, caching, logging, dan versioning.
> **Source**: SAP Help Portal — "API Management – SAP Integration Suite" (`https://help.sap.com/docs/integration-suite/sap-integration-suite/api-management-capability`); SAP official product page — `https://www.sap.com/products/technology-platform/integration-suite/api-management.html` — diakses 2026-06-08
> **Confidence**: medium (angka "30+" adalah angka yang konsisten muncul dari SAP Help; satu sumber menyebut "40+ out-of-the-box policies" — gunakan "lebih dari 30" yang lebih konservatif dan didukung SAP Help langsung; lihat Flag #3)

**Claim 11: Integrasi event-driven untuk clean core menggunakan SAP Integration Suite, advanced event mesh — nama resmi terkini yang menggantikan "SAP Event Mesh"**
> **Number/specific**: SAP Integration Suite, advanced event mesh adalah layanan fully-managed untuk event-driven architecture, mendukung publish/subscribe lintas SAP dan non-SAP. Event Mesh dalam Integration Suite (EMIS) tersedia untuk SAP Integration Suite standard dan premium editions sejak paruh kedua Juni 2024. Migrasi dari SAP Event Mesh (legacy) ke SAP Integration Suite, advanced event mesh tersedia dengan fitur export 5-langkah.
> **Source**: SAP Community (SAP-authored) — "Meet your new friend EMIS: Event Mesh in SAP Integration Suite" (`https://community.sap.com/t5/technology-blog-posts-by-sap/meet-your-new-friend-emis-event-mesh-in-sap-integration-suite/ba-p/13731129`); SAP Help — "SAP Integration Suite, Advanced Event Mesh" (`https://help.sap.com/docs/SAP_ADVANCED_EVENT_MESH`); SAP.com — "Advanced Event Mesh | SAP Integration Suite" (`https://www.sap.com/products/technology-platform/integration-suite/advanced-event-mesh.html`) — diakses 2026-06-08
> **Confidence**: high (nama resmi dikonfirmasi dari SAP Help dan SAP.com)

**Claim 12: SAP merilis Clean Core Modernization Recommendations for BAPIs di Q3 2025 — membantu arsitek mengidentifikasi BAPI lama dan menemukan API pengganti di SAP Business Accelerator Hub**
> **Number/specific**: "With the release of Clean Core Modernization Recommendations for BAPIs in Q3 2025, architects can now automatically identify BAPIs used in legacy PI/PO interfaces and discover modern, SAP-managed API equivalents via the SAP Business Accelerator Hub." Fitur ini merupakan perluasan Migration Assessment capability dalam SAP Integration Suite.
> **Source**: SAP Community (SAP Integration Suite What's New Q3/2025) — `https://community.sap.com/t5/integration-blog-posts/sap-integration-suite-what-s-new-in-q3-2025/ba-p/14243767`; SAP Community blog — "Modernizing RFC/BAPI-based Integrations" (dikonfirmasi fitur) — diakses 2026-06-08
> **Confidence**: high

**Claim 13: Integrasi point-to-point tumbuh eksponensial — formula n(n-1)/2 menghasilkan "spaghetti architecture" yang rapuh**
> **Number/specific**: Jumlah koneksi point-to-point = n(n-1)/2: 5 sistem → 10 koneksi; 10 sistem → 45 koneksi; 20 sistem → 190 koneksi. Arsitektur ini menciptakan ketergantungan tersembunyi yang membuat setiap perubahan pada satu sistem berpotensi merusak puluhan integrasi lain.
> **Source**: Reputable tech content — "Point-to-Point Integration: Explore the Strengths and Pitfalls" (exalate.com, 2026); SAP Community — "SAP S/4HANA: Stop the 'Interapplication Spaghetti'" (`https://community.sap.com/t5/technology-blog-posts-by-members/sap-s-4hana-stop-the-interapplication-spaghetti-start-the-real-time/ba-p/14229514`) — diakses 2026-06-08
> **Confidence**: medium (formula adalah fakta matematika; penerapan ke SAP context dikuatkan SAP Community; atribut sebagai "prinsip arsitektur yang umum diakui")

**Claim 14: SAP Integration Suite memuat 3.800+ paket integrasi pre-built dan 250+ adapter ke sistem SAP maupun non-SAP (per 2025)**
> **Number/specific**: Per 2025: 3.800+ pre-packaged integrations, 4.400+ APIs (OData, SOAP, REST), 600+ business events, 250+ adapters ke SAP & non-SAP systems.
> **Source**: SAP Integration Suite Overview & Strategy 2025 (`https://assets.dm.ux.sap.com/sap-user-groups/pdfs/250318_sap_integration_suite_2025.pdf`; dikonfirmasi angka via WebSearch dari dokumen resmi SAP) — diakses 2026-06-08
> **Confidence**: medium (angka dari dokumen SAP resmi 2025; dapat berubah; label "per 2025")

**Claim 15: SAP S/4HANA mendukung e-Faktur Indonesia dan integrasi perpajakan melalui lokalitas SAP — integrasi dengan DJP dapat dilakukan melalui API layer standar**
> **Number/specific**: SAP S/4HANA mendukung lokalitas Indonesia termasuk multi-currency, perpajakan, e-Faktur, dan pelaporan sesuai regulasi pemerintah. Integrasi e-Faktur dengan sistem SAP memungkinkan pembuatan dan pengelolaan faktur pajak elektronik secara otomatis dan pelaporannya ke DJP melalui sistem yang aman dan compliant.
> **Source**: Sterling-team.com — "The integration of eFaktur with SAP Business One in Indonesia" (`https://www.sterling-team.com/news/en/integration-of-efaktur-with-sap-business-one/`); SAP Community — "Faktur Pajak solution for Indonesia" (konfirmasi dukungan lokal) — diakses 2026-06-08
> **Confidence**: medium (source adalah SAP partner site, bukan SAP official; gunakan sebagai konteks ilustrasi saja; jangan klaim spesifikasi teknis yang tidak diverifikasi SAP official — lihat Flag #4)

**Claim 16: Open Connectors dalam SAP Integration Suite menyediakan 350+ konektor untuk aplikasi pihak ketiga termasuk Salesforce, logistik, dan perbankan**
> **Number/specific**: Open Connectors "enable rapid connection to 350+ third-party applications with pre-built, certified connectors that reduce integration development time by up to 80%." Mencakup 160+ SaaS applications dan web services.
> **Source**: SAP Learning — "Exploring API Management, Event Mesh, and Cloud Integration" (`https://learning.sap.com/courses/administering-sap-integration-suite/exploring-api-management-event-mesh-and-cloud-integration`); dikonfirmasi via WebSearch dari SAP official content — diakses 2026-06-08
> **Confidence**: medium (angka "350+" dan "80%" dari SAP Learning; "80%" adalah klaim marketing — label sebagai "diklaim SAP")

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **Dimensi integrasi clean core** | Salah satu dari 5 dimensi resmi SAP; definisi: koneksi berbasis antarmuka standar, stabil terhadap upgrade | H2 #1 (definitional) | — |
| **RFC/BAPI sebagai hidden coupling** | RFC/BAPI = "most functionally embedded"; menciptakan hidden coupling; SAP rekomendasikan hanya jika "absolutely necessary" | H2 #2 | — |
| **Released OData/SOAP API** | Dijamin upgrade-stable lintas rilis; didefinisikan via ABAP RAP; ditemukan di SAP Business Accelerator Hub; OData V2 & V4 | H2 #2 + tabel H2 #3 | — |
| **SAP Integration Suite** (spine) | Platform integrasi SAP BTP; capabilities: Cloud Integration, API Management, Event Mesh; 3.800+ paket pre-built (2025) | H2 #3 + H2 #4 | Soltius mengintegrasikan SAP–non-SAP memakai pendekatan API-first via Integration Suite |
| **API Management** | 30+ policy types; API proxy, keamanan, versioning, rate limiting, lifecycle; dalam SAP Integration Suite | H2 #4 | — |
| **SAP Integration Suite, advanced event mesh** | Nama resmi terkini (bukan "SAP Event Mesh"); fully-managed event-driven; publish/subscribe lintas SAP & non-SAP; tersedia di Integration Suite standard & premium sejak H2 2024 | H2 #3 (tabel) + H2 #4 | — |
| **SAP Business Accelerator Hub** | Nama resmi terkini (bukan "API Business Hub"); api.sap.com / hub.sap.com; 2.700+ API; discovery point untuk released API, events, CDS views | H2 #4 + FAQ | — |
| **Konteks Indonesia** (e-Faktur, bank, 3PL) | Ilustrasi poin integrasi lokal; jangan klaim spesifikasi teknis yang tak diverifikasi | H2 #4 atau aside | — |
| **Soltius Implementation (Enhancement/Integration)** + **SAP Platinum Partner via United VARs** | Mengintegrasikan SAP dengan sistem non-SAP; berpengalaman sejak 1998; implementasi dan dukungan, bukan "membangun" Integration Suite | Closing CTA + 1 mid-article aside | "Sebagai SAP Platinum Partner melalui United VARs, Soltius mendampingi perusahaan merancang lapisan integrasi yang API-first dan aman terhadap upgrade mendatang." |

Reminder: Soltius **mengintegrasikan/mengimplementasikan/mendukung** — tidak "membangun" SAP Integration Suite. Max 2–3 penyebutan Soltius.

---

## Authoritative external sources (untuk writer dikutip/ditautkan)

1. **SAP Learning — "Exploring How to Make Integrations Clean Core Compliant" (2024–2025)** — `https://learning.sap.com/courses/managing-clean-core-for-SAP-Cloud-ERP/exploring-how-to-make-landscapes-core-compliant-1` — *mendukung*: rekomendasi SAP bahwa integrasi clean core memakai OData/SOAP bukan RFC/BAPI; Integration Suite sebagai spine. (SAP official — otoritas tertinggi untuk klaim produk SAP.)

2. **SAP Community (SAP-authored) — "Modernizing RFC/BAPI-based Integrations for a Clean Core with SAP Integration Suite" (2024–2025)** — `https://community.sap.com/t5/technology-blog-posts-by-sap/modernizing-rfc-bapi-based-integrations-for-a-clean-core-with-sap/ba-p/14240582` — *mendukung*: hidden coupling RFC/BAPI, risiko upgrade, jalur modernisasi ke released API via Integration Suite. (SAP Community, ditulis oleh SAP.)

3. **SAP Help Portal — "SAP Business Accelerator Hub"** — `https://help.sap.com/docs/business-accelerator-hub/sap-business-accelerator-hub/what-is-sap-business-accelerator-hub` — *mendukung*: nama resmi terkini (setelah rename dari API Business Hub), URL, dan fungsinya sebagai katalog released API. (SAP official.)

---

## FAQ Q&As (7 pertanyaan, Bahasa Indonesia)

### Apa itu integrasi clean core di SAP?
Integrasi clean core adalah pendekatan menghubungkan SAP S/4HANA dengan sistem lain menggunakan antarmuka standar yang stabil terhadap upgrade — yaitu released API (OData/SOAP) dan event melalui SAP Integration Suite — alih-alih koneksi langsung berbasis RFC, BAPI, atau panggilan database yang rentan patah saat sistem diperbarui. Ini merupakan salah satu dari lima dimensi resmi clean core yang ditetapkan SAP.

### Apakah integrasi RFC dan BAPI lama melanggar prinsip clean core?
Ya. SAP menegaskan RFC dan BAPI hanya direkomendasikan "jika benar-benar diperlukan" dalam konteks clean core. Keduanya menciptakan *hidden coupling* — koneksi langsung ke logika bisnis internal SAP yang bisa patah saat SAP mengubah struktur internal selama upgrade. Sejak Q3 2025, SAP menyediakan alat Migration Assessment dalam Integration Suite untuk mengidentifikasi BAPI yang masih digunakan dan menemukan API pengganti di SAP Business Accelerator Hub.

### Apa bedanya integrasi point-to-point dan pendekatan API-first?
Integrasi point-to-point menghubungkan sistem secara langsung satu per satu. Dengan n sistem, jumlah koneksi yang harus dikelola tumbuh mengikuti rumus n(n-1)/2 — 10 sistem menghasilkan 45 koneksi, 20 sistem menghasilkan 190 koneksi. Satu perubahan di satu sistem dapat merusak puluhan koneksi lain. Pendekatan API-first memusatkan integrasi melalui satu lapisan (SAP Integration Suite), sehingga sistem pihak ketiga hanya berinteraksi dengan kontrak API yang stabil, bukan langsung ke inti SAP.

### Apa itu released API di SAP?
Released API adalah antarmuka yang secara resmi diterbitkan SAP dengan kontrak stabilitas — SAP menjamin API ini kompatibel ke belakang lintas rilis, sehingga integrasi yang dibangun di atasnya tidak perlu diubah setiap kali SAP melakukan upgrade. Jenisnya meliputi OData (V2 dan V4) dan SOAP, dibangun via ABAP RESTful Application Programming Model. Seluruh released API dapat ditemukan di SAP Business Accelerator Hub (api.sap.com).

### Apa itu SAP Business Accelerator Hub dan apa bedanya dengan SAP API Business Hub?
SAP Business Accelerator Hub adalah nama resmi terkini dari platform yang sebelumnya dikenal sebagai SAP API Business Hub — SAP mengganti namanya karena platform berkembang melampaui API, kini mencakup business processes, CDS views, events, dan BAdI interfaces. Platform ini dapat diakses di api.sap.com atau hub.sap.com dan memuat lebih dari 2.700 API berbeda (per publikasi SAP Community 2024), menjadikannya titik penemuan resmi untuk semua released interface SAP.

### Apa itu integrasi event-driven di SAP dan kapan digunakan?
Integrasi event-driven memungkinkan sistem berkomunikasi secara asinkron melalui event (peristiwa bisnis) — misalnya "pesanan dibuat" atau "stok berubah" — tanpa sistem pengirim harus menunggu respons langsung. Di ekosistem SAP, ini diwujudkan melalui SAP Integration Suite, advanced event mesh (nama resmi terkini), layanan fully-managed yang mendukung pola publish/subscribe lintas aplikasi SAP dan non-SAP. Pendekatan ini ideal untuk proses bervolume tinggi, integrasi asinkron dengan sistem logistik atau perbankan, serta skenario yang membutuhkan skalabilitas tanpa tight coupling.

### Kapan integrasi berbasis RFC masih boleh digunakan dalam konteks clean core?
RFC tidak harus segera dihapus dari semua skenario. SAP memperbolehkannya "jika benar-benar diperlukan" — khususnya untuk integrasi internal berumur pendek, beban rendah, atau ketika belum ada released API yang setara secara fungsional. Pertimbangan praktis: jika antarmuka RFC tersebut tidak terekspos ke sistem pihak ketiga, frekuensi upgradenya rendah, dan biaya migrasi ke API melebihi manfaatnya dalam horizon dua hingga tiga tahun, modernisasi bisa dijadwalkan kemudian. Yang penting: setiap antarmuka *baru* harus memakai released API sejak awal.

---

## Data tables for the writer

### Tabel 1: Pola integrasi lama vs pola clean core

| Pola Lama | Risiko terhadap Upgrade | Pola Clean Core | Keterangan |
|---|---|---|---|
| RFC (Remote Function Call) | Tinggi — hidden coupling ke logika internal; patah jika SAP mengubah fungsi | Released OData/SOAP API via SAP Integration Suite | SAP: RFC hanya jika "absolutely necessary" |
| BAPI (Business API) | Tinggi — tertanam langsung di core; tidak dijamin stabil lintas rilis | Released OData/SOAP API; gunakan Migration Assessment untuk temukan pengganti | Q3 2025: SAP rilis alat otomatis deteksi BAPI & rekomendasi API pengganti |
| Integrasi point-to-point langsung | Tinggi — spaghetti architecture; n(n-1)/2 koneksi; satu perubahan merusak banyak titik | Integrasi terpusat via SAP Integration Suite sebagai spine | 10 sistem = 45 koneksi P2P; dengan hub terpusat = 10 koneksi |
| Panggilan database langsung | Sangat Tinggi — bypass API layer; patah saat schema berubah | OData V4 untuk akses data; Event untuk perubahan data | Langsung ke tabel SAP = tidak ada kontrak stabilitas |
| IDoc (Intermediate Document) | Sedang — masih digunakan untuk B2B/EDI; sedang ditransformasi | Events via SAP Integration Suite, advanced event mesh | SAP menawarkan path migrasi IDoc-ke-events dalam Integration Suite |

### Tabel 2: Komponen SAP Integration Suite untuk clean core integration

| Kapabilitas | Fungsi Utama | Relevansi Clean Core |
|---|---|---|
| Cloud Integration | Mengorkestrasi aliran data cloud ↔ on-prem, SAP ↔ non-SAP | Spine untuk semua integrasi; menggantikan middleware point-to-point |
| API Management | 30+ policy types: keamanan, rate limiting, versioning, lifecycle | Mengatur kontrak API, akses, dan versi; mencegah coupling langsung |
| Advanced Event Mesh | Pub/sub asinkron; event-driven; lintas SAP & non-SAP | Untuk integrasi real-time bervolume tinggi tanpa tight coupling |
| Open Connectors | 350+ konektor siap pakai ke aplikasi pihak ketiga | Percepat integrasi ke sistem lokal (logistik, perbankan, dsb.) |

---

## Edge cases & nuance

- **RFC tidak selalu harus segera diganti**: Dogma "hapus semua RFC sekarang" tidak sesuai panduan resmi SAP maupun praktik di lapangan. SAP sendiri menyebut RFC "hanya jika benar-benar diperlukan" — yang berarti masih ada ruang. Ambang praktis: antarmuka internal (bukan ke pihak ketiga), beban rendah, dan tidak ada released API pengganti yang setara secara fungsional. Artikel harus jujur soal ini (H2 #5 di brief).

- **IDoc vs Event**: IDoc masih dipakai luas di skenario B2B/EDI. SAP menawarkan path "IDoc to Events" dalam migrasi PI/PO → Integration Suite, tetapi ini tidak berarti semua IDoc harus langsung dikonversi. Writer jangan menyederhanakan menjadi "IDoc = buruk" — lebih tepat: "IDoc sedang bertransformasi ke events untuk skenario baru."

- **"SAP Event Mesh" vs "SAP Integration Suite, advanced event mesh"**: Kedua nama ini masih ditemukan dalam dokumentasi (termasuk SAP resmi) karena transisi bertahap. Nama resmi terkini untuk kapabilitas event-driven enterprise-grade adalah **SAP Integration Suite, advanced event mesh**. "Event Mesh" (tanpa "advanced") merujuk ke kapabilitas dasar dalam Integration Suite standard edition. Jangan tukar-pakai keduanya tanpa klarifikasi — lihat Flag #1.

- **Angka "30+ policy types"**: SAP Help menyebut "over 30" sementara satu sumber SAP menyebut "over 40 out-of-the-box policies." Gunakan "lebih dari 30" yang lebih konservatif dan secara eksplisit didukung SAP Help. Beri label sumber.

- **Konteks Indonesia — e-Faktur**: Integrasi e-Faktur di SAP lebih umum dibahas dalam konteks SAP Business One; untuk S/4HANA, pendekatan serupa berlaku tetapi spesifikasi teknis resmi dari SAP untuk S/4HANA Indonesia belum diverifikasi dari sumber SAP official dalam penelitian ini. Gunakan sebagai ilustrasi konteks ("sistem perpajakan lokal") tanpa mengklaim alur teknis spesifik yang tidak diverifikasi.

- **Soltius + Integration Suite**: Framing yang tepat adalah Soltius *mengintegrasikan* SAP dengan sistem non-SAP *menggunakan* SAP Integration Suite (sesuai product_matrix); Soltius tidak memiliki atau "membangun" Integration Suite. Ini penting khususnya di closing CTA.

---

## Flags (open factual risk)

- **Flag #1 — Naming: SAP Event Mesh vs SAP Integration Suite, advanced event mesh**: Kedua nama masih muncul di dokumentasi SAP resmi secara bersamaan. Nama resmi terkini untuk enterprise-grade event-driven adalah "SAP Integration Suite, advanced event mesh." Kapabilitas dasar bernama "Event Mesh" (tanpa "advanced") tersedia di Integration Suite standard/premium. Rekomendasi: gunakan nama lengkap "SAP Integration Suite, advanced event mesh" di penyebutan pertama; singkat menjadi "advanced event mesh" setelahnya; jangan hanya tulis "SAP Event Mesh" tanpa klarifikasi konteks. Akses: 2026-06-08.

- **Flag #2 — Angka API Management policy types**: SAP Help ("over 30") vs satu sumber SAP learning ("over 40 out-of-the-box"). Angka ini bisa berubah karena Integration Suite terus diperbarui. Rekomendasi: gunakan "lebih dari 30 tipe kebijakan (policy) — per dokumentasi SAP Help Portal)" dan label tanggal akses. Jangan tulis angka tanpa atribusi.

- **Flag #3 — Angka SAP Business Accelerator Hub**: "2.700+ API" dari SAP Community 2024 — angka ini terus bertambah dan tidak terverifikasi ulang dari SAP Help langsung (SAP Help Portal mengembalikan konten minimal saat di-fetch). Rekomendasi: gunakan "lebih dari 2.700 API berbeda (per publikasi SAP 2024)" dengan label. Jangan klaim tanpa label temporal.

- **Flag #4 — Konteks Indonesia (e-Faktur / S/4HANA)**: Tidak ada sumber SAP official yang secara eksplisit menggambarkan alur teknis integrasi e-Faktur dengan SAP S/4HANA melalui Integration Suite dalam penelitian ini. Sumber yang ditemukan mencakup SAP Business One (bukan S/4HANA). Rekomendasi: gunakan e-Faktur hanya sebagai ilustrasi konteks bisnis ("perusahaan di Indonesia perlu mengintegrasikan SAP dengan sistem perpajakan lokal seperti e-Faktur DJP") tanpa mengklaim alur teknis spesifik yang belum diverifikasi dari SAP official untuk S/4HANA.

- **Flag #5 — Open Connectors "80% pengurangan waktu pengembangan"**: Klaim "reduce integration development time by up to 80%" dari SAP Learning adalah klaim marketing — tidak ada studi independen yang memverifikasi angka ini. Rekomendasi: jika digunakan, atribusi eksplisit ("menurut SAP") dan hindari menjadikannya headline claim.

---

## Definition snippet draft (40–60 words)

> Integrasi clean core adalah pendekatan menghubungkan SAP S/4HANA dengan sistem lain menggunakan antarmuka standar yang dijamin stabil terhadap upgrade — berupa released API (OData/SOAP) dan event melalui SAP Integration Suite — alih-alih koneksi RFC, BAPI, atau panggilan database langsung yang menciptakan *hidden coupling* dan rentan patah saat sistem diperbarui. Ini merupakan salah satu dari lima dimensi resmi clean core SAP.

*(55 kata — dalam rentang 40–60. Writer dapat menyempurnakan.)*

---

## Notes for image-planner

- **Concept 1 — Diagram perbandingan arsitektur**: Dua panel berdampingan — kiri: "Integrasi lama" menampilkan garis-garis point-to-point yang kusut (spaghetti) antara SAP dan 5–6 sistem eksternal (bank, logistik, pajak, CRM, WMS) via RFC/BAPI; kanan: "Clean core integration" menampilkan SAP Integration Suite sebagai pusat (hub), dengan garis bersih dari SAP ke Integration Suite dan dari sana ke sistem eksternal via released API dan event. Label: "Point-to-Point: n(n-1)/2 koneksi" vs "Hub-and-Spoke: terpusat, stabil."

- **Concept 2 — Tabel visual pola lama vs clean core**: Infografis ringkasan tabel Pola Lama → Risiko → Pola Clean Core dalam desain clean dengan ikon-ikon risiko (merah/kuning) di kolom tengah. Cocok untuk screenshot-sharing oleh pembaca B2B. Alternatif: versi infografis dari tabel yang sudah di-draft di bagian "Data tables."

- **Concept 3 — Diagram 5 dimensi clean core + highlight dimensi integrasi**: Bagan donat atau ikon lima segmen mewakili 5 dimensi (Process, Data, Extensibility, Integration, Operations) dengan segmen "Integration" di-highlight (warna berbeda). Di bawah, 3 poin singkat tentang apa yang dimaksud clean integration. Berguna sebagai visual pembuka untuk H2 #1.
