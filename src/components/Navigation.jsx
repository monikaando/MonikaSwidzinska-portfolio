import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navigation.scss"

const Navigation = () => {
    return (
        <div>
            <input type="checkbox" id="openSidebarMenu"/>
            <label for="openSidebarMenu" className="sidebarIconToggle">
                <div className="spinner top"></div>
                <div className="spinner middle"></div>
                <div className="spinner bottom"></div>
            </label>
            <div id="sidebarMenu">
                <ul className="menu">
                <li><NavLink to ="/">Home</NavLink></li>
                    <li><NavLink to ="/projects">Projects</NavLink></li>
                     <li><NavLink to ="/cv">CV</NavLink></li>
                    <li><NavLink to ="/contact">Contact</NavLink></li>
                    <li>
                        <a href="https://github.com/mswidzinska">
                             <img src="https://res.cloudinary.com/mokaweb/image/upload/v1586445839/MokaWeb-images/github.png" alt="Monika-Swidzinska-github"/>
                        </a>
                    </li>
                    <li>
                        <NavLink to="https://www.linkedin.com/in/monikaswidzinska/">
                            <img src="https://res.cloudinary.com/mokaweb/image/upload/v1586445839/MokaWeb-images/linkedin.png" alt="Monika-Swidzinska-linkedin"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="mailto:mswidzinska87@gmail.com">
                            <img src="https://res.cloudinary.com/mokaweb/image/upload/v1586445839/MokaWeb-images/email.png" alt="MokaWeb-email"/>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;
