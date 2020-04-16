import React from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
import { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './component/pages/About';
import Home from './component/pages/Home';


export const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar/>
        <div className="App">My App</div>
        <Switch>          
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>          
        </Switch>
      </Router> 
    </Fragment>
  );
}

export default App;
