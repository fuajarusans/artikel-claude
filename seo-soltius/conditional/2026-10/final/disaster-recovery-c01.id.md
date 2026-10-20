---
title: "Disaster Recovery: Pengertian, RPO & RTO, dan Pentingnya bagi Bisnis"
meta_title: "Disaster Recovery: Pengertian, RPO, RTO & Manfaat"
meta_description: "Disaster recovery (DR) memulihkan data dan sistem setelah gangguan. Pahami beda RPO dan RTO, strategi backup hingga multi-site, serta manfaatnya bagi bisnis."
slug: "disaster-recovery"
language: "id"
primary_keyword: "disaster recovery"
secondary_keywords: ["rpo dan rto", "recovery point objective", "recovery time objective", "disaster recovery plan", "business continuity plan", "backup dan replikasi", "failover", "disaster recovery center", "SAP HANA System Replication"]
internal_links:
  - url: "https://www.soltius.co.id/id/solutions-by-products/cloud"
    anchor: "solusi SAP di cloud"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
external_citations:
  - url: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/disaster-recovery-dr-objectives.html"
    context: "Definisi RPO dan RTO sebagai sasaran yang ditetapkan organisasi, empat strategi DR (backup & restore, pilot light, warm standby, multi-site active/active) dengan rentang tipikal, dan prinsip trade-off biaya (hindari strategi lebih ketat dari kebutuhan)"
  - url: "https://ojk.go.id/id/regulasi/Pages/Penyelenggaraan-Teknologi-Informasi-oleh-Bank-Umum.aspx"
    context: "POJK No. 11/POJK.03/2022 Pasal 35: kewajiban bank menempatkan Pusat Data dan Pusat Pemulihan Bencana di wilayah Indonesia; penempatan di luar negeri hanya dengan izin OJK"
brief_id: "disaster-recovery-c01"
target_word_count: 1100
publish_month: "2026-10"
dateModified: "2026-10-08"
word_count: 1192
---

# Disaster Recovery: Pengertian, RPO & RTO, dan Pentingnya bagi Bisnis

Sebuah serangan ransomware mengunci server produksi pada jam sibuk, atau banjir memutus listrik data center selama dua hari. Pertanyaan pertama di ruang krisis biasanya bukan "kapan sistem pulih", melainkan "berapa jam data yang hilang, dan berapa lama kita boleh berhenti". Banyak perusahaan sudah punya backup, tetapi belum punya rencana disaster recovery yang terukur. Artikel ini memisahkan DR dari backup, menjelaskan cara menetapkan RPO dan RTO lewat contoh berhitung, memetakan tangga strategi pemulihan, serta alasan bisnisnya.

> **Secara singkat:** Disaster recovery (DR) adalah kumpulan kebijakan, prosedur, dan teknologi untuk memulihkan data dan sistem TI secepat mungkin setelah gangguan besar, seperti serangan siber, kegagalan perangkat keras, atau bencana alam. Keberhasilannya diukur lewat dua sasaran: seberapa banyak data boleh hilang (RPO) dan seberapa cepat sistem harus pulih (RTO).

## Disaster recovery, backup, atau business continuity: apa bedanya?

Ketiga istilah ini kerap dipertukarkan, padahal letaknya berlapis. Backup adalah salinan data, satu komponen tunggal. Disaster recovery memulihkan data sekaligus sistem TI setelah gangguan, dengan memadukan backup, replikasi, dan *failover* (pengalihan otomatis ke sistem cadangan). Business continuity plan (BCP) adalah payung terluas yang menjaga seluruh operasi bisnis tetap berjalan.

- **Backup** menjawab: apakah salinan datanya ada?
- **Disaster recovery (DR)** menjawab: seberapa cepat data dan sistem TI bisa kembali daring?
- **Business continuity plan (BCP)** menjawab: apakah bisnis, termasuk orang, proses, dan lokasi alternatif, tetap jalan?

DR adalah lapisan TI di dalam BCP, dan backup hanyalah salah satu bahan bakunya. DR juga berbeda dari *high availability* (HA): DR menangani peristiwa besar seperti hilangnya satu data center, sedangkan HA menjaga ketersediaan saat satu komponen gagal di lokasi yang sama.

## Bagaimana cara menentukan RPO dan RTO?

Tetapkan RPO dan RTO per sistem berdasarkan dampak bisnisnya, bukan menyamaratakan satu angka. Keduanya ditetapkan organisasi, bukan vendor, dan bersifat independen: sebuah sistem bisa menuntut RTO panjang tetapi RPO pendek, atau sebaliknya. Semakin ketat targetnya, mendekati nol, semakin tinggi biaya infrastrukturnya.

Recovery Point Objective (RPO) dan Recovery Time Objective (RTO) mengukur dua hal berbeda, seperti dirangkum [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/disaster-recovery-dr-objectives.html):

| Metrik | Mengukur | Satuan | Konsekuensi bila diperketat |
|---|---|---|---|
| **RPO** (Recovery Point Objective) | Toleransi kehilangan data | Waktu (mis. 1 jam) | Frekuensi backup/replikasi naik; biaya ikut naik |
| **RTO** (Recovery Time Objective) | Toleransi lama sistem berhenti | Waktu (mis. 4 jam) | Butuh infrastruktur siaga dan otomasi; biaya naik |

Contohnya mudah dihitung. Jika RTO 4 jam dan gangguan terjadi pukul 10.30, sistem wajib daring kembali paling lambat pukul 14.30. Jika RPO 1 jam dengan backup terakhir pukul 10.00, lalu gangguan menyerang pukul 10.59, data yang hilang paling banyak 59 menit, masih dalam ambang RPO. Dari sepasang angka itulah frekuensi backup dan arsitektur ditentukan.

## Strategi disaster recovery: dari backup sampai multi-site

Strategi DR bertingkat sesuai target RPO/RTO dan anggaran. Menurut AWS Well-Architected Framework, ada empat pendekatan dari biaya terendah ke tertinggi: backup & restore, pilot light, warm standby, dan multi-site active/active. Semakin cepat target pemulihan, semakin mahal; yang tepat adalah yang paling pas dengan dampak bisnis, bukan yang paling kompleks.

| Strategi | Biaya/kompleksitas | RPO tipikal | RTO tipikal | Kapan dipakai |
|---|---|---|---|---|
| **Backup & Restore** | Terendah | Jam | Jam | Toleransi downtime longgar; lindung dari korupsi data |
| **Pilot Light** | Rendah–sedang | Menit | Puluhan menit | Data inti direplikasi; sisanya menyala saat *failover* |
| **Warm Standby** | Sedang–tinggi | Detik | Menit | Salinan fungsional kapasitas kecil selalu aktif |
| **Multi-Site Active/Active** | Tertinggi | Mendekati nol | Mendekati nol | Bisnis kritis 24/7 yang sanggup biaya tertinggi |

Angka pada tabel adalah rentang tipikal menurut AWS, bukan jaminan kontraktual. AWS juga mengingatkan agar tidak menerapkan strategi yang lebih ketat dari kebutuhan, sebab itu hanya menambah biaya tanpa manfaat sepadan.

Keputusan DR melekat pada keputusan di mana SAP dihosting. Saat merancang [solusi SAP di cloud](https://www.soltius.co.id/id/solutions-by-products/cloud), region pemulihan dan mode replikasi ikut ditentukan. SAP HANA System Replication punya mode sinkron, yang menjaga sistem standby identik dan menghasilkan RPO nol untuk *high availability* satu region, serta mode asinkron yang menyisakan RPO di atas nol untuk DR lintas region.

Dua catatan jujur kerap terlewat. Pertama, RPO nol itu kapabilitas HA jarak pendek, bukan DR lintas lokasi, dan pengambilalihan (*takeover*) ke standby pada SAP HANA tetap manual. Kedua, replikasi bukan backup: jika data rusak, korupsinya ikut tersalin, sehingga backup yang teruji tetap wajib. Maka target RPO/RTO sebaiknya dikunci sejak tahap [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud), bukan setelah sistem berjalan.

## Mengapa disaster recovery penting bagi bisnis?

Tanpa DR yang teruji, satu gangguan besar bisa menghentikan penjualan, menggerus kepercayaan pelanggan, dan pada sektor yang diatur, memicu pelanggaran kepatuhan. Dampaknya paling tajam pada bisnis yang beroperasi 24/7 seperti e-commerce dan layanan keuangan, tempat setiap jam henti berarti transaksi yang hilang dan nama baik yang tergerus.

Besarnya kerugian downtime sulit dipukul rata dan lebih jujur dinilai dari dampaknya pada pendapatan serta kepercayaan, bukan satu angka universal. Yang jelas, biaya menyiapkan DR hampir selalu lebih kecil daripada biaya berhenti total tanpa rencana.

Di perbankan Indonesia, ketahanan ini bahkan diwajibkan regulasi. [POJK No. 11/POJK.03/2022](https://ojk.go.id/id/regulasi/Pages/Penyelenggaraan-Teknologi-Informasi-oleh-Bank-Umum.aspx) tentang Penyelenggaraan Teknologi Informasi oleh Bank Umum (berlaku 7 Juli 2022), pada Pasal 35, mewajibkan bank menempatkan Pusat Data dan Pusat Pemulihan Bencana (Disaster Recovery Center/DRC) di wilayah Indonesia; penempatan di luar negeri hanya dengan izin OJK. Regulasi juga mendorong pengujian rencana pemulihan secara berkala. Di lapangan, banyak perusahaan punya backup tetapi belum pernah menguji pemulihannya, sehingga RTO di atas kertas berbeda jauh dari waktu pulih sebenarnya.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa bedanya disaster recovery dan backup?

Backup adalah salinan data, satu komponen tunggal. Disaster recovery adalah rencana memulihkan data sekaligus sistem TI setelah gangguan, yang memakai backup, replikasi, dan *failover*. Backup saja jarang cukup untuk RTO singkat, karena pemulihan cepat menuntut infrastruktur siaga, bukan sekadar berkas cadangan.

### Apa bedanya RPO dan RTO?

RPO mengukur berapa banyak data yang boleh hilang dalam satuan waktu, sedangkan RTO mengukur berapa lama sistem boleh berhenti. Keduanya independen dan ditetapkan organisasi, bukan vendor. Contohnya, RPO 1 jam berarti backup minimal tiap jam, sementara RTO 4 jam berarti sistem wajib daring kembali dalam 4 jam.

### Apa saja strategi disaster recovery?

Menurut AWS Well-Architected, umumnya ada empat tingkat: backup & restore (termurah, pemulihan dalam hitungan jam), pilot light, warm standby, dan multi-site active/active (termahal, RPO/RTO mendekati nol). Makin cepat target pemulihan, makin tinggi biayanya, jadi pilih sesuai dampak bisnis, bukan sekadar tren.

### Apa itu Disaster Recovery Center (DRC)?

DRC adalah lokasi cadangan, fisik maupun cloud, berisi salinan sistem dan data untuk mengambil alih saat situs utama gagal. Di Indonesia, POJK No. 11/POJK.03/2022 mewajibkan bank menempatkan Pusat Data dan DRC di wilayah Indonesia, kecuali memperoleh izin OJK untuk penempatan di luar negeri.

### Apakah pindah ke cloud otomatis membuat sistem tahan bencana?

Tidak otomatis. Cloud menyediakan *building block* seperti multi-region, replikasi, dan *failover*, tetapi RPO/RTO tetap hasil desain. SAP HANA System Replication mode sinkron dapat mencapai RPO nol, sedangkan replikasi asinkron lintas region menyisakan RPO di atas nol, dan *takeover* pun masih dilakukan manual.

## Kesimpulan

Disaster recovery bukan biaya, melainkan asuransi operasional yang besarnya diukur lewat RPO dan RTO, lalu diwujudkan lewat strategi dan arsitektur hosting yang tepat. Sebagai SAP Platinum Partner melalui United VARs dan diakui sebagai Best Cloud & Best RISE Partner, Soltius merancang, mengimplementasikan, dan mendukung SAP di atas platform cloud seperti AWS, Google Cloud, dan Huawei Cloud, termasuk arsitektur HA/DR sesuai target RPO/RTO, bukan membuat perangkat lunaknya.

Untuk menilai target RPO/RTO dan merancang arsitektur disaster recovery SAP di perusahaan Anda, jelajahi solusi Cloud di soltius.co.id.
