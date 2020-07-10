import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  critterContainer: {
    margin: "-0.05rem 0.1rem",
  },
  critter: {
    backgroundColor: "#f1f1f1",
    width: "100%",
  },
}));

export default function CritterThumbnail({ icon, name }) {
  const classes = useStyles();
  return (
    <Tooltip title={name} arrow>
      <div className={classes.critterContainer}>
        <img
          className={classes.critter}
          src={icon}
          alt={name}
          onClick={() => console.log(name)}
        />
      </div>
    </Tooltip>
  );
}
