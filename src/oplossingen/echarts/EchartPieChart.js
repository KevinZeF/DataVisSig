import ReactEcharts from "echarts-for-react";

export const EchartPieChart = (props) => {
  const { data } = props;

  return (
    <ReactEcharts
      option={{
        series: [
          {
            data,
            type: "pie",
            roseType: true,
            label: {
              show: true,
            },
          },
        ],
      }}
    />
  );
};
