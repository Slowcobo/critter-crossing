import React, { useState, createContext } from "react";

export const CritterContext = createContext();

export function CritterProvider(props) {
  const [critterType, setCritterType] = useState("bugs");
  const [date, setDate] = useState({
    month: new Date().getMonth() + 1,
    time: new Date().getHours(),
  });
  const changeCritterType = (type) => setCritterType(type);
  const changeDate = (date) => setDate(date);

  return (
    <CritterContext.Provider
      value={{ critterType, changeCritterType, date, changeDate }}
    >
      {props.children}
    </CritterContext.Provider>
  );
}
