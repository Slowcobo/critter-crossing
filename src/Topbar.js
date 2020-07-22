import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import butterflyIcon from "./icons/butterfly_icon.png";

const useStyles = makeStyles((theme) => ({
  butterflyIcon: {
    marginRight: theme.spacing(2),
    width: "50px",
  },
  topbar: {
    backgroundColor: theme.palette.primary.dark,
    marginBottom: theme.spacing(2),
  },
  title: {
    letterSpacing: "0.05rem",
  },
}));

export default function Topbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.topbar} position="static">
      <Toolbar>
        <img className={classes.butterflyIcon} src={butterflyIcon} alt="" />
        <Typography className={classes.title} variant="h6" color="inherit">
          Critter Crossing
        </Typography>
        {/* TODO: Add Search feature?? */}
      </Toolbar>
    </AppBar>
  );
}
