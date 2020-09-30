import React from "react";
import "../styles/Home.scss";
import Techstack from "./Techstack";
import Box1 from "../layout/Box1";

const Home = () => {
  return (
    <Box1>
      <div className="no-l-pad col-xl-5 d-none d-xl-block align-self-end">
        <img
          src="https://res.cloudinary.com/mokaweb/image/upload/v1601310936/MokaWeb-images/Monika_Swidzinska.png"
          alt="Monika-Swidzinska"
        />
      </div>
      <div className="col-xl-7">
        <div className="name">
          <h1>Monika Świdzińska</h1>
          <h2>Front-end Developer</h2>
        </div>
        <div className="row">
          <Techstack />
        </div>
      </div>
    </Box1>
  );
};

export default Home;
