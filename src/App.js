/*import React from "react";*/

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import SelectedBeasts from "./components/SelectedBeasts/SelectedBeasts";
import data from "./data.json";

import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  // lab 4
  const [beastData, setBeastData] = useState(data);

  function handleModal(beast) {
    setModal(!modal);
    setModalContent(beast);
  }

  function closeModal() {
    setModal(!modal);
    setModalContent({});
  }

  function handleBeast(event) {
    let beastNum = parseInt(event.target.value);
    console.log(typeof beastNum);

    const filteredBeast = data.filter((beast) => beast.horns === beastNum);
    event.target.value === ""
      ? setBeastData(data)
      : setBeastData(filteredBeast);
  }

  return (
    <div className="App">
      <Header handleBeast={handleBeast} />

      <Main beastData={beastData} handleModal={handleModal} />

      {modal && (
        <SelectedBeasts modalContent={modalContent} closeModal={closeModal} />
      )}
      <Footer />
    </div>
  );
}
export default App;
