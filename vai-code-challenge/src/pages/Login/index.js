import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../store/ducks/auth';

import { Container, FormContainer } from './styles';
import { Input, Label, InputGroup, Button, Logo } from '../../styles/components';

function LoginPage({ history }) {
  const dispatch = useDispatch();
  const [values, setValues] = useState({ username: '', password: ''});

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(login());

      history.push('/dashboard');
    } catch(e) {
      console.error('Error', e);
    }
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
            required
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
            required
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