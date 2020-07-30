import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillTrash2Fill } from 'react-icons/bs';
import { Row, Col } from 'react-grid-system';

import { fetchUsers, removeUser } from '../../store/ducks/users';

import UserCard from '../../components/UserCard';
import Filters from '../../components/Filters';

import { Container, Link, RemoveIcon, CardContainer } from './styles';

function DashboardPage() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.list);
  
  useEffect(() => {
    dispatch(fetchUsers());
  },[]);

  return(
    <Container>
      <Row>
      <Col sm={3}>
        <Filters />
      </Col>
      <Col sm={9}>
        <Row>
          {users && users.map((user, index) => (
            <Col sm={3} xxl={2} key={index}>
              <CardContainer>
                <RemoveIcon onClick={() => dispatch(removeUser(user.login.uuid))}>
                  <BsFillTrash2Fill />
                </RemoveIcon>
                <Link to={`/users/${user?.login?.uuid}`}>
                  <UserCard user={user} />
                </Link>
              </CardContainer>
            </Col>
          ))}
        </Row>
      </Col>
      </Row>
    </Container>
  );
}

export default DashboardPage;