import React from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
//import { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './component/pages/About';
import Home from './component/pages/Home';
import Login from './component/auth/Login';
import Register from './component/auth/Register';
import Alert from './component/layout/Alert';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

export const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Alert></Alert>
            <Navbar/>
            <Switch>          
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/login' component={Login}></Route>
                <Route exact path='/register' component={Register}></Route>        
            </Switch>
          </Router> 
        </AlertState>
      </ContactState> 
    </AuthState>

  );
}

export default App;

