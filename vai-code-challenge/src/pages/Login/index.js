import React, { useState } from 'react';

import { Container, FormContainer } from './styles';
import { Input, Label, InputGroup, Button, Logo } from '../../styles/components';

function LoginPage() {
  const [values, setValues] = useState({ username: '', password: ''});

  const handleSubmit = e => {
    e.preventDefault();
  }

  return(
    <Container>
      <Logo bottom={16} src={require('../../assets/logo.png')} />
      <FormContainer onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor='username'>Username:</Label>
          <Input
            id='username'
            name='username'
            value={values.username}
            onChange={e => setValues({ ...values, username: e.target.value })}
          />
        </InputGroup>

        <InputGroup lastItem>
          <Label htmlFor='password'>Password:</Label>
          <Input
            type='password'
            id='password'
            name='password'
            value={values.password}
            onChange={e => setValues({ ...values, password: e.target.value })}
          />
        </InputGroup>

        <Button fullSize>Login</Button>
      </FormContainer>
    </Container>
  )
}

export default LoginPage;