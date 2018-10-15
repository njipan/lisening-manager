import React from "react";
import InsertAudio from "./InsertAudio";
import Audios from "./Audios";

export default class Category extends React.Component {
  render() {
    return (
      <React.Fragment>
        <InsertAudio />
        <Audios />
      </React.Fragment>
    );
  }
}
