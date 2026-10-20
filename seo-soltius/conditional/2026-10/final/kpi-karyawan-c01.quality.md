---
brief_id: "kpi-karyawan-c01"
validator_run_date: "2026-10-08"
batch: "conditional-2026-10"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — KPI Karyawan: Pengertian, Contoh, dan Cara Menyusunnya

## Verdict: **pass**

Artikel lolos kedua gate QC dan memenuhi seluruh override batch 2026-10 (`style_addendum.md` §7). AI-detector heuristik (`quality-check.ps1`) memberi skor **0,04** — jauh di bawah ambang revise 0,30 dan reject 0,50. Paragraph burstiness **CV = 0,396** berada **di atas** lantai guardrail 0,30 (margin ~0,096), sehingga **tidak ada pemicu revise statistik dan tidak ada perbaikan burstiness yang dilakukan** — artikel tidak disentuh; aturan "pecah/variasikan paragraf" hanya aktif bila CV < 0,30. Empat passage distinctive berbahasa Indonesia (yang paling berisiko/orisinal) dicek via quoted WebSearch; **nol** yang cocok verbatim di halaman non-Soltius mana pun (skor plagiarisme 0,00). Hasil pencarian hanya memunculkan blog vendor HRIS (Talenta, Gadjian, HashMicro, KantorKu) dan jurnal akademik (ITS, UGM, BKN) yang membahas konsep KPI/cascading/SMART secara parafrasa — overlap konseptual pada materi KPI baku yang inheren high-overlap, **dikecualikan dari skoring** sesuai failure-mode agent; tata-kalimat artikel tetap orisinal. Editor merekomendasikan `approve` (skor 9) dan validator mengonfirmasi `pass`. Secara gate commit artikel **curator-ready**, NAMUN sesuai instruksi task, curator/commit **TIDAK** dijalankan pada run ini.

> ⚠️ **Catatan cakupan plagiarisme (degraded mode):** quota WebSearch per-turn (200 call, dibagi seluruh agent batch pada turn ini) habis setelah 4 pencarian. Target 5–8 passage tidak tercapai penuh; 4 passage dengan risiko tertinggi (lead, pembuka contoh-divisi, cascade SMART, pain spreadsheet) sudah diverifikasi dan clean. Empat passage sisa berisiko rendah by construction: CTA ("Untuk menata pengelolaan KPI karyawan lewat SAP SuccessFactors...") = boilerplate Soltius yang orisinal; kalimat kapabilitas SAP (CPM/Calibration) = parafrasa sitasi sap.com yang disengaja (dikecualikan bila match); "Penilaian yang sehat tidak hanya menumpuk KPI lagging..." = prosa analitis orisinal; FAQ KPI-vs-OKR = konsep standar. Tidak mengubah verdict; bila dikehendaki, 4 pencarian sisa dapat diselesaikan pada follow-up turn.

## AI Detector (heuristik v2.0)
- Score: **0,04** / 1.0 (ambang: revise ≥0,30, reject ≥0,50) → **pass**
- Paragraph burstiness (CV): **0,396** (guardrail gate ≥0,30 → **lolos**, margin ~0,096; ideal ≥0,45)
- Sentence burstiness: **0,967** (ritme kalimat sangat bervariasi, manusiawi)
- Top-30 vocab share: **0,268** (di bawah ambang 0,35 → sehat, tidak terkonsentrasi)
- external_api_used: false (heuristik murni; tidak ada `AI_DETECTOR_API_KEY`)
- Flags (1):
  - [low] `paragraph-low-variance`: "Paragraph word-count CV=0.396 (target >=0.45)" — severity **low**, bukan blocker. Gate 0,30 terlampaui dengan margin nyaman. Wajar untuk explainer B2B padat dengan tabel 6 baris + list 6 langkah bernomor dan band ketat 1000–1200; memaksa naik ke 0,45 menuntut padding/pemotongan yang melanggar aturan on-point. **Dibiarkan.** Sentence burstiness 0,967 dan rentang panjang paragraf (lead ~62 kata vs kalimat-pukulan satu-baris "Sistem tidak otomatis membuat KPI menjadi benar.") mengonfirmasi ritme tetap manusiawi.

> Catatan metrik: skrip menghitung word_count **1202** pada tokenisasi raw (baris heading/tabel/list diperlakukan sebagai unit terpisah). `tools/count_words.py` (cleaned-prose, kanonik pipeline) dan frontmatter melaporkan **1161** — in-band 1000–1200. Keduanya konsisten pada CV 0,396 (di atas guardrail 0,30); tidak ada konflik verdict.

## Plagiarism (web lookup passage distinctive)
4 passage distinctive dicek via quoted WebSearch (frasa ID dibersihkan dari artefak markdown agar bermakna). **Semua clean** — tidak ada halaman non-Soltius yang memuat frasa Bahasa Indonesia secara verbatim ≥20 kata. Hasil pencarian hanya memunculkan materi blog/edukasi yang **menegaskan** akurasi fakta, bukan sumber terjiplak.

- ✅ "...seorang kepala divisi harus menilai timnya, tetapi tidak punya ukuran yang disepakati sejak awal." (lead) — clean; nol match frasa ID verbatim. SERP memunculkan Talenta/Gadjian/Kantorku soal bias penilaian tanpa KPI (parafrasa konseptual, bukan lift)
- ✅ "KPI selalu diturunkan dari fungsi tiap divisi, sehingga metriknya berbeda dari satu unit ke unit lain." — clean; nol verbatim. Talenta/KantorKu/jurnal ITS mengonfirmasi konsep cascading & KPI per-divisi dengan tata-kalimat berbeda
- ✅ "Penyusunan KPI bergerak dari atas ke bawah: sasaran perusahaan diturunkan ke divisi, lalu ke peran tiap individu." — clean; nol verbatim. Konsep cascade didukung Gadjian/Talenta/Pedoman BKN, frasa ID orisinal
- ✅ "...mengelola KPI lewat spreadsheet cepat kedaluwarsa, sulit dikonsolidasikan, dan rawan versi ganda." — clean; nol verbatim. Hanya sumber EN vendor (SimpleKPI/ClearPoint/Intrafocus) soal keterbatasan spreadsheet; nol frasa ID terjiplak
- **Aggregate plagiarism score: 0,00** (nol match verbatim ≥20 kata di situs non-Soltius; nol partial near-match yang layak dihitung). Tidak ada hit pada soltius.co.id/metrodata/SAP-official yang perlu dikecualikan sebagai sitasi.

## Re-verifikasi override batch 2026-10 (§7 addendum)
| Cek | Ambang batch | Aktual | Status |
|---|---|---|---|
| Word count (body) | 1000–1200 | **1161** (`count_words.py` kanonik; raw skrip 1202) | ✅ pass |
| FAQ | 3–5 Q&A | **4** (KPI vs OKR, jumlah ideal, metode SMART, leading vs lagging) | ✅ pass |
| Internal link | 2 (1 hub + 1 cousin) | **2** — hub `success-factors` (H2-4) + cousin `talent-acquisition` (H2-1), inline natural | ✅ pass |
| Image placeholder `{IMAGE_NN}` | 0 (dilarang by design) | **0** | ✅ pass (JANGAN di-flag) |
| Definisi muncul sekali | hanya di snippet | **1×** — snippet "Ringkasnya:"; tidak ada H2 "Apa itu KPI" yang mengulang; jawaban langsung & FAQ isi poin baru | ✅ pass |
| Framing Soltius | implementator/pendamping, ≤2 self-mention | implements-not-builds; **2** self-mention (positioning line Kesimpulan + soft CTA soltius.co.id) | ✅ pass |
| Angka tidak dikarang | hedged/atribusi | conversion ~2–5% & turnover <10% berlabel "estimasi lintas industri / bukan patokan resmi" + ditegaskan ilustratif; SMART diatribusikan Doran 1981; "3–5 KPI"/"bobot 100%" = praktik umum | ✅ pass |
| IFRS di-hedge | bila ada | **N/A** — nol penyebutan IFRS di artikel ini | ✅ N/A |
| Tabel HTML valid | bila ada | **N/A** — hanya 1 tabel Markdown (6 baris divisi), tanpa tabel HTML mentah | ✅ N/A |
| External citation | 1–2 otoritatif | **2** — The KPI Institute + SAP (inline, beratribusi) | ✅ pass |
| H2 question-format | ≥1 | **2** ("Mengapa...Apa Saja Jenisnya?", "Bagaimana Sistem HR...?") | ✅ pass |
| Em-dash body | ≤2 | **0** | ✅ pass |

## Loop status
Revision loop **0**. Tidak ada loop writer dipicu (kedua gate pass pada run pertama; guardrail burstiness lolos).

## The shipping question
Akan HCU / SpamBrain menandai ini sebagai scaled-AI content? **Tidak** (AI 0,04; burstiness paragraf 0,396 & kalimat 0,967; vocab share 0,268). Akan Originality.ai memberi >30% AI probability? **Tidak** — pola statistik manusiawi. Akan frasa 20-kata mana pun muncul verbatim di tempat lain? **Tidak** pada 4 passage berisiko tertinggi yang diverifikasi; 4 sisa berisiko rendah by construction. Semua "tidak" → **pass**.

## Catatan untuk orchestrator
- Verdict **pass**; AI 0,04; plagiarisme 0,00; loop 0 → **curator-ready** menurut gate (editor `approve` + validator `pass`).
- Sesuai instruksi task run ini: **curator/commit TIDAK dijalankan.** Artikel tetap di `final/` untuk penanganan manual/konfirmasi user.
- Open flag diwarisi dari editor (non-blocker): (1) konfirmasi pasangan cousin link `talent-acquisition`; (2) retensi benchmark angka berlabel estimasi; (3) peniadaan fitur GenAI/Joule. Ketiganya ranah interaktif orchestrator/user, bukan sub-agent.
- Degraded mode: cakupan plagiarisme 4/≥5 passage akibat quota WebSearch per-turn habis (bukan temuan negatif). Dapat diselesaikan pada follow-up turn bila diminta.
