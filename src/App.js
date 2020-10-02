import React from "react";
import "./App.scss";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/projects" component={Projects}></Route>
    </div>
  );
}

export default App;
