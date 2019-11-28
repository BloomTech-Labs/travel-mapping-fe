import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route 
      render={props => !isAuth
        ? <Redirect to="/login" />
        : <Component {...props} />
      }
      {...rest}
    />
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    isAuth: !!currentUser
  }
};

export default connect(mapStateToProps)(ProtectedRoute);