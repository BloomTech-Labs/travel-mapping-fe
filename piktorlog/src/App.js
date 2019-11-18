import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Header from './components/organisms/Header.js';
import ActionButton from './components/organisms/ActionButton.js';
import Footer from './components/organisms/Footer.js';

import LandingPage from './pages/Landing.js';
import AppOverview from './pages/AppOverview.js';
import AlbumOverview from './pages/AlbumOverview.js';

const PageContent = styled.main`
  margin: 1rem;
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
