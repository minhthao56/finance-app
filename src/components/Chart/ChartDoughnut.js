import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Progress } from "antd";

export default function ChartDoughnut(props) {
  const [dataChart, setDataChart] = useState({});
  const [percentAndColorChart, setPercentAndColorChart] = useState([]);
  const { datatDataDoughnut } = props;
  const backgroundColor = [
    "#008879",
    "#00C2AE",
    "#1BCBB8",
    "#3FD5C5",
    "#6BE1D4",
    "#1038CB",
    "#2E52D9",
    "#4F6FE3",
    "#738CEB",
    "#9FB2F4",
    "#F70075",
    "#FB107F",
    "#FD3C97",
    "#FD67AE",
    "#FE9AC9",
    "#8E54E8",
    "#A979F5",
    "#C4A1FB",
    "#E3D2FE",
  ];

  const dataDoughnut = () => {
    if (datatDataDoughnut.length !== 0) {
      const arr = [];
      const mapDataPercent = datatDataDoughnut.map((a) => {
        return a.percentSumAmont;
      });
      const mapDataTitle = datatDataDoughnut.map((a) => {
        return a.title;
      });

      for (let i = 0; i < mapDataPercent.length; i++) {
        for (let j = 0; j < mapDataPercent.length; j++) {
          if (i === j) {
            const a = {
              strokeColor: backgroundColor[j],
              percent: datatDataDoughnut[i].percentSumAmont,
              title: datatDataDoughnut[i].title,
              className: datatDataDoughnut[i].className,
              color: datatDataDoughnut[i].color,
            };
            arr.push(a);
          }
        }
      }
      setPercentAndColorChart(arr);

      setDataChart({
        datasets: [
          {
            data: mapDataPercent,
            backgroundColor: backgroundColor,
          },
        ],
        labels: mapDataTitle,
      });
    }
  };
  useEffect(() => {
    dataDoughnut();
  }, [datatDataDoughnut]);
  return (
    <div className="container-doughnut">
      <div className="main-chart-doughnut">
        <div style={{ width: 300 }}>
          {percentAndColorChart.map((data) => {
            return (
              <div className="detail-dought">
                <span>{data.title}</span>
                <Progress
                  percent={data.percent}
                  strokeColor={data.strokeColor}
                  size="small"
                  strokeWidth={3}
                />
              </div>
            );
          })}
        </div>

        <Doughnut
          data={dataChart}
          options={{
            responsive: true,
            legend: {
              display: false,
            },
            aspectRatio: 1,
          }}
        />
      </div>
    </div>
  );
}
