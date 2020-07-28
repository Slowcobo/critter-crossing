import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { CritterProvider } from "./contexts/CritterContext";
import { OptionsProvider } from "./contexts/OptionsContext";
import theme from "./Theme";
import Topbar from "./Topbar";
import CritterApp from "./CritterApp";

function App() {
  return (
    <CritterProvider>
      <OptionsProvider>
        <ThemeProvider theme={theme}>
          <Topbar />
          <CritterApp />
        </ThemeProvider>
      </OptionsProvider>
    </CritterProvider>
  );
}

export default App;
