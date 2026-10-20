---
brief_id: "gaslink-01"
researcher_run_date: "2026-07-07"
sources_cited: 9
flags: 6
---

# Research Dossier: Keandalan Pasokan Gaslink: Cara Menjaga Gas Tak Terputus

## TL;DR for the writer

- The **general virtual-pipeline mechanism** (GTM shuttling between Mother Station and customer PRS, trailer/module rotation, buffer inventory) is well-documented as an **industry concept** internationally (XNG, Certarus, CNG Direct) — teach this as *how virtual pipelines generally work*, not as a Gaslink-specific engineered spec, since PGN Gagas has not published its own cascade/rotation/buffer-count details.
- **Confirmed, citable PGN Gagas facts**: 24-hour service (ANTARA, 2019, still repeated in later coverage), smart metering that bills on actual measured volume/pressure rather than per-cylinder estimate (gagas.co.id), and current 2025 operating scale — **600+ pelanggan** and **4.067.002 MMBTU disalurkan sepanjang 2025** (kumparan, Nov 2025, citing PGN Corporate Secretary Fajriyah Usman) — a good "this is a real, running system" credibility beat, but it is a **scale/adoption stat, not an uptime/SLA stat** — do not conflate the two.
- **No public source confirms an uptime percentage, a formal written SLA, a guaranteed response-time window, or an exact GTM/buffer redundancy count for Gaslink.** Any such figure must be hedged or omitted — this is the single biggest risk in this brief.
- The **PRS working-pressure range (~0.8–1.5 bar, from ~200–250 bar in the CNG tube trailer)** is confirmable as a general CNG/virtual-pipeline industry spec, not published by PGN Gagas as an official number — cite it labeled as "kisaran umum industri," not as a Gaslink spec sheet figure.
- ESDM confirms industry is the **largest domestic gas consumer** (2024 data: industri 30.83% dari alokasi domestik gas bumi) and that **69% of Indonesia's H1-2025 gas utilization (5,598 BBTUD) went to domestic use** — solid national-context anchors, but neither source states a reliability/uptime percentage for gas distribution — don't borrow the "69% domestic" figure to imply a reliability guarantee.

## Core facts (verified)

> **Claim**: Gaslink adalah layanan CNG (Compressed Natural Gas) PGN Gagas untuk pelanggan industri dan komersial di luar jaringan pipa gas, disalurkan lewat Gas Transportation Module (GTM).
> **Number/specific**: n/a (definisi produk)
> **Source**: company_profile.md (pre-approved); gagas.co.id/gaslink (fetched 2026-07-07)
> **Confidence**: high

> **Claim**: PGN Gagas (melalui Gaslink) menyediakan layanan pengisian 24 jam setiap hari, termasuk permintaan pengisian tengah malam.
> **Number/specific**: konfirmasi langsung dari Tria Siswandi, Area Head PT Gagas Energi Indonesia — "Kami memberikan pelayanan 24 jam. Bahkan bila pelanggan meminta mengisi pukul 12.00 tengah malam, kami isi."
> **Source**: ANTARA News, "PGN layani pelanggan Gaslink 24 jam", https://www.antaranews.com/berita/811253/pgn-layani-pelanggan-gaslink-24-jam, dipublikasikan 17 Maret 2019
> **Confidence**: high (direct quote from named company representative; corroborated by a named customer in the same article)

> **Claim**: Klaim layanan 24 jam Gaslink dikonfirmasi langsung oleh pelanggan riil (bukan hanya klaim korporat sepihak).
> **Number/specific**: Mufrani, General Manager Haris Resort Waterfront Batam, menyatakan resort mengisi cradle setiap hari karena kapasitasnya kecil, dan Gagas selalu siap mengisi ulang saat gas habis sehingga pasokan energi tidak terputus.
> **Source**: ANTARA News, ibid., 17 Maret 2019
> **Confidence**: high

> **Claim**: Artikel ANTARA yang sama TIDAK menyebutkan angka SLA, waktu respons formal, jumlah cadangan GTM, atau sistem cascade/buffer tertentu — hanya klaim ketersediaan 24 jam secara umum.
> **Number/specific**: n/a — ini adalah catatan ketiadaan data, bukan klaim positif
> **Source**: ANTARA News, ibid., 2019 (verifikasi silang WebFetch, 2026-07-07)
> **Confidence**: high (confidence dalam *ketiadaan* klaim ini, bukan dalam adanya SLA)

> **Claim**: Sepanjang 2025 (per data hingga September 2025), Gaslink telah menjangkau lebih dari 600 pelanggan di segmen industri, komersial, dan UMKM.
> **Number/specific**: 600+ pelanggan; realisasi penyaluran ~10,85 BBTUD (per Sept 2025); volume kumulatif 2025 sebesar 4.067.002 MMBTU
> **Source**: kumparan.com (kumparanBISNIS), "PGN Salurkan Gaslink ke 600 Pelanggan per September 2025, Hotel hingga Dapur MBG", https://kumparan.com/kumparanbisnis/pgn-salurkan-gaslink-ke-600-pelanggan-per-september-2025-hotel-hingga-dapur-mbg-26Bugu2sc4Z, dipublikasikan 6 November 2025, mengutip Fajriyah Usman (Corporate Secretary PGN)
> **Confidence**: high (named source, named spokesperson, specific figures, recent date)

> **Claim**: Angka 600+ pelanggan/4.067.002 MMBTU adalah bukti **skala operasi berkelanjutan**, bukan bukti langsung dari uptime/keandalan teknis (mis. tidak ada gangguan pasokan).
> **Number/specific**: n/a — catatan interpretasi
> **Source**: penilaian silang terhadap sumber di atas (tidak ada klaim uptime dalam artikel manapun yang ditemukan)
> **Confidence**: high (untuk batasan interpretasi ini)

> **Claim**: Segmen pelanggan Gaslink mencakup hotel, restoran/kafe, industri, UMKM, hingga program dapur Makan Bergizi Gratis (MBG) di Batam, Bogor, dan Boyolali.
> **Number/specific**: (lihat di atas)
> **Source**: kumparan.com, ibid., 6 November 2025
> **Confidence**: high

> **Claim**: Gaslink menggunakan smart meter yang mengukur volume gas yang benar-benar mengalir masuk secara presisi (bukan estimasi per tabung), dengan penagihan berbasis volume aktual terkoreksi tekanan dan suhu.
> **Number/specific**: satuan m3 terkoreksi tekanan & suhu; sistem monitoring elektronik untuk volume & tekanan
> **Source**: gagas.co.id/gaslink (WebFetch, 2026-07-07)
> **Confidence**: high (first-party PGN Gagas product page)

> **Claim**: PGN Gagas (di landing page Gaslink) mengklaim aliran gas "stabil dan berkesinambungan" dengan sistem yang memantau volume secara terukur, serta stabilitas tekanan gas konstan pada titik serah.
> **Number/specific**: n/a (klaim kualitatif, bukan angka uptime)
> **Source**: gagas.co.id/gaslink (WebFetch, 2026-07-07)
> **Confidence**: high untuk *keberadaan klaim ini di materi first-party*; medium untuk penggunaannya sebagai jaminan teknis kuantitatif (karena tidak disertai angka)

> **Claim**: Secara konsep umum virtual pipeline (bukan spesifik Gaslink), CNG dikompresi di Mother Station hingga sekitar 200–250 bar dalam tabung/trailer, lalu diturunkan ke tekanan kerja aman sekitar 0,8–1,5 bar di Pressure Reduction Station (PRS) milik pelanggan, disesuaikan kebutuhan peralatan pelanggan.
> **Number/specific**: ~200–250 bar (tekanan simpan) → ~0,8–1,5 bar (tekanan kerja pasca-PRS)
> **Source**: sintesis dari sumber industri virtual-pipeline umum (mis. Dixon Valve "Virtual CNG Pipelines: An Overview", https://dixonvalve.com/en/news-and-events/news/virtual-cng-pipelines-overview) dan deskripsi teknis GTM/PRS yang konsisten pada beberapa rujukan industri; TIDAK ditemukan pada gagas.co.id sebagai spesifikasi resmi Gaslink
> **Confidence**: medium — valid sebagai *rentang umum industri CNG/virtual pipeline*, bukan spesifikasi resmi PGN Gagas; harus dilabeli sebagai rentang umum, bukan dipatok sebagai angka resmi Gaslink

> **Claim**: Praktik rotasi trailer/modul (cascade) — saat satu modul/trailer hampir habis, digantikan modul penuh tanpa jeda pasokan, dijaga oleh buffer inventaris di lokasi — adalah pola operasi standar pada model virtual pipeline CNG secara global.
> **Number/specific**: n/a (praktik kualitatif); satu vendor internasional (XNG) mempublikasikan klaim ">99% gas supply reliability" untuk operasinya sendiri
> **Source**: XNG, "The XNG Virtual Pipeline Solution", https://www.xng.com/virtual-pipeline/; Dixon Valve, ibid.; Certarus, https://certarus.com/cng (semua diakses 2026-07-07)
> **Confidence**: medium-high untuk *konsep mekanisme umum*; **angka ">99%" TIDAK berasal dari PGN Gagas/Gaslink** dan tidak boleh dikutip seolah itu angka Gaslink — lihat flags

> **Claim**: PGN Gagas adalah anak usaha PT Perusahaan Gas Negara Tbk (PGN), bagian dari Subholding Gas Pertamina — bukan PGN itu sendiri, dan bukan produsen gas bumi dari hulu.
> **Number/specific**: n/a
> **Source**: company_profile.md (pre-approved); dikonfirmasi ulang oleh kumparan.com (2025) yang menyebut Gaslink "dioperasikan PGN Gagas, anak usaha PGN yang merupakan bagian dari Subholding Gas Pertamina"
> **Confidence**: high

> **Claim**: Sektor industri adalah konsumen energi final terbesar di Indonesia menurut porsi permintaan per sektor.
> **Number/specific**: sektor industri memiliki share tertinggi dalam demand energi per sektor, yaitu 45,94% (2024)
> **Source**: Kementerian ESDM, "Sektor Industri Konsumen Terbesar Energi Final", esdm.go.id/id/media-center/news-archives/sektor-industri-konsumen-terbesar-energi-final (diakses 2026-07-07)
> **Confidence**: high (sumber resmi ESDM, meski perlu dicek tahun rilis persis saat dikutip)

> **Claim**: Pada Semester I 2025, pemanfaatan gas bumi nasional mencapai 5.598 BBTUD, dengan 69% (3.877 BBTUD) dialokasikan untuk domestik dan 31% (1.721 BBTUD) untuk ekspor.
> **Number/specific**: 5.598 BBTUD total; 69% domestik / 31% ekspor
> **Source**: Ditjen Migas Kementerian ESDM, "Capaian Kinerja Semester I Tahun 2025", https://migas.esdm.go.id/siaranpers/Capaian-Kinerja-Semester-I-Tahun-2025-Produksi-Komoditas-Makin-Optimal-Akses-Listrik-Meningkat, dipublikasikan 11 Agustus 2025
> **Confidence**: high (sumber resmi Ditjen Migas, tanggal jelas)

> **Claim**: Dari total pemanfaatan domestik itu, porsi terbesar dialokasikan ke industri.
> **Number/specific**: dari alokasi domestik, 40% (1.473 BBTUD) untuk industri — porsi tunggal terbesar dibanding listrik (19%), pupuk (19%), LNG domestik (19%), LPG domestik (2%), dan gas kota/jargas (1%, ~15,48 BBTUD)
> **Source**: Ditjen Migas Kementerian ESDM, ibid., 11 Agustus 2025
> **Confidence**: high

> **Claim**: PGN menegaskan komitmen menjaga keandalan pasokan gas untuk industri sebagai bagian implementasi kebijakan harga gas pemerintah, namun pernyataan ini bersifat komitmen kebijakan/harga — bukan penjelasan mekanisme teknis redundansi.
> **Number/specific**: n/a (pernyataan korporat kualitatif)
> **Source**: Dunia Energi, "Jalankan Kebijakan Pemerintah, PGN Jamin Keandalan Pasokan Gas untuk Industri", https://www.dunia-energi.com/jalankan-kebijakan-pemerintah-pgn-jamin-keandalan-pasokan-gas-untuk-industri/ (diakses 2026-07-07)
> **Confidence**: medium — sumber berita korporat/kebijakan, tidak menyebutkan angka teknis; jangan gunakan sebagai bukti mekanisme keandalan Gaslink secara spesifik

> **Claim**: PGN Gagas adalah pemegang sertifikasi ISO 9001:2015 (Quality Management), ISO 45001:2018 (Occupational Health & Safety, untuk layanan distribusi CNG), dan ISO 37001:2016 (Anti-Bribery Management System), tahun 2025.
> **Number/specific**: 3 sertifikasi ISO, tahun 2025
> **Source**: company_profile.md (pre-approved, distilled dari materi profil perusahaan PGN Gagas)
> **Confidence**: high (kredensial first-party pre-approved)

## Solution focus + PGN Gagas anchor (from product_matrix.md)

| What to teach (gas-bumi/CNG tech) | Facts to state accurately | Where in article | PGN Gagas service/credential to anchor CTA |
|---|---|---|---|
| Mekanisme umum virtual pipeline: Mother Station → kompresi CNG (~200–250 bar) → GTM (truk sebagai "pipa gas virtual") → PRS pelanggan (turun ke ~0,8–1,5 bar) → titik serah | Rentang tekanan dilabeli sebagai "kisaran umum industri", bukan spek resmi Gaslink. Rotasi/cascade modul & buffer inventaris dijelaskan sebagai *praktik umum* model virtual pipeline (didukung sumber vendor internasional), bukan jumlah cadangan spesifik Gaslink (tidak dipublikasikan). | H2 #1 & #2 (mekanisme) | Aside singkat: Gaslink beroperasi via GTM sebagai bagian jaringan infrastruktur gas bumi PGN |
| Smart metering / telemetri untuk penagihan akurat berbasis volume aktual (bukan estimasi) | Fakta terverifikasi first-party: meter mengukur volume gas presisi, dikoreksi tekanan & suhu, billing berbasis pemakaian aktual. **Tidak** ada bukti publik bahwa data ini dipakai untuk *scheduling ritase prediktif otomatis* — hedge kalimat ini sebagai potensi manfaat operasional, bukan fitur terkonfirmasi. | H2 #2 (mekanisme), 1 aside maksimal | Smart metering "Perhitungan Akurat" — fitur first-party Gaslink |
| Layanan 24 jam sebagai lapisan keandalan operasional | Dikonfirmasi ANTARA 2019 dengan kutipan langsung + testimoni pelanggan riil; masih relevan sebagai janji layanan berkelanjutan meski sumber berumur beberapa tahun — beri catatan tahun sumber | H2 #2, FAQ | Layanan 24 jam Gaslink |
| Skala operasi sebagai bukti kontinuitas (bukan uptime) | 600+ pelanggan & 4.067.002 MMBTU (2025, kumparan Nov 2025) — gunakan untuk menunjukkan sistem berjalan stabil dalam skala nyata, JANGAN framing sebagai "99% uptime" atau SLA tertulis | H2 #1 (konteks) atau closing | Bukti skala Gaslink 2025 |
| Integrasi ke jaringan gas bumi PGN sebagai redundansi hulu | Gagas = anak usaha PGN, bagian Subholding Gas Pertamina — framing yang benar adalah "terhubung ke rantai pasok gas bumi nasional", bukan "PGN sendiri" atau "produsen gas" | H2 #5 (honest/nuance) & closing | Closing CTA: Gaslink sebagai layanan CNG PGN Gagas yang terintegrasi ke jaringan gas bumi PGN |

Reminder: PGN Gagas **menyalurkan/mengangkut/memasok/mendistribusikan** gas bumi (CNG) via GTM — bukan produsen gas di hulu. Self-mentions used in this mapping: 3 (mechanism aside, 24-hour service, closing CTA) — at the upper limit; writer should ensure they don't stack in the same paragraph.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Kementerian ESDM — Ditjen Migas, "Capaian Kinerja Semester I Tahun 2025"** (11 Agustus 2025) — https://migas.esdm.go.id/siaranpers/Capaian-Kinerja-Semester-I-Tahun-2025-Produksi-Komoditas-Makin-Optimal-Akses-Listrik-Meningkat — *backs*: pemanfaatan gas bumi nasional 5.598 BBTUD, 69% domestik, 40% dari alokasi domestik untuk industri — konteks nasional kenapa keandalan pasokan gas ke industri penting.
2. **ANTARA News, "PGN layani pelanggan Gaslink 24 jam"** (17 Maret 2019) — https://www.antaranews.com/berita/811253/pgn-layani-pelanggan-gaslink-24-jam — *backs*: klaim layanan 24 jam, dikonfirmasi kutipan langsung perwakilan PGN Gagas + testimoni pelanggan riil.
3. **kumparan.com (kumparanBISNIS), "PGN Salurkan Gaslink ke 600 Pelanggan per September 2025"** (6 November 2025) — https://kumparan.com/kumparanbisnis/pgn-salurkan-gaslink-ke-600-pelanggan-per-september-2025-hotel-hingga-dapur-mbg-26Bugu2sc4Z — *backs*: skala operasi 2025 (600+ pelanggan, 4.067.002 MMBTU), segmen pelanggan.
4. **Kementerian ESDM, "Sektor Industri Konsumen Terbesar Energi Final"** — esdm.go.id/id/media-center/news-archives/sektor-industri-konsumen-terbesar-energi-final — *backs*: industri sebagai konsumen energi final terbesar (45,94% demand per sektor, 2024) — konteks mengapa kontinuitas pasokan gas ke industri krusial secara nasional.

Priority order followed: ESDM (Ditjen Migas) official > PGN/kumparan/ANTARA corporate-verified press > vendor-neutral industry technical sources (Dixon Valve, XNG — used only for general mechanism, clearly separated from Gaslink-specific claims).

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apakah pasokan Gaslink (CNG) bisa terputus?
Secara teknis, risiko itu ada pada model *virtual pipeline* mana pun, tapi dirancang untuk diminimalkan lewat rotasi Gas Transportation Module (GTM) dan buffer di lokasi pelanggan. PGN Gagas mengonfirmasi layanan pengisian 24 jam setiap hari, termasuk permintaan tengah malam (ANTARA, 2019). Sepanjang 2025, Gaslink telah menjangkau 600+ pelanggan dengan penyaluran 4.067.002 MMBTU — bukti sistem berjalan stabil dalam skala nyata, meski bukan jaminan uptime berangka.

### Bagaimana pasokan CNG tetap stabil selama 24 jam?
Model virtual pipeline umumnya menjaga stabilitas lewat kombinasi: modul GTM yang bergiliran (satu diganti sebelum yang lain kosong), buffer/tandon gas di lokasi pelanggan, serta Pressure Reduction Station (PRS) yang menjaga tekanan kerja tetap konstan di titik serah. PGN Gagas menyatakan aliran gas Gaslink "stabil dan berkesinambungan" dengan sistem yang memantau volume secara terukur (gagas.co.id), didukung layanan pengisian 24 jam (ANTARA, 2019).

### Apa yang terjadi jika satu GTM habis atau telat datang?
Pada praktik umum virtual pipeline CNG, satu modul GTM yang tekanannya menurun idealnya digantikan modul lain sebelum kosong, dengan buffer di lokasi menahan pasokan selama pergantian. PGN Gagas belum mempublikasikan angka jumlah cadangan GTM atau waktu respons resmi untuk skenario keterlambatan — pembeli sebaiknya menanyakan langsung SLA dan prosedur eskalasi ke penyedia sebelum tanda tangan kontrak.

### Apakah gas dari truk (CNG) seandal gas pipa?
Keduanya punya profil risiko berbeda, bukan "lebih baik/buruk" mutlak. Gas pipa rentan pada titik sambungan tetap dan tekanan jaringan wilayah; CNG via GTM rentan pada jadwal ritase dan akses jalan ke lokasi. Untuk lokasi *beyond-pipeline* (di luar jangkauan pipa), CNG lewat GTM adalah satu-satunya opsi gas bumi yang praktis — keandalannya bergantung pada seberapa disiplin operator mengelola rotasi modul dan buffer.

### Apa itu cascade/buffer dan bagaimana menjaga tekanan konstan?
Cascade merujuk pada rotasi bertahap beberapa modul/tabung CNG sehingga saat satu modul mendekati kosong, modul lain sudah siap menggantikan tanpa jeda pasokan. Buffer adalah cadangan gas yang disimpan di lokasi pelanggan lewat Pressure Reduction Station (PRS), yang menurunkan tekanan dari sekitar 200–250 bar di tabung menjadi kisaran kerja aman sekitar 0,8–1,5 bar (rentang umum industri CNG) di titik serah.

### Apa saja yang harus ditanyakan ke penyedia CNG soal keandalan sebelum tanda tangan kontrak?
Tanyakan lima hal: (1) apakah ada SLA tertulis dan waktu respons untuk keterlambatan pengisian; (2) berapa jumlah cadangan GTM/buffer yang dialokasikan ke lokasi Anda; (3) apakah tersedia telemetri atau notifikasi dini saat stok mendekati kritis; (4) bagaimana prosedur eskalasi jika pasokan terlambat; (5) seberapa jauh lokasi dari Mother Station terdekat, karena jarak memengaruhi waktu tempuh ritase.

### Bagaimana penyedia tahu tabung/modul hampir habis sebelum benar-benar kosong?
Idealnya lewat smart metering atau telemetri yang memantau volume dan tekanan gas secara elektronik dan real-time, bukan estimasi manual. Gaslink menggunakan smart meter yang mengukur volume gas secara presisi dan mengoreksinya dengan tekanan serta suhu untuk penagihan berbasis pemakaian aktual (gagas.co.id) — data semacam ini secara prinsip mendukung penjadwalan ritase yang lebih tepat waktu, meski PGN Gagas belum mempublikasikan detail sistem notifikasi dini otomatisnya.

## Data tables for the writer

### Skenario gangguan pasokan virtual pipeline dan mitigasi umum
| Skenario gangguan | Dampak potensial | Mitigasi umum industri |
|---|---|---|
| GTM terlambat datang (akses jalan/lalu lintas) | Buffer di lokasi menipis lebih cepat dari rencana | Buffer/cadangan lebih besar; rute alternatif; komunikasi ETA real-time |
| Lonjakan konsumsi mendadak (mis. produksi naik) | Modul/buffer terpakai lebih cepat dari estimasi | Telemetri pemakaian untuk deteksi dini + penjadwalan ritase lebih sering |
| Cuaca ekstrem / akses jalan rusak ke lokasi terpencil | GTM tertunda melebihi jadwal normal | Kontrak SLA dengan buffer minimum lebih tinggi untuk lokasi berisiko akses |
| Pemeliharaan terjadwal di PRS pelanggan | Titik serah nonaktif sementara | Penjadwalan pemeliharaan di luar jam operasi kritis; komunikasi H-1 |
| Gangguan di hulu/jaringan gas bumi nasional | Pasokan ke Mother Station berkurang | Integrasi ke jaringan gas bumi nasional PGN sebagai lapisan redundansi (bukan satu sumber tunggal) |

*Catatan untuk penulis: tabel ini disusun dari prinsip umum manajemen rantai pasok virtual pipeline (bukan spesifikasi teknis Gaslink yang dipublikasikan) — beri disclaimer "praktik umum" bila memuat mitigasi yang belum dikonfirmasi PGN Gagas secara spesifik.*

### CNG via GTM vs gas pipa konvensional (untuk lokasi beyond-pipeline)
| Aspek | CNG via GTM (virtual pipeline) | Gas pipa konvensional |
|---|---|---|
| Ketersediaan di lokasi tanpa jaringan pipa | Tersedia — inilah kekuatan utamanya | Tidak tersedia tanpa investasi infrastruktur pipa baru |
| Titik risiko utama | Jadwal ritase & akses jalan ke lokasi | Titik sambungan tetap & tekanan jaringan wilayah |
| Fleksibilitas kapasitas | Dapat disesuaikan (tambah modul) mengikuti pertumbuhan kebutuhan | Terikat kapasitas pipa terpasang |
| Kontrol pengukuran | Smart metering di titik serah pelanggan | Meter gas pada sambungan pipa |

## Edge cases & nuance

- **Skala operasi ≠ uptime.** Angka 600+ pelanggan dan 4.067.002 MMBTU (2025) membuktikan sistem berjalan pada skala nyata dan berkelanjutan — tapi ini bukan angka keandalan teknis (bukan persentase uptime, bukan SLA). Jangan gunakan angka skala ini seolah itu bukti "99% andal" atau semacamnya.
- **Klaim ">99% gas supply reliability" yang beredar di industri virtual pipeline global (mis. XNG) adalah milik operator lain, bukan PGN Gagas.** Jika ditulis, harus jelas atribusinya ke industri/vendor lain sebagai konteks pembanding, bukan diklaim sebagai performa Gaslink.
- **Sumber utama soal layanan 24 jam berumur 2019.** Ini masih dipakai berulang dalam pemberitaan Gaslink terbaru (secara konsisten dengan positioning company_profile.md: "Layanan 24 jam"), tapi penulis sebaiknya membingkainya sebagai komitmen layanan yang berkelanjutan, bukan mengklaim sebagai "berita terbaru 2026".
- **Tekanan kerja PRS (0,8–1,5 bar) adalah rentang umum industri CNG global**, bukan spesifikasi resmi yang dipublikasikan PGN Gagas untuk Gaslink. Jika artikel menyebut angka ini, harus dilabeli eksplisit sebagai "kisaran umum pada sistem CNG virtual pipeline" — bukan "spesifikasi Gaslink".
- **Tidak ada bukti publik soal jumlah cadangan GTM per pelanggan/lokasi, atau SLA tertulis dengan waktu respons tertentu.** Ini justru selaras dengan hook artikel: bagian checklist (H2 #4) bisa secara jujur menyatakan bahwa pembeli PERLU menanyakan ini secara langsung karena tidak dipublikasikan secara terbuka — ini memperkuat, bukan melemahkan, angle "pertanyaan yang wajib diajukan".
- **Lokasi sangat terpencil dengan akses jalan buruk memang jadi titik lemah nyata model virtual pipeline** — ini konsisten dengan logika rantai pasok berbasis truk secara umum (bukan klaim spesifik Gaslink), aman digunakan di H2 #5 sebagai nuansa jujur.

## Flags (open factual risk)

- ⚠️ **Angka uptime/persentase keandalan pasokan Gaslink** (mis. "99% andal", "downtime < X jam/tahun"): tidak ditemukan sumber primer PGN Gagas maupun pemberitaan resmi yang menyebutkan angka ini untuk Gaslink secara spesifik. → Rekomendasi: jangan mencantumkan angka apa pun; jika perlu menyebut benchmark industri, atribusikan jelas ke vendor/industri lain (bukan Gaslink) atau hilangkan sama sekali.
- ⚠️ **Waktu respons/SLA tertulis Gaslink** (mis. "respons dalam X jam"): tidak dikonfirmasi sumber mana pun. → Rekomendasi: framing sebagai pertanyaan yang harus diajukan pembeli ke penyedia (sesuai H2 #4 di brief), bukan sebagai fakta yang sudah ada pada Gaslink.
- ⚠️ **Jumlah cadangan GTM/buffer per lokasi**: tidak dipublikasikan. → Rekomendasi: gunakan sebagai konsep umum virtual pipeline (dengan hedging "umumnya", "pada praktik umum industri"), jangan patok angka.
- ⚠️ **Tekanan kerja PRS ~0,8–1,5 bar**: bersumber dari referensi teknis industri CNG umum (Dixon Valve, dsb.), bukan spesifikasi resmi Gaslink yang dipublikasikan PGN Gagas. → Rekomendasi: label eksplisit sebagai "kisaran umum pada sistem CNG virtual pipeline", jangan tulis seolah spek resmi Gaslink.
- ⚠️ **Klaim ">99% gas supply reliability"** dari vendor virtual-pipeline internasional (XNG) yang muncul di riset ini: ini BUKAN angka Gaslink/PGN Gagas. → Rekomendasi: jangan kutip sama sekali di artikel kecuali secara eksplisit diatribusikan ke konteks industri global yang berbeda, dan bahkan begitu risikonya tinggi untuk disalahpahami sebagai klaim Gaslink — sebaiknya dihilangkan dari draf.
- ⚠️ **Apakah smart metering Gaslink benar-benar dipakai untuk *penjadwalan ritase prediktif otomatis* (bukan hanya penagihan)**: gagas.co.id hanya mengonfirmasi smart meter untuk pengukuran volume/tekanan demi akurasi tagihan; tidak ada sumber yang mengonfirmasi ini terhubung ke sistem notifikasi dini atau penjadwalan ritase otomatis. → Rekomendasi: tulis sebagai potensi/logika operasional ("data pemakaian akurat pada prinsipnya mendukung penjadwalan ritase yang lebih tepat waktu"), bukan sebagai fitur yang sudah dikonfirmasi berjalan.

## Definition snippet draft (40–60 words)

> Keandalan pasokan Gaslink adalah kemampuan menjaga gas bumi tetap mengalir tanpa jeda pada tekanan kerja yang stabil di titik serah pelanggan, meski dikirim lewat Gas Transportation Module (GTM) — bukan pipa tetap. Mekanismenya bertumpu pada rotasi modul GTM, buffer di lokasi, dan Pressure Reduction Station (PRS) yang menstabilkan tekanan saat pergantian pasokan.

## Notes for visuals (feed the writer's {IMAGE_NN} placeholders)

- **Concept 1 — Diagram alur rantai pasok virtual pipeline**: Mother Station → kompresi CNG dalam modul GTM → truk GTM menuju lokasi pelanggan → sambungan ke Pressure Reduction Station (PRS) pelanggan → titik serah dengan tekanan kerja stabil. Beri anotasi kecil di setiap tahap (tekanan indikatif, label "kisaran umum industri" pada angka bar). Alt-text sugestif: "Diagram alur pasokan CNG dari Mother Station hingga titik serah pelanggan via GTM dan PRS."
- **Concept 2 — Infografis tabel skenario gangguan → mitigasi**: versi visual dari tabel "Skenario gangguan pasokan virtual pipeline dan mitigasi umum" di atas — dirancang agar mudah di-screenshot dan dibagikan (5 baris skenario, warna kontras untuk kolom dampak vs mitigasi). Alt-text: "Tabel skenario gangguan pasokan CNG dan cara mitigasinya."
- **Concept 3 — Checklist visual "Pertanyaan wajib sebelum kontrak CNG"**: daftar bernomor 1–5 (SLA & waktu respons, jumlah cadangan GTM/buffer, telemetri & notifikasi dini, prosedur eskalasi, jarak dari Mother Station) dalam format kartu/ikon, cocok untuk elemen sidebar atau kartu unduhan. Alt-text: "Checklist lima pertanyaan yang harus diajukan pembeli ke penyedia CNG soal keandalan pasokan."
