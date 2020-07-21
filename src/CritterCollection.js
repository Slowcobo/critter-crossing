import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import { CritterContext } from "./contexts/CritterContext";
import { OptionsContext } from "./contexts/OptionsContext";
import CritterThumbnail from "./CritterThumbnail";

const useStyles = makeStyles((theme) => ({
  critterList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

export default function CritterCollection() {
  // Close the snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsSelecting(false);
  };

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

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={isSelecting}
        onClose={handleClose}
        action={
          <React.Fragment>
            <Button color="primary" onClick={addToCollection}>
              Add
            </Button>
            <Button color="secondary" onClick={removeFromCollection}>
              Remove
            </Button>
            <Button onClick={clearSelected}>Clear</Button>
          </React.Fragment>
        }
      />

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
    </>
  );
}
