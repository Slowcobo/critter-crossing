import React, { useContext } from "react";
import { CritterContext } from "./contexts/CritterContext";
import { OptionsContext } from "./contexts/OptionsContext";
import CritterThumbnail from "./CritterThumbnail";
import useStyles from "./styles/CritterListStyles";

export default function CritterList({ getCritter }) {
  const { critters } = useContext(CritterContext);
  const { critterType, hemisphere, date } = useContext(OptionsContext);
  const classes = useStyles();

  // Check if critter is available for the month & hour
  const isAvailable = (critter) => {
    return (
      critter.availability[`month-array-${hemisphere}`].includes(date.month) &&
      critter.availability["time-array"].includes(date.time)
    );
  };

  return (
    <div className={classes.critterList}>
      {critters[critterType].map((critter) => (
        <CritterThumbnail
          id={critter.id}
          key={critter.id}
          icon={critter["icon_uri"]}
          name={critter.name["name-USen"]}
          available={isAvailable(critter)}
          getCritter={getCritter}
        />
      ))}
    </div>
  );
}
