import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../../store/ducks/users';

import Header from '../../components/Header';
import UserCard from '../../components/UserCard';
import Filters from '../../components/Filters';

import { Container, Link } from './styles';
import { Row, Col } from 'react-grid-system';

function DashboardPage() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.list);
  
  useEffect(() => {
    dispatch(fetchUsers());
  },[]);

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
            {users && users.map((user, index) => (
              <Col sm={3} xxl={2} key={index}>
                <Link to={`/users/${user?.login?.uuid}`}>
                  <UserCard user={user} />
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
        </Row>
      </Container>
    </>
  );
}

export default DashboardPage;