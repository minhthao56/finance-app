import React, { useState } from "react";
import { Row, Col } from "antd";

import { useSelector } from "react-redux";

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
import ChooseCurrency from "../ChooseCurrency/ChooseCurrency";
import ModalCategory from "../Expense/ModalCategory";

export default function Home(props) {
  const DarkMode = useSelector((state) => state.DarkMode);
  const [expanded, setExpanded] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  const {
    dataExpense,
    datatDataDoughnut,
    dataChatLine,
    dataChartBar,
    fetchDataBalance,
    fetchDataFetchExpense,
    fetchDataChartDoughnut,
    fetchDataChartLine,
    checkLogined,
  } = props;
  const hanleOpenCategory = () => {
    setExpanded(!expanded);
    setIsBlur(true);
  };
  const hanleCloseCategory = () => {
    setExpanded(!expanded);
    setIsBlur(false);
  };

  return (
    <div className={DarkMode ? "dark" : "light"}>
      {expanded ? (
        <ModalCategory hanleCloseCategory={hanleCloseCategory} />
      ) : null}
      <ChooseCurrency />
      <div id={isBlur ? "blur" : null}>
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
                checkLogined={checkLogined}
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
                hanleOpenCategory={hanleOpenCategory}
              />

              <CardEpense dataExpense={dataExpense} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
