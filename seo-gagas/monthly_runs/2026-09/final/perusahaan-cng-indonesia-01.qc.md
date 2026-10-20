---
brief_id: "perusahaan-cng-indonesia-01"
editor_run_date: "2026-09-21"
recommendation: "approve"
overall_score: 9
ai_score: 0.00
plagiarism_score: 0.05
---

# Editor QC Report — Tender & Kontrak Payung Pengadaan CNG: Menilai Perusahaan CNG di Indonesia

## Recommendation
**approve**

Draft ini masuk sudah dalam kondisi kuat dan konsisten dengan brief (intent KOMERSIAL: cara *menyusun dokumen pengadaan*, bukan checklist penilaian vendor). Anti-AI scan bersih (skor detektor 0,00; paragraph burstiness CV 0,468; sentence burstiness 0,749), dan setiap klaim faktual — termasuk butir-butir yang paling rawan (Permen ESDM 32/2021 yang BUKAN dasar IUN, perbedaan IUN vs Hak Khusus BPH Migas, tekanan kerja ~1–2 bar alih-alih angka brief 0,8–1,5 bar, angka 53 vs 33 badan usaha) — dapat ditelusuri ke dossier dan diberi atribusi yang benar. Framing PGN Gagas tepat (penyalur/distributor, bukan produsen; tanpa superlatif; 2 self-mention bermerek + 1 aside "ekosistem PGN"). Semua hedge kritikal yang diminta agent peluncur terpenuhi. Perbaikan yang saya terapkan bersifat minor (ekspansi akronim CNG di snippet definisi, refresh `date_modified`, sinkronisasi `word_count`). Tidak ada isu yang butuh rework penulis/strategist. Curator-ready.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Ritme paragraf bervariasi (1–6 kalimat), honest hedging ("hanya contoh, bukan angka baku"), nol AI-opener; burstiness sangat sehat. |
| Factual & energi-gas / CNG accuracy | 9 | 6/6 klaim spot-check lolos vs dossier; menangani dengan benar 3 jebakan fakta yang dossier-flag. |
| On-page SEO compliance | 9 | Seluruh checklist §3 lolos; meta title 50, desc 155, slug 46 — semua di dalam target. |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata tepat di bawah tiap H2; satu poin quotable/paragraf; FAQ FAQPage-ready; `date_modified` ada. |
| PGN Gagas framing discipline | 9 | "menyalurkan…lewat solusi CNG"; 2 self-mention bermerek + 1 aside; tanpa superlatif. |
| Internal linking | 9 | Hub di lead (inline) + 2 cousin (Gaslink, LNG) kontekstual; tanpa "BACA JUGA". |
| FAQ quality | 8 | 5 Q&A padat (40–80 kata), selaras PAA brief; di batas bawah rentang 5–7 tetapi memadai. |
| Originality (plagiarism + AI-detector) | 9 | AI 0,00 / 0 flag; 8 kandidat plagiarisme dinilai heuristik = tanpa risiko lift verbatim non-Gagas. |

## What I fixed (changelog)
- Menambahkan ekspansi akronim pada penggunaan awal: "pengadaan CNG (*Compressed Natural Gas*)" di snippet definisi (style_guide §3 — akronim di-expand saat pertama muncul; sebelumnya CNG tak pernah dijabarkan).
- Memperbarui `date_modified` frontmatter dari `2026-09-17` → `2026-09-21` (freshness/GEO §2a — mencerminkan tanggal pass editor).
- Menyinkronkan `word_count` frontmatter `1455` → `1462` setelah edit (tetap di dalam pita 1.200–1.600).
- Menjalankan `tools/quality-check.ps1` atas final tersimpan → `perusahaan-cng-indonesia-01.id.quality-input.json` tertulis.

## What I flagged (open issues)
- ⚠️ FAQ berisi 5 Q&A (rentang target 5–7). *Rekomendasi*: opsional — bila ingin di tengah pita, tambah 1–2 Q&A dari PAA yang belum terpakai ("Apa beda KAK dan RKS?", "Kapan pakai e-katalog LKPP vs tender terbuka?"). Bukan blocker; 5 sudah lolos ambang minimum.
- ⚠️ Angka "53 badan usaha (semester II-2025)" dan ambang "Rp200 juta e-katalog" bersumber dari media/situs edukasi (bukan teks primer ESDM/LKPP), sudah diberi atribusi eksplisit di artikel sesuai rekomendasi dossier. *Rekomendasi*: pertahankan atribusi apa adanya; jangan ubah menjadi klaim berdiri sendiri saat refresh berikutnya.
- ⚠️ Plagiarism dinilai **heuristik saja (tanpa WebSearch — budget sesi habis)**. *Rekomendasi*: bila budget pulih di run berikutnya, verifikasi silang 2 kandidat definisi/faktual (kontrak payung; "53 badan usaha") sebagai formalitas — tidak diperkirakan mengubah verdikt.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 kemunculan
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 kemunculan
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0 kemunculan
- [x] "Dengan demikian" not overused — 0 kemunculan
- [x] Em-dash count ≤2 — 1 (di context frontmatter, bukan body)
- [x] Varied paragraph lengths — CV paragraf 0,468; ada paragraf 1-kalimat ("Yang membedakan spesifikasi baik…")
- [x] Not every H2 → 3-bullet list — campuran prosa, numbered list, tabel, 2-bullet
- [x] No generic claims without numbers — 200/3/1–2 bar, 53/33, 60:40–70:30, Rp200 juta, dll.
- [x] No stacked hype adjectives — tidak ada canggih/powerful/terdepan
- [x] No service-dump paragraph — satu anchor closing + satu aside

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| CNG diangkut ~200 bar → PRS ~3 bar → industri/komersial ~1–2 bar (Kompas 19 Agu 2026, Dirut PGN Gagas) | dossier ✓ (memakai angka Kompas, BUKAN 0,8–1,5 bar brief) | pass |
| 53 badan usaha izin niaga CNG (semester II-2025), naik dari 33 (semester I-2025), atribusi ESDM via Beritasatu/Bloomberg | dossier ✓ (atribusi persis sesuai flag) | pass |
| Permen ESDM 32/2021 = inspeksi teknis/keselamatan instalasi, BUKAN dasar hukum IUN | dossier ✓ (koreksi miskonsepsi umum, benar) | pass |
| IUN (Kementerian ESDM, Permen 4/2018 jo. 19/2021) vs Hak Khusus (BPH Migas, lelang, khusus pipa) = dua rezim berbeda | dossier ✓ + product_matrix ✓ | pass |
| Kontrak payung = Pasal 27 ayat (8) Perpres 16/2018 jo. perubahannya (16/2018 → 12/2021 → 46/2025) | dossier ✓ (frasa "perubahannya yang berlaku" menutup flag pasca-46/2025) | pass |
| Ambang e-katalog Rp200 juta hanya mengikat instansi ber-APBN/APBD, bukan korporasi swasta | dossier ✓ (kualifikasi konteks pemerintah benar) | pass |

Catatan: tak ada angka durasi tahun IUN (sesuai larangan dossier), tak ada spesifikasi/kapasitas GTM yang diinvensi sebagai milik PGN Gagas — dua flag dossier dihormati.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — 50 chars; "Perusahaan CNG Indonesia" pada 0–24
- [x] Meta description 140–160 — 155 chars
- [x] Slug ≤60, kebab-case, keyword — `perusahaan-cng-indonesia-tender-kontrak-payung` (46)
- [x] H1 contains keyword — "…Menilai Perusahaan CNG di Indonesia"
- [x] H2 count 4–7 — 5 H2 konten + FAQ + Kesimpulan
- [x] ≥1 question-format H2 (#1, #3); ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — lead (anchor hub)
- [x] Definition snippet near top (40–60 words) — blockquote "Ringkas:" ~55 kata
- [x] ≥8 LSI terms — 12+ (KAK/TOR, kontrak payung, minimum offtake, IUN, Hak Khusus, GTM, PRS, SLA, telemetri, e-katalog LKPP, ISO 9001/45001, matriks evaluasi)
- [x] 3 internal links (1 hub + 2 cousins) — hub `perusahaan-cng-indonesia` (lead), `gaslink`, `perusahaan-lng-indonesia`
- [x] ≥1 external authoritative citation — 3 inline (LKPP, ESDM, BPH Migas) + Kompas (atribusi teks)
- [x] FAQ 5–7 Q&As — 5
- [x] 2 image placeholders — {IMAGE_01}, {IMAGE_02}, keduanya + alt-text
- [x] ≥1 list + ≥1 table — numbered (5 bagian) + bullet (2) + tabel matriks
- [x] Word count 1,200–1,600 — 1.462 (script tokenizer: 1.503; keduanya dalam pita)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — H2 #1–#5 semuanya membuka dengan jawaban langsung ~44–48 kata
- [x] Each body paragraph makes one independently quotable, verifiable point — mis. "Penyedia tanpa IUN aktif seharusnya gugur sebelum penawaran harganya dibaca."
- [x] FAQ parseable for FAQPage schema; `dateModified`/freshness in meta block — `date_modified: 2026-09-21`

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas = penyedia/distributor gas ("menyalurkan gas bumi…lewat solusi CNG"), bukan produsen
- [x] ≤3 self-mentions — 2 "PGN Gagas" bermerek (atribusi Kompas + positioning Kesimpulan) + 1 aside "ekosistem PGN" (sesuai izin brief)
- [x] No unverifiable superlatives — tak ada terbaik/terbesar/nomor satu/pemimpin pasar
- [x] Energi-gas / CNG product names + specs match product_matrix.md / dossier — Gaslink (industri/komersial), GTM/PRS konsep umum, tanpa angka kapasitas fiktif
- [x] Closing uses a company_profile.md positioning line — "anak usaha PGN…bagian dari Subholding Gas Pertamina…"
- [x] Soft website CTA present as FINAL line — "…kunjungi gagas.co.id." (konsultatif, bukan "beli sekarang")
- [x] Hub link = natural inline anchor di lead ("perusahaan CNG di Indonesia") — bukan callout

### E. Anti-cannibalization spot check
- Closest prior articles for this cluster (index.json, keyword_slug `perusahaan-cng-indonesia`): `cara-memilih-perusahaan-cng-indonesia` (7 kriteria naratif), `pertanyaan-penyedia-cng-indonesia` (daftar pertanyaan), `model-harga-kontrak-cng-minimum-offtake` (struktur harga), `manajemen-pasokan-cng-multi-lokasi-vendor` (kelola kontrak berjalan), `perusahaan-cng-indonesia-pengadaan-dapur-mbg` (e-katalog LKPP untuk instansi MBG).
- Subtopic overlap (Jaccard estimate): ~0,20 — irisan hanya istilah IUN/ISO/SLA/e-katalog/minimum offtake, dipakai dalam konteks berbeda: brief ini = *cara membuat dokumen tender* (KAK, spesifikasi, matriks skoring, struktur kontrak payung) sebagai deliverable, bukan kriteria penilaian, model harga, pengelolaan portofolio, atau kasus instansi MBG.
- Verdict: distinct angle confirmed. KOMERSIAL & berbeda dari hub informational "CNG Indonesia"; tak ada cannibalization.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `perusahaan-cng-indonesia-01.id.quality-input.json` written
- [x] AI-detector score < 0.30 — **0,00**; verdict pass; 0 flags
- [x] Paragraph burstiness CV ≥ 0.30 — **0,468** (sentence burstiness 0,749; top30 vocab share 0,29 — tanpa over-konsentrasi)
- [x] Plagiarism: distinctive passages assessed — **heuristik saja (no WebSearch — budget exhausted)**; plagiarism score **0,05**

Penilaian heuristik 8 kandidat plagiarisme (tanpa WebSearch):
1. "Regulasi pengadaan…Perpres 16/2018 sudah diubah hingga Perpres 46/2025." — pernyataan regulatif faktual; konstruksi kalimat orisinal. Risiko rendah.
2. "## Kapan Tender Terbuka Justru Bukan Pilihan Terbaik…" — heading + opini counter-conventional orisinal. Risiko rendah.
3. "…53 badan usaha pemegang izin niaga CNG…" — fakta ber-atribusi (Beritasatu/Bloomberg); angka + atribusi = sitasi, bukan lift. Risiko rendah.
4. "Gate paling langsung…Izin Usaha Niaga (IUN) gas bumi dari Kementerian ESDM…" — istilah resmi standar + tautan sitasi. Risiko rendah.
5. "## Legalitas yang Harus Jadi Syarat Gugur…Verifikasi legalitas sebagai syarat gugur, bukan poin bonus." — heading + kalimat orisinal. Risiko rendah.
6. "Gate utamanya…Permen ESDM 4/2018 jo. 19/2021…" — pernyataan regulatif standar (jawaban FAQ). Risiko rendah.
7. "Karena regulasi memakai konstruksi 'dan/atau'…IUN saja umumnya cukup…" — sintesis analitis orisinal dari nuance flag dossier. Risiko rendah.
8. "Kontrak payung adalah kontrak harga satuan berjangka waktu tertentu…" — parafrase definisi hukum publik (Pasal 27 ayat 8 Perpres); definisi legal/umum → dikecualikan per kebijakan. Risiko rendah.

Kesimpulan: tak satu pun kandidat merupakan passage kreatif berisiko lift verbatim ≥20 kata dari halaman non-Gagas. Degraded mode (heuristik) diterima per kebijakan; tidak memblokir approve yang bersih.
