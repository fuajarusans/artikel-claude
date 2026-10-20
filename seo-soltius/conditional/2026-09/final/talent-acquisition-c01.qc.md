---
brief_id: "talent-acquisition-c01"
editor_run_date: "2026-09-01"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-09 (style_addendum.md overrides applied — 800–1000 kata cleaned-prose, tanpa image placeholder, FAQ 2–3, internal link = 2, definisi hanya sekali di snippet, maks 2 mention Soltius)"
word_count: 831
---

# Editor QC Report — 6 Tugas Pokok Talent Acquisition (Update 2026)

## Recommendation
**approve**

Artikel ini memenuhi seluruh batch override 2026-09 dan semua cek yang tetap berlaku penuh. Body 831 kata (konvensi cleaned-prose via `tools/count_words.py`) di dalam pita 800–1000; definisi muncul tepat sekali (snippet "Ringkasnya:", 44 kata) dan tidak diulang di body/H2; 3 body H2 (2 question-format + 1 listicle inti dengan tabel & daftar bernomor); FAQ 3 Q&A; internal link tepat 2 (1 hub + 1 cousin); nol image placeholder; em-dash 0; maks 2 mention Soltius; primary keyword "tugas talent acquisition" hadir verbatim di lead, Kesimpulan, dan CTA; soft CTA soltius.co.id adalah baris paling akhir. Ketiga flag researcher dihormati penuh (SHRM "sekitar 44 hari" non-eksekutif tanpa tahun-peg dan tanpa "60 hari eksekutif"; gaji Rp5–8jt/Rp9–15jt diatribusikan ke situs karier + ditandai indikatif; kapabilitas SAP hanya payung). Ini REWRITE halaman sendiri — slug lama dipertahankan, tidak dilaporkan sebagai duplikat. Hanya 1 perbaikan gaya minor diterapkan in-place; tidak ada isu yang menuntut writer/strategist re-spin.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tanpa opener klise (dibuka pada pain konkret "pasang lowongan, tunggu pelamar, isi kursi kosong"); em-dash 0; ritme paragraf 1–4 kalimat bervariasi; suara praktisi ("di lapangan, prosesnya paling sering tersendat...") tanpa nama Soltius; honest hedge (bobot tugas beda per perusahaan; "alat hanya mempercepat proses"). |
| Factual & SAP-spec accuracy | 9 | Semua angka bersumber/atribusi; SHRM 44 hari tanpa tahun-peg (Flag #1 dihormati); gaji situs karier + indikatif (Flag #2); kapabilitas SF payung, tanpa fitur/versi/angka pelanggan karangan (Flag #3). |
| On-page SEO compliance | 9 | meta_title 46 char; meta_description 155 char (dalam 140–160); slug 32 char = slug_lock; H2 3 body (batch 3–4); keyword di 100 kata pertama + penutup + CTA. |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata setelah tiap H2 (47/44/43 kata) berisi poin BARU, bukan parafrase snippet; tabel & daftar bernomor extractable baris-per-baris; FAQ FAQPage-ready. |
| Soltius framing discipline | 10 | Implementator/pendamping HCM SAP (bukan pembuat); 2 mention (1 positioning line + 1 CTA); kredensial akurat (SAP Platinum via United VARs, Metrodata sejak 1998); tanpa superlatif. |
| Internal linking | 10 | Tepat 2 inline natural (hub "SAP SuccessFactors Recruiting" + cousin "SAP SuccessFactors vs HRIS lokal"); tanpa "BACA JUGA"; 2 halaman "TA vs rekrutmen" existing TIDAK ditambahkan (anti-kanibal dihormati). |
| FAQ quality | 9 | 3 Q&A dari PAA; jawaban 44–58 kata; tiap jawaban memuat fakta/angka (6 tugas; Rp5–8jt/Rp9–15jt). |

## What I fixed (changelog)
- **Variasi gaya minor (H2 #3, kalimat kapabilitas SAP):** "...dan analitik **dalam satu alur**" → "...dan analitik rekrutmen **dalam satu produk**". Mengurangi pengulangan frasa "satu alur" (yang sudah dipakai di jawaban langsung H2 #2, H2 #3, dan Kesimpulan) sekaligus lebih tepat menggambarkan SuccessFactors Recruiting sebagai satu produk/modul. Netral terhadap fakta (kapabilitas payung SAP tetap sama) dan word count tetap di pita (831).

## What I flagged (open issues)
- ⚠️ **Cousin link belum tentu live saat publish** — `https://www.soltius.co.id/id/blog/sap-successfactors-vs-hris-lokal` adalah sibling batch conditional 2026-08 (`successfactors-vs-hris-c01`) yang mungkin belum tayang. Brief secara eksplisit menyerahkan verifikasi status ke saat publish (anchor & penempatan di H2 #3 sudah ditetapkan). *Rekomendasi*: publisher/CMS cek 200-status sebelum tayang; jika belum live, tahan link ini sementara (tanpa menambah link pengganti — total tetap 2). Tidak menghambat approve.
- ℹ️ **`dateModified`** — frontmatter memuat `publish_month: 2026-09` tetapi tanpa field `dateModified` eksplisit. Ini REWRITE halaman yang turun -14%, jadi sinyal freshness penting (seo_playbook §2a poin 4). *Rekomendasi*: CMS mengeset `dateModified` = tanggal publish. Kewenangan CMS, bukan konten; tidak menghambat approve.
- ℹ️ **Meta description memakai varian keyword** — frasa persis "tugas talent acquisition" muncul sebagai "tugas pokok talent acquisition" di meta_description (kata "pokok" menyela). Ini konsekuensi wajib dari kontinuitas judul/slug lama "6 tugas pokok"; keyword tokens seluruhnya hadir dan frasa exact hadir verbatim di H1-area, lead, Kesimpulan, dan CTA. Dibiarkan; tidak perlu tindakan.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — lead dibuka pada pain konkret
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 kemunculan
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0
- [x] Em-dash count ≤2 — **0** (colon dipakai sebagai ganti; en-dash hanya pada rentang Rp5–8/Rp9–15, benar EYD)
- [x] Varied paragraph lengths (1–4 kalimat; tidak simetris) — mis. penutup H2 #3 "Namun alat hanya mempercepat proses." (kalimat pendek)
- [x] Not every H2 → 3-bullet list — H2#1 tabel, H2#2 daftar bernomor 6 item, H2#3 prosa
- [x] No generic claims without numbers — 44 hari, Rp5–8jt, Rp9–15jt, 6 tugas, 1998
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — 0
- [x] No service-dump paragraph — hanya 1 positioning line di Kesimpulan

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| SHRM: median time-to-fill non-eksekutif ~44 hari kalender (data AS) | dossier ✓ (Flag #1: "sekitar 44 hari", tanpa tahun-peg) | pass |
| TIDAK ada klaim "60 hari eksekutif" | draft ✓ (dihapus per Flag #1 — data eksekutif ~45 hari, bukan 60) | pass |
| Gaji TA junior Rp5–8jt / senior Rp9–15jt/bln | dossier ✓ (Flag #2: atribusi situs karier + "indikatif, bukan statistik resmi") | pass |
| SAP SuccessFactors Recruiting = modul dalam suite HCM; ATS+CRM+situs karier+sourcing+analitik | dossier ✓ + product_matrix (HCM = Solutions Soltius); kapabilitas payung, tanpa fitur/versi karangan (Flag #3, SAP page 403) | pass |
| Soltius: SAP Platinum via United VARs, Metrodata Group, sejak 1998; implements/supports HCM SAP | company_profile ✓ + product_matrix framing (NEVER builds) | pass |

### C. On-page SEO checklist (batch override values)
- [x] Meta title ≤60 — **46 chars**; "Tugas...Talent Acquisition" di 30 char pertama
- [x] Meta description 140–160 — **155**
- [x] Slug ≤60, kebab-case, keyword — `6-tugas-pokok-talent-acquisition` (**32**) = **slug_lock** (segmen akhir URL lama dipertahankan; REWRITE)
- [x] H1 contains keyword — "6 **Tugas** Pokok **Talent Acquisition**..."
- [x] H2 count **3 body** (batch override 3–4) + FAQ + Kesimpulan
- [x] ≥1 question-format H2 — H2#1 "Apa Bedanya..." & H2#3 "Bagaimana Sistem Rekrutmen..."
- [x] ≥1 praktis/terstruktur — H2#1 (tabel 3 baris) + H2#2 (daftar bernomor 6 lead-in bold)
- [x] Keyword in first 100 words — "tugas talent acquisition" di lead (verbatim)
- [x] Definition snippet 40–60 kata — **44** ("Ringkasnya:")
- [x] LSI terms ≥8 — talent acquisition, akuisisi talenta, rekrutmen, employer branding, inbound marketing, sourcing, talent pool, screening/seleksi, candidate experience, ATS, CRM, HCM, SAP SuccessFactors Recruiting, time-to-fill, pipeline, onboarding (>8)
- [x] Internal links = **2** (batch): hub `solutions-by-products/reading/success-factors` + cousin `blog/sap-successfactors-vs-hris-lokal`
- [x] External authoritative citations — **2** (SHRM + SAP official)
- [x] FAQ **2–3** (batch) — **3** Q&A
- [x] ≥1 tabel + ≥1 list — tabel perbedaan (H2#1) + daftar bernomor (H2#2)
- [x] Word count 800–1000 (batch, cleaned-prose) — **831**
- [x] Image placeholders — **0** (validasi image = N/A per batch; tidak ada {IMAGE_NN})
- [x] ≥4 angka spesifik inline — 6 tugas, 44 hari, Rp5–8 juta, Rp9–15 juta, 1998 (≥4)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata setelah tiap H2 — H2#1 **47**, H2#2 **44**, H2#3 **43** kata (poin BARU tiap H2, bukan parafrase snippet)
- [x] Tiap paragraf body = satu poin quotable & verifiable (tabel + daftar bernomor ditulis untuk ekstraksi baris-per-baris)
- [x] FAQ parseable untuk FAQPage schema; freshness — `publish_month` ada (lihat flag `dateModified`)

### D. Soltius framing discipline
- [x] Soltius = implementator/pendamping ("mengimplementasikan serta mendampingi solusi HCM SAP"), BUKAN "membangun SAP"
- [x] ≤2 mention (batch) — 1 positioning line (Kesimpulan) + 1 soft website CTA (soltius.co.id) = **2**
- [x] Tanpa superlatif ("terbaik/nomor satu")
- [x] Nama produk SAP cocok dossier/product_matrix (SAP SuccessFactors Recruiting, HCM, ATS, CRM) — nama penuh di sebutan pertama; ATS/CRM/HCM di-expand sekali
- [x] Penutup memakai positioning line (SAP Platinum Partner via United VARs, Metrodata Group sejak 1998)
- [x] Soft website CTA = baris terakhir, terpisah dari Kesimpulan, konsultatif (bukan "beli sekarang")
- [x] Hub link inline natural (anchor deskriptif "SAP SuccessFactors Recruiting"), bukan "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior: `successfactors-vs-hris-c01` (2026-08) — berbagi entitas SAP SuccessFactors, tetapi sudut = pemilihan sistem, bukan tugas peran TA
- Subtopic overlap (Jaccard): ≈0.06 (successfactors-vs-hris) / ≈0.00 (turnover, pkwt) — < 0.4
- **Internal cannibalization (kritis untuk topik ini):** Soltius punya 2 halaman existing khusus "TA vs rekrutmen". H2 #1 sengaja ditahan RINGAN (tabel 3 baris + 1 jawaban + 1 kalimat jembatan) sebagai motivasi listicle, TIDAK berkembang jadi komparasi penuh, dan kedua halaman itu TIDAK ditambahkan sebagai link (total internal tetap 2). **Anti-kanibal dihormati.**
- Verdict: **distinct angle confirmed** — REWRITE halaman sendiri; slug lama dipertahankan; **jangan lapor duplicate**

### F. Batch-2026-09 definition-repetition check
- Definisi muncul **sekali** (snippet "Ringkasnya:", 44 kata).
- H2 #1 = format PERBANDINGAN yang menambah info BARU (horizon/pemicu → sebab mengapa daftar tugas TA bertambah: employer branding + sourcing proaktif) — bukan pernyataan ulang "talent acquisition adalah...". **PASS.**
- H2 #2 jawaban langsung = poin baru (enam tugas sebagai satu alur hulu→hilir + honest hedge bobot per perusahaan). **PASS.**
- H2 #3 jawaban langsung = poin baru (ATS menyatukan keenam tugas + metrik time-to-fill). **PASS.**
- Tanpa H2 definitional "Apa Itu Talent Acquisition?" yang mengulang snippet. **PASS.**

## The shipping question
Jika tayang di soltius.co.id besok dan dibaca konsultan SAP senior serta CIO skeptis: definisi jernih sekali di snippet, enam tugas dipetakan sebagai satu alur runtut (quotable baris-per-baris), tabel pembeda TA vs rekrutmen, angka bersumber + atribusi jujur (SHRM "sekitar 44 hari, data AS"; gaji "indikatif, situs karier"), honest hedging ("alat hanya mempercepat proses"), dan framing Soltius yang jujur (implementator HCM SAP, bukan pembuat) — WEBARQ Promote pantas membanggakannya. **Approve.**
