import React from "react";
import critterIcon from "./icons/critter_icon.png";
import useStyles from "./styles/CritterAppDescriptionStyles";

export default function CritterAppDescription() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.description}>
        <img src={critterIcon} alt="" />
        <div className={classes.descriptionText}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </div>
      </div>
    </div>
  );
}
