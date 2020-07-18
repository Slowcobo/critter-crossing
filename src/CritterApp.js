import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import { CritterContext } from "./contexts/CritterContext";
import CritterOptions from "./CritterOptions";
import CritterList from "./CritterList";
import CritterInfo from "./CritterInfo";
import CritterCollection from "./CritterCollection";

export default function CritterApp() {
  const { critterType, date } = useContext(CritterContext);
  const [critters, setCritters] = useState({ bugs: [], fish: [], sea: [] });
  const [currentCritter, setCurrentCritter] = useState();
  const [showCritterInfo, setShowCritterInfo] = useState(false);
  const [showCollection, setShowCollection] = useState(false);

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
    //Get critter data from API
    getCritterData();
  }, []);

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
          critters={critters[critterType]}
          getCritter={getCritter}
          showCritterInfo={showCritterInfo}
          closeCritterInfo={closeCritterInfo}
        />
      )}

      {/* Month Selection */}
      <Grid container item justify="center">
        <Grid item xs={11} md={6}>
          <CritterOptions />
        </Grid>
      </Grid>

      {/* Toggle List and Collection */}
      <Grid container item justify="center">
        <Grid item xs={12} md={6}>
          <Switch
            checked={showCollection}
            onChange={handleChange}
            color="primary"
            name="checkedB"
            inputProps={{ "aria-label": "primary checkbox" }}
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
            <CritterList
              critters={critters[critterType]}
              date={date}
              getCritter={getCritter}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
