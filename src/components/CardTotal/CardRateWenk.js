import React from "react";
import "./CardTotal.scss";
export default function CardRateWenk() {
  return (
    <div className="container-card-total">
      <div className="header-card-total">
        <h3>Rate week</h3>
      </div>
      <div className="main-card-total">
        <div className="icon-card-total icon-rate-week">
          <i className="fab fa-weebly"></i>
        </div>
        <div className="money-card-total">
          <span>
            <b>Increase</b>
          </span>
          <span className="money-sub-card money-sub-week">10%</span>
        </div>
      </div>
    </div>
  );
}
