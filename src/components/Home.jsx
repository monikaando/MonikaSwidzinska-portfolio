import React from "react";
import "../styles/Home.scss";
import Techstack from "./Techstack";
import Box1 from "../layout/Box1";

const Home = () => {
  return (
    <Box1>
      <div className="image">
        <img
          src="https://res.cloudinary.com/mokaweb/image/upload/v1601310936/MokaWeb-images/Monika_Swidzinska.png"
          alt="Monika-Swidzinska"
        />
      </div>
      <div className="stack">
        <div className="name">
          <h1>Monika Świdzińska</h1>
          <h2>Front-end Developer</h2>
        </div>
        <Techstack />
      </div>
    </Box1>
  );
};

export default Home;
