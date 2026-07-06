---
brief_id: "sap-clean-core-04"
researcher_run_date: "2026-06-08"
sources_cited: 18
flags: 5
---

# Research Dossier: Memilih Partner Implementasi SAP untuk Clean Core: Pertanyaan yang Wajib Diajukan

## TL;DR for the writer

- Clean core bukan sekadar keputusan teknologi — ia adalah **disiplin** yang sebagian besar hidup atau mati di tangan partner implementasi. Jika partner cenderung menyetujui setiap permintaan kustomisasi, hasilnya adalah "dirty core di cloud", bukan clean core sejati.
- SAP sendiri menyatakan bahwa **75–80% proses bisnis** di semua perusahaan hampir identik dan seharusnya berjalan standar; hanya 20–25% yang memerlukan kustomisasi sebagai pembeda kompetitif — fondasi argumen fit-to-standard.
- Tier **SAP Platinum Partner** adalah level tertinggi di SAP PartnerEdge dan **hanya diberikan by invitation**; kriteria meliputi ribuan konsultan bersertifikat SAP, kompetensi solusi berganda, dan komitmen pendapatan besar ke SAP. Penting: tier saja tidak cukup — kecocokan metode dan disiplin clean core partner-lah yang menentukan.
- SAP telah mewajibkan (per April 2024) **sertifikasi ulang tahunan** bagi semua konsultan partner dalam peran kunci di proyek RISE with SAP; ini sinyal bahwa SAP serius menjaga kualitas ekosistem partnernya.
- **United VARs** adalah satu-satunya aliansi partner SAP Platinum di dunia: 70+ anggota elite, hadir di 100+ negara, lebih dari 10.000 implementasi sukses — konteks penting untuk relevansi Soltius sebagai anggotanya.

---

## Core facts (verified)

> **Claim 1**: SAP clean core adalah prinsip dan disiplin menjaga inti S/4HANA tetap standar dan mudah di-upgrade
> **Number/specific**: SAP mendefinisikan clean core sebagai sistem yang "sedekat mungkin dengan standar, menjalankan ekstensi dan integrasi yang cloud-compliant" — mencakup lima dimensi: Processes, Extensibility, Data, Integrations, Operations
> **Source**: SAP (sap.com/products/erp/rise/methodology/clean-core.html; search result verified June 2026); SAP Community clean core overview (community.sap.com, June 2026)
> **Confidence**: high

> **Claim 2**: 75–80% proses bisnis di semua perusahaan hampir identik dan tidak memerlukan kustomisasi besar
> **Number/specific**: "80% of business processes are almost identical across companies" — menjadi dasar argumen fit-to-standard; 20% sisanya yang benar-benar berbeda secara kompetitif
> **Source**: Multiple SAP-ecosystem sources including sap.com/resources/what-is-a-clean-core (search result, June 2026); erpvisors.com SAP clean core knowledge base; prolifics.com SAP clean core strategy
> **Confidence**: high (konsisten di berbagai sumber; asli dari SAP's own positioning)

> **Claim 3**: Fit-to-standard adalah pendekatan inti SAP Activate — pertanyaannya bukan "bagaimana sistem mengikuti proses kita?" melainkan "bagaimana proses kita mengadopsi best practice SAP?"
> **Number/specific**: Fase Explore di SAP Activate dibangun di atas prinsip fit-to-standard; business process owners harus aktif berpartisipasi dalam fit-to-standard assessment
> **Source**: SAP learning.sap.com (learning.sap.com/courses/discovering-sap-activate-implementation-tools-and-methodology/discovering-the-clean-core-concept, search result June 2026); ibsolution.com clean core strategy blog
> **Confidence**: high

> **Claim 4**: SAP mendefinisikan empat level ekstensi (A–D) berdasarkan kepatuhan clean core, dengan Level A sepenuhnya aman-upgrade dan Level D tidak direkomendasikan
> **Number/specific**: Level A = ekstensi via released SAP APIs (on-stack ABAP Cloud atau side-by-side di SAP BTP) — sepenuhnya upgrade-safe; Level D = modifikasi inti, akses tabel SAP langsung — tidak direkomendasikan, menciptakan technical debt terbesar
> **Source**: SAP news.sap.com (news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/, August 2025); SAP Community ABAP Extensibility Guide August 2025 update (community.sap.com/t5/technology-blog-posts-by-sap/abap-extensibility-guide-clean-core-for-sap-s-4hana-cloud-august-2025, August 2025)
> **Confidence**: high

> **Claim 5**: Tiga pendekatan ekstensi clean core yang valid: in-app/key-user extensibility, ABAP Cloud (on-stack developer extensibility via released API), dan side-by-side di SAP BTP
> **Number/specific**: ABAP Cloud menggunakan hanya released SAP APIs (objek yang di-"release" SAP — dijamin stabilitasnya dan tidak berubah saat upgrade); side-by-side BTP membuat aplikasi terpisah yang berjalan independen dari core
> **Source**: SAP news.sap.com (August 2025); SAP Community ABAP Extensibility Guide (August 2025); smartshift.com SAP ABAP Cloud Explained (search result, June 2026)
> **Confidence**: high

> **Claim 6**: Triase custom code menggunakan kerangka Keep / Refactor (Redesign) / Retire adalah praktik yang diakui luas di ekosistem SAP clean core
> **Number/specific**: Setiap objek kustom dikategorikan: Keep (sudah sesuai atau perubahan minimal), Redesign/Refactor (nilai bisnis tinggi tapi bergantung pada API tak-released), Retire (penggunaan rendah, digantikan standar, atau konfigurasi mencukupi). Alat utama: ABAP Test Cockpit (ATC)
> **Source**: SAP Community (community.sap.com/t5/abap-blog-posts/how-we-retired-almost-10-of-our-custom-code, June 2026); diligentglobal.com S/4HANA Custom ABAP Code Remediation Guide; craveinfotech.com clean core guide
> **Confidence**: high

> **Claim 7**: SAP mewajibkan sertifikasi ulang tahunan ("Stay-Certified") bagi semua konsultan partner dalam peran kunci di proyek RISE with SAP, mulai April 2024
> **Number/specific**: Mulai April 2024, sertifikasi harus diperbarui setiap tahun melalui "Stay-Certified" assessment; per Juli 2025, semua konsultan partner di peran kunci (enterprise architect, developer, BTMC, project manager) harus memiliki sertifikasi SAP yang valid
> **Source**: SAP Community (community.sap.com/t5/sap-learning-blog-posts/sap-certification-for-partners-an-overview-of-the-latest-changes, search result June 2026); SAP learning blog post on new certification framework
> **Confidence**: high

> **Claim 8**: SAP Platinum Partner adalah level tertinggi di SAP PartnerEdge, hanya diberikan by invitation, mensyaratkan ribuan konsultan bersertifikat SAP, beragam kompetensi solusi, dan komitmen pendapatan besar ke SAP
> **Number/specific**: Hanya sekitar 34 verified Platinum Partners di seluruh dunia; nama global termasuk Accenture (25.000+ staf bersertifikat SAP), Deloitte, IBM, PwC; juga mencakup regional specialists
> **Source**: erpresearch.com SAP Platinum Partners (erpresearch.com/sap-partners/platinum-partners, June 2026)
> **Confidence**: high (untuk deskripsi umum tier); medium (untuk angka 34 partners — perlu konfirmasi karena jumlah bisa berubah)

> **Claim 9**: United VARs adalah satu-satunya aliansi SAP Platinum Partner di dunia, dengan 70+ anggota elite di 100+ negara dan lebih dari 10.000 implementasi sukses
> **Number/specific**: "More than 70 elite SAP solution partners" + "presence in 100+ countries" + "more than 10,000 successful implementations" — Annual Meeting 2025 diadakan di Bangkok
> **Source**: united-vars.com/en/company/our-profile (fetched directly, June 2026)
> **Confidence**: high

> **Claim 10**: Partner SAP kini diwajibkan memvalidasi metodologi dan aplikasi mereka terhadap kriteria clean core SAP melalui program sertifikasi khusus
> **Number/specific**: SAP memiliki Clean Core Certification Program untuk partner extensions (dokumen SAP dipublikasikan Agustus 2025 dan Mei 2023); partner solutions yang tersertifikasi "clean core compliant" dapat diidentifikasi pelanggan
> **Source**: SAP (sap.com/documents/2025/08/da034897-187f-0010-bca6-c68f7e60039b.html, August 2025); SAP Community (community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/certification-of-partner-solutions-following-clean-core, search result June 2026)
> **Confidence**: high

> **Claim 11**: TechTarget mengidentifikasi bahwa SI tradisional yang berbasis pada heavy customization harus mengubah model bisnisnya untuk clean core — dan bahwa partner yang lebih kecil dan terspesialisasi bisa lebih adaptif
> **Number/specific**: "Heavy customization of systems was not always the best model because of the technical debt it created." — Analyst quote; large SIs historically acted as "frenemies" enabling problematic implementations
> **Source**: TechTarget SearchSAP (techtarget.com/searchsap/feature/SAP-clean-core-approach-changes-game-for-SIs, fetched June 2026)
> **Confidence**: high

> **Claim 12**: SAP Application Management Services (AMS) yang terstandarisasi mencakup incident management, change management, dan service improvement — dan partner yang menyediakan AMS umumnya memerlukan sertifikasi PCoE (Partner Center of Expertise)
> **Number/specific**: Proses audit PCoE mensyaratkan lebih dari 25 dokumen pendukung, infrastruktur support hotline, SAP Solution Manager dengan remote connectivity, dan staf multiperan (Dispatcher, Support Processor, Support Manager, dll.)
> **Source**: SAP Support (support.sap.com/content/s4m/help/cs/support/pcoe.html, search result June 2026); kellton.com PCoE certification overview; SAP Community AMS blog
> **Confidence**: high

> **Claim 13**: "Get clean, stay clean" adalah framing resmi SAP yang merangkum dua fase program clean core — mencapai dan mempertahankan clean core — dan didukung oleh Clean Core Measurement Framework
> **Number/specific**: SAP Clean Core Measurement Framework menggabungkan governance, maturity assessment, dan KPI untuk membantu organisasi mencapai dan mempertahankan clean core; CoE (Center of Excellence) mengelola extension decision catalogue, melatih anggota tim baru, dan memimpin quarterly health review
> **Source**: SAP (sap.com/products/erp/rise/methodology/clean-core.html, search result June 2026); SAP Community clean core CoE article; IgniteSAP SAP clean core in practice
> **Confidence**: high

> **Claim 14**: SAP ECC (Business Suite 7) mainstream maintenance berakhir 31 Desember 2027; extended maintenance tersedia hingga 31 Desember 2030 dengan premium biaya 2%
> **Number/specific**: ECC 6 EHP 6–8: mainstream maintenance ends 31 Dec 2027; extended maintenance 2028–2030 available with +2% surcharge on maintenance base; ECC 6 EHP 0–5: mainstream maintenance ends 31 Dec 2025
> **Source**: SAP Support (support.sap.com/en/offerings-programs/strategy.html, search result June 2026); riministreet.com confirmed SAP has stated no extension to these deadlines
> **Confidence**: high

> **Claim 15**: SAP telah meluncurkan SAP ERP Private Edition Transition Option di bawah RISE with SAP — memungkinkan pelanggan tertentu menjalankan ECC di lingkungan cloud privat SAP hingga 2033
> **Number/specific**: Opsi 2031–2033 tersedia untuk pelanggan terseleksi yang menjalankan ECC di SAP-managed private cloud
> **Source**: 2-data.com/knowledge-hub/sap-erp-private-edition-transition-option (search result, June 2026); crosscountry-consulting.com SAP ECC End of Life
> **Confidence**: medium (opsi ini terbatas/terseleksi; writer harus menyebutnya dengan catatan "untuk pelanggan tertentu")

---

## Solution focus + Soltius anchor (from product_matrix.md)

| Apa yang diajarkan (SAP/partner tech) | Fakta yang harus dinyatakan akurat | Di mana dalam artikel | Service/kredensial Soltius untuk anchor CTA |
|---|---|---|---|
| **Prinsip clean core sebagai disiplin** (bukan sekadar proyek) | Lima dimensi resmi SAP: Processes, Extensibility, Data, Integrations, Operations | H2 #1 (definitional opening) | — |
| **Fit-to-standard** dalam SAP Activate | 75–80% proses bisnis bisa standar; fase Explore SAP Activate berbasis fit-to-standard; partner yang baik mendorong pertanyaan "apakah proses Anda bisa mengadopsi standar SAP?" bukan sebaliknya | H2 #2 (pertanyaan untuk partner) + H2 #3 (red vs green flag) | — |
| **Triase custom code** (Keep/Refactor/Retire) | Tiga kategori; alat: ABAP Test Cockpit (ATC); tujuan: pindahkan custom logic ke in-app/BTP | H2 #2 (pertanyaan #1) | — |
| **Pendekatan ekstensi** (in-app / ABAP Cloud / side-by-side via released API) | Level A–D model (2025); Level A sepenuhnya upgrade-safe; Level D tidak direkomendasikan | H2 #2 (pertanyaan #3) + H2 #3 (tabel) | — |
| **"Get clean, stay clean"** + Center of Excellence | SAP framing resmi; CoE untuk quarterly health review + extension decision catalogue; Clean Core Measurement Framework | H2 #2 (pertanyaan #5) | — |
| **Tier partner SAP (Platinum)** + United VARs | Platinum = level tertinggi, by invitation; United VARs = satu-satunya SAP Platinum Partner alliance di dunia, 70+ anggota, 100+ negara, 10.000+ implementasi | H2 #4 (tier & sertifikasi) | **Satu kalimat aside**: Soltius sebagai anggota United VARs — SAP Platinum Partner status |
| **Sertifikasi AMS + PCoE** | PCoE = Partner Center of Expertise; audit ketat + infrastruktur support + staf multiperan; penting untuk "stay clean" pasca go-live | H2 #2 (pertanyaan #6) + H2 #3 (tabel) | — |
| **RISE with SAP** sebagai konteks | ECC mainstream maintenance 2027, extended 2030; RISE with SAP sebagai jalur migrasi ke cloud; Soltius sebagai Best RISE Partner | Closing / brief mention in H2 #1 | **Closing CTA**: SAP Platinum Partner via United VARs + Certified AMC & AMS Partner (PCoE Indonesia) + Best RISE / Best Cloud Partner |

**Catatan penempatan Soltius**: maksimum 3 self-mention — (1) satu kalimat aside di H2 #4 (tier Platinum via United VARs sebagai contoh praktis), (2) closing CTA dengan 2–3 kredensial yang relevan. Body tetap netral dan berguna untuk audiens mengevaluasi partner mana pun.

---

## Authoritative external sources (untuk writer linkout)

1. **SAP (news.sap.com), August 2025** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *mendukung*: extensibility levels A–D, ABAP Cloud, side-by-side BTP, SAP BTP-first strategy — sumber SAP official terbaru tentang cara ekstensi S/4HANA yang benar.

2. **TechTarget SearchSAP** — https://www.techtarget.com/searchsap/feature/SAP-clean-core-approach-changes-game-for-SIs — *mendukung*: dampak clean core terhadap peran SI, risiko partner berbasis heavy customization, pentingnya memilih partner yang sudah berkomitmen terhadap clean core — sumber analis/media teknologi terpercaya, bukan pemasaran vendor.

3. **United VARs (official)** — https://www.united-vars.com/en/company/our-profile — *mendukung*: fakta United VARs sebagai satu-satunya SAP Platinum Partner alliance di dunia; skala (70+ anggota, 100+ negara, 10.000+ implementasi) — verifikasi langsung dari sumber resmi.

4. **SAP Community (ABAP Extensibility Guide, August 2025)** — https://community.sap.com/t5/technology-blog-posts-by-sap/abap-extensibility-guide-clean-core-for-sap-s-4hana-cloud-august-2025/ba-p/14175399 — *mendukung*: panduan extensibility ABAP Cloud terbaru, level A–D, clean core untuk S/4HANA Cloud — SAP official community source.

---

## FAQ Q&As (6 draft, Bahasa Indonesia)

### Bagaimana cara memilih partner implementasi SAP untuk program clean core?

Evaluasi setidaknya tiga aspek: (1) apakah partner memiliki metodologi triase custom code yang jelas (Keep/Refactor/Retire); (2) apakah mereka mendorong fit-to-standard secara aktif atau justru menyetujui setiap kustomisasi; (3) apakah mereka punya model AMS/PCoE pasca go-live untuk menjaga "stay clean". Tier Platinum adalah ambang minimum, tetapi disiplin metodologi yang menentukan kualitas hasil.

### Pertanyaan apa yang harus saya ajukan ke calon system integrator SAP?

Tujuh pertanyaan kunci: (1) Bagaimana Anda menginventaris dan men-triase custom code kami? (2) Kapan Anda menolak permintaan kustomisasi? (3) Pendekatan ekstensi Anda — in-app, ABAP Cloud, atau side-by-side BTP? (4) Bagaimana strategi integrasi Anda — API-first atau masih RFC? (5) Bagaimana mekanisme "stay clean" pasca go-live? (6) Apa model AMS dan sertifikasi dukungan Anda? (7) Berapa klien di industri kami yang sudah Anda tangani?

### Apa itu SAP Platinum Partner dan apa artinya bagi saya sebagai pelanggan?

SAP Platinum Partner adalah level tertinggi di program SAP PartnerEdge, diberikan hanya by invitation kepada partner yang memenuhi syarat ribuan konsultan bersertifikat SAP, kompetensi solusi berganda, dan komitmen pendapatan besar ke SAP. Bagi pelanggan, ini berarti akses ke kedalaman keahlian dan dukungan ekosistem yang lebih luas — meski tier saja tidak menjamin kecocokan metode atau pengalaman di industri spesifik Anda.

### Apa itu fit-to-standard dalam implementasi SAP, dan mengapa penting untuk clean core?

Fit-to-standard adalah pendekatan yang mengutamakan pertanyaan "bagaimana proses bisnis kita bisa mengadopsi best practice SAP?" — bukan sebaliknya. Ini penting karena SAP mencatat bahwa 75–80% proses bisnis di semua perusahaan hampir identik dan tidak memerlukan kustomisasi. Hanya 20–25% yang benar-benar membedakan perusahaan secara kompetitif. Partner yang benar-benar mendukung clean core akan secara proaktif mendorong fit-to-standard, bukan langsung menerima permintaan kode kustom.

### Apa itu "get clean, stay clean" dan apa peran partner di dalamnya?

"Get clean, stay clean" adalah framing resmi SAP yang merangkum dua fase program clean core: fase pertama membersihkan dan memigrasi sistem ke standar, fase kedua mempertahankan disiplin itu pasca go-live. Partner yang baik menyediakan kerangka Center of Excellence (CoE) untuk fase kedua — termasuk quarterly health review, extension decision catalogue, dan ABAP Cloud guidelines — agar clean core bukan proyek satu kali, melainkan tata kelola berkelanjutan.

### Apa tanda-tanda partner SAP yang kurang tepat untuk program clean core?

Beberapa sinyal bahaya: (1) menjanjikan "semua permintaan kustomisasi bisa dilakukan" tanpa mendorong evaluasi fit-to-standard terlebih dahulu; (2) tidak memiliki metode triase kode yang terstruktur; (3) menggunakan RFC sebagai default untuk integrasi alih-alih API-first; (4) tidak ada rencana konkret untuk "stay clean" pasca go-live; (5) tidak bisa menunjukkan klien referensi di industri yang sama yang telah berhasil menjaga clean core setelah go-live.

---

## Data tables for the writer

### Tabel: Red Flag vs Green Flag — Cara Membaca Jawaban Partner

| Aspek Evaluasi | Sinyal Bahaya (Red Flag) | Sinyal Baik (Green Flag) |
|---|---|---|
| Kustomisasi | "Semua permintaan bisa kami akomodasi" | Mendorong fit-to-standard; meminta justifikasi bisnis sebelum kustomisasi |
| Triase custom code | Tidak punya metode inventaris kode yang terstruktur | Memiliki framework Keep/Refactor/Retire + tool (mis. ABAP Test Cockpit) |
| Pendekatan ekstensi | Modifikasi core (Level D) sebagai jalur utama | In-app / ABAP Cloud / side-by-side BTP (Level A) sebagai default |
| Integrasi | RFC sebagai default; tidak menyebut released API | API-first; menggunakan released SAP APIs; strategi integrasi berbasis standar |
| Pasca go-live | "Proyek selesai setelah go-live" | Model AMS/PCoE jelas; ada rencana CoE + quarterly clean core health review |
| Tier & sertifikasi | Hanya menyebut tier tanpa contoh konkret implementasi | Tier Platinum/Gold + sertifikasi PCoE + referensi klien di industri relevan |
| Track record | Referensi generik tanpa industri spesifik | Referensi klien di industri serupa + durasi engagement pasca go-live |

### Tabel: Tiga Jalur Ekstensi SAP Clean Core

| Jalur Ekstensi | Mekanisme | Clean Core Level | Keunggulan | Kapan Digunakan |
|---|---|---|---|---|
| **In-app / Key-user** | Custom fields, UI adaptation, business rules via standard tools | Level A | Termudah, tanpa coding; langsung oleh power user | Penyesuaian UI, field tambahan, aturan bisnis sederhana |
| **ABAP Cloud (on-stack)** | Developer extensibility via released SAP APIs, CDS views, BAdIs | Level A | Kuat secara teknis; tetap upgrade-safe karena hanya released API | Logika bisnis kompleks yang perlu integrasi erat dengan core |
| **Side-by-side (SAP BTP)** | Aplikasi terpisah di SAP BTP; terintegrasi via released API | Level A | Sepenuhnya decoupled; tidak memengaruhi core sama sekali | Ekstensi besar, proses diferensiasi utama, citizen development via SAP Build |

---

## Edge cases & nuance

- **Tier Platinum bukan jaminan kualitas clean core**: Beberapa partner Platinum global terbiasa dengan pendekatan heavy customization — itulah model bisnis mereka yang historis menguntungkan. TechTarget mencatat bahwa SI besar secara historis berperan sebagai "frenemies" yang memungkinkan implementasi bermasalah. Tier adalah syarat perlu, bukan syarat cukup.
- **"Semua bisa di-BTP" juga bisa salah arah**: Side-by-side BTP bukan izin bebas untuk membangun segalanya di luar core. Keputusan tetap harus divalidasi terhadap kriteria apakah proses tersebut benar-benar diferensiasi (20%) atau justru termasuk 80% proses standar.
- **Biaya termurah vs termahal**: Partner termurah cenderung menambal lewat kustomisasi cepat (technical debt tinggi, upgrade tetap mahal). Partner termahal/brand besar tidak selalu cocok untuk skala menengah atau industri spesifik Indonesia. Kriteria sesungguhnya: kecocokan metode + rekam jejak di industri yang relevan.
- **Transisi opsi RISE (2031–2033)**: Tersedia hanya untuk pelanggan terseleksi — writer jangan menyebutnya sebagai opsi umum yang mudah diakses.
- **Level B dan C bukan berarti otomatis salah**: Dalam kasus upgrade dari sistem ECC yang sudah berjalan, Level B (classic API yang terdokumentasi) kadang diterima sebagai langkah transisi. Clean core adalah perjalanan, bukan kondisi biner.

---

## Flags (open factual risk)

- **Flag 1** ⚠️ **Angka pasti jumlah SAP Platinum Partners (34 worldwide)**: Sumber erpresearch.com menyebut angka ini, tetapi situs tersebut bukan SAP official. Jumlah ini berubah karena tier partner dapat berubah. **Rekomendasi**: jangan cetak angka spesifik ini; cukup sebut "sejumlah kecil partner global" atau parafrase sebagai "level tertinggi yang hanya diberikan by invitation".

- **Flag 2** ⚠️ **Jumlah pasti konsultan bersertifikat SAP di United VARs**: company_profile.md Soltius menyebut "10,000 certified SAP consultants" — tetapi fetched dari united-vars.com/en/company/our-profile, website United VARs tidak mengkonfirmasi angka konsultan bersertifikat secara spesifik. Hanya menyebut "70+ elite SAP solution partners" dan "100+ countries". **Rekomendasi**: angka "10,000 certified SAP consultants" ada di company_profile.md Soltius (verified-by-default) — writer boleh menggunakannya dengan atribut kepada United VARs, tetapi catatan: perbedaan data ini perlu dikonfirmasi dari sumber United VARs langsung. Jika ragu, gunakan "70+ anggota di 100+ negara dengan lebih dari 10.000 implementasi sukses" (angka implementasi terverifikasi).

- **Flag 3** ⚠️ **"Best RISE Partner" dan "Best Cloud Partner" Soltius**: Awards ini ada di company_profile.md (2021) — verified-by-default per sistem. Namun tahunnya 2021. **Rekomendasi**: Writer boleh menyebutnya tetapi attribut ke "2021 recognition" atau cukup "penerima penghargaan Best RISE & Best Cloud Partner dari SAP" — jangan menyebutnya sebagai status saat ini yang aktif.

- **Flag 4** ⚠️ **Klaim "kontributor pendapatan terbesar SAP Indonesia sejak 2015"**: Ada di company_profile.md sebagai recognition yang dapat dikutip, bukan boast. **Rekomendasi**: Sampaikan persis sebagai "diakui sebagai kontributor pendapatan terbesar SAP Indonesia sejak 2015" — attribution sebagai recognition, bukan klaim peringkat aktif saat ini.

- **Flag 5** ⚠️ **Framing "partner clean core terpercaya" atau klaim superlatif tentang Soltius**: Brief dengan jelas melarang superlatif (product_matrix blacklist). **Rekomendasi**: Closing CTA harus menggunakan kredensial faktual yang ada di company_profile.md (SAP Platinum via United VARs; Certified AMC & AMS / PCoE Indonesia; Best RISE / Best Cloud 2021; sejak 1998; Metrodata Group) — tidak ada "terbaik", "nomor satu", atau "terpercaya" tanpa bukti spesifik.

---

## Definition snippet draft (40–60 words)

> **Peran partner dalam clean core**: Dalam program clean core S/4HANA, partner implementasi SAP berperan menjaga inti sistem tetap standar dan upgrade-safe: men-triase custom code, mendorong fit-to-standard, menyalurkan kustomisasi ke jalur yang aman (in-app, ABAP Cloud, atau side-by-side via released API), dan menegakkan disiplin "stay clean" setelah go-live.

*(51 kata — dalam batas 40–60. Writer dapat menyesuaikan, pastikan tetap ≥40 dan ≤60 kata.)*

---

## Notes for image-planner

- **Concept 1 — Tabel / Infografis perbandingan Red Flag vs Green Flag**: Visual dua kolom berwarna kontras (merah/hijau) dengan 7 baris aspek evaluasi. Format screenshot-friendly — bisa dibagikan di internal chat. Teks ringkas per sel. Saran aset: infografis komparatif horizontal, bukan screencap tabel markdown.

- **Concept 2 — Diagram tiga jalur ekstensi SAP clean core**: Diagram tiga jalur (In-app Key User / ABAP Cloud on-stack / Side-by-side BTP) dengan ikon representatif dan label "Level A". Core S/4HANA di tengah sebagai titik referensi. Menunjukkan bahwa ketiga jalur tidak menyentuh core secara langsung. Saran aset: diagram arsitektur bergaya clean/minimalis, cocok untuk slide deck.

- **Concept 3 — Ilustrasi "perjalanan get clean stay clean"**: Timeline dua fase horizontal: fase "Get Clean" (custom code audit → triase → remediasi → go-live) dan fase "Stay Clean" (CoE governance → quarterly review → extension decision catalogue → continuous upgrade). Menggambarkan clean core sebagai disiplin berkelanjutan, bukan proyek satu kali. Saran aset: process timeline visual.
