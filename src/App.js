import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import CritterApp from "./CritterApp";
import "./App.css";
import { CritterProvider } from "./contexts/CritterContext";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
// }));

function App() {
  // const classes = useStyles();
  return (
    <CritterProvider>
      <Navbar />
      <CritterApp />
    </CritterProvider>
  );
}

export default App;
