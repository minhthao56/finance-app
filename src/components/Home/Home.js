import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const checkLogined = () => {
    axios
      .post("https://jdint.sse.codesandbox.io/users/checklogin", { token })
      .then((res) => {
        dispatch({
          type: "CHECK_LOGGED",
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    checkLogined();
  }, []);
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
            <CardWeatherMini />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={14} id="col1-home">
            <ChartLine />
            <ChartDoughnut />
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
