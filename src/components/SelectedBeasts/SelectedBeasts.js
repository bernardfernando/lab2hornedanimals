import React from "react";
import "./SelectedBeasts.css";

export default function SelectedBeasts({ modalContent, closeModal }) {
  return (
    <div className="selectedBeasts">
      <div className="sb-container">
        <img src={modalContent.image_url} alt={modalContent.title} />
        <h3>{modalContent.title}</h3>
        <p>{modalContent.description}</p>
        <span className="cross" onClick={closeModal}>
          X
        </span>
        <p>No of horns: {modalContent.horns}</p>
      </div>
    </div>
  );
}
