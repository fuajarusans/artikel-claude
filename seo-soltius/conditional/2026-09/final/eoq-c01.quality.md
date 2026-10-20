---
brief_id: "eoq-c01"
validator_run_date: "2026-09-01"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.02
revision_loop: 0
batch: "conditional-2026-09 (style_addendum.md overrides applied — word band 800–1000 via cleaned-prose count, FAQ 2–3, internal links exactly 2, NO image placeholders/no images.json, definisi hanya di snippet, maks 2 self-mention Soltius)"
---

# Quality Validator Report — Economic Order Quantity (EOQ): Pengertian, Rumus, dan Manfaatnya

## Verdict: **pass**

Artikel lolos kedua gerbang QC validator. AI-detector heuristik memberi skor **0,04** (jauh di bawah ambang revise 0,30). Web-lookup pada 8 passage distinctive tidak menemukan satu pun kecocokan verbatim prosa di situs non-Soltius: topik EOQ sangat ramai di blog bisnis/akuntansi Indonesia, tetapi setiap kalimat prosa artikel ini orisinal (lead, transisi, dan langkah perhitungan ditulis dengan diksi & notasi sendiri). Angka contoh D=5.000/S=Rp100.000/H=Rp1.000→EOQ=1.000 memang contoh kanonik yang lazim di banyak tutorial ID, tetapi artikel memakai notasi D/S/H (bukan notasi buku ajar PI/2RS), menyatakan H langsung alih-alih menurunkannya dari harga×2%, dan menuliskan tiap langkah dengan prosa sendiri — reuse angka pedagogis standar, bukan lifting frasa. Seluruh aritmetika dihitung ulang independen dan benar; klaim kapabilitas SAP S/4HANA (EOQ sebagai prosedur optimum lot-sizing di MRP yang menuntut kedua biaya di data material) terverifikasi lewat SAP Community/SAP-PRESS; atribusi Harris (1913)/Wilson akurat; EYD/typografi rapi. Sesuai instruksi batch, validator **tidak** menjalankan curator dan **tidak** commit — berhenti di sini untuk review user.

## AI Detector (heuristic v2.0)
- Score: **0,04 / 1.0** (thresholds: revise ≥0,30, reject ≥0,50) → **pass**
- Paragraph burstiness (CV): **0,369** (target ≥0,45) — moderat; **di atas garis bahaya 0,30**, jadi bukan AI-tell kuat.
- Sentence burstiness (CV): **0,819** (target ≥0,45) — **sangat kuat**, ritme kalimat jelas manusiawi (kalimat rumus 1 baris berselang prosa panjang).
- Top-30 vocab share: **0,347** (di bawah ambang flag 0,35 — tidak di-flag).
- Flags (1):
  - [low] `paragraph-low-variance`: CV paragraf 0,369 (< 0,45). **Acceptable / bukan penalti bermakna.** Artikel ~900 kata yang padat-terstruktur (banyak paragraf pendek: baris rumus, jawaban langsung, lead-in bullet) secara alami menekan varians panjang paragraf; flag hanya menambah 0,04 ke skor dan tak mendekati ambang revise. Burstiness kalimat 0,819 mengonfirmasi variasi ritme yang kuat di tingkat kalimat. Bukan pengenceran AI-style; CV **tidak** turun di bawah 0,30 (failure-mode agent).
- Anti-AI manual re-check (di luar skrip): `Selain itu` pembuka = 0; `penting untuk di...` = 0; `dengan demikian` = 0; `di era digital / seiring perkembangan / tidak dapat dipungkiri / sebagai kesimpulan` = 0. Em-dash (U+2014) = **1** (≤2, di snippet "Ringkasnya:" sebagai pemisah klausa penutup). Operator ÷/× dan √ dipakai konsisten. Lead buka pada pain konkret ("sekali pesan, berapa banyak?"), bukan pembuka klise.

## Plagiarism (web lookup of distinctive passages)
8 passage distinctive dari skrip dicek via quoted WebSearch + WebFetch pada laman sumber teratas. Passage yang murni definisi/ rumus matematika standar diabaikan sesuai aturan skoring ("common/standard phrasings").

- ✅ Lead: "Setiap staf pengadaan menghadapi satu keputusan berulang yang jarang dihitung..." — **clean.** Quoted search = **0 kecocokan**; hasil hanya jurnal/artikel bertema pengadaan, tanpa frasa yang sama.
- ✅ "Rumus EOQ hanya membutuhkan tiga variabel: permintaan tahunan, biaya per pesanan, dan biaya penyimpanan per unit per tahun" — **clean.** Tidak ada verbatim; laman EOQ ID (jurnal.id, zahironline, ukirama) menyusun daftar variabel dengan kalimat & urutan berbeda.
- ✅ "Rumus EOQ tampak bersih karena bersandar pada asumsi yang jarang benar utuh di lapangan" — **clean.** 0 verbatim; frasa asli (hasil hanya laman EOQ bertema keterbatasan, kata-kata berbeda).
- ✅ "Kesamaan kedua biaya di titik itu bukan kebetulan angka, melainkan konsekuensi matematis rumusnya" — **clean.** 0 verbatim (hasil malah tak relevan: kimia pH & buku matematika ekonomi). Prosa orisinal.
- ⚠️ Angka contoh inti (D=5.000, S=Rp100.000, H=Rp1.000 → EOQ=√1.000.000=**1.000 unit**, 5×/tahun) — **catatan transparan, bukan hit.** Set angka ini adalah contoh kanonik yang muncul di setidaknya satu tutorial ID (versi buku ajar: harga Rp50.000 × penyimpanan 2% = Rp1.000, notasi "PI/2RS"). Namun (a) artikel memakai notasi internasional **D/S/H** (CFI/SAP), bukan PI/2RS; (b) menyatakan **H=Rp1.000 langsung**, tidak menurunkannya dari harga×2%; (c) tiap langkah ("Hitung pembilang…", "Tarik akar kuadratnya…") ditulis dengan prosa & urutan berbeda; (d) dilabeli *ilustrasi* eksplisit. Sumber kanonik lain memakai angka berbeda total (jurnal.id 240.000/150.000→12.000; ukirama 24.000/100.000→3.464; zahironline 500/1jt→100). Angka murni fakta matematis dari round-number pedagogis → **partial minor**, bukan verbatim prose lift.
- ✅ "Sebagai SAP Platinum Partner melalui keanggotaan United VARs dan berpengalaman sejak 1998, Soltius mengimplementasikan..." — **diabaikan** sebagai self-reference kredensial Soltius (bukan plagiarisme; sesuai aturan).
- Definisi snippet "Ringkasnya: economic order quantity (EOQ) adalah kuantitas pemesanan yang meminimalkan total biaya persediaan..." — **diabaikan** sebagai definisi standar istilah terkenal (inherently high-overlap).
- **Aggregate plagiarism score: 0,02** (< 0,10 pass; tidak ada verbatim hit ≥20 kata di situs non-Soltius). Tautan soltius.co.id yang muncul = internal self-reference, bukan plagiarisme.

## Fact / formula re-verification (override: re-verify formula math + cited regulation/product-capability claims)
- **Aritmetika dihitung ulang independen — semua benar:**
  - EOQ = √(2×5.000×100.000 ÷ 1.000) = √(1.000.000.000 ÷ 1.000) = √1.000.000 = **1.000 unit** ✓
  - Frekuensi 5.000 ÷ 1.000 = **5×/tahun**; 365 ÷ 5 = **73 hari** ✓
  - Tabel kurva-U (tiap sel diverifikasi): Q=500 → 10× × Rp100.000 = Rp1.000.000 pesan; (500÷2)×Rp1.000 = Rp250.000 simpan; total **Rp1.250.000** ✓ · Q=1.000 → 5× → Rp500.000 pesan; 500×Rp1.000 = Rp500.000 simpan; total **Rp1.000.000** (pesan = simpan ✓) · Q=2.000 → 2,5× → Rp250.000 pesan; 1.000×Rp1.000 = Rp1.000.000 simpan; total **Rp1.250.000** ✓. Titik minimum di EOQ & kesamaan pesan=simpan terkonfirmasi secara matematis.
- **Klaim kapabilitas SAP S/4HANA — terverifikasi (bukan fabrikasi):** SAP Community + SAP-PRESS (Material Requirements Planning with SAP S/4HANA) mengonfirmasi EOQ/Andler termasuk **optimum/optimizing lot-sizing procedures** di MRP, dan prosedur ini **menuntut storage/holding cost dan lot-size-independent (ordering/setup) cost terpelihara di material master** agar ukuran lot optimal dihitung. Karakterisasi artikel ("salah satu prosedur optimum lot-sizing… meminimalkan gabungan biaya pemesanan dan biaya penyimpanan, sepanjang kedua biaya terpelihara di data material") **akurat dan sengaja generik** — tanpa T-code/nama prosedur/versi karangan. SAP IBP disebut benar sebagai perencanaan lintas produk & lokasi, akronim di-expand.
- **Atribusi historis — akurat:** EOQ diperkenalkan **Ford W. Harris (1913)**, dianalisis/populer lewat **R. H. Wilson** ("Wilson formula") — sesuai dossier (Erlenkotter, *Operations Research* 1990). (Sebagian sumber web menulis "1914/1915"; 1913 adalah tahun publikasi asli Harris di *Factory* dan defensible.)

## Structure & EYD integrity (all apply in full)
- Frontmatter YAML lengkap; H1 ber-keyword; lead 5 kalimat (~68 kata ≤80) buka pada pain konkret + keyword; snippet "Ringkasnya:" (blockquote, 47 kata, band 40–60) — **definisi muncul SEKALI saja**, tidak ada H2 "Apa itu EOQ?" yang mengulang. ✓
- Body **4 H2** (band 3–4) + `## FAQ` + `## Kesimpulan`; ≥1 H2 question-format (H2#2 "Mengapa EOQ Menghasilkan Total Biaya Terendah?") ✓; ≥1 H2 praktis/terstruktur (H2#1 list bernomor 5 langkah + baris rumus; H2#2 tabel kurva-U) ✓; format campur (list/tabel/bullet lead-in/prosa), bukan tiap H2 → list 3-butir. ✓
- FAQ = **3** Q&A (band 2–3); tiap jawaban 40–55 kata + memuat angka/fakta. ✓
- Kesimpulan ≤80 kata + 1 positioning line Soltius; soft CTA soltius.co.id sebagai baris terakhir terpisah. ✓
- Self-mention Soltius = **2** (positioning Kesimpulan + CTA); framing "mengimplementasikan dan mendampingi" (implementer/pendamping, bukan builds/owns). ✓
- EYD/typografi: `Rp100.000` (tanpa spasi, titik ribuan), desimal koma (`2,5×`), istilah asing di-italic (*lead time*, *safety stock*, *stockout*, *lot-sizing*, *Wilson formula*, *optimum lot-sizing*), √/×/÷ konsisten. Bersih. (Catatan minor non-blocking: "reorder point" sesekali tak di-italic sementara *safety stock* di-italic — inkonsistensi gaya sepele, bukan galat EYD.)

## Batch override log (addendum §7 — recorded as N/A / compliant, not failed)
- **Word band 800–1000: COMPLIANT.** Skrip mentah menghitung **982** token (termasuk sel tabel/token rumus/heading) — masih di dalam band; hitungan cleaned-prose editor = **942** (target ~900). Sesuai override, angka mentah skrip **TIDAK** dibaca sebagai >1000 fail. **N/A→compliant.**
- **FAQ 2–3: COMPLIANT** (3 Q&A).
- **Internal links = 2: COMPLIANT** (hub "supply chain management" + cousin "manajemen gudang"; keduanya soltius.co.id). Catatan editor: cousin memakai URL fallback WMS karena sibling reorder-point masih HTTP 500 — di luar cakupan verdict validator, tidak memblokir.
- **Image checks: N/A by design** — 0 `{IMAGE_NN}` + tidak ada images.json; stage image di-skip untuk batch ini. Tidak di-flag.
- Catatan editor (sitasi SAP Help = atribusi teks inline, bukan hyperlink; CFI = 1 hyperlink aktif) = memenuhi kuota 1–2 sitasi; minor, tidak memblokir.

## Loop status
Revision loop **0** (first pass). Tidak ada revisi diperlukan; writer tidak di-loop.

## Handoff
- Curator-ready: editor `recommendation: approve` + validator `verdict: pass`.
- Sesuai instruksi batch conditional 2026-09, validator **tidak** menjalankan curator dan **tidak** commit ke `articles_history` — batch berhenti di sini untuk review user.
