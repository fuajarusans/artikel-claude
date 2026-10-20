# Style Guide — <CLIENT_NAME> Articles (<LANGUAGE>)

Primary reference for `seo-article-writer-id` and `seo-editor`.
Benchmark: <1–2 client benchmark articles; first approved pilot becomes the benchmark>

> **The North Star Test**: Could a senior practitioner or industry analyst in <NICHE> — someone who has actually done the work, not just read about it — have written this for a decision-maker to read? If yes, ship it. If it reads like an AI synthesis of three vendor blogs, send it back.

All articles are in **<LANGUAGE>**.

---

## 1. Article anatomy (the structure the benchmarks follow)

```
1. Meta block (YAML frontmatter — NOT published as body). See §7.

2. Lead paragraph — the pain hook (1 paragraph)
   Open on a concrete business pain the reader feels (a specific,
   recognizable problem in <NICHE>), NOT a generic "Di era digital...".
   The primary keyword appears here. State what the article delivers
   and its angle.

3. Definition snippet — "Secara singkat / Ringkas:" (1 short paragraph or blockquote)
   40–60 words answering "X adalah ..." cleanly. This is AI-Overview bait.
   Place it in the first ~150 words.

4. Roadmap paragraph (optional, 1 short)
   "Melalui panduan ini, kami akan membahas..." — sets expectations.

5. Body sections (4–7 H2s) — see §1a for the H2 mix.

6. FAQ section (5–8 Q&As) — marked clearly, ready for FAQPage schema.

7. Closing / conclusion paragraph — under its own `## Kesimpulan` H2
   Give the conclusion a dedicated `## Kesimpulan` heading so it is clearly
   separated from the FAQ (not dangling under it).
   Connect the topic back to <CLIENT_NAME> using ONE positioning line from
   company_profile.md. Soft consultative CTA (assessment/consultation),
   never "beli sekarang". Do NOT open with "Sebagai kesimpulan".

8. Soft website CTA (AFTER the conclusion — MANDATORY in every article)
   The final line. One short sentence (1–2) inviting the reader to visit
   the <CLIENT_NAME> website (<CLIENT_DOMAIN>) to explore the relevant solution
   or start a consultation. Soft/consultative, never "beli sekarang".
   Distinct from the conclusion; placed as the very last line. Vary the
   wording per article (see §11).
```

### 1a. H2 mix (vary the types — don''t make all H2s the same shape)

At minimum, across the article include:
- **1 definitional H2** — "Apa itu [X] dan mengapa penting bagi perusahaan Indonesia?"
- **1 question-format H2** — phrased as the reader would Google it (the literal question a buyer types).
- **1 practical/structured H2** — steps, phases, modules, a comparison ("Tahapan ...", "Perbandingan ... vs ...").
- **1 honest / counter-conventional H2** — the trust-builder competitors skip ("Kapan Anda BELUM perlu ...", "Tantangan ... yang jarang dibahas", "Mitos seputar ..."). A "Tanda Anda BELUM perlu pindah / membeli" section is the model.

---

## 2. Length & rhythm

- **Length**: <LENGTH_BAND>. Focused supporting articles for busy decision-makers — enough depth to be genuinely useful, tight enough to respect their time. B2B readers reward density and punish padding (so does Google HCU). Too short risks "thin"; padding to inflate the count hurts.
- **Paragraph length**: VARY DELIBERATELY. Mix 1-sentence paragraphs with 4–6-sentence ones. Symmetric blocks (every paragraph 4 sentences) = the strongest AI tell. **Vary or fail.**
- **Sentence length**: mix short declaratives (8–14 words) with longer compound sentences (20–30). Avoid a wall of uniform 25-word sentences.

### Mandatory format mix per article

| Format element | Min occurrences |
|---|---|
| Prose paragraphs | 5+ |
| List (numbered and/or bulleted, with bold lead-ins) | 1+ (use both where natural; don''t force) |
| Table / mini-table (comparison, phases, modules, cost) | 1 |
| Inline data with specific numbers | 6+ (durations, %, counts, years, prices/ranges) |
| Question-format H2 | 1 |
| FAQ block at end | 1 (5–7 Q&As) |
| `{IMAGE_NN: ...}` placeholders | 2 (up to 3 only if it truly helps) |

If a draft is 90% bullet points or 100% prose, it fails. Within the length band, aim for ~4–5 H2s and keep one comparison table + one list + the FAQ — don''t cram every element if it pads.

---

## 3. Bahasa Indonesia tone rules (B2B <NICHE>)

- **Register**: Bahasa Indonesia baku, profesional, tapi tidak kaku. Konsultatif — seperti seorang ahli menjelaskan ke eksekutif yang cerdas tapi bukan spesialis teknis. Bukan terjemahan, bukan obrolan kasual, bukan brosur.
- **Audience**: the decision-makers and practitioners in <NICHE> who own the budget and the risk. They care about risk, cost, time-to-value, and not getting fired for a failed project. Speak to that.
- **Subject voice**: mix addressing the reader ("Anda dapat...", "bisnis Anda") with impersonal ("perusahaan dapat...", "tim sering..."). Use "kami" sparingly — only in the closing where <CLIENT_NAME> speaks. Don''t over-"kami" the body (feels promotional).
- **EYD**: mandatory. Editor verifies.
- **Technical terms**: mix Indonesian + English as practitioners actually do. Italicize the English term on first use and gloss it: "*single source of truth* (satu sumber data tepercaya)", "*lead time*", "*go-live*". Then use it plainly. Same for any <NICHE> jargon and acronyms.
- **Numbers**: Indonesian convention — comma decimal (`18–20%`), period thousands (`83.000 perusahaan`, `Rp 500 Juta`). Spell out then use figure where it aids scanning.
- **Acronyms**: expand on first use — "ERP (*Enterprise Resource Planning*)" style — then use the acronym.

### Phrases that work (from the benchmarks)

- "Secara singkat, ..." / "Ringkasnya, ..."
- "Dalam praktiknya, ..." / "Di lapangan, ..."
- "Pola yang sering ditemui adalah ..."
- "Yang membedakan ... dari checklist generik: ..."
- "Bagian ini jarang ditulis kompetitor, padahal ..."
- "Ini rentang industri yang umum, bukan janji pasti." (honest hedging — builds trust)

---

## 4. Honesty & evidence (the E-E-A-T engine)

The 2026 core updates and the AI-Overview era reward originality + verifiable expertise and punish generic AI filler. So:

- **Hedge honestly.** When a number is a practitioner rule-of-thumb, say so: "Angka ini sering dipakai sebagai patokan praktis; bukan hasil studi resmi, tapi acuan lapangan." This honesty is a *feature* — it''s what humans (and Google''s quality raters) trust.
- **Source real numbers.** Every market/stat number traces to the dossier with a source (official vendor/standards body, Gartner/IDC/Forrester, government statistics, peer-reviewed). Inline attribution: "(menurut IDC, ...)", "(<sumber>, Desember 2025)".
- **Add a counter-conventional section.** Say when the reader does NOT need the solution yet, or the real risks. Competitors won''t; it differentiates and builds trust.
- **Be specific, not grand.** "*single source of truth*: satu sumber data yang dipercaya semua divisi" beats "solusi yang powerful dan komprehensif".

---

## 5. Anti-AI patterns — REJECT IF PRESENT

Editor must catch; writer must avoid.

| Pattern | Why it''s bad | Acceptable substitute |
|---|---|---|
| "Di era digital ini, ..." / "Seiring perkembangan teknologi, ..." / "Tidak dapat dipungkiri ..." | Empty AI opener | Open on a concrete pain or a specific fact/number |
| "Selain itu," starting 2+ paragraphs in a row | Repetitive transition | "Di sisi lain", "Lebih jauh", "Dalam praktiknya", or just start with the noun |
| "Penting untuk dicatat / diingat / dipahami bahwa..." | AI cliché | State the fact directly |
| "Dengan demikian, ..." overused | Reads machine-translated | "Maka", "Akibatnya", "Karena itu" |
| "Sebagai kesimpulan, ..." as the closing opener | Lazy | Start the closing with a forward-looking statement or a callback to the lead''s pain |
| Em-dashes ( — ) more than ~2× per article | Stylistic tell | Commas or full stops |
| Symmetric paragraph lengths (all ~4 sentences) | Strongest AI tell | Force 1–6 sentence variation |
| Every H2 followed by a 3-bullet list | Listicle-robot voice | Mix prose, bullets, tables, numbered steps |
| Generic claims without numbers ("solusi yang sangat penting") | Empty | Add a number/threshold (a concrete metric or range from <NICHE>) |
| Listing every <CLIENT_NAME> service/solution in one paragraph | Service-dump | Mention the 1 relevant anchor, in the closing |
| Vendor-hype adjectives: "canggih", "powerful", "revolusioner", "terdepan", "seamless" stacked | Brochure voice | Describe the concrete capability instead |
| Over-hedged claims you want AI to cite ("mungkin bisa jadi kadang") | Won''t get extracted | Be definitive on facts; hedge only genuine estimates (and label them) |

---

## 6. Visual rhythm — the "scrollability" check

At 30% zoom the page should show texture: varying paragraph heights, a numbered list, a comparison table, 2–3 image placeholders, an FAQ block. A wall of uniform paragraphs or one giant bullet dump fails the eye test before SEO.

---

## 7. Meta block format (every article)

At the very top of the markdown file, before the H1:

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
  - url: "<own hub landing page>"
    anchor: "<keyword or natural variant>"
  - url: "<cousin hub 1>"
    anchor: "<cousin keyword>"
  - url: "<cousin hub 2>"
    anchor: "<cousin keyword>"
external_citations:
  - url: "<source URL>"
    context: "<what claim it backs>"
brief_id: "<brief-id>"
target_word_count: <within <LENGTH_BAND>>
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
<Jawaban 40–80 kata. Langsung. Sertakan satu angka/fakta dari artikel.>

### <Pertanyaan berikutnya>
<Jawaban ...>
```

5–8 questions. Pull from the brief''s People-Also-Ask. Phrase as real Indonesian B2B searchers do: "Apa itu ...", "Berapa lama ...", "Berapa biaya ...", "Apa bedanya ... dan ...", "Kapan perlu ...", "Apakah ... cocok untuk UKM?".

---

## 9. Internal & external linking

- **Internal links (mandatory)**: 3 per article.
  - 1× to the article''s own hub landing page — as a **natural inline anchor woven into the prose, preferably in the opening/lead** (also acceptable mid-body). Descriptive anchor text (the keyword or a natural variant). **Do NOT use a "BACA JUGA" callout** — natural inline only.
  - 2× to cousin hub pages from the month''s keyword set (see `product_matrix.md` cross-link map), as inline contextual links placed where the topic naturally connects.
  - As history grows, optionally add 1 DOWN-link to a sibling article in the same cluster.
  - Style = inline contextual links woven into sentences, like "...baca [pengertian <topik>](...)". Anchor text must describe the destination — never "klik di sini" or a "BACA JUGA" callout.
- **External authoritative links**: 1–2 per article. Priority: official vendor/standards documentation, Gartner/Forrester/IDC/McKinsey, government statistics, peer-reviewed/industry. No outbound to direct competitors — even for "balance".

---

## 10. Citation discipline

- Every claimed number is either (a) from `knowledge_base/` or a researcher-verified citation, or (b) clearly framed as a range/rule-of-thumb and labeled as such.
- Never fabricate statistics or product specs. If the dossier didn''t supply it, the writer doesn''t invent it — flag it instead.
- Prefer recent, specific sources ("<sumber>, Desember 2025: 83.000+ perusahaan") over vague ("banyak perusahaan").

---

## 11. <CLIENT_NAME> mention discipline (works with `product_matrix.md`)

- Teach the topic vendor-neutrally in the body. <CLIENT_NAME> earns the close by being helpful first.
- **Max 2–3 <CLIENT_NAME> self-mentions**, usually: one optional mid-article aside + the closing CTA.
- ✅ One concise positioning line drawn from `company_profile.md` (credentials + what the client does for the reader, framed honestly).
- ❌ A paragraph listing every service the client offers (service-dump).
- <CLIENT_NAME> **implements/delivers/supports** solutions in <NICHE> — frame the client accurately for its role; see `product_matrix.md` blacklist.
- **Soft website CTA (MANDATORY, after the conclusion):** end every article with one short line inviting the reader to visit **<CLIENT_DOMAIN>** to explore the relevant solution or request a consultation — soft and consultative, never "beli sekarang". It is the standard closer and counts within the ≤3 mention budget (typically: one positioning line in the conclusion + this website-CTA line). Vary the wording, e.g. "Untuk mendiskusikan kesiapan [topik] di perusahaan Anda, kunjungi <CLIENT_DOMAIN>." or "Selengkapnya tentang solusi [X] yang ditangani <CLIENT_NAME> dapat Anda jelajahi di <CLIENT_DOMAIN>."

---

## 12. Image placeholders (no AI generation — brief for the design team)

Per the project decision, the writer does NOT generate images. Instead, mark 2–3 `{IMAGE_NN: ...}` placeholders with a **rich concept description** the design team can execute. Each should specify: subject, layout, style, color, and that any text is in Bahasa Indonesia. Examples:

- `{IMAGE_01: Infografik checklist — tiap poin dengan ikon, gaya korporat, teks Bahasa Indonesia}`
- `{IMAGE_02: Diagram side-by-side — kiri kondisi "sebelum" (silo, merah/abu), kanan kondisi "sesudah" (alur terintegrasi ke satu sumber data, hijau/biru)}`
- `{IMAGE_03: Timeline horizontal fase implementasi, tiap fase dengan ikon + durasi tipikal, warna progresif abu→hijau}`

The placeholder concept IS the design brief — there is no separate image-planner agent and no `images.json`. The client’s design team executes it, and the `.docx` renders each placeholder as an italic caption. **If the client runs image-free, delete this section and the `{IMAGE_NN}` row in §2.**

---

## 13. The benchmark in one sentence

> Read the draft aloud. If it sounds like a senior practitioner leveling with a smart decision-maker — concrete numbers, honest caveats, a comparison table, the occasional "ini sering disalahpahami" aside, and varied rhythm — it''s ready. If it sounds like a polished vendor brochure or an AI summary, send it back.