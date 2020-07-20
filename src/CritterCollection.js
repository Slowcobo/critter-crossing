import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { OptionsContext } from "./contexts/OptionsContext";
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
    JSON.parse(window.localStorage.getItem("collection")) || {
      bugs: [],
      fish: [],
      sea: [],
    }
  );
  const { critterType } = useContext(OptionsContext);
  const [selected, setSelected] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    // Save collection to local storage
    window.localStorage.setItem("collection", JSON.stringify(collection));
    //Reset selected
    setSelected([]);
  }, [collection]);

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
    const newCollection = collection[critterType];

    //Add selected critters to the collection
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
    //Remove selected critters from collection
    const newCollection = collection[critterType].filter(
      (critterId) => !selected.includes(critterId)
    );

    // Save new collection
    setCollection({ ...collection, [critterType]: newCollection });
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
            collected={collection[critterType].includes(critter.id)}
          />
        ))}
      </div>
    </>
  );
}
