import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import CritterApp from "./CritterApp";
import "./App.css";
import { CritterProvider } from "./contexts/CritterContext";
import { OptionsProvider } from "./contexts/OptionsContext";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
// }));

function App() {
  // const classes = useStyles();
  return (
    <CritterProvider>
      <OptionsProvider>
        <Navbar />
        <CritterApp />
      </OptionsProvider>
    </CritterProvider>
  );
}

export default App;
