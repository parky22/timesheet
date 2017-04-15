import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import Timesheet from './components/TimeSheet';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Timesheet} />
  </Router>,
  document.getElementById('app')
);
