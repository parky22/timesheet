import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import Timesheet from './components/TimeSheet';
import Login from './components/Login';

ReactDOM.render(
  <Router history={hashHistory}>
  <Route path="/">
    <Route path="/login" component={Login} />
    <Route path="/timesheet" component={Timesheet} />
  </Route>
  </Router>,
  document.getElementById('app')
);
