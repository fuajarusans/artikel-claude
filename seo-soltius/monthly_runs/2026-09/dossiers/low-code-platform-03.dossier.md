---
brief_id: "low-code-platform-03"
researcher_run_date: "2026-09-17"
sources_cited: 8
flags: 6
---

# Research Dossier: Low-Code dan Clean Core — Memperluas SAP S/4HANA Tanpa Merusak Inti

## TL;DR for the writer

- **Fakta paling load-bearing (KRITIS, sudah diverifikasi):** Pada **Agustus 2025 SAP MEMENSIUNKAN model "3-tier extensibility" lama** dan menggantinya dengan **"clean core level concept" — model kematangan 4 level: A, B, C, D**. Tulis dengan istilah BARU ini. Jangan menulis "3-tier extensibility model" sebagai model terkini; jika perlu menyebutnya, sebut sebagai model lama yang telah digantikan. (Sumber: SAP News Center, Agustus 2025; community.sap.com.)
- **Jangan campur aduk dua konsep berbeda.** Ada (1) **tiga CARA/pendekatan memperluas** S/4HANA — *key-user/in-app*, *side-by-side*, *developer (ABAP Cloud)* — ini kerangka teknis yang masih berlaku dan jadi tulang punggung artikel; dan (2) **empat LEVEL kematangan clean core (A–D)** — sistem penilaian seberapa "bersih"/upgrade-safe sebuah ekstensi. Yang pensiun Agustus 2025 adalah model *3-tier* (penggolongan lama), bukan ketiga pendekatan. Jelaskan keduanya secara terpisah lalu hubungkan (Level A dicapai lewat ABAP Cloud on-stack ATAU SAP Build side-by-side).
- **Di mana low-code duduk:** **SAP Build = side-by-side extensibility di SAP BTP**; sebagian **key-user/in-app extensibility bersifat no-code** (di dalam aplikasi Fiori standar). Keduanya menjaga inti tetap standar karena hanya memakai *released API*/extension point — sehingga upgrade S/4HANA tetap aman. SAP Build dapat mencapai **Level A** (kualitas tertinggi).
- **Batas jujur (untuk H2 #5):** low-code BUKAN untuk semua ekstensi. Logika transaksi berat/kinerja tinggi/deeply integrated lebih tepat *developer extensibility* (ABAP Cloud/RAP). Dan kustomisasi ECC lama TIDAK bisa sekadar "dipindah" ke low-code — perlu *custom code remediation* (analisis, klasifikasi ke level A–D, tulis ulang di pendekatan yang bersih). Ini pesan pembeda dari SERP.
- **Angka pembingkai (forecast Gartner — bingkai sebagai proyeksi, bukan realisasi):** low-code ≈ **75% pengembangan aplikasi baru pada 2026** (naik dari 40% pada 2021). Pakai sebagai konteks tren, bukan klaim keras.
- **Framing Soltius:** *menerapkan/mengimplementasikan* prinsip clean core dan *memindahkan* kustomisasi ke SAP BTP (mis. lewat SAP Build) — **BUKAN membuat** SAP Build/ABAP Cloud. Maks 2–3 self-mention, ke closing + 1 aside opsional.

## Core facts (verified)

> **Claim**: SAP memensiunkan model 3-tier extensibility dan menggantinya dengan model kematangan clean core 4 level (A–D) pada Agustus 2025.
> **Number/specific**: Model lama "3-tier extensibility" diganti "clean core level concept" — empat level (A, B, C, D) yang menilai setiap ekstensi/objek kustom berdasarkan integritas arsitektur, tingkat *decoupling* dari inti, dan keamanan saat upgrade. Level A = kualitas tertinggi (paling bersih).
> **Source**: SAP News Center, "How to Extend SAP S/4HANA Cloud the Right Way | Clean Core" (Agustus 2025) — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ ; community.sap.com "Getting to a Clean Core – the new maturity model of extensions into four distinct levels (A,B,C,D)" — https://community.sap.com/t5/technology-blog-posts-by-members/getting-to-a-clean-core-the-new-maturity-model-of-extensions-into-four/ba-p/14326982. Akses 2026-09-17.
> **Confidence**: high (dikonfirmasi SAP official + community by-SAP; ini fakta paling penting untuk artikel — tulis dengan istilah baru).

> **Claim**: Level A adalah ekstensi paling bersih dan dapat dicapai lewat dua jalur.
> **Number/specific**: Level A = ekstensi yang HANYA memakai antarmuka SAP yang *publicly released* dan stabil (dengan *stability contract* formal). Dibangun **on-stack dengan ABAP Cloud** ATAU **side-by-side memakai opsi SAP Build di SAP BTP** (ABAP Cloud, CAP, atau low-code/no-code). Ini yang direkomendasikan SAP.
> **Source**: SAP News Center (Agustus 2025), URL di atas; community.sap.com "Clean Core maturity and the new Extensibility Levels" — https://community.sap.com/t5/technology-blog-posts-by-sap/clean-core-maturity-and-the-new-extensibility-levels/ba-p/14293974. Akses 2026-09-17.
> **Confidence**: high.

> **Claim**: Level B, C, dan D menandai ekstensi yang makin jauh dari clean core.
> **Number/specific**: **Level B** = memenuhi kriteria A tetapi juga memakai teknologi/ABAP klasik & *classic SAP APIs* (masih sesuai rekomendasi SAP). **Level C** = sebagian patuh; mengakses objek internal SAP tertentu — fleksibel untuk skenario legacy tapi lebih berisiko. **Level D** = tidak dianggap "bersih"; memakai objek/teknik yang secara eksplisit tidak direkomendasikan/tidak *released* — risiko upgrade tertinggi.
> **Source**: SAP News Center (Agustus 2025), URL di atas; community.sap.com maturity-model post, URL di atas. Akses 2026-09-17.
> **Confidence**: high.

> **Claim**: SAP S/4HANA mendukung tiga pendekatan/opsi extensibility yang masih berlaku.
> **Number/specific**: (1) **Key-user / in-app extensibility** (dulu disebut in-app) — no/low-code di dalam aplikasi Fiori standar; key user membuat *field*, logika bisnis sederhana, *custom business object* (CBO). (2) **Developer extensibility (on-stack)** — ABAP Cloud, developer profesional membuat kode ABAP *cloud-ready* & *upgrade-stable* di dalam stack S/4HANA lewat ADT. (3) **Side-by-side extensibility** — di SAP BTP, aplikasi *decoupled* yang berjalan terpisah dari inti.
> **Source**: SAP Learning "Choosing the Appropriate Extensibility Option" — https://learning.sap.com/courses/expanding-sap-s-4hana-using-key-user-side-by-side-extensibility/choosing-the-appropriate-extensibility-option ; community.sap.com "Extensibility Approaches in SAP S/4HANA Cloud". Akses 2026-09-17.
> **Confidence**: high.

> **Claim**: Ketiga pendekatan extensibility bertumpu pada *released API* SAP.
> **Number/specific**: Ketiganya dibangun di atas *public SAP interfaces* — hanya mengakses *released API* dan *extension point* resmi. Inilah alasan mengapa ekstensi yang dibangun benar tetap *upgrade-safe*: SAP menjamin stabilitas antarmuka yang dirilis, sehingga upgrade inti tidak merusak ekstensi.
> **Source**: SAP Learning (URL di atas); SAP News Center (Agustus 2025). Akses 2026-09-17.
> **Confidence**: high.

> **Claim**: ABAP Cloud adalah model pengembangan ABAP yang dioptimalkan untuk cloud dan hanya memakai released API.
> **Number/specific**: ABAP Cloud = model & aturan pengembangan ABAP *cloud-ready*/upgrade-stable yang HANYA mengizinkan akses ke *released* SAP API dan objek yang dirilis; kepatuhan ditegakkan lewat pemeriksaan sintaks (*syntax checks*). Cocok untuk *developer extensibility* on-stack maupun ekstensi ABAP di BTP.
> **Source**: SAP News Center (Agustus 2025) — "ABAP Cloud enforces clean principles through syntax checks"; SAP "Extensibility with ABAP Cloud for SAP S/4HANA Cloud" — https://www.sap.com/assetdetail/2023/11/985bde03-977e-0010-bca6-c68f7e60039b.html. Akses 2026-09-17.
> **Confidence**: high.

> **Claim**: Side-by-side extensibility menjalankan ekstensi terpisah dari inti dengan metode lifecycle-compliant.
> **Number/specific**: Di SAP BTP, ekstensi *side-by-side* berjalan *decoupled* dari sistem inti dan hanya memakai API yang diizinkan (*allowed/released API*) — metode yang menjamin cara *upgrade-safe*. Ini tempat SAP Build (low-code) berada.
> **Source**: SAP Learning / community.sap.com "Extensibility Approaches in SAP S/4HANA Cloud Public Edition"; SAP News Center (Agustus 2025). Akses 2026-09-17.
> **Confidence**: high.

> **Claim**: SAP Build adalah solusi low-code/pro-code SAP yang duduk sebagai side-by-side extensibility di BTP dan mendukung clean core.
> **Number/specific**: SAP Build (portofolio: Build Apps, Build Process Automation, Build Work Zone, + Build Code untuk pro-code) berjalan di SAP BTP; sebagai side-by-side extensibility ia dapat mencapai **Level A** clean core selama memakai released API. Terintegrasi ke S/4HANA lewat released API/event.
> **Source**: SAP News Center (Agustus 2025) — SAP Build disebut sebagai solusi pengembangan low-code/pro-code jalur Level A; sap.com "SAP Build" — https://www.sap.com/products/technology-platform/build.html. Akses 2026-09-17.
> **Confidence**: high (posisi arsitektur mapan; nama komponen bisa berubah — lihat flags).

> **Claim**: Key-user / in-app extensibility bersifat no/low-code tetapi punya batas.
> **Number/specific**: Key-user extensibility memungkinkan pengguna bisnis membuat *field* tambahan, logika sederhana, formulir, dan *custom business object* langsung di aplikasi Fiori standar TANPA developer. Batasnya: tidak dirancang untuk aplikasi baru yang kompleks, logika transaksi berat, atau integrasi lintas-sistem yang rumit — di situ side-by-side atau developer extensibility lebih tepat.
> **Source**: SAP Learning "Choosing the Appropriate Extensibility Option" (URL di atas); community.sap.com extensibility approaches. Akses 2026-09-17.
> **Confidence**: high.

> **Claim**: Modifikasi inti (core) membuat upgrade S/4HANA mahal dan berisiko — inti masalah yang dipecahkan clean core.
> **Number/specific**: Kustomisasi yang menempel/memodifikasi inti (mis. modifikasi objek standar ala ECC lama) harus diuji ulang, disesuaikan, dan sering rusak saat upgrade — mengubah upgrade menjadi proyek berbulan-bulan dan menumpuk *technical debt*. Clean core memindahkan kustomisasi ke luar inti (BTP side-by-side atau ABAP Cloud on-stack) lewat released API agar inti tetap standar dan upgrade lancar.
> **Source**: SAP News Center (Agustus 2025) — prinsip clean core & tujuan upgrade-safety; SAP "Why Clean Core matters" (extensibility whitepaper), community.sap.com. Akses 2026-09-17.
> **Confidence**: high (prinsip; hindari angka durasi/biaya spesifik tanpa sumber — bahas kualitatif atau sebagai rule-of-thumb berlabel).

> **Claim**: Strategi yang dianjurkan SAP adalah "BTP-first"/ekstensi bersih, memakai level setinggi mungkin.
> **Number/specific**: SAP mendorong pelanggan mengekstensi dengan level setinggi mungkin (utamakan Level A) dan memakai side-by-side di BTP atau ABAP Cloud on-stack ketimbang teknik klasik yang menyentuh objek internal. Untuk S/4HANA Cloud Private Edition pun, arahnya sama: naikkan kematangan menuju A/B.
> **Source**: community.sap.com "Clean Core maturity and the new Extensibility Levels"; SAP News Center (Agustus 2025). Akses 2026-09-17.
> **Confidence**: high.

> **Claim**: Custom code remediation adalah langkah nyata sebelum/selama migrasi — kustomisasi lama tidak bisa sekadar "dipindah" ke low-code.
> **Number/specific**: Migrasi bersih menuntut *custom code remediation*: inventarisasi kustomisasi lama, analisis pemakaian, klasifikasi terhadap level A–D, lalu memutuskan nasibnya — dipensiunkan, digantikan standar, atau ditulis ulang di pendekatan bersih (key-user/side-by-side/ABAP Cloud). Low-code tidak otomatis menampung logika ABAP kompleks lama.
> **Source**: SAP News Center (Agustus 2025) + prinsip clean core (custom code adaptation/remediation); pengalaman lapangan (framing kualitatif). Akses 2026-09-17.
> **Confidence**: medium-high (konsep mapan; hindari angka % spesifik tanpa sumber).

> **Claim**: Low-code diproyeksikan menjadi mayoritas pengembangan aplikasi baru pada 2026 (konteks pasar).
> **Number/specific**: ≈75% pengembangan aplikasi baru akan memakai teknologi low-code pada 2026, naik dari 40% pada 2021 (proyeksi/forecast Gartner). Pakai HANYA sebagai pembingkai tren; bukan realisasi terukur.
> **Source**: InfoWorld merangkum forecast Gartner — https://www.infoworld.com/article/2337677/low-code-development-technologies-market-forecast-to-hit-445-billion-by-2026.html. Akses 2026-09-17.
> **Confidence**: high untuk kutipan forecast (bingkai sebagai proyeksi Gartner).

> **Claim**: Low-code menjaga upgrade tetap aman karena tidak menyentuh inti.
> **Number/specific**: Aplikasi low-code (SAP Build side-by-side, atau key-user in-app no-code) hanya membaca/menulis lewat released API dan berjalan terpisah/di lapisan aman, sehingga saat SAP meng-upgrade inti, ekstensi tidak ikut rusak — inilah "upgrade-safe by design". Berlawanan dengan modifikasi inti yang harus diuji ulang tiap upgrade.
> **Source**: SAP News Center (Agustus 2025); SAP Learning extensibility. Akses 2026-09-17.
> **Confidence**: high.

> **Claim**: Soltius adalah SAP Platinum Partner yang menerapkan clean core & memindahkan kustomisasi ke BTP.
> **Number/specific**: SAP Platinum Certified Channel Partner & VAR (tier tertinggi) via United VARs; layanan **Implementation + Enhancement + ERP Strategy** dan solusi **Digital Platform** (extensibility/low-code). Soltius *mengimplementasikan/memindahkan* — tidak membuat SAP Build/ABAP Cloud.
> **Source**: `knowledge_base/company_profile.md` + `product_matrix.md` (verified-by-default).
> **Confidence**: high.

## Solution focus + Soltius anchor (from product_matrix.md)

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| **Prinsip clean core + model level A–D (baru, Agu 2025)** | Model 3-tier lama pensiun; kini 4 level (A–D); Level A tertinggi | H2 #1, H2 #4 (tabel level) | — (konteks; anchor di closing) |
| **Tiga pendekatan extensibility** (key-user/in-app; side-by-side BTP; developer ABAP Cloud) | Semua pakai released API → upgrade-safe; batas masing-masing | H2 #2, H2 #4 (tabel tier) | — |
| **SAP Build (low-code) di SAP BTP** | Side-by-side; bisa capai Level A; integrasi via released API | H2 #3 | **Digital Platform + Implementation** |
| **ABAP Cloud / RAP** | Released API only; cloud-ready/upgrade-stable; syntax checks | H2 #2, H2 #5 | — |
| **Custom code remediation** | Kustomisasi lama tak bisa "dipindah" begitu saja; perlu klasifikasi & tulis ulang | H2 #5 | **ERP Strategy + Enhancement** (aside opsional) |

Reminder: Soltius **menerapkan/mengimplementasikan** clean core & **memindahkan** kustomisasi ke SAP BTP — **tidak membuat** SAP Build/ABAP Cloud. Maks 2–3 self-mention. Anchor CTA closing (dari brief): "Soltius membantu perusahaan menerapkan prinsip clean core: memindahkan kustomisasi ke SAP BTP (mis. lewat low-code SAP Build) agar sistem tetap mudah di-upgrade dan siap cloud." Aside opsional di H2 #5: keputusan tier sebaiknya lewat *assessment* custom code, bukan kebiasaan lama.

## Authoritative external sources (≥2 strong, for the writer to link out)

1. **SAP News Center — "How to Extend SAP S/4HANA Cloud the Right Way | Clean Core" (Agustus 2025)** — https://news.sap.com/2025/08/extend-sap-s4hana-cloud-right-way-clean-clear/ — *what it backs*: clean core level concept (4 level A–D menggantikan 3-tier); side-by-side + on-stack ABAP Cloud; SAP Build sebagai jalur Level A; released API = upgrade-safe. **Sumber utama, wajib ditautkan.**
2. **community.sap.com — "Getting to a Clean Core – the new maturity model of extensions into four distinct levels (A,B,C,D)"** — https://community.sap.com/t5/technology-blog-posts-by-members/getting-to-a-clean-core-the-new-maturity-model-of-extensions-into-four/ba-p/14326982 — *what it backs*: definisi tiap level A–D dan bahwa Agustus 2025 model 3-tier di-retire.
3. **SAP Learning — "Choosing the Appropriate Extensibility Option"** — https://learning.sap.com/courses/expanding-sap-s-4hana-using-key-user-side-by-side-extensibility/choosing-the-appropriate-extensibility-option — *what it backs*: tiga pendekatan (key-user/in-app, developer on-stack, side-by-side) dan kapan memakai yang mana.
4. **SAP — "Extensibility with ABAP Cloud for SAP S/4HANA Cloud, Public Edition"** — https://www.sap.com/assetdetail/2023/11/985bde03-977e-0010-bca6-c68f7e60039b.html — *what it backs*: definisi ABAP Cloud (released API only, upgrade-stable).
5. **community.sap.com — "Clean Core maturity and the new Extensibility Levels" (by SAP)** — https://community.sap.com/t5/technology-blog-posts-by-sap/clean-core-maturity-and-the-new-extensibility-levels/ba-p/14293974 — *what it backs*: Level A dua jalur; "pakai level setinggi mungkin".
6. **InfoWorld — "Low-code development technologies market forecast to hit $44.5 billion by 2026"** — https://www.infoworld.com/article/2337677/low-code-development-technologies-market-forecast-to-hit-445-billion-by-2026.html — *what it backs*: proyeksi Gartner 75% aplikasi baru 2026 (konteks tren).

Priority terpenuhi: SAP official (news/learning/sap.com) > community.sap.com (by SAP) > tech press (InfoWorld). Utamakan menautkan #1 (news.sap.com) + satu lagi (#3 SAP Learning atau #2 community).

## FAQ Q&As (7 drafted, Bahasa Indonesia)

### Apa itu clean core pada SAP S/4HANA?
Clean core adalah prinsip menjaga inti SAP S/4HANA tetap standar dan *upgrade-safe* dengan memindahkan kustomisasi ke luar inti — umumnya ke SAP BTP lewat *side-by-side extensibility* (termasuk low-code SAP Build) atau on-stack lewat ABAP Cloud. Ekstensi hanya memakai *released API* resmi, sehingga upgrade S/4HANA tidak merusak kustomisasi dan sistem tetap siap cloud.

### Apa perbedaan in-app/key-user, side-by-side, dan developer extensibility?
Ketiganya cara memperluas S/4HANA tanpa menyentuh inti. *Key-user/in-app extensibility* bersifat no/low-code di dalam aplikasi Fiori standar (menambah field, logika sederhana, custom business object) tanpa developer. *Side-by-side extensibility* menjalankan aplikasi terpisah di SAP BTP (tempat SAP Build/low-code). *Developer extensibility* memakai ABAP Cloud on-stack untuk logika kompleks di dalam stack. Semuanya hanya memakai *released API* sehingga upgrade-safe.

### Apakah SAP Build termasuk side-by-side extensibility?
Ya. SAP Build adalah solusi low-code/pro-code SAP yang berjalan di SAP BTP sebagai *side-by-side extensibility* — aplikasi dibangun terpisah dari inti dan berinteraksi dengan S/4HANA lewat *released API*. Karena tidak memodifikasi inti dan hanya memakai antarmuka resmi, ekstensi SAP Build dapat mencapai Level A (kualitas tertinggi) dalam model kematangan clean core SAP.

### Mengapa low-code membuat upgrade SAP lebih aman?
Karena low-code (SAP Build side-by-side atau key-user no-code) tidak memodifikasi objek inti. Aplikasinya berjalan terpisah atau di lapisan aman dan hanya membaca/menulis lewat *released API* yang stabilitasnya dijamin SAP. Saat SAP meng-upgrade inti, ekstensi tidak ikut rusak — berbeda dari modifikasi inti ala ECC lama yang harus diuji ulang dan sering pecah setiap upgrade.

### Apa itu ABAP Cloud dan kapan dipakai?
ABAP Cloud adalah model pengembangan ABAP yang dioptimalkan untuk cloud: hanya mengakses *released* SAP API dan objek resmi, *upgrade-stable*, dengan kepatuhan ditegakkan lewat pemeriksaan sintaks. Dipakai saat kebutuhan melebihi kemampuan low-code — mis. logika transaksi berat, kinerja tinggi, atau ekstensi yang harus erat menyatu dengan proses inti (*developer extensibility* on-stack). Ini juga jalur menuju Level A clean core.

### Apakah kustomisasi lama bisa dipindahkan ke low-code?
Tidak otomatis. Kustomisasi ECC lama — apalagi yang memodifikasi objek inti — perlu *custom code remediation*: inventarisasi, analisis pemakaian, klasifikasi terhadap level A–D, lalu diputuskan nasibnya (dipensiunkan, digantikan fitur standar, atau ditulis ulang di pendekatan bersih). Logika ABAP kompleks sering lebih tepat ke ABAP Cloud, bukan low-code. Low-code paling pas untuk workflow, form, dan aplikasi baru yang menghubungkan sistem.

### Apa bedanya model 3-tier lama dan model 4 level (A–D) yang baru?
Pada Agustus 2025 SAP mengganti model "3-tier extensibility" lama dengan *clean core level concept* — empat level: A, B, C, D. Model baru menilai setiap ekstensi berdasarkan seberapa bersih dan *upgrade-safe*-nya: Level A memakai hanya antarmuka resmi/stabil (kualitas tertinggi), sedangkan B, C, dan D makin banyak memakai teknik/objek klasik atau internal yang lebih berisiko saat upgrade. SAP menganjurkan memakai level setinggi mungkin.

## Data tables for the writer

### Tabel 1 — Model kematangan clean core: level A–D (untuk H2 #1/#4)
| Level | Ringkas | Cara dibangun | Dampak upgrade |
|---|---|---|---|
| **A** (tertinggi) | Hanya antarmuka SAP yang *released* & stabil (*stability contract*) | On-stack ABAP Cloud, atau side-by-side SAP Build di BTP (ABAP Cloud/CAP/low-code) | Paling aman; direkomendasikan SAP |
| **B** | Memenuhi A + memakai teknologi/API ABAP klasik yang masih direkomendasikan | ABAP klasik sesuai rekomendasi SAP | Cukup aman; perlu perhatian |
| **C** | Sebagian patuh; mengakses objek internal SAP tertentu | ABAP klasik + objek internal (skenario legacy) | Lebih berisiko saat upgrade |
| **D** | Tidak "bersih"; objek/teknik yang tidak *released*/tidak direkomendasikan | Teknik klasik/modifikasi tidak resmi | Risiko tertinggi |

> Catatan: model ini menggantikan "3-tier extensibility" per Agustus 2025. Sumber: SAP News Center (Agu 2025) + community.sap.com. Jangan tulis 3-tier sebagai model terkini.

### Tabel 2 — Tier extensibility mana untuk kebutuhan apa (untuk H2 #4, sesuai brief)
| Kebutuhan | Pendekatan yang tepat | Siapa yang mengerjakan | Sifat |
|---|---|---|---|
| Tambah field, form/approval sederhana, custom business object di aplikasi standar | **Key-user / in-app extensibility** | Key user / power user bisnis | No/low-code, dalam Fiori standar |
| Aplikasi/workflow baru yang mengintegrasikan sistem, portal, otomasi | **Side-by-side extensibility (SAP Build)** | Citizen + pro developer (fusion) | Low-code di SAP BTP; bisa Level A |
| Logika transaksi berat, kinerja tinggi, ekstensi erat dengan proses inti | **Developer extensibility (ABAP Cloud/RAP)** | Developer ABAP profesional | Pro-code on-stack; released API only |

> Prinsip: pakai level/pendekatan sebersih mungkin untuk kebutuhannya; jangan "turun" ke teknik klasik/internal kecuali benar-benar perlu.

## Edge cases & nuance

- **Dua konsep, jangan digabung.** "Tiga pendekatan extensibility" (key-user/side-by-side/developer) = *cara* membangun; "empat level A–D" = *skor kematangan/kebersihan* ekstensi. Level A bisa dicapai lewat dua pendekatan (ABAP Cloud on-stack ATAU SAP Build side-by-side). Menyamakan "3 pendekatan" dengan "model 3-tier lama" adalah kesalahan umum — 3-tier itu penggolongan lama yang PENSIUN Agustus 2025.
- **Low-code ≠ obat segalanya.** Untuk logika berat/kinerja tinggi, developer extensibility (ABAP Cloud) lebih tepat. H2 #5 harus jujur soal ini agar tidak terdengar seperti brosur SAP Build.
- **"Dipindah" itu menyesatkan.** Kustomisasi lama tidak "dipindah" ke low-code; ia di-*remediate* (dianalisis, diklasifikasi, ditulis ulang / dipensiunkan). Langkah tersulit di lapangan justru MEMUTUSKAN nasib kustomisasi lama, bukan membangun yang baru — pakai ini sebagai first-party angle.
- **Private vs Public Edition.** Developer extensibility & key-user tersedia luas; ketersediaan/opsi persisnya bisa berbeda antar-edisi (Public vs Private). Bahas kualitatif; jangan klaim matriks fitur per-edisi tanpa sumber help.sap.com.
- **Model masih berevolusi.** SAP memperbarui panduan clean core secara berkala (pembaruan besar Agustus 2025). Sebut tanggal ("per Agustus 2025") agar tahan waktu.
- **Angka biaya/durasi upgrade.** Godaan menulis "upgrade jadi X bulan / Y% lebih murah". Tidak ada angka terverifikasi — bahas kualitatif atau beri rule-of-thumb berlabel ("acuan lapangan, bukan studi resmi").

## Flags (open factual risk)

- ⚠️ **Istilah model (PALING KRITIS).** Model terkini = **"clean core level concept", 4 level A–D** (Agustus 2025); model **"3-tier extensibility" sudah pensiun**. → Tulis dengan istilah baru. Jika menyebut 3-tier, sebut sebagai model lama yang digantikan. Jangan mencampur "Tier 1/2/3" dengan "Level A/B/C/D".
- ⚠️ **Jangan samakan "3 pendekatan" dengan "3-tier".** Tiga pendekatan (key-user/side-by-side/developer) BERBEDA dari model 3-tier lama. → Jelaskan pendekatan sebagai *cara*, level A–D sebagai *skor*.
- ⚠️ **Nama/cakupan komponen SAP Build berubah cepat** (kini termasuk SAP Build Code pro-code). → Sebut seperlunya; artikel -02 (2026-06) sudah membedah 3 komponen — JANGAN duplikasi tur komponen di sini; fokus posisi SAP Build sebagai side-by-side.
- ⚠️ **Angka Gartner (75% aplikasi baru 2026)** = *forecast* (basis ~2021/2022), bukan realisasi. → Bingkai "diproyeksikan/menurut forecast Gartner"; pakai hanya sebagai konteks tren. Jangan tulis angka pasar USD kaku sebagai fakta 2026.
- ⚠️ **Angka biaya/durasi upgrade & "% kegagalan"** tidak diverifikasi. → Jangan cantumkan angka keras; kualitatif atau rule-of-thumb berlabel.
- ⚠️ **Detail per-edisi (Public vs Private) & konektor spesifik** tidak diverifikasi mendalam. → Bahas kualitatif; jangan klaim matriks fitur per-edisi atau nama teknis tanpa help.sap.com.

## Definition snippet draft (52 words)

> **Clean core** adalah prinsip menjaga inti SAP S/4HANA tetap standar dan *upgrade-safe* dengan memindahkan kustomisasi ke luar inti — umumnya ke SAP BTP lewat *side-by-side extensibility*, termasuk low-code SAP Build, atau on-stack lewat ABAP Cloud. Ekstensi hanya memakai *released API* resmi, sehingga upgrade S/4HANA berjalan lancar tanpa merusak kustomisasi.
