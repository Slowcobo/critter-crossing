import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import axios from "axios";
import CritterThumbnail from "./CritterThumbnail";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {},
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
    <GridList cellHeight="auto" className={classes.gridList} cols={16}>
      {critters.map((critter) => (
        <GridListTile key={critter.id} cols={1}>
          <CritterThumbnail
            key={critter.id}
            icon={critter["icon_uri"]}
            name={critter.name["name-USen"]}
          />
        </GridListTile>
      ))}
    </GridList>
  );
}
