---
brief_id: "markup-vs-margin-c01"
validator_run_date: "2026-09-01"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.02
revision_loop: 0
batch: "conditional-2026-09 (style_addendum.md overrides applied — word band 800–1000 via cleaned-prose count, FAQ 2–3, internal links exactly 2, NO image placeholders/no images.json, definisi hanya di snippet, maks 2 self-mention Soltius)"
---

# Quality Validator Report — Markup vs Margin: Perbedaan dan Cara Menghitung Harga Jual

## Verdict: **pass**

Artikel lolos kedua gerbang QC validator. AI-detector heuristik memberi skor **0,04** (jauh di bawah ambang revise 0,30) dengan burstiness paragraf **0,504** dan kalimat **0,611** — keduanya di atas target ≥0,45, menandakan ritme manusiawi, bukan pola AI seragam. Web-lookup pada 6 passage distinctive tidak menemukan satu pun kecocokan verbatim di situs non-Soltius; topik markup-vs-margin ramai dibahas di blog bisnis Indonesia, tetapi frasa artikel ini orisinal. Seluruh rumus dihitung ulang benar, klaim kapabilitas SAP S/4HANA Retail terverifikasi lewat SAP Help Portal + SAP Learning, dan EYD/typografi rapi. Aman diteruskan ke curator (menunggu review user sesuai instruksi batch — validator tidak menjalankan curator).

## AI Detector (heuristic v2.0)
- Score: **0,04 / 1.0** (thresholds: revise ≥0,30, reject ≥0,50) → **pass**
- Paragraph burstiness (CV): **0,504** (target ≥0,45) — kuat, tidak seragam
- Sentence burstiness (CV): **0,611** (target ≥0,45) — kuat
- Top-30 vocab share: **0,485**
- Flags (1):
  - [low] `vocab-repetition`: Top 30 kata = 48,5% dari body (target <30%). **Acceptable / bukan penalti bermakna.** Artikel komparasi terfokus ~950 kata yang porosnya "markup", "margin", "harga", "jual", "biaya", "laba" secara alami mengulang istilah inti tersebut; flag hanya menambah 0,04 ke skor dan tidak mendekati ambang revise. Bukan pengenceran AI-style.
- Anti-AI manual re-check (di luar skrip): `Selain itu` = 0, `penting untuk di...` = 0, `dengan demikian` = 0, `di era digital / seiring perkembangan / tidak dapat dipungkiri` = 0. Em-dash (U+2014) = **2** (≤2, keduanya fungsional memisah rumus↔contoh di bullet konversi). Subtraksi memakai tanda minus sejati U+2212 (bukan hyphen/em-dash) — typografi benar.

## Plagiarism (web lookup of distinctive passages)
6 passage distinctive dicek via quoted WebSearch (passage yang murni rumus matematika standar diabaikan sesuai aturan skoring — "common/standard phrasings").

- ✅ "Seorang staf pricing menetapkan markup 50% lalu menganggarkan laba seolah marginnya juga 50%" — **clean.** Tidak ada verbatim; hasil hanya artikel bertema sama (kledo, pegadaian, boxhero, majoo, dst.), tanpa kecocokan frasa.
- ✅ "Mengira markup 50% berarti margin 50% membuat perusahaan melebih-lebihkan laba sebesar 16,7 poin persentase" — **clean.** Tidak ada verbatim.
- ✅ "Laba rupiahnya identik; yang berbeda hanya penyebutnya" — **clean.** Tidak ada verbatim.
- ✅ "Kesalahan paling mahal adalah menetapkan markup lalu menganggarkan laba seakan itu marginnya" — **clean.** Tidak ada verbatim (hasil = jawapos, boxhero, kledo bertema sama, frasa berbeda).
- ✅ Contoh inti (HPP Rp80.000 → markup 50% → harga jual Rp120.000 → margin 33,3%) — **catatan transparan, bukan hit.** Angka ini adalah contoh kanonik yang lazim dipakai banyak artikel markup-margin Indonesia (mis. contoh "Rina/dompet" Rp80.000→Rp120.000 muncul di beberapa sumber). Namun (a) angka murni fakta matematis yang ditentukan oleh HPP round-number, (b) artikel melabelinya *ilustrasi* secara eksplisit, dan (c) prosa kalimatnya berbeda kata & urutan — bukan >70% word-order overlap. Kontribusi dinilai partial minor.
- Rumus konversi (`Margin = Markup ÷ (1 + Markup)`, dll.) — **diabaikan** sebagai formula matematika standar (inherently high-overlap; sesuai aturan "ignore common/standard phrasings").
- **Aggregate plagiarism score: 0,02** (< 0,10 pass; tidak ada verbatim hit ≥20 kata di situs non-Soltius). Tautan ke soltius.co.id yang muncul adalah self-reference internal, bukan plagiarisme.

## Fact / formula re-verification (override: re-verify formula math + cited product-capability claims)
- **Math dihitung ulang independen — semua benar:**
  - 80.000 × 1,50 = 120.000; laba 40.000; margin 40.000 ÷ 120.000 = 33,3% ✓
  - Tabel konversi: 20→16,7 · 25→20 · 50→33,3 · 100→50 · 150→60% (tiap baris = Markup ÷ (1+Markup)) ✓
  - Konversi balik: Markup = Margin ÷ (1−Margin); 0,25 ÷ 0,75 = 33,3% ✓
  - Selisih kesalahan 50 − 33,3 = 16,7 poin persentase ✓
- **Klaim kapabilitas SAP S/4HANA Retail — terverifikasi (bukan fabrikasi):** SAP Help Portal (Sales Price Calculation / Margin Gross-Net) + SAP Learning "Executing Retail Pricing" mengonfirmasi sistem menghitung harga jual dari harga beli + planned markup (condition type AUFS) dan menghitung ulang margin kotor & bersih secara otomatis (backwards calculation). URL SAP Learning yang disitasi artikel valid & ada. Tidak ada condition type/T-code/versi karangan dalam body.
- **Klaim Shopify** (markup atas biaya, margin atas harga jual; satu transaksi → dua persentase) — standar & benar.

## Structure & EYD integrity (all apply in full)
- Frontmatter YAML lengkap; H1 ber-keyword; lead ≤80 kata (pain konkret + keyword); snippet "Ringkasnya:" (blockquote, ~55 kata) — definisi muncul **sekali saja**, tidak ada H2 "Apa itu..." yang mengulang. ✓
- Body 4 H2 (band 3–4) + `## FAQ` + `## Kesimpulan`; ≥1 H2 question-format (H2#2 & H2#3) ✓; ≥1 H2 praktis/tabel (H2#1 tabel contoh, H2#2 tabel konversi) ✓.
- FAQ = **3** Q&A (band 2–3); tiap jawaban memuat angka. ✓
- Kesimpulan ≤80 kata + 1 positioning line Soltius; soft CTA soltius.co.id sebagai baris terakhir terpisah. ✓
- Self-mention Soltius = **2** (positioning + CTA); framing "mengimplementasikan serta mendampingi" (implementer/pendamping, bukan builds). ✓
- EYD/typografi: Rp80.000 (tanpa spasi, titik ribuan), desimal koma 33,3%, italic istilah asing (*cost-plus pricing*, *ilustrasi*), minus U+2212 untuk pengurangan. Bersih.

## Batch override log (addendum §7 — recorded as N/A, not failed)
- **Word band 800–1000: COMPLIANT.** Skrip mentah menghitung 996 token (termasuk sel tabel/token rumus/heading) — tetap di dalam band; hitungan cleaned-prose editor = 947. Sesuai override, angka mentah skrip TIDAK dibaca sebagai >1000 fail. **N/A→compliant.**
- **FAQ 2–3: COMPLIANT** (3 Q&A).
- **Internal links = 2: COMPLIANT** (hub "solusi retail" + cousin "laporan laba rugi").
- **Image checks: N/A by design** — 0 `{IMAGE_NN}` + tidak ada images.json; stage image di-skip untuk batch ini. Tidak di-flag.
- Catatan editor (cousin memakai URL fallback; SKU tak di-expand) = minor, di luar cakupan verdict validator, tidak memblokir.

## Loop status
Revision loop **0** (first pass). Tidak ada revisi diperlukan; tidak melooping writer.

## Handoff
- Curator-ready: editor `recommendation: approve` + validator `verdict: pass`.
- Sesuai instruksi batch, validator **tidak** menjalankan curator dan **tidak** commit ke articles_history — batch berhenti di sini untuk review user.
