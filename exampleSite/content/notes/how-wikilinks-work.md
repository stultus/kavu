---
title: "How Wikilinks Work"
date: 2026-04-28
lastmod: 2026-04-28
draft: false
tags: ["kavu", "linking", "writing"]
summary: "Internal links between notes render with [[bracket]] markers. Use absolute /notes/slug/ paths so the resolver finds the target every time."
status: "growing"
type: "note"
---

Kavu styles internal links with bracketed `[[wikilink]]` markers — a convention borrowed from Roam, Obsidian, and the wider tools-for-thought tradition. The brackets are added by the theme; you write ordinary Markdown links.

## Recommended form

```markdown
[Note Maturity Stages](/notes/note-maturity-stages/)
```

This produces: [Note Maturity Stages](/notes/note-maturity-stages/) — note the brackets that Kavu adds around the rendered link.

## How the resolver works

The theme's `render-link.html` partial inspects each link:

1. **External links** (anything starting with `http`, `https`, `mailto:`, or `#`) render as plain anchor tags, no brackets, opening in a new tab.
2. **Internal links starting with `/notes/`** are matched against page URLs. This is the recommended form.
3. **Anything else** falls back to matching the link *text* against page titles. So `[Welcome to Kavu](welcome)` works if a page titled "Welcome to Kavu" exists, but breaks the moment you rename the link text.

Use absolute `/notes/slug/` paths and you'll never have a broken internal link.

## Backlinks

Every note page automatically lists its backlinks at the bottom. You don't maintain them by hand — the theme scans page content and inverts the link graph. See the bottom of [What Is a Digital Garden](/notes/what-is-a-digital-garden/) for an example.

## Related

- [Welcome to Kavu](/notes/welcome-to-kavu/)
- [What Is a Digital Garden](/notes/what-is-a-digital-garden/)
