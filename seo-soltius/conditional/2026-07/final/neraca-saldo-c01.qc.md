---
brief_id: "neraca-saldo-c01"
editor_run_date: "2026-07-06"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-07 — style_addendum.md overrides applied (word band 800–1000, FAQ 2–3, 2 internal link, ZERO image placeholder, max 2 mention Soltius, definisi hanya di snippet)"
---

# Editor QC Report — Neraca Saldo: Pengertian, Fungsi, dan Contoh Penyusunannya

## Recommendation
**approve**

Draf masuk dalam kondisi sangat bersih dan patuh penuh pada batch override 2026-07. Semua angka terverifikasi terhadap dossier (tabel balance Rp98.000.000 = Rp98.000.000 dihitung ulang; heuristik 9/2, 3 jenis, 5 langkah, 4 kesalahan lolos — semuanya dossier-sourced), framing Soltius benar (implementator, 2 mention), sitasi 2 inline sesuai disiplin §10, dan tidak ada AI tell. Perbaikan editor bersifat polish minor (4 edit in-place); tidak ada isu yang membutuhkan penulis ulang.

## Batch-2026-07 overrides applied (checked against style_addendum.md §7)
| Override | Target | Actual | Status |
|---|---|---|---|
| Word band body (H1 s/d CTA) | 800–1000 (target ~900) | **959** | pass |
| FAQ | 2–3 Q&A, jawaban 30–60 kata + 1 fakta/angka | 3 Q&A (48/49/40 kata; 4 kolom · 9/2/540-450 · 3 kali) | pass |
| Internal link | TEPAT 2 (1 hub + 1 cousin) | 2 (hub siklus-akuntansi di lead; cousin SAP FICO di H2 #4) | pass |
| Image placeholder | 0 — dilarang | 0 ditemukan; validasi images.json = **N/A by design** | pass |
| Soltius mention | maks 2 | 2 (positioning line Kesimpulan + soft CTA) | pass |
| Lead | ≤80 kata, tanpa roadmap | 70 kata, pain + keyword + janji, tanpa paragraf roadmap | pass |
| Kesimpulan | ≤80 kata + 1 positioning line | 71 kata; positioning United VARs | pass |
| Soft CTA soltius.co.id | baris paling akhir | ya, terpisah dari Kesimpulan | pass |
| Definisi hanya SEKALI (snippet) | body/H2 dilarang mengulang | snippet "Ringkasnya:" 46 kata; tanpa H2 definitional; jawaban tiap H2 berisi poin baru | pass |
| Body H2 | 3–4 (≥1 question; ≥1 praktis/tabel) | 4 (2 question-format; tabel di H2 #3 + 5 langkah bernomor di H2 #2) | pass |
| Angka spesifik inline | ≥4 | 10+ (4 fungsi, 3 versi, 4 kolom, 5 langkah, 8 akun, 7 transaksi, Rp98 jt, 9, 2, 540/450, 3 kali) | pass |
| Sitasi eksternal | 1–2 inline | 2 (AccountingTools trial-balance-errors; SAP Help Universal Journal) | pass |

## What I fixed (changelog — 4 edits in-place)
1. **H2 #2 jawaban langsung**: "Intinya empat gerakan:" → "Prosesnya ringkas:" — menghapus kebingungan angka 4 vs "lima langkah" persis di bawahnya dan kolokasi "gerakan" yang janggal untuk konteks akuntansi. Jawaban langsung tetap 42 kata (band 40–60).
2. **H2 #4**: "Selisih genap yang habis dibagi 2" → "Selisih yang habis dibagi 2" — redundansi (genap = habis dibagi 2).
3. **H2 #4**: ekspansi akronim ERP saat sebutan pertama — "Di sistem ERP (*Enterprise Resource Planning*) modern" (style_guide §3 + entity clarity addendum §5).
4. **H2 #4**: italik *spreadsheet* pada penggunaan pertama (istilah asing, style_guide §3).
5. **H2 #1**: "Dalam praktik, neraca saldo menjalankan empat fungsi" → "Di lapangan, neraca saldo menjalankan empat fungsi praktis" — memperkuat hedge taksonomi 4 fungsi per dossier Flag #1 (fungsi praktis, bukan kerangka standar; tanpa sitasi — benar) sekaligus menghindari pengulangan frasa "Dalam praktik" dengan paragraf first-party di H2 #4.
6. Frontmatter `word_count`: 956 → **959** (efek netto edit).

*(Edit #1 dan #5 dihitung sebagai perbaikan substantif; #2–#4 polish mikro.)*

## What I flagged (open issues)
- Tidak ada isu terbuka yang menghalangi publikasi.
- ℹ️ Sibling `jurnal-umum-c01` **belum live** per cek dossier 2026-07-06 (hari ini) — sesuai catatan brief, TIDAK ditautkan; internal link tetap 2 (hub + cousin, keduanya 200/OK per researcher hari ini). Jika sibling live sebelum upload CMS, substitusi opsional boleh dilakukan dengan total link tetap 2.
- ℹ️ Fiori app ID F0996 sengaja tidak disebut (per allowance brief/dossier: cukup "aplikasi Trial Balance di SAP Fiori") — bukan defisiensi.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5) — PASS
- [x] Tanpa opener "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" (grep: 0)
- [x] Tanpa "Selain itu" pembuka paragraf (grep: 0)
- [x] Tanpa "Penting untuk dicatat/dipahami" (grep: 0)
- [x] "Dengan demikian" / "Sebagai kesimpulan": 0
- [x] Em-dash: **1** (hanya di snippet) ≤2
- [x] Panjang paragraf bervariasi 1–4 kalimat (lead 4 kalimat; para 1-kalimat setelah tabel; campuran)
- [x] Tidak semua H2 → bullet (H2 #3 & #4 prosa+tabel; H2 #1 prosa+list; H2 #2 prosa+numbered)
- [x] Klaim selalu berangka (4 fungsi, 5 langkah, Rp98 jt, 9/2, dst.)
- [x] Hype adjectives (canggih/powerful/seamless/terdepan/revolusioner): 0
- [x] Tanpa service-dump

### B. Factual & SAP-spec spot-check (5+ klaim) — PASS
| Claim | Source check | Verdict |
|---|---|---|
| Tabel 8 akun, total D = K = Rp98.000.000 | Dihitung ulang vs derivasi dossier (Kas 51 = 60−15+21−7−5−3; Utang 7 = 10−3; Pendapatan 31 = 21+10; ΣD 51+10+25+7+5 = 98; ΣK 7+60+31 = 98) | pass |
| 4 jenis kesalahan lolos meski balance (omisi, komisi, nominal salah 2 sisi, kompensasi) | Dossier Claim 6 + sitasi inline AccountingTools trial-balance-errors | pass |
| Heuristik selisih ÷9 = transposisi (540→450); ÷2 = salah kolom, cari ½ selisih | Dossier Claim 7–8 (AccountingTools + Lumen Learning); di-hedge "indikasi/kemungkinan… bukan kepastian" sesuai edge case dossier | pass |
| Universal Journal = tabel tunggal ACDOCA, "single source of truth" | Dossier Claim 9 + sitasi inline SAP Help Portal; tanpa kutipan verbatim (patuh Flag #2) | pass |
| Trial balance Fiori "tersedia setiap saat tanpa rekap manual akhir bulan" | Dossier Claim 11 — frasa persis dalam batas aman Flag #3 (tanpa klaim latensi); tanpa app ID (patuh Flag brief) | pass |
| 3 jenis neraca saldo; post-closing hanya akun riil | Dossier Claim 4; draf benar menulis "hanya memuat akun riil… pendapatan dan beban sudah bersaldo nol" | pass |
| Taksonomi 4 fungsi | Dossier Flag #1: disajikan sebagai fungsi praktis ("Di lapangan… fungsi praktis"), TANPA sitasi, reframe netral | pass |
| Soltius = SAP Platinum Partner via United VARs, mendampingi implementasi→pasca go-live | product_matrix.md credibility markers; framing implements/supports, bukan builds | pass |

Tidak ada angka di luar dossier; tidak ada PSAK/IAI yang diatribusikan (patuh Flag #4); tidak ada angka pasar karangan (Flag #5).

### C. On-page SEO checklist (seo_playbook §3, disesuaikan batch override) — PASS
- [x] Meta title ≤60, keyword di 30 pertama — actual: **47 chars**, "Neraca Saldo" mulai char 1
- [x] Meta description 140–160 — actual: **157 chars** (keyword + 3 value props spesifik)
- [x] Slug ≤60, kebab-case, keyword-led — actual: `neraca-saldo-pengertian-fungsi-contoh` (37)
- [x] H1 memuat keyword (posisi 1)
- [x] Body H2: **4** (band batch 3–4) — 2 question-format ("Bagaimana Cara Membuat…?", "…Apakah Pasti Bebas Kesalahan?"); 1 honest/counter-conventional (H2 #4); 1 praktis bertabel (H2 #3)
- [x] Keyword di 100 kata pertama (kalimat ke-3 lead)
- [x] Definition snippet 40–60 kata — actual: 46 kata, blockquote "Ringkasnya:"
- [x] LSI ≥8 — 12 hadir (trial balance, buku besar/general ledger, saldo normal, debit-kredit, jurnal penyesuaian, siklus akuntansi, kode akun, unadjusted/adjusted/post-closing, jurnal penutup, laporan posisi keuangan, double-entry)
- [x] Internal link **2** (override; bukan 3) — hub + cousin, inline natural, tanpa "BACA JUGA"
- [x] Sitasi eksternal otoritatif: 2 inline
- [x] FAQ **3** (override 2–3; bukan 5–7)
- [x] Image placeholder: **0 = compliant by design** (override — bukan isu)
- [x] ≥1 list + ≥1 tabel (numbered list 5 langkah, bulleted list 3 jenis, 1 tabel 4 kolom)
- [x] Word count **959** (band override 800–1000)
- [x] Keyword density wajar (~2%, mayoritas struktural: H1/H2/FAQ/nama entitas jenis)

### C2. GEO extractability (§2a) — PASS
- [x] Jawaban langsung 40–60 kata setelah tiap H2: 48 / 42 / 49 / 53 kata — masing-masing poin BARU milik H2 itu (4 fungsi & posisi siklus / inti proses / pembacaan tabel / 4 kesalahan lolos), tidak menyatakan ulang snippet
- [x] 1 paragraf = 1 poin quotable & verifiable; tabel extractable baris-per-baris; 5 langkah HowTo-parseable
- [x] FAQ parseable FAQPage schema (3 pertanyaan PAA-style, jawaban self-contained berangka)
- [x] Freshness: `publish_month: 2026-07` akurat di meta block; tanggal contoh "per 31 Juli 2026" konsisten
- [x] Entity clarity: trial balance / general ledger / unadjusted / adjusted / post-closing / single source of truth di-gloss saat sebutan pertama; ERP di-expand (edit editor); SAP S/4HANA Finance, Universal Journal (ACDOCA), SAP Fiori nama lengkap

### D. Soltius framing discipline (product_matrix + §11) — PASS
- [x] Soltius = implementator/pendamping ("mendampingi… memindahkan… dari implementasi hingga dukungan pasca go-live") — bukan "builds"
- [x] Self-mention: **2/2** (batch cap) — positioning line Kesimpulan + soft CTA
- [x] Tanpa superlatif tak terverifikasi
- [x] Kredensial cocok product_matrix (SAP Platinum Partner via United VARs)
- [x] Body vendor-neutral; SAP muncul hanya di H2 #4 sebagai teaching, keterbatasan proses manual dijelaskan dulu
- [x] Soft CTA konsultatif = baris paling akhir, terpisah dari Kesimpulan, anchor funnel SAP S/4HANA Finance (per tracker)

### E. Anti-cannibalization spot check — PASS
- Closest prior: `jurnal-umum-c01` (conditional 2026-06) — artikel ini murni tahap VERIFIKASI; konteks jurnal umum hanya 1 klausa ("begitu seluruh transaksi selesai dijurnal dan diposting") sesuai boundary brief
- `articles_history/index.json`: 0 kecocokan "neraca" — tidak ada artikel prior pada keyword ini
- Jaccard (per brief): ~0.15 (< 0.4) — **distinct angle confirmed**

### F. Image-brief completeness — **N/A (batch override)**
Batch conditional 2026-07 tanpa image placeholder & tanpa stage image-planner; 0 `{IMAGE_NN}` ditemukan di final (sesuai desain — bukan isu).

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Ritme bervariasi, hedging praktisi, 1 em-dash, tanpa klise |
| Factual & SAP-spec accuracy | 10 | Semua angka dossier-sourced; tabel dihitung ulang balance; semua flag dossier dipatuhi |
| On-page SEO compliance | 9 | Semua item pass; meta 47/157/37 |
| GEO extractability (§2a) | 9 | 4 jawaban langsung 42–53 kata, semuanya poin baru; tabel + 5 langkah extractable |
| Soltius framing discipline | 10 | 2 mention persis, implementator, tanpa superlatif |
| Internal linking | 9 | Tepat 2, inline natural, 200/OK per cek researcher 2026-07-06 |
| FAQ quality | 9 | 3 Q&A PAA-style, 40–49 kata, tiap jawaban berangka |
| Image-brief completeness | N/A | Batch tanpa image placeholder |

## The shipping question
Layak tayang di soltius.co.id: konsultan SAP senior akan mengangguk pada jembatan ACDOCA/Universal Journal yang akurat dan di-hedge benar; CIO/CFO skeptis mendapat honest angle "balance ≠ bebas kesalahan" yang tidak dimiliki satu pun kompetitor SERP. **Approve.**
