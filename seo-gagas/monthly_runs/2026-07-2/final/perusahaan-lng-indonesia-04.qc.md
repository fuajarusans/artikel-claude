---
brief_id: "perusahaan-lng-indonesia-04"
editor_run_date: "2026-07-08"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.03
---

# Editor QC Report — Keselamatan LNG: Bahaya Kriogenik dan Standar Penanganan yang Benar

## Recommendation
**approve**

Draft yang kuat dan siap terbit. Angle keselamatan/K3 kriogenik benar-benar baru terhadap seluruh cluster LNG (part-1 hanya menyinggung BOG sebagai konteks; tak ada artikel yang menjadikan keselamatan sebagai subjek utuh). Semua fakta teknis terverifikasi terhadap dossier, dan — yang paling penting untuk topik ini — setiap guard framing dijaga persis: RPT dibingkai sebagai ledakan fisik (bukan pembakaran), ISO tank T75 sebagai "spesifikasi umum di pasar", ISO 45001:2018 di-scope untuk distribusi CNG (bukan LNG-spesifik), K3 dirujuk lewat UU 1/1970 + UU 13/2003 Pasal 87 + PP 50/2012 (tanpa mengarang nomor regulasi ESDM K3), tidak ada penyebutan LNG Hub Arun sebagai kredensial Gagas, dan tanpa superlatif "pionir/pemimpin pasar". AI-detector 0.04 (jauh di bawah ambang), tidak ada plagiarisme verbatim non-Gagas. Perbaikan editor hanya menyentuh item minor (meta description dari 163→155 karakter, tiga tightening flab, satu kalimat penutup H2 yang dihaluskan, penambahan `date_modified`). Tidak ada isu yang menuntut rework penulis/strategist.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tidak ada AI-opener; ritme paragraf bervariasi (1–6 kalimat); em-dash body =2; tidak ada bullet-only section |
| Factual & energi-gas / CNG accuracy | 10 | 5 klaim di-spot-check semua pass vs dossier; semua guard kriogenik dijaga persis |
| On-page SEO compliance | 9 | Meta/slug/H2/LSI/link/FAQ lengkap; meta description diperbaiki ke 155 char |
| GEO extractability (§2a) | 8 | Jawaban 40–60 kata di H2 #1/#2/#5; H2 #3 (31) & #4 (36) sedikit di bawah 40 tapi self-contained & format-matched |
| PGN Gagas framing discipline | 10 | 1 self-mention; provider/distributor beyond-pipeline; ISO 45001 scoped CNG; tanpa superlatif |
| Internal linking | 10 | 3 link (hub di lead + 2 cousin), anchor deskriptif, inline natural, tanpa BACA JUGA |
| FAQ quality | 9 | 6 Q&A, tiap 40–80 kata, FAQPage-parseable, tiap jawaban memuat angka/fakta |
| Originality (plagiarism + AI-detector) | 10 | AI 0.04; tidak ada verbatim non-Gagas ≥20 kata |

## What I fixed (changelog)
- Meta description 163 → 155 karakter (masuk band 140–160): "...mitigasi, dan standar penanganan yang benar." → "...mitigasi, dan standar penanganannya."
- Tightened flab (3×): "Sebagai konteks pembanding" → "Sebagai pembanding"; "Intinya memastikan uap..." → "Pastikan uap..."; digabung "RPT bukan ledakan kimia. Ini adalah ledakan fisik..." → "RPT bukan ledakan kimia, melainkan ledakan fisik..." (menjaga guard RPT).
- Menghaluskan kalimat penutup H2 #5 yang janggal: "...justru memahami mekanismenyalah yang membuat mitigasi jadi tepat sasaran." → "...justru dengan memahami mekanismenya, mitigasi bisa jadi tepat sasaran."
- Menambahkan `date_modified: "2026-07-08"` ke meta block (freshness/GEO §2a).
- Memperbarui `word_count` frontmatter ke 1564 (hitungan gaya dokumen: mengecualikan teks brief {IMAGE_NN}, baris pemisah tabel, dan URL di dalam link).

## What I flagged (open issues)
- ⚠️ Jawaban langsung tepat di bawah H2 #3 (31 kata) & H2 #4 (36 kata) sedikit di bawah zona GEO 40–60 kata. *Rekomendasi*: dibiarkan — keduanya sudah self-contained; H2 #3 mengarah ke numbered list (format-match yang benar untuk how-to), H2 #4 sudah menjawab "standar apa yang menopang" secara jelas. Menambah kata berisiko padding. Bukan penghalang commit.
- ⚠️ Meta title memimpin dengan "Keselamatan LNG" (angle) alih-alih keyword utuh "Perusahaan LNG Indonesia"; "LNG" ada di posisi 12 (dalam 30 char pertama). *Rekomendasi*: dibiarkan — ini artikel pendukung dengan intent "keselamatan LNG"; keyword utuh muncul di frontmatter `primary_keyword` dan hub link. Sesuai praktik supporting-article.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (0 kemunculan sebagai opener)
- [x] No "Penting untuk dicatat / dipahami bahwa"
- [x] "Dengan demikian" not overused (0 kemunculan)
- [x] Em-dash count ≤2 (body =2: baris ISO tank T75 & UU/PP SMK3; em-dash di {IMAGE_NN} adalah teks brief desain, tidak dihitung sebagai body prose)
- [x] Varied paragraph lengths (1–6 kalimat; CV=0.332 di atas floor 0.30)
- [x] Not every H2 → 3-bullet list (H2 #1/#4 prosa, #2 prosa+tabel, #3 numbered list, #5 prosa+bullet)
- [x] No generic claims without numbers (-162°C, ~5–15%, ~19,5%, ~200°C, 1/600, ~649/315°C, 22.000/45.500 L)
- [x] No stacked hype adjectives
- [x] No service-dump paragraph (1 anchor Gagas di penutup)

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| LNG disimpan ~-162°C; volume menyusut ~1/600 | dossier ✓ (core facts, high) | pass |
| Flammability range metana ~5–15% volume di udara; LNG tak menyala sebagai cairan | dossier ✓ (Center for LNG, high) | pass |
| RPT = ledakan fisik tanpa api (bukan pembakaran), beda suhu ~200°C | dossier ✓ (Wikipedia/ioMosaic/SINTEF, high) — guard dijaga | pass |
| ISO tank T75: 20 kaki ~22.000 L / 40 kaki ~45.500 L, "spesifikasi umum di pasar" | dossier ✓ (medium; hedge "bukan patokan tetap" dipertahankan) | pass |
| SMK3 = UU 1/1970 + UU 13/2003 Ps.87 + PP 50/2012, selaras ISO 45001:2018; ISO 45001 Gagas untuk distribusi CNG | dossier ✓ + company_profile.md; TANPA nomor regulasi ESDM K3 spesifik (guard dijaga) | pass |

Verifikasi tambahan: WebSearch mengonfirmasi tidak ada framing yang keliru; klaim regulasi & teknis konsisten dengan sumber publik topikal (tanpa mengangkat nomor regulasi ESDM K3 yang di-flag dossier).

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 46 char / "LNG" pada pos. 12
- [x] Meta description 140–160 — actual: 155 (setelah fix; sebelumnya 163)
- [x] Slug ≤60, kebab-case, keyword — actual: `keselamatan-lng-bahaya-kriogenik-penanganan` (43)
- [x] H1 contains keyword (LNG) — "Keselamatan LNG: Bahaya Kriogenik dan Standar Penanganan yang Benar"
- [x] H2 count 4–5 — actual: 5 body H2 (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1 "Apakah LNG Berbahaya?"); ≥1 honest/counter-conventional (#5 "Miskonsepsi...")
- [x] Keyword in first 100 words (lead: "penyaluran LNG di Indonesia" + "LNG" berulang)
- [x] Definition snippet near top (blockquote "Ringkasnya", ~55 kata)
- [x] ≥8 LSI terms — counted: 19 (keselamatan LNG, kriogenik, cold burn, asfiksia, boil-off gas, RPT, ISO tank, T75, K3, flammability range, jet fire, -162, venting, pressure-relief, SMK3, ISO 45001, APD, ventilasi, SMK3)
- [x] 3 internal links (1 hub + 2 cousins) — dest: perusahaan-lng-indonesia (hub, lead), perusahaan-cng-indonesia (cousin, H2 #4), gaslink (cousin, Kesimpulan)
- [x] ≥1 external authoritative citation — actual: 2 frontmatter (SIGTTO, DNV) + inline (Center for LNG, SIGTTO, DNV)
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 3 ({IMAGE_01/02/03}, semua dengan alt-text)
- [x] ≥1 list + ≥1 table — 1 numbered (prinsip), 1 bullet (miskonsepsi), 1 tabel (bahaya→mitigasi)
- [x] Word count 1,200–1,600 — actual: 1564 (gaya dokumen); scanner raw tokenizer 1613 (menghitung pipe tabel/URL)

### C2. GEO extractability (seo_playbook.md §2a)
- [~] Direct 40–60-word answer setelah tiap H2 — #1 (54), #2 (50), #5 (41) di zona; #3 (31) & #4 (36) sedikit di bawah tapi self-contained & format-matched (lihat flag)
- [x] Setiap paragraf body membuat satu poin yang independen & verifiable (satu klaim + fakta)
- [x] FAQ FAQPage-parseable; `date_modified: 2026-07-08` ada di meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Gagas dibingkai sebagai anak usaha PGN/Subholding Gas Pertamina yang menyalurkan gas bumi beyond-pipeline — BUKAN produsen LNG, BUKAN "perusahaan LNG" penuh
- [x] ≤3 self-mentions — actual: 1 (penutup "Kesimpulan")
- [x] No unverifiable superlatives — 0 (grep pionir/pemimpin pasar/terbaik/nomor satu = nihil)
- [x] Product names + specs match dossier/product_matrix (ISO tank T75, K3/SMK3, ISO 45001 scoped CNG)
- [x] Closing uses positioning line (anak usaha PGN, Subholding Gas Pertamina, ISO 45001:2018 untuk distribusi CNG, budaya K3)
- [x] Soft website CTA sebagai baris FINAL, setelah Kesimpulan (kunjungi gagas.co.id; konsultatif, bukan "beli sekarang")
- [x] Hub link natural inline anchor di lead ("penyaluran LNG di Indonesia") — BUKAN callout BACA JUGA

### E. Anti-cannibalization spot check
- Closest prior article (keyword_slug=perusahaan-lng-indonesia): part-1 cluster — `lng-beyond-pipeline-konsep-lng-hub`, `lng-untuk-industri-kapan-lebih-cocok-dari-cng`, `memilih-penyedia-lng-indonesia-kriteria` (menyinggung BOG/keselamatan kriogenik hanya sebagai satu poin sampingan).
- Subtopic overlap (Jaccard estimate): ~0.2 (irisan hanya "boil-off gas" & istilah "-162°C/kriogenik"; di sini menjadi SUBJEK dengan mekanisme+mitigasi).
- Catatan: entry `perusahaan-lng-indonesia-04` di index.json adalah artikel batch 2026-07 ("Rantai Pasok LNG", angle_hash 35af487e7788) — batch BERBEDA; angle keselamatan/K3 (angle_hash 23900a1c5a5b) unik.
- Verdict: distinct angle confirmed.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran clean; `perusahaan-lng-indonesia-04.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: 0.04 (verdict pass)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: 0.332 (1 flag low-severity "paragraph-low-variance" vs target scanner 0.45; di atas floor editorial 0.30 — diterima; sentence burstiness 0.819, top30 vocab share 0.267 sehat)
- [x] Plagiarism: 8 kandidat distinctive web-checked (4 di-WebSearch: risk-profile LNG/CNG, klausa PP 50/ISO 45001, RPT ledakan fisik, opener miskonsepsi) — TIDAK ada verbatim non-Gagas ≥20 kata. Yang muncul hanya halaman topikal (Wikipedia CNG, konsultan ISO, joecy.org, Indonesia Safety Center) yang membahas fakta common-domain yang sama, tanpa lifting kalimat. Plagiarism score: 0.03.

## The shipping question
Jika artikel ini tayang di gagas.co.id besok dan dibaca praktisi energi/gas senior (dan pembeli industri skeptis): ya, WEBARQ Promote layak bangga. Akurat, tidak dramatis, jujur pada risiko nyata, dan tidak meng-oversell Gagas. **Approve.**
