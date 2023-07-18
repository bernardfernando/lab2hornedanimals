import React, { useState } from "react";
import "./HornedBeast.css";

export default function HornedBeasts({ title, image_url, description }) {
  const [fav, setfav] = useState(0);

  function handleFav() {
    setfav(fav + 1);
  }

  return (
    <div className="hornedBeast-container">
      <h2>{title}</h2>
      <img src={image_url} alt={title} />
      <p>{description}</p>
      <p>
        <span className="heart" onClick={handleFav}>
          ❤️
        </span>
        {fav}
      </p>
    </div>
  );
}
