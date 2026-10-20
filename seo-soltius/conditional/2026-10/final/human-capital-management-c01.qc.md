---
brief_id: "human-capital-management-c01"
editor_run_date: "2026-10-08"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-10"
mode: "REWRITE (preserve URL)"
word_count: 1046
target_word_count: 1100
---

# Editor QC Report — Apa Itu Human Capital Management (HCM)? Panduan Lengkap

## Recommendation
**approve**

Draft masuk ke meja editor nyaris bersih: struktur, fakta, dan disiplin framing sudah sesuai brief + dossier + style_addendum 2026-10. Body 1.046 kata (cleaned-prose via `tools/count_words.py`) berada di band 1000–1200 (target 1100); definisi muncul sekali di snippet; internal link tepat 2 (hub + cousin); sitasi SAP News Center akurat dengan atribusi + tanggal; Soltius diposisikan sebagai implementator/pendamping (bukan pembuat) dengan 2 self-mention. Saya menerapkan tiga perbaikan anti-AI ringan (menghapus dua lead-in klise dan satu pembuka paragraf yang terduplikasi) tanpa mengubah angle/struktur. Tidak ada isu yang memerlukan rework writer/strategist. Artikel shippable; validator berikutnya tinggal menjalankan quality-check heuristik. Empat pertanyaan user (user eksplisit minta ditanyai) diteruskan sebagai open flags — draft ditulis memakai default terverifikasi dan dapat direvisi setelah jawaban.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Burstiness CV 0,33 (≥0,30); 0 em-dash; tanpa klise pembuka; 2 lead-in formulaic dihapus |
| Factual & SAP-spec accuracy | 9 | Gartner MQ 10×/16 Sep 2025/10.000+ cocok dossier; Schultz 1961 & Becker 1964 (Nobel sengaja tidak disebut); implements-not-builds |
| On-page SEO compliance | 9 | meta_title 54 char (keyword depan), desc 156 char, slug lama dipertahankan, keyword di H1/100 kata pertama/paragraf akhir |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata setelah tiap H2; snippet 46 kata; FAQ 5 parseable; 1 poin quotable/paragraf |
| Soltius framing discipline | 10 | Implementator/pendamping SAP; 2 self-mention; tanpa superlatif; positioning line company_profile di Kesimpulan |
| Internal linking | 10 | Tepat 2 (hub HCM + cousin SAP SuccessFactors), inline natural, tanpa "BACA JUGA" |
| FAQ quality | 9 | 5 Q&A, jawaban 38–46 kata, tiap memuat fakta/angka |

## What I fixed (changelog)
- **Anti-AI lead-in #1** — H2-3: "Perlu dicatat, angka '1.000+ karyawan'…" → "Angka '1.000+ karyawan'…" (state the fact directly; style_guide §5 "Penting untuk dicatat" family + lebih extractable untuk GEO).
- **Anti-AI lead-in #2** — H2-3: "Yang perlu digarisbawahi, HCMS adalah pemampu…" → "HCMS adalah pemampu…" (menghapus lead-in formulaic di paragraf berurutan; kalimat kini berdiri sebagai klaim quotable).
- **Pembuka paragraf terduplikasi** — H2-2 penutup: "Di banyak perusahaan, ketujuh fungsi…" → "Pada kebanyakan perusahaan, ketujuh fungsi ini masih tersebar…" (lead sudah membuka dengan "Di banyak perusahaan"; variasi pembuka menghindari tell repetisi).
- **Frontmatter** — `word_count` disetel ke **1046** (cleaned-prose aktual setelah edit; sebelumnya 1050 di draft).

## What I flagged (open issues)
- ⚠️ **Empat pertanyaan untuk user (user eksplisit minta ditanyai — WAJIB diteruskan)** — draft memakai default terverifikasi; dapat direvisi setelah jawaban:
  1. **Konfirmasi 2 internal link**: hub `/solutions-by-products/human-capital-management-system` (anchor "solusi Human Capital Management") + cousin `/solutions-by-products/reading/success-factors` (anchor "SAP SuccessFactors"). Keduanya dinyatakan live 200 OK oleh dossier (2026-10-08). Setuju, atau ada preferensi lain?
  2. **Halaman lama 404-ke-bot**: bisakah user membuka URL lama (`soltius.co.id/id/blog/Apa-yang-Dimaksud-Human-Capital-Management`) di browser dan membagikan judul H2 / poin yang sudah ranking, agar struktur rewrite diselaraskan? Jika tidak, lanjut dengan basis riset ini.
  3. **Teori human capital (Schultz/Becker)** dipakai sebagai grounding E-E-A-T (di H2-1 + FAQ-1). Setuju, atau user ingin body sepenuhnya praktis tanpa rujukan akademik?
  4. **CTA akhir** mendarat ke halaman SAP SuccessFactors (per tracker), bukan ke hub HCM — konfirmasi?
- ⚠️ **Struktur halaman lama tidak terverifikasi** (WebFetch 404-ke-bot; Wayback tidak diakses). 22.223 impresi membuktikan halaman live → ini anti-bot, **bukan duplicate**. Tidak dilaporkan sebagai duplicate (sesuai instruksi rewrite). Non-blocking; terkait pertanyaan user #2.
- ⚠️ **Freshness/`dateModified`**: ditandai lewat `publish_month: 2026-10` di meta block (konsisten dengan sibling `master-data-management-c01` yang sudah di `final/`). Saat publish, CMS sebaiknya menyetel `dateModified = 2026-10` — penting karena ini rewrite yang mengandalkan kesegaran untuk mempertahankan impresi.
- ⚠️ **FAQ-4 & FAQ-5** memuat fakta kualitatif (HCM vs HRIS; kepemilikan lintas manajemen) alih-alih angka numerik — tetap memenuhi aturan addendum "1 fakta/angka" (fakta terverifikasi, bukan klaim kosong). Dibiarkan; memaksa angka justru artificial.
- ℹ️ **Employee Central Payroll "50 locale / 800+ regulasi"** sengaja diabaikan (artikel konsep; menghindari melebar ke payroll milik cluster lain) — sesuai rekomendasi dossier Flags.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (0 kemunculan)
- [x] No "Penting untuk dicatat/dipahami" — 2 variannya ("Perlu dicatat", "Yang perlu digarisbawahi") dihapus
- [x] "Dengan demikian" not overused (0)
- [x] Em-dash count ≤2 — **actual: 0**
- [x] Varied paragraph lengths — burstiness CV **0,33** (≥0,30); panjang 16–77 kata
- [x] Not every H2 → 3-bullet list (H2-1 tabel; H2-2 daftar 7 butir; H2-3 prosa)
- [x] No generic claims without numbers
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan — 0)
- [x] No service-dump paragraph (1 positioning line saja di Kesimpulan)

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| SAP Leader ke-10 berturut-turut, *Gartner MQ Cloud HCM Suites for 1,000+ Employee Enterprises*, 16 Sep 2025 | dossier ✓ (SAP News Center, re-fetch 200 OK 2026-10-08) | pass |
| SAP SuccessFactors "lebih dari 10.000 pelanggan di seluruh dunia" | dossier ✓ (kutipan verbatim SAP) | pass |
| "1.000+ karyawan" = cakupan kategori Gartner, bukan syarat minimum | dossier ✓ (catatan framing) | pass |
| Teori human capital: Theodore Schultz (1961) & Gary Becker (1964) | dossier ✓ (AER 1961; NBER 1964); Nobel sengaja tidak disebut → hindari tertukar Schultz 1979/Becker 1992 | pass |
| Soltius "SAP Platinum via United VARs, Metrodata Group sejak 1998, mengimplementasikan/mendampingi" | company_profile + dossier ✓; framing implements-not-builds | pass |

### C. On-page SEO checklist (seo_playbook.md §3, band addendum 2026-10)
- [x] Meta title ≤60 (keyword first 30) — **actual: 54 / keyword di posisi 0**
- [x] Meta description 140–160 — **actual: 156**
- [x] Slug kebab-case, keyword — **actual: Apa-yang-Dimaksud-Human-Capital-Management** (WAJIB = URL lama; dipertahankan untuk menjaga 22.223 impresi)
- [x] H1 contains keyword ("Human Capital Management (HCM)")
- [x] H2 count 3–5 (addendum) — **actual: 3 konten + FAQ + Kesimpulan**
- [x] ≥1 question-format H2 (H2-1 & H2-3); honest hedging menggantikan H2 counter-conventional (addendum §2)
- [x] Keyword in first 100 words (kalimat ke-3 lead)
- [x] Definition snippet near top (**46 kata**, blockquote "Secara singkat")
- [x] LSI terms present (HRM, HRIS, HCMS, people analytics, manajemen talenta, siklus hidup karyawan, modal manusia, KPI/OKR)
- [x] Internal links **2** (addendum: 1 hub + 1 cousin) — hub HCM + SAP SuccessFactors
- [x] ≥1 external authoritative citation — **actual: 1** (SAP News Center)
- [x] FAQ 3–5 (addendum) — **actual: 5**
- [x] ≥1 list + ≥1 table (tabel 5 dimensi + daftar 7 fungsi)
- [x] Word count 1000–1200 (addendum) — **actual: 1046** (cleaned-prose)
- [x] Image placeholders 0 (addendum) — **actual: 0**

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata setelah tiap H2 utama (H2-1 ~55, H2-2 ~50, H2-3 ~50) — bukan ulangan snippet
- [x] Tiap paragraf body = satu poin quotable & verifiable
- [x] FAQ parseable untuk FAQPage schema; freshness via `publish_month: 2026-10` (CMS set `dateModified`)

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius = implementer/partner, BUKAN "builds/makes SAP" ("mengimplementasikan dan mendampingi")
- [x] ≤2 self-mention (addendum) — **actual: 2** (positioning line Kesimpulan + soft CTA soltius.co.id)
- [x] No superlatives ("terbaik/nomor satu") — 0
- [x] SAP/partner names + specs match dossier (SAP SuccessFactors, nama lengkap di sebutan pertama)
- [x] Closing pakai positioning line company_profile (SAP Platinum via United VARs, Metrodata Group sejak 1998)
- [x] Soft website CTA = baris terakhir, konsultatif (bukan "beli sekarang"), funnel ke SAP SuccessFactors
- [x] Hub link = anchor inline natural di lead (bukan "BACA JUGA")

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** (nol artikel HR/HCM di `articles_history/index.json`; ini rewrite halaman Soltius sendiri)
- Subtopic overlap (Jaccard estimate): **≈0,08–0,12** vs sibling terdekat (`sap-successfactors-modul`, `successfactors-vs-hris`, `employee-central`, `kpi-karyawan`) per brief
- Verdict: **distinct angle confirmed** (konsep payung HCM vs modul/alat/metrik spesifik); batas anti-kanibal dipatuhi (tanpa peta modul, tanpa bedah EC, tanpa contoh KPI, tanpa komparasi kelas sistem, tanpa fase implementasi). JANGAN dilaporkan duplicate.

## The shipping question
Jika artikel ini tayang di soltius.co.id besok dan dibaca konsultan SAP senior + CIO skeptis: body netral menjelaskan konsep lebih dulu, menaruh produk di tempat yang benar (satu H2, dengan sitasi + atribusi), jujur bahwa "HCMS bukan pengganti strategi", dan menutup dengan positioning line yang akurat. **Ya — WEBARQ Promote bisa bangga.** → approve.
