import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;