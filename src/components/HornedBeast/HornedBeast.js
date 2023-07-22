import React, { useState } from "react";
import HornedBeast from "./HornedBeast.css";

export default function HornedBeasts({
  title,
  imgUrl,
  description,
  horns,
  handleModal,
  beastObject,
}) {
  const [fav, setfav] = useState(0);

  function handleFav() {
    setfav(fav + 1);
  }

  return (
    <div className="hornedBeast-container">
      <h2>{title}</h2>
      <p>click on image for a detailed view</p>
      <img src={imgUrl} alt={title} onClick={() => handleModal(beastObject)} />
      <p>{description}</p>
      <p>{horns}</p>
      <p>
        <span className="heart" onClick={handleFav}>
          ❤️
        </span>
        {fav}
      </p>
    </div>
  );
}
