---
brief_id: "warehouse-management-system-05"
researcher_run_date: "2026-08-11"
sources_cited: 9
flags: 6
---

# Research Dossier: Integrasi WMS dan TMS — Menyambung Gudang ke Transportasi demi OTIF

## TL;DR for the writer

- **Angle is genuinely white-space.** The topic is the *hand-off* between the warehouse (WMS) and transport (TMS) — the gap where OTIF (On-Time In-Full) fails even when picking was on time. English competitors don't tie this to **SAP EWM ↔ SAP TM** via the **Transportation Unit (TU)** or to **clean core**. That's your differentiation.
- **The SAP mechanism is real and verifiable.** SAP Help confirms: a **Transportation Unit is the smallest loadable unit of a vehicle**; in TM-planned processes you **create a TU from a SAP TM freight order**, and EWM sends **early status updates** back to TM. That is the concrete "how the two systems talk" story.
- **Two deployment realities to keep straight:** modern S/4HANA offers **embedded Transportation Management** (TM and EWM share one system + harmonized master data, no data duplication), versus older **standalone/decentralized SAP TM** integrated to a separate ERP/EWM. Explain both; the "native, one platform" story is your counterpoint to fragile point-to-point integration.
- **OTIF is a dual-gate metric** — an order counts only if it is *both* on time *and* complete. Benchmark rule-of-thumb: ~95–99% is excellent, <85% is weak. Frame as a range, not a hard target (industry convention, not an SAP number).
- **Clean core is the trust-builder.** SAP's own guidance: keep the S/4HANA core standard and upgrade-safe; extend **side-by-side on SAP BTP** or **on-stack with ABAP Cloud via released APIs** — never modify the core. This is exactly the discipline that keeps a WMS–TMS integration upgrade-safe. Soltius anchors here.

## Core facts (verified)

> **Claim**: Transportation Unit (TU) adalah unit terkecil yang dapat dimuat pada kendaraan untuk mengangkut barang, dan tidak harus menjadi bagian dari sebuah vehicle.
> **Number/specific**: "The transportation unit (TU) is the smallest loadable unit of a vehicle that is used to transport goods; the TU can be, but does not need to be, part of a vehicle." Objek master data untuk perencanaan & eksekusi transportasi di SAP EWM.
> **Source**: SAP Help Portal — "Transportation Unit", help.sap.com (SAP Extended Warehouse Management), diakses 2026-08-11
> **Confidence**: high

> **Claim**: Ketika perencanaan transportasi dilakukan di SAP TM, TU dibuat dari freight order SAP TM — inilah titik sambung utama EWM–TM.
> **Number/specific**: "In processes with transportation planning in SAP TM, you can create a TU from an SAP TM freight order." Rencana muatan di TM → TU aktif di EWM untuk dieksekusi di gudang.
> **Source**: SAP Help Portal — "Transportation Unit", help.sap.com, diakses 2026-08-11
> **Confidence**: high

> **Claim**: Integrasi TM–EWM berbasis TU mendukung "early updates" — EWM mengirim perubahan status lebih awal ke TM.
> **Number/specific**: "Early update" = memutakhirkan hierarki item di TM dengan status *Finish Loading*, lebih awal daripada status *Departure from Checkpoint*, sehingga dokumen dapat dicetak lebih dini dalam proses.
> **Source**: SAP Help Portal — "Early Updates from EWM" / "Integration Based on EWM Transportation Units", help.sap.com (SAP S/4HANA on-premise), diakses 2026-08-11
> **Confidence**: high

> **Claim**: Di gudang, seluruh langkah terkait TU (loading, konfirmasi) dapat dijalankan lewat Shipping Cockpit di EWM.
> **Number/specific**: "In your outbound processes with TUs, you can use the Shipping Cockpit to perform all TU-related steps within your warehouse."
> **Source**: SAP Help Portal — "Transportation Unit", help.sap.com, diakses 2026-08-11
> **Confidence**: high

> **Claim**: SAP TM tersedia dalam dua model penyebaran: embedded di S/4HANA (satu sistem) atau standalone/decentralized (sistem terpisah yang diintegrasikan ke ERP/EWM).
> **Number/specific**: Standalone TM bermula sebagai aplikasi SAP Business Suite terpisah yang diintegrasikan ke satu atau beberapa sistem SAP ERP; embedded TM berjalan di dalam S/4HANA.
> **Source**: SAP PRESS blog — "SAP S/4HANA Transportation & Warehouse Management overview" / "A Look at Transportation Management in SAP S/4HANA", blog.sap-press.com, diakses 2026-08-11
> **Confidence**: medium (kanal SAP PRESS, bukan help.sap.com langsung — writer sebaiknya tak menyebut versi/edisi spesifik)

> **Claim**: Embedded TM di S/4HANA menghapus duplikasi data: order & delivery ERP langsung menjadi Freight Unit dan Freight Order, tanpa perlu dokumen OTR/DTR terpisah, dan berbagi master data yang harmonis dengan EWM.
> **Number/specific**: Embedded TM "doesn't require any transfer (or duplication) of data from SAP ERP to TM"; ERP dan TM berbagi satu set objek master data (business partner, product) yang harmonis.
> **Source**: SAP PRESS blog, blog.sap-press.com, diakses 2026-08-11
> **Confidence**: medium

> **Claim**: OTIF (On-Time In-Full) adalah metrik gerbang-ganda: pesanan hanya dihitung berhasil bila datang tepat waktu DAN lengkap (jumlah + item benar). Tepat waktu tapi kurang unit = gagal; lengkap tapi telat = gagal.
> **Number/specific**: OTIF = (jumlah order dikirim tepat waktu & lengkap) ÷ (total pengiriman).
> **Source**: Industri logistik (mis. MRPeasy, Unleashed, MetricHQ) — konsensus definisi; diakses 2026-08-11
> **Confidence**: high (definisi standar industri, konsisten lintas sumber)

> **Claim**: Benchmark OTUF: ~95–99% dianggap sangat baik di banyak industri; di bawah ~85% dianggap lemah.
> **Number/specific**: Rentang rule-of-thumb, bukan standar tunggal; bergantung industri.
> **Source**: Industri logistik (agregat beberapa penyedia fulfillment/logistik), diakses 2026-08-11
> **Confidence**: medium (frame sebagai rentang & rule-of-thumb; JANGAN sajikan sebagai target pasti/angka SAP)

> **Claim**: Konsep OTIF sebagai KPI pemasok dipopulerkan Walmart (2017), yang mendenda pemasok yang gagal memenuhi ambang OTIF.
> **Number/specific**: Walmart mengenakan denda ~3% dari nilai barang (cost of goods sold) untuk setiap kegagalan OTIF.
> **Source**: Industri logistik (MRPeasy/SpeedCommerce), diakses 2026-08-11
> **Confidence**: medium (kejadian yang banyak dikutip; opsional — boleh dipakai sebagai konteks, bukan klaim inti)

> **Claim**: Clean core = strategi menjaga inti S/4HANA tetap standar dan upgrade-stable, sambil tetap memungkinkan diferensiasi bisnis lewat extension terkendali.
> **Number/specific**: SAP: "keep the core clean, standard, and upgrade-stable while still enabling business-specific differentiation where it counts." Kustomisasi liar "limits flexibility, slows down upgrades, and increases the total cost of ownership."
> **Source**: SAP News Center — "How to Extend SAP S/4HANA Cloud the Right Way" (Aug 2025), news.sap.com, diakses 2026-08-11
> **Confidence**: high

> **Claim**: Extensibility clean core punya dua jalur: side-by-side di SAP BTP (aplikasi terpisah, decoupled, terhubung via API stabil) dan on-stack dengan ABAP Cloud (extension terintegrasi tapi upgrade-stable).
> **Number/specific**: Side-by-side BTP = "scalable, decoupled applications that run independently from the core"; on-stack ABAP Cloud = "tightly integrated, upgrade-stable extensions within the ERP system"; keduanya memakai released/public SAP APIs.
> **Source**: SAP News Center (Aug 2025), news.sap.com, diakses 2026-08-11
> **Confidence**: high

> **Claim**: SAP mengklasifikasikan extension ke dalam model kematangan clean core empat tingkat (Level A–D) berdasarkan integritas arsitektur & keamanan upgrade; Level A (memakai released API, on-stack ABAP Cloud atau side-by-side BTP) sepenuhnya upgrade-safe.
> **Number/specific**: Level A = fully compliant, dibangun dengan released SAP APIs, direkomendasikan.
> **Source**: SAP News Center (Aug 2025) + SAP Community ABAP Extensibility Guide, news.sap.com / community.sap.com, diakses 2026-08-11
> **Confidence**: high (news.sap.com); medium untuk detail Level A–D (community.sap.com)

> **Claim**: Mainstream maintenance SAP ECC (Business Suite 7 / ECC 6 EHP 6–8) berakhir 31 Desember 2027, dengan opsi extended maintenance berbayar hingga 2030.
> **Number/specific**: Extended maintenance untuk versi yang memenuhi syarat dikenakan premium ~2 poin persentase di atas maintenance fee, berlaku hingga 31 Des 2030 (tidak semua versi memenuhi syarat).
> **Source**: SAP maintenance strategy (banyak dikutip; mis. Rimini Street / SEIDOR ringkasan), diakses 2026-08-11
> **Confidence**: high untuk tanggal 2027/2030; medium untuk detail premium — **konfirmasi ulang di halaman SAP resmi sebelum menyebut angka premium**

> **Claim**: SAP berkomitmen memelihara setidaknya satu rilis SAP S/4HANA hingga 31 Desember 2040.
> **Number/specific**: Komitmen maintenance jangka panjang minimal satu rilis sampai 2040.
> **Source**: SAP maintenance roadmap (ringkasan pihak ketiga: SoapPeople/SEIDOR), diakses 2026-08-11
> **Confidence**: medium (konfirmasi ke SAP resmi bila dijadikan klaim menonjol; untuk artikel ini hanya konteks pendukung)

> **Claim**: Transportasi adalah komponen biaya terbesar dalam biaya logistik bisnis; total biaya logistik bisnis AS mencapai ~US$2,6 triliun (data 2024, ~8,7–8,8% GDP), dengan motor carrier di puncak pengeluaran.
> **Number/specific**: US business logistics costs ≈ $2,58 triliun (2024); full-truckload ≈ $387 miliar (2024). Transportasi jalan raya mendominasi belanja logistik.
> **Source**: CSCMP State of Logistics Report 2025 (via ringkasan DC Velocity / Transportation Today / FreightWaves), diakses 2026-08-11
> **Confidence**: medium (angka makro dari ringkasan pers atas laporan CSCMP; pakai untuk konteks "transportasi = porsi besar biaya logistik", bukan angka Indonesia)

## Solution focus + Soltius anchor (from product_matrix.md + brief)

Keyword ini (`warehouse management system`, angle WMS–TMS) tidak ada baris eksplisit di product_matrix.md; mapping diturunkan dari brief + prinsip universal. WMS di ekosistem SAP = **SAP Extended Warehouse Management (EWM)**; TMS = **SAP Transportation Management (TM)**; jembatannya = **Transportation Unit**; disiplin integrasinya = **clean core** (tie-in kuat ke baris #6 SAP Clean Core dan #5 ERP migration to the cloud).

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| WMS vs TMS (vendor-neutral) | WMS = di dalam gudang (receiving→putaway→picking→packing); TMS = pergerakan barang (rute, carrier, freight, eksekusi shipment). OTIF = gerbang ganda. | H2 #1–#2 | — (edukasi netral dulu) |
| SAP EWM ↔ SAP TM via Transportation Unit | TU = unit terkecil yang dapat dimuat; TM freight order → membuat TU di EWM; EWM kirim early update ke TM; Shipping Cockpit untuk langkah TU. | H2 #3 | 1 aside mid-article: Soltius mengimplementasikan & mengintegrasikan SAP EWM dan SAP TM |
| Embedded TM vs standalone TM | Embedded (S/4HANA, master data harmonis, tanpa duplikasi data) vs standalone/decentralized (sistem terpisah, perlu transfer data). | H2 #3 / #5 | konteks S/4HANA |
| Clean core untuk integrasi | Extend side-by-side di SAP BTP atau on-stack ABAP Cloud lewat released API; jangan modifikasi inti; upgrade-safe. | H2 #5 (trust-builder) + closing | **Implementation + Integration; SAP Platinum Partner via United VARs; Best RISE/Best Cloud Partner** — closing CTA |

Reminder: Soltius **mengimplementasikan / mengintegrasikan / mendukung** SAP EWM & SAP TM — **bukan membuatnya**. Maks 2–3 self-mention (1 aside opsional + 1 closing). Hindari superlatif; "kontributor pendapatan terbesar bagi SAP Indonesia (sejak 2015)" adalah satu-satunya klaim ranking yang boleh, dibingkai sebagai pengakuan.

## Authoritative external sources (for the writer to link out)

1. **SAP Help Portal — Transportation Unit / EWM-TM Integration (help.sap.com)** — https://help.sap.com/docs/SAP_EXTENDED_WAREHOUSE_MANAGEMENT — *what it backs*: definisi TU, TU dibuat dari TM freight order, early updates EWM→TM, Shipping Cockpit. (Sumber otoritas tertinggi untuk fakta produk SAP.)
2. **SAP News Center — "How to Extend SAP S/4HANA Cloud the Right Way" (news.sap.com, Aug 2025)** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *what it backs*: definisi clean core, side-by-side BTP vs on-stack ABAP Cloud, model kematangan Level A–D, upgrade-safe.
3. **CSCMP State of Logistics Report 2025 (via DC Velocity / FreightWaves)** — https://www.dcvelocity.com/logistics/state-of-logistics-report-2025 — *what it backs*: konteks biaya logistik & dominasi biaya transportasi (angka makro AS; untuk framing, bukan data Indonesia).

Prioritas terpenuhi: SAP official (help.sap.com + news.sap.com) sebagai dua sumber terkuat; CSCMP sebagai konteks industri.

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu TMS (Transportation Management System)?
TMS (Transportation Management System) adalah sistem yang merencanakan, mengeksekusi, dan memantau pergerakan barang ke luar gudang — mulai dari pemilihan rute dan carrier, konsolidasi muatan, penghitungan biaya angkut (freight), hingga eksekusi pengiriman. Jika WMS mengurus barang di dalam gudang, TMS mengurus perjalanan barang setelah keluar dari dock. Di ekosistem SAP, peran ini dijalankan SAP Transportation Management (TM).

### Apa bedanya WMS dan TMS?
WMS (Warehouse Management System) mengelola operasi di dalam gudang: penerimaan, put-away, penyimpanan, picking, dan packing. TMS (Transportation Management System) mengelola pergerakan barang antar-lokasi: perencanaan rute, pemilihan pengangkut, konsolidasi muatan, biaya angkut, dan eksekusi pengiriman. Keduanya bersinggungan di titik pemuatan (loading): WMS menyiapkan barang, TMS mengatur kendaraan dan pengirimannya.

### Bagaimana integrasi WMS dan TMS bekerja?
Integrasi WMS–TMS menyinkronkan dua sisi di titik hand-off: TMS memberi WMS informasi carrier dan rencana muatan sebelum loading, sedangkan WMS mengonfirmasi kesiapan barang (readiness) dan status loading kembali ke TMS. Di SAP, rencana di SAP TM (freight order) menciptakan Transportation Unit di SAP EWM; EWM lalu mengirim pembaruan status lebih awal ke TM sehingga dokumen dan pengiriman selaras.

### Apa itu OTIF (On-Time In-Full)?
OTIF (On-Time In-Full) adalah metrik yang mengukur apakah pesanan tiba tepat waktu sekaligus lengkap — jumlah dan item sesuai. Keduanya wajib terpenuhi: pesanan yang datang tepat waktu tetapi kurang unit tetap dihitung gagal, begitu pula yang lengkap tetapi telat. Sebagai rule-of-thumb industri, skor ~95–99% dianggap sangat baik, sedangkan di bawah ~85% menandakan masalah rantai pasok.

### Apa manfaat mengintegrasikan WMS dan TMS?
Integrasi WMS–TMS menutup celah antara gudang dan transportasi yang sering memicu kegagalan OTIF. Manfaatnya: visibilitas ujung-ke-ujung dari dock hingga pengiriman, hand-off otomatis (bukan manual) yang mengurangi salah carrier dan keterlambatan, konsolidasi muatan yang menekan biaya angkut, serta data status yang konsisten antar-sistem. Hasilnya pengiriman lebih tepat waktu dan lengkap tanpa entri data ganda.

### Apakah SAP EWM terintegrasi dengan SAP TM?
Ya. SAP Extended Warehouse Management (EWM) terintegrasi native dengan SAP Transportation Management (TM). Menurut SAP Help Portal, ketika perencanaan transportasi dilakukan di SAP TM, sebuah freight order dapat menciptakan Transportation Unit di EWM, dan EWM mengirim pembaruan status lebih awal ke TM. Di S/4HANA, TM bahkan bisa embedded — satu sistem, master data harmonis, tanpa duplikasi data.

### Apa itu Transportation Unit dalam SAP?
Transportation Unit (TU) adalah unit terkecil yang dapat dimuat pada kendaraan untuk mengangkut barang di SAP EWM; TU bisa menjadi bagian dari sebuah vehicle, tetapi tidak harus. TU adalah objek yang menjembatani perencanaan transportasi dan eksekusi gudang: rencana di SAP TM (freight order) menciptakan TU, dan seluruh langkah terkait TU di gudang dijalankan lewat Shipping Cockpit di EWM.

## Data tables for the writer

### Tabel 1 — Pembagian peran: WMS vs TMS
| Aspek | WMS (Warehouse Management System) | TMS (Transportation Management System) |
|---|---|---|
| Domain | Di dalam gudang | Pergerakan barang antar-lokasi |
| Fungsi inti | Receiving, put-away, storage, picking, packing | Perencanaan rute, carrier selection, load building, freight cost, shipment execution |
| Objek data khas | Handling unit, stock, warehouse task/order | Freight order/unit, shipment, Transportation Unit (di SAP) |
| Output | Barang siap muat di dock | Muatan terjadwal, carrier terpilih, pengiriman tereksekusi |
| Metrik utama | Akurasi stok, throughput picking | OTIF, freight cost, on-time delivery |
| Padanan SAP | SAP EWM | SAP TM (embedded di S/4HANA atau standalone) |

### Tabel 2 — Model integrasi WMS–TMS
| Aspek | Point-to-point / middleware (dua sistem terpisah) | Native satu platform (mis. SAP EWM + TM di S/4HANA) |
|---|---|---|
| Aliran data | Antar-sistem via API/middleware; risiko duplikasi | Master data harmonis, tanpa duplikasi/transfer |
| Titik hand-off | Perlu pemetaan & rekonsiliasi manual/otomatis | TU menjembatani rencana (TM) → eksekusi (EWM) |
| Kerapuhan | Rentan bila kustomisasi berlebihan / API berubah | Lebih ringkas; tetap harus jaga clean core |
| Upgrade-path | Bisa terganggu kustomisasi inti | Aman bila extension di BTP/ABAP Cloud (released API) |
| Cocok untuk | Multi-ERP, landscape heterogen | Landscape SAP terkonsolidasi di S/4HANA |

### Tabel 3 — Titik hand-off & data yang dibutuhkan
| Momen | Sisi yang butuh data | Data yang mengalir |
|---|---|---|
| Sebelum load building | WMS butuh dari TMS | Carrier terpilih, rencana muatan, urutan loading |
| Sebelum finalisasi rute | TMS butuh dari WMS | Konfirmasi kesiapan barang (readiness), berat/volume aktual |
| Saat/after loading | TMS butuh dari WMS | Status Finish Loading (early update), konfirmasi TU/ASN |
| Ke pelanggan/carrier | Keduanya | ASN (Advanced Shipping Notification), dokumen pengiriman |

## Edge cases & nuance

- **Integrasi ≠ sekadar "menyambungkan dua kotak".** Nilai muncul dari *data yang benar pada momen yang benar*: carrier sebelum load, readiness sebelum rute difinalisasi. Menyambung API tanpa menyelaraskan proses & master data hanya memindahkan celah OTIF, bukan menutupnya.
- **Native belum tentu selalu unggul.** Untuk landscape multi-ERP atau perusahaan dengan TMS pihak ketiga yang sudah matang, standalone/decentralized TM bisa lebih tepat. Pesan jujurnya: pilih model integrasi sesuai landscape, bukan mengejar "satu platform" demi buzzword.
- **Clean core bukan alasan menolak kustomisasi — tapi memindahkannya.** Extension tetap boleh; letakkan di SAP BTP (side-by-side) atau ABAP Cloud (on-stack) lewat released API, bukan memodifikasi inti. Ini yang menjaga integrasi WMS–TMS tetap upgrade-safe menuju/di atas S/4HANA.
- **OTIF adalah metrik ujung-ke-ujung, bukan metrik gudang saja.** Gudang bisa 100% akurat namun OTIF tetap jeblok bila transportasi gagal. Justru itulah kenapa integrasi WMS–TMS penting — OTIF hidup di jahitan antar-fungsi.
- **Hati-hati mencampur "shipment", "freight order", "Transportation Unit".** Ketiganya objek berbeda di SAP. TU = unit yang dapat dimuat (jembatan ke EWM); freight order/unit = objek perencanaan TM. Jangan disamakan.

## Flags (open factual risk)

- ⚠️ **Angka biaya freight consolidation (20–50% penghematan)**: bersumber dari blog vendor logistik berotoritas rendah, rentang sangat lebar. → Rekomendasi: JANGAN sajikan sebagai angka pasti; frame sebagai "berpotensi menekan biaya angkut" tanpa persentase, atau beri label estimasi umum tanpa mengutip satu angka.
- ⚠️ **"Transportasi = 60% biaya rantai pasok"**: satu sumber menyebut angka ini, sumber lain menyebut "freight up to 10% of logistics cost" — kontradiktif & tergantung definisi. → Rekomendasi: pakai framing kualitatif "transportasi adalah salah satu komponen biaya logistik terbesar" (didukung CSCMP: motor carrier di puncak belanja), hindari persentase spesifik.
- ⚠️ **Benchmark OTIF 95–99% / <85%**: konvensi industri, bukan standar tunggal atau angka SAP. → Rekomendasi: selalu frame sebagai "rule-of-thumb / bervariasi per industri".
- ⚠️ **Detail embedded vs standalone TM (edisi, OTR/DTR, Basic Shipping)**: bersumber dari SAP PRESS blog, bukan help.sap.com langsung. → Rekomendasi: jelaskan konsep (embedded = satu sistem, master data harmonis; standalone = sistem terpisah) tanpa menyebut nomor rilis/edisi spesifik atau nama fitur teknis mendetail.
- ⚠️ **Premium extended maintenance ECC (~2 poin persentase) & komitmen S/4HANA hingga 2040**: tanggal 2027/2030 solid, tapi angka premium & 2040 dari ringkasan pihak ketiga. → Rekomendasi: untuk artikel ini, ECC hanya konteks; sebut "2027 (extended hingga 2030)" tanpa angka premium, atau konfirmasi ke halaman SAP resmi bila ingin menyebut biaya.
- ⚠️ **Denda OTIF Walmart 3%**: banyak dikutip tapi dari sumber non-otoritatif & konteks ritel AS. → Rekomendasi: opsional sebagai anekdot asal-usul OTIF; jangan jadikan klaim inti atau relevansi ke pasar Indonesia.

## Definition snippet draft (50 kata)

> **Transportation management system (TMS)** adalah sistem yang merencanakan, mengeksekusi, dan memantau pergerakan barang ke luar gudang — meliputi pemilihan rute dan pengangkut (carrier), konsolidasi muatan, biaya angkut, hingga eksekusi pengiriman. Berbeda dari WMS yang mengurus operasi *di dalam* gudang, TMS mengurus perjalanan barang setelahnya; keduanya bertemu di titik pemuatan demi OTIF.
