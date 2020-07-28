import React from 'react';
import { Row, Col } from 'react-grid-system';

import { Container, Label, Title, Divider } from './styles';

function UserInfo() {
  return(
    <Container>
      <Title>User Info</Title>
      <Divider />
      <Row>
        <Col sm={6}>
          <Label>
            <strong>Name:</strong> dasdsadsa
          </Label>
          <Label>
            <strong>Email:</strong> dasdsadsa
          </Label>
          <Label>
            <strong>Phone:</strong> dasdsadsa
          </Label>
          <Label>
            <strong>Birthday:</strong> dasdsadsa
          </Label>
        </Col>
        <Col sm={6}>
          <Label>
            <strong>Age:</strong> dasdsadsa
          </Label>
          <Label>
            <strong>Gender:</strong> dasdsadsa
          </Label>
          <Label>
            <strong>Nationality:</strong> dasdsadsa
          </Label>
        </Col>
      </Row>
    </Container>
  );
}

export default UserInfo;