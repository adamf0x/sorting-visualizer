import React, { useState } from "react";
import { SortingVis } from "./SortingVis";
import "./App.css";
import { modal } from "./modal";
import Modal from "react-modal";
import styles from "./SortingVis.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "pink",
  },
};

Modal.setAppElement("#root");
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  return (
    <div className="App">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <h2 className="modalheader">Welcome to My Sorting Visualizer!</h2>
        <p className="modalheader">
          Select a sorting algorithm and array size from the drop down menu and
          slider at the top of the page.<br></br> Click generate array to
          generate new array elements or the visualize button to visualize
          sorting!
        </p>
        <div className="modalheader">
          <button className="action" onClick={() => setModalIsOpen(false)}>
            Click To Close Instructions
          </button>
        </div>
      </Modal>
      <SortingVis></SortingVis>
    </div>
  );
}

export default App;
