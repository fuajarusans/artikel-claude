---
brief_id: "ifrs-s1-s2-c01"
editor_run_date: "2026-10-08"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-10"
batch_bands_applied: "word 1000–1200 (cleaned-prose); FAQ 3–5; internal links EXACTLY 2; image-brief N/A (no placeholders by design); definition once (snippet only)"
---

# Editor QC Report — IFRS S1 & S2: Standar Baru Pelaporan Keberlanjutan dan Dampaknya

## Recommendation
**approve**

Draft masuk nyaris bersih sesuai batch override 2026-10. Semua angka dan tanggal tertelusur ke dossier (IFRS Foundation + IAI/DSK sebagai sumber primer), keenam flag riset dipatuhi (tidak ada "33 yurisdiksi", POJK 51 di-hedge satu kalimat, SCT tanpa klaim dukungan IFRS S1/laporan PSPK otomatis, Scope 3 = tahun pertama, tanpa nomor paragraf karangan, interoperabilitas FAQ 5 diatribusikan ke IFRS Foundation–EFRAG). Struktur batch terpenuhi: lead 57 kata, definition snippet sekali, 3 H2 (2 question-format + tabel + list), FAQ 5, Kesimpulan 68 kata, soft CTA baris terakhir. Satu perbaikan in-place: jawaban langsung H2 #1 dirampingkan dari 67 → 47 kata (masuk band GEO 40–60) dengan memindah detail kerangka TCFD/SASB ke kalimat elaborasi, yang sekaligus menaikkan variasi ritme (burstiness CV 0,313 → 0,353). Satu isu terbuka bukan cacat kualitas, melainkan keputusan strategi tautan yang perlu konfirmasi user (pasangan hub+cousin identik dengan artikel Agustus) — tidak menahan approve karena diferensiasi ada pada konten.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tanpa pembuka klise; em-dash 0; CV paragraf 0,353; tidak semua H2 → 3 bullet (tabel/list/prosa); tanpa adjektiva hype |
| Factual & SAP-spec accuracy | 9 | 5 klaim di-spot-check vs dossier — semua pass; 6 flag dipatuhi; status adopsi ID forward-looking & di-hedge |
| On-page SEO compliance | 9 | meta_title 52, meta_description 158, slug 42; keyword di H1/lead/meta/last-para; 3 H2 (≥1 question) sesuai band |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata di tiap H2 (47/46/48); 1 poin dikutip/paragraf; FAQ FAQPage-ready; date_modified ada |
| Soltius framing discipline | 9 | Implementator/pendamping SAP (bukan pembuat/penyusun); 2 self-mention; tanpa superlatif; positioning line + soft CTA |
| Internal linking | 8 | TEPAT 2 (hub + cousin SCT), inline, tanpa "BACA JUGA" — benar; −1 karena pasangan identik artikel Agustus (lihat flag) |
| FAQ quality | 9 | 5 Q&A (band 3–5); jawaban 40/40/40/45/45 kata; tiap jawaban memuat fakta/angka |

## What I fixed (changelog)
- **H2 #1 jawaban langsung dirampingkan 67 → 47 kata** agar masuk band GEO 40–60. Klausa "dibangun di atas kerangka TCFD serta standar industri SASB" dipindah dari kalimat pembuka ke kalimat elaborasi tersendiri sebelum tabel; ekspansi nama lengkap TCFD + SASB tetap muncul sekali (entity clarity terjaga). Efek samping positif: paragraph burstiness CV naik 0,313 → 0,353.
- **Frontmatter `word_count` 1136 → 1137** menyesuaikan hitung cleaned-prose (`tools/count_words.py`) setelah edit. `target_word_count` tetap 1100.
- Tidak ada perbaikan anti-AI lain yang diperlukan (scan bersih), tidak ada koreksi fakta (semua klaim lolos), tidak ada koreksi framing Soltius.

## What I flagged (open issues)
- ⚠️ **Pasangan internal link identik dengan `laporan-keberlanjutan-c01` (2026-08)** — hub `.../solutions-by-products/sustainability` + cousin blog SCT. Penyebab: Soltius hanya punya satu hub Sustainability dan SCT adalah cousin paling topikal. *Recommendation*: dapat diterima apa adanya karena diferensiasi antar-artikel ada pada KONTEN (standar global S1/S2 vs mekanik POJK 51), bukan target tautan; default dipakai = SCT. Alternatif bila user menghendaki cousin berbeda: `migrasi-erp-ke-cloud` sebagai "sistem sumber data". **Perlu konfirmasi user** (ini jawaban atas "tanyakan apa yang ingin ditanyakan" pada brief Oktober).
- ℹ️ **Status revisi POJK 51 bergerak (Flag 2)** — ditulis hedge ("konsultasi publik awal 2026, aturan final masih dalam proses"). Jika pada tanggal publish aturan sudah ditetapkan OJK, perbarui satu kalimat di H2 #3 dan FAQ 2 sebelum tayang. Bukan penahan approve.

## Detailed check results

### A. Anti-AI scan (style_guide §5) — PASS
- [x] Tanpa "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" (grep: 0)
- [x] Tanpa "Selain itu" pembuka ≥2 paragraf beruntun (grep: 0)
- [x] Tanpa "Penting untuk dicatat/dipahami bahwa" (grep: 0; "Satu catatan penting:" memperkenalkan koreksi konkret E-E-A-T, bukan filler)
- [x] "Dengan demikian" tidak dipakai (grep: 0)
- [x] Em-dash count = **0** (ceiling ≤2) ✓
- [x] Panjang paragraf bervariasi — sentence counts [4,3,1,2,2,4,3,3,4,4,2,3,2,2,3,3,1], **CV 0,353 ≥ 0,30**
- [x] Tidak tiap H2 → 3 bullet (#1 tabel, #2 list bernomor 4 pilar, #3 prosa)
- [x] Tidak ada klaim generik tanpa angka (≥30 token angka/tanggal spesifik inline)
- [x] Tanpa adjektiva hype bertumpuk (canggih/powerful/seamless/terdepan)
- [x] Tanpa service-dump Soltius

### B. Factual & SAP-spec spot-check (vs dossier + product_matrix)
| Claim | Source check | Verdict |
|---|---|---|
| Terbit 26 Juni 2023; efektif global 1 Jan 2024; nama resmi S1/S2 | dossier Claim 1–2 ✓ (IFRS Foundation) | pass |
| Empat pilar warisan TCFD; S2 wajib Scope 1/2/3 via GHG Protocol | dossier Claim 3–4 ✓ | pass |
| ">40 yurisdiksi (IFRS Foundation, awal 2026)" — BUKAN "33" | dossier Claim 11 + Flag 1 ✓ | pass |
| PSPK 1 & 2 disahkan DSK IAI 1 Juli 2025, dijadwalkan efektif 1 Jan 2027 (hedge) | dossier Claim 9 ✓ (IAI/DSK) | pass |
| SCT = himpun/audit data ESG; pemetaan SPK tetap kerja tim+auditor (tanpa klaim dukungan IFRS S1/laporan otomatis) | dossier Claim 12 + Flag 3 ✓ | pass |
- Flag 4 (Scope 3 = **tahun pertama**, bukan "lima tahun") dipatuhi.
- Flag 5 (tanpa nomor paragraf/klausa karangan) dipatuhi.
- Flag 6 (FAQ 5 interoperabilitas = **IFRS Foundation & EFRAG, Mei 2024**, bukan "IFRS–GRI") dipatuhi.
- Koreksi E-E-A-T "berlaku 2024" (global) vs jalur Indonesia 2027 disertakan — sinyal akurasi.
- Kredensial Soltius (SAP Platinum Partner via United VARs; Metrodata Group sejak 1998) cocok `product_matrix.md`/`company_profile.md`.

### C. On-page SEO checklist (batch band)
- [x] Meta title **52** char, keyword "IFRS S1 & S2" di depan (≤60) ✓
- [x] Meta description **158** char (band 140–160) ✓
- [x] Slug `ifrs-s1-s2-standar-pelaporan-keberlanjutan` — **42** char, kebab-case, keyword-led ✓
- [x] H1 memuat primary keyword ✓
- [x] H2 count **3** (band batch ini 3–5); ≥1 question-format (#1 & #3) ✓
- [x] Keyword di 100 kata pertama (lead) & paragraf terakhir (CTA) ✓
- [x] Definition snippet "Ringkasnya:" ~52 kata, sekali saja ✓
- [x] Internal link **TEPAT 2** (hub + cousin SCT), inline, tanpa BACA JUGA ✓ (band batch = 2)
- [x] Sitasi eksternal **2** (IFRS Foundation + DSK IAI), inline, beratribusi ✓
- [x] FAQ **5** Q&A (band batch 3–5) ✓
- [x] ≥1 tabel (S1 vs S2) + ≥1 list (empat pilar) ✓
- [x] Word count **1137** (band batch 1000–1200; target ~1100) ✓
- N/A Image placeholder — memang 0 by design; tidak di-flag (addendum §7).
- Definisi tidak diulang di body/H2/FAQ (cek repetisi lolos).

### C2. GEO extractability (seo_playbook §2a) — PASS
- [x] Jawaban langsung 40–60 kata setelah tiap H2: **47 / 46 / 48** kata, poin baru (bukan ulangan snippet)
- [x] Tiap paragraf body = satu poin yang bisa dikutip & diverifikasi
- [x] FAQ parseable untuk FAQPage; `date_modified: 2026-10-08` ada di meta block (topik cepat usang)

### D. Soltius framing discipline (product_matrix + style_guide §11) — PASS
- [x] Soltius = implementator/pendamping SAP, bukan "membangun"/penyusun laporan
- [x] Self-mention = **2** (positioning line di Kesimpulan + soft CTA soltius.co.id); dalam budget ≤2 batch ini
- [x] Tanpa superlatif tak terverifikasi ("terbaik/nomor satu")
- [x] Nama produk & klaim (SAP Sustainability, SCT) sesuai dossier; dukungan standar tidak disajikan sebagai sertifikasi
- [x] Kesimpulan memakai positioning line company_profile
- [x] Soft website CTA = baris terakhir, konsultatif (bukan "beli sekarang")
- [x] Hub link anchor natural inline ("solusi sustainability berbasis SAP"), bukan callout

### E. Anti-cannibalization spot check
- Artikel terdekat: `esg-c01` (2026-06, konsep ESG) & `laporan-keberlanjutan-c01` (2026-08, mekanik POJK 51).
- Subtopic overlap (Jaccard dari brief): vs esg-c01 = 0,00; vs laporan-keberlanjutan-c01 = 0,00.
- Guardrail dipatuhi: tidak mendefinisikan ESG/tiga pilar; POJK 51 hanya satu kalimat arah (tanpa 9 komponen/tenggat/sanksi); tanpa tabel timeline regulasi ID.
- Verdict: **distinct** (sudut = standar global S1/S2 + dampak; Indonesia hanya jalur adopsi di-hedge). Pengulangan target tautan dicatat sebagai keputusan strategi, bukan kanibalisasi konten.

## The shipping question
Jika tayang besok di soltius.co.id dan dibaca konsultan SAP senior + CIO skeptis: akurat (koreksi tanggal 2024-vs-2027), netral, terstruktur (tabel S1/S2 + empat pilar), dan jujur soal batas perkakas vs pekerjaan auditor. **Ya — layak approve.** Satu-satunya keputusan terbuka (target tautan identik artikel Agustus) bersifat strategi, bukan kualitas, dan sudah disiapkan sebagai pertanyaan ke user.
