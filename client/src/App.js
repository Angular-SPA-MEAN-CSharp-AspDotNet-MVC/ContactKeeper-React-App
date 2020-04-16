import React from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
//import { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './component/pages/About';
import Home from './component/pages/Home';

import ContactState from './context/ContactState';
export const App = () => {
  return (
    <ContactState>
      <Router>
        <Navbar/>
        <div className="App">My App</div>
        <Switch>          
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>          
        </Switch>
      </Router> 
    </ContactState>
  );
}

export default App;
