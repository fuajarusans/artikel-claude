---
brief_id: "sap-b1-vs-accurate-c01"
editor_run_date: "2026-07-06"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — SAP Business One vs Accurate vs Zahir: ERP Terbaik untuk Bisnis Berkembang

> **Batch note:** evaluated against **conditional/2026-07 style_addendum overrides** (word band 800–1000; FAQ 2–3; internal links exactly 2; image-brief validation N/A — `{IMAGE_NN}` banned; Soltius mentions max 2; lead & Kesimpulan ≤80 words; definition allowed ONCE, in the snippet only; soft CTA soltius.co.id = final line). All other checks (anti-AI §5, EYD, citation discipline §10, Soltius framing §11, meta block §7, GEO §2a) applied in full.

## Recommendation
**approve**

The draft came in disciplined: on-angle (neutral 3-way head-to-head, exactly the gap the brief identified), every number traced to the dossier, all seven researcher flags respected (no ±18 users, no Rp 277.500, no Zahir tier prices, no Zahir–Coretax claim, no dongle, no B1 rupiah price, implementation duration hedged), and zero AI tells. I applied 10 in-place fixes — the only substantive one corrected an over-claim ("multi-cabang dan manufaktur ... keduanya bawaan produk" di SAP Business One) to the dossier-verified formulation; the rest were EYD/grammar polish, one entity expansion, one verified table addition, and converting the two inline attributions into inline links per the batch-pilot convention. Final body: **977 words** (band 800–1000, clean count, markdown syntax stripped).

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | No banned openers/transitions; 1 em-dash (snippet verbatim); paragraph rhythm 1–3 sentences; prose-led sections; "sinyal paling praktis justru terlihat di tagihan" is a genuinely practitioner-sounding hook |
| Factual & SAP-spec accuracy | 9 | All claims dossier-verified (SAP News Des 2025, accurate.id, zahironline.com, Antara); 1 over-claim corrected; all 7 dossier flags avoided |
| On-page SEO compliance | 9 | Meta title 60, meta desc 151, slug 37; keyword in H1/lead sentence 1/meta; H2 mix per addendum skeleton |
| GEO extractability (§2a) | 9 | 40–60-word direct answer after all 3 body H2s (55/54/44); table AI-liftable row-by-row; snippet 52 words; harga rows carry the "per Juli 2026" cap |
| Soltius framing discipline | 10 | Exactly 2 self-mentions (verified Partner-of-the-Year positioning line + CTA); implementer/pendamping framing; body 100% vendor-neutral — no mid-body aside |
| Internal linking | 10 | Exactly 2: hub `pengertian-sap-business-one-dan-kegunaannya` (lead) + cousin `8-modul-sap-indonesia-yang-paling-banyak-digunakan` (after the table); natural inline anchors, no "BACA JUGA" |
| FAQ quality | 9 | 3 Q&As (band 2–3), answers 39/47/43 words, each carries ≥1 number (83.000+/3→250; Rp 99.900; Rp 333.000); FAQPage-parseable |
| Image-brief completeness | N/A | Batch override: no placeholders by design; 0 `{IMAGE_NN}` found ✓ |

## What I fixed (changelog)
- **Fact-precision (substantive)**: post-table elaboration claimed multi-cabang **dan** manufaktur "keduanya bawaan produk" di SAP Business One — multi-cabang-as-built-in is not in the dossier. Rewritten to the verified scope: "persediaan multi-gudang dan produksi sudah bawaan produk dalam satu database" (dossier Claim 6 + brief's teach section "persediaan multi-gudang, produksi (BOM/MRP dasar)").
- **Table addition (verified)**: B1 "Kelas produk" cell now includes "tersedia *on-premise* atau cloud" (dossier Claim 6) — restores the brief's deployment LSI and balances the row against cloud-only Accurate / cloud+desktop Zahir.
- **Entity/GEO**: expanded CRM on first use — "penjualan/CRM (*customer relationship management*)" (addendum §5: akronim di-expand sekali; ERP and BOM were already expanded).
- **Citations**: converted both inline attributions into inline external links — SAP News Center (H2 #3) and Kemenkop UKM via Antara (H2 #2) — matching the batch pilot (`saas-paas-iaas-c01`) convention of 1–2 linked inline citations; URLs match frontmatter `external_citations`.
- **EYD/grammar (lead)**: "tutup buku menyita berhari-hari" → "menyita waktu berhari-hari"; "ditulis pihak yang berjualan" → "ditulis oleh pihak yang berjualan".
- **Clarity (H2 #1 direct answer)**: "SAP Business One berbentuk proyek lisensi per pengguna bersama partner implementasi" → "mengikuti model lisensi per pengguna yang dijalankan sebagai proyek bersama partner implementasi" (answer now 55 words, still in 40–60 band).
- **Grammar (H2 #2 direct answer)**: added "adalah" — "Bila kebutuhan inti Anda **adalah** pembukuan rapi..."; "adalah pilihan rasional" → "menjadi pilihan rasional" (avoids double "adalah"; answer 54 words).
- **Grammar**: "tanpa nilai balik jelas" → "tanpa nilai balik yang jelas".
- **Grammar (H2 #3)**: "Mitos SAP hanya untuk korporasi raksasa" → "Mitos **bahwa** SAP hanya untuk korporasi raksasa".
- **Frontmatter**: `word_count` 976 → **977** (clean count after edits: links as anchor text, markdown syntax stripped, table content counted).

## What I flagged (open issues)
- ⚠️ (accepted by design) **Handoff said "tabel 7 dimensi", tabel berisi 6 baris** — the verified dossier table has exactly 6 dimensions (kelas produk, cakupan modul, pajak Indonesia, lisensi & biaya masuk, skalabilitas, model implementasi); the writer correctly refused to invent a 7th. No action.
- ⚠️ (watch item for validator) **Zahir tier prices intentionally absent** — official IDR vs USD pages conflict (dossier Flag #3), so only the Simply entry price Rp 109.890/bulan + 1/3/5-user structure is named. Do not flag the missing tier prices as an omission.
- ⚠️ (minor, accepted) Table row "Kelas produk" necessarily states each product's class; this is a brief-mandated comparison dimension in structured data, not a prose/H2 restatement of the definition snippet — the once-only definition rule is satisfied (no "Apa itu" H2; no definitional paragraph in the body).
- ⚠️ (minor, accepted) "UMKM" left unexpanded (household term for this audience; consistent with the 2026-05 benchmark's plain use of UKM). "MRP" deliberately avoided by writing "perencanaan material" — acceptable, no unexpanded acronym remains.
- ℹ️ (option for curator) The brief permits swapping the cousin link to the 2026-05 sibling "7 Tanda Bisnis Anda Sudah Butuh SAP Business One" **if** its live URL is published; no live URL is confirmed, so the verified cousin `8-modul-sap-indonesia-yang-paling-banyak-digunakan` stays. Total internal links remain exactly 2 either way.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers (grep: 0)
- [x] No "Selain itu" opening paragraphs (grep: 0)
- [x] No "Penting untuk dicatat / dipahami bahwa" (0)
- [x] "Dengan demikian" not used (0)
- [x] Em-dash count ≤2 — actual: **1** (inside the verbatim definition snippet)
- [x] Varied paragraph lengths — 1-sentence ("Pasarnya luas: ..."), 2–3-sentence paras, two bold-lead-in lists, one table
- [x] Not every H2 → bullet list — H2 #1 prose + table + prose; H2 #2 and #3 prose-framed lists with elaboration paragraphs
- [x] No generic claims without numbers — 12+ inline figures
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan: 0)
- [x] No service-dump paragraph — zero Soltius mentions in body
- [x] No "Sebagai kesimpulan" opener — Kesimpulan opens on a callback ("Pertanyaan 'ERP terbaik untuk UKM' sebenarnya salah arah")

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| 83.000+ pelanggan, 170+ negara (snippet, tabel, FAQ #1); 10 pelanggan baru/hari; 500+ ekstensi; 850 partner; 3→250 karyawan; 50 lokalisasi; "pelanggan tipikal = perusahaan kecil/menengah" | dossier Claims 1–5, 7 (SAP News Center, 15 Des 2025, dibaca researcher) ✓ | pass |
| Accurate Online Rp 333.000/bulan (1 data usaha + 1 user, termasuk PPN); user tambahan Rp 22.200/bulan; multi-cabang Rp 99.900/bulan; manufaktur Rp 2,22 juta/bulan; cap "per situs resmi vendor, Juli 2026" di atas tabel | dossier Claims 9–10 (accurate.id/harga, 2026-07-06) ✓ | pass |
| Zahir Online mulai Rp 109.890/bulan (Simply, 1 user), paket berjenjang 1/3/5 user — tanpa harga tier atas | dossier Claim 13 + Flag #3 respected ✓ | pass |
| Pajak: Accurate = e-Faktur + ekspor XML Coretax; Zahir = kompatibel impor e-Faktur Ditjen Pajak (versi 6), TIDAK disejajarkan dengan Coretax | dossier Claims 11, 14 + Flag #4 respected ✓ | pass |
| B1 modul (keuangan, penjualan/CRM, pembelian, persediaan, produksi & perencanaan material, pelaporan; satu database; on-premise/cloud) — bukan "S/4HANA versi ringan" (klaim itu memang tidak ditulis) | dossier Claim 6 + edge-case note ✓ | pass |
| Soltius "diakui sebagai SAP Business One Partner of the Year", mendampingi asesmen → implementasi → pasca go-live | company_profile.md (award 2024 & 2023 utk 2023/2022; juga 2021); implementer framing, no superlative ✓ | pass |

Blacklist sweep: no "Soltius builds SAP", no invented products/prices/dates, no "±18 pengguna" (Flag #1 ✓), no "Rp 277.500" (Flag #2 ✓), no dongle claim (Flag #5 ✓), no B1 rupiah price (Flag #6 ✓), implementation duration hedged as "proyek terencana bersama partner, bukan aktivasi instan" without hard numbers (Flag #7 ✓).

### C. On-page SEO checklist (seo_playbook §3, with batch overrides)
- [x] Meta title ≤60 (keyword first 30) — actual: **60** chars; "SAP Business One vs Accurate" at chars 1–28
- [x] Meta description 140–160 — actual: **151**
- [x] Slug ≤60, kebab-case, keyword — actual: `sap-business-one-vs-accurate-vs-zahir` (**37**)
- [x] H1 contains keyword — working title preserved verbatim per brief
- [x] H2 count (addendum: 3–4 body) — actual: **3 body** + FAQ + Kesimpulan
- [x] ≥1 question-format H2 — 2 of 3 (#2 "Kapan Accurate atau Zahir Masih Cukup?", #3 "Kapan Bisnis Berkembang Membutuhkan SAP Business One?"); #2 doubles as the honest/counter-conventional section
- [x] Keyword in first 100 words — lead sentence 1 ("Pencarian \"SAP Business One vs Accurate\"...")
- [x] Definition snippet near top (40–60 words) — 52-word "Ringkasnya:" blockquote, dossier draft verbatim
- [x] ≥8 LSI terms — 12+ (erp terbaik untuk ukm, software akuntansi lokal, Accurate Online, Zahir Online, add-on, multi-cabang, multi-gudang, e-Faktur, Coretax, skalabilitas, konsolidasi, BOM, lisensi per pengguna, on-premise/cloud)
- [x] Internal links **exactly 2** (override) — hub `pengertian-sap-business-one-dan-kegunaannya` (lead) + cousin `8-modul-sap-indonesia-yang-paling-banyak-digunakan` (post-table); inline, descriptive anchors
- [x] External authoritative citations 1–2 — **2 inline links** (SAP News Center; Antara/Kemenkop UKM); vendor price pages attributed in-text as "per situs resmi vendor, Juli 2026" without outbound links (per brief: basis faktual, bukan sitasi otoritas)
- [x] FAQ **2–3** (override) — actual: **3**, answers 39/47/43 words, each with ≥1 fact/number, from the brief's PAA
- [x] Image placeholders **0 / banned** (override) — actual: 0
- [x] ≥1 structured element — 1 comparison table (6 dimensi × 3 produk) + 2 bold-lead-in lists; 10+ prose paragraphs
- [x] Word count **800–1000** (override) — actual: **977** (frontmatter updated)
- [x] ≥4 specific inline numbers — Rp 333.000; Rp 109.890; Rp 22.200; Rp 99.900; Rp 2,22 juta; 83.000+; 170+; 500+; 850; 10/hari; 3→250; 25,5 juta; 50 lokalisasi; 30 hari

### C2. GEO extractability (seo_playbook §2a)
- [x] Direct 40–60-word answer immediately after each body H2 — **55 / 54 / 44** words, each carrying that H2's own new point (license/expansion model; kapan produk lokal cukup; sinyal transisi via add-on stacking) — none restates the snippet
- [x] **Definition-once rule (addendum)**: definition appears only in the snippet; no "Apa itu" H2; no definitional paragraph in the body; the table's "Kelas produk" row is structured comparison data, not a prose restatement
- [x] One quotable, verifiable point per paragraph — every Accurate/Zahir claim independently checkable against the vendor's official page; harga rows capped "per Juli 2026"
- [x] Entities full-name on first use, acronyms expanded once — ERP, BOM, CRM (fixed this pass); MRP avoided as "perencanaan material"; SAP Business One / Accurate Online / Zahir Online named in full
- [x] FAQ parseable for FAQPage schema; freshness via `publish_month: 2026-07` + in-text "Juli 2026" price caps (meta-block template has no separate dateModified field)

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Framed as implementer/pendamping — "mendampingi ... dari asesmen kebutuhan, implementasi, hingga dukungan pasca *go-live*"; never "builds"
- [x] Self-mentions ≤**2** (override) — actual: **2** (Kesimpulan positioning line + soltius.co.id CTA); zero mid-body asides — the article's neutrality-as-weapon strategy is intact
- [x] No unverifiable superlatives — "Partner of the Year" is a verified award framed as recognition (allowed); title's "ERP Terbaik" is the user-given working title, and the Kesimpulan explicitly reframes it ("sebenarnya salah arah")
- [x] SAP/partner product names + specs match product_matrix.md / dossier
- [x] Closing uses a company_profile.md positioning line (SAP Business One Partner of the Year credential)
- [x] Soft website CTA is the final line, consultative, separate from the Kesimpulan paragraph
- [x] Hub link as natural inline anchor in the lead, no callout

### E. Anti-cannibalization spot check
- Closest prior: `tanda-bisnis-butuh-sap-business-one` (2026-05) — diagnostic "7 tanda" format, deliberately names **no** competitors; its notes list "detailed product comparison vs specific competitors" as an open angle, which this article fills
- This article: 3-way head-to-head (tabel 6 dimensi, harga resmi, pajak, model lisensi, decision framework per tahap bisnis); the H2 #3 "4 sinyal transisi" list is brief-mandated and framed through cost/add-on stacking, not the 2026-05 measured-threshold diagnostic format
- Subtopic overlap (Jaccard estimate): ≈ 0.08–0.15 (shared: batas software akuntansi vs ERP) — < 0.4; vs `cloud-erp-vs-on-premise-c01` (2026-06) ≈ 0.08 (deployment comparison, not brand comparison)
- Verdict: **distinct angle confirmed**

### F. Image-brief completeness
**N/A — batch-2026-07 override**: no `{IMAGE_NN}` placeholders by design, no images.json, image-planner stage skipped. Confirmed **0** placeholders in the final (grep). The visual concept (3-way comparison) is carried by the 6-dimension table, per addendum §3.

---

## The shipping question
A skeptical CFO comparing these three products would find: verified official prices with a date cap, an honest "kapan produk lokal masih cukup" section from an SAP partner, a cost-based transition signal instead of FUD, and exactly one restrained Soltius mention pair at the close. Yes — ship it.
