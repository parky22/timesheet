import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import Timesheet from './components/TimeSheet';
import Employee from './components/Employee';
import Main from './components/Main';

ReactDOM.render(
  <Router history={hashHistory}>
  <Route path="/" component={Main}>
    <Route path="/timesheet" component={Timesheet} />
    <Router path ="/employee" component={Employee} />
  </Route>
  </Router>,
  document.getElementById('app')
);
