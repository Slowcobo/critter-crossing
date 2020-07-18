import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  critterContainer: {
    width: "90px",
    height: "90px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    margin: "0.1rem",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e1e1e1",
    },
  },
  critter: {
    width: "70%",
    opacity: (props) =>
      props.available || props.available === undefined ? "1" : "0.1",
  },
  selected: {
    backgroundColor: "yellow",
  },
}));

export default function CritterThumbnail({
  id,
  icon,
  name,
  available,
  getCritter,
  selectCritter,
}) {
  const props = { available: available };
  const classes = useStyles(props);
  const displayName = name.charAt(0).toUpperCase() + name.slice(1);

  const handleClick = () => {
    if (getCritter) {
      getCritter(id);
    } else {
      selectCritter(id);
    }
  };

  return (
    <Tooltip title={displayName} arrow>
      <div className={classes.critterContainer} onClick={handleClick}>
        <img className={classes.critter} src={icon} alt={name} />
      </div>
    </Tooltip>
  );
}
