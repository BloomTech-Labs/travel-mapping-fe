import React, { useState } from 'react';
import { Form, Segment, Button, Header } from 'semantic-ui-react';

const RegisterForm = ({ register }) => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    register(displayName, email, password);
  };

  return (
    <Form size="large">
      <Header as='h2' color='teal' textAlign='center'>
        Create your account
      </Header>
      <Segment>
        <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Display name"
            value={displayName}
            onChange={e => setDisplayName(e.target.value)}
          />
        <Form.Input
          fluid
          icon="mail"
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
          Register
        </Button>
      </Segment>
    </Form>
  )
};

export default RegisterForm;