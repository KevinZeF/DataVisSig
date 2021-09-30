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
    // Hier komt je bar chart
  };

  return (
    <div className="chart">
      <svg ref={ref}></svg>
    </div>
  );
};
