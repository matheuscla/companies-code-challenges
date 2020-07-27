import React from 'react';

import Header from '../../components/Header';
import UserCard from '../../components/UserCard';
import Filters from '../../components/Filters';

import { Container } from './styles';
import { Row, Col } from 'react-grid-system';

function DashboardPage() {
  return(
    <>
      <Header />
      <Container>
        <Row>
        <Col sm={3}>
          <Filters />
        </Col>
        <Col sm={9}>
          <Row>
            <Col sm={3} xxl={2}>
              <UserCard />
            </Col>
            <Col sm={3} xxl={2}>
              <UserCard />
            </Col>
            <Col sm={3} xxl={2}>
              <UserCard />
            </Col>
            <Col sm={3} xxl={2}>
              <UserCard />
            </Col>
          </Row>
        </Col>
        </Row>
      </Container>
    </>
  );
}

export default DashboardPage;