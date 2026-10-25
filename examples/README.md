# Public Census data example

These files reproduce a bar chart of resident population for Virginia, Maryland, and the District of Columbia in the 2020 Census.

Source: U.S. Census Bureau, 2020 Census, Resident Population for the 50 States, the District of Columbia, and Puerto Rico, Table 2.
https://www2.census.gov/programs-surveys/decennial/2020/data/apportionment/apportionment-2020-table02.pdf

Run `python population.py` with Python 3 and matplotlib installed. The script reads its adjacent CSV and writes `population.png`.

Run `Rscript population.R` with this folder as the working directory. It uses base R and writes `population-r.png`. The Python recipe was executed; the R recipe has not been executed in this workspace.

Keep the CSV and scripts together. Counts cover selected areas only. Include the source, meaningful alternative text, and corresponding data table when publishing the chart.
