import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;