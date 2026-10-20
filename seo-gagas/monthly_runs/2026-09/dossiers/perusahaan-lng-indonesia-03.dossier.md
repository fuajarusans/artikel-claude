---
brief_id: "perusahaan-lng-indonesia-03"
researcher_run_date: "2026-09-17"
sources_cited: 16
flags: 9
---

# Research Dossier: LNG untuk Data Center: Sumber Energi Andal di Lokasi Tanpa Pipa

## TL;DR for the writer

- **Demand story is real and sourced**: PLN EPI proyeksikan kebutuhan gas pembangkit tumbuh rata-rata **4,5%/tahun** (2026→2034, 1.748→2.490 BBTUD), porsi LNG naik **57%→67%**, kebutuhan kargo LNG naik **103→214**, dan data center disebut eksplisit sebagai pendorong (+15 GW listrik dalam 5 tahun). Semua dari PLN EPI, Agustus 2026 — gunakan angka ini, bukan angka lain yang tak terverifikasi.
- **Brief's implied "4,6–5,4%" growth range does not exactly match verified sources** — angka riil yang terverifikasi adalah **4,5%/tahun** (kebutuhan gas pembangkit PLN) dan **~5,3%/tahun** (konsumsi listrik nasional, RUPTL 2025-2034). Pakai kedua angka ini secara eksplisit dengan atribusi berbeda, jangan menyamaratakan jadi satu rentang.
- **Uptime Institute Tier III/IV dan PUE punya angka konkret**: Tier III = *concurrently maintainable*, N+1, uptime 99,982% (downtime ≤1,6 jam/tahun); Tier IV = *fault-tolerant*, 2N/N+N. PUE global rata-rata **1,54** (stabil 6 tahun beruntun per survei 2025), hyperscale 1,10–1,15 vs kolokasi/enterprise 1,58–1,80.
- **ESG/RE100 harus dijawab jujur**: LNG tetap bahan bakar fosil, TIDAK memenuhi syarat "100% renewable" RE100. Contoh nyata & sangat kuat untuk section honest: **Meta resmi keluar dari RE100 pada Juli 2026** setelah mendanai belasan pembangkit gas untuk data center AI-nya — bukti bahwa gas dipakai sebagai *bridge*, bukan solusi RE100-compliant.
- **Gagas-role finding — PENTING**: PGN Gagas TERVERIFIKASI mengoperasikan/membangun **LNG Hub** (contoh: LNG Hub Bandung, groundbreaking Agustus 2025, ~15.000 MMBTU/bulan) — tapi target sektornya adalah **industri & HOREKA (hotel-restoran-kafe)**, BUKAN data center. **Tidak ada bukti Gagas saat ini melayani pelanggan data center.** Framing untuk artikel harus aspirational/analogis ("model penyaluran beyond-pipeline yang sama relevan untuk...") — jangan klaim sebagai fakta yang sudah terjadi.

## Core facts (verified)

> **Claim**: Kebutuhan gas untuk pembangkit listrik PLN diproyeksikan tumbuh rata-rata 4,5% per tahun dari 2026 hingga 2034.
> **Number/specific**: 1.748 BBTUD (2026) → 2.490 BBTUD (2034); rata-rata 4,5%/tahun.
> **Source**: PLN EPI, dikutip ANTARA News, "PLN proyeksikan kebutuhan gas pembangkit tumbuh 4,5 persen per tahun", 6 Agustus 2026 — https://m.antaranews.com/amp/berita/5682020/pln-proyeksikan-kebutuhan-gas-pembangkit-tumbuh-45-persen-per-tahun
> **Confidence**: high

> **Claim**: Porsi LNG dalam pasokan gas PLN meningkat signifikan hingga 2034 seiring penurunan pasokan gas pipa domestik.
> **Number/specific**: 57% (2026) → 67% (2034).
> **Source**: PLN EPI via ANTARA News, 6 Agustus 2026 (idem di atas); dikonfirmasi silang oleh Dunia Energi & Indoposco (Mei 2026).
> **Confidence**: high

> **Claim**: Kebutuhan kargo LNG PLN akan naik tajam untuk mengimbangi penurunan gas pipa dan kenaikan demand listrik.
> **Number/specific**: 103 kargo (2026) → 214 kargo (2034).
> **Source**: PLN EPI, dipaparkan di 11th Annual LNG Supply, Transport & Storage Forum 2026, Bali, 7 Mei 2026 — dikutip ANTARA & Indoposco, Mei 2026. https://www.antaranews.com/berita/5563783/pln-lng-jadi-tulang-punggung-transisi-energi-nasional-hingga-2034
> **Confidence**: high (angka konsisten di banyak outlet, tapi tetap proyeksi — bukan realisasi)

> **Claim**: Data center secara eksplisit disebut PLN sebagai salah satu pendorong utama kenaikan kebutuhan listrik yang berimbas ke kebutuhan gas/LNG.
> **Number/specific**: Data center diproyeksikan menambah kebutuhan listrik ~15 GW dalam 5 tahun ke depan.
> **Source**: ANTARA News, 6 Agustus 2026 (idem); dikuatkan CNBC Indonesia, "Permintaan Gas PLN Diperkirakan Naik 4,5% per Tahun", Mei 2026 — https://www.cnbcindonesia.com/news/20260522142841-4-737102/permintaan-gas-pln-diperkirakan-naik-45-per-tahun/amp
> **Confidence**: high

> **Claim**: RUPTL PLN 2025-2034 (dokumen resmi ESDM) merencanakan penambahan kapasitas pembangkit besar dengan dominasi energi terbarukan & penyimpanan energi.
> **Number/specific**: Penambahan 69,5 GW total hingga 2034; ~76% dari EBT + battery energy storage system (BESS); fase 2025-2029 mencakup 9,2 GW gas dari total 27,9 GW baru.
> **Source**: Kementerian ESDM, siaran resmi "Menteri ESDM Umumkan RUPTL PLN 2025–2034", 26 Mei 2025 — https://www.esdm.go.id/en/media-center/news-archives/menteri-esdm-umumkan-ruptl-pln-2025-2034-serap-lebih-dari-17-juta-tenaga-kerja-baru
> **Confidence**: high

> **Claim**: Konsumsi listrik nasional diproyeksikan tumbuh signifikan sepanjang periode RUPTL 2025-2034 — didorong industri, KEK, dan kendaraan listrik.
> **Number/specific**: ~5,3%/tahun; tambahan ~205 TWh selama dekade (≈21 TWh/tahun).
> **Source**: Koran Jakarta, "Konsumsi Listrik RI Diprediksi Tumbuh 5,3% per Tahun, Pemerintah Siapkan Tambahan 69,5 GW di RUPTL", 17 September 2026 — https://koran-jakarta.com/2026-09-17/konsumsi-listrik-ri-diprediksi-tumbuh-53-per-tahun-pemerintah-siapkan-tambahan-695-gw-di-ruptl
> **Confidence**: medium-high (satu outlet pers melaporkan proyeksi pemerintah; angka arahnya konsisten dengan RUPTL resmi ESDM di atas, tapi persentase spesifik ini belum silang-cek ke dokumen ESDM primer)

> **Claim**: Kebutuhan listrik data center dalam perencanaan RUPTL naik tajam dalam satu dekade.
> **Number/specific**: ~1.098 MW (2025) → ~5.226 MW/5,2 GW (2034) — hampir 5x lipat.
> **Source**: investortrust.id, "Pemerintah Ungkap Kebutuhan Listrik untuk Data Center Capai 5,2 GW di 2034" (2026), mengutip data RUPTL/PLN.
> **Confidence**: medium (agregasi media atas data RUPTL; rekomendasikan penulis melabeli sebagai "menurut laporan media mengutip RUPTL" bila presisi angka MW jadi krusial)

> **Claim**: Pertumbuhan konsumsi listrik data center global jauh lebih cepat dari pertumbuhan konsumsi listrik total, dan akan terus melonjak.
> **Number/specific**: Konsumsi listrik data center global tumbuh ~12%/tahun sejak 2017 (>4x laju pertumbuhan total); diproyeksikan lebih dari dua kali lipat menjadi ~945 TWh pada 2030.
> **Source**: IEA, "Electricity 2026" — https://www.iea.org/reports/electricity-2026 (dan "Global Energy Review 2026")
> **Confidence**: high

> **Claim**: Standar Tier Uptime Institute mendefinisikan tingkat keandalan fasilitas data center secara terukur.
> **Number/specific**: Tier III = *concurrently maintainable*, redundansi N+1, uptime 99,982% (downtime maksimum ≤1,6 jam/tahun). Tier IV = *fault-tolerant*, arsitektur 2N/N+N, tanpa titik kegagalan tunggal, tahan gangguan terencana maupun tak terencana.
> **Source**: Uptime Institute, Tier Classification System — https://uptimeinstitute.com/tiers ; ringkasan TechTarget, "What are Uptime Institute's Data Center Tier Standards?"
> **Confidence**: high

> **Claim**: Efisiensi energi data center (PUE) global stagnan di level tinggi selama bertahun-tahun, dengan kesenjangan besar antar tipe fasilitas.
> **Number/specific**: PUE rata-rata global 1,54 — stabil selama 6 tahun berturut-turut (sejak 2018); operator hyperscale mencapai 1,10–1,15; fasilitas kolokasi/enterprise 1,58–1,80.
> **Source**: Uptime Institute, Global Data Center Survey 2025 — https://datacenter.uptimeinstitute.com/rs/711-RIA-145/images/2025.Annual.Survey.Report.pdf
> **Confidence**: high

> **Claim**: LNG memungkinkan gas bumi diangkut ke lokasi tanpa pipa lewat pengecilan volume drastis via pendinginan.
> **Number/specific**: Likuifaksi pada suhu ~-162°C; volume menyusut hingga ~1/600 dari bentuk gas — memungkinkan pengangkutan via ISO tank/truk/kapal.
> **Source**: PGN LNG, "Mengenal LNG sebagai Solusi Bahan Bakar untuk Berbagai Industri" — https://pgnlng.co.id/berita/wawasan/apa-itu-lng/ ; dikuatkan LNG ISO Tanks (lngisotanks.com) sebagai fakta teknis industri umum.
> **Confidence**: high

> **Claim**: Skema "virtual pipeline" adalah mekanisme standar untuk mengirim LNG ke lokasi tanpa jaringan pipa gas konvensional.
> **Number/specific**: LNG dimuat ke ISO tank kriogenik bervakum, diangkut via truk/kereta/kapal ke lokasi pelanggan, lalu diregasifikasi on-site menjadi gas siap pakai untuk gas engine/turbine atau boiler.
> **Source**: LNG ISO Tanks, "LNG Virtual Pipeline" — https://www.lngisotanks.com/lng-virtual-pipeline ; PGN LNG, "LNG ISO Tank: Solusi Pintar Distribusi Fleksibel" — https://pgnlng.co.id/en/berita/learn/iso-tank/
> **Confidence**: high

> **Claim**: LNG menghasilkan emisi lebih rendah dibanding bahan bakar diesel pada aplikasi mesin dual-fuel — meski besaran persisnya tergantung teknologi mesin dan kondisi operasi.
> **Number/specific**: Studi mesin dual-fuel LNG vs HFO (diesel) mencatat penurunan CO2 ~20,8–23,7% dan NOx ~77,6% pada kondisi aktual/stoikiometrik.
> **Source**: Jurnal Vokasi Elektro (Poltek STIP), "Analisis Penurunan Emisi CO2, NOx, SOx Mesin Bahan Bakar LNG (DF)" — https://jurnal.poltekstpaul.ac.id/index.php/jurvoe/article/download/65/pdf
> **Confidence**: medium (konteks studi adalah mesin marine dual-fuel, bukan genset captive power darat — generalisasi ke data center perlu di-hedge secara eksplisit)

> **Claim**: Materi edukasi resmi kelompok PGN memposisikan LNG sebagai bahan bakar yang jauh lebih rendah emisi dibanding minyak/batu bara.
> **Number/specific**: Klaim pengurangan emisi CO2 ~25–30% dibanding BBM/minyak dan ~40–50% dibanding batu bara.
> **Source**: PGN LNG, "7 Jenis Bahan Bakar: Mana yang Paling Ramah Lingkungan?" — https://pgnlng.co.id/berita/wawasan/jenis-bahan-bakar/
> **Confidence**: medium (materi edukasi/korporat kelompok PGN, bukan studi independen pihak ketiga — perlakukan sebagai klaim industri yang dilabeli, bukan angka riset)

> **Claim**: Pasar global menunjukkan pergeseran nyata: perusahaan teknologi besar memilih gas dibanding kepatuhan penuh RE100 demi memenuhi kebutuhan listrik AI/data center yang mendesak.
> **Number/specific**: Meta resmi keluar dari RE100 pada Juli 2026 setelah mendanai >12 pembangkit gas dalam setahun terakhir, termasuk proyek 7,5 GW terkait fasilitas data center Hyperion di Louisiana; Meta tetap mengklaim target tahunan "100% clean energy" via REC (bukan pasokan renewable langsung).
> **Source**: Electrek, "Meta is backing 10 gas plants... and just quit a global renewables pledge", 27 Juli 2026 — https://electrek.co/2026/07/27/meta-is-backing-10-gas-plants-and-just-quit-a-global-renewables-pledge/ ; Energy Live News, 24 Juli 2026.
> **Confidence**: high

> **Claim**: PGN Gagas membangun infrastruktur LNG Hub sebagai bagian ekspansi layanan beyond-pipeline — bukan sekadar klaim tanpa proyek konkret.
> **Number/specific**: Groundbreaking LNG Hub Bandung pada 4–5 Agustus 2025; kapasitas target ~15.000 MMBTU/bulan (~0,5 BBTUD); menyasar sektor industri dan HOREKA (hotel-restoran-kafe) yang belum terjangkau pipa gas; proyek didukung PT Nusantara Regas (operator FSRU/regasifikasi — bukan Gagas sendiri).
> **Source**: gagas.co.id, siaran pers Bandung, Agustus 2025 — https://www.gagas.co.id/subholding-gas-strengthens-beyond-pipeline-energy-solutions-for-commercial-and-public-service-sectors-in-bandung ; dikuatkan Radar Bandung, "PGN Gagas Bangun LNG Hub di Bandung, Solusi Energi Bersih untuk Sektor Horeka", 6 Agustus 2025 — https://www.radarbandung.id/2025/08/06/pgn-gagas-bangun-lng-hub-di-bandung-solusi-energi-bersih-untuk-sektor-horeka/ ; RuangEnergi.com, Agustus 2025.
> **Confidence**: high (untuk fakta proyek); target sektornya EKSPLISIT bukan data center — lihat Flags.

> **Claim**: PGN Gagas memiliki rekam jejak operasional Gaslink yang bisa dijadikan bukti kapabilitas beyond-pipeline (bukan sekadar rencana).
> **Number/specific**: Rilis Bandung (2025) menyebut 563 pelanggan Gaslink (189 industri, 374 HOREKA) dengan distribusi kumulatif 16.111.888 MMBTU selama 5 tahun (rata-rata ~8,03 BBTUD). Sumber terpisah (Katadata, September 2025) menyebut ~600 pelanggan dengan distribusi 10,85 BBTUD.
> **Source**: gagas.co.id (siaran pers Bandung, 2025); Katadata, "PGN Salurkan Kompresi Gas Alam ke 600 Pelanggan, dari Industri hingga Dapur MBG", September 2025 — https://katadata.co.id/berita/industri/690ca9d740a3b/pgn-salurkan-kompresi-gas-alam-ke-600-pelanggan-dari-industri-hingga-dapur-mbg
> **Confidence**: medium (dua sumber, dua snapshot/cakupan berbeda — jangan digabung jadi satu angka; pilih satu dengan atribusi jelas, lihat Flags)

> **Claim**: Sertifikasi ISO 45001:2018 milik PGN Gagas berlaku spesifik untuk layanan distribusi CNG, bukan untuk LNG atau data center.
> **Number/specific**: ISO 45001:2018 (Occupational Health & Safety Management System) — "untuk layanan distribusi CNG (2025)".
> **Source**: `knowledge_base/company_profile.md` (pre-approved internal fact, PGN Gagas).
> **Confidence**: high

## Solution focus + PGN Gagas anchor (from product_matrix.md)

| What to teach (gas-bumi/CNG/LNG tech) | Facts to state accurately | Where in article | PGN Gagas service/credential to anchor CTA |
|---|---|---|---|
| Konsep **captive power** berbasis gas engine/gas turbine untuk beban kritis 24/7 (data center, semikonduktor, cold-chain) | LNG cocok untuk beban tinggi-kontinu; captive power = pembangkit mandiri di lokasi pelanggan, independen dari jaringan PLN | H2 #1–#2 | Tidak perlu anchor Gagas di sini — murni edukasi vendor-neutral |
| Rantai pasok **LNG Hub → ISO tank/virtual pipeline → regasifikasi on-site** ke lokasi beyond-pipeline | Likuifaksi -162°C, volume 1/600; ISO tank kriogenik via truk/kereta/kapal; regasifikasi di lokasi pelanggan | H2 #4 "Bagaimana LNG Sampai ke Data Center Tanpa Pipa?" | **LNG Hub** PGN Gagas (contoh: LNG Hub Bandung, groundbreaking Agustus 2025, ~15.000 MMBTU/bulan) — framing: "model penyaluran yang sama relevan untuk beban kritis lain di lokasi tanpa pipa", BUKAN klaim sudah melayani data center |
| Trade-off **LNG vs diesel** (biaya, emisi, keandalan, ESG) | Emisi lebih rendah (rentang bersumber, label sebagai estimat); LNG tetap fosil, bukan RE100-compliant | H2 #3 (tabel) & H2 #5 (honest section) | — (edukasi netral; jangan pakai klaim emisi Gagas spesifik, tidak tersedia) |
| Closing/CTA | PGN Gagas sebagai anak usaha PGN/Subholding Gas Pertamina, distributor gas bumi beyond-pipeline yang mengoperasikan LNG Hub | Penutup + soft CTA ke gagas.co.id | Positioning line company_profile.md: *"Sebagai penopang bisnis hilir PGN, PGN Gagas memperluas manfaat gas bumi nasional ke daerah tanpa pipa melalui jaringan SPBG, Mother Station, dan moda transportasi CNG"* (paraphrase, tambahkan LNG Hub) |

Reminder: PGN Gagas **menyalurkan/mengangkut/memasok/mendistribusikan** gas bumi (CNG/LNG) — bukan produsen di hulu, bukan operator regasifikasi/FSRU (itu peran Nusantara Regas dalam proyek Bandung). Max 2–3 self-mentions.

## Authoritative external sources (≥2 strong, for the writer to link out)
1. **Kementerian ESDM, 26 Mei 2025** — https://www.esdm.go.id/en/media-center/news-archives/menteri-esdm-umumkan-ruptl-pln-2025-2034-serap-lebih-dari-17-juta-tenaga-kerja-baru — *backs*: RUPTL 2025-2034 (69,5 GW, 76% EBT+BESS), konteks bauran energi nasional.
2. **PLN EPI, via ANTARA News, 6 Agustus 2026** — https://m.antaranews.com/amp/berita/5682020/pln-proyeksikan-kebutuhan-gas-pembangkit-tumbuh-45-persen-per-tahun — *backs*: pertumbuhan kebutuhan gas 4,5%/tahun, porsi LNG 57%→67%, peran data center sebagai pendorong.
3. **IEA, "Electricity 2026"** — https://www.iea.org/reports/electricity-2026 — *backs*: pertumbuhan konsumsi listrik data center global (~12%/tahun sejak 2017; menuju ~945 TWh pada 2030) — konteks global/pembanding.
4. **Uptime Institute** — https://uptimeinstitute.com/tiers dan Global Data Center Survey 2025 — *backs*: definisi Tier III/IV, angka PUE global 1,54.
5. **gagas.co.id, siaran pers Bandung, Agustus 2025** — https://www.gagas.co.id/subholding-gas-strengthens-beyond-pipeline-energy-solutions-for-commercial-and-public-service-sectors-in-bandung — *backs*: fakta LNG Hub Bandung (kapasitas, target sektor, mitra Nusantara Regas).
6. **Electrek, 27 Juli 2026** — https://electrek.co/2026/07/27/meta-is-backing-10-gas-plants-and-just-quit-a-global-renewables-pledge/ — *backs*: nuansa ESG/RE100 — bukti nyata gas dipakai untuk captive power data center global meski bukan RE100-compliant.

## FAQ Q&As (drafted, Bahasa Indonesia)

### Apakah data center bisa memakai gas bumi/LNG sebagai sumber listrik?
Bisa. Gas bumi dalam bentuk LNG dapat menjadi bahan bakar *captive power* di data center melalui gas engine atau gas turbine yang mengonversinya menjadi listrik langsung di lokasi (on-site). PLN EPI memproyeksikan kebutuhan gas pembangkit tumbuh rata-rata 4,5% per tahun hingga 2034, dengan porsi LNG naik dari 57% ke 67%, seiring data center diperkirakan menambah kebutuhan listrik hingga 15 GW dalam lima tahun ke depan (PLN EPI, Agustus 2026).

### Apa keunggulan LNG dibanding genset diesel untuk beban kritis?
LNG umumnya menghasilkan emisi lebih rendah dibanding diesel — riset pada mesin dual-fuel mencatat penurunan NOx hingga sekitar 77% dan CO2 sekitar 21–24% dibanding bahan bakar diesel/HFO (Jurnal Vokasi Elektro Poltek STIP), serta tanpa emisi SOx karena LNG tidak mengandung sulfur. Namun keunggulan nyata bergantung pada skala beban, jarak pasokan, dan desain sistem; untuk beban kecil atau sementara, diesel atau baterai bisa tetap lebih praktis.

### Bagaimana pasokan LNG menjangkau lokasi data center tanpa pipa?
LNG disalurkan lewat skema "virtual pipeline": gas dicairkan pada suhu sekitar -162°C sehingga volumenya menyusut hingga 1/600 dari bentuk gas, lalu diangkut memakai ISO tank kriogenik via truk, kereta, atau kapal menuju LNG Hub terdekat, kemudian diregasifikasi on-site menjadi gas siap pakai untuk gas engine pelanggan. PGN Gagas, misalnya, membangun LNG Hub di Bandung (groundbreaking Agustus 2025) berkapasitas sekitar 15.000 MMBTU per bulan untuk sektor industri dan HOREKA.

### Apakah LNG sejalan dengan target ESG/RE100?
Tidak sepenuhnya. LNG tetap bahan bakar fosil dan tidak memenuhi syarat "100% renewable" versi RE100, meski emisinya lebih rendah dibanding diesel atau batu bara. Tren global bahkan menunjukkan pergeseran: Meta resmi keluar dari RE100 pada Juli 2026 setelah mendanai belasan pembangkit gas untuk data center AI-nya (Electrek, Juli 2026). LNG lebih tepat diposisikan sebagai energi transisi/*bridge*, bukan pengganti komitmen energi terbarukan.

### Berapa keandalan pasokan yang wajar diminta dari penyedia?
Acuannya bisa mengikuti klasifikasi Tier Uptime Institute: Tier III (*concurrently maintainable*, redundansi N+1) menargetkan uptime 99,982% atau downtime maksimum sekitar 1,6 jam per tahun, sementara Tier IV (*fault-tolerant*, 2N/N+N) dirancang tanpa titik kegagalan tunggal. Pasokan bahan bakar captive power idealnya diselaraskan dengan target tier fasilitas, termasuk cadangan stok LNG on-site untuk mengantisipasi gangguan logistik.

### Kapan LNG belum tepat untuk kebutuhan data center?
LNG kurang ideal untuk beban kecil, sementara, atau fasilitas yang sudah memiliki akses jaringan PLN andal plus PPA energi terbarukan yang mencukupi — investasi tangki, ISO tank, dan unit regasifikasi baru sepadan untuk volume tinggi-kontinu. Operator juga perlu mempertimbangkan risiko *lock-in* kontrak jangka panjang serta kesiapan tim menangani rantai dingin (*cold-chain*) LNG sebelum berkomitmen penuh.

### Apa itu captive power dan bedanya dengan pasokan dari PLN?
Captive power adalah pembangkit listrik yang dibangun dan dioperasikan sendiri oleh pelanggan di lokasinya, berfungsi sebagai sumber utama atau cadangan yang independen dari jaringan distribusi PLN. Berbeda dari pasokan grid PLN yang bergantung pada jaringan transmisi bersama, captive power berbasis gas engine/turbine memberi kendali langsung atas keandalan pasokan — relevan bagi data center dengan target uptime tinggi di lokasi yang jaringannya belum tentu sanggup menopang beban kritis.

### Berapa PUE yang dianggap efisien untuk data center?
Rata-rata PUE (Power Usage Effectiveness) global bertahan di angka 1,54 selama enam tahun berturut-turut menurut Uptime Institute Global Data Center Survey 2025, dengan operator hyperscale mencatat 1,10–1,15 sementara fasilitas kolokasi/enterprise berkisar 1,58–1,80. Semakin mendekati 1,0, semakin efisien penggunaan energi fasilitas — makin sedikit energi terbuang untuk pendinginan dan overhead di luar komputasi.

## Data tables for the writer

### LNG vs Genset Diesel untuk Captive Power
| Aspek | LNG (gas engine/turbine) | Diesel (genset) |
|---|---|---|
| Emisi CO2 | Lebih rendah — riset mesin dual-fuel mencatat penurunan ~21–24% vs HFO/diesel (Jurnal Poltek STIP); klaim industri PGN LNG: ~25–30% vs BBM (label sebagai estimat, rentang tergantung teknologi mesin) | Baseline pembanding |
| Emisi NOx/SOx/partikulat | NOx turun signifikan (~77% pada studi dual-fuel); tanpa emisi SOx (LNG bebas sulfur) | Lebih tinggi pada ketiganya |
| Kontinuitas pasokan | Butuh rantai LNG Hub → ISO tank → regasifikasi; cocok volume tinggi-kontinu; butuh perencanaan logistik & tangki on-site | Pasokan solar lebih mudah didapat jangka pendek, tapi rentan fluktuasi harga & keterbatasan penyimpanan besar |
| Kesesuaian ESG/RE100 | Tetap fosil — TIDAK RE100-compliant, tapi lebih rendah emisi (label sebagai *transisi/bridge*) | Tetap fosil, umumnya emisi lebih tinggi — juga bukan RE100-compliant |
| Investasi awal | Lebih tinggi (tangki, ISO tank/virtual pipeline, unit regasifikasi) — sepadan untuk beban besar-kontinu | Lebih rendah, cocok untuk beban kecil/darurat/sementara |
| Kapan cocok | Beban kritis 24/7 skala menengah-besar, lokasi tanpa pipa, komitmen jangka panjang | Backup sementara, beban kecil, atau situasi darurat jangka pendek |

*Catatan: label semua angka emisi sebagai rentang bersumber (bukan spesifikasi terjamin untuk instalasi tertentu) — sumber berbeda konteks (mesin marine dual-fuel vs materi edukasi korporat).*

### Klasifikasi Tier Uptime Institute (ringkas)
| Tier | Karakteristik | Target uptime/downtime |
|---|---|---|
| Tier III | *Concurrently maintainable*, redundansi N+1 | 99,982% uptime (≤1,6 jam downtime/tahun) |
| Tier IV | *Fault-tolerant*, arsitektur 2N/N+N, tanpa titik kegagalan tunggal | Tahan gangguan terencana & tak terencana |

*Sumber: Uptime Institute, Tier Classification System.*

## Edge cases & nuance

- **Skala LNG Hub Gagas (Bandung) relatif kecil** (~15.000 MMBTU/bulan ≈ 0,5 BBTUD) dibanding beban gas engine kontinu yang biasanya dibutuhkan data center hyperscale skala puluhan-ratusan MW — jangan menyiratkan kesesuaian kapasitas tanpa kualifikasi eksplisit ("skala awal", "model yang dapat dikembangkan").
- **RE100 dan ESG bukan hal yang sama** — RE100 spesifik soal 100% listrik terbarukan; target ESG korporat lain (net-zero jangka panjang, efisiensi, dsb.) bisa mengakomodasi gas sebagai *bridge fuel* meski tidak RE100-compliant. Jangan mencampur dua konsep ini di artikel tanpa membedakannya.
- **Gas turbine besar (ratusan MW) yang lazim dipakai PLN untuk pembangkit grid (contoh: Muara Karang 500 MW) berbeda kelas dari gas engine/turbine skala captive power (biasanya beberapa MW hingga puluhan MW)** — jangan menyamakan keduanya seolah teknologi captive power data center identik dengan pembangkit utilitas skala besar.
- **Angka pelanggan Gaslink Gagas berbeda antar sumber** (563 pelanggan/5 tahun vs ~600 pelanggan/Sept 2025) — kemungkinan snapshot waktu/cakupan geografis berbeda, bukan kontradiksi faktual, tapi jangan digabung jadi satu angka tunggal.
- **LNG Hub Bandung baru groundbreaking Agustus 2025** — belum ada konfirmasi publik status operasional penuh per September 2026; jika artikel menyebutnya, gunakan kata kerja yang akurat ("sedang dibangun/dikembangkan" bila status operasional belum terverifikasi, bukan "telah beroperasi").

## Flags (open factual risk)

- ⚠️ **Rentang pertumbuhan listrik "4,6–5,4%/tahun" pada brief tidak persis cocok dengan angka yang berhasil diverifikasi** (4,5%/tahun untuk kebutuhan gas pembangkit PLN 2026-2034; ~5,3%/tahun untuk konsumsi listrik nasional RUPTL 2025-2034) → rekomendasi: gunakan kedua angka riil ini dengan atribusi terpisah dan jelas, jangan memakai rentang gabungan brief yang tidak tersumber langsung.
- ⚠️ **Tidak ada bukti PGN Gagas saat ini melayani pelanggan data center** — seluruh materi resmi (LNG Hub Bandung, rekam jejak Gaslink) menyasar industri umum dan sektor HOREKA, bukan data center → rekomendasi: framing HARUS aspirational/analogis ("model penyaluran yang sama relevan untuk kebutuhan beban kritis seperti data center"), jangan pernah menyiratkan Gagas sudah punya klien data center.
- ⚠️ **Halaman landing gagas.co.id/perusahaan-lng-indonesia yang sudah live saat ini memuat klaim "market leader" dan penargetan pasar ekspor** — ini BERTENTANGAN dengan blacklist company_profile.md (dilarang superlatif & klaim di luar cakupan hilir/domestik) → rekomendasi: JANGAN jadikan halaman ini sebagai sumber framing; gunakan hanya company_profile.md + siaran pers yang sudah diverifikasi di dossier ini.
- ⚠️ **ISO 45001:2018 Gagas berlaku spesifik untuk layanan distribusi CNG** (per company_profile.md) — jangan diperluas seolah menjadi sertifikasi keselamatan khusus LNG atau data center tanpa verifikasi tambahan.
- ⚠️ **Gagas BUKAN operator regasifikasi/FSRU** — proyek LNG Hub Bandung didukung PT Nusantara Regas untuk sisi pasokan/regasifikasi; jangan mengklaim Gagas mengoperasikan fasilitas regasifikasi/FSRU sendiri.
- ⚠️ **Klaim "LNG sebagai penyeimbang energi terbarukan"** (dari brief) tidak ditemukan dalam frasa eksplisit di dokumen resmi ESDM/PLN yang diakses — pesan PLN EPI mendukung peran LNG bagi *ketahanan sistem kelistrikan nasional* secara umum (mengimbangi intermitensi & risiko geopolitik pasokan), tapi bukan klaim teknis spesifik "LNG menyeimbangkan pembangkit EBT untuk kebutuhan satu data center" → rekomendasi: frasakan secara umum di level sistem kelistrikan, jangan spesifik-teknis ke level fasilitas data center individual.
- ⚠️ **Angka pelanggan Gaslink berbeda antar dua sumber** (563/5 tahun vs ~600/Sept 2025, MMBTU vs BBTUD berbeda basis) → rekomendasi: pilih SATU angka dengan atribusi sumber+tanggal jelas, jangan menjumlahkan atau merata-ratakan keduanya.
- ⚠️ **Figur kapasitas data center Edgnex Jakarta (144 MW, PUE 1,32, investasi USD 2,3 miliar) bersumber dari situs agregator riset pasar (imarcgroup/researchandmarkets), bukan siaran pers primer** → rekomendasi: jika dipakai, atribusikan sebagai "menurut laporan riset pasar" atau pertimbangkan untuk drop bila butuh presisi tinggi.
- ⚠️ **Perbandingan emisi LNG vs diesel memakai dua sumber dengan konteks berbeda** (studi mesin dual-fuel marine vs materi edukasi korporat PGN LNG untuk aplikasi darat/industri) → rekomendasi: jangan mencampur angka dari dua sumber ini menjadi satu klaim tunggal; kutip masing-masing dengan konteksnya sendiri, atau gunakan rentang paling konservatif dengan label "estimasi, bervariasi menurut teknologi mesin."

## Definition snippet draft (40–60 words)

> *Captive power* berbasis LNG (*Liquefied Natural Gas*) adalah pembangkit listrik mandiri di lokasi pelanggan yang memakai gas alam cair sebagai bahan bakar gas engine atau gas turbine, alih-alih bergantung penuh pada jaringan PLN atau genset diesel. Pendekatan ini menyuplai kebutuhan listrik kritis 24 jam bagi fasilitas seperti data center di lokasi yang belum terjangkau pipa gas, lewat rantai LNG Hub dan regasifikasi on-site. (52 kata)

## Notes for visuals (feed the writer's {IMAGE_NN} placeholders)

- **Concept 1 — Diagram rantai pasok beyond-pipeline**: alur horizontal LNG Hub → ISO tank/*virtual pipeline* (truk bervakum) → unit regasifikasi on-site → gas engine/turbine → beban kritis data center, dengan jaringan PLN digambar paralel sebagai sumber sekunder/backup. Gaya flat-diagram korporat, palet biru-oranye PGN, label Bahasa Indonesia pada tiap tahap, sertakan angka -162°C dan "1/600 volume" sebagai anotasi kecil di titik likuifaksi.
- **Concept 2 — Infografik perbandingan LNG vs diesel genset**: dua kolom ikon (tangki LNG vs drum diesel) dengan 4 baris metrik — emisi CO2/NOx, kontinuitas pasokan, kesesuaian ESG, kecocokan skala beban — memakai simbol centang/silang dan rentang angka bersumber (label kecil "estimasi, bervariasi" di footer).
- **Concept 3 — Tangga keandalan Tier Uptime Institute**: infografik vertikal 4 anak tangga (Tier I–IV) naik dari kiri-bawah ke kanan-atas, tiap anak tangga diberi label downtime tahunan (mis. Tier III: ≤1,6 jam/tahun) dan ikon redundansi (N, N+1, 2N/N+N), dengan highlight visual pada Tier III & IV sebagai fokus artikel.
