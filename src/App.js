import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DashBoard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={`/`} component={Home} />
          <Route exact path={`/dashboard`} component={DashBoard} />
          <Route exact path={`/user/signup`} component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}
