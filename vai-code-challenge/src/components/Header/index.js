import React from 'react';

import { Container, Link, Logout } from './styles';
import { Logo } from '../../styles/components';

function Header() {
  return(
    <Container>
      <Logo small size={10} src={require('../../assets/logo.png')} />

      <div>
        <Link to='/dashboard'>Dashboard</Link>
        <Logout>Logout</Logout>
      </div>

    </Container>
  );
}

export default Header;