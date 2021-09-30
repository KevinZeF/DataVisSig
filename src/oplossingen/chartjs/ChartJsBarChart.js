import { Bar } from "react-chartjs-2";

export const ChartJsBarChart = (props) => {
  const { xAxis, yAxis } = props;

  return (
    <Bar
      data={{
        datasets: [
          {
            type: "bar",
            data: yAxis,
            label: "browsers",
          },
        ],
        labels: xAxis,
      }}
    />
  );
};
