---
brief_id: "capacity-building-pembiayaan-kreatif-01"
editor_run_date: "2026-08-12"
recommendation: "approve"
overall_score: 9
ai_score: 0.04
plagiarism_score: 0.05
---

# Editor QC Report — Capacity Building Pembiayaan Kreatif: Fondasi Kapasitas PJPK

## Recommendation
**approve**

Draf ini masuk dalam kondisi kuat: sudut artikel setia pada brief (kerangka konseptual, bukan reportase kegiatan seperti seluruh SERP pesaing), seluruh angka bersumber dari dosir, dan tidak satu pun dari sebelas pemeriksaan wajib bulan ini gagal — tidak ada klaim keanggotaan Kantor Bersama KPBU, tidak ada angka rupiah RPJMN 2025–2029, tidak ada jadwal batch, tidak ada nama individu, tidak ada pengembang CP3P yang keliru, dan tidak ada wording yang menyiratkan IIGF Institute memberikan kredensial. Yang saya perbaiki di tempat adalah pekerjaan penyuntingan biasa: satu blok jawaban H2 yang hanya 37 kata (di bawah ambang GEO 40–60), dua kekeliruan tata bahasa ("beban semuka itu", "Tiga keliru"), beberapa angka yang belum membawa tahun rujukan, urutan glosarium *Availability Payment*, register siaran pers di kalimat penutup, dan ritme paragraf. Skor AI-detector 0,04 (ambang *revise* 0,30) dan tidak ada kandidat plagiarisme yang berupa prosa khas — hanya judul peraturan dan definisi regulatif baku, keduanya pengecualian eksplisit. Satu catatan jujur: kuota WebSearch sesi ini habis, sehingga verifikasi ulang secara daring dan penelusuran 8 kueri kandidat plagiarisme tidak dapat dijalankan; saya bersandar pada dosir yang untuk kelima klaim yang saya uji berstatus *high confidence* dengan *direct fetch* dan tanggal akses. Risiko sisa rendah dan saya catat sebagai *open flag*, bukan penghalang commit.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Hook naratif konkret (kepala bidang Bappeda), nol em-dash, nol pembuka klise, *hedging* jujur ("bukan capaian yang sudah diverifikasi pihak ketiga"). Dua kekeliruan EYD dan satu blok yang mengulang bunyi H2-nya sudah saya perbaiki. |
| Factual & KPBU/PPP & sertifikasi accuracy | 9 | 5 klaim diuji, semuanya lolos ke dosir; nomor Pasal UU HKPD tetap dihilangkan sesuai instruksi. Dikurangi 1 karena verifikasi daring tidak dapat dijalankan sesi ini. |
| On-page SEO compliance | 9 | Semua item §3 lolos; meta title 50, meta description 155, slug 36, 1.519 kata di dalam band. |
| GEO extractability (§2a) | 9 | Kelima blok jawaban H2 kini 41–46 kata (satu semula 37); *definition snippet* 58 kata; `date_modified` ditambahkan. |
| IIGF Institute framing discipline | 10 | 2 sebutan bernama, framing unit pengetahuan/*think-tank* PT PII, satu anchor program di penutup, nihil klaim kepemilikan kredensial maupun keanggotaan Kantor Bersama. |
| Internal linking | 10 | Tepat 3 tautan inline, seluruhnya `institute.iigf.co.id`, tanpa "BACA JUGA", tanpa `ptpii.co.id`/`gagas.co.id`. |
| FAQ quality | 9 | 6 Q&A, 42–52 kata, mandiri dan siap FAQPage. Satu jawaban yang semula berupa penggalan kalimat sudah dijadikan kalimat utuh. |
| Originality (plagiarism + AI-detector) | 8 | AI 0,04 (*pass*); tak ada *lift* prosa khas. Dikurangi karena penelusuran web atas 8 kandidat tidak dapat dijalankan. |

## What I fixed (changelog)
- **Blok jawaban H2 #5 gagal ambang GEO (37 kata)** — ditulis ulang menjadi 42 kata; sekaligus memperbaiki tata bahasa "Tiga keliru paling sering terdengar" → "Tiga kekeliruan berulang di ruang rapat daerah" dan menghapus pengulangan verbatim frasa "sering terdengar" dari judul H2-nya.
- Memperbaiki bentuk tidak baku "APBD tahunan sulit menanggung beban **semuka** itu" → "beban sebesar itu di muka" (blok jawaban H2 #2).
- **Tahun rujukan untuk angka telanjang**: menambahkan "(rujukan 2026)" pada blok Palapa Ring/Satelit Multifungsi; "20–30 tahun" → "(rentang lazim per portal KPBU Kemenkeu, 2026)" di badan artikel dan "(rujukan 2026)" di FAQ; komposisi Kantor Bersama KPBU → "(komposisi per portal KPBU Kemenkeu, 2026)".
- **Label proyeksi diperkuat**: klausul ekor "angka yang harus dibaca sebagai proyeksi, bukan capaian terverifikasi" dipecah menjadi kalimat berdiri sendiri — "Angka itu proyeksi, bukan capaian yang sudah diverifikasi pihak ketiga" — agar tidak hilang saat dikutip sepotong oleh mesin AI. PDRB dibentangkan menjadi "produk domestik regional bruto".
- **Pengamanan wording akreditasi**: anchor `sertifikasi KPBU` → `pelatihan sertifikasi KPBU` (badan artikel + frontmatter) dan kalimatnya menjadi "yang mengacu pada kerangka PPP internasional", sehingga tidak ada bacaan bahwa IIGF Institute mengeluarkan kredensial.
- **Urutan glosarium**: sel tabel yang memakai "Availability Payment" sebelum istilah itu diperkenalkan diubah menjadi "Pembayaran Ketersediaan Layanan"; istilah Inggris kini pertama kali muncul bersama glosnya di H2 #2.
- **Kejelasan entitas**: kepanjangan PJPK dipindahkan ke kemunculan pertamanya di badan artikel (H2 #2); kalimat di H2 #3 dirapikan menjadi "Definisi PJPK berpijak pada Perpres No. 38 Tahun 2015…".
- **Register siaran pers di penutup**: "…menjalankan PPP capacity building untuk memperkuat kapasitas SDM dan basis pengetahuan KPBU…" (44 kata, bunyi rilis) diganti kalimat posisi yang lebih ringkas dan berpijak; paragraf penutup 97 kata dipecah dua; kata kunci primer persis kini hadir di bagian terakhir ("Di situlah *capacity building* pembiayaan kreatif berhenti menjadi pos biaya pelatihan tahunan…").
- **Ekstraktabilitas FAQ**: jawaban "Apa itu Kantor Bersama KPBU…" yang semula penggalan ("Forum koordinasi tujuh kementerian/lembaga: …") dijadikan kalimat utuh berawalan entitas.
- **Ritme paragraf**: memecah tiga paragraf panjang (beat regulasi vs beat ruang kelas di H2 #1; kalimat tesis "KPBU tidak menghapus kewajiban fiskal; ia mengubah bentuknya" menjadi baris tersendiri). CV panjang paragraf naik 0,372 → 0,426.
- "Tim daerah hampir selalu berada di dua **kotak** pertama" → "Tim pemerintah daerah hampir selalu menempati dua **peran** pertama" (kalimat harus tetap bermakna saat dikutip lepas dari tabelnya).
- Frontmatter: menambahkan `date_modified: "2026-08-12"` (kesegaran §2a), menambahkan Media Keuangan Kemenkeu ke `external_citations` (dikutip inline tetapi belum terdaftar), `word_count` 1474 → **1519**.

## What I flagged (open issues)
- ⚠️ **Verifikasi daring tidak dapat dijalankan sesi ini** — kuota WebSearch habis (200/200) sebelum pemeriksaan fakta dan penelusuran plagiarisme sempat berjalan. Kelima klaim uji divalidasi terhadap dosir yang mencatat *direct fetch* + tanggal akses 2026-08-12 dan *confidence: high*. *Rekomendasi*: bila kurator masih punya kuota, jalankan 8 `web_search_query` di `capacity-building-pembiayaan-kreatif-01.id.quality-input.json` sebelum publikasi; berdasarkan isinya tidak ada yang berisiko (lihat §F).
- ⚠️ **Nomenklatur "Kemenko Marves" di FAQ** — mengikuti daftar yang tertera pada halaman resmi portal KPBU Kemenkeu saat di-*fetch* (2026). Sudah saya beri pagar waktu "(komposisi per portal KPBU Kemenkeu, 2026)". *Rekomendasi*: segarkan bila portal memutakhirkan susunan K/L-nya.
- ⚠️ **Angka Palapa Ring / Satelit Multifungsi berasal dari e-library milik klien sendiri** (*first-party*, confidence medium di dosir). Sudah berlabel "proyeksi" + "(rujukan 2026)" + sanggahan eksplisit. *Rekomendasi*: pertahankan label itu pada penyegaran mana pun; jangan pernah dinaikkan menjadi capaian.
- ⚠️ **`paragraph-low-variance` (CV 0,426 vs target skrip 0,45)** — sisa struktural, bukan tanda mesin: lima blok jawaban GEO wajib 40–60 kata secara mekanis memampatkan variasi. Jauh di atas ambang editor (≥0,30) dan skor AI keseluruhan 0,04. *Rekomendasi*: tidak perlu tindakan; jangan "diperbaiki" dengan memotong blok jawaban di bawah 40 kata.
- ℹ️ **FAQ 6 dari 7 pertanyaan brief** — pertanyaan "Apa itu pembiayaan kreatif dalam penyediaan infrastruktur?" sudah dijawab *definition snippet* + H2 #1, jadi tidak diulang. Masih di dalam band playbook (5–8). Dicatat, bukan cacat.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan teknologi / Tidak dapat dipungkiri" openers — 0 kemunculan
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 kemunculan di seluruh artikel
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0
- [x] Em-dash count ≤2 — **0** (tanda pisah yang ada semuanya en-dash rentang angka: 20–30, 4,5–6,4%, 4–5 September)
- [x] Varied paragraph lengths — 17 paragraf prosa, 9–84 kata, CV 0,426; jumlah kalimat per paragraf bervariasi 1–5
- [x] Not every H2 → 3-bullet list — H2 #1 prosa+tabel, #2 prosa saja, #3 prosa+tabel, #4 daftar bernomor, #5 daftar berbutir
- [x] No generic claims without numbers — 16 angka spesifik berjangkar tahun/tanggal
- [x] No stacked hype adjectives — nihil "terdepan/terlengkap/komprehensif"
- [x] No service-dump paragraph — satu anchor program saja, di penutup
- [x] Register brosur pelatihan / siaran pers — dua *failure mode* klien ini: satu kalimat berbau rilis di penutup sudah diganti; tidak ada ajakan mendaftar di lead atau badan artikel

### B. Factual & KPBU/PPP & sertifikasi spot-check
| Claim | Source check | Verdict |
|---|---|---|
| UU No. 1 Tahun 2022 (UU HKPD) diundangkan 5 Januari 2022, masih berlaku per publikasi 2026 | dossier ✓ (JDIH BPK RI 195696 + djpb/djpk.kemenkeu.go.id, akses 2026-08-12, confidence high) | pass |
| Kantor Bersama KPBU = forum koordinasi **tujuh** K/L, sekretariat Bappenas, dibentuk 18 September 2020 | dossier ✓ (*direct fetch* kpbu.kemenkeu.go.id "Apa itu Kantor Bersama KPBU?", 2026-08-12) — dan artikel **tidak** mengklaim IIGF Institute/PT PII sebagai anggota | pass |
| Perpres No. 38 Tahun 2015 ditetapkan 20 Maret 2015, status berlaku per Agustus 2026 | dossier ✓ (jdih.kemenkeu.go.id + peraturan.bpk.go.id/Details/41764) + ditautkan keluar ke JDIH BPK | pass |
| Palapa Ring ±10.851 km, Satelit Multifungsi 150 Gbps, **proyeksi** PDRB 4,5–6,4%/10 tahun | dossier ✓ (e-library institute.iigf.co.id, confidence medium, wajib berlabel "proyeksi") — label dipertegas + "(rujukan 2026)" ditambahkan oleh editor | pass (setelah perbaikan) |
| Capacity building APJ: Bali 4–5 September 2022 diikuti 10 kabupaten/kota; Malang 13 Maret 2023 diikuti 16 pemda | dossier ✓ (*direct fetch* kpbu.kemenkeu.go.id berita 1592 & 1532) | pass |
| *Tambahan* — Permen PPN/Bappenas No. 7/2023 diubah sebagian oleh No. 9/2025, efektif 30 Desember 2025 | dossier ✓ (peraturan.go.id + peraturan.bpk.go.id/341427, dua basis JDIH) | pass |

**Pemeriksaan wajib bulan ini — hasil satu per satu:**
1. Keanggotaan Kantor Bersama KPBU — **lolos**. Artikel hanya menyebut Kantor Bersama sebagai forum koordinasi tujuh K/L (tabel + FAQ). Tidak ada kalimat yang menempatkan IIGF Institute/PT PII sebagai anggota; penutup pun tidak menyinggung Kantor Bersama sama sekali. Baris "Membership" di `company_profile.md` yang keliru itu tidak terpakai.
2. Pengembang CP3P — **N/A**. Artikel tidak menyebut CP3P maupun daftar pengembangnya; MIF/AfDB tidak muncul.
3. Wording akreditasi — **lolos**. Satu-satunya singgungan sertifikasi adalah anchor tautan, yang saya ubah menjadi "pelatihan sertifikasi KPBU … yang mengacu pada kerangka PPP internasional". Tidak ada klaim memberikan/memiliki kredensial.
4. Angka rupiah RPJMN 2025–2029 — **lolos**, nihil. Penulis memakai framing kualitatif Kemenkeu ("*infrastructure gap* masih sangat besar", "*business as usual* tidak akan mampu mengejarnya", Media Keuangan Kemenkeu 2026) persis seperti rekomendasi dosir. Angka historis RPJMN 2015–2019 juga tidak dipakai — pilihan yang lebih aman lagi.
5. Tanggal batch/jadwal kelas dari institute.iigf.co.id — **lolos**, nihil.
6. "Indikatif" + tahun rujukan — **lolos setelah perbaikan**. Tidak ada biaya sama sekali di artikel ini (sesuai cakupan brief). Empat angka yang semula telanjang sudah diberi tahun rujukan (lihat changelog).
7. Nama individu — **lolos**, nihil. Kutipan Kemenkeu diparafrasekan secara kelembagaan. Self-mention bernama = **2** (penutup + baris CTA), anchor program muncul **sekali** di penutup.
8. Internal link — **lolos**. Tepat 3, inline, seluruhnya `institute.iigf.co.id`: hub `/capacity-building` di lead, `/e-library/lainnya/77/studi-kasus-kpbu-…` di H2 #2, dan `institute.iigf.co.id/` di H2 #4. Nihil "BACA JUGA", nihil `gagas.co.id`/`ptpii.co.id` (PT PII muncul hanya sebagai sebutan faktual induk, tanpa tautan).
9. GEO §2a — **lolos** (rincian di §C2).
10. Disambiguasi IIGF — **lolos**. Satu-satunya sebutan bernama membawa konteks penuh: "IIGF Institute, unit manajemen pengetahuan dan *think-tank* PT Penjaminan Infrastruktur Indonesia (Persero)"; baris CTA membawa konteks "kajian KPBU".
11. Sumber otoritatif eksternal — **lolos**. 2 tautan keluar (kpbu.kemenkeu.go.id, peraturan.bpk.go.id/JDIH BPK) + 1 atribusi inline (Media Keuangan Kemenkeu 2026, kini terdaftar di frontmatter).

### C. On-page SEO checklist (seo_playbook.md §3)
- [x] Meta title ≤60 (keyword first 30) — actual: **50** char, kata kunci mulai di posisi **0**
- [x] Meta description 140–160 — actual: **155**
- [x] Slug ≤60, kebab-case, keyword — actual: `capacity-building-pembiayaan-kreatif` (36)
- [x] H1 contains keyword — "Capacity Building Pembiayaan Kreatif: Fondasi Kapasitas PJPK" (60)
- [x] H2 count 4–7 — actual: **5 H2 badan** + FAQ + Kesimpulan
- [x] ≥1 question-format H2 (#1, #3); ≥1 honest/counter-conventional H2 (#5 "Tiga salah kaprah…")
- [x] Keyword in first 100 words — frasa persis pada kata ke-78 (lead), varian "capacity building" pada kata ke-9
- [x] Definition snippet near top — blockquote "Ringkasnya", **58 kata**, di ~90 kata pertama
- [x] ≥8 LSI terms — counted: **20** (pembiayaan kreatif infrastruktur, KPBU, PJPK, UU HKPD, Simpul KPBU, Kantor Bersama KPBU, kapasitas fiskal daerah, Availability Payment/Pembayaran Ketersediaan Layanan, penyediaan infrastruktur daerah, skema non-APBD, pinjaman/obligasi/sukuk daerah, Dukungan Kelayakan/VGF, badan usaha pelaksana, alokasi risiko, Pra-Studi Kelayakan, Perpres 38/2015, Permen PPN/Bappenas, kelayakan ekonomi vs finansial, PDRB)
- [x] 3 internal links (1 hub + 2 cousins) — destinations: `/capacity-building` (lead), `/e-library/lainnya/77/studi-kasus-kpbu-…` (H2 #2), `institute.iigf.co.id/` (H2 #4)
- [x] ≥1 external authoritative citation — actual: **2 tautan** + 1 atribusi inline
- [x] FAQ 5–7 Q&As — actual: **6**, masing-masing 42–52 kata
- [x] ≥1 list + ≥1 table — 1 daftar bernomor, 1 daftar berbutir, **2 tabel**
- [x] Word count inside band 1.200–1.600 — actual: **1.519** (`tools/count_words.py`)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Direct 40–60-word answer immediately after each major H2 — dihitung ulang setelah suntingan: **45 / 46 / 45 / 41 / 42** kata (H2 #5 semula 42→ dari 37; seluruhnya kini di dalam band)
- [x] Each body paragraph makes one independently quotable, verifiable point — dua kalimat yang bergantung pada konteks sekitarnya ("dua kotak pertama"; ekor klausul label proyeksi) sudah dijadikan mandiri
- [x] FAQ parseable for FAQPage schema (`###` + jawaban satu paragraf, kalimat utuh berawalan entitas); freshness: `date_modified: "2026-08-12"` ditambahkan ke meta block, dan artikel menandai kesegaran secara inline ("masih berlaku per publikasi 2026", "menurut data JDIH per Agustus 2026")

### D. IIGF Institute framing discipline (product_matrix.md + style_guide §11)
- [x] IIGF Institute framed as PT PII's knowledge-management unit and think-tank — bukan pemilik/pemberi CP3P, bukan universitas, bukan entitas hukum mandiri
- [x] ≤3 IIGF Institute self-mentions — actual: **2** bernama (penutup + baris CTA)
- [x] No unverifiable superlatives — nihil
- [x] KPBU/PPP product names match product_matrix.md / dossier — anchor tunggal **PPP capacity building**, sesuai pemetaan brief & dosir
- [x] Closing uses a company_profile.md positioning line — parafrase baris "tiga pilar — edukasi, riset, advokasi kebijakan"
- [x] Soft website CTA present as the FINAL line, after the conclusion — "Gambaran program pengembangan kapasitas dan kajian KPBU lainnya dapat Anda telusuri di institute.iigf.co.id." (konsultatif, bukan "daftar sekarang")
- [x] Hub link present as a natural inline anchor in the lead, descriptive anchor text — bukan callout "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior article for this keyword: **none yet** (`articles_history/index.json` → `"articles": []`)
- Subtopic overlap (Jaccard estimate): **0.00** terhadap riwayat; 0,25 terhadap saudara sebulan `-02` menurut brief
- Verdict: **distinct angle confirmed** — artikel fondasi klaster; sengaja tidak masuk ke perbandingan antar-instrumen (`-02`), peta kompetensi per tahap (`-03`), atau diagnosis kegagalan penyiapan (`-04`), dan memang tidak melakukannya

### F. Originality — plagiarism + AI-detector (tools/quality-check.ps1)
- [x] Script ran; `capacity-building-pembiayaan-kreatif-01.id.quality-input.json` written
- [x] AI-detector score < 0.30 — actual: **0.04** (*verdict: pass*); vocab share top-30 0,281; sentence burstiness 0,903
- [x] Paragraph burstiness CV ≥ 0.30 — actual: **0.426** (naik dari 0,372 setelah pemecahan paragraf; satu *flag* severity **low** tersisa karena target internal skrip 0,45 — lihat *open issues*)
- [~] Plagiarism — **mode terdegradasi**: 8 kandidat diekstrak, penelusuran web tidak dapat dijalankan (kuota WebSearch sesi habis 200/200). Penilaian editorial atas kedelapannya: 4 adalah judul/identitas peraturan dan definisi regulatif baku (UU No. 1/2022 HKPD; Perpres 38/2015 + tanggal; enumerasi PJPK "Menteri, Kepala Lembaga, Kepala Daerah, atau BUMN/BUMD"; mekanisme pengembalian tarif/AP) — pengecualian eksplisit "definisi yang sudah umum"; 4 sisanya adalah prosa asli artikel ini (hook Bappeda, butir "Mengelola kontrak lintas periode kepemimpinan", butir miskonsepsi ketiga, kalimat VGF yang diparafrase berbeda dari dosir). Tidak ada blok ≥20 kata yang identik dengan kalimat sumber di dosir. **plagiarism_score heuristik: 0.05** — bukan hasil pemeriksaan daring. *Rekomendasi*: jalankan ulang 8 kueri tersebut bila kuota tersedia; tidak ada yang tampak berisiko.
