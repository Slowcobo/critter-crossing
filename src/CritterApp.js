import React, { useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import { CritterContext } from "./contexts/CritterContext";
import { OptionsContext } from "./contexts/OptionsContext";
import CritterOptions from "./CritterOptions";
import CritterList from "./CritterList";
import CritterInfo from "./CritterInfo";
import CritterCollection from "./CritterCollection";

export default function CritterApp() {
  const { critters } = useContext(CritterContext);
  const { critterType } = useContext(OptionsContext);
  const [currentCritter, setCurrentCritter] = useState();
  const [showCritterInfo, setShowCritterInfo] = useState(false);
  const [showCollection, setShowCollection] = useState(false);

  const getCritter = (critterId) => {
    setCurrentCritter(critters[critterType][critterId - 1]);
    setShowCritterInfo(true);
  };

  const closeCritterInfo = () => {
    setCurrentCritter();
    setShowCritterInfo(false);
  };

  const handleChange = () => {
    setShowCollection(!showCollection);
  };

  return (
    <Grid container>
      {/* Only render critter info if currentCritter has been selected */}
      {currentCritter && (
        <CritterInfo
          critter={currentCritter}
          getCritter={getCritter}
          showCritterInfo={showCritterInfo}
          closeCritterInfo={closeCritterInfo}
        />
      )}

      {/* Hemisphere and Date Selection */}
      <Grid container item justify="center">
        <Grid item xs={11} md={6}>
          <CritterOptions />
        </Grid>
      </Grid>

      {/* Toggle between List and Collection */}
      <Grid container item justify="center">
        <Grid item xs={12} md={6}>
          <Switch
            checked={showCollection}
            onChange={handleChange}
            color="primary"
            name="toggleCollection"
            inputProps={{ "aria-label": "toggle collection" }}
          />
          Show Collection
        </Grid>
      </Grid>

      {/* List or Collection of current critters */}
      <Grid container item justify="center">
        <Grid item xs={12} md={6}>
          {showCollection ? (
            <CritterCollection />
          ) : (
            <CritterList getCritter={getCritter} />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
