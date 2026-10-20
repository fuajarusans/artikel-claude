---
brief_id: "sap-clean-core-04"
researcher_run_date: "2026-07-07"
sources_cited: 9
flags: 5
---

# Research Dossier: Cara Membangun Clean Core Center of Excellence (CoE) SAP di Perusahaan Anda

## TL;DR for the writer

- Ini artikel **how-to organisasi**, bukan proses teknis. Inti: bagaimana membentuk **tim internal (CoE)** yang misinya menjaga disiplin clean core sehari-hari. Bedakan tegas dari pilot -01 (governance/anti-drift) — di sini fokusnya *siapa* dan *bagaimana membentuk mereka*.
- Struktur **empat-tim** (leadership/steering, core, extended, project) adalah **praktik industri** yang dikodifikasi SAPinsider dan konsultan SAP — **bukan mandat resmi tunggal dari SAP**. Labeli sebagai praktik industri. Yang *resmi* dari SAP adalah konsep **Customer Center of Expertise (Customer COE)** dengan akreditasi Primary/Advanced — konsep berbeda, boleh dirujuk sebagai payung formal.
- Keputusan yang "dimiliki" CoE clean core dapat dikaitkan akurat ke **model extensibility Level A–D** yang **SAP formalkan 12 Agustus 2025** (A=paling bersih via SAP Build/ABAP Cloud; D=tidak direkomendasikan, technical debt tertinggi). CoE-lah yang memutuskan level mana yang diizinkan untuk tiap kebutuhan.
- Model **in-house vs hybrid vs outsourced**: hybrid (inti internal + partner AMS) paling relevan untuk Indonesia karena **kesenjangan talenta digital** — Kemenkominfo/Komdigi memproyeksikan Indonesia butuh **~9 juta talenta digital hingga 2030** sementara pasokan pendidikan formal jauh di bawah kebutuhan (~600 ribu/tahun dibutuhkan). Gunakan ini untuk membingkai kelangkaan skill ABAP Cloud/BTP secara ter-sumber, bukan klaim kosong.
- Jangan mengarang angka headcount ideal. Sajikan sebagai rule-of-thumb/rentang dan labeli. Soltius anchor = **AMS + model hybrid CoE (SAP Platinum Partner via United VARs)**, closing saja.

## Core facts (verified)

> **Claim**: SAP memformalkan model clean core extensibility empat tingkat (Level A–D).
> **Number/specific**: Diumumkan resmi 12 Agustus 2025; Level A (extend with SAP Build — API stabil yang dirilis publik + ABAP Cloud), Level B (classic APIs), Level C (akses objek internal SAP — untuk skenario legacy), Level D (tidak direkomendasikan — risiko & technical debt tertinggi).
> **Source**: SAP News Center, "How to Extend SAP S/4HANA Cloud the Right Way" (news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/), diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Model Level A–D adalah "shared vocabulary and visual road map" untuk keputusan investasi extensibility.
> **Number/specific**: SAP mendeskripsikan model sebagai penopang "transparent decision-making regarding where to invest in cleanup, modernization, or new development" — mendukung keputusan level yang dimiliki tim internal.
> **Source**: SAP News Center 2025/08, diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Level A mencakup side-by-side extensions di SAP BTP dan on-stack extensions dengan ABAP Cloud.
> **Number/specific**: Level A = "fully compliant extensions using only publicly released and stable SAP interfaces, backed by formal stability contracts"; on-stack dibangun di dalam S/4HANA Cloud memakai ABAP Cloud development model. SAP menyarankan "SAP BTP-first strategy".
> **Source**: SAP News Center 2025/08, diakses 2026-07-07.
> **Confidence**: high

> **Claim**: ABAP Cloud adalah model pengembangan clean-core-compliant SAP.
> **Number/specific**: "ABAP Cloud is the powerful development model for clean-core-compliant, cloud-ready business applications, services, and extensions on SAP BTP, SAP S/4HANA Cloud, and SAP S/4HANA" — versi ABAP yang dibatasi/cloud-optimized yang memaksa penggunaan released APIs & pola extension upgrade-safe.
> **Source**: SAP (dikutip via community.sap.com ABAP Extensibility Guide Aug 2025; help.sap.com/learning.sap.com clean-core courses), diakses 2026-07-07.
> **Confidence**: high

> **Claim**: Struktur tim CoE SAP umumnya terbagi empat kategori.
> **Number/specific**: "SAP CoE structures generally fall into four categories: Leadership, a Core Team, an Extended Team, and Project Team(s)." Leadership = figurehead/akuntabilitas lifecycle & standar; Core team = operasi harian + enhancement kecil + definisi metodologi; Extended team = SME per area fungsi (bergabung ke core bila tak ada); Project team = tim temporer untuk proyek (project manager, SAP architect, analyst, business process experts).
> **Source**: SAPinsider, "SAP CoE Team Structure" (sapinsider.org/topic/sap-center-excellence/sap-coe-team-structure/), diakses 2026-07-07.
> **Confidence**: high — **labeli sebagai praktik industri**, bukan mandat SAP tunggal.

> **Claim**: CoE adalah tim terpusat pemilik best practice dan governance keputusan.
> **Number/specific**: CoE = "a centralized team of skilled knowledge workers whose mission is to provide the organization with best practices around a certain area of interest"; framework menetapkan "decision rights, escalation paths, and approval workflows across IT and business teams."
> **Source**: SAPinsider, "SAP CoE Framework" (sapinsider.org/topic/sap-center-excellence/sap-coe-framework/), diakses 2026-07-07.
> **Confidence**: high

> **Claim**: SAP memiliki konsep formal "Customer Center of Expertise (Customer COE)" — payung resmi berbeda dari struktur 4-tim generik.
> **Number/specific**: Customer COE bertindak sebagai "collaboration hub across IT and Lines of Business"; misinya memaksimalkan nilai bisnis investasi SAP. SAP menyertifikasi lewat dua tingkat kematangan: **Primary Customer COE** dan **Advanced Customer COE**; akreditasi dinilai ulang tiap 2 tahun.
> **Source**: SAP Support Portal, "Customer Center of Expertise" (support.sap.com/en/offerings-programs/ccoe.html) + help.sap.com Solution Manager Customer COE certification docs, diakses 2026-07-07.
> **Confidence**: high (Primary/Advanced dua tingkat: high; lihat flag soal detail timeline kontrak).

> **Claim**: Customer COE wajib menjalankan fungsi dasar termasuk support desk berjam operasi memadai.
> **Number/specific**: Fungsi dasar mencakup "Support Desk with a sufficient number of support consultants ... during regular local working hours (at least 8 hours a day, 5 days a week)." Perusahaan diminta membentuk Customer COE dalam ~12 bulan sejak tanda tangan kontrak SAP Support, dengan minimal satu sistem produktif berjalan ≥6 bulan.
> **Source**: SAP CCoE program docs (support.sap.com; SAP Customer COE Getting Started PDF), diakses 2026-07-07.
> **Confidence**: medium — angka 8x5 & 12 bulan berasal dari materi program SAP yang beredar; **labeli "menurut pedoman program SAP Customer COE" dan sarankan writer verifikasi ke kontrak spesifik klien** karena syarat kontrak dapat berbeda per edisi/perjanjian.

> **Claim**: Indonesia menghadapi kesenjangan talenta digital besar hingga 2030 (konteks kelangkaan skill ABAP Cloud/BTP).
> **Number/specific**: Kemenkominfo/Komdigi memproyeksikan Indonesia membutuhkan **~9 juta talenta digital hingga 2030** (sekitar 600 ribu/tahun), sementara pendidikan formal hanya memasok jauh di bawah kebutuhan (perkiraan ~6 juta dari jalur pendidikan tinggi).
> **Source**: Kemenkominfo/Komdigi via Media Indonesia, CNN Indonesia, ANTARA (2024), diakses 2026-07-07.
> **Confidence**: high untuk angka 9 juta (banyak sumber resmi konsisten). **Kaitan spesifik ke "ABAP Cloud/BTP langka" tetap harus di-hedge** sebagai inferensi (lihat flag).

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Konsep CoE SAP & struktur 4-tim (leadership/core/extended/project) | Praktik industri (SAPinsider), bukan mandat SAP tunggal; Customer COE = payung formal SAP dengan akreditasi Primary/Advanced | H2 #1 (definisi) & H2 #2 (empat peran) | — (edukatif, vendor-neutral) |
| Keputusan yang dimiliki CoE terkait extensibility Level A–D | Level A–D diformalkan SAP 12 Agustus 2025; CoE approve level per kebutuhan | H2 #2 & H2 #4 (roadmap, tabel peran→keputusan) | — |
| Skill inti (ABAP Cloud, SAP BTP, fit-to-standard, integrasi, process mining) | ABAP Cloud = model dev clean-core-compliant; BTP-first untuk side-by-side | H2 #4 (staffing/upskilling) | — |
| Model in-house vs hybrid vs outsourced + peran AMS | Hybrid paling lazim di Indonesia karena kelangkaan talenta (9 juta gap 2030) | H2 #3 + closing | **Application Management Services (AMS) + model hybrid CoE — SAP Platinum Partner via United VARs** |

Reminder: Soltius **implements/migrates/supports** — tidak "membuat" SAP. Max 2–3 Soltius self-mentions; utamanya di closing. Optional 1 aside di H2 #3 (kalimat hybrid paling lazim di Indonesia).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP News Center — "How to Extend SAP S/4HANA Cloud the Right Way" (12 Aug 2025)** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *what it backs*: model clean core extensibility Level A–D dan bahwa itu penopang "transparent decision-making" (keputusan yang dimiliki CoE).
2. **SAPinsider — "SAP CoE Team Structure"** — https://sapinsider.org/topic/sap-center-excellence/sap-coe-team-structure/ — *what it backs*: struktur empat kategori tim CoE (leadership/core/extended/project). Labeli sebagai praktik industri.
3. **SAP Support Portal — "Customer Center of Expertise"** — https://support.sap.com/en/offerings-programs/ccoe.html — *what it backs*: konsep formal Customer COE & akreditasi kematangan (payung resmi SAP).
4. **Kemenkominfo/Komdigi via Media Indonesia (2024)** — https://mediaindonesia.com/humaniora/700580/kemenkominfo-indonesia-butuh-9-juta-talenta-digital-pada-2030 — *what it backs*: kesenjangan ~9 juta talenta digital hingga 2030 (konteks kelangkaan skill → model hybrid).

Priority note: gunakan SAP News (Level A–D) dan SAPinsider (struktur tim) sebagai dua tautan keluar utama; Kemenkominfo untuk konteks Indonesia. Hindari menautkan pesaing system integrator.

## FAQ Q&As (6 drafted, Bahasa Indonesia)

### Apa itu SAP Center of Excellence (CoE)?
SAP Center of Excellence (CoE) adalah tim internal terpusat yang memegang best practice, hak keputusan, dan alur persetujuan seputar sistem SAP di sebuah perusahaan. Dalam konteks clean core, CoE bertugas menjaga inti S/4HANA tetap standar dan mudah di-upgrade — memutuskan level extensibility yang diizinkan, mengelola pengecualian, dan menjaga proses tetap fit-to-standard sehari-hari, bukan hanya saat proyek berlangsung.

### Siapa saja anggota tim CoE clean core?
Praktik industri (mis. SAPinsider) membagi CoE menjadi empat lapis: leadership/steering (arah, akuntabilitas, standar), core team (operasi harian, enhancement kecil, keputusan level extensibility), extended team (ahli materi per area fungsi seperti finance atau logistik), dan project team temporer (project manager, arsitek, analis SAP untuk proyek tertentu). Untuk misi clean core, core team-lah yang menjaga disiplin harian menjaga inti tetap bersih.

### Apakah CoE harus in-house atau boleh hybrid?
Boleh hybrid, dan di Indonesia model hybrid justru paling lazim. In-house memberi kontrol penuh tetapi menuntut talenta ABAP Cloud dan SAP BTP yang masih langka — Kemenkominfo memproyeksikan kebutuhan sekitar 9 juta talenta digital hingga 2030 yang belum terpenuhi. Model hybrid mempertahankan inti pengambil keputusan di internal, lalu memakai partner Application Management Services (AMS) untuk skala dan keahlian teknis. Outsourced penuh cepat tetapi menimbulkan ketergantungan.

### Berapa orang minimal untuk memulai CoE clean core?
Tidak ada angka baku dari SAP; jumlahnya bergantung skala dan kompleksitas SAP Anda. Sebagai rule-of-thumb lapangan, perusahaan kecil bisa mulai sangat ramping — satu process owner yang memegang keputusan clean core, didukung partner AMS untuk eksekusi teknis. Yang penting bukan besarnya tim, melainkan adanya kepemilikan keputusan yang jelas: siapa yang menyetujui permintaan extensibility dan menjaga inti tetap bersih.

### Apa peran CoE dalam menjaga clean core?
CoE adalah pemilik disiplin clean core sehari-hari. Perannya: memutuskan level extensibility yang diizinkan untuk tiap kebutuhan (mengacu model Level A–D yang SAP formalkan Agustus 2025), menyetujui atau menolak permintaan kustomisasi, mengelola pengecualian, dan menjaga proses tetap fit-to-standard. Dengan begitu inti S/4HANA tetap standar dan mudah di-upgrade, sehingga perusahaan tidak terjebak technical debt seperti pada Level D yang tidak direkomendasikan.

### Apa bedanya CoE dan tim IT biasa?
Tim IT biasa umumnya berorientasi menjalankan sistem dan menutup tiket. CoE clean core berorientasi governance dan nilai jangka panjang: ia memegang hak keputusan strategis — level extensibility apa yang boleh, kustomisasi mana yang ditolak demi menjaga inti bersih, dan bagaimana proses tetap fit-to-standard. CoE menjembatani IT dan lini bisnis, menetapkan decision rights dan alur persetujuan, bukan sekadar menjaga sistem tetap menyala.

## Data tables for the writer

### Model membangun CoE clean core: in-house vs hybrid vs outsourced
| Aspek | In-house penuh | Hybrid (inti internal + partner AMS) | Outsourced penuh |
|---|---|---|---|
| Kontrol keputusan clean core | Penuh, di internal | Keputusan di internal; eksekusi teknis dibagi | Bergantung pada partner |
| Kebutuhan talenta langka (ABAP Cloud/BTP) | Tinggi — harus direkrut/dilatih sendiri | Sedang — inti kecil internal, skala dari partner | Rendah di sisi internal |
| Kecepatan mulai | Lambat (rekrut & upskill) | Cepat-menengah | Cepat |
| Risiko ketergantungan | Rendah | Terkendali | Tinggi |
| Kecocokan untuk Indonesia | Perusahaan besar dengan tim SAP matang | Paling lazim (talenta masih langka) | UKM/awal, sementara |

### Empat peran dalam CoE clean core (praktik industri — SAPinsider)
| Peran/tim | Tanggung jawab | Contoh keputusan yang dimiliki |
|---|---|---|
| Leadership / steering | Arah strategis, akuntabilitas lifecycle, penegakan standar | Menetapkan kebijakan clean core; approve exemption berisiko tinggi |
| Core team | Operasi harian, enhancement kecil, metodologi | Approve/tolak permintaan extensibility; tentukan Level A/B/C/D |
| Extended team | Ahli materi (SME) per area fungsi | Validasi kebutuhan fungsional vs standar (fit-to-standard) |
| Project team (temporer) | Eksekusi proyek spesifik | Desain solusi proyek sesuai pagar clean core |

### Referensi cepat: Level extensibility A–D (SAP, Agustus 2025)
| Level | Ringkasan | Implikasi clean core |
|---|---|---|
| A | Extend with SAP Build — API stabil rilis publik + ABAP Cloud; side-by-side di BTP / on-stack | Paling bersih, upgrade-safe (target ideal) |
| B | Classic APIs — antarmuka terdokumentasi, umumnya upgrade-stable | Masih compliant, dengan syarat |
| C | Akses objek internal SAP — untuk skenario legacy | Sebagian compliant; perlu perhatian risiko |
| D | Objek/teknik tidak direkomendasikan (mis. modifikasi, write ke tabel SAP) | Risiko & technical debt tertinggi — dihindari |

## Edge cases & nuance

- **CoE generik vs CoE clean core**: literatur SAPinsider/Surety membahas CoE SAP secara umum. Sudut brief adalah CoE yang *misi utamanya* menjaga clean core — writer harus konsisten menautkan tiap peran ke tugas clean core (approve level, kelola exemption), bukan hanya menyalin struktur generik.
- **Customer COE (formal SAP) ≠ struktur 4-tim (praktik industri)**: keduanya sah tapi beda. Customer COE adalah program akreditasi resmi SAP (Primary/Advanced). Struktur 4-tim adalah cara mengorganisasi orang. Jangan menyatukan seolah SAP mewajibkan "empat tim" — SAP tidak.
- **"Kapan BELUM perlu CoE penuh"** (H2 #5): jujur — UKM tidak butuh CoE berlapis; satu process owner + AMS sudah cukup. Risiko sebaliknya: CoE yang menjadi birokrasi penghambat, memperlambat keputusan yang seharusnya cepat.
- **Angka headcount**: tidak ada standar SAP. Sajikan sebagai rentang/rule-of-thumb dan labeli jelas. Jangan menulis "idealnya X orang" tanpa kualifikasi.
- **Level A–D adalah maturity/klasifikasi, bukan larangan mutlak**: Level C/D kadang tak terhindarkan untuk legacy; intinya CoE membuat keputusan itu *sadar dan terdokumentasi*, bukan default diam-diam.

## Flags (open factual risk)

- ⚠️ **Struktur "empat tim" CoE**: ini praktik industri (SAPinsider/konsultan), **bukan mandat resmi tunggal dari SAP**. → Rekomendasi: writer harus melabeli "menurut praktik industri" / "kerangka yang umum dipakai", jangan menulis "SAP menetapkan empat tim".
- ⚠️ **Detail syarat Customer COE (8 jam×5 hari, 12 bulan sejak kontrak, min. 6 bulan sistem produktif)**: berasal dari materi program SAP yang beredar (PDF/community), bukan dari satu halaman resmi tunggal yang stabil; syarat kontrak dapat berbeda per edisi/perjanjian. → Rekomendasi: attribute "menurut pedoman program SAP Customer COE" dan hindari menyajikan sebagai angka mutlak universal; boleh disebut sebagai contoh ekspektasi.
- ⚠️ **Klaim "talenta ABAP Cloud/BTP langka di Indonesia"**: angka 9 juta gap talenta digital (Kemenkominfo) itu makro, **bukan spesifik ABAP Cloud/BTP**. → Rekomendasi: bingkai sebagai inferensi ter-hedge — "di tengah kesenjangan talenta digital nasional (~9 juta hingga 2030), keahlian spesialis seperti ABAP Cloud dan SAP BTP termasuk yang paling sulit dicari" — sebagai observasi lapangan, bukan statistik khusus ABAP.
- ⚠️ **Angka gap talenta 9 juta vs 12 juta**: sumber pemerintah paling konsisten menyebut ~9 juta hingga 2030 (Kemenkominfo, banyak outlet 2024); beberapa pembacaan IMDI 2024 menyebut proyeksi 12 juta. → Rekomendasi: gunakan "sekitar 9 juta" dengan atribusi Kemenkominfo; jika ingin, sebut "beberapa proyeksi bahkan lebih tinggi".
- ⚠️ **Headcount minimal CoE**: tidak ada sumber SAP yang menetapkan jumlah orang. → Rekomendasi: sajikan hanya sebagai rule-of-thumb/rentang berlabel; jangan mengklaim angka pasti.

## Definition snippet draft (40–60 words)

> Clean Core Center of Excellence (CoE) adalah tim internal yang memiliki dan menjaga disiplin clean core SAP sehari-hari — memutuskan level extensibility yang diizinkan, mengelola pengecualian, dan menjaga proses tetap fit-to-standard — sehingga inti SAP S/4HANA tetap standar dan mudah di-upgrade, tanpa perusahaan bergantung penuh pada konsultan eksternal. (49 kata)
