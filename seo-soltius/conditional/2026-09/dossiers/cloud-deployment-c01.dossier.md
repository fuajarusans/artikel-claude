---
brief_id: "cloud-deployment-c01"
researcher_run_date: "2026-09-01"
sources_cited: 4
flags: 5
batch: "conditional-2026-09"
addendum_applied: true
---

# Research Dossier: Public vs Private vs Hybrid Cloud — Perbedaan dan Cara Memilih

> **Catatan batch:** Dossier ini mengikuti `conditional/2026-09/style_addendum.md` (MENANG atas template default). Konsekuensi: **FAQ hanya 2–3 Q&A** (bukan 5–8), **definisi muncul SEKALI** (di definition snippet — jangan diulang di body/H2), ~900 kata, tanpa image placeholder. Deliverable inti = 8–12 klaim terkuat + 1 elemen terstruktur (tabel head-to-head) + FAQ 2–3 + snippet + 1–2 sitasi + daftar fakta yang wajib dihindari/hedge.

## TL;DR untuk writer

- **NIST SP 800-145 (September 2011)** adalah fondasi otoritas artikel ini: mendefinisikan **4 model deployment** (public, private, hybrid, community), **3 model layanan**, dan **5 karakteristik esensial**. Public/private/hybrid = model **deployment**, bukan model layanan. Sitasi inline wajib di H2 #1.
- **Miskonsepsi utama yang harus diluruskan (didukung teks NIST verbatim):** private cloud **TIDAK** identik dengan server di kantor sendiri. NIST: private cloud "may be owned, managed, and operated by the organization, **a third party**, or some combination of them, and **it may exist on or off premises**." Jadi private bisa **off-premise** dan dioperasikan **pihak ketiga**; yang menentukan adalah **dedikasi ke satu organisasi (single-tenant)**, bukan lokasi fisik.
- **Angka adopsi terverifikasi (pakai INI, jangan menumpuk):** Flexera **2026 State of the Cloud Report** — **73% organisasi menjalankan hybrid** (naik ~3 poin YoY). Report yang sama: hanya **~14%** organisasi murni multicloud tanpa private cloud. Ini bukti hybrid = arsitektur dominan enterprise + pembeda hybrid vs multicloud.
- **Jembatan RISE (porsi kecil, vendor-neutral):** RISE with SAP mengantar **SAP S/4HANA Cloud** dalam dua edisi — **Private Edition = single-tenant** (ruang kustomisasi lebih luas, custom ABAP, kontrol jadwal upgrade, jalur brownfield dari ECC), **Public Edition = multi-tenant SaaS** (upgrade otomatis dua kali/tahun, ekstensibilitas key-user/BTP). Petakan ke sumbu deployment saja — **jangan** bedah tuntas (itu milik `cloud-erp-vs-on-premise-c01`).
- **Pendorong lokal:** **UU No. 27 Tahun 2022** tentang Pelindungan Data Pribadi (PDP) kerap mendorong beban kerja tertentu ke private/hybrid. Cukup 1 kalimat pendorong; jangan bedah pasal.
- **DILARANG (milik pillar/artikel lain):** mendefinisikan ulang "apa itu cloud computing", 5 karakteristik NIST, dan bedah SaaS/PaaS/IaaS. Cukup 1 kalimat penunjuk bahwa deployment adalah salah satu dari dua sumbu cloud.

---

## Core facts (verified)

> **Claim 1**: Public, private, dan hybrid cloud adalah **model deployment** cloud yang dirumuskan NIST.
> **Number/specific**: NIST SP 800-145 mendefinisikan **4 model deployment** (public, private, hybrid, community), **3 model layanan** (IaaS/PaaS/SaaS), dan **5 karakteristik esensial**.
> **Source**: NIST SP 800-145, "The NIST Definition of Cloud Computing", terbit **September 2011** — https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf ; glosarium resmi: https://csrc.nist.gov/glossary/term/private_cloud (diakses 2026-09-01)
> **Confidence**: high

> **Claim 2**: Private cloud tidak harus berada di premis sendiri dan boleh dioperasikan pihak ketiga.
> **Number/specific**: Teks NIST verbatim — private cloud "may be owned, managed, and operated by the organization, **a third party**, or some combination of them, and **it may exist on or off premises**." Kriteria pembeda = **exclusive use by a single organization** (single-tenant).
> **Source**: NIST SP 800-145 (Sept 2011); CSRC glossary "private cloud" — https://csrc.nist.gov/glossary/term/private_cloud (diakses 2026-09-01)
> **Confidence**: high — pemakaian untuk meluruskan miskonsepsi "private = on-premise" akurat.

> **Claim 3**: Public cloud bersifat multi-tenant (sumber daya berbagi), private cloud single-tenant (didedikasikan satu organisasi).
> **Number/specific**: NIST — public cloud "provisioned for open use by the general public"; private cloud "for exclusive use by a single organization." Profil biaya lazim: public = OpEx/bayar sesuai pemakaian; private = komitmen/CapEx lebih besar di muka.
> **Source**: NIST SP 800-145 (Sept 2011). Profil biaya = karakteristik on-demand self-service + measured service NIST (konvensi industri, bukan angka).
> **Confidence**: high untuk tenancy/definisi; profil biaya = kualitatif (jangan beri angka % TCO — lihat Flags).

> **Claim 4**: Hybrid cloud = kombinasi dua atau lebih infrastruktur berbeda (mis. public + private) yang tetap entitas unik namun terikat teknologi agar data/aplikasi dapat berpindah.
> **Number/specific**: NIST — hybrid cloud "composition of two or more distinct cloud infrastructures (private, community, or public) that remain unique entities, but are bound together by standardized or proprietary technology that enables data and application portability (e.g., **cloud bursting** for load balancing)."
> **Source**: NIST SP 800-145 (Sept 2011).
> **Confidence**: high — "cloud bursting" adalah contoh resmi NIST; aman dipakai.

> **Claim 5**: Hybrid adalah pola dominan di enterprise.
> **Number/specific**: **73% organisasi** menjalankan hybrid ("hybrid estates"), **naik ~3 poin YoY**. Hanya **~14%** murni multicloud tanpa private cloud.
> **Source**: Flexera **2026 State of the Cloud Report** — https://info.flexera.com/CM-REPORT-State-of-the-Cloud (rilis 2026; blog resmi Flexera 2026-state-of-the-cloud). Diakses 2026-09-01.
> **Confidence**: high untuk angka 73% & YoY; angka 14% multicloud-only = sekunder (boleh dipakai untuk membedakan hybrid vs multicloud, sebut sumber sama).

> **Claim 6**: Hybrid cloud berbeda dari multicloud.
> **Number/specific**: **Hybrid** = mencampur ≥2 jenis lingkungan berbeda (public + private) yang **terhubung**. **Multicloud** = memakai **beberapa public cloud** dari penyedia berbeda, bisa **tanpa private sama sekali**. Keduanya sering tertukar; sebuah organisasi bisa hybrid **dan** multicloud sekaligus.
> **Source**: NIST SP 800-145 (hybrid); framing Flexera 2026 (multicloud sebagai kategori terpisah). Diakses 2026-09-01.
> **Confidence**: high — pembedaan ini pembeda kuat vs SERP halaman-1.

> **Claim 7**: RISE with SAP mengantar SAP S/4HANA Cloud dalam Private Edition (single-tenant) dan Public Edition (multi-tenant).
> **Number/specific**: **Private Edition** = single-tenant, mendukung **custom ABAP**, **kontrol jadwal upgrade**, jalur **brownfield** dari ECC. **Public Edition** = multi-tenant SaaS, **upgrade otomatis dua kali setahun**, ekstensibilitas **key-user/BTP**.
> **Source**: SAP community/help (halaman sap.com/community.sap.com sering 403 saat scrape 2026-09-01); dikorroborasi TechTarget SearchSAP, Panaya, PIKON, IgniteSAP (2026). Konsisten dengan `product_matrix.md` row 5 + `cloud-computing-c01`.
> **Confidence**: high untuk tenancy & cadence upgrade (fakta mapan, multi-sumber). **JANGAN** kutip harga/diskon (lihat Flags).

> **Claim 8**: Kepatuhan data pribadi Indonesia dapat mendorong beban kerja tertentu ke private/hybrid.
> **Number/specific**: **UU No. 27 Tahun 2022** tentang Pelindungan Data Pribadi — disahkan **17 Oktober 2022**; **16 bab, 76 pasal**; masa transisi kepatuhan berakhir **17 Oktober 2024**; denda administratif hingga **2% pendapatan tahunan**.
> **Source**: peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022 (JDIH resmi). Diakses 2026-09-01.
> **Confidence**: high untuk penomoran/tahun/struktur. **Pakai hanya sebagai 1 kalimat pendorong** — jangan bedah pasal (di luar scope, dan denda 2% tidak relevan dengan tema deployment).

> **Claim 9**: Keamanan bukan properti bawaan model deployment.
> **Number/specific**: Di semua model, pelanggan tetap memegang tanggung jawab atas data, identitas, dan konfigurasi (prinsip **shared responsibility**). Private/hybrid sering dipilih untuk data sensitif karena **kendali lokasi data**, bukan karena "lebih aman secara otomatis".
> **Source**: Konsensus industri keamanan cloud (shared-responsibility model) + karakteristik NIST. Kualitatif — jangan beri angka insiden.
> **Confidence**: high sebagai framing; jangan tambahkan statistik pelanggaran (lihat Flags).

> **Claim 10 (Soltius — verified by knowledge_base)**: Soltius adalah mitra implementasi SAP, bukan penyedia cloud.
> **Number/specific**: Berdiri **1998**, bagian **Metrodata Group**, **200+ konsultan**; layanan **Migration** (di bawah Implementation) + solusi **Cloud**; pengakuan **Best RISE Partner & Best Cloud Partner (2021, SEA)**; **SAP Platinum Partner via United VARs**.
> **Source**: `knowledge_base/company_profile.md`, `product_matrix.md` (verified-by-default).
> **Confidence**: high. **Pilih SATU credential** untuk positioning line di Kesimpulan — jangan menumpuk.

---

## Solution focus + Soltius anchor (from product_matrix.md, row 5)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **RISE with SAP** → **SAP S/4HANA Cloud** (Private Edition vs Public Edition) | Private = single-tenant (custom ABAP, kontrol upgrade, brownfield dari ECC); Public = multi-tenant SaaS (upgrade otomatis 2×/tahun, ekstensibilitas key-user/BTP). Petakan ke sumbu deployment SAJA. | **H2 #3** (jembatan funnel) | Layanan **Migration** + solusi **Cloud**; **Best RISE & Best Cloud Partner (2021)** — 1 positioning line di **Kesimpulan** |

**Framing guardrail:** Soltius **mengimplementasikan, memigrasikan, mengintegrasikan, dan mendukung** SAP — **bukan** membuat SAP dan **bukan** penyedia public/private/hybrid cloud. Maksimal **2** self-mention total (addendum §6): 1 positioning line di Kesimpulan + 1 soft CTA soltius.co.id di baris terakhir.

---

## Authoritative external sources (1–2 inline — addendum §4)

1. **NIST SP 800-145, "The NIST Definition of Cloud Computing" (September 2011)** — https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf — *what it backs*: definisi 4 model deployment, tenancy public/private, private boleh off-premise/pihak ketiga, definisi hybrid + cloud bursting. **WAJIB tautkan inline di H2 #1.**
2. **Flexera 2026 State of the Cloud Report** — https://info.flexera.com/CM-REPORT-State-of-the-Cloud — *what it backs*: hybrid dipakai **73%** organisasi (dominan enterprise); ~14% murni multicloud. **Tautkan inline di H2 #2** saat menyebut angka adopsi.

> Total sitasi eksternal: **2**. Cukup sesuai addendum (1–2).

---

## Elemen terstruktur untuk writer — Tabel head-to-head (H2 #1)

> Ini **satu-satunya** elemen terstruktur wajib (addendum §4: 1+ tabel diutamakan). Dirancang agar bisa dikutip baris-per-baris oleh AI Overview. Isi sudah diverifikasi netral per dimensi — **jangan condong ke satu model**.

| Dimensi | Public cloud | Private cloud | Hybrid cloud |
|---|---|---|---|
| **Tenancy** *(NIST)* | Multi-tenant — dibagi banyak organisasi | Single-tenant — didedikasikan satu organisasi | Kombinasi keduanya, saling terhubung |
| **Lokasi & kedaulatan data** | Di premis penyedia (region tertentu) | On-premise **atau** off-premise; boleh dioperasikan pihak ketiga | Tersebar; data sensitif ditahan di sisi private |
| **Kontrol & kustomisasi** | Paling rendah (standar penyedia) | Paling tinggi (kendali penuh) | Per beban kerja |
| **Profil biaya** | OpEx, bayar sesuai pemakaian | Komitmen/CapEx lebih besar di muka | Campuran |
| **Latency & kontrol lokasi** | Bergantung region penyedia | Dapat didekatkan ke pengguna/pabrik | Beban latency-sensitif ditaruh di private/edge |
| **Skalabilitas** | Paling elastis dan cepat | Terbatas kapasitas terpasang | Elastis di sisi public (cloud bursting) |
| **Paling cocok saat** | Beban fluktuatif, butuh provisioning cepat | Regulasi/kontrol ketat, beban stabil | Sebagian data wajib terkendali, sisanya butuh elastisitas |

*Catatan pasca-tabel untuk writer (1–2 kalimat honest, menggantikan H2 counter-conventional):* luruskan bahwa **private cloud ≠ server di kantor sendiri** (NIST membolehkan off-premise/pihak ketiga). Sebut sekilas NIST juga mencantumkan **community cloud** sebagai model keempat — **1 klausa, jangan dikembangkan**.

*Aturan pilih (untuk H2 #2, list lead-in bold — bukan tabel kedua; addendum: jangan paksa dua elemen):*
- **Pilih public cloud jika** beban fluktuatif, butuh disediakan cepat, dan data tak terikat kewajiban lokasi.
- **Pilih private cloud jika** kontrol dan kepatuhan ketat, beban stabil, dan data sensitif wajib dikendalikan penuh.
- **Pilih hybrid cloud jika** sebagian data wajib tetap terkendali (mis. karena UU PDP) sementara beban lain butuh elastisitas — **pola paling umum di enterprise (73%, Flexera 2026)**.

---

## Definition snippet draft (40–60 kata) — SATU-SATUNYA tempat definisi

> **Ringkasnya:** public cloud, private cloud, dan hybrid cloud adalah tiga **model deployment** cloud menurut **NIST SP 800-145**. Public cloud memakai sumber daya bersama milik penyedia (multi-tenant); private cloud didedikasikan untuk satu organisasi (single-tenant); hybrid cloud menghubungkan keduanya agar data dan aplikasi dapat berpindah antar-lingkungan.

*(≈45 kata. Entitas jelas: NIST SP 800-145, public/private/hybrid cloud, model deployment, multi/single-tenant. Body/H2 DILARANG menyatakan ulang definisi ini dengan kata lain — addendum.)*

---

## FAQ draft — 2–3 Q&A (jawaban 30–60 kata, tiap jawaban 1 fakta/angka)

> Diambil dari PAA terkuat di brief. **Q1 & Q2 wajib; Q3 hanya jika word count masih di bawah ~960.**

### Q1. Apa bedanya hybrid cloud dan multicloud?
Hybrid cloud menggabungkan public dan private cloud yang **terhubung** agar beban kerja bisa berpindah; multicloud memakai **beberapa public cloud** dari penyedia berbeda, bahkan bisa tanpa private sama sekali. Menurut Flexera 2026, hybrid dipakai **73%** organisasi, sedangkan hanya sekitar 14% murni multicloud. Satu perusahaan bisa keduanya sekaligus.

### Q2. Model cloud mana yang paling aman: public, private, atau hybrid?
Tidak ada model yang "paling aman" secara bawaan. Keamanan ditentukan konfigurasi, pembagian tanggung jawab, dan kepatuhan. Private/hybrid kerap dipilih untuk data sensitif karena kendali lokasi data — relevan dengan **UU No. 27 Tahun 2022** tentang Pelindungan Data Pribadi. Data dan identitas tetap tanggung jawab perusahaan di model mana pun.

### Q3 (opsional). Apakah private cloud selalu berada di kantor sendiri?
Tidak. Menurut **NIST SP 800-145**, private cloud boleh **on-premise atau off-premise** dan dapat dioperasikan pihak ketiga. Yang menentukan adalah dedikasi ke **satu organisasi** (single-tenant), bukan lokasi fisik servernya. (≈38 kata)

---

## Angka spesifik inline tersedia (≥4 wajib — addendum §4)

Writer punya cukup stok angka terverifikasi, pilih ≥4:
1. **NIST SP 800-145**: 4 model deployment, 3 model layanan, terbit **September 2011** (menyumbang 2–3 angka).
2. **Flexera 2026**: hybrid **73%** (+~3 poin YoY); multicloud-only **~14%**.
3. **UU No. 27 Tahun 2022** (nomor + tahun = angka spesifik yang benar).
4. **SAP Public Edition**: upgrade otomatis **2×/tahun** (multi-tenant).
5. Tahun kredensial Soltius: **1998** (berdiri) / **2021** (Best RISE & Best Cloud Partner) di Kesimpulan.

---

## Edge cases & nuance (untuk honest hedging)

- **Hybrid bukan otomatis "the best of both worlds".** Menambah kompleksitas integrasi, tata kelola dua lingkungan, dan biaya manajemen. Sebut di H2 #3 (2–3 kalimat honest).
- **Keputusan sebaiknya per beban kerja, bukan satu keputusan untuk seluruh perusahaan.** Ini poin baru H2 #2 (bukan pengulangan snippet).
- **Community cloud** = model keempat NIST, jarang dipakai komersial di Indonesia — cukup 1 klausa, jangan dikembangkan.
- **Private cloud ≠ on-premise** — miskonsepsi paling sering, wajib diluruskan (didukung NIST verbatim).

---

## Flags (open factual risk — writer WAJIB hindari/hedge)

- ⚠️ **JANGAN kutip harga/diskon S/4HANA Cloud.** Sumber sekunder menyebut "Public 20–35% lebih murah per user"; **TIDAK dikonfirmasi SAP-official** dan brief melarang mengarang harga/edisi/SLA. → **Omit total.**
- ⚠️ **JANGAN beri cadence upgrade Private Edition sebagai angka pasti** (sumber menyebut "setiap 3–5 tahun" tapi bervariasi). Cukup tulis "kontrol jadwal upgrade di tangan pelanggan" tanpa angka tahun. Angka "2×/tahun" untuk **Public** aman (fakta mapan).
- ⚠️ **JANGAN pakai metadata PDF NIST "April 2012".** Tanggal terbit resmi = **September 2011** (konsisten dengan `cloud-computing-c01` & `saas-paas-iaas-c01`). WebFetch PDF gagal ekstraksi teks; verifikasi tanggal via CSRC + konvensi batch.
- ⚠️ **JANGAN tumpuk angka adopsi.** Pakai **hanya** Flexera 2026 (73%). Jangan tambah Gartner/IDC yang tak diverifikasi run ini, jangan hitung turunan.
- ⚠️ **JANGAN kembangkan denda UU PDP (2% pendapatan)** — di luar scope tema deployment; UU No.27/2022 cukup sebagai 1 kalimat pendorong ke private/hybrid. Denda hanya untuk konteks internal dossier, bukan artikel.
- ⚠️ **Batas dedup (milik artikel lain — JANGAN tulis):** definisi "apa itu cloud computing" + 5 karakteristik esensial NIST (milik pillar `cloud-computing-c01`); bedah SaaS/PaaS/IaaS (milik `saas-paas-iaas-c01`); TCO/CapEx-OpEx mendalam untuk ERP (milik `cloud-erp-vs-on-premise-c01`). Cukup 1 kalimat penunjuk bahwa deployment = salah satu dari dua sumbu cloud.

---

## Internal links (TEPAT 2 — dari brief, jangan diubah)

- **Hub (up-link pillar)**: `https://www.soltius.co.id/id/blog/cloud-computing-pengertian-jenis-layanan` — anchor "jenis layanan cloud" — **placement: lead**. (Fallback jika pillar belum live: `https://www.soltius.co.id/id/blog/private-cloud-dan-public-cloud-di-berbagai-sektor-industri`.)
- **Cousin (funnel RISE)**: `https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud` — anchor "migrasi ERP ke cloud" — **placement: H2 #3**.

Semua inline natural — **NO "BACA JUGA"**.
