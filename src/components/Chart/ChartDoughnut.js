import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

export default function ChartDoughnut() {
  const [dataChart, setDataChart] = useState({});

  const dataDoughnut = () => {
    setDataChart({
      datasets: [
        {
          data: [10, 20, 30],
        },
      ],
      labels: ["Red", "Yellow", "Blue"],
    });
  };
  useEffect(() => {
    dataDoughnut();
  }, []);
  return (
    <div>
      <Doughnut data={dataChart} />
    </div>
  );
}
