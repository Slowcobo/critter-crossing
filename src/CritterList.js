import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import CritterThumbnail from "./CritterThumbnail";

const useStyles = makeStyles((theme) => ({
  critterList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

export default function CritterList() {
  const classes = useStyles();
  const [critters, setCritters] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://acnhapi.com/v1a/fish/");
      setCritters(response.data);
    };
    getData();
  }, []);

  return (
    <div className={classes.critterList}>
      {critters.map((critter) => (
        <CritterThumbnail
          key={critter.id}
          icon={critter["icon_uri"]}
          name={critter.name["name-USen"]}
        />
      ))}
    </div>
  );
}
