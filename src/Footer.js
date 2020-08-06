import React from "react";
import critterBugFooter from "./critterBugFooter.png";
import critterFishFooter from "./critterFishFooter.png";
import critterSeaFooter from "./critterSeaFooter.png";

export default function Footer() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={critterBugFooter} style={{ width: "10%" }} />
        <img src={critterFishFooter} style={{ width: "10%" }} />
        <img src={critterSeaFooter} style={{ width: "10%" }} />
      </div>
    </div>
  );
}
