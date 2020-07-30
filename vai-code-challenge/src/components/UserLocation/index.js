import React, { useMemo } from 'react';

import { Container, Title, Divider, Label } from './styles';

function UserLocation({ top, user }) {
  const fullAddress = useMemo(() => {
    return `${user?.location?.street?.name} - ${user?.location?.street?.number}`
  }, [user]);
  
  return(
    <Container top={top}>
      <Title>User Location</Title>
      <Divider />

      <Label>
        <strong>Country:</strong> {user?.location?.country}
      </Label>
      <Label>
        <strong>State:</strong> {user?.location?.state}
      </Label>
      <Label>
        <strong>City:</strong> {user?.location?.city}
      </Label>
      <Label>
        <strong>Address:</strong> {fullAddress}
      </Label>
      <Label>
        <strong>Timezone:</strong> {`${user?.location?.timezone?.offset} UTC`}
      </Label>
    </Container>
  );
}

export default UserLocation;