import React, { useState, useContext } from "react";
import { Accordion } from "./OptionsAccordion";
import { AccordionSummary } from "./OptionsAccordion";
import { AccordionDetails } from "./OptionsAccordion";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { CritterContext } from "./contexts/CritterContext";
import { OptionsContext } from "./contexts/OptionsContext";
import CritterAppDescription from "./CritterAppDescription";
import Navbar from "./Navbar";
import CritterOptions from "./CritterOptions";
import CritterList from "./CritterList";
import CritterInfo from "./CritterInfo";
import CritterCollection from "./CritterCollection";
import useStyles from "./styles/CritterAppStyles";

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

      <Grid item xs={12} md={10} lg={7}>
        <Paper elevation={5}>
          {/* App Explanation */}
          <CritterAppDescription />

          {/* Hemisphere and Date Selection */}
          <Grid container item justify="center">
            <Grid item xs={12}>
              <Accordion defaultExpanded={true}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="options-content"
                  id="options-header"
                >
                  <Typography style={{ fontSize: "1.15rem" }}>
                    Options
                  </Typography>
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
                <Tooltip title="View Collection" arrow>
                  <Switch
                    checked={showCollection}
                    onChange={handleChange}
                    color="default"
                    name="toggleCollection"
                    inputProps={{ "aria-label": "toggle collection" }}
                  />
                </Tooltip>
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
