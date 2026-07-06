---
brief_id: "erp-migration-to-the-cloud-03"
editor_run_date: "2026-06-08"
recommendation: "approve"
overall_score: 8
---

# Editor QC Report — Cara Memilih Partner Implementasi SAP untuk Migrasi ERP ke Cloud

## Recommendation
**approve**

Draf ini kuat secara substansi: sudut vendor-selection benar-benar netral, padat angka terverifikasi, jujur (menyebut bahwa tier tertinggi tidak otomatis paling cocok), dan disiplin dalam framing Soltius (hanya 1 penyebutan nama di penutup + 1 CTA situs, jauh di bawah batas 3, tanpa superlatif). Masalah terbesar saat masuk meja editor adalah **anti-AI: 32 em-dash** di seluruh draf — pelanggaran berat aturan style_guide §5 (batas ~2). Itu sudah saya perbaiki seluruhnya menjadi 2 (1 di body + 1 di meta description), tanpa mengubah makna. Saya juga menambahkan **tautan hub yang hilang** sebagai anchor inline di lead (sebelumnya hanya teks biasa, sehingga internal link hanya 2/3), mengoreksi **word_count frontmatter yang salah** (tertulis 1640; hitungan aktual ~2.247 dengan konvensi penghitung pipeline), merapikan meta description, dan menambahkan `dateModified`. Semua fakta SAP yang load-bearing diverifikasi terhadap dossier + sumber SAP resmi dan lolos; daftar "do-NOT-assert" dossier dipatuhi penuh oleh penulis. Satu catatan terbuka yang TIDAK menghalangi approve: panjang artikel (~2.247 kata) di atas pita ketat 1.500–1.800, tetapi konsisten dengan seluruh artikel cluster ini yang sudah disetujui (erp-migration -01 s/d -05 berkisar 1.891–2.210 kata pada konvensi penghitung yang sama). Konten padat, bukan padding.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 8 | Setelah perbaikan em-dash, suara konsultatif-jujur konsisten; ritme paragraf bervariasi (1–6 kalimat); ada aside "sering disalahpahami". Sebelum fix: gagal (32 em-dash). |
| Factual & SAP-spec accuracy | 9 | 5 klaim di-spot-check; semua pass vs dossier + SAP resmi. National Grid USD 585jt & tier PartnerEdge diverifikasi via WebSearch. Daftar do-NOT-assert dipatuhi. |
| On-page SEO compliance | 8 | Meta lengkap & dalam pita; 5 H2 (1 pertanyaan, 1 counter-conventional); 3 internal link (setelah hub link ditambahkan); 2 sitasi eksternal otoritatif; tabel + list + FAQ ada. |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata setelah tiap H2 utama; definition snippet rapi; FAQ 7 Q&A FAQPage-ready; `dateModified` ditambahkan. |
| Soltius framing discipline | 9 | Implementer/partner, bukan "membangun SAP". 1 penyebutan nama (penutup) + 1 CTA situs. Tanpa superlatif. Platinum diframing "melalui keanggotaan United VARs". |
| Internal linking | 8 | Hub (lead) + 2 cousin (Clean Core, Data Warehouse) sebagai anchor inline natural; tanpa "BACA JUGA". Hub link saya tambahkan saat edit. |
| FAQ quality | 8 | 7 Q&A dari PAA; tiap jawaban 40–60 kata, mandiri, ada angka. |
| Image-brief completeness | 9 | images.json parse; 3 entri = 3 placeholder; alt_id ≤125, caption_id, visual_direction, suggested_asset_type semua Bahasa Indonesia; sourcing_note menegaskan tidak perlu screenshot SAP. |

## What I fixed (changelog)
- **Anti-AI (em-dash):** Mengurangi em-dash dari **32 → 2** (style_guide §5 batas ~2). Mengonversi ke koma/titik koma/titik dua/tanda kurung di lead, definition snippet, semua kriteria (1, 3, 5, 6), paragraf ilustrasi United VARs, bagian "Mengapa" (para 2), bagian Pertanyaan (3 tempat), Model Biaya (3 tempat), Red Flags (1), FAQ (4 jawaban), dan Kesimpulan (2 appositive). Menyisakan 1 em-dash retoris di body (kalimat National Grid) + 1 di meta description.
- **Em-dash di placeholder IMAGE_01/02/03:** dikonversi ke koma/kurung (placeholder tetap utuh — tidak dihapus).
- **Internal link hub yang hilang:** menambahkan anchor inline `[migrasi ERP ke cloud](.../migrasi-erp-ke-cloud)` di kalimat pertama lead. Sebelumnya frasa itu hanya teks biasa, jadi artikel hanya punya 2/3 internal link.
- **word_count frontmatter:** dikoreksi `1640 → 2247` (hitungan manual mengikuti konvensi `tools/count_words.py`: termasuk heading, sel tabel, list, FAQ; link→anchor; URL & placeholder dibuang). Angka penulis adalah undercount serius.
- **meta_description:** mengganti em-dash dengan titik dua; panjang ~158 char (dalam pita 140–160).
- **`dateModified: "2026-06-08"`** ditambahkan ke frontmatter (kepatuhan freshness GEO §2a).
- **Kesimpulan:** memperhalus appositive kredensial Soltius (dari em-dash menjadi tanda kurung) agar tetap mengalir setelah em-dash dihapus.

## What I flagged (open issues)
- ⚠️ **Panjang artikel ~2.247 kata** — di atas pita ketat 1.500–1.800 yang tercantum di seo_playbook §2/style_guide §2. *Rekomendasi:* terima apa adanya. Konten padat-informasi (bukan padding) dan konsisten dengan seluruh cluster ERP-migration yang sudah di-approve (1.891–2.210 kata pada penghitung yang sama). Bila pita 1.500–1.800 ingin ditegakkan keras, kandidat pemangkasan: tabel kriteria (redundan dengan numbered list) atau menggabungkan 1–2 FAQ yang beririsan dengan body. Tidak menghalangi approve.
- ⚠️ **Inkonsistensi konvensi word_count di pipeline** — CLAUDE.md §8 mengunci 1.200–1.500, sedangkan knowledge_base (seo_playbook §2) menyebut 1.500–1.800; penulis melaporkan 1.640 (prose-only) padahal penghitung resmi menghasilkan ~2.247 (termasuk tabel/FAQ/heading). *Rekomendasi (sistemik, untuk user):* selaraskan satu angka pita + satu definisi penghitungan di seluruh agen agar tidak terjadi undercount berulang. Bukan cacat artikel ini.
- ⚠️ **meta_title tidak memuat keyword Inggris** "ERP migration to the cloud" — memuat varian Indonesia "Migrasi ERP ke Cloud" (mulai ~char 22). Sesuai konvensi klien (artikel Bahasa Indonesia); diterima. Tidak diubah agar tetap ≤60 char.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — none (grep clean)
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — none
- [x] No "Penting untuk dicatat / dipahami bahwa" — none
- [x] "Dengan demikian" not overused — absent
- [x] Em-dash count ≤2 — **FIXED: 32 → 2** (1 body + 1 meta description)
- [x] Varied paragraph lengths — yes (1-kalimat "Mari rinci masing-masing:" s/d 5-kalimat); not symmetric
- [x] Not every H2 → 3-bullet list — mixed (prose answer + numbered list + table; bullets only where natural)
- [x] No generic claims without numbers — angka di 6+ tempat (67%, USD 585jt, 70+/100+, 10.000+, 47%, 1 Juli 2015, Juli 2025/April 2024, Juni 2024)
- [x] No stacked hype adjectives — none ("terbaik" hanya dalam frasa disclaimer "bukan daftar 'vendor terbaik'")
- [x] No service-dump paragraph — Soltius hanya 1 anchor di penutup, tanpa daftar layanan

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| ECC mainstream maintenance & kasus dipakai sebagai konteks; National Grid USD 585 juta biaya remediasi (Wipro, utilitas AS) | dossier Claim 11 ✓ + WebSearch (UpperEdge, The Register, Henrico Dolfing): remediasi 2 tahun = $585jt, >150% biaya implementasi | pass |
| SAP PartnerEdge 4 tier; Platinum invite-only, bukan akumulasi poin | dossier Claim 1 ✓ + product knowledge + WebSearch (SAP PartnerEdge 2025: Silver 100pt/Gold 500pt point-based; Platinum by-invitation, ribuan konsultan tersertifikasi) | pass |
| United VARs 70+ mitra di 100+ negara, 10.000+ implementasi | dossier Claim 3 ✓ (situs resmi United VARs). Penulis BENAR memakai angka live, BUKAN 45/90+ yang usang di company_profile (sesuai rekomendasi flag dossier) | pass |
| 67% implementasi gagal timeline/anggaran — atribusi "laporan Panorama Consulting (2024)" | dossier Claim 11 ✓ (medium-conf, sumber sekunder). Diframing dengan atribusi, BUKAN sebagai statistik SAP resmi. Klaim "~80% bergantung partner" yang dilarang TIDAK dipakai | pass |
| SAP Activate 6 fase (Discover–Run) + 3 pilar; sertifikasi mitra wajib tahunan sejak Apr 2024 / peran kunci RISE sejak Jul 2025 | dossier Claim 4 & 8 ✓ (SAP Learning + SAP Community) | pass |

Catatan kepatuhan do-NOT-assert (flag dossier): (1) United VARs pakai angka live 70+/100+ — patuh; (2) "~80%" tidak dipakai — patuh; (3) Platinum diframing "melalui keanggotaan United VARs" — patuh; (4) angka dampak RISE Validated Partner tidak dikutip — patuh; (5) Soltius TIDAK diklaim "RISE Validated Partner" (hanya muncul sebagai pertanyaan due diligence) — patuh.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — "Cara Memilih Partner Migrasi ERP ke Cloud (SAP)" = 47 char; varian keyword "Migrasi ERP ke Cloud" mulai ~char 22
- [x] Meta description 140–160 — ~158 char (setelah em-dash→titik dua)
- [x] Slug ≤60, kebab-case, keyword — `memilih-partner-implementasi-sap-migrasi-erp-cloud` = 50 char
- [x] H1 contains keyword — "...Migrasi ERP ke Cloud"
- [x] H2 count 4–5 — 5 H2 isi (Mengapa / 7 Kriteria / Pertanyaan / Model Biaya / Tanda Bahaya) + FAQ + Kesimpulan
- [x] ≥1 question-format H2 (#3 "Pertanyaan Apa...") ; ≥1 honest/counter-conventional (#5 "Tanda Bahaya...")
- [x] Keyword in first 100 words — "migrasi ERP ke cloud" di kalimat pertama (sekaligus anchor hub)
- [x] Definition snippet near top (40–60 words) — blockquote "Secara singkat" ~56 kata
- [x] ≥8 LSI terms — partner implementasi SAP, system integrator, SAP PartnerEdge, Platinum/Gold, SAP Activate, AMS/PCoE, RISE with SAP, clean core/BTP, fixed-price/T&M, e-Faktur, United VARs, quality gates (>12)
- [x] 3 internal links (1 hub + 2 cousins) — hub: migrasi-erp-ke-cloud (lead); cousin: SAP Clean Core, data-warehouse-solutions
- [x] ≥1 external authoritative citation — 2 (sap.com PartnerEdge; learning.sap.com SAP Activate) + atribusi inline (Panorama, Elevatiq, Gartner, United VARs)
- [x] FAQ 5–7 Q&As — 7
- [x] 2 image placeholders (up to 3) — 3 (IMAGE_01/02/03)
- [x] ≥1 list + ≥1 table — numbered list (7 kriteria) + bullets (due diligence, red flags) + 2 tabel
- [~] Word count 1,500–1,800 — **~2,247** (lihat flag; konsisten dengan cluster yang sudah di-approve)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — ya (para pembuka tiap H2: Mengapa/7 Kriteria/Pertanyaan/Model Biaya/Tanda Bahaya semua adalah jawaban langsung yang quotable)
- [x] Each body paragraph makes one independently quotable, verifiable point — ya; klaim disertai angka/sumber
- [x] FAQ parseable for FAQPage schema; `dateModified`/freshness in meta — FAQ format `###` Q + jawaban; `dateModified: 2026-06-08` ditambahkan

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP" — "mendampingi perusahaan dari penilaian kesiapan, eksekusi migrasi, hingga dukungan AMS"
- [x] ≤3 Soltius self-mentions — 2 (1 nama "Soltius" di Kesimpulan + 1 CTA "soltius.co.id"); body mengajar vendor-neutral tanpa name-drop
- [x] No unverifiable superlatives ("terbaik/nomor satu") — none
- [x] SAP/partner product names + specs match product_matrix.md / dossier — ya (PartnerEdge, SAP Activate, AMS/PCoE, RISE, BTP, clean core)
- [x] Closing uses a company_profile.md positioning line — "berpengalaman sejak 1998, bagian dari Metrodata Group, dan SAP Platinum Partner melalui keanggotaan United VARs"
- [x] Soft website CTA present as the FINAL line — "...kunjungi soltius.co.id." (baris terakhir, setelah Kesimpulan, konsultatif)
- [x] Hub link as natural inline anchor (lead), descriptive — ya; bukan "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: cluster 2026-06 `erp-migration-to-the-cloud-01..05`. Yang paling dekat secara entitas: `-05` (pasca go-live/AMS). `-03` 2026-06 adalah TCO/biaya (sudut berbeda).
- Subtopic overlap (Jaccard estimate): ~0.11 vs `-05` (irisan tunggal: "AMS"). Sudut artikel ini = seleksi vendor SEBELUM kontrak; `-05` = operasional SETELAH go-live.
- Verdict: **distinct angle confirmed**. Tidak ada artikel cluster lain yang berdiri di tahap seleksi vendor.

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per `{IMAGE_NN}` placeholder — 3 entri (IMAGE_01/02/03) = 3 placeholder di body
- [x] Each entry has alt_id (≤125 chars) + caption_id + visual_direction + suggested_asset_type (semua Bahasa Indonesia) — ya (alt_id IMAGE_01 ~122 char; lainnya lebih pendek)
- [x] "real SAP screenshot" requirement surfaced — sourcing_note tiap entri menegaskan TIDAK perlu screenshot SAP (infografik/diagram orisinal dari data publik); IMAGE_02 secara eksplisit melarang merekayasa tampilan SAP Learning/Cloud ALM
- (Tidak ada PNG untuk dicek — sesuai desain.)
