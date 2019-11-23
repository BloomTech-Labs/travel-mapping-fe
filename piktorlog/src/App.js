import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/organisms/Header.js';
import ActionButton from './components/organisms/ActionButton.js';
import Footer from './components/organisms/Footer.js';

import AppOverview from './pages/AppOverview.js';
import AlbumOverview from './pages/AlbumOverview.js';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const PageContent = styled.main`
  margin: 1rem auto;
  max-width: 1200px;
`;

function App() {
  const [activeNavItem, setActiveNavItem] = useState('');
  const [actionToggle, setActionToggle] = useState(false);

  const handleNavItemClick = (e, { name }) => setActiveNavItem(name);
  const handleButtonClick = () => setActionToggle(!actionToggle);

  return (
    <AppWrapper>
      <Header activeItem={activeNavItem} handleClick={handleNavItemClick} />

      <PageContent>
        <Switch>
          <ProtectedRoute exact path='/'>
            <AppOverview />
          </ProtectedRoute>
          <Route path="/login">
            <LoginPage />
          </Route>
          <ProtectedRoute path='/albums/:id'>
            <AlbumOverview />
          </ProtectedRoute>
        </Switch>
      </PageContent>

      <Footer />
      <ActionButton active={actionToggle} handleClick={handleButtonClick} />
    </AppWrapper>
  );
};

export default App;
