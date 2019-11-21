import React, { useEffect } from 'react';
import * as Sentry from '@sentry/browser';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import Main from './pages/Main';
import login from './store/actions/login';
import logout from './store/actions/logout';
import { connect } from 'react-redux';
// import axios from 'axios';
// import address from './serverAddress';
// import ls from 'local-storage';
import checkLogin from './store/actions/checkLogin';

// Initialize Sentry.io for exception monitoring.
Sentry.init({dsn: "https://2ec319603fba4c4aa4d8bc7f56b40e33@sentry.io/1811913"});

const environment = process.env.NODE_ENV || 'development';

// axios.get(`${address}/users`).then(({ data }) => console.log(data));

function App({ login, logout, checkLogin }) {
  
  useEffect(() => {
    // const user = ls.get('user');
    // console.log('LS', user);
    checkLogin();
  }, [checkLogin]);

  return (
    
    <Router>
      <button onClick={() => login('test1@test1.com', 'ThisIsATest#1234')}>login</button>
      <button onClick={logout}>logout</button>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/main' component={Main} />
      { 
        /* Used to verify Sentry integration (development only) */
        environment === 'development' && <button onClick={() => { throw new Error('Verify Sentry') }}>Break the world</button>
      }
    </Router>
  );
}

export default connect(() => ({}), { login, logout, checkLogin })(App);
