import React from "react";
import "../assets/css/title.css";
import CapButton from "./CapButton";
import title from "../assets/img/title.svg";
import subtitle from "../assets/img/subtitle.svg";

function Title() {
  return (
    <div className="title">
      <img src={title} alt="matly title" width="300px" />
      <CapButton />
      <img src={subtitle} alt="matly subtitle" width="150px" />
    </div>
  );
}

export default Title;
