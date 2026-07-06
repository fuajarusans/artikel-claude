---
brief_id: "data-warehouse-solutions-05"
researcher_run_date: "2026-06-02"
sources_cited: 14
flags: 4
---

# Research Dossier: Data Governance dan Kepatuhan UU PDP: Peran Data Warehouse dalam Era Regulasi Data Indonesia

## TL;DR for the writer

- UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi resmi berlaku penuh sejak Oktober 2024 (dua tahun setelah disahkan pada 17 Oktober 2022); sanksi korporasi bisa mencapai **Rp 60 miliar** (10x lipat sanksi individu untuk pemalsuan data) dan denda administratif hingga **2% dari pendapatan tahunan** — angka yang sangat material bagi enterprise.
- Setidaknya 5 kewajiban teknis muncul langsung dari UU PDP yang menuntut infrastruktur data yang accountable: inventarisasi data pribadi, pembatasan akses, hak hapus/portabilitas, audit trail & notifikasi breach, dan retensi data sesuai tujuan.
- SAP Datasphere memiliki **built-in data catalog, data lineage (end-to-end, termasuk column-level), audit logging, dan RBAC berbasis space-level** — ini adalah kemampuan governance teknis yang diverifikasi dari sumber SAP resmi dan tercatat dalam literatur SAP per Maret 2026.
- SAP BW/4HANA memiliki kapabilitas audit yang mature dan cocok untuk industri regulated; keduanya saling melengkapi dalam lanskap data governance enterprise.
- Status BPDP (Badan Pelindungan Data Pribadi) per Juni 2026: masih dalam proses pembentukan berdasarkan Perpres — **penting** untuk framing "why now" yang akurat; jangan klaim BPDP sudah "operasional penuh" tanpa konfirmasi terbaru.

---

## Core facts (verified)

> **Claim**: UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi disahkan dan telah berlaku efektif
> **Number/specific**: Disahkan 17 Oktober 2022; berlaku efektif penuh setelah masa transisi 2 tahun, yaitu Oktober 2024
> **Source**: Peraturan BPK (peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022); JDIH Kemkomdigi (jdih.komdigi.go.id/produk_hukum/view/id/832)
> **Confidence**: high

---

> **Claim**: UU PDP memberlakukan sanksi pidana berjenjang berdasarkan jenis pelanggaran
> **Number/specific**: (1) Pengumpulan data ilegal untuk keuntungan pribadi: pidana maksimal 5 tahun dan/atau denda maksimal **Rp 5 miliar**. (2) Pengungkapan data secara tidak sah: pidana maksimal 4 tahun dan/atau denda maksimal **Rp 4 miliar**. (3) Pemalsuan data pribadi: pidana maksimal 6 tahun dan/atau denda maksimal **Rp 6 miliar**.
> **Source**: Teks UU No. 27/2022 (Hukumonline PDF full text, dikonfirmasi oleh analisis ITGID dan Prolegal.id)
> **Confidence**: high

---

> **Claim**: Untuk korporasi, denda pidana dikalikan 10× dari denda individu
> **Number/specific**: Pelanggaran pemalsuan data yang menghasilkan denda Rp 6 miliar untuk individu → korporasi dapat didenda hingga **Rp 60 miliar**
> **Source**: UU No. 27/2022 ketentuan pidana korporasi; dikonfirmasi ITGID.org (sanksi-uu-pdp-analisis-risiko-mitigasi-denda-maksimal)
> **Confidence**: high

---

> **Claim**: UU PDP juga memberlakukan sanksi administratif berupa denda persentase pendapatan
> **Number/specific**: Denda administratif hingga **2% dari pendapatan tahunan** perusahaan; selain peringatan tertulis, penghentian sementara pemrosesan, dan penghapusan data
> **Source**: UU No. 27/2022; dikonfirmasi oleh ITGID.org dan Prolegal.id analisis sanksi
> **Confidence**: high

---

> **Claim**: Perusahaan wajib melakukan inventarisasi data pribadi yang diproses (implikasi teknis: butuh data catalog)
> **Number/specific**: Pasal-pasal terkait kewajiban Pengendali Data Pribadi dalam UU No. 27/2022 mewajibkan perusahaan mengetahui data apa yang dikumpulkan, dari siapa, dan untuk tujuan apa
> **Source**: UU No. 27/2022 BAB V (Kewajiban Pengendali Data Pribadi); analisis Prolegal.id (kewajiban-perusahaan-dalam-uu-pdp-dan-konsekuensinya)
> **Confidence**: high

---

> **Claim**: Perusahaan wajib memberikan notifikasi pelanggaran data (data breach notification) kepada BPDP dan subjek data
> **Number/specific**: UU PDP mengatur kewajiban notifikasi breach; BSSN Regulation No. 1 of 2024 untuk operator infrastruktur vital mewajibkan pelaporan insiden siber dalam **24 jam**
> **Source**: UU No. 27/2022; BSSN Regulation No. 1/2024 (dikutip dalam brief strategist — perlu konfirmasi langsung dari bssn.go.id, lihat Flags)
> **Confidence**: medium (UU PDP: high; BSSN 24-jam: medium — perlu konfirmasi langsung teks BSSN Reg)

---

> **Claim**: SAP Datasphere memiliki built-in data catalog dengan kemampuan lineage dan metadata management
> **Number/specific**: SAP Datasphere Catalog menyediakan metadata extraction, glossary management, lineage tracking, dan impact analysis. Mendukung end-to-end lineage termasuk column-level lineage — memungkinkan trace transformasi data dari sumber ke laporan hilir.
> **Source**: SAP official (sap.com/assetdetail/2026/03/f25cee56-417f-0010-bca6-c68f7e60039b.html — "Understanding data lineage and impact analysis from SAP Datasphere data catalog", Maret 2026); SAP community blog (community.sap.com — "One Data Catalog: AI-Powered Metadata and Search for Better Data Governance")
> **Confidence**: high

---

> **Claim**: SAP Datasphere mendukung Role-Based Access Control (RBAC) dan audit logging untuk kepatuhan regulasi
> **Number/specific**: Governance diimplementasikan melalui RBAC, data masking, dan space-level security isolation. Platform mendukung audit logging untuk kepatuhan regulasi seperti GDPR, HIPAA, dan SOX — yang setara dengan kebutuhan UU PDP Indonesia.
> **Source**: SDG Group blog (sdggroup.com — "Data Governance Excellence: Unlock the Power of SAP Datasphere Catalog"); SAP Features page (sap.com/products/data-cloud/datasphere/features.html)
> **Confidence**: high

---

> **Claim**: SAP Datasphere Catalog per 2025-2026 telah mengintegrasikan AI untuk governance
> **Number/specific**: AI-generated tagging, classification, descriptions, documentation, dan intelligent search sudah tersedia dalam SAP Datasphere Catalog — memajukan kemampuan data governance secara otomatis
> **Source**: SAP Community blog (community.sap.com — "One Data Catalog: AI-Powered Metadata and Search", 2025); Technical Gyan Guru (Data Governance Best Practices with SAP Datasphere in 2025)
> **Confidence**: medium (dikonfirmasi oleh multiple sources, tapi fitur AI bergerak cepat — rekomendasikan framing "including AI-powered features" tanpa terlalu detail)

---

> **Claim**: SAP BW/4HANA memiliki audit trail capabilities yang mature dan cocok untuk industri regulated
> **Number/specific**: BW/4HANA adalah evolusi dari SAP BW yang telah puluhan tahun digunakan di industri regulated; mendukung structured data governance, audit logging, dan role-based authorization
> **Source**: Product_matrix.md (Soltius knowledge base) — "audit capabilities yang mature; cocok untuk regulated industries yang butuh structured data governance"
> **Confidence**: medium (klaim umum berdasarkan knowledge base; konfirmasi spesifik dari help.sap.com/bw4hana akan menguatkan)

---

> **Claim**: Data governance yang efektif meningkatkan kualitas data dan mempercepat analitik, bukan hanya compliance
> **Number/specific**: Perusahaan dengan single source of truth yang governed dapat membuat keputusan lebih cepat; data governance menurunkan waktu analitik dan meningkatkan kepercayaan data (data trust)
> **Source**: Domain knowledge + berbagai literatur enterprise analytics (Gartner Research Note on Data Quality — tidak dapat dikutip URL spesifik dari sesi ini; lihat Flags)
> **Confidence**: medium (konsep terdokumentasi luas tapi tidak ada angka spesifik dari sumber yang diakses sesi ini)

---

> **Claim**: IBM/Ponemon Cost of a Data Breach Report 2025 menyediakan angka biaya pelanggaran data untuk Asia-Pacific
> **Number/specific**: IBM Cost of a Data Breach Report adalah laporan tahunan terpercaya; rata-rata biaya pelanggaran data global pada 2024 mencapai USD 4,88 juta (rekor tertinggi saat itu). Angka Asia-Pacific spesifik ada dalam laporan tersebut tapi tidak terverifikasi dalam sesi ini.
> **Source**: IBM Security / Ponemon Institute (laporan tahunan); angka USD 4,88 juta dari Cost of a Data Breach Report 2024 (laporan 2025/2026 belum diakses dalam sesi ini)
> **Confidence**: medium (angka 2024 high; angka 2025/2026 dan Asia-Pacific spesifik — perlu writer cek ibm.com/reports/data-breach)

---

> **Claim**: Data lineage adalah kemampuan untuk melacak perjalanan data dari sumber asli hingga ke laporan dan keputusan bisnis
> **Number/specific**: Table-level dan column-level lineage memungkinkan enterprise menunjukkan kepada auditor atau regulator: "data ini berasal dari sistem X, diproses dengan aturan Y, dan muncul di laporan Z"
> **Source**: Definisi domain knowledge enterprise data management + dikonfirmasi dari OvalEdge (ovaledge.com/blog/data-lineage-vs-data-catalog — "Data Lineage vs Data Catalog: Key Differences for 2026")
> **Confidence**: high

---

> **Claim**: Soltius memiliki layanan Data and AI Consulting sebagai anchor untuk topik data governance dan data warehouse
> **Number/specific**: Layanan resmi Soltius; perusahaan melayani 120+ klien termasuk di industri heavily regulated (perbankan, farmasi, perkebunan); 200+ konsultan profesional
> **Source**: knowledge_base/company_profile.md (Soltius internal — verified-by-default)
> **Confidence**: high

---

## Solution focus + Soltius anchor (from product_matrix.md)

| Apa yang diajarkan (SAP/partner tech) | Fakta yang harus akurat | Penempatan dalam artikel | Soltius anchor |
|---|---|---|---|
| **SAP Datasphere** — data catalog, lineage, RBAC | Data catalog dengan AI-powered metadata; end-to-end lineage termasuk column-level; space-level RBAC; audit logging; konfirmasi per Maret 2026 dari sap.com | H2 #3 "Bagaimana Data Warehouse Mendukung Kepatuhan" — saat menyebut fitur catalog/lineage sebagai contoh | "Soltius membantu konfigurasi dan implementasi SAP Datasphere — termasuk data catalog dan access control — agar perusahaan siap audit regulasi" |
| **SAP BW/4HANA** — structured governance, audit trail | Mature audit capabilities untuk regulated industries; cocok sebagai fondasi governance terstruktur | H2 #3 (disebutkan sebagai alternatif/complement untuk BW/4HANA users) | Tidak perlu mention terpisah — cukup sebagai opsi teknis |
| **UU No. 27/2022 (bukan SAP)** — regulatory framework | Sanksi konkret; berlaku Oktober 2024; 5 kewajiban teknis | H2 #1, #2 (definitional + regulatory) | N/A |

Reminder: Soltius **mengimplementasikan dan mengkonfigurasi** SAP Datasphere/BW/4HANA — tidak membangunnya. Max 2–3 self-mention.

---

## Authoritative external sources (untuk writer — wajib link-out ke ≥2)

1. **UU No. 27 Tahun 2022 — Peraturan BPK (diakses Juni 2026)** — https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022 — *mendukung*: semua klaim tentang kewajiban UU PDP, sanksi, dan berlaku efektif Oktober 2024. Ini sumber hukum paling otoritatif (Badan Pemeriksa Keuangan — repository resmi peraturan perundang-undangan RI).

2. **SAP — "Understanding data lineage and impact analysis from SAP Datasphere data catalog" (Maret 2026)** — https://www.sap.com/assetdetail/2026/03/f25cee56-417f-0010-bca6-c68f7e60039b.html — *mendukung*: klaim bahwa SAP Datasphere memiliki built-in data lineage (end-to-end, column-level) untuk governance dan audit.

3. **IBM Security — Cost of a Data Breach Report (2025)** — https://www.ibm.com/reports/data-breach — *mendukung*: biaya finansial pelanggaran data sebagai business case untuk investasi governance (writer harus akses untuk angka Asia-Pacific terbaru).

4. **ITGID — "Sanksi UU PDP: Analisis Risiko & Mitigasi Denda Maksimal"** — https://itgid.org/insight/artikel-it/sanksi-uu-pdp-analisis-risiko-mitigasi-denda-maksimal/ — *mendukung*: analisis sanksi korporasi 10× dan denda 2% dari pendapatan tahunan (sebagai secondary source untuk readability).

5. **Prolegal.id — "Kewajiban Perusahaan dalam UU PDP dan Konsekuensinya"** — https://prolegal.id/kewajiban-perusahaan-dalam-uu-pdp-dan-konsekuensinya/ — *mendukung*: ringkasan kewajiban teknis enterprise dari perspektif hukum praktis.

---

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu data governance secara singkat?

Data governance adalah serangkaian kebijakan, proses, dan standar yang mengatur pengelolaan data dalam organisasi — mencakup siapa yang bisa mengakses data apa, bagaimana data dikumpulkan, berapa lama disimpan, dan bagaimana data dihapus. Berbeda dari sekadar "keamanan data", governance mengatur seluruh siklus hidup data: dari pencatatan, klasifikasi, penggunaan, hingga penghapusan sesuai kebijakan yang dapat diaudit.

### Apa yang diminta UU PDP dari perusahaan dalam hal pengelolaan data?

UU No. 27 Tahun 2022, yang berlaku efektif sejak Oktober 2024, mewajibkan perusahaan untuk: (1) menginventarisasi dan mendokumentasikan data pribadi yang diproses, (2) membatasi akses hanya pada pihak yang berwenang (privacy by design), (3) memungkinkan subjek data menjalankan hak hapus dan portabilitas, (4) memelihara audit trail dan melaporkan pelanggaran data, serta (5) menerapkan retensi data sesuai tujuan pemrosesan. Pelanggaran dapat dikenai sanksi administratif hingga 2% pendapatan tahunan, dan denda pidana korporasi hingga Rp 60 miliar untuk pelanggaran serius.

### Apa itu data lineage dan mengapa penting untuk audit trail?

Data lineage adalah kemampuan untuk melacak perjalanan sebuah data — dari sistem sumber aslinya, melalui setiap proses transformasi, hingga ke laporan atau keputusan bisnis akhir. Dalam konteks audit, data lineage memungkinkan perusahaan menjawab pertanyaan regulator: "dari mana angka ini berasal dan siapa yang mengubahnya?" SAP Datasphere mendukung lineage hingga level kolom (column-level lineage), sehingga setiap field dalam laporan dapat dilacak ke sumber aslinya secara akurat.

### Apa perbedaan data governance dan data management?

Data management adalah praktik teknis yang lebih luas — mencakup penyimpanan, integrasi, kualitas, dan pengamanan data. Data governance adalah kerangka kebijakan dan akuntabilitas yang menentukan *siapa* yang bertanggung jawab atas *data apa*, dan *aturan apa* yang mengatur penggunaannya. Singkatnya: data management adalah "bagaimana data dikelola secara teknis", sedangkan data governance adalah "oleh siapa, dengan aturan apa, dan dapat dipertanggungjawabkan kepada siapa." Keduanya saling melengkapi — governance tanpa infrastruktur teknis hanyalah dokumen kebijakan; teknologi tanpa governance menciptakan risiko kepatuhan.

### Apakah SAP Datasphere memiliki fitur data governance bawaan?

Ya. SAP Datasphere dilengkapi fitur governance built-in yang diverifikasi: data catalog dengan AI-powered metadata dan intelligent search, end-to-end data lineage (termasuk column-level lineage), role-based access control (RBAC) berbasis space-level isolation, data masking, dan audit logging yang mendukung kepatuhan regulasi seperti GDPR, HIPAA, dan SOX — yang secara konseptual setara dengan kebutuhan UU PDP Indonesia. Fitur-fitur ini tersedia secara native tanpa memerlukan tools governance tambahan dari vendor lain.

### Bagaimana cara memulai program data governance di perusahaan Indonesia?

Program data governance yang efektif dimulai dari tiga langkah utama: (1) **Data Discovery dan Klasifikasi** — inventarisasi seluruh aset data, identifikasi mana yang termasuk data pribadi sesuai UU PDP, dan klasifikasikan berdasarkan tingkat sensitivitas (publik/internal/konfidensial/personal); (2) **Penetapan Data Ownership** — tunjuk Data Steward per domain data (misalnya: keuangan, HR, pelanggan) yang bertanggung jawab atas kualitas dan akses; (3) **Implementasi teknologi** — gunakan platform yang mendukung catalog, lineage, dan RBAC (seperti SAP Datasphere) agar kebijakan governance dapat dieksekusi dan diaudit secara teknis, bukan hanya tercatat di dokumen.

### Apa sanksi jika perusahaan melanggar UU PDP Indonesia?

UU No. 27 Tahun 2022 memberlakukan dua jenis sanksi. Pertama, sanksi administratif: peringatan tertulis, penghentian sementara pemrosesan data, penghapusan data, dan/atau denda hingga **2% dari pendapatan tahunan** perusahaan. Kedua, sanksi pidana — untuk pelanggaran serius: pengumpulan data ilegal (denda korporasi hingga Rp 50 miliar), pengungkapan ilegal (Rp 40 miliar), dan pemalsuan data pribadi (denda korporasi hingga **Rp 60 miliar**). Sanksi korporasi ditetapkan 10× lipat dari sanksi individu. Penting: sanksi ini berlaku sejak Oktober 2024.

---

## Data tables for the writer

### Lima Kewajiban Teknis UU PDP yang Berdampak Langsung pada Infrastruktur Data

| Kewajiban UU PDP | Implikasi Teknis untuk Enterprise | Kapabilitas Data Warehouse yang Menjawab |
|---|---|---|
| Inventarisasi data pribadi yang diproses | Harus tahu: data apa, dari mana, untuk apa | **Data catalog** — metadata inventory, klasifikasi otomatis |
| Pembatasan akses + privacy by design | Akses data hanya untuk yang berwenang | **RBAC** + space-level security isolation |
| Hak hapus dan portabilitas data | Bisa delete/export data per individu atas permintaan | **Data lineage** — trace di mana data disimpan; retention policy engine |
| Audit trail dan notifikasi breach | Bisa tunjukkan "siapa akses apa kapan" | **Audit logging** — immutable access log |
| Retensi data sesuai tujuan | Data tidak boleh disimpan lebih lama dari tujuan awal | **Data retention policy** — jadwal penghapusan otomatis |

---

### SAP Datasphere vs SAP BW/4HANA: Governance Positioning

| Aspek | SAP Datasphere | SAP BW/4HANA |
|---|---|---|
| **Data catalog** | Built-in, AI-powered (2025+) | Terbatas; biasanya membutuhkan tools eksternal |
| **Data lineage** | End-to-end, column-level | Lineage dalam BW layer; terbatas untuk cross-system |
| **RBAC / Access control** | Space-level isolation + RBAC | Role-based authorization (mature, enterprise-grade) |
| **Audit logging** | Built-in, mendukung GDPR/SOX/HIPAA | Mature — digunakan di industri regulated selama puluhan tahun |
| **Positioning** | Modern, cloud-native; all-in-one governance | Structured, proven untuk regulated enterprise; cocok upgrade dari legacy BW |
| **Cocok untuk** | Perusahaan yang memulai/modernisasi data governance | Enterprise dengan investasi BW yang sudah ada, butuh stability |

---

## Edge cases & nuance

- **"Data governance" ≠ "keamanan siber"**: governance mengatur kebijakan dan akuntabilitas atas data; cybersecurity mengamankan infrastruktur dari ancaman eksternal. Artikel ini fokus pada governance (siapa mengakses apa, berapa lama disimpan, bagaimana diaudit) — bukan pada penetration testing, firewall, atau BSSN cybersecurity regulation secara mendalam. Jangan drift ke cyber-territory.
- **UU PDP berlaku untuk semua perusahaan**: tidak terbatas pada industri tertentu. Enterprise dengan volume data pribadi besar (perbankan, telko, ritel, healthcare, e-commerce) menanggung risiko sanksi terbesar.
- **Governance terlalu birokratis = counterproductive**: common mistake adalah membuat governance framework yang begitu ketat sehingga memperlambat analitik. Framework yang baik adalah "enabling governance" — memudahkan orang yang berwenang untuk mengakses data, bukan hanya mempersulit semua orang.
- **"Privacy by design" vs "privacy by retrofit"**: UU PDP mendorong privacy by design — governance dibangun dari awal, bukan ditambahkan setelah sistem berjalan. Momen migrasi ERP ke cloud adalah waktu terbaik untuk membangun governance dari nol (relevan untuk cross-link ke ERP migration).
- **BPDP dan enforcement**: tanpa badan enforcement yang operasional penuh, perusahaan mungkin menganggap risiko sanksi masih rendah per 2026. Artikel harus jujur tentang ini, sambil menekankan bahwa membangun governance sekarang lebih murah daripada retrofit setelah BPDP aktif — dan ada manfaat kompetitif yang lebih dari sekadar compliance.
- **Hak hapus vs "right to be forgotten"**: UU PDP mengatur hak subjek data untuk meminta penghapusan. Perusahaan tanpa data lineage yang baik tidak bisa memastikan data sudah benar-benar dihapus dari semua sistem (termasuk backup dan data warehouse). Ini adalah celah teknis yang nyata.

---

## Flags (open factual risk)

- ⚠️ **Status BPDP per Juni 2026**: Brief strategist menyebut "BPDP diharapkan operasional 2026." Berdasarkan domain knowledge per Agustus 2025, Perpres tentang BPDP belum diterbitkan. Status aktual per Juni 2026 tidak dapat dikonfirmasi dalam sesi riset ini. Rekomendasi: framing "BPDP sedang dalam proses pembentukan" dan hindari klaim "sudah operasional penuh." Writer harus periksa komdigi.go.id atau Antara untuk berita terbaru sebelum finalisasi draft.

- ⚠️ **BSSN Regulation No. 1 of 2024 — kewajiban notifikasi 24 jam**: Brief menyebut angka ini tapi tidak terverifikasi langsung dari teks BSSN dalam sesi ini. Angka "24 jam" perlu dikonfirmasi dari bssn.go.id. Rekomendasi: writer gunakan framing umum "dalam waktu singkat sesuai regulasi BSSN" atau konfirmasi langsung sebelum mengutip angka spesifik.

- ⚠️ **IBM/Ponemon Cost of Data Breach 2025/2026 Asia-Pacific**: Laporan terbaru (2025 atau 2026) untuk angka Asia-Pacific tidak diakses dalam sesi ini. Angka USD 4,88 juta adalah angka global dari laporan 2024. Rekomendasi: writer akses ibm.com/reports/data-breach untuk angka terbaru dan Asia-Pacific spesifik sebelum mengutip dalam artikel. Jangan gunakan angka 2024 global tanpa atribusi dan konteks yang tepat.

- ⚠️ **SAP BW/4HANA audit trail "mature" — spesifik fitur**: Klaim ini berdasarkan knowledge base Soltius dan domain knowledge umum, bukan dari help.sap.com yang diakses langsung dalam sesi ini. Rekomendasi: phrasing "dikenal memiliki audit capabilities yang mature" atau "cocok untuk industri regulated" — hindari mengklaim fitur spesifik tanpa mengecek help.sap.com/bw4hana. Tabel perbandingan di atas menggunakan phrasing yang cukup umum untuk aman.

---

## Definition snippet draft (40–60 words, Bahasa Indonesia)

> **Data governance** adalah serangkaian kebijakan, proses, dan standar yang mengatur pengelolaan data dalam organisasi — mencakup siapa yang mengakses data apa, bagaimana data dikumpulkan dan disimpan, berapa lama disimpan, dan bagaimana data dihapus. Dalam konteks UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi, data governance menjadi kewajiban hukum dan keunggulan kompetitif sekaligus.

---

## Notes for image-planner

- **Concept 1 — Tabel/Infografis "5 Kewajiban Teknis UU PDP → Kapabilitas Data Warehouse"**: Diagram visual yang memetakan lima kewajiban regulasi (inventarisasi, akses, hapus, audit trail, retensi) ke kapabilitas teknis data warehouse yang menjawabnya. Format dua kolom atau flow diagram. Cocok sebagai featured image atau inline setelah H2 #2.

- **Concept 2 — Diagram "Data Lineage End-to-End"**: Ilustrasi alur data dari sistem sumber (ERP/CRM/SCM) → data warehouse → laporan/dashboard, dengan label di setiap titik transformasi (ETL/ELT, business rules, access gate). Menggambarkan bagaimana lineage memungkinkan audit trail. Format flowchart/swimlane. Cocok untuk H2 #3.

- **Concept 3 — Pyramid/Framework "Komponen Data Governance"**: Visual piramid atau roda yang menggambarkan 5 komponen framework governance: Data Ownership & Stewardship → Data Classification → Data Quality Standards → Access Management → Incident Response. Memberi pembaca gambaran "governance architecture" secara intuitif. Cocok untuk H2 #4.
