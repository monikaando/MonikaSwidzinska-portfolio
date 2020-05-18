import React from "react";
import "../styles/Box2.scss";
import Buttons from "../components/Buttons";

const Box2 = (props) => {
  return (
    <div>
      <div className="box2">{props.children}</div>
      <Buttons />
    </div>
  );
};

export default Box2;
