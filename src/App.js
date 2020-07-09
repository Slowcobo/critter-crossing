import React from "react";
import CritterList from "./CritterList";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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
      <Grid item xs={12} md={7}>
        <CritterList />
      </Grid>
    </Grid>
  );
}

export default App;
