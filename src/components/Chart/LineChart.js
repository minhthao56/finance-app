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
          label: "Epense",
          data: [1, 2, 5, 6, 7, 8, 10],
          borderColor: "rgba(87, 117, 145, 1)",
          borderWidth: 2,
          fill: false,
          lineTension: 0.4,
          pointBackgroundColor: "rgba(0,0,0,0)",
          pointBorderColor: "rgba(0,0,0,0)",
        },
        {
          label: "Icome",
          data: [1, 4, 6, 6, 9, 10, 14],
          borderColor: "rgba(196, 161, 251, 1)",
          borderWidth: 2,
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
    <div className="chart-line-home">
      <div className="total-line-chart">
        <i className="fas fa-coins"></i>
        <div className="total">
          <h3>$12440.0</h3>
          <span>TOTAL REVENUE OF THIS MONTH</span>
        </div>
      </div>
      <Line
        data={dataChart}
        options={{
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 5,
                  beginAtZero: true,
                  fontColor: "#aaa",
                },
                gridLines: {
                  display: true,
                  color: "rgba(225, 225, 225, 0.2)",
                  drawTicks: true,
                  zeroLineColor: "rgba(200, 200, 200, 0.5)",
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  fontColor: "#aaa",
                },
              },
            ],
          },
          legend: {
            display: true,
            position: "bottom",
            labels: {
              fontColor: "#aaa",
              fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            },
          },
        }}
      />
    </div>
  );
}
