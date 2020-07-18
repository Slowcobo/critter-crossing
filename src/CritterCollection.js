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

  const selectCritter = (id) => {
    const newSelection = [...selected, id];
    // TODO: Toggle selection if already selected
    setSelected(newSelection);
  };

  const isSelected = (id) => {
    return selected.includes(id);
  };

  const addToCollection = () => {
    //Copy current collection
    const newCollection = [...collection];

    //Add selected critters to the collection
    selected.every((id) => newCollection.push(id));
    setCollection(newCollection);
    // TODO: Check if critter exists

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
