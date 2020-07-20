import React, { useState, createContext } from "react";

export const CritterContext = createContext();

export function CritterProvider(props) {
  const [critterType, setCritterType] = useState("bugs");
  const [hemisphere, setHemisphere] = useState("northern");
  const [date, setDate] = useState({
    // Add 1 to date to align with critter month availability array
    month: new Date().getMonth() + 1,
    time: new Date().getHours(),
  });
  const changeCritterType = (type) => setCritterType(type);
  const changeHemisphere = (hemisphere) => setHemisphere(hemisphere);
  const changeDate = (date) => setDate(date);

  return (
    <CritterContext.Provider
      value={{
        critterType,
        changeCritterType,
        hemisphere,
        changeHemisphere,
        date,
        changeDate,
      }}
    >
      {props.children}
    </CritterContext.Provider>
  );
}
