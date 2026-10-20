---
brief_id: "sap-ecc-2027-c01"
validator_run_date: "2026-07-06"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — SAP ECC End of Life 2027: Dampak dan Opsi Migrasi Anda

> **Batch note:** dievaluasi dengan override `conditional/2026-07/style_addendum.md` §7 — word band 800–1000, FAQ 2–3, internal link 2, image checks N/A by design. Semua cek lain (AI-tell heuristics, plagiarism via quoted WebSearch, EYD, integritas struktur) berlaku penuh.

## Verdict: **pass**

Artikel lolos kedua gerbang. Skor AI-detector heuristik 0.04/1.0 (jauh di bawah ambang revise 0.30) dengan hanya satu flag low-severity (paragraph CV 0.377 — di bawah target 0.45 tetapi jelas di atas garis hard-fail 0.30, dan terkompensasi sentence burstiness 1.183 yang sangat manusiawi). Kedelapan passage plagiarisme yang di-lookup via WebSearch quoted semuanya clean — nol verbatim hit di situs non-Soltius; hasil pencarian hanya topical match, dan untuk klaim Medco justru mengkonfirmasi faktanya (liputan6, IDX Channel) tanpa kesamaan frasa. Editor `approve` (skor 9) berdiri; tidak ada revisi diperlukan — kurator boleh lanjut setelah review user (batch berhenti di sini sesuai instruksi).

## AI Detector (heuristic v2.0)

- Score: **0.04** / 1.0 (thresholds: revise ≥0.30, reject ≥0.50) → verdict script: **pass**
- Paragraph burstiness (CV): **0.377** (target ≥0.45; hard-fail <0.30 — tidak terpicu)
- Sentence burstiness: **1.183** (sangat tinggi = variasi kalimat kuat)
- Top-30 vocab share: **0.313** (di bawah trigger 0.35)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.377 (target >=0.45)

**Re-read manual atas flag:** variasi paragraf ditekan oleh format batch 800–1000 kata (paragraf 1–4 kalimat per addendum §1), tetapi ritme tetap terasa: dua paragraf punch pendek (mispersepsi "1 Januari 2028"; hedging extended-maintenance), paragraf data panjang, dan tabel memecah blok. Nol pattern-flag bahasa (tanpa "Selain itu" pembuka, tanpa "Penting untuk dicatat", tanpa era-filler, em-dash 0). Tidak ada tell statistik maupun leksikal yang menunjang skor AI >30% di detektor komersial. **Lolos.**

**EYD & register (spot-check validator):** konstruksi "bukan ... melainkan" benar; konjungsi baku ("sehingga", "karena itu", "mengenai"); istilah asing dimiringkan pada kemunculan pertama; kutipan praktisi ("masih sempat tidak sebelum 2027") dalam tanda kutip — wajar sebagai register lisan yang dikutip. "2 poin persen" mengikuti frasa resmi SAP ("two percent points on the maintenance basis") dan menghindari salah baca "2% dari nilai kontrak" — diterima. Tidak ada temuan EYD baru di luar yang sudah dibereskan editor.

**Integritas struktur:** frontmatter lengkap dan konsisten (slug 44 char, 2 internal link = frontmatter = body, 2 external citation = frontmatter = body); lead 1 paragraf tanpa roadmap; snippet "Ringkasnya:" blockquote 47 kata; 3 H2 body (2 question-format) + FAQ + Kesimpulan; 1 tabel keputusan; definisi muncul sekali (snippet saja); CTA soft soltius.co.id = baris terakhir. Utuh.

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked (quoted WebSearch, 2026-07-06):

- ✅ Passage 1: "Mainstream maintenance SAP ECC 6.0 (EHP 6–8) berakhir 31 Desember 2027, sementara EHP 0–5 sudah berakhir lebih dulu..." — clean; hasil hanya halaman topikal berbahasa Inggris (soapeople, riministreet, community.sap.com), tanpa frasa Indonesia verbatim. Fakta = fakta publik SAP, phrasing orisinal.
- ✅ Passage 2 (definition snippet): "SAP ECC 2027 adalah tenggat berakhirnya mainstream maintenance SAP ECC 6.0 (SAP Business Suite 7)..." — clean; hanya topical match (support.sap.com, softwareseni.com), tanpa match frasa.
- ✅ Passage 3: "Batasan versinya sering terlewat: EHP 0–5 sudah lebih dulu kehilangan dukungan pada akhir 2025..." — clean; nol hasil relevan (hasil pencarian malah nyasar ke topik EHP non-SAP).
- ✅ Passage 4: "Medco Energi, lewat keterbukaan informasi bursa Juni 2026, mengalokasikan USD 1,75 juta..." — clean; berita Indonesia (liputan6.com, idxchannel.com, kabarbursa.com) memuat fakta yang sama (USD 1,75 juta; EPI+MPI; 2026→2027) dengan phrasing berbeda — korroborasi fakta, bukan plagiarisme.
- ✅ Passage 5: "Menurut Gartner, per akhir 2024 baru 39% dari sekitar 35.000 pelanggan ECC..." — clean; tidak ada match frasa Indonesia.
- ✅ Passage 6 (FAQ question): "Kapan dukungan SAP ECC benar-benar berakhir?" — common/PAA-style question phrasing, diabaikan per aturan skoring (candidate ini artefak heading dari script); tidak ada halaman dengan pertanyaan+jawaban verbatim.
- ✅ Passage 7: "SAP menawarkan extended maintenance berbayar hingga akhir 2030, dan bagi pelanggan kompleks berkontrak RISE tersedia transition option..." — clean; hasil berbahasa Inggris (news.sap.com, asug.com) mengkonfirmasi substansi (transition option 2031–2033, max success plan), tanpa kesamaan frasa.
- ✅ Passage 8: "Gartner memproyeksikan sekitar 17.000 pelanggan ECC, hampir separuh basis, belum migrasi hingga 2027." — clean; nol match.

- Exact matches (non-Soltius): **0** × 0.05 = 0.00
- Partial near-matches (non-Soltius): **0** × 0.02 = 0.00
- Verbatim hit ≥20 kata: **tidak ada**
- **Aggregate score: 0.00** → plagiarism verdict: **pass**

## Override / N-A ledger (addendum §7)

| Cek default script/agent | Status | Dasar |
|---|---|---|
| Word band 1.500–1.800 | **N/A → COMPLIANT** | Override batch: band 800–1000; editor clean count 987 (script raw count 1020 termasuk heading/markdown token — bukan acuan band) |
| FAQ 5–8 | **N/A → COMPLIANT** | Override batch: 2–3; aktual 3 |
| Internal link 3 | **N/A → COMPLIANT** | Override batch: 2; aktual tepat 2 (hub + cousin) |
| Image placeholder / images.json | **N/A by design** | Addendum §3: {IMAGE_NN} dilarang; aktual 0, tanpa images.json — JANGAN di-flag |

## Watch items (non-blocking, diteruskan dari editor)

- Atribusi Medco & pengumuman transition option sengaja in-text tanpa link agar external citation tetap 2 (band 1–2) — **bukan** sitasi hilang.
- Frasa berjangkar waktu ("tinggal 18 bulan lagi", "Kuartal ini", "semester ini") akurat untuk publish_month 2026-07; perlu di-update bila artikel di-refresh setelah 2026.

## Loop status

This is revision loop **0**. Verdict pass — tidak ada loop writer. Kurator TIDAK dijalankan pada batch ini (instruksi user: berhenti setelah verdict untuk review manual).
