---
brief_id: "agentic-ai-c01"
validator_run_date: "2026-09-01"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
batch: "conditional-2026-09 (style_addendum.md §7 overrides applied — 800–1000 kata cleaned-prose, tanpa image placeholder, FAQ 2–3, internal link = 2, definisi hanya sekali di snippet)"
---

# Quality Validator Report — Apa Itu Agentic AI dan Potensinya untuk Otomasi Bisnis

## Verdict: **pass**

Artikel lolos kedua gerbang QC validator. Heuristic AI-detector menilai 0.04/1.0 (jauh di bawah ambang revise 0.30) dengan hanya satu flag low-severity (varians panjang paragraf). Pencarian web atas 8 passage distingtif tidak menemukan satu pun kecocokan verbatim di halaman non-Soltius — prosa Bahasa Indonesia-nya orisinal; halaman yang muncul hanyalah artikel penjelas bertopik sama dengan kata-kata berbeda. Seluruh angka Gartner dan klaim produk SAP di-verifikasi ulang live terhadap sumber primer dan terkonfirmasi akurat, termasuk angka "sepertiga implementasi multi-agent pada 2027" yang di-flag editor karena absen dari daftar 8 fakta dossier. Semua override batch 2026-09 dipatuhi. Tidak ada isu yang menghambat commit. **Curator-ready.**

## AI Detector (heuristic v2.0)
- Score: **0.04** / 1.0 — verdict **pass** (thresholds: revise ≥0.30, reject ≥0.50)
- Paragraph burstiness (CV): **0.331** (target ≥0.45; ambang AI-tell kuat <0.30 — di atasnya, jadi tidak memblokir)
- Sentence burstiness (CV): **0.734** (sangat bervariasi — indikator manusia kuat)
- Top-30 vocab share: **0.342** (di bawah ambang 0.35)
- Flags (1):
  - [low] paragraph-low-variance: Paragraph word-count CV=0.331 (target ≥0.45)

**Catatan validator:** flag paragraph-low-variance adalah low-severity dan lazim pada artikel padat 900 kata dengan paragraf sengaja dijaga 1–4 kalimat. CV 0.331 berada di atas ambang AI-tell kuat (0.30), dan burstiness kalimat yang tinggi (0.734) plus ketiadaan pola AI-tell lain (0 "Selain itu" berturut, 0 "penting untuk dicatat", 0 era-filler, 0 em-dash, suara praktisi hadir) mengonfirmasi ini bukan sinyal konten AI. Tidak menuntut revisi.

## Plagiarism (web lookup of distinctive passages)
8 passage distingtif dicek via WebSearch berkutip. Query script yang memuat sintaks tautan markdown diganti dengan fragmen prosa bersih agar lookup bermakna.

- ✅ "batas antara asisten yang sekadar menjawab pertanyaan dan agen yang benar-benar menuntaskan pekerjaan" — clean (hanya artikel penjelas bertopik sama, kata berbeda)
- ✅ "agentic AI adalah sistem kecerdasan buatan yang mampu menetapkan langkah, mengambil keputusan, dan menjalankan tindakan" — clean (definisi konsep umum; frasa persis tak muncul)
- ✅ "Karena tertanam lintas portofolio cloud SAP, termasuk SAP S/4HANA Cloud, agen bertindak atas data bisnis nyata" — clean
- ✅ "proyek yang mandek hampir selalu tersandung kesiapan data dan batas kewenangan agen" — clean (suara praktisi orisinal)
- ✅ "Contohnya sudah nyata di ERP lewat Joule Agents, sementara mayoritas organisasi masih menata fondasinya" — clean
- ✅ "sistem agentic justru memakai model generatif sebagai lapisan penalarannya" — clean (konsep umum; frasa persis tak muncul)
- ✅ "Joule yang semula copilot generatif kini mencakup Joule Agents" — clean (hanya sumber SAP-official/pers yang kita rujuk, bukan plagiarisme)
- ✅ "mulailah dari satu alur kerja bernilai jelas, bukan mengotomasi segalanya sekaligus" — clean
- **Aggregate plagiarism score: 0.00** — tidak ada verbatim hit ≥20 kata di situs non-Soltius; tidak ada partial near-match. Lolos ambang (pass jika <0.10 dan tanpa hit verbatim 20+ kata).

## Fact re-verification (klaim angka & kapabilitas produk — WAJIB re-cek)
Semua di-WebSearch live 2026-09-01 terhadap sumber primer:

| Klaim di artikel | Sumber primer | Verdict |
|---|---|---|
| Gartner: 40% aplikasi enterprise ber-agen tugas-spesifik akhir 2026, dari <5% 2025 | Gartner PR 2025-08-26 (judul PR cocok persis) | ✅ akurat |
| Gartner: ~sepertiga implementasi agentic gabung agen keahlian berbeda pada 2027 | Gartner PR 2025-08-26 (PR yang sama) — "one-third of agentic AI implementations will combine agents with different skills" by 2027 | ✅ akurat (klaim yang di-flag editor; kini dikonfirmasi ulang validator) |
| Gartner: 15% keputusan kerja harian otonom pada 2028, dari 0% 2024 | Gartner (strategic tech trends, terkait PR 2025-06-25) | ✅ akurat |
| Gartner: >40% proyek agentic dibatalkan hingga akhir 2027 | Gartner PR 2025-06-25 | ✅ akurat |
| SAP: 14 Joule Agents baru di SAP Connect (Okt 2025), lintas keuangan/SDM/pengadaan/rantai pasok | SAP News 2025-10 (URL cocok); "14 new Joule Agents" terkonfirmasi | ✅ akurat (bukan 15) |
| Joule Assistants = asisten berbasis peran yang mengoordinasikan agen | CIO / SAP News 2025-10 ("role-aware Joule Assistants") | ✅ akurat |
| Joule tertanam "lintas portofolio cloud SAP, termasuk SAP S/4HANA Cloud" (non-eksklusif) | SAP News 2025-10 | ✅ akurat (framing non-eksklusif dihormati) |

Tidak ada angka yang tak bersumber; semua memuat atribusi + tahun. Caveat dossier dipatuhi (Deloitte ~11% dibuang; 14 bukan 15; tanpa Joule Studio; tanpa angka partner-blog).

## Batch-override compliance (style_addendum.md §7)
| Cek | Nilai batch | Hasil | Status |
|---|---|---|---|
| Word band | 800–1000 (cleaned-prose) | 909 via `tools/count_words.py` (raw script 944 — tetap dalam pita; TIDAK dibaca sebagai >1000 fail) | ✅ compliant |
| FAQ | 2–3 Q&A | 3 Q&A | ✅ compliant |
| Internal link | 2 (1 hub + 1 cousin) | 2 (roadmap adopsi SAP Joule + migrasi ERP ke cloud) | ✅ compliant |
| Image placeholder / images.json | 0 (dilarang by design) | 0 {IMAGE_NN}; tidak ada images.json | ✅ N/A by design — image checks skipped |
| Definisi hanya sekali (snippet) | 1× di snippet | Definisi 51 kata di "Ringkasnya:"; H2#1 = perbandingan (info baru reaktif/proaktif + spektrum), bukan restatement | ✅ compliant |
| Self-mention Soltius | maks 2 | 2 (positioning line Kesimpulan + soft CTA baris terakhir) | ✅ compliant |
| Sitasi eksternal otoritatif | 1–2 | 2 (Gartner 2025-08-26 + SAP News 2025-10) | ✅ compliant |

## Full-force checks (berlaku penuh — bukan override)
- **Anti-AI (§5):** lolos — 0 opener klise, 0 em-dash, 0 "Selain itu" berturut, ritme kalimat bervariasi (CV 0.734), suara praktisi hadir tanpa nama Soltius. (Lihat AI Detector di atas.)
- **EYD & konsistensi:** bersih. Istilah asing di-italic konsisten (*tool use*, *multi-agent*, *human-in-the-loop*, *large language model*); nama produk SAP lengkap di sebutan pertama; akronim di-expand. Satu frasa sedikit kaku ("keduanya sebuah spektrum", FAQ #1) — kosmetik, bukan error EYD, tidak memblokir.
- **Struktur:** utuh — frontmatter valid, H1 + 3 H2 body + FAQ + Kesimpulan + soft CTA; tabel perbandingan well-formed; 2 bullet-list dengan lead-in bold; blockquote snippet utuh. ≥1 question-format H2 (2 ada) + ≥1 H2 praktis/terstruktur (tabel + list) terpenuhi. Honest hedging hadir (>40% proyek dibatalkan/2027).
- **Framing Soltius:** implementator/pendamping SAP Business AI (bukan pembuat); kredensial akurat (SAP Platinum via United VARs, sejak 1998); tanpa superlatif.

## Loop status
Revision loop **0** (first pass). Tidak ada revisi dipicu; tidak ada writer loop.

## The shipping question
Akankah review HCU/SpamBrain menandai ini sebagai konten AI ter-skala? **Tidak** — score 0.04, burstiness kalimat tinggi, tanpa pola AI-tell. Akankah Originality.ai memberi >30%? **Kemungkinan tidak** berdasarkan tell statistik. Akankah frasa 20 kata dari paragraf mana pun muncul verbatim di tempat lain? **Tidak** — 8 passage bersih. Semua "tidak" → **pass**.
