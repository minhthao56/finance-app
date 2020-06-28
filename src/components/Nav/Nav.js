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
          <div className="weather-nav">
            <i className="wi wi-owm-800" id="icon-weather-nav"></i>
            <span>25</span>{" "}
            <i className="wi wi-celsius" id="icon-celsius-nav"></i>
          </div>
          <div>
            <input type="checkbox" className="checkbox" id="chk" />
            <label className="label" for="chk">
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
              <div className="ball"></div>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
