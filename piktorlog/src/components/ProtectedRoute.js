import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ isAuth, children: Component, ...rest }) => {
  return (
    <Route {...rest}>
      {!isAuth
        ? <Redirect to="/login" />
        : <Component />}
    </Route>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    isAuth: !!currentUser
  }
};

export default connect(mapStateToProps)(ProtectedRoute);