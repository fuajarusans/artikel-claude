---
brief_id: "perusahaan-cng-indonesia-04"
editor_run_date: "2026-07-08"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.03
---

# Editor QC Report — Pertanyaan Wajib untuk Calon Penyedia CNG (dan Alarm Jawabannya)

## Recommendation
**approve**

Draf ini masuk kategori kuat dan langsung siap-terbit setelah perbaikan minor di tempat. Sudutnya (skrip pertanyaan due-diligence + red-flag-per-jawaban + bukti dokumen yang diminta) jelas berbeda dari artikel cluster sebelumnya (7 kriteria / 7 kesalahan / layanan / keandalan), vendor-netral, dan berbobot untuk pembeli B2B. Semua fakta legal/regulasi yang sensitif sudah benar dan ter-hedge sesuai dossier: dasar hukum IUN = Permen ESDM 4/2018 jo. 19/2021 (bukan 32/2021, yang diposisikan hanya sebagai regulasi inspeksi/keselamatan → "bukti hasil inspeksi"); IUN (ESDM) vs Hak Khusus (BPH Migas) dibedakan tegas; CNG beyond-pipeline "umumnya" cukup IUN (hedge utuh). Tidak ada nomor izin, jam-SLA benchmark, atau superlatif ("pionir/pemimpin pasar") yang dikarang. Satu-satunya isu editorial nyata (11 em-dash, tanpa outbound authoritative link di badan) sudah saya perbaiki langsung. AI-detector 0.04 dan tidak ada verbatim non-Gagas ≥20 kata. Aman untuk di-commit.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Ritme paragraf bervariasi (13–96 kata, CV 0.39), tak ada cliche AI; em-dash sudah dibersihkan dari prosa. |
| Factual & energi-gas / CNG accuracy | 10 | Semua klaim legal/regulasi cocok dossier + product_matrix; hedge kritis utuh. |
| On-page SEO compliance | 9 | Meta/slug/H1/keyword/definition/FAQ lengkap; outbound authoritative link ditambahkan. |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata di tiap H2 (47/60/51/50/50); satu klaim quotable per paragraf; date_modified ditambah. |
| PGN Gagas framing discipline | 10 | Penyedia/distributor CNG (menyalurkan), 1 self-mention + CTA, tanpa superlatif. |
| Internal linking | 10 | 3 anchor inline natural (hub di lead + Gaslink + Gasku), tanpa "BACA JUGA". |
| FAQ quality | 9 | 6 Q&A dari PAA, tiap jawaban 40–70 kata, self-contained. |
| Originality (plagiarism + AI-detector) | 10 | AI 0.04; tak ada verbatim non-Gagas ≥20 kata pada prosa orisinal. |

## What I fixed (changelog)
- **Em-dash: 11 → 3 (semua tersisa hanya di dalam `{IMAGE_NN}` — 0 di prosa badan & meta).** Mengganti em-dash prosa dengan koma/titik dua/tanda kurung di lead (§1), definition snippet, paragraf §"Kenapa daftar pertanyaan" (line 48), paragraf red-flag (line 95), dan Kesimpulan. Batas style_guide §5 ≤2 kini terpenuhi dengan margin lebar.
- **Meta description**: menghapus em-dash ("... referensi — plus ..." → "... referensi, plus ..."); panjang tetap ~150 char (dalam 140–160).
- **Outbound authoritative link (SEO §3 wajib ≥1)**: menambahkan tautan inline ke daftar badan usaha niaga gas bumi Ditjen Migas (URL dari dossier citation #1) pada frasa yang sudah ada ("daftar badan usaha niaga gas bumi aktif yang dipublikasikan Ditjen Migas") — tidak menambah fakta baru, hanya menautkan klaim yang sudah tertulis.
- **Frontmatter**: `word_count` 1522 → 1516 (setelah edit); menambahkan `date_modified: "2026-07-08"` untuk sinyal freshness GEO §2a.

## What I flagged (open issues)
- ⚠️ Paragraf burstiness CV = 0.389 memicu flag *low* di skrip (target internal skrip ≥0.45), meski jauh di atas ambang wajib 0.30 dan AI-score hanya 0.04. *Rekomendasi*: tidak perlu tindakan — variasi 13–96 kata sudah human; menaikkan variance paksa berisiko choppy/padding. Dibiarkan by design.
- ⚠️ Meta description menonjolkan varian "penyedia CNG" (bukan frasa persis "perusahaan CNG"). *Rekomendasi*: biarkan — keyword persis sudah ada di `primary_keyword`, slug, H1, dan anchor hub di 100 kata pertama; memaksa "perusahaan" ke deskripsi mengurangi keterbacaan. Bukan pemblokir.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers (grep bersih)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (grep bersih)
- [x] No "Penting untuk dicatat / dipahami bahwa" (grep bersih)
- [x] "Dengan demikian" not overused (0 kemunculan)
- [x] Em-dash count ≤2 — actual: 0 di prosa/meta (3 tersisa hanya di dalam `{IMAGE_NN}` design brief, harus dipertahankan)
- [x] Varied paragraph lengths (13–96 kata; CV 0.39)
- [x] Not every H2 → 3-bullet list (campuran prosa + 1 tabel + 1 bullet list)
- [x] No generic claims without numbers (20 tahun, 2–3 referensi, 8–10 pertanyaan, 100 pekerja, audit 3 tahun, dst.)
- [x] No stacked hype adjectives (grep bersih: tak ada canggih/powerful/terdepan/terbaik)
- [x] No service-dump paragraph (1 anchor di closing)

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Dasar hukum niaga gas bumi hilir (termasuk CNG) = Permen ESDM 4/2018 jo. 19/2021 | dossier ✓ (JDIH BPK, peraturan.bpk.go.id/Home/Details/142498) | pass |
| Permen ESDM 32/2021 = inspeksi teknis/keselamatan instalasi, BUKAN dasar izin niaga; hanya "bukti hasil inspeksi" | dossier ✓ (ESDM sosialisasi 32/2021) | pass |
| IUN mencakup niaga CNG/LNG/BBG; berlaku maks. 20 tahun & dapat diperpanjang | dossier ✓ (Ditjen Migas daftar BU niaga) | pass |
| Hak Khusus = instrumen BPH Migas via lelang untuk pengangkutan gas via pipa; CNG beyond-pipeline "umumnya" cukup IUN | dossier ✓ + hedge sesuai flag dossier | pass |
| ISO 45001:2018 & SMK3 (PP 50/2012) wajib bagi perusahaan ≥100 pekerja/risiko tinggi, audit tiap 3 tahun | dossier ✓ (ISO.org + PP 50/2012) | pass |
| PGN Gagas: anak usaha PGN/Subholding Gas Pertamina; ISO 9001/45001/37001 (2025) | company_profile.md via dossier ✓ | pass |

Tidak ada nomor izin fiktif, tanggal regulasi keliru, nama produk karangan, atau klaim "PGN Gagas memproduksi gas". Framing = menyalurkan/mendistribusikan/melayani. Semua lolos.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword-relevan) — actual: 43 char ("Pertanyaan Wajib ke Penyedia CNG + Red Flag")
- [x] Meta description 140–160 — actual: ~150 char
- [x] Slug ≤60, kebab-case, keyword — actual: `pertanyaan-penyedia-cng-indonesia` (33 char)
- [x] H1 contains keyword variant ("Penyedia CNG")
- [x] H2 count 4–5 (konten) — actual: 5 H2 konten + FAQ + Kesimpulan
- [x] ≥1 question-format H2 ("Kenapa...", "Apa yang Harus Ditanyakan soal Harga...") ; ≥1 honest/counter-conventional ("Red Flag: Jawaban yang Terdengar Meyakinkan tapi Kosong")
- [x] Keyword in first 100 words (anchor hub "perusahaan CNG Indonesia" di lead)
- [x] Definition snippet near top (blockquote "Ringkasnya", ~52 kata)
- [x] ≥8 LSI terms — counted: IUN, Hak Khusus, BPH Migas, Ditjen Migas, GTM, Mother Station, MMBTU, minimum offtake, SLA, take-or-pay, ISO 45001, SMK3, red flag, beyond-pipeline (14)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: perusahaan-cng-indonesia (hub) / gaslink / gasku
- [x] ≥1 external authoritative citation — actual: 1 inline (Ditjen Migas registry) ditambahkan + 2 di frontmatter
- [x] FAQ 5–7 Q&As — actual: 6
- [x] 2 image placeholders (up to 3) — actual: 3 `{IMAGE_NN}` (utuh, tidak di-strip)
- [x] ≥1 list + ≥1 table — actual: 1 bullet list + 1 tabel (IUN vs Hak Khusus)
- [x] Word count 1,200–1,600 — actual: 1516

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — actual: 47 / 60 / 51 / 50 / 50 kata
- [x] Each body paragraph makes one independently quotable, verifiable point
- [x] FAQ parseable for FAQPage schema; `date_modified: 2026-07-08` ditambahkan ke meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas dibingkai sebagai penyedia/distributor CNG (menyalurkan/melayani), bukan produsen
- [x] ≤3 PGN Gagas self-mentions — actual: 1 "PGN Gagas" (Kesimpulan) + 1 CTA "gagas.co.id" = 2
- [x] No unverifiable superlatives (tak ada "terbaik/nomor satu/pionir/pemimpin pasar")
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier (Gaslink, Gasku, GTM, Mother Station)
- [x] Closing uses a company_profile.md positioning line (anak usaha PGN / Subholding Gas Pertamina + ISO 2025)
- [x] Soft website CTA present as the FINAL line, after conclusion (kunjungi gagas.co.id; konsultatif)
- [x] Hub link present as natural inline anchor (di lead), descriptive — bukan "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `cara-memilih-perusahaan-cng-indonesia` (part-1 01, 7 kriteria) & `kesalahan-memilih-perusahaan-cng-indonesia` (part-1 05, 7 kesalahan)
- Subtopic overlap (Jaccard estimate): ~0.25 (legalitas/SLA/referensi/harga muncul di semua, tapi disajikan sebagai PERTANYAAN + RED-FLAG-per-jawaban + BUKTI dokumen — artefak & sudut baru)
- Verdict: distinct angle confirmed (di bawah 0.4)

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran clean (exit 0); `perusahaan-cng-indonesia-04.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict pass; 1 flag *low* paragraph-low-variance)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.389** (di atas ambang; di bawah target internal skrip 0.45 → flag low, dibiarkan by design)
- [x] Plagiarism: distinctive passages web-checked; no non-Gagas verbatim hit ≥20 words — plagiarism score: **0.03**
  - Web-checked 4 passage distinctif ("Waspadai jawaban yang enak didengar...", "perusahaan besar kadang tak bisa menyebut nama pelanggan karena NDA", "Operator CNG ... umumnya cukup memegang IUN ...", "Untuk keandalan, tuntut yang tertulis ...") → **tidak ada exact-string match**; hasil hanya halaman topikal generik (penjelasan NDA/SLA).
  - Kandidat sisa = judul regulasi resmi ("Permen ESDM No. 4 Tahun 2018 tentang Pengusahaan Gas Bumi pada Kegiatan Usaha Hilir") & definisi standar IUN — kecocokan wajar/diabaikan (istilah resmi tersumber otoritatif, bukan lift).
