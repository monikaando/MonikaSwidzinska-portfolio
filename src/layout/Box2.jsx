import React from "react";
import "../styles/Box2.scss";

const Box2 = (props) => {
  return (
    <div>
      <div className="box2">{props.children}</div>
    </div>
  );
};

export default Box2;
