---
brief_id: "timeline-migrasi-rise-c01"
editor_run_date: "2026-07-06"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-07 — style_addendum.md overrides applied (word band 800–1000, FAQ 2–3, internal link 2, ZERO image placeholder, Soltius max 2, lead/kesimpulan ≤80 kata, definisi hanya di snippet)"
---

# Editor QC Report — Estimasi Timeline Migrasi RISE with SAP: Dari Assessment hingga Go-Live

## Recommendation
**approve**

Draft masuk sangat bersih dan patuh penuh pada override batch conditional 2026-07. Keputusan paling sensitif ditangani benar: tabel per fase memakai **angka resmi SAP Tabel 2 Pocket Guide** (bukan skema brief yang sudah dikoreksi researcher), hanya baris Run berlabel "Estimasi praktik"; klaim keliru "SAP hanya menerbitkan durasi end-to-end" TIDAK ada (draft justru menyatakan kebalikannya dengan benar); "Realize terpanjang" tidak diuniversalkan (dibatasi bluefield per Tabel 2, sisi praktik dilabel observasi); kick-off akhir September–Desember 2026 dieksplisitkan sebagai hitungan turunan; Tigaraksa ditulis netral sebagai contoh publik (padahal partner-nya terkonfirmasi Soltius — dossier Claim 7) demi jatah 2 self-mention. Struktur GEO lengkap (direct answer 57/47/44 kata, semuanya poin BARU milik H2-nya), zero AI-tell, zero `{IMAGE_NN}`, em-dash 1. Saya menerapkan 6 perbaikan minor in-place (freshness metadata, 1 redundansi frasa, 1 EYD, amplop 12–21 bulan di Kesimpulan per brief, 2 italik istilah asing) — word count 961 → 966, tetap dalam band. Tidak ada isu terbuka yang menghalangi publikasi.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Zero pola terlarang; ritme bervariasi (pembuka 4 kata "Di lapangan, rentangnya lebar.", paragraf faktor 1 kalimat, elaborasi 2–3 kalimat); frasa praktisi "datanya sering baru ketahuan kotor saat migrasi percobaan pertama" tanpa menyebut Soltius |
| Factual & SAP-spec accuracy | 10 | 5/5 klaim spot-check lolos vs dossier; seluruh 10 flag dossier dipatuhi (lihat B) |
| On-page SEO compliance | 9 | Semua item checklist (nilai override batch) terpenuhi; meta 56/157/30 chars |
| GEO extractability (§2a) | 9 | Direct answer 57/47/44 kata, tiap H2 poin baru; tabel 6 fase extractable baris-per-baris dengan kolom "Basis angka" yang memisahkan angka resmi SAP dari estimasi praktik; `date_modified` ditambahkan editor |
| Soltius framing discipline | 10 | 2 mention persis (positioning line + CTA); "mendampingi... menjalankannya fase demi fase" — implementator/pendamping, bukan pembuat; award = verbatim company_profile (Best Cloud/Best RISE (SEA) 2021) |
| Internal linking | 10 | Tepat 2: hub migrasi-erp-ke-cloud (anchor natural di lead) + cousin Apa-Saja-yang-Termasuk-dalam-Rise-with-SAP (H2 #1, saat RISE pertama diulas); keduanya diverifikasi live oleh strategist 2026-07-06; tanpa "BACA JUGA" |
| FAQ quality | 9 | 3 Q&A persis dari PAA, jawaban 40/45/40 kata (band 30–60), tiap jawaban ≥1 fakta/angka (12–15/12–18/15–21 bulan; Realize 6–9 bulan bluefield + Deploy >3 bulan brownfield; 31 Des 2027 + kick-off 2026) |
| Image-brief completeness | N/A | Batch override: zero placeholder by design — BUKAN isu; tidak ada images.json untuk batch ini |

## What I fixed (changelog — 6 edits in-place)
- **Freshness metadata (GEO §2a)**: menambahkan `date_modified: "2026-07-06"` ke frontmatter — diminta eksplisit blok meta brief ("topik ber-tenggat — freshness menentukan sitasi AI") dan konsisten konvensi final batch (implementasi-erp-c01, strategi-scm-c01).
- **Redundansi frasa (H2 #1, paragraf 3)**: "konversi *brownfield* yang mengonversi sistem berjalan berbeda rentang waktunya dengan..." → "**jalur** *brownfield* yang mengonversi sistem berjalan **memiliki rentang waktu berbeda dari**..." — menghilangkan "konversi...yang mengonversi".
- **EYD (H2 #3)**: "pra-proyek" → "**praproyek**" (bentuk terikat *pra-* + kata serapan Indonesia ditulis serangkai; preseden batch: "pascaimplementasi" di implementasi-erp-c01, "multiproduk" di strategi-scm-c01).
- **Kesimpulan — amplop total**: "Amplopnya jelas," → "Amplopnya jelas **(12–21 bulan menurut jalurnya)**," — arah eksplisit skeleton brief item 5 + dossier Claim 11 (agregat turunan, bukan pengulangan verbatim angka per jalur di snippet); Kesimpulan jadi self-contained/quotable. 64 → 68 kata, tetap ≤80.
- **Italik istilah asing (2×)**: "(*case study* resmi SAP, Mei 2025)" dan "(*selective data transition*)" — konsistensi style_guide §3.
- Frontmatter `word_count` diperbarui 961 → **966** (basis metode pipeline yang dideklarasikan writer + 5 kata hasil edit; pengukuran independen editor 972 markdown-stripped — keduanya dalam band 800–1000).

## What I flagged (open issues)
- (tidak ada isu yang menghalangi) ℹ️ Non-blocking: URL Pocket Guide (community.sap.com) dan Bertrandt (sap.com/documents) menolak fetch bot (403) — angka diverifikasi researcher via API resmi SAP Community + reader proxy (dossier Claim 1–2, 5; confidence high). Tidak perlu tindakan.
- ℹ️ Non-blocking (kosmetik, di luar artikel ini): final `checklist-migrasi-rise-c01` (2026-06) masih memakai "pra-proyek"; setelah fix EYD di artikel ini, ejaan lintas korpus bisa diseragamkan saat refresh berikutnya.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5) — PASS
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 hit (scan)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 hit
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 hit
- [x] "Dengan demikian" not overused — 0 hit
- [x] Em-dash count ≤2 — actual: **1** (di snippet verbatim researcher)
- [x] Varied paragraph lengths — lead 3 kalimat; pembuka H2 #1 dengan kalimat 4 kata; paragraf empat-faktor 1 kalimat; elaborasi 2–3 kalimat
- [x] Not every H2 → 3-bullet list — H2 #1 & #3 prose murni; H2 #2 prose + tabel; nol bullet list (faktor pemanjang = 1 kalimat prosa, tabel tetap elemen terstruktur tunggal per addendum §4)
- [x] No generic claims without numbers — 15+ angka inline (lihat C)
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — 0 hit
- [x] No service-dump paragraph — positioning line tunggal, 1 anchor produk (RISE with SAP / SAP S/4HANA Cloud Private Edition per tracker)
- [x] Kesimpulan tidak dibuka "Sebagai kesimpulan" — dibuka "Timeline migrasi bukan angka tunggal"

### B. Factual & SAP-spec spot-check — 5/5 PASS
| Claim | Source check | Verdict |
|---|---|---|
| Durasi end-to-end: brownfield 12–15 bln, bluefield 12–18 bln, greenfield 15–21 bln (satu gelombang) — snippet + FAQ #1, atribusi "SAP, 2024" | Dossier Claim 1 ✓ (kutipan persis Pocket Guide, diverifikasi via API resmi SAP Community 2026-07-06) | pass |
| Tabel per fase brownfield: Discover/Prepare/Explore 2–3 bln, Realize 3 bln, Deploy >3 bln = "SAP (2024)"; Run ±1–2 bln = "Estimasi praktik" — H2 #2 + link Pocket Guide inline | Dossier Claim 2 (Tabel 2) + Claim 10 ✓; flag #1–2 dipatuhi: angka resmi SAP dipakai (BUKAN skema brief), kalimat keliru "SAP hanya menerbitkan end-to-end" TIDAK ada — draft benar menyatakan "hanya fase Run yang tidak diberi angka resmi" | pass |
| Bertrandt: go-live <5 bulan, 4 unit bisnis serentak, SAP S/4HANA Cloud Private Edition, pendekatan dua tahap lift-and-shift (case study resmi SAP, Mei 2025) | Dossier Claim 5 ✓; framing "bukan janji umum" eksplisit di paragraf berikutnya; nama produk sesuai dokumen sumber (bukan "SAP Cloud ERP Private" — flag #7 dipatuhi) | pass |
| Tigaraksa Satria: Project SUNRISE kick-off 8 Juli 2024 → go-live 6 Januari 2025, "sekitar enam bulan" (Liputan6, Januari 2025); "RISE with SAP S/4HANA Private Cloud Edition berbasis Google Cloud Platform" | Dossier Claim 6 ✓ (aritmetika 5 bln 29 hari → "sekitar", bukan "di bawah"); Claim 7: partner = Soltius terkonfirmasi publik, tetapi ditulis netral by design (hemat jatah 2 mention, tone non-salesy) ✓; hasil bisnis siaran pers TIDAK dikutip (flag #8) ✓ | pass |
| Tenggat 31 Desember 2027 (support.sap.com, link inline) + hitung mundur: brownfield kick-off akhir Sep–akhir Des 2026; greenfield 21 bln sudah lewat (akhir Maret 2026), tercepat akhir Sep 2026; praproyek 2–3 bln "dalam praktik"; keputusan pertengahan–kuartal III 2026 | Dossier Claim 4 + 9 ✓; dilabel eksplisit "hitungan turunan dari angka resmi SAP, bukan tanggal yang ditetapkan SAP"; tanpa double-count assessment (buffer hanya aktivitas komersial) ✓ | pass |

Caveat dossier lain yang diverifikasi patuh: "Realize terpanjang" TIDAK diuniversalkan — dibatasi bluefield 6–9 bln per Tabel 2, sisi "paling sering bikin mundur" dilabel "dalam praktik" (flag #3) ✓; hypercare ±1–2 bln & buffer tutup buku = frasa praktik tanpa atribusi SAP (flag #4) ✓; Panorama ~9 bln TIDAK dipakai (flag #6) ✓; extended maintenance/opsi transisi TIDak dibahas (flag #9) ✓; Central Finance dilewati (flag #10) ✓; SAP Activate = nama fase saja tanpa pengajaran metodologi ✓; brownfield/greenfield = 1 kalimat variabel durasi ✓; cutover = 1 baris tabel + gloss ✓; SAP Readiness Check = 1 sebutan baris Discover ✓; nol pembahasan biaya ✓.

### C. On-page SEO checklist (seo_playbook §3 + NILAI OVERRIDE batch 2026-07) — PASS
- [x] Meta title ≤60 (keyword first 30) — actual: **56 chars**, "Timeline Migrasi RISE with SAP" mulai karakter ke-1
- [x] Meta description 140–160 — actual: **157 chars**
- [x] Slug ≤60, kebab-case, keyword — actual: `timeline-migrasi-rise-with-sap` (**30 chars**, sesuai saran brief)
- [x] H1 contains keyword ✓ (= working title user, dipertahankan apa adanya)
- [x] H2 count (override: 3–4 body H2) — actual: **3** body H2 + FAQ + Kesimpulan
- [x] ≥1 question-format H2 — actual: **2** ("Berapa Lama Migrasi RISE with SAP...?", "Kapan Paling Lambat Kick-Off...?"); supporting keyword "lama migrasi SAP ke cloud" tertangkap via H2 #1 + FAQ #2; honest hedging inline di H2 #3 ("Satu catatan jujur: angka SAP berlabel *indicative*...") per addendum §2
- [x] ≥1 H2 praktis/terstruktur dengan tabel — H2 #2: tabel 6 fase × (Fase|Aktivitas kunci|Durasi indikatif|Basis angka); integritas kolom diverifikasi (6 baris × 4 sel)
- [x] Keyword in first 100 words ✓ (lead, kata ke-30) + last paragraph ✓ (baris CTA)
- [x] Definition snippet — blockquote "Ringkasnya:" **45 kata** (band 40–60), verbatim dossier
- [x] **CEK REPETISI DEFINISI (override)**: definisi + angka end-to-end HANYA di snippet; tanpa H2 "Apa itu RISE with SAP" (sesuai brief); H2 #1 direct answer = spektrum lapangan + 2 contoh bertanggal (baru); H2 #2 = urutan fase + fakta SAP menerbitkan angka per fase (baru — enumerasi nama fase adalah kerangka tabel yang diminta brief, bukan restatement definisi); H2 #3 = hasil hitung mundur (baru); kalimat "Dijumlahkan, lima fase pertama konsisten dengan total resmi SAP" sengaja TIDAK mengulang angka 12–15 verbatim ✓; FAQ #1 memuat angka end-to-end by design dossier (FAQ harus self-contained untuk FAQPage schema — aturan definisi-sekali berlaku untuk body/H2) ✓
- [x] LSI terms ≥8 — counted: 12 (lama migrasi SAP ke cloud, fase migrasi, SAP Activate, konversi brownfield, greenfield, bluefield, UAT, cutover, hypercare, kick-off, deadline ECC 2027, assessment/Discover)
- [x] Internal links (override: TEPAT 2 = 1 hub + 1 cousin) — actual: **2** — hub `migrasi-erp-ke-cloud` (anchor "migrasi ERP ke cloud", inline di lead) + cousin `Apa-Saja-yang-Termasuk-dalam-Rise-with-SAP` (anchor deskriptif, H2 #1); tanpa "BACA JUGA"
- [x] External authoritative citations (1–2 inline) — actual: **2 ber-link** (Pocket Guide di H2 #2; support.sap.com di H2 #3) + 2 atribusi by-name tanpa link (case study SAP Mei 2025; Liputan6 Januari 2025) — dalam cap, pola sama dengan sibling
- [x] FAQ (override: 2–3 Q&A, jawaban 30–60 kata + 1 fakta/angka) — actual: **3** Q&A dari PAA brief, 40/45/40 kata
- [x] Image placeholders (override: ZERO by design) — actual: **0** `{IMAGE_NN}` ✓ (konsep timeline disampaikan via tabel fase-durasi; validasi image-brief N/A — bukan isu)
- [x] ≥1 elemen terstruktur — 1 tabel 6 baris (tabel diutamakan per addendum §4; list tambahan tidak dipaksakan — faktor pemanjang = 1 kalimat prosa)
- [x] Word count (override: 800–1000, target ~900) — actual: **966** (basis metode pipeline) / 972 (markdown-stripped editor) — keduanya dalam band; frontmatter `word_count: 966`
- [x] ≥4 angka spesifik inline — actual: **15+** (<5 bulan, 4 unit bisnis, 8 Juli 2024, 6 Januari 2025, ±6 bulan, 2–3 bulan ×3 fase, 3 bulan, >3 bulan, ±1–2 bulan, 6–9 bulan, 31 Desember 2027, 12–15 bulan, akhir Sep–Des 2026, akhir Maret 2026, kuartal III 2026, 12–21 bulan, 2021)

### C2. GEO extractability (seo_playbook §2a, dipadatkan per addendum §5) — PASS
- [x] Direct 40–60-word answer setelah tiap H2 — actual: **57 / 47 / 44 kata**; masing-masing poin BARU milik H2-nya (spektrum nyata + 2 contoh bertanggal / urutan 6 fase + eksistensi angka resmi per fase / tenggat + hasil mundur berlabel turunan) — bukan pengulangan snippet
- [x] Satu paragraf = satu poin quotable & verifiable — tabel extractable baris-per-baris; paragraf Bertrandt/Tigaraksa, bluefield-Realize, empat-faktor, catatan-jujur masing-masing self-contained
- [x] Entity clarity — RISE with SAP, SAP S/4HANA Cloud Private Edition, SAP Activate (Discover–Run), SAP Readiness Check, UAT (*user acceptance testing*), *cutover* (di-gloss), *hypercare*, konversi *brownfield*, *new implementation greenfield*, *bluefield* (*selective data transition*), SAP Business Suite 7/SAP ECC — nama penuh di sebutan pertama
- [x] FAQ parseable untuk FAQPage schema (3 H3 + jawaban self-contained)
- [x] Freshness — `date_modified: "2026-07-06"` di frontmatter (ditambahkan editor; topik ber-tenggat, angka durasi SAP bisa direvisi — cek saat refresh) ✓

### D. Soltius framing discipline (product_matrix.md + style_guide §11 + override maks 2) — PASS
- [x] Soltius = implementator/pendamping ("Soltius mendampingi perusahaan menyusun timeline migrasi yang realistis dan menjalankannya fase demi fase, dari assessment hingga go-live dan hypercare") — NEVER "builds" ✓
- [x] Self-mentions (override: maks 2) — actual: **2** (1 positioning line di Kesimpulan + 1 soft CTA soltius.co.id); 2 hit grep lain hanyalah URL internal link wajib (www.soltius.co.id), bukan prose mention; tanpa aside di body ✓
- [x] No unverifiable superlatives — 0; kredensial verbatim company_profile ("SAP Platinum Partner", "Best RISE dan Best Cloud Partner (SEA) 2021" = daftar award 2021) ✓
- [x] SAP product names/specs match dossier ✓ (lihat B; termasuk flag penamaan "SAP S/4HANA Cloud Private Edition")
- [x] Kesimpulan ≤80 kata di bawah `## Kesimpulan` — actual: **68 kata**, positioning line + CTA konsultatif ✓
- [x] Soft CTA soltius.co.id = baris PALING akhir, terpisah dari Kesimpulan, anchor funnel RISE with SAP / SAP S/4HANA Cloud Private Edition (per tracker), konsultatif ("Untuk mendiskusikan rencana...") ✓
- [x] Hub link = anchor inline natural di lead ✓
- [x] Lead ≤80 kata tanpa paragraf roadmap — actual: **56 kata**, pain konkret (direksi bertanya kapan go-live, tenggat ECC berjalan) + keyword + janji artikel ✓

### E. Anti-cannibalization spot check — PASS
- Closest prior: `brownfield-greenfield-bluefield-panduan-migrasi-erp-ke-cloud` (erp-migration-to-the-cloud-01, 2026-06) — subjeknya MEMILIH jalur; artikel ini menjadikan WAKTU sebagai subjek, pemilihan jalur dibatasi **1 kalimat** variabel durasi ✓. Jaccard per brief ≈ 0.20 (< 0.4).
- Spot-check editor terhadap boundary sibling: TANPA peta 4 opsi/extended maintenance (milik `sap-ecc-2027-c01`), TANPA pengajaran metodologi Activate/3 pilar (milik `implementasi-erp-c01` — nama fase hanya kerangka tabel), TANPA checklist kesiapan/Readiness Check mendalam (milik `checklist-migrasi-rise-c01` — 1 sebutan), TANPA teknik cutover/downtime (1 baris tabel + gloss), TANPA biaya/TCO, TANPA Panorama — semua batas dedup brief dipatuhi.
- Verdict: **distinct angle confirmed**.

### F. Image-brief completeness — **N/A per batch override**
- Batch conditional 2026-07: ZERO image placeholder by design; stage image-planner dilewati; tidak ada `images.json`. Diverifikasi: **0** `{IMAGE_NN}` di final. Bukan isu.

## Batch-2026-07 overrides applied (ringkasan)
Word band 800–1000 ✓ (966) · FAQ 2–3 ✓ (3, jawaban 30–60 kata + 1 fakta/angka) · internal link tepat 2 ✓ (1 hub + 1 cousin) · zero image placeholder ✓ (validasi N/A) · Soltius maks 2 ✓ (2 prose, sisanya URL) · lead ≤80 tanpa roadmap ✓ (56) · kesimpulan ≤80 + positioning ✓ (68) · CTA soltius.co.id baris akhir ✓ · definisi & angka end-to-end hanya di snippet ✓ (tanpa H2 definitional; FAQ #1 self-contained by design dossier) · 3 body H2 (2 question-format, 1 praktis+tabel, honest hedging inline) ✓ · ≥4 angka inline ✓ (15+) · direct answer 40–60 kata/H2 dengan poin baru ✓ (57/47/44) · sitasi eksternal ber-link 1–2 ✓ (2 + 2 by-name) · em-dash ≤2 ✓ (1).

## The shipping question
Konsultan SAP senior dan CIO skeptis akan menemukan: angka per fase dari Tabel 2 Pocket Guide yang belum dipakai satu pun kompetitor SERP ID, dua contoh go-live bertanggal (satu di Indonesia), hitung mundur eksplisit yang dilabel jujur sebagai turunan, dan pengakuan bahwa go-live mundur paling sering karena pengujian dikompres — bukan brosur vendor. Ship it. → **approve**
