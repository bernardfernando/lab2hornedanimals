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

  function handleModal(beast) {
    setModal(!modal);
    setModalContent(beast);
  }

  function closeModal() {
    setModal(!modal);
    setModalContent({});
  }

  return (
    <div className="App">
      <Header />
      <Main data={data} handleModal={handleModal} />
      {modal && (
        <SelectedBeasts modalContent={modalContent} closeModal={closeModal} />
      )}
      <Footer />
    </div>
  );
}
export default App;
