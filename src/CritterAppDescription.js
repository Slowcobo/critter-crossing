import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import critterBug from "./critterBug.png";
import critterFish from "./critterFish.png";
import critterSea from "./critterSea.png";
import useStyles from "./styles/CritterAppDescriptionStyles";

export default function CritterAppDescription() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.description}>
        <div className={classes.descriptionImages}>
          <img src={critterBug} />
          <img src={critterFish} />
          <img src={critterSea} />
        </div>

        <div className={classes.descriptionText}>
          <Typography variant="h1">
            This is an interactive Critterpedia application based on Animal
            Crossing: New Horizons.
          </Typography>
          <Divider style={{ backgroundColor: "white", marginBottom: "2rem" }} />
          <Typography variant="h2">
            Use the hemisphere selector along with the month and time sliders to
            view the available critters.
          </Typography>
          <Typography variant="h2">
            Click on a critter in the list to view the details for that critter.
          </Typography>
          <Typography variant="h2">
            Flip the switch to view and manage your personal collection.
          </Typography>
        </div>
      </div>
    </div>
  );
}
