import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Message, Container } from 'semantic-ui-react';

import login from '../store/actions/login';
import register from '../store/actions/registration';
import LoginForm from '../components/molecules/LoginForm';
import RegisterForm from '../components/molecules/RegisterForm';

const LoginPage = ({ isAuth, login, register }) => {
  const [hasAccount, setHasAccount] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (isAuth) {
      history.push('/');
    }
  }, [isAuth, history]);

  return (
    <Container>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          {hasAccount
            ? <LoginForm login={login} />
            : <RegisterForm register={register} />}

          <Message>
            {hasAccount ? 'New around here?' : 'Already a member?'}
            <Button 
              basic
              color="teal"
              onClick={() => setHasAccount(prev => !prev)}
              style={{ marginLeft: '1rem' }}
            >
              {hasAccount ? 'Sign up' : 'Sign in'}
            </Button>
          </Message>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    isAuth: !!currentUser
  }
};

export default connect(mapStateToProps, { login, register })(LoginPage);