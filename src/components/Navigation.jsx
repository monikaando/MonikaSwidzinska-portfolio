import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.scss";

const Navigation = () => {
  return (
    <div>
      <input type="checkbox" id="openSidebarMenu" />
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner top"></div>
        <div className="spinner middle"></div>
        <div className="spinner bottom"></div>
      </label>
      <div id="sidebarMenu">
        <ul className="menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <a
              href="https://res.cloudinary.com/mokaweb/image/upload/v1602147403/MokaWeb-CV/Monika_Swidzinska_Front_End_Developer_CV_b.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </li>
          <li>
            <a
              href="mailto:mswidzinska87@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
          <li className="noBorderBottom">
            <a
              className="hvr-grow"
              href="https://github.com/mswidzinska"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/mokaweb/image/upload/v1586780130/MokaWeb-icons/github_logo.png"
                alt="Monika-Swidzinska-github"
              />
            </a>

            <a
              className="hvr-grow"
              href="https://www.linkedin.com/in/monikaswidzinska/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/mokaweb/image/upload/v1586780038/MokaWeb-icons/linkedin.png"
                alt="Monika-Swidzinska-linkedin"
              />
            </a>

            <a
              className="hvr-grow"
              href="mailto:mswidzinska87@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/mokaweb/image/upload/v1586781204/MokaWeb-icons/email.png"
                alt="MokaWeb-email"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
