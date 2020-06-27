import React from "react";

import "./CardTotal.scss";

export default function CardTotal() {
  return (
    <div className="container-card-total ">
      <div className="header-card-total">
        <h3>Total Expense</h3>
      </div>
      <div className="main-card-total">
        <div className="icon-card-total ">
          <i className="fas fa-funnel-dollar"></i>
        </div>
        <div className="money-card-total">
          <span>
            <b>Today</b>
          </span>
          <span className="money-sub-card">1000$</span>
        </div>
      </div>
    </div>
  );
}
