import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CritterContext } from "./contexts/CritterContext";
import CritterThumbnail from "./CritterThumbnail";

const useStyles = makeStyles((theme) => ({
  critterList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

export default function CritterList({ critters, getCritter }) {
  const { hemisphere, date } = useContext(CritterContext);
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
      {critters.map((critter) => (
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
