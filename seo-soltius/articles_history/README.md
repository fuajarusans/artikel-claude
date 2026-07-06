# Articles History — SOLTIUS

Append-only log of every article committed by the `article-history-curator` (editor `approve` AND validator `pass`). The `seo-keyword-strategist` reads this BEFORE generating new concepts to prevent angle duplication across months.

Single language: **Bahasa Indonesia only** (one `.id.md` / one `.id.docx` per article).

## Layout

```
articles_history/
├── index.json                  ← master log (one entry per article)
├── README.md                   ← this file
└── by_keyword/
    ├── low-code-platform/
    ├── digital-manufacturing/
    ├── data-warehouse-solutions/
    ├── business-intelligence/
    ├── erp-migration-to-the-cloud/
    └── sap-clean-core/
        └── <slug>.md           ← per-article record
```

## `index.json` schema (v2.0 — single language)

```jsonc
{
  "schema_version": "2.0",
  "client": "SOLTIUS",
  "language": "id",
  "last_updated": "2026-06-30T18:00:00+07:00",
  "articles": [
    {
      "id": "2026-06-erp-migration-to-the-cloud-01",
      "month": "2026-06",
      "keyword": "ERP migration to the cloud",
      "keyword_slug": "erp-migration-to-the-cloud",
      "title": "Migrasi ERP ke Cloud: Brownfield vs Greenfield, Mana yang Tepat?",
      "slug": "migrasi-erp-ke-cloud-brownfield-vs-greenfield",
      "angle": "brownfield-vs-greenfield-decision",
      "angle_hash": "sha1:0a1b2c3d4e5f",
      "search_intent": "decision",
      "subtopics": ["RISE with SAP", "brownfield", "greenfield", "downtime", "TCO"],
      "soltius_mentions": ["RISE with SAP (teach)", "Soltius Migration service + Best RISE Partner (anchor)"],
      "internal_links": [
        "https://www.soltius.co.id/id/blog/migrasi-erp-ke-cloud",
        "https://www.soltius.co.id/blog/sap-clean-core-the-complete-guide",
        "https://www.soltius.co.id/id/blog/data-warehouse-solutions"
      ],
      "external_citations": [
        "https://news.sap.com/...",
        "https://www.idc.com/..."
      ],
      "word_count": 1934,
      "status": "editor-approved",
      "paths": {
        "id_md": "monthly_runs/2026-06/final/erp-migration-to-the-cloud-01.id.md",
        "id_docx": "monthly_runs/2026-06/final/erp-migration-to-the-cloud-01.id.docx",
        "image_plan": "monthly_runs/2026-06/final/erp-migration-to-the-cloud-01.images.json",
        "qc": "monthly_runs/2026-06/final/erp-migration-to-the-cloud-01.qc.md",
        "quality": "monthly_runs/2026-06/final/erp-migration-to-the-cloud-01.quality.md"
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
- **status** — `drafted` | `editor-approved` | `published`. The curator writes `editor-approved`; the user sets `published` + `live_url` after go-live on soltius.co.id.
- **soltius_mentions** — what SAP/partner tech was taught + which Soltius service/credential anchored the CTA. Must respect `knowledge_base/product_matrix.md` (Soltius implements, never "builds").
- **subtopics** — 5–10 semantic tags; what the article actually covers.
- No `*_en` fields, no PNG `image_paths` — this client is Bahasa-Indonesia-only and images are a design-team brief (`paths.image_plan`), not generated files.

## Per-article record (`by_keyword/<keyword-slug>/<slug>.md`)

```markdown
---
id: 2026-06-erp-migration-to-the-cloud-01
keyword: ERP migration to the cloud
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

## SAP tech taught / Soltius anchor
- <SAP/partner tech> ; Soltius anchor: <service/credential>

## Notes for future strategist runs
- Angles still uncovered for this keyword: ...
- Topics this article deliberately did NOT cover (to leave space for siblings): ...
```

## Update protocol
**Only the `article-history-curator` writes here, and ONLY after BOTH gates pass** (editor `recommendation: approve` AND validator `verdict: pass`).

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
