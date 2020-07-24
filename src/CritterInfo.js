import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";
import NavigateBeforeOutlinedIcon from "@material-ui/icons/NavigateBeforeOutlined";
import { CritterContext } from "./contexts/CritterContext";
import { OptionsContext } from "./contexts/OptionsContext";
import DateSlider from "./styles/DateSliderStyle";
import { monthMarks, monthText, timeMarks, timeText } from "./helpers";
import useStyles from "./styles/CritterInfoStyles";

export default function CritterInfo({
  critter,
  getCritter,
  showCritterInfo,
  closeCritterInfo,
}) {
  const { critters } = useContext(CritterContext);
  const { critterType, hemisphere } = useContext(OptionsContext);
  const classes = useStyles();

  const displayName =
    critter.name["name-USen"].charAt(0).toUpperCase() +
    critter.name["name-USen"].slice(1);

  const getNextCritter = (id) => {
    let index = id === critters[critterType].length ? 1 : critter.id + 1;
    getCritter(index);
  };

  const getPreviousCritter = (id) => {
    let index = id === 1 ? critters[critterType].length : id - 1;
    getCritter(index);
  };

  return (
    <Dialog
      open={showCritterInfo}
      onClose={closeCritterInfo}
      aria-labelledby="critter-name"
      aria-describedby="critter-description"
    >
      <DialogTitle id="critter-name" className={classes.critterName}>
        {displayName}
        <IconButton
          className={classes.closeButton}
          aria-label="close-info"
          color="default"
          onClick={closeCritterInfo}
        >
          <CloseOutlinedIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container justify="center">
          {/* Critter Image */}
          <Grid container item xs={12} justify="center">
            <img
              className={classes.critterImage}
              src={critter["image_uri"]}
              alt={displayName}
            />
          </Grid>

          {/* Available Months and Times */}
          <Grid className={classes.date} container item xs={12}>
            <Typography className={classes.label} variant="overline">
              Available Months
            </Typography>
            <DateSlider
              value={critter.availability[`month-array-${hemisphere}`]}
              getAriaValueText={monthText}
              aria-labelledby="month-slider"
              step={1}
              marks={monthMarks}
              min={1}
              max={12}
              track={false}
              disabled
            />
          </Grid>

          <Grid className={classes.date} container item xs={12}>
            <Typography className={classes.label} variant="overline">
              Available Times
            </Typography>
            <DateSlider
              value={critter.availability["time-array"]}
              getAriaValueText={timeText}
              aria-labelledby="month-slider"
              step={1}
              marks={timeMarks}
              min={0}
              max={23}
              track={false}
              disabled
            />
          </Grid>

          <Grid item xs={12}>
            <Divider className={classes.divider} />
          </Grid>

          {/* Misc Info */}
          <Grid item xs={4}>
            <Typography className={classes.label} variant="overline">
              {critter.availability.location ? "Location" : "Shadow"}
            </Typography>
            <Typography>
              {critter.availability.location || critter.shadow}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography className={classes.label} variant="overline">
              {critter.availability.rarity ? "Rarity" : "Speed"}
            </Typography>
            <Typography>
              {critter.availability.rarity || critter.speed}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.label} variant="overline">
              Prices
            </Typography>

            <Typography>
              {critter.price}
              {critterType !== "sea" &&
                `, ${critter["price-flick"] || critter["price-cj"]} Bells`}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Divider className={classes.divider} />
          </Grid>

          {/* Blathers Phrase */}
          <Grid item xs={12}>
            <Typography className={classes.label} variant="overline">
              Blathers' Description
            </Typography>
            <Typography>{critter["museum-phrase"]}</Typography>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions className={classes.navButtons}>
        <IconButton
          aria-label="close-info"
          onClick={() => getPreviousCritter(critter.id)}
        >
          <NavigateBeforeOutlinedIcon />
        </IconButton>
        <IconButton
          aria-label="close-info"
          onClick={() => getNextCritter(critter.id)}
        >
          <NavigateNextOutlinedIcon />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
}
