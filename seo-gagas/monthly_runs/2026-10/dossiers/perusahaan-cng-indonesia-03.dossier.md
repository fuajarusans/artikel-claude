---
brief_id: "perusahaan-cng-indonesia-03"
researcher_run_date: "2026-09-28"
sources_cited: 17
flags: 13
---

# Research Dossier: Data Pemakaian & Lock-in: Hak atas Data dari Perusahaan CNG

## TL;DR for the writer

- **Data telemetri gas (volume, tekanan, jadwal pengiriman, pola pemakaian) secara hukum BUKAN "data pribadi."** UU No. 27 Tahun 2022 (UU PDP) mendefinisikan data pribadi sebagai data tentang **orang perseorangan** yang teridentifikasi — data operasional milik badan usaha umumnya di luar cakupan itu. Artinya kepemilikan & hak ekspornya harus diatur lewat **klausul kontrak**, bukan diasumsikan otomatis dari undang-undang.
- **Tidak ada regulasi Indonesia yang ditemukan mewajibkan format data terbuka/API untuk telemetri CNG komersial.** Regulasi ESDM yang ada (Surat Edaran Ditjen Migas, Kesepakatan Bersama BPH Migas–Kemendag) mengatur **akurasi alat ukur** (toleransi gas bumi ±1%) dan perlindungan konsumen — bukan portabilitas atau interoperabilitas data. Jangan mencampuradukkan "meter tersertifikasi akurat" dengan "data bebas diekspor."
- **Protokol yang lazim diminta pembeli untuk integrasi**: Modbus (standar terbuka industri sejak 2004, cocok untuk polling data dari SCADA/PLC lama) dan MQTT (standar ISO/IEC 20922:2016, ringan, cocok untuk sensor IoT). Ketersediaannya di sisi penyedia tetap harus dikonfirmasi kasus per kasus — jangan diasumsikan tersedia di semua penyedia.
- **Vendor lock-in paling sering muncul bukan dari larangan pindah** (per semester II-2025 tercatat 53 perusahaan pemegang izin niaga CNG di Indonesia, data Kementerian ESDM), **melainkan dari hilangnya riwayat data historis & format tertutup** saat pindah penyedia — klausul portabilitas data harus dinegosiasikan **sebelum tanda tangan**, bukan saat sudah ingin keluar kontrak.
- **PGN Gagas memang menyatakan punya infrastruktur sensor IoT** untuk memantau volume & tekanan gas secara real-time serta penagihan berbasis *smart meter* (gagas.co.id, diakses 28 Sep 2026) — fakta ini boleh dikutip apa adanya. Tapi **tidak ada pernyataan publik** soal fitur ekspor data mandiri/API pelanggan — jangan mengarang klaim itu.

## Core facts (verified)

> **Claim**: ISO 50001 adalah standar internasional untuk sistem manajemen energi (*Energy Management System*/EnMS) yang mengatur pendekatan sistematis perbaikan kinerja energi berkelanjutan di sebuah organisasi.
> **Number/specific**: Edisi terkini **ISO 50001:2018** (merevisi edisi 2011), dengan Amandemen 1:2024 terkait perubahan iklim. Sertifikasi bersifat **opsional, bukan wajib**, dan berlaku untuk organisasi jenis/ukuran apa pun.
> **Source**: ISO, https://www.iso.org/standard/69426.html, diakses 28 Sep 2026.
> **Confidence**: high (halaman katalog resmi ISO; substansi dikonfirmasi silang oleh ANSI Blog dan ASQ).

> **Claim**: ISO 50001 mewajibkan organisasi memiliki kebijakan energi, kajian/*baseline* energi, identifikasi *Significant Energy Uses* (SEU), Indikator Kinerja Energi (EnPI), serta rencana pemantauan-pengukuran-pengumpulan data yang berkelanjutan.
> **Number/specific**: Struktur mengikuti model **Plan-Do-Check-Act (PDCA)**, sejalan dengan ISO 9001/ISO 14001; standar secara eksplisit mensyaratkan "pemantauan, pengukuran, pengumpulan data, dan dokumentasi" sebagai bagian dari kinerja energi.
> **Source**: ISO (https://www.iso.org/standard/69426.html), dikonfirmasi silang ANSI Blog (https://blog.ansi.org/ansi/iso-50001-2018-energy-systems-requirements/) dan ASQ. Diakses 28 Sep 2026.
> **Confidence**: high — dasar untuk menjelaskan MENGAPA data telemetri gas relevan bagi sistem manajemen energi pembeli, bukan sekadar tagihan.

> **Claim**: Modbus adalah protokol komunikasi industri terbuka yang lazim dipakai untuk memantau dan menghubungkan perangkat/sensor (termasuk meter) ke sistem pengendali.
> **Number/specific**: Diperkenalkan **1979** oleh Modicon (kini Schneider Electric); menjadi **standar terbuka sejak 2004**, kini dikelola **Modbus Organization**; royalti-bebas, versi terkini 1.1b3 (termasuk varian Modbus TCP-Security via TLS).
> **Source**: Modbus Organization, https://www.modbus.org/introduction-to-modbus, diakses 28 Sep 2026.
> **Confidence**: high (sumber resmi badan pengelola protokol).

> **Claim**: MQTT adalah protokol pesan *publish-subscribe* yang ringan, dirancang untuk lingkungan dengan keterbatasan bandwidth/daya seperti IoT dan *machine-to-machine* (M2M) — cocok untuk sensor telemetri terdistribusi.
> **Number/specific**: MQTT v3.1.1 berstatus **OASIS Standard** dan disahkan sebagai **ISO/IEC 20922:2016** oleh ISO/IEC JTC1; versi terbaru MQTT v5.0 menambah fitur di atas fondasi yang sama.
> **Source**: ISO, https://www.iso.org/standard/69466.html; dikonfirmasi OASIS/mqtt.org, https://mqtt.org/mqtt-specification/. Diakses 28 Sep 2026.
> **Confidence**: high (dua badan standar independen — ISO/IEC dan OASIS — sepakat).

> **Claim**: ISA-95 (juga dikenal sebagai IEC 62264) adalah rangkaian standar internasional untuk integrasi sistem bisnis (ERP) dengan sistem kendali produksi/operasi di lapangan.
> **Number/specific**: Seri berisi **8 standar**; mendefinisikan model hierarki umum — Level 0 (proses/sensor fisik) → Level 1 (kendali dasar/PLC) → Level 2 (SCADA/supervisori) → Level 3 (MES/Manufacturing Operations Management) → Level 4 (ERP/perencanaan bisnis) — sebagai kerangka umum di mana data meter/telemetri gas biasanya "masuk" ke sistem pelanggan.
> **Source**: ISA, https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard; kerangka level dikonfirmasi silang Siemens, https://www.siemens.com/en-us/technology/isa-95-framework-layers/. Diakses 28 Sep 2026.
> **Confidence**: high untuk keberadaan & tujuan standar; medium-high untuk detail Level 0–4 (sumber sekunder vendor, meski konsisten dengan deskripsi ISA).

> **Claim**: IEC 62443 adalah standar keamanan siber internasional khusus untuk sistem otomasi & kendali industri (*Industrial Automation and Control Systems*/IACS), termasuk sektor migas.
> **Number/specific**: Dikembangkan bersama **IEC dan ISA99**; sejak **2021** diakui IEC sebagai standar horizontal yang berlaku lintas sektor (termasuk *oil and gas*); memakai pendekatan berlapis (*defense-in-depth*).
> **Source**: ISA, https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards, diakses 28 Sep 2026.
> **Confidence**: high — relevan sebagai rujukan generik untuk pertanyaan "keamanan siber data operasional" pada H2 integrasi, BUKAN klaim bahwa penyedia CNG mana pun sudah menerapkannya (lihat flags).

> **Claim**: UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) mendefinisikan "data pribadi" secara sempit, berbasis identitas **orang perseorangan**.
> **Number/specific**: Pasal 1 ayat (1): *"Data Pribadi adalah data tentang orang perseorangan yang teridentifikasi atau dapat diidentifikasi secara tersendiri atau dikombinasi dengan informasi lainnya baik secara langsung maupun tidak langsung melalui sistem elektronik atau nonelektronik."*
> **Source**: UU No. 27 Tahun 2022, https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022, diakses 28 Sep 2026.
> **Confidence**: high (teks undang-undang resmi).

> **Claim**: UU PDP memberi subjek data pribadi (individu) hak yang secara konsep mirip "portabilitas data" — memindahkan datanya ke pengendali lain.
> **Number/specific**: Pasal 8 UU PDP memuat hak subjek data pribadi untuk **"menggunakan dan mengirimkan data pribadi ke pengendali data pribadi lainnya,"** sepanjang sistem yang dipakai bisa berkomunikasi secara aman sesuai prinsip pelindungan data pribadi UU ini.
> **Source**: Sintesis dari UU No. 27/2022 via ringkasan hukum SIP Law Firm, https://siplawfirm.id/jenis-dan-hak-subjek-data-pribadi-dalam-uu-pdp/?lang=id, diakses 28 Sep 2026.
> **Confidence**: medium-high (konsisten di berbagai ringkasan hukum sekunder; bukan pengambilan langsung teks pasal, dan **hak ini berlaku untuk data pribadi individu**, bukan data operasional B2B — lihat flags).

> **Claim**: Alat ukur pada kegiatan minyak dan gas bumi (termasuk gas) di Indonesia tunduk pada persyaratan teknis resmi Ditjen Migas, dengan standar akurasi spesifik untuk gas bumi.
> **Number/specific**: Peralatan pengukuran wajib mendapat **rekomendasi teknis dari Direktorat Teknik dan Lingkungan Migas** serta **persetujuan tipe dari Direktorat Metrologi**; toleransi akurasi ditetapkan **±1% untuk gas bumi** (berbeda dari minyak mentah ±0,15% dan BBM di titik serah ±0,5%).
> **Source**: Direktorat Jenderal Migas ESDM, "Surat Edaran Penggunaan Sistem Ukur pada Kegiatan Migas," https://migas.esdm.go.id/post/Surat-Edaran-Penggunaan-Sistem-Ukur-pada-Kegiatan-Migas, diakses 28 Sep 2026 (WebFetch langsung).
> **Confidence**: high.

> **Claim**: Regulasi Ditjen Migas menempatkan tanggung jawab akurasi dan pemeliharaan sistem alat ukur pada badan usaha yang mengoperasikannya, bukan pada pelanggan/pembeli akhir.
> **Number/specific**: *"BU/BUT bertanggung jawab atas operasi serah terima migas yang dilakukan, akurasi dan pemeliharaan sistem alat ukur"* — dengan masa transisi 5 tahun bagi alat ukur non-SI/tidak akurat untuk disesuaikan dan dilaporkan ke Direktur Teknik.
> **Source**: Sama seperti di atas, migas.esdm.go.id, diakses 28 Sep 2026.
> **Confidence**: high untuk kutipan; **medium untuk implikasinya ke kepemilikan aset** — ini soal tanggung jawab operasional/akurasi, bukan pernyataan eksplisit soal kepemilikan hukum aset (lihat flags).

> **Claim**: BPH Migas dan Kementerian Perdagangan (Ditjen PKTN) punya kesepakatan bersama mengawasi alat ukur pada distribusi BBM dan gas bumi melalui pipa, dengan fokus akurasi & transparansi volume.
> **Number/specific**: Tujuan dinyatakan agar *"masyarakat menerima BBM dan gas bumi sesuai takaran dan kualitas yang semestinya"*; ditegaskan *"akurasi alat ukur dan kepatuhan terhadap standar metrologi menjadi sangat krusial dalam menjamin transparansi volume dan kualitas."* Cakupan kerja sama meliputi pertukaran data, peningkatan kapasitas, edukasi publik, dan pengawasan peralatan.
> **Source**: BPH Migas, https://www.bphmigas.go.id/bph-migas-dan-ditjen-pktn-kemendag-teken-kesepakatan-bersama-pengawasan-bbm-dan-gas-bumi-melalui-pipa/, diakses 28 Sep 2026 (WebFetch langsung).
> **Confidence**: high — memperkuat bahwa pengawasan resmi Indonesia untuk alat ukur gas berfokus pada **akurasi/perlindungan konsumen**, bukan pada kepemilikan atau portabilitas data (lihat flags).

> **Claim**: Kerangka kebijakan interoperabilitas Uni Eropa secara eksplisit menghubungkan standar terbuka dengan pencegahan *vendor lock-in* dalam pengadaan.
> **Number/specific**: *European Interoperability Framework* (Komisi Eropa, 2017) merekomendasikan format data terbuka untuk mendorong interoperabilitas, netralitas vendor, dan aksesibilitas data jangka panjang; estimasi Komisi Eropa (2015) menyebut potensi penghematan hingga **€1,1 miliar/tahun** dari adopsi standar terbuka di pengadaan publik.
> **Source**: European Commission, Interoperable Europe Portal, https://interoperable-europe.ec.europa.eu/collection/ict-standards-procurement/interoperability-and-vendor-lock, diakses 28 Sep 2026.
> **Confidence**: high untuk isi kebijakan **Uni Eropa**; **ini BUKAN hukum Indonesia** — hanya dipakai sebagai analogi praktik global (lihat flags).

> **Claim**: Badan Energi Internasional (IEA) mencatat kepemilikan dan privasi data sebagai isu kebijakan utama dalam digitalisasi sektor energi, termasuk data dari *smart meter*.
> **Number/specific**: Kutipan langsung: *"Privacy and data ownership are also major concerns for consumers, especially as more detailed data are collected from a growing number of connected devices and appliances."* IEA merekomendasikan agar pembuat kebijakan *"ensure appropriate access to timely, robust, and verifiable data."*
> **Source**: IEA, "Digitalisation and Energy," https://www.iea.org/reports/digitalisation-and-energy, diakses 28 Sep 2026 (WebFetch langsung).
> **Confidence**: high untuk kutipan; **catatan konteks** — pembahasan IEA condong ke *smart meter* rumah tangga, dipakai di sini sebagai prinsip umum yang relevan diperluas ke konteks komersial/industri.

> **Claim**: PGN Gagas menyatakan memiliki infrastruktur sensor berbasis IoT yang memantau sisa volume dan tekanan gas pelanggan secara real-time, dipakai untuk otomasi penjadwalan pengiriman ulang.
> **Number/specific**: Kutipan halaman resmi: *"Infrastruktur sensor berbasis Internet of Things (IoT) untuk mengukur sisa volume dan tekanan gas di lokasi pelanggan secara real-time"*; sistem ini *"mengotomatisasi penjadwalan pengiriman ulang."*
> **Source**: gagas.co.id, hub "Perusahaan CNG Indonesia," https://gagas.co.id/perusahaan-cng-indonesia/, diakses via WebFetch 28 Sep 2026.
> **Confidence**: high (kutipan first-party langsung) — **boleh dikutip sebagai fakta**, tapi halaman ini TIDAK menyebut ekspor data/API pelanggan (lihat flags).

> **Claim**: Layanan Gaslink PGN Gagas memakai *smart meter* yang mengukur volume gas secara presisi dan menjadi dasar penagihan berbasis pemakaian aktual, bukan estimasi.
> **Number/specific**: Kutipan: *"Skema penagihan (billing) didasarkan secara ketat pada pemakaian aktual"*; *"Perhitungan pemakaian gas mengacu pada volume dalam satuan m3 yang terkoreksi dengan tekanan dan suhu tertentu."*
> **Source**: gagas.co.id/gaslink/, https://gagas.co.id/gaslink/, diakses via WebFetch 28 Sep 2026.
> **Confidence**: high (kutipan first-party langsung).

> **Claim**: PGN Gagas adalah anak usaha PGN, bagian Subholding Gas Pertamina, dengan tiga sertifikasi manajemen aktif serta positioning "layanan 24 jam dengan perhitungan pemakaian yang akurat."
> **Number/specific**: ISO 9001:2015 (mutu), ISO 45001:2018 (K3, khusus layanan distribusi CNG), ISO 37001:2016 (anti-suap) — ketiganya per 2025.
> **Source**: `knowledge_base/company_profile.md` (pra-disetujui, disarikan dari profil resmi PGN Gagas & gagas.co.id).
> **Confidence**: high (fakta korporat pra-disetujui).

> **Claim**: Jumlah perusahaan pemegang izin usaha niaga CNG di Indonesia tumbuh signifikan pada 2025, mencerminkan pasar dengan banyak alternatif penyedia.
> **Number/specific**: **53 perusahaan** pemegang izin niaga CNG per semester II-2025 (naik dari 33 di semester I-2025, data Kementerian ESDM); PT Pertamina dan PT Gagas Energi Indonesia (PGN Gagas) termasuk di antaranya.
> **Source**: Bloomberg Technoz, "Daftar 53 Perusahaan CNG di RI, Termasuk Anak Usaha PGN (PGAS)" (10 Mei 2026), https://www.bloombergtechnoz.com/detail-news/108557/daftar-53-perusahaan-cng-di-ri-termasuk-anak-usaha-pgn-pgas. *(carried over dari riset dossier `perusahaan-cng-indonesia-01` bulan berjalan, diverifikasi 28 Sep 2026.)*
> **Confidence**: high — dipakai sebagai konteks leverage negosiasi (banyak pemain = posisi tawar pembeli lebih kuat untuk klausul portabilitas data), BUKAN sebagai bukti semua 53 menawarkan ekspor data/API (lihat flags).

## Solution focus + PGN Gagas anchor (from product_matrix.md)

| What to teach (gas-bumi/CNG tech) | Facts to state accurately | Where in article | PGN Gagas service/credential to anchor CTA |
|---|---|---|---|
| Prinsip tata kelola data telemetri energi: mengapa data ini bernilai, dan mengapa "data operasional" ≠ "data pribadi" | ISO 50001 mensyaratkan rencana pemantauan/pengumpulan data & EnPI; UU PDP Pasal 1 mendefinisikan data pribadi sebagai data ORANG PERSEORANGAN — data pemakaian gas badan usaha umumnya di luar cakupan itu | H2 #1 & #2 (definisi + kepemilikan) | Tidak perlu sebutan Gagas — murni edukasi vendor-neutral |
| Cara kerja integrasi data telemetri gas ke EMS/ERP/BMS (protokol & arsitektur) | Modbus (terbuka sejak 2004, modbus.org) & MQTT (ISO/IEC 20922:2016) sebagai protokol umum; ISA-95/IEC 62264 sebagai kerangka Level 0–4; IEC 62443 sebagai rujukan keamanan siber OT generik | H2 #3 (integrasi & keamanan siber) | Aside opsional 1 kalimat: PGN Gagas menyebut memakai infrastruktur sensor IoT untuk memantau volume & tekanan real-time (gagas.co.id) — ilustrasi bahwa data granular semacam ini memang dihasilkan penyedia modern, **BUKAN** klaim bahwa Gagas menyediakan API/ekspor data spesifik |
| Menghindari vendor lock-in: klausul data, status aset metering, leverage pasar | Regulasi ESDM (Ditjen Migas, BPH Migas) mengatur akurasi alat ukur (±1% gas bumi), BUKAN portabilitas data; BU/BUT bertanggung jawab atas alat ukur; 53 perusahaan berizin niaga CNG (semester II-2025) memberi posisi tawar pembeli | H2 #5 (honest/counter-conventional) & closing | **PGN Gagas** — closing CTA, diposisikan sebagai penyedia/distributor CNG *beyond-pipeline* dengan sertifikasi ISO 9001/45001/37001 dan layanan pemantauan pemakaian akurat — **BUKAN** dengan klaim fitur ekspor data/API yang tak tersumber |

**Pengingat framing**: PGN Gagas **menyalurkan/memasok/mendistribusikan** CNG *beyond-pipeline* — ia penyedia/distributor hilir, **BUKAN produsen gas di hulu**. Kerangka EMS/data/interoperabilitas di dossier ini adalah **praktik umum industri**, bukan fitur sistem resmi Gagas, kecuali dua kutipan first-party yang eksplisit disebut di atas. Maksimal **2 sebutan diri** di seluruh artikel (sesuai brief — lebih ketat dari batas umum 2–3 di `product_matrix.md`): closing CTA + maksimal 1 aside pertengahan artikel.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Direktorat Jenderal Migas ESDM — Surat Edaran Penggunaan Sistem Ukur pada Kegiatan Migas** — https://migas.esdm.go.id/post/Surat-Edaran-Penggunaan-Sistem-Ukur-pada-Kegiatan-Migas — *backs*: persyaratan resmi alat ukur migas (rekomendasi teknis + persetujuan tipe), toleransi akurasi gas bumi ±1%, tanggung jawab BU/BUT atas alat ukur.
2. **BPH Migas — Kesepakatan Bersama Pengawasan Alat Ukur BBM & Gas Bumi Melalui Pipa** — https://www.bphmigas.go.id/bph-migas-dan-ditjen-pktn-kemendag-teken-kesepakatan-bersama-pengawasan-bbm-dan-gas-bumi-melalui-pipa/ — *backs*: kerangka pengawasan akurasi & perlindungan konsumen untuk alat ukur gas.
3. **UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi** — https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022 — *backs*: definisi resmi "data pribadi" (Pasal 1) yang menjadi dasar argumen data operasional ≠ data pribadi.
4. **ISO — ISO 50001:2018 Energy management systems** — https://www.iso.org/standard/69426.html — *backs*: kerangka standar sistem manajemen energi & kebutuhan data pemantauan/EnPI.
5. **ISO/IEC 20922:2016 (MQTT v3.1.1)** — https://www.iso.org/standard/69466.html — *backs*: status standar internasional protokol MQTT untuk telemetri IoT.
6. **Modbus Organization — Introduction to Modbus** — https://www.modbus.org/introduction-to-modbus — *backs*: sejarah & status Modbus sebagai protokol industri terbuka.
7. **ISA — ISA-95/IEC 62264 Standard & IEC 62443 Series** — https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard dan https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards — *backs*: kerangka integrasi ERP–sistem kendali & standar keamanan siber industri.
8. **IEA — Digitalisation and Energy** — https://www.iea.org/reports/digitalisation-and-energy — *backs*: data ownership/privasi sebagai isu kebijakan utama digitalisasi energi global.
9. **European Commission — Interoperable Europe Portal** — https://interoperable-europe.ec.europa.eu/collection/ict-standards-procurement/interoperability-and-vendor-lock — *backs*: analogi kebijakan global (bukan Indonesia) yang menghubungkan standar terbuka dengan pencegahan vendor lock-in.
10. **Bloomberg Technoz — Daftar 53 Perusahaan CNG di RI** (10 Mei 2026) — https://www.bloombergtechnoz.com/detail-news/108557/daftar-53-perusahaan-cng-di-ri-termasuk-anak-usaha-pgn-pgas — *backs*: lanskap kompetitif penyedia CNG Indonesia (konteks leverage negosiasi).

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apakah data pemakaian gas dari telemetri milik pelanggan atau penyedia?
Secara hukum, data pemakaian gas dari sensor IoT di lokasi Anda umumnya bukan "data pribadi" menurut UU No. 27/2022 (data pribadi didefinisikan sebagai data tentang orang perseorangan yang teridentifikasi), sehingga kepemilikannya tidak otomatis diatur undang-undang tersebut. Karena itu, hak akses, penyimpanan, dan ekspor data telemetri sepenuhnya bergantung pada klausul kontrak dengan penyedia CNG — bukan asumsi umum. Pastikan kontrak menyebutkan eksplisit siapa pemilik data operasional ini.

### Bagaimana cara menarik atau mengekspor data telemetri saya dari penyedia CNG?
Belum ada mekanisme ekspor data yang seragam di industri CNG Indonesia — praktik tiap penyedia bervariasi, mulai dari laporan berkala (PDF/Excel) hingga portal dashboard atau API, dan sebagian penyedia mungkin belum menawarkan ekspor mandiri sama sekali. Sebelum tanda tangan kontrak, tanyakan secara eksplisit format ekspor yang tersedia, frekuensi pembaruan data, dan apakah data historis tetap bisa diakses setelah kontrak berakhir.

### Protokol apa yang umum dipakai untuk integrasi data energi seperti Modbus, MQTT, atau API?
Dua protokol yang lazim dipakai industri untuk telemetri energi adalah Modbus — standar terbuka sejak 2004 yang cocok untuk mengambil data dari perangkat SCADA/PLC lama — dan MQTT, protokol *publish-subscribe* ringan yang telah menjadi standar ISO/IEC 20922:2016, ideal untuk sensor IoT dengan bandwidth terbatas. Integrasi modern juga sering memakai API berbasis web. Protokol spesifik yang benar-benar didukung tetap harus dikonfirmasi ke masing-masing penyedia.

### Apa itu vendor lock-in pada pasokan CNG dan bagaimana cara menghindarinya?
Vendor lock-in adalah kondisi ketika pelanggan sulit berpindah penyedia karena ketergantungan pada aset, format data tertutup, atau sistem milik penyedia lama — bukan karena tak ada alternatif (per semester II-2025 tercatat 53 perusahaan pemegang izin niaga CNG di Indonesia, data Kementerian ESDM). Cara menghindarinya: minta klausul portabilitas data, format ekspor terbuka, dan kejelasan status aset meter/PRS sejak awal kontrak — bukan saat sudah ingin pindah.

### Apakah bisnis kecil perlu integrasi EMS penuh, atau cukup laporan bulanan?
Tidak selalu. Sejalan dengan prinsip ISO 50001 (standar sistem manajemen energi), kedalaman pemantauan data seharusnya proporsional dengan signifikansi penggunaan energi bagi organisasi. Bisnis dengan satu atau dua lokasi, dan energi bukan komponen biaya utama, umumnya cukup dengan laporan pemakaian berkala. Integrasi EMS/API penuh lebih bernilai untuk operasi multi-lokasi atau ketika energi menjadi pos biaya signifikan yang perlu dipantau nyaris real-time.

### Klausul data apa saja yang wajib ada di kontrak pasokan CNG?
Minimal lima hal: pernyataan tegas kepemilikan data pemakaian, hak dan format ekspor data, frekuensi pembaruan/akses data, ketentuan keamanan siber untuk data operasional, dan klausul *handover* data saat kontrak berakhir atau berganti penyedia. Kelima poin ini jarang otomatis tercantum dalam kontrak standar, sehingga harus diminta secara eksplisit oleh pembeli sebelum tanda tangan — bukan dinegosiasikan setelah masalah muncul.

## Data tables for the writer

### Protokol & metode integrasi data telemetri gas (opsi yang lazim diminta pembeli)

| Metode/Protokol | Cara kerja singkat | Paling cocok untuk | Catatan |
|---|---|---|---|
| Laporan berkala (PDF/Excel) | Penyedia mengirim ringkasan pemakaian manual per periode | Bisnis skala kecil, kebutuhan pelaporan sederhana | Tidak real-time; perlu entri manual ke sistem internal |
| Modbus (RTU/TCP) | Protokol *request-response*; sistem pelanggan "menarik" data secara berkala dari meter/PLC | Integrasi ke SCADA/BMS pabrik yang sudah memakai perangkat industri lawas | Standar terbuka sejak 2004 (Modbus Organization), banyak didukung perangkat lama |
| MQTT | Protokol *publish-subscribe* ringan; sensor "mendorong" data saat ada perubahan | Sensor IoT terdistribusi, banyak titik ukur, bandwidth terbatas | Standar terbuka ISO/IEC 20922:2016; makin umum di infrastruktur IoT energi baru |
| API/*web service* | Pertukaran data terstruktur (mis. JSON/XML) antar sistem lewat internet | Integrasi ke ERP/EMS berbasis cloud, dashboard kustom | Ketersediaan bergantung penyedia masing-masing — **wajib ditanyakan eksplisit**, jangan diasumsikan tersedia |

*Catatan wajib untuk pembaca*: tabel ini menjelaskan **protokol yang lazim di industri secara umum**, bukan spesifikasi resmi milik satu penyedia CNG tertentu. Konfirmasi protokol apa yang benar-benar didukung ke penyedia yang Anda evaluasi.

### Kerangka keputusan: cukup laporan berkala, atau perlu integrasi EMS/API penuh?

| Kriteria | Cukup laporan berkala | Pertimbangkan integrasi EMS/API |
|---|---|---|
| Jumlah lokasi/titik ukur | 1–2 lokasi | Banyak lokasi yang perlu dipantau terpusat |
| Porsi biaya energi terhadap operasional | Energi bukan komponen biaya utama | Energi adalah pos biaya signifikan yang perlu dioptimasi aktif |
| Kebutuhan kecepatan respons | Evaluasi bulanan/triwulanan cukup | Perlu deteksi anomali pemakaian nyaris real-time |
| Kesiapan sistem internal | Tidak ada EMS/BMS/ERP yang akan memanfaatkan data granular | Sudah punya EMS/BMS/ERP yang bisa diberi umpan data |
| Kapasitas tim IT/OT internal | Terbatas | Tersedia kapasitas untuk mengelola integrasi |

*Catatan wajib untuk pembaca*: ini adalah **kerangka keputusan kualitatif**, bukan kalkulasi *break-even* finansial dengan angka Rupiah — tidak ditemukan sumber otoritatif yang mempublikasikan titik impas biaya integrasi EMS untuk pasokan CNG di Indonesia. Jangan menyajikan angka payback period spesifik tanpa sumber.

### Checklist singkat: pertanyaan wajib soal data sebelum tanda tangan kontrak CNG

- Siapa pemilik data pemakaian (volume, tekanan, jadwal pengiriman) yang dihasilkan sensor di lokasi saya?
- Format apa yang tersedia untuk mengekspor data (PDF, CSV, JSON, API)?
- Protokol apa yang didukung untuk integrasi langsung ke sistem saya (Modbus, MQTT, lainnya)?
- Apakah saya tetap bisa mengakses data historis setelah kontrak berakhir atau berganti penyedia?
- Bagaimana keamanan siber data operasional ini dijaga?
- Siapa yang memiliki/bertanggung jawab atas aset meter atau PRS di lokasi saya, dan apa yang terjadi pada aset itu saat kontrak berakhir?

## Edge cases & nuance

- **Ketersediaan API/ekspor data bervariasi antar-penyedia dan tidak boleh digeneralisasi.** Tidak ditemukan data pasar soal berapa banyak dari 53 perusahaan berizin niaga CNG di Indonesia yang benar-benar menawarkan ekspor data mandiri — anggap ini fitur yang harus DITANYAKAN, bukan diasumsikan ada.
- **"Meter tersertifikasi akurat" ≠ "data bisa diekspor bebas."** Regulasi ESDM (Ditjen Migas, BPH Migas) yang ditemukan dalam riset ini murni mengatur akurasi pengukuran (±1% untuk gas bumi) dan perlindungan konsumen — bukan hak akses atau format data. Artikel harus memisahkan dua isu ini dengan tegas agar pembaca tidak salah kira alat ukur bersertifikat otomatis berarti data terbuka.
- **Hak portabilitas UU PDP (Pasal 8) hanya berlaku untuk data pribadi individu**, bukan data operasional badan usaha — berguna sebagai *konsep* analogi ("Indonesia sudah mengenal gagasan portabilitas data dalam hukumnya"), tapi tidak bisa dikutip sebagai dasar hukum langsung untuk menuntut ekspor data telemetri gas B2B.
- **Kepemilikan aset metering/PRS tidak punya jawaban hitam-putih dari satu sumber.** Regulasi Ditjen Migas menunjukkan tanggung jawab operasional/akurasi ada di tangan badan usaha (BU/BUT) — ini sugestif bahwa infrastruktur pengukuran biasanya berada dalam domain penyedia, tapi bukan pernyataan eksplisit soal kepemilikan hukum atau hak reversi aset saat kontrak berakhir. Ini murni ranah negosiasi kontrak.
- **Lock-in akibat data seringkali lebih halus daripada lock-in akibat perangkat keras.** Bahkan jika secara teknis pelanggan bisa mengganti penyedia CNG (memasang PRS/meter baru), kehilangan riwayat data pemakaian bertahun-tahun yang terkunci di format/sistem penyedia lama tetap merupakan biaya peralihan nyata yang sering baru terasa saat sudah ingin pindah.
- **Bisnis kecil sering TIDAK butuh integrasi API/EMS penuh** — ini poin kejujuran penting (H2 #5 brief): mendorong pembeli kecil membayar kompleksitas integrasi yang tak akan mereka manfaatkan bukan praktik terbaik; laporan berkala yang jelas & konsisten sudah cukup untuk mayoritas kebutuhan operasional skala kecil.

## Flags (open factual risk)

### Hedge flags for the writer (kritis — wajib dipatuhi)

- ⚠️ **Posisi Gagas**: PGN Gagas adalah penyedia/distributor CNG *beyond-pipeline* (menyalurkan, memasok, mengangkut) — **BUKAN produsen gas bumi**. Jangan pernah menyiratkan Gagas "memproduksi" gas.
- ⚠️ **Framing EMS/data/interoperabilitas**: Seluruh kerangka ISO 50001, ISA-95, IEC 62443, Modbus/MQTT, dan praktik anti-*vendor-lock-in* di dossier ini adalah **praktik umum/standar industri generik** — **BUKAN** representasi fitur sistem resmi PGN Gagas, kecuali dua kutipan first-party yang eksplisit dicatat di bawah.
- ⚠️ **Yang BOLEH diklaim sebagai fakta Gagas** (tersumber gagas.co.id, diakses 28 Sep 2026): infrastruktur sensor IoT untuk memantau volume & tekanan gas secara real-time di lokasi pelanggan; skema penagihan *smart meter* berbasis pemakaian aktual. **Yang TIDAK BOLEH diklaim**: bahwa Gagas menyediakan ekspor data mandiri, API terbuka, dashboard pelanggan, atau integrasi EMS/ERP spesifik — tidak ditemukan pernyataan publik soal ini.
- ⚠️ **Jangan mengarang spesifikasi teknis** (bandwidth, latensi, SLA data, format API) yang diatribusikan ke Gagas — tak satu pun tersumber dalam riset ini.
- ⚠️ **Maksimal 2 self-mention PGN Gagas** di seluruh artikel (closing CTA + maksimal 1 aside di H2 pertengahan, sesuai instruksi brief) — lebih ketat dari batas umum 2–3 di `product_matrix.md`. Tanpa superlatif ("terbesar", "nomor satu", "terpercaya" tanpa dasar — tidak ada di `company_profile.md`).

### Sourcing & nuance flags tambahan

- ⚠️ **Kesimpulan "data pemakaian gas badan usaha bukan data pribadi" adalah inferensi logis peneliti** dari definisi Pasal 1 UU PDP, **bukan** putusan/pernyataan resmi regulator yang secara eksplisit membahas data telemetri gas. Tulis dengan kualifikasi ("pada umumnya", "berdasarkan definisi UU PDP"), jangan sebagai kepastian hukum mutlak atau nasihat hukum formal.
- ⚠️ **Hak portabilitas data (UU PDP Pasal 8) hanya berlaku untuk data pribadi milik individu** (subjek data) — jangan menyiratkan hak ini otomatis berlaku untuk data operasional B2B/industri. Gunakan hanya sebagai analogi konseptual, dengan label eksplisit bahwa ini ranah data pribadi, bukan data komersial.
- ⚠️ **Tidak ditemukan satu pun regulasi Indonesia yang mewajibkan format data terbuka/API/interoperabilitas untuk telemetri gas komersial.** Regulasi yang ditemukan (Surat Edaran Ditjen Migas, Kesepakatan Bersama BPH Migas–Kemendag) mengatur **akurasi** alat ukur dan perlindungan konsumen, **bukan** kepemilikan/portabilitas data. Jangan mencampuradukkan kedua isu ini di draf.
- ⚠️ **Kepemilikan aset metering/PRS**: Surat Edaran Ditjen Migas menyebut badan usaha/BUT bertanggung jawab atas akurasi & pemeliharaan alat ukur pada operasi serah-terima migas — ini **sugestif**, bukan pernyataan eksplisit tentang kepemilikan hukum aset atau hak reversi saat kontrak berakhir. Jangan diklaim sebagai aturan pasti.
- ⚠️ **European Interoperability Framework / kebijakan Komisi Eropa adalah hukum Uni Eropa, bukan hukum Indonesia.** Gunakan hanya sebagai analogi praktik global dengan label eksplisit ("di Eropa, misalnya...") — jangan diimplikasikan berlaku atau wajib di Indonesia.
- ⚠️ **Tidak ditemukan sumber otoritatif untuk angka *break-even*/ROI numerik** (Rupiah, periode payback) soal kapan integrasi EMS/API "bernilai" secara finansial untuk pembeli CNG. Ide H2 #4 brief ("Analisis Break-Even") harus disampaikan sebagai **kerangka keputusan kualitatif** (tabel kriteria), bukan angka yang dikarang.
- ⚠️ **Angka "53 perusahaan pemegang izin niaga CNG"** (carried over dari riset `perusahaan-cng-indonesia-01` bulan berjalan, Bloomberg Technoz, data ESDM semester II-2025) adalah konteks lanskap pasar — **tidak ada data** soal berapa dari 53 itu yang menawarkan ekspor data/API. Jangan menyiratkan semua penyedia punya kapabilitas ini.
- ⚠️ **Modbus, MQTT, dan IEC 62443 terkonfirmasi sebagai standar/protokol umum industri secara generik** (multi-sumber independen: Modbus Organization, ISO/IEC, OASIS, ISA) — **tidak ada sumber** yang mengonfirmasi PGN Gagas atau penyedia CNG mana pun di Indonesia secara spesifik memakai protokol/standar ini untuk infrastruktur IoT-nya. Ajarkan sebagai "yang lazim ditanyakan ke penyedia," bukan spesifikasi Gagas yang terkonfirmasi.

## Definition snippet draft (40–60 words)

> Data telemetri pasokan CNG adalah rekaman digital otomatis dari sensor di lokasi pelanggan — mencakup volume gas, tekanan, dan waktu pengiriman — yang dikirim penyedia CNG secara real-time untuk penjadwalan pasokan dan penagihan berbasis pemakaian aktual. Karena bernilai strategis bagi pembeli, hak akses, kepemilikan, dan portabilitasnya perlu diatur jelas dalam kontrak.

## Notes for visuals (feed the writer's {IMAGE_NN} placeholders)

- **Concept 1 — Diagram alur "Dari Sensor ke Sistem Anda"**: ilustrasi horizontal 4 tahap — (1) sensor IoT di PRS/meter lokasi pelanggan mengukur volume & tekanan real-time → (2) data dikirim ke sistem penyedia CNG untuk penjadwalan & penagihan → (3) titik keputusan bergambar ikon gembok terbuka/tertutup berlabel "Bisa diekspor ke sistem Anda?" → (4) EMS/ERP/BMS internal pelanggan. Gaya flat-infographic, palet biru-hijau korporat, teks Bahasa Indonesia ringkas di tiap tahap; cocok untuk H2 #1–#3.
- **Concept 2 — Kartu perbandingan protokol integrasi**: 4 kartu ringkas berjajar — "Laporan Manual", "Modbus", "MQTT", "API/Web Service" — masing-masing berisi satu ikon, satu baris "cara kerja," dan satu baris "paling cocok untuk." Didesain mudah di-*screenshot* untuk dibagikan ke tim IT/OT internal pembaca; cocok untuk H2 #3.
- **Concept 3 — Checklist visual "5 Klausul Data Wajib dalam Kontrak CNG"**: daftar bernomor dengan ikon centang — kepemilikan data, format & hak ekspor, frekuensi akses, keamanan siber data operasional, klausul *handover* saat kontrak berakhir. Gaya kartu checklist, ringkas dan actionable; cocok untuk H2 #5/closing sebagai ringkasan yang mudah disimpan pembaca.
