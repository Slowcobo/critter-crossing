import React from "react";
import Topbar from "./Topbar";
import CritterApp from "./CritterApp";
import { CritterProvider } from "./contexts/CritterContext";
import { OptionsProvider } from "./contexts/OptionsContext";

function App() {
  return (
    <CritterProvider>
      <OptionsProvider>
        <Topbar />
        <CritterApp />
      </OptionsProvider>
    </CritterProvider>
  );
}

export default App;
