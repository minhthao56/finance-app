import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../../weather-icons/css/weather-icons.min.css";

import "./Nav.scss";
import ImageFinance from "../../images/finance.png";
import LogoForDarkMode from "../../images/time.png";
export default function Nav() {
  const CheckLogin = useSelector((state) => state.CheckLogin);
  const dark = JSON.parse(localStorage.getItem("dark"));

  const [darkMode, setDarkMode] = useState(dark || false);
  const dispatch = useDispatch();
  let history = useHistory();

  const handleDarkMode = (event) => {
    let value = event.target.checked;
    setDarkMode(value);
    dispatch({
      type: "DARK_MODE",
      action: value,
    });
    localStorage.setItem("dark", JSON.stringify(value));
  };
  const handleValueDarkModeLocal = () => {
    dispatch({
      type: "DARK_MODE",
      action: dark,
    });
  };

  //handle SignOut
  const handleSignOut = () => {
    localStorage.removeItem("token");
    history.push("/user/login");
    window.location.reload();
  };
  useEffect(() => {
    handleValueDarkModeLocal();
  }, []);
  return (
    <nav className={darkMode ? "nav dark-nav" : "nav"}>
      <div className="container-nav ">
        <div className="logo-signup logo-nav">
          <img
            src={darkMode ? LogoForDarkMode : ImageFinance}
            id="logo-nav"
            alt=""
          />
          <h1 className={darkMode ? "dart-logo-dark" : null}>money</h1>
        </div>
        <div className="container-link-nav">
          <Link className="link-nav" to="/">
            Home
          </Link>

          <div className="container-profile">
            <Link className="link-nav" to="/user/profile">
              <div
                className="avatar-nav"
                id={darkMode ? "dark-avatar-nav" : null}
                style={{
                  backgroundImage: `url(${
                    CheckLogin.data && CheckLogin.data.avatarUrl
                  })`,
                }}
              ></div>
            </Link>
            <Link className="link-nav" to="/user/profile">
              <span>{CheckLogin.data && CheckLogin.data.name}</span>
            </Link>
            <span onClick={handleSignOut} id="span-sign-out">
              {" "}
              / Sign Out
            </span>
          </div>

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
              onChange={handleDarkMode}
              checked={darkMode}
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
