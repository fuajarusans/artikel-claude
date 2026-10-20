---
brief_id: "sku-c01"
editor_run_date: "2026-07-17"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-08 (style_addendum.md overrides applied — band 800–1000, FAQ 2–3, 0 image placeholder, 2 internal link, definisi sekali)"
---

# Editor QC Report — SKU (Stock Keeping Unit): Pengertian, Fungsi, dan Cara Membuatnya

## Recommendation

**approve**

Draft masuk dalam kondisi kuat: seluruh override batch 2026-08 sudah dipenuhi dan dapat diverifikasi ulang lewat skrip (0 image placeholder, tepat 2 internal link, 2 sitasi eksternal, FAQ 3, em-dash 1, 2 self-mention Soltius, CTA soltius.co.id di baris terakhir), keenam caveat dossier dipatuhi, dan boundary dedup bersih total (0 kemunculan omnichannel/WMS/rumus persediaan). Saya menemukan dan memperbaiki **dua cacat nyata** yang lolos dari self-review penulis: (1) primary keyword `SKU` **sama sekali tidak ada** di paragraf penutup maupun baris CTA — melanggar `seo_playbook.md` §3 ("primary keyword in ... last paragraph"); (2) istilah *stock opname* ditulis dalam **tiga ejaan berbeda** dalam satu file ("stock opname" di frontmatter, "Stok opname" 2×, "Stock opname" 1×) dan tidak dimiringkan, padahal *picking* / *dead stock* / *generic article* di artikel yang sama dimiringkan — melanggar konsistensi §3. Keduanya diperbaiki in-place dengan biaya kata nol (+1 di Kesimpulan, −1 di CTA), jadi `word_count` tetap 973 dan tetap di dalam band. Tidak ada isu yang menyisakan pekerjaan writer/strategist. Satu catatan **metode** untuk validator saya angkat di bawah — penting agar artikel ini tidak salah di-*bounce*.

## Quality scores

| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Nol pembuka klise, nol "Selain itu"/"Dengan demikian", nol adjektiva hype. Em-dash 1 (jatah 2). Ritme paragraf 4-3-3-1-3-1-2-1-2-3-4-3-3-4-3-1 kalimat — variatif, bukan blok simetris. |
| Factual & SAP-spec accuracy | 9 | 5/5 klaim spot-check lolos vs dossier. Hedge "secara standar" dan "Tidak ada standar resminya" utuh. Nol angka terlarang. |
| On-page SEO compliance | 9 | Meta title 51, meta desc 153, slug 41 — semua dalam band. Keyword di penutup **diperbaiki** (sebelumnya absen). |
| GEO extractability (§2a) | 9 | Jawaban langsung 44/43/45/42 kata setelah tiap H2, semuanya poin BARU. Satu paragraf = satu poin quotable. |
| Soltius framing discipline | 10 | Tepat 2 mention; "mengimplementasikan serta mendampingi" — implements/supports, tanpa "builds". Kredensial cocok verbatim `company_profile.md`. |
| Internal linking | 9 | Tepat 2, inline natural, tanpa "BACA JUGA", penempatan sesuai brief. |
| FAQ quality | 9 | 3 Q&A, 38/42/44 kata, tiap jawaban memuat 1 fakta/angka, parseable FAQPage. |

## What I fixed (changelog)

- **Primary keyword absen dari penutup** (`seo_playbook.md` §3 — cacat SEO nyata). Kata "SKU" tidak muncul sama sekali di paragraf Kesimpulan maupun baris CTA; penutup hanya berbicara soal "kode produk" dan "Skema". Untuk artikel keyword definisional (`sku adalah`), entitasnya wajib disebut di penutup.
  - Kesimpulan: "Skema yang ditetapkan sekali…" → "**Skema SKU** yang ditetapkan sekali…" (+1 kata; Kesimpulan 60 → 61 kata, tetap ≤80).
  - CTA: "Untuk mendiskusikan penataan master data produk dan SAP S/4HANA Retail di perusahaan Anda, kunjungi soltius.co.id." → "Untuk mendiskusikan **penataan SKU** dan master data produk **di SAP S/4HANA Retail**, kunjungi soltius.co.id." (16 → 15 kata; anchor funnel SAP S/4HANA Retail per tracker **dipertahankan**, tone soft/konsultatif dipertahankan).
  - Net biaya kata: **0**. `word_count` tetap 973.
- **Inkonsistensi istilah *stock opname*** (`style_guide.md` §3). Satu istilah, tiga ejaan dalam satu file: `stock opname` (frontmatter LSI), `Stok opname` (lead + Kesimpulan), `Stock opname` (bullet H2 #1). Juga tidak dimiringkan, padahal *picking*, *dead stock*, dan *generic article* di artikel yang sama dimiringkan — perlakuan istilah serapan tidak konsisten.
  - Distandarkan ke **`stock opname`** (sejalan dengan LSI frontmatter, brief, dossier, dan preseden pipeline `monthly_runs/2026-08/final/warehouse-management-system-03.id.md` yang memakai `*stock opname*`).
  - Lead: "Stok opname selesai…" → "***Stock opname*** selesai…" (miring pada sebutan pertama per §3; sebutan berikutnya polos).
  - Kesimpulan: "Stok opname yang tidak pernah cocok…" → "**Stock opname** yang tidak pernah cocok…".
  - Gloss sengaja tidak ditambahkan: makna sudah jelas dari konteks di dua tempat ("angkanya tetap tidak cocok"; "Hitungan fisik dicocokkan per kode"), preseden WMS juga tanpa gloss, dan margin kata hanya 27.

Tidak ada perbaikan lain yang diperlukan — sisa draft lolos apa adanya.

## What I flagged (open issues)

- ⚠️ **PENTING UNTUK VALIDATOR — metode word count di handoff writer SALAH, tetapi angkanya BENAR.** Writer menyatakan telah mengalibrasi ke pilot dan bahwa `word_count: 853` pilot "matches a **raw whitespace-token count** of the body exactly". **Itu tidak benar.** Hitungan mentah (`body.split()`) pilot = **908**, bukan 853; hitungan mentah artikel ini = **1042**, bukan 973. Konvensi batch yang sebenarnya adalah **cleaned prose tokens**: link direduksi ke anchor text, pipe tabel/marker heading/bullet/blockquote dibuang, token tanda baca berdiri sendiri (em-dash) tidak dihitung. Saya kalibrasi ulang ke **seluruh 14 final 2026-07** yang sudah disetujui: dengan konvensi cleaned, 6 file cocok **persis** (selisih 0), mayoritas dalam ±1 — termasuk **pilot 853 = 853** dan **artikel ini 973 = 973**. → *Rekomendasi*: `word_count: 973` **sudah benar, jangan diubah**. **JANGAN memakai metode raw yang dideskripsikan writer** — metode itu akan membaca artikel ini sebagai 1042 dan menjatuhkannya sebagai ">1000 = gagal" secara keliru. Deskripsi metodenya salah; hasil akhirnya kebetulan tepat.
- ⚠️ **FAQ #1 membuka dengan "SKU adalah kode internal untuk mengelola stok"** — titik terdekat artikel ini dengan definisi kedua (sudah diangkat sendiri oleh writer sebagai judgment call). **Keputusan saya: dipertahankan.** Alasan: (a) larangan addendum §2/§5 secara eksplisit menyasar **body/H2 dan jawaban langsung setelah H2**, bukan FAQ; (b) `seo_playbook.md` §2d/§6 mewajibkan jawaban FAQ **self-contained** untuk FAQPage schema, dan pertanyaan "Apa perbedaan SKU dan barcode?" mustahil dijawab tanpa mencirikan kedua sisi; (c) frasanya tidak mengulang muatan snippet ("kode unik alfanumerik", "setiap varian produk", "merek, kategori, warna, ukuran") — hanya menyebut sifat internal + tujuan stok, keduanya kontras yang memang diminta pertanyaannya; (d) diambil dari draft FAQ researcher yang sudah disetujui. Bonus: memberi satu kemunculan bersih frasa persis `SKU adalah` di badan artikel. Risiko: rendah.
- ⚠️ **Anchor hub "solusi retail berbasis SAP" → halaman yang menampilkan iVend Retail** (dossier Flag #6). Severity **rendah, tidak diperbaiki.** iVend Retail benar tidak disebut (verifikasi: 0 kemunculan) persis seperti instruksi dossier, dan klaimnya sendiri sah — yang dinyatakan adalah **Soltius mengimplementasikan solusi retail berbasis SAP** (terverifikasi: `company_profile.md` mencantumkan Retail sebagai solution-by-product **dan** industry vertical), bukan klaim tentang isi halaman tujuan. Anchor "solusi retail" cocok dengan judul halaman sebenarnya ("Solusi Retail Produk - SOLTIUS Indonesia") dan hub yang sama sudah lolos QC di `omnichannel-retail-c01`. Tidak ada aksi.

## Detailed check results

### A. Anti-AI scan (`style_guide.md` §5)

- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — **0** (grep)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — **0 kemunculan sama sekali**
- [x] No "Penting untuk dicatat / dipahami / diingat bahwa" — **0**
- [x] "Dengan demikian" not overused — **0**
- [x] No "Sebagai kesimpulan" as closing opener — **0**; Kesimpulan dibuka dengan callback ke pain di lead ("Stock opname yang tidak pernah cocok…") ✓
- [x] Em-dash count ≤2 — **1** (hanya di snippet researcher)
- [x] Varied paragraph lengths — 4-3-3-1-3-1-2-1-2-3-4-3-3-4-3-1 kalimat; ada tiga paragraf 1-kalimat, tidak ada blok simetris
- [x] Not every H2 → 3-bullet list — H2 #1 prosa+4 bullet, H2 #2 prosa+tabel+prosa, H2 #3 prosa+tabel+prosa+6 bullet+prosa, H2 #4 **prosa murni**
- [x] No generic claims without numbers — 5 angka spesifik inline
- [x] No stacked hype adjectives — canggih/powerful/revolusioner/terdepan/seamless/komprehensif/terbaik/nomor satu = **0**
- [x] No service-dump paragraph — satu anchor relevan saja, di Kesimpulan

### B. Factual & SAP-spec spot-check

| Claim | Source check | Verdict |
|---|---|---|
| "GTIN … ditetapkan pemilik merek dari rentang nomor yang dilisensikan lewat GS1" | dossier §A ✓ — persis frasa aman yang diwajibkan ("jangan tulis 'GTIN dibuat bebas oleh brand'") | **pass** |
| "Numerik: 8, 12, 13, atau 14 digit" (GTIN) | dossier §A ✓ verbatim GS1 US: "They can be 8, 12, 13, or 14 digits long" | **pass** |
| "nomor varian **secara standar** dibentuk dari nomor artikel induk ditambah sufiks urut tiga digit" | dossier §B ✓ verbatim SAP Learning; hedge "secara standar" **utuh**; tanpa "selalu"; tanpa nama transaksi/user exit/versi; diatribusikan ke "dokumentasi SAP" generik sesuai Flag #4/#5 | **pass** |
| "Praktik yang lazim berkisar 8–12 karakter. Tidak ada standar resminya" | dossier Flags ✓ — di-hedge **dua kali** (di sini + FAQ #2 "Tidak ada standar resmi"), plus "lazimnya" di tabel; **tidak** disitasi ke GS1 | **pass** |
| "Sebagai SAP Platinum Partner melalui United VARs dan berpengalaman sejak 1998" | `company_profile.md` ✓ baris 35/40/103/140 (Platinum via United VARs) + 12/50/139 (sejak 1998) | **pass** |
| **Angka terlarang** (Rp 1,5 juta · 14 hari kerja · 1.000 nomor) | dossier Flag 🚫 — grep: **0 kemunculan ketiganya** | **pass** |
| Aritmetika "3 warna × 4 ukuran = 12 SKU" | dossier Data table #1 ✓; seri `NRD-KP-HTM-S` → `NRD-KP-NVY-XL` konsisten; Nordika dilabeli ilustrasi/fiktif **dua kali** (prosa + sel tabel) | **pass** |
| Persyaratan GTIN marketplace | dossier Flag ⚠️ — memakai fallback "Sejumlah kanal ritel dan marketplace mensyaratkan GTIN"; **0** nama peritel/marketplace Indonesia disebut | **pass** |

### C. On-page SEO checklist (`seo_playbook.md` §3 + override batch)

- [x] Meta title ≤60, keyword di 30 char pertama — **51 char**, `sku adalah` di posisi **0**
- [x] Meta description 140–160 — **153 char**
- [x] Slug ≤60, kebab-case, keyword — **41 char**, `sku-adalah-pengertian-fungsi-cara-membuat`
- [x] H1 contains keyword — ✓ "SKU (Stock Keeping Unit): …"
- [x] **H2 count 3–4 (override batch, bukan 4–7)** — **4 body H2** (di luar FAQ + Kesimpulan)
- [x] ≥1 question-format H2 — **2** ("Apa Fungsi SKU bagi Bisnis?", "Apa Bedanya SKU, Barcode, dan GTIN?")
- [x] ≥1 H2 praktis/terstruktur — H2 #3 (tabel anatomi + list 6 aturan); H2 honest diganti honest-hedging 2 kalimat per addendum §2 ✓
- [x] Keyword in first 100 words — "SKU (*stock keeping unit*) **adalah**" di snippet, ±kata ke-57
- [x] **Keyword in last paragraph — DIPERBAIKI** (sebelumnya **absen** dari Kesimpulan *dan* CTA; kini "Skema SKU" + "penataan SKU")
- [x] Definition snippet 40–60 kata dekat atas — **54 kata**, blockquote "Ringkasnya:", tepat setelah lead
- [x] ≥8 LSI terms — **17** terverifikasi: stock keeping unit · kode SKU · cara membuat SKU · barcode · UPC · GTIN · GS1 · stock opname · varian produk · master data produk · generic article · SAP S/4HANA Retail · dead stock · picking · manajemen gudang · peritel · marketplace
- [x] **Internal link TEPAT 2 (override, bukan 3)** — hub `soltius.co.id/id/solutions-by-products/retail-produk` (anchor "solusi retail", Kesimpulan) + cousin `.../blog/konsep-warehouse-management-system-yang-wajib-anda-tahu` (anchor "manajemen gudang", H2 #1 pada bullet *stock opname*). Inline natural, tanpa "BACA JUGA" ✓
- [x] Sitasi eksternal otoritatif 1–2 — **2**: GS1 US Guide to UPCs (H2 #2) + SAP Learning (H2 #4). Nol outbound ke kompetitor integrator ✓
- [x] **FAQ 2–3 Q&A (override, bukan 5–8)** — **3**, jawaban **38/42/44** kata (band 30–60), tiap jawaban memuat 1 fakta/angka
- [x] ≥1 list + ≥1 table — **2 tabel** (pembeda SKU/Barcode/GTIN; anatomi segmen) + **2 bullet list ber-lead-in bold** (4 fungsi; 6 aturan)
- [x] ≥4 angka spesifik inline — **5**: 8–12 karakter (hedged) · 3 warna × 4 ukuran = 12 SKU · sufiks urut 3 digit · GTIN 8/12/13/14 digit · sejak 1998
- [x] **Word count 800–1000 (override, bukan 1.500–1.800)** — **973** (lihat catatan metode di *What I flagged*)
- [x] **Image placeholder = 0 (override)** — grep `{IMAGE` = **0**. Validasi image-brief **N/A**, tidak di-flag, sesuai addendum §7
- [x] Lead ≤80 kata tanpa paragraf roadmap — **53 kata**, pain konkret, tanpa roadmap
- [x] Kesimpulan ≤80 kata — **61 kata** (60 + 1 dari perbaikan keyword)
- [x] Soft CTA soltius.co.id = baris paling akhir — ✓ 15 kata, konsultatif, terpisah dari Kesimpulan

### C2. GEO extractability (`seo_playbook.md` §2a)

- [x] Jawaban langsung 40–60 kata setelah tiap H2 utama — **44 / 43 / 45 / 42** kata
- [x] Tiap jawaban langsung berisi poin **BARU** milik H2-nya, bukan parafrase snippet:
  - H2 #1 → SKU sebagai **kunci penghubung antarproses** (gudang/kasir/analis pakai satu kode)
  - H2 #2 → **siapa yang menerbitkan** masing-masing (SKU sendiri / GTIN lewat GS1 / barcode = cara baca mesin)
  - H2 #3 → **urutan umum→spesifik + biaya menomori ulang** setelah ribuan produk terdaftar
  - H2 #4 → penomoran manual gagal karena **tidak ada yang menegakkan**, bukan karena aturannya salah
- [x] Satu paragraf = satu poin quotable & verifiable ✓
- [x] FAQ parseable untuk FAQPage schema — H2 "FAQ (Pertanyaan yang Sering Diajukan)" + 3× H3 pertanyaan + jawaban self-contained ✓
- [x] Freshness di meta block — `publish_month: "2026-08"`. **Catatan**: seluruh 14 final 2026-07 memakai `publish_month` sebagai satu-satunya field kesegaran; **tidak ada** field `dateModified` di konvensi pipeline. Draft konsisten dengan konvensi — sengaja **tidak** saya tambahkan field baru agar parser curator/validator tidak pecah.

### D. Definition-once check (override batch — cek khusus addendum §7)

- [x] Definisi muncul **hanya di snippet** "Ringkasnya:" (54 kata) ✓
- [x] **Tidak ada H2 definitional "Apa Itu SKU?"** ✓ — sesuai larangan brief (janji "Pengertian" di judul ditunaikan snippet; tidak ada info baru yang membenarkan H2 tersendiri)
- [x] Tidak ada paragraf body yang mengulang muatan snippet dengan kata lain — diperiksa satu per satu; keempat jawaban langsung membawa poin baru (lihat C2). "Fungsi utama SKU adalah menjadi kunci penghubung antarproses" adalah pernyataan **fungsi**, bukan definisi ulang ✓
- [x] Jawaban langsung setelah tiap H2 tidak menyatakan ulang snippet ✓
- [⚠️] FAQ #1 memuat mini-definisi kontrastif — dipertahankan dengan alasan di *What I flagged*

### E. Soltius framing discipline (`product_matrix.md` + `style_guide.md` §11)

- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP" — "**mengimplementasikan serta mendampingi** solusi retail berbasis SAP" ✓; nol kemunculan "membangun/membuat SAP"
- [x] **≤2 Soltius self-mentions (override, bukan ≤3)** — **tepat 2**: positioning line di Kesimpulan + soft CTA. Nol aside Soltius di body ✓
- [x] No unverifiable superlatives — "terbaik"/"nomor satu"/"terdepan" = **0**
- [x] SAP/partner product names + specs match dossier — "SAP S/4HANA Retail" dipakai sebagai nama solusi ritel SAP (disanksi dossier Flag #4); fakta sufiks 3 digit diatribusikan ke "**dokumentasi SAP**" generik, **tidak** diklaim sebagai frasa persis halaman itu ✓; iVend Retail **tidak** disebut ✓
- [x] Closing uses a `company_profile.md` positioning line — ✓ terverifikasi baris 35/40/140 + 12/50/139
- [x] Soft website CTA as the FINAL line, after the conclusion — ✓ konsultatif ("Untuk mendiskusikan…"), bukan "beli sekarang"
- [x] Hub link as natural inline anchor, bukan callout "BACA JUGA" — ✓

### F. Anti-cannibalization spot check

- **Closest prior article**: `omnichannel-retail-c01` (conditional 2026-06)
- **Subtopic overlap (Jaccard estimate)**: **≈ 0.05** — konsisten dengan perhitungan strategist; irisan efektif hanya {SAP S/4HANA Retail sebagai sistem ritel}
- **Boundary dedup terverifikasi lewat grep — semuanya 0 kemunculan**: omnichannel · multichannel · BOPIS · click-and-collect · ship-from-store · slotting · bin management · safety stock · reorder point · turnover · HPP · ABC analysis · SKU rationalization
- SAP S/4HANA Retail muncul **hanya** sebagai tempat SKU hidup sebagai master data (H2 #4, 2 kalimat) — bukan bedah produk, bukan fondasi integrasi kanal ✓
- **Verdict**: **distinct angle confirmed** — tidak ada risiko kanibalisasi; tidak perlu re-spin strategist

---

## The shipping question

> "Jika ini tayang di soltius.co.id besok dan dibaca konsultan SAP senior (juga CIO yang skeptis), apakah WEBARQ Promote bangga?"

**Ya.** Artikel ini melakukan tiga hal yang tidak satu pun dari 10+ pesaing SERP Indonesia lakukan: memberi **aturan penomoran yang bisa langsung dieksekusi** (6 aturan konkret, bukan "buatlah konsisten dan unik"), **memisahkan SKU/barcode/GTIN berdasarkan siapa yang menerbitkan** dengan sitasi GS1 langsung alih-alih blog vendor, dan menunjukkan **contoh yang berantai** (12 SKU dari satu produk induk, aritmetika yang bisa diverifikasi pembaca). Kejujurannya justru pembeda terkuatnya: "Tidak ada standar resminya" pada angka 8–12 karakter adalah persis kalimat yang pesaing tulis seolah aturan baku. Lensa sistem di H2 #4 menjadi jembatan funnel yang jujur — sistem menegakkan skema, bukan disiplin manusia — tanpa satu pun sebutan Soltius di body.

**recommendation: approve** — lanjut ke `seo-quality-validator`.
