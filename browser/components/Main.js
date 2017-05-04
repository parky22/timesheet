import React from 'react';
import { Link } from 'react-router';

const Main = (props) => {
  return (
    <div>
      <h1> Broadway Auto Parts Timesheet </h1>
      <h3><Link to="/employee">Create Employee Account</Link></h3>
      <h3><Link to="/timesheet">Submit Time</Link></h3>
      {props.children}
    </div>
  )
};

export default Main;
