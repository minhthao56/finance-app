import React from "react";
import { Row, Col } from "antd";

import "../Home/Home.scss";

import ChartLine from "../Chart/LineChart";
import Expense from "../Expense/Expense";
import Nav from "../Nav/Nav";
import CardEpense from "../CardEpense/CardEpense";
import Currency from "../Currency/Currency";
import CardTotal from "../CardTotal/CardTotal";
import CardRateWenk from "../CardTotal/CardRateWenk";
import CardRateMonth from "../CardTotal/CardRateMonth";

export default function Home() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="container-home">
        <h2>Home</h2>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <CardTotal />
          </Col>
          <Col span={6}>
            <CardRateWenk />
          </Col>
          <Col span={6}>
            <CardRateMonth />
          </Col>
          <Col span={6}>
            <div>col4</div>
          </Col>
        </Row>
        <Row>
          <Col span={14} id="col1-home">
            <ChartLine />
          </Col>
          <Col span={10}>
            <Currency />
            <Expense />
            <CardEpense />
          </Col>
        </Row>
      </div>
    </div>
  );
}
