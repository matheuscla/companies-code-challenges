import React from 'react';
import { useDispatch } from 'react-redux';

import { logout } from '../../store/ducks/auth';

import LanguagePicker from '../LanguagePicker';

import { Container, Link, Logout } from './styles';
import { Logo } from '../../styles/components';

function Header() {
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  }
  return(
    <Container>
      <Logo small size={10} src={require('../../assets/logo.png')} />

      <div>
        <LanguagePicker />
        <Link to='/dashboard'>Dashboard</Link>
        <Logout onClick={logoutUser}>Logout</Logout>
      </div>

    </Container>
  );
}

export default Header;