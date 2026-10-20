---
brief_id: "master-data-management-c01"
researcher_run_date: "2026-10-08"
sources_cited: 5
flags: 4
batch: "conditional-2026-10"
target_word_count: 1100
---

# Research Dossier: Master Data Management (MDM): Pengertian dan Pentingnya

## TL;DR for the writer

- **Definisi Gartner terverifikasi persis** (via CIO, mengutip Gartner): MDM = *"a technology-enabled discipline in which business and IT work together to ensure the uniformity, accuracy, stewardship, semantic consistency, and accountability of the enterprise's official, shared master data assets."* Lima sasaran: uniformity, accuracy, stewardship, semantic consistency, accountability. Parafrase lebih aman; jika mengutip langsung jaga ≤15 kata + atribusi "menurut Gartner".
- **Lima entitas master data terverifikasi**: pelanggan, pemasok (vendor), karyawan, produk, cost center — persis dikonfirmasi CIO (mengutip praktik umum) + IBM. Pakai angka "5 entitas inti" dengan aman.
- **SAP MDG: dua model deployment** — *centrally managed* (satu hub) vs *federated* (kepemilikan dibagi lintas instance; core data owner + application data owner). Terverifikasi di SAP Learning resmi.
- **KOREKSI PENTING vs brief**: brief mengasumsikan "cloud edition = fondasi federasi". SAP Learning menyatakan sebaliknya — **SAP MDG cloud edition sebagai *core data owner* dalam skenario federasi BELUM tersedia; masih di roadmap.** Writer WAJIB meng-hedge; JANGAN klaim cloud edition sudah menenagai federasi.
- **Angka biaya poor data quality** (~US$12,9 juta/tahun) banyak diatribusikan ke Gartner tetapi sumber primer tak bisa dibuka + tahun/scope diperdebatkan (2020–2022; ada yang bilang khusus AS). Label sebagai "estimasi Gartner" + tahun ~2021 + hedge; JANGAN bulatkan jadi fakta mutlak.

## Core facts (verified)

> **Claim**: Definisi resmi Gartner untuk Master Data Management.
> **Number/specific**: *"a technology-enabled discipline in which business and IT work together to ensure the uniformity, accuracy, stewardship, semantic consistency, and accountability of the enterprise's official, shared master data assets."* (5 sasaran).
> **Source**: Gartner, dikutip verbatim oleh CIO.com — "What is master data management? Ensuring a single source of truth" (diakses 2026-10-08). Catatan: glossary gartner.com sendiri mengembalikan HTTP 403 (anti-bot), jadi atribusi lewat sumber sekunder bereputasi; wording identik dengan yang dicatat brief.
> **Confidence**: high (wording stabil & cocok antara brief dan CIO; namun bukan dari halaman Gartner langsung → atribusikan "menurut Gartner", jangan klaim "halaman glossary Gartner menyebut…").

> **Claim**: Contoh/entitas master data yang lazim.
> **Number/specific**: "customers, suppliers, employees, products, cost centers" — lima entitas inti.
> **Source**: CIO.com (artikel MDM, mengutip praktik umum), diakses 2026-10-08.
> **Confidence**: high. Konsisten dengan brief (5 entitas).

> **Claim**: Definisi master data & golden record menurut IBM.
> **Number/specific**: Master data = "Core data describing key business entities, such as customers, products and locations." Golden record = "a single source of truth that integrates data from various sources." MDM = "a comprehensive approach to managing an organization's critical data across the enterprise."
> **Source**: IBM — ibm.com/think/topics/master-data-management, diakses 2026-10-08.
> **Confidence**: high.

> **Claim**: Domain master data di MDM = pelanggan, produk, pemasok, lokasi, dsb (kerangka entitas).
> **Number/specific**: IBM memetakan domain Customer (termasuk employee, salesperson), Product (part, store, asset), Supplier, Location, Other (contract, warranty, license).
> **Source**: IBM, diakses 2026-10-08.
> **Confidence**: high (sebagai kerangka umum; penamaan domain MDM berbeda-beda per vendor).

> **Claim**: SAP Master Data Governance menawarkan dua model deployment: centrally managed dan federated.
> **Number/specific**: *Centrally managed* = master data dikelola terpusat di lanskap. *Federated* = kepemilikan data dibagi lintas beberapa instance MDG, tiap instance memiliki subset master data; menyeimbangkan proses sentral vs desentral dengan model kepemilikan yang jelas.
> **Source**: SAP Learning resmi — "Introducing Federated Master Data Governance" (learning.sap.com), diakses 2026-10-08.
> **Confidence**: high (SAP official).

> **Claim**: Peran core data owner (CDO) vs application data owner (ADO) di federated MDG.
> **Number/specific**: CDO mengelola atribut master data enterprise-wide (contoh Business Partner: nama, alamat, nomor pajak, nomor identifikasi); menerima data ter-replikasi, menentukan owner relevan, lalu me-replikasi data terverifikasi ke semua instance MDG & klien master data. ADO mengelola segmen spesifik aplikasi (mis. data yang mengendalikan proses penjualan & keuangan); memverifikasi/merevisi datanya lalu mengirim hasil kembali ke CDO.
> **Source**: SAP Learning resmi (learning.sap.com), diakses 2026-10-08.
> **Confidence**: high (SAP official).

> **Claim**: MDG dapat berjalan di dalam SAP S/4HANA.
> **Number/specific**: "Master Data Governance on SAP S/4HANA" bisa berperan sebagai core data owner dalam skenario federasi; MDG juga dapat diaktifkan pada sistem SAP S/4HANA operatif agar sistem itu menjadi application data owner.
> **Source**: SAP Learning resmi (learning.sap.com), diakses 2026-10-08.
> **Confidence**: high.

> **Claim**: ⚠️ FORWARD-LOOKING — SAP MDG cloud edition sebagai core data owner dalam skenario federasi BELUM tersedia.
> **Number/specific**: Kutipan SAP Learning: *"SAP Master Data Governance, cloud edition: Serving as a core data owner in federated scenarios is not yet available. The capability is on the roadmap."*
> **Source**: SAP Learning resmi (learning.sap.com), diakses 2026-10-08.
> **Confidence**: high untuk status "belum tersedia / roadmap". **Ini mengoreksi asumsi brief** ("cloud edition = fondasi federasi"). Writer WAJIB hedge: cloud edition tersedia untuk model *centrally managed* (arsitektur referensi SAP menyebut varian centrally managed pada MDG cloud edition 2308), tetapi perannya sebagai core data owner federasi masih roadmap.

> **Claim**: Federated bukan keharusan, melainkan alternatif untuk lanskap multi-S/4HANA.
> **Number/specific**: SAP menegaskan federated governance bukan kewajiban; ia alternatif dari centrally managed bagi organisasi dengan beberapa sistem SAP S/4HANA.
> **Source**: SAP blog/community (blogs.sap.com) + SAP Learning, diakses 2026-10-08.
> **Confidence**: high.

> **Claim**: Tiga domain inti SAP MDG + cakupan finance.
> **Number/specific**: Domain inti MDG = business partner (mencakup pelanggan & pemasok), material, dan finance. Finance (MDG-F) mencakup cost center, profit center, dan hierarki chart-of-accounts. Halaman pricing SAP: edisi private cloud/on-prem mendaftarkan Business Partner (customer & supplier), Material, Financials, Custom Objects; edisi public cloud mendaftarkan Business Partner, Product.
> **Source**: SAP blogs/community + SAP pricing page (diringkas via WebSearch), diakses 2026-10-08. Catatan: halaman produk SAP (sap.com/products/.../master-data-governance) mengembalikan HTTP 403; penamaan edisi dapat berubah.
> **Confidence**: medium-high (business partner/material/finance = mapan; daftar persis per-edisi sebaiknya diverifikasi ulang di SAP Help untuk rilis spesifik sebelum klaim detail).

> **Claim**: Biaya poor data quality bagi organisasi.
> **Number/specific**: ~US$12,9 juta per tahun rata-rata, diatribusikan ke Gartner. Sumber sekunder menandai asal ~2020–2021 (survei reference customers Magic Quadrant Data Quality Solutions 2020); satu sumber (TCS) menyebut US$12,8 juta; satu sumber (Dynata) membatasi scope ke AS.
> **Source**: Diatribusikan ke Gartner via beberapa sumber sekunder (Formtek, Boomi, BigDATAwire 2022, Verato). Primer Gartner TIDAK dapat diakses.
> **Confidence**: low–medium. **WAJIB label**: "estimasi Gartner (sekitar 2021)" + hedge; jangan jadikan angka mutlak; jangan sebut tahun pasti tanpa verifikasi.

> **Claim**: MDM menghasilkan "single version of truth" lintas salinan master data.
> **Number/specific**: MDM berupaya menciptakan satu versi kebenaran di seluruh salinan master data agar nilai data tetap selaras antarsistem.
> **Source**: CIO.com + IBM, diakses 2026-10-08.
> **Confidence**: high.

> **Claim**: Disambiguasi akronim MDM.
> **Number/specific**: Dalam konteks data, MDM = Master Data Management. Akronim yang sama juga dipakai untuk Mobile Device Management (pengelolaan perangkat seluler) — domain yang sepenuhnya berbeda.
> **Source**: Pengetahuan umum industri IT (tidak kontroversial); tidak butuh sitasi tunggal.
> **Confidence**: high.

> **Claim**: Hubungan MDM dengan data governance.
> **Number/specific**: MDM = disiplin/metode; data governance = aturannya (kepemilikan, akuntabilitas, hak akses, standar kualitas). Definisi Gartner secara eksplisit memasukkan "accountability" dan "stewardship" sebagai sasaran MDM, menandakan governance melekat.
> **Source**: Turunan definisi Gartner (via CIO.com), diakses 2026-10-08.
> **Confidence**: high (konseptual, didukung definisi).

> **Claim**: Master data bersih = prasyarat BI/analitik andal & migrasi S/4HANA bersih.
> **Number/specific**: Prinsip garbage-in → garbage-out: keandalan BI hanya sebaik master data yang menyuapinya; migrasi S/4HANA kerap tersendat jika master data belum bersih.
> **Source**: Prinsip mapan enterprise-IT (framing pengalaman implementasi; bukan klaim numerik). Dukungan konsep: IBM/CIO (SSOT sebagai fondasi).
> **Confidence**: high sebagai prinsip; JANGAN tempel angka klien.

**Total verified claims: 15** (melampaui ambang 12; prioritaskan 8–12 terkuat untuk ~1100 kata).

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Master Data Governance (MDG)** | Nama lengkap di sebutan pertama. Fungsi: mengelola, memvalidasi, menegakkan tata kelola master data (business partner/pelanggan+pemasok, material, finance). Model: *centrally managed* vs *federated* (core data owner + application data owner). Dapat berjalan di dalam S/4HANA atau sebagai hub. **Cloud edition sbg core data owner federasi = masih roadmap (hedge).** | H2-4 ("SAP MDG: terpusat atau terfederasi?") — tempat CTA mendarat | **Data and AI Consulting** + solusi **Data Management**; SAP Platinum Partner via United VARs, bagian Metrodata Group sejak 1998 |

Reminder framing: Soltius **mengimplementasikan & mendampingi** penataan master data + SAP MDG (assessment → pasca go-live) — **bukan membuat** perangkat lunaknya. **Maks 2 self-mention** (1 positioning line di Kesimpulan + 1 soft website CTA baris terakhir). TANPA aside Soltius di tengah body.

## Internal links (TEPAT 2 — 1 hub + 1 cousin)

1. **Hub (paling relevan)**: `https://www.soltius.co.id/id/solutions-by-products/data-management` — anchor natural: "solusi manajemen data" / "pengelolaan siklus data". Placement: inline di lead/awal body. (Halaman solusi Data Management; CTA SAP MDG menyalur ke sini.)
2. **Cousin**: `https://www.soltius.co.id/id/blog/business-intelligence` — anchor: "business intelligence". Alasan: keandalan BI hanya sebaik master data yang menyuapinya (MDM = fondasi, BI = konsumen data).

> ⚠️ Hub & cousin dipilih strategist tetapi sheet mengosongkan landing; **lihat Flags + pertanyaan user**. JANGAN tambah link ketiga; TANPA "BACA JUGA".

## Authoritative external sources (≥2 strong, untuk tautan keluar writer)

1. **Gartner (via CIO.com)** — `https://www.cio.com/article/191827/what-is-master-data-management-ensuring-a-single-source-of-truth.html` — *what it backs*: definisi resmi MDM + lima sasaran + entitas master data (customers, suppliers, employees, products, cost centers). Atribusikan "menurut Gartner".
2. **SAP Learning (resmi)** — `https://learning.sap.com/courses/introducing-sap-master-data-governance/introducing-federated-master-data-governance` — *what it backs*: model centrally managed vs federated, peran core/application data owner, status cloud edition (roadmap).
3. **IBM** — `https://www.ibm.com/think/topics/master-data-management` — *what it backs*: kerangka entitas master data + definisi golden record/SSOT (pendukung; alternatif jika butuh sitasi non-SAP non-Gartner).

> Prioritas untuk 1–2 sitasi inline: **Gartner (definisi)** + **SAP official (MDG)**. IBM sebagai cadangan. Hindari outbound ke kompetitor integrator SAP.

## FAQ Q&As (5 drafted, Bahasa Indonesia; 30–60 kata, tiap jawaban memuat 1 fakta)

### Apa bedanya master data management dengan mobile device management?
Dalam konteks data, MDM berarti Master Data Management, yakni tata kelola data inti bisnis. Istilah ini kerap tertukar dengan Mobile Device Management, pengelolaan perangkat seluler karyawan. Keduanya disingkat MDM, tetapi tidak berhubungan: yang satu mengurus data, yang lain mengurus gawai.

### Apa saja contoh master data?
Contoh master data mencakup lima entitas inti: pelanggan, produk/material, vendor (pemasok), karyawan, dan cost center. Semuanya dipakai berulang lintas proses. Ini berbeda dari data transaksi seperti purchase order atau invoice, yang mencatat peristiwa dan terus bertambah setiap hari.

### Apa itu golden record dalam MDM?
Golden record adalah satu catatan master tepercaya hasil konsolidasi dan de-duplikasi dari banyak sumber. Menurut IBM, golden record berfungsi sebagai single source of truth yang mengintegrasikan data dari berbagai sistem, sehingga setiap divisi membaca versi data yang sama.

### Apakah MDM sama dengan data governance?
Tidak persis sama. MDM adalah disiplin atau metode menjaga data inti, sedangkan data governance adalah seperangkat aturannya: kepemilikan, akuntabilitas, hak akses, dan standar kualitas. Definisi Gartner bahkan menyebut akuntabilitas sebagai salah satu dari lima sasaran MDM, menandakan governance melekat di dalamnya.

### Apa itu SAP MDG dan kapan perusahaan membutuhkannya?
SAP Master Data Governance (MDG) adalah solusi SAP untuk mengelola dan menegakkan tata kelola master data di tiga domain inti: business partner (pelanggan dan pemasok), material, serta finance (termasuk cost center). MDG relevan saat master data tersebar di banyak sistem dan sudah membebani keputusan.

## Data tables for the writer

### Tabel 1 — Master data vs data transaksi vs data referensi (untuk H2-2)
| Jenis data | Ciri | Contoh | Frekuensi perubahan |
|---|---|---|---|
| **Master data** | Entitas inti yang dipakai berulang lintas proses | Pelanggan, produk/material, vendor, karyawan, cost center | Jarang (relatif stabil) |
| **Data transaksi** | Peristiwa/aktivitas bisnis yang merujuk master data | Purchase order, invoice, pengiriman, jurnal | Sering (terus bertambah) |
| **Data referensi** | Daftar nilai standar untuk klasifikasi | Kode negara, mata uang, unit of measure (UoM) | Sangat jarang (nyaris tetap) |

### Tabel 2 — SAP MDG: centrally managed vs federated (untuk H2-4; funnel ke CTA)
| Aspek | Centrally managed | Federated |
|---|---|---|
| Model kepemilikan | Master data dikelola terpusat di satu hub | Kepemilikan dibagi lintas beberapa instance MDG |
| Cocok untuk | Lanskap dengan satu proses yang diharmonisasi | Lanskap dengan beberapa sistem SAP S/4HANA + kepemilikan lokal |
| Peran kunci | Satu pengelola terpusat | core data owner (atribut enterprise-wide) + application data owner (segmen aplikasi) |
| Status (Okt 2026) | Tersedia di S/4HANA & MDG cloud edition (varian centrally managed) | Federasi via S/4HANA 2023+; MDG **cloud edition sbg core data owner = masih roadmap** (hedge) |

> Langkah membangun SSOT (untuk H2-3, list bernomor): (1) konsolidasi sumber → (2) standardisasi & validasi aturan → (3) pencocokan & de-duplikasi menjadi golden record → (4) tata kelola (tetapkan data owner/data steward, hak ubah, alur persetujuan) → (5) distribusi/sinkronisasi ke sistem hilir. Tekankan: program berjalan, bukan sekali jalan.

## Definition snippet draft (40–60 kata; SEKALI, jangan diulang di body/H2/FAQ)

> Secara singkat, master data management (MDM) adalah disiplin tata kelola yang menjaga satu versi data inti perusahaan (pelanggan, produk, vendor, karyawan) tetap akurat, konsisten, dan tepercaya di seluruh sistem, sehingga menjadi single source of truth yang dibaca sama oleh semua divisi.

(41 kata; tanpa em-dash agar jatah em-dash body tetap utuh.)

## Edge cases & nuance

- **"Kapan belum perlu" program MDM penuh** (hedging jujur untuk H2-3, 1–2 kalimat): perusahaan dengan satu sistem, data karyawan < beberapa ratus, dan belum banyak integrasi sebaiknya mulai dari pembersihan data + aturan sederhana — belum perlu hub MDG penuh. Ini differentiator E-E-A-T.
- **Master data produk (SKU) ≠ MDM**: MDM lintas domain (pelanggan/produk/vendor/karyawan), bukan skema kode satu domain. Bedakan tegas dari artikel SKU (sku-c01), ETL (pemindahan data), OLAP/OLTP (beban kerja), data lake vs warehouse (arsitektur penyimpanan).
- **MDG bukan sihir instan**: tooling menegakkan tata kelola, tetapi golden record tetap butuh data owner/steward manusia + aturan. Posisikan MDG sebagai *alat penegak*, bukan tombol ajaib.
- **Penamaan/edisi SAP berubah**: "cloud edition", cakupan federasi, rilis yang didukung dapat bergeser. Rujuk SAP Help/SAP Learning sebelum klaim rilis/lisensi spesifik.

## Flags (open factual risk)

- ⚠️ **Angka US$12,9 juta/tahun (poor data quality)**: diatribusikan ke Gartner tetapi primer tak terakses; tahun (2020–2022) & scope (global vs AS) diperdebatkan; TCS menyebut US$12,8 juta. → **Rekomendasi**: tulis "estimasi Gartner (sekitar 2021), rata-rata sekitar US$12,9 juta per tahun"; jangan jadikan fakta mutlak; atau ganti dengan prinsip kualitatif bila writer ragu.
- ⚠️ **Cloud edition & federasi (FORWARD-LOOKING)**: SAP Learning menyatakan cloud edition sebagai core data owner federasi **belum tersedia (roadmap)**. → **Rekomendasi**: JANGAN tulis "cloud edition sudah menenagai federasi". Tulis hedge: "model federasi umumnya berbasis S/4HANA 2023+; peran cloud edition untuk skenario ini masih berkembang menurut roadmap SAP."
- ⚠️ **Definisi Gartner lewat sumber sekunder**: glossary gartner.com 403. → **Rekomendasi**: atribusikan "menurut Gartner" (bukan "halaman glossary Gartner menyebut"); parafrase atau kutip ≤15 kata.
- ⚠️ **Daftar domain per-edisi MDG**: halaman produk SAP 403; daftar edisi (public cloud = Business Partner + Product; private/on-prem = + Material, Financials, Custom Objects) dari sumber sekunder/ringkasan. → **Rekomendasi**: aman menyebut tiga domain inti (business partner, material, finance); untuk daftar per-edisi spesifik, writer verifikasi di SAP Help rilis terkait atau hindari detail per-edisi.

## Catatan untuk orchestrator / writer

- Ini **tahap-1** (dossier). Tahap berikut (writer → editor → validator → .docx) belum dijalankan untuk artikel ini.
- Target 1100 kata; 0 image placeholder; definisi SEKALI; 4 H2 (H2-1 question; H2-2 tabel; H2-3 langkah SSOT; H2-4 MDG terpusat vs terfederasi + CTA); FAQ 5; sitasi Gartner + SAP official; Soltius maks 2 mention.
- **Pertanyaan untuk user** (user minta ditanyai) diteruskan via laporan orchestrator — lihat ringkasan run.
