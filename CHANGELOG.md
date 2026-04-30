# Changelog

All notable changes to Kavu are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] — 2026-05-01

First tagged release under the Kavu name.

### Added

- **Identity.** New name (Kavu — കാവ്, Malayalam for *sacred grove*), cover artwork, and updated `theme.toml` metadata.
- **Monospace design system.** JetBrains Mono / IBM Plex Mono / Fira Code, Nord-inspired palette, full dark/light mode with a CSS-variable architecture, Malayalam font support (Manjari).
- **Note maturity stages.** `seeding` 🌱 / `growing` 🌿 / `evergreen` 🌳 statuses surfaced as colour-coded dots in the index, badges on note pages, and node colours in the network graph.
- **Network graph.** Force-directed graph of every note with hover-highlight neighbours, label collision avoidance, search, zoom, fit-to-view, fullscreen, and keyboard shortcuts (`/` `F` `Shift+F` `+` `-`).
- **Backlinks with summaries.** Every note page automatically lists pages that link to it, with each backlink's summary line.
- **Related-tags discovery.** Tag pages compute related tags by co-occurrence rather than a static taxonomy.
- **Random-note discovery.** Homepage button and a per-page "random next" link.
- **Wikilink rendering.** Internal Markdown links render with `[[bracket]]` markers via a custom `render-link.html` partial that resolves by URL or by title-text fallback.
- **Homepage.** Live garden statistics, Recently Tended, Most Connected, collapsible topic cards, filterable and sortable full note index.
- **Tag system.** Tag cloud with note counts, sortable tag pages (Recent / A-Z / Status).
- **Hugo Module.** Repository is now `hugo mod init`-ed at `github.com/stultus/kavu`.
- **Example site.** `exampleSite/` now contains five original Kavu sample notes covering all three maturity stages.

### Origin

Kavu was originally forked from [paulmartins/hugo-digital-garden-theme](https://github.com/paulmartins/hugo-digital-garden-theme), itself inspired by [Maggie Appleton's website](https://maggieappleton.com/). The 1.0.0 release marks the point at which the rewrite is substantial enough to stand under its own name; attribution to both upstream sources is preserved in the README and `theme.toml`.

[1.0.0]: https://github.com/stultus/kavu/releases/tag/v1.0.0
