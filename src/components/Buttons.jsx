import React from "react";
import { Link } from "react-router-dom";
import "../styles/Buttons.scss";

const Buttons = () => {
  return (
    <div className="buttons">
      <div>
        <Link to="/projects">Projects</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <a
          href="https://res.cloudinary.com/mokaweb/image/upload/v1589302066/MokaWeb-CV/Monika_Swidzinska_Front_End_Developer_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
      </div>

      <div>
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
