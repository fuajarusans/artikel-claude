---
brief_id: "sap-pp-c01"
validator_run_date: "2026-07-06"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-07 — style_addendum.md §7 overrides applied (word band 800–1000, FAQ 2–3, internal link 2, image checks N/A by design)"
---

# Quality Validator Report — SAP PP (Production Planning): Fungsi dan Penerapannya di Manufaktur

## Verdict: **pass**

Editor recommendation `approve` diwarisi dan dikonfirmasi. Heuristic scan (`tools/quality-check.ps1` v2.0) menghasilkan AI score 0.04 — jauh di bawah ambang revise (0.30) — dengan hanya 1 flag low-severity (paragraph-length variance), yang di-waive dengan alasan di bawah. Delapan passage plagiarisme paling distingtif dicek via quoted WebSearch: nol verbatim hit di situs non-Soltius/non-sitasi; skor agregat 0.00. Semua override batch 2026-07 tercatat compliant/N-A sesuai style_addendum §7. Artikel curator-ready — namun sesuai instruksi batch, curator TIDAK dijalankan; berhenti di verdict ini untuk review user.

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → verdict script: **pass**
- Paragraph burstiness (CV): **0.367** (target ≥0.45; hard floor 0.30)
- Sentence burstiness: **0.712** (kuat — ritme kalimat sangat bervariasi)
- Top-30 vocab share: **0.309** (di bawah ambang flag 0.35)
- Word count (script, seluruh prosa termasuk heading/FAQ): 989; hitungan editor (body H1–CTA): 960 — keduanya dalam band override 800–1000
- Flags (1):
  - [low] `paragraph-low-variance`: Paragraph word-count CV=0.367 (target ≥0.45) — **DI-WAIVE**, alasan: (1) di atas hard floor 0.30 (failure-mode agent hanya melarang approve saat CV <0.30); (2) sentence burstiness 0.712 jauh di atas target, jadi keseragaman bukan pola statistik AI melainkan efek struktural artikel pendek 900-kata yang padat (tabel + 2 list bernomor memampatkan rentang panjang paragraf prosa); (3) skor total 0.04 bukan zona borderline 0.28–0.32, dan pembacaan manual saya mengonfirmasi tidak ada pola §5 (nol klise pembuka/penutup, em-dash 1, honest hedging praktisi di H2 #3–#4).
- Grep manual pola §5 (Selain itu / penting untuk dicatat / dengan demikian / sebagai kesimpulan / era-filler): **0 match** ✓
- External AI-detector API: tidak dipakai (env key tidak diset; default heuristik)

## Plagiarism (web lookup of distinctive passages)

8 candidate passages dicek dengan quoted WebSearch (kandidat #4 dari script berupa heading FAQ struktural — diganti kalimat distingtif lain dari body agar cek tetap 8 passage prosa):

- ✅ Passage 1: "Industri pengolahan adalah sektor terbesar perekonomian nasional: menyumbang 19,07% terhadap PDB 2025 dan tumbuh 5,30%..." — **clean**. Hit teratas = sippa.kemenperin.go.id, yaitu sumber yang DIKUTIP artikel (intentional citation — diabaikan sesuai aturan); hit lain (kumparan, databoks, neraca) hanya melaporkan statistik BPS publik yang sama, bukan verbatim kalimat artikel.
- ✅ Passage 2: "Menurunkan rencana produksi menjadi kebutuhan komponen beserta jadwal pengadaannya" — clean; hasil hanya topikal (definisi MRP generik), nol verbatim.
- ✅ Passage 3: "PP mencakup siklus perencanaan-eksekusi penuh, dari demand management hingga konfirmasi produksi; MRP salah satu mesinnya" — clean; hasil topikal SAP-PP intro, nol verbatim.
- ✅ Passage 4: "Material master memuat data dasar tiap material, sedangkan BOM mendaftar komponen penyusun produk" — clean; nol verbatim di URL mana pun; frasa bergenre definisi standar (kategori yang aturan agent kecualikan dari flag).
- ✅ Passage 5: "SAP PP/DS menambahkan penjadwalan kapasitas terbatas (finite) hingga level jam, sudah tertanam di SAP S/4HANA..." — clean; hit = halaman SAP berbahasa Inggris termasuk help.sap.com yang dikutip artikel (intentional citation), nol verbatim Indonesia.
- ✅ Passage 6: "Satu konfirmasi produksi otomatis memperbarui stok dan biaya produksi tanpa input ulang" — clean; hasil topikal ERP generik, nol verbatim (termasuk pada 8thinktank.com yang muncul topikal).
- ✅ Passage 7: "Work center (stasiun kerja) adalah lokasi operasi sekaligus pemilik kapasitas; routing merekam urutan operasi berikut waktu standarnya" — clean; hasil hanya kemiripan konseptual definisi work center, nol verbatim.
- ✅ Passage 8: "bottleneck yang berpindah-pindah antarlini, produk multi-varian dengan waktu setup signifikan" — clean; hasil topikal bottleneck produksi, nol verbatim.

**Aggregate score: 0.00** (0 exact match, 0 partial near-match pada URL non-Soltius/non-sitasi; tidak ada verbatim ≥20 kata di mana pun) → plagiarism verdict: **pass**

## Batch-2026-07 overrides (checks recorded as N/A / adjusted — BUKAN kegagalan)

| Check | Default script/agent | Override addendum §7 | Actual | Status |
|---|---|---|---|---|
| Word band | 1.500–1.800 | **800–1000** | 960 (editor) / 989 (script) | ✓ compliant |
| FAQ | 5–8 | **2–3** | 3 | ✓ compliant |
| Internal link | 3 | **2** (1 hub + 1 cousin) | 2 | ✓ compliant |
| Image placeholder + images.json | 2–3 + brief | **0 / tanpa images.json (by design)** | 0 placeholder, tanpa images.json | **N/A by design** — tidak diflag |

Cek lain berlaku penuh dan lolos: anti-AI §5 (score 0.04, grep 0), EYD (perbaikan editor terverifikasi di final: atribusi BPS, italic istilah asing pertama, tanda baca), struktur utuh (frontmatter lengkap; lead 67 kata tanpa roadmap; snippet "Ringkasnya:" 49 kata = satu-satunya definisi; 4 H2 body dengan 3 question-format; 1 tabel + 2 list bernomor; Kesimpulan 59 kata dengan 1 positioning line; soft CTA soltius.co.id baris terakhir; 2 sitasi eksternal otoritatif inline; Soltius mention tepat 2).

## Aggregate

- AI verdict: pass (0.04)
- Plagiarism verdict: pass (0.00)
- Overall = worst of two = **pass**

## Loop status

Revision loop **0**. Tidak ada revisi diperlukan. Sesuai instruksi batch conditional 2026-07: curator TIDAK dijalankan dan tidak ada commit ke `articles_history/` — artikel berhenti di `final/` menunggu review user.
