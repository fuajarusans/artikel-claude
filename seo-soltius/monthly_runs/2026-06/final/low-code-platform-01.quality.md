---
brief_id: "low-code-platform-01"
validator_run_date: "2026-06-03"
verdict: "pass"
ai_score: 0.04
plagiarism_score: 0.00
revision_loop: 0
---

# Quality Validator Report — Low-Code Platform: Apa Itu dan Bagaimana Cara Kerjanya untuk Bisnis Enterprise?

## Verdict: **pass**

The article clears both quality gates cleanly. The heuristic AI detector returned a score of 0.04 (threshold: revise ≥ 0.30), driven by strong paragraph and sentence burstiness well above target; only one low-severity flag was raised (vocab-repetition at 37.6%, slightly above the 30% target but within acceptable range for a technically rich topic with recurring domain terms like "low-code," "SAP Build," and "platform"). Plagiarism web lookup across all 8 candidate passages returned zero exact or near-exact matches on any non-Soltius public URL. The editor's `recommendation: approve` is confirmed. This article is curator-ready.

---

## AI Detector (heuristic v2.0)

- **Score**: 0.04 / 1.0 (thresholds: revise ≥ 0.30, reject ≥ 0.50) — **PASS**
- **Paragraph burstiness (CV)**: 0.611 (target ≥ 0.45) — **PASS**
- **Sentence burstiness**: 0.663 — **PASS**
- **Top-30 vocab share**: 0.376 (target < 0.30) — **low-severity flag only**
- **Flags (1)**:
  - [low] vocab-repetition: Top 30 words = 37.6% of body (target < 30%). This is a domain-specific effect: the article legitimately recurs on "low-code," "SAP Build," "platform," "enterprise," "aplikasi" — expected in a definitional explainer for a B2B tech keyword. No AI-pattern flag fired (no "Di era digital," "Selain itu," "Penting untuk dicatat," em-dash overuse, or homogeneous paragraph length). Score remains at 0.04; the single flag does not change the verdict.

**Manual read notes (borderline check per guardrail)**: AI score 0.04 is far below the 0.28–0.32 borderline requiring re-read. Burstiness metrics are strong. The opening (CIO-CFO dialogue device), the honest "Kapan Low-Code Bukan Solusinya" section, and the varied H2 structure (prose → numbered list → table → bold-lead paragraphs → FAQ) all read as genuinely human, expert, consultant-voice content. No manual concerns.

---

## Plagiarism (web lookup of distinctive passages)

8 candidate passages checked via WebSearch (quoted queries). Zero exact matches and zero near-matches (>70% word-order overlap) found on any non-Soltius public URL.

- **Passage 1**: "Platform enterprise-grade seperti SAP Build berjalan di atas SAP BTP dengan sertifikasi keamanan enterprise (enkripsi data, kontrol akses berbasis peran, ISO 27001, SOC 2)." — Search returned general SAP security docs and Microsoft Learn pages; no verbatim Indonesian match. **Clean.**
- **Passage 2**: "Sebagai SAP Platinum Partner melalui United VARs, Soltius membantu perusahaan Indonesia memanfaatkan SAP Build di atas SAP BTP..." — Hits on soltius.co.id and united-vars.com only (self-reference and cited partner page — excluded per protocol). **Clean.**
- **Passage 3**: "Karena SAP Build berjalan di BTP, aplikasi mengakses data S/4HANA melalui API resmi tanpa memodifikasi inti ERP, selaras dengan prinsip side-by-side extensibility." — Search returned SAP and Augsta technical docs in English; no verbatim Indonesian match. **Clean.**
- **Passage 4**: "Low-Code Platform: Apa Itu dan Bagaimana Cara Kerjanya untuk Bisnis Enterprise?" (H1) — Competitor pages address similar topics in Indonesian but none carry this exact title. **Clean.**
- **Passage 5**: "Bagaimana Low-Code Platform Bekerja: Komponen dan Mekanismenya ... empat lapisan yang saling terhubung" — No search result replicates the "empat lapisan" framing; only English-language or different-structure Indonesian articles returned. **Clean.**
- **Passage 6**: "SAP Build menggunakan BTP Integration Suite dan pre-built connector untuk menghubungkan aplikasi ke data S/4HANA (modul Finance, HR, atau Supply Chain) tanpa memodifikasi inti ERP." — Technical concept widely documented in English; no verbatim Indonesian match. **Clean.**
- **Passage 7**: "Gartner memproyeksikan 75% aplikasi enterprise baru akan dibangun menggunakan low-code pada 2026, naik dari kurang dari 25% di 2020; 80% penggunanya adalah citizen developer non-IT." — Gartner statistics widely cited on Kissflow and byteiota in English; the specific Indonesian phrasing does not appear on any public page. The figures are common knowledge and already honestly attributed ("Gartner memproyeksikan...") — standard citation, not plagiarism. **Clean.**
- **Passage 8**: "Integrasi AI Joule menambah produktivitas sekitar 30% untuk tugas seperti pemodelan data." — No page replicates this specific Indonesian sentence; general AI productivity stats found but no verbatim match. **Clean.**

**Aggregate plagiarism score: 0.00**

No passage scored a hit; no passage has a 20-word verbatim match on a non-Soltius site.

---

## Loop status

This is **revision loop 0** (first and only pass). Verdict is `pass` — no revision loop triggered.

---

## Curator gate

- Editor recommendation: `approve` ✅
- Validator verdict: `pass` ✅
- **Both gates cleared. Article is ready for `article-history-curator` to commit.**
