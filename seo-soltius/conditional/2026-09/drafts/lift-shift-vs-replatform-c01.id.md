---
title: "Lift & Shift vs Re-Platform: Strategi Migrasi SAP ke IaaS"
meta_title: "Lift & Shift vs Re-Platform untuk Migrasi SAP"
meta_description: "Lift and shift atau re-platform untuk migrasi SAP ke IaaS? Bandingkan perubahan sistem, teknik, risiko cutover, dan kapan tiap strategi masuk akal."
slug: "lift-shift-vs-re-platform-migrasi-sap-iaas"
language: "id"
primary_keyword: "lift and shift sap"
secondary_keywords: ["rehost", "re-platform", "strategi migrasi sap ke iaas", "7 Rs migrasi cloud", "hyperscaler", "SAP S/4HANA di cloud", "SUM DMO (Database Migration Option)", "brownfield vs greenfield", "SAP HANA", "SAP ECC end of maintenance 2027", "homogeneous system copy", "heterogeneous migration"]
internal_links:
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/blog/read/sap-in-the-cloud-why-iaas-aws-azure-gcp-is-the-strategic-choice-for-enterprise-indonesia"
    anchor: "SAP di AWS, Azure, atau GCP"
external_citations:
  - url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html"
    context: "AWS Prescriptive Guidance: definisi rehost (lift and shift, tanpa perubahan aplikasi) dan replatform (lift, tinker, and shift, optimasi terbatas) dalam kerangka 7 Rs"
  - url: "https://community.sap.com/t5/technology-blog-posts-by-sap/dmove2s4-your-one-step-approach-into-the-cloud/ba-p/13872751"
    context: "SAP Community: DMOVE2S4 sebagai pendekatan satu langkah yang menggabungkan migrasi database, update sistem, dan konversi ke S/4HANA dalam satu prosedur SUM"
brief_id: "lift-shift-vs-replatform-c01"
target_word_count: 900
publish_month: "2026-09"
word_count: 893
---

# Lift & Shift vs Re-Platform: Strategi Migrasi SAP ke IaaS

Keputusan memindahkan SAP ke *hyperscaler* sudah diambil; rapat berikutnya justru mandek pada satu pertanyaan teknis. Pindahkan sistem apa adanya, atau sekalian dioptimasi saat pindah? Perdebatan *lift and shift* versus re-platform inilah yang menentukan jadwal, anggaran, dan risiko *cutover* Anda. Tulisan ini membedah bedanya untuk beban kerja SAP, kapan tiap strategi masuk akal, dan bagaimana keduanya menempati [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud) secara utuh.

> **Ringkasnya:** Lift & shift (rehost) dan re-platform adalah dua strategi memindahkan sistem SAP ke infrastruktur cloud (IaaS). Lift & shift memindahkan sistem apa adanya — tanpa mengubah aplikasi, sistem operasi, atau database — sehingga cepat dan berisiko rendah. Re-platform memindahkannya sambil melakukan optimasi terarah, misalnya migrasi database ke SAP HANA, sehingga lebih lama tetapi lebih optimal.

## Lift & Shift vs Re-Platform: Apa Bedanya untuk Migrasi SAP?

Perbedaannya terletak pada seberapa banyak yang Anda sentuh saat memindahkan. Kerangka **7 Rs** dari *AWS Prescriptive Guidance* menempatkan rehost dan re-platform sebagai dua dari tujuh strategi migrasi. Keduanya memindahkan sistem ke cloud, tetapi rehost umumnya lewat *homogeneous system copy* tanpa menyentuh platform, sedangkan re-platform mengganti komponen tertentu, lazimnya database menuju *heterogeneous migration* ke SAP HANA.

| Dimensi | Lift & Shift (Rehost) | Re-Platform (Lift, Tinker, Shift) |
|---|---|---|
| Perubahan pada sistem | Tidak ada; aplikasi, OS, dan database dipindah apa adanya | Optimasi terarah, misalnya database ke SAP HANA, upgrade OS, penyesuaian *sizing* |
| Teknik migrasi | *Homogeneous system copy* (DB/OS sama) | *Heterogeneous migration* (mis. AnyDB ke HANA), sering via SUM DMO |
| Optimasi *cloud-native* | Tidak dilakukan saat pindah | Sebagian dimanfaatkan (layanan terkelola, HA, *sizing*) |
| Kecepatan relatif | Lebih cepat, cakupan perubahan sempit | Lebih lama, ada langkah optimasi tambahan |
| Risiko *cutover* | Lebih rendah | Lebih tinggi, lebih banyak variabel diubah sekaligus |
| Biaya operasional lanjutan | Berpotensi belum optimal | Berpotensi lebih efisien setelah optimasi |
| Cocok untuk | Tenggat ketat, keluar *data center* cepat, tim terbatas | Sekaligus ke HANA, menekan OpEx, menghindari migrasi ganda |

Menurut [AWS Prescriptive Guidance](https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html), rehost memindahkan aplikasi "tanpa perubahan apa pun" dan menskalakannya tanpa optimasi cloud, sementara replatform memasukkan "sebagian optimasi" seperti memindahkan database ke layanan terkelola. Kolom kecepatan dan biaya di atas bersifat relatif, mengikuti langsung dari definisi itu, bukan janji durasi numerik.

## Kapan Sebaiknya Memilih Lift & Shift, dan Kapan Re-Platform?

Pilih lift and shift bila tujuan utamanya keluar dari *data center* secepatnya dengan dampak operasional minimal, kapasitas tim terbatas, atau Anda memilih pendekatan dua langkah. Pilih re-platform bila ingin sekaligus migrasi database ke SAP HANA, menekan biaya operasional lanjutan, atau menghindari migrasi ganda di kemudian hari.

Pemicu tersering datang dari kalender, bukan teknologi. *Mainstream maintenance* SAP ECC 6.0 berakhir **31 Desember 2027**, dengan *extended maintenance* berbayar sampai **31 Desember 2030**. Tenggat itu membuat banyak perusahaan memilih rehost lebih dulu untuk keluar dari infrastruktur lama, lalu menjadwalkan konversi menyusul. Konsekuensinya adalah risiko "migrasi ganda": dua proyek besar beruntun, bukan satu.

Re-platform menukar tempo untuk hasil. Dengan menggabungkan pemindahan dan optimasi dalam satu proyek, Anda menghindari pekerjaan ulang, tetapi menuntut perencanaan lebih matang dan jendela *cutover* yang lebih rumit. Tidak ada jawaban universal; yang menentukan adalah seberapa dekat tenggat Anda dan siapa yang akan mengelola sistem setelah pindah.

## Lift & Shift Bukan Brownfield: Dua Sumbu Keputusan Migrasi SAP

Ini miskonsepsi yang paling sering merusak perencanaan: menyamakan lift and shift dengan *brownfield*. Keduanya berada di sumbu berbeda. Sumbu infrastruktur menentukan *bagaimana* sistem dipindah (rehost atau re-platform). Sumbu konversi aplikasi menentukan *apakah* sistem menjadi SAP S/4HANA (*brownfield*, *greenfield*, atau *selective data transition*). Satu proyek memilih di kedua sumbu secara terpisah.

Rehost yang mempertahankan SAP ECC itu valid; re-platform yang digabung konversi ke S/4HANA juga valid. Secara teknis keduanya bisa bertemu dalam satu prosedur. SUM DMO (*Database Migration Option*) menyediakan pendekatan seperti *DMOVE2S4*, yang menurut [SAP Community](https://community.sap.com/t5/technology-blog-posts-by-sap/dmove2s4-your-one-step-approach-into-the-cloud/ba-p/13872751) menggabungkan migrasi database, update sistem, dan konversi ke S/4HANA dalam satu langkah, sedangkan varian *DMO with System Move* sekaligus memindahkan sistem ke *host* atau hyperscaler baru. Detail per-rilis SUM berubah, jadi perlakukan ini pada level konsep.

Pilihan strategi juga mengikat pilihan penyedia. Re-platform ke SAP HANA menuntut *instance* tersertifikasi, dan ketiga hyperscaler menjalankannya dengan konfigurasi berbeda. Di sinilah keputusan menyambung ke perbandingan [SAP di AWS, Azure, atau GCP](https://www.soltius.co.id/blog/read/sap-in-the-cloud-why-iaas-aws-azure-gcp-is-the-strategic-choice-for-enterprise-indonesia).

## FAQ (Pertanyaan yang Sering Diajukan)

### Apakah lift and shift sama dengan brownfield?

Tidak. Keduanya sumbu keputusan berbeda: lift and shift (rehost) adalah strategi infrastruktur yang memindahkan sistem apa adanya ke IaaS, sedangkan brownfield adalah pendekatan konversi aplikasi ke SAP S/4HANA lewat SUM DMO. Satu proyek memilih di kedua sumbu secara terpisah.

### Apakah SAP bisa langsung ke S/4HANA lewat lift and shift?

Tidak. Rehost mempertahankan versi dan database yang ada, jadi sistem tetap ECC setelah pindah. Menuju S/4HANA memerlukan konversi (brownfield) atau implementasi baru (greenfield). Pendekatan dua langkah lazim: rehost dulu ke cloud, konversi menyusul sebelum tenggat ECC 31 Desember 2027.

### Berapa lama migrasi lift and shift dibanding re-platform?

Rehost lebih cepat karena tanpa perubahan aplikasi; re-platform lebih lama karena menambah optimasi seperti migrasi database ke SAP HANA. Estimasi durasi bergantung pada ukuran dan kompleksitas tiap beban kerja, sehingga sebaiknya diverifikasi per proyek, bukan digeneralisasi dari satu angka.

## Kesimpulan

Pilihan antara lift and shift dan re-platform bukan soal cepat lawan modern, melainkan menimbang tenggat, kapasitas tim, dan biaya jangka panjang di dua sumbu keputusan yang terpisah. Sebagai SAP Platinum Partner melalui United VARs dan berpengalaman sejak 1998, Soltius mengimplementasikan serta mendampingi migrasi SAP ke AWS, Microsoft Azure, atau Google Cloud sesuai profil risiko dan target biaya Anda.

Untuk memetakan strategi rehost atau re-platform yang tepat bagi SAP on AWS/Azure/GCP di perusahaan Anda, kunjungi soltius.co.id.
