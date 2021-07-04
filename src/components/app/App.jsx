import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from '../Header';
import Footer from '../Footer';
import Home from '../pages/Home';
import Work from '../pages/Work';
import YourVoice from '../pages/YourVoice';
import Contact from '../pages/Contact';

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
        <Footer/>
      </Router>
    </>
  );
}
