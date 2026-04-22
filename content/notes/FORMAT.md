# Note format (Markdown)

Put each note in `content/notes/` as a `.md` file. Recommended filename:

`YYYY-MM-DD-short-slug.md` (e.g. `2026-04-11-my-title.md`).

## Front matter (YAML)

The build script reads a YAML block at the top, between `---` lines.

```yaml
---
title: "Full title of the note (shown as a section heading)"
date: 2026-04-11
slug: optional-custom-anchor
---
```

- **title** — required for a nice heading. If omitted, a title is guessed from the filename.
- **date** — `YYYY-MM-DD` for ordering and the italic line under the heading.
- **slug** — optional; if omitted, the part of the filename after `.md` is used. It becomes the `id` of the section on `notes.html` so you can link `notes.html#2026-04-11-my-title`.

Files named `FORMAT.md` or starting with `_` are ignored by the compiler.

## Body: GitHub-Flavored Markdown

- **Paragraphs** — blank line between blocks.
- **Emphasis** — `*italics*`, `**bold**` (use `**Definition.**` or `**Theorem 1.**` at the start of a line like a LaTeX environment label).
- **Section break** — a line with only `---` (em rule or horizontal rule, depending on context).
- **Links** — `[text](url)`.
- **Raw HTML** — allowed; use for `<figure>`, small `<svg>`, or extra structure.

## Math (KaTeX)

- **Inline** — single dollar signs: `$a^2 + b^2$`.
- **Display** — put a blank line before and after; `$$` on their own lines:

```text
$$
\int_0^1 f(x)\,dx
$$
```

Unquoted `date: 2026-04-11` in YAML is parsed as UTC midnight and can look like the wrong day in some time zones; `date: "2026-04-11"` (quoted) is always a calendar string.

Use standard LaTeX: `\frac`, `\mathbb{Z}`, `\operatorname{im}`, `\xrightarrow`, etc.

## Build

From the project root:

```bash
npm install
npm run build:notes
```

This rewrites the single page `notes.html` with all notes in reverse chronological order on one long scroll (no separate note pages).

**Auto-rebuild when a note changes** (watches all `.md` under `content/notes/`):

```bash
npm run watch:notes
```
