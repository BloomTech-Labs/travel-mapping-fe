import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Header from './components/organisms/Header.js';
import ActionButton from './components/organisms/ActionButton.js';
import Footer from './components/organisms/Footer.js';

import AppOverview from './pages/AppOverview.js';
import AlbumOverview from './pages/AlbumOverview.js';
import LoginPage from './pages/LoginPage';
import Upload from './pages/Upload';
import CreateAlbum from './pages/CreateAlbum';
import EditAlbum from './pages/EditAlbum';
import CollaboratorsOverview from './pages/CollaboratorsOverview';
import UserMembershipManagement from './pages/UserMembershipManagement';
import EditMedia from './pages/EditMedia';

import ProtectedRoute from './components/ProtectedRoute';

import checkLogin from './store/actions/checkLogin';
import logout from './store/actions/logout';
import RequestDebug from './store/requests/RequestDebug';

import {getUserAlbums} from './store/actions/albums';

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

function App({ checkLogin, logout, showButton }) {
  const [actionToggle, setActionToggle] = useState(false);
  const handleButtonClick = () => setActionToggle(!actionToggle);

  const [checkingLogin, setCheckingLogin] = useState(true);

  const [redirectRoute, setRedirectRoute] = useState('/createAlbum');

  const handleRedirectToUploadMedia = () => {setRedirectRoute('/upload')};
  const handleRedirectToCreateAlbum = () => {setRedirectRoute('/createAlbum')};

  // console.log('props: ', props)
  
  useEffect(() => {
    checkLogin();
    setCheckingLogin(false);
    
  
  }, [checkLogin]);



  if (checkingLogin) {
    // probably replace this with a spinner or some nicer looking loading indicator
    return (
      <div>
        Loading
      </div>
    );
  }

  return (
    <AppWrapper>
      <Header />

      <PageContent>
        <Switch>
          
          <ProtectedRoute exact path='/'>
            <AppOverview />
          </ProtectedRoute>
          
          <Route path="/login">
            <LoginPage />
          </Route>
          
          <ProtectedRoute
            path='/albums/:id/edit'
            component={EditAlbum}
          />
          
          <ProtectedRoute 
            path='/albums/:id'
            // component = {AlbumOverview} 
            render = {(props) => <AlbumOverview 
              {...props} 
              handleRedirectToUploadMedia = {handleRedirectToUploadMedia} 
              handleRedirectToCreateAlbum= {handleRedirectToCreateAlbum}
              />}
          />

          {/* <ProtectedRoute path = '/albums/:id'>
            <AlbumOverview 
              handleRedirectToUploadMedia = {handleRedirectToUploadMedia}
            />
          </ProtectedRoute> */}

          <ProtectedRoute 
            path = '/media/:id/edit'
            // component = {EditMedia}
            render = {(props) => <EditMedia 
              {...props} 
              handleRedirectToUploadMedia = {handleRedirectToUploadMedia} 
              handleRedirectToCreateAlbum= {handleRedirectToCreateAlbum}
              />}
          />
          <ProtectedRoute path="/upload">
            <Upload />
          </ProtectedRoute>

          <ProtectedRoute path="/createAlbum">
            <CreateAlbum />
          </ProtectedRoute>

          <ProtectedRoute path = "/collaborators">
            <CollaboratorsOverview />
          </ProtectedRoute>

          <ProtectedRoute path = "/invites">
            <UserMembershipManagement />
          </ProtectedRoute>
        
        </Switch>
      </PageContent>

      <div>
        <Footer />
        <button onClick={logout}>
          Logout
        </button>
        <RequestDebug />
      </div>
      {
        showButton && (<Link to={redirectRoute}>
        <ActionButton active={actionToggle} handleClick={handleButtonClick} disabled ={showButton ? true:false} />
      </Link>)
      }
      
  
    </AppWrapper>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    showButton: !!currentUser
  }
};
//Missing map state to props bit
export default connect(mapStateToProps, { checkLogin, logout, getUserAlbums})(App);
