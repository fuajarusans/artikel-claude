---
brief_id: "timeline-migrasi-rise-c01"
researcher_run_date: "2026-07-06"
sources_cited: 6
verified_claims: 14
flags: 7
batch: "conditional-2026-07 (style_addendum.md — 800–1000 kata, FAQ 2–3, 2 internal link, TANPA image placeholder)"
---

# Research Dossier: Estimasi Timeline Migrasi RISE with SAP: Dari Assessment hingga Go-Live

## TL;DR for the writer

- **Angka inti terverifikasi langsung dari sumber primer**: SAP S/4HANA Transformation Pocket Guide (blog resmi SAP di SAP Community, terbit 13 Agustus 2024) — durasi end-to-end indikatif: **brownfield 12–15 bulan, bluefield 12–18 bulan, greenfield 15–21 bulan** (satu gelombang roll-in). Kutipan persis ada di Claim 1.
- **UPGRADE dari asumsi brief**: Pocket Guide yang sama memuat **Tabel 2 resmi SAP berisi durasi indikatif PER FASE SAP Activate** (Discover s.d. Deploy) per jalur migrasi. Tabel H2 #2 TIDAK perlu berlabel "estimasi praktik" untuk 5 fase pertama — pakai angka resmi SAP (Claim 2). Hanya fase **Run/hypercare** yang tetap estimasi praktik (SAP tidak memberi angkanya). **JANGAN menulis "SAP hanya menerbitkan durasi end-to-end" — kalimat itu keliru.**
- **Dua contoh bertanggal terverifikasi**: Bertrandt AG — **go-live <5 bulan** sejak kick-off, 4 unit bisnis serentak (dokumen resmi SAP, Mei 2025); PT Tigaraksa Satria Tbk — Project SUNRISE **kick-off 8 Juli 2024, go-live 6 Januari 2025** (±6 bulan; Liputan6, 8 Jan 2025).
- **Partner Tigaraksa TERKONFIRMASI publik = Soltius** ("implementor utama", diberitakan Liputan6 + halaman news soltius.co.id). Sesuai brief: tetap tulis **netral sebagai contoh publik Indonesia** — jangan diklaim ulang di body; biarkan positioning line di Kesimpulan yang bekerja.
- **Titik hitung mundur**: mainstream maintenance SAP Business Suite 7 (ECC) berakhir **akhir 2027 / 31 Desember 2027** (support.sap.com, dikonfirmasi ulang hari ini). Mundur 15 bulan → kick-off brownfield paling lambat **akhir September 2026**; mundur 12 bulan → **akhir Desember 2026**. Greenfield 21 bulan → batasnya (akhir Maret 2026) **sudah lewat**; skenario tercepatnya (15 bulan) → akhir September 2026. Semua hasil mundur = **hitungan turunan, label sebagai hitung mundur, bukan tanggal resmi SAP**.

## Core facts (verified)

> **Claim 1 — Durasi end-to-end resmi SAP per jalur migrasi**
> **Number/specific**: brownfield 12–15 bulan; bluefield 12–18 bulan; greenfield 15–21 bulan (asumsi satu gelombang roll-in); Central Finance 15–18 bulan (satu gelombang). Kutipan persis: *"The indicative end-to-end durations for the SAP S/4HANA transformation journeys with Brown- (12 to 15 months), Blue- (12 to 18 months), Greenfield (15 to 21 months, assuming a single wave of roll-in), and the Central Finance option (15 to 18 months, assuming a single wave of roll-in), are another important element for planning the transformation journey."*
> **Source**: SAP S/4HANA Transformation Pocket Guide — Enterprise Resource Planning Blog Posts **by SAP**, SAP Community, terbit 13 Agustus 2024. `https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/sap-s-4hana-transformation-pocket-guide/ba-p/13791072` (halaman 403 untuk WebFetch; **diverifikasi via API resmi SAP Community**, diakses 2026-07-06 — body post asli, bukan snippet pihak ketiga)
> **Confidence**: high
> **Atribusi di artikel**: "SAP (2024)" / "SAP S/4HANA Transformation Pocket Guide (SAP, 2024)".

> **Claim 2 — SAP juga menerbitkan durasi indikatif PER FASE (Tabel 2 Pocket Guide)**
> **Number/specific** (per fase SAP Activate, sumber sama dengan Claim 1):
> | Jalur | Discover | Prepare | Explore | Realize | Deploy |
> |---|---|---|---|---|---|
> | System Conversion (brownfield) | 2–3 bln | 2–3 bln | 2–3 bln | 3 bln | >3 bln |
> | Selective Data Transition (bluefield) | 1–2 bln | 1–2 bln | 1–2 bln | 6–9 bln | >3 bln |
> | New Implementation (greenfield) | 3 bln | 3 bln | 3–6 bln | 3–6 bln | >3 bln |
>
> Kutipan pengantar: *"The table underneath is showing the indicative timelines by SAP Activate phase."* — label tabel: *"Table 2: Indicative deployment timelines for SAP transformation options by SAP Activate phase."* Tidak ada baris untuk fase **Run**.
> **Source**: sama dengan Claim 1 (diakses 2026-07-06)
> **Confidence**: high
> **Catatan konsistensi**: jumlah baris brownfield = 12–15+ bulan — cocok dengan amplop end-to-end Claim 1.

> **Claim 3 — Fase terpanjang tergantung jalur (bukan "Realize terpanjang" universal)**
> **Number/specific**: menurut Tabel 2 SAP: Realize adalah fase terpanjang pada **bluefield (6–9 bulan)** dan (bersama Explore) pada **greenfield (3–6 bulan)**; pada **brownfield** Realize = 3 bulan sementara **Deploy dicantumkan ">3 bulan"**. Klaim "Realize paling sering menyebabkan jadwal mundur karena siklus pengujian/kualitas data" tetap boleh — sebagai **observasi praktik**, bukan atribusi ke SAP.
> **Source**: Tabel 2 Pocket Guide (Claim 2)
> **Confidence**: high (untuk isi tabel); framing praktik = tanpa atribusi

> **Claim 4 — Tenggat ECC: akhir 2027**
> **Number/specific**: *"SAP will provide mainstream maintenance until end of 2027 for SAP Business Suite 7 core applications."* (= 31 Desember 2027 sebagai titik hitung mundur.)
> **Source**: support.sap.com — Maintenance Strategy SAP S/4HANA & SAP Business Suite 7: `https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html` (WebFetch langsung, 2026-07-06)
> **Confidence**: high
> **Batas dedup**: extended maintenance 2028–2030 (+2% premi) terverifikasi di halaman yang sama tetapi **JANGAN dibahas** — milik sibling `sap-ecc-2027-c01`. Cukup 1 kalimat tenggat 2027.

> **Claim 5 — Bertrandt: go-live <5 bulan (dokumen resmi SAP, Mei 2025)**
> **Number/specific**: **"<5 — Months needed from project kickoff to successful go-live"**; **"4 — Separate business units went live at the same time"**; produk: **SAP S/4HANA Cloud Private Edition** via **RISE with SAP**; pendekatan dua tahap: lift-and-shift infrastruktur dulu, lalu transisi ke cloud ERP; lingkungan Microsoft Azure. Profil: Bertrandt AG, Jerman, ~14.000 karyawan, jasa engineering.
> **Source**: SAP customer story resmi: `https://www.sap.com/documents/2025/05/d8d9a9f1-057f-0010-bca6-c68f7e60039b.html` — kode dokumen 97177enUS (25/05), © 2025 SAP SE. (URL 403 untuk WebFetch; **konten penuh diverifikasi via reader proxy**, 2026-07-06.)
> **Confidence**: high
> **Framing wajib**: contoh ujung cepat spektrum dengan pendekatan bertahap yang terkelola — **bukan janji umum**. Perhatikan: dokumen menyebut produk **"SAP S/4HANA Cloud Private Edition"** (bukan "SAP Cloud ERP Private") — pakai nama itu saat merujuk kasus ini.

> **Claim 6 — Tigaraksa Satria: kick-off 8 Juli 2024 → go-live 6 Januari 2025 (±6 bulan)**
> **Number/specific**: *"Pada 8 Juli 2024, PT Tigaraksa Satria Tbk (TGKA) resmi meluncurkan Project SUNRISE"*; *"Project SUNRISE resmi Go Live pada 6 Januari 2025"*; sistem: *"RISE with SAP S/4HANA Private Cloud Edition berbasis Google Cloud Platform (GCP), sekaligus mengadopsi solusi SAP BW/4HANA"*.
> **Source**: Liputan6 (Citizen6), terbit 8 Januari 2025: `https://www.liputan6.com/citizen6/read/5870921/melalui-rise-with-sap-tigaraksa-satria-tingkatkan-efisiensi-dan-skalabilitas-operasional` (WebFetch langsung, 2026-07-06)
> **Confidence**: high
> **Aritmetika**: 8 Juli 2024 → 6 Januari 2025 = 5 bulan 29 hari ≈ **6 bulan** — tulis "sekitar 6 bulan", jangan "di bawah 6 bulan" untuk kasus ini.

> **Claim 7 — Partner implementasi Tigaraksa = PT Soltius Indonesia (terkonfirmasi publik)**
> **Number/specific**: Liputan6: *"bekerja sama dengan PT Soltius Indonesia, anak perusahaan PT Metrodata Electronics Tbk"*; halaman news Soltius: *"Sebagai implementor utama, Soltius memiliki peran krusial dalam mendukung kelancaran transisi"* (dengan kutipan Presdir Soltius Bernardy Suhendra).
> **Source**: Liputan6 (Claim 6) + `https://www.soltius.co.id/id/news/collaborative-project-pt-tigaraksa-satria-tbk-go-live-sap-rise-bw-4hana-implementation` (WebFetch, 2026-07-06)
> **Confidence**: high
> **Instruksi brief tetap berlaku**: tulis **netral sebagai "contoh publik di Indonesia"** dengan atribusi Liputan6; JANGAN ubah jadi klaim proyek Soltius di body (menghemat jatah 2 self-mention dan menjaga tone non-salesy). Aman secara fakta bila editor menanyakan.

> **Claim 8 — Enam fase SAP Activate (entitas, 1 baris saja)**
> **Number/specific**: urutan resmi: **Discover, Prepare, Explore, Realize, Deploy, Run**. *"The core of the project delivery happens between the Prepare and the Deploy phases... Discover and Run are additional phases."* UAT (user acceptance testing) berada di akhir Realize; aktivitas **hypercare dijalankan di fase Deploy setelah go-live**, lalu operasional berjalan di Run.
> **Source**: learning.sap.com — "Describing the Methodology Structure" (kursus Discovering SAP Activate): `https://learning.sap.com/courses/discovering-sap-activate-implementation-tools-and-methodology/describing-the-methodology-structure` (WebFetch, 2026-07-06)
> **Confidence**: high
> **Batas dedup**: nama fase = kerangka tabel SAJA; metodologi (3 pilar, pengganti ASAP, fit-to-standard) milik sibling `implementasi-erp-c01`.

> **Claim 9 — Hitung mundur dari 31 Desember 2027 (turunan aritmetika — WAJIB dilabel)**
> **Number/specific**: dari 31 Des 2027: skenario brownfield 15 bulan → kick-off paling lambat **akhir September 2026**; skenario 12 bulan → **akhir Desember 2026**. Greenfield: skenario 21 bulan → akhir Maret 2026 (**sudah terlewat** per tanggal tulis); skenario 15 bulan → akhir September 2026. Ditambah persiapan komersial pra-kick-off (evaluasi partner, negosiasi kontrak) yang dalam praktik lazim 2–3 bulan → keputusan realistis harus diambil **sekitar pertengahan/kuartal III 2026**.
> **Source**: turunan dari Claim 1 + Claim 4 (aritmetika); "2–3 bulan pra-proyek" = estimasi praktik tanpa sumber resmi
> **Confidence**: high untuk aritmetika; **medium untuk angka pra-proyek** — label "dalam praktik" tanpa atribusi
> **Awas double-count**: angka 12–15 bulan SAP **sudah termasuk fase Discover (assessment)**. Buffer pra-proyek hanya untuk aktivitas komersial di luar proyek (pemilihan partner, kontrak) — jangan menambahkan lagi "2–3 bulan assessment" di atas 12–15 bulan.

> **Claim 10 — Estimasi durasi hypercare/Run (estimasi praktik — satu-satunya baris tabel tanpa angka SAP)**
> **Number/specific**: stabilisasi/hypercare pasca go-live lazim ±1–2 bulan sebelum transisi penuh ke operasional/AMS. TIDAK ada angka resmi SAP; Tabel 2 Pocket Guide berhenti di Deploy.
> **Source**: praktik implementasi umum — **tanpa atribusi**; tulis "dalam praktik implementasi umumnya 1–2 bulan"
> **Confidence**: medium (label wajib "estimasi praktik")

> **Claim 11 — Amplop total 12–21 bulan (agregat untuk Kesimpulan)**
> **Number/specific**: rentang gabungan semua jalur dari Claim 1 = **12–21 bulan**; total ditentukan oleh jalur migrasi (variabel terbesar), lingkup, dan kualitas data.
> **Source**: turunan Claim 1
> **Confidence**: high

> **Claim 12 — RISE with SAP (konteks 1 kalimat + link cousin)**
> **Number/specific**: RISE with SAP = paket transformasi berlangganan yang membundel SAP S/4HANA Cloud (untuk jalur private: SAP S/4HANA Cloud Private Edition), infrastruktur cloud, dan layanan transisi dalam satu kontrak. Cukup 1 kalimat + link cousin — komponen detail milik halaman cousin & row 7.
> **Source**: `https://www.sap.com/products/erp/rise.html` (konsisten dengan product_matrix.md); kasus Bertrandt & Tigaraksa mengonfirmasi pola "S/4HANA Cloud Private Edition via RISE"
> **Confidence**: high (untuk framing 1 kalimat generik)

> **Claim 13 — Soltius positioning (dari knowledge_base — pre-approved)**
> **Number/specific**: SAP Platinum Partner (via United VARs); penghargaan **Best Cloud / Best RISE / Best Cloud Renewal Partner (SEA) 2021**; layanan Migration (di bawah Implementation) + AMS pasca go-live; berpengalaman sejak 1998, bagian Metrodata Group.
> **Source**: `knowledge_base/company_profile.md` + `product_matrix.md` (pre-approved)
> **Confidence**: high
> **Framing**: mendampingi/menjalankan migrasi fase demi fase — **implementator, bukan pembuat**; maks 2 self-mention (positioning line Kesimpulan + soft CTA).

> **Claim 14 — Internal link targets (live)**
> **Number/specific**: hub `https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud` (anchor: "migrasi ERP ke cloud") + cousin `https://www.soltius.co.id/id/blog/Apa-Saja-yang-Termasuk-dalam-Rise-with-SAP` (anchor: "apa saja yang termasuk dalam RISE with SAP").
> **Source**: diverifikasi live oleh strategist via WebFetch 2026-07-06 (dicatat di brief)
> **Confidence**: high

## Solution focus + Soltius anchor (dari product_matrix.md — baris ERP migration)

| What to teach (SAP tech) | Facts to state accurately | Where in article | Soltius anchor |
|---|---|---|---|
| RISE with SAP + SAP S/4HANA Cloud Private Edition (1 kalimat + link cousin) | Claim 12; nama produk penuh di sebutan pertama | H2 #1, saat RISE pertama disebut | — |
| Durasi end-to-end & per fase (Pocket Guide) | Claim 1–3; atribusi "SAP (2024)" | H2 #1 (end-to-end) + H2 #2 (tabel per fase) | — |
| SAP Activate 6 fase (kerangka tabel saja) | Claim 8; tanpa pengajaran metodologi | H2 #2 | — |
| Tenggat ECC akhir 2027 (titik hitung mundur saja) | Claim 4 + 9 | H2 #3 | — |
| Migration service + Best RISE/Best Cloud Partner | Claim 13 | Kesimpulan (positioning line) + soft CTA baris terakhir | RISE with SAP / SAP S/4HANA Cloud Private Edition (funnel per tracker) |

## Authoritative external sources (untuk sitasi inline artikel — pilih 1–2)

1. **SAP S/4HANA Transformation Pocket Guide (SAP Community, blog by SAP, 13 Agustus 2024)** — `https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/sap-s-4hana-transformation-pocket-guide/ba-p/13791072` — *backs*: semua angka durasi (12–15 / 12–18 / 15–21 bulan + tabel per fase). **Sitasi utama — wajib.**
2. **SAP Support — Maintenance Strategy SAP S/4HANA & Business Suite 7** — `https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html` — *backs*: mainstream maintenance ECC berakhir akhir 2027.
3. (Opsional) **SAP customer story Bertrandt (Mei 2025)** — `https://www.sap.com/documents/2025/05/d8d9a9f1-057f-0010-bca6-c68f7e60039b.html` — *backs*: go-live <5 bulan, 4 unit bisnis.
4. (Opsional, jangkar lokal) **Liputan6, 8 Januari 2025** — `https://www.liputan6.com/citizen6/read/5870921/melalui-rise-with-sap-tigaraksa-satria-tingkatkan-efisiensi-dan-skalabilitas-operasional` — *backs*: kick-off 8 Juli 2024 → go-live 6 Januari 2025.

> Batch ini: **1–2 sitasi eksternal inline** saja. Prioritas: #1 (angka inti) + #2 (tenggat). Bertrandt/Liputan6 bisa disebut naratif ("case study resmi SAP, 2025" / "diberitakan Liputan6, Januari 2025") tanpa harus jadi link bila jatah sitasi habis.

## FAQ drafts (2–3 Q&A, Bahasa Indonesia, 30–60 kata, 1 fakta per jawaban)

### Berapa lama migrasi RISE with SAP?
Menurut SAP S/4HANA Transformation Pocket Guide (SAP, 2024), durasi end-to-end indikatif adalah 12–15 bulan untuk konversi brownfield, 12–18 bulan untuk bluefield, dan 15–21 bulan untuk greenfield satu gelombang. Contoh publik di Indonesia menunjukkan proyek dapat go-live dalam sekitar 6 bulan. *(40 kata)*

### Fase apa yang paling lama dalam migrasi SAP ke cloud?
Tergantung jalur. Tabel indikatif SAP menempatkan Realize sebagai fase terpanjang pada jalur bluefield (6–9 bulan) dan greenfield (3–6 bulan). Dalam praktik, siklus pengujian dan migrasi data percobaan di fase Realize paling sering membuat jadwal mundur karena kualitas data baru teruji di sana. *(43 kata)*

### Kapan paling lambat kick-off agar selesai sebelum deadline ECC 2027?
Mainstream maintenance SAP ECC berakhir 31 Desember 2027. Mundur 12–15 bulan durasi konversi brownfield, kick-off paling lambat jatuh sekitar akhir September–Desember 2026 — belum termasuk persiapan kontrak dan pemilihan partner yang dalam praktik memakan 2–3 bulan. Untuk greenfield 15–21 bulan, batasnya lebih awal lagi. *(44 kata)*

## Data table for the writer (elemen terstruktur inti — H2 #2)

### Enam fase migrasi RISE with SAP dan estimasi durasi (jalur konversi brownfield)

| Fase (SAP Activate) | Aktivitas kunci | Durasi indikatif | Basis angka |
|---|---|---|---|
| Discover | Assessment sistem & lingkup, SAP Readiness Check (1 kalimat, tanpa mengulas), business case | 2–3 bulan | SAP (2024) |
| Prepare | Kontrak & provisioning lingkungan cloud, pembentukan tim, rencana proyek | 2–3 bulan | SAP (2024) |
| Explore | Workshop validasi proses & desain solusi, backlog gap | 2–3 bulan | SAP (2024) |
| Realize | Konversi & konfigurasi, migrasi data percobaan, siklus pengujian hingga UAT | 3 bulan | SAP (2024) |
| Deploy | Cutover rehearsal, migrasi data final, go-live (1 kalimat — teknik downtime milik artikel lain) | >3 bulan | SAP (2024) |
| Run (hypercare) | Stabilisasi & dukungan intensif pasca go-live | ±1–2 bulan | Estimasi praktik |

**Cara memakai tabel ini:**
- Lima baris pertama = **angka resmi SAP** (Tabel 2 Pocket Guide, jalur System Conversion) — boleh diatribusikan "SAP (2024)". Baris Run = estimasi praktik, WAJIB dibedakan labelnya (kolom "Basis angka" di atas menyelesaikan ini secara elegan).
- Jumlah Discover–Deploy = 12–15+ bulan → konsisten amplop end-to-end. Sebut 1 kalimat: total resmi SAP 12–15 bulan untuk jalur ini (angka end-to-end sudah di snippet — jangan diulang verbatim).
- Elaborasi 1 paragraf setelah tabel: pada bluefield Realize melebar ke 6–9 bulan (fase terpanjang menurut SAP); dalam praktik, jumlah pengulangan siklus migrasi data percobaan — ditentukan kualitas data — adalah pengungkit terbesar durasi Realize. (Frasa praktisi dari brief boleh dipakai: "datanya baru ketahuan kotor saat migrasi percobaan pertama".)
- Jawaban langsung H2 #2 (poin BARU): sebut urutan 6 fase + fakta bahwa SAP menerbitkan angka indikatif per fase di Pocket Guide — bukan mengulang angka end-to-end snippet.

### Data hitung mundur (H2 #3 — prosa, bukan tabel kedua)
- Tenggat: **31 Desember 2027** (mainstream maintenance ECC berakhir — support.sap.com).
- Brownfield 15 bulan → kick-off paling lambat **akhir September 2026**; 12 bulan → **akhir Desember 2026**.
- Greenfield 21 bulan → akhir Maret 2026 (**sudah lewat**); 15 bulan → akhir September 2026.
- Persiapan pra-kick-off (pemilihan partner, kontrak): dalam praktik 2–3 bulan — di luar hitungan proyek; JANGAN menambahkan assessment lagi (sudah di fase Discover).
- Buffer praktik: hindari go-live bertepatan tutup buku akhir tahun; sisakan ruang untuk pengulangan siklus pengujian. (Observasi praktik, tanpa atribusi. Catatan: Tigaraksa go-live 6 Januari — awal tahun fiskal — contoh penempatan go-live yang lazim.)

## Edge cases & nuance

- **"Berapa lama" tidak punya satu jawaban** — jalur migrasi adalah penentu terbesar (selisih resmi brownfield vs greenfield sampai 6–9 bulan); 1 kalimat rujukan saja, TANPA mengulang perbandingan jalur (milik `erp-migration-to-the-cloud-01`).
- **Estimasi vendor mengasumsikan kondisi ideal** — angka SAP berlabel "indicative"; honest hedging di H2 #3: kompresi siklus pengujian = penyebab go-live mundur paling umum (observasi praktik).
- **Contoh cepat ≠ janji umum**: Bertrandt <5 bulan memakai pendekatan dua tahap (lift-and-shift dulu, transformasi kemudian) — sebagian pekerjaan transformasi digeser ke setelah go-live. Tigaraksa ±6 bulan adalah satu perusahaan distribusi dengan lingkup tertentu. Framing: "lingkup dan pendekatan yang terkelola bisa jauh lebih cepat dari amplop 12–15 bulan".
- **Menunda kick-off = risiko kapasitas**: menjelang tenggat 2027, kapasitas konsultan berpengalaman menyempit (framing kualitatif — JANGAN beri angka kelangkaan talenta; tidak diverifikasi).

## Flags (fakta TIDAK terverifikasi / harus dihindari / hedge)

- ⚠️ **JANGAN tulis "SAP hanya menerbitkan durasi end-to-end, tidak per fase"** — asumsi brief ini KELIRU; Pocket Guide memuat Tabel 2 per fase (Claim 2). Kalimat framing brief "durasi per fase = estimasi praktik" hanya berlaku untuk baris **Run/hypercare**.
- ⚠️ **Skema per-fase versi brief (Discover 1–2, Prepare 1, Explore 2–3, Realize 4–6, Deploy 1–2)** — TIDAK didukung sumber; SUDAH DIGANTI angka resmi SAP di tabel dossier. Jangan pakai versi brief.
- ⚠️ **"Realize adalah fase terpanjang" sebagai klaim universal** — tidak akurat untuk brownfield (Tabel 2: Realize 3 bulan; Deploy ">3 bulan"). Gunakan formulasi Claim 3/FAQ 2: terpanjang di bluefield & greenfield menurut SAP; "paling sering bikin mundur" = observasi praktik.
- ⚠️ **Hypercare ±1–2 bulan; pra-proyek 2–3 bulan; buffer tutup buku** — estimasi/observasi praktik TANPA sumber resmi → wajib frasa "dalam praktik implementasi umumnya..." tanpa atribusi angka ke SAP.
- ⚠️ **"Kick-off paling lambat pertengahan 2026"** — hitungan turunan, bukan tanggal resmi SAP; tulis eksplisit sebagai hasil hitung mundur. Presisinya: akhir September 2026 (skenario brownfield 15 bulan) — "pertengahan 2026" boleh sebagai pembulatan konservatif setelah menambah persiapan pra-proyek.
- ⚠️ **Panorama Consulting ~9 bulan — DILARANG** (milik sibling `implementasi-erp-c01`; konteks SaaS ERP berbeda).
- ⚠️ **Penamaan produk**: dokumen Bertrandt (Mei 2025) memakai "SAP S/4HANA Cloud Private Edition"; pemberitaan Tigaraksa memakai "RISE with SAP S/4HANA Private Cloud Edition". Gunakan **"SAP S/4HANA Cloud Private Edition"** sebagai entitas utama (expand sekali), ikuti sebutan sumber saat mengutip. Jangan memakai "SAP Cloud ERP Private" tanpa keterangan — tidak diverifikasi sebagai nama di sumber-sumber artikel ini.
- ⚠️ **Klaim hasil bisnis Tigaraksa** (efisiensi, skalabilitas, insight real-time) = bahasa siaran pers aspiratif — jangan dikutip sebagai hasil terukur; cukup tanggal kick-off/go-live + sistem yang diimplementasikan.
- ⚠️ **Extended maintenance 2030 & opsi transisi ECC** — terverifikasi tetapi DILARANG dibahas (dedup: milik `sap-ecc-2027-c01`). Hanya 31 Desember 2027 sebagai titik mundur.
- ⚠️ **Central Finance 15–18 bulan** — terverifikasi tapi di luar lingkup artikel (bukan jalur migrasi RISE umum di Indonesia); lewati agar tetap ~900 kata.

## Definition snippet draft (40–60 kata — verbatim untuk blockquote "Ringkasnya:")

> Ringkasnya: timeline migrasi RISE with SAP dari assessment hingga go-live mengikuti enam fase metodologi SAP Activate — Discover, Prepare, Explore, Realize, Deploy, dan Run. Estimasi resmi SAP: konversi brownfield 12–15 bulan, bluefield 12–18 bulan, greenfield 15–21 bulan end-to-end; sejumlah proyek terbukti tuntas dalam 5–6 bulan.

*(44 kata; 1 em-dash — sisakan maksimal 1 lagi untuk seluruh body. Angka end-to-end HANYA di sini — body tidak boleh mengulang kalimat ini dengan kata lain; H2 #1 memakai poin baru: spektrum nyata + dua contoh bertanggal.)*

## Notes for image-planner

N/A — batch conditional 2026-07 tanpa stage image-planner dan TANPA `{IMAGE_NN}` (style_addendum §3). Konsep visual fase-durasi diselesaikan lewat tabel H2 #2 di atas.
