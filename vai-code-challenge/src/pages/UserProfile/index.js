import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-grid-system';

import { fetchUser } from '../../store/ducks/users';

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
    <Container>
      <Row>
        <Col md={3}>
          <Avatar src={user?.picture?.large} />
        </Col>
        <Col md={9}>
          <UserInfo user={user} />
        </Col>
      </Row>

      <UserLocation user={user} top={15} />
    </Container>
  );
}

export default UserProfilePage;