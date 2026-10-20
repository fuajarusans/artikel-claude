---
brief_id: "erp-migration-to-the-cloud-01"
researcher_run_date: "2026-08-11"
sources_cited: 16
flags: 6
---

# Research Dossier: Hyperscaler untuk Migrasi ERP ke Cloud: AWS, Azure, atau GCP?

## TL;DR for the writer

- **RISE with SAP adalah layanan terkelola**: SAP yang memegang kontrak dan mengelola akun hyperscaler, memikul SLA, operasi cloud, dan technical support. Ini fakta pembeda utama artikel — pelanggan *memilih* hyperscaler, tapi *tidak* menandatangani kontrak langsung dengan AWS/Azure/GCP. (Sumber SAP-official: AWS RISE docs.)
- **Empat hyperscaler resmi**: AWS, Microsoft Azure, Google Cloud, dan **IBM Cloud** (IBM naik jadi "full-fledged hyperscaler" via IBM Power Virtual Server, tersertifikasi 2025) — plus opsi data center milik SAP sendiri. **Huawei Cloud BUKAN** hyperscaler RISE resmi (meski mitra teknologi Soltius) — jangan sebut sebagai opsi RISE.
- **Ketiga hyperscaler AS besar kini punya region di Jakarta**: AWS ap-southeast-3 (Des 2021), Google Cloud asia-southeast2 (2020), dan **Azure Indonesia Central sudah GA sejak 27 Mei 2025** — update penting: brief menandai statusnya "belum pasti", padahal sekarang sudah live. IBM tidak punya region publik di Indonesia.
- **Regulasi**: UU PDP No. 27/2022 berlaku penuh **17 Oktober 2024** — ini pendorong data residency, bukan larangan cloud lintas batas.
- **Angle jujur (H2 #5)**: karena SAP yang mengelola operasional harian, pilihan hyperscaler jarang jadi penentu nasib proyek untuk mayoritas perusahaan. Yang penting: komitmen cloud existing, kebutuhan latency/region spesifik, cakupan BTP, dan ketentuan exit di kontrak. Lock-in nyata ada di RISE/SAP, bukan di hyperscaler.

## Core facts (verified)

> **Claim**: RISE with SAP adalah layanan cloud ERP terkelola berbasis SAP S/4HANA Cloud Private Edition; SAP memikul SLA menyeluruh, operasi cloud, dan technical support.
> **Number/specific**: "SAP maintains responsibility for the holistic service level agreement, cloud operations, and technical support for RISE." Single-tenant, terisolasi per akun/VPC.
> **Source**: AWS official — General SAP Guides, "RISE with SAP on AWS Cloud", docs.aws.amazon.com/sap/latest/general/rise.html (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Dalam RISE, SAP yang **memiliki dan mengelola akun hyperscaler** tempat sistem di-deploy — bukan pelanggan.
> **Number/specific**: "SAP owns and manages the AWS account where RISE with SAP is deployed, and is responsible for the AWS services used to serve your SAP landscape." Pelanggan memilih cloud provider, tapi kontrak/akun infrastruktur dipegang SAP.
> **Source**: AWS official — docs.aws.amazon.com/sap/latest/general/rise.html (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Pelanggan tetap bisa memakai akun hyperscaler sendiri (terpisah, tidak dikelola SAP) untuk ekstensi/lapisan data.
> **Number/specific**: "You must create a separate AWS account ... for creating extensions" — mis. data lake via Amazon AppFlow atau AWS Glue.
> **Source**: AWS official — docs.aws.amazon.com/sap/latest/general/rise.html (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Hyperscaler resmi untuk RISE with SAP adalah AWS, Microsoft Azure, Google Cloud, dan IBM Cloud — plus opsi data center milik SAP sendiri.
> **Number/specific**: IBM menjadi "full-fledged hyperscaler" untuk RISE melalui **IBM Power Virtual Server** (tersertifikasi 2025), satu-satunya opsi dengan teknologi IBM Power tersertifikasi SAP.
> **Source**: SAPinsider, "RISE with SAP's New Hyperscaler Option is IBM"; IBM Community (IBM Cloud for SAP) (diakses 2026-08-11)
> **Confidence**: high (daftar 4 hyperscaler); medium untuk detail sertifikasi IBM — attribute ke IBM/SAPinsider

> **Claim**: Secara komersial, Azure kerap menjadi default RISE di banyak region (hubungan co-sell/co-develop SAP–Microsoft); AWS atau GCP sering perlu dinegosiasikan eksplisit.
> **Number/specific**: "SAP's commercial structure creates a strong default preference for Azure in most regions ... enterprises with AWS or GCP commitments must explicitly negotiate."
> **Source**: SAP licensing/advisory (SAP Licensing Experts; licensingdatasolutions.com) (diakses 2026-08-11)
> **Confidence**: medium — pola komersial dari konsultan lisensi, bukan pernyataan SAP-official; frasakan "sering/di banyak region", bukan aturan mutlak

> **Claim**: Mainstream maintenance SAP Business Suite 7 (termasuk SAP ECC 6.0 EhP 6–8) berakhir 31 Desember 2027; extended maintenance opsional hingga akhir 2030.
> **Number/specific**: Extended maintenance = premium **+2 poin persentase** atas basis maintenance, tersedia 2028–2030. EhP 0–5 mainstream sudah berakhir Desember 2025.
> **Source**: SAP support (Maintenance Strategy — "Innovation Commitment for SAP S/4HANA until 2040" / Business Suite 7), support.sap.com; dikuatkan Rimini Street & E3 Magazine (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: SAP berkomitmen memberikan maintenance untuk SAP S/4HANA hingga (setidaknya) 2040.
> **Number/specific**: "Innovation Commitment for SAP S/4HANA until 2040" — judul halaman resmi strategi maintenance SAP.
> **Source**: SAP support — support.sap.com/.../s4hana-business-suite7.html (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: AWS punya region di Jakarta, Indonesia: Asia Pacific (Jakarta), API name `ap-southeast-3`.
> **Number/specific**: Diluncurkan **14 Desember 2021** dengan 3 Availability Zones (diumumkan 2019).
> **Source**: AWS News Blog ("Now Open – AWS Asia Pacific (Jakarta) Region"); Data Center Dynamics (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Google Cloud punya region di Jakarta: `asia-southeast2`.
> **Number/specific**: Dibuka **2020** dengan 3 zona; region GCP pertama di Indonesia dan yang pertama dari hyperscaler AS di Jakarta.
> **Source**: Google Cloud Blog ("New Google Cloud region in Jakarta now open"); Data Center Dynamics (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Microsoft Azure kini punya region di Indonesia: **Azure Indonesia Central** — sudah General Availability.
> **Number/specific**: Diluncurkan **27 Mei 2025** dengan 3 Availability Zones; ulang tahun pertama diperingati Mei 2026. (Ini meng-update brief yang menandai statusnya belum pasti.)
> **Source**: Microsoft News Asia ("One Year of Indonesia Central", 29 Mei 2026); Azure blog (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: IBM Cloud tidak memiliki region publik komersial di Indonesia.
> **Number/specific**: Dari empat hyperscaler RISE, hanya AWS, Google Cloud, dan Azure yang punya region di Jakarta; IBM tidak (per Agustus 2026).
> **Source**: Inferensi dari daftar region publik AWS/Google/Azure/IBM (tidak ada pengumuman region IBM Indonesia) (diakses 2026-08-11)
> **Confidence**: medium — pernyataan negatif; frasakan "belum ada region IBM di Indonesia", bukan absolut

> **Claim**: UU Pelindungan Data Pribadi (UU PDP) No. 27 Tahun 2022 berlaku penuh setelah masa transisi dua tahun.
> **Number/specific**: Disahkan **17 Oktober 2022**, berlaku penuh **17 Oktober 2024**. Menyatukan >30 aturan terfragmentasi; sanksi mencakup denda administratif dan pidana.
> **Source**: Komdigi (djkpm.komdigi.go.id); JDIH (peraturan.go.id — UU No. 27 Tahun 2022) (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Pasar layanan public cloud Indonesia diperkirakan ~US$1,3 miliar pada 2025 dengan CAGR ~28,1% (2020–2025), menurut IDC.
> **Number/specific**: Angka dari IDC Cloud AP survey (dilaporkan sekunder). Estimasi lain untuk "pasar cloud" Indonesia lebih besar (mis. Mordor Intelligence ~US$2,46 miliar untuk 2025) karena cakupan berbeda (public cloud services vs total cloud).
> **Source**: IDC (Cloud AP survey, via pelaporan sekunder); pembanding: Mordor Intelligence (diakses 2026-08-11)
> **Confidence**: medium — halaman primer IDC berbayar; angka bervariasi antar-lembaga → attribute ke IDC dan/atau sajikan sebagai kisaran

> **Claim**: Ganti hyperscaler setelah go-live dimungkinkan, tetapi mahal dan kompleks; hak exit/migrasi harus dinegosiasikan di kontrak RISE awal.
> **Number/specific**: Biaya mencakup data egress saat terminasi, rekonfigurasi infrastruktur, dan kedaluwarsa kredit BTP. "SAP's standard terms do not automatically include multi-cloud provisions, migration rights ... unless explicitly negotiated."
> **Source**: SAP licensing/advisory (SAP Licensing Experts; licensingdatasolutions.com) (diakses 2026-08-11)
> **Confidence**: medium — sumber konsultan lisensi, bukan SAP-official; frasakan sebagai praktik umum + "cek kontrak"

> **Claim**: Cakupan layanan dan region SAP BTP berbeda antar-hyperscaler; tidak semua layanan BTP tersedia di setiap provider/region.
> **Number/specific**: Ketersediaan region BTP dapat dilihat di SAP Discovery Center/BTP region availability; ini salah satu kriteria pemilihan hyperscaler.
> **Source**: SAP (BTP region availability / Discovery Center) — konsep umum, verifikasi per-layanan saat penulisan (diakses 2026-08-11)
> **Confidence**: medium — benar secara umum; jangan sebut daftar layanan spesifik tanpa cek langsung

> **Claim**: Pemilihan hyperscaler pada Order Form RISE menentukan compute/storage/network, ketersediaan region BTP, opsi data residency, biaya data egress, serta mekanisme/biaya exit.
> **Number/specific**: Keputusan ini "front-loaded" — ditetapkan di kontrak awal, bukan dikonfigurasi bebas setelah tanda tangan.
> **Source**: SAP licensing/advisory (SAP Licensing Experts) (diakses 2026-08-11)
> **Confidence**: medium — attribute ke advisory; konsisten dengan AWS docs soal SAP-managed account

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **RISE with SAP** (bundel terkelola) + **S/4HANA Cloud Private Edition** | SAP pegang kontrak & kelola akun hyperscaler; SAP memikul SLA/operasi/support; single-tenant | H2 #1 (definisi) & #5 (honest) | **Migration** service + **Cloud** solution; kredensial **Best RISE & Best Cloud Partner** — closing CTA sebagai pendamping keputusan infrastruktur netral |
| **Hyperscaler** (AWS, Azure, Google Cloud, IBM Cloud) | 4 hyperscaler resmi + data center SAP; IBM full-fledged via Power Virtual Server 2025; Huawei BUKAN opsi RISE | H2 #2 | (mid-article aside, satu kalimat: pilih hyperscaler bersama partner yang paham roadmap BTP) |
| **Data residency & region Indonesia** | AWS ap-southeast-3 (2021), GCP asia-southeast2 (2020), Azure Indonesia Central GA (Mei 2025); IBM belum ada region ID; UU PDP 27/2022 penuh Okt 2024 | H2 #3 | — |
| **SAP BTP** | Cakupan layanan/region BTP berbeda per hyperscaler | H2 #4 (kriteria) | — |

Reminder: Soltius **mengimplementasikan/memigrasi/mendukung** teknologi ini — **tidak membangunnya**. Maks 2–3 self-mention Soltius. Jangan posisikan Huawei Cloud (mitra teknologi Soltius) sebagai hyperscaler RISE resmi. Anchor closing yang cocok: "Sebagai Best RISE & Best Cloud Partner, Soltius mendampingi pemilihan region & hyperscaler lintas industri di Indonesia — netral vendor."

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **AWS — General SAP Guides, "RISE with SAP on AWS Cloud" (2025/2026)** — https://docs.aws.amazon.com/sap/latest/general/rise.html — *what it backs*: SAP memikul SLA/operasi/support; SAP memiliki & mengelola akun hyperscaler; model single-tenant; akun terpisah untuk ekstensi.
2. **SAP — Maintenance Strategy, "Innovation Commitment for SAP S/4HANA until 2040" / Business Suite 7** — support.sap.com/.../maintenance-strategy/s4hana-business-suite7.html — *what it backs*: ECC/Business Suite 7 mainstream berakhir 2027, extended hingga 2030 (+2 poin), S/4HANA hingga 2040. (Catatan: server mengembalikan 403 saat WebFetch; isi dikuatkan lewat cuplikan resmi + Rimini Street/E3 Magazine.)
3. **Microsoft News Asia — "One Year of Indonesia Central" (29 Mei 2026)** — news.microsoft.com/source/asia/2026/05/29/one-year-of-indonesia-central-... — *what it backs*: Azure Indonesia Central GA 27 Mei 2025, 3 AZ.
4. **Komdigi / JDIH — UU No. 27 Tahun 2022 (PDP)** — peraturan.go.id/id/uu-no-27-tahun-2022 ; djkpm.komdigi.go.id — *what it backs*: UU PDP berlaku penuh 17 Oktober 2024.
5. **AWS News Blog / Google Cloud Blog** — region Jakarta (ap-southeast-3, Des 2021 / asia-southeast2, 2020) untuk data residency.

Priority terpakai: SAP official + AWS official (cloud vendor docs) > IDC > Komdigi/JDIH > tech press.

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Hyperscaler apa saja yang didukung RISE with SAP?
RISE with SAP dapat berjalan di empat hyperscaler resmi: Amazon Web Services (AWS), Microsoft Azure, Google Cloud, dan IBM Cloud (via IBM Power Virtual Server, tersertifikasi 2025), atau di data center milik SAP sendiri. Pelanggan memilih salah satunya di kontrak (Order Form). Perlu dicatat: Huawei Cloud bukan bagian dari daftar hyperscaler RISE resmi, meski merupakan penyedia cloud yang aktif di Indonesia.

### Apakah data SAP S/4HANA bisa disimpan di Indonesia?
Bisa. Tiga hyperscaler RISE terbesar sudah memiliki region data center di Jakarta: AWS Asia Pacific/Jakarta (ap-southeast-3, sejak Desember 2021), Google Cloud (asia-southeast2, sejak 2020), dan Microsoft Azure Indonesia Central (General Availability sejak 27 Mei 2025). Dengan memilih region Indonesia, data residency S/4HANA dapat dijaga di dalam negeri — relevan untuk kepatuhan UU PDP No. 27/2022.

### Siapa yang mengelola infrastruktur di RISE with SAP?
SAP. Dalam RISE, SAP memikul tanggung jawab atas SLA menyeluruh, operasi cloud, dan technical support, serta memiliki dan mengelola akun hyperscaler tempat sistem di-deploy. Pelanggan memilih hyperscaler, tetapi tidak menandatangani kontrak infrastruktur langsung dengan AWS/Azure/Google. Inilah yang membuat RISE disebut layanan "terkelola" (managed) — beban operasional harian berpindah ke SAP.

### Apa bedanya RISE dengan hosting SAP langsung di AWS/Azure?
Pada hosting langsung (self-managed), perusahaan (atau partner) menyewa dan mengelola sendiri akun hyperscaler, lisensi, patching, dan operasi. Pada RISE, SAP membundel infrastruktur, lisensi S/4HANA Cloud Private Edition, dan layanan terkelola dalam satu kontrak langganan, serta memegang akun hyperscaler. RISE menyederhanakan tanggung jawab dan SLA, tetapi mengurangi kontrol langsung atas infrastruktur dibanding self-managed.

### Apakah bisa pindah hyperscaler setelah go-live?
Secara teknis mungkin, tetapi berbiaya dan kompleks: ada biaya data egress saat terminasi, rekonfigurasi infrastruktur, serta potensi kedaluwarsa kredit BTP. Ketentuan standar RISE tidak otomatis memberi hak migrasi multi-cloud kecuali dinegosiasikan. Karena itu, pilihan hyperscaler dan klausul exit sebaiknya ditetapkan matang di kontrak awal, bukan dipikirkan setelah proyek berjalan.

### Apakah Huawei Cloud termasuk pilihan hyperscaler RISE?
Tidak. Hyperscaler resmi RISE with SAP saat ini adalah AWS, Microsoft Azure, Google Cloud, dan IBM Cloud, ditambah opsi data center milik SAP. Huawei Cloud tidak termasuk dalam daftar itu, meski Huawei memiliki kehadiran cloud di Indonesia dan menjadi mitra teknologi bagi sejumlah integrator. Untuk skenario RISE, fokuskan evaluasi pada keempat hyperscaler resmi tersebut.

## Data tables for the writer

### Ketersediaan region Indonesia & profil hyperscaler RISE
| Hyperscaler | Region di Indonesia | Sejak | Catatan RISE |
|---|---|---|---|
| Amazon Web Services (AWS) | Asia Pacific/Jakarta (`ap-southeast-3`), 3 AZ | Des 2021 | Perlu dinegosiasikan eksplisit bila bukan default komersial |
| Microsoft Azure | Indonesia Central, 3 AZ | Mei 2025 (GA) | Sering jadi default komersial RISE di banyak region |
| Google Cloud | Jakarta (`asia-southeast2`), 3 zona | 2020 | Perlu dinegosiasikan eksplisit |
| IBM Cloud | Belum ada region publik di Indonesia | — | Full-fledged hyperscaler RISE via IBM Power Virtual Server (2025) |
| Data center SAP | Bergantung ketersediaan SAP | — | Opsi non-hyperscaler dalam RISE |

### RISE (managed) vs hosting SAP langsung di hyperscaler (self-managed)
| Aspek | RISE with SAP | Self-managed di hyperscaler |
|---|---|---|
| Pemegang kontrak/akun hyperscaler | SAP | Pelanggan/partner |
| Tanggung jawab operasi & SLA | SAP (holistic SLA) | Pelanggan/partner |
| Lisensi | Dibundel (langganan) | Terpisah (BYOL/kontrak sendiri) |
| Kontrol infrastruktur | Lebih terbatas | Penuh |
| Kompleksitas pengelolaan | Rendah (dialihkan ke SAP) | Tinggi |
| Ganti hyperscaler | Perlu klausul kontrak + biaya migrasi | Lebih fleksibel (dikelola sendiri) |

### Kriteria memilih hyperscaler (bukan "vendor terbaik", tapi "paling sesuai")
| Kriteria | Pertimbangan |
|---|---|
| Region & data residency | Ada region Jakarta? (AWS/Azure/GCP ya; IBM belum) → relevan UU PDP |
| Ekosistem existing | Sudah punya komitmen/estate di AWS/Azure/GCP? Integrasi & skill internal |
| Cakupan SAP BTP | Layanan/region BTP yang dibutuhkan tersedia di provider itu? |
| Struktur komersial | Default komersial (sering Azure) vs perlu negosiasi (AWS/GCP) |
| Latency & kebutuhan khusus | Kebutuhan latency ultra-rendah / mandat sovereign tertentu |
| Exit & portabilitas | Klausul migrasi/egress di kontrak awal |

## Edge cases & nuance

- **"Memilih hyperscaler" ≠ "mengontrak hyperscaler".** Pelanggan menentukan preferensi, tapi akun & kontrak dipegang SAP. Jangan tulis seolah perusahaan berlangganan langsung ke AWS/Azure di skema RISE.
- **Performa harian bukan pembeda utama.** Karena SAP mengelola operasional dan semua hyperscaler bersertifikasi SAP, "hyperscaler mana yang lebih cepat" jarang jadi faktor penentu untuk mayoritas beban kerja S/4HANA. Yang lebih menentukan: region, komitmen existing, cakupan BTP, dan komersial.
- **Lock-in yang nyata ada di RISE/SAP, bukan di hyperscaler.** Karena SAP yang membundel, perpindahan yang mahal adalah keluar dari RISE, bukan sekadar antar-hyperscaler.
- **Azure "default" itu pola komersial, bukan aturan teknis.** Frasakan hati-hati ("di banyak region/negosiasi"), jangan dinyatakan sebagai kebijakan SAP yang kaku.
- **IBM = hyperscaler, tapi tanpa region Indonesia.** Berguna bagi pengguna IBM Power existing, tapi tidak memberi data residency lokal seperti AWS/Azure/GCP.
- **Data residency ≠ larangan transfer.** UU PDP mengatur pelindungan & syarat transfer data, bukan melarang cloud. Menyimpan di region Jakarta menyederhanakan kepatuhan, bukan satu-satunya jalan.

## Flags (open factual risk)

- ⚠️ **Angka pasar IDC (~US$1,3B, CAGR 28,1%)**: halaman primer IDC berbayar; estimasi antar-lembaga berbeda (Mordor Intelligence menaksir ~US$2,46B untuk 2025 dengan cakupan berbeda) → **rekomendasi**: attribute eksplisit ke "IDC" dan/atau sajikan sebagai kisaran; jangan campur dengan CAGR lembaga lain.
- ⚠️ **"Azure sebagai default komersial RISE"**: berasal dari konsultan lisensi, bukan pernyataan SAP-official → **rekomendasi**: frasakan "sering menjadi default di banyak region" / "AWS & GCP umumnya perlu dinegosiasikan", hindari klaim mutlak.
- ⚠️ **Ganti hyperscaler pasca go-live & biaya egress/BTP**: sumber advisory/konsultan, bukan dokumen SAP publik → **rekomendasi**: sajikan sebagai praktik umum ("umumnya berbiaya dan perlu klausul kontrak"), sarankan pembaca cek kontrak RISE mereka.
- ⚠️ **Detail sertifikasi IBM (Power Virtual Server, "full-fledged", 2025)**: kuat dari SAPinsider/IBM tapi bukan halaman SAP-official yang saya fetch langsung → **rekomendasi**: attribute ke IBM/SAPinsider; aman menulis "IBM kini termasuk hyperscaler RISE".
- ⚠️ **"IBM belum punya region di Indonesia"**: pernyataan negatif berbasis ketiadaan pengumuman → **rekomendasi**: frasakan "belum ada region IBM Cloud di Indonesia (per 2026)".
- ⚠️ **SAP maintenance page 403 saat WebFetch**: tanggal 2027/2030/2040 dikuatkan oleh cuplikan halaman resmi + Rimini Street + E3 Magazine, jadi confidence tetap high, tetapi writer sebaiknya menautkan ke halaman SAP support langsung dan tidak mengklaim tanggal di luar 2027/2030/2040.

## Definition snippet draft (48 words)

> **Hyperscaler dalam RISE with SAP** adalah penyedia infrastruktur cloud publik — AWS, Microsoft Azure, Google Cloud, atau IBM Cloud — tempat SAP menjalankan dan mengelola SAP S/4HANA Cloud Private Edition milik pelanggan. Dalam skema ini SAP yang memegang akun hyperscaler dan memikul SLA, operasi, serta dukungan teknis; pelanggan cukup memilih penyedianya.
