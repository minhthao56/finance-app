import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import "../Home/Home.scss";

import ChartLine from "../Chart/LineChart";
import Expense from "../Expense/Expense";
import Nav from "../Nav/Nav";
import CardEpense from "../CardEpense/CardEpense";
import Currency from "../Currency/Currency";
import CardTotal from "../CardTotal/CardTotal";
import CardRateWenk from "../CardTotal/CardRateWenk";
import CardRateMonth from "../CardTotal/CardRateMonth";
import CardWeatherMini from "../CardTotal/CardWeatherMini";
import ChartDoughnut from "../Chart/ChartDoughnut";

export default function Home() {
  const [dataFinance, setDataFinance] = useState();
  const [dataExpense, setDataExpense] = useState([]);
  const [datatDataDoughnut, setDatatDataDoughnut] = useState([]);
  const [dataChatLine, setDataChartLine] = useState([]);
  const [dataChartBar, setDataChartBar] = useState([]);
  const dispatch = useDispatch();
  const DarkMode = useSelector((state) => state.DarkMode);

  const url = "https://pks85.sse.codesandbox.io/";

  //  check login
  const checkLogined = () => {
    const token = localStorage.getItem("token");
    axios
      .post(url + "users/checklogin", { token })
      .then((res) => {
        console.log("Ok");

        dispatch({
          type: "CHECK_LOGGED",
          data: res.data,
        });
        setDataFinance(res.data);
        fetchDataBalance(res.data._id);
        fetchDataFetchExpense(res.data._id);
        fetchDataChartDoughnut(res.data._id);
        fetchDataChartLine(res.data._id);
        fetchDataChartBar(res.data._id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // balance
  const fetchDataBalance = (id) => {
    const _id = dataFinance && dataFinance._id;

    axios
      .get(id ? url + "finance/balance/" + id : url + "finance/balance/" + _id)
      .then((res) => {
        dispatch({
          type: "BALANCE",
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // get expense
  const fetchDataFetchExpense = (id) => {
    const _id = dataFinance && dataFinance._id;
    axios
      .get(
        id
          ? url + "finance/get/expense/" + id
          : url + "finance/get/expense/" + _id
      )
      .then((res) => {
        setDataExpense(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // get data doughnut
  const fetchDataChartDoughnut = (id) => {
    const _id = dataFinance && dataFinance._id;
    axios
      .get(
        id
          ? url + "finance/get/doughnut/" + id
          : url + "finance/get/doughnut/" + _id
      )
      .then((res) => {
        setDatatDataDoughnut(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // get dataChatLine
  const fetchDataChartLine = (id) => {
    const _id = dataFinance && dataFinance._id;
    axios
      .get(
        id
          ? url + "finance/get/chartline/" + id
          : url + "finance/get/chartline/" + _id
      )
      .then((res) => {
        setDataChartLine(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // get dataChat Bar
  const fetchDataChartBar = (id) => {
    const _id = dataFinance && dataFinance._id;
    axios
      .get(
        id
          ? url + "finance/get/charbar/" + id
          : url + "finance/get/charbar/" + _id
      )
      .then((res) => {
        setDataChartBar(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    checkLogined();
  }, []);
  return (
    <div className={DarkMode ? "dark" : "light"}>
      <div>
        <Nav />
      </div>
      <div className="container-home">
        <h2 className={DarkMode ? "dark-hearder-home" : null}>Home</h2>
        <Row gutter={[16, 32]}>
          <Col span={6}>
            <CardTotal />
          </Col>
          <Col span={6}>
            <CardRateWenk dataChatLine={dataChatLine} />
          </Col>
          <Col span={6}>
            <CardRateMonth dataChartBar={dataChartBar} />
          </Col>
          <Col span={6}>
            <CardWeatherMini />
          </Col>
        </Row>
        <Row gutter={[16, 32]}>
          <Col span={14} id="col1-home">
            <ChartLine
              dataDataChatLine={dataChatLine}
              dataDataChartBar={dataChartBar}
            />
            <ChartDoughnut datatDataDoughnut={datatDataDoughnut} />
          </Col>
          <Col span={10}>
            <Currency />
            <Expense
              fetchDataBalance={fetchDataBalance}
              fetchDataFetchExpense={fetchDataFetchExpense}
              fetchDataChartDoughnut={fetchDataChartDoughnut}
              fetchDataChartLine={fetchDataChartLine}
            />

            <CardEpense dataExpense={dataExpense} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
