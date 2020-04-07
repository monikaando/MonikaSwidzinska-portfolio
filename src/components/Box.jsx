import React from 'react';
import "./Box.scss"
import Techstack from "./Techstack"


const Box = () => {
    return (
        <div className="box">
          <div>
              <img src="https://res.cloudinary.com/mokaweb/image/upload/v1586288915/MokaWeb-images/MokaWeb_photo-removebg-preview_1_lneooj.png" alt="MokaWeb"/>
          </div>
          <div>
            <div className="name">
                <h1>Monika Świdzińska</h1>
                <h2>Front-end Developer</h2>
            </div>
              <Techstack/>
          </div>
        </div>
    );
}

export default Box;
