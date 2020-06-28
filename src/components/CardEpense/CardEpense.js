import React from "react";
import Moment from "react-moment";

import "./CardEpense.scss";

import HistortyADay from "./HistortyADay";

export default function CardEpense(props) {
  const { dataExpense } = props;
  return (
    <div className="container-card-expendse">
      <div className="icon-hearder-card-expense">
        <div>
          <i className="fas fa-history"></i>
        </div>
        <h3>History</h3>
      </div>
      <div className="main-container-time-expense">
        {dataExpense.map((data) => {
          return (
            <div className="container-time-expense">
              <div className="time-expense">
                <div className="main-time-expense">
                  <span id="date-main">
                    <Moment format="DD">{data.time}</Moment>
                  </span>
                  <div className="sub-time">
                    <span>
                      <Moment calendar>{data.time}</Moment>
                    </span>
                    <span>
                      {" "}
                      <Moment format="MM/YYYY">{data.time}</Moment>
                    </span>
                  </div>
                </div>
                <span>64$</span>
              </div>
              <HistortyADay data={data.data} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
