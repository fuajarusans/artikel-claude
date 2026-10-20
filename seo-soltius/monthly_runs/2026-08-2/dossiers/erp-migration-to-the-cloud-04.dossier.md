---
brief_id: "erp-migration-to-the-cloud-04"
researcher_run_date: "2026-08-11"
sources_cited: 8
flags: 5
---

# Research Dossier: Tata Kelola Proyek Migrasi ERP ke Cloud dari Sisi Perusahaan

## TL;DR for the writer

- **Governance sisi customer bukan formalitas — ia penentu nasib proyek.** Gartner memproyeksikan >70% inisiatif ERP yang baru diimplementasikan akan gagal memenuhi sasaran bisnis awalnya hingga 2027; McKinsey menaksir ~70% transformasi besar tak mencapai tujuan, dengan resistensi karyawan + kurangnya dukungan manajemen sebagai penyebab utama. Keduanya berujung pada satu akar: tata kelola & change yang lemah, bukan teknologi.
- **SAP sendiri menganjurkan struktur governance berlapis** — dari Executive Sponsorship turun ke Project Team. Steering committee (sponsor eksekutif customer + partner/SAP) memegang keputusan kritis, anggaran, sumber daya, dan menjadi level eskalasi terakhir. Ini fakta SAP-official, bukan teori manajemen umum.
- **SAP Activate resmi punya enam fase** — Discover, Prepare, Explore, Realize, Deploy, Run — dan **quality gate (Q-gate)** di akhir tiap fase sebagai checkpoint sebelum lanjut. Q-gate itu istilah resmi metodologi, bukan jargon konsultan. Fit-to-standard adalah workshop resmi di fase Explore.
- **RACI = Responsible, Accountable, Consulted, Informed.** Kunci yang sering disalahpahami: hanya SATU pihak yang Accountable per deliverable. Ketegangan sehat proyek SAP: partner biasanya *Responsible* (mengeksekusi), customer tetap *Accountable* (memutuskan & menerima). Semua contoh RACI di dossier ini ILUSTRATIF — writer harus menandainya begitu.
- **Angle jujur (H2 #6):** menyewa SI hebat tidak memindahkan tanggung jawab bisnis. Keputusan proses, kepemilikan data, prioritas, dan adopsi tak bisa didelegasikan. Ini pembeda utama vs. artikel "cara memilih partner" (sibling).

## Core facts (verified)

> **Claim**: SAP Activate adalah metodologi implementasi resmi SAP yang terdiri dari enam fase berurutan.
> **Number/specific**: Enam fase — **Discover, Prepare, Explore, Realize, Deploy, Run**. Explore memakai fit-to-standard workshop; Realize = konfigurasi/build/test; Deploy = cutover ke produksi; Run = operasikan & optimalkan.
> **Source**: SAP — sap.com "SAP Activate methodology"; learning.sap.com "Analyzing each phase of SAP Activate"; community.sap.com. Diakses 2026-08-11.
> **Confidence**: high

> **Claim**: SAP Activate menempatkan quality gate (Q-gate) di akhir setiap fase sebagai titik kontrol sebelum proyek boleh lanjut.
> **Number/specific**: Q-gate adalah checkpoint terstruktur di antara fase; tim & ahli SAP menahan langkah untuk mereview apakah deliverable fase sudah lengkap sesuai standar dan selaras SAP best practice. Q-gate mencegah proyek "melayang" ke kompleksitas kustomisasi yang tak perlu.
> **Source**: SAP — sap.com SAP Activate; community.sap.com "SAP Activate Elements and Phases". Diakses 2026-08-11.
> **Confidence**: high — "quality gate/Q-gate" adalah terminologi resmi metodologi.

> **Claim**: Fit-to-standard adalah pendekatan resmi SAP Activate untuk mengonfirmasi kecocokan proses bisnis dengan standar dan mengidentifikasi gap.
> **Number/specific**: Dilakukan sebagai workshop di **fase Explore** — mengonfirmasi solution design dan menahan kustomisasi liar sebelum masuk ke build/Realize.
> **Source**: SAP — community.sap.com "SAP Activate – Explore Phase: Use Fit-to-Standard...". Diakses 2026-08-11.
> **Confidence**: high

> **Claim**: SAP menganjurkan struktur tata kelola proyek berlapis (multi-level), dari Executive Sponsorship hingga Project Team.
> **Number/specific**: Governance menetapkan peran, tanggung jawab, akuntabilitas, dan setup organisasi untuk tim proyek, stakeholder, eksekutif, dan system integrator — bukan opsional, melainkan bagian metodologi.
> **Source**: SAP — community.sap.com (SAP-authored) "Two Key Types of Governance Bodies for your SAP S/4HANA Cloud Project"; learning.sap.com "Describing Key Stakeholders and Responsibilities". Diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Steering committee terdiri dari sponsor eksekutif sisi customer dan sisi partner/SAP, dan memegang keputusan berdampak seluruh organisasi.
> **Number/specific**: Bertanggung jawab atas koordinasi proyek keseluruhan — keputusan kritis, anggaran, sumber daya (staf) — menyetujui tujuan/hasil/perubahan, menjaga keselarasan dengan strategi perusahaan, dan menjadi **level eskalasi terakhir** (mis. saat kustomisasi khusus diperlukan).
> **Source**: SAP — community.sap.com "Two Key Types of Governance Bodies...". Diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Project sponsor eksekutif harus menunjukkan kepemimpinan yang terlihat sehari-hari dan menjaga "case for change".
> **Number/specific**: Sponsor idealnya eksekutif senior yang membeli value case, cukup dekat dengan program untuk terus mengingatkan tim akan alasan perubahan.
> **Source**: SAP — community.sap.com governance blog; learning.sap.com key-stakeholders course. Diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Business Process Owner (BPO) adalah peran sisi bisnis yang memastikan proses optimal dan memaksimalkan nilai solusi.
> **Number/specific**: BPO bekerja erat dengan application consulting leads, project manager, dan technical architect untuk menyediakan proses terbaik; mereka adalah pemilik keputusan proses bisnis di domainnya.
> **Source**: SAP — learning.sap.com "Discussing/Describing Roles and Responsibilities"; community.sap.com PM workstream blog. Diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Operating committee melapor ke steering committee dan mengoordinasi semua workstream.
> **Number/specific**: Mengoordinasi & memonitor aktivitas lintas workstream; beranggotakan business owner, project manager, dan technology architect — lapisan operasional di bawah steering.
> **Source**: SAP — learning.sap.com key-stakeholders; community.sap.com PM workstream blog. Diakses 2026-08-11.
> **Confidence**: high — istilah bisa bervariasi ("operating committee" vs "project management office/PMO"); lihat Flags.

> **Claim**: RACI matrix adalah teknik yang memetakan tanggung jawab tiap stakeholder atas deliverable.
> **Number/specific**: Empat peran — **Responsible** (mengerjakan), **Accountable** (satu pihak yang ultimately bertanggung jawab atas hasil), **Consulted** (dimintai masukan dua arah sebelum kerja), **Informed** (diberi tahu kemajuan). Prinsip inti: idealnya hanya **satu** Accountable per deliverable.
> **Source**: Umum PM — en.wikipedia.org "Responsibility assignment matrix"; korpus RACI (Atlassian, CIO.com). Diakses 2026-08-11.
> **Confidence**: high

> **Claim**: Gartner memproyeksikan mayoritas inisiatif ERP baru gagal memenuhi sasaran bisnis awalnya.
> **Number/specific**: >70% inisiatif ERP yang baru diimplementasikan akan gagal memenuhi sasaran bisnis awal hingga 2027, dan sebagian (dilaporkan hingga 25%) gagal secara katastrofik. Faktor: change management buruk, arsitektur tak composable, data tak dimodernisasi, dan misalignment inisiatif ERP dengan strategi bisnis.
> **Source**: Gartner "What IT Leaders Must Do to Avoid Disappointing ERP Initiatives" (dikorroborasi erp.today "Closing the ERP Intelligence-to-Action Gap"). Diakses 2026-08-11.
> **Confidence**: medium-high — angka 70%/2027 konsisten di berbagai sumber sekunder; halaman Gartner asli mem-block fetch langsung (403). Untuk "25% katastrofik", attribute hati-hati ("dilaporkan"). Sumber Gartner ini sudah dipakai di history cluster (readiness-assessment).

> **Claim**: McKinsey menaksir mayoritas transformasi besar gagal mencapai tujuannya.
> **Number/specific**: ~70% program transformasi besar/kompleks tidak mencapai sasaran; penyebab utama yang disorot: resistensi karyawan dan kurangnya dukungan manajemen.
> **Source**: McKinsey "Why do most transformations fail? A conversation with Harry Robinson". Diakses via history (dipakai di sibling `tantangan-pasca-go-live`); fetch langsung ter-block run ini.
> **Confidence**: high — figur "70% transformasi gagal" adalah salah satu statistik McKinsey paling banyak dikutip dan sudah terverifikasi + tersitir di history cluster ini.

> **Claim**: Disiplin fit-to-standard didorong lewat mekanisme governance formal di proyek SAP.
> **Number/specific**: SAP mengaitkan standardisasi proses dengan badan seperti Solution Standardization Board dan prinsip "Golden Rules" untuk menahan kustomisasi dan menjaga core tetap bersih (clean core) sejak fase proyek.
> **Source**: SAP — community.sap.com governance blog; blogs.sap.com "Practical governance to drive fit-to-standard mindset". Diakses 2026-08-11.
> **Confidence**: medium-high — konsep valid & SAP-sourced; jumlah "5 Golden Rules" bisa bergeser penamaannya, jangan kunci angka.

> **Claim**: Change request management adalah proses formal mengendalikan perubahan scope; scope creep menjadi pembunuh anggaran/timeline.
> **Number/specific**: Perubahan tak terkendali (scope creep) adalah pola kegagalan berulang; fit-to-standard + gerbang change request (impact assessment → approval steering) adalah remnya. Ini praktik PM standar yang diperkuat quality gate SAP Activate.
> **Source**: Umum PM + SAP Activate (community.sap.com; blogs.sap.com fit-to-standard). Diakses 2026-08-11.
> **Confidence**: high (sebagai prinsip); angka spesifik scope-creep TIDAK diklaim (lihat Flags).

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| SAP Activate (6 fase) + quality gate | Discover, Prepare, Explore, Realize, Deploy, Run; Q-gate = checkpoint akhir fase; fit-to-standard di Explore | H2 #5 (quality gate); definisi di H2 #1 | — |
| Struktur governance SAP (steering, sponsor, BPO, PMO) | SAP anjurkan multi-level; steering = eskalasi terakhir, owns anggaran/keputusan | H2 #2 | — |
| RACI (Customer/SAP/Partner) | 4 peran; 1 Accountable per deliverable; partner Responsible, customer Accountable | H2 #3 (+ tabel) | — |
| Change request & fit-to-standard | rem kustomisasi; scope creep sebagai risiko | H2 #4 | — |
| Soltius sebagai partner | Implements/migrates/supports; bekerja DI DALAM governance customer, tak mengambil alih keputusan bisnis | closing CTA + 1 mid-article aside | **ERP Strategy + Change Management + Migration (Implementation); SAP Platinum Partner via United VARs** |

Reminder: Soltius **implements/migrates/supports** — tidak "membangun" SAP. Maks 2–3 self-mention. Anchor closing yang disarankan (parafrase): *"Sebagai SAP Platinum Partner melalui United VARs, Soltius mendampingi steering committee dan PMO customer — memperkuat tata kelola Anda, bukan menggantikan keputusan bisnis yang tetap menjadi milik perusahaan."* Optional mid-article aside (brief): partner yang baik justru mendorong customer memperkuat governance sendiri.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP — SAP Activate methodology (sap.com) / learning.sap.com** — https://www.sap.com/products/erp/activate-methodology.html — *what it backs*: enam fase SAP Activate, quality gate, fit-to-standard. (SAP official = otoritas tertinggi untuk fakta produk/metodologi SAP.)
2. **SAP (SAP-authored) — "Two Key Types of Governance Bodies for your SAP S/4HANA Cloud Project"** — https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/two-key-types-of-governance-bodies-for-your-sap-s-4hana-cloud-project/ba-p/13573874 — *what it backs*: struktur governance berlapis, peran steering committee/sponsor, eskalasi.
3. **Gartner — "What IT Leaders Must Do to Avoid Disappointing ERP Initiatives"** — https://www.gartner.com/en/information-technology/insights/what-it-leaders-must-do-to-avoid-disappointing-erp-initiatives — *what it backs*: >70% inisiatif ERP gagal penuhi sasaran hingga 2027; faktor kegagalan (change management, misalignment).
4. **McKinsey — "Why do most transformations fail? (Harry Robinson)"** — https://www.mckinsey.com/capabilities/transformation/our-insights/why-do-most-transformations-fail-a-conversation-with-harry-robinson — *what it backs*: ~70% transformasi besar gagal; resistensi karyawan + dukungan manajemen.

Priority order sudah sesuai: SAP official > Gartner/McKinsey. Writer link out minimal 2 (disarankan: SAP Activate + salah satu dari Gartner/McKinsey).

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu steering committee dalam proyek migrasi ERP?
Steering committee adalah badan pengarah tertinggi proyek, berisi sponsor eksekutif dari sisi perusahaan bersama perwakilan partner/SAP. Perannya menyetujui tujuan, anggaran, dan sumber daya; memutuskan perubahan berdampak besar; menjaga keselarasan proyek dengan strategi bisnis; dan menjadi level eskalasi terakhir — misalnya ketika sebuah kustomisasi khusus diminta dan harus ditimbang untung-ruginya.

### Apa itu RACI matrix dan bagaimana memakainya di proyek SAP?
RACI matrix memetakan siapa **Responsible** (mengerjakan), **Accountable** (satu pihak penanggung jawab akhir), **Consulted** (dimintai masukan), dan **Informed** (diberi tahu) untuk tiap deliverable. Di proyek SAP, ia menjernihkan pembagian Customer/SAP/Partner: partner umumnya Responsible mengeksekusi, sementara perusahaan tetap Accountable atas keputusan proses dan penerimaan hasil. Aturan emas: hanya satu pihak Accountable per deliverable.

### Siapa saja tim dari sisi perusahaan dalam proyek migrasi ERP?
Minimal empat lapisan: **project sponsor** (eksekutif senior pemilik value case), **steering committee** (pengarah & pengambil keputusan strategis), **business process owner** (pemilik keputusan proses per domain — finance, supply chain, dsb.), dan **PMO/project manager** (koordinasi harian, jadwal, risiko, change request). Ditambah key user untuk testing dan data owner untuk kualitas data.

### Apa itu quality gate dalam SAP Activate?
Quality gate (Q-gate) adalah titik kontrol resmi di akhir setiap fase SAP Activate. Sebelum proyek boleh lanjut ke fase berikutnya, tim dan ahli SAP mereview apakah deliverable fase itu lengkap sesuai standar dan selaras best practice. Q-gate mencegah proyek melaju dengan pekerjaan setengah matang atau tergelincir ke kompleksitas kustomisasi yang tak perlu.

### Bagaimana mengendalikan scope creep pada proyek ERP?
Kombinasikan tiga rem: (1) disiplin **fit-to-standard** — adopsi proses standar SAP dulu, kustomisasi hanya bila ada alasan bisnis kuat; (2) proses **change request** formal — setiap permintaan baru dinilai dampaknya lalu disetujui/ditolak steering committee, bukan diselipkan diam-diam; (3) **quality gate** SAP Activate sebagai checkpoint. Scope creep adalah salah satu pembunuh anggaran dan timeline paling umum.

### Berapa sering steering committee sebaiknya bertemu?
Tidak ada angka baku dari SAP; dalam praktik proyek umumnya steering committee bertemu **bulanan** untuk meninjau progres, risiko, dan keputusan besar, dengan rapat ad-hoc saat ada eskalasi mendesak. Cadence bisa dirapatkan (mis. dua mingguan) selama fase intensif seperti Realize dan menjelang cutover. Yang penting keputusan tak menggantung.

### Apa yang tidak bisa didelegasikan perusahaan ke partner implementasi?
Empat hal inti tetap milik perusahaan: keputusan **proses bisnis** (bagaimana perusahaan ingin beroperasi), **kepemilikan & kualitas data**, **prioritas** (apa yang penting lebih dulu), dan **adopsi pengguna** (perubahan cara kerja). Partner hebat mengeksekusi dan menasihati, tetapi menyewa SI tidak memindahkan akuntabilitas bisnis ini — ia hanya memindahkan sebagian pekerjaan teknis.

## Data tables for the writer

### Tabel 1 — Lapisan governance sisi customer (ilustratif, selaras anjuran SAP Activate)

| Lapisan | Siapa | Mandat utama | Cadence tipikal |
|---|---|---|---|
| Project Sponsor | Eksekutif senior (mis. CEO/CFO/COO) | Menjaga value case, buka pintu keputusan lintas divisi | Selalu tersedia; hadir di steering |
| Steering Committee | Sponsor customer + pimpinan partner/SAP | Keputusan strategis, anggaran, sumber daya, eskalasi terakhir | Bulanan (rapat ad-hoc bila perlu) |
| PMO / Project Manager | Sisi customer & partner | Koordinasi harian, jadwal, risiko, change request | Mingguan/harian |
| Business Process Owner | Pemilik proses per domain (finance, SCM, dll.) | Keputusan desain proses, sign-off fit-to-standard, UAT | Sepanjang Explore–Realize |

### Tabel 2 — Contoh RACI Customer / SAP / Partner (ILUSTRATIF — bukan template baku)

| Deliverable kunci | Customer | SAP | Partner (SI) |
|---|---|---|---|
| Keputusan & sign-off desain proses (fit-to-standard) | **A** | C | R |
| Konfigurasi & build sistem | C/A (terima) | I | **R** |
| Pembersihan & validasi data | **A** / R | I | C |
| User acceptance testing (UAT) | **A** / R (key user) | I | C |
| Keputusan cutover / go-live | **A** (sponsor/steering) | C | R |
| Change management & adopsi pengguna | **A** | I | C/R |
| Platform teknis (mis. hosting RISE) | I | **A/R** | C |

> Writer: tandai eksplisit bahwa tabel RACI ini contoh generik; RACI riil dinegosiasikan per proyek dalam kontrak & project charter. Prinsip yang ditekankan: partner sering **R**, perusahaan tetap **A** untuk keputusan bisnis & penerimaan.

### Tabel 3 — Enam fase SAP Activate & fokus governance

| Fase SAP Activate | Fokus | Kontrol governance |
|---|---|---|
| Discover | Pahami solusi & scope tingkat tinggi | Value case oleh sponsor |
| Prepare | Finalisasi rencana, setup tim & lingkungan | Charter, RACI, kickoff steering |
| Explore | Fit-to-standard workshop, konfirmasi desain | Sign-off BPO; Q-gate |
| Realize | Konfigurasi, build, test, validasi | Change request; Q-gate |
| Deploy | Cutover ke produksi | Keputusan go-live steering; Q-gate |
| Run | Operasikan, dukung, optimalkan | Transisi ke AMS/support |

## Edge cases & nuance

- **"Punya SI hebat = aman" itu keliru.** Justru kegagalan sering terjadi karena Customer, SAP, dan partner sama-sama mengira pihak lain yang bertanggung jawab atas suatu keputusan (mis. siapa pemilik data, siapa menyetujui perubahan proses). Kekaburan akuntabilitas — bukan kekurangan teknis — adalah pola kegagalan berulang (Gartner).
- **RACI bukan sekadar dokumen.** Nilainya muncul saat dipakai untuk memaksa keputusan tepat waktu; RACI yang cantik tapi tak dijalankan tak menghentikan proyek molor. Tekankan disiplin operasional, bukan formalitas.
- **Fit-to-standard ≠ "tidak boleh ada kustomisasi".** Ini soal urutan: adopsi standar dulu, kustomisasi hanya untuk diferensiasi bisnis nyata, dan setiap kustomisasi lewat gerbang change request. Ini juga cara menjaga clean core sejak fase proyek (link cousin ke SAP Clean Core).
- **Governance terlalu berat juga racun.** Terlalu banyak komite/lapisan bisa memperlambat keputusan. Intinya proporsional: cukup struktur untuk mencegah keputusan menggantung, tidak sampai birokratis. Sebutkan sebagai caveat jujur.
- **Istilah bisa bervariasi antar proyek/edisi.** "Operating committee", "PMO", "project board" kadang menunjuk lapisan yang mirip; nama badan bisa berbeda antara S/4HANA Cloud public vs private. Jelaskan fungsi, jangan terpaku satu label.

## Flags (open factual risk)

- ⚠️ **Angka Gartner "hingga 25% gagal katastrofik"**: figur inti >70%/2027 kuat & konsisten lintas sumber, tetapi "25% katastrofik" muncul di sumber sekunder; halaman Gartner asli mem-block fetch langsung (403). → Rekomendasi: pakai ">70% inisiatif ERP gagal penuhi sasaran bisnis awal hingga 2027 (Gartner)" sebagai klaim utama; sebut "25% katastrofik" hanya bila diperlukan, dengan hedge "dilaporkan". Jangan gabungkan/ubah angka.
- ⚠️ **McKinsey 70%**: figur terverifikasi di history & sangat banyak dikutip, tetapi fetch langsung run ini ter-block (paywall/timeout). → Rekomendasi: aman dipakai dengan atribusi "McKinsey" + URL; jangan tambah detail baru di luar "resistensi karyawan & dukungan manajemen".
- ⚠️ **Cadence "steering bulanan"**: praktik umum, BUKAN aturan resmi SAP. → Rekomendasi: frasa "umumnya/dalam praktik", jangan sajikan sebagai standar SAP.
- ⚠️ **Semua isi tabel RACI**: ilustratif. → Rekomendasi: writer wajib menandai "contoh/generik; RACI riil dinegosiasikan per proyek". Brief mensyaratkan ini.
- ⚠️ **Penamaan badan governance & "Golden Rules"**: label ("operating committee", "PMO", jumlah golden rules) bisa berbeda antar edisi/proyek. → Rekomendasi: jelaskan fungsi peran, hindari mengunci nama/angka spesifik sebagai definitif SAP.

## Definition snippet draft (48 words)

> **Tata kelola proyek migrasi ERP ke cloud** adalah kerangka peran, keputusan, dan kontrol dari sisi perusahaan — mencakup project sponsor, steering committee, business process owner, PMO, matriks RACI, proses change request, dan quality gate SAP Activate — yang memastikan proyek tetap selaras tujuan bisnis dan akuntabilitas tak menggantung, meski dikerjakan bersama partner.
