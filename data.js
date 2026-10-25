const SOURCE='https://github.com/emolfino-census/data_viz_guidance/blob/main/';
const GUIDES=[
{id:'bar',title:'Bar chart',kind:'Chart',tags:['Comparison'],path:'visualization_type/BarChart.md',summary:'Compare values across categories with a clear, common baseline.',use:'Use for comparisons between distinct categories. Horizontal bars help with longer category labels.',essential:['Start every bar at zero so its length represents the value fairly.','Keep bars the same width and leave space between categories.','Order categories to support the main comparison. Explain omitted categories.'],avoid:['Avoid 3D effects and truncated baselines.'],related:['axes','color','titles','sources'],icon:'bar',code:'bar'},
{id:'line',title:'Line graph',kind:'Chart',tags:['Distribution'],path:'visualization_type/LineGraph.md',summary:'Reveal changes over time or another naturally ordered sequence.',use:'Use when the order of observations carries meaning and the change in values is central.',essential:['Make each line legible and identify multiple series with labels or a legend.','Preserve gaps in missing observations; explain any dotted segments.','Consider highlighting or small multiples for many series.'],avoid:['Do not connect categories that have no natural order. A single line does not need a legend.'],related:['axes','legend','uncertainty'],icon:'line'},
{id:'scatter',title:'Scatter plot',kind:'Chart',tags:['Correlation','Distribution'],path:'visualization_type/ScatterPlot.md',summary:'Explore the relationship between two numeric variables.',use:'Each point represents an observation at its x and y values. Explain the variables and units.',essential:['Name variables and units in the title or axes.','Use markers with proportional width and height.','If points overlap, consider transparency or jitter and disclose the method.'],avoid:['Avoid overlapping labels and excessive overplotting.'],related:['axes','color','titles'],icon:'scatter'},
{id:'map',title:'Choropleth map',kind:'Chart',tags:['Distribution','Geospatial'],path:'visualization_type/Choroplethmap.md',summary:'Show geographic patterns in rates, ratios, or other normalized values.',use:'Use color to encode values across geographic areas. Classification choices affect the patterns readers see.',essential:['Use normalized numeric measures rather than raw counts.','Use non-overlapping classes and a legend with matching precision.','Represent areas with unavailable data as a separate class.'],avoid:['Avoid categorical palettes for numeric values and overlapping class boundaries.'],related:['color','legend','sources','uncertainty'],icon:'map'},
{id:'table',title:'Data tables',kind:'Chart',tags:['Comparison','Distribution','Accessibility'],path:'visualization_type/Table.md',summary:'Provide precise values and an accessible companion to a chart.',use:'Use when readers need exact values, detailed categories, or measures of uncertainty.',essential:['Order rows meaningfully and use consistent precision.','Include notes, definitions, sources, and statistical caveats.','Define symbols for missing, withheld, or inapplicable values.'],avoid:['Avoid unnecessary hierarchy and inconsistent numeric formatting.'],related:['accessibility','sources','uncertainty'],icon:'table'},
{id:'axes',title:'Axes',kind:'Component',tags:['Presentation','Comparison'],path:'component/Axes.md',summary:'Give values their units, reference points, and consistent scales.',use:'Reusable across bar, line, and scatter charts to help readers interpret position and magnitude.',essential:['Label axes and include units where needed.','Use consistent scales for charts intended to be compared.','Keep tick intervals consistent and labels uncluttered. Include zero for bar charts.'],avoid:['Avoid dual axes except the limited cases described in the source guidance.'],related:['bar','line','scatter'],icon:'axes',code:'axes'},
{id:'color',title:'Color',kind:'Component',tags:['Presentation','Accessibility'],path:'component/Color.md',summary:'Match the palette to the relationship the data represents.',use:'Use sequential colors for ordered values, categorical colors for distinct groups, and diverging colors around a meaningful midpoint.',essential:['Choose colors deliberately and check text contrast.','Label encoded values so interpretation does not depend on color alone.','Distinguish unavailable data from valid values in the legend and description.'],avoid:['Avoid excessive colors or palettes that imply the wrong relationship.'],related:['legend','accessibility','map'],icon:'color',code:'color'},
{id:'legend',title:'Legends',kind:'Component',tags:['Presentation','Geospatial'],path:'component/Legend.md',summary:'Explain symbols and colors in the context of the visualization.',use:'Use when multiple classes or series are not already identified directly in the chart.',essential:['Place the legend near the chart and keep its elements grouped.','Match swatches, precision, category order, and units to the displayed data.','Use descriptive titles and account for unavailable data.'],avoid:['Avoid a redundant legend when every value is directly labeled.'],related:['color','map','line'],icon:'legend',code:'legend'},
{id:'titles',title:'Titles and subtitles',kind:'Component',tags:['Presentation'],path:'component/titles.md',summary:'Establish the subject, context, and main message at a glance.',use:'Every visualization needs a title. An optional subtitle can supply a highlight, unit, or context.',essential:['Position the title above or directly beside the chart.','Place a subtitle directly below its title.','Keep wording focused and avoid unsupported causal statements.'],avoid:['Avoid vague titles and unnecessarily long titles or subtitles.'],related:['sources','bar'],icon:'titles',code:'titles'},
{id:'sources',title:'Sources',kind:'Component',tags:['Presentation'],path:'component/Source.md',summary:'Make the underlying dataset and its vintage traceable.',use:'Attach a source statement to every visualization so readers can locate the underlying data.',essential:['Identify the dataset, supplying or sponsoring agencies, and data vintage.','Place sources at the bottom of the visualization or its notes.','List all datasets directly used and link public sources where possible.'],avoid:['Avoid omitting the vintage or leaving underlying data untraceable.'],related:['titles','table'],icon:'sources',code:'sources'},
{id:'uncertainty',title:'Visualizing uncertainty',kind:'Component',tags:['Distribution','Accessibility'],path:'component/Uncertainty.md',summary:'Show estimates with the context needed to interpret their precision.',use:'Consider uncertainty when it can change interpretation, particularly for comparisons and rankings of estimates.',essential:['Name the uncertainty measure: margin of error, standard error, or confidence interval.','Explain uncertainty in the visual, notes, and alternative description.','Apply any significance annotations consistently across comparisons.'],avoid:['Do not omit consequential uncertainty or infer significance from overlap alone.'],related:['table','accessibility','line'],icon:'uncertainty',code:'uncertainty'},
{id:'accessibility',title:'508 accessibility',kind:'Component',tags:['Accessibility'],path:'component/508.md',summary:'Provide text alternatives, readable contrast, and access to values.',use:'Treat accessibility as part of the visualization design and review it alongside the content.',essential:['Provide alternative text that communicates the main message.','Supply data tables when a complex chart needs them to convey its meaning.','Support resizing without losing content and check foreground/background contrast.'],avoid:['Avoid relying only on images or color to communicate information.'],related:['table','color','mobile'],icon:'accessibility',code:'accessibility'},
{id:'mobile',title:'Mobile design',kind:'Component',tags:['Accessibility','Presentation'],path:'component/MobileDesign.md',summary:'Prioritize information and controls for smaller screens.',use:'Adapt layout, chart density, and interactions for touch and narrow viewports.',essential:['Put essential information first and keep repeated controls consistent.','Use readable contrast and well-spaced touch targets.','Wrap text and adapt charts to minimize horizontal scrolling.'],avoid:['Avoid hover-only information and layouts that require rotating the device.'],related:['accessibility','table'],icon:'mobile',code:'mobile'}
];
const SNIPPETS={
axes:{label:'HTML / SVG',code:`<svg viewBox="0 0 400 220" role="img" aria-labelledby="chart-title chart-desc">
  <title id="chart-title">Population by area</title>
  <desc id="chart-desc">Horizontal bars start at zero. See the accompanying data table for values.</desc>
  <!-- Add bars and numeric ticks within these bounds. -->
  <line x1="100" y1="20" x2="100" y2="170" stroke="#52616b" />
  <line x1="100" y1="170" x2="380" y2="170" stroke="#52616b" />
  <text x="100" y="190">0</text>
  <text x="200" y="215">Population (millions)</text>
</svg>`},
color:{label:'CSS',code:`/* Qualitative groups: also identify every group in text. */
:root {
  --series-primary: #1d6074;
  --series-secondary: #94612b;
  --no-data: #686e73;
}
.series-label { color: #173044; }
.series-primary { fill: var(--series-primary); }
/* Recheck contrast after changing backgrounds or opacity.
   Do not use these categorical colors as an ordered scale. */`},
legend:{label:'HTML',code:`<section aria-labelledby="legend-heading">
  <h3 id="legend-heading">Population series</h3>
  <ul>
    <li><span aria-hidden="true" style="color:#1d6074">●</span> 2020 Census</li>
    <li><span aria-hidden="true" style="color:#94612b">■</span> Comparison series</li>
  </ul>
</section>
<!-- Match these colors AND shapes in the chart. -->`},
titles:{label:'HTML',code:`<figure aria-labelledby="population-title" aria-describedby="population-context">
  <h3 id="population-title">Population in selected areas: 2020</h3>
  <p id="population-context">Virginia, Maryland, and the District of Columbia; number of residents.</p>
  <!-- Insert chart and accessible data table here. -->
  <figcaption>Source: U.S. Census Bureau, 2020 Census, Table 2.</figcaption>
</figure>`},
sources:{label:'HTML',code:`<p class="source">
  Source: U.S. Census Bureau, 2020 Census,
  <a href="https://www2.census.gov/programs-surveys/decennial/2020/data/apportionment/apportionment-2020-table02.pdf">Resident Population, Table 2</a>.
</p>
<!-- Keep the dataset name, agency, vintage, and link with the chart. -->`},
uncertainty:{label:'HTML',code:`<table>
  <caption>Example estimate with uncertainty (illustrative values)</caption>
  <thead><tr><th scope="col">Area</th><th scope="col">Estimate (%)</th><th scope="col">90% margin of error (percentage points)</th></tr></thead>
  <tbody><tr><th scope="row">Example area</th><td>12.0</td><td>± 1.2</td></tr></tbody>
</table>
<p>The illustrative estimate ranges from 10.8% to 13.2% at the stated confidence level.
Sampling and other errors may affect interpretation. These are not Census data.</p>`},
accessibility:{label:'HTML',code:`<figure>
  <img src="population.svg" alt="Among three selected areas in 2020, Virginia had the most residents and the District of Columbia the fewest. Exact values follow in a table.">
</figure>
<table>
  <caption>Population of selected areas, 2020 Census</caption>
  <thead><tr><th scope="col">Area</th><th scope="col">Residents</th></tr></thead>
  <tbody>
    <tr><th scope="row">Virginia</th><td>8,631,393</td></tr>
    <tr><th scope="row">Maryland</th><td>6,177,224</td></tr>
    <tr><th scope="row">District of Columbia</th><td>689,545</td></tr>
  </tbody>
</table>
<!-- Add the data citation below the table. -->`},
mobile:{label:'CSS',code:`.chart-container { width: 100%; max-width: 60rem; }
.chart-container svg { display: block; width: 100%; height: auto; }
.filters { display: flex; flex-wrap: wrap; gap: .75rem; }
.filters button { min-height: 44px; min-width: 44px; }
button:focus-visible, a:focus-visible {
  outline: 3px solid #174f86; outline-offset: 4px;
}
@media (max-width: 40rem) {
  .dashboard { display: block; }
}
/* Rework crowded chart labels; scaling alone may make them too small. */`}
};
