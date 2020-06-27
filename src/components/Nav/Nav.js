import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../weather-icons/css/weather-icons.min.css";
import { Switch } from "antd";

import "./Nav.scss";
import ImageFinance from "../../images/finance.png";
export default function Nav() {
  const CheckLogin = useSelector((state) => state.CheckLogin);

  return (
    <nav>
      <div className="container-nav">
        <div className="logo-signup logo-nav">
          <img src={ImageFinance} id="logo-nav" />
          <h1>money</h1>
        </div>
        <div className="container-link-nav">
          <Switch defaultChecked size="small" />
          <div>
            <i className={"wi wi-owm-800"}></i>
            <span>25</span> <i className="wi wi-celsius"></i>
          </div>

          <Link className="link-nav" to="/">
            Home
          </Link>
          <Link className="link-nav" to="/user/login">
            <div className="container-profile">
              <div
                className="avatar-nav"
                style={{
                  backgroundImage: `url(${
                    CheckLogin.data && CheckLogin.data.avatarUrl
                  })`,
                }}
              ></div>
              <span>{CheckLogin.data && CheckLogin.data.name} / Sigu Out</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
