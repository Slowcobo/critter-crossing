import React, { useState, createContext } from "react";

export const CritterContext = createContext();

export function CritterProvider(props) {
  const [critterType, setCritterType] = useState("bugs");
  const changeCritterType = (type) => setCritterType(type);

  return (
    <CritterContext.Provider value={{ critterType, changeCritterType }}>
      {props.children}
    </CritterContext.Provider>
  );
}
