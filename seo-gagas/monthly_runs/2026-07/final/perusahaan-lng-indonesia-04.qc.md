---
brief_id: "perusahaan-lng-indonesia-04"
editor_run_date: "2026-06-09"
recommendation: "approve"
overall_score: 9
---

# Editor QC Report — Rantai Pasok LNG: dari Likuifaksi hingga Pengguna Akhir

## Recommendation
**approve**

Draft yang kuat dan disiplin. Semua titik kritis akurasi-lanskap yang ditandai brief (PROTECT) sudah ditangani dengan benar di draft masuk: tidak ada klaim "~95% LNG untuk PLN" (PLN dibingkai kualitatif "salah satu konsumen utama" dengan angka ESDM 2023 yang valid: 683,49 dari 3.745 BBTUD); Bontang dilabeli kapasitas terpasang/*nameplate* ~22,5 MTPA dengan catatan hanya 2–3 *train* aktif; PGN Gagas konsisten diposisikan sebagai **distributor beyond-pipeline yang mengoperasikan LNG Hub**, BUKAN pelaku likuifaksi/regasifikasi, dengan PT PGN LNG Indonesia dan PT Nusantara Regas eksplisit sebagai entitas terpisah; tidak ada klaim GTSI "54%"/"terbesar"; angka emisi (CO2 −25%/NOx −90%) tidak dipakai (FLAG 6 terhindar). Dua sitasi eksternal (Tangguh Train 3 dan pemanfaatan gas domestik 2023) saya verifikasi langsung ke sumber primer ESDM dan keduanya cocok. Edit yang saya terapkan bersifat polish ringan dan length-neutral: menghilangkan em-dash di body dan meta description, memperkuat jawaban GEO di bawah H2 #2, dan menambahkan kalimat guardrail pada brief IMAGE_03 agar tim desain hanya menempatkan PGN Gagas di node LNG Hub. Artikel layak tayang.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tidak ada AI opener; "Selain itu" nihil; em-dash body 0; ritme paragraf bervariasi (kalimat-1 berselang dengan blok 3–4 kalimat); aside jujur ("padahal di sinilah keandalan ditentukan"). |
| Factual & energi-gas / LNG accuracy | 10 | Semua angka tertelusur ke dossier + diverifikasi ke ESDM; semua FLAG dossier (1–6) ditangani benar; entitas dinamai lengkap dan ditempatkan di tahapnya. |
| On-page SEO compliance | 9 | Meta title 48 char (keyword di char 1), meta desc ~153 char, slug 44 char; 5 H2 konten; 3 internal link sesuai brief; 2 sitasi ESDM; FAQ 5; numbered+bulleted+tabel hadir. |
| GEO extractability (§2a) | 9 | Definisi snippet 47 kata; jawaban langsung 40–60 kata di bawah tiap H2 utama; numbered list untuk "tahapan"; tabel peran; FAQ FAQPage-ready; dateModified ada. |
| PGN Gagas framing discipline | 10 | Distributor/operator LNG Hub di simpul hilir; bukan produsen/regasifikator; tanpa superlatif; positioning line + soft CTA di penutup. |
| Internal linking | 10 | Hub LNG inline di lead; cousin CNG di H2 #3 (kontras rantai); cousin Gaslink di penutup (sisi pengguna akhir) — ketiganya kontekstual, bukan "BACA JUGA". |
| FAQ quality | 8 | 5 Q&A (dalam rentang 5–7), tiap jawaban 40–80 kata, self-contained, memuat angka. Bisa ditambah 1–2 Q&A (mis. "Bagaimana LNG diangkut") jika ingin mendekati batas atas, tapi tidak wajib. |
| Image-brief completeness | 9 | images.json valid; 3 entri cocok dengan 3 marker; alt/caption/visual_direction/asset_type lengkap Bahasa Indonesia; guardrail "Gagas hanya di node LNG Hub" ada di sourcing_note dan kini juga di body brief. |

## What I fixed (changelog)
- **Meta description**: ganti em-dash (`—`) menjadi koma ("...pengguna akhir, lengkap dengan...") untuk mengurangi stylistic tell; panjang tetap ~153 char (band 140–160).
- **Body em-dash dihapus** (lead/definisi, baris LNG –161°C): "...Aceh atau Jakarta — sekaligus..." → "...Aceh atau Jakarta, sekaligus...". Em-dash body sekarang **0** (sebelumnya 1; keduanya dalam batas, tapi lebih bersih).
- **GEO H2 #2**: perkuat jawaban langsung agar menyebut dua tahap pembeda secara eksplisit — "...dari produksi gas di sumur, **melalui likuifaksi dan regasifikasi,** hingga konsumsi pengguna akhir" (lebih quotable untuk AI).
- **IMAGE_03 (placeholder body)**: tambah kalimat guardrail — "PGN Gagas hanya muncul pada node LNG Hub (distribusi hilir), bukan pada node kilang atau regasifikasi." — menegaskan instruksi yang sudah ada di images.json agar tim desain tidak salah menempatkan Gagas.
- **Trim length-neutral**: "fleksibilitas LNG terasa" dirapikan (−1 kata); "diangkut secara ekonomis" → "diangkut ekonomis" (−1 kata) untuk menjaga arah net-neutral.
- **Frontmatter `word_count`**: diperbarui ke **1559** (dari 1557 baseline; net +2 kata, ≤1600).

## What I flagged (open issues)
- ⚠️ **FAQ di batas bawah (5 Q&A)** — *recommendation*: opsional, bukan blocker. Jika ingin menambah kedalaman PAA, tambahkan "Bagaimana LNG diangkut dari kilang ke pengguna?" sebagai Q&A keenam (jawaban tersedia di dossier §E). Saat ini tetap memenuhi syarat 5–7.
- ⚠️ **Sitasi "Finance.detik.com, 2024" untuk kapasitas Bontang** — *recommendation*: bukan blocker. Angka *nameplate* 22,5 MTPA + "2–3 train aktif" terverifikasi di dossier (FLAG 3) dan dibingkai hati-hati ("kapasitas terpasang ... meski kini hanya..."). Sumbernya media (bukan regulator), tapi klaimnya konservatif dan tidak menobatkan ranking; aman dipertahankan. Jika ada rilis ESDM/Pertamina terbaru, dapat di-*upgrade* saat refresh.
- ⚠️ **"PT PGN LNG Indonesia, 2026" sebagai sumber sifat dasar LNG (–161°C, 1/600)** — *recommendation*: bukan blocker. Ini fakta industri baku; atribusi ke afiliasi grup PGN sudah benar dan netral (bukan klaim pemasaran). Sesuai disiplin dossier.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers
- [x] No "Selain itu" opening ≥2 consecutive paragraphs (tidak dipakai sama sekali)
- [x] No "Penting untuk dicatat / dipahami bahwa"
- [x] "Dengan demikian" not overused (tidak dipakai)
- [x] Em-dash count ≤2 — **body prose: 0** (meta block: 0 setelah fix)
- [x] Varied paragraph lengths (transisi 1 kalimat di baris 64/102 berselang dengan blok 3–4 kalimat di §1/§4)
- [x] Not every H2 → 3-bullet list (H2 #1 prosa; #2 numbered; #3 prosa+1 list; #4 tabel+prosa; #5 prosa+bullet)
- [x] No generic claims without numbers (–161°C, 1/600, 22,5 MTPA, 11,4 MTPA, 2,1 MTPA, 683,49/3.745 BBTUD, 120.000–180.000 m³, 20.000–40.000 liter)
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan)
- [x] No service-dump paragraph (Gagas hanya disebut sebagai peran hilir + penutup)

### B. Factual & energi-gas / LNG spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Tangguh Train 3 diresmikan 24 Nov 2023, total 11,4 MTPA | esdm.go.id (verifikasi WebSearch langsung) — "diinaugurasi 24 November 2023; kapasitas naik ke 11,4 MTPA; investasi USD 4,83 miliar" | pass |
| Sektor pembangkit 683,49 BBTUD dari 3.745 BBTUD domestik (2023) | migas.esdm.go.id / esdm.go.id (verifikasi WebSearch langsung) — angka cocok persis; domestik 68,2% | pass |
| PLN: kargo Donggi Senoro 3 dari 5 untuk PLN EPI (2025) | dossier §D (Kompas, 11 Agt 2025: 3 PLN EPI, 2 PGN) | pass |
| Bontang *nameplate* ~22,5 MTPA, 2–3 train aktif | dossier §D + FLAG 3 (label "kapasitas terpasang", konteks 2 train aktif diberikan) | pass |
| Gagas = operator LNG Hub hilir, BUKAN likuifaksi/regasifikasi; PGN LNG Indonesia & Nusantara Regas entitas terpisah | dossier §H + product_matrix.md guardrail + company_profile.md (profil hanya menyebut LNG Hub) | pass |

**Catatan PROTECT**: klaim "~95% LNG untuk PLN" tidak ada (cek grep negatif); tidak ada "54%"/"terbesar" GTSI; angka emisi CO2/NOx tidak dipakai. Semua sesuai instruksi.

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — **48 char**, "Rantai Pasok LNG" di char 1
- [x] Meta description 140–160 — **~153 char** (em-dash diganti koma)
- [x] Slug ≤60, kebab-case, keyword — **rantai-pasok-lng-likuifaksi-pengguna-akhir (44 char)**
- [x] H1 contains keyword — "Rantai Pasok LNG: dari Likuifaksi hingga Pengguna Akhir"
- [x] H2 count 4–5 (konten) — **5** (Apa Itu / Tahapan / Mengapa Diregasifikasi / Siapa Berperan / Di Mana Paling Rapuh) + FAQ + Kesimpulan
- [x] ≥1 question-format H2 ("Mengapa LNG Harus Diregasifikasi…", "Siapa Berperan di Mana…", "Di Mana Rantai LNG Paling Rapuh…"); ≥1 honest/counter-conventional ("Di Mana Rantai LNG Paling Rapuh…")
- [x] Keyword in first 100 words (lead, kalimat ke-4)
- [x] Definition snippet near top (blockquote 47 kata, dalam 150 kata pertama)
- [x] ≥8 LSI terms — **counted 11+**: likuifaksi, regasifikasi, terminal regasifikasi, FSRU, LNG carrier, LNG ISO tank, LNG Hub, kilang LNG, break-bulking, virtual pipeline, boil-off gas, vaporizer
- [x] 3 internal links — **/perusahaan-lng-indonesia/ (lead) + /perusahaan-cng-indonesia/ (H2 #3) + /gaslink/ (penutup)**
- [x] ≥1 external authoritative citation — **2** (migas.esdm.go.id; esdm.go.id) — keduanya ESDM
- [x] FAQ 5–7 Q&As — **5**
- [x] 2 image placeholders (up to 3) — **3** (IMAGE_01/02/03)
- [x] ≥1 list + ≥1 table — numbered (7 tahap) + bulleted (5 titik rapuh) + 1 tabel peran
- [x] Word count 1,200–1,600 — **1559**

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — H2 #1 (~58 kata), #3 (~45), #4 (~42), #5 (~40); H2 #2 lead-in singkat lalu numbered list (format ideal untuk "tahapan")
- [x] Each body paragraph makes one independently quotable, verifiable point (mis. "Bontang ~22,5 MTPA nameplate, 2–3 train aktif"; "pembangkit 683,49 BBTUD dari 3.745 BBTUD")
- [x] FAQ parseable for FAQPage schema; `dateModified` (2026-06-09) ada di meta block

### D. PGN Gagas framing discipline (product_matrix.md + style_guide §11)
- [x] PGN Gagas dibingkai sebagai distributor/operator LNG Hub (menyalurkan, beyond-pipeline), BUKAN pelaku likuifaksi/regasifikasi — ditegaskan eksplisit di H2 #4 dan penutup
- [x] ≤3 PGN Gagas self-mentions — **3 promosional** (aside hilir di H2 #4; positioning line penutup; soft CTA gagas.co.id) + 1 penempatan netral di sel tabel lanskap (sejajar PT Badak NGL/Nusantara Regas — faktual, bukan promosi). Sesuai izin brief ("1 kalimat netral menempatkan Gagas di distribusi hilir").
- [x] No unverifiable superlatives — artikel justru aktif menolak "terbesar" 2× sebagai pembeda
- [x] Energi-gas / LNG product names + specs match product_matrix.md / dossier (LNG Hub, Gaslink; tanpa klaim fasilitas hulu/midstream)
- [x] Closing uses a company_profile.md positioning line ("anak usaha PGN ... bagian dari Subholding Gas Pertamina ... di luar jaringan pipa")
- [x] Soft website CTA present as FINAL line ("...kunjungi gagas.co.id dan mulai konsultasinya") — konsultatif, bukan "beli sekarang"
- [x] Hub link present as natural inline anchor (di lead: "para perusahaan LNG di Indonesia") — bukan callout

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none committed yet untuk `perusahaan-lng-indonesia`** (history hanya berisi cluster 2026-07 Gaslink/Gasku/CNG/Perusahaan CNG). Pembanding terdekat secara topik: `cng-indonesia-04` (CNG beyond-pipeline, rantai CNG).
- Subtopic overlap (Jaccard estimate) vs `cng-indonesia-04`: **~0,15** — cng-04 = rantai CNG (Mother Station → kompresi → GTM/tube trailer → PRS), tanpa likuifaksi/regasifikasi/kilang/FSRU/peta pemain LNG. Artikel ini = rantai LNG penuh + likuifaksi/regasifikasi + lanskap pemain nasional. CNG hanya disinggung 1× sebagai kontras (H2 #3).
- Verdict: **distinct angle confirmed**.

### F. Image-brief completeness (images.json)
- [x] JSON parses
- [x] One entry per `{IMAGE_NN}` placeholder (IMAGE_01/02/03 = 3 entri; cocok dengan 3 marker di body)
- [x] Setiap entri memiliki alt_id (≤125 char), caption_id, visual_direction, suggested_asset_type — semua Bahasa Indonesia
- [x] IMAGE_03 (map): sourcing_note menegaskan "PGN Gagas hanya pada node LNG Hub Bandung (Distribusi Hilir) — jangan tempatkan di node kilang/regasifikasi"; fasilitas publik LNG (Bontang/Tangguh/DSLNG/Arun/FSRU Lampung/Nusantara Regas) ditandai per tahap. Body brief kini juga memuat guardrail ini.
- [x] Kebutuhan "foto/aset situs nyata": tidak ada — ketiga aset adalah diagram/peta orisinal; sourcing_note IMAGE_02 mencatat ikon truk GTM agar tidak memakai foto armada nyata tanpa konfirmasi.
- (Tidak ada PNG yang dihasilkan — sesuai desain; tim desain klien yang mengeksekusi.)

## The shipping question
Jika tayang besok di gagas.co.id dan dibaca praktisi energi/gas senior serta pembeli industri yang skeptis: ya, WEBARQ Promote pantas bangga. Artikel memetakan rantai LNG end-to-end dengan jujur, menyebut pemain pada tahapnya tanpa ranking, menolak superlatif, dan menempatkan PGN Gagas secara akurat di simpul hilir — tepat di mana profil dan dossier mendukungnya. **approve.**
