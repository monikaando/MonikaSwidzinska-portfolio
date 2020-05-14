import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Buttons.scss"

const Buttons = () => {
    return (
        <div className="buttons">
            <div>
             <Link to ="/projects">Projects</Link>
            </div>
            
            <div>
             <a href="https://res.cloudinary.com/mokaweb/image/upload/v1589302066/MokaWeb-CV/Monika_Swidzinska_Front_End_Developer_CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
            </div>

            <div>
             <Link to ="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default Buttons;
