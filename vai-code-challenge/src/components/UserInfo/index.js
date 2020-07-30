import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-grid-system';

import EditUserForm from '../EditUserForm';

import { Container, Label, Title, Divider, Header, EditBtn } from './styles';

function UserInfo({ user }) {
  const [editVisible, setEditVisible] = useState(false);

  return(
    <Container>
      <Header>
        <Title>User Info</Title>
        {!editVisible && <EditBtn onClick={() => setEditVisible(!editVisible)}>Edit user</EditBtn>}
      </Header>
      <Divider />

      {editVisible ? <EditUserForm editVisible={editVisible} hideVisible={() => setEditVisible(false)} /> : (
        <>
          <Row>
            <Col sm={6}>
              <Label>
                <strong>Name:</strong> {`${user?.name?.first} ${user?.name?.last}`}
              </Label>
              <Label>
                <strong>Email:</strong> {user?.email}
              </Label>
              <Label>
                <strong>Phone:</strong> {user?.phone}
              </Label>
              <Label>
                <strong>Birthday:</strong> {user?.dob?.date}
              </Label>
            </Col>
            <Col sm={6}>
              <Label>
                <strong>Age:</strong> {user?.dob?.age}
              </Label>
              <Label>
                <strong>Gender:</strong> {user?.gender}
              </Label>
              <Label>
                <strong>Nationality:</strong> {user?.nat}
              </Label>
            </Col>
          </Row>
        </>
      ) }
    </Container>
  );
}

export default UserInfo;