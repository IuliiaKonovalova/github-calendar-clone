var cal = new CalHeatMap();
cal.init({
  itemSelector: "#domain-a",
  domain: "month",
  subDomain: "day",
  cellSize: 20,
  cellPadding: 5,
  subDomainTextFormat: "%d",
  range: 1,
  displayLegend: false
});