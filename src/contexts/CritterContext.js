import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const CritterContext = createContext();

export function CritterProvider(props) {
  const [critters, setCritters] = useState({ bugs: [], fish: [], sea: [] });

  useEffect(() => {
    // Get critter data from API
    const getCritterData = async () => {
      try {
        const bugRes = await axios.get("http://acnhapi.com/v1a/bugs/");
        const fishRes = await axios.get("http://acnhapi.com/v1a/fish/");
        const seaRes = await axios.get("http://acnhapi.com/v1a/sea/");

        const critterData = {
          bugs: bugRes.data,
          fish: fishRes.data,
          sea: seaRes.data,
        };
        setCritters(critterData);
      } catch {
        // TODO: Handle errors
      }
    };
    getCritterData();
  }, []);

  return (
    <CritterContext.Provider
      value={{
        critters,
      }}
    >
      {props.children}
    </CritterContext.Provider>
  );
}
