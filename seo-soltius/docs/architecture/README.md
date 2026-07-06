# STP Aquaculture · AI Agent Architecture (HTML doc)

A self-contained, portable HTML document describing the multi-agent SEO content pipeline built for STP Aquaculture by WEBARQ Promote.

## What's in this folder

```
docs/architecture/
├── index.html                  ← open this file
├── README.md                   ← you are here
└── assets/
    ├── css/
    │   └── styles.css          ← single stylesheet
    └── images/
        ├── hero.png            ← hero illustration (generated via gpt-image-1)
        ├── pilot-image-01.png  ← actual pilot output
        ├── pilot-image-02.png  ← actual pilot output
        └── pilot-image-03.png  ← actual pilot output
```

No external dependencies. No CDN. No JavaScript. Works offline.

## How to view locally

Just open `index.html` in any browser:

- **Windows:** double-click `index.html`, or right-click → Open with → Chrome/Edge/Firefox
- **macOS:** drag `index.html` onto a browser icon, or `open index.html`
- **Linux:** `xdg-open index.html`

## How to deploy to a website

The folder is self-contained, so deployment is straightforward.

### Option A · Drop into an existing site

Copy the entire `architecture/` folder into your website's public directory (e.g. `public/docs/architecture/` or `www/architecture/`). The page will then live at:

```
https://yoursite.com/docs/architecture/
```

All asset paths inside `index.html` are relative, so no edits needed.

### Option B · Static-hosting services

Works out of the box on:

- **Netlify** — drag-and-drop the `architecture/` folder onto Netlify Drop
- **Vercel** — `vercel deploy` from inside the folder
- **GitHub Pages** — commit the folder to a `gh-pages` branch
- **Cloudflare Pages** — connect a Git repo containing the folder
- **AWS S3 / Azure Blob / GCS** — upload as a static-website bucket

### Option C · Convert to PDF

Open `index.html` in Chrome / Edge → File → Print → Save as PDF.
The page has print styles built in (`@media print` rules in the CSS).

## What's covered

- Project overview + at-a-glance stats
- Pipeline architecture diagram (inline SVG)
- All 7 agents with role, responsibilities, model tier, tools
- Monthly workflow step-by-step
- Knowledge base + external integrations
- Three optimizations (model tiering, research cache, parallel image gen)
- Pilot results with actual generated images
- Cost & performance projections
- Project file structure
- Six non-negotiable guardrails
- Phase 2 roadmap

## Editing

To update content, edit `index.html` directly. Styles are in `assets/css/styles.css`.

To re-render the hero image, run the project's image generator with a new prompt:

```powershell
powershell.exe -ExecutionPolicy Bypass -File "..\..\tools\generate-image.ps1" `
  -Prompt "<your new prompt>" `
  -OutputPath ".\assets\images\hero.png" `
  -Size 1536x1024 -Quality high
```

To swap the pilot example images, copy fresh files from `monthly_runs/<YYYY-MM>/final/` into `assets/images/` keeping the same filenames.

## Browser support

Tested layout works in Chrome 120+, Edge 120+, Firefox 120+, Safari 16+. Mobile-responsive down to 360 px.

---

Generated 2026-05-21 from the live agent system at `D:\claude\seo-stp\`.
