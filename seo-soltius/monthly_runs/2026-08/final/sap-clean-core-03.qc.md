---
brief_id: "sap-clean-core-03"
editor_run_date: "2026-06-08"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Clean Core untuk Pengguna Bisnis: Kustomisasi SAP Tanpa Coding lewat Key-User Extensibility

## Recommendation
**approve**

Draft ini kuat secara substansi: sudut "pengguna bisnis/key user, tanpa BTP" benar-benar berbeda dari sibling -04 (side-by-side untuk developer), fakta SAP tepat dan diatribusikan dengan benar, dan struktur GEO-nya rapi (jawaban 40-60 kata setelah tiap H2, satu poin terkutip per paragraf, tabel ekstraktabel). Satu masalah material: 24 em-dash di seluruh dokumen, jauh melewati batas anti-AI style_guide.md §5 (maks ~2) dan tanda AI terkuat. Saya turunkan ke 0 di tempat (mengubah ke koma/titik dua/tanda kurung/konektor seperti "yaitu/yakni/misalnya/seperti") tanpa mengubah makna. Klise "Perlu dicatat:" juga diganti menjadi pernyataan langsung. Semua klaim faktual saya verifikasi terhadap dossier, termasuk dua item do-NOT-assert yang penting: penulis sudah BENAR memakai "Export/Import Software Collections" (bukan "adaptation transport" yang dilarang Flag #2) dan mengatribusikan klaim "scope key-user lebih luas" ke SAP tanpa angka karangan (Flag #1). Soltius dibingkai sebagai pendamping/implementer (1 penyebutan nama), tanpa superlatif. Word count 1.682 (dalam 1.500-1.800). Setelah perbaikan em-dash, artikel ini layak tampil di soltius.co.id dan akan tahan dibaca konsultan SAP senior maupun CIO skeptis.

## Quality scores
| Dimension | Score (1-10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | 24 em-dash diperbaiki ke 0; klise "Perlu dicatat" dihapus. Ritme paragraf bervariasi (1-6 kalimat); tidak ada opener AI; bukan listicle-robot. |
| Factual & SAP-spec accuracy | 9 | 5 klaim diperiksa silang ke dossier; semua pass. Do-NOT-assert (adaptation transport, scope claim, angka 73%) dihormati dengan benar. |
| On-page SEO compliance | 9 | Meta title 51 char (keyword depan), meta desc 156 char, slug 48 char, H1 berkata kunci, 3 internal link inline, FAQ 7. |
| GEO extractability (§2a) | 9 | Jawaban 40-60 kata setelah tiap H2; satu poin terkutip/paragraf; FAQ FAQPage-ready; `date_modified` ditambahkan ke meta block. |
| Soltius framing discipline | 10 | 1 penyebutan nama Soltius (penutup), implementer/partner, tanpa superlatif, positioning line dari company_profile. |
| Internal linking | 10 | Hub + 2 cousin sesuai product_matrix (Clean Core -> ERP migration + Low-Code), semua anchor inline natural, tanpa "BACA JUGA". |
| FAQ quality | 9 | 7 Q&A, tiap jawaban 40-80 kata, memetakan PAA brief; menyertakan caveat verifikasi nama app CFL. |
| Image-brief completeness | 9 | images.json valid, 3 entri cocok 3 placeholder, alt_id/caption_id/visual_direction/asset_type lengkap dalam Bahasa Indonesia; tidak butuh screenshot SAP nyata. |

## What I fixed (changelog)
- **Anti-AI (em-dash):** menurunkan jumlah em-dash dari **24 menjadi 0** di seluruh dokumen (snippet definisi, badan §1-§5, bullet, sel tabel, heading H2 §5, FAQ, Kesimpulan, dan 3 placeholder IMAGE). Konversi ke koma / titik dua / tanda kurung / konektor ("yaitu", "yakni", "misalnya", "seperti", "sebuah") tanpa mengubah makna.
- **Anti-AI (klise):** mengganti "Perlu dicatat: ... " (§2, Adapt UI) menjadi pernyataan langsung "Satu batasan penting: ...".
- **Heading:** "## Kapan key-user extensibility TIDAK cukup — dan harus diserahkan ke developer" -> koma (mempertahankan framing jujur "TIDAK cukup").
- **Meta:** em-dash di `meta_description` -> titik dua (tetap 156 char, dalam 140-160).
- **GEO freshness:** menambahkan `date_modified: "2026-06-08"` ke frontmatter (sebelumnya tidak ada) untuk memenuhi §2a (dateModified/freshness).
- **Frontmatter:** memperbarui `word_count` 1672 -> 1682 mengikuti penambahan kata konektor.
- Memindahkan artikel hasil poles ke `final/sap-clean-core-03.id.md`.

## What I flagged (open issues)
- ⚠️ **Tidak ada numbered list di badan** (hanya 1 bullet list + 1 tabel). Memenuhi syarat mandatori style_guide §2 (list + tabel), tetapi checklist seo_playbook §3 idealnya ingin numbered list juga. *Recommendation:* opsional — alur kerja lima langkah sudah ada sebagai diagram IMAGE_01; jika ingin numbered list teks, ubah konsep IMAGE_01 menjadi daftar bernomor di badan. Bukan blocker; tidak dipaksakan agar tidak menambah padding.
- ⚠️ **Nama app "Custom Fields and Logic" sensitif waktu** (dossier Flag #3). Penulis sudah menambah caveat "dikonfirmasi aktif per Juni 2026; nama dapat berubah, verifikasi ulang". *Recommendation:* jika CMS mempublikasikan jauh di masa depan, verifikasi ulang nama app. Sudah ditangani di teks; tidak ada aksi editor lain.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — lead membuka pada pain konkret ("jangan utak-atik core")
- [x] No "Selain itu" opening >=2 consecutive paragraphs — 0 kemunculan
- [x] No "Penting untuk dicatat / dipahami bahwa" — "Perlu dicatat" diperbaiki -> langsung
- [x] "Dengan demikian" not overused — 0 kemunculan
- [x] Em-dash count <=2 — **diperbaiki dari 24 -> 0**
- [x] Varied paragraph lengths — campuran 1-6 kalimat; tidak simetris
- [x] Not every H2 -> 3-bullet list — hanya §2 punya bullet; H2 lain prosa + tabel
- [x] No generic claims without numbers — angka spesifik di 6+ tempat
- [x] No stacked hype adjectives — tidak ada "canggih/powerful/seamless/terdepan"
- [x] No service-dump paragraph — Soltius 1 kali, di penutup

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Tiga jalur extensibility + level A-D ditambahkan Agustus 2025 | dossier Claim 1 & 13 (SAP News Center Agt 2025) | pass |
| Cakupan custom field key-user "lebih luas" dari developer extensibility (hanya RAP) — diatribusikan ke SAP, tanpa angka | dossier Claim 6 + Flag #1 (atribusi "menurut SAP", no number) | pass |
| Upgrade-safe via release contract C0 + prefiks ZZ "100% upgrade-stable" | dossier Claim 7 (SAP Community) | pass |
| Transport via "Export/Import Software Collections" (BUKAN "adaptation transport") | dossier Claim 8 + Flag #2 (istilah terlarang dihindari) | pass |
| CFL = nama app aktif per Juni 2026 + 3 fungsi (Custom Fields / Data Source Extension / Custom Logic) | dossier Claim 4 + Flag #3 (caveat verifikasi ada) | pass |

Catatan: Angka NTT "73% fit-to-standard" (Flag #4) dengan benar TIDAK dipakai. Framing Soltius (Claim 16) akurat: United VARs + Metrodata sejak 1998, "mendampingi/mengimplementasikan", bukan "membangun".

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title <=60 (keyword first 30) — actual: 51 char / keyword "Clean Core" pada posisi 0
- [x] Meta description 140-160 — actual: 156
- [x] Slug <=60, kebab-case, keyword — actual: `clean-core-kustomisasi-sap-tanpa-coding-key-user` (48)
- [x] H1 contains keyword — "Clean Core" di H1
- [x] H2 count 4-5 — actual: 5 (di luar FAQ + Kesimpulan)
- [x] >=1 question-format H2 (3 buah); >=1 honest/counter-conventional ("Kapan ... TIDAK cukup")
- [x] Keyword in first 100 words — "SAP Clean Core" (anchor) di lead
- [x] Definition snippet near top (40-60 words) — blockquote "Ringkas" ~57 kata
- [x] >=8 LSI terms — counted: 20+ (key-user/in-app extensibility, CFL, Adapt UI, SAPUI5 flexibility, BAdI, CDS view, ABAP Cloud, RAP, side-by-side, SAP BTP, release contract C0, Export/Import Software Collections, Extensibility Inventory, Custom Business Objects, fit-to-standard, SAP Activate, technical debt, namespace ZZ, clean core, S/4HANA)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: sap-clean-core-the-complete-guide (hub), low-code-and-no-code-platforms, migrasi-erp-ke-cloud
- [x] >=1 external authoritative citation — actual: SAP Learning + SAP News Center + SAP Community (atribusi inline), 2 di meta block
- [x] FAQ 5-7 Q&As — actual: 7
- [x] 2 image placeholders (up to 3) — actual: 3
- [~] >=1 list + >=1 table — 1 bullet list + 1 tabel ada (memenuhi §2); numbered list tidak ada (lihat flag — minor)
- [x] Word count 1,500-1,800 — actual: ~1,682

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40-60-word answer immediately after each major H2 — semua 5 H2 punya jawaban pembuka langsung (§1 ~55, §2 ~58, §3 ~57, §4 ~52, §5 ~62 kata; §5 sedikit di atas tapi jawaban langsung jelas)
- [x] Each body paragraph makes one independently quotable, verifiable point — ya; klaim + atribusi sumber per paragraf
- [x] FAQ parseable for FAQPage schema; `dateModified` / freshness noted — FAQ H3 bersih; `date_modified: 2026-06-08` ditambahkan ke meta block

### D. Soltius framing discipline (product_matrix.md + style_guide §11)
- [x] Soltius framed as implementer/partner, NOT "builds/makes SAP" — "mendampingi ... menata tata kelola extensibility saat implementasi"
- [x] <=3 Soltius self-mentions — actual: 1 penyebutan nama (penutup) + CTA domain soltius.co.id
- [x] No unverifiable superlatives — tidak ada "terbaik/nomor satu"
- [x] SAP/partner product names + specs match product_matrix.md / dossier — cocok
- [x] Closing uses a company_profile.md positioning line — "SAP Platinum Partner melalui United VARs ... Metrodata Group sejak 1998"
- [x] Soft website CTA present as the FINAL line — "...kunjungi soltius.co.id." (baris terakhir, setelah Kesimpulan, konsultatif)
- [x] Hub link present as natural inline anchor — di lead, anchor "SAP Clean Core", bukan callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: `side-by-side-extensibility-sap-btp-clean-core` (2026-06 sap-clean-core-04)
- Subtopic overlap (Jaccard estimate): ~0.15 (hanya berbagi konsep "in-app vs side-by-side", yang di sini dibalik menjadi subjek untuk audiens pengguna bisnis, bukan kontras untuk developer)
- Verdict: distinct angle confirmed. Audiens (pengguna bisnis vs IT/developer), alat (in-app/CFL/Adapt UI vs side-by-side BTP), dan intent berbeda. Tidak ada entri 2026-08 untuk brief_id ini di history (belum di-commit) -> tidak ada tabrakan keyword sebulan.

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per `{IMAGE_NN}` placeholder — 3 entri (IMAGE_01/02/03) = 3 placeholder di badan
- [x] Each entry has alt_id (<=125 chars) + caption_id + visual_direction + suggested_asset_type (all Bahasa Indonesia) — lengkap; alt_id terpanjang ~118 char
- [x] Any "real SAP screenshot" requirement surfaced — sourcing_note tiap entri menyatakan "tidak memerlukan screenshot SAP; jangan reproduksi UI/logo SAP verbatim" (ditangani)
- (No generated PNGs to check — images executed by client's design team from this brief.)
