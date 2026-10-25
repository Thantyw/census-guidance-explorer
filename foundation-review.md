---
layout: default
title: Collaborative foundation review
permalink: /foundation-review.html
description: "Review findings, proposed page groups, and completion criteria for Weeks 1–2."
---

# Collaborative foundation review

Reviewed October 25, 2026, against upstream commit `b27e7b69fdf10f21580cd8cc1c8270adde003624`.

The sponsor plan calls for a shared foundation in Weeks 1–2, followed by individual proposals after initial PRs are reviewed and merged. Choose a primary owner and a reviewer for each package below at the next meeting. These are proposed packages, not assignments to named teammates.

## Findings and needed updates

| Priority | Finding | Action |
| --- | --- | --- |
| High | Two Grids pages publish to `grid.html`, differing only in whitespace. | Keep `component/Grids.md`; remove the duplicate under visualization types. |
| High | Root-level output permalinks cause relative `assets/` images to point to the wrong directory. | Correct in a separate mechanical image-path PR, checking each target. |
| High | Shared layout lacks an HTML page title, skip link, and named sidebar landmark. | Add metadata, a skip link, visible focus, a focusable main target, and named navigation. |
| Medium | Draft status is only prominent in README. | Display a shared draft notice without implying official government status. |
| Medium | Most descriptions are placeholders; most components have no tags. | Page owners should write useful descriptions and propose tags consistently. |
| Medium | Some pages contain empty headings, editorial placeholders, and legacy links. | Owners should review content, examples, citations, and links in their package. |

All configured navigation targets match source permalinks at review time, including Interactive Chart. Current tag archives are Comparison, Correlation, Distribution, and Geospatial. New tags need a matching archive and team agreement.

## Proposed team division

| Package | Proposed owner | Scope |
| --- | --- | --- |
| A — shared structure | Win, subject to team agreement | `_config.yml`, `_layouts/`, `index.md`, `tags/`, contributor instructions and route checks. |
| B — comparison charts | Teammate 1 | Bar, stacked bar, lollipop, dot plot, slope, population pyramid. |
| C — distributions and relationships | Teammate 2 | Area, stacked area, line, histogram, boxplot, scatter, bubble, pie, donut, treemap, Sankey, tables. Split this large group when possible. |
| D — maps | Teammate 3 | Choropleth, dot distribution, proportional symbol, micromaps; Map Layout and Scale Bar components. |
| E — components and accessibility | Teammate 4 | Remaining components: axes, dual axes, color, grids, legends, titles, typography, 508, mobile, interaction, sources, notes, comparison, nested categories, small multiples, uncertainty, logo. Split into accessibility and chart components when possible. |

For three people, combine A with D, B with C, and retain E as a dedicated package. Record actual owners before overlapping edits. Each owner should cross-review another package; coordinate all shared-template changes with package A.

## Shared page contract

Preserve public permalinks. Every page needs a unique permalink, layout, precise title, useful one-sentence description, and agreed tags where appropriate. Use the same sequence: overview and use cases; essential guidance; avoid; recommendations; examples with explanation and source; related components; references. Omit empty headings. Distinguish source requirements from proposed recommendations.

Use `relative_url` for local links and images. Keep assets in their topic directory. Examples need meaningful alternative text and data tables when visual information alone is insufficient. Check keyboard use, visible focus, contrast, text resizing, and narrow screens. These checks alone do not certify Section 508 compliance.

## Pull request workflow

1. Update your fork from upstream before branching.
2. Create one branch per package, for example `foundation/comparison-pages`.
3. Edit assigned pages; coordinate shared files with package A.
4. Check routes, links, headings, images, examples, citations, and accessibility basics.
5. Open a PR from the fork branch to `emolfino-census/data_viz_guidance:main`.
6. Explain the resulting behavior, pages changed, validation, and limitations.
7. Obtain teammate review, resolve feedback, and wait for a maintainer to merge.

Use `Thantyw/data_viz_guidance` as the fork for upstream contributions. The separate `Thantyw/Data690_Census_Project` repository can hold personal experiments and planning. Do not push directly to upstream main.

## Completion gate

Every assigned page follows the shared contract; routes and tag archives resolve; duplicate permalinks and broken local media paths are fixed; examples retain attribution; accessibility checks are recorded; and maintainers have reviewed and merged the foundation PRs. Then finalize individual enhancements. The private guidance explorer remains an exploratory proposal rather than official Census guidance.
