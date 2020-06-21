import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DashBoard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">DashBoard</Link>
            </li>
            <li>
              <Link to="/user/login">Login</Link>
            </li>
            <li>
              <Link to="/user/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path={`/`} component={Home} />
          <Route exact path={`/dashboard`} component={DashBoard} />
          <Route exact path={`/user/signup`} component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}
