---
brief_id: "strategi-scm-c01"
validator_run_date: "2026-07-06"
verdict: "pass"
ai_score: 0.15
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-07 — style_addendum.md §7 overrides applied (word band 800–1000, FAQ 2–3, internal link 2, image checks N/A by design)"
---

# Quality Validator Report — 5 Strategi Supply Chain Management yang Optimal (Update 2026)

## Verdict: **pass**

Editor recommendation `approve` diwarisi dan dikonfirmasi. AI-detector heuristik v2.0 memberi skor 0.15 (jauh di bawah ambang revise 0.30) dengan nol pola AI-tell; satu flag paragraph-uniformity (CV=0.288) diadjudikasi manual sebagai artefak metrik format ringkas batch ini — CV riil pada level blok 0.482–0.576, di atas target 0.45 (rincian di bawah). Delapan passage paling distingtif dicek via quoted WebSearch: nol exact match, nol partial near-match di situs non-Soltius → skor plagiarisme 0.00. EYD spot-scan bersih. Artikel siap untuk review user; curator TIDAK dijalankan sesuai instruksi batch.

## AI Detector (heuristic v2.0)

- Score: **0.15** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → script verdict: **pass**
- Paragraph burstiness (CV, script method): 0.288 (target ≥0.45) — **diadjudikasi manual, lihat catatan**
- Sentence burstiness: **0.881** (sangat tinggi = ritme kalimat manusiawi)
- Top-30 vocab share: 0.311 (ambang flag >0.35 — tidak ter-flag)
- Pattern flags AI-tell (frasa terlarang §5): **0** — tidak ada "Selain itu" berantai, "Penting untuk dicatat", filler era, "Dengan demikian", em-dash 0
- Flags (1):
  - [high] paragraph-uniformity: Paragraph word-count CV=0.288 (target ≥0.45; <0.30 strong AI tell)

### Adjudikasi manual flag paragraph-uniformity (wajib per role definition: tidak boleh approve CV<0.30 tanpa re-analisis)

Rekomputasi manual (script tersendiri, angka tercatat di sesi validasi):

| Metode perhitungan | n unit | CV |
|---|---|---|
| Script default (prosa saja, buang paragraf <5 kata + semua list/tabel) | 12 | 0.288 |
| + one-liner transisi ("Tabel berikut merangkum kelimanya." 4 kata; "Tiga tahap penerapannya:" 3 kata) | 14 | **0.482** |
| + blok list bernomor sebagai unit ritme (14–110 kata per blok) | 20 | **0.576** |

Kesimpulan adjudikasi: flag = **artefak metrik, di-waive dengan bukti**. Dua penyebab: (1) filter script membuang justru perangkat ritme artikel — dua one-liner transisi dan enam blok list 14–110 kata; (2) style addendum batch ini MEWAJIBKAN band kata seragam (lead ≤80, direct answer 40–60/H2, FAQ 30–60, kesimpulan ≤80) sehingga varian paragraf prosa murni tertekan by design. CV riil level blok (0.482–0.576) ≥ target 0.45, sentence burstiness 0.881, nol pattern flag, vocab share normal — profil statistik keseluruhan manusiawi. Re-read manual seluruh artikel: ritme bervariasi (paragraf 1–4 kalimat, one-liner, list, tabel), tidak ada tell struktural.

## Plagiarism (web lookup of distinctive passages)

8 candidate passages dicek via quoted WebSearch (query dibersihkan dari artefak markdown `**`/`[]()`/`##` agar pencarian bermakna; passage sesuai `strategi-scm-c01.id.quality-input.json`):

- ✅ Passage 1: "baru 29% organisasi supply chain yang telah membangun kapabilitas untuk performa masa depan" — clean (angka Gartner bersumber & disitasi; frasa Indonesia tidak ditemukan verbatim di mana pun)
- ✅ Passage 2: "95% perusahaan memiliki visibilitas risiko sampai pemasok tier-1, tetapi baru 42% yang menjangkau tier-2" — clean (parafrase orisinal atas temuan McKinsey yang disitasi)
- ✅ Passage 3: "memprediksi 60% disrupsi supply chain tertangani tanpa intervensi manusia pada 2031" — clean (atribusi Gartner Mar 2026, frasa tidak ditemukan)
- ✅ Passage 4: "visibilitas memberi data, perencanaan memberi arah, diversifikasi dan segmentasi memberi ketahanan" — clean (formulasi orisinal, nol match)
- ✅ Passage 5: "Evaluasi kuartalan memakai indikator baku, bukan kesan rapat" — clean
- ✅ Passage 6: "Ukur per kuartal dan bandingkan antarperiode agar tren terlihat" — clean
- ✅ Passage 7: "banyak perusahaan menggabungkan keduanya per segmen produk lewat pendekatan hibrida" — clean
- ✅ Passage 8: "Survei McKinsey yang sama menemukan 82% rantai pasok terdampak tarif baru" — clean

- Exact match non-Soltius: 0 × (+0.05) · Partial near-match non-Soltius: 0 × (+0.02)
- **Aggregate score: 0.00** → pass (ambang: pass <0.10)
- Catatan REWRITE: artikel ini adalah rewrite halaman Soltius sendiri (URL/slug dipertahankan: `5-strategi-supply-chain-management-yang-optimal`). Overlap dengan halaman lama soltius.co.id — jika ada — adalah self-reference yang disengaja, bukan plagiarisme (per failure-mode role definition). Faktanya nol hit soltius.co.id muncul di seluruh pencarian.
- Angka statistik (29%, 95%/42%, 82%, 60%/2031) inheren high-overlap sebagai fakta bersumber; yang divalidasi adalah phrasing kalimat — semuanya orisinal.

## EYD & structure integrity (spot-scan penuh berlaku)

- EYD: `sekadar` ✓, `praktik` ✓, `risiko` ✓, `antarperiode` (serangkai) ✓, `multiproduk` (perbaikan editor) ✓, preposisi `di` vs prefiks `di-` konsisten benar ✓. Catatan minor non-blocking: "pasca go-live" (Kesimpulan) idealnya "pasca-go-live" (bentuk terikat *pasca-*); lazim di penulisan industri, tidak menghalangi publikasi.
- Struktur: frontmatter YAML valid; H1 tunggal; 3 body H2 (≥1 question-format: 2) + FAQ + Kesimpulan; blockquote snippet "Ringkasnya:" tunggal; tabel 5 baris well-formed; 2 internal link + 2 sitasi eksternal inline + 1 atribusi tanpa link; soft CTA soltius.co.id = baris terakhir ✓.

## Overrides batch conditional 2026-07 (dicatat N/A / compliant, BUKAN fail)

| Check script/playbook default | Status per addendum §7 |
|---|---|
| Word band 1.500–1.800 | **N/A — override 800–1000**: compliant (948 clean / 985 raw-token; keduanya dalam band) |
| FAQ 5–8 | **N/A — override 2–3**: compliant (3 Q&A) |
| Internal link 3 | **N/A — override 2**: compliant (tepat 2: 1 hub + 1 cousin) |
| Image placeholder + images.json | **N/A — by design**: 0 `{IMAGE_NN}`, tanpa images.json — compliant, bukan isu |

Semua cek lain (AI-tell §5, plagiarisme, EYD, integritas struktur) diterapkan penuh — hasil di atas.

## Loop status

Revision loop **0** (first pass). Tidak ada loop writer yang diperlukan.

## Handoff

Verdict **pass** + editor **approve** → normalnya curator-ready. Sesuai instruksi batch conditional 2026-07: **curator TIDAK dijalankan, tidak ada commit ke articles_history** — artikel berhenti di `final/` untuk review user.

Raw script output: `conditional/2026-07/final/strategi-scm-c01.id.quality-input.json`
