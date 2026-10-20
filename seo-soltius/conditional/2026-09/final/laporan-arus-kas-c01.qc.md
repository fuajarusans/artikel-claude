---
brief_id: "laporan-arus-kas-c01"
editor_run_date: "2026-09-01"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-09 (style_addendum.md overrides applied — band 800–1000, FAQ 2–3, 2 internal links, no image placeholders, definisi hanya sekali di snippet, maks 2 Soltius mention)"
---

# Editor QC Report — Laporan Arus Kas: Pengertian, Metode Langsung & Tidak Langsung

## Recommendation
**approve**

Draf masuk dalam kondisi bersih dan patuh penuh pada batch override 2026-09. Word count cleaned-prose 989 (band 800–1000), FAQ 3, internal link tepat 2 (hub + cousin), sitasi eksternal 2 inline (IAI PSAK 207 + SAP Learning), 0 image placeholder, 0 em-dash, definisi muncul sekali (di snippet) tanpa pengulangan di body. Seluruh rantai aritmetika ilustrasi diverifikasi ulang dan cocok (dua metode berujung Rp65.000.000; kenaikan bersih kas Rp5.000.000; kas Rp50 juta → Rp55 juta). Framing Soltius benar (implements/mendampingi, bukan builds), maks 2 self-mention, CTA soltius.co.id sebagai baris terakhir. Editor hanya menerapkan dua polish minor (meta description diberi buffer di bawah 160; satu redundansi frasa di H2 #1 dirapikan). Layak tayang.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dash, tanpa opener klise, ritme paragraf bervariasi 1–4 kalimat, tanpa adjektiva hype, tanpa service-dump. |
| Factual & SAP-spec accuracy | 10 | PSAK 207 (penomoran ulang PSAK 2; disahkan 12 Des 2022; efektif 1 Jan 2024) cocok dossier; rantai angka kedua metode terverifikasi; tidak ada tarif pajak/benchmark karangan; SAP framing (semantic tag + rumus) sesuai SAP Learning, tanpa ACDOCA/Universal Journal/CDS view. |
| On-page SEO compliance | 9 | Meta title 50, meta desc 157, slug 47; keyword di H1/first-100/penutup/CTA; 4 H2 (≥1 question-format); FAQ 3; 4 tabel. Semua sesuai override batch. |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata setelah tiap H2 dengan poin BARU; satu poin quotable/paragraf; FAQ FAQPage-ready; freshness via `publish_month: 2026-09`. |
| Soltius framing discipline | 10 | Positioning line implementator/pendamping SAP S/4HANA Finance; tanpa superlatif; 2 self-mention total (1 Kesimpulan + 1 soft CTA). |
| Internal linking | 10 | Tepat 2, inline natural, tanpa "BACA JUGA": hub `macam-macam-laporan-keuangan` (H2 #1) + cousin `laporan-laba-rugi-komponen-jenis-cara-membaca` (H2 #3). Cousin = sibling batch, live di 2026-08/final; primary cousin dipakai (bukan fallback). |
| FAQ quality | 9 | 3 Q&A dari PAA; tiap jawaban 40–48 kata dengan 1 fakta/angka (anjuran metode langsung; Rp82jt→Rp65jt; setara kas ≤3 bulan). |

## What I fixed (changelog)
- Meta description dipangkas dari 160 → 157 karakter (buang buffer di batas tepat 160; substansi & keyword utuh) — `tiga aktivitasnya` → `tiga aktivitas`.
- H2 #1 paragraf ke-2: redundansi `salah satu dari lima komponen ..., satu di antara [macam-macam laporan keuangan]` dirapikan menjadi `..., termasuk dalam [macam-macam laporan keuangan]` (anchor hub & makna tetap; net −1 kata → body 989).
- Frontmatter `word_count` disinkronkan 990 → 989 (hasil `tools/count_words.py` atas file final).

## What I flagged (open issues)
- ℹ️ Meta description berada di sweet spot 150–160 (157) — di bawah plafon setelah trim. Tidak ada isu.
- ℹ️ Klaim "standar menganjurkan metode langsung" (H2 #2 + FAQ #1) ditulis sebagai anjuran standar umum tanpa mengutip nomor paragraf PSAK — sesuai arahan dossier (anjuran berasal dari IAS 7 par. 19, acuan PSAK 207; confidence medium-high). Aman; tidak ada nomor pasal yang dikarang. Tidak perlu tindakan.
- ℹ️ Tidak ada field `dateModified` terpisah — skema frontmatter pipeline ini memakai `publish_month` sebagai penanda freshness (konsisten dengan template §7 dan sibling finals). N/A.
- ℹ️ Validasi image-brief: N/A by design (batch 2026-09 tanpa image placeholder) — tidak di-flag.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] Tanpa opener "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" — lead buka dengan pain konkret ("laba naik tapi saldo makin seret").
- [x] Tidak ada "Selain itu" membuka ≥2 paragraf berturut.
- [x] Tidak ada "Penting untuk dicatat/dipahami".
- [x] "Dengan demikian" tidak dipakai.
- [x] Em-dash = 0 (≤2). En-dash = 0.
- [x] Panjang paragraf bervariasi (1–4 kalimat).
- [x] Tidak setiap H2 diikuti bullet 3-poin — memakai tabel + prosa.
- [x] Tidak ada klaim generik tanpa angka.
- [x] Tidak ada adjektiva hype bertumpuk (canggih/powerful/seamless/terdepan).
- [x] Tidak ada paragraf service-dump.

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| PSAK 207 = penomoran ulang PSAK 2, disahkan 12 Des 2022, efektif 1 Jan 2024 | dossier ✓ + IAI web.iaiglobal.or.id/PSAK-Umum/8 | pass |
| Laporan arus kas = salah satu dari 5 komponen laporan keuangan lengkap | dossier ✓ (PSAK 201) | pass |
| Metode tidak langsung: 82+30−40−25+18 = Rp65.000.000 | aritmetika diverifikasi (=65) | pass |
| Metode langsung: 810−517−190−15−23 = Rp65.000.000 (sub: 850−40=810; 510+25−18=517; 220−30=190) | aritmetika diverifikasi (=65) | pass |
| Laporan lengkap: 65−100+40 = Rp5jt; kas 50+5 = Rp55jt | aritmetika diverifikasi | pass |
| SAP S/4HANA Finance: laporan arus kas via semantic tag pada G/L account; rumus operasi+investasi+pendanaan | dossier ✓ + SAP Learning | pass |
| Setara kas jatuh tempo lazimnya ≤3 bulan | dossier ✓ (IAS 7 par. 7), di-hedge "lazimnya" | pass |
| Tarif pajak / benchmark likuiditas | tidak ada yang dikarang (nominal pajak Rp23jt berdiri tanpa tarif) | pass |

### C. On-page SEO checklist (batch override 2026-09)
- [x] Meta title ≤60 — 50 char; keyword "Laporan Arus Kas" di 16 char pertama.
- [x] Meta description 140–160 — 157 char.
- [x] Slug ≤60, kebab-case, keyword — `laporan-arus-kas-metode-langsung-tidak-langsung` (47).
- [x] H1 memuat keyword.
- [x] H2 count = 4 konten (band batch 3–4). ≥1 question-format: H2 #2 "Apa Bedanya Metode Langsung dan Tidak Langsung?".
- [x] Keyword di 100 kata pertama (lead).
- [x] Definition snippet 40–60 kata (56) tepat setelah lead — satu-satunya definisi.
- [x] Internal links = 2 (1 hub + 1 cousin), inline natural.
- [x] Sitasi eksternal = 2 (IAI PSAK 207; SAP Learning).
- [x] FAQ = 3 (band batch 2–3).
- [x] ≥1 tabel — 4 tabel.
- [x] Word count 800–1000 (cleaned-prose `tools/count_words.py`) — 989.
- [x] Primary keyword di penutup (Kesimpulan) & CTA.

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata setelah tiap H2 (bukan hanya snippet), berisi poin BARU milik H2 — bukan parafrase snippet.
- [x] Tiap paragraf body = satu poin quotable & verifiable.
- [x] FAQ parseable FAQPage; freshness via `publish_month`.
- [x] Cek repetisi definisi: definisi hanya di snippet; jawaban langsung H2 #1 menambah "pertanyaan yang dijawab tiap aktivitas" (info baru), bukan definisi ulang. LULUS.

### D. Soltius framing discipline
- [x] Soltius = implementator/pendamping, BUKAN "builds/makes SAP".
- [x] Self-mention = 2 (1 positioning line Kesimpulan + 1 soft CTA soltius.co.id). Dua URL blog internal (hub/cousin) adalah tautan konten, bukan promo mention.
- [x] Tanpa superlatif ("terbaik/nomor satu").
- [x] Nama produk SAP (SAP S/4HANA Finance) sesuai dossier/company_profile.
- [x] Kesimpulan memakai positioning line (SAP Platinum Partner via United VARs, sejak 1998).
- [x] Soft website CTA = baris terakhir, terpisah dari Kesimpulan; anchor funnel SAP S/4HANA Finance; nada konsultatif.
- [x] Hub link = anchor inline natural ("macam-macam laporan keuangan"), bukan callout "BACA JUGA".

### E. Anti-cannibalization spot check
- Closest prior article for this keyword cluster: `laporan-laba-rugi-c01` (conditional 2026-08).
- Subtopic overlap (Jaccard estimate): ~0.10 (brief), irisan efektif {SAP S/4HANA Finance, keluarga PSAK 20x, lensa ERP-report}; kontak akrual-vs-kas bersifat komplementer.
- Verdict: distinct angle confirmed (< 0.4). `articles_history/index.json` belum memuat keyword akuntansi (cluster hidup di folder conditional). Tidak ada risiko kanibalisasi.
