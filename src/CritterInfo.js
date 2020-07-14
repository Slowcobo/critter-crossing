import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  critterImage: {
    width: "100%",
  },
});

export default function CritterInfo({
  critter,
  critters,
  getCritter,
  showCritterInfo,
  closeCritterInfo,
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

  const getMonth = (monthNum) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[monthNum - 1];
  };

  return (
    <Dialog
      open={showCritterInfo}
      onClose={closeCritterInfo}
      aria-labelledby="critter-name"
      aria-describedby="critter-description"
    >
      <DialogTitle id="critter-name">{displayName}</DialogTitle>
      <DialogContent>
        {/* Critter Image */}
        <img
          className={classes.critterImage}
          src={critter["image_uri"]}
          alt={displayName}
        />

        {/* Available Months and Times */}
        <ul>
          {critter.availability["month-array-northern"].map((month) => (
            <li key={month}>{getMonth(month)}</li>
          ))}
        </ul>
        <ul>
          {critter.availability["time-array"].map((time) => (
            <li key={time}>{time}</li>
          ))}
        </ul>

        <Typography>{critter.availability.location}</Typography>

        <Typography>{critter.availability.rarity}</Typography>

        <Typography>
          {critter.price} {critter["price-flick"]}
        </Typography>

        {/* Blathers Phrase */}
        <Typography>{critter["museum-phrase"]}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => getPreviousCritter(critter.id)} color="primary">
          Previous
        </Button>
        <Button onClick={() => getNextCritter(critter.id)} color="primary">
          Next
        </Button>
        <Button onClick={closeCritterInfo} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
