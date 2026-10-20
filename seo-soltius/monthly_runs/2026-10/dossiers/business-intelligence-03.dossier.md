---
brief_id: "business-intelligence-03"
researcher_run_date: "2026-10-07"
sources_cited: 11
flags: 6
---

# Research Dossier: Business Intelligence untuk Rumah Sakit: BOR, Alur Pasien, dan Klaim BPJS

## TL;DR for the writer

- **Indikator efisiensi tempat tidur = standar Barber-Johnson (1973), diadopsi Kemenkes/Depkes**: empat angka yang wajib di dashboard — BOR, ALOS/AvLOS, TOI, BTO. Nilai "ideal" **berbeda antar acuan** (Barber-Johnson vs Depkes) — tulis sebagai rentang dengan atribusi, jangan satu angka mutlak (lihat tabel + Flag #1).
- **Klaim BPJS memakai metode casemix prospektif INA-CBG** (Permenkes 76/2016; tarif terbaru Permenkes 3/2023). Alur klaim punya tenggat keras: RS mengajukan kolektif paling lambat tanggal 10 bulan berikutnya, BPJS wajib membayar dalam **15 hari kerja** setelah berkas lengkap. Inilah titik tempat BI memberi nilai: memantau klaim pending, selisih koding, dan piutang sebelum jatuh tempo.
- **Skala JKN membuat efisiensi klaim bersifat kas-kritis**: per 31 Des 2025, peserta JKN 282,7 juta jiwa (~98,6% penduduk); 725,3 juta pemanfaatan layanan sepanjang 2025. Mayoritas pendapatan RS bertumpu pada arus kas klaim BPJS.
- **BI = lapisan analitik di atas data, bukan sistem rekam medis**: data lahir di SIMRS (sistem pihak ketiga) + ERP keuangan; disatukan ke data warehouse lewat ETL; baru divisualkan di dashboard. Soltius **mengimplementasikan lapisan ini (SAP Analytics Cloud di atas SAP S/4HANA + Datasphere/BW/4HANA)**, tidak membuat SIMRS.
- **Prasyarat jujur**: koding diagnosis dan master data yang kacau membuat BOR/klaim keliru; "garbage in, garbage out". SATUSEHAT (platform interoperabilitas Kemenkes berbasis HL7 FHIR) kini menertibkan standar data RS — gunakan sebagai konteks, tapi hati-hati soal cara integrasi SIMRS↔SAP (Flag #2).

## Core facts (verified)

> **Claim**: Efisiensi penggunaan tempat tidur RS di Indonesia dinilai dengan empat indikator Barber-Johnson: BOR, AvLOS/ALOS, TOI, dan BTO.
> **Number/specific**: BOR (Bed Occupancy Rate) = % utilisasi tempat tidur; ALOS (Average Length of Stay) = rata-rata lama dirawat; TOI (Turn Over Interval) = rata-rata hari tempat tidur kosong antar pasien; BTO (Bed Turn Over) = frekuensi satu tempat tidur dipakai per periode.
> **Source**: Grafik Barber-Johnson (1973), materi ajar Esa Unggul (bahan-ajar.esaunggul.ac.id) + jurnal rekam medis Poltekkes; diakses 2026-10-07
> **Confidence**: high

> **Claim**: Nilai ideal indikator berbeda antara acuan Barber-Johnson dan Depkes/Kemenkes.
> **Number/specific**: Barber-Johnson: BOR 75–85%, LOS 3–12 hari, TOI 1–3 hari, BTO ~30×/tahun. Depkes: BOR 60–85%, AvLOS 6–9 hari, TOI 1–3 hari, BTO 40–50×/tahun.
> **Source**: jurnal akademik ID (journal.um-surabaya.ac.id JKM; ejournal Poltekkes Semarang RMIK), mengutip Barber-Johnson & Depkes; diakses 2026-10-07
> **Confidence**: medium (angka "ideal" bervariasi antar sumber — perlakukan sebagai rentang, lihat Flag #1)

> **Claim**: TOI 1–3 hari adalah rentang yang disepakati kedua acuan sebagai ideal.
> **Number/specific**: TOI < 1 hari menandakan tempat tidur terlalu padat (risiko infeksi/tanpa jeda sterilisasi); TOI > 3 hari menandakan banyak tempat tidur menganggur.
> **Source**: jurnal rekam medis ID mengutip Barber-Johnson; diakses 2026-10-07
> **Confidence**: high

> **Claim**: Rumus BOR adalah hari perawatan dibagi kapasitas tempat tidur dalam satu periode.
> **Number/specific**: BOR = (jumlah hari perawatan ÷ (jumlah tempat tidur × jumlah hari dalam periode)) × 100%.
> **Source**: definisi standar Barber-Johnson / Depkes, jurnal rekam medis ID; diakses 2026-10-07
> **Confidence**: high

> **Claim**: Sistem pembayaran klaim RS dalam program JKN menggunakan metode casemix prospektif INA-CBG.
> **Number/specific**: INA-CBG = Indonesian Case Base Groups; mengelompokkan diagnosis + prosedur berdasarkan kemiripan ciri klinis dan kemiripan biaya/sumber daya. Besaran tarif diketahui SEBELUM layanan diberikan (prospektif).
> **Source**: Permenkes No. 76 Tahun 2016 tentang Pedoman INA-CBG; jurnal/skripsi RMIK ID; diakses 2026-10-07
> **Confidence**: high

> **Claim**: Tarif INA-CBG diatur ulang oleh regulasi terbaru dengan penyesuaian (kenaikan) besaran.
> **Number/specific**: Tarif lama = Permenkes 64/2016; tarif terbaru = Permenkes No. 3 Tahun 2023 tentang Standar Tarif Pelayanan Kesehatan dalam Penyelenggaraan Program JKN, diundangkan 9 Januari 2023.
> **Source**: Kemenkes (kemkes.go.id — "Ini Dia Standar Tarif Baru Pelayanan JKN"); naskah di peraturan.go.id; diakses 2026-10-07
> **Confidence**: high

> **Claim**: Alur klaim BPJS punya tenggat waktu pengajuan dan pembayaran yang mengikat.
> **Number/specific**: RS mengajukan klaim secara kolektif setiap bulan, paling lambat tanggal 10 bulan berikutnya; BPJS Kesehatan wajib membayar dalam 15 hari kerja sejak berkas klaim diterima lengkap.
> **Source**: ketentuan klaim JKN (regulasi BPJS/Permenkes), dikutip jurnal & repository RMIK ID; diakses 2026-10-07
> **Confidence**: medium (tenggat umum JKN; writer sebaiknya tidak menyebut pasal spesifik tanpa verifikasi lanjutan)

> **Claim**: Kesalahan koding (coding) adalah penyebab umum klaim BPJS terhambat/ditolak.
> **Number/specific**: Selisih antara koding diagnosis-prosedur dengan tarif INA-CBG memicu dispute/pending claim; Unit Casemix berperan menjaga akurasi koding, kelengkapan dokumen, dan ketepatan waktu pengajuan.
> **Source**: Kontan (nasional.kontan.co.id — "Pembayaran BPJS Kesehatan sering terhambat akibat salah coding"); jurnal RMIK ID; diakses 2026-10-07
> **Confidence**: high

> **Claim**: Program JKN mencakup hampir seluruh penduduk Indonesia, menjadikan arus kas klaim BPJS kritis bagi RS.
> **Number/specific**: Per 31 Desember 2025, peserta JKN 282,7 juta jiwa atau ~98,62% penduduk; per 30 September 2025 sudah 281,88 juta (~99,1% dari proyeksi penduduk 2025).
> **Source**: Kontan (keuangan.kontan.co.id) & Bisnis.com mengutip BPJS Kesehatan; Monthly Report JKN DJSN (sismonev.djsn.go.id); diakses 2026-10-07
> **Confidence**: high

> **Claim**: Volume pemanfaatan layanan JKN sangat besar, menuntut pemantauan operasional yang terkini.
> **Number/specific**: Sepanjang 2025, peserta JKN memanfaatkan layanan kesehatan >725,3 juta kali, rata-rata ~1,9 juta layanan per hari. Beban/biaya pelayanan kesehatan JKN 2025 mencapai Rp191,3 triliun.
> **Source**: BPJS Kesehatan via Bisnis.com (finansial.bisnis.com, 2026-07) & Kontan; diakses 2026-10-07
> **Confidence**: high

> **Claim**: SATUSEHAT adalah platform interoperabilitas data kesehatan nasional Kemenkes, berbasis standar HL7 FHIR.
> **Number/specific**: SATUSEHAT menjadi kanal resmi pertukaran data kesehatan elektronik antarfasilitas (RS, puskesmas, lab, apotek); mewajibkan format data FHIR (Fast Healthcare Interoperability Resources) untuk data model & API.
> **Source**: Dokumentasi SATUSEHAT Kemenkes (dokumentasisatusehat.dto.kemkes.go.id); regulasi RME wajib (Permenkes No. 24/2022); diakses 2026-10-07
> **Confidence**: high

> **Claim**: SIMRS adalah sistem informasi manajemen rumah sakit yang umumnya disediakan pihak ketiga (HIS), terpisah dari ERP keuangan.
> **Number/specific**: SIMRS menyimpan data registrasi, rawat inap/jalan, farmasi, laboratorium; sistem keuangan/ERP menyimpan data biaya, logistik, pengadaan. BI menyatukan keduanya; dashboard duduk di atas, bukan menggantikan SIMRS.
> **Source**: praktik umum integrasi RS + konteks SATUSEHAT (SIMRS sebagai sumber data RME); knowledge_base product_matrix.md; diakses 2026-10-07
> **Confidence**: high

> **Claim**: SAP Analytics Cloud (SAC) adalah solusi BI/analitik cloud SAP untuk dashboard, self-service BI, perencanaan, dan prediktif.
> **Number/specific**: SAC menggabungkan business intelligence, augmented/predictive analytics, dan planning dalam satu SaaS; cocok sebagai lapisan dashboard manajemen di atas data warehouse.
> **Source**: SAP official (sap.com / help.sap.com — SAP Analytics Cloud); knowledge_base product_matrix.md; diakses 2026-10-07
> **Confidence**: high (naming SAC saat ini benar; verifikasi fitur spesifik sebelum klaim detil)

> **Claim**: Lapisan data warehouse SAP yang kini aktif adalah SAP Datasphere (sebelumnya SAP Data Warehouse Cloud) dan SAP BW/4HANA.
> **Number/specific**: SAP Datasphere di-rebrand dari Data Warehouse Cloud pada 2023; berperan sebagai lapisan integrasi/ETL + pemodelan data sebelum data masuk ke SAC.
> **Source**: SAP official (news.sap.com / help.sap.com — SAP Datasphere); knowledge_base product_matrix.md; diakses 2026-10-07
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Analytics Cloud (SAC)** — dashboard manajemen (operasional/BOR, mutu, klaim) + analitik prediktif perencanaan sumber daya | SAC = lapisan BI/visualisasi; menyatukan BI + planning + predictive; tidak menyimpan rekam medis | H2 #1 (definisi), H2 #2 (KPI → dashboard), closing | **Analytics + Data and AI Consulting + vertikal Healthcare** |
| **SAP S/4HANA** — fondasi data keuangan, logistik, farmasi RS | ERP keuangan/logistik; sumber data biaya & persediaan (stok obat/alkes) | H2 #4 ("Dari mana datanya") | Implementation (fondasi ERP) |
| **SAP Datasphere / BW/4HANA** — lapisan ETL/integrasi & data warehouse | Datasphere (eks Data Warehouse Cloud, rebrand 2023) + BW/4HANA; menyatukan SIMRS + ERP sebelum dashboard | H2 #4 | Data Management + Data and AI Consulting |
| **SIMRS** (konteks, bukan produk SAP/Soltius) | Sistem pihak ketiga; sumber data klinis-administratif; BI duduk di atasnya | H2 #4, H2 #5 | — (jangan klaim Soltius membuat SIMRS) |
| **SAP Build / BTP** (opsional, cousin link low-code) | Aplikasi pendukung (formulir casemix/registrasi tambahan) dibangun cepat sebagai pelengkap SIMRS | aside singkat di H2 #4/#5 | Digital Platform |

**Soltius anchor untuk CTA (closing)**: "Dengan pengalaman di sektor Healthcare, Soltius mengimplementasikan SAP Analytics Cloud di atas data SIMRS dan keuangan agar manajemen rumah sakit memantau BOR, alur pasien, dan klaim BPJS dalam satu tampilan — melalui layanan Data and AI Consulting." Opsional 1 aside mid-article (bagian data administratif): pendampingan biasanya dimulai dari menertibkan master data & koding.

Reminder: Soltius **mengimplementasikan/mengintegrasikan/mendukung** SAC + S/4HANA + Datasphere — **tidak membuat** SIMRS maupun software SAP. Max 2–3 self-mention. **JANGAN menyebut klien RS bernama** — tidak ada di company_profile.md (vertikal Healthcare boleh disebut sebagai pengalaman industri, tanpa nama rumah sakit).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Kemenkes — "Ini Dia Standar Tarif Baru Pelayanan JKN" / Permenkes No. 3 Tahun 2023** — https://kemkes.go.id/id/ini-dia-standar-tarif-baru-pelayanan-jkn (naskah: https://www.peraturan.go.id/files/permenkes+-no-3-tahun-2023.pdf) — *what it backs*: tarif INA-CBG terbaru & mekanisme pembayaran JKN.
2. **BPJS Kesehatan via Bisnis.com (2 Juli 2026)** — https://finansial.bisnis.com/read/20260702/215/1985060/bpjs-kesehatan-peserta-jkn-2827-juta-jiwa-beban-pelayanan-kesehatan-capai-rp1913-triliun — *what it backs*: peserta JKN 282,7 juta & beban layanan Rp191,3 triliun (2025).
3. **Dokumentasi SATUSEHAT — Kemenkes (DTO)** — https://dokumentasisatusehat.dto.kemkes.go.id — *what it backs*: standar interoperabilitas HL7 FHIR untuk pertukaran data kesehatan RS.
4. **SAP — SAP Analytics Cloud (official)** — https://www.sap.com/products/technology-platform/cloud-analytics.html — *what it backs*: SAC sebagai solusi BI/analitik (opsional, untuk klaim produk SAP).

Priority order terpenuhi: SAP official + regulator Indonesia (Kemenkes/BPJS/DJSN) sebagai sumber utama; jurnal akademik ID sebagai pendukung definisi KPI.

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu Business Intelligence untuk rumah sakit?
Business Intelligence (BI) rumah sakit adalah praktik menyatukan data SIMRS, keuangan, dan klaim menjadi dashboard yang memantau operasional (BOR, ALOS), mutu pelayanan, dan siklus klaim BPJS (INA-CBG) secara terkini. Berbeda dari rekap bulanan SIMRS, BI menyajikan utilisasi tempat tidur, alur pasien, dan status klaim dalam satu tampilan sehingga manajemen mengambil keputusan harian, bukan menunggu laporan yang sudah basi.

### Apa itu BOR dan bagaimana rumusnya?
BOR (Bed Occupancy Rate) adalah persentase pemakaian tempat tidur dalam satu periode. Rumusnya: (jumlah hari perawatan ÷ (jumlah tempat tidur × jumlah hari)) × 100%. Rentang ideal berbeda antar acuan — Depkes menyebut 60–85%, sedangkan standar Barber-Johnson 75–85%. BOR terlalu tinggi berisiko pasien menumpuk dan sterilisasi tergesa; terlalu rendah berarti kapasitas menganggur.

### Apa itu ALOS atau LOS?
ALOS (Average Length of Stay) atau LOS adalah rata-rata lama seorang pasien dirawat inap, dihitung dari total hari rawat dibagi jumlah pasien keluar (hidup maupun meninggal). Rentang yang umum dianggap ideal 6–9 hari menurut acuan Depkes (Barber-Johnson memberi rentang lebih lebar, 3–12 hari). ALOS yang memanjang tanpa alasan klinis menandakan inefisiensi alur pasien dan menaikkan biaya per kasus.

### Bagaimana BI membantu mempercepat dan mengamankan klaim BPJS?
BI memantau klaim pending, klaim mendekati tenggat, dan selisih antara koding diagnosis dengan tarif INA-CBG secara harian. Karena RS wajib mengajukan klaim paling lambat tanggal 10 bulan berikutnya dan BPJS membayar dalam 15 hari kerja setelah berkas lengkap, dashboard klaim membantu mendeteksi dispute koding lebih awal, mengurangi penolakan, dan menjaga arus kas dari piutang yang menumpuk.

### Apa itu INA-CBG?
INA-CBG (Indonesian Case Base Groups) adalah sistem pembayaran casemix prospektif yang dipakai BPJS Kesehatan untuk membayar klaim rumah sakit dalam program JKN. Diagnosis dan prosedur dikelompokkan berdasarkan kemiripan ciri klinis dan biaya, lalu dibayar menurut tarif paket yang sudah ditetapkan. Pedomannya diatur Permenkes No. 76/2016, dengan standar tarif terbaru pada Permenkes No. 3 Tahun 2023.

### Dari mana data dashboard rumah sakit berasal?
Datanya berlapis: SIMRS menyimpan registrasi, rawat inap/jalan, farmasi, dan laboratorium; sistem keuangan/ERP menyimpan biaya, logistik, dan pengadaan; data casemix/koding menyimpan diagnosis-prosedur. Ketiga sumber disatukan lewat proses ETL ke sebuah data warehouse, baru divisualkan di dashboard BI. Karena itu dashboard hanya seakurat data sumbernya — koding dan master data harus tertib lebih dulu.

### Apakah data pasien aman saat masuk ke dashboard?
Data pasien tunduk pada UU Pelindungan Data Pribadi (UU PDP) dan aturan rekam medis elektronik. Dashboard manajemen idealnya menampilkan data agregat (BOR, klaim, alur), bukan identitas pasien individual, dengan kontrol akses berbasis peran. Tata kelola ini adalah prasyarat, bukan tambahan — pembahasan teknis masking dan role-level security dibahas terpisah di artikel keamanan data.

## Data tables for the writer

### Indikator efisiensi tempat tidur (Barber-Johnson) → nilai ideal & keputusan
| Indikator | Arti | Rentang ideal (Depkes / Barber-Johnson) | Sinyal untuk manajemen |
|---|---|---|---|
| **BOR** | % pemakaian tempat tidur | 60–85% (Depkes) / 75–85% (BJ) | Terlalu tinggi → tambah kapasitas/percepat pemulangan; terlalu rendah → kapasitas menganggur |
| **ALOS/AvLOS** | Rata-rata lama dirawat | 6–9 hari (Depkes) / 3–12 hari (BJ) | Memanjang → tinjau alur pasien, discharge planning |
| **TOI** | Jeda tempat tidur kosong antar pasien | 1–3 hari (keduanya) | < 1 hari → risiko tanpa jeda sterilisasi; > 3 hari → tempat tidur idle |
| **BTO** | Frekuensi pakai tempat tidur / periode | 40–50×/th (Depkes) / ~30×/th (BJ) | Rendah → utilisasi buruk |

> Catatan penulis: selalu atribusikan rentang ke acuannya; **jangan sebut satu angka "ideal" mutlak** (lihat Flag #1).

### KPI klaim/finansial RS → sumber data
| KPI | Arti | Sumber data |
|---|---|---|
| Piutang klaim (AR) | Nilai klaim belum dibayar | Keuangan/ERP + status klaim |
| Klaim pending/terlambat | Klaim belum/terlambat diajukan atau dibayar | Aplikasi INA-CBG + casemix |
| Rasio klaim ditolak (dispute) | % klaim ditolak karena koding/berkas | Casemix/koding + feedback BPJS |
| Selisih real cost vs tarif INA-CBG | Biaya aktual vs tarif paket | Keuangan + koding (label: gambaran, Flag #3) |

### Lapisan teknologi (vendor-neutral → SAP)
| Lapisan | Fungsi | Contoh SAP |
|---|---|---|
| Sumber | Data klinis-administratif | SIMRS (pihak ketiga) |
| Fondasi ERP | Keuangan, logistik, farmasi | SAP S/4HANA |
| Integrasi/warehouse | ETL, pemodelan, satu sumber kebenaran | SAP Datasphere / BW/4HANA |
| Dashboard/BI | Visualisasi, self-service, prediktif | SAP Analytics Cloud |

## Edge cases & nuance

- **"Ideal" BOR itu relatif.** BOR 90% bisa terlihat hebat tapi menandakan RS kewalahan (IGD menumpuk, tanpa buffer); BOR 55% buruk untuk RS umum tapi wajar untuk unit tertentu (mis. isolasi, ICU cadangan). Dashboard harus kontekstual per bangsal, bukan satu angka RS-wide.
- **BI tidak memperbaiki klaim yang salah koding — ia hanya memperlihatkannya lebih cepat.** Nilai BI ada pada deteksi dini, bukan koreksi otomatis. Akurasi tetap pekerjaan Unit Casemix/koder.
- **SATUSEHAT ≠ jalur integrasi SIMRS→SAP.** SATUSEHAT (HL7 FHIR) adalah kanal pertukaran data klinis antarfasilitas ke Kemenkes; integrasi internal SIMRS↔ERP untuk BI umumnya lewat API/konektor/middleware, belum tentu FHIR (Flag #2).
- **Selisih real cost vs tarif INA-CBG bervariasi per kasus & per RS.** Tidak ada satu angka nasional yang sahih; tampilkan sebagai "gambaran" dari jurnal, bukan klaim pasti.
- **Dashboard real-time untuk klaim seringkali tidak perlu real-time.** Klaim bersifat bulanan; near-real-time harian cukup. Yang benar-benar butuh kecepatan adalah alur pasien/IGD. Jangan overselling "real-time" seragam.

## Flags (open factual risk)

- ⚠️ **Nilai "ideal" BOR/ALOS/BTO**: sumber berbeda memberi rentang berbeda (Barber-Johnson vs Depkes) → **rekomendasi**: selalu tulis sebagai rentang dengan atribusi ("menurut Depkes...", "standar Barber-Johnson..."); jangan menyebut satu angka ideal mutlak. TOI 1–3 hari aman karena disepakati kedua acuan.
- ⚠️ **Cara integrasi SIMRS↔SAP**: SATUSEHAT memakai HL7 FHIR untuk pertukaran data klinis ke Kemenkes, tetapi integrasi SIMRS→ERP/BI internal belum tentu FHIR → **rekomendasi**: jangan klaim "SAP terhubung ke SIMRS via FHIR"; gunakan frasa aman seperti "via API/konektor integrasi; standar seperti HL7 FHIR dipakai untuk pertukaran data ke SATUSEHAT".
- ⚠️ **Angka gap real cost vs tarif INA-CBG**: tidak ada figur nasional otoritatif → **rekomendasi**: label "gambaran", atribusi ke jurnal, jangan jadikan klaim numerik keras.
- ⚠️ **Tenggat/mekanisme klaim (tanggal 10, 15 hari kerja)**: benar sebagai ketentuan umum JKN, tetapi detail pasal berubah antar regulasi → **rekomendasi**: sebut sebagai "ketentuan BPJS" tanpa mengutip nomor pasal spesifik tanpa verifikasi lanjutan.
- ⚠️ **Klien RS Soltius**: tidak ada nama RS di company_profile.md → **rekomendasi**: sebut vertikal Healthcare sebagai pengalaman industri; **JANGAN mengarang nama rumah sakit atau outcome proyek**.
- ⚠️ **Fitur spesifik SAP Analytics Cloud / Datasphere**: naming saat ini benar, tetapi fitur granular berubah → **rekomendasi**: jelaskan peran lapisan (dashboard/warehouse) secara umum; hindari klaim fitur detil tanpa cek SAP docs terbaru.

## Definition snippet draft (40–60 words)

> **Business Intelligence** untuk rumah sakit adalah praktik menyatukan data SIMRS, keuangan, dan klaim menjadi dashboard yang memantau operasional (BOR, ALOS), mutu pelayanan, dan siklus klaim BPJS (INA-CBG) secara terkini. Dengan BI, manajemen melihat utilisasi tempat tidur, alur pasien, dan status klaim dalam satu tampilan, bukan menunggu rekap manual yang sudah basi saat dibaca.
