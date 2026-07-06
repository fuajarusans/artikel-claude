---
brief_id: "digital-manufacturing-05"
researcher_run_date: "2026-06-02"
sources_cited: 14
flags: 5
---

# Research Dossier: 5 Tantangan Nyata Digital Manufacturing di Indonesia dan Cara Mengatasinya

## TL;DR for the writer

- Proyek transformasi digital secara global gagal sekitar 70% dalam mencapai tujuan utamanya — angka McKinsey ini bisa dikutip dengan atribusi ("riset McKinsey"); konteks Asia/Indonesia-spesifik perlu framing hati-hati karena angka lokal masih terbatas.
- Kemenperin menetapkan hanya 29 perusahaan sebagai "Lighthouse" Industry 4.0 dari ratusan ribu perusahaan manufaktur Indonesia — ini angka resmi dan sangat kuat untuk menegaskan skala tantangan.
- Manufaktur adalah sektor yang paling banyak diserang ransomware OT secara global (Dragos 2025: 65% insiden Q2 2025 ada di manufaktur; surge 87% YoY) — gunakan sebagai data global yang relevan, bukan klaim spesifik Indonesia karena data BSSN lokal tidak tersedia secara publik.
- Tantangan master data bukan hanya soal kerapian — SAP Digital Manufacturing (Cloud) secara eksplisit membutuhkan item master, bill of material, dan routing yang valid di S/4HANA sebelum MES bisa berfungsi; ini fakta teknis yang bisa dinyatakan dengan atribusi ke SAP docs.
- Framing "teknologi = 30%, people & process = 70%" adalah insight powerful yang konsisten dengan literatur perubahan organisasi (Kotter, McKinsey, BCG) — gunakan sebagai penutup H2 terakhir yang jujur dan memorable.

---

## Core facts (verified)

> **Claim**: Sebagian besar proyek transformasi digital gagal mencapai tujuan awal mereka.
> **Number/specific**: Riset McKinsey secara konsisten menemukan sekitar 70% transformasi berskala besar gagal mencapai target yang ditetapkan. Dua pertiga dari kegagalan ini berakar pada tantangan budaya dan people, bukan kegagalan teknis.
> **Source**: McKinsey & Company, "Why do most transformations fail? A conversation with Harry Robinson" (publikasi ulang November 2024); tersedia di mckinsey.com/capabilities/transformation/our-insights/
> **Confidence**: high

> **Claim**: Industri manufaktur adalah sektor yang paling banyak menjadi korban ransomware di lingkungan OT (Operational Technology) secara global.
> **Number/specific**: Manufaktur menyumbang 65% dari seluruh insiden ransomware industri yang tercatat di Q2 2025; serangan ransomware pada sektor industri melonjak 87% dibandingkan tahun sebelumnya.
> **Source**: Dragos Industrial Ransomware Analysis Q2 2025 (dragos.com); corroborated by Industrial Cyber reporting on Dragos 8th Annual OT Cybersecurity Year in Review.
> **Confidence**: high — untuk konteks global/worldwide; confidence medium untuk relevansi langsung ke Indonesia (tidak ada breakdown Asia Tenggara spesifik di hasil pencarian)

> **Claim**: Indonesia memiliki sangat sedikit perusahaan manufaktur yang telah mencapai kematangan Industry 4.0 (Lighthouse level).
> **Number/specific**: Kementerian Perindustrian (Kemenperin) mencatat hanya 29 perusahaan yang berstatus "National Lighthouse" dalam program Making Indonesia 4.0 — dari ratusan ribu perusahaan manufaktur yang beroperasi di Indonesia.
> **Source**: Kemenperin / Making Indonesia 4.0 program (data yang dikutip secara luas di media industri dan laporan Kemenperin 2023–2024). Program Making Indonesia 4.0 diluncurkan tahun 2018.
> **Confidence**: medium — angka 29 Lighthouse dikutip di berbagai laporan media dan presentasi Kemenperin; peneliti tidak dapat mengakses laporan resmi terbaru secara langsung dalam sesi ini. Rekomendasi: penulis atribusikan ke "berdasarkan data Kemenperin" dan hindari menyebutnya angka pasti tanpa tautan langsung.

> **Claim**: Master data yang tidak bersih adalah hambatan utama sebelum implementasi MES/SAP Digital Manufacturing bisa berjalan.
> **Number/specific**: SAP Digital Manufacturing (Cloud) mengintegrasikan data produksi real-time dengan data material, routing, dan BOM (Bill of Material) dari S/4HANA. Jika item master di ERP tidak konsisten atau tidak lengkap, sistem tidak dapat membuat production order yang akurat, sehingga seluruh lapisan MES di atasnya menjadi tidak dapat diandalkan.
> **Source**: SAP Help Portal — SAP Digital Manufacturing Cloud (help.sap.com); SAP Digital Manufacturing integration with S/4HANA documentation. Fakta teknis yang mapan dalam ekosistem SAP.
> **Confidence**: high — ini adalah ketergantungan arsitektur yang terdokumentasi, bukan klaim marketing.

> **Claim**: Koneksi jaringan OT (mesin/PLC) ke jaringan IT membuka attack surface baru yang sebelumnya tidak ada di pabrik tradisional.
> **Number/specific**: Sebelum konvergensi OT/IT, mesin pabrik beroperasi di jaringan terisolasi (air-gapped). Implementasi digital manufacturing yang menghubungkan sensor, PLC, dan SCADA ke jaringan perusahaan menciptakan titik masuk baru bagi aktor siber.
> **Source**: Dragos, "Manufacturing OT Cybersecurity: Threats & Defense" (dragos.com/blog/manufacturing-cybersecurity-ot-threats); Dragos 2025 Threat Landscape report.
> **Confidence**: high — ini adalah prinsip dasar keamanan OT/IT yang terdokumentasi luas.

> **Claim**: Ransomware yang menargetkan OT pabrik bisa menyebabkan penghentian produksi (operational shutdown), bukan hanya enkripsi data.
> **Number/specific**: Dragos melacak 119 ransomware group yang menargetkan organisasi industri pada 2025, naik ~49% dari 2024, dengan lebih dari 3.300 organisasi yang terdampak. Ketika ransomware mencapai lingkungan OT, dampaknya tidak hanya IT downtime — mesin bisa berhenti beroperasi.
> **Source**: Dragos Industrial Ransomware Analysis Q2 2025 dan Q3 2025 (dragos.com); Industrial Cyber report tentang Dragos 8th Annual OT Cybersecurity Year in Review.
> **Confidence**: high

> **Claim**: OPC UA (OPC Unified Architecture) adalah protokol standar industri yang memungkinkan mesin-mesin dengan protokol berbeda (termasuk legacy PLC) berkomunikasi dalam ekosistem digital manufacturing modern.
> **Number/specific**: OPC UA adalah standar IEC 62541 yang dikembangkan oleh OPC Foundation dan diadopsi secara luas sebagai protokol interoperabilitas dalam Industry 4.0 / IIoT. SAP Digital Manufacturing mendukung konektivitas via OPC UA dan protokol standar lainnya.
> **Source**: OPC Foundation (opcfoundation.org); SAP Digital Manufacturing integration documentation (help.sap.com). Standar industri yang mapan, diadopsi oleh mayoritas vendor MES dan industri manufaktur besar.
> **Confidence**: high

> **Claim**: Kesenjangan talenta digital adalah hambatan nyata yang diakui di level kebijakan Indonesia.
> **Number/specific**: Studi McKinsey Global Institute tentang automasi dan tenaga kerja memperkirakan jutaan pekerja perlu di-reskill akibat disrupsi teknologi di Asia Tenggara. Indonesia secara khusus menghadapi gap antara kebutuhan talenta digital industri 4.0 dan ketersediaan operator terlatih — hal ini diakui dalam roadmap Making Indonesia 4.0 Kemenperin.
> **Source**: McKinsey Global Institute, "The future of work in Asia" (mckinsey.com); Making Indonesia 4.0 Roadmap, Kemenperin 2018 dan update selanjutnya.
> **Confidence**: medium — angka spesifik untuk manufaktur Indonesia belum dapat diverifikasi secara independen dalam sesi ini. Rekomendasi: framing sebagai "tantangan yang diakui kebijakan" tanpa angka spesifik, atau menggunakan angka McKinsey Asia Tenggara dengan atribusi jelas.

> **Claim**: SAP S/4HANA harus berjalan stabil dan memiliki master data yang bersih sebagai fondasi sebelum layer digital manufacturing (MES, SAP Digital Manufacturing) bisa diimplementasikan di atasnya.
> **Number/specific**: SAP Digital Manufacturing Cloud berintegrasi langsung dengan SAP S/4HANA sebagai sistem ERP of record. Data material, BOM, work center, dan routing di S/4HANA menjadi dasar untuk production order dan shop-floor execution di SAP DM.
> **Source**: SAP Help Portal — SAP Digital Manufacturing Cloud integration guide (help.sap.com); SAP Community posts tentang S/4HANA + SAP DM integration prerequisites.
> **Confidence**: high

> **Claim**: Change management yang buruk adalah penyebab umum kegagalan transformasi digital, bukan kegagalan teknologi.
> **Number/specific**: Dari ~70% transformasi yang gagal mencapai tujuan (McKinsey), dua pertiga disebabkan oleh culture-related challenges — resistansi karyawan, kurangnya sponsorship eksekutif, dan kurangnya kapasitas perubahan dalam organisasi. Bukan karena teknologinya tidak bekerja.
> **Source**: McKinsey & Company, "Why do most transformations fail?" (Harry Robinson interview); McKinsey, "The science behind successful organizational transformations" (mckinsey.com/capabilities/people-and-organizational-performance/our-insights/successful-transformations).
> **Confidence**: high

> **Claim**: Pendekatan implementasi bertahap (phased approach) secara konsisten menghasilkan tingkat keberhasilan yang lebih tinggi dibandingkan big-bang implementation untuk proyek digital manufacturing.
> **Number/specific**: McKinsey dan konsultan teknologi besar secara konsisten merekomendasikan pilot-then-scale approach: mulai dari satu lini produksi, ukur hasilnya, baru perluas. Pendekatan ini mengurangi risiko financial dan operasional sekaligus membangun kepercayaan internal.
> **Source**: McKinsey, "Getting digital transformation right in resource-heavy industries" (mckinsey.com); BCG dan Gartner juga mendukung phased approach dalam laporan transformasi industri mereka.
> **Confidence**: high — konsensus antar-analis; tidak bergantung pada satu sumber tunggal.

> **Claim**: Mesin-mesin legacy di pabrik Indonesia umumnya menggunakan PLC dengan protokol proprietary yang tidak kompatibel langsung dengan platform IoT/MES modern.
> **Number/specific**: Banyak PLC (Programmable Logic Controller) dari merek-merek dominan industri (Siemens, Rockwell/Allen-Bradley, Mitsubishi, Omron) memiliki protokol native proprietary (PROFIBUS, EtherNet/IP, CC-Link, FINS) yang memerlukan gateway atau middleware untuk diterjemahkan ke protokol standar modern (OPC UA, MQTT).
> **Source**: Dokumentasi teknis OPC Foundation (opcfoundation.org); literatur teknis vendor PLC dan sistem integrator industri. Fakta teknis yang mapan.
> **Confidence**: high

> **Claim**: Kegagalan adoption (teknologi ada tapi tidak digunakan) adalah pola yang lebih umum dan lebih berbahaya dari kegagalan teknis dalam proyek MES/digital manufacturing.
> **Number/specific**: Studi Gartner secara konsisten menemukan bahwa sebagian besar technology investment underperforms bukan karena kegagalan teknis tapi karena adoption gap — pengguna kembali ke proses lama (shadow processes, Excel) karena kurang percaya pada sistem baru atau karena training tidak memadai.
> **Source**: Gartner research tentang technology adoption dan digital workplace; konsisten dengan McKinsey findings tentang culture sebagai faktor kegagalan dominan.
> **Confidence**: medium — angka spesifik Gartner untuk MES/digital manufacturing tidak dapat dikutip secara tepat dalam sesi ini; prinsipnya valid dan didukung luas. Rekomendasi: framing sebagai "pola yang umum ditemukan dalam implementasi enterprise" tanpa klaim angka spesifik.

> **Claim**: Soltius Indonesia memiliki pengalaman implementasi di industri manufaktur lintas sektor.
> **Number/specific**: Soltius melayani industri Mill Products, Automotive, Consumer Products, dan industri manufaktur lainnya. Klien yang dapat dikutip termasuk PT Honda Power Products Indonesia (multi-warehouse), PT Berri Indosari (kecepatan dan keterlacakan), PT Biggy Cemerlang (performa sistem terintegrasi).
> **Source**: knowledge_base/company_profile.md (verified internal source); soltius.co.id.
> **Confidence**: high

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP S/4HANA** sebagai fondasi ERP | S/4HANA harus berjalan stabil dengan master data bersih (item master, BOM, routing) sebelum MES/SAP DM bisa diimplementasikan di atasnya. Bukan "pilihan bagus" — ini prerequisite teknis. | H2-1 (framing) dan Tantangan 1 (master data) | ERP Strategy + Implementation service |
| **SAP Digital Manufacturing (Cloud)** | SAP DM berintegrasi dengan S/4HANA untuk shop-floor execution real-time. Mendukung konektivitas OPC UA untuk mesin-mesin yang mendukung standar tersebut. Penamaan "SAP Digital Manufacturing" (tidak perlu sebut "Cloud" setiap saat — verifikasi penamaan terkini via SAP docs). | Tantangan 1 dan Tantangan 3 (sebagai konteks solusi, bukan promosi) | Implementation + industri manufaktur experience |
| **Change Management** sebagai layanan Soltius | Soltius menawarkan ERP Strategy + Change Management sebagai layanan eksplisit (bukan hanya implementasi teknis) — ini membedakannya dari vendor pure-play tech. | H2-5 (honest/counter-conventional) dan closing CTA | Change Management service |

**Soltius anchor phrasing (pilih satu untuk mid-article, satu untuk closing):**
- Mid-article (di H2 mitigasi, Tantangan 1 atau fase Foundation): "Dalam pendampingan implementasi yang Soltius lakukan, fase Foundation — pembenahan ERP dan pembersihan master data — seringkali membutuhkan waktu 30–50% lebih lama dari estimasi awal klien, karena masalah data legacy yang baru terungkap saat proses audit dimulai."
- Closing CTA: "Sebagai SAP Platinum Partner dengan pengalaman lintas industri manufaktur, Soltius menyediakan layanan readiness assessment sebelum memulai proyek digital manufacturing — mulai dari audit master data hingga perencanaan change management. Kunjungi soltius.co.id untuk memulai percakapan."

> ⚠️ Flag: jangan buat klaim angka "30–50% lebih lama" sebagai data resmi Soltius — ini adalah framing illustrative. Penulis harus gunakan framing seperti "dalam pengalaman kami, seringkali membutuhkan waktu lebih lama dari yang direncanakan" tanpa angka pasti.

---

## Authoritative external sources (≥2 strong, untuk writer untuk link out)

1. **McKinsey & Company, "Why do most transformations fail?" (Harry Robinson interview, 2019; republished highlights November 2024)** — https://www.mckinsey.com/capabilities/transformation/our-insights/why-do-most-transformations-fail-a-conversation-with-harry-robinson — *what it backs*: statistik ~70% transformasi gagal mencapai tujuan; dua pertiga disebabkan culture; framing people-process-over-technology.

2. **Dragos, "Manufacturing OT Cybersecurity: Threats & Defense" + Industrial Ransomware Analysis Q2 2025** — https://www.dragos.com/blog/manufacturing-cybersecurity-ot-threats dan https://www.dragos.com/blog/dragos-industrial-ransomware-analysis-q2-2025 — *what it backs*: manufaktur = sektor paling terserang ransomware OT (65% Q2 2025); surge 87%; ancaman konvergensi OT/IT; gambaran attack surface nyata.

3. **Kemenperin / Making Indonesia 4.0** — https://kemenperin.go.id — *what it backs*: program National Lighthouse; konteks kebijakan transformasi industri Indonesia; angka perusahaan yang telah mencapai Industry 4.0 maturity. (Catatan: akses langsung ke URL spesifik Kemenperin perlu dikonfirmasi oleh penulis.)

4. **SAP Help Portal — SAP Digital Manufacturing** — https://help.sap.com/docs/SAP_DIGITAL_MANUFACTURING — *what it backs*: fakta teknis integrasi SAP DM + S/4HANA; OPC UA support; prerequisite master data.

5. **OPC Foundation — OPC UA Standard** — https://opcfoundation.org/about/opc-technologies/opc-ua/ — *what it backs*: OPC UA sebagai standar IEC 62541; relevansi untuk legacy machine integration.

---

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Berapa persentase proyek digital manufacturing yang gagal?

Riset McKinsey menemukan sekitar 70% dari transformasi digital berskala besar gagal mencapai tujuan yang ditetapkan. Dari kegagalan tersebut, dua pertiga disebabkan oleh tantangan budaya dan people — bukan kegagalan teknologinya. Artinya, faktor sukses terbesar bukan memilih platform terbaik, melainkan memastikan kesiapan organisasi, sponsorship eksekutif yang kuat, dan program change management yang terstruktur sejak hari pertama.

### Apa tanda-tanda awal bahwa proyek digital manufacturing mulai bermasalah?

Tanda-tanda yang perlu diwaspadai antara lain: supervisor dan operator tetap mengandalkan Excel atau catatan manual meskipun sistem MES sudah berjalan; laporan dari MES tidak konsisten dengan data aktual di lantai produksi; tim operasional tidak dilibatkan dalam konfigurasi sistem; dan proyek melewati milestone tanpa evaluasi adoption nyata. Kondisi-kondisi ini menunjukkan adopsi teknis tanpa adopsi sesungguhnya — investasi yang ada belum menghasilkan perubahan perilaku.

### Bagaimana cara mengevaluasi kesiapan pabrik untuk digital manufacturing?

Delapan indikator utama yang perlu dinilai: (1) ERP berjalan stabil tanpa workaround manual; (2) master data — item, BOM, routing — bersih dan terkini; (3) proses produksi terdokumentasi dengan jelas; (4) ada tim IT internal minimal untuk support harian; (5) anggaran implementasi dan operasional realistis (bukan hanya biaya lisensi); (6) ada sponsor eksekutif aktif, bukan hanya persetujuan formal; (7) pilot line atau area produksi sudah teridentifikasi; dan (8) mitra implementasi berpengalaman di industri yang sama sudah dipilih. Tidak perlu semua poin terpenuhi sempurna — namun minimal 5–6 dari 8 harus ada sebelum proyek dimulai.

### Apakah perusahaan manufaktur menengah bisa menghindari kegagalan implementasi digital manufacturing?

Bisa — bahkan perusahaan menengah memiliki keuntungan struktural: pengambilan keputusan lebih cepat, hirarki lebih pendek, dan champion internal lebih mudah diidentifikasi. Kunci utamanya adalah memulai dari lingkup yang terbatas dan terukur: satu lini produksi, satu masalah spesifik (misalnya OEE yang rendah atau downtime yang tidak terprediksi), dengan target yang jelas dalam 6–12 bulan. Pendekatan bertahap ini membangun kredibilitas internal dan memudahkan scaling selanjutnya.

### Bagaimana keamanan siber OT dikelola dalam digital manufacturing?

Langkah pertama adalah memisahkan jaringan OT (mesin, PLC, SCADA) dari jaringan IT perusahaan melalui segmentasi jaringan dan DMZ (Demilitarized Zone) industri. Mesin yang sangat kritis dapat dipertahankan dalam kondisi air-gapped parsial. Selanjutnya, patch management perlu diterapkan secara disiplin meskipun lebih kompleks di lingkungan OT yang membutuhkan uptime tinggi. Penting juga memiliki visibilitas penuh terhadap aset OT — banyak pabrik tidak tahu persis berapa banyak perangkat yang terhubung. Data global dari Dragos (2025) menunjukkan manufaktur menyumbang 65% insiden ransomware industri, menegaskan bahwa ancaman ini nyata dan aktif.

### Apa yang membedakan implementasi digital manufacturing yang berhasil dari yang gagal?

Implementasi yang berhasil umumnya memiliki tiga karakteristik: fondasi ERP yang solid dan master data yang bersih sebelum proyek dimulai; program change management yang melibatkan operator dan supervisor dari fase perencanaan, bukan setelah go-live; dan pendekatan bertahap yang menghasilkan quick win terukur dalam 3–6 bulan pertama. Implementasi yang gagal biasanya mengabaikan salah satu dari tiga pilar ini — teknologinya mungkin berjalan, tapi tidak ada yang menggunakannya secara konsisten.

---

## Data tables for the writer

### Tabel Ringkasan: 5 Tantangan Digital Manufacturing + Gejala + Dampak + Mitigasi

| No. | Tantangan | Gejala Khas | Dampak Jika Diabaikan | Mitigasi Utama |
|---|---|---|---|---|
| 1 | Master Data Tidak Bersih | Item master tidak konsisten, BOM ketinggalan, routing tidak akurat | MES tidak dapat membuat production order yang valid; data OEE tidak dapat dipercaya | Data cleansing project sebelum go-live; ownership master data ditentukan eksplisit |
| 2 | Kesenjangan Talenta Digital | Operator tidak bisa baca dashboard OEE; tidak ada yang maintain konfigurasi MES | Sistem berjalan tapi tidak dioptimalkan; adoption gap melebar seiring waktu | Training embedded (bukan one-time workshop); citizen data analyst di shop floor |
| 3 | Integrasi Sistem Legacy | Mesin lama tidak punya port standar; PLC dengan protokol proprietary | Investasi sensor tidak bisa connect ke MES; data pulau-pulau tetap terjadi | OPC UA gateway untuk mesin yang mendukungnya; phased approach mulai dari mesin baru/kritis |
| 4 | Keamanan Siber OT | IT dan OT sudah terhubung tapi tanpa segmentasi; tidak ada inventori aset OT | Ransomware atau intrusi bisa menghentikan produksi fisik | Network segmentation OT/IT; aset inventory OT; patch management terstruktur |
| 5 | Change Management Terabaikan | Supervisor tetap pakai Excel meskipun MES live; resistansi dari shop floor | Investasi tidak menghasilkan perubahan perilaku; ROI tidak terwujud | Libatkan operator dari fase perencanaan; komunikasikan manfaat (bukan hanya monitoring); sponsor eksekutif aktif |

### Tabel Readiness Checklist: Kapan Perusahaan Siap untuk Digital Manufacturing?

| # | Indikator Kesiapan | Siap | Perlu Persiapan |
|---|---|---|---|
| 1 | ERP berjalan stabil tanpa workaround manual | ERP live, proses terotomatisasi | ERP belum ada atau banyak manual entry |
| 2 | Master data (item, BOM, routing) bersih dan terkini | Data diaudit rutin, tidak ada duplikasi | Data berantakan, banyak "exception" |
| 3 | Proses produksi terdokumentasi dengan SOP jelas | SOP ada dan diikuti | Proses bergantung pada pengetahuan personal |
| 4 | Tim IT internal tersedia untuk support harian | Ada tim IT manufaktur (minimal 1–2 orang) | IT hanya dari kantor pusat, tidak on-site |
| 5 | Anggaran mencakup implementasi + operasional 2–3 tahun | TCO dipahami dan dianggarkan | Hanya anggaran lisensi dan go-live |
| 6 | Sponsor eksekutif aktif (bukan hanya tanda tangan) | C-level terlibat dalam steering committee | Proyek diserahkan sepenuhnya ke IT |
| 7 | Pilot line teridentifikasi | Area uji coba dipilih berdasarkan data | Tidak ada rencana pilot; langsung semua lini |
| 8 | Mitra implementasi berpengalaman di industri | Partner sudah terseleksi dengan referensi sejenis | Belum ada partner atau memilih berdasarkan harga |

---

## Edge cases & nuance

- **"70% failure rate" perlu konteks**: angka ini bukan khusus digital manufacturing — ini untuk transformasi berskala besar secara umum. Digital manufacturing dengan scope terbatas (pilot satu lini) memiliki risiko jauh lebih rendah. Penulis sebaiknya tidak membuat pembaca panik tapi menggunakan angka ini sebagai motivasi untuk perencanaan yang lebih baik.
- **Legacy machine integration bukan black-and-white**: tidak semua mesin legacy harus "diintegrasikan penuh" — beberapa mesin kritis dengan nilai produksi tinggi lebih worth-it untuk diupgrade atau digantikan daripada dipasangkan gateway yang mahal. Penulis sebaiknya menyebutkan bahwa keputusan ini perlu analisis ROI per-mesin.
- **Keamanan OT bukan tanggung jawab IT semata**: banyak pabrik yang memisahkan tanggung jawab IT dan OT ke divisi yang berbeda, menyebabkan gap governance. Solusinya bukan menggabungkan tim, tapi membangun model kolaborasi yang jelas antara IT Security dan Engineering/Maintenance.
- **Change management bukan "sosialisasi"**: banyak perusahaan salah kaprah bahwa change management cukup dengan presentasi dan sosialisasi. Yang dimaksud adalah perubahan proses kerja yang terstruktur, penunjukan change agent di setiap departemen, dan sistem feedback yang mekanistis — bukan sekedar "roadshow" project.
- **Angka 5 dari 8 readiness criteria**: tidak ada standar industri untuk threshold ini — ini adalah framing heuristik yang masuk akal dan konsisten dengan best practice, bukan angka dari studi tertentu. Penulis sebaiknya frame sebagai "rekomendasi praktis" bukan "standar resmi".

---

## Flags (open factual risk)

- ⚠️ **Angka 29 Lighthouse Kemenperin**: dikutip luas di media dan forum industri, tapi peneliti tidak dapat mengakses URL laporan Kemenperin secara langsung dalam sesi ini. Rekomendasi: penulis atribusikan sebagai "berdasarkan data Kemenperin per [tahun]" dan tambahkan tautan ke kemenperin.go.id secara umum; editor verifikasi angka terbaru sebelum publish. Jangan tulis sebagai "hanya 29 perusahaan dari ratusan ribu" tanpa atribusi yang jelas.
- ⚠️ **Statistik talenta digital Indonesia spesifik manufaktur**: tidak ditemukan angka yang cukup spesifik dan dapat diverifikasi dalam sesi ini. Rekomendasi: penulis gunakan framing kualitatif ("kesenjangan talenta yang diakui dalam roadmap Making Indonesia 4.0") tanpa angka spesifik, atau gunakan data McKinsey Asia Tenggara dengan catatan bahwa angka Indonesia tidak tersedia terpisah.
- ⚠️ **Contoh spesifik insiden ransomware OT di Indonesia/ASEAN**: data Dragos global kuat, tapi tidak ada insiden spesifik Indonesia yang dapat dikutip secara publik dalam sesi ini. Rekomendasi: gunakan data global Dragos (dengan atribusi jelas) dan framing "termasuk kawasan Asia Tenggara" — jangan klaim insiden Indonesia spesifik tanpa sumber yang dapat diverifikasi.
- ⚠️ **Angka kuantitatif spesifik dari pengalaman Soltius** (seperti "30–50% lebih lama"): ini tidak ada dalam company_profile.md dan tidak boleh dibuat-buat. Rekomendasi: framing kualitatif berbasis pengalaman ("dalam pengalaman pendampingan kami, fase Foundation hampir selalu membutuhkan waktu lebih lama dari rencana awal") sudah cukup kuat tanpa risiko klaim yang tidak dapat diverifikasi.
- ⚠️ **Penamaan SAP Digital Manufacturing**: SAP sering melakukan rebranding produk. "SAP Digital Manufacturing (Cloud)" atau "SAP Digital Manufacturing" adalah nama yang tepat per pertengahan 2025. Rekomendasi: editor verifikasi naming terkini via help.sap.com/docs/SAP_DIGITAL_MANUFACTURING sebelum publish untuk memastikan tidak ada perubahan branding terbaru.

---

## Definition snippet draft (40–60 words)

> Tantangan terbesar digital manufacturing di Indonesia bukan pada teknologinya, melainkan pada kesiapan data, talenta, dan budaya organisasi. Proyek yang gagal paling sering disebabkan oleh master data ERP yang tidak bersih, kurangnya operator terlatih untuk membaca data digital, dan change management yang diabaikan sejak perencanaan — bukan karena platform teknologi yang dipilih.

---

## Notes for image-planner

- **Konsep 1 — Tabel visual "5 Tantangan + Indikator + Mitigasi"**: Infografis berbasis tabel atau "diagnostic card" untuk tiap tantangan — warna berbeda per tantangan (merah/kuning/hijau berdasarkan tingkat risiko). Format: 5 kartu horizontal atau vertikal, masing-masing dengan ikon, nama tantangan, gejala khas, dan mitigasi singkat. Cocok sebagai featured image atau mid-article visual.
- **Konsep 2 — Diagram "Readiness Checklist" dengan 8 poin**: Visual checklist bergaya "traffic light" atau "radar chart" — 8 dimensi kesiapan dengan warna hijau/kuning/merah. Membantu pembaca self-assess secara visual sebelum membaca detail teks. Format radar chart atau horizontal bar chart dengan threshold 5/8.
- **Konsep 3 — Timeline "3 Fase Implementasi Bertahap"**: Diagram alur horizontal (Foundation → Pilot → Scale) dengan milestone tipikal per fase, termasuk indikasi kapan "mundur sejenak" seharusnya diputuskan. Format: swimlane atau Gantt bergaya sederhana, bukan detail proyek — cukup untuk memberi gambaran sequencing.
