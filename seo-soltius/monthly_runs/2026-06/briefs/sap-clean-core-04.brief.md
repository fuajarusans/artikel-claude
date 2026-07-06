---
keyword: "SAP Clean Core"
keyword_slug: "sap-clean-core"
landing_page: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
month: "2026-06"
brief_id: "sap-clean-core-04"
angle: "side-by-side-extensibility-sap-btp-build"
angle_hash: "84fecc2e4a4357ab54d60886166b95a87c509f9c"
search_intent: "informational"
target_word_count: 1350
strategist_run_date: "2026-06-02"
---

# Ekstensi SAP Tanpa Menyentuh Core: Panduan Side-by-Side Extensibility di BTP

> Meta title (≤60 char, keyword di 30 char pertama): "SAP Clean Core: Cara Ekstensi via SAP BTP Tanpa Ubah Core" (58 char)
> Slug yang disarankan: `side-by-side-extensibility-sap-btp-clean-core`

## Hook hypothesis

Tim IT yang sudah memahami bahwa *clean core* adalah tujuannya sering berhenti di pertanyaan yang lebih konkret: *"Lalu kustomisasi yang kami butuhkan — laporan non-standar, workflow unik, integrasi dengan sistem legacy — taruh di mana kalau tidak boleh di core?"* Jawabannya adalah **side-by-side extensibility di SAP BTP** dan tool-tool SAP Build yang duduk di atasnya. Ini adalah artikel penghubung antara prinsip clean core (sudah di brief 01) dan eksekusi teknisnya: menjelaskan bagaimana arsitektur ekstensi di luar inti bekerja, kapan pakai in-app vs side-by-side, dan bagaimana SAP Build menjadikan ini terjangkau bagi perusahaan tanpa ratusan developer ABAP. Angle ini merangkap dua klaster — Clean Core dan Low-Code Platform — sehingga juga menguatkan topical authority untuk keyword `low-code-platform`. Soltius kredibel di sini karena mengimplementasikan ekstensi BTP / SAP Build untuk klien dalam proyek implementasi dan enhancement.

## Primary keyword

`SAP Clean Core` (varian yang ditarget: "side-by-side extensibility SAP", "ekstensi SAP BTP", "SAP Build clean core", "cara ekstensi SAP tanpa ubah core", "in-app vs side-by-side extensibility")

## Secondary / LSI keywords (8–12)

- side-by-side extensibility
- in-app extensibility / key-user extensibility
- SAP BTP (Business Technology Platform)
- SAP Build Apps
- SAP Build Process Automation
- released API SAP
- *upgrade-safe extension* (ekstensi aman upgrade)
- ABAP Cloud
- SAP Integration Suite
- arsitektur *loosely coupled* (integrasi longgar)
- *low-code extension* (ekstensi low-code)
- ekstensi S/4HANA di cloud

## Search intent & SERP feature targets

- **Stage**: awareness → consideration (sudah tahu clean core, ingin memahami model ekstensinya secara konkret)
- **Format**: explainer teknis-tapi-mudah — tabel perbandingan in-app vs side-by-side + arsitektur diagram konseptual (image placeholder) + bagian counter-konvensional ("kapan side-by-side BUKAN pilihan terbaik")
- **Surface targets**:
  - [x] AI Overview — definisi side-by-side extensibility dalam 40–60 kata
  - [x] Featured Snippet — tabel "in-app vs side-by-side: perbedaan, kapan digunakan, tool"
  - [x] People Also Ask — "apa itu side-by-side extensibility?", "kapan pakai SAP BTP untuk ekstensi?"
  - [ ] Image Pack — bukan prioritas, tapi diagram konseptual di IMAGE_01 bisa terindeks

## SERP landscape (live scrape today)

> ⚠️ **Live SERP tidak terscrape run ini** (HTTP 529 + domain SAP 403). Rekonstruksi dari domain knowledge.

**Top 3 competing pages (rekonstruksi — verifikasi saat tool pulih):**

1. **SAP Learning / SAP Help Portal** (learning.sap.com / help.sap.com — "Extensibility Overview for SAP S/4HANA Cloud") — *angle*: referensi teknis resmi yang sangat lengkap, terstruktur per jenis extensibility; **Inggris dan sangat teknis** — tidak cocok untuk CIO/manajer IT yang ingin memahami "kapan dan mengapa" tanpa ingin tahu seluruh API reference.
2. **SAP Community** (community.sap.com — blog post "Side-by-side vs in-app extensibility") — *angle*: diskusi teknis developer; **Inggris**, asumsi pembaca sudah developer ABAP/BTP.
3. **Blog SI global / SAP partner** (Capgemini / Deloitte / LeanIX) — *angle*: "Extensibility Patterns for Clean Core" — framework bagus, **Inggris**, tidak ada contoh konkret yang relevan untuk konteks perusahaan Indonesia.

**Gaps to exploit:**
- Tidak ada konten **bahasa Indonesia** yang menjelaskan arsitektur extensibility clean core untuk **pembuat keputusan** (bukan developer) — "ini cara kerjanya, ini kapan dipakainya, ini konsekuensi biaya dan kompleksitasnya."
- Tidak ada **tabel perbandingan in-app vs side-by-side** dengan kolom "kapan cocok", "siapa yang mengerjakan", "kompleksitas", "tool" yang bisa menjadi bait featured snippet dalam bahasa Indonesia.
- Tidak ada framing **SAP Build sebagai jembatan low-code** ke clean core — sebagian besar konten Indonesia membahas low-code dan clean core sebagai topik terpisah.
- Tidak ada sudut jujur: "side-by-side di BTP bukan gratis dan bukan selalu lebih mudah — ini kondisi yang harus dipenuhi."

**People Also Ask (rekonstruksi — verifikasi/expand saat pulih):**
- "Apa itu side-by-side extensibility SAP?"
- "Apa bedanya in-app extensibility dan side-by-side extensibility?"
- "Kapan sebaiknya menggunakan SAP BTP untuk ekstensi SAP?"
- "Apa itu SAP Build Apps dan bagaimana hubungannya dengan clean core?"
- "Apakah ekstensi di SAP BTP memerlukan lisensi tambahan?"
- "Apa itu released API SAP dan mengapa penting untuk ekstensi?"
- "Bagaimana SAP Integration Suite berkaitan dengan clean core?"

## Distinct angle vs. history

- **Closest prior article in this cluster**: `sap-clean-core-01` (brief 01 menyinggung in-app vs side-by-side di H2 #3, tapi hanya sebagai glossary/eksekutif — tidak ada penjelasan arsitektur, perbandingan tabel, atau SAP Build); `sap-clean-core-02` (menyebut BTP sebagai tujuan rebuild kode — juga singkat).
- **How this brief differs**: brief 04 menjadikan arsitektur extensibility sebagai topik utama — penjelasan penuh model in-app vs side-by-side, SAP Build sebagai tool low-code di atas BTP, released API, dan SAP Integration Suite. Tidak ada overlap substantif dengan sibling manapun.
- **Subtopic overlap (Jaccard) dengan sap-clean-core-01**: ≈0.22 (berbagi term BTP, in-app, side-by-side — tapi kedalaman dan konteks sangat berbeda). Di bawah 0.4.

## Article skeleton — H2s the writer should expand

1. **H2 (definitional)**: "Apa itu side-by-side extensibility dan mengapa ini jantung dari clean core?" — *covers*: definisi *side-by-side extensibility* (40–60 kata — bait AIO): ekstensi yang dibangun terpisah dari inti S/4HANA, berjalan di SAP BTP, terhubung via *released API* — inti tidak disentuh sehingga tetap *upgrade-safe*. Kontraskan dengan kustomisasi inti (cara lama) yang membuat upgrade mahal. Sebutkan entitas penuh pada penggunaan pertama.
2. **H2 (structured / tabel)**: "In-app vs side-by-side extensibility: memilih pendekatan yang tepat" — *covers*: tabel perbandingan 5-kolom: (1) Jenis — in-app/key-user vs side-by-side; (2) Di mana berjalan — dalam S/4HANA vs di SAP BTP; (3) Siapa mengerjakan — key user / citizen developer vs developer BTP/ABAP; (4) Tool — SAP Fiori app / key-user tools vs SAP Build Apps / ABAP Cloud; (5) Kapan cocok — konfigurasi sederhana/workflow ringan vs logika kompleks/integrasi sistem lain. Ini bait featured snippet utama.
3. **H2 (practical / tool deep-dive)**: "SAP Build: cara mengembangkan ekstensi clean core tanpa banyak kode" — *covers*: pengenalan komponen SAP Build yang relevan (SAP Build Apps untuk UI/aplikasi, SAP Build Process Automation untuk workflow/RPA, SAP Build Work Zone untuk portal); bagaimana low-code SAP Build duduk di atas SAP BTP dan terhubung ke S/4HANA via released API; mengapa ini relevan untuk perusahaan Indonesia yang kekurangan developer ABAP senior. Image placeholder: diagram arsitektur konseptual (S/4HANA core — BTP — SAP Build — end users). *Researcher verifikasi komponen SAP Build terkini.*
4. **H2 (question-format)**: "Apakah semua kustomisasi bisa dipindah ke side-by-side di SAP BTP?" — *covers*: jawaban jujur — tidak semua cocok. Kustomisasi dengan akses langsung ke tabel SAP internal, atau yang membutuhkan response time sangat rendah (<10ms), atau yang sangat terintegrasi dengan transaksi inti — butuh evaluasi khusus. Jelaskan kriteria teknis yang menentukan apakah side-by-side adalah pilihan yang layak atau tidak. (H2 question-format wajib.)
5. **H2 (counter-konvensional / honest)**: "Kapan side-by-side extensibility BUKAN pilihan terbaik" — *covers*: side-by-side menambah kompleksitas arsitektur (lebih banyak sistem yang harus dikelola, monitoring terpisah, biaya lisensi BTP); untuk perusahaan kecil dengan kustomisasi sederhana, in-app/key-user mungkin sudah cukup tanpa perlu BTP penuh; jika team IT tidak punya kapasitas untuk mengelola BTP runtime, biaya operasional akan mengejutkan. Sudut jujur yang membangun kepercayaan — tidak ada konsultan yang biasanya mengatakannya. (H2 counter-konvensional wajib.)
6. **FAQ** — pertanyaan untuk dijawab (40–80 kata, mandiri):
   - Apa itu side-by-side extensibility SAP?
   - Apa bedanya in-app extensibility dan side-by-side extensibility?
   - Apa itu SAP BTP dan mengapa digunakan untuk ekstensi clean core?
   - Komponen SAP Build apa yang tersedia untuk ekstensi?
   - Apakah ekstensi di SAP BTP memerlukan lisensi tambahan?
   - Apa itu released API SAP dan mengapa penting?
   - Bagaimana SAP Integration Suite berperan dalam arsitektur clean core?

(H2 #4 = question-format. H2 #5 = counter-konvensional. H2 #2 menyediakan tabel wajib.)

## SAP / partner tech to teach (dari product_matrix.md)

- **Side-by-side extensibility**: ekstensi yang berjalan di luar S/4HANA (di SAP BTP), terhubung ke inti melalui *released API* dan *standard integration tech* — tidak menyentuh kode inti.
- **In-app / key-user extensibility**: kustomisasi yang dilakukan dalam S/4HANA menggunakan *released*, *upgrade-safe* tools bawaan — field extensibility, BAdIs yang released, custom business objects dalam S/4HANA. Tidak memerlukan BTP.
- **SAP BTP (Business Technology Platform)**: platform cloud SAP tempat ekstensi side-by-side dibangun dan dioperasikan. Terdiri dari berbagai service (database, integration, AI, development). *Researcher verifikasi komponen BTP yang paling relevan untuk extensibility.*
- **SAP Build**: suite low-code/no-code di atas SAP BTP; komponen utama: SAP Build Apps (UI/aplikasi), SAP Build Process Automation (workflow + RPA), SAP Build Work Zone (portal/launchpad). *Researcher verifikasi nama komponen terkini — SAP sering merebrand.*
- **Released API / released objects**: API dan objek SAP yang secara eksplisit dinyatakan SAP sebagai stabil dan *upgrade-safe* — boleh digunakan ekstensi pihak ketiga tanpa risiko putus saat upgrade.
- **SAP Integration Suite**: layanan integrasi di SAP BTP untuk menghubungkan S/4HANA dengan sistem eksternal menggunakan standard connectors + API. *Researcher verifikasi nama dan scope terkini.*

**Fakta yang wajib diverifikasi researcher:**
- Nama resmi dan scope komponen SAP Build (Build Apps, Build Process Automation, Build Work Zone) per pertengahan 2026 — sering direbrand.
- Ketersediaan released API untuk berbagai use case (Finance, MM, SD, dll.) dan di mana dokumentasinya bisa ditemukan (SAP API Business Hub / SAP Business Accelerator Hub).
- Apakah SAP BTP tersedia secara native dalam paket RISE with SAP atau berlisensi terpisah — penting untuk penjelasan biaya.
- Batasan teknis side-by-side yang disebutkan di H2 #5 (response time, transaksi inti, dll.) — verifikasi dari dokumentasi SAP atau community.

## Soltius anchor (maks 2–3 penyebutan)

- **Service/credential**: Implementation + Enhancement (termasuk pengembangan ekstensi di SAP BTP / SAP Build). Satu aside di H2 #3: "Dalam proyek enhancement yang ditangani Soltius, SAP Build Process Automation digunakan untuk otomasi persetujuan (approval workflow) yang sebelumnya dilakukan via modifikasi inti — ekstensi baru berjalan di BTP, core tetap bersih."
- **Closing**: "Sebagai SAP Platinum Partner melalui United VARs, Soltius merancang arsitektur ekstensi clean core — membantu menentukan mana yang in-app, mana yang side-by-side di SAP BTP, dan mana yang diimplementasikan via SAP Build — agar sistem tetap mudah di-upgrade seiring pertumbuhan bisnis."
- Maks 3 penyebutan (termasuk CTA akhir).

## Internal links to place

- **Primary / BACA JUGA (hub keyword ini)**: `https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide` — anchor: `SAP Clean Core`. Instruksi writer: tempatkan sebagai callout BACA JUGA setelah H2 definitional atau H2 tabel perbandingan, format: **BACA JUGA:** [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide).
- **Cousin 1**: `https://www.soltius.co.id/id/blog/low-code-and-no-code-platforms` — anchor: `platform low-code SAP Build` — why: SAP Build adalah implementasi low-code dari side-by-side extensibility — bridge paling natural antara dua klaster ini. Tempatkan di H2 #3 saat memperkenalkan SAP Build.
- **Cousin 2**: `https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud` — anchor: `migrasi ERP ke cloud` — why: arsitektur extensibility ini adalah apa yang membuat migrasi ke S/4HANA Cloud publik memungkinkan; pembaca yang siap migrasi diarahkan ke hub #1.

## E-E-A-T signals to embed

- **Angka spesifik untuk dikutip** (verifikasi researcher):
  - Jumlah released API SAP yang tersedia di SAP Business Accelerator Hub (ratusan hingga ribuan — verifikasi angka terkini dari SAP).
  - Jika ada: data atau pernyataan SAP tentang berapa persen perusahaan S/4HANA Cloud sudah menggunakan side-by-side extensibility.
  - Contoh konkret durasi pengembangan ekstensi via SAP Build vs ABAP klasik (rule-of-thumb dari lapangan — bingkai sebagai estimasi, bukan janji).
- **Sumber otoritatif untuk dikutip** (≥2):
  1. **SAP resmi** — SAP Help Portal extensibility overview / SAP Business Accelerator Hub (released API) / SAP Build product pages (sap.com). Researcher menyediakan URL spesifik.
  2. **Analis independen** — IDC/Gartner/Forrester tentang adopsi low-code di enterprise IT atau platform strategi untuk SAP extensibility; atau SAP Transformation Research Center publikasi tentang clean core adoption.
- **First-party Soltius angle**: pengalaman mengimplementasikan ekstensi BTP / SAP Build — bingkai konkret: "Dalam satu proyek enhancement, workflow persetujuan yang sebelumnya mengubah program standar SAP dipindahkan ke SAP Build Process Automation — dampaknya: upgrade berikutnya tidak memerlukan re-test workflow itu."

## AI Overview optimization

- **Definition snippet (40–60 kata)**: writer wajib menaruh definisi bersih dalam ~150 kata pertama:
  > "*Side-by-side extensibility* adalah pendekatan kustomisasi SAP di mana ekstensi dibangun di luar inti S/4HANA — umumnya di **SAP BTP** (*Business Technology Platform*) — dan terhubung ke sistem inti melalui *released API* resmi SAP. Inti sistem tidak disentuh, sehingga tetap *upgrade-safe* sesuai prinsip *clean core*." (≈47 kata)
- **Entity list** (disebut eksplisit): SAP Clean Core, side-by-side extensibility, in-app/key-user extensibility, SAP BTP (Business Technology Platform), SAP Build, SAP Build Apps, SAP Build Process Automation, SAP Build Work Zone, released API, SAP Integration Suite, ABAP Cloud, SAP S/4HANA, upgrade-safe, loosely coupled, Soltius Indonesia, SAP Platinum Partner.
- **FAQ block target**: 7 pertanyaan; gunakan ulang PAA di atas. Tiap jawaban mandiri dan mengandung satu entitas atau fakta spesifik.

## Data captured this run

- **Source(s)**: research cache `2026-06/research/sap-clean-core.research.json` (captured: 2026-06-02) + domain knowledge SAP. Ahrefs MCP tidak tersambung; SERP tidak ter-scrape live (HTTP 529). Semua data SERP/PAA bersifat rekonstruksi.
- **Apr 2026 rank**: #100 (whitespace terbuka).
- **Volume / KD / trend**: n/a (Ahrefs tidak terhubung).
- **SERP features present**: diharapkan AI Overview + Featured Snippet tabel + PAA (belum diverifikasi live).
- **cache_source**: `2026-06/research/sap-clean-core.research.json (captured: 2026-06-02)`

## Notes for SME researcher

- **Verifikasi nama komponen SAP Build terkini** (Build Apps, Build Process Automation, Build Work Zone) — SAP sering merebrand. Pastikan nama per pertengahan 2026 dari sap.com/products/technology-platform/build.html atau dokumentasi serupa.
- **Verifikasi SAP Business Accelerator Hub** (sebelumnya SAP API Business Hub) — nama, URL, dan cara browsing released API. Berikan jumlah API yang tersedia jika ada angka publik.
- **Verifikasi BTP licensing model** — apakah BTP termasuk dalam RISE with SAP dasar atau terpisah? Ini kritis untuk H2 #5 (biaya BTP sebagai counter-argument).
- **Verifikasi batasan teknis side-by-side** — response time threshold, transaksi yang tidak bisa side-by-side, dll. Sumber: SAP Extensibility Guide atau community.sap.com.
- **Cari data low-code adoption** (Gartner/IDC) di enterprise SAP Indonesia atau ASEAN jika tersedia — untuk menempatkan SAP Build dalam konteks pasar lokal.
- **Re-pull SERP + PAA live** jika tool pulih — untuk kueri "side-by-side extensibility SAP" dan "ekstensi SAP BTP".

## Notes for future strategist runs

Yang artikel ini TIDAK cakup:
- **Remediasi Z-code warisan** — sudah di sibling 02.
- **Clean core maturity assessment / framework skor** — sudah di sibling 03.
- **Perbandingan brownfield vs greenfield berdasarkan clean core** — sibling 05 (strategis, bukan teknis arsitektur).
- **SAP Integration Suite deep-dive** — potensi artikel tersendiri di klaster Data Warehouse atau ERP-migration (integrasi pasca-migrasi) di bulan berikutnya.
