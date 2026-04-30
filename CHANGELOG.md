# Changelog

All notable changes to Kavu are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.1] — 2026-05-01

### Changed

- `README.md`: image references now use absolute GitHub raw URLs (`https://raw.githubusercontent.com/stultus/kavu/main/images/…`) instead of relative paths, so they render on themes.gohugo.io as well as on GitHub.
- `config.toml`: `module.hugoVersion.min` bumped from `0.81.0` (inherited from the upstream paulmartins fork) to `0.128.0` to match `theme.toml`. Added `extended = true`.

These are the alignment fixes required by [hugoThemesSiteBuilder](https://github.com/gohugoio/hugoThemesSiteBuilder/blob/main/README.md) before the theme can be submitted to themes.gohugo.io.

## [1.1.0] — 2026-05-01

The "actually reusable" release. Everything in 1.0.0 worked, but the layout partials hardcoded the original author's name, social handles, GitHub URL, and OpenGraph image, which made adopting the theme awkward. 1.1.0 moves all of that into `Site.Params` with sensible defaults.

### Added

- **Configurable site identity.** New optional `Site.Params` keys: `author`, `authorURL`, `tagline`, `twitterHandle`, `defaultOgImage`, `keywords`, `locale`, `headerLogoURL`, `headerBrandText`, `headerLogoLight`, `headerLogoDark`, `footerLinks`, `heroLinks`, `hideThemeCredit`. All optional; the theme renders cleanly with none of them set.
- **Configurable hero-sidebar links** via `[[params.heroLinks]]`. Replaces the two previously hardcoded links in `layouts/index.html`.
- **Configurable footer-bottom nav** via `[[params.footerLinks]]`. Replaces the four previously hardcoded links in `layouts/partials/footer.html`.
- **Footer theme credit.** A small "Built with Kavu — a Hugo theme by stultus" line renders by default at the bottom of every page. Opt out with `hideThemeCredit = true`.
- **Configurable homepage intro.** `content/_index.md` body renders into the hero section, supporting wikilinks and arbitrary markdown.
- **Inline-SVG social icons.** Social links from `Site.Params.social` now render via a new `social_icon.html` partial that recognises `github`, `twitter`/`x`, `linkedin`, `instagram`, `medium`, `facebook`, `mastodon`, `rss`, with a generic external-link glyph fallback.
- **Hugo themes directory submission readiness.** Tightened `theme.toml` metadata, raised `min_version` to `0.128.0`, added the `search` feature flag, generated `images/screenshot.png` (1500×1000) and `images/tn.png` (900×600), initialised the repo as a Hugo Module (`go.mod`), and refreshed `exampleSite/` with five original Kavu sample notes.

### Changed

- `layouts/_default/baseof.html`: replaced deprecated `.Site.LanguageCode` with `.Site.Language.Lang`.
- `exampleSite/`: removed leftover paulmartins demo content (red panda Garden / Projects / Library / About) and replaced with five Kavu sample notes covering each maturity stage, plus a welcoming homepage intro.

### Fixed

- `enableRobotsTXT = true` was being parsed as `outputs.enableRobotsTXT` because of TOML section scoping (it sat after `[outputs]`). Build now silent.
- Sample-note dates in `exampleSite/` were all identical, making the All Notes "Recent" sort look broken; now spread so A-Z / Recent / Status produce distinct orderings.

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

[1.1.1]: https://github.com/stultus/kavu/releases/tag/v1.1.1
[1.1.0]: https://github.com/stultus/kavu/releases/tag/v1.1.0
[1.0.0]: https://github.com/stultus/kavu/releases/tag/v1.0.0
