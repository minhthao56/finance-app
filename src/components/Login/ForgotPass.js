import React, { useState } from "react";
import axios from "axios";

import "./Forgot.scss";

export default function ForgotPass(props) {
  const [email, setEmail] = useState();
  const { handleCloseForgotPass } = props;

  // handle Value Email
  const handleValueEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  // handle Submit Fotgot Pass
  const handleSubmitFotgotPass = async (event) => {
    event.preventDefault();
    const forgotEmail = { email: email };
    const res = await axios.post("", forgotEmail);
    console.log(res.data);
    setEmail("");
  };
  return (
    <div className="container-form-fogot">
      <div className="main-form-fotgot ">
        <div className="container-header-forgot">
          <div>
            <i className="fas fa-question"></i>
          </div>
          <h3>Forgot Password</h3>
          <i
            className="fas fa-times icon-times"
            onClick={() => {
              return handleCloseForgotPass();
            }}
          ></i>
        </div>
        <div className="form-send-address">
          <form onSubmit={handleSubmitFotgotPass}>
            <input
              type="email"
              placeholder="Your email"
              onChange={handleValueEmail}
              value={email}
              required
            />
            <div className="action-forgot-pass">
              <button type="submit">Send</button>
              <button
                id="cancel-send-mail"
                type="button"
                onClick={() => {
                  return handleCloseForgotPass();
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
