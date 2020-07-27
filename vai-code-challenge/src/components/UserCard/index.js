import React from 'react';

import { Container, Avatar, CardInfo, Label, Divider  } from './styles';

function UserCard() {
  return(
    <Container>
      <Avatar src='https://randomuser.me/api/portraits/lego/1.jpg' />
      <CardInfo>
        <Label>
          <strong>Name:</strong> teste
        </Label>
        <Divider />
        <Label>
          <strong>Age:</strong> 20
        </Label>
        <Divider />
        <Label>
          <strong>Gender:</strong> 20
        </Label>
      </CardInfo>
    </Container>
  );
}

export default UserCard;