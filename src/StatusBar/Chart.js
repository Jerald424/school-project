import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

export default function ChartData({ inputData }) {
  const performance = inputData?.map((res) => res.performance);
  const name = inputData?.map((res) => res.name);
  const data = {
    labels: name,
    datasets: [
      {
        data: performance,
        backgroundColor: [
          "#FFC300",
          "#00B5E4",
          "#A100E4",
          "#1A9E00",
          "#F02400",
        ],
      },
    ],
  };
  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "performance",
      },
    },
  };
  return (
    <div>
      <div className='status-bar w3-animate-opacity'>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
