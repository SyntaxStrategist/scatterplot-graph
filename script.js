// Constants for chart dimensions
const width = 800;
const height = 400;
const padding = 60;

// Select the SVG element and set its dimensions
const svg = d3.select("#chart")
  .attr("width", width)
  .attr("height", height);

// Tooltip setup
const tooltip = d3.select("#tooltip");

// Fetch data from URL
const url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json";

d3.json(url).then(data => {
  // Parse the data
  data.forEach(d => {
    d.Year = new Date(d.Year, 0); // Convert Year to a Date object for the x-axis
    d.Time = new Date(`1970-01-01T00:${d.Time}`); // Convert Time to Date for the y-axis
  });

  // Set up scales
  const xScale = d3.scaleTime()
    .domain(d3.extent(data, d => d.Year))
    .range([padding + 10, width - padding]); // Add 10px padding to the left

  const yScale = d3.scaleTime()
    .domain(d3.extent(data, d => d.Time))
    .range([height - padding, padding]); // Flip the range to invert the y-axis

  // Create axes
  const xAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat("%Y"));
  const yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat("%M:%S"));

  // Append x-axis
  svg.append("g")
    .attr("id", "x-axis")
    .attr("transform", `translate(0, ${height - padding})`)
    .call(xAxis);

  // Append y-axis
  svg.append("g")
    .attr("id", "y-axis")
    .attr("transform", `translate(${padding}, 0)`)
    .call(yAxis);

  // Add dots for each data point
  svg.selectAll(".dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("cx", d => xScale(d.Year))
    .attr("cy", d => yScale(d.Time))
    .attr("r", 5)
    .attr("data-xvalue", d => d.Year.getFullYear())
    .attr("data-yvalue", d => d.Time)
    .style("fill", d => d.Doping ? "orange" : "blue")
    .on("mouseover", (event, d) => {
      tooltip.style("visibility", "visible")
        .attr("data-year", d.Year.getFullYear())
        .html(`${d.Name}: ${d.Nationality}<br>Year: ${d.Year.getFullYear()}, Time: ${d3.timeFormat("%M:%S")(d.Time)}<br>${d.Doping ? d.Doping : "No doping allegations"}`)
        .style("left", (event.pageX + 5) + "px")
        .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", () => {
      tooltip.style("visibility", "hidden");
    });
});
