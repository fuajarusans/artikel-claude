---
brief_id: "perusahaan-lng-indonesia-04"
researcher_run_date: "2026-08-11"
sources_cited: 11
flags: 9
---

# Research Dossier: Regasifikasi LNG di Lokasi: Cara Kerja Vaporizer dan SRU

## TL;DR for the writer

- Regasifikasi di sisi pelanggan berlangsung dalam **Satuan Regasifikasi skala kecil (Small-Scale Regasification Unit/SRU)**: tangki kriogenik → vaporizer → Pressure Reduction Station (PRS) → metering/odorisasi → pipa internal ke burner. Istilah "SRU" ini dipakai resmi oleh **PGN LNG** (satu grup Subholding Gas Pertamina dengan Gagas) — pakai istilah ini, bukan istilah ad hoc.
- Empat jenis vaporizer yang relevan diajarkan: **AAV** (udara sekitar), **Water Bath** (air panas), **ORV** (air laut, >5°C, jarang dipakai di lokasi pelanggan darat), **SCV** (gas hasil pembakaran via bak air). ORV secara teknis termasuk dalam literatur tapi **kurang relevan untuk pabrik inland** — jangan diframekan sebagai opsi umum di sisi pelanggan tanpa akses air laut.
- **Semua angka kapasitas (Nm³/jam), tekanan desain tangki, dan dimensi ISO tank yang ditemukan berasal dari sumber vendor/aggregator umum** — bukan standar teknik tetap atau spesifikasi milik Gagas. Sajikan sebagai "spesifikasi umum pasar/ilustratif", bukan angka pasti. Jangan mengarang atau memastikan angka kapasitas SRU milik Gagas — tidak ada yang dipublikasikan.
- **Gagas-role finding**: landing page `gagas.co.id/perusahaan-lng-indonesia/` (first-party, diakses hari ini) secara eksplisit menyebut Gagas melakukan **pemasangan instalasi vaporizer di lokasi pelanggan** dan **desain teknik & instalasi sistem satelit (tangki kriogenik + vaporizer)**, via armada **ISO tank/truk micro-bulk** — pola "virtual pipeline". Ini **mengonfirmasi** framing brief (LNG Hub + hilir distributor yang mengoperasikan regas satelit di lokasi pelanggan), **BUKAN** produsen/likuifaksi/operator FSRU. Tetap hindari kata "pemimpin pasar/pionir" apa pun sumbernya (guardrail brief bersifat mutlak, bukan tergantung sumber).
- ISO 45001:2018 di company_profile.md tercatat spesifik **"untuk layanan distribusi CNG"** — jangan menyematkannya sebagai sertifikasi khusus LNG tanpa klarifikasi saat dipakai di artikel ini.

## Core facts (verified)

> **Claim**: LNG disimpan dan diangkut dalam bentuk cair pada suhu sangat rendah, sekitar -160°C hingga -162°C, sebelum diregasifikasi menjadi gas.
> **Number/specific**: PGN LNG menyebut suhu likuifaksi ~-161°C; referensi industri umum menyebut ~-162°C.
> **Source**: PGN LNG, "Mengenal Proses Regasifikasi", https://pgnlng.co.id/berita/wawasan/mengenal-proses-regasifikasi/, diakses 2026-08-11.
> **Confidence**: high (konsisten lintas sumber; variasi kecil -161°C/-162°C bergantung tekanan referensi — gunakan rentang "sekitar -160°C" agar aman).

> **Claim**: Proses regasifikasi umum mencakup penyimpanan cair → vaporisasi (pengubahan fase) → odorisasi (penambahan mercaptan sebagai penanda bau kebocoran) → distribusi ke jaringan pemakai.
> **Number/specific**: Tahapan proses sebagaimana dijelaskan PGN LNG.
> **Source**: PGN LNG, "Mengenal Proses Regasifikasi", https://pgnlng.co.id/berita/wawasan/mengenal-proses-regasifikasi/, diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Literatur teknik mengenali lima jenis vaporizer LNG: Open Rack Vaporizer (ORV), Submerged Combustion Vaporizer (SCV), Ambient Air Vaporizer (AAV), Intermediate Fluid Vaporizer (IFV), dan Shell and Tube Vaporizer (STV) — brief fokus ke 4 yang relevan di sisi pelanggan (AAV, Water Bath, ORV, SCV).
> **Number/specific**: 5 tipe disebut PGN LNG; IFV/STV lebih umum di terminal besar, bukan fokus artikel ini.
> **Source**: PGN LNG, "Mengenal Proses Regasifikasi", https://pgnlng.co.id/berita/wawasan/mengenal-proses-regasifikasi/, diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Open Rack Vaporizer (ORV) menggunakan air laut bersuhu sekitar ambien sebagai sumber panas dan **tidak dapat dipakai bila suhu air di bawah 5°C**.
> **Number/specific**: Ambang suhu air laut ~5°C.
> **Source**: PGN LNG, "Mengenal Proses Regasifikasi", https://pgnlng.co.id/berita/wawasan/mengenal-proses-regasifikasi/, diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Ambient Air Vaporizer (AAV) memanfaatkan udara sekitar melalui pipa bersirip (finned tube) sebagai sumber panas — sederhana dan tak butuh bahan bakar tambahan, tetapi ukuran unit relatif besar dan performa dipengaruhi suhu/kelembapan udara setempat.
> **Number/specific**: Prinsip kerja & keterbatasan AAV.
> **Source**: Agregasi literatur teknik (ScienceDirect — mis. studi frosting/fog-formation AAV), https://www.sciencedirect.com/science/article/abs/pii/S1359431121004695, diakses via pencarian 2026-08-11.
> **Confidence**: medium (prinsip kerja adalah konsensus rekayasa yang mapan; sumber diakses lewat abstrak/ringkasan hasil pencarian, bukan pembacaan teks penuh karena artikel berbayar/paywall).

> **Claim**: Uap air di udara dapat mengembun lalu membeku (frost) pada permukaan pipa bersirip AAV karena suhu kriogenik LNG di dalamnya; lapisan es ini menurunkan efisiensi perpindahan panas dan kapasitas vaporisasi, sehingga memerlukan siklus defrost berkala — terutama pada kondisi kelembapan tinggi/suhu rendah.
> **Number/specific**: Mekanisme frost & dampaknya pada kapasitas.
> **Source**: Agregasi literatur teknik (ScienceDirect, mis. "Thermal resistance analysis of cryogenic frosting... AAV"), https://www.sciencedirect.com/science/article/abs/pii/S0960148119315630, diakses via pencarian 2026-08-11.
> **Confidence**: medium (fenomena mapan di literatur rekayasa; sumber via abstrak/ringkasan pencarian, bukan teks penuh).

> **Claim**: Water Bath Vaporizer mengalirkan LNG melalui kumparan pipa yang terendam dalam bak air panas; sumber pemanas bak air bisa berupa elemen listrik, injeksi uap (steam), atau pembakaran gas.
> **Number/specific**: Tiga varian sumber panas bak air.
> **Source**: Linde Engineering, "Water Bath Vaporizers", https://www.linde-engineering.com/products-and-services/plant-components/water-bath-vaporizers, diakses 2026-08-11 (produsen peralatan LNG).
> **Confidence**: medium-high (sumber produsen/teknis kredibel, bukan riset independen — wajar untuk deskripsi produk kategori, bukan klaim performa Gagas).

> **Claim**: Submerged Combustion Vaporizer (SCV) memanfaatkan hasil pembakaran gas (flue gas) yang dialirkan ke dalam bak air sebagai media perantara panas untuk meregasifikasi LNG dalam kumparan pipa; umum dipakai sebagai unit pendukung beban puncak atau vaporizer utama di iklim dingin.
> **Number/specific**: Prinsip kerja & konteks pemakaian SCV.
> **Source**: Agregasi literatur teknik (ScienceDirect, performance analysis of SCV) + Linde Engineering (Submerged Combustion Vaporizers product page), diakses via pencarian 2026-08-11.
> **Confidence**: medium (konsensus industri, sumber agregat pencarian; hindari klaim pangsa-pasar numerik spesifik — lihat flag).

> **Claim**: PGN LNG (Subholding Gas Pertamina) secara resmi memakai istilah **"Small-Scale Regasification Unit (SRU)"** untuk unit regasifikasi berskala kecil yang dipasang di lokasi pelanggan sebagai bagian dari skema **virtual pipeline** (pengiriman LNG lewat ISO tank/truk/kapal kecil tanpa jaringan pipa fisik).
> **Number/specific**: Istilah & komponen (tangki kriogenik/ISO tank, transportasi darat/laut, SRU) sebagaimana dijelaskan PGN LNG.
> **Source**: PGN LNG, "Virtual Pipeline: An Innovation to Deliver LNG Without Pipelines", https://pgnlng.co.id/en/berita/learn/lng-virtual-pipeline/, diakses 2026-08-11.
> **Confidence**: high (sumber resmi PGN/Pertamina, satu grup dengan PGN Gagas).

> **Claim**: Segmen pengguna virtual pipeline/SRU LNG yang umum disebut dalam materi PGN LNG: manufaktur/petrokimia di lokasi terpencil (pengganti solar/BBM), pembangkit listrik skala kecil-menengah (pengganti diesel di pulau-pulau), dan pertambangan terpencil.
> **Number/specific**: Tiga segmen utama.
> **Source**: PGN LNG, "Virtual Pipeline: An Innovation to Deliver LNG Without Pipelines", https://pgnlng.co.id/en/berita/learn/lng-virtual-pipeline/, diakses 2026-08-11.
> **Confidence**: high — namun **jangan disamakan otomatis dengan daftar segmen pelanggan Gagas**; gunakan sebagai konteks industri umum, bukan klaim klien Gagas.

> **Claim**: CNG di sisi pelanggan tidak memerlukan vaporizer kriogenik karena tetap berwujud gas terkompresi; yang dibutuhkan hanyalah Pressure Reduction Station (PRS) untuk menurunkan tekanan bertahap, dilengkapi pemanas kecil untuk mengimbangi efek pendinginan gas saat tekanan turun (efek Joule-Thomson), sebelum metering dan odorisasi.
> **Number/specific**: Komponen utama PRS CNG (regulator, water heater/pemanas, flowmeter, katup).
> **Source**: Agregasi sumber teknis vendor PRS/CNG (mis. deskripsi CNG PRMS oleh produsen peralatan gas), diakses via pencarian 2026-08-11.
> **Confidence**: medium (prinsip fisika/rekayasa mapan — perbedaan CNG vs LNG dalam kebutuhan vaporizer; sumber vendor agregat untuk detail komponen, bukan LNG-Gagas-spesifik).

> **Claim**: Kementerian ESDM (Ditjen Migas) menyatakan strategi infrastruktur gas nasional mencakup **lebih dari 1.000 MMSCFD infrastruktur regasifikasi**, serta pengembangan **LNG Skala Kecil, LNG dalam tangki portabel, dan LNG untuk truk** sebagai bagian dari upaya mendorong pemanfaatan gas bumi domestik (monetisasi gas domestik tercatat 68% pada 2022).
> **Number/specific**: >1.000 MMSCFD infrastruktur regas; 68% gas domestik termonetisasi (2022).
> **Source**: Kementerian ESDM, "Ini Empat Prioritas Pengelolaan Gas Indonesia", https://www.esdm.go.id/id/media-center/arsip-berita/ini-empat-prioritas-pengelolaan-gas-indonesia, diakses 2026-08-11.
> **Confidence**: high untuk isi artikel; **medium untuk kekinian angka** — artikel merujuk data ~2022–2024 (mis. target "10 wilayah kerja baru 2024"), sehingga angka sebaiknya dilabeli tahun eksplisit, bukan disajikan sebagai "data terkini 2026" (lihat flag).

> **Claim**: Strategi gas nasional membagi pendekatan infrastruktur: Indonesia Barat mengandalkan jaringan pipa gas konvensional, sementara Indonesia Timur mengandalkan **virtual pipeline** (LNG via kapal/ISO tank + regasifikasi skala kecil) karena kondisi geografis dan pola permintaan.
> **Number/specific**: Pembagian strategi Barat (pipa) vs Timur (virtual pipeline/LNG).
> **Source**: Agregasi hasil pencarian resmi ESDM/Ditjen Migas (migas.esdm.go.id, esdm.go.id) dan dikonfirmasi arah kebijakan yang sama oleh PGN LNG, diakses via pencarian 2026-08-11.
> **Confidence**: medium-high (konsisten lintas sumber pemerintah & korporat, tetapi belum di-fetch dari satu artikel utuh — rekomendasikan penulis memfrasakan sebagai arah kebijakan umum, bukan mengutip kalimat presisi).

> **Claim**: PGN Gagas (per landing page resminya) menjalankan pola distribusi LNG "virtual pipeline" via armada darat **ISO Tank atau truk micro-bulk berisolasi termal tinggi**, dan melakukan **pemasangan instalasi vaporizer di area pabrik pelanggan** serta **desain teknik & instalasi sistem satelit** (tangki kriogenik + vaporizer) di lokasi pelanggan.
> **Number/specific**: Deskripsi layanan sebagaimana tertulis di landing page.
> **Source**: PGN Gagas (gagas.co.id), halaman "Perusahaan LNG Indonesia", https://gagas.co.id/perusahaan-lng-indonesia/, diakses 2026-08-11.
> **Confidence**: high untuk isi yang tertulis di halaman (first-party); catatan — halaman ini menyebut segmen lebih luas (termasuk pembangkit listrik & bunkering maritim) yang **belum tercantum** di `company_profile.md` snapshot — lihat flag sebelum dipakai sebagai klaim luas.

> **Claim**: PGN Gagas adalah anak usaha PT Perusahaan Gas Negara Tbk (PGN), bagian dari Subholding Gas Pertamina, berdiri 2011; memegang sertifikasi ISO 9001:2015, ISO 45001:2018 (untuk layanan distribusi CNG), dan ISO 37001:2016 (2025).
> **Number/specific**: Tahun berdiri 2011; sertifikasi 2025.
> **Source**: `knowledge_base/company_profile.md` (internal, didistilasi dari profil perusahaan resmi PGN Gagas).
> **Confidence**: high (KB pre-approved)

> **Claim**: Sebuah ISO tank kriogenik 20 kaki untuk LNG umumnya memiliki kapasitas kotor sekitar 20.000–26.000 liter, tekanan kerja maksimum sekitar 10–17 bar tergantung standar desain (EN/ASME), dengan dimensi standar kontainer ISO 20' x 8' x 8'6".
> **Number/specific**: Kapasitas & tekanan sebagaimana disebut di atas.
> **Source**: Agregasi spesifikasi produsen tangki kriogenik (mis. produk komersial ISO tank LNG), diakses via pencarian 2026-08-11.
> **Confidence**: low-medium — **spesifikasi umum pasar dari vendor**, bervariasi antar produsen/standar desain; bukan spesifikasi tetap atau milik Gagas (lihat flag).

> **Claim**: Sizing vaporizer AAV di pasar sering mengacu pada rentang laju alir sekitar 400–1.500 Nm³/jam pada suhu ambien acuan ~20°C untuk unit skala kecil-menengah; unit skala besar/terminal bisa jauh lebih tinggi.
> **Number/specific**: Rentang 400–1.500 Nm³/jam (ilustratif).
> **Source**: Agregasi materi vendor regasifikasi satelit (mis. deskripsi produk skid regasifikasi skala kecil), diakses via pencarian 2026-08-11.
> **Confidence**: low — **angka ilustratif pasar**, bukan aturan baku; kapasitas riil harus dihitung dari beban puncak, faktor keandalan, dan kondisi lokasi spesifik (lihat flag; brief secara eksplisit meminta angka ini dilabeli "spesifikasi umum pasar").

> **Claim**: Sistem PRS pada instalasi regasifikasi umumnya dirancang dengan regulasi tekanan dua tahap (double-stage) memakai katup otomatis, dilengkapi flow metering, sensor suhu, dan katup penutup darurat (emergency shut-down/ESD) sebelum gas disalurkan ke jaringan pemakai.
> **Number/specific**: Komponen PRS umum.
> **Source**: Agregasi materi vendor instalasi regasifikasi satelit LNG, diakses via pencarian 2026-08-11.
> **Confidence**: low-medium — praktik umum industri, sumber vendor agregat, bukan standar teknik Indonesia (SNI) yang terverifikasi spesifik.

## Solution focus + PGN Gagas anchor (from product_matrix.md)

| What to teach (gas-bumi/CNG/LNG tech) | Facts to state accurately | Where in article | PGN Gagas service/credential to anchor CTA |
|---|---|---|---|
| Regasifikasi LNG di sisi pelanggan (Satuan Regasifikasi/SRU): alur tangki → vaporizer → PRS → metering/odorisasi → pipa internal | Istilah "SRU" (PGN LNG); 4 jenis vaporizer & sumber panasnya; ORV kurang relevan untuk lokasi inland (butuh air laut >5°C); kapasitas & tekanan tangki = angka ilustratif pasar, bukan standar tetap | H2 #1–#5 (edukasi utama, definisi, alur, tabel vaporizer, kapasitas, kesiapan lokasi) | PGN Gagas sebagai penyalur gas bumi *beyond pipeline* yang mendampingi pasokan LNG hingga titik pemakaian pelanggan via **LNG Hub** + armada **ISO tank/truk micro-bulk** ("virtual pipeline"), termasuk mendukung **desain teknik & instalasi sistem satelit** (tangki kriogenik + vaporizer) di lokasi pelanggan — closing, framing pendamping teknis, BUKAN produsen/operator FSRU/likuifaksi. |
| Kesalahan umum (AAV frost/undersizing) | Frost menurunkan kapasitas AAV pada kelembapan tinggi/beban puncak; mitigasi umum: defrost berkala + unit cadangan (redundansi) | H2 #6 (honest/counter-conventional) | Optional mid-article aside: dukungan teknis 24 jam saat membahas kesiapan lokasi (dari company_profile.md — "Layanan 24 jam dengan perhitungan pemakaian yang akurat"). |

Reminder: PGN Gagas **menyalurkan/mengangkut/memasok/mendistribusikan/mendampingi instalasi** gas bumi (CNG/LNG) — bukan produsen/likuifaksi/operator FSRU di wellhead maupun terminal penerima. Maksimal 2–3 self-mention. Jangan pakai "pionir/pemimpin pasar" apa pun konteksnya.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Kementerian ESDM — "Ini Empat Prioritas Pengelolaan Gas Indonesia"** (diakses 2026-08-11) — https://www.esdm.go.id/id/media-center/arsip-berita/ini-empat-prioritas-pengelolaan-gas-indonesia — *what it backs*: konteks kebijakan nasional untuk infrastruktur regasifikasi, LNG skala kecil, dan LNG untuk truk sebagai prioritas pemerintah (label tahun data ~2022–2024 saat dikutip).
2. **PGN LNG (Subholding Gas Pertamina) — "Mengenal Proses Regasifikasi" & "Virtual Pipeline: An Innovation to Deliver LNG Without Pipelines"** (diakses 2026-08-11) — https://pgnlng.co.id/berita/wawasan/mengenal-proses-regasifikasi/ dan https://pgnlng.co.id/en/berita/learn/lng-virtual-pipeline/ — *what it backs*: definisi & tahapan regasifikasi, jenis vaporizer, istilah resmi "SRU", dan konsep virtual pipeline yang menjadi kerangka teknis utama artikel.
3. **Linde Engineering — "Water Bath Vaporizers"** (diakses 2026-08-11) — https://www.linde-engineering.com/products-and-services/plant-components/water-bath-vaporizers — *what it backs*: prinsip kerja water bath vaporizer dari produsen peralatan LNG global (dipakai sebagai referensi teknis netral, bukan endorsement produk).

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Bagaimana LNG diubah kembali menjadi gas di pabrik?
LNG yang tiba dalam ISO tank atau tangki kriogenik masih berbentuk cair pada suhu sekitar -160°C. Di lokasi pelanggan, cairan ini dipompa melalui vaporizer yang memanaskannya hingga kembali menjadi gas bertekanan. Gas tersebut lalu melewati pressure reduction station (PRS) untuk diturunkan tekanannya, diukur lewat metering, diberi bau (odorisasi) sebagai penanda kebocoran, lalu dialirkan ke pipa internal menuju burner pabrik.

### Apa itu vaporizer dan apa saja jenisnya?
Vaporizer adalah alat penukar panas yang mengubah LNG cair menjadi gas dengan cara memanaskannya. Empat jenis yang umum dibahas dalam literatur teknik adalah Ambient Air Vaporizer (AAV, memakai udara sekitar), Water Bath Vaporizer (memakai bak air panas), Open Rack Vaporizer (ORV, memakai air laut, tak dipakai di bawah suhu air ~5°C), dan Submerged Combustion Vaporizer (SCV, memakai gas hasil pembakaran). Pemilihannya tergantung lokasi, sumber panas yang tersedia, dan kebutuhan kapasitas.

### Apa itu satuan regasifikasi (SRU)?
Satuan Regasifikasi (Small-Scale Regasification Unit/SRU) adalah rangkaian peralatan berskala kecil yang dipasang di lokasi pelanggan untuk mengubah LNG kembali menjadi gas siap pakai. Komponen utamanya meliputi tangki kriogenik penyimpan LNG, vaporizer, dan pressure reduction station. SRU menjadi bagian dari skema "virtual pipeline" — pengiriman gas via ISO tank atau truk micro-bulk ke wilayah yang belum terjangkau jaringan pipa gas konvensional.

### Berapa lahan yang dibutuhkan untuk tangki dan regasifikasi LNG di lokasi pelanggan?
Tidak ada angka baku karena luas lahan bergantung pada kapasitas kebutuhan gas, jenis vaporizer, jumlah unit cadangan, dan jarak aman dari fasilitas lain. Sebagai gambaran umum pasar, tangki ISO 20 kaki berkapasitas sekitar 20.000–26.000 liter sudah membutuhkan area tersendiri di luar ruang untuk vaporizer, PRS, dan akses kendaraan pengangkut. Kebutuhan pasti sebaiknya dihitung tim rekayasa berdasarkan studi kelayakan lokasi.

### Apa beda Ambient Air Vaporizer dan Water Bath Vaporizer?
Ambient Air Vaporizer (AAV) memanfaatkan udara sekitar sebagai sumber panas melalui pipa bersirip, sehingga tak butuh bahan bakar tambahan tetapi rentan membentuk lapisan es (frost) saat kelembapan tinggi atau beban puncak, yang menurunkan kapasitasnya. Water Bath Vaporizer memanaskan LNG lewat kumparan pipa yang terendam air panas (dipanaskan listrik, uap, atau gas), sehingga performanya lebih stabil terhadap cuaca namun butuh sumber energi pemanas dan perawatan bak air.

### Apa beda regasifikasi LNG dengan CNG yang tidak butuh vaporizer?
CNG tetap berbentuk gas sejak dikompresi, sehingga di lokasi pelanggan ia hanya melewati pressure reduction station untuk menurunkan tekanan, dilengkapi pemanas kecil guna mengimbangi efek pendinginan gas saat tekanan turun — tanpa vaporizer kriogenik. LNG sebaliknya disimpan dalam bentuk cair pada suhu sangat rendah, sehingga wajib melalui vaporizer agar berubah fase menjadi gas sebelum dipakai. Pilihan CNG atau LNG umumnya bergantung pada volume kebutuhan dan jarak pasokan.

### Kenapa vaporizer AAV bisa membeku dan apa dampaknya?
AAV menyerap panas dari udara sekitar; saat kontak dengan pipa bersuhu sangat rendah, uap air di udara mengembun lalu membeku menjadi lapisan es (frost) pada sirip pipa. Lapisan ini menghambat perpindahan panas sehingga kapasitas vaporisasi menurun, terutama pada kelembapan tinggi atau beban puncak. Praktik umum mengatasinya adalah siklus pencairan es (defrost) berkala dan pemasangan unit cadangan agar pasokan gas tak terganggu saat satu unit sedang di-defrost.

## Data tables for the writer

### Jenis vaporizer LNG dan konteks pemakaiannya di sisi pelanggan

| Jenis | Sumber panas | Kelebihan | Keterbatasan | Konteks pemakaian di lokasi pelanggan |
|---|---|---|---|---|
| Ambient Air Vaporizer (AAV) | Udara sekitar (natural/forced draft) | Tanpa bahan bakar tambahan; sederhana; ramah lingkungan | Rentan frost pada kelembapan tinggi/beban puncak; unit relatif besar; kapasitas dipengaruhi suhu ambien | Paling umum untuk instalasi darat skala kecil–menengah di iklim kering-hangat |
| Water Bath Vaporizer | Air panas (listrik/uap/gas) | Performa stabil, tak tergantung cuaca, respons relatif cepat | Butuh sumber energi pemanas & perawatan bak air | Sering jadi pendamping/cadangan AAV, atau primer bila pasokan listrik/uap tersedia |
| Open Rack Vaporizer (ORV) | Air laut (ambient) | Efisien untuk kapasitas besar | Butuh akses air laut; tak dipakai di bawah ~5°C; potensi dampak biota laut | Jarang relevan untuk pabrik inland — lebih umum di terminal/fasilitas pesisir |
| Submerged Combustion Vaporizer (SCV) | Gas hasil pembakaran (via bak air) | Tak bergantung cuaca/lokasi; cocok beban puncak/iklim dingin | Butuh bahan bakar gas tambahan (biaya operasi); ada emisi pembakaran | Unit pendukung beban puncak (peak-shaving) atau cadangan |

*Catatan: sumber panas & prinsip kerja bersumber dari PGN LNG dan literatur teknik (lihat Core facts). Kelebihan/keterbatasan adalah generalisasi rekayasa umum — bukan spesifikasi produk tertentu.*

### CNG vs LNG di sisi pelanggan (kontras modalitas)

| Aspek | CNG (di sisi pelanggan) | LNG (di sisi pelanggan) |
|---|---|---|
| Wujud saat tiba | Gas terkompresi (tube trailer/GTM) | Cair kriogenik (~-160°C, ISO tank) |
| Peralatan utama | Pressure Reduction Station (PRS) + pemanas kecil | Tangki kriogenik + vaporizer + PRS |
| Perubahan fase | Tidak ada (tetap gas) | Cair → gas (butuh vaporizer) |
| Kompleksitas lokasi | Relatif lebih sederhana | Perlu manajemen suhu kriogenik & keselamatan tambahan |
| Ilustrasi kecocokan | Volume kebutuhan lebih kecil, jarak pasok lebih dekat (prinsip umum, hedge) | Volume kebutuhan lebih besar/jarak lebih jauh (densitas energi lebih tinggi; prinsip umum, hedge) |

## Edge cases & nuance

- **ORV bukan opsi realistis untuk kebanyakan pabrik inland** — ia butuh akses air laut bersuhu >5°C. Jangan sajikan ORV sebagai pilihan setara AAV/water bath/SCV untuk lokasi pelanggan darat; posisikan sebagai "umum di terminal besar/fasilitas pesisir", bukan opsi utama sisi pelanggan.
- **AAV bukan "buruk"** — ia tetap pilihan populer karena murah dan tak butuh bahan bakar tambahan; masalah frost dikelola lewat *desain* (margin kapasitas, siklus defrost, redundansi unit), bukan alasan untuk menghindarinya sepenuhnya.
- **Tidak ada angka kapasitas/tekanan/luas lahan yang berlaku universal.** Semua figur Nm³/jam, bar, dan liter di dossier ini adalah gambaran pasar dari vendor — sizing riil selalu hasil perhitungan spesifik-lokasi (beban puncak, redundansi, kondisi iklim). Framekan sebagai "ilustrasi", bukan rumus siap pakai.
- **Landing page Gagas lebih luas dari company_profile.md.** company_profile.md hanya mencantumkan "LNG Hub" sebagai infrastruktur; landing page (first-party, live) menjelaskan lebih detail (ISO tank/micro-bulk, instalasi vaporizer, desain sistem satelit) dan menyebut segmen tambahan (pembangkit listrik, bunkering maritim). Dossier ini memakai landing page sebagai sumber sah untuk *layanan* (sesuai instruksi brief), tetapi penulis **tidak boleh** memperluas ke klaim di luar apa yang tertulis eksplisit di sana (mis. jangan klaim Gagas sudah menjalankan bunkering maritim sebagai proyek berjalan — itu disebut sebagai segmen target/pasar, bukan proyek terverifikasi).
- **CNG-vs-LNG breakeven jarak/volume** tidak dikutip dengan angka spesifik — ini prinsip rekayasa umum (densitas energi LNG lebih tinggi per volume dibanding CNG), bukan klaim bersumber presisi. Hindari angka breakeven spesifik (mis. "di atas X km LNG lebih murah") tanpa sumber tambahan.

## Flags (open factual risk)

- ⚠️ **Rentang kapasitas vaporizer AAV (400–1.500 Nm³/jam)**: berasal dari agregasi materi vendor/pencarian, bukan standar teknik baku. Rekomendasi: label eksplisit "spesifikasi umum pasar/ilustratif" setiap kali dipakai, jangan sajikan sebagai rumus sizing.
- ⚠️ **Tekanan desain tangki satelit LNG (~5–17 bar) dan kapasitas ISO tank 20 kaki (~20.000–26.000 liter)**: sumber vendor komersial, bervariasi antar produsen/standar desain (EN vs ASME). Rekomendasi: sajikan sebagai kisaran umum, hindari angka tunggal presisi.
- ⚠️ **Pangsa pasar ORV vs SCV vs IFV di terminal global (mis. klaim "70% ORV")**: ditemukan hanya dalam ringkasan agregat pencarian tanpa sumber primer yang jelas. Rekomendasi: **jangan dikutip sebagai angka** — cukup nyatakan ORV "umum dipakai di banyak terminal skala besar" tanpa persentase.
- ⚠️ **Deskripsi mekanisme frost AAV & SCV** bersumber dari abstrak jurnal (ScienceDirect) yang diakses via ringkasan pencarian, bukan teks penuh (paywall). Confidence medium — cukup untuk prinsip umum, tapi jangan mengutip angka/temuan spesifik dari studi tersebut seolah dikonfirmasi penuh.
- ⚠️ **Angka ESDM (>1.000 MMSCFD infrastruktur regas; 68% gas domestik termonetisasi)** berasal dari artikel ESDM yang merujuk data ~2022–2024. Rekomendasi: tulis dengan label tahun eksplisit ("per ~2022–2023") — jangan disajikan seolah data 2026 terkini tanpa verifikasi ulang.
- ⚠️ **Landing page Gagas menyebut segmen pembangkit listrik & bunkering maritim** sebagai target pasar LNG — ini **tidak** tercantum di `company_profile.md`. Rekomendasi: boleh disebut sebagai "segmen yang dilayani" mengacu landing page, tapi jangan menambah detail proyek/klien spesifik di luar yang sudah terverifikasi di company_profile.md (Jasamarga, RS Darurat Wisma Atlet, Asian Games — semuanya konteks CNG, bukan LNG).
- ⚠️ **Jangan gunakan frasa "pemimpin pasar/pionir"** untuk Gagas dalam bentuk apa pun — ini larangan mutlak dari brief/CLAUDE.md, tidak bergantung pada apakah suatu sumber (termasuk ringkasan alat fetch) memakai istilah serupa.
- ⚠️ **ISO 45001:2018** di company_profile.md berlabel eksplisit "untuk layanan distribusi CNG". Jika dipakai sebagai kredensial di artikel LNG ini, frasekan secara umum sebagai bagian dari sistem manajemen keselamatan kerja Gagas — jangan menyiratkan sertifikasi tersebut mencakup operasi regasifikasi LNG secara spesifik.
- ⚠️ **Paper Neliti/Jurnal Teknik ITS** (mis. desain regasifikasi Gresik–Banjarmasin, POMITS 2014) tidak bisa diambil teks lengkapnya (403/redirect saat verifikasi). Boleh disebut sebagai *judul* bukti keterlibatan akademik Indonesia dengan topik ini, tapi **jangan** mengutip angka spesifik (kapasitas tangki, dsb.) dari paper tersebut karena tidak terverifikasi langsung dalam riset ini.

## Definition snippet draft (40–60 words)

> Regasifikasi LNG adalah proses mengubah gas alam cair (LNG) yang disimpan pada suhu sekitar -160°C kembali menjadi gas bertekanan siap pakai. Di lokasi pelanggan, proses ini berlangsung dalam satuan regasifikasi skala kecil (SRU) — tangki kriogenik, vaporizer, dan pressure reduction station — sebagai bagian dari skema pasokan gas beyond-pipeline (virtual pipeline).

## Notes for visuals (feed the writer's {IMAGE_NN} placeholders)

- **Concept 1 — Diagram alur "Dari Tangki ke Burner"**: infografis linear horizontal menampilkan 6 tahap — ISO tank/tangki kriogenik → pompa/tekanan → vaporizer (ikon 4 jenis: AAV/water bath/ORV/SCV) → PRS/regulator → metering & odorisasi → pipa internal ke burner pabrik. Gaya bersih, palet biru-hijau korporat energi, label setiap tahap dalam Bahasa Indonesia singkat.
- **Concept 2 — Tabel/infografis perbandingan 4 jenis vaporizer**: kartu perbandingan AAV, Water Bath, ORV, SCV dengan ikon sumber panas (udara/air panas/air laut/gas bakar) dan ringkasan kelebihan-keterbatasan dalam 1 baris per jenis — dirancang agar mudah discan (mendukung featured snippet/AI Overview citation).
- **Concept 3 — Ilustrasi "Kesalahan Umum: Frost pada AAV"**: gambar before/after sirip pipa AAV bersih vs tertutup lapisan es saat beban puncak/kelembapan tinggi, disertai panel kecil unit cadangan yang bergantian aktif — callout singkat menjelaskan kenapa margin kapasitas & jadwal defrost penting sebelum masalah terjadi di lapangan.
