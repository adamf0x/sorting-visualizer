import React, { useState } from "react";
import "./App.css";
import "./SortingVis.css";
import { Slider } from "@material-ui/core";
import { Helmet } from "react-helmet";
import Modal from "react-modal";

export class modal extends React.Component {
  componentDidMount() {}
  render() {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    return (
      <>
        <Modal isOpen={true}>
          <h2>Sorting Visualizer Help</h2>
          <p>Body</p>
        </Modal>
      </>
    );
  }
}
