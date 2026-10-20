---
keyword: "oee adalah"
keyword_slug: "oee"
landing_page: ""
month: "2026-08"
brief_id: "oee-c01"
angle: "oee-rumus-tiga-faktor-dan-contoh-perhitungan"
angle_hash: "sha1:6c21f3a89770"
search_intent: "informational"
target_word_count: 900
strategist_run_date: "2026-07-17"
mode: "conditional-given-angle"
batch: "conditional-2026-08 (style_addendum.md WAJIB — 800–1000 kata, tanpa image placeholder, FAQ 2–3, 2 internal link)"
dedup_result: "DISTINCT — Jaccard tertinggi ≈0.15 vs digital-manufacturing-04 (< 0.4); tidak ada tabrakan angle_hash di 102 hash yang diperiksa. ⚠️ CATATAN MENGIKAT: digital-manufacturing-04 (2026-06) SUDAH memuat rumus OEE, tabel komponen, DAN benchmark 85% — lihat bagian 'Distinct angle vs. history' untuk boundary yang mengikat."
---

# Apa Itu OEE (Overall Equipment Effectiveness) dan Cara Menghitungnya

> Working Title diberikan user — substansi dipertahankan apa adanya. H1 = **58 karakter** (dalam band 50–60), primary keyword `OEE` ada di 9 karakter pertama. Tidak ada perubahan angle.
>
> **H1 (artikel):** Apa Itu OEE (Overall Equipment Effectiveness) dan Cara Menghitungnya
> **Meta title (≤60):** OEE Adalah: Rumus 3 Faktor dan Cara Menghitungnya *(47 char)*
> **Meta description (140–160):** OEE adalah metrik efektivitas mesin dari tiga faktor: availability, performance, quality. Pelajari rumus OEE, contoh perhitungan satu shift, dan arti nilai 85%. *(158 char)*
> **Slug (≤60):** oee-adalah-rumus-cara-menghitung *(31 char)*

## Hook hypothesis

Plant manager jarang kesulitan menyebut angka OEE pabriknya. Yang sulit adalah menjawab pertanyaan lanjutan: angka itu datang dari mana. SERP Bahasa Indonesia untuk "oee adalah" padat (Kledo, Accurate, LeapFactor, Ilmu Manajemen Industri, 8ThinkTank, Sasana Digital, PQM, Jodoo, anakteknik.co.id, plus beberapa PDF akademik di Neliti) tetapi hampir seragam: definisi → tiga komponen → `OEE = A × P × Q` → "85% itu kelas dunia". Tiga celah menganga. Pertama, **hampir tidak ada yang memberi rumus turunan tiap faktor** dengan variabel bernama — Availability = Run Time ÷ Planned Production Time, Performance = (Ideal Cycle Time × Total Count) ÷ Run Time, Quality = Good Count ÷ Total Count. Pesaing menulis "Availability mengukur waktu mesin berjalan dibanding waktu dijadwalkan" lalu berhenti, sehingga pembaca tahu konsepnya tetapi tetap tidak bisa menghitung dari data shift-nya sendiri. Kedua, **angka 85% disodorkan tanpa asal-usul** — disebut "standar dunia" atau "nilai ideal" seolah turun dari langit, padahal ia adalah hasil perkalian tiga minimum Nakajima (90% × 95% × 99% = 84,6%) dan berasal dari pabrik otomotif Jepang bervolume tinggi. Ketiga, **tidak ada yang menegaskan bahwa planned stop dikecualikan** dari Planned Production Time — sumber kesalahan hitung paling umum di lapangan. Soltius kredibel di titik ini karena bekerja tepat di lapisan tempat OEE berhenti jadi rekap spreadsheet dan mulai jadi angka yang dihitung sistem: sebagai mitra implementasi SAP yang mendampingi SAP Digital Manufacturing di industri manufaktur — bukan pembuat softwarenya.

## Primary keyword

`oee adalah`

Supporting keyword (given): `cara menghitung oee`

(Pola pencari Indonesia: akronim Inggris + penjelasan Bahasa Indonesia. Intent definisional bercampur *how-to*/rumus — judul yang diberikan sudah memuat keduanya. Artikel ini menjadi halaman kanonik untuk intent `oee adalah`; di cluster `digital-manufacturing`, OEE selama ini hanya **penumpang** di artikel bertema lain, tidak pernah menjadi entitas utamanya.)

## Secondary / LSI keywords (8–12)

- cara menghitung OEE
- rumus OEE
- Overall Equipment Effectiveness
- availability, performance, quality
- efektivitas peralatan menyeluruh
- Planned Production Time / Run Time
- Ideal Cycle Time
- downtime tak terencana
- TPM (Total Productive Maintenance)
- world-class OEE 85%
- six big losses
- TEEP (Total Effective Equipment Performance)
- SAP Digital Manufacturing

## Search intent & SERP feature targets

- **Stage**: awareness (top-funnel definisional + *how-to*/rumus intent)
- **Format**: definition snippet + tabel tiga rumus turunan + contoh perhitungan bertahap satu shift
- **Surface targets**:
  - [x] AI Overview (Google SGE) / AI-engine citation (Perplexity, ChatGPT) — definisi 40–60 kata + tabel rumus + aritmetika quotable
  - [x] Featured Snippet (definisi + rumus + tabel)
  - [x] People Also Ask

## SERP landscape (live scrape today)

> **Catatan metode:** WebFetch ke `google.com/search?q=oee+adalah&hl=id&gl=id` **terblokir** (Google mengembalikan halaman error/consent, bukan SERP) — konsisten dengan seluruh run conditional 2026-06, 2026-07, dan `sku-c01`/`reorder-point-c01` batch ini. Degradasi anggun ke **WebSearch** (2026-07-17, 6 kueri ID + EN) sesuai SOP `CLAUDE.md` §11. Volume/KD: `n/a (Ahrefs not connected)`.

**Top competing pages (WebSearch, kueri Bahasa Indonesia):**
1. `https://kledo.com/blog/overall-equipment-effectiveness-oee/` — Kledo — *angle*: "Pengertian, Rumus, dan Contohnya"; pesaing terdekat dengan judul kita; funnel software akuntansi.
2. `https://www.leapfactor.io/blog/oee-adalah-rumus-cara-menghitung-meningkatkan-efisiensi-mesin-2025` — LeapFactor — *angle*: "Rumus, Cara Menghitung & Meningkatkan Efisiensi Mesin"; vendor MES lokal, satu-satunya yang menyebut benchmark Indonesia (60–70% rata-rata) — **tanpa sumber**.
3. `https://ilmumanajemenindustri.com/cara-menghitung-oee-overall-equipment-effectiveness-tpm/` — Ilmu Manajemen Industri — *angle*: OEE dalam kerangka TPM; paling teknis di SERP ID, satu-satunya yang menautkan OEE ke TPM secara eksplisit.
4. `https://accurate.id/marketing-manajemen/oee-adalah/` — Accurate — *angle*: "Pengertian, Manfaat, dan Cara Menghitungnya"; standar SME.
5. `https://8thinktank.com/overall-equipment-effectiveness/` — Think Tank Solusindo — *angle*: "Definisi, Manfaat, dan Cara Perhitungannya"; funnel ERP.
6. `https://sasanadigital.com/metrik-oee-...` & `https://pqm.co.id/bagaimana-penerapan-overall-equipment-effectiveness-yang-benar/` — Sasana Digital / PQM — *angle*: OEE sebagai metrik + penerapan TPM; PQM lembaga training.
7. `https://www.jodoo.com/blog/id-id/penjelasan-arti-oee` & `https://www.anakteknik.co.id/...` — Jodoo / anakteknik — *angle*: arti + kenapa penting; ringan.
8. `https://media.neliti.com/media/publications/127943-ID-analisis-overall-equipment-effectiveness.pdf` — jurnal akademik ID — *angle*: studi kasus OEE di pabrik; format skripsi, bukan pesaing SEO langsung tetapi menandakan intent akademik ikut hadir.

**Gaps to exploit** (yang TIDAK dicakup baik oleh top hasil):
- **Rumus turunan tiap faktor dengan variabel bernama.** Ini celah terbesar. Pesaing berhenti di definisi rasio ("waktu berjalan dibanding waktu dijadwalkan"); nyaris tidak ada yang menulis `Availability = Run Time ÷ Planned Production Time`, `Performance = (Ideal Cycle Time × Total Count) ÷ Run Time`, `Quality = Good Count ÷ Total Count`. Akibatnya pembaca tidak pernah bisa menghitung dari data shift-nya sendiri — padahal itu persis yang dijanjikan kata kunci `cara menghitung oee`.
- **Asal-usul angka 85%.** Semua pesaing menyebut 85% sebagai "standar dunia"/"nilai ideal" tanpa provenance. Fakta terverifikasi run ini: 85% adalah **hasil perkalian tiga minimum Nakajima** (90% × 95% × 99% = **84,6%**, dibulatkan), dari kerangka TPM yang ia perkenalkan di Japan Institute of Plant Maintenance (JIPM). Menjelaskan ini sekaligus memenuhi syarat tracker ("benchmark HANYA bila terverifikasi + sebutkan konteks/sumbernya").
- **Planned stop dikecualikan dari Planned Production Time.** Tidak ada pesaing yang menegaskannya. Ini penyebab salah hitung paling umum: waktu istirahat/changeover terencana dihitung sebagai downtime (OEE jadi terlalu rendah), atau OEE diukur terhadap waktu kalender (itu TEEP, bukan OEE).
- **Rumus ringkas yang memvalidasi hitungan.** `OEE = (Good Count × Ideal Cycle Time) ÷ Planned Production Time` menghasilkan angka identik dengan A × P × Q. Tidak satu pun hasil SERP ID menyebutnya. Nilainya ganda: jalan pintas sekaligus alat cek silang.
- **OEE sebagai kaskade waktu (lensa sistem).** Pesaing menyajikan OEE berbasis hitungan unit. Dokumentasi SAP (terverifikasi run ini) menghitung ketiga faktor sebagai **rasio waktu** melalui kaskade Loading Time → Net Production Time → Net Operating Time → Value Operating Time. Sama konsepnya, beda representasinya — dan tidak ada yang menjelaskan ini.
- **Tidak ada kejujuran batas**: tidak ada yang bilang 85% berasal dari pabrik otomotif Jepang bervolume tinggi dan **tidak otomatis berlaku** untuk pabrik *high-mix/low-volume*.

**People Also Ask / kueri turunan** (dari WebSearch ID — mewakili PAA; SERP scrape terblokir):
1. Apa itu OEE (Overall Equipment Effectiveness)?
2. Bagaimana rumus OEE?
3. Bagaimana cara menghitung OEE beserta contohnya?
4. Berapa nilai OEE yang baik / berapa standar OEE world-class?
5. Apa saja tiga komponen OEE?
6. Apa penyebab nilai OEE rendah?
7. Apakah waktu istirahat dihitung sebagai downtime dalam OEE?
8. Apa bedanya OEE dan TEEP?
9. Apakah OEE 100% mungkin dicapai?

## Distinct angle vs. history

- **Closest prior article in this cluster**: `digital-manufacturing-04` (monthly 2026-06, "Predictive Maintenance dan OEE dalam Digital Manufacturing: Dua Pilar Pabrik Pintar Berbasis Data", `sha1:f2b0e93c5d47`, committed ke `articles_history`). Tetangga berikutnya: `digital-manufacturing-01` (pillar smart factory), `digital-manufacturing-03` (ROI), `sap-pp-c01` & `bill-of-materials-c01` (2026-07), `mrp-c01` (2026-06).

- **⚠️ KOREKSI TERHADAP CATATAN TRACKER (wajib dibaca).** Tracker row 10 mengesankan OEE masih ruang kosong dan hanya meminta cek terhadap cluster digital-manufacturing. **Kenyataannya jauh lebih rapat dari itu**, dan strategist mencatatnya secara terbuka: `digital-manufacturing-04` **sudah memuat** (a) H2 berjudul **"Apa Itu OEE dan Mengapa Ini Menjadi Standar Utama Efisiensi Pabrik?"**, (b) rumus `OEE = Availability × Performance × Quality`, (c) **tabel komponen** lengkap dengan definisi rasio + Target World-Class per komponen (≥90% / ≥95% / ≥99,9% / ≥85%), (d) **benchmark 85%** dengan sitasi Evocon + rata-rata global 55–65%, (e) atribusi ke kerangka TPM Seiichi Nakajima, (f) fakta MESA International bahwa OEE *self-reported* biasanya 10–18 poin lebih tinggi dari OEE terukur, dan (g) FAQ **"Apa rumus OEE dan apa artinya nilai 85%?"**. Selain itu `digital-manufacturing-01` memuat FAQ **"Apa itu OEE dan mengapa penting dalam pabrik digital?"** (rumus + "MESA International: kelas dunia 85%, pabrik konvensional 40–60%"). Instruksi dedup tracker tetap **DIIKUTI** (resolusi diberikan → verdict `distinct`), tetapi diferensiasinya **harus jauh lebih dalam** dari sekadar "menulis rumus 3 faktor + contoh", karena rumus tingkat-atas dan benchmark-nya **sudah ada di dua artikel lain**. Boundary di bawah bersifat **mengikat** — bukan saran.

- **⚠️ INKONSISTENSI KORPUS YANG DITEMUKAN (untuk editor/curator).** Dua artikel lama saling berbeda soal angka yang sama: `digital-manufacturing-01` menulis *"Menurut MESA International, kelas dunia ada di kisaran 85%; pabrik konvensional umumnya 40–60%"*, sedangkan `digital-manufacturing-04` menulis *"85% … menurut data 50+ negara yang dikompilasi Evocon. Rata-rata pabrik manufaktur diskrit global berada di kisaran 55–65%"*. Rata-rata industrinya berbeda (40–60% vs 55–65%) dan atribusi benchmark-nya berbeda (MESA vs Evocon). Artikel ini **tidak mengulang klaim rata-rata industri sama sekali** (lihat boundary) dan mengatribusikan 85% ke sumber primernya (Nakajima/JIPM), bukan ke blog vendor. Inkonsistensi lama **tidak diperbaiki di sini** — dicatat untuk pembersihan terpisah.

- **How this brief differs**: di `digital-manufacturing-04`, OEE adalah **salah satu dari dua pilar** dan berfungsi sebagai *pengukur* yang membenarkan investasi predictive maintenance; entitas utamanya adalah predictive maintenance, kata kunci primernya `digital manufacturing`, dan OEE dibahas pada level **konseptual** (apa artinya, berapa benchmark-nya) tanpa satu pun perhitungan aktual. Di sini OEE adalah **entitas utama** dengan kata kunci `oee adalah`, dan seluruh artikel adalah **mekanika perhitungannya**. Kedalaman yang tidak dimiliki artikel mana pun di korpus: (a) **tiga rumus turunan dengan variabel bernama** (Run Time, Planned Production Time, Ideal Cycle Time, Total Count, Good Count); (b) **contoh perhitungan penuh dari data mentah satu shift** menuju ketiga faktor lalu OEE; (c) **rumus ringkas** `(Good Count × Ideal Cycle Time) ÷ Planned Production Time` sebagai jalan pintas + cek silang; (d) **provenance 85%** sebagai perkalian 90% × 95% × 99% = 84,6% dari minimum Nakajima + konteks pabrik otomotif Jepang bervolume tinggi; (e) **planned stop dikecualikan** dari Planned Production Time; (f) **kaskade waktu SAP** (Loading Time → Net Production Time → Net Operating Time → Value Operating Time). Tidak satu pun dari enam poin ini ada di `digital-manufacturing-04` maupun `-01`.

- **BOUNDARY MENGIKAT untuk writer & researcher** (anti-kanibalisasi):
  - **JANGAN** membahas predictive maintenance dalam bentuk apa pun: 4 tipe maintenance (reaktif/preventive/CBM/predictive), cara kerja predictive maintenance, lima lapisan arsitektur (sensor → edge → cloud analytics → work order → feedback loop), retrofit sensor mesin lama, kritikalitas mesin, integrasi OT-IT, SAP Asset Intelligence Network, SAP S/4HANA Plant Maintenance (PM) — **semua milik `digital-manufacturing-04`**. Predictive maintenance boleh muncul **maksimal 0 kali**; artikel ini tentang menghitung, bukan tentang merawat.
  - **JANGAN** mereproduksi **tabel komponen + Target World-Class per komponen** (Availability ≥90%, Performance ≥95%, Quality ≥99,9%, OEE ≥85%) — itu tabel `digital-manufacturing-04`. Angka 90/95/99 hanya boleh muncul **sekali, dalam prosa**, sebagai penjelasan asal-usul 84,6% di H2 #3 — bukan sebagai tabel target.
  - **JANGAN** mengulang **rata-rata industri** (40–60%, 55–65%), **persentase pabrik yang mencapai 85%** (~10%), sitasi **Evocon**, maupun fakta **MESA International** soal inflasi OEE *self-reported* 10–18 poin — semuanya sudah dipakai `digital-manufacturing-04` / `-01`. Benchmark di artikel ini terbatas pada **angka 85% + asal-usulnya + batas keberlakuannya**.
  - **JANGAN** membedah MES, ISA-95, arsitektur 4 lapisan pabrik digital, atau perbandingan pabrik konvensional vs digital — milik `digital-manufacturing-01`.
  - **JANGAN** membahas ROI/biaya/payback digitalisasi manufaktur — milik `digital-manufacturing-03`.
  - **JANGAN** melebar ke **MRP** (netting/lotting/offsetting, MPS, MRP II) — milik `mrp-c01`; ke **modul SAP PP / PP-DS / tipe manufaktur** — milik `sap-pp-c01`; ke **struktur BOM** — milik `bill-of-materials-c01`. Tracker row 10 secara eksplisit memagari ini.
  - **ANGKA CONTOH WAJIB BARU.** Jangan memakai ulang angka `digital-manufacturing-04` (90% × 95% × 99% = 84,6%; 55–65%; ~10% pabrik; 10–18 poin) maupun `digital-manufacturing-01` (40–60%). Brief ini menetapkan set angka baru & terverifikasi: **shift 480 menit, planned stop 30 menit, Planned Production Time 450 menit, downtime tak terencana 90 menit, Run Time 360 menit, Ideal Cycle Time 0,45 menit/unit, Total Count 720 unit, Good Count 684 unit → A 80% × P 90% × Q 95% = OEE 68,4%.**

- **Subtopic overlap (Jaccard) with closest prior**: subtopik brief ini = {definisi OEE, tiga faktor OEE, rumus Availability, rumus Performance, rumus Quality, planned stop dikecualikan dari PPT, contoh perhitungan satu shift dari data mentah, rumus ringkas OEE, asal-usul benchmark 85% (Nakajima 90×95×99), batas keberlakuan benchmark, OEE vs TEEP, six big losses, kaskade waktu OEE di SAP, SAP Digital Manufacturing for Insights} (14) vs subtopik `digital-manufacturing-04` = {rumus OEE A×P×Q, tabel komponen + target world-class, benchmark 85%/55–65%/Evocon, inflasi OEE self-reported (MESA), predictive vs preventive maintenance, 4 tipe maintenance, cara kerja predictive maintenance, 5 lapisan arsitektur, SAP Digital Manufacturing for Insights, SAP Asset Intelligence Network, SAP S/4HANA Plant Maintenance, IIoT sensor pabrik, kapan preventive cukup, integrasi OT-IT, biaya predictive vs reaktif, retrofit sensor mesin lama} (16). Irisan efektif = {rumus OEE A×P×Q, tiga faktor/komponen OEE, benchmark 85%, SAP Digital Manufacturing for Insights} = 4 dari union 26 → **Jaccard ≈ 0.15 (< 0.4 ✓)**. Irisan ini **diakui jujur** — itulah alasan boundary di atas dibuat mengikat.
- **Cek permukaan dedup lain**: vs `digital-manufacturing-01` (pillar smart factory) → irisan {rumus OEE, benchmark 85%, SAP Digital Manufacturing} = 3 dari union ~26 → **≈ 0.12**; OEE di sana hanya 1 baris tabel + 1 FAQ, tanpa perhitungan. Vs `digital-manufacturing-03` (ROI) → irisan {OEE sebagai nilai bisnis} = 1 → **≈ 0.04**. Vs `sap-pp-c01` (2026-07) → **≈ 0.05**; brief-nya secara eksplisit **memesan** MES/OEE/shop-floor untuk cluster `digital-manufacturing` ("JANGAN bahas MES/OEE/shop-floor digital — milik cluster `digital-manufacturing`") sehingga tidak ada tumpang tindih dua arah. Vs `mrp-c01` (2026-06) → **≈ 0.04**; vs `bill-of-materials-c01` (2026-07) → **≈ 0.03**. Vs `data-warehouse-per-industri-use-case` (history, menyebut "OEE" sebagai satu item KPI manufaktur) → **≈ 0.05**. Vs `monthly_runs/2026-08/final/` (21 artikel: BI ×5, DW ×5, ERP-cloud ×3, clean-core ×4, WMS ×4) → tidak ada yang menyentuh OEE. Vs `conditional/2026-08` sibling (13 brief lain) → `reorder-point-c01` & `inventory-turnover-c01` berbagi pola "rumus + contoh" tetapi domainnya persediaan, bukan efektivitas mesin → **≈ 0.05**. **angle_hash `sha1:6c21f3a89770` tidak berbenturan** dengan 102 hash unik yang diperiksa di `articles_history/` + `conditional/2026-06` + `conditional/2026-07` + `conditional/2026-08` + `monthly_runs/2026-06..2026-08`. **Hasil dedup: DISTINCT — aman ditulis, dengan boundary di atas ditegakkan editor.**

## Article skeleton — H2s the writer should expand (BATCH OVERRIDE: 3–4 H2 SAJA)

> Lead ≤80 kata (pain konkret + keyword + janji artikel, TANPA roadmap) → definition snippet blockquote "Ringkasnya:" 40–60 kata → body 4 H2 ramping → FAQ 3 → Kesimpulan ≤80 kata → soft CTA baris terakhir. **DILARANG H2 definitional "Apa Itu OEE?"** — meskipun judul memuat frasa "Apa Itu OEE", snippet sudah menunaikan definisinya, dan mengulangnya sebagai H2 melanggar addendum §2. Kepanjangan akronim (*Overall Equipment Effectiveness*) cukup di-expand sekali di snippet. Info baru yang biasanya membenarkan H2 definitional (asal-usul istilah/standar) **sudah dialokasikan ke H2 #3**, tempatnya lebih tepat karena ia menjelaskan angka, bukan mendefinisikan ulang entitas.
>
> **Budget kata (panduan, total ≈ 943):** lead 70 · snippet 50 · H2#1 165 · H2#2 225 · H2#3 140 · H2#4 90 · FAQ 3×40 = 120 · Kesimpulan 70 · CTA 18. Bila melewati 1000, pangkas H2#4 lalu FAQ jadi 2 — **jangan** pangkas contoh perhitungan (itu janji judul).

1. **H2 (question-format + tabel)**: "Apa Saja Tiga Faktor dalam Rumus OEE?" — *covers*: jawaban langsung 40–60 kata berisi poin BARU (ketiga faktor bukan sekadar nama komponen — **masing-masing punya rumus turunan sendiri** dengan variabel yang harus diambil dari data shift; tanpa rumus turunan itu, `A × P × Q` tidak bisa dihitung). Lalu **satu tabel** (kolom: Faktor | Rumus | Kerugian yang diisolasi):
   - `Availability = Run Time ÷ Planned Production Time` — mengisolasi **downtime tak terencana** (breakdown, setup tak terjadwal).
   - `Performance = (Ideal Cycle Time × Total Count) ÷ Run Time` — mengisolasi **kerugian kecepatan** (micro-stop, mesin berjalan di bawah kecepatan desain).
   - `Quality = Good Count ÷ Total Count` — mengisolasi **kerugian mutu** (scrap, rework).
   - **Poin BARU paling kuat**: *Planned Production Time* **bukan** panjang shift. Planned stop yang memang dijadwalkan — istirahat, changeover terencana, pembersihan — **dikeluarkan lebih dulu**. Konsekuensi quotable: menghitung OEE terhadap panjang shift penuh membuat angkanya terlalu rendah; menghitungnya terhadap waktu kalender bukan OEE sama sekali, melainkan TEEP (lihat FAQ). Inilah kesalahan hitung paling umum.
   - **JANGAN** membuat kolom "Target World-Class" per faktor (tabel itu milik `digital-manufacturing-04`).
2. **H2 (praktis/terstruktur — CORE, supporting keyword `cara menghitung oee`)**: "Cara Menghitung OEE: Contoh Perhitungan Satu Shift" — *covers*: jawaban langsung 40–60 kata (poin baru: perhitungan OEE selalu berjalan **dari waktu ke unit lalu kembali ke waktu** — mulai dari panjang shift, kurangi planned stop, kurangi downtime, baru masuk ke hitungan unit). Bagian ini memenuhi janji judul "Cara Menghitungnya":
   - **Skenario ilustrasi** (wajib dilabeli *ilustrasi*): satu lini pengemasan, satu shift 8 jam.
   - **Perhitungan bertahap (list bernomor):**
     1. **Planned Production Time** = 480 menit shift − 30 menit planned stop (istirahat + changeover) = **450 menit**.
     2. **Run Time** = 450 − 90 menit downtime tak terencana = **360 menit**.
     3. **Availability** = 360 ÷ 450 = **80%**.
     4. **Performance** = (0,45 menit/unit × 720 unit) ÷ 360 menit = 324 ÷ 360 = **90%**. (Baca: dalam 360 menit, lini idealnya sanggup 800 unit; realisasinya 720.)
     5. **Quality** = 684 unit lolos ÷ 720 unit total = **95%** (36 unit reject).
     6. **OEE** = 80% × 90% × 95% = **68,4%**.
   - **Rumus ringkas + cek silang (poin BARU, tidak ada di SERP ID)**: `OEE = (Good Count × Ideal Cycle Time) ÷ Planned Production Time` → (684 × 0,45) ÷ 450 = 307,8 ÷ 450 = **68,4%** — identik. Poin quotable: jalan pintas ini menghasilkan angka yang sama persis, sehingga berguna sebagai **cek silang** — kalau kedua cara tidak bertemu, yang salah datanya, bukan rumusnya.
   - Poin quotable kedua: 68,4% berarti **hampir sepertiga waktu produksi terencana tidak menghasilkan barang bagus pada kecepatan penuh** — dan ketiga faktor menunjukkan ke mana perginya, tanpa perlu menebak.
   - **Honest hedging (1–2 kalimat, pengganti H2 honest sesuai addendum §2)**: OEE hanya sejujur pencatatan di baliknya — micro-stop dua menit yang tidak pernah tercatat akan muncul sebagai Performance yang misterius rendah, bukan sebagai downtime. **JANGAN** memakai angka MESA 10–18 poin (milik `digital-manufacturing-04`); sampaikan sebagai kaidah praktik tanpa angka.
3. **H2 (question-format — provenance + honest)**: "Mengapa 85% Disebut Standar World-Class?" — *covers*: jawaban langsung 40–60 kata dengan poin BARU: 85% **bukan angka konsensus yang turun dari langit** — ia adalah hasil perkalian tiga minimum yang ditetapkan Seiichi Nakajima dalam kerangka TPM (*Total Productive Maintenance*): **90% × 95% × 99% = 84,6%**, yang dibulatkan menjadi 85%. Lalu 1 paragraf konteks + batas:
   - Nakajima memperkenalkan TPM dan OEE lewat Japan Institute of Plant Maintenance (JIPM); angka minimumnya berasal dari pengalaman **pabrik bervolume tinggi dengan variasi produk minimal** (otomotif Jepang).
   - **Honest/counter-conventional (poin kepercayaan)**: karena itu 85% **tidak otomatis berlaku** untuk pabrik *high-mix/low-volume*, di mana changeover sering dan lot kecil menekan Performance secara struktural. Poin quotable: target OEE yang berguna adalah **garis dasar pabrik Anda sendiri yang bergerak naik**, bukan angka impor. Kalimat ini adalah pembeda utama vs seluruh SERP ID yang menyodorkan 85% sebagai nilai ideal universal.
   - **BATAS KERAS**: **jangan** menyebut rata-rata industri (40–60%, 55–65%), persentase pabrik yang mencapai 85% (~10%), atau sitasi Evocon/MESA — semuanya milik `digital-manufacturing-04`/`-01`. Angka 90/95/99 muncul **sekali saja di prosa** sebagai asal-usul 84,6%, **bukan** sebagai tabel target per komponen. **JANGAN** mengarang benchmark Indonesia (LeapFactor menyebut 60–70% tanpa sumber — **jangan diikuti**).
4. **H2 (pendek — lensa sistem + funnel)**: "Ketika OEE Tidak Lagi Dihitung dari Catatan Shift" — *covers*: jawaban langsung 40–60 kata (poin baru: begitu OEE dihitung lintas lini, shift, dan pabrik, hambatannya berpindah dari rumus ke **konsistensi definisi** — dua lini yang mengategorikan changeover berbeda menghasilkan dua angka yang tidak bisa dibandingkan). Lalu 1 paragraf *vendor-teach* netral: sistem manufaktur menyelesaikannya dengan mengunci definisi waktu. Menurut dokumentasi SAP (terverifikasi run ini), **SAP Digital Manufacturing** menghitung OEE **bukan** dari hitungan unit melainkan sebagai **rasio waktu berjenjang**: Loading Time → Net Production Time → Net Operating Time → Value Operating Time, sehingga `Availability = Net Production Time ÷ Loading Time`, `Performance = Net Operating Time ÷ Net Production Time`, `Quality = Value Operating Time ÷ Net Operating Time`; perhitungannya berjalan di level *resource* dan *work center* dengan rentang shift atau harian. Poin quotable: konsepnya identik dengan rumus manual, representasinya yang berbeda — semua kerugian dikonversi ke satuan waktu agar bisa dijumlahkan. Tren OEE lintas periode inilah yang menjadi bahan [business intelligence](https://www.soltius.co.id/id/blog/business-intelligence) (tautan cousin — tempatkan di sini). (1–2 kalimat saja soal produk SAP; **TANPA menyebut Soltius di body**; **JANGAN** bahas predictive maintenance, SAP AIN, atau SAP PM.)
5. **FAQ (3 Q&A, jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka)** — ambil dari PAA, **tanpa menduplikasi H2**:
   - "Apakah waktu istirahat dihitung sebagai downtime dalam OEE?" — Tidak. Planned stop dikeluarkan dari Planned Production Time sebelum Availability dihitung; pada ilustrasi artikel ini, 30 dari 480 menit shift dikeluarkan lebih dulu sehingga penyebutnya 450 menit, bukan 480. Memasukkannya membuat OEE terlihat lebih buruk dari kenyataannya.
   - "Apa bedanya OEE dan TEEP?" — OEE mengukur terhadap waktu produksi terencana; TEEP (*Total Effective Equipment Performance*) mengukur terhadap waktu kalender penuh. Pabrik dua shift (16 dari 24 jam) dengan OEE 68,4% memiliki TEEP sekitar **45,6%**. OEE menilai eksekusi; TEEP mengungkap kapasitas menganggur. (Aritmetika: 0,684 × 16/24 ≈ 0,456 — sudah diverifikasi strategist.)
   - "Apa penyebab nilai OEE rendah?" — Kerangka TPM Nakajima memetakannya ke **six big losses**: kerusakan alat, setup/penyetelan, idling & micro-stop, penurunan kecepatan, cacat proses, dan kerugian saat start-up. Masing-masing jatuh ke salah satu dari tiga faktor, sehingga faktor terendah menunjukkan kelompok kerugian mana yang harus diperiksa lebih dulu. (**Verifikasi enam item ini** — lihat Notes for SME researcher.)
6. **## Kesimpulan** — ≤80 kata: OEE berguna bukan karena angkanya, melainkan karena ia memaksa tiga jenis kerugian yang berbeda berhenti bersembunyi di balik satu kata "efisiensi". Yang menentukan bukan rumusnya, melainkan konsistensi definisi waktu di baliknya. 1 positioning line Soltius (lihat anchor). CTA konsultatif.
7. **Soft website CTA (baris terakhir, terpisah)** — ajakan halus mengunjungi soltius.co.id; anchor produk: **SAP Digital Manufacturing** (per tracker).

(≥1 question-format: H2 #1 & #3 ✓; ≥1 praktis/terstruktur dengan tabel/rumus/list: H2 #1 tabel rumus + H2 #2 list perhitungan bertahap ✓; H2 honest DIGANTI honest-hedging di H2 #2 + poin counter-conventional di H2 #3 — sesuai style_addendum §2; ≥4 angka spesifik inline: 480, 30, 450, 90, 360, 80%, 0,45, 720, 90%, 684, 95%, 68,4%, 84,6%, 45,6% ✓. **DILARANG menulis {IMAGE_NN} dalam bentuk apa pun** — tabel tiga rumus + list perhitungan bertahap menggantikan seluruh kebutuhan visual, termasuk infografik segitiga/lingkaran OEE yang dipakai `digital-manufacturing-04` di era placeholder.)

## SAP / partner tech to teach (keyword tidak ada di `product_matrix.md` sebagai baris tersendiri — baris **digital manufacturing** berlaku)

> `product_matrix.md` §2 (digital manufacturing) secara eksplisit menyebut **OEE** sebagai konsep yang diajarkan, dengan peringatan: *"any OEE/uptime figures must be sourced (never invent)"* — dipatuhi penuh di brief ini. CTA anchor tracker (**SAP Digital Manufacturing**) selaras dengan Soltius anchor baris tersebut. Aturan universal berlaku penuh: **implements-not-builds**, ≤2 self-mention (override addendum §6), tanpa superlatif, tanpa spec karangan.

Konsep yang dijelaskan akurat & vendor-neutral:
- **OEE (Overall Equipment Effectiveness)** — efektivitas peralatan menyeluruh; hasil kali Availability × Performance × Quality.
- **Tiga rumus turunan** — `Run Time ÷ Planned Production Time`; `(Ideal Cycle Time × Total Count) ÷ Run Time`; `Good Count ÷ Total Count`. Netral vendor: rumus standar industri.
- **Rumus ringkas** — `(Good Count × Ideal Cycle Time) ÷ Planned Production Time`; ekuivalen secara aljabar (terverifikasi aritmetiknya run ini).
- **TPM (Total Productive Maintenance) & six big losses** — kerangka Seiichi Nakajima via JIPM; asal-usul minimum 90/95/99 dan benchmark 84,6% ≈ 85%.
- **TEEP (Total Effective Equipment Performance)** — hanya dikontraskan di FAQ; rumusnya tidak diturunkan panjang.
- **SAP Digital Manufacturing** — kaskade waktu OEE (Loading Time → Net Production Time → Net Operating Time → Value Operating Time), level *resource*/*work center*, rentang shift/harian. Sebut nama penuh sekali. Disebut RINGKAS di H2 #4 (1–2 kalimat). **Jangan** membedah modulnya, dan **jangan** menyeret SAP AIN / SAP PM (milik `digital-manufacturing-04`).

**Fakta yang WAJIB diverifikasi researcher (jangan diklaim tanpa sumber):**
- **Kaskade waktu OEE di SAP DM** (Availability = NET_PRD_TM ÷ LOADING_TM; Performance = NET_OPR_TM ÷ NET_PRD_TM; Quality = VAL_OPR_TM ÷ NET_OPR_TM; urutan Theoretically Available Time → Loading Time → Net Production Time → Net Operating Time → Value Operating Time; level resource & work center; rentang shift/hari; berbasis *time buckets*) — **sudah terverifikasi run ini** via `learning.sap.com` (WebFetch 200 OK, lihat E-E-A-T). Tetap konfirmasi ulang saat menulis; **jangan menambah tingkatan yang tidak disebut sumber**. Di artikel cukup sampaikan dalam Bahasa Indonesia yang mudah — **jangan tampilkan nama teknis field** (NET_PRD_TM dsb.) di body; itu detail dokumentasi, bukan bacaan CIO.
- **Asal-usul benchmark 85%** (Nakajima; 90% × 95% × 99% = 84,6%; JIPM; buku *Introduction to TPM*, terbit 1984 di Jepang, terjemahan Inggris 1988 oleh Productivity Press) — ditemukan konsisten di **beberapa sumber sekunder** run ini (TeepTrak, Fabrico, OEE.com, Lean6SigmaHub), **belum diverifikasi dari sumber primer**. ⚠️ **Aritmetika 0,90 × 0,95 × 0,99 = 0,84645 sudah diverifikasi strategist** dan aman dinyatakan apa adanya. Yang perlu dikonfirmasi researcher: **tahun/edisi buku dan atribusi JIPM** sebelum menulis tahun spesifik. Bila tidak terkonfirmasi, **tulis tanpa tahun** ("dalam kerangka TPM yang diperkenalkan Seiichi Nakajima") — jangan mengarang tahun/penerbit.
- **Six big losses** (kerusakan alat, setup/penyetelan, idling & micro-stop, penurunan kecepatan, cacat proses, kerugian start-up) — ditemukan konsisten di sumber sekunder run ini; **konfirmasi keenam item + penamaannya** sebelum menulis. Bila hanya sebagian terkonfirmasi, sebut sebagai "enam kelompok kerugian" tanpa merinci yang meragukan.
- **ISO 22400-2** — ⚠️ **`iso.org/standard/54497.html` mengembalikan HTTP 403 run ini** dan `standards.iteh.ai` tidak menampilkan isi. Judul yang konsisten muncul di sumber sekunder: *"Automation systems and integration — Key performance indicators (KPIs) for manufacturing operations management — Part 2: Definitions and descriptions"*, terbit **2014**. **JANGAN mengutip jumlah KPI (angka 34 beredar di blog vendor — tidak terverifikasi)** dan jangan mengutip bunyi pasal. Bila researcher berhasil membuka ISO/sumber primer, ISO 22400-2 boleh dipakai sebagai **sitasi kedua** untuk poin "konsistensi definisi waktu" di H2 #4 (standar internasional yang membakukan KPI manufaktur termasuk OEE). Bila tidak, **artikel tetap utuh dengan satu sitasi SAP** — jangan memaksakan.
- **JANGAN mengarang benchmark Indonesia.** LeapFactor menyebut "OEE 60–70% rata-rata pabrik Indonesia" **tanpa sumber** — jangan diikuti. Bila researcher menemukan statistik manufaktur Indonesia bersumber jelas (BPS/Kemenperin), boleh dipakai maksimal 1 angka sebagai konteks — tetapi **jangan mengulang angka 19,07% PDB industri pengolahan** yang sudah dipakai `sap-pp-c01`.
- **Angka contoh** (480, 30, 450, 90, 360, 0,45, 720, 684, 80%, 90%, 95%, 68,4%, 307,8, 800, 45,6%) adalah **ilustrasi buatan** — wajib dilabeli demikian. Aritmetikanya **sudah diperiksa strategist secara komputasional** dan konsisten (termasuk cek silang rumus ringkas yang menghasilkan 68,4% identik); jangan mengubah satu angka pun tanpa menghitung ulang sisanya.

## Soltius anchor (BATCH OVERRIDE: maks 2 self-mention)

- **1 positioning line di Kesimpulan**: Soltius — SAP Platinum Partner melalui keanggotaan United VARs, berpengalaman sejak 1998 — **mengimplementasikan dan mendampingi** SAP Digital Manufacturing untuk menghubungkan lantai produksi dengan sistem ERP, dengan pengalaman di industri manufaktur (Mill Products, Automotive, Consumer Products per `product_matrix.md` §2). (Framing: implements/migrates/supports, **NEVER builds/owns**; tanpa superlatif; pilih SATU kredensial, jangan menumpuk. *Catatan:* `digital-manufacturing-04` menutup dengan kredensial United VARs + "automotive hingga mill products" — **variasikan diksinya**, jangan menyalin kalimatnya.)
- **1 soft website CTA** (baris terakhir): ajakan konsultasi/mengunjungi soltius.co.id — anchor funnel: **SAP Digital Manufacturing** (per tracker).
- **TANPA aside Soltius di tengah body** (style_addendum §6). Sentuhan praktisi di body boleh TANPA nama Soltius (mis. "di lapangan, dua lini yang sama-sama melaporkan OEE 70% sering tidak sedang mengukur hal yang sama").

## Internal links to place (BATCH OVERRIDE: 2 SAJA — 1 hub + 1 cousin, inline natural, tanpa "BACA JUGA")

> `landing_page` kosong di sheet → hub dipilih strategist (keputusan standing sejak Juni). Kedua URL **sudah diverifikasi resolve/200 OK via WebFetch run ini (2026-07-17)**. Penulis tetap cek ulang saat menulis.

- **Hub (halaman soltius.co.id paling relevan)**: `https://www.soltius.co.id/id/blog/digital-manufaktur-sistem` — anchor natural: "digital manufacturing" / "manufaktur digital" — *why*: OEE adalah metrik inti lantai produksi digital, dan halaman ini adalah hub `digital manufacturing` milik Soltius (rank #7 per `seo_report_apr2026.md`) yang **sejalan dengan CTA anchor SAP Digital Manufacturing** per tracker. **Diverifikasi 200 OK run ini** (judul: "Revolusi Digital dalam Dunia Industri: Optimalisasi Efisiensi Melalui Digital Manufaktur Sistem"; membahas DMS, Industry 4.0, IoT/AI/Big Data; **tidak menyebut OEE sama sekali** → tidak ada risiko kanibalisasi, justru artikel ini mengisi celah hub-nya). Preseden: hub yang sama dipakai seluruh cluster `digital-manufacturing` dan lolos QC. Tempatkan di lead atau paruh awal.
- **Cousin**: `https://www.soltius.co.id/id/blog/business-intelligence` — anchor natural: "business intelligence" — *why*: satu angka OEE per shift hanyalah titik; nilainya muncul saat tren lintas lini/periode masuk ke lapisan analitik. Sesuai peta cousin `product_matrix.md` (digital manufacturing → Business Intelligence, "production analytics"). Tautkan di H2 #4. **Diverifikasi 200 OK run ini** (judul: "Business Intelligence (BI): Panduan Lengkap Mengubah Data Menjadi Keuntungan Bisnis (2026)"; **tidak menyebut OEE maupun metrik manufaktur** → aman). Preseden: dipakai `digital-manufacturing-01` & `-04` — lolos editor.

> **⚠️ CATATAN soal cousin alternatif:** peta `product_matrix.md` menawarkan `migrasi-erp-ke-cloud` sebagai cousin kedua digital manufacturing, tetapi kaitannya dengan **perhitungan** OEE lemah (fondasi ERP, bukan metrik mesin) dan akan memaksa transisi artifisial di artikel 900 kata. Business Intelligence dipilih karena kaitannya langsung dan natural di H2 #4. Batch ini hanya mengizinkan **2 link total**, jadi tidak ada slot ketiga. **JANGAN menautkan `digital-manufacturing-04`** ("Predictive Maintenance dan OEE…") meski terasa sibling: menautkan dua halaman yang sama-sama menjelaskan rumus OEE justru mempertegas kanibalisasi ke Google; serahkan keputusan tautan sibling ke curator setelah boundary di atas ditegakkan dan artikel ini terbit.

## E-E-A-T signals to embed

- **Angka/fakta spesifik** (≥4 angka inline per addendum §4): shift **480 menit**; planned stop **30 menit**; Planned Production Time **450 menit**; downtime tak terencana **90 menit**; Run Time **360 menit**; Availability **80%**; Ideal Cycle Time **0,45 menit/unit**; Total Count **720 unit**; Performance **90%**; Good Count **684 unit** (reject **36**); Quality **95%**; OEE **68,4%**; cek silang **307,8 ÷ 450 = 68,4%**; Nakajima **90% × 95% × 99% = 84,6%**; TEEP **45,6%**. Semua berlabel ilustrasi, aritmetika terverifikasi komputasional. JANGAN mengarang benchmark industri/Indonesia.
- **Authoritative sources to cite (≥2 — sitasi final 1–2 inline di artikel):**
  1. **SAP Learning — "OEE Calculation in SAP Digital Manufacturing"** (kursus *Analyzing Manufacturing Data in SAP Digital Manufacturing*) — `https://learning.sap.com/courses/analyzing-manufacturing-data-in-sap-digital-manufacturing/oee-calculation-in-dm` — **SAP official; sudah diverifikasi run ini (WebFetch, 200 OK)**. Halaman menyatakan: OEE dihitung di level *resource* dan *work center*, dengan rentang shift atau hari, berbasis *time buckets*; Availability = NET_PRD_TM ÷ LOADING_TM; Performance = NET_OPR_TM ÷ NET_PRD_TM; Quality = VAL_OPR_TM ÷ NET_OPR_TM; kaskade Theoretically Available Time → Loading Time (dikurangi maintenance terjadwal & istirahat) → Net Production Time (dikurangi downtime tak terjadwal) → Net Operating Time (dikurangi kerugian kecepatan) → Value Operating Time (dikurangi kerugian mutu). **Ini sumber utama** — pakai di H2 #4. *Catatan:* `digital-manufacturing-04` memakai `help.sap.com/docs/sap-digital-manufacturing/insights/...` — **URL berbeda**, dan run ini `help.sap.com` hanya mengembalikan judul (konten JS-rendered, pola sama seperti run `sku-c01`/`reorder-point-c01`). Pakai URL `learning.sap.com` yang terbukti terbaca.
  2. **ISO 22400-2:2014 — "Automation systems and integration — Key performance indicators (KPIs) for manufacturing operations management — Part 2: Definitions and descriptions"** — `https://www.iso.org/standard/54497.html` — badan standar internasional; membakukan definisi KPI manufaktur termasuk OEE sehingga dua pabrik yang mengikutinya menghasilkan angka yang sebanding. ⚠️ **HTTP 403 run ini** → judul/tahun berasal dari sumber sekunder yang konsisten. Researcher wajib mengonfirmasi sebelum mengutip; **jangan mengutip jumlah KPI atau bunyi pasal**. Pakai sebagai sitasi kedua di H2 #4 (poin konsistensi definisi) **hanya bila terkonfirmasi**.
  3. (Cadangan, bila salah satu di atas tidak dapat diakses saat penulisan) **Seiichi Nakajima, *Introduction to TPM: Total Productive Maintenance*, Productivity Press** — sumber primer benchmark 85% & six big losses. *Catatan: buku cetak, tidak ada URL resmi yang dapat di-WebFetch; bila dikutip, sebut penulis + kerangka TPM/JIPM tanpa mengarang tahun/halaman.*
- **First-party Soltius angle**: pengalaman implementasi SAP di industri manufaktur yang *downtime-sensitif* (Mill Products, Automotive, Consumer Products per `company_profile.md` & `product_matrix.md` §2) — dipakai di positioning line Kesimpulan. Tanpa nama klien atau angka proyek karangan.

## AI Overview & GEO optimization (seo_playbook §2a, dipadatkan per addendum §5)

- **Definition snippet blockquote** setelah lead — "Ringkasnya:" 40–60 kata, arah: *"Ringkasnya: OEE (Overall Equipment Effectiveness) adalah ukuran seberapa besar bagian dari waktu produksi terencana yang benar-benar dipakai menghasilkan barang bagus pada kecepatan penuh. Nilainya lahir dari perkalian tiga faktor — availability, performance, dan quality — sehingga satu angka OEE sekaligus menunjukkan di mana letak kerugiannya."* (writer boleh poles, jaga 40–60 kata dan em-dash ≤2 se-artikel. **INI satu-satunya definisi** — body dilarang menyatakannya ulang dengan kata lain, termasuk di jawaban langsung tiap H2.)
- **Jawaban langsung 40–60 kata segera setelah TIAP H2** berisi poin baru milik H2 itu (tiap faktor punya rumus turunan sendiri; perhitungan berjalan dari waktu ke unit lalu kembali ke waktu; 85% adalah hasil perkalian minimum Nakajima; hambatan sesungguhnya adalah konsistensi definisi waktu), **BUKAN** parafrase snippet.
- **Satu paragraf = satu poin quotable & verifiable.**
- **Entity list** (nama penuh saat sebutan pertama, akronim di-expand sekali): OEE (*Overall Equipment Effectiveness*), Availability, Performance, Quality, Planned Production Time, Run Time, Ideal Cycle Time, Total Count, Good Count, TPM (*Total Productive Maintenance*), Seiichi Nakajima, JIPM (*Japan Institute of Plant Maintenance*), six big losses, TEEP (*Total Effective Equipment Performance*), SAP Digital Manufacturing, ISO 22400-2 (bila terkonfirmasi).
- **Format match**: tabel untuk tiga rumus turunan (H2 #1); list bernomor untuk perhitungan bertahap (H2 #2 — cocok untuk *HowTo*/featured snippet); prosa untuk provenance (H2 #3) dan lensa sistem (H2 #4). Jangan paksa elemen berlebih hingga melampaui 1000 kata.
- **FAQ**: 3 Q&A, parseable FAQPage schema; `dateModified` akurat di meta block.

## Data captured this run

- **Source(s)**: WebSearch (Google ID + EN, 2026-07-17, 6 kueri) — peta pesaing "oee adalah" / "cara menghitung oee", PAA turunan, asal-usul benchmark 85%, sub-formula A/P/Q, OEE vs TEEP, ISO 22400. WebFetch: `learning.sap.com/.../oee-calculation-in-dm` (✅ 200 — **sumber utama**, kaskade waktu + level/rentang perhitungan), `soltius.co.id/id/blog/digital-manufaktur-sistem` (✅ 200 — hub, tidak menyebut OEE), `soltius.co.id/id/blog/business-intelligence` (✅ 200 — cousin, tidak menyebut OEE), `help.sap.com/docs/sap-digital-manufacturing/insights/about-sap-digital-manufacturing-for-insights` (⚠️ hanya judul — JS-rendered), `iso.org/standard/54497.html` (❌ 403), `standards.iteh.ai/.../iso-22400-2-2014` (❌ tanpa isi). WebFetch SERP Google **terblokir** (halaman error/consent) — fallback WebSearch sesuai SOP `CLAUDE.md` §11.
- **Apr 2026 rank** (from report): `n/a` untuk `oee adalah` — keyword di luar 6 keyword `seo_report_apr2026.md`. Konteks terkait: hub `digital manufacturing` berada di **#7** (Apr 2026) — artikel ini memperkuat cluster hub tersebut.
- **Volume / KD / trend**: `n/a (Ahrefs not connected)`. Sinyal kualitatif: SERP ID padat (Kledo, Accurate, LeapFactor, Ilmu Manajemen Industri, 8ThinkTank, Sasana Digital, PQM, Jodoo, anakteknik, + PDF akademik Neliti) → volume definisional/rumus jelas ada; **semua berformat "definisi + komponen + rumus + benchmark 85%" tanpa rumus turunan maupun contoh dari data mentah** → beatable dengan tiga rumus turunan + contoh satu shift + rumus ringkas sebagai cek silang + provenance 85% + kaskade waktu SAP + GEO.
- **SERP features present**: explainer definisi + rumus mendominasi; PAA + AI Overview sangat mungkin aktif untuk kueri "…adalah"/"cara menghitung…" ini (tidak terkonfirmasi langsung — scrape terblokir).
- **cache_source**: `n/a` — mode conditional `/single-article`; riset ditangkap inline di brief ini (tanpa cache per-keyword bulanan).

## Notes for SME researcher

- **Dossier RINGKAS saja** — artikel target ~900 kata, 4 H2 ramping. Jangan kirim material untuk 1.650 kata.
- **Sumber utama sudah ditemukan & terverifikasi**: `learning.sap.com/courses/analyzing-manufacturing-data-in-sap-digital-manufacturing/oee-calculation-in-dm`. Konfirmasi ulang kaskade waktunya (Loading Time → Net Production Time → Net Operating Time → Value Operating Time) + level *resource*/*work center* + rentang shift/hari. **Jangan menambah tingkatan yang tidak disebut sumber**, dan **jangan tampilkan nama field teknis** (NET_PRD_TM dsb.) di body artikel.
- **Verifikasi provenance 85%**: Nakajima, kerangka TPM, JIPM, dan minimum 90/95/99. Aritmetika 0,90 × 0,95 × 0,99 = **0,84645** sudah diverifikasi strategist — aman. **Tahun/edisi buku *Introduction to TPM* (1984 JP / 1988 EN, Productivity Press) belum diverifikasi dari sumber primer** — bila tidak terkonfirmasi, tulis tanpa tahun. Jangan mengarang penerbit/halaman.
- **Verifikasi six big losses** (keenam item + penamaannya) sebelum dipakai di FAQ #3.
- **ISO 22400-2**: `iso.org` 403 run ini. Konfirmasi judul + tahun 2014 dari sumber primer bila ingin dipakai sebagai sitasi kedua. **JANGAN mengutip jumlah KPI (34) atau bunyi pasal.** Artikel tetap utuh dengan satu sitasi SAP — jangan memaksakan.
- **Periksa aritmetika contoh** (480 − 30 = 450; 450 − 90 = 360; 360 ÷ 450 = 0,80; 0,45 × 720 = 324; 324 ÷ 360 = 0,90; 684 ÷ 720 = 0,95; 0,80 × 0,90 × 0,95 = 0,684; 684 × 0,45 = 307,8; 307,8 ÷ 450 = 0,684; 360 ÷ 0,45 = 800; 720 − 684 = 36; 0,684 × 16/24 ≈ 0,456). Semua sudah diverifikasi strategist secara komputasional — bila salah satu angka diubah, hitung ulang seluruhnya (termasuk cek silang rumus ringkas, yang harus tetap identik dengan A × P × Q).
- **Boundary dedup (MENGIKAT — lihat "Distinct angle vs. history")**: JANGAN menyediakan material tentang predictive/preventive maintenance, 4 tipe maintenance, arsitektur sensor/edge/cloud, SAP Asset Intelligence Network, SAP S/4HANA Plant Maintenance, integrasi OT-IT, retrofit sensor (milik `digital-manufacturing-04`); JANGAN tabel Target World-Class per komponen, rata-rata industri 40–60%/55–65%, "~10% pabrik", sitasi Evocon, atau fakta MESA 10–18 poin (milik `digital-manufacturing-04`/`-01`); JANGAN MES/ISA-95/arsitektur 4 lapisan (milik `digital-manufacturing-01`); JANGAN ROI/biaya digitalisasi (milik `digital-manufacturing-03`); JANGAN mekanika MRP (milik `mrp-c01`), modul SAP PP/PP-DS (milik `sap-pp-c01`), struktur BOM (milik `bill-of-materials-c01`).
- **Jangan mengulang angka 19,07% PDB industri pengolahan** — sudah dipakai `sap-pp-c01`.
- Cek 2 URL internal (`blog/digital-manufaktur-sistem` + `blog/business-intelligence`) tetap 200/OK saat penulisan.

## Notes for future strategist runs

Artikel ini SENGAJA TIDAK mencakup (untuk menghindari kanibalisasi + disisakan untuk artikel lain):
- **Six big losses secara mendalam** (definisi tiap loss, cara menurunkannya, pemetaan ke tiga faktor) — di sini hanya 1 FAQ; **kandidat artikel tersendiri** yang kuat dan belum dimiliki korpus.
- **TEEP / OEE vs TEEP vs OOE** — hanya 1 FAQ di sini; kandidat artikel komparasi tersendiri (pola "X vs Y" yang terbukti di batch ini).
- **TPM (Total Productive Maintenance) sebagai metodologi** (delapan pilar, autonomous maintenance, JIPM award) — hanya disinggung sebagai asal-usul benchmark; layak artikel sendiri dan **tidak** tumpang tindih dengan `digital-manufacturing-04` yang membahas *tipe* maintenance, bukan TPM sebagai metodologi.
- **Cara meningkatkan OEE** (program perbaikan, quick win per faktor) — sengaja ditahan; judul yang diberikan hanya menjanjikan "cara menghitung". Kandidat artikel *how-to* lanjutan yang natural.
- **ISO 22400 sebagai standar KPI manufaktur** (34 KPI, hubungan dengan ISA-95/IEC 62264) — maksimal 1 klausa di sini; kandidat artikel praktisi tersendiri.
- **OEE per industri** (proses vs diskrit, high-mix/low-volume) — hanya 1 kalimat caveat di H2 #3; layak artikel sendiri.
- **SAP Digital Manufacturing sebagai produk** (modul, deployment, Line Monitor, Manufacturing Data Objects) — brief ini hanya memakainya sebagai anchor funnel 1–2 kalimat; catat bahwa `digital-manufacturing-04` sudah menyentuh Line Monitor & MDO.
- **⚠️ Utang teknis untuk curator/editor**: inkonsistensi benchmark antara `digital-manufacturing-01` (MESA, 40–60%) dan `digital-manufacturing-04` (Evocon, 55–65%) perlu diselaraskan saat refresh cluster — di luar cakupan brief ini.

## Format overrides (batch conditional 2026-08)

Restating dari `conditional/2026-08/style_addendum.md` — **MENGIKAT** untuk researcher, writer, editor, validator:

- **Panjang: 800–1000 kata (target ~900)** — hitungan body H1 s/d CTA, di luar frontmatter; `target_word_count: 900` di frontmatter, isi `word_count` aktual setelah menulis. <800 terlalu tipis; >1000 gagal (pangkas dengan membuang kalimat pengantar/transisi kosong dan contoh redundan, BUKAN memampatkan semua kalimat jadi telegram — ritme tetap bervariasi, paragraf 1–4 kalimat). Bila melewati batas, pangkas H2 #4 lalu FAQ jadi 2 — **jangan** pangkas contoh perhitungan (itu janji judul).
- **TANPA image placeholder** — dilarang menulis `{IMAGE_NN}` dalam bentuk apa pun; stage image-planner DILEWATI; tidak ada `images.json`. Konsep visual (segitiga/lingkaran tiga faktor OEE, kaskade waktu berjenjang) disampaikan lewat **tabel/list bertahap**.
- **FAQ: 2–3 Q&A** (brief ini menetapkan **3**); jawaban 30–60 kata, tiap jawaban memuat 1 fakta/angka; ambil dari PAA di atas; **tanpa menduplikasi isi H2**.
- **Internal link: TEPAT 2** — 1 hub (`blog/digital-manufaktur-sistem`) + 1 cousin (`blog/business-intelligence`), inline natural, tanpa "BACA JUGA". Sitasi eksternal otoritatif 1–2 inline (SAP Learning wajib; ISO 22400-2 opsional & hanya bila terverifikasi).
- **Definisi HANYA SEKALI** — di definition snippet "Ringkasnya:" (40–60 kata) setelah lead. Body/H2 **DILARANG** mengulang definisi snippet dengan kata lain, termasuk di jawaban langsung 40–60 kata setelah tiap H2. **Tidak ada H2 definitional "Apa Itu OEE?"** meski frasa itu ada di judul — snippet sudah menunaikannya, dan info baru (asal-usul TPM/Nakajima) sudah dialokasikan ke H2 #3.
- **Prosa padat on-point** — tanpa paragraf roadmap, tanpa transisi kosong, tanpa pembuka klise; em-dash ≤2; tanpa adjektiva hype (anti-AI `style_guide.md` §5 berlaku penuh).
- **Lead ≤80 kata** (pain konkret + keyword `OEE` + janji artikel).
- **Kesimpulan ≤80 kata** + 1 positioning line Soltius; **soft website CTA (soltius.co.id) = baris paling akhir**, terpisah dari Kesimpulan. **Maks 2 mention Soltius total.**
- **3–4 H2** (brief ini menetapkan **4**; ≥1 question-format → #1 & #3; ≥1 praktis/terstruktur dengan tabel/rumus/list → #1 & #2); **≥4 angka spesifik inline**; jawaban langsung 40–60 kata setelah tiap H2 berisi poin BARU milik H2 itu.
- **Framing Soltius** (`style_guide.md` §11): implementator/pendamping SAP — **implements, migrates, supports — NEVER builds/owns**. Disiplin sitasi §10: JANGAN mengarang angka, pasal, harga, tahun terbit, atau spec SAP.
