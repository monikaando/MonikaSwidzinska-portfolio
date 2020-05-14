import React from 'react';
import './App.css';
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import Buttons from "./components/Buttons"
import {Route} from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Navigation/>
      <Route exact path="/" component={Home}></Route> 
      <Buttons/>
    </div>
  );
}

export default App;
