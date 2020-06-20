import React from "react";
import Grid from "@material-ui/core/Grid";

import "../Home/Home.scss";

import ChartLine from "../Chart/LineChart";
import Expense from "../Expense/Expense";

export default function Home() {
  return (
    <div className="container-home">
      <Grid item xs={7}>
        <ChartLine />
      </Grid>
      <Grid item xs={5} id="grid-expense">
        <Expense />
      </Grid>
    </div>
  );
}
