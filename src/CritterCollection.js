import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CritterThumbnail from "./CritterThumbnail";

const useStyles = makeStyles((theme) => ({
  critterList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

export default function CritterCollection({ date, critters, getCritter }) {
  const classes = useStyles();
  const [collection, setCollection] = useState([]);
  const [selected, setSelected] = useState([]);

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

  const isSelected = (critterId) => {
    return selected.includes(critterId);
  };

  const addToCollection = () => {
    //Copy current collection
    const newCollection = [...collection];

    //Add selected critters to the collection
    selected.forEach(
      // Prevent repeat critters
      (critterId) => {
        if (!collection.includes(critterId)) newCollection.push(critterId);
      }
    );

    // Save new collection
    setCollection(newCollection);

    //Reset selected
    setSelected([]);
  };

  return (
    <>
      <button onClick={addToCollection}>Add to Collection</button>
      <div className={classes.critterList}>
        {critters.map((critter) => (
          <CritterThumbnail
            id={critter.id}
            key={critter.id}
            icon={critter["icon_uri"]}
            name={critter.name["name-USen"]}
            selectCritter={selectCritter}
            selected={isSelected(critter.id)}
          />
        ))}
      </div>
    </>
  );
}
