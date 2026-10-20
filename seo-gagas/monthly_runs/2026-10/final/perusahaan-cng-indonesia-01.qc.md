---
brief_id: "perusahaan-cng-indonesia-01"
editor_run_date: "2026-09-28"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Harga CNG Wajar atau Kemahalan? Cara Benchmark & Negosiasi Penyedia

## Recommendation
**approve**

Draft yang matang dan disiplin. Semua angka harga (HGBT US$6,5–7, gas pipa non-HGBT ~US$9,6, LNG non-HGBT US$13/MMBTU, batas 31 Des 2026, biaya niaga ≤7%) melacak balik ke dossier dengan atribusi inline, dan seluruh hedge kritis dihormati: PGN Gagas diposisikan sebagai penyedia/distributor CNG *beyond-pipeline* (bukan produsen); HGBT dinyatakan sebagai konteks kebijakan yang TIDAK otomatis didapat pembeli CNG; kerangka negosiasi (take-or-pay, price review) dibingkai sebagai praktik umum industri, bukan klausul resmi Gagas; dan tidak ada satu pun angka Rupiah/USD yang dikarang (klaim "32% dari HSD" yang berisiko justru tidak dipakai sama sekali). Skor AI-detector 0,04 (pass), em-dash 0, dua sebutan PGN Gagas tanpa superlatif. Satu cacat editorial nyata — pengulangan verbatim frasa "harga molekul gas sebagian besar ditetapkan pemerintah" (3×, dua di antaranya paragraf berurutan) plus foreshadow verbatim ke H2 #5 — sudah saya rapikan di tempat. Sisanya hanya flag minor non-pemblokir. Layak tayang di gagas.co.id.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Em-dash 0; tanpa opener AI; ritme paragraf bervariasi; burstiness CV 0,436 (di atas ambang 0,30). Pengulangan frasa sudah dihilangkan. |
| Factual & energi-gas / CNG accuracy | 9 | 5 klaim harga diverifikasi vs dossier — semua pass; label "acuan bergerak, bukan harga CNG final" konsisten. |
| On-page SEO compliance | 9 | Meta title 58, desc 153, slug 50; H2 5 buah; keyword di 100 kata pertama & penutup; 3 internal + 2 eksternal. |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata di bawah tiap H2; definisi snippet 54 kata; `date_modified` ditambahkan; FAQ FAQPage-ready. |
| PGN Gagas framing discipline | 10 | Penyedia/distributor, bukan produsen; 2 sebutan; tanpa superlatif; positioning line di penutup. |
| Internal linking | 10 | Hub inline di lead + 2 cousin (Gaslink, LNG) inline kontekstual; tanpa "BACA JUGA". |
| FAQ quality | 8 | 6 Q&A, tiap jawaban 40–80 kata, ada angka; dossier menyiapkan 7 (versi TOP dihilangkan wajar demi keringkasan). |
| Originality (plagiarism + AI-detector) | 9 | AI 0,04; 8 kandidat plagiarisme = parafrase dossier bersumber (heuristic-only, tanpa WebSearch). |

## What I fixed (changelog)
- **Dedup frasa berulang (anti-AI):** "harga molekul gas sebagian besar ditetapkan pemerintah" muncul 3× (dua paragraf berurutan di H2 #1 + sekali di H2 #5). H2 #1 paragraf 1 & 2 ditulis ulang agar tiap paragraf membawa satu poin unik; H2 #5 diubah jadi "...ditetapkan secara administratif" agar tidak verbatim. Kini frasa itu muncul 1×.
- **Hapus foreshadow verbatim:** klausa "penawaran yang jauh di bawah semua acuan justru patut dicurigai" dipindah keluar dari H2 #1 (definisi) agar tidak menduplikasi payoff H2 #5 secara kata-per-kata; H2 #1 paragraf 1 kini murni jawaban definisi yang bisa dikutip (~42 kata).
- **GEO freshness:** menambahkan `date_modified: "2026-09-28"` ke meta block (seo_playbook §2a mensyaratkan penanda freshness/`dateModified`).
- **Frontmatter `word_count`:** dikoreksi 1450 → 1518 agar sesuai hitungan kanonik tools/quality-check.ps1.

## What I flagged (open issues)
- ⚠️ Konteks regional untuk angka ~US$9,6/MMBTU (Jawa Barat dsb.) hadir di baris tabel, tetapi tidak di jawaban langsung H2 #2 maupun FAQ #1 — *recommendation*: biarkan (caveat sudah ada dalam section yang sama; menambah caveat ke jawaban 40–60 kata akan melewati batas kata). Non-pemblokir.
- ⚠️ Akronim GTM pertama muncul di blok "Ringkas" sebelum diekspansi di H2 #3 (*Gas Transportation Module*) — *recommendation*: biarkan; ekspansi tetap ada dalam artikel, dan menambah gloss di snippet akan memadatkan bait AI-Overview. Minor.
- ⚠️ Angka IGU (indeksasi minyak 24% [2005] → 18,5% [2024]) berasal dari draf FAQ dossier, bukan blok "Core facts (verified)" — *recommendation*: aman dipakai karena beratribusi eksplisit ke "survei International Gas Union 2025"; tandai untuk verifikasi jika di-refresh nanti.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — lead dibuka pada pain konkret (manajer procurement, 3 penawaran)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 kemunculan
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0
- [x] Em-dash count ≤2 — aktual: 0
- [x] Varied paragraph lengths — ada kalimat 1-kata-pendek ("Itu jebakan."), tabel, list, paragraf 2–4 kalimat
- [x] Not every H2 → 3-bullet list — campur prosa, tabel, numbered list, bullet
- [x] No generic claims without numbers — angka spesifik di >6 tempat
- [x] No stacked hype adjectives (canggih/powerful/terdepan) — tidak ada
- [x] No service-dump paragraph — satu anchor relevan saja
- [x] Repetisi frasa antar-paragraf — DIPERBAIKI (lihat changelog)

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| HGBT US$6,5 (bahan baku)/US$7 (bahan bakar), 7 sektor, 253 pengguna, Kepmen ESDM 76.K/2025 | dossier Core facts ✓ + product_matrix ✓ | pass |
| Gas pipa non-HGBT rata-rata ~US$9,6/MMBTU (konteks Jabar) | dossier ✓ (dengan caveat regional — dihormati di tabel) | pass |
| LNG non-HGBT US$13/MMBTU berlaku 29 Jun–31 Des 2026, kelanjutan belum diputuskan | dossier ✓ (Kontan/Antara) | pass |
| 53 pemegang izin niaga CNG (sem. II-2025, naik dari 33) | dossier ✓ (Bloomberg Technoz, Mei 2026) | pass |
| Biaya niaga ≤7% (Permen ESDM 58/2017) berlaku untuk gas PIPA, bukan mengikat CNG beyond-pipeline | dossier ✓ (dinyatakan eksplisit sebagai analogi, bukan aturan CNG) | pass |
| PGN Gagas = penyedia/distributor, bukan produsen; HGBT tidak otomatis untuk pembeli CNG | dossier hedge flags ✓ + product_matrix ✓ | pass |

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — aktual: 58 / keyword di posisi 0–24
- [x] Meta description 140–160 — aktual: 153
- [x] Slug ≤60, kebab-case, keyword — aktual: perusahaan-cng-indonesia-benchmark-harga-negosiasi (50)
- [x] H1 contains keyword — sinonim "Harga CNG ... Penyedia" (dapat diterima; H1 set oleh brief)
- [x] H2 count 4–5 — aktual: 5 H2 isi (+ FAQ + Kesimpulan)
- [x] ≥1 question-format H2 (#2, #3, #5); ≥1 honest/counter-conventional (#5)
- [x] Keyword in first 100 words — "53 perusahaan ... CNG" + "perusahaan CNG di Indonesia" (lead)
- [x] Definition snippet near top (40–60 words) — blok "Ringkas", 54 kata
- [x] ≥8 LSI terms — counted: >12 (HGBT, non-HGBT, MMBTU, take-or-pay, price review, GTM, PRS, Mother Station, molekul gas, flat/terindeks, HSD, LPG, minimum offtake)
- [x] 3 internal links (1 hub + 2 cousins) — perusahaan-cng-indonesia (hub, lead) / gaslink / perusahaan-lng-indonesia
- [x] ≥1 external authoritative citation — aktual: 2 (Kementerian ESDM, Kontan)
- [x] FAQ 5–7 Q&As — aktual: 6
- [x] 2 image placeholders (up to 3) — aktual: 3, tiap-tiap ada alt-text
- [x] ≥1 list + ≥1 table — numbered list + bullet list + 2 tabel
- [x] Word count 1,200–1,600 — aktual: 1518

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata di bawah tiap H2 — H2 #1 (~42), #2 (~50), #3 (~45), #4 (~40), #5 (~50)
- [x] Tiap paragraf tubuh membuat satu poin yang dapat dikutip & diverifikasi
- [x] FAQ parseable untuk FAQPage schema; `date_modified: 2026-09-28` ditambahkan ke meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] Diposisikan penyedia/distributor gas (memasok/menyalurkan; "harga berpijak pada ekosistem harga gas nasional"), BUKAN produsen
- [x] ≤3 self-mentions — aktual: 2 ("PGN Gagas")
- [x] No unverifiable superlatives — tidak ada; kata "termurah" hanya dipakai kritis (memperingatkan pembeli)
- [x] Nama produk/spesifikasi sesuai product_matrix.md — Gaslink (industri/komersial), telemetri; tanpa angka SPBG/GTM yang tak tersumber
- [x] Closing memakai positioning line company_profile — "anak usaha PGN, bagian Subholding Gas Pertamina"
- [x] Soft website CTA sebagai baris TERAKHIR setelah Kesimpulan — "jelajahi pilihannya di gagas.co.id" (konsultatif)
- [x] Hub link sebagai anchor inline natural di lead — bukan callout "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior articles for this cluster: `model-harga-kontrak-cng-minimum-offtake` (Model Harga & Kontrak CNG), `tco-penyedia-perusahaan-cng-indonesia` (TCO), `kesalahan-memilih-perusahaan-cng-indonesia` (jebakan harga termurah)
- Subtopic overlap (Jaccard estimate): ~0,15–0,20 (irisan hanya "minimum offtake" & "formula/indeksasi" sebagai OBJEK negosiasi, bukan penjelasan model; "harga termurah" dibingkai sebagai benchmark, bukan daftar kesalahan)
- Verdict: distinct angle confirmed — brief ini menjawab "apakah angka penawaran ini wajar & seberapa keras boleh menawar", whitespace yang di-park oleh brief #16/#18. <0,4.

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `perusahaan-cng-indonesia-01.id.quality-input.json` written
- [x] AI-detector score < 0.30 — aktual: 0.04 (verdict: pass)
- [x] Paragraph burstiness CV ≥ 0.30 — aktual: 0.436 (flag script "low" karena target internalnya 0,45; jauh di atas ambang editor 0,30 — clear)
- [~] Plagiarism: **heuristic-only (no WebSearch)** per instruksi run. 8 kandidat diekstrak; semuanya parafrase fakta dossier dengan atribusi inline (diskon LNG 31 Des 2026, 53 perusahaan, HGBT 253 pengguna, IGU 24%→18,5%, klausul price review). Tidak ada indikasi lifting verbatim; fakta yang beririsan dengan sumber otoritatif justru sudah beratribusi (penanganan benar, bukan plagiarisme). Plagiarism score heuristik: 0.05.
