---
brief_id: "agentic-ai-c01"
editor_run_date: "2026-09-01"
recommendation: "approve"
overall_score: 9
batch: "conditional-2026-09 (style_addendum.md overrides applied — 800–1000 kata cleaned-prose, tanpa image placeholder, FAQ 2–3, internal link = 2, definisi hanya sekali di snippet, maks 2 mention Soltius)"
word_count: 909
---

# Editor QC Report — Apa Itu Agentic AI dan Potensinya untuk Otomasi Bisnis

## Recommendation
**approve**

Artikel ini memenuhi seluruh batch override 2026-09 dan semua cek yang tetap berlaku penuh. Body 909 kata (konvensi cleaned-prose via `tools/count_words.py`) di dalam pita 800–1000; definisi muncul tepat sekali (snippet "Ringkasnya:") dan tidak diulang di body; FAQ 3 Q&A; internal link tepat 2 (1 hub + 1 cousin); nol image placeholder; maks 2 mention Soltius; primary keyword "agentic AI" hadir di penutup dan CTA; soft CTA soltius.co.id adalah baris paling akhir. Seluruh angka terverifikasi terhadap dossier (dan satu angka strategist di-recheck live editor terhadap rilis Gartner 2025-08-26). Keempat caveat dossier dihormati (Deloitte ~11% dibuang; 14 Joule Agents bukan 15; Joule di-frame non-eksklusif lintas portofolio cloud SAP; tanpa Joule Studio; tanpa angka partner-blog). Hanya 2 perbaikan minor diperlukan, keduanya sudah diterapkan in-place. Tidak ada isu yang menuntut writer/strategist re-spin.

## Quality scores
| Dimension | Score (1–10) | Notes |
|---|---|---|
| Voice / human-ness (anti-AI) | 9 | Tanpa opener klise; em-dash 0; ritme paragraf 1–4 kalimat bervariasi; suara praktisi ("di lapangan, proyek yang mandek...") tanpa nama Soltius. |
| Factual & SAP-spec accuracy | 9 | Semua angka bersumber Gartner/SAP dengan atribusi + tahun; 14 Joule Agents (bukan 15); Joule non-eksklusif; tanpa angka partner-blog. |
| On-page SEO compliance | 9 | Semua field meta dalam batas setelah meta-description dipangkas 164→156; H2 3 (batch 3–4); LSI ≥8. |
| GEO extractability (§2a) | 9 | Jawaban langsung 40–60 kata setelah tiap H2; satu poin quotable/paragraf; tabel & list extractable; FAQ FAQPage-ready. |
| Soltius framing discipline | 10 | Implementator/pendamping SAP Business AI (bukan pembuat); 2 mention; kredensial akurat (SAP Platinum via United VARs, sejak 1998); tanpa superlatif. |
| Internal linking | 10 | Tepat 2 inline natural (hub "roadmap adopsi SAP Joule" + cousin "migrasi ERP ke cloud"); tanpa "BACA JUGA". |
| FAQ quality | 9 | 3 Q&A dari PAA; jawaban 40–48 kata; tiap jawaban memuat fakta/angka. |

## What I fixed (changelog)
- **Meta description dipangkas 164 → 156 karакter** (membuang kata "potensi") agar masuk pita 140–160; tetap mempertahankan primary keyword di depan + entitas "AI generatif", "otomasi lintas fungsi", "SAP Joule". (Brief mengklaim 159, hitungan aktual 164 — over-band; kini 156.)
- **Kapitalisasi "ai agent untuk bisnis" → "AI agent untuk bisnis"** di H2 #2, selaras dengan penulisan "AI" berkapital di seluruh artikel (EYD/konsistensi; keyword tetap cocok — case-insensitive untuk SEO).

## What I flagged (open issues)
- ⚠️ **Freshness / `dateModified`** — frontmatter memuat `publish_month: 2026-09` tetapi tidak ada field `dateModified` eksplisit. Topik agentic AI (nama fitur SAP Joule, angka adopsi Gartner) cepat usang. *Rekomendasi*: CMS mengeset `dateModified` saat publish dan jadwalkan refresh berkala. Tidak menghambat approve (kewenangan CMS, bukan konten).
- ℹ️ **Angka "sepertiga implementasi agentic memakai multi-agent pada 2027"** berasal dari brief/strategist, TIDAK tercantum di daftar 8 fakta verified dossier. Editor me-recheck live 2026-08-31/09-01: **terkonfirmasi** berasal dari rilis Gartner yang sama (2025-08-26) — akurat dan atribusinya benar. Dicatat agar validator tidak menandai ulang sebagai angka tak bersumber.

## Detailed check results

### A. Anti-AI scan (style_guide.md §5)
- [x] No "Di era digital / Seiring perkembangan / Tidak dapat dipungkiri" openers — lead dibuka pada pain konkret ("dibanjiri klaim 'AI otonom'... batas... sering kabur")
- [x] No "Selain itu" opening ≥2 consecutive paragraphs — 0 kemunculan
- [x] No "Penting untuk dicatat / dipahami bahwa" — 0
- [x] "Dengan demikian" not overused — 0
- [x] Em-dash count ≤2 — **0**
- [x] Varied paragraph lengths (1–4 kalimat; tidak simetris)
- [x] Not every H2 → 3-bullet list — H2#1 tabel, H2#2 prosa+list, H2#3 prosa+list
- [x] No generic claims without numbers — angka bersumber di tiap klaim tren
- [x] No stacked hype adjectives (canggih/powerful/seamless/terdepan) — 0
- [x] No service-dump paragraph

### B. Factual & SAP-spec spot-check
| Claim | Source check | Verdict |
|---|---|---|
| Gartner: 40% aplikasi enterprise ber-agen pada akhir 2026, dari <5% 2025 | dossier ✓ + Gartner PR 2025-08-26 (WebSearch) | pass |
| Gartner: ~sepertiga implementasi agentic pakai multi-agent pada 2027 | brief (strategist) → editor re-verify live: Gartner PR 2025-08-26 ✓ | pass (dicatat di flags) |
| 14 Joule Agents baru di SAP Connect (Okt 2025), bukan 15 | dossier ✓ (SAP News 2025-10) | pass |
| Gartner: >40% proyek agentic dibatalkan hingga akhir 2027 | dossier ✓ (Gartner PR 2025-06-25) | pass |
| Gartner: 15% keputusan kerja harian otonom pada 2028 (dari 0% 2024) | dossier ✓ | pass |
| Joule tertanam "lintas portofolio cloud SAP, termasuk SAP S/4HANA Cloud" (non-eksklusif) | dossier flag ✓ dihormati | pass |

### C. On-page SEO checklist (batch override values)
- [x] Meta title ≤60 (keyword first 30) — **54 chars**; "Agentic AI" di posisi ~8–18
- [x] Meta description 140–160 — **156** (setelah fix dari 164)
- [x] Slug ≤60, kebab-case, keyword — `apa-itu-agentic-ai-dan-potensinya-untuk-otomasi-bisnis` (**54**)
- [x] H1 contains keyword — "Apa Itu **Agentic AI**..."
- [x] H2 count **3 body** (batch override 3–4) + FAQ + Kesimpulan
- [x] ≥1 question-format H2 — H2#1 & H2#2
- [x] ≥1 praktis/terstruktur — H2#1 (tabel) + H2#3 (list lead-in bold)
- [x] Keyword in first 100 words — "konsep agentic AI" di lead
- [x] Definition snippet 40–60 kata — **51** ("Ringkasnya:")
- [x] ≥8 LSI terms — agentic AI, AI generatif, tool use, multi-agent, human-in-the-loop, large language model, otomasi proses bisnis, SAP Business AI, Joule Agents, Joule Assistants, SAP S/4HANA Cloud, guardrail (>8)
- [x] Internal links = **2** (batch): hub `sap-ai-joule-adoption-roadmap...` + cousin `migrasi-erp-ke-cloud`
- [x] External authoritative citations — **2** (Gartner 2025-08-26 + SAP News 2025-10)
- [x] FAQ **2–3** (batch) — **3** Q&A
- [x] ≥1 tabel + ≥1 list — tabel perbandingan (H2#1) + 2 bullet list
- [x] Word count 800–1000 (batch, cleaned-prose) — **909**
- [x] Image placeholders — **0** (validasi image = N/A per batch; tidak ada {IMAGE_NN})
- [x] ≥4 angka spesifik inline — 40%, <5%, sepertiga/2027, 14, >40%, 15%, 0% (≥4 di body)

### C2. GEO extractability (seo_playbook.md §2a)
- [x] Jawaban langsung 40–60 kata setelah tiap H2 — H2#1 ~48, H2#2 ~48, H2#3 ~55 kata (bukan parafrase snippet)
- [x] Tiap paragraf body = satu poin quotable & verifiable
- [x] FAQ parseable untuk FAQPage schema; freshness — publish_month ada (lihat flag `dateModified`)

### D. Soltius framing discipline
- [x] Soltius = implementator/pendamping, BUKAN "membangun SAP"
- [x] ≤2 mention (batch) — 1 positioning line (Kesimpulan) + 1 soft website CTA = **2**
- [x] Tanpa superlatif ("terbaik/nomor satu")
- [x] Nama produk SAP cocok dossier/product_matrix (SAP Business AI, Joule, Joule Agents/Assistants, SAP S/4HANA Cloud)
- [x] Penutup memakai positioning line (SAP Platinum Partner via United VARs, sejak 1998)
- [x] Soft website CTA = baris terakhir, terpisah dari Kesimpulan, konsultatif (bukan "beli sekarang")
- [x] Hub link inline natural (anchor deskriptif "roadmap adopsi SAP Joule"), bukan "BACA JUGA"

### E. Anti-cannibalization spot check
- Closest prior: `ai-untuk-finance-c01` (2026-06), `ai-supply-chain-c01` (2026-07)
- Subtopic overlap (Jaccard): ≈0.19 (finance) / ≈0.15 (SCM) — keduanya < 0.4
- Verdict: **distinct angle confirmed** (artikel ini = KONSEP + potensi lintas fungsi; boundary domain dihormati — contoh keuangan/SCM masing-masing 1 frasa, tanpa SAP IBP, tanpa use case AP/cash/close)

### F. Batch-2026-09 definition-repetition check
- Definisi muncul **sekali** (snippet "Ringkasnya:", 51 kata).
- H2 #1 = format PERBANDINGAN yang menambah info BARU (label reaktif/proaktif + spektrum: sistem agentic memakai model generatif sebagai lapisan penalaran) — bukan pernyataan ulang snippet. **PASS.**
- Tanpa H2 definitional "Apa itu agentic AI" yang mengulang snippet. **PASS.**

## The shipping question
Jika tayang di soltius.co.id besok dan dibaca konsultan SAP senior serta CIO skeptis: konsep jernih, tabel perbandingan quotable, angka bersumber + atribusi, honest hedging (>40% proyek dibatalkan/2027), dan framing Soltius yang jujur (implementator, bukan pembuat) — WEBARQ Promote pantas membanggakannya. **Approve.**
