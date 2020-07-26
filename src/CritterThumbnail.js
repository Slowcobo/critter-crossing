import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import useStyles from "./styles/CritterThumbnailStyles";

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
