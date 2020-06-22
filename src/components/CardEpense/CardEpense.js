import React from "react";
import { useSelector } from "react-redux";

import "./CardEpense.scss";

export default function CardEpense() {
  const Category = useSelector((state) => state.Category);
  return (
    <div className="container-card-expendse">
      <div className="icon-hearder-card-expense">
        <div>
          <i className="fas fa-history"></i>
        </div>
        <h3>History</h3>
      </div>
      <div className="time-expense">
        <div className="main-time-expense">
          <span id="date-main">22</span>
          <div className="sub-time">
            <span>Today</span>
            <span>06/2020</span>
          </div>
        </div>
        <span>64$</span>
      </div>
      <div>
        {Category.length ? (
          <div className="container-price-card">
            <div className="category-icon category-expense-icon icon-card-expense">
              <div className={"icon category-color" + Category[1]}>
                <i className={Category[2]}></i>
              </div>
              <span>{Category[0]}</span>
            </div>
            <span>64$</span>
          </div>
        ) : (
          <span>Nothing</span>
        )}
      </div>
    </div>
  );
}
