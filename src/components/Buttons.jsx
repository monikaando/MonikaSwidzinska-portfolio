import React from "react";
import { Link } from "react-router-dom";
import "../styles/Buttons.scss";

const Buttons = () => {
  return (
    <div className="buttons row">
      <div className="col-12 col-md-3">
        <Link to="/projects">Projects</Link>
      </div>
      <div className="col-12 col-md-3">
        <Link to="/about">About</Link>
      </div>
      <div className="col-12 col-md-3">
        <a
          href="https://res.cloudinary.com/mokaweb/image/upload/v1602155964/MokaWeb-CV/Monika_Swidzinska_Front_End_Developer_CV_sjstms.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
      </div>
      <div className="col-12 col-md-3">
        <a
          href="mailto:mswidzinska87@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Buttons;
