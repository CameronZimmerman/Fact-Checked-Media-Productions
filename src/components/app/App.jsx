import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from '../Header';
import Home from '../Home';
import Work from '../Work';
import YourVoice from '../YourVoice';
import Contact from '../Contact';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Work">
            <Work />
          </Route>
          <Route exact path="YourVoice">
            <YourVoice />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
