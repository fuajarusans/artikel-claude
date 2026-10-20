---
brief_id: "sap-clean-core-01"
researcher_run_date: "2026-08-11"
sources_cited: 11
flags: 5
---

# Research Dossier: Dimensi Data Clean Core SAP — Menjaga Data Tetap Bersih, Bukan Cuma Kode

## TL;DR for the writer

- **Data adalah salah satu dari LIMA dimensi resmi clean core** (bukan tambahan). SAP menamai kelimanya: **Processes, Extensibility, Data, Integrations, Operations** (SAP, "5 guiding principles of clean core", Des 2025). Ini fondasi angle — clean core bukan cuma soal kode/ekstensi.
- SAP sendiri memecah **dimensi Data menjadi lima pilar**: **Strategy, Governance, Quality, Volume efficiency, Protection** (SAP, "Clean core data for SAP S/4HANA Cloud", Sep 2025). Gunakan penamaan ini persis — sudah terverifikasi ke sumber SAP resmi, jadi bukan sekadar konstruksi hub Soltius.
- Karena **HANA berbasis in-memory**, volume data langsung menaikkan kebutuhan memori dan biaya. Alat pengendali resmi: **SAP Information Lifecycle Management (ILM)** (retention + archiving + destruction) dan **Data Volume Management (DVM)** (kurangi footprint DB). **Data tiering hot/warm/cold** adalah istilah SAP resmi (mekanismenya: SAP HANA Native Storage Extension untuk tier warm).
- Angka biaya HANA dan persentase pengurangan footprint **TIDAK boleh dikutip sebagai fakta keras** — tak ada sumber SAP publik yang memberi angka universal. Bingkai sebagai *rule-of-thumb* / "bergantung pada profil data". Yang boleh angka keras: retensi legal Indonesia (**10 tahun**) dan tenggat ECC (**2027/2030**).
- Konteks Indonesia yang kuat: kewajiban simpan dokumen pembukuan/pajak **10 tahun** (UU KUP Pasal 28 ayat 11 + UU No. 8/1997 Dokumen Perusahaan Pasal 11). Ini menjelaskan mengapa "hapus semua data lama" itu salah — data harus di-*archive* (tetap dapat dipanggil, patuh retensi), bukan dihapus.

---

## Core facts (verified)

> **Claim**: Clean core SAP terdiri dari lima dimensi resmi, dan Data adalah salah satunya.
> **Number/specific**: Lima dimensi/prinsip: **Processes, Extensibility, Data, Integrations, Operations**.
> **Source**: SAP, "5 guiding principles of clean core" (sap.com/documents, Des 2025); diperkuat SAP Community "Clean Core Extensibility: Balancing Standardization and Differentiation" (2025).
> **Confidence**: high

> **Claim**: SAP secara resmi memecah dimensi Data clean core menjadi lima pilar.
> **Number/specific**: **Strategy, Governance, Quality, Volume efficiency, Protection** ("The five pillars of clean core data explore the essential dimensions of clean data: strategy, governance, quality, volume efficiency, and protection").
> **Source**: SAP, "Clean core data for SAP S/4HANA Cloud" (sap.com/documents/2025/09/...); SAP Community, "Why clean data is the foundation of enterprise success" (2026).
> **Confidence**: high

> **Claim**: SAP Information Lifecycle Management (ILM) adalah kerangka bawaan SAP untuk mengelola retensi, archiving, dan penghapusan legal data sesuai kepatuhan.
> **Number/specific**: Tiga komponen inti — **archiving** (mengeluarkan data yang tak lagi dipakai harian dari sistem operatif), **retention** (berapa lama data harus tersedia sebelum boleh dihapus), **destruction** (penghapusan permanen setelah masa retensi habis). ILM mengelola siklus hidup data terstruktur & tak terstruktur dan mengendalikan volume.
> **Source**: SAP Help Portal — "SAP Information Lifecycle Management" (help.sap.com); SAP Community, "Data Destruction using SAP Information Lifecycle Management".
> **Confidence**: high

> **Claim**: Data Volume Management (DVM) adalah pendekatan + alat SAP untuk mengelola pertumbuhan data dan mengurangi footprint database.
> **Number/specific**: DVM = proses & tools untuk memantau, menganalisis, dan mengoptimalkan jejak data; tujuannya "menjalankan database seramping mungkin" dengan menyimpan data relevan, mengarsip data historis, dan menghapus data usang. Footprint yang lebih kecil → durasi konversi ke S/4HANA lebih pendek.
> **Source**: SAP Help Portal — "Data Volume Management" (help.sap.com, Solution Manager 7.2); SAP Help — "Data Volume Management during an SAP S/4HANA conversion" (PDF, help.sap.com).
> **Confidence**: high

> **Claim**: "Hot / warm / cold" (data temperature / data tiering) adalah terminologi SAP resmi, bukan sekadar istilah industri.
> **Number/specific**: **Hot** = data misi-kritis, disimpan in-memory di HANA untuk pemrosesan real-time; **Warm** = data yang lebih jarang diakses, ditaruh di tier lebih murah tapi tetap dikelola sebagai bagian database HANA; **Cold** = data jarang dipakai & bervolume besar, di penyimpanan termurah.
> **Source**: SAP Community (blog oleh SAP), "SAP HANA Native Storage Extension: A Native Warm Data Tiering Solution"; SAP Learning, "Identifying Data Tiering Options in SAP HANA Cloud".
> **Confidence**: high

> **Claim**: SAP HANA Native Storage Extension (NSE) menyediakan tier data *warm* asli di dalam database HANA.
> **Number/specific**: NSE mengelola data warm di area khusus memori HANA (buffer cache) yang terpisah dari area hot/working memory; menggabungkan in-memory dengan SSD/flash untuk rasio biaya-performa lebih baik; mendukung penuh fungsi & tipe data HANA.
> **Source**: SAP Community, "SAP HANA Native Storage Extension: A Native Warm Data Tiering Solution".
> **Confidence**: high

> **Claim**: Archiving BUKAN sama dengan menghapus data.
> **Number/specific**: Pada archiving, data ditulis ke file arsip dan disimpan di ILM Store yang patuh, lalu dihapus dari database operatif — tetapi tetap **dapat dipanggil kembali** dan tunduk pada aturan **residence** (kapan boleh keluar dari DB) dan **retention** (berapa lama harus disimpan). Penghapusan/destruction permanen baru terjadi setelah masa retensi berakhir.
> **Source**: SAP Help — "ILM-Enabled Archiving" (help.sap.com, S/4HANA Cloud); SAP Community, "Data Destruction using SAP ILM".
> **Confidence**: high

> **Claim**: Karena HANA in-memory, volume data yang tak dikelola menaikkan kebutuhan memori dan biaya, serta memperlambat pemrosesan.
> **Number/specific**: Data hot berada di memori (in-memory) untuk pemrosesan real-time — tier ini yang paling mahal; DVM/archiving/tiering memindahkan data yang jarang dipakai ke tier lebih murah. (Angka biaya spesifik tidak dipublikasikan SAP secara universal — lihat Flags.)
> **Source**: SAP Community, "SAP HANA Native Storage Extension…"; SAP Help — "Data Volume Management".
> **Confidence**: high (mekanisme) / low untuk angka spesifik (tidak boleh dikutip sebagai angka keras)

> **Claim**: Data yang bersih & bervolume terkendali adalah prasyarat migrasi/konversi S/4HANA yang lebih cepat dan murah.
> **Number/specific**: Footprint data yang berkurang menurunkan ukuran beban (load size) sehingga durasi konversi lebih pendek; SAP menempatkan DVM sebagai langkah sebelum konversi S/4HANA.
> **Source**: SAP Help — "Data Volume Management during an SAP S/4HANA conversion" (PDF, help.sap.com); SAPinsider, "The Value of Data Volume Management Using Data Archiving in SAP".
> **Confidence**: high

> **Claim**: SAP ECC (Business Suite 7) menuju akhir dukungan — mendorong urgensi merapikan data sebelum pindah ke S/4HANA.
> **Number/specific**: **Mainstream maintenance ECC 6 (EHP 6–8) berakhir 31 Desember 2027**, dengan **extended maintenance hingga 31 Desember 2030** (premi ~2% di atas basis maintenance). EHP 0–5 sudah berakhir 31 Desember 2025 tanpa extended. Dukungan di luar 2030 hanya lewat perjanjian RISE khusus untuk pelanggan tertentu.
> **Source**: SAP Support "Maintenance Strategy" (support.sap.com); dirangkum Rimini Street & SEIDOR (2025–2026).
> **Confidence**: high (tanggal inti 2027/2030); medium untuk klausul "di luar 2030 via RISE" (kebijakan dapat berubah)

> **Claim**: Di Indonesia, dokumen dasar pembukuan & perpajakan wajib disimpan 10 tahun.
> **Number/specific**: **10 tahun** — dasar hukum **Pasal 28 ayat (11) UU KUP** (mencakup dokumen elektronik/hasil pengolahan data pembukuan). Diperkuat **UU No. 8 Tahun 1997 tentang Dokumen Perusahaan, Pasal 11**: catatan, bukti pembukuan, dan data pendukung administrasi keuangan wajib disimpan **10 tahun terhitung dari akhir tahun buku** perusahaan.
> **Source**: UU KUP Pasal 28 (11) (dirangkum DDTC & Pratama Institute); UU No. 8/1997 Pasal 11 (JDIH BUMN / hukum.unsrat.ac.id).
> **Confidence**: high

> **Claim**: Data governance dalam clean core adalah inisiatif strategis, bukan tugas operasional teknis semata.
> **Number/specific**: SAP membingkai dimensi Data sebagai "controlled, high-quality data" dengan governance yang harus diformalkan dan model kualitas berkelanjutan (continuous quality model) untuk konsistensi, kepatuhan, dan keandalan data bisnis.
> **Source**: SAP, "5 guiding principles of clean core"; SAP Community, "Why clean data is the foundation of enterprise success".
> **Confidence**: high

> **Claim**: Kualitas data & master data management adalah fondasi *single source of truth*.
> **Number/specific**: Akurasi = syarat mendasar clean core compliance; ditegakkan lewat validation rules, quality checks berkala, dan proses governance. Data core yang bersih & tergovernansi menjadi sumber tepercaya yang mengalir ke data warehouse/analitik.
> **Source**: SAP, "Clean core data for SAP S/4HANA Cloud"; SAP Learning, "Exploring How to Make Data Clean Core Compliant".
> **Confidence**: high (framing SAP) — hindari klaim angka improvement tanpa sumber

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Lima dimensi clean core; **Data** salah satunya | Processes, Extensibility, Data, Integrations, Operations (SAP resmi) | H2 #1 (definitional) | — |
| Lima pilar dimensi Data | Strategy, Governance, Quality, Volume efficiency, Protection | H2 #2 | — |
| **SAP ILM** | Archiving + retention + destruction; kelola siklus hidup & volume, patuh kepatuhan | H2 #4 (tabel) | Data and AI Consulting |
| **Data Volume Management (DVM)** | Retain/archive/delete; kurangi footprint DB; percepat konversi S/4HANA | H2 #3 & #4 | Data Management + Migration |
| **Data tiering hot/warm/cold** (HANA NSE) | Hot=in-memory, Warm=NSE/tier murah tetap terkelola, Cold=penyimpanan termurah | H2 #3 & #4 | — |
| **Master data & data quality** | Fondasi single source of truth; validation rules + governance | H2 #2 | Data and AI Consulting |
| **Soltius anchor** | Implements/migrates/supports — **tidak** membangun software SAP | Closing | **Data and AI Consulting + Data Management + Migration (data migration)** |

Reminder: Soltius **mengimplementasikan/memigrasikan/mendukung** teknologi ini — bukan membuatnya. Maks 2–3 self-mention (idealnya: 1 aside singkat di H2 #3 + 1 CTA penutup).

**Positioning line siap pakai (closing)**: "Melalui layanan Data and AI Consulting, Soltius membantu merapikan data menjadi satu sumber kebenaran sebelum dan sesudah migrasi ERP ke cloud." Kredibilitas pendukung: SAP Platinum Partner via United VARs, bagian Metrodata Group sejak 1998.

---

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP — "Clean core data for SAP S/4HANA Cloud" (Sep 2025)** — https://www.sap.com/documents/2025/09/12e22f65-297f-0010-bca6-c68f7e60039b.html — *backs*: lima pilar dimensi Data (strategy, governance, quality, volume efficiency, protection) sebagai kerangka SAP resmi. *(Catatan: dokumen sap.com menolak WebFetch/403; isi diverifikasi via ringkasan hasil pencarian SAP-indexed + SAP Community pendamping. Konten konsisten. Writer boyeh menaut ke URL ini.)*
2. **SAP Help Portal — "SAP Information Lifecycle Management"** — https://help.sap.com/docs/BS_CA/7ce8e5dc89d7407e8baa9de7b775f31f/eeb91dcd1aa444a98ffbba662ecddb9c.html — *backs*: definisi ILM (retention + archiving + destruction), residence vs retention.
3. **SAP Help Portal — "Data Volume Management"** — https://help.sap.com/docs/SAP_Solution_Manager/2280273f45054d318142b271b06a03c1/e445e854d52d47a8b1ee32e9a064d438.html — *backs*: DVM = kelola pertumbuhan data & kurangi footprint; kaitan ke konversi S/4HANA.
4. **SAP Community (oleh SAP) — "SAP HANA Native Storage Extension: A Native Warm Data Tiering Solution"** — https://community.sap.com/t5/technology-blog-posts-by-sap/sap-hana-native-storage-extension-a-native-warm-data-tiering-solution/ba-p/13447996 — *backs*: hot/warm/cold sebagai istilah SAP; NSE untuk tier warm.
5. **UU No. 8 Tahun 1997 tentang Dokumen Perusahaan (Pasal 11) + UU KUP Pasal 28 (11)** — https://jdih.bumn.go.id/storage/peraturan/UU%20Nomor%208%20Tahun%201997.pdf — *backs*: kewajiban simpan dokumen keuangan/pajak 10 tahun (dasar hukum "archive, jangan hapus").

Prioritas taut untuk writer: **≥1 SAP official** (ILM atau clean-core-data) **+ 1 sumber regulasi Indonesia** (retensi 10 tahun) — memenuhi seo_playbook (≥2 sumber otoritatif, salah satunya konteks lokal).

---

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu dimensi data dalam clean core SAP?
Dimensi data adalah satu dari lima dimensi resmi clean core SAP (bersama Processes, Extensibility, Integrations, dan Operations). Fokusnya menjaga data tetap terkendali dan berkualitas tinggi. SAP memecahnya menjadi lima pilar: strategi, tata kelola (governance), kualitas, efisiensi volume, dan proteksi. Intinya: sistem yang bersih bukan hanya bebas kode kustom, tetapi juga bebas data usang, ganda, dan tak tergovernansi.

### Apa itu SAP Information Lifecycle Management (ILM)?
SAP Information Lifecycle Management (ILM) adalah kerangka bawaan SAP untuk mengelola seluruh siklus hidup data sesuai kepatuhan. ILM menangani tiga hal: archiving (memindahkan data yang tak lagi dipakai harian keluar dari sistem operatif), retention (menetapkan berapa lama data wajib disimpan), dan destruction (menghapus permanen setelah masa retensi berakhir). ILM membantu mengendalikan volume database sekaligus memenuhi kewajiban hukum penyimpanan dokumen.

### Apa bedanya archiving dan menghapus data di SAP?
Berbeda mendasar. Archiving menulis data ke file arsip di ILM Store yang patuh, lalu mengeluarkannya dari database operatif — namun data tetap bisa dipanggil kembali dan tetap tunduk pada masa retensi. Menghapus (destruction) berarti data hilang permanen, dan itu baru boleh dilakukan setelah masa retensi habis. Untuk dokumen pembukuan di Indonesia yang wajib disimpan 10 tahun, archiving adalah jawabannya, bukan penghapusan.

### Apakah data volume management wajib sebelum migrasi S/4HANA?
Tidak wajib secara formal, tetapi sangat dianjurkan. Data Volume Management (DVM) mengurangi jejak database dengan mengarsip data historis dan menghapus data usang. Footprint yang lebih kecil memangkas ukuran beban migrasi sehingga durasi konversi ke S/4HANA lebih pendek dan risikonya lebih rendah. SAP menempatkan DVM sebagai langkah persiapan sebelum konversi — memindahkan data kotor dan menganggur hanya memperberat dan memperlama proyek.

### Berapa lama data harus disimpan (retensi) menurut aturan Indonesia?
Untuk dokumen dasar pembukuan dan perpajakan, kewajibannya 10 tahun. Dasar hukumnya Pasal 28 ayat (11) UU KUP (termasuk dokumen yang dikelola elektronik) dan UU No. 8 Tahun 1997 tentang Dokumen Perusahaan Pasal 11, yang mewajibkan penyimpanan catatan dan bukti pembukuan selama 10 tahun sejak akhir tahun buku. Karena itu strategi data yang benar bukan "hapus data lama", melainkan atur retensi lewat archiving/ILM.

### Apakah data kotor bisa menggagalkan migrasi S/4HANA?
Data kotor jarang membuat proyek gagal total, tetapi rutin membuatnya membengkak biaya dan molor. Duplikasi master data, record yang tak konsisten, dan volume transaksi lama yang tak dikelola memperbesar load migrasi, memicu error saat konversi, dan menurunkan kualitas laporan di sistem baru. Prinsip clean core menempatkan kualitas dan governance data sebagai fondasi — merapikan data lebih dulu jauh lebih murah daripada memperbaikinya setelah go-live.

### Apa itu tiering data hot/warm/cold?
Data tiering adalah penempatan data pada lapisan penyimpanan sesuai frekuensi aksesnya, dan hot/warm/cold adalah istilah SAP resmi. Data hot yang misi-kritis disimpan in-memory di HANA untuk performa real-time; data warm yang lebih jarang dipakai ditaruh di tier lebih murah (mis. lewat SAP HANA Native Storage Extension) tapi tetap dikelola sebagai bagian database; data cold yang jarang diakses ditempatkan di penyimpanan termurah. Tiering menekan biaya memori tanpa membuang data.

---

## Data tables for the writer

### Tabel A — Lima pilar dimensi Data clean core (SAP resmi)
| Pilar (SAP) | Inti | Alat/konsep SAP terkait |
|---|---|---|
| Strategy | Rencana pengelolaan siklus hidup data end-to-end | Retention/residence policy, roadmap DVM |
| Governance | Kepemilikan, standar, kontrol data yang diformalkan | Data ownership, stewardship, approval |
| Quality | Akurasi, konsistensi, deduplikasi master data | Validation rules, quality checks, MDM |
| Volume efficiency | Jaga database ramping; simpan yang relevan | DVM, archiving, data tiering |
| Protection | Keamanan & kepatuhan data | Otorisasi, enkripsi, aturan retensi legal |

### Tabel B — Tiering data: Hot / Warm / Cold
| Aspek | Panas (Hot) | Hangat (Warm) | Dingin (Cold) |
|---|---|---|---|
| Akses | Sering, real-time | Sesekali | Jarang |
| Lokasi | In-memory HANA | Tier lebih murah, tetap terkelola HANA (mis. NSE) | Penyimpanan termurah / arsip |
| Biaya relatif | Tertinggi | Menengah | Terendah |
| Contoh | Transaksi & master data aktif | Data 1–2 tahun lalu untuk analisis sesekali | Data historis untuk kepatuhan |

### Tabel C — Archiving vs. Penghapusan (Destruction)
| Aspek | Archiving (ILM/DVM) | Penghapusan / Destruction |
|---|---|---|
| Nasib data | Dipindah ke ILM Store, tetap dapat dipanggil | Hilang permanen |
| Kepatuhan retensi | Ya — tunduk residence & retention | Baru boleh setelah retensi habis |
| Efek ke DB operatif | Footprint turun, performa naik | Footprint turun permanen |
| Kapan dipakai | Data wajib simpan (mis. 10 tahun) tapi jarang diakses | Data yang masa retensinya sudah lewat |

---

## Edge cases & nuance

- **"Data dimension" ada penamaan yang beredar.** SAP memakai baik "Data" sebagai nama dimensi maupun "clean core data" untuk lima pilarnya. Konsisten: dimensi = **Data**; pilar = strategy/governance/quality/volume efficiency/protection. Jangan mencampur urutan pilar seolah SAP mengurutkannya baku — urutan bervariasi antar dokumen SAP.
- **Public vs Private Edition memengaruhi kebebasan, bukan prinsip data.** Prinsip menjaga data bersih berlaku di semua edisi; alat seperti ILM/DVM tersedia lintas edisi. Artikel ini fokus data, jadi cukup sebut sekilas — detail per-edisi ada di artikel deployment terpisah (jangan tumpang tindih).
- **Archiving bukan selalu prioritas pertama.** Untuk sistem baru/kecil dengan data muda, effort archiving bisa lebih besar daripada manfaatnya. Governance & kualitas data (mencegah kotor sejak awal) hampir selalu lebih dulu bernilai daripada archiving agresif. Ini bahan kuat untuk H2 #5 (counter-conventional).
- **Over-archiving punya risiko.** Mengarsip terlalu agresif bisa mempersulit audit/pelaporan bila data yang masih relevan ikut terdorong keluar. Retention harus mengikuti kewajiban hukum (10 tahun) + kebutuhan bisnis, bukan sekadar menekan ukuran DB.
- **Hemat biaya HANA itu nyata tapi tak seragam.** Karena hot data ada di memori, mengecilkan volume hot memang menekan biaya — tetapi besarnya sangat bergantung profil data tiap perusahaan. Hindari angka tunggal.

---

## Flags (open factual risk)

- ⚠️ **Angka biaya HANA & % pengurangan footprint**: tidak ada angka universal yang dipublikasikan SAP. → **Rekomendasi**: jangan kutip persen/rupiah spesifik; bingkai sebagai *rule-of-thumb* atau "bergantung profil data". Boleh: "data hot berada di memori, tier termahal" (kualitatif, bersumber).
- ⚠️ **Tenggat ECC**: presisi penting. Mainstream **2027** berlaku untuk **EHP 6–8**; **EHP 0–5 sudah berakhir 2025**; extended hingga **2030**. → **Rekomendasi**: tulis "mainstream maintenance ECC berakhir 2027, extended hingga 2030" tanpa mengklaim berlaku seragam untuk semua EHP; opsional sebut EHP untuk presisi. Kebijakan "di luar 2030 via RISE" masih dapat berubah — sebut hati-hati atau lewati.
- ⚠️ **Lima pilar dimensi Data**: sudah terverifikasi ke SAP (strategy/governance/quality/volume efficiency/protection). Namun **urutan & label** bervariasi antar materi SAP. → **Rekomendasi**: sajikan sebagai "SAP memecah dimensi data menjadi lima pilar: …" tanpa mengklaim urutan resmi/baku.
- ⚠️ **Istilah "hot/warm/cold"**: resmi untuk *data temperature/tiering* HANA (NSE = tier warm). Tapi jangan menyamakan tiering dengan archiving — keduanya berbeda (tiering = lokasi penyimpanan berjenjang di dalam/terkait DB; archiving = keluarkan ke ILM Store). → **Rekomendasi**: bedakan jelas di tabel.
- ⚠️ **Dokumen sap.com (clean-core-data & 5 principles) menolak WebFetch (HTTP 403)**: isi diverifikasi via ringkasan hasil pencarian SAP-indexed + blog SAP Community pendamping yang konsisten, bukan dari render halaman penuh. → **Rekomendasi**: writer boleh menaut ke URL SAP tersebut; bila ingin kutipan kata-per-kata, verifikasi ulang saat akses membaik. Fakta inti (nama 5 dimensi & 5 pilar) aman digunakan.

---

## Definition snippet draft (48 words)

> **Dimensi data clean core** adalah salah satu dari lima dimensi resmi strategi clean core SAP — di samping Processes, Extensibility, Integrations, dan Operations — yang berfokus menjaga data tetap terkendali dan berkualitas tinggi. SAP memecahnya menjadi lima pilar: strategi, tata kelola, kualitas, efisiensi volume, dan proteksi data.
