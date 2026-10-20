---
brief_id: "human-capital-management-c01"
validator_run_date: "2026-10-08"
batch: "conditional-2026-10"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Apa Itu Human Capital Management (HCM)? Panduan Lengkap

## Verdict: **pass**

Artikel lolos kedua gate QC. AI-detector heuristik memberi skor 0,04 (jauh di bawah ambang revise 0,30), dan burstiness paragraf CV = 0,322 — di atas lantai guardrail 0,30, sehingga tidak memicu revise statistik. Delapan passage distinctive dicek via quoted WebSearch; tidak ada satu pun yang cocok verbatim di halaman non-Soltius mana pun (skor plagiarisme 0,00) — overlap yang muncul hanyalah konsep HR/HCM generik di blog vendor (HashMicro, Talenta, isolved, TriNet), bukan teks artikel ini. Semua gate batch 2026-10 terpenuhi: band kata 1000–1200 (1.046 frontmatter / 1.083 skrip), FAQ 5 Q&A, tepat 2 internal link (hub HCM + cousin SAP SuccessFactors), nol `{IMAGE_NN}` (by design), definisi muncul sekali (di snippet), framing Soltius konsultatif (2 self-mention, implements-not-builds), angka berlabel sumber dan di-hedge, serta satu tabel Markdown valid. Editor merekomendasikan approve dan validator mengonfirmasi. Siap untuk curator (commit) — namun sesuai instruksi, curator / commit TIDAK dijalankan pada run ini.

## AI Detector (heuristik v2.0)
- Score: **0,04** / 1.0 (ambang: revise ≥0,30, reject ≥0,50) → **pass**
- Paragraph burstiness (CV): **0,322** (guardrail gate ≥0,30 → lolos; ideal ≥0,45)
- Sentence burstiness: 0,726
- Top-30 vocab share: 0,331 (ambang <0,35 → lolos)
- external_api_used: false (heuristik murni)
- Flags (1):
  - [low] `paragraph-low-variance`: "Paragraph word-count CV=0.322 (target >=0.45)" — severity **low**, bukan blocker. Ambang gate 0,30 terlampaui. Wajar untuk explainer B2B padat dalam band 1000–1200 (sibling `master-data-management-c01` juga 0,355); menaikkan ke 0,45 memaksa padding/pemotongan yang melanggar on-point + band. Dibiarkan. Re-baca manual bagian ber-flag: ritme paragraf tetap bervariasi (16–77 kata; campuran pendek-sedang), tidak ada keseragaman mekanis khas AI.

## Plagiarism (web lookup passage distinctive)
8 passage kandidat diekstrak skrip; dicek via quoted WebSearch (sebagian digabung/divariasikan agar lebih bermakna daripada artefak markdown; kandidat heading FAQ diganti dua frasa prosa yang lebih bermakna). Semua **clean** — tidak ada halaman non-Soltius yang memuat frasa Bahasa Indonesia secara verbatim; hasil pencarian hanya memunculkan laman konseptual/definisi (sebagian besar EN, sebagian blog vendor HR ID), bukan teks artikel ini.

- ✅ "Contohnya suite berbasis cloud seperti SAP SuccessFactors... lebih dari 10.000 pelanggan di seluruh dunia" — clean (angka 10.000 = klaim SAP sendiri; hanya laman SAP/Gartner Peer Insights, tidak ada match frasa ID)
- ✅ "Membeli perangkat lunak tidak otomatis membuat sebuah perusahaan 'menjalankan HCM'..." — clean (tidak ada halaman memuat kalimat ini; hanya panduan HCM EN/ID generik)
- ✅ "Istilah modal manusia berakar pada teori human capital Theodore Schultz (1961) dan Gary Becker (1964)..." — clean (laman akademik konsep human capital, bukan teks artikel; tanggal rujukan terkonfirmasi)
- ✅ "Tim pengelola SDM diharapkan menjadi mitra strategis bisnis, bukan sekadar unit administrasi" — clean (gagasan HRBP umum; tidak ada match frasa)
- ✅ "Pergeseran sudut pandang inilah, bukan sekadar pergantian nama departemen, yang membuat pendekatannya berbeda" — clean (nol match; hasil tak relevan topik)
- ✅ "HCM mencakup seluruh siklus hidup kerja, dari rekrutmen, pengembangan, dan kinerja hingga retensi..." — clean (definisi siklus karyawan generik; frasa ID orisinal)
- ✅ Lead "...mengurus karyawan masih berhenti pada absensi, penggajian, dan arsip data personalia" — clean (tidak ada match verbatim)
- ✅ FAQ "HCM adalah disiplin/strategi... sedangkan HRIS adalah kategori perangkat lunak administrasi SDM" — clean (pembedaan HCM vs HRIS adalah konsep baku high-overlap; diabaikan sebagai standar, bukan plagiarisme)
- **Aggregate plagiarism score: 0,00** (nol match verbatim ≥20 kata di situs non-Soltius)

## Fact spot-check (angka tak dikarang + hedging)
- **SAP SuccessFactors "lebih dari 10.000 pelanggan di seluruh dunia"** — angka nyata; cocok materi SAP sendiri (vendor-stated). Artikel mengatribusikan eksplisit ("menurut SAP", SAP News Center, Sep 2025). ✓ Tidak dikarang.
- **Gartner MQ Cloud HCM Suites for 1,000+ Employee Enterprises, Leader ke-10 berturut-turut, 16 Sep 2025** — cocok dossier + SAP News Center. Artikel meng-hedge framing: "1.000+ karyawan" ditegaskan sebagai cakupan kategori Gartner, bukan syarat minimum pengguna. ✓
- **Teori human capital — Theodore Schultz (1961) & Gary Becker (1964)** — rujukan standar (Schultz, "Investment in Human Capital", AER 1961; Becker, *Human Capital*, Columbia Univ. Press 1964). Sebagian sumber ID menyebut Becker 1962/"1960-an" — artikel memakai 1964 (tahun buku kanonik), aman. Di-hedge sebagai "teori ekonomi, bukan definisi baku SAP". ✓
- **Soltius = SAP Platinum Partner via United VARs, Metrodata Group sejak 1998, mengimplementasikan/mendampingi** — sesuai company_profile; framing implements-not-builds. ✓
- **IFRS** — N/A: artikel topik HCM tidak memuat konten IFRS. Tidak ada yang perlu di-hedge; tidak di-flag.

## Re-verifikasi gate batch 2026-10
| Gate | Target batch | Hasil | Status |
|---|---|---|---|
| Word band body | 1000–1200 | 1.046 (frontmatter) / 1.083 (skrip) | ✅ |
| FAQ | 3–5 Q&A | 5 | ✅ |
| Internal link | 2 (1 hub + 1 cousin) | 2 (hub HCM + cousin SAP SuccessFactors) | ✅ |
| Image placeholder `{IMAGE_NN}` | 0 (by design) | 0 | ✅ |
| Definisi | sekali (snippet) | sekali; H2/body/FAQ tidak mengulang definisi snippet (elaborasi/kontras/etimologi = info baru, diizinkan addendum §2) | ✅ |
| Framing Soltius | ≤2 self-mention, konsultatif | 2 (positioning line Kesimpulan + soft CTA); "mengimplementasikan dan mendampingi" | ✅ |
| Sitasi eksternal | 1–2 | 1 (SAP News Center, atribusi + tanggal) | ✅ |
| Angka spesifik inline | 4+ | ≥6 (10.000; 16 Sep 2025; ke-10; 1.000+; 1961; 1964; 1998) | ✅ |
| Tabel HTML valid (bila ada) | — | Tidak ada tabel HTML; 1 tabel Markdown valid (5 baris × 3 kolom, pemisah konsisten) | ✅ N/A |
| Em-dash | ≤2 | 0 | ✅ |

## Catatan non-blocking (diteruskan dari editor — keputusan user)
User eksplisit minta ditanyai; empat open flag editor bersifat editorial/link-swap, **bukan isu QC**, dan tidak memengaruhi verdict. Perlu diselesaikan user sebelum publikasi bila ingin diubah:
1. Konfirmasi 2 internal link (hub `/human-capital-management-system` + cousin `/success-factors`) — dinyatakan 200 OK oleh dossier.
2. Struktur halaman lama (404-ke-bot; 22.223 impresi membuktikan live) — opsional: user membuka URL lama & membagikan judul H2 ranking agar rewrite diselaraskan.
3. Grounding akademik Schultz/Becker (H2-1 + FAQ-1) — pertahankan atau buat body sepenuhnya praktis?
4. Tujuan CTA akhir mendarat ke halaman SAP SuccessFactors (per tracker), bukan hub HCM — konfirmasi.

## Loop status
Revision loop **0** (first pass). Tidak ada revise yang dipicu (AI 0,04 < 0,30; burstiness 0,322 ≥ 0,30; plagiarisme 0,00). Tidak ada loop writer.

## Rekomendasi ke orchestrator
**curator-ready** — editor `approve` + validator `verdict: pass`. Memenuhi gate commit (approve + pass). Catatan: curator / commit TIDAK dijalankan pada run ini sesuai instruksi. Empat keputusan user yang masih terbuka (di atas) bersifat editorial, bukan blocker QC — selesaikan sebelum publikasi bila user mengubahnya.
