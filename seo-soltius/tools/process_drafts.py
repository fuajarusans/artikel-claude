#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Batch post-processor for SOLTIUS monthly drafts (default: monthly_runs/2026-07-2).

ONE script, run ONCE. Loops over EVERY draft in <run>/drafts/*.id.md and, per file:
  1. MARKDOWN FIX  - strips any stray {IMAGE_NN} placeholders (images removed from the
                     pipeline), fixes heading '#' spacing, normalizes blank lines around
                     headings, strips trailing whitespace, collapses extra blank lines,
                     guarantees one final newline.
  2. VERIFY        - structural checks: definition snippet, `## Kesimpulan`, soft
                     soltius.co.id CTA as the final line, FAQ present, internal links,
                     zero {IMAGE_} residue. (Informational flags for review.)
  3. COUNT (info)  - accurate body word count is recorded and synced to frontmatter
                     `word_count:` for correctness, but NOTHING is gated or trimmed on it.

NOTE (2026-07-08 decision): word count is IGNORED for this project. No length trimming,
no band flags. Content is left intact; only markdown/formatting is repaired.

Writes review-ready output to <run>/final/<id>.id.md (drafts/ left untouched) and a report
to <run>/final/_PROCESS_REPORT.md + _process_report.json.

Usage:  python tools/process_drafts.py [--run monthly_runs/2026-07-2] [--dry-run]
"""
import re, os, glob, json, argparse

def split_fm(text):
    m = re.match(r'^---\r?\n(.*?)\r?\n---\r?\n?(.*)$', text, re.S)
    return (m.group(1), m.group(2)) if m else (None, text)

def wordcount(body):
    b = re.sub(r'\{IMAGE_[^}]*\}', '', body)
    b = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', b)   # [text](url) -> text
    b = re.sub(r'https?://\S+', '', b)               # bare urls
    b = b.replace('|', ' ')                           # table pipes
    return len(re.findall(r"[0-9A-Za-zÀ-ÖØ-öø-ÿ]+(?:['’\-][0-9A-Za-zÀ-ÖØ-öø-ÿ]+)*", b))

def fix_markdown(body):
    fixes = []
    if re.search(r'\{IMAGE_[^}]*\}', body):
        body = re.sub(r'(?m)^\s*\{IMAGE_[^}]*\}\s*$\r?\n?', '', body)
        body = re.sub(r'\{IMAGE_[^}]*\}', '', body)
        fixes.append("removed {IMAGE_NN} placeholder(s)")
    if re.search(r'(?m)[ \t]+$', body):
        body = re.sub(r'(?m)[ \t]+$', '', body); fixes.append("stripped trailing whitespace")
    if re.search(r'(?m)^(#{1,6})([^#\s])', body):
        body = re.sub(r'(?m)^(#{1,6})([^#\s])', r'\1 \2', body); fixes.append("fixed heading '#' spacing")
    b2 = re.sub(r'([^\n])\n(#{1,6} )', r'\1\n\n\2', body)
    if b2 != body: body = b2; fixes.append("blank line before headings")
    b2 = re.sub(r'(?m)^(#{1,6} .*)\n(?=[^\n])', r'\1\n\n', body)
    if b2 != body: body = b2; fixes.append("blank line after headings")
    b2 = re.sub(r'\n{3,}', '\n\n', body)
    if b2 != body: body = b2; fixes.append("collapsed extra blank lines")
    return body, fixes

def verify(body):
    flags = []
    head = body[:1600]
    if not re.search(r'(?m)^>\s', head) or not re.search(r'(?i)(adalah|ringkas|secara singkat)', head):
        flags.append("definition snippet (blockquote) not detected near top")
    if not re.search(r'(?m)^##\s+Kesimpulan', body):
        flags.append("missing '## Kesimpulan'")
    last = [l for l in body.strip().splitlines() if l.strip()]
    if not last or 'soltius.co.id' not in last[-1].lower():
        flags.append("soft website CTA (soltius.co.id) not the final line")
    m = re.search(r'(?m)^##\s+FAQ', body)
    faq = 0
    if m:
        rest = body[m.end():]
        nxt = re.search(r'(?m)^##\s', rest)
        seg = rest[:nxt.start()] if nxt else rest
        faq = len(re.findall(r'(?m)^###\s', seg))
    if faq < 3:
        flags.append(f"FAQ looks thin (found {faq})")
    ilinks = len(re.findall(r'\]\(https://www\.soltius\.co\.id', body))
    if ilinks < 2:
        flags.append(f"few internal soltius.co.id links ({ilinks})")
    if re.search(r'\{IMAGE_', body):
        flags.append("residual {IMAGE_ placeholder")
    return flags, faq, ilinks

def sync_wordcount(fm, count):
    if fm is None:
        return fm
    if re.search(r'(?m)^word_count:\s*.*$', fm):
        return re.sub(r'(?m)^word_count:\s*.*$', f'word_count: {count}', fm)
    return fm.rstrip() + f'\nword_count: {count}'

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--run", default="monthly_runs/2026-07-2")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()
    drafts_dir = os.path.join(args.run, "drafts")
    out_dir = os.path.join(args.run, "final")
    os.makedirs(out_dir, exist_ok=True)

    files = sorted(glob.glob(os.path.join(drafts_dir, "*.id.md")))
    records = []
    for f in files:
        rid = os.path.basename(f)[:-6]  # strip '.id.md'
        text = open(f, encoding="utf-8").read()
        fm, body = split_fm(text)
        body, md_fixes = fix_markdown(body)
        wc = wordcount(body)                      # informational only
        flags, faq, ilinks = verify(body)
        fm2 = sync_wordcount(fm, wc)
        out_text = (f"---\n{fm2}\n---\n\n{body.strip()}\n") if fm2 is not None else (body.strip() + "\n")
        if not args.dry_run:
            open(os.path.join(out_dir, rid + ".id.md"), "w", encoding="utf-8", newline="\n").write(out_text)
        records.append(dict(id=rid, word_count=wc, faq=faq, internal_links=ilinks,
                            md_fixes=md_fixes, flags=flags))

    clean = [r for r in records if not r["flags"]]
    total_fixes = sum(len(r["md_fixes"]) for r in records)

    print(f"\n=== process_drafts :: {args.run} :: {len(records)} drafts {'(DRY-RUN)' if args.dry_run else ''} ===")
    print("(word count IGNORED for gating - shown for info only)\n")
    print(f"{'id':40} {'words':>6} {'FAQ':>4} {'links':>6} {'md-fixes':>9}  flags")
    for r in records:
        print(f"{r['id']:40} {r['word_count']:6} {r['faq']:>4} {r['internal_links']:>6} {len(r['md_fixes']):>9}  {len(r['flags'])}")
    print(f"\ndrafts: {len(records)}   markdown fixes applied: {total_fixes}   no-flags: {len(clean)}/{len(records)}")
    flagged = [r for r in records if r["flags"]]
    if flagged:
        print("\nSTRUCTURAL FLAGS (review):")
        for r in flagged: print(f"  - {r['id']}: " + "; ".join(r["flags"]))

    if not args.dry_run:
        json.dump(records, open(os.path.join(out_dir, "_process_report.json"), "w", encoding="utf-8"),
                  ensure_ascii=False, indent=2)
        with open(os.path.join(out_dir, "_PROCESS_REPORT.md"), "w", encoding="utf-8", newline="\n") as fh:
            fh.write(f"# Batch process report - {args.run}\n\n")
            fh.write("_Word count ignored for this project; markdown repair + structural verify only._\n\n")
            fh.write(f"- Drafts processed: **{len(records)}**\n- Markdown fixes applied: **{total_fixes}**\n")
            fh.write(f"- No structural flags: **{len(clean)}/{len(records)}**\n\n")
            fh.write("| id | words (info) | FAQ | links | md-fixes | flags |\n|---|---|---|---|---|---|\n")
            for r in records:
                fh.write(f"| {r['id']} | {r['word_count']} | {r['faq']} | {r['internal_links']} | {len(r['md_fixes'])} | {len(r['flags'])} |\n")
            if flagged:
                fh.write("\n## Structural flags\n")
                for r in flagged: fh.write(f"- **{r['id']}**: " + "; ".join(r["flags"]) + "\n")
    print(f"\nOutput -> {out_dir}/<id>.id.md   report -> {out_dir}/_PROCESS_REPORT.md")

if __name__ == "__main__":
    main()
