---
brief_id: "bill-of-materials-c01"
researcher_run_date: "2026-07-06"
sources_cited: 6
flags: 7
batch: "conditional-2026-07 (style_addendum.md — 800–1000 kata, tanpa image placeholder, FAQ 2–3, 2 internal link)"
---

# Research Dossier: Bill of Materials (BOM): Pengertian, Jenis, dan Contohnya

## TL;DR for the writer

- Definisi BOM diselaraskan dengan **ASCM Supply Chain Dictionary edisi ke-18** (BUKAN ke-19 — angka di brief keliru, lihat Flags): daftar seluruh subassembly, intermediate, part, dan bahan baku pembentuk satu parent assembly + kuantitas masing-masing. Definisi muncul SEKALI, di snippet "Ringkasnya:".
- Dua sumbu jenis terverifikasi: **fungsi dokumen** (EBOM as-designed vs MBOM as-manufactured, MBOM memuat kemasan & urutan perakitan) dan **kedalaman struktur** (single-level vs multilevel/indented — keduanya entri resmi kamus ASCM).
- Fakta SAP terverifikasi via learning.sap.com (SAP official): BOM = **BOM header + BOM item**; **base quantity** di header = kuantitas produk jadi yang menjadi acuan seluruh kuantitas item; BOM dipakai **MRP, produksi, pengadaan, dan product costing**. Jangan melebihi 1–2 kalimat SAP di body.
- Relasi BOM→MRP maksimal 2–3 kalimat: MRP **meng-explode** BOM untuk menentukan identitas & kuantitas komponen per level. STOP di situ — netting/lotting/offsetting, MPS, MRP II, MRP Live milik `mrp-c01`; routing/work center/production order milik `sap-pp-c01`.
- Tabel contoh kursi kantor (Level 0–2, 8 baris, base quantity 1 unit) WAJIB berlabel "ilustrasi"; aritmetika sudah dicek: 100 kursi → 500 roda kastor, 400 baut M8, 80 m² kain.
- Kedua internal link diverifikasi 200/OK hari ini (2026-07-06).

## Core facts (verified)

> **Claim 1**: Definisi standar bill of material (BOM) menurut kamus ASCM.
> **Number/specific**: "A listing of all the subassemblies, intermediates, parts, and raw materials that go into a parent assembly as well as the quantity of each item required to make an assembly. It is used in conjunction with the master production schedule to determine the items for which purchase requisitions and production orders must be released." Kamus juga mencatat: di industri proses, BOM lazim disebut formula, resep, atau ingredients list.
> **Source**: ASCM Supply Chain Dictionary, 18th edition (Gatewood & Drake, eds.), diverifikasi langsung dari PDF resmi via learn.ascm.org, akses 2026-07-06. Halaman rujukan publik: https://www.ascm.org/learning-development/certifications-credentials/dictionary/
> **Confidence**: high

> **Claim 2**: ASCM mendaftar enam format tampilan BOM.
> **Number/specific**: single-level, indented, modular (planning), transient, matrix, dan costed bill of material — **6 format** dalam satu entri definisi. (Dipakai untuk kalimat "varian lain ada untuk kebutuhan khusus" tanpa katalog panjang.)
> **Source**: ASCM Supply Chain Dictionary, 18th ed., entri "bill of material (BOM)", akses 2026-07-06.
> **Confidence**: high

> **Claim 3**: Definisi single-level BOM.
> **Number/specific**: "A display of components that are directly used in a parent item. It shows only the relationships one level down." — hanya 1 tingkat ke bawah.
> **Source**: ASCM Supply Chain Dictionary, 18th ed., entri "single-level bill of material", akses 2026-07-06.
> **Confidence**: high

> **Claim 4**: Definisi multilevel BOM.
> **Number/specific**: "A display of all the components directly or indirectly used in a parent, together with the quantity required of each component… all its components and all their components also will be exhibited, down to purchased parts and raw materials." Indented BOM = "a form of multilevel bill of material" (parent tertinggi di kiri, tiap level komponen menjorok ke kanan; komponen yang dipakai di lebih dari satu parent muncul berulang).
> **Source**: ASCM Supply Chain Dictionary, 18th ed., entri "multilevel bill of material" dan "indented bill of material", akses 2026-07-06.
> **Confidence**: high

> **Claim 5**: BOM explosion (dasar relasi BOM→MRP).
> **Number/specific**: "The process of determining component identities, quantities per assembly, and other parent-component relationship data for a parent item. Explosion may be single level, indented, or summarized."
> **Source**: ASCM Supply Chain Dictionary, 18th ed., entri "bill-of-material explosion", akses 2026-07-06.
> **Confidence**: high

> **Claim 6**: Definisi BOM versi SAP (untuk konsistensi istilah, bukan untuk diulang sebagai definisi kedua).
> **Number/specific**: "a complete, formally structured list of the components that make up a product or assembly. The list contains a description and object number for each component, together with the quantity and unit of measure."
> **Source**: SAP Learning, "Introducing Bills of Material (BOMs)", https://learning.sap.com/courses/exploring-basic-data-for-manufacturing-and-product-management-in-sap-s-4hana/introducing-bills-of-material-boms- , akses 2026-07-06.
> **Confidence**: high

> **Claim 7**: Struktur BOM di SAP S/4HANA = BOM header + BOM item, dengan base quantity di header.
> **Number/specific**: "A BOM consists of a BOM header and BOM items. The base quantity in the header specifies the quantity of the finished product on which the item quantities are based." Header memuat pengaturan untuk seluruh BOM (BOM usage menentukan aplikasi bisnis; status mengontrol aktif/tidaknya BOM untuk aplikasi tertentu, mis. MRP); komponen dicatat sebagai item.
> **Source**: SAP Learning, "Explaining Master Data in Supply Chain Planning", https://learning.sap.com/courses/exploring-advanced-production-planning-with-sap-s-4hana-pp-ds/explaining-master-data-in-supply-chain-planning-1 , akses 2026-07-06.
> **Confidence**: high

> **Claim 8**: BOM dibaca banyak proses sekaligus (master data lintas fungsi).
> **Number/specific**: "BOMs are used in material requirements planning, production, procurement, and for product costing." — 4 proses inti; dasar untuk poin "kesalahan satu baris menjalar ke semuanya".
> **Source**: SAP Learning, URL sama dengan Claim 7, akses 2026-07-06.
> **Confidence**: high

> **Claim 9**: MRP meng-explode BOM (relasi secukupnya — 2–3 kalimat di artikel).
> **Number/specific**: MRP "explodes BOMs to determine economical order quantities at a particular point in time"; low-level code dipakai MRP untuk menentukan urutan perencanaan material. Selaras Claim 5 (ASCM).
> **Source**: SAP Learning, "Introducing Bills of Material (BOMs)", URL di Claim 6, akses 2026-07-06.
> **Confidence**: high

> **Claim 10**: EBOM vs MBOM (sumbu fungsi dokumen).
> **Number/specific**: EBOM merepresentasikan produk **as-designed** — disusun tim engineering dari data desain/CAD, memuat spesifikasi dan toleransi. MBOM merepresentasikan produk **as-manufactured**: semua part dan rakitan untuk menghasilkan produk siap kirim, TERMASUK kemasan dan urutan perakitan/proses. Satu produk lazim punya keduanya (2 dokumen paralel). Inilah yang sehari-hari disebut "BOM produksi" (supporting keyword, FAQ #1).
> **Source**: PTC, "eBOM vs. mBOM vs. sBOM" (https://www.ptc.com/en/blogs/plm/ebom-vs-mbom-vs-sbom) + Arena Solutions, "What is an Engineering Bill of Materials (EBOM)?" (https://www.arenasolutions.com/resources/articles/engineering-bom/), akses 2026-07-06.
> **Confidence**: high untuk konsep as-designed/as-manufactured; medium untuk detail atribusi — sumbernya vendor PLM ternama, BUKAN ASCM/SAP. Tulis sebagai praktik industri tanpa sitasi inline; sitasi inline artikel tetap ASCM + SAP.

> **Claim 11**: Konsistensi aritmetika tabel contoh (ilustrasi buatan sendiri — bukan data eksternal).
> **Number/specific**: base quantity 1 unit kursi kantor; roda kastor 5 pcs/unit; baut M8 4 pcs/unit; kain pelapis 0,8 m²/unit → order 100 kursi = 500 roda kastor, 400 baut M8, 80 m² kain. Dicek: 100×5=500 ✓, 100×4=400 ✓, 100×0,8=80 ✓.
> **Source**: kalkulasi internal; WAJIB berlabel "ilustrasi" di artikel.
> **Confidence**: high (aritmetika), dengan syarat label ilustrasi terpasang.

> **Claim 12**: Fakta Soltius untuk positioning line Kesimpulan.
> **Number/specific**: SAP Platinum Partner melalui keanggotaan United VARs; berpengalaman sejak 1998; 200+ konsultan; pengalaman industri manufaktur mencakup Automotive, Consumer Products, Mill Products. Framing: mengimplementasikan dan mendampingi (BUKAN membuat) SAP.
> **Source**: knowledge_base/company_profile.md (pre-approved).
> **Confidence**: high

## Solution focus + Soltius anchor

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Konsep BOM vendor-netral (EBOM/MBOM, single/multi-level, base quantity, kode item) | Claims 1–5, 10 | Snippet + H2 #1–#2 | — (body vendor-neutral) |
| SAP S/4HANA Manufacturing — BOM sebagai master data produksi | BOM header (base quantity) + BOM item; dipakai MRP, produksi, pengadaan, product costing (Claims 7–8) — 1–2 kalimat SAJA di akhir H2 #3 | Akhir H2 #3 | Implementasi SAP + pengalaman industri manufaktur (Automotive, Consumer Products, Mill Products); positioning line di Kesimpulan; soft CTA soltius.co.id baris terakhir |

Reminder batch: **maksimal 2 mention Soltius** (1 positioning line Kesimpulan + 1 soft CTA), tanpa aside Soltius di body. Soltius mengimplementasikan/mendampingi — tidak pernah "membuat" SAP.

## Authoritative external sources (untuk sitasi inline artikel — pilih 1–2)

1. **ASCM Supply Chain Dictionary, 18th edition (ASCM/APICS)** — https://www.ascm.org/learning-development/certifications-credentials/dictionary/ — *what it backs*: definisi BOM, single-level vs multilevel/indented BOM, BOM explosion (Claims 1–5). Sebut "ASCM Supply Chain Dictionary edisi ke-18" — JANGAN "ke-19".
2. **SAP Learning — "Introducing Bills of Material (BOMs)" (SAP official)** — https://learning.sap.com/courses/exploring-basic-data-for-manufacturing-and-product-management-in-sap-s-4hana/introducing-bills-of-material-boms- — *what it backs*: BOM header/item + base quantity, penggunaan BOM oleh MRP/produksi/pengadaan/costing, MRP explode BOM (Claims 6–9).

(Cadangan konsep EBOM/MBOM — TIDAK untuk sitasi inline: PTC & Arena Solutions, lihat Claim 10.)

## FAQ Q&As (2–3, Bahasa Indonesia — jawaban 30–60 kata, 1 fakta/angka per jawaban)

### Apa itu BOM produksi?
BOM produksi adalah sebutan sehari-hari untuk Manufacturing BOM (MBOM): daftar material sebagaimana produk benar-benar dibuat di lantai produksi, termasuk kemasan dan urutan perakitan. MBOM berbeda dari Engineering BOM (EBOM) yang menggambarkan produk sebagaimana dirancang; satu produk lazim memiliki dua dokumen paralel ini. *(42 kata; fakta: 2 dokumen paralel)*

### Apa perbedaan single-level dan multi-level BOM?
Single-level BOM hanya menampilkan satu tingkat: produk jadi beserta komponen langsungnya. Multi-level (indented) BOM menampilkan seluruh struktur bertingkat Level 0-1-2 dan seterusnya, mengikuti sub-assembly sampai bahan baku terbawah, seperti contoh kursi kantor dengan 8 baris pada tabel di atas. *(40 kata; fakta: Level 0-1-2, 8 baris)*

### Apa hubungan BOM dengan MRP?
BOM adalah salah satu input utama MRP (Material Requirements Planning). Sistem MRP meng-explode struktur BOM dari jadwal produksi untuk menghitung kebutuhan tiap komponen per level; misalnya, order 100 kursi kantor pada contoh di atas diterjemahkan menjadi kebutuhan 500 roda kastor dan 400 baut M8. *(44 kata; fakta: 100 → 500/400. STOP di explode — jangan masuk netting/lotting)*

## Data tables for the writer

### Tabel 1 — Jenis BOM pada dua sumbu (H2 #1)

| Jenis | Isi | Siapa memakai / kapan |
|---|---|---|
| Engineering BOM (EBOM) | Produk sebagaimana **dirancang**: struktur dari gambar teknik/CAD, spesifikasi desain | Tim engineering/R&D, saat desain produk |
| Manufacturing BOM (MBOM) | Produk sebagaimana **dibuat**: komponen aktual + material kemasan + urutan perakitan | Lantai produksi, PPIC; inilah "BOM produksi" |
| Single-level BOM | Satu tingkat: produk jadi + komponen langsungnya | Produk rakitan sederhana, tanpa sub-assembly |
| Multi-level (indented) BOM | Bertingkat Level 0-1-2-dst.: produk jadi → sub-assembly → komponen/bahan baku | Standar produk kompleks dengan rakitan antara |

Satu kalimat penutup tabel: varian lain (modular/planning BOM, costed BOM, dsb. — ASCM mendaftar 6 format tampilan) ada untuk kebutuhan khusus; jangan dikatalogkan panjang.

### Tabel 2 — Contoh struktur BOM bertingkat: kursi kantor, base quantity 1 unit (ILUSTRASI — wajib berlabel)

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

Cara baca (untuk jawaban langsung H2 #2): Level 0 = produk jadi; Level 1 = sub-assembly; Level 2 = komponen/bahan baku; semua Qty relatif terhadap base quantity 1 unit di header. Elemen minimum tiap baris: kode item, deskripsi, kuantitas per base quantity, satuan, level — praktik yang disiplin menambah nomor revisi/versi. Perkalian siap pakai: 100 kursi → 500 roda kastor, 400 baut M8, 80 m² kain.

## Edge cases & nuance

- **EBOM ≠ MBOM bukan kesalahan** — keduanya memang dokumen berbeda untuk produk yang sama; masalah muncul saat keduanya tidak disinkronkan setelah revisi desain. Sentuhan praktisi tanpa nama Soltius: "di lapangan, BOM versi engineering dan versi produksi yang tidak sinkron adalah temuan umum saat penataan master data."
- **Honest hedging (1–2 kalimat di H2 #3, bukan H2 sendiri)**: BOM yang tidak dirawat — komponen usang tidak dihapus, revisi tidak diperbarui — membuat MRP, pengadaan, dan costing secanggih apa pun menghasilkan angka yang salah, karena keempat proses itu membaca dokumen yang sama (Claim 8).
- **Komponen berulang di indented BOM**: komponen yang dipakai lebih dari satu parent tampil berulang di setiap sub-assembly (ASCM, Claim 4) — jangan "dirapikan" jadi satu baris di contoh.
- **Industri proses**: BOM bisa bernama formula/resep (Claim 1) — cukup disebut sekilas bila perlu, jangan melebar.

## Flags (open factual risk)

- ⚠️ **Edisi kamus ASCM**: brief menulis "edisi ke-19" — SALAH. Verifikasi 2026-07-06: edisi terbaru adalah **ke-18** (learn.ascm.org, PDF resmi berlabel "EIGHTEENTH EDITION"). Tulis "edisi ke-18" atau tanpa nomor edisi.
- ⚠️ **Angka "X% kesalahan produksi akibat BOM"**: TIDAK ditemukan sumber otoritatif. JANGAN mengutip angka apa pun — cukup kualitatif ("menjalar ke pembelian, stok, dan costing").
- ⚠️ **"MBOM memuat kemasan & urutan perakitan"**: bersumber dari vendor PLM (PTC/Arena), bukan ASCM/SAP. Boleh ditulis sebagai praktik industri, JANGAN diatribusikan ke ASCM/SAP dan jangan dijadikan sitasi inline.
- ⚠️ **URL help.sap.com modern** (ff04c453... "Bills of Material in Production Planning"): halaman ada tetapi kontennya tidak dapat diverifikasi hari ini (render JavaScript). Semua fakta SAP diverifikasi via learning.sap.com (SAP official) — pakai URL learning.sap.com untuk sitasi SAP, bukan help.sap.com.
- ⚠️ **"SAP S/4HANA Manufacturing"**: pakai sebagai anchor funnel per tracker, tetapi jangan mengarang detail modul/fitur di baliknya; fakta yang boleh ditulis hanya Claims 7–9 (BOM header/item, base quantity, 4 proses pengguna). Routing, work center, production order = milik `sap-pp-c01`.
- ⚠️ **Angka "5.406 istilah" ASCM Dictionary edisi ke-18**: berasal dari deskripsi aplikasi/halaman ASCM via snippet pencarian (confidence medium). Boleh dipakai sebagai factlet opsional; bila dipakai, atribusikan ke ASCM; aman juga untuk dihilangkan.
- ⚠️ **Boundary dedup**: relasi BOM→MRP maksimal 2–3 kalimat (explode saja — tanpa netting/lotting/offsetting, MPS, Inventory Status File, MRP II, MRP Live: milik `mrp-c01`); tanpa bedah modul SAP PP (milik `sap-pp-c01`); costing hanya disebut sebagai fungsi (bersinggungan `cara-menghitung-hpp-c01`).

## Definition snippet draft (40–60 kata)

> Ringkasnya: bill of material (BOM) adalah daftar terstruktur seluruh bahan baku, komponen, dan sub-assembly, lengkap dengan kode item, kuantitas, dan satuannya, yang dibutuhkan untuk membuat satu unit produk jadi. BOM menjadi acuan bersama tim desain, produksi, pengadaan, dan keuangan, sekaligus input utama perhitungan kebutuhan material.

*(45 kata; selaras definisi ASCM edisi ke-18 — subassemblies/parts/raw materials + kuantitas per parent assembly — dan definisi SAP; tanpa em-dash agar jatah ≤2 em-dash utuh untuk body.)*

## Internal links (diverifikasi 200/OK, 2026-07-06)

1. **Hub**: https://www.soltius.co.id/id/blog/digital-manufaktur-sistem — LIVE ✓ (judul: "Transformasi Industri: Meningkatkan Efisiensi dengan digital manufacturing system"). Anchor natural: "sistem manufaktur digital" — tempatkan inline di lead.
2. **Cousin**: https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu — LIVE ✓ (judul: "Konsep Warehouse Management System yang Wajib Anda Tahu!"). Anchor natural: "manajemen gudang" / "data persediaan komponen" — tempatkan di H2 #3.

## Angka spesifik inline siap pakai (kebutuhan addendum §4: ≥4)

Level 0/1/2 · base quantity 1 unit · 5 roda kastor · 4 baut M8 · 0,8 m² kain pelapis · 100 kursi → 500 roda kastor (dan 400 baut M8) · 6 format tampilan BOM menurut ASCM · 2 dokumen paralel (EBOM + MBOM) · edisi ke-18 kamus ASCM.
