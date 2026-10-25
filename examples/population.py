"""Run beside population.csv. Requires matplotlib. Produces population.png.
Source: U.S. Census Bureau, 2020 Census, Resident Population, Table 2.
https://www2.census.gov/programs-surveys/decennial/2020/data/apportionment/apportionment-2020-table02.pdf
Selected areas are illustrative and do not represent the entire United States.
"""
import csv
from pathlib import Path
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

with Path(__file__).with_name("population.csv").open(newline="") as stream:
    rows = list(csv.DictReader(stream))
rows.sort(key=lambda row: int(row["population"]), reverse=True)
fig, ax = plt.subplots(figsize=(9, 4.8))
values = [int(row["population"]) / 1_000_000 for row in rows]
bars = ax.barh([row["area"] for row in rows], values, color="#1d6074")
ax.invert_yaxis()
ax.set_xlim(0, 10)
ax.set_xlabel("Population (millions)")
ax.set_title("Population in selected areas: 2020", loc="left", pad=16)
ax.bar_label(bars, labels=[f'{int(row["population"]):,}' for row in rows], padding=5)
ax.spines[["top", "right"]].set_visible(False)
fig.text(0.02, 0.025, "Source: U.S. Census Bureau, 2020 Census, Resident Population, Table 2.", fontsize=9)
fig.tight_layout(rect=(0, 0.07, 1, 1))
fig.savefig(Path(__file__).with_name("population.png"), dpi=160)
plt.close(fig)
