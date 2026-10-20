---
title: "Bill of Materials (BOM): Pengertian, Jenis, dan Contohnya"
meta_title: "Bill of Materials (BOM): Pengertian, Jenis, dan Contohnya"
meta_description: "Bill of material (BOM) adalah daftar terstruktur bahan dan komponen pembentuk satu produk. Kenali jenis BOM, contoh struktur bertingkat, dan fungsinya."
slug: "bill-of-materials-pengertian-jenis-contoh"
language: "id"
primary_keyword: "bill of material"
secondary_keywords: ["bill of materials", "BOM produksi", "apa itu bom produksi", "daftar kebutuhan material", "single-level BOM", "multi-level BOM", "Engineering BOM (EBOM)", "Manufacturing BOM (MBOM)", "sub-assembly", "struktur produk bertingkat", "master data produksi", "kode item"]
internal_links:
  - url: "https://www.soltius.co.id/id/blog/digital-manufaktur-sistem"
    anchor: "sistem manufaktur digital"
  - url: "https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu"
    anchor: "manajemen gudang"
external_citations:
  - url: "https://www.ascm.org/learning-development/certifications-credentials/dictionary/"
    context: "ASCM Supply Chain Dictionary edisi ke-18 mendaftar enam format tampilan bill of material (single-level, indented, modular, transient, matrix, costed)"
  - url: "https://learning.sap.com/courses/exploring-basic-data-for-manufacturing-and-product-management-in-sap-s-4hana/introducing-bills-of-material-boms-"
    context: "BOM dipakai oleh MRP, produksi, pengadaan, dan product costing; MRP meng-explode BOM; struktur BOM header (base quantity) + BOM item di SAP S/4HANA"
brief_id: "bill-of-materials-c01"
target_word_count: 900
publish_month: "2026-07"
word_count: 898
---

# Bill of Materials (BOM): Pengertian, Jenis, dan Contohnya

Satu baris komponen yang hilang dari daftar kebutuhan material bisa menghentikan lini perakitan: pengadaan tidak memesan, gudang tidak menyiapkan, produksi menunggu. Bill of material (BOM) disusun untuk mencegah skenario itu, sekaligus menjadi fondasi data setiap [sistem manufaktur digital](https://www.soltius.co.id/id/blog/digital-manufaktur-sistem). Artikel ini mengupas jenis BOM, contoh struktur bertingkat yang bisa langsung ditiru, dan alasan akurasinya menentukan hasil perencanaan kebutuhan material.

> **Ringkasnya:** bill of material (BOM) adalah daftar terstruktur seluruh bahan baku, komponen, dan sub-assembly, lengkap dengan kode item, kuantitas, dan satuannya, yang dibutuhkan untuk membuat satu unit produk jadi. BOM menjadi acuan bersama tim desain, produksi, pengadaan, dan keuangan, sekaligus input utama perhitungan kebutuhan material.

## Apa Saja Jenis Bill of Materials?

Jenis BOM paling mudah dipetakan pada dua sumbu. Sumbu fungsi dokumen memisahkan Engineering BOM (EBOM), produk sebagaimana dirancang tim engineering, dari Manufacturing BOM (MBOM), produk sebagaimana dibuat di lantai produksi. Sumbu kedalaman struktur memisahkan single-level BOM yang berhenti di satu tingkat dari multi-level BOM yang mengikuti seluruh rakitan antara (*sub-assembly*).

| Jenis BOM | Isi | Siapa memakai |
|---|---|---|
| Engineering BOM (EBOM) | Produk sebagaimana **dirancang**: gambar teknik dan spesifikasi desain | Tim engineering/R&D saat desain produk |
| Manufacturing BOM (MBOM) | Produk sebagaimana **dibuat**: komponen aktual, material kemasan, urutan perakitan | Tim produksi; inilah "BOM produksi" sehari-hari |
| Single-level BOM | Satu tingkat: produk jadi dan komponen langsungnya | Produk rakitan sederhana tanpa sub-assembly |
| Multi-level (indented) BOM | Bertingkat Level 0-1-2-dst.: produk jadi → sub-assembly → komponen/bahan baku | Standar produk kompleks dengan sub-assembly |

Empat jenis itu bukan daftar lengkap: [kamus ASCM](https://www.ascm.org/learning-development/certifications-credentials/dictionary/) (Association for Supply Chain Management) edisi ke-18 mendaftar enam format tampilan bill of material; dua di antaranya single-level dan indented, sisanya varian kebutuhan khusus seperti modular (planning) BOM dan costed BOM.

Di lapangan, EBOM dan MBOM yang tidak sinkron setelah revisi desain adalah temuan yang sering muncul saat penataan master data produksi; keduanya dokumen paralel yang sah untuk produk yang sama.

## Contoh Struktur BOM Bertingkat

Struktur BOM bertingkat dibaca per level: Level 0 adalah produk jadi, Level 1 sub-assembly, Level 2 komponen atau bahan baku. Setiap baris memuat kode item, deskripsi, kuantitas, dan satuan terhadap satu *base quantity* (kuantitas dasar produk jadi). Tabel berikut adalah ilustrasi BOM kursi kantor dengan base quantity 1 unit.

| Level | Kode | Komponen | Qty | Satuan |
|---|---|---|---|---|
| 0 | FG-100 | Kursi kantor (produk jadi) | 1 | unit |
| 1 | SA-110 | Rakitan dudukan | 1 | unit |
| 2 | RM-111 | Busa dudukan | 1 | pcs |
| 2 | RM-112 | Kain pelapis | 0,8 | m² |
| 1 | SA-120 | Rakitan kaki | 1 | unit |
| 2 | RM-121 | Roda kastor | 5 | pcs |
| 2 | RM-122 | Gas lift | 1 | pcs |
| 2 | RM-123 | Baut M8 | 4 | pcs |

Dua catatan dari tabel ini.

Pertama, komponen yang dipakai lebih dari satu sub-assembly tampil berulang di setiap induknya, tidak digabung menjadi satu baris. Kedua, elemen minimum tiap baris adalah kode item, deskripsi, kuantitas per base quantity, satuan, dan level; praktik yang disiplin menambahkan nomor revisi.

Struktur inilah yang kelak dibaca sistem perencanaan kebutuhan material.

## Mengapa BOM Menentukan Akurasi Produksi dan MRP?

Kesalahan kuantitas pada satu baris BOM menjalar serentak menjadi pesanan pembelian yang keliru, stok yang timpang, dan harga pokok yang salah hitung. Penyebabnya, menurut materi resmi [SAP Learning](https://learning.sap.com/courses/exploring-basic-data-for-manufacturing-and-product-management-in-sap-s-4hana/introducing-bills-of-material-boms-), BOM dibaca empat proses inti sekaligus: perencanaan kebutuhan material, produksi, pengadaan, dan *product costing* (perhitungan biaya produk).

Relasi dengan MRP (*Material Requirements Planning*) bekerja lewat mekanisme *explode*: sistem mengurai struktur BOM dari jadwal produksi untuk menghitung identitas dan kuantitas komponen di tiap level. Dari pesanan 100 kursi pada ilustrasi di atas, MRP menurunkan kebutuhan 500 roda kastor, 400 baut M8, dan 80 m² kain pelapis.

Angka kebutuhan itu pula yang menjadi dasar pesanan pembelian dan penyiapan stok di sisi [manajemen gudang](https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu).

BOM yang tidak dirawat, misalnya komponen usang tidak dihapus atau revisi desain tidak diperbarui, membuat sistem secanggih apa pun menghasilkan rencana yang salah.

Kegagalannya bukan pada perangkat lunak, melainkan pada disiplin data.

Ketika struktur produk multi-level dan revisi desain makin sering, BOM di *spreadsheet* cepat tidak sinkron dengan stok dan pembelian; perusahaan lalu memusatkannya sebagai master data di ERP (*Enterprise Resource Planning*). Di SAP S/4HANA Manufacturing, BOM tersusun atas BOM header yang memuat base quantity dan BOM item; satu struktur itulah yang menjadi acuan bersama keempat proses di atas.

## FAQ (Pertanyaan yang Sering Diajukan)

### Apa itu BOM produksi?

BOM produksi adalah sebutan sehari-hari untuk Manufacturing BOM (MBOM): daftar material sebagaimana produk benar-benar dibuat di lantai produksi, termasuk kemasan dan urutan perakitan. MBOM berbeda dari Engineering BOM (EBOM) yang menggambarkan produk sebagaimana dirancang; satu produk lazim memiliki dua dokumen paralel ini.

### Apa perbedaan single-level dan multi-level BOM?

Single-level BOM hanya menampilkan satu tingkat, yaitu produk jadi beserta komponen langsungnya. Multi-level (indented) BOM menampilkan seluruh struktur bertingkat Level 0-1-2 dan seterusnya, mengikuti sub-assembly sampai bahan baku terbawah, seperti contoh kursi kantor dengan 8 baris pada tabel di atas.

### Apa hubungan BOM dengan MRP?

BOM adalah salah satu input utama MRP (Material Requirements Planning). Sistem MRP meng-explode struktur BOM dari jadwal produksi untuk menghitung kebutuhan tiap komponen per level; pesanan 100 kursi kantor pada contoh di atas diterjemahkan menjadi kebutuhan 500 roda kastor dan 400 baut M8.

## Kesimpulan

Perusahaan yang memperlakukan BOM sebagai dokumen sekali jadi biasanya baru menyadari nilainya saat lini berhenti karena satu komponen tidak terpesan. Pilih jenisnya menurut fungsi dokumen dan kedalaman struktur, lalu rawat akurasinya sedisiplin Anda merawat stok. Sebagai SAP Platinum Partner melalui keanggotaan United VARs, Soltius mengimplementasikan dan mendampingi SAP S/4HANA Manufacturing di industri otomotif, consumer products, hingga mill products, termasuk penataan master data produksi seperti BOM.

Untuk mendiskusikan penataan BOM dan kesiapan SAP S/4HANA Manufacturing di perusahaan Anda, kunjungi soltius.co.id.
