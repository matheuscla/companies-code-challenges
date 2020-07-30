import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../Header';

function PrivateRoute({ component: Component, ...rest }) {
  const { logged } = useSelector(state => state.auth);

  return(
    <Route
      {...rest}
      render={props => 
        logged ? (
          <>
            <Header />
            <Component {...props}/> 
          </>
        ) : <Redirect to='/login' />
      }
    />
  );
}

export default PrivateRoute;