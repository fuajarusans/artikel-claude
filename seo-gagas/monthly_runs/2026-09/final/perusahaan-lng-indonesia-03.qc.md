---
brief_id: "perusahaan-lng-indonesia-03"
editor_run_date: "2026-09-21"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — LNG untuk Data Center: Kapan Perusahaan LNG Indonesia Jadi Andalan Pasokan Energi

## Recommendation
**approve**

Draft ini datang hampir bersih. Anti-AI scan lolos telak (0 em-dash, tidak ada opener klise, tidak ada "Selain itu"/"Dengan demikian" berlebih), skor AI-detector 0,04, dan rhythm paragraf bervariasi (CV 0,424, di atas ambang editorial 0,30). Fakta kunci semuanya cocok dengan dossier: pertumbuhan gas pembangkit 4,5%/th, porsi LNG 57%→67%, tambahan 15 GW dari data center, PUE 1,54, Tier III 99,982%, emisi LNG vs diesel dilabeli estimasi bersumber, dan kasus Meta keluar RE100 (Juli 2026). Yang paling penting untuk keyword sensitif ini: framing PGN Gagas dijaga ketat — diposisikan sebagai penyalur hilir/distributor beyond-pipeline yang **sedang membangun** LNG Hub Bandung untuk industri & HOREKA (eksplisit "bukan data center"), FSRU/regasifikasi diatribusikan ke mitra PT Nusantara Regas, tanpa satu pun superlatif atau klaim produsen/pionir/pemimpin pasar, dengan hanya 2 self-mention. Saya memperbaiki satu ketidakakuratan urutan rantai pasok (LNG di-staging di Hub lalu diangkut ISO tank ke pelanggan untuk regasifikasi on-site — sebelumnya tertulis "diangkut ke LNG Hub lalu diregasifikasi on-site") di badan dan FAQ, menambah `date_modified`, dan menyelaraskan word_count. Tidak ada isu yang butuh rework penulis/strategist.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 0 em-dash, tak ada opener/transisi klise; hedging jujur; AI-detector 0,04; CV 0,424 |
| Factual & energi-gas / CNG accuracy | 9 | 6+ klaim numerik dicek vs dossier, semua pass; semua hedge-flag dossier dihormati |
| On-page SEO compliance | 9 | Meta title 42, desc 154, slug 42; keyword di H1/lead/first-100; 12+ LSI |
| GEO extractability (§2a) | 9 | Jawaban 40–60 kata di bawah tiap H2; satu poin quotable/paragraf; FAQ FAQPage-ready; dateModified ditambah |
| PGN Gagas framing discipline | 10 | Distributor beyond-pipeline; "sedang membangun" LNG Hub; FSRU→Nusantara Regas; "bukan data center"; 2 mention; nol superlatif |
| Internal linking | 10 | 3 inline anchor (hub di lead + 2 cousin), deskriptif, tanpa "BACA JUGA" |
| FAQ quality | 8 | 5 Q&A solid, jawaban 40–80 kata, tiap jawaban memuat angka; di batas bawah rentang |
| Originality (plagiarism + AI-detector) | 9 | AI 0,04; 8 kandidat plagiarisme semuanya statistik ber-atribusi/deskripsi teknis umum; heuristic-only |

## What I fixed (changelog)
- **Koreksi akurasi rantai pasok (H2 #4 "Bagaimana LNG Sampai...")**: paragraf definisi sebelumnya menyiratkan LNG "diangkut ke LNG Hub terdekat, lalu diregasifikasi on-site" — keliru, karena LNG Hub adalah titik staging tempat LNG **berangkat** menuju pelanggan. Diperbaiki menjadi "ditampung di LNG Hub terdekat, lalu diangkut dengan ISO tank kriogenik ke lokasi pelanggan dan diregasifikasi on-site". Konsisten dengan numbered-list di bawahnya + dossier (LNG Hub → ISO tank → regasifikasi on-site di lokasi pelanggan).
- **Selaras di FAQ #3 ("Bagaimana pasokan LNG menjangkau...")**: diubah dari "...ISO tank kriogenik ke LNG Hub terdekat" menjadi "...ISO tank kriogenik dari LNG Hub terdekat ke lokasi pelanggan" agar tidak mengulang kekeliruan arah yang sama.
- **Menambahkan `date_modified: "2026-09-21"`** ke frontmatter (freshness/`dateModified` per seo_playbook §2a).
- **Update `word_count` 1527 → 1528** menyesuaikan revisi minor.

## What I flagged (open issues)
- ⚠️ **FAQ berjumlah 5 (batas bawah rentang 5–7)** — *recommendation*: dapat diterima apa adanya; menambah 1–2 FAQ (mis. "Apa itu captive power?" / "Berapa PUE yang efisien?") akan memperluas cakupan PAA, tetapi artikel sudah ~1.528 kata sehingga penambahan berisiko melewati plafon 1.600 kata. Tidak diblok — biarkan jika ingin menjaga ketat.
- ⚠️ **Sitasi eksternal ditulis inline-atribusi (IEA, PLN EPI via ANTARA, Electrek, Uptime Institute, Jurnal Poltek STIP), belum sebagai hyperlink di badan** — URL lengkap tersedia di `external_citations` frontmatter. *Recommendation*: CMS/desain dapat menautkan saat publish; bukan blocker karena atribusi sumber+tanggal sudah jelas dan cukup untuk E-E-A-T/GEO.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 kemunculan
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 kemunculan
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0
- [x] Em-dash count ≤2 — actual: 0
- [x] Varied paragraph lengths — CV 0,424; campur 1–6 kalimat
- [x] Not every H2 → 3-bullet list — H2 mix: bullet (1), numbered (2), tabel (1), prosa murni (1)
- [x] No generic claims without numbers — 6+ angka spesifik ber-sumber
- [x] No stacked hype adjectives — tidak ada "canggih/powerful/terdepan"
- [x] No service-dump paragraph — 1 anchor (LNG Hub/ekosistem PGN) di penutup

### B. Factual & energi-gas / CNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Konsumsi listrik data center global ~12%/th sejak 2017 → ~945 TWh 2030 (IEA Electricity 2026) | dossier ✓ (baris 56) | pass |
| Data center dorong +15 GW/5 th; ~5,2 GW pada 2034 "laporan media mengutip RUPTL" | dossier ✓ (baris 36, 51 — dilabeli proyeksi) | pass |
| Tier III 99,982% / ≤1,6 jam; PUE global 1,54 selama 6 tahun (Uptime Institute 2025) | dossier ✓ (baris 61, 66-67) | pass |
| Emisi LNG dual-fuel: CO2 ~21–24%, NOx ~77%, tanpa SOx (Jurnal Poltek STIP); PGN ~25–30% vs BBM — dilabeli estimasi beda konteks | dossier ✓ (baris 81-88) | pass |
| LNG Hub Bandung: "sedang membangun", groundbreaking Ags 2025, ~15.000 MMBTU/bln, industri & HOREKA (bukan data center), FSRU→Nusantara Regas | dossier ✓ (baris 96, flag 183/191); product_matrix ✓ | pass |
| Meta keluar RE100 Juli 2026 setelah danai belasan pembangkit gas | dossier ✓ (baris 91) | pass |

Framing guard (LNG STRICT): PGN Gagas hanya di-frame **menyalurkan/mengantar/mengembangkan LNG Hub** (penyalur hilir); TIDAK produsen/likuifaksi/FSRU (Nusantara Regas disebut sebagai pihak FSRU); TIDAK "pionir/pemimpin pasar"; angka kapasitas dossier-sourced; 2 self-mention. **Semua terpenuhi.**

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: 42 chars / posisi 0
- [x] Meta description 140–160 — actual: 154
- [x] Slug ≤60, kebab-case, keyword — actual: `perusahaan-lng-indonesia-untuk-data-center` (42)
- [x] H1 contains keyword — "…Kapan Perusahaan LNG Indonesia Jadi Andalan…"
- [x] H2 count 4–5 — actual: 5 body H2 (+FAQ +Kesimpulan)
- [x] ≥1 question-format H2 (#2) ; ≥1 honest/counter-conventional H2 (#5)
- [x] Keyword in first 100 words — anchor "perusahaan LNG di Indonesia" di lead
- [x] Definition snippet near top (40–60 words) — 59 kata (blockquote "Ringkas")
- [x] ≥8 LSI terms — counted: 12+ (captive power, gas engine/turbine, PUE, uptime/tier, ISO tank, virtual pipeline, regasifikasi, ESG/RE100, LNG Hub, beyond-pipeline, dll.)
- [x] 3 internal links (1 hub + 2 cousins) — hub `/perusahaan-lng-indonesia/`, `/perusahaan-cng-indonesia/`, `/gaslink/`
- [x] ≥1 external authoritative citation — actual: 3 (ANTARA/PLN EPI, IEA, Electrek) + inline Uptime Institute & Jurnal Poltek STIP
- [x] FAQ 5–7 Q&As — actual: 5
- [x] 2 image placeholders (up to 3) — actual: 2, keduanya beralt-text
- [x] ≥1 list + ≥1 table — bullet + numbered + 1 tabel perbandingan
- [x] Word count 1,200–1,600 — actual: ~1.528 (readable); tokenizer skrip 1.578 (keduanya dalam band)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata tepat setelah tiap H2 (#1 ~55, #2 ~50, #3 ~45, #4 ~52, #5 ~50 kata) — bukan hanya snippet atas
- [x] Tiap paragraf badan membuat satu poin quotable & verifiable (satu klaim + fakta bersumber)
- [x] FAQ parseable untuk FAQPage schema; `date_modified: 2026-09-21` ditambahkan ke meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas di-frame penyedia/penyalur gas (menyalurkan/mengantar/mengembangkan LNG Hub), BUKAN produsen/FSRU
- [x] ≤3 self-mentions — actual: 2 ("PGN Gagas" di H2 #4 aside + Kesimpulan)
- [x] No unverifiable superlatives — 0
- [x] Nama produk/spek energi-gas/LNG cocok product_matrix.md / dossier (LNG Hub, ~15.000 MMBTU/bln, Gaslink)
- [x] Closing memakai positioning line company_profile.md ("penopang bisnis hilir PGN… memperluas manfaat gas bumi ke daerah tanpa pipa")
- [x] Soft website CTA hadir sebagai baris FINAL, setelah Kesimpulan (ajakan kunjungi gagas.co.id; nada konsultatif)
- [x] Hub link sebagai natural inline anchor di lead ("perusahaan LNG di Indonesia") — bukan "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior articles (cluster perusahaan-lng-indonesia): `#06 LNG untuk Pembangkit: Gasifikasi Kelistrikan di Daerah Terpencil` (grid/utilitas PLN); `#11 LNG untuk Smelter Nikel & Tambang Off-Grid` (captive power ekstraktif)
- Subtopic overlap (Jaccard estimate): ~0.20 vs #11 (irisan: captive power, beyond pipeline, LNG vs diesel)
- Verdict: **distinct angle confirmed** — vertikal data center dengan driver berbeda (uptime/tier, PUE, ESG/RE100 pelanggan digital) yang tak disentuh artikel LNG mana pun sebelumnya

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `perusahaan-lng-indonesia-03.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (verdict: pass; 1 flag low-severity: paragraph-low-variance CV=0,424 vs target skrip 0,45 — tetap di atas ambang editorial 0,30)
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.424**
- [~] Plagiarism: **heuristic-only (no WebSearch — budget exhausted; degraded mode per standing policy)**. 8 kandidat diperiksa manual dari output skrip:
  - Kandidat #1, #2, #3, #5 = klaim statistik ber-atribusi inline (Jurnal Poltek STIP, IEA, PGN, Uptime Institute) yang di-parafrase dalam suara penulis; angka bukan objek hak cipta, konstruksi kalimat original.
  - Kandidat #4 (virtual pipeline via ISO tank) = deskripsi proses teknis umum/well-known, <20 kata — masuk pengecualian "definisi umum".
  - Kandidat #6, #7, #8 = prosa analitis/hedge original penulis (lock-in & cold-chain, "bridge fuel", densitas daya) — bukan lift.
  - Tidak ada indikasi lift verbatim ≥20 kata dari halaman non-Gagas. **plagiarism_score (heuristic): 0.05.**

---

## The shipping question
Jika artikel ini tayang di gagas.co.id besok dan dibaca praktisi energi senior + pembeli industri skeptis: framing LNG jujur (bridge fuel, bukan RE100), angka bersumber & berlabel estimasi, tabel perbandingan yang travel-friendly, section "kapan BELUM perlu" yang membangun kepercayaan, dan posisi PGN Gagas yang akurat tanpa over-claim. **WEBARQ Promote layak bangga menerbitkannya. Approve.**
