---
brief_id: "disaster-recovery-c01"
validator_run_date: "2026-10-08"
batch: "conditional-2026-10"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Disaster Recovery: Pengertian, RPO & RTO, dan Pentingnya bagi Bisnis

## Verdict: **pass**

Artikel lolos kedua gate QC dan memenuhi seluruh override batch 2026-10. AI-detector heuristik memberi skor **0,04** (jauh di bawah ambang revise 0,30 dan reject 0,50). Burstiness paragraf **CV = 0,318** — di atas lantai guardrail 0,30, sehingga **tidak ada pemicu revise statistik dan tidak ada perbaikan burstiness yang dilakukan** (artikel tidak disentuh, sesuai aturan: hanya pecah/variasikan paragraf bila CV < 0,30). Delapan passage distinctive berbahasa Indonesia dicek via quoted WebSearch; **nol** yang cocok verbatim di halaman non-Soltius mana pun (skor plagiarisme 0,00) — hasil pencarian hanya memunculkan materi konseptual/dokumentasi berbahasa Inggris (AWS, Cohesity, Backblaze, DevOps.com, Advisera, dsb.) yang justru **menegaskan** fakta yang dikutip artikel, bukan sumber terjiplak. Editor merekomendasikan `approve` (skor 9) dan validator mengonfirmasi `pass`. Secara gate commit artikel sudah **curator-ready**, NAMUN sesuai instruksi curator/commit **TIDAK** dijalankan di sini — dan tetap ada keputusan user terbuka yang diteruskan editor (pilihan hub internal) yang sebaiknya dikonfirmasi sebelum publikasi.

## AI Detector (heuristik v2.0)
- Score: **0,04** / 1.0 (ambang: revise ≥0,30, reject ≥0,50) → **pass**
- Paragraph burstiness (CV): **0,318** (guardrail gate ≥0,30 → **lolos**; ideal ≥0,45)
- Sentence burstiness: **0,724** (ritme kalimat bervariasi, manusiawi)
- Top-30 vocab share: **0,287** (di bawah ambang 0,35 → tidak repetitif)
- external_api_used: false (heuristik murni; tidak ada `AI_DETECTOR_API_KEY`)
- Flags (1):
  - [low] `paragraph-low-variance`: "Paragraph word-count CV=0.318 (target >=0.45)" — severity **low**, bukan blocker. Ambang gate 0,30 terlampaui (margin tipis namun jelas di atas lantai). Wajar untuk explainer B2B padat dengan dua tabel komparasi dan band ketat 1000–1200; menaikkan paksa ke 0,45 akan memaksa padding/pemotongan yang melanggar aturan on-point dan mendekatkan ke cap 1200. **Dibiarkan.** Sentence burstiness 0,724 dan rentang paragraf 18–78 kata mengonfirmasi ritme tetap manusiawi.

> Catatan metrik: skrip menghitung CV 0,318 pada word_count 1252 (raw split termasuk artefak tabel). Editor melaporkan CV 0,326/0,335 pada body bersih. Keduanya di atas guardrail 0,30; tidak ada konflik verdict.

## Plagiarism (web lookup passage distinctive)
8 passage kandidat diekstrak skrip; dicek via quoted WebSearch (frasa ID dibersihkan dari artefak markdown/tabel agar bermakna). **Semua clean** — tidak ada halaman non-Soltius yang memuat frasa Bahasa Indonesia secara verbatim. Hasil hanya berupa laman konseptual/dokumentasi berbahasa Inggris yang mendukung akurasi fakta.

- ✅ FAQ: "Contohnya, RPO 1 jam berarti backup minimal tiap jam, sementara RTO 4 jam berarti sistem wajib daring kembali dalam 4 jam" — clean; hanya glosarium RPO/RTO EN (Nakivo, Acronis, Microsoft Learn), nol match frasa ID
- ✅ "Jika RTO 4 jam dan gangguan terjadi pukul 10.30, sistem wajib daring kembali paling lambat pukul 14.30" — clean; contoh berhitung orisinal, nol match (AWS, ComputerWeekly, lawinsider hanya definisi)
- ✅ "...11/POJK.03/2022 mewajibkan bank menempatkan Pusat Data dan DRC di wilayah Indonesia, kecuali memperoleh izin OJK untuk penempatan di luar negeri" — clean; berita/pasal.id mengonfirmasi **substansi** Pasal 35 ayat (1)–(2), tetapi tidak ada kalimat artikel yang terjiplak. Lihat catatan fakta di bawah.
- ✅ "Jika RPO 1 jam dengan backup terakhir pukul 10.00, lalu gangguan menyerang pukul 10.59, data yang hilang paling banyak 59 menit, masih dalam ambang RPO" — clean; hanya glosarium RPO EN (Cohesity, Drata), nol match frasa ID
- ✅ "Tetapkan RPO dan RTO per sistem berdasarkan dampak bisnisnya, bukan menyamaratakan satu angka" — clean; prinsip didukung AWS REL13-BP01 + WWT/NinjaOne (per-sistem/BIA), frasa ID orisinal
- ✅ "Cloud menyediakan building block seperti multi-region, replikasi, dan failover, tetapi RPO/RTO tetap hasil desain" — clean; didukung OceanBase/Backblaze ("backup strategy must not dictate RTO/RPO"), nol match kalimat ID
- ✅ "replikasi bukan backup: jika data rusak, korupsinya ikut tersalin, sehingga backup yang teruji tetap wajib" — clean; konsep didukung DevOps.com/Percona/Backblaze, frasa ID orisinal
- ✅ "DR adalah lapisan TI di dalam BCP, dan backup hanyalah salah satu bahan bakunya" — clean; framing DR⊂BCP didukung Advisera/Opsio/Intouchit, frasa ID orisinal
- **Aggregate plagiarism score: 0,00** (nol match verbatim ≥20 kata di situs non-Soltius; nol partial near-match). Tidak ada hit pada soltius.co.id/metrodata/SAP-official yang perlu dikecualikan.

## Fact spot-check (angka tak dikarang + hedging) — konfirmasi lapis validator
- **Contoh berhitung RPO/RTO** (10.30 → 14.30; backup 10.00, gangguan 10.59 → hilang ≤59 menit) — benar secara aritmatika dan sesuai definisi RPO/RTO lintas sumber (Cohesity, AWS, Microsoft Learn). Angka adalah **contoh ilustratif**, bukan klaim produk. ✓
- **Empat strategi DR + rentang RPO/RTO tipikal** — berlabel eksplisit "rentang tipikal menurut AWS, bukan jaminan kontraktual"; cross-check ke AWS Well-Architected DR objectives mengonfirmasi backup & restore → pilot light → warm standby → multi-site active/active dari biaya terendah ke tertinggi. ✓ (angka di-hedge, tidak dikarang)
- **POJK No. 11/POJK.03/2022 Pasal 35** — WebSearch (pasal.id, bisnis.com) mengonfirmasi: ayat (1) wajib DC + DRC di wilayah Indonesia; ayat (2) luar negeri **hanya dengan izin OJK**. Artikel **TIDAK** mengklaim pemisahan geografis (frasa itu sudah dibuang writer/editor) — benar. ⚠️ Catatan non-blocker: aturan "DC dan DRC wajib di lokasi berbeda" yang muncul di hasil pencarian adalah ketentuan **IKNB**, bukan Pasal 35 untuk bank umum; artikel dengan tepat tidak mencampurnya. Tanggal berlaku "7 Juli 2022" konsisten dengan pemberitaan 31 Juli 2022. ✓
- **SAP HANA System Replication** — satu-satunya angka kuantitatif ("RPO nol" mode sinkron, kapabilitas HA satu region; asinkron → RPO >0 lintas region; takeover manual). Didukung konsep replikasi sinkron=RPO nol lintas sumber (OceanBase). Angka "RTO menit" SAP HANA yang di-flag dossier **tidak dipakai** di artikel → flag moot. ✓
- **Kerugian downtime** — sengaja dibingkai kualitatif (tanpa angka karangan tipe "$X/menit"). ✓
- **IFRS** — N/A: artikel disaster recovery tidak memuat konten IFRS. Tidak ada yang perlu di-hedge; tidak di-flag.
- **Soltius** = SAP Platinum Partner via United VARs, Best Cloud & Best RISE Partner; "merancang, mengimplementasikan, dan mendukung … bukan membuat perangkat lunaknya" — selaras company_profile/product_matrix; AWS/Google Cloud/Huawei Cloud tidak diklaim milik Soltius. ✓

## Re-verifikasi gate batch 2026-10
| Gate | Target batch | Hasil | Status |
|---|---|---|---|
| Word band body | 1000–1200 | 1.192 (`count_words.py`) · 1.252 (skrip raw) | ✅ |
| FAQ | 3–5 Q&A | 5 | ✅ |
| Internal link | 2 (1 hub + 1 cousin) | 2 (hub `/id/solutions-by-products/cloud` "solusi SAP di cloud" + cousin `/id/blog/migrasi-erp-ke-cloud" "migrasi ERP ke cloud"), keduanya di H2-3 | ✅ |
| Image placeholder `{IMAGE_NN}` | 0 (by design) | 0 | ✅ (tidak di-flag) |
| Definisi | sekali (snippet) | sekali di snippet; H2-1/FAQ#1 memberi **distingsi** backup vs DR vs BCP (info baru: layering + failover), bukan menyatakan ulang definisi snippet | ✅ |
| Framing Soltius | ≤2 self-mention, konsultatif | 2 (positioning line Kesimpulan + soft CTA soltius.co.id baris terakhir); sisa kemunculan hanyalah URL tautan | ✅ |
| Sitasi eksternal otoritatif | 1–2 | 2 (AWS Well-Architected H2-2 + OJK POJK No. 11/POJK.03/2022 H2-4) | ✅ |
| Em-dash | ≤2 | 0 (seluruh file) | ✅ |
| Angka tak dikarang | wajib | Contoh RPO/RTO ilustratif; rentang strategi berlabel "tipikal menurut AWS"; downtime kualitatif | ✅ |
| Tabel HTML valid (bila ada) | — | Tidak ada tabel HTML; 2 tabel Markdown (RPO vs RTO 4 kolom; 4 strategi 5 kolom) valid, kolom konsisten | ✅ N/A |

## Loop status
Revision loop **0** (first pass). Tidak ada revise yang dipicu (AI maupun plagiarisme). Tidak ada loop writer. Tidak ada escalation.

## The shipping question
Would an HCU/SpamBrain review flag this as scaled-AI content? **No** (AI 0,04; CV paragraf 0,318 di atas gate; vocab share 0,287; sentence burstiness 0,724). Would Originality.ai give it >30% AI? **Unlikely** berdasarkan heuristik. Would a 20-word phrase turn up verbatim elsewhere? **No** (8/8 passage clean). → **pass.**

## Rekomendasi ke orchestrator
**curator-ready (memenuhi gate commit: editor `approve` + validator `pass`) — TETAPI jangan commit dulu.** Sesuai instruksi task, curator/commit **TIDAK** dijalankan pada run ini.

⚠️ **Open flag user (diteruskan dari editor, bukan diputuskan validator):** landing page topik "disaster recovery" kosong di sheet Oktober, sehingga editor memilih hub = halaman solusi Cloud Soltius (`/id/solutions-by-products/cloud`) + cousin = blog `migrasi-erp-ke-cloud`. Pemilihan hub ini bersifat interaktif → ranah user/orchestrator. Mohon konfirmasi apakah hub Cloud sudah tepat atau ada URL halaman solusi lain (mis. Managed Services/DR khusus) yang lebih pas; jika ada, cukup ganti 1 tautan di H2-3. Keputusan ini tidak memblokir verdict `pass`, tetapi sebaiknya diselesaikan sebelum publikasi.
