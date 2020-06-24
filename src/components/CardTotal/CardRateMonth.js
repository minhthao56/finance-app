import React from "react";
import "./CardTotal.scss";
import "../../weather-icons/css/weather-icons.css";
export default function CardRateMonth() {
  return (
    <div className="container-card-total">
      <div className="header-card-total">
        <h3>Rate Month</h3>
      </div>
      <div className="main-card-total">
        <div className="icon-card-total icon-card-month">
          <i className="far fa-calendar-check"></i>
        </div>
        <div className="money-card-total">
          <span>
            <b>Increase</b>
          </span>
          <span className="money-sub-card money-sub-month">5%</span>
        </div>
      </div>
    </div>
  );
}
