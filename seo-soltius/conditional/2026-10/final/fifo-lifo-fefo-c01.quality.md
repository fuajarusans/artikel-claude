---
brief_id: "fifo-lifo-fefo-c01"
validator_run_date: "2026-10-08"
batch: "conditional-2026-10"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — FIFO, LIFO, dan FEFO: Perbedaan Metode Manajemen Stok

## Verdict: **pass**

Artikel lolos kedua gate QC dan memenuhi seluruh override batch 2026-10. AI-detector heuristik memberi skor **0,04** (jauh di bawah ambang revise 0,30 dan reject 0,50). Paragraph burstiness **CV = 0,474** — di atas lantai guardrail 0,30 **dan** di atas target ideal 0,45, sehingga **tidak ada pemicu revise statistik dan tidak ada perbaikan burstiness yang dilakukan** (artikel tidak disentuh; aturan "pecah/variasikan paragraf" hanya berlaku bila CV < 0,30). Enam passage distinctive berbahasa Indonesia dicek via quoted WebSearch; **nol** yang cocok verbatim di halaman non-Soltius mana pun (skor plagiarisme 0,00) — hasil pencarian hanya memunculkan materi konseptual/berita/akademik (DDTC, PwC, IAI, Ortax, HashMicro, OCBC, Ginee, SG Systems, dsb.) yang justru **menegaskan** fakta yang dikutip artikel, bukan sumber terjiplak. Editor merekomendasikan `approve` (skor 9) dan validator mengonfirmasi `pass`. Secara gate commit artikel sudah **curator-ready**, NAMUN sesuai instruksi task, curator/commit **TIDAK** dijalankan pada run ini — dan tetap ada tiga keputusan user terbuka (Q1–Q3) yang diteruskan editor dan sebaiknya di-sign-off sebelum publikasi.

## AI Detector (heuristik v2.0)
- Score: **0,04** / 1.0 (ambang: revise ≥0,30, reject ≥0,50) → **pass**
- Paragraph burstiness (CV): **0,474** (guardrail gate ≥0,30 → **lolos**; bahkan melewati ideal ≥0,45)
- Sentence burstiness: **0,798** (ritme kalimat sangat bervariasi, manusiawi)
- Top-30 vocab share: **0,385** (sedikit di atas ambang 0,35 → 1 flag low)
- external_api_used: false (heuristik murni; tidak ada `AI_DETECTOR_API_KEY`)
- Metrik skrip: word_count raw 1188 · paragraph_count 18 · sentence_count 71
- Flags (1):
  - [low] `vocab-repetition`: "Top 30 words = 38.5% of body (target <30%)" — severity **low**, bukan blocker. Wajar untuk explainer komparatif yang sumbu utamanya tiga istilah teknis yang harus diulang agar extractable (FIFO, LIFO, FEFO) plus terminologi standar (PSAK, persediaan, rotasi, kedaluwarsa, stok). Memaksa share turun di bawah 0,35 akan menuntut parafrase yang justru melemahkan kejelasan entity untuk AI-Overview. **Dibiarkan.** Paragraph burstiness 0,474 dan sentence burstiness 0,798 (lead 71 kata vs paragraf pendek 2 kalimat vs list) mengonfirmasi teks tetap manusiawi; skor AI agregat 0,04 jauh dari ambang revise.

> Catatan metrik: skrip menghitung CV 0,474 pada word_count raw 1188 (split memperlakukan baris tabel 5 kolom + 2 list sebagai unit berbeda). Editor melaporkan CV 0,486 pada body bersih. Keduanya di atas guardrail 0,30 dan di atas ideal 0,45; tidak ada konflik verdict. `word_count` frontmatter = 1151 (cleaned-prose `count_words.py`), skrip raw = 1188; keduanya di dalam band 1000–1200.

## Plagiarism (web lookup passage distinctive)
Skrip mengekstrak 8 kandidat. **Enam passage prosa bermakna** dicek via quoted WebSearch (frasa ID dibersihkan dari artefak markdown); dua kandidat sisanya sengaja tidak diperlakukan sebagai uji jiplakan — satu hanyalah artefak heading markdown ("## FAQ … ### Apa bedanya FIFO dan FEFO?") dan satu lagi adalah **soft CTA Soltius** ("…kunjungi soltius.co.id"), yaitu self-reference yang by-design hanya akan muncul di properti Soltius (dikecualikan sesuai failure-mode agent). **Semua passage yang diuji clean** — tidak ada halaman non-Soltius yang memuat frasa Bahasa Indonesia secara verbatim. Hasil hanya berupa laman konseptual yang mendukung akurasi fakta, bukan sumber terjiplak.

- ✅ "PSAK 14 revisi 2008 yang berlaku sejak 1 Januari 2009, kini bernomor PSAK 202, hanya mengizinkan FIFO dan rata-rata tertimbang, selaras IAS 2." — clean; IAI (web.iaiglobal.or.id), DDTC, PwC PSAK-vs-IFRS **mengonfirmasi** penomoran PSAK 202 sejak 1 Jan 2024 (hanya penomoran, bukan substansi) & efektif revisi 2008 sejak 1 Jan 2009; nol match frasa ID verbatim
- ✅ "Bersama FIFO, inilah dua metode yang diizinkan PSAK dan Pasal 10 ayat (6) UU PPh untuk pelaporan keuangan dan pajak di Indonesia sejak LIFO dihapus pada 2009." — clean; DDTC (literasi/kamus 43616) mengonfirmasi hanya average + FIFO diakui untuk pajak, LIFO dilarang; frasa ID orisinal
- ✅ "FIFO dan LIFO sama-sama membaca tanggal masuk barang, hanya arahnya berlawanan; FEFO membaca tanggal kedaluwarsa." — clean; HashMicro, OCBC, glosarium Grit mendukung konsep (FIFO/LIFO berbasis urutan masuk; FEFO berbasis kedaluwarsa), nol match kalimat ID verbatim
- ✅ "…UU No. 36 Tahun 2008 tentang PPh membatasi penilaian persediaan pada rata-rata atau mendahulukan yang diperoleh pertama, yaitu FIFO." — clean; Ortax & DDTC mengonfirmasi rumusan Pasal 10 ayat (6) UU 36/2008 (rata-rata atau FIFO); diatribusikan, nol match verbatim
- ✅ "Sistem manajemen gudang menegakkan aturan ini otomatis pada tahap pengambilan barang (picking) lewat konfigurasi strategi pengeluaran stok (stock removal strategy)…" — clean; Ginee/HashMicro/majoo mengonfirmasi WMS menegakkan FIFO/FEFO di level sistem saat picking; frasa ID orisinal, WebSearch eksplisit "tidak ada sumber memuat frasa persis"
- ✅ "Batch A masuk Januari dan kedaluwarsa Desember; Batch B masuk Februari dan kedaluwarsa Juni." — clean; nol match (contoh ilustratif milik penulis, sudah ditandai artikel "Angka ini sekadar ilustrasi, bukan data pelanggan")
- **Aggregate plagiarism score: 0,00** (nol match verbatim ≥20 kata di situs non-Soltius; nol partial near-match). Tidak ada hit pada soltius.co.id/metrodata/SAP-official yang perlu dikecualikan.

## Fact spot-check (angka tak dikarang + IFRS/standar di-hedge) — konfirmasi lapis validator
- **LIFO dihapus PSAK 14 revisi 2008, berlaku 1 Januari 2009; sah = FIFO + rata-rata tertimbang** — dikonfirmasi lintas sumber (DDTC, PwC, akademik). ✓ (di-hedge + atribusi, tanpa kutip pasal verbatim)
- **PSAK 14 → PSAK 202 sejak 1 Januari 2024, "perubahan penomoran bukan substansi"** — dikonfirmasi dokumen IAI (Perubahan Penomoran PSAK ISAK) + DDTC. Artikel menambahkan hedge tepat: "status penomoran terbaru sebaiknya dikonfirmasi langsung ke naskah resmi". ✓
- **Pasal 10 ayat (6) UU No. 36/2008 batasi penilaian ke rata-rata atau FIFO** — dikonfirmasi Ortax/DDTC; diatribusikan tanpa klaim "tak pernah berubah". ✓ (WebSearch menandai sebagian sumber menyebut UU HPP 7/2021 — artikel tidak overclaim soal ini; hedge aman)
- **IAS 2 melarang LIFO** — disitir inline ke Deloitte IASPlus; konsisten dengan ifrs.org/IASB. ✓
- **Strategi stock removal SAP EWM (FIFO, stringent FIFO, LIFO, shelf life expiration date = mewujudkan logika FEFO; SAP tak memakai kata "FEFO" harfiah)** — disitir inline ke SAP Learning; framing akurat, tidak mengklaim penamaan FEFO oleh SAP. ✓
- **Contoh FEFO apotek (Batch A Jan/Des vs Batch B Feb/Jun)** — ditandai eksplisit sebagai ilustrasi, bukan data pelanggan; nol angka HPP/laba/pajak/%-pasar yang dikarang. ✓
- **Soltius** = SAP Platinum Partner via United VARs, berpengalaman sejak 1998, bagian Metrodata Group; "mengimplementasikan dan mendampingi… hingga dukungan pasca go-live" (bukan "membuat"/vendor WMS) — selaras company_profile/product_matrix (editor sudah mengoreksi "sejak 1998" agar tidak keliru menempel pada keanggotaan Metrodata). ✓
- ℹ️ **Nuansa non-blocker (completeness, bukan fabrikasi):** frasa "hanya FIFO dan rata-rata tertimbang" menyederhanakan dengan tidak menyebut **identifikasi khusus** (untuk item yang tidak dapat saling dipertukarkan). Dalam konteks komparasi rotasi/arus-biaya untuk persediaan fungible yang dibahas artikel, dua formula itu memang yang relevan; identifikasi khusus bukan asumsi arus biaya. Bukan kesalahan faktual dalam konteks; fakta substansi sudah di-hedge editor. Tidak memicu revise.

## Re-verifikasi gate batch 2026-10
| Gate | Target batch | Hasil | Status |
|---|---|---|---|
| Word band body | 1000–1200 | 1.151 (frontmatter `count_words.py`) · 1.188 (skrip raw) | ✅ |
| FAQ | 3–5 Q&A | 4 | ✅ |
| Internal link | 2 (1 hub + 1 cousin) | 2 (hub "sistem manajemen gudang (WMS)" `/id/blog/konsep-warehouse-management-system…` + cousin "migrasi ERP ke cloud" `/id/blog/migrasi-erp-ke-cloud`), keduanya di H2-4 | ✅ |
| Image placeholder `{IMAGE_NN}` | 0 (by design) | 0 | ✅ (tidak di-flag) |
| Definisi | sekali (snippet) | sekali di blockquote "Ringkasnya:"; H2-1 "Apa Perbedaan…" memberi info BARU (dasar urutan, dua dimensi rotasi vs akuntansi + tabel), bukan menyatakan ulang definisi snippet | ✅ |
| Framing Soltius | ≤2 self-mention, konsultatif | 2 (positioning line Kesimpulan + soft CTA soltius.co.id baris terakhir); kemunculan lain hanyalah URL tautan internal | ✅ |
| Sitasi eksternal otoritatif | 1–2 | 2 (SAP Learning di H2-4 + IAS 2/Deloitte IASPlus di H2-3), inline & beratribusi | ✅ |
| Em-dash | ≤2 | 1 (hanya di snippet; skrip tidak memicu `em-dash-overuse`) | ✅ |
| Angka tak dikarang | wajib | Tanggal/standar (PSAK 14/202, 1 Jan 2009, 1 Jan 2024, Pasal 10(6), IAS 2, 1998) diatribusikan & di-hedge; contoh apotek ditandai ilustrasi; nol angka tanpa sumber | ✅ |
| Tabel HTML valid (bila ada) | — | Tidak ada tabel HTML; 1 tabel Markdown (5 kolom: Metode/Kepanjangan/Dasar urutan/Yang keluar dulu/Cocok untuk) valid, separator & kolom konsisten | ✅ N/A |

## Loop status
Revision loop **0** (first pass). Tidak ada revise yang dipicu (AI maupun plagiarisme). Tidak ada loop writer. Tidak ada escalation. Artikel tidak disentuh validator.

## The shipping question
Would an HCU/SpamBrain review flag this as scaled-AI content? **No** (AI 0,04; CV paragraf 0,474 di atas gate dan di atas ideal; sentence burstiness 0,798; vocab share 0,385 hanya low-flag). Would Originality.ai give it >30% AI? **Unlikely** berdasarkan heuristik. Would a 20-word phrase turn up verbatim elsewhere? **No** (6/6 passage prosa clean). → **pass.**

## Rekomendasi ke orchestrator
**curator-ready (memenuhi gate commit: editor `approve` + validator `pass`) — TETAPI jangan commit dulu.** Sesuai instruksi task, curator/commit **TIDAK** dijalankan pada run ini.

⚠️ **Open flag user (diteruskan dari editor, bukan diputuskan validator)** — kolom landing page di Sheet kosong untuk brief ini dan user eksplisit minta ditanya; default strategist dipakai di draft tetapi belum dikonfirmasi. Ketiganya **bukan blocker publikasi/kualitas**:
- **Q1 (own-hub link):** hub = halaman konsep WMS (`/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu`, diverifikasi tidak membahas akuntansi → aman dari kanibalisasi). Alternatif: `jenis-manfaat-dan-cara-implementasi-WMS`. Bila diganti, tukar 1 anchor di H2-4 (total tetap 2).
- **Q2 (dimensi akuntansi sebagai pembeda utama):** H2-3 "LIFO dilarang PSAK/pajak" dipakai sebagai pembeda net-new vs hub WMS. Rekomendasi: pertahankan; konfirmasi apakah user setuju atau ingin fokus murni rotasi fisik/gudang.
- **Q3 (CTA anchor):** CTA = SAP Extended Warehouse Management (fungsi stock removal strategy), sesuai kolom brief_tracker. Konfirmasi ke user.

ℹ️ Catatan non-blocker: naskah resmi PSAK 202 & Pasal 10 ayat (6) tidak dibuka langsung di sesi ini (konsisten dengan editor); substansi dikonfirmasi lintas sumber sekunder (IAI/DDTC/PwC/Ortax) dan sudah di-hedge tepat. Untuk presisi maksimal sebelum tayang, spot-check teks resmi di iaiglobal.or.id / JDIH bila diinginkan.
