import React from "react";
import "./CardTotal.scss";
import "../../weather-icons/css/weather-icons.css";
export default function CardRateMonth() {
  return (
    <div className="container-card-total card-month">
      <div className="header-card-total">
        <h3>Rate Month</h3>
      </div>
      <div className="main-card-total">
        <div className="icon-card-total">
          <i className="far fa-calendar-check"></i>
        </div>
        <div className="money-card-total">
          <span>
            <b>Increase</b>
          </span>
          <span className="money-sub-card">5%</span>
        </div>
      </div>
    </div>
  );
}
