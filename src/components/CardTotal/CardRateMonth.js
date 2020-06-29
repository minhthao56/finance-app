import React from "react";
import { useSelector } from "react-redux";
import "./CardTotal.scss";
import "../../weather-icons/css/weather-icons.css";
export default function CardRateMonth(props) {
  const Balance = useSelector((state) => state.Balance);

  return (
    <div className="container-card-total card-month">
      <div className="header-card-total">
        <h3>Total Expense A Month</h3>
      </div>
      <div className="main-card-total">
        <div className="icon-card-total">
          <i className="far fa-calendar-check"></i>
        </div>
        <div className="money-card-total">
          <span>
            <b>Month</b>
          </span>
          <span className="money-sub-card">{Balance[3]}$</span>
        </div>
      </div>
    </div>
  );
}
