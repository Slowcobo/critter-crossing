import React, { useState, useEffect, useContext } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Typography from "@material-ui/core/Typography";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import { CritterContext } from "./contexts/CritterContext";
import { OptionsContext } from "./contexts/OptionsContext";
import CritterThumbnail from "./CritterThumbnail";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import useStyles from "./styles/CritterCollectionStyles";

export default function CritterCollection() {
  const [collection, setCollection] = useState(
    JSON.parse(window.localStorage.getItem("collection")) || {
      bugs: [],
      fish: [],
      sea: [],
    }
  );

  // Will open snackbar when selecting critters
  const [isSelecting, setIsSelecting] = React.useState(false);
  const { critters } = useContext(CritterContext);
  const { critterType } = useContext(OptionsContext);
  const [selected, setSelected] = useState([]);
  const classes = useStyles();

  // Close the snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsSelecting(false);
  };

  useEffect(() => {
    // Save collection to local storage
    window.localStorage.setItem("collection", JSON.stringify(collection));
    // Reset selected
    setSelected([]);
  }, [collection]);

  useEffect(() => {
    // Close snackbar when selected critters are cleared or deselected
    if (selected.length === 0) {
      setIsSelecting(false);
    } else {
      // Open snackbar when critter is selected
      setIsSelecting(true);
    }
  }, [selected]);

  useEffect(() => {
    // Prevent active selections from carrying over when critterType changes
    setSelected([]);
  }, [critterType]);

  const selectCritter = (critterId) => {
    // Check if critter is already selected
    if (selected.includes(critterId)) {
      // If so, filter it out
      setSelected(selected.filter((id) => id !== critterId));
    } else {
      // Add selected critter
      setSelected([...selected, critterId]);
    }
  };

  const addToCollection = () => {
    // Copy current collection
    const newCollection = collection[critterType];

    // Add selected critters to the collection
    selected.forEach(
      // Prevent repeat critters
      (critterId) => {
        if (!collection[critterType].includes(critterId))
          newCollection.push(critterId);
      }
    );

    // Save new collection
    setCollection({ ...collection, [critterType]: newCollection });
  };

  const removeFromCollection = () => {
    // Remove selected critters from collection
    const newCollection = collection[critterType].filter(
      (critterId) => !selected.includes(critterId)
    );

    // Save new collection
    setCollection({ ...collection, [critterType]: newCollection });
  };

  // Clear selected critters
  const clearSelected = () => {
    setSelected([]);
  };

  const getProgressComment = () => {
    const progress =
      collection[critterType].length / critters[critterType].length;
    if (progress === 1) {
      return "You caught them all! 🎉";
    } else if (progress > 0.74) {
      return "On the home stretch! 🙌";
    } else if (progress > 0.49) {
      return "Halfway there! 👏";
    } else if (progress > 0.24) {
      return "Keep up the good work! 😄";
    }
    return "Get out there and start catching! 😊";
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={isSelecting}
        onClose={handleClose}
      >
        <SnackbarContent
          classes={{ root: classes.snack, action: classes.actions }}
          className={classes.actions}
          action={
            <React.Fragment>
              <Button
                startIcon={<AddCircleOutlineOutlinedIcon />}
                onClick={addToCollection}
              >
                Add
              </Button>
              <Button
                startIcon={<RemoveCircleOutlineOutlinedIcon />}
                onClick={removeFromCollection}
              >
                Remove
              </Button>
              <Button startIcon={<ClearOutlinedIcon />} onClick={clearSelected}>
                Clear
              </Button>
            </React.Fragment>
          }
        />
      </Snackbar>

      <div className={classes.critterList}>
        {critters[critterType].map((critter) => (
          <CritterThumbnail
            id={critter.id}
            key={critter.id}
            icon={critter["icon_uri"]}
            name={critter.name["name-USen"]}
            selectCritter={selectCritter}
            selected={selected.includes(critter.id)}
            collected={collection[critterType].includes(critter.id)}
          />
        ))}
      </div>

      <div className={classes.tracker}>
        <Typography className={classes.trackerText}>
          {`You have collected ${collection[critterType].length} out of ${
            critters[critterType].length
          } ${
            critterType === "sea" ? `${critterType} critters` : critterType
          }. ${getProgressComment()}`}
        </Typography>
      </div>
    </>
  );
}
