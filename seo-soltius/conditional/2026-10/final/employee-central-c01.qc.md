---
brief_id: "employee-central-c01"
editor_run_date: "2026-10-08"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-10"
word_count: 1119
target_word_count: 1100
---

# Editor QC Report — Employee Central SAP SuccessFactors: Fungsi dan Keunggulannya

## Recommendation
**approve**

Draft masuk ke meja editor nyaris bersih dan patuh penuh pada BATCH OVERRIDE 2026-10. Body 1.119 kata (cleaned-prose via `tools/count_words.py`) berada di band 1000–1200 dan dekat target 1100; 0 image placeholder; 0 em-dash; definisi muncul sekali saja di snippet; internal link tepat 2 (hub SAP SuccessFactors + cousin panduan implementasi); sitasi eksternal 2 inline (SAP Learning + SAP News Center) dengan atribusi; Soltius diposisikan sebagai implementator/pendamping (bukan pembuat) dengan 2 self-mention. Ketujuh flag akurasi dossier sudah ditangani di draft (hierarki 4 tingkat dikoreksi, cakupan negara di-hedge, "5 nilai default" diatribusikan ke SAP, 31/12/9999, 50 locale + 800+ legal change bertanggal). Saya menerapkan satu perbaikan anti-AI + EYD (menghapus lead-in non-baku "Satu hal perlu dijujuri:") tanpa mengubah angle/struktur. Tidak ada isu yang memerlukan rework writer/strategist. Artikel shippable; validator berikutnya tinggal menjalankan quality-check heuristik. Catatan koordinasi urutan publikasi (user minta ditanyai) diteruskan sebagai open flag — keputusan interaktifnya berada di ranah orchestrator.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Burstiness CV 0,364 (≥0,30; panjang paragraf 15–72 kata); 0 em-dash; tanpa klise pembuka; 1 lead-in non-baku dihapus |
| Factual & SAP-spec accuracy | 9 | 7 flag dossier ditangani; hierarki 4 tingkat; 5 nilai default (atribusi SAP); 31/12/9999; 50 locale + 800+ legal change (SAP, Des 2023); implements-not-builds |
| On-page SEO compliance | 9 | meta_title 56 char (keyword posisi 0), desc 160 char, slug 35 char keyword-led, keyword di H1/100 kata pertama/paragraf akhir |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata setelah tiap H2 (51/49/46 kata); snippet 55 kata; FAQ 5 parseable; 1 poin quotable/paragraf; tabel 7 baris ekstraktabel |
| Soltius framing discipline | 10 | Implementator/pendamping SAP; 2 self-mention; tanpa superlatif; positioning line company_profile di Kesimpulan |
| Internal linking | 10 | Tepat 2 (hub SAP SuccessFactors di lead + cousin panduan implementasi di H2-2), inline natural, tanpa "BACA JUGA" |
| FAQ quality | 9 | 5 Q&A, jawaban 40–55 kata, tiap memuat fakta/angka |

## What I fixed (changelog)
- **Anti-AI + EYD lead-in** — H2-3 penutup: "Satu hal perlu dijujuri: granularitas struktur organisasi…" → "Granularitas struktur organisasi di Employee Central kerap berbeda…" (kata **"dijujuri"** adalah bentukan non-baku dari "jujur" = pelanggaran EYD; sekaligus lead-in formulaic keluarga "Penting untuk dicatat", style_guide §5. Klaim honest-hedging kini berdiri langsung sebagai poin quotable untuk GEO; sinyal praktisi "di lapangan…" tetap ada di Kesimpulan).
- **Frontmatter** — `word_count` disetel ke **1119** (cleaned-prose aktual setelah edit; draft 1123).

## What I flagged (open issues)
- ⚠️ **Koordinasi urutan publikasi (user eksplisit minta ditanyai — WAJIB diteruskan ke orchestrator/user):** batch HR Oktober bertumpuk — row 3 Employee Central (artikel ini), row 4 HCM, row 9 KPI karyawan. Dossier mencatat urutan ideal: **EC dan HCM dipublikasikan lebih dulu sebelum artikel KPI karyawan** agar internal-linking antar-sibling rapi. Draft EC ini dan sibling `human-capital-management-c01` sudah tersedia di `final/`. Keputusan konfirmasi urutan/prioritas bersifat interaktif → ranah orchestrator, bukan sub-agent penulis/editor.
- ⚠️ **Cakupan negara/mata uang EC (Flag #1 dossier)** sengaja di-hedge ("banyak negara dan wilayah; menurut materi SAP, lebih dari 100; bervariasi antar-sumber/rilis"). Sumber SAP tidak konsisten (training ">100 negara, 166 mata uang"; payroll "158 currencies, 80+ negara"; blog 2017 "84 negara"). Angka EC Payroll (50 locale) dipakai terverifikasi dengan atribusi SAP Des 2023. **Jangan** di-"perbaiki" menjadi satu angka tetap oleh tahap berikutnya.
- ⚠️ **Hub `/solutions-by-products/reading/success-factors` berbahasa Inggris & tidak menyebut Employee Central** (per dossier, live 2026-10-08). Ini justru menguatkan nilai artikel sebagai penjelas EC; anchor tetap Bahasa Indonesia ("SAP SuccessFactors"). Konfirmasi target 2 internal link bila user punya preferensi lain.
- ⚠️ **Freshness/`dateModified`**: ditandai lewat `publish_month: 2026-10` di meta block (konsisten dengan sibling di `final/`). Saat publish, CMS sebaiknya menyetel `dateModified = 2026-10`.
- ℹ️ **"sistem pencatatan wajibnya" (FAQ #3)** memakai frasa "sistem pencatatan" kedua kali, TETAPI dalam konteks berbeda — menyatakan EC Payroll menjadikan EC sebagai *mandatory system of record*-nya (fakta dependensi dari dossier), bukan mengulang definisi snippet. **Bukan** pelanggaran aturan "definisi sekali". Dibiarkan.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers (lead buka pada pain konkret)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (0 kemunculan)
- [x] No "Penting untuk dicatat/dipahami" — 1 varian non-baku ("Satu hal perlu dijujuri") dihapus
- [x] "Dengan demikian" not overused (0)
- [x] Em-dash count ≤2 — **actual: 0**
- [x] Varied paragraph lengths — burstiness CV **0,364** (≥0,30); panjang 15–72 kata
- [x] Not every H2 → 3-bullet list (H2-1 prosa; H2-2 prosa + tabel; hanya H2-3 pakai bullet 4 butir + prosa)
- [x] No generic claims without numbers
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan — 0)
- [x] No service-dump paragraph (1 positioning line saja di Kesimpulan)

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Hierarki organisasi inti = Legal Entity → Business Unit → Division → Department (4 tingkat); Location/Cost Center/Position di luar hierarki | dossier ✓ (SAP Learning "Introducing Foundation Objects"); koreksi Flag #2 diterapkan di narasi + baris tabel | pass |
| Legal Entity menetapkan 5 nilai default (negara, mata uang, pay group, lokasi, jam kerja standar) | dossier ✓ (Flag #3); diatribusikan "Menurut dokumentasi SAP" | pass |
| Effective dating: record lama ditutup H-1, record baru bertanggal akhir 31 Desember 9999 | dossier ✓ (Flag #7 — pakai 31/12/9999, bukan 1/1/9999) | pass |
| EC Payroll native 50 locale + >800 legal change/tahun | dossier ✓ (SAP News Center, 5 Des 2023); istilah "legal change", bukan regulatory (Flag #4) | pass |
| Cakupan negara EC ">100" | dossier ✓ sebagai HEDGE (Flag #1); ditulis sebagai rentang bersumber, bukan angka tetap | pass (hedged) |
| Soltius "SAP Platinum via United VARs, Metrodata Group sejak 1998, mengimplementasikan/mendampingi" | company_profile + product_matrix ✓; framing implements-not-builds | pass |

### C. On-page SEO checklist (seo_playbook.md §3, band addendum 2026-10)
- [x] Meta title ≤60 (keyword first 30) — **actual: 56 / keyword di posisi 0**
- [x] Meta description 140–160 — **actual: 160**
- [x] Slug kebab-case, keyword-led — **actual: employee-central-sap-successfactors (35)**
- [x] H1 contains keyword ("Employee Central SAP SuccessFactors")
- [x] H2 count 3–5 (addendum) — **actual: 3 konten + FAQ + Kesimpulan**
- [x] ≥1 question-format H2 — **ketiga H2 konten question-format**; H2-2 praktis/terstruktur (tabel 7 baris)
- [x] Keyword in first 100 words (kalimat ke-1 lead) & last paragraph (Kesimpulan "penataan Employee Central")
- [x] Definition snippet near top (**55 kata**, blockquote "Secara singkat")
- [x] LSI terms present (core HR, system of record, foundation objects, effective dating, MDF, ESS/MSS, position management, legal entity, struktur organisasi)
- [x] Internal links **2** (addendum: 1 hub + 1 cousin)
- [x] External authoritative citations **2** (SAP Learning + SAP News Center) — band 1–2
- [x] FAQ 3–5 (addendum) — **actual: 5**
- [x] ≥1 list + ≥1 table (tabel 7 foundation object + daftar 4 keunggulan)
- [x] Word count 1000–1200 (addendum) — **actual: 1119** (cleaned-prose)
- [x] Image placeholders 0 (addendum) — **actual: 0**

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata setelah tiap H2 utama (H2-1 51; H2-2 49; H2-3 46) — poin baru, bukan ulangan snippet
- [x] Tiap paragraf body = satu poin quotable & verifiable
- [x] FAQ parseable untuk FAQPage schema; freshness via `publish_month: 2026-10` (CMS set `dateModified`)
- [x] Tabel foundation objects ekstraktabel baris-per-baris untuk AI Overview

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius = implementer/partner, BUKAN "builds/makes SAP" ("mengimplementasikan dan mendampingi")
- [x] ≤2 self-mention (addendum) — **actual: 2** (positioning line Kesimpulan + soft CTA soltius.co.id)
- [x] No superlatives ("terbaik/nomor satu") — 0
- [x] SAP/partner names + specs match dossier/product_matrix (SAP SuccessFactors nama lengkap di sebutan pertama)
- [x] Closing pakai positioning line (SAP Platinum via United VARs, Metrodata Group sejak 1998)
- [x] Soft website CTA = baris terakhir, konsultatif (bukan "beli sekarang")
- [x] Hub link = anchor inline natural di lead (bukan "BACA JUGA")

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** (nol artikel "employee central" di `articles_history/index.json`)
- Subtopic overlap (Jaccard estimate): **≈0,10–0,15** vs sibling terdekat (`human-capital-management-c01`, `sap-successfactors-modul`, `kpi-karyawan`)
- Verdict: **distinct angle confirmed** — artikel ini bedah *apa & bagaimana* EC bekerja (foundation objects, effective dating, position management); cousin menjelaskan *cara mengimplementasikan* (fase SAP Activate — sengaja tidak diulang); HCM sibling membahas konsep payung. Batas anti-kanibal dipatuhi. JANGAN dilaporkan duplicate.

## The shipping question
Jika artikel ini tayang di soltius.co.id besok dan dibaca konsultan SAP senior + CIO skeptis: entity didefinisikan sekali dengan bersih, hierarki organisasi dikoreksi akurat (4 tingkat, bukan 7), angka yang goyah di-hedge dengan jujur, dan Soltius ditaruh di tempat yang benar (implementator, satu positioning line). **Ya — WEBARQ Promote bisa bangga.** → approve.
