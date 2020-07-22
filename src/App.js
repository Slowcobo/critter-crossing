import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CritterProvider } from "./contexts/CritterContext";
import { OptionsProvider } from "./contexts/OptionsContext";
import Topbar from "./Topbar";
import CritterApp from "./CritterApp";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <CritterProvider>
      <OptionsProvider>
        <div className={classes.root}>
          <Topbar />
          <CritterApp />
        </div>
      </OptionsProvider>
    </CritterProvider>
  );
}

export default App;
