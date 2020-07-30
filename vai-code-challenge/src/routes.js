import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';

import PrivateRoute from './components/PrivateRoute';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/' component={Dashboard} />
        <PrivateRoute exact path='/users/:id' component={UserProfile} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;