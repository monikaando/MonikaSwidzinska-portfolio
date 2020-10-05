import React from "react";
import "../styles/Home.scss";
import Techstack from "./Techstack";
import Box1 from "../layout/Box1";

const Home = () => {
  return (
    <Box1>
      <div className="col">
        <div className="name">
          <h1>Monika Świdzińska</h1>
          <h5>Full Stack Developer with a focus on the <span class="badge badge-info">Front-End</span></h5> 
          <h5>Extensive <span class="badge badge-secondary">marketing</span> experience</h5>
        </div>
        <div className="mb-5">
          <Techstack />
        </div>
      </div>
    </Box1>
  );
};

export default Home;
