---
brief_id: "sap-build-apps-c01"
researcher_run_date: "2026-09-01"
sources_cited: 6
flags: 5
batch: "conditional-2026-09"
note: "Slim dossier per style_addendum 2026-09 — body target ~900 kata; FAQ 2–3; 1 tabel; definisi SEKALI di snippet."
---

# Research Dossier: SAP Build Apps — Membuat Aplikasi Bisnis dengan Pendekatan Low-Code

## TL;DR for the writer
- **Fakta load-bearing (verified):** SAP Build Apps standalone **di-deprecate 23 Maret 2026**; **tidak ada dampak mendadak** — pelanggan existing tetap akses penuh + SLA + maintenance sampai akhir kontrak; path forward = **unified SAP Build** (low-code + code-first **SAP Build Code** + AI generatif).
- **Aplikasi lama TIDAK bisa auto-migrate.** SAP menyediakan konversi berbantuan: arsip **.mtar** diproses tooling internal SAP → output **best-effort** dalam **SAPUI5 atau React** untuk dikembangkan lanjut. Rumuskan hati-hati ("berbantuan", "best-effort") — bukan tombol otomatis.
- **Nuance 30 Sep 2026 (hedge wajib):** SAP Build Apps dihapus dari daftar *Eligible Cloud Services* **per 30 September 2026** — artinya **tidak tersedia untuk perpanjangan/renewal** setelah tanggal itu, TETAP dapat dipakai hingga akhir term langganan berjalan. **JANGAN tulis "aplikasi dihapus/dimatikan 30 Sep 2026".**
- **BTP → BAIP:** SAP BTP menjadi **SAP Business AI Platform (BAIP)** per **30 Juni 2026**; konsolidasi BTP + Business Data Cloud + Business AI (arah SAPPHIRE 2026), bukan sekadar rename.
- **AppGyver diakuisisi SAP 2021** (diumumkan 18 Feb 2021). **GigaOm (Maret 2025): SAP Build ~3x lebih cepat, 59% lebih hemat effort** vs custom development.
- **Batas dedup:** JANGAN tulis "apa itu low-code umum", bedah menyeluruh BTP/BAIP, atau tur deskriptif suite — itu milik hub + `low-code-platform-02`. Fokus: 6 langkah + tabel keputusan + status 2026.

## Core facts (verified)

> **Claim**: SAP mendeprekasi SAP Build Apps sebagai produk standalone.
> **Number/specific**: pengumuman **23 Maret 2026**; kapabilitas app-building kini disediakan lewat SAP Build.
> **Source**: SAP Community (blog resmi SAP), "SAP Build Apps Deprecation and The Path Forward", 23–26 Mar 2026 — https://community.sap.com/t5/technology-blog-posts-by-sap/sap-build-apps-deprecation-and-the-path-forward/ba-p/14351750 ; SAP Help Portal "SAP Build Apps – The Path Forward" — https://help.sap.com/docs/build-apps/service-guide/sap-build-apps-path-forward
> **Confidence**: high

> **Claim**: Tidak ada dampak mendadak bagi pelanggan existing.
> **Number/specific**: apa pun lisensinya (BTPEA/PAYG/CPEA atau subscription), akses penuh ke SAP Build Apps berlanjut **sampai akhir kontrak berjalan**; SLA & maintenance dihormati; layanan tetap didukung penuh hingga akhir perjanjian.
> **Source**: SAP Community blog resmi (URL di atas); dikorroborasi help.sap.com path-forward.
> **Confidence**: high

> **Claim**: Path forward adalah unified SAP Build.
> **Number/specific**: SAP Build menyatukan **application development + process automation + business site creation** dalam satu platform yang mendukung **low-code, code-first (SAP Build Code), dan AI generatif**.
> **Source**: SAP Community blog resmi (URL di atas); help.sap.com path-forward.
> **Confidence**: high

> **Claim**: Aplikasi web/mobile lama tidak bisa dipindahkan otomatis; ada konversi berbantuan.
> **Number/specific**: apps existing **tidak bisa di-migrate ke tool lain** dan perlu dibangun ulang; SAP memproses arsip **.mtar** dengan tooling internal → menghasilkan output **best-effort** dalam format **SAPUI5 atau React** untuk dikembangkan lanjut di SAP Build.
> **Source**: SAP Community blog resmi; On Device Solutions ringkasan path-forward — https://ondevicesolutions.com/sap-build-apps-deprecation/
> **Confidence**: high (untuk "tidak auto-migrate"); medium (rumusan detail teknis .mtar → SAPUI5/React — pakai kata "berbantuan/best-effort")

> **Claim**: SAP Build Apps dihapus dari daftar Eligible Cloud Services.
> **Number/specific**: **per 30 September 2026** — tersedia hingga akhir term langganan berjalan, **tidak tersedia untuk renewal** yang mulai setelah tanggal penghapusan. (Terkait **KBA 3731153** "SAP Build Apps deprecation and Standard Plan".)
> **Source**: KBA 3731153 (userapps.support.sap.com/sap/support/knowledge/en/3731153, butuh login) + ringkasan publik SAP Eligible Cloud Services.
> **Confidence**: medium — tanggal benar, TAPI maknanya "tidak bisa renewal setelah 30 Sep 2026", BUKAN "aplikasi dimatikan". Lihat Flags.

> **Claim**: SAP BTP berganti nama menjadi SAP Business AI Platform (BAIP).
> **Number/specific**: efektif **30 Juni 2026**; konsolidasi **SAP BTP + SAP Business Data Cloud + SAP Business AI** menjadi satu lingkungan tergovernansi — arah strategis pasca-SAPPHIRE 2026, bukan sekadar rebrand.
> **Source**: SAPinsider "SAP Sapphire 2026: How SAP Business AI Platform Consolidates…" — https://sapinsider.org/blogs/sap-sapphire-2026-how-sap-business-ai-platform-consolidates-sap-btp-sap-business-data-cloud-and-sap-business-ai/ ; United VARs "From SAP BTP to SAP BAIP" — https://www.united-vars.com/en/beyond/from-sap-btp-to-sap-baip-why-sap-renamed-the-platform-and-what-changed
> **Confidence**: high untuk tanggal & konsolidasi; catatan: sebagian sumber membahas rename pada level **competency PartnerEdge** — inti "BTP → BAIP, pertengahan 2026, konsolidasi" tetap akurat. Bila writer ragu presisi, "pertengahan 2026" aman.

> **Claim**: SAP mengakuisisi AppGyver, cikal bakal SAP Build Apps.
> **Number/specific**: **2021** (diumumkan 18 Februari 2021); AppGyver = pionir no-code app builder web & mobile asal Helsinki.
> **Source**: SAP News Center "SAP Acquires No-Code Development Pioneer AppGyver", Feb 2021 — https://news.sap.com/2021/02/sap-acquires-no-code-development-pioneer-appgyver/
> **Confidence**: high

> **Claim**: Produktivitas SAP Build vs custom development (studi independen).
> **Number/specific**: **GigaOm (Maret 2025): ~3x lebih cepat** dan **59% lebih hemat effort** dibanding pengembangan custom tradisional.
> **Source**: SAP News Center "GigaOm Benchmark Study: SAP Build Speed of Development", Mar 2025 — https://news.sap.com/2025/03/sap-build-gigaom-study-greater-speed-development/
> **Confidence**: high (angka vendor-commissioned — atribusi "GigaOm, Maret 2025" wajib eksplisit)

> **Claim**: SAP Build memayungi tiga kapabilitas fungsional berbeda.
> **Number/specific**: **App builder** (eks SAP Build Apps) → aplikasi/antarmuka baru; **SAP Build Process Automation** → otomasi alur kerja & tugas berulang (workflow + RPA); **SAP Build Work Zone** → portal/business site sebagai satu pintu akses. Plus **SAP Build Code** (code-first + AI generatif).
> **Source**: SAP Build product hub — https://www.sap.com/products/technology-platform/build.html ; learning.sap.com/products/sap-build
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP tech) | Facts to state accurately | Where in article | Soltius anchor |
|---|---|---|---|
| SAP Build Apps (eks AppGyver) | Visual low-code app builder web/mobile; deprecated standalone 23 Mar 2026 | Snippet + H2 #1/#3 | — (jangan self-mention di body) |
| SAP Build (suite) + Build Code | App builder + Process Automation + Work Zone + Build Code; path forward | H2 #2, Kesimpulan | **CTA anchor = SAP Build / BTP** |
| SAP Business AI Platform (BAIP)/BTP | Platform tempat SAP Build berjalan; BTP→BAIP 30 Jun 2026 | H2 #3 | Digital Platform + Implementation |
| Clean core / side-by-side extensibility | SAP Build = alat ekstensi yang menjaga core S/4HANA standar | H2 #2 (cousin link) | Implementation + Enhancement |

Reminder: Soltius **mengimplementasikan/membangun/mengintegrasikan/mendukung** ekstensi low-code di atas SAP Build — **bukan pembuat** SAP Build/BTP/BAIP. Maks **2** self-mention (Kesimpulan + CTA baris terakhir). Positioning line yang cocok: **"SAP Platinum Partner melalui United VARs"** (topik teknis SAP).

## Authoritative external sources (pilih 1–2 untuk inline — addendum §4)
1. **SAP resmi — path forward deprekasi** — https://help.sap.com/docs/build-apps/service-guide/sap-build-apps-path-forward (atau blog resmi SAP Community https://community.sap.com/t5/technology-blog-posts-by-sap/sap-build-apps-deprecation-and-the-path-forward/ba-p/14351750) — *what it backs*: deprekasi 23 Mar 2026, akses hingga akhir kontrak, unified SAP Build, konversi .mtar. **WAJIB inline di H2 #3.**
2. **SAP News Center — GigaOm study, Mar 2025** — https://news.sap.com/2025/03/sap-build-gigaom-study-greater-speed-development/ — *what it backs*: SAP Build ~3x lebih cepat, 59% lebih hemat effort. (Pakai bila angka dipakai di FAQ Q3.)

> Catatan scrape: `help.sap.com` & `community.sap.com` mengembalikan **403** saat WebFetch langsung (SPA/anti-bot) — fakta dikonfirmasi via WebSearch resmi + ringkasan pihak ketiga yang mengutip persis. URL SAP tetap sah untuk sitasi inline; jangan mengarang angka di luar yang terverifikasi di atas.

## FAQ Q&As (draft — pakai 2, opsional 3; Bahasa Indonesia)

### Apa bedanya SAP Build Apps dan SAP Build?
SAP Build Apps adalah satu komponen — visual app builder (eks AppGyver) untuk aplikasi web dan mobile. SAP Build adalah suite terpadu yang menyatukan app builder, SAP Build Process Automation, Work Zone, dan Build Code. Sejak 23 Maret 2026 app builder tak lagi dijual sebagai produk standalone. *(≈45 kata; fakta = 23 Mar 2026.)*

### Apakah SAP Build Apps masih bisa dipakai setelah pengumuman deprekasi?
Ya untuk pelanggan existing: akses penuh, SLA, dan maintenance berlanjut hingga akhir kontrak berjalan. SAP mengumumkan deprekasi standalone pada 23 Maret 2026 dan mengarahkan pembangunan baru ke unified SAP Build; provisi instance baru dihentikan setelah term berakhir. *(≈45 kata; fakta = 23 Mar 2026 + akses hingga akhir kontrak.)*

### Apakah bisa membuat aplikasi tanpa coding di SAP? (opsional — hanya bila word count < ~950)
Bisa, lewat pendekatan low-code/no-code drag-and-drop di SAP Build. Studi benchmark GigaOm (Maret 2025) mencatat SAP Build sekitar 3x lebih cepat dan 59% lebih hemat effort dibanding pengembangan custom tradisional. *(≈35 kata; fakta = GigaOm 3x/59%, Maret 2025.)*

## Data table for the writer — H2 #2 (elemen terstruktur utama)

Tabel keputusan "kapan pakai yang mana" — dirancang ekstraktabel per baris untuk AI Overview:

| Kebutuhan | Kapabilitas SAP Build | Contoh hasil |
|---|---|---|
| Aplikasi/antarmuka baru bagi pengguna | App builder (eks SAP Build Apps) | Aplikasi approval mobile, form input lapangan |
| Mengotomasi alur kerja & tugas berulang | SAP Build Process Automation | Otomasi persetujuan PO (workflow + RPA) |
| Satu pintu akses ke aplikasi & informasi | SAP Build Work Zone | Portal karyawan, launchpad terpadu |

> After-table line (untuk writer): ketiganya sering dipakai berdampingan — mis. portal Work Zone yang memuat aplikasi hasil app builder, dengan proses di belakang layar diotomasi Process Automation. Di sinilah **cousin link clean core** ditempatkan (SAP Build = alat side-by-side extensibility yang menjaga core S/4HANA tetap standar).

## Supporting element — 6 langkah membangun aplikasi (untuk H2 #1, numbered list)
Alur besar vendor-neutral (bukan tutorial klik-per-klik):
1. **Siapkan lingkungan di SAP Build** (di atas SAP Business AI Platform, dulu SAP BTP) — provisi ruang kerja & peran pengguna.
2. **Hubungkan sumber data** — SAP S/4HANA/SuccessFactors via **OData**; sistem non-SAP via **REST API**; koneksi lewat BTP destinations.
3. **Rancang antarmuka visual** dengan **drag-and-drop** — halaman, komponen UI, navigasi; multi-experience (web, iOS, Android dari satu rancangan).
4. **Tambahkan logika bisnis secara visual** — alur logika tanpa koding tradisional.
5. **Uji dan deploy** — ke web dan app store; manfaatkan autentikasi & governance platform.
6. **Kelola siklus hidup & tata kelola** — lifecycle terpusat, komponen reusable, monitoring agar tidak jadi shadow IT.

*Angka inline yang tersedia: 6 langkah; 3 target deploy (web/iOS/Android); 2 jalur integrasi (OData + REST); 3 kapabilitas SAP Build.*

## Edge cases & nuance
- **Deprekasi ≠ shutdown mendadak.** Frame "tidak ada dampak segera" — akses berlanjut hingga akhir kontrak. Nada alarmis salah dan tidak akurat.
- **30 Sep 2026 adalah batas RENEWAL/katalog, bukan tanggal aplikasi mati.** Lihat Flags.
- **Konversi .mtar berbantuan & best-effort** — bukan migrasi otomatis satu-klik. Hindari menjanjikan kemudahan.
- **BAIP vs BTP:** untuk pembaca, cukup "SAP BTP (kini SAP Business AI Platform/BAIP)". Jangan bedah arsitektur BAIP — milik artikel lain.
- **Risiko memulai baru di produk deprecated:** organisasi yang baru mulai sebaiknya masuk lewat unified SAP Build/Build Code sejak awal — ini honest angle yang justru dicari pembaca.

## Flags (open factual risk)
- ⚠️ **"Hapus/dimatikan 30 Sep 2026"** — SALAH bila ditulis sebagai penghapusan aplikasi. Fakta terverifikasi: dihapus dari **Eligible Cloud Services / tidak tersedia untuk renewal** per 30 Sep 2026; existing tetap jalan sampai akhir term. → Rekomendasi: tulis "tidak lagi tersedia untuk perpanjangan setelah 30 September 2026" ATAU cukup pakai 23 Maret 2026 + "hingga akhir kontrak" dan lewati 30 Sep agar aman.
- ⚠️ **KBA 3731153** — nomor & judul ("SAP Build Apps deprecation and Standard Plan") terverifikasi lewat listing SAP Support, TAPI isi penuh butuh login (tidak bisa dibaca). → Rekomendasi: boleh sebut sebagai rujukan, jangan kutip detail spesifik yang tidak ada di blog/help publik.
- ⚠️ **Detail teknis .mtar → SAPUI5/React** — benar tetapi teknis; rumuskan "konversi berbantuan SAP menghasilkan output best-effort dalam SAPUI5 atau React". Jangan sebut sebagai auto-migrate atau jaminan hasil sempurna.
- ⚠️ **Tanggal BTP→BAIP 30 Juni 2026** — terverifikasi, tetapi sebagian sumber membingkainya pada level competency/PartnerEdge. Inti (BTP→BAIP, pertengahan 2026, konsolidasi SAPPHIRE) akurat. → Bila ragu presisi, "pertengahan 2026" + tandai.
- ⚠️ **Angka GigaOm (3x / 59%)** — studi **commissioned oleh SAP**. Wajib atribusi eksplisit "GigaOm, Maret 2025"; jangan sajikan sebagai fakta netral tanpa sumber.

## Definition snippet draft (40–60 kata)
> **Ringkasnya:** SAP Build Apps (sebelumnya AppGyver) adalah visual app builder low-code/no-code untuk membangun aplikasi bisnis web dan mobile melalui drag-and-drop tanpa koding tradisional, terhubung ke SAP S/4HANA dan sistem lain lewat platform SAP. Sejak 23 Maret 2026, kapabilitasnya disatukan ke dalam suite terpadu SAP Build.

*(≈46 kata. Entitas jelas: SAP Build Apps, AppGyver, SAP Build. Ini satu-satunya tempat definisi muncul — body/H2 DILARANG mengulang.)*
