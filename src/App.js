import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DashBoard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";

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
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
