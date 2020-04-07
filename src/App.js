import React from 'react';
import './App.css';
import Navigation from "./components/Navigation"
import Box from "./components/Box"
import Buttons from "./components/Buttons"
// import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="app">
         <Navigation/>
         <Box/>
         <Buttons/>
    </div>
  );
}

export default App;
