# Style Guide — PT PII Articles

Primary reference for `seo-article-writer-id`, `seo-article-writer-en`, and `seo-editor`.

**Benchmark status: none yet.** No client benchmark article has been supplied. Calibrate voice to this guide + `company_profile.md`. **The first pilot article the user approves becomes the locked benchmark** — record its path here when that happens.

> **The North Star Test**: Could a senior KPBU practitioner — someone who has actually taken a project through penyiapan, lelang, and *financial close*, not just read about it — have written this for a PJPK official, an investor, or a lender to read? If yes, ship it. If it reads like an AI synthesis of three consultancy blogs, or like a government press release, send it back.

**Language**: set per keyword in `monthly_runs/<YYYY-MM>/keywords.md` (`language: id` default, `language: en` when the brief says so). Bahasa Indonesia is the default; §3 below governs ID, §3a governs EN.

---

## 1. Article anatomy

```
1. Meta block (YAML frontmatter — NOT published as body). See §7.

2. Lead paragraph — the pain hook (1 paragraph)
   Open on a concrete, recognizable problem in infrastructure financing
   (a stalled tender, a lender that won't commit, an APBD that won't stretch),
   NOT a generic "Di era pembangunan infrastruktur...". The primary keyword
   appears here. State what the article delivers and its angle.

3. Definition snippet — "Secara singkat / Ringkas:" (1 short paragraph or blockquote)
   40–60 words answering "X adalah ..." cleanly. AI-Overview bait.
   Place it in the first ~150 words.

4. Roadmap paragraph (optional, 1 short)

5. Body sections (4–6 H2s) — see §1a for the H2 mix.
   Each H2 opens with a 40–60-word direct answer (GEO §2a) before elaborating.

6. FAQ section (5–8 Q&As) — marked clearly, ready for FAQPage schema.

7. Closing under its own `## Kesimpulan` H2
   Clearly separated from the FAQ, not dangling under it. Connect the topic
   back to PT PII using ONE positioning line from company_profile.md.
   Soft consultative CTA. Do NOT open with "Sebagai kesimpulan".

8. Soft website CTA (AFTER the conclusion — MANDATORY, the final line)
   One short sentence inviting the reader to visit ptpii.co.id to explore
   the relevant product or start a discussion. Soft and consultative,
   never "beli sekarang" or "hubungi kami sekarang juga". Vary per article.
```

### 1a. H2 mix (vary the types)

At minimum, across the article include:
- **1 definitional H2** — "Apa itu [X] dan mengapa penting bagi proyek infrastruktur Indonesia?"
- **1 question-format H2** — phrased as the reader would Google it.
- **1 practical/structured H2** — tahapan, alokasi risiko, perbandingan skema, checklist kesiapan.
- **1 honest / counter-conventional H2** — the trust-builder competitors skip: "Kapan skema KPBU BELUM tepat untuk sebuah proyek", "Apa yang TIDAK ditanggung penjaminan pemerintah", "Kesalahan yang sering terjadi di tahap penyiapan".

---

## 2. Length & rhythm

- **Length**: taken from the brief's `target_word_count`, which comes from that keyword's `length` field in `keywords.md`. **Default when unspecified: 1.500–1.800 kata (aim ~1.650).** The orchestrator re-counts every draft with `tools/count_words.py` and trims anything outside the band — writers cannot count their own output, so aim for the lower half of the band.
- **Paragraph length**: VARY DELIBERATELY. Mix 1-sentence paragraphs with 4–6-sentence ones. Symmetric blocks are the strongest AI tell. **Vary or fail.**
- **Sentence length**: mix short declaratives (8–14 words) with longer compound sentences (20–30).

### Mandatory format mix per article

| Format element | Min occurrences |
|---|---|
| Prose paragraphs | 5+ |
| List (numbered and/or bulleted, with bold lead-ins) | 1+ |
| Table / mini-table (tahapan, alokasi risiko, perbandingan skema) | 1 |
| Inline data with specific numbers **+ reference year** | 6+ |
| Question-format H2 | 1 |
| FAQ block at end | 1 (5–8 Q&As) |

> **No images.** This pipeline produces no images and no `{IMAGE_NN}` placeholders. Visual texture comes from tables, lists, and paragraph variation.

If a draft is 90% bullet points or 100% prose, it fails.

---

## 3. Bahasa Indonesia tone rules

- **Register**: Bahasa Indonesia baku, profesional, kredibel — tetapi hidup. Konsultatif: seorang praktisi senior menjelaskan ke pejabat atau investor yang cerdas tapi bukan spesialis penjaminan. **Bukan siaran pers, bukan dokumen regulasi, bukan brosur.** This is the single biggest risk for an institutional client: sounding like an official announcement.
- **Audience**: pejabat PJPK dan tim penyiapan proyek, investor & sponsor proyek, *lender* dan analis kredit, konsultan transaksi, akademisi, jurnalis ekonomi, dan pembaca umum yang melek kebijakan. They care about risk, certainty, timelines, and not being blamed for a failed project.
- **Subject voice**: mix addressing the reader ("Anda dapat...", "proyek Anda") with impersonal ("PJPK dapat...", "tim penyiapan sering..."). Use "kami" sparingly — only where PT PII speaks, in the closing.
- **EYD**: mandatory. Editor verifies.
- **Technical terms**: mix Indonesian + English as practitioners actually do. Italicize the English term on first use and gloss it: "*bankability* (kelayakan proyek untuk dibiayai)", "*financial close*", "*ring-fence*". Then use it plainly.
- **Acronyms**: expand on first use — "KPBU (*Kerja Sama Pemerintah dengan Badan Usaha*)", "PJPK (*Penanggung Jawab Proyek Kerja Sama*)", "BUPI", "SMV" — then use the acronym.
- **Numbers**: Indonesian convention — comma decimal, period thousands (`Rp 732 triliun`, `18,5%`, `1.500 kata`). **Every figure carries its reference year.**

### Phrases that work

- "Secara singkat, ..." / "Ringkasnya, ..."
- "Dalam praktik penyiapan proyek, ..."
- "Pola yang sering ditemui adalah ..."
- "Bagian ini jarang dibahas, padahal menentukan ..."
- "Perlu dibedakan antara ... dan ..." (precision — a strength in this niche)
- "Angka ini bersifat kumulatif dan bertumbuh; per publikasi resmi <tahun>, ..." (honest, verifiable hedging)

---

## 3a. English tone rules (only when `language: en`)

- Register: professional international-institutional English, closer to a development-bank note than to marketing copy. Plain, precise, no hype.
- Audience skews international: foreign investors, multilateral counterparts, analysts. Expand Indonesian terms on first use — "KPBU (*Kerja Sama Pemerintah dengan Badan Usaha*, Indonesia's public-private partnership scheme)".
- Use "PT PII" after first full mention, and introduce "Indonesia Infrastructure Guarantee Fund (IIGF)" once so international readers can match the entity — always with infrastructure/PPP context to avoid the acronym clash.
- Numbers in international convention (`IDR 732 trillion`, `18.5%`), still with the reference year.
- The same anti-AI rules (§5), structure (§1), and mention discipline (§11) apply unchanged.

---

## 4. Honesty & evidence (the E-E-A-T engine)

- **Hedge honestly.** When a number is cumulative, a range, or a practitioner rule-of-thumb, say so. In this niche honesty is the differentiator: "Angka ini bersifat indikatif dan berubah tiap publikasi."
- **Source real numbers.** Every figure traces to the dossier with a source (Kemenkeu/DJPPR, regulasi primer, Bappenas, World Bank/ADB, BPS, laporan tahunan) **and its year**. Inline attribution: "(Kementerian Keuangan, 2025)", "(Laporan Tahunan 2024)".
- **Add a counter-conventional section.** Say when KPBU is not the right route, or what a guarantee does not cover. Competitors won't; it differentiates and builds trust.
- **Be specific, not grand.** "Penjaminan menutup risiko perubahan hukum yang diskriminatif terhadap proyek" beats "solusi penjaminan yang komprehensif".
- **Precision on law.** Cite a regulation by number and year, and only after the researcher confirms it is still in force.

---

## 5. Anti-AI patterns — REJECT IF PRESENT

| Pattern | Why it's bad | Acceptable substitute |
|---|---|---|
| "Di era pembangunan infrastruktur ini, ..." / "Seiring pesatnya pembangunan, ..." / "Tidak dapat dipungkiri ..." | Empty AI opener | Open on a concrete pain or a specific sourced fact |
| Press-release register: "Dalam rangka mendukung ...", "Sebagai wujud komitmen ..." | Institutional boilerplate — the #1 risk for this client | State what happens and why it matters to the reader |
| "Selain itu," starting 2+ paragraphs in a row | Repetitive transition | "Di sisi lain", "Dalam praktiknya", or just start with the noun |
| "Penting untuk dicatat/diingat/dipahami bahwa..." | AI cliché | State the fact directly |
| "Dengan demikian, ..." overused | Reads machine-translated | "Maka", "Akibatnya", "Karena itu" |
| "Sebagai kesimpulan, ..." as the closing opener | Lazy | Forward-looking statement or a callback to the lead's pain |
| Em-dashes ( — ) more than ~2× per article | Stylistic tell | Commas or full stops |
| Symmetric paragraph lengths (all ~4 sentences) | Strongest AI tell | Force 1–6 sentence variation |
| Every H2 followed by a 3-bullet list | Listicle-robot voice | Mix prose, bullets, tables, numbered steps |
| A figure with no year ("PT PII telah menjamin 61 proyek") | Undatable, ages badly, unciteable | "…61 proyek per publikasi resmi 2026" |
| Generic claims without numbers | Empty | Add a concrete metric, threshold, or range |
| Listing every PT PII product in one paragraph | Service-dump | Mention the 1 relevant anchor, in the closing |
| Hype adjectives: "canggih", "revolusioner", "terdepan", "seamless" stacked | Brochure voice | Describe the concrete capability |
| Naming a Direktur/Komisaris | Hard blacklist — dates the article | Institutional framing |

---

## 6. Visual rhythm — the "scrollability" check

At 30% zoom the page should show texture: varying paragraph heights, a numbered list, a comparison table, an FAQ block. A wall of uniform paragraphs fails the eye test before SEO.

---

## 7. Meta block format (every article)

```yaml
---
title: "<H1 / page title>"
meta_title: "<≤60 chars, primary keyword in first 30 chars>"
meta_description: "<140–160 chars; keyword + 2–3 specific value props>"
slug: "<kebab-case, keyword-led, ≤60 chars>"
language: "id"            # or "en" when the brief says so
primary_keyword: "<keyword>"
secondary_keywords: ["k1", "k2", "..."]
internal_links:
  - url: "<own hub landing page on ptpii.co.id>"
    anchor: "<keyword or natural variant>"
  - url: "<cousin hub 1>"
    anchor: "<cousin keyword>"
  - url: "<cousin hub 2>"
    anchor: "<cousin keyword>"
external_citations:
  - url: "<source URL>"
    context: "<what claim it backs>"
brief_id: "<brief-id>"
target_word_count: <from the brief>
publish_month: "<YYYY-MM>"
word_count: <fill after writing>
---
```

The editor verifies this block.

---

## 8. FAQ block format (always at the end)

```markdown
## FAQ (Pertanyaan yang Sering Diajukan)

### <Pertanyaan persis seperti yang diketik orang di Google>
<Jawaban 40–80 kata. Langsung. Sertakan satu angka/fakta dari artikel, dengan tahun rujukannya.>
```

5–8 questions. Pull from the brief's People-Also-Ask. Phrase as real Indonesian searchers do: "Apa itu ...", "Siapa yang ...", "Berapa lama ...", "Apa bedanya ... dan ...", "Apakah ... dijamin?", "Bagaimana cara ...".

---

## 9. Internal & external linking

- **Internal links (mandatory)**: 3 per article.
  - 1× to the article's own hub landing page on **ptpii.co.id** — a natural inline anchor woven into the prose, preferably in the lead. Descriptive anchor text. **No "BACA JUGA" callouts.**
  - 2× to cousin hub pages from the month's keyword set (see `product_matrix.md`), placed where the topic naturally connects.
  - As history grows, optionally add 1 DOWN-link to a sibling article in the same cluster.
  - **Never link to `institute.iigf.co.id`** — that is a separate client folder (isolation rule).
- **External authoritative links**: 1–2 per article. Priority: Kemenkeu/DJPPR & regulasi primer (JDIH) > Bappenas/Kantor Bersama KPBU > World Bank/PPP Knowledge Lab, PPIAF, ADB, MIGA > Fitch/BI/OJK/BPS > peer-reviewed. No outbound links to direct competitors.

---

## 10. Citation discipline

- Every claimed number is either (a) from `knowledge_base/` or a researcher-verified citation **with its reference year**, or (b) clearly framed as a range/rule-of-thumb and labeled as such.
- Never fabricate statistics, project values, or legal references. If the dossier didn't supply it, the writer doesn't invent it — flag it instead.
- Quote regulation text sparingly and always attribute it; long verbatim regulatory passages read as padding and trip the plagiarism scan.

---

## 11. PT PII mention discipline (works with `product_matrix.md`)

- Teach the topic vendor-neutrally in the body. PT PII earns the close by being helpful first.
- **Max 2–3 PT PII self-mentions**, usually: one optional mid-article aside + the closing.
- ✅ One concise positioning line drawn from `company_profile.md`.
- ❌ A paragraph listing every product (service-dump).
- PT PII **menjamin / menerbitkan penjaminan pemerintah / mendampingi penyiapan proyek** — never "membiayai", "membangun", "mengoperasikan", or "mengatur".
- **Soft website CTA (MANDATORY, after the conclusion):** end every article with one short line inviting the reader to visit **ptpii.co.id** to explore the relevant product or open a discussion — soft and consultative. It counts within the ≤3 mention budget. Vary the wording, e.g. "Uraian lengkap mengenai skema penjaminan untuk proyek KPBU dapat Anda telusuri di ptpii.co.id." or "Untuk memahami bagaimana penjaminan pemerintah bekerja pada tahap penyiapan proyek, kunjungi ptpii.co.id."

---

## 12. The benchmark in one sentence

> Read the draft aloud. If it sounds like a senior KPBU practitioner leveling with a smart decision-maker — concrete numbers with their years, honest caveats, a comparison table, the occasional "ini sering disalahpahami" aside, and varied rhythm — it's ready. If it sounds like a government press release, a regulation summary, or an AI synthesis, send it back.
