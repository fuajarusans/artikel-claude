---
brief_id: "sap-clean-core-05"
researcher_run_date: "2026-08-11"
sources_cited: 10
flags: 7
---

# Research Dossier: Tata Kelola Clean Core SAP: Cara "Stay Clean" Pasca Go-Live

## TL;DR for the writer

- **"Get clean, stay clean" adalah frasa resmi SAP**, bukan sekadar jargon integrator. SAP mendefinisikan strategi clean core sebagai gabungan aktivitas untuk *get clean* (mencapai core bersih) dan *stay clean* (mempertahankannya). Artikel ini fokus pada bagian kedua — mekanisme *stay clean* — yang paling jarang dibahas. (Sumber: SAP, "What is a clean core?".)
- Kunci "stay clean" bukan teknologi tunggal, melainkan **tata kelola**: siapa yang berwenang menyetujui kustomisasi, dengan kriteria apa, dan bagaimana jejaknya dicatat. Guardrail teknis (ABAP Cloud, ABAP Test Cockpit) memaksakan kebijakan itu; ia tidak menggantikannya.
- **Gerbang keputusan (bisa via konfigurasi standar? → bisa via ekstensi SAP BTP? → benar-benar wajib atau sekadar preferensi?) berasal dari integrator (Asar Digital, Mar 2026), BUKAN doktrin formal SAP.** Sajikan sebagai *praktik yang dianjurkan*, bukan aturan SAP. Ini adalah nuansa E-E-A-T yang penting — jangan salah atribusi.
- Guardrail teknis nyata yang bisa disebut dengan aman: **ABAP Cloud** (model pengembangan yang hanya mengizinkan released public API), **ABAP Test Cockpit (ATC)** dengan check variant kesiapan clean core, dan **Custom Code Migration app / custom-code inventory** sebagai sumber kebenaran objek kustom. Model klasifikasi **Level A–D** (pembaruan Agustus 2025) memberi kosakata untuk memutuskan "seberapa bersih" tiap objek.
- Bagian jujur/counter-conventional wajib ada: governance bisa berubah jadi birokrasi ("governance theater") yang memperlambat bisnis dan mendorong shadow IT. Solusinya adalah jalur pengecualian yang terdokumentasi dan bertenggat — bukan menghilangkan gerbang. JANGAN mengklaim angka/persentase apa pun tanpa sumber.

## Core facts (verified)

> **Claim**: "Get clean, stay clean" adalah terminologi resmi SAP untuk strategi clean core.
> **Number/specific**: SAP menyatakan strategi clean core "merangkum semua aktivitas yang diperlukan untuk *get clean* dan *stay clean*" — yakni mencapai dan mempertahankan core yang bersih; *stay clean* = menjaga sistem tetap bersih seiring ekstensi, integrasi, dan data baru ditambahkan.
> **Source**: SAP, "What is a clean core?", https://www.sap.com/resources/what-is-a-clean-core (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Prinsip inti clean core adalah menjaga core ERP sedekat mungkin dengan standar bawaan SAP; setiap modifikasi dibangun DI LUAR core memakai solusi ekstensibilitas.
> **Number/specific**: Tujuannya menjaga core tetap "clean, standard, dan upgrade-stable" sambil tetap memungkinkan diferensiasi bisnis lewat ekstensi.
> **Source**: SAP News, "How to Extend SAP S/4HANA Cloud the Right Way", 12 Agu 2025, https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: ABAP Cloud adalah model pengembangan yang menjaga upgrade-safety dengan hanya menggunakan API dan objek yang "released" (dirilis resmi).
> **Number/specific**: ABAP Cloud adalah subset ABAP yang dioptimalkan untuk cloud; memisahkan kode kustom dari kode SAP secara jelas dengan hanya memakai released API, memakai release contract framework + public API lifecycle yang menjamin upgrade-safe. SAP menyebutnya sebagai default development environment untuk clean core.
> **Source**: SAP Help Portal, "ABAP Cloud in a Nutshell" / "ABAP Cloud Development Model", https://help.sap.com/docs/abap-cloud/abap-cloud/abap-cloud-in-nutshell (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: SAP telah memperkenalkan model ekstensibilitas empat tingkat (Level A–D) yang menggantikan model 3-tier lama.
> **Number/specific**: Level A = ekstensi paling bersih (ABAP Cloud / SAP Build, hanya released public API dengan stability contract); Level B = memenuhi kriteria A + memakai classic API SAP (terdokumentasi, umumnya upgrade-stable); Level C = memakai objek internal SAP yang tidak memenuhi syarat B; Level D = TIDAK clean core (modifikasi, teknologi/objek yang tidak direkomendasikan).
> **Source**: SAP Community (blog resmi SAP), "ABAP Extensibility Guide – Clean Core for SAP S/4HANA Cloud – August 2025 Update", https://community.sap.com/t5/technology-blog-posts-by-sap/abap-extensibility-guide-clean-core-for-sap-s-4hana-cloud-august-2025/ba-p/14175399 (diakses 2026-08-11); dikonfirmasi silang oleh SAP News 12 Agu 2025.
> **Confidence**: high

> **Claim**: ABAP Test Cockpit (ATC) adalah alat kunci untuk quality gate / governance clean core di tingkat kode.
> **Number/specific**: SAP menyebut ATC sebagai "the key tool" untuk "detailed code-level governance". ATC menyediakan integrated quality checks + unit testing untuk menegakkan standar clean core sebelum kode masuk produksi.
> **Source**: SAP News, 12 Agu 2025, https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/; SAP Community, "ABAP test cockpit (ATC) recommendations for governance of clean core ABAP development", https://community.sap.com/t5/technology-blog-posts-by-sap/abap-test-cockpit-atc-recommendations-for-governance-of-clean-core-abap/ba-p/14186130 (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: ATC menyediakan check variant siap-pakai khusus kesiapan clean core.
> **Number/specific**: Untuk SAP S/4HANA 2023, tersedia check variant `ABAP_CLEAN_CORE_READINESS` di ATC (via SAP BTP ABAP environment) untuk memeriksa custom code lama; termasuk check "Usage of Released APIs" untuk menganalisis pemakaian released vs not-released API pada sistem ECC dan S/4HANA.
> **Source**: SAP GitHub, "abap-atc-cr-cv-s4hc — ABAP test cockpit cloud readiness check variants for SAP S/4HANA Cloud", https://github.com/SAP/abap-atc-cr-cv-s4hc (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: SAP Custom Code Migration app menjadi alat untuk menganalisis dan menginventarisasi objek kustom (basis "custom-code register").
> **Number/specific**: Custom Code Migration app menjalankan pemeriksaan S/4HANA atas custom code dan menghasilkan analisis rinci + inventarisasi objek. Ia menjadi fondasi teknis untuk "satu sumber kebenaran" objek kustom yang dipakai review board.
> **Source**: SAP GitHub / help.sap.com Custom Code Migration, https://github.com/SAP/abap-atc-cr-cv-s4hc (Analyze Custom Code / Custom Code Migration app) (diakses 2026-08-11)
> **Confidence**: medium (fungsi app terkonfirmasi; istilah "custom-code register" sendiri adalah konsep tata kelola, bukan nama produk SAP — lihat Flags)

> **Claim**: Gerbang keputusan tiga-langkah untuk setiap permintaan kustomisasi adalah praktik yang dianjurkan integrator, bukan aturan formal SAP.
> **Number/specific**: Urutannya: (1) Bisa dipenuhi lewat konfigurasi standar SAP? (2) Jika tidak, bisa lewat ekstensi SAP BTP? (3) Jika tetap tidak, apakah kebutuhan itu benar-benar wajib atau sekadar preferensi? Disebut sebagai "governance process with teeth".
> **Source**: Asar Digital (Sanjjeev Singh), "What 'Clean Core' Actually Means…", 9 Mar 2026, https://asardigital.com/what-clean-core-actually-means-and-why-its-the-most-important-decision-in-your-sap-cloud-erp-program/ (diakses 2026-08-11)
> **Confidence**: high (untuk keberadaan framing) — atribusi wajib ke integrator, bukan SAP

> **Claim**: Side-by-side extensibility di SAP BTP adalah jalur resmi "keluar dari core" ketika konfigurasi standar tidak cukup.
> **Number/specific**: Ekstensi kompleks di-host di SAP BTP agar terpisah/decoupled dari core ERP S/4HANA Cloud, memakai pro-code dan low-code (SAP Build); berjalan independen dari core.
> **Source**: SAP, "What is a clean core?", https://www.sap.com/resources/what-is-a-clean-core; SAP News 12 Agu 2025 (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Clean core memungkinkan adopsi update/patch lebih cepat tanpa merusak kustomisasi — inilah alasan bisnis menjaga governance.
> **Number/specific**: Dengan core yang bersih, perusahaan dapat mengadopsi update software dengan cepat tanpa khawatir merusak kustomisasi, sehingga fitur terbaru, patch keamanan, dan pembaruan kepatuhan regulasi tersedia segera.
> **Source**: SAP, "What is a clean core?", https://www.sap.com/resources/what-is-a-clean-core (diakses 2026-08-11)
> **Confidence**: high

> **Claim**: Mainstream maintenance SAP ECC (Business Suite 7 / ERP 6.0 EhP6–8) berakhir 2027, dengan extended maintenance opsional hingga 2030.
> **Number/specific**: Mainstream maintenance berakhir 31 Desember 2027; extended maintenance opsional 2028–2030 (31 Desember 2030) dengan premi +2% di atas basis maintenance. SAP menyatakan tenggat ini tidak berubah.
> **Source**: Strategi maintenance SAP; dikorroborasi Rimini Street ("No Extension to ECC 2027 Deadline") dan SEIDOR/Crowe, https://www.riministreet.com/blog/no-extension-to-ecc-support-2027-deadline/ (diakses 2026-08-11)
> **Confidence**: high (tanggal konsisten lintas sumber; historis pernah bergeser — lihat Flags)

> **Claim**: Enforcement clean core berbeda per edisi deployment — dipaksa sistem di Public Edition, bersifat rekomendasi di Private/on-premise.
> **Number/specific**: S/4HANA Cloud Public Edition (GROW) praktis memaksa clean core: hanya key-user + developer extensibility + side-by-side, tanpa classic ABAP / modifikasi core. Private Edition (RISE) dan on-premise masih memungkinkan classic ABAP (Level C/D) tetapi tidak disarankan; di sini clean core adalah disiplin/rekomendasi, bukan paksaan sistem.
> **Source**: SAP Community "ABAP Extensibility Guide – Clean Core (Aug 2025)"; SAP asset "Clean core extensibility in SAP S/4HANA Cloud Private Edition"; konsisten dengan research cache. (diakses 2026-08-11)
> **Confidence**: medium-high (prinsip terkonfirmasi; batasan spesifik per edisi bisa berubah — verifikasi ulang jika detail teknis dipakai)

> **Claim**: SAP menyediakan dashboard adopsi clean core dengan KPI di dalam metodologi RISE with SAP.
> **Number/specific**: RISE with SAP Methodology dashboard memberi "real-time insights into clean core adoption"; KPI mencakup Technical Debt Score dan Clean Core Share (dan turunannya).
> **Source**: SAP News, 12 Agu 2025, https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ (diakses 2026-08-11)
> **Confidence**: high (sebut ringan saja — pemantauan KPI adalah domain brief 04, bukan fokus artikel ini)

> **Claim**: "Stay clean" tidak bisa di-retrofit setelahnya; disiplin harus dibangun sejak awal dan dijaga terus-menerus.
> **Number/specific**: Governance bersifat proaktif — remediasi (get clean) mengidentifikasi objek kustom, membangun ulang ekstensi di BTP, dan menguji ulang proses; tanpa gerbang berkelanjutan, kustomisasi baru mengalir lagi tanpa saringan.
> **Source**: Asar Digital, 9 Mar 2026, https://asardigital.com/what-clean-core-actually-means-and-why-its-the-most-important-decision-in-your-sap-cloud-erp-program/ (diakses 2026-08-11)
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Prinsip "get clean, stay clean" | Frasa resmi SAP; strategi = mencapai + mempertahankan core bersih | H2 #1 (definisi) | — |
| Gerbang keputusan 3-langkah | Praktik integrator (Asar Digital), BUKAN aturan SAP — labeli sebagai anjuran | H2 #2, H2 #4 | ERP Strategy (merancang kebijakan) |
| ABAP Cloud (released public API) | Model dev default clean core; hanya released API/objek; upgrade-safe | H2 #3 | Enhancement / Implementation |
| ABAP Test Cockpit (ATC) + check variant `ABAP_CLEAN_CORE_READINESS` | Quality gate tingkat kode; check "Usage of Released APIs" | H2 #3, H2 #4 | Enhancement + AMS |
| Custom Code Migration app / custom-code inventory | Sumber kebenaran objek kustom; dasar register | H2 #3, H2 #4 | AMS (menegakkan pasca go-live) |
| Model Level A–D | Kosakata klasifikasi "seberapa bersih"; A=BTP/ABAP Cloud, D=modifikasi | H2 #3 (dukung tabel) | — |
| Side-by-side extensibility SAP BTP | Jalur resmi "keluar dari core" saat konfigurasi tak cukup | H2 #2, H2 #3 | Digital Platform (opsional) |
| **Soltius anchor utama** | ERP Strategy + Enhancement + AMS — merancang & menegakkan tata kelola | **Closing** | "SAP Platinum Partner via United VARs, Metrodata Group sejak 1998" |

Reminder: Soltius **implements/migrates/supports** teknologi ini — bukan membangunnya. Maks 2–3 self-mention (idealnya: 1 aside mid-artikel di H2 #5 + 1 closing CTA).

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP News — "How to Extend SAP S/4HANA Cloud the Right Way" (12 Agu 2025)** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *what it backs*: prinsip extend yang benar, peran ABAP Cloud + ATC sebagai governance kode, model Level A–D, dashboard adopsi clean core. **Sumber SAP-official terkuat untuk artikel ini — wajib dilink.**
2. **SAP — "What is a clean core?"** — https://www.sap.com/resources/what-is-a-clean-core — *what it backs*: definisi "get clean, stay clean" sebagai terminologi resmi SAP; side-by-side di BTP; manfaat upgrade cepat.
3. **SAP Community (blog resmi SAP) — "ABAP Extensibility Guide – Clean Core (Aug 2025 Update)"** — https://community.sap.com/t5/technology-blog-posts-by-sap/abap-extensibility-guide-clean-core-for-sap-s-4hana-cloud-august-2025/ba-p/14175399 — *what it backs*: definisi Level A–D dan aturan per edisi.
4. **SAP GitHub — abap-atc-cr-cv-s4hc** — https://github.com/SAP/abap-atc-cr-cv-s4hc — *what it backs*: check variant `ABAP_CLEAN_CORE_READINESS` + check "Usage of Released APIs" (bukti konkret quality gate).
5. **Asar Digital (Sanjjeev Singh, 9 Mar 2026)** — https://asardigital.com/what-clean-core-actually-means-and-why-its-the-most-important-decision-in-your-sap-cloud-erp-program/ — *what it backs*: gerbang keputusan 3-langkah, "governance with teeth". **Atribusikan sebagai perspektif integrator, bukan SAP.** (Sumber sekunder — dampingi dengan minimal satu sumber SAP primer.)

Prioritas link keluar: pakai #1 dan #2 (SAP official) sebagai sitasi utama; #5 hanya jika framing gerbang 3-langkah dipakai eksplisit, dengan atribusi.

## FAQ Q&As (5–8 drafted, Bahasa Indonesia)

### Bagaimana cara menjaga core SAP tetap bersih setelah go-live (stay clean)?
"Stay clean" ditegakkan lewat tata kelola, bukan sekali bersih-bersih. Kuncinya: gerbang persetujuan untuk setiap permintaan kustomisasi, guardrail teknis lewat ABAP Cloud (hanya released public API), quality gate ABAP Test Cockpit sebelum kode masuk produksi, dan custom-code inventory sebagai satu sumber kebenaran. SAP sendiri mendefinisikan strategi clean core sebagai aktivitas "get clean" dan "stay clean" — mencapai lalu mempertahankan core standar.

### Siapa yang seharusnya menyetujui permintaan kustomisasi SAP?
Keputusan tidak boleh berada di tangan satu developer. Praktik yang dianjurkan adalah review board (gabungan pemilik proses bisnis, arsitek SAP, dan IT) yang menilai tiap request dengan kriteria seragam. Praktik integrator menyarankan gerbang tiga langkah: bisa lewat konfigurasi standar? bisa lewat ekstensi SAP BTP? benar-benar wajib bagi bisnis, atau sekadar preferensi? Ini adalah anjuran tata kelola, bukan aturan formal SAP.

### Apa itu custom code register (inventaris kode kustom)?
Custom-code register adalah daftar terpusat seluruh objek kustom di sistem SAP — pemilik, alasan bisnis, level clean core (A–D), dan status. Ia menjadi satu sumber kebenaran untuk tinjauan berkala, keputusan retirement, dan audit. Secara teknis, inventaris ini dibangun dari SAP Custom Code Migration app dan analisis ABAP Test Cockpit, bukan dari daftar manual yang cepat usang.

### Apa bedanya "get clean" dan "stay clean"?
Keduanya adalah dua bagian dari satu strategi resmi SAP. "Get clean" adalah kerja remediasi sekali besar: mengidentifikasi dan membersihkan kustomisasi lama (Z-code), memindahkannya ke ekstensi modern. "Stay clean" adalah disiplin berkelanjutan yang mencegah core kotor lagi: gerbang persetujuan, guardrail ABAP Cloud, dan quality gate untuk setiap kustomisasi baru. Banyak proyek berhasil "get clean" lalu gagal "stay clean".

### Bagaimana ABAP Cloud membantu menjaga clean core?
ABAP Cloud adalah model pengembangan yang hanya mengizinkan penggunaan released public API dan objek yang dirilis resmi SAP, dengan release contract yang menjamin upgrade-safety. Karena kode kustom tidak boleh menyentuh objek internal core, ekstensi tetap aman saat SAP merilis update. SAP menetapkannya sebagai lingkungan pengembangan default untuk clean core, dan ATC memverifikasi kepatuhannya secara otomatis.

### Apakah tata kelola clean core juga perlu untuk SAP on-premise?
Prinsipnya ya, tetapi cara penegakannya berbeda. Di S/4HANA Cloud Public Edition, sistem praktis memaksa clean core (tanpa classic ABAP / modifikasi core). Di Private Edition (RISE) dan on-premise, classic ABAP masih mungkin secara teknis, sehingga clean core lebih bergantung pada disiplin tata kelola — kebijakan, gerbang persetujuan, dan check ATC — ketimbang paksaan sistem. Justru di sinilah governance formal paling menentukan.

### Bagaimana menangani permintaan kustomisasi mendesak tanpa merusak clean core?
Sediakan jalur pengecualian yang terkontrol, bukan pintu belakang. Permintaan mendesak boleh melewati jalur cepat, tetapi dengan syarat: utang teknis dicatat di custom-code register, diberi tenggat remediasi, dan ditinjau di siklus berikutnya. Tanpa jalur pengecualian resmi, tekanan bisnis akan mendorong shadow IT — persis yang ingin dicegah clean core. Governance yang baik menyeimbangkan kecepatan dan kebersihan.

### Apa itu quality gate ABAP Test Cockpit (ATC) dalam konteks clean core?
ATC adalah alat pemeriksaan kualitas kode ABAP yang berjalan sebelum kode masuk produksi. Untuk clean core, tersedia check variant `ABAP_CLEAN_CORE_READINESS` dan check "Usage of Released APIs" yang mendeteksi apakah kode memakai API yang dirilis resmi atau menyentuh objek internal. Menjadikan ATC sebagai gerbang wajib di pipeline memastikan kebijakan clean core benar-benar ditegakkan, bukan sekadar tertulis di dokumen.

## Data tables for the writer

### Tabel 1 — Alur permintaan kustomisasi: dari request ke keputusan (untuk H2 #4)
| Langkah | Aktivitas | Siapa yang memutuskan | Output/dokumentasi |
|---|---|---|---|
| 1. Intake | Permintaan kustomisasi diajukan dengan justifikasi bisnis | Pemilik proses bisnis (pengaju) | Tiket/permintaan tercatat |
| 2. Gerbang Q1 | Bisa dipenuhi lewat konfigurasi standar SAP? | Konsultan fungsional / arsitek | Jika ya → konfigurasi, selesai |
| 3. Gerbang Q2 | Jika tidak: bisa lewat ekstensi SAP BTP / key-user? | Arsitek SAP / review board | Jika ya → ekstensi side-by-side / in-app |
| 4. Gerbang Q3 | Jika tidak: benar-benar wajib atau sekadar preferensi? | Review board (bisnis + IT) | Tolak preferensi; setujui yang wajib |
| 5. Guardrail teknis | Kode dikembangkan dengan ABAP Cloud (released API) | Developer | Ekstensi Level A/B |
| 6. Quality gate | ATC check (`ABAP_CLEAN_CORE_READINESS`, Usage of Released APIs) | Otomatis di pipeline | Lolos → produksi; gagal → perbaiki |
| 7. Registrasi | Objek dicatat di custom-code register/inventory | AMS / CoE | Register diperbarui |
| 8. Tinjauan berkala | Review inventaris: retirement objek tak terpakai | Review board | Backlog remediasi |

> Catatan penulis: gerbang Q1–Q3 (langkah 2–4) adalah praktik yang **dianjurkan** (sumber: Asar Digital), bukan prosedur resmi SAP. Guardrail teknis (langkah 5–6) dan tooling (ATC, Custom Code Migration app) adalah kapabilitas SAP yang terverifikasi.

### Tabel 2 — Level A–D clean core (untuk H2 #3, versi ringkas)
| Level | Deskripsi singkat | Status clean core |
|---|---|---|
| **A** | ABAP Cloud / SAP Build (BTP), hanya released public API + stability contract | Paling bersih (gold standard) |
| **B** | Memenuhi A + memakai classic API SAP yang terdokumentasi & umumnya upgrade-stable | Compliant |
| **C** | Memakai objek internal SAP yang tidak memenuhi syarat B | Bermasalah — perlu remediasi |
| **D** | Modifikasi core / objek & teknologi yang tidak direkomendasikan | Bukan clean core |

> Sumber: SAP "ABAP Extensibility Guide – Clean Core (Aug 2025)". Model 4-level ini menggantikan model 3-tier lama.

## Edge cases & nuance

- **Governance ≠ birokrasi.** Gerbang persetujuan yang terlalu ketat/lambat justru mendorong "shadow IT" — tim bisnis mencari jalan pintas di luar sistem. Artikel harus jujur: tujuan governance adalah *saringan cepat*, bukan komite yang rapat berminggu-minggu. Ukuran keberhasilan adalah kecepatan keputusan yang konsisten, bukan jumlah request yang ditolak.
- **"Custom-code register" bukan satu produk SAP.** Ini konsep tata kelola. Realisasinya memakai kombinasi SAP Custom Code Migration app, Custom Code inventory, dan dashboard Cloud ALM. Jangan tulis seolah "Custom Code Register" adalah nama modul SAP resmi.
- **Enforcement bergantung edisi.** Di Public Edition, banyak guardrail dipaksa sistem, sehingga governance manusia lebih ringan. Di Private Edition/on-premise, kebijakan manusia justru yang paling menentukan karena classic ABAP masih terbuka. Pembaca on-premise butuh penekanan ekstra pada disiplin.
- **Jalur pengecualian wajib ada.** Tata kelola tanpa "escape hatch" resmi akan gagal saat tekanan bisnis nyata. Yang benar: pengecualian diberi tenggat + dicatat sebagai utang teknis, bukan dilupakan.
- **Gerbang 3-pertanyaan bukan doktrin SAP.** SAP menyediakan prinsip (extend outside core, pakai released API) dan tooling (ABAP Cloud, ATC). Formulasi "3 pertanyaan" adalah cara integrator mengoperasionalkannya. Penulis harus menjaga garis ini agar E-E-A-T tidak jatuh.
- **On-stack vs side-by-side.** ABAP Cloud mendukung keduanya (on-stack di dalam S/4HANA Cloud, dan side-by-side di BTP). Jadi "clean core" tidak berarti "semua di BTP" — ekstensi on-stack yang memakai released API pun tetap Level A.

## Flags (open factual risk)

- ⚠️ **Gerbang tiga pertanyaan (konfigurasi standar? → BTP? → wajib?)**: berasal dari integrator (Asar Digital, Mar 2026), BUKAN aturan formal SAP → **rekomendasi: sajikan sebagai "praktik yang dianjurkan/kerangka yang banyak dipakai", jangan tulis "menurut SAP" atau "aturan SAP".**
- ⚠️ **"Custom-code register"**: konsep tata kelola, bukan nama produk SAP. Nama SAP yang benar: SAP Custom Code Migration app, Custom Code inventory, Cloud ALM → **rekomendasi: sebut "register/inventaris (dibangun dari Custom Code Migration app)" agar tidak menyiratkan produk bernama demikian.**
- ⚠️ **Tenggat ECC 2027/2030**: konsisten lintas sumber dan SAP menyatakan tidak berubah, tetapi historis pernah bergeser → **rekomendasi: sebut sebagai tenggat resmi SAP saat ini; boleh tambah "opsi extended hingga 2030" — jangan jadikan klaim mutlak tanpa kata "saat ini".**
- ⚠️ **Batasan enforcement per edisi (Public memaksa, Private/on-prem rekomendasi)**: prinsip benar, tetapi detail teknis batasan per edisi bisa berubah antar rilis → **rekomendasi: nyatakan pada level prinsip; hindari klaim teknis spesifik ("fitur X dilarang di edisi Y") tanpa verifikasi rilis terbaru.**
- ⚠️ **KPI dashboard (Technical Debt Score, Clean Core Share)**: nyata (SAP RISE dashboard) TAPI ini domain brief 04 (monitoring) → **rekomendasi: sebut ringan sebagai satu alat penegakan; jangan kembangkan jadi bagian besar agar tidak tumpang tindih dengan artikel KPI.**
- ⚠️ **Angka/persentase kuantitatif** (mis. "% proyek gagal stay clean", "X% biaya upgrade turun"): TIDAK ADA sumber terverifikasi → **rekomendasi: JANGAN mengarang angka; pakai bahasa kualitatif ("banyak", "sering", "kerap") tanpa persentase palsu.**
- ⚠️ **Level A–D naming**: model ini relatif baru (pembaruan Agu 2025, menggantikan 3-tier) → **rekomendasi: sebut sebagai model terkini SAP; jika menjelaskan detail tiap level, kutip Level A/B/C/D persis seperti definisi SAP di dossier, jangan mengarang kriteria tambahan.**

## Definition snippet draft (40–60 words)

> Tata kelola clean core adalah kerangka kebijakan dan mekanisme persetujuan yang menjaga core SAP S/4HANA tetap standar dan upgrade-safe setelah go-live. Ia menetapkan siapa yang boleh menyetujui kustomisasi dan dengan kriteria apa, lalu menegakkannya lewat guardrail teknis seperti ABAP Cloud dan quality gate ABAP Test Cockpit — mewujudkan prinsip resmi SAP "get clean, stay clean".
