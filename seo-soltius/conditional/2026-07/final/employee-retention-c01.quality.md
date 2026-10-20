---
brief_id: "employee-retention-c01"
validator_run_date: "2026-07-06"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-07 (style_addendum.md §7 overrides applied)"
---

# Quality Validator Report — Apa Itu Employee Retention dan Strategi Mempertahankan Karyawan

## Verdict: **pass**

Artikel lolos kedua gerbang QC. AI-detector heuristik memberi skor **0.04** (jauh di bawah ambang revise 0.30), dengan satu flag low-severity (varians panjang paragraf) yang tidak menurunkan verdict. Pengecekan plagiarisme atas 6 passage distinctive lewat WebSearch terkutip **tidak menemukan satu pun kecocokan verbatim** pada halaman non-Soltius/non-sitasi; skor plagiarisme **0.00**. Editor merekomendasikan `approve`, dan tidak ada temuan statistik yang membalik keputusan itu. Override batch conditional-2026-07 dicatat sebagai N/A/COMPLIANT sesuai style_addendum §7, bukan sebagai kegagalan. Artikel siap untuk review user (curator TIDAK dijalankan).

## Batch-2026-07 validation overrides (addendum §7 menang atas default skrip)
- **Word band 800–1000**: **COMPLIANT** (override). Skrip melaporkan `word_count: 1001` dengan tokenisasinya sendiri (memasukkan H1, pipa tabel, dan baris rumus code-fence sebagai prosa); body bersih H1–CTA versi editor = **944 kata**, di dalam band. Bukan fail.
- **FAQ 2–3**: **COMPLIANT** (override) — 3 Q&A.
- **Internal link 2**: **COMPLIANT** (override) — 1 hub + 1 cousin.
- **Image checks**: **N/A by design** (override) — 0 `{IMAGE_NN}`, tidak ada `images.json`; cek image dilewati, bukan di-flag.
- Semua cek lain (AI-tell, plagiarisme, EYD, struktur) berlaku penuh dan dijalankan.

## AI Detector (heuristic v2.0)
- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.358** (target ≥0.45; hanya memicu flag low-severity, jauh di atas ambang tell kuat 0.30)
- Sentence burstiness (CV): **0.91** (sangat sehat — ritme kalimat pendek/panjang bervariasi kuat; sinyal manusiawi)
- Top-30 vocab share: **0.311** (di bawah ambang repetitif 0.35)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.358 (target ≥0.45)

**Catatan validator**: satu flag low-severity ini tidak cukup untuk revise. Burstiness kalimat 0.91 dan vocab share 0.311 mengonfirmasi teks tidak seragam ala mesin; artikel padat 944 kata memang memaksa beberapa paragraf berdekatan panjangnya, tetapi variasi kalimat internalnya tinggi. Tidak ada AI-tell leksikal (0 em-dash, tanpa "Selain itu"/"Penting untuk dicatat"/"Dengan demikian"/"Sebagai kesimpulan"). Aman.

## Plagiarism (web lookup of distinctive passages)
6 passage substantif dicek (2 kandidat lain hanya fragmen heading markdown — dilewati):
- ✅ Passage 1 — "Gallup memperkirakan biaya penggantian karyawan frontliner sekitar 40%… teknis 80%… manajer 200%" — **clean** (hasil hanya halaman gaji frontliner tak terkait; frasa Indonesia orisinal, angka bersumber Gallup).
- ✅ Passage 2 — "angka 80–90% dianggap sehat, rata-rata lintas industri 82–87%…" — **clean** (hanya PDF akademis tak terkait; frasa orisinal).
- ✅ Passage 3 — "engagement global turun ke 20% pada 2025, terendah sejak 2020" — **clean**; kecocokan hanya pada gallup.com (sumber otoritatif yang memang dikutip — diabaikan sebagai self/citation, bukan plagiarisme). Bonus: WebSearch MENGONFIRMASI fakta (Gallup 2026: engagement global 20% pada 2025, terendah sejak 2020, kerugian ~US$10 triliun).
- ✅ Passage 4 — "94% karyawan menyatakan akan bertahan lebih lama… (LinkedIn Workplace Learning Report, 2019)" — **clean** (tanpa kecocokan; atribusi tahun benar).
- ✅ Passage 5 — "retensi 90 hari pertama… stay interview, percakapan berkala…" — **clean**; blog HR Indonesia lain membahas KONSEP yang sama (jendela 90 hari, stay interview) tetapi tanpa kecocokan kalimat — tumpang tindih topik praktik HR standar, bukan penjiplakan frasa.
- ✅ Passage 6 — "People analytics… membalik urutan itu… menandai risiko atrisi lebih dini… career talk" — **clean** (hanya paper akademis tak terkait).
- **Aggregate plagiarism score: 0.00** (ambang: revise ≥0.10). Tidak ada passage dengan kecocokan verbatim ≥20 kata pada situs non-Soltius.

## Structure & EYD spot-check
- Definisi muncul **sekali** (snippet "Ringkasnya:", 49 kata) — hard batch rule terpenuhi; tidak ada H2/paragraf yang mengulangnya.
- 4 H2 (2 question-format, 1 tabel praktis, 1 lensa pembeda + honest hedging); jawaban langsung 40–60 kata setelah tiap H2.
- Meta block lengkap; `date_modified: 2026-07-06` hadir (freshness GEO).
- EYD & istilah teknis di-italic + gloss pada sebutan pertama; tidak ada kesalahan ejaan yang tertangkap.
- Framing Soltius = implementer (2 mention); tanpa superlatif.

## Loop status
Revision loop **0**. Verdict `pass` pada pass pertama — tidak ada loop writer yang diperlukan.

## The shipping question
- HCU/SpamBrain menandai sebagai scaled-AI? **Tidak** — skor 0.04, burstiness kalimat kuat, fakta bersumber & terverifikasi.
- Originality.ai memberi >30% AI probability? **Tidak mungkin** pada profil heuristik ini.
- Frasa 20 kata mana pun muncul verbatim di tempat lain? **Tidak** — 6/6 passage bersih.

Semua "tidak" → **pass**. Curator TIDAK dijalankan; artikel menunggu review user di `conditional/2026-07/final/`.
