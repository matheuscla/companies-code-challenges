import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUser } from '../../store/ducks/users';

import Header from '../../components/Header';

function UserProfilePage() {
  const { id } = useParams();
  const user = useSelector(state => state.users.selectedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [id]);

  return(
    <Header />
  );
}

export default UserProfilePage;