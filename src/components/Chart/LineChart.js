import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { useSelector } from "react-redux";

import "./Chart.scss";
export default function LineChart() {
  const [dataChart, setDataChart] = useState({});
  const [isShowAddMoney, SetIsShowAddMoney] = useState(false);
  const [moneyAdd, setMoneyAdd] = useState("");
  const CheckLogin = useSelector((state) => state.CheckLogin);

  const dataChartLine = () => {
    setDataChart({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Epense",
          data: [1, 2, 5, 6, 7, 8, 10],
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
  // handle Show Add Money
  const handleShowAddMoney = () => {
    SetIsShowAddMoney(!isShowAddMoney);
  };
  // handle Value Add Money
  const hanleVulueMoney = (e) => {
    const value = e.target.value;
    setMoneyAdd(value);
  };
  // handle Sub Add Money
  const handleSubAddMoney = (e) => {
    e.preventDefault();
    const inFoMoney = {
      amount: moneyAdd,
      idUser: CheckLogin.data._id,
    };
    axios
      .post("https://jdint.sse.codesandbox.io/finance/income", inFoMoney)
      .then((res) => {
        console.log(res.data);
        setMoneyAdd("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="chart-line-home">
      <div className="total-line-chart">
        <div className="coin">
          <i className="fas fa-coins"></i>
        </div>
        <div className="total">
          <div className="money-total">
            <h3>$12440.0</h3>
            <div onClick={handleShowAddMoney}>
              <i className="fas fa-plus"></i>
            </div>
            <form
              onSubmit={handleSubAddMoney}
              className={
                isShowAddMoney ? "display-add-money" : "hidden-add-money"
              }
            >
              <input
                type="text"
                placeholder="Money"
                onChange={hanleVulueMoney}
                value={moneyAdd}
              />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
          <span>TOTAL EXPENSE OF THIS MONTH</span>
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
