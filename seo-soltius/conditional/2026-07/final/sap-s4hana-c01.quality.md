---
brief_id: "sap-s4hana-c01"
validator_run_date: "2026-07-06"
verdict: "pass"
ai_score: 0.15
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-07 — style_addendum.md §7 overrides applied (word band 800–1000, FAQ 2–3, internal links 2, image checks N/A by design)"
---

# Quality Validator Report — SAP S/4HANA: Fitur Unggulan dan Bedanya dengan ERP Lain

## Verdict: **pass**

Editor recommendation `approve` diwarisi dan dikonfirmasi. Skrip heuristik memberi AI score 0,15 (verdict pass; ambang revise 0,30) dengan satu flag borderline yang saya adjudikasi manual di bawah (paragraph CV 0,298 — artefak metode pengukuran; CV teks utuh 0,379). Delapan passage distinctive dicek via quoted WebSearch: nol verbatim hit di situs non-Soltius, skor plagiarisme 0,00. Cek EYD dan integritas struktur bersih. Artikel siap untuk review user; curator TIDAK dijalankan sesuai instruksi batch (stop setelah verdict).

## AI Detector (heuristic v2.0)

- Score: **0.15** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → verdict skrip: **pass**
- Paragraph burstiness (CV): **0.298** metode skrip (target ≥0.45) — lihat adjudikasi di bawah
- Sentence burstiness: **1.066** (target ≥0.45 — jauh di zona human)
- Top-30 vocab share: **0.323** (di bawah ambang flag 0.35)
- Flags (1):
  - [high] paragraph-uniformity: "Paragraph word-count CV=0.298 (target >=0.45; <0.30 is strong AI tell)"

### Adjudikasi manual flag paragraph-uniformity (borderline 0.002 di bawah floor 0.30)

Sesuai role guardrail ("jangan approve CV < 0.30 tanpa re-read"), saya mereplikasi perhitungan skrip dan membaca ulang seluruh artikel terhadap style_guide §5. Temuan:

1. **Artefak metode pengukuran.** Skrip mengecualikan paragraf <5 kata dari perhitungan CV — tepat mengecualikan perangkat ritme manusiawi yang ada di artikel (paragraf 4 kata "S/4HANA bukan jawaban universal." dan tidak menghitung penuh CTA 10 kata secara proporsional kecil). Dengan SEMUA paragraf prosa dihitung (17 paragraf, metode teks utuh), CV = **0.379** — konsisten dengan angka editor (0,38) dan di atas floor strong-tell 0,30.
2. **Definisi tell §5 terpenuhi secara substantif.** Style guide §5 mendefinisikan tell sebagai "symmetric paragraph lengths (all ~4 sentences)" dengan remedi "force 1–6 sentence variation". Artikel memuat paragraf 1 kalimat (2×), 2 kalimat, dan 3 kalimat, diselingi numbered list 5 item dan tabel 6 baris — variasi 1–6 kalimat ADA.
3. **Sumber keseragaman = spesifikasi batch, bukan mesin.** Band 35–58 kata per paragraf adalah konsekuensi struktural style_addendum §5 (jawaban langsung 40–60 kata per H2, FAQ 30–60 kata, snippet 40–60 kata, lead/kesimpulan ≤80 kata) pada artikel 946 kata. Melempar revise untuk "memperbaiki" CV akan memaksa writer melanggar band addendum itu sendiri.
4. **Semua sinyal statistik lain human:** sentence CV 1,066 (rentang kalimat 1–40+ kata), nol lexical tell, vocab share di bawah ambang.

Keputusan: flag **diterima sebagai borderline-justified, tidak menghalangi pass**. Bukan waiver diam-diam — didokumentasikan di sini untuk reviewer.

### Manual anti-AI read (style_guide §5, seluruh 12 pola)

- Openers kosong ("Di era digital", dst.): 0 — lead dibuka pain konkret
- "Selain itu" pembuka paragraf: 0 kemunculan sama sekali
- "Penting untuk dicatat/diingat/dipahami": 0
- "Dengan demikian": 0; "Sebagai kesimpulan": 0
- Em-dash: **0** (maks 2)
- Setiap H2 → 3-bullet list: tidak — mix prosa / numbered list / tabel
- Klaim generik tanpa angka: tidak — 12+ angka spesifik inline (1979, 1992, 2004, 3 Feb 2015, 2408, 2025, 2027, 2030, 2040, dst.)
- Hype adjectives (canggih/powerful/seamless/terdepan/revolusioner): 0
- Service-dump Soltius: tidak — 2 mention sesuai addendum §6
- Over-hedging: tidak — fakta definitif, hedging hanya pada honest hedging yang disengaja

## Plagiarism (web lookup of distinctive passages)

8 candidate passages dicek via quoted WebSearch (query markdown skrip dibersihkan dari markup `##`/`**`/`*` agar quoted search valid):

- ✅ Passage 1: "Keunggulan SAP S/4HANA bukan daftar fitur lepas; in-memory, Fiori, analitik tertanam..." — **clean**; tidak ada halaman dengan frasa verbatim (hasil pencarian hanya artikel S/4HANA generik pihak ketiga tanpa kalimat ini)
- ✅ Passage 2: "Mainstream maintenance ECC berakhir akhir 2027, dengan opsi extended maintenance berbayar hingga akhir 2030." — **clean**; fakta industri umum, semua sumber yang muncul berbahasa Inggris (soapeople.com, seidor.com, theregister.com), nol verbatim Indonesia
- ✅ Passage 3: "SAP S/4HANA tersedia dalam tiga opsi deployment: on-premise, SAP S/4HANA Cloud Private Edition..." — **clean**; kategori fakta produk standar (inherently high-overlap, ignorable by rule); hasil hanya halaman deployment-options berbahasa Inggris
- ✅ Passage 4: "Sebagai SAP Platinum Partner melalui United VARs, Soltius mengimplementasikan, memigrasikan..." — **clean by rule**; hit hanya di soltius.co.id + sap.com = self-reference/positioning line pre-approved yang disengaja (diabaikan sesuai aturan scoring)
- ✅ Passage 5: "Laporan operasional berjalan langsung di atas data transaksi live, tanpa replikasi ke sistem BI..." — **clean**; tidak ada hasil relevan sama sekali
- ✅ Passage 6: "SAP S/4HANA melanjutkan lini fungsional modul SAP klasik..." — **clean**; nol verbatim
- ✅ Passage 7: "Universal Journal menyatukan line item Financial Accounting (FI) dan Controlling (CO) dalam satu tabel ACDOCA..." — **clean**; konsep ACDOCA ubiquitous di sumber Inggris (cbs-consulting, sap-press, SAP Community) tetapi tidak ada verbatim Indonesia
- ✅ Passage 8: "Fitur unggulan S/4HANA bersumber dari arsitekturnya, bukan dari panjangnya daftar modul." — **clean**; nol verbatim

**Aggregate score: 0.00** (0 exact hit × 0.05 + 0 partial hit × 0.02). Tidak ada passage dengan verbatim hit ≥20 kata di situs non-Soltius. → verdict plagiarisme: **pass**.

## EYD & integritas struktur (cek penuh per addendum §7)

- EYD: bersih untuk publikasi web B2B. Istilah asing dimiringkan konsisten (*batch*, *client-server*, *embedded analytics*, *go-live*); serapan benar ("kueri"). Dua deviasi minor yang sudah diflag editor dipertahankan sadar demi konsistensi korpus: "multi-entitas" (EYD ketat: "multientitas") dan "pasca *go-live*" (bentuk terikat) — non-blocking, konsisten dengan seluruh batch/benchmark. Catatan mikro non-blocking: "deployment" tidak dimiringkan (konvensi korpus klien).
- Struktur: frontmatter lengkap & valid (meta_title 53, meta_description 160, slug 39, 2 internal_links, 2 external_citations); H1 = title; lead 56 kata; snippet blockquote ±50 kata (satu-satunya lokasi definisi — cek repetisi definisi lolos); 4 body H2 (2 question-format) + FAQ + Kesimpulan; tabel 6-dimensi utuh; numbered list 5 fitur dengan lead-in bold; CTA soltius.co.id = baris terakhir terpisah dari Kesimpulan.

## Overridden checks (style_addendum §7 — recorded as compliant/N/A, NOT failed)

| Check | Default skrip/pipeline | Batch override | Status |
|---|---|---|---|
| Word count | 1.500–1.800 | **800–1000** | ✅ compliant — 946 clean (editor) / 985 raw (skrip), keduanya dalam band |
| FAQ | 5–8 Q&A | **2–3** | ✅ compliant — 3 Q&A, jawaban 37–41 kata |
| Internal links | 3 | **2** (1 hub + 1 cousin) | ✅ compliant — tepat 2 (migrasi-erp-ke-cloud + 8-modul-sap) |
| Image placeholder / images.json | wajib | **0 by design** | **N/A** — 0 `{IMAGE_NN}` ditemukan ✓, tidak ada images.json ✓, sesuai desain batch; TIDAK diflag |

## Loop status

This is revision loop **0**. Verdict pass — no revision needed. Sesuai instruksi batch conditional 2026-07: **curator TIDAK dijalankan**, tidak ada commit ke articles_history; artikel menunggu review user di `conditional/2026-07/final/`.
