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
  const [collection, setCollection] = useState(
    JSON.parse(window.localStorage.getItem("collection")) || []
  );
  const [selected, setSelected] = useState([]);
  const classes = useStyles();

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

    // Save to local storage
    window.localStorage.setItem("collection", JSON.stringify(newCollection));

    //Reset selected
    setSelected([]);
  };

  const removeFromCollection = () => {
    //Remove selected critters from collection
    const newCollection = collection.filter(
      (critterId) => !selected.includes(critterId)
    );

    // Save new collection
    setCollection(newCollection);

    // Save to local storage
    window.localStorage.setItem("collection", JSON.stringify(newCollection));

    //Reset selected
    setSelected([]);
  };

  return (
    <>
      <button onClick={addToCollection}>Add to Collection</button>
      <button onClick={removeFromCollection}>Remove from Collection</button>
      <div className={classes.critterList}>
        {critters.map((critter) => (
          <CritterThumbnail
            id={critter.id}
            key={critter.id}
            icon={critter["icon_uri"]}
            name={critter.name["name-USen"]}
            selectCritter={selectCritter}
            selected={selected.includes(critter.id)}
            collected={collection.includes(critter.id)}
          />
        ))}
      </div>
    </>
  );
}
