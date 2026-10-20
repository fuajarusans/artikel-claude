# Articles History — <CLIENT_NAME>

Append-only log of every article committed by the `article-history-curator` (editor `recommendation: approve`). The `seo-keyword-strategist` reads this BEFORE generating new concepts to prevent angle duplication across months.

Single language: **<LANGUAGE>** (one `.id.md` / one `.id.docx` per article).

## Layout

```
articles_history/
├── index.json                  ← master log (one entry per article)
├── README.md                   ← this file
└── by_keyword/
    ├── <keyword-slug-1>/
    ├── <keyword-slug-2>/
    ├── <keyword-slug-3>/
    ├── <keyword-slug-4>/
    ├── <keyword-slug-5>/
    └── <keyword-slug-6>/
        └── <slug>.md           ← per-article record
```

## `index.json` schema (v2.0 — single language)

```jsonc
{
  "schema_version": "2.0",
  "client": "<CLIENT_NAME>",
  "language": "id",
  "last_updated": "2026-06-30T18:00:00+07:00",
  "articles": [
    {
      "id": "2026-06-<keyword-slug>-01",
      "month": "2026-06",
      "keyword": "<keyword utama>",
      "keyword_slug": "<keyword-slug>",
      "title": "<judul artikel>",
      "slug": "<slug-artikel-kebab-case>",
      "angle": "<angle-slug>",
      "angle_hash": "sha1:0a1b2c3d4e5f",
      "search_intent": "decision",
      "subtopics": ["<subtopik 1>", "<subtopik 2>", "<subtopik 3>", "<subtopik 4>", "<subtopik 5>"],
      "client_mentions": ["<topik/solusi yang diajarkan> (teach)", "<layanan/kredensial klien> (anchor)"],
      "internal_links": [
        "https://<CLIENT_DOMAIN>/id/blog/<hub-slug>",
        "https://<CLIENT_DOMAIN>/blog/<cousin-slug-1>",
        "https://<CLIENT_DOMAIN>/id/blog/<cousin-slug-2>"
      ],
      "external_citations": [
        "https://<authority-1>/...",
        "https://<authority-2>/..."
      ],
      "word_count": 1934,
      "status": "editor-approved",
      "paths": {
        "id_md": "monthly_runs/2026-06/final/<keyword-slug>-01.id.md",
        "id_docx": "monthly_runs/2026-06/final/<keyword-slug>-01.id.docx",
        "qc": "monthly_runs/2026-06/final/<keyword-slug>-01.qc.md",
        "quality": "monthly_runs/2026-06/final/<keyword-slug>-01.quality.md"
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
- **status** — `drafted` | `editor-approved` | `published`. The curator writes `editor-approved`; the user sets `published` + `live_url` after go-live on <CLIENT_DOMAIN>.
- **client_mentions** — what topic/solution was taught + which client service/credential anchored the CTA. Must respect `knowledge_base/product_matrix.md` (the client implements, never "builds").
- **subtopics** — 5–10 semantic tags; what the article actually covers.
- No `*_en` fields, no PNG `image_paths` — this client is <LANGUAGE>-only and images are a design-team brief (`paths.image_plan`), not generated files.

## Per-article record (`by_keyword/<keyword-slug>/<slug>.md`)

```markdown
---
id: 2026-06-<keyword-slug>-01
keyword: <keyword utama>
title: <judul>
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

## Topic taught / client anchor
- <topic/solution> ; client anchor: <service/credential>

## Notes for future strategist runs
- Angles still uncovered for this keyword: ...
- Topics this article deliberately did NOT cover (to leave space for siblings): ...
```

## Update protocol
**Only the `article-history-curator` writes here, and ONLY when the editor's `recommendation` is `approve`** — the editor's QC pass now includes the plagiarism + AI-detector scan, so it is the single gate.

1. Curator reads each `final/<brief-id>.qc.md` + `.quality.md`; processes only `approve` + `pass`.
2. Writes the per-article record in `by_keyword/<keyword-slug>/<slug>.md`.
3. Appends the entry to `index.json` (preserve order — latest at end).
4. Updates `last_updated`.
5. Produces the `.id.docx` via `tools/md-to-docx.ps1`.

## Querying the history (for the strategist)
1. Read `index.json` → filter `articles` where `keyword_slug == <current keyword>`.
2. For each candidate new angle, compute its `angle_hash`.
3. Reject the candidate if any existing article has a matching `angle_hash` OR subtopic Jaccard overlap > 0.4.
4. Read the per-keyword records' "Notes for future strategist runs" to guide diversification.
