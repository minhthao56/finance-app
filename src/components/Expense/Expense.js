import React, { useState, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import moment from "moment";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import { Lottie } from "@crello/react-lottie";
import animationData from "../../images/wallet-icon.json";

import "./Expense.scss";
import ModalCategory from "./ModalCategory";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 425,
  },
}));

export default function Expense() {
  const [expanded, setExpanded] = useState(false);
  const [valueAmount, setValueAmount] = useState("");
  const [valuaDes, setValuaDes] = useState("");

  const classes = useStyles();

  const Category = useSelector((state) => state.Category);
  const CheckLogin = useSelector((state) => state.CheckLogin);

  const now = new Date();
  const formatNow = moment(now).format("YYYY-MM-DDThh:mm");
  const [valueDate, setValueDate] = useState(formatNow);

  // Open and close category
  const hanleOpenCategory = () => {
    setExpanded(!expanded);
  };
  const hanleCloseCategory = () => {
    setExpanded(!expanded);
  };
  // value amount
  const hanldeValueAmount = (e) => {
    const value = e.target.value;
    setValueAmount(value);
  };
  // value Des
  const hanldeValueDes = (e) => {
    const value = e.target.value;
    setValuaDes(value);
  };
  // value Date
  const handleValueDate = (event) => {
    const value = event.target.value;
    setValueDate(value);
  };
  // handle Submit Expense
  const handleSubmitExpense = (event) => {
    event.preventDefault();

    const inFoExpense = {
      des: valuaDes,
      amount: valueAmount,
      time: valueDate,
      title: Category[0],
      color: Category[1],
      className: Category[2],
      idUser: CheckLogin.data._id,
    };
    axios
      .post("https://jdint.sse.codesandbox.io/finance/expense", inFoExpense)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container-form-expense">
      <div className="header-expense">
        <div className="icons-header-expense">
          <div>
            <i className="fas fa-money-bill-wave-alt"></i>
          </div>
          <h3>Expense</h3>
        </div>
      </div>
      <form onSubmit={handleSubmitExpense}>
        <div className="expense amount-expense">
          <input
            type="text"
            placeholder="0"
            value={valueAmount}
            onChange={hanldeValueAmount}
          />
          <span>$</span>
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
          <input
            type="text"
            placeholder="Description"
            value={valuaDes}
            onChange={hanldeValueDes}
          />
        </div>
        <div className="expense date-expense">
          <TextField
            id="datetime-local"
            type="datetime-local"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            value={valueDate}
            onChange={handleValueDate}
          />
        </div>
        <div className="expense wallet-expense">
          <Lottie config={{ animationData: animationData, loop: true }} />
        </div>
        <div className="bt-expense">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
