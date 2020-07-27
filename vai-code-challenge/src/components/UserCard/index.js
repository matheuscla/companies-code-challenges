import React, { useMemo } from 'react';

import { Container, Avatar, CardInfo, Label, Divider  } from './styles';

function UserCard({ user }) {
  const renderFullName = useMemo(() => `${user?.name?.first} ${user?.name?.last}`, [user]);
  
  return(
    <Container>
      <Avatar alt={user?.name?.first} src={user?.picture?.large} />
      <CardInfo>
        <Label>
          <strong>Name:</strong> {renderFullName}
        </Label>
        <Divider />
        <Label>
          <strong>Age:</strong> {user?.registered?.age}
        </Label>
        <Divider />
        <Label>
          <strong>Gender:</strong> {user?.gender}
        </Label>
      </CardInfo>
    </Container>
  );
}

export default UserCard;