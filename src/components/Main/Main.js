import React from "react";

import "./Main.css";

import HornedBeast from "../HornedBeast/HornedBeast";
//import data from "../../data.json";

export default function Main({ beastData, handleModal }) {
  console.log(beastData, `this is beast data`);
  return (
    <main>
      {beastData.map((beast, key) => {
        return (
          <HornedBeast
            key={beast._id}
            beastObject={beast}
            title={beast.title}
            imgUrl={beast.image_url}
            description={beast.description}
            horns={beast.horns}
            handleModal={handleModal}
          />
        );
      })}
    </main>
  );
}
