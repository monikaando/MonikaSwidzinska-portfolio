import React from 'react';
import './App.css';
import Navigation from "./components/Navigation"
import Logo from "./components/Logo"
// import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="hero">
     <Navigation/>
     <Logo/>
     {/* <Techstack/> */}
     {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects}/>
        <Route path="/cv" component={Cv}/>
         <Route path="/contact" component={Contact}/>
     </Switch> */}
    </div>
  );
}

export default App;
