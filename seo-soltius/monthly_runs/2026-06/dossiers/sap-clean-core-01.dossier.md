---
brief_id: "sap-clean-core-01"
researcher_run_date: "2026-06-02"
sources_cited: 2
flags: 9
research_mode: "degraded-web — WebSearch/WebFetch returned sustained HTTP 529 (service-wide outage 2026-06-02); external facts drawn from established domain knowledge and marked ⚠️ pending live verification"
---

# Research Dossier: Apa Itu Clean Core SAP dan Mengapa Penting Sebelum ke Cloud

> ⚠️ **DEGRADED-WEB RUN (2026-06-02).** WebSearch/WebFetch returned sustained HTTP 529 (Overloaded) on both probe attempts (SAP-official site-restricted search + ECC-maintenance search). Per run instructions, external verification was halted after ~2 minutes and this dossier was built from the researcher's established domain knowledge of SAP clean core — a stable, well-documented topic. **Every external (non-Soltius) fact below carries a confidence rating and the tag "⚠️ pending live verification (web outage 2026-06-02)", with the expected authoritative source-to-verify and its likely URL.** No statistics, rupiah figures, client names, or analyst numbers have been fabricated. When tools recover, the writer/editor (or a re-run of this researcher) should confirm each flagged claim against the cited SAP-official page and stamp the access date.

## TL;DR for the writer

- **Clean core is a principle, not a product.** It means keeping the SAP S/4HANA digital core standard and upgrade-safe by putting customization *outside* the core (on SAP BTP, or via released/upgrade-stable extensibility) instead of modifying standard objects. Frame the whole article at *decision* level (CIO / transformation lead), not as an ABAP tutorial — that's the brief's whitespace.
- **It has multiple dimensions** (commonly cited as ~6: software/no core modification, extensions, integrations, data, processes/master data, and operations/governance). Treat the exact dimension list as **pending verification** — SAP's framing has evolved; confirm the current named set on SAP's clean-core guidance before asserting it as "official."
- **Three extensibility flavors** the reader must grasp at a glance: **in-app / key-user extensibility** (configure/extend inside S/4HANA using released objects), **side-by-side extensibility** (build separate apps on **SAP BTP**, connected to the core via released/public APIs), and **ABAP Cloud** (the governed, upgrade-stable ABAP development model that enforces use of released objects only).
- **Clean core is effectively a prerequisite for cloud.** S/4HANA Cloud **public edition** only permits *released* (whitelisted, upgrade-stable) extensibility — so legacy core modifications simply don't move there. This is the spine of the "why it matters before cloud" angle; tie it to the ECC end-of-mainstream-maintenance pressure (2027, extended/optional to 2030 — **verify**).
- **The honest, original beat** (Core-Update value): legacy "Z" custom code is the technical debt that most inflates migration cost/time — but clean core is *not* every company's day-one priority. If a firm is far from an S/4HANA plan, or doing a clean greenfield build, the sequence differs. State the qualitative cost point; **do not** attach an unsourced percentage. If a Gartner/IDC figure on custom-code share of migration cost is wanted, flag it for sourcing on verification rather than inventing a number.

---

## Core facts (verified / known)

> In this degraded run, "verified" = high-confidence established domain knowledge. Each carries a verification flag. Soltius facts are verified against `knowledge_base/company_profile.md` (no web needed). External facts are flagged ⚠️ pending live verification.

> **Claim 1**: *Clean core* adalah prinsip menjaga inti (digital core) SAP S/4HANA tetap standar dan mudah di-upgrade dengan menempatkan kustomisasi di luar inti, bukan memodifikasi objek standar.
> **Number/specific**: Konsep arsitektural SAP, bukan produk; dipromosikan SAP sejalan dengan dorongan ke S/4HANA Cloud & RISE with SAP.
> **Source-to-verify**: SAP — "What is clean core" / clean core learning journey (likely `https://learning.sap.com/` atau `https://help.sap.com/` — cari "clean core")
> **Confidence**: high — ⚠️ pending live verification (web outage 2026-06-02)

> **Claim 2**: Clean core terdiri dari beberapa **dimensi** (umumnya dikutip ~6): software (tanpa modifikasi inti), extensions (ekstensi), integrations (integrasi), data (kualitas/master data), processes (proses standar), dan operations/governance (operasi & tata kelola).
> **Number/specific**: Jumlah dimensi sering disebut 5–6; penamaan persis pernah bergeser antar versi materi SAP.
> **Source-to-verify**: SAP — clean core dimensions / "keep the core clean" guidance (likely `https://help.sap.com/` atau `https://community.sap.com/`)
> **Confidence**: medium — jumlah & nama dimensi resmi harus dikonfirmasi; jangan klaim "resminya 6 dimensi: X,Y,Z" tanpa cek. ⚠️ pending live verification (web outage 2026-06-02)

> **Claim 3**: **In-app / key-user extensibility** = memperluas S/4HANA *dari dalam* (mis. custom field, custom logic) menggunakan objek/extension point yang **released** oleh SAP sehingga tetap upgrade-stable.
> **Number/specific**: Dilakukan key user/business expert lewat alat in-app (mis. Key User Tools / Custom Fields & Logic); tidak menyentuh kode standar.
> **Source-to-verify**: SAP — in-app extensibility / key-user extensibility docs (likely `https://help.sap.com/`)
> **Confidence**: high — ⚠️ pending live verification (web outage 2026-06-02)

> **Claim 4**: **Side-by-side extensibility** = membangun aplikasi/ekstensi *terpisah* di **SAP BTP (Business Technology Platform)**, terhubung ke inti S/4HANA lewat **released/public API** — sehingga inti tetap bersih.
> **Number/specific**: BTP adalah platform pengembangan/integrasi di luar inti; ekstensi besar/kompleks hidup di sini, bukan di dalam S/4HANA.
> **Source-to-verify**: SAP — side-by-side extensibility on SAP BTP (likely `https://help.sap.com/` / `https://www.sap.com/products/technology-platform`)
> **Confidence**: high — nama "SAP BTP" sudah stabil; ⚠️ pending live verification (web outage 2026-06-02)

> **Claim 5**: **ABAP Cloud** adalah model pengembangan ABAP yang ter-governance dan upgrade-stable: developer hanya boleh memakai **released objects/API** publik SAP, bukan API/objek internal yang bisa berubah saat upgrade.
> **Number/specific**: ABAP Cloud adalah aturan/model development (bukan produk terpisah); berlaku di S/4HANA Cloud dan, bertahap, sebagai cara "clean" menulis ABAP di on-stack juga.
> **Source-to-verify**: SAP — ABAP Cloud / "ABAP Cloud development model" (likely `https://community.sap.com/` atau `https://help.sap.com/`)
> **Confidence**: medium — definisi inti benar, tetapi cakupan ("di mana boleh dipakai") berkembang; konfirmasi framing terkini. ⚠️ pending live verification (web outage 2026-06-02)

> **Claim 6**: **SAP S/4HANA Cloud public edition hanya mengizinkan extensibility yang *released*** (whitelisted/upgrade-stable). Modifikasi inti gaya lama tidak dapat dibawa ke public edition.
> **Number/specific**: Ini pembeda kunci public vs private: public = multi-tenant, hanya released extensibility; private = single-tenant, lebih banyak keleluasaan tetapi clean core tetap direkomendasikan kuat.
> **Source-to-verify**: SAP — S/4HANA Cloud public edition extensibility (likely `https://help.sap.com/` — "extensibility S/4HANA Cloud public")
> **Confidence**: high (untuk public-only-released) / medium (untuk detail batas private) — ⚠️ pending live verification (web outage 2026-06-02)

> **Claim 7**: Mainstream maintenance untuk **SAP ECC / SAP Business Suite 7** berakhir **2027**, dengan opsi **extended maintenance berbayar hingga 2030** (lalu customer-specific maintenance setelahnya).
> **Number/specific**: 2027 (mainstream), 2030 (extended berbayar). Tanggal ini **pernah bergeser** secara historis (sempat 2025 sebelum diperpanjang).
> **Source-to-verify**: SAP — maintenance strategy / Business Suite 7 maintenance (likely `https://news.sap.com/` atau `https://support.sap.com/`)
> **Confidence**: high pada angka 2027/2030 sebagai panduan SAP saat ini — namun **wajib** dikonfirmasi karena historis berubah. ⚠️ pending live verification (web outage 2026-06-02)

> **Claim 8**: Tujuan utama clean core: **upgrade lebih cepat dan lebih murah** + **kesiapan cloud**. Inti standar bisa di-upgrade SAP tanpa mematahkan kustomisasi, karena kustomisasi terisolasi di luar inti / hanya memakai objek released.
> **Number/specific**: Manfaat = mengurangi regression testing & rework saat upgrade; kualitatif (jangan tempel % tanpa sumber).
> **Source-to-verify**: SAP — clean core value / benefits (likely `https://learning.sap.com/` atau `https://www.sap.com/`)
> **Confidence**: high (kualitatif) — ⚠️ pending live verification (web outage 2026-06-02)

> **Claim 9**: **Custom code 'Z' warisan** (modifikasi/objek Z lama di ECC) adalah sumber technical debt yang paling sering memperlambat & mempermahal migrasi/upgrade — sebagian besar tak lagi terpakai namun tetap harus dianalisis/diuji.
> **Number/specific**: Pernyataan kualitatif berbasis pola implementasi; **tanpa angka** kecuali ada sumber analis (lihat Flag).
> **Source-to-verify**: SAP custom code adaptation tooling (mis. SAP Readiness Check / Custom Code Migration app) untuk dukungan konsep; figur biaya butuh sumber analis (Gartner/IDC).
> **Confidence**: high sebagai pernyataan kualitatif; angka apa pun = **low/perlu sumber**. ⚠️ pending live verification (web outage 2026-06-02)

> **Claim 10**: **RISE with SAP** (private-edition path) dan **GROW with SAP** (public-edition path untuk net-new/mid-market) adalah jalur transformasi cloud SAP yang berjalan lebih mulus saat core bersih.
> **Number/specific**: RISE ≈ bundel menuju S/4HANA Cloud private edition + tools/services; GROW ≈ menuju S/4HANA Cloud public edition. Clean core mengurangi friksi keduanya.
> **Source-to-verify**: SAP — RISE with SAP / GROW with SAP (likely `https://www.sap.com/products/erp/rise.html` & `.../grow.html`)
> **Confidence**: medium — nama & cakupan paket RISE/GROW berkembang; konfirmasi positioning terkini. ⚠️ pending live verification (web outage 2026-06-02)

> **Claim 11**: **Released API / public API** adalah objek integrasi/ekstensi yang SAP janjikan stabil lintas upgrade (punya kontrak/lifecycle). Memakai *hanya* objek released = inti tetap upgrade-safe.
> **Number/specific**: SAP mengkurasi katalog objek released (mis. via SAP API Business Hub / Business Accelerator Hub & released-status di sistem).
> **Source-to-verify**: SAP — released objects / SAP Business Accelerator Hub (likely `https://api.sap.com/`)
> **Confidence**: high (konsep) / medium (nama portal — pernah berganti dari "API Business Hub" ke "Business Accelerator Hub"). ⚠️ pending live verification (web outage 2026-06-02)

> **Claim 12**: **Clean core maturity** = kerangka untuk menilai seberapa "bersih" core sebuah organisasi (mis. seberapa banyak modifikasi inti vs ekstensi yang patuh), dipakai untuk memprioritaskan remediasi.
> **Number/specific**: Konsep penilaian; SAP & mitra menyediakan tools/assessment (mis. SAP Readiness Check menyorot custom code & kesiapan).
> **Source-to-verify**: SAP — clean core maturity / readiness (likely `https://help.sap.com/` atau `https://community.sap.com/`)
> **Confidence**: medium — istilah dipakai luas tetapi definisi "level" bisa beragam antar materi SAP/mitra; jangan klaim skala numerik resmi tanpa cek. ⚠️ pending live verification (web outage 2026-06-02)

> **Claim 13**: **In-app vs side-by-side** bukan "salah satu" — keduanya komplementer. Aturan praktis: ekstensi kecil/spesifik-modul → in-app (released); aplikasi/logika besar, integrasi lintas sistem, atau UX kustom → side-by-side di BTP.
> **Number/specific**: Keputusan didorong ukuran, lifecycle, dan keterhubungan ekstensi; bukan preferensi developer.
> **Source-to-verify**: SAP — extensibility guidance / "extensibility options S/4HANA" (likely `https://help.sap.com/`)
> **Confidence**: medium-high — ⚠️ pending live verification (web outage 2026-06-02)

> **Claim 14 (Soltius — verified via knowledge_base, no web needed)**: Soltius adalah **SAP Platinum Certified Channel Partner & Value Added Reseller**, anggota **United VARs**, dan bagian dari **Metrodata Group sejak 1998** (diakuisisi 2008).
> **Number/specific**: 200+ konsultan, 120+ klien; kontributor pendapatan terbesar bagi SAP Indonesia (diakui sejak 2015).
> **Source**: `knowledge_base/company_profile.md` (pre-approved).
> **Confidence**: high — sumber internal terverifikasi (tidak butuh web).

> **Claim 15 (Soltius — verified via knowledge_base)**: Layanan Soltius yang relevan untuk topik ini = **Implementation (incl. Enhancement & Migration)** + **ERP Strategy**. Soltius **menerapkan/memigrasi/mendukung** SAP — **tidak membangun** software-nya.
> **Source**: `knowledge_base/company_profile.md` + `product_matrix.md` baris #6.
> **Confidence**: high — sumber internal terverifikasi.

> **Claim 16**: **SAP Build** (Build Apps / Build Process Automation / Build Work Zone) adalah portofolio low-code SAP **di atas SAP BTP** — salah satu *cara* membangun ekstensi side-by-side tanpa menyentuh inti.
> **Number/specific**: Disebut hanya secukupnya (artikel ini bukan deep-dive low-code; itu sibling cluster). Nama komponen Build berkembang — verifikasi.
> **Source-to-verify**: SAP — SAP Build (likely `https://www.sap.com/products/technology-platform/low-code.html`)
> **Confidence**: medium — nama komponen Build berubah; sebut ringan & verifikasi. ⚠️ pending live verification (web outage 2026-06-02)

*(16 claims captured; ≥12 satisfied. Claims 14–15 are Soltius facts verified internally; the rest are external and flagged for live verification.)*

---

## Solution focus + Soltius anchor (from product_matrix.md, baris #6)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **Prinsip clean core + dimensinya** | Inti S/4HANA tetap standar; kustomisasi pindah ke luar inti; ~6 dimensi (verifikasi nama resmi) | H2 #1 (definisi) + H2 #2 (dimensi/tabel) | — (edukasi, bukan jualan) |
| **Model extensibility: in-app vs side-by-side (SAP BTP) vs ABAP Cloud** | In-app pakai released objects; side-by-side di **SAP BTP** lewat released API; ABAP Cloud = model ABAP upgrade-stable (released-only) | H2 #3 (question-format) | — (vendor-netral; BTP sebagai *tempat* ekstensi, bukan penyebutan Soltius) |
| **Kesiapan cloud: S/4HANA Cloud public = released-only; tenggat ECC 2027/2030** | Public hanya released extensibility; clean core = prasyarat de-facto cloud; ECC 2027 (extended 2030 — verifikasi) | H2 #4 (cloud-readiness) | Opsional 1 aside: Soltius **Migration** (di bawah Implementation) — sangat ringan |
| **Soltius — Implementation + Enhancement + ERP Strategy** | "Soltius membantu perusahaan menerapkan prinsip clean core — memindahkan kustomisasi ke SAP BTP — agar sistem tetap mudah di-upgrade dan siap cloud." | Closing | **Implementation/Enhancement + ERP Strategy** |
| **Soltius — status kredibilitas** | "Sebagai SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group sejak 1998, Soltius mendampingi perusahaan dari penilaian custom code hingga migrasi S/4HANA dan dukungan pasca go-live." | Closing | **SAP Platinum / United VARs / Metrodata 1998** |

**Reminder:** Soltius **implements/migrates/supports** clean core — it does **not build** SAP, S/4HANA, BTP, or Build. **Max 2–3 Soltius self-mentions** (closing CTA + at most one mid-article aside in H2 #5). No invented client names, project values, or cost percentages. No superlatives ("terbaik/nomor satu") — only the verified "kontributor pendapatan terbesar bagi SAP Indonesia (sejak 2015)" recognition if a ranking-style line is needed.

---

## Authoritative external sources (≥2 strong, for the writer to link out)

> ⚠️ Both URLs are **source-to-verify** (degraded run; not fetched live). Confirm exact landing URL + access date when tools recover.

1. **SAP — "What is clean core" / Clean Core learning journey & extensibility guidance** — likely `https://learning.sap.com/` (cari "clean core") atau `https://help.sap.com/` — *what it backs*: definisi clean core, daftar dimensi, model in-app vs side-by-side vs ABAP Cloud, klaim "S/4HANA Cloud public hanya released extensibility". **Otoritas tertinggi untuk fakta produk SAP.** ⚠️ pending live verification (web outage 2026-06-02).
2. **SAP — Maintenance strategy / SAP Business Suite 7 (ECC) maintenance dates** — likely `https://news.sap.com/` atau `https://support.sap.com/` (cari "Business Suite 7 maintenance 2027 2030") — *what it backs*: akhir mainstream maintenance ECC 2027 + extended berbayar 2030. ⚠️ pending live verification (web outage 2026-06-02).

**Recommended pair to cite (both SAP-official, highest authority):** Source #1 (clean core / extensibility) for the conceptual spine, Source #2 (ECC maintenance) for the "why now / cloud deadline" urgency.

> **Optional non-vendor balance (Core-Update originality signal):** a Gartner/IDC/Forrester data point on the share of S/4HANA migration cost/effort driven by custom code / technical debt would strengthen E-E-A-T. **None confirmed in this degraded run — do NOT invent a figure.** Recommendation: writer makes the qualitative point now; editor adds a sourced analyst figure on verification, or attributes it as "menurut [analis], <claim>" only once a real source is in hand.

---

## FAQ Q&As (drafted, Bahasa Indonesia) — 8 entries

> Mirror the brief's PAA/FAQ list. Each 40–80 words, standalone, ≥1 specific fact. (Facts inside also subject to the same ⚠️ verification caveat where external.)

### Apa itu clean core dalam SAP?
Clean core adalah prinsip arsitektur SAP untuk menjaga inti (digital core) SAP S/4HANA tetap standar dan mudah di-upgrade. Caranya, kustomisasi tidak ditanam dengan memodifikasi sistem standar, melainkan dipindahkan ke luar inti — umumnya ke SAP BTP melalui side-by-side extensibility, atau lewat in-app extensibility yang hanya memakai objek released. Tujuannya: upgrade lebih cepat, biaya pemeliharaan lebih rendah, dan sistem siap pindah ke cloud.

### Mengapa clean core penting untuk S/4HANA?
Karena inti yang banyak dimodifikasi membuat setiap upgrade S/4HANA berisiko mematahkan kustomisasi, sehingga butuh pengujian dan perbaikan ulang yang mahal. Dengan clean core, SAP dapat memperbarui inti standar tanpa merusak ekstensi Anda, karena ekstensi terisolasi di luar inti dan hanya memakai antarmuka yang stabil (released API). Hasilnya, perusahaan bisa mengikuti inovasi SAP lebih cepat dan menekan technical debt.

### Apa bedanya in-app extensibility dan side-by-side extensibility?
In-app (key-user) extensibility memperluas S/4HANA dari dalam — misalnya menambah field atau logika kustom menggunakan objek yang sudah di-released SAP, sehingga tetap upgrade-safe. Side-by-side extensibility membangun aplikasi terpisah di SAP BTP yang terhubung ke inti lewat released/public API. Aturan praktisnya: kebutuhan kecil dan spesifik-modul cocok in-app; aplikasi besar, UX kustom, atau integrasi lintas sistem sebaiknya side-by-side agar inti tetap bersih.

### Apa hubungan clean core dengan SAP BTP?
SAP BTP (Business Technology Platform) adalah tempat ekstensi side-by-side hidup. Alih-alih memodifikasi inti S/4HANA, pengembangan kustom yang kompleks dibangun di BTP dan disambungkan ke inti melalui released/public API. Dengan begitu inti tetap standar dan upgrade-safe, sementara inovasi tetap berjalan. Singkatnya, BTP adalah "ruang aman" untuk berinovasi di luar inti — salah satu pilar teknis utama dalam menerapkan clean core.

### Apakah clean core wajib untuk migrasi ke SAP S/4HANA Cloud?
Secara praktik, ya — terutama untuk S/4HANA Cloud public edition, yang hanya mengizinkan extensibility yang sudah di-released (upgrade-stable). Modifikasi inti gaya lama tidak bisa dibawa ke sana. Pada private edition keleluasaannya lebih besar, tetapi SAP tetap sangat menyarankan clean core agar upgrade dan adopsi inovasi tetap lancar. Jadi clean core berfungsi sebagai prasyarat de-facto kesiapan cloud, bukan sekadar praktik baik opsional.

### Apa itu ABAP Cloud?
ABAP Cloud adalah model pengembangan ABAP yang ter-governance dan upgrade-stable: developer hanya boleh memakai objek dan API yang sudah di-released SAP, bukan objek internal yang bisa berubah saat upgrade. Model ini memastikan kode kustom yang ditulis tetap bersih dan tidak mematahkan inti standar. ABAP Cloud adalah cara "clean" menulis ABAP di lingkungan cloud SAP — selaras langsung dengan prinsip clean core.

### Apa risiko jika core SAP terlalu banyak dikustomisasi?
Kustomisasi inti yang berlebihan menumpuk menjadi technical debt: setiap upgrade SAP berpotensi mematahkannya, sehingga proyek upgrade jadi lambat, mahal, dan penuh pengujian regresi. Dalam praktik implementasi, banyak modifikasi "Z" warisan yang bahkan sudah tidak terpakai namun tetap harus dianalisis dan diuji. Akumulasi ini juga sering menjadi penghambat terbesar saat perusahaan ingin pindah ke S/4HANA Cloud.

### Bagaimana cara mulai menerapkan prinsip clean core?
Mulailah dengan inventarisasi seluruh kustomisasi dan custom code yang ada, lalu klasifikasikan: mana yang dipertahankan, mana yang dihapus karena tak terpakai, dan mana yang dibangun ulang sebagai ekstensi di SAP BTP. Setelah itu, tetapkan tata kelola (governance) agar tim hanya memakai released objects ke depan sehingga inti tidak "kotor" lagi. Penilaian kematangan (clean core maturity) membantu memprioritaskan langkah remediasi.

---

## Data tables for the writer

### Tabel wajib (H2 #2): Modifikasi inti (cara lama) vs Ekstensi di luar inti (clean core)

| Aspek | Modifikasi inti (cara lama) | Ekstensi di luar inti (clean core) |
|---|---|---|
| **Pendekatan** | Mengubah/menimpa objek & kode standar SAP di dalam inti | Menambah fungsi lewat in-app (released) atau side-by-side di SAP BTP, terhubung via released API |
| **Contoh** | Memodifikasi program/tabel standar, user-exit invasif, kode "Z" yang menyentuh objek inti | Custom field/logic via key-user tools; aplikasi/integrasi di SAP BTP; ABAP Cloud (released-only) |
| **Konsekuensi saat upgrade** | Berisiko patah; butuh adaptasi & regression testing besar tiap upgrade | Tetap upgrade-safe; inti standar bisa di-upgrade tanpa merusak ekstensi |
| **Dampak biaya** | Technical debt menumpuk; biaya & waktu upgrade/migrasi membengkak | Biaya pemeliharaan & upgrade lebih rendah; inovasi SAP lebih cepat diadopsi |
| **Kesiapan cloud** | Sulit/mahal; tidak kompatibel dengan S/4HANA Cloud public (released-only) | Siap cloud; selaras dengan S/4HANA Cloud (public/private) & jalur RISE/GROW |

> ⚠️ Isi tabel = konsep clean core yang stabil; tetap diverifikasi terhadap SAP-official saat tool pulih. Ini bait featured-snippet & AI-Overview yang mudah diekstrak baris-per-baris — pertahankan struktur ringkas.

### Tabel pendukung opsional (boleh dipakai writer di H2 #3 atau #4): Tiga model extensibility

| Model | Di mana | Kapan dipakai | Catatan upgrade-safe |
|---|---|---|---|
| **In-app / key-user** | Di dalam S/4HANA | Ekstensi kecil/spesifik-modul (field, logika ringan) | Aman selama hanya memakai released extension points |
| **Side-by-side** | Di **SAP BTP** (di luar inti) | Aplikasi/logika besar, UX kustom, integrasi lintas sistem | Aman; tersambung ke inti lewat released/public API |
| **ABAP Cloud** | Model development ABAP (cloud-ready) | Pengembangan ABAP yang harus upgrade-stable | Aman; wajib pakai released objects/API saja |

> ⚠️ pending live verification (web outage 2026-06-02) — konfirmasi nama & batasan tiap model di SAP-official.

---

## Edge cases & nuance

- **Clean core ≠ "tanpa kustomisasi".** Salah kaprah umum. Clean core *mengizinkan* kustomisasi — asalkan di tempat & cara yang benar (released/in-app/side-by-side), bukan dengan memodifikasi inti. Tegaskan ini agar pembaca tidak menyimpulkan "harus standar polos".
- **Public vs private bukan biner soal clean core.** Public edition memaksa released-only; private edition lebih longgar (masih bisa beberapa modifikasi) tetapi SAP tetap mendorong clean core. Jangan menyamaratakan "cloud = tidak boleh kustom".
- **Kapan clean core BELUM jadi prioritas utama (sudut jujur, Core-Update value).** Jika perusahaan masih jauh dari rencana S/4HANA (mis. baru saja meng-upgrade ECC dan belum berniat migrasi), atau sedang membangun greenfield bersih dari nol (di mana clean core otomatis tercapai), maka urutan prioritasnya berbeda — yang mendesak adalah inventarisasi/klasifikasi custom code lebih dulu, bukan remediasi besar-besaran hari ini.
- **Greenfield vs brownfield mengubah relevansi.** Greenfield = mulai bersih (clean core lebih mudah dijaga sejak awal). Brownfield (konversi sistem) = membawa custom code lama → di sinilah remediasi clean core paling berat. (Catatan: deep-dive brownfield/greenfield adalah sibling article masa depan — jangan over-cover.)
- **Tools eksis untuk menilai, bukan sihir.** SAP menyediakan instrumen seperti SAP Readiness Check / Custom Code Migration app untuk menyorot custom code & kesiapan — sebut konsepnya jika perlu, **verifikasi nama tool** sebelum menyebut spesifik.
- **Penamaan SAP berubah.** "API Business Hub" → "SAP Business Accelerator Hub"; komponen "SAP Build"; cakupan "RISE/GROW" — semuanya pernah berganti nama/scope. Writer harus pakai nama yang dikonfirmasi dossier, bukan ingatan lama.

---

## Flags (open factual risk)

1. ⚠️ **Definisi & jumlah/nama dimensi clean core** (Claim 1–2): jumlah sering disebut ~6 tetapi nama resmi & jumlah persis pernah bergeser. → **Rekomendasi**: phrasing "umumnya dijelaskan dalam beberapa dimensi seperti..." daripada "resminya ada 6 dimensi: X, Y, Z". Konfirmasi SAP-official. *pending live verification (web outage 2026-06-02).*
2. ⚠️ **Tanggal akhir maintenance ECC 2027 / extended 2030** (Claim 7): historis berubah (pernah 2025). → **Rekomendasi**: "menurut panduan SAP terkini, mainstream maintenance berakhir 2027 dengan opsi extended berbayar hingga 2030" + sumber + tanggal akses. Jangan angka mati tanpa sumber. *pending live verification (web outage 2026-06-02).*
3. ⚠️ **Klaim "S/4HANA Cloud public hanya mengizinkan released extensibility"** (Claim 6): inti benar, tetapi detail batas (vs private) berkembang. → **Rekomendasi**: nyatakan untuk public edition secara tegas; untuk private gunakan "lebih leluasa, namun clean core tetap disarankan". Konfirmasi. *pending live verification (web outage 2026-06-02).*
4. ⚠️ **Nama/scope ABAP Cloud** (Claim 5): definisi inti benar; cakupan "di mana boleh dipakai (cloud vs on-stack)" berkembang. → **Rekomendasi**: definisikan sebagai "model pengembangan ABAP upgrade-stable yang hanya memakai released objects"; hindari klaim cakupan spesifik tanpa cek. *pending live verification (web outage 2026-06-02).*
5. ⚠️ **Nama paket RISE with SAP / GROW with SAP & inklusinya** (Claim 10): berkembang. → **Rekomendasi**: sebut sebagai jalur (RISE=private, GROW=public) tanpa merinci isi bundel; konfirmasi. *pending live verification (web outage 2026-06-02).*
6. ⚠️ **Nama portal released objects** (Claim 11): "API Business Hub" sudah berganti menjadi "SAP Business Accelerator Hub". → **Rekomendasi**: gunakan "SAP Business Accelerator Hub" dan/atau "objek yang berstatus released", konfirmasi nama terkini. *pending live verification (web outage 2026-06-02).*
7. ⚠️ **Nama komponen SAP Build** (Claim 16): Build Apps / Build Process Automation / Build Work Zone — pernah berubah. → **Rekomendasi**: sebut hanya secukupnya & vendor-netral; verifikasi nama. *pending live verification (web outage 2026-06-02).*
8. ⚠️ **Angka biaya/risiko dari custom code (analis)** (Claim 9): TIDAK ADA figur yang dikonfirmasi run ini. → **Rekomendasi**: buat **pernyataan kualitatif** saja ("custom code warisan adalah salah satu sumber biaya migrasi terbesar yang sering diremehkan"); editor menambahkan figur Gartner/IDC ber-sumber pada verifikasi, **jangan mengarang angka**. *figure pending sourcing.*
9. ⚠️ **Nama "clean core maturity" sebagai skala/level resmi** (Claim 12): istilah dipakai luas, tetapi tingkatan/skoring bervariasi antar materi SAP/mitra. → **Rekomendasi**: jelaskan sebagai "pendekatan menilai kematangan", hindari mengklaim skala numerik resmi. *pending live verification (web outage 2026-06-02).*

> **Brief-implied claims that could NOT be verified live** (writer should avoid asserting as hard fact until confirmed): (a) jumlah dimensi clean core "resmi" sebagai angka pasti; (b) angka analis apa pun tentang porsi biaya custom code; (c) inklusi paket RISE/GROW yang spesifik. Treat all as flagged above.

---

## Definition snippet draft (40–60 words)

> *Clean core* adalah prinsip menjaga inti sistem SAP S/4HANA tetap standar dan mudah di-upgrade dengan memindahkan kustomisasi ke luar inti — umumnya ke SAP BTP (*Business Technology Platform*) melalui *side-by-side extensibility* dan *released API* — alih-alih memodifikasi sistem standar. Tujuannya: upgrade lebih cepat dan murah, serta sistem yang siap cloud. *(≈51 kata)*

> ⚠️ Konsep stabil; konfirmasi fraseologi terhadap SAP-official "what is clean core" saat tool pulih. (pending live verification, web outage 2026-06-02)

---

## Notes for image-planner

- **Concept 1 — Diagram "Clean Core: inti standar + ekstensi di luar inti".** Lingkaran inti S/4HANA (label "Digital Core — standar, upgrade-safe") di tengah; di luarnya, ekstensi pada SAP BTP terhubung lewat panah berlabel "released/public API"; satu kotak kecil di dalam inti berlabel "in-app extensibility (released)". Tunjukkan kontras: panah merah "modifikasi inti = berisiko upgrade" yang dicoret vs panah hijau "ekstensi di luar inti = upgrade-safe". Alt-text (ID): "Diagram clean core SAP: inti S/4HANA standar dengan ekstensi di SAP BTP lewat released API." *(infografik konseptual — render-friendly; teks label minimal)*
- **Concept 2 — Infografik tabel "Modifikasi inti vs ekstensi di luar inti".** Dua kolom berdampingan (cara lama vs clean core) dengan baris: pendekatan, contoh, konsekuensi upgrade, dampak biaya, kesiapan cloud. Visualisasi langsung dari tabel wajib H2 #2 — bagus untuk featured snippet & mudah dibagikan kolega. Alt-text (ID): "Perbandingan modifikasi inti SAP versus ekstensi clean core di luar inti." *(text-heavy — jika generator FLUX kesulitan render teks, tandai `fallback_recommended: true` / pertimbangkan OpenAI gpt-image-1 atau infografik desain manual.)*
- **Concept 3 — Timeline "Tekanan tenggat: ECC → S/4HANA".** Garis waktu sederhana: titik "ECC mainstream maintenance berakhir 2027" → "extended maintenance (berbayar) hingga 2030" → "S/4HANA Cloud (clean core = prasyarat)". Memperkuat urgensi H2 #4. Alt-text (ID): "Linimasa akhir dukungan SAP ECC 2027–2030 menuju migrasi S/4HANA." *(angka pada timeline ⚠️ pending live verification — pastikan 2027/2030 dikonfirmasi sebelum final render.)*
