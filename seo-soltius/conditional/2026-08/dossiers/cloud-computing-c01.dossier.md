---
brief_id: "cloud-computing-c01"
researcher_run_date: "2026-07-17"
sources_cited: 9
flags: 6
batch: "conditional/2026-08"
target_word_count: 900
---

# Research Dossier: Apa Itu Cloud Computing dan Jenis Layanannya untuk Bisnis

## TL;DR for the writer

- **Konflik tanggal NIST SELESAI: pakai September 2011.** PDF resminya diekstrak hari ini — sampul dan halaman properti tertulis "September 2011". Metadata "4/27/2012" adalah **baris tabel Errata** (perubahan editorial: koreksi nomor halaman dari "2" jadi "1"), **bukan** tanggal terbit. Konsisten dengan artikel Juli `saas-paas-iaas-c01`. Tidak ada lagi keraguan di sini.
- **Semua fakta NIST di brief terkonfirmasi dari sumber primer** (lihat kutipan verbatim di bawah): definisi, "five essential characteristics, three service models, and four deployment models", dan **community cloud memang salah satu dari empat model deployment**. Ini fondasi artikel dan aman 100%.
- **Uji "hosting bukan cloud" berpijak pada teks NIST, bukan opini** — ada footnote NIST yang menyebut metering "typically... on a pay-per-use or charge-per-use basis". Argumen ini sah dan bisa dikutip. Ini pembeda utama vs SERP.
- **Angka pasar: JANGAN pakai "USD 850 miliar" dari artikel Juli.** Tidak bisa diverifikasi dari sumber primer Gartner dan bertabrakan secara aritmetika dengan basis Gartner yang terbit resmi. Rekomendasi: **IDC — belanja cloud publik global menembus USD 1 triliun pada 2026, tumbuh ~21%**. Angka pasar ini **bonus, bukan wajib** — kuota ≥4 angka inline sudah terpenuhi dari NIST saja.
- **Penamaan produk SAP sedang bergeser** (S/4HANA Cloud → "SAP Cloud ERP"). Rekomendasi aman: tulis **"SAP S/4HANA Cloud"** tanpa embel-embel edition. Detail di Flags.

---

## Core facts (verified)

### A. NIST SP 800-145 — sumber primer, diekstrak langsung dari PDF resmi hari ini

> **Claim**: NIST SP 800-145 "The NIST Definition of Cloud Computing" terbit September 2011.
> **Number/specific**: Sampul dan halaman properti dokumen: "September 2011"; halaman properti: "7 pages (September 2011)". Penulis: Peter Mell & Timothy Grance (Computer Security Division, ITL, NIST). Halaman NIST CSRC mencatat riwayat: "09/28/11: SP 800-145 (Final)".
> **Source**: https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf (PDF diekstrak 2026-07-17) + https://csrc.nist.gov/pubs/sp/800/145/final
> **Confidence**: **high** — dua sumber primer NIST sepakat.

> **Claim**: Tanggal "April 27, 2012" BUKAN tanggal terbit — itu entri Errata.
> **Number/specific**: Tabel Errata di dokumen, verbatim: `4/27/2012 | Editorial | Corrected page number from "2" to "1" | 1`. Sifatnya editorial murni (koreksi nomor halaman), tidak mengubah isi standar.
> **Source**: PDF NIST SP 800-145, halaman iii (Errata).
> **Confidence**: **high** — **ini menutup konflik yang diangkat brief butir 1 dan tracker.** Writer pakai **September 2011**, sama dengan artikel Juli.

> **Claim**: Definisi baku cloud computing menurut NIST.
> **Number/specific**: Verbatim: *"Cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (e.g., networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction."*
> **Source**: NIST SP 800-145 §2, hlm. 2.
> **Confidence**: **high**

> **Claim**: Struktur model cloud NIST = 5 karakteristik esensial, 3 model layanan, 4 model deployment.
> **Number/specific**: Verbatim: *"This cloud model is composed of five essential characteristics, three service models, and four deployment models."* → menyumbang **3 angka inline sekaligus** (5, 3, 4) + tahun 2011 = **kuota ≥4 angka terpenuhi tanpa angka pasar apa pun**.
> **Source**: NIST SP 800-145 §2, hlm. 2.
> **Confidence**: **high**

> **Claim**: Rumusan 5 karakteristik esensial (istilah Inggris NIST + glosa Indonesia yang tidak menggeser makna).
> **Number/specific**: Parafrase aman di bawah — **jangan diringkas lebih jauh dari ini**, karena poin artikel adalah ketepatannya:
> 1. **On-demand self-service** — konsumen dapat menyediakan kapabilitas komputasi (mis. waktu server, penyimpanan jaringan) **secara sepihak dan otomatis, sesuai kebutuhan, tanpa memerlukan interaksi manusia dengan tiap penyedia layanan**. *(NIST: "unilaterally provision computing capabilities... as needed automatically without requiring human interaction with each service provider.")*
> 2. **Broad network access** — kapabilitas tersedia lewat jaringan dan diakses melalui mekanisme standar oleh beragam perangkat (ponsel, tablet, laptop, workstation).
> 3. **Resource pooling** — sumber daya penyedia **dikumpulkan untuk melayani banyak konsumen dengan model multi-tenant**, dialokasikan dan dialokasikan ulang secara dinamis sesuai permintaan; ada **location independence** (pelanggan umumnya tidak tahu lokasi persis sumber daya, tetapi **dapat menentukan lokasi pada tingkat abstraksi lebih tinggi, mis. negara, negara bagian, atau pusat data**).
> 4. **Rapid elasticity** — kapabilitas dapat ditambah dan dilepas secara elastis, dalam beberapa kasus otomatis, untuk **menskalakan cepat keluar dan ke dalam sesuai permintaan**; bagi konsumen kapasitasnya **sering tampak tak terbatas** dan bisa diambil berapa pun, kapan pun.
> 5. **Measured service** — sistem cloud **otomatis mengendalikan dan mengoptimalkan pemakaian sumber daya lewat kapabilitas metering**; pemakaian **dipantau, dikendalikan, dan dilaporkan** sehingga **transparan bagi penyedia maupun konsumen**.
> **Source**: NIST SP 800-145 §2, hlm. 2 (kutipan langsung dari PDF).
> **Confidence**: **high**

> **Claim**: NIST secara eksplisit mengaitkan measured service dengan penagihan berbasis pemakaian.
> **Number/specific**: Footnote 1 dokumen, verbatim: *"Typically this is done on a pay-per-use or charge-per-use basis."*
> **Source**: NIST SP 800-145, hlm. 2 (footnote 1).
> **Confidence**: **high** — **ini yang menjadikan uji "hosting flat bulanan bukan cloud" sebagai argumen berbasis standar, bukan opini.** Lihat bagian "Uji hosting vs cloud".

> **Claim**: Empat model deployment NIST, termasuk community cloud.
> **Number/specific**: NIST mencantumkan, berurutan: **Private cloud, Community cloud, Public cloud, Hybrid cloud**. Rumusan verbatim yang relevan:
> - **Private cloud**: *"provisioned for exclusive use by a single organization comprising multiple consumers (e.g., business units). It may be owned, managed, and operated by the organization, a third party, or some combination of them, and **it may exist on or off premises**."*
> - **Community cloud**: *"provisioned for exclusive use by a specific community of consumers from organizations that have shared concerns (e.g., mission, security requirements, policy, and compliance considerations)."*
> - **Public cloud**: *"provisioned for open use by the general public... **It exists on the premises of the cloud provider**."*
> - **Hybrid cloud**: *"a composition of two or more distinct cloud infrastructures (private, community, or public) that remain unique entities, but are bound together by standardized or proprietary technology that enables data and application portability (e.g., cloud bursting for load balancing between clouds)."*
> **Source**: NIST SP 800-145 §2 "Deployment Models", hlm. 3.
> **Confidence**: **high** — **brief butir 3 terkonfirmasi: community cloud memang model deployment keempat.** Aman disebut 1 kalimat.

### B. Fakta non-NIST

> **Claim**: RISE with SAP adalah penawaran SAP untuk pelanggan yang memodernisasi sistem on-premise ke cloud ERP.
> **Number/specific**: SAP official (learning.sap.com), verbatim: *"RISE with SAP is tailored to enable an easy transition to cloud ERP at a pace comfortable for the customer."* SAP memosisikannya selaras dengan **SAP S/4HANA Cloud Private Edition**, dapat ditempuh lewat skenario greenfield (new implementation) maupun brownfield (system conversion).
> **Source**: https://learning.sap.com/courses/exploring-sap-cloud-erp/differentiating-grow-and-rise-with-sap (diakses 2026-07-17)
> **Confidence**: **medium-high** — dari properti SAP resmi (learning.sap.com); `sap.com` sendiri 403 saat scrape, seperti dicatat brief. **Cukup untuk 1 kalimat vendor-neutral. Lihat Flags soal inklusi paket.**

> **Claim**: UU Pelindungan Data Pribadi Indonesia = UU No. 27 Tahun 2022.
> **Number/specific**: Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi; disahkan 17 Oktober 2022; terdiri atas 16 bab dan 76 pasal.
> **Source**: https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022 · JDIH Komdigi: https://jdih.komdigi.go.id/produk_hukum/view/id/832
> **Confidence**: **high** — penomoran brief benar. **Cukup 1 klausa, jangan dikembangkan** (porsi regulasi milik artikel keamanan kluster ERP). Tulis "Pelindungan" (bukan "Perlindungan") — itu ejaan resmi judul UU.

> **Claim**: IDC memproyeksikan belanja layanan cloud publik global menembus USD 1 triliun pada 2026.
> **Number/specific**: >USD 1 triliun pada 2026, tumbuh **~21% YoY**; sumber: *Worldwide Software and Public Cloud Services Spending Guide* (pembaruan dirilis sekitar Maret–April 2026). Kutipan analis IDC (Andrea Minonne, research manager): *"Public cloud spending will continue to grow as cloud migration remains central for agility, resilience, and efficiency."*
> **Source**: Halaman produk IDC: https://my.idc.com/getdoc.jsp?containerId=IDC_P33214 · dilaporkan konsisten oleh beberapa outlet independen: https://www.itnews.asia/news/public-cloud-spend-to-cross-a-trillion-in-2026-and-double-in-another-3-years-624218 · https://www.biztechreports.com/news-archive/2026/3/20/global-public-cloud-spending-to-surpass-1-trillion-in-2026-driven-by-paas-and-ai-platform-adoption-idc-march-23-2026
> **Confidence**: **medium-high** — siaran pers primer IDC tidak bisa diakses (403/paywall), tetapi **≥4 outlet independen melaporkan angka & atribusi yang identik**. Angkanya bulat dan tidak menuntut aritmetika. **Ini rekomendasi utama untuk H2 #3.**

> **Claim**: Gartner memproyeksikan belanja sovereign cloud IaaS global USD 80 miliar pada 2026.
> **Number/specific**: "Worldwide Sovereign Cloud IaaS Spending Will Total $80 Billion in 2026"; siaran pers bertanggal **9 Februari 2026**.
> **Source**: https://www.gartner.com/en/newsroom/press-releases/2026-02-09-gartner-says-worldwide-sovereign-cloud-iaas-spending-will-total-us-dollars-80-billion-in-2026
> **Confidence**: **medium-high** — judul siaran pers di domain gartner.com **menyatakan angkanya secara eksplisit**; badan halaman 403 untuk bot. **Aman dipakai di FAQ Q2 dengan atribusi "Gartner" + tahun**, sesuai saran brief.

### C. Fakta Soltius (pre-approved — `company_profile.md`, verified-by-default)

- Berdiri **1998**; anak perusahaan **PT Metrodata Electronics Tbk** (diakuisisi 2008); **200+ konsultan**; **120+ klien**.
- **SAP Platinum Certified Channel Partner**, lewat keanggotaan **United VARs**.
- **Best Cloud / Best RISE / Best Cloud Renewal Partner (SEA) — 2021**.
- Layanan **Migration** (di bawah Implementation) + solusi **Cloud**.
- ❌ Soltius **bukan penyedia layanan cloud** dan **bukan pembuat SAP** — mengimplementasikan, memigrasikan, mengintegrasikan, mendukung.

---

## Uji "hosting vs cloud" — argumen yang berpijak pada teks NIST (brief butir 4)

Brief meminta kepastian bahwa argumen ini bukan opini. **Terkonfirmasi — argumennya berdiri di atas dua rumusan NIST verbatim:**

| Praktik hosting biasa | Karakteristik NIST yang gagal dipenuhi | Dasar teks NIST (verbatim) |
|---|---|---|
| Kapasitas hanya bisa diubah lewat tiket/email ke penyedia, menunggu petugas | **On-demand self-service** | *"unilaterally provision computing capabilities... as needed automatically **without requiring human interaction with each service provider**"* |
| Tagihan flat per bulan, tanpa metering, tanpa laporan pemakaian | **Measured service** | *"automatically control and optimize resource use by leveraging a **metering capability**... Resource usage can be **monitored, controlled, and reported**"* + footnote 1: *"Typically this is done on a **pay-per-use or charge-per-use** basis."* |

**Catatan presisi untuk writer:** NIST mensyaratkan kelima karakteristik hadir bersama (definisi menyebut model cloud "is composed of five essential characteristics"). Jadi kalimat yang aman: sewa server yang harus di-order lewat tiket dan ditagih flat **gagal di uji on-demand self-service dan measured service — dan karena kelimanya harus terpenuhi sekaligus, layanan itu tidak memenuhi definisi cloud NIST.** Hindari klaim yang lebih keras dari itu (mis. "vendor berbohong") — teks NIST adalah taksonomi, bukan sertifikasi kepatuhan.

---

## Data table for the writer — model deployment (elemen terstruktur utama, H2 #2)

Versi terverifikasi. **Baris 1–3 berpijak langsung pada rumusan NIST; baris 4–6 adalah generalisasi praktik pasar, BUKAN NIST** (lihat ⚠️ Flag #4 — jangan atribusikan seluruh tabel ke NIST).

| Aspek | Public cloud | Private cloud | Hybrid cloud |
|---|---|---|---|
| Diperuntukkan bagi *(NIST)* | Pemakaian terbuka untuk publik umum; sumber daya dibagi multi-tenant | Satu organisasi saja (bisa mencakup banyak unit bisnis) | Gabungan dua infrastruktur berbeda yang tetap jadi entitas terpisah, terhubung agar data & aplikasi bisa berpindah |
| Lokasi infrastruktur *(NIST)* | Berada di premis penyedia cloud | **Bisa on-premise maupun off-premise** | Tersebar di dua lingkungan atau lebih |
| Dimiliki & dikelola *(NIST)* | Organisasi bisnis, akademik, atau pemerintah, atau kombinasinya | Organisasi itu sendiri, pihak ketiga, atau kombinasinya | Kombinasi, terikat teknologi standar atau proprietary |
| Kontrol & kustomisasi *(praktik)* | Paling rendah | Paling tinggi | Ditentukan per beban kerja |
| Profil biaya *(praktik)* | Bayar sesuai pemakaian (OpEx) | Investasi/komitmen lebih besar di muka | Campuran |
| Paling cocok saat *(praktik)* | Beban fluktuatif, butuh cepat | Kontrol/kepatuhan ketat, beban stabil | Sebagian data wajib tetap terkendali |

**Temuan yang memperkuat artikel (dan tidak dimiliki pesaing halaman-1):** baris "Lokasi infrastruktur" adalah koreksi miskonsepsi umum — **private cloud tidak identik dengan on-premise**. NIST eksplisit: private cloud *"may exist on or off premises"* dan boleh dioperasikan pihak ketiga. Banyak artikel ID menyamakan private cloud = server di kantor sendiri. Ini akurat, bersumber, dan orisinal. **Rekomendasi: pertahankan baris ini** — nilainya lebih tinggi daripada baris "kecepatan menambah kapasitas" di draf brief (yang murni generalisasi tanpa sumber). Jika ruang sempit, buang baris "Kecepatan menambah kapasitas", bukan baris lokasi.

**Setelah tabel** (masing-masing sesuai batas brief):
- **1 kalimat community cloud** — terverifikasi: model deployment keempat NIST, *"provisioned for exclusive use by a specific community of consumers from organizations that have shared concerns"* (mis. kesamaan misi, kebutuhan keamanan, kebijakan, atau kepatuhan). Jarang dipakai komersial di Indonesia. **Jangan dikembangkan.**
- **1 klausa UU PDP** — "kewajiban pelindungan data pribadi (UU No. 27 Tahun 2022) kerap mendorong ke arah private/hybrid". **Jangan melebar.**

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach | Facts to state accurately | Where in article | Soltius anchor |
|---|---|---|---|
| **SAP S/4HANA Cloud** | Wujud ERP cloud di lanskap SAP. Sebut nama penuh sekali. **Jangan** bedah public vs private edition. | H2 #4, 1 kalimat | — |
| **RISE with SAP** | Penawaran SAP untuk transisi ke cloud ERP bagi pelanggan yang memodernisasi sistem on-premise. **1 kalimat, vendor-neutral.** | H2 #4 + Kesimpulan | **CTA anchor** |
| Model deployment, 5 karakteristik, pay-as-you-go/OpEx, multi-tenant | Semua terverifikasi di atas | H2 #1–#2 | — |

**Positioning line untuk Kesimpulan (pilih SATU, jangan ditumpuk)** — self-mention #1:
- Opsi A (paling nyambung ke tema cloud): *"Sebagai mitra implementasi SAP yang diakui sebagai Best RISE dan Best Cloud Partner (2021), Soltius mendampingi perusahaan memindahkan sistem inti ke cloud lewat layanan Migration."*
- Opsi B (kredensial paling kuat): *"Sebagai SAP Platinum Partner melalui United VARs, Soltius mendampingi perpindahan sistem inti ke cloud, dari perencanaan hingga dukungan pasca go-live."*

⚠️ **Godaan terbesar di artikel bertema cloud**: menulis seolah Soltius menjual/menyediakan cloud. **Soltius memindahkan dan mendukung SAP DI ATAS cloud** — bukan penyedia cloud, bukan pembuat SAP. Maksimal **2 mention total** (Kesimpulan + soft CTA).

---

## Authoritative external sources (writer links 1–2 inline — addendum §4)

1. **NIST SP 800-145, "The NIST Definition of Cloud Computing" (September 2011)** — https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf — *backs*: definisi baku, 5 karakteristik esensial, 3 model layanan, 4 model deployment, rumusan public/private/hybrid/community, uji hosting-vs-cloud. **WAJIB, tautkan inline di H2 #1.** *(Alternatif landing page bila PDF terasa berat: https://csrc.nist.gov/pubs/sp/800/145/final)* — **Diverifikasi hari ini dengan mengekstrak PDF-nya langsung, bukan dari ringkasan pihak ketiga.**
2. **Pilih SATU untuk angka pasar di H2 #3:**
   - **[REKOMENDASI] IDC, *Worldwide Software and Public Cloud Services Spending Guide* (2026)** — https://my.idc.com/getdoc.jsp?containerId=IDC_P33214 — *backs*: belanja cloud publik global menembus USD 1 triliun pada 2026, tumbuh ~21%.
   - **[Alternatif, khusus FAQ Q2] Gartner (9 Feb 2026)** — https://www.gartner.com/en/newsroom/press-releases/2026-02-09-gartner-says-worldwide-sovereign-cloud-iaas-spending-will-total-us-dollars-80-billion-in-2026 — *backs*: sovereign cloud IaaS USD 80 miliar pada 2026.

> **Total tautan eksternal maksimal 2.** Jika Gartner sovereign cloud dipakai di FAQ Q2 **dan** IDC dipakai di H2 #3, cukup **tautkan salah satunya** dan sebut yang lain dengan atribusi teks saja ("Gartner memproyeksikan...") agar total tetap 2 tautan eksternal + 2 internal.

---

## FAQ Q&As (draft — 2–3 sesuai addendum; jawaban 30–60 kata, tiap jawaban 1 fakta)

### Apa bedanya cloud computing dengan hosting atau server biasa?
Ujilah dengan lima karakteristik esensial NIST SP 800-145. Sewa server yang kapasitasnya hanya bisa diubah lewat tiket dan ditagih flat per bulan gagal di dua karakteristik: on-demand self-service dan measured service. Itu hosting. Cloud menuntut penyediaan mandiri tanpa campur tangan penyedia dan pemakaian yang terukur.
*(45 kata · fakta: 5 karakteristik NIST SP 800-145; 2 karakteristik yang gagal)*

### Apakah data perusahaan aman di cloud?
Keamanan ditentukan oleh pilihan model deployment dan pembagian tanggung jawab, bukan oleh cloud itu sendiri; data dan identitas tetap kewajiban perusahaan. Kendali lokasi data kini jadi kriteria arus utama: Gartner memproyeksikan belanja sovereign cloud IaaS global mencapai USD 80 miliar pada 2026.
*(42 kata · fakta: Gartner, USD 80 miliar, 2026)* — **Batas brief dipatuhi: tidak membahas mitigasi/regulasi.**

### Apa saja jenis layanan cloud computing? *(OPSIONAL — hanya jika word count masih di bawah 950)*
NIST SP 800-145 menetapkan tiga model layanan: Software as a Service (SaaS), aplikasi siap pakai; Platform as a Service (PaaS), platform untuk membangun dan menjalankan aplikasi; dan Infrastructure as a Service (IaaS), infrastruktur dasar. Model layanan berbeda dari empat model deployment.
*(41 kata · fakta: 3 model layanan + 4 model deployment)* — **Tanpa bedah siapa-mengelola-apa** (milik `saas-paas-iaas-c01`).

---

## Definition snippet draft (40–60 kata)

> **Ringkasnya:** Cloud computing (komputasi awan) adalah model penyediaan sumber daya komputasi bersama, mencakup server, penyimpanan, jaringan, dan aplikasi, yang tersedia sesuai permintaan, bisa ditambah atau dikurangi dengan cepat, dan ditagih sesuai pemakaian. Standar NIST SP 800-145 merumuskannya lewat lima karakteristik esensial, tiga model layanan, dan empat model deployment.

**Cek**: 48 kata ✓ (40–60) · entitas jelas: cloud computing, komputasi awan, NIST SP 800-145 ✓ · **tanpa em-dash** (jatah em-dash ≤2 disimpan untuk body) ✓ · setiap klausa berpijak pada teks NIST: "tersedia sesuai permintaan" ← on-demand; "ditambah atau dikurangi dengan cepat" ← rapid elasticity/"rapidly provisioned and released"; "ditagih sesuai pemakaian" ← measured service + footnote pay-per-use ✓ · menyumbang 3 angka (lima/tiga/empat) ✓.

> **Ini satu-satunya tempat definisi boleh muncul.** Body/H2 dilarang menyatakan ulang isi snippet dengan kata lain (addendum §2 + §7).

---

## Edge cases & nuance

- **Private cloud ≠ on-premise.** NIST: *"may exist on or off premises"*, dan boleh dimiliki/dioperasikan pihak ketiga. Miskonsepsi paling umum di SERP ID. Sudah masuk tabel.
- **Public cloud ≠ "tidak aman" / private ≠ "aman".** NIST hanya mendefinisikan *untuk siapa* infrastruktur disediakan, bukan tingkat keamanannya. Jangan tulis tabel yang menyiratkan public = kurang aman.
- **Hybrid bukan "campur-campur begitu saja".** NIST mensyaratkan komponennya **tetap entitas unik** yang **terikat teknologi** yang memungkinkan **portabilitas data dan aplikasi**. Dua cloud terpisah tanpa keterikatan itu **bukan** hybrid — itu multicloud (istilah non-NIST; brief menyisakannya untuk artikel lain).
- **Location independence ada batasnya.** NIST: pelanggan umumnya tidak tahu lokasi persis, tetapi **boleh menentukan lokasi di tingkat abstraksi lebih tinggi (negara/pusat data)** — inilah dasar teknis diskusi kedaulatan data, dan alasan angka sovereign cloud relevan di FAQ Q2.
- **"Cloud lebih murah" tidak tanpa syarat.** Penghematan bersumber dari **rapid elasticity + measured service** (bayar sesuai pemakaian). Beban kerja datar 24/7 di data center yang sudah terbayar bisa lebih mahal di cloud, karena elastisitas tidak terpakai tetapi tetap dibayar. **Argumen ini logis dan berbasis mekanisme NIST — aman ditulis tanpa angka.** ⚠️ Jangan tempelkan angka penghematan/TCO apa pun: tidak ada yang terverifikasi di riset ini.
- **NIST adalah taksonomi, bukan sertifikasi.** Dokumennya sendiri menyebut tujuannya *"to serve as a means for broad comparisons"* dan *"not intended to prescribe or constrain any particular method of deployment"*. Nada yang tepat: NIST = alat uji/bahasa bersama, bukan badan yang melabeli vendor patuh/tidak.

---

## Flags (open factual risk)

1. ⚠️ **"USD 850 miliar pada 2026" (Gartner) — JANGAN DIPAKAI.** Artikel Juli `saas-paas-iaas-c01` memuatnya, tetapi angka itu **tidak bisa diverifikasi dari sumber primer Gartner** (siaran pers Gartner 403 untuk bot; angka hanya muncul di blog agregator berotoritas rendah seperti Software Strategies Blog dan sqmagazine — masuk kategori *reject as sources*). Ia juga **tidak konsisten secara aritmetika**: basis Gartner yang benar-benar terbit adalah **USD 723 miliar untuk 2025**, dan 723 × 1,213 ≈ **877**, bukan 850. (Agar 850 benar pada +21,3%, basis 2025 harus ≈701 — angka yang tidak pernah dipublikasikan.) → **Rekomendasi: pakai IDC. Jangan hitung turunan sendiri. Jangan mewarisi angka dari artikel Juli.** *(Catatan untuk editor: ini kesalahan yang sudah tayang di artikel Juli — layak diperbaiki terpisah, di luar lingkup artikel ini.)*
2. ⚠️ **IDC "APeJC ~USD 84 miliar" — label wilayahnya bertabrakan antar-sumber.** BizTechReports menulis "APeJC $84B"; iTnews Asia melabeli angka $84 miliar yang sama sebagai **"Asia Pacific and China"** — dua cakupan yang berbeda secara material. Siaran pers primer IDC tidak bisa diakses untuk memutuskan. → **Rekomendasi: JANGAN pakai angka APeJC**, meski brief sempat memprioritaskannya karena relevansi lokal. Pakai angka global IDC (USD 1 triliun, ~21%) yang dilaporkan konsisten oleh semua outlet. Kalau writer tetap ingin sudut regional, hedge tanpa angka ("Asia Pasifik termasuk kawasan dengan pertumbuhan tercepat") — **atau lewati saja**.
3. ⚠️ **Gartner "21,3% pada 2026"** — muncul di deskripsi dokumen Gartner dan beberapa sumber, tetapi **tidak berhasil dikonfirmasi dari badan siaran pers Gartner** (semua 403). Confidence medium. → **Kalau dipakai, atribusikan eksplisit ("Gartner") + tahun, dan JANGAN dipasangkan dengan angka absolut mana pun.** Lebih aman: pakai IDC (~21%) yang atribusinya konsisten.
4. ⚠️ **Tabel deployment mencampur NIST dan praktik pasar.** Baris tenancy/lokasi/kepemilikan berasal dari NIST; baris kontrol, profil biaya, dan "paling cocok saat" adalah **generalisasi praktik tanpa sumber**. → **Jangan menulis "menurut NIST" di atas seluruh tabel.** Atribusikan NIST hanya pada baris yang memang NIST, atau tulis pengantar netral ("Perbandingan praktisnya:").
5. ⚠️ **Penamaan produk SAP sedang bergeser.** Sejak sekitar 2025 SAP menyederhanakan nama pemasarannya: **"SAP Cloud ERP"** (dulu S/4HANA Cloud public edition) dan **"SAP Cloud ERP Private"** (dulu private edition), di bawah payung **SAP Business Suite**. Sumber SAP resmi menegaskan **"SAP S/4HANA Cloud Public/Private Edition" tetap merupakan nama produk teknis** dan masih dipakai aktif di help.sap.com serta learning.sap.com; keduanya beredar berdampingan. → **Rekomendasi: tulis "SAP S/4HANA Cloud" saja, tanpa sufiks edition** (sesuai brief, konsisten dengan artikel Juli dan halaman hub Soltius, dan menghindari ranjau nama edition sepenuhnya). Editor: **jangan "mengoreksi" ini jadi SAP Cloud ERP** — bukan salah. Sumber: https://learning.sap.com/products/s4hana-cloud · https://help.sap.com/docs/SAP_S4HANA_CLOUD
6. ⚠️ **Inklusi paket RISE with SAP — jangan dirinci.** Klaim populer bahwa RISE membundel S/4HANA + SAP BTP + infrastruktur hyperscaler + dukungan dalam **satu kontrak** banyak beredar, tetapi sebagian besar berasal dari **konsultan/reseller pihak ketiga** (erpresearch, saplicensingexperts, dll.) — bukan sumber SAP resmi, dan sebagian masuk kategori *competitor marketing pages* yang harus ditolak. Yang terkonfirmasi dari SAP resmi hanya positioning umumnya (lihat Core facts). → **Tulis 1 kalimat vendor-neutral saja** ("RISE with SAP adalah penawaran SAP untuk memindahkan sistem inti ke cloud ERP"). **Jangan sebut isi paket, harga, SLA, atau daftar komponen.** Brief pun hanya menjatah 1 kalimat.

### Tidak terverifikasi — hindari sepenuhnya
- Angka penghematan biaya / TCO / ROI cloud dalam bentuk apa pun (mis. "hemat 30%"). Tidak ada yang terverifikasi. Argumen "cloud tidak otomatis lebih murah" **cukup ditulis tanpa angka**.
- Volume pencarian / KD untuk "cloud computing" — **Ahrefs tidak terhubung** (server MCP `ahrefs` butuh otorisasi; tidak bisa dijalankan di sesi non-interaktif). Jangan mengutip angka volume.
- Statistik adopsi cloud khusus Indonesia (persentase perusahaan ID yang memakai cloud). Tidak ditemukan sumber otoritatif (BPS/Komdigi) dalam riset ini. **Jangan mengarang.**
- Tanggal/persentase pertumbuhan pasar apa pun di luar yang tercantum di dossier ini.

---

## Sizing note untuk writer (~900 kata)

**Kuota ≥4 angka inline sudah aman tanpa angka pasar sama sekali**: `5` karakteristik · `3` model layanan · `4` model deployment · `September 2011` (+ `1998`/`2021` di Kesimpulan). Angka pasar (IDC USD 1 triliun) adalah **bonus untuk H2 #3, bukan penopang**. Kalau ruang mepet, **buang angka pasarnya**, bukan presisi NIST-nya — otoritas artikel ini berasal dari NIST, dan itulah satu-satunya hal yang tidak dimiliki pesaing halaman-1.
