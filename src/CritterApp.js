import React, { useState, useEffect } from "react";
import axios from "axios";
import CritterList from "./CritterList";
import CritterInfo from "./CritterInfo";

export default function CritterApp() {
  const [mode, setMode] = useState("fish");
  const [critters, setCritters] = useState([]);
  const [currentCritter, setCurrentCritter] = useState();
  const [showCritter, setShowCritter] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`http://acnhapi.com/v1a/${mode}/`);
      setCritters(response.data);
    };
    getData();
  }, [mode]);

  const getCritter = (critterId) => {
    setCurrentCritter(critters[critterId - 1]);
    setShowCritter(true);
  };

  const closeCritter = () => {
    setCurrentCritter();
    setShowCritter(false);
  };

  return (
    <>
      {/* Only render critter info if currentCritter has been selected */}
      {currentCritter && (
        <CritterInfo
          critter={currentCritter}
          critters={critters}
          getCritter={getCritter}
          showCritter={showCritter}
          closeCritter={closeCritter}
        />
      )}
      {/* Show list of current critters */}
      <button onClick={() => setMode("fish")}>Fish</button>
      <button onClick={() => setMode("sea")}>Sea</button>
      <button onClick={() => setMode("bugs")}>Bugs</button>
      <CritterList critters={critters} getCritter={getCritter} />
    </>
  );
}
