import React from "react";
import "../styles/Box1.scss";
import Buttons from "../components/Buttons";

const Box1 = (props) => {
  return (
    <div>
      <div className="box1">{props.children}</div>
      <Buttons />
    </div>
  );
};

export default Box1;
