---
brief_id: "low-code-platform-02"
researcher_run_date: "2026-10-07"
sources_cited: 9
flags: 6
---

# Research Dossier: Low-Code Bertenaga AI — Bagaimana Joule Mengubah Cara Membangun Aplikasi SAP

## TL;DR for the writer

- **Ada tiga "wajah" AI yang harus dibedakan dengan tegas**, karena pembaca sering mencampuradukkannya: **Joule** (copilot/asisten GenAI SAP yang menjawab & membantu *pengguna* lintas SAP), **Joule for developers / SAP Build Code** (AI yang membantu *developer* menulis & menguji kode), dan **Joule Studio + agent builder** (alat *no-code* untuk membuat *AI agent* kustom). Artikel yang gagal memisahkan ini akan terasa seperti slide marketing — justru pain yang dikeluhkan pembaca.
- **Status ketersediaan berbeda-beda — jangan pukul rata.** SAP Build Code = **GA** (optimasi Java/JavaScript, interoperasi dengan ABAP Cloud, code generation via Joule). Joule for developers diumumkan **18 Maret 2025**; kapabilitas di SAP Build Code & ABAP Cloud sudah GA, lalu diperluas ke Build Process Automation & Build Apps. **Custom AI agent** awalnya *roadmap* (Maret 2025), kini tersedia lewat **agent builder di Joule Studio** sebagai fitur promo gratis hingga **Desember 2026** (setelah itu Premium AI). Tulis status apa adanya.
- **Angka Gartner "70% aplikasi baru pakai low-code" horizon-nya 2025, bukan 2026** (naik dari <25% di 2020). Brief menulis "2026" — koreksi ke "2025" dan atribusikan ke Gartner, atau ganti dengan framing pertumbuhan terbaru (pasar diproyeksikan ~USD 58,2 miliar pada 2029, CAGR ~14,1%; agentic AI sebagai pendorong). Lihat Flags.
- **Benang merah ke Clean Core wajib ditarik**: kode/ekstensi hasil AI tetap harus patuh **ABAP Cloud** (public API, extensibility resmi) dan diletakkan **di luar inti** agar S/4HANA tetap aman di-upgrade. Joule for developers di-grounding ke ABAP LLM yang memang diarahkan ke praktik clean core — tapi output tetap wajib direview manusia.
- **Honest-hedging adalah fitur, bukan bug** untuk angle ini. Bagian "yang AI belum bisa" (halusinasi, perlu verifikasi, tata kelola) adalah trust-builder utama dan tempat paling pas untuk satu aside Soltius soal pendampingan review.

## Core facts (verified)

> **Claim**: Joule adalah copilot/asisten generative-AI milik SAP yang tertanam lintas portofolio SAP (SAP Business Suite), termasuk ke dalam SAP Build.
> **Number/specific**: Joule menggunakan LLM yang dipurpose-build untuk workload SAP (mis. "ABAP LLM") untuk prediksi & penjelasan kode; hadir sebagai lapisan asisten di berbagai produk SAP, bukan produk berdiri sendiri.
> **Source**: news.sap.com — "Joule for developers" (18 Mar 2025); Constellation Research, "SAP Build Code adds generative AI tools…"
> **Confidence**: high

> **Claim**: SAP Build Code adalah lingkungan pengembangan dengan GenAI, dioptimalkan untuk Java dan JavaScript, yang berinteroperasi dengan pengembangan ABAP Cloud.
> **Number/specific**: Code generation ditenagai Joule; mendukung pro-code sekaligus berpadu dengan low-code; ditujukan mempercepat ekstensi SAP S/4HANA dan aplikasi enterprise.
> **Source**: Constellation Research (constellationr.com), liputan GA SAP Build Code; news.sap.com.
> **Confidence**: high

> **Claim**: SAP Build Code sudah berstatus Generally Available (GA).
> **Number/specific**: Diumumkan di SAP TechEd 2023; menjadi GA pada 2024. (Bukan sekadar roadmap.)
> **Source**: Constellation Research; SAP (news.sap.com / community.sap.com topic "SAP Build Code").
> **Confidence**: high

> **Claim**: SAP mengumumkan "Joule for developers" dengan kapabilitas AI untuk developer.
> **Number/specific**: Tanggal pengumuman **18 Maret 2025**. Kemampuan yang dirinci SAP: "generate code, UI, data models, and sample data" serta "refactor code, create unit tests, and generate code explanations".
> **Source**: news.sap.com/2025/03/joule-for-developers-ai-powered-capabilities/ (diakses 2026-10-07).
> **Confidence**: high

> **Claim**: Pada pengumuman Maret 2025, kapabilitas Joule untuk developer di SAP Build Code dan ABAP Cloud sudah GA, lalu diperluas ke SAP Build Process Automation dan SAP Build Apps.
> **Number/specific**: GA: SAP Build Code + ABAP Cloud (Joule). Baru diumumkan Mar 2025: Joule untuk Build Process Automation & Build Apps.
> **Source**: news.sap.com/2025/03/joule-for-developers-… (diakses 2026-10-07).
> **Confidence**: high

> **Claim**: "Custom AI agents" bukan kapabilitas yang sudah tersedia pada Maret 2025 — saat itu masih termasuk roadmap/rencana ke depan.
> **Number/specific**: Daftar roadmap Mar 2025 mencakup "optimizing business logic, automating documentation, enhancing data protection", "custom AI agents", dan alat migrasi ke S/4HANA Cloud.
> **Source**: news.sap.com/2025/03/joule-for-developers-… (diakses 2026-10-07).
> **Confidence**: high

> **Claim**: Custom AI agent kini dapat dibuat lewat **agent builder di Joule Studio** — alat no-code di dalam SAP Build untuk membangun AI agent kustom yang dapat merencanakan, bernalar, dan menyelesaikan masalah lintas sistem SAP maupun non-SAP.
> **Number/specific**: Ditujukan untuk citizen developer & pengguna IT; guided workflow yang di-grounding ke proses bisnis & data SAP.
> **Source**: sap.com (asset detail 2025/10, "Build custom agents using agent builder in Joule Studio"); sap.com/products/artificial-intelligence/joule-studio.html; CX Today.
> **Confidence**: high

> **Claim**: Agent builder di Joule Studio berstatus promo gratis untuk periode terbatas, lalu menjadi fitur berbayar.
> **Number/specific**: Gratis (free-of-charge promo) hingga **Desember 2026**, setelah itu menjadi **Premium AI feature**; selain itu pelanggan SAP Build dapat menjalankan custom Joule agent tanpa biaya selama **Q1 2026** (periode terbatas).
> **Source**: sap.com (Joule Studio / agent builder pages, diringkas via WebSearch 2026-10-07).
> **Confidence**: medium (detail harga/periodisasi promo SAP bisa berubah — verifikasi ulang sebelum angka dipakai keras).

> **Claim**: Joule menggunakan large language model yang khusus diarahkan untuk konteks SAP, termasuk model khusus ABAP, untuk code prediction & explanation.
> **Number/specific**: "purpose-built LLMs … such as an ABAP LLM".
> **Source**: Constellation Research; news.sap.com.
> **Confidence**: high

> **Claim**: SAP memposisikan output developer GenAI-nya agar selaras dengan ABAP Cloud dan praktik/standar SAP (keamanan + best practice), bukan modifikasi inti.
> **Number/specific**: SAP Build Code "interoperate with ABAP Cloud development" dan menekankan "adherence to SAP's best practices"; ini sejalan dengan prinsip clean core (ekstensi via API resmi, di luar inti).
> **Source**: Constellation Research; news.sap.com; (prinsip clean core) product_matrix.md baris SAP Clean Core.
> **Confidence**: high (interoperasi + best practice), medium (klaim "AI otomatis menjamin clean core" — lihat Flags).

> **Claim**: SAP Build adalah payung low-code/no-code SAP di atas SAP BTP, terdiri dari SAP Build Apps, SAP Build Process Automation, SAP Build Work Zone, dan SAP Build Code.
> **Number/specific**: Joule Studio & agent builder berada di dalam keluarga SAP Build; SAP Build Code adalah komponen pro-code+AI dalam keluarga yang sama.
> **Source**: sap.com/products/technology-platform/build.html; research cache low-code-platform.research.json (2026-10-07).
> **Confidence**: high

> **Claim**: Developer dapat memakai kapabilitas Joule for developers tanpa biaya untuk periode terbatas sejak pengumuman.
> **Number/specific**: SAP menyatakan developer bisa "take advantage of our Joule for developer capabilities today at no charge for a limited time" (Mar 2025).
> **Source**: news.sap.com/2025/03/joule-for-developers-… (diakses 2026-10-07).
> **Confidence**: high

> **Claim**: Gartner memproyeksikan 70% aplikasi baru yang dikembangkan perusahaan akan memakai teknologi low-code/no-code pada 2025, naik dari kurang dari 25% pada 2020.
> **Number/specific**: 70% (horizon **2025**) vs <25% (2020). Horizon aslinya **2025**, bukan 2026 (lihat Flags).
> **Source**: Gartner (forecast low-code/no-code, dikutip luas); konfirmasi angka via WebSearch 2026-10-07.
> **Confidence**: medium (angka benar & milik Gartner, namun URL press-release primer tidak berhasil dipinpoint pada run ini; atribusikan ke "Gartner" dan gunakan horizon 2025).

> **Claim**: Pasar teknologi pengembangan low-code terus tumbuh double-digit dengan agentic AI sebagai pendorong utama.
> **Number/specific**: Gartner memproyeksikan pasar mencapai sekitar USD 58,2 miliar pada 2029 dengan CAGR ~14,1%; pendorong: agentic AI, citizen development, operational excellence.
> **Source**: Gartner, "Forecast Analysis: Low-Code Development Technologies, Worldwide" (gartner.com/en/documents/7146430).
> **Confidence**: medium (ringkasan dari daftar dokumen Gartner; dokumen berbayar — atribusikan sebagai proyeksi Gartner).

> **Claim**: AI generatif/agentik menjadi tren strategis software engineering yang diakui analis untuk 2025 dan sesudahnya.
> **Number/specific**: Gartner menerbitkan "Top Strategic Trends in Software Engineering for 2025 and Beyond" (1 Juli 2025), menempatkan GenAI/agentic AI pada platform pengembang sebagai tren inti.
> **Source**: gartner.com/en/newsroom/press-releases/2025-07-01-gartner-identifies-the-top-strategic-trends-in-software-engineering-for-2025-and-beyond.
> **Confidence**: high

> **Claim (Soltius)**: Soltius adalah SAP Platinum Certified Partner (melalui keanggotaan United VARs) dan mitra implementasi SAP terkemuka di Indonesia — berperan mengimplementasikan/mendampingi, bukan membuat, teknologi AI SAP.
> **Number/specific**: Berdiri 1998; bagian dari Metrodata Group (akuisisi 2008); 200+ konsultan; 120+ klien; kontributor pendapatan terbesar bagi SAP Indonesia (sejak 2015).
> **Source**: knowledge_base/company_profile.md (pre-approved).
> **Confidence**: high

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **SAP Joule** (copilot GenAI lintas SAP, termasuk SAP Build) | Asisten GenAI; menjawab/membantu pengguna; ditenagai LLM khusus SAP | H2 #1, #2 | — (edukasi vendor-neutral) |
| **Joule for developers / SAP Build Code** (GenAI untuk developer, Java/JavaScript, interoperasi ABAP Cloud) | SAP Build Code = GA; generate/refactor kode, unit test; ABAP LLM | H2 #3 (titik AI #3) | — |
| **Joule Studio + agent builder** (no-code, buat AI agent kustom) | Agent lintas SAP/non-SAP; promo gratis s.d. Des 2026 lalu Premium | H2 #3 (titik AI #4), #4 | — |
| **ABAP Cloud / Clean Core** (ekstensi di luar inti, upgrade-safe) | Output AI harus patuh ABAP Cloud & tetap di luar inti | H2 #5 + internal link Clean Core | — |
| **Soltius: Implementation + ERP Strategy** (SAP Platinum via United VARs) | Mendampingi adopsi AI SAP secara bertanggung jawab, dengan tata kelola & clean core | Closing CTA (+ maks. 1 aside di H2 #5) | **Implementation + ERP Strategy; SAP Platinum Partner via United VARs** |

Reminder: Soltius **mengimplementasikan/mendampingi/mendukung** teknologi ini — **tidak membuat** AI SAP. Maksimal **2–3** self-mention Soltius (idealnya: 1 closing + 1 aside opsional di bagian "yang AI belum bisa").

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP News — "Joule for developers" (18 Mar 2025)** — https://news.sap.com/2025/03/joule-for-developers-ai-powered-capabilities/ — *what it backs*: tanggal pengumuman, daftar kapabilitas (generate/refactor/unit test), status GA vs roadmap, free-for-limited-time.
2. **Constellation Research — "SAP Build Code adds generative AI tools, bridges to process data, Java, JavaScript"** — https://www.constellationr.com/insights/news/sap-build-code-adds-generative-ai-tools-bridges-process-data-java-javascript — *what it backs*: GA SAP Build Code, optimasi Java/JavaScript, interoperasi ABAP Cloud, ABAP LLM.
3. **SAP — Joule Studio / agent builder** — https://www.sap.com/products/artificial-intelligence/joule-studio.html — *what it backs*: agent builder no-code untuk AI agent kustom lintas SAP/non-SAP (untuk pengguna bisnis & IT).
4. **Gartner — "Top Strategic Trends in Software Engineering for 2025 and Beyond" (1 Jul 2025)** — https://www.gartner.com/en/newsroom/press-releases/2025-07-01-gartner-identifies-the-top-strategic-trends-in-software-engineering-for-2025-and-beyond — *what it backs*: GenAI/agentic AI sebagai tren inti rekayasa perangkat lunak (konteks "mengapa ini bukan sekadar hype").
5. **Gartner — "Forecast Analysis: Low-Code Development Technologies, Worldwide"** — https://www.gartner.com/en/documents/7146430 — *what it backs*: pertumbuhan pasar low-code (~USD 58,2 miliar pada 2029, CAGR ~14,1%; agentic AI sebagai pendorong).

Priority used: SAP official > Gartner > reputable analyst (Constellation Research). **Writer: tautkan minimal 2 (disarankan SAP News + salah satu Gartner).**

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu SAP Joule?
SAP Joule adalah copilot atau asisten generative-AI milik SAP yang tertanam lintas portofolio produk SAP, termasuk SAP Build. Alih-alih produk berdiri sendiri, Joule hadir sebagai lapisan percakapan yang membantu pengguna dan developer—menjawab pertanyaan, menyarankan tindakan, hingga membantu menulis kode—dengan model bahasa yang dikhususkan untuk konteks dan data SAP.

### Apa bedanya Joule dan SAP Build Code?
Keduanya memakai AI yang sama (Joule) tetapi untuk peran berbeda. Joule secara umum membantu pengguna bisnis lintas aplikasi SAP. SAP Build Code adalah lingkungan pengembangan GenAI khusus developer—dioptimalkan untuk Java dan JavaScript serta berinteroperasi dengan ABAP Cloud—tempat Joule men-generate, merefaktor, dan menguji kode. Singkatnya: Joule = asisten; SAP Build Code = tempat kerja developer berbantuan Joule.

### Apakah AI akan menggantikan developer?
Tidak menghapus, tetapi menggeser peran. Berdasarkan kapabilitas yang SAP rilis—generate kode, buat unit test, jelaskan kode—AI mempercepat pekerjaan rutin, sehingga developer bergeser dari "menulis setiap baris" ke "mengarahkan, memvalidasi, dan mengintegrasikan". Keputusan arsitektur, review keamanan, dan kepatuhan clean core tetap butuh manusia. Output AI adalah draf cepat, bukan kode final tanpa pengawasan.

### Apakah low-code bertenaga AI aman untuk data perusahaan?
Bisa aman jika tata kelolanya benar. SAP menekankan output GenAI-nya mengikuti best practice dan berinteroperasi dengan ABAP Cloud, tetapi keamanan tetap bergantung pada kontrol organisasi: siapa boleh membangun apa, review sebelum rilis, dan pemisahan environment. Risiko nyata muncul saat kode atau otomatisasi hasil AI dipakai langsung tanpa verifikasi—maka tata kelola dan review manusia adalah syarat, bukan opsi.

### Apakah citizen developer bisa memanfaatkan AI?
Bisa. Agent builder di Joule Studio adalah alat no-code yang memang ditujukan bagi citizen developer (dan tim IT) untuk membangun AI agent kustom melalui guided workflow yang di-grounding ke proses bisnis dan data SAP. Namun kewenangannya tetap harus dibatasi tata kelola: agent yang mengambil tindakan lintas sistem perlu persetujuan, batas akses, dan pemantauan agar tidak menjadi shadow IT baru.

### Apakah kode hasil AI patuh clean core?
Tidak otomatis—tetapi diarahkan ke sana. SAP Build Code berinteroperasi dengan ABAP Cloud dan Joule memakai model yang diarahkan ke praktik SAP, sehingga output cenderung memakai API resmi dan ekstensi di luar inti. Meski begitu, kepatuhan clean core tetap tanggung jawab tim: setiap ekstensi hasil AI harus direview agar benar-benar side-by-side/ABAP Cloud dan tidak memodifikasi inti S/4HANA.

### Apa itu AI agent dalam konteks SAP Build?
AI agent adalah program berbasis AI yang bisa merencanakan, bernalar, dan menjalankan tugas multi-langkah secara relatif otonom—bukan sekadar menjawab satu pertanyaan. Di SAP Build, agent dibuat lewat agent builder di Joule Studio dan dapat bekerja lintas sistem SAP maupun non-SAP. Saat ini tersedia sebagai promo gratis hingga Desember 2026, setelah itu menjadi fitur Premium AI.

## Data tables for the writer

### Tabel 1 — Tiga "wajah" AI di SAP Build (bedakan untuk pembaca)
| Lapisan | Untuk siapa | Fungsi utama | Mode |
|---|---|---|---|
| **Joule (copilot)** | Pengguna bisnis & umum | Tanya-jawab, saran tindakan, bantu navigasi lintas aplikasi SAP | Asisten percakapan |
| **Joule for developers / SAP Build Code** | Developer (pro-code) | Generate/refactor kode, buat unit test, jelaskan kode (Java/JS, interoperasi ABAP Cloud) | Berbantuan AI, tetap pro-code |
| **Joule Studio + agent builder** | Citizen developer & IT | Bangun AI agent kustom yang merencanakan & bertindak lintas sistem | No-code / agentic |

### Tabel 2 — Empat titik tempat AI menempel pada rantai low-code SAP (untuk H2 #3)
| # | Titik | Komponen SAP | Apa yang AI tambahkan |
|---|---|---|---|
| 1 | Membangun UI/aplikasi | SAP Build Apps | Bantuan GenAI mempercepat pembuatan aplikasi visual |
| 2 | Merancang workflow/otomatisasi | SAP Build Process Automation | Joule membantu menyusun proses & otomatisasi (RPA, orkestrasi) |
| 3 | Menulis & menguji kode | SAP Build Code | Generate/refactor kode + unit test, interoperasi ABAP Cloud |
| 4 | Menjalankan tugas otonom | Joule Studio (agent builder) | Membuat AI agent kustom lintas sistem SAP/non-SAP |

### Tabel 3 — Status ketersediaan (jangan sajikan roadmap sebagai fitur siap pakai)
| Kapabilitas | Status (per riset 2026-10-07) | Catatan |
|---|---|---|
| SAP Build Code (Java/JS, Joule code gen) | **GA** | Diumumkan TechEd 2023, GA 2024 |
| Joule untuk ABAP Cloud (code assist) | **GA** | Dikonfirmasi pada pengumuman Mar 2025 |
| Joule untuk Build Process Automation & Build Apps | **Tersedia** (diumumkan Mar 2025) | Perluasan dari GA sebelumnya |
| Custom AI agent via agent builder (Joule Studio) | **Tersedia sebagai promo** | Gratis s.d. Des 2026, lalu Premium AI; free run Q1 2026 |
| "Custom AI agents" pada Maret 2025 | Dulu **roadmap** | Jangan dikutip sebagai "sudah ada sejak Mar 2025" |

## Edge cases & nuance

- **"AI" ≠ "low-code".** AI tidak menggantikan low-code; ia menambah lapisan di atasnya. Gartner sendiri menilai AI *tidak menghilangkan* kebutuhan platform low-code (judul risetnya: "Why AI Won't Replace the Need for Low-Code Application Platforms"). Framing jujur: AI = akselerator di dalam low-code, bukan pengganti.
- **GA bergerak cepat.** Apa yang "roadmap" pada Maret 2025 (custom agents) sudah menjadi fitur yang bisa dipakai pada 2026. Sebaliknya, fitur promo (agent builder gratis) akan berubah jadi berbayar. Hindari kalimat absolut tanpa tanggal; selalu beri konteks waktu.
- **Clean core bukan jaminan otomatis.** "Kode dibuat AI di SAP Build Code" ≠ "otomatis clean core". Interoperasi ABAP Cloud memudahkan, tetapi developer tetap bisa salah menaruh logika. Review tetap wajib.
- **Agent otonom = permukaan risiko baru.** Agent yang bertindak lintas sistem memperbesar dampak jika salah. Tata kelola (hak akses, approval, audit) jadi makin penting—bukan makin longgar karena "AI yang kerja".
- **Hemat klaim angka.** Satu-satunya angka adopsi yang kuat adalah Gartner (dan horizon-nya 2025). Jangan menumpuk statistik pasar dari sumber sekunder (Kissflow/ToolJet dll.) sebagai fakta keras.

## Flags (open factual risk)

- ⚠️ **Angka "70% aplikasi baru low-code" — horizon 2025, bukan 2026.** Brief (E-E-A-T notes) menulis "pada 2026". Sumber Gartner yang terverifikasi menyebut **2025** (naik dari <25% di 2020). → **Rekomendasi**: koreksi ke "2025" dan atribusikan "menurut Gartner", atau gunakan proyeksi pertumbuhan terbaru (pasar ~USD 58,2 miliar pada 2029, CAGR ~14,1%). Jangan tulis "2026".
- ⚠️ **URL press-release primer Gartner untuk angka 70% tidak berhasil dipinpoint** pada run ini (dokumen Gartner berbayar; angka berasal dari 2021 dan dikutip luas). → **Rekomendasi**: cukup atribusikan "Gartner" tanpa menautkan URL spesifik untuk angka 70%; untuk tautan keluar gunakan press-release Gartner Jul 2025 dan/atau halaman Forecast Analysis (gartner.com/en/documents/7146430).
- ⚠️ **Detail harga/periodisasi promo agent builder** (gratis s.d. Des 2026 → Premium AI; free run Q1 2026) berasal dari ringkasan halaman SAP via WebSearch, bukan fetch langsung (sap.com memblokir WebFetch 403). → **Rekomendasi**: boleh disebut sebagai "promo untuk periode terbatas" tanpa mengunci angka tanggal secara keras; verifikasi ulang jika tanggal mau ditulis eksplisit.
- ⚠️ **developer-tools.html & joule-studio.html tidak bisa di-fetch langsung (HTTP 403).** Fakta Joule Studio/Build Code disusun dari news.sap.com + Constellation Research + ringkasan SERP. → **Rekomendasi**: untuk tautan keluar, utamakan news.sap.com (terbukti dapat diakses) dan Constellation Research; tautan ke halaman produk sap.com boleh dipakai sebagai referensi tetapi tidak dikutip sebagai kalimat langsung.
- ⚠️ **Klaim "kode AI otomatis patuh clean core"** berisiko overclaim. SAP hanya menyatakan interoperasi ABAP Cloud + adherence to best practices. → **Rekomendasi**: frasa seperti "diarahkan agar patuh ABAP Cloud, tetapi tetap perlu direview", bukan "dijamin clean core".
- ⚠️ **Jangan sajikan "AI agent" seolah fitur yang sudah lama matang.** Ketersediaannya masih dalam fase promo/premium dan berkembang. → **Rekomendasi**: beri konteks status + waktu ("tersedia sebagai promo per 2026"), hindari superlatif.

## Definition snippet draft (48 kata)

> **Low-code bertenaga AI** adalah platform low-code yang menambahkan AI generatif untuk mempercepat pembuatan aplikasi dan otomatisasi—mengubah instruksi bahasa alami menjadi UI, workflow, atau kode. Pada ekosistem SAP, lapisan ini diwakili **Joule** (copilot), **SAP Build Code** (kode berbantuan AI), dan **Joule Studio** (membangun AI agent) di atas **SAP Build** / SAP BTP.
