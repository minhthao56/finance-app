import React from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";
import ImageFinance from "../../images/finance.png";
export default function Nav() {
  return (
    <nav>
      <div className="logo-signup logo-nav">
        <img src={ImageFinance} />
        <h1>money</h1>
      </div>
      <div className="container-link-nav">
        <Link className="link-nav" to="/">
          Home
        </Link>
        <Link className="link-nav" to="/dashboard">
          DashBoard
        </Link>
        <Link className="link-nav" to="/user/login">
          Login
        </Link>
        <Link className="link-nav" to="/user/signup">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
