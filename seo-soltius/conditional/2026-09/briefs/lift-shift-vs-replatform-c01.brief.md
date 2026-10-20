---
keyword: "lift and shift sap"
keyword_slug: "lift-and-shift-sap"
landing_page: ""
month: "2026-09"
brief_id: "lift-shift-vs-replatform-c01"
angle: "lift-shift-vs-re-platform-sap-iaas"
angle_hash: "sha1:ad77d4ec8ad9"
search_intent: "comparison"
target_word_count: 900
strategist_run_date: "2026-08-31"
mode: "conditional-given-angle"
dedup_result: "distinct (resolusi diterapkan; Jaccard <0.4 vs semua tetangga cluster IaaS/migrasi)"
---

# Lift & Shift vs Re-Platform: Strategi Migrasi SAP ke IaaS

> Working Title (judul diberikan user, dipertahankan apa adanya — hanya diverifikasi panjang/SEO). Primary keyword "lift and shift" ada di 8 karakter pertama H1; supporting "migrasi SAP ke IaaS" di paruh kedua. Panjang H1 ~54 karакter. Penulis **tidak** mengubah substansi angle — hanya boleh menyelaraskan diksi antar-heading.

## Hook hypothesis

Seorang IT director atau kepala infrastruktur yang sudah memutuskan memindahkan SAP ke hyperscaler tiba di pertanyaan berikutnya yang justru membelah rapat: apakah memindahkan sistem apa adanya (lift & shift / rehost) atau sekalian mengoptimasi saat pindah (re-platform)? Vendor menjual "cepat", konsultan lain menjual "modern", dan tak satu pun memisahkan dua sumbu keputusan yang sebenarnya — strategi *infrastruktur* (rehost vs re-platform) dengan pendekatan *konversi aplikasi* ke S/4HANA (brownfield vs greenfield). Artikel ini membedah trade-off nyata antara kedua strategi migrasi ke IaaS: kecepatan dan risiko rendah melawan optimasi dan nilai jangka panjang, plus kapan masing-masing masuk akal untuk beban kerja SAP. Soltius kredibel di sini sebagai mitra yang **mengimplementasikan dan mendampingi** migrasi SAP ke AWS, Microsoft Azure, atau Google Cloud — bukan pembuat infrastruktur — dengan rekam jejak Best Cloud & Best RISE Partner dan layanan Migration.

## Primary keyword

`lift and shift sap`

(Supporting: `strategi migrasi sap ke iaas`. Frasa eksak "lift and shift sap" bervolume tipis; artikel menargetkan keluarga kueri komparasi "lift and shift vs re-platform", "rehost vs replatform SAP", "strategi migrasi SAP ke cloud", "6 R migrasi cloud" sebagai satu kluster intent komparasi/decision. Konsep berbahasa Inggris, penjelasan Bahasa Indonesia — sesuai perilaku pencari B2B Indonesia.)

## Secondary / LSI keywords (8–12)

- rehost (lift and shift)
- re-platform / lift, tinker, and shift
- strategi migrasi SAP ke IaaS
- 6R / 7R migrasi cloud (rehost, replatform, refactor, repurchase, relocate, retire, retain)
- hyperscaler (AWS, Microsoft Azure, Google Cloud)
- SAP S/4HANA di cloud
- homogeneous system copy / migrasi as-is
- SUM DMO (Database Migration Option) — DMOVE2S4, DMO with System Move
- brownfield vs greenfield (konversi S/4HANA)
- biaya operasional cloud (OpEx) vs optimasi cloud-native
- SAP HANA (migrasi database)
- SAP ECC end of maintenance 2027

## Search intent & SERP feature targets

- **Stage**: consideration → decision (pembaca sudah memutuskan "ke cloud"; kini memilih *cara* memindahkan)
- **Format**: comparison explainer + tabel head-to-head + decision criteria ("kapan pilih mana")
- **Surface targets**:
  - [x] AI Overview (Google SGE) / AI-engine citation (Perplexity, ChatGPT) — tabel rehost vs re-platform + jawaban 40–60 kata sangat mudah dikutip
  - [x] Featured Snippet (table / list) — tabel perbandingan + kriteria "kapan pilih"
  - [x] People Also Ask — blok FAQ menangkap "apa bedanya", "berapa lama", "apakah bisa langsung ke S/4HANA"

## SERP landscape (live scrape today)

> **Catatan metode:** WebFetch langsung ke `google.com/search?...&hl=id&gl=id` mengembalikan halaman consent/fallback (diblokir) — sesuai antisipasi CLAUDE.md §11. Degradasi anggun ke **WebSearch** untuk memetakan lanskap SERP + kueri turunan; verifikasi fakta strategi migrasi via AWS Prescriptive Guidance & sumber SAP. Tidak ada angka volume/KD yang difabrikasi (Ahrefs tidak terhubung).

**Top hasil yang bersaing (dua kluster jelas):**
1. Vendor/analis global berbahasa Inggris — AWS Prescriptive Guidance ("7 Rs"), IBM, NetApp, LeanIX, IT Convergence — *angle*: definisi rehost vs replatform vs refactor **generik lintas aplikasi**, bukan spesifik SAP.
2. Explainer SAP-spesifik (SAP Community, Microsoft Tech Community, PwC, blog SI) — *angle*: DMO/DMOVE2S4, "ECC to S/4HANA via lift & shift", jalur transisi — **hampir semuanya berbahasa Inggris**, teknis, untuk basis engineer.
3. Explainer migrasi cloud Bahasa Indonesia (BiznetGio, IDStar, Lintasarta, Google Cloud id) — *angle*: "5 strategi migrasi ke cloud" generik untuk audiens umum, **tanpa konteks beban kerja SAP**.

**Gaps to exploit** (yang TIDAK dicakup baik oleh top hasil):
- Tak ada artikel Bahasa Indonesia yang menjembatani framework "6R/7R" ke keputusan nyata **rehost vs re-platform untuk SAP** dengan bahasa decision-maker (bukan tutorial engineer).
- Nyaris semua sumber mencampur **sumbu infrastruktur (rehost/re-platform)** dengan **sumbu konversi aplikasi (brownfield/greenfield)** — celah edukasi yang membingungkan pembaca ID. Ini original-insight kita.
- Tak ada yang menautkan pilihan strategi ke konsekuensi konkret: biaya operasional lanjutan, risiko migrasi ganda, tenggat ECC 2027.

**People Also Ask / kueri turunan (dari WebSearch, mewakili PAA Google ID):**
- Apa itu lift and shift dalam migrasi cloud?
- Apa perbedaan lift and shift dan re-platform?
- Apa itu rehosting dalam konteks SAP?
- Apakah lift and shift sama dengan brownfield?
- Kapan sebaiknya memilih strategi lift and shift?
- Apa kelebihan dan kekurangan lift and shift?
- Apakah SAP bisa langsung migrasi ke S/4HANA dengan lift and shift?
- Berapa lama waktu migrasi lift and shift dibanding re-platform?

## Distinct angle vs. history

- **Closest prior articles in this cluster (conditional, belum di-commit):**
  - `iaas-untuk-sap-c01` (2026-06) — "Apa Itu IaaS & Mengapa Enterprise Memilihnya untuk Hosting SAP": definisi IaaS, shared responsibility, kapan IaaS vs RISE. **Fokus: apa/mengapa IaaS.**
  - `sap-hyperscaler-c01` (2026-08) — "SAP di AWS vs Azure vs GCP": komparasi TIGA penyedia, sertifikasi instance, region Indonesia. **Fokus: penyedia mana.** → **Cousin resmi artikel ini.**
  - `saas-paas-iaas-c01` (2026-07) — "SaaS vs PaaS vs IaaS": model LAYANAN cloud (NIST), siapa mengelola apa. **Fokus: model layanan, bukan strategi migrasi.**
  - `sap-ecc-2027-c01` (2026-07) — "SAP ECC End of Life 2027": 4 opsi menghadapi tenggat + brownfield/greenfield sebagai keputusan turunan. **Fokus: opsi maintenance/konversi, bukan strategi infrastruktur.**
- **How this brief differs**: Artikel ini menukik ke **satu sumbu keputusan yang belum ditulis** — *strategi memindahkan SAP ke infrastruktur IaaS* (rehost vs re-platform), lengkap dengan trade-off kecepatan vs optimasi dan kriteria "kapan pilih mana". Bukan apa/mengapa IaaS (iaas-untuk-sap), bukan penyedia mana (sap-hyperscaler), bukan model layanan (saas-paas-iaas), bukan opsi tenggat/konversi (sap-ecc-2027). Original insight pembeda: **lift & shift ≠ brownfield** — memisahkan sumbu infrastruktur dari sumbu konversi aplikasi, yang dicampur hampir semua kompetitor.
- **Subtopic overlap (Jaccard) with closest prior**: vs `iaas-untuk-sap` ~0.10; vs `sap-hyperscaler` ~0.08; vs `sap-ecc-2027` ~0.12 (irisan hanya pada entitas "hyperscaler/S/4HANA/2027", bukan subtopik inti). Semua **< 0.4**. **Hasil dedup: DISTINCT — resolusi tracker diterapкан; aman ditulis sebagai artikel baru.**

## Article skeleton — H2s the writer should expand

> **3 H2 (padat, ~900 kata).** Definisi rehost & re-platform HANYA di definition snippet. Tidak ada H2 "Apa itu lift and shift" (akан mengulang snippet). Tiap H2 dibuka dengan jawaban langsung 40–60 kata berisi poin BARU milik H2 itu (bukan pengulangan snippet).

1. **H2 (praktis / tabel — pembeda inti):** "Lift & Shift vs Re-Platform: Apa Bedanya untuk Migrasi SAP?" — *covers*: jawaban langsung 40–60 kata yang menekankan **inti perbedaan** (rehost = pindah tanpa mengubah aplikasi/OS/DB; re-platform = pindah sambil optimasi terarah, mis. migrasi database ke SAP HANA atau upgrade OS) — BUKAN mendefinisikan ulang. Sebut asal istilah: framework **7 Rs** AWS (rehost = *lift and shift*; replatform = *lift, tinker, and shift*). Lalu **tabel** perbandingan (dimensi: perubahan pada sistem, kecepatan, biaya awal, biaya operasional jangka panjang, optimasi cloud-native, risiko cutover, cocok untuk). Ini elemen terstruktur wajib batch.
2. **H2 (question-format — decision):** "Kapan Sebaiknya Memilih Lift & Shift, dan Kapan Re-Platform?" — *covers*: jawaban langsung 40–60 kata dengan kriteria. Pilih **lift & shift** bila: tenggat ketat (ECC 2027), butuh keluar dari data center secepatnya, ingin risiko/dampak operasional minimal, kapasitas tim terbatas, atau memilih pendekatan dua langkah (rehost dulu, konversi S/4HANA menyusul). Pilih **re-platform** bila: ingin sekaligus migrasi database ke HANA, menekan biaya operasional lanjutan, atau menghindari migrasi ganda. Angka: rehost bisa hitungan hari–minggu vs re-platform lazim ~4–12 minggu per beban kerja (verifikasi/atribusi).
3. **H2 (praktis / honest — original insight & kaitan hyperscaler):** "Lift & Shift Bukan Brownfield: Dua Sumbu Keputusan Migrasi SAP" — *covers*: jawaban langsung 40–60 kata yang meluruskan miskonsepsi umum — **strategi infrastruktur** (rehost/re-platform) dan **pendekatan konversi aplikasi** ke S/4HANA (brownfield/greenfield) adalah dua sumbu independen; satu proyek memilih di kedua sumbu. Jelaskan bagaimana re-platform bisa digabung dengan konversi lewat **SAP SUM DMO** (opsi *DMOVE2S4* satu langkah; *DMO with System Move* untuk pindah ke host/hyperscaler baru). Kaitkan ke penyedia: ketiga hyperscaler (AWS, Microsoft Azure, Google Cloud) menjalankan kedua strategi, tetapi re-platform ke HANA menuntut **instance tersertifikasi SAP HANA** — sambungkan ke pembahasan cousin (SAP di AWS/Azure/GCP). H2 ini merangkap honest/counter-conventional (trust-builder) dan tetap padat.

- **FAQ (2–3, dari PAA terkuat; 30–60 kata; tiap jawaban memuat 1 fakta/angka; TIDAK mengulang definisi snippet):**
  1. "Apakah lift and shift sama dengan brownfield?" → Tidak; keduanya sumbu berbeda (infrastruktur vs konversi aplikasi). Fakta: rehost memindahkan sistem apa adanya, sedangкан brownfield = konversi ke S/4HANA lewat SUM DMO.
  2. "Apakah SAP bisa langsung ke S/4HANA lewat lift and shift?" → Tidak; rehost mempertahankan versi & database yang ada. Ke S/4HANA butuh konversi (brownfield) atau implementasi baru (greenfield); bisa dua langkah (rehost dulu, konversi menyusul).
  3. "Berapa lama migrasi lift and shift dibanding re-platform?" → Rehost umumnya hitungan hari–minggu per beban kerja; re-platform lebih lama (lazim ~4–12 minggu) karena menambah optimasi, tetapi mengurangi risiko migrasi ganda di kemudian hari.
- **## Kesimpulan** (≤80 kata): rangkuman — pilihannya bukan "cepat vs modern" melainkan menimbang tenggat, kapasitas tim, dan biaya jangka panjang di dua sumbu keputusan. 1 positioning line Soltius (SAP Platinum Partner via United VARs / Best Cloud & Best RISE). Primary keyword "lift and shift" muncul di sini.
- **Soft CTA** (baris terakhir, terpisah): ajakan halus mengunjungi soltius.co.id untuk diskusi strategi migrasi SAP on AWS/Azure/GCP. Primary keyword hadir sekali lagi di penutup/CTA (seo_playbook §3).

(≥1 H2 question-format: H2 #2 ✓. ≥1 H2 praktis/terstruktur dengan tabel: H2 #1 ✓. Honest/counter-conventional dirangkap di H2 #3 tanpa menambah panjang.)

## SAP / partner tech to teach (from product_matrix.md + research)

> Keyword "lift and shift sap" bukan salah satu dari 6 keyword hub di product_matrix.md → pemetaan diturunkan dari research + framing universal (Soltius **mengimplementasikan/mendukung**, bukan membangun). Row terdekat: ERP migration to the cloud (§5) — teknik migrasi (lift-and-shift vs re-platform, brownfield/greenfield) memang disebut di sana.

Konsep yang harus dijelaskan penulis secara akurat & vendor-neutral:
- **Rehost (lift and shift)**: memindahkan sistem SAP apa adanya ke IaaS/hyperscaler tanpa mengubah aplikasi, OS, atau database — umumnya via *homogeneous system copy*. Cepat, risiko rendah, tetapi tidak mengoptimasi dan tidak memanfaatkan kemampuan cloud-native.
- **Re-platform (lift, tinker, and shift)**: memindahkan sambil melakукan optimasi terarah — mis. migrasi database ke **SAP HANA**, upgrade OS, penyesuaian ukuran instance, adopsi layanan terkelola/HA cloud. Lebih banyak usaha, hasil lebih optimal.
- **Framework 7 Rs (AWS Prescriptive Guidance)**: Rehost, Replatform, Refactor/Re-architect, Repurchase, Relocate, Retire, Retain — sebut sebagai kerangka umum; artikel fokus pada dua R teratas untuk SAP.
- **Sumbu berbeda — konversi aplikasi ke S/4HANA**: *brownfield* (konversi sistem), *greenfield* (implementasi baru), *selective data transition* (bluefield). Tegaskan ini BUKAN hal yang sama dengan rehost/re-platform.
- **SAP SUM DMO (Database Migration Option)**: opsi *DMOVE2S4* (satu langkah: migrasi DB + update sistem + konversi data) dan *DMO with System Move* (memindahkan sistem ke host/hyperscaler baru dalam satu proses gabungan). Jelaskan ringkas sebagai "cara teknis re-platform + konversi bisa digabung".
- **Hyperscaler & instance tersertifikasi SAP HANA**: AWS, Microsoft Azure, Google Cloud; re-platform ke HANA menuntut konfigurasi tersertifikasi (kaitkan ke cousin sap-hyperscaler).
- (Singgung ringan) **RISE with SAP** sebagai jalur terkelola di mana keputusan strategi tetap ada tetapi mekanismenya berpindah ke kontrak SAP — 1 kalimat, jangan mendalam.

**Fakta yang WAJIB diverifikasi researcher sebelum klaim final:**
- Definisi **rehost & replatform** persis dari **AWS Prescriptive Guidance (7 Rs)** — rehost = "lift and shift" (tanpa perubahan aplikasi); replatform = "lift, tinker, and shift" (optimasi terbatas, mis. DB ke layanan terkelola). Kutip 1 sumber AWS resmi.
- **SAP SUM DMO / DMOVE2S4 / DMO with System Move** — pastikan penamaan & cakupan akurat via SAP resmi (SAP Help/Learning atau SAP Community post oleh SAP). Jangan overstate.
- Angka **kecepatan/biaya** (rehost hari–minggu; re-platform ~4–12 minggu/beban kerja; klaim "~3x lebih cepat" atau "biaya operasional lebih tinggi") sebagian bersumber **blog vendor** — perlakukan sebagai indikatif, atribusikan sumber + tahun, atau ganti dengan sumber lebih kuat; JANGAN sajikan sebagai angka pasti SAP resmi.
- **Tenggat ECC**: mainstream maintenance SAP ECC 6.0 berakhir **31 Desember 2027** (extended s.d. 2030) — konfirmasi dari SAP resmi; sebut singkat sebagai driver "kapan rehost masuk akal", JANGAN mendalami (sudah ada `sap-ecc-2027-c01`).
- Hindari menyebut harga/SKU spesifik hyperscaler (berubah cepat) tanpa sumber bertanggal.

## Soltius anchor (max 2 self-mentions — batch override §6)

- **Service/credential to anchor the CTA**: **Migration service + Cloud solution**, didukung pengakuan **Best Cloud / Best RISE Partner** dan status **SAP Platinum Partner via United VARs**. Framing: "Soltius **mengimplementasikan dan mendampingi** migrasi SAP ke AWS, Microsoft Azure, atau Google Cloud — memetakan strategi rehost atau re-platform sesuai tenggat, kapasitas tim, dan target biaya." — *placement*: 1 positioning line di Kesimpulan.
- **Soft website CTA**: baris terakhir, funnel ke soltius.co.id (SAP on AWS/Azure/GCP).
- **TANPA aside Soltius di tengah body** (ruang tidak ada di 900 kata). **Total ≤2 sebutan Soltius.**
- **JANGAN**: menyebut Soltius "membangun" cloud/IaaS; memposisikan AWS/Azure/GCP sebagai milik Soltius; superlatif "terbaik/nomor satu". (product_matrix blacklist.)

## Internal links to place (TEPAT 2 — batch override: 1 hub + 1 cousin)

> Topik tanpa hub sendiri → hub = halaman Soltius eksisting paling relevan (own-topic terdekat). Disisipkan inline natural (tanpa "BACA JUGA").

- **Hub (own-topic terdekat)**: `https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud` — anchor natural: "migrasi ERP ke cloud" — why: hub kluster migrasi ERP ke cloud; strategi rehost/re-platform adalah *cara* menjalankan migrasi itu. **Placement: di lead.**
- **Cousin**: artikel sibling **`sap-hyperscaler-c01`** — "SAP di AWS vs Azure vs GCP" — anchor natural: "SAP di AWS, Azure, atau GCP" (atau "perbandingan hyperscaler untuk SAP") — why: setelah memilih *strategi* (rehost/re-platform), pembaca memilih *penyedia*; re-platform ke HANA menuntut instance tersertifikasi per hyperscaler. **Placement: di H2 #3.** URL published: `https://www.soltius.co.id/id/blog/read/sap-di-aws-azure-gcp-perbandingan-indonesia` — **verifikasi slug/URL live saat artikel sap-hyperscaler sudah terbit** (artikel conditional 2026-08, belum tentu live di URL ini; editor konfirmasi sebelum publish).

(CTA penutup ke layanan Cloud/Migration Soltius = jangkar konversi, bukan dihitung sebagai salah satu dari 2 tautan editorial.)

## E-E-A-T signals to embed

- **Angka/fakta spesifik untuk dikutip (dengan petunjuk sumber):**
  - Framework **7 Rs** AWS (rehost, replatform, refactor, repurchase, relocate, retire, retain) — sumber: **AWS Prescriptive Guidance, "About the migration strategies"**.
  - Rehost = memindahkan aplikasi **tanpa perubahan**; replatform = optimasi terbatas (mis. database ke layanan terkelola / upgrade OS) — sumber: AWS Prescriptive Guidance (definisi rehost & replatform).
  - Estimasi durasi: rehost hitungan **hari–minggu**; re-platform lazim **~4–12 minggu per beban kerja** — atribusikan sumber (blog vendor/analis) + tahun; indikatif, bukan angka SAP resmi.
  - Tenggat **31 Desember 2027** (mainstream maintenance ECC 6.0; extended s.d. 2030) — sumber: SAP resmi. Sebut singkat sebagai driver.
  - **SAP SUM DMO** — opsi *DMOVE2S4* (satu langkah) & *DMO with System Move* (pindah host/hyperscaler) — sumber: SAP resmi.
- **Sumber otoritatif untuk dikutip (≥2 — saran):**
  1. **AWS Prescriptive Guidance** — "About the migration strategies (7 Rs)" (`docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html`) — definisi rehost/replatform yang otoritatif & vendor-terverifikasi.
  2. **SAP** — SUM DMO / SAP S/4HANA on hyperscalers (SAP Help Portal / SAP Learning atau SAP Community post resmi SAP) untuk cara teknis re-platform + konversi digabung.
  3. (Opsional ketiga, driver tenggat) **SAP support** — mainstream maintenance SAP Business Suite 7 / ECC berakhir akhir 2027.
- **First-party Soltius angle**: pengalaman migrasi SAP lintas strategi (rehost & re-platform) ke hyperscaler sebagai Best Cloud/Best RISE Partner — gunakan satu sentuhan pengalaman jujur, mis. "dalam praktik, pertanyaan pertama bukan 'rehost atau re-platform', melainkan 'seberapa dekat tenggat Anda dan siapa yang akan mengelola sistem setelah pindah'".

## AI Overview & GEO optimization (seo_playbook §2a + addendum §5)

- **Question-first + extractable**: H2 #2 diformat sebagai pertanyaan nyata; penulis menjawab **tiap** H2 dalam blok **40–60 kata** tepat setelah heading (umpan kutipan GEO) sebelum elaborasi — **tanpa menyatakan ulang definition snippet**.
- **Definition snippet (40–60 kata, blockquote "Ringkasnya:")** — SATU-SATUNYA tempat definisi. Contoh arah: *"Lift & shift (rehost) dan re-platform adalah dua strategi memindahkan sistem SAP ke infrastruktur cloud (IaaS). Lift & shift memindahkan sistem apa adanya — tanpa mengubah aplikasi, sistem operasi, atau database — sehingga cepat dan berisiko rendah. Re-platform memindahkannya sambil melakukan optimasi terarah, misalnya migrasi database ke SAP HANA, sehingga lebih lama tetapi lebih optimal."* (≈55 kata). **Body/H2/FAQ DILARANG mengulang ini dengan kata lain.**
- **Quick-answer extractability**: setiap paragraf tubuh = satu poin yang dapat dikutip mandiri + satu fakta bersumber.
- **Entity list (sebut eksplisit, nama penuh saat pertama)**: lift and shift (rehost), re-platform (lift, tinker, and shift), Infrastructure as a Service (IaaS), Amazon Web Services (AWS), Microsoft Azure, Google Cloud, SAP S/4HANA, SAP HANA, SAP ECC, SUM DMO (Database Migration Option), brownfield, greenfield, AWS Prescriptive Guidance (7 Rs).
- **Format match**: tabel untuk perbandingan rehost vs re-platform (H2 #1); paragraf + kriteria untuk decision (H2 #2); paragraf penjelas untuk dua-sumbu (H2 #3). FAQ parseable untuk FAQPage schema.
- **Freshness**: tandai `dateModified` akurat; detail RISE, tenggat ECC, dan penamaan alat SAP dapat berubah.

## Data captured this run

- **Source(s)**: live SERP via WebFetch **diblokir** (consent Google) → degradasi ke **WebSearch** (CLAUDE.md §11) + WebFetch **AWS Prescriptive Guidance** (definisi 7 Rs terkonfirmasi) + verifikasi fakta SAP DMO/hyperscaler via WebSearch.
- **Apr 2026 rank** (from report): tidak berlaku — topik/keyword baru, tidak ada di `seo_report_apr2026.md` (6 keyword bulan itu tidak termasuk topik ini).
- **Volume / KD / trend**: `n/a (Ahrefs not connected)`. Sinyal kualitatif: SERP komparasi "lift and shift vs re-platform" ramai berbahasa Inggris & generik lintas-aplikasi; padanan Bahasa Indonesia khusus SAP **belum ada** — whitespace jelas. Tren migrasi cloud enterprise naik menjelang tenggat ECC 2027.
- **SERP features present**: explainer/komparasi mendominasi; AI Overview kemungkinan tampil untuk "perbedaan lift and shift dan re-platform"; PAA aktif.
- **cache_source**: tidak ada cache per-keyword (alur conditional `/single-article`, bukan monthly run). Riset ditangkap inline di brief ini.

## Notes for SME researcher

Verifikasi/fokuskan:
- Konfirmasi definisi **rehost & replatform** dari **AWS Prescriptive Guidance (7 Rs)**: rehost = "lift and shift" tanpa perubahan aplikasi; replatform = "lift, tinker, and shift" dengan optimasi terbatas (contoh AWS: pindah DB ke layanan terkelola, upgrade OS). Kutip 1 sumber AWS resmi.
- Konfirmasi penamaan & cakupan **SAP SUM DMO**, **DMOVE2S4**, **DMO with System Move** via SAP resmi. Framing hati-hati; ini alat teknis yang detailnya berubah antar-rilis SUM.
- Pastikan pemisahan **sumbu infrastruktur (rehost/re-platform) vs sumbu konversi aplikasi (brownfield/greenfield)** akurat dan tidak menyesatkan — ini original insight artikel; salah framing merusak kredibilitas.
- Validasi angka durasi/biaya (hari–minggu vs 4–12 minggu; klaim "3x lebih cepat"/"biaya operasional lebih tinggi") — sebagian dari **blog vendor**; cari sumber lebih kuat atau sajikan sebagai indikatif dengan atribusi + tahun. JANGAN mengarang angka SAP.
- Konfirmasi tenggat **ECC 31 Desember 2027** (extended s.d. 2030) dari SAP resmi — cukup sebagai driver 1 kalimat.
- Konfirmasi bahwa re-platform ke **SAP HANA** menuntut **instance tersertifikasi** di hyperscaler (kaitkan ke cousin sap-hyperscaler tanpa menduplikasi isinya).

## Notes for future strategist runs

Artikel ini SENGAJA TIDAK mencakup (disisakan untuk artikel lain):
- **Komparasi head-to-head AWS vs Azure vs GCP untuk SAP** (sudah ada `sap-hyperscaler-c01`).
- **Apa/mengapa IaaS & shared responsibility** (sudah ada `iaas-untuk-sap-c01`).
- **Panduan brownfield vs greenfield konversi S/4HANA secara mendalam** (sudah disinggung `sap-ecc-2027-c01`; bisa jadi artikel tersendiri di sumbu konversi).
- **TCO/biaya rinci menghosting SAP di IaaS** (artikel decision-stage tersendiri; di sini hanya OpEx vs optimasi disinggung).
- **Detail teknis langkah-demi-langkah SUM DMO** (materi engineer; artikel ini tetap level decision-maker).

## Format overrides (batch conditional 2026-09)

- **Panjang body 800–1000 kata (target ~900)** — cleaned-prose via `tools/count_words.py`; di atas 1000 = pangkas, di bawah 800 = terlalu tipis. `target_word_count: 900`.
- **TANPA image placeholder** — DILARANG total; tidak ada `{IMAGE_NN}`, tidak ada `images.json`. Konsep visual (perbandingan strategi, dua sumbu keputusan) disampaikan lewat **tabel/list/prosa**.
- **FAQ 2–3 Q&A** (jawaban 30–60 kata, tiap jawaban 1 fakta/angka) — dari PAA terkuat; tidak mengulang definisi snippet.
- **Internal link TEPAT 2** — 1 hub (`migrasi-erp-ke-cloud`) + 1 cousin (`sap-hyperscaler`). Sitasi eksternal otoritatif 1–2 inline.
- **Definisi HANYA SEKALI** — di definition snippet ("Ringkasnya:" blockquote 40–60 kata setelah lead). Body/H2/FAQ dilarang mengulang definisi dengan kata lain. Tanpa H2 "Apa itu lift and shift".
- **Prosa padat on-point** — buang transisi kosong & contoh redundan; ritme paragraf 1–4 kalimat, em-dash ≤2, tanpa adjektiva hype.
- **Lead ≤80 kata** tanpa paragraf roadmap; **Kesimpulan ≤80 kata** dengan 1 positioning line Soltius; **soft CTA soltius.co.id = baris paling akhir**; **maks 2 mention Soltius total**; **primary keyword "lift and shift" muncul di penutup/CTA**.
- **≥4 angka spesifik inline**; **3 H2** (≥1 question-format: H2 #2; ≥1 praktis/tabel: H2 #1); jawaban langsung 40–60 kata setelah tiap H2 berisi poin BARU milik H2 itu.
- Berlaku penuh: anti-AI style_guide §5, EYD, disiplin sitasi §10 (jangan mengarang angka/tanggal/kapabilitas produk), framing Soltius §11 (implementator/pendamping SAP, bukan pembuat).
