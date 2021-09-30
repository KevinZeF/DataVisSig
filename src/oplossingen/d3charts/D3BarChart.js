import * as d3 from "d3";
import React, { useRef, useEffect } from "react";

export const D3BarChart = (props) => {
  const ref = useRef();
  const { data } = props;
  const margin = 50;
  const width = 1000 - 2 * margin;
  const height = 500 - 2 * margin;

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .style("border", "1px solid black");
  }, []);

  useEffect(() => {
    draw();
  }, [data]);

  const draw = () => {
    const svg = d3.select(ref.current);
    const chart = svg
      .append("g")
      .attr("transform", `translate(${margin}, ${margin})`);

    const yScale = d3
      .scaleLinear()
      .range([0, height])
      .domain([0, d3.max(data.map((d) => d.value))]);

    chart.append("g").call(d3.axisLeft(yScale));

    const xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d) => d.name))
      .padding(0.3);

    chart
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    chart
      .selectAll()
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.name))
      .attr("y", (d) => yScale(d.value))
      .attr("height", (d) => height - yScale(d.value))
      .attr("width", xScale.bandwidth());
  };

  return (
    <div className="chart">
      <svg ref={ref}></svg>
    </div>
  );
};
