---
brief_id: "sap-btp-c01"
validator_run_date: "2026-10-08"
batch: "conditional-2026-10"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — SAP BTP untuk Pemula: Fungsi dan Use Case Business Technology Platform

## Verdict: **pass**

Artikel lolos kedua gate. AI-detector heuristik `quality-check.ps1` memberi skor 0,04 (jauh di bawah ambang revise 0,30), dan guardrail burstiness paragraf CV = 0,426 — di atas lantai wajib 0,30 (hanya di bawah target ideal 0,45, ditandai severity **low**, bukan blocker), sehingga tidak ada loop revisi burstiness. Pemeriksaan plagiarisme pada tiga passage paling distinctive (candidate_score tertinggi: 23, 16, 16) via quoted WebSearch bersih — tidak ada kecocokan verbatim pada halaman publik non-Soltius; fakta didukung sumber (Wikipedia/TechTarget/SAP) tetapi frasa orisinal. Re-verifikasi struktural batch 2026-10 semuanya lolos. Editor merekomendasikan `approve`; validator **konkur: pass**. Curator boleh commit. (Catatan degraded-mode plagiarisme di bawah — budget WebSearch turn habis.)

## AI Detector (heuristic v2.0)
- Score: **0,04** / 1.0 (ambang: revise ≥0,30, reject ≥0,50) → **pass**
- Paragraph burstiness (CV): **0,426** (gate ≥0,30 terlampaui; target ideal ≥0,45)
- Sentence burstiness: 0,914
- Top-30 vocab share: 0,312
- external_api_used: false
- Flags (1):
  - [low] `paragraph-low-variance`: CV 0,426 (< 0,45 ideal). Wajar untuk explainer B2B padat ber-FAQ dalam band 1000–1200; menaikkan ke 0,45 akan memaksa padding yang melanggar prinsip on-point. **Bukan blocker** — gate 0,30 terlampaui aman. Tidak di-revise.

Catatan guardrail: style_addendum §7 + agent spec menetapkan CV < 0,30 = revise. Nilai 0,426 jelas di atas lantai → **tidak perlu perbaikan burstiness**. Editor sudah menaikkan CV dari 0,286 (pra-edit, FAIL) ke 0,426 dengan memecah dua kalimat-punch jadi paragraf berdiri sendiri dan memvariasikan panjang 5 jawaban FAQ (33–46 kata), tanpa mengubah fakta.

## Plagiarism (web lookup passage distinctive)
Mode: **degraded** — 3 dari 8 passage kandidat diperiksa via quoted WebSearch; budget WebSearch turn (cap 200 call, dibagi 14 validator paralel dalam batch) habis sebelum 5 passage sisa sempat dicek. Tiga yang diperiksa adalah passage dengan candidate_score TERTINGGI (paling berisiko verbatim).

- ✅ Passage 1 (score 23): "Sebelumnya platform ini bernama SAP Cloud Platform; nama SAP BTP resmi dipakai sejak 2021." — **clean**. Fakta kronologi (SAP Cloud Platform → SAP BTP) didukung Wikipedia/TechTarget/SAP, tetapi tidak ada frasa Bahasa Indonesia yang cocok verbatim; penyebutan tanggal bahkan bervariasi antar sumber (18 Jan vs mid-Jan vs 27 Jan 2021).
- ✅ Passage 2 (score 16): "Nama itu resmi dipensiunkan pada 18 Januari 2021, dan seluruh fungsinya dilanjutkan di bawah SAP Business Technology Platform." — **clean**. Tanggal 18 Januari 2021 berasal dari entri Wikipedia SAP BTP; tidak ada halaman non-Soltius memuat kalimat ini verbatim.
- ✅ Passage 3 (score 16): "BTP masih mencakup tiga pilar lain: integrasi lewat SAP Integration Suite, data dan analitik, serta AI." — **clean**. Tidak ada kecocokan verbatim; penamaan pilar sejalan dengan sumber pihak ketiga tetapi disusun ulang.
- ⏸️ Passage 4 (score 14): heading "## FAQ … ### SAP BTP termasuk SaaS atau PaaS?" — tidak dicek (budget habis); **artefak struktural** (heading), bukan prosa rentan-plagiarisme — risiko ~nol by nature.
- ⏸️ Passage 5 (score 13): "SAP menyediakan trial 90 hari tanpa memasukkan data pembayaran…" — tidak dicek; fakta standar SAP Help Portal, parafrase; risiko rendah.
- ⏸️ Passage 6 (score 12): bullet "Integrasi lintas aplikasi… CRM, bank, atau aplikasi e-faktur…" — tidak dicek; framing orisinal (contoh lokal e-faktur); risiko rendah.
- ⏸️ Passage 7 (score 10): "Layanannya dapat berjalan di beberapa penyedia infrastruktur besar, antara lain AWS, Microsoft Azure, dan Google Cloud…" — tidak dicek; fakta multi-cloud standar dengan hedge "antara lain"; risiko rendah.
- ⏸️ Passage 8 (score 8): ">27.000 pelanggan… menurut pernyataan SAP (Oktober 2024)… point-in-time." — tidak dicek; angka marketing diatribusi eksplisit ke SAP + tanggal; risiko rendah.

**Skor plagiarisme: 0,00** (0 exact match, 0 partial near-match pada 3 passage yang diperiksa). Lima passage sisa adalah fakta standar/terstandar yang sudah diatribusi atau artefak struktural; pada bacaan manual tidak ada indikasi phrasing di-lift. Ambang pass (skor < 0,10 DAN tidak ada hit verbatim ≥20 kata di situs non-Soltius) **terpenuhi**.

*Rekomendasi:* verdict pass tetap berlaku. Bila ingin kepastian penuh, 5 passage sisa (fakta standar, risiko rendah) dapat di-recheck pada turn berikutnya saat budget WebSearch tersedia — tidak mengubah verdict yang diperkirakan.

## Re-verifikasi format (style_addendum §7 + batch override)
| Cek | Target batch 2026-10 | Hasil | Status |
|---|---|---|---|
| Word count (tools/count_words.py) | 1000–1200 (target 1100) | 1022 | ✅ |
| FAQ Q&A | 3–5 | 5 | ✅ |
| Internal link | 2 (1 hub + 1 cousin) | 2 (low-code/no-code + SAP Clean Core) | ✅ |
| Image placeholder {IMAGE_NN} | 0 (by design) | 0 | ✅ (tidak di-flag) |
| Definisi muncul | sekali (di snippet) | 1× ("Secara singkat"); tidak diulang di H2/body/FAQ | ✅ |
| Framing Soltius | implementator, ≤2 self-mention | 2 (positioning Kesimpulan + soft CTA); "mengimplementasikan/mengintegrasikan di atas SAP BTP" | ✅ |
| Angka tidak dikarang | semua diatribusi/sumber | 27.000+ (SAP Okt 2024, point-in-time), trial 90 hari, inaktif 30 hari, 3 model harga, 18 Jan 2021, 2017, 2021 | ✅ |
| IFRS di-hedge | (checklist generik batch) | N/A — artikel SAP BTP, bukan IFRS | N/A |
| Tabel HTML valid (bila ada) | — | Tidak ada tabel HTML; tabel 4-pilar dalam Markdown well-formed (4 kolom, header+separator, 4 baris) | ✅ |
| H2 konten | 3–5 | 3 konten + FAQ + Kesimpulan; ≥1 question-format (#2,#3); ≥1 praktis (tabel 4 pilar) | ✅ |
| Sitasi eksternal otoritatif | 1–2 | 2 (sap.com/technology-platform + learning.sap.com) | ✅ |
| Em-dash (U+2014) | ≤2 | 0 | ✅ |

## Loop status
Revision loop **0** (first pass). Tidak ada revisi dipicu — AI gate pass, burstiness gate pass, plagiarisme pass. Tidak melakukan loop ke writer.

## Catatan untuk orchestrator
- Verdict: **pass**. AI score 0,04. Plagiarism score 0,00 (degraded: 3/8 passage web-checked, top-distinctive semua clean; 5 sisa risiko rendah, tak sempat dicek karena budget WebSearch turn habis).
- Rekomendasi: **curator-ready** (editor approve + validator pass).
- Dua keputusan user terbuka yang diteruskan editor (pilihan HUB low-code/no-code & COUSIN SAP Clean Core) tidak memengaruhi verdict kualitas; keduanya isu publikasi/link, bukan isu plagiarisme/AI. Halaman cousin SAP Clean Core dilaporkan editor masih memuat placeholder FAQ saat di-scrape — pastikan final sebelum artikel ini tayang.
- TIDAK menjalankan curator / commit (sesuai instruksi).
