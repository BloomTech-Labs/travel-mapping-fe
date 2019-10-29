import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './views/Landing';

function App() {
  return (
    <Router>
      <Route exact path='/' component={LandingPage} />
    </Router>
  );
}

export default App;
