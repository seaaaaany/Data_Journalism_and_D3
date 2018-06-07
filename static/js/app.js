
// Set up chart size
var svgWidth = 1000;
var svgHeight = 700;

// Margin
var margin = {
  top: 20,
  right: 40,
  bottom: 100,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;


// Create an SVG wrapper, append an svg that will hold our chart and shift the latter by left and top margins
var svg = d3
    .select(".chart")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Append an SVG group
var chart = svg.append("g");

d3.select(".chart").append("div").attr("class", "tooltip").style("opacity", 0);

url = "/data";
d3.json(url, function (err, data) {
    if (err) throw err;

