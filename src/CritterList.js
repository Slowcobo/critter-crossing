import React, { useState, useEffect } from "react";
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
      <ul>
        {critters.map((critter) => (
          <li key={critter.id}>{critter.name["name-USen"]}</li>
        ))}
      </ul>
    </div>
  );
}
