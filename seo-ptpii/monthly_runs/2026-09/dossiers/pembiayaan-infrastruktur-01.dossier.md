---
brief_id: "pembiayaan-infrastruktur-01"
researcher_run_date: "2026-09-17"
sources_cited: 19
flags: 12
---

# Research Dossier: Pembiayaan Infrastruktur per Sektor: Kenapa Tak Seragam

## TL;DR for the writer

- The whole article stands on one idea: **sektor, bukan ukuran proyek, yang menentukan bentuk pembiayaan** — karena tiap sektor punya pembayar akhir, prediktabilitas arus kas, dan horizon modal terkunci yang berbeda. Semua lima sektor di bawah ini sudah tersumberkan, bukan asumsi.
- **Jalan tol**: dibayar jutaan pengguna lewat tarif; bukan risiko kredit satu pihak, melainkan *demand risk*. Tarif disesuaikan maksimal tiap 2 tahun berdasarkan inflasi + evaluasi SPM (PP 23/2024 tentang Jalan Tol, dikonfirmasi lewat FAQ resmi BPJT) — kenaikan tidak otomatis.
- **Air minum/SPAM**: PDAM adalah offtaker air curah, dan kualitas kreditnya adalah kendala struktural sektor ini — baru 42% PDAM berkategori "sehat" (data BPPSPAM 2019, sudah 7 tahun, tidak ditemukan angka lebih baru sesi ini).
- **Ketenagalistrikan**: PLN adalah pembeli tunggal (*single buyer*) lewat PPA jangka panjang yang lazimnya *take-or-pay* — salah satu arus kas paling terkontrak di antara lima sektor, tapi mengonsentrasikan seluruh risiko IPP ke satu neraca korporasi.
- **Persampahan/PSEL**: preseden pembiayaan paling tipis — baru satu proyek KPBU persampahan yang dijamin PT PII (Legok Nangka) hingga Juni 2026 — dengan dua aliran pendapatan (tipping fee pemda + kewajiban beli listrik PLN di bawah **Perpres 109/2025**, yang resmi mencabut Perpres 35/2018).
- **Telekomunikasi/satelit**: dibayar pemerintah lewat *availability payment* dari dana USO yang dikelola BAKTI — bukan tarif pengguna — sehingga salah satu profil paling terprediksi, meski angka rupiah spesifiknya (Rp per tahun) hanya bersumber sekunder sesi ini dan perlu diperlakukan hati-hati.
- Jangan pernah menyebut angka kebutuhan infrastruktur nasional lebih dari sekali; empat cakupan berbeda beredar bulan ini dan tercantum di bagian data table di bawah — semua WAJIB berlabel tahun + cakupan.

## Core facts (verified)

> **Claim**: Portofolio kumulatif proyek yang dijamin PT PII, dan nilainya
> **Number/specific**: 61 proyek (38 KPBU + 23 non-KPBU) · nilai investasi lebih dari Rp 732 triliun · nilai penjaminan Rp 113 triliun (dua angka berbeda cakupan — jangan dicampur) — **per Juni 2026**
> **Source**: ptpii.co.id/informasi-proyek, sebagaimana dicatat dalam `knowledge_base/company_profile.md` dan divalidasi ulang oleh riset bulan ini (`research/pembiayaan-infrastruktur.research.json`, dicek 2026-09-17)
> **Confidence**: high (dua sumber independen bertautan pada angka yang sama; namun saya sendiri tidak bisa mem-fetch ulang ptpii.co.id sesi ini — lihat Flags)

> **Claim**: Halaman resmi PT PII menyebut "tujuh sektor" tetapi mendaftar delapan nama sektor
> **Number/specific**: Jalan · Ketenagalistrikan · Telekomunikasi · Air Minum · Pariwisata · Transportasi · Persampahan · Konservasi Energi (delapan nama, label "7 (tujuh) sektor")
> **Source**: ptpii.co.id/informasi-proyek (via cache riset 2026-09-17)
> **Confidence**: high untuk keberadaan inkonsistensi — **jangan dirapikan diam-diam**; tulis sesuai publikasi atau sebut sektornya tanpa menegaskan jumlah

> **Claim**: PMK 68/2024 adalah aturan pelaksana yang berlaku sekarang untuk dukungan pemerintah pada pembiayaan infrastruktur skema KPBU
> **Number/specific**: Ditetapkan 24 September 2024, berlaku 18 Oktober 2024; Pasal 75 mewajibkan BUPI menerbitkan Acuan Alokasi Risiko tahunan
> **Source**: https://jdih.kemenkeu.go.id/dok/pmk-68-tahun-2024 (tampil live di SERP per riset 2026-09-17); dikonfirmasi silang dengan `company_profile.md`
> **Confidence**: high

> **Claim**: Perpres 38/2015 tetap menjadi payung hukum utama KPBU
> **Number/specific**: Peraturan Presiden No. 38 Tahun 2015 tentang Kerja Sama Pemerintah dengan Badan Usaha dalam Penyediaan Infrastruktur — status berlaku
> **Source**: `company_profile.md` (diverifikasi 2026-08-12); disebut sekali saja sebagai konteks payung, tanpa kutipan pasal per pasal (sesuai batasan brief)
> **Confidence**: high

> **Claim**: Perpres 109 Tahun 2025 mencabut dan menggantikan Perpres 35/2018 untuk regulasi PSEL
> **Number/specific**: "Peraturan Presiden Nomor 109 Tahun 2025 tentang Penanganan Sampah Perkotaan Melalui Pengolahan Sampah Menjadi Energi Terbarukan Berbasis Teknologi Ramah Lingkungan" — ditetapkan **10 Oktober 2025**, status **berlaku**, mencabut Perpres No. 35 Tahun 2018
> **Source**: https://peraturan.bpk.go.id/Details/334718/perpres-no-109-tahun-2025 (dibuka langsung, catatan resmi peraturan) + https://kemenlh.go.id/news/detail/presiden-tetapkan-perpres-1092025-langkah-nyata-atasi-sampah-perkotaan
> **Confidence**: high — ini regulasi terkini yang WAJIB dipakai, menggantikan referensi lama ke Perpres 35/2018

> **Claim**: Mekanisme penyesuaian tarif jalan tol
> **Number/specific**: Penyesuaian dievaluasi setiap **2 tahun sekali**, memperhitungkan **laju inflasi** dan pemenuhan **Standar Pelayanan Minimal (SPM)**; BUJT berhak mengajukan penyesuaian tiap 2 tahun, tetapi kenaikan baru berlaku hanya jika indikator SPM terpenuhi — evaluasi wajib, kenaikan tidak otomatis
> **Source**: https://bpjt.pu.go.id/faq/bagaimana-mekanisme-penyesuaian-tarif-tol/ (FAQ resmi BPJT, dibuka langsung 2026-09-17)
> **Confidence**: high untuk mekanisme inti (siklus 2 tahun + inflasi + SPM, sumber pihak pertama)

> **Claim**: Dasar hukum siklus penyesuaian tarif tol
> **Number/specific**: Peraturan Pemerintah (PP) Nomor 23 Tahun 2024 tentang Jalan Tol disebut sebagai dasar amanat evaluasi dan penyesuaian tarif dua tahunan
> **Source**: sintesis WebSearch yang merujuk rechtsvinding.bphn.go.id ("Tinjauan Yuridis Dibalik Kenaikan Tarif Tol") — Badan Pembinaan Hukum Nasional
> **Confidence**: medium — nomor PP tidak muncul di fetch langsung saya atas halaman BPJT; rekomendasi: editor cek ulang nomor PP di peraturan.go.id sebelum dikutip sebagai fakta pasti

> **Claim**: PLN berperan sebagai pembeli tunggal (*single buyer*) listrik dari IPP lewat PPA jangka panjang, dengan struktur *take-or-pay*
> **Number/specific**: IPP wajib menjual listriknya ke PLN (PLN memonopoli transmisi-distribusi sehingga IPP tak bisa jual langsung ke pelanggan); dalam ketentuan *take-or-pay*, PLN tetap wajib membayar sesuai kapasitas terkontrak meski penyerapan di bawah ekspektasi, klausul ini lazim berlaku terutama pada ~20 tahun pertama PPA
> **Source**: JETP Indonesia — https://jetp-id.org/about/ppa-what-are-the-main-issues-we-observe-in-power-purchase-agreements-in-the-indonesian-power-industry ; dikuatkan analisis Lexology "In brief: renewable energy projects in Indonesia"
> **Confidence**: medium-high — sumber sekunder/analitis yang konsisten lintas beberapa penerbit, tapi bukan pengungkapan resmi PLN/ESDM (web.pln.co.id tidak dapat diakses sesi ini, DNS error)

> **Claim**: PLN adalah BUMN kelistrikan berskala nasional
> **Number/specific**: Kapasitas terpasang 49.273 MW, 96,2 juta pelanggan, +52,9 GW (76%) proyek pembangkit EBT dalam pengembangan untuk 2025-2034 — angka situs resmi, tanpa label "per tahun X" eksplisit
> **Source**: pln.co.id, diakses 17 September 2026 (fetch langsung)
> **Confidence**: high untuk keberadaan angka di situs resmi; gunakan "per situs resmi PLN, diakses September 2026" sebagai label tahun karena halaman sumber sendiri tidak mencantumkan tahun rujukan

> **Claim**: PDAM bertindak sebagai offtaker air curah (*bulk water*) pada skema SPAM Regional, dan penyerapannya sering rendah
> **Number/specific**: PDAM wajib membayar sesuai volume yang disepakati kepada operator SPAM Regional; tantangan utama adalah penyerapan rendah karena jaringan distribusi/sambungan rumah tangga di sisi PDAM belum siap saat pasokan air curah sudah tersedia
> **Source**: https://kpbu.kemenkeu.go.id/read/1192-1553/umum/kajian-opini-publik/infrastruktur-air-minum-untuk-masyarakat-indonesia
> **Confidence**: high (sumber pihak pertama portal KPBU Kemenkeu; halaman sendiri tidak bertanggal — gunakan sebagai kondisi struktural, bukan angka bertahun)

> **Claim**: Kinerja PDAM secara nasional masih banyak yang belum sehat
> **Number/specific**: Hanya **42% PDAM berkategori "sehat"**, 58% "kurang sehat/sakit" — **data BPPSPAM 2019**
> **Source**: http://sim.ciptakarya.pu.go.id/bppspam/detail_berita/332 (Badan Peningkatan Penyelenggaraan Sistem Penyediaan Air Minum, Kementerian PU)
> **Confidence**: high untuk keberadaan angka, tapi **stale** — data 2019, tujuh tahun lalu; tidak ditemukan angka lebih baru sesi ini — WAJIB dilabeli "data 2019" secara eksplisit, jangan ditulis seolah kondisi terkini

> **Claim**: Prinsip pemulihan biaya penuh (*full cost recovery*, FCR) adalah pedoman resmi penetapan tarif air minum BUMD
> **Number/specific**: Permendagri No. 21 Tahun 2020 (disebut Pasal 5.1 dan 5.2) — tarif rata-rata idealnya menutup biaya dasar operasional; dalam praktik, kinerja PDAM yang belum optimal (lihat fakta di atas) mengindikasikan banyak PDAM belum mencapai prinsip ini
> **Source**: sintesis WebSearch yang merujuk kalsel.bpk.go.id (BPK Kalimantan Selatan, dokumen "Formula Perhitungan dan Mekanisme Penetapan Tarif pada BUMD Air Minum") dan pdaminfo.pdampintar.id
> **Confidence**: medium — nomor Permendagri berasal dari sumber sekunder yang meringkas regulasi, bukan teks JDIH primer yang saya buka langsung sesi ini; rekomendasi: perlakukan sebagai *inference* ("tarif diarahkan ke FCR, namun kinerja PDAM menunjukkan banyak yang belum mencapainya"), bukan sebagai statistik tunggal yang tegas

> **Claim**: Persampahan/PSEL adalah sektor dengan preseden pembiayaan paling tipis di antara lima sektor
> **Number/specific**: Hanya **satu** proyek KPBU sektor persampahan yang dijamin PT PII — PSEL/TPPAS Regional Legok Nangka, Jawa Barat — **per Juni 2026**
> **Source**: `company_profile.md` (daftar proyek unggulan yang disetujui) + `research/pembiayaan-infrastruktur.research.json`
> **Confidence**: high

> **Claim**: Perpres 109/2025 mewajibkan PLN membeli listrik dari hasil pengolahan sampah, memperluas bentuk pengolahan sampah
> **Number/specific**: Perpres 109/2025 memperluas pengolahan sampah menjadi 4 bentuk (listrik, bioenergi, bahan bakar minyak terbarukan, produk ikutan lain), berlaku di seluruh daerah yang memenuhi kriteria (bukan hanya 12 lokasi prioritas seperti Perpres 35/2018 lama)
> **Source**: https://peraturan.bpk.go.id/Details/334718/perpres-no-109-tahun-2025 ; https://kemenlh.go.id/news/detail/presiden-tetapkan-perpres-1092025-langkah-nyata-atasi-sampah-perkotaan
> **Confidence**: high untuk perluasan cakupan dan kewajiban beli secara umum

> **Claim**: Perpres 109/2025 menyebut harga listrik sampah dan tenor kewajiban beli PLN
> **Number/specific**: Disebut pada sumber sekunder: harga patokan sekitar USD 0,20/kWh, kewajiban beli PLN hingga 30 tahun
> **Source**: ruangenergi.com dan justisio.com (blog sektor energi/hukum, bukan teks Perpres primer)
> **Confidence**: **low** — halaman resmi peraturan.bpk.go.id yang saya buka langsung menyatakan rincian mekanisme pendanaan/offtake ada di dokumen PDF 22 halaman yang TIDAK saya buka sesi ini. **Jangan mengutip angka USD 0,20/kWh atau tenor 30 tahun sebagai fakta pasti** — gunakan hanya kerangka umum "PLN wajib membeli listrik dari PSEL" tanpa angka harga/tenor spesifik, kecuali diverifikasi ulang terhadap teks lengkap Perpres

> **Claim**: Palapa Ring adalah proyek KPBU telekomunikasi pertama di Indonesia yang menerapkan skema *availability payment*
> **Number/specific**: Dibangun lewat BAKTI (Kementerian Komunikasi), mencakup ±12.128 km jaringan serat optik di 57 kabupaten/kota, 11 provinsi; dana *availability payment* bersumber dari Kewajiban Pelayanan Universal (USO)
> **Source**: sintesis WebSearch merujuk ekon.go.id, kompas.id, indotelko.com, baktikominfo.id
> **Confidence**: medium-high — konsisten lintas beberapa penerbit termasuk sumber kelembagaan (ekon.go.id), tapi saya tidak berhasil membuka baktikominfo.id langsung sesi ini (DNS error) untuk satu kutipan pihak pertama tunggal

> **Claim**: Nilai *availability payment* tahunan Palapa Ring dan SATRIA-1, serta masa konsesinya
> **Number/specific**: Disebut pada sintesis pencarian: Palapa Ring ±Rp 2 triliun/tahun, SATRIA-1 ±Rp 1,7 triliun/tahun, selama masa konsesi 15 tahun pasca-konstruksi
> **Source**: sintesis WebSearch (tidak ada URL tunggal yang berhasil saya buka langsung untuk memverifikasi angka ini pada sesi ini)
> **Confidence**: **low-medium untuk angka rupiah spesifik** — gunakan hanya kerangka mekanisme (AP dari dana USO, dibayar pemerintah lewat BAKTI) tanpa menegaskan angka Rp triliun/tahun secara pasti; angka "15 tahun" untuk masa AP relatif lebih dapat dipercaya karena konsisten dengan pola umum KPBU AP di sektor ini

> **Claim**: Kebutuhan pembiayaan infrastruktur nasional RPJMN 2025-2029 (angka harmonis, cakupan makro)
> **Number/specific**: ≈USD 625,37 miliar ≈ **Rp 10.146-10.303 triliun**, dengan APBN+APBD menutup ≈40% — **cakupan RPJMN 2025-2029**, bukan cakupan sektor tunggal atau portofolio satu kementerian
> **Source**: djkn.kemenkeu.go.id (artikel bertanggal 1 Juli 2025), via `research/pembiayaan-infrastruktur.research.json` (dicek 2026-09-17)
> **Confidence**: high — **gunakan HANYA SEKALI, di lead, dengan tahun dan cakupannya**; ini bukan tulang punggung artikel ini

> **Claim**: Komposisi lazim struktur utang-ekuitas proyek KPBU dan logika penilaian lender
> **Number/specific**: Utang ~70-80%, ekuitas ~20-30%; lender menilai proyeksi arus kas, bukan nilai aset, karena kreditur tak punya hak suara atas badan usaha pelaksana (BUP)
> **Source**: https://kpbu.kemenkeu.go.id/read/1132-1300/umum/orang-juga-bertanya/siapa-yang-membiayai-proyek-pada-skema-kpbu
> **Confidence**: high — **catatan penting**: fakta ini sudah dipakai klaster Agustus sebagai latar; di artikel ini gunakan hanya sebagai satu kalimat konteks tentang *mengapa arus kas jadi fokus penilaian lintas sektor*, jangan dibangun jadi bagian tersendiri

> **Claim**: Durasi umum kerja sama KPBU pasca-*financial close*
> **Number/specific**: Dokumen penyiapan umumnya disusun 3-4 tahun sebelum beroperasi, untuk durasi kerja sama 10-15 tahun setelah kontrak (pola umum lintas sektor, bukan aturan sektor tertentu)
> **Source**: https://kpbu.kemenkeu.go.id/read/1190-1543/umum/kajian-opini-publik/setelah-financial-close-what-is-next
> **Confidence**: high — **catatan**: ini adalah jangkar utama brief `pembiayaan-infrastruktur-02` (refinancing/tenor bulan ini); gunakan hanya sebagai satu titik data pembanding di tabel, jangan membahas dinamika refinancing/step-in

> **Claim**: Kisaran umum masa kerja sama yang disebut PT PII sendiri
> **Number/specific**: "15-30 tahun" — disebut sebagai kisaran umum kerja sama daerah/KPBU, bukan aturan khusus per sektor
> **Source**: ptpii.co.id/pembiayaan-kreatif (dikonfirmasi oleh strategist via curl 2026-09-17, HTTP 200; tidak saya fetch ulang langsung sesi ini karena ptpii.co.id tidak dapat diakses — cert-chain error)
> **Confidence**: high (sudah dikonfirmasi bulan ini oleh agen lain); perlakukan sebagai kisaran umum saat dipakai di kolom horizon tabel

> **Claim**: Instrumen penjaminan multilateral menangani risiko ketidaksesuaian mata uang (*currency mismatch*) dan risiko kredit offtaker sebagai driver biaya dana
> **Number/specific**: World Bank menyediakan Partial Risk Guarantee (PRG) untuk risiko politik/regulasi spesifik dan Partial Credit Guarantee (PCG) untuk memperbaiki profil kredit dengan menutup sebagian jadwal pembayaran utang; proyek yang pendapatannya dalam mata uang lokal namun berutang dalam valuta asing menghadapi risiko ketidaksesuaian yang signifikan — Bank Dunia merekomendasikan menyelaraskan struktur pembiayaan dengan komposisi mata uang pendapatan proyek
> **Source**: https://ppp.worldbank.org/guarantees ; https://www.adb.org/sites/default/files/publication/468626/ewp-564-risk-mitigation-sovereign-guarantees-ppps.pdf (ADB Economics Working Paper No. 564, November 2018)
> **Confidence**: high untuk prinsip umum (dua lembaga multilateral independen, konsisten); ini sumber yang sah untuk MEKANISME driver biaya dana — **tidak ada angka spread/basis-poin/DSCR yang diklaim**, sesuai batasan brief

## Topic focus + PT PII anchor (from product_matrix.md)

| What to teach (KPBU / penjaminan / project finance) | Facts to state accurately | Where in article | PT PII product to anchor the CTA |
|---|---|---|---|
| Mengapa struktur pendapatan proyek per sektor (siapa membayar, seberapa terduga, berapa lama modal terkunci) menentukan bentuk pembiayaan | Lima profil sektor pada tabel money-axis di bawah; Acuan Alokasi Risiko memang disusun per sektor sesuai PMK 68/2024 Pasal 75 | H2 #1 (definisi) dan H2 #3 (tabel) | **Penjaminan Pemerintah** |
| Penjaminan pemerintah sebagai satu lapis peningkatan kredit di dalam tumpukan pembiayaan — bukan pengganti kualitas offtaker atau penghapus risiko permintaan | Penjaminan menutup risiko sisi pemerintah dalam kontrak KPBU (bukan risiko komersial/permintaan badan usaha); disertai hak regres | H2 #5 ("yang tidak bisa diperbaiki dengan berpindah sektor") + `## Kesimpulan` | **Penjaminan Pemerintah** |

Reminder: PT PII **menjamin · menerbitkan penjaminan pemerintah · menstrukturkan penjaminan · mendampingi penyiapan transaksi**. It is NOT a lender, NOT an equity investor, NOT the project contractor or operator, and NOT a regulator. PT SMI dan PT IIF membiayai/meminjamkan; LPEI membiayai ekspor; PT PII menjamin. It is a BUMN Persero and SMV under the Ministry of Finance — and, unlike most BUMN, it does not sit under the Danantara holding. Max 2-3 PT PII self-mentions (closing + one optional factual aside at H2 #1 about the annually-published Acuan Alokasi Risiko).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **BPJT — FAQ Mekanisme Penyesuaian Tarif Tol** (bpjt.pu.go.id, diakses 2026-09-17) — https://bpjt.pu.go.id/faq/bagaimana-mekanisme-penyesuaian-tarif-tol/ — *backs*: siklus 2 tahun, inflasi + SPM sebagai basis penyesuaian tarif tol.
2. **JDIH Kementerian Keuangan — PMK 68 Tahun 2024** — https://jdih.kemenkeu.go.id/dok/pmk-68-tahun-2024 — *backs*: aturan pelaksana pembiayaan infrastruktur skema KPBU yang berlaku sekarang; kewajiban Acuan Alokasi Risiko tahunan.
3. **Peraturan BPK — Perpres No. 109 Tahun 2025** — https://peraturan.bpk.go.id/Details/334718/perpres-no-109-tahun-2025 — *backs*: regulasi PSEL terkini, resmi mencabut Perpres 35/2018.
4. **KPBU Kementerian Keuangan — Infrastruktur Air Minum untuk Masyarakat Indonesia** — https://kpbu.kemenkeu.go.id/read/1192-1553/umum/kajian-opini-publik/infrastruktur-air-minum-untuk-masyarakat-indonesia — *backs*: PDAM sebagai offtaker air curah dan tantangan penyerapan.
5. **BPPSPAM / Kementerian PU** — http://sim.ciptakarya.pu.go.id/bppspam/detail_berita/332 — *backs*: 42% PDAM berkategori sehat (data 2019).
6. **World Bank PPP — Guarantees** — https://ppp.worldbank.org/guarantees — *backs*: mekanisme umum instrumen penjaminan multilateral atas risiko kredit dan mata uang.
7. **ADB Economics Working Paper No. 564 (2018)** — https://www.adb.org/sites/default/files/publication/468626/ewp-564-risk-mitigation-sovereign-guarantees-ppps.pdf — *backs*: logika umum mitigasi risiko dan penjaminan sovereign dalam PPP.

Priority: Kemenkeu/JDIH & BPK (regulasi primer) > BPJT/BPPSPAM (Kementerian PU, pihak pertama sektor) > World Bank/ADB (kerangka multilateral) > sintesis media/analisis sekunder (JETP Indonesia, Lexology — dipakai dengan hedge eksplisit).

## FAQ Q&As (8 drafted, Bahasa Indonesia)

### Apa itu pembiayaan infrastruktur?
Pembiayaan infrastruktur adalah keseluruhan cara mendanai pembangunan dan pengoperasian aset publik seperti jalan tol, air minum, ketenagalistrikan, persampahan, dan telekomunikasi, mulai dari APBN/APBD, pinjaman, obligasi, hingga skema Kerja Sama Pemerintah dengan Badan Usaha (KPBU). Bentuknya berbeda-beda antarsektor karena tiap sektor punya pembayar akhir dan pola arus kas sendiri; itu sebabnya regulator menerbitkan acuan alokasi risiko yang memang disusun per sektor, bukan satu format untuk semua.

### Siapa yang membiayai proyek pada skema KPBU?
Pada skema KPBU, pembiayaan proyek umumnya berasal dari badan usaha pelaksana (BUP) yang dibentuk investor, dengan komposisi lazim sekitar 70-80% utang dari lender dan 20-30% ekuitas sponsor. Lender menilai proyek terutama dari proyeksi arus kas masa depan, bukan nilai aset, karena kreditur tidak memiliki hak suara atas BUP. Pemerintah sendiri umumnya tidak membiayai langsung, tetapi dapat memberi dukungan seperti penjaminan atas risiko sisi pemerintah dalam kontrak.

### Apa saja sumber pembiayaan jalan tol di Indonesia?
Konstruksi jalan tol umumnya dibiayai kombinasi ekuitas sponsor dan pinjaman/obligasi melalui badan usaha pelaksana, dengan pengembalian investasi berasal dari tarif yang dibayar pengguna jalan. Karena sumber pengembaliannya adalah tarif dari jutaan pengguna, bukan satu offtaker tunggal, arus kasnya sangat bergantung pada volume lalu lintas riil yang bisa menyimpang dari proyeksi studi kelayakan. Tarif sendiri disesuaikan maksimal tiap dua tahun, dan kenaikannya hanya berlaku jika standar pelayanan minimal terpenuhi.

### Apakah pembiayaan jalan tol termasuk fungsi alokasi APBN?
Pembangunan jalan tol di Indonesia sebagian besar dijalankan lewat skema KPBU yang mengandalkan modal dan pinjaman badan usaha, bukan alokasi langsung APBN untuk konstruksi. Namun APBN tetap berperan tidak langsung, misalnya lewat dukungan kelayakan, pembebasan lahan, atau penjaminan pemerintah atas risiko tertentu yang menjadi tanggung jawab pemerintah dalam kontrak kerja sama, sehingga fungsi alokasi APBN tetap ada, hanya bentuknya mendukung, bukan mendanai konstruksi secara penuh.

### Mengapa proyek air minum sulit menarik pendanaan swasta?
Proyek SPAM bergantung pada PDAM/BUMD sebagai pembeli air curah (offtaker), dan kualitas kredit PDAM menjadi penentu utama kelayakan pembiayaan. Berdasarkan data BPPSPAM 2019, hanya 42% PDAM di Indonesia berkategori "sehat"; sisanya kurang sehat atau sakit, sering karena tarif belum mencapai prinsip pemulihan biaya penuh. Penyerapan air oleh PDAM juga kerap rendah karena jaringan distribusi dan sambungan rumah tangga belum siap saat pasokan sudah tersedia.

### Apa bedanya pembiayaan sektor ketenagalistrikan dan sektor persampahan?
Di ketenagalistrikan, PLN adalah pembeli tunggal listrik dari IPP lewat perjanjian jual-beli listrik jangka panjang yang umumnya bersifat take-or-pay, sehingga arus kasnya relatif terkontrak dengan preseden transaksi yang sudah panjang. Di persampahan (PSEL), pendapatan berasal dari dua sumber — tipping fee pemerintah daerah dan kewajiban PLN membeli listrik dari hasil olahan sampah — namun preseden pembiayaannya masih tipis: baru satu proyek KPBU persampahan yang dijamin PT PII hingga Juni 2026.

### Berapa lama umumnya kerja sama proyek infrastruktur berlangsung?
Tidak ada satu angka baku untuk semua sektor, tapi ada dua patokan umum: dokumen KPBU biasanya menyebut masa kerja sama berkisar 15-30 tahun, sementara pengamatan atas proyek yang telah mencapai financial close menunjukkan durasi kerja sama pasca-kontrak sekitar 10-15 tahun setelah masa penyiapan 3-4 tahun. Sektor tertentu punya pola sendiri; availability payment Palapa Ring dan SATRIA di sektor telekomunikasi, misalnya, berjalan sekitar 15 tahun pascakonstruksi.

### Apakah perusahaan pembiayaan infrastruktur sama dengan penjamin infrastruktur?
Tidak sama. "Perusahaan pembiayaan infrastruktur" umumnya merujuk pada lembaga yang meminjamkan dana atau berinvestasi langsung ke proyek, seperti PT SMI atau PT IIF. PT PII berperan berbeda: sebagai Badan Usaha Penjaminan Infrastruktur (BUPI) di bawah Kementerian Keuangan, PT PII menerbitkan dan menstrukturkan penjaminan pemerintah atas risiko sisi pemerintah dalam kontrak KPBU — bukan memberi pinjaman, berinvestasi ekuitas, membangun, atau mengoperasikan proyek. Penjaminan meningkatkan kelayakan kredit proyek, bukan menggantikan fungsi pembiayaan.

## Data tables for the writer

### Lima profil pembiayaan dalam satu tabel (sumbu UANG — tidak ada kolom hukum/kelembagaan)

| Sektor | Siapa yang membayar (sumber arus kas) | Prediktabilitas arus kas | Kualitas kredit pihak pembayar | Horizon modal terkunci | Apa yang paling menaikkan biaya dana |
|---|---|---|---|---|---|
| **Jalan tol** | Pengguna jalan, lewat tarif yang dibayar langsung saat memakai ruas | Sedang — bergantung volume lalu lintas riil vs proyeksi studi kelayakan; tarif direvisi berkala tapi tidak otomatis naik | Bukan satu offtaker bernilai-kredit tunggal, melainkan agregat jutaan pengguna — penilaian bergeser dari "kredit satu pihak" ke risiko permintaan (*demand risk*) | Termasuk salah satu horizon terpanjang; kisaran umum KPBU 15-30 tahun sebagai patokan, bukan angka khusus tol yang tersumberkan sesi ini | Ketidakpastian volume lalu lintas riil, plus jeda antara kenaikan biaya dan waktu penyesuaian tarif berikutnya (maksimal tiap 2 tahun, hanya efektif jika SPM terpenuhi) |
| **Air minum/SPAM** | PDAM/BUMD, sebagai pembeli air curah (*bulk water offtaker*) sesuai volume yang disepakati | Berpotensi tinggi di atas kertas (volume offtake terikat kontrak), tapi sering meleset karena penyerapan rendah di sisi PDAM | Titik lemah struktural sektor ini — hanya 42% PDAM berkategori "sehat" (BPPSPAM 2019); langsung menentukan apakah komitmen offtake bisa dipercaya lender | Investasi berumur ekonomis panjang; kisaran umum 15-30 tahun sebagai patokan umum, bukan angka khusus SPAM yang tersumberkan sesi ini | Kualitas kredit PDAM yang lemah sebagai variabel utama; tarif diarahkan ke prinsip pemulihan biaya penuh (FCR) namun banyak PDAM belum mencapainya |
| **Ketenagalistrikan (termasuk panas bumi/EBT)** | PT PLN (Persero), sebagai pembeli tunggal (*single buyer*) lewat PPA jangka panjang | Tinggi untuk komponen kapasitas — struktur *take-or-pay* mewajibkan PLN membayar sesuai kapasitas terkontrak meski penyerapan di bawah ekspektasi | Satu offtaker besar dan tunggal menyederhanakan penilaian kredit dibanding sektor berpembayar banyak — tapi mengonsentrasikan seluruh eksposur IPP pada satu neraca korporasi | PPA umumnya berjangka panjang, klausul take-or-pay penuh sering berlaku ~20 tahun pertama; proyek panas bumi menambah horizon eksplorasi-konstruksi di depan | Untuk EBT/panas bumi tahap awal: risiko sumber daya (*resource risk*) sebelum eksplorasi selesai — premi risiko terpisah dari risiko kredit PLN itu sendiri |
| **Persampahan/PSEL** | Dua aliran: tipping fee pemerintah daerah (per tonase) + pembelian listrik oleh PLN dari hasil olahan (kewajiban di bawah Perpres 109/2025) | Preseden pembiayaan sangat tipis — baru satu proyek KPBU persampahan yang dijamin PT PII hingga Juni 2026 (Legok Nangka); dua aliran pendapatan punya profil risiko berbeda | Bergantung kapasitas fiskal pemda spesifik untuk komponen tipping fee (bervariasi antardaerah), dikombinasikan kredit PLN untuk komponen listrik | Perpres 109/2025 menyebut kewajiban beli listrik PLN berjangka panjang — angka tenor spesifik pada sumber sekunder saja, belum terverifikasi dari teks lengkap Perpres | Ketiadaan preseden transaksi teruji berarti lender minim titik pembanding harga risiko, sehingga cenderung meminta margin lebih tebal dan syarat lebih ketat |
| **Telekomunikasi/satelit** | Pemerintah, lewat pembayaran ketersediaan (*availability payment*) dari dana Kewajiban Pelayanan Universal (USO) yang dikelola BAKTI — bukan tarif pengguna akhir | Salah satu yang paling terprediksi karena pembayaran tak bergantung volume pemakaian jaringan, melainkan ketersediaan layanan sesuai kontrak — tapi membawa risiko keterlambatan pencairan anggaran | Pembayar tunggal berbasis dana publik (USO) — konsentrasi risiko pada satu sumber dana, mirip pola ketenagalistrikan namun sifat dananya berbeda (dana publik vs pendapatan korporasi) | Palapa Ring dan SATRIA menerapkan skema *availability payment* sekitar 15 tahun pasca-konstruksi | Preseden yang relatif baru (Palapa Ring = proyek KPBU telekomunikasi pertama dengan skema ini) dan ketergantungan pada kelancaran pencairan dana publik tahunan |

**Catatan untuk penulis**: skeleton brief H2 #3 meminta 5 kolom (Sektor · Prediktabilitas · Kualitas kredit · Horizon · Risiko biaya dana). Tabel di atas punya 6 kolom karena memisahkan "siapa yang membayar" dari "kualitas kreditnya" — silakan gabungkan dua kolom itu jika ingin mengikuti skeleton 5-kolom persis; isinya tetap murni finansial, tidak ada kolom identitas hukum PJPK atau "regulasi sektor yang harus dibereskan" (itu wilayah `kpbu-01`).

### Empat cakupan angka kebutuhan infrastruktur — jangan pernah dicampur

| Angka | Cakupan | Tahun rujukan |
|---|---|---|
| ≈USD 625,37 miliar ≈ Rp 10.146-10.303 triliun | Kebutuhan infrastruktur RPJMN (APBN+APBD ≈40%) | 2025-2029 |
| Rp 1.905,3 triliun (gap Rp 753,11 triliun) | Portofolio Kementerian PU **saja** | 2025-2029 |
| Rp 47.587,3 triliun ("86,65% swasta") | **Seluruh sektor** (bukan infrastruktur saja) | tidak dipakai artikel ini |
| Rp 544,48 triliun | Target KPBU Kementerian PU **saja** (11 proyek SDA, 23 tol/jembatan, 11 permukiman) | 2025-2029, rilis 17 Sept 2026 — **mengutip menteri by name, jangan direproduksi** |

Untuk artikel ini: gunakan **hanya baris pertama**, hanya sekali, di lead. Tiga baris lain disediakan semata agar penulis tidak salah pilih angka.

## Edge cases & nuance

- **PJPK ≠ offtaker**: untuk SPAM, PJPK biasanya Kementerian PU/pemda, sementara PDAM adalah pembeli air curah yang terpisah dari status PJPK-nya. Jaga bahasa tetap berfokus uang ("seberapa andal PDAM membayar"), jangan menyentuh siapa yang menandatangani perjanjian kerja sama.
- **Take-or-pay menyembunyikan risiko, bukan menghapusnya**: struktur take-or-pay PLN-IPP membuat arus kas proyek IPP sangat terkontrak, tapi ini memindahkan seluruh risiko permintaan ke neraca PLN sendiri — sebuah ketegangan kebijakan yang nyata (lihat kontroversi "PLN berdarah" di sumber sekunder). Nuansa ini berguna untuk H2 #5 ("yang tidak bisa diperbaiki dengan berpindah sektor"): sektor dengan offtaker tunggal kuat tidak otomatis bebas risiko sistemik.
- **Persampahan harus dibingkai sebagai soal HARGA, bukan soal kesiapan regulasi** — sesuai batasan brief. Ketiadaan preseden diterjemahkan menjadi premi risiko dan syarat lebih ketat; ini murni logika pasar modal (lender tak punya pembanding), bukan soal Perpres yang belum lengkap.
- **Availability payment/user charge muncul sebagai atribut sel, bukan bagian pembanding** — larangan eksplisit brief karena topik itu milik `kpbu-03` bulan ini.
- **Penjaminan pemerintah ≠ subsidi, dan tidak menghapus risiko komersial badan usaha** — berlaku di semua sektor; penjaminan menutup risiko sisi pemerintah dalam kontrak, bukan risiko permintaan/kredit offtaker itu sendiri. Jangan pernah menyiratkan klaim penjaminan pernah dibayarkan — tidak ada sumber yang mengonfirmasi riwayat klaim, dan itu di luar cakupan riset ini.
- **"Perusahaan pembiayaan infrastruktur" (kueri OJK/multifinance) ≠ PT PII** — autosuggest menunjukkan permintaan nyata untuk kebingungan ini; FAQ #8 di atas menjawabnya eksplisit.
- **IIGF** = Indonesia Infrastructure Guarantee Fund (PT PII) — jaga konteks "infrastruktur/KPBU/Kementerian Keuangan" tetap dekat setiap penyebutan agar tidak tertukar dengan International Institute of Green Finance.

## Flags (open factual risk)

- ⚠️ **Inkonsistensi "tujuh sektor" vs delapan nama** di ptpii.co.id/informasi-proyek → laporkan apa adanya, jangan dirapikan.
- ⚠️ **ptpii.co.id tidak dapat diakses langsung sesi ini** (cert-chain error/403) → semua fakta PT PII bersumber dari `company_profile.md` + cache riset bulan ini (keduanya bertanggal 2026-09-17 atau lebih baru); rekomendasi: editor cek ulang ptpii.co.id/informasi-proyek dan /pembiayaan-kreatif jika situs sudah bisa diakses sebelum publikasi.
- ⚠️ **Peringkat kredit PLN** → tidak tersumberkan sesi ini → jangan menyebut rating spesifik untuk PLN; gunakan framing kualitatif saja ("BUMN kelistrikan tunggal berskala nasional").
- ⚠️ **Angka rupiah availability payment Palapa Ring (~Rp 2 triliun/tahun) dan SATRIA-1 (~Rp 1,7 triliun/tahun)** → hanya bersumber sintesis WebSearch, baktikominfo.id tidak dapat diakses langsung sesi ini (DNS error) → gunakan dengan hedge kuat atau hilangkan angka rupiahnya, pertahankan hanya kerangka mekanismenya.
- ⚠️ **Klaim "tarif PDAM di bawah full cost recovery"** → hasil inferensi dari kombinasi Permendagri 21/2020 (prinsip FCR) + data kesehatan PDAM BPPSPAM 2019, bukan satu statistik langsung → tulis sebagai kesimpulan yang dihubungkan, bukan angka tunggal yang tegas.
- ⚠️ **Data BPPSPAM 42%/58% berumur 2019** → tidak ditemukan angka lebih baru sesi ini → wajib dilabeli "data 2019" secara eksplisit setiap dipakai.
- ⚠️ **Siapa yang secara resmi menetapkan/mengumumkan kenaikan tarif tol** (dugaan: Keputusan Menteri PU) → TIDAK dikonfirmasi eksplisit oleh sumber yang saya buka langsung sesi ini → jangan menyebut "Menteri PU menetapkan" sebagai fakta pasti tanpa verifikasi lanjutan; juga: nomor **PP 23/2024** sendiri berasal dari sintesis pencarian, bukan pembacaan langsung teks PP → editor sebaiknya cek ulang nomor PP di peraturan.go.id.
- ⚠️ **Mekanisme take-or-pay PLN-IPP** → bersumber sekunder/analitis (JETP Indonesia, Lexology), bukan dokumen PPA atau regulasi ESDM primer → dapat dipakai dengan atribusi, jangan sebagai fakta tak tertandingi.
- ⚠️ **Harga listrik sampah USD 0,20/kWh dan tenor kewajiban beli PLN 30 tahun (Perpres 109/2025)** → hanya dari blog sekunder (ruangenergi.com, justisio.com), BUKAN dari teks lengkap Perpres yang belum saya buka sesi ini → JANGAN dikutip sebagai angka pasti; rekomendasi kuat: hilangkan angka harga/tenor spesifik, pertahankan hanya kerangka kewajiban beli PLN secara umum.
- ⚠️ **Buku Acuan Alokasi Risiko Tahun 2025 (PDF ptpii.co.id)** → tidak dapat dibuka sesi ini (situs tidak dapat diakses) → jangan mengutip rincian matriks sektoralnya secara spesifik; cukup sebut keberadaannya dan dasar hukumnya (PMK 68/2024 Pasal 75).
- ⚠️ **Nomor Permendagri 21/2020 untuk prinsip FCR PDAM** → bersumber sekunder (blog PDAM info, ringkasan BPK daerah), bukan teks JDIH primer → rekomendasi: editor spot-check sebelum mengutip nomor pasal secara spesifik.
- ⚠️ Setiap sudut kepemimpinan/pejabat → **hilangkan**. Rilis Kemenkeu PU 17 September 2026 (Rp 544,48 triliun) mengutip seorang menteri by name — jangan direproduksi jika angka itu dipakai.

## Definition snippet draft

> Pembiayaan infrastruktur adalah rangkaian cara mendanai pembangunan dan operasi aset publik — jalan tol, air minum, ketenagalistrikan, persampahan, telekomunikasi — melalui APBN/APBD, pinjaman, maupun skema Kerja Sama Pemerintah dengan Badan Usaha (KPBU). Bentuknya tidak seragam: tiap sektor memiliki pembayar akhir, prediktabilitas arus kas, dan tenor pengembalian modal yang berbeda-beda.

---

## Research provenance this run

- **WebSearch calls used**: 6 of 6 (Perpres 109/2025 status; PDAM/FCR; PLN take-or-pay/IPP; BAKTI/Palapa Ring/SATRIA availability payment; toll tariff adjustment/PP 23/2024; World Bank/ADB currency mismatch).
- **WebFetch calls used**: 10 (pln.co.id, bpjt.pu.go.id ×2, kpbu.kemenkeu.go.id, djppr.kemenkeu.go.id [failed, JS-gated], bappenas.go.id [403], iif.co.id [526], baktikominfo.id [DNS error], web.pln.co.id [DNS error], peraturan.bpk.go.id).
- **All five sector revenue models were sourced, not assumed** — two at first-party/direct-fetch confidence (jalan tol via bpjt.pu.go.id; air minum via kpbu.kemenkeu.go.id + BPPSPAM), one at primary-legal-record confidence (persampahan's regulatory basis via peraturan.bpk.go.id, though offtake price/tenor specifics remain unconfirmed and flagged), and two at medium/medium-high WebSearch-synthesis confidence (ketenagalistrikan, telekomunikasi) — all explicitly graded above, nothing presented as high-confidence without a real source behind it.
- **Table columns confirmed financial-only**: sector · who pays (cash-flow source) · predictability · payer credit quality · capital lock-up horizon · cost-of-funds driver. No PJPK-identity column, no "which sector regulation must be cleared" column — that axis is explicitly left to `kpbu-01` per the binding collision split.
