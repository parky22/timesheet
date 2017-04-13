import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRedirect, hashHistory} from 'react-routers';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Timesheet}/>
  </Router>,
  document.getElementById('app')
);
