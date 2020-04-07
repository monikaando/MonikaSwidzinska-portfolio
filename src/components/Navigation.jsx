import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navigation.scss"

const Navigation = () => {
    return (
        // <div className="navbar">   
        // <div className="menu stroke">
        //     <ul>    
        //         <li><NavLink to ="/">Home</NavLink></li>
        //         <li><NavLink to ="/">CV</NavLink></li>
        //         <li><NavLink to ="/">Projects</NavLink></li>
        //         <li><NavLink to ="/">Contact</NavLink></li>
        //     </ul>
        // </div>
        // <div className="logo">
        //         <img src="https://res.cloudinary.com/mokaweb/image/upload/v1586104328/MokaWeb-images/Moka_Web_logo_white.png" alt="MokaWeb_logo"/>
        // </div>  
        // </div>
        <div id="menu">
  <input type="checkbox" id="menu-toggle"/>
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
