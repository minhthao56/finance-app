import React, { useState } from "react";
import axios from "axios";
import { Row, Col, Alert } from "antd";
import { Link, useHistory } from "react-router-dom";

import "antd/dist/antd.css";
import "../SignUp/SiguUp.scss";

import ImageFinance from "../../images/finance.png";
import Login from "../../images/Login.png";
import ForgotPass from "./ForgotPass";

export default function User() {
  const [mesErr, setMesErr] = useState("");
  const [isErrLogin, setIsErrLogin] = useState(false);

  const [valueEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [isShowForgotPass, setIsShowForgotPass] = useState(false);

  const [isShowErrCharacter, setIsShowErrCharacter] = useState(false);
  const [isErrEmail, setIsErrEmail] = useState(false);

  const validationCharacter = new RegExp(/^[a-zA-Z0-9!@#$%^&*()_+]+$/, "g");
  const validationEmail = new RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
    "g"
  );

  let history = useHistory();

  // Handle mail
  const handleChangeEmail = (event) => {
    const value = event.target.value;
    setValueEmail(value);
  };
  // Hanlde password
  const handleChangePasword = (event) => {
    const value = event.target.value;
    setValuePassword(value);
  };

  // Handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validationEmail.test(valueEmail) === false) {
      setIsErrEmail(true);
    } else if (validationCharacter.test(valuePassword) === false) {
      setIsShowErrCharacter(true);
    } else {
      const user = {
        email: valueEmail,
        password: valuePassword,
      };

      axios
        .post("https://jdint.sse.codesandbox.io/users/login", user)
        .then((res) => {
          setValueEmail("");
          setValuePassword("");
          if (res.data.token) {
            localStorage.setItem("token", res.data.token.toString());
          }
          history.push("/");
        })
        .catch((err) => {
          if (err.response === undefined) {
            console.log(err);
          } else if (err.response.status === 401) {
            setIsErrLogin(true);
            setMesErr(err.response.data.msg);
          }
        });
    }
  };
  // handle Close Forgot Pass
  const handleCloseForgotPass = () => {
    setIsShowForgotPass(!isShowForgotPass);
  };
  // handle Show Forgot Pass
  const handleShowForgotPass = () => {
    setIsShowForgotPass(!isShowForgotPass);
  };
  return (
    <div className="containe-signup">
      <Row className="row-signup">
        <Col xs={24} sm={24} md={24} lg={12} xl={12} className="col22-signup">
          <div className="col2-signup">
            <div className="contaiter-form">
              <div className="logo-signup">
                <img src={ImageFinance} alt="" />
                <h1>money</h1>
              </div>
              {isErrLogin === true ? (
                <Alert
                  style={{ marginBottom: 10 }}
                  message={mesErr}
                  type="error"
                  showIcon
                />
              ) : null}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  {isErrEmail === true ? (
                    <span className="msg-err">*Don't try to hack email</span>
                  ) : null}
                  <input
                    type="email"
                    name="email"
                    value={valueEmail}
                    placeholder="Email"
                    onChange={handleChangeEmail}
                    required
                  />
                </div>
                <div className="form-group">
                  {isShowErrCharacter === true ? (
                    <span className="msg-err">*Don't try to hack password</span>
                  ) : null}
                  <input
                    type="password"
                    name="password"
                    value={valuePassword}
                    placeholder="Password"
                    onChange={handleChangePasword}
                    required
                  />
                </div>
                <button type="submit">Login</button>
                <div className="forgot-pass">
                  <span onClick={handleShowForgotPass}>
                    I Forgot My Password
                  </span>
                </div>
              </form>
              <p className="policy">
                By signing up, you agree to our{" "}
                <b>Terms , Data Policy and Cookies Policy .</b>
              </p>
            </div>
            <div className="have-account">
              <span>
                Haven't an account?
                <Link to="/user/signup">
                  <b>Sign Up</b>
                </Link>
              </span>
              {isShowForgotPass ? (
                <ForgotPass handleCloseForgotPass={handleCloseForgotPass} />
              ) : null}
            </div>
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} lg={12} xl={12}>
          <div className="col1-signup">
            <img src={Login} alt="" className="wellcome-signup img-login" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
