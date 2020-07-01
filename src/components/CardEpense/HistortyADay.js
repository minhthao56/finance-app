import React from "react";
import { useSelector } from "react-redux";

export default function HistortyADay(props) {
  const { data } = props;
  const DarkMode = useSelector((state) => state.DarkMode);
  const CheckLogin = useSelector((state) => state.CheckLogin);
  return (
    <div>
      {data.map((d) => {
        return (
          <div className="container-price-card">
            <div
              className={
                DarkMode
                  ? "category-icon category-expense-icon icon-card-expense dark-category-icon"
                  : "category-icon category-expense-icon icon-card-expense"
              }
            >
              <div className={"icon category-color" + d.color}>
                <i className={d.className}></i>
              </div>
              <span>{d.title}</span>
            </div>
            <span>
              {d.amount}
              {CheckLogin.data && CheckLogin.data.defaultCurrency}
            </span>
          </div>
        );
      })}
    </div>
  );
}
