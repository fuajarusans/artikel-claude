---
brief_id: "warehouse-management-system-02"
researcher_run_date: "2026-08-11"
sources_cited: 9
flags: 6
---

# Research Dossier: Labor Management dalam WMS — Mengukur Produktivitas Gudang, Bukan Menebaknya

## TL;DR for the writer

- **Labor Management System (LMS)** adalah disiplin + perangkat lunak untuk merencanakan, melacak, dan mengukur produktivitas tenaga kerja gudang terhadap **standar kerja yang direkayasa (engineered labor standards / ELS)** — bukan modul WMS berdiri sendiri, melainkan lapisan yang menumpang pada data task WMS (scan lokasi → timestamp). Bedanya dengan WMS: WMS mengatur *pekerjaan apa & di mana* (inventory, task, slotting); LMS mengukur *seberapa baik & seberapa cepat orang menyelesaikannya*.
- **SAP menyediakan modul Labor Management di dalam SAP Extended Warehouse Management (EWM)** — ia "records, measures, visualizes, and documents" produktivitas karyawan, membandingkan *planned vs executed workload*, melacak *direct & indirect labor*, mendukung perencanaan/simulasi staffing, dan bisa memicu pembayaran insentif via integrasi sistem HR. (Sumber: SAP Learning + SAP Help Portal.) Ini anchor SAP yang sah untuk Soltius.
- **Engineered Labor Standards** dihitung dua kali: saat dokumen dibuat (planned workload) dan saat dokumen dikonfirmasi/dieksekusi (executed workload); waktu baku memperhitungkan **travel time + PF&D (personal, fatigue, delay)**. Metodologi standar industri: **MOST/TMU** — 1 TMU = 0,036 detik, 100.000 TMU = 1 jam.
- **Angka yang harus di-frame sebagai rentang/estimasi, bukan fakta keras**: biaya tenaga kerja ~**50–70%** OPEX gudang (sumber industri logistik, bukan SAP/Gartner) dan uplift produktivitas **10–20%** / penghematan biaya tenaga kerja 8–15% (estimasi vendor/industri LMS). Label eksplisit "estimasi vendor/industri".
- **Sensitivitas ketenagakerjaan**: framing wajib "standar yang adil & transparan", bukan alat menekan pekerja. PF&D allowance justru bukti standar dirancang manusiawi (memberi jeda untuk kebutuhan pribadi, kelelahan, delay tak terhindarkan). Soltius = **mengimplementasikan** SAP EWM, tidak membuatnya.

## Core facts (verified)

> **Claim**: SAP EWM memiliki modul Labor Management yang merekam, mengukur, memvisualisasikan, dan mendokumentasikan produktivitas karyawan gudang serta menentukan kebutuhan staf terhadap beban kerja.
> **Number/specific**: LM "records, measures, visualizes, and documents the productivity of employees" dan membantu menentukan kebutuhan staf untuk level workload saat ini.
> **Source**: SAP Learning — "Applying Labor Management" (learning.sap.com, kursus *Processes in SAP S/4HANA EWM*), diakses 2026-08-11.
> **Confidence**: high

> **Claim**: SAP EWM Labor Management mengevaluasi kinerja dengan membandingkan durasi task yang *direncanakan* (planned) vs *aktual* (executed) menggunakan engineered labor standards.
> **Number/specific**: Sistem membuat dokumen *planned workload* (durasi rencana dari ELS) dan *executed workload* (durasi rencana + durasi aktual, termasuk processor dan waktu mulai–selesai eksekusi); evaluasi = membandingkan adjusted planned time dengan actual execution duration.
> **Source**: SAP Help Portal — "Engineered Labor Standards" (help.sap.com, EWM 7.0.4) + SAP Community blog (community.sap.com), diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Engineered Labor Standards di SAP EWM dihitung pada dua titik siklus dokumen.
> **Number/specific**: ELS dihitung (1) saat dokumen dibuat → menghasilkan *planned workload*, dan (2) saat dokumen dikonfirmasi → menghasilkan *executed workload*.
> **Source**: SAP Help Portal — "Engineered Labor Standards" (help.sap.com), diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Waktu eksekusi yang direncanakan di SAP EWM LM memperhitungkan travel time dan allowance untuk kebutuhan pribadi, kelelahan, serta delay tak terhindarkan (PF&D).
> **Number/specific**: Planned execution time dihitung dari engineered labor standards + travel time + "personal needs, fatigue and unavoidable delays".
> **Source**: SAP EWM Labor Management dokumentasi (help.sap.com / community.sap.com), diakses 2026-08-11.
> **Confidence**: high

> **Claim**: SAP EWM Labor Management melacak baik direct labor maupun indirect labor, plus time & attendance.
> **Number/specific**: Direct labor direkam saat dokumen LM-relevan (warehouse order, inventory task) selesai; indirect labor untuk aktivitas perlu yang tak terikat proses gudang standar; time & attendance = clock-in/clock-out.
> **Source**: SAP Learning — "Applying Labor Management" (learning.sap.com), diakses 2026-08-11.
> **Confidence**: high

> **Claim**: SAP EWM Labor Management mendukung perencanaan operasional dan simulasi untuk memperkirakan kebutuhan tenaga kerja saat volume berubah.
> **Number/specific**: LM menyediakan operational planning (forecast staffing) + simulation (memodelkan dampak perubahan workload terhadap kebutuhan sumber daya).
> **Source**: SAP Learning — "Applying Labor Management" (learning.sap.com), diakses 2026-08-11.
> **Confidence**: high

> **Claim**: SAP EWM Labor Management dapat memicu pembayaran insentif melalui integrasi ke sistem HR.
> **Number/specific**: Perbandingan planned vs actual dapat "trigger incentive payments through HR system integration".
> **Source**: SAP Learning — "Applying Labor Management" (learning.sap.com), diakses 2026-08-11.
> **Confidence**: high (namun: fitur ini bergantung konfigurasi/integrasi HR — lihat Flags)

> **Claim**: MOST (Maynard Operation Sequence Technique) adalah predetermined motion time system untuk menetapkan waktu baku suatu tugas.
> **Number/specific**: "A predetermined motion time system used primarily in industrial settings to set the standard time in which a worker should perform a task."
> **Source**: Wikipedia — *Maynard Operation Sequence Technique* (en.wikipedia.org), diakses 2026-08-11; konsisten dengan literatur industrial engineering.
> **Confidence**: high (untuk definisi konsep; lihat Flags soal sumber IE primer)

> **Claim**: TMU (Time Measurement Unit) adalah satuan waktu di predetermined motion time system.
> **Number/specific**: 100.000 TMU = 1 jam, sehingga 1 TMU = 0,036 detik.
> **Source**: Wikipedia — *Maynard Operation Sequence Technique* (en.wikipedia.org), diakses 2026-08-11.
> **Confidence**: high

> **Claim**: MOST punya beberapa varian untuk tipe pekerjaan berbeda.
> **Number/specific**: BasicMOST (dirilis Swedia 1972, masuk AS 1974), MiniMOST & MaxiMOST (1980), plus AdminMOST (dulu ClericalMOST). BasicMOST untuk operasi < ~10 menit; MiniMOST untuk siklus pendek berulang; MaxiMOST untuk pekerjaan panjang non-repetitif.
> **Source**: Wikipedia — *Maynard Operation Sequence Technique* (en.wikipedia.org), diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Engineered labor standards dibangun dari studi time-and-motion / task element yang memperhitungkan travel, handling, delay, dan allowance PF&D.
> **Number/specific**: "Based on observed task elements, time studies, or system-generated data that account for travel, handling, delays, and allowances"; engineer menetapkan frekuensi tiap elemen kerja + PF&D allowance.
> **Source**: Easy Metrics — *Understanding Engineered Labor Standards* + OPSdesign — *Engineered Standards in the Warehouse* (industri IE/warehousing), diakses 2026-08-11.
> **Confidence**: high (konsep metodologi; sumber praktisi, bukan SAP)

> **Claim**: PF&D (Personal, Fatigue & Delay) adalah allowance yang ditambahkan ke standar kerja agar tetap adil & dapat dicapai.
> **Number/specific**: PF&D = penyesuaian untuk waktu hilang akibat kebutuhan pribadi, kelelahan fisik selama shift ~8 jam, dan delay operasional tak terhindarkan.
> **Source**: Axsium — *Personal Fatigue and Delay (PF&D)* glossary; Easy Metrics, diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Utilization dan performance adalah dua metrik berbeda dalam produktivitas gudang.
> **Number/specific**: Utilization = berapa banyak waktu produktif terpakai vs hilang untuk menunggu/travel/delay sistem (mengungkap idle time & bottleneck); performance = output aktual dibanding standar (mis. picks/hour vs standar).
> **Source**: Rebus — *How to Set Labor Standards and Performance Benchmarks*; Easy Metrics (industri warehousing), diakses 2026-08-11.
> **Confidence**: high (konsep; sumber praktisi)

> **Claim**: Biaya tenaga kerja adalah komponen terbesar biaya operasional gudang/DC.
> **Number/specific**: ~**50–70%** dari total biaya operasi DC (dilaporkan a.l. Logistics Management via ringkasan industri). Bervariasi menurut otomasi: DC konvensional ~30%, cold-storage otomatis (AS/RS + robot) ~12–18%.
> **Source**: Ringkasan industri logistik (a.l. CognitOps, Buske, Canon BPS) mengutip Logistics Management, diakses 2026-08-11.
> **Confidence**: medium — angka bervariasi antar sumber & tergantung tipe fasilitas; frame sebagai rentang, bukan angka tunggal. (Brief menyebut ~50–65% rule-of-thumb; sumber cenderung 50–70%.)

> **Claim**: LMS/engineered labor standards diklaim meningkatkan produktivitas dan menurunkan biaya tenaga kerja.
> **Number/specific**: Estimasi industri/vendor: peningkatan produktivitas **10–20%**, penurunan biaya tenaga kerja **8–15%**, payback tipikal < 9 bulan. Rule-of-thumb turunan: perbaikan utilization 5% di DC menengah dapat menghemat ~USD 400rb–700rb/tahun.
> **Source**: Ringkasan vendor/industri LMS (a.l. enVista, ASC Software, Pallite, Malin USA), diakses 2026-08-11.
> **Confidence**: low–medium — klaim vendor, tidak diverifikasi independen (Gartner/IDC). WAJIB di-frame "estimasi vendor/industri", jangan sebagai fakta.

> **Claim**: Modul Labor Management tersedia untuk SAP EWM termasuk pada SAP S/4HANA (private cloud edition).
> **Number/specific**: SAP menyediakan kursus resmi "Configuring Labor Management in SAP EWM for SAP S/4HANA Cloud Private Edition", menandakan LM didukung di deployment S/4HANA private edition EWM.
> **Source**: SAP Learning (learning.sap.com), diakses 2026-08-11.
> **Confidence**: medium — lihat Flags soal Basic vs Advanced EWM (LM adalah fitur EWM lanjutan, tidak selalu ada di setiap tier).

## Solution focus + Soltius anchor (from brief + product_matrix.md universal rules)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Konsep vendor-neutral: LMS, engineered labor standards, MOST/TMU, utilization vs performance, PF&D, workforce planning | LMS = lapisan pengukuran di atas data task WMS; standar dibangun dari time-and-motion + PF&D; MOST/TMU (1 TMU = 0,036 dtk) | H2 #1–#3 (definisi, pengukuran, ELS) | — (body vendor-neutral, tanpa self-mention) |
| **SAP Extended Warehouse Management (EWM) — Labor Management** | records/measures/visualizes/documents produktivitas; planned vs executed workload; direct + indirect labor; simulasi staffing; insentif via integrasi HR | Satu aside mid-article (H2 #4) + closing | **Implementation + SAP Platinum Partner via United VARs**; pengalaman lintas industri (distribusi, manufaktur, retail) |
| Penyelarasan standar dengan aturan kerja lokal | Soltius mengimplementasikan/menyelaraskan modul, bukan membuatnya | Closing CTA | Implementation + "menyelaraskan standar dengan proses & aturan ketenagakerjaan klien" |

Reminder: Soltius **mengimplementasikan/menyelaraskan/mendukung** SAP EWM Labor Management — **tidak membangunnya**. Maksimal 2–3 self-mention (idealnya: 1 aside mid-article + 1 closing).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP Help Portal — "Engineered Labor Standards" (EWM), diakses 2026-08-11** — https://help.sap.com/docs/r/57574d15fa1d414792d74047b66c3e41/7.0.4/en-US/e9cacb53ad377114e10000000a174cb4.html — *what it backs*: ELS dihitung saat dokumen dibuat (planned) & dikonfirmasi (executed); planned time = ELS + travel time + PF&D. (Halaman JS-rendered; detail juga terkonfirmasi via SAP Learning.)
2. **SAP Learning — "Applying Labor Management" (Processes in SAP S/4HANA EWM), diakses 2026-08-11** — https://learning.sap.com/courses/processes-in-sap-s-4hana-ewm/applying-labor-management — *what it backs*: LM records/measures/visualizes/documents produktivitas; direct/indirect labor + time & attendance; simulasi staffing; insentif via integrasi HR.
3. **Wikipedia — "Maynard Operation Sequence Technique", diakses 2026-08-11** — https://en.wikipedia.org/wiki/Maynard_operation_sequence_technique — *what it backs*: definisi MOST, varian (Basic/Mini/Maxi/Admin), TMU (100.000 TMU = 1 jam = 0,036 dtk). *Rekomendasi: gunakan sebagai penjelas konsep; untuk sitasi lebih otoritatif, atribusikan ke H.B. Maynard & Co. sebagai pengembang metode.*

Prioritas otoritas: SAP official (help.sap.com, learning.sap.com) > sumber industrial engineering. Catatan: angka biaya tenaga kerja & uplift produktivitas berasal dari sumber industri/vendor logistik (bukan Gartner/IDC/SAP) — jangan dijadikan tautan otoritas utama; cukup sebagai estimasi berlabel.

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu labor management system di gudang?
Labor management system (LMS) adalah perangkat lunak yang merencanakan, melacak, dan mengukur produktivitas tenaga kerja gudang terhadap standar kerja yang direkayasa (engineered labor standards). LMS memanfaatkan data yang sudah dihasilkan WMS — setiap scan lokasi memberi timestamp — lalu membandingkan waktu aktual operator dengan waktu baku, sehingga produktivitas terukur objektif, bukan berdasarkan perkiraan.

### Apa bedanya LMS dan WMS?
WMS (warehouse management system) mengelola *pekerjaan apa dan di mana*: inventory, penempatan, alur task picking/putaway. LMS berfokus pada *seberapa baik dan cepat orang menyelesaikan pekerjaan itu* — mengukur output tiap operator terhadap standar. LMS bukan pengganti WMS; ia lapisan pengukuran yang menumpang pada data task WMS. Di SAP, keduanya menyatu: Labor Management adalah modul di dalam SAP EWM.

### Apa itu engineered labor standards?
Engineered labor standards (ELS) adalah waktu baku yang dihitung secara rekayasa untuk menyelesaikan sebuah tugas gudang, dibangun dari studi time-and-motion atas elemen kerja (reach, travel, pick, place) plus allowance PF&D (personal, fatigue, delay). Berbeda dari standar berbasis rata-rata historis, ELS berbasis metode — mis. MOST/TMU — sehingga lebih konsisten dan bisa dipertanggungjawabkan.

### Bagaimana cara mengukur produktivitas operator gudang secara objektif?
Kaitkan setiap task ke waktu baku, lalu bandingkan durasi aktual (dari timestamp scan WMS) terhadap standar itu. Di SAP EWM Labor Management, sistem membuat dokumen *planned workload* (waktu rencana dari ELS) dan *executed workload* (waktu rencana + aktual), lalu menghitung performance. Data ini terkumpul otomatis per operator, sehingga produktivitas terukur tanpa stopwatch manual.

### Apa bedanya utilization dan performance dalam produktivitas gudang?
Utilization mengukur berapa banyak waktu kerja yang benar-benar produktif versus hilang untuk menunggu, travel, atau delay sistem — ia mengungkap idle time dan bottleneck. Performance mengukur output aktual dibanding standar (mis. picks per jam vs standar). Operator bisa ber-performance tinggi tetapi utilization rendah bila banyak menganggur karena antrean tugas; keduanya perlu dibaca bersama.

### Kapan sebuah gudang perlu labor management?
Umumnya saat skala tenaga kerja cukup besar sehingga selisih produktivitas berdampak material — biaya tenaga kerja lazim menyerap sekitar 50–70% biaya operasional gudang (estimasi industri). Untuk tim kecil dengan volume rendah, biaya membangun dan memelihara standar bisa lebih besar dari manfaatnya. LMS paling sepadan ketika ada banyak operator, volume tinggi, dan variasi tugas yang menyulitkan penilaian manual.

### Apakah SAP EWM punya fitur labor management?
Ya. SAP Extended Warehouse Management (EWM) memiliki modul Labor Management yang merekam, mengukur, memvisualisasikan, dan mendokumentasikan produktivitas karyawan. Modul ini membandingkan planned vs executed workload lewat engineered labor standards, melacak direct dan indirect labor, mendukung simulasi kebutuhan staf, serta dapat memicu insentif melalui integrasi sistem HR (sesuai konfigurasi).

## Data tables for the writer

### Tabel 1 — LMS vs WMS (untuk H2 #1/#2)
| Aspek | WMS | LMS (Labor Management) |
|---|---|---|
| Pertanyaan inti | Pekerjaan apa & di mana? | Seberapa baik & cepat orang mengerjakannya? |
| Objek | Inventory, lokasi, task, slotting | Waktu & output tenaga kerja vs standar |
| Data kunci | Stok, alur task, konfirmasi | Planned vs actual duration, utilization, performance |
| Di SAP | SAP EWM (task & warehouse order) | Modul Labor Management di dalam SAP EWM |
| Nilai | Akurasi & throughput proses | Produktivitas, perencanaan shift, coaching, insentif |

### Tabel 2 — Elemen standar kerja (untuk H2 #3, ilustratif, bukan angka SAP resmi)
| Elemen tugas | Deskripsi | Faktor yang memengaruhi waktu |
|---|---|---|
| Get / Reach | Menjangkau & mengambil item | Jarak jangkau, berat, ergonomi |
| Travel | Berpindah antar lokasi | Jarak, kepadatan lorong, alat (walk vs forklift) |
| Pick / Place | Mengambil / meletakkan | Jumlah unit, tipe kemasan |
| Scan / Confirm | Verifikasi via handheld | Kualitas jaringan, langkah konfirmasi |
| Allowance PF&D | Kebutuhan pribadi, kelelahan, delay | Panjang shift, kondisi kerja |
> Catatan penulis: nilai TMU spesifik per elemen adalah hasil studi MOST/time-and-motion per fasilitas — jangan cantumkan angka TMU konkret tanpa sumber; cukup jelaskan konsepnya.

### Tabel 3 — Utilization vs Performance (untuk H2 #2)
| Metrik | Mengukur | Contoh pertanyaan | Jebakan |
|---|---|---|---|
| Utilization | % waktu produktif vs idle/menunggu | "Berapa jam efektif dari shift 8 jam?" | Tinggi belum tentu efisien bila sibuk mengerjakan hal salah |
| Performance | Output aktual vs standar | "Picks/jam dibanding standar?" | Tinggi bisa menutupi utilization rendah (banyak nganggur lalu ngebut) |

## Edge cases & nuance

- **LMS bukan modul WMS terpisah, melainkan lapisan pengukuran** yang bergantung pada kualitas data task WMS. Jika WMS tidak mendisiplinkan scan per langkah, LMS kehilangan basis pengukuran. Ini alasan LMS "menempel" pada WMS/SAP EWM, bukan berdiri sendiri.
- **Keadilan standar adalah fitur, bukan afterthought.** PF&D allowance ada justru agar standar manusiawi — memberi ruang untuk kebutuhan pribadi, kelelahan, dan delay tak terhindarkan. Standar tanpa PF&D = alat menekan; standar dengan PF&D transparan = alat perencanaan yang adil. Penulis harus menonjolkan ini (sudut trust-builder brief).
- **"Estimasi vendor" ≠ fakta.** Uplift 10–20% dan biaya tenaga kerja 50–70% berasal dari materi pemasaran vendor/publikasi industri, bukan riset independen. Selalu beri label. Jangan menuliskannya seolah temuan Gartner/IDC.
- **Skala minimum itu nyata.** Untuk tim kecil, ROI LMS bisa negatif karena biaya menyusun & memelihara standar. Brief benar menargetkan H2 "kapan BELUM perlu".
- **Utilization tinggi bisa menyesatkan.** Operator sibuk 100% belum tentu produktif bila mengerjakan indirect labor berlebih atau travel time membengkak — karenanya task interleaving (menggabungkan putaway & pick dalam satu perjalanan) dipakai untuk memangkas travel.
- **Basic vs Advanced EWM.** Labor Management adalah fitur EWM lanjutan; ketersediaannya bergantung tier/edisi deployment EWM (embedded di S/4HANA vs decentralized; Basic vs Advanced). Jangan menyiratkan "semua EWM otomatis punya LM aktif".

## Flags (open factual risk)

- ⚠️ **Angka biaya tenaga kerja gudang (50–70%)**: sumber industri/logistik, bervariasi antar fasilitas (konvensional ~30% hingga otomatis ~12–18%). → Rekomendasi: frame sebagai rentang "sekitar 50–70% pada gudang padat karya (estimasi industri)", bukan angka tunggal/fakta keras.
- ⚠️ **Uplift produktivitas 10–20% / hemat biaya 8–15% / payback < 9 bulan**: klaim vendor LMS, tidak diverifikasi independen. → Rekomendasi: beri label "estimasi vendor/industri" secara eksplisit; hindari kesan riset netral.
- ⚠️ **Ketersediaan modul LM per edisi EWM**: LM adalah fitur EWM lanjutan; tidak semua tier/edisi mengaktifkannya secara default. → Rekomendasi: tulis "SAP EWM menyediakan modul Labor Management" tanpa menjamin ada di setiap instalasi; hindari klaim edisi spesifik tanpa konfirmasi konfigurasi klien.
- ⚠️ **Integrasi HR/payroll untuk insentif**: SAP menyatakan LM *dapat* memicu insentif via integrasi HR, tetapi ini bergantung konfigurasi & sistem HR terhubung. → Rekomendasi: frasakan "dapat diintegrasikan ke sistem HR untuk insentif", bukan fitur otomatis bawaan.
- ⚠️ **MOST/TMU disitir dari Wikipedia**, bukan sumber IE primer/berbayar. Fakta inti (1 TMU = 0,036 dtk; 100.000 TMU/jam; MOST dikembangkan H.B. Maynard & Co.) adalah pengetahuan IE standar dan konsisten lintas sumber. → Rekomendasi: aman untuk menjelaskan konsep; atribusikan metode ke H.B. Maynard & Co. Jangan mencantumkan klaim turunan "MOST 90% lebih cepat dari stopwatch" tanpa sumber primer — itu muncul di ringkasan sekunder saja.
- ⚠️ **Benchmark WERC "DC Measures"** disebut di brief sebagai sumber potensial, TIDAK diverifikasi angkanya di run ini (butuh akses berbayar/laporan). → Rekomendasi: jangan mengutip angka WERC spesifik; jika ingin menyebut, frasakan sebagai "benchmark industri seperti studi WERC" tanpa angka yang tidak dikonfirmasi.

## Definition snippet draft (48 kata)

> **Labor management system (LMS)** adalah perangkat lunak yang merencanakan, melacak, dan mengukur produktivitas tenaga kerja gudang terhadap standar kerja yang direkayasa (engineered labor standards). LMS memanfaatkan data task dari warehouse management system (WMS) — setiap scan lokasi memberi timestamp — untuk membandingkan waktu aktual operator dengan waktu baku secara objektif.
