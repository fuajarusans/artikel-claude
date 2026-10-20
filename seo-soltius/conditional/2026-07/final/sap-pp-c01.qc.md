---
brief_id: "sap-pp-c01"
editor_run_date: "2026-07-06"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-07 — style_addendum.md overrides applied (word band 800–1000, FAQ 2–3, internal link 2, TANPA image placeholder, definisi hanya di snippet, maks 2 mention Soltius)"
---

# Editor QC Report — SAP PP (Production Planning): Fungsi dan Penerapannya di Manufaktur

## Recommendation
**approve**

Draft masuk dalam kondisi sangat bersih: seluruh caveat dossier dipatuhi (nol angka ROI, nol bahasan lisensi PP/DS, sitasi help.sap.com bukan URL SAP Community 403, hedge "Umumnya" pada contoh industri, "5 fungsi" diberi label pengelompokan praktis), boundary dedup vs `mrp-c01`/`bill-of-materials-c01`/`sap-s4hana-c01`/`digital-manufacturing` terjaga, dan semua override batch 2026-07 terpenuhi. Perbaikan editor bersifat minor (grammar/EYD/entity-clarity, 4 edit) — tidak ada isu struktural, faktual, maupun framing. Layak tayang.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Nol klise pembuka; paragraf 1–4 kalimat bervariasi; em-dash total 1; honest hedging praktisi ("routing yang tak pernah diperbarui...") |
| Factual & SAP-spec accuracy | 9 | 5/5 klaim spot-check lolos vs dossier; tidak ada spec karangan |
| On-page SEO compliance | 9 | Meta title 51, meta desc 155, slug 43; keyword di H1/lead/last-para; LSI >10 |
| GEO extractability (§2a) | 9 | Jawaban langsung 48/43/40/41 kata per H2, semuanya poin baru (bukan pengulangan snippet); tabel quotable baris-per-baris |
| Soltius framing discipline | 10 | 2 mention persis (positioning line Kesimpulan + CTA soltius.co.id); "mengimplementasikan dan mendampingi", tanpa superlatif |
| Internal linking | 10 | Tepat 2: hub digital-manufaktur-sistem (H2 #3) + cousin 8-modul-sap (H2 #1); inline natural, keduanya 200/OK per dossier 2026-07-06 |
| FAQ quality | 9 | 3 Q&A dari PAA; 35/36/34 kata; tiap jawaban memuat fakta/angka (lima fungsi; 5 modul; level jam) |
| Image-brief completeness | N/A | Batch override: TANPA placeholder by design — nol `{IMAGE_NN}` ditemukan ✓; tidak ada images.json (bukan isu) |

## What I fixed (changelog)
- **Grammar/atribusi statistik BPS (H2 #3)**: "Industri pengolahan menyumbang 19,07% PDB 2025 dan tumbuh 5,30%, sektor terbesar perekonomian nasional..." (aposisi menggantung + tanpa "terhadap") → "Industri pengolahan adalah sektor terbesar perekonomian nasional: menyumbang 19,07% terhadap PDB 2025 dan tumbuh 5,30%, menurut data BPS yang dikutip Kemenperin (Februari 2026)."
- **Entity clarity di lead**: "naik kelas ke PP/DS" → "naik kelas ke SAP PP/DS" (sebutan pertama entitas; ekspansi penuh tetap sekali di H2 #4). Lead tetap 67 kata (≤80).
- **EYD/istilah asing**: italic pada *shift* di pemakaian pertama (list fungsi #3); pemakaian berikutnya polos sesuai aturan §3.
- **EYD tanda baca**: hapus koma non-standar sebelum "atau" pada daftar dua unsur ("routing yang tak pernah diperbarui atau konfirmasi yang menumpuk di akhir shift").
- **Frontmatter**: `word_count` diperbarui 975 → **960** (hitungan editor, body H1 s/d CTA, anchor link dihitung, markup tidak).

## What I flagged (open issues)
- (kosong — tidak ada isu terbuka)
- Catatan non-blocking untuk CMS: `dateModified`/freshness ditangani skema CMS saat publish; frontmatter memuat `publish_month: 2026-07` sesuai template §7.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5) — PASS
- [x] Tanpa pembuka "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" (lead dibuka pain konkret)
- [x] "Selain itu" pembuka paragraf: 0
- [x] "Penting untuk dicatat/dipahami": 0
- [x] "Dengan demikian" / "Sebagai kesimpulan": 0 (Kesimpulan dibuka callback "Nilai SAP PP lahir dari siklus tertutupnya")
- [x] Em-dash: **1** (di snippet) ≤2
- [x] Panjang paragraf bervariasi 1–4 kalimat; bukan blok simetris
- [x] Tidak semua H2 → bullet (H2 #2 tabel+prosa, H2 #3 prosa+langkah, H2 #4 prosa murni)
- [x] Klaim generik tanpa angka: tidak ada (≥7 angka spesifik inline)
- [x] Adjektiva hype (canggih/powerful/terdepan/seamless): 0
- [x] Service-dump: 0 (body vendor-teach penuh)

### B. Factual & SAP-spec spot-check — 5/5 PASS
| Claim | Source check | Verdict |
|---|---|---|
| Industri pengolahan 19,07% PDB 2025, tumbuh 5,30%, sektor terbesar (BPS via Kemenperin, Feb 2026) | dossier Claim 1 ✓ (URL sippa.kemenperin.go.id) | pass |
| PP/DS = Production Planning and Detailed Scheduling, embedded di S/4HANA, aktivasi via konfigurasi + penandaan material, tanpa instalasi terpisah | dossier Claims 2–3 ✓ (help.sap.com doc set f899ce30) | pass |
| PP standar infinite/harian vs PP/DS finite hingga level jam | dossier Claim 4 ✓ | pass |
| 3 tipe manufaktur (discrete; process/PP-PI master recipe+process order+batch; repetitive periode-kuantitas) + Kanban 1 kalimat; contoh industri discrete/repetitive di-hedge "Umumnya" | dossier Claims 5–8 ✓ (hedge sesuai Flags) | pass |
| Integrasi 5 modul MM/SD/QM/PM/FI-CO (tanpa HCM/PS); 4 master data (material master, BOM, work center, routing) | dossier Claims 9, 11 ✓ | pass |

Guard-rail dossier lainnya terverifikasi terjaga: nol angka efisiensi/ROI; nol bahasan lisensi/harga PP/DS; "lima fungsi utama" dilabeli "(pengelompokan praktis, bukan taksonomi resmi SAP)" sesuai flag Claim 10; sitasi TIDAK memakai URL SAP Community `ba-p/13409001` (403).

### C. On-page SEO checklist (seo_playbook §3 + addendum overrides) — PASS
- [x] Meta title ≤60 (keyword first 30) — actual: **51** chars; "SAP PP" posisi 1
- [x] Meta description 140–160 — actual: **155** chars
- [x] Slug ≤60, kebab-case, keyword — actual: `sap-pp-production-planning-fungsi-penerapan` (43)
- [x] H1 memuat keyword ("SAP PP (Production Planning)...")
- [x] H2 body count 3–4 (override) — actual: **4** (+FAQ +Kesimpulan)
- [x] ≥1 question-format H2 — actual: **3** (H2 #1, #3, #4); H2 honest → digantikan honest hedging 2 kalimat di H2 #3 (opsi addendum §2)
- [x] Keyword di 100 kata pertama ("SAP PP" di kalimat ke-2 lead) & paragraf terakhir (Kesimpulan)
- [x] Definition snippet 40–60 kata — actual: **49** (verbatim dossier, satu-satunya definisi)
- [x] LSI ≥8 — counted: 12+ (modul SAP PP, perencanaan produksi, production order, master data, work center, routing, BOM, MRP, capacity planning, konfirmasi produksi, discrete/process/repetitive manufacturing, Kanban, PP/DS)
- [x] Internal link **TEPAT 2** (override; bukan 3) — hub `digital-manufaktur-sistem` (anchor "sistem manufaktur digital", H2 #3) + cousin `8-modul-sap-indonesia-yang-paling-banyak-digunakan-perusahaan` (anchor "modul SAP yang paling banyak digunakan", H2 #1); inline natural, tanpa "BACA JUGA"
- [x] Sitasi eksternal 1–2 — actual: **2** inline (help.sap.com; sippa.kemenperin.go.id)
- [x] FAQ **2–3** (override; bukan 5–7) — actual: **3**; jawaban 35/36/34 kata (band 30–60), tiap jawaban memuat 1 fakta/angka
- [x] Image placeholder — **N/A by design** (override): 0 `{IMAGE_NN}` ✓ (konsep visual → tabel tipe manufaktur + 2 list bernomor)
- [x] ≥1 elemen terstruktur — actual: 1 tabel + list 5 fungsi ber-lead-in bold + list 4 langkah
- [x] Angka spesifik inline ≥4 (override) — actual: **7+** (lima fungsi, empat master data, tiga tipe, lima modul, 19,07%, 5,30%, level jam)
- [x] Word count **800–1000** (override; bukan 1.500–1.800) — actual: **960** (target ~900; masih on-point, pemangkasan lebih lanjut tidak diperlukan)
- [x] Lead ≤80 kata tanpa paragraf roadmap — actual: **67** (janji artikel 1 kalimat di dalam lead, bukan paragraf terpisah)
- [x] Kesimpulan ≤80 kata — actual: **59**, di bawah `## Kesimpulan` sendiri

### C2. GEO extractability (seo_playbook §2a + addendum §5) — PASS
- [x] Jawaban langsung 40–60 kata setelah TIAP H2 — actual: **48 / 43 / 40 / 41** kata; masing-masing poin BARU milik H2-nya (siklus tertutup; 4 master data + pemilihan tipe; alur order-to-confirmation; infinite vs finite) — bukan pengulangan snippet
- [x] Definisi hanya SEKALI (di snippet "Ringkasnya:") — tidak ada H2 "Apa itu SAP PP"; aposisi lead "modul perencanaan produksi dalam SAP S/4HANA" = identifier 6 kata sebelum snippet, bukan restatement definisi
- [x] Satu paragraf = satu poin quotable & verifiable; tabel tipe manufaktur quotable per baris
- [x] Entity-clear: SAP PP (Production Planning), SAP S/4HANA, MRP, BOM, work center, routing, PP-PI, SAP PP/DS (Production Planning and Detailed Scheduling), MM/SD/QM/PM/FI-CO semua di-expand pada sebutan pertama
- [x] FAQ parseable FAQPage schema; freshness via `publish_month` di meta block (dateModified = tanggung jawab CMS)

### D. Soltius framing discipline (product_matrix.md + style_guide §11) — PASS
- [x] Implementator/pendamping: "Soltius mengimplementasikan dan mendampingi SAP PP hingga PP/DS" — bukan "membuat"
- [x] Self-mention **maks 2** (override; bukan ≤3) — actual: **2** (positioning line Kesimpulan + soft CTA soltius.co.id); nol Soltius di body
- [x] Tanpa superlatif tak terverifikasi; kredensial sesuai company_profile (SAP Platinum Partner via United VARs, pengalaman lintas industri manufaktur)
- [x] Positioning line di Kesimpulan sesuai anchor brief
- [x] Soft CTA soltius.co.id = **baris paling akhir**, terpisah dari Kesimpulan, konsultatif, anchor funnel SAP PP/DS ("Untuk menjajaki penerapan SAP PP dan SAP PP/DS...")
- [x] Hub link inline natural di H2 #3 (posisi mid-body diizinkan brief), anchor deskriptif

### E. Anti-cannibalization spot check — PASS
- Closest prior: `mrp-c01` (2026-06) — Jaccard ≈ 0.15 per brief (< 0.4)
- Boundary dedup terverifikasi di final: MRP = 1 kalimat fungsi + 1 FAQ (tanpa netting/lotting/offsetting/exploding/MPS/MRP II/MRP Live); BOM = 2 kalimat master data (tanpa jenis/struktur); tanpa in-memory/Fiori (`sap-s4hana-c01`); tanpa MES/OEE/shop-floor digital (`digital-manufacturing`); tanpa heuristik/optimizer PP/DS
- Verdict: **distinct angle confirmed** — artikel ini memiliki MODUL PP sebagai siklus utuh

### F. Image-brief completeness — N/A (batch override)
- Batch conditional 2026-07 berjalan TANPA stage image-planner dan TANPA `{IMAGE_NN}` (style_addendum §3/§7). Scan final: **0 placeholder** ✓. Tidak ada `images.json` — sesuai desain, BUKAN isu.

## Batch-2026-07 overrides applied (ringkasan)
| Check | Nilai default | Nilai batch (dipakai) | Actual |
|---|---|---|---|
| Word band | 1.500–1.800 | **800–1000 (~900)** | 960 ✓ |
| FAQ | 5–7 | **2–3** (jawaban 30–60 kata + 1 fakta) | 3 (35/36/34) ✓ |
| Internal link | 3 | **2** (1 hub + 1 cousin) | 2 ✓ |
| Image placeholder | 2–3 | **0 (dilarang)** | 0 ✓ |
| Soltius mention | ≤3 | **≤2** | 2 ✓ |
| Definisi | — | **hanya di snippet** | ✓ (49 kata) |
| Lead / Kesimpulan | — | **≤80 kata / ≤80 kata** | 67 / 59 ✓ |
| Angka inline | 6+ | **4+** | 7+ ✓ |
