import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillTrash2Fill } from 'react-icons/bs';
import { Row, Col } from 'react-grid-system';

import { fetchUsers, removeUser } from '../../store/ducks/users';

import UserCard from '../../components/UserCard';
import Loading from '../../components/Loading';

import { Container, Link, RemoveIcon, CardContainer, LoadMore } from './styles';
import { Button } from '../../styles/components';

function DashboardPage() {
  const dispatch = useDispatch();
  const { list: users, loading  } = useSelector(state => state.users);
  
  const [page, setPage] = useState(16);
  
  useEffect(() => {
    dispatch(fetchUsers(page));
  },[dispatch, page]);

  return(
    <Container>
      {loading ? <Loading /> : (
        <>
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
          <LoadMore>
            <Button onClick={() => setPage(page + 16)}>Load more</Button>
          </LoadMore>
        </>
      )}
    </Container>
  );
}

export default DashboardPage;