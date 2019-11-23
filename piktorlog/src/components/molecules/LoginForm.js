import React, { useState } from 'react';
import { Form, Segment, Button, Header } from 'semantic-ui-react';

const LoginForm = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    login(email, password);
  };

  return (
    <Form size="large">
      <Header as='h2' color='teal' textAlign='center'>
        Login to your account
      </Header>
      <Segment stacked>
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="E-mail address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button color='teal' fluid size='large' onClick={submit}>
          Login
        </Button>
      </Segment>
    </Form>
  )
};

export default LoginForm;