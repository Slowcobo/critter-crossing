import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CritterThumbnail from "./CritterThumbnail";

const useStyles = makeStyles((theme) => ({
  critterList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

export default function CritterList({ critters, getCritter }) {
  const classes = useStyles();

  return (
    <div className={classes.critterList}>
      {critters.map((critter) => (
        <CritterThumbnail
          id={critter.id}
          key={critter.id}
          icon={critter["icon_uri"]}
          name={critter.name["name-USen"]}
          getCritter={getCritter}
        />
      ))}
    </div>
  );
}
