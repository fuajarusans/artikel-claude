# Articles History — IIGF Institute

Append-only log of every article committed by the `article-history-curator` (editor `recommendation: approve` — the editor's QC folds in the plagiarism + AI-detector scan). The `seo-keyword-strategist` reads this BEFORE generating new concepts to prevent angle duplication across months.

Single language: **Bahasa Indonesia only** (one `.id.md` / one `.id.docx` per article).

## Layout

```
articles_history/
├── index.json                  ← master log (one entry per article)
├── README.md                   ← this file
└── by_keyword/
    └── <keyword-slug>/
        └── <slug>.md           ← per-article record
```

## `index.json` schema (v2.0 — single language)

```jsonc
{
  "schema_version": "2.0",
  "client": "IIGF Institute",
  "language": "id",
  "last_updated": "2026-06-30T18:00:00+07:00",
  "articles": [
    {
      "id": "2026-09-sertifikasi-cp3p-01",
      "month": "2026-06",
      "keyword": "sertifikasi CP3P",
      "keyword_slug": "sertifikasi-cp3p",
      "title": "Sertifikasi CP3P: Tiga Level, Cakupan Materi, dan Untuk Siapa",
      "slug": "sertifikasi-cp3p-level-cakupan-materi",
      "angle": "cp3p-tiga-level-dan-cakupan-materi",
      "angle_hash": "sha1:0a1b2c3d4e5f",
      "search_intent": "decision",
      "subtopics": ["CP3P Foundation", "PPP Guide", "APMG International", "ATO", "capacity building KPBU"],
      "iigf_mentions": ["tiga level CP3P & cakupan PPP Guide (teach)", "pelatihan CP3P sebagai ATO APMG (anchor)"],
      "internal_links": [
        "https://institute.iigf.co.id/cp3p",
        "https://institute.iigf.co.id/edukasi",
        "https://institute.iigf.co.id/riset"
      ],
      "external_citations": [
        "https://ppp-certification.com/...",
        "https://www.worldbank.org/..."
      ],
      "word_count": 1534,
      "status": "editor-approved",
      "paths": {
        "id_md": "monthly_runs/2026-09/final/sertifikasi-cp3p-01.id.md",
        "id_docx": "monthly_runs/2026-09/final/sertifikasi-cp3p-01.id.docx",
        "qc": "monthly_runs/2026-09/final/sertifikasi-cp3p-01.qc.md"
      },
      "published_at": null,
      "live_url": null
    }
  ]
}
```

## Field rules
- **id** — `<month>-<keyword-slug>-<NN>`; unique.
- **angle_hash** — `sha1:<first 12 hex>` of `<keyword_slug>|<angle>|<sorted subtopics joined by ",">`. Used by the strategist to detect duplicates.
- **status** — `drafted` | `editor-approved` | `published`. The curator writes `editor-approved`; the user sets `published` + `live_url` after go-live on institute.iigf.co.id.
- **iigf_mentions** — what topic was taught + which IIGF Institute programme anchored the CTA. Must respect `knowledge_base/product_matrix.md` (IIGF Institute delivers CP3P training as an APMG-accredited ATO; APMG owns and awards the credential).
- **subtopics** — 5–10 semantic tags; what the article actually covers.
- No `*_en` fields, no PNG `image_paths` — this client is Bahasa-Indonesia-only and this pipeline produces no images at all.

## Per-article record (`by_keyword/<keyword-slug>/<slug>.md`)

```markdown
---
id: 2026-09-sertifikasi-cp3p-01
keyword: sertifikasi CP3P
title: <ID title>
angle: <angle slug>
month: 2026-06
status: editor-approved
---

# Article notes

## Angle summary
One paragraph: what makes this article distinct from others in this keyword's cluster.

## Subtopics covered
- ...

## Sections (H2s)
1. ...

## Internal links used
- <url> — anchor: "<text>"

## External citations
- <url> — context: "<what it backed>"

## Topic taught / IIGF Institute anchor
- <topic/product taught> ; IIGF Institute anchor: <service/credential>

## Notes for future strategist runs
- Angles still uncovered for this keyword: ...
- Topics this article deliberately did NOT cover (to leave space for siblings): ...
```

## Update protocol
**Only the `article-history-curator` writes here, and ONLY after the editor gate passes** (editor `recommendation: approve`).

1. Curator reads each `final/<brief-id>.qc.md`; processes only `approve`.
2. Writes the per-article record in `by_keyword/<keyword-slug>/<slug>.md`.
3. Appends the entry to `index.json` (preserve order — latest at end).
4. Updates `last_updated`.
5. Produces the `.id.docx` via `tools/md-to-docx.ps1`.

## Querying the history (for the strategist)
1. Read `index.json` → filter `articles` where `keyword_slug == <current keyword>`.
2. For each candidate new angle, compute its `angle_hash`.
3. Reject the candidate if any existing article has a matching `angle_hash` OR subtopic Jaccard overlap > 0.4.
4. Read the per-keyword records' "Notes for future strategist runs" to guide diversification.
