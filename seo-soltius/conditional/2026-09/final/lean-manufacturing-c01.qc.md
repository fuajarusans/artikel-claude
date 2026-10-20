---
brief_id: "lean-manufacturing-c01"
editor_run_date: "2026-09-01"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-09 (style_addendum.md overrides applied — band 800–1000 kata via cleaned-prose count tools/count_words.py, FAQ 2–3, internal links TEPAT 2, NO image placeholders, definisi hanya di snippet, maks 2 self-mention Soltius, lead ≤80 & kesimpulan ≤80, em-dash ≤2)"
---

# Editor QC Report — Lean Manufacturing: Prinsip, Manfaat, dan Penerapannya

## Recommendation
**approve**

Artikel padat, akurat, dan tepat sudut. Ia menutup dua celah SERP ID yang persis ditunjuk brief: (1) menyambungkan lima prinsip lean sebagai *cara berpikir* yang memburu tujuh waste sebagai *target konkret* — bukan dua daftar hafalan terpisah, dan (2) jujur soal batas (lean bukan program PHK; tanpa kaizen harian, 5S/VSM luntur). Struktur spoke terjaga: H2 #1 list bernomor 5 prinsip + provenance TPS/Ohno/MIT sebagai info baru; H2 #2 tabel 7 waste (TIMWOOD) + jembatan kaizen; H2 #3 langkah praktis + honest hedge + funnel SAP Digital Manufacturing. Definisi muncul sekali (snippet "Ringkasnya:"); jawaban langsung tiap H2 memakai poin baru, bukan parafrase snippet. Semua flag dossier dipatuhi: TIMWOOD dibingkai "akronim populer" tanpa misatribusi ke LEI/Ohno (Flag #1); Krafcik dihilangkan (Flag #2); SAP DM dibingkai tegas sebagai lapisan visibilitas/analitik "bukan pengganti budaya kaizen" (Flag #3); boundary anti-kanibalisasi dipatuhi penuh — OEE disebut 1 kali sebagai nama metrik tanpa rumus/faktor/85%/TEEP, tanpa MES arsitektur/predictive maintenance/ISA-95, tanpa MRP/PP/BOM, tanpa 19,07% PDB (Flag #4). Angka Six Sigma 3,4/sejuta hanya di FAQ. Framing Soltius benar (implements/supports, bukan builds); tepat 2 self-mention; tepat 2 internal link (hub + cousin fallback); 2 sitasi eksternal; 0 image placeholder; em-dash 0. Satu perbaikan in-place: jawaban langsung H2 #2 dinaikkan dari 38 → 43 kata agar masuk band GEO 40–60. URL diverifikasi live saat run ini (lihat flag cousin). Aman pass ke validator dan commit.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Lead buka pada pain konkret manajer pabrik (kurangi orang/tekan bahan vs waste tersembunyi), bukan klise. Ritme bervariasi: paragraf 1–4 kalimat; kalimat pendek "Urutan itu penting: …" & "Yang sering salah: …" memecah ritme. Em-dash 0; tanpa adjektiva hype; tanpa service-dump. |
| Factual & SAP-spec accuracy | 9 | Semua angka & kronologi cocok dossier (TPS 1950-an/Ohno; *TMTCTW* 1990; *Lean Thinking* 1996; 5 prinsip; 7 waste; 3M; 3,4/sejuta). TIMWOOD = "akronim populer" (bukan penamaan resmi LEI). SAP DM = kapabilitas visibilitas, tanpa spec/ROI karangan. |
| On-page SEO compliance (batch band) | 9 | meta_title 50, meta_description 152, slug 44; keyword `lean manufacturing` di H1/lead(100 kata pertama)/Kesimpulan/CTA; word count 933 (band 800–1000). |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata poin-baru setelah tiap H2 (48/43/47 kata pasca-fix); tabel 7 waste extractable baris-per-baris; FAQ FAQPage-ready; entity SAP/lean lengkap di sebutan pertama. |
| Soltius framing discipline | 10 | Implementator/pendamping SAP ("mengimplementasikan serta mendampingi SAP Digital Manufacturing"); 1 positioning line + 1 soft CTA (2 self-mention); tanpa superlatif; satu kredensial (Platinum via United VARs + sejak 1998), tidak ditumpuk. |
| Internal linking | 9 | Tepat 2 — hub `digital-manufaktur-sistem` (anchor "manufaktur digital", lead) + cousin `business-intelligence` (anchor "business intelligence", H2 #3). Inline natural, tanpa "BACA JUGA". |
| FAQ quality | 9 | 3 Q&A dari PAA (Six Sigma, kaizen, muda/mura/muri); jawaban 44/39/41 kata (band 30–60), tiap jawaban memuat fakta/angka (3,4/sejuta; prinsip ke-5; 3M/tujuh waste). Tanpa menduplikasi isi H2. |

## What I fixed (changelog)
- **Jawaban langsung H2 #2 dinaikkan 38 → 43 kata** agar masuk band GEO 40–60 (addendum §5, berlaku penuh). "…perbaikan kecil **oleh operator** yang paling dekat dengan prosesnya, bukan semata oleh tim ahli." → "…perbaikan kecil **yang dijalankan operator** yang paling dekat dengan prosesnya, bukan semata oleh tim ahli **yang jarang menyentuh lini**." Tetap satu poin quotable (kaizen = perbaikan harian oleh operator lini vs ahli jauh); tidak menambah fakta tak bersumber.
- **Frontmatter `word_count` 928 → 933** disinkronkan dengan hasil `tools/count_words.py` pasca-fix (cleaned-prose). `target_word_count: 900` dipertahankan.
- Verifikasi status URL dijalankan (lihat flag cousin & sitasi SAP). Tidak ada perubahan tautan diperlukan — keputusan cousin fallback writer terkonfirmasi benar.

## What I flagged (open issues)
- ⚠️ **Cousin = fallback `business-intelligence`, bukan OEE — terkonfirmasi benar.** Diverifikasi run ini: `https://www.soltius.co.id/id/blog/oee-adalah-rumus-cara-menghitung` mengembalikan **HTTP 500** (OEE conditional belum terbit), sedangkan fallback `https://www.soltius.co.id/id/blog/business-intelligence` **HTTP 200 OK** (artikel live, judul "Business Intelligence (BI): Panduan Lengkap…"). Sesuai instruksi standing brief. OEE tetap disebut 1 kali sebagai nama metrik di H2 #3 tanpa rumus. *Saat OEE terbit:* boleh ganti cousin ke slug OEE (tetap total 2 link). Tidak memblokir.
- ⚠️ **Sitasi SAP: 403 pada fetch langsung (anti-bot), bukan 404.** `https://www.sap.com/products/scm/digital-manufacturing.html` mengembalikan **HTTP 403 Forbidden** ke fetch otomatis — perilaku anti-bot standar SAP.com (dossier mencatat pola sama: `.../manufacturing.html` juga 403; researcher memilih path `digital-manufacturing.html` via WebSearch site:sap.com sebagai halaman hidup). 403 ≠ 404 → halaman ada; akses bot yang diblokir. URL dipertahankan. Tidak memblokir; verifikasi manual saat publish disarankan.
- ⚠️ **Hub `digital-manufaktur-sistem` diverifikasi 200 OK**, judul "Revolusi Digital dalam Dunia Industri…", **tidak menyebut lean manufacturing** → tidak ada kanibalisasi (artikel ini mengisi celah metodologi hub-nya). Tidak memblokir.
- ⚠️ **Word count 933** di dalam band (800–1000), sedikit di atas target ~900. Padat & sesuai janji judul (daftar 5 prinsip + tabel 7 waste tidak dipangkas per aturan brief). Tidak memblokir.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] Tanpa "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" — lead buka pada pain konkret (0 kemunculan).
- [x] Tanpa "Selain itu" pembuka ≥2 paragraf beruntun (0).
- [x] Tanpa "Penting untuk dicatat/dipahami" (0).
- [x] "Dengan demikian" tidak dipakai (0).
- [x] Em-dash (—) = **0** di seluruh file (≤2). Pemisah = koma/titik/titik koma/titik dua/tanda kurung. En-dash (–) = 0.
- [x] Panjang paragraf & kalimat bervariasi (1–4 kalimat; opener pendek "Urutan yang lazim di lapangan:").
- [x] Tidak setiap H2 → list 3-butir (H2 #1 = prosa + list bernomor 5 + prosa; H2 #2 = prosa + tabel + prosa; H2 #3 = prosa + list 5 + 2 prosa).
- [x] Tanpa klaim generik tanpa angka (≥8 angka spesifik inline).
- [x] Tanpa adjektiva hype bertumpuk (canggih/powerful/seamless/terdepan).
- [x] Tanpa service-dump Soltius (nama Soltius hanya di Kesimpulan).

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| 5 prinsip (Value, Value Stream, Flow, Pull, Perfection) dirumuskan Womack & Jones, *Lean Thinking* 1996 | dossier (LEI, "Womack & Jones 1996, p.10") ✓ | pass |
| Istilah "lean" dipopulerkan riset MIT + *The Machine That Changed the World* (1990); TPS/Ohno era 1950-an | dossier ✓ (Krafcik dihilangkan sesuai Flag #2) | pass |
| 7 waste dihafal via **TIMWOOD** (akronim populer, bukan penamaan resmi LEI/Ohno) | dossier Flag #1 ✓; frasa "akronim populer" dipakai | pass |
| Overproduction = pemborosan terburuk yang memicu waste lain (atribusi LEI) | dossier ✓ (LEI "worst form of waste… contributes to the other six") | pass |
| muda/mura/muri = 3M TPS; 7 waste hanya kategori muda | dossier ✓ (FAQ) | pass |
| Lean vs Six Sigma; target ≤ 3,4 cacat per sejuta peluang; gabungan Lean Six Sigma | dossier ✓ (angka 3,4/sejuta hanya di FAQ ini, bukan OEE) | pass |
| SAP Digital Manufacturing = lapisan visibilitas & analitik near-real-time, hubungkan lantai produksi ke ERP; "bukan pengganti budaya kaizen" | dossier Flag #3 ✓; tanpa klaim "menerapkan lean otomatis" | pass |
| Soltius = SAP Platinum Partner via United VARs, sejak 1998, mengimplementasikan/mendampingi (bukan pembuat) | company_profile / product_matrix §2 ✓ | pass |

### C. On-page SEO checklist (batch overrides)
- [x] Meta title **50** char (≤60); keyword "Lean Manufacturing" di 18 char pertama.
- [x] Meta description **152** char (140–160); keyword-first + value props (7 waste, 5 prinsip, kaizen, manfaat, penerapan).
- [x] Slug **44** char (≤60), kebab-case, memuat "lean-manufacturing".
- [x] H1 memuat keyword (Lean Manufacturing: Prinsip, Manfaat, dan Penerapannya).
- [x] H2 konten body = **3** (band batch 3–4) + `## FAQ` + `## Kesimpulan`. ≥1 question-format: H2 #2 & #3 ✓. ≥1 praktis/terstruktur: H2 #1 list bernomor 5 prinsip + H2 #2 tabel 7 waste ✓.
- [x] Keyword `lean manufacturing` di 100 kata pertama (lead) + penutup (Kesimpulan) + CTA (baris terakhir).
- [x] Definition snippet "Ringkasnya:" **44 kata** (40–60), blockquote setelah lead, di ~150 kata pertama. **Satu-satunya definisi.**
- [x] LSI/entity ≥8: prinsip lean, Toyota Production System, Taiichi Ohno, Womack & Jones, *Lean Thinking*, value/value stream/flow/pull/perfection, waste/muda, TIMWOOD, kaizen, just-in-time, 5S, value stream mapping, kanban, mura, muri, Six Sigma/Lean Six Sigma, OEE, SAP Digital Manufacturing.
- [x] Internal link **= 2** (band batch) — hub `digital-manufaktur-sistem` (lead) + cousin `business-intelligence` (H2 #3). Inline natural, tanpa "BACA JUGA".
- [x] Sitasi eksternal otoritatif **= 2** — Lean Enterprise Institute seven-wastes (hyperlink, H2 #2) + SAP official digital-manufacturing (hyperlink, H2 #3). Lihat flag 403.
- [x] FAQ **= 3** (band batch 2–3); jawaban 44/39/41 kata (30–60) + 1 fakta/angka tiap jawaban.
- [x] ≥1 list (numbered 5 prinsip + bulleted 5 langkah) + ≥1 tabel (7 waste). Angka spesifik di ≥8 tempat (5 prinsip, 7 waste, TIMWOOD, TPS 1950-an, 1990, 1996, 3,4/sejuta, 5S, 3M).
- [x] Word count **933** (band batch 800–1000; target 900) via `tools/count_words.py` cleaned-prose. Hitungan mentah whitespace (~971) over-count pipa tabel/URL — TIDAK dipakai untuk memvonis >1000.
- [N/A] Image validation — batch tanpa image placeholder; 0 `{IMAGE_NN}` (by design).

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata poin-BARU setelah TIAP H2: H2 #1 (48 kata) = 5 prinsip sebagai urutan berpikir + provenance TPS/Ohno/MIT/Womack-Jones; H2 #2 (43 kata, pasca-fix) = 7 waste sebagai target konkret + TIMWOOD + kaizen harian; H2 #3 (47 kata) = penerapan dimulai dari "melihat" value stream + manfaat menyusul.
- [x] Satu paragraf/kalimat = satu poin quotable & verifiable; tabel 7 waste extractable baris-per-baris untuk AI Overview/Featured Snippet.
- [x] FAQ parseable untuk FAQPage schema; `publish_month` mutakhir (2026-09) di meta block.
- [x] **Cek repetisi definisi:** definisi lean ("pendekatan produksi yang memaksimalkan nilai… menghilangkan waste") hanya di snippet "Ringkasnya:". Body/H2/jawaban langsung tidak mengulangnya — H2 #1 menjelaskan asal-usul & urutan prinsip (info baru), bukan mendefinisikan ulang entitas. Tidak ada H2 definitional "Apa itu lean".

### D. Soltius framing discipline
- [x] Soltius = implementator/pendamping SAP ("mengimplementasikan serta mendampingi SAP Digital Manufacturing"), **bukan** builds/makes/owns.
- [x] Self-mention = **2** (1 positioning line Kesimpulan + 1 soft CTA "kunjungi soltius.co.id" baris terakhir). Body tanpa nama Soltius. (Domain soltius.co.id pada 2 tautan internal = internal link, bukan brand self-mention.)
- [x] Tanpa superlatif ("terbaik/nomor satu"). Kredensial tunggal = SAP Platinum Partner via United VARs + "sejak 1998" (tidak ditumpuk; diksi divariasikan dari penutup `oee-c01`/`rise-manufaktur-c01`).
- [x] Nama produk SAP penuh saat pertama (SAP Digital Manufacturing); akronim di-expand sekali (OEE = *Overall Equipment Effectiveness*; work-in-process sebelum "WIP").
- [x] Kesimpulan memakai positioning line; CTA konsultatif ("Untuk mendiskusikan penerapan lean manufacturing … kunjungi soltius.co.id"), bukan "beli sekarang". CTA anchor funnel = SAP Digital Manufacturing (per tracker).
- [x] Hub sebagai anchor inline natural ("manufaktur digital") di lead, bukan callout "BACA JUGA".

### E. Anti-cannibalization spot check
- Closest prior: `oee-c01` (conditional 2026-08, metrik OEE) — cousin terdekat; lean = *metode menghasilkan*, OEE = *pengukur hasil*. Tetangga tema: cluster `digital-manufacturing` (history, MES/IIoT/OEE/maintenance), `sap-pp-c01`/`mrp-c01`/`bill-of-materials-c01` (mekanika perencanaan produksi).
- Subtopic overlap (Jaccard, dari brief): vs `oee-c01` ≈ **0.08**; vs cluster digital-manufacturing ≈ **0.10**; vs sap-pp/mrp/bom ≈ **0.04–0.06** — semua < 0.4. Grep korpus `lean manufacturing|kaizen|7 waste|value stream mapping|just-in-time|jidoka|poka-yoke` = 0 match (topik benar-benar baru).
- Boundary dipatuhi di teks final: OEE 1× nama metrik tanpa rumus/3 faktor/85%/six big losses/TEEP; tanpa MES arsitektur/ISA-95/predictive maintenance; tanpa MRP/PP/BOM; tanpa 19,07% PDB. 3,4/sejuta hanya di FAQ Six Sigma.
- Verdict: **distinct angle confirmed.** angle_hash `447b95ff…` unik.

## Batch-2026-09 overrides applied (ringkas)
- Band word count **800–1000** (bukan 1.500–1.800) via cleaned-prose `tools/count_words.py` — 933 ✓.
- FAQ **2–3** (bukan 5–8) — 3 ✓.
- Internal link **TEPAT 2** (bukan 3) — hub + cousin fallback (OEE belum live, terverifikasi 500) ✓.
- Image placeholder **N/A / dilarang** — 0 `{IMAGE_NN}`, validasi image di-skip (by design) ✓.
- Definisi **hanya di snippet** — tidak ada pengulangan di body/H2 ✓.
- **Maks 2** self-mention Soltius; lead ≤80 (65 kata) & Kesimpulan ≤80 (62 kata); soft CTA soltius.co.id baris terakhir; primary keyword `lean manufacturing` di penutup/CTA ✓.
- Em-dash ≤2 → 0; ≥4 angka inline → ≥8 terpenuhi; ≥1 H2 question (#2, #3) + ≥1 H2 tabel (#2) ✓.
- Cek penuh (anti-AI §5, EYD, sitasi §10, framing Soltius §11, meta block §7, GEO §2a) berlaku dan lulus.
- Flag dossier #1–#4 dipatuhi: TIMWOOD "akronim populer"; Krafcik dihilangkan; SAP DM = visibilitas "bukan pengganti kaizen"; boundary dedup penuh.
