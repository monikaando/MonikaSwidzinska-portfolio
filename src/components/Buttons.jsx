import React from 'react';
import { Link } from 'react-router-dom';
import "./Buttons.scss"

const Buttons = () => {
    return (
        <div className="buttons">
            <div>
             <Link to ="/projects">Projects</Link>
            </div>
            
            <div>
             <Link to ="/cv">CV</Link>
            </div>

            <div>
             <Link to ="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default Buttons;
