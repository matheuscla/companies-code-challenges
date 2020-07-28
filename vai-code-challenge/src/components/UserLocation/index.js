import React from 'react';

import { Container, Title, Divider, Label } from './styles';

function UserLocation({ top }) {
  return(
    <Container top={top}>
      <Title>User Location</Title>
      <Divider />

      <Label>
        <strong>Country:</strong> dasdsadsa
      </Label>
      <Label>
        <strong>State:</strong> dasdsadsa
      </Label>
      <Label>
        <strong>City:</strong> dasdsadsa
      </Label>
      <Label>
        <strong>Address:</strong> dasdsadsa
      </Label>
      <Label>
        <strong>Timezone:</strong> dasdsadsa
      </Label>
    </Container>
  );
}

export default UserLocation;