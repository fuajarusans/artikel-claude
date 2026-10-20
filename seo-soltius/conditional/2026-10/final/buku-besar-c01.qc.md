---
brief_id: "buku-besar-c01"
editor_run_date: "2026-10-08"
batch: "conditional-2026-10"
recommendation: "approve"
overall_score: 9
word_count: 1196
---

# Editor QC Report — Apa Itu Buku Besar (General Ledger) dan Perannya dalam Akuntansi

## Recommendation
**approve**

Draft masuk sudah sangat patuh pada `style_addendum.md` 2026-10; semua gate batch terpenuhi dan fact-check terhadap dossier bersih (empat flag faktual sudah di-hedge persis sesuai rekomendasi dossier). Dua perbaikan substantif dilakukan in-place, keduanya akurasi/EYD, bukan perubahan angle/struktur: (1) **koreksi faktual** pada positioning line Soltius — draft menulis "bagian dari Metrodata Group sejak 1998", padahal `company_profile.md` menyatakan Soltius **didirikan 1998** dan **diakuisisi Metrodata 2008**; "sejak 1998" keliru menempel pada keanggotaan Metrodata. Diselaraskan ke frasa approved "berpengalaman sejak 1998 dan bagian dari Metrodata Group". (2) **EYD**: "men-substansiasi saldo" (verba serapan yang belum baku) → "membuktikan keabsahan saldo" — makna substantiation dipertahankan, keterbacaan naik. Empat URL (2 internal + 2 eksternal) diverifikasi ulang live hari ini (WebFetch 2026-10-08): semua 200/OK konten penuh dan anchor kontekstual akurat. Word count final 1.196 (cleaned-prose `tools/count_words.py`, band 1000–1200; angka deterministik tanpa drift), AI-detector `quality-check.ps1` = 0,08 (pass), CV panjang-paragraf 0,345 (> gate 0,30). Artikel siap lanjut ke seo-quality-validator. Dua keputusan user tetap terbuka (judul 64-char vs varian 52-char; hub/cousin) — lihat flag; keduanya bukan blocker publikasi.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tanpa pembuka klise, 0 em-dash, 0 "Selain itu"/"Dengan demikian"/"Penting untuk dicatat", tanpa adjektiva hype. Ritme bervariasi (CV paragraf 0,345; paragraf 1–5 kalimat). AI-detector heuristik 0,08 → pass. Hanya 1 list (6 langkah) → tidak "tiap H2 → 3 bullet". |
| Factual & SAP-spec accuracy | 9 | 4 flag dossier semuanya di-hedge tepat (field ACDOCA "sekitar 350+… kisaran, bukan spesifikasi pasti"; rekonsiliasi FI↔CO disitasi langsung ke SAP Learning; subledger ditulis "sebagian besar hilang" tanpa klaim Asset Accounting auto; kolom saldo skontro ditulis hati-hati). Positioning Soltius dikoreksi (founded 1998 ≠ Metrodata sejak 1998). Tidak ada spesifikasi SAP dikarang. |
| On-page SEO compliance | 9 | meta_title 48 char (keyword "Buku Besar" di depan), meta_description 153 char, slug keyword-led 25 char, H1 + first-100-words + paragraf terakhir memuat keyword, 4 H2 konten (semua question-format), 1 tabel ×2 + 1 numbered list. |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata setelah tiap H2 (43/45/43/42 kata, poin baru bukan ulangan snippet); satu poin terkutip per paragraf; FAQ 5 Q&A siap FAQPage; definition snippet 44 kata; freshness `publish_month: 2026-10`. |
| Soltius framing discipline | 9 | 2 self-mention (positioning line Kesimpulan + soft CTA baris terakhir); "mendampingi/memindahkan/implementasi hingga dukungan", bukan "membuat"; tanpa superlatif; SAP S/4HANA Finance/Universal Journal di H2 #4 = teaching, bukan self-mention. |
| Internal linking | 9 | Tepat 2 (hub "siklus akuntansi" inline di H2 #1 + cousin "modul keuangan SAP (FICO)" inline di H2 #4); tanpa link ketiga; tanpa "BACA JUGA". Kedua URL live 200/OK (WebFetch 2026-10-08). |
| FAQ quality | 9 | 5 Q&A; jawaban 30–60 kata; tiap jawaban memuat 1 fakta/angka (aturan akun kontrol, JU 01, trial balance, 5 kategori bagan akun, Universal Journal/ACDOCA); dari PAA; tidak mengulang snippet kata-per-kata. |

## What I fixed (changelog)
- **Koreksi faktual — positioning line Soltius**: "bagian dari Metrodata Group **sejak 1998**" → "**berpengalaman sejak 1998** dan bagian dari Metrodata Group" (Kesimpulan). Alasan: `company_profile.md` — Soltius didirikan 1998, diakuisisi Metrodata 2008; frasa lama secara harfiah menyatakan keanggotaan Metrodata sejak 1998 (salah). Frasa baru = approved positioning line `company_profile.md` baris 139–140.
- **EYD**: "Tim keuangan tetap harus **men-substansiasi saldo**" → "…**membuktikan keabsahan saldo**". Verba serapan "men-substansiasi" belum baku; makna *substantiation* (membuktikan saldo didukung bukti) dipertahankan.
- **Frontmatter `word_count` 1194 → 1196** (hasil `tools/count_words.py` setelah dua edit; +2 kata dari frasa positioning line yang disejajarkan).

## What I flagged (open issues)
- ⚠️ **Keputusan user — JUDUL/H1 64 char** (di atas target 50–60): judul GIVEN user (row 8, tab Oktober 2026) dipertahankan apa adanya sesuai mode conditional/given-angle. meta_title (field terpisah) sudah 48 char, jadi gate SEO ≤60 tetap aman. *Rekomendasi*: teruskan ke user — opsi pangkas 52 char tersedia: "Apa Itu Buku Besar (General Ledger) dalam Akuntansi" tanpa mengubah substansi. Bukan blocker.
- ⚠️ **Keputusan user — HUB & COUSIN** (landing kosong di Sheet → dipilih strategist, keputusan standing): hub = blog "siklus akuntansi" (`/id/blog/apa-itu-siklus-akuntansi-dan-manfaatnya`); cousin = "SAP FICO" (`/id/blog/sistem-sap-fico-dan-modulnya-yang-banyak-digunakan-perusahaan-besar`), konsisten dengan sibling `jurnal-umum-c01` & `neraca-saldo-c01`. *Rekomendasi*: bila user mengganti, sesuaikan 2 tautan (H2 #1 + H2 #4) sebelum publikasi; total tetap 2.
- ⚠️ **Sitasi AccountingTools (presisi halaman)**: URL yang ditautkan (`/what-is-a-subsidiary-ledger.html`, live & ber-tanggal 2026-05-15) **mengimplikasikan** aturan "total buku pembantu = saldo akun kontrol" (via FAQ "discrepancies between the subsidiary ledger and the general ledger control account"); halaman AccountingTools "Control account" yang menyatakan aturan eksplisit ada di URL berbeda. Aturan itu sendiri = akuntansi baku dan ber-atribusi AccountingTools. *Rekomendasi*: biarkan (domain & klaim benar); bila ingin presisi maksimal, validator boleh menambah/ganti ke halaman control-account AccountingTools — tetapi jatah sitasi tetap 1–2. Bukan blocker.
- ⚠️ **CV paragraf 0,345 < 0,45 ideal** — `quality-check.ps1` menandai `paragraph-low-variance` severity **low** (gate 0,30 terlampaui, margin ~0,045). Wajar untuk explainer B2B padat ber-tabel. *Rekomendasi*: biarkan; menaikkan ke 0,45 akan memaksa padding/pemotongan yang melanggar on-point + band 1000–1200.
- ⚠️ **vocab-repetition 37,5% > 30% target** — `quality-check.ps1` severity **low**. Inheren pada explainer satu-topik: "buku besar", "akun", "saldo", "jurnal", "posting" adalah entity inti yang WAJIB konsisten untuk SEO/entity-clarity; mengganti dengan sinonim justru menurunkan keterkutipan AI. Bukan AI-tell, tidak di-flag sebagai isu.
- ⚠️ **Plagiarism belum final** — `quality-check.ps1` mengekstrak 8 passage kandidat untuk web-lookup; verdict akhir = tugas seo-quality-validator (WebSearch). Frasa inti orisinal (kontras kronologis-vs-per-akun, 6 langkah posting, nuansa "rekonsiliasi hilang ≠ pekerjaan close hilang"), risiko rendah.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] Tanpa pembuka klise ("Di era digital / Seiring perkembangan / Tidak dapat dipungkiri") — 0 kecocokan
- [x] Tanpa "Selain itu" pembuka ≥2 paragraf berurutan — 0
- [x] Tanpa "Penting untuk dicatat/dipahami" — 0
- [x] "Dengan demikian" tidak dipakai — 0
- [x] Em-dash (U+2014) = 0 (batas ≤2)
- [x] Panjang paragraf bervariasi — CV 0,345 (gate ≥0,30); paragraf 1–5 kalimat
- [x] Tidak tiap H2 → 3 bullet — campuran prosa + 2 tabel + 1 numbered list (6 langkah)
- [x] Tanpa klaim generik tanpa angka — ≥8 angka spesifik inline
- [x] Tanpa adjektiva hype (canggih/powerful/seamless/terdepan) — 0 ("mutakhir" = deskriptor akurat "saldo up-to-date", bukan hype)
- [x] Tanpa service-dump Soltius

### B. Factual & SAP-spec spot-check (vs dossier + product_matrix)
| Claim | Source check | Verdict |
|---|---|---|
| ACDOCA "sekitar 350+ field, bervariasi antar-rilis… kisaran, bukan spesifikasi pasti" | dossier flag A (hedge wajib; SAP PRESS/Mastering SAP ~350) ✓ | pass |
| "no reconciliation between financial accounting and controlling is necessary" (SAP Learning) | dossier core fact + **WebFetch live 2026-10-08 konfirmasi kutipan verbatim** ✓ | pass |
| Universal Journal tersedia sejak S/4HANA Finance 1503 | dossier (SAP PRESS, confidence high) ✓ | pass |
| 3 bentuk (T/skontro/staffel 3 vs 4 kolom); kolom saldo skontro ditulis hati-hati | dossier (Esa Unggul) + flag kolom saldo (hedge) ✓ | pass |
| Buku besar pembantu: total = saldo akun kontrol (AccountingTools) | dossier core fact; akuntansi baku; halaman live ✓ (lihat flag presisi) | pass |
| Soltius = SAP Platinum via United VARs, didirikan 1998, bagian Metrodata | product_matrix + company_profile ✓ **(dikoreksi: 1998=founded, bukan Metrodata-sejak-1998)** | pass (fixed) |

### C. On-page SEO checklist (seo_playbook §3 + batch override)
- [x] Meta title 48 char (keyword "Buku Besar" di karakter awal) — ≤60 ✓
- [x] Meta description 153 char — band 140–160 ✓
- [x] Slug `buku-besar-general-ledger` (keyword-led, 25 char) — ≤60 ✓
- [x] H1 memuat primary keyword (+ padanan "General Ledger"). Catatan: H1 64 char — judul GIVEN user, lihat flag
- [x] H2 konten = 4 (band 3–5); semua question-format; ≥1 praktis/terstruktur (H2 #2 tabel + H2 #3 6 langkah)
- [x] Keyword di 100 kata pertama (lead + snippet) + paragraf terakhir (Kesimpulan)
- [x] Definition snippet 44 kata (SEKALI; tidak diulang di body/H2/FAQ — H2 #1 memberi KONTRAS, bukan definisi ulang)
- [x] LSI/semantic ≥8 (general ledger, jurnal umum, buku besar pembantu/subsidiary ledger, bagan akun/chart of accounts, neraca saldo/trial balance, posting, siklus akuntansi, SAP S/4HANA Finance, Universal Journal/ACDOCA, FI, CO)
- [x] Internal link = 2 (override batch: 1 hub + 1 cousin, inline) — tanpa link ketiga, tanpa BACA JUGA
- [x] Sitasi eksternal otoritatif = 2 inline (SAP Learning + AccountingTools)
- [x] FAQ = 5 Q&A (band 3–5)
- [x] ≥1 list + ≥1 tabel (1 numbered list 6 langkah + 2 tabel komparasi)
- [x] Word count = 1.196 (band batch 1000–1200; target 1100; cleaned-prose deterministik)
- [N/A] Image placeholder — override batch: 0 placeholder (tidak di-flag)

### C2. GEO extractability (seo_playbook §2a)
- [x] Jawaban langsung 40–60 kata tepat setelah tiap H2 utama: 43 / 45 / 43 / 42 kata (poin baru, bukan ulangan snippet)
- [x] Tiap paragraf tubuh = satu poin yang bisa dikutip & diverifikasi (kontras jurnal-vs-GL, tabel bentuk row-by-row, 6 langkah, penyatuan ACDOCA)
- [x] FAQ parseable untuk FAQPage; freshness ditandai `publish_month: 2026-10` di meta block

### D. Soltius framing discipline (product_matrix + style_guide §11)
- [x] Soltius = implementator/pendamping ("mendampingi… memindahkan… implementasi hingga dukungan pasca go-live"), BUKAN "membuat SAP"
- [x] Self-mention = 2 (≤2 batch): positioning line di Kesimpulan + soft CTA baris terakhir
- [x] Tanpa superlatif tak terverifikasi ("terbaik/nomor satu")
- [x] Nama/spesifikasi SAP cocok dengan product_matrix/dossier (SAP S/4HANA Finance, Universal Journal, ACDOCA, FI, CO)
- [x] Penutup memakai positioning line company_profile (Platinum via United VARs, berpengalaman sejak 1998, Metrodata) — **dikoreksi agar akurat**
- [x] Soft website CTA soltius.co.id = baris terakhir, setelah Kesimpulan, nada konsultatif ("Untuk menelaah kesiapan… kunjungi soltius.co.id")
- [x] Hub link = anchor inline natural di H2 #1 ("siklus akuntansi"), bukan BACA JUGA; cousin inline di H2 #4 ("modul keuangan SAP (FICO)")

### E. Anti-cannibalization spot check
- Closest prior dalam cluster akuntansi: `jurnal-umum-c01` (tahap pencatatan) & `neraca-saldo-c01` (tahap verifikasi). Buku besar = tahap ANTARA keduanya, eksplisit disisakan di "Notes for future strategist" milik keduanya.
- Boundary dipatuhi: tidak mengulang cara membuat jurnal / jurnal umum vs khusus (milik jurnal-umum); tidak mengulang jenis/kesalahan neraca saldo (milik neraca-saldo) — konteks tahap tetangga ≤1 kalimat.
- Subtopic overlap (Jaccard estimate): ≈ 0,21 vs jurnal-umum; ≈ 0,20 vs neraca-saldo (bersama: siklus akuntansi, Universal Journal, hub). angle_hash `sha1:cfc431e8bbe1` tidak bertabrakan.
- Verdict: **distinct angle confirmed** (< 0,4)

## The shipping question
Jika artikel ini tayang di soltius.co.id besok dan dibaca konsultan SAP senior + CFO/CIO skeptis — kontras jurnal-vs-buku-besar yang bersih dan extractable, tabel 3 bentuk + 6 langkah posting yang konkret, angka SAP ber-sumber dan di-hedge jujur (ACDOCA ~350+ field, kutipan SAP Learning diatribusi, nuansa "rekonsiliasi hilang ≠ pekerjaan close hilang"), positioning Soltius akurat tanpa overselling — WEBARQ Promote akan bangga. **Ya → approve.**
