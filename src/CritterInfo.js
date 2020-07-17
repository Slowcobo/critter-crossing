import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  critterImage: {
    width: "100%",
  },
  miscInfo: {
    display: "flex",
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

  const displaySpecialPrice = () => {
    return critter["price-flick"] || critter["price-cj"];
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
        <Grid container justify="center">
          {/* Critter Image */}
          <Grid item>
            <img
              className={classes.critterImage}
              src={critter["image_uri"]}
              alt={displayName}
            />
          </Grid>

          {/* Available Months and Times */}
          <Grid item xs={12}>
            <Typography variant="overline">Available Months</Typography>
            <ul>
              {critter.availability["month-array-northern"].map((month) => (
                <li key={month}>{getMonth(month)}</li>
              ))}
            </ul>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="overline">Available Times</Typography>
            <ul>
              {critter.availability["time-array"].map((time) => (
                <li key={time}>{time}</li>
              ))}
            </ul>
          </Grid>

          {/* Misc Info */}
          <Grid item xs={4}>
            <Typography variant="overline">
              {critter.availability.location ? "Location" : "Shadow"}
            </Typography>
            <Typography>
              {critter.availability.location || critter.shadow}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="overline">
              {critter.availability.rarity ? "Rarity" : "Speed"}
            </Typography>
            <Typography>
              {critter.availability.rarity || critter.speed}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="overline">Prices</Typography>

            <Typography>
              {critter.price},
              {displaySpecialPrice &&
                (critter["price-flick"] || critter["price-cj"])}
            </Typography>
          </Grid>

          {/* Blathers Phrase */}
          <Grid item xs={12}>
            <Typography variant="overline">Blathers' Description</Typography>
            <Typography>{critter["museum-phrase"]}</Typography>
          </Grid>
        </Grid>
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
