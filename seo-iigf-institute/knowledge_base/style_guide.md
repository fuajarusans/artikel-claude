# Style Guide — IIGF Institute Articles (Bahasa Indonesia)

Primary reference for `seo-article-writer-id` and `seo-editor`.

**Benchmark status: none yet.** No client benchmark article has been supplied. Calibrate voice to this guide + `company_profile.md`. **The first pilot article the user approves becomes the locked benchmark** — record its path here when that happens.

> **The North Star Test**: Could a senior KPBU/PPP instructor — someone who has actually taught the material and advised real projects, not just read the syllabus — have written this for an ASN preparing a project, a consultant, or a prospective certification participant? If yes, ship it. If it reads like a training brochure or an AI synthesis of three provider pages, send it back.

All articles are in **Bahasa Indonesia**.

---

## 1. Article anatomy

```
1. Meta block (YAML frontmatter — NOT published as body). See §7.

2. Lead paragraph — the pain hook (1 paragraph)
   Open on a concrete, recognizable problem a practitioner faces
   (a project stuck at penyiapan; a team that cannot read a risk matrix;
   a certification decision with no clear answer), NOT a generic
   "Di era pembangunan infrastruktur...". The primary keyword appears
   here. State what the article delivers and its angle.

3. Definition snippet — "Secara singkat / Ringkas:" (1 short paragraph or blockquote)
   40–60 words answering "X adalah ..." cleanly. AI-Overview bait.
   Place it in the first ~150 words.

4. Roadmap paragraph (optional, 1 short)

5. Body sections (4–6 H2s) — see §1a for the H2 mix.
   Each H2 opens with a 40–60-word direct answer (GEO §2a) before elaborating.

6. FAQ section (5–8 Q&As) — marked clearly, ready for FAQPage schema.

7. Closing under its own `## Kesimpulan` H2
   Clearly separated from the FAQ. Connect the topic back to IIGF Institute
   using ONE positioning line from company_profile.md. Soft consultative CTA.
   Do NOT open with "Sebagai kesimpulan".

8. Soft website CTA (AFTER the conclusion — MANDATORY, the final line)
   One short sentence inviting the reader to visit institute.iigf.co.id to
   explore the relevant programme or publication. Soft and consultative,
   never a hard "daftar sekarang". Vary per article.
```

### 1a. H2 mix (vary the types)

At minimum, across the article include:
- **1 definitional H2** — "Apa itu [X] dan mengapa penting bagi praktisi KPBU di Indonesia?"
- **1 question-format H2** — phrased as the reader would Google it.
- **1 practical/structured H2** — tahapan, level, cakupan materi, perbandingan jalur belajar, checklist kesiapan.
- **1 honest / counter-conventional H2** — the trust-builder competitors skip: "Kapan sertifikasi CP3P BELUM jadi prioritas Anda", "Apa yang TIDAK dijamin oleh sebuah sertifikasi", "Kesalahan umum dalam memahami kerangka PPP internasional".

---

## 2. Length & rhythm

- **Length**: taken from the brief's `target_word_count`, which comes from that keyword's `length` field in `keywords.md`. **Default when unspecified: 1.200–1.600 kata (aim ~1.400).** The orchestrator re-counts every draft with `tools/count_words.py` and trims anything outside the band — writers cannot count their own output, so aim for the lower half of the band.
- **Paragraph length**: VARY DELIBERATELY. Mix 1-sentence paragraphs with 4–6-sentence ones. Symmetric blocks are the strongest AI tell. **Vary or fail.**
- **Sentence length**: mix short declaratives (8–14 words) with longer compound sentences (20–30).

### Mandatory format mix per article

| Format element | Min occurrences |
|---|---|
| Prose paragraphs | 5+ |
| List (numbered and/or bulleted, with bold lead-ins) | 1+ |
| Table / mini-table (level, cakupan materi, perbandingan jalur) | 1 |
| Inline data with specific numbers **+ reference year** | 6+ |
| Question-format H2 | 1 |
| FAQ block at end | 1 (5–8 Q&As) |

> **No images.** This pipeline produces no images and no `{IMAGE_NN}` placeholders. Visual texture comes from tables, lists, and paragraph variation.

If a draft is 90% bullet points or 100% prose, it fails.

---

## 3. Bahasa Indonesia tone rules

- **Register**: Bahasa Indonesia baku, profesional, dan **mengajar** — rigorous like a think-tank, readable like a good instructor. Konsultatif: seorang pengajar senior menjelaskan ke profesional yang cerdas tapi belum menguasai kerangka PPP. **Bukan brosur pelatihan, bukan siaran pers, bukan makalah akademik yang kaku.**
- **Audience**: ASN dan pejabat yang menyiapkan proyek KPBU, konsultan transaksi, calon peserta sertifikasi, akademisi dan mahasiswa pascasarjana, serta pembaca umum yang melek kebijakan infrastruktur. They care about competence, credibility, cost, and whether the effort will actually help their work.
- **Subject voice**: mix addressing the reader ("Anda dapat...", "tim Anda") with impersonal ("praktisi sering...", "instansi daerah umumnya..."). Use "kami" sparingly — only where IIGF Institute speaks, in the closing.
- **EYD**: mandatory. Editor verifies.
- **Technical terms**: mix Indonesian + English as practitioners actually do. Italicize the English term on first use and gloss it: "*value for money* (nilai manfaat terhadap biaya)", "*risk allocation*", "*peer-review double-blind*". Then use it plainly.
- **Acronyms**: expand on first use — "CP3P (*Certified Public-Private Partnership Professional*)", "ATO (*Accredited Training Organization*)", "KPBU (*Kerja Sama Pemerintah dengan Badan Usaha*)", "JIPM", "UNIID/JPII" — then use the acronym.
- **Numbers**: Indonesian convention — comma decimal, period thousands (`Rp 19.000.000`, `33–35 universitas`). **Every figure carries its reference year; every fee is labelled indicative.**

### Phrases that work

- "Secara singkat, ..." / "Ringkasnya, ..."
- "Dalam praktik penyiapan proyek, ..." / "Di ruang kelas, pertanyaan ini paling sering muncul: ..."
- "Pola yang sering ditemui adalah ..."
- "Perlu dibedakan antara ... dan ..." (precision — a strength in this niche)
- "Bagian ini jarang dibahas, padahal menentukan ..."
- "Biaya dan jadwal bersifat indikatif per publikasi <tahun> dan dapat berubah." (honest hedging that also protects the client)

---

## 4. Honesty & evidence (the E-E-A-T engine)

- **Hedge honestly.** Fees, schedules, and network size change — say so, with the year. This honesty is a *feature*: it signals a real institution rather than an evergreen sales page.
- **Source real numbers.** Every figure traces to the dossier with a source (APMG, World Bank/PPIAF/ADB, Kemenkeu/Bappenas, official site) **and its year**. Inline attribution: "(APMG International, 2026)", "(per publikasi resmi 2026)".
- **Add a counter-conventional section.** Say when certification is not yet the right move, or what a credential does not guarantee. Competitors selling seats won't; it differentiates and builds trust.
- **Be specific, not grand.** "Level Foundation mencakup Bab 1 PPP Guide dan menjadi prasyarat level lanjutan" beats "program pelatihan yang komprehensif".
- **Attribute the framework correctly.** CP3P belongs to APMG International; IIGF Institute delivers the training as an ATO. Getting this wrong is both a factual and a legal-sensitivity failure.

---

## 5. Anti-AI patterns — REJECT IF PRESENT

| Pattern | Why it's bad | Acceptable substitute |
|---|---|---|
| "Di era pembangunan infrastruktur ini, ..." / "Seiring meningkatnya kebutuhan SDM, ..." / "Tidak dapat dipungkiri ..." | Empty AI opener | Open on a concrete problem or a specific sourced fact |
| Brochure register: "Segera daftarkan diri Anda ...", "Jangan lewatkan kesempatan ..." | Sales voice — kills think-tank credibility | Teach the decision, then invite softly at the very end |
| Press-release register: "Dalam rangka mendukung ...", "Sebagai wujud komitmen ..." | Institutional boilerplate | State what happens and why it matters to the reader |
| "Selain itu," starting 2+ paragraphs in a row | Repetitive transition | "Di sisi lain", "Dalam praktiknya", or just start with the noun |
| "Penting untuk dicatat/diingat/dipahami bahwa..." | AI cliché | State the fact directly |
| "Dengan demikian, ..." overused | Reads machine-translated | "Maka", "Akibatnya", "Karena itu" |
| "Sebagai kesimpulan, ..." as the closing opener | Lazy | Forward-looking statement or a callback to the lead's pain |
| Em-dashes ( — ) more than ~2× per article | Stylistic tell | Commas or full stops |
| Symmetric paragraph lengths (all ~4 sentences) | Strongest AI tell | Force 1–6 sentence variation |
| Every H2 followed by a 3-bullet list | Listicle-robot voice | Mix prose, bullets, tables, numbered steps |
| A fee or figure with no year / no "indikatif" | Ages badly, and misleads a buyer | "Rp 19 juta (indikatif per publikasi 2026)" |
| Generic claims without numbers | Empty | Add a concrete metric, threshold, or range |
| Listing every IIGF Institute programme in one paragraph | Programme-dump | Mention the 1 relevant anchor, in the closing |
| Hype adjectives: "terlengkap", "revolusioner", "terdepan", "seamless" stacked | Brochure voice | Describe the concrete capability |
| Naming any individual | Hard blacklist — dates the article | Institutional framing |
| Wording that implies IIGF Institute awards CP3P | Factual + legal-sensitivity failure | "penyelenggara pelatihan terakreditasi (ATO) APMG" |

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
language: "id"
primary_keyword: "<keyword>"
secondary_keywords: ["k1", "k2", "..."]
internal_links:
  - url: "<own hub landing page on institute.iigf.co.id>"
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
<Jawaban 40–80 kata. Langsung. Sertakan satu angka/fakta dari artikel, dengan tahun rujukannya; biaya selalu ditandai indikatif.>
```

5–8 questions. Pull from the brief's People-Also-Ask. Phrase as real Indonesian searchers do: "Apa itu ...", "Berapa biaya ...", "Berapa lama ...", "Apa bedanya ... dan ...", "Apakah ... diakui internasional?", "Bagaimana cara mendaftar ...", "Apa syarat ...".

---

## 9. Internal & external linking

- **Internal links (mandatory)**: 3 per article.
  - 1× to the article's own hub landing page on **institute.iigf.co.id** — a natural inline anchor woven into the prose, preferably in the lead. Descriptive anchor text. **No "BACA JUGA" callouts.**
  - 2× to cousin hub pages from the month's keyword set (see `product_matrix.md`), placed where the topic naturally connects. `jipm.iigf.co.id` and `uniid.or.id` count as the Institute's own properties and may be used where genuinely relevant.
  - As history grows, optionally add 1 DOWN-link to a sibling article in the same cluster.
  - **Never link to `ptpii.co.id`** — that is a separate client folder (isolation rule).
- **External authoritative links**: 1–2 per article. Priority: APMG / ppp-certification.com (for anything CP3P) > World Bank/PPP Knowledge Lab, PPIAF, ADB > Kemenkeu/Bappenas/Kantor Bersama KPBU > indeks jurnal akademik > BPS > peer-reviewed. No outbound links to competing training providers.

---

## 10. Citation discipline

- Every claimed number is either (a) from `knowledge_base/` or a researcher-verified citation **with its reference year**, or (b) clearly framed as a range and labeled as such.
- Never fabricate fees, schedules, syllabus scope, membership counts, or indexing status. If the dossier didn't supply it, the writer doesn't invent it — flag it instead.
- Any statement about what a CP3P level covers must trace to APMG.

---

## 11. IIGF Institute mention discipline (works with `product_matrix.md`)

- Teach the topic vendor-neutrally in the body. IIGF Institute earns the close by being genuinely useful first — **educate first, invite second**.
- **Max 2–3 IIGF Institute self-mentions**, usually: one optional mid-article aside + the closing.
- ✅ One concise positioning line drawn from `company_profile.md`.
- ❌ A paragraph listing every programme (programme-dump).
- IIGF Institute **menyelenggarakan pelatihan / meneliti / menerbitkan / memfasilitasi jejaring** — never "mengeluarkan sertifikasi CP3P", "mengakreditasi", or "memberikan gelar".
- **Soft website CTA (MANDATORY, after the conclusion):** end every article with one short line inviting the reader to visit **institute.iigf.co.id** to explore the relevant programme or publication — soft and consultative, never "daftar sekarang". It counts within the ≤3 mention budget. Vary the wording, e.g. "Ikhtisar program pelatihan dan publikasi KPBU dapat Anda telusuri di institute.iigf.co.id." or "Untuk menelusuri kajian dan materi pembelajaran terkait topik ini, kunjungi institute.iigf.co.id."

---

## 12. The benchmark in one sentence

> Read the draft aloud. If it sounds like a senior instructor leveling with a smart professional — concrete numbers with their years, honest caveats about cost and fit, a comparison table, the occasional "ini sering disalahpahami" aside, and varied rhythm — it's ready. If it sounds like a training brochure, a press release, or an AI synthesis, send it back.
