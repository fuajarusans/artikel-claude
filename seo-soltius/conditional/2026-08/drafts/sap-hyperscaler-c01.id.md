---
title: "SAP di AWS vs Azure vs GCP: Perbandingan untuk Perusahaan Indonesia"
meta_title: "SAP di AWS vs Azure vs GCP: Perbandingan untuk Indonesia"
meta_description: "SAP di AWS, Azure, dan GCP: bandingkan status sertifikasi SAP, region Indonesia (Jakarta), dan cakupan layanan ketiga hyperscaler sebelum Anda memutuskan."
slug: "sap-di-aws-azure-gcp-perbandingan-indonesia"
language: "id"
primary_keyword: "sap di aws azure gcp"
secondary_keywords: ["hyperscaler untuk sap", "instance tersertifikasi SAP", "SAP Certified and Supported SAP HANA Hardware Directory", "region cloud Indonesia", "Asia Pacific (Jakarta) ap-southeast-3", "Indonesia Central", "Jakarta asia-southeast2", "SAP HANA", "availability zone", "machine type", "memory-optimized", "RISE with SAP"]
internal_links:
  - url: "https://www.soltius.co.id/id/solutions-by-products/cloud"
    anchor: "solusi cloud"
  - url: "https://www.soltius.co.id/blog/read/sap-in-the-cloud-why-iaas-aws-azure-gcp-is-the-strategic-choice-for-enterprise-indonesia"
    anchor: "mengapa enterprise memilih IaaS untuk SAP"
external_citations:
  - url: "https://docs.aws.amazon.com/sap/latest/general/ec2-instance-types-sap.html"
    context: "AWS Docs 'Amazon EC2 instance types for SAP on AWS': keluarga instance tertentu (X1, X2idn, X2iedn, High Memory) mungkin tidak tersedia di semua availability zone dalam satu region; ketersediaan wajib dikonfirmasi saat perencanaan"
  - url: "https://docs.cloud.google.com/sap/docs/certifications-sap-hana"
    context: "Google Cloud Docs 'Certifications for SAP HANA on Google Cloud': sebagian machine type tidak tersedia di semua region Google Cloud"
brief_id: "sap-hyperscaler-c01"
target_word_count: 900
publish_month: "2026-08"
word_count: 976
---

# SAP di AWS vs Azure vs GCP: Perbandingan untuk Perusahaan Indonesia

Rencana besarnya sudah disepakati: lanskap SAP perusahaan Anda pindah ke [solusi cloud](https://www.soltius.co.id/id/solutions-by-products/cloud). Rapat berikutnya justru macet di pertanyaan yang terdengar lebih sederhana: Amazon Web Services (AWS), Microsoft Azure, atau Google Cloud? Tiga presentasi vendor, tiga klaim paling cocok, nyaris tanpa angka yang bisa dicek tim Anda. Perbandingan ini memakai dimensi yang bisa Anda verifikasi sendiri.

> **Ringkasnya:** hyperscaler adalah penyedia cloud publik berskala global; untuk beban kerja SAP, tiga yang paling umum dipakai adalah Amazon Web Services (AWS), Microsoft Azure, dan Google Cloud. Ketiganya menjalankan SAP pada konfigurasi yang tersertifikasi resmi, dan ketiganya sudah punya region di Indonesia. Pembedanya bukan "bisa atau tidak", melainkan konfigurasi tersertifikasi mana yang tersedia di region yang Anda tuju.

## Apakah AWS, Azure, dan GCP Sama-Sama Tersertifikasi untuk SAP?

Ya, tetapi kalimat itu menyesatkan begitu Anda masuk ke tahap *sizing* (penghitungan kebutuhan kapasitas). Yang tersertifikasi bukan AWS, Microsoft Azure, atau Google Cloud sebagai platform, melainkan tipe instance tertentu di dalamnya. Daftarnya dipegang SAP lewat SAP Certified and Supported SAP HANA Hardware Directory, dan ketiga vendor menunjuk ke direktori yang sama.

Setiap hyperscaler menguji dan mensertifikasi konfigurasi bersama SAP, lalu merujuk hasilnya lewat SAP Note per platform: 1656099 untuk AWS, 1928533 untuk Microsoft Azure. Isi Note tersebut hanya terbuka lewat SAP Portal.

Satu konsekuensinya sering terlewat. Tipe instance yang tidak tersertifikasi tetap boleh dipakai, tetapi terbatas pada beban non-produksi seperti *development* dan *testing*; dokumentasi AWS merujuk SAP Note 2271345 untuk aturan tersebut. Memakainya untuk sistem produksi berarti keluar dari batas dukungan.

## Perbandingan AWS, Azure, dan GCP untuk SAP: Region Indonesia dan Sertifikasi

Jarak pembukaan region ketiganya membentang hampir lima tahun, dari Juni 2020 sampai April 2025, dan masing-masing berisi tiga *availability zone* (zona ketersediaan). Karena syarat dasar itu kini sama-sama terpenuhi, pembeda yang tersisa bergeser ke keluarga instance tersertifikasi yang ditawarkan di tiap region.

| Dimensi | AWS | Microsoft Azure | Google Cloud |
|---|---|---|---|
| Region di Indonesia | Asia Pacific (Jakarta), `ap-southeast-3` | Indonesia Central | Jakarta, `asia-southeast2` |
| Beroperasi sejak | Desember 2021 | April 2025 | Juni 2020 |
| Availability zone di region tsb. | 3 | 3 | 3 |
| Contoh keluarga instance tersertifikasi SAP HANA | R-series (r5, r6i, r7i, r8i), X-series (x1, x2idn, x2iedn, x8i), U-series *High Memory* | M-series *memory-optimized* (termasuk Mv2, Mv3); E-series (Edsv4/Edsv5) untuk memori lebih kecil | M-series (M1–M4), X4 *bare metal*, N1/N2 *high-mem*, C3/C4 |
| Sumber daftar sertifikasi | SAP HANA Hardware Directory + SAP Note 1656099 | SAP HANA Hardware Directory + SAP Note 1928533 | SAP HANA Hardware Directory + dokumentasi Google Cloud |

Baris keluarga instance itu contoh, bukan katalog lengkap; daftarnya berubah cepat.

Bacalah tabel itu sebagai peta kelayakan, bukan papan skor. Umur region tidak menentukan kemampuan platform: Indonesia Central yang paling muda tetap menawarkan keluarga VM *memory-optimized* tersertifikasi. Yang berbeda ada di dalam region, yaitu katalog yang benar-benar tersedia di sana, dan di situlah asumsi paling sering runtuh.

## Apakah Region Jakarta Otomatis Berarti SAP Bisa Berjalan di Sana?

Tidak otomatis. "Region tersedia" dan "konfigurasi tersertifikasi tersedia di region itu" adalah dua hal berbeda, dan keduanya jarang dicek terpisah. Katalog instance bervariasi antar-region, bahkan antar-*availability zone* di dalam satu region. Dua vendor menuliskannya hitam di atas putih pada dokumentasi resmi mereka.

Dokumentasi [AWS untuk SAP](https://docs.aws.amazon.com/sap/latest/general/ec2-instance-types-sap.html) menyebut keluarga instance tertentu, termasuk X1, X2idn, X2iedn, dan *High Memory*, mungkin tidak tersedia di seluruh availability zone dalam satu region, dan mewajibkan konfirmasi ketersediaannya di zona tujuan saat perencanaan. [Google Cloud](https://docs.cloud.google.com/sap/docs/certifications-sap-hana) menyatakan sebagian *machine type* tidak tersedia di semua region miliknya.

Tiga aturan praktis menerjemahkannya menjadi langkah kerja:

- **Tetapkan konfigurasi dulu, baru region.** Mulai dari hasil sizing SAP, lalu periksa ketersediaan instance-nya di Jakarta.
- **Cek di level availability zone, bukan region.** Arsitektur *high availability* menuntut instance yang sama tersedia di lebih dari satu zona; AWS menyediakan perintah `describe-instance-type-offerings` untuk memeriksanya.
- **Siapkan rencana cadangan.** Bila konfigurasi yang dibutuhkan belum ada di region Indonesia, opsinya region terdekat di Asia Tenggara dengan konsekuensi residensi data, atau konfigurasi berbeda.

## Lalu, Kriteria Apa yang Menentukan Pilihan?

Ketiganya lolos syarat dasar, sehingga keputusan jarang ditentukan oleh merek hyperscaler-nya, melainkan oleh tiga hal di luar itu: ketersediaan konfigurasi tersertifikasi di region tujuan, ekosistem cloud yang sudah berjalan di perusahaan, dan model operasi yang dipilih. Dua perusahaan bisa memutuskan berbeda dan keduanya sama-sama benar.

- **Ketersediaan konfigurasi di region tujuan.** Hasil pengecekan tadi adalah penyaring pertama, bukan pertimbangan terakhir.
- **Ekosistem dan komitmen yang sudah berjalan.** Kontrak, keahlian tim, dan *tooling* yang sudah dipakai umumnya lebih menentukan biaya perpindahan daripada selisih fitur. Di lapangan, faktor inilah yang paling sering menutup rapat.
- **Model operasi.** Pada jalur RISE with SAP, infrastruktur berjalan di hyperscaler tetapi dikontrakkan lewat SAP, sehingga pertanyaan pemilihan platform tidak hilang, hanya berpindah mekanisme.

Pertanyaan yang lebih mendasar, yakni mengapa SAP dijalankan di atas infrastruktur sewa, dibahas terpisah pada ulasan [mengapa enterprise memilih IaaS untuk SAP](https://www.soltius.co.id/blog/read/sap-in-the-cloud-why-iaas-aws-azure-gcp-is-the-strategic-choice-for-enterprise-indonesia).

## FAQ (Pertanyaan yang Sering Diajukan)

### Hyperscaler mana yang terbaik untuk SAP?

Tidak ada yang unggul secara universal. AWS, Microsoft Azure, dan Google Cloud sama-sama memiliki konfigurasi tersertifikasi SAP HANA dan sama-sama mengoperasikan region di Indonesia dengan tiga availability zone. Yang menentukan bukan mereknya, melainkan apakah konfigurasi tersertifikasi yang Anda butuhkan tersedia di region tujuan.

### Apakah semua tipe server di AWS, Azure, atau Google Cloud bisa dipakai untuk SAP HANA produksi?

Tidak. Hanya tipe yang terdaftar di SAP Certified and Supported SAP HANA Hardware Directory yang boleh menjalankan SAP HANA produksi. Tipe non-certified tetap boleh dipakai, tetapi terbatas pada beban non-produksi seperti development dan testing. Dokumentasi AWS merujuk SAP Note 2271345 untuk aturan ini.

## Kesimpulan

Pertanyaan "hyperscaler mana yang terbaik untuk SAP" hampir selalu buntu karena salah sasaran. Yang menentukan adalah pertanyaan yang jawabannya bisa dicek, bukan diperdebatkan: konfigurasi tersertifikasi yang perusahaan Anda butuhkan tersedia di region mana, dan di berapa availability zone. Sebagai SAP Platinum Partner melalui United VARs, Soltius mengimplementasikan dan mendampingi SAP di atas platform hyperscaler pihak ketiga, dari pemilihan region dan konfigurasi hingga dukungan pasca *go-live*.

Untuk membahas pemilihan region dan konfigurasi SAP on AWS/Azure/GCP bagi lanskap perusahaan Anda, kunjungi soltius.co.id.
