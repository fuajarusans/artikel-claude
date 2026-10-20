---
brief_id: "perusahaan-lng-indonesia-01"
researcher_run_date: "2026-09-17"
sources_cited: 14
flags: 8
---

# Research Dossier: Cara Menghitung Biaya Total (TCO) LNG untuk Pabrik: Metode + Contoh

## TL;DR for the writer

- **Jangan pakai satu angka harga LNG sebagai "harga yang akan dibayar pabrik."** ESDM memangkas harga LNG industri ke **US$13/MMBTU efektif 29 Juni 2026** — tapi ini HANYA untuk industri non-HGBT yang terdampak defisit pasokan pipa, terutama di **Jawa Barat**. Di luar kriteria itu harga pasar LNG regas bisa **US$17–22/MMBTU**, dan 7 sektor HGBT membayar **US$6,5–7/MMBTU**. Tiga rezim harga berbeda, jangan digabung jadi satu angka.
- **Struktur landed cost yang bisa dipertanggungjawabkan**: molekul/FOB (formula slope × ICP, contoh ilustrasi slope ~14%) → likuifaksi → logistik (ISO tank/virtual pipeline) → regasifikasi (vaporizer/SRU) → capex+O&M tangki kriogenik on-site → losses boil-off gas → alokasi take-or-pay → margin distributor hilir. **Angka rupiah spesifik untuk komponen logistik/regas/distribusi/capex TIDAK ada sumber resmi Indonesia yang bisa dikutip** — sajikan sebagai kerangka hitung, bukan tabel harga tetap.
- **Worked example 5-tahun harus dibangun di atas dua base price yang terverifikasi (HGBT vs non-HGBT), dengan baris capex/O&M/logistik ditandai "[diisi dari penawaran penyedia]"** — jangan mengisi placeholder itu dengan angka karangan.
- **Peran LNG PGN Gagas: operator LNG Hub + penyalur hilir (downstream), BUKAN produsen/likuifaksi/FSRU/eksportir.** Landing page klien sendiri memakai frasa "pionir dan pemimpin pasar" serta menyinggung ekspor Jepang/Korea/China — **JANGAN diadopsi**, tidak didukung `company_profile.md` dan melanggar blacklist superlatif.
- ISO 45001:2018 yang dimiliki Gagas berlaku untuk **distribusi CNG**, bukan sertifikasi lintas untuk operasi LNG/kriogenik — jangan diperluas cakupannya di artikel.

## Core facts (verified)

> **Claim**: Kementerian ESDM resmi menurunkan harga gas LNG untuk industri dari US$23 menjadi US$13/MMBTU.
> **Number/specific**: US$13/MMBTU, efektif Senin 29 Juni 2026 (pengumuman Menteri ESDM Bahlil Lahadalia).
> **Source**: CNBC Indonesia, "Pengumuman! Bahlil Resmi Turunkan Harga Gas Industri Jadi US$13/MMBTU" & "Harga Gas LNG Industri Turun Jadi US$13, Berlaku Hari Ini 29 Juni 2026", 29 Jun 2026, https://www.cnbcindonesia.com/news/20260629120913-4-746474/pengumuman-bahlil-resmi-turunkan-harga-gas-industri-jadi-us--13-mmbtu
> **Confidence**: high

> **Claim**: Harga US$13/MMBTU BUKAN harga LNG nasional untuk semua sektor — berlaku dengan kriteria spesifik.
> **Number/specific**: Hanya untuk industri non-HGBT yang terdampak penurunan pasokan gas pipa, dan menurut Bisnis.com secara spesifik berlaku untuk industri di Jawa Barat.
> **Source**: Bisnis.com, "Harga LNG US$13 per MMBtu Hanya Berlaku Untuk Industri di Jawa Barat", 30 Jun 2026, https://ekonomi.bisnis.com/read/20260630/44/1984424/harga-lng-us13-per-mmbtu-hanya-berlaku-untuk-industri-di-jawa-barat ; corroborated by CNBC Indonesia, "Ini Kriteria Industri yang Dapat Harga Gas LNG US$13/MMBTU", 30 Jun 2026.
> **Confidence**: high

> **Claim**: Skema Harga Gas Bumi Tertentu (HGBT) mematok harga gas untuk 7 sektor industri tertentu, dibedakan antara pemanfaatan bahan baku dan bahan bakar.
> **Number/specific**: US$6,5/MMBTU untuk bahan baku, US$7/MMBTU untuk bahan bakar/energi — naik dari US$6/MMBTU pada 2024. Sektor penerima: pupuk, petrokimia, oleochemical, baja, keramik, kaca, sarung tangan karet.
> **Source**: validnews.id, "HGBT Dipatok Naik Jadi US$6,5, Kemenperin: Tak Berdampak Signifikan ke Industri", 30 Jan 2025, https://validnews.id/ekonomi/hgbt-dipatok-naik-jadi-us-kemenperin-tak-berdampak-signifikan-ke-industri ; dikonfirmasi berlanjut oleh Bisnis.com, "Pemerintah Tegaskan Harga Gas HGBT untuk Industri dan Listrik Tidak Naik", 26 Jun 2026, dan Liputan6, "Harga Gas Industri Turun hingga Akhir 2026".
> **Confidence**: high

> **Claim**: Sebelum pemangkasan Juni 2026, harga pasar gas LNG regasifikasi untuk industri jauh lebih tinggi dari HGBT maupun harga gas pipa reguler.
> **Number/specific**: LNG regasifikasi ke konsumen dilaporkan sekitar US$22/MMBTU, dengan harga pasar spot berkisar US$17–19/MMBTU; harga gas pipa reguler disebut sekitar US$9,6/MMBTU sebagai pembanding.
> **Source**: ekonomi.bisnis.com, "Utak-atik Skema Harga Gas Bumi Tertentu (HGBT)", 29 Jun 2026, https://ekonomi.bisnis.com/read/20260629/44/1983899/utak-atik-skema-harga-gas-bumi-tertentu-hgbt
> **Confidence**: medium-high (angka gas pipa US$9,6 hanya muncul di ringkasan agregat pencarian, bukan dari fetch primer langsung — sarankan penulis frasekan sebagai "dilaporkan" bukan angka mutlak)

> **Claim**: PGN pernah menetapkan harga gas regasifikasi untuk menambal defisit pasokan pipa pada kuartal I 2025.
> **Number/specific**: US$16,77/MMBTU, berlaku Januari–Maret 2025, dihitung dari rata-rata ICP September–November 2024, belum termasuk PPN. Menurut Asaki (Asosiasi Aneka Industri Keramik), angka ini disebut sebagai harga gas termahal di Asia Tenggara saat itu.
> **Source**: Kontan, "Harga Gas Regasifikasi Ditetapkan US$16,77 per MMBTU, Ini Penjelasan PGN", Jan 2025, https://industri.kontan.co.id/news/harga-gas-regasifikasi-ditetapkan-us-1677-per-mmbtu-ini-penjelasan-pgn ; Bisnis.com, "PGN Pakai LNG untuk Tambal Defisit Gas Pipa, Harga Gas Dipatok US$16,77 per MMBtu", 6 Jan 2025.
> **Confidence**: high (sebagai data historis Q1 2025 — TIDAK berlaku sebagai harga saat ini, harus dilabel bertanggal)

> **Claim**: Harga FOB gas/LNG lazim dihitung dengan formula "slope" (persentase pengali) terhadap harga minyak acuan.
> **Number/specific**: Contoh perhitungan yang dipublikasikan: asumsi harga minyak US$90/barel dengan slope maksimal 14% menghasilkan FOB gas US$12,6/MMBTU. Untuk pembangkit jauh dari sumber gas, harga gas di Indonesia bisa memakai formula maksimal 14% dari ICP.
> **Source**: Bloomberg Technoz, "Menghitung Harga Gas yang Wajar bagi Industri di Indonesia", 29 Jun 2026, https://www.bloombergtechnoz.com/detail-news/113373/menghitung-harga-gas-yang-wajar-bagi-industri-di-indonesia
> **Confidence**: high untuk konsep & contoh angka bertanggal; **medium** untuk generalisasi "14% = aturan baku semua kontrak" (formula bervariasi per kontrak/skema)

> **Claim**: Konsep "slope" dalam kontrak LNG berbasis minyak (oil-linked) adalah standar industri global, bukan hal spesifik Indonesia.
> **Number/specific**: Kontrak LNG jangka panjang era lama umumnya memakai slope 10–15% terhadap harga referensi minyak mentah (mis. JCC — Japan Customs-cleared Crude), ditambah konstanta untuk menutup biaya pengapalan.
> **Source**: Natural Gas Intel, "What does Slope mean for LNG contracts?", https://naturalgasintel.com/glossary/slope-lng-contracts/
> **Confidence**: high (definisi/istilah industri umum)

> **Claim**: Indonesian Crude Price (ICP) resmi bulan Agustus 2026 mengalami kenaikan signifikan dalam waktu singkat.
> **Number/specific**: ICP Agustus 2026 ditetapkan US$89,43/barel (naik US$7,75 dari Juli 2026 sebesar US$81,68/barel), ditetapkan lewat Keputusan Menteri ESDM No. 352.K/MG.03/MEM.M/2026; proyeksi September 2026 berkisar US$83–87/barel.
> **Source**: CNBC Indonesia, "Harga Minyak Mentah RI (ICP) Naik US$89,43/Barel, Ini Pemicunya", 11 Sep 2026, https://www.cnbcindonesia.com/news/20260911074616-4-767076/harga-minyak-mentah-ri--icp--naik-us--8943-barel-ini-pemicunya ; ANTARA News, 12 Sep 2026.
> **Confidence**: high (angka resmi dengan nomor Kepmen)

> **Claim**: Take-or-pay adalah klausul kontrak jual-beli gas jangka panjang yang mewajibkan pembeli membayar volume minimum meski tidak diserap penuh.
> **Number/specific**: Definisi: pembeli (offtaker) wajib membayar volume minimum yang disepakati terlepas dari volume yang benar-benar diambil, untuk memberi kepastian pendapatan (revenue certainty) bagi penjual/pemasok. Isu relaksasi take-or-pay pernah mengemuka saat produksi/serapan industri turun.
> **Source**: Kontan, "Produksi dan serapan mini, pembeli gas minta relaksasi take or pay", https://industri.kontan.co.id/news/produksi-dan-serapan-mini-pembeli-gas-minta-relaksasi-take-or-pay ; kajian hukum "Kedudukan Hukum Klausul Take Or Pay dalam Perjanjian Jual Beli Gas Alam", jicnusantara.com, https://jicnusantara.com/index.php/jicn/article/download/5597/5685/31377
> **Confidence**: high (konsep kontraktual umum, konsisten lintas sumber)

> **Claim**: Boil-off gas (BOG) — penguapan alami LNG akibat perpindahan panas ke tangki — memiliki laju yang bervariasi menurut desain dan skala tangki penyimpanan.
> **Number/specific**: Tangki besar full containment berinsulasi baik: ~0,03–0,05% volume/hari. Tangki double-wall: ~0,05–0,08%/hari. ISO tank/kontainer kriogenik kecil (relevan untuk distribusi beyond-pipeline): ~0,1–0,3%/hari — lebih tinggi karena rasio heat-ingress terhadap volume lebih besar.
> **Source**: Midstream Calculator, "Boil-Off Gas (BOG) Fundamentals — LNG Storage & Loading", https://midstreamcalculator.com/engineering/gas-processing/bog-calculator-fundamentals.html ; Gaseschina, "LNG Boil-Off Gas Rate: Formula, Calculation & Control", https://www.gaseschina.com/lng-boil-off-gas-rate/
> **Confidence**: medium (literatur teknis kriogenik internasional/generik, bukan data terukur spesifik Indonesia — pakai sebagai rentang ilustratif, bukan janji kinerja)

> **Claim**: JKM (Japan Korea Marker) adalah acuan harga spot LNG kawasan Asia Timur Laut.
> **Number/specific**: JKM adalah asesmen harga S&P Global Platts untuk kargo LNG spot fisik, dipakai sebagai referensi/indeksasi kontrak spot hingga jangka panjang; merefleksikan nilai pasar kargo DES (delivered ex-ship) ke Jepang, Korea Selatan, Tiongkok, dan Taiwan.
> **Source**: S&P Global, "Platts JKM (Japan Korea Marker) LNG Price Assessment", https://www.spglobal.com/energy/en/pricing-benchmarks/assessments/lng/jkm-japan-korea-marker-gas-price-explained
> **Confidence**: high untuk definisi; **level harga spot harian TIDAK dipakai sebagai fakta di dossier ini** (lihat Flags — sumber agregator, bukan fetch primer S&P Global)

> **Claim**: PGN Gagas melakukan pengembangan infrastruktur LNG Hub di Bandung.
> **Number/specific**: Groundbreaking LNG Hub di kawasan Kebonwaru, Bandung pada 5 Agustus 2025; proyeksi kapasitas layanan hingga ~15.000 MMBTU/bulan (~0,5 BBTUD); bermitra dengan PT Nusantara Regas untuk layanan break-bulking, media transportasi LNG (ISO tank/tangki tipe-C), dan gas hasil regasifikasi.
> **Source**: tambang.co.id, "Ini Strategi PGN Gagas Perkuat Layanan Bagi Konsumen Di Bandung", https://www.tambang.co.id/ini-strategi-pgn-gagas-perkuat-layanan-bagi-konsumen-di-bandung ; ruangenergi.com, "PGN Gagas Gunakan Strategi Jitu untuk Perkuat Layanan Gas Bumi di Bandung", https://www.ruangenergi.com/pgn-gagas-gunakan-strategi-jitu-untuk-perkuat-layanan-gas-bumi-di-bandung/
> **Confidence**: medium (dua media niche energi/tambang saling menguatkan angka & tanggal yang sama, tapi bukan rilis resmi PGN Gagas/ESDM yang berhasil diakses langsung — lihat Flags)

> **Claim**: Peran Gagas di rantai LNG adalah operator LNG Hub + penyalur hilir (downstream), bukan produsen/likuifaksi/FSRU/eksportir.
> **Number/specific**: `company_profile.md` hanya mencantumkan **LNG Hub** sebagai infrastruktur (bersama SPBG, Mother Station, MRU) di bawah kategori "penyimpanan gas bumi"; tidak ada klaim fasilitas likuifaksi, FSRU, atau aktivitas ekspor. Kedua artikel media di atas (tambang.co.id, ruangenergi.com) menggambarkan Gagas sebagai pengembang infrastruktur & operator layanan, dengan regasifikasi aktual dilakukan mitra (PT Nusantara Regas) — konsisten dengan framing "distributor hilir yang mengoperasikan LNG Hub", bukan "perusahaan LNG" penuh.
> **Source**: `knowledge_base/company_profile.md` (internal, pre-approved) + tambang.co.id & ruangenergi.com (di atas).
> **Confidence**: high untuk batasan/restriksi framing; medium untuk detail operasional spesifik (lihat Flags)

> **Claim**: Sertifikasi ISO 45001:2018 milik Gagas secara eksplisit dicatat untuk layanan distribusi CNG, bukan operasi LNG/kriogenik.
> **Number/specific**: "ISO 45001:2018 — Occupational Health & Safety Management System, untuk layanan distribusi CNG (2025)."
> **Source**: `knowledge_base/company_profile.md`
> **Confidence**: high (fakta pre-approved internal — JANGAN diperluas cakupannya ke LNG tanpa verifikasi tambahan)

> **Claim**: Nilai kalor solar/diesel dapat dikonversi ke satuan MMBTU untuk membandingkan biaya dengan gas secara setara energi.
> **Number/specific**: Referensi rekayasa umum: diesel/petro-diesel ≈ 130.500 Btu/galon (≈ 36,4 MJ/liter, densitas rata-rata 0,84 g/ml) → setara ≈ 0,035 MMBTU/liter (perhitungan turunan, bukan angka resmi Indonesia).
> **Source**: NC State Extension, "Conversion Factors for Bioenergy", https://content.ces.ncsu.edu/conversion-factors-for-bioenergy
> **Confidence**: medium (nilai kalor generik internasional untuk diesel murni; Biosolar Indonesia mengandung campuran biodiesel — nilai kalor riil bisa sedikit berbeda, tidak ada angka resmi Biosolar B40 yang terverifikasi dalam riset ini)

## Solution focus + PGN Gagas anchor (from product_matrix.md)

| What to teach (gas-bumi/CNG/LNG tech) | Facts to state accurately | Where in article | PGN Gagas service/credential to anchor CTA |
|---|---|---|---|
| Metodologi TCO/landed cost LNG (molekul→FOB→logistik→regasifikasi→capex on-site→O&M→boil-off→take-or-pay→margin), vendor-neutral | HGBT US$6,5–7/MMBTU (7 sektor, per Jan 2025–Jun 2026); LNG kriteria khusus US$13/MMBTU (efektif 29 Jun 2026, non-HGBT, terutama Jabar); referensi historis regas PGN US$16,77/MMBTU (Q1 2025); formula FOB slope ~14% × ICP; ICP Agustus 2026 = US$89,43/barel | H2 #2 (komponen biaya), H2 #3 (formula & contoh angka) | Mid-article aside singkat saat membahas komponen distribusi hilir: penyalur hilir seperti PGN Gagas (anak usaha PGN, Subholding Gas Pertamina) menanggung tahap logistik & regasifikasi terakhir sampai ke titik pelanggan |
| Worked example TCO 5 tahun + biaya tersembunyi (boil-off, take-or-pay, sensitivitas ICP/kurs) | Boil-off ISO tank kecil ~0,1–0,3%/hari (literatur teknis internasional); take-or-pay = komitmen volume minimum; ICP berfluktuasi signifikan bahkan bulanan (+9,5% Jul→Ags 2026) | H2 #4 (tabel worked example), H2 #5 (biaya tersembunyi) | Tidak perlu self-mention tambahan di sini — biarkan tabel & metodologi berbicara vendor-neutral |
| Closing: siapa yang bisa membantu transparansi biaya sampai titik pakai | Gagas mengoperasikan **LNG Hub** (mis. pengembangan di Bandung, groundbreaking Agu 2025) dan menyalurkan CNG/LNG via **Gaslink** ke industri & komersial beyond-pipeline, sebagai bagian ekosistem PGN/Subholding Gas Pertamina — **bukan** produsen/likuifaksi/FSRU/eksportir | Closing / CTA | LNG Hub + Gaslink sebagai anchor; CTA lunak ke gagas.co.id setelah kesimpulan |

**Guardrail eksplisit untuk penulis**: JANGAN pakai "pionir", "pemimpin pasar", atau menyinggung ekspor LNG ke Jepang/Korea/China saat memframe Gagas — frasa ini ada di landing page klien tapi TIDAK didukung `company_profile.md` dan melanggar blacklist superlatif pipeline ini. Maksimal 2–3 self-mention (idealnya: 1 aside di H2 #2 + closing/CTA).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **CNBC Indonesia, 29 Jun 2026** — https://www.cnbcindonesia.com/news/20260629120913-4-746474/pengumuman-bahlil-resmi-turunkan-harga-gas-industri-jadi-us--13-mmbtu — *backs*: penurunan resmi harga LNG industri ke US$13/MMBTU oleh Menteri ESDM.
2. **CNBC Indonesia, 11 Sep 2026** — https://www.cnbcindonesia.com/news/20260911074616-4-767076/harga-minyak-mentah-ri--icp--naik-us--8943-barel-ini-pemicunya — *backs*: ICP resmi Agustus 2026 (US$89,43/barel) via Kepmen ESDM No. 352.K/MG.03/MEM.M/2026 — dasar formula FOB slope.
3. **validnews.id, 30 Jan 2025** — https://validnews.id/ekonomi/hgbt-dipatok-naik-jadi-us-kemenperin-tak-berdampak-signifikan-ke-industri — *backs*: harga HGBT US$6,5–7/MMBTU untuk 7 sektor industri.
4. **Kontan (industri.kontan.co.id), Jan 2025** — https://industri.kontan.co.id/news/harga-gas-regasifikasi-ditetapkan-us-1677-per-mmbtu-ini-penjelasan-pgn — *backs*: harga gas regasifikasi PGN US$16,77/MMBTU sebagai referensi historis.
5. **Bloomberg Technoz, 29 Jun 2026** — https://www.bloombergtechnoz.com/detail-news/113373/menghitung-harga-gas-yang-wajar-bagi-industri-di-indonesia — *backs*: metodologi formula FOB slope × harga minyak.
6. **S&P Global (Platts JKM explainer)** — https://www.spglobal.com/energy/en/pricing-benchmarks/assessments/lng/jkm-japan-korea-marker-gas-price-explained — *backs*: definisi JKM sebagai benchmark harga spot LNG regional.

Priority order used: ESDM (via pemberitaan resmi bernomor Kepmen) > PGN official-adjacent (Kontan/Bisnis.com melaporkan pernyataan PGN) > S&P Global (analis/lembaga energi internasional) > pemberitaan energi tepercaya lainnya (Bloomberg Technoz, validnews.id).

## FAQ Q&As (5–8 drafted, Bahasa Indonesia)

### Berapa kisaran harga LNG per MMBTU untuk industri di Indonesia saat ini?

Per Juni 2026, Kementerian ESDM menurunkan harga gas LNG untuk industri tertentu menjadi US$13/MMBTU (dari US$23), tapi ini hanya berlaku bagi industri non-HGBT yang terdampak defisit pasokan gas pipa, terutama di Jawa Barat. Di luar kriteria itu, harga LNG regasifikasi pasar bisa mencapai US$17–22/MMBTU, sementara 7 sektor penerima HGBT membayar US$6,5–7/MMBTU. Angka-angka ini bisa berubah — selalu verifikasi ke penyedia dan ESDM sebelum kontrak.

### Apa saja komponen yang menaikkan harga LNG di atas harga gas pipa?

Harga molekul (FOB, terikat formula slope terhadap harga minyak/ICP) hanyalah dasar. Di atasnya bertumpuk biaya likuifaksi, logistik pengangkutan (kapal/ISO tank/virtual pipeline), regasifikasi (vaporizer/SRU), capex dan O&M tangki kriogenik on-site di lokasi pelanggan, losses akibat boil-off gas selama penyimpanan, serta margin distributor hilir. Sebagai perbandingan historis, harga gas regasifikasi PGN sempat ditetapkan US$16,77/MMBTU (Januari–Maret 2025) — jauh di atas harga gas pipa reguler.

### Bagaimana cara cepat mengestimasi penghematan konversi dari solar ke gas?

Bandingkan biaya per satuan energi (Rupiah/MMBTU setara), bukan Rupiah/liter versus dolar/MMBTU secara langsung — solar perlu dikonversi ke MMBTU berdasarkan nilai kalornya (diesel murni ≈ 0,035 MMBTU/liter menurut referensi rekayasa umum) sebelum dibandingkan dengan landed cost gas. Setelah itu, masukkan selisih capex (retrofit burner, tangki on-site) dan O&M ke perhitungan payback. Karena harga solar dan gas sama-sama fluktuatif, gunakan estimasi konservatif dan minta simulasi tertulis dari penyedia gas.

### Apa itu take-or-pay dan bagaimana pengaruhnya ke biaya total?

Take-or-pay adalah klausul dalam perjanjian jual-beli gas jangka panjang yang mewajibkan pembeli membayar volume minimum yang disepakati, meski volume gas yang benar-benar diserap lebih rendah. Klausul ini memberi kepastian pendapatan bagi pemasok, tapi bagi pembeli industri artinya ada risiko biaya tetap saat produksi atau permintaan turun. Saat menghitung TCO, alokasikan komitmen take-or-pay sebagai biaya minimum tahunan, bukan sekadar estimasi pemakaian aktual.

### Berapa lama payback investasi infrastruktur LNG on-site?

Tidak ada angka baku publik untuk payback infrastruktur LNG on-site (tangki kriogenik + vaporizer) di Indonesia — lamanya sangat bergantung pada volume konsumsi, skema komersial (capex ditanggung pelanggan atau dibundel penyedia), lokasi, dan selisih harga terhadap bahan bakar lama. Karena itu, minta simulasi payback tertulis dari calon penyedia berdasarkan profil konsumsi aktual pabrik Anda, alih-alih mengandalkan estimasi generik pihak ketiga.

### Apakah boil-off gas termasuk biaya yang saya tanggung?

Ya, dalam praktiknya boil-off gas (BOG) — penguapan alami LNG akibat perpindahan panas ke tangki — lazim dibebankan sebagai bagian dari biaya penyimpanan dan penanganan. Pada sistem ISO tank/kontainer kriogenik kecil yang umum dipakai untuk distribusi beyond-pipeline, laju penguapan menurut literatur teknis kriogenik berkisar 0,1–0,3% volume per hari — lebih tinggi dibanding tangki besar berinsulasi penuh (0,03–0,05%/hari). Pastikan kontrak menjelaskan siapa yang menanggung losses ini.

### Apa bedanya harga LNG dan harga gas HGBT?

HGBT (Harga Gas Bumi Tertentu) adalah harga gas kebijakan yang dipatok pemerintah — sekitar US$6,5/MMBTU untuk bahan baku dan US$7/MMBTU untuk bahan bakar — khusus bagi tujuh sektor industri tertentu (pupuk, petrokimia, oleochemical, baja, keramik, kaca, sarung tangan karet). Harga LNG mengikuti mekanisme pasar/formula FOB plus rantai biaya hilir, sehingga bisa jauh lebih mahal — pabrik di luar kriteria HGBT yang bergantung pada LNG regasifikasi membayar harga yang berbeda signifikan, bahkan bisa dua-tiga kali lipat.

### Apa itu TCO (total cost of ownership) LNG?

TCO LNG adalah seluruh biaya yang ditanggung pembeli sepanjang siklus penggunaan gas — bukan hanya harga molekul per MMBTU di kontrak, melainkan juga likuifaksi, logistik, regasifikasi, capex serta O&M infrastruktur on-site, losses boil-off, dan alokasi take-or-pay. Menghitung TCO membantu pembeli industri membandingkan penawaran LNG secara adil dan memprediksi pengeluaran riil selama masa kontrak, biasanya dievaluasi dalam horizon 3–5 tahun.

## Data tables for the writer

### Struktur komponen landed cost LNG (status verifikasi per komponen)

| Komponen | Contoh angka publik | Status verifikasi |
|---|---|---|
| Molekul/FOB | Formula: slope (~14%, contoh publik) × harga minyak acuan (ICP). ICP Agustus 2026 resmi = US$89,43/barel | Terverifikasi (formula + ICP resmi); hasil kalkulasi tetap ilustratif |
| HGBT (jika pabrik masuk 7 sektor) | US$6,5/MMBTU (bahan baku) – US$7/MMBTU (bahan bakar) | Terverifikasi ESDM/Kemenperin, berlaku s.d. akhir 2026 per pernyataan Jun 2026 |
| LNG kriteria khusus (non-HGBT, terutama Jabar) | US$13/MMBTU, efektif 29 Jun 2026 | Terverifikasi; **TIDAK berlaku nasional/semua sektor** |
| Referensi historis: harga regas PGN | US$16,77/MMBTU (Jan–Mar 2025) | Terverifikasi, tapi sudah kedaluwarsa — hanya untuk konteks tren |
| Referensi pasar sebelum pemangkasan Jun 2026 | US$17–22/MMBTU | Terverifikasi sebagai konteks, sumber tunggal |
| Logistik (ISO tank/trucking/virtual pipeline) | Tidak ada angka resmi publik Indonesia | **Tidak terverifikasi** — wajib minta penawaran penyedia |
| Regasifikasi (vaporizer/SRU di lokasi) | Tidak ada angka publik baku; capex dipengaruhi kapasitas, lokasi, kompleksitas teknologi | **Tidak terverifikasi** — hubungi vendor |
| Distribusi hilir + margin distributor | Tidak ada angka publik | **Tidak terverifikasi** |
| Boil-off gas losses | 0,03–0,05%/hari (tangki besar) hingga 0,1–0,3%/hari (ISO tank kecil) | Terverifikasi literatur teknis kriogenik internasional (bukan data Indonesia) |
| Take-or-pay/demand charge | Konsep umum; besaran % dari volume kontrak bervariasi per negosiasi | Konsep terverifikasi; besaran spesifik tidak dipublikasikan |

### Kerangka worked example TCO 5 tahun (metodologi — bukan penawaran riil)

Asumsi ilustrasi untuk demonstrasi metode (BUKAN angka penawaran): pabrik menengah, konsumsi 3.000 MMBTU/bulan (36.000 MMBTU/tahun), horizon evaluasi 5 tahun.

| Komponen tahunan | Cara hitung | Ilustrasi Tahun 1 | Catatan |
|---|---|---|---|
| Biaya molekul + hilir (landed cost × volume) | Landed cost (US$/MMBTU) × 36.000 MMBTU | Skenario non-HGBT: US$13 × 36.000 ≈ US$468.000/tahun. Skenario HGBT (jika masuk 7 sektor): US$6,5–7 × 36.000 ≈ US$234.000–252.000/tahun | Dua skenario dari sumber ESDM 2026, berlaku untuk kriteria/sektor berbeda — jangan dicampur |
| Capex tangki kriogenik + vaporizer on-site | Sesuai penawaran vendor (sekali di awal atau disusutkan) | [diisi dari penawaran penyedia] | Tidak ada angka publik baku Indonesia |
| O&M tahunan | % dari capex atau kontrak servis | [diisi dari penawaran penyedia] | idem |
| Losses boil-off gas | Volume × rate BOG × harga | Terakumulasi dari rate ~0,1–0,3%/hari (ISO tank kecil) | Rate dari literatur teknis internasional, bukan data terukur Indonesia |
| Alokasi take-or-pay (jika volume aktual < komitmen) | (volume komitmen − volume aktual) × harga | [diisi dari klausul kontrak spesifik] | Konsep terverifikasi; besaran negosiasi per kontrak |
| **Total TCO Tahun 1** | Jumlah baris di atas | Bervariasi signifikan tergantung skenario harga & skema capex | — |
| **Proyeksi 5 tahun** | Total tahunan × 5, sesuaikan eskalasi & indeksasi kontrak | — | ICP historis fluktuatif tinggi (naik 9,5% dari Jul ke Ags 2026 saja) → gunakan skenario sensitivitas (rendah/dasar/tinggi), bukan angka tunggal |

## Edge cases & nuance

- **Jangan generalisasi harga US$13/MMBTU** — ini kriteria khusus (non-HGBT, defisit pipa, terutama Jawa Barat), bukan harga LNG nasional untuk semua sektor/wilayah.
- Mayoritas industri Indonesia **tidak** masuk 7 sektor HGBT — buyer di luar daftar itu membayar harga LNG pasar yang bisa dua-tiga kali lipat lebih mahal daripada HGBT.
- Landed cost sangat sensitif terhadap **jarak dari LNG Hub/titik regasifikasi**, **volume konsumsi** (skala ekonomi), dan **skema komersial** (capex ditanggung pelanggan vs dibundel penyedia) — tidak ada satu angka landed cost yang berlaku universal.
- Angka boil-off gas yang dikutip bersumber dari literatur teknis kriogenik internasional, **bukan data terukur spesifik Indonesia** — sajikan sebagai rentang ilustratif, bukan janji kinerja produk tertentu.
- TCO LNG bisa **lebih mahal** daripada bahan bakar lama ketika: volume konsumsi terlalu kecil untuk menjustifikasi capex on-site, komitmen take-or-pay melebihi kebutuhan riil pabrik, atau lokasi jauh dari infrastruktur distribusi (biaya logistik naik tajam).
- ICP dan kurs USD/IDR sama-sama bergerak signifikan bahkan dalam hitungan bulan (ICP naik 9,5% dari Juli ke Agustus 2026) — worked example 5 tahun sebaiknya memakai skenario sensitivitas, bukan proyeksi linear tunggal.
- Untuk volume kecil/jarak pendek, CNG via ISO tank/GTM kerap lebih ekonomis daripada infrastruktur LNG on-site skala penuh — relevan untuk cross-link ke klaster "Perusahaan CNG Indonesia", tapi ini prinsip umum, bukan klaim bernilai numerik spesifik.
- Harga solar/Biosolar industri (bulk/kontrak B2B, bukan harga retail SPBU) **tidak berhasil diverifikasi dengan angka tunggal yang konsisten** dalam riset ini — jangan cantumkan angka Rupiah/liter solar industri tanpa verifikasi tambahan ke Pertamina Patra Niaga.

## Flags (open factual risk)

- ⚠️ **Harga LNG US$13/MMBTU (29 Jun 2026)**: berlaku untuk kriteria sangat spesifik (non-HGBT, defisit pasokan pipa, dilaporkan terutama Jawa Barat). Risiko: penulis menggeneralisasi sebagai "harga LNG industri nasional." → Rekomendasi: selalu sertakan kriteria + tanggal setiap kali angka ini disebut.
- ⚠️ **HGBT US$6,5–7/MMBTU**: dikonfirmasi dari laporan Jan 2025 dan pernyataan berlanjut Jun 2026, tapi kebijakan HGBT historisnya diperbarui berkala lewat regulasi (Permen/Kepmen ESDM) yang bisa berubah kapan saja. → Rekomendasi: atribusikan ke ESDM/Kemenperin dengan frasa "per [bulan] 2026" dan hindari menyebutnya sebagai harga permanen.
- ⚠️ **Komponen biaya per MMBTU (logistik ~US$0,3, regas ~US$0,5, distribusi ~US$0,5, margin ~US$1)** yang tercantum di brief/cache riset strategist **TIDAK berhasil diverifikasi ulang** di run ini — artikel Bloomberg Technoz yang dirujuk hanya memuat angka FOB slope (US$12,6/MMBTU), bukan breakdown lengkap tersebut. → Rekomendasi: JANGAN sajikan angka-angka ini sebagai data resmi Indonesia; jika tetap dipakai, labeli eksplisit "ilustrasi generik industri global, perlu verifikasi ke penyedia" — atau lebih aman, drop dan gunakan kerangka komponen tanpa angka pasti (lihat tabel di atas).
- ⚠️ **LNG Hub Bandung PGN Gagas (~15.000 MMBTU/bulan, mitra PT Nusantara Regas)**: sumber hanya dua media niche energi/tambang (tambang.co.id, ruangenergi.com), bukan rilis resmi PGN Gagas atau filing ESDM yang berhasil diakses langsung dalam riset ini. → Rekomendasi: atribusikan sebagai "menurut laporan media [nama], [tanggal]", jangan nyatakan sebagai kapasitas nasional atau data evergreen, dan jangan perluas ke klaim operasional lain di luar yang dilaporkan.
- ⚠️ **Level harga spot JKM pertengahan September 2026 (kisaran US$24,9–27,8/MMBTU)**: berasal dari ringkasan agregator pencarian (bukan fetch primer S&P Global/exchange resmi) — sangat fluktuatif dan berpotensi tidak akurat. → Rekomendasi: JANGAN kutip angka harian spesifik; jika perlu menyebut JKM, cukup jelaskan definisinya (benchmark spot Asia Timur Laut) dan catat bahwa ini BUKAN harga yang otomatis diterima pembeli domestik Indonesia.
- ⚠️ **Harga solar/Biosolar industri (bulk/B2B) saat ini**: hasil pencarian kontradiktif/campur antara harga retail SPBU regional dan tanggal berbeda — tidak ada angka Rupiah/liter yang bisa dipertanggungjawabkan untuk perbandingan TCO. → Rekomendasi: gunakan metodologi konversi energi (Rp/MMBTU setara) tanpa mencantumkan angka Rupiah/liter solar industri spesifik, atau arahkan pembaca menghubungi Pertamina Patra Niaga untuk kuotasi.
- ⚠️ **Capex tangki kriogenik + vaporizer on-site**: tidak ditemukan kisaran biaya investasi spesifik Indonesia dari sumber tepercaya. → Rekomendasi: jangan cantumkan angka Rupiah/USD; nyatakan eksplisit bahwa capex "bervariasi menurut kapasitas, lokasi, dan skema komersial — minta simulasi tertulis dari penyedia."
- ⚠️ **Statistik permintaan LNG PLN (porsi 57%→67%, kargo 103→214 pada 2034)**: berasal dari cache riset strategist bulan ini (belum diverifikasi ulang langsung oleh researcher dalam run ini). → Rekomendasi: jika dipakai sebagai konteks pasar, atribusikan ke sumber asal (ANTARA/PLN, CNBC Indonesia Agustus 2026) dan posisikan sebagai konteks sekunder, bukan inti argumen TCO.

## Definition snippet draft (40–60 words)

> Biaya total (total cost of ownership/TCO) LNG adalah keseluruhan biaya yang ditanggung pembeli industri untuk menggunakan LNG sebagai bahan bakar — bukan sekadar harga molekul per MMBTU di penawaran awal, melainkan juga likuifaksi, logistik, regasifikasi, capex serta O&M infrastruktur on-site, losses boil-off gas, dan alokasi take-or-pay, biasanya dievaluasi dalam horizon 3–5 tahun.

## Notes for visuals (feed the writer's {IMAGE_NN} placeholders)

- **Concept 1 — Diagram alur landed cost LNG**: infografis vertikal/funnel bergaya "tangga biaya" dari molekul (FOB) di dasar hingga titik bakar di pabrik di puncak — delapan lapis berlabel Bahasa Indonesia (molekul/FOB, likuifaksi, logistik/ISO tank, regasifikasi, capex on-site, O&M, boil-off losses, margin distributor). Cocok ditempatkan di H2 #2. Alt-text: "Diagram komponen biaya landed cost LNG dari molekul hingga pabrik".
- **Concept 2 — Kartu perbandingan dua rezim harga**: dua kartu side-by-side — "HGBT (7 sektor): US$6,5–7/MMBTU" vs "LNG kriteria khusus (non-HGBT, per 29 Jun 2026): US$13/MMBTU" — masing-masing dengan catatan kecil tanggal berlaku & syarat kelayakan, warna kontras (mis. hijau vs oranye) untuk memperjelas ini BUKAN satu harga tunggal. Cocok di H2 #3/FAQ. Alt-text: "Perbandingan harga gas HGBT dan LNG industri Indonesia 2026".
- **Concept 3 — Kurva sensitivitas 5 tahun**: grafik garis dengan tiga skenario (rendah/dasar/tinggi) menunjukkan bagaimana fluktuasi ICP dan kurs USD/IDR mengguncang total TCO 5 tahun — beri anotasi titik data nyata "ICP naik dari US$81,68 (Jul 2026) ke US$89,43 (Ags 2026), +9,5% dalam sebulan" untuk kredibilitas. Cocok di H2 #4/#5. Alt-text: "Grafik sensitivitas biaya TCO LNG terhadap fluktuasi harga minyak dan kurs".
