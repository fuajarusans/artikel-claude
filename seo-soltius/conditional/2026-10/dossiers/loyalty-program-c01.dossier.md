---
brief_id: "loyalty-program-c01"
researcher_run_date: "2026-10-08"
batch: "conditional-2026-10 (style_addendum.md — 1000–1200 kata target ~1100, FAQ 3–5, definisi sekali di snippet, TANPA image placeholder, internal link TEPAT 2, maks 2 self-mention Soltius)"
target_word_count: 1100
sources_cited: 11
verified_claims: 13
flags: 6
cta_anchor: "SAP Customer Experience (CX)"
---

# Research Dossier: Apa Itu Loyalty Program dan Strateginya untuk Retensi Pelanggan

## TL;DR for the writer

- **Diferensiasi artikel = ekonomi retensi + bagian jujur**, bukan "definisi + jenis + contoh" (yang sudah dikuasai vendor SaaS di SERP). Semua angka ekonomi retensi (5×, +5%→profit, 60–70% vs 5–20%) adalah **heuristik/estimasi bersumber lemah** — WAJIB atribusi + label estimasi + hedging. Jangan sajikan sebagai hukum pasti.
- **Angka HBR 1990 (retensi +5% → profit +25–85%)** adalah klaim yang **sering dikutip** dari Reichheld & Sasser, "Zero Defections" (HBR, September 1990, hlm. 105–111). Rentang asli yang paling umum dilaporkan adalah **25–85%**; sebagian sumber sekunder melebarkannya jadi 25–95%. **Dikritik**: bukan riset orisinal penulis (meminjam experience-curve BCG), dan dibantah Reinartz & Kumar (Journal of Marketing, 2000) serta Ipsos ("Loyalty Myths"). Sajikan dengan atribusi + catatan debat (lihat FLAG #3 + pertanyaan user #3).
- **Portofolio SAP CX TERVERIFIKASI via SAP official** (learning.sap.com + sap.com/products/crm): **SAP Emarsys Customer Engagement** (pemasaran & loyalitas), **SAP Customer Data Cloud** + **SAP Customer Data Platform** (keduanya di bawah payung "SAP Customer Data Solutions"), **SAP Sales Cloud**, **SAP Service Cloud**, **SAP Commerce Cloud**. Fitur loyalty Emarsys (tier/status, dua jenis poin, win-back, referral, pengukuran) **terkonfirmasi** dari SAP Learning + functional specification SAP 2025. Lihat FLAG #1 untuk "SAP Loyalty Management".
- **CONTOH PROGRAM INDONESIA — HATI-HATI, beberapa di brief sudah STALE**: `Alfamart Ponta` **sudah tidak berlaku** (kerja sama berakhir 2019, diganti **AlfaGift**); `AirAsia BIG` **sudah rebranding** jadi **AirAsia rewards / AirAsia points** (Des 2021); `GoRewards` **tidak terkonfirmasi** sebagai program Gojek Indonesia (Go-Points lama berhenti 2020; yang baru = **Gojek PLUS**, langganan 2024). AMAN dipakai: **OVO Points**, **Shopee** (tier + Shopee Coins), **AlfaGift**, **Gojek PLUS**, **Starbucks Rewards Indonesia**. Lihat FLAG #4–#5.
- **Boundary dedup tegas**: sisi PELANGGAN/marketing (konsep loyalty, jenis, strategi, CLV, retensi). TANPA integrasi back-office omnichannel (itu milik omnichannel-retail-c01), TANPA arsitektur teknis Emarsys/CDP. ~1100 kata — prioritaskan 8–12 klaim terkuat.

## Core facts (verified) — prioritaskan 8–12 terkuat

> **Claim**: Angka "retensi +5% dapat menaikkan profit 25–85%" berasal dari Reichheld & Sasser, "Zero Defections: Quality Comes to Services".
> **Number/specific**: HBR, **September 1990, hlm. 105–111**. Rentang yang paling umum dilaporkan: **+25% hingga +85%** profit untuk pengurangan defeksi 5%. Contoh kasus di artikel: sistem cabang bank +85%, pialang asuransi +50%, jaringan servis mobil +30%. Sebagian sumber sekunder menulis rentang hingga **95%**.
> **Source**: Referensi akademik (Baines, *Marketing* 5e research insights, Oxford UP) untuk detail terbitan; Ipsos ("Shattering the Myths of Customer Loyalty" / *Loyalty Myths*) untuk kutipan rentang 25–85%. Diakses 2026-10-08.
> **Confidence**: medium — detail terbitan HBR 1990 high (terkonfirmasi lintas sumber); **angka pastinya DIPERDEBATKAN** → wajib atribusi + hedge (lihat FLAG #3).

> **Claim**: Klaim HBR 1990 dikritik secara metodologis dan empiris.
> **Number/specific**: (a) analisisnya **bukan riset orisinal** Reichheld & Sasser — memakai riset experience-curve BCG era 1960-an; (b) Reinartz & Kumar (*Journal of Marketing*, Oktober 2000, "profitability of long-life customers in noncontractual settings") memberi gambaran lebih berimbang: pelanggan loyal tidak otomatis lebih menguntungkan; (c) Ipsos menyebut ketergantungan penuh pada angka ini "a recipe for financial disappointment".
> **Source**: Ipsos (*Loyalty Myths* excerpt, ipsos.com); ringkasan akademik Reinartz & Kumar 2000. Diakses 2026-10-08.
> **Confidence**: high untuk keberadaan kritik → gunakan sebagai bahan honest hedging, bukan untuk membatalkan angka.

> **Claim**: Biaya mengakuisisi pelanggan baru umumnya beberapa kali lipat biaya mempertahankan pelanggan lama.
> **Number/specific**: rule of thumb **~5×**, tetapi rentang melebar **5×–25× tergantung industri**. Asal-usul angka diperdebatkan (Ipsos melacak versi paling awal ke riset TARP akhir 1980-an; sumber lain mengaitkan ke karya Reichheld/Bain). **Heuristik, bukan konstanta terukur.**
> **Source**: Ipsos *Loyalty Myths*; Penn State Extension (menyebut "general rule of thumb ... five times"); agregator (rentang 5×–25×). Diakses 2026-10-08.
> **Confidence**: low–medium → label "estimasi industri", pakai "sekitar/berkisar", jangan angka mutlak.

> **Claim**: Probabilitas menjual ke pelanggan lama jauh lebih tinggi daripada ke prospek baru.
> **Number/specific**: **~60–70%** (pelanggan lama) vs **~5–20%** (prospek baru). Atribusi terbelah: banyak sumber mengaitkannya ke buku ***Marketing Metrics* (Farris dkk.)**, sebagian ke **Invesp**. Angka ini beredar setidaknya sejak 2015 dan masih dikutip 2026.
> **Source**: *Marketing Metrics* (Farris dkk.) sebagai asal yang paling sering disebut; Invesp/Invespcro sebagai pempopuler. Diakses 2026-10-08.
> **Confidence**: low–medium → label estimasi + atribusi; hindari mengutip blog vendor sebagai fakta mutlak.

> **Claim**: Customer lifetime value (CLV) adalah nilai ekonomi total sebuah hubungan pelanggan.
> **Number/specific**: definisi baku — **present value (nilai sekarang) dari proyeksi arus kas masa depan** dari hubungan pelanggan. *Marketing Metrics* (Farris dkk., 2010) memperlakukannya sebagai satu nilai rupiah yang mengukur potensi laba/rugi pelanggan. Catatan: sebagian definisi memakai **pendapatan** total, sebagian **laba bersih** (dikurangi biaya akuisisi & melayani) — versi pendapatan melebih-lebihkan nilai.
> **Source**: Marketing Dictionary (marketing-dictionary.org); Marketing Study Guide mengutip *Marketing Metrics* (Farris dkk., 2010). Diakses 2026-10-08.
> **Confidence**: high (konsep baku) — jaga konsistensi definisi (rekomendasi: pakai framing "nilai total seumur hubungan pelanggan").

> **Claim**: Portofolio SAP Customer Experience (SAP CX) mencakup lima area — penjualan, layanan, pemasaran, commerce, dan data pelanggan.
> **Number/specific**: produk resmi: **SAP Sales Cloud**, **SAP Service Cloud**, **SAP Emarsys Customer Engagement** (pemasaran), **SAP Commerce Cloud**, dan **SAP Customer Data Solutions** (mencakup **SAP Customer Data Cloud** + **SAP Customer Data Platform**). SAP menyebut solusi data pelanggan "berinteraksi dengan semua solusi lain" — fondasi single source of truth.
> **Source**: SAP Learning — "Summarizing Key Products of SAP CX" & "Connect with purpose with the SAP Customer Experience portfolio" (learning.sap.com, SAP official). Diakses 2026-10-08.
> **Confidence**: high (SAP-official via SAP Learning). Catatan: sap.com memblokir WebFetch langsung (403) — penamaan dikonfirmasi via SAP Learning + judul halaman/PDF SAP.

> **Claim**: SAP Emarsys Customer Engagement adalah platform pemasaran omnichannel SAP yang diposisikan untuk menumbuhkan loyalitas dan pembelian berulang.
> **Number/specific**: SAP memposisikan Emarsys untuk "grow loyalty and repeat sales" lewat engagement omnichannel yang dipersonalisasi berbasis data pelanggan + operasional, dengan machine learning untuk optimasi kampanye & rekomendasi produk. SAP dinobatkan **Leader** di **IDC MarketScape: Worldwide Omni-Channel Marketing Platforms for B2C Enterprises 2023**.
> **Source**: SAP Emarsys product page (sap.com/products/crm/emarsys.html — dikutip via hasil pencarian SAP-domain; 403 saat WebFetch langsung). Nama resmi "SAP Emarsys Customer Engagement" dikonfirmasi lewat judul SAP functional specification 2025. Diakses 2026-10-08.
> **Confidence**: high untuk penamaan & positioning; **klaim IDC MarketScape 2023 akurat tapi atribusikan sebagai pengakuan analis, bukan bukti ROI loyalty.**

> **Claim**: SAP Emarsys memiliki kapabilitas loyalty program berbasis tier dan poin.
> **Number/specific** (dari SAP official): program loyalitas berbasis **tier/status**; **dua jenis poin** — *status points* (menentukan tier) dan *spend points* (mata uang untuk pembayaran, voucher, reward eksklusif); penawaran yang ditargetkan berdasarkan status & perilaku (mis. pelanggan loyal vs berisiko churn); taktik kampanye AI siap pakai; reward tak terbatas pada pembelian; voucher & akses eksklusif; **web/mobile loyalty wallet**. Functional specification SAP 2025 menambah: **loyalty member groups (family accounts)**, **referral program**, **Loyalty API**, dan dukungan **multi-currency & multi-language**; dasbor memantau enrollment, redemption, dan **revenue impact**.
> **Source**: SAP Learning — "Leveraging Emarsys Loyalty in Emails" & "Exploring omnichannel marketing capabilities with SAP Emarsys"; SAP Emarsys Customer Engagement Functional Specifications (English v1 2025, assets.cdn.sap.com). Diakses 2026-10-08.
> **Confidence**: high (SAP-official). Catatan: functional spec memuat disclaimer SAP berhak mengubah spesifikasi — sebut kapabilitas secara umum, jangan janjikan fitur spesifik sebagai tetap.

> **Claim**: SAP Customer Data Cloud menyediakan profil pelanggan terpadu (single source of truth) dengan koneksi front-end ke back-end dan perlindungan data.
> **Number/specific**: SAP mendeskripsikan koneksi prebuilt antar-sistem untuk "a single source of truth for all data between systems" plus perlindungan data di tiap titik sentuh. Ini lapisan data yang membuat personalisasi & program loyalitas berbasis data mungkin (lawan dari "tebak-tebakan").
> **Source**: SAP Learning (positioning SAP CX) + ringkasan portofolio SAP CX. Diakses 2026-10-08.
> **Confidence**: high untuk fungsi umum; jangan sebut modul/versi tak terverifikasi.

> **Claim** (contoh — point-based): Starbucks Rewards adalah program berbasis poin ("Stars") yang berlaku di Indonesia.
> **Number/specific**: di Indonesia, listing aplikasi menyebut **1 Star / Rp6.000** (saldo Starbucks Card) atau **1 Star / Rp12.000** (metode pembayaran lain); laporan 2023 menyebut angka Rp5.000 / Rp10.000. Penukaran mulai dari **25 Stars**. Pembaruan 2023 memperluas pengumpulan Stars ke metode pembayaran lain (sebelumnya wajib Starbucks Card).
> **Source**: Starbucks Indonesia app listing (App Store) + The Jakarta Post / Kontan (Feb 2023). Diakses 2026-10-08.
> **Confidence**: medium — mekanik "poin per transaksi" high; **tarif pastinya tidak pasti/undated** → sebut sebagai "sekitar 1 Star tiap beberapa ribu rupiah" atau beri hedge "tarif dapat berubah".

> **Claim** (contoh — tier-based): Sephora Beauty Insider adalah program berjenjang dengan tiga tingkatan.
> **Number/specific**: tiga tier — **Insider** (gratis), **VIB** (~**$350**/tahun), **Rouge** (~**$1.000**/tahun); perkiraan perolehan poin 1×/1,25×/1,5× (sumber pihak ketiga — verifikasi). Program berfokus di AS & Kanada (~45 juta anggota); **tidak terkonfirmasi beroperasi di Indonesia** — pakai sebagai contoh tier global, jangan implikasikan ada di Indonesia.
> **Source**: Sephora Beauty Insider terms (sephora.com) + guide pihak ketiga (Rivo, LoyaltyRewardCo). Diakses 2026-10-08.
> **Confidence**: high untuk struktur 3 tier & ambang $350/$1.000; multiplier poin medium (pihak ketiga).

> **Claim** (konteks pasar Indonesia): pasar loyalty di Indonesia tumbuh signifikan.
> **Number/specific**: laporan September 2025 memproyeksikan pasar loyalty Indonesia **~US$1,03 miliar pada 2025**, tumbuh **18,3%** per tahun; pemain mapan yang disebut: Shopee, OVO, BCA, Garuda Indonesia.
> **Source**: ResearchAndMarkets via BusinessWire (rilis 2025-09-09). Diakses 2026-10-08.
> **Confidence**: medium — firma riset pasar komersial (bukan SAP/Gartner). Boleh dikutip sebagai konteks permintaan dengan atribusi; opsional.

## Solution focus + Soltius anchor (dari product_matrix.md + brief_tracker)

> `loyalty program` TIDAK ada di `product_matrix.md` (topik ad-hoc). Mapping diturunkan dari brief_tracker (CTA: **SAP Customer Experience (CX)**; use case retail; funnel ke CX) + `company_profile.md` (Soltius punya solusi **Retail** + spesialisasi **CRM**; implements-not-builds). Aturan universal berlaku: implements-not-builds, batch ini **maks 2 self-mention**, no superlatif, no spec karangan.

| What to teach (SAP/partner tech) | Facts to state accurately | Where in article | Soltius service/credential to anchor CTA |
|---|---|---|---|
| Konsep loyalty program & jenisnya (poin, tier, berbayar, cashback, coalition); ekonomi retensi (akuisisi vs retensi, CLV, churn) | Vendor-neutral; angka ekonomi retensi di-hedge + atribusi | Lead → H2 #1–#2 (edukasi generous & netral) | — (edukasi dulu) |
| Peran **data pelanggan terpadu & personalisasi** sebagai penentu keberhasilan program | Tanpa data terpadu, personalisasi = tebak-tebakan (praktik lapangan, first-party, tanpa angka klien) | H2 #3 (langkah 4) | jembatan natural ke SAP CX |
| **SAP Customer Experience (CX)** — contoh platform loyalty berbasis data: **SAP Emarsys Customer Engagement** (kampanye & loyalty: tier/status, dua jenis poin, referral, win-back) + **SAP Customer Data Cloud/Platform** (single customer view) | Nama penuh di sebutan pertama; kapabilitas umum (jangan janjikan fitur tetap); IDC MarketScape 2023 = pengakuan analis | H2 #3 + Kesimpulan | **SAP Platinum Partner via United VARs** — implements/supports |

**Soltius anchor (maks 2 self-mention — BATCH OVERRIDE):**
1. **Positioning line di Kesimpulan**: Soltius — SAP Platinum Partner melalui United VARs, bagian Metrodata Group sejak 1998 — **mendampingi** bisnis menyatukan data pelanggan dan menjalankan program loyalitas berbasis data di atas **SAP Customer Experience**. Framing: implementator/pendamping, **NEVER builds/owns**; tanpa superlatif.
2. **Soft website CTA (baris terakhir)**: ajakan konsultatif ke soltius.co.id; anchor funnel **SAP Customer Experience (CX)**.
Suara praktisi di body **tanpa nama Soltius** diperbolehkan (mis. "di lapangan, program loyalitas gagal bukan karena rewardnya kurang menarik, tetapi karena data pelanggan terserak di banyak kanal sehingga personalisasi jadi tebak-tebakan").

## Authoritative external sources (sitasi final 1–2 inline di artikel)

1. **Harvard Business Review — Reichheld & Sasser (1990)**, "Zero Defections: Quality Comes to Services" (HBR, September 1990, hlm. 105–111) — *backs*: ekonomi retensi (+5% retensi → +25–85% profit) di H2 #1. **SITASI UTAMA — WAJIB label "sering dikutip" + atribusi tahun + catatan bahwa angka diperdebatkan.**
2. **SAP official (SAP Learning / sap.com/products/crm)** — portofolio SAP CX & fitur loyalty SAP Emarsys Customer Engagement — *backs*: penamaan & kapabilitas SAP CX di H2 #3. (URL SAP Learning dapat ditautkan; sap.com 403 untuk WebFetch tapi aman dirujuk sebagai sumber.)
3. *(Opsional pelengkap)* **Ipsos — "Shattering the Myths of Customer Loyalty" / *Loyalty Myths*** — *backs*: catatan kritik terhadap angka retensi (honest hedging). Atau **ResearchAndMarkets (via BusinessWire, 2025)** untuk konteks pasar loyalty Indonesia (~US$1,03 M, +18,3%).

> Hindari outbound ke kompetitor (Qiscus/HashMicro). Prioritas: HBR (ekonomi retensi, dengan hedging) + SAP official (fitur CX/loyalty). Angka 60–70%/5–20% & 5× = estimasi industri, **bukan** sitasi otoritatif — kutip inline dengan label estimasi + atribusi *Marketing Metrics*/Invesp.

## FAQ Q&As (3–5 drafted, Bahasa Indonesia — tiap jawaban 30–60 kata + 1 fakta; JANGAN redefinisi snippet)

### Apa saja jenis program loyalitas pelanggan yang paling umum?
Ada lima jenis utama: berbasis poin (poin per transaksi ditukar reward), berjenjang/tier (manfaat naik tiap tingkatan), berbayar/langganan (iuran untuk manfaat eksklusif), cashback/berbasis belanja (saldo tiap transaksi), dan kemitraan/coalition (poin lintas brand mitra). Pilihan jenis sebaiknya mengikuti frekuensi pembelian dan margin bisnis, bukan sekadar tren.

### Apa contoh loyalty program di Indonesia?
Beberapa yang aktif: OVO Points (poin/cashback dompet digital yang bisa jadi alat bayar di merchant mitra), Shopee (sistem tier plus Shopee Coins dari cashback dan check-in harian), AlfaGift milik Alfamart, Gojek PLUS (langganan sejak 2024), dan Starbucks Rewards. Pasar loyalty Indonesia diproyeksikan sekitar US$1,03 miliar pada 2025.

### Apa bedanya loyalty program dan customer retention?
Keduanya terkait tetapi berbeda level. Customer retention (retensi pelanggan) adalah hasil yang diukur — porsi pelanggan yang bertahan dalam periode tertentu. Loyalty program adalah salah satu taktik untuk mencapainya. Program hanyalah alat; retensi tetap bisa rendah bila produk inti atau layanan lemah.

### Berapa lebih mahal mengakuisisi pelanggan baru dibanding mempertahankan yang lama?
Rule of thumb yang sering dikutip menyebut akuisisi sekitar 5× lebih mahal daripada mempertahankan pelanggan lama, meski estimasi industri melebar ke kisaran 5×–25× tergantung industri. Angka ini heuristik dengan sumber yang diperdebatkan, jadi perlakukan sebagai argumen arah, bukan konstanta pasti.

### Apa itu customer lifetime value (CLV)?
Customer lifetime value adalah estimasi nilai ekonomi total seorang pelanggan sepanjang hubungannya dengan sebuah merek — secara teknis, nilai sekarang (present value) dari proyeksi arus kas masa depan dari pelanggan tersebut. CLV menjadi batas atas wajar untuk biaya akuisisi: bila biaya akuisisi melampaui CLV, akuisisi itu merugi.

## Data table for the writer — jenis program & kapan cocok (H2 #2, elemen terstruktur utama)

| Jenis | Cara kerja | Contoh | Paling cocok untuk |
|---|---|---|---|
| Berbasis poin (point-based) | Poin terkumpul per transaksi, ditukar reward | Starbucks Rewards ("Stars") | Ritel/F&B dengan frekuensi pembelian tinggi |
| Berjenjang (tier-based) | Manfaat & status naik tiap tingkatan | Sephora Beauty Insider (Insider/VIB/Rouge) | Mendorong pelanggan naik kelas belanja |
| Berbayar/langganan (paid) | Iuran untuk manfaat & layanan eksklusif | Amazon Prime; Gojek PLUS (Indonesia, 2024) | Basis pelanggan bernilai/frekuensi tinggi |
| Cashback/berbasis belanja | Saldo atau kredit tiap transaksi | OVO Points | Dompet digital & marketplace |
| Kemitraan (coalition) | Poin dapat dikumpulkan/ditukar lintas brand mitra | AirAsia rewards (ekosistem travel & lifestyle) | Ekosistem dengan banyak mitra |

> Setiap baris = satu klaim quotable. **Aturan praktis yang ditegaskan**: pilih jenis sesuai **frekuensi pembelian & margin**, bukan ikut tren. **Jangan** sebut nama tier spesifik Shopee ("Silver/Gold/Platinum") sebagai fakta tanpa verifikasi (lihat FLAG #5). Untuk baris coalition, pakai nama terkini **AirAsia rewards** (bukan "BIG Points" yang sudah usang).

## Edge cases & nuance

- **Loyalty program ≠ diskon.** Program diskon murni dapat mengikis margin tanpa membangun loyalitas sejati — pelanggan loyal ke harga, bukan ke merek. Reward berbasis status/pengalaman cenderung lebih kuat daripada potongan harga terus-menerus.
- **Loyalty program vs customer retention**: program = taktik; retensi = hasil terukur. Jarang dibedakan kompetitor — ini sudut jujur yang bernilai.
- **Data terpadu = penentu, bukan pelengkap.** Tanpa satu pandangan pelanggan lintas kanal (online, toko, app), personalisasi jadi tebak-tebakan. Di sinilah lapisan data pelanggan (mis. SAP Customer Data Cloud/Platform) menjadi fondasi — jembatan natural ke SAP CX tanpa jualan keras.
- **Kategori frekuensi-pembelian rendah** (mis. pembelian besar sekali-sekali) kurang cocok untuk program poin klasik.
- **Pengukuran wajib.** Program tanpa metrik (retention rate, CLV, pendapatan anggota vs non-anggota) = biaya tanpa bukti ROI. SAP Emarsys sendiri menyorot dasbor "revenue impact" — ukur, jangan hanya bagi poin.

## Flags (open factual risk) — 6

- ⚠️ **FLAG #1 — "SAP Loyalty Management" sebagai produk terpisah/baru**: satu sumber konsultan pihak ketiga menyebut SAP sedang membangun produk "Loyalty Management" terpisah dengan kapabilitas wallet/cross-market lebih lanjut. **TIDAK dapat dikonfirmasi dari sumber SAP resmi.** → **Rekomendasi**: JANGAN sebut "SAP Loyalty Management" sebagai produk. Cukup "kapabilitas loyalty di dalam **SAP Emarsys Customer Engagement**" (terverifikasi). Nama resmi yang aman: SAP Emarsys Customer Engagement, SAP Customer Data Cloud, SAP Customer Data Platform, SAP Sales/Service/Commerce Cloud.
- ⚠️ **FLAG #2 — Angka ekonomi retensi (5×, 60–70%/5–20%)**: semua heuristik dengan sumber primer lemah/diperdebatkan (TARP vs Bain vs *Marketing Metrics* vs Invesp). → **Rekomendasi**: tulis dengan "sekitar/berkisar" + label "estimasi industri" + atribusi; jangan angka mutlak. Lihat pertanyaan user #3.
- ⚠️ **FLAG #3 — Angka HBR 1990 (+25–85% / hingga 95%)**: sumber sekunder tidak sepakat rentangnya (25–85% vs 25–95%); teks asli tidak dapat diakses penuh; klaim dikritik (bukan riset orisinal; dibantah Reinartz & Kumar 2000; Ipsos "Loyalty Myths"). → **Rekomendasi**: pakai "+25% hingga +85%" sebagai rentang yang paling umum dilaporkan, atribusikan ke **HBR 1990 (Reichheld & Sasser)**, beri frasa "angka yang sering dikutip" + 1 kalimat bahwa sebagian akademisi mengkritiknya. Lihat pertanyaan user #3.
- ⚠️ **FLAG #4 — Contoh Indonesia yang STALE di brief**: (a) **Alfamart Ponta** — kerja sama Ponta–Alfamart **berakhir 2019**, diganti **AlfaGift**; JANGAN tulis "Alfamart Ponta" sebagai program aktif. (b) **AirAsia BIG / BIG Points** — **rebranding Des 2021** jadi **AirAsia rewards / AirAsia points**; pakai nama terkini. (c) **GoRewards** — **bukan** program Gojek Indonesia yang terkonfirmasi; Go-Points lama **berhenti Jan 2020**; yang terverifikasi kini **Gojek PLUS** (langganan, diluncurkan 2024). → **Rekomendasi**: ganti contoh dengan OVO Points, Shopee (tier + Coins), AlfaGift, Gojek PLUS, Starbucks Rewards.
- ⚠️ **FLAG #5 — Mekanik program spesifik**: nama tier Shopee ("Silver/Gold/Platinum"), tarif Stars Starbucks (Rp5.000 vs Rp6.000), dan multiplier poin Sephora (1,25×/1,5×) **bervariasi/undated/pihak ketiga**. → **Rekomendasi**: deskripsikan mekanik secara umum ("sistem tier", "poin per beberapa ribu rupiah"), jangan kutip angka tier/tarif spesifik sebagai fakta tetap. Sephora: pakai sebagai contoh tier **global**, jangan implikasikan beroperasi di Indonesia.
- ⚠️ **FLAG #6 — Klaim fitur SAP sebagai tetap/terukur**: functional specification SAP 2025 memuat disclaimer bahwa SAP berhak mengubah spesifikasi; IDC MarketScape 2023 adalah pengakuan analis, bukan bukti ROI loyalty. → **Rekomendasi**: sebut kapabilitas Emarsys (tier/status, dua jenis poin, referral, win-back, dasbor revenue impact) secara umum; jangan janjikan fitur spesifik sebagai permanen; jangan sajikan IDC MarketScape sebagai angka ROI.

## Internal links (BATCH OVERRIDE: TEPAT 2 — dari brief, dikonfirmasi strategist 2026-10-08)

- **Hub (funnel ke CTA SAP Customer Experience)**: `https://www.soltius.co.id/id/solutions-by-products/retail-produk` — anchor natural "solusi retail" / "pengalaman pelanggan omnichannel" — halaman Solusi Retail Soltius (menampilkan iVend Retail) adalah aset terdekat dengan tema loyalty/retensi/CX. **Honest note (dari strategist, verified resolve 200 — penulis tetap cek 200/OK)**: halaman berpusat pada retail management (iVend), **BUKAN** halaman loyalty/SAP CX khusus — tautkan sebagai "solusi pengalaman pelanggan ritel", JANGAN klaim ia membahas program loyalitas SAP CX. Tempatkan inline di paruh akhir (H2 #3/#4 saat membahas data pelanggan terpadu & personalisasi).
- **Cousin (analitik — ke segmentasi & pengukuran CLV)**: `https://www.soltius.co.id/id/blog/business-intelligence` — anchor natural "business intelligence" / "analitik pelanggan" — loyalty yang efektif bergantung pada segmentasi, pengukuran CLV/churn, dan analitik pendapatan anggota. Tautkan inline di H2 #3 (langkah segmentasi/pengukuran).
- *Catatan*: total tautan internal **TEPAT 2**. `omnichannel-retail-c01` (sibling retail) BELUM live → JANGAN ditautkan. TANPA "BACA JUGA".

## Definition snippet draft (40–60 kata — SATU-SATUNYA definisi; body dilarang mengulang)

> **Ringkasnya:** loyalty program (program loyalitas pelanggan) adalah strategi terstruktur untuk mempertahankan pelanggan dengan memberi penghargaan atas pembelian atau keterlibatan berulang — lewat poin, tingkatan keanggotaan, cashback, atau akses eksklusif — agar pelanggan terus memilih merek yang sama meski tersedia alternatif.

*(≈45 kata; entity utama: loyalty program. Supporting keyword "program loyalitas pelanggan" hidup di sebutan pertama.)*

## Catatan/pertanyaan untuk user (user minta ditanyai — WAJIB dikonfirmasi sebelum/saat menulis)

1. **Landing page/hub**: kolom hub di sheet kosong. Karena soltius.co.id **tidak punya halaman khusus CX/CRM/loyalty** (dikonfirmasi dari `solutions-by-products/`: hanya ERP, Analytics, Data Mgmt, HCM, Content&Collab, Retail, Cloud, Mobile, SCM, Security, Sustainability), hub yang dipilih = halaman **Solusi Retail** (`/id/solutions-by-products/retail-produk`) sebagai funnel ke SAP CX. **Mohon konfirmasi**: setuju halaman Solusi Retail ini, atau ada halaman soltius.co.id lain yang lebih Anda inginkan sebagai funnel?
2. **Portofolio SAP Customer Experience**: penamaan terkini **terverifikasi via SAP Learning / sap.com** (SAP Emarsys Customer Engagement; SAP Customer Data Cloud + SAP Customer Data Platform; SAP Sales/Service/Commerce Cloud) — bukan lagi sekadar sumber sekunder. **Mohon arahan framing**: apakah Anda ingin **menonjolkan SAP Emarsys sebagai mesin loyalitas** (fitur tier/status, dua jenis poin, referral, win-back, dasbor revenue impact — semua SAP-official), atau framing **SAP CX yang lebih umum** (CX sebagai platform penyatu data + personalisasi)?
3. **Statistik ekonomi retensi**: angka HBR 1990 (retensi +5% → profit +25–85%) dan rule of thumb akuisisi ~5× banyak dikutip tetapi **sumber primernya lemah/diperdebatkan** (dikritik Reinartz & Kumar 2000 + Ipsos). Saya instruksikan penulis untuk **hedge + atribusi hati-hati**. **Mohon konfirmasi**: OK memakai angka-angka ini dengan hedging, atau Anda ingin angka ini **dihilangkan** sama sekali?

## Research method notes (degradasi — dicatat)

- WebFetch Google SERP **diblokir** (notice error) → SERP/PAA dari WebSearch fallback (indikatif). Ahrefs/GSC **tidak terhubung** (volume/KD = n/a).
- WebFetch `sap.com/products/crm/emarsys.html` **403** → penamaan & kapabilitas SAP CX dikonfirmasi via **SAP Learning (learning.sap.com — SAP official)** + judul **SAP functional specification 2025 (assets.cdn.sap.com)** + snippet domain sap.com. Confidence tetap high karena bersumber SAP-official (bukan blog partner).
- Contoh program Indonesia & internasional diverifikasi via WebSearch 2026-10-08; temuan stale/unconfirmed di-flag (FLAG #4–#5).
