import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { OptionsContext } from "./contexts/OptionsContext";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const { critterType, changeCritterType } = useContext(OptionsContext);
  const handleChange = (event, newValue) => {
    changeCritterType(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          className={classes.tabs}
          value={critterType}
          onChange={handleChange}
          aria-label="critter types"
          centered
        >
          <Tab label="Bugs" value={"bugs"} />
          <Tab label="Fish" value={"fish"} />
          <Tab label="Sea" value={"sea"} />
        </Tabs>
      </AppBar>
    </div>
  );
}
