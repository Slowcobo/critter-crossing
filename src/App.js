import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Navbar";
import CritterApp from "./CritterApp";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Navbar />
      <Grid item xs={12} md={6}>
        <CritterApp />
      </Grid>
    </Grid>
  );
}

export default App;
