---
brief_id: "checklist-migrasi-rise-c01"
editor_run_date: "2026-06-17"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Checklist Kesiapan Migrasi RISE with SAP: 10 Hal yang Harus Disiapkan

## Recommendation
**approve**

Artikel ini kuat: angle "checklist taktis 10 item siap-pakai khusus RISE" jelas berbeda dari semua sibling di history (Jaccard ~0.16 vs `erp-migration-readiness-assessment-cloud`), faktanya akurat dan terverifikasi terhadap dossier + SAP-official (tenggat 2027/2030, tier RISE, alat migrasi, shared responsibility), framing Soltius benar (implements, bukan builds; 2 self-mention, keduanya di penutup), dan format sangat extractable (definition snippet, ringkasan 10 item, dua tabel, daftar bernomor, FAQ 7 Q&A). Satu masalah anti-AI besar ditemukan dan diperbaiki: **penggunaan em-dash yang berlebihan (≈25 di body prose)** sudah diturunkan menjadi 1 di body. Sisanya hanya perbaikan ringan (panjang meta description, voice "saya", framing United VARs). Tidak ada yang memerlukan rework penulis/strategist. Layak tayang.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Setelah em-dash dipangkas, suara konsultatif & ber-ritme; hedging jujur ("estimasi industri", "dalam praktik"), section "BELUM siap" autentik. |
| Factual & SAP-spec accuracy | 10 | 5 klaim di-spot-check, semua pass vs dossier + SAP-official. Flag dossier (EHP 6/7/8; opsi 2033 bukan pemanjangan ECC; Readiness Check gratis bersyarat) semuanya dihormati di teks. |
| On-page SEO compliance | 9 | Meta title 53 char, meta description dipangkas ke ~157, slug 48 char, H1+keyword, 5 H2, keyword di 100 kata pertama, 8+ LSI, 3 internal + 2 eksternal SAP-official, FAQ 7. |
| GEO extractability (§2a) | 8 | Definition snippet 40–60 kata; jawaban langsung kuat di H2 #2/#4/#5; satu klaim per kalimat; FAQ FAQPage-ready; `date_modified` ditambahkan. H2 #1 & #3 mengandalkan snippet/list daripada jawaban 40–60 kata khusus (minor). |
| Soltius framing discipline | 10 | 2 self-mention (penutup), framing "merancang & mengeksekusi … bukan pembuat perangkat lunaknya". Tidak ada superlatif. |
| Internal linking | 10 | 1 cousin UP-link di lead (migrasi ERP ke cloud), 1 cousin (SAP Clean Core) di item #4, 1 sibling DOWN-link di H2 #5. Semua inline, tanpa "BACA JUGA". Tidak ada own-hub (sesuai kebijakan conditional). |
| FAQ quality | 9 | 7 Q&A dari PAA; jawaban 40–80 kata, self-contained, masing-masing memuat angka/fakta. |
| Image-brief completeness | 10 | images.json parse; 3 entri = 3 placeholder; alt/caption/visual_direction/asset_type semua Bahasa Indonesia; sourcing note menegaskan tidak perlu screenshot SAP. |

## What I fixed (changelog)
- **Anti-AI (prioritas tertinggi): memangkas em-dash dari ≈25 di body prose menjadi 1.** Mengonversi em-dash menjadi koma/titik dua/titik/tanda kurung di lead (§lead), definition snippet, H2 #1 (3×), intro H2 #2, item 2/3/5/7/10, paragraf H2 #4 (2×) + sel tabel, dua butir di "BELUM siap", FAQ #2/#3/#5/#6/#7, dan Kesimpulan. Menyisakan 1 em-dash deliberatif di item #4.
- Memperbaiki *voice*: "saya bahas lebih dalam" → "dibahas lebih dalam pada bagian berikutnya" (style_guide §3 melarang "saya"; "kami" hanya di penutup).
- Memangkas **meta description** dari ~171 → ~157 karakter (masuk band 140–160); tetap memimpin dengan keyword + 3 value prop.
- Menghapus em-dash di meta description (jadi koma).
- Menajamkan framing penutup: "SAP Platinum Partner melalui United VARs yang diakui sebagai Best RISE…" (ambigu, seolah United VARs yang diakui) → "Sebagai SAP Platinum Partner melalui United VARs, dan diakui sebagai Best RISE Partner serta Best Cloud Partner, Soltius…" — recognition kini jelas melekat pada Soltius (sesuai company_profile.md).
- Memperbaiki frasa item #3 agar mengalir setelah konversi em-dash ("…belum harmonis: semua ini harus dibereskan…").
- **Frontmatter**: `word_count` dikoreksi dari 2009 (jelas menghitung YAML + teks placeholder gambar) menjadi 1750 (body terpublikasi); menambahkan `date_modified: "2026-06-17"` untuk freshness GEO (§2a).

## What I flagged (open issues)
- ⚠️ **GEO minor**: H2 #1 ("Apa Itu…") dan H2 #3 (daftar 10 item) tidak dibuka dengan jawaban khusus 40–60 kata; keduanya mengandalkan definition snippet (tepat di atas H2 #1) dan numbered list yang sudah extractable. *Rekomendasi*: jika ingin skor GEO maksimal di refresh berikutnya, tambahkan satu kalimat pembuka 40–60 kata tepat di bawah H2 #3. Bukan blocker — artikel sudah sangat extractable secara keseluruhan.
- ⚠️ **Angka "duplikat data" (Flag 4 dossier)**: writer dengan benar tidak menyebut angka 30–60% dan memakai framing "estimasi industri menyebut porsinya bisa sangat besar". Aman, tetapi sengaja kabur. *Rekomendasi*: biarkan apa adanya (sumber ClonePartner bukan peer-reviewed; framing hedged sudah tepat sesuai style_guide §10).
- ⚠️ **word_count via estimasi**: tooling word-count tidak dijalankan; 1750 adalah hitungan body per-section yang andal (target band 1.500–1.800). Tidak ada risiko thin/bloat.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — grep: 0
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — grep: 0
- [x] No "Penting untuk dicatat / dipahami bahwa" — grep: 0
- [x] "Dengan demikian" not overused — grep: 0
- [x] Em-dash count ≤2 — **diperbaiki**: body prose kini 1 (sebelumnya ≈25). (1 em-dash lain hanya di teks instruksi placeholder IMAGE_02, bukan body terpublikasi.)
- [x] Varied paragraph lengths — campuran 1–6 kalimat; section "BELUM siap" pakai butir, body pakai prosa.
- [x] Not every H2 → 3-bullet list — H2 bervariasi: prosa, tabel, daftar bernomor, butir.
- [x] No generic claims without numbers — angka spesifik di 10+ tempat (2027/2030, +2 pp, 70%, 18%/49%, 30%, 12–24 bulan, 2–4 bulan).
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — tidak ada.
- [x] No service-dump paragraph — Soltius hanya disebut di penutup, satu anchor.

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| ECC (Business Suite 7, EHP 6/7/8) mainstream maintenance berakhir 31 Des 2027; extended hingga 31 Des 2030 (+2 pp) | dossier Claim 1 ✓ + WebSearch SAP Support Portal "Innovation Commitment … until 2040" ✓ (EHP 6/7/8 dikonfirmasi) | pass |
| "SAP ERP, private edition, transition option" 2031–2033, bukan pemanjangan ECC, hanya pelanggan terkomit pra-2025 | dossier Claim 2 ✓ (SAP News Feb & Agt 2025); framing draft sesuai Flag 2 | pass |
| Tier RISE Private Edition: Base, Premium, Premium Plus (Premium Plus = analitik/GenAI lebih luas) | dossier Claim 4 ✓ + WebSearch SAP Community/Learning ✓; draft tidak over-detail per-tier (sesuai Flag 3) | pass |
| Alat migrasi: SAP Custom Code Migration app (Fiori), SAP S/4HANA Migration Cockpit ("Migrate Your Data", pengganti LTMC deprecated) | dossier Claim 7 ✓ (SAP News Feb 2025) | pass |
| SAP Readiness Check gratis untuk pelanggan berlisensi (S-user, SAP for Me/Cloud ALM); cakupan simplification/custom code/add-on/sizing | dossier Claim 5 & 6 ✓; draft menambahkan caveat "bukan untuk publik umum" (sesuai Flag 5) | pass |

Catatan tambahan: shared responsibility model (Tabel 2 dossier Claim 8) dan tiga pendekatan greenfield/brownfield/SDT (Claim 9, dengan catatan "bluefield" bukan nama resmi) cocok dengan draft. Statistik Gartner/McKinsey/CIO.com dibingkai sebagai "riset/survei menunjukkan" (sesuai §10).

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 53 char; "Checklist Migrasi RISE with SAP" memimpin (keyword penuh di posisi 1, melewati char 30 di "SAP" — dapat diterima karena frasa keyword memimpin judul).
- [x] Meta description 140–160 — actual: ~157 (diperbaiki dari ~171).
- [x] Slug ≤60, kebab-case, keyword — actual: `checklist-migrasi-rise-with-sap-10-hal-disiapkan` (48 char).
- [x] H1 contains keyword — "Checklist Kesiapan Migrasi RISE with SAP…".
- [x] H2 count 4–5 — actual: 5 (definitional, question-format, daftar 10 item, owner/RACI, honest).
- [x] ≥1 question-format H2 (#2 "Apa Saja…?"); ≥1 honest/counter-conventional (#5 "Tanda Anda BELUM Siap").
- [x] Keyword in first 100 words — ya, di kalimat ke-4 lead ("checklist migrasi RISE with SAP").
- [x] Definition snippet near top (40–60 words) — blockquote "Secara singkat" ~56 kata.
- [x] ≥8 LSI terms — counted ~11 (RISE, S/4HANA Cloud Private Edition, SAP BTP, SAP Business Network, Readiness Check, Custom Code Migration, Migration Cockpit, shared responsibility, greenfield/brownfield/SDT, dual-run, ECC EOM).
- [x] 3 internal links (1 cousin-UP + 1 cousin + 1 sibling-DOWN) — migrasi-erp-ke-cloud (lead), sap-clean-core (item 4), kesalahan-umum (H2 #5). Tanpa own-hub (kebijakan conditional). Semua inline.
- [x] ≥1 external authoritative citation — actual: 2 (SAP Support Portal, SAP News).
- [x] FAQ 5–7 Q&As — actual: 7.
- [x] 2 image placeholders (up to 3) — actual: 3.
- [x] ≥1 list + ≥1 table — daftar bernomor + 2 butir + 2 tabel.
- [x] Word count 1,500–1,800 — actual: ~1,750 (dalam band; jauh di bawah ceiling ~2,100).

### C2. GEO extractability (seo_playbook.md §2a)
- [~] Direct 40–60-word answer after each major H2 — kuat di H2 #2 (ringkasan 10 item), #4 (inti "RISE bukan SAP urus semua"), #5; H2 #1 dilayani definition snippet tepat di atasnya; H2 #3 dilayani numbered list. Minor gap, di-flag.
- [x] Each body paragraph makes one independently quotable, verifiable point — ya (tiap item & paragraf memuat satu klaim + fakta/sumber).
- [x] FAQ parseable for FAQPage schema; `date_modified` / freshness noted — FAQ bersih untuk FAQPage; `date_modified: 2026-06-17` ditambahkan ke meta block.

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP" — "merancang dan mengeksekusi migrasi RISE … bukan sebagai pembuat perangkat lunaknya".
- [x] ≤3 Soltius self-mentions — actual: 2 (keduanya di penutup). Aside mid-artikel di H2 #4 memakai "partner" generik, bukan menyebut Soltius.
- [x] No unverifiable superlatives — "Best RISE/Best Cloud Partner" dibingkai sebagai recognition (diizinkan); tidak ada "terbaik/nomor satu".
- [x] SAP/partner product names + specs match product_matrix.md / dossier — cocok.
- [x] Closing uses a company_profile.md positioning line — "SAP Platinum Partner melalui United VARs" + recognition Best RISE/Cloud.
- [x] Soft website CTA present as FINAL line — "…kunjungi soltius.co.id dan mulai percakapan…" (konsultatif, bukan "beli sekarang"), setelah Kesimpulan.
- [x] Hub/cousin link as natural inline anchor — UP-link cousin di lead, deskriptif; tidak ada "BACA JUGA".

### E. Anti-cannibalization spot check
- Closest prior article: `erp-migration-readiness-assessment-cloud` (2026-08, intent **decision**, kerangka asesmen 8 dimensi, SAP Signavio Process Insights). Irisan hanya "SAP Readiness Check" + "custom code".
- Subtopic overlap (Jaccard estimate): **~0.16** (sesuai klaim brief).
- DEDUP-flagged siblings dikonfirmasi distinct: `rise-vs-grow-with-sap-migrasi-erp-cloud` (pemilihan program), `memilih-partner-implementasi-sap-migrasi-erp-cloud` (pemilihan partner), `migrasi-erp-ke-cloud-minimasi-downtime-cutover` (eksekusi cutover), `remediasi-custom-code-sap-clean-core` (hanya beririsan di 1 dari 10 item).
- Verdict: **distinct angle confirmed** — checklist taktis top-funnel 10 item khusus RISE, format magnet siap-screenshot; tidak ada bentrokan.

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per `{IMAGE_NN}` placeholder (3 = 3; marker IMAGE_01/02/03 cocok; semua `placeholder_kept_in_body: true`)
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type — semua Bahasa Indonesia
- [x] "Real SAP screenshot" requirement surfaced — sourcing_note tiap entri menegaskan "diagram/infografik orisinal — tidak memerlukan screenshot SAP"; IMAGE_03 mewajibkan catatan kaki syarat opsi 2031–2033 agar tidak menyesatkan (selaras Flag 2).
- (No generated PNGs — by design.)
