---
brief_id: "erp-migration-to-the-cloud-05"
researcher_run_date: "2026-08-11"
sources_cited: 17
flags: 7
---

# Research Dossier: Migrasi ERP ke Cloud Belum Siap? Opsi Tenggat SAP ECC 2027

## TL;DR for the writer

- Angka intinya sudah diverifikasi ke SAP resmi dan **stabil**: mainstream maintenance SAP Business Suite 7 / ECC berakhir **31 Des 2027**, disusul **extended maintenance opsional 2028–2030** (premium **+2 poin persen** atas basis maintenance), lalu **customer-specific maintenance** (tanpa update reguler, tanpa perubahan legal, tanpa patch kernel baru). SAP menegaskan tenggat 2027 **tidak diperpanjang** (CEO Christian Klein, awal 2025).
- **Nuansa penting yang jarang ditulis (dan membedakan artikel ini):** ECC 6.0 dengan **Enhancement Package 0–5 sudah berakhir mainstream maintenance-nya 31 Des 2025** (tanpa extended maintenance). Yang mendapat tenggat 2027 + opsi extended 2030 adalah **EHP 6, 7, 8**. Writer TIDAK boleh menulis "semua ECC berakhir 2027" tanpa kualifikasi ini.
- Jalur "perpanjangan sampai 2033" itu nyata tapi bersyarat ketat: namanya resmi **"SAP ERP, private edition, transition option"** — bisa dibeli mulai **2028**, aktif dipakai **2031–2033**, **hanya database HANA**, dan sistem **wajib pindah ke SAP ERP, private edition sebelum akhir 2030**, dalam kerangka RISE (max success plan, GA Januari 2026). Ini bukan "tetap di ECC lama", melainkan transisi terkelola menuju cloud.
- Peta opsi bila belum siap: (1) beli extended maintenance ke 2030; (2) opsi interim/transisi private edition; (3) third-party support pihak ketiga (mis. Rimini Street mengklaim dukungan ECC hingga 2040). Sikapi third-party **netral & faktual** — sebutkan trade-off-nya (kehilangan patch/legal-update resmi SAP, pertimbangan lisensi), bukan endorsement atau serangan.
- Framing Soltius: **advisor ERP Strategy + Migration** yang membantu memilih jalur sesuai profil risiko & kesiapan — bukan menekan go-live cepat. Kredensial: keluarga penghargaan **Best RISE / Best Cloud Partner (SEA)** + SAP Platinum Partner via United VARs. Maks 2–3 sebutan Soltius, di penutup.

## Core facts (verified)

> **Claim**: Mainstream maintenance untuk SAP Business Suite 7 core applications (termasuk SAP ERP 6.0 / ECC) berakhir akhir 2027.
> **Number/specific**: berakhir **31 Desember 2027**.
> **Source**: SAP — Maintenance Strategy "Innovation Commitment for SAP S/4HANA until 2040" (support.sap.com) & SAP Community "Maintenance Timelines for SAP ERP 6.0" (blog posts by SAP), diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Setelah mainstream maintenance, tersedia extended maintenance opsional.
> **Number/specific**: extended maintenance berlaku **3 tahun, awal 2028 hingga 31 Desember 2030**; dikenakan premium **+2 poin persen (percentage points)** atas basis fee maintenance untuk cakupan Business Suite 7.
> **Source**: SAP — support.sap.com maintenance strategy (Business Suite 7 / S/4HANA 2040), diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Pelanggan yang tidak mengambil extended maintenance (atau setelah extended berakhir) beralih ke customer-specific maintenance.
> **Number/specific**: customer-specific maintenance = **tidak ada legal change** (mis. perubahan aturan HR/FI), **tidak ada SAP Kernel patch baru**, **tidak ada Support Package**, penyelesaian masalah spesifik pelanggan atas dasar **time & material**, tanpa SLA. Software menjadi statis (hanya mempertahankan fungsi yang ada).
> **Source**: SAP — Customer-Specific Maintenance documentation (support.sap.com) & SAP Community, diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Tanggal tenggat ECC berbeda menurut Enhancement Package — ini nuansa yang sering terlewat.
> **Number/specific**: **ECC 6.0 EHP 0–5**: mainstream maintenance berakhir **31 Des 2025** (SUDAH lewat), **tanpa** extended maintenance. **ECC 6.0 EHP 6–8**: mainstream berakhir **31 Des 2027**, extended tersedia hingga **31 Des 2030**.
> **Source**: dikonfirmasi SAP (Arne Schmidthals) via IBSolution/CIO/Rimini Street; SAP Community "Maintenance Timelines for SAP ERP 6.0", diakses 2026-08-11.
> **Confidence**: high (angka konsisten lintas sumber; EHP 0–5 = 2025 dan EHP 6–8 = 2027)

> **Claim**: SAP secara publik menegaskan tenggat 2027 tidak akan diperpanjang.
> **Number/specific**: CEO SAP **Christian Klein** menyatakan tegas "No, we will not extend [the deadline]" (awal 2025).
> **Source**: CIO.com & The Register (kutip pernyataan Klein), 2025; diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Ada jalur transisi terbatas hingga 2033 dengan nama program resmi.
> **Number/specific**: nama resmi **"SAP ERP, private edition, transition option"** (huruf kecil, sesuai gaya SAP).
> **Source**: SAP News — "Navigating Your RISE with SAP Journey: Updates for SAP ERP, Private Edition, Transition Option", news.sap.com, Agustus 2025; diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Jendela waktu transition option.
> **Number/specific**: tersedia untuk **dibeli mulai 2028**; **aktif digunakan 2031–2033** (subscription time-bound untuk kelangsungan bisnis sambil menyiapkan jalur ke Cloud ERP).
> **Source**: SAP News, Agustus 2025 (news.sap.com); diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Syarat teknis transition option.
> **Number/specific**: **hanya SAP HANA** yang didukung sebagai database; sistem **wajib dipindahkan ke "SAP ERP, private edition" sebelum 31 Des 2030**; minimum ukuran sistem **2 TB**.
> **Source**: SAP News, Agustus 2025 (news.sap.com); diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Transition option melekat pada kerangka RISE with SAP, bukan berdiri sendiri.
> **Number/specific**: hanya tersedia dalam kombinasi dengan **max success plan** selama 2031–2033; max success plan **generally available Januari 2026**.
> **Source**: SAP News, Agustus 2025 (news.sap.com); diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Ada insentif komersial untuk bergerak lebih awal ke private edition.
> **Number/specific**: pelanggan yang berkomitmen ke SAP ERP, private edition **hingga akhir 2025** (start selambatnya 2026) mendapat perpindahan **tanpa uplift** ke transition option pada 2031; yang mendaftar **2026 dikenakan uplift standar ~20%**; harga final untuk 2027+ akan dikomunikasikan mendekati waktunya.
> **Source**: SAP News, Agustus 2025 (news.sap.com); diakses 2026-08-11.
> **Confidence**: high (fakta program) / medium untuk angka 20% karena SAP dapat menyesuaikan syarat — writer sebaiknya beri atribusi "menurut pengumuman SAP".

> **Claim**: S/4HANA sebagai tujuan punya komitmen maintenance jangka sangat panjang (mengurangi ketakutan "loncat dari satu tenggat ke tenggat berikutnya").
> **Number/specific**: SAP berkomitmen **innovation commitment / mainstream maintenance untuk S/4HANA hingga akhir 2040** (selalu ada minimal satu release S/4HANA dalam maintenance); diumumkan 4 Februari 2020.
> **Source**: SAP News — "SAP Extends Its Innovation Commitment for SAP S/4HANA" (2020) & support.sap.com; diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Model release S/4HANA memberi ruang maintenance yang lega per versi.
> **Number/specific**: sejak release **2023**, S/4HANA memakai **siklus release dua tahun** dengan **7 tahun mainstream maintenance per release**.
> **Source**: SAP News — "New SAP S/4HANA Release and Maintenance Strategy" (2022); diakses 2026-08-11.
> **Confidence**: high

> **Claim**: RISE with SAP adalah paket transisi ke S/4HANA Cloud (konteks tujuan migrasi).
> **Number/specific**: RISE with SAP = penawaran "business transformation as a service" yang mengemas **SAP S/4HANA Cloud (private/public edition)**, tooling, dan layanan dalam satu kontrak; jalur utama yang ditunjuk SAP untuk pelanggan ECC.
> **Source**: SAP — sap.com/products/erp/rise.html; diakses 2026-08-11.
> **Confidence**: high (definisi umum; hindari mengklaim inklusi/harga spesifik tanpa cek)

> **Claim**: Third-party support memungkinkan ECC tetap didukung jauh melewati 2027 — tapi di luar SAP.
> **Number/specific**: Rimini Street mengumumkan (Juni 2025) perpanjangan dukungan untuk semua release **SAP ECC 6.0 dan S/4HANA hingga 2040** — sekitar 13 tahun setelah 2027; ini dukungan pihak ketiga, **bukan** dukungan resmi SAP.
> **Source**: The Register (2025-06-20) & CIO.com; diakses 2026-08-11.
> **Confidence**: high untuk fakta pengumuman; netral soal kesesuaian (lihat Flags & Edge cases).

> **Claim**: Bertahan di ERP lama membawa risiko kepatuhan di Indonesia.
> **Number/specific**: **UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP)** memberi masa transisi 2 tahun dan **berlaku penuh sejak 17 Oktober 2024**; sistem tanpa patch keamanan/legal-update resmi menyulitkan pemenuhan kewajiban perlindungan data.
> **Source**: UU PDP 27/2022 (pengetahuan hukum umum; konteks Komdigi). Writer sebaiknya atribusikan ke "UU PDP" tanpa mengklaim sanksi spesifik.
> **Confidence**: medium (tanggal berlaku penuh Okt 2024 mapan; kaitan ke ECC bersifat argumentatif, bukan pernyataan hukum) — lihat Flags.

> **Claim**: Pasar cloud Indonesia tumbuh cepat (konteks "mengapa bergerak", bukan angka jual).
> **Number/specific**: pasar cloud Indonesia diperkirakan tumbuh **CAGR ~14,6%**, dari **~USD 2,46 miliar (2025) ke ~USD 4,87 miliar (2030)**; program Making Indonesia 4.0 mendorong digitalisasi.
> **Source**: firma riset pasar (mis. Ken Research/Mordor/6W) — **otoritas sekunder**; diakses 2026-08-11.
> **Confidence**: medium (estimasi komersial; angka bervariasi antar-firma — sajikan sebagai kisaran dengan atribusi).

> **Claim**: Banyak perusahaan belum siap — urgensinya nyata secara global.
> **Number/specific**: laporan industri menyebut puluhan ribu pelanggan ECC global belum bermigrasi menjelang tenggat (angka spesifik bervariasi antar-sumber).
> **Source**: liputan tech press (mis. laporan seputar 2027) — sekunder; diakses 2026-08-11.
> **Confidence**: low-medium (gunakan hanya sebagai konteks kualitatif "banyak yang belum siap", jangan kutip angka pasti tanpa sumber primer).

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Timeline maintenance ECC/Business Suite 7 | Mainstream 31 Des 2027 (EHP 6–8); EHP 0–5 sudah berakhir 31 Des 2025; extended 2028–2030 (+2 poin persen); customer-specific setelahnya | H2 #1, #2 (definisi + peta) | — |
| SAP ERP, private edition, transition option | Beli 2028; aktif 2031–2033; HANA-only; pindah ke private edition sebelum akhir 2030; via RISE/max success plan | H2 #3 | ERP Strategy (menilai kelayakan jalur ini) |
| Opsi bila belum siap (extended / interim private edition / third-party) | Tabel trade-off biaya–risiko–dukungan; third-party = netral | H2 #4 (tabel) | Migration + ERP Strategy |
| Risiko bertahan di ECC | Kepatuhan (UU PDP), celah keamanan tanpa patch legal, langka talenta ABAP legacy, biaya kustomisasi menua | H2 #5 | Best RISE/Best Cloud Partner; SAP Platinum via United VARs |
| RISE with SAP / S/4HANA sebagai tujuan | S/4HANA maintenance hingga 2040; 7 thn per release sejak 2023 | H2 #3 / penutup | **Migration + ERP Strategy**; kredensial Best RISE Partner |

Reminder: Soltius **mengimplementasikan/memigrasikan/mendukung** teknologi ini — tidak membuatnya. Maks 2–3 sebutan Soltius; letakkan di penutup (dan boleh satu aside mid-artikel: "menunda pun butuh rencana, bukan sekadar membayar extended maintenance").

**Kredensial akurat untuk closing:** company_profile mencatat Soltius memenangi keluarga penghargaan **Best Cloud / Best RISE / Best Cloud Renewal Partner (SEA)** (2021) dan berstatus **SAP Platinum Partner via United VARs**, kontributor pendapatan terbesar bagi SAP Indonesia (sejak 2015). Gunakan sebagai **recognition**, bukan superlatif; jangan menulis "nomor satu".

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP News — "Navigating Your RISE with SAP Journey: Updates for SAP ERP, Private Edition, Transition Option" (Agustus 2025)** — https://news.sap.com/2025/08/rise-with-sap-journey-sap-erp-private-edition-transition-option-updates/ — *what it backs*: nama resmi + jendela 2031–2033, syarat HANA, pindah ke private edition sebelum akhir 2030, kaitan RISE/max success plan, insentif komit 2025.
2. **SAP — Maintenance Strategy "Innovation Commitment for SAP S/4HANA until 2040" (support.sap.com)** — https://support.sap.com/en/release-upgrade-maintenance/maintenance-information/maintenance-strategy/s4hana-business-suite7.html — *what it backs*: mainstream 2027, extended 2028–2030 (+2 poin persen), customer-specific maintenance, komitmen S/4HANA 2040. (Catatan: halaman mem-block WebFetch/HTTP 403; isinya dikonfirmasi via snapshot pencarian SAP resmi + SAP Community "blog posts by SAP".)
3. **SAP Community (blog posts by SAP) — "Maintenance Timelines for SAP ERP 6.0"** — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/maintenance-timelines-for-sap-erp-6-0/ba-p/13524564 — *what it backs*: rincian EHP 0–5 vs EHP 6–8 dan definisi fase maintenance. (Cadangan otoritatif SAP.)
4. **The Register — "SAP ECC 6.0 lives to fight another decade under Rimini Street" (2025-06-20)** — https://www.theregister.com/2025/06/20/rimini_street_sap_ecc/ — *what it backs*: konteks third-party support hingga 2040 & penegasan SAP tidak memperpanjang 2027 (netral/independen).

Priority terpenuhi: SAP official (news + support + community) > tech press independen.

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Kapan SAP ECC berhenti didukung?
Mainstream maintenance untuk SAP ECC / Business Suite 7 (Enhancement Package 6–8) berakhir 31 Desember 2027. Versi lebih lama, ECC 6.0 EHP 0–5, mainstream maintenance-nya sudah berakhir 31 Desember 2025. Setelah 2027 masih ada extended maintenance opsional hingga 31 Desember 2030, lalu beralih ke customer-specific maintenance. SAP menegaskan tenggat 2027 tidak akan diperpanjang.

### Apa itu extended maintenance dan berapa tambahan biayanya?
Extended maintenance adalah perpanjangan dukungan resmi SAP selama tiga tahun, dari awal 2028 hingga 31 Desember 2030, di atas mainstream maintenance ECC/Business Suite 7. Selama periode ini pelanggan tetap menerima support package dan legal change, tetapi dikenakan premium sebesar +2 poin persen (percentage points) di atas basis fee maintenance. Ini opsi "beli waktu", bukan solusi permanen.

### Apa yang terjadi jika tetap di ECC setelah 2027?
Jika tidak membeli extended maintenance, sistem masuk ke customer-specific maintenance: tanpa support package baru, tanpa legal change (perubahan aturan HR/pajak/keuangan), dan tanpa patch kernel baru. Dukungan hanya penyelesaian masalah atas dasar time & material tanpa SLA. Risikonya menumpuk pada kepatuhan (mis. UU PDP), keamanan tanpa patch resmi, dan makin langkanya talenta yang menopang kustomisasi lama.

### Apakah ada perpanjangan sampai 2033?
Ada, tetapi bersyarat dan bukan sekadar "memperpanjang ECC". SAP menyediakan "SAP ERP, private edition, transition option" — bisa dibeli mulai 2028 dan aktif dipakai 2031–2033. Syaratnya: sistem harus dipindahkan ke SAP ERP, private edition (database HANA) sebelum akhir 2030, dalam kerangka RISE with SAP (max success plan). Jadi ini jalur transisi terkelola menuju cloud, dengan minimum ukuran sistem 2 TB.

### Apa itu customer-specific maintenance?
Customer-specific maintenance adalah fase terakhir dukungan setelah extended maintenance berakhir. Pada fase ini SAP tidak lagi merilis support package, legal change, atau patch kernel baru; perangkat lunak menjadi statis. Bantuan hanya berupa penyelesaian masalah spesifik pelanggan atas dasar time & material, tanpa SLA dan tanpa jaminan pembaruan. Praktis, ini menutup celah operasional tapi bukan modernisasi.

### Apakah third-party support aman untuk ECC?
Penyedia pihak ketiga seperti Rimini Street menawarkan dukungan ECC hingga 2040 dan bisa menekan biaya jangka pendek. Namun ini dukungan di luar SAP: tidak ada support package, legal change, atau patch resmi dari SAP, dan ada pertimbangan lisensi serta arah roadmap yang perlu ditimbang. Cocok sebagai jembatan taktis bagi yang menunda migrasi, bukan pengganti strategi jangka panjang. Timbang sesuai profil risiko.

## Data tables for the writer

### Tabel 1 — Peta lengkap maintenance SAP ECC / Business Suite 7
| Fase | Periode | Yang didapat | Catatan biaya |
|---|---|---|---|
| Mainstream (EHP 0–5) | s/d 31 Des 2025 | Dukungan penuh | SUDAH berakhir; tanpa extended |
| Mainstream (EHP 6–8) | s/d 31 Des 2027 | Support package, legal change, patch | Fee maintenance standar |
| Extended maintenance | 2028 – 31 Des 2030 | Setara mainstream (support package + legal change) | +2 poin persen atas basis fee |
| Customer-specific maintenance | Setelah extended | Tidak ada SP/legal change/patch baru; problem-solving time & material | Tanpa SLA |
| SAP ERP, private edition, transition option | Beli 2028; aktif 2031–2033 | Kelangsungan bisnis + jalur ke Cloud ERP | HANA-only; pindah ke private edition < akhir 2030; via RISE |

### Tabel 2 — Pilihan bila belum siap 2027 (trade-off)
| Opsi | Dukungan | Biaya relatif | Risiko utama | Cocok untuk |
|---|---|---|---|---|
| Extended maintenance (ke 2030) | Resmi SAP, penuh | +2 poin persen | Hanya menunda; tetap butuh rencana | Yang butuh 1–3 tahun ekstra untuk migrasi terencana |
| Interim: pindah ke SAP ERP, private edition | Resmi SAP (cloud) | Subscription RISE | Komitmen HANA + kontrak RISE | Yang siap ke private edition tapi belum tuntas transformasi |
| Transition option (2031–2033) | Resmi SAP, time-bound | Belum final (uplift bila komit lambat) | Syarat teknis ketat (2 TB, HANA, <2030) | Customer kompleks yang perlu jendela transisi lebih panjang |
| Third-party support | Non-SAP (mis. Rimini Street) | Umumnya lebih rendah | Tanpa patch/legal-update resmi SAP; pertimbangan lisensi | Jembatan taktis bagi yang sengaja menunda |

## Edge cases & nuance

- **"ECC berakhir 2027" itu tidak akurat untuk semua orang.** EHP 0–5 sudah berakhir 2025. Writer harus mengkualifikasi: pembaca perlu tahu EHP mereka untuk tahu tenggat sebenarnya.
- **Transition option ≠ bertahan di ECC.** Ini justru mensyaratkan pindah ke SAP ERP, private edition (cloud, HANA) sebelum 2030. Jangan bingungkan dengan "membeli waktu untuk tetap on-prem". Framing yang benar: jendela transisi terkelola, bukan penundaan pasif.
- **Extended maintenance ≠ solusi.** Ia hanya menunda; brief benar menyoroti "menunda pun butuh rencana". Biaya +2 poin persen adalah opportunity cost.
- **Third-party support: netral.** Ada manfaat biaya nyata, tetapi juga trade-off (kehilangan legal update resmi untuk kepatuhan, arah roadmap, pertimbangan lisensi/kontrak). SAP dan penyedia third-party punya sejarah friksi hukum — writer cukup menyebut "ada pertimbangan lisensi/kontrak yang perlu ditimbang", tanpa menuduh pihak mana pun.
- **HANA sebagai prasyarat tersembunyi.** Baik transition option maupun S/4HANA menuntut database HANA — perusahaan yang masih di AnyDB (Oracle/SQL Server/DB2) perlu memasukkan migrasi database ke dalam rencana dan timeline.
- **Angka biaya dalam Rupiah: JANGAN dikarang.** Brief mewajibkan ini. Biaya migrasi/lisensi sangat bergantung ukuran & kontrak; sajikan sebagai kerangka keputusan, bukan angka pasti.

## Flags (open factual risk)

- ⚠️ **Halaman support.sap.com utama mem-block WebFetch (HTTP 403).** Fakta maintenance (2027 / 2028–2030 / +2 poin persen / customer-specific) dikonfirmasi via snapshot pencarian domain SAP resmi + SAP Community "blog posts by SAP" (otoritatif) dan konsisten lintas sumber independen (IBSolution, SEIDOR, Rimini Street, CIO). → recommendation: aman dinyatakan; tautkan ke halaman support.sap.com sebagai sumber kanonik meski pembaca mungkin perlu membukanya langsung.
- ⚠️ **Insentif "no uplift bila komit 2025 / ~20% uplift bila 2026".** Ini syarat komersial yang dapat SAP sesuaikan. → recommendation: atribusikan eksplisit ("menurut pengumuman SAP, Agustus 2025") dan hindari menyajikannya sebagai harga pasti.
- ⚠️ **Tanggal transition option (beli 2028, aktif 2031–2033) & syarat (2 TB, HANA, <2030).** Program relatif baru; SAP menyebut "final pricing to be communicated closer to that date". → recommendation: nyatakan sebagai kerangka resmi terkini per Agustus 2025, beri tanggal akses.
- ⚠️ **UU PDP sebagai risiko kepatuhan.** Tanggal berlaku penuh (17 Okt 2024, UU 27/2022) mapan, tetapi klaim bahwa "tetap di ECC = melanggar UU PDP" bersifat argumentatif. → recommendation: bingkai sebagai "menyulitkan pemenuhan kewajiban" / "menambah beban kepatuhan", bukan pernyataan pelanggaran hukum; jangan sebut sanksi nominal.
- ⚠️ **Angka pasar cloud Indonesia (USD 2,46 M → 4,87 M; CAGR ~14,6%).** Sumber firma riset komersial (sekunder), bervariasi antar-firma. → recommendation: sajikan sebagai kisaran/estimasi dengan atribusi "menurut sejumlah laporan riset pasar"; jangan jadikan angka jangkar tunggal.
- ⚠️ **"Puluhan ribu pelanggan belum siap".** Angka spesifik bervariasi antar tech press. → recommendation: gunakan kualitatif ("banyak perusahaan belum akan selesai tepat waktu"), hindari angka pasti tanpa sumber primer.
- ⚠️ **Kredensial Soltius "Best RISE Partner".** Berasal dari keluarga penghargaan SEA 2021 (company_profile). → recommendation: sebut sebagai recognition ("diakui sebagai Best RISE & Best Cloud Partner"), jangan klaim "saat ini nomor satu" atau menyematkan tahun yang tidak diverifikasi.

## Definition snippet draft (48 words)

> **Tenggat SAP ECC 2027** adalah berakhirnya mainstream maintenance untuk SAP Business Suite 7 (SAP ERP 6.0/ECC, Enhancement Package 6–8) pada 31 Desember 2027. Setelahnya tersedia extended maintenance opsional hingga 31 Desember 2030 dengan premium +2 poin persen, lalu customer-specific maintenance tanpa pembaruan reguler. SAP menegaskan tenggat ini tidak diperpanjang.
