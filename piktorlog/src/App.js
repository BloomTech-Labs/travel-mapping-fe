import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Header from './components/organisms/Header.js';
import ActionButton from './components/organisms/ActionButton.js';
import Footer from './components/organisms/Footer.js';

import LandingPage from './pages/Landing.js';
import AppOverview from './pages/AppOverview.js';
import AlbumOverview from './pages/AlbumOverview.js';
import LoginPage from './pages/LoginPage';

const PageContent = styled.main`
  margin: 1rem auto;
  max-width: 1200px;
`;

function App() {
  const isLoggedIn = true;
  const [activeNavItem, setActiveNavItem] = useState('');
  const [actionToggle, setActionToggle] = useState(false);

  const handleNavItemClick = (e, { name }) => setActiveNavItem(name);
  const handleButtonClick = () => setActionToggle(!actionToggle);

  if (isLoggedIn) {
    return (
      <React.Fragment>
        <Header activeItem={activeNavItem} handleClick={handleNavItemClick} />

        <PageContent>
          <Switch>
            <Route exact path='/'>
              <AppOverview />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>/>
            <Route path='/albums/:id'>
              <AlbumOverview />
            </Route>
            {/* <Route path='/images/:id'>
                <ImageOverview />
              </Route> */}
          </Switch>
        </PageContent>

        <Footer />
        <ActionButton active={actionToggle} handleClick={handleButtonClick} />
      </React.Fragment>
    );
  } else return <LandingPage />;
}

const mapStateToProps = (state /* , ownProps */) => ({
  // ...computed data from state
  // ...optionally our own props
});
const mapDispatchToProps = {
  // ...action creators go here
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
