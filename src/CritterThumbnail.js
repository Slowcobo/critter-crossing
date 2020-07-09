import React from "react";

export default function CritterThumbnail({ icon, name }) {
  return (
    <div>
      <img src={icon} />
      {name}
    </div>
  );
}
