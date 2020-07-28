import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-grid-system';

import { fetchUser } from '../../store/ducks/users';

import Header from '../../components/Header';
import UserInfo from '../../components/UserInfo';
import UserLocation from '../../components/UserLocation';

import { Container } from './styles';
import { Avatar } from '../../styles/components';

function UserProfilePage() {
  const { id } = useParams();
  const user = useSelector(state => state.users.selectedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [id]);

  return(
    <>
      <Header />
      <Container>
        <Row>
          <Col md={3}>
            <Avatar src={'https://randomuser.me/api/portraits/women/24.jpg'} />
          </Col>
          <Col md={9}>
            <UserInfo />
          </Col>
        </Row>

        <UserLocation top={15} />
      </Container>
    </>
  );
}

export default UserProfilePage;