# Census Guidance Explorer

Private DATA 690 capstone prototype for browsing draft Census data visualization guidance. It includes topic/tag filters, text search, connected reusable components, code patterns, a public-data bar-chart recipe, and an interactive proposed architecture.

**Draft academic project:** this is not an official U.S. government site or finalized Census Bureau guidance.

## Existing private website

https://census-guidance-win-690.cometmink12.chatgpt.site/

The existing host supplies ChatGPT sign-in and owner-only access. That access control is not implemented in these static files. This repository stores a source snapshot; GitHub Pages is not enabled. Commits here do not automatically update the existing hosted website.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Semantic page structure and guide dialog |
| `styles.css` | Responsive styles and visible focus states |
| `data.js` | Thirteen curated source-linked guides and component code patterns |
| `app.js` | Search, filters, guide details, code views, copy feedback, and architecture controls |
| `examples/` | Public population CSV, Python and R scripts, and generated Python chart |
| `foundation-review.md` | Review findings, proposed team page packages, and foundation completion criteria |

## Preview locally

No build or dependency installation is needed for the website. Serve this directory over HTTP so the code-example downloads can load:

```sh
python -m http.server 8000
```

Open `http://localhost:8000`. Keep the `examples` folder beside `index.html`.

## Run the example recipes

- Python: install `matplotlib`, then run `python examples/population.py`. The script reads its adjacent CSV and writes `population.png`.
- R: open the `examples` directory as the working directory and run `Rscript population.R`. This recipe uses base R and writes `population-r.png`.

The fixed CSV contains 2020 resident population for Virginia, Maryland, and the District of Columbia. It is a selected-area illustration, not a nationwide dataset. The source is U.S. Census Bureau, 2020 Census, Resident Population, Table 2:
https://www2.census.gov/programs-surveys/decennial/2020/data/apportionment/apportionment-2020-table02.pdf

## Sources and project relationship

- Draft guidance site: https://emolfino-census.github.io/data_viz_guidance/
- Upstream capstone source: https://github.com/emolfino-census/data_viz_guidance
- Contribution fork: https://github.com/Thantyw/data_viz_guidance
- Personal capstone project: https://github.com/Thantyw/Data690_Census_Project

Guidance is paraphrased from thirteen selected upstream pages; each guide links to the original file. Component relationships, additional discovery tags, architecture, UI, and code patterns are prototype adaptations. The source snapshot was reviewed on October 25, 2026, against upstream revision `b27e7b69fdf10f21580cd8cc1c8270adde003624`. It does not synchronize with upstream.

The shared team guidance remains in the upstream Jekyll repository and its contribution forks. This standalone explorer is a separate prototype for review. The two foundation patches prepared during review have not been submitted as pull requests.

## Validation and limits

Verified: JavaScript syntax; search, combined topic/tag filtering, empty-state reset, guide links, component navigation, architecture controls, accessible data-table expansion, code views and copy feedback; modal Escape dismissal and focus restoration; desktop and 390-pixel iframe layout without horizontal overflow; selected foreground/background contrast pairs at 4.5:1 or better. The Python recipe executed successfully.

R was unavailable and its recipe was not executed. These checks are accessibility basics, not Section 508 certification. The live GitHub Pages guidance could not be retrieved during research; repository files supplied the guidance content.

This export matches hosted source commit `4b25d372a4ebcef4ab57054be9bd21c5a14545d4`, excluding host-specific configuration, Git history, and credentials, with this README added.
