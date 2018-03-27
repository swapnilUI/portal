import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import Login from './components/login/Login';

const Routes = () => (
  <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" exact component={Login} />
      </Switch>
  </Router>
)
export default Routes;
