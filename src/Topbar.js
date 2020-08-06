import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles/TopbarStyles";

export default function Topbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.topbar} position="static">
      <Toolbar
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <Typography className={classes.title} variant="h1" color="inherit">
          Critter Crossing
        </Typography>
        {/* TODO: Add Search feature?? */}
      </Toolbar>
    </AppBar>
  );
}
