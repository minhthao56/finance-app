import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";

import "../Home/Home.scss";
import "antd/dist/antd.css";

import ChartLine from "../Chart/LineChart";
import Expense from "../Expense/Expense";

export default function Home() {
  return (
    <div>
      <Row id="row-home">
        <Col span={14}>
          <ChartLine />
        </Col>
        <Col span={10}>
          <Expense />
        </Col>
      </Row>
    </div>
  );
}
