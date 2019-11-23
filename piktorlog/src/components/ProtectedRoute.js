import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ isAuth, children, ...rest }) => {
  return (
    <Route {...rest}>
      {!isAuth
        ? <Redirect to="/login" />
        : children}
    </Route>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    isAuth: !!currentUser
  }
};

export default connect(mapStateToProps)(ProtectedRoute);