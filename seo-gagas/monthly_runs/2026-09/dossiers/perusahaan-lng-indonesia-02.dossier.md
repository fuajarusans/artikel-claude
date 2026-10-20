---
brief_id: "perusahaan-lng-indonesia-02"
researcher_run_date: "2026-09-17"
sources_cited: 10
flags: 8
---

# Research Dossier: Apakah Peralatan Pabrik Kompatibel dengan Gas dari LNG? (Wobbe Index)

## TL;DR for the writer

- **Wobbe Index (WI = HHV/√SG)** is the internationally recognized metric for gas *interchangeability* (ISO 6976 for calculation method, ISO 13686 for quality designation) — teach the formula and concept confidently; do NOT assert a single universal "safe number" — tolerance depends on the specific burner/boiler/genset design.
- **Indonesia has a current, named standard**: **SNI 8414:2025** ("Spesifikasi bahan bakar gas bumi melalui pipa gas untuk industri, pembangkit listrik dan rumah tangga"), published by BSN on **12 March 2025**, superseding SNI 8414:2017. You can cite its existence, title, and date with high confidence — but its exact internal numeric limits (Wobbe range, HHV bounds) were **not retrievable in full text** (paywalled at BSN). Never invent numbers for it; direct readers to request the actual spec sheet / consult BSN-ESDM-BPH Migas.
- **"Gas from LNG is richer" is a tendency, not a law**: regasified LNG composition varies a lot by export terminal/source — some cargoes are genuinely "rich" (higher ethane/propane → higher HHV/Wobbe), others are "lean." Always hedge this claim with "tergantung sumber."
- **Terminal-side correction is real and named** (nitrogen injection to lower Wobbe, LPG/propane injection to raise it, NGL fractionation) — teach these as general industry practice, NOT confirmed Indonesia-specific thresholds (the "2–3% nitrogen" figure found is from a non-Indonesian source).
- **PGN Gagas's LNG role is confirmed as downstream/distribution**: it operates/develops an **LNG Hub** (example: Bandung groundbreaking, 4 Aug 2025, capacity ~15,000 MMBTU/month), runs satellite regasification and "virtual pipeline" logistics to customer sites — it is **not** a liquefaction/production company. **Important catch**: Gagas's own landing page uses the phrase "market leader dalam distribusi gas bumi ritel" — this is a superlative the pipeline's blacklist forbids; do not reproduce it even though it's sourced from gagas.co.id itself.

## Core facts (verified)

> **Claim**: Wobbe Index adalah parameter yang mengukur kesetaraan energi panas yang dihasilkan dua bahan bakar gas berbeda pada tekanan dan ukuran orifice yang sama, sehingga menjadi indikator utama *interchangeability*.
> **Number/specific**: Rumus WI = HHV (nilai kalor kotor) / √SG (akar kuadrat densitas relatif gas terhadap udara).
> **Source**: EngineeringToolbox, "Fuel Gases – Wobbe Index," https://www.engineeringtoolbox.com/wobbe-index-d_421.html (diakses 17 Sep 2026); metodologi perhitungan resmi diformalkan dalam ISO 6976.
> **Confidence**: high

> **Claim**: ISO 6976 adalah standar internasional yang menetapkan metode perhitungan nilai kalor, densitas, densitas relatif, dan Wobbe Index gas alam dari data komposisi molar.
> **Number/specific**: Edisi berlaku ISO 6976:2016 (edisi ketiga), menggantikan ISO 6976:1995.
> **Source**: ISO, katalog standar "ISO 6976:2016 — Natural gas — Calculation of calorific values, density, relative density and Wobbe indices from composition," https://www.iso.org/standard/55842.html (diakses 17 Sep 2026).
> **Confidence**: high

> **Claim**: ISO 13686 adalah standar internasional yang menetapkan parameter untuk mendeskripsikan kualitas gas alam yang telah diproses (dan, bila perlu, dicampur) untuk keperluan niaga/distribusi — termasuk penetapan Wobbe Index sebagai salah satu parameter kualitas.
> **Number/specific**: Edisi berlaku ISO 13686:2013, merevisi edisi 1998.
> **Source**: ISO / GlobalSpec, https://www.iso.org/standard/53058.html ; ringkasan https://standards.globalspec.com/std/1610886/iso-13686 (diakses 17 Sep 2026).
> **Confidence**: high untuk keberadaan & cakupan standar; **medium** untuk angka rentang spesifik di dalamnya — teks lengkap standar berbayar, tidak terverifikasi langsung.

> **Claim**: Industri gas internasional lazim mengelompokkan gas alam ke dalam "keluarga" Wobbe Index sebagai ilustrasi rentang tipikal (bukan angka tunggal universal).
> **Number/specific**: Contoh ilustratif ala klasifikasi gas Eropa (EN 437-style): "Family 2L" (low) sekitar 39,0–45,0 MJ/Nm³; "Family 2H" (high) sekitar 45,5–55,0 MJ/Nm³.
> **Source**: Ringkasan teknis Wobbe Index yang mengutip klasifikasi gas Eropa, diakses via web 17 Sep 2026 — sekunder, bukan teks resmi ISO/SNI.
> **Confidence**: medium — ini adalah **contoh ilustratif klasifikasi Eropa**, BUKAN angka resmi Indonesia. Writer wajib melabeli sebagai "rentang umum di industri," bukan spesifikasi SNI 8414.

> **Claim**: Toleransi variasi Wobbe Index yang dianggap "tidak signifikan" bagi peralatan pembakaran standar sering disebut dalam literatur teknis internasional berada di kisaran beberapa persen.
> **Number/specific**: Angka "~5%" muncul di sejumlah rujukan teknis internasional (bukan Indonesia-spesifik, bukan dari ESDM/BPH Migas).
> **Source**: Sintesis ringkasan literatur teknis Wobbe Index, diakses 17 Sep 2026.
> **Confidence**: low-medium — HARUS dihedge kuat; jangan nyatakan sebagai ambang resmi/regulasi Indonesia.

> **Claim**: SNI 8414:2025 adalah revisi terbaru standar nasional Indonesia untuk spesifikasi bahan bakar gas bumi melalui pipa gas bagi sektor industri, pembangkit listrik, dan rumah tangga, menggantikan SNI 8414:2017.
> **Number/specific**: Terbit 12 Maret 2025; perubahan utama: penyempurnaan ukuran partikulat (Tabel 1–3) dan konversi seluruh satuan parameter ke satuan internasional (SI); disusun Komite Teknis 75-02 (ICS 75.160.30 — gaseous fuels).
> **Source**: Badan Standardisasi Nasional (BSN), halaman produk resmi, https://pesta.bsn.go.id/produk/detail/84142025-sni8414:2025 (diakses 17 Sep 2026).
> **Confidence**: high

> **Claim**: SNI 8414 (edisi pendahulu, 2017) menetapkan persyaratan mutu gas bumi yang disalurkan melalui pipa untuk industri, pembangkit listrik, dan rumah tangga, mencakup spesifikasi karakteristik fisika-kimia dan parameter unjuk kerja gas.
> **Number/specific**: Cakupan sektor: industri, pembangkit listrik, rumah tangga.
> **Source**: Metadata resmi BSN untuk SNI 8414-2017, direfleksikan di https://id.scribd.com/document/426008902/10880-SNI-8414-2017 (diakses 17 Sep 2026).
> **Confidence**: medium-high — metadata standar terverifikasi; angka numerik rinci di dalam badan standar tidak dapat diakses penuh (dokumen berbayar di BSN).

> **Claim**: BPH Migas secara rutin memantau kualitas gas bumi yang dialirkan melalui pipa transportasi di berbagai titik sampling nasional.
> **Number/specific**: Sampling di **18 titik** pipa pengangkutan gas bumi; parameter yang diperiksa mencakup nilai kalor kotor (gross heating value), berat jenis (specific gravity), kandungan gas inert (CO2, N2, O2), kandungan C3+, kandungan sulfur, kadar air, dan partikulat.
> **Source**: BPH Migas, "Sampling Gas Pada Pipa Pengangkutan 18 Titik, BPH Migas Monitoring Kualitas Gas Bumi," https://www.bphmigas.go.id/sampling-gas-pada-pipa-pengangkutan-18-titik-bph-migas-monitoring-kualitas-gas-bumi/ (diakses 17 Sep 2026).
> **Confidence**: high

> **Claim**: Gas hasil regasifikasi LNG dapat memiliki komposisi yang sangat bervariasi tergantung sumber/terminal ekspornya — sebagian kargo LNG mengandung etana dan propana lebih tinggi ("rich") dibanding gas pipa konvensional, sementara sumber lain "lean" (didominasi metana).
> **Number/specific**: Variasi ini disebut signifikan antarterminal ekspor LNG global.
> **Source**: "LNG Quality Specifications and Gas Interchangeability," sea-man.org, https://sea-man.org/lng-quality.html (diakses 17 Sep 2026).
> **Confidence**: medium — sumber teknis non-akademik-formal (situs edukasi maritim); selaras dengan pemahaman industri umum, tapi hedge sebagai "cenderung," bukan pasti.

> **Claim**: Di terminal penerima/regasifikasi LNG, penyesuaian nilai kalor/Wobbe Index gas keluaran umumnya dilakukan lewat salah satu dari tiga mekanisme: injeksi nitrogen (menurunkan), injeksi LPG/propana (menaikkan), atau fraksinasi (pemisahan) komponen NGL berat.
> **Number/specific**: Injeksi nitrogen dibatasi hingga batas kandungan gas inert yang diizinkan jaringan pipa; salah satu sumber menyebut kisaran umum ~2–3% di beberapa yurisdiksi (bukan Indonesia).
> **Source**: sea-man.org, "LNG Quality Specifications and Gas Interchangeability" (diakses 17 Sep 2026).
> **Confidence**: medium — konsep mekanismenya berlaku umum secara teknis; angka "2–3%" adalah contoh dari luar Indonesia dan TIDAK boleh diklaim sebagai batas Indonesia tanpa konfirmasi BPH Migas/ESDM.

> **Claim**: "LNG weathering" adalah fenomena perubahan komposisi LNG cair selama penyimpanan/transportasi — komponen yang lebih ringan (mis. nitrogen, sebagian metana) menguap (*boil-off*) lebih dulu, sehingga cairan yang tersisa relatif lebih kaya komponen berat (etana, propana+) dan nilai kalor/Wobbe Index-nya meningkat seiring waktu.
> **Number/specific**: Efek ini berpotensi menggeser gas yang semula "on-spec" mendekati/melewati batas atas spesifikasi Wobbe Index bila tidak dikelola di terminal.
> **Source**: Sintesis kajian *boil-off gas* & *weathering* LNG (abstrak "Weathering/Ageing of LNG Cargoes During Marine Transport and Processing on FSU and FSRU," ResearchGate/ScienceDirect), diakses 17 Sep 2026.
> **Confidence**: medium — konsep diterima luas di literatur LNG, tapi dikutip dari ringkasan abstrak, bukan teks penuh peer-review yang terverifikasi detail.

> **Claim**: Methane Number (MN) adalah indeks yang mengukur ketahanan suatu bahan bakar gas terhadap *knocking*/detonasi pada mesin pembakaran gas (genset/gas engine).
> **Number/specific**: Skala 0–100: metana murni MN=100 (paling tahan *knock*), hidrogen MN=0 (paling rentan); MN campuran gas sangat dipengaruhi proporsi etana, propana, dan butana.
> **Source**: Clarke Energy, "Methane Number," https://www.clarke-energy.com/methane-number/ (diakses 17 Sep 2026).
> **Confidence**: high untuk konsep & skala; medium untuk penerapan detail derating tertentu.

> **Claim**: Gas engine/genset yang dirancang untuk bahan bakar dengan Methane Number tertentu dapat memerlukan penyesuaian pengapian (*retiming*) atau derating (penurunan daya keluaran) ketika menerima gas dengan Methane Number lebih rendah (lebih "kaya" etana/propana) dari spesifikasi desainnya, untuk mencegah *knocking*.
> **Number/specific**: Praktik ini umum pada mesin gas dual-fuel/multi-fuel generasi lama; besaran derating spesifik bervariasi per merek/model mesin — tidak ada satu angka universal.
> **Source**: Clarke Energy (Methane Number) + diskusi teknis keinsinyuran gas engine (forum Eng-Tips), diakses 17 Sep 2026.
> **Confidence**: medium — prinsip umum OEM diterima luas; angka derating spesifik TIDAK boleh digeneralisasi tanpa merujuk manual pabrikan genset yang bersangkutan.

> **Claim**: PT Gagas Energi Indonesia (PGN Gagas) memposisikan operasi rantai LNG-nya sebagai distributor/penyedia logistik hilir — mencakup terminal penerima & penyimpanan LNG, sistem regasifikasi satelit (*vaporizer*) di lokasi pelanggan, dan logistik "*virtual pipeline*" (ISO tank/truk *micro-bulk*) — **bukan** sebagai produsen/fasilitas likuifaksi.
> **Number/specific**: Segmen target yang disebutkan: manufaktur berat/petrokimia, pembangkit listrik, dan *bunkering* LNG maritim.
> **Source**: gagas.co.id, "Perusahaan LNG Indonesia," https://www.gagas.co.id/perusahaan-lng-indonesia (diakses 17 Sep 2026).
> **Confidence**: high (sumber resmi Gagas) — **catatan**: halaman yang sama memuat frasa "*market leader*" yang tidak boleh direproduksi (lihat Flags).

> **Claim**: PGN Gagas melakukan *groundbreaking* pembangunan LNG Hub di Bandung sebagai bagian infrastruktur *beyond-pipeline* Subholding Gas, ditujukan memperluas akses LNG berkualitas untuk sektor industri termasuk *hospitality* di Jawa Barat.
> **Number/specific**: Kapasitas sekitar 15.000 MMBTU per bulan (setara ±0,5 BBTUD); *groundbreaking* 4 Agustus 2025.
> **Source**: gagas.co.id, siaran pers "Subholding Gas Strengthens Beyond-Pipeline Energy Solutions for Commercial and Public Service Sectors in Bandung," https://www.gagas.co.id/subholding-gas-strengthens-beyond-pipeline-energy-solutions-for-commercial-and-public-service-sectors-in-bandung (diakses 17 Sep 2026).
> **Confidence**: high

> **Claim**: PGN Gagas memegang sertifikasi ISO 9001:2015 (Sistem Manajemen Mutu), ISO 45001:2018 (Sistem Manajemen K3 — khusus untuk layanan distribusi CNG), dan ISO 37001:2016 (Sistem Manajemen Anti-Penyuapan), seluruhnya per 2025.
> **Number/specific**: ISO 45001:2018 secara eksplisit di-*scope* untuk layanan distribusi **CNG**, bukan LNG.
> **Source**: `knowledge_base/company_profile.md` (profil resmi PGN Gagas, pre-approved).
> **Confidence**: high (PGN Gagas KB)

> **Claim**: Secara prinsip rekayasa pembakaran, perubahan Wobbe Index/komposisi bahan bakar gas dapat memengaruhi karakteristik nyala — termasuk risiko *flame lift*, perubahan laju pelepasan panas pada burner ber-orifice tetap, dan potensi pembakaran tidak sempurna (*sooting*) bila melampaui rentang desain peralatan.
> **Number/specific**: Tidak ada satu angka toleransi universal — ambang bergantung desain burner spesifik (*fixed-orifice* vs *modulating*, ada/tidaknya kontrol *lambda*/O2 *trim*).
> **Source**: Prinsip umum diringkas dari literatur interchangeability (EngineeringToolbox; sea-man.org) — pengetahuan rekayasa pembakaran umum, diakses 17 Sep 2026.
> **Confidence**: medium — prinsip diterima luas di teknik pembakaran, tapi bukan dari satu sumber tunggal terverifikasi penuh; sampaikan sebagai prinsip umum, bukan garansi kuantitatif.

## Solution focus + PGN Gagas anchor (from product_matrix.md)

| What to teach (gas-bumi/CNG/LNG tech) | Facts to state accurately | Where in article | PGN Gagas service/credential to anchor CTA |
|---|---|---|---|
| Wobbe Index, *interchangeability*, HHV, komposisi *rich vs lean* LNG, mekanisme koreksi di sisi pasokan (nitrogen/LPG injection), checklist retrofit peralatan | Wobbe Index = HHV/√SG (ISO 6976); kualitas gas niaga Indonesia diatur SNI 8414:2025 (BSN, 12 Mar 2025) — kutip **nama & tanggal standar**, jangan mengarang angka batasnya; "gas ex-LNG cenderung rich" harus dihedge "tergantung sumber" | H2 #1–#5 (definisi → perbedaan → checklist → tabel → kapan belum perlu retrofit) | **LNG Hub** PGN Gagas (operator hilir/distribusi, verified: proyek Bandung 2025, ~15.000 MMBTU/bulan) yang menyerahkan gas berspesifikasi jelas & mendampingi komisioning di titik pelanggan — closing/CTA; opsional 1 mid-artikel aside saat bahas *gas spec sheet* |

Reminder: PGN Gagas **mendistribusikan/menyalurkan/mengoperasikan LNG Hub** — ia bukan produsen/fasilitas likuifaksi LNG, dan ISO 45001:2018-nya ter-*scope* untuk CNG (bukan LNG). Max 2–3 self-mentions total (closing + ≤1 mid-article aside; jangan pakai keduanya *plus* FAQ #8 secara bersamaan — pilih maksimal 2–3 titik total termasuk FAQ jika dipakai).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Badan Standardisasi Nasional (BSN) — 12 Maret 2025** — https://pesta.bsn.go.id/produk/detail/84142025-sni8414:2025 — *what it backs*: keberadaan, judul, dan tanggal terbit SNI 8414:2025, standar nasional Indonesia terkini untuk spesifikasi bahan bakar gas bumi melalui pipa.
2. **BPH Migas** — https://www.bphmigas.go.id/sampling-gas-pada-pipa-pengangkutan-18-titik-bph-migas-monitoring-kualitas-gas-bumi/ — *what it backs*: pemerintah aktif memantau parameter kualitas gas (nilai kalor, berat jenis, gas inert, C3+, sulfur, kadar air, partikulat) di 18 titik pipa transportasi nasional.
3. **ISO** — https://www.iso.org/standard/55842.html (ISO 6976:2016) dan https://www.iso.org/standard/53058.html (ISO 13686:2013) — *what it backs*: metodologi perhitungan Wobbe Index dan standar internasional untuk penetapan kualitas gas alam.
4. **sea-man.org, "LNG Quality Specifications and Gas Interchangeability"** — https://sea-man.org/lng-quality.html — *what it backs*: variasi komposisi LNG antarterminal ekspor, mekanisme injeksi nitrogen/LPG di terminal penerima.
5. **Clarke Energy, "Methane Number"** — https://www.clarke-energy.com/methane-number/ — *what it backs*: konsep Methane Number dan hubungannya dengan *knocking*/derating pada genset gas.

## FAQ Q&As (8 drafted, Bahasa Indonesia)

### Apa itu Wobbe Index dan berapa nilai amannya untuk peralatan industri?
Wobbe Index adalah parameter yang mengukur kesetaraan energi panas antara dua bahan bakar gas pada orifice dan tekanan yang sama, dihitung dari nilai kalor dibagi akar kuadrat densitas relatif gas. Semakin dekat Wobbe Index dua gas, semakin besar peluang keduanya saling menggantikan (*interchangeable*) tanpa mengubah peralatan. Tidak ada "nilai aman" tunggal untuk semua alat — batas toleransi ditentukan desain burner/boiler/genset masing-masing pabrikan, jadi selalu rujuk spec sheet gas dan manual peralatan Anda.

### Apa itu interchangeability bahan bakar gas?
*Interchangeability* adalah kemampuan satu jenis bahan bakar gas menggantikan gas lain pada peralatan pembakaran yang sama tanpa penyesuaian signifikan, dengan nyala, efisiensi, dan emisi tetap dalam batas aman. Konsep ini mendasari standar internasional seperti ISO 13686 (kualitas gas alam) dan ISO 6976 (perhitungan Wobbe Index). Saat interchangeability rendah — misalnya gas baru jauh lebih "kaya" — burner berisiko *flame lift*, pembakaran tak sempurna, atau konsumsi bahan bakar melenceng dari prediksi.

### Apa bedanya gas dari LNG dengan gas pipa konvensional?
Keduanya sama-sama gas bumi, tetapi komposisinya bisa berbeda. Gas pipa domestik umumnya diproses menuju spesifikasi jaringan yang relatif stabil, sementara gas hasil regasifikasi LNG sering membawa kandungan etana-propana lebih tinggi tergantung terminal ekspor asalnya, sehingga nilai kalor dan Wobbe Index-nya berpotensi lebih tinggi. Ini bukan aturan mutlak — sebagian kargo LNG justru "lean" (miskin komponen berat). Karena itu, selalu minta spec sheet aktual dari pemasok, jangan berasumsi.

### Apakah peralatan pabrik (boiler/burner) perlu diubah untuk memakai gas dari LNG?
Tidak selalu. Peralatan modern dengan burner *modulating* dan kontrol rasio udara-bahan bakar otomatis umumnya memiliki rentang toleransi Wobbe Index cukup lebar, sehingga hanya butuh pengecekan dan penyetelan ulang saat komisioning. Peralatan lama dengan orifice tetap, atau proses presisi suhu seperti kiln keramik/kaca, lebih rentan perlu penyesuaian nozzle atau retrofit. Langkah pertama yang wajib: bandingkan spec sheet gas dari pemasok dengan rentang Wobbe yang ditoleransi alat Anda.

### Kenapa nyala api burner bisa berubah setelah beralih bahan bakar gas?
Nyala api burner bereaksi terhadap perubahan nilai kalor dan Wobbe Index bahan bakar, karena keduanya menentukan berapa banyak energi panas mengalir melalui orifice pada tekanan tetap. Jika gas baru memiliki Wobbe Index lebih tinggi (kandungan etana/propana lebih tinggi), laju pelepasan panas bisa melebihi desain, memicu gejala seperti *flame lift*, nyala tidak stabil, atau jelaga akibat pembakaran tak sempurna. Penyetelan *air-fuel ratio* dan nozzle biasanya mengatasi gejala ini.

### Apakah genset gas perlu derating saat memakai gas dari LNG?
Tergantung desain mesin dan Methane Number gas yang diterima. Methane Number mengukur ketahanan bahan bakar gas terhadap *knocking* pada mesin genset — metana murni bernilai 100, dan nilainya turun seiring naiknya kandungan etana/propana. Genset lama yang dirancang untuk gas ber-Methane Number tinggi bisa berisiko *knocking* dan perlu *retiming* pengapian atau derating daya saat menerima gas ex-LNG yang lebih "kaya". Selalu konfirmasi ke pabrikan genset dengan data komposisi gas aktual sebelum beralih.

### Apa yang terjadi jika interchangeability gas diabaikan?
Mengabaikan interchangeability berisiko menimbulkan gejala operasional: nyala burner tidak stabil atau *flame lift*, efisiensi pembakaran turun, konsumsi gas melenceng dari perhitungan awal, jelaga pada peralatan, hingga potensi *knocking* pada genset/gas engine. Dalam kasus ekstrem, pembakaran tak sempurna berkepanjangan bisa mempercepat keausan komponen dan menambah risiko keselamatan. Uji komisioning bertahap dan verifikasi spec sheet gas sebelum kontrak jangka panjang adalah langkah mitigasi standar, bukan opsional.

### Bagaimana cara mengetahui spesifikasi gas yang akan diterima, dan bisakah penyedia menyesuaikannya?
Mintalah *gas spec sheet* tertulis dari calon pemasok — mencakup nilai kalor (HHV), Wobbe Index, dan komposisi (persentase metana, etana, propana, gas inert). Di sisi pasokan, penyesuaian nilai kalor/Wobbe Index dapat dilakukan lewat mekanisme seperti injeksi nitrogen atau blending di terminal, meski tidak semua penyedia menyediakannya secara rutin. Sebagai operator LNG Hub yang menyalurkan gas *beyond-pipeline*, PGN Gagas menyerahkan spesifikasi gas kepada pelanggan dan mendampingi proses komisioning di lokasi.

## Data tables for the writer

### Perbandingan Karakteristik: Gas Pipa vs Gas dari LNG vs LPG (ilustratif — konfirmasi ke spec sheet aktual)

| Aspek | Gas Pipa (umum) | Gas dari Regasifikasi LNG | LPG |
|---|---|---|---|
| Komponen dominan | Metana tinggi, etana/propana relatif rendah (bervariasi per lapangan sumber) | Metana + etana/propana; proporsi tergantung terminal ekspor asal ("*rich*" vs "*lean*") | Propana & butana — bukan metana |
| Nilai kalor (HHV) relatif | Mengikuti baseline jaringan setempat | Berpotensi lebih tinggi dari baseline pipa, tapi tidak selalu (tergantung sumber) | Jauh lebih tinggi per volume dibanding gas alam |
| Wobbe Index | Mengikuti spesifikasi jaringan/SNI 8414 setempat — nilai eksak: rujuk spec sheet pemasok | Berpotensi bergeser ke rentang lebih tinggi bila "*rich*"; dapat dikoreksi via injeksi nitrogen/blending di terminal | Di luar rentang famili gas alam — bukan pengganti langsung tanpa modifikasi total |
| Risiko ke burner/boiler lama | Rendah (alat memang dirancang untuk gas ini) | Sedang–tinggi bila Wobbe bergeser signifikan & burner *fixed-orifice* | Tinggi bila alat didesain untuk gas alam, bukan LPG |
| Tindakan penyesuaian tipikal | Umumnya tidak perlu | Cek spec sheet → uji nyala bertahap → setel nozzle/*air-fuel ratio* bila perlu; genset cek Methane Number | Perlu konversi orifice/regulator khusus, bukan sekadar penyetelan |

*Catatan wajib untuk writer*: semua nilai di tabel bersifat kualitatif/ilustratif untuk memandu pertanyaan yang tepat ke pemasok — **bukan** angka resmi pengganti spec sheet aktual atau teks lengkap SNI 8414:2025.

### Checklist retrofit (bisa dijadikan numbered list di H2 #3)
1. Minta *gas spec sheet* tertulis (HHV, Wobbe Index, komposisi) dari calon pemasok.
2. Bandingkan dengan rentang Wobbe yang ditoleransi manual burner/boiler/genset/kiln Anda.
3. Untuk genset/gas engine, cek Methane Number vs spesifikasi desain mesin.
4. Rencanakan uji komisioning bertahap (bukan langsung full-load) saat gas baru pertama mengalir.
5. Siapkan penyesuaian nozzle/orifice dan *air-fuel ratio* sebagai opsi jika gejala nyala muncul.
6. Dokumentasikan hasil komisioning sebagai baseline untuk audit/pemeliharaan berikutnya.

## Edge cases & nuance

- **"LNG selalu rich" adalah generalisasi berlebihan** — komposisi LNG sangat tergantung sumber/terminal ekspor; sebagian kargo justru "lean" (mendekati gas pipa atau lebih rendah Wobbe-nya). Artikel harus menyatakan ini sebagai kecenderungan, bukan hukum.
- **Banyak peralatan modern TIDAK perlu retrofit fisik** — burner *modulating* dengan kontrol *lambda*/O2 *trim* otomatis menyesuaikan diri dalam rentang cukup lebar; yang paling rentan adalah peralatan lama ber-orifice tetap atau proses presisi suhu (kiln kaca/keramik, perlakuan panas logam).
- **Wobbe Index bukan satu-satunya parameter yang relevan** — untuk mesin pembakaran (genset, turbin), Methane Number/indeks knock resistance lebih relevan daripada Wobbe Index semata; jangan menyederhanakan "satu angka menyelesaikan semua."
- **Koreksi di sisi pasokan (nitrogen/LPG injection) ada batasnya** — bukan solusi tanpa batas; dilusi nitrogen berlebihan justru bisa menurunkan Wobbe Index di bawah spesifikasi minimum jaringan.
- **Angka spesifik SNI 8414:2025 tidak dipublikasikan penuh secara gratis** — dossier ini hanya bisa memverifikasi judul, tanggal terbit, dan cakupan revisi; jangan mengarang rentang Wobbe/HHV atas nama SNI 8414 tanpa akses dokumen resmi.

## Flags (open factual risk)

- ⚠️ **Rentang Wobbe Index "39,0–45,0" dan "45,5–55,0 MJ/Nm³"**: ini adalah contoh ilustratif dari klasifikasi gas Eropa (gaya EN 437), diambil dari ringkasan sekunder — **bukan** angka resmi SNI 8414 Indonesia. → Rekomendasi: gunakan sebagai "contoh rentang yang lazim ditemui di industri gas secara global," beri disclaimer eksplisit, dan arahkan pembaca ke spec sheet pemasok/SNI 8414:2025 untuk angka Indonesia yang berlaku.
- ⚠️ **Toleransi "~5%" variasi Wobbe Index dianggap tidak signifikan**: angka ini berasal dari sintesis sekunder literatur internasional, bukan ESDM/BPH Migas/SNI Indonesia. → Rekomendasi: hedge kuat ("sering disebut dalam literatur teknis internasional"), jangan nyatakan sebagai ambang regulasi Indonesia.
- ⚠️ **Angka numerik lengkap di dalam SNI 8414:2025** (batas Wobbe Index, HHV, kandungan sulfur/air, dll.): tidak dapat diakses penuh (dokumen berbayar Rp30.000 di BSN, teks lengkap tidak tersedia gratis). → Rekomendasi: sebut nama, tanggal terbit (12 Maret 2025), dan cakupan standar dengan percaya diri; JANGAN mengarang angka batasnya — arahkan pembaca untuk meminta spec sheet ke pemasok atau merujuk BSN/ESDM langsung.
- ⚠️ **"Injeksi nitrogen dibatasi ~2–3%"**: angka ini dari sumber non-Indonesia (sea-man.org, menggambarkan praktik umum industri LNG global, bukan regulasi RI). → Rekomendasi: gunakan sebagai contoh mekanisme umum ("di sejumlah yurisdiksi"), jangan klaim sebagai batas Indonesia.
- ⚠️ **Frasa "*market leader* dalam distribusi gas bumi ritel"** ditemukan di halaman resmi gagas.co.id/perusahaan-lng-indonesia. Ini bertentangan langsung dengan LNG-FRAMING GUARD brief ("NEVER pionir/pemimpin pasar") dan blacklist company_profile.md (tidak ada superlatif tak tersubstansiasi dalam profil resmi). → Rekomendasi: **JANGAN** direproduksi di artikel meskipun bersumber dari situs Gagas sendiri.
- ⚠️ **ISO 45001:2018 PGN Gagas** ter-*scope* eksplisit untuk layanan distribusi **CNG** di company_profile.md — tidak ada dasar untuk memperluasnya ke operasi LNG Hub. → Rekomendasi: jika menyebut sertifikasi ISO Gagas di artikel LNG ini, jangan implikasikan ISO 45001 mencakup LNG.
- ⚠️ **Besaran derating genset spesifik** (mis. rasio kompresi 9:1 vs 12:1 pada contoh yang ditemukan) berasal dari forum diskusi teknis (Eng-Tips), otoritas lebih rendah dan konteksnya merek/model tertentu. → Rekomendasi: jangan generalisasi angka rasio kompresi; sampaikan prinsip (Methane Number rendah → risiko knocking → kemungkinan retiming/derating) tanpa angka rasio kompresi spesifik.
- ⚠️ **Karakteristik LNG sumber Indonesia spesifik** (mis. apakah LNG domestik dari Bontang/Tangguh cenderung rich/lean dibanding kargo impor) tidak diverifikasi dalam riset ini dan di luar cakupan brief (area ini disisakan untuk sibling article #14 soal regasifikasi/vaporizer). → Rekomendasi: jangan membuat klaim spesifik tentang karakteristik LNG asal Indonesia; bicarakan secara generik ("tergantung sumber pasokan").

## Definition snippet draft (40–60 words)

> Wobbe Index adalah parameter yang menyatakan kesetaraan energi panas dua bahan bakar gas pada tekanan dan ukuran orifice yang sama, dihitung dari nilai kalor (HHV) dibagi akar kuadrat densitas relatif gas terhadap udara. Semakin dekat Wobbe Index dua gas, semakin besar peluang keduanya saling menggantikan (*interchangeable*) pada peralatan pembakaran yang sama tanpa penyetelan ulang.

## Notes for visuals (feed the writer's {IMAGE_NN} placeholders)

- **Concept 1 — "Anatomi Wobbe Index"**: Diagram edukatif menampilkan rumus WI = HHV/√SG di tengah, diapit dua ilustrasi nyala burner (satu stabil biru, satu tidak stabil/*flame lift* oranye bergejolak) untuk memvisualkan efek Wobbe Index tinggi vs rendah pada nyala. Sertakan label "Ilustrasi konsep — bukan angka resmi" di sudut bawah. Gaya flat-infographic, warna korporat biru-oranye, teks Bahasa Indonesia singkat di setiap elemen.
- **Concept 2 — "Alur Pemeriksaan Kesiapan Peralatan Sebelum Beralih ke Gas dari LNG"**: Flowchart horizontal 6 langkah (ikon dokumen → ikon meteran/alat ukur → ikon api uji coba → ikon obeng/nozzle → ikon checklist → ikon arsip) merepresentasikan checklist retrofit di atas. Cocok untuk pembaca teknis yang men-*screenshot* untuk tim maintenance internal.
- **Concept 3 — "Gas Pipa vs Gas dari LNG vs LPG"**: Kartu perbandingan 3 kolom (ikon pipa, ikon kapal/tangki LNG, ikon tabung LPG) menampilkan ringkasan kualitatif dari tabel perbandingan di atas (komponen dominan, risiko ke peralatan lama, tindakan penyesuaian tipikal) — didesain agar mudah dibagikan/dilampirkan di email internal procurement.
