---
brief_id: "oee-c01"
researcher_run_date: "2026-07-17"
sources_cited: 6
flags: 6
batch: "conditional-2026-08 (style_addendum.md — 800–1000 kata, FAQ 2–3, 2 internal link, TANPA image placeholder)"
---

# Research Dossier: Apa Itu OEE (Overall Equipment Effectiveness) dan Cara Menghitungnya

## TL;DR for the writer

- **Semua aritmetika contoh brief LOLOS verifikasi ulang** (dihitung komputasional run ini). Termasuk cek silang rumus ringkas: 307,8 ÷ 450 = 68,4% — identik dengan 80% × 90% × 95%. Pakai angka brief apa adanya; jangan ubah satu pun.
- **Temuan terkuat run ini**: ketiga rumus turunan brief (celah SERP #1) ternyata **cocok struktural dengan definisi KPI ISO 22400** — Availability = Actual Production Time ÷ **Planned Busy Time**; Effectiveness = (planned runtime per item × produced quantity) ÷ Actual Production Time. Terverifikasi lewat paper peer-review berafiliasi **NIST** (Kang dkk., *International Journal of Production Research*, 2016). Artinya rumus turunan artikel ini bukan konvensi blog — ia sejalan dengan standar internasional. Ini upgrade otoritas besar vs seluruh SERP ID.
- **Celah #3 (planned stop dikecualikan) kini didukung DUA sumber otoritatif independen**: (a) SAP DM — Loading Time = total time dikurangi *scheduled production interruptions*, contohnya **maintenance stops dan shift breaks**; (b) ISO 22400 via NIST — Planned Operation Time = Planned Busy Time + **Planned Down Time** (*scheduled breaks, meetings, maintenance*). Klaim paling kuat di artikel ini.
- **⚠️ KONFLIK DENGAN BRIEF — WAJIB DIBACA (Flag 1)**: minimum quality Nakajima **disengketakan sumber**: 99% (→ 84,6%) vs 99,9% (→ 85,4%). Brief hard-commit ke 84,6%. Keduanya membulat ke ~85% sehingga **poin artikel tetap utuh**, tetapi angka desimalnya tidak boleh disajikan sebagai fakta tak terbantah. Lihat Flags.
- **Sitasi**: SAP Learning (wajib, H2 #4) **terverifikasi 200**. ISO 22400-2:2014 judul+tahun **kini terkonfirmasi** → boleh jadi sitasi kedua. `iso.org` tetap 403 untuk kita, tetapi keberadaan + judul + tahun terkonfirmasi via listing iso.org & ANSI webstore, dan isinya via NIST/IJPR.

---

## Core facts (verified)

### A. Sumber utama SAP (wajib — H2 #4)

> **Claim**: SAP Digital Manufacturing menghitung OEE pada level *resource* dan *work center*, dengan rentang waktu shift atau hari.
> **Number/specific**: verbatim — "The OEE calculation in SAP DM is calculated on Resource and on Work Center level. The calculation has a time frame of shifts or days."
> **Source**: SAP Learning, "OEE Calculation in SAP Digital Manufacturing" — https://learning.sap.com/courses/analyzing-manufacturing-data-in-sap-digital-manufacturing/oee-calculation-in-dm (WebFetch 200 OK, diakses 2026-07-17)
> **Confidence**: high (SAP official)

> **Claim**: SAP DM menghitung OEE sebagai rasio waktu berjenjang, bukan dari hitungan unit.
> **Number/specific**: kaskade **lima** bucket, verbatim: **Theoretically Available Time** ("The total available time (24/7)") → **Loading Time** (dikurangi *scheduled production interruptions*, "for example, maintenance stops, or shift breaks") → **Net Production Time** (dikurangi *unscheduled interruptions of the production*) → **Net Operating Time** (dikurangi *performance loss*) → **Value Operating Time** (dikurangi *quality loss*; "Expresses how much time was used for the production of good quality items")
> **Source**: idem (SAP Learning)
> **Confidence**: high
> **Catatan writer**: brief menyebut kaskade 4 tingkat mulai Loading Time; sumber sebenarnya punya **5** tingkat (dimulai dari Theoretically Available Time = 24/7). Aman menyebut 4 tingkat operasional (Loading → Value Operating) seperti brief. **JANGAN menambah tingkat yang tidak ada di sumber.**

> **Claim**: Rumus tiga faktor OEE versi SAP DM.
> **Number/specific**: Availability = NET_PRD_TM ÷ LOADING_TM; Performance = NET_OPR_TM ÷ NET_PRD_TM; Quality = VAL_OPR_TM ÷ NET_OPR_TM
> **Source**: idem (SAP Learning)
> **Confidence**: high
> **Catatan writer**: **JANGAN tampilkan nama field teknis** (NET_PRD_TM dll.) di body — perintah brief. Terjemahkan ke Bahasa Indonesia yang mudah. Halaman SAP **tidak** menuliskan `OEE = A × P × Q` secara eksplisit; jangan atribusikan rumus produk itu ke SAP.

### B. ISO 22400-2 (sitasi kedua — kini LAYAK dipakai)

> **Claim**: ISO 22400-2:2014 adalah standar internasional yang membakukan definisi KPI manufaktur.
> **Number/specific**: judul lengkap terkonfirmasi — *"Automation systems and integration — Key performance indicators (KPIs) for manufacturing operations management — Part 2: Definitions and descriptions"*, terbit **2014**. Ada Amendment 1:2017 (KPI energy management) dan revisi ISO/DIS 22400-2 sedang berjalan.
> **Source**: listing katalog ISO — https://www.iso.org/standard/54497.html (⚠️ HTTP 403 saat WebFetch; judul & tahun terbaca dari listing resmi iso.org + ANSI Webstore https://webstore.ansi.org/standards/iso/iso224002014-1508114)
> **Confidence**: high untuk judul/tahun/keberadaan; **medium** untuk isi pasal (tidak dapat membuka teks standar)

> **Claim**: ISO 22400 memperkenalkan satu set 34 KPI manufaktur, dan mendefinisikan OEE sebagai hasil kali availability, effectiveness, dan quality ratio.
> **Number/specific**: verbatim — "A set of 34 KPIs has been introduced in ISO 22400"; "**OEE**: The product of a machine's availability, effectiveness, and quality ratio (i.e. QBR) … **OEE = A · E · QBR**"
> **Source**: Kang, Zhao, Li & Horst (Horst = **NIST**, Engineering Laboratory), *"A Hierarchical structure of key performance indicators for operation management and continuous improvement in production systems"*, **International Journal of Production Research**, 2016, DOI 10.1080/00207543.2015.1136082 — PDF NIST: https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=919754 (diakses & diekstraksi 2026-07-17)
> **Confidence**: high (peer-review + NIST)
> **⚠️ Boundary**: brief melarang mengutip jumlah KPI karena dulu tak terverifikasi. **Kini terverifikasi** — tetapi "Notes for future strategist" menyisakan topik ISO 22400 untuk artikel lain dan membatasi **maksimal 1 klausa** di sini. Rekomendasi: pakai ISO 22400-2 hanya untuk poin *konsistensi definisi* di H2 #4; angka 34 **opsional**, jangan dikembangkan.

> **Claim (KUNCI — mengangkat celah #1 & #3 brief ke level standar)**: Struktur rumus turunan artikel ini sejalan dengan definisi KPI ISO 22400.
> **Number/specific**: verbatim dari paper — **Availability**: "A = APT / PBT · 100%", di mana APT = *actual production time*, PBT = *planned busy time*. **Effectiveness**: "E = PRI · PQ / APT · 100%", di mana PRI = *planned runtime per item* (= ideal cycle time) dan PQ = *produced quantity*. Padanannya persis dengan brief: `Availability = Run Time ÷ Planned Production Time` dan `Performance = (Ideal Cycle Time × Total Count) ÷ Run Time`.
> **Source**: idem (Kang dkk., IJPR 2016 / NIST)
> **Confidence**: high
> **Catatan**: ISO memakai istilah **effectiveness** (E), bukan "performance"; dan **quality ratio**. Penamaan availability/performance/quality yang dipakai artikel adalah konvensi TPM/industri (juga dipakai SAP) — keduanya sah, tetapi **jangan menulis "ISO 22400 menyebutnya performance"**.

> **Claim (mendukung celah #3 — planned stop dikecualikan)**: waktu yang direncanakan berhenti dikeluarkan lebih dulu sebelum availability dihitung.
> **Number/specific**: verbatim — "**Planned operation time (POT)**: The scheduled time during which a machine can be utilized"; "**Planned busy time (PBT)**: The planned time during which a machine is busy. Such two time periods are not the same due to scheduled non-working time"; "**Planned down time (PDOT)**: The planned time during which a machine is unable to produce, which may include **scheduled breaks, meetings, maintenance**"; relasi: **POT = PBT + PDOT**. Availability memakai **PBT** sebagai penyebut, bukan POT.
> **Source**: idem (Kang dkk., IJPR 2016 / NIST)
> **Confidence**: high untuk isi paper; **medium** sebagai representasi ISO 22400-2 verbatim — paper menyatakan ia "modify and redefine" elemen ISO. **Rekomendasi framing**: "sejalan dengan kerangka KPI ISO 22400" / "dalam kerangka KPI manufaktur", **bukan** "ISO 22400 pasal X berbunyi…".

> **Claim**: Quality rate versi ISO 22400-2 **tidak** memasukkan barang hasil rework.
> **Number/specific**: verbatim — "the QR defined in International Standard ISO 22400–2 (2014) does not include the reworked parts."
> **Source**: idem (Kang dkk., IJPR 2016 / NIST)
> **Confidence**: high
> **Kegunaan**: membenarkan `Quality = Good Count ÷ Total Count` brief (684 ÷ 720). Bila writer ingin 1 kalimat nuance: barang yang lolos hanya setelah rework tidak dihitung sebagai *good count* — konsisten dengan ilustrasi 36 unit reject.

### C. Provenance benchmark 85% (H2 #3)

> **Claim**: Seiichi Nakajima memperkenalkan TPM, OEE, dan six big losses lewat Japan Institute of Plant Maintenance (JIPM); ia mencatat perusahaan peraih Distinguished Plant Prize memiliki OEE di atas 85% — asal-usul sebutan "world class".
> **Number/specific**: verbatim (jurnal peer-review) — "Seiichi Nakajima led the introduction of TPM, OEE and the Six Big Losses in the early 1970s while at the Japanese Institute of Plant Maintenance."
> **Source**: *Anatomization of the overall equipment effectiveness (OEE) for various machines in a tool and die shop*, **Journal of Intelligent Manufacturing and Special Equipment** (Emerald, peer-review) — https://www.emerald.com/jimse/article/3/1/97/433186/Anatomization-of-the-overall-equipment. Dikuatkan berlipat oleh sumber sekunder yang konsisten.
> **Confidence**: high untuk atribusi Nakajima/JIPM/85%-as-prize-winners; **lihat Flag 1** untuk komposisi desimalnya.

> **Claim**: Bibliografi buku Nakajima.
> **Number/specific**: *Introduction to TPM: Total Productive Maintenance*, Seiichi Nakajima, **Productivity Press, 1988**, ISBN 0915299232 / 9780915299232, 129 halaman (edisi bahasa Inggris).
> **Source**: katalog Google Books — https://books.google.com/books/about/Introduction_to_TPM.html?id=XKc28H3JeUUC (dikuatkan listing ISBN identik di Amazon)
> **Confidence**: **medium-high** untuk edisi Inggris 1988 (katalog bibliografis, bukan sumber primer). ⚠️ **Klaim "asli terbit 1984 di Jepang" TIDAK terverifikasi dari katalog mana pun** — hanya beredar di sumber sekunder. **Jangan tulis 1984.**
> **Rekomendasi**: brief mengizinkan default "tanpa tahun". Di 900 kata, **cukup tulis "kerangka TPM yang diperkenalkan Seiichi Nakajima"**. Bila writer ingin tahun, **hanya 1988 + Productivity Press** yang boleh — jangan sebut halaman/edisi.

> **Claim**: Six big losses dan pemetaannya ke tiga faktor OEE.
> **Number/specific**: enam item terkonfirmasi konsisten: (1) kerusakan/kegagalan alat (*equipment failure/breakdown*), (2) setup dan penyetelan (*setup & adjustment*), (3) idling & micro-stop (*idling & minor stoppages*), (4) penurunan kecepatan (*reduced speed*), (5) cacat proses (*process defects*), (6) **kerugian hasil / start-up** (*reduced yield*). Pemetaan: 1–2 → Availability; 3–4 → Performance; 5–6 → Quality.
> **Source**: Emerald JIMSE (di atas) — mengelompokkan sebagai *stoppage losses* / *speed losses* / *quality losses*; dikuatkan *International Journal of Production Economics* ("Uncovering hidden capacity in overall equipment effectiveness management", ScienceDirect https://www.sciencedirect.com/science/article/abs/pii/S0925527322000871) yang meringkas: "downtime losses due to equipment failure and setup/adjustment, speed losses caused by idling/minor stoppages and reduced speed, and defect losses arising from process defects and reduced yield"
> **Confidence**: high untuk keenam item + pemetaan; **medium** untuk penamaan item ke-6 (lihat Flag 3)

### D. Aritmetika ilustrasi (diverifikasi ulang komputasional run ini)

> **Claim**: seluruh rantai hitung brief konsisten.
> **Number/specific**: 480 − 30 = **450** · 450 − 90 = **360** · 360 ÷ 450 = **0,80** · 0,45 × 720 = **324** · 324 ÷ 360 = **0,90** · 684 ÷ 720 = **0,95** · 0,80 × 0,90 × 0,95 = **0,684** · cek silang: 684 × 0,45 = **307,8**; 307,8 ÷ 450 = **0,684** ✅ identik · kapasitas ideal: 360 ÷ 0,45 = **800** unit · reject: 720 − 684 = **36** · TEEP: 0,684 × 16/24 = **0,456**
> **Source**: verifikasi komputasional researcher (Python), 2026-07-17 — mengonfirmasi hitungan strategist
> **Confidence**: high (aritmetika murni)
> **Label wajib**: angka-angka ini **ilustrasi buatan**, bukan data pabrik nyata. Writer wajib melabelinya *ilustrasi*.

---

## Solution focus + Soltius anchor (from product_matrix.md §2 — baris "digital manufacturing")

| What to teach | Facts to state accurately | Where in article | Soltius anchor |
|---|---|---|---|
| **SAP Digital Manufacturing** (sebut nama penuh 1×) | OEE dihitung di level *resource*/*work center*, rentang shift/hari, berbasis kaskade waktu (bukan hitungan unit). Ringkas 1–2 kalimat. | H2 #4 saja | — (tanpa nama Soltius di body) |
| **OEE / tiga rumus turunan / rumus ringkas** | Vendor-neutral, standar industri; sejalan struktur KPI ISO 22400 | H2 #1, #2 | — |
| **TPM / Nakajima / six big losses** | Kerangka, tanpa tahun bila ragu | H2 #3, FAQ #3 | — |
| Kredensial | SAP Platinum Partner via **United VARs**; sejak **1998**; industri manufaktur (Mill Products, Automotive, Consumer Products) | Kesimpulan (1 positioning line) | Implementation + industry experience |

`product_matrix.md` §2 memperingatkan eksplisit: *"any OEE/uptime figures must be sourced (never invent)"* — dipatuhi; satu-satunya angka non-ilustrasi di artikel adalah 85% (+ komposisinya) yang bersumber.

**Framing wajib**: Soltius **mengimplementasikan/mendampingi/mendukung** SAP Digital Manufacturing — **BUKAN pembuatnya**. Maks **2** self-mention (1 positioning line di Kesimpulan + 1 soft CTA baris terakhir). Tanpa superlatif. `digital-manufacturing-04` sudah memakai diksi United VARs + "automotive hingga mill products" → **variasikan diksi**, jangan menyalin.

---

## Authoritative external sources (untuk ditautkan writer — pakai 1–2 inline)

1. **SAP Learning — "OEE Calculation in SAP Digital Manufacturing"** (kursus *Analyzing Manufacturing Data in SAP Digital Manufacturing*), diakses 2026-07-17 — https://learning.sap.com/courses/analyzing-manufacturing-data-in-sap-digital-manufacturing/oee-calculation-in-dm — *what it backs*: kaskade waktu OEE (Loading Time → Net Production Time → Net Operating Time → Value Operating Time), Loading Time **sudah mengecualikan** maintenance stops & shift breaks, level *resource*/*work center*, rentang shift/hari. **WAJIB, di H2 #4.** ✅ 200 OK.
2. **ISO 22400-2:2014**, *Automation systems and integration — KPIs for manufacturing operations management — Part 2: Definitions and descriptions* — https://www.iso.org/standard/54497.html — *what it backs*: standar internasional yang membakukan definisi KPI manufaktur → dua pabrik yang mengikutinya menghasilkan angka sebanding (poin konsistensi definisi, H2 #4). **Opsional, maks 1 klausa.** ⚠️ Halaman 403 untuk WebFetch (judul/tahun terkonfirmasi dari listing resmi); **jangan mengutip bunyi pasal**.
3. *(Pendukung, bila writer perlu otoritas non-vendor untuk rumus turunan)* **Kang, Zhao, Li & Horst (NIST), IJPR 2016** — https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=919754 — *what it backs*: ISO 22400 = 34 KPI; OEE = availability × effectiveness × quality ratio; Availability = APT ÷ **Planned Busy Time**; Effectiveness = (planned runtime per item × produced quantity) ÷ APT; Planned Operation Time = Planned Busy Time + Planned Down Time (*scheduled breaks, meetings, maintenance*).

> Batch hanya mengizinkan **1–2 sitasi inline**. Rekomendasi: **SAP Learning (wajib) + ISO 22400-2 (1 klausa di H2 #4)**. Sumber #3 dipakai sebagai *backing* internal — tidak wajib ditautkan.

---

## Data table for the writer (structured element #1 — H2 #1)

Kolom persis seperti brief. **JANGAN tambah kolom "Target World-Class"** (milik `digital-manufacturing-04`).

| Faktor | Rumus | Kerugian yang diisolasi |
|---|---|---|
| **Availability** | Run Time ÷ Planned Production Time | Downtime tak terencana: breakdown, setup tak terjadwal |
| **Performance** | (Ideal Cycle Time × Total Count) ÷ Run Time | Kerugian kecepatan: micro-stop, mesin berjalan di bawah kecepatan desain |
| **Quality** | Good Count ÷ Total Count | Kerugian mutu: scrap dan rework |

**Poin BARU paling kuat untuk jawaban langsung H2 #1** (bukan pengulangan snippet): *Planned Production Time* bukan panjang shift. Planned stop yang memang dijadwalkan (istirahat, changeover terencana, pembersihan) dikeluarkan lebih dulu. Terverifikasi dua arah: SAP mengecualikan *maintenance stops & shift breaks* dari Loading Time; kerangka KPI ISO 22400 memisahkan *Planned Down Time* dari *Planned Busy Time*.

## Structured element #2 — contoh perhitungan satu shift (H2 #2, list bernomor)

**Skenario (wajib dilabeli *ilustrasi*)**: satu lini pengemasan, satu shift 8 jam.

1. **Planned Production Time** = 480 menit shift − 30 menit planned stop = **450 menit**
2. **Run Time** = 450 − 90 menit downtime tak terencana = **360 menit**
3. **Availability** = 360 ÷ 450 = **80%**
4. **Performance** = (0,45 menit/unit × 720 unit) ÷ 360 = 324 ÷ 360 = **90%** — dalam 360 menit lini idealnya sanggup **800 unit**; realisasinya 720
5. **Quality** = 684 ÷ 720 = **95%** (36 unit reject)
6. **OEE** = 80% × 90% × 95% = **68,4%**

**Cek silang (rumus ringkas — tidak ada di SERP ID)**: `OEE = (Good Count × Ideal Cycle Time) ÷ Planned Production Time` → (684 × 0,45) ÷ 450 = 307,8 ÷ 450 = **68,4%** — identik. Quotable: kalau kedua cara tidak bertemu, yang salah **datanya**, bukan rumusnya.

---

## FAQ draft (3 Q&A — sesuai brief; 30–60 kata; tiap jawaban 1 fakta/angka)

### Apakah waktu istirahat dihitung sebagai downtime dalam OEE?
Tidak. Planned stop seperti istirahat dan changeover terjadwal dikeluarkan dari Planned Production Time sebelum Availability dihitung. Pada ilustrasi artikel ini, 30 dari 480 menit shift dikeluarkan lebih dulu sehingga penyebutnya menjadi 450 menit, bukan 480. Memasukkannya membuat OEE terlihat lebih buruk daripada kenyataannya. *(43 kata)*

### Apa bedanya OEE dan TEEP?
OEE mengukur terhadap waktu produksi terencana; TEEP (Total Effective Equipment Performance) mengukur terhadap waktu kalender penuh. Pabrik dua shift yang beroperasi 16 dari 24 jam dengan OEE 68,4% memiliki TEEP sekitar 45,6%. OEE menilai eksekusi; TEEP mengungkap kapasitas yang menganggur. *(40 kata)*

### Apa penyebab nilai OEE rendah?
Kerangka TPM Nakajima memetakannya ke six big losses: kerusakan alat, setup dan penyetelan, idling dan micro-stop, penurunan kecepatan, cacat proses, serta kerugian hasil saat start-up. Dua pertama menekan Availability, dua berikutnya Performance, dua terakhir Quality, sehingga faktor terendah menunjukkan kelompok mana yang harus diperiksa lebih dulu. *(46 kata)*

> Ketiganya bebas em-dash — menyisakan jatah **≤2 em-dash** untuk body. Tidak menduplikasi isi H2.

---

## Definition snippet draft (50 kata — blockquote "Ringkasnya:" setelah lead)

> **Ringkasnya:** OEE (*Overall Equipment Effectiveness*) adalah ukuran seberapa besar bagian dari waktu produksi terencana yang benar-benar dipakai menghasilkan barang bagus pada kecepatan penuh. Nilainya adalah hasil perkalian tiga faktor: availability, performance, dan quality. Karena itu satu angka OEE tidak hanya menilai mesin, tetapi juga menunjukkan kelompok kerugian mana yang menekannya.

*(50 kata; 0 em-dash; akronim di-expand sekali; entity-clear & extractable untuk AI Overview.)* **INI satu-satunya definisi di artikel** — body/H2/jawaban langsung dilarang menyatakannya ulang dengan kata lain.

---

## Edge cases & nuance (untuk honest hedging, hemat kata)

- **OEE hanya sejujur pencatatannya.** Micro-stop dua menit yang tak pernah tercatat muncul sebagai Performance rendah misterius, bukan sebagai downtime. Sampaikan sebagai kaidah praktik **tanpa angka** (angka MESA 10–18 poin **dilarang** — milik `digital-manufacturing-04`).
- **85% lahir dari konteks volume tinggi/variasi rendah** (otomotif Jepang). Untuk pabrik *high-mix/low-volume*, changeover sering + lot kecil menekan Performance secara struktural → 85% tidak otomatis berlaku. Quotable: target yang berguna adalah **garis dasar pabrik sendiri yang bergerak naik**, bukan angka impor.
- **Rework**: ISO 22400-2 tidak menghitung barang hasil rework sebagai good count. Konsisten dengan ilustrasi (684 good dari 720).
- **Konsistensi definisi > rumus** (H2 #4): dua lini yang mengategorikan changeover berbeda menghasilkan dua angka yang tak bisa dibandingkan. Inilah alasan standar (ISO 22400) dan sistem (SAP DM) mengunci definisi waktu.

---

## Flags (open factual risk — WAJIB dipatuhi writer & editor)

- ⚠️ **Flag 1 — KONFLIK DENGAN BRIEF: komposisi 85% disengketakan sumber.** Brief hard-commit: 90% × 95% × **99%** = **84,6%**. Namun jurnal peer-review Emerald (JIMSE) Tabel 1 mengatribusikan ke Nakajima angka **99,9%** (OEE >85,0; Availability >90,0; Performance >95,0; Quality >**99,9**) → 90 × 95 × 99,9 = **85,4%**. Sumber lain (mayoritas literatur TPM) memakai 99% → 84,6%.
  - **Aritmetika keduanya terverifikasi**: 84,645% dan 85,4145%.
  - **Poin artikel selamat di kedua versi**: 85% tetap **hasil perkalian tiga minimum komponen**, bukan angka konsensus yang berdiri sendiri. Itulah diferensiatornya — pertahankan.
  - **Rekomendasi**: **pakai 90% × 95% × 99% ≈ 84,6% sesuai brief** (konvensi dominan literatur TPM & selaras boundary dedup — `digital-manufacturing-04` justru memakai 99,9%). **Atribusikan sebagai "tiga minimum dalam kerangka TPM Nakajima"** dan gunakan bahasa pembulatan ("dibulatkan menjadi 85%"), **jangan** menyajikan 84,6% sebagai angka tunggal tak terbantah, dan **jangan** menulis "tepatnya 84,6%". Jangan mencampur 99% dan 99,9% dalam satu artikel.
  - **Catatan editor**: bila editor melihat 99,9% di `digital-manufacturing-04` dan tergoda "menyelaraskan" — **jangan**. Perbedaan itu memang ada di literatur; boundary brief melarang tabel target per komponen di artikel ini. Tambahkan ke daftar utang teknis korpus (bersama inkonsistensi MESA 40–60% vs Evocon 55–65%).
- ⚠️ **Flag 2 — Tahun buku Nakajima.** Edisi Inggris **1988, Productivity Press** terverifikasi via katalog (Google Books, ISBN 0915299232). **Asal 1984 (Jepang) TIDAK terverifikasi** — jangan ditulis. Default aman brief: **tanpa tahun** ("kerangka TPM yang diperkenalkan Seiichi Nakajima"). Jangan mengarang halaman/edisi/penerjemah.
- ⚠️ **Flag 3 — Penamaan loss ke-6.** Sumber menyebut *reduced yield* (kerugian hasil), sering disamakan dengan *startup loss*. Brief menulis "kerugian saat start-up". **Aman**: tulis "kerugian hasil saat start-up" (mencakup keduanya). Jangan mendefinisikan tiap loss panjang-lebar — disisakan untuk artikel lain.
- ⚠️ **Flag 4 — Isi ISO 22400-2 tidak terbaca langsung.** `iso.org/standard/54497.html` **403**; ANSI preview PDF **403**; ISO OBP **403**. Judul + tahun 2014 **terkonfirmasi** dari listing resmi. Isi (34 KPI, OEE = A·E·QBR) **terkonfirmasi lewat perantara** peer-review/NIST, bukan dari teks standar. → **JANGAN mengutip bunyi pasal atau nomor klausa.** Framing aman: "ISO 22400-2:2014 membakukan definisi KPI manufaktur". Paper NIST menyatakan ia "modify and redefine" elemen ISO → **jangan** menyebut POT/PBT/PDOT sebagai kutipan verbatim ISO.
- ⚠️ **Flag 5 — Jangan mengarang benchmark Indonesia.** LeapFactor menyebut "OEE 60–70% rata-rata pabrik Indonesia" **tanpa sumber** — **jangan diikuti**. Tidak ada statistik OEE Indonesia bersumber jelas (BPS/Kemenperin) yang ditemukan run ini. **Jangan pula mengulang 19,07% PDB industri pengolahan** (milik `sap-pp-c01`). Artikel tidak membutuhkan angka Indonesia.
- ⚠️ **Flag 6 — Kaskade SAP: 5 tingkat, bukan 4.** Sumber memulai dari *Theoretically Available Time* (24/7). Brief menyebut 4 tingkat operasional. Aman menulis 4 (Loading → Value Operating); **jangan menambah tingkat yang tak disebut sumber**, dan jangan menyebut *Theoretically Available Time* sebagai "TEEP" (sumber tidak mengatakannya).

### Boundary dedup — MENGIKAT (tidak ada material disediakan untuk ini)
**DILARANG total**: predictive/preventive maintenance & 4 tipe maintenance, arsitektur sensor/edge/cloud, retrofit sensor, kritikalitas mesin, integrasi OT-IT, SAP Asset Intelligence Network, SAP S/4HANA Plant Maintenance (**semua milik `digital-manufacturing-04`** — predictive maintenance **0 kali**); tabel Target World-Class per komponen; rata-rata industri (40–60%, 55–65%); "~10% pabrik"; sitasi **Evocon**; fakta **MESA** 10–18 poin; MES/ISA-95/arsitektur 4 lapisan (`digital-manufacturing-01`); ROI/biaya digitalisasi (`digital-manufacturing-03`); mekanika MRP (`mrp-c01`); modul SAP PP/PP-DS (`sap-pp-c01`); struktur BOM (`bill-of-materials-c01`).

### Internal links (TEPAT 2 — verifikasi ulang saat menulis)
- **Hub**: https://www.soltius.co.id/id/blog/digital-manufaktur-sistem — anchor "digital manufacturing"/"manufaktur digital" — lead atau paruh awal.
- **Cousin**: https://www.soltius.co.id/id/blog/business-intelligence — anchor "business intelligence" — H2 #4.
- **JANGAN** menautkan `digital-manufacturing-04` (mempertegas kanibalisasi). Tanpa "BACA JUGA".
