import ReactEcharts from "echarts-for-react";

export const EchartBarChart = (props) => {
  const { xAxis, yAxis } = props;

  return (
    <ReactEcharts
      option={{
        xAxis: {
          type: "category",
          data: xAxis,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: yAxis,
            type: "bar",
            label: {
              show: true,
            },
          },
        ],
      }}
    />
  );
};
