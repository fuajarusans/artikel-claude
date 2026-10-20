---
title: "Spend Analytics: BI untuk Mengendalikan Pengeluaran dan Kinerja Vendor"
meta_title: "Business Intelligence Procurement: Spend Analytics"
meta_description: "Terapkan Business Intelligence pada procurement lewat spend analytics: KPI wajib, sumber data spend cube, dan 4 dashboard yang benar-benar memicu tindakan."
slug: "spend-analytics-bi-procurement-kinerja-vendor"
language: "id"
primary_keyword: "Business Intelligence"
secondary_keywords:
  - "spend analytics"
  - "analisis pengeluaran procurement"
  - "SAP Analytics Cloud"
  - "maverick spend"
  - "spend under management"
  - "contract compliance"
  - "supplier performance scorecard"
  - "spend cube"
  - "dashboard procurement"
  - "SAP Ariba"
  - "on-time delivery"
internal_links:
  - url: "https://www.soltius.co.id/id/blog/business-intelligence"
    anchor: "Business Intelligence"
  - url: "https://www.soltius.co.id/id/blog/sistem-manajemen-vendor"
    anchor: "vendor management system"
  - url: "https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu"
    anchor: "warehouse management system"
external_citations:
  - url: "https://learning.sap.com/courses/positioning-sap-solutions-for-procurement-for-partners/unlocking-better-insights-by-combining-sap-ariba-with-sap-analytics-cloud-2"
    context: "Pembagian peran SAP Analytics Cloud (dashboard belanja per region/supplier/kategori, what-if) vs SAP Ariba (data transaksi sourcing/kontrak/supplier); keduanya komplementer"
  - url: "https://news.sap.com/2024/10/sap-spend-control-tower-enterprise-wide-spend-analysis/"
    context: "SAP Spend Control Tower mengonsolidasikan belanja dari S/4HANA, ECC, dan sistem non-SAP, lalu diperkaya data Ariba/Fieldglass/Concur"
brief_id: "business-intelligence-02"
target_word_count: 1650
publish_month: "2026-09"
word_count: 1780
---

# Spend Analytics: BI untuk Mengendalikan Pengeluaran dan Kinerja Vendor

Kebanyakan direktur keuangan hafal berapa total belanja perusahaannya tahun lalu. Yang jauh lebih sulit dijawab justru pertanyaan lanjutannya: ke mana uang itu benar-benar pergi? Berapa persen belanja terjadi di luar kontrak, berapa yang tercecer ke ratusan vendor bertransaksi sekali, dan vendor mana yang kerap telat kirim tapi tetap dibayar penuh. Datanya sebenarnya ada, hanya berserak di ERP, kotak email, dan spreadsheet tim pembelian, sehingga tak pernah menjadi gambaran yang bisa ditindaklanjuti. Di sinilah [Business Intelligence](https://www.soltius.co.id/id/blog/business-intelligence) masuk ke ranah pengadaan. Artikel ini membahas penerapannya lewat *spend analytics*: metrik mana yang benar-benar penting, dari mana datanya disatukan, dan kapan dashboard justru menyesatkan.

> **Ringkas:** *Spend analytics* adalah penerapan *Business Intelligence* pada fungsi pengadaan (*procurement*): menyatukan data belanja yang berserak di ERP, sistem procurement, dan penerimaan barang menjadi satu gambaran yang bisa ditindaklanjuti, memperlihatkan ke mana uang benar-benar pergi, berapa persen di luar kontrak, dan bagaimana kinerja tiap vendor. Di ekosistem SAP, lapisan ini biasanya disajikan lewat SAP Analytics Cloud.

Pembahasan bergerak dari konsep ke praktik: apa itu spend analytics dan kenapa ia pekerjaan BI, KPI pengadaan yang wajib dipantau (beserta yang sebaiknya diabaikan), dari mana datanya disatukan, empat dashboard yang benar-benar memicu tindakan, dan bagian jujur yang jarang ditulis: kapan analitik ini justru belum berguna.

## Apa Itu Spend Analytics dan Mengapa Procurement Butuh BI?

Spend analytics adalah analisis data pengeluaran untuk memperoleh visibilitas belanja lintas supplier, kategori, dan waktu. Ia tergolong pekerjaan *Business Intelligence*, bukan sekadar laporan pembelian, karena datanya harus ditarik dan disatukan dari banyak sistem yang tidak saling bicara: ERP, platform procurement, penerimaan barang di gudang, hingga arsip kontrak.

Laporan pembelian biasa menjawab satu pertanyaan: berapa yang kita belanjakan. Spend analytics menjawab pertanyaan yang jauh lebih berguna bagi pengambil keputusan, yakni ke mana, ke supplier mana, berapa yang di luar kontrak, dan mana yang sebenarnya bisa dihemat. Perbedaannya terletak pada integrasi. Selama data belanja masih terpecah di modul keuangan, sistem sourcing, dan catatan gudang, tidak ada satu pun tampilan yang bisa dipercaya manajemen sepenuhnya.

Di ekosistem SAP, ada pembagian peran yang sering tertukar dan perlu diluruskan:

- **SAP S/4HANA (modul MM / *Sourcing and Procurement*)** adalah sistem transaksi inti: tempat *purchase order* (PO), faktur, dan data master supplier tercatat.
- **SAP Ariba** memasok data *source-to-pay* (dari sourcing sampai pembayaran): sourcing, kontrak, dan manajemen supplier. Ia berperan sebagai sumber data, bukan alat visualisasi umum.
- **SAP Analytics Cloud (SAC)** adalah lapisan BI-nya: dashboard belanja per region, supplier, dan kategori, lengkap dengan pemodelan skenario *what-if*. SAP memposisikan kombinasi SAP Ariba dan SAC untuk memberi pandangan menyeluruh atas belanja kategori, kinerja supplier, dan peluang penghematan (SAP Learning).

Untuk analitik pengeluaran skala perusahaan yang harus melintasi banyak sistem sekaligus, SAP menambahkan SAP Spend Control Tower, solusi analitik pengeluaran generasi baru yang mengonsolidasikan belanja dari S/4HANA, SAP ECC, dan sistem non-SAP, lalu memperkayanya dengan data dari SAP Ariba, SAP Fieldglass, dan SAP Concur (SAP News, Oktober 2024). Intinya sama saja: satu lapisan yang menyatukan, bukan satu laporan lagi. Tanpa lapisan seperti ini, tim procurement menghabiskan waktunya merekap, bukan menegosiasi ulang kontrak atau menekan belanja liar.

## KPI Procurement Apa Saja yang Wajib Dipantau (dan Mana yang Vanity)?

KPI procurement yang paling menggerakkan keputusan berfokus pada kontrol dan penghematan: *maverick spend*, *spend under management*, *contract compliance*, *on-time delivery*, serta *savings realized* versus *identified*. Sebaliknya, metrik seperti jumlah PO atau jumlah supplier tanpa konteks tergolong *vanity*, terlihat sibuk tapi tidak memberi tahu apakah pengadaan berjalan sehat.

Mulai dari yang paling sering bocor. *Maverick spend* (belanja di luar kontrak) adalah porsi belanja yang terjadi di luar kanal atau kontrak pengadaan yang disetujui. Bahayanya nyata: sebagai gambaran industri, perusahaan yang membeli di luar kontrak bisa kehilangan 10–50% penghematan yang sudah dinegosiasikan, dan banyak organisasi mendapati sekitar 30% belanjanya tergolong maverick, sementara tim papan atas menjaga kepatuhan kontrak di atas 90% (kompilasi benchmark procurement). Angka-angka ini rentang industri, bukan patokan pasti.

*Spend Under Management* (SUM) mengukur seberapa besar belanja yang benar-benar dikelola aktif lewat kontrak, supplier preferen, dan PO yang disetujui. Rumusnya sederhana: belanja terkelola dibagi total belanja, dikali seratus. Jika total belanja Rp 100 miliar dan Rp 80 miliar dikelola procurement, SUM Anda 80%. Banyak organisasi berada di kisaran 70%, sedangkan tim paling matang melampaui 90%.

*Contract compliance* adalah cermin kebalikan maverick spend: porsi belanja yang jatuh di bawah kontrak dibagi total belanja. Semakin tinggi kepatuhan kontrak, semakin kecil belanja liar. Di sisi supplier, dua metrik inti melengkapi gambaran: *on-time delivery* (OTD), persentase pengiriman yang tiba tepat atau lebih awal dari janji, dan *defect/quality rate*, tingkat cacat atau penolakan barang.

Satu pembeda yang sering dilewati adalah selisih antara *savings identified* dan *savings realized*. Penghematan teridentifikasi adalah potensi di titik negosiasi; penghematan terwujud adalah yang benar-benar menyentuh laporan keuangan. Gap keduanya umumnya 30–40%, artinya sekitar sepertiga penghematan yang diklaim tak pernah benar-benar terjadi. Organisasi yang melacak lewat empat tahap (Negotiated, Implemented, Realized, Validated) mewujudkan sekitar 75–85% potensi yang teridentifikasi.

| KPI | Definisi / rumus | Benchmark industri (gambaran, bukan janji) |
|---|---|---|
| Maverick spend | % belanja di luar kontrak/kanal yang disetujui | banyak organisasi ~30%; papan atas jaga kepatuhan >90% |
| Spend Under Management (SUM) | belanja terkelola ÷ total belanja × 100 | umum ~70%; matang >90%; belum matang ~60% |
| Contract compliance | spend on-contract ÷ total spend | cermin kebalikan maverick spend |
| On-time delivery (OTD) | % pengiriman tepat/lebih awal dari janji | ditetapkan per SLA/kontrak, tak ada angka universal |
| Savings realized vs identified | realized ÷ identified | gap negotiated-vs-realized umumnya 30–40% |

Yang perlu diwaspadai adalah metrik yang terlihat mengesankan tapi kosong makna. Jumlah PO yang diproses, jumlah supplier aktif, atau nilai belanja mentah tanpa konteks bisa menyesatkan. Banyak PO belum tentu berarti pengadaan yang sehat, dan ribuan supplier justru sering menjadi pertanda fragmentasi yang mahal, bukan prestasi.

## Dari Mana Datanya? Menyatukan Belanja Jadi Satu Spend Cube

Data spend cube ditarik dari beberapa sumber: modul MM di SAP S/4HANA untuk PO, faktur, dan master supplier; SAP Ariba untuk kontrak dan sourcing; penerimaan barang dari *warehouse management system* untuk on-time delivery; serta arsip kontrak. Lapisan BI seperti SAC atau SAP Spend Control Tower yang menggabungkan semuanya menjadi satu tampilan per supplier, kategori, dan waktu.

*Spend cube* adalah cara menstruktur belanja pada beberapa dimensi sekaligus, umumnya supplier × kategori × waktu (unit bisnis atau lokasi bisa ditambahkan). Strukturnya memungkinkan pertanyaan seperti: berapa yang kita belanjakan pada kategori X, ke supplier Y, pada kuartal Z? Jawaban atas pertanyaan semacam itulah yang membuat negosiasi volume dan konsolidasi supplier menjadi mungkin.

Kubus itu tidak terisi sendiri. Datanya dikumpulkan dari beberapa sumber yang masing-masing memegang potongan cerita berbeda. Nilai dan kategori PO datang dari S/4HANA; harga dan syarat kontrak dari SAP Ariba; sedangkan tanggal terima aktual, yang menentukan akurat-tidaknya metrik OTD, berasal dari penerimaan barang di [warehouse management system](https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu). Tanpa data gudang yang terhubung, OTD hanya jadi tebakan.

| Sumber data | Contoh field | Metrik/insight yang dihasilkan |
|---|---|---|
| S/4HANA MM (PO, faktur) | nilai PO, kategori, supplier, tanggal | total spend, spend per kategori, spend cube |
| SAP Ariba (kontrak, sourcing) | kontrak aktif, harga negosiasi | contract compliance, savings identified |
| WMS / penerimaan barang | tanggal terima vs tanggal janji | on-time delivery (OTD), lead time |
| Data kontrak + AP | penanda on/off-contract | maverick spend, spend under management |
| Gabungan (lapisan BI) | seluruh di atas, dinormalisasi | supplier scorecard, savings realized vs identified |

Menyatukannya bukan sekadar menyalin tabel ke satu tempat. Urutan kerjanya biasanya begini:

1. **Tarik dan satukan** transaksi dari tiap sistem sumber ke satu lapisan data.
2. **Normalisasi supplier**, yaitu menyatukan entri ganda (misalnya "PT Maju", "Maju Tbk", dan "Maju Jaya" yang sebenarnya satu perusahaan) menjadi satu identitas.
3. **Klasifikasikan kategori** dengan taksonomi yang konsisten agar belanja sejenis tidak tercecer di banyak label berbeda.
4. **Bangun kubusnya**, lalu petakan ke metrik dan dashboard di lapisan BI.

## Empat Dashboard Procurement yang Benar-Benar Menggerakkan Tindakan

Dashboard procurement bernilai kalau memicu tindakan, bukan sekadar menampilkan angka. Empat yang paling berguna: spend overview per kategori, supplier performance scorecard, contract dan maverick spend compliance, serta savings pipeline. Masing-masing menjawab satu pertanyaan bisnis konkret dan mengarah pada keputusan, misalnya konsolidasi supplier atau menutup kebocoran kontrak.

- **Spend overview & kategori.** Menjawab: ke mana belanja terbesar mengalir, dan seberapa terkonsentrasi? Memicu tindakan konsolidasi kategori dan negosiasi berbasis volume.
- **Supplier performance scorecard.** Menggabungkan OTD, defect rate, dan kepatuhan kontrak menjadi satu skor per vendor. Skor ini paling berguna bila terhubung ke [vendor management system](https://www.soltius.co.id/id/blog/sistem-manajemen-vendor) yang menyimpan data siklus hidup dan kepatuhan supplier. Memicu tindakan: pembinaan, penggantian, atau realokasi volume ke vendor terbaik.
- **Contract & maverick spend compliance.** Menyoroti berapa persen belanja terjadi di luar kontrak dan di kategori mana kebocoran terbesar. Memicu penegakan kanal pembelian dan penutupan celah kontrak.
- **Savings pipeline.** Melacak penghematan dari teridentifikasi hingga benar-benar terwujud, supaya klaim penghematan tidak berhenti di slide presentasi.

Pola yang sering ditemui di lapangan: kejutan terbesar bagi klien biasanya bukan angka total belanjanya, melainkan berapa banyak vendor yang hanya bertransaksi sekali dan berapa persen belanja yang ternyata tanpa kontrak. Dashboard yang baik membuat kejutan itu terlihat sejak minggu-minggu pertama, bukan setelah audit tahunan.

## Kapan Spend Analytics Belum Berguna: Bereskan Master Data Dulu

Spend analytics belum berguna ketika master data supplier penuh duplikat, kategori tidak konsisten, dan kontrak belum terdigitalisasi. Di kondisi itu, dashboard hanya memperindah data kotor dan menghasilkan keputusan salah arah. Urutan yang benar: bersihkan data, klasifikasikan, baru bangun analitik lanjutan. Visibilitas palsu lebih berbahaya daripada tidak ada visibilitas sama sekali.

Bagian ini jarang ditulis kompetitor yang menjual "tinggal pasang dashboard", padahal justru di sinilah banyak proyek gagal. Dashboard secantik apa pun yang berdiri di atas data kotor akan menyesatkan. Jika satu supplier tercatat sebagai lima entitas berbeda karena penulisan nama tidak konsisten, laporan konsentrasi supplier Anda salah sejak awal. Jika kategori tercampur, analisis belanja per kategori kehilangan maknanya.

Dua pekerjaan prasyarat menentukan hampir seluruh hasilnya: normalisasi supplier (menyatukan entri ganda menjadi satu identitas) dan taksonomi kategori yang konsisten. Keduanya tidak glamor, tapi tanpanya analitik lanjutan hanya mengotomatiskan kesalahan. Nilai terbesar spend analytics justru sering muncul belakangan, setelah master data supplier distandarkan, sebuah pekerjaan yang lazim didampingi konsultan data.

Ada juga soal yang bukan urusan tool. Savings realized tidak ditutup oleh dashboard, melainkan oleh disiplin eksekusi kontrak, kepatuhan buyer, dan pelacakan bertahap. BI memberi visibilitas atas gap-nya; menutup gap tetap soal tata kelola. Karena itu, sebelum berinvestasi pada lapisan analitik, tanyakan lebih dulu: apakah master data dan proses kami sudah cukup rapi untuk bisa dipercaya?

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu spend analytics dan apa bedanya dengan laporan pembelian biasa?
Spend analytics adalah penerapan Business Intelligence pada data pengeluaran: menyatukan belanja dari ERP, sistem procurement, dan penerimaan barang menjadi satu gambaran yang bisa ditindaklanjuti. Laporan pembelian biasa hanya menjawab "berapa yang dibelanjakan". Spend analytics menjawab "ke mana, ke supplier mana, di luar kontrak berapa, dan mana yang bisa dihemat", lintas supplier, kategori, dan waktu.

### Apa itu maverick spend dan kenapa berbahaya?
Maverick spend adalah belanja yang terjadi di luar kanal atau kontrak procurement yang disetujui. Bahayanya, ia menggerus penghematan yang sudah dinegosiasikan: sebagai gambaran industri, perusahaan bisa kehilangan 10–50% penghematan kontrak akibat pembelian di luar jalur. Banyak organisasi mengalami maverick spend sekitar 30% dari total belanja; tim papan atas menjaga kepatuhan kontrak di atas 90%. Angka ini rentang industri, bukan patokan pasti.

### Apa itu spend under management (SUM)?
Spend Under Management (SUM) adalah persentase total belanja yang dikelola aktif lewat kontrak, supplier preferen, dan PO yang disetujui. Rumusnya sederhana: belanja terkelola dibagi total belanja, dikali seratus. Jika total belanja Rp 100 miliar dan Rp 80 miliar dikelola procurement, SUM Anda 80%. Sebagai gambaran, banyak organisasi berada di sekitar 70%, sementara tim paling matang melampaui 90%.

### KPI apa yang paling penting untuk kinerja supplier?
Tiga metrik inti membentuk supplier scorecard: on-time delivery (OTD, persentase pengiriman tepat waktu), defect/quality rate (tingkat cacat atau penolakan), dan kepatuhan syarat kontrak. Ketiganya digabung menjadi satu skor per vendor. Data OTD umumnya berasal dari penerimaan barang di WMS/gudang. Hindari metrik vanity seperti "jumlah PO" tanpa konteks, karena banyak PO belum tentu berarti pengadaan yang sehat.

### Dari mana data dashboard procurement diambil?
Data spend cube disatukan dari beberapa sumber: modul MM/Sourcing and Procurement di SAP S/4HANA (PO, faktur, master data supplier), SAP Ariba (sourcing, kontrak, data supplier), penerimaan barang dari warehouse management system untuk metrik on-time delivery, serta arsip kontrak. Lapisan BI seperti SAP Analytics Cloud atau SAP Spend Control Tower menggabungkannya menjadi satu tampilan per supplier, kategori, dan waktu.

### Apakah butuh SAP Ariba, atau cukup BI seperti SAP Analytics Cloud?
Keduanya berperan berbeda dan saling melengkapi. SAP Ariba memasok data transaksi pengadaan, yaitu sourcing, kontrak, dan manajemen supplier. SAP Analytics Cloud adalah lapisan BI yang memvisualkan data itu menjadi dashboard belanja per region, supplier, dan kategori, lengkap dengan pemodelan what-if. Untuk analitik pengeluaran skala perusahaan lintas sistem SAP dan non-SAP, SAP juga menyediakan SAP Spend Control Tower. Pilihan bergantung pada lanskap sistem Anda.

## Kesimpulan

Kejelasan soal belanja jarang datang dari laporan tambahan; ia datang dari menyatukan data yang selama ini berserak menjadi satu lapisan yang bisa dipercaya. Spend analytics mengubah pengadaan dari pusat biaya yang reaktif menjadi fungsi yang mampu menegosiasi ulang, menekan belanja liar, dan membuktikan penghematan yang benar-benar terwujud, asalkan dibangun di atas master data yang bersih. Melalui layanan Data and AI Consulting, Soltius mengintegrasikan data pembelian dari SAP ke SAP Analytics Cloud sehingga tim pengadaan melihat spend dan kinerja vendor dalam satu layar, dengan pengalaman lintas industri distribusi dan manufaktur. Langkah pertama biasanya bukan membeli dashboard, melainkan menilai kesiapan data dan menyepakati KPI yang benar-benar penting.

Untuk mendiskusikan kesiapan data pengadaan dan merancang dashboard spend analytics di perusahaan Anda, jelajahi solusinya di soltius.co.id.
