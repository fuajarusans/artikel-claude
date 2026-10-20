---
brief_id: "business-intelligence-01"
researcher_run_date: "2026-07-07"
sources_cited: 8
flags: 5
---

# Research Dossier: Business Intelligence Butuh Budaya Data, Bukan Cuma Tools

## TL;DR for the writer

- **The thesis holds up and is well-sourced.** BI adoption is genuinely low despite investment: Gartner (via IBM) says ABI is used by only **~29%** of employees on average even though usage grew in 87% of organizations; BARC/Eckerson's primary survey puts active use at **~25%** (barely moved in 7 years). Use these two together — they corroborate the "shelfware" problem.
- **The two headline literacy stats are verified but shift by report year.** DataCamp's *2026* State of Data & AI Literacy Report: **88%** of leaders say data literacy is important for day-to-day work; **60%** report a data skills gap; only **42%** provide foundational training at scale. The brief attributes these to "DataCamp/Coursera 2026" — correct source is **DataCamp** (500+ US/UK enterprise leaders). Do NOT credit Coursera for these numbers.
- **Gartner's 2027 CDAO prediction is confirmed verbatim:** ">50% of CDAOs will secure funding for data literacy AND AI literacy programs by 2027" (press release 2024-01-29). Note it is *data + AI* literacy, not data literacy alone.
- **SAP Analytics Cloud (SAC)** is officially "a cloud solution for business intelligence, enterprise planning, and predictive analytics that provides all analytics capabilities for all users in one product" (SAP). Governed self-service comes from its native connection to SAP Datasphere / S/4HANA, which preserves business semantics — good framing for "single source of truth." Collaboration (comments on stories, widgets, cells; @-mentions; notifications) is documented on help.sap.com.
- **Strong Indonesia hook exists:** a 2025 peer-reviewed study (ScienceDirect) finds data literacy and knowledge management *mediate* the link between data-driven culture and analytics capability in Indonesia's public sector — i.e., academically, culture alone isn't enough without literacy. Pair with the AI-adoption-vs-governance gap (93% of ID leaders call AI essential, only ~24% have governance) for local color.

## Core facts (verified)

> **Claim**: Analitik & BI hanya benar-benar dipakai oleh sebagian kecil karyawan meski investasi tumbuh.
> **Number/specific**: Menurut Gartner, jumlah karyawan yang memakai ABI meningkat di 87% organisasi, tetapi ABI rata-rata tetap hanya dipakai **29% karyawan**.
> **Source**: IBM Think, "A new era in BI: Overcoming low adoption" (mengutip Gartner), https://www.ibm.com/think/insights/business-intelligence-adoption — diakses 2026-07-07.
> **Confidence**: medium-high (angka jelas dikutip dari Gartner oleh IBM; press release Gartner primer tidak berhasil dibuka langsung — lihat Flags).

> **Claim**: Adopsi BI stagnan bertahun-tahun (memperkuat tesis "tool saja tidak cukup").
> **Number/specific**: Rata-rata **~25%** karyawan aktif memakai tool BI/analitik — nyaris tak bergerak dalam 7 tahun terakhir.
> **Source**: BARC & Eckerson Group, "Strategies for Driving Adoption and Usage with BI and Analytics" (2022, 214 perusahaan), https://barc.com/news/new-study-identifies-drivers-of-bi-and-analytics-adoption-in-companies-today/ — diakses 2026-07-07.
> **Confidence**: high.

> **Claim**: Perubahan budaya data adalah pendorong adopsi BI nomor satu (bukan tool).
> **Number/specific**: Dalam survei BARC/Eckerson, "change in data culture" jadi pendorong bisnis tertinggi (**51%**), disusul eksekutif data-driven baru & inisiatif transformasi digital (masing-masing 50%).
> **Source**: BARC & Eckerson Group (2022), https://barc.com/news/new-study-identifies-drivers-of-bi-and-analytics-adoption-in-companies-today/ — diakses 2026-07-07.
> **Confidence**: high.

> **Claim**: Pemimpin mengakui pentingnya literasi data tetapi mayoritas menghadapi kesenjangan keterampilan.
> **Number/specific**: **88%** pemimpin menilai literasi data penting untuk pekerjaan sehari-hari; **60%** melaporkan adanya *data skills gap* di organisasinya.
> **Source**: DataCamp, State of Data & AI Literacy Report 2026 (survei 500+ pemimpin enterprise AS/Inggris), https://www.datacamp.com/blog/the-state-of-data-and-ai-literacy-in-2026-definitions-statistics-and-the-ai-skills-gap — diakses 2026-07-07.
> **Confidence**: high (sumber DataCamp, bukan Coursera — lihat Flags).

> **Claim**: Meski penting, pelatihan literasi data belum merata.
> **Number/specific**: Hanya **42%** organisasi menyediakan pelatihan literasi data dasar dalam skala besar; **74%** pemimpin bersedia membayar gaji lebih tinggi untuk keterampilan literasi data yang kuat.
> **Source**: DataCamp, State of Data & AI Literacy Report 2026, https://www.datacamp.com/blog/the-state-of-data-and-ai-literacy-in-2026-definitions-statistics-and-the-ai-skills-gap — diakses 2026-07-07.
> **Confidence**: high.

> **Claim**: Gartner memprediksi lonjakan pendanaan program literasi oleh pimpinan data.
> **Number/specific**: Lebih dari **50% CDAO (Chief Data & Analytics Officers) akan mengamankan pendanaan untuk program literasi data DAN literasi AI pada 2027**, dipicu gagalnya banyak perusahaan meraih nilai dari GenAI.
> **Source**: Gartner press release, "Gartner Predicts More Than 50% of CDAOs Will Secure Funding for Data Literacy and AI Literacy Programs by 2027", 2024-01-29, https://www.gartner.com/en/newsroom/press-releases/2024-01-29-gartner-predicts-more-than-50-percent-of-cdaos-will-secure-funding-for-data-literacy-and-ai-literacy-programs-by-2027 — diakses 2026-07-07.
> **Confidence**: high (angka & tanggal dikonfirmasi via judul resmi Gartner + BigDataWire).

> **Claim**: Literasi data yang buruk adalah salah satu penghambat utama sukses D&A.
> **Number/specific**: Gartner CDAO Survey menempatkan **poor data literacy** sebagai salah satu penghambat teratas; hanya **44%** pemimpin D&A menilai timnya efektif memberi nilai bagi organisasi (survei 2023).
> **Source**: Gartner, "Gartner Survey Reveals Less Than Half of Data and Analytics Teams Effectively Provide Value" (2023-03-21), https://www.gartner.com/en/newsroom/press-releases/03-21-2023-gartner-survey-reveals-less-than-half-of-data-and-analytics-teams-effectively-provide-value-to-the-organization — diakses 2026-07-07.
> **Confidence**: high.

> **Claim**: SAP Analytics Cloud adalah platform BI, perencanaan, dan analitik prediktif dalam satu solusi cloud.
> **Number/specific**: SAP mendeskripsikannya sebagai "a cloud solution for business intelligence, enterprise planning, and predictive analytics that provides all analytics capabilities for all users in one product."
> **Source**: SAP, halaman produk SAP Analytics Cloud, https://www.sap.com/products/data-cloud/cloud-analytics.html + SAP Learning, https://learning.sap.com/products/business-technology-platform/data-analytics/analytics-cloud — diakses 2026-07-07.
> **Confidence**: high.

> **Claim**: SAC mendukung *governed self-service* karena terhubung natif ke lapisan data tepercaya.
> **Number/specific**: SAC terhubung natif ke **SAP Datasphere** dan **SAP S/4HANA** untuk memberi *self-service analytics* sambil mempertahankan *semantics* proses bisnis penting; Datasphere menyediakan **catalog** untuk penemuan aset data & analitik (mendukung *single source of truth*).
> **Source**: SAP Help Portal / SAP product docs, https://help.sap.com/docs/SAP_ANALYTICS_CLOUD — diakses 2026-07-07.
> **Confidence**: high.

> **Claim**: SAC punya fitur kolaborasi bawaan yang mendukung budaya data (diskusi di atas angka).
> **Number/specific**: Pengguna dapat menambahkan **komentar** pada tab halaman, widget (grafik/tabel), dan sel tabel di dalam *story*; me-*mention* pengguna lain yang lalu menerima **notifikasi** (shell bar, mobile app, atau email).
> **Source**: SAP Help Portal, "Collaborate Using Comments in Stories", https://help.sap.com/docs/SAP_ANALYTICS_CLOUD/00f68c2e08b941f081002fd3691d86a7/7bd1f80d20774a4dacfdf87ebd42fd73.html — diakses 2026-07-07.
> **Confidence**: high.

> **Claim**: SAC menyertakan asisten AI generatif untuk analitik bahasa alami.
> **Number/specific**: **Joule**, *AI copilot* SAP, telah terintegrasi ke SAC — pengguna bisnis dapat mengajukan pertanyaan analitik dalam bahasa alami dan menerima jawaban berupa grafik/metrik.
> **Source**: SAP, halaman produk SAP Analytics Cloud, https://www.sap.com/products/data-cloud/cloud-analytics.html — diakses 2026-07-07.
> **Confidence**: high.

> **Claim**: Di konteks Indonesia, literasi data & manajemen pengetahuan menjembatani budaya data dan kapabilitas analitik.
> **Number/specific**: Studi 2025 menemukan **data literacy dan knowledge management memediasi** hubungan antara *data-driven culture* dan kapabilitas analitik bisnis di sektor publik Indonesia — secara akademis, budaya saja tidak cukup tanpa literasi.
> **Source**: ScienceDirect (peer-reviewed), "The interplay between business analytics capabilities and decision-making performance in Indonesia's public sector" (2025), https://www.sciencedirect.com/science/article/pii/S2666954425000274 — diakses 2026-07-07.
> **Confidence**: medium-high (halaman abstract 403 saat fetch; temuan mediasi dikonfirmasi via ringkasan pencarian — lihat Flags).

> **Claim**: Antusiasme terhadap AI/data di Indonesia tinggi, tetapi tata kelola tertinggal — memperkuat argumen "budaya & fondasi dulu".
> **Number/specific**: **93%** pemimpin bisnis Indonesia menilai AI esensial untuk daya saing, tetapi hanya **~24%** yang punya kerangka tata kelola AI yang jelas; **92%** pekerja pengetahuan Indonesia sudah memakai GenAI.
> **Source**: Ringkasan riset pasar Indonesia (trade.gov / CRIF / Global CIO), dikumpulkan 2026-07-07 — konteks pendukung, bukan klaim inti.
> **Confidence**: medium (angka survei vendor; gunakan sebagai konteks "arah", bukan angka presisi — lihat Flags).

> **Claim**: Prediksi Gartner tentang lonjakan adopsi ABI melalui *augmented consumerization*.
> **Number/specific**: Gartner (dikutip IBM) memperkirakan fungsi *augmented consumerization* mendorong adopsi kapabilitas ABI menembus **>50%** untuk pertama kalinya.
> **Source**: IBM Think (mengutip Gartner), https://www.ibm.com/think/insights/business-intelligence-adoption — diakses 2026-07-07.
> **Confidence**: medium (target tahun "2025" dalam sumber kemungkinan sudah lewat; sajikan sebagai proyeksi terarah, bukan angka mutakhir — lihat Flags).

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Analytics Cloud (SAC)** sebagai contoh platform BI *governed* | BI + planning + predictive dalam satu solusi cloud; *governed self-service* lewat koneksi natif ke SAP Datasphere/S/4HANA (jaga semantics); kolaborasi (komentar di story/widget/sel, @-mention, notifikasi); Joule AI copilot. **Vendor-netral di body** — SAC sebagai *contoh*, bukan satu-satunya jawaban. | H2 #4 (aside singkat tentang platform *governed* yang menopang budaya data tanpa "200 dashboard"); disebut lagi di closing | **Data and AI Consulting** + implementasi SAP Analytics Cloud |
| **Single source of truth** (konsep) | Budaya data hanya tumbuh jika angka konsisten; SSOT butuh fondasi data warehouse (SAP Datasphere/BW/4HANA) — tautkan ke cousin *Data Warehouse Solutions* | H2 #1 & H2 #5 (prasyarat) | (konsep, bukan mention Soltius) |
| **Chief Data Officer (CDO/CDAO)** sebagai entitas organisasi | Peran organisasi yang mengamankan pendanaan literasi (Gartner 2027); sponsor eksekutif budaya data | H2 #4 (peran) & FAQ | (konsep) |

Soltius anchor phrasing (closing, dari company_profile / product_matrix): "Melalui layanan **Data and AI Consulting**, Soltius mendampingi perusahaan bukan hanya sampai *go-live* teknis SAP Analytics Cloud, tetapi juga *enablement* pengguna — agar data benar-benar dipercaya dan dipakai dalam keputusan."

Reminder: Soltius **mengimplementasikan/mendampingi** SAC — tidak membuatnya. **Maks 2–3 self-mention**: 1 aside mid-artikel (H2 #4, tanpa angka klien) + 1 closing CTA. Jangan mengarang angka/nama klien.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **Gartner press release (2024-01-29)** — https://www.gartner.com/en/newsroom/press-releases/2024-01-29-gartner-predicts-more-than-50-percent-of-cdaos-will-secure-funding-for-data-literacy-and-ai-literacy-programs-by-2027 — *what it backs*: >50% CDAO akan mendanai program literasi data + AI pada 2027; literasi sebagai kompetensi inti.
2. **DataCamp — State of Data & AI Literacy Report 2026** — https://www.datacamp.com/blog/the-state-of-data-and-ai-literacy-in-2026-definitions-statistics-and-the-ai-skills-gap — *what it backs*: 88% pemimpin menilai literasi data penting; 60% skills gap; 42% pelatihan skala besar.
3. **BARC & Eckerson Group (2022)** — https://barc.com/news/new-study-identifies-drivers-of-bi-and-analytics-adoption-in-companies-today/ — *what it backs*: rata-rata ~25% karyawan aktif pakai BI; "change in data culture" pendorong adopsi #1 (51%).
4. **SAP (produk resmi + SAP Learning)** — https://www.sap.com/products/data-cloud/cloud-analytics.html — *what it backs*: definisi & kapabilitas SAP Analytics Cloud (BI + planning + predictive, governed self-service, Joule).
5. **ScienceDirect (2025, peer-reviewed, Indonesia)** — https://www.sciencedirect.com/science/article/pii/S2666954425000274 — *what it backs*: literasi data & knowledge management memediasi budaya data → kapabilitas analitik di sektor publik Indonesia.

Priority order satisfied: SAP official + Gartner + peer-reviewed + industri (DataCamp/BARC).

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu data literacy (literasi data)?
Literasi data adalah kemampuan membaca, memahami, menganalisis, dan mengomunikasikan data untuk mengambil keputusan. Ini keterampilan **individu** — berbeda dari budaya data yang bersifat organisasi. Menurut DataCamp (2026), 88% pemimpin menilai literasi data penting untuk pekerjaan sehari-hari, tetapi 60% mengakui organisasinya masih memiliki kesenjangan keterampilan data. Tanpa literasi, dashboard secanggih apa pun akan salah dibaca atau diabaikan.

### Apa bedanya data literacy dan data-driven culture?
Data literacy adalah **kemampuan individu** memahami dan memakai data; data-driven culture adalah **sistem keyakinan dan kebiasaan organisasi** yang menjadikan data rujukan default dalam keputusan. Keduanya saling bergantung: literasi tanpa budaya membuat orang bisa membaca data tapi tetap memutuskan lewat "feeling"; budaya tanpa literasi menghasilkan antusiasme yang salah arah. Studi di Indonesia (2025) bahkan menemukan literasi data memediasi budaya data menjadi kapabilitas analitik nyata.

### Bagaimana cara memulai program literasi data di perusahaan?
Mulai dari sponsor eksekutif dan satu masalah bisnis nyata, bukan pelatihan massal. Petakan kesenjangan keterampilan per peran, tetapkan *single source of truth* agar semua melihat angka yang sama, lalu tunjuk *data champion* di tiap tim untuk mendampingi rekan. Data DataCamp (2026) menunjukkan hanya 42% organisasi melatih literasi data dalam skala besar — jadi konsistensi jauh lebih penting daripada kecepatan. Ukur adopsi, bukan sekadar jumlah peserta pelatihan.

### Apa peran Chief Data Officer (CDO) dalam membangun budaya data?
CDO (atau CDAO) memimpin strategi data organisasi: menetapkan tata kelola, menjaga kualitas dan *single source of truth*, serta mengamankan pendanaan untuk program literasi. Gartner memprediksi lebih dari 50% CDAO akan mengamankan dana untuk program literasi data dan AI pada 2027. Peran ini penting karena budaya data butuh otoritas eksekutif — tanpa sponsor selevel C, program literasi cenderung berhenti sebagai inisiatif IT yang terisolasi.

### Berapa lama membangun budaya data?
Tidak ada jalan pintas — umumnya butuh beberapa tahun, bukan bulan, karena yang berubah adalah perilaku dan kepercayaan, bukan sekadar perangkat lunak. Buktinya, survei BARC/Eckerson menunjukkan rata-rata pemakaian BI hanya bergerak tipis (~25%) dalam tujuh tahun. Percepat dengan menang cepat di satu unit, membereskan kualitas data lebih dulu, dan membuat angka mudah diakses lewat *self-service* yang tetap terkendali (*governed*), bukan dengan memaksa adopsi lewat mandat.

### Apakah UKM juga membutuhkan budaya data?
Ya, bahkan bisa lebih mudah karena struktur lebih ramping dan keputusan lebih dekat ke data. UKM tidak perlu membeli platform mahal lebih dulu; yang dibutuhkan adalah kebiasaan merujuk angka yang konsisten dan satu sumber kebenaran. Justru membeli lisensi BI sebelum data bersih dan tepercaya sering memperburuk kepercayaan pada angka. Untuk UKM, budaya data dimulai dari disiplin pencatatan dan definisi metrik yang seragam, bukan dari jumlah dashboard.

### Apa itu single source of truth dalam Business Intelligence?
*Single source of truth* (SSOT) adalah satu sumber data yang disepakati dan tepercaya sebagai rujukan tunggal seluruh organisasi, sehingga tidak ada lagi "angka penjualan versi keuangan vs versi sales". Dalam BI, SSOT biasanya berdiri di atas data warehouse (mis. SAP Datasphere/BW/4HANA) dan disajikan lewat platform *governed* seperti SAP Analytics Cloud. Tanpa SSOT, budaya data mustahil tumbuh karena orang tidak akan mempercayai angka yang saling bertentangan.

## Data tables for the writer

### Empat tahap kematangan budaya data (kerangka untuk H2 #4)
> Kerangka sintesis untuk writer — sifatnya model umum (bukan angka bersumber). Sajikan sebagai kerangka praktik, bukan sebagai standar resmi bermerek.

| Tahap | Tanda khas organisasi | Cara naik satu level | Peran kunci |
|---|---|---|---|
| **1. Data-averse** | Keputusan lewat intuisi/senioritas; data dianggap beban administratif; angka saling bertentangan | Bereskan kualitas data & tetapkan *single source of truth*; menang cepat di 1 kasus bisnis | Sponsor eksekutif |
| **2. Data-aware** | Ada dashboard tetapi jarang dibuka; laporan masih manual/e-mail | Sederhanakan metrik inti; latih pembacaan data dasar; buat akses *self-service* | Data champion per tim |
| **3. Data-literate** | Tim bisa membaca & mempertanyakan data; *self-service* terkendali dipakai rutin | Bangun *data storytelling*; tata kelola & katalog data; ukur adopsi, bukan cuma akses | CDO/CDAO |
| **4. Data-driven** | Data adalah rujukan default; hipotesis diuji dengan angka; eksperimen jadi kebiasaan | Pertahankan lewat insentif, komunitas data, dan tinjauan berkala | CDO + kepemimpinan lini |

### Data literacy vs data-driven culture (untuk H2 #2)
| Aspek | Data literacy | Data-driven culture |
|---|---|---|
| Level | Individu | Organisasi |
| Sifat | Keterampilan (membaca, analisis, komunikasi data) | Sistem keyakinan & kebiasaan |
| Dibangun lewat | Pelatihan, mentoring, *data champion* | Kepemimpinan, tata kelola, insentif, SSOT |
| Jika absen | Data salah dibaca / diabaikan | Keputusan tetap berbasis "feeling" walau data ada |
| Bukti (2026) | 88% nilai penting; 60% skills gap (DataCamp) | Pemakaian BI stagnan ~25% (BARC/Eckerson) |

## Edge cases & nuance

- **"29%" vs "25%" — dua angka, dua sumber.** Angka **29%** adalah Gartner (dikutip IBM Think); angka **25%** adalah BARC/Eckerson (2022, sumber primer yang bisa dibuka). Keduanya menceritakan hal sama (adopsi rendah & stagnan) tetapi jangan dicampur sebagai satu angka. Rekomendasi: gunakan "sekitar seperempat hingga sepertiga karyawan" atau sajikan keduanya dengan atribusi masing-masing.
- **Literasi data DAN AI, bukan hanya data.** Prediksi Gartner 2027 secara eksplisit menyebut "data literacy **and** AI literacy". Jangan memangkasnya jadi "literasi data" saja jika mengutip angka >50%.
- **DataCamp, bukan Coursera.** Brief menyebut "DataCamp/Coursera 2026" untuk angka 88%/60%. Sumber yang terkonfirmasi adalah **DataCamp** (State of Data & AI Literacy 2026, 500+ pemimpin AS/Inggris). Coursera punya panduan literasi terpisah tetapi bukan sumber angka ini.
- **Angka literasi bersifat AS/Inggris, bukan Indonesia.** 88%/60% dari sampel enterprise AS/Inggris. Untuk konteks Indonesia, sandarkan pada studi ScienceDirect 2025 (sektor publik ID) dan angka adopsi AI Indonesia — bingkai sebagai "tren global yang juga relevan di Indonesia", bukan angka lokal.
- **Membeli tool lebih dulu bisa memperburuk trust (poin honest H2 #5).** Ini didukung logika BARC: pendorong adopsi #1 adalah perubahan budaya (51%), bukan tool. Jika data kotor/tidak konsisten disajikan di dashboard baru, kepercayaan pada angka justru turun. Prasyarat: kualitas data + sponsor eksekutif sebelum program literasi.
- **"Governed self-service" bukan oksimoron.** Poin edukatif: *self-service* tanpa tata kelola = "200 dashboard" yang saling bertentangan; SAC mengatasinya dengan koneksi natif ke lapisan data ber-*semantics* (Datasphere/S/4HANA). Jelaskan konsepnya vendor-netral.

## Flags (open factual risk)

- ⚠️ **Angka "29% karyawan pakai ABI" (Gartner).** Dikutip jelas oleh IBM Think sebagai milik Gartner, tetapi press release/riset Gartner primernya tidak berhasil dibuka langsung (IBM & Gartner mengembalikan 403 saat fetch). → Rekomendasi: atribusikan **"menurut Gartner (dikutip IBM)"** ATAU pakai angka BARC/Eckerson 25% yang sumber primernya terbuka. Jangan tulis "29%" tanpa atribusi.
- ⚠️ **Tahun/label laporan DataCamp.** Angka 88%/60% muncul di **State of Data & AI Literacy Report 2026** DataCamp; laporan 2024 punya angka mirip (86% penting). → Rekomendasi: tulis "DataCamp, 2026" dan **hindari** menyebut Coursera sebagai sumber angka ini.
- ⚠️ **Studi Indonesia (ScienceDirect).** Halaman abstract mengembalikan 403 saat fetch; temuan mediasi (literasi & knowledge management memediasi budaya data → kapabilitas analitik) dikonfirmasi lewat ringkasan mesin pencari, bukan pembacaan penuh. → Rekomendasi: kutip sebagai "studi 2025 di sektor publik Indonesia" tanpa mengklaim angka spesifik dari studi tsb.
- ⚠️ **Konteks AI Indonesia (93% esensial / 24% governance / 92% pakai GenAI).** Berasal dari kompilasi riset pasar/vendor (trade.gov, CRIF, Global CIO), bukan satu sumber primer tunggal. → Rekomendasi: gunakan sebagai **konteks arah** ("sebagian besar pemimpin Indonesia menilai AI esensial, namun tata kelola tertinggal"), hindari menyandingkan ketiga angka presisi seolah dari satu survei.
- ⚠️ **Prediksi Gartner ">50% adopsi ABI" via augmented consumerization "pada 2025".** Target tahunnya kemungkinan sudah lewat (kita di 2026). → Rekomendasi: sajikan sebagai proyeksi terarah tanpa tahun, atau **omit** demi keamanan; jangan klaim sebagai fakta terkini.
- Catatan: Empat-tahap "kematangan budaya data" di dossier ini adalah **kerangka sintesis** (bukan standar bermerek resmi). Aman dipakai sebagai kerangka praktik, tetapi jangan diklaim sebagai model milik Gartner/SAP.

## Definition snippet draft (40–60 words)

> **Budaya data** (*data-driven culture*) adalah sistem keyakinan dan kebiasaan organisasi yang menjadikan data—bukan intuisi—sebagai rujukan utama dalam pengambilan keputusan. Dalam Business Intelligence, budaya inilah penentu keberhasilan: tanpa kepercayaan pada angka dan literasi data yang memadai, dashboard secanggih apa pun hanya menjadi *shelfware*. Teknologi menyediakan datanya; budaya yang membuat data benar-benar dipakai.
