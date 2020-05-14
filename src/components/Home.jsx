import React from 'react';
import "../styles/Home.scss"
import Techstack from "./Techstack"
import Box from "../layout/Box"


const Home = () => {
    return (
        <Box>
          <div className="image">
              <img src="https://res.cloudinary.com/mokaweb/image/upload/v1586288915/MokaWeb-images/MokaWeb_photo-removebg-preview_1_lneooj.png" alt="MokaWeb"/>
          </div>
          <div className="stack">
            <div className="name">
                <h1>Monika Świdzińska</h1>
                <h2>Front-end Developer</h2>
            </div>
              <Techstack/>
          </div>
        </Box>
    );
}

export default Home;
