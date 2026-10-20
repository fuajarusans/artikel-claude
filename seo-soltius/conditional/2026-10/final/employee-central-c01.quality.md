---
brief_id: "employee-central-c01"
validator_run_date: "2026-10-08"
batch: "conditional-2026-10"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Employee Central SAP SuccessFactors: Fungsi dan Keunggulannya

## Verdict: **pass**

Artikel lolos kedua gate QC dan memenuhi seluruh override batch 2026-10. AI-detector heuristik memberi skor **0,04** (jauh di bawah ambang revise 0,30 dan reject 0,50). Burstiness paragraf **CV = 0,35** — di atas lantai guardrail 0,30, sehingga tidak ada pemicu revise statistik dan **tidak ada perbaikan burstiness yang perlu dilakukan** (artikel tidak disentuh). Delapan passage distinctive berbahasa Indonesia dicek via quoted WebSearch; **nol** yang cocok verbatim di halaman non-Soltius mana pun (skor plagiarisme 0,00) — hasil pencarian hanya memunculkan materi konseptual/dokumentasi SAP berbahasa Inggris yang justru menegaskan fakta yang dikutip artikel. Editor merekomendasikan `approve` (skor 9) dan validator mengonfirmasi `pass`. Secara gate commit artikel sudah **curator-ready**, NAMUN sesuai instruksi curator/commit TIDAK dijalankan di sini — dan ada satu keputusan user yang terbuka (urutan publikasi batch HR) yang sebaiknya dikonfirmasi sebelum publikasi.

## AI Detector (heuristik v2.0)
- Score: **0,04** / 1.0 (ambang: revise ≥0,30, reject ≥0,50) → **pass**
- Paragraph burstiness (CV): **0,35** (guardrail gate ≥0,30 → **lolos**; ideal ≥0,45)
- Sentence burstiness: **1,105** (ritme kalimat sangat bervariasi)
- Top-30 vocab share: **0,346**
- external_api_used: false (heuristik murni; tidak ada `AI_DETECTOR_API_KEY`)
- Flags (1):
  - [low] `paragraph-low-variance`: "Paragraph word-count CV=0.35 (target >=0.45)" — severity **low**, bukan blocker. Ambang gate 0,30 terlampaui. Wajar untuk explainer B2B padat dengan satu tabel 7-baris dan band ketat 1000–1200; menaikkan paksa ke 0,45 akan memaksa padding/pemotongan yang melanggar aturan on-point. **Dibiarkan.** Sentence burstiness 1,105 mengonfirmasi ritme tulisan tetap manusiawi.

## Plagiarism (web lookup passage distinctive)
8 passage kandidat diekstrak skrip; dicek via quoted WebSearch (frasa ID dibersihkan dari artefak markdown agar bermakna). **Semua clean** — tidak ada halaman non-Soltius yang memuat frasa Bahasa Indonesia secara verbatim; hasil hanya berupa laman konseptual/dokumentasi berbahasa Inggris (SAP Learning, SAPinsider, blogs.sap.com, Oracle/Deltek HCM docs).

- ✅ Lead: "Banyak perusahaan yang baru mengadopsi SAP SuccessFactors mengira mereka membeli satu aplikasi SDM" — clean (hanya laman konsep EN: IBM, LeverX, TechTarget; tidak ada match frasa ID)
- ✅ "Enam modul talenta, yaitu Recruiting, Onboarding, Performance & Goals, Learning, Compensation, dan Succession…" — clean; daftar modul Talent Suite terkonfirmasi benar (SAP Licensing Experts/unogeeks), tanpa match kalimat ID
- ✅ "Granularitas struktur organisasi di Employee Central kerap berbeda dari SAP ERP HCM on-premise…" — clean; konsepnya didukung SAPinsider ("can differ … in terms of both configuration and granularity") dan blogs.sap.com — bukti bahwa fakta benar, bukan teks terjiplak
- ✅ "Employee Central memodelkan organisasi lewat foundation objects…" — clean; selaras materi SAP Learning "Introducing Foundation Objects", frasa ID orisinal
- ✅ "Modul talenta seperti Recruiting, Onboarding, Performance & Goals, Learning, dan Compensation umumnya dilisensikan terpisah…" — clean; didukung panduan lisensi (SAP Licensing Experts, Redress Compliance), tanpa match kalimat ID
- ✅ "Menurut dokumentasi SAP, data organisasi harus dibuat lebih dulu karena catatan karyawan bergantung padanya" — clean (nol match); lihat catatan atribusi di bawah
- ✅ "pemegang posisi induk otomatis menjadi atasan langsung" — clean; mekanisme position-hierarchy terkonfirmasi (Oracle HCM, PaySpace, SAP KBA), tanpa sumber ID
- ✅ Effective dating "record lama ditutup satu hari sebelum tanggal berlaku record baru" (FAQ) — clean; pola "start − 1 hari" terkonfirmasi lintas sistem HR (Oracle/Deltek/NEOGOV); frasa ID orisinal
- **Aggregate plagiarism score: 0,00** (nol match verbatim ≥20 kata di situs non-Soltius; nol partial near-match)

## Fact spot-check (angka tak dikarang + hedging) — konfirmasi lapis validator
- **Hierarki 4 tingkat (Legal Entity → Business Unit → Division → Department)** — terkonfirmasi (SAP Learning); Location/Cost Center/Position di luar hierarki. ✓
- **5 nilai default dari Legal Entity** — diatribusikan "Menurut dokumentasi SAP"; terkonfirmasi SAP Learning. ✓
- **Effective dating: record lama ditutup H-1; record baru bertanggal akhir 31 Desember 9999** — pola terkonfirmasi; nilai 31/12/9999 benar untuk SAP. ✓
- **EC Payroll native 50 locale + >800 legal change/tahun (SAP News Center, Des 2023)** — bertanggal & berlabel sumber; di-hedge "dapat berubah antar-rilis". ✓
- **Cakupan negara EC ">100"** — sengaja di-hedge sebagai rentang bersumber ("menurut materi SAP, lebih dari 100; bervariasi antar-sumber/rilis"). JANGAN dipatok jadi satu angka. ✓ (hedged)
- **IFRS** — N/A: artikel ini (Employee Central) tidak memuat konten IFRS. Tidak ada yang perlu di-hedge; tidak di-flag.
- ℹ️ **Catatan atribusi (advisory, bukan blocker):** klaim "Menurut dokumentasi SAP, data organisasi harus dibuat lebih dulu…" didukung sebagai praktik implementasi yang lazim diajarkan (SAP Learning "Creating Foundation Object Records during implementation"), namun WebSearch tidak menemukan satu kalimat SAP eksplisit yang memerintahkan urutan itu. Ini fakta dependensi yang benar dan sudah di-soften; **tidak mengubah verdict.** Bila mau ekstra aman, atribusi bisa dilonggarkan jadi "Dalam implementasi EC, data organisasi umumnya dibuat lebih dulu…".

## Re-verifikasi gate batch 2026-10
| Gate | Target batch | Hasil | Status |
|---|---|---|---|
| Word band body | 1000–1200 | 1.119 (frontmatter/count_words.py) · 1.164 (skrip) | ✅ |
| FAQ | 3–5 Q&A | 5 | ✅ |
| Internal link | 2 (1 hub + 1 cousin) | 2 (hub SAP SuccessFactors + cousin panduan implementasi) | ✅ |
| Image placeholder `{IMAGE_NN}` | 0 (by design) | 0 | ✅ |
| Definisi | sekali (snippet) | sekali; H2/body/FAQ tidak mengulang ("sistem pencatatan wajib" di FAQ#3 = fakta dependensi, konteks beda) | ✅ |
| Framing Soltius | ≤2 self-mention, konsultatif | 2 (positioning Kesimpulan + soft CTA soltius.co.id); "mengimplementasikan dan mendampingi" | ✅ |
| Sitasi eksternal otoritatif | 1–2 | 2 (SAP Learning + SAP News Center) | ✅ |
| Em-dash | ≤2 | 0 | ✅ |
| Tabel HTML valid (bila ada) | — | Tidak ada tabel HTML; 1 tabel Markdown (7 foundation object) valid, kolom konsisten | ✅ N/A |

## Loop status
Revision loop **0** (first pass). Tidak ada revise yang dipicu (AI maupun plagiarisme). Tidak ada loop writer.

## Rekomendasi ke orchestrator
**curator-ready (memenuhi gate commit: editor `approve` + validator `pass`) — TETAPI jangan commit dulu.** Sesuai instruksi, curator/commit TIDAK dijalankan pada run ini.

⚠️ **Open flag user (eksplisit minta ditanyai — diteruskan, bukan diputuskan validator):** User meminta untuk ditanyai (lihat `employee-central-c01.qc.md` dan permintaan awal). Editor sudah menandai **koordinasi urutan publikasi batch HR Oktober**: dossier mencatat urutan ideal **Employee Central + Human Capital Management dipublikasikan lebih dulu sebelum artikel KPI karyawan** agar internal-linking antar-sibling rapi. Keputusan urutan/prioritas ini bersifat interaktif → ranah orchestrator/user, bukan sub-agent. Harus dikonfirmasi ke user sebelum publikasi.

ℹ️ Catatan editorial non-QC (tidak memengaruhi verdict): hub `/solutions-by-products/reading/success-factors` berbahasa Inggris & tidak menyebut Employee Central (konfirmasi ke user bila ada preferensi hub lain); saat publish, CMS set `dateModified = 2026-10`.
