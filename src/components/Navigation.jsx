import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navigation.scss"

const Navigation = () => {
    return (
        <div className="navigation stroke">     
        <ul>    
            <li><NavLink to ="/">Home</NavLink></li>
            <li><NavLink to ="/">CV</NavLink></li>
            <li><NavLink to ="/">Projects</NavLink></li>
            <li><NavLink to ="/">Contact</NavLink></li>
        </ul>
        </div>
    );
}

export default Navigation;
