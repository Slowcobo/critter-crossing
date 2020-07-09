import React, { useState, useEffect } from "react";
import CritterThumbnail from "./CritterThumbnail";
import axios from "axios";

export default function CritterList() {
  const [critters, setCritters] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://acnhapi.com/v1a/fish/");
      setCritters(response.data);
    };
    getData();
  }, []);

  return (
    <div>
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
