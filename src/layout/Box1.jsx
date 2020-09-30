import React from "react";
import "../styles/Box1.scss";
import Buttons from "../components/Buttons";

const Box1 = (props) => {
  return (
    <div className="container-fluid">
      <div className="box1 row">{props.children}</div>
      <Buttons />
    </div>
  );
};

export default Box1;
