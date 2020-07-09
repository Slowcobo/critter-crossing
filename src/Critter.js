import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Critter() {
  const [critter, setCritter] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`http://acnhapi.com/v1/fish/${1}`);
      setCritter(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      <img src={critter.icon_uri} alt={critter["file-name"]} />
      {critter["file-name"]}
      <p>{critter["museum-phrase"]}</p>
    </div>
  );
}
