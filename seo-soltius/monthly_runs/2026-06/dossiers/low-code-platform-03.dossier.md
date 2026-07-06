---
brief_id: "low-code-platform-03"
researcher_run_date: "2026-06-02"
sources_cited: 14
flags: 4
---

# Research Dossier: Cara Membangun Program Citizen Developer di Perusahaan dengan Low-Code Platform

## TL;DR for the writer

- Gartner memproyeksikan rasio 4:1 citizen developer vs professional developer pada 2026 — angka konkret yang meyakinkan manajemen untuk investasi program ini.
- SAP Build menyediakan learning journey resmi di SAP Learning untuk citizen developer; sertifikasi "SAP Certified – SAP Build Developer" tersedia dan valid 12 bulan — durasi training formal di SAP Learning ada tapi program spesifik per-hari belum dikonfirmasi secara resmi.
- Governance federated adalah pendekatan yang direkomendasikan untuk enterprise: IT sebagai penjaga kebijakan, unit bisnis punya "champion" terdaftar — ini mencegah shadow IT tanpa membunuh momentum.
- Kegagalan program citizen developer lebih sering terjadi karena faktor manusia dan proses (tidak ada sponsor eksekutif, use case pertama terlalu kompleks, tidak ada pengukuran ROI) bukan karena teknologinya — ini adalah angle jujur yang membedakan artikel dari vendor pitch.
- Freudenberg Group (kasus nyata SAP Build) meluncurkan "Confactory" — program citizen developer internal dengan 30+ peserta yang menghasilkan momentum nyata; ini dapat digunakan sebagai contoh enterprise global.

---

## Core facts (verified)

> **Claim**: Gartner memproyeksikan rasio citizen developer vs professional developer di enterprise besar mencapai 4:1 pada 2026
> **Number/specific**: 4 citizen developer per 1 professional developer di large enterprises pada 2026
> **Source**: Gartner, dikutip via Kissflow "What Gartner Says About the Rise of the Citizen Developer" — https://kissflow.com/citizen-development/gartner-on-citizen-development/ (accessed 2026-06-02)
> **Confidence**: high — konsisten dikutip di beberapa sumber Kissflow dan referensi Gartner community

> **Claim**: Pada 2026, low-code akan menyumbang 75% dari total pengembangan aplikasi baru
> **Number/specific**: 75% new application development menggunakan low-code pada 2026
> **Source**: Gartner, dikutip via Kissflow "Gartner Forecasts on Low-Code Development Market" — https://kissflow.com/low-code/gartner-forecasts-on-low-code-development-market/ (accessed 2026-06-02)
> **Confidence**: medium — angka berasal dari interpretasi Kissflow atas laporan Gartner berbayar; tidak dapat dikonfirmasi langsung dari Gartner.com; paraphrase dengan atribusi jelas

> **Claim**: Pasar low-code development technology global diproyeksikan mencapai USD 44,5 miliar pada 2026
> **Number/specific**: USD 44,5 miliar (2026), USD 58,2 miliar (2029)
> **Source**: Gartner forecast, dikutip via Kissflow "Low-Code Trends & Statistics Shaping Enterprise IT in 2026" — https://kissflow.com/low-code/low-code-trends-statistics/ (accessed 2026-06-02)
> **Confidence**: medium — angka dari Gartner; dikutip lewat Kissflow (bukan sumber primer), berikan atribusi jelas

> **Claim**: Pada 2026, minimal 80% pengguna platform low-code adalah developer dari luar departemen IT formal (citizen developer)
> **Number/specific**: 80% user base low-code tools adalah non-IT / citizen developer pada 2026
> **Source**: Gartner, dikutip via Kissflow — https://kissflow.com/citizen-development/citizen-development-statistics-and-trends/ (accessed 2026-06-02)
> **Confidence**: medium — konsisten dikutip Kissflow; angka berasal dari Gartner berbayar

> **Claim**: SAP menyediakan learning journey resmi untuk citizen developer di SAP Build melalui SAP Learning
> **Number/specific**: Program "Utilize SAP Build for Low-Code/No-Code Applications and Automations for Citizen Developers" tersedia di learning.sap.com
> **Source**: SAP Learning — https://learning.sap.com/learning-journey/utilize-sap-build-for-low-code-no-code-applications-and-automations-for-citizen-developers (accessed 2026-06-02)
> **Confidence**: high — halaman resmi SAP Learning

> **Claim**: SAP menawarkan sertifikasi resmi untuk citizen developer SAP Build
> **Number/specific**: "SAP Certified – SAP Build Developer" (formerly C_LCNC_2601); sertifikasi berdurasi 3 jam (80 pertanyaan), valid 12 bulan, dapat diperpanjang
> **Source**: SAP Learning — https://learning.sap.com/certifications/sap-certified-associate-low-code-no-code-developer-sap-build (accessed 2026-06-02)
> **Confidence**: high — halaman resmi SAP

> **Claim**: SAP sedang mengembangkan sertifikasi citizen developer generasi berikutnya yang direncanakan meluncur H2 2026
> **Number/specific**: Successor certification to C_LCNC_2601 planned for H2 2026 with broader scope
> **Source**: SAP Learning certification page — https://learning.sap.com/certifications/sap-certified-associate-low-code-no-code-developer-sap-build (accessed 2026-06-02)
> **Confidence**: high — SAP official

> **Claim**: SAP Build terdiri dari tiga komponen utama: Build Apps, Build Process Automation, dan Build Work Zone
> **Number/specific**: Tiga produk dalam suite SAP Build berjalan di atas SAP BTP
> **Source**: SAP product documentation / product_matrix.md (Soltius knowledge base, verified via SAP Learning product page — https://learning.sap.com/products/sap-build)
> **Confidence**: high

> **Claim**: Freudenberg Group menjalankan program citizen developer internal ("Confactory") menggunakan SAP Build dengan 30+ peserta pilot
> **Number/specific**: 30+ citizen developer dalam pilot internal; program bernama "Confactory"
> **Source**: Referensi case study dikutip via cogentinfo.com — https://www.cogentinfo.com/resources/low-code-at-enterprise-scale-lessons-from-sap-build-early-adopters; awalnya dari SAP case study 2023
> **Confidence**: medium — dikutip di sumber third-party (Cogent Info, SAP partner); tidak dapat diverifikasi langsung di sap.com pada sesi ini; gunakan dengan atribusi "menurut studi kasus SAP Build"

> **Claim**: Governance model "federated" adalah pendekatan yang direkomendasikan untuk enterprise yang menerapkan citizen development
> **Number/specific**: Model federated: IT menetapkan kebijakan, unit bisnis punya "champion" terdaftar yang bertanggung jawab terhadap aplikasi di area masing-masing
> **Source**: Gartner best practice untuk citizen development governance — referensi umum dari "How to Support and Govern Low-Code Applications for Citizen Development" (Gartner, dikutip via search result ID gartner.com/en/documents/6370411); konsisten dengan panduan praktitioner umum
> **Confidence**: medium — dokumen Gartner di-gate (berbayar); framework federated ini adalah best-practice yang dikonfirmasi di literatur enterprise IT; formulasikan sebagai rekomendasi umum bukan klaim Gartner langsung

> **Claim**: SAP Build memiliki governance tools di SAP BTP termasuk role-based access, approval workflows, dan monitoring dashboard
> **Number/specific**: Built-in governance features di SAP BTP: identity/access management, approval workflows, audit logging
> **Source**: SAP BTP product capabilities — general SAP documentation (knowledge_base/product_matrix.md); konsisten dengan SAP BTP positioning
> **Confidence**: high — SAP platform-level capability yang sudah diverifikasi

> **Claim**: Transformasi digital Indonesia membutuhkan percepatan adopsi low-code; pemerintah menargetkan digital-ready economy
> **Number/specific**: Kemenkominfo (kini Komdigi) mendorong digitalisasi UMKM dan enterprise; RPJPN 2025-2045 menargetkan ekonomi digital 40% PDB
> **Source**: Komdigi/Kemenkominfo digital transformation roadmap — konteks umum; tidak ada angka IT backlog spesifik Indonesia dari IDC/Gartner APAC yang ditemukan dalam sesi ini
> **Confidence**: medium untuk konteks umum; angka "40% PDB" perlu atribusi resmi — ⚠️ lihat flags

> **Claim**: Shadow IT terjadi ketika karyawan membangun atau menggunakan solusi teknologi tanpa persetujuan dan pengawasan IT
> **Number/specific**: Citizen developer terstruktur dalam governance yang jelas adalah solusi utama untuk mencegah shadow IT
> **Source**: Konsensus industri (Gartner, Forrester — berbagai publikasi); pandangan ini konsisten lintas analis
> **Confidence**: high — established concept, tidak perlu satu sumber tunggal

> **Claim**: Durasi program pelatihan citizen developer dasar SAP Build berkisar 3–5 hari untuk pemula
> **Number/specific**: SAP Learning menyediakan learning journey modular; estimasi 3–5 hari untuk dasar (hands-on); tidak ada durasi resmi spesifik yang dipublikasikan SAP untuk program enterprise batch
> **Source**: SAP Community post "Start learning SAP Build and become a Citizen Developer" — https://community.sap.com/t5/technology-blog-posts-by-sap/start-learning-sap-build-and-become-a-citizen-developer/ba-p/13565058; estimasi praktitioner
> **Confidence**: low — ⚠️ lihat flags; gunakan sebagai "estimasi umum" atau "dalam praktik implementasi"

---

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| SAP Build (Build Apps, Build Process Automation, Build Work Zone) | Suite di atas SAP BTP; tiga komponen; governance tools built-in (RBAC, approval workflow, audit log) | H2 "Langkah-langkah" (sebutkan sebagai contoh platform enterprise; 1 kalimat mid-article) | Digital Platform solution |
| SAP BTP governance tools | Role-based access, monitoring dashboard, approval workflows — yang membedakan structured citizen development dari shadow IT | H2 Governance model | Implementation + pengalaman pendampingan SAP Build di Indonesia |
| SAP Learning citizen developer journey | Learning journey resmi tersedia; sertifikasi formal; modular — dapat dipakai perusahaan sebagai kurikulum baseline | H2 Langkah-langkah (step Training) | (no self-mention needed di sini) |

**Soltius closing CTA (pre-approved phrasing)**: "Soltius membantu perusahaan merancang dan menjalankan program citizen developer di atas SAP Build, dari pemilihan use case pertama hingga tata kelola yang menjaga data tetap aman." (dari brief — sesuai dengan product_matrix.md)

**Optional mid-article aside** (satu kalimat, di H2 langkah-langkah, step Setup/Training): "Untuk enterprise yang menggunakan ekosistem SAP, mitra implementasi seperti Soltius dapat membantu merancang kurikulum pilot berbasis SAP Build sesuai kebutuhan industri."

---

## Authoritative external sources (untuk writer di-link out)

1. **Gartner / Kissflow — "What Gartner Says About the Rise of the Citizen Developer"** — https://kissflow.com/citizen-development/gartner-on-citizen-development/ — *what it backs*: angka 4:1 rasio citizen vs professional developer 2026; adopsi low-code

2. **SAP Learning — "SAP Certified – SAP Build Developer"** — https://learning.sap.com/certifications/sap-certified-associate-low-code-no-code-developer-sap-build — *what it backs*: program sertifikasi resmi SAP Build untuk citizen developer, H2 2026 successor roadmap

3. **SAP Learning — "Utilize SAP Build for Low-Code/No-Code Applications and Automations for Citizen Developers"** — https://learning.sap.com/learning-journey/utilize-sap-build-for-low-code-no-code-applications-and-automations-for-citizen-developers — *what it backs*: learning journey resmi SAP untuk citizen developer; durasi modular

4. **SAP Community — "Start learning SAP Build and become a Citizen Developer"** — https://community.sap.com/t5/technology-blog-posts-by-sap/start-learning-sap-build-and-become-a-citizen-developer/ba-p/13565058 — *what it backs*: panduan mulai citizen development di SAP Build; komunitas praktitioner

5. **Kissflow — "Low-Code Trends & Statistics Shaping Enterprise IT in 2026"** — https://kissflow.com/low-code/low-code-trends-statistics/ — *what it backs*: pasar low-code USD 44,5B (2026); 80% user base = non-IT; angka adopsi enterprise

---

## FAQ Q&As (7 pertanyaan, Bahasa Indonesia)

### Apa itu citizen developer?
Citizen developer adalah karyawan non-programmer — biasanya dari unit bisnis seperti keuangan, operasional, atau SDM — yang membangun aplikasi internal menggunakan platform low-code seperti SAP Build. Berbeda dari programmer profesional, citizen developer tidak menulis kode secara manual, melainkan menggunakan antarmuka visual drag-and-drop. Menurut Gartner, pada 2026, rasio citizen developer terhadap professional developer di enterprise besar akan mencapai 4:1.

### Siapa yang bisa menjadi citizen developer di perusahaan?
Siapapun dari unit bisnis yang memiliki pemahaman baik tentang proses kerja di areanya dapat menjadi citizen developer — misalnya staf keuangan yang ingin mengotomatiskan laporan, atau manajer gudang yang butuh aplikasi tracking sederhana. Yang paling penting bukan latar belakang teknis, melainkan pemahaman proses bisnis yang kuat dan kemauan belajar. IT perlu menetapkan kriteria seleksi: pemahaman data dasar, komitmen waktu, dan kesiapan mengikuti pelatihan formal.

### Berapa lama pelatihan citizen developer?
Tidak ada durasi tunggal yang berlaku universal. Secara umum, pelatihan dasar platform — misalnya menggunakan learning journey SAP Build dari SAP Learning — dapat diselesaikan dalam beberapa hari secara modular (seringkali 3–5 hari tatap muka atau ekuivalennya dalam format online). Namun untuk membangun aplikasi pilot pertama yang siap produksi, biasanya dibutuhkan 4–8 minggu dari mulai training hingga aplikasi berjalan, tergantung kompleksitas use case.

### Bagaimana mengukur keberhasilan program citizen developer?
Gunakan empat metrik utama: (1) jumlah aplikasi aktif yang dibangun per kuartal, (2) pengurangan IT backlog — berapa permintaan yang sebelumnya antre kini diselesaikan citizen developer, (3) adoption rate — berapa persen pengguna target memakai aplikasi yang dibangun, dan (4) time-to-value — seberapa cepat use case pertama menghasilkan efisiensi nyata. Komunikasikan angka-angka ini ke manajemen secara rutin untuk menjaga dukungan eksekutif tetap hidup.

### Apa risiko terbesar program citizen developer?
Risiko terbesar bukan pada platformnya, melainkan pada tata kelola yang absen. Tanpa governance yang jelas, citizen development berubah menjadi shadow IT — aplikasi yang tidak terdokumentasi, tidak aman, dan sulit di-maintain. Risiko kedua adalah kehilangan momentum: program tanpa sponsor eksekutif aktif dan tanpa pengukuran ROI yang dikomunikasikan biasanya mati di tahun pertama. Platform enterprise seperti SAP Build menyediakan governance tools bawaan (role-based access, approval workflow) yang membantu mitigasi risiko ini.

### Apakah citizen developer menggantikan developer profesional?
Tidak. Citizen developer mengatasi backlog untuk aplikasi bisnis internal yang sederhana-hingga-menengah — otomatisasi proses, form digital, dashboard departemen. Developer profesional tetap dibutuhkan untuk integrasi sistem yang kompleks, custom logic tingkat lanjut, dan arsitektur platform itu sendiri. Gartner memperkirakan keduanya tumbuh bersamaan: 4:1 rasio pada 2026 tidak berarti kebutuhan developer profesional berkurang, melainkan permintaan aplikasi tumbuh lebih cepat dari kapasitas tim IT.

### Apakah perusahaan perlu IT governance khusus untuk low-code?
Ya — justru ini yang membedakan program citizen developer yang berhasil dari eksperimen yang berujung chaos. IT governance untuk low-code tidak harus rumit: cukup tiga hal di awal — (1) daftarkan siapa saja yang boleh membangun aplikasi dan di area apa, (2) tetapkan standar keamanan data (siapa boleh akses data apa), (3) buat proses review sebelum aplikasi dipublikasikan ke pengguna lain. Pendekatan "federated" — IT sebagai penjaga kebijakan, unit bisnis punya champion terdaftar — adalah titik mulai yang disarankan untuk enterprise.

---

## Data tables for the writer

### Model Governance Low-Code: Tiga Pendekatan

| Aspek | Centralized (IT-kontrol) | Federated (Hybrid — Rekomendasi) | Open/Desentralisasi |
|---|---|---|---|
| Siapa yang membangun | Hanya citizen developer terdaftar, disetujui IT | Unit bisnis dengan "champion" terdaftar; IT set kebijakan | Siapapun, minimal oversight |
| Kecepatan inovasi | Lambat — bottleneck di IT approval | Seimbang — bisnis bergerak, IT tetap mengawasi | Cepat tapi tidak terkontrol |
| Risiko shadow IT | Rendah | Rendah-menengah (dengan champion accountability) | Tinggi |
| Risiko keamanan data | Rendah | Rendah (karena RBAC dan review berjenjang) | Tinggi |
| Cocok untuk | Industri regulasi ketat (BFSI, pharma) | Enterprise umum Indonesia — titik mulai yang baik | Startup / proof-of-concept internal saja |
| Contoh platform support | SAP BTP: role-based access + approval workflow | SAP BTP: champion sebagai "team member" + governance dashboard | Platform tanpa enterprise governance |

### Checklist Kesiapan Sebelum Memulai Program Citizen Developer

| Kesiapan | Indikator Ya | Perlu Disiapkan Dulu |
|---|---|---|
| Platform | Sudah ada lisensi SAP Build / platform low-code enterprise | Evaluasi platform dulu |
| Sponsor eksekutif | CIO atau IT Director secara aktif mendukung program | Temukan dan konfirmasi sponsor |
| Use case nyata | Ada ≥1 proses manual yang sudah diidentifikasi oleh unit bisnis | Lakukan discovery workshop |
| Kandidat pilot | 5–10 orang dari unit bisnis yang antusias dan punya waktu | Rekrut dan seleksi |
| IT governance dasar | Ada kebijakan akses data dan proses review aplikasi | Buat sebelum training dimulai |
| Anggaran pelatihan | Ada alokasi untuk training (SAP Learning / vendor) | Rencanakan dalam budget IT |

---

## Edge cases & nuance

- **Citizen developer BUKAN semua karyawan**: Kesalahan umum adalah "melatih semua orang sekaligus". Program yang berhasil dimulai dengan 5–10 orang pilot yang dipilih secara selektif — orang yang antusias, punya use case nyata, dan cukup waktu. Scale setelah pilot berhasil.
- **Platform enterprise vs consumer low-code**: Ada perbedaan krusial antara platform low-code consumer (misalnya untuk personal productivity) dan enterprise (SAP Build, Microsoft Power Platform). Platform enterprise menyediakan koneksi ke sistem ERP, governance tools, dan audit log yang dibutuhkan untuk compliance — ini yang harus dibeli dan dikonfigurasi IT, bukan yang bisa diunduh sendiri oleh karyawan.
- **4–8 minggu untuk aplikasi pertama adalah estimasi optimistis**: Jika use case dipilih dengan baik (sederhana, data sudah tersedia, tidak membutuhkan integrasi baru), 4–8 minggu realistis. Jika use case melibatkan integrasi ke sistem lama, data yang tidak terstruktur, atau approval chain yang kompleks, bisa 3–4 bulan. Pilih use case pertama yang "quick win".
- **Governance tidak boleh terlalu ketat di awal**: Paradoks umum — perusahaan yang membuat governance terlalu ketat (setiap aplikasi perlu 5 level approval) akan kehilangan momentum. Mulai dengan kebijakan minimal yang cukup untuk keamanan dasar, lalu kencangkan seiring program tumbuh.
- **Data tentang "failure rate" program citizen developer**: Angka "60% gagal di tahun pertama" yang disebut brief belum dapat diverifikasi dari sumber spesifik dalam sesi ini — ⚠️ lihat flags.
- **Konteks Indonesia**: Tidak ditemukan data spesifik dari IDC Indonesia atau Gartner APAC tentang rata-rata waktu tunggu IT backlog di enterprise Indonesia dalam sesi ini. Gunakan konteks umum APAC/global.

---

## Flags (open factual risk)

- ⚠️ **Durasi training "3–5 hari"**: SAP Learning menyediakan learning journey modular untuk citizen developer di SAP Build, namun tidak ada angka resmi dari SAP tentang durasi program per-hari untuk batch enterprise. Estimasi "3–5 hari" berasal dari praktitioner/community. **Rekomendasi**: frasekan sebagai "dalam praktik implementasi, pelatihan dasar umumnya diselesaikan dalam beberapa hari" tanpa angka pasti, ATAU konfirmasi langsung dengan SAP Indonesia.

- ⚠️ **Angka "60% gagal di tahun pertama"**: Brief mencantumkan ini sebagai angle H2, namun tidak ada sumber spesifik yang terverifikasi (Gartner/Forrester/Panorama Consulting) untuk failure rate citizen developer programs. **Rekomendasi**: frasekan sebagai "banyak program citizen developer kehilangan momentum di tahun pertama karena..." dan dukung dengan alasan yang verified (tidak ada sponsor, use case salah pilih, dst) tanpa angka persentase spesifik — ATAU drop angkanya dan tulis "pengalaman praktitioner menunjukkan...".

- ⚠️ **Freudenberg Confactory — detail terbatas**: Case study ini disebutkan via cogentinfo.com (SAP partner blog, bukan sap.com langsung). Angka "30+ citizen developer" belum dikonfirmasi dari sumber SAP resmi. **Rekomendasi**: gunakan sebagai ilustrasi dengan atribusi "menurut studi kasus SAP Build dari Freudenberg Group" dan hindari klaim angka yang terlalu spesifik tanpa link ke sumber SAP primer.

- ⚠️ **Konteks IT backlog Indonesia**: Brief menyebut "hanya 12% departemen IT mampu memenuhi permintaan teknologi baru" sebagai angka. Angka ini tidak ditemukan dari sumber IDC Indonesia atau Gartner APAC spesifik dalam sesi ini — tampaknya berasal dari survei global. **Rekomendasi**: gunakan dengan atribusi "survei Gartner global" dan tambahkan konteks "kondisi serupa ditemukan di enterprise Asia Tenggara" — hindari menyebut angka ini sebagai data Indonesia spesifik.

---

## Definition snippet draft (40–60 words, Bahasa Indonesia)

> *Citizen developer* adalah karyawan non-programmer — biasanya dari unit bisnis seperti keuangan, operasional, atau SDM — yang membangun aplikasi internal menggunakan *low-code platform* seperti SAP Build. Berbeda dari *shadow IT*, citizen developer yang terstruktur bekerja dalam kerangka governance yang ditetapkan tim IT, sehingga aplikasi tetap aman, terdokumentasi, dan dapat diaudit.

*(Catatan: snippet ini langsung dari brief — sudah sesuai panjang 40–60 kata, gunakan as-is atau paraphrase tipis.)*

---

## Notes for image-planner

- **Konsep 1 (untuk H2 Langkah-langkah)**: Timeline horizontal 5 tahap program citizen developer — dari kiri ke kanan: (1) Pilih use case, (2) Rekrut pilot, (3) Training, (4) Setup governance, (5) Ukur ROI. Gaya korporat biru-putih, ikon per tahap, teks Bahasa Indonesia. Format landscape, cocok untuk infografis artikel.
- **Konsep 2 (untuk H2 Governance)**: Diagram lingkaran/hub governance model federated — IT di pusat sebagai "Policy Hub", unit bisnis (Finance, Operations, HR, Supply Chain) mengelilingi dengan panah dua arah ke IT, setiap unit bisnis punya label "Champion". Warna: biru gelap (IT core) + biru muda/abu (unit bisnis). Teks Bahasa Indonesia.
- **Konsep 3 (untuk H2 Mengapa gagal / opsional)**: Infografis 4 penyebab utama kegagalan program citizen developer — format 2x2 grid atau 4 ikon dengan label singkat: "Tidak ada sponsor", "Use case terlalu kompleks", "Governance berlebihan", "ROI tidak dikomunikasikan". Warna aksen merah/oranye untuk poin negatif, tipografi tegas.
