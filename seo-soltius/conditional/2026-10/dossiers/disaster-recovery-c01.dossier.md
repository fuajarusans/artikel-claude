---
brief_id: "disaster-recovery-c01"
researcher_run_date: "2026-10-08"
sources_cited: 6
flags: 6
batch_overrides: "conditional-2026-10 — body 1000–1200 kata (target ~1100); FAQ 3–5; internal link TEPAT 2; definisi SEKALI (snippet); TANPA image placeholder; meta block lengkap; dossier diringkas per conditional/2026-10/style_addendum.md"
---

# Research Dossier: Disaster Recovery: Pengertian, RPO & RTO, dan Pentingnya bagi Bisnis

## TL;DR for the writer

- **Dua angka memegang seluruh artikel.** AWS (Well-Architected, Reliability Pillar) mendefinisikan **RTO = maksimum jeda yang bisa diterima antara layanan terganggu dan pulih**, dan **RPO = maksimum selang waktu sejak titik pemulihan data terakhir** (seberapa banyak data boleh hilang). Keduanya *ditetapkan organisasi*, bukan vendor — ini inti H2-2 dan definition snippet.
- **Tangga empat strategi DR sudah diverifikasi ke whitepaper AWS resmi**: Backup & Restore → Pilot Light → Warm Standby → Multi-Site Active/Active, dari biaya/kompleksitas terendah ke tertinggi. Angka RPO/RTO tipikal per tingkat ada di tabel di bawah — **tulis "menurut AWS" + kata "tipikal"**, karena ini rentang panduan, bukan jaminan.
- **Aturan emas yang jarang ditulis pesaing lokal (pakai sebagai honest hedging):** AWS menyatakan memilih strategi DR adalah *trade-off biaya* — "avoid implementing a strategy that is more stringent than it needs to be, as this results in unnecessary cost." Strategi termahal (RPO/RTO mendekati nol) bukan default yang benar.
- **Konteks lokal terverifikasi:** POJK No. 11/POJK.03/2022 (berlaku 7 Juli 2022), **Pasal 35 ayat (1)**: bank **wajib menempatkan Sistem Elektronik pada Pusat Data dan Pusat Pemulihan Bencana di wilayah Indonesia**; penempatan di luar negeri hanya dengan izin OJK. **FLAG:** klaim "DRC harus terpisah secara geografis / beda risk domain" TIDAK terbukti di teks POJK 11 untuk bank — itu aturan IKNB (POJK 4/2021). Lihat Flags.
- **Konteks SAP (funnel, 1 blok saja):** SAP HANA System Replication mode **sinkron** → RPO nol (zero data loss) untuk high availability jarak pendek/satu region; mode **asinkron** → RPO di atas nol untuk DR lintas region. **Takeover manual.** Sumber kuat: dokumentasi SAP di Google Cloud. Angka **RTO "menit"** = tipikal, hedge.
- **Batas: JANGAN** mengarang angka kerugian/biaya downtime (lihat Flags), dan jangan masukkan arsitektur HA/DR SAP langkah-demi-langkah (disisakan untuk sibling).

## Core facts (verified)

> **Claim 1**: RTO (Recovery Time Objective) = batas maksimum lama layanan boleh berhenti sebelum pulih.
> **Number/specific**: AWS: "RTO is the maximum acceptable delay between the interruption of service and restoration of service. This determines what is considered an acceptable time window when service is unavailable." Ditetapkan oleh organisasi.
> **Source**: AWS Well-Architected, Reliability Pillar — "Disaster Recovery (DR) objectives", https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/disaster-recovery-dr-objectives.html (diakses 2026-10-08; versi ID tersedia di `docs.aws.amazon.com/id_id/...`)
> **Confidence**: high

> **Claim 2**: RPO (Recovery Point Objective) = batas maksimum data yang boleh hilang, diukur dalam waktu.
> **Number/specific**: AWS: "RPO is the maximum acceptable amount of time since the last data recovery point. This determines what is considered an acceptable loss of data between the last recovery point and the interruption of service." Ditetapkan oleh organisasi.
> **Source**: AWS Well-Architected, Reliability Pillar — "Disaster Recovery (DR) objectives" (URL Claim 1)
> **Confidence**: high

> **Claim 3**: RPO dan RTO adalah dua sasaran independen; RTO analog tetapi berbeda dari MTTR.
> **Number/specific**: AWS: RTO "is a target, or maximum value allowed, for a *single* availability impacting event", sedangkan MTTR adalah nilai rata-rata beberapa kejadian. RPO mengukur titik data, RTO mengukur waktu pulih — satu sistem bisa punya kombinasi keduanya yang berbeda.
> **Source**: AWS Well-Architected, Reliability Pillar — "Disaster Recovery (DR) objectives" (URL Claim 1)
> **Confidence**: high

> **Claim 4**: Disaster recovery berbeda dari high availability — DR menangani peristiwa besar (kehilangan satu data center/region), HA menangani kegagalan komponen dalam satu lokasi.
> **Number/specific**: AWS: "Disaster Recovery focuses on one-time recovery objectives in response to natural disasters, large-scale technical failures, or human threats such as attack or error. This is different than availability which measures mean resiliency over a period of time in response to component failures, load spikes, or software bugs."
> **Source**: AWS Well-Architected, Reliability Pillar — "Disaster Recovery (DR) objectives" (URL Claim 1)
> **Confidence**: high

> **Claim 5**: AWS mendefinisikan empat strategi DR, dari biaya/kompleksitas terendah ke tertinggi: Backup & Restore, Pilot Light, Warm Standby, Multi-Site Active/Active.
> **Number/specific**: AWS: "Disaster recovery strategies available to you within AWS can be broadly categorized into four approaches, ranging from the low cost and low complexity of making backups to more complex strategies using multiple active Regions." Pilot Light, Warm Standby, dan Multi-Site memakai konfigurasi active/passive atau active/active.
> **Source**: AWS whitepaper "Disaster Recovery of Workloads on AWS: Recovery in the Cloud" — "Disaster recovery options in the cloud", https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html (dibaca penuh, 2026-10-08)
> **Confidence**: high

> **Claim 6**: Rentang RPO/RTO tipikal per strategi (bahan tabel utama H2-3).
> **Number/specific**: Menurut panduan AWS (Well-Architected / "Use defined recovery strategies"): **Backup & Restore** → RPO/RTO dalam hitungan **jam**; **Pilot Light** → RPO **menit**, RTO **puluhan menit**; **Warm Standby** → RPO **detik**, RTO **menit**; **Multi-Site Active/Active** → RPO/RTO **mendekati nol**. Whitepaper menegaskan multi-site "can reduce your recovery time to near zero for most disasters".
> **Source**: AWS whitepaper (URL Claim 5) + AWS Well-Architected REL13-BP02, https://docs.aws.amazon.com/wellarchitected/latest/framework/rel_planning_for_recovery_disaster_recovery.html (diakses 2026-10-08)
> **Confidence**: medium-high — rentang ini adalah panduan tipikal AWS, bukan jaminan kontraktual. **Tulis "menurut AWS, tipikal" + biarkan sebagai rentang.** (lihat Flags)

> **Claim 7**: Memilih strategi DR adalah trade-off biaya; jangan lebih ketat dari yang dibutuhkan.
> **Number/specific**: AWS: pilihan strategi "balances reducing downtime and data loss (RTO and RPO) against the cost and complexity of implementing it" dan menyarankan "avoid implementing a strategy that is more stringent than it needs to be, as this results in unnecessary cost." Multi-site adalah "the most complex and costly approach".
> **Source**: AWS whitepaper (URL Claim 5) + REL13-BP02 (URL Claim 6)
> **Confidence**: high

> **Claim 8**: Replikasi bukan backup — replikasi tidak melindungi dari korupsi/penghapusan data kecuali disertai point-in-time recovery.
> **Number/specific**: AWS: "Continuous data replication protects you against some types of disaster, but it may not protect you against data corruption or destruction unless your strategy also includes versioning of stored data or options for point-in-time recovery." Backup wajib diuji: "an untested backup is unproven."
> **Source**: AWS whitepaper (URL Claim 5)
> **Confidence**: high

> **Claim 9**: Di Indonesia, bank wajib menempatkan Pusat Data dan Pusat Pemulihan Bencana (DRC) di wilayah Indonesia.
> **Number/specific**: POJK No. 11/POJK.03/2022 tentang Penyelenggaraan Teknologi Informasi oleh Bank Umum, **Pasal 35 ayat (1)**: "Bank wajib menempatkan Sistem Elektronik pada Pusat Data dan Pusat Pemulihan Bencana di wilayah Indonesia." Penempatan di luar negeri (ayat 2) hanya "sepanjang memperoleh izin dari Otoritas Jasa Keuangan". Regulasi berlaku efektif 7 Juli 2022.
> **Source**: OJK — halaman regulasi "Penyelenggaraan Teknologi Informasi oleh Bank Umum", https://ojk.go.id/id/regulasi/Pages/Penyelenggaraan-Teknologi-Informasi-oleh-Bank-Umum.aspx ; teks pasal: https://pasal.id/peraturan/pojk/peraturan-ojk-no-11-pojk-03-2022-tahun-2022/pasal-35 ; PDF resmi: https://peraturan.go.id/files/pojk11-2022.pdf (diakses 2026-10-08)
> **Confidence**: high untuk kewajiban DC+DRC di wilayah Indonesia; **lihat Flags** untuk klaim pemisahan geografis.

> **Claim 10**: SAP HANA System Replication mode sinkron memberi RPO nol (zero data loss).
> **Number/specific**: Panduan SAP HANA DR (Google Cloud, dokumentasi resmi untuk SAP di GCP): replikasi sinkron "keeps the standby instance 100% in sync and ensures a zero recovery point objective"; asinkron memberi "a greater than zero recovery point objective". Sinkron untuk zona dalam satu region; **asinkron bila standby di region berbeda** (untuk DR lintas lokasi).
> **Source**: Google Cloud — "SAP HANA disaster recovery planning guide", https://docs.cloud.google.com/sap/docs/sap-hana-dr-planning-guide (diakses 2026-10-08)
> **Confidence**: high untuk RPO nol (sinkron) vs >0 (asinkron). **Angka RTO "menit" = hedge** (lihat Flags).

> **Claim 11**: Pada SAP HANA System Replication, takeover (pengambilalihan ke standby) dilakukan manual.
> **Number/specific**: Google Cloud: "For all replication scenarios, you must manually perform a takeover on the standby system to start disaster recovery." Aplikasi juga perlu diarahkan ulang secara manual; otomasi memerlukan cluster/alerting tambahan.
> **Source**: Google Cloud — "SAP HANA disaster recovery planning guide" (URL Claim 10)
> **Confidence**: high

> **Claim 12**: Replikasi SAP HANA tetap tidak menggantikan backup — korupsi ikut tereplikasi.
> **Number/specific**: Google Cloud/panduan SAP HANA: jika persistensi rusak, "the corruption is also replicated"; backup tetap wajib ada dalam rencana. Konsisten dengan prinsip AWS (Claim 8).
> **Source**: Google Cloud — "SAP HANA disaster recovery planning guide" (URL Claim 10)
> **Confidence**: high

> **Claim 13**: ISO 22301 adalah standar internasional untuk Business Continuity Management System (sistem manajemen kelangsungan bisnis).
> **Number/specific**: ISO 22301 "Security and resilience — Business continuity management systems — Requirements" diterbitkan ISO (edisi pertama 2012, revisi 2019). Sebut sebagai **standar**, bukan sumber angka RPO/RTO.
> **Source**: International Organization for Standardization (ISO), standar ISO 22301 (pengetahuan umum terverifikasi; tidak dikutip angka)
> **Confidence**: high (sebagai keberadaan standar) — opsional, hanya jika writer butuh jangkar kepatuhan global.

> **Claim 14**: Backup, disaster recovery, dan business continuity adalah tiga lapis berbeda (dasar H2-1).
> **Number/specific**: Kerangka yang diterima luas & konsisten dengan AWS: **backup** = salinan data (satu alat/komponen); **disaster recovery** = rencana + proses memulihkan data DAN sistem TI setelah gangguan besar, memakai backup + replikasi + failover (lingkup TI); **business continuity (BCP)** = payung yang lebih luas menjaga seluruh operasi (orang, proses, lokasi alternatif). DR = subset TI dari BCP.
> **Source**: AWS whitepaper (lingkup DR, URL Claim 5) + framing industri standar (NaKivo/Splunk/ISO 22301). **Konseptual** — bukan satu angka tunggal; aman sebagai definisi, atribusi "secara umum/menurut AWS untuk bagian DR".
> **Confidence**: high (definisional, didukung banyak sumber)

## Solution focus + Soltius anchor (from product_matrix.md)

Keyword "disaster recovery" tidak punya baris sendiri di `product_matrix.md` → pakai mapping brief + framing universal (blacklist, "implements not builds", tanpa superlatif). Addendum §6: **maksimal 2 self-mention**.

| What to teach (vendor-neutral) | Facts to state accurately | Where in article | Soltius anchor |
|---|---|---|---|
| Beda backup vs DR vs BCP (3 lapis) | Claim 14 + Claim 4 | H2-1 | — (body bebas Soltius) |
| Cara menetapkan RPO & RTO + contoh berhitung | Claims 1–3, 7 | H2-2 (mini-tabel) | — |
| Tangga 4 strategi DR + funnel SAP/cloud | Claims 5–8, 10–12 | H2-3 (tabel) | **Hub** (solusi Cloud) + **cousin** (migrasi ERP) disisipkan inline di sini |
| Mengapa DR penting (bisnis + regulasi) | Claims 4, 7, 9, 13 | H2-4 | **Kesimpulan**: 1 positioning line |
| CTA | — | baris terakhir | soft website CTA soltius.co.id |

**Positioning line yang disarankan (Kesimpulan, parafrase):** "Sebagai SAP Platinum Partner melalui United VARs dan diakui sebagai Best Cloud & Best RISE Partner, Soltius merancang, mengimplementasikan, dan mendukung SAP di atas platform cloud (AWS, Google Cloud, Huawei Cloud) — termasuk arsitektur HA/DR sesuai target RPO/RTO — bukan membuat perangkat lunaknya." (Pilih satu kredensial, jangan tumpuk.)

Reminder: Soltius **mengimplementasikan/memigrasi/mendukung**, bukan membuat SAP/HANA/platform cloud. Huawei Cloud/AWS/GCP ≠ milik Soltius.

## Authoritative external sources (writer cites 1–2 inline)

1. **AWS Well-Architected Framework — Reliability Pillar + whitepaper "Disaster Recovery of Workloads on AWS"** — https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/disaster-recovery-dr-objectives.html (definisi RPO/RTO) & https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html (empat strategi). Versi Bahasa Indonesia tersedia (`docs.aws.amazon.com/id_id/...`). **Pilihan utama** (teknis, bebas-vendor di body). Atribusi: "menurut AWS Well-Architected Framework".
2. **OJK — POJK No. 11/POJK.03/2022 tentang Penyelenggaraan Teknologi Informasi oleh Bank Umum** — https://ojk.go.id/id/regulasi/Pages/Penyelenggaraan-Teknologi-Informasi-oleh-Bank-Umum.aspx — *backs*: kewajiban DC + DRC di wilayah Indonesia (Pasal 35). Atribusi + tahun 2022.
3. (Opsional, jangkar kepatuhan global) **ISO 22301 — Business Continuity Management Systems** — sebut sebagai standar internasional, tanpa angka.

> Hindari outbound ke kompetitor penyedia DR/integrator (Zettagrid, Cloudmatika, DigitalEdge, dll.).

## FAQ Q&As (5, Bahasa Indonesia — jawaban 30–60 kata, 1 fakta/angka per jawaban; JANGAN ulang snippet)

### Apa bedanya disaster recovery dan backup?
Backup adalah salinan data — satu komponen. Disaster recovery adalah rencana dan proses memulihkan data sekaligus sistem TI setelah gangguan besar, yang memakai backup, replikasi, dan failover. Backup saja jarang cukup untuk RTO singkat, karena pemulihan cepat menuntut infrastruktur siaga, bukan sekadar file cadangan. *(49 kata)*

### Apa bedanya RPO dan RTO?
RPO mengukur berapa banyak data yang boleh hilang (dalam satuan waktu), RTO mengukur berapa lama sistem boleh berhenti. Keduanya independen dan ditetapkan organisasi, bukan vendor. Contoh: RPO 1 jam berarti backup minimal tiap jam; RTO 4 jam berarti sistem wajib online kembali dalam 4 jam. *(48 kata)*

### Apa saja strategi disaster recovery?
Menurut AWS Well-Architected, umumnya empat tingkat: backup & restore (termurah, pemulihan dalam hitungan jam), pilot light, warm standby, dan multi-site active/active (termahal, RPO/RTO mendekati nol). Makin cepat target pemulihan, makin tinggi biaya dan kompleksitasnya — pilih sesuai dampak bisnis, bukan tren. *(44 kata)*

### Apa itu Disaster Recovery Center (DRC)?
DRC adalah lokasi cadangan (fisik atau cloud) berisi salinan sistem dan data untuk mengambil alih saat situs utama gagal. Di Indonesia, POJK No. 11/POJK.03/2022 mewajibkan bank menempatkan Pusat Data dan DRC di wilayah Indonesia; penempatan di luar negeri hanya dengan izin OJK. *(45 kata)*

### Apakah pindah ke cloud otomatis membuat sistem tahan bencana?
Tidak otomatis. Cloud menyediakan building block — multi-region, replikasi, failover — tetapi RPO/RTO tetap hasil desain. SAP HANA System Replication mode sinkron dapat mencapai RPO nol, sedangkan replikasi asinkron lintas region menyisakan RPO di atas nol; takeover pun masih dilakukan manual. *(43 kata)*

## Data tables for the writer

### Mini-tabel RPO vs RTO (H2-2)

| Metrik | Mengukur | Satuan | Konsekuensi bila diperketat (mendekati 0) |
|---|---|---|---|
| **RPO** (Recovery Point Objective) | Seberapa banyak data boleh hilang | Waktu (mis. 1 jam) | Frekuensi backup/replikasi naik → biaya & beban naik |
| **RTO** (Recovery Time Objective) | Seberapa lama sistem boleh berhenti | Waktu (mis. 4 jam) | Butuh infrastruktur siaga/otomasi → biaya naik |

Contoh berhitung (sarankan di paragraf elaborasi): gangguan pukul 10.30, RTO 4 jam → sistem harus online paling lambat 14.30. Backup terakhir 10.00, gangguan 10.59 → kehilangan ≤59 menit, masih dalam RPO 1 jam.

### Tangga empat strategi DR (H2-3 — "menurut AWS, tipikal")

| Strategi | Biaya/kompleksitas relatif | RPO tipikal | RTO tipikal | Kapan dipakai |
|---|---|---|---|---|
| **Backup & Restore** | Terendah | Jam | Jam | Toleransi downtime longgar; lindungi dari korupsi/kehilangan data |
| **Pilot Light** | Rendah–sedang | Menit | Puluhan menit | Inti data selalu direplikasi; sisanya "mati" sampai failover |
| **Warm Standby** | Sedang–tinggi | Detik | Menit | Salinan fungsional kapasitas kecil selalu nyala |
| **Multi-Site Active/Active** | Tertinggi | Mendekati nol | Mendekati nol | Bisnis kritis 24/7; sanggup biaya & kompleksitas tertinggi |

Catatan funnel SAP (1 paragraf, bukan tabel baru): SAP HANA System Replication **sinkron** (standby memuat tabel di memori) → RPO nol untuk high availability jarak pendek/satu region; **asinkron** → DR lintas region dengan RPO di atas nol. Takeover manual. Di sinilah keputusan "di mana SAP dihosting" (region DR di cloud) menyatu dengan target RPO/RTO — tempat natural menautkan **hub (solusi Cloud)** + **cousin (migrasi ERP ke cloud)**.

## Edge cases & nuance

- **RPO nol SAP HANA = kapabilitas HA, bukan DR jarak jauh.** Mode sinkron butuh latensi rendah (jarak pendek); untuk DR lintas region dipakai asinkron (RPO > 0). Jangan tulis "SAP HANA memberi RPO nol untuk DR lintas lokasi" — itu salah. Bedakan HA (sinkron, satu region) vs DR (asinkron, lintas region).
- **Replikasi ≠ backup** (Claim 8/12): nuansa jujur yang jarang ditulis pesaing — korupsi/penghapusan ikut tereplikasi; point-in-time backup tetap wajib.
- **"Mendekati nol" bukan "nol".** Bahkan multi-site: AWS mencatat pemulihan dari korupsi data "will always be greater than zero". Hindari menjanjikan RPO/RTO = 0 absolut.
- **DR di atas kertas ≠ recovery time aktual.** Framing pengalaman lapangan (jujur, tanpa angka klien): banyak perusahaan punya backup tetapi belum pernah menguji pemulihannya; AWS menegaskan backup yang tidak diuji = tidak terbukti. Bagus untuk 1–2 kalimat E-E-A-T di H2-3/H2-4.
- **Cloud ≠ otomatis tahan bencana** (FAQ 5): cloud = building block; ketahanan tetap hasil desain RPO/RTO.

## Flags (open factual risk)

- ⚠️ **"DRC harus terpisah secara geografis / beda risk domain" untuk bank**: TIDAK terverifikasi di teks POJK No. 11/POJK.03/2022. Pasal 35 mewajibkan DC + DRC **di wilayah Indonesia**, tetapi tidak saya temukan klausul pemisahan geografis untuk bank. Kewajiban "lokasi berbeda, mempertimbangkan faktor geografis" ada di **POJK 4/2021 (IKNB/non-bank)**, dan diklaim untuk bank oleh blog Digital Edge (Mei 2026) — **unconfirmed**. → Rekomendasi: writer cukup nyatakan kewajiban DC+DRC di wilayah Indonesia (terverifikasi); JANGAN klaim pemisahan geografis sebagai mandat POJK 11, atau sebut sebagai praktik baik umum tanpa menautkannya ke pasal.
- ⚠️ **Kewajiban uji DR plan tahunan (POJK 11)**: muncul di ringkasan/FAQ pihak ketiga ("rencana pemulihan bencana diuji dan dikaji ulang minimal sekali setahun"), belum saya konfirmasi ke pasal spesifik. → Rekomendasi: boleh disebut dengan frasa lunak ("regulasi mendorong pengujian berkala") atau editor verifikasi pasalnya sebelum angka "setahun" dipakai keras.
- ⚠️ **Angka RPO/RTO per strategi (jam/menit/detik/nol)**: rentang panduan tipikal AWS, bukan jaminan. → Rekomendasi: selalu "menurut AWS … tipikal", biarkan sebagai rentang, jangan jadikan SLA pasti.
- ⚠️ **SAP HANA RTO "dalam hitungan menit"**: RPO nol (sinkron) terdukung kuat (Google Cloud SAP docs: "ensures a zero recovery point objective"). Angka RTO "menit" adalah framing tipikal vendor, bukan jaminan SAP mutlak. → Rekomendasi: "RTO dalam hitungan menit (tipikal, bergantung konfigurasi & otomasi)". Idealnya editor konfirmasi silang ke help.sap.com (dokumentasi HANA System Replication) sebelum terbit.
- ⚠️ **Angka kerugian/biaya downtime**: TIDAK dikumpulkan dan JANGAN diarang. Angka viral seperti "$5.600/menit" (Gartner 2014) sudah tua dan sering salah-atribusi. → Rekomendasi: framing kualitatif (downtime menghentikan penjualan, merusak reputasi, memicu pelanggaran kepatuhan). Jika butuh angka, wajib ada sumber + tahun — baru tambahkan saat verifikasi.
- ⚠️ **Teks Pasal 35 diakses via pihak ketiga (pasal.id) + halaman regulasi OJK**: bunyi inti (DC+DRC di wilayah Indonesia; izin OJK untuk luar negeri) konsisten lintas sumber termasuk ringkasan OJK. PDF resmi: peraturan.go.id/files/pojk11-2022.pdf. → Rekomendasi: atribusi "POJK No. 11/POJK.03/2022" + tahun 2022; frasa umum, jangan kutip ayat panjang verbatim.

## Definition snippet draft (40–60 kata, SEKALI — blockquote "Ringkasnya:")

> Ringkasnya, *disaster recovery* (DR) adalah kumpulan kebijakan, prosedur, dan teknologi untuk memulihkan data dan sistem TI secepat mungkin setelah gangguan besar — seperti serangan siber, kegagalan perangkat keras, atau bencana alam. Keberhasilannya diukur lewat dua sasaran: seberapa banyak data boleh hilang (RPO) dan seberapa cepat sistem harus pulih (RTO).

(55 kata — entity-clear; RPO/RTO di-expand; pasang setelah lead. **JANGAN diulang di body/H2/FAQ.**)

## Notes for image-planner

**N/A — batch conditional 2026-10 TANPA image placeholder** (style_addendum §3). Konsep visual (garis waktu RPO→gangguan→RTO, tangga strategi) disampaikan lewat mini-tabel RPO/RTO + tabel tangga strategi di atas.
