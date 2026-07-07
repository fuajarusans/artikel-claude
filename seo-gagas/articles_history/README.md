# Articles History — PGN Gagas

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
  "client": "PGN Gagas",
  "language": "id",
  "last_updated": "2026-06-30T18:00:00+07:00",
  "articles": [
    {
      "id": "2026-06-cng-untuk-industri-01",
      "month": "2026-06",
      "keyword": "CNG untuk industri",
      "keyword_slug": "cng-untuk-industri",
      "title": "CNG untuk Industri: Bandingkan Biaya dan Efisiensi vs BBM",
      "slug": "cng-untuk-industri-biaya-vs-bbm",
      "angle": "cng-vs-bbm-cost-comparison",
      "angle_hash": "sha1:0a1b2c3d4e5f",
      "search_intent": "decision",
      "subtopics": ["Gaslink", "beyond pipeline", "efisiensi biaya", "emisi", "konversi BBM"],
      "gagas_mentions": ["Gaslink / CNG beyond-pipeline (teach)", "PGN Gagas distribusi CNG via GTM (anchor)"],
      "internal_links": [
        "https://www.gagas.co.id/id/blog/cng-untuk-industri",
        "https://www.gagas.co.id/id/blog/gaslink",
        "https://www.gagas.co.id/id/blog/konversi-bbm-ke-bbg"
      ],
      "external_citations": [
        "https://www.esdm.go.id/...",
        "https://www.iea.org/..."
      ],
      "word_count": 1534,
      "status": "editor-approved",
      "paths": {
        "id_md": "monthly_runs/2026-06/final/cng-untuk-industri-01.id.md",
        "id_docx": "monthly_runs/2026-06/final/cng-untuk-industri-01.id.docx",
        "qc": "monthly_runs/2026-06/final/cng-untuk-industri-01.qc.md"
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
- **status** — `drafted` | `editor-approved` | `published`. The curator writes `editor-approved`; the user sets `published` + `live_url` after go-live on gagas.co.id.
- **gagas_mentions** — what topic/product was taught + which PGN Gagas service/credential anchored the CTA. Must respect `knowledge_base/product_matrix.md` (PGN Gagas provides/distributes CNG, never "produces" gas bumi from upstream).
- **subtopics** — 5–10 semantic tags; what the article actually covers.
- No `*_en` fields, no PNG `image_paths` — this client is Bahasa-Indonesia-only and images are a design-team brief carried by the article's `{IMAGE_NN}` placeholders, not generated files.

## Per-article record (`by_keyword/<keyword-slug>/<slug>.md`)

```markdown
---
id: 2026-06-cng-untuk-industri-01
keyword: CNG untuk industri
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

## Topic taught / Gagas anchor
- <topic/product taught> ; Gagas anchor: <service/credential>

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
