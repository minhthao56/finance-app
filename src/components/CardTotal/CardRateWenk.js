import React from "react";
import "./CardTotal.scss";
export default function CardRateWenk() {
  return (
    <div className="container-card-total card-week">
      <div className="header-card-total">
        <h3>Rate week</h3>
      </div>
      <div className="main-card-total">
        <div className="icon-card-total">
          <i className="fab fa-weebly"></i>
        </div>
        <div className="money-card-total">
          <span>
            <b>Increase</b>
          </span>
          <span className="money-sub-card">10%</span>
        </div>
      </div>
    </div>
  );
}
