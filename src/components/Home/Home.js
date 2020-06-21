import React from "react";
import { Row, Col } from "antd";

import "../Home/Home.scss";

import ChartLine from "../Chart/LineChart";
import Expense from "../Expense/Expense";
import Nav from "../Nav/Nav";

export default function Home() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="container-home">
        <Row>
          <Col span={14}>
            <ChartLine />
          </Col>
          <Col span={10}>
            <Expense />
          </Col>
        </Row>
      </div>
    </div>
  );
}
