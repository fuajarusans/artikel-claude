---
brief_id: "employee-retention-c01"
editor_run_date: "2026-07-06"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-07 (style_addendum.md overrides applied)"
---

# Editor QC Report — Apa Itu Employee Retention dan Strategi Mempertahankan Karyawan

## Recommendation
**approve** *(batch-2026-07 overrides applied)*

Draft masuk sudah sangat bersih dan patuh terhadap seluruh override batch (band 800–1000, FAQ 2–3, 2 internal link, tanpa image placeholder, maks 2 self-mention Soltius, definisi hanya sekali). Semua angka terverifikasi terhadap dossier; framing Soltius benar (implementer, bukan pembuat); tanpa AI-tell; batas dedup terhadap `turnover-karyawan-c01` dihormati (turnover hanya disebut sebagai sisi kebalikan retensi, tanpa rumus/jenis/penyebab turnover). Stage editor sebelumnya gagal hanya karena error API 529 sementara, bukan karena mutu. Tiga perbaikan kecil diterapkan; tidak ada isu yang menuntut rework writer/strategist.

## Batch-2026-07 overrides applied (bukan default definisi editor)
- Band word count yang dicek: **800–1000** (bukan 1.500–1.800) → body **944 kata**: COMPLIANT.
- FAQ: **2–3** (bukan 5–8) → 3 Q&A: COMPLIANT.
- Internal link: **tepat 2** (bukan 3) — 1 hub + 1 cousin: COMPLIANT.
- Image placeholder: **N/A by design** — 0 `{IMAGE_NN}`, tidak ada `images.json`; semua validasi image DILEWATI sebagai N/A (bukan fail).
- Soltius self-mention: **maks 2** — 1 positioning line di Kesimpulan + 1 soft CTA soltius.co.id (baris terakhir): COMPLIANT.
- Definisi HANYA SEKALI (di snippet "Ringkasnya:") — hard batch rule: COMPLIANT (tidak ada H2/paragraf yang menyatakan ulang definisi snippet).

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dash; ritme paragraf bervariasi (1–5 kalimat); tanpa opener/transisi AI; tanpa adjektiva hype. |
| Factual & SAP-spec accuracy | 10 | Semua angka cocok dossier; SAP People Intelligence + Joule (GA Nov 2025) akurat; Soltius = implementer. |
| On-page SEO compliance | 9 | Meta title 59, meta desc 157, slug 51 — semua dalam band; keyword di 100 kata pertama; H1 memuat keyword. |
| GEO extractability (§2a) | 9 | Jawaban langsung 46–52 kata setelah tiap H2, poin baru (bukan ulang snippet); `date_modified` ditambahkan. |
| Soltius framing discipline | 10 | 2 mention; tanpa superlatif; framing "mengimplementasikan/mendampingi". |
| Internal linking | 9 | Tepat 2, inline natural, tanpa "BACA JUGA"; hub di lead, cousin di sebutan pertama SAP SuccessFactors. |
| FAQ quality | 9 | 3 Q&A, jawaban 38–42 kata, tiap jawaban 1 fakta/angka; diambil dari PAA. |
| Image-brief completeness | N/A | Tanpa image placeholder by design (addendum §3/§7) — tidak di-flag sebagai isu. |

## What I fixed (changelog)
- **Meta block**: menambahkan `date_modified: "2026-07-06"` — sinyal freshness GEO (seo_playbook §2a) yang belum ada di draft.
- **Frontmatter**: `word_count` 952 → **944** (dihitung ulang atas body aktual H1–CTA, di luar frontmatter/pemisah tabel).
- **H2 #4 (prosa)**: "Dua catatan agar ekspektasi sehat" → "Dua catatan agar ekspektasi **tetap** sehat" (kelancaran/EYD).

## What I flagged (open issues)
- ⚠️ Tautan sibling `turnover-karyawan-c01` (2026-06) belum live per catatan strategist (HTTP 500, 2026-07-06). **Tidak** dilakukan swap link — total link tetap tepat 2. Jika sibling sudah terbit saat publish, opsional: ganti cousin dengan link sibling pada kalimat "kebalikan dari turnover". Bukan blocker.
- ⚠️ Benchmark retention 80–90% / 82–87% berasal dari sumber sekunder HR; sudah di-hedge dengan benar ("Menurut praktik umum industri … bukan standar resmi"). Tidak perlu tindakan.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] Tanpa opener "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" — lead buka pada pain konkret.
- [x] Tanpa "Selain itu" pembuka ≥2 paragraf beruntun.
- [x] Tanpa "Penting untuk dicatat/dipahami".
- [x] "Dengan demikian" tidak dipakai berlebihan (0).
- [x] Em-dash count = **0** (≤2).
- [x] Panjang paragraf bervariasi (kalimat tunggal "Itulah premis…" bercampur paragraf 3–4 kalimat).
- [x] Tidak setiap H2 → daftar 3-bullet (H2 memimpin dengan prosa; 1 tabel, bukan bullet-dump).
- [x] Tanpa klaim generik tanpa angka.
- [x] Tanpa adjektiva hype bertumpuk.
- [x] Tanpa service-dump paragraph.

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Biaya penggantian 40%/80%/200% gaji per peran (Gallup, 2024) | dossier Claim 1 ✓ | pass |
| 42% kepergian sukarela bisa dicegah | dossier Claim 3 ✓ | pass |
| Engagement global 20% pada 2025 (bukan 21%) | dossier Claim 5 ✓ (koreksi ditegakkan) | pass |
| 94% bertahan lebih lama dgn investasi pembelajaran (LinkedIn 2019) | dossier Claim 6 ✓ (tahun disebut) | pass |
| SAP People Intelligence + Joule, GA Nov 2025 | dossier Claim 7 ✓; product_matrix framing universal | pass |
| Retention rate 85% ≈ turnover 15% ("kurang lebih setara") | dossier Claim 10 ✓ (bukan identitas) | pass |
| Soltius: sejak 1998, Metrodata Group, mengimplementasikan | company_profile / Claim 11 ✓; tidak "membangun" SAP | pass |

### C. On-page SEO checklist (batch override)
- [x] Meta title **59** char, keyword di posisi 0.
- [x] Meta description **157** char (band 140–160).
- [x] Slug `employee-retention-strategi-mempertahankan-karyawan` — **51** char, kebab-case, keyword.
- [x] H1 memuat keyword (working title dipertahankan per brief; 63 char).
- [x] H2 count = **4** (question-format: #1, #3 ✓; praktis/tabel: #2 ✓; lensa pembeda + honest hedging: #4 ✓).
- [x] Keyword di 100 kata pertama (lead).
- [x] Definition snippet 40–60 kata (**49**) tepat di bawah lead.
- [x] LSI ≥8 (retention rate, engagement, people analytics, HCM, onboarding, stay interview, turnover, well-being, career talk…).
- [x] Internal link **tepat 2** (1 hub + 1 cousin) — override batch.
- [x] Sitasi eksternal otoritatif = 2 (Gallup, LinkedIn).
- [x] FAQ **3** Q&A — override batch.
- [~] Image placeholder: **N/A by design** (0 — override batch §3).
- [x] ≥1 elemen terstruktur: 1 tabel strategi→indikator (tabel diutamakan; tidak dipaksa list kedua).
- [x] Word band **800–1000** → **944** — override batch.
- [x] Angka inline ≥4: 40/80/200%, 20%, 94%, 80–90%, 82–87%, 90%, 200/170/85/15%, 42%, 45%, 90 hari (jauh > 4).

### C2. GEO extractability (§2a)
- [x] Jawaban langsung 40–60 kata setelah tiap H2 — #1: 52, #2: 46, #3: 46, #4: 47 kata; masing-masing poin BARU (biaya per peran / daftar 5 strategi / benchmark+rumus / cara kerja deteksi dini), bukan pengulangan snippet.
- [x] Tiap paragraf = satu poin quotable & verifiable.
- [x] FAQ parseable untuk FAQPage schema; `date_modified: 2026-07-06` ditambahkan di meta block.

### D. Soltius framing discipline
- [x] Soltius = implementer/partner, BUKAN "membangun SAP".
- [x] Self-mention = **2** (positioning line Kesimpulan + soft CTA soltius.co.id).
- [x] Tanpa superlatif ("terbaik/nomor satu").
- [x] Nama produk SAP (SAP SuccessFactors, SAP People Intelligence, Joule) sesuai dossier.
- [x] Closing memakai positioning line company_profile (sejak 1998, Metrodata Group).
- [x] Soft website CTA = baris TERAKHIR, konsultatif.
- [x] Hub link = anchor inline natural di lead, bukan callout "BACA JUGA".

### E. Anti-cannibalization spot check
- Closest prior: `turnover-karyawan-c01` (2026-06). Jaccard ≈ 0.17 (< 0.4).
- Boundary dihormati: turnover hanya sebagai sisi kebalikan retensi (1 baris di snippet + FAQ perbedaan yang memang diizinkan brief); TANPA rumus/jenis/penyebab/benchmark turnover.
- Verdict: **angle distinct confirmed.**

### F. Image-brief completeness (images.json)
- **N/A by design** — batch conditional-2026-07 melewati stage image-planner; 0 `{IMAGE_NN}`; tidak ada `images.json`. Tidak di-flag sebagai isu (addendum §7).

## Shipping question
Jika tayang di soltius.co.id besok dan dibaca konsultan SAP senior + CIO skeptis: angka bersumber, hedging jujur (benchmark = "praktik industri, bukan standar resmi"; retensi 100% bukan target; teknologi bukan pengganti manajer), tabel strategi→indikator ekstraktabel, dan framing Soltius yang tidak overselling. **Ya — layak ship. Recommendation: approve.**
