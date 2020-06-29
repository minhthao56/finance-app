import React, { useEffect, useState } from "react";
import "./CardTotal.scss";
export default function CardRateWenk(props) {
  const { dataChatLine } = props;

  const [dataSumWeek, setDataSumWeek] = useState(0);

  const totalExpenseWeek = () => {
    const sumWeek = dataChatLine.reduce((a, b) => {
      return a + b;
    }, 0);
    setDataSumWeek(sumWeek);
  };

  useEffect(() => {
    totalExpenseWeek();
  }, [dataChatLine]);

  return (
    <div className="container-card-total card-week">
      <div className="header-card-total">
        <h3>Total Axpense A Week</h3>
      </div>
      <div className="main-card-total">
        <div className="icon-card-total">
          <i className="fab fa-weebly"></i>
        </div>
        <div className="money-card-total">
          <span>
            <b>Week</b>
          </span>
          <span className="money-sub-card">{dataSumWeek}$</span>
        </div>
      </div>
    </div>
  );
}
