import React from "react";

export default function HistortyADay(props) {
  const { data } = props;
  return (
    <div>
      {data.map((d) => {
        return (
          <div className="container-price-card">
            <div className="category-icon category-expense-icon icon-card-expense">
              <div className={"icon category-color" + d.color}>
                <i className={d.className}></i>
              </div>
              <span>{d.title}</span>
            </div>
            <span>{d.amount}$</span>
          </div>
        );
      })}
    </div>
  );
}
