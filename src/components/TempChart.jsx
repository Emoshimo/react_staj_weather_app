import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import colors from "../utils/colors";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TempChart = ({ data, label }) => {
  if (!data) {
    return null;
  }
  const chartData = {
    labels: data.map((entry) => entry.date),
    datasets: [
      {
        label: label,
        data: data.map((entry) => entry.value),
        borderColor: colors.chartColor,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 1,
      },
    ],
  };
  const chartOptions = {
    aspectRatio: 1.5,
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `5 Days ${label} Change Chart`,
        color: colors.text,
      },
    },
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "Date",
          color: colors.text,
        },
        ticks: {
          color: colors.text,
        },
      },
      y: {
        ticks: {
          color: colors.text,
        },
      },
    },
  };
  return (
    <div className="px-4">
      <Line options={chartOptions} data={chartData} />;
    </div>
  );
};

export default TempChart;
