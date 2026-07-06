# Style Guide — SOLTIUS Articles (Bahasa Indonesia)

Primary reference for `seo-article-writer-id` and `seo-editor`.
Derived from the two approved benchmarks:
- `context/Contoh Artikel Soltius.docx` → extracted at `_extracted/soltius_sample_article.md` ("Implementasi SAP di Indonesia")
- `monthly_runs/2026-05/final/sap-business-one-01.id.md` (prior in-pipeline Soltius article, "7 Tanda Bisnis Anda Sudah Butuh SAP Business One")

> **The North Star Test**: Could a senior SAP consultant or enterprise-IT analyst — someone who has actually sat in blueprint workshops and watched a go-live — have written this for a CIO/CFO to read? If yes, ship it. If it reads like an AI synthesis of three vendor blogs, send it back.

All articles are in **Bahasa Indonesia**. (One landing page — SAP Clean Core — sits on an English URL; the article is still written in Indonesian, only the link target differs.)

---

## 1. Article anatomy (the structure both benchmarks follow)

```
1. Meta block (YAML frontmatter — NOT published as body). See §7.

2. Lead paragraph — the pain hook (1 paragraph)
   Open on a concrete business pain the reader feels ("laporan keuangan
   yang selalu terlambat", "closing bulanan lebih dari 10 hari kerja"),
   NOT a generic "Di era digital...". The primary keyword appears here.
   State what the article delivers and its angle.

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
   Connect the topic back to Soltius using ONE positioning line from
   company_profile.md. Soft consultative CTA (assessment/consultation),
   never "beli sekarang". Do NOT open with "Sebagai kesimpulan".

8. Soft website CTA (AFTER the conclusion — MANDATORY in every article)
   The final line. One short sentence (1–2) inviting the reader to visit
   the Soltius website (soltius.co.id) to explore the relevant solution
   or start a consultation. Soft/consultative, never "beli sekarang".
   Distinct from the conclusion; placed as the very last line. Vary the
   wording per article (see §11).
```

### 1a. H2 mix (vary the types — don't make all H2s the same shape)

At minimum, across the article include:
- **1 definitional H2** — "Apa itu [X] dan mengapa penting bagi perusahaan Indonesia?"
- **1 question-format H2** — phrased as the reader would Google it ("Kapan perusahaan sebaiknya migrasi ERP ke cloud?")
- **1 practical/structured H2** — steps, phases, modules, a comparison ("Tahapan migrasi", "Perbandingan ... vs ...")
- **1 honest / counter-conventional H2** — the trust-builder competitors skip ("Kapan Anda BELUM perlu ...", "Tantangan ... yang jarang dibahas", "Mitos seputar ..."). The SAP B1 benchmark's "Tanda Anda BELUM perlu pindah" section is the model.

---

## 2. Length & rhythm

- **Length**: 1,500–1,800 words (target ~1,650). Focused supporting articles for busy decision-makers — enough depth to be genuinely useful, tight enough to respect their time. B2B readers reward density and punish padding (so does Google HCU). Below ~1,000 risks "thin"; padding to inflate the count hurts.
- **Paragraph length**: VARY DELIBERATELY. Mix 1-sentence paragraphs with 4–6-sentence ones. Symmetric blocks (every paragraph 4 sentences) = the strongest AI tell. **Vary or fail.**
- **Sentence length**: mix short declaratives (8–14 words) with longer compound sentences (20–30). Avoid a wall of uniform 25-word sentences.

### Mandatory format mix per article

| Format element | Min occurrences |
|---|---|
| Prose paragraphs | 5+ |
| List (numbered and/or bulleted, with bold lead-ins) | 1+ (use both where natural; don't force) |
| Table / mini-table (comparison, phases, modules, cost) | 1 |
| Inline data with specific numbers | 6+ (durations, %, counts, years, prices/ranges) |
| Question-format H2 | 1 |
| FAQ block at end | 1 (5–7 Q&As) |
| `{IMAGE_NN: ...}` placeholders | 2 (up to 3 only if it truly helps) |

If a draft is 90% bullet points or 100% prose, it fails. At 1,500–1,800 words, aim for ~4–5 H2s and keep one comparison table + one list + the FAQ — don't cram every element if it pads.

---

## 3. Bahasa Indonesia tone rules (B2B enterprise IT)

- **Register**: Bahasa Indonesia baku, profesional, tapi tidak kaku. Konsultatif — seperti seorang ahli menjelaskan ke eksekutif yang cerdas tapi bukan teknolog. Bukan terjemahan, bukan obrolan kasual, bukan brosur.
- **Audience**: CIO/IT director, CFO/finance, operations & supply-chain heads, transformation leads at SMEs → large enterprises. They care about risk, cost, time-to-value, and not getting fired for a failed project. Speak to that.
- **Subject voice**: mix addressing the reader ("Anda dapat...", "bisnis Anda") with impersonal ("perusahaan dapat...", "tim IT sering..."). Use "kami" sparingly — only in the closing where Soltius speaks. Don't over-"kami" the body (feels promotional).
- **EYD**: mandatory. Editor verifies.
- **Technical terms**: mix Indonesian + English as practitioners actually do. Italicize the English term on first use and gloss it: "*single source of truth* (satu sumber data tepercaya)", "*lead time*", "*go-live*". Then use it plainly. Same for ERP, BI, *data warehouse*, *clean core*, *brownfield*, *low-code*, S/4HANA, BTP.
- **Numbers**: Indonesian convention — comma decimal (`18–20%`), period thousands (`83.000 perusahaan`, `Rp 500 Juta`). Spell out then use figure where it aids scanning.
- **Acronyms**: expand on first use — "ERP (*Enterprise Resource Planning*)", "MES (*Manufacturing Execution System*)", "SAC (*SAP Analytics Cloud*)" — then use the acronym.

### Phrases that work (from the benchmarks)

- "Secara singkat, ..." / "Ringkasnya, ..."
- "Dalam praktiknya, ..." / "Di lapangan, ..."
- "Pola yang sering ditemui adalah ..."
- "Yang membedakan ... dari checklist generik: ..."
- "Bagian ini jarang ditulis kompetitor, padahal ..."
- "Ini rentang industri yang umum, bukan janji pasti." (honest hedging — builds trust)

---

## 4. Honesty & evidence (the E-E-A-T engine)

The March 2026 core update and AI-Overview era reward originality + verifiable expertise and punish generic AI filler. So:

- **Hedge honestly.** When a number is a practitioner rule-of-thumb, say so: "Angka 10 hari kerja sering dipakai sebagai patokan praktis; bukan hasil studi resmi, tapi acuan lapangan." This honesty is a *feature* — it's what humans (and Google's quality raters) trust.
- **Source real numbers.** Every market/stat number traces to the dossier with a source (SAP News, Gartner/IDC/Forrester, Kemenkominfo/BPS, peer-reviewed). Inline attribution: "(SAP, Desember 2025)", "menurut IDC, ...".
- **Add a counter-conventional section.** Say when the reader does NOT need the solution yet, or the real risks. Competitors won't; it differentiates and builds trust.
- **Be specific, not grand.** "*single source of truth*: satu sumber data yang dipercaya semua divisi" beats "solusi yang powerful dan komprehensif".

---

## 5. Anti-AI patterns — REJECT IF PRESENT

Editor must catch; writer must avoid.

| Pattern | Why it's bad | Acceptable substitute |
|---|---|---|
| "Di era digital ini, ..." / "Seiring perkembangan teknologi, ..." / "Tidak dapat dipungkiri ..." | Empty AI opener | Open on a concrete pain or a specific fact/number |
| "Selain itu," starting 2+ paragraphs in a row | Repetitive transition | "Di sisi lain", "Lebih jauh", "Dalam praktiknya", or just start with the noun |
| "Penting untuk dicatat / diingat / dipahami bahwa..." | AI cliché | State the fact directly |
| "Dengan demikian, ..." overused | Reads machine-translated | "Maka", "Akibatnya", "Karena itu" |
| "Sebagai kesimpulan, ..." as the closing opener | Lazy | Start the closing with a forward-looking statement or a callback to the lead's pain |
| Em-dashes ( — ) more than ~2× per article | Stylistic tell | Commas or full stops |
| Symmetric paragraph lengths (all ~4 sentences) | Strongest AI tell | Force 1–6 sentence variation |
| Every H2 followed by a 3-bullet list | Listicle-robot voice | Mix prose, bullets, tables, numbered steps |
| Generic claims without numbers ("solusi yang sangat penting") | Empty | Add a number/threshold: "closing >10 hari kerja", "lisensi on-prem: maintenance 18–20%/tahun" |
| Listing every Soltius service/solution in one paragraph | Service-dump | Mention the 1 relevant anchor, in the closing |
| Vendor-hype adjectives: "canggih", "powerful", "revolusioner", "terdepan", "seamless" stacked | Brochure voice | Describe the concrete capability instead |
| Over-hedged claims you want AI to cite ("mungkin bisa jadi kadang") | Won't get extracted | Be definitive on facts; hedge only genuine estimates (and label them) |

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
meta_description: "<140–160 chars; keyword + 2–3 specific value props (e.g. 'lengkap dengan tahapan migrasi, estimasi downtime, dan pilihan RISE with SAP')>"
slug: "<kebab-case, keyword-led, ≤60 chars>"
language: "id"
primary_keyword: "<keyword>"
secondary_keywords: ["k1", "k2", "..."]
internal_links:
  - url: "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud"
    anchor: "migrasi ERP ke cloud"
  - url: "<cousin hub 1>"
    anchor: "<cousin keyword>"
  - url: "<cousin hub 2>"
    anchor: "<cousin keyword>"
external_citations:
  - url: "<source URL>"
    context: "<what claim it backs>"
brief_id: "<brief-id>"
target_word_count: 1650
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

5–8 questions. Pull from the brief's People-Also-Ask. Phrase as real Indonesian B2B searchers do: "Apa itu ...", "Berapa lama ...", "Berapa biaya ...", "Apa bedanya ... dan ...", "Kapan perlu ...", "Apakah ... cocok untuk UKM?".

---

## 9. Internal & external linking

- **Internal links (mandatory)**: 3 per article.
  - 1× to the article's own hub landing page — as a **natural inline anchor woven into the prose, preferably in the opening/lead** (also acceptable mid-body). Descriptive anchor text (the keyword or a natural variant). **Do NOT use a "BACA JUGA" callout.** (Note: the older Soltius benchmark `soltius_sample_article.md` uses a BACA JUGA callout; we deliberately no longer do — natural inline only.)
  - 2× to cousin hub pages from the 6-keyword set (see `product_matrix.md` cross-link map), as inline contextual links placed where the topic naturally connects.
  - As history grows, optionally add 1 DOWN-link to a sibling article in the same cluster.
  - Style = inline contextual links woven into sentences, like "...baca [pengertian SAP Business One](...)". Anchor text must describe the destination — never "klik di sini" or a "BACA JUGA" callout.
- **External authoritative links**: 1–2 per article. Priority: SAP official (news.sap.com, help.sap.com, SAP Learning), Gartner/Forrester/IDC/McKinsey, Kemenkominfo/BPS/Kemenkop, peer-reviewed/industry. No outbound to direct competitors (other SAP integrators) — even for "balance".

---

## 10. Citation discipline

- Every claimed number is either (a) from `knowledge_base/` or a researcher-verified citation, or (b) clearly framed as a range/rule-of-thumb and labeled as such.
- Never fabricate statistics or SAP specs. If the dossier didn't supply it, the writer doesn't invent it — flag it instead.
- Prefer recent, specific sources ("SAP, Desember 2025: 83.000+ perusahaan") over vague ("banyak perusahaan").

---

## 11. Soltius mention discipline (works with `product_matrix.md`)

- Teach the topic vendor-neutrally in the body. Soltius earns the close by being helpful first.
- **Max 2–3 Soltius self-mentions**, usually: one optional mid-article aside + the closing CTA.
- ✅ "Sebagai SAP Platinum Partner melalui United VARs dan bagian dari Metrodata Group sejak 1998, Soltius mendampingi perusahaan dari penilaian kesiapan hingga dukungan pasca go-live."
- ❌ "Soltius menyediakan ERP Strategy, Implementation, Migration, AMS, Data and AI Consulting, dan Analytics untuk semua kebutuhan Anda." (service-dump)
- Soltius **implements/migrates/supports** SAP — never "builds" it. See `product_matrix.md` blacklist.
- **Soft website CTA (MANDATORY, after the conclusion):** end every article with one short line inviting the reader to visit **soltius.co.id** to explore the relevant solution or request a consultation — soft and consultative, never "beli sekarang". It is the standard closer and counts within the ≤3 mention budget (typically: one positioning line in the conclusion + this website-CTA line). Vary the wording, e.g. "Untuk mendiskusikan kesiapan [topik] di perusahaan Anda, kunjungi soltius.co.id." or "Selengkapnya tentang solusi [X] yang ditangani Soltius dapat Anda jelajahi di soltius.co.id."

---

## 12. Image placeholders (no AI generation — brief for the design team)

Per the project decision, the writer does NOT generate images. Instead, mark 2–3 `{IMAGE_NN: ...}` placeholders with a **rich concept description** the design team can execute. Follow the SAP B1 benchmark's level of detail. Each should specify: subject, layout, style, color, and that any text is in Bahasa Indonesia. Examples:

- `{IMAGE_01: Infografik checklist 7 tanda — tiap poin dengan ikon, gaya korporat biru-putih, teks Bahasa Indonesia}`
- `{IMAGE_02: Diagram side-by-side — kiri "Software Akuntansi" silo (merah/abu), kanan "ERP terintegrasi" alur tersambung ke satu database (hijau/biru)}`
- `{IMAGE_03: Timeline horizontal lima fase migrasi, tiap fase dengan ikon + durasi tipikal, warna progresif abu→hijau}`

The `enterprise-it-image-planner` agent expands these into a structured `images.json` brief (alt-text + caption + visual direction + suggested asset type: infographic / diagram / screenshot / stock photo). No PNG is produced.

---

## 13. The benchmark in one sentence

> Read the draft aloud. If it sounds like a senior consultant leveling with a smart executive — concrete numbers, honest caveats, a comparison table, the occasional "ini sering disalahpahami" aside, and varied rhythm — it's ready. If it sounds like a polished vendor brochure or an AI summary, send it back.
