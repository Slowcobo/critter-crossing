import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { OptionsContext } from "./contexts/OptionsContext";
import useStyles from "./styles/NavbarStyles";

export default function Navbar() {
  const classes = useStyles();
  const { critterType, changeCritterType } = useContext(OptionsContext);

  const handleChange = (event, newValue) => {
    changeCritterType(newValue);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              Critter Crossing
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
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
    </>
  );
}
