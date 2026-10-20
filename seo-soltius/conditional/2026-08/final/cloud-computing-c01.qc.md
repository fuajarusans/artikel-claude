---
brief_id: "cloud-computing-c01"
editor_run_date: "2026-07-18"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-08 (style_addendum.md overrides applied — 800–1000 kata, target 900; ZERO image placeholder; FAQ 2–3; internal link TEPAT 2; maks 2 mention Soltius; definisi hanya di snippet; PILLAR cloud — service model diringkas, tidak membedah who-manages-what)"
word_count: 977
---

# Editor QC Report — Apa Itu Cloud Computing dan Jenis Layanannya untuk Bisnis

## Recommendation
**approve**

Draf datang bersih (kegagalan editor sebelumnya murni API 529 transien; isi utuh). Semua batas keras batch 2026-08 terpenuhi: body 977 kata (konvensi cleaned-prose, band 800–1000, di bawah cap 1000); nol `{IMAGE_NN}`; FAQ 2 (Q3 sah dilewati karena word count 964 ≥ 950 sebelum edit); internal link tepat 2 (hub `migrasi-erp-ke-cloud` di lead + cousin `private-cloud-dan-public-cloud` setelah tabel); sitasi eksternal 2 tautan (NIST + IDC) plus Gartner via atribusi teks; em-dash 0; mention Soltius 2 (positioning line + soft CTA); definisi muncul sekali saja di snippet. Fact-check terhadap dossier lolos untuk seluruh angka dan atribusi; keenam Flag researcher ditangani persis (September 2011 dari PDF, bukan metadata "April 2012"; IDC USD 1 triliun dipakai, bukan mewarisi angka Gartner "USD 850 miliar" yang keliru dari artikel Juli; tabel deployment tidak diatribusikan bulat ke NIST; RISE 1 kalimat vendor-neutral; SAP S/4HANA Cloud tanpa sufiks edition — TIDAK "dikoreksi" jadi SAP Cloud ERP; UU No. 27 Tahun 2022 dengan ejaan "pelindungan"). **Boundary dedup PILLAR vs spoke Juli `saas-paas-iaas-c01` terjaga sempurna**: model layanan diringkas satu klausa per model, nol tabel shared-responsibility, nol contoh produk per model, nol aturan "pilih SaaS jika…". Dua penyesuaian editor (word_count + lead-in sumbu kedua) di bawah. Layak tayang.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tanpa pembuka klise; lead membuka pada pain konkret (istilah "cloud" dipakai untuk sewa server biasa); ritme paragraf bervariasi 1–4 kalimat, termasuk paragraf 1-kalimat "Itu hosting."; em-dash 0; tidak setiap H2 jadi list; tanpa adjektiva hype. |
| Factual & SAP-spec accuracy | 10 | Semua angka/atribusi cocok dossier (NIST verbatim, IDC, Gartner sovereign, UU PDP). Nol klaim karangan; nol angka TCO/penghematan. Framing SAP tepat. |
| On-page SEO compliance | 9 | Meta title 48, meta desc 159, slug 40; keyword di title/H1/lead/snippet/meta/closing; H2 4 body (≥1 question, ≥1 tabel). |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata setelah tiap H2 (43/43/41/44), tiap berisi poin BARU (bukan pengulangan snippet); tabel 6 baris dapat dikutip baris-per-baris; FAQ FAQPage-ready. |
| Soltius framing discipline | 10 | Implementator/pendamping ("mitra implementasi SAP… mendampingi perusahaan memindahkan sistem inti ke cloud lewat layanan Migration"), NEVER builds, NEVER penyedia cloud; 1 kredensial (Best RISE & Best Cloud Partner 2021), tidak menumpuk; 2 mention. |
| Internal linking | 10 | Tepat 2, inline natural, tanpa "BACA JUGA": hub (lead) + cousin deployment (setelah tabel). Down-link spoke ditunda (URL belum live) — dicatat sebagai utang tautan. |
| FAQ quality | 9 | 2 Q&A, tiap jawaban memuat fakta/angka (5 karakteristik NIST; Gartner USD 80 miliar 2026); mengambil dari PAA; tidak menyalin rumusan spoke Juli. |

## What I fixed (changelog)
- **Frontmatter `word_count`: 983 → 977.** Diukur ulang dengan konvensi cleaned-prose batch (teks yang terlihat pembaca; anchor link dihitung, URL tidak; sel tabel dihitung, pipa/pemisah tidak; penanda heading/list tidak). Metode dikalibrasi terhadap final sekelas — memberi 958 untuk `olap-oltp-c01` (angka editor 959) dan 855 untuk `saas-paas-iaas-c01` (angka editor 853), selisih ±1–2 (noise metode). Nilai akhir 977 sudah termasuk edit lead-in di bawah; sebelum edit = 964.
- **Lead-in sumbu kedua ditambahkan** (H2 #2, sebelum tabel deployment): kalimat "Sumbu kedua, model deployment, menjawab di mana dan untuk siapa infrastruktur itu berjalan." (+13 kata). Paralel dengan "Sumbu pertama adalah jenis layanan cloud" agar poin orisinal artikel (dua sumbu yang sering tertukar) eksplisit dan tabel jelas mewakili sumbu deployment — memperkuat ekstraktabilitas GEO. Lead-in tabel tetap netral ("Perbandingan praktisnya:") sehingga tabel tidak diatribusikan bulat ke NIST (sesuai Flag #4 dossier).

## What I flagged (open issues)
- ⚠️ **Utang tautan (link-debt) — bukan blocker.** Instruksi dedup meminta down-link ke spoke `saas-paas-iaas-c01`. URL spoke (`.../saas-paas-iaas-perbedaan-contoh-penerapan`) **belum live** (WebFetch brief hari ini: HTTP 500), dan konvensi batch (dikonfirmasi dari 14 final Juli) hanya menautkan URL soltius.co.id yang sudah live — link mati = kerugian SEO nyata. *Keputusan editor:* PERTAHANKAN peta tautan brief (hub + cousin live, total 2) dan biarkan penunjuk tanpa tautan ("layak dibahas terpisah") di paragraf model layanan. Substansi dedup sudah dipenuhi tanpa link. *Rekomendasi:* saat kedua artikel tayang di CMS, tim menambah tautan silang manual dari paragraf itu ke spoke. Dicatat untuk curator/CMS.
- ⚠️ **Non-blocking, lintas-batch (bukan lingkup artikel ini).** Dossier Flag #1 mencatat artikel Juli `saas-paas-iaas-c01` memuat angka Gartner "USD 850 miliar pada 2026" yang tidak konsisten aritmetika dan tak terverifikasi dari sumber primer. Artikel ini **tidak mewarisinya** (memakai IDC). Perbaikan artikel Juli layak dijadwalkan terpisah.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — grep bersih; lead membuka pada pain konkret
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 kemunculan
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0
- [x] Em-dash count ≤2 — **0** (en-dash juga 0; rentang dieja "hingga/sampai")
- [x] Varied paragraph lengths — campuran 1–4 kalimat (paragraf 1-kalimat "Itu hosting."; "Rumusan itu terbit… September 2011.")
- [x] Not every H2 → 3-bullet list — hanya H2 #1 memakai numbered list (5 karakteristik); H2 #2 tabel; H2 #3/#4 prosa
- [x] No generic claims without numbers — klaim berangka & bersumber
- [x] No stacked hype adjectives — nihil (canggih/powerful/seamless/terdepan)
- [x] No service-dump paragraph — nihil

### B. Factual & SAP-spec spot-check (vs dossier + product_matrix; verifikasi 2026-07-18)
| Claim | Source check | Verdict |
|---|---|---|
| NIST SP 800-145 terbit September 2011; 5 karakteristik, 3 model layanan, 4 model deployment | dossier ✓ (PDF diekstrak; "September 2011" sampul; "April 2012" hanya Errata) | pass |
| Rumusan 5 karakteristik esensial (istilah Inggris + glosa ID) | dossier ✓ kutipan verbatim NIST §2 hlm.2; parafrase tidak menggeser makna | pass |
| Community cloud = model deployment keempat NIST | dossier ✓ ("Private, Community, Public, Hybrid") | pass |
| IDC: belanja cloud publik global > USD 1 triliun pada 2026, ~21% | dossier ✓ (≥4 outlet independen atribusi identik; angka Gartner 850 sengaja TIDAK dipakai — Flag #1) | pass |
| Gartner: sovereign cloud IaaS USD 80 miliar pada 2026 (FAQ Q2) | dossier ✓ (judul siaran pers Gartner 9 Feb 2026); atribusi teks tanpa tautan (jaga total link eksternal = 2) | pass |
| SAP S/4HANA Cloud (tanpa sufiks edition); RISE with SAP = penawaran SAP pindah ke cloud ERP | dossier ✓ (Flag #5: jangan koreksi ke "SAP Cloud ERP"; Flag #6: 1 kalimat, tanpa isi paket/harga/SLA) | pass |
| UU No. 27 Tahun 2022 (ejaan "pelindungan"), 1 klausa | dossier ✓ (BPK/JDIH Komdigi) | pass |
| Soltius "mitra implementasi SAP… lewat layanan Migration" (Best RISE & Best Cloud Partner 2021) | product_matrix ✓ implements/migrates/supports, NEVER builds, NEVER penyedia cloud | pass |

### C. On-page SEO checklist (batch-2026-08 overrides)
- [x] Meta title ≤60 — **48** char; "Cloud Computing" di 15 char pertama
- [x] Meta description 140–160 — **159** char; memuat "Cloud computing" + value props (5 karakteristik NIST, SaaS/PaaS/IaaS, public/private/hybrid)
- [x] Slug ≤60, kebab-case, keyword — **40** char (`cloud-computing-pengertian-jenis-layanan`)
- [x] H1 contains keyword — "Apa Itu Cloud Computing dan Jenis Layanannya untuk Bisnis"
- [x] H2 count (batch: 3–4) — **4** body H2
- [x] ≥1 question-format H2 — **3** (#1, #3, #4); ≥1 praktis/terstruktur — #1 (numbered list) + #2 (tabel 6 baris)
- [x] Keyword in first 100 words — "cloud computing" di lead (~kata 52) + snippet
- [x] Definition snippet 40–60 kata — **47** kata, blockquote "Ringkasnya:", tanpa em-dash
- [x] ≥8 LSI terms — 12+ (komputasi awan, karakteristik, model deployment, public/private/hybrid/community cloud, SaaS, PaaS, IaaS, multi-tenant, resource pooling, measured service, rapid elasticity, OpEx, SAP S/4HANA Cloud, RISE with SAP)
- [x] Internal links (batch: TEPAT 2) — **2**: hub `migrasi-erp-ke-cloud` (lead) + cousin `private-cloud-dan-public-cloud` (setelah tabel)
- [x] External authoritative citation (batch: 1–2) — **2** tautan: NIST (H2 #1) + IDC (H2 #3); Gartner via atribusi teks
- [x] FAQ (batch: 2–3) — **2** Q&A (Q3 dilewati sah; word count ≥ 950)
- [x] ≥1 elemen terstruktur — numbered list (H2 #1) + tabel (H2 #2)
- [x] Word count (batch: 800–1000) — **977** cleaned-prose
- [x] Angka spesifik inline ≥4 — 5 karakteristik, 3 model layanan, 4 model deployment, September 2011, USD 1 triliun (2026), ~21%, USD 80 miliar (2026), 2021, UU No. 27 Tahun 2022 (≥9)
- [x] Image placeholder — **N/A by design** (0); validasi image dilewati (addendum §7)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata segera setelah tiap H2 — #1: 43 (uji 5 karakteristik); #2: 43 (dua sumbu tertukar); #3: 41 (manfaat + syaratnya); #4: 44 (konsekuensi untuk sistem inti). **Semua poin BARU, nol pengulangan snippet.**
- [x] Tiap paragraf satu poin quotable & verifiable — tabel dikutip baris-per-baris; baris NIST vs praktik dibedakan; koreksi "private ≠ on-premise" orisinal & bersumber
- [x] FAQ parseable FAQPage; freshness — `publish_month: 2026-08` di meta block

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius sebagai implementator/pendamping, NOT "builds SAP" / NOT penyedia cloud — "mitra implementasi SAP… memindahkan sistem inti ke cloud lewat layanan Migration"
- [x] ≤2 self-mention (batch override) — **2**: positioning line (Kesimpulan) + soft CTA (soltius.co.id). Tanpa aside Soltius di body.
- [x] No unverifiable superlatives — nihil ("terbaik/nomor satu" tidak ada)
- [x] SAP/produk cocok product_matrix/dossier — SAP S/4HANA Cloud (tanpa edition) + RISE with SAP; keduanya vendor-neutral
- [x] Kesimpulan pakai positioning line company_profile — Best RISE & Best Cloud Partner (2021) (≤80 kata: 56)
- [x] Soft website CTA = baris paling akhir, setelah Kesimpulan — "…kunjungi soltius.co.id"; anchor funnel RISE with SAP; konsultatif
- [x] Hub link inline natural (lead) — ya, bukan callout

### E. Anti-cannibalization spot check
- Closest prior: `saas-paas-iaas-c01` (2026-07) — spoke satu sumbu (model layanan + siapa mengelola apa)
- Subtopic overlap (Jaccard estimate): **~0.19** (< 0.4) — sesuai brief
- Verdict: **distinct angle confirmed** — artikel ini PILLAR (definisi baku + 5 karakteristik NIST + model deployment public/private/hybrid + manfaat bisnis). Model layanan hanya diringkas 1 paragraf (satu klausa per model), nol tabel shared-responsibility, nol contoh produk per model, nol aturan pemilihan — semuanya milik spoke. Boundary terjaga.

## Batch-2026-08 overrides applied (ringkasan)
| Aturan default | Override batch | Status di final |
|---|---|---|
| Word band 1.500–1.800 | **800–1000 (target 900)** | 977 ✓ |
| FAQ 5–8 | **2–3** | 2 ✓ |
| Internal link 3 (1 hub + 2 cousin) | **TEPAT 2 (1 hub + 1 cousin)** | 2 ✓ |
| Image placeholder / images.json | **0 — DILARANG, validasi N/A** | 0 ✓ |
| Soltius mention ≤3 | **≤2** | 2 ✓ |
| H2 4–7 | **3–4** | 4 ✓ |
| Definisi boleh diulang kontekstual | **Definisi SEKALI di snippet; body dilarang mengulang** | patuh ✓ |
| Lead + roadmap opsional | **Lead ≤80 kata, TANPA roadmap** | 58 kata ✓ |
| Kesimpulan | **≤80 kata + 1 positioning line; CTA soltius.co.id baris terakhir** | 56 kata ✓ |

## The shipping question
Jika artikel ini tayang di soltius.co.id besok dan dibaca konsultan SAP senior sekaligus CIO skeptis: penjelasannya berpijak pada standar (NIST SP 800-145 sebagai alat uji, bukan hafalan), jujur (hosting≠cloud dari teks NIST; "cloud tidak otomatis lebih murah"; private≠on-premise), berangka & bersumber (5/3/4 + September 2011 + IDC + Gartner), dan funnel bekerja lewat penjelasan, bukan promosi. Pembeda otoritas (standar + dua-sumbu) tidak dimiliki satu pun pesaing halaman-1 ID. WEBARQ Promote bisa bangga. **Approve.**
