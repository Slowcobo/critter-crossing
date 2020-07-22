import React, { useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";

import { withStyles } from "@material-ui/core/styles";
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

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
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

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
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
})(MuiAccordionSummary);

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
    <Grid container>
      {/* Only render critter info if currentCritter has been selected */}
      {currentCritter && (
        <CritterInfo
          critter={currentCritter}
          getCritter={getCritter}
          showCritterInfo={showCritterInfo}
          closeCritterInfo={closeCritterInfo}
        />
      )}

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
          <Switch
            checked={showCollection}
            onChange={handleChange}
            color="primary"
            name="toggleCollection"
            inputProps={{ "aria-label": "toggle collection" }}
          />
          Show Collection
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
    </Grid>
  );
}
