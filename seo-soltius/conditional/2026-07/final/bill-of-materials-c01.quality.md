---
brief_id: "bill-of-materials-c01"
validator_run_date: "2026-07-06"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-07 — style_addendum.md §7 overrides applied (word band 800–1000; FAQ 2–3; internal link 2; image checks N/A by design)"
---

# Quality Validator Report — Bill of Materials (BOM): Pengertian, Jenis, dan Contohnya

## Verdict: **pass**

Artikel lolos kedua gerbang. AI detector heuristik v2.0 memberi skor 0.04 (jauh di bawah ambang revise 0.30) dengan burstiness paragraf 0.479 (di atas target 0.45) dan burstiness kalimat 0.987 — ritme tulisan sangat manusiawi. Delapan passage plagiarisme paling distingtif dicek via quoted WebSearch: nol exact match, nol partial near-match (>70% overlap) di situs non-Soltius; skor agregat 0.00. Satu flag low (vocab-repetition 35,9%) di-waive dengan alasan tercatat di bawah. Editor merekomendasikan approve; validator konkur. Kurator TIDAK dijalankan — batch berhenti di sini untuk review user (instruksi batch).

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → **pass**
- Paragraph burstiness (CV): **0.479** (target ≥0.45 — lolos; <0.30 = strong AI tell, tidak terjadi)
- Sentence burstiness: **0.987**
- Top-30 vocab share: **0.359**
- Word count (token method): 985 | paragraf: 20 | kalimat: 41
- Flags (1):
  - [low] `vocab-repetition`: Top 30 words = 35,9% dari body (target <30%) — **DI-WAIVE**. Alasan: artikel terminologi-padat 900 kata; entity BOM / komponen / produk / level sengaja tidak dirotasi sinonim demi entity-clarity GEO (style_addendum §5: "Entity jelas"). Kontribusi flag (+0.04) sudah termasuk dalam skor 0.04 yang tetap pass. Konsisten dengan penilaian editor (qc.md, open issue #1).
- Zero pattern-flags lain: tidak ada filler era, "Penting untuk dicatat", "Selain itu" pembuka, "Dengan demikian" overuse, "Sebagai kesimpulan". Em-dash: **0** (grep independen validator: 0).
- Manual re-read: tidak diperlukan re-read borderline (skor bukan 0.28–0.32), tetapi spot-read tetap dilakukan — paragraf 1-kalimat disengaja ("Kegagalannya bukan pada perangkat lunak…") memberi variasi ritme yang sehat; tanpa struktur listicle monoton.
- Raw script output: `bill-of-materials-c01.id.quality-input.json` (folder yang sama).

## Plagiarism (web lookup of distinctive passages)

8 candidate passages dicek dengan quoted WebSearch (query markdown-artifact dibersihkan ke frasa prosa murni):

- ✅ Passage 1: "Struktur BOM bertingkat dibaca per level: Level 0 adalah produk jadi, Level 1 sub-assembly, Level 2 komponen atau bahan baku" — clean. Hasil hanya topikal (hashmicro, linovhr, 8thinktank, dll.); tidak ada frasa verbatim. Konsep Level 0/1/2 = definisi industri standar (kategori ignorable), tetapi phrasing artikel tetap orisinal.
- ✅ Passage 2: "Sumbu fungsi dokumen memisahkan Engineering BOM (EBOM)… dari Manufacturing BOM (MBOM)…" — clean. Framing "sumbu fungsi dokumen" distingtif dan tidak ditemukan verbatim di mana pun.
- ✅ Passage 3: "Multi-level (indented) BOM menampilkan seluruh struktur bertingkat Level 0-1-2 dan seterusnya…" — clean. Hasil pencarian semuanya artikel berbahasa Inggris (mrpeasy, katana, arena); tidak ada match Indonesia verbatim.
- ✅ Passage 4: "Dari pesanan 100 kursi… MRP menurunkan kebutuhan 500 roda kastor, 400 baut M8, dan 80 m² kain pelapis" — clean. Nol hasil relevan; ilustrasi numerik orisinal.
- ✅ Passage 5: "BOM dibaca empat proses inti sekaligus: perencanaan kebutuhan material, produksi, pengadaan, dan product costing" — clean. Tidak ditemukan verbatim; substansi diatribusikan inline ke SAP Learning (sitasi intensional, bukan plagiarisme).
- ✅ Passage 6: "Single-level BOM hanya menampilkan satu tingkat, yaitu produk jadi beserta komponen langsungnya" — clean. Definisi standar (inherently high-overlap, kategori ignorable); phrasing terdekat di web ("hanya menampilkan komponen langsung dari produk akhir") <70% word-order overlap, bukan partial hit.
- ✅ Passage 7: "BOM tersusun atas BOM header yang memuat base quantity dan BOM item…" — clean. Deskripsi SAP-official yang memang kita sitasi; tidak verbatim dengan sumber mana pun.
- ✅ Passage 8 (soft CTA): "Untuk mendiskusikan penataan BOM dan kesiapan SAP S/4HANA Manufacturing di perusahaan Anda, kunjungi soltius.co.id" — clean. Tidak ada match.

- Exact matches (non-Soltius): **0** × 0.05 = 0.00
- Partial near-matches (non-Soltius): **0** × 0.02 = 0.00
- Verbatim hit ≥20 kata: **tidak ada**
- **Aggregate score: 0.00** → pass (ambang: pass <0.10)

## Structure integrity & EYD (cek penuh, dengan overrides addendum)

| Check | Hasil | Status |
|---|---|---|
| Word count 800–1000 (OVERRIDE addendum §7) | 898 (metode clean editor) / 985 (metode token script) — keduanya dalam band | **compliant (N/A vs band default 1.500–1.800)** |
| FAQ 2–3 (OVERRIDE) | 3 Q&A, jawaban 30–60 kata, tiap jawaban memuat fakta/angka | **compliant (N/A vs default 5–8)** |
| Internal link 2 (OVERRIDE) | tepat 2: hub `digital-manufaktur-sistem` (lead) + cousin WMS (H2 #3) | **compliant (N/A vs default 3)** |
| Image placeholder / images.json (OVERRIDE) | grep `{IMAGE_`: 0; tanpa images.json | **N/A — compliant BY DESIGN (addendum §3/§7)** |
| Struktur H | 1× H1 + 3 body H2 (2 question-format) + FAQ + Kesimpulan | pass |
| Lead ≤80 kata tanpa roadmap | 58 kata | pass |
| Definition snippet blockquote 40–60 kata | 45 kata ("Ringkasnya:"); definisi muncul HANYA sekali — jawaban langsung tiap H2 berisi poin baru | pass |
| Elemen terstruktur ≥1 | 2 tabel (jenis BOM; struktur bertingkat 8 baris) | pass |
| Angka spesifik inline ≥4 | >10 (edisi ke-18; 6 format; Level 0/1/2; 0,8 m²; 5; 4; 100→500/400/80; 4 proses) | pass |
| Kesimpulan ≤80 kata + 1 positioning line + soft CTA baris akhir | 65 kata; 2 self-mention total (max 2) | pass |
| Frontmatter meta block | lengkap (meta_title 57; meta_desc 151; slug 41; 2 internal_links; 2 external_citations; word_count terisi) | pass |
| Sitasi eksternal otoritatif 1–2 | 2 (ASCM Dictionary; learning.sap.com) — keduanya inline | pass |
| EYD | desimal koma "0,8"; "apa pun" terpisah; "Anda" kapital; istilah asing italik pada sebutan pertama; kopula lengkap; tanpa typo terdeteksi | pass |

Catatan minor non-blocking: "meng-explode" di FAQ tampil tanpa italik sedangkan di body H2 #3 ditulis "*explode*" italik — inkonsistensi tipografis kecil, bukan pelanggaran EYD; tidak menghalangi pass.

## Loop status

Revision loop **0**. Verdict pass — tidak ada revision instructions.

## Aggregate

- AI verdict: **pass** (0.04)
- Plagiarism verdict: **pass** (0.00)
- Editor recommendation: **approve**
- **Overall verdict: PASS** (worst-of aggregation)

Per instruksi batch conditional 2026-07: kurator TIDAK dijalankan dan tidak ada commit ke `articles_history/` — artikel menunggu review user di `conditional/2026-07/final/`.
