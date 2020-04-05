import React from 'react';
import './App.css';
import Navigation from "./components/Navigation"
import Header from "./components/Header"
import Techstack from "./components/Techstack"

// import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div>
        <div className="hero">
            <Navigation/>
            <Header/>
        </div>
           <Techstack/>
    </div>
  );
}

export default App;
