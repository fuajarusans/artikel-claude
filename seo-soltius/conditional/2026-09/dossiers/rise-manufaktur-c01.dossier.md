---
brief_id: "rise-manufaktur-c01"
researcher_run_date: "2026-09-01"
sources_cited: 6
flags: 5
batch: "conditional 2026-09"
target_word_count: 900
---

# Research Dossier: RISE with SAP untuk Manufaktur — Manfaat dan Pertimbangan Migrasi

## TL;DR untuk writer (batch ~900 kata — pilih 8–12 klaim terkuat, jangan pakai semua)

- **Definisi SEKALI di snippet.** RISE = Business Transformation as a Service yang membundel **3 pilar**: SAP S/4HANA Cloud Private Edition (digital core) + SAP Business Technology Platform (BTP) + SAP Business Network; SAP mengelola infrastruktur cloud. Terverifikasi SAP official. Body/H2 jangan mengulang.
- **KLAIM AKURASI KRITIS (pembeda artikel):** **SAP Digital Manufacturing BUKAN bagian bundel RISE standar.** Industry & line-of-business (LoB) solutions dilisensikan terpisah; SAP DM berintegrasi native (out-of-the-box) ke S/4HANA, tetapi punya langganan sendiri. **Writer TIDAK boleh menulis "SAP DM termasuk RISE".** Ini terverifikasi (SAPinsider + help.sap.com + licensing guides).
- **Manfaat produksi yang bisa dinyatakan tegas (SAP official):** Production Planning (PP) di S/4HANA merencanakan dengan **finite capacity + material availability constraints** dan sinkron real-time ERP↔MES; PP/DS menjadwalkan sampai satuan jam–menit. Ini nilai spesifik lini produksi, bukan back-office.
- **OEE via SAP DM (bukan RISE):** SAP Digital Manufacturing punya **embedded SAP Analytics Cloud** untuk memantau **OEE = Availability × Performance × Quality** di level plant/lini/work center — memantau tanpa Excel. Atribusikan sebagai kapabilitas SAP DM.
- **Konteks lokal terverifikasi (Kemenperin):** tujuh sektor prioritas Making Indonesia 4.0 menyumbang **±70% PDB manufaktur, 65% ekspor manufaktur, 60% tenaga kerja industri**; INDI 4.0 memakai skala kesiapan **0–4**. Pakai sebagai konteks lokal, atribusikan ke Kemenperin.
- **Estimasi industri (WAJIB dilabeli):** dual-run/periode paralel **±3–12 bulan** dan durasi cutover final **jam s/d hari** = estimasi praktik, BUKAN angka SAP resmi.
- **Framing Soltius:** implementator/pendamping yang menjalankan migrasi & integrasi shop-floor — bukan pembuat SAP. **Maks 2 self-mention** (1 positioning line di Kesimpulan + 1 soft CTA baris terakhir).

---

## Core facts (verified)

> **Claim 1 — Komponen bundel RISE (3 pilar).** RISE with SAP membundel **SAP S/4HANA Cloud Private Edition** (digital core), **SAP Business Technology Platform (BTP)**, dan **SAP Business Network** dalam satu langganan; SAP mengelola infrastruktur cloud & SLA (model tanggung jawab bersama — konfigurasi/data tetap milik pelanggan). BTP secara eksplisit "included as part of the RISE with SAP contract subscription".
> **Source:** SAP official — sap.com/products/erp/rise.html; learning.sap.com (Describing RISE with SAP); community.sap.com (RISE bundled cloud services). Diakses 2026-09-01.
> **Confidence:** high. Konsisten dengan sibling checklist/timeline.

> **Claim 2 (KRITIS) — SAP Digital Manufacturing BUKAN bagian bundel RISE standar.** Industry & line-of-business (LoB) solutions dilisensikan **terpisah** dari base RISE. SAP Digital Manufacturing adalah solusi MES/LoB dengan **langganan sendiri** yang berintegrasi **out-of-the-box** ke SAP S/4HANA (dan SAP ERP/EWM), bukan komponen yang otomatis ikut dalam paket RISE.
> **Source:** SAPinsider "Demystifying Contracts and Licensing with RISE with SAP" (industry/LoB solutions licensed separately); help.sap.com — Operations/subscription guide SAP Digital Manufacturing ("out-of-the-box integration to SAP S/4HANA"; "certain features can require a separate subscription license"); Redress/licensing guides 2026. Diakses 2026-09-01.
> **Confidence:** high untuk "dilisensikan terpisah / bukan bagian bundel standar". **Writer WAJIB pakai framing ini; jangan menyatakan SAP DM 'termasuk RISE'.**

> **Claim 3 — PP di S/4HANA: perencanaan dengan kapasitas & material real-time.** SAP S/4HANA Manufacturing for planning and scheduling merencanakan produksi dengan **finite capacity dan material availability constraints**; perencanaan & eksekusi disinkronkan **real-time** lewat integrasi ERP–MES. PP/DS embedded menjadwalkan sampai satuan **jam–menit** (bahkan detik untuk time-continuous scheduling).
> **Source:** SAP official — sap.com/products/scm/manufacturing-for-planning-and-scheduling.html; help.sap.com (PP/DS with SAP S/4HANA). Diakses 2026-09-01.
> **Confidence:** high. Nilai spesifik lini produksi (bukan back-office).

> **Claim 4 — OEE lewat embedded SAP Analytics Cloud di SAP DM.** SAP Digital Manufacturing memiliki **embedded SAP Analytics Cloud (SAC)**; **OEE (Overall Equipment Effectiveness)** dihitung sebagai produk tiga komponen — **Availability × Performance × Quality** — dan dianalisis di level plant, lini produksi, work center, dan resource untuk live monitoring, tanpa ekspor manual ke Excel.
> **Source:** help.sap.com (About SAP Digital Manufacturing for insights; OEE calculations); learning.sap.com (Analyzing Manufacturing Data — OEE). Diakses 2026-09-01.
> **Confidence:** high. **Atribusikan sebagai kapabilitas SAP DM, bukan RISE** (lihat Claim 2).

> **Claim 5 — SAP mengelola infrastruktur & keamanan.** Dalam model RISE, SAP mengelola hosting cloud, pemeliharaan teknis, dan pemantauan keamanan berkelanjutan (mis. **24/7**), sehingga tim IT pabrik dapat fokus ke proses produksi alih-alih patching server. (Model tanggung jawab bersama: konfigurasi, data, dan proses bisnis tetap tanggung jawab pelanggan.)
> **Source:** SAP official — sap.com/products/erp/rise.html; support.sap.com (RISE roles & responsibilities). Diakses 2026-09-01.
> **Confidence:** high untuk pembagian tanggung jawab. **"24/7 monitoring" boleh dipakai sebagai angka aman; jangan mengarang SLA numerik lain.**

> **Claim 6 — Konteks urgensi ECC (singkat).** Mainstream maintenance SAP Business Suite 7 / ECC berakhir **31 Desember 2027**; extended maintenance 2028–2030 dengan premi **+2 poin persen**. Sebut hanya sebagai konteks urgensi 1 kalimat — bahasan utama milik sibling migrasi-sap-2026/sap-ecc-2027.
> **Source:** SAP maintenance strategy (support.sap.com; halaman mem-block bot hari ini), cross-verified sibling final + Rimini Street/E3 Magazine 2026.
> **Confidence:** high untuk tanggal; **jangan jadikan bahasan utama.**

> **Claim 7 — Konteks lokal Kemenperin (Making Indonesia 4.0 / INDI 4.0).** Tujuh sektor prioritas Making Indonesia 4.0 menyumbang sekitar **70% PDB manufaktur, 65% ekspor manufaktur, dan 60% tenaga kerja industri**. Kesiapan pabrik diukur dengan indeks **INDI 4.0** memakai skala **0–4** (0 = belum siap, 4 = sudah menerapkan Industri 4.0).
> **Source:** Kemenperin — kemenperin.go.id (INDI 4.0; Making Indonesia 4.0 priority sectors). Diakses 2026-09-01.
> **Confidence:** high untuk angka 70/65/60 & skala 0–4 (framing pemerintah). **Atribusikan ke Kemenperin; pilih SATU angka agar padat.**

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius anchor |
|---|---|---|---|
| RISE with SAP (BTaaS) = S/4HANA Cloud Private Edition + BTP + Business Network; SAP kelola infrastruktur | 3 pilar bundel; tanggung jawab bersama; 24/7 monitoring | Snippet (definisi) + lead (hub link) + Kesimpulan | **Migration** (under Implementation) + Cloud/RISE; kredensial **SAP Platinum Partner (United VARs), Best RISE & Best Cloud Partner** |
| SAP S/4HANA Production Planning (PP) | Finite capacity + material availability; real-time ERP↔MES; PP/DS jam–menit | H2 #1 (manfaat) | Pengalaman lintas industri manufaktur (Automotive, Mill Products, Consumer Products) |
| SAP Digital Manufacturing (LoB terpisah) | Embedded SAC untuk OEE (A×P×Q); **BUKAN bagian bundel RISE** — lisensi sendiri, integrasi native | H2 #1 (MES/OEE) + FAQ #2 | — (cousin link `digital-manufaktur-sistem` di sekitar sini) |

Reminder: Soltius **menjalankan migrasi & integrasi shop-floor** — **bukan** pembuat SAP. **Maks 2 self-mention** (1 positioning line di Kesimpulan + 1 soft CTA baris terakhir). Tanpa aside Soltius di tengah body (ruang 900 kata tidak cukup). Primary keyword `rise with sap manufaktur` wajib muncul di penutup/CTA.

---

## Authoritative external sources (untuk link-out / atribusi inline — pilih 1–2)

1. **SAP official** — RISE with SAP product page: https://www.sap.com/products/erp/rise.html — *backs*: komponen bundel RISE (S/4HANA Cloud Private Edition + BTP + Business Network), infrastruktur terkelola. **Utama, otoritas tertinggi.**
   - Penguat kapabilitas produksi: https://www.sap.com/products/scm/manufacturing-for-planning-and-scheduling.html (PP finite capacity + material availability, real-time ERP–MES).
   - Penguat OEE (SAP DM): help.sap.com — "About SAP Digital Manufacturing for insights" (embedded SAC, OEE = Availability × Performance × Quality).
2. **Kemenperin** — Making Indonesia 4.0 / INDI 4.0: https://kemenperin.go.id/ (INDI 4.0 skala 0–4; tujuh sektor prioritas ±70% PDB manufaktur) — *backs*: konteks adopsi digital manufaktur Indonesia. **Sumber pemerintah, relevansi lokal.**
   - Alternatif penguat (atribusi sebagai analis/vendor, bukan angka SAP): SAPinsider (licensing RISE — LoB terpisah); T.CON/ARC Advisory (embedded SAC/OEE untuk SAP DM).

Prioritas link-out batch (TEPAT 1–2 inline): **SAP official** (teaching manfaat/komponen) + **Kemenperin** (konteks lokal). Jangan mengarang angka/kapabilitas.

---

## FAQ Q&A (draft — HANYA 3, batch 2026-09; jawaban 30–60 kata, tiap jawaban 1 fakta/angka)

### Apakah produksi harus berhenti saat migrasi ke RISE with SAP?
Tidak sepanjang proyek. Sebagian besar pekerjaan berjalan paralel (dual-run), tetapi cutover final tetap butuh jendela downtime terjadwal — hitungan jam sampai hari, tergantung lingkup. Kuncinya menjadwalkannya di jendela maintenance/shutdown produksi dan menyiapkan rollback plan sebelum go-live.

### Apakah SAP Digital Manufacturing termasuk dalam paket RISE with SAP?
Tidak. RISE membundel tiga pilar — SAP S/4HANA Cloud Private Edition, SAP Business Technology Platform, dan SAP Business Network. Production Planning (PP) memang embedded di S/4HANA, tetapi SAP Digital Manufacturing adalah solusi MES terpisah dengan lisensi sendiri yang berintegrasi native ke S/4HANA.

### Apa manfaat utama RISE with SAP untuk manufaktur?
Perencanaan produksi (PP) di SAP S/4HANA menyelaraskan jadwal dengan ketersediaan material dan kapasitas mesin secara real-time, dengan penjadwalan detail hingga satuan jam–menit (PP/DS). SAP mengelola infrastruktur cloud dan pemantauan keamanan 24/7, sehingga tim IT pabrik fokus ke proses produksi.

---

## Data table untuk writer (H2 #2 — TABEL pertimbangan; parseable row-by-row)

**Judul disarankan**: "Pertimbangan Migrasi RISE yang Khas Manufaktur"

| Pertimbangan khas manufaktur | Risiko bila diabaikan | Langkah mitigasi |
|---|---|---|
| Kontinuitas produksi saat cutover | Lini berhenti, order telat | Jadwalkan cutover di jendela maintenance/shutdown; siapkan rollback plan sebelum go-live |
| Integrasi mesin & MES (OT non-SAP) | Data lantai produksi terputus pasca-migrasi | Petakan interface (mis. OPC UA / SAP Digital Manufacturing) sejak fase Explore |
| Custom code PP/QM/PM | Objek inkompatibel merembet ke operasi produksi | Jalankan SAP Custom Code Migration app; pindahkan ekstensi ke BTP (prinsip clean core) |
| Data master material & BOM | Salah komponen, salah biaya | Bersihkan & validasi sebelum migrasi (SAP Migration Cockpit) |
| Batch management & quality (QM) | Jejak mutu/traceability putus | Uji siklus produksi lengkap saat UAT, bukan hanya transaksi finance |
| Dual-run & lisensi paralel | Biaya infrastruktur ganda tak teranggarkan | Modelkan dual-run (±3–12 bulan, estimasi industri); rujuk sibling checklist untuk detail biaya |

> Catatan writer: baris "dual-run ±3–12 bulan" WAJIB berlabel **estimasi industri**. PP/QM/PM = Production Planning / Quality Management / Plant Maintenance — expand akronim sekali. Ini **pembeda utama** artikel; letakkan sitasi SAP official (PP/MES) di sekitar tabel.

---

## Edge cases & nuance

- **SAP DM ≠ RISE (garis merah akurasi).** RISE membundel S/4HANA Cloud Private Edition + BTP + Business Network. **PP embedded di S/4HANA (jadi ikut RISE), tetapi SAP Digital Manufacturing tidak** — ia LoB terpisah berlisensi sendiri yang berintegrasi native. Jangan campur keduanya.
- **"Real-time" itu produksi, bukan back-office.** Nilai RISE untuk pabrik = PP menyelaraskan jadwal dengan kapasitas mesin & material; ini yang membedakannya dari argumen finance/procurement generik (dan dari sibling checklist/timeline).
- **Custom code paling berat di lini produksi.** Modul PP/QM/PM umumnya paling banyak dikustomisasi, sehingga remediasi custom code paling menantang di manufaktur — beda dari sistem back-office yang lebih standar.
- **OEE angka perbaikan = jangan diarang.** SAP DM menyediakan perhitungan OEE (A×P×Q); JANGAN mengklaim "OEE naik X%" tanpa sumber. Sajikan sebagai kapabilitas monitoring, bukan janji hasil.
- **Kemenperin: pilih satu angka.** 70% PDB manufaktur (7 sektor prioritas) ATAU skala INDI 4.0 (0–4) — jangan tumpuk semua di 900 kata.

---

## Flags (open factual risk — writer WAJIB hedge/hindari)

- ⚠️ **SAP Digital Manufacturing "termasuk RISE"** — **SALAH.** SAP DM dilisensikan terpisah; berintegrasi native tapi bukan komponen bundel RISE standar. → Writer WAJIB frasa "solusi terpisah yang berintegrasi", jangan "termasuk/bagian dari paket RISE".
- ⚠️ **Dual-run / periode paralel ±3–12 bulan** — **estimasi praktik industri, BUKAN angka SAP resmi.** → WAJIB dilabeli "diperkirakan/estimasi industri".
- ⚠️ **Durasi cutover final "jam s/d hari"** — estimasi praktik yang bergantung lingkup; bukan angka SAP tetap. → sajikan sebagai rentang berlabel, kaitkan ke "jendela terjadwal + rollback plan".
- ⚠️ **Angka perbaikan OEE / uptime spesifik (mis. "+X%")** — TIDAK ada sumber; **JANGAN diarang.** OEE = kapabilitas hitung (A×P×Q), bukan janji hasil.
- ⚠️ **Detail isi/harga paket RISE & SLA numerik** — jangan dirinci. "24/7 monitoring" aman; jangan tambah persentase SLA atau harga yang tak bersumber. Tanggal ECC 31 Des 2027 hanya konteks 1 kalimat (halaman support.sap.com mem-block bot hari ini; tanggal terkonfirmasi silang).

---

## Definition snippet draft (40–60 kata — "Ringkasnya:" blockquote setelah lead; definisi HANYA di sini)

> **Ringkasnya:** RISE with SAP untuk manufaktur adalah paket langganan (Business Transformation as a Service) yang membundel SAP S/4HANA Cloud Private Edition sebagai digital core produksi, SAP Business Technology Platform, dan SAP Business Network; SAP mengelola infrastruktur cloud, sehingga tim IT pabrik fokus pada proses produksi, bukan pemeliharaan server.

*(48 kata. Entity jelas: RISE with SAP, SAP S/4HANA Cloud Private Edition, SAP BTP, SAP Business Network. Primary keyword "RISE with SAP untuk manufaktur" di kalimat pertama. Body/H2 DILARANG mengulang definisi ini.)*
