import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../../weather-icons/css/weather-icons.min.css";

import "./Nav.scss";
import ImageFinance from "../../images/finance.png";
import LogoForDarkMode from "../../images/time.png";
export default function Nav() {
  const CheckLogin = useSelector((state) => state.CheckLogin);
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch({
      type: "DARK_MODE",
      action: darkMode,
    });
  };

  return (
    <nav className={darkMode ? "nav dark-nav" : "nav"}>
      <div className="container-nav ">
        <div className="logo-signup logo-nav">
          <img src={darkMode ? LogoForDarkMode : ImageFinance} id="logo-nav" />
          <h1 className={darkMode ? "dart-logo-dark" : null}>money</h1>
        </div>
        <div className="container-link-nav">
          <Link className="link-nav" to="/">
            Home
          </Link>
          <Link className="link-nav" to="/user/login">
            <div className="container-profile">
              <div
                className="avatar-nav"
                id={darkMode ? "dark-avatar-nav" : null}
                style={{
                  backgroundImage: `url(${
                    CheckLogin.data && CheckLogin.data.avatarUrl
                  })`,
                }}
              ></div>
              <span>{CheckLogin.data && CheckLogin.data.name} / Sigu Out</span>
            </div>
          </Link>
          <div
            className={
              darkMode ? "weather-nav dark-weather-nav" : "weather-nav"
            }
          >
            <i className="wi wi-owm-800" id="icon-weather-nav"></i>
            <span>25</span>{" "}
            <i className="wi wi-celsius" id="icon-celsius-nav"></i>
          </div>
          <div>
            <input
              type="checkbox"
              className="checkbox"
              id="chk"
              onClick={handleDarkMode}
            />
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
