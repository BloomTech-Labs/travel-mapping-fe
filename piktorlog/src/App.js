import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './views/Landing';
import Main from './views/Main';

function App() {
  return (
    <Router>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/main' component={Main} />
    </Router>
  );
}

export default App;
