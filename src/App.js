import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import './App.css';
import Home from './Pages/HomePage/Home/Home';
import About from './Pages/About/About';
import Navigation from './Pages/Shared/Navigation/Navigation';
import NotFound from './Pages/NotFound/NotFound';
import Resume from './Pages/Resume/Resume';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router >
    </div >
  );
}

export default App;
