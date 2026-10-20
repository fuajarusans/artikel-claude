---
brief_id: "buku-besar-c01"
validator_run_date: "2026-10-08"
batch: "conditional-2026-10"
verdict: "pass"
ai_score: 0.08
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Apa Itu Buku Besar (General Ledger) dan Perannya dalam Akuntansi

## Verdict: **pass**

Artikel lolos kedua gate QC dan memenuhi seluruh override batch 2026-10. AI-detector heuristik (`quality-check.ps1`) memberi skor **0,08** — jauh di bawah ambang revise 0,30 dan reject 0,50. Paragraph burstiness **CV = 0,345** berada **di atas** lantai guardrail 0,30, sehingga **tidak ada pemicu revise statistik dan tidak ada perbaikan burstiness yang dilakukan** (artikel tidak disentuh; aturan "pecah/variasikan paragraf" hanya aktif bila CV < 0,30). Tujuh passage distinctive berbahasa Indonesia dicek via quoted WebSearch; **nol** yang cocok verbatim di halaman non-Soltius mana pun (skor plagiarisme 0,00). Dua passage dengan overlap konseptual tinggi (aturan "total buku besar pembantu = saldo akun kontrol" dan enam langkah posting) adalah **materi akuntansi baku yang inheren high-overlap** — dikecualikan dari skoring plagiarisme sesuai failure-mode agent; parafrasa artikel tetap orisinal dan tidak menyalin tata-kalimat satu sumber pun. Editor merekomendasikan `approve` (skor 9) dan validator mengonfirmasi `pass`. Secara gate commit artikel **curator-ready**, NAMUN sesuai instruksi task, curator/commit **TIDAK** dijalankan pada run ini. Tiga keputusan user terbuka diteruskan dari editor (judul 64-char, pasangan hub/cousin, presisi halaman AccountingTools) — ketiganya non-blocker, tetapi menjawab permintaan "tanyakan apa yang ingin ditanyakan" pada brief Oktober.

## AI Detector (heuristik v2.0)
- Score: **0,08** / 1.0 (ambang: revise ≥0,30, reject ≥0,50) → **pass**
- Paragraph burstiness (CV): **0,345** (guardrail gate ≥0,30 → **lolos**, margin ~0,045; ideal ≥0,45)
- Sentence burstiness: **0,893** (ritme kalimat sangat bervariasi, manusiawi)
- Top-30 vocab share: **0,375** (sedikit di atas ambang 0,35)
- external_api_used: false (heuristik murni; tidak ada `AI_DETECTOR_API_KEY`)
- Flags (2):
  - [low] `paragraph-low-variance`: "Paragraph word-count CV=0.345 (target >=0.45)" — severity **low**, bukan blocker. Gate 0,30 terlampaui. Wajar untuk explainer B2B padat dengan dua tabel komparasi + list enam langkah dan band ketat 1000–1200; memaksa naik ke 0,45 akan menuntut padding/pemotongan yang melanggar aturan on-point. **Dibiarkan.** Sentence burstiness 0,893 dan rentang paragraf (lead vs paragraf satu-kalimat seperti "Satu merekam urutan waktu; satu lagi meringkas posisi tiap pos.") mengonfirmasi ritme tetap manusiawi.
  - [low] `vocab-repetition`: "Top 30 words = 37.5% of body (target <30%)" — severity **low**, bukan blocker. Inheren pada explainer satu-topik: "buku besar", "akun", "saldo", "jurnal", "posting" adalah entity inti yang WAJIB konsisten untuk kejelasan entity/SEO & keterkutipan AI; menggantinya dengan sinonim justru menurunkan GEO. Bukan AI-tell. **Dibiarkan.**

> Catatan metrik: skrip menghitung CV 0,345 pada word_count raw 1251 (split memperlakukan baris tabel/list sebagai unit berbeda). Editor melaporkan CV 0,345 dan word_count bersih 1196 (`tools/count_words.py`). Keduanya konsisten dan di atas guardrail 0,30; tidak ada konflik verdict.

## Plagiarism (web lookup passage distinctive)
7 passage distinctive dicek via quoted WebSearch (frasa ID dibersihkan dari artefak markdown agar bermakna). **Semua clean** — tidak ada halaman non-Soltius yang memuat frasa Bahasa Indonesia secara verbatim ≥20 kata. Hasil pencarian hanya memunculkan materi edukasi/konseptual yang **menegaskan** akurasi fakta, bukan sumber terjiplak.

- ✅ "Jurnal menyusun transaksi urut tanggal, bukan per akun, sehingga saldonya tidak langsung terbaca." — clean; Binus/Jurnal.id/Mamikos/Plisio mengonfirmasi konsep jurnal kronologis vs buku besar per-akun, nol match frasa ID verbatim
- ✅ "Di SAP S/4HANA Finance, keduanya melebur ke dalam Universal Journal, yaitu satu tabel bernama ACDOCA yang menampung akuntansi keuangan (FI) sekaligus pengendalian biaya (CO)." — clean; SAP Learning/SAP-PRESS/espresso-tutorials mengonfirmasi ACDOCA menyatukan FI+CO sejak 1503, frasa ID orisinal (bukan terjemahan verbatim satu sumber)
- ✅ "total seluruh buku besar pembantu harus sama dengan saldo akun kontrolnya" — **standar akuntansi baku** (dikecualikan dari skoring); Jurnal.id/Teknokrat/Masoem memakai aturan yang sama dengan tata-kalimat berbeda; diatribusikan ke AccountingTools; nol verbatim lift
- ✅ "Kalau jurnalnya salah, buku besarnya ikut salah; ia menata ulang catatan, bukan memperbaikinya." — clean; WebSearch eksplisit tidak menemukan kalimat ini; aforisme orisinal penulis
- ✅ "Satu catatan: sumber berbeda pendapat apakah skontro punya kolom saldo baku, jadi lajur saldo paling konsisten dirujuk ke staffel." — clean; nol match. SERP justru **membuktikan** hedge ini benar (Accurate/Jubelio/Jurnal.id: skontro tanpa kolom saldo; Mamikos: ada) — kalimat hedging E-E-A-T orisinal
- ✅ "...saldo buku besar yang tak cocok dengan buku besar pembantu umumnya gejala posting tersebar di banyak spreadsheet, bukan sekadar salah ketik." — clean; nol match. Framing praktik-lapangan orisinal; konsep selisih subledger↔GL didukung sumber EN tetapi tanpa frasa ID verbatim
- ✅ "Siapkan akun buku besar sesuai bagan akun (chart of accounts), satu akun satu halaman." — **langkah posting baku** (dikecualikan dari skoring); Accurate/Jurnal.id/Kledo memuat aturan "satu akun satu lembar" dengan tata-kalimat berbeda; ringkasan padat artikel orisinal, nol verbatim lift
- **Aggregate plagiarism score: 0,00** (nol match verbatim ≥20 kata di situs non-Soltius; nol partial near-match yang layak dihitung). Tidak ada hit pada soltius.co.id/metrodata/SAP-official yang perlu dikecualikan sebagai sitasi.

## Fact spot-check (angka tak dikarang + hedging) — konfirmasi lapis validator
- **Universal Journal/ACDOCA menyatukan FI+CO; rekonsiliasi FI↔CO "tidak diperlukan"** — dikonfirmasi WebSearch verbatim ke SAP Learning ("no reconciliation between financial accounting and controlling is necessary"), disitasi inline & beratribusi. ✓
- **Universal Journal tersedia sejak S/4HANA Finance 1503** — dikonfirmasi WebSearch (SAP-PRESS, Consilio: "available since version S/4HANA Finance 1503"). ✓
- **ACDOCA "sekitar 350+ field, bervariasi antar-rilis… kisaran, bukan spesifikasi pasti"** — angka **di-hedge** eksplisit sebagai kisaran, bukan dikarang; selaras flag dossier. ✓
- **3 bentuk (T/skontro/staffel 3 vs 4 kolom); kolom saldo skontro ditulis hati-hati** — hedge "sumber berbeda pendapat" terbukti akurat lewat WebSearch. ✓
- **Buku besar pembantu: total = saldo akun kontrol** — akuntansi baku, diatribusi AccountingTools, dikonfirmasi berbagai sumber ID. ✓
- **Bagan akun 5 kategori; 6 langkah posting; contoh ref JU 01** — prosedur/konsep baku, konsisten dengan sumber edukasi. ✓
- **Nuansa "rekonsiliasi mekanis hilang ≠ pekerjaan tutup buku lenyap; migrasi ECC→S/4HANA tetap menuntut verifikasi"** — hedging jujur, tidak over-claim otomasi. ✓
- **Soltius** = SAP Platinum Partner via United VARs, **berpengalaman sejak 1998 dan bagian dari Metrodata Group** (dikoreksi editor dari "Metrodata sejak 1998"), "mendampingi… memindahkan… implementasi hingga dukungan pasca go-live" (bukan "membuat SAP") — selaras company_profile/product_matrix. ✓

## Re-verifikasi gate batch 2026-10
| Gate | Target batch | Hasil | Status |
|---|---|---|---|
| Word band body | 1000–1200 | 1.196 (frontmatter `count_words.py`) · 1.251 (skrip raw) | ✅ |
| FAQ | 3–5 Q&A | 5 | ✅ |
| Internal link | 2 (1 hub + 1 cousin) | 2 (hub "siklus akuntansi" `/id/blog/apa-itu-siklus-akuntansi-dan-manfaatnya` di H2 #1 + cousin "modul keuangan SAP (FICO)" `/id/blog/sistem-sap-fico-dan-modulnya...` di H2 #4), inline | ✅ |
| Image placeholder `{IMAGE_NN}` | 0 (by design) | 0 | ✅ (tidak di-flag) |
| Definisi | sekali (snippet) | sekali di blockquote "Ringkasnya:" (44 kata); H2 #1 "Apa Bedanya…" memberi KONTRAS (kronologis vs per-akun), bukan menyatakan ulang definisi snippet | ✅ |
| Framing Soltius | ≤2 self-mention, konsultatif | 2 (positioning line Kesimpulan + soft CTA soltius.co.id baris terakhir); SAP S/4HANA Finance/Universal Journal di H2 #4 = teaching, bukan self-mention | ✅ |
| Sitasi eksternal otoritatif | 1–2 | 2 (SAP Learning H2 #4 + AccountingTools FAQ-1), inline & beratribusi | ✅ |
| Em-dash (U+2014) | ≤2 | 0 (seluruh file) | ✅ |
| Angka tak dikarang | wajib | ACDOCA 350+ field di-hedge sebagai kisaran; "1503" dikonfirmasi SAP; sisanya konsep/prosedur baku; nol angka tanpa sumber | ✅ |
| IFRS di-hedge | bila ada | N/A — artikel tidak menyinggung IFRS (nol kemunculan) | ✅ N/A |
| Tabel HTML valid (bila ada) | — | Tidak ada tabel HTML; 2 tabel Markdown (bentuk buku besar 4 kolom; Manual vs ACDOCA 3 kolom) valid, separator & kolom konsisten | ✅ N/A |

## Loop status
Revision loop **0** (first pass). Tidak ada revise yang dipicu (AI maupun plagiarisme). Tidak ada loop writer. Tidak ada escalation. Artikel tidak disentuh validator.

## The shipping question
Would an HCU/SpamBrain review flag this as scaled-AI content? **No** (AI 0,08; CV paragraf 0,345 di atas gate; sentence burstiness 0,893). Would Originality.ai give it >30% AI? **Unlikely** berdasarkan heuristik. Would a 20-word phrase turn up verbatim elsewhere? **No** (7/7 passage clean; overlap hanya pada definisi/prosedur akuntansi baku). → **pass.**

## Rekomendasi ke orchestrator
**curator-ready (memenuhi gate commit: editor `approve` + validator `pass`) — TETAPI jangan commit dulu.** Sesuai instruksi task, curator/commit **TIDAK** dijalankan pada run ini.

⚠️ **Tiga keputusan user terbuka (diteruskan dari editor, BUKAN diputuskan validator) — jawaban atas "tanyakan apa yang ingin ditanyakan" pada brief Oktober:**
1. **Judul/H1 = 64 char** (di atas target 50–60), dipertahankan apa adanya karena GIVEN user (row 8, tab Oktober 2026). `meta_title` terpisah sudah 48 char, jadi gate SEO ≤60 aman. Opsi pangkas 52 char tersedia tanpa ubah substansi: *"Apa Itu Buku Besar (General Ledger) dalam Akuntansi"*. **Konfirmasi user: pakai judul penuh atau varian 52-char?** Non-blocker.
2. **Hub & cousin internal link** dipilih strategist karena kolom landing di Sheet kosong (keputusan standing): hub = blog "siklus akuntansi"; cousin = blog "SAP FICO" — konsisten dengan sibling cluster akuntansi `jurnal-umum-c01` & `neraca-saldo-c01`. **Konfirmasi user: pertahankan atau ganti?** Bila diganti, tukar 2 anchor (H2 #1 + H2 #4); total tetap 2. Non-blocker.
3. **Presisi halaman AccountingTools**: URL tertaut (`/what-is-a-subsidiary-ledger.html`, live & ber-tanggal) **mengimplikasikan** aturan akun kontrol; halaman AccountingTools "control account" yang menyatakannya eksplisit ada di URL berbeda. Domain & klaim benar. **Opsional:** validator/editor boleh ganti ke halaman control-account bila ingin presisi maksimal — jatah sitasi tetap 1–2. Non-blocker.
