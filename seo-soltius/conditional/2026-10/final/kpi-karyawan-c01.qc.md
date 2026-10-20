---
brief_id: "kpi-karyawan-c01"
editor_run_date: "2026-10-08"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-10"
word_count: 1161
target_word_count: 1100
---

# Editor QC Report — KPI Karyawan: Pengertian, Contoh, dan Cara Menyusunnya

## Recommendation
**approve**

Draft masuk ke meja editor nyaris bersih dan patuh penuh pada BATCH OVERRIDE 2026-10 (`style_addendum.md`). Body 1.161 kata (cleaned-prose via `tools/count_words.py`) berada di band 1000–1200 dan dekat target 1100; 0 image placeholder; 0 em-dash di body; definisi KPI muncul sekali saja (snippet "Ringkasnya:"), tidak diulang di H2/jawaban langsung/FAQ; internal link tepat 2 (hub `success-factors` + cousin `talent-acquisition`); sitasi eksternal 2 inline (SAP + The KPI Institute) dengan atribusi, plus atribusi tekstual George T. Doran / *Management Review* 1981 untuk SMART; Soltius diposisikan sebagai implementator/pendamping (bukan pembuat) dengan 2 self-mention. Semua caveat dossier dipatuhi: benchmark conversion ~2–5% & turnover < 10% diberi label "estimasi lintas industri / bukan patokan resmi" dan ditegaskan ilustratif di paragraf sesudah tabel; tidak ada peta modul SuccessFactors lain; turnover hanya 1 sel tabel (tak dibedah rumus); penamaan modul dikaitkan sebagai kapabilitas ("Menurut SAP"), bukan janji hasil; fitur GenAI/Joule dihilangkan sepenuhnya (keputusan #3). Saya menerapkan dua perbaikan ringan (EYD baku + band GEO) dan membersihkan 2 em-dash pada field metadata `external_citations` di frontmatter, tanpa mengubah angle/struktur. Tidak ada isu yang memerlukan rework writer/strategist. Artikel shippable; validator berikutnya tinggal menjalankan quality-check heuristik. Tiga pertanyaan user (cousin link, benchmark angka, GenAI/Joule) diputuskan non-interaktif dengan default terdokumentasi dan diteruskan sebagai open flag untuk konfirmasi via orchestrator.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Burstiness CV **0,369** (≥0,30; panjang paragraf 7–72 kata, termasuk 1 kalimat pukulan "Sistem tidak otomatis membuat KPI menjadi benar."); 0 em-dash body; tanpa klise pembuka; 0 "Selain itu"/"Dengan demikian"; tanpa adjektiva hype |
| Factual & SAP-spec accuracy | 9 | Benchmark berlabel estimasi; modul Performance & Goals dikutip sebagai kapabilitas (Menurut SAP); SMART diatribusikan Doran 1981; implements-not-builds; GenAI/Joule dihapus; target tabel = ilustrasi |
| On-page SEO compliance | 9 | meta_title 51 char (keyword posisi 0–12), desc 151 char, slug 44 char keyword-led; keyword "kpi karyawan" di H1, 100 kata pertama, Kesimpulan, dan CTA |
| GEO extractability (§2a) | 9 | Jawaban langsung setelah tiap H2: 45/42/43/40 kata (semua 40–60); snippet 41 kata; tabel 6 baris ekstraktabel + daftar 6 langkah; FAQ 4 parseable; 1 poin quotable/paragraf |
| Soltius framing discipline | 10 | Implementator/pendamping SAP; 2 self-mention (positioning line Kesimpulan + soft CTA); tanpa superlatif; positioning line company_profile |
| Internal linking | 10 | Tepat 2 (cousin `talent acquisition` inline di H2-1 + hub `SAP SuccessFactors Performance & Goals` di H2-4), inline natural, tanpa "BACA JUGA" |
| FAQ quality | 9 | 4 Q&A (KPI vs OKR, jumlah ideal, SMART, leading vs lagging), jawaban 38–43 kata, tiap memuat fakta/angka; tidak mengulang definisi snippet |

## What I fixed (changelog)
- **EYD baku (H2-3 penutup)** — "...adalah **beda** KPI dan OKR:" → "...adalah **perbedaan** KPI dan OKR:" ("beda" sebagai nomina bersifat informal; "perbedaan" adalah bentuk baku sesuai register B2B `style_guide` §3). Tidak mengubah jumlah kata.
- **GEO band (H2-4 jawaban langsung)** — "...dalam satu sistem yang terhubung ke data kinerja." → "...dalam satu sistem yang terhubung **langsung** ke data kinerja." Jawaban langsung H2-4 semula 39 kata (1 kata di bawah band GEO 40–60); kini 40 kata, in-band, tanpa mengubah makna.
- **Frontmatter metadata — em-dash** — 2 em-dash (—) pada field `external_citations: context` ("SAP —", "The KPI Institute —") diganti koma. Em-dash ini berada di metadata (tak dipublikasikan sebagai body), jadi tidak melanggar batas body ≤2; dibersihkan agar hitungan em-dash file = 0 dan konsisten dengan sibling batch.
- **Frontmatter** — `word_count` disetel ke **1161** (cleaned-prose aktual setelah dua edit; draft 1160).

## What I flagged (open issues)
- ⚠️ **Tiga pertanyaan user (user eksplisit minta ditanyai — diteruskan ke orchestrator/user):** diputuskan non-interaktif dengan default terdokumentasi. (1) **Cousin link** = blog `talent-acquisition` (sibling HR, LIVE); URL blog HCM tracker row 4 tidak dipakai karena 404 ke bot. (2) **Benchmark angka** (conversion ~2–5%, turnover < 10%) **dipertahankan** di tabel dengan label eksplisit "estimasi lintas industri / bukan patokan resmi" + penegasan ilustratif di paragraf setelah tabel. (3) **Fitur GenAI/Joule dihilangkan sepenuhnya** (forward-looking; lebih aman tidak disebut di artikel ~1.100 kata). Konfirmasi final ketiganya berada di ranah interaktif orchestrator, bukan sub-agent editor.
- ⚠️ **Koordinasi urutan publikasi antar-sibling HR Oktober:** batch bertumpuk — row 3 Employee Central, row 4 HCM, dan KPI karyawan (artikel ini). Internal-linking antar-sibling paling rapi bila EC & HCM tayang lebih dulu. Keputusan urutan bersifat interaktif → ranah orchestrator.
- ⚠️ **Hub `/solutions-by-products/reading/success-factors` berbahasa Inggris** (live 2026-10-08); anchor sengaja tetap Bahasa Indonesia ("SAP SuccessFactors Performance & Goals") sesuai preseden pipeline (`successfactors-vs-hris-c01`, `manpower-planning-c01`). Writer/CMS cek ulang resolve saat publish.
- ⚠️ **sap.com 403 ke bot** tetapi live untuk pengguna; dikutip sebagai kapabilitas "Menurut SAP" (preseden pipeline: `talent-acquisition-c01` juga menautkan sap.com inline). Bukan klaim "diakses" via cache.
- ⚠️ **Freshness/`dateModified`**: ditandai lewat `publish_month: 2026-10`. Saat publish, CMS sebaiknya menyetel `dateModified = 2026-10`.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers (lead buka pada pain konkret: penilaian subjektif tanpa ukuran disepakati)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — **0 kemunculan**
- [x] No "Penting untuk dicatat/dipahami" — 0
- [x] "Dengan demikian" not overused — **0**
- [x] Em-dash count ≤2 — **actual body: 0** (frontmatter metadata juga dibersihkan ke 0)
- [x] Varied paragraph lengths — burstiness CV **0,369** (≥0,30); 7–72 kata
- [x] Not every H2 → 3-bullet list (H2-1 prosa; H2-2 prosa + tabel 6 baris; H2-3 prosa + daftar 6 langkah; H2-4 prosa)
- [x] No generic claims without numbers (≥5 angka inline — lihat C2)
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan — 0)
- [x] No service-dump paragraph (1 positioning line saja di Kesimpulan)

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| SMART = 5 kriteria (Specific, Measurable, Achievable, Relevant, Time-bound), diperkenalkan George T. Doran, *Management Review* 1981 | dossier ✓ (Doran 1981, kerangka mapan); atribusi tekstual di H2-3 & FAQ-3 | pass |
| Modul Performance & Goals: Goal Management, continuous performance management (CPM), Calibration | dossier ✓ (SAP Learning/Help + hub Soltius) + sitasi "Menurut SAP"; dikutip sebagai kapabilitas, bukan janji hasil; **tanpa peta modul lain** | pass |
| Benchmark conversion ~2–5% & turnover < 10% | dossier ✓ sebagai **estimasi HR-SaaS**; ditulis berlabel "estimasi lintas industri / bukan patokan resmi" + ditegaskan ilustratif di paragraf setelah tabel | pass (hedged) |
| "3–5 KPI per karyawan" & "bobot total 100%" | dossier ✓ sebagai **praktik umum** HR (framing "umumnya"), bukan aturan resmi SAP | pass |
| Turnover sebagai KPI HR | dossier ✓; muncul **hanya 1 sel** tabel, rumus tidak dibedah (milik `turnover-karyawan-c01`) | pass |
| Soltius "SAP Platinum via United VARs, Metrodata Group sejak 1998, mengimplementasikan/mendampingi" | company_profile + product_matrix ✓; framing implements-not-builds | pass |

### C. On-page SEO checklist (seo_playbook.md §3, band addendum 2026-10)
- [x] Meta title ≤60 (keyword first 30) — **actual: 51 / keyword "KPI Karyawan" di posisi 0–12**
- [x] Meta description 140–160 — **actual: 151**
- [x] Slug kebab-case, keyword-led — **actual: kpi-karyawan-pengertian-contoh-cara-menyusun (44)**
- [x] H1 contains keyword ("KPI Karyawan: Pengertian, Contoh, dan Cara Menyusunnya")
- [x] H2 count 3–5 (addendum) — **actual: 4 konten + FAQ + Kesimpulan**
- [x] ≥1 question-format H2 (H2-1 & H2-4); ≥1 praktis/terstruktur (H2-2 tabel; H2-3 daftar 6 langkah)
- [x] Keyword in first 100 words (kalimat lead) & last paragraph (Kesimpulan + CTA "KPI karyawan")
- [x] Definition snippet near top (**41 kata**, blockquote "Ringkasnya:"; akronim KPI di-expand di sini saja)
- [x] LSI terms present (indikator kinerja, kuantitatif/kualitatif, leading/lagging, metode SMART, performance management, Human Capital Management, OKR, cascade, bobot/target, Goal Management, Calibration, CPM, SAP SuccessFactors)
- [x] Internal links **2** (addendum: 1 hub + 1 cousin)
- [x] External authoritative citations **2** (SAP + The KPI Institute) — band 1–2
- [x] FAQ 3–5 (addendum) — **actual: 4**
- [x] ≥1 list + ≥1 table (tabel 6 divisi + daftar 6 langkah bernomor)
- [x] Word count 1000–1200 (addendum) — **actual: 1161** (cleaned-prose)
- [x] Image placeholders 0 (addendum) — **actual: 0**

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata setelah tiap H2 utama — H2-1 **45**; H2-2 **42**; H2-3 **43**; H2-4 **40** (poin baru, bukan ulangan snippet); snippet 41 kata
- [x] Tiap paragraf body = satu poin quotable & verifiable
- [x] FAQ parseable untuk FAQPage schema; freshness via `publish_month: 2026-10` (CMS set `dateModified`)
- [x] Tabel contoh KPI per divisi ekstraktabel baris-per-baris; daftar 6 langkah menyasar Featured Snippet
- [x] ≥5 angka spesifik inline: 3–5 KPI, 4 kombinasi jenis (2×2), 5 kriteria SMART, 6 langkah, bobot total 100%, periode bulanan/kuartalan, ~2–5%, < 10%, 1981

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius = implementer/partner, BUKAN "builds/makes SAP" ("mengimplementasikan serta mendampingi")
- [x] ≤2 self-mention (addendum) — **actual: 2** (positioning line Kesimpulan + soft CTA soltius.co.id). Sebutan SAP SuccessFactors di H2-4 = teaching vendor-neutral, bukan self-mention
- [x] No superlatives ("terbaik/nomor satu") — 0
- [x] SAP/partner names + specs match dossier/product_matrix (SAP SuccessFactors Performance & Goals nama lengkap di sebutan pertama; HCM & CPM di-expand sekali)
- [x] Closing pakai positioning line (SAP Platinum via United VARs, Metrodata Group sejak 1998)
- [x] Soft website CTA = baris terakhir, konsultatif (bukan "beli sekarang"); keyword "KPI karyawan" + anchor funnel
- [x] Hub link = anchor inline natural di H2-4 (bukan "BACA JUGA")

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** (nol artikel "kpi karyawan" di `articles_history/index.json`; cluster HR conditional belum di-commit)
- Subtopic overlap (Jaccard estimate): **≈0,14** vs `human-capital-management-c01` (row 4) & **≈0,13** vs `sap-successfactors-modul-c01` (2026-06); < 0,4; angle_hash `sha1:3eaf6d2bd2d7` tidak berbenturan
- Verdict: **distinct angle confirmed** — artikel ini fokus pengukuran kinerja individual (metrik, contoh per divisi, cara menyusun SMART + bobot, funnel SF Performance & Goals). Batas anti-kanibal dipatuhi: tanpa definisi payung HCM (row 4), tanpa peta modul SuccessFactors (Juni), turnover hanya 1 sel (bukan `turnover-karyawan-c01`), tanpa bedah data karyawan/struktur organisasi (`employee-central-c01` row 3). JANGAN dilaporkan duplicate.

## The shipping question
Jika artikel ini tayang di soltius.co.id besok dan dibaca konsultan SAP senior + CIO skeptis: definisi KPI diberikan sekali dengan bersih, contoh dikelompokkan per divisi dalam satu tabel ekstraktabel, cara menyusun dirangkai jadi 6 langkah berbobot dengan SMART (beratribusi Doran 1981), angka benchmark dijujurkan sebagai estimasi, tiga jebakan KPI diakui terbuka, dan Soltius ditaruh di tempat yang benar (implementator, satu positioning line + soft CTA). **Ya — WEBARQ Promote bisa bangga.** → approve.
