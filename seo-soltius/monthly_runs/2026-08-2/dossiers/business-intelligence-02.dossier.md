---
brief_id: "business-intelligence-02"
researcher_run_date: "2026-08-11"
sources_cited: 9
flags: 6
---

# Research Dossier: Keamanan dan Privasi Data di Business Intelligence — RLS, Masking, dan UU PDP

## TL;DR for the writer

- **Angle ini keamanan + kepatuhan, bukan "cara bikin dashboard".** Inti pesan: BI mendemokratisasi data → memperbesar permukaan risiko → butuh kontrol akses berlapis (row-level, object/column-level, masking, enkripsi, audit trail) yang sekaligus memenuhi UU PDP. Ajarkan konsep secara **vendor-neutral dulu**, baru kaitkan ke SAP (SAC/S4HANA/BTP). Ini pembeda tajam dari SERP yang isinya UU PDP generik atau daftar teknologi keamanan tanpa konteks BI.
- **UU PDP — angka yang HARUS presisi.** Ada dua tanggal berbeda yang sering tertukar: **disahkan DPR 20 September 2022**, lalu **diundangkan (resmi berlaku) 17 Oktober 2022** sebagai **UU No. 27 Tahun 2022**. Masa transisi penyesuaian **2 tahun** (Pasal 74) → tenggat sekitar **17 Oktober 2024** yang kini **sudah lewat**, jadi kewajiban sudah penuh berlaku, bukan "akan berlaku". Prinsip kunci untuk BI: **pengumpulan terbatas & spesifik + pemrosesan sesuai tujuan** (Pasal 16) = dasar hukum "jangan tarik semua kolom pribadi ke dashboard".
- **Kaitkan tiap kontrol teknis ke kewajiban hukumnya** — ini nilai jual artikel. RLS/object-level = menegakkan hak akses & pembatasan tujuan; masking = minimisasi data yang tampil; enkripsi = kewajiban mengamankan (Pasal 35–36); audit trail = akuntabilitas & bukti pemrosesan yang sah. Sebutkan **denda administratif maksimal 2% pendapatan tahunan (Pasal 57)** SEKALI, dengan atribusi hati-hati (lihat Flags) — jangan dramatisasi.
- **Fakta SAP yang aman dikutip (terverifikasi SAP official/community):** SAP Analytics Cloud punya **Data Access Control (DAC)** untuk membatasi baris per anggota dimensi + **role-based security** (level Role/Folder/Model); S/4HANA memakai **authorization objects & fields** via peran **PFCG**; enkripsi at-rest **AES-256** (HANA data volume) & in-transit **TLS 1.2 / AES-256-GCM**; **dynamic data masking** native di SAP HANA (masking di view, data asli tak berubah) + **SAP UI data protection masking** (masking field berbasis peran). Nama fitur ini benar per Agustus 2026 — tapi jangan sebut nomor rilis spesifik di badan artikel (lihat Flags).
- **H2 #5 (honest angle) adalah pembeda editorial:** over-restriction memicu **shadow reporting** (ekspor ke Excel tak terkontrol) yang JUSTRU lebih berisiko daripada dashboard yang diatur rapi. Prinsip "seaman perlu, seterbuka mungkin" + klasifikasi data + peran data owner. Ini insight yang hampir tak ada di kompetitor.
- **Soltius anchor (closing, ≤3 self-mention):** **Data and AI Consulting** + **AMS** pasca go-live; framing "mengimplementasikan SAC beserta model otorisasi/keamanannya, selaras kebutuhan kepatuhan". Kredibilitas asli: **Certified AMC & AMS Partner (PCoE di Indonesia)** dan **SAP Platinum Partner via United VARs**.

## Core facts (verified)

> **Claim**: UU Perlindungan Data Pribadi disahkan DPR pada 20 September 2022 dan resmi diundangkan pada 17 Oktober 2022 sebagai UU No. 27 Tahun 2022.
> **Number/specific**: Rapat paripurna DPR mengesahkan RUU PDP menjadi UU pada 20 September 2022; pemerintah mengundangkan (memberi nomor & Lembaran Negara) pada 17 Oktober 2022 → **UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi**. "Disahkan" (persetujuan DPR) dan "diundangkan" (berlaku resmi) adalah dua peristiwa hukum berbeda.
> **Source**: InfoPublik (infopublik.id) & KlikLegal "UU PDP Telah Diundangkan, Apa Bedanya dengan Disahkan?"; peraturan.bpk.go.id/Details/229798 (metadata UU 27/2022) (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: UU PDP memberi masa transisi penyesuaian selama dua tahun sejak diundangkan.
> **Number/specific**: **Pasal 74**: Pengendali Data Pribadi, Prosesor Data Pribadi, dan pihak terkait wajib menyesuaikan diri dengan ketentuan pemrosesan data pribadi paling lambat **2 (dua) tahun** sejak UU diundangkan → tenggat sekitar **17 Oktober 2024**. Per Agustus 2026, tenggat ini **sudah terlampaui**, sehingga kewajiban sudah berlaku penuh.
> **Source**: Teks UU No. 27/2022 Pasal 74; ikhtisar hukum (Prolegal, Bluepowertechnology) (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Prinsip pemrosesan UU PDP mewajibkan pengumpulan data pribadi secara terbatas & spesifik dan pemrosesan sesuai tujuan (minimisasi data + pembatasan tujuan).
> **Number/specific**: **Pasal 16** menetapkan prinsip a.l.: pengumpulan data pribadi dilakukan **secara terbatas dan spesifik**, sah secara hukum, dan transparan; **pemrosesan sesuai dengan tujuannya**; serta menjamin hak subjek data. Ini dasar hukum langsung untuk "jangan tarik seluruh kolom pribadi ke dashboard bila tak relevan dengan tujuan laporan".
> **Source**: UU No. 27/2022 Pasal 16; JDIH Kota Semarang; uupdp-info.id/pasal-16 (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: UU PDP memberikan hak-hak kepada subjek data, termasuk hak atas informasi, akses/salinan, koreksi, dan penghapusan data pribadinya.
> **Number/specific**: Rangkaian hak subjek data diatur pada **Pasal 5–15** (umumnya dirangkum sebagai sekitar sembilan hak), mencakup hak mengetahui dasar & tujuan pemrosesan serta jangka waktu penyimpanan, hak memperbarui/memperbaiki, hak mengakhiri pemrosesan/menghapus, dan hak atas ganti rugi. Dalam konteks analitik, ini berarti perusahaan harus mampu menemukan & menindak data seorang individu meski data itu sudah tersebar ke banyak dashboard.
> **Source**: UU No. 27/2022 Pasal 5–15; ikhtisar JDIH Kota Semarang; Klinik Hukumonline (diakses 2026-08-11)
> **Confidence**: high (keberadaan & isi pokok hak); medium untuk penyebutan angka pasti "9 hak" (lihat Flags)

> **Claim**: UU PDP mengatur sanksi administratif, termasuk denda administratif paling tinggi 2% dari pendapatan/penerimaan tahunan.
> **Number/specific**: **Pasal 57**: sanksi administratif berupa peringatan tertulis, penghentian sementara kegiatan pemrosesan, penghapusan/pemusnahan data pribadi, dan/atau **denda administratif paling tinggi 2% (dua persen) dari pendapatan tahunan atau penerimaan tahunan** atas variabel pelanggaran. Rincian pelaksanaannya bergantung pada peraturan pelaksana.
> **Source**: UU No. 27/2022 Pasal 57; uupdp-info.id/pasal-57; Hukumonline "Ancaman Sanksi Administratif Hingga Pidana" (diakses 2026-08-11)
> **Confidence**: high (angka & pasal); medium untuk penerapan operasional (bergantung PP pelaksana & lembaga pengawas — lihat Flags)

> **Claim**: Data yang benar-benar teranonimisasi (irreversible) umumnya jatuh di luar cakupan UU PDP, sedangkan data yang dipseudonimisasi tetap tergolong data pribadi.
> **Number/specific**: Anonimisasi = mengubah data secara **irreversible** sehingga individu tak dapat diidentifikasi lagi → tak lagi "data pribadi". Pseudonimisasi = masih ada kunci/pemetaan yang memungkinkan **re-identifikasi** → tetap data pribadi dan tetap tunduk seluruh kewajiban UU PDP. Implikasi BI: masking/pseudonimisasi di dashboard **mengurangi** risiko tapi **tidak menghapus** kewajiban hukum.
> **Source**: Interpretasi hukum selaras praktik GDPR, dirangkum sumber legal-tech Indonesia (Bitlion "Enkripsi, Pseudonimisasi, dan Anonimisasi"); definisi data pribadi Pasal 1 UU 27/2022 (diakses 2026-08-11)
> **Confidence**: medium (UU PDP tidak memuat pasal eksplisit yang men-exempt data anonim seperti resital GDPR; ini interpretasi — lihat Flags)

> **Claim**: SAP Analytics Cloud (SAC) menyediakan Data Access Control (DAC) untuk membatasi akses data ke nilai/anggota dimensi tertentu (kontrol setara row-level).
> **Number/specific**: DAC membatasi akses ke nilai individual dalam sebuah model bagi pengguna tertentu; harus **diaktifkan per model** lalu didefinisikan per dimensi (mis. hanya menampilkan Region/Sales Org/Segment tertentu ke pengguna tertentu). Ini mekanisme row-level security khas SAC.
> **Source**: SAP Help Portal "Set Up Data Access Control – SAP Analytics Cloud" (help.sap.com); SAP Community "Data Access Control in SAP Analytics Cloud" (diakses 2026-08-11)
> **Confidence**: high (nama fitur "Data Access Control" & mekanisme); catatan versi lihat Flags

> **Claim**: SAP Analytics Cloud memakai model keamanan berbasis peran (role-based) dengan beberapa lapis kontrol.
> **Number/specific**: SAC menerapkan role-based security dengan tiga lapis: **Role-level, Folder-level, dan Model-level**. Admin membuat peran yang membuka konten tertentu bagi grup pengguna sambil membatasi data sensitif. Catatan penting: peran dengan hak **Full Data Access** (mis. BI Admin) dapat melihat seluruh data meski DAC diset — jadi desain peran harus hati-hati (prinsip least-privilege).
> **Source**: SAP Community "SAP Analytics Cloud – Role Based Security for SAC Content Models"; nextlytics "SAC authorization concept" (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: SAP S/4HANA menegakkan otorisasi lewat authorization objects & authorization fields yang dikelola dalam peran (PFCG).
> **Number/specific**: Authorization object mengelompokkan hingga sepuluh authorization field dan mengamankan aksi/objek tertentu; peran dibuat/dirawat via transaksi **PFCG** (Profile Generator), dengan hierarki composite role → single role → profile → authorization object → field/value. Ini fondasi object-/field-level security di dunia SAP (mis. membatasi siapa boleh melihat field/objek data tertentu).
> **Source**: SAP Learning "Exploring the Authorization Concept for SAP S/4HANA"; keyusertraining.com "SAP Roles and Authorizations (PFCG, SU01, SU53)" (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: SAP HANA mengenkripsi data at-rest dengan algoritma AES-256.
> **Number/specific**: HANA **data volume encryption** mengenkripsi seluruh page di area data pada disk menggunakan **AES-256-CBC**; log volume & backup juga dapat dienkripsi; kunci (root key) disimpan di Secure Storage in File System (SSFS). Proses transparan terhadap aplikasi/pengguna.
> **Source**: SAP Learning "Describing Encryption (SAP HANA)"; SAP Help "Data and Log Volume Encryption"; SAP Community "Securing RISE with SAP" (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Koneksi ke sistem SAP diamankan in-transit dengan TLS.
> **Number/specific**: Trafik HTTP ke sistem SAP dilindungi **TLS 1.2** dengan cipher **AES-256-GCM**; koneksi klien "tebal" (SAP GUI) via protokol DIAG diamankan Secure Network Communication (SNC) dengan AES-256-GCM. Aman disebut sebagai "enkripsi in-transit standar (TLS)".
> **Source**: SAP Community "Securing RISE with SAP"; SAP KBA 3291122 (TLS 1.2 AEAD ciphers untuk HANA) (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: SAP HANA menyediakan dynamic data masking native yang menyamarkan data sensitif pada view tanpa mengubah data asli.
> **Number/specific**: Dynamic data masking native hadir sejak **SAP HANA 2.0 SPS 01**: masking dikonfigurasi di **spesifikasi view**; data di baris/kolom **tidak diubah** — hanya tampilannya disamarkan, sehingga kalkulasi tetap berjalan. Berfungsi sebagai lapisan kontrol akses tambahan agar power-user dengan akses view luas tetap tak melihat nilai sensitif (mis. NIK, gaji).
> **Source**: SAP Community "Protect your sensitive data using SAP HANA's new dynamic data masking" (diakses 2026-08-11)
> **Confidence**: high (konsep & perilaku); catatan versi lihat Flags

> **Claim**: SAP menyediakan UI data protection masking untuk menyamarkan field sensitif di layar berbasis peran.
> **Number/specific**: **SAP UI data protection masking** (UI Masking) menyamarkan field sensitif di **SAP GUI/Web GUI/Fiori** saat query: pengguna berwenang melihat nilai asli, pengguna tak berwenang melihat nilai tersamar — dikonfigurasi berbasis **peran PFCG**. Ini melengkapi masking di lapisan database.
> **Source**: SAP Community "Dynamic Field Masking of SAP Applications"; ikhtisar teknis (diakses 2026-08-11)
> **Confidence**: high (keberadaan & mekanisme); medium untuk penamaan produk persis (lihat Flags)

> **Claim**: Row-level security (RLS) membatasi baris yang bisa dilihat seorang pengguna berdasarkan atribut, sedangkan object/column-level security membatasi kolom/objek.
> **Number/specific**: RLS = filter baris per identitas/atribut (mis. manajer wilayah Jawa hanya melihat baris data wilayah Jawa). Object/column-level security = menyembunyikan kolom sensitif tertentu (mis. kolom gaji/NIK) dari peran tanpa kebutuhan bisnis. Keduanya bekerja di lapisan model/dataset, bukan sekadar di visual dashboard.
> **Source**: Prinsip umum keamanan BI, dikonfirmasi mekanisme SAC DAC (baris) & S/4HANA authorization objects (objek/field) di atas (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Audit trail dan prinsip least-privilege adalah kontrol dasar tata kelola akses yang relevan untuk kepatuhan.
> **Number/specific**: Least-privilege = beri hak seminimal yang dibutuhkan peran; audit trail = catatan "siapa mengakses data apa, kapan" yang menjadi bukti akuntabilitas pemrosesan yang sah. Dalam SAP, kombinasi peran PFCG + logging (mis. read-access logging/security audit log di lapisan platform) menopang kebutuhan ini. (Sebut sebagai praktik & konsep; jangan mengklaim fitur log spesifik tanpa sumber — lihat Flags.)
> **Source**: Prinsip keamanan informasi umum; konteks otorisasi SAP di atas (diakses 2026-08-11)
> **Confidence**: high (prinsip); medium (nama fitur log spesifik SAP)

> **Claim**: Soltius memiliki kredensial layanan yang relevan untuk mengimplementasikan BI beserta model keamanan & tata kelola pasca go-live.
> **Number/specific**: Soltius menyediakan **Data and AI Consulting** dan **Application Management Services (AMS)**; berstatus **SAP Platinum Certified Partner** (via keanggotaan United VARs) dan **Certified AMC & AMS Partner** dengan **Partner Center of Expertise (PCoE) di Indonesia**; bagian Metrodata Group (sejak 2008), berdiri 1998; 200+ konsultan.
> **Source**: knowledge_base/company_profile.md (fakta Soltius pra-verifikasi)
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Konsep keamanan BI vendor-neutral: 3 lapis (koneksi/sumber → model/dataset → dashboard); RLS; object/column-level; masking; enkripsi; audit trail; least-privilege | Definisi tiap kontrol; di mana ia hidup (idealnya di model/warehouse, bukan hanya visual) | H2 #1, #2, #4 (edukasi dulu) | — |
| **SAP Analytics Cloud (SAC)** — Data Access Control (row-level per dimensi) + role-based security (Role/Folder/Model) | DAC diaktifkan per model; peran Full Data Access bisa menembus DAC → desain peran hati-hati | H2 #2 & #4 | Data and AI Consulting |
| **S/4HANA** — authorization objects & fields via peran PFCG (object/field-level) | Object mengelompokkan ≤10 field; hierarki composite→single→profile→object→value | H2 #2 (contoh object-level) | — |
| **SAP HANA / platform** — enkripsi AES-256 at-rest, TLS 1.2 in-transit; dynamic data masking; SAP UI data protection masking | AES-256-CBC (data volume), TLS 1.2/AES-256-GCM; masking di view tak ubah data asli; UI masking berbasis peran | H2 #4 (kontrol teknis) | — |
| **UU PDP No. 27/2022** (konteks hukum) | Disahkan 20 Sep 2022, diundangkan 17 Okt 2022; Pasal 16 (minimisasi/tujuan), Pasal 5–15 (hak), Pasal 57 (sanksi 2%), Pasal 74 (transisi 2 th) | H2 #3 | — |
| **Model "implementasi + tata kelola pasca go-live"** | Desain model otorisasi sejak awal + AMS untuk menjaga kepatuhan berkelanjutan | Closing + 1 aside di H2 #4 | **Data and AI Consulting + AMS** |

Reminder: Soltius **mengimplementasikan/merancang/mendukung** SAC & platform SAP beserta model keamanannya — **bukan membuat** softwarenya. Maks 2–3 self-mention (ideal: 1 aside di H2 #4 + 1 closing).

**Anchor phrasing (closing)**: "Keamanan BI bukan fitur yang dipasang belakangan, melainkan model yang dirancang bersama sistemnya. Melalui **Data and AI Consulting**, Soltius mengimplementasikan solusi seperti SAP Analytics Cloud lengkap dengan model otorisasi, masking, dan kontrol aksesnya — selaras kebutuhan kepatuhan UU PDP — lalu menjaganya tetap patuh lewat **Application Management Services (AMS)** pasca go-live." (Kredibilitas: pilih SATU — SAP Platinum Partner via United VARs, atau Certified AMS Partner/PCoE di Indonesia. Jangan menumpuk.)

**Aside mid-article (opsional, 1 kalimat, di H2 #4)**: "Di lapangan, model otorisasi paling murah dan paling aman ketika dirancang bersama tim keamanan sejak awal implementasi — bukan ditambal setelah dashboard terlanjur dibagikan ke seluruh organisasi."

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (peraturan.bpk.go.id / JDIH)** — https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022 — *what it backs*: status, tanggal, prinsip (Pasal 16), hak subjek data (Pasal 5–15), sanksi (Pasal 57), masa transisi (Pasal 74). Sumber hukum resmi = otoritas tertinggi untuk konteks UU PDP.
2. **SAP Help Portal — "Set Up Data Access Control – SAP Analytics Cloud"** — https://help.sap.com/docs/SAP_ANALYTICS_CLOUD — *what it backs*: mekanisme row-level Data Access Control di SAC (SAP official).
3. **SAP Community — "Securing RISE with SAP"** — https://community.sap.com/t5/technology-blog-posts-by-sap/securing-rise-with-sap/ba-p/13519419 — *what it backs*: enkripsi AES-256 at-rest & TLS 1.2/AES-256-GCM in-transit pada sistem SAP.
4. **SAP Learning — "Describing Encryption (SAP HANA)"** — https://learning.sap.com/courses/sap-hana-installation-and-administration/describing-encryption — *what it backs*: HANA data volume encryption AES-256-CBC.

Priority terpenuhi: sumber hukum pemerintah (UU PDP) + SAP official (help.sap.com / learning.sap.com / community SAP). Writer sebaiknya menautkan **minimal 2**: **UU PDP (peraturan.bpk.go.id)** untuk sisi hukum + **SAP Help (Data Access Control)** untuk sisi teknis. Hindari menautkan blog vendor keamanan pihak ketiga yang bias.

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apa itu row-level security dalam BI?
Row-level security (RLS) adalah kontrol yang membatasi **baris data** yang boleh dilihat seorang pengguna berdasarkan identitas atau atributnya — misalnya manajer wilayah Jawa hanya melihat baris transaksi wilayah Jawa, meski semuanya berada di satu dashboard. Di SAP Analytics Cloud, mekanisme ini disebut Data Access Control, yang diaktifkan per model lalu didefinisikan per dimensi. RLS bekerja di lapisan model/dataset, bukan sekadar menyembunyikan visual.

### Apa beda row-level dan object-level security?
Row-level security membatasi **baris** (siapa melihat data mana), sedangkan object- atau column-level security membatasi **kolom atau objek** (siapa boleh melihat field apa). Contoh: RLS membuat tiap cabang hanya melihat penjualannya sendiri; object-level security menyembunyikan kolom gaji atau NIK dari peran yang tak berkepentingan. Di dunia SAP, kontrol objek/field ini diwujudkan lewat authorization objects yang dikelola dalam peran (PFCG). Keduanya sebaiknya dipakai bersama.

### Bagaimana membuat dashboard patuh UU PDP?
Mulai dari prinsip Pasal 16 UU No. 27/2022: kumpulkan data **terbatas dan spesifik** serta proses **sesuai tujuan** — jadi jangan tarik seluruh kolom pribadi bila laporan tak membutuhkannya. Terapkan RLS dan object-level security agar akses sesuai peran, masking untuk field sensitif, enkripsi at-rest dan in-transit, serta audit trail untuk akuntabilitas. Pastikan juga hak subjek data (akses, koreksi, penghapusan) tetap dapat dipenuhi meski data tersebar ke banyak dashboard.

### Apakah data yang sudah dianonimkan masih diatur UU PDP?
Bergantung pada apakah anonimisasinya benar-benar **tidak dapat dibalik**. Data yang teranonimisasi secara irreversible—sehingga individu tak mungkin diidentifikasi lagi—umumnya jatuh di luar cakupan UU PDP. Sebaliknya, data yang hanya **dipseudonimisasi** atau di-masking tetapi masih punya kunci untuk re-identifikasi tetap tergolong data pribadi dan tunduk penuh pada kewajiban UU PDP. Jadi masking di dashboard mengurangi risiko, tetapi belum tentu menghapus kewajiban hukum.

### Bagaimana membatasi akses per divisi tanpa membuat banyak salinan dashboard?
Gunakan satu dashboard dengan **row-level security**, bukan menggandakan laporan per divisi. Dengan Data Access Control di SAP Analytics Cloud, satu model yang sama otomatis menyaring baris sesuai peran atau tim penggunanya, sehingga tiap divisi hanya melihat datanya sendiri. Pendekatan ini lebih aman dan lebih mudah dirawat: satu sumber, satu definisi metrik, tanpa risiko salinan usang yang tercecer. Hati-hati pada peran ber-akses penuh yang bisa menembus filter.

### Apa yang harus dicatat dalam audit trail BI?
Minimal: **siapa** mengakses **data atau laporan apa**, **kapan**, dan tindakan apa yang dilakukan (lihat, ekspor, ubah izin). Audit trail menjadi bukti akuntabilitas bahwa pemrosesan berjalan sesuai dasar dan tujuan yang sah—selaras prinsip UU PDP—dan alat deteksi bila ada akses tak wajar. Terapkan bersama prinsip least-privilege (hak seminimal yang diperlukan) agar log tetap bermakna dan permukaan risiko kecil sejak awal.

## Data tables for the writer

### Lapisan kontrol keamanan data di BI (dari sumber ke dashboard)
| Lapisan | Risiko utama | Kontrol yang diterapkan | Padanan SAP |
|---|---|---|---|
| Koneksi / sumber data | Kredensial bocor, akses tak terenkripsi | Enkripsi in-transit (TLS), SSO + MFA, secure connection | TLS 1.2 / SNC; identitas via SSO/IdP di SAP BTP |
| Penyimpanan / model / dataset | Kolom sensitif terekspos, baris lintas-wilayah bocor | Enkripsi at-rest, RLS, object/column-level security, masking | AES-256 (HANA data volume); Data Access Control (SAC); authorization objects (S/4HANA); dynamic data masking |
| Dashboard / penyajian | Over-sharing, ekspor tak terkontrol | Otorisasi berbasis peran, batasi ekspor, audit trail | Role/Folder/Model security (SAC); UI data protection masking; logging |

### RLS vs Object/Column-level security
| Aspek | Row-Level Security (RLS) | Object/Column-Level Security |
|---|---|---|
| Yang dibatasi | Baris data (record) | Kolom/field atau objek |
| Contoh | Cabang hanya lihat penjualannya | Sembunyikan kolom gaji/NIK |
| Berbasis | Identitas/atribut/peran/tim | Peran & kebutuhan bisnis |
| Padanan SAP | Data Access Control (SAC) | Authorization objects/fields (PFCG); masking |
| Tujuan UU PDP | Pembatasan tujuan & akses | Minimisasi data yang tampil |

### Kontrol teknis → kewajiban UU PDP
| Kontrol teknis | Fungsi | Kewajiban UU PDP yang ditunjang |
|---|---|---|
| RLS & object-level security | Akses sesuai peran | Pembatasan tujuan (Pasal 16); hak akses subjek data |
| Data masking / pseudonimisasi | Sembunyikan field sensitif | Minimisasi data (Pasal 16); pengurangan risiko |
| Enkripsi at-rest & in-transit | Amankan data tersimpan & transit | Kewajiban mengamankan data pribadi |
| Audit trail + least-privilege | Akuntabilitas & jejak akses | Pembuktian pemrosesan yang sah; akuntabilitas |
| Retensi & penghapusan | Hapus data usai tujuan tercapai | Hak penghapusan; batas retensi |

## Edge cases & nuance

- **Keamanan hidup di model, bukan di visual.** Kesalahan umum: mengandalkan "menyembunyikan widget" di level dashboard. Bila kontrol tidak diterapkan di lapisan model/dataset (RLS/DAC/authorization), pengguna sering masih bisa menembusnya lewat ekspor, query, atau salinan. Tekankan: amankan sedini mungkin — idealnya sudah di lapisan warehouse (lihat internal link Data Warehouse Solutions).
- **Peran "super-admin" bisa menembus RLS.** Di SAC, peran dengan Full Data Access melihat semua data meski DAC diset. Ini jebakan klasik: kontrol baris terpasang tapi terlalu banyak orang punya peran istimewa. Least-privilege + review peran berkala wajib.
- **Anonimisasi jarang benar-benar anonim.** Data yang "disamarkan" sering masih bisa di-re-identifikasi lewat kombinasi atribut (mis. tanggal lahir + kode pos + jenis kelamin). Jangan janjikan "anonim = bebas UU PDP" tanpa uji re-identifikasi yang serius; masking di dashboard umumnya pseudonimisasi, bukan anonimisasi.
- **Over-restriction memicu shadow reporting.** Bila BI terlalu dikunci, pengguna mengekspor ke Excel dan mengedarkannya via email/chat — data pribadi justru keluar dari sistem yang terkontrol dan teraudit. Prinsip "seaman perlu, seterbuka mungkin": beri akses yang memadai + kelas data yang jelas, ketimbang blokir total. Ini inti H2 #5.
- **Kepatuhan ≠ sekali setel.** Peran berubah, orang pindah divisi, laporan baru muncul. Tanpa tata kelola berjalan (review akses, audit, pembaruan model otorisasi), konfigurasi aman hari ini bisa bocor enam bulan lagi. Ini pintu masuk natural untuk AMS pasca go-live.
- **UU PDP masih menunggu kelengkapan aturan pelaksana & lembaga pengawas.** Prinsip & kewajiban pokok sudah berlaku, tetapi detail penegakan (mis. tata cara denda) bersandar pada peraturan pelaksana dan lembaga pengawas PDP yang pembentukannya berproses. Bingkai kepatuhan sebagai kewajiban yang sudah aktif, tanpa mengklaim mekanisme penegakan yang belum pasti (lihat Flags).

## Flags (open factual risk)

- ⚠️ **Dua tanggal UU PDP sering tertukar.** "Disahkan 20 September 2022" (persetujuan DPR) ≠ "diundangkan 17 Oktober 2022" (berlaku resmi sebagai UU 27/2022). → Rekomendasi: writer sebut keduanya dengan benar, atau cukup "UU No. 27 Tahun 2022 yang berlaku sejak 17 Oktober 2022". JANGAN tulis "berlaku 20 September 2022".
- ⚠️ **Masa transisi (Pasal 74) SUDAH lewat.** Tenggat penyesuaian 2 tahun berakhir ~17 Oktober 2024. → Rekomendasi: tulis kewajiban sebagai "sudah berlaku penuh", bukan "akan berlaku" atau "masih ada masa transisi". Menyebut masa transisi sebagai masih berjalan = salah per Agustus 2026.
- ⚠️ **Sanksi 2% (Pasal 57).** Angka & pasal benar, tetapi penerapan operasional bersandar pada peraturan pelaksana dan lembaga pengawas yang masih berkembang. → Rekomendasi: sebut SEKALI, atribusikan "Pasal 57 UU PDP", framing "denda administratif hingga 2% pendapatan tahunan"; jangan dramatisasi atau menjanjikan skenario penegakan spesifik.
- ⚠️ **"Anonim = di luar UU PDP".** Ini interpretasi selaras GDPR, bukan pasal eksplisit di UU PDP. → Rekomendasi: frasa hati-hati — "data yang benar-benar teranonimisasi secara irreversible umumnya dianggap di luar cakupan"; tegaskan pseudonimisasi/masking TETAP data pribadi. Jangan sajikan sebagai kepastian hukum absolut.
- ⚠️ **Versi/rilis fitur SAP.** DAC di SAC untuk konten model diperkenalkan pada rilis tertentu (Wave 2023.15); dynamic data masking native sejak HANA 2.0 SPS 01. → Rekomendasi: JANGAN sebut nomor rilis/wave di badan artikel (mudah usang & keliru); cukup "SAP Analytics Cloud mendukung Data Access Control (row-level)" dan "SAP HANA mendukung dynamic data masking". Nama fitur benar per Agustus 2026.
- ⚠️ **Nama fitur masking & logging.** "SAP UI data protection masking"/"UI Masking" dan mekanisme audit log (read-access logging/security audit log) benar sebagai kategori, tetapi penamaan & cakupan produk SAP berubah. → Rekomendasi: ajarkan sebagai kapabilitas ("masking field berbasis peran", "audit trail") tanpa mengunci pada nama produk spesifik; jangan mengklaim fitur log tertentu tanpa sumber SAP eksplisit. Angka "9 hak subjek data" juga sebaiknya ditulis "sejumlah hak, antara lain..." karena penghitungan bervariasi antar-ikhtisar.

## Definition snippet draft (54 words)

> **Keamanan data di Business Intelligence** adalah kumpulan kontrol yang memastikan hanya pihak berwenang dapat melihat data tertentu—melalui row-level security, object-level security, masking, enkripsi, dan audit trail—sekaligus memenuhi kewajiban perlindungan data pribadi seperti UU No. 27 Tahun 2022 (UU PDP). Kontrol ini idealnya diterapkan di lapisan model dan sumber data, bukan sekadar di dashboard.
