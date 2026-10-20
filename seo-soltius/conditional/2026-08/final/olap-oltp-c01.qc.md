---
brief_id: "olap-oltp-c01"
editor_run_date: "2026-07-17"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-08 (style_addendum.md overrides applied — 800–1000 kata, target 900; ZERO image placeholder; FAQ 2–3; internal link TEPAT 2; maks 2 mention Soltius; definisi hanya di snippet)"
word_count: 959
---

# Editor QC Report — OLAP vs OLTP: Perbedaan dan Fungsinya dalam Sistem Database

## Recommendation
**approve**

Draf ini datang sudah sangat rapi dan patuh penuh pada `style_addendum.md` batch 2026-08. Semua batas keras terpenuhi: body 959 kata (band 800–1000, di bawah cap 1000); nol `{IMAGE_NN}`; FAQ 3 (gate terpenuhi — tanpa Q3 = 915 kata < 950); internal link tepat 2 (1 hub + 1 cousin); sitasi eksternal 2 (AWS + Plattner); em-dash 0; mention Soltius terlihat 2 (positioning line + soft CTA); definisi muncul sekali saja di snippet dan tidak diulang di jawaban langsung mana pun. Fact-check terhadap dossier lolos untuk seluruh angka dan atribusi; keenam Flag researcher ditangani persis sesuai instruksi (hedge AWS disengaja dan TIDAK di-flag; framing "makalah keynote"; HTAP tanpa tahun/Gartner; DOI bukan dl.acm.org; baris "Bentuk akses" tidak diatribusikan; substansi Microsoft Learn tanpa kutipan verbatim). Boundary dedup terjaga sempurna (nol ETL, nol karakteristik data warehouse, S/4HANA 1 klausa, nol kubus, nol klaim performa/harga/pangsa pasar). Satu-satunya penyesuaian editor: menurunkan satu sebutan "SAP HANA" nama-penuh yang tidak load-bearing menjadi "HANA" agar lebih dekat ke disiplin brief (idealnya 3–4). Layak tayang.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tanpa pembuka klise; ritme paragraf bervariasi 1–4 kalimat; em-dash 0; tidak ada H2 yang semuanya list; tanpa adjektiva hype. Sentuhan praktisi ("Di lapangan, jawabannya sering hibrida") natural. |
| Factual & SAP-spec accuracy | 9 | Semua angka/atribusi cocok dengan dossier (AWS ID, Plattner SIGMOD 2009 via dblp+Semantic Scholar, HANA konsep via cousin Soltius + Microsoft Learn). Nol klaim karangan. |
| On-page SEO compliance | 9 | Meta title 59, meta desc 154, slug 45; keyword di title/H1/lead/snippet/meta; H2 4 body (≥1 question, ≥1 tabel). |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata setelah tiap H2 (44/51/54/40), tiap berisi poin BARU; tabel 6 baris dapat dikutip baris-per-baris; FAQ FAQPage-ready. |
| Soltius framing discipline | 10 | Implementator/pendamping ("mengimplementasikan dan mendampingi... menjalankan SAP di atas SAP HANA"), NEVER builds; 1 kredensial (SAP Platinum via United VARs), tidak menumpuk; 2 mention. |
| Internal linking | 10 | Tepat 2, inline natural, tanpa "BACA JUGA": hub `data warehouse` (H2 #2) + cousin `arsitektur in-memory SAP HANA` (H2 #3). |
| FAQ quality | 9 | 3 Q&A, tiap jawaban memuat fakta/angka (milidetik·tiga tahun·detik–menit; 2009; GB·TB–PB); tidak menyalin rumusan FAQ artikel Juni. |

## What I fixed (changelog)
- **Disiplin mention SAP HANA** (H2 #3, paragraf hedging): "**SAP HANA** juga bukan satu-satunya jalan" → "**HANA** juga bukan satu-satunya jalan". Sebelum: "SAP HANA" nama-penuh 6×; brief menetapkan idealnya 3–4. Sesudah: 5×, seluruhnya load-bearing (perkenalan di H2 #3, anchor cousin wajib, FAQ Q2, positioning line Kesimpulan, CTA funnel) dan terkonsentrasi di H2 #3 + FAQ + Kesimpulan + CTA — nol di H2 #1/#2/#4, sesuai guardrail "bukan di setiap H2". Kejelasan entitas tetap terjaga (HANA sudah diperkenalkan penuh dua kalimat sebelumnya di paragraf yang sama).
- **Frontmatter `word_count`**: 966 → **959** (angka terukur ulang editor pada file final setelah edit, metode konsisten; selisih ±7 dari hitungan writer adalah noise metode — keduanya jauh di dalam band).

## What I flagged (open issues)
- Tidak ada open issue yang memblokir. Catatan non-blocking:
  - Hedge AWS di H2 #1 ("kisaran tipikal, bukan jaminan; kueri agregasi yang sangat berat bisa lebih lama") **sengaja dipertahankan** — ini proteksi atas inkonsistensi internal halaman AWS (Flag #1 dossier: tabel ringkasan "detik atau menit" vs bagian Performa "beberapa menit hingga beberapa jam"). Sesuai instruksi eksplisit: **JANGAN di-flag sebagai hedging berlebih.** Dibiarkan apa adanya.
  - `go-live` (Kesimpulan) tidak dimiringkan sebagai istilah asing; konsisten dengan benchmark pipeline, dibiarkan agar tidak menimbulkan inkonsistensi. Non-blocking.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — grep bersih; lead membuka pada pain konkret (laporan konsolidasi membebani sistem transaksi)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — nihil
- [x] No "Penting untuk dicatat / dipahami bahwa" — nihil
- [x] "Dengan demikian" not overused — nihil
- [x] Em-dash count ≤2 — **0** (en-dash juga 0; rentang dieja "hingga")
- [x] Varied paragraph lengths — campuran 1–4 kalimat (mis. paragraf 1-kalimat "Dua tata letak itu punya nama..." di H2 #2)
- [x] Not every H2 → 3-bullet list — hanya H2 #4 memakai list; sisanya prosa + 1 tabel
- [x] No generic claims without numbers — klaim berangka & bersumber
- [x] No stacked hype adjectives — nihil (canggih/powerful/seamless/terdepan)
- [x] No service-dump paragraph — nihil

### B. Factual & SAP-spec spot-check (vs dossier + product_matrix; verifikasi run 2026-07-17)
| Claim | Source check | Verdict |
|---|---|---|
| OLTP milidetik; OLAP detik hingga menit (kisaran tipikal) | dossier ✓ AWS ID; framing "kisaran tipikal, bukan jaminan" wajib & ada (Flag #1) | pass |
| Volume OLTP GB; OLAP TB–PB | dossier ✓ AWS ID + korroborasi Microsoft Learn | pass |
| Plattner, SIGMOD 2009, judul persis, DOI 10.1145/1559845.1559846, "makalah keynote" | dossier ✓ dblp + Semantic Scholar; framing keynote (Flag #2) ada; tautan DOI (bukan dl.acm.org) | pass |
| SAP HANA: in-memory, berorientasi kolom, OLTP+OLAP di atas data yang sama tanpa menyalin | dossier ✓ cousin Soltius + Microsoft Learn (level konsep); "without time lags" TIDAK dikutip (Flag #4) | pass |
| HTAP = kategori OLTP+OLAP satu platform (tanpa tahun/Gartner) | dossier ✓ Microsoft Learn; nol atribusi Gartner/2014 (Flag #3) | pass |
| Soltius "mengimplementasikan dan mendampingi... SAP di atas SAP HANA" (SAP Platinum via United VARs) | product_matrix ✓ implements/supports, NEVER builds; kredensial valid | pass |

Codd 1993 (asal istilah OLAP) **DIHAPUS** total sesuai kegagalan verifikasi dossier — H2 #1 langsung ke framing "bentuk akses berlawanan". Konfirmasi: nol jejak "Codd"/"1993" di body.

### C. On-page SEO checklist (batch-2026-08 overrides)
- [x] Meta title ≤60 — **59** char; entitas OLAP+OLTP di 12 char pertama (match entitas, bukan exact — disengaja untuk judul komparasi)
- [x] Meta description 140–160 — **154** char; memuat "OLAP dan OLTP" + value props (milidetik, jutaan baris)
- [x] Slug ≤60, kebab-case, keyword — **45** char (`olap-vs-oltp-perbedaan-fungsi-sistem-database`)
- [x] H1 contains keyword/entitas — "OLAP vs OLTP: Perbedaan dan Fungsinya dalam Sistem Database"
- [x] H2 count (batch: 3–4) — **4** body H2
- [x] ≥1 question-format H2 — **3** (H2 #2/#3/#4); ≥1 praktis/terstruktur — H2 #1 (tabel 6 dimensi) + H2 #4 (list ber-lead-in bold)
- [x] Keyword in first 100 words — "OLAP dan OLTP" di lead (~kata 40) + snippet
- [x] Definition snippet 40–60 kata — **46** kata, blockquote "Ringkasnya:", tanpa em-dash
- [x] ≥8 LSI terms — 10+ (OLTP, OLAP, beban kerja database, database transaksional/operasional, query analitis/agregasi, waktu respons, row store, column store, in-memory, HTAP, SAP HANA)
- [x] Internal links (batch: TEPAT 2) — **2**: hub `data-warehouse-solutions` (anchor "data warehouse", H2 #2) + cousin HANA in-memory (anchor "arsitektur in-memory SAP HANA", H2 #3)
- [x] External authoritative citation (batch: 1–2) — **2**: AWS ID (H2 #1) + Plattner DOI (H2 #3)
- [x] FAQ (batch: 2–3) — **3** Q&A
- [x] ≥1 tabel + ≥1 list — tabel 6 dimensi (H2 #1) + list 3 butir (H2 #4)
- [x] Word count (batch: 800–1000) — **959** (tanpa Q3 = 915 < 950, jadi Q3 sah)
- [x] Angka spesifik inline ≥4 — milidetik, detik–menit, GB, TB–PB, 6 dimensi, 2009, tiga tahun, jutaan baris, ratusan transaksi (≥8)
- [x] Image placeholder — **N/A by design** (0); tidak ada validasi image (sesuai addendum §7)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata segera setelah tiap H2 — H2 #1: 44 kata (bentuk akses sebagai penyebab tunggal); H2 #2: 51 kata (tata letak saling meniadakan); H2 #3: 54 kata (penyatuan diajukan formal 2009); H2 #4: 40 kata (pertanyaannya kesegaran data, bukan "mana lebih baik"). **Semua poin BARU, nol pengulangan snippet.**
- [x] Tiap paragraf satu poin quotable & verifiable — tabel dirancang dikutip baris-per-baris; baris "Waktu respons" & "Volume data" bersumber AWS
- [x] FAQ parseable FAQPage; freshness — `publish_month: 2026-08` di meta block

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius sebagai implementator/pendamping, NOT "builds SAP HANA" — "mengimplementasikan dan mendampingi perusahaan yang menjalankan SAP di atas SAP HANA"
- [x] ≤2 self-mention (batch override) — **2** terlihat (positioning line Kesimpulan + soft CTA); dua kemunculan lain hanya URL `soltius.co.id` di internal link, bukan brand mention body
- [x] No unverifiable superlatives — nihil ("terbaik/nomor satu" tidak ada)
- [x] SAP/produk cocok product_matrix/dossier — SAP HANA satu-satunya produk SAP; HANA = mesin database (bukan aplikasi ERP), klarifikasi "≠ SAP S/4HANA" tepat 1 klausa
- [x] Kesimpulan pakai positioning line company_profile — SAP Platinum Partner via United VARs (≤80 kata: 64)
- [x] Soft website CTA = baris paling akhir, setelah Kesimpulan — "...kunjungi soltius.co.id"; anchor funnel SAP HANA; konsultatif, bukan "beli sekarang"
- [x] Hub link inline natural — ya (di H2 #2), bukan callout

### E. Anti-cannibalization spot check
- Closest prior: `2026-06-data-warehouse-solutions-01` (sumbu **repositori**; OLTP/OLAP hanya alat retoris)
- Subtopic overlap (Jaccard estimate): ~0.10–0.12 (< 0.4)
- Verdict: **distinct angle confirmed** — brief ini bersumbu **beban kerja** (OLAP/OLTP sebagai subjek yang dibedah sampai lapisan penyimpanan + penyatuan). Enam artikel history yang menyebut OLTP/OLAP hanya sebagai klausa pendukung justru menjadikan artikel ini pengisi lubang dasar cluster. Tidak ada risiko kanibalisasi.

## Batch-2026-08 overrides applied (ringkasan)
| Aturan default | Override batch | Status di final |
|---|---|---|
| Word band 1.500–1.800 | **800–1000 (target 900)** | 959 ✓ |
| FAQ 5–8 | **2–3** | 3 ✓ |
| Internal link 3 (1 hub + 2 cousin) | **TEPAT 2 (1 hub + 1 cousin)** | 2 ✓ |
| Image placeholder / images.json | **0 — DILARANG, validasi N/A** | 0 ✓ |
| Soltius mention ≤3 | **≤2** | 2 ✓ |
| H2 4–7 | **3–4** | 4 ✓ |
| Definisi boleh diulang kontekstual | **Definisi SEKALI di snippet; body dilarang mengulang** | patuh ✓ |
| Lead + roadmap opsional | **Lead ≤80 kata, TANPA roadmap** | 53 kata ✓ |
| Kesimpulan | **≤80 kata + 1 positioning line; CTA soltius.co.id baris terakhir** | 64 kata ✓ |

## The shipping question
Jika artikel ini tayang di soltius.co.id besok dan dibaca konsultan SAP senior sekaligus CIO skeptis: penjelasannya jujur (hedge AWS eksplisit, penyatuan bukan jawaban universal, HANA bukan satu-satunya), berangka & bersumber (AWS ID + makalah keynote SIGMOD 2009 yang tidak dimiliki satu pun pesaing lokal), dan funnel-nya bekerja karena penjelasannya, bukan karena HANA disebut berkali-kali. WEBARQ Promote bisa bangga. **Approve.**
