---
brief_id: "fifo-lifo-fefo-c01"
editor_run_date: "2026-10-08"
batch: "conditional-2026-10"
recommendation: "approve"
overall_score: 9
word_count: 1151
---

# Editor QC Report — FIFO, LIFO, dan FEFO: Perbedaan Metode Manajemen Stok

## Recommendation
**approve**

Draft masuk sudah sangat patuh pada `style_addendum.md` 2026-10; semua gate batch terpenuhi dan fact-check terhadap dossier + `product_matrix.md` bersih (lima flag faktual dossier sudah di-hedge persis sesuai rekomendasi). Dua perbaikan dilakukan in-place, keduanya akurasi/kualitas tanpa menyentuh angle atau struktur: (1) **koreksi faktual** pada positioning line Soltius — draft menulis "bagian dari Metrodata Group **sejak 1998**", padahal `company_profile.md` menyatakan Soltius **didirikan 1998** dan **diakuisisi Metrodata 2008**; "sejak 1998" keliru menempel pada keanggotaan Metrodata (kesalahan yang sama ditemukan & diperbaiki di `buku-besar-c01`). Diselaraskan ke frasa approved `company_profile.md` baris 139: "berpengalaman sejak 1998 dan bagian dari Metrodata Group", dengan SAP Platinum Partner via United VARs tetap sebagai kredensial utama (tepat untuk topik teknis SAP). (2) **Anti-redundansi GEO** — paragraf setelah tabel di H2-1 semula mengulang poin "dasar urutan" yang sudah dinyatakan di jawaban langsung H2-1 dan di kolom tabel (poin yang sama disebut tiga kali), melemahkan prinsip satu-poin-terkutip-per-paragraf; ditulis ulang menjadi poin BARU yang menyambung tesis inti artikel (dua dimensi: rotasi fisik vs penilaian akuntansi) sekaligus menegaskan aturan anti-kanibalisasi "rata-rata tidak masuk tabel rotasi" sebagai prosa yang terlihat, dan memancing ke H2-3. Word count final 1.151 (cleaned-prose `tools/count_words.py`, band 1000–1200, target ~1100); em-dash body = 1 (hanya di snippet, ≤2); CV panjang-paragraf 0,486 (jauh di atas gate 0,30). Tiga keputusan user (Q1–Q3) tetap terbuka karena kolom landing page di Sheet kosong untuk brief ini dan user eksplisit minta ditanya — default strategist sudah dipakai di draft tetapi belum dikonfirmasi; ketiganya **bukan blocker publikasi** tetapi harus di-sign-off sebelum ship. Artikel siap lanjut ke seo-quality-validator.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tanpa pembuka klise ("Di era digital/Seiring perkembangan/Tidak dapat dipungkiri" = 0), 0 "Selain itu"/"Dengan demikian"/"Penting untuk dicatat", em-dash = 1 (≤2, hanya di snippet), tanpa adjektiva hype. Ritme bervariasi kuat (CV paragraf 0,486; paragraf 2–5 kalimat + 2 list). "secanggih apa pun" = caveat jujur, bukan hype produk. |
| Factual & SAP-spec accuracy | 9 | 5 flag dossier semua di-hedge tepat (lihat §B). Daftar strategi stock removal EWM (FIFO, stringent FIFO, LIFO, shelf life expiration date) sesuai SAP Learning; "mewujudkan logika FEFO; SAP tidak memakai kata FEFO secara harfiah" — tidak menyalin kode F/L/H classic WM. Positioning Soltius dikoreksi (1998 = founded, bukan Metrodata-sejak-1998). Tidak ada angka selisih HPP/laba/pajak atau % pasar yang dikarang. |
| On-page SEO compliance | 9 | meta_title 49 char (keyword "FIFO, LIFO, FEFO" di depan), meta_description 154 char (band 140–160), slug keyword-led 46 char, H1 53 char memuat primary keyword, keyword di 100 kata pertama + paragraf terakhir. 4 H2 konten (band 3–5), 3 di antaranya question-format, 1 tabel 5 kolom + 1 bullet list. |
| GEO extractability (§2a) | 9 | Jawaban langsung setelah tiap H2 = 49/45/49/45 kata (band 40–60, poin BARU bukan ulangan snippet); definition snippet 45 kata (SEKALI; tidak diulang di body/H2/FAQ — H2-1 memberi "dasar urutan", bukan definisi ulang); satu poin terkutip per paragraf; FAQ 4 Q&A siap FAQPage; freshness `publish_month: 2026-10`. |
| Soltius framing discipline | 9 | 2 self-mention (positioning line Kesimpulan + soft CTA soltius.co.id baris terakhir); "mengimplementasikan dan mendampingi… dari penilaian kebutuhan hingga dukungan pasca go-live", bukan "membuat"; bukan vendor WMS; tanpa superlatif. SAP EWM/S/4HANA di H2-4 = teaching, bukan self-mention. |
| Internal linking | 9 | TEPAT 2 inline (hub "sistem manajemen gudang (WMS)" + cousin "migrasi ERP ke cloud"), keduanya di H2-4; tanpa link ketiga; tanpa "BACA JUGA". URL konsisten dengan brief/dossier (diverifikasi live oleh strategist/peneliti 2026-10-08; tidak di-refetch sesi ini). |
| FAQ quality | 9 | 4 Q&A (band 3–5); jawaban 45/53/42/43 kata (band 30–60); tiap jawaban memuat ≥1 fakta/angka (dasar urutan FIFO vs FEFO; PSAK 14/202 + 1 Jan 2009 + Pasal 10(6); daftar industri FEFO; rata-rata tertimbang + LIFO dihapus 2009); dari PAA; tidak mengulang snippet kata-per-kata. |

## What I fixed (changelog)
- **Koreksi faktual — positioning line Soltius** (Kesimpulan): "SAP Platinum Partner melalui United VARs dan **bagian dari Metrodata Group sejak 1998**" → "SAP Platinum Partner melalui United VARs, **berpengalaman sejak 1998 dan bagian dari Metrodata Group**". Alasan: `company_profile.md` baris 12/50–51 — Soltius didirikan 1998, diakuisisi Metrodata 2008; frasa lama secara harfiah menyatakan keanggotaan Metrodata sejak 1998 (salah). Frasa baru = positioning line approved `company_profile.md` baris 139.
- **Anti-redundansi GEO — paragraf pasca-tabel H2-1**: paragraf lama ("Perbedaan yang paling sering terlewat ada di kolom dasar urutan. FIFO menilai kapan barang diterima, FEFO menilai kapan barang kedaluwarsa…") mengulang poin yang sudah dinyatakan di jawaban langsung H2-1 + kolom "Dasar urutan" tabel (poin sama = 3×). Ditulis ulang menjadi poin BARU: dua hal yang sengaja tidak masuk tabel (rata-rata tertimbang = dimensi akuntansi; LIFO hidup di dua dunia), menyambung tesis "dua dimensi" dan memancing ke H2-3 — tanpa em-dash baru, tanpa definisi ulang.
- **Frontmatter `word_count` 1142 → 1151** (hasil `tools/count_words.py` setelah kedua edit; band 1000–1200 terpenuhi).

## What I flagged (open issues)
- ⚠️ **KEPUTUSAN USER — Q1 (own-hub link)**: kolom landing page di Sheet KOSONG untuk brief ini; user eksplisit minta ditanya. Strategist memilih hub = halaman **konsep WMS** (`/id/blog/konsep-warehouse-management-system-yang-wajib-anda-tahu`, diverifikasi live & tidak membahas akuntansi → aman dari kanibalisasi). Alternatif: `jenis-manfaat-dan-cara-implementasi-WMS`. *Rekomendasi*: konfirmasi ke user; bila diganti, sesuaikan 1 anchor di H2-4 (total tetap 2). **Bukan blocker.**
- ⚠️ **KEPUTUSAN USER — Q2 (dimensi akuntansi sebagai pembeda utama)**: H2-3 (LIFO dilarang PSAK/pajak) dipakai sebagai pembeda terkuat vs hub WMS, meski CTA = SAP EWM (gudang). Ini justru net-new vs seluruh repositori (tidak ada artikel lain membahasnya) dan menjadi alasan utama dedup DISTINCT. *Rekomendasi*: pertahankan; tanyakan ke user apakah setuju atau ingin fokus murni rotasi fisik/gudang. **Bukan blocker.**
- ⚠️ **KEPUTUSAN USER — Q3 (CTA anchor)**: CTA = SAP EWM (Extended Warehouse Management) → fungsi stock removal strategy, sesuai kolom brief_tracker. *Rekomendasi*: konfirmasi ke user. **Bukan blocker.**
- ⚠️ **PSAK 202 & Pasal 10 ayat (6) UU PPh — sumber resmi belum di-refetch sesi ini**: substansi (LIFO dihapus PSAK 14 revisi 2008 berlaku 1 Jan 2009; penomoran PSAK 202 sejak 1 Jan 2024; pajak dibatasi rata-rata/FIFO) konsisten lintas sumber + dokumen IAI/PwC/DDTC di dossier, tetapi teks resmi IAI/JDIH tidak dibuka langsung di sesi ini. Draft sudah meng-hedge tepat: PSAK dinyatakan sebagai status terkini + atribusi (tanpa kutip pasal verbatim), PSAK 202 diframe "perubahan penomoran, bukan substansi" + "sebaiknya dikonfirmasi langsung ke naskah resmi", Pasal 10(6) diatribusikan tanpa klaim "tak pernah berubah". *Rekomendasi*: biarkan apa adanya (hedge sudah sesuai dossier Flags); validator boleh spot-check iaiglobal.or.id / JDIH bila ingin presisi maksimal. **Bukan blocker.**
- ⚠️ **Ahrefs MCP tidak terhubung** — volume/KD = n/a (konsisten dengan seluruh batch 2026-10). Intent definisional + komparatif jelas; tidak memengaruhi kualitas on-page. Bukan isu artikel.
- ⚠️ **Plagiarism + AI-detector belum final** — `tools/quality-check.ps1` adalah tugas seo-quality-validator (bukan editor). Frasa inti orisinal (tesis "dua dimensi"; contoh FEFO apotek yang ditandai ilustrasi; "otomasi tidak memperbaiki data induk"); risiko rendah, tetapi verdict akhir di tangan validator.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] Tanpa pembuka klise ("Di era digital / Seiring perkembangan / Tidak dapat dipungkiri") — 0 kecocokan (grep)
- [x] Tanpa "Selain itu" pembuka ≥2 paragraf berurutan — 0
- [x] Tanpa "Penting untuk dicatat/diingat/dipahami" — 0
- [x] "Dengan demikian" tidak dipakai — 0
- [x] Em-dash (U+2014) = 1 (batas ≤2; hanya di definition snippet)
- [x] Panjang paragraf bervariasi — CV 0,486 (gate ≥0,30); paragraf 2–5 kalimat + 2 list
- [x] Tidak tiap H2 → 3 bullet — campuran prosa + 1 tabel 5 kolom + 1 bullet list (3 item lead-in bold)
- [x] Tanpa klaim generik tanpa angka — ≥5 angka spesifik inline (lihat §C2/E-E-A-T)
- [x] Tanpa adjektiva hype (canggih/powerful/seamless/terdepan/terbaik) — 0; "secanggih apa pun" = caveat jujur
- [x] Tanpa service-dump Soltius
- [x] EYD: "kedaluwarsa" (bukan "kadaluarsa") konsisten

### B. Factual & SAP-spec spot-check (vs dossier + product_matrix)
| Claim | Source check | Verdict |
|---|---|---|
| Strategi stock removal SAP EWM: FIFO, stringent FIFO, LIFO, shelf life expiration date | dossier (SAP Learning "Applying the Stock Removal Strategies") ✓; sitasi inline di H2-4 | pass |
| "SAP tidak memakai kata FEFO secara harfiah; shelf life expiration date mewujudkan logika FEFO" | dossier flag EWM-vs-classic-WM ✓ (tidak menyalin kode F/L/H) | pass |
| LIFO dihapus PSAK 14 revisi 2008, berlaku 1 Januari 2009; sah = FIFO + rata-rata tertimbang | dossier (PwC/akademik, confidence high substansi) ✓; di-hedge + atribusi, tanpa kutip verbatim | pass (hedged) |
| PSAK 14 → PSAK 202 sejak 1 Januari 2024, perubahan penomoran bukan substansi | dossier (dokumen IAI + DDTC) ✓; diframe "status terkini, konfirmasi ke naskah resmi" | pass (hedged) |
| Pasal 10 ayat (6) UU No. 36/2008 batasi penilaian ke rata-rata atau FIFO | dossier (Ortax/DDTC) ✓; diatribusikan, tanpa klaim "tak pernah berubah" | pass (hedged) |
| IAS 2 melarang LIFO (hanya FIFO + weighted average) | dossier (IFRS/IASPlus, otoritas tinggi) ✓; sitasi inline di H2-3 | pass |
| Contoh FEFO apotek (batch A masuk Jan/kedaluwarsa Des; batch B masuk Feb/kedaluwarsa Jun) | dossier menandai ILUSTRASI ✓; draft menulis "Angka ini sekadar ilustrasi, bukan data pelanggan" | pass |
| Soltius = SAP Platinum via United VARs; didirikan 1998; bagian Metrodata | product_matrix + company_profile ✓ **(dikoreksi: 1998 = founded, bukan Metrodata-sejak-1998)** | pass (fixed) |

### C. On-page SEO checklist (seo_playbook §3 + batch override)
- [x] Meta title 49 char (keyword di karakter awal) — ≤60 ✓
- [x] Meta description 154 char — band 140–160 ✓
- [x] Slug `fifo-lifo-fefo-perbedaan-metode-manajemen-stok` (keyword-led, 46 char) — ≤60 ✓
- [x] H1 53 char memuat primary keyword "FIFO, LIFO, dan FEFO" (judul GIVEN user, row 10 tab Oktober — dipakai apa adanya; panjang ideal, tanpa flag)
- [x] H2 konten = 4 (band 3–5); 3 question-format (H2-1, H2-3, H2-4); ≥1 praktis/terstruktur (H2-1 tabel + H2-2 list + contoh)
- [x] Keyword di 100 kata pertama (lead) + paragraf terakhir (Kesimpulan)
- [x] Definition snippet 45 kata (SEKALI; tidak diulang di body/H2/FAQ)
- [x] LSI/semantic ≥8 (FIFO, LIFO, FEFO, rotasi stok, penilaian/penentuan biaya persediaan, rata-rata tertimbang/weighted average, HPP, tanggal kedaluwarsa/shelf life, barang bertanggal, PSAK 14/PSAK 202, IAS 2, SAP EWM, stock removal strategy, picking)
- [x] Internal link = 2 (override batch: 1 hub + 1 cousin, inline di H2-4) — tanpa link ketiga, tanpa BACA JUGA
- [x] Sitasi eksternal otoritatif = 2 inline (SAP Learning di H2-4 + IAS 2/IASPlus di H2-3)
- [x] FAQ = 4 Q&A (band 3–5)
- [x] ≥1 list + ≥1 tabel (1 bullet list lead-in bold + 1 tabel komparasi 5 kolom)
- [x] Word count = 1.151 (band batch 1000–1200; target 1100; cleaned-prose deterministik)
- [N/A] Image placeholder — override batch: 0 placeholder (tidak di-flag, sesuai addendum §7)

### C2. GEO extractability (seo_playbook §2a)
- [x] Jawaban langsung 40–60 kata tepat setelah tiap H2 utama: 49 / 45 / 49 / 45 kata (poin baru, bukan ulangan snippet)
- [x] Tiap paragraf tubuh = satu poin yang bisa dikutip & diverifikasi (dasar urutan; dua-dimensi; tabel row-by-row; contoh FEFO; standar PSAK/IAS; stock removal strategy)
- [x] FAQ parseable untuk FAQPage; freshness ditandai `publish_month: 2026-10` di meta block
- [x] ≥5 angka spesifik inline: 3 metode; tabel 5 kolom; contoh FEFO apotek (Jan/Des vs Feb/Jun); PSAK 14 berlaku 1 Jan 2009; PSAK 202 sejak 1 Jan 2024; Pasal 10 ayat (6) UU No. 36/2008; Soltius sejak 1998

### D. Soltius framing discipline (product_matrix + style_guide §11)
- [x] Soltius = implementator/pendamping ("mengimplementasikan dan mendampingi… dari penilaian kebutuhan hingga dukungan pasca go-live"), BUKAN "membuat SAP", BUKAN vendor WMS
- [x] Self-mention = 2 (≤2 batch): positioning line di Kesimpulan + soft CTA baris terakhir
- [x] Tanpa superlatif tak terverifikasi ("terbaik/nomor satu")
- [x] Nama/spesifikasi SAP cocok dengan product_matrix/dossier (SAP Extended Warehouse Management (EWM), SAP S/4HANA, stock removal strategy)
- [x] Penutup memakai positioning line company_profile (Platinum via United VARs, berpengalaman sejak 1998, Metrodata) — **dikoreksi agar akurat**
- [x] Soft website CTA soltius.co.id = baris terakhir, setelah Kesimpulan, nada konsultatif ("Untuk menelaah penerapan aturan rotasi stok di SAP Extended Warehouse Management… kunjungi soltius.co.id")
- [x] Hub link = anchor inline natural di H2-4 ("sistem manajemen gudang (WMS)"), bukan BACA JUGA; cousin inline di H2-4 ("migrasi ERP ke cloud")

### E. Anti-cannibalization spot check
- Closest prior dalam cluster gudang/persediaan: hub WMS `konsep-warehouse-management-system-...` (own-hub link naik) yang memuat SATU H2 ringkas FIFO/LIFO/FEFO (~160 kata, dangkal by design). Di `articles_history/index.json`, FEFO hanya muncul sebagai satu subtopik ("traceability batch FEFO") pada artikel WMS "7 Tanda Gudang Butuh WMS" (2026-08). **Tidak ada artikel committed yang memakai "fifo lifo fefo" sebagai primary keyword.**
- Boundary dipatuhi: artikel ini = spoke terdedikasi (kedalaman penuh 3 metode + dimensi akuntansi net-new + panduan keputusan + SAP EWM) yang sengaja dihindari hub. Tabel diberi kolom wajib "Dasar urutan" (pembeda dari tabel hub); rata-rata tertimbang TIDAK dimasukkan ke tabel rotasi.
- Subtopic overlap (Jaccard estimate): ≈ 0,13 vs H2 FIFO/LIFO/FEFO di hub WMS; ≈ 0,04–0,05 vs safety-stock/reorder-point/eoq/inventory-turnover. angle_hash `sha1:de3ddbd703a9` tidak bertabrakan.
- Verdict: **distinct angle confirmed** (< 0,4). Struktur spoke-di-bawah-hub memperkuat cluster, bukan kanibalisasi (primary keyword berbeda: hub = "warehouse management system"; artikel ini = "fifo lifo fefo").

## The shipping question
Jika artikel ini tayang di soltius.co.id besok dan dibaca konsultan SAP senior + CFO/CIO skeptis — tabel perbedaan 3 metode yang bersih dan extractable (kolom "Dasar urutan"), tesis "dua dimensi" yang meluruskan kebingungan SERP (rotasi fisik vs penilaian akuntansi), fakta net-new bahwa LIFO dilarang untuk pelaporan di Indonesia (di-hedge jujur + atribusi PSAK/IAS 2/Pasal 10(6)), istilah SAP yang akurat ("shelf life expiration date", bukan mengklaim SAP menamainya "FEFO"), contoh apotek yang ditandai ilustrasi, dan positioning Soltius yang akurat tanpa overselling — WEBARQ Promote akan bangga. **Ya → approve** (dengan tiga keputusan user Q1–Q3 yang perlu di-sign-off sebelum ship; bukan blocker kualitas).
