---
brief_id: "neraca-saldo-c01"
validator_run_date: "2026-07-06"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-07 — style_addendum.md §7 overrides applied"
---

# Quality Validator Report — Neraca Saldo: Pengertian, Fungsi, dan Contoh Penyusunannya

## Verdict: **pass**

Artikel lolos kedua gerbang. Heuristik AI-detector memberi skor 0,04/1,0 (jauh di bawah ambang revise 0,30) dengan hanya 1 flag low-severity (konsentrasi vokabuler — diterima, lihat catatan). Kedelapan passage kandidat plagiarisme dicek via WebSearch quoted: nol exact match dan nol partial near-match pada situs non-Soltius; skor plagiarisme 0,00. Semua override batch conditional 2026-07 diterapkan sesuai style_addendum.md §7. Editor merekomendasikan approve; validator konkur. Artikel siap untuk review user (curator TIDAK dijalankan sesuai instruksi batch — pipeline berhenti di sini).

## Batch overrides applied (style_addendum.md §7 — addendum wins over script defaults)

| Check | Default script | Override batch ini | Actual | Status |
|---|---|---|---|---|
| Word count band | 1.500–1.800 | 800–1.000 (body H1→CTA) | 959 (metode editor, body); raw script 1.010 (termasuk heading/FAQ/tabel) | **COMPLIANT per override** |
| FAQ | 5–8 | 2–3 Q&A | 3 Q&A | compliant |
| Internal link | 3 | 2 (hub + cousin) | 2 | compliant |
| Image placeholder + images.json | wajib | 0 placeholder, tanpa images.json | 0 `{IMAGE_NN}`, tidak ada images.json | **N/A — compliant BY DESIGN** (image checks dilewati, bukan isu) |

Semua cek lain (AI-tell, plagiarisme, EYD, integritas struktur) berlaku penuh dan dijalankan di bawah.

## AI Detector (heuristic, tools/quality-check.ps1)

- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.464** (target ≥0.45 — lolos)
- Sentence burstiness: **0.754** (sangat baik; variasi panjang kalimat kuat)
- Top-30 vocab share: **0.365** (target <0.30)
- Flags (1):
  - [low] vocab-repetition: "Top 30 words = 36.5% of body (target <30%)" — **DITERIMA/WAIVED.** Repetisi didominasi istilah struktural-domain yang tidak tersubstitusi (neraca, saldo, akun, debit, kredit, buku besar) pada artikel pendek ~960 kata; kepadatan keyword ~2% sudah dinilai wajar oleh editor (mayoritas di H1/H2/FAQ/nama jenis). Bukan tell statistik generatif — burstiness paragraf dan kalimat keduanya di atas target.
- Manual cross-read §5 style guide: 0 opener klise, 0 "Selain itu" pembuka paragraf, 1 em-dash (≤2), struktur H2 bervariasi (prosa/list/numbered/tabel), klaim berangka. Konsisten dengan skor rendah.

## Plagiarism (web lookup — 8 candidate passages, quoted WebSearch)

1. ✅ "Selisih yang habis dibagi 9 mengindikasikan transposisi, angka tertukar seperti 540 tertulis 450." — **clean.** Tidak ada match verbatim. Hasil terdekat (ditama.id) menjelaskan heuristik ÷9 yang sama dengan frasa dan contoh angka berbeda (118.000→181.000); heuristik akuntansi standar, bukan lifting.
2. ✅ "Sebagai SAP Platinum Partner melalui keanggotaan United VARs, Soltius mendampingi perusahaan memindahkan pembukuan…" — **clean.** Hit hanya di soltius.co.id / united-vars.com / SAP official = self-reference & kredensial yang memang disitasi (diabaikan sesuai aturan).
3. ✅ "Pencatatan yang rapi belum tentu seimbang." (lead) — **clean.** Tidak ada match verbatim frasa ini; konten sejenis di web memakai formulasi berbeda ("balance belum tentu benar").
4. ✅ "Siapkan lembar kerja empat kolom: kode akun, nama akun, debit, dan kredit." — **clean (generic).** Enumerasi 4 kolom neraca saldo adalah terminologi baku (versi Mekari Jurnal: "nomor kode, nama akun, debit, dan kredit" — bukan match verbatim, overlap <70% pada level kalimat). Diklasifikasikan standard phrasing, tidak diskor.
5. ✅ "Polanya terbaca cepat: akun bersaldo normal debit, yaitu aset dan beban, mengisi kolom kiri…" — **clean.** Tidak ada match verbatim; hasil pencarian hanya konten saldo-normal generik dengan frasa berbeda.
6. ✅ "Neraca saldo hanya menguji kesamaan aritmetika total debit dan kredit, bukan kebenaran isi pencatatan." — **clean.** Konsep umum, formulasi kalimat unik; tidak ditemukan verbatim.
7. ✅ FAQ "Apa perbedaan neraca saldo dan neraca (laporan posisi keuangan)?" + jawaban — **clean.** Pertanyaan PAA-style memang umum (by design); frasa jawaban khas artikel ("dokumen kerja internal berformat 4 kolom") tidak muncul verbatim di mana pun.
8. ✅ "Keseimbangan debit-kredit dijaga sejak dokumen diposting; saldonya dibaca langsung lewat aplikasi Trial Balance di SAP Fiori…" — **clean.** Hasil hanya dokumentasi SAP resmi berbahasa Inggris (help.sap.com, Fiori Apps Library — sumber yang memang disitasi); kalimat Indonesia ini tidak ada padanan verbatimnya.

- Exact match non-Soltius: **0** × (+0.05) = 0.00
- Partial near-match non-Soltius: **0** × (+0.02) = 0.00
- **Aggregate score: 0.00** → pass (tidak ada verbatim hit ≥20 kata di situs non-Soltius)

## EYD & structure integrity spot-check — PASS

- EYD: "tepercaya", "antarperiode", "memverifikasi", "pascago-live" ditulis "pasca go-live" (bentuk terikat longgar yang lazim di korpus bisnis; diterima sebagai pilihan gaya konsisten), format rupiah "Rp98.000.000" tanpa spasi — benar; italic untuk istilah asing (*trial balance*, *double-entry*, *spreadsheet*) konsisten pada sebutan pertama.
- Struktur: frontmatter lengkap (word_count 959 terisi); H1 = keyword posisi 1; lead ≤80 kata tanpa roadmap; snippet blockquote "Ringkasnya:" 46 kata (band 40–60); 4 H2 body (2 question-format, 1 tabel, 1 honest); FAQ 3 Q&A; Kesimpulan ≤80 kata + 1 positioning line; soft CTA soltius.co.id = baris terakhir; definisi hanya muncul sekali (di snippet) — cek repetisi definisi addendum §7 lolos.
- Sitasi eksternal 2 inline (AccountingTools, SAP Help) — sesuai band 1–2.
- Soltius self-mention 2/2 (cap batch), framing implementator.

## Editor concurrence

Editor QC (`neraca-saldo-c01.qc.md`): recommendation **approve**, score 9/10, 0 open issue. Validator tidak menemukan hal yang membalikkan rekomendasi tersebut. Verdict gabungan (worst of AI pass + plagiarism pass) = **pass**.

## Loop status

Revision loop 0 (first pass). Tidak ada revisi diperlukan.

## Disposition

Sesuai instruksi batch conditional 2026-07: **curator TIDAK dijalankan; tidak ada commit ke articles_history**. Artikel berhenti di `conditional/2026-07/final/` menunggu review user.
