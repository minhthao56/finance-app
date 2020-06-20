import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import "./Chart.scss";
export default function LineChart() {
  const [dataChart, setDataChart] = useState({});
  const dataChartLine = () => {
    setDataChart({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Money",
          data: [1, 3, 5, 4, 5, 6, 1],
          backgroundColor: "rgba(150,150,150,0.8)",
          borderColor: "rgba(150,150,150,0.8)",
          borderWidth: 1,
          fill: false,
          lineTension: 0.4,
          borderDash: [1, 2, 3],
          pointBackgroundColor: "rgba(0,0,0,0)",
          pointBorderColor: "rgba(0,0,0,0)",
        },
        {
          label: "Income",
          data: [4, 6, 3, 6, 2, 2, 1],
          backgroundColor: "rgba(150,150,150,0.8)",
          borderColor: "rgba(150,150,150,0.8)",
          borderWidth: 1,
          fill: false,
          lineTension: 0.4,
          pointBackgroundColor: "rgba(0,0,0,0)",
          pointBorderColor: "rgba(0,0,0,0)",
        },
      ],
    });
  };
  useEffect(() => {
    dataChartLine();
  }, []);
  return (
    <div>
      <div className="chart-line-home">
        <Line
          data={dataChart}
          options={{
            responsive: true,
            title: { text: "Finance", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 5,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
}
