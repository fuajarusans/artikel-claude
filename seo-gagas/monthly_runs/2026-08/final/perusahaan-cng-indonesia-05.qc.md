---
brief_id: "perusahaan-cng-indonesia-05"
editor_run_date: "2026-08-11"
recommendation: "approve"
overall_score: 9
ai_score: 0.08
plagiarism_score: 0.03
---

# Editor QC Report — Data ESG dari Pasokan CNG: Bukti Emisi untuk Laporan Anda

## Recommendation
**approve**

Draft ini shippable. Semua hedge kritis yang diminta terjaga: POJK 51 dibingkai hanya mengikat LJK/Emiten/Perusahaan Publik (bukan semua perusahaan), dengan pengakuan pelaporan sukarela; rumus emisi = data aktivitas × faktor emisi; tidak ada angka faktor emisi Indonesia yang diklaim (diarahkan ke KLHK SIGN SMART, dan angka EIA 53/100 kg CO2/MMBtu dilabeli tegas sebagai konteks AS/global, bukan angka Indonesia); sudut anti-greenwashing "menurunkan, bukan menghapus" kuat, dengan larangan klaim "hijau/nol emisi"; dan penyedia CNG/Gaslink diposisikan sebagai sumber data pemakaian (telemetri), BUKAN penerbit kredit karbon (SPE-GRK lewat MRV independen + SRN PPI KLHK + IDXCarbon disebut terpisah). Struktur lengkap dan tidak terpotong meski writer mati saat verifikasi akhir: 5 H2 badan masing-masing dengan jawaban 40–60 kata, definition snippet, tabel Scope, numbered + bulleted list, H2 jujur, Kesimpulan terpisah, dan soft CTA gagas.co.id sebagai baris terakhir. Originalitas bersih (AI 0.08; tidak ada verbatim non-Gagas ≥20 kata). Dua perbaikan in-place memperkuat artikel tanpa mengubah angle: (1) menautkan 2 sitasi otoritatif (IEA, OJK) yang sebelumnya hanya atribusi teks, dan (2) memulihkan FAQ ke-6 ("Apakah CNG bisa disebut hijau/nol emisi?") yang diminta brief dan sudah pre-drafted di dossier.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dash di prosa; tanpa klise pembuka; ritme kalimat bervariasi (CV 0.629). |
| Factual & energi-gas / CNG accuracy | 9 | Semua angka tertelusur ke dossier; tanpa spesifikasi/tanggal karangan; tanpa angka faktor emisi Indonesia. |
| On-page SEO compliance | 9 | Meta 48/151, slug 41, 3 internal + 2 external link, 6 FAQ, tabel + 2 list, 1.550 kata. |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata setelah tiap H2; snippet definisi; FAQPage-ready; date_modified ditambahkan. |
| PGN Gagas framing discipline | 9 | Penyalur/penyedia data; 3 self-mention; tanpa superlatif; batas kredit karbon eksplisit. |
| Internal linking | 9 | Hub di lead + 2 cousin in-context; anchor deskriptif; tanpa "BACA JUGA". |
| FAQ quality | 9 | 6 Q&A, 40–80 kata, mirror PAA; FAQ "hijau/nol emisi" dipulihkan. |
| Originality (plagiarism + AI-detector) | 9 | AI 0.08 (pass); tidak ada verbatim non-Gagas ≥20 kata. |

## What I fixed (changelog)
- **Restored the brief's 6th FAQ** — "Apakah CNG bisa disebut energi 'hijau' atau nol emisi?" (draft hanya punya 5; brief meminta 6, dossier sudah men-draft jawabannya). Memperkuat cakupan PAA + sudut anti-greenwashing. FAQ kini 6.
- **Hyperlinked 2 external authoritative citations** yang sebelumnya hanya atribusi teks: IEA (Global Methane Tracker 2025) di H2 #5, dan POJK 51/POJK.03/2017 (OJK) di FAQ. Memenuhi §9 (1–2 outbound authority links) tanpa menambah klaim baru.
- **Added `date_modified: "2026-08-11"`** ke meta block untuk sinyal freshness/GEO (§2a).
- **Updated `word_count`** frontmatter → 1.550 (mencerminkan penambahan FAQ; tetap dalam band ≤1.600).

## What I flagged (open issues)
- ⚠️ **Paragraph burstiness CV = 0.419** — di bawah target 0.45 namun jauh di atas ambang tell 0.30; sentence CV kuat (0.629). *Rekomendasi*: tidak memblokir; jika di-refresh nanti, pecah 1–2 paragraf badan agar variasi panjang lebih tegas.
- ⚠️ **Vocab top-30 = 37,5%** (target <30%) — repetisi domain wajar (emisi, Scope, faktor, data, gas, CNG). *Rekomendasi*: dapat diabaikan; istilah entitas ini justru dibutuhkan untuk kejelasan entitas GEO.
- ⚠️ **Self-mention di batas maksimum (3/3)** — aside Gaslink, Kesimpulan (PGN Gagas + Gaslink), CTA Gaslink. *Rekomendasi*: aman, tapi jangan tambah mention lain saat refresh.
- ⚠️ **`target_word_count: 1400`** di frontmatter tidak sinkron dengan brief (1.550). *Rekomendasi*: kosmetik; word_count final akurat, jadi tidak memblokir.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — lead membuka pada pain konkret (auditor bertanya angka).
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 kemunculan.
- [x] No "Penting untuk dicatat / dipahami bahwa" — tidak ada.
- [x] "Dengan demikian" not overused — 0 kemunculan.
- [x] Em-dash count ≤2 — prosa 0 (1 em-dash hanya di dalam {IMAGE_01}, di-strip scanner).
- [x] Varied paragraph lengths — campuran 1–5 kalimat; sentence CV 0.629.
- [x] Not every H2 → 3-bullet list — tabel, numbered, bulleted, prosa dicampur.
- [x] No generic claims without numbers — 53/100 kg CO2/MMBtu, 145 Mt, 35%, 75%, 358 juta ton, 30 April, 305-1/2/3.
- [x] No stacked hype adjectives — "lebih bersih" bersifat faktual, bukan hype menumpuk.
- [x] No service-dump paragraph — satu anchor relevan (Gaslink) saja.

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Scope 1 = emisi langsung dari aset milik/kendali; dihitung data aktivitas × faktor emisi | dossier ✓ (GHG Protocol Corporate Standard) | pass |
| POJK 51/POJK.03/2017 wajib bagi LJK/Emiten/Perusahaan Publik; tenggat 30 April | dossier ✓ + OJK (ojk.go.id) | pass |
| EIA: ~53 kg CO2/MMBtu (gas) vs ~100 (batu bara), dilabeli konteks AS/global | dossier ✓ + eia.gov (dikonfirmasi WebSearch) | pass |
| IEA: sektor energi ~145 Mt metana 2024, >35%; target turun ~75% 2030 vs 2023 | dossier ✓ (IEA Global Methane Tracker 2025) | pass |
| PGN Gagas Silver Stevie, Best Annual Report – Privately-Owned, Laporan Tahunan 2024 | company_profile.md ✓ + dossier | pass |
| Faktor emisi resmi Indonesia → KLHK SIGN SMART (5 sektor termasuk energi); TIDAK ada angka Indonesia diklaim | dossier ✓ (kemenlh.go.id) | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — 48 chars; "Perusahaan CNG Indonesia" pada pos 1–24.
- [x] Meta description 140–160 — 151 chars.
- [x] Slug ≤60, kebab-case, keyword — `perusahaan-cng-indonesia-data-esg-laporan` (41).
- [~] H1 contains keyword — H1 memakai head term "CNG" ("Pasokan CNG"); frasa penuh "perusahaan CNG" muncul di 100 kata pertama + meta title. Dapat diterima (sinonim jelas per §3).
- [x] H2 count 4–5 — 5 H2 badan (+ FAQ + Kesimpulan).
- [x] ≥1 question-format H2 (2: "Kenapa…", "Bagaimana…"); ≥1 honest H2 ("Jujur: … Menurunkan, Bukan Menghapus").
- [x] Keyword in first 100 words — "memilih perusahaan CNG" + hub anchor.
- [x] Definition snippet near top (40–60 words) — blockquote "Ringkas: Emisi Scope 1 adalah…" (~50 kata).
- [x] ≥8 LSI terms — laporan keberlanjutan, POJK 51, Scope 1/2/3, faktor emisi, GRI 305, GHG Protocol, IPCC, telemetri, dekarbonisasi, metana, MRV, SRN PPI, data aktivitas (13+).
- [x] 3 internal links (1 hub + 2 cousins) — gagas.co.id/perusahaan-cng-indonesia/ (lead), /gaslink/, /perusahaan-lng-indonesia/.
- [x] ≥1 external authoritative citation — 2 hyperlink (IEA, OJK) + atribusi inline (ESDM, EIA, KLHK, GHG Protocol, GRI, IPCC).
- [x] FAQ 5–7 Q&As — 6.
- [x] 2 image placeholders (up to 3) — 3 ({IMAGE_01/02/03}) dengan alt-text.
- [x] ≥1 list + ≥1 table — numbered 4-item + bulleted 3-item + tabel Scope.
- [x] Word count 1,200–1,600 — 1.550.

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — dikonfirmasi untuk kelima H2 badan (masing-masing ~42–48 kata pada paragraf pembuka).
- [x] Each body paragraph makes one independently quotable, verifiable point — mis. "batas Scope ditentukan kepemilikan, bukan jenis bahan bakar"; "taksiran adalah hal pertama yang dicoret auditor".
- [x] FAQ parseable for FAQPage schema; `dateModified`/freshness — 6 Q&A H3 bersih; `date_modified: 2026-08-11` ditambahkan ke meta block.

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas dibingkai sebagai penyalur gas bumi + penyedia data pemakaian (telemetri) — "menyalurkan CNG lewat Gaslink"; TIDAK mengklaim memproduksi gas/menerbitkan kredit karbon.
- [x] ≤3 self-mentions — 3: aside Gaslink (H2 #3), Kesimpulan (PGN Gagas + Gaslink), CTA (Gaslink).
- [x] No unverifiable superlatives — tidak ada "terbaik/nomor satu/terbesar".
- [x] Nama/spek produk sesuai profil — Gaslink (CNG industri via GTM), Mother Station, telemetri, Silver Stevie 2024, ekosistem PGN/Subholding Gas Pertamina.
- [x] Closing memakai positioning line dari company_profile.md — "penyedia gas bumi lebih bersih dalam ekosistem PGN (Subholding Gas Pertamina)".
- [x] Soft website CTA sebagai baris terakhir — "…telusuri solusi Gaslink di gagas.co.id." (konsultatif, bukan "beli sekarang").
- [x] Hub link sebagai natural inline anchor di lead ("penyedia CNG di Indonesia") — bukan callout BACA JUGA.

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `keandalan-penyedia-cng-kelangsungan-bisnis` (kriteria memilih penyedia) — dari 10 artikel cluster `perusahaan-cng-indonesia`.
- Subtopic overlap (Jaccard estimate): ~0.15–0.20 (irisan hanya pada "memilih penyedia CNG"; inti ESG-deliverable/Scope 1-2-3/POJK 51/faktor emisi/greenwashing sepenuhnya baru — tidak ada artikel cluster lain yang menyentuh pelaporan emisi/ESG).
- Verdict: distinct angle confirmed.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `perusahaan-cng-indonesia-05.id.quality-input.json` written (jalan bersih, tanpa error).
- [x] AI-detector score < 0.30 — actual 0.08 (verdict pass). Hanya 2 flag low: paragraph-low-variance (CV 0.419) + vocab-repetition (37,5%).
- [x] Paragraph burstiness CV ≥ 0.30 — actual 0.419 (di atas ambang tell; sentence CV 0.629).
- [x] Plagiarism: 8 kandidat di-web-check; no non-Gagas verbatim ≥20 words. Lead & kalimat badan distinctive (mis. "batas Scope ditentukan kepemilikan…") tanpa match; angka EIA/IEA/GRI 305 selaras dengan sumber otoritatif tercantum (paraphrase Bahasa Indonesia, sumber Inggris) — bukan lifting. plagiarism score: 0.03.
