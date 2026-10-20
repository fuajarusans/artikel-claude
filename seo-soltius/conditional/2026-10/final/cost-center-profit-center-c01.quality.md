---
brief_id: "cost-center-profit-center-c01"
validator_run_date: "2026-10-08"
batch: "conditional-2026-10"
verdict: "pass"
ai_score: 0.08
plagiarism_score: 0.00
revision_loop: 0
plagiarism_lookup_mode: "degraded — WebSearch budget batch habis; penilaian manual"
---

# Quality Validator Report — Cost Center dan Profit Center: Perbedaan dan Fungsinya

## Verdict: **pass**

Artikel lolos kedua gate QC dan memenuhi seluruh override batch 2026-10. AI-detector heuristik (`quality-check.ps1`) memberi skor **0,08** — jauh di bawah ambang revise 0,30 dan reject 0,50. Paragraph burstiness **CV = 0,383** berada **di atas** lantai guardrail 0,30, sehingga **tidak ada pemicu revise statistik dan tidak ada perbaikan burstiness yang dilakukan** (artikel tidak disentuh; aturan "pecah/variasikan paragraf" hanya aktif bila CV < 0,30). Editor merekomendasikan `approve` (skor 9) dengan fact-check bersih (lima flag dossier di-hedge tepat, aritmetika alokasi diverifikasi, positioning Soltius dikoreksi), dan validator mengonfirmasi `pass`.

**Catatan degraded mode (transparansi):** 8 passage distinctive diekstrak untuk lookup plagiarisme, NAMUN quoted WebSearch **tidak dapat dijalankan** — budget WebSearch per-turn (limit 200, dibagi seluruh agent batch dalam turn ini) sudah habis dikonsumsi validator sibling yang jalan lebih dulu. Lima upaya pencarian dikembalikan "web search budget is used up". Sesuai arahan tool, saya tidak mem-bypass limit (tanpa curl/wget/proxy/archive). Penilaian plagiarisme karena itu dilakukan **manual** terhadap kedelapan passage: seluruhnya tergolong (a) komposisi prosa orisinal penulis atau (b) taksonomi/definisi akuntansi baku yang inheren high-overlap dan **dikecualikan dari skoring** sesuai failure-mode agent. Tidak ada yang berupa lift tata-kalimat dari satu sumber. Risiko residual **rendah** namun **belum dikonfirmasi web verbatim** — lihat bagian Plagiarism. Secara gate commit artikel memenuhi editor `approve` + validator `pass`, NAMUN sesuai instruksi task, curator/commit **TIDAK** dijalankan pada run ini.

## AI Detector (heuristik v2.0)
- Score: **0,08** / 1.0 (ambang: revise ≥0,30, reject ≥0,50) → **pass**
- Paragraph burstiness (CV): **0,383** (guardrail gate ≥0,30 → **lolos**, margin ~0,083; ideal ≥0,45)
- Sentence burstiness: **0,742** (ritme kalimat bervariasi, manusiawi)
- Top-30 vocab share: **0,42** (di atas target 0,30)
- external_api_used: false (heuristik murni; tidak ada `AI_DETECTOR_API_KEY`)
- Flags (2, keduanya low — bukan blocker):
  - [low] `paragraph-low-variance`: "Paragraph word-count CV=0.383 (target >=0.45)" — gate 0,30 terlampaui. Wajar untuk explainer B2B padat dengan band ketat 1000–1200 (satu tabel komparasi 5-baris + satu bulleted list 4-item + contoh berangka). Memaksa naik ke 0,45 menuntut padding/pemotongan yang melanggar aturan on-point addendum §1. **Dibiarkan.** Sentence burstiness 0,742 + rentang paragraf (lead 90 kata vs paragraf penutup CTA 1 kalimat) mengonfirmasi ritme tetap manusiawi.
  - [low] `vocab-repetition`: "Top 30 words = 42% of body (target <30%)" — inheren pada explainer satu-topik: "cost center", "profit center", "biaya", "laba", "pendapatan", "unit", "manajer" adalah entity inti yang WAJIB konsisten untuk kejelasan entity/SEO & keterkutipan AI-Overview. Menggantinya dengan sinonim justru menurunkan GEO extractability. Bukan AI-tell. **Dibiarkan.**

> Catatan metrik: skrip menghitung word_count raw **1159** & CV 0,383 (split memperlakukan baris tabel/list sebagai unit berbeda). Editor melaporkan word_count bersih **1122** (`tools/count_words.py`) & CV 0,392. Keduanya konsisten, di dalam band 1000–1200 dan di atas guardrail 0,30; tidak ada konflik verdict.

## Plagiarism (web lookup passage distinctive) — DEGRADED MODE
**Status lookup: TIDAK DAPAT DIJALANKAN.** Budget WebSearch batch (200/turn, dibagi semua agent) habis; lima query quoted dikembalikan "web search budget is used up". Penilaian berikut **manual** (bukan konfirmasi web verbatim), berdasarkan sifat masing-masing passage dan analogi dengan sibling `buku-besar-c01` (topik serumpun responsibility accounting / SAP CO) yang lookup webnya menghasilkan 0/7 match verbatim.

8 passage dari `quality-input.json`, klasifikasi manual:

- ⚠️→✅ (orisinal) "## Cost Center dan Profit Center dalam Akuntansi Pertanggungjawaban / Keduanya tidak berdiri sendiri." — gabungan heading + kalimat pembuka; frasa penghubung generik, framing orisinal. Risiko lift: sangat rendah.
- ⚠️→✅ (orisinal) "Karena mengelola pendapatan dan biaya sekaligus, labanya dinilai terhadap target laba, bukan terhadap anggaran biaya." — kalimat penjelas FAQ #2; konsep managerial-accounting baku, tata-kalimat orisinal (kontras "bukan terhadap anggaran biaya" khas penulis). Risiko rendah.
- ⚠️→✅ (orisinal) "Cost center mengumpulkan biaya overhead per unit, sedangkan profit center menghitung laba per segmen." — deskripsi objek SAP CO, prosa orisinal. Risiko rendah.
- ⚠️→✅ (orisinal, repeat internal) "Kuncinya prinsip controllability: klasifikasikan unit sesuai apa yang benar-benar bisa dikendalikan manajernya." — aforisme penulis; muncul 2× (FAQ #4 + aside harga transfer, lihat passage ke-7). Repeat INTERNAL penulis, bukan jiplakan eksternal. Risiko eksternal rendah; catatan: repeat ini juga penyumbang vocab-repetition 0,42.
- ✅ (dikecualikan — taksonomi baku) "Keduanya termasuk empat jenis pusat pertanggungjawaban, bersama cost center dan revenue center." — enumerasi 4 jenis responsibility center = kerangka well-known, inheren high-overlap → dikecualikan dari skoring sesuai failure-mode agent.
- ✅ (dikecualikan — definisi baku) "- **Profit center (pusat laba):** mengendalikan pendapatan dan biaya sekaligus, dinilai atas laba." — definisi standar, dikecualikan.
- ⚠️→✅ (orisinal, repeat internal) "Aturan praktisnya tetap sama, klasifikasikan unit sesuai apa yang benar-benar bisa dikendalikan manajernya." — ekor repeat passage ke-4, prosa penulis.
- ✅ (dikecualikan — definisi baku) "- **Revenue center (pusat pendapatan):** fokus menghasilkan penjualan, dengan sedikit kendali atas biaya produksi." — definisi standar, dikecualikan.

- **Aggregate plagiarism score: 0,00** (nol match verbatim terkonfirmasi — namun lookup web TIDAK dijalankan; skor mencerminkan 0 hit yang dapat diskor, BUKAN konfirmasi web). Tidak ada hit yang perlu dikecualikan sebagai sitasi soltius.co.id/metrodata/SAP-official.
- **Risiko residual:** rendah namun belum terkonfirmasi web. Frasa inti orisinal (kerangka 4 pusat pertanggungjawaban + prinsip controllability + alur alokasi berangka + aside harga transfer internal); passage over-overlap hanya definisi/taksonomi akuntansi baku. Bila user ingin kepastian penuh, jalankan ulang quoted WebSearch 8 passage saat budget tersedia (follow-up turn).

## Fact spot-check (angka tak dikarang + hedging) — konfirmasi lapis validator
- **Cost center = biaya (minimize costs); profit center = pendapatan+biaya (maximize profits)** — disitasi inline AccountingTools H2 #1, beratribusi. ✓
- **Cost & profit center = 2 dari 4 pusat pertanggungjawaban; prinsip controllability** — konsep baku, konsisten. ✓
- **Contoh alokasi IT Rp600 jt → 50/30/20% = Rp300/180/120 jt** — berlabel "contoh ilustrasi, bukan data perusahaan nyata"; aritmetika diverifikasi (50+30+20=100; 300+180+120=600). ✓
- **Controlling area A000 + satu tabel jurnal universal (FI+CO), activity type** — dari SAP Learning (SAP resmi); **di-hedge** eksplisit: "mengacu pada materi berbasis rilis S/4HANA 2023 untuk edisi public cloud; edisi private dan on-premise bisa berbeda, jadi rujuk dokumentasi SAP Learning/SAP Help". Tanpa T-code (KS01) / literal ACDOCA / istilah "allocation cycle". ✓
- **Soltius** = SAP Platinum Partner via United VARs, **berpengalaman sejak 1998 dan bagian dari Metrodata Group** (dikoreksi editor dari "Metrodata sejak 1998"), "mengimplementasikan dan mendampingi… dari implementasi hingga dukungan pasca go-live" (bukan "membuat SAP") — selaras company_profile. ✓
- **"Laba vs target" sebagai dasar penilaian profit center** — konvensi managerial accounting baku; di body dinyatakan sebagai praktik umum, TIDAK diatribusikan sebagai kutipan verbatim AccountingTools (penanganan benar). ✓

## Re-verifikasi gate batch 2026-10
| Gate | Target batch | Hasil | Status |
|---|---|---|---|
| Word band body | 1000–1200 | 1.122 (frontmatter `count_words.py`) · 1.159 (skrip raw) | ✅ |
| FAQ | 3–5 Q&A | 4 (apa itu cost center / contoh profit center / profit vs investment center / satu dept bisa dua peran) | ✅ |
| Internal link | 2 (1 hub + 1 cousin) | 2: hub "SAP FICO" `/id/blog/sistem-sap-fico-dan-modulnya...` (H2 #4) + cousin fallback "siklus akuntansi" `/id/blog/apa-itu-siklus-akuntansi-dan-manfaatnya` (H2 #2), inline. Baris "kunjungi soltius.co.id" = soft website CTA (homepage), bukan internal link ke-3 | ✅ |
| Image placeholder `{IMAGE_NN}` | 0 (by design) | 0 (grep nol) | ✅ (tidak di-flag) |
| Definisi | sekali (snippet) | sekali di blockquote "Ringkasnya:" (≈44 kata). H2 #1 "Apa Perbedaan…" memberi KONTRAS/dimensi beda, bukan menyatakan ulang; FAQ #1 "Apa itu cost center?" memakai sudut tolok-ukur + contoh (bukan restatement snippet) | ✅ |
| Framing Soltius | ≤2 self-mention, konsultatif | 2 (positioning line Kesimpulan + soft CTA soltius.co.id baris terakhir); SAP FICO/CO di H2 #4 = teaching, bukan self-mention; tanpa aside di tengah body; tanpa superlatif | ✅ |
| Sitasi eksternal otoritatif | 1–2 | 2 (AccountingTools H2 #1 + SAP Learning H2 #4), inline & beratribusi | ✅ |
| Em-dash (U+2014) | ≤2 | 0 (seluruh file) | ✅ |
| Angka tak dikarang | wajib | Alokasi IT berlabel ilustrasi + aritmetika diverifikasi; A000/jurnal universal di-hedge ke rilis/edisi; "1998" sesuai company_profile; nol angka tanpa sumber | ✅ |
| IFRS di-hedge | bila ada | N/A — artikel tidak menyinggung IFRS/IAS/PSAK (grep nol) | ✅ N/A |
| Tabel HTML valid (bila ada) | — | Tidak ada tabel HTML; 1 tabel Markdown (5 dimensi perbedaan, 3 kolom) valid — header, separator `|---|---|---|`, dan 5 baris data semuanya 3 kolom konsisten | ✅ N/A (markdown valid) |

## Loop status
Revision loop **0** (first pass). Tidak ada revise yang dipicu (AI 0,08 pass; CV 0,383 di atas guardrail). Tidak ada loop writer. Tidak ada escalation. Artikel tidak disentuh validator.

## The shipping question
Would an HCU/SpamBrain review flag this as scaled-AI content? **No** (AI 0,08; CV paragraf 0,383 di atas gate; sentence burstiness 0,742). Would Originality.ai give it >30% AI? **Unlikely** berdasarkan heuristik. Would a 20-word phrase turn up verbatim elsewhere? **Belum terkonfirmasi web** (lookup degraded) — penilaian manual: tidak, passage orisinal atau definisi/taksonomi akuntansi baku. → **pass** (dengan caveat degraded-mode plagiarisme terdokumentasi).

## Rekomendasi ke orchestrator
**curator-ready (memenuhi gate commit: editor `approve` + validator `pass`) — TETAPI JANGAN commit dulu.** Sesuai instruksi task, curator/commit **TIDAK** dijalankan pada run ini.

⚠️ **Catatan untuk user/orchestrator:**
1. **Plagiarisme lookup degraded** — budget WebSearch batch habis; verifikasi web 8 passage BELUM dijalankan. Verdict pass bertumpu pada AI-detector bersih + penilaian manual passage + fact-check editor. **Bila diinginkan kepastian penuh, kirim follow-up turn untuk menjalankan ulang quoted WebSearch** (atau naikkan `CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION`). Non-blocker menurut heuristik, tetapi residu risiko belum nol-terkonfirmasi.
2. **Tiga keputusan user terbuka (diteruskan dari editor, BUKAN diputuskan validator):** (a) hub FICO blog vs halaman solusi Controlling resmi (kolom landing Sheet Oktober kosong untuk topik ini); (b) cousin `buku-besar-general-ledger` masih HTTP 404 → fallback "siklus akuntansi" dipakai, tukar bila halaman live saat publish; (c) finalisasi meta block (meta_title 49 char, meta_description 158 char, slug 46 char — semua lolos gate). Ketiganya non-blocker.
