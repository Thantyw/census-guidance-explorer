# Run from the folder containing population.csv. Uses base R only.
# Source: U.S. Census Bureau, 2020 Census, Resident Population, Table 2.
# https://www2.census.gov/programs-surveys/decennial/2020/data/apportionment/apportionment-2020-table02.pdf
d <- read.csv("population.csv", stringsAsFactors = FALSE)
d <- d[order(d$population), ]
png("population-r.png", width = 1440, height = 768, res = 160)
par(mar = c(6, 11, 4, 3))
y <- barplot(d$population / 1e6, names.arg = d$area,
  horiz = TRUE, las = 1, col = "#1d6074", border = NA,
  xlim = c(0, 10), xlab = "Population (millions)",
  main = "Population in selected areas: 2020")
text(d$population / 1e6, y,
  labels = format(d$population, big.mark = ",", scientific = FALSE, trim = TRUE),
  pos = 4, cex = 0.8)
mtext("Source: U.S. Census Bureau, 2020 Census, Resident Population, Table 2.",
  side = 1, line = 4, cex = 0.65)
invisible(dev.off())
