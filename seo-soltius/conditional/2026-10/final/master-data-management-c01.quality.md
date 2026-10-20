---
brief_id: "master-data-management-c01"
validator_run_date: "2026-10-08"
batch: "conditional-2026-10"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Master Data Management (MDM): Pengertian dan Pentingnya

## Verdict: **pass**

Artikel lolos kedua gate QC. AI-detector heuristik memberi skor 0,04 (jauh di bawah ambang revise 0,30), dan burstiness paragraf CV = 0,355 — di atas lantai guardrail 0,30, jadi tidak ada pemicu revise statistik. Delapan passage distinctive dicek via quoted WebSearch; tidak ada satu pun yang cocok verbatim di halaman non-Soltius mana pun (skor plagiarisme 0,00). Semua gate batch 2026-10 terpenuhi: band kata 1000–1200 (1.133/frontmatter, 1.184/skrip), FAQ 5 Q&A, tepat 2 internal link, nol `{IMAGE_NN}` (by design), definisi muncul sekali (di snippet), framing Soltius konsultatif (2 self-mention), angka berlabel sumber dan di-hedge, serta dua tabel Markdown yang valid. Editor merekomendasikan approve dan validator mengonfirmasi. Siap untuk curator (commit) — namun sesuai instruksi, curator TIDAK dijalankan di sini.

## AI Detector (heuristik v2.0)
- Score: **0,04** / 1.0 (ambang: revise ≥0,30, reject ≥0,50) → **pass**
- Paragraph burstiness (CV): **0,355** (guardrail gate ≥0,30 → lolos; ideal ≥0,45)
- Sentence burstiness: 0,878
- Top-30 vocab share: 0,347
- external_api_used: false (heuristik murni)
- Flags (1):
  - [low] `paragraph-low-variance`: "Paragraph word-count CV=0.355 (target >=0.45)" — severity **low**, bukan blocker. Ambang gate 0,30 terlampaui. Wajar untuk explainer B2B padat dengan dua tabel komparasi; menaikkan ke 0,45 akan memaksa padding/pemotongan yang melanggar on-point + band 1000–1200. Dibiarkan.

## Plagiarism (web lookup passage distinctive)
8 passage kandidat diekstrak skrip; dicek via quoted WebSearch (sebagian digabung/divariasikan agar lebih bermakna daripada artefak markdown). Semua **clean** — tidak ada halaman non-Soltius yang memuat frasa Bahasa Indonesia secara verbatim; hasil pencarian hanya memunculkan laman konseptual/definisi berbahasa Inggris, bukan teks artikel ini.

- ✅ "...MDM berarti Master Data Management, yakni tata kelola data inti bisnis" — clean (hanya laman definisi EN: TechTarget, SAP, Bluestone PIM; tidak ada match frasa ID)
- ✅ "Tiga domain intinya mapan: business partner ... material, serta finance" — clean (tidak ada halaman memakai kalimat ini; domain inti MDG terkonfirmasi benar)
- ✅ "Tetapkan data owner dan data steward ... hak ubah, serta alur persetujuan" — clean (hanya artikel EN generik tentang owner vs steward)
- ✅ "MDG dapat berjalan di dalam SAP S/4HANA, dan federasi umumnya berbasis rilis S/4HANA 2023 ke atas" — clean; klaim terkonfirmasi SAP Learning/blogs.sap.com (CDO wajib S/4HANA 2023 FPS01+). Penyederhanaan "umumnya" sudah di-hedge dan diarahkan verifikasi ke SAP Help.
- ✅ "Golden record adalah satu catatan master tepercaya hasil konsolidasi dan de-duplikasi..." — clean (definisi selaras AtroCore/Experian, frasa ID orisinal)
- ✅ "akuntabilitas adalah satu dari lima sasaran MDM" — clean; atribusi "menurut Gartner" via CIO.com benar (sumber sekunder, bukan klaim halaman glossary)
- ✅ Lead "...mengapa data inti yang berantakan merugikan, bagaimana membangun satu sumber kebenaran..." — clean (tidak ada match; hanya laman SSOT generik)
- ✅ CTA "...jelajahi solusi Data Management di soltius.co.id" — self-reference Soltius (by design, bukan plagiarisme)
- **Aggregate plagiarism score: 0,00** (nol match verbatim ≥20 kata di situs non-Soltius)

## Fact spot-check (angka tak dikarang + hedging)
- **US$12,9 juta/tahun (Gartner, biaya poor data quality)** — angka nyata, banyak dikutip, berakar ke Gartner (2020/2021 + laporan 23 Jul 2024). Artikel men-hedge "berasal dari sekitar 2021 ... indikasi, bukan angka pasti". ✓ Tidak dikarang.
- **Federasi SAP MDG = rilis S/4HANA 2023 ke atas** — terkonfirmasi (CDO wajib S/4HANA 2023 FPS01+); cloud edition sebagai core data owner federasi di-hedge "masih berkembang menurut peta jalan SAP ... verifikasi ke SAP Help". ✓
- **3 domain inti MDG (business partner, material, finance)** — sesuai dossier/SAP. ✓
- **Soltius = SAP Platinum Partner via United VARs, Metrodata sejak 1998** — sesuai company_profile. ✓
- **IFRS** — N/A: artikel ini tidak memuat konten IFRS (topik MDM). Tidak ada yang perlu di-hedge; tidak di-flag.

## Re-verifikasi gate batch 2026-10
| Gate | Target batch | Hasil | Status |
|---|---|---|---|
| Word band body | 1000–1200 | 1.133 (frontmatter) / 1.184 (skrip) | ✅ |
| FAQ | 3–5 Q&A | 5 | ✅ |
| Internal link | 2 (1 hub + 1 cousin) | 2 (data-management hub + business-intelligence cousin) | ✅ |
| Image placeholder `{IMAGE_NN}` | 0 (by design) | 0 | ✅ |
| Definisi | sekali (snippet) | sekali, tidak diulang di body/H2/FAQ | ✅ |
| Framing Soltius | ≤2 self-mention, konsultatif | 2 (positioning Kesimpulan + soft CTA); "mendampingi/implementasi" | ✅ |
| Sitasi eksternal | 1–2 | 2 (CIO/Gartner + SAP Learning) | ✅ |
| Tabel HTML valid (bila ada) | — | Tidak ada tabel HTML; 2 tabel Markdown valid (kolom konsisten) | ✅ N/A |

## Loop status
Revision loop **0** (first pass). Tidak ada revise yang dipicu. Tidak ada loop writer.

## Rekomendasi ke orchestrator
**curator-ready** — editor `approve` + validator `verdict: pass`. Memenuhi gate commit (approve + pass). Catatan: curator / commit TIDAK dijalankan pada run ini sesuai instruksi. Dua keputusan user yang masih terbuka dari catatan editor (pilihan HUB dan COUSIN internal link) bersifat editorial/link-swap, bukan isu QC — tidak memengaruhi verdict, tetapi perlu diselesaikan sebelum publikasi bila user mengubahnya.
