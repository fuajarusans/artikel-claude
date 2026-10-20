---
brief_id: "data-warehouse-solutions-05"
researcher_run_date: "2026-08-11"
sources_cited: 9
flags: 6
---

# Research Dossier: Siapa yang Menjalankan Data Warehouse Anda? Tim vs Partner

## TL;DR for the writer

- **Angle ini organisasi, bukan produk.** Fokusnya: peran apa yang dibutuhkan untuk menjalankan sebuah data warehouse, dan bagaimana memutuskan **build (bangun tim sendiri) vs buy (managed/SaaS) vs managed services (partner yang mengelola)** — plus opsi hybrid "buy + build with a partner". Ajarkan peran & kerangka keputusan secara vendor-neutral; sentuh SAP hanya sebagai konteks platform (Datasphere/BW/4HANA/HANA Cloud).
- **Empat/lima peran inti yang bisa dipakai sebagai tulang punggung:** data engineer (pipeline & infrastruktur — "memasukkan data ke warehouse"), analytics engineer (memodelkan data jadi metrik tepercaya — "membuat data berguna setelah masuk"), data steward (kualitas & tata kelola per DAMA), data/business owner (akuntabilitas bisnis, menetapkan aturan), dan platform/product owner (roadmap, biaya, keamanan platform). Perbedaan data engineer vs analytics engineer aman dijadikan H2 pertanyaan.
- **"Day-2 operations" adalah inti pesan biaya tersembunyi.** Model Day 0 (desain) / Day 1 (deploy) / Day 2 (operasi) sudah standar: Day 0 & Day 1 sekali jalan (time-bounded); **Day 2 tidak pernah berhenti** — berjalan sepanjang umur platform. Membangun = CapEx sekali; memelihara = OpEx terus-menerus (monitoring, patching, scaling, permintaan baru, plus risiko *bus factor*/turnover).
- **Realitas talenta Indonesia mendukung sudut ini — dan HARUS bersumber.** Kominfo menyebut Indonesia butuh **9 juta talenta digital sepanjang 2015–2030** (mencakup data science) — setara ~600 ribu/tahun. Ini alasan kuat mengapa "build tim sendiri" tak selalu realistis untuk semua perusahaan. Jangan mengarang angka gaji atau ukuran tim spesifik Indonesia — tidak ada sumber Indonesia yang andal; angka gaji AS di sumber build-vs-buy TIDAK boleh dipakai untuk Indonesia (lihat Flags).
- **Soltius anchor (closing, ≤3 self-mention):** **Application Management Services (AMS)** + **Data and AI Consulting** = model "buy + build with a partner". Framing: Soltius mendampingi merancang & menjalankan platform sekaligus **membangun kapabilitas tim internal (transfer knowledge)** — bukan outsourcing yang mengunci klien. Soltius adalah *Certified AMC & AMS Partner (PCoE di Indonesia)* — ini kredibilitas asli untuk klaim day-2.

## Core facts (verified)

> **Claim**: Data engineer bertugas membangun & memelihara infrastruktur/pipeline yang mengumpulkan, menyimpan, dan memindahkan data mentah ke dalam warehouse.
> **Number/specific**: "Data engineers get data into the warehouse" — membangun pipeline, mendesain storage, mengintegrasikan sumber; tools khas Python, Spark, layanan cloud (mis. AWS). Duduk lebih dekat ke sisi engineering/infrastruktur.
> **Source**: Fivetran, "Analytics engineer or data engineer: who's right for the job?" — fivetran.com/blog/analytics-engineer-or-data-engineer-whos-right-for-the-job; ThoughtSpot, "Analytics Engineer vs. Data Engineer" (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Analytics engineer memodelkan & mentransformasi data di dalam warehouse menjadi dataset/metrik yang bersih, tepercaya, dan terdokumentasi — "membuat data berguna setelah ia masuk".
> **Number/specific**: Peran hybrid yang menerapkan disiplin software engineering (version control, automated testing, modular code) ke lapisan analitik; tools khas SQL, dbt, dan warehouse cloud (mis. Snowflake). Duduk lebih dekat ke bisnis.
> **Source**: Fivetran / ThoughtSpot (ibid.); dbt Labs — "What is analytics engineering?" (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Peran "analytics engineer" muncul dan dipopulerkan oleh dbt Labs, seiring warehouse cloud & pola ELT.
> **Number/specific**: dbt (data build tool) adalah alat transformasi data terkemuka, dan perusahaan pembuatnya (dbt Labs) yang "menciptakan" peran analytics engineer. Peran ini timbul karena di era cloud warehouse, transformasi bergeser ke dalam warehouse (ELT) sehingga butuh peran khusus di lapisan pemodelan.
> **Source**: dbt Labs; Fivetran (ibid.) — "the company that created the role of the analytics engineer" (diakses 2026-08-11)
> **Confidence**: high (asal-usul & pembagian peran); medium untuk formalitas — ini istilah industri, bukan peran baku standar (lihat Flags)

> **Claim**: Data steward adalah peran tata kelola/oversight yang bertanggung jawab atas kualitas dan kelayakan-guna (fitness for purpose) aset data, termasuk metadata-nya.
> **Number/specific**: Menurut DAMA-DMBOK, data steward adalah "business leader dan/atau subject matter expert yang akuntabel" untuk memastikan konten data & metadata selaras dengan kebijakan, standar, dan aturan bisnis; membantu data owner menegakkan kebijakan tata kelola; serta memantau metrik kualitas data dan menyelidiki anomali.
> **Source**: DAMA-DMBOK, dirangkum a.l. Dataversity "A Brief History of Data Stewardship" & Wikipedia "Data steward" (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Ada pembagian akuntabilitas antara data owner (bisnis) dan data steward.
> **Number/specific**: Data owner (pemilik data/proses bisnis) menetapkan aturan, definisi, dan standar; data steward memantau serta menegakkannya sehari-hari. DAMA-DMBOK2 bahkan mengenal beberapa varian steward (business data steward, technical data steward, coordinating/executive data steward, dll).
> **Source**: DAMA-DMBOK2, dirangkum Dataversity / Data Crossroads "Designing Data Management & Governance Roles" (diakses 2026-08-11)
> **Confidence**: high (konsep owner vs steward); medium (jumlah/penamaan varian bervariasi antar-organisasi)

> **Claim**: Sebuah platform data terdiri dari beberapa lapisan, dan keputusan build-vs-buy berbeda untuk tiap lapisan.
> **Number/specific**: Lapisan utama: ingestion (konektor menarik data dari aplikasi), storage (lake/warehouse/lakehouse), dan transformation (lapisan pemodelan). "Build or buy math" berbeda per lapisan — jarang all-build atau all-buy; umumnya bauran.
> **Source**: DSStream, "Build vs Buy Data Platform: A Layered Decision Framework" — dsstream.com/post/build-vs-buy-data-platform (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Pada opsi "build", lisensi bisa gratis/murah tetapi biaya sesungguhnya ada di rekrutmen, gaji, dan pemeliharaan yang tak pernah berhenti.
> **Number/specific**: "While the license is free, you pay for recruiting and salaries, plus maintenance forever — including on-call rotations and security patches." TCO harus mencakup biaya akuisisi DAN biaya tenaga operasional selama umur sistem (multi-tahun), bukan sekadar harga lisensi/langganan permukaan.
> **Source**: Gestalt, "Build vs. Buy Data Warehouse for Financial Institutions"; MotherDuck, "The Data Warehouse TCO" (diakses 2026-08-11)
> **Confidence**: high (prinsip TCO); catatan: angka gaji spesifik di sumber = konteks AS, bukan Indonesia (lihat Flags)

> **Claim**: Opsi "buy"/managed (DWaaS) dari penyedia besar bersifat terintegrasi vertikal — ekosistem lengkap, tetapi bisa membatasi fleksibilitas.
> **Number/specific**: Solusi terkelola dari Google, Amazon, Microsoft (dan Snowflake) menawarkan ekosistem lengkap namun kadang mengorbankan fleksibilitas/kontrol. Rekomendasi umum: bandingkan opsi dengan model TCO (biaya platform langsung + biaya operasional tak langsung dari waktu ke waktu), bukan harga permukaan.
> **Source**: Xenoss, "Data warehouse strategy: build vs buy guide"; DSStream (ibid.) (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Siklus hidup platform mengikuti model Day 0 / Day 1 / Day 2, dan Day 2 (operasi) tidak pernah selesai.
> **Number/specific**: Day 0 = desain arsitektur; Day 1 = deployment awal; Day 2 = operasi berkelanjutan. Day 0 & Day 1 bersifat time-bounded (didesain sekali, deploy sekali per rilis); "Day 2 never ends... runs for the entire lifetime of the infrastructure — measured in years."
> **Source**: Spacelift, "What are Day-0, Day-1, and Day-2 Operations?"; Cycloid, "Day 2 Operations: A Practical Guide" (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Day-2 operations mencakup aktivitas pemeliharaan berulang yang menjaga sistem tetap andal setelah go-live.
> **Number/specific**: Monitoring & telemetry berkelanjutan, deteksi & respons insiden, patching/update software, manajemen configuration drift, scaling, backup, dan capacity planning. Ini adalah biaya OpEx yang berjalan terus, kontras dengan CapEx membangun yang bersifat sekali.
> **Source**: Spacelift; Cycloid (ibid.); WWT, "Day-2 Operations" (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Biaya siklus hidup didominasi oleh fase operasi (Day 2), bukan pembangunan awal.
> **Number/specific**: Dalam konteks jaringan data-center, Day-2 (monitoring, otomasi, compliance, optimasi) disebut mencapai hingga ~70% total biaya seumur hidup. Angka ini ilustratif untuk domain tersebut — pola-nya (OpEx > CapEx dalam jangka panjang) berlaku umum, tetapi 70% BUKAN angka khusus data warehouse (lihat Flags).
> **Source**: WWT, "Day-2 Operations: The Critical Data Center Network Component" (diakses 2026-08-11)
> **Confidence**: medium (pola benar; angka spesifik bukan untuk DW)

> **Claim**: Indonesia menghadapi kesenjangan talenta digital berskala besar hingga 2030.
> **Number/specific**: Kominfo menyatakan Indonesia membutuhkan **9 juta talenta digital sepanjang 2015–2030** — mencakup bidang data science. Dinyatakan Semuel Abrijani (Dirjen Aptika Kominfo) di Tech & Telco Summit, 5 Maret 2024. Setara rata-rata ~600 ribu talenta/tahun (9 juta ÷ 15 tahun).
> **Source**: Kominfo via CNBC Indonesia (5 Maret 2024) — cnbcindonesia.com; CNN Indonesia (diakses 2026-08-11)
> **Confidence**: high (angka & atribusi); catatan: ini talenta digital agregat, bukan khusus data engineer (lihat Flags)

> **Claim**: Permintaan skill data/AI di Indonesia tumbuh cepat, memperketat pasar talenta.
> **Number/specific**: Permintaan skill AI di Indonesia disebut melonjak ~148% antara 2023–2025; lebih dari 600 ribu posisi teknologi perlu diisi pada 2025; peran seperti data analyst/AI engineer makin sulit dicari. (Sumber agregator industri — pakai sebagai indikasi tren, bukan angka pemerintah resmi; lihat Flags.)
> **Source**: RainTech, "Indonesia's Tech Talent Outlook 2025"; Edstellar, "Top In-Demand Skills in Indonesia" (diakses 2026-08-11)
> **Confidence**: medium (agregator; beri atribusi + tahun)

> **Claim**: Peran-peran tim data ini beroperasi di atas platform SAP dalam konteks pelanggan SAP.
> **Number/specific**: Analytics engineer memodelkan semantic/business layer (mis. model bawaan SAP Datasphere yang membawa business context); data steward menegakkan kualitas & master data (mis. via SAP Information Steward / SAP Master Data Governance); platform berjalan di SAP BW/4HANA / SAP HANA Cloud. Ini konteks, bukan klaim produk baru.
> **Source**: SAP (product_matrix.md + cache research SAP-facts); SAP Datasphere positioning (diakses 2026-08-11)
> **Confidence**: high (konteks umum); medium untuk detail edisi/versi (jangan sebut versi spesifik tanpa sumber SAP terbaru)

> **Claim**: Soltius memiliki kredensial layanan operasi pasca go-live (day-2) yang relevan dengan angle ini.
> **Number/specific**: Soltius adalah **Certified AMC & AMS Partner** dengan **Partner Center of Expertise (PCoE) di Indonesia**, menyediakan **Application Management Services (AMS)** dan **Data and AI Consulting**; SAP Platinum Partner via United VARs; bagian Metrodata Group (sejak 2008), berdiri 1998.
> **Source**: knowledge_base/company_profile.md (fakta pra-verifikasi Soltius)
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Vendor-neutral: peran tim data (data engineer, analytics engineer, data steward, owner) + build/buy/managed + day-2 ops | Definisi peran per DAMA/dbt; keputusan berbeda per lapisan platform; Day 2 = OpEx berkelanjutan | Body H2 #1–#4 (edukasi dulu, vendor-neutral) | — |
| **SAP Datasphere / BW/4HANA / HANA Cloud** (konteks platform) | Peran-peran ini beroperasi di atasnya; analytics engineer memodelkan semantic layer; steward menegakkan kualitas | Aside konteks di H2 #1/#2 | — (jangan overclaim) |
| **SAP Master Data Governance / Information Steward** (konteks tata kelola) | Alat yang dipakai data steward untuk menegakkan kualitas & master data | H2 #1 (peran steward) | Data and AI Consulting |
| **Model "buy + build with a partner"** | Beli platform terkelola + partner merancang/menstandarkan lapisan + transfer knowledge ke tim internal | H2 #5 (opsi ketiga) + closing | **AMS + Data and AI Consulting** |

Reminder: Soltius **mengimplementasikan/merancang/menjalankan & mendukung** teknologi ini — bukan membuatnya. Maks 2–3 self-mention (ideal: 1 aside mid-article + 1 closing).

**Anchor phrasing (closing)**: "Di sinilah model 'buy + build with a partner' masuk akal: melalui **Application Management Services (AMS)** dan **Data and AI Consulting**, Soltius membantu merancang dan menjalankan platform data Anda sekaligus membangun kapabilitas tim internal lewat transfer knowledge — sebagai mitra implementasi SAP, bukan pengganti tim Anda." (Kredibilitas: pilih SATU — Certified AMS Partner/PCoE di Indonesia, atau SAP Platinum Partner via United VARs, atau bagian Metrodata Group sejak 1998. Jangan menumpuk.)

**Aside mid-article (opsional, 1 kalimat)**: "Di lapangan, warehouse yang sukses go-live sering tersendat di tahun kedua bukan karena teknologinya, melainkan karena tak ada pemilik & pemelihara yang jelas untuk menjalankannya."

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Kominfo (via CNBC Indonesia, 5 Maret 2024)** — cnbcindonesia.com/tech/20240305175053-37-519890/masih-minim-ri-butuh-9-juta-talenta-digital-hingga-2030 — *what it backs*: Indonesia butuh 9 juta talenta digital 2015–2030 (~600 ribu/tahun), mencakup data science. Sumber pemerintah = otoritas tertinggi untuk konteks talenta Indonesia.
2. **DAMA-DMBOK (via Dataversity)** — dataversity.net/articles/a-brief-history-of-data-stewardship/ — *what it backs*: definisi & tanggung jawab data steward (kualitas, metadata, tata kelola) sebagai standar industri data management.
3. **dbt Labs — "What is analytics engineering?"** — getdbt.com/what-is-analytics-engineering — *what it backs*: asal-usul & definisi peran analytics engineer (disiplin software engineering di lapisan analitik).
4. **DSStream — "Build vs Buy Data Platform: A Layered Decision Framework"** — dsstream.com/post/build-vs-buy-data-platform — *what it backs*: kerangka keputusan per-lapisan (ingestion/storage/transformation) dan logika TCO.
5. **Spacelift — "Day-0, Day-1, and Day-2 Operations"** — spacelift.io/blog/day-0-day-1-day-2-operations — *what it backs*: model siklus hidup Day 0/1/2 dan sifat Day-2 yang tak pernah berhenti.

Priority terpenuhi: Pemerintah (Kominfo) + standar industri (DAMA) + sumber teknis kredibel (dbt/DSStream/Spacelift). Writer sebaiknya tautkan minimal 2: **Kominfo** (talenta) + **DAMA/dbt** (peran). Angle ini organisasi, jadi tidak ada SAP-official yang jadi sumber utama — SAP hanya konteks platform.

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Siapa saja yang dibutuhkan untuk menjalankan sebuah data warehouse?
Umumnya empat sampai lima peran: **data engineer** (membangun & memelihara pipeline dan infrastruktur data), **analytics engineer** (memodelkan data mentah menjadi metrik yang bersih dan tepercaya), **data steward** (menjaga kualitas, metadata, dan tata kelola), **data/business owner** (pemilik bisnis yang menetapkan aturan dan prioritas), serta **platform owner** (memiliki roadmap, biaya, dan keamanan platform). Pada tim kecil, satu orang bisa merangkap beberapa peran—tetapi tanggung jawabnya tetap harus ada pemiliknya.

### Apa perbedaan data engineer dan analytics engineer?
Data engineer fokus pada infrastruktur: membangun pipeline yang mengumpulkan, menyimpan, dan memindahkan data mentah ke warehouse ("memasukkan data"), dengan tools seperti Python dan Spark. Analytics engineer fokus pada pemodelan: mengubah data mentah di dalam warehouse menjadi dataset dan metrik bisnis yang tepercaya dan terdokumentasi ("membuat data berguna"), dengan SQL dan dbt. Peran analytics engineer muncul di era warehouse cloud/ELT dan dipopulerkan oleh dbt Labs.

### Apa itu data steward?
Data steward adalah peran tata kelola yang bertanggung jawab atas kualitas dan kelayakan-guna aset data, termasuk metadatanya. Menurut kerangka DAMA-DMBOK, steward memastikan isi data dan metadata selaras dengan kebijakan, standar, dan aturan bisnis, membantu data owner menegakkan tata kelola, serta memantau metrik kualitas dan menyelidiki anomali. Steward biasanya seorang ahli domain bisnis, bukan sekadar peran teknis IT.

### Lebih baik membangun tim data sendiri atau memakai managed service?
Tergantung tiga hal: seberapa strategis data bagi bisnis Anda, seberapa cepat butuh hasil, dan ketersediaan talenta. **Build** (tim in-house) memberi kontrol tertinggi tetapi lambat, mahal, dan berisiko pada talenta yang langka. **Buy/managed** cepat dan ringan talenta tetapi kurang fleksibel. Keputusan sebaiknya dinilai per lapisan platform dan dengan Total Cost of Ownership—biaya lisensi ditambah gaji, rekrutmen, dan pemeliharaan seumur sistem—bukan harga permukaan.

### Kapan sebaiknya memakai managed services untuk data warehouse?
Managed services masuk akal ketika talenta data langka atau mahal untuk direkrut, ketika Anda butuh cepat beroperasi tanpa membangun tim besar, atau ketika data warehouse bukan diferensiasi inti bisnis sehingga Anda ingin fokus pada penggunaan data, bukan pemeliharaan platform. Di Indonesia, kesenjangan talenta digital yang besar (Kominfo: butuh 9 juta talenta 2015–2030) membuat opsi ini relevan—terutama model hybrid yang tetap membangun kapabilitas tim internal lewat transfer knowledge.

### Apakah tim kecil bisa menjalankan data warehouse?
Bisa, jika ruang lingkupnya dijaga dan sebagian beban operasi dialihkan. Kuncinya adalah "day-2 operations": setelah go-live, warehouse butuh pemeliharaan terus-menerus—monitoring, patching, penanganan insiden, dan permintaan baru—yang tidak pernah berhenti. Tim kecil rawan pada risiko satu-orang (bus factor) dan turnover. Kombinasi platform terkelola plus dukungan partner (managed/AMS) sering menjadi jalan tengah yang lebih tahan banting daripada memaksakan semuanya in-house.

## Data tables for the writer

### Peran-peran inti yang menjalankan data warehouse
| Peran | Fokus utama | Tanggung jawab inti | Tools/kerangka khas |
|---|---|---|---|
| Data engineer | Infrastruktur & pipeline | Ingestion, integrasi, orkestrasi, storage; "memasukkan data ke warehouse" | Python, Spark, konektor/ELT, cloud |
| Analytics engineer | Transformasi & pemodelan | Model data mentah → dataset/metrik tepercaya & terdokumentasi (semantic layer); disiplin software engineering (versioning, testing) | SQL, dbt, semantic model (mis. di SAP Datasphere) |
| Data steward | Kualitas & tata kelola | Menjaga kualitas, metadata, kepatuhan aturan bisnis; memantau metrik kualitas | DAMA, katalog data, MDG/Information Steward |
| Data/business owner | Akuntabilitas bisnis | Menetapkan aturan, definisi metrik, prioritas domain data | Peran bisnis (bukan teknis) |
| Platform / product owner | Kepemilikan platform | Roadmap, biaya/lisensi, keamanan, SLA, prioritas backlog | Observability, FinOps |
| BI/data analyst | Konsumsi & insight | Dashboard, laporan, analisis untuk keputusan | SAP Analytics Cloud/BI tools, SQL |

*(Pada organisasi kecil, peran-peran ini sering dirangkap; yang penting tanggung jawabnya jelas pemiliknya.)*

### Build vs Buy vs Managed Services
| Dimensi | Build (tim in-house) | Buy (managed/SaaS/DWaaS) | Managed services / partner |
|---|---|---|---|
| Kontrol & kustomisasi | Tertinggi | Terbatas (ekosistem vendor) | Menengah |
| Kecepatan ke nilai | Lambat | Cepat | Cepat–menengah |
| Kebutuhan talenta internal | Tinggi (beberapa FTE) | Rendah–menengah | Rendah (dialihkan ke partner) |
| Struktur biaya | CapEx awal + OpEx tim besar | OpEx langganan | OpEx layanan + SLA |
| Risiko talenta/turnover | Tinggi (bus factor) | Rendah | Rendah–menengah |
| Paling cocok bila | Data = diferensiasi inti; skala besar; sudah punya tim | Kebutuhan standar; ingin cepat; tim kecil | Ingin kendali tapi talenta langka; butuh SLA + transfer knowledge |

*(Jarang murni satu kolom — banyak perusahaan memakai bauran per lapisan: mis. buy storage, build transformation, managed operations.)*

### Siklus hidup: Day 0 / Day 1 / Day 2
| Fase | Fokus | Sifat | Contoh biaya |
|---|---|---|---|
| Day 0 | Desain arsitektur & perencanaan | Sekali (time-bounded) | Konsultasi, desain — CapEx |
| Day 1 | Implementasi & go-live | Sekali per rilis (time-bounded) | Proyek implementasi — CapEx |
| Day 2 | Operasi berkelanjutan: monitoring, patching, scaling, insiden, permintaan baru | Terus-menerus (seumur platform) | Tim/AMS, lisensi, cloud — OpEx |

## Edge cases & nuance

- **Outsourcing penuh bisa jadi jebakan.** Menyerahkan seluruh platform ke pihak luar tanpa membangun kapabilitas internal menciptakan ketergantungan (lock-in) dan hilangnya konteks bisnis. Model yang lebih sehat: partner menjalankan sekaligus mentransfer knowledge, agar tim internal makin mandiri — bukan makin bergantung. Ini pembeda framing Soltius (mendampingi + transfer knowledge, bukan sekadar outsourcing).
- **"Build vs buy" jarang biner.** Keputusan sebenarnya per lapisan (ingestion/storage/transformation/operasi). Banyak perusahaan membeli storage terkelola, membangun lapisan transformasi, lalu men-managed-service-kan operasinya. Sarankan pembaca memetakan keputusan per lapisan, bukan satu keputusan besar.
- **Bus factor & turnover adalah risiko day-2 yang nyata.** Warehouse yang bergantung pada satu-dua orang kunci rapuh saat mereka cuti/resign. Ini argumen kuat untuk dokumentasi, standardisasi (disiplin analytics engineering), dan dukungan partner/AMS sebagai jaring pengaman.
- **Peran ≠ jumlah orang.** Untuk mid-market/UKM, lima peran bisa dijalankan dua–tiga orang plus partner. Pesannya bukan "rekrut lima orang", melainkan "pastikan lima tanggung jawab ini ada pemiliknya".
- **Talenta bukan cuma soal jumlah, tapi retensi & biaya.** Kesenjangan Kominfo (9 juta) menjelaskan kelangkaan; implikasinya gaji naik dan turnover tinggi di peran data—memperkuat kasus untuk model hybrid/managed, bukan memaksakan seluruh tim in-house.
- **Managed ≠ hilang kendali data.** Managed services mengelola operasi platform; kepemilikan data, definisi metrik, dan tata kelola tetap di sisi bisnis (owner/steward). Perjelas ini agar pembaca tak menyamakan managed dengan menyerahkan kendali data.

## Flags (open factual risk)

- ⚠️ **Angka gaji & ukuran tim spesifik**: sumber build-vs-buy (Gestalt) menyebut gaji data engineer USD 130–180 ribu/tahun dan "3–5 FTE" — itu **konteks lembaga keuangan AS**, BUKAN Indonesia. → Rekomendasi: JANGAN pakai angka gaji/ukuran tim numerik untuk Indonesia (tidak ada sumber Indonesia andal). Cukup kualitatif "langka dan mahal", didukung angka Kominfo. Jika benar-benar perlu angka, atribusikan eksplisit "konteks AS" dan jangan generalisasi.
- ⚠️ **"9 juta talenta digital"**: ini agregat talenta digital 2015–2030 (Kominfo), mencakup data science tapi BUKAN khusus data engineer/analytics engineer. Angka ~600 ribu/tahun adalah turunan (9 juta ÷ 15 tahun), bukan kutipan langsung. → Rekomendasi: sajikan sebagai konteks kelangkaan talenta digital secara umum, atribusi "Kominfo", jangan sebut sebagai "kekurangan data engineer" spesifik.
- ⚠️ **Statistik agregator (148% AI demand, 600 ribu posisi, 30 ribu lulusan siap data/AI)**: berasal dari blog agregator industri (RainTech/Edstellar), bukan sumber pemerintah/analis primer. → Rekomendasi: opsional; bila dipakai, beri atribusi + tahun dan bingkai sebagai "indikasi tren", bukan statistik resmi. Utamakan angka Kominfo yang lebih defensible.
- ⚠️ **Day-2 = "hingga 70% biaya"**: angka ini dari konteks **jaringan data-center** (WWT), bukan data warehouse. → Rekomendasi: gunakan prinsipnya (OpEx pemeliharaan mendominasi biaya jangka panjang; CapEx bangun sekali vs OpEx pelihara terus), TANPA menempelkan "70%" ke data warehouse. Jika angka dipakai, atribusikan domainnya.
- ⚠️ **"Analytics engineer" sebagai peran**: istilah industri yang dipopulerkan dbt Labs (~sejak 2019), bukan peran baku dari badan standar seperti DAMA. Judul & batas peran bervariasi antar-perusahaan (kadang menyatu dengan data engineer/analyst). → Rekomendasi: sajikan sebagai peran yang "muncul di era cloud", akui batasnya bisa kabur; jangan over-formalkan.
- ⚠️ **Detail produk/edisi SAP**: aman menyebut SAP Datasphere/BW/4HANA/HANA Cloud, Information Steward, MDG sebagai konteks platform tempat peran bekerja. → Rekomendasi: JANGAN sebut nomor versi/edisi atau kapabilitas spesifik tanpa sumber SAP terbaru; jaga sebagai konteks, bukan fokus produk (angle ini organisasi).

## Definition snippet draft (55 words)

> **Menjalankan data warehouse** membutuhkan tim dengan beberapa peran inti: **data engineer** (membangun & memelihara pipeline), **analytics engineer** (memodelkan data menjadi metrik tepercaya), **data steward** (menjaga kualitas & tata kelola), serta **platform/business owner** (memiliki roadmap & aturan). Perusahaan dapat membangunnya sendiri (build), memakai layanan terkelola (buy/managed), atau menggabungkan keduanya bersama partner implementasi.
