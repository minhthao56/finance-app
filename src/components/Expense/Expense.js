import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import moment from "moment";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
// import { ReactComponent as Wallet } from "../../images/wallet.svg";

import "./Expense.scss";

import ModalCategory from "./ModalCategory";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 425,
  },
}));

export default function Expense() {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const Category = useSelector((state) => state.Category);
  const now = new Date();
  const formatNow = moment(now).format("YYYY-MM-DDThh:mm");

  const hanleOpenCategory = () => {
    setExpanded(!expanded);
  };
  const hanleCloseCategory = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="container-form-expense">
      <div className="header-expense">
        <i className="fas fa-money-check-alt"></i>
        <span>Expense</span>
      </div>
      <form>
        <div className="expense amount-expense">
          <input type="text" placeholder="0" />
          <i className="fas fa-dollar-sign"></i>
        </div>
        <div className="expense category-expense">
          <i
            className="fas fa-question-circle question-circle"
            onClick={hanleOpenCategory}
          ></i>

          {Category.length ? (
            <div className="category-icon category-expense-icon">
              <div className={"icon category-color" + Category[1]}>
                <i className={Category[2]}></i>
              </div>
              <span>{Category[0]}</span>
            </div>
          ) : (
            <span>Select category</span>
          )}
          {expanded ? (
            <ModalCategory hanleCloseCategory={hanleCloseCategory} />
          ) : null}
        </div>
        <div className="expense description-expense">
          <i className="fas fa-bars"></i>
          <input type="text" placeholder="Description" />
        </div>
        <div className="expense date-expense">
          <TextField
            id="datetime-local"
            type="datetime-local"
            defaultValue={formatNow}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="expense wallet-expense">
          <i className="fas fa-wallet"></i>
          <select placeholder="Choose Cash wallet">
            <option>Vallet 1</option>
            <option>Vallet 2</option>
          </select>
        </div>
        <div className="bt-expense">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
