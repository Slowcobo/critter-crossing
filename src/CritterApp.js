import React, { useState, useEffect } from "react";
import axios from "axios";
import CritterList from "./CritterList";

export default function CritterApp() {
  const [critters, setCritters] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://acnhapi.com/v1a/fish/");
      setCritters(response.data);
    };
    getData();
  }, []);

  return <CritterList critters={critters} />;
}
