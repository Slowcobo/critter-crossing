import React, { useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { CritterContext } from "./contexts/CritterContext";
import { OptionsContext } from "./contexts/OptionsContext";
import Navbar from "./Navbar";
import CritterOptions from "./CritterOptions";
import CritterList from "./CritterList";
import CritterInfo from "./CritterInfo";
import CritterCollection from "./CritterCollection";

import critterIcon from "./icons/critter_icon.png";

const useStyles = makeStyles((theme) => ({
  temp: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
  },
  tempText: {
    width: "75%",
    color: theme.palette.common.white,
  },
  heading: {
    backgroundColor: theme.palette.primary.light,
    borderBottom: "1px solid rgba(0, 0, 0, .2)",
    minHeight: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: theme.spacing(2),
  },
}));

const Accordion = withStyles({
  root: {
    // border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    borderBottom: "1px solid rgba(0, 0, 0, .2)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
}))(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CritterApp() {
  const { critters } = useContext(CritterContext);
  const { critterType } = useContext(OptionsContext);
  const [currentCritter, setCurrentCritter] = useState();
  const [showCritterInfo, setShowCritterInfo] = useState(false);
  const [showCollection, setShowCollection] = useState(false);

  const classes = useStyles();

  const getCritter = (critterId) => {
    setCurrentCritter(critters[critterType][critterId - 1]);
    setShowCritterInfo(true);
  };

  const closeCritterInfo = () => {
    setCurrentCritter();
    setShowCritterInfo(false);
  };

  const handleChange = () => {
    setShowCollection(!showCollection);
  };

  return (
    <Grid container justify="center">
      {/* Only render critter info if currentCritter has been selected */}
      {currentCritter && (
        <CritterInfo
          critter={currentCritter}
          getCritter={getCritter}
          showCritterInfo={showCritterInfo}
          closeCritterInfo={closeCritterInfo}
        />
      )}

      {/* App Explanation */}
      <Grid container item justify="center">
        <Grid item xs={12} lg={8}>
          <div className={classes.temp}>
            <img src={critterIcon} alt="" />
            <div className={classes.tempText}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid item xs={12} md={10} lg={8}>
        <Paper elevation={0}>
          {/* Hemisphere and Date Selection */}
          <Grid container item justify="center">
            <Grid item xs={12}>
              <Accordion defaultExpanded={true}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Options</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <CritterOptions />
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>

          {/* Toggle between List and Collection */}
          <Grid container item justify="center">
            <Grid item xs={12}>
              <div className={classes.heading}>
                Critters
                <Switch
                  checked={showCollection}
                  onChange={handleChange}
                  color="primary"
                  name="toggleCollection"
                  inputProps={{ "aria-label": "toggle collection" }}
                />
              </div>
              <Navbar />
            </Grid>
          </Grid>

          {/* List or Collection of current critters */}
          <Grid container item justify="center">
            <Grid item xs={12}>
              {showCollection ? (
                <CritterCollection />
              ) : (
                <CritterList getCritter={getCritter} />
              )}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
