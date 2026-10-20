---
brief_id: "gasku-02"
editor_run_date: "2026-09-21"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.00
---

# Editor QC Report — Mobil BBG Brebet & Tersendat? Diagnosis Gejala Pasca-Konversi Gasku

## Recommendation
**approve**

Artikel ini lolos seluruh gerbang mutu. Anglenya (troubleshooting reaktif gejala pasca-konversi) benar-benar baru di klaster Gasku dan menjawab intent diagnostik yang belum digarap 9 artikel Gasku sebelumnya. Semua hedge kritis yang diminta sudah terpenuhi: Gagas dibingkai sebagai penyalur BBG lewat SPBG (bukan produsen gas, bukan bengkel/produsen converter kit), tidak ada nominal Rupiah karangan untuk converter kit/pemasangan, klaim hemat 30–55% diatribusikan tegas ke PGN, dan angka power loss ~8–19% kini diberi atribusi "literatur/kajian teknik mesin umum" (bukan spesifikasi resmi Gasku). Tidak ada superlatif, self-mention dalam batas, dan skor originalitas bersih (AI 0,04; tak ada verbatim non-Gagas ≥20 kata). Empat perbaikan diterapkan langsung; dua catatan minor bersifat non-blocking. Aman di-commit oleh kurator.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dash, tanpa opener/frasa AI; ritme paragraf bervariasi (CV 0,416); hedging jujur khas praktisi |
| Factual & energi-gas / CNG accuracy | 9 | 5/5 spot-check lolos; istilah reducer vs vaporizer akurat; semua hedge dossier dihormati |
| On-page SEO compliance | 9 | Seluruh checklist §3 lolos (title 49, desc 150, slug 44, 5 H2, 3 internal + 3 eksternal) |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata di bawah tiap H2; satu poin quotable/paragraf; FAQ FAQPage-ready |
| PGN Gagas framing discipline | 9 | Penyalur/distributor (menyalurkan Gasku via SPBG); ≤3 self-mention; positioning line + soft CTA |
| Internal linking | 8 | 3 tautan hadir & inline; cousin Gaslink sedikit dipaksakan tapi dibingkai netral ("penanganan CNG yang tertata") |
| FAQ quality | 9 | 6 Q&A, 40–80 kata, tiap jawaban memuat fakta/angka spesifik |
| Originality (plagiarism + AI-detector) | 10 | AI 0,04 (pass); tak ada verbatim non-Gagas ≥20 kata |

## What I fixed (changelog)
- **Atribusi power loss (tabel diagnosis):** "Power loss alami mode gas (rentang ~8–19%)" → "Power loss wajar mode gas (~8–19% menurut literatur teknik mesin)" — menghormati flag dossier bahwa angka ini adalah literatur teknik mesin umum, BUKAN spesifikasi resmi Gasku/PGN.
- **Atribusi power loss (FAQ "Kenapa konsumsi malah naik"):** menambahkan "menurut kajian teknik mesin umum", memberi gloss *power loss*, dan menegaskan "lonjakan konsumsi jauh di luar itu" agar klaim tidak terbaca sebagai fakta independen tervalidasi.
- **Kalimat prosedur switching (H2 #4):** merapikan kalimat pengantar yang berbelit ("...yang menurut dokumentasi akademik... umumnya konteks LPG, prosedur manualnya kira-kira begini:") menjadi satu kalimat bersih yang tetap mempertahankan atribusi akademik (UNIMMA) dan hedge konteks-LPG.
- **Frontmatter:** `word_count` 1456 → 1487 (menyesuaikan hasil polish; tetap di rentang 1.200–1.600).

## What I flagged (open issues)
- ⚠️ **Cousin link Gaslink** di H2 #5 adalah tautan paling lemah secara topik (produk industri/komersial dalam artikel troubleshooting kendaraan konsumen). *Rekomendasi:* dibiarkan karena ini cousin link wajib dari set bulan ini dan dibingkai netral; untuk artikel Gasku berikutnya, pertimbangkan cousin yang lebih dekat (mis. hub CNG saja) bila peta tautan mengizinkan.
- ⚠️ **Angka AFDC "36 bulan / 36.000 mil"** adalah referensi praktik keselamatan AS (internasional), sudah dibingkai benar sebagai "praktik keselamatan internasional / Badan energi AS (AFDC)" dan tidak disajikan sebagai regulasi interval inspeksi Indonesia. *Rekomendasi:* biarkan; hanya catatan agar tidak diubah jadi klaim regulasi lokal.
- ⚠️ **`dateModified` eksplisit** belum ada di meta block (freshness kini bersandar pada `publish_month: 2026-09`). *Rekomendasi:* CMS mengisi `dateModified` saat publish untuk menjaga prioritas sitasi GEO.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers (grep: 0)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (grep: 0)
- [x] No "Penting untuk dicatat / dipahami bahwa" (grep: 0)
- [x] "Dengan demikian" not overused (grep: 0)
- [x] Em-dash count ≤2 (grep U+2014: 0)
- [x] Varied paragraph lengths (burstiness CV 0,416; mix 1–6 kalimat)
- [x] Not every H2 → 3-bullet list (prosa + tabel + numbered list + bullet + FAQ)
- [x] No generic claims without numbers (200 bar, 8–19%, 1.200–1.500 rpm, 36 bln/36.000 mil, Rp 4.500, 30–55%)
- [x] No stacked hype adjectives (canggih/powerful/terdepan) — none
- [x] No service-dump paragraph — anchor tunggal di closing

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Gasku Rp 4.500/LSP, hemat 30–55% dibanding BBM | dossier ✓ + WebSearch (ANTARA, Kompas, merdeka) — klaim korporat PGN, diatribusikan "menurut PGN...diklaim" | pass |
| ISO 11439 = 200 bar reference working pressure tabung CNG | dossier ✓ (ISO 11439:2013) | pass |
| Sertifikasi teknis converter kit CNG wajib sejak Permenperin 70/M-IND/PER/7/2012 | dossier ✓ (Kemenperin, 2012) | pass |
| AFDC: inspeksi tabung CNG tiap 36 bulan / 36.000 mil oleh teknisi terlatih | dossier ✓ (AFDC) — dibingkai sebagai praktik internasional | pass |
| Power loss mode gas ~8–19% (fisika, bukan cacat) | dossier ✓ (studi retrofit 8–19%) — kini diatribusikan "literatur/kajian teknik mesin umum" | pass |

Framing check: Gagas = **menyalurkan** Gasku lewat SPBG (bukan produsen gas, bukan bengkel/produsen converter kit) — akurat. Tidak ada nominal Rupiah karangan untuk converter kit/pemasangan (hanya harga bahan bakar Rp 4.500/LSP yang tersumber). Instansi sertifikasi bengkel dibiarkan generik ("bengkel bersertifikat") sesuai flag dossier.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 49 chars / pos 0
- [x] Meta description 140–160 — actual: 150
- [x] Slug ≤60, kebab-case, keyword — actual: `gasku-mobil-bbg-brebet-gejala-pasca-konversi` (44)
- [x] H1 contains keyword ("...Pasca-Konversi Gasku")
- [x] H2 count 4–5 — actual: 5 body H2 (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#1, #2, #4); ≥1 honest/counter-conventional H2 (#5 "Kapan Berhenti Utak-atik Sendiri...")
- [x] Keyword in first 100 words (lead)
- [x] Definition snippet near top (~52 kata, blockquote "Ringkasnya")
- [x] ≥8 LSI terms — counted ~15 (brebet, tersendat, reducer, vaporizer, converter kit, sensor MAP/lambda, filter gas, mapping ECU, bi-fuel, injektor gas, power loss, SPBG, CNG, fine tuning, bengkel bersertifikat)
- [x] 3 internal links — Gasku (hub, lead) + Compressed Natural Gas (CNG) + Gaslink (cousins)
- [x] ≥1 external authoritative citation — actual: 3 (Kemenperin, ESDM/migas, AFDC)
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2–3 image placeholders — actual: 3 ({IMAGE_01/02/03}) dengan alt-text
- [x] ≥1 list + ≥1 table — numbered (switching) + bullet (DIY/bengkel) + tabel diagnosis
- [x] Word count 1,200–1,600 — actual: 1487

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 (#1 ~50, #2 ~48, #3 ~45, #4 ~52, #5 ~52 kata; masing-masing membuka dengan jawaban langsung)
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; freshness via `publish_month: 2026-09` (dateModified → CMS)

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as gas-energy provider (menyalurkan Gasku via SPBG) — NOT producer of gas/converter kit
- [x] ≤3 PGN Gagas self-mentions — actual: lead (Gasku hub) + aside H2 #5 + closing utama = sesuai budget brief; Gaslink = cousin link wajib (netral)
- [x] No unverifiable superlatives ("terbaik/nomor satu/termurah") — none
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier (Gasku transportasi, Gaslink industri/komersial, SPBG, CNG ~200 bar)
- [x] Closing uses a company_profile.md positioning line ("anak usaha PGN...bagian Subholding Gas Pertamina...menyalurkan Gasku lewat jaringan SPBG")
- [x] Soft website CTA present as FINAL line (ajakan kunjungi gagas.co.id; konsultatif, bukan "beli sekarang")
- [x] Hub link natural inline anchor di lead (bukan "BACA JUGA")

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `perawatan-kendaraan-bbg-gasku-jadwal-servis-uji-tabung` (gasku-04, Jul) — preventif/terjadwal
- Subtopic overlap (Jaccard estimate): ~0,18 (hanya "converter kit" & "bengkel"; gejala brebet, susah pindah mode, fine tuning ECU, sensor MAP, tabel diagnosis seluruhnya baru)
- Verdict: **distinct angle confirmed** — intent troubleshooting reaktif belum dipakai satu pun dari 9 artikel Gasku (01, 03, 04, 05, 06, 07 kompatibilitas, 08 performa/emisi, 09 TCO, serta 02-Jul konversi/penghematan)

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `gasku-02.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict pass; hanya 1 flag low: paragraph-low-variance)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.416** (di atas ambang strong-tell; sedikit di bawah ideal 0,45, severity low). Sentence CV 1,147; top-30 vocab share 0,286 (<0,35)
- [x] Plagiarism: 4 passage distinctif di-WebSearch — tidak ada verbatim non-Gagas ≥20 kata. Kecocokan tematik hanya di gagas.co.id/gasku dan sumber korporat/otoritatif (ANTARA/Kompas untuk fakta harga PGN, sudah diatribusikan) — dikecualikan. **plagiarism score: 0.00**
