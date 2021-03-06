import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/register';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';

const App = () => (
  <Router>
  <div>
      <Header />
      <div className="container">
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
      </div>
      </div>
  </Router>
)
export default App;
