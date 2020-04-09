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
                </ul>
            </div>
        </div>
    );
}

export default Navigation;
