import React from 'react';
import ReactLoading from 'react-loading';

import { Container } from './styles';

function Loading() {
  return(
    <Container>
      <ReactLoading width={40} height={40} type='spin' color='#fff' />
      <p>Loading</p>
    </Container>
  );
}

export default Loading;