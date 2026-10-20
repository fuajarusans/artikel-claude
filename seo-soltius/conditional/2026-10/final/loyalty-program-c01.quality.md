---
brief_id: "loyalty-program-c01"
validator_run_date: "2026-10-08"
batch: "conditional-2026-10"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Apa Itu Loyalty Program dan Strateginya untuk Retensi Pelanggan

## Verdict: **pass**

Artikel lolos kedua gate QC dan memenuhi seluruh override batch 2026-10. AI-detector heuristik memberi skor **0,04** (jauh di bawah ambang revise 0,30 dan reject 0,50). Burstiness paragraf **CV = 0,339** — di atas lantai guardrail 0,30, sehingga **tidak ada pemicu revise statistik dan tidak ada perbaikan burstiness yang dilakukan** (artikel tidak disentuh). Delapan passage distinctive berbahasa Indonesia dicek via quoted WebSearch; **nol** yang cocok verbatim di halaman non-Soltius mana pun (skor plagiarisme 0,00) — hasil pencarian hanya memunculkan materi bertopik serupa (opini, studi, dokumentasi vendor) yang justru menegaskan fakta yang dikutip artikel, bukan sumber teks yang terjiplak. Editor merekomendasikan `approve` (skor 9) dan validator mengonfirmasi `pass`. Secara gate commit artikel sudah **curator-ready**, NAMUN sesuai instruksi, curator/commit **TIDAK** dijalankan pada run ini — dan tiga keputusan user yang terbuka (hub internal link, framing SAP CX, nasib angka ekonomi retensi) sebaiknya dikonfirmasi sebelum publikasi.

## AI Detector (heuristik v2.0)
- Score: **0,04** / 1.0 (ambang: revise ≥0,30, reject ≥0,50) → **pass**
- Paragraph burstiness (CV): **0,339** (guardrail gate ≥0,30 → **lolos**; ideal ≥0,45)
- Sentence burstiness: **0,835** (ritme kalimat bervariasi)
- Top-30 vocab share: **0,313**
- external_api_used: false (heuristik murni; tidak ada `AI_DETECTOR_API_KEY`)
- Flags (1):
  - [low] `paragraph-low-variance`: "Paragraph word-count CV=0.339 (target >=0.45)" — severity **low**, bukan blocker. Ambang gate 0,30 terlampaui. Wajar untuk explainer B2B padat dengan empat jawaban langsung GEO wajib 40–60 kata + lima jawaban FAQ 30–60 kata yang secara struktural mengelompok di sekitar rerata, ditambah band ketat 1000–1200. Menaikkan paksa ke 0,45 akan memaksa padding/pemotongan yang justru melanggar aturan on-point batch ini. **Dibiarkan** — konsisten dengan rekomendasi editor. Sudut flagged (snippet, H2 #1–#4, tabel, FAQ) sudah dibaca ulang manual: ritme manusiawi, campur kalimat pendek–sedang, tanpa pola robotik.

## Plagiarism (web lookup passage distinctive)
8 passage kandidat diekstrak skrip; dicek via quoted WebSearch (frasa ID dibersihkan dari artefak markdown agar bermakna). **Semua clean** — tidak ada halaman non-Soltius yang memuat frasa Bahasa Indonesia secara verbatim. Hasil pencarian hanya memunculkan laman bertopik sama dengan teks yang berbeda total.

- ✅ Lead — "Pelanggan datang sekali karena promo, lalu tidak pernah kembali…" — clean. Hasil hanya laman bertema promo-chaser (Mojok opini, RetailWire/Coherent Path, studi Emerald/MIT Sloan); tidak ada kalimat ID yang sama.
- ✅ "Probabilitas menjual ke pelanggan lama kerap diperkirakan 60–70%, dibanding sekitar 5–20% ke prospek baru…" — clean. Nol match frasa ID; angka 60–70%/5–20% adalah rule of thumb (Marketing Metrics/Invesp) dan di artikel sudah berlabel "estimasi industri, bukan angka mutlak".
- ✅ "Angka yang sering dikutip menyebut biaya mengakuisisi pelanggan baru sekitar lima kali…" — clean. Nol match verbatim. Klaim "~5×" adalah heuristik terkenal berasal-usul diperdebatkan (TARP akhir 1980-an per Ipsos *Loyalty Myths*; rentang 5–25× di Invesp/HBR 2014) → masuk kategori *standar/umum* yang memang tinggi-overlap; artikel sudah meng-hedge (5–25×, "argumen arah, bukan konstanta pasti"). Bukan plagiarisme.
- ✅ "Beberapa yang aktif: OVO Points pada dompet digital, sistem tier plus Shopee Coins di marketplace, AlfaGift milik Alfamart, dan Gojek PLUS…" — clean. Nol match kalimat ID; tiap program terkonfirmasi nyata (OVO Points sebagai loyalty reward, Alfagift Poin, dll.) — fakta benar, frasa orisinal.
- ✅ "…ResearchAndMarkets, September 2025… nilai pasar loyalitas Indonesia sekitar US$1,03 miliar pada 2025, tumbuh kira-kira 18,3% per tahun." — clean (frasa ID orisinal). **Angka terkonfirmasi & teratribusi benar**: rilis ResearchAndMarkets via Business Wire 9 Sep 2025 ("grow by 18.3% … to reach US$1.03 billion in 2025"). Fact-check lolos.
- ✅ "Pantau retention rate, CLV, serta pendapatan anggota dibanding non-anggota." — clean. Panduan metrik loyalitas serupa ada dalam bahasa Inggris (Smile.io, Access Development), tetapi tanpa match kalimat ID.
- ✅ HBR — "menaikkan retensi pelanggan sebesar 5% dikaitkan dengan kenaikan profit sekitar 25% hingga 85%." — clean (frasa ID orisinal). Lihat catatan fakta di bawah: rentang **25–85%** justru akurat untuk sumber 1990 yang dikutip.
- ✅ "Ia merugikan ketika menyamar sebagai diskon permanen yang mengikis margin…" — clean. Nol match verbatim; tema "diskon menggerus margin" lazim (Calculover, SWA, Praella) tetapi teksnya berbeda.
- **Aggregate plagiarism score: 0,00** (nol match verbatim ≥20 kata di situs non-Soltius; nol partial near-match ≥70% word-order).

## Fact spot-check (angka tak dikarang + hedging) — konfirmasi lapis validator
- **HBR 1990 "Zero Defections" (Reichheld & Sasser): retensi +5% → profit ~25–85%** — ✓ **akurat & di-hedge**. Catatan penting: banyak blog mengutip "25–95%" (angka dari karya Reichheld/Bain berikutnya, *The Loyalty Effect* 1996); rentang **25–85% adalah angka otentik paper HBR September 1990** yang dirujuk artikel. Jadi "85%" **bukan salah ketik** — justru lebih presisi ke sumber primer. Artikel menambah kalimat kritik akademisi ("terlalu optimistis … indikasi arah"). Teratribusi tahun + penulis + URL. ✓
- **Akuisisi ~5× biaya retensi; rentang 5–25× "estimasi industri", asal diperdebatkan** — berlabel heuristik + hedge; sesuai `style_guide.md` §10(b). ✓ (hedged)
- **Jual ke pelanggan lama ~60–70% vs prospek ~5–20%** — berlabel "estimasi industri, bukan angka mutlak". ✓ (hedged)
- **Pasar loyalitas ID ~US$1,03 miliar (2025), +18,3%/thn** — teratribusi ResearchAndMarkets (Sept 2025); terkonfirmasi via Business Wire. ✓
- **Nama produk SAP CX** (SAP Customer Data Cloud, SAP Customer Data Platform, SAP Emarsys Customer Engagement) — nama penuh, kapabilitas umum; **tidak** memakai "SAP Loyalty Management" yang tak eksis. ✓
- **IFRS** — N/A: artikel loyalty program tidak memuat konten IFRS. Tidak ada yang perlu di-hedge; tidak di-flag.

## Re-verifikasi gate batch 2026-10
| Gate | Target batch | Hasil | Status |
|---|---|---|---|
| Word band body | 1000–1200 | 1.172 (frontmatter/`count_words.py`, cleaned-prose) · 1.216 (skrip, hitung token markdown — **bukan** basis vonis band per style_addendum §1/§7) | ✅ |
| FAQ | 3–5 Q&A | 5 | ✅ |
| Internal link | 2 (1 hub + 1 cousin) | 2 (hub `retail-produk` di langkah 4 + cousin `business-intelligence` di langkah 2) | ✅ |
| Image placeholder `{IMAGE_NN}` | 0 (by design) | 0 | ✅ |
| Definisi | sekali (snippet) | sekali; snippet "Ringkasnya:" (~44 kata). H2/body/FAQ tidak mengulang definisi | ✅ |
| Framing Soltius | ≤2 self-mention, konsultatif | 2 (positioning line Kesimpulan + soft CTA soltius.co.id); "mendampingi … menjalankan di atas SAP CX", bukan "membuat" | ✅ |
| Sitasi eksternal otoritatif | 1–2 | 2 inline (HBR 1990 + SAP CX `sap.com/products/crm`) | ✅ |
| Em-dash (U+2014) di body | ≤2 | 0 | ✅ |
| Tabel HTML valid (bila ada) | — | Tidak ada tabel HTML; 1 tabel Markdown (5 kolom × 5 jenis) valid, kolom konsisten, header + separator benar | ✅ N/A |
| H2 question-format | ≥1 | 3 (#1 "Mengapa…?", #3 "Bagaimana…?", #4 "Kapan…?") | ✅ |
| H2 praktis/terstruktur | ≥1 | 2 (tabel jenis di H2 #2 + numbered list 5 langkah di H2 #3) | ✅ |
| Angka spesifik inline | 4+ | ≥10 (5×, 5–25×, 25–85%, 60–70%, 5–20%, US$1,03 mdr, 18,3%, 1998, 2024, 2025) | ✅ |

## Loop status
Revision loop **0** (first pass). Tidak ada revise yang dipicu — AI maupun plagiarisme lolos. Tidak ada loop writer. (Batas loop writer 2× tidak terpakai.)

## Rekomendasi ke orchestrator
**curator-ready (memenuhi gate commit: editor `approve` + validator `pass`) — TETAPI jangan commit dulu.** Sesuai instruksi, curator/commit TIDAK dijalankan pada run ini. Artikel tetap di `final/` untuk penanganan berikutnya.

⚠️ **Tiga open flag user diteruskan dari editor (eksplisit diminta user untuk ditanyai — ranah orchestrator/user, bukan sub-agent; tidak memblokir verdict `pass`):**
1. **Hub internal link.** soltius.co.id tidak punya halaman khusus CX/CRM/loyalty; default yang dipakai = halaman Solusi Retail (`/id/solutions-by-products/retail-produk`), ditautkan jujur sebagai "solusi pengalaman pelanggan ritel". Konfirmasi: hub ini oke, atau ada URL CX Soltius lain yang lebih tepat?
2. **Framing SAP CX.** Default = framing seimbang (SAP Emarsys sebagai mesin kampanye/loyalitas + SAP Customer Data Cloud/Platform sebagai lapisan data). Konfirmasi: pertahankan seimbang, atau tonjolkan Emarsys sebagai mesin loyalitas?
3. **Statistik ekonomi retensi (HBR 1990 + rule 5×).** Default = dipertahankan dengan hedging + atribusi + kritik akademisi. Konfirmasi: OK dipertahankan, atau dihilangkan (butuh penulisan ulang ringan sudut ekonomi H2 #1 — sebaiknya kembali ke writer)?

ℹ️ Catatan editorial non-QC (tidak memengaruhi verdict): opsional menambah atribusi ringan untuk angka 60–70%/5–20% (Marketing Metrics/Invesp) bila user mau — tidak wajib. Saat publish, CMS set `dateModified = 2026-10`.
