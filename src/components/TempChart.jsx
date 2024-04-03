import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const TempChart = ({ data }) => {
  console.log(data);
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    if (data && data.length > 0 && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      new Chart(ctx, {
        type: "line",
        data: {
          labels: data.map((entry) => entry.date),
          datasets: [
            {
              label: "Temperature",
              data: data.map((entry) => entry.temperature),
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      });
    }
  }, [data]);
  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default TempChart;
