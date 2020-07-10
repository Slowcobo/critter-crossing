import React, { useState, useEffect } from "react";
import axios from "axios";
import CritterList from "./CritterList";
import CritterInfo from "./CritterInfo";

export default function CritterApp() {
  const [critters, setCritters] = useState([]);
  const [currentCritter, setCurrentCritter] = useState();
  const [showCritter, setShowCritter] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://acnhapi.com/v1a/fish/");
      setCritters(response.data);
    };
    getData();
  }, []);

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
          showCritter={showCritter}
          closeCritter={closeCritter}
        />
      )}

      {/* Show list of current critters */}
      <CritterList critters={critters} getCritter={getCritter} />
    </>
  );
}
