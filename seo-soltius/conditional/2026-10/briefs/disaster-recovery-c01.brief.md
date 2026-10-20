---
keyword: "disaster recovery"
keyword_slug: "disaster-recovery"
landing_page: "https://www.soltius.co.id/id/solutions-by-products/cloud"
month: "2026-10"
brief_id: "disaster-recovery-c01"
angle: "dr-pengertian-rpo-rto-strategi-pentingnya-bisnis"
angle_hash: "sha1:eecb0e35ffb5"
search_intent: "informational"
target_word_count: 1100
strategist_run_date: "2026-10-08"
mode: "conditional-given-angle"
supporting_keyword: "rpo dan rto"
cta_anchor: "SAP on Cloud (hosting/IaaS) → solusi Cloud Soltius"
dedup_result: "distinct"
---

# Disaster Recovery: Pengertian, RPO & RTO, dan Pentingnya bagi Bisnis

<!-- Working title GIVEN by user (row 6, tab Oktober 2026) — dipakai apa adanya. H1 = title. Primary keyword "disaster recovery" di 2 kata pertama. Judul mencakup tiga janji: Pengertian (→ snippet), RPO & RTO (→ H2-2, supporting keyword), Pentingnya bagi Bisnis (→ H2-4). -->

## Hook hypothesis

Sebuah ransomware mengunci server produksi pada jam sibuk, atau banjir memutus listrik data center selama dua hari — dan pertanyaan pertama di ruang krisis bukan "kapan pulih?" melainkan "berapa jam data yang hilang, dan berapa lama kita boleh berhenti?" Pembaca (CIO, kepala IT, IT operations lead, atau manajer risiko) sering baru menyadari bahwa mereka punya *backup* tetapi tidak punya **rencana pemulihan** yang terukur. SERP Bahasa Indonesia untuk "disaster recovery" didominasi blog penyedia layanan DR yang mengulang definisi dan daftar manfaat, tanpa menautkan dua angka keputusan — RPO dan RTO — ke pilihan strategi dan biayanya secara konkret. Angle ini menutup gap itu: membedakan DR dari *backup* dan *business continuity*, menjelaskan cara menetapkan RPO/RTO dengan contoh berhitung, memetakan tangga strategi DR (dari *backup & restore* sampai *multi-site*), lalu menempatkan konteks SAP di cloud dan aturan OJK Indonesia. Soltius kredibel di sini sebagai mitra implementasi SAP yang **mengimplementasikan dan mendampingi** SAP di atas platform cloud (AWS, Google Cloud, Huawei Cloud) — bukan pemilik infrastruktur — dengan rekam jejak Best Cloud & Best RISE Partner.

## Primary keyword

`disaster recovery`

## Supporting / secondary keyword

`rpo dan rto` (dijawab di H2-2 "Bagaimana cara menentukan RPO dan RTO?" + 1 FAQ — JANGAN mengulang definition snippet kata per kata)

## Secondary / LSI keywords (8–12)

- disaster recovery adalah
- disaster recovery plan (DRP)
- recovery point objective (RPO)
- recovery time objective (RTO)
- business continuity plan (BCP)
- backup dan replikasi data
- failover / high availability (HA)
- downtime / waktu henti
- disaster recovery center (DRC)
- strategi disaster recovery (backup & restore, pilot light, warm standby, multi-site)
- pemulihan bencana / kelangsungan bisnis
- SAP HANA System Replication

## Search intent & SERP feature targets

- **Stage**: awareness → consideration (top-funnel; pembaca membentuk pemahaman + kriteria keputusan RPO/RTO sebelum memilih arsitektur/vendor)
- **Format**: definitional explainer + tabel strategi DR + contoh berhitung RPO/RTO
- **Surface targets**:
  - [x] AI Overview (Google SGE) / AI-engine citation (Perplexity, ChatGPT) — definisi 40–60 kata + tabel strategi row-by-row + jawaban langsung per H2 sangat *extractable*
  - [x] Featured Snippet (definisi + tabel RPO vs RTO / tangga strategi)
  - [x] People Also Ask

## SERP landscape (live scrape today)

> **Catatan metode:** WebFetch ke `google.com/search?...&hl=id&gl=id` **tidak diandalkan** (sering diblokir anti-bot, sesuai catatan batch sebelumnya). SERP landscape disusun dari **WebSearch** (kueri ID + EN) + pemeriksaan sumber otoritatif. Tandai sebagai sinyal, bukan scrape SERP penuh. Ahrefs **n/a** (tidak terhubung) → volume/KD = n/a; andalkan intent + PAA.

**Pola SERP Bahasa Indonesia (dari WebSearch):**
1. Blog penyedia layanan DR/cloud lokal (Zettagrid Indonesia, DigitalEdge, dcloud, Cloudmatika, Opsio, Vinchin ID) — definisi DR + "mengapa penting" + daftar manfaat; kredibel tetapi berhenti sebelum menautkan RPO/RTO ke strategi + biaya secara konkret.
2. Dokumentasi vendor cloud berbahasa Indonesia (AWS Well-Architected `docs.aws.amazon.com/id_id/...` — "Tujuan Pemulihan Bencana (DR)") — otoritatif untuk definisi RPO/RTO + empat strategi, tetapi generik lintas industri, bukan konteks SAP/Indonesia.
3. Artikel akademik (repositori Esa Unggul, Trisakti, Kwik Kian Gie) — DRP/BCP sebagai manajemen risiko; bagus untuk sitasi, bukan untuk pembaca bisnis.

**Gaps to exploit** (yang tidak dikerjakan top SERP):
- **Menautkan RPO/RTO ke pilihan strategi + biaya** lewat satu tabel tangga (backup & restore → pilot light → warm standby → multi-site) — jarang disajikan utuh di artikel ID.
- **Contoh berhitung RPO/RTO** yang bisa langsung dipakai pembaca (RPO 1 jam → backup tiap jam; RTO 4 jam → gangguan 10.30 harus online 14.30).
- **Disambiguasi tiga istilah**: backup vs disaster recovery vs business continuity — sering dicampuradukkan.
- **Konteks lokal**: kewajiban Disaster Recovery Center (DRC) di Indonesia untuk sektor perbankan (POJK) + konteks SAP di cloud (SAP HANA System Replication). Belum ada artikel ID yang menyatukan konsep DR umum dengan dua konteks ini.
- **Kejujuran trade-off**: "RPO/RTO mendekati nol" terdengar ideal tetapi mahal; pilih sesuai dampak bisnis, bukan tren.

**People Also Ask / pertanyaan nyata (≥5 captured):**
1. Apa itu disaster recovery (dan disaster recovery plan)?
2. Apa bedanya disaster recovery dan backup?
3. Apa bedanya disaster recovery dan business continuity (BCP)?
4. Apa itu RPO dan RTO, dan apa bedanya?
5. Bagaimana cara menentukan RPO dan RTO?
6. Apa saja strategi / metode disaster recovery?
7. Apa itu Disaster Recovery Center (DRC)?
8. Mengapa disaster recovery penting bagi bisnis?

## Distinct angle vs. history

- **Closest prior in cluster cloud**: `iaas-untuk-sap-c01` (2026-06, "Apa Itu IaaS dan Mengapa Enterprise Memilihnya untuk Hosting SAP" — model layanan cloud IaaS/PaaS/SaaS + shared responsibility + hyperscaler), `sap-hyperscaler-c01` (2026-08, "SAP di AWS vs Azure vs GCP" — komparasi sertifikasi instance + region Indonesia), `cloud-computing-c01` (2026-08), `cloud-deployment-c01` & `lift-shift-vs-replatform-c01` (2026-09). Tak satu pun membahas DR/BCP sebagai topik.
- **How this brief differs**: Fokus di sini adalah **disiplin pemulihan** — sasaran RPO & RTO, tangga strategi (backup & restore, pilot light, warm standby, multi-site), *failover*/replikasi, dan kelangsungan bisnis — **bukan** "apa itu IaaS" (iaas-untuk-sap) dan **bukan** komparasi hyperscaler mana yang dipilih (sap-hyperscaler). DR/BCP justru **ditandai sebagai whitespace terbuka** di dua brief lama: catatan `sap-hyperscaler-c01` menyebut "High availability & disaster recovery SAP di cloud (multi-AZ, replikasi HANA, RPO/RTO) — hanya disinggung 1 butir … kandidat artikel tersendiri", dan `cloud-deployment-c01` (2026-09) menyebut "cloud bursting & disaster recovery lintas model deployment" sebagai celah. Brief ini mengisi celah itu.
- **Subtopic overlap (Jaccard) dengan prior terdekat**: < 0,12. Grep seluruh `conditional/` + `articles_history/` untuk `disaster recovery|RPO|RTO|business continuity|failover|pemulihan bencana` = **0 kecocokan di artikel final**; hanya muncul sebagai catatan whitespace di 2 brief. **Hasil dedup: distinct — bukan duplikat.** angle_hash `sha1:eecb0e35ffb5` tidak bertabrakan dengan riwayat.

## Article skeleton — H2s the writer should expand

> Target 3–4 H2. **DILARANG** H2 definisi yang mengulang snippet. ≥1 H2 question-format (H2-1 & H2-4); ≥1 H2 praktis/terstruktur dengan tabel/angka (H2-2 & H2-3). Jawaban langsung 40–60 kata tepat setelah tiap H2 (poin baru, bukan definisi snippet), lalu elaborasi. ≥5 angka spesifik inline.

1. **H2 (question-format)**: *"Disaster recovery, backup, atau business continuity: apa bedanya?"* — *covers*: pisahkan tiga istilah yang sering dicampur — **backup** = salinan data (satu alat); **disaster recovery (DR)** = rencana + proses memulihkan data dan sistem TI setelah gangguan, memakai backup, replikasi, dan *failover*; **business continuity plan (BCP)** = payung lebih luas yang menjaga seluruh operasi bisnis tetap berjalan (orang, proses, komunikasi, lokasi alternatif). DR adalah **subset TI** dari BCP. Jawaban langsung 40–60 kata + daftar 3 istilah (lead-in bold). Info BARU (relasi 3 lapis), bukan ulangan snippet.
2. **H2 (praktis — ANGKA + contoh + mini-tabel)**: *"Bagaimana cara menentukan RPO dan RTO?"* — *covers*: **RPO (Recovery Point Objective)** = batas maksimum data yang boleh hilang, diukur dalam waktu; **RTO (Recovery Time Objective)** = batas maksimum lama sistem boleh berhenti sebelum pulih. Keduanya **independen** (satu sistem bisa RTO panjang tetapi RPO pendek, atau sebaliknya). Contoh berhitung: RPO 1 jam → backup minimal tiap jam; RTO 4 jam → gangguan pukul 10.30 harus online paling lambat 14.30; backup terakhir 10.00 saat gangguan 10.59 = kehilangan ≤59 menit (masih dalam RPO). Trade-off: makin ketat (mendekati 0) → biaya & infrastruktur naik. Mini-tabel: Metrik | Mengukur | Satuan | Konsekuensi bila diperketat. Supporting keyword "rpo dan rto" mendarat di sini.
3. **H2 (praktis — TABEL strategi, funnel SAP/cloud)**: *"Strategi disaster recovery: dari backup sampai multi-site"* — *covers*: tangga empat strategi (merujuk AWS Well-Architected, Reliability Pillar): **Backup & Restore** (biaya terendah, RTO terpanjang), **Pilot Light** (biaya sedang, inti sistem + replikasi data selalu aktif, sisanya "mati" sampai failover), **Warm Standby** (biaya tinggi, salinan fungsional selalu nyala di kapasitas terbatas → RTO lebih rendah), **Multi-Site Active/Active** (biaya tertinggi, RTO/RPO mendekati nol). Tabel: Strategi | Biaya relatif | RPO/RTO tipikal | Kapan dipakai. Konteks SAP (funnel): **SAP HANA System Replication** — mode **sinkron** untuk high availability (RPO 0 detik, RTO dalam hitungan menit — **label sumber, hedge**) dan **asinkron** untuk DR lintas lokasi; di sinilah keputusan "di mana SAP dihosting" (cloud region DR) menyatu dengan RPO/RTO. Sisipkan hedging jujur 1–2 kalimat: strategi termahal bukan selalu paling tepat — sesuaikan dengan dampak bisnis dan dana. **Hub (Cloud Soltius)** + **cousin (migrasi ERP ke cloud)** disisipkan inline di sini.
4. **H2 (question-format / importance)**: *"Mengapa disaster recovery penting bagi bisnis?"* — *covers*: jawab janji judul "Pentingnya bagi Bisnis". Jawaban langsung 40–60 kata: downtime menghentikan penjualan (terutama bisnis 24/7 / e-commerce), merusak reputasi & loyalitas, dan — di sektor diatur — melanggar kepatuhan. Konteks lokal: regulasi OJK mewajibkan bank mengelola pusat data utama **dan** Disaster Recovery Center (DRC) di wilayah Indonesia, terpisah secara geografis/domain risiko dari situs utama (POJK — **verifikasi nomor & bunyi pasal**). Tutup dengan: DR bukan biaya, melainkan asuransi operasional yang besarnya diukur lewat RPO/RTO. **Singkat** — jaga total ≤1200 kata.

(FAQ di bawah. Honest/counter-conventional H2 OPSIONAL — cukup hedging 1–2 kalimat di H2-3 agar tetap ≤1200 kata.)

## FAQ — questions to answer (3–5; jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka)

> Ambil dari PAA. **JANGAN** buat FAQ yang mengulang definisi snippet kata per kata; beri sudut/fakta baru.

1. **"Apa bedanya disaster recovery dan backup?"** — backup adalah salinan data (satu alat); disaster recovery adalah rencana memulihkan data **dan** sistem setelah gangguan, yang memakai backup, replikasi, serta *failover*. Backup saja jarang cukup untuk RTO singkat karena pemulihan cepat menuntut *high availability*.
2. **"Apa bedanya RPO dan RTO?"** — RPO mengukur **berapa banyak data** yang boleh hilang (dalam waktu); RTO mengukur **berapa lama** sistem boleh berhenti. Keduanya independen: RPO 1 jam berarti backup minimal tiap jam, sementara RTO 4 jam berarti sistem wajib online kembali dalam 4 jam.
3. **"Apa saja strategi disaster recovery?"** — umumnya empat tingkat sesuai AWS Well-Architected: *backup & restore* (termurah, pemulihan paling lama), *pilot light*, *warm standby*, dan *multi-site active/active* (termahal, RTO/RPO mendekati nol). Makin cepat target pemulihan, makin tinggi biayanya.
4. **"Apa itu Disaster Recovery Center (DRC)?"** — lokasi cadangan (fisik atau cloud) berisi salinan sistem dan data untuk mengambil alih saat situs utama gagal. Di Indonesia, regulasi OJK mewajibkan bank menempatkan DRC di wilayah Indonesia, terpisah secara geografis dari pusat data utama.
5. **"Apakah pindah ke cloud otomatis membuat sistem tahan bencana?"** (opsional ke-5) — tidak otomatis. Cloud menyediakan *building block* (multi-region, replikasi, *failover*), tetapi RPO/RTO tetap hasil desain: SAP HANA System Replication sinkron dapat mencapai RPO 0 detik, sedangkan backup biasa menyisakan RPO di atas nol.

## SAP / partner tech to teach (vendor-neutral di body)

- **SAP HANA System Replication** — nama lengkap di sebutan pertama; mekanisme replikasi basis data SAP HANA. Mode **sinkron** (standby memuat tabel di memori → RPO 0 detik, RTO dalam hitungan menit) untuk *high availability* dalam satu lokasi; mode **asinkron** (tanpa preload) untuk DR lintas lokasi/region. **Verifikasi**: angka RPO 0 detik / RTO "menit" berasal dari sumber vendor (Rackspace/NetApp) — konfirmasi ke SAP Help/dokumentasi HANA resmi sebelum klaim; frame sebagai tipikal, bukan jaminan mutlak.
- **Platform cloud tempat SAP di-DR-kan**: AWS, Google Cloud, Huawei Cloud (yang ditampilkan di halaman solusi Cloud Soltius). Building block DR = multi-AZ/multi-region, replikasi, *failover* DNS/traffic. Posisikan vendor-neutral; Soltius **mengimplementasikan & mendukung**, bukan membuat.
- **Facts the writer/researcher must verify**: (1) empat strategi DR + relasi biaya/RPO/RTO — **AWS Well-Architected, Reliability Pillar** (tersedia versi Bahasa Indonesia); (2) regulasi OJK DRC — **nomor POJK yang tepat & bunyi pasal** (riset menyebut POJK No. 11/POJK.03/2022 tentang Penyelenggaraan Teknologi Informasi oleh Bank Umum — verifikasi di situs OJK, jangan mengarang nomor); (3) angka SAP HANA System Replication (RPO/RTO) — sumber + hedge. JANGAN mengarang angka biaya/kerugian downtime tanpa sumber.

## Soltius anchor (maks 2 self-mention; di Kesimpulan + CTA baris terakhir)

- **Service/credential untuk CTA**: solusi **Cloud** + layanan **Migration**, didukung pengakuan **Best Cloud Partner / Best RISE Partner** dan status **SAP Platinum Partner via United VARs**. Framing: Soltius **merancang, mengimplementasikan, dan mendukung** SAP di atas platform cloud (AWS, Google Cloud, Huawei Cloud) — termasuk arsitektur HA/DR sesuai target RPO/RTO — **bukan membuat** perangkat lunaknya.
- **Placement**: 1 positioning line di `## Kesimpulan` + 1 soft website CTA (soltius.co.id) sebagai **baris terakhir**. TANPA aside Soltius di tengah body.

## Internal links to place (TEPAT 2 — 1 hub + 1 cousin)

- **Hub (own, paling relevan — landing page kosong di sheet, DIPILIH strategist)**: `https://www.soltius.co.id/id/solutions-by-products/cloud` — anchor: `solusi SAP di cloud` (atau variasi natural "hosting SAP di cloud"). *Placement*: inline di H2-3 saat membahas region DR / hosting SAP di cloud. **Alasan**: halaman solusi Cloud Soltius menampilkan AWS, Google Cloud, Huawei Cloud sebagai platform tempat SAP dijalankan — hub paling tepat untuk topik DR yang funnel ke **SAP on Cloud (hosting/IaaS)** sesuai CTA anchor. (Diverifikasi live, Okt 2026: dua tab Ikhtisar + Manfaat & Nilai; menyebut IaaS pada bagian Huawei Cloud.)
- **Cousin (dari cross-link map)**: `https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud` — anchor: `migrasi ERP ke cloud`. **Alasan**: keputusan DR melekat pada keputusan di mana & bagaimana SAP dihosting — region DR, replikasi, dan target RPO/RTO ditentukan saat migrasi ke cloud. Koneksi topikal natural (DR = lapisan ketahanan, migrasi cloud = momen mendesainnya), berbeda dari hub.

> Hanya 2 link. JANGAN tambah link ketiga. TANPA "BACA JUGA" — inline kontekstual saja.

## External citations (1–2 otoritatif, inline)

1. **AWS Well-Architected Framework — Reliability Pillar, "Disaster Recovery (DR) Objectives" / "Tujuan Pemulihan Bencana (DR)"** (`docs.aws.amazon.com/id_id/wellarchitected/latest/reliability-pillar/disaster-recovery-dr-objectives.html` + halaman strategi). Sumber otoritatif untuk definisi RPO/RTO dan empat strategi DR (backup & restore, pilot light, warm standby, multi-site active/active), tersedia versi Bahasa Indonesia. Atribusi "menurut AWS Well-Architected Framework".
2. **OJK — POJK tentang Penyelenggaraan Teknologi Informasi oleh Bank Umum** (riset: POJK No. 11/POJK.03/2022) untuk kewajiban DRC di wilayah Indonesia. **Verifikasi nomor + bunyi pasal di situs OJK** sebelum dikutip; atribusi + tahun. Alternatif pendukung bila perlu standar global: **ISO 22301** (Business Continuity Management) — sebut sebagai standar, bukan angka.

> Hindari outbound ke kompetitor penyedia DR/integrator. Prioritas: AWS Well-Architected (teknis) + OJK/ISO (kepatuhan).

## E-E-A-T signals to embed

- Angka spesifik inline (≥5): 2 sasaran kunci (RPO & RTO), contoh RPO 1 jam, RTO 4 jam, kehilangan ≤59 menit, 4 tingkat strategi DR, RPO 0 detik (SAP HANA sinkron, label sumber), RTO "menit". Pastikan tidak mengarang; angka biaya/kerugian downtime hanya bila ada sumber bertahun.
- Praktik lapangan: "di lapangan, banyak perusahaan punya backup tetapi belum pernah menguji pemulihannya — RTO di atas kertas berbeda jauh dari *recovery time actual* saat simulasi" — framing pengalaman implementasi (jujur, tanpa angka klien).
- Sumber otoritatif: AWS Well-Architected (RPO/RTO + strategi) + OJK/POJK (DRC Indonesia). Keduanya diatribusi + diberi tahun.

## AI Overview & GEO optimization

- **Definition snippet (40–60 kata, WAJIB, SEKALI — blockquote "Ringkasnya:")**: "Ringkasnya, *disaster recovery* (DR) adalah kumpulan kebijakan, prosedur, dan teknologi untuk memulihkan data dan sistem TI secepat mungkin setelah gangguan besar — seperti serangan siber, kegagalan perangkat keras, atau bencana alam. Keberhasilannya diukur lewat dua sasaran: seberapa banyak data boleh hilang (RPO) dan seberapa cepat sistem harus pulih (RTO)." (±55 kata. Writer boleh perhalus; JANGAN diulang di body/H2/FAQ.)
- **Question-first + extractable**: tiap H2 dijawab langsung 40–60 kata (poin baru) sebelum elaborasi.
- **Entity jelas**: Recovery Point Objective (RPO), Recovery Time Objective (RTO), Business Continuity Plan (BCP), Disaster Recovery Center (DRC), SAP HANA System Replication — nama lengkap/expand akronim di sebutan pertama.
- **FAQ**: 3–5 Q&A, parseable untuk FAQPage schema.

## Data captured this run

- **Source(s)**: WebSearch (ID+EN) — Vinchin ID, Zettagrid ID, DigitalEdge ID, Opsio, NaKivo, Convesio, Splunk (RPO/RTO + BC vs DR); AWS Well-Architected (strategi DR, versi ID); Rackspace/NetApp + SAP blog (SAP HANA System Replication RPO/RTO); riset POJK/OJK DRC. WebFetch: AWS DR whitepaper (`docs.aws.amazon.com/.../disaster-recovery-options-in-the-cloud.html`) + halaman solusi Cloud Soltius (konfirmasi hub live).
- **Apr 2026 rank** (report): n/a (keyword bukan bagian set monthly 2026-06; tidak di seo_report_apr2026.md).
- **Volume / KD / trend**: n/a (Ahrefs not connected). Sinyal intent: definisional + "apa itu"/"beda"/"rpo rto"/"strategi" dominan; SERP ID ramai blog penyedia DR → volume jelas ada.
- **SERP features present**: AI Overview likely + PAA (definisional + komparatif).
- **cache_source**: tidak ada (mode conditional/given-angle; tidak memakai per-keyword research cache monthly).

## Notes for SME researcher

Verifikasi: (1) definisi RPO/RTO + empat strategi DR (backup & restore, pilot light, warm standby, multi-site active/active) dan relasinya ke biaya/kecepatan — **AWS Well-Architected, Reliability Pillar** (kutip versi ID bila ada); (2) **nomor POJK yang tepat & bunyi pasal** untuk kewajiban DRC bank di wilayah Indonesia (riset menyebut POJK No. 11/POJK.03/2022 — konfirmasi di jdih/situs OJK, jangan mengarang nomor/tahun); (3) angka **SAP HANA System Replication** (sinkron RPO 0 detik, RTO menit; asinkron untuk DR) — konfirmasi ke SAP Help/dokumentasi HANA resmi, frame sebagai tipikal + hedge; (4) bila memakai angka biaya/kerugian *downtime*, wajib ada sumber + tahun (jangan pakai angka viral tanpa sumber). JANGAN mengarang angka klien Soltius.

## Notes for future strategist runs

Artikel ini TIDAK akan membahas (disisakan untuk sibling): **arsitektur HA/DR SAP di cloud secara mendalam** (multi-AZ, replikasi HANA langkah demi langkah, SAP Landscape Management) — kandidat artikel teknis tersendiri; **komparasi layanan DRaaS/managed DR** antar penyedia; **business continuity plan (BCP) end-to-end** (BIA, tabletop exercise, krisis komunikasi) sebagai topik mandiri; **kedaulatan/residensi data & sovereign cloud Indonesia** (celah yang ditandai cloud-deployment-c01). Biarkan sibling mengambil sudut "cara menyusun DR plan langkah demi langkah" atau "menghitung TCO strategi DR".

## Format overrides (batch 2026-10)

Berlaku untuk artikel ini (override `style_guide.md`; sumber: `conditional/2026-10/style_addendum.md`):

- **Panjang body 1000–1200 kata, target ~1100** (frontmatter `target_word_count: 1100`). <1000 = terlalu tipis; >1200 = pangkas. Hitung via konvensi *cleaned-prose* (`tools/count_words.py`) — jangan vonis dari hitung mentah.
- **ZERO image placeholder** — DILARANG `{IMAGE_NN}`; tidak ada `images.json` / image-planner.
- **Definisi HANYA SEKALI** — di definition snippet ("Ringkasnya:" 40–60 kata). Body/H2/FAQ DILARANG mengulang definisi snippet; H2 definisi "Apa itu DR…" dihapus (sudah di snippet).
- **3–4 H2**: ≥1 question-format (H2-1 & H2-4), ≥1 praktis/terstruktur dengan tabel/angka (H2-2 mini-tabel + contoh, H2-3 tabel strategi). Jawaban langsung 40–60 kata setelah tiap H2 (poin baru), ≥5 angka spesifik inline.
- **FAQ 3–5 Q&A**, jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka.
- **Internal link TEPAT 2**: 1 hub (`.../solutions-by-products/cloud`) + 1 cousin (`.../blog/migrasi-erp-ke-cloud`). TANPA link ketiga, TANPA "BACA JUGA".
- **Sitasi eksternal otoritatif 1–2** inline (AWS Well-Architected + OJK/POJK diprioritaskan; ISO 22301 opsional).
- **Soltius maks 2 self-mention**: 1 positioning line di `## Kesimpulan` + 1 soft website CTA (soltius.co.id) sebagai **baris terakhir**. Soltius = implementator/pendamping SAP (bukan pembuat). CTA anchor = SAP on Cloud (hosting/IaaS) → solusi Cloud Soltius.
- **Anti-AI (style_guide §5)**: variasikan panjang paragraf (burstiness CV ≥0,30), tanpa pembuka klise ("Di era digital…"), em-dash ≤2, jangan tiap H2 → 3 bullet, tanpa adjektiva hype. EYD. JANGAN mengarang angka/tanggal/spesifikasi SAP; hal forward-looking (angka RPO/RTO SAP HANA, nomor POJK) di-hedge sampai diverifikasi.
- **Meta block lengkap** (saran — editor finalisasi):
  - `meta_title`: "Disaster Recovery: Pengertian, RPO, RTO & Manfaat" (≤60 char, keyword di depan)
  - `meta_description`: "Disaster recovery (DR) memulihkan data dan sistem setelah gangguan. Pahami beda RPO dan RTO, strategi backup hingga multi-site, serta manfaatnya bagi bisnis." (140–160 char)
  - `slug`: "disaster-recovery" (keyword-led, ≤60)
  - `secondary_keywords`: ["rpo dan rto","recovery point objective","recovery time objective","disaster recovery plan","business continuity plan","backup dan replikasi","failover","disaster recovery center","SAP HANA System Replication"]
  - `publish_month`: "2026-10"
