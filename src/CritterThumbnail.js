import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { darken } from "@material-ui/core/styles/colorManipulator";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  critterContainer: {
    height: "95px",
    width: "95px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(0.3),
    backgroundColor: (props) =>
      (props.selected && "#fff176") ||
      (props.collected && "#81c784") ||
      "#f1f1f1",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: (props) =>
        darken(
          (props.selected && "#fff176") ||
            (props.collected && "#81c784") ||
            "#f1f1f1",
          0.05
        ),
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
  selected,
  collected,
}) {
  const props = {
    available: available,
    selected: selected,
    collected: collected,
  };
  const classes = useStyles(props);
  const displayName = name.charAt(0).toUpperCase() + name.slice(1);

  const handleClick = () => {
    // If on critter list, get the critter
    if (getCritter) {
      getCritter(id);
    }
    // If on critter collection, select the critter
    else {
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
