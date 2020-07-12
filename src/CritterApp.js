import React, { useState, useEffect } from "react";
import axios from "axios";
import CritterList from "./CritterList";
import CritterInfo from "./CritterInfo";

export default function CritterApp() {
  const [mode, setMode] = useState("bugs");
  const [date, setDate] = useState(new Date());
  const [critters, setCritters] = useState({ bugs: [], fish: [], sea: [] });
  const [currentCritter, setCurrentCritter] = useState();
  const [showCritterInfo, setShowCritterInfo] = useState(false);

  useEffect(() => {
    const getCritterData = async () => {
      const bugRes = await axios.get("http://acnhapi.com/v1a/bugs/");
      const fishRes = await axios.get("http://acnhapi.com/v1a/fish/");
      const seaRes = await axios.get("http://acnhapi.com/v1a/sea/");

      const critterData = {
        bugs: bugRes.data,
        fish: fishRes.data,
        sea: seaRes.data,
      };
      setCritters(critterData);
    };
    getCritterData();
  }, []);

  const getCritter = (critterId) => {
    setCurrentCritter(critters[mode][critterId - 1]);
    setShowCritterInfo(true);
  };

  const closeCritterInfo = () => {
    setCurrentCritter();
    setShowCritterInfo(false);
  };

  return (
    <>
      {/* Only render critter info if currentCritter has been selected */}
      {currentCritter && (
        <CritterInfo
          critter={currentCritter}
          critters={critters[mode]}
          getCritter={getCritter}
          showCritterInfo={showCritterInfo}
          closeCritterInfo={closeCritterInfo}
        />
      )}
      {/* Show list of current critters */}
      <button onClick={() => setMode("bugs")}>Bugs</button>
      <button onClick={() => setMode("fish")}>Fish</button>
      <button onClick={() => setMode("sea")}>Sea</button>
      <CritterList
        critters={critters[mode]}
        date={date.getMonth()}
        getCritter={getCritter}
      />
    </>
  );
}
