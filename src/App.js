import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import DashBoard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={`/`} component={Home} />
          <Route exact path={`/dashboard`} component={DashBoard} />
          <Route exact path={`/user/signup`} component={SignUp} />
          <Route exact path={`/user/login`} component={Login} />
        </Switch>
      </div>
    </Router>
  );
}
