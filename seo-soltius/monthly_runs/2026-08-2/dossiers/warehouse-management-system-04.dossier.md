---
brief_id: "warehouse-management-system-04"
researcher_run_date: "2026-08-11"
sources_cited: 9
flags: 5
---

# Research Dossier: Yard Management dan Dock Scheduling — WMS di Luar Empat Dinding Gudang

## TL;DR for the writer

- **Yard management** dan **dock (appointment) scheduling** adalah perpanjangan WMS ke area *di luar* gudang — halaman (yard), gerbang, dan pintu dock — tempat truk/trailer bergerak sebelum dan sesudah proses receiving/shipping. SAP menyediakannya lewat **SAP Extended Warehouse Management (EWM)** sebagai fungsi *yard management* + **Dock Appointment Scheduling (DAS)**, terintegrasi dengan **SAP Transportation Management (TM)**.
- Kerangka fisik EWM yard management yang harus dijelaskan akurat: **checkpoint** (gerbang masuk/keluar), **parking space** (parkir sementara saat dock penuh), **door** (pintu dock untuk muat/bongkar), dan objek inti **Transportation Unit (TU)** yang dilacak posisinya di yard.
- Biaya tersembunyi harus di-frame sebagai **estimasi industri (mayoritas data AS)**, bukan angka pasti Indonesia: studi **ATRI 2024** menaksir *driver detention* merugikan industri truk AS ~USD 15,1 miliar/tahun; tarif *detention* lazim USD 50–100/jam setelah 1–2 jam waktu bebas. Jangan mengklaim angka rupiah spesifik.
- **Cross-docking** di EWM punya dua kategori resmi — *planned* dan *opportunistic* — dengan varian *Transportation Cross-Docking (TCD)*, *Merchandise Distribution*, *Pick from Goods Receipt (PFGR)*, dan *Push Deployment (PD)*. Sebutkan tipe secara benar; jangan mengarang jenis baru.
- **Hati-hati membedakan dua produk SAP**: *yard management* (fungsi embedded di dalam EWM, lisensi advanced WM, sederhana) berbeda dari **SAP Yard Logistics for SAP S/4HANA** (produk standalone terpisah, visualisasi 2D/3D, plan-execute-monitor). Brief ini fokus pada EWM yard management; jangan mencampur klaim keduanya.

## Core facts (verified)

> **Claim**: Yard adalah area di luar gudang tempat kendaraan dan transportation unit tiba, menunggu, dan berangkat untuk memuat/membongkar barang.
> **Number/specific**: "an enclosed area outside a warehouse, where vehicles and transportation units are dealt with, waiting to be dealt with, or waiting to be collected" — definisi standar EWM yard management.
> **Source**: SAP Community, "Yard Management in SAP EWM" — https://community.sap.com/t5/supply-chain-management-blog-posts-by-members/yard-management-in-sap-ewm/ba-p/13543928 (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: EWM yard management mengelola pergerakan truk lewat tiga elemen fisik: checkpoint, parking space, dan door.
> **Number/specific**: *checkpoint* = gerbang tempat truk masuk/keluar; *parking space* = lokasi parkir sementara saat door belum bebas; *door* = tempat truk memuat/membongkar, lalu keluar lewat checkpoint.
> **Source**: SAP Community, "Yard Management in SAP EWM" (URL di atas); ERP Q&A, "Yard Management in SAP EWM" — https://www.erpqna.com/yard-management-in-sap-ewm/ (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Setelah check-in di checkpoint, sistem menentukan tujuan TU — langsung ke door bila tersedia, atau ke parking space bila door sibuk (door determination / yard movement).
> **Number/specific**: pergerakan dijalankan lewat warehouse task; transaksi yard movement `/SCWM/YMOVE`.
> **Source**: SAP Community & ERP Q&A yard-management overviews (URL di atas); konsisten dengan learning.sap.com "Managing Shipping and Receiving" (advanced-customizing-in-sap-s-4hana-ewm)
> **Confidence**: high (konsep); medium untuk t-code spesifik (sumber komunitas, bukan help.sap.com langsung) — writer boleh sebut "pergerakan yard" tanpa harus menampilkan t-code.

> **Claim**: Objek inti yang dilacak di yard EWM adalah Transportation Unit (TU); TU dapat dibuat manual oleh yard manager atau otomatis lewat integrasi dengan SAP TM / S/4HANA.
> **Number/specific**: "creation of a Transportation Unit (TU)… either manually by the yard manager or automatically through system integration with SAP Transportation Management or SAP S/4HANA."
> **Source**: Sastra Geek / SAP Community yard-management posts; ringkas sesuai learning.sap.com TU management materi
> **Confidence**: high

> **Claim**: SAP EWM menyediakan Dock Appointment Scheduling (DAS) untuk menjadwalkan janji temu muat/bongkar kendaraan dan melihat beban kerja tiap loading point per hari.
> **Number/specific**: "schedule loading appointments for loading and unloading vehicles and to get an overview of the workload of a loading point for each day."
> **Source**: SAP Help Portal — SAP Dock Appointment Scheduling — https://help.sap.com/docs/SAP_EXTENDED_WAREHOUSE_MANAGEMENT/3d97bec9bf1649099384bb8167df3cf2/b01229f30240482f9a1acd4ac553bb8a.html (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: DAS menjadwalkan sebuah *handling resource* (door tempat TU dimuat/dibongkar) untuk periode waktu tertentu, dengan planned start/end time slot dan executed start/end time point.
> **Number/specific**: "scheduling of a handling resource (a door where transportation units can be loaded and unloaded) for a specific period of time… planned start and end time slots, and executed start and end time points."
> **Source**: SAP Help Portal — Dock Appointment Scheduling (URL di atas)
> **Confidence**: high

> **Claim**: DAS terintegrasi dengan SAP TM: freight order dari TM membuat TU di embedded EWM sekaligus Appointment di DAS; saat time slot diberikan, status Appointment berubah dari 'Provisional' ke 'Planned'.
> **Number/specific**: "When a freight order is transferred from TM to EWM, a Transportation unit (TU) is created in embedded EWM along with an Appointment in Dock appointment scheduling… status changes from 'Provisional' to 'Planned'."
> **Source**: SAP Community, "Dock appointment scheduling (DAS) in Embedded EWM integrated with embedded TM in S/4HANA" — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-members/dock-appointment-scheduling-das-in-embedded-extended-warehouse-management/ba-p/13443106 (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Cross-docking di SAP EWM terbagi dua kategori: planned cross-docking dan opportunistic cross-docking.
> **Number/specific**: *planned* = relevansi cross-docking ditetapkan sebelum barang tiba / sebelum posting goods receipt; *opportunistic* = keputusan diambil setelah barang tiba, saat proses receiving berjalan.
> **Source**: learning.sap.com "Applying Cross-Docking" (processes-in-sap-s-4hana-ewm) & "Setting Up Cross-Docking" (advanced-customizing-in-sap-s-4hana-ewm); SAP Community "Embedded EWM Opportunistic Cross-Docking"
> **Confidence**: high

> **Claim**: Planned cross-docking EWM mencakup Transportation Cross-Docking (TCD) dan Merchandise Distribution; opportunistic mencakup EWM-triggered opportunistic, Pick from Goods Receipt (PFGR), dan Push Deployment (PD).
> **Number/specific**: TCD = barang dipindah lewat interim/cross-docking warehouse (bukan langsung ke ship-to), ditentukan saat route determination outbound delivery; PFGR = untuk order/STO yang terlambat; PD = untuk demand terramal di lokasi lain.
> **Source**: learning.sap.com "Applying Cross-Docking" (processes-in-sap-s-4hana-ewm), diakses 2026-08-11
> **Confidence**: high

> **Claim**: EWM-triggered opportunistic cross-docking adalah satu-satunya metode cross-docking yang tidak butuh aplikasi/sistem lain (ERP, APO, CRM) untuk keputusan cross-docking-nya.
> **Number/specific**: "the only cross-docking method that does not need another application or system (such as ERP, APO, or CRM) for the cross-docking decision."
> **Source**: learning.sap.com "Applying Cross-Docking" (URL course di atas)
> **Confidence**: high

> **Claim**: Yard management adalah fungsi di dalam SAP EWM (bagian lisensi advanced warehouse management), berbeda dari SAP Yard Logistics for SAP S/4HANA yang merupakan produk standalone.
> **Number/specific**: EWM yard management = embedded, proses lebih sederhana, tanpa visualisasi grafis; SAP Yard Logistics = standalone, pendekatan plan-execute-monitor, visualisasi 2D/3D.
> **Source**: SAP Community, "SAP Yard Management and SAP Yard Logistics Deployment Options – embedded vs. side-by-side" — https://community.sap.com/t5/enterprise-architecture-knowledge-base/sap-yard-management-and-sap-yard-logistics-deployment-options-embedded-vs/ta-p/13662511 (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: SAP EWM adalah solusi manajemen gudang lanjutan yang mengoptimalkan material flow control, yard management, labor management, value-added services, kitting, dan cross-docking.
> **Number/specific**: yard management, cross-docking, dan dock/goods-receipt capacity planning termasuk cakupan fungsi advanced EWM.
> **Source**: SAP.com — SAP Extended Warehouse Management features page (HTTP 403 saat WebFetch langsung; fitur dikonfirmasi via ringkasan pencarian sap.com + learning.sap.com supply-chain-execution). 
> **Confidence**: medium (halaman fitur sap.com memblokir fetch; klaim didukung learning.sap.com & community — writer aman menyebut fungsi ini sebagai bagian EWM, tanpa mengutip halaman fitur secara langsung)

> **Claim**: Detention truk (menunggu di dock melebihi waktu bebas) menimbulkan kerugian besar bagi industri angkutan.
> **Number/specific**: Studi ATRI 2024 menaksir kerugian ~USD 15,1 miliar/tahun (USD 11,5 miliar lost productivity + USD 3,6 miliar biaya tambahan); industri kehilangan ~135,9 juta jam pada 2023; detention terjadi di ~39% dari seluruh stop. **Data industri Amerika Serikat.**
> **Source**: ATRI 2024 study via Supply Chain 24/7 — https://www.supplychain247.com/article/truck-driver-detention-productivity-loss-ATRI-survey/air ; Food Logistics — https://www.foodlogistics.com/transportation/news/21085278/ (diakses 2026-08-11)
> **Confidence**: high untuk angka AS; **frame eksplisit sebagai konteks AS, bukan Indonesia**.

> **Claim**: Tarif detention dan demurrage adalah biaya "menunggu" yang berbeda: detention untuk waktu tunggu equipment melewati free time (mis. truk di dock), demurrage untuk kontainer/kargo yang menetap di terminal/pelabuhan melewati free days.
> **Number/specific**: detention truk lazim USD 50–100/jam setelah ~1–2 jam free time (kontrak carrier AS); demurrage kontainer sekitar USD 75–400/hari per kontainer setelah 3–7 free days. **Estimasi industri, bervariasi per kontrak/pelabuhan.**
> **Source**: YardView blog "Average Detention & Demurrage Fees" — https://www.yardview.com/post/average-detention-demurrage-fees ; FreightAmigo logistics guide 2026 (diakses 2026-08-11)
> **Confidence**: medium — angka bergantung kontrak/geografi; **wajib di-frame sebagai rentang estimasi**.

> **Claim**: Biaya logistik Indonesia relatif tinggi dan menjadi target penurunan pemerintah — konteks makro yang relevan untuk efisiensi gudang/yard.
> **Number/specific**: Biaya logistik domestik ~14,1% PDB (data pemerintah), total ~23% PDB bila digabung logistik ekspor; pemerintah menargetkan turun ke ~8% PDB. Pembanding: Malaysia ~13%, Singapura ~8%.
> **Source**: The Jakarta Post (Des 2024) — https://www.thejakartapost.com/front-row/2024/12/13/driving-economic-growth-to-8-percent-by-reducing-land-logistics-cost.html ; PwC Indonesia infrastructure news (Nov 2024) — https://www.pwc.com/id/en/media-centre/infrastructure-news/november-2024/boosting-logistics-performance.html (diakses 2026-08-11)
> **Confidence**: medium — beberapa definisi (domestik vs total) beredar; sebutkan angka dengan atribusi & tahun.

## Solution focus + Soltius anchor (from product_matrix.md + keywords.md mapping)

> Keyword "warehouse management system" tidak ada di tabel 6-keyword product_matrix.md (set 2026-06). Pemetaan diturunkan dari brief + universal framing. Aturan universal tetap berlaku: Soltius **mengimplementasikan**, bukan membuat; maksimal 2–3 self-mention; tanpa superlatif.

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Yard management (vendor-neutral: gate → yard → dock → putaway) | Area di luar gudang; gate check-in, pelacakan trailer, alokasi dock | H2 #1, #3 | — (edukasi, bukan jualan) |
| **SAP EWM — yard management** | checkpoint, parking space, door, door determination, TU tracking | H2 #3 (Alur Gate-to-Dock) | Implementation + SAP Platinum Partner (via United VARs) |
| **SAP EWM — Dock Appointment Scheduling (DAS)** | menjadwalkan handling resource (door); planned vs executed time; integrasi TM (Provisional→Planned) | H2 #3, FAQ | Implementation; pengalaman Transportation & Logistics |
| **SAP EWM — Cross-docking** | planned vs opportunistic; TCD, Merchandise Distribution, PFGR, PD | H2 #4 (Cross-Docking) | mid-article aside (1 kalimat) opsional |
| **SAP Transportation Management (TM)** | sumber freight order → membuat TU + Appointment di EWM | H2 #3, entity list | closing (lanskap S/4HANA supply chain) |

**Soltius anchor untuk closing** (pilih satu, jangan menumpuk): "Sebagai SAP Platinum Partner melalui United VARs dengan pengalaman di industri **Transportation & Logistics** dan **Wholesale Distribution**, Soltius mengimplementasikan SAP EWM — termasuk yard management dan dock appointment scheduling — agar proses dari gerbang hingga rak berjalan sebagai satu alur." (Sumber fakta: `company_profile.md` — SAP Platinum Certified Channel Partner & VAR; United VARs; industri Transportation & Logistics.)

Reminder: Soltius **mengimplementasikan/mengintegrasikan/mendukung** SAP EWM & TM — **tidak membuatnya**. Maks 2–3 Soltius self-mention (idealnya: 1 aside mid-article + 1 closing).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Help Portal — SAP Dock Appointment Scheduling** — https://help.sap.com/docs/SAP_EXTENDED_WAREHOUSE_MANAGEMENT/3d97bec9bf1649099384bb8167df3cf2/b01229f30240482f9a1acd4ac553bb8a.html — *what it backs*: definisi & cakupan DAS (menjadwalkan handling resource/door, planned vs executed time). **Sumber SAP-official terkuat untuk fakta produk.**
2. **learning.sap.com — Applying Cross-Docking (Processes in SAP S/4HANA EWM)** — https://learning.sap.com/courses/processes-in-sap-s-4hana-ewm/applying-cross-docking — *what it backs*: tipe cross-docking EWM (planned/opportunistic, TCD, PFGR, PD). SAP-official.
3. **ATRI 2024 Driver Detention Study** (via Supply Chain 24/7) — https://www.supplychain247.com/article/truck-driver-detention-productivity-loss-ATRI-survey/air — *what it backs*: skala biaya detention (USD 15,1 miliar/tahun, 135,9 juta jam, ~39% stop) — **konteks AS**.
4. **The Jakarta Post (Des 2024)** — https://www.thejakartapost.com/front-row/2024/12/13/driving-economic-growth-to-8-percent-by-reducing-land-logistics-cost.html — *what it backs*: biaya logistik Indonesia ~14% PDB & target 8% (konteks lokal).

Prioritas link-out: SAP Help/learning.sap.com (produk) > ATRI/WERC (biaya industri) > Jakarta Post/PwC (konteks Indonesia).

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu yard management system?
Yard management adalah pengelolaan pergerakan truk, trailer, dan transportation unit di halaman (yard) gudang — dari gerbang masuk, parkir sementara, hingga pintu dock. Ia memperluas warehouse management system ke area di luar empat dinding gudang. Dalam SAP EWM, yard management mengatur checkpoint (gerbang), parking space, dan door, serta melacak posisi tiap trailer di yard.

### Apa itu dock appointment scheduling?
Dock appointment scheduling adalah penjadwalan janji temu muat/bongkar pada pintu dock dalam slot waktu tertentu, menggantikan sistem antre "siapa datang duluan". Di SAP EWM, fitur Dock Appointment Scheduling (DAS) menjadwalkan sebuah handling resource (door) untuk periode tertentu, membedakan planned time slot dari executed time, dan memberi gambaran beban kerja tiap loading point per hari.

### Apa itu cross-docking?
Cross-docking adalah praktik memindahkan barang langsung dari dock kedatangan ke dock keberangkatan tanpa disimpan di rak. Cocok untuk fast-mover, barang perishable, atau konsolidasi kiriman. SAP EWM mendukung dua kategori: planned cross-docking (relevansi ditetapkan sebelum barang tiba) dan opportunistic cross-docking (keputusan diambil saat barang sudah diterima). Kunci keberhasilannya adalah sinkronisasi jadwal inbound dan outbound.

### Bagaimana cara mengurangi dwell time truk di gudang?
Dwell time — total waktu truk berada di fasilitas — dapat ditekan dengan mengganti kedatangan bebas menjadi dock appointment scheduling, melakukan gate check-in cepat, mengalokasikan door secara optimal, dan melacak trailer di yard secara real-time. Menyinkronkan janji temu dengan kesiapan tenaga dan barang menghindari truk menganggur. Pantau dwell time dan ketepatan janji sebagai KPI dashboard.

### Apa itu biaya detention dan demurrage?
Detention adalah biaya yang timbul saat truk/trailer tertahan melewati waktu bebas (biasanya 1–2 jam) di lokasi bongkar-muat; tarifnya sering berkisar USD 50–100 per jam pada kontrak angkutan (estimasi, umumnya data AS). Demurrage adalah biaya kontainer/kargo yang menetap di terminal atau pelabuhan melewati free days. Keduanya biaya "menunggu" yang menggerus margin logistik.

### Apakah yard management bagian dari WMS?
Ya, dalam praktik modern yard management dianggap perpanjangan WMS ke area di luar gudang, karena alur gate → yard → dock → putaway adalah satu rantai. Pada SAP, yard management merupakan fungsi di dalam SAP Extended Warehouse Management (EWM) — bagian lisensi advanced warehouse management — bukan sistem terpisah. (Catatan: SAP juga punya produk standalone terpisah, SAP Yard Logistics.)

### Apakah SAP EWM mendukung yard dan dock management?
Ya. SAP EWM menyediakan fungsi yard management (checkpoint, parking space, door, pelacakan transportation unit) dan Dock Appointment Scheduling (DAS) untuk menjadwalkan janji dock. Keduanya terhubung dengan SAP Transportation Management: freight order dari TM otomatis membuat transportation unit dan appointment dock di EWM. Untuk kebutuhan yard yang lebih kompleks, SAP menyediakan produk terpisah, SAP Yard Logistics for SAP S/4HANA.

## Data tables for the writer

### Storage konvensional vs Cross-docking (H2 #4)
| Aspek | Storage (putaway ke rak) | Cross-docking |
|---|---|---|
| Alur barang | Inbound → simpan di rak → picking → outbound | Inbound → langsung ke dock outbound |
| Cocok untuk | Barang dengan permintaan tidak menentu, safety stock | Fast-mover, perishable, konsolidasi kiriman |
| Syarat utama | Kapasitas & lokasi penyimpanan | Sinkronisasi ketat jadwal inbound–outbound, dock & appointment presisi |
| Manfaat | Fleksibilitas stok, buffer permintaan | Lead time & biaya handling/penyimpanan lebih rendah |
| Risiko | Biaya simpan, barang menua | Salah sinkron → barang tertahan di dock, kemacetan yard |
| Dukungan SAP EWM | Proses putaway standar | Planned (TCD, Merchandise Distribution) & opportunistic (PFGR, PD) |

### Antre bebas vs Dock appointment scheduling (H2 #2)
| Aspek | First-come, first-served | Dock appointment scheduling |
|---|---|---|
| Kedatangan truk | Tak terjadwal, menumpuk di jam sibuk | Slot waktu (time window) per door |
| Beban dock | Puncak pagi, kosong siang | Rata sepanjang hari |
| Risiko biaya | Dwell time & detention tinggi | Waktu tunggu lebih terkendali |
| Visibilitas | Rendah (telepon/WhatsApp) | Overview beban per loading point (di EWM: DAS) |

## Edge cases & nuance

- **Yard management bukan wajib untuk semua gudang.** Untuk gudang dengan sedikit door dan volume truk rendah, penjadwalan sederhana (spreadsheet/telepon) sudah memadai; sistem yard terpisah baru berdampak saat jumlah trailer & throughput tinggi. Ini poin trust-builder H2 #5 — hindari over-engineering.
- **Detention ≠ demurrage.** Sering dipertukarkan. Detention = equipment/truk tertahan melewati free time (umumnya di sisi shipper/consignee); demurrage = kontainer/kargo menetap di terminal/pelabuhan melewati free days. Jelaskan bedanya, jangan campur.
- **Angka biaya bersifat kontekstual & mayoritas AS.** ATRI dan tarif USD/jam adalah data Amerika Serikat. Jangan menerjemahkannya menjadi angka rupiah spesifik untuk Indonesia; gunakan sebagai ilustrasi "biaya tersembunyi" dengan atribusi.
- **Cross-docking menaikkan taruhan yard/dock.** Karena barang tak masuk rak, kegagalan sinkronisasi langsung terlihat sebagai truk menumpuk di dock — inilah mengapa dock appointment scheduling jadi kritis pada skenario cross-dock.
- **DAS bisa berdiri sendiri atau terintegrasi TM.** Nilai penuh muncul saat terhubung dengan Transportation Management (freight order → TU + appointment). Tanpa TM, appointment tetap bisa dibuat di EWM, tapi tanpa hand-off otomatis dari perencanaan transport.

## Flags (open factual risk)

- ⚠️ **Angka detention/demurrage & "30–50% pengurangan dwell time"**: sumber tarif USD/jam dan klaim pengurangan dwell time berasal dari blog vendor/industri (YardView, FreightAmigo, DataDocks), bukan lembaga riset primer. → **Rekomendasi**: frame sebagai "estimasi industri" dengan rentang; untuk skala kerugian pakai ATRI (lebih kredibel) dan sebut eksplisit "data industri AS". Hindari angka pengurangan persentase yang presisi; jika dipakai, beri kualifikasi "menurut penyedia/estimasi".
- ⚠️ **SAP Yard Logistics vs EWM yard management**: dua produk berbeda. → **Rekomendasi**: artikel fokus pada *fungsi yard management di dalam SAP EWM*; boleh menyebut SAP Yard Logistics sebagai opsi standalone untuk kebutuhan lebih kompleks, tapi jangan menyamakan fitur keduanya atau mengatributkan visualisasi 2D/3D ke EWM.
- ⚠️ **t-code `/SCWM/YMOVE` & istilah "yard bin/checkpoint"**: berasal dari sumber komunitas/blog, bukan help.sap.com langsung (konsisten lintas sumber). → **Rekomendasi**: writer boleh menjelaskan konsep (gerbang→parkir→door) tanpa harus menampilkan t-code; jika t-code ditampilkan, posisikan sebagai detail teknis, bukan klaim sentral.
- ⚠️ **Halaman fitur sap.com (EWM features) memblokir fetch (HTTP 403)**: daftar fitur (yard management, cross-docking, labor management, value-added services, kitting) dikonfirmasi via learning.sap.com + community, bukan kutipan langsung halaman fitur. → **Rekomendasi**: sebut fungsi sebagai bagian EWM tanpa mengutip URL fitur sap.com sebagai sumber langsung.
- ⚠️ **Biaya logistik Indonesia (% PDB)**: beredar beberapa angka (domestik ~14,1%; total ~23% termasuk ekspor; target 8%). → **Rekomendasi**: sebut satu angka dengan atribusi & tahun (mis. "~14% PDB, data pemerintah 2024, dengan target 8%") dan hindari menyatukan definisi yang berbeda tanpa penjelasan.

## Definition snippet draft (48 kata)

> **Yard management** adalah pengelolaan pergerakan truk, trailer, dan transportation unit di halaman gudang — dari gerbang masuk, parkir, hingga pintu dock — sebagai perpanjangan warehouse management system ke area di luar gudang. Dalam SAP Extended Warehouse Management (EWM), yard management mengatur checkpoint, parking space, dan door, sering dipadukan dengan dock appointment scheduling.

## Internal links (from brief — for the writer)

- **Primary hub**: https://www.soltius.co.id/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu — anchor "warehouse management system" (inline di lead, dalam 100 kata pertama).
- **Cousin 1**: https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud — anchor "migrasi ERP ke cloud" (EWM bagian lanskap S/4HANA).
- **Cousin 2**: https://www.soltius.co.id/id/blog/business-intelligence — anchor "business intelligence" (dwell time & utilisasi dock sebagai KPI dashboard).
