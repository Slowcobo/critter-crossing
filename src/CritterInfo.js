import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles({
  critterImage: {
    width: "100%",
  },
});

export default function CritterInfo({
  critter,
  critters,
  getCritter,
  showCritter,
  closeCritter,
}) {
  const classes = useStyles();
  const displayName =
    critter.name["name-USen"].charAt(0).toUpperCase() +
    critter.name["name-USen"].slice(1);

  const getNextCritter = (id) => {
    let index = id === critters.length ? 1 : critter.id + 1;
    getCritter(index);
  };

  const getPreviousCritter = (id) => {
    let index = id === 1 ? critters.length : id - 1;
    getCritter(index);
  };

  return (
    <Dialog
      open={showCritter}
      onClose={closeCritter}
      aria-labelledby="critter-name"
      aria-describedby="critter-description"
    >
      <DialogTitle id="critter-name">{displayName}</DialogTitle>
      <DialogContent>
        <img
          className={classes.critterImage}
          src={critter["image_uri"]}
          alt={displayName}
        />
        <DialogContentText id="critter-description">
          {critter["museum-phrase"]}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => getPreviousCritter(critter.id)} color="primary">
          Previous
        </Button>
        <Button onClick={() => getNextCritter(critter.id)} color="primary">
          Next
        </Button>
        <Button onClick={closeCritter} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
