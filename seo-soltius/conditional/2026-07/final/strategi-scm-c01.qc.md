---
brief_id: "strategi-scm-c01"
editor_run_date: "2026-07-06"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-07 — style_addendum.md overrides applied (word band 800–1000, FAQ 2–3, internal link 2, ZERO image placeholder, Soltius max 2, lead/kesimpulan ≤80 kata, definisi hanya di snippet)"
---

# Editor QC Report — 5 Strategi Supply Chain Management yang Optimal (Update 2026)

## Recommendation
**approve**

Draft masuk dalam kondisi sangat bersih dan patuh penuh pada override batch conditional 2026-07. Semua angka terlacak ke dossier dengan framing nuansa yang benar (termasuk McKinsey 95% tier-1 vs 42% tier-2), semua caveat dossier dipatuhi, struktur GEO lengkap (jawaban langsung 48/44/49 kata per H2, semua poin BARU milik H2-nya), zero AI-tell, zero em-dash, zero `{IMAGE_NN}`. Saya menerapkan 4 perbaikan minor in-place (entity/EYD/keyword placement/akurasi metadata) tanpa mengubah word count. Tidak ada isu terbuka yang menghalangi publikasi. REWRITE: slug lama dipertahankan persis; `date_modified: 2026-07-06` terisi.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero pola terlarang; ritme paragraf bervariasi 1–4 kalimat; sentuhan praktisi ("Kesalahan yang paling sering ditemui di lapangan...") tanpa menyebut Soltius |
| Factual & SAP-spec accuracy | 10 | 5/5 klaim spot-check lolos vs dossier; modul SAP IBP persis daftar terverifikasi; PT Kino sebatas go-live + 4 bulan |
| On-page SEO compliance | 9 | Semua item checklist (nilai override batch) terpenuhi; meta 52/148/47 chars |
| GEO extractability (§2a) | 9 | Direct answer 48/44/49 kata, tiap H2 poin baru (bukan pengulangan snippet); tabel 5 baris extractable; dateModified akurat |
| Soltius framing discipline | 10 | 2 mention persis (positioning line + CTA); "mendampingi... mengimplementasikan" — implementer, bukan pembuat; tanpa superlatif |
| Internal linking | 10 | Tepat 2: hub SCM (anchor natural di lead) + cousin SAP IBP S&OP (di tahap 3 H2 #2); keduanya 200/OK per dossier |
| FAQ quality | 9 | 3 Q&A, jawaban 41/38/45 kata (band 30–60), tiap jawaban 1 fakta/angka (7 pemborosan / 4 KPI + kuartalan / 29% Gartner) |
| Image-brief completeness | N/A | Batch override: zero placeholder by design — BUKAN isu; tidak ada images.json untuk batch ini |

## What I fixed (changelog — 4 edits in-place)
- **Entity/akronim**: ekspansi S&OP dipindah ke sebutan pertama di body (direct answer H2 #1: "S&OP (*Sales and Operations Planning*)"); sebutan di item strategi #2 diringkas jadi "S&OP" saja. Direct answer H2 #1 jadi 48 kata (tetap dalam band 40–60); net word count 0.
- **EYD**: "multi-produk" → "multiproduk" (bentuk terikat *multi-* ditulis serangkai), item strategi #4.
- **Keyword di baris akhir**: soft CTA "kesiapan perencanaan rantai pasok" → "kesiapan **strategi rantai pasok**" — supporting keyword kini hadir di paragraf terakhir (playbook §3) sekaligus menghilangkan pengulangan frasa "perencanaan rantai pasok" dari positioning line satu kalimat sebelumnya.
- **Akurasi metadata frontmatter**: konteks sitasi McKinsey diperbaiki dari "95% visibilitas berhenti di tier-1" (salah framing) menjadi "95% punya visibilitas risiko sampai tier-1 tetapi hanya 42% menjangkau tier-2" — konsisten dengan nuansa WAJIB dossier (Claim 3).

## What I flagged (open issues)
- (tidak ada isu yang menghalangi) ℹ️ Catatan non-blocking: URL gartner.com dan sap.com menolak fetch langsung (403) pada run researcher — angka terverifikasi via multi-sumber korroborasi per dossier (confidence: high). Tidak perlu tindakan.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5) — PASS
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hit (grep)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 hit
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hit
- [x] "Dengan demikian" not overused — 0 hit
- [x] Em-dash count ≤2 — actual: **0**
- [x] Varied paragraph lengths — lead 2 kalimat, one-liner "Tabel berikut merangkum kelimanya.", blok strategi 2–3 kalimat, paragraf honest-take 3 kalimat
- [x] Not every H2 → 3-bullet list — H2 #1 prose+list bold+tabel; H2 #2 prose+list bernomor; H2 #3 prose murni
- [x] No generic claims without numbers — 10 angka inline: 29%, 95%, 42%, 82%, 60%, 2031, 7 pemborosan, 4 indikator, 4 bulan, kuartalan
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — 0 hit
- [x] No service-dump paragraph — positioning line tunggal, 1 layanan anchor (SAP IBP)

### B. Factual & SAP-spec spot-check — 5/5 PASS
| Claim | Source check | Verdict |
|---|---|---|
| 29% organisasi supply chain telah membangun kapabilitas (Gartner, Feb 2025) — snippet + FAQ #3 dengan link inline | Dossier Claim 1 ✓ (rilis 2025-02-18, survei 579 profesional) | pass |
| 95% visibilitas sampai tier-1, baru 42% menjangkau tier-2 (McKinsey, Des 2025) — strategi #1, link inline | Dossier Claim 3 ✓ — framing nuansa benar ("mayoritas berhenti di tier-1", BUKAN "tidak punya visibilitas") | pass |
| 82% rantai pasok terdampak tarif baru 2025 (McKinsey, survei sama) — strategi #3 | Dossier Claim 2 ✓ | pass |
| SAP IBP: cloud, di atas SAP HANA, menyatukan S&OP, forecasting & demand, response & supply, demand-driven replenishment, inventory planning + simulasi what-if | Dossier Claim 5 ✓ — persis daftar terverifikasi sap.com; tidak ada modul karangan (tanpa "control tower") | pass |
| Go-live SAP IBP S&OP di PT Kino Indonesia dalam 4 bulan (positioning line) | Dossier Claim 6 ✓ — sebatas fakta go-live + durasi (tertulis di halaman news 200/OK); tanpa klaim hasil terukur | pass |

Caveat dossier lain yang diverifikasi patuh: Gartner Mar 2026 (60%/2031) = atribusi tanpa link sesuai jatah 2 sitasi inline ✓; "mulai dari empat indikator" tanpa atribusi lembaga ✓; "pendekatan hibrida" tanpa kata leagile/atribusi ASCM ✓; tanpa target KPI numerik (FAQ #2 justru mengarahkan ke baseline internal) ✓; tanpa tanggal terbit halaman lama ✓; tanpa rumus lead time/safety stock, AI hanya 2 kalimat (boundary sibling) ✓.

### C. On-page SEO checklist (seo_playbook §3 + NILAI OVERRIDE batch 2026-07) — PASS
- [x] Meta title ≤60 (keyword first 30) — actual: **52 chars**, keyword mulai karakter ke-3
- [x] Meta description 140–160 — actual: **148 chars**
- [x] Slug ≤60, kebab-case, keyword — actual: `5-strategi-supply-chain-management-yang-optimal` (**47 chars**; REWRITE — WAJIB tetap = segmen akhir URL lama ✓)
- [x] H1 contains keyword ✓ ("5 Strategi Supply Chain Management yang Optimal (Update 2026)")
- [x] H2 count (override: 3–4 body H2) — actual: **3** body H2 + FAQ + Kesimpulan
- [x] ≥1 question-format H2 — actual: **2** ("Bagaimana Urutan...?", "Kapan ... Perlu Dirombak?"); H2 #3 sekaligus honest/counter-conventional ("tidak ada strategi universal", "software bukan strategi")
- [x] ≥1 H2 praktis/terstruktur dengan tabel — H2 #1: list bold 5 strategi + tabel Strategi|Fokus|Indikator
- [x] Keyword in first 100 words ✓ (lead) + last paragraph ✓ (CTA, setelah fix)
- [x] Definition snippet — blockquote "Ringkasnya:" **58 kata** (band 40–60), satu-satunya definisi
- [x] **CEK REPETISI DEFINISI (override)**: definisi TIDAK diulang di body/H2 mana pun; tanpa H2 definitional; direct answer tiap H2 berisi poin baru ✓
- [x] LSI terms ≥8 — counted: 11 (strategi rantai pasok, visibilitas end-to-end, diversifikasi pemasok, lean/agile supply chain, demand planning/perencanaan permintaan, S&OP, KPI supply chain/OTIF, perputaran persediaan, cash-to-cash, SAP IBP, resiliensi→ketahanan)
- [x] Internal links (override: TEPAT 2 = 1 hub + 1 cousin) — actual: **2** — hub `apa-itu-supply-chain-management` (anchor "supply chain management", inline di lead) + cousin `how-sap-ibp-supports-the-sales-operations-planning-s-op-process` (anchor "SAP IBP untuk proses S&OP", tahap 3 H2 #2); keduanya 200/OK per dossier; tanpa "BACA JUGA"
- [x] External authoritative citations (1–2 inline) — actual: **2** (McKinsey Des 2025 di strategi #1; Gartner Feb 2025 di FAQ #3) + 1 atribusi tanpa link (Gartner Mar 2026)
- [x] FAQ (override: 2–3 Q&A, jawaban 30–60 kata + 1 fakta/angka) — actual: **3** Q&A, 41/38/45 kata, fakta: 7 pemborosan / 4 KPI+kuartalan / 29%
- [x] Image placeholders (override: ZERO by design) — actual: **0** `{IMAGE_NN}` ✓ (validasi image-brief N/A — bukan isu)
- [x] ≥1 elemen terstruktur — 1 tabel (5 strategi) + list bold 5 item + list bernomor 3 tahap
- [x] Word count (override: 800–1000, target ~900) — actual: **948** (clean) / 985 (raw-token validator method) — keduanya dalam band; frontmatter `word_count: 948` akurat
- [x] ≥4 angka spesifik inline — actual: 10

### C2. GEO extractability (seo_playbook §2a, dipadatkan per addendum §5) — PASS
- [x] Direct 40–60-word answer setelah tiap H2 — actual: **48 / 44 / 49 kata**; masing-masing poin BARU milik H2-nya (daftar 5 strategi / urutan data-proses-teknologi / pemicu perombakan) — bukan pengulangan snippet
- [x] Satu paragraf = satu poin quotable & verifiable — tiap strategi = 1 blok bold berdiri sendiri; tabel extractable baris-per-baris
- [x] Entity clarity — nama lengkap sebutan pertama: S&OP (*Sales and Operations Planning*) [diperbaiki editor], OTIF (on-time in-full), SAP Integrated Business Planning (SAP IBP), SAP HANA, *tier-1*, *agentic AI*
- [x] FAQ parseable untuk FAQPage schema (3 H3 + jawaban self-contained)
- [x] Freshness — `date_modified: 2026-07-06` di frontmatter (krusial: alasan rewrite adalah staleness) ✓

### D. Soltius framing discipline (product_matrix.md + style_guide §11 + override maks 2) — PASS
- [x] Soltius = implementer/pendamping ("mendampingi perusahaan merancang dan mengimplementasikan ... hingga dukungan pasca go-live") — NEVER "builds" ✓
- [x] Self-mentions (override: maks 2) — actual: **2** (1 positioning line di Kesimpulan + 1 soft CTA soltius.co.id); tanpa aside di body ✓
- [x] No unverifiable superlatives — 0 (kredensial: SAP Platinum Partner melalui United VARs = pre-approved company_profile)
- [x] SAP product names/specs match dossier ✓ (lihat B)
- [x] Kesimpulan ≤80 kata di bawah `## Kesimpulan` — actual: **68 kata**, dengan positioning line ✓
- [x] Soft CTA soltius.co.id = baris PALING akhir, terpisah dari Kesimpulan, konsultatif ✓
- [x] Hub link = anchor inline natural di lead ✓
- [x] Lead ≤80 kata tanpa paragraf roadmap — actual: **52 kata**, pain konkret + keyword + janji artikel ✓

### E. Anti-cannibalization spot check — PASS
- Konteks: **REWRITE halaman Soltius sendiri** (URL/slug dipertahankan) — refresh, bukan duplikasi.
- Closest prior: `lead-time-c01` (conditional 2026-06) — Jaccard ≈ 0.07 per brief. Spot-check editor: artikel ini TIDAK memuat rumus lead time/reorder point/safety stock; AI hanya 2 kalimat tren (boundary `ai-supply-chain-c01` aman); `articles_history/index.json` tidak memuat artikel strategi SCM. Verdict: **distinct angle confirmed**.

### F. Image-brief completeness — **N/A per batch override**
- Batch conditional 2026-07: ZERO image placeholder by design; stage image-planner dilewati; tidak ada `images.json`. Diverifikasi: 0 `{IMAGE_NN}` di final. Bukan isu.

## Batch-2026-07 overrides applied (ringkasan)
Word band 800–1000 ✓ (948) · FAQ 2–3 ✓ (3) · internal link tepat 2 ✓ · zero image placeholder ✓ (validasi N/A) · Soltius maks 2 ✓ · lead ≤80 tanpa roadmap ✓ (52) · kesimpulan ≤80 + positioning ✓ (68) · CTA soltius.co.id baris akhir ✓ · definisi hanya di snippet ✓ · 3 body H2 (≥1 question, ≥1 praktis+tabel) ✓ · ≥4 angka inline ✓ (10) · direct answer 40–60 kata/H2 dengan poin baru ✓ · REWRITE slug dipertahankan + date_modified ✓.

## The shipping question
Konsultan SAP senior dan CIO skeptis akan menemukan: angka 2025–2026 bersumber dengan nuansa yang jujur, urutan penerapan yang berani bilang "software bukan strategi", tabel indikator tanpa target karangan, dan corong SAP IBP yang earned. Ship it. → **approve**
