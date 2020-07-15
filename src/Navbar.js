import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useStyles from "./styles/NavbarStyles";
import { CritterContext } from "./contexts/CritterContext";

export default function Navbar() {
  const classes = useStyles();
  const { critterType, changeCritterType } = useContext(CritterContext);

  const handleChange = (event, newValue) => {
    changeCritterType(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit">
            Critter Crossing
          </Typography>
          {/* <Switch /> */}
          <Tabs
            value={critterType}
            onChange={handleChange}
            aria-label="critter types"
          >
            <Tab label="Bugs" value={"bugs"} />
            <Tab label="Fish" value={"fish"} />
            <Tab label="Sea" value={"sea"} />
          </Tabs>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
