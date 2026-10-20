---
title: "SAP Clean Core: Menyusun Business Case dan ROI untuk Meyakinkan Direksi"
meta_title: "SAP Clean Core: Business Case & ROI untuk Direksi"
meta_description: "Cara menyusun business case SAP Clean Core: biaya inaksi technical debt, matematika TCO, penghindaran biaya upgrade ECC 2027, dan kerangka proposal direksi."
slug: "sap-clean-core-business-case-roi-direksi"
language: "id"
primary_keyword: "SAP Clean Core"
secondary_keywords:
  - "business case clean core"
  - "ROI clean core"
  - "TCO SAP"
  - "technical debt SAP"
  - "biaya inaksi cost of inaction"
  - "biaya upgrade S/4HANA"
  - "custom code Z-code"
  - "clean core extensibility level A-D"
  - "SAP BTP"
  - "ABAP Cloud"
  - "SAP ECC end of maintenance 2027"
internal_links:
  - url: "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide"
    anchor: "SAP Clean Core"
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "business intelligence"
external_citations:
  - url: "https://support.sap.com/en/offerings-programs/strategy.html"
    context: "Mainstream maintenance SAP Business Suite 7 sampai akhir 2027; extended maintenance 2028-2030 dengan premium 2 poin persentase"
  - url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/tech-debt-reclaiming-tech-equity"
    context: "Technical debt setara 20-40% nilai technology estate; 10-20% budget inovasi teralihkan untuk tech-debt tax"
  - url: "https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/"
    context: "Model Clean Core Extensibility Levels A-D; Level A upgrade-safe, Level D highest risk & significant technical debt"
brief_id: "sap-clean-core-01"
target_word_count: 1650
publish_month: "2026-07-2"
word_count: 1794
---

# SAP Clean Core: Menyusun Business Case dan ROI untuk Meyakinkan Direksi

Seorang CIO biasanya sudah paham bahwa inti SAP-nya perlu dibersihkan. Kesulitannya muncul di ruang rapat, saat CFO bertanya satu hal yang tidak bisa dijawab dengan istilah teknis: "Berapa nilainya bagi bisnis, dan apa yang terjadi kalau kita tunda?" Di titik itu, inisiatif [SAP Clean Core](https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide) sering kalah memperebutkan anggaran, bukan karena tidak penting, melainkan karena manfaatnya terdengar abstrak. Artikel ini bukan penjelasan teknis, melainkan panduan menerjemahkan "core yang lebih bersih" menjadi angka yang bisa masuk proposal investasi: biaya inaksi, matematika TCO, dan cara membingkainya dalam bahasa direksi.

> **Ringkas:** *Business case* clean core adalah justifikasi investasi yang menerjemahkan manfaat teknis clean core, yaitu menjaga inti SAP S/4HANA tetap standar dan mudah di-*upgrade* dengan memindahkan kustomisasi ke SAP BTP atau ABAP Cloud, menjadi angka finansial untuk direksi: biaya inaksi (*technical debt*), penghematan pemeliharaan, penghindaran biaya *upgrade*, dan kesiapan cloud. Intinya membingkai "core yang bersih" sebagai keputusan investasi terukur.

## Apa itu business case clean core dan mengapa sulit dijual ke direksi?

Business case clean core adalah dokumen yang mengubah manfaat teknis clean core menjadi bahasa finansial: biaya yang dihindari, pemeliharaan yang turun, dan risiko jadwal yang nyata. Ia sulit dijual karena manfaat intinya, yakni *upgrade* yang lebih aman dan lebih murah, baru terasa di masa depan, sementara biayanya harus dikeluarkan sekarang.

Clean core sendiri, menurut materi resmi SAP, adalah prinsip menjaga sistem ERP "sedekat mungkin dengan kondisi standar bawaan vendor" di enam dimensi: *software stack, extensibility, integrations, processes, data,* dan *operations*. Bagi seorang direktur keuangan yang menilai proposal dari pengembalian dan risiko, ini terdengar seperti pekerjaan IT internal, bukan keputusan investasi. Selama tim IT membingkainya sebagai "membersihkan *custom code*", proyek ini akan kalah oleh inisiatif yang manfaatnya lebih mudah dihitung. Kuncinya membalik urutan: mulai dari biaya yang sedang perusahaan bayar diam-diam hari ini.

## Biaya inaksi: apa yang Anda bayar dengan mempertahankan core kotor

Biaya inaksi (*cost of inaction*) adalah beban finansial dari mempertahankan inti yang penuh kustomisasi: *technical debt* yang menumpuk, *upgrade* yang makin mahal, serta tenggat pemeliharaan SAP ECC yang mendekat. Ini bukan biaya nol; hanya biaya yang tidak muncul sebagai satu baris di anggaran.

*Technical debt* adalah beban yang terukur, bukan retorika IT. Menurut [survei McKinsey](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/tech-debt-reclaiming-tech-equity) terhadap sekitar 50 CIO perusahaan bernilai lebih dari USD 1 miliar, *technical debt* diperkirakan setara **20–40% nilai seluruh *technology estate*** perusahaan, dan **10–20% anggaran teknologi untuk produk baru** teralihkan untuk membayar "pajak utang teknis" (*tech-debt tax*). Angka ini lintas industri, bukan khusus SAP, tetapi memberi CFO kerangka yang familiar: utang yang menggerus kapasitas investasi.

Pada lingkungan SAP, wujudnya adalah *custom code* (Z-code) yang menumpuk. Estimasi industri dari smartShift menyebut sistem ECC rata-rata mengakumulasi sekitar **22.000 *custom object*** dan **2,7 juta baris kode kustom**, dengan **40–60% di antaranya secara teknis sudah tidak terpakai**. Ini estimasi rata-rata dari vendor remediasi kode, bukan tarif pasti untuk sistem Anda, tetapi polanya jelas: makin banyak kode kustom, makin mahal setiap *testing* dan setiap *upgrade*.

Lalu ada pemicu jadwal yang paling konkret bagi anggaran: tenggat pemeliharaan SAP ECC. Berdasarkan [SAP Support Portal](https://support.sap.com/en/offerings-programs/strategy.html), *mainstream maintenance* untuk SAP Business Suite 7 (termasuk ECC) berakhir **31 Desember 2027**; *extended maintenance* tersedia hingga akhir **2030** dengan premium **2 poin persentase** di atas basis pemeliharaan, dan setelahnya hanya tersisa *customer-specific maintenance*. Ada jalur transisi *private edition* sampai 2033, tetapi itu bersyarat komersial untuk pelanggan terpilih, bukan hak umum; menyajikannya sebagai "aman sampai 2033" berisiko menyesatkan.

Karena hampir setiap business case clean core terikat pada jadwal dan anggaran [migrasi ERP ke cloud](https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud), tenggat 2027 ini menjadi jangkar yang sah: setiap tahun penundaan menaikkan biaya *upgrade*, bukan menghematnya.

## Berapa besar ROI dan pengurangan TCO yang realistis dari clean core?

Jujur: tidak ada persentase yang dijamin. Beberapa kasus menyebut pengurangan TCO (*Total Cost of Ownership*) sekitar 30%, tetapi itu angka kasus tertentu, bukan *benchmark* analis independen. Yang lebih bisa dipertanggungjawabkan adalah mekanismenya, dan itulah yang sebaiknya Anda hitung sendiri.

Mekanisme penghematannya bekerja lewat tiga jalur. Lebih sedikit *custom code* berarti lebih sedikit *testing* dan pemeliharaan setiap siklus. *Upgrade* yang tadinya proyek berbulan-bulan menjadi rutinitas, karena inti yang standar tidak "pecah" saat diperbarui. Dan proses serta data yang terstandardisasi menjadi fondasi untuk analitik dan AI, kesiapan yang sulit dinilai dalam rupiah tetapi nyata sebagai peluang.

Cara sehat menyusun angka ROI adalah membangunnya dari bawah, bukan menelan klaim vendor:

1. **Hitung biaya *upgrade* historis Anda.** Berapa jam kerja dan biaya konsultan pada *upgrade* terakhir, dan berapa persen waktu habis untuk menguji serta memperbaiki *custom code*?
2. **Estimasi beban pemeliharaan tahunan *custom code*.** Berapa banyak objek Z aktif, dan berapa yang sebenarnya masih dipakai? Bagian yang usang adalah penghematan langsung saat di-*decommission*.
3. **Masukkan biaya inaksi yang bertenggat.** Premium *extended maintenance* +2 poin persentase per tahun setelah 2027 adalah angka SAP resmi yang bisa langsung masuk proyeksi.
4. **Nilai manfaat strategis secara terpisah.** Kesiapan cloud dan fondasi [business intelligence](https://www.soltius.co.id/id/blog/business-intelligence) di atas data standar tidak selalu jadi angka; sajikan sebagai peluang, jangan paksakan menjadi satu persentase.

Angka yang Anda hasilkan sendiri, dengan asumsi yang bisa dipertahankan, jauh lebih meyakinkan di hadapan direksi daripada klaim "hemat 30%" yang tak bisa Anda buktikan sumbernya.

## Menyusun proposal: kerangka biaya vs manfaat clean core

Proposal clean core yang kuat memisahkan komponen biaya dari komponen manfaat secara transparan, lalu menautkan keduanya ke tenggat nyata. Kerangka satu halaman berikut cukup untuk membuka diskusi anggaran dengan direksi.

| Sisi | Komponen | Catatan untuk proposal |
|---|---|---|
| **Biaya** | Penilaian kesiapan (*readiness assessment*) | Sekali di depan; mengubah asumsi jadi angka |
| **Biaya** | Remediasi *custom code* (Z-code) | Prioritaskan yang paling membebani *upgrade* |
| **Biaya** | Enablement ekstensi di SAP BTP / ABAP Cloud | Kustomisasi dipindah keluar inti |
| **Manfaat** | Penghindaran premium pemeliharaan ECC | *Extended* 2028–2030 = +2 poin persentase |
| **Manfaat** | Siklus *upgrade* lebih cepat & murah | Kode kustom lebih sedikit = *testing* lebih sedikit |
| **Manfaat** | Turunnya "pajak utang teknis" | McKinsey: 10–20% anggaran inovasi teralihkan |
| **Manfaat** | Kesiapan cloud/AI/BI di atas data standar | *Enabler*, bukan angka langsung |

Sisi biaya remediasi menjadi lebih terarah begitu setiap kustomisasi dipetakan berdasarkan risikonya. Sejak Agustus 2025, SAP memformalkan *Clean Core Extensibility Levels* A–D untuk menggantikan model tiga tingkat lama, dari Level A yang paling *upgrade-safe* (ABAP Cloud atau *released API* di SAP BTP) hingga Level D yang oleh SAP disebut berisiko tertinggi dan "menciptakan *technical debt* signifikan".

| Level | Ringkas | Implikasi biaya/risiko |
|---|---|---|
| **A** | *Released API*; ABAP Cloud atau SAP BTP *side-by-side* | Paling rendah; target ideal |
| **B** | *Classic API* SAP terdokumentasi | Rendah–sedang |
| **C** | Akses objek internal SAP (legacy) | Sedang–tinggi |
| **D** | Modifikasi, *write* ke tabel SAP | Tertinggi; "*significant technical debt*" |

Klasifikasi ini menerjemahkan bahasa teknis ke bahasa biaya: proposal cukup menunjukkan berapa banyak kustomisasi berada di Level D, karena di situlah beban *upgrade* terbesar berada. Dalam praktik, penilaian kesiapan di awal inilah yang mengubah asumsi kasar menjadi angka yang bisa dipertanggungjawabkan.

## Kapan business case clean core BELUM kuat, dan angka yang jangan Anda janjikan

Tidak setiap sistem layak diremediasi besar-besaran, dan justru kejujuran soal ini yang membuat proposal Anda kredibel. Business case clean core melemah dalam tiga kondisi: ketika sistem akan segera dipensiunkan, ketika kustomisasi memang diwajibkan, atau ketika belum ada rencana *upgrade* yang membuat manfaat "*upgrade-safe*" relevan.

Beberapa hal yang perlu dipertimbangkan sebelum mengajukan anggaran:

- **Sistem yang akan segera di-*decommission*.** Jika modul target akan digantikan dalam satu-dua tahun, remediasi besar jarang sepadan.
- **Kustomisasi yang wajib dipertahankan.** Sebagian *custom code* adalah kepatuhan regulasi atau justru diferensiasi kompetitif. Business case yang jujur memisahkan "utang yang harus dibayar" dari "investasi yang disengaja".
- **Janji penghematan pasti.** Menjanjikan "hemat 30–55%" tanpa sumber cepat menghancurkan kredibilitas. Angka 30% adalah klaim kasus; angka yang lebih tinggi umumnya tak terkonfirmasi di sumber otoritatif. Sajikan rentang sebagai ilustrasi, bukan garansi.

Yang memperkuat, bukan melemahkan, business case adalah kenyataan bahwa clean core bertingkat. Model Level A–D membuktikan clean core dapat dicicil sesuai prioritas, mulai dari ekstensi Level D yang paling membebani setiap *upgrade*, bukan proyek habis-habisan sekali jalan. Ini memudahkan persetujuan: direksi bisa mendanai fase pertama yang bertenggat, lalu menilai hasilnya sebelum melanjutkan.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu business case clean core?

Business case clean core adalah dokumen justifikasi investasi yang menerjemahkan manfaat teknis clean core, yakni inti S/4HANA yang standar dan mudah di-*upgrade*, menjadi angka finansial yang dipahami direksi: biaya inaksi (*technical debt*), penghematan pemeliharaan, penghindaran biaya *upgrade*, dan kesiapan cloud. Intinya membingkai "core yang bersih" sebagai keputusan investasi terukur, bukan sekadar proyek teknis.

### Berapa biaya technical debt kustomisasi SAP?

Tidak ada angka tunggal; besarnya bergantung pada jumlah *custom code* dan kompleksitas sistem. Sebagai konteks, McKinsey memperkirakan *technical debt* setara 20–40% nilai seluruh *technology estate* perusahaan, dan 10–20% anggaran teknologi untuk inovasi teralihkan untuk membayarnya. Estimasi industri smartShift menyebut sistem ECC rata-rata menumpuk ~22.000 *custom object* dengan 40–60% kode tak terpakai. Semua ini estimasi, bukan tarif pasti.

### Berapa penghematan TCO yang realistis dari clean core?

Tidak ada persentase yang dijamin. Beberapa kasus menyebut pengurangan TCO sekitar 30%, tetapi itu angka kasus tertentu, bukan *benchmark* independen. Mekanismenya lebih penting daripada angka: lebih sedikit *custom code* berarti lebih sedikit *testing* dan pemeliharaan, serta siklus *upgrade* lebih cepat dan murah. Hitung sendiri dari basis biaya Anda, jangan menelan angka vendor mentah.

### Bagaimana membingkai biaya inaksi ke CFO?

Bingkai dalam bahasa jadwal dan risiko anggaran, bukan istilah teknis. Sandarkan pada tenggat nyata: *mainstream maintenance* SAP ECC berakhir 31 Desember 2027, dan *extended maintenance* 2028–2030 dikenai premium 2 poin persentase di atas basis pemeliharaan (SAP resmi). Tambahkan bahwa setiap tahun penundaan membuat *custom code* menumpuk dan *upgrade* makin mahal, sehingga menunda justru menaikkan biaya.

### Apakah clean core selalu menghemat biaya?

Tidak otomatis. Clean core adalah investasi bertingkat, bukan tombol penghemat instan. Untuk sistem yang akan segera di-*decommission*, remediasi besar mungkin tak sepadan, dan sebagian kustomisasi wajib dipertahankan karena kepatuhan atau keunggulan kompetitif. Menjanjikan penghematan pasti adalah kesalahan; nilainya datang lewat *upgrade* yang lebih murah dan *agility* jangka panjang, yang bergantung pada konteks tiap perusahaan.

### Kapan clean core belum layak secara finansial?

Ketika sistem target akan dipensiunkan dalam waktu dekat, ketika kustomisasi yang ada diwajibkan regulasi, atau ketika belum ada rencana migrasi/*upgrade* yang membuat manfaat "*upgrade-safe*" relevan. Model *extensibility* SAP sendiri bertingkat (Level A hingga D), artinya clean core dapat dicicil sesuai prioritas, bukan proyek habis-habisan. Mulai dari ekstensi berisiko tertinggi (Level D) yang paling membebani setiap *upgrade*.

## Kesimpulan

Persetujuan anggaran clean core jarang gagal karena teknologinya, melainkan karena angkanya tidak pernah sampai ke meja CFO dalam bahasa yang tepat. Kuncinya bukan menjanjikan penghematan spektakuler, melainkan menunjukkan biaya inaksi yang bertenggat — tumpukan *technical debt* dan tenggat pemeliharaan ECC 2027 — lalu menyandingkannya dengan manfaat yang dihitung dari basis biaya Anda sendiri, jujur tentang mana yang estimasi. Sebagai SAP Platinum Partner melalui United VARs, Soltius mendampingi perusahaan menyusun penilaian kesiapan dan business case sebelum proyek konversi, bukan membangun SAP itu sendiri.

Untuk mendiskusikan kesiapan clean core dan menyusun justifikasi anggarannya bersama tim yang biasa duduk di ruang rapat direksi, kunjungi soltius.co.id.
