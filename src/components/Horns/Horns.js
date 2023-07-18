import React, { useState } from "react";
import "./Horns.css";

export default function Horns({ title, image_url, description, horns }) {
  return (
    <div className="hornes">
      <h2>{title}</h2>
      <img src={image_url} alt="{title}" />
      <p>Has three {horns}</p>
    </div>
  );
}
