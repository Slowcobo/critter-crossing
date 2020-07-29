import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { CritterProvider } from "./contexts/CritterContext";
import { OptionsProvider } from "./contexts/OptionsContext";
import theme from "./Theme";
import Topbar from "./Topbar";
import CritterApp from "./CritterApp";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <CritterProvider>
      <OptionsProvider>
        <div className="App">
          <ThemeProvider theme={theme}>
            <Topbar />
            <CritterApp />
            <Footer />
          </ThemeProvider>
        </div>
      </OptionsProvider>
    </CritterProvider>
  );
}

export default App;
