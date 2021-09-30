import { D3BarChart } from "./components/d3charts/D3BarChart";
import { EchartBarChart } from "./components/echarts/EchartBarChart";
import { EchartPieChart } from "./components/echarts/EchartPieChart";
import { ChartJsBarChart } from "./components/chartjs/ChartJsBarChart";
import { browserUsage } from "./data/data";

function App() {
  const xAxis = browserUsage.map((data) => data.name);
  const yAxis = browserUsage.map((data) => data.value);

  return (
    <div className="App">
      <h2>Opdracht 1</h2>
      <ChartJsBarChart xAxis={xAxis} yAxis={yAxis} />
      <h2>Opdracht 2</h2>
      <EchartBarChart xAxis={xAxis} yAxis={yAxis} />
      <br />
      <EchartPieChart data={browserUsage} />
      <h2>Opdracht 3</h2>
      <D3BarChart data={browserUsage} />
    </div>
  );
}

export default App;
